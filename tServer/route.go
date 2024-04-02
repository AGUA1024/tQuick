package tServer

import (
	"fmt"
	"github.com/AGUA1024/tQuick/tIRoute"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"github.com/gin-gonic/gin"
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
		panic("<In RouteGroupRegister> RouteGroup is missing group configuration")
	}

	// 给路由组的路由全部注册上中间件
	for k := range RouteGroupMiddlewaresMap[group] {
		RouteGroupMiddlewaresMap[group][k].WithMiddleWares(middlewares...)
	}
}

func (s Server) RouteRegister(RouteGroupMiddlewaresMap map[string][]tIRoute.IController) {
	for routeGroup, arrCtrl := range RouteGroupMiddlewaresMap {
		for _, ctrl := range arrCtrl {
			st := reflect.TypeOf(ctrl)

			var field reflect.StructField
			if st.Kind() == reflect.Ptr {
				field = st.Elem().Field(0)
			} else {
				field = st.Field(0)
			}

			if field.Tag.Get("route") == "" {
				panic("<In RouteRegister> Controller is missing routing configuration")
			}

			if field.Tag.Get("method") == "" {
				panic("<In RouteRegister> Controller is missing the configuration of the http method")
			}

			arrReqType := []reflect.Type{}

			handleFunc, ok := st.MethodByName("Handle")
			if !ok {
				panic("<In RouteRegister> The api lacks a handle function")
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
						panic("<In RouteRegister> request obj error!")
						return
					}

					arrRetValue := decodeFunc.Func.Call(
						[]reflect.Value{reflect.New(reqType.Elem()), reflect.ValueOf(c), reflect.ValueOf(reqType)},
					)

					param := arrRetValue[0].Interface()
					err, ok := arrRetValue[1].Interface().(error)

					if ok && err != nil {
						c.JSON(http.StatusBadRequest, err.Error())
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

// 判断request json对象必选参数是否缺失
func isParamMissed(jsonInstance reflect.Value) bool {
	for i := 0; i < jsonInstance.NumField(); i++ {
		fieldValue := jsonInstance.Field(i)
		fieldType := jsonInstance.Type().Field(i)

		// 跳过匿名对象，即跳过继承类的判断
		if fieldType.Anonymous {
			continue
		}

		// 如果是可选项则跳过判断
		if strings.ToLower(fieldType.Tag.Get("required")) == "false" || fieldType.Anonymous {
			continue
		}

		// 结构体类型递归判断
		if fieldValue.Type().Kind() == reflect.Struct {
			if isParamMissed(fieldValue) {
				return true
			}
		}

		// 基础数据类型直接判断
		if fieldValue.IsZero() {
			return true
		}
	}

	return false
}

func getComponents(schemas map[string]*openApi.SchemaRef, apiSet *ApiSet) {
	f := func(schemaRefs map[string]*openApi.SchemaRef, api *Api) {
		if api == nil {
			return
		}

		typeStack := []reflect.Type{}
		for _, v := range api.arrReqType {
			// 指针类型兼容
			if v.Kind() == reflect.Pointer {
				v = v.Elem()
			}

			for i := 0; i < v.NumField(); i++ {
				// 跳过匿名字段，目的是跳过继承来的对象
				if v.Field(i).Anonymous == true {
					continue
				}
				typeStack = append(typeStack, v.Field(i).Type)
			}
		}

		typeStack = append(typeStack, api.RspType)

		for len(typeStack) > 0 {
			tp := typeStack[0]
			typeStack = typeStack[1:]

			// 兼容指针类型，若是指针类型则将tp的值设置为指针所指的地址的值
			if tp.Kind() == reflect.Pointer {
				tp = tp.Elem()
			}

			if tp.Kind() == reflect.Struct {
				ref, arrTypeNode := getSchemaRef(tp)
				typeStack = append(typeStack, arrTypeNode...)
				schemaRefs[tp.PkgPath()+"/"+tp.Name()] = ref
			}
		}

		//schemaRefs[api.ReqType.Elem().PkgPath()+"/"+api.ReqType.Elem().Name()] = &openApi.SchemaRef{
		//	Properties: getParmas(api.ReqType),
		//	Type:       api.ReqType.Name(),
		//	Required:   []string{},
		//}
		//
		//schemaRefs[api.RspType.Elem().PkgPath()+"/"+api.RspType.Elem().Name()] = &openApi.SchemaRef{
		//	Properties: getParmas(api.RspType),
		//	Type:       api.RspType.Name(),
		//	Required:   []string{},
		//}
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

		// 结构体类型递归判断
		if field.Type.Kind() == reflect.Struct {
			properties[field.Name] = openApi.Propertie{
				Description: field.Tag.Get("desc"),
				Ref:         "#/components/schemas/" + field.Type.PkgPath() + "/" + field.Type.Name(),
			}
			arrParamType = append(arrParamType, field.Type)
		} else { // 常规类型
			swgType,swgFormat := goType2SwaggerTypeAndFormat(field.Type.Name())
			properties[field.Name] = openApi.Propertie{
				Description: field.Tag.Get("desc"),
				Type:        swgType,
				Format:      swgFormat,
			}
		}
	}

	return &openApi.SchemaRef{
		Properties: properties,
		Type:       tp.Name(),
		Required:   arrRequired,
	}, arrParamType
}
