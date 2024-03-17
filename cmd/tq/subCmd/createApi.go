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
	PkgName string
	ApiName string
}

//go:embed createApi.tpl
var createApiTplFS embed.FS

func init() {
	CreateApiCmd.Flags().StringVarP(new(string), "name", "n", "", "ApiName")
}

var CreateApiCmd = &cobra.Command{
	Use:   "create-api",
	Short: "Generate api code",
	Long:  `One click generates api code according to the name of the api`,
	Run: func(cmd *cobra.Command, args []string) {
		tpl := "createApi.tpl"
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

		templateFile, err := createApiTplFS.ReadFile(tpl)
		tmpl, err := template.New("apiTemp").Parse(string(templateFile))
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
