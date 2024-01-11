package openApi

// Server is specified by OpenAPI/Swagger standard version 3.0.
type Server struct {
	URL         string                     `json:"url"`
	Description string                     `json:"description,omitempty"`
	Variables   map[string]*ServerVariable `json:"variables,omitempty"`
}

// ServerVariable is specified by OpenAPI/Swagger standard version 3.0.
type ServerVariable struct {
	Enum        []string `json:"enum,omitempty"`
	Default     string   `json:"default,omitempty"`
	Description string   `json:"description,omitempty"`
}

// Servers is specified by OpenAPI/Swagger standard version 3.0.
type Servers []Server
