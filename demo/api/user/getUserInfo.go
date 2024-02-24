package user

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"tQuick/tServer"
)

func init() {
	tServer.RouteRegister(GetUserInfo{})
}

type GetUserInfo struct {
	tServer.Controller `route:"/v1/GetUserInfo" method:"post" group:"验证码" act:"获取验证码"`
}

type reqHeader struct {
	tServer.HttpHeader
	Authorization string
}

type require struct {
	tServer.HttpJsonBody
	Account int     `desc:"用户账号"`
	Pass    string  `desc:"用户密码" required:"False"`
	Obj     objType `desc:"require Obj的注释"`
}

type objType struct {
	Count int `desc:"数量"`
}

type respones struct {
	Name string  `desc:"用户名"`
	Obj  objType `desc:"respones Obj的注释"`
}

func (g GetUserInfo) GetName(ctx *gin.Context, head *reqHeader, req *require) *respones {
	fmt.Println("Authorization:", head.Authorization)
	if req.Account == 1 {
		return &respones{
			Name: "tQuickName1",
		}
	}

	ctx.JSON(200, respones{
		Name: "tQuickName2",
	})

	return nil
}
