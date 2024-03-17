package subCmd

import (
	"embed"
	"fmt"
	"github.com/spf13/cobra"
	"os"
	"text/template"
)

//go:embed main.tpl
var mainTplFS embed.FS

//go:embed serverConf.tpl
var serverConfTplFS embed.FS

func init() {
	ProjectInitCmd.Flags().StringVarP(new(string), "name", "n", "", "ProjectName")
}

type mainTempVar struct {
	PkgName string
}

type confTempVar struct {
	AppName string
}

var ProjectInitCmd = &cobra.Command{
	Use:   "create-project",
	Short: "Create a new tQucik project",
	Long:  `Create and initialize a back-end project for the tQuick framework`,
	Run: func(cmd *cobra.Command, args []string) {
		mainTpl := "main.tpl"
		serverConfTpl := "serverConf.tpl"

		projectName, _ := cmd.Flags().GetString("name")
		if projectName == "" {
			panic("ProjectName is empty, Please enter the input parameters")
		}

		if _, err := os.Stat(projectName); os.IsNotExist(err) {
			err = os.MkdirAll(projectName, 0755)
			if err != nil {
				panic("Create folder failed")
			}
		}

		apiDir := fmt.Sprintf("./%s/api", projectName)
		if _, err := os.Stat(apiDir); os.IsNotExist(err) {
			err = os.MkdirAll(apiDir, 0755)
			if err != nil {
				panic("Create apiDir failed")
			}
		}

		logDir := fmt.Sprintf("./%s/log", projectName)
		if _, err := os.Stat(logDir); os.IsNotExist(err) {
			err = os.MkdirAll(logDir, 0755)
			if err != nil {
				panic("Create logDir failed")
			}
		}

		// main 函数
		mainTempFile, err := mainTplFS.ReadFile(mainTpl)
		tmpl, err := template.New("mainTemp").Parse(string(mainTempFile))
		if err != nil {
			panic(err)
		}

		mainFile, err := os.Create(fmt.Sprintf("./%s/main.go", projectName))
		if err != nil {
			panic(err)
		}
		defer mainFile.Close()

		err = tmpl.Execute(mainFile, mainTempVar{
			PkgName: projectName,
		})

		if err != nil {
			panic(err)
		}

		// 配置文件
		serverConfTempFile, err := serverConfTplFS.ReadFile(serverConfTpl)
		confTmpl, err := template.New("serverConfTemp").Parse(string(serverConfTempFile))
		if err != nil {
			panic(err)
		}

		confFile, err := os.Create(fmt.Sprintf("./%s/server.yaml", projectName))
		if err != nil {
			panic(err)
		}
		defer confFile.Close()

		err = confTmpl.Execute(confFile, confTempVar{
			AppName: projectName,
		})

		if err != nil {
			panic(err)
		}

		fmt.Printf("tQuick project init Success!")
	},
}
