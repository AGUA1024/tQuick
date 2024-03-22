package {{.PkgName}}

import (
	"github.com/AGUA1024/tQuick/tServer"
)

const ROUTE_GROUP = "{{.PkgName}}"

func init() {
	tServer.RouteGroupRegister(
		&{{.ApiGroupName}}RoutGroup{},
	)
}

type {{.ApiGroupName}}RoutGroup struct {
	tServer.Controller
}

func (this {{.ApiGroupName}}RoutGroup) GetRouteGroup() string {
	return ROUTE_GROUP
}
