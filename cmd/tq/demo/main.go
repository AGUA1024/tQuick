package demo

import (
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tServer"
)

func main() {
	// 加载服务器配置
	global.LoadConfig("server.yaml")

	// 创建服务器实例
	s := tServer.NewServer()

	// 启动服务器
	s.Run()
}
