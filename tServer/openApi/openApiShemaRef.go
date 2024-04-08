package openApi

type SchemaRefs []SchemaRef

type SchemaRef struct {
	Properties any      `json:"properties,omitempty"`
	Type       string   `json:"type,omitempty"`
	Required   []string `json:"required,omitempty"`
	Items      *Item     `json:"items,omitempty"`
	Ref        string   `json:"$ref,omitempty"`
}

type Item struct {
	Items  any    `json:"items,omitempty"`
	Type   string `json:"type,omitempty"`
	Format string `json:"format,omitempty"`
	Ref    string `json:"$ref,omitempty"`
}

type Propertie struct {
	Description string `json:"description,omitempty"`
	Properties  any    `json:"properties,omitempty"`
	Type        string `json:"type,omitempty"`
	Items       *Item   `json:"items,omitempty"`
	Ref         string `json:"$ref,omitempty"`
}
