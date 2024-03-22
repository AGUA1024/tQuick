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
	{{.ApiGroupName}}RoutGroup `route:"{{.ApiName}}.routePath" method:"POST" act:"{{.ApiName}}.act"`
}

type {{.ApiName}}ReqUri struct {
	tServer.HttpUri
}

type {{.ApiName}}ReqHeader struct {
	tServer.HttpHeader
}

type {{.ApiName}}Req struct {
	tServer.HttpJsonBody
}

type {{.ApiName}}Rsp struct {
}

func (api *{{.ApiName}}) Handle(ctx *gin.Context, head *{{.ApiName}}ReqHeader, req *{{.ApiName}}Req, uri *{{.ApiName}}ReqUri) *{{.ApiName}}Rsp {
	panic("Not Implemented")
	return nil
}