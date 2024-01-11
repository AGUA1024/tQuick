package openApi

type ResponseRef struct {
	Ref   string
	Value *Response
}

// Responses is specified by OpenAPI/Swagger 3.0 standard.
type Responses map[string]*Response
