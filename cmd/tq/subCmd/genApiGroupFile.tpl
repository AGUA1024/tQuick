package {{.PkgName}}

import (
	"github.com/AGUA1024/tQuick/tServer"
)

func init() {
	tServer.RouteGroupRegister(
		&{{.ApiGroupName}}RoutGroup{},
	)
}

type {{.ApiGroupName}}RoutGroup struct {
	tServer.BaseRouteGroup
}
