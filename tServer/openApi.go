package tServer

import (
	"encoding/json"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"github.com/gin-gonic/gin"
	"reflect"
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
	TypeInteger    = `integer`
	TypeNumber     = `number`
	TypeBoolean    = `boolean`
	TypeArray      = `array`
	TypeString     = `string`
	TypeFile       = `file`
	TypeObject     = `object`
	FormatInt32    = `int32`
	FormatInt64    = `int64`
	FormatDouble   = `double`
	FormatByte     = `byte`
	FormatBinary   = `binary`
	FormatDate     = `date`
	FormatDateTime = `date-time`
	FormatPassword = `password`
)

const (
	ParameterInHeader = `header`
	ParameterInPath   = `path`
	ParameterInQuery  = `query`
	ParameterInBody   = `body`
)

// AddInput is the structured parameter for function OpenApiV3.Add.
type AddInput struct {
	Path   string      // Path specifies the custom path if this is not configured in Meta of struct tag.
	Prefix string      // Prefix specifies the custom route path prefix, which will be added with the path tag in Meta of struct tag.
	Method string      // Method specifies the custom HTTP method if this is not configured in Meta of struct tag.
	Object interface{} // Object can be an instance of struct or a route function.
}

type Code interface {
	// Code returns the integer number of current error code.
	Code() int

	// Message returns the brief message for current error code.
	Message() string

	// Detail returns the detailed information of current error code,
	// which is mainly designed as an extension field for error code.
	Detail() interface{}
}

type IApi interface {
	GetAct() string
	GetMethod() string
	GetReqPath() string
	GetGroup() string
}

// Add adds an instance of struct or a route function to OpenApiV3 definition implements.
func DocInit(s *Server) {
	apiSet := s.Api
	c := s.g

	c.GET("/knife4j/openapi.json", func(c *gin.Context) {
		c.String(200, `[
			{
				"name": "tQuick服务器接口文档",
				"url": "/data/knife4j.json",
				"swaggerVersion": "2.0",
				"location": "/"
			}
		]`)
	})

	// 绑定静态资源
	c.StaticFile("/doc.html", "../kenife4j/doc.html")
	c.Static("/webjars/js", "../kenife4j/webjars/js")
	c.Static("/webjars/css", "../kenife4j/webjars/css")

	routPaths := map[string]openApi.Path{}
	components := map[string]*openApi.SchemaRef{}

	for reqPath, v := range apiSet {
		getComponents(components, v)

		routPaths[reqPath] = openApi.Path{
			Ref:         "",
			Summary:     "",
			Description: "",
			Connect:     getOpts(v.Connect),
			Delete:      getOpts(v.Delete),
			Get:         getOpts(v.Get),
			Head:        getOpts(v.Head),
			Options:     getOpts(v.Options),
			Patch:       getOpts(v.Patch),
			Post:        getOpts(v.Post),
			Put:         getOpts(v.Put),
			Trace:       getOpts(v.Trace),
			Servers:     nil,
			Parameters:  nil,
		}
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
			Title:          "OpenApiV3.Info.Title",
			Description:    "OpenApiV3.Info.Description",
			TermsOfService: "OpenApiV3.Info.TermsOfService",
			Contact:        nil,
			License:        nil,
			Version:        "OpenApiV3.Info.Version",
		},
		Paths:        routPaths,
		Security:     nil,
		Servers:      nil,
		Tags:         nil,
		ExternalDocs: nil,
	}

	json, _ := json.Marshal(oai)
	openApiV3Str := string(json)

	c.GET("/data/knife4j.json", func(c *gin.Context) {
		c.String(200, openApiV3Str)
	})
}

func getOpts(methodApi *Api) *openApi.Operation {
	if methodApi == nil {
		return nil
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
			panic("GetHttpParmaType Error")
		}

		arrRetValue := getHttpTypeFunc.Func.Call(
			[]reflect.Value{reflect.New(reqType)},
		)

		InType := arrRetValue[0].String()

		arrApiParam = append(arrApiParam, openApi.Parameter{
			Name:        reqType.Name(),
			In:          InType,
			Description: "Parameter.Description",
			Schema: &openApi.SchemaRef{
				Ref: "#/components/schemas/" + reqType.PkgPath() + "/" + reqType.Name(),
			},
		})
	}
	return &openApi.Operation{
		Tags:        []string{methodApi.GetGroup()},
		Summary:     methodApi.GetAct(),
		Description: "Get.Description",
		OperationID: "",
		Parameters:  arrApiParam,
		RequestBody: nil,
		Responses: map[string]*openApi.Response{
			"200": {
				Description: "",
				Headers:     nil,
				Content: map[string]openApi.MediaType{
					"text/xml": {
						Schema: &openApi.SchemaRef{
							Ref: "#/components/schemas/" + methodApi.RspType.Elem().PkgPath() + "/" + methodApi.RspType.Elem().Name(),
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
