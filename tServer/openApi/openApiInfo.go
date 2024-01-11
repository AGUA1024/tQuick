package openApi

// Info is specified by OpenAPI/Swagger standard version 3.0.
type Info struct {
	Title          string   `json:"title"`
	Description    string   `json:"description,omitempty"`
	TermsOfService string   `json:"termsOfService,omitempty"`
	Contact        *Contact `json:"contact,omitempty"`
	License        *License `json:"license,omitempty"`
	Version        string   `json:"version"`
}

// Contact is specified by OpenAPI/Swagger standard version 3.0.
type Contact struct {
	Name  string `json:"name,omitempty"`
	URL   string `json:"url,omitempty"`
	Email string `json:"email,omitempty"`
}

// License is specified by OpenAPI/Swagger standard version 3.0.
type License struct {
	Name string `json:"name"`
	URL  string `json:"url,omitempty"`
}
