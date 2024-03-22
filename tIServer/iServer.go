package tIServer

import (
	"github.com/AGUA1024/tQuick/tIRoute"
	"github.com/gin-gonic/gin"
)

type IServer interface {
	// 加载服务器配置信息
	LoadConfig()

	// 路由注册
	RouteRegister(ServSet map[string][]tIRoute.IController)

	// Api文档初始化
	ApiDocInit()

	// 启动服务
	Run()
}

type HttpReqDecoder interface {
	ReqDecode(c *gin.Context) (any, error)
	GetHttpParmaType() string
}
