package subCmd

import (
	"database/sql"
	"embed"
	"fmt"
	"github.com/spf13/cobra"
	_ "gorm.io/driver/mysql"
	"os"
	"strings"
	"text/template"
)

//go:embed genDbModel.tpl
var genDbModelTplFS embed.FS

type Field struct {
	Name     string
	Type     string
	DBName   string
	JsonName string
}

type TemplateData struct {
	StructName string
	Fields     []Field
}

func init() {
	GenDbModelCmd.Flags().StringVarP(new(string), "link", "l", "", "DbLink")
	GenDbModelCmd.Flags().StringVarP(new(string), "table", "t", "", "TableName")
}

var GenDbModelCmd = &cobra.Command{
	Use:     "gen-model",
	Aliases: []string{"g-m"},
	Short:   "Get the database data model",
	Long:    `One click generates DbModel code according to the Link of the database and the tableName`,
	Run: func(cmd *cobra.Command, args []string) {
		tpl := "genDbModel.tpl"

		dbLink, _ := cmd.Flags().GetString("link")
		if dbLink == "" {
			panic("DbLink is empty, Please enter the input parameters")
		}

		table, _ := cmd.Flags().GetString("table")
		if table == "" {
			panic("TableName is empty, Please enter the input parameters")
		}

		// 生成的文件名
		fileName := fmt.Sprintf("%s_DbModel.go", table)

		// 判断是否在工程根目录
		_, err := os.Stat("go.mod")
		if err != nil {
			if os.IsNotExist(err) {
				fmt.Println("The command to generate the DbModel needs to be executed in the project root directory.")
			} else {
				fmt.Println("An error occurred while checking whether the current path is the root of the project.")
			}
			return
		}

		db, err := sql.Open("mysql", dbLink)
		if err != nil {
			panic(err)
		}
		defer db.Close()

		rows, err := db.Query(fmt.Sprintf("SHOW COLUMNS FROM %s", table))
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		var fields []Field
		for rows.Next() {
			var field, fieldType, nullable, key, extra string
			var defaultValue sql.NullString
			err := rows.Scan(&field, &fieldType, &nullable, &key, &defaultValue, &extra)
			if err != nil {
				panic(err)
			}

			fields = append(fields, Field{
				Name:     strings.Title(field),
				Type:     sqlTypeToGoType(fieldType),
				DBName:   field,
				JsonName: strings.ToLower(field),
			})
		}

		templateFile, err := genDbModelTplFS.ReadFile(tpl)
		tmpl, err := template.New("DbModelTemp").Parse(string(templateFile))
		if err != nil {
			panic(err)
		}

		file, err := os.Create(fileName)
		if err != nil {
			panic(err)
		}
		defer file.Close()

		err = tmpl.Execute(file, TemplateData{
			StructName: fmt.Sprintf("%s_model", table),
			Fields:     fields,
		})
		if err != nil {
			panic(err)
		}

		fmt.Printf("Generate DbModel Success: %s", fileName)
	},
}

func sqlTypeToGoType(sqlType string) string {
	switch {
	case strings.Contains(sqlType, "int") || strings.Contains(sqlType, "bigint"):
		return "int"
	case strings.Contains(sqlType, "tinyint"):
		return "int8"
	case strings.Contains(sqlType, "smallint"):
		return "int16"
	case strings.Contains(sqlType, "mediumint"):
		return "int32"
	case strings.Contains(sqlType, "varchar"), strings.Contains(sqlType, "text"), strings.Contains(sqlType, "char"):
		return "string"
	case strings.Contains(sqlType, "float"):
		return "float32"
	case strings.Contains(sqlType, "double"):
		return "float64"
	case strings.Contains(sqlType, "decimal"):
		return "float64"
	case strings.Contains(sqlType, "bool"):
		return "bool"
	case strings.Contains(sqlType, "datetime") || strings.Contains(sqlType, "timestamp"):
		return "time.Time"
	case strings.Contains(sqlType, "date"):
		return "string"
	case strings.Contains(sqlType, "blob") || strings.Contains(sqlType, "binary"):
		return "[]byte"
	// add more cases as needed
	default:
		return "interface{}"
	}
}
