(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-2d0bd799"], {
    "2bc6": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = {
            name: "DataType",
            props: {
                text: {
                    type: String,
                    default: "string",
                    required: !0
                },
                record: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    validators: []
                }
            },
            created: function() {
                this.intiValidator()
            },
            methods: {
                intiValidator: function() {
                    var t = this.record;
                    if (null != t.validateInstance)
                        for (var e in this.getJsonKeyLength(t.validateInstance),
                            t.validateInstance) {
                            var a = e + ":" + t.validateInstance[e];
                            this.validators.push({
                                key: e,
                                val: a
                            })
                        }
                },
                getJsonKeyLength: function(t) {
                    var e = 0;
                    if (null != t)
                        for (var a in t)
                            t.hasOwnProperty(a) && e++;
                    return e
                }
            }
        }
            , r = a("2877")
            , i = Object(r.a)(n, (function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", [t.record.validateStatus ? a("span", {
                    staticClass: "knife4j-request-validate-jsr"
                }, [a("a-tooltip", {
                    attrs: {
                        placement: "right"
                    }
                }, [a("template", {
                    slot: "title"
                }, t._l(t.validators, (function(e) {
                        return a("div", {
                            key: e.key
                        }, [t._v(t._s(e.val))])
                    }
                )), 0), t._v(" " + t._s(t.text) + " ")], 2)], 1) : a("span", [t._v(t._s(null == t.text || "" == t.text ? "string" : t.text))])])
            }
        ), [], !1, null, null, null);
        e.default = i.exports
    }
}]);