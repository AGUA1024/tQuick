package tServer

import (
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tIServer"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/AGUA1024/tQuick/tMiddleware"
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
	_ "gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/http"
)

type Server struct {
	// Name of the server (服务器的名称)
	Name string

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

	err := endless.ListenAndServe(fmt.Sprintf(":%d", s.port), s.g)
	if err != nil {
		panic(err)
	}
}

var Serv tIServer.IServer = &Server{
	g:   gin.Default(),
	Api: map[string]*ApiSet{},
	Db:  map[string]*gorm.DB{},
}

func NewServer() tIServer.IServer {
	Serv = &Server{
		g:   gin.Default(),
		Api: map[string]*ApiSet{},
		Db:  map[string]*gorm.DB{},
	}

	// 加载服务器配置
	Serv.LoadConfig()

	// 将Api注册到服务器中
	Serv.RouteRegister(RouteGroupMiddlewaresMap)

	return Serv
}

func GetServer() tIServer.IServer {
	return Serv
}

// s.Api map[string]*Api  path => api
func (s *Server) ApiRegister(api *Api) {
	_, isSet := s.Api[api.ReqPath]
	if !isSet {
		s.Api[api.ReqPath] = &ApiSet{}
	}

	f := func(a *Api) *Api {
		if isSet && a != nil {
			panic(fmt.Sprintf("The api is repeatedly defined. [%s]:%s", api.Method, api.ReqPath))
		}

		return api
	}

	switch api.Method {
	case http.MethodGet:
		s.Api[api.ReqPath].Get = f(s.Api[api.ReqPath].Get)
	case http.MethodPost:
		s.Api[api.ReqPath].Post = f(s.Api[api.ReqPath].Post)
	case http.MethodPut:
		s.Api[api.ReqPath].Put = f(s.Api[api.ReqPath].Put)
	case http.MethodPatch:
		s.Api[api.ReqPath].Patch = f(s.Api[api.ReqPath].Patch)
	case http.MethodTrace:
		s.Api[api.ReqPath].Trace = f(s.Api[api.ReqPath].Trace)
	case http.MethodHead:
		s.Api[api.ReqPath].Head = f(s.Api[api.ReqPath].Head)
	case http.MethodOptions:
		s.Api[api.ReqPath].Options = f(s.Api[api.ReqPath].Options)
	case http.MethodDelete:
		s.Api[api.ReqPath].Delete = f(s.Api[api.ReqPath].Delete)
	case http.MethodConnect:
		s.Api[api.ReqPath].Connect = f(s.Api[api.ReqPath].Connect)
	case "ANY":
		s.Api[api.ReqPath].Any = f(s.Api[api.ReqPath].Any)
	default:
		panic("error Method")
	}
}

func (s *Server) ServerInit() {
	serverConf := global.GetGlobalConfig().Server

	s.Name = serverConf.App
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
