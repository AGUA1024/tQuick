package openApi

// Callback is specified by OpenAPI/Swagger standard version 3.0.
type Callback map[string]*Path

type Callbacks map[string]*CallbackRef

type CallbackRef struct {
	Ref   string
	Value *Callback
}


// Components is specified by OpenAPI/Swagger standard version 3.0.
type Components struct {
	Schemas         map[string]*SchemaRef `json:"schemas,omitempty"`
	Parameters      ParametersMap        `json:"parameters,omitempty"`
	Headers         Headers              `json:"headers,omitempty"`
	RequestBodies   RequestBodies        `json:"requestBodies,omitempty"`
	Responses       Responses            `json:"responses,omitempty"`
	SecuritySchemes SecuritySchemes      `json:"securitySchemes,omitempty"`
	Examples        Examples             `json:"examples,omitempty"`
	Links           Links                `json:"links,omitempty"`
	Callbacks       Callbacks            `json:"callbacks,omitempty"`
}

type ParametersMap map[string]*ParameterRef

type RequestBodies map[string]*RequestBodyRef
