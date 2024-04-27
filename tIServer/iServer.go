package tIServer

import (
	"github.com/AGUA1024/tQuick/tIRoute"
	"github.com/gin-gonic/gin"
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

type HttpReqDecoder interface {
	// 解析请求参数
	ReqDecode(c *gin.Context) (any, error)

	// 获取请求参数类型
	GetHttpParmaType() string
}
