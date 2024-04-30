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
	OpenApiInHeader   = `header`
	OpenApiInPath     = `path`
	OpenApiInQuery    = `query`
	OpenApiInBody     = `body`
	OpenApiInFormData = `formData`
)

/* Param接口 */
type IParam interface {
	OpenApiInType() string
	ReqDecode(*gin.Context, reflect.Type) (any, error)
	ShouldBindType(*gin.Context, any) error
}

type IBodyParam interface {
	IParam
}

type IUriParam interface {
	IParam
}

/* Param类 */
type HttpHeader struct {
	IParam
}

type HttpQuery struct {
	IParam
}

type HttpForm struct {
	IParam
}

type HttpFormPost struct {
	IParam
}

type HttpFormMultipart struct {
	IParam
}

type HttpJsonBody struct {
	IBodyParam
}

type HttpXml struct {
	IBodyParam
}

type HttpProtoBuf struct {
	IBodyParam
}

type HttpMsgPack struct {
	IBodyParam
}

type HttpYaml struct {
	IBodyParam
}

type HttpToml struct {
	IBodyParam
}

type HttpUri struct {
	IUriParam
}

/* Param方法 */
func (j *HttpHeader) OpenApiInType() string {
	return OpenApiInHeader
}

func (j *HttpQuery) OpenApiInType() string {
	return OpenApiInQuery
}

func (j *HttpForm) OpenApiInType() string {
	return OpenApiInFormData
}

func (j *HttpFormPost) OpenApiInType() string {
	return OpenApiInFormData
}

func (j *HttpFormMultipart) OpenApiInType() string {
	return OpenApiInFormData
}

func (j *HttpJsonBody) OpenApiInType() string {
	return OpenApiInBody
}

func (j *HttpXml) OpenApiInType() string {
	return OpenApiInBody
}

func (j *HttpProtoBuf) OpenApiInType() string {
	return OpenApiInBody
}

func (j *HttpMsgPack) OpenApiInType() string {
	return OpenApiInBody
}

func (j *HttpYaml) OpenApiInType() string {
	return OpenApiInBody
}

func (j *HttpToml) OpenApiInType() string {
	return OpenApiInBody
}

func (j *HttpUri) OpenApiInType() string {
	return OpenApiInPath
}

func (j *HttpHeader) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindHeader(obj)
}

func (j *HttpQuery) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindQuery(obj)
}

func (j *HttpForm) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.Form)
}

func (j *HttpFormPost) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.Form)
}

func (j *HttpFormMultipart) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.FormMultipart)
}

func (j *HttpJsonBody) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindJSON(obj)
}

func (j *HttpXml) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.XML)
}

func (j *HttpProtoBuf) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.ProtoBuf)
}

func (j *HttpMsgPack) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.MsgPack)
}

func (j *HttpYaml) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.YAML)
}

func (j *HttpToml) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindWith(obj, binding.TOML)
}

func (j *HttpUri) ShouldBindType(c *gin.Context, obj any) error {
	return c.ShouldBindUri(obj)
}

const (
	ERROR_HTTP_REQUEST = "Invalid Request"
)

func _ReqDecode(param IParam, c *gin.Context, reqType reflect.Type) (any, error) {
	instance := reflect.New(reqType.Elem()).Interface()

	err := param.ShouldBindType(c, instance)
	if err != nil {
		tLog.Error(fmt.Sprintf("<In HttpJsonBody.ReqDecode> %s: %v", ERROR_HTTP_REQUEST, err))
		return nil, errors.New(ERROR_HTTP_REQUEST)
	}

	return instance, nil
}

func (j *HttpHeader) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpQuery) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpForm) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpFormPost) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpFormMultipart) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpJsonBody) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpXml) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpProtoBuf) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpMsgPack) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpYaml) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpToml) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}

func (j *HttpUri) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	return _ReqDecode(j, c, reqType)
}
