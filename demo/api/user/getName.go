package user

import (
	"github.com/gin-gonic/gin"
	"tQuick/route"
)

func init() {
	route.RouteRegister(GetUserInfo{})
}

type GetUserInfo struct {
	route.Controller `route:"/v1/GetUserInfo" method:"post" group:"验证码" desc:"获取验证码"`
}

type require struct {
	Account int    `json:"id" desc:"用户账号"`
	Pass    string `json:"pass,omitempty" desc:"用户密码"`
}

type respones struct {
	Name string `json:"name" desc:"用户名"`
}

func (this GetUserInfo) GetName(ctx *gin.Context, req *require) *respones {
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
