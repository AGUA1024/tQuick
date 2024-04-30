package tIRoute

import (
	"github.com/gin-gonic/gin"
)

type IRoute interface {
	// 将中间件注册到路由中
	WithMiddlewares(handlerFunc ...gin.HandlerFunc) IRoute

	// 获取当前路由的所有中间件
	GetMiddleWares() []gin.HandlerFunc
}

type IRouteGroup interface {
	// 按照子路由组名获取路由组
	GetSubRouteGroup(groupName string) IRouteGroup

	// 获取全部子路由组
	GetAllSubRouteGroup() map[string]IRouteGroup

	// 获取全部路由
	GetAllRoutes() []IRoute

	// 获取当前路由组所有注册的中间件
	GetAllMiddlewares() []gin.HandlerFunc

	// 添加子路由组
	AddSubRouteGourp(groupName string)

	// 添加路由到当前路由组中
	AddRoute(route IRoute) IRouteGroup

	// 添加中间件到当前路由组
	AddMiddlewares(middlewares []gin.HandlerFunc)
}
