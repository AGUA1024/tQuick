package tServer

import (
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tIServer"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/AGUA1024/tQuick/tMiddleware"
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
	"github.com/swaggo/files"
	"github.com/swaggo/gin-swagger"
	_ "gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/http"
	"sync"
)

var Serv tIServer.IServer
var once sync.Once

func NewServer() tIServer.IServer {
	once.Do(func() {
		Serv = &Server{
			g:   gin.Default(),
			Api: map[string]*ApiSet{},
			Db:  map[string]*gorm.DB{},
		}

		// 加载服务器配置
		Serv.LoadConfig()

		// 将Api注册到服务器中
		Serv.RouteRegister(ServApiHandle.RouteGroup)
	})

	return Serv
}

type Server struct {
	// Name of the server (服务器的名称)
	Name string

	// 服务器 IP 地址
	IP string

	// 服务器监听端口号
	port int

	// 服务器环境
	env string

	// gin内核
	g *gin.Engine

	// api集合
	Api map[string]*ApiSet

	// 数据库
	Db map[string]*gorm.DB
}

func (s *Server) Run() {
	s.ApiDocInit()

	err := endless.ListenAndServe(fmt.Sprintf("%s:%d", s.IP, s.port), s.g)
	if err != nil {
		errMsg := fmt.Sprintf("<In Run> %v", err)
		tLog.Error(errMsg)
		panic(errMsg)
	}
}

// s.Api map[string]*Api  path => api
func (s *Server) ApiRegister(api *Api) {
	_, isSet := s.Api[api.ReqPath]
	if !isSet {
		s.Api[api.ReqPath] = &ApiSet{}
	}

	sApi := s.Api[api.ReqPath].Api
	if isSet && sApi != nil {
		errMsg := fmt.Sprintf("The api is repeatedly defined. [%s]:%s", api.Method, api.ReqPath)
		tLog.Error(errMsg)
		panic(errMsg)
	}

	switch api.Method {
	case http.MethodGet:
		s.Api[api.ReqPath].SetMethodGet()
	case http.MethodPost:
		s.Api[api.ReqPath].SetMethodPost()
	case http.MethodPut:
		s.Api[api.ReqPath].SetMethodPut()
	case http.MethodPatch:
		s.Api[api.ReqPath].SetMethodPatch()
	case http.MethodTrace:
		s.Api[api.ReqPath].SetMethodTrace()
	case http.MethodHead:
		s.Api[api.ReqPath].SetMethodHead()
	case http.MethodOptions:
		s.Api[api.ReqPath].SetMethodOptions()
	case http.MethodDelete:
		s.Api[api.ReqPath].SetMethodDelete()
	case http.MethodConnect:
		s.Api[api.ReqPath].SetMethodConnect()
	case "ANY":
		s.Api[api.ReqPath].SetMethodAny()
	default:
		errMsg := "<In ApiRegister> error Method"
		tLog.Error(errMsg)
		panic(errMsg)
	}

	s.Api[api.ReqPath].Api = sApi
}

func (s *Server) ServerInit() {
	serverConf := global.GetGlobalConfig().Server

	s.Name = serverConf.App
	s.IP = serverConf.Ip
	s.port = serverConf.Port
	s.env = serverConf.Env
}

func (s *Server) LoadConfig() {
	// 日志组件初始化
	tLog.LogInit()

	// 数据库初始化
	tMiddleware.DbInit()

	// 服务器初始化
	s.ServerInit()
}

// Add adds an instance of struct or a route function to OpenApiV3 definition implements.
func (s *Server) ApiDocInit() {
	apiSet := s.Api
	c := s.g
	appName := global.GetGlobalConfig().Server.App
	version := global.GetGlobalConfig().Server.Version
	ip := global.GetGlobalConfig().Server.Ip
	port := global.GetGlobalConfig().Server.Port
	swaggerPath := global.GetGlobalConfig().ApiDoc.SwaggerPath
	apiFox := global.GetGlobalConfig().ApiDoc.ApiFox

	openApiV3Str := GetOpenApiJson(apiSet, appName, version)

	c.GET("/swagger/openApi.json", func(c *gin.Context) {
		c.String(http.StatusOK, openApiV3Str)
	})

	// 设置Swagger路由
	url := ginSwagger.URL("/swagger/openApi.json") // 指向API定义
	c.GET(fmt.Sprintf("%s/*any", swaggerPath), ginSwagger.WrapHandler(swaggerFiles.Handler, url))

	fmt.Println(fmt.Sprintf("Swagger documentation initialization is complete, please visit http://%s:%d%s/swagger/index.html to check it", ip, port, swaggerPath))

	// apifox
	if apiFox.Enable {
		success, err := importApi2ApiFox(apiFox.ProjectId, openApiV3Str, apiFox.Token)
		if success {
			fmt.Println(fmt.Sprintf("The ApiFox documentation has been updated synchronously. Please visit https://apifox.com/apidoc/project-%s  to check it", apiFox.ProjectId))
		} else {
			tLog.Warnf("ApiFox document synchronization update failed: %v", err)
		}
	}
}
