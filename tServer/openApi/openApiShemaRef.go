package openApi

type SchemaRefs []SchemaRef

type SchemaRef struct {
	Properties any      `json:"properties,omitempty"`
	Type       string   `json:"type,omitempty"`
	Required   []string `json:"required,omitempty"`
	Items      Item     `json:"items,omitempty"`
	Ref        string   `json:"$ref,omitempty"`
}

type Item struct {
	Type string `json:"type,omitempty"`
}

type Propertie struct {
	Format      string `json:"format,omitempty"`
	Description string `json:"description,omitempty"`
	Properties  any    `json:"properties,omitempty"`
	Type        string `json:"type,omitempty"`
	Ref         string `json:"$ref,omitempty"`
}
