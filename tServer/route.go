package tServer

import (
	"errors"
	"fmt"
	"net/http"
	"reflect"
	"strings"

	"github.com/AGUA1024/tQuick/tIRoute"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/gin-gonic/gin"
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
	ReqTypeSet ReqSet
	RspType    reflect.Type
	HandleFunc reflect.Value
}

type ReqSet struct {
	Body   reflect.Type
	Form   reflect.Type
	Query  reflect.Type
	Uri    reflect.Type
	Header reflect.Type
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

			reqTypeSet := ReqSet{}

			handleFunc, ok := st.MethodByName("Handle")
			if !ok {
				errMsg := "<In RouteRegister> The api lacks a handle function"
				tLog.Error(errMsg)
				panic(errMsg)
			}

			for i := 1; i < handleFunc.Type.NumIn(); i++ {
				paramType := handleFunc.Type.In(i)

				if reflect.TypeOf(&gin.Context{}) == paramType {
					continue
				}

				GetParmaTypeFunc, ok := paramType.MethodByName("GetHttpParmaType")
				if !ok {
					errMsg := "<In RouteRegister> GetHttpParmaType Nofound"
					tLog.Error(errMsg)
					panic(errMsg)
				}

				tp := GetParmaTypeFunc.Func.Call([]reflect.Value{
					reflect.New(paramType.Elem()),
				})[0].String()

				switch tp {
				case ParameterInBody:
					reqTypeSet.Body = paramType
				case ParameterInQuery:
					reqTypeSet.Query = paramType
				case ParameterInFormData:
					reqTypeSet.Form = paramType
				case ParameterInPath:
					reqTypeSet.Uri = paramType
				case ParameterInHeader:
					reqTypeSet.Header = paramType
				}
			}

			// 构造api实例对象
			api := &Api{
				Method:     strings.ToUpper(field.Tag.Get("method")),
				ReqPath:    field.Tag.Get("route"),
				Group:      routeGroup,
				Act:        field.Tag.Get("act"),
				ReqTypeSet: reqTypeSet,
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

				f := func(reqType reflect.Type) error {
					if reqType == nil {
						return nil
					}

					if reqType.Kind() != reflect.Pointer {
						reqType = reflect.PtrTo(reqType)
					}

					decodeFunc, ok := reqType.MethodByName("ReqDecode")
					if !ok {
						errMsg := "<In RouteRegister> request obj error!"
						tLog.Error(errMsg)
						return errors.New(errMsg)
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
						return err
					}

					handleFuncParma = append(handleFuncParma, reflect.ValueOf(param))
					return nil
				}

				if f(reqTypeSet.Body) != nil {
					return
				}

				if f(reqTypeSet.Form) != nil {
					return
				}

				if f(reqTypeSet.Uri) != nil {
					return
				}

				if f(reqTypeSet.Query) != nil {
					return
				}

				if f(reqTypeSet.Header) != nil {
					return
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
