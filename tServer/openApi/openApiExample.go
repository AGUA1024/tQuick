package openApi

// Example is specified by OpenAPI/Swagger 3.0 standard.
type Example struct {
	Summary       string      `json:"summary,omitempty"`
	Description   string      `json:"description,omitempty"`
	Value         interface{} `json:"value,omitempty"`
	ExternalValue string      `json:"externalValue,omitempty"`
}

type Examples map[string]*ExampleRef

type ExampleRef struct {
	Ref   string
	Value *Example
}
