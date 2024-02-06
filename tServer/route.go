package tServer

import (
	"encoding/json"
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
	Get  *Api
	Post  *Api
	Put  *Api
	Patch  *Api
	Trace  *Api
	Head  *Api
	Options  *Api
	Delete  *Api
	Connect  *Api
	Any *Api
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
		reqBodyJson, _ := c.GetRawData()
		js,_ :=json.Marshal(c.Request)
		fmt.Println(string(js))
		reqBodyType := api.ReqType
		param := reflect.New(reqBodyType.Elem()).Interface()

		//fmt.Println("params:", reflect.New(reqBodyType.Elem()).Type())
		// 解析JSON数据到参数实例
		err := json.Unmarshal(reqBodyJson, param)
		if err != nil {
			c.String(http.StatusBadRequest, "Invalid Json Request:", err)
			return
		}

		indirectParam := reflect.Indirect(reflect.ValueOf(param))
		if isJsonParamMissed(indirectParam) {
			c.String(http.StatusBadRequest, "Invalid Json Request: ParamMissed")
			return
		}
		retValue := api.HandleFunc.Call([]reflect.Value{
			reflect.ValueOf(ctrl),
			reflect.ValueOf(c),
			reflect.ValueOf(param),
		})

		if !c.Writer.Written(){
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

		// 如果是可选项则跳过判断
		if strings.Contains(jsonInstance.Type().Field(i).Tag.Get("json"), "omitempty") {
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


func getComponents(schemas map[string]*openApi.SchemaRef, apiSet *ApiSet){
	f := func(schemaRefs map[string]*openApi.SchemaRef, api *Api) {
		if api == nil {
			return
		}

		schemaRefs[api.ReqType.Elem().PkgPath() +"/"+ api.ReqType.Elem().Name()] = &openApi.SchemaRef{
			Properties: getParmas(api.ReqType),
			Type:       api.ReqType.Name(),
			Required:   []string{},
		}

		schemaRefs[api.RspType.Elem().PkgPath() + "/"+api.RspType.Elem().Name()] = &openApi.SchemaRef{
			Properties: getParmas(api.RspType),
			Type:       api.RspType.Name(),
			Required:   []string{},
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

// 判断request json对象必选参数是否缺失
func getParmas(tp reflect.Type) map[string]any{
	instant := tp.Elem()

	ret := map[string]any{}

	for i := 0; i < instant.NumField(); i++ {
		field := instant.Field(i)

		// 结构体类型递归判断
		if field.Type.Kind() == reflect.Struct {
			ret[field.Name] = openApi.Propertie{
				Format:      field.Type.Name(),
				Description: field.Tag.Get("desc"),
				Properties:  getParmas(field.Type),
				Type:        field.Type.Name(),
			}
		}else{	// 常规类型
			ret[field.Name] = openApi.Propertie{
				Format:      field.Type.Name(),
				Description: field.Tag.Get("desc"),
				Properties:  nil,
				Type:        field.Type.Name(),
			}
		}
	}

	return ret
}