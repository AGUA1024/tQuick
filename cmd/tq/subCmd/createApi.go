package subCmd

import (
	"embed"
	"fmt"
	"github.com/spf13/cobra"
	"os"
	"strings"
	"text/template"
)

type apiTempVar struct {
	PkgName      string
	ApiName      string
	ApiGroupName string
}

//go:embed createApiFile.tpl
var createApiTplFS embed.FS

//go:embed createApiGroupFile.tpl
var createApiGroupTplFS embed.FS

// FirstLower 字符串首字母小写
func FirstLower(s string) string {
	if s == "" {
		return ""
	}
	return strings.ToLower(s[:1]) + s[1:]
}

// FirstUpper 字符串首字母大写
func FirstUpper(s string) string {
	if s == "" {
		return ""
	}
	return strings.ToUpper(s[:1]) + s[1:]
}

func init() {
	CreateApiCmd.Flags().StringVarP(new(string), "name", "n", "", "ApiName")
}

var CreateApiCmd = &cobra.Command{
	Use:   "create-api",
	Short: "Generate api code",
	Long:  `One click generates api code according to the name of the api`,
	Run: func(cmd *cobra.Command, args []string) {
		createApiFileTpl := "createApiFile.tpl"
		createApiGroupTpl := "createApiGroupFile.tpl"

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

		if len(arrNames) != 2 {
			fmt.Println("Please enter the input parameters in the format of \"{pkgName}.{apiName}\"")
			return
		}

		apiName := arrNames[len(arrNames)-1]
		pkgName := arrNames[len(arrNames)-2]

		arrDirsName := arrNames[:len(arrNames)-1]

		dirPath := "./api"
		for _, v := range arrDirsName {
			dirPath += "/" + v

			if _, err := os.Stat(dirPath); os.IsNotExist(err) {
				err = os.MkdirAll(dirPath, 0755)
				if err != nil {
					fmt.Printf("Create folder[%s] failed: %v", dirPath, err)
					return
				}
			}
		}

		data := apiTempVar{
			PkgName:      FirstLower(pkgName),
			ApiName:      apiName,
			ApiGroupName: FirstUpper(pkgName),
		}

		// 创建Api文件
		apiFile := dirPath + "/" + apiName + ".go"

		// 如api已经存在，则不再创建
		if _, err := os.Stat(apiFile); !os.IsNotExist(err) {
			fmt.Println("Create Api Failed: Api Exist!")
			return
		}

		fmt.Println(apiFile, " ", os.IsExist(err))

		apiTempBuf, err := createApiTplFS.ReadFile(createApiFileTpl)
		apiTemp, err := template.New("apiTemp").Parse(string(apiTempBuf))
		if err != nil {
			panic(err)
		}

		file, err := os.Create(apiFile)
		if err != nil {
			panic(err)
		}
		defer file.Close()
		err = apiTemp.Execute(file, data)
		if err != nil {
			panic(err)
		}

		// apiRouteGroup不存在，则创建
		apiRouteGroupFile := dirPath + "/" + pkgName + ".go"
		if _, err := os.Stat(apiRouteGroupFile); os.IsNotExist(err) {
			apiGroupTempBuf, err := createApiGroupTplFS.ReadFile(createApiGroupTpl)
			apiGroupTemp, err := template.New("apiGroupTemp").Parse(string(apiGroupTempBuf))
			if err != nil {
				panic(err)
			}

			routeGroupfile, err := os.Create(apiRouteGroupFile)
			if err != nil {
				panic(err)
			}
			defer routeGroupfile.Close()
			err = apiGroupTemp.Execute(routeGroupfile, data)
			if err != nil {
				panic(err)
			}

		}

		fmt.Printf("Create Api Success: %s", apiFile)
	},
}
