package openApi

// Config provides extra configuration feature for OpenApiV3 implements.
type Config struct {
	ReadContentTypes        []string    // ReadContentTypes specifies the default MIME types for consuming if MIME types are not configured.
	WriteContentTypes       []string    // WriteContentTypes specifies the default MIME types for producing if MIME types are not configured.
	CommonRequest           interface{} // Common request structure for all paths.
	CommonRequestDataField  string      // Common request field name to be replaced with certain business request structure. Eg: `Data`, `Request.`.
	CommonResponse          interface{} // Common response structure for all paths.
	CommonResponseDataField string      // Common response field name to be replaced with certain business response structure. Eg: `Data`, `Response.`.
	IgnorePkgPath           bool        // Ignores package name for schema name.
}
