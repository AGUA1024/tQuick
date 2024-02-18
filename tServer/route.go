package tServer

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"reflect"
	"strings"
	"tQuick/tServer/openApi"
)

type IController interface {
	RegisterApi() bool
}

type Controller struct {
}

type Api struct {
	Method     string
	ReqPath    string
	Group      string
	Act        string
	ReqType    reflect.Type
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

func (this Controller) RegisterApi() bool {
	// todo
	return true
}

func RouteRegister(ctrl IController) {
	st := reflect.TypeOf(ctrl)

	// controller合法性鉴定
	if st.NumMethod() != 2 {
		panic("The controller binds too many methods, but only one Method is allowed to be bound")
	}

	field := st.Field(0)
	if field.Tag.Get("route") == "" {
		panic("Controller is missing routing configuration")
	}

	if field.Tag.Get("method") == "" {
		panic("Controller is missing the configuration of the http method")
	}

	// 构造api实例对象
	api := &Api{
		Method:     strings.ToUpper(field.Tag.Get("method")),
		ReqPath:    field.Tag.Get("route"),
		Group:      field.Tag.Get("group"),
		Act:        field.Tag.Get("act"),
		ReqType:    st.Method(0).Type.In(2),
		RspType:    st.Method(0).Type.Out(0),
		HandleFunc: st.Method(0).Func,
	}

	// 注册api到服务器
	GetServer().ApiRegister(api)

	// 构造handle函数
	handelFunc := func(c *gin.Context) {
		decodeFunc, ok := st.Method(0).Type.In(2).MethodByName("ReqDecode")
		if !ok {
			panic("request obj error!")
			return
		}

		arrRetValue := decodeFunc.Func.Call(
			[]reflect.Value{reflect.New(api.ReqType.Elem()), reflect.ValueOf(c), reflect.ValueOf(api.ReqType)},
		)

		param := arrRetValue[0].Interface()
		err, ok := arrRetValue[1].Interface().(error)

		if ok && err != nil {
			c.JSON(http.StatusBadRequest, err.Error())
			return
		}
		retValue := api.HandleFunc.Call([]reflect.Value{
			reflect.ValueOf(ctrl),
			reflect.ValueOf(c),
			reflect.ValueOf(param),
		})

		if !c.Writer.Written() {
			c.JSON(200, retValue[0].Interface())
		}
	}

	// 注册handel函数
	switch api.Method {
	case http.MethodGet, http.MethodPost, http.MethodPut, http.MethodPatch, http.MethodTrace,
		http.MethodHead, http.MethodOptions, http.MethodDelete, http.MethodConnect, "ANY":

		if api.Method == "ANY" {
			Serv.g.Any(api.ReqPath, handelFunc)
		} else {
			Serv.g.Handle(api.Method, api.ReqPath, handelFunc)
		}

	default:
		fmt.Errorf("error Method")
	}
}

// 判断request json对象必选参数是否缺失
func isJsonParamMissed(jsonInstance reflect.Value) bool {
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
			if isJsonParamMissed(fieldValue) {
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

		typeStack := []reflect.Type{api.ReqType, api.RspType}
		//instant := api.ReqType.Elem()
		//for i := 0; i < instant.NumField(); i++ {
		//	field := instant.Field(i)
		//	// 跳过匿名字段，目的是跳过继承来的对象
		//	if field.Anonymous == true {
		//		continue
		//	}
		//
		//	fmt.Println(field.Name, field.Tag.Get("required"))
		//}

		for len(typeStack) > 0 {
			tp := typeStack[0]
			typeStack = typeStack[1:]

			// 兼容指针类型，若是指针类型则将tp的值设置为指针所指的地址的值
			if tp.Kind() == reflect.Pointer {
				tp = tp.Elem()
			}

			ref, arrTypeNode := getSchemaRef(tp)
			typeStack = append(typeStack, arrTypeNode...)

			schemaRefs[tp.PkgPath()+"/"+tp.Name()] = ref
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

// 判断request json对象必选参数是否缺失
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
			properties[field.Name] = openApi.Propertie{
				Format:      field.Type.Name(),
				Description: field.Tag.Get("desc"),
				Type:        field.Type.Name(),
			}
		}
	}

	return &openApi.SchemaRef{
		Properties: properties,
		Type:       tp.Name(),
		Required:   arrRequired,
	}, arrParamType
}
