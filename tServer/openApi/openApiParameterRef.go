package openApi

// Parameters is specified by OpenAPI/Swagger 3.0 standard.
type Parameters []ParameterRef

type ParameterRef struct {
	Ref   string
	Value *Parameter
}

