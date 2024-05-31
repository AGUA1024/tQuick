type {{.StructName}} struct { {{range .Fields}}
    {{.Name}} {{.Type}} `db:"{{.DBName}}" json:"{{.JsonName}}"`{{end}}
}