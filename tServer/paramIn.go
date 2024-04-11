package tServer

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/gin-gonic/gin"
	"reflect"
	"strconv"
	"unsafe"
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

	if isMissed, err := isJsonParamMissed(reqBodyJson, reqType); isMissed {
		errMsg := "<In HttpJsonBody.ReqDecode> Invalid Json Request: ParamMissed"
		tLog.Errorf("%s: %v", errMsg, err)
		return nil, errors.New(errMsg)
	}

	jsonData := map[string]any{}

	decoder := json.NewDecoder(bytes.NewReader(reqBodyJson))
	decoder.UseNumber()
	decoder.Decode(&jsonData)

	// json区分整型和浮点型
	for k, v := range jsonData {
		if number, ok := v.(json.Number); ok {
			if vv, err := number.Int64(); err == nil {
				jsonData[k] = vv
				continue
			}

			if vv, err := number.Float64(); err == nil {
				jsonData[k] = vv
			}
		}
	}

	return unsafeUnmarshalParam(jsonData, reqType), nil
}

func (j *HttpHeader) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	dictHeader := map[string]string{}
	for k, v := range c.Request.Header {
		dictHeader[k] = v[0]
	}
	dictStingAuto := mapValueTypeAuto(dictHeader)
	ret := unsafeUnmarshalParam(dictStingAuto, reqType)

	buf, err := json.Marshal(dictStingAuto)
	if err != nil {
		errMsg := fmt.Sprintf("<In HttpHeader.ReqDecode> Invalid Http Header Request: %v", err)
		tLog.Errorf(errMsg)
		return nil, errors.New(errMsg)
	}

	if isMissed, err := isJsonParamMissed(buf, reqType); isMissed {
		errMsg := "<In HttpHeader.ReqDecode> Invalid Http Request: ParamMissed"
		tLog.Errorf("%s: %v", errMsg, err)
		return nil, errors.New(errMsg)
	}

	return ret, nil
}

func (j *HttpQuery) ReqDecode(c *gin.Context, reqType reflect.Type) (interface{}, error) {
	dictQuery := map[string]string{}
	for k, v := range c.Request.URL.Query() {
		dictQuery[k] = v[0]
	}

	dictStingAuto := mapValueTypeAuto(dictQuery)
	ret := unsafeUnmarshalParam(dictStingAuto, reqType)

	buf, err := json.Marshal(dictStingAuto)
	if err != nil {
		errMsg := fmt.Sprintf("<In HttpQuery.ReqDecode> Invalid Http Query : %v", err)
		tLog.Errorf(errMsg)
		return nil, errors.New(errMsg)
	}

	if isMissed, err := isJsonParamMissed(buf, reqType); isMissed {
		errMsg := "<In HttpQuery.ReqDecode> Invalid Http QueryParma: ParamMissed"
		tLog.Errorf("%s: %v", errMsg, err)
		return nil, errors.New(errMsg)
	}

	return ret, nil
}

func (j *HttpFormData) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	dictFormData, _ := c.MultipartForm()
	preprocessedData := make(map[string]string)
	for key, values := range dictFormData.Value {
		preprocessedData[key] = values[0]
	}

	dictStingAuto := mapValueTypeAuto(preprocessedData)
	ret := unsafeUnmarshalParam(dictStingAuto, reqType)

	buf, err := json.Marshal(dictStingAuto)
	if err != nil {
		errMsg := fmt.Sprintf("<In HttpFormData.ReqDecode> Invalid Http FormData: %v", err)
		tLog.Errorf(errMsg)
		return nil, errors.New(errMsg)
	}

	if isMissed, err := isJsonParamMissed(buf, reqType); isMissed {
		errMsg := "<In HttpFormData.ReqDecode> Invalid Http FormData: ParamMissed"
		tLog.Errorf("%s: %v", errMsg, err)
		return nil, errors.New(errMsg)
	}

	return ret, nil
}

func (j *HttpUri) ReqDecode(c *gin.Context, reqType reflect.Type) (any, error) {
	// 获取动态路由参数并解码
	params := make(map[string]string)
	for _, p := range c.Params {
		params[p.Key] = p.Value
	}

	dictStingAuto := mapValueTypeAuto(params)
	ret := unsafeUnmarshalParam(dictStingAuto, reqType)

	buf, err := json.Marshal(dictStingAuto)
	if err != nil {
		errMsg := fmt.Sprintf("<In HttpUri.ReqDecode> Invalid Http Uri: %v", err)
		tLog.Errorf(errMsg)
		return nil, errors.New(errMsg)
	}

	if isMissed, err := isJsonParamMissed(buf, reqType); isMissed {
		errMsg := "<In HttpUri.ReqDecode> Invalid Http Uri: ParamMissed"
		tLog.Errorf("%s: %v", errMsg, err)
		return nil, errors.New(errMsg)
	}

	return ret, nil
}

func mapValueTypeAuto(input map[string]string) map[string]interface{} {
	result := make(map[string]interface{})
	for key, value := range input {
		// 尝试转换为布尔型
		if boolVal, err := strconv.ParseBool(value); err == nil {
			result[key] = boolVal
			continue
		}

		// 尝试转换为整型
		if intVal, err := strconv.Atoi(value); err == nil {
			result[key] = intVal
			continue
		}

		// 尝试转换为浮点型
		if floatVal, err := strconv.ParseFloat(value, 64); err == nil {
			result[key] = floatVal
			continue
		}
		// 如果都不是，则保留原来的字符串
		result[key] = value
	}
	return result
}

func unsafeUnmarshalParam(jsonData map[string]any, tp reflect.Type) any {
	paramPtr := reflect.New(tp.Elem())
	for i := 0; i < paramPtr.Elem().NumField(); i++ {
		field := paramPtr.Elem().Field(i)
		fieldName := tp.Elem().Field(i).Name

		fieldValue, _ := jsonData[fieldName]

		if fieldValue != nil {
			setValue(field, fieldValue)
		}
	}

	return paramPtr.Interface()
}

func setValue(field reflect.Value, value interface{}) {
	fieldType := field.Type()
	switch fieldType.Kind() {
	case reflect.Struct:
		if reflect.ValueOf(value).Type().Kind() == reflect.Map {
			// 针对结构体的字段进行递归赋值
			for i := 0; i < field.NumField(); i++ {
				subField := field.Field(i)
				if !subField.CanSet() {
					subFieldValue := reflect.ValueOf(value).MapIndex(reflect.ValueOf(fieldType.Field(i).Name))
					setValue(subField, subFieldValue.Interface())
				}
			}
		}
	case reflect.Slice:
		sliceValue := reflect.MakeSlice(fieldType, 0, 0)
		sliceData := value.([]interface{})
		for _, elem := range sliceData {
			elemVal := reflect.New(fieldType.Elem()).Elem()
			setValue(elemVal, elem)
			sliceValue = reflect.Append(sliceValue, elemVal)
		}
		field.Set(sliceValue)
	case reflect.Array:
		for i := 0; i < field.Len(); i++ {
			setValue(field.Index(i), value.([]interface{})[i])
		}
	default:
		if field.IsValid() && field.CanSet() {
			field.Set(reflect.ValueOf(value))
		} else {
			pointerToField := reflect.NewAt(field.Type(), unsafe.Pointer(field.UnsafeAddr()))
			//pointerToField.Elem().Set(reflect.ValueOf(value))
			// 此处使用强制类型转换，定义接收的数据类型时需要提前选择合适的类型
			pointerToField.Elem().Set(reflect.ValueOf(value).Convert(pointerToField.Elem().Type()))
		}
	}
}
