package tServer

import (
	"fmt"
	"net/http"
	"reflect"
	"strings"

	"github.com/AGUA1024/tQuick/tIRoute"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/gin-gonic/gin"
)

// 服务器路由数据载体
var ServApiHandle = &ApiHandle{
	RouteGroup: &BaseRouteGroup{},
}

type ApiHandle struct {
	RouteGroup *BaseRouteGroup
}

type BaseRouteGroup struct {
	// 当前路由组的全局中间件
	GroupMiddlewares []gin.HandlerFunc

	// 路由
	GroupController []tIRoute.IRoute

	// 子路由组 路由组名 ==> 路由组
	SubGroup map[string]tIRoute.IRouteGroup
}

func (g *BaseRouteGroup) GetAllMiddlewares() []gin.HandlerFunc {
	return g.GroupMiddlewares
}

func (g *BaseRouteGroup) GetSubRouteGroup(groupName string) tIRoute.IRouteGroup {
	if g.SubGroup == nil {
		return nil
	}

	return g.SubGroup[groupName]
}

func (g *BaseRouteGroup) GetAllRoutes() []tIRoute.IRoute {
	return g.GroupController
}

func (g *BaseRouteGroup) GetAllSubRouteGroup() map[string]tIRoute.IRouteGroup {
	return g.SubGroup
}

func (g *BaseRouteGroup) AddMiddlewares(middlewares []gin.HandlerFunc) {
	g.GroupMiddlewares = middlewares
}

func (g *BaseRouteGroup) AddSubRouteGourp(groupName string) {
	if g.SubGroup == nil {
		g.SubGroup = map[string]tIRoute.IRouteGroup{}
	}
	g.SubGroup[groupName] = &BaseRouteGroup{
		GroupMiddlewares: []gin.HandlerFunc{},
		GroupController:  []tIRoute.IRoute{},
		SubGroup:         map[string]tIRoute.IRouteGroup{},
	}
}

func (g *BaseRouteGroup) AddRoute(route tIRoute.IRoute) tIRoute.IRouteGroup {
	g.GroupController = append(g.GroupController, route)
	return g
}

type BaseRoute struct {
	Middlewares []gin.HandlerFunc
}

func (r *BaseRoute) WithMiddlewares(handlerFunc ...gin.HandlerFunc) tIRoute.IRoute {
	r.Middlewares = append(r.Middlewares, handlerFunc...)
	return r
}

func (r *BaseRoute) GetMiddleWares() []gin.HandlerFunc {
	return r.Middlewares
}

func (r *BaseRoute) GetRouteGroup() string {
	return reflect.TypeOf(r).Elem().PkgPath()
}

func RouteRegister(route tIRoute.IRoute, middlewares ...gin.HandlerFunc) {
	route.WithMiddlewares(middlewares...)

	var routeGroup tIRoute.IRouteGroup = ServApiHandle.RouteGroup

	groupStack := getRouteGroupStack(route)

	for _, v := range groupStack {
		subGroup := routeGroup.GetSubRouteGroup(v)
		if subGroup == nil {
			routeGroup.AddSubRouteGourp(v)
		}

		routeGroup = routeGroup.GetSubRouteGroup(v)
	}

	routeGroup.AddRoute(route)
}

func RouteGroupRegister(routeGroup tIRoute.IRouteGroup, middlewares ...gin.HandlerFunc) {
	var servGroup tIRoute.IRouteGroup = ServApiHandle.RouteGroup
	groupStack := getRouteGroupStack(routeGroup)

	for _, v := range groupStack {
		subGroup := servGroup.GetSubRouteGroup(v)
		if subGroup == nil {
			servGroup.AddSubRouteGourp(v)
		}

		servGroup = servGroup.GetSubRouteGroup(v)
	}

	servGroup.AddMiddlewares(middlewares)
}

func dfsRouteHandle(s Server, group tIRoute.IRouteGroup, arr []gin.HandlerFunc) {
	routeMiddlewares := append(group.GetAllMiddlewares(), arr...)

	for _, route := range group.GetAllRoutes() {
		routeHandle(&s, route, routeMiddlewares)
	}

	for _, v := range group.GetAllSubRouteGroup() {
		dfsRouteHandle(s, v, routeMiddlewares)
	}
}

func (s Server) RouteRegister(routeGroup tIRoute.IRouteGroup) {
	dfsRouteHandle(s, routeGroup, routeGroup.GetAllMiddlewares())
}

func routeHandle(s *Server, route tIRoute.IRoute, groupMiddlewares []gin.HandlerFunc) {
	// ctrl复制同名局部变量，以防止影响闭包函数的入参
	ctrl := route
	routeMiddlewares := append(groupMiddlewares, route.GetMiddleWares()...)

	st := reflect.TypeOf(ctrl)

	var field reflect.StructField
	if st.Kind() == reflect.Ptr {
		field = st.Elem().Field(0)
	} else {
		field = st.Field(0)
	}

	if field.Tag.Get("route") == "" {
		errMsg := "<In RouteRegister> ServRoute is missing routing configuration"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	if field.Tag.Get("method") == "" {
		errMsg := "<In RouteRegister> ServRoute is missing the configuration of the http method"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	arrReqParam := []ReqParam{}

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

		reqParam := ReqParam{}
		switch tp {
		case ParameterInBody:
			reqParam.SetParmInBody()
		case ParameterInQuery:
			reqParam.SetParmInQuery()
		case ParameterInFormData:
			reqParam.SetParmInFormData()
		case ParameterInPath:
			reqParam.SetParmInPath()
		case ParameterInHeader:
			reqParam.SetParmInHeader()
		}
		reqParam.ParamType = paramType

		arrReqParam = append(arrReqParam, reqParam)
	}

	// 构造api实例对象
	api := &Api{
		Method:     strings.ToUpper(field.Tag.Get("method")),
		ReqPath:    field.Tag.Get("route"),
		Group:      route.GetRouteGroup(),
		Act:        field.Tag.Get("act"),
		ReqTypeSet: arrReqParam,
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

		for _, reqParam := range arrReqParam {
			reqType := reqParam.ParamType
			if reqType == nil {
				tLog.Error("<In RouteRegister> request paramType is nil!")
				return
			}

			if reqType.Kind() != reflect.Pointer {
				reqType = reflect.PtrTo(reqType)
			}

			decodeFunc, ok := reqType.MethodByName("ReqDecode")
			if !ok {
				tLog.Error("<In RouteRegister> request obj error!")
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
			s.g.Any(api.ReqPath, append(routeMiddlewares, handelFunc)...)
		} else {
			s.g.Handle(api.Method, api.ReqPath, append(routeMiddlewares, handelFunc)...)
		}

	default:
		fmt.Errorf("error Method")
	}
}

func getRouteGroupStack(route any) []string {
	routeGroupName := reflect.TypeOf(route).Elem().PkgPath()

	groupStack := strings.Split(routeGroupName, "/")

	for k, v := range groupStack {
		if v == "api" {
			return groupStack[k+1:]
		}
	}

	panic("<In getRouteGroupStack> \"api\" no found!")
}
