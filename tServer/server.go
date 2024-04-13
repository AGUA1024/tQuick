package tServer

import (
	"encoding/json"
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tIServer"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/AGUA1024/tQuick/tMiddleware"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
	_ "gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/http"
	"regexp"
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
		Serv.RouteRegister(RouteGroupMiddlewaresMap)
	})

	return Serv
}

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

	f := func(a *Api) *Api {
		if isSet && a != nil {
			errMsg := fmt.Sprintf("The api is repeatedly defined. [%s]:%s", api.Method, api.ReqPath)
			tLog.Error(errMsg)
			panic(errMsg)
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
		errMsg := "<In ApiRegister> error Method"
		tLog.Error(errMsg)
		panic(errMsg)
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

// Add adds an instance of struct or a route function to OpenApiV3 definition implements.
func (s *Server) ApiDocInit() {
	apiSet := s.Api
	c := s.g
	appName := global.GetGlobalConfig().Server.App
	version := global.GetGlobalConfig().Server.Version
	port := global.GetGlobalConfig().Server.Port
	swaggerPath := global.GetGlobalConfig().ApiDoc.SwaggerPath
	apiFox := global.GetGlobalConfig().ApiDoc.ApiFox

	routPaths := map[string]openApi.Path{}
	components := map[string]*openApi.SchemaRef{}

	for reqPath, v := range apiSet {
		getComponents(components, v)

		// 请求路径，文档参数兼容动态路由类型
		re := regexp.MustCompile(`:(\w+)`)
		newPath := re.ReplaceAllString(reqPath, "{$1}")

		routPaths[newPath] = openApi.Path{
			Ref:         "",
			Summary:     "",
			Description: "",
			Connect:     getOpts(v.Connect),
			Delete:      getOpts(v.Delete),
			Get:         getOpts(v.Get),
			Head:        getOpts(v.Head),
			Options:     getOpts(v.Options),
			Patch:       getOpts(v.Patch),
			Post:        getOpts(v.Post),
			Put:         getOpts(v.Put),
			Trace:       getOpts(v.Trace),
			Servers:     nil,
			Parameters:  nil,
		}
	}

	oai := &OpenApiV3{
		Config:  openApi.Config{},
		OpenAPI: "3.0.0",
		Components: openApi.Components{
			Schemas:         components,
			Parameters:      nil,
			Headers:         nil,
			RequestBodies:   nil,
			Responses:       nil,
			SecuritySchemes: nil,
			Examples:        nil,
			Links:           nil,
			Callbacks:       nil,
		},
		Info: openApi.Info{
			Title:          appName,
			Description:    "OpenApiV3.Info.Description",
			TermsOfService: "OpenApiV3.Info.TermsOfService",
			Contact:        nil,
			License:        nil,
			Version:        version,
		},
		Paths:        routPaths,
		Security:     nil,
		Servers:      nil,
		Tags:         nil,
		ExternalDocs: nil,
	}

	json, _ := json.Marshal(oai)
	openApiV3Str := string(json)

	c.GET("/swagger/openApi.json", func(c *gin.Context) {
		c.String(http.StatusOK, openApiV3Str)
	})

	// 设置Swagger路由
	url := ginSwagger.URL("/swagger/openApi.json") // 指向API定义
	c.GET(fmt.Sprintf("%s/*any", swaggerPath), ginSwagger.WrapHandler(swaggerFiles.Handler, url))

	fmt.Println(fmt.Sprintf("Swagger documentation initialization is complete, please visit http://0.0.0.0:%d%s/swagger/index.html to check it", port, swaggerPath))

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
