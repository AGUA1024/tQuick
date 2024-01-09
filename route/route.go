package route

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"reflect"
	"strings"
	"tQuick/server"
)

type IController interface {
	PushRegisterList()
}

type Controller struct {
}

func (this Controller) PushRegisterList() {
}

func RouteRegister(ctrl IController) {
	st := reflect.TypeOf(ctrl)
	field := st.Field(0)

	method := strings.ToUpper(field.Tag.Get("method"))
	reqPath := field.Tag.Get("route")

	if st.NumMethod() != 2 {
		panic("The controller binds too many methods, but only one method is allowed to be bound")
	}

	fn := st.Method(1)

	fn.Func.Call([]reflect.Value{
		reflect.ValueOf(ctrl),
	})

	fmt.Println("params:", st.Method(0).Type.In(1), st.Method(0).Type.In(2))
	// 调用pushRegisterList方法
	fmt.Println(field.Type.Method(0).Name)
	//method.Call(nil)

	fmt.Println("method:", method, reqPath)

	handelFunc := func(c *gin.Context) {
		reqBodyJson, _ := c.GetRawData()
		reqBodyType := st.Method(0).Type.In(2)
		param := reflect.New(reqBodyType.Elem()).Interface()

		//fmt.Println("params:", param.Type())
		// 解析JSON数据到参数实例
		err := json.Unmarshal(reqBodyJson, param)
		if err != nil {
			c.String(http.StatusBadRequest, "Invalid Json Request")
			return
		}

		indirectParam := reflect.Indirect(reflect.ValueOf(param))
		if isJsonParamMiss(indirectParam) {
			c.String(http.StatusBadRequest, "Invalid Json Request")
			return
		}

		st.Method(0).Func.Call([]reflect.Value{
			reflect.ValueOf(ctrl),
			reflect.ValueOf(c),
			reflect.ValueOf(param),
		})
	}

	switch method {
	case http.MethodGet, http.MethodPost, http.MethodPut, http.MethodPatch, http.MethodTrace,
		http.MethodHead, http.MethodOptions, http.MethodDelete, http.MethodConnect, "ANY":

		server.Handle(method, reqPath, handelFunc)

	default:
		fmt.Errorf("error method")
	}
}

// 判断request json对象必选参数是否缺失
func isJsonParamMiss(jsonInstance reflect.Value) bool {
	for i := 0; i < jsonInstance.NumField(); i++ {
		fieldValue := jsonInstance.Field(i)
		// 如果是可选项则跳过判断
		if strings.Contains(jsonInstance.Type().Field(i).Tag.Get("json"), "omitempty") {
			continue
		}

		// 结构体类型递归判断
		if fieldValue.Type().Kind() == reflect.Struct {
			if isJsonParamMiss(fieldValue) {
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
