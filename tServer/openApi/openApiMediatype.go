package openApi

// MediaType is specified by OpenAPI/Swagger 3.0 standard.
type MediaType struct {
	Schema   *SchemaRef           `json:"schema,omitempty"`
	Example  interface{}          `json:"example,omitempty"`
	Examples Examples             `json:"examples,omitempty"`
	Encoding map[string]*Encoding `json:"encoding,omitempty"`
}

// Content is specified by OpenAPI/Swagger 3.0 standard.
type Content map[string]MediaType

// Encoding is specified by OpenAPI/Swagger 3.0 standard.
type Encoding struct {
	ContentType   string  `json:"contentType,omitempty"`
	Headers       Headers `json:"headers,omitempty"`
	Style         string  `json:"style,omitempty"`
	Explode       *bool   `json:"explode,omitempty"`
	AllowReserved bool    `json:"allowReserved,omitempty"`
}
