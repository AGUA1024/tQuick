package {{.PkgName}}

import (
	"github.com/gin-gonic/gin"
	"github.com/AGUA1024/tQuick/tServer"
)

func init() {
	tServer.RouteRegister(
	    &{{.ApiName}}{},
	)
}

type {{.ApiName}} struct {
	tServer.BaseRoute `route:"{{.ApiName}}.routePath" method:"POST" act:"{{.ApiName}}.act"`
}

type {{.ApiName}}Request struct {
    Uri *{{.ApiName}}Uri
    Header *{{.ApiName}}Header
    Query *{{.ApiName}}Query
    Body *{{.ApiName}}Body
}

type {{.ApiName}}Uri struct {
	tServer.HttpUri
}

type {{.ApiName}}Header struct {
	tServer.HttpHeader
}

type {{.ApiName}}Query struct {
	tServer.HttpQuery
}

type {{.ApiName}}Body struct {
	tServer.HttpJsonBody
}

type {{.ApiName}}Response struct {
}

func (api *{{.ApiName}}) Handle(ctx *gin.Context, request *{{.ApiName}}Request) *{{.ApiName}}Response {
	panic("Not Implemented")
	return nil
}