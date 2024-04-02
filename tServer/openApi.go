package tServer

import (
	"embed"
	"encoding/json"
	"fmt"
	"github.com/AGUA1024/tQuick/global"
	"github.com/AGUA1024/tQuick/tServer/openApi"
	"github.com/gin-gonic/gin"
	"io/fs"
	"net/http"
	"path"
	"reflect"
	"regexp"
	"strings"
)

//go:embed kenife4j/doc.html
var docHtmlFiles embed.FS

//go:embed kenife4j/webjars/*
var webjarsFiles embed.FS

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
func (s *Server) ApiDocInit() {
	apiSet := s.Api
	c := s.g

	appName := global.GetGlobalConfig().Server.App
	version := global.GetGlobalConfig().Server.Version
	apiDoc := global.GetGlobalConfig().Server.ApiDoc
	apiPathDir := path.Dir(apiDoc)

	c.GET("/knife4j/openapi.json", func(c *gin.Context) {
		c.String(200, fmt.Sprintf(`[
			{
				"name": "%s",
				"url": "/data/knife4j.json",
				"swaggerVersion": "2.0",
				"location": "/"
			}
		]`, appName))
	})

	docHtmlData, err := docHtmlFiles.ReadFile("kenife4j/doc.html")
	if err != nil {
		panic(err)
	}

	// 使用嵌入的静态文件作为文件系统
	embeddedStaticFiles, _ := fs.Sub(webjarsFiles, "kenife4j/webjars")
	// 绑定静态资源
	c.GET(apiDoc, func(c *gin.Context) {
		c.Header("Content-Type", "text/html")
		c.String(200, string(docHtmlData))
	})

	c.StaticFS(fmt.Sprintf("%s/webjars", apiPathDir), http.FS(embeddedStaticFiles))

	routPaths := map[string]openApi.Path{}
	components := map[string]*openApi.SchemaRef{}

	for reqPath, v := range apiSet {
		getComponents(components, v)

		// 请求路径，文档参数兼容动态路由类型
		re := regexp.MustCompile(`:(\w+)`)
		newPath := re.ReplaceAllString(reqPath, "{$1}")

		routPaths[newPath] = openApi.Path{
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

	c.GET(fmt.Sprintf("%s/data/knife4j.json", apiPathDir), func(c *gin.Context) {
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

		for i := 0; i < reqType.NumField(); i++ {
			parma := reqType.Field(i)
			required := true
			// 跳过匿名对象，即跳过继承类的判断
			if parma.Anonymous {
				continue
			}

			// 如果是可选项则跳过判断
			if strings.ToLower(parma.Tag.Get("required")) == "false" {
				required = false
			}

			if parma.Type.Kind() == reflect.Struct {
				arrApiParam = append(arrApiParam, openApi.Parameter{
					Name:        parma.Name,
					In:          InType,
					Description: "Parameter.Description",
					Required:    required,
					Schema: &openApi.SchemaRef{
						Ref: "#/components/schemas/" + parma.Type.PkgPath() + "/" + parma.Type.Name(),
					},
				})
			} else {
				arrApiParam = append(arrApiParam, openApi.Parameter{
					Name:        parma.Name,
					In:          InType,
					Description: parma.Tag.Get("desc"),
					Required:    required,
					Schema: &openApi.SchemaRef{
						Type: parma.Type.Name(),
					},
				})
			}
		}
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
