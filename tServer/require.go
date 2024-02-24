package tServer

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"reflect"
)

type HttpJsonBody struct {
}

type HttpHeader struct {
}

type HttpQuery struct {
}

type HttpParam struct {
}

type HttpForm struct {
}

type HttpUri struct {
}

func (j *HttpJsonBody) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	reqBodyJson, _ := c.GetRawData()

	param := reflect.New(reqType.Elem()).Interface()

	//fmt.Println("params:", reflect.New(reqBodyType.Elem()).Type())
	// 解析JSON数据到参数实例
	err := json.Unmarshal(reqBodyJson, param)
	if err != nil {
		return nil, errors.New(fmt.Sprintf("Invalid Json Request:%v", err))
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("Invalid Json Request: ParamMissed")
	}

	return param, nil
}

func (j *HttpJsonBody) GetHttpParmaType() string {
	return "body"
}

func (j *HttpHeader) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	param := reflect.New(reqType.Elem()).Interface()
	err := c.BindHeader(param)
	if err != nil {
		return nil, errors.New("Invalid Http Header:" + err.Error())
	}

	indirectParam := reflect.Indirect(reflect.ValueOf(param))
	if isParamMissed(indirectParam) {
		return nil, errors.New("Invalid Json Request: Http Header Missed")
	}
	return param, nil
}

func (j *HttpHeader) GetHttpParmaType() string {
	return "header"
}

func (j *HttpQuery) ReqDecode(c *gin.Context) (any, error) {
	return nil, errors.New("todo")
}

func (j *HttpParam) ReqDecode(c *gin.Context) (any, error) {
	return nil, errors.New("todo")
}

func (j *HttpForm) ReqDecode(c *gin.Context) (any, error) {
	return nil, errors.New("todo")
}

func (j *HttpUri) ReqDecode(c *gin.Context) (any, error) {
	return nil, errors.New("todo")
}
