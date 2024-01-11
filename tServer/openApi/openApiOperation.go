package openApi

// Operation represents "operation" specified by OpenAPI/Swagger 3.0 standard.
type Operation struct {
	Tags         []string              `json:"tags,omitempty"`
	Summary      string                `json:"summary,omitempty"`
	Description  string                `json:"description,omitempty"`
	OperationID  string                `json:"operationId,omitempty"`
	Parameters   []Parameter           `json:"parameters,omitempty"`
	RequestBody  *RequestBody          `json:"requestBody,omitempty"`
	Responses    map[string]*Response  `json:"responses,omitempty"`
	Deprecated   bool                  `json:"deprecated,omitempty"`
	Callbacks    *Callbacks            `json:"callbacks,omitempty"`
	Security     *SecurityRequirements `json:"security,omitempty"`
	Servers      *Servers              `json:"servers,omitempty"`
	ExternalDocs *ExternalDocs         `json:"externalDocs,omitempty"`
}

