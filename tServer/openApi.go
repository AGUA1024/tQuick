package tServer

import (
	"encoding/json"
	"fmt"
	"github.com/AGUA1024/tQuick/tLog"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"net/http"
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

var inType2Tag = map[string]string{
	OpenApiInFormData: "form",
	OpenApiInHeader:   "header",
	OpenApiInQuery:    "query",
	OpenApiInPath:     "uri",
	OpenApiInBody:     "json",
}

type IApi interface {
	GetAct() string
	GetMethod() string
	GetReqPath() string
	GetGroup() string
}

func GetOpenApiJson(apiSet map[string]*ApiSet, appName string, version string) string {
	routPaths := map[string]openApi.Path{}
	components := map[string]*openApi.SchemaRef{}

	for reqPath, v := range apiSet {
		getComponents(components, v)

		// 请求路径，文档参数兼容动态路由类型
		re := regexp.MustCompile(`:(\w+)`)
		newPath := re.ReplaceAllString(reqPath, "{$1}")

		openApiPath := openApi.Path{}
		switch v.Method {
		case http.MethodGet:
			openApiPath.Get = getOpts(v.Api)
		case http.MethodPost:
			openApiPath.Post = getOpts(v.Api)
		case http.MethodDelete:
			openApiPath.Delete = getOpts(v.Api)
		case http.MethodPut:
			openApiPath.Put = getOpts(v.Api)
		case http.MethodConnect:
			openApiPath.Connect = getOpts(v.Api)
		case http.MethodTrace:
			openApiPath.Trace = getOpts(v.Api)
		case http.MethodPatch:
			openApiPath.Patch = getOpts(v.Api)
		case http.MethodHead:
			openApiPath.Head = getOpts(v.Api)
		case http.MethodOptions:
			openApiPath.Options = getOpts(v.Api)
		}

		routPaths[newPath] = openApiPath
	}

	oai := &OpenApiV3{
		Config:  openApi.Config{},
		OpenAPI: "3.0.0",
		Components: openApi.Components{
			Schemas:         components,
			Parameters:      nil,
			Headers:         nil,
			RequestBodies:   nil,
			Responses:       nil,
			SecuritySchemes: nil,
			Examples:        nil,
			Links:           nil,
			Callbacks:       nil,
		},
		Info: openApi.Info{
			Title:          appName,
			Description:    "OpenApiV3.Info.Description",
			TermsOfService: "OpenApiV3.Info.TermsOfService",
			Contact:        nil,
			License:        nil,
			Version:        version,
		},
		Paths:        routPaths,
		Security:     nil,
		Servers:      nil,
		Tags:         nil,
		ExternalDocs: nil,
	}

	json, _ := json.Marshal(oai)
	openApiV3Str := string(json)

	return openApiV3Str
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

	for _, v := range methodApi.ArrReqType {
		reqType := v.ParamType
		if reqType == nil {
			return nil
		}

		// 指针类型兼容
		if reqType.Kind() == reflect.Pointer {
			reqType = reqType.Elem()
		}

		inType := GetInTypeByRefType(reqType)

		// body
		switch inType {
		case OpenApiInBody:
			refPath := strings.Replace(reqType.PkgPath()+"/"+reqType.Name(), "/", ".", -1)
			reqBody.Content = map[string]openApi.MediaType{
				"application/json": {
					Schema: &openApi.SchemaRef{
						Ref: "#/components/schemas/" + refPath,
					},
				},
			}
		case OpenApiInHeader, OpenApiInQuery, OpenApiInFormData, OpenApiInPath:
			// Parameters
			if reqType.Kind() == reflect.Struct {
				for i := 0; i < reqType.NumField(); i++ {
					field := reqType.Field(i)

					isRequired := false
					// 跳过匿名对象，即跳过继承类的判断
					if field.Anonymous {
						continue
					}

					// Parameters数据值支持基础数据类型，如整型、浮点型、布尔型、字符串
					switch field.Type.Kind() {
					case reflect.Slice, reflect.Map, reflect.Func, reflect.Chan:
						panic("Parameters supports only basic data types: numbers, floating-point numbers, strings, Booleans")
					}

					if strings.ToLower(field.Tag.Get("binding")) == "required" {
						isRequired = true
					}

					tagName := field.Tag.Get(inType2Tag[inType])
					arrApiParam = append(arrApiParam, openApi.Parameter{
						Name:        tagName,
						In:          inType,
						Description: "Parameter.Description",
						Required:    isRequired,
						Schema:      &openApi.SchemaRef{},
					})
				}
			}
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

	errMsg := fmt.Sprintf("<In goType2SwaggerTypeAndFormat> ErrorType:[%s]", typeName)
	tLog.Error(errMsg)
	panic(errMsg)
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

func getComponents(schemas map[string]*openApi.SchemaRef, apiSet *ApiSet) {
	api := apiSet.Api

	if api == nil {
		return
	}

	tpStack := []reflect.Type{}
	// 请求参数

	for _, v := range api.ArrReqType {
		tp := v.ParamType
		if tp == nil {
			return
		}

		// 指针类型兼容
		if tp.Kind() == reflect.Pointer {
			tp = tp.Elem()
		}

		tpStack = append(tpStack, tp)
	}

	tpStack = append(tpStack, api.RspType)

	for len(tpStack) > 0 {
		tp := tpStack[0]
		tpStack = tpStack[1:]

		// 兼容指针类型和数组类型，若是指针类型则将tp的值设置为指针所指的地址的值
		if tp.Kind() == reflect.Pointer {
			tp = tp.Elem()
		}

		switch tp.Kind() {
		case reflect.Struct:
			refPath := strings.Replace(tp.PkgPath()+"/"+tp.Name(), "/", ".", -1)

			inType := GetInTypeByRefType(tp)

			var ref *openApi.SchemaRef
			var arrTypeNode []reflect.Type
			if inType != "" {
				ref, arrTypeNode = getSchemaRef(tp, inType2Tag[inType])
			} else {
				// response 目前没有提供标签的获取方法，默认使用json标签
				ref, arrTypeNode = getSchemaRef(tp)
			}

			tpStack = append(tpStack, arrTypeNode...)
			schemas[refPath] = ref

		case reflect.Slice:
			for tp.Kind() == reflect.Slice {
				tp = tp.Elem()
			}

			// 过滤基础数据类型
			if tp.Kind() != reflect.Struct {
				continue
			}

			refPath := strings.Replace(tp.PkgPath()+"/"+tp.Name(), "/", ".", -1)

			ref, arrTypeNode := getSchemaRef(tp)
			tpStack = append(tpStack, arrTypeNode...)
			schemas[refPath] = ref
		}
	}

	return
}

func getSchemaRef(tp reflect.Type, args ...string) (*openApi.SchemaRef, []reflect.Type) {
	properties := map[string]any{}
	arrRequired := []string{}
	arrParamType := []reflect.Type{}

	for i := 0; i < tp.NumField(); i++ {
		field := tp.Field(i)

		// 跳过匿名字段，目的是跳过继承来的对象
		if field.Anonymous == true {
			continue
		}

		// 必须字段判断
		if strings.ToLower(field.Tag.Get("binding")) == "required" {
			arrRequired = append(arrRequired, field.Name)
		}

		fiedType := field.Type

		tagName := "json"
		if len(args) != 0 {
			tagName = args[0]
		}

		propName := strings.Split(field.Tag.Get(tagName), ",")[0]

		if propName == "" {
			ErrMsg := fmt.Sprintf("Api Field Tag NoFound: %s", field.Name)
			tLog.Errorf(ErrMsg)
			panic(ErrMsg)
		}

		// 结构体类型递归判断
		if fiedType.Kind() == reflect.Struct {
			refPath := strings.Replace(field.Type.PkgPath()+"/"+tagName, "/", ".", -1)
			properties[propName] = openApi.Propertie{
				Description: field.Tag.Get("desc"),
				Ref:         "#/components/schemas/" + refPath,
			}
			arrParamType = append(arrParamType, fiedType)
		} else if fiedType.Kind() == reflect.Slice {
			propertie := openApi.Propertie{
				Type:  TypeArray,
				Items: getItems(fiedType, 0),
			}

			properties[propName] = propertie

			arrParamType = append(arrParamType, fiedType)
		} else { // 常规类型
			swgType, _ := goType2SwaggerTypeAndFormat(fiedType.Name())
			properties[propName] = openApi.Propertie{
				Description: field.Tag.Get("desc"),
				Type:        swgType,
			}
		}

	}

	return &openApi.SchemaRef{
		Properties: properties,
		Type:       TypeObject,
		Required:   arrRequired,
	}, arrParamType
}

func GetInTypeByRefType(tp reflect.Type) string {
	instance, ok := reflect.New(tp).Interface().(IParam)
	if !ok {
		return ""
	}

	return instance.OpenApiInType()
}
