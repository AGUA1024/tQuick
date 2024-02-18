package openApi

type SchemaRefs []SchemaRef

type SchemaRef struct {
	Properties any      `json:"properties,omitempty"`
	Type       string   `json:"type,omitempty"`
	Required   []string `json:"required,omitempty"`
	//
	//Type string `json:"type"`
	Ref string `json:"$ref,omitempty"`
	//Value *Schema `json:"Value,omitempty"`
}

type Propertie struct {
	Format      string `json:"format,omitempty"`
	Description string `json:"description,omitempty"`
	Properties  any    `json:"properties,omitempty"`
	Type        string `json:"type,omitempty"`
	Ref         string `json:"$ref,omitempty"`
}
