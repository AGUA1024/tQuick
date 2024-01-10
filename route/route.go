package route

import (
	"encoding/json"
	"fmt"
	"net/http"
	"reflect"
	"strings"
	"tQuick/server"

	"github.com/gin-gonic/gin"
)

type IController interface {
	GetRouteTag() bool
}

type Controller struct {
}

type api struct {
	method     string
	reqPath    string
	group      string
	act        string
	reqType    reflect.Type
	rspType    reflect.Type
	handleFunc reflect.Value
}

func (this Controller) GetRouteTag() bool {
	// todo
	return true
}

func RouteRegister(ctrl IController) {
	st := reflect.TypeOf(ctrl)

	if st.NumMethod() != 2 {
		panic("The controller binds too many methods, but only one method is allowed to be bound")
	}

	field := st.Field(0)
	if field.Tag.Get("route") == "" {
		panic("Controller is missing routing configuration")
	}

	routeInfo := &api{
		method:     strings.ToUpper(field.Tag.Get("method")),
		reqPath:    field.Tag.Get("route"),
		group:      field.Tag.Get("group"),
		act:        field.Tag.Get("act"),
		reqType:    st.Method(0).Type.In(1),
		rspType:    st.Method(0).Type.In(2),
		handleFunc: st.Method(0).Func,
	}

	handelFunc := func(c *gin.Context) {
		reqBodyJson, _ := c.GetRawData()
		reqBodyType := routeInfo.reqType
		param := reflect.New(reqBodyType.Elem()).Interface()

		//fmt.Println("params:", param.Type())
		// 解析JSON数据到参数实例
		err := json.Unmarshal(reqBodyJson, param)
		if err != nil {
			c.String(http.StatusBadRequest, "Invalid Json Request")
			return
		}

		indirectParam := reflect.Indirect(reflect.ValueOf(param))
		if isJsonParamMissed(indirectParam) {
			c.String(http.StatusBadRequest, "Invalid Json Request")
			return
		}

		routeInfo.handleFunc.Call([]reflect.Value{
			reflect.ValueOf(ctrl),
			reflect.ValueOf(c),
			reflect.ValueOf(param),
		})
	}

	switch routeInfo.method {
	case http.MethodGet, http.MethodPost, http.MethodPut, http.MethodPatch, http.MethodTrace,
		http.MethodHead, http.MethodOptions, http.MethodDelete, http.MethodConnect, "ANY":

		server.Handle(routeInfo.method, routeInfo.reqPath, handelFunc)

	default:
		fmt.Errorf("error method")
	}
}

// 判断request json对象必选参数是否缺失
func isJsonParamMissed(jsonInstance reflect.Value) bool {
	for i := 0; i < jsonInstance.NumField(); i++ {
		fieldValue := jsonInstance.Field(i)
		// 如果是可选项则跳过判断
		if strings.Contains(jsonInstance.Type().Field(i).Tag.Get("json"), "omitempty") {
			continue
		}

		// 结构体类型递归判断
		if fieldValue.Type().Kind() == reflect.Struct {
			if isJsonParamMissed(fieldValue) {
				return true
			}
		}

		// 基础数据类型直接判断
		if fieldValue.IsZero() {
			return true
		}
	}

	return false
}
