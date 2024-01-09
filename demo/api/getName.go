package api

import (
	"github.com/gin-gonic/gin"
	"tQuick/route"
)

func init() {
	route.RouteRegister(GetUserName{})
}

type GetUserName struct {
	route.Controller `route:"/v1/get/User/Name" method:"post"`
}

type require struct {
	Id   string `json:"id"`
	Pass string `json:"pass,omitempty"`
	Why  string `json:"why,omitempty"`
}

type respones struct {
	name string `json:"name"`
}

func (this GetUserName) GetName(ctx *gin.Context, req *require) *respones {
	req.Id += "handle"
	ctx.JSON(200, req)
	return nil
}
