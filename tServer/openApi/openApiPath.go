package openApi

// Path is specified by OpenAPI/Swagger standard version 3.0.
type Path struct {
	Ref         string      `json:"$ref,omitempty"`
	Summary     string      `json:"summary,omitempty"`
	Description string      `json:"description,omitempty"`
	Connect     *Operation  `json:"connect,omitempty"`
	Delete      *Operation  `json:"delete,omitempty"`
	Get         *Operation  `json:"get,omitempty"`
	Head        *Operation  `json:"head,omitempty"`
	Options     *Operation  `json:"options,omitempty"`
	Patch       *Operation  `json:"patch,omitempty"`
	Post        *Operation  `json:"post,omitempty"`
	Put         *Operation  `json:"put,omitempty"`
	Trace       *Operation  `json:"trace,omitempty"`
	Servers     Servers     `json:"servers,omitempty"`
	Parameters  Parameters  `json:"parameters,omitempty"`
}

// Paths are specified by OpenAPI/Swagger standard version 3.0.
type Paths map[string]Path

const (
	responseOkKey = `200`
)

type addPathInput struct {
	Path     string      // Precise route path.
	Prefix   string      // Route path prefix.
	Method   string      // Route method.
	Function interface{} // Uniformed function.
}