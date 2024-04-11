package tServer

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/AGUA1024/tQuick/tIRoute"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"github.com/gin-gonic/gin"
	"github.com/xeipuuv/gojsonschema"
	"net/http"
	"reflect"
	"strings"
)

// 注册的controller集合
var RouteGroupMiddlewaresMap = map[string][]tIRoute.IController{}

type Controller struct {
	MiddleWares []gin.HandlerFunc
}

type Api struct {
	Method     string
	ReqPath    string
	Group      string
	Act        string
	arrReqType []reflect.Type
	RspType    reflect.Type
	HandleFunc reflect.Value
}

type ApiSet struct {
	Get     *Api
	Post    *Api
	Put     *Api
	Patch   *Api
	Trace   *Api
	Head    *Api
	Options *Api
	Delete  *Api
	Connect *Api
	Any     *Api
}

func (a Api) GetMethod() string {
	return a.Method
}

func (a *Api) GetReqPath() string {
	return a.ReqPath
}

func (a *Api) GetGroup() string {
	return a.Group
}

func (a *Api) GetAct() string {
	return a.Act
}

func (this *Controller) WithMiddleWares(f ...gin.HandlerFunc) tIRoute.IController {
	this.MiddleWares = append(this.MiddleWares, f...)
	return this
}

func (this *Controller) GetMiddleWares() []gin.HandlerFunc {
	return this.MiddleWares
}

func (this *Controller) GetRouteGroup() string {
	tp := reflect.TypeOf(this).Elem()
	for i := 0; i < tp.NumField(); i++ {
		// 获取继承对象的group值
		if tp.Field(i).Anonymous == true {
			parentTp := tp.Field(i).Type

			// 从基类对象获取group值
			group := parentTp.Field(0).Tag.Get("group")
			if group == "" {
				continue
			}

			return group
		}
	}

	return ""
}

func RouteRegister(ctrl tIRoute.IController, middlewares ...gin.HandlerFunc) {
	routeGroup := ctrl.GetRouteGroup()
	ctrl.WithMiddleWares(middlewares...)

	if _, ok := RouteGroupMiddlewaresMap[routeGroup]; !ok {
		RouteGroupMiddlewaresMap[routeGroup] = []tIRoute.IController{ctrl}
	} else {
		RouteGroupMiddlewaresMap[routeGroup] = append(RouteGroupMiddlewaresMap[ctrl.GetRouteGroup()], ctrl)
	}
}

