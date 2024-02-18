package tServer

import (
	"fmt"
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
	"net/http"
)

type Server struct {
	g   *gin.Engine
	Api map[string]*ApiSet
}

var Serv = &Server{
	g:   gin.Default(),
	Api: map[string]*ApiSet{},
}

func GetServer() *Server {
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
		fmt.Errorf("error Method")
	}
}

func Run(addr string) error {
	server := GetServer()

	DocInit(server)

	return endless.ListenAndServe(addr, server.g)
}
