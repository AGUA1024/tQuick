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
	tServer.HttpJsonBody
}

type {{.ApiName}}Rsp struct {
}

func (g {{.ApiName}}) {{.ApiName}}(ctx *gin.Context, head *{{.ApiName}}ReqHeader, req *{{.ApiName}}Req, uri *{{.ApiName}}ReqUri) *{{.ApiName}}Rsp {
	panic("Not Implemented")
	return nil
}
`

var serveCmd = &cobra.Command{
	Use:  "tq",
	Long: `tq is a command-line tool that comes with the tQuick framework and allows you to initialize projects or generate api code.`,
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Help()
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

		// 判断是否在工程根目录
		_, err := os.Stat("go.mod")
		if err != nil {
			if os.IsNotExist(err) {
				fmt.Println("The command to create the API needs to be executed in the project root directory.")
			} else {
				fmt.Println("An error occurred while checking whether the current path is the root of the project.")
			}
			return
		}

		arrNames := strings.Split(cmdName, ".")

		apiName := arrNames[len(arrNames)-1]
		pkgName := arrNames[len(arrNames)-2]

		arrDirsName := arrNames[:len(arrNames)-1]

		dirPath := "./api"
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
