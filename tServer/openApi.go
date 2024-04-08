package tServer

import (
	"fmt"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"reflect"
	"regexp"
	"strings"
)

// OpenApiV3 is the structure defined from:
// https://swagger.io/specification/
// https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md
type OpenApiV3 struct {
	Config       openApi.Config                `json:"-"`
	OpenAPI      string                        `json:"openapi"`
	Components   openApi.Components            `json:"components,omitempty"`
	Info         openApi.Info                  `json:"info"`
	Paths        openApi.Paths                 `json:"paths"`
	Security     *openApi.SecurityRequirements `json:"security,omitempty"`
	Servers      *openApi.Servers              `json:"servers,omitempty"`
	Tags         *openApi.Tags                 `json:"tags,omitempty"`
	ExternalDocs *openApi.ExternalDocs         `json:"externalDocs,omitempty"`
}

const (
	TypeInteger = `integer`
	TypeNumber  = `number`
	TypeBoolean = `boolean`
	TypeArray   = `array`
	TypeString  = `string`
	TypeByte    = `byte`
	TypeFile    = `file`
	TypeObject  = `object`

	FormatInt32    = `int32`
	FormatInt64    = `int64`
	FormatFloat    = `float`
	FormatDouble   = `double`
	FormatByte     = `byte`
	FormatBinary   = `binary`
	FormatDate     = `date`
	FormatDateTime = `date-time`
	FormatPassword = `password`
)

type IApi interface {
	GetAct() string
	GetMethod() string
	GetReqPath() string
	GetGroup() string
}

func getOpts(methodApi *Api) *openApi.Operation {
	if methodApi == nil {
		return nil
	}

	reqBody := &openApi.RequestBody{
		Description: "",
		Required:    true,
	}

	arrApiParam := []openApi.Parameter{}
	for _, reqType := range methodApi.arrReqType {
		// 指针类型兼容
		if reqType.Kind() == reflect.Pointer {
			reqType = reqType.Elem()
		}

		// 方法是指针类型的方法
		getHttpTypeFunc, ok := reflect.PointerTo(reqType).MethodByName("GetHttpParmaType")
		if !ok {
			panic("<In getOpts> GetHttpParmaType Error")
		}

		arrRetValue := getHttpTypeFunc.Func.Call(
			[]reflect.Value{reflect.New(reqType)},
		)

		InType := arrRetValue[0].String()

		if InType == ParameterInBody {
			refPath := strings.Replace(reqType.PkgPath()+"/"+reqType.Name(), "/", ".", -1)
			reqBody.Content = map[string]openApi.MediaType{
				"application/json": {
					Schema: &openApi.SchemaRef{
						Ref: "#/components/schemas/" + refPath,
					},
				},
			}

			continue
		}

		if reqType.Kind() == reflect.Struct {
			arrApiParam = append(arrApiParam, openApi.Parameter{
				Name:        reqType.Name(),
				In:          InType,
				Description: "Parameter.Description",
				Required:    true,
				Schema:      &openApi.SchemaRef{},
			})
		}
	}

	refPath := strings.Replace(methodApi.RspType.Elem().PkgPath()+"/"+methodApi.RspType.Elem().Name(), "/", ".", -1)
	return &openApi.Operation{
		Tags:        []string{methodApi.GetGroup()},
		Summary:     methodApi.GetAct(),
		Description: "Get.Description",
		OperationID: "",
		Parameters:  arrApiParam,
		RequestBody: reqBody,
		Responses: map[string]*openApi.Response{
			"200": {
				Description: "",
				Headers:     nil,
				Content: map[string]openApi.MediaType{
					"application/json": {
						Schema: &openApi.SchemaRef{
							Ref: "#/components/schemas/" + refPath,
						},
					},
				},
				Links: nil,
			},
		},
		Deprecated:   false,
		Callbacks:    nil,
		Security:     nil,
		Servers:      nil,
		ExternalDocs: nil,
	}
}

func goType2SwaggerTypeAndFormat(typeName string) (swaggerType, swaggerFormat string) {
	// 基础数据类型
	switch typeName {
	case "int", "int32":
		return TypeInteger, FormatInt32
	case "int64":
		return TypeInteger, FormatInt64
	case "float32":
		return TypeNumber, FormatFloat
	case "float64":
		return TypeNumber, FormatDouble
	case "string":
		return TypeString, ""
	case "uint8":
		return TypeByte, ""
	case "bool":
		return TypeBoolean, ""
	}

	// 数组数据类型
	if tp, format, ok := getSwaggerArrTypeAndFormat(typeName); ok {
		return tp, format
	}

	panic(fmt.Sprintf("<In goType2SwaggerTypeAndFormat> ErrorType:[%s]", typeName))
}

func getSwaggerArrTypeAndFormat(typeName string) (swaggerType, swaggerFormat string, ok bool) {
	// 数组类型
	// Count the number of "[]" in the string
	count := strings.Count(typeName, "[]")

	// Remove all "[]" from the string to get the type
	t := strings.Replace(typeName, "[]", "", -1)

	if count >= 1 {
		swaggerTypeName, _ := goType2SwaggerTypeAndFormat(t)
		// 定义正则表达式，匹配最后一个类型名称
		re := regexp.MustCompile(`\[\](\w+)$`)

		// 使用正则表达式替换最后一个类型名称
		return TypeArray, re.ReplaceAllString(typeName, swaggerTypeName), true
	}

	return "", "", false
}

func getItems(tp reflect.Type, stack int) *openApi.Item {
	switch tp.Kind() {
	case reflect.Pointer:
		tp = tp.Elem()

	case reflect.Slice:
		tp = tp.Elem()
		stack++
	}

	switch tp.Kind() {
	case reflect.Struct:
		refPath := strings.Replace(tp.PkgPath()+"/"+tp.Name(), "/", ".", -1)
		return &openApi.Item{
			Ref: "#/components/schemas/" + refPath,
		}
	case reflect.Slice:
		return &openApi.Item{
			Items: getItems(tp, stack),
			Type:  TypeArray,
		}
	}

	swgType, swgFormat := goType2SwaggerTypeAndFormat(tp.Name())
	return &openApi.Item{
		Type:   swgType,
		Format: swgFormat,
	}
}
