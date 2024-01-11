package openApi

// Link is specified by OpenAPI/Swagger standard version 3.0.
type Link struct {
	OperationID  string                 `json:"operationId,omitempty"`
	OperationRef string                 `json:"operationRef,omitempty"`
	Description  string                 `json:"description,omitempty"`
	Parameters   map[string]interface{} `json:"parameters,omitempty"`
	Server       *Server                `json:"server,omitempty"`
	RequestBody  interface{}            `json:"requestBody,omitempty"`
}

type Links map[string]LinkRef

type LinkRef struct {
	Ref   string
	Value *Link
}

