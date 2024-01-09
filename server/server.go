package server

import (
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
)

type Server struct {
	g *gin.Engine
}

var Serv = Server{
	g: gin.Default(),
}

func Handle(httpMethod, relativePath string, handlers ...gin.HandlerFunc) {
	if httpMethod == "ANY" {
		Serv.g.Any(relativePath, handlers...)
	} else {
		Serv.g.Handle(httpMethod, relativePath, handlers...)
	}
}

func Run(addr string) (err error) {
	return endless.ListenAndServe(addr, Serv.g)
}
