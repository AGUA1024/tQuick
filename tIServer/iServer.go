package tIServer

import "github.com/gin-gonic/gin"

type HttpReqDecoder interface {
	ReqDecode(c *gin.Context) (any, error)
	GetHttpParmaType() string
}
