package tServer

import "reflect"

type Api struct {
	Method     string
	ReqPath    string
	Group      string
	Act        string
	ReqTypeSet ReqSet
	RspType    reflect.Type
	HandleFunc reflect.Value
}

type ReqSet struct {
	Body   reflect.Type
	Form   reflect.Type
	Query  reflect.Type
	Uri    reflect.Type
	Header reflect.Type
}

type ApiSet struct {
	Get     *Api
	Post    *Api
	Put     *Api
	Patch   *Api
	Trace   *Api
	Head    *Api
	Options *Api
	Delete  *Api
	Connect *Api
	Any     *Api
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
