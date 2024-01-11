package openApi

// Parameter is specified by OpenAPI/Swagger 3.0 standard.
// See https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md#parameterObject
type Parameter struct {
	Name            string               `json:"name,omitempty"`
	In              string               `json:"in,omitempty"`
	Description     string               `json:"description,omitempty"`
	Style           string               `json:"style,omitempty"`
	Explode         *bool                `json:"explode,omitempty"`
	AllowEmptyValue bool                 `json:"allowEmptyValue,omitempty"`
	AllowReserved   bool                 `json:"allowReserved,omitempty"`
	Deprecated      bool                 `json:"deprecated,omitempty"`
	Required        bool                 `json:"required,omitempty"`
	Schema          *SchemaRef `json:"schema,omitempty"`
	Example         interface{}          `json:"example,omitempty"`
	Examples        *Examples            `json:"examples,omitempty"`
	Content         *Content             `json:"content,omitempty"`
}
