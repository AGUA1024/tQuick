package main

import (
	"fmt"
	"github.com/spf13/cobra"
	"os"
	"strings"
	"text/template"
)

type apiTempVar struct {
	PkgName string
	ApiName string
}

const apiTemplate = `package {{.ApiName}}

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/AGUA1024/tQuick/tServer"
)

func init() {
	tServer.RouteRegister({{.ApiName}}{})
}

type {{.ApiName}} struct {
	tServer.Controller ` + "`route:\"{{.ApiName}}.routePath\" method:\"{{.ApiName}}.method\" group:\"{{.ApiName}}.group\" act:\"{{.ApiName}}.act\"`" + `
}


type {{.ApiName}}ReqUri struct {
	tServer.HttpUri
}

type {{.ApiName}}ReqHeader struct {
	tServer.HttpHeader
}

type {{.ApiName}}Req struct {
	tServer.HttpQuery
}

type {{.ApiName}}Rsp struct {
}

func (g GetUserInfo) {{.ApiName}}(ctx *gin.Context, head *reqHeader, req *require, uri *reqUri) *respones {
	panic("Not Implemented")

	return nil
}
`

var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "Serve the application",
	Long:  `Serve the application on the specified port.`,
	Run: func(cmd *cobra.Command, args []string) {
		port, _ := cmd.Flags().GetInt("port")
		fmt.Printf("Serving on port %d\n", port)
	},
}

var createApiCmd = &cobra.Command{
	Use:   "create-api",
	Short: "Generate api code",
	Long:  `One click generates api code according to the name of the api`,
	Run: func(cmd *cobra.Command, args []string) {
		cmdName, _ := cmd.Flags().GetString("name")
		if cmdName == "" {
			panic("ApiName is empty, Please enter the input parameters in the format of \"{pkgName}.{apiName}\"")
		}

		if len(cmdName) < 2 {
			panic("Please enter the input parameters in the format of \"{pkgName}.{apiName}\"")
		}

		arrNames := strings.Split(cmdName, ".")

		apiName := arrNames[len(arrNames)-1]
		pkgName := arrNames[len(arrNames)-2]

		arrDirsName := arrNames[:len(arrNames)-1]

		dirPath := "."
		for _, v := range arrDirsName {
			dirPath += "/" + v

			if _, err := os.Stat(dirPath); os.IsNotExist(err) {
				err = os.MkdirAll(dirPath, 0755)
				if err != nil {
					panic("Create folder failed")
				}
			}
		}

		tmpl, err := template.New("apiTemp").Parse(apiTemplate)
		if err != nil {
			panic(err)
		}
		data := apiTempVar{
			PkgName: pkgName,
			ApiName: apiName,
		}

		apiFile := dirPath + "/" + apiName + ".go"
		file, err := os.Create(apiFile)
		if err != nil {
			panic(err)
		}
		defer file.Close()
		err = tmpl.Execute(file, data)
		if err != nil {
			panic(err)
		}

		fmt.Printf("Create Api Success: %s", apiFile)
	},
}

func main() {
	createApiCmd.Flags().StringVarP(new(string), "name", "n", "", "ApiName")
	serveCmd.AddCommand(createApiCmd)
	serveCmd.Execute()
}
