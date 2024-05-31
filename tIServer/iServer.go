package tIServer

import (
	"github.com/AGUA1024/tQuick/tIRoute"
)

type IServer interface {
	// 加载服务器配置信息
	LoadConfig()

	// 路由注册
	RouteRegister(RouteGroup tIRoute.IRouteGroup)

	// Api文档初始化
	ApiDocInit()

	// 启动服务
	Run()
}