func RouteGroupRegister(routeGroup tIRoute.IController, middlewares ...gin.HandlerFunc) {
	group := routeGroup.GetRouteGroup()

	if group == "" {
		errMsg := "<In RouteGroupRegister> RouteGroup is missing group configuration"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	// 给路由组的路由全部注册上中间件
	for k := range RouteGroupMiddlewaresMap[group] {
		RouteGroupMiddlewaresMap[group][k].WithMiddleWares(middlewares...)
	}
}

func (s Server) RouteRegister(RouteGroupMiddlewaresMap map[string][]tIRoute.IController) {
	for routeGroup, arrCtrl := range RouteGroupMiddlewaresMap {
		for _, ctrl := range arrCtrl {
			// ctrl复制同名局部变量，以防止影响闭包函数的入参
			ctrl := ctrl
			st := reflect.TypeOf(ctrl)

			var field reflect.StructField
			if st.Kind() == reflect.Ptr {
				field = st.Elem().Field(0)
			} else {
				field = st.Field(0)
			}

			if field.Tag.Get("route") == "" {
				errMsg := "<In RouteRegister> Controller is missing routing configuration"
				tLog.Error(errMsg)
				panic(errMsg)
			}

			if field.Tag.Get("method") == "" {
				errMsg := "<In RouteRegister> Controller is missing the configuration of the http method"
				tLog.Error(errMsg)
				panic(errMsg)
			}

			arrReqType := []reflect.Type{}

			handleFunc, ok := st.MethodByName("Handle")
			if !ok {
				errMsg := "<In RouteRegister> The api lacks a handle function"
				tLog.Error(errMsg)
				panic(errMsg)
			}

			for i := 1; i < handleFunc.Type.NumIn(); i++ {
				paramType := handleFunc.Type.In(i)
				if paramType == reflect.TypeOf(&gin.Context{}) {
					continue
				}
				arrReqType = append(arrReqType, paramType)
			}

			// 构造api实例对象
			api := &Api{
				Method:     strings.ToUpper(field.Tag.Get("method")),
				ReqPath:    field.Tag.Get("route"),
				Group:      routeGroup,
				Act:        field.Tag.Get("act"),
				arrReqType: arrReqType,
				RspType:    handleFunc.Type.Out(0),
				HandleFunc: handleFunc.Func,
			}

			// 注册api到服务器
			s.ApiRegister(api)

			// 构造handle函数
			handelFunc := func(c *gin.Context) {
				handleFuncParma := []reflect.Value{
					reflect.ValueOf(ctrl),
					reflect.ValueOf(c),
				}

				for _, reqType := range arrReqType {
					if reqType.Kind() != reflect.Pointer {
						reqType = reflect.PtrTo(reqType)
					}

					decodeFunc, ok := reqType.MethodByName("ReqDecode")
					if !ok {
						errMsg := "<In RouteRegister> request obj error!"
						tLog.Error(errMsg)
						panic(errMsg)
						return
					}

					arrRetValue := decodeFunc.Func.Call(
						[]reflect.Value{reflect.New(reqType.Elem()), reflect.ValueOf(c), reflect.ValueOf(reqType)},
					)

					param := arrRetValue[0].Interface()
					err, ok := arrRetValue[1].Interface().(error)

					if ok && err != nil {
						c.JSON(http.StatusBadRequest,
							gin.H{
								"Code": http.StatusBadRequest,
								"Msg":  err.Error(),
							},
						)
						return
					}

					handleFuncParma = append(handleFuncParma, reflect.ValueOf(param))
				}

				retValue := api.HandleFunc.Call(handleFuncParma)

				if !c.Writer.Written() {
					c.JSON(200, retValue[0].Interface())
				}
			}

			// 注册handel函数
			switch api.Method {
			case http.MethodGet, http.MethodPost, http.MethodPut, http.MethodPatch, http.MethodTrace,
				http.MethodHead, http.MethodOptions, http.MethodDelete, http.MethodConnect, "ANY":

				if api.Method == "ANY" {
					s.g.Any(api.ReqPath, append(ctrl.GetMiddleWares(), handelFunc)...)
				} else {
					s.g.Handle(api.Method, api.ReqPath, append(ctrl.GetMiddleWares(), handelFunc)...)
				}

			default:
				fmt.Errorf("error Method")
			}
		}
	}
}

func generateJSONSchemaData(t reflect.Type) string {
	schema := schemaFromType(t)
	jsonBytes, err := json.Marshal(schema)
	if err != nil {
		panic(err)
	}
	return string(jsonBytes)
}

func schemaFromType(t reflect.Type) interface{} {
	switch t.Kind() {
	case reflect.Struct:
		properties := map[string]interface{}{}
		required := []string{}
		for i := 0; i < t.NumField(); i++ {
			field := t.Field(i)

			// 跳过匿名对象，即跳过继承类的判断
			if field.Anonymous {
				continue
			}

			fieldName := field.Name
			if tagValue := field.Tag.Get("json"); tagValue != "" {
				fieldName = strings.Split(tagValue, ",")[0]
			}
			properties[fieldName] = schemaFromType(field.Type)
			if strings.ToLower(field.Tag.Get("required")) != "false" {
				required = append(required, fieldName)
			}
		}

		result := map[string]interface{}{
			"type":       "object",
			"properties": properties,
		}
		if len(required) > 0 {
			result["required"] = required
		}
		return result
	case reflect.Array, reflect.Slice:
		elemType := schemaFromType(t.Elem())
		return map[string]interface{}{
			"type":  "array",
			"items": elemType,
		}
	case reflect.String:
		return map[string]interface{}{
			"type": "string",
		}
	case reflect.Int, reflect.Int32, reflect.Int64:
		return map[string]interface{}{
			"type": "integer",
		}
	case reflect.Float32, reflect.Float64:
		return map[string]interface{}{
			"type": "number",
		}
	case reflect.Bool:
		return map[string]interface{}{
			"type": "boolean",
		}
	case reflect.Map:
		keySchema := schemaFromType(t.Key())
		elemSchema := schemaFromType(t.Elem())
		return map[string]interface{}{
			"type": "object",
			"additionalProperties": map[string]interface{}{
				"keys":   keySchema,
				"values": elemSchema,
			},
		}
	// ...处理其他需要支持的数据类型
	default:
		panic(fmt.Sprintf("Unsupported type: %v", t))
	}
}

// 判断request json对象必选参数是否缺失
func isJsonParamMissed(reqBuf []byte, reqType reflect.Type) (bool, error) {
	reqTp := reqType
	if reqTp.Kind() == reflect.Pointer {
		reqTp = reqTp.Elem()
	}
	strLoader := generateJSONSchemaData(reqTp)
	schemaLoader := gojsonschema.NewStringLoader(strLoader)
	docLoader := gojsonschema.NewStringLoader(string(reqBuf))
	result, err := gojsonschema.Validate(schemaLoader, docLoader)
	if err != nil {
		return true, err
	}

	if result.Valid() {
		return false, nil
	} else {
		errMsg := ""
		for _, desc := range result.Errors() {
			errMsg += fmt.Sprintf("- %s\n", desc)
		}
		return true, errors.New(errMsg)
	}
}

func getComponents(schemas map[string]*openApi.SchemaRef, apiSet *ApiSet) {
	f := func(schemaRefs map[string]*openApi.SchemaRef, api *Api) {
		if api == nil {
			return
		}

		tpStack := []reflect.Type{}
		// 请求参数
		for _, v := range api.arrReqType {
			// 指针类型兼容
			if v.Kind() == reflect.Pointer {
				v = v.Elem()
			}

			tpStack = append(tpStack, v)
		}

		tpStack = append(tpStack, api.RspType)

		for len(tpStack) > 0 {
			tp := tpStack[0]
			tpStack = tpStack[1:]

			// 兼容指针类型和数组类型，若是指针类型则将tp的值设置为指针所指的地址的值
			if tp.Kind() == reflect.Pointer {
				tp = tp.Elem()
			}

			switch tp.Kind() {
			case reflect.Struct:
				refPath := strings.Replace(tp.PkgPath()+"/"+tp.Name(), "/", ".", -1)

				ref, arrTypeNode := getSchemaRef(tp)
				tpStack = append(tpStack, arrTypeNode...)
				schemaRefs[refPath] = ref
			case reflect.Slice:
				for tp.Kind() == reflect.Slice {
					tp = tp.Elem()
				}

				// 过滤基础数据类型
				if tp.Kind() != reflect.Struct {
					continue
				}

				refPath := strings.Replace(tp.PkgPath()+"/"+tp.Name(), "/", ".", -1)

				ref, arrTypeNode := getSchemaRef(tp)
				tpStack = append(tpStack, arrTypeNode...)
				schemaRefs[refPath] = ref
			}
		}
	}

	f(schemas, apiSet.Put)
	f(schemas, apiSet.Post)
	f(schemas, apiSet.Get)
	f(schemas, apiSet.Trace)
	f(schemas, apiSet.Head)
	f(schemas, apiSet.Connect)
	f(schemas, apiSet.Delete)
	f(schemas, apiSet.Options)
	f(schemas, apiSet.Patch)

	return
}

func getSchemaRef(tp reflect.Type) (*openApi.SchemaRef, []reflect.Type) {
	properties := map[string]any{}
	arrRequired := []string{}
	arrParamType := []reflect.Type{}

	for i := 0; i < tp.NumField(); i++ {
		field := tp.Field(i)

		// 跳过匿名字段，目的是跳过继承来的对象
		if field.Anonymous == true {
			continue
		}

		// 必须字段判断
		if strings.ToLower(field.Tag.Get("required")) != "false" {
			arrRequired = append(arrRequired, field.Name)
		}

		fiedType := field.Type
		// 结构体类型递归判断
		if fiedType.Kind() == reflect.Struct {
			refPath := strings.Replace(field.Type.PkgPath()+"/"+field.Type.Name(), "/", ".", -1)
			properties[field.Name] = openApi.Propertie{
				Description: field.Tag.Get("desc"),
				Ref:         "#/components/schemas/" + refPath,
			}
			arrParamType = append(arrParamType, fiedType)
		} else if fiedType.Kind() == reflect.Slice {
			propertie := openApi.Propertie{
				Type:  TypeArray,
				Items: getItems(fiedType, 0),
			}

			properties[field.Name] = propertie

			arrParamType = append(arrParamType, fiedType)
		} else { // 常规类型
			swgType, _ := goType2SwaggerTypeAndFormat(fiedType.Name())
			properties[field.Name] = openApi.Propertie{
				Description: field.Tag.Get("desc"),
				Type:        swgType,
			}
		}
	}

	return &openApi.SchemaRef{
		Properties: properties,
		Type:       TypeObject,
		Required:   arrRequired,
	}, arrParamType
}
