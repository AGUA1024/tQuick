package tServer

import (
	"fmt"
	"net/http"
	"reflect"
	"regexp"
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

	routeField := st.Elem().Field(0)
	
	if routeField.Tag.Get("route") == "" {
		errMsg := "<In RouteRegister> ServRoute is missing routing configuration"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	if routeField.Tag.Get("method") == "" {
		errMsg := "<In RouteRegister> ServRoute is missing the configuration of the http method"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	handleFunc, ok := st.MethodByName("Handle")
	if !ok {
		errMsg := "<In RouteRegister> The api lacks a handle function"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	// Handle函数参数校验
	if handleFunc.Type.NumIn() != 3 || handleFunc.Type.In(1) != reflect.TypeOf(&gin.Context{}) {
		errMsg := "<In RouteRegister> An error occurred with the parameters of the 'Handle' function."
		tLog.Error(errMsg)
		panic(errMsg)
	}

	request := reflect.New(handleFunc.Type.In(2).Elem())

	arrParamIn := []reflect.Value{}
	for i := 0; i < request.Elem().NumField(); i++ {
		param := request.Elem().Field(i)
		param.Set(reflect.New(param.Type().Elem()))

		arrParamIn = append(arrParamIn, param)
	}

	// 构造api实例对象
	api := &Api{
		Method:     strings.ToUpper(routeField.Tag.Get("method")),
		ReqPath:    routeField.Tag.Get("route"),
		Group:      getApiGroupName(route),
		Act:        routeField.Tag.Get("act"),
		ArrReqType: getArrReqParam(arrParamIn),
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
			request,
		}

		for _, reqParam := range arrParamIn {
			reqType := reqParam.Type()

			param, err := reqParam.Interface().(IParam).ReqDecode(c, reqType)

			if err != nil {
				c.JSON(http.StatusBadRequest,
					gin.H{
						"Code": http.StatusBadRequest,
						"Msg":  err.Error(),
					},
				)
				return
			}

			reqParam.Set(reflect.ValueOf(param))
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
	routeGroupName := getApiGroupName(route)

	groupStack := strings.Split(routeGroupName, "/")

	return groupStack
}

func getApiGroupName(route any) string {
	pkgPath := reflect.TypeOf(route).Elem().PkgPath()
	re := regexp.MustCompile(`\/api\/(.*)$`)
	match := re.FindStringSubmatch(pkgPath)
	if len(match) > 1 {
		return match[1] // 输出: user/c
	}

	panic("<In getApiGroupName> Error ApiGroup: " + pkgPath)
}

func getArrReqParam(arrParamIn []reflect.Value) []ReqParam {
	arrReqParam := []ReqParam{}
	for _, param := range arrParamIn {
		instance, ok := param.Interface().(IParam)
		if !ok {
			errMsg := fmt.Sprintf("<In RouteRegister> param[%s] is Not IParam", param.Type())
			tLog.Error(errMsg)
			panic(errMsg)
		}
		tp := instance.OpenApiInType()

		reqParam := ReqParam{}
		switch tp {
		case OpenApiInBody:
			reqParam.SetParmInBody()
		case OpenApiInQuery:
			reqParam.SetParmInQuery()
		case OpenApiInFormData:
			reqParam.SetParmInFormData()
		case OpenApiInPath:
			reqParam.SetParmInPath()
		case OpenApiInHeader:
			reqParam.SetParmInHeader()
		}
		reqParam.ParamType = param.Type()

		arrReqParam = append(arrReqParam, reqParam)
	}

	return arrReqParam
}
