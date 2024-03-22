package tIRoute

import (
	"github.com/gin-gonic/gin"
)

type IController interface {
	WithMiddleWares(handlerFunc ...gin.HandlerFunc) IController
	GetMiddleWares() []gin.HandlerFunc
	GetRouteGroup() string
}
