package tServer

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/schema"
	"reflect"
)

const (
	ParameterInHeader   = `header`
	ParameterInPath     = `path`
	ParameterInQuery    = `query`
	ParameterInBody     = `body`
	ParameterInFormData = `formData`
)

type HttpJsonBody struct {
}

type HttpHeader struct {
}

type HttpQuery struct {
}

type HttpFormData struct {
}

type HttpUri struct {
}

func (j *HttpJsonBody) GetHttpParmaType() string {
	return ParameterInBody
}

func (j *HttpHeader) GetHttpParmaType() string {
	return ParameterInHeader
}

func (j *HttpQuery) GetHttpParmaType() string {
	return ParameterInQuery
}

func (j *HttpFormData) GetHttpParmaType() string {
	return ParameterInFormData
}

func (j *HttpUri) GetHttpParmaType() string {
	return ParameterInPath
}

func (j *HttpJsonBody) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	reqBodyJson, _ := c.GetRawData()

	param := reflect.New(reqType.Elem()).Interface()

	// 解析JSON数据到参数实例
	err := json.Unmarshal(reqBodyJson, param)
	if err != nil {
		return nil, errors.New(fmt.Sprintf("<In HttpJsonBody.ReqDecode> Invalid Json Request:%v", err))
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("<In HttpJsonBody.ReqDecode> Invalid Http Request: ParamMissed")
	}

	return param, nil
}

func (j *HttpHeader) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	param := reflect.New(reqType.Elem()).Interface()
	err := c.BindHeader(param)
	if err != nil {
		return nil, errors.New("<In HttpHeader.ReqDecode> Invalid Http Header:" + err.Error())
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("<In HttpHeader.ReqDecode> Invalid Http Request: Http Header Missed")
	}
	return param, nil
}

func (j *HttpQuery) ReqDecode(c *gin.Context, reqType reflect.Type) (interface{}, error) {
	param := reflect.New(reqType.Elem()).Interface()

	decoder := schema.NewDecoder()
	decoder.IgnoreUnknownKeys(true) // 忽略未知键
	decoder.ZeroEmpty(true)         // 将空字符串解码为零值

	err := decoder.Decode(param, c.Request.URL.Query())
	if err != nil {
		return nil, errors.New("<In HttpQuery.ReqDecode> Invalid Http Query:" + err.Error())
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("<In HttpQuery.ReqDecode> Invalid Http Request: Http QueryParma Missed")
	}
	return param, nil
}

func (j *HttpFormData) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	param := reflect.New(reqType.Elem()).Interface()

	dictFormData, _ := c.MultipartForm()

	decoder := schema.NewDecoder()
	decoder.IgnoreUnknownKeys(true) // 忽略未知键
	decoder.ZeroEmpty(true)         // 将空字符串解码为零值

	err := decoder.Decode(param, dictFormData.Value)
	if err != nil {
		return nil, errors.New("<In HttpFormData.ReqDecode> Invalid Http FormData:" + err.Error())
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("<In HttpFormData.ReqDecode> Invalid Http Request: Http FormData Missed")
	}
	return param, nil
}

func (j *HttpUri) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	param := reflect.New(reqType.Elem()).Interface()

	// 获取动态路由参数并解码
	params := make(map[string][]string)
	for _, p := range c.Params {
		params[p.Key] = []string{p.Value}
	}

	decoder := schema.NewDecoder()
	decoder.IgnoreUnknownKeys(true) // 忽略未知键
	decoder.ZeroEmpty(true)         // 将空字符串解码为零值

	err := decoder.Decode(param, params)
	if err != nil {
		return nil, errors.New("<In HttpUri.ReqDecode> Invalid Http Uri:" + err.Error())
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("<In HttpUri.ReqDecode> Invalid Http Request: Http UriParma Missed")
	}
	return param, nil
}
