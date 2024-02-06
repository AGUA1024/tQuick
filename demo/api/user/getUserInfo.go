package user

import (
	"github.com/gin-gonic/gin"
	"tQuick/tServer"
)

func init() {
	tServer.RouteRegister(GetUserInfo{})
}

type GetUserInfo struct {
	tServer.Controller `route:"/v1/GetUserInfo" method:"post" group:"验证码" act:"获取验证码"`
}

type require struct {
	Account int    `desc:"用户账号"`
	Pass    string `desc:"用户密码"`
}

type respones struct {
	Name string `desc:"用户名"`
}

func (g GetUserInfo) GetName(ctx *gin.Context, req *require) *respones {
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
