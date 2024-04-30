package tServer

import (
	"net/http"
	"reflect"
)

type Api struct {
	Method     string
	ReqPath    string
	Group      string
	Act        string
	ArrReqType []ReqParam
	RspType    reflect.Type
	HandleFunc reflect.Value
}

type ReqParam struct {
	ParmIn    string
	ParamType reflect.Type
}

type ApiSet struct {
	Method string
	Api    *Api
}

func (a *ApiSet) SetMethodGet() {
	a.Method = http.MethodGet
}

func (a *ApiSet) SetMethodPost() {
	a.Method = http.MethodPost
}

func (a *ApiSet) SetMethodDelete() {
	a.Method = http.MethodDelete
}

func (a *ApiSet) SetMethodPut() {
	a.Method = http.MethodPut
}

func (a *ApiSet) SetMethodOptions() {
	a.Method = http.MethodOptions
}

func (a *ApiSet) SetMethodHead() {
	a.Method = http.MethodHead
}

func (a *ApiSet) SetMethodPatch() {
	a.Method = http.MethodPatch
}

func (a *ApiSet) SetMethodTrace() {
	a.Method = http.MethodTrace
}

func (a *ApiSet) SetMethodConnect() {
	a.Method = http.MethodConnect
}

func (a *ApiSet) SetMethodAny() {
	a.Method = "ANY"
}

func (r *ReqParam) SetParmInBody() {
	r.ParmIn = OpenApiInBody
}

func (r *ReqParam) SetParmInQuery() {
	r.ParmIn = OpenApiInQuery
}

func (r *ReqParam) SetParmInHeader() {
	r.ParmIn = OpenApiInHeader
}

func (r *ReqParam) SetParmInFormData() {
	r.ParmIn = OpenApiInFormData
}

func (r *ReqParam) SetParmInPath() {
	r.ParmIn = OpenApiInPath
}

func (a Api) GetMethod() string {
	return a.Method
}

func (a *Api) GetReqPath() string {
	return a.ReqPath
}

func (a *Api) GetGroup() string {
	return a.Group
}

func (a *Api) GetAct() string {
	return a.Act
}
