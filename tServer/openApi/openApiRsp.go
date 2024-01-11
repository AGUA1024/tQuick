package openApi

// Response is specified by OpenAPI/Swagger 3.0 standard.
type Response struct {
	Description string      `json:"description"`
	Headers     Headers     `json:"headers,omitempty"`
	Content     Content     `json:"content,omitempty"`
	Links       Links       `json:"links,omitempty"`
}

