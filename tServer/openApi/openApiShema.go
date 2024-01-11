package openApi

// Schema is specified by OpenAPI/Swagger 3.0 standard.
type Schema struct {
	OneOf                SchemaRefs     `json:"oneOf,omitempty"`
	AnyOf                SchemaRefs     `json:"anyOf,omitempty"`
	AllOf                SchemaRefs     `json:"allOf,omitempty"`
	Not                  *SchemaRef     `json:"not,omitempty"`
	Type                 string         `json:"type,omitempty"`
	Title                string         `json:"title,omitempty"`
	Format               string         `json:"format,omitempty"`
	Description          string         `json:"description,omitempty"`
	Enum                 []interface{}  `json:"enum,omitempty"`
	Default              interface{}    `json:"default,omitempty"`
	Example              interface{}    `json:"example,omitempty"`
	ExternalDocs         *ExternalDocs  `json:"externalDocs,omitempty"`
	UniqueItems          bool           `json:"uniqueItems,omitempty"`
	ExclusiveMin         bool           `json:"exclusiveMinimum,omitempty"`
	ExclusiveMax         bool           `json:"exclusiveMaximum,omitempty"`
	Nullable             bool           `json:"nullable,omitempty"`
	ReadOnly             bool           `json:"readOnly,omitempty"`
	WriteOnly            bool           `json:"writeOnly,omitempty"`
	AllowEmptyValue      bool           `json:"allowEmptyValue,omitempty"`
	XML                  interface{}    `json:"xml,omitempty"`
	Deprecated           bool           `json:"deprecated,omitempty"`
	Min                  *float64       `json:"minimum,omitempty"`
	Max                  *float64       `json:"maximum,omitempty"`
	MultipleOf           *float64       `json:"multipleOf,omitempty"`
	MinLength            uint64         `json:"minLength,omitempty"`
	MaxLength            *uint64        `json:"maxLength,omitempty"`
	Pattern              string         `json:"pattern,omitempty"`
	MinItems             uint64         `json:"minItems,omitempty"`
	MaxItems             *uint64        `json:"maxItems,omitempty"`
	Items                *SchemaRef     `json:"items,omitempty"`
	Required             []string       `json:"required,omitempty"`
	Properties           Schemas        `json:"properties,omitempty"`
	MinProps             uint64         `json:"minProperties,omitempty"`
	MaxProps             *uint64        `json:"maxProperties,omitempty"`
	AdditionalProperties *SchemaRef     `json:"additionalProperties,omitempty"`
	Discriminator        *Discriminator `json:"discriminator,omitempty"`
}

type Schemas struct {
	refs map[string]SchemaRef //*gmap.ListMap // map[string]SchemaRef
}

// Discriminator is specified by OpenAPI/Swagger standard version 3.0.
type Discriminator struct {
	PropertyName string            `json:"propertyName"`
	Mapping      map[string]string `json:"mapping,omitempty"`
}
