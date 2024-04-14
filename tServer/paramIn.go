package tServer

import (
	"errors"
	"fmt"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
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

const (
	ERROR_HTTP_REQUEST = "Invalid Request"
)

func (j *HttpJsonBody) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	instance := reflect.New(reqType.Elem()).Interface()
	err := c.ShouldBindWith(instance, binding.JSON)
	if err != nil {
		tLog.Error(fmt.Sprintf("<In HttpJsonBody.ReqDecode> %s: %v", ERROR_HTTP_REQUEST, err))
		return nil, errors.New(ERROR_HTTP_REQUEST)
	}

	return instance, nil
}

func (j *HttpHeader) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	instance := reflect.New(reqType.Elem()).Interface()
	err := c.ShouldBindWith(instance, binding.Header)
	if err != nil {
		tLog.Error(fmt.Sprintf("<In HttpHeader.ReqDecode> %s: %v", ERROR_HTTP_REQUEST, err))
		return nil, errors.New(ERROR_HTTP_REQUEST)
	}

	return instance, nil
}

func (j *HttpQuery) ReqDecode(c *gin.Context, reqType reflect.Type) (interface{}, error) {
	instance := reflect.New(reqType.Elem()).Interface()
	err := c.ShouldBindWith(instance, binding.Query)
	if err != nil {
		tLog.Error(fmt.Sprintf("<In HttpQuery.ReqDecode> %s: %v", ERROR_HTTP_REQUEST, err))
		return nil, errors.New(ERROR_HTTP_REQUEST)
	}

	return instance, nil
}

func (j *HttpFormData) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	instance := reflect.New(reqType.Elem()).Interface()
	err := c.ShouldBindWith(instance, binding.Form)
	if err != nil {
		tLog.Error(fmt.Sprintf("<In HttpFormData.ReqDecode> %s: %v", ERROR_HTTP_REQUEST, err))
		return nil, errors.New(ERROR_HTTP_REQUEST)
	}

	return instance, nil
}

func (j *HttpUri) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	instance := reflect.New(reqType.Elem()).Interface()
	err := c.ShouldBindUri(instance)
	if err != nil {
		tLog.Error(fmt.Sprintf("<In HttpUri.ReqDecode> %s: %v", ERROR_HTTP_REQUEST, err))
		return nil, errors.New(ERROR_HTTP_REQUEST)
	}

	return instance, nil
}
