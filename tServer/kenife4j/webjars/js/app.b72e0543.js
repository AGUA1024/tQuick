!function(e) {
    function t(t) {
        for (var a, r, o = t[0], l = t[1], c = t[2], p = 0, d = []; p < o.length; p++)
            r = o[p],
            Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]),
                i[r] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (u && u(t); d.length; )
            d.shift()();
        return s.push.apply(s, c || []),
            n()
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, r = 1; r < n.length; r++) {
                var l = n[r];
                0 !== i[l] && (a = !1)
            }
            a && (s.splice(t--, 1),
                e = o(o.s = n[0]))
        }
        return e
    }
    var a = {}
        , r = {
        app: 0
    }
        , i = {
        app: 0
    }
        , s = [];
    function o(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
            n.l = !0,
            n.exports
    }
    o.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            "chunk-296622eb": 1,
            "chunk-d7d5f59c": 1
        }[e] && t.push(r[e] = new Promise((function(t, n) {
                for (var a = "webjars/css/" + ({}[e] || e) + "." + {
                    "chunk-069eb437": "31d6cfe0",
                    "chunk-296622eb": "20e6d994",
                    "chunk-2d0bd799": "31d6cfe0",
                    "chunk-2d0da532": "31d6cfe0",
                    "chunk-3b888a65": "31d6cfe0",
                    "chunk-3ec4aaa8": "31d6cfe0",
                    "chunk-2d0af44e": "31d6cfe0",
                    "chunk-adb9e944": "31d6cfe0",
                    "chunk-d7d5f59c": "a9ffbfcb",
                    "chunk-f876db6c": "31d6cfe0",
                    "chunk-0fd67716": "31d6cfe0",
                    "chunk-0d102d5a": "31d6cfe0",
                    "chunk-735c675c": "31d6cfe0",
                    "chunk-589faee0": "31d6cfe0"
                }[e] + ".css", i = o.p + a, s = document.getElementsByTagName("link"), l = 0; l < s.length; l++) {
                    var c = s[l]
                        , p = c.getAttribute("data-href") || c.getAttribute("href");
                    if ("stylesheet" === c.rel && (p === a || p === i))
                        return t()
                }
                var u = document.getElementsByTagName("style");
                for (l = 0; l < u.length; l++)
                    if ((p = (c = u[l]).getAttribute("data-href")) === a || p === i)
                        return t();
                var d = document.createElement("link");
                d.rel = "stylesheet",
                    d.type = "text/css",
                    d.onload = t,
                    d.onerror = function(t) {
                        var a = t && t.target && t.target.src || i
                            , s = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                        s.code = "CSS_CHUNK_LOAD_FAILED",
                            s.request = a,
                            delete r[e],
                            d.parentNode.removeChild(d),
                            n(s)
                    }
                    ,
                    d.href = i,
                    document.getElementsByTagName("head")[0].appendChild(d)
            }
        )).then((function() {
                r[e] = 0
            }
        )));
        var n = i[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var a = new Promise((function(t, a) {
                        n = i[e] = [t, a]
                    }
                ));
                t.push(n[2] = a);
                var s, l = document.createElement("script");
                l.charset = "utf-8",
                    l.timeout = 120,
                o.nc && l.setAttribute("nonce", o.nc),
                    l.src = function(e) {
                        return o.p + "webjars/js/" + ({}[e] || e) + "." + {
                            "chunk-069eb437": "907a4e2a",
                            "chunk-296622eb": "e4e811f0",
                            "chunk-2d0bd799": "d2d95c02",
                            "chunk-2d0da532": "0b13c746",
                            "chunk-3b888a65": "8737ce4f",
                            "chunk-3ec4aaa8": "a79d19f8",
                            "chunk-2d0af44e": "edce7802",
                            "chunk-adb9e944": "55c41d5b",
                            "chunk-d7d5f59c": "42190458",
                            "chunk-f876db6c": "4965fec9",
                            "chunk-0fd67716": "d57e2c41",
                            "chunk-0d102d5a": "144e3dee",
                            "chunk-735c675c": "ecb8aa58",
                            "chunk-589faee0": "f3951d02"
                        }[e] + ".js"
                    }(e);
                var c = new Error;
                s = function(t) {
                    l.onerror = l.onload = null,
                        clearTimeout(p);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                                , r = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")",
                                c.name = "ChunkLoadError",
                                c.type = a,
                                c.request = r,
                                n[1](c)
                        }
                        i[e] = void 0
                    }
                }
                ;
                var p = setTimeout((function() {
                        s({
                            type: "timeout",
                            target: l
                        })
                    }
                ), 12e4);
                l.onerror = l.onload = s,
                    document.head.appendChild(l)
            }
        return Promise.all(t)
    }
        ,
        o.m = e,
        o.c = a,
        o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function(e, t) {
            if (1 & t && (e = o(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var a in e)
                    o.d(n, a, function(t) {
                        return e[t]
                    }
                        .bind(null, a));
            return n
        }
        ,
        o.n = function(e) {
            var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
            ;
            return o.d(t, "a", t),
                t
        }
        ,
        o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "",
        o.oe = function(e) {
            throw e
        }
    ;
    var l = window.webpackJsonp = window.webpackJsonp || []
        , c = l.push.bind(l);
    l.push = t,
        l = l.slice();
    for (var p = 0; p < l.length; p++)
        t(l[p]);
    var u = c;
    s.push([0, "chunk-vendors"]),
        n()
}({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "0556": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("99af"),
            n("4de4"),
            n("4160"),
            n("c975"),
            n("a15b"),
            n("ac1f"),
            n("8a79"),
            n("5319"),
            n("159b"),
            n("5609"))
            , r = n("b1c7")
            , i = n("bc3a")
            , s = n.n(i)
            , o = n("4328")
            , l = n.n(o)
            , c = {
            props: {
                data: {
                    type: Object
                }
            },
            computed: {
                language: function() {
                    return this.$store.state.globals.language
                }
            },
            watch: {
                language: function(e, t) {
                    this.initI18n()
                }
            },
            beforeCreate: function() {
                this.form = this.$form.createForm(this, {
                    name: "oauth_form"
                })
            },
            data: function() {
                return {
                    pagination: !1,
                    labelCol: {
                        xs: {
                            span: 26
                        },
                        sm: {
                            span: 5
                        }
                    },
                    wrapperCol: {
                        xs: {
                            span: 26
                        },
                        sm: {
                            span: 18
                        }
                    },
                    securityKeyFlag: !1,
                    oauthFlag: !1,
                    oauth: null,
                    columns: [],
                    globalSecuritys: [],
                    globalSecurityObject: {},
                    securityArr: []
                }
            },
            methods: {
                getCurrentI18nInstance: function() {
                    return this.$i18n.messages[this.language]
                },
                userChange: function(e) {
                    this.oauth.username = e.target.value
                },
                pwdChange: function(e) {
                    this.oauth.password = e.target.value
                },
                clientChage: function(e) {
                    this.oauth.clientId = e.target.value
                },
                clientSecretChage: function(e) {
                    this.oauth.clientSecret = e.target.value
                },
                initI18n: function() {
                    var e = this.getCurrentI18nInstance();
                    this.columns = e.table.authHeaderColumns
                },
                auth: function() {
                    var e = this;
                    if ("password" == this.oauth.grantType) {
                        if (r.a.strBlank(this.oauth.username))
                            return this.$message.info("username can't empty!!!"),
                                !1;
                        if (r.a.strBlank(this.oauth.password))
                            return this.$message.info("password can't empty!!!"),
                                !1
                    }
                    if (r.a.strBlank(this.oauth.clientId))
                        return this.$message.info("clientId can't empty!!!"),
                            !1;
                    if (("accessCode" == this.oauth.grantType || "password" == this.oauth.grantType || "application" == this.oauth.grantType || "client_credentials" == this.oauth.grantType) && r.a.strBlank(this.oauth.clientSecret))
                        return this.$message.info("clientSecret can't empty!!!"),
                            !1;
                    if ("implicit" == this.oauth.grantType || "accessCode" == this.oauth.grantType) {
                        var t = this.oauth.authorizeUrl
                            , n = new Array
                            , a = window.location
                            , i = a.origin + a.pathname;
                        (i = i.replace("/doc.html", "")).endsWith("/") ? i += r.a.getOAuth2Html(!0) : i = i + "/" + r.a.getOAuth2Html(!0);
                        var o = encodeURIComponent(i);
                        if (this.oauth.redirectUri = o,
                        "implicit" == this.oauth.grantType) {
                            n.push("response_type=token"),
                                n.push("client_id=" + this.oauth.clientId),
                                n.push("redirect_uri=" + o),
                                n.push("state=SELF" + this.oauth.state);
                            var c = n.join("&");
                            t = t.indexOf("?") >= 0 ? t + "&" + c : t + "?" + c
                        } else
                            "accessCode" == this.oauth.grantType && (n.push("response_type=code"),
                                n.push("client_id=" + this.oauth.clientId),
                                n.push("redirect_uri=" + o),
                                n.push("state=SELF" + this.oauth.state),
                                c = n.join("&"),
                                t = t.indexOf("?") >= 0 ? t + "&" + c : t + "?" + c);
                        this.oauth.sync(),
                            window.open(t)
                    } else if ("password" == this.oauth.grantType) {
                        var p = s.a.create()
                            , u = {
                            grant_type: "password",
                            username: this.oauth.username,
                            password: this.oauth.password
                        }
                            , d = {
                            url: this.oauth.tokenUrl,
                            method: "post",
                            auth: {
                                username: this.oauth.clientId,
                                password: this.oauth.clientSecret
                            },
                            params: null,
                            timeout: 0,
                            data: l.a.stringify(u)
                        };
                        p.request(d).then((function(t) {
                                var n = t.data;
                                e.applyHignSecurityVersion(n),
                                    e.oauth.granted = !0,
                                    e.oauth.sync(),
                                    e.$message.info("SUCCESS")
                            }
                        )).catch((function(t) {
                                t.response || e.$message.error(t.message)
                            }
                        ))
                    } else if ("application" == this.oauth.grantType || "client_credentials" == this.oauth.grantType) {
                        var h = s.a.create();
                        u = {
                            grant_type: "client_credentials"
                        },
                            d = {
                                url: this.oauth.tokenUrl,
                                method: "post",
                                auth: {
                                    username: this.oauth.clientId,
                                    password: this.oauth.clientSecret
                                },
                                params: null,
                                timeout: 0,
                                data: l.a.stringify(u)
                            },
                            h.request(d).then((function(t) {
                                    var n = t.data;
                                    e.applyHignSecurityVersion(n),
                                        e.oauth.granted = !0,
                                        e.oauth.sync(),
                                        e.$message.info("SUCCESS")
                                }
                            )).catch((function(t) {
                                    t.response || e.$message.error(t.message)
                                }
                            ))
                    }
                },
                applyHignSecurityVersion: function(e) {
                    r.a.checkUndefined(e) && (r.a.checkUndefined(e.token_type) ? (this.oauth.accessToken = e.token_type + " " + e.access_token,
                        this.oauth.tokenType = e.token_type) : r.a.checkUndefined(e.tokenType) && (this.oauth.accessToken = e.tokenType + " " + e.value,
                        this.oauth.tokenType = e.tokenType))
                },
                initLocalOAuth: function() {
                    var e = this.data.instance.oauths;
                    r.a.checkUndefined(e) && (this.oauthFlag = !0,
                        this.oauth = e)
                },
                initLocalSecuritys: function() {
                    var e = this
                        , t = this;
                    t.initLocalOAuth();
                    var n = t.data.instance.securityArrs;
                    r.a.arrNotEmpty(n) && (this.securityKeyFlag = !0);
                    var i = a.a.globalSecurityParamPrefix + this.data.instance.id
                        , s = [];
                    this.$localStore.getItem(a.a.globalSecurityParameterObject).then((function(a) {
                            r.a.arrNotEmpty(n) && e.$localStore.getItem(i).then((function(e) {
                                    if (r.a.checkUndefined(e)) {
                                        var i = [];
                                        n.forEach((function(t) {
                                                var n = e.filter((function(e) {
                                                        return e.id == t.id
                                                    }
                                                ));
                                                n.length > 0 ? r.a.strNotBlank(t.value) ? i.push(t) : i.push(n[0]) : i.push(t)
                                            }
                                        )),
                                            t.securityArr = i
                                    } else
                                        t.securityArr = n;
                                    r.a.checkUndefined(a) ? (t.globalSecurityObject = a,
                                        s = s.concat(a),
                                        t.securityArr.forEach((function(e) {
                                                var n = a[e.id];
                                                r.a.checkUndefined(n) ? e.value = n : t.globalSecurityObject[e.id] = e.value
                                            }
                                        ))) : t.securityArr.forEach((function(e) {
                                            t.globalSecurityObject[e.id] = e.value
                                        }
                                    )),
                                        t.storeToLocalIndexDB()
                                }
                            ))
                        }
                    ))
                },
                storeToLocalIndexDB: function() {
                    var e = a.a.globalSecurityParamPrefix + this.data.instance.id;
                    this.$localStore.setItem(e, this.securityArr),
                        this.$localStore.setItem(a.a.globalSecurityParameterObject, this.globalSecurityObject)
                },
                resetAuth: function() {
                    this.oauthFlag && this.resetOAuth2(),
                    this.securityKeyFlag && this.resetCommonSecurtyAuth(),
                        this.$message.info("SUCCESS")
                },
                resetOAuth2: function() {
                    this.oauth.clear()
                },
                resetCommonSecurtyAuth: function() {
                    var e = this
                        , t = this.securityArr;
                    r.a.arrNotEmpty(t) && (t.forEach((function(t) {
                            t.value = "",
                                e.globalSecurityObject[t.id] = ""
                        }
                    )),
                        this.securityArr = t,
                        this.storeToLocalIndexDB())
                },
                authParamChange: function(e) {
                    var t = this
                        , n = e.target
                        , a = n.getAttribute("data-id")
                        , r = n.value;
                    this.securityArr.forEach((function(e) {
                            e.id == a && (e.value = r,
                                t.globalSecurityObject[e.id] = r)
                        }
                    )),
                        this.storeToLocalIndexDB()
                }
            },
            created: function() {
                this.initI18n(),
                    this.initLocalSecuritys()
            }
        }
            , p = (n("7a48b"),
            n("2877"))
            , u = Object(p.a)(c, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [n("div", {
                    staticClass: "authorize"
                }, [n("a-row", [n("a-button", {
                    attrs: {
                        type: "primary"
                    },
                    domProps: {
                        innerHTML: e._s(e.$t("auth.cancel"))
                    },
                    on: {
                        click: e.resetAuth
                    }
                }, [e._v("注销")])], 1), e.securityKeyFlag ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-table", {
                    attrs: {
                        size: "small",
                        columns: e.columns,
                        dataSource: e.securityArr,
                        pagination: e.pagination,
                        bordered: ""
                    },
                    scopedSlots: e._u([{
                        key: "paramIpt",
                        fn: function(t, a) {
                            return [n("a-input", {
                                attrs: {
                                    value: t,
                                    "data-id": a.id
                                },
                                on: {
                                    change: e.authParamChange
                                }
                            })]
                        }
                    }], null, !1, 2906681342)
                })], 1) : e._e(), e.oauthFlag ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-card", {
                    attrs: {
                        title: "OAuth2"
                    }
                }, [n("a-row", [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("Flow")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        id: "grant",
                        "read-only": "read-only",
                        defaultValue: e.oauth.grantType
                    }
                })], 1)], 1), "accessCode" == e.oauth.grantType || "implicit" == e.oauth.grantType ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("Authorization URL")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        id: "authorizeUrl",
                        "read-only": "read-only",
                        defaultValue: e.oauth.authorizeUrl
                    }
                })], 1)], 1) : e._e(), "password" == e.oauth.grantType || "application" == this.oauth.grantType || "client_credentials" == this.oauth.grantType ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("Token URL")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        id: "tokenUrl",
                        "read-only": "read-only",
                        defaultValue: e.oauth.tokenUrl
                    }
                })], 1)], 1) : e._e(), "password" == e.oauth.grantType ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("username")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        id: "username",
                        value: e.oauth.username
                    },
                    on: {
                        change: e.userChange
                    }
                })], 1)], 1) : e._e(), "password" == e.oauth.grantType ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("password")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        id: "password",
                        type: "password",
                        value: e.oauth.password
                    },
                    on: {
                        change: e.pwdChange
                    }
                })], 1)], 1) : e._e(), n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("clientId")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        value: e.oauth.clientId
                    },
                    on: {
                        change: e.clientChage
                    }
                })], 1)], 1), "accessCode" == e.oauth.grantType || "password" == e.oauth.grantType || "application" == this.oauth.grantType || "client_credentials" == this.oauth.grantType ? n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }, [e._v("clientSecret")]), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-input", {
                    attrs: {
                        value: e.oauth.clientSecret
                    },
                    on: {
                        change: e.clientSecretChage
                    }
                })], 1)], 1) : e._e(), n("a-row", {
                    staticStyle: {
                        "margin-top": "15px"
                    }
                }, [n("a-col", {
                    attrs: {
                        span: 4
                    }
                }), n("a-col", {
                    attrs: {
                        span: 18
                    }
                }, [n("a-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.auth
                    }
                }, [e._v("Authorize")])], 1)], 1)], 1)], 1) : e._e()], 1)])
            }
        ), [], !1, null, "17d89b73", null);
        t.default = u.exports
    },
    "070b": function(e, t, n) {},
    "0f6e": function(e, t, n) {},
    1: function(e, t) {},
    "11f0": function(e, t, n) {},
    "121c": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("d3b7"),
            {
                props: {
                    data: {
                        type: Object
                    }
                },
                components: {
                    Markdown: function() {
                        return n.e("chunk-f876db6c").then(n.bind(null, "68cc"))
                    }
                },
                computed: {
                    swaggerCurrentInstance: function() {
                        return this.$store.state.globals.swaggerCurrentInstance
                    },
                    settings: function() {
                        return this.$store.state.globals.settings
                    }
                },
                data: function() {
                    return {
                        title: "knife4j"
                    }
                },
                created: function() {}
            })
            , r = (n("a213"),
            n("2877"))
            , i = Object(r.a)(a, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [this.settings.enableHomeCustom ? n("a-row", {
                    staticClass: "markdown-body editormd-preview-container"
                }, [n("Markdown", {
                    attrs: {
                        source: e.settings.homeCustomLocation
                    }
                })], 1) : n("a-row", [n("a-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [n("h2", [e._v(e._s(e.swaggerCurrentInstance.title))])]), n("div", {
                    staticClass: "description"
                }, [n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.description"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.description)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.author"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.contact)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.version"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.version)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.host"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.host)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.basePath"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.basePath)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.serviceUrl"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.termsOfService)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.groupName"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.name)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.groupUrl"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.url)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.groupLocation"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.swaggerCurrentInstance.location)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", {
                    domProps: {
                        innerHTML: e._s(e.$t("homePage.apiCountNumber"))
                    }
                })]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, e._l(e.swaggerCurrentInstance.pathArrs, (function(t) {
                        return n("a-row", {
                            key: t.method,
                            staticClass: "content-line-count"
                        }, [n("a-col", {
                            attrs: {
                                span: 3
                            }
                        }, [e._v(" " + e._s(t.method) + " ")]), n("a-col", {
                            attrs: {
                                span: 2
                            }
                        }, [n("a-tag", {
                            attrs: {
                                color: "#108ee9"
                            }
                        }, [e._v(e._s(t.count))])], 1), n("a-divider", {
                            staticClass: "divider-count"
                        })], 1)
                    }
                )), 1)], 1)], 1)])], 1)], 1)
            }
        ), [], !1, null, "6d5256a6", null);
        t.default = i.exports
    },
    1469: function(e, t, n) {
        "use strict";
        n("d3b7"),
            n("ddb0");
        var a = n("a002")
            , r = n.n(a)
            , i = {
            getItem: function(e) {
                return new Promise((function(t, n) {
                        r.a.getItem(e).then((function(e) {
                                t(e)
                            }
                        )).catch((function(e) {
                                n(e)
                            }
                        ))
                    }
                ))
            },
            setItem: function(e, t) {
                return new Promise((function(n, a) {
                        r.a.setItem(e, t).then((function(e) {
                                n(e)
                            }
                        )).catch((function(e) {
                                a(e)
                            }
                        ))
                    }
                ))
            },
            removeItem: function(e) {
                return new Promise((function(t, n) {
                        r.a.removeItem(e).then((function() {
                                t()
                            }
                        )).catch((function(e) {
                                n(e)
                            }
                        ))
                    }
                ))
            },
            clear: function() {
                return new Promise((function(e, t) {
                        r.a.clear().then((function() {
                                e()
                            }
                        )).catch((function(e) {
                                t(e)
                            }
                        ))
                    }
                ))
            },
            length: function() {
                return new Promise((function(e, t) {
                        r.a.length().then((function(t) {
                                e(t)
                            }
                        )).catch((function(e) {
                                t(e)
                            }
                        ))
                    }
                ))
            },
            key: function(e) {
                return new Promise((function(t, n) {
                        r.a.key(e).then((function(e) {
                                t(e)
                            }
                        )).catch((function(e) {
                                n(e)
                            }
                        ))
                    }
                ))
            },
            keys: function() {
                return new Promise((function(e, t) {
                        r.a.keys().then((function(t) {
                                e(t)
                            }
                        )).catch((function(e) {
                                t(e)
                            }
                        ))
                    }
                ))
            },
            iterate: function() {
                return new Promise((function(e, t) {
                        r.a.iterate((function(t, n, a) {
                                e([t, n, a])
                            }
                        )).then((function(t) {
                                e(t)
                            }
                        )).catch((function(e) {
                                t(e)
                            }
                        ))
                    }
                ))
            },
            setDriver: function(e) {
                return new Promise((function(t, n) {
                        t(r.a.setDriver(e))
                    }
                ))
            },
            config: function(e) {
                return new Promise((function(t, n) {
                        t(r.a.config(e))
                    }
                ))
            },
            createInstance: function(e) {
                return new Promise((function(t, n) {
                        t(r.a.createInstance(e))
                    }
                ))
            }
        }
            , s = new (n("2b0e").a)({
            name: "localStore",
            methods: i
        });
        t.a = s
    },
    "15eb": function(e, t, n) {
        "use strict";
        var a = n("070b");
        n.n(a).a
    },
    "1be9": function(e, t, n) {
        "use strict";
        var a = n("9c80");
        n.n(a).a
    },
    "1ee8": function(e, t, n) {},
    2: function(e, t) {},
    "21a5": function(e, t, n) {},
    "229e": function(e, t, n) {
        "use strict";
        var a = n("2a29");
        n.n(a).a
    },
    2395: function(e, t, n) {},
    "2a29": function(e, t, n) {},
    "2ee0": function(e, t, n) {},
    "32ba": function(e, t, n) {},
    3654: function(e, t, n) {},
    "3bbc": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("a4d3"),
            n("e01a"),
            n("99af"),
            n("4160"),
            n("c975"),
            n("b0c0"),
            n("d3b7"),
            n("ac1f"),
            n("5319"),
            n("159b"),
            n("5530"))
            , r = n("b1c7")
            , i = n("5609")
            , s = [{
            title: "参数名称",
            dataIndex: "name",
            width: "30%"
        }, {
            title: "参数说明",
            dataIndex: "description",
            width: "25%"
        }, {
            title: "请求类型",
            dataIndex: "in",
            scopedSlots: {
                customRender: "typeTemplate"
            }
        }, {
            title: "是否必须",
            dataIndex: "require",
            scopedSlots: {
                customRender: "requireTemplate"
            }
        }, {
            title: "数据类型",
            dataIndex: "type",
            scopedSlots: {
                customRender: "datatypeTemplate"
            }
        }, {
            title: "schema",
            dataIndex: "schemaValue",
            width: "15%"
        }]
            , o = [{
            title: "状态码",
            dataIndex: "code",
            width: "20%"
        }, {
            title: "说明",
            dataIndex: "description",
            width: "55%",
            scopedSlots: {
                customRender: "descriptionTemplate"
            }
        }, {
            title: "schema",
            dataIndex: "schema"
        }]
            , l = [{
            title: "参数名称",
            dataIndex: "name",
            width: "30%"
        }, {
            title: "参数说明",
            dataIndex: "description",
            width: "55%"
        }, {
            title: "数据类型",
            dataIndex: "type"
        }]
            , c = [{
            title: "参数名称",
            dataIndex: "name",
            width: "35%"
        }, {
            title: "参数说明",
            dataIndex: "description",
            width: "40%"
        }, {
            title: "类型",
            dataIndex: "type"
        }, {
            title: "schema",
            dataIndex: "schemaValue",
            width: "15%"
        }]
            , p = null
            , u = {
            name: "Document",
            components: {
                editor: n("7c9e"),
                DataType: function() {
                    return n.e("chunk-2d0bd799").then(n.bind(null, "2bc6"))
                },
                EditorShow: function() {
                    return Promise.all([n.e("chunk-3b888a65"), n.e("chunk-3ec4aaa8"), n.e("chunk-2d0af44e")]).then(n.bind(null, "0e36"))
                }
            },
            props: {
                api: {
                    type: Object,
                    required: !0
                },
                swaggerInstance: {
                    type: Object,
                    required: !0
                }
            },
            beforeCreate: function() {
                p = this
            },
            data: function() {
                return {
                    content: "<span>Hello</span>",
                    columns: s,
                    responseHeaderColumns: l,
                    responseStatuscolumns: o,
                    responseParametersColumns: c,
                    expanRows: !0,
                    multipCode: !1,
                    multipCodeDatas: [],
                    multipData: {},
                    page: !1,
                    reqParameters: []
                }
            },
            created: function() {
                this.reqParameters = this.api.reqParameters,
                    p.initResponseCodeParams()
            },
            methods: {
                genUnionTableKey: function() {
                    return r.a.randomMd5()
                },
                initRequestParams: function() {
                    var e = []
                        , t = this
                        , n = i.a.globalTreeTableModelParams + this.api.instanceId
                        , a = (this.swaggerInstance.refTreeTableModels,
                        this.api);
                    null != a.parameters && a.parameters.length > 0 && (e = e.concat(a.parameters)),
                    null != a.refTreetableparameters && a.refTreetableparameters.length > 0 && a.refTreetableparameters.forEach((function(t) {
                            e = e.concat(t.params)
                        }
                    )),
                    null != e && e.sort((function(e, t) {
                            return t.require - e.require
                        }
                    ));
                    var s = [];
                    null != e && e.length > 0 && e.forEach((function(e) {
                            if ("-1" == e.pid) {
                                if (e.children = [],
                                    e.schema) {
                                    var a = e.schemaValue;
                                    if (r.a.checkUndefined(a) && t.$Knife4jModels.exists(n, a)) {
                                        var i = t.$Knife4jModels.getByModelName(n, a);
                                        if (r.a.checkUndefined(i)) {
                                            var o = i.params;
                                            r.a.arrNotEmpty(o) && o.forEach((function(n) {
                                                    var a = t.copyNewParameter(n);
                                                    a.pid = e.id,
                                                        e.children.push(a)
                                                }
                                            ))
                                        }
                                    }
                                }
                                r.a.arrNotEmpty(e.children) || (e.children = null),
                                    s.push(e)
                            }
                        }
                    )),
                        t.reqParameters = s
                },
                storeCacheModels: function(e) {
                    var t = i.a.globalTreeTableModelParams + this.api.instanceId;
                    this.$localStore.setItem(t, e)
                },
                deepTreeTableSchemaModel: function(e, t, n) {
                    var a = this
                        , s = i.a.globalTreeTableModelParams + this.api.instanceId;
                    if (r.a.checkUndefined(e.schemaValue)) {
                        var o = t[e.schemaValue];
                        r.a.checkUndefined(o) && (n.parentTypes.push(e.schemaValue),
                        r.a.arrNotEmpty(o.params) && o.params.forEach((function(i) {
                                var o = a.copyNewParameter(i);
                                if (o.pid = e.id,
                                    e.children.push(o),
                                o.schema && -1 == n.parentTypes.indexOf(o.schemaValue)) {
                                    var l = o.schemaValue;
                                    if (r.a.checkUndefined(l))
                                        if (o.children = [],
                                            a.$Knife4jModels.exists(s, l)) {
                                            var c = a.$Knife4jModels.getByModelName(s, l);
                                            r.a.arrNotEmpty(c) && c.forEach((function(e) {
                                                    var t = a.copyNewParameter(e);
                                                    t.pid = o.id,
                                                        o.children.push(t)
                                                }
                                            ))
                                        } else
                                            a.deepTreeTableSchemaModel(o, t, n),
                                            0 == o.children.length && (o.children = null),
                                                a.$Knife4jModels.addModels(s, l, o.children)
                                }
                            }
                        )))
                    }
                },
                copyNewParameter: function(e) {
                    return {
                        children: e.children,
                        childrenTypes: e.childrenTypes,
                        def: e.def,
                        description: e.description,
                        enum: e.enum,
                        example: e.example,
                        id: e.id,
                        ignoreFilterName: e.ignoreFilterName,
                        in: e.in,
                        level: e.level,
                        name: e.name,
                        parentTypes: e.parentTypes,
                        pid: e.pid,
                        readOnly: e.readOnly,
                        require: e.require,
                        schema: e.schema,
                        schemaValue: e.schemaValue,
                        show: e.show,
                        txtValue: e.txtValue,
                        type: e.type,
                        validateInstance: e.validateInstance,
                        validateStatus: e.validateStatus,
                        value: e.value
                    }
                },
                findModelChildren: function(e, t) {
                    var n = this;
                    null != t && null != t && t.length > 0 && t.forEach((function(a) {
                            a.pid == e.id && (a.children = [],
                                n.findModelChildren(a, t),
                            0 == a.children.length && (a.children = null),
                                e.children.push(a))
                        }
                    ))
                },
                initResponseCodeParams: function() {
                    var e = this;
                    e.multipCode = e.api.multipartResponseSchema;
                    var t = e.api.responseCodes;
                    null != t && null != t && t.forEach((function(t) {
                            if (null != t.schema && null != t.schema) {
                                var n = [];
                                null != t.responseParameters && t.responseParameters.length > 0 && (n = n.concat(t.responseParameters)),
                                null != t.responseTreetableRefParameters && t.responseTreetableRefParameters.length > 0 && t.responseTreetableRefParameters.forEach((function(e) {
                                        n = n.concat(e.params)
                                    }
                                ));
                                var r = [];
                                null != n && n.length > 0 && n.forEach((function(e) {
                                        "-1" == e.pid && (e.children = [],
                                        0 == e.children.length && (e.children = null),
                                            r.push(e))
                                    }
                                ));
                                var i = Object(a.a)(Object(a.a)({}, t), {}, {
                                    data: r
                                });
                                e.multipCode || (e.multipData = i),
                                    e.multipCodeDatas.push(i)
                            }
                        }
                    ))
                },
                formaterJson: function(e) {
                    try {
                        return "string" != typeof e && (e = JSON.stringify(e, void 0, 2)),
                            (e = e.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (function(e) {
                                    var t = "number";
                                    return /^"/.test(e) ? t = /:$/.test(e) ? "key" : "string" : /true|false/.test(e) ? t = "boolean" : /null/.test(e) && (t = "null"),
                                    '<span class="' + t + '">' + e + "</span>"
                                }
                            ))
                    } catch (t) {
                        return e
                    }
                }
            }
        }
            , d = (n("4e19"),
            n("2877"))
            , h = Object(d.a)(u, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "knife4j-document"
                }, [n("a-row", [n("a-row", {
                    staticClass: "knife4j-api-title",
                    attrs: {
                        id: e.api.operationId
                    }
                }, [e._v(" " + e._s(e.api.summary) + " ")]), n("a-row", {
                    class: "knife4j-api-" + e.api.methodType.toLowerCase()
                }, [n("div", {
                    staticClass: "knife4j-api-summary"
                }, [n("span", {
                    staticClass: "knife4j-api-summary-method"
                }, [e._v(e._s(e.api.methodType))]), n("span", {
                    staticClass: "knife4j-api-summary-path"
                }, [e._v(e._s(e.api.showUrl))])])]), n("a-row", {
                    staticClass: "knife4j-api-row"
                }, [n("a-col", {
                    attrs: {
                        span: 12
                    }
                }, [n("a-row", [n("a-col", {
                    staticClass: "api-basic-title",
                    attrs: {
                        span: 6
                    }
                }, [e._v("请求数据类型")]), e._v(" " + e._s(e.api.consumes) + " ")], 1)], 1), n("a-col", {
                    attrs: {
                        span: 12
                    }
                }, [n("a-row", [n("a-col", {
                    staticClass: "api-basic-title",
                    attrs: {
                        span: 6
                    }
                }, [e._v("响应数据类型")]), e._v(" " + e._s(e.api.produces) + " ")], 1)], 1)], 1)], 1), e.api.description ? n("div", [n("div", {
                    staticClass: "api-title"
                }, [e._v(" 接口描述 ")]), e.api.description ? n("div", {
                    staticClass: "api-body-desc",
                    domProps: {
                        innerHTML: e._s(e.api.description)
                    }
                }) : e._e()]) : e._e(), e.api.requestValue ? n("div", [n("div", {
                    staticClass: "api-title"
                }, [e._v(" 请求示例 ")]), n("pre", {
                    staticClass: "api-editor-show",
                    domProps: {
                        innerHTML: e._s(e.formaterJson(e.api.requestValue))
                    }
                })]) : e._e(), n("div", {
                    staticClass: "api-title"
                }, [e._v(" 请求参数 ")]), n("a-table", {
                    attrs: {
                        defaultExpandAllRows: "",
                        columns: e.columns,
                        dataSource: e.reqParameters,
                        rowKey: e.genUnionTableKey,
                        size: "small",
                        pagination: e.page
                    },
                    scopedSlots: e._u([{
                        key: "requireTemplate",
                        fn: function(t) {
                            return [t ? n("span", {
                                staticStyle: {
                                    color: "red"
                                }
                            }, [e._v(e._s(t.toLocaleString()))]) : n("span", [e._v(e._s(t.toLocaleString()))])]
                        }
                    }, {
                        key: "typeTemplate",
                        fn: function(t) {
                            return [n("span", {
                                class: "knife4j-request-" + t
                            }, [e._v(e._s(t))])]
                        }
                    }, {
                        key: "datatypeTemplate",
                        fn: function(e, t) {
                            return [n("data-type", {
                                attrs: {
                                    text: e,
                                    record: t
                                }
                            })]
                        }
                    }])
                }), n("div", {
                    staticClass: "api-title"
                }, [e._v(" 响应状态 ")]), n("a-table", {
                    attrs: {
                        defaultExpandAllRows: e.expanRows,
                        columns: e.responseStatuscolumns,
                        dataSource: e.api.responseCodes,
                        rowKey: "code",
                        size: "small",
                        pagination: e.page
                    },
                    scopedSlots: e._u([{
                        key: "descriptionTemplate",
                        fn: function(t) {
                            return [n("div", {
                                domProps: {
                                    innerHTML: e._s(t)
                                }
                            })]
                        }
                    }])
                }), e.api.multipartResponseSchema ? n("div", e._l(e.multipCodeDatas, (function(t) {
                        return n("a-tabs", {
                            key: t.code
                        }, [n("a-tab-pane", {
                            attrs: {
                                tab: t.code
                            }
                        }, [t.responseHeaderParameters ? n("div", [n("div", {
                            staticClass: "api-title"
                        }, [e._v(" 响应Header ")]), n("a-table", {
                            attrs: {
                                defaultExpandAllRows: e.expanRows,
                                columns: e.responseHeaderColumns,
                                dataSource: t.responseHeaderParameters,
                                rowKey: "id",
                                size: "small",
                                pagination: e.page
                            }
                        })], 1) : e._e(), n("div", {
                            staticClass: "api-title"
                        }, [e._v(" 响应参数 ")]), n("a-table", {
                            attrs: {
                                defaultExpandAllRows: e.expanRows,
                                columns: e.responseParametersColumns,
                                dataSource: t.data,
                                rowKey: "id",
                                size: "small",
                                pagination: e.page
                            }
                        }), n("div", {
                            staticClass: "api-title"
                        }, [e._v(" 响应示例 ")]), t.responseBasicType ? n("div", {
                            staticClass: "api-editor-show"
                        }, [e._v(" " + e._s(t.responseText) + " ")]) : n("pre", {
                            staticClass: "api-editor-show",
                            domProps: {
                                innerHTML: e._s(e.formaterJson(t.responseValue))
                            }
                        })], 1)], 1)
                    }
                )), 1) : n("div", [e.api.responseHeaderParameters ? n("div", [n("div", {
                    staticClass: "api-title"
                }, [e._v(" 响应Header ")]), n("a-table", {
                    attrs: {
                        defaultExpandAllRows: e.expanRows,
                        columns: e.responseHeaderColumns,
                        dataSource: e.api.responseHeaderParameters,
                        rowKey: "id",
                        size: "small",
                        pagination: e.page
                    }
                })], 1) : e._e(), n("div", {
                    staticClass: "api-title"
                }, [e._v(" 响应参数 ")]), n("a-table", {
                    attrs: {
                        defaultExpandAllRows: e.expanRows,
                        columns: e.responseParametersColumns,
                        dataSource: e.multipData.data,
                        rowKey: "id",
                        size: "small",
                        pagination: e.page
                    }
                }), n("div", {
                    staticClass: "api-title"
                }, [e._v(" 响应示例 ")]), e.multipData.responseBasicType ? n("div", {
                    staticClass: "api-editor-show"
                }, [e._v(" " + e._s(e.multipData.responseText) + " ")]) : n("pre", {
                    staticClass: "api-editor-show",
                    domProps: {
                        innerHTML: e._s(e.formaterJson(e.multipData.responseValue))
                    }
                })], 1)], 1)
            }
        ), [], !1, null, "53ae9b90", null);
        t.default = h.exports
    },
    "3cd9": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("a4d3"),
            n("e01a"),
            n("99af"),
            n("4160"),
            n("b0c0"),
            n("d3b7"),
            n("3ca3"),
            n("159b"),
            n("ddb0"),
            n("2b3d"),
            n("5530"))
            , r = '\n.content-line {\n  height: 25px;\n  line-height: 25px;\n}\n.content-line-count {\n  height: 35px;\n  line-height: 35px;\n}\n.title {\n  margin-top: 25px;\n}\n.knife4j-description {\n /*  width: 90%;\n  margin: 15px auto; */\n  margin-top: 5px;\n}\n.divider {\n  margin: 4px 0;\n}\n.divider-count {\n  margin: 8px 0;\n}\n.knife4j-document {\n  margin-top: 30px;\n}\n.api-tab {\n  margin-top: 15px;\n\n  .ant-tag {\n    height: 32px;\n    line-height: 32px;\n  }\n}\n.knife4j-menu-api-deprecated {\n  text-decoration: line-through;\n}\n\n.knife4j-api-title {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #616368;\n  height: 35px;\n  line-height: 35px;\n}\n.knife4j-api-row {\n  height: 45px;\n  line-height: 45px;\n}\n\n.knife4j-api-summary {\n  border-color: #49cc90;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 2px;\n  cursor: pointer;\n}\n.knife4j-api-summary-method {\n  font-size: 14px;\n  font-weight: 700;\n  min-width: 80px;\n  padding: 6px 15px;\n  text-align: center;\n  border-radius: 3px;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n  font-family: Titillium Web, sans-serif;\n  color: #fff;\n}\n.knife4j-api-summary-path {\n  font-size: 14px;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 3 auto;\n  flex: 0 3 auto;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  word-break: break-all;\n  padding: 0 32px;\n}\n\n.knife4j-api-post {\n  border-color: #49cc90;\n  background: rgba(73, 204, 144, 0.1);\n}\n.knife4j-api-post .knife4j-api-summary-method {\n  background: #49cc90;\n}\n\n.knife4j-api-get {\n  border-color: #61affe;\n  background: rgba(97, 175, 254, 0.1);\n}\n.knife4j-api-get .knife4j-api-summary-method {\n  background: #61affe;\n}\n.knife4j-api-head {\n  border-color: #9012fe;\n  background: rgba(144, 18, 254, 0.1);\n}\n.knife4j-api-head .knife4j-api-summary-method {\n  background: #9012fe;\n}\n.knife4j-api-put {\n  border-color: #fca130;\n  background: rgba(252, 161, 48, 0.1);\n}\n.knife4j-api-put .knife4j-api-summary-method {\n  background: #fca130;\n}\n.knife4j-api-delete {\n  border-color: #f93e3e;\n  background: rgba(249, 62, 62, 0.1);\n}\n.knife4j-api-delete .knife4j-api-summary-method {\n  background: #f93e3e;\n}\n.knife4j-api-options {\n  border-color: #0d5aa7;\n  background: rgba(13, 90, 167, 0.1);\n}\n.knife4j-api-options .knife4j-api-summary-method {\n  background: #0d5aa7;\n}\n.knife4j-api-patch {\n  border-color: #50e3c2;\n  background: rgba(80, 227, 194, 0.1);\n}\n.knife4j-api-patch .knife4j-api-summary-method {\n  background: #50e3c2;\n}\n#knife4jDoc ul{\n  padding-left: 10px;\n  list-style: none;\n  counter-reset: ordered;\n}\n\n#knife4jDoc ul li:before {\n  counter-increment: ordered;\n  content: counters(ordered,".")" ";\n  color:#1890ff;\n}\n.api-basic {\n  padding: 11px;\n}\n.api-basic-title {\n  font-size: 14px;\n  font-weight: 700;\n}\n.api-basic-body {\n  font-size: 14px;\n  font-family: -webkit-body;\n}\n.knife4j-api-editor-show {\n  margin: 15px 0;\n  font: 100 12px/18px monaco, andale mono, courier new;\n  padding: 10px 12px;\n  border: #ccc 1px solid;\n  border-left-width: 4px;\n  background-color: #fefefe;\n  box-shadow: 0 0 4px #eee;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #444;\n}\n.knife4j-api-editor-show .string { color: green; }        /*字符串的样式*/\n.knife4j-api-editor-show .number { color: darkorange; }    /*数字的样式*/\n.knife4j-api-editor-show .boolean { color: blue; }        /*布尔型数据的样式*/\n.knife4j-api-editor-show .null { color: magenta; }        /*null值的样式*/\n.knife4j-api-editor-show .key { color: red; }            /*key值的样式*/\n.api-description {\n  border-left: 4px solid #ddd;\n  line-height: 30px;\n}\n.api-body-desc {\n  padding: 10px;\n  min-height: 35px;\n  box-sizing: border-box;\n  border: 1px solid #e8e8e8;\n}\n.ant-card-body {\n  padding: 5px;\n}\n.api-title {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 30px;\n  line-height: 30px;\n  border-left: 4px solid #00ab6d;\n  text-indent: 8px;\n}\n.content-line {\n  height: 25px;\n  line-height: 25px;\n}\n.content-line-count {\n  height: 35px;\n  line-height: 35px;\n}\n.divider {\n  margin: 4px 0;\n}\n.knife4j-doc-m{\n  position: fixed;\n  height: 500px;\n  width: 400px;\n  border: 1px solid #b7b4b4;\n  overflow-y: auto;\n  right: 12px;\n  top: 40px;\n  z-index: 9999;\n  background: #fcfafa;\n}\n';
        n("a15b"),
            n("25f0");
        var i = n("b1c7");
        function s(e) {
            var t = [];
            return null != e && null != e && (function(e, t) {
                t.push("# " + e.title),
                    o(t),
                    t.push("**简介**:" + e.description),
                    o(t),
                    t.push("**HOST**:" + e.host),
                    o(t),
                    t.push("**联系人**:" + e.contact),
                    o(t),
                    t.push("**Version**:" + e.version),
                    o(t),
                    t.push("**接口路径**:" + e.url),
                    o(t),
                    t.push("[TOC]"),
                    o(t)
            }(e, t),
                function(e, t) {
                    null != e.tags && null != e.tags && (t.push("\n"),
                        e.tags.forEach((function(e) {
                                o(t),
                                    t.push("# " + e.name),
                                    null != e.childrens && null != e.childrens && e.childrens.length > 0 ? e.childrens.forEach((function(e) {
                                            !function(e, t) {
                                                o(t),
                                                    t.push("## " + e.summary),
                                                    o(t),
                                                    t.push("**接口地址**:`" + e.showUrl + "`"),
                                                    o(t),
                                                    t.push("**请求方式**:`" + e.methodType + "`"),
                                                    o(t),
                                                    t.push("**请求数据类型**:`" + i.a.toString(e.consumes, "*") + "`"),
                                                    o(t),
                                                    t.push("**响应数据类型**:`" + i.a.toString(e.produces, "*") + "`"),
                                                    o(t),
                                                i.a.strNotBlank(e.author) && (t.push("**开发者**:" + i.a.toString(e.author, "暂无")),
                                                    o(t)),
                                                    t.push("**接口描述**:" + i.a.toString(e.description, "暂无")),
                                                i.a.checkUndefined(e.requestValue) && (o(t),
                                                    t.push("**请求示例**:"),
                                                    o(t),
                                                    t.push("```javascript"),
                                                    t.push(e.requestValue),
                                                    t.push("```")),
                                                    function(e, t) {
                                                        var n = e.reqParameters;
                                                        o(t),
                                                            t.push("**请求参数**:"),
                                                            i.a.arrNotEmpty(n) ? (o(t),
                                                                t.push("| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |"),
                                                                t.push("| -------- | -------- | ----- | -------- | -------- | ------ |"),
                                                                function e(t, n, a) {
                                                                    null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                                                            t.level = a,
                                                                                n.push("|" + c(t) + "|" + i.a.toString(t.description, "") + "|" + i.a.toString(t.in, "") + "|" + i.a.toString(t.require, "") + "|" + i.a.toString(t.type, "") + "|" + i.a.toString(t.schemaValue, "") + "|"),
                                                                                e(t.children, n, t.level + 1)
                                                                        }
                                                                    ))
                                                                }(n, t, 1)) : (o(t),
                                                                t.push("暂无"))
                                                    }(e, t),
                                                    function(e, t) {
                                                        i.a.checkUndefined(e.responseCodes) && e.responseCodes.length > 0 && (o(t),
                                                            t.push("**响应状态**:"),
                                                            o(t),
                                                            t.push("| 状态码 | 说明 | schema |"),
                                                            t.push("| -------- | -------- | ----- | "),
                                                            e.responseCodes.forEach((function(e) {
                                                                    t.push("|" + i.a.toString(e.code, "") + "|" + i.a.toString(e.description, "") + "|" + i.a.toString(e.schema, "") + "|")
                                                                }
                                                            )))
                                                    }(e, t),
                                                    function(e, t) {
                                                        if (e.multipartResponseSchema) {
                                                            var n = e.multipCodeDatas;
                                                            i.a.arrNotEmpty(n) && n.forEach((function(e) {
                                                                    o(t),
                                                                        t.push("**响应状态码-" + i.a.toString(e.code, "") + "**:"),
                                                                        l(e, t)
                                                                }
                                                            ))
                                                        } else
                                                            l(e.multipData, t)
                                                    }(e, t)
                                            }(e, t)
                                        }
                                    )) : t.push("暂无接口文档")
                            }
                        )))
                }(e, t),
                function(e, t) {
                    i.a.checkUndefined(e.markdownFiles) && e.markdownFiles.length > 0 && (o(t),
                        t.push("# 附录"),
                        e.markdownFiles.forEach((function(e) {
                                o(t),
                                i.a.arrNotEmpty(e.children) && (t.push("## " + e.name),
                                    o(t),
                                    e.children.forEach((function(e) {
                                            t.push("### " + e.title),
                                                t.push(e.content)
                                        }
                                    )))
                            }
                        )))
                }(e, t)),
                t.join("\n")
        }
        function o(e) {
            e.push("\n")
        }
        function l(e, t) {
            (function(e, t) {
                    i.a.checkUndefined(e) && e.length > 0 && (o(t),
                        t.push("**响应Header**:"),
                        o(t),
                        t.push("| 参数名称 | 参数说明 | 数据类型 |"),
                        t.push("| -------- | -------- | ----- | "),
                        e.forEach((function(e) {
                                t.push("|" + i.a.toString(e.name, "") + "|" + i.a.toString(e.description, "") + "|" + i.a.toString(e.type, "") + "|")
                            }
                        )))
                }
            )(e.responseHeaderParameters, t),
                o(t),
                t.push("**响应参数**:"),
                o(t),
                i.a.arrNotEmpty(e.data) ? (t.push("| 参数名称 | 参数说明 | 类型 | schema |"),
                    t.push("| -------- | -------- | ----- |----- | "),
                    e.data.forEach((function(e) {
                            e.level = 1,
                                t.push("|" + c(e) + "|" + i.a.toString(e.description, "") + "|" + i.a.toString(e.type, "") + "|" + i.a.toString(e.schemaValue, "") + "|"),
                                function e(t, n, a) {
                                    null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                            t.level = a,
                                                n.push("|" + c(t) + "|" + i.a.toString(t.description, "") + "|" + i.a.toString(t.type, "") + "|" + i.a.toString(t.schemaValue, "") + "|"),
                                                e(t.children, n, t.level + 1)
                                        }
                                    ))
                                }(e.children, t, e.level + 1)
                        }
                    ))) : t.push("暂无"),
                o(t),
                t.push("**响应示例**:"),
                e.responseBasicType ? (t.push("```text"),
                    t.push(e.responseText),
                    t.push("```")) : (t.push("```javascript"),
                    t.push(e.responseValue),
                    t.push("```"))
        }
        function c(e) {
            for (var t = [], n = 1; n < e.level; n++)
                t.push("&emsp;&emsp;");
            return t.join("") + e.name
        }
        n("ac1f"),
            n("5319");
        var p = n("7c5c");
        function u(e) {
            var t = [];
            return null != e && null != e && (function(e) {
                e.push('<!DOCTYPE HTML PUBLIC "-// W3C//DTD HTML 4.0 Transitional//EN">\n  <html>\n  <head>\n      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n      <title>导出Swagger文档到Word</title>\n      <script src="https:// cdn.bootcss.com/jquery/3.2.1/jquery.min.js"><\/script>\n      <style type="text/css">\n          .knife4j-word-body{\n              width: 90%;\n              margin: 20px auto;\n              font-family:"宋体";\n              font-size: 16px;\n          }\n          .knife4j-word-row{\n              position: relative;\n              height: auto;\n              margin-right: 0;\n              margin-left: 0;\n              zoom: 1;\n              display: block;\n              box-sizing: border-box;\n          }\n          .knife4j-word-line{\n              height: 35px;\n              line-height:35px;\n          }\n          .knife4j-word-divider{\n              height: 1px;\n              background: #e8e8e8;\n              border-bottom: 1px solid #e8e8e8;\n          }\n          .knife4j-word-title{\n              font-weight: 600;\n              font-size: 18px;\n              margin-top: 15px;\n              border-left: 3px solid #00ab6d;\n          }\n          .knife4j-word-api{\n              margin-top: 10px;\n          }\n          .knife4j-word-content{\n              margin-top: 10px;\n          }\n          .knife4j-word-code-editor{\n              border: #ccc 1px solid;\n              border-left-width: 4px;\n              background-color: #fefefe;\n              box-shadow: 0 0 4px #eee;\n              word-break: break-all;\n              word-wrap: break-word;\n              color: #444;\n          }\n          .knife4j-word-code-editor .string { color: green; }        /*字符串的样式*/\n          .knife4j-word-code-editor .number { color: darkorange; }    /*数字的样式*/\n          .knife4j-word-code-editor .boolean { color: blue; }        /*布尔型数据的样式*/\n          .knife4j-word-code-editor .null { color: magenta; }        /*null值的样式*/\n          .knife4j-word-code-editor .key { color: red; }            /*key值的样式*/\n          .knife4j-word-method{\n              font-size: 14px;\n              font-weight: 600;\n              margin-right: 10px;\n              text-align: center;\n              border-radius: 3px;\n              text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n          }\n          .knife4j-word-table{\n              width: 120%;\n              border: 1px solid #c7c4c4;\n              border-collapse: collapse;\n          }\n          .knife4j-word-table tr{\n              border: 1px solid #c7c4c4;\n              height: 40px;\n          }\n          .knife4j-word-table th{\n              border: 1px solid #c7c4c4;\n              background-color: #dfdada;\n          }\n          .knife4j-word-table td{\n              border: 1px solid #c7c4c4;\n          }\n      </style>\n  </head>\n  <body>\n  <div class="knife4j-word-body">')
            }(t),
                function(e, t) {
                    t.push("<h1>1.项目说明</h1>"),
                        t.push('<div class="knife4j-word-row">'),
                        t.push('<div class="knife4j-word-line"><strong>标题</strong>:' + e.title + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>简介</strong>:' + e.description + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>作者</strong>:<code>' + e.contact + "</code></div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>HOST</strong>:' + e.host + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>basePath</strong>:' + e.basePath + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>termsOfService</strong>:' + e.termsOfService + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>联系人</strong>:' + e.contact + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Version</strong>:' + e.version + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>GroupName</strong>:' + e.name + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>分组Url</strong>:' + e.url + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>分组Location</strong>:' + e.location + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push("</div>")
                }(e, t),
                function(e, t) {
                    null != e.tags && null != e.tags && (t.push("\n"),
                        t.push("<h1>2.接口列表</h1>"),
                        e.tags.forEach((function(e, n) {
                                var a = "2." + (parseInt(n) + 1)
                                    , r = a + e.name;
                                t.push("<h2>" + r + "</h2>"),
                                    d(t),
                                    null != e.childrens && null != e.childrens && e.childrens.length > 0 ? e.childrens.forEach((function(e, n) {
                                            !function(e, t, n, a) {
                                                d(t);
                                                var r = n + "." + a + e.summary;
                                                t.push("<h3>" + r + "</h3>"),
                                                    t.push('<div class="knife4j-word-api">'),
                                                    t.push('<div class="knife4j-word-title">接口地址</div>'),
                                                    t.push('<div class="knife4j-word-content"><span class="knife4j-word-method">' + e.methodType + "</span>&nbsp;&nbsp;<code>" + e.showUrl + "</code></div>"),
                                                    t.push('<div class="knife4j-word-title">接口描述</div>'),
                                                    t.push('<div class="knife4j-word-content">' + i.a.toString(e.description, "暂无") + "</div>"),
                                                    t.push('<div class="knife4j-word-title">请求数据类型</div>'),
                                                    t.push('<div class="knife4j-word-content"><code>' + i.a.toString(e.consumes, "*") + "</code></div>"),
                                                    t.push('<div class="knife4j-word-title">响应数据类型</div>'),
                                                    t.push('<div class="knife4j-word-content"><code>' + i.a.toString(e.produces, "*") + "</code></div>"),
                                                i.a.strNotBlank(e.author) && (t.push('<div class="knife4j-word-title">开发者</div>'),
                                                    t.push('<div class="knife4j-word-content">' + i.a.toString(e.author, "暂无") + "</div>")),
                                                i.a.checkUndefined(e.requestValue) && (t.push('<div class="knife4j-word-title">请求示例</div>'),
                                                    t.push('<div class="knife4j-word-content">'),
                                                    t.push('<pre class="knife4j-word-code-editor">'),
                                                    e.xmlRequest ? t.push(e.requestValue) : t.push(m(e.requestValue)),
                                                    t.push("</pre>"),
                                                    t.push("</div>")),
                                                    function(e, t) {
                                                        var n = e.reqParameters;
                                                        d(t),
                                                            t.push('<div class="knife4j-word-title">请求参数</div><br/>'),
                                                            t.push('<div class="knife4j-word-content">'),
                                                            t.push('<table class="knife4j-word-table">'),
                                                            t.push("<thead><tr><th>参数名称</th><th>参数说明</th><th>请求类型</th><th>必须</th><th>数据类型</th><th>schema</th></tr></thead>"),
                                                            t.push("<tbody>"),
                                                            i.a.arrNotEmpty(n) ? function e(t, n, a) {
                                                                null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                                                        t.level = a,
                                                                            n.push("<tr>"),
                                                                            n.push("<td>" + f(t) + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.description, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.in, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.require, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.type, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.schemaValue, "") + "</td>"),
                                                                            n.push("</tr>"),
                                                                            e(t.children, n, t.level + 1)
                                                                    }
                                                                ))
                                                            }(n, t, 1) : t.push('<tr><td colspan="6">暂无</td></tr>'),
                                                            t.push("</tbody>"),
                                                            t.push("</table>"),
                                                            t.push("</div>")
                                                    }(e, t),
                                                    function(e, t) {
                                                        i.a.checkUndefined(e.responseCodes) && e.responseCodes.length > 0 && (d(t),
                                                            t.push('<div class="knife4j-word-title">响应状态</div><br/>'),
                                                            t.push('<div class="knife4j-word-content">'),
                                                            t.push('<table class="knife4j-word-table">'),
                                                            t.push("<thead><tr><th>状态码</th><th>说明</th><th>schema</th></tr></thead>"),
                                                            t.push("<tbody>"),
                                                            d(t),
                                                            e.responseCodes.forEach((function(e) {
                                                                    t.push("<tr>"),
                                                                        t.push("<td>" + i.a.toString(e.code, "") + "</td>"),
                                                                        t.push("<td>" + i.a.toString(e.description, "") + "</td>"),
                                                                        t.push("<td>" + i.a.toString(e.schema, "") + "</td>"),
                                                                        t.push("</tr>")
                                                                }
                                                            )),
                                                            t.push("</tbody>"),
                                                            t.push("</table><br/>"),
                                                            t.push("</div>"))
                                                    }(e, t),
                                                    function(e, t) {
                                                        if (e.multipartResponseSchema) {
                                                            var n = e.multipCodeDatas;
                                                            i.a.arrNotEmpty(n) && n.forEach((function(e) {
                                                                    d(t),
                                                                        t.push('<div class="knife4j-word-title">响应状态码-' + i.a.toString(e.code, "") + "</div>"),
                                                                        h(e, t)
                                                                }
                                                            ))
                                                        } else
                                                            h(e.multipData, t)
                                                    }(e, t),
                                                    t.push("</div>")
                                            }(e, t, a, n + 1)
                                        }
                                    )) : t.push("暂无接口文档")
                            }
                        )))
                }(e, t),
                function(e, t) {
                    i.a.checkUndefined(e.markdownFiles) && i.a.arrNotEmpty(e.markdownFiles) && (d(t),
                        t.push("<h1>3.附录</h1>"),
                        e.markdownFiles.forEach((function(e, n) {
                                d(t);
                                var a = "3." + (n + 1) + e.name;
                                t.push("<h2>" + a + "</h2>"),
                                i.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                        t.push("<h3>" + e.title + "</h3>"),
                                            t.push('<div class="knife4j-word-content">'),
                                        i.a.strNotBlank(e.content) && t.push(p.marked.parse(e.content)),
                                            t.push("</div>")
                                    }
                                ))
                            }
                        )))
                }(e, t),
                function(e) {
                    e.push("</div></body></html>")
                }(t)),
                t.join("\n")
        }
        function d(e) {
            e.push("\n")
        }
        function h(e, t) {
            (function(e, t) {
                    i.a.checkUndefined(e) && i.a.arrNotEmpty(e) && (d(t),
                        t.push('<div class="knife4j-word-title">响应Header</div>'),
                        d(t),
                        t.push('<div class="knife4j-word-content">'),
                        t.push('<table class="knife4j-word-table">'),
                        t.push("<thead><tr><th>参数名称</th><th>参数说明</th><th>类型</th></tr></thead>"),
                        t.push("<tbody>"),
                        e.forEach((function(e) {
                                t.push("<tr>"),
                                    t.push("<td>" + i.a.toString(e.name, "") + "</td>"),
                                    t.push("<td>" + i.a.toString(e.description, "") + "</td>"),
                                    t.push("<td>" + i.a.toString(e.type, "") + "</td>"),
                                    t.push("</tr>")
                            }
                        )),
                        t.push("</tbody>"),
                        t.push("</table>"),
                        t.push("</div>"))
                }
            )(e.responseHeaderParameters, t),
                d(t),
                t.push('<div class="knife4j-word-title">响应参数</div>'),
                d(t),
                t.push('<div class="knife4j-word-content">'),
                t.push('<table class="knife4j-word-table">'),
                t.push("<thead><tr><th>参数名称</th><th>参数说明</th><th>类型</th><th>schema</th></tr></thead>"),
                t.push("<tbody>"),
                i.a.arrNotEmpty(e.data) ? e.data.forEach((function(e) {
                        e.level = 1,
                            t.push("<tr>"),
                            t.push("<td>" + f(e) + "</td>"),
                            t.push("<td>" + i.a.toString(e.description, "") + "</td>"),
                            t.push("<td>" + i.a.toString(e.type, "") + "</td>"),
                            t.push("<td>" + i.a.toString(e.schemaValue, "") + "</td>"),
                            t.push("</tr>"),
                            function e(t, n, a) {
                                null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                        t.level = a,
                                            n.push("<tr>"),
                                            n.push("<td>" + f(t) + "</td>"),
                                            n.push("<td>" + i.a.toString(t.description, "") + "</td>"),
                                            n.push("<td>" + i.a.toString(t.type, "") + "</td>"),
                                            n.push("<td>" + i.a.toString(t.schemaValue, "") + "</td>"),
                                            n.push("</tr>"),
                                            e(t.children, n, t.level + 1)
                                    }
                                ))
                            }(e.children, t, e.level + 1)
                    }
                )) : t.push('<tr><td colspan="4">暂无</td></tr>'),
                t.push("</tbody>"),
                t.push("</table>"),
                t.push("</div>"),
                d(t),
                t.push('<div class="knife4j-word-title">响应示例</div>'),
                t.push('<div class="knife4j-word-content"><pre class="knife4j-word-code-editor">'),
                e.responseBasicType ? t.push(e.responseText) : t.push(m(e.responseValue)),
                t.push("</pre></div>")
        }
        function f(e) {
            for (var t = [], n = 1; n < e.level; n++)
                t.push("&nbsp;");
            return t.join("") + e.name
        }
        function m(e) {
            try {
                return "string" != typeof e && (e = JSON.stringify(e, void 0, 2)),
                    (e = e.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (function(e) {
                            var t = "number";
                            return /^"/.test(e) ? t = /:$/.test(e) ? "key" : "string" : /true|false/.test(e) ? t = "boolean" : /null/.test(e) && (t = "null"),
                            '<span class="' + t + '">' + e + "</span>"
                        }
                    ))
            } catch (t) {
                return e
            }
        }
        function g(e) {
            var t = [];
            return null != e && null != e && (function(e) {
                e.push('<!DOCTYPE HTML PUBLIC "-// W3C//DTD HTML 4.0 Transitional//EN">\n  <html>\n  <head>\n      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>\n      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n      <title>Export Word API</title>\n      <script src="https:// cdn.bootcss.com/jquery/3.2.1/jquery.min.js"><\/script>\n      <style type="text/css">\n          .knife4j-word-body{\n              width: 90%;\n              margin: 20px auto;\n              font-family:"宋体";\n              font-size: 16px;\n          }\n          .knife4j-word-row{\n              position: relative;\n              height: auto;\n              margin-right: 0;\n              margin-left: 0;\n              zoom: 1;\n              display: block;\n              box-sizing: border-box;\n          }\n          .knife4j-word-line{\n              height: 35px;\n              line-height:35px;\n          }\n          .knife4j-word-divider{\n              height: 1px;\n              background: #e8e8e8;\n              border-bottom: 1px solid #e8e8e8;\n          }\n          .knife4j-word-title{\n              font-weight: 600;\n              font-size: 18px;\n              margin-top: 15px;\n              border-left: 3px solid #00ab6d;\n          }\n          .knife4j-word-api{\n              margin-top: 10px;\n          }\n          .knife4j-word-content{\n              margin-top: 10px;\n          }\n          .knife4j-word-code-editor{\n              border: #ccc 1px solid;\n              border-left-width: 4px;\n              background-color: #fefefe;\n              box-shadow: 0 0 4px #eee;\n              word-break: break-all;\n              word-wrap: break-word;\n              color: #444;\n          }\n          .knife4j-word-code-editor .string { color: green; }        /*字符串的样式*/\n          .knife4j-word-code-editor .number { color: darkorange; }    /*数字的样式*/\n          .knife4j-word-code-editor .boolean { color: blue; }        /*布尔型数据的样式*/\n          .knife4j-word-code-editor .null { color: magenta; }        /*null值的样式*/\n          .knife4j-word-code-editor .key { color: red; }            /*key值的样式*/\n          .knife4j-word-method{\n              font-size: 14px;\n              font-weight: 600;\n              margin-right: 10px;\n              text-align: center;\n              border-radius: 3px;\n              text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n          }\n          .knife4j-word-table{\n              width: 120%;\n              border: 1px solid #c7c4c4;\n              border-collapse: collapse;\n          }\n          .knife4j-word-table tr{\n              border: 1px solid #c7c4c4;\n              height: 40px;\n          }\n          .knife4j-word-table th{\n              border: 1px solid #c7c4c4;\n              background-color: #dfdada;\n          }\n          .knife4j-word-table td{\n              border: 1px solid #c7c4c4;\n          }\n      </style>\n  </head>\n  <body>\n  <div class="knife4j-word-body">')
            }(t),
                function(e, t) {
                    t.push("<h1>1.Project</h1>"),
                        t.push('<div class="knife4j-word-row">'),
                        t.push('<div class="knife4j-word-line"><strong>title</strong>:' + e.title + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Description</strong>:' + e.description + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Author</strong>:<code>' + e.contact + "</code></div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>HOST</strong>:' + e.host + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>basePath</strong>:' + e.basePath + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>termsOfService</strong>:' + e.termsOfService + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Concat</strong>:' + e.contact + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Version</strong>:' + e.version + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>GroupName</strong>:' + e.name + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Group Url</strong>:' + e.url + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push('<div class="knife4j-word-line"><strong>Location</strong>:' + e.location + "</div>"),
                        t.push('<div class="knife4j-word-divider"></div>'),
                        t.push("</div>")
                }(e, t),
                function(e, t) {
                    null != e.tags && null != e.tags && (t.push("\n"),
                        t.push("<h1>2.Interface list</h1>"),
                        e.tags.forEach((function(e, n) {
                                var a = "2." + (parseInt(n) + 1)
                                    , r = a + e.name;
                                t.push("<h2>" + r + "</h2>"),
                                    y(t),
                                    null != e.childrens && null != e.childrens && e.childrens.length > 0 ? e.childrens.forEach((function(e, n) {
                                            !function(e, t, n, a) {
                                                y(t);
                                                var r = n + "." + a + e.summary;
                                                t.push("<h3>" + r + "</h3>"),
                                                    t.push('<div class="knife4j-word-api">'),
                                                    t.push('<div class="knife4j-word-title">method</div>'),
                                                    t.push('<div class="knife4j-word-content"><span class="knife4j-word-method">' + e.methodType + "</span>&nbsp;&nbsp;<code>" + e.showUrl + "</code></div>"),
                                                    t.push('<div class="knife4j-word-title">Note</div>'),
                                                    t.push('<div class="knife4j-word-content">' + i.a.toString(e.description, "暂无") + "</div>"),
                                                    t.push('<div class="knife4j-word-title">Produces</div>'),
                                                    t.push('<div class="knife4j-word-content"><code>' + i.a.toString(e.consumes, "*") + "</code></div>"),
                                                    t.push('<div class="knife4j-word-title">Consumes</div>'),
                                                    t.push('<div class="knife4j-word-content"><code>' + i.a.toString(e.produces, "*") + "</code></div>"),
                                                i.a.strNotBlank(e.author) && (t.push('<div class="knife4j-word-title">Developer</div>'),
                                                    t.push('<div class="knife4j-word-content">' + i.a.toString(e.author, "暂无") + "</div>")),
                                                i.a.checkUndefined(e.requestValue) && (t.push('<div class="knife4j-word-title">Example</div>'),
                                                    t.push('<div class="knife4j-word-content">'),
                                                    t.push('<pre class="knife4j-word-code-editor">'),
                                                    e.xmlRequest ? t.push(e.requestValue) : t.push(w(e.requestValue)),
                                                    t.push("</pre>"),
                                                    t.push("</div>")),
                                                    function(e, t) {
                                                        var n = e.reqParameters;
                                                        y(t),
                                                            t.push('<div class="knife4j-word-title">Params</div><br/>'),
                                                            t.push('<div class="knife4j-word-content">'),
                                                            t.push('<table class="knife4j-word-table">'),
                                                            t.push("<thead><tr><th>name</th><th>description</th><th>type</th><th>require</th><th>type</th><th>schema</th></tr></thead>"),
                                                            t.push("<tbody>"),
                                                            i.a.arrNotEmpty(n) ? function e(t, n, a) {
                                                                null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                                                        t.level = a,
                                                                            n.push("<tr>"),
                                                                            n.push("<td>" + b(t) + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.description, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.in, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.require, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.type, "") + "</td>"),
                                                                            n.push("<td>" + i.a.toString(t.schemaValue, "") + "</td>"),
                                                                            n.push("</tr>"),
                                                                            e(t.children, n, t.level + 1)
                                                                    }
                                                                ))
                                                            }(n, t, 1) : t.push('<tr><td colspan="6">None</td></tr>'),
                                                            t.push("</tbody>"),
                                                            t.push("</table>"),
                                                            t.push("</div>")
                                                    }(e, t),
                                                    function(e, t) {
                                                        i.a.checkUndefined(e.responseCodes) && e.responseCodes.length > 0 && (y(t),
                                                            t.push('<div class="knife4j-word-title">Status</div><br/>'),
                                                            t.push('<div class="knife4j-word-content">'),
                                                            t.push('<table class="knife4j-word-table">'),
                                                            t.push("<thead><tr><th>code</th><th>description</th><th>schema</th></tr></thead>"),
                                                            t.push("<tbody>"),
                                                            y(t),
                                                            e.responseCodes.forEach((function(e) {
                                                                    t.push("<tr>"),
                                                                        t.push("<td>" + i.a.toString(e.code, "") + "</td>"),
                                                                        t.push("<td>" + i.a.toString(e.description, "") + "</td>"),
                                                                        t.push("<td>" + i.a.toString(e.schema, "") + "</td>"),
                                                                        t.push("</tr>")
                                                                }
                                                            )),
                                                            t.push("</tbody>"),
                                                            t.push("</table><br/>"),
                                                            t.push("</div>"))
                                                    }(e, t),
                                                    function(e, t) {
                                                        if (e.multipartResponseSchema) {
                                                            var n = e.multipCodeDatas;
                                                            i.a.arrNotEmpty(n) && n.forEach((function(e) {
                                                                    y(t),
                                                                        t.push('<div class="knife4j-word-title">code-' + i.a.toString(e.code, "") + "</div>"),
                                                                        v(e, t)
                                                                }
                                                            ))
                                                        } else
                                                            v(e.multipData, t)
                                                    }(e, t),
                                                    t.push("</div>")
                                            }(e, t, a, n + 1)
                                        }
                                    )) : t.push("None")
                            }
                        )))
                }(e, t),
                function(e, t) {
                    i.a.checkUndefined(e.markdownFiles) && i.a.arrNotEmpty(e.markdownFiles) && (y(t),
                        t.push("<h1>3.appendix</h1>"),
                        e.markdownFiles.forEach((function(e, n) {
                                y(t);
                                var a = "3." + (n + 1) + e.name;
                                t.push("<h2>" + a + "</h2>"),
                                i.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                        t.push("<h3>" + e.title + "</h3>"),
                                            t.push('<div class="knife4j-word-content">'),
                                        i.a.strNotBlank(e.content) && t.push(p.marked.parse(e.content)),
                                            t.push("</div>")
                                    }
                                ))
                            }
                        )))
                }(e, t),
                function(e) {
                    e.push("</div></body></html>")
                }(t)),
                t.join("\n")
        }
        function y(e) {
            e.push("\n")
        }
        function v(e, t) {
            (function(e, t) {
                    i.a.checkUndefined(e) && i.a.arrNotEmpty(e) && (y(t),
                        t.push('<div class="knife4j-word-title">响应Header</div>'),
                        y(t),
                        t.push('<div class="knife4j-word-content">'),
                        t.push('<table class="knife4j-word-table">'),
                        t.push("<thead><tr><th>name</th><th>description</th><th>type</th></tr></thead>"),
                        t.push("<tbody>"),
                        e.forEach((function(e) {
                                t.push("<tr>"),
                                    t.push("<td>" + i.a.toString(e.name, "") + "</td>"),
                                    t.push("<td>" + i.a.toString(e.description, "") + "</td>"),
                                    t.push("<td>" + i.a.toString(e.type, "") + "</td>"),
                                    t.push("</tr>")
                            }
                        )),
                        t.push("</tbody>"),
                        t.push("</table>"),
                        t.push("</div>"))
                }
            )(e.responseHeaderParameters, t),
                y(t),
                t.push('<div class="knife4j-word-title">Response Params</div>'),
                y(t),
                t.push('<div class="knife4j-word-content">'),
                t.push('<table class="knife4j-word-table">'),
                t.push("<thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead>"),
                t.push("<tbody>"),
                i.a.arrNotEmpty(e.data) ? e.data.forEach((function(e) {
                        e.level = 1,
                            t.push("<tr>"),
                            t.push("<td>" + b(e) + "</td>"),
                            t.push("<td>" + i.a.toString(e.description, "") + "</td>"),
                            t.push("<td>" + i.a.toString(e.type, "") + "</td>"),
                            t.push("<td>" + i.a.toString(e.schemaValue, "") + "</td>"),
                            t.push("</tr>"),
                            function e(t, n, a) {
                                null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                        t.level = a,
                                            n.push("<tr>"),
                                            n.push("<td>" + b(t) + "</td>"),
                                            n.push("<td>" + i.a.toString(t.description, "") + "</td>"),
                                            n.push("<td>" + i.a.toString(t.type, "") + "</td>"),
                                            n.push("<td>" + i.a.toString(t.schemaValue, "") + "</td>"),
                                            n.push("</tr>"),
                                            e(t.children, n, t.level + 1)
                                    }
                                ))
                            }(e.children, t, e.level + 1)
                    }
                )) : t.push('<tr><td colspan="4">None</td></tr>'),
                t.push("</tbody>"),
                t.push("</table>"),
                t.push("</div>"),
                y(t),
                t.push('<div class="knife4j-word-title">Response Example</div>'),
                t.push('<div class="knife4j-word-content"><pre class="knife4j-word-code-editor">'),
                e.responseBasicType ? t.push(e.responseText) : t.push(w(e.responseValue)),
                t.push("</pre></div>")
        }
        function b(e) {
            for (var t = [], n = 1; n < e.level; n++)
                t.push("&nbsp;");
            return t.join("") + e.name
        }
        function w(e) {
            try {
                return "string" != typeof e && (e = JSON.stringify(e, void 0, 2)),
                    (e = e.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (function(e) {
                            var t = "number";
                            return /^"/.test(e) ? t = /:$/.test(e) ? "key" : "string" : /true|false/.test(e) ? t = "boolean" : /null/.test(e) && (t = "null"),
                            '<span class="' + t + '">' + e + "</span>"
                        }
                    ))
            } catch (t) {
                return e
            }
        }
        function k(e) {
            var t = [];
            return null != e && null != e && (function(e, t) {
                t.push("# " + e.title),
                    x(t),
                    t.push("**Description**:" + e.description),
                    x(t),
                    t.push("**HOST**:" + e.host),
                    x(t),
                    t.push("**Contacts**:" + e.contact),
                    x(t),
                    t.push("**Version**:" + e.version),
                    x(t),
                    t.push("**URL**:" + e.url),
                    x(t),
                    t.push("[TOC]"),
                    x(t)
            }(e, t),
                function(e, t) {
                    null != e.tags && null != e.tags && (t.push("\n"),
                        e.tags.forEach((function(e) {
                                x(t),
                                    t.push("# " + e.name),
                                    null != e.childrens && null != e.childrens && e.childrens.length > 0 ? e.childrens.forEach((function(e) {
                                            !function(e, t) {
                                                x(t),
                                                    t.push("## " + e.summary),
                                                    x(t),
                                                    t.push("**url**:`" + e.showUrl + "`"),
                                                    x(t),
                                                    t.push("**method**:`" + e.methodType + "`"),
                                                    x(t),
                                                    t.push("**produces**:`" + i.a.toString(e.consumes, "*") + "`"),
                                                    x(t),
                                                    t.push("**consumes**:`" + i.a.toString(e.produces, "*") + "`"),
                                                    x(t),
                                                i.a.strNotBlank(e.author) && (t.push("**author**:" + i.a.toString(e.author, "暂无")),
                                                    x(t)),
                                                    t.push("**Note**:" + i.a.toString(e.description, "暂无")),
                                                i.a.checkUndefined(e.requestValue) && (x(t),
                                                    t.push("**Example**:"),
                                                    x(t),
                                                    t.push("```javascript"),
                                                    t.push(e.requestValue),
                                                    t.push("```")),
                                                    function(e, t) {
                                                        var n = e.reqParameters;
                                                        x(t),
                                                            t.push("**Params**:"),
                                                            i.a.arrNotEmpty(n) ? (x(t),
                                                                t.push("| name | description | in    | require | type | schema |"),
                                                                t.push("| -------- | -------- | ----- | -------- | -------- | ------ |"),
                                                                function e(t, n, a) {
                                                                    null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                                                            t.level = a,
                                                                                n.push("|" + T(t) + "|" + i.a.toString(t.description, "") + "|" + i.a.toString(t.in, "") + "|" + i.a.toString(t.require, "") + "|" + i.a.toString(t.type, "") + "|" + i.a.toString(t.schemaValue, "") + "|"),
                                                                                e(t.children, n, t.level + 1)
                                                                        }
                                                                    ))
                                                                }(n, t, 1)) : (x(t),
                                                                t.push("暂无"))
                                                    }(e, t),
                                                    function(e, t) {
                                                        i.a.checkUndefined(e.responseCodes) && e.responseCodes.length > 0 && (x(t),
                                                            t.push("**Status**:"),
                                                            x(t),
                                                            t.push("| code | description | schema |"),
                                                            t.push("| -------- | -------- | ----- | "),
                                                            e.responseCodes.forEach((function(e) {
                                                                    t.push("|" + i.a.toString(e.code, "") + "|" + i.a.toString(e.description, "") + "|" + i.a.toString(e.schema, "") + "|")
                                                                }
                                                            )))
                                                    }(e, t),
                                                    function(e, t) {
                                                        if (e.multipartResponseSchema) {
                                                            var n = e.multipCodeDatas;
                                                            i.a.arrNotEmpty(n) && n.forEach((function(e) {
                                                                    x(t),
                                                                        t.push("**code-" + i.a.toString(e.code, "") + "**:"),
                                                                        S(e, t)
                                                                }
                                                            ))
                                                        } else
                                                            S(e.multipData, t)
                                                    }(e, t)
                                            }(e, t)
                                        }
                                    )) : t.push("None")
                            }
                        )))
                }(e, t),
                function(e, t) {
                    i.a.checkUndefined(e.markdownFiles) && e.markdownFiles.length > 0 && (x(t),
                        t.push("# appendix"),
                        e.markdownFiles.forEach((function(e) {
                                x(t),
                                i.a.arrNotEmpty(e.children) && (t.push("## " + e.name),
                                    x(t),
                                    e.children.forEach((function(e) {
                                            t.push("### " + e.title),
                                                t.push(e.content)
                                        }
                                    )))
                            }
                        )))
                }(e, t)),
                t.join("\n")
        }
        function x(e) {
            e.push("\n")
        }
        function S(e, t) {
            (function(e, t) {
                    i.a.checkUndefined(e) && e.length > 0 && (x(t),
                        t.push("**Response Header**:"),
                        x(t),
                        t.push("| name | description | type |"),
                        t.push("| -------- | -------- | ----- | "),
                        e.forEach((function(e) {
                                t.push("|" + i.a.toString(e.name, "") + "|" + i.a.toString(e.description, "") + "|" + i.a.toString(e.type, "") + "|")
                            }
                        )))
                }
            )(e.responseHeaderParameters, t),
                x(t),
                t.push("**Response Params**:"),
                x(t),
                i.a.arrNotEmpty(e.data) ? (t.push("| name | description | type | schema |"),
                    t.push("| -------- | -------- | ----- |----- | "),
                    e.data.forEach((function(e) {
                            e.level = 1,
                                t.push("|" + T(e) + "|" + i.a.toString(e.description, "") + "|" + i.a.toString(e.type, "") + "|" + i.a.toString(e.schemaValue, "") + "|"),
                                function e(t, n, a) {
                                    null != t && null != t && t.length > 0 && t.forEach((function(t) {
                                            t.level = a,
                                                n.push("|" + T(t) + "|" + i.a.toString(t.description, "") + "|" + i.a.toString(t.type, "") + "|" + i.a.toString(t.schemaValue, "") + "|"),
                                                e(t.children, n, t.level + 1)
                                        }
                                    ))
                                }(e.children, t, e.level + 1)
                        }
                    ))) : t.push("None"),
                x(t),
                t.push("**Response Example**:"),
                e.responseBasicType ? (t.push("```text"),
                    t.push(e.responseText),
                    t.push("```")) : (t.push("```javascript"),
                    t.push(e.responseValue),
                    t.push("```"))
        }
        function T(e) {
            for (var t = [], n = 1; n < e.level; n++)
                t.push("&emsp;&emsp;");
            return t.join("") + e.name
        }
        p.marked.setOptions({
            gfm: !0,
            tables: !0,
            breaks: !1,
            pedantic: !1,
            sanitize: !1,
            smartLists: !0,
            smartypants: !1
        }),
            p.marked.setOptions({
                gfm: !0,
                tables: !0,
                breaks: !1,
                pedantic: !1,
                sanitize: !1,
                smartLists: !0,
                smartypants: !1
            });
        var I = n("3bbc")
            , P = {
            components: {
                OnlineDocument: function() {
                    return Promise.resolve().then(n.bind(null, "3bbc"))
                }
            },
            props: {
                instance: {
                    type: Object,
                    required: !0
                },
                tags: {
                    type: Array,
                    required: !0
                }
            },
            data: function() {
                return {
                    hideShow: !0
                }
            },
            methods: {}
        }
            , j = n("2877")
            , C = Object(j.a)(P, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-row", [n("a-row", [n("a-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [n("h2", [e._v(e._s(e.instance.title))])]), n("div", {
                    staticClass: "description"
                }, [n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("简介")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.description)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("作者")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.contact)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("版本")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.version)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("host")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.host)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("basePath")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.basePath)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("服务Url")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.termsOfService)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("分组名称")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.name)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("分组url")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.url)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("分组location")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.instance.location)
                    }
                })])], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [n("h3", [e._v("接口统计信息")])]), n("a-col", {
                    attrs: {
                        span: 19
                    }
                }, e._l(e.instance.pathArrs, (function(t) {
                        return n("a-row", {
                            key: t.method,
                            staticClass: "content-line-count"
                        }, [n("a-col", {
                            attrs: {
                                span: 3
                            }
                        }, [e._v(" " + e._s(t.method) + " ")]), n("a-col", {
                            attrs: {
                                span: 2
                            }
                        }, [n("a-tag", {
                            attrs: {
                                color: "#108ee9"
                            }
                        }, [e._v(e._s(t.count))])], 1), n("a-divider", {
                            staticClass: "divider-count"
                        })], 1)
                    }
                )), 1)], 1)], 1)])], 1), n("a-row", {
                    staticClass: "knife4j-doc-m",
                    attrs: {
                        id: "knife4j-doc-m"
                    }
                }, [n("a-row", {
                    staticStyle: {
                        float: "right",
                        width: "57px",
                        "z-index": "10000",
                        overflow: "hidden"
                    }
                }, [n("a-button", {
                    attrs: {
                        type: "link",
                        id: "btnHide"
                    }
                }, [e._v("隐藏")])], 1), e.hideShow ? n("a-row", {
                    attrs: {
                        id: "knife4jDoc"
                    }
                }, [n("ul", [n("li", [n("a", {
                    attrs: {
                        href: "#knife4jDocument"
                    }
                }, [e._v("主页")])]), e._l(e.instance.tags, (function(t) {
                        return n("li", {
                            key: t.name
                        }, [n("a", {
                            attrs: {
                                href: "#" + t.name
                            }
                        }, [e._v(e._s(t.name))]), n("ul", e._l(t.childrens, (function(t) {
                                return n("li", {
                                    key: t.id
                                }, [n("a", {
                                    attrs: {
                                        href: "#" + t.operationId
                                    }
                                }, [e._v(e._s(t.summary))])])
                            }
                        )), 0)])
                    }
                ))], 2)]) : e._e()], 1), e._l(e.tags, (function(t) {
                        return n("a-row", {
                            key: t.name
                        }, [n("h1", {
                            attrs: {
                                id: t.name
                            }
                        }, [e._v(e._s(t.name))])])
                    }
                ))], 2)
            }
        ), [], !1, null, null, null).exports
            , O = n("5609")
            , A = {
            props: {
                data: {
                    type: Object
                }
            },
            components: {
                OnlineDocument: I.default,
                DownloadHtml: C
            },
            data: function() {
                return {
                    deepTagFlag: !1,
                    tags: [],
                    downloadType: "DownloadHtml",
                    markdownText: "",
                    expanRows: !0,
                    downloadHtmlFlag: !1,
                    downloadPDF: !1,
                    modal: null,
                    page: !1
                }
            },
            updated: function() {
                var e = this;
                "DownloadHtml" == e.downloadType && this.downloadHtmlFlag && setTimeout((function() {
                        e.downloadHtml(),
                            e.$kloading.destroy()
                    }
                ), 1500)
            },
            created: function() {
                this.initModels()
            },
            watch: {
                language: function(e, t) {
                    this.markdownText = null
                }
            },
            computed: {
                language: function() {
                    return this.$store.state.globals.language
                },
                swagger: function() {
                    return this.$store.state.globals.swagger
                },
                swaggerCurrentInstance: function() {
                    return this.$store.state.globals.swaggerCurrentInstance
                }
            },
            methods: {
                getCurrentI18nInstance: function() {
                    return this.$i18n.messages[this.language]
                },
                initModels: function() {
                    var e = O.a.globalTreeTableModelParams + this.data.instance.id
                        , t = this.data.instance.swaggerTreeTableModels;
                    this.$Knife4jModels.setValue(e, t)
                },
                deepTags: function() {
                    var e = this
                        , t = O.a.globalTreeTableModelParams + this.data.instance.id;
                    if (!this.deepTagFlag) {
                        var n = this.data.instance.tags;
                        i.a.arrNotEmpty(n) && n.forEach((function(n) {
                                i.a.arrNotEmpty(n.childrens) && n.childrens.forEach((function(n) {
                                        n.init || e.swagger.initApiInfoAsync(n);
                                        var a = [];
                                        null != n.parameters && n.parameters.length > 0 && (a = a.concat(n.parameters)),
                                        null != n.refTreetableparameters && n.refTreetableparameters.length > 0 && n.refTreetableparameters.forEach((function(e) {
                                                a = a.concat(e.params)
                                            }
                                        )),
                                        null != a && a.sort((function(e, t) {
                                                return t.require - e.require
                                            }
                                        ));
                                        var r = [];
                                        i.a.arrNotEmpty(a) && a.forEach((function(n) {
                                                if ("-1" == n.pid) {
                                                    if (n.children = [],
                                                        n.schema) {
                                                        var a = n.schemaValue;
                                                        if (i.a.checkUndefined(a) && e.$Knife4jModels.exists(t, a)) {
                                                            var s = e.$Knife4jModels.getByModelName(t, a);
                                                            if (s = e.swagger.analysisDefinitionRefTableModel(e.data.instance.id, s),
                                                                i.a.checkUndefined(s)) {
                                                                var o = s.params;
                                                                i.a.arrNotEmpty(o) && o.forEach((function(t) {
                                                                        var a = e.copyNewParameter(t);
                                                                        a.pid = n.id,
                                                                            n.children.push(a)
                                                                    }
                                                                ))
                                                            }
                                                        }
                                                    }
                                                    i.a.arrNotEmpty(n.children) || (n.children = null),
                                                        r.push(n)
                                                }
                                            }
                                        )),
                                            n.reqParameters = r,
                                            e.deepResponseParameters(n)
                                    }
                                ))
                            }
                        )),
                            this.tags = n,
                            this.deepTagFlag = !0
                    }
                },
                deepResponseParameters: function(e) {
                    var t = this
                        , n = O.a.globalTreeTableModelParams + this.data.instance.id;
                    e.multipCode = e.multipartResponseSchema,
                        e.multipCodeDatas = [],
                        e.multipData = {};
                    var r = e.responseCodes;
                    null != r && null != r && r.forEach((function(r) {
                            if (null != r.schema && null != r.schema) {
                                var s = [];
                                null != r.responseParameters && r.responseParameters.length > 0 && (s = s.concat(r.responseParameters)),
                                null != r.responseTreetableRefParameters && r.responseTreetableRefParameters.length > 0 && r.responseTreetableRefParameters.forEach((function(e) {
                                        s = s.concat(e.params)
                                    }
                                ));
                                var o = [];
                                null != s && s.length > 0 && s.forEach((function(e) {
                                        if ("-1" == e.pid) {
                                            if (e.children = [],
                                                e.schema) {
                                                var a = e.schemaValue;
                                                if (i.a.checkUndefined(a) && t.$Knife4jModels.exists(n, a)) {
                                                    var r = t.$Knife4jModels.getByModelName(n, a);
                                                    if (r = t.swagger.analysisDefinitionRefTableModel(t.data.instance.id, r),
                                                        i.a.checkUndefined(r)) {
                                                        var s = r.params;
                                                        i.a.arrNotEmpty(s) && s.forEach((function(n) {
                                                                var a = t.copyNewParameter(n);
                                                                a.pid = e.id,
                                                                    e.children.push(a)
                                                            }
                                                        ))
                                                    }
                                                }
                                            }
                                            0 == e.children.length && (e.children = null),
                                                o.push(e)
                                        }
                                    }
                                ));
                                var l = Object(a.a)(Object(a.a)({}, r), {}, {
                                    data: o
                                });
                                e.multipCode || (e.multipData = l),
                                    e.multipCodeDatas.push(l)
                            }
                        }
                    ))
                },
                copyNewParameter: function(e) {
                    var t = e.children;
                    return i.a.checkUndefined(t) || (t = null),
                        {
                            children: t,
                            childrenTypes: e.childrenTypes,
                            def: e.def,
                            description: e.description,
                            enum: e.enum,
                            example: e.example,
                            id: e.id,
                            ignoreFilterName: e.ignoreFilterName,
                            in: e.in,
                            level: e.level,
                            name: e.name,
                            parentTypes: e.parentTypes,
                            pid: e.pid,
                            readOnly: e.readOnly,
                            require: e.require,
                            schema: e.schema,
                            schemaValue: e.schemaValue,
                            show: e.show,
                            txtValue: e.txtValue,
                            type: e.type,
                            validateInstance: e.validateInstance,
                            validateStatus: e.validateStatus,
                            value: e.value
                        }
                },
                triggerDownloadOpenAPI: function() {
                    var e = this.swaggerCurrentInstance.name
                        , t = this.swaggerCurrentInstance.swaggerData
                        , n = i.a.json5stringify(t)
                        , a = document.createElement("a")
                        , r = {}
                        , s = e + "_OpenAPI.json"
                        , o = window.URL.createObjectURL(new Blob([n],{
                        type: (r.type || "text/plain") + ";charset=" + (r.encoding || "utf-8")
                    }));
                    a.href = o,
                        a.download = s || "file",
                        a.click(),
                        window.URL.revokeObjectURL(o)
                },
                triggerDownloadPDF: function() {
                    var e = this.getCurrentI18nInstance().message.offline.imple;
                    this.$message.info(e)
                },
                triggerDownloadWord: function() {
                    var e = this
                        , t = this
                        , n = this.getCurrentI18nInstance().message.offline.word;
                    t.$kloading.show({
                        text: n
                    }),
                        this.deepTags();
                    var a = this.data.instance.id + "markdownFiles";
                    this.$localStore.getItem(a).then((function(n) {
                            var a = t.data.instance.markdownFiles;
                            i.a.checkUndefined(n) && i.a.arrNotEmpty(a) && a.forEach((function(e) {
                                    i.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                            var t = n[e.id];
                                            i.a.strNotBlank(t) && (e.content = t)
                                        }
                                    ))
                                }
                            ));
                            var r, s = {
                                title: t.data.instance.title,
                                description: t.data.instance.title,
                                contact: t.data.instance.contact,
                                version: t.data.instance.version,
                                host: t.data.instance.host,
                                basePath: t.data.instance.basePath,
                                termsOfService: t.data.instance.termsOfService,
                                name: t.data.instance.name,
                                url: t.data.instance.url,
                                location: t.data.instance.location,
                                pathArrs: t.data.instance.pathArrs,
                                tags: t.tags,
                                markdownFiles: a
                            };
                            r = "zh" === e.getCurrentI18nInstance().lang ? u(s) : g(s),
                                setTimeout((function() {
                                        t.downloadWord(r),
                                            t.$kloading.destroy()
                                    }
                                ), 1e3)
                        }
                    ))
                },
                triggerDownloadMarkdown: function() {
                    var e = this
                        , t = this
                        , n = this.getCurrentI18nInstance().message.offline.markdown;
                    t.$kloading.show({
                        text: n
                    }),
                        this.deepTags();
                    var a = this.data.instance.id + "markdownFiles";
                    this.$localStore.getItem(a).then((function(n) {
                            var a = t.data.instance.markdownFiles;
                            i.a.checkUndefined(n) && i.a.arrNotEmpty(a) && a.forEach((function(e) {
                                    i.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                            var t = n[e.id];
                                            i.a.strNotBlank(t) && (e.content = t)
                                        }
                                    ))
                                }
                            ));
                            var r = {
                                title: t.data.instance.title,
                                description: t.data.instance.title,
                                contact: t.data.instance.contact,
                                version: t.data.instance.version,
                                host: t.data.instance.host,
                                basePath: t.data.instance.basePath,
                                termsOfService: t.data.instance.termsOfService,
                                name: t.data.instance.name,
                                url: t.data.instance.url,
                                location: t.data.instance.location,
                                pathArrs: t.data.instance.pathArrs,
                                tags: t.tags,
                                markdownFiles: a
                            };
                            null != e.markdownText && "" != e.markdownText || ("zh" === e.getCurrentI18nInstance().lang ? e.markdownText = s(r) : e.markdownText = k(r)),
                                setTimeout((function() {
                                        t.downloadMarkdown(t.markdownText),
                                            t.$kloading.destroy()
                                    }
                                ), 1e3)
                        }
                    ))
                },
                triggerDownloadHtml: function() {
                    var e = this;
                    e.downloadType = "DownloadHtml";
                    var t = this.getCurrentI18nInstance().message.offline.html;
                    e.$kloading.show({
                        text: t
                    }),
                        e.deepTags(),
                        setTimeout((function() {
                                e.$kloading.destroy(),
                                    e.downloadHtml()
                            }
                        ), 1e3)
                },
                downloadWord: function(e) {
                    var t = document.createElement("a")
                        , n = {}
                        , a = this.data.instance.name + ".doc"
                        , r = window.URL.createObjectURL(new Blob([e],{
                        type: (n.type || "application/msword") + ";charset=" + (n.encoding || "utf-8")
                    }));
                    t.href = r,
                        t.download = a || "file",
                        t.click(),
                        window.URL.revokeObjectURL(r)
                },
                downloadMarkdown: function(e) {
                    var t = document.createElement("a")
                        , n = {}
                        , a = this.data.instance.name + ".md"
                        , r = window.URL.createObjectURL(new Blob([e],{
                        type: (n.type || "text/plain") + ";charset=" + (n.encoding || "utf-8")
                    }));
                    t.href = r,
                        t.download = a || "file",
                        t.click(),
                        window.URL.revokeObjectURL(r)
                },
                downloadHtml: function() {
                    var e = document.createElement("a")
                        , t = this.getHtmlContent(this.data.instance.title)
                        , n = {}
                        , a = this.data.instance.name + ".html"
                        , r = window.URL.createObjectURL(new Blob([t],{
                        type: (n.type || "text/plain") + ";charset=" + (n.encoding || "utf-8")
                    }));
                    e.href = r,
                        e.download = a || "file",
                        e.click(),
                        window.URL.revokeObjectURL(r)
                },
                deepRequestParameters: function(e) {
                    var t = this
                        , n = null;
                    return i.a.arrNotEmpty(e.children) && (n = new Array,
                        e.children.forEach((function(e) {
                                var a = t.deepRequestParameters(e);
                                n.push({
                                    name: e.name,
                                    children: a,
                                    description: e.description,
                                    in: e.in,
                                    require: e.require,
                                    type: e.type,
                                    schemaValue: e.schemaValue
                                })
                            }
                        ))),
                        n
                },
                deepResponseStaticParameters: function(e) {
                    var t = this
                        , n = null;
                    return i.a.arrNotEmpty(e.children) && (n = new Array,
                        e.children.forEach((function(e) {
                                var a = t.deepResponseStaticParameters(e);
                                n.push({
                                    name: e.name,
                                    children: a,
                                    description: e.description,
                                    id: e.id,
                                    type: e.type,
                                    schemaValue: e.schemaValue
                                })
                            }
                        ))),
                        n
                },
                getHtmlData: function() {
                    var e = this
                        , t = this
                        , n = [].concat(t.tags);
                    return n.forEach((function(t) {
                            if (t.description = null,
                            i.a.checkUndefined(t.childrens) && i.a.arrNotEmpty(t.childrens)) {
                                var n = [];
                                t.childrens.forEach((function(t) {
                                        var a = null;
                                        i.a.arrNotEmpty(t.reqParameters) && (a = new Array,
                                            t.reqParameters.forEach((function(t) {
                                                    var n = e.deepRequestParameters(t);
                                                    a.push({
                                                        name: t.name,
                                                        children: n,
                                                        description: t.description,
                                                        in: t.in,
                                                        require: t.require,
                                                        type: t.type,
                                                        schemaValue: t.schemaValue
                                                    })
                                                }
                                            )));
                                        var r = null;
                                        i.a.arrNotEmpty(t.responseCodes) && (r = new Array,
                                            t.responseCodes.forEach((function(e) {
                                                    r.push({
                                                        code: e.code,
                                                        description: e.description,
                                                        schema: e.schema
                                                    })
                                                }
                                            )));
                                        var s = null;
                                        i.a.arrNotEmpty(t.multipCodeDatas) && (s = new Array,
                                            t.multipCodeDatas.forEach((function(t) {
                                                    var n = null;
                                                    i.a.arrNotEmpty(t.responseHeaderParameters) && (n = new Array,
                                                        t.responseHeaderParameters.forEach((function(e) {
                                                                n.push({
                                                                    id: e.id,
                                                                    name: e.name,
                                                                    description: e.description,
                                                                    type: e.type
                                                                })
                                                            }
                                                        )));
                                                    var a = null;
                                                    i.a.arrNotEmpty(t.data) && (a = new Array,
                                                        t.data.forEach((function(t) {
                                                                var n = e.deepResponseStaticParameters(t);
                                                                a.push({
                                                                    name: t.name,
                                                                    children: n,
                                                                    description: t.description,
                                                                    id: t.id,
                                                                    type: t.type,
                                                                    schemaValue: t.schemaValue
                                                                })
                                                            }
                                                        ))),
                                                        s.push({
                                                            code: t.code,
                                                            responseHeaderParameters: n,
                                                            data: a,
                                                            responseBasicType: t.responseBasicType,
                                                            responseText: t.responseText,
                                                            responseValue: t.responseValue
                                                        })
                                                }
                                            )));
                                        var o = null;
                                        if (i.a.arrNotEmpty(t.responseHeaderParameters) && (o = new Array,
                                            t.responseHeaderParameters.forEach((function(e) {
                                                    o.push({
                                                        id: e.id,
                                                        name: e.name,
                                                        description: e.description,
                                                        type: e.type
                                                    })
                                                }
                                            ))),
                                            i.a.checkUndefined(t.multipData)) {
                                            var l = null;
                                            i.a.checkUndefined(t.multipData.data) && i.a.arrNotEmpty(t.multipData.data) && (l = new Array,
                                                t.multipData.data.forEach((function(t) {
                                                        var n = e.deepResponseStaticParameters(t);
                                                        l.push({
                                                            name: t.name,
                                                            children: n,
                                                            description: t.description,
                                                            id: t.id,
                                                            type: t.type,
                                                            schemaValue: t.schemaValue
                                                        })
                                                    }
                                                ))),
                                                t.multipData.responseBasicType,
                                                t.multipData.responseText,
                                                t.multipData.responseValue
                                        }
                                        n.push({
                                            id: t.id,
                                            operationId: t.operationId,
                                            deprecated: t.deprecated,
                                            summary: t.summary,
                                            methodType: t.methodType,
                                            showUrl: t.showUrl,
                                            consumes: t.consumes,
                                            produces: t.produces,
                                            author: t.author,
                                            description: t.description,
                                            requestValue: t.requestValue,
                                            reqParameters: a,
                                            responseCodes: r,
                                            multipartResponseSchema: t.multipartResponseSchema,
                                            multipCodeDatas: s,
                                            responseHeaderParameters: o,
                                            multipData: t.multipData
                                        })
                                    }
                                )),
                                    t.childrens = n
                            }
                        }
                    )),
                        {
                            instance: {
                                title: t.data.instance.title,
                                description: t.data.instance.title,
                                contact: t.data.instance.contact,
                                version: t.data.instance.version,
                                host: t.data.instance.host,
                                basePath: t.data.instance.basePath,
                                termsOfService: t.data.instance.termsOfService,
                                name: t.data.instance.name,
                                url: t.data.instance.url,
                                location: t.data.instance.location,
                                pathArrs: t.data.instance.pathArrs
                            },
                            hideShow: !0,
                            tags: n
                        }
                },
                getHtmlContent: function(e) {
                    this.data.instance.id,
                    null != e && null != e && "" != e || (e = "Knife4j-API Documenation");
                    var t = JSON.stringify(this.getHtmlData());
                    return "zh" === this.getCurrentI18nInstance().lang ? function(e, t, n) {
                        return '<!DOCTYPE html>\n  <html>\n  <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width,initial-scale=1.0">\n      <title>'.concat(e, '</title>\n      <link rel="stylesheet" href="https://unpkg.com/ant-design-vue@1.4.10/dist/antd.min.css" />\n      <style>\n      ').concat(t, '\n      </style>\n  </head>\n  <body>\n      <div id="knife4jDocument" class="resume_preview_page" style="margin:10px auto;width:88%">\n      <div class="htmledit_views" >\n        <a-row>\n          \x3c!--基础信息--\x3e\n          <a-row>\n            <a-col :span="24">\n              <div class="title">\n                <h2>{{instance.title}}</h2>\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>简介</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.description" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>作者</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.contact" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>版本</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.version" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>host</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.host" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>basePath</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.basePath" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>服务Url</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.termsOfService" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>分组名称</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.name" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>分组url</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.url" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>分组location</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.location" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>接口统计信息</h3>\n                  </a-col>\n                  <a-col :span="19">\n                    <a-row class="content-line-count" v-for="param in instance.pathArrs" :key="param.method">\n                      <a-col :span="3">\n                        {{param.method}}\n                      </a-col>\n                      <a-col :span="2">\n                        <a-tag color="#108ee9">{{param.count}}</a-tag>\n                      </a-col>\n                      <a-divider class="divider-count" />\n                    </a-row>\n                  </a-col>\n                </a-row>\n              </div>\n            </a-col>\n          </a-row>\n    \n          \x3c!--目录--\x3e\n          <a-row id="knife4j-doc-m" class="knife4j-doc-m">\n            <a-row style="float: right;width: 57px;z-index: 10000;overflow: hidden;">\n              <a-button type="link" id="btnHide">隐藏</a-button>\n            </a-row>\n            <a-row v-if="hideShow" id="knife4jDoc">\n              <ul>\n                <li><a href="#knife4jDocument">主页</a></li>\n                <li v-for="tag in tags" :key="tag.name">\n                  <a :href="\'#\'+tag.name">{{tag.name}}</a>\n                  <ul>\n                    <li v-for="c in tag.childrens" :key="c.id"><a :href="\'#\'+c.operationId">{{c.summary}}</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </a-row>\n          </a-row>\n          \x3c!--分组API信息--\x3e\n          \x3c!--遍历tags--\x3e\n          <a-row v-for="tag in tags" :key="tag.name">\n            <h1 :id="tag.name">{{tag.name}}</h1>\n            <div class="knife4j-document" v-for="api in tag.childrens">\n              \x3c!--接口基本信息--\x3e\n              <a-row>\n                <a-row :id="api.operationId" class="knife4j-api-title">\n                  <span v-if="api.deprecated" class="knife4j-menu-api-deprecated">\n                    {{ api.summary }}\n                  </span>\n                  <span v-else>\n                    {{ api.summary }}\n                  </span>\n                </a-row>\n                <a-row :class="\'knife4j-api-\' + api.methodType.toLowerCase()">\n                  <div class="knife4j-api-summary">\n                    <span class="knife4j-api-summary-method">{{ api.methodType }}</span>\n                    <span class="knife4j-api-summary-path">{{ api.showUrl }}</span>\n                  </div>\n                </a-row>\n                <a-row class="knife4j-api-row">\n                  <a-col :span="12">\n                    <a-row>\n                      <a-col class="api-basic-title" :span="6">请求数据类型</a-col>\n                      {{ api.consumes }}\n                    </a-row>\n                  </a-col>\n                  <a-col :span="12">\n                    <a-row>\n                      <a-col class="api-basic-title" :span="6">响应数据类型</a-col>\n                      {{ api.produces }}\n                    </a-row>\n                  </a-col>\n                </a-row>\n              </a-row>\n              <div v-if="api.author">\n                <div class="api-title">\n                  开发者\n                </div>\n                <div v-if="api.author" v-html="api.author" class="api-body-desc"></div>\n              </div>\n              \x3c!--接口描述--\x3e\n              <div v-if="api.description">\n                <div class="api-title">\n                  接口描述\n                </div>\n                <div\n                  v-if="api.description"\n                  v-html="api.description"\n                  class="api-body-desc"\n                ></div>\n              </div>\n              \x3c!--请求示例--\x3e\n              <div v-if="api.requestValue">\n                <div class="api-title">\n                  请求示例\n                </div>\n                <pre\n                  class="knife4j-api-editor-show"\n                  v-html="formaterJson(api.requestValue)"\n                ></pre>\n              </div>\n              <div class="api-title">\n              请求参数\n              </div>\n              <a-table default-expand-all-rows :columns="columns" :data-source="api.reqParameters"\n                :row-key="genUnionTableKey"\n                size="small"\n                :pagination="page" >\n                  <template slot="requireTemplate" slot-scope="text">\n                    <span v-if="text" style="color:red">{{ text.toLocaleString() }}</span>\n                    <span v-else>{{ text.toLocaleString() }}</span>\n                  </template>\n\n                  <template slot="typeTemplate" slot-scope="text">\n                    <span :class="\'knife4j-request-\' + text">{{ text }}</span>\n                  </template>\n\n                  <template slot="datatypeTemplate" slot-scope="text, record">\n                    <data-type :text="text" :record="record"></data-type>\n                  </template>\n              </a-table>\n              \x3c!--响应状态--\x3e\n              <div class="api-title">\n                响应状态\n              </div>\n              <a-table\n                :columns="responseStatuscolumns"\n                :data-source="api.responseCodes"\n                row-key="code"\n                size="small"\n                :pagination="page"\n              >\n                <template slot="descriptionTemplate" slot-scope="text">\n                  <div v-html="text"></div>\n                </template>\n              </a-table>\n              \x3c!--响应参数--\x3e\n              \x3c!--响应参数需要判断是否存在多个code-schema的情况--\x3e\n              <div v-if="api.multipartResponseSchema">\n                \x3c!--多个响应编码code的情况在离线文档中需要单独遍历分开--\x3e\n                <a-tabs v-for="resp in api.multipCodeDatas" :key="resp.code">\n                  <a-tab-pane :tab="resp.code">\n                    \x3c!--判断响应头--\x3e\n                    <div v-if="resp.responseHeaderParameters">\n                      <div class="api-title">\n                        响应Header\n                      </div>\n                      <a-table\n                        :columns="responseHeaderColumns"\n                        :data-source="resp.responseHeaderParameters"\n                        row-key="id"\n                        size="small"\n                        :pagination="page"\n                      >\n                      </a-table>\n                    </div>\n                    \x3c!--响应参数--\x3e\n                    <div class="api-title">\n                      响应参数\n                    </div>\n                    <a-table\n                      :columns="responseParametersColumns"\n                      :data-source="resp.data"\n                      row-key="id"\n                      size="small"\n                      :pagination="page"\n                    >\n                    </a-table>\n                    <div class="api-title">\n                      响应示例\n                    </div>\n                    <div class="api-editor-show" v-if="resp.responseBasicType">\n                      {{ resp.responseText }}\n                    </div>\n                    <pre\n                      class="knife4j-api-editor-show"\n                      v-else\n                      v-html="formaterJson(resp.responseValue)"\n                    ></pre>\n                    \x3c!-- <editor-show :value="resp.responseBasicType ? resp.responseText : resp.responseValue"></editor-show> --\x3e\n                    \x3c!-- <editor :value="resp.responseBasicType ? resp.responseText : resp.responseValue" @init="multiResponseSampleEditorInit" lang="json" theme="eclipse" width="100%" :height="editorMultiHeight"></editor> --\x3e\n                  </a-tab-pane>\n                </a-tabs>\n              </div>\n              <div v-else>\n                \x3c!--判断响应头--\x3e\n                <div v-if="api.responseHeaderParameters">\n                  <div class="api-title">\n                    响应Header\n                  </div>\n                  <a-table\n                    :columns="responseHeaderColumns"\n                    :data-source="api.responseHeaderParameters"\n                    row-key="id"\n                    size="small"\n                    :pagination="page"\n                  >\n                  </a-table>\n                </div>\n                \x3c!--响应参数--\x3e\n                <div class="api-title">\n                  响应参数\n                </div>\n                <a-table\n                  :columns="responseParametersColumns"\n                  :data-source="api.multipData.data"\n                  row-key="id"\n                  size="small"\n                  :pagination="page"\n                >\n                </a-table>\n                <div class="api-title">\n                  响应示例\n                </div>\n                <div class="api-editor-show" v-if="api.multipData.responseBasicType">\n                  {{ api.multipData.responseText }}\n                </div>\n                <pre\n                  class="knife4j-api-editor-show"\n                  v-else\n                  v-html="formaterJson(api.multipData.responseValue)"\n                ></pre>\n              </div>\n              \n\n            \x3c!--接口遍历结束--\x3e\n            </div>\n          </a-row>\n      </a-row>\n\n      </div>\n      </div>\n      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.9/dist/vue.js"><\/script>\n      <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.min.js"><\/script>\n      <script type="text/javascript">\n      function getData(){\n        var datas=').concat(n, ';\n        //console(datas);\n        return datas;\n      }\n\n      function main(){\n        //当前接口json数据\n        var d=getData();\n        //请求参数table-header\n        const requestcolumns = [\n          {\n            title: "参数名称",\n            dataIndex: "name",\n            width: "30%"\n          },\n          {\n            title: "参数说明",\n            dataIndex: "description",\n            width: "25%"\n          },\n          {\n            title: "请求类型",\n            dataIndex: "in",\n            scopedSlots: { customRender: "typeTemplate" }\n          },\n          {\n            title: "是否必须",\n            dataIndex: "require",\n            scopedSlots: { customRender: "requireTemplate" }\n          },\n          {\n            title: "数据类型",\n            dataIndex: "type",\n            scopedSlots: { customRender: "datatypeTemplate" }\n          },\n          {\n            title: "schema",\n            dataIndex: "schemaValue",\n            width: "15%"\n          }\n        ];\n        //响应状态table-header\n        const responseStatuscolumns = [\n          {\n            title: "状态码",\n            dataIndex: "code",\n            width: "20%"\n          },\n          {\n            title: "说明",\n            dataIndex: "description",\n            width: "55%",\n            scopedSlots: { customRender: "descriptionTemplate" }\n          },\n          {\n            title: "schema",\n            dataIndex: "schema"\n          }\n        ];\n        //响应头-header\n        const responseHeaderColumns = [\n          {\n            title: "参数名称",\n            dataIndex: "name",\n            width: "30%"\n          },\n          {\n            title: "参数说明",\n            dataIndex: "description",\n            width: "55%"\n          },\n          {\n            title: "数据类型",\n            dataIndex: "type"\n          }\n        ];\n        const responseParametersColumns = [\n          {\n            title: "参数名称",\n            dataIndex: "name",\n            width: "35%"\n          },\n          {\n            title: "参数说明",\n            dataIndex: "description",\n            width: "40%"\n          },\n          {\n            title: "类型",\n            dataIndex: "type"\n          },\n          {\n            title: "schema",\n            dataIndex: "schemaValue",\n            width: "15%"\n          }\n        ];\n        //dataType组件\n        var dataType={\n          name: "DataType",\n          props: {\n            text: {\n              type: String,\n              required: true\n            },\n            record: {\n              type: Object,\n              required: true\n            }\n          },\n          data:function(){\n            return {\n               validators: []\n            }\n          },\n          created() {\n            this.intiValidator();\n          },\n          methods: {\n            intiValidator() {\n              var that = this;\n              const record = this.record;\n              if (record.validateInstance != null) {\n                var len = that.getJsonKeyLength(record.validateInstance);\n                var _size = 0;\n                for (var k in record.validateInstance) {\n                  var str = k + ":" + record.validateInstance[k];\n                  that.validators.push({ key: k, val: str });\n                }\n              }\n            },\n            getJsonKeyLength(json) {\n              var size = 0;\n              if (json != null) {\n                for (var key in json) {\n                  if (json.hasOwnProperty(key)) size++;\n                }\n              }\n              return size;\n            }\n          },\n          template:\'<div><span v-if="!record.validateStatus">{{text}}</span><span v-else class="knife4j-request-validate-jsr"><a-tooltip placement="right"><template slot="title"><div v-for="pt in validators" :key="pt.key">{{pt.val}}</div></template>{{text}}</a-tooltip></span></div>\'\n\n        }\n        var data={\n          tags:d.tags,\n          instance:d.instance,\n          columns: requestcolumns,\n          responseHeaderColumns: responseHeaderColumns,\n          responseStatuscolumns: responseStatuscolumns,\n          responseParametersColumns: responseParametersColumns,\n          expanRows: true,\n          //接收一个响应信息对象,遍历得到树形结构的值\n          multipCode: false,\n          multipCodeDatas: [],\n          multipData: {},\n          page: false,\n          hideShow:true\n        }\n        new Vue({\n          el:"#knife4jDocument",\n          components:{\n            "DataType":dataType\n          },\n          data(){\n            return data\n          },\n          mounted(){\n             //初始化完成\n            //赋予点击事件;\n            document.getElementById("btnHide").addEventListener("click",function(){\n              //隐藏目录\n              var doc=document.getElementById("knife4jDoc");\n              var docGlobal=document.getElementById("knife4j-doc-m");\n              if(doc.style.display=="none"){\n                doc.style.display="";\n                document.getElementById("btnHide").innerHTML="隐 藏";\n                docGlobal.style.width="400px";\n                docGlobal.style.height="500px";\n              }else{\n                doc.style.display="none";\n                document.getElementById("btnHide").innerHTML="目 录";\n                docGlobal.style.width="52px";\n                docGlobal.style.height="35px";\n              }\n            })\n          },\n          created(){\n           \n          },\n          methods:{\n            genUnionTableKey() {\n              var key="param"+new Date().getTime().toString() + Math.floor(Math.random() * 1000000).toString();\n              return key;\n            },\n            formaterJson(json) {\n              try {\n                if (typeof json != "string") {\n                  json = JSON.stringify(json, undefined, 2);\n                }\n                json = json\n                  .replace(/&/g, "&")\n                  .replace(/</g, "<")\n                  .replace(/>/g, ">");\n                return json.replace(\n                  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(s*:)?|\b(true|false|null)\b|-?d+(?:.d*)?(?:[eE][+-]?d+)?)/g,\n                  function(match) {\n                    var cls = "number";\n                    if (/^"/.test(match)) {\n                      if (/:$/.test(match)) {\n                        cls = "key";\n                      } else {\n                        cls = "string";\n                      }\n                    } else if (/true|false/.test(match)) {\n                      cls = "boolean";\n                    } else if (/null/.test(match)) {\n                      cls = "null";\n                    }\n                    return \'<span class="\' + cls + \'">\' + match + "</span>";\n                  }\n                );\n              } catch (error) {\n                return json;\n              }\n            }\n          }\n        })\n\n      }\n\n      main();\n      \n      \n    <\/script>\n  </body>\n  </html>')
                    }(e, r, t) : function(e, t, n) {
                        return '<!DOCTYPE html>\n  <html>\n  <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width,initial-scale=1.0">\n      <title>'.concat(e, '</title>\n      <link rel="stylesheet" href="https://unpkg.com/ant-design-vue@1.4.10/dist/antd.min.css" />\n      <style>\n      ').concat(t, '\n      </style>\n  </head>\n  <body>\n      <div id="knife4jDocument" class="resume_preview_page" style="margin:10px auto;width:88%">\n      <div class="htmledit_views" >\n        <a-row>\n          \x3c!--基础信息--\x3e\n          <a-row>\n            <a-col :span="24">\n              <div class="title">\n                <h2>{{instance.title}}</h2>\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>Description</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.description" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>Author</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.contact" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>Version</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.version" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>Host</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.host" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>basePath</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.basePath" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>serviceUrl</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.termsOfService" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>GroupName</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.name" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>GroupUrl</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.url" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>GroupLocation</h3>\n                  </a-col>\n                  <a-col :span="19"><span v-html="instance.location" /></a-col>\n                </a-row>\n                <a-divider class="divider" />\n              </div>\n              <div class="knife4j-description">\n                <a-row class="content-line">\n                  <a-col :span="5">\n                    <h3>count</h3>\n                  </a-col>\n                  <a-col :span="19">\n                    <a-row class="content-line-count" v-for="param in instance.pathArrs" :key="param.method">\n                      <a-col :span="3">\n                        {{param.method}}\n                      </a-col>\n                      <a-col :span="2">\n                        <a-tag color="#108ee9">{{param.count}}</a-tag>\n                      </a-col>\n                      <a-divider class="divider-count" />\n                    </a-row>\n                  </a-col>\n                </a-row>\n              </div>\n            </a-col>\n          </a-row>\n    \n          \x3c!--目录--\x3e\n          <a-row id="knife4j-doc-m" class="knife4j-doc-m">\n            <a-row style="float: right;width: 57px;z-index: 10000;overflow: hidden;">\n              <a-button type="link" id="btnHide">Hide</a-button>\n            </a-row>\n            <a-row v-if="hideShow" id="knife4jDoc">\n              <ul>\n                <li><a href="#knife4jDocument">Home</a></li>\n                <li v-for="tag in tags" :key="tag.name">\n                  <a :href="\'#\'+tag.name">{{tag.name}}</a>\n                  <ul>\n                    <li v-for="c in tag.childrens" :key="c.id"><a :href="\'#\'+c.operationId">{{c.summary}}</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </a-row>\n          </a-row>\n          \x3c!--分组API信息--\x3e\n          \x3c!--遍历tags--\x3e\n          <a-row v-for="tag in tags" :key="tag.name">\n            <h1 :id="tag.name">{{tag.name}}</h1>\n            <div class="knife4j-document" v-for="api in tag.childrens">\n              \x3c!--接口基本信息--\x3e\n              <a-row>\n                <a-row :id="api.operationId" class="knife4j-api-title">\n                  <span v-if="api.deprecated" class="knife4j-menu-api-deprecated">\n                    {{ api.summary }}\n                  </span>\n                  <span v-else>\n                    {{ api.summary }}\n                  </span>\n                </a-row>\n                <a-row :class="\'knife4j-api-\' + api.methodType.toLowerCase()">\n                  <div class="knife4j-api-summary">\n                    <span class="knife4j-api-summary-method">{{ api.methodType }}</span>\n                    <span class="knife4j-api-summary-path">{{ api.showUrl }}</span>\n                  </div>\n                </a-row>\n                <a-row class="knife4j-api-row">\n                  <a-col :span="12">\n                    <a-row>\n                      <a-col class="api-basic-title" :span="6">produces</a-col>\n                      {{ api.consumes }}\n                    </a-row>\n                  </a-col>\n                  <a-col :span="12">\n                    <a-row>\n                      <a-col class="api-basic-title" :span="6">consumes</a-col>\n                      {{ api.produces }}\n                    </a-row>\n                  </a-col>\n                </a-row>\n              </a-row>\n              <div v-if="api.author">\n                <div class="api-title">\n                  Author\n                </div>\n                <div v-if="api.author" v-html="api.author" class="api-body-desc"></div>\n              </div>\n              \x3c!--接口描述--\x3e\n              <div v-if="api.description">\n                <div class="api-title">\n                  Note\n                </div>\n                <div\n                  v-if="api.description"\n                  v-html="api.description"\n                  class="api-body-desc"\n                ></div>\n              </div>\n              \x3c!--请求示例--\x3e\n              <div v-if="api.requestValue">\n                <div class="api-title">\n                  Example\n                </div>\n                <pre\n                  class="knife4j-api-editor-show"\n                  v-html="formaterJson(api.requestValue)"\n                ></pre>\n              </div>\n              <div class="api-title">\n              Params\n              </div>\n              <a-table default-expand-all-rows :columns="columns" :data-source="api.reqParameters"\n                :row-key="genUnionTableKey"\n                size="small"\n                :pagination="page" >\n                  <template slot="requireTemplate" slot-scope="text">\n                    <span v-if="text" style="color:red">{{ text.toLocaleString() }}</span>\n                    <span v-else>{{ text.toLocaleString() }}</span>\n                  </template>\n\n                  <template slot="typeTemplate" slot-scope="text">\n                    <span :class="\'knife4j-request-\' + text">{{ text }}</span>\n                  </template>\n\n                  <template slot="datatypeTemplate" slot-scope="text, record">\n                    <data-type :text="text" :record="record"></data-type>\n                  </template>\n              </a-table>\n              \x3c!--响应状态--\x3e\n              <div class="api-title">\n                Status\n              </div>\n              <a-table\n                :columns="responseStatuscolumns"\n                :data-source="api.responseCodes"\n                row-key="code"\n                size="small"\n                :pagination="page"\n              >\n                <template slot="descriptionTemplate" slot-scope="text">\n                  <div v-html="text"></div>\n                </template>\n              </a-table>\n              \x3c!--响应参数--\x3e\n              \x3c!--响应参数需要判断是否存在多个code-schema的情况--\x3e\n              <div v-if="api.multipartResponseSchema">\n                \x3c!--多个响应编码code的情况在离线文档中需要单独遍历分开--\x3e\n                <a-tabs v-for="resp in api.multipCodeDatas" :key="resp.code">\n                  <a-tab-pane :tab="resp.code">\n                    \x3c!--判断响应头--\x3e\n                    <div v-if="resp.responseHeaderParameters">\n                      <div class="api-title">\n                        Response Header\n                      </div>\n                      <a-table\n                        :columns="responseHeaderColumns"\n                        :data-source="resp.responseHeaderParameters"\n                        row-key="id"\n                        size="small"\n                        :pagination="page"\n                      >\n                      </a-table>\n                    </div>\n                    \x3c!--响应参数--\x3e\n                    <div class="api-title">\n                      Response Params\n                    </div>\n                    <a-table\n                      :columns="responseParametersColumns"\n                      :data-source="resp.data"\n                      row-key="id"\n                      size="small"\n                      :pagination="page"\n                    >\n                    </a-table>\n                    <div class="api-title">\n                     Response Example\n                    </div>\n                    <div class="api-editor-show" v-if="resp.responseBasicType">\n                      {{ resp.responseText }}\n                    </div>\n                    <pre\n                      class="knife4j-api-editor-show"\n                      v-else\n                      v-html="formaterJson(resp.responseValue)"\n                    ></pre>\n                    \x3c!-- <editor-show :value="resp.responseBasicType ? resp.responseText : resp.responseValue"></editor-show> --\x3e\n                    \x3c!-- <editor :value="resp.responseBasicType ? resp.responseText : resp.responseValue" @init="multiResponseSampleEditorInit" lang="json" theme="eclipse" width="100%" :height="editorMultiHeight"></editor> --\x3e\n                  </a-tab-pane>\n                </a-tabs>\n              </div>\n              <div v-else>\n                \x3c!--判断响应头--\x3e\n                <div v-if="api.responseHeaderParameters">\n                  <div class="api-title">\n                    Response Header\n                  </div>\n                  <a-table\n                    :columns="responseHeaderColumns"\n                    :data-source="api.responseHeaderParameters"\n                    row-key="id"\n                    size="small"\n                    :pagination="page"\n                  >\n                  </a-table>\n                </div>\n                \x3c!--响应参数--\x3e\n                <div class="api-title">\n                  Response Params\n                </div>\n                <a-table\n                  :columns="responseParametersColumns"\n                  :data-source="api.multipData.data"\n                  row-key="id"\n                  size="small"\n                  :pagination="page"\n                >\n                </a-table>\n                <div class="api-title">\n                  Response Example\n                </div>\n                <div class="api-editor-show" v-if="api.multipData.responseBasicType">\n                  {{ api.multipData.responseText }}\n                </div>\n                <pre\n                  class="knife4j-api-editor-show"\n                  v-else\n                  v-html="formaterJson(api.multipData.responseValue)"\n                ></pre>\n              </div>\n              \n\n            \x3c!--接口遍历结束--\x3e\n            </div>\n          </a-row>\n      </a-row>\n\n      </div>\n      </div>\n      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.9/dist/vue.js"><\/script>\n      <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.min.js"><\/script>\n      <script type="text/javascript">\n      function getData(){\n        var datas=').concat(n, ';\n        //console(datas);\n        return datas;\n      }\n\n      function main(){\n        //当前接口json数据\n        var d=getData();\n        //请求参数table-header\n        const requestcolumns = [\n          {\n            title: "name",\n            dataIndex: "name",\n            width: "30%"\n          },\n          {\n            title: "description",\n            dataIndex: "description",\n            width: "25%"\n          },\n          {\n            title: "in",\n            dataIndex: "in",\n            scopedSlots: { customRender: "typeTemplate" }\n          },\n          {\n            title: "require",\n            dataIndex: "require",\n            scopedSlots: { customRender: "requireTemplate" }\n          },\n          {\n            title: "type",\n            dataIndex: "type",\n            scopedSlots: { customRender: "datatypeTemplate" }\n          },\n          {\n            title: "schema",\n            dataIndex: "schemaValue",\n            width: "15%"\n          }\n        ];\n        //响应状态table-header\n        const responseStatuscolumns = [\n          {\n            title: "code",\n            dataIndex: "code",\n            width: "20%"\n          },\n          {\n            title: "description",\n            dataIndex: "description",\n            width: "55%",\n            scopedSlots: { customRender: "descriptionTemplate" }\n          },\n          {\n            title: "schema",\n            dataIndex: "schema"\n          }\n        ];\n        //响应头-header\n        const responseHeaderColumns = [\n          {\n            title: "name",\n            dataIndex: "name",\n            width: "30%"\n          },\n          {\n            title: "description",\n            dataIndex: "description",\n            width: "55%"\n          },\n          {\n            title: "type",\n            dataIndex: "type"\n          }\n        ];\n        const responseParametersColumns = [\n          {\n            title: "name",\n            dataIndex: "name",\n            width: "35%"\n          },\n          {\n            title: "description",\n            dataIndex: "description",\n            width: "40%"\n          },\n          {\n            title: "type",\n            dataIndex: "type"\n          },\n          {\n            title: "schema",\n            dataIndex: "schemaValue",\n            width: "15%"\n          }\n        ];\n        //dataType组件\n        var dataType={\n          name: "DataType",\n          props: {\n            text: {\n              type: String,\n              required: true\n            },\n            record: {\n              type: Object,\n              required: true\n            }\n          },\n          data:function(){\n            return {\n               validators: []\n            }\n          },\n          created() {\n            this.intiValidator();\n          },\n          methods: {\n            intiValidator() {\n              var that = this;\n              const record = this.record;\n              if (record.validateInstance != null) {\n                var len = that.getJsonKeyLength(record.validateInstance);\n                var _size = 0;\n                for (var k in record.validateInstance) {\n                  var str = k + ":" + record.validateInstance[k];\n                  that.validators.push({ key: k, val: str });\n                }\n              }\n            },\n            getJsonKeyLength(json) {\n              var size = 0;\n              if (json != null) {\n                for (var key in json) {\n                  if (json.hasOwnProperty(key)) size++;\n                }\n              }\n              return size;\n            }\n          },\n          template:\'<div><span v-if="!record.validateStatus">{{text}}</span><span v-else class="knife4j-request-validate-jsr"><a-tooltip placement="right"><template slot="title"><div v-for="pt in validators" :key="pt.key">{{pt.val}}</div></template>{{text}}</a-tooltip></span></div>\'\n\n        }\n        var data={\n          tags:d.tags,\n          instance:d.instance,\n          columns: requestcolumns,\n          responseHeaderColumns: responseHeaderColumns,\n          responseStatuscolumns: responseStatuscolumns,\n          responseParametersColumns: responseParametersColumns,\n          expanRows: true,\n          //接收一个响应信息对象,遍历得到树形结构的值\n          multipCode: false,\n          multipCodeDatas: [],\n          multipData: {},\n          page: false,\n          hideShow:true\n        }\n        new Vue({\n          el:"#knife4jDocument",\n          components:{\n            "DataType":dataType\n          },\n          data(){\n            return data\n          },\n          mounted(){\n             //初始化完成\n            //赋予点击事件;\n            document.getElementById("btnHide").addEventListener("click",function(){\n              //隐藏目录\n              var doc=document.getElementById("knife4jDoc");\n              var docGlobal=document.getElementById("knife4j-doc-m");\n              if(doc.style.display=="none"){\n                doc.style.display="";\n                document.getElementById("btnHide").innerHTML="Hide";\n                docGlobal.style.width="400px";\n                docGlobal.style.height="500px";\n              }else{\n                doc.style.display="none";\n                document.getElementById("btnHide").innerHTML="Home";\n                docGlobal.style.width="52px";\n                docGlobal.style.height="35px";\n              }\n            })\n          },\n          created(){\n           \n          },\n          methods:{\n            genUnionTableKey() {\n              var key="param"+new Date().getTime().toString() + Math.floor(Math.random() * 1000000).toString();\n              return key;\n            },\n            formaterJson(json) {\n              try {\n                if (typeof json != "string") {\n                  json = JSON.stringify(json, undefined, 2);\n                }\n                json = json\n                  .replace(/&/g, "&")\n                  .replace(/</g, "<")\n                  .replace(/>/g, ">");\n                return json.replace(\n                  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(s*:)?|\b(true|false|null)\b|-?d+(?:.d*)?(?:[eE][+-]?d+)?)/g,\n                  function(match) {\n                    var cls = "number";\n                    if (/^"/.test(match)) {\n                      if (/:$/.test(match)) {\n                        cls = "key";\n                      } else {\n                        cls = "string";\n                      }\n                    } else if (/true|false/.test(match)) {\n                      cls = "boolean";\n                    } else if (/null/.test(match)) {\n                      cls = "null";\n                    }\n                    return \'<span class="\' + cls + \'">\' + match + "</span>";\n                  }\n                );\n              } catch (error) {\n                return json;\n              }\n            }\n          }\n        })\n\n      }\n\n      main();\n      \n      \n    <\/script>\n  </body>\n  </html>')
                    }(e, r, t)
                }
            }
        }
            , V = (n("6bb9"),
            Object(j.a)(A, (function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("a-layout-content", {
                        staticClass: "knife4j-body-content"
                    }, [n("a-row", {
                        staticClass: "markdown-row"
                    }, [n("a-row", {
                        staticClass: "globalparameters"
                    }, [n("a-row", {
                        staticClass: "gptips",
                        domProps: {
                            innerHTML: e._s(e.$t("offline.des"))
                        }
                    }, [e._v(" Knife4j提供导出4种格式的离线文档(Html/Markdown/Word/OpenAPI) ")])], 1), n("a-row", {
                        staticClass: "knife4j-download-button"
                    }, [n("a-button", {
                        on: {
                            click: e.triggerDownloadMarkdown
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "file-markdown"
                        }
                    }), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$t("offline.download.markdown"))
                        }
                    }, [e._v("下载Markdown")])], 1), n("a-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: e.triggerDownloadHtml
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "file-text"
                        }
                    }), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$t("offline.download.html"))
                        }
                    }, [e._v("下载Html")])], 1), n("a-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: e.triggerDownloadWord
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "file-word"
                        }
                    }), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$t("offline.download.word"))
                        }
                    }, [e._v("下载Word")])], 1), n("a-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: e.triggerDownloadOpenAPI
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "file-text"
                        }
                    }), n("span", [e._v("OpenAPI")])], 1)], 1), e.data.instance ? n("div", {
                        staticClass: "htmledit_views",
                        attrs: {
                            id: "content_views" + e.data.instance.id
                        }
                    }, [n(e.downloadType, {
                        tag: "component",
                        attrs: {
                            instance: e.data.instance,
                            tags: e.tags
                        }
                    })], 1) : e._e()], 1)], 1)
                }
            ), [], !1, null, "5f633d69", null));
        t.default = V.exports
    },
    "3ea0": function(e, t, n) {},
    4236: function(e, t, n) {
        "use strict";
        var a = n("0f6e");
        n.n(a).a
    },
    4678: function(e, t, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function r(e) {
            var t = i(e);
            return n(t)
        }
        function i(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                    t
            }
            return a[e]
        }
        r.keys = function() {
            return Object.keys(a)
        }
            ,
            r.resolve = i,
            e.exports = r,
            r.id = "4678"
    },
    "4e19": function(e, t, n) {
        "use strict";
        var a = n("e6b5");
        n.n(a).a
    },
    5609: function(e, t, n) {
        "use strict";
        t.a = {
            globalParameter: "Knife4jOfficeParameter",
            globalParameterTableColumns: [{
                title: "参数名称",
                dataIndex: "name",
                width: "15%",
                scopedSlots: {
                    customRender: "name"
                }
            }, {
                title: "参数值",
                className: "column-money",
                dataIndex: "value",
                width: "65%",
                scopedSlots: {
                    customRender: "paramContentLabel"
                }
            }, {
                title: "参数类型",
                dataIndex: "in",
                width: "10%",
                scopedSlots: {
                    customRender: "paramTypeLable"
                }
            }, {
                title: "操作",
                dataIndex: "operation",
                scopedSlots: {
                    customRender: "operation"
                }
            }],
            globalSecurityParameters: "Knife4jGlobalSecurityParameters",
            globalSecurityParameterObject: "Knife4jGlobalSecurityParameterObject",
            globalSecurityParamPrefix: "Knife4jSecurityParams",
            globalI18nCache: "Knife4jI18n",
            globalGitApiVersionCaches: "Knife4jGitApiVersionCaches",
            globalSettingsKey: "Knife4jGlobalSettings",
            globalTreeTableModelParams: "Knife4jGlobalTreeTableModelParams",
            defaultWebSettings: {
                enableDebug: !0,
                enableFooter: !0,
                enableFooterCustom: !1,
                footerCustomContent: "",
                enableSearch: !0,
                enableOpenApi: !0,
                enableHomeCustom: !1,
                homeCustomLocation: "",
                enableGroup: !0,
                enableResponseCode: !0,
                enableSwaggerModels: !0,
                swaggerModelName: "Swagger Models",
                enableReloadCacheParameter: !1,
                enableAfterScript: !0,
                enableDocumentManage: !0,
                enableVersion: !1,
                showApiUrl: !1,
                showTagStatus: !1,
                enableSwaggerBootstrapUi: !1,
                treeExplain: !0,
                language: "zh-CN"
            },
            defaultSettings: {
                enableDebug: !0,
                enableFooter: !0,
                enableFooterCustom: !1,
                footerCustomContent: "",
                enableSearch: !0,
                enableOpenApi: !0,
                enableHomeCustom: !1,
                homeCustomLocation: "",
                enableGroup: !0,
                enableResponseCode: !0,
                enableSwaggerModels: !0,
                swaggerModelName: "Swagger Models",
                enableReloadCacheParameter: !1,
                enableAfterScript: !0,
                enableDocumentManage: !0,
                enableVersion: !1,
                showApiUrl: !1,
                showTagStatus: !1,
                enableSwaggerBootstrapUi: !1,
                treeExplain: !0,
                enableDynamicParameter: !1,
                enableFilterMultipartApis: !1,
                enableFilterMultipartApiMethodType: "POST",
                enableRequestCache: !0,
                enableCacheOpenApiTable: !1,
                enableHost: !1,
                enableHostText: "",
                language: "zh-CN"
            },
            defaultPlusSettings: {
                enableDebug: !0,
                enableFooter: !0,
                enableFooterCustom: !1,
                footerCustomContent: "",
                enableSearch: !0,
                enableOpenApi: !0,
                enableHomeCustom: !1,
                homeCustomLocation: "",
                enableGroup: !0,
                enableSwaggerModels: !0,
                swaggerModelName: "Swagger Models",
                enableReloadCacheParameter: !1,
                enableAfterScript: !0,
                enableDocumentManage: !0,
                enableVersion: !1,
                showApiUrl: !1,
                showTagStatus: !1,
                enableSwaggerBootstrapUi: !0,
                treeExplain: !0,
                enableDynamicParameter: !1,
                enableFilterMultipartApis: !1,
                enableFilterMultipartApiMethodType: "POST",
                enableRequestCache: !0,
                enableCacheOpenApiTable: !1,
                enableHost: !1,
                enableHostText: "",
                language: "zh-CN"
            },
            debugRequestHeaders: ["Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Authorization", "Cache-Control", "Connection", "Cookie", "Content-Length", "Content-Type", "Content-MD5", "Date", "Expect", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Max-Forwards", "Origin", "Pragma", "Proxy-Authorization", "Range", "Referer", "TE", "Upgrade", "User-Agent", "Via", "Warning"],
            debugRequestHeaderOptions: [{
                value: "Accept",
                label: "Accept"
            }, {
                value: "Accept-Charset",
                label: "Accept-Charset"
            }, {
                value: "Accept-Encoding",
                label: "Accept-Encoding"
            }, {
                value: "Accept-Language",
                label: "Accept-Language"
            }, {
                value: "Accept-Ranges",
                label: "Accept-Ranges"
            }, {
                value: "Authorization",
                label: "Authorization"
            }, {
                value: "Cache-Control",
                label: "Cache-Control"
            }, {
                value: "Connection",
                label: "Connection"
            }, {
                value: "Cookie",
                label: "Cookie"
            }, {
                value: "Content-Length",
                label: "Content-Length"
            }, {
                value: "Content-Type",
                label: "Content-Type"
            }, {
                value: "Content-MD5",
                label: "Content-MD5"
            }, {
                value: "Date",
                label: "Date"
            }, {
                value: "Expect",
                label: "Expect"
            }, {
                value: "From",
                label: "From"
            }, {
                value: "Host",
                label: "Host"
            }, {
                value: "If-Match",
                label: "If-Match"
            }, {
                value: "If-Modified-Since",
                label: "If-Modified-Since"
            }, {
                value: "If-None-Match",
                label: "If-None-Match"
            }, {
                value: "If-Range",
                label: "If-Range"
            }, {
                value: "If-Unmodified-Since",
                label: "If-Unmodified-Since"
            }, {
                value: "Max-Forwards",
                label: "Max-Forwards"
            }, {
                value: "Origin",
                label: "Origin"
            }, {
                value: "Pragma",
                label: "Pragma"
            }, {
                value: "Proxy-Authorization",
                label: "Proxy-Authorization"
            }, {
                value: "Range",
                label: "Range"
            }, {
                value: "Referer",
                label: "Referer"
            }, {
                value: "TE",
                label: "TE"
            }, {
                value: "Upgrade",
                label: "Upgrade"
            }, {
                value: "User-Agent",
                label: "User-Agent"
            }, {
                value: "Via",
                label: "Via"
            }, {
                value: "Warning",
                label: "Warning"
            }],
            debugRequestHeaderColumn: [{
                title: "请求头",
                dataIndex: "name",
                width: "20%",
                scopedSlots: {
                    customRender: "headerName"
                }
            }, {
                title: "内容",
                dataIndex: "content",
                scopedSlots: {
                    customRender: "headerValue"
                }
            }, {
                title: "操作",
                dataIndex: "operation",
                width: "10%",
                scopedSlots: {
                    customRender: "operation"
                }
            }],
            debugFormRequestHeader: [{
                title: "参数名称",
                dataIndex: "name",
                width: "20%",
                scopedSlots: {
                    customRender: "formName"
                }
            }, {
                title: "类型",
                dataIndex: "type",
                width: "12%",
                scopedSlots: {
                    customRender: "formType"
                }
            }, {
                title: "参数值",
                dataIndex: "content",
                scopedSlots: {
                    customRender: "formValue"
                }
            }, {
                title: "操作",
                dataIndex: "operation",
                width: "10%",
                scopedSlots: {
                    customRender: "operation"
                }
            }],
            debugUrlFormRequestHeader: [{
                title: "参数名称",
                dataIndex: "name",
                width: "20%",
                scopedSlots: {
                    customRender: "urlFormName"
                }
            }, {
                title: "参数值",
                dataIndex: "content",
                scopedSlots: {
                    customRender: "urlFormValue"
                }
            }, {
                title: "操作",
                dataIndex: "operation",
                width: "10%",
                scopedSlots: {
                    customRender: "operation"
                }
            }],
            debugCacheApiId: "Knife4jCacheApi"
        }
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t),
            n("d3b7"),
            n("4d63"),
            n("ac1f"),
            n("25f0"),
            n("73d0");
        var a = n("a600")
            , r = (n("2c24"),
            n("d865"))
            , i = (n("ee33"),
            n("a79d"))
            , s = (n("3e86"),
            n("7571"))
            , o = (n("e1f5"),
            n("5efb"))
            , l = (n("d2a2"),
            n("98c5"))
            , c = (n("4bbf"),
            n("59a5"))
            , p = (n("1c85"),
            n("ccb9"))
            , u = (n("0723"),
            n("0020"))
            , d = (n("02cf"),
            n("9839"))
            , h = (n("a71a"),
            n("b558"))
            , f = (n("b6e5"),
            n("55f1"))
            , m = (n("805a"),
            n("0c63"))
            , g = (n("50ac"),
            n("9a63"))
            , y = (n("1815"),
            n("e32c"))
            , v = (n("d7e5"),
            n("28da"))
            , b = (n("0c1d"),
            n("8592"))
            , w = (n("9e39"),
            n("f933"))
            , k = (n("20c5"),
            n("bb76"))
            , x = (n("b3a4"),
            n("dfae"))
            , S = (n("c721"),
            n("3af3"))
            , T = (n("04f3"),
            n("ed3b"))
            , I = (n("b846"),
            n("a071"))
            , P = (n("19ac"),
            n("cdeb"))
            , j = (n("380f"),
            n("f64c"))
            , C = (n("e260"),
            n("e6cf"),
            n("cca6"),
            n("a79df"),
            n("2b0e"))
            , O = (n("5b61"),
            n("4df5"))
            , A = n("677e")
            , V = n.n(A)
            , E = {
            name: "app",
            components: {
                ConfigProvider: O.a
            },
            data: function() {
                return {
                    locale: V.a
                }
            }
        }
            , M = (n("7c55"),
            n("94fb"),
            n("2877"))
            , R = Object(M.a)(E, (function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("config-provider", [t("router-view")], 1)], 1)
            }
        ), [], !1, null, null, null).exports
            , D = n("8c4f")
            , N = (n("a4d3"),
            n("e01a"),
            n("99af"),
            n("4de4"),
            n("4160"),
            n("caad"),
            n("c975"),
            n("d81d"),
            n("fb6a"),
            n("b0c0"),
            n("159b"),
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA1LTEwVDEwOjU1OjA0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNS0xMFQxMDo1NjoxMiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNS0xMFQxMDo1NjoxMiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxYTZhOWUwZS04ZWFkLTlkNGItOGY2My03MWYxZTY4NTRhMjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MWE2YTllMGUtOGVhZC05ZDRiLThmNjMtNzFmMWU2ODU0YTIwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MWE2YTllMGUtOGVhZC05ZDRiLThmNjMtNzFmMWU2ODU0YTIwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYTZhOWUwZS04ZWFkLTlkNGItOGY2My03MWYxZTY4NTRhMjAiIHN0RXZ0OndoZW49IjIwMjAtMDUtMTBUMTA6NTU6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ESy9MAABM4UlEQVR4nO2dd5hc5XX/P+fe6bO9aVVXXUJCEuqAEL2JbgIYbBxi48TBP3BwT+wkdoxt7NiJTWxj3MB23BvFDhgwBtEFCNRQRRKruqut09u99/398c6orlZ3RrvSSsz3efQgWzP33pl5v+97yvecI0opyiijjL5hHO8HKKOMoYwyQcooox+UCVJGGf2gTJAyyugHZYKUUUY/KBOkjDL6QZkgZZTRD8oEKaOMflAmSBll9IMyQcooox+UCVJGGf2gTJAyyugHZYKUUUY/KBOkjDL6QZkgZZTRD8oEKaOMflAmSBll9IMyQcooox+UCVJGGf2gTJAyyugHZYKUUUY/KBOkjDL6QZkgZZTRD8oEKaOMflAmSBll9IMyQcooox+UCVJGGf3AU8qb5Lwb3b/YtpDqRqioAeVANo3avBK57IPIwstRa16Aja+hsink0g+gfv9N5PQrEDFgwkzUa08iVXWoTBKprEf1tCG1wyAZQ6XiqLYtGBf/HezYhLKyqJcexvjgV1EP3gNNLcgF74V1y1BtW5BF16B+/iWoboAzr0ZapqJ+/XVUeyuyYAkyeR7UN6F+ew/qud8hcy6C0ZOg5VSvNIysxrYcwMEX8NGxY756+pdevP59zY2r6jwYJhzc79gw/HS375IZi18nGUsryFLTCM/9HlCAlPIzuPruqR0GoSrIZSAQhrpm/W/dbZBJgZ2DSAdq51vIJe9HFixBbV4Ju96CtS8jcy9ETZoLrz4GOzch196J87O7YNwMRERfu20rctEtqPatSLAC9cbTMOtcJNGLeuUx5G8+ivrjd8HKwezzkXnnox7+Hmr5X5BpZ0AgpH+TcA1UN+pn6mmHTBJ2bIJdm5BLb4Up81FP/xJSCeSsa8BxUBtehVXPgmni/Pa/BvwrLIkgJw1MIBWDWDfkMh5gPMlUgomz5os/sIBhY20q62oIVrTgOCMBC3DIpHzUDTtN/vbzxgFkcOx+7uXpwXHa1Kbl92HlfoKVi6LZ8c6DAaTiENmjv38UBCrAl/HgWAFsyyGXSZFNKZIRiHaBlQXDPOaP+g4hiMovRYF0AgIVgnKmEU9WMe/S841T42fSMMoHTCHRa8mUBfXMOreKTFrvZrksOBZ7d3oRsG39w7lHLcqplXEz7iadaFCta3+C42werMNjSEChrQYB0kn9Xdp2E/H0HGae02OMnHw1NY2zMM0M3kAAjy+IL1CJcmzCVVFsK8fwCTFmnRegqeWPpBOryGXXkk3HEQNwBv0jnLwEsXL5RQ2ICCJTsLJz5crbahHjfYRrxpGMBmTCrACmx0smpc0Qw9S7Wyp+0AUHYCWLAelECF/gTqlrTitDvoxSg2ZhHR+INu0KxBAzSCp5iVz6gVHkMtcTrhpLordexpxiMXF2mGzag1L69crJn8IClXV6IzK94PFCKnYx2VRGZp0bQVil0okHxOt/FtvuHEwz9eQhiIg+hlNxcByhul4IVp5DOjGXkRPnSPO4d6McxfBxguMY5LL6BzmECMcAuWwl4eqPcvYNSwmGXzjEZzlaBMKwZTW8/Ij2QY4FCqeqbUNFTRgr9y5GTRkujaPOwhe4ipoGhVKCldMESif0n8PBzm9upAv/TwAxAtQ2VSPGGEknrsAfehKf/0NYua2D9bFODoIoBYmIQW0TjD31FLKpf5BLPtiAlbkaOxfG9IFH9O6UTh7vp9XE9PqrpHHUCPZsG2DbWoHhATkWDk6eFImoNp9ClXMxve+Xs65txMq+CzG8hGvByUE6OTBbfC6r/2t6wMpeJNMXfV/17vkIO99aNyDXPwgnLkFMD6Si2sH2eJtVbfPfy/gZi2TK/Akk4xOxMvkXSv74Pq5PeygCYR/b1p3v/OBTvyVcPXDXdWzwBZDmcRAawOseDDEg3gPhKpi6YJFS6g4ZNnYxtjUCK7+IlQP2IPkJhVNXuFDOvOYG9cyvvsAg/MonHkHEAMtCde1uZPYFY4xRU67FF3ivTJ7TQiqu/YgTBUp5cOz+o1/FXVAvkVA1eP37dtuBhGHq8GusOySzzp1JZe1naBozj0R0OLk0x96hUpBLX0So8gFg20Bf/cQhiOMUfIYgU+adIQ0jrmHk5DsYPiFLIuLT4cITyNtNJzI0jf6zfODL+jQcCJgeJBXD+euvDs3FHDWUJnK0C5l78RQZN+OrDJ9wKdmUn3gPeY98gO/p5rEUGOYcxpwynnceQUTbr7kM+ILgD71bTr9iIf7gh/F4PUQ7QQzf3teeSLByJsGKCjn1rIFbzD4/6ldfhWyKgf0+FCiFMr2NEq5+t8y54Eq8gYuJ92jn/Hh+95ogfmlqmQA8M9CXH9oEsS3wV6A83qtkzkVXkYpfjtffjJXV/yYnqFJGBGwrqXZt2zRg1zRMiPfoLDgM4JoVbao1jp5ozL7ocxjmzThKR6BkCGxKhgGWtUutefZFrr9hwC8/dAmSTkAmOYnpZ94hlbWXkE5M1v7HINjVrqBATPD6dFwewOMDrwnRiDY/CmbgkSAG2Faa7etbBySGrxSEa1CvPgrJKFTVHd31YJ+vkY5DsOLDMm7GNXi8F2APlL80QBADEr33sXbZOjjZCWKY+gfOpkaqcadOlVDVf4svMHOfyXAMQlFKaQL4AgUiZIn1rMUwvWRSXXRs30IiGsWxbGJdKdXT4cicCy28viY83lvx+v1HNJlEQDk2sZ7kgBDE44XdW3W41ec/+q9JBBIRaB4HLdO/Jj7/J3DyOY4hAwWGZwsiXSra/RfMwZGhDA2CKG3jEu0UOePKiTJxzg9pHDmPRDSgE0aDcJQbxj7b3zDB48ug1F9wLJ/q3fMW2ze8TtcuG6W65ezrX8TweFUm2cuut5Ls2gLZNGx7E/X2m/rxRk2uklGTr0eMRtSRFpKA4yjiPVmdST/Kz+f1ozpaIZMAb+DorgWQS0Oosk7mXfLvVDf8E7HugcnVFPwVx85/5x4wPDbZ1JMolWF/dblSYHqS+PyTsHJzdHZ+P+b7Qz0q2v0dMc1f4PG2Hf3D9Y0hQJC9MoMQlfXnScup/wJqEbGeAfYxRP8gdj6smsttweN5WCXjUfa8vYE1L2xRXv9q47qPwe4tWbZvsNi6BoWDnHMDe00sXwBCFdrUClVrdawvCLXNs/D4Qq5MLMMAK5dVW1Ymj4ogSoFp6pCu4+jncI4y76CvM0umnfEhwlW3Ee85enJ4/dpntLKA7MAffER1bH+bzStfVzs3RYyLb1lHqMrGsfd9EYEQavuGjHr29yPllIWnyfiZ86msG4FjWSBKLXv09+TSf2HhFTKYvtDxJ0gmCaMmDzNOXfx1gpU3k8sonAF0wL1+hWHYpBI5otEogfCPVffuZ9VTP18pLafslEXXorZGYPdm8If0YjVMLcGuqM77FAfbLHonVCLIu/4JOfsq6O4+BSsXdBWRUgoM4xfUNquSCaKUXngAe7ZpM6vUhSJ5fyObBsP8B6kbcT6m5wYyqRJ/h3w23+PR1+xp/xnB8Atq3ctr6Wp7U674UBe5NHTvhp1v5QMuBz274cnL3TdsZ8T47di5P2IY4Ih+pu42vdF4fYNqdx9HgogWFFY3TJKW6XfhDbwbKwsKGRCnNRAGK5ule/cLIN9VFTUJ/vqLZ2TBZUm8PkhGdCDANHUewh/SO/ARv27Rr9+9GRk+ARk+DvX6s0jzuBj+kI1jH3lFWVmoqs8aH/xK6Z/RMMEwUM8/iNq1SZ9opUA7uUhtM9I0+g6szD0YInuFnqUgVB0j1gXx1P9R1fB955HvLJeFl0cxPfuiX2JoggdChyG22rdReXz69Xs3H6V9LRiEfM+BOPYEMUxtK8d7IFj5KRl76rUY5twBiU4pBZW1vThOF2+vWUPDyG+ojctXSLw7Ikv+HmWYee7lVaJ9FTf1fwPwBVBtW2HHRti+AbX8cUgnkA/fczoTZnlJxtxdKp2IHtWPGwhD9y7Ukz+Bynp30bODIQYkewEF7/nMnQwf9w0inaWdGvpEawMVY8vKu4BlatfmjbL4b/T3XCDFcajpOBocY4KI1k6NmYbMveibwD8h5tHbzSjwhTL4/K+p5//wI2lqeVDt2ZaSUFUGfxCywdIW0AG3UPqE2b0FOncgNU37fuxMErz+s4r5HGrXptXkMqUtRtFKRPXmi7qir9TPlk1DIIRcfccnaB73NXo7SlvAyoFwdU517Pwvgf9Vq57tkKkLHPzBQd/hBxvHliCpGDSMQi77+3toGPkRIiX+IAWYHvI2/P+pja/+kY4d96udm3JkUkhTi7ZRBwIi4A/C1tXQuRMZeyqYPvbaY7kM+AKefRLtI1zLcRS7W9tJxUqTmYgBVgY2ryjNtBK0+tbj9cnpl3+SptFfJNJZ2m9hGAmC1U+zauljrHr2XpbcCpW1+Shh8Zcbajg2BBHRMvOaYX65+JavUtP0EaIl/iCFPIVhQrz3SZWI/FTqhz9Cb0dU7dgANcO0PzFQAkAxdORq80pY+7Iu5PF4D9oZBaQoNiq6diaI9exLOhb5TKq7TZOj2BNI8r6fxxeQWed9nLrhnycRLWEzyZ+ose4fKkf9iK5dq1X3biQQPuFPjf0x+AQRQyf/Rk3xyUV/+xWq6v+JVKz0KJU/6JCKbSSb+Zzz5P8ulbph7Vx8i14s/tDRm1IHPrxeUO3bUB3bYNQkHV05eGu0rUo8Xn9RpmI26ZBJgF0KQQRyqeLfh+jTTqRa5lz4Uarq/pVMsvhdyrG139P+9pfVyme+xIIlSXxBvZEM6Pd//DF4BMmmdMQi1os6dZFpXPGPXyMQ+ki/VWT9QSkIVbWTjN7F9g3Pq23rVxIM5XerwYiD5+tIejs0HcafxmFtBqUm4w/Wuov8CKDeUq3ronTv3heqdQPH1rmXUJV+lqI2GdEJQDGCMnnex6io+SzZdJHkyOeCgmFU65q7eOrn/05Nsw54nKQYHIIohYyaCiMnAgqZec43qai+nVh38SeHUuDxbcfj7VArnv4iOA9KqFqH+TKJweGGyocYQ1XIGVci40+Bw1lsBpBIjCAVD7vOgYg8LBe8t5tM0r2Z6ThQ24zatBxWP5snSRGwMuAJG3LK6Z8hWPlZMsniE2yGJ0Uus5pA+Je88NA3adsKIyYWd40TDANPEKUApb+4M68WaWz6DtHYbUS7SvM5ghVp1bb16xII/5S33uhlzFSoNAfJAdQNFCQQwml/Gzq2I9vXoza+dni7OhlFzrwmyYTTLF2T4uIehlkri681MA3H9ecIAdt2op7/Q5GOfb5W3xfyyLxLPk2w8jOlkcMEx35Yde68WzzeVVTW6dPvJDOpDsbgmVi639T5GObcvdqbYiAGeLwZtq2/k7UvfI8Fl0NljU7sDZYPaHjAb6A2vAabloM/hHrl0f6dzt49MH3R9eLzV7oiiGGgeju2smeH494xFp3Vf+VRaF0DjWPcBSEKjSzC1UGZc8EnqRv+OdIJo2hymB7IJB9Q2zd8CV9gy97o4TsApREk00/jA6V0lKSmYbTUNN6BbS8o+vqGkcb0Rtm56V+ch79zv0w7Qzvhg/mjiIF4PPD687DmeaRleh/Rqj4Q70XCNfVYOXf3MUzo2LGVaJf7CJYvAJvaUa//BepGuCSHoX3A6kafzL/kk1Q3fr7ok0M5OvCRSf2v2rziLqzsVoIV7t9/EqA0gvRndzo2UtXQIrMv/C+Qq4u6rlLgCzhkkj9S0a57yWXWYmXzC2mQdyzDRO3eDNvXw6Q52hl1c890AkKV4aII0rmri47teuEfEQKGaN2SckBc/GSGAfEI+ILI4mvvpK75P1xn+AtQDgQrIRF9QG1Y9lmy6d3vNHJAqb15F13Tx/9p6ChJvAeZdd5lmN53FVfEr8Dnd4h2fUl17b6fqrpWrTc6BtIEx9FN5sacArVNuEr4FRAIgtfnc513MTzQ0ZqkdS2uFpyuPkQlolqT5Ob1iShU1iJX3/4vNI7+ctHBEaU0OTKpH6vnfn8bPn+G2ib37z+JUNoJsm7Zof9fNg3N45CJp83Ftm5GYRQVYjK9WSzrXtW69rt4vLupK6bhmRTqB/JmUd5xFMn7LHnFrLDvv3vfmk+czTgbaRqTNx+LeG5/1sTjC7p2Vg0D1dNm0f72kSNRSmkSFboL9vXvByOdhHAVcs1H/o3GUV8oKUPuD0Iq/n31/IMfI9adYfSUd4zPcTBKI8ieg5tH5DVWNY0mIybcRTZzpu5L5XKhGUaObPpe1bvnPkR2H9nfyNdBiAlOPmpW0Ek5Npx5td4xMynYvhFqGvM1J0q/3vToZzMMEEHGz4S64dqhLWYh6N19IsoZ7drESideNy77h82uQryBEM6fH9CS8ECo7/vrv+j/OBZU12Fc9/HPUj/iC0RKiBx6/ZCM3adeefRfiPckCB+F1uskQGkEOdh2Vo7etYa1XAAyP18Y4+5aWvb8YxXp/CH+4AZClfpHClbqU+kAP0D0vQ1zX+PotrdRq5aClUX8IRg9FVlwGer5B5FQpd6l5y9Bvfx/qNXPobp2IQuv0O9NxjWJRKC3vfhd0rF1V3J/ULk2yxxnJ6OmxPaebIeDUlAXgOeqtG4K9CiJcBWMmKR3+cpa/T1VN+rPX9MEoarPUFX/RRK9xclHlNLXTEbvU68+/lmi3b0EK8A6Ctn7SYCjD/OKQKQbJs6uZu4lnyPa2VDU+32BOK1vLqVzx5t4fIVOifkwcU8h/q5nRzi2PiVmnI3q2A6RThg3S/fX1cUzetH48+/Jy9MJhvX1dPEO6skHQEzUxg7U+oK5WIIJ0dOOXPL+Zllyaz09e9y9R9mQ6D3y60wvbNoJ0e79zKt89tzn14s5WKE7G1bWadOwquFfCFZ8qWgzUTn6WsnYD9Qrj32aWHf0ZFDiDgSOniC66AnGzbiMbKqItKoCb7CHHRs/4fz6P39OJqEXhRj63xxbX3vYWAhWota9DF4fauUzMHUhsvAKPSTHkH07pSLfXYR99c9K6TJbw6NfV4jhOzYSCIHhQWl9UvGfPVgJHt95KBV29XqPD7WndQORznS/IV6loK4Z9eRPoXVt3kTMS2oU2ky0nX3NojNJwfRMR+TWojtLKgdClZBK/FC98PBHSPSm8fdhzr1DURpB9rdr00moHxGS2efdTFdbk+tj3TBR6fhvePOF+zEMbQodHGnJ5U01MVBP/ARZeDkMa9FRJ60rKunxdT2FQlk5pHm0NsWKiVwVUDccqhr8rlt8erzQ3d7Gzo30uwg9XtiyCjp35Mt+D7OTa9m64PXNk7oRH8c0JhTXeUTp50hE71XPP/hx4r3po6ovOQlREkFU1y79F8cGjw+ZOPtSYj3nFmXzmt52Yj0P7D01bPvQiYlWFkLhfTs/5OuXS3nqg2CY2pybMAvGzaDoPAHkzZr6GtcOuscLve0Rtq3XptHh4PXrQEikq/+CKMuCsH+iNI7+FKjriu4AY3ohl/meWvnMXcS60oRry+Q4CKWdIAVzRNdmGDJ+5mXYtvtzOVTZzZZVH2D9q8sQ0bMB+4Jja/NtUHIhOtav3noDGdayz44vln2mx+N6UXl80Lkzqd56Q3+uQx6pUIcd3BfiPdy1c2moaBkv42Z8FqWu2zt4xvVzm5BL/1BtXf1lspk2Av3c6x2M0hKFs8/Xf3EcqB9+PiJ/59qh8/oh1rNcbVn9FNFOvQj6jPGjHeyGkTrxNRiyXdPU107G9Cli5YpzTG3LIFzd7No8s3PrqW58llGT9VDTQ57Hg3i8qJ0bdQi7L79IRBN5WEuDTDjtX/H5biku0pQPc1vWT1Tnru+RTm3D60JS8w7FUSQKlZa13/DJ6Xh8pjvnUIE/FGXburtZ/3KGqoZ8o+WDIAKRTt1zcNSk0tvZHPFxFIQqUS//CePMK6F5GLj1cQ0gk20i2j3aNUGi3TlZ/De2nHfjoQsy325IvfEX2LYevH38NIYB8V6YMLtWFl7+nxjm+4tudiGmQy5zv+ppvw87u3xQxZ8nAUojyOS52m+Idftx1Dmuj2ZvANWx/TH18p9eFcfRnU36hKCiXTq+fyzg9aOef0jb+24XezYFw8YlZNoZ0X7Fm3uhwDB9KOXtczMxPRDrQT12f76xXDZ/ojl5KYwD0S7UrHN8xoXv+S9Mz/tJldBA2jQ3qt7eH5JJLx+wsQsnMUpz0ttbIZNEzrr2AmqbLiHrctv1+m2J9/xZrfxrXNUM69vmNcx90amBarpwJIignv1dcY2xIx3I6VfNZd5Fi10RxPBAOrFHpeJdffpUhqkTgsEKnfRrGAn1I/JJ0wqd9/D4TBk/64f4Qu/T7UCLrUc3FBg/xfQs26smkIP+HPKeg19j5P8Mgc7uxwClbSGbXte7/+LrRuELBnTG+wjQ5kFcbV6xTOZc3Lfj7Q2g9rRC1y72xvz7hOioVzadn2abD21amdLCtUpBdSNSXY9rXycRgWEtI8gVEcGKdbeyY0MCX7DPf1crntYJzWAFVDXAyEn679WNEK72yrAxPyIRfR+xIiUkelqsIpO8E+X8jx7HnGPv91iYctXXolf2vnwLot9nZSk6KHCCojQnfe7FkEkhwYr3kE273MYElLofw1zHqCmH/nMgrNt/du3Si+ng0KkAKC0PyaaFYIWicXQzlXWjCeSH/FU3RQhWbsOhnVxGUI4761p0MwPlKGTyHN1k4kg5lnQC6oaH98pAjgSPF+K9EXZsPFSkKPmGznu2a7Iq9OfPJPW/ef1gev6eSOf7cJzio3rBKoetqz7pPHLv/+hEqbPPB1I2e5uHHw57T5d8Tirf/E8qaot7jhMQpRHkwptR8Z7JmL7xrjO3ykG1vvkMVX2EbcXQcpAd63X48uBeT4ahd+xsGpkwsx6R98ukuZNlwuxFKGfa3qNmygJQai2xnlepG/4ApucFMgnLnTmg9KIPhKBp9JFPIisLNcOGuc+B+CDWk+LttVBVf9DnM1GxLi02PKD2Jd+FJFBxvlQ3XVN0KyPHgao6xfb1n3b+8M3/JhXXvs7+30fh7/19R/uTZ38yVZ6gA4yKQGk+yGuPI+NnVtHUFCDjsv2MGG/x0iMv07HjULFj3v5WmaTWXO3vm4gBkS5k4pww40/7rEyYtYR0/DSyfchD9NiBaeTsaXLK6fNIRN6iedxnyGXXHpEkXj90bEft2IRcfp7WfPW3U9sWBCuqXC9ar4mKdGxQm17TvgXkxY5hqKjdlwMpXE8EskkYMXG2NIz8FKiL3N0oD8fRurSdmz6mHrv/m2TT4A9QklnU11sKWreTHKUR5P7Pwt/ddY6Mm97ojiAKTPNpOe+mzkNk3l4fJGM4j/7g0L5WghYiVjc2y3k3fgtf8DqiXYd3KPe+TyCTmI4/eIpMP3M+vuAjJKMfI5dJ6SbIfQQHlNLZ7e3rYfMKZMJs+q0xV8rA42123QsrHmuVyfOW8r7Pa4cbNDneXqN9j/2Lp8SAVBypGTaNiXPuIZdZXJRvpcPXjura9Uke//E3yaT0Pa3cO8FtGFCUZmKddS3SOOo00i6ccwDTi9q5aROG6VDdsO+ILizyNc/nw5n77cZO3gkPV0+USXO+jsjVxIupjBOdyHNkBGL+oyy6pkG1bbmZ1nWZw8o8vH7Y9Ra0t8Kii6Gr3wo+P3auxrWzmoqHGD2lSqbMydewALWCWuqHFx7ad6paOchmkVnnjmDWud8nl12kF3YRK9sXyBHv+Twrnr4Xx9Hma7oEKU0ZpeZB5kBlbaXrsKgvCGtffp233zyozFRA2aj2t/VkpP0XgW1BRW1IJs75KoqrS55VofK+RUXddcb1n+pUrz95GxuX52/fx6KrG47ashL1lQ8dflFmkjB8gmlc9zH3JqZhOqQT9t7GeYEKeHU96k/f0wJMrw8Q3Sl+3IxGzr3xV1i5RRSrNPZ4U0S77lata76LSBp/kJKb9ZVRIkG8QTA8PtfyBI/3WXa9tVxtfEXb2wUoB0wvcuVtEK4+0DG2LQhV/g3CtUXvoAfDMPLh0/AMho+fx8blr+EP9E040wvRTt3O53CmXDoOlXWTEXHnF5geSEbbVdeut/cm54IVsGuzLvFYcJkmiS+E1DaOx+v/Prn04qI/t8ebIBH9ptq68j6QHjyD3AnmHYDSCFLT5MHrD7t2UHNph8nzHamsO1DmnR8hJlNP1zUJB9vZSi10HSU6EkQgm1kko6Z8WTWPfT/b1u08XCZZlIJRUw7fGC2bhqbRAdf+hx4c08P29b34gvuIt3mlJooY+RJiKvH4/h7kgj6nLh3p86XiP1bdbQ/gqA48ffQQLqNolOaDVDfW4fPXuJaYJOMi51wv+Pz77O/9Ee063NztAWJHHrrP04Uy8+xznZf/+HMq6w7b+EBmLoYRE+jThLKyUNVQ43qDMD2QSiRoXa83AkPXy6tNy2H4BECBlauXyoZLQS4oSVVrGFEV63kQx958zBQI7wCUdoLUNdVhW7XYh8m+HoxCHqMvU9jI7559jfFVyt3MjWJg5YTG0f8kCy5bqlYu3bE3onTAfR2oHwljpuuk4cFwbPCHRrsniBeVillq6yotqy9E8fz55ttW1pCKuvOoafpXrMzUojd+0xPF678ef+AprAx72yVJ4TvN5y6Uw4CFsZSjDyjJlzqfpN0WSyNINpNFJHfUehyPF7XmBehpP1TybuWguv5xOe382/c2VhgI2DmorDuNaWeezat//kXfBFHg8eswbF8EVQ54/eEiFrIDPKgVu4Zuum3lIJuBYBIZOeksmlu+RDY9ueiuKqGqGGuef59a8cwT+PNTbp3cvuy8nQPDg9QU00bJJUwTOnbAnx/QTffygoaTCaXlQTp3tEtV/R6CleNd7aLK0fIKj+9Am94wkOmLUEt/oxsw7H+KWFmws0+STf8Cf/A9WnZxGNOhsCO73dGzaa8Ewx9kweW/oKqP+X6puJacjBjLoaFs0a9PRce4NoUSkbSMm9EhH/0eVNTi/OEe2LkJRJDpZ05jyvz7SUQnFDVfRAS8gU62b/iYWvHMI/S261BxQVBYeE1hPmAxYxbcQimtfOjcoZtLHKwQOAlQ2gmSSqQJV2f0WF4Xi9Ljj6m316RJRA7sTK7HkekuH17/gepUjw8SsYx68eHb5NwbTKoa3r03SQjsHYOsnBip2HZE/HgDE1w9fzYNtc3jmHb6BHr2bD7k9KpuRO3ZpnVhB+/o+QlXMmpSXJsrR9rxBRzLJpfN4PFBzx5k8lxYeDkyYuLpOPb9xHrcPff+ML27iez5inp7zYOYHn3a9SdfH6xqQTHA5zs27WGPA0ojyLa1NsGKDmqbDxUV9oVw5Xye+EmLWvXsRioPErjZNtQ2Iaedf+hi9Ach1hNVj/7oFpl1bhvNY6+lono0YqaxczvYsamXQOhuFet+EMNzqjSPfYJMqvmI5phyoLoxIOuXVaonHji07sT0ojq36+KkgxeddtCDcsd3FuELHHmDMASydlJ1t+2iqg7WvJDXcTU1k0u/H6VO6f8CfUAE4r33qd6O32J64u8U6fnxQGkEaV0Lo6Yk8HjdVeDlcsMYPXWcOM7GQ/rRFjRIuUz+RDhIGFfdgHr9yYyys3caV374bvXkT68i2h2XcTOeVeGaiGRTcarqob11terw/I/UNX/ZlWOfyzQTqLiMUVNWHGI7mx7E5+eQEw+0TxKurkHkdHc7poBj51QmGWNTK9LbDvUjKiRccy0iFxbt2Go/ZqNK9P4OZHdxbx5kKPapfk8SlOaDbFkFp53/qHh8NwNH1l6n48gZV13C/CWP97nbeXzQsQ215nlNkv19DdvW/ad047h2Viz9gdqzDWwbOetdWuT49C9h1XPIzLPXcP3HdcO5I34IB7y+iYRrdOh1f4hA0xj6jNI5NgRCYUQMV4vbNFGZVFw2r94uPbt0q6F5S95FTeO/kcs0H/kCex+44GttxrGvwTDXDbl1KORNuXwPr5MApZ0glbVgerbg2N3AketilQOVtZPUK4+FSCeSB9r8osOEsR6dxfYGdNbb9PZRMSe62UE6oRNsBR1UKqGVvCKvoVgFzDziM9kWBMKVDBtDn5Gs/j6L11+HuNO9OAhEorkvLR5LQ9WpfOjpzitl9KR7SMZrizo9DA8Ew2+rl/50A+teXkegAnD057Ct0sZJDxRsC6lphFwW9ch92h+ZMOv4Pc8AorRE4d9+Hhx7N91tUfyBxiNHXwSs7BWIcTbRrj8foOZVSmubKmr1XI5Yj7bbkzHIZA+/eAtd2XMZjBs+paMpkCLe406Vp6Us9YyY4MH0HGiT6bmI9Nk/V5uEE0E8rhZ4Ms30KWObP7PktA/evS4bpCvxKZKx4sih+xdvYuPy21i/7HUyqf1k8caxK03uD4U8SKwHqup4Z58gy5+AdHIni971EhXjJrgS7IkgMxbPV7u3/lkPlPToUyIdR+3ciFz5YWTsqainf4Wccjoql9VapfZW9hZlhar0D1FQ+o6cpHVRgaCudbCyBqm4x7WoUQwDw2NiHEQQ20Iq6yBUwWE6FY51E71T+c99SpXR+FZ75AffWJ+DQLEJNQGPdy0d2+5SOzctxR86/idGXyh8Jo/nULP0BEZpPsiyR3VXwjkXPiK+4PVkUkcOsjsOCJfLtIVPqGR0GZlUvm1pM3Ru1ySwsvlEWhqZvlBPyd2zA2JdqEQEtXopqmMHYhgQqkBtWakJVFmnCVPdkJHRUxOuVMZiQC4TJ9qVOaSCMZvW/bgqayDXh8Of6LX2zhw5EkzYlBRu3+SlI+NgeIp1ykFF9nyLWO9jeHzv7FbrxwGlmVjn3aR3sVRsM7HuJIbhP6KZpc2WhYyf+W26di8h1t1Jb7vub3uwTEGAeFSfFONmwKUfwFAK9exvkRmLkLoRqGwKtfwJZNsGGD9T67lapp3O+FnnuyKI1wex7g62rNBBgP1hmKjNK+hzhofjIBe+z6K64YhdUATNoZVdOVZaOSTYXyOKvi5ggMhTpJIP4vFESu5FfDwwFMy+AUBpJ8jWVfqXX7/sdWke/wNqh30Kx0W817bAMCZLqOI9qmP7L7ByneQymhwHb8aFJGJPG1I/UifC/CEYNRmqm/QUWo8PFlwGE2ZCrMcvw1o+6Lr2weODaHcvm1cemAFWuqGz2tMKkY6DJDC6U7ycc/17i2mcYHhEf9PFkiOTfBrUe3DsPXq4Tz4oUWi9MxQh+QhWLqMz+4M9fHWQUZohG+nU/3Vs1M5Nj0t1w60g9a5WgKOqCNf8mzSM7FTRrl8cUdZtGLpJWyG+nknlFbZ5AoUq8r6JeROhyhtdDe/Rwr04VfV/ZOSkAzVE+QZuUjccGkf38fy24PHV5uvfBw+hyo1q1dL3s+Kve/YWkxWayOnnGNz7Hw2iXahnfgPjZ+jWroGw/mPlONGy7aWZWE0t+i9WDtYvW8qscx7CTt3q7t0KsukGmlq+jlIWXbt+Q6Sz+F3GNLXSNhkNEag4S7z+G/UP4MIvEAOiXb00t+yWa24/8N7BCtT6V2Dja30P2VROJR6vx7VuSgwdQEi76b64H6xcL42jIioV153eCyW5J4oDrJROKHfu1MTethZqh51wqt/STpD9h2Rm0jbrlv2FKfOXkE2NcB3eyySHy7CWr6hgxfUy7+IvYVsrXP34km/L2bETmXl2hdQ0fRtf4AzS1njXzx+sQG1f95B64qfrDkkSZpJIyzSYdmbf8+CVasb0+l1pm0Qgm36e3VtWMHLSpdjZia6/Hys7lYaRfwfcQzKm9ooNT6DFRWUNat0yPbh00+swYoL+bms8uJLpKKXzP46dH4VRpVMAtq1Ppqo63WjD6yutYaALlDhAp9Aa1NRh2lVLf8XE084Uw7zD/c4qkE2Nk4q6cZz/nvPpbvs/rNw3yWXX49jJQxaSoO3aZLSWcTMmi+k5n8nz/gnHriMZ9bp2CnU1XzedO3/Mupc5RBvW0w4jJumRDD3tfV1hGh5vlavPqUdjP6zWvvR1aod9VYIVn3JtGlm5KqmsvZsrb7NZ/dy3aNt64pwe+6Ogc1MKlYxBdxvqt/drZURlXf5FfXyuQp1QTxtSUQPNY1EvPqybCzaMRBZdg7P0t/DcHw68zwCjxAE6+0mAlILOncjS3/yAJR+8gnjvOPe7nOTbhebqqKy9mWzmSplzQQJ/8H6y6Q3AvtFmmXRKznrXTZieWVTUVFHX7CUZ9WsJRhEOq8cLHTt+zJsvrZIp8w99b1U90jgKwl6wDiKPCOSyVVhZd9+bY0O4ukFmn4+Kdf2AUOXViExx9f2IQDIekElzF6t0/GE6d23D6zuho0NSUEGsfk7PRwmE8z5VQZnN3oGlqr1Va+LGz9RrrDKsS5TXvqijlktuhMeiug1u0+hD5UIDhBILpvavkRAtMVjz4mqZNPdWxkz7NZlkcXRWDuSygkgNtU012Pa/HuK8OzY0jBActa/zeeH+xSAQ/pVKvPVzMomcHnG8f3g5H31JRGDXLv3f/eE4UFETweu3UM6RvzsRVLR7M7EeeOrnb6kFS94n8y/9I8nYMFfOqgikYu+SprHbVHXDXaRjkaNuYHG8YZh6t3csSEQQfwj1wkPIoqt19DCT0tl4EV0RWdOUrw1CB2Sq6jQZkrqfAaFKMH19l0YPAI7OxCrAq+sBVNfuZ6Sp5XU83ktKtgn1vD85ZBHopgulXRMKRVu2al33Eq1rX8e2Dh27lvdvnGd/A8/97tBrxHuRW/5jgkxdGDiEPH1BBHZu2kr3bn3/SMereH3L8Pmvcl0laVseaprukEtueUU9+7vfsHvL4BQ/HVOoffkljwc6d6F+fjeycAky42xUb4ee5KuUPlGO44YwMHqFgmS9okZR0/RBPPJrujvPPGzH8GMNpSBQYdG5+9PqV3f/D70dh/oehRHL3iCEa+lzh9dO4xVFmZCRzgTZNAwfD70d8MqfP8ykuRX4/O4SmgB2zkeg4grC1S/R3badhlHaVDwZRqapfIcXO1dIjA6NNZPHwBDE44VsGvX6U7Bl5Q48vhtl4eU/wR8677jH65WCQNhSycjnWP74N7Q9W3tohtzKgc+LjDv18BGRdAIJhLyuT0fdiiery4k9Oj/w1M92Ylsfk5mLv4zIZa7IZlvg9b1PTrvAVOGaD/L26hTRLp3sPNFR6E88fByuO+UfQwwMQUyPdrbfWo5Kp8Dn3y5zLryVYOWnUWo2qAXHJTwpAqFKi12bP8HG5ffg8enwYip+4OscR5fRzjxbZ9UPF6HKZcAfDOK4J4jasSFJ+9vaDK1q1KqAaOdKrNxTmJ7LXJFN8pL+6vr3MP/SDnZvvpPMDi32PNHh2Nqcqqw9nDD0uGLgTCwxtKbJH87Ps/BuJZ34qIr3XC4No76IcqYcUwfT9IBh2mxZ9VH1/EPfpmWqJkdfRFUO1DTD1IX0OyvDsUfiC9UU8UP+CX+oVX8vQcimUKko9Lahdm78X+Oaj8zG473Z1eZhGLpfVyB0nqqsbyEQau2zVdKJhoJgLZcdUqZVAYOnmRZ0n9g9235PrLuXMad8F19ggnbC1eB8E/mGCiAW2VQbichdzkPf/r40jNT9gfuaZSIC6TjGklu1n9D/tKxxKFXv2mx0nKhxwydyKAU1Tainfo567Ida2tK2tUN177pbxp82jkjHInfaLgWZ1Ew548oH1NhpN7J+2R6tkh56C8s1lKM31lLm1B8DDB5BCvXJgQql1i37i/hDN1DbdAa+4L/i8Q8nmx7YH1YpqKxzSPRuI5P8tmpv/S6+YBKhf3lDJoXMvQhapoHfC9Zh4ukGkIhp88zNYtZRtzQoe2+PqkxS+zpev84Qr3lhrfL4n5eRExeRiLr7PpQDpnkeoaobSKe+DehssucEHeVsW4MWoh0IHIOqm/yuLsYbavfW1VI7bIUyvXfKiPHnE+msP+od0DDBH1DkspvUxtceYcOr/yZzL0rv7QF8JNWrUhCqQT3/oF78h3uWdAKZujBOyykZV7oq04PavXUtsW4HjxfatuqqyVGTdZsjAfXXX0Lb2/8ht3zBi8//sXyI+8hwHKSm8Vamn/m66t79ItvWoWLdJ55Pkj/xjbkXo7auPN5P0yeObVmaP2hhmi/y8iMvKn/4HFl4+YeoqKkllzkP2/LvDfEV5vTtj4KtCtqJ1qPE1qtI16NseOtNmTr/YdYv61IbXkXOe3f/i70ApcAXRD3za21a9Zel7toFN//7ZTJ1/jC3BKF7Vxvtb2vzzrGhZpgW7EU6dASqphFQKdW25avSOOZSxJjmKnSrfb7TmDL/XjavvIzVz+5ix4YDG4OfCNBKA2g5BbauYigqfY8tQZQCfxgV6YTOlUvlzKufVy88FCRcfYlMO2M2Vm4ujn0phpFBjMKzCSgbRykcJ4fIrzE9HWrN82uluuEpapt3snsLTDxNZ1XDVe6iIZYeuSzVDVDnoi1n42ikun6s627zpgc6d8XYtmGfKnjPdj1WoZDo8wch2o36zdf2cNkHvylTz/g2yYi72K0W8E2VipqLHTF/rHM4gRPLH3FsnS0vVul8DHHsC5t1VxC9cximTffuOMr5PeHq37Pi6YB646/NTJ1fQ1PLSAzTg2EYxHt6ScWibHqjQ8V7dxg3ftoh1qsXRKNPL7RiFkahXLZ+ODSP79t5Pxg1MQhXB1wTxPBApMNS7Vu1MG9/FOrJDVOfXIkIvP7X+xk2dhjh6rtc3yOX8TNywn/LrLPbVPfOP2N6KHpswvGEQm9oQ1hfdpwr//MiNY+3kE1Nk068nZ/DvWLva2xL63EyifzcQAVeb76XbwmN15IRaGpBFlzed/f2vpBNQ6iq2j1BDEj09tDdxiG+RaFN6P6j6KycrRLRR6Vm2G1YuRGu7qEUJCK1MuPsT1Dd+KT6y89sevccOiR1qMKxkVMX50WLQy8HAsedIAdBJD9IZj/Jwd4/hj6Ojzb2b+Wgsh45/XI3Yd19cJx6AqExrgmSST7BzHNWyrAW7YMUYHpQW9forLHHz94NIFwJu956HSt7OyMmfAsrN9LVfWwLvIHTZcSkj6hc5hvEurXA70SAbeE66XqcMLQIciyQTUNVHbL4Woh06bnoriC12Fbt3rrwIyGdqpLTLw/i8ybZ3+82QbZtRq14plCjv0+I2boWtWfbg9Q0nSmB8Cfc7aoC2XSYiuovy+X/YLH6uW/R3npimFmWHs0wlDVl7yyC5KMmxgU3Q6Q778y7Ptoz+o+LhWeYqERkBz27u/vMmRSiWgd3TfGHtMmZjN1PqPIalDPRfe1INCBTF56jctmH6d2zLa8kcPvZjj0k31+gELUconhnEcT0gmPjPPNreOpn7t8X7UIWXBaWSz8Q3tuwoj94fRDpaGX3FnVYf6C7LZ90PMhBFYHHfrROnXrWTbJgyS9Ixye5I4kByehV0jh6i6qo/SLpeHRI144oR28UQzzB+c4hiIjesZWC7t3F7a7RLkgnL8Aw3PkFplc3hdi+se9KNxEdeUtGwe7DvEjHYceG15h19l0EwveSjFW4rB3xUtt0p1xyyxvquQd/ye7NQ7d2JBlDLr0O5fG5iyIeJ7xzCJIfBS31w8E7trj3JiJQP9zvOtPt9UHvnhRvrz7M1CWlAw59dU0BbWrlMrD6hZc5ddEqvP4zXdeOWDkvoapLqah+XteOjDx0stfxRn6IqS4xGNoRt3cGQXR3Ed1OtKqheLMjk4TqxirXESyPoejtWKVa10JdHxMOCvPhR07SQr2DF6/XB8kY6rnfbkL4fzLznLsRudSVKeJY4PX9rcw6T5Q//CG2rxt6tSOZFIw5BRpG6cRp+MhvOV54ZxAkl9X2bnPLoTkJN7ByUN0w3PUuHo2sZd4lq2XCzMMvTF8AiXajXnu8713UzNdux7pW4Nh/wTAvdVeola8dqWl4H2de1c3D2++kY+fQ0mllUjrEXtus5xsOYZzcBNFND2DKfK3YzaZLNTUqQSa6PkGyqQoZOaGScae2Hbb4KuyBtatQOzZpTVafdSoKVi5F7dr8M+Pq2+fh9d3oSkZjGJBKIsHwBaqypgWfv3VIRbRMj+6WaQ3NGpD9cXITxLYgUAETZ0N9FSRKOMt1IweTeK/7LVgkRzKW67fGIZvPHlfWaoXA4RZwKgOZVLtqb/2cjJtRhxW/2N2iUpBOnioLr/yRapl+E+te6cCxjn9PX9Ojuy0OUqO3gcbJSxARCFZpH8A0US88WdpuZeegojYlo6ZEXJ0gHi9Eurarzp2th0zP3R9K6YTlgktRf/l5H00k8vD69Z81z29U8IRMnncx0U53C105YHouIFxzI9n0t1DO8a8d8XhPqIbWJydBBL1DrXwadmxEff/TpQvi4j3IjMXj+MdvnE6s+8ivN72QjHSx7U1F4AgnVk9IzzcxPfmH7mPRGLoVkXrxYaS99RsMHz8Mf+iTriUyto1U19+iTlnwCt1ty9ixEeI9x3cATzIKw1qO3/2LwMlHEIXeXR0Htfp5pLq+70iSWyRj0Di6BdtqcPV6jxcSkTit6/Q8xf5gGIUAQP9mlgA1DahYt8P6V/5TZiy+DMOY7q7NqwJkrkxdcJ/asvpK3nxxh9q+9vjVjtg5MH3IUIqq9YOTjyBCoUkbMn4Wh0yPKhaZFDSODru2mT0+VLw3q7asOLJoUCm9k5teF1EmKbTq7CQd/xa+4L3guDsWHQdy2WkSqrrQEfkxhuc41Y7kW80W2o2eADjJCCJaLbttvSbJqMlHvwisLFQ31rlWnTp2Al/g99Q2HyZJeBAK8xBr86fc4Wxzle9B3LEd1bn9RzL7wkZqm9zXjlhZHyMnfE1mLN6t9mx7/LjUjihbh9t9gSHZ4qcvnFwEcWz95TeO0sVQbjvN93tNB3yBia5PkFiPJdPOzMj0Re5e7w+h3n4T3nxB/+8jhWMdG7IZS6Xjj0pg3O3Ee12UQ6IJlow1yIyz/5mq+r+op39p09N+bDPZ6QQyYzFyyhmoTcuP3X2PAicPQcRExXqQQAUyfjJ0dA3Ulb0oNcbduAMB20oTjUZc78yqE2luQbWugdZ1HNGxB03aLatfJ536e8adeh9W1l2BlZ0Db2C+jJ7yYZVNf4tol66RPxYoSPqj3flTcmjnPwo48QlSKJ81DN0ZMVQJFgPTDl8EbNsiGXXRqZp8ziQXU5GO9qISc1Z2X7364fRZB94I2ragtq7+I8PGnCWB0KfcnZb52pFwzVdkya02q5+7lz3b82t1kBesY+vZkov/RndvP0Fw4hPENCGbwfnVVyAQQgIVOE/9fGBqIbT/McK45O+ucz0wx85liHTE+s2BHIxEL4ycoLP+2bS7Zw9VQTAM6cRPCFf/DU52guuRCslISKYvukA5zh+J/Wn73irOwYSV1ZWcMxfC0kcG914DiBObIAod/cll4O01gKAGMjqSTUFTSwgxGvTNjnBt04RMKk7rujj+YP+v3R9K6TmGe/MhLmB6NJn+fP9adcoZN8qCJb8iHZ/gunYk0XuFNIzcqEKVXyKdiA/6mAHH0cRPZIa8vGR/nLgEUUo3PU7FIdKJjJ468MmvXBZqm7x60blYeKYHMqks29cdOnvdDUSKy08opRtQ7Nz4GrnzPk+w4rskIhWuTgPb9lHT9Am55O9Wqxce+gW7BrF2JB/OlsXvGvIFUgfjxCWIx6sLmbp26RZCR5MMPBy0zCTo+gc1vah0fJPauPzw0pHDobCIRk3RJ5Hbezq2Hqvw6uMvyWnnr8YXPMN1AZJteQhVX0i4+ll62ndQ21zcvYtBOgEMrdkfbnACEkTyNrroFpwzFuuFPBg/qnIgnVrgWgGcSaakbvjDvOsjxe/G+elW6rXH8yrXIoaSRjph9XObEW6XhZd/BTEucvXMunbk/TLzHDC9t6nu3RlS8YE/ie0cMmWBPlVPkPxHAUODIIW2Pk5+kRsG+0yavEZJOeDkIBVHxSPg2KgdGyGXxnWyrBgUdvS5F4/BEHc5lWzKS11ztVzxQSg2BWMCyRRq1VKdwCtmkRqmDtfGul9HqccwzYuwXEa1UgmoaXo/i66J8OLDH6VrN0X5T26QTsKMs3RkcYi3+TkYx4cghaywL6h/XDtvJlTVoZRCOrbDiIl6UToWBCrBF4K5lyJWVjvPpkePBO7aNTid+ZQDYoSZfua1hKtxteLFUNi2Q08JORjD1JWLXv+hA37cwOdHrX8F1bX7l8YV/zgfX+AmV22DDKNw3wsIhCahnE0DK0VXhUlb2hQ+niLJEnBsnlYpHd93LAhV6x2quw32bINEBLXhFaht0nFyFGT2G41QmH9oenQPK8PQUavG0bDkVu1ID4ZkQikIVc7GHxrlaqGZJqTiW9Xq558r+VlMD9IyDbX6ueLfa5gQj0C0u02tfOYTsmBJA8hFroILSoGVnSHTz7xX1Q2/iQ2vdurvdAA2nlQCmXW2Vjdk0kO3icRhMAgEUdoqKszBDldDRTVq+3pIJ1Bdu5F0EtW1E+fH/1aYPnuggO2QEyE/9Wl/s8E0dTfCN1+CWLe+10D5IYahI2NnX3cF/mDIlbTc44NM6ifq0R9uO6pBlB6vPllL2cUdRz97MrZL5TJ/llDVRaRi7ha67ph/IeGa95BJ/g9O/nc5mqiTYWppfX7E3VCeA3I4DDxBClLzFx7SX0pPO8R7UC/9aV8kIxDat6ALu3+xC0opLV2oH6Ez0JGOgWuUlsvAqMkTCFff7Hqh6sE4Sc69oXRyGIb+TO1v50uDS/hORPR7Ny6/h9FTR1Db9HH3tSMWUt3wXjV5/ot0t73G7i1HVzuSSULzOF374fYZhhgGgSACtoV6/P78gBQ9Qx1/UA+BL+xGA7HbWzndiOHN57V8YSCEd2JA105kwZJp1A6ro7fjyAteBHIZS73x1F8lVFU6UcUATxLqhuswcaliy3QS1r5oq2z6bpl30cUYxgz311ILZNrp96mta65hw7IdqvXN0mtHuncjE2fBqBZobzv+5b4lYHB8EBHdkeNgDHQoVkTbtdPO0ENwot1H77AnozB1gV+Gjf0AiWjQ3WkgIMYf2blpvd5xS+0gkjclqxr0oizVWRbRIxccu4t06l58/ntxHHfHka4dmSHBigscxU8wvHp2fCmHoi8I2SzkOCHJAUMlzHtUULqWwhvUP27JvkjeNInsQZrHnUb98LPp2ePyrYLq3vUEsy/MHnWwwBeAjh2w7uWjOxH1aATU1lX3yXk31dA05m7XZo6V8zFiwldk1jkdqmP7oxhGfthNkTNYgpX50O4QalpXJE58guRnHMplt0L7Noh2lmbiqPxYtwVLkNFTP0QiUufyjVry8tYbK+nafeCog1JgmNpXy5uqRwXb0oGRRPRx8YfuJJcZ5mrzUA4kos0y75KvSePoN5w/fW83kQ73hFUO5LLI6Vcii6/DVT/jIYoTnyCgd6uKWmjbilr6Gx05Kxa5DIRrkHd9ZCHN464n6XLqLAK29Uuax79CRe3RN2jz+nVup3v30ecMCj2Ad6x/A9Pz/2iZ+l3SqUbX03Rz2ZHUD78ax7qPSGcRch6lTVXjxJOWHIyTgyAF5LL6h/UHizzWRTv8/gBSP+K9ZFPumkUDBMJRteKvv6Jzp02oCtRRztvzePNjEQbIZvd4Ye1LqM0rfs/lH/JL3fCvYFujXb03l6mmsv7rctEtsPrZ++jcmf+Hfr4bpVBWBhk744SqPT8cTh6CpBMwdjoy42zU+mWHzgXsD44FgTCy+PprqW78sPvTQ4E/tJaO7c+x8hl9ih0t8qORByyvU/AFDBN62h6meez7SLkkiAjEe8My8+xLlMifePlPO3RxWj8mrG3rDi1T5uuWRic4Th6CWDmdjR85Gd5akTdPXJZ2KgXVDV6ZumAJ6bjp+vQIVfWw4dVvEuvpYeLcgdv1DVMXTyUiA5PbKVxj2WMJlYh9ReZdMplUbLy79xoQ67lU6kfcpgLhL5FJJg8/d0TlJ0Yp3S7pxLaugJOJICLQ3YacshCZdjrqr7/UfkVFHfh8etzAAcd9XgSZTmpt1+zzL0bk/XsFk27uZ1m9xLpew+PVJ9ZAhbE9Xu1gJ6IDOyUqEYHWtUuZefbnCFXeSyJS6S7LbgeobviUXPmPG9XKpT9h9bN950YyKZh3CWx6XSusTwKcPASBvFzCqwlherRey7Ggu51DKuYKWee64TBiwjBpHn8TSrlcjUqLJ7t3P69i3ZsZNZUBtbX9IS3ui/UUMUPRBRwH4r2oN556SWaeuxZfcKH72hHbQ6jyYnyBN4h0rqKyVpNX8v5bLt+I2uvXOY8Bz3mhT6XeDh0sMI7N8XRyEaQgs7B1zF5mLkZtWQWrn0PFug6MMNk5PaNjzDRk4ZKvkkm9V483cDeDkHR8N927v6SH0wxwjYOh1a+qa4fWQw0URCDaAWue3Yxj3y5nXv1NrNwiV7Uj+nt9j7RMj6i5F98JZMkk9HddWacTw5uW55XIA6iJy6YhnWzAoYFpZ1xM4+gx1A1/i0z698R7OvD6B3XO+slFkIORSekf0OPTI5fNfKEV6EVuZRF/YC5KLdE5B5e7kuGBdPJB1bljA8GKgd8tDQNMI991cYB/IsOEmmEQ7XpNRTrukUD4TGyXHzydhPrht8miazKqp/2j9LTpBTx2OjKpBZWM6vFxAwLRJ8aYaXVMmPU1oj03ycxzDHwBL7ZlEe36glz4t99hT+s99Hb0DpbDc3ITZC8Kknkve3e3VBSZdd4ITjv/HrLpJteLXDeT/pla8/znSUYhOVALYj8kYnpxDNZMD58ftfE12LP9cXnXHb/BG3h3UbUjSp0NcgGJyDM4tk0iCr1Kk2WgCG3lwB+eK7PPvxN/6GaSMf3/JaOA8iDSKJPnfp7hE4apFx/+N1KxAWuEtj/eEQRRkS7kjCuRWeeg2ls1R7y+YTJ6yu+wrTP22s9uYJgOvR2v0rGj46hk7f0hlwHL0s6620hcMSjI0KPdUbVy6cdl/qW1IBe7rh0xjDlS1/RZ1dvWTU/7GwOe63BsCAROl7rhH8EwbyJ98DTg/PcR7wWv/zaZff4W9dLDXx/Yh9B4RxBEf+Eh3StXNy0zqK7/EKbnDLJp94tciyP/Vz372+8N+tw/j1cP/4l2UVSPLbco1I7Ee3eqXOZxCVVdXFTtiMh5Mnb6l5QYn8Wy1qAliUeJvLzG658tdcPvwDRvOqLp61jgD86honYY0H70z3Ag3hkE0R0S89GWdC3VTUskWHVtUXPEHQfCVY7q2fMImXRGBwIGsb7atrTzW+lSElYs9taOKHhrxf8wevJoqhrvJJfCde5IZImMmeZVycg3UM7zQLSkZ5F8lWgiggqGb5e64ddjmgtdqSEcGwzzOmae8zDw65Lu3w/eGQSBwlCdsFTWX0F1wz9jW9OKen8wnFbbN9zBtvV/oKImX/5r6oWcTevMt+kZOIfdsZGKmsHvhJ5NwprnLJVKfFHmXXQBhum+dkST5GypqJ0BPEM29V68frs4abtoFcSwsdByyhfFMD+L11+cVMgwvFI7bEwRN3WNdwBBlD45rNwYquofwPTMx7HdNMDd937TB0q9TOubD7Bjk577YVTq6r/aYcjU+bpdT+fOAay5FujepeUrxS6YYu8TrgFldZFNfQ9v4Ns4RUwCVsqHsoeRiL5bZp+fUfHI19i2dj3KsbD7qIqUfIeYglLZztXh9V0rs879JJW1LcQjxYVtteo5qTa99jKc4/59LnFyE8RxINGLnHHlaDn9yj+QTswFitvlDQ8Y0kPXri+TSe3bHfdsh3CV7ssVrNA/eLR7gBN7dr6jS5Di+wgVAa9fd5V54aHvyazz6qgd9gXXI68LsDJQN/xmqW68QS7/x2+rHeufxMq9gnJ6D3id44DXbxAIz0fZ82TU1DswzSl6dF20+JyGYUIq/mNeffyFMkHcQvL9nrIpk/Gz5sjIyd8ANbeoaBVo2zhU2aFef/KD6nffeJL6EVrxW1GtnUPJ19enYvk+wZ6BDc0aZr6+RfRA0sGUjisFmaSl0ok/SrDiduI97kPfoL+rbNpAJEBN4yckVPkJlNpEMvYHYN+JnYzGmDRntkycfQm2DV5v/kTJUXwNvgOhSkdFOh7DdtUIrGicfAQR0T7BqElNVDd+WarqTyWXXbi3P1Mx8Pi2s3PTv7D+tUdoHIUMn6CrFx1r3ylkF1lpVyyUgkiXlnJkkgfmcgYajg0bX12hsqnbZerCHxDtrC66VFYp7XCLAYZMQjmfPuQ1hVNCqdJNR8eG2mbU1lWfYP0rfyJzlGUGh8HQIog+LvVRa1uV2LaJcqseBKxcTlk5xB/8Zznz6htxnPFk0+7VuQc8i4GK7Pkmb774cyprkcaR2ufIJAcn7Ho4SF5UGelEde3SUnLTx+CQRGD9K/Dc73/LDZ/MyZyLfkL37qrSTkXV/zi5o4Fjaw3d1jUfUT/+928R74WaPnogDACGEEEEIh0i85dMl5GT/pXK2rkolSrq21TKxuMN4Q+Nw8r69oYyS3ocgVhPJ7FeEMUhNnk2nd8pS7t8UVAKfAFk+HhU9y4t+RisDoX+AKSTqF9/9SGBm5h9wa/p7XBfQDboEB242Pjq7c7PvvAdLAsaRw5aEGPoECSb8tE87hyZPO8LmN7T99ZlFwXRwsFS7NmDYTtIw4gvseiqTwEH2hkiAXKZ7XgDv1Lx3rT4Qw9jZbtdN7kuBY6tp2jVDUd1t2md2aC0XFV7i7WcX//noyLmjTLjrF+SiFYO6udzAzFslPMw/sBf1bYN36G3A4aPH9SmEKURZCA75Fk5HSmqqJslDaP+g1z2dG1PHs0CH4jdToHXP4pAeFSf/2wY41CcLekE+EOPEa5+P1aufVAnxzo2iIFUNWilr06SDfx9lKMjc7Fu6G3/PxKR80lGr6O68Q6y6WM/YF05WlWQ6P2BinV/T6obVhAI6bKAQe6YUhpB6ocP3BPkMlDXXC0tp/wndu6MITXg0XE4Yk7A9ICVXSKLr/2JEvkou7esG/QGzWJAZb1u7DBYgkbl6BnzOgfzmtq8arOMmNBJ46i7Ucqju7Qfg99JDP0Me1r/S23f8BUaR3ceyx5bJf2SxlX/b+CeQI8ZuA7bOnfgLnoMUXCRTO8lcsaVV6gnf7Zu8O11QcI1KKUg1jX4TdkMA3LpHrV+2delurEL0/g4/tBY0onwoN1bj6XLodQu4EfqtSfvwhAYOWlw7ncYlLbVjZgwgI8goOwZpAcnTHfM4Nhg5a5i1OSHENk06Pfz+pGG4agnf6rbHA32WLPCeDhRD6h1r/xUmsd+meHjP5WXvw/kjfR/QpUraG99XW1afqcsuDRGqFLPgjnGXVJKIojatXngnkCfIOukumHgrnk84Njg9S+UUxfNBwafIIahcyIK1F9+OrCVh/3BF4SuXTbB8KeVyFIJVd6CP3QDGHkZSQkCTsMACu+VF1HOcrVh2Q/Ftt+kda3N2ddxvNoHlXaClDK/4nDQcwD/xJlX/ZFc9sqBu/AxhmFCNr1HvfXy8mMU+82PNMsd26E0heGp3gAko4+i1BOqc+cvZfiEyWTTS/AHzyUQclCOgW1rCc7+J0zBZzLNfA+wtCKbAsNcjem5Xz3960dl4mmbSETzo64rOJ7Rs9K+WbeF/m5gW5CK7yTavYLK2itd14UPNRgmJHrv5Y2nN2gf5Bh9Bo8XqR+JinQc++lNOqtv4fU9xKblqB0bfyUX33Iuu7dWI8bN+IO1+IO1mJ4gSimUssmm4jhOjmwmSjKiqBv+c7Vj4zPEetbJvEvixHv1+vIFh0RXxtK+0YHWGyVjqBV//S85+/qReAMfKKqI6bhDFRbKbhXpfEJLLI5hJ/NCpv24QXRLJaVAqW14vD9Vf/wuVDV8iylzw7RMnypV9Y3YloVt51RP+w7SiSQ7NrWpZX9ScuM/azI4+YpZjycfdBgawz6HRqJQi/xiqnXt52T4uChV9XeSiOKqTvp4wuODcFW76m57XeBuTM9rx/uRjh/y5ccKnWj0B8H0JhBZfsA8VsPUeS+vL9/xsYTO8ccQQ4MgKPD4HQzZof58/ycYMfElJp52uoRrRrG3w9sQghgmqJza9dYG3njqMYa1vMy8S4bsj1xG6RgiBAFwIFiFattqSyb1G0ZP+Q3hGt9Q5Ee+VFUR68mpNS+AP4Qc7diDMoYkRA12/LyMMk5gnJhzscoo4xihTJAyyugHZYKUUUY/KBOkjDL6QZkgZZTRD8oEKaOMflAmSBll9IMyQcooox+UCVJGGf2gTJAyyugHZYKUUUY/KBOkjDL6QZkgZZTRD8oEKaOMflAmSBll9IMyQcooox+UCVJGGf2gTJAyyugHZYKUUUY/KBOkjDL6QZkgZZTRD8oEKaOMflAmSBll9IMyQcooox+UCVJGGf2gTJAyyugH/x+FH3ljG+bLeAAAAABJRU5ErkJggg==");
        function U(e) {
            var t = e.split("/").filter((function(e) {
                    return e
                }
            ));
            return t.map((function(e, n) {
                    return "/".concat(t.slice(0, n + 1).join("/"))
                }
            ))
        }
        n("a9e3"),
            n("a15b"),
            n("1276"),
            n("45fc");
        var H = {
            props: {
                item: Object
            },
            data: function() {
                return {}
            },
            computed: {
                enableVersion: function() {
                    return this.$store.state.globals.enableVersion
                }
            }
        }
            , B = Object(M.a)(H, (function() {
                var e, t = this, n = t.$createElement, a = t._self._c || n;
                return a("router-link", {
                    class: (e = {
                        "knife4j-menu-api-deprecated": t.item.deprecated
                    },
                        e[t.item.menuClass] = !0,
                        e),
                    attrs: {
                        to: t.item.path
                    }
                }, [t.item.icon ? a("my-icon", {
                    attrs: {
                        type: t.item.icon
                    }
                }) : t._e(), t.enableVersion && t.item.hasNew ? a("a-badge", {
                    staticStyle: {
                        "margin-bottom": "3px"
                    },
                    attrs: {
                        status: "processing",
                        title: "新接口"
                    }
                }) : t._e(), t.item.method ? a("span", {
                    staticClass: "knife4j-menu-line"
                }, [t._v(t._s(t.item.method))]) : t._e(), a("span", [t._v(t._s(t.item.name))])], 1)
            }
        ), [], !1, null, "b45282ec", null).exports
            , L = {
            props: {
                item: Object,
                collapsed: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {}
            },
            computed: {
                enableVersion: function() {
                    return this.$store.state.globals.enableVersion
                }
            }
        }
            , q = Object(M.a)(L, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("span", [e.item.icon ? n("my-icon", {
                    attrs: {
                        type: e.item.icon
                    }
                }) : e._e(), e.enableVersion && e.item.hasNew ? n("a-badge", {
                    staticStyle: {
                        "margin-bottom": "3px"
                    },
                    attrs: {
                        status: "processing",
                        title: "新接口"
                    }
                }) : e._e(), e.item.num && !e.collapsed ? n("span", {
                    staticClass: "knife4j-menu-badge-num",
                    class: e.item.menuClass
                }, [e._v(e._s(e.item.num))]) : e._e(), n("span", [e._v(e._s(e.item.name))])], 1)
            }
        ), [], !1, null, "73d487b8", null).exports
            , F = {
            name: "ThreeMenu",
            functional: !0,
            props: {
                menuData: {
                    type: Array,
                    default: function() {}
                },
                collapsed: {
                    type: Boolean,
                    default: !1
                }
            },
            render: function(e, t) {
                var n = t.props.menuData
                    , a = t.props.collapsed
                    , r = function(t) {
                    if (t.children && t.children.some((function(e) {
                            return e.name
                        }
                    ))) {
                        var n = i(t.children);
                        return n && n.length > 0 ? e("a-sub-menu", {
                            key: t.key,
                            attrs: {
                                title: e(q, {
                                    attrs: {
                                        collapsed: a,
                                        item: t
                                    }
                                })
                            }
                        }, [n]) : null
                    }
                    return e("a-menu-item", {
                        key: t.key
                    }, [e(B, {
                        attrs: {
                            item: t
                        }
                    })])
                }
                    , i = function(e) {
                    return e ? e.map((function(e) {
                            return r(e)
                        }
                    )) : []
                };
                return i(n)
            }
        }
            , z = Object(M.a)(F, void 0, void 0, !1, null, null, null).exports;
        function K(e, t) {
            e = decodeURIComponent(e);
            for (var n = null, a = 0; a < t.length; a++) {
                if (t[a].path == e) {
                    n = t[a];
                    break
                }
                if (null == n) {
                    var r = t[a].children;
                    null != r && null !== r && (n = K(e, r))
                }
            }
            return n
        }
        function G(e, t) {
            for (var n = null, a = 0; a < t.length; a++) {
                if (t[a].key == e) {
                    n = t[a];
                    break
                }
                if (null == n) {
                    var r = t[a].children;
                    null != r && null !== r && (n = G(e, r))
                }
            }
            return n
        }
        var X = {
            name: "SiderMenu",
            components: {
                ThreeMenu: z
            },
            props: {
                menuWidth: {
                    type: Number
                },
                logo: {
                    type: String
                },
                collapsed: {
                    type: Boolean
                },
                onCollapse: {
                    type: Function
                },
                menuData: {
                    type: Array
                },
                location: {
                    type: Object
                },
                serviceOptions: {
                    type: Array
                },
                defaultOption: {
                    type: String
                }
            },
            mounted: function() {
                var e = U(this.location.path);
                if (e[2] && !this.checkPath(e[2]))
                    return this.openKeys = [e[0]],
                        void (this.selectedKeys = [e[1]]);
                if (e[2] ? this.openKeys = [e[0], e[1]] : this.openKeys = [e[0]],
                this.menuData.length > 0) {
                    var t = K(this.location.path, this.menuData);
                    this.selectedKeys = [t.key]
                } else
                    this.selectedKeys = ["kmain"];
                this.openTab()
            },
            watch: {
                collapsed: "collapsedChange",
                $route: function() {
                    var e = this
                        , t = U(this.location.path);
                    setTimeout((function() {
                            var n = K(e.location.path, e.menuData);
                            if (2 == t.length) {
                                var a = K(t[0], e.menuData);
                                e.openKeys = [a.key]
                            } else
                                e.openKeys = [n.key];
                            e.selectedKeys = [n.key],
                                e.openTab()
                        }
                    ), 2e3)
                }
            },
            data: function() {
                return {
                    openKeys: [],
                    selectedKeys: [],
                    status: !1
                }
            },
            created: function() {},
            methods: {
                openTab: function() {
                    var e = this;
                    setTimeout((function() {
                            e.$emit("menuClick", e.selectedKeys)
                        }
                    ), 1e3)
                },
                checkPath: function(e) {
                    var t = !1
                        , n = function(n) {
                        n.map((function(n) {
                                n.path == e && (t = !0),
                                n.children && a(n.children)
                            }
                        ))
                    }
                        , a = function(e) {
                        n(e)
                    };
                    return n(this.menuData),
                        t
                },
                handleOpenChange: function(e) {
                    var t;
                    e.length > 1 ? (t = e.length > 2 ? [e[e.length - 1]] : e[1].indexOf(e[0]) > -1 ? [e[0], e[1]] : [e[e.length - 1]],
                        this.openKeys = t) : this.openKeys = e
                },
                selected: function(e) {
                    e.item,
                        e.key;
                    var t = e.selectedKeys;
                    this.selectedKeys = t
                },
                collapsedChange: function(e, t) {
                    if (e)
                        this.openKeys = [];
                    else {
                        var n = U(this.location.path);
                        if (n[2])
                            this.openKeys = [n[0], n[1]];
                        else {
                            var a = K(n[0], this.menuData);
                            this.openKeys = [a.key]
                        }
                    }
                }
            }
        }
            , J = (n("8601"),
            n("fbc4"),
            Object(M.a)(X, (function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("a-layout-sider", {
                        staticClass: "sider",
                        attrs: {
                            trigger: null,
                            collapsible: "",
                            collapsed: e.collapsed,
                            breakpoint: "lg",
                            width: e.menuWidth
                        },
                        on: {
                            collapse: e.onCollapse
                        }
                    }, [e.collapsed ? e._e() : n("div", {
                        key: "logo",
                        staticClass: "knife4j-logo-data"
                    }, [n("a", {
                        staticStyle: {
                            float: "left"
                        },
                        attrs: {
                            to: "/"
                        }
                    }, [n("a-select", {
                        staticStyle: {
                            width: "30px"
                        },
                        attrs: {
                            value: e.defaultOption,
                            options: e.serviceOptions
                        }
                    })], 1)]), e.collapsed ? n("div", {
                        key: "logo",
                        staticClass: "knife4j-logo"
                    }, [e.collapsed ? n("a", {
                        staticStyle: {
                            float: "left"
                        },
                        attrs: {
                            to: "/"
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.logo,
                            alt: "logo"
                        }
                    })]) : e._e()]) : e._e(), n("div", {
                        staticClass: "knife4j-menu"
                    }, [n("a-menu", {
                        key: "Menu",
                        staticStyle: {
                            padding: "16px 0",
                            width: "100%"
                        },
                        attrs: {
                            theme: "dark",
                            mode: "inline",
                            openKeys: e.openKeys,
                            selectedKeys: e.selectedKeys
                        },
                        on: {
                            openChange: e.handleOpenChange,
                            select: e.selected
                        }
                    }, [n("ThreeMenu", {
                        attrs: {
                            menuData: e.menuData
                        }
                    })], 1)], 1)])
                }
            ), [], !1, null, "6c1178ec", null)).exports
            , Z = {
            name: "HeaderSearch",
            components: {},
            props: {
                onPressEnter: {
                    type: Function
                },
                placeholder: {
                    type: String
                },
                className: {
                    type: String
                },
                onSearch: {
                    type: Function
                },
                onChange: {
                    type: Function
                }
            },
            mounted: function() {},
            destroyed: function() {
                clearTimeout(this.timeout)
            },
            data: function() {
                return {
                    value: "",
                    searchMode: !0
                }
            },
            methods: {
                onKeyDown: function(e) {
                    var t = this;
                    "Enter" === e.key && (this.timeout = setTimeout((function() {
                            t.onPressEnter(t.value)
                        }
                    ), 0))
                },
                buttonSearch: function() {
                    this.onPressEnter(this.value)
                },
                onSearchChange: function(e) {
                    this.value = e,
                    this.onChange && this.onChange()
                },
                enterSearchMode: function() {
                    this.searchMode = !0
                },
                leaveSearchMode: function() {}
            }
        }
            , W = (n("f7c5"),
            Object(M.a)(Z, (function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("span", {
                        class: e.className + " headerSearch",
                        on: {
                            click: e.enterSearchMode
                        }
                    }, [n("a-autoComplete", {
                        key: "AutoComplete",
                        class: "input " + (e.searchMode ? "show" : ""),
                        attrs: {
                            value: e.value,
                            allowClear: ""
                        },
                        on: {
                            change: function(t) {
                                return e.onSearchChange(t)
                            },
                            search: e.onSearch
                        }
                    }, [n("a-input", {
                        attrs: {
                            value: e.value,
                            placeholder: e.placeholder
                        },
                        on: {
                            keydown: function(t) {
                                return e.onKeyDown(t)
                            },
                            blur: function() {
                                return e.leaveSearchMode()
                            }
                        }
                    })], 1), n("a-icon", {
                        key: "Icon",
                        attrs: {
                            type: "search"
                        },
                        on: {
                            click: e.buttonSearch
                        }
                    })], 1)
                }
            ), [], !1, null, "42139358", null)).exports
            , Y = n("5609")
            , Q = {
            name: "GlobalHeader",
            components: {
                HeaderSearch: W
            },
            props: {
                documentTitle: {
                    type: String,
                    default: "Knife4j接口文档"
                },
                headerClass: {
                    type: String
                },
                currentUser: {
                    type: Object
                },
                collapsed: {
                    type: Boolean
                },
                onCollapse: {
                    type: Function
                },
                onNoticeVisibleChange: {
                    type: Function
                },
                onNoticeClear: {
                    type: Function
                },
                fetchingNotices: {
                    type: Boolean
                },
                notices: {
                    type: Array
                },
                onMenuClick: {
                    type: Function,
                    default: function() {}
                }
            },
            computed: {
                settings: function() {
                    return this.$store.state.globals.settings
                }
            },
            data: function() {
                return {}
            },
            methods: {
                changeZh: function() {
                    this.$i18n.locale = "zh-CN",
                        this.$store.dispatch("globals/setLang", "zh-CN"),
                        this.$localStore.setItem(Y.a.globalI18nCache, "zh-CN")
                },
                changeEn: function() {
                    this.$i18n.locale = "en-US",
                        this.$store.dispatch("globals/setLang", "en-US"),
                        this.$localStore.setItem(Y.a.globalI18nCache, "en-US")
                },
                handleMenuClick: function() {},
                jumpSettings: function() {
                    this.$router.push({
                        path: "/documentManager/Settings"
                    })
                },
                toggle: function() {
                    this.onCollapse(!this.collapsed)
                },
                onSearch: function(e) {
                    null != e && null != e && "" != e || this.$emit("searchClear")
                },
                onPressEnter: function(e) {
                    this.$emit("searchKey", e)
                },
                onItemClick: function(e, t) {},
                clearLocalCache: function() {
                    try {
                        this.$localStore.clear()
                    } catch (e) {}
                    this.$message.info("清除本地缓存成功")
                }
            }
        }
            , $ = (n("4236"),
            n("1be9"),
            Object(M.a)(Q, (function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("div", {
                        staticClass: "header knife4j-header-default",
                        class: e.headerClass
                    }, [n("a-icon", {
                        staticClass: "trigger",
                        attrs: {
                            type: e.collapsed ? "menu-unfold" : "menu-fold"
                        },
                        on: {
                            click: e.toggle
                        }
                    }), n("span", {
                        staticClass: "knife4j-header-title"
                    }, [e._v(e._s(e.documentTitle))]), n("div", {
                        staticClass: "right"
                    }, [e.settings.enableSearch ? n("HeaderSearch", {
                        staticClass: "action search",
                        attrs: {
                            placeholder: e.$t("searchHolderText"),
                            onSearch: function(t) {
                                return e.onSearch(t)
                            },
                            onPressEnter: function(t) {
                                return e.onPressEnter(t)
                            }
                        }
                    }) : e._e(), e.currentUser.name ? n("a-dropdown", [n("a-menu", {
                        staticClass: "menu",
                        attrs: {
                            slot: "overlay"
                        },
                        slot: "overlay"
                    }, [e.settings.enableDocumentManage ? n("a-menu-item", [n("router-link", {
                        attrs: {
                            to: "/documentManager/Settings"
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "setting"
                        }
                    }), e._v(" "), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$t("settingText"))
                        }
                    })], 1)], 1) : e._e(), n("a-menu-item", {
                        on: {
                            click: e.clearLocalCache
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "delete"
                        }
                    }), e._v(" "), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$t("cacheText"))
                        }
                    })], 1), n("a-menu-divider"), n("a-menu-item", {
                        key: "logout",
                        on: {
                            click: e.changeZh
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "environment"
                        }
                    }), e._v(" 简体中文 ")], 1), n("a-menu-item", {
                        key: "triggerError",
                        on: {
                            click: e.changeEn
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: "environment"
                        }
                    }), e._v(" English ")], 1)], 1), n("span", {
                        staticClass: "action account"
                    }, [n("span", {
                        staticClass: "name",
                        domProps: {
                            innerHTML: e._s(e.$t("langText"))
                        }
                    })])], 1) : n("a-spin", {
                        staticStyle: {
                            "margin-left": "8px"
                        },
                        attrs: {
                            size: "small"
                        }
                    })], 1)], 1)
                }
            ), [], !1, null, "328fc05a", null)).exports
            , _ = {
            name: "GlobalFooter",
            props: {
                links: {
                    type: Array,
                    default: function() {}
                }
            },
            components: {
                Markdown: function() {
                    return n.e("chunk-f876db6c").then(n.bind(null, "68cc"))
                }
            },
            computed: {
                settings: function() {
                    return this.$store.state.globals.settings
                }
            },
            data: function() {
                return {}
            }
        }
            , ee = (n("cfc6"),
            Object(M.a)(_, (function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("div", {
                        staticClass: "globalFooter"
                    }, [e.settings.enableFooterCustom ? n("a-row", [e.settings.enableFooterCustom ? n("Markdown", {
                        attrs: {
                            source: e.settings.footerCustomContent
                        }
                    }) : e._e()], 1) : e.settings.enableFooter ? n("a-row", [n("div", {
                        staticClass: "copyright"
                    }, [e._v("Apache License 2.0 | Copyright "), n("a-icon", {
                        attrs: {
                            type: "copyright"
                        }
                    }), e._v(" 2019-"), n("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://gitee.com/xiaoym/knife4j"
                        }
                    }, [e._v("Knife4j")])], 1)]) : e._e()], 1)
                }
            ), [], !1, null, "71e6ae75", null)).exports
            , te = {
            props: {
                panes: {
                    type: Array
                },
                activeKey: {
                    type: String
                }
            },
            data: function() {
                return {}
            },
            created: function() {},
            methods: {}
        }
            , ne = Object(M.a)(te, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [n("a-tabs", {
                    staticClass: "knife4j-tab",
                    attrs: {
                        value: e.activeKey,
                        type: "editable-card"
                    }
                }, e._l(e.panes, (function(e) {
                        return n("a-tab-pane", {
                            key: e.key,
                            attrs: {
                                tab: e.title,
                                closable: e.closable
                            }
                        }, [n(e.content, {
                            tag: "component"
                        })], 1)
                    }
                )), 1)], 1)
            }
        ), [], !1, null, null, null).exports
            , ae = n("5530")
            , re = n("b1c7")
            , ie = (n("baa5"),
            n("13d5"),
            n("b64b"),
            n("8a79"),
            n("2532"),
            n("5319"),
            n("841c"),
            n("2ca0"),
            n("498a"),
            n("53ca"))
            , se = n("8237")
            , oe = n.n(se)
            , le = n("7c5c")
            , ce = n("2f24");
        function pe(e, t, n, a) {
            this.summary = e,
                this.description = t,
                this.example = n,
                this.externalValue = a
        }
        function ue(e) {
            this.source = e,
                this.hasExample = !1,
                this.hasMoreExample = !1,
                this.responseText = null,
                this.responseValue = null,
                this.responseTextArray = [],
                this.init()
        }
        ue.prototype.init = function() {
            if (re.a.checkUndefined(this.source)) {
                var e = re.a.propValue("example", this.source, null)
                    , t = re.a.propValue("examples", this.source, null);
                this.hasExample = null != e,
                    this.hasMoreExample = null != t,
                this.hasExample && this.oneExample(e),
                this.hasMoreExample && this.multipleExample(t)
            }
        }
            ,
            ue.prototype.oneExample = function(e) {
                re.a.checkUndefined(e) && (this.responseText = e,
                    this.responseValue = re.a.json5stringifyFormat(e, null, "\t"))
            }
            ,
            ue.prototype.multipleExample = function(e) {
                if (re.a.checkUndefined(e))
                    for (var t in e) {
                        var n = re.a.propValue(t, e, null);
                        if (re.a.checkUndefined(n)) {
                            var a = re.a.propValue("summary", n, null);
                            if (re.a.checkUndefined(a)) {
                                var r = re.a.propValue("description", n, null)
                                    , i = re.a.propValue("example", n, null)
                                    , s = re.a.propValue("externalValue", n, null);
                                this.responseTextArray.push(new pe(a,r,i,s))
                            }
                        }
                    }
            }
        ;
        var de = ue;
        function he(e) {
            this.source = e,
                this.hasExample = !1,
                this.hasMoreExample = !1,
                this.responseText = null,
                this.responseValue = null,
                this.responseTextArray = [],
                this.init()
        }
        he.prototype.init = function() {
            if (re.a.checkUndefined(this.source)) {
                var e = re.a.propValue("example", this.source, null)
                    , t = re.a.propValue("examples", this.source, null);
                this.hasExample = null != e,
                    this.hasMoreExample = null != t,
                this.hasExample && this.oneExample(e),
                this.hasMoreExample && this.multipleExample(t)
            }
        }
            ,
            he.prototype.oneExample = function(e) {
                re.a.checkUndefined(e) && (this.responseText = e,
                    this.responseValue = re.a.json5stringifyFormat(e, null, "\t"))
            }
            ,
            he.prototype.multipleExample = function(e) {
                if (re.a.checkUndefined(e)) {
                    for (var t in e) {
                        var n = re.a.propValue(t, e, null);
                        if (re.a.checkUndefined(n)) {
                            var a = re.a.propValue("summary", n, null);
                            if (re.a.checkUndefined(a)) {
                                var r = re.a.propValue("description", n, null)
                                    , i = re.a.propValue("value", n, null)
                                    , s = re.a.propValue("externalValue", n, null);
                                this.responseTextArray.push(new pe(a,r,i,s))
                            }
                        }
                    }
                    if (re.a.checkUndefined(this.responseTextArray)) {
                        var o = this.responseTextArray[0];
                        this.responseText = o.example,
                            this.responseValue = o.example
                    }
                }
            }
        ;
        var fe = he;
        function me(e, t, n, a) {
            this.grantType = e,
                this.name = "Authorization",
                this.username = null,
                this.password = null,
                this.redirectUri = null,
                this.granted = !1,
                this.tokenUrl = t,
                this.authorizeUrl = n,
                this.clientId = "",
                this.clientSecret = "",
                this.accessToken = null,
                this.tokenType = null,
                this.state = "OAuth" + a
        }
        me.prototype.syncOAuth = function() {
            if (window.localStorage) {
                var e = this.state
                    , t = window.localStorage.getItem(e);
                if (re.a.strNotBlank(t)) {
                    var n = re.a.json5parse(t);
                    this.accessToken = re.a.getValue(n, "tokenType", "Bearer", !0) + " " + n.accessToken,
                        this.tokenType = n.tokenType,
                        this.granted = !0
                }
            }
        }
            ,
            me.prototype.sync = function() {
                if (this.syncOAuth(),
                    window.localStorage) {
                    var e = "SELF" + this.state
                        , t = window.localStorage.getItem(e);
                    if (re.a.strNotBlank(t)) {
                        var n = re.a.json5parse(t);
                        this.grantType == n.grantType && (this.granted = n.granted,
                        re.a.strBlank(this.clientId) && (this.clientId = n.clientId),
                        re.a.strBlank(this.clientSecret) && (this.clientSecret = n.clientSecret),
                        re.a.strBlank(this.redirectUri) && (this.redirectUri = n.redirectUri),
                        re.a.strBlank(this.username) && (this.username = n.username),
                        re.a.strBlank(this.password) && (this.password = n.password),
                        re.a.strBlank(this.accessToken) && (this.accessToken = n.accessToken),
                        re.a.strBlank(this.tokenType) && (this.tokenType = n.tokenType)),
                            window.localStorage.setItem(e, re.a.json5stringify(this))
                    } else
                        window.localStorage.setItem(e, re.a.json5stringify(this))
                }
            }
            ,
            me.prototype.clear = function() {
                this.username = null,
                    this.password = null,
                    this.accessToken = null,
                    this.redirectUri = null,
                    this.granted = !1,
                    this.clientId = "",
                    this.clientSecret = "",
                    this.accessToken = null,
                    this.tokenType = null;
                var e = "SELF" + this.state;
                window.localStorage.setItem(e, re.a.json5stringify(this))
            }
        ;
        var ge = me;
        function ye(e, t, n) {
            this.originalType = e,
                this.instanceId = t,
                this.oauth2Definitions = n
        }
        ye.prototype.readOAuth2 = function() {
            var e = this.originalType
                , t = ""
                , n = "";
            return re.a.checkUndefined(this.oauth2Definitions) && (n = re.a.propValue("authorizationUrl", this.oauth2Definitions, ""),
                t = re.a.propValue("tokenUrl", this.oauth2Definitions, "")),
                "authorizationCode" === this.originalType ? e = "accessCode" : "clientCredentials" === this.originalType && (e = "client_credentials"),
                new ge(e,t,n,this.instanceId)
        }
        ;
        var ve = ye;
        function be(e, t, n) {
            this.additionalProperties = e,
                this.modelName = t,
                this.modelExampleValue = n
        }
        function we(e, t) {
            this.additionalProperties = e,
                this.oas = t
        }
        be.prototype = {
            additionalMapValue: function(e) {
                var t = this.additionalProperties;
                if (re.a.checkUndefined(e) && (t = e),
                    re.a.checkUndefined(t)) {
                    var n = re.a.propValue("type", t, "");
                    if (t.hasOwnProperty("additionalProperties")) {
                        var a = t.additionalProperties;
                        return "array" == n ? {
                            additionalProperties1: [].concat(this.additionalMapValue(a))
                        } : {
                            additionalProperties1: this.additionalMapValue(a)
                        }
                    }
                    return "array" == n ? {
                        additionalProperties1: [].concat(this.modelExampleValue)
                    } : {
                        additionalProperties1: this.modelExampleValue
                    }
                }
                return {
                    additionalProperties1: this.modelExampleValue
                }
            }
        },
            we.prototype = {
                findClassName: function(e) {
                    var t = ""
                        , n = this.additionalProperties;
                    if (re.a.checkUndefined(e) && (n = e),
                        re.a.checkUndefined(n)) {
                        if (n.hasOwnProperty("additionalProperties")) {
                            var a = n.additionalProperties;
                            return this.findClassName(a, this.oas)
                        }
                        t = this.findItemsClassName(n)
                    }
                    return t
                },
                findItemsClassName: function(e) {
                    var t = "";
                    if (re.a.checkUndefined(e))
                        if (e.hasOwnProperty("$ref")) {
                            var n = e.$ref;
                            new RegExp(re.a.oasmodel(this.oas),"ig").test(n) && (t = RegExp.$1)
                        } else if (e.hasOwnProperty("items")) {
                            var a = e.items;
                            if (a.hasOwnProperty("$ref")) {
                                var r = a.$ref;
                                new RegExp(re.a.oasmodel(this.oas),"ig").test(r) && (t = RegExp.$1)
                            } else
                                a.hasOwnProperty("items") && (t = this.findItemsClassName(a))
                        }
                    return t
                }
            };
        var ke = function() {
            this.basic = !0,
                this.name = "",
                this.type = "",
                this.refType = null,
                this.description = "",
                this.example = "",
                this.format = "",
                this.required = !1,
                this.value = null,
                this.property = null,
                this.originProperty = null,
                this.enum = null,
                this.readOnly = !1,
                this.validateStatus = !1,
                this.validateInstance = null,
                this.properties = new Array
        };
        function xe(e) {
            this.schema = e
        }
        xe.prototype.readBasicProperty = function(e, t, n, a) {
            var r = {}
                , i = this.schema;
            if (i.hasOwnProperty("properties")) {
                var s = i.properties;
                for (var o in s) {
                    var l = s[o];
                    !l.hasOwnProperty("readOnly") || l.readOnly;
                    var c = new ke;
                    t.validateJSR303(c, l),
                    l.hasOwnProperty("readOnly") && (c.readOnly = l.readOnly),
                        c.name = o,
                        c.originProperty = l,
                        c.type = re.a.propValue("type", l, "string"),
                        c.description = re.a.propValue("description", l, ""),
                    l.hasOwnProperty("enum") && (c.enum = l.enum,
                    "" != c.description && (c.description += ","),
                        c.description = c.description + re.a.enumAvalibleLabel(t.i18nInstance, c.enum)),
                        "string" == c.type ? c.example = re.a.getExample("example", l, "") : c.example = re.a.propValue("example", l, ""),
                        c.format = re.a.propValue("format", l, ""),
                        c.required = re.a.propValue("required", l, !1),
                    e.required.length > 0 && e.required.indexOf(c.name) > -1 && (c.required = !0);
                    var p = "";
                    if (l.hasOwnProperty("type")) {
                        var u = l.type;
                        if (l.hasOwnProperty("example"))
                            p = "string" == u ? re.a.getExample("example", l, "") : l.example;
                        else if (l.hasOwnProperty("default"))
                            p = re.a.propValue("default", l, "");
                        else if (re.a.checkIsBasicType(u)) {
                            if (p = re.a.getBasicTypeValue(u),
                            "object" == u && l.hasOwnProperty("additionalProperties")) {
                                var d = l.additionalProperties;
                                t.log("------解析map-=-----------additionalProperties,defName:" + name);
                                var h = new we(d,a).findClassName();
                                if (re.a.strNotBlank(h)) {
                                    var f = new Array;
                                    f.push(name);
                                    var m = null;
                                    p = {
                                        additionalProperties1: m = h != name ? t.findRefDefinition(h, n, !1, f, null, a) : t.findRefDefinition(h, n, !0, f, name, a)
                                    },
                                        c.type = h,
                                        c.refType = h
                                } else if (d.hasOwnProperty("$ref")) {
                                    var g = d.$ref
                                        , y = new RegExp(re.a.oasmodel(a),"ig");
                                    if (y.test(g)) {
                                        var v = RegExp.$1;
                                        m = null,
                                            (f = new Array).push(name),
                                            p = {
                                                additionalProperties1: m = v != name ? t.findRefDefinition(v, n, !1, f, null, a) : t.findRefDefinition(v, n, !0, f, name, a)
                                            },
                                            t.log("解析map-=完毕："),
                                            t.log(p),
                                            c.type = v,
                                            c.refType = v
                                    }
                                } else if (d.hasOwnProperty("items")) {
                                    if (g = d.items.$ref,
                                        (y = new RegExp(re.a.oasmodel(a),"ig")).test(g)) {
                                        v = RegExp.$1,
                                            m = null,
                                            (f = new Array).push(name),
                                            m = v != name ? t.findRefDefinition(v, n, !1, f, null, a) : t.findRefDefinition(v, n, !0, f, name, a);
                                        var b = new Array;
                                        b.push(m),
                                            p = {
                                                additionalProperties1: b
                                            },
                                            t.log("解析map-=完毕："),
                                            t.log(p),
                                            c.type = "array",
                                            c.refType = v
                                    }
                                }
                            }
                        } else if ("array" == u) {
                            p = new Array;
                            var w = l.items
                                , k = w.$ref;
                            if (w.hasOwnProperty("type") && "array" == w.type && (k = w.items.$ref),
                            w.hasOwnProperty("enum") && ("" != c.description && (c.description += ","),
                                c.description = c.description + re.a.enumAvalibleLabel(t.i18nInstance, w.enum)),
                                (y = new RegExp(re.a.oasmodel(a),"ig")).test(k)) {
                                var x = RegExp.$1;
                                c.refType = x,
                                    (f = new Array).push(name),
                                    x != name ? p.push(t.findRefDefinition(x, n, !1, f, null, a)) : p.push(t.findRefDefinition(x, n, !0, f, name, a))
                            } else
                                c.refType = w.type
                        }
                    } else
                        l.hasOwnProperty("$ref") ? (k = l.$ref,
                        (y = new RegExp(re.a.oasmodel(a),"ig")).test(k) && (x = RegExp.$1,
                            c.refType = x,
                            (f = new Array).push(name),
                            p = x != name ? t.findRefDefinition(x, n, !1, f, null, a) : t.findRefDefinition(x, n, !0, f, null, a))) : p = {};
                    c.value = p,
                    null != c.format && null != c.format && "" != c.format && (c.type += "(" + c.format + ")"),
                    null != c.refType && "" != c.refType && "string" == c.type && (c.type = c.refType),
                    t.checkPropertiesExists(e.properties, c) || (e.properties.push(c),
                    c.readOnly || (r[o] = p))
                }
                e.value = r
            }
        }
            ,
            xe.prototype.readProperty = function(e, t, n) {
                var a = {}
                    , r = this.schema;
                if (re.a.checkUndefined(e) && (r = e),
                    r.hasOwnProperty("properties")) {
                    var i = value.properties;
                    for (var s in i) {
                        var o = i[s];
                        !o.hasOwnProperty("readOnly") || o.readOnly;
                        var l = new ke;
                        n.validateJSR303(l, o),
                        o.hasOwnProperty("readOnly") && (l.readOnly = o.readOnly),
                            l.name = s,
                            l.originProperty = o,
                            l.type = re.a.propValue("type", o, "string"),
                            l.description = re.a.propValue("description", o, ""),
                        o.hasOwnProperty("enum") && (l.enum = o.enum,
                        "" != l.description && (l.description += ","),
                            l.description = l.description + re.a.enumAvalibleLabel(n.i18nInstance, l.enum)),
                            "string" == l.type ? l.example = re.a.getExample("example", o, "") : l.example = re.a.propValue("example", o, ""),
                            l.format = re.a.propValue("format", o, ""),
                            l.required = re.a.propValue("required", o, !1),
                        t.required.length > 0 && t.required.indexOf(l.name) > -1 && (l.required = !0);
                        var c = "";
                        if (o.hasOwnProperty("type")) {
                            var p = o.type;
                            if (o.hasOwnProperty("example"))
                                c = "string" == p ? re.a.getExample("example", o, "") : o.example;
                            else if (o.hasOwnProperty("default"))
                                c = re.a.propValue("default", o, "");
                            else if (re.a.checkIsBasicType(p)) {
                                if (c = re.a.getBasicTypeValue(p),
                                "object" == p && o.hasOwnProperty("additionalProperties")) {
                                    var u = o.additionalProperties;
                                    n.log("------解析map-=-----------additionalProperties,defName:" + name);
                                    var d = new we(u,oas2).findClassName();
                                    if (re.a.strNotBlank(d)) {
                                        var h = new Array;
                                        h.push(name);
                                        var f = null;
                                        c = {
                                            additionalProperties1: f = d != name ? n.findRefDefinition(d, definitions, !1, h, null, oas2) : n.findRefDefinition(d, definitions, !0, h, name, oas2)
                                        },
                                            l.type = d,
                                            l.refType = d
                                    } else if (u.hasOwnProperty("$ref")) {
                                        var m = u.$ref
                                            , g = new RegExp(re.a.oasmodel(oas2),"ig");
                                        if (g.test(m)) {
                                            var y = RegExp.$1;
                                            f = null,
                                                (h = new Array).push(name),
                                                c = {
                                                    additionalProperties1: f = y != name ? n.findRefDefinition(y, definitions, !1, h, null, oas2) : n.findRefDefinition(y, definitions, !0, h, name, oas2)
                                                },
                                                n.log("解析map-=完毕："),
                                                n.log(c),
                                                l.type = y,
                                                l.refType = y
                                        }
                                    } else if (u.hasOwnProperty("items")) {
                                        if (m = u.items.$ref,
                                            (g = new RegExp(re.a.oasmodel(oas2),"ig")).test(m)) {
                                            y = RegExp.$1,
                                                f = null,
                                                (h = new Array).push(name),
                                                f = y != name ? n.findRefDefinition(y, definitions, !1, h, null, oas2) : n.findRefDefinition(y, definitions, !0, h, name, oas2);
                                            var v = new Array;
                                            v.push(f),
                                                c = {
                                                    additionalProperties1: v
                                                },
                                                n.log("解析map-=完毕："),
                                                n.log(c),
                                                l.type = "array",
                                                l.refType = y
                                        }
                                    }
                                }
                            } else if ("array" == p) {
                                c = new Array;
                                var b = o.items
                                    , w = b.$ref;
                                if (b.hasOwnProperty("type") && "array" == b.type && (w = b.items.$ref),
                                b.hasOwnProperty("enum") && ("" != l.description && (l.description += ","),
                                    l.description = l.description + re.a.enumAvalibleLabel(n.i18nInstance, b.enum)),
                                    (g = new RegExp(re.a.oasmodel(oas2),"ig")).test(w)) {
                                    var k = RegExp.$1;
                                    l.refType = k,
                                        (h = new Array).push(name),
                                        k != name ? c.push(n.findRefDefinition(k, definitions, !1, h, null, oas2)) : c.push(n.findRefDefinition(k, definitions, !0, h, name, oas2))
                                } else
                                    l.refType = b.type;
                                b.hasOwnProperty("properties")
                            }
                        } else
                            o.hasOwnProperty("$ref") ? (w = o.$ref,
                            (g = new RegExp(re.a.oasmodel(oas2),"ig")).test(w) && (k = RegExp.$1,
                                l.refType = k,
                                (h = new Array).push(name),
                                c = k != name ? n.findRefDefinition(k, definitions, !1, h, null, oas2) : n.findRefDefinition(k, definitions, !0, h, null, oas2))) : c = {};
                        l.value = c,
                        null != l.format && null != l.format && "" != l.format && (l.type += "(" + l.format + ")"),
                        null != l.refType && "" != l.refType && "string" == l.type && (l.type = l.refType),
                        n.checkPropertiesExists(t.properties, l) || (t.properties.push(l),
                        l.readOnly || (a[s] = c))
                    }
                    t.value = a
                }
            }
        ;
        var Se = xe
            , Te = n("98dc")
            , Ie = n.n(Te)
            , Pe = n("1a8c")
            , je = n.n(Pe)
            , Ce = n("3852")
            , Oe = n.n(Ce)
            , Ae = n("0644")
            , Ve = n.n(Ae)
            , Ee = n("3cfe")
            , Me = n.n(Ee)
            , Re = n("eaa6")
            , De = n.n(Re)
            , Ne = n("4cfe")
            , Ue = n.n(Ne)
            , He = n("083c")
            , Be = n.n(He)
            , Le = n("bc3a")
            , qe = n.n(Le);
        function Fe(e) {
            if (this.swaggerData = null,
                this.springdoc = e.springdoc || !1,
                this.springdoc) {
                var t = window.location.pathname
                    , n = t.lastIndexOf("/")
                    , a = t.length == n + 1 ? t : t.substring(0, n);
                this.url = "" != a && "/" != a ? e.url || a + "/v3/api-docs/swagger-config" : e.url || "v3/api-docs/swagger-config"
            } else
                this.url = e.url || "swagger-resources";
            this.i18n = e.i18n || "zh-CN",
                this.desktop = e.desktop || !1,
                this.desktopCode = null,
                this.i18nVue = e.i18nVue || null,
                this.i18nFlag = e.i18nFlag || !1,
                this.baseSpringFox = e.baseSpringFox || !1,
                this.configUrl = e.configUrl || "swagger-resources/configuration/ui",
                this.configSupport = e.configSupport || !1,
                this.securitySupport = e.securitySupport || !1,
                this.serviceOptions = null,
                this.defaultServiceOption = null,
                this.routeParams = e.routeParams || null,
                this.menuData = null,
                this.store = e.store || {},
                this.localStore = e.localStore || {},
                this.plus = e.plus,
                this.docId = "content",
                this.title = "knife4j",
                this.titleOfUrl = "https://gitee.com/xiaoym/knife4j",
                this.load = 1,
                this.tabId = "tabUl",
                this.tabContentId = "tabContent",
                this.searchEleId = "spanSearch",
                this.searchTxtEleId = "searchTxt",
                this.menuId = "menu",
                this.searchMenuId = "searchMenu",
                this.instances = [],
                this.currentInstance = null,
                this.globalMenuDatas = [],
                this.globalTabId = "sbu-dynamic-tab",
                this.globalTabs = [],
                this.layui = e.layui,
                this.ace = e.ace,
                this.treetable = e.treetable,
                this.layTabFilter = "admin-pagetabs",
                this.version = "1.9.6",
                this.requestOrigion = "SwaggerBootstrapUi",
                this.requestParameter = {},
                this.settings = e.settings || {
                    enableDebug: !0,
                    enableFooter: !0,
                    enableFooterCustom: !1,
                    footerCustomContent: "",
                    enableSearch: !0,
                    enableOpenApi: !0,
                    enableHomeCustom: !1,
                    homeCustomLocation: "",
                    enableGroup: !0,
                    enableResponseCode: !0,
                    enableSwaggerModels: !0,
                    swaggerModelName: "Swagger Models",
                    enableReloadCacheParameter: !1,
                    enableAfterScript: !0,
                    enableDocumentManage: !0,
                    enableVersion: !1,
                    showApiUrl: !1,
                    showTagStatus: !1,
                    enableSwaggerBootstrapUi: !1,
                    treeExplain: !0,
                    enableDynamicParameter: !1,
                    enableFilterMultipartApis: !1,
                    enableFilterMultipartApiMethodType: "POST",
                    enableRequestCache: !0,
                    enableCacheOpenApiTable: !1,
                    enableHost: !1,
                    enableHostText: "",
                    language: e.i18n || "zh-CN"
                },
                this.extUrl = "/v2/api-docs",
                this.ext3Url = "/v3/api-docs",
                this.validateExtUrl = "",
                this.cacheApis = e.cacheApis || [],
                this.hasLoad = !1,
                this.i18nInstance = e.i18nInstance || {},
                this.configuration = {
                    supportedSubmitMethods: ["get", "put", "post", "delete", "options", "head", "patch", "trace"]
                }
        }
        function ze(e, t, n, a, r, i) {
            if (re.a.checkUndefined(t))
                for (var s in t)
                    if (s == n.name) {
                        var o = t[s];
                        if (re.a.checkUndefined(o)) {
                            var l = re.a.propValue("description", o, null);
                            if (null != l && (e.description = l),
                                o.hasOwnProperty("properties")) {
                                var c = o.properties
                                    , p = o.hasOwnProperty("required") ? o.required : new Array;
                                for (var u in c) {
                                    var d = c[u];
                                    d.refType = r.getSwaggerModelRefType(d, i);
                                    var h = new ht;
                                    h.pid = e.id,
                                        h.readOnly = d.readOnly,
                                        e.parentTypes.forEach((function(e) {
                                                h.parentTypes.push(e)
                                            }
                                        )),
                                        h.parentTypes.push(s),
                                        h.level = e.level + 1,
                                        h.name = u,
                                        h.type = d.type,
                                    "array" != d.type && null != d.refType && null != d.refType && "" != d.refType && (h.type = d.refType),
                                        re.a.checkUndefined(d.require) ? h.require = d.required : p.includes(u) && (h.require = !0),
                                        h.example = d.example,
                                        h.txtValue = d.example,
                                    re.a.checkUndefined(d.example) || (h.example = d.default,
                                        h.txtValue = d.default,
                                        h.value = d.default);
                                    var f = re.a.propValue("description", d, "");
                                    if (d.hasOwnProperty("enum") && ("" != f && (f += ","),
                                        f += re.a.enumAvalibleLabel(r.i18nInstance, d.enum)),
                                        h.description = re.a.replaceMultipLineStr(f),
                                    null == e.children && (e.children = new Array),
                                        e.children.push(h),
                                    re.a.checkUndefined(d.refType) && !re.a.checkIsBasicType(d.refType)) {
                                        h.schemaValue = d.refType,
                                            h.schema = !0;
                                        var m = r.getOriginalDefinitionByName(d.refType, t);
                                        h.parentTypes.includes(d.refType) || ze(h, t, m, a, r, i)
                                    } else
                                        "array" == d.type && null != d.refType && null != d.refType && "" != d.refType && (h.schemaValue = d.refType,
                                            m = r.getOriginalDefinitionByName(d.refType, t),
                                        h.parentTypes.includes(d.refType) || ze(h, t, m, a, r, i))
                                }
                            } else if (o.hasOwnProperty("additionalProperties")) {
                                var g = r.getSwaggerModelRefType(o, i);
                                (h = new ht).pid = a.id,
                                    h.readOnly = !0,
                                    h.parentTypes.push(a.name),
                                    h.name = "additionalProperty1",
                                    h.type = re.a.propValue("title", o, ""),
                                re.a.checkUndefined(g) && (h.type = g),
                                null == e.children && (e.children = new Array),
                                    e.children.push(h),
                                    n = r.getOriginalDefinitionByName(g, t),
                                re.a.checkUndefined(n) && (h.schemaValue = h.type,
                                    h.schema = !0,
                                h.parentTypes.includes(g) || ze(h, t, n, a, r, i))
                            }
                        }
                    }
        }
        function Ke(e, t, n, a) {
            this.grantType = e,
                this.name = "Authorization",
                this.username = null,
                this.password = null,
                this.redirectUri = null,
                this.granted = !1,
                this.tokenUrl = t,
                this.authorizeUrl = n,
                this.clientId = "",
                this.clientSecret = "",
                this.accessToken = null,
                this.tokenType = null,
                this.state = "OAuth" + a
        }
        function Ge(e, t, n, a) {
            if (re.a.checkUndefined(n.schemaValue)) {
                var r = t[n.schemaValue];
                re.a.checkUndefined(r) && (a.parentTypes.push(n.schemaValue),
                re.a.arrNotEmpty(r.params) && r.params.forEach((function(r) {
                        var i = {
                            childrenTypes: r.childrenTypes,
                            def: r.def,
                            description: r.description,
                            enum: r.enum,
                            example: r.example,
                            id: r.id,
                            ignoreFilterName: r.ignoreFilterName,
                            in: r.in,
                            level: r.level,
                            name: r.name,
                            parentTypes: r.parentTypes,
                            pid: r.pid,
                            readOnly: r.readOnly,
                            require: r.require,
                            schema: r.schema,
                            schemaValue: r.schemaValue,
                            show: r.show,
                            txtValue: r.txtValue,
                            type: r.type,
                            validateInstance: r.validateInstance,
                            validateStatus: r.validateStatus,
                            value: r.value
                        };
                        i.pid = n.id,
                            i.parentParam = n,
                            e.data.push(i),
                        i.schema && -1 == a.parentTypes.indexOf(i.schemaValue) && Ge(e, t, i, a)
                    }
                )))
            }
        }
        function Xe(e, t, n, a) {
            if (re.a.checkUndefined(e) && re.a.strNotBlank(e)) {
                var r = n[e];
                if (re.a.checkUndefined(r)) {
                    var i, s, o = re.a.json5stringify(r);
                    for (i = a ? new RegExp('"#/definitions/(.*?)"',"ig") : new RegExp('"#/components/schemas/(.*?)"',"ig"); null != (s = i.exec(o)); ) {
                        var l = s[1];
                        re.a.checkUndefined(l) && (t.includes(l) || (t.push(l),
                            Xe(l, t, n, a)))
                    }
                }
            }
        }
        function Je(e, t) {
            this.json = e;
            var n = new Array;
            Object.keys(t || {}).forEach((function(e) {
                    n.push(e.substring(e.indexOf(".") + 1))
                }
            )),
                this.includeArrays = n
        }
        le.marked.setOptions({
            gfm: !0,
            tables: !0,
            breaks: !1,
            pedantic: !1,
            sanitize: !1,
            smartLists: !0,
            smartypants: !1
        }),
            Fe.prototype.main = function() {
                this.initRequestParameters(),
                    this.initSettings()
            }
            ,
            Fe.prototype.initRequestParameters = function() {
                var e = this
                    , t = window.location.search;
                if (null != t && "" != t) {
                    var n = t.substr(1);
                    if (null != n && null != n && "" != n)
                        for (var a = n.split("&"), r = 0; r < a.length; r++) {
                            var i = a[r];
                            if (null != i && null != i && "" != i) {
                                var s = i.split("=");
                                e.requestParameter[re.a.trim(s[0])] = re.a.trim(s[1])
                            }
                        }
                }
                e.log("请求参数========================================"),
                    e.log(e.requestParameter)
            }
            ,
            Fe.prototype.initSettings = function() {
                var e = this;
                e.log("本地Settings初始化"),
                e.configSupport && e.configInit(),
                    e.analysisGroup()
            }
            ,
            Fe.prototype.initApis = function() {
                if (window.localStorage) {
                    var e = window.localStorage.SwaggerBootstrapUiCacheApis;
                    if (null != e && null != e && "" != e) {
                        var t = re.a.json5parse(e);
                        this.cacheApis = t
                    } else
                        this.cacheApis = []
                }
            }
            ,
            Fe.prototype.configInit = function() {
                var e = this;
                this.ajax({
                    url: e.configUrl,
                    type: "get",
                    timeout: 2e4,
                    dataType: "json"
                }, (function(t) {
                        if (null != t && null != t && t.hasOwnProperty("supportedSubmitMethods")) {
                            var n = t.supportedSubmitMethods;
                            if (n.length > 0) {
                                var a = [];
                                n.forEach((function(e) {
                                        a.push(e.toLowerCase())
                                    }
                                )),
                                    e.configuration.supportedSubmitMethods = a
                            } else
                                e.configuration.supportedSubmitMethods = []
                        }
                    }
                ), (function(t) {
                        e.error(t)
                    }
                ))
            }
            ,
            Fe.prototype.analysisGroup = function() {
                var e = this;
                try {
                    var t = {};
                    if (e.desktop) {
                        window.location.pathname;
                        var n = re.a.getDesktopCode();
                        t = {
                            "knife4j-gateway-code": n
                        },
                            this.desktopCode = n
                    }
                    e.ajax({
                        url: e.url,
                        type: "get",
                        timeout: 6e4,
                        dataType: "json",
                        headers: t
                    }, (function(t) {
                            e.springdoc ? e.analysisSpringDocOpenApiGroupSuccess(t) : e.analysisGroupSuccess(t),
                                e.createGroupElement()
                        }
                    ), (function(t) {
                            j.a.error("Knife4j文档请求异常"),
                                e.error(t)
                        }
                    ))
                } catch (t) {
                    e.error(t)
                }
            }
            ,
            Fe.prototype.analysisSpringDocOpenApiGroupSuccess = function(e) {
                var t, n = this, a = Object(ie.a)(e);
                t = "string" == a ? re.a.json5parse(e) : e,
                    n.log("响应分组json数据"),
                    n.log(t);
                var r = []
                    , i = []
                    , s = re.a.getValue(t, "urls", [], !0)
                    , o = [];
                re.a.arrNotEmpty(s) ? s.forEach((function(e) {
                        var n = {
                            name: re.a.getValue(e, "name", "knife4j", !0),
                            url: re.a.getValue(e, "url", "", !0),
                            location: re.a.getValue(e, "url", "", !0),
                            swaggerVersion: "3.0.3",
                            tagSort: re.a.getValue(t, "tagsSorter", "order", !0),
                            operationSort: re.a.getValue(t, "operationsSorter", "order", !0)
                        };
                        o.push(n)
                    }
                )) : o.push({
                    name: re.a.getValue(t, "url", "default", !0),
                    url: re.a.getValue(t, "url", "", !0),
                    location: re.a.getValue(t, "url", "", !0),
                    swaggerVersion: "3.0.3",
                    tagSort: re.a.getValue(t, "tagsSorter", "order", !0),
                    operationSort: re.a.getValue(t, "operationsSorter", "order", !0)
                }),
                    o.forEach((function(e) {
                            var t = new ft(re.a.toString(e.name, "").replace(/\//g, "-"),e.location,e.swaggerVersion);
                            t.url = e.url,
                                t.desktop = n.desktop,
                                t.desktopCode = n.desktopCode,
                                t.tagSort = e.tagSort,
                                t.operationSort = e.operationSort;
                            var a;
                            if (a = null != e.url && null != e.url && "" != e.url ? e.url : e.location,
                                t.extUrl = a,
                            "" == n.validateExtUrl && (n.validateExtUrl = t.extUrl),
                            null != e.basePath && null != e.basePath && "" != e.basePath && (t.baseUrl = e.basePath),
                            n.cacheApis.length > 0) {
                                var s = null;
                                n.cacheApis.forEach((function(e) {
                                        e.id == t.groupId && (s = e)
                                    }
                                )),
                                    null != s ? (t.firstLoad = !1,
                                    s.hasOwnProperty("updateApis") || (s.updateApis = {}),
                                        t.cacheInstance = s,
                                        n.log(t)) : t.cacheInstance = new it({
                                        id: t.groupId,
                                        name: t.name
                                    })
                            } else
                                t.cacheInstance = new it({
                                    id: t.groupId,
                                    name: t.name
                                });
                            r.push({
                                label: t.name,
                                value: t.id
                            }),
                                i.push(t.id),
                                n.instances.push(t)
                        }
                    )),
                re.a.arrNotEmpty(n.instances) && n.instances.forEach((function(e) {
                        e.allGroupIds = i
                    }
                )),
                    this.serviceOptions = r,
                    this.store.dispatch("globals/setServiceOptions", r),
                r.length > 0 && (this.defaultServiceOption = r[0].value,
                    this.store.dispatch("globals/setDefaultService", r[0].value))
            }
            ,
            Fe.prototype.analysisGroupSuccess = function(e) {
                var t = this
                    , n = null;
                n = "string" == Object(ie.a)(e) ? re.a.json5parse(e) : e,
                    t.log("响应分组json数据"),
                    t.log(n);
                var a = []
                    , r = [];
                n.forEach((function(e) {
                        var n = new ft(re.a.toString(e.name, "").replace(/\//g, "-"),e.location,e.swaggerVersion);
                        n.url = e.url,
                            n.header = re.a.getValue(e, "header", null, !0),
                            n.basicAuth = re.a.getValue(e, "basicAuth", null, !0),
                            n.servicePath = re.a.getValue(e, "servicePath", null, !0),
                            n.contextPath = re.a.getValue(e, "contextPath", null, !0),
                            n.desktop = t.desktop,
                            n.desktopCode = t.desktopCode;
                        var i;
                        if (i = null != e.url && null != e.url && "" != e.url ? e.url : e.location,
                            n.extUrl = i,
                        "" == t.validateExtUrl && (t.validateExtUrl = n.extUrl),
                        null != e.basePath && null != e.basePath && "" != e.basePath && (n.baseUrl = e.basePath),
                        t.cacheApis.length > 0) {
                            var s = null;
                            t.cacheApis.forEach((function(e) {
                                    e.id == n.groupId && (s = e)
                                }
                            )),
                                null != s ? (n.firstLoad = !1,
                                s.hasOwnProperty("updateApis") || (s.updateApis = {}),
                                    n.cacheInstance = s,
                                    t.log(n)) : n.cacheInstance = new it({
                                    id: n.groupId,
                                    name: n.name
                                })
                        } else
                            n.cacheInstance = new it({
                                id: n.groupId,
                                name: n.name
                            });
                        a.push({
                            label: n.name,
                            value: n.id
                        }),
                            r.push(n.id),
                            t.instances.push(n)
                    }
                )),
                re.a.arrNotEmpty(t.instances) && t.instances.forEach((function(e) {
                        e.allGroupIds = r
                    }
                )),
                    this.serviceOptions = a,
                    this.store.dispatch("globals/setServiceOptions", a),
                a.length > 0 && (this.defaultServiceOption = a[0].value,
                    this.store.dispatch("globals/setDefaultService", a[0].value))
            }
            ,
            Fe.prototype.createGroupElement = function() {
                var e = this;
                e.log("分组-------------------------------");
                var t = this.routeParams;
                if (re.a.checkUndefined(t))
                    if (t.hasOwnProperty("groupName")) {
                        var n = t.groupName;
                        if (re.a.checkUndefined(n) && "" != n) {
                            var a = e.selectInstanceByGroupName(n);
                            e.log("包含分组名称"),
                                e.log(a),
                                this.defaultServiceOption = a.id,
                                this.store.dispatch("globals/setDefaultService", a.id),
                                e.analysisApi(a)
                        } else
                            e.analysisApi(e.instances[0])
                    } else
                        e.analysisApi(e.instances[0]);
                else
                    e.analysisApi(e.instances[0])
            }
            ,
            Fe.prototype.selectInstanceByGroupName = function(e) {
                var t = null;
                return this.instances.forEach((function(n) {
                        n.name != e || (t = n)
                    }
                )),
                    t
            }
            ,
            Fe.prototype.analysisApi = function(e) {
                var t = this;
                try {
                    if (t.currentInstance = e,
                        t.currentInstance.load)
                        t.createDescriptionElement(),
                            t.createDetailMenu(!1),
                            t.afterApiInitSuccess(),
                            this.store.dispatch("globals/setSwaggerInstance", this.currentInstance);
                    else {
                        var n = e.url;
                        if (null != n && null != n && "" != n || (n = e.location),
                        t.settings.enableSwaggerBootstrapUi && (n = e.extUrl),
                            !t.springdoc)
                            0 == n.indexOf("/") && (n = n.substr(1));
                        var a = {
                            language: t.settings.language
                        }
                            , r = {
                            url: n,
                            dataType: "json",
                            timeout: 6e4,
                            type: "get",
                            transformResponse: [function(e) {
                                return re.a.json5parse(e)
                            }
                            ]
                        };
                        t.desktop && (a = Object.assign({}, a, {
                            "knife4j-gateway-code": t.desktopCode
                        })),
                        re.a.checkUndefined(this.currentInstance.header) && (a = Object.assign({}, a, {
                            "knfie4j-gateway-request": t.currentInstance.header
                        })),
                        re.a.checkUndefined(this.currentInstance.basicAuth) && (a = Object.assign({}, a, {
                            "knife4j-gateway-basic-request": t.currentInstance.basicAuth
                        })),
                            r = Object.assign({}, r, {
                                headers: a
                            }),
                            t.ajax(r, (function(e) {
                                    t.analysisApiSuccess(e)
                                }
                            ), (function(e) {
                                    j.a.error("Knife4j文档请求异常"),
                                        t.error(e)
                                }
                            ))
                    }
                } catch (e) {
                    t.error(e),
                        window.console
                }
            }
            ,
            Fe.prototype.afterApiInitSuccess = function() {
                this.initOpenTable()
            }
            ,
            Fe.prototype.initOpenTable = function() {
                var e = this;
                if (e.settings.enableCacheOpenApiTable && window.localStorage) {
                    var t = window.localStorage.SwaggerBootstrapUiCacheOpenApiTableApis || "{}";
                    if ((t = re.a.json5parse(t)[e.currentInstance.groupId] || []).length > 0)
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            e.log(a)
                        }
                }
            }
            ,
            Fe.prototype.analysisApiSuccess = function(e) {
                var t = this;
                t.hasLoad = !0,
                    t.log(e);
                var n;
                n = "string" == Object(ie.a)(e) ? re.a.json5parse(e) : e,
                    t.setInstanceBasicPorperties(n),
                    t.resolvedOASVersion(n),
                    this.currentInstance.oas2() ? (t.openSettings(n),
                        t.openDocuments(n)) : (t.openV3Settings(n),
                        t.openV3Documents(n)),
                    t.dispatchSettings(),
                    t.analysisDefinition(n),
                    t.mergeLocalSecurityContext(),
                    t.log(n),
                    t.createDescriptionElement(),
                    t.currentInstance.load = !0,
                    t.createDetailMenu(!0),
                    this.store.dispatch("globals/setSwaggerInstance", this.currentInstance)
            }
            ,
            Fe.prototype.resolvedOASVersion = function(e) {
                var t = re.a.getValue(e, "openapi", "", !0)
                    , n = "2.0";
                re.a.strNotBlank(t) && (n = t),
                    this.currentInstance.groupVersion = n
            }
            ,
            Fe.prototype.dispatchSettings = function() {
                this.store.dispatch("globals/setAfterScript", this.settings.enableAfterScript),
                    this.store.dispatch("globals/setReloadCacheParameter", this.settings.enableReloadCacheParameter),
                    this.store.dispatch("globals/setResponseCode", this.settings.enableResponseCode),
                    this.store.dispatch("globals/setSettings", this.settings)
            }
            ,
            Fe.prototype.mergeLocalSecurityContext = function() {
                var e = this
                    , t = this
                    , n = t.currentInstance.securityArrs
                    , a = Y.a.globalSecurityParamPrefix + t.currentInstance.id
                    , r = []
                    , i = {}
                    , s = [];
                t.localStore.getItem(Y.a.globalSecurityParameterObject).then((function(o) {
                        re.a.arrNotEmpty(n) ? t.localStore.getItem(a).then((function(e) {
                                if (re.a.checkUndefined(e)) {
                                    var l = [];
                                    n.forEach((function(t) {
                                            var n = e.filter((function(e) {
                                                    return e.id == t.id
                                                }
                                            ));
                                            n.length > 0 ? re.a.strNotBlank(t.value) ? l.push(t) : l.push(n[0]) : l.push(t)
                                        }
                                    )),
                                        s = l
                                } else
                                    s = n;
                                re.a.checkUndefined(o) ? (i = o,
                                    r = r.concat(o),
                                    s.forEach((function(e) {
                                            var t = o[e.id];
                                            re.a.checkUndefined(t) ? e.value = t : i[e.id] = e.value
                                        }
                                    ))) : s.forEach((function(e) {
                                        i[e.id] = e.value
                                    }
                                )),
                                    t.localStore.setItem(a, s),
                                    t.localStore.setItem(Y.a.globalSecurityParameterObject, i)
                            }
                        )) : e.localStore.removeItem(a)
                    }
                ))
            }
            ,
            Fe.prototype.openSettings = function(e) {
                var t = this
                    , n = e["x-openapi"];
                if (re.a.checkUndefined(n))
                    if (re.a.checkUndefined(n["x-setting"])) {
                        var a = n["x-setting"]
                            , r = Object.assign({}, t.settings, a);
                        t.i18nFlag && (r = Object.assign({}, r, {
                            language: t.i18n
                        })),
                            t.settings = r,
                            t.localStore.setItem(Y.a.globalSettingsKey, r);
                        var i = re.a.getValue(r, "language", "zh-CN", !0);
                        this.localStore.setItem(Y.a.globalI18nCache, i),
                            setTimeout((function() {
                                    re.a.checkUndefined(t.i18nVue) && (t.i18nVue.locale = i),
                                        t.store.dispatch("globals/setLang", i)
                                }
                            ), 500)
                    } else
                        t.setDefaultSettings();
                else
                    t.setDefaultSettings()
            }
            ,
            Fe.prototype.setDefaultSettings = function() {
                var e = this.settings
                    , t = Y.a.defaultSettings
                    , n = Y.a.defaultWebSettings
                    , a = Object.assign({}, t, e);
                a = Object.assign({}, a, n),
                    this.localStore.setItem(Y.a.globalSettingsKey, a),
                    this.settings = a
            }
            ,
            Fe.prototype.openV3Settings = function(e) {
                var t = this
                    , n = e.extensions;
                if (re.a.checkUndefined(n))
                    if (re.a.checkUndefined(n["x-setting"])) {
                        var a = n["x-setting"];
                        if (re.a.arrNotEmpty(a)) {
                            var r = a[0]
                                , i = Object.assign({}, t.settings, r);
                            t.i18nFlag && (i = Object.assign({}, i, {
                                language: t.i18n
                            })),
                                t.settings = i,
                                t.localStore.setItem(Y.a.globalSettingsKey, i);
                            var s = re.a.getValue(i, "language", "zh-CN", !0);
                            this.localStore.setItem(Y.a.globalI18nCache, s),
                                setTimeout((function() {
                                        re.a.checkUndefined(t.i18nVue) && (t.i18nVue.locale = s),
                                            t.store.dispatch("globals/setLang", s)
                                    }
                                ), 500)
                        }
                    } else
                        this.openSettings(e);
                else
                    this.openSettings(e)
            }
            ,
            Fe.prototype.openDocuments = function(e) {
                var t = this
                    , n = e["x-openapi"];
                if (re.a.checkUndefined(n) && re.a.arrNotEmpty(n["x-markdownFiles"])) {
                    var a = n["x-markdownFiles"]
                        , r = {};
                    a.forEach((function(e) {
                            var n = new mt(e.name);
                            re.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                    var t = new gt(e.title);
                                    n.children.push(t),
                                        r[t.id] = re.a.getValue(e, "content", "", !0)
                                }
                            ));
                            re.a.checkUndefined(e.group) ? e.group == t.currentInstance.name && t.currentInstance.markdownFiles.push(n) : t.currentInstance.markdownFiles.push(n)
                        }
                    ));
                    var i = t.currentInstance.id + "markdownFiles";
                    t.localStore.removeItem(i),
                        t.localStore.setItem(i, r)
                }
            }
            ,
            Fe.prototype.openV3Documents = function(e) {
                var t = this
                    , n = e.extensions;
                if (re.a.checkUndefined(n))
                    if (re.a.arrNotEmpty(n["x-markdownFiles"])) {
                        var a = n["x-markdownFiles"]
                            , r = {};
                        a.forEach((function(e) {
                                var n = new mt(e.name);
                                re.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                        var t = new gt(e.title)
                                            , a = re.a.getValue(e, "content", "", !0);
                                        n.children.push(t),
                                            r[t.id] = a
                                    }
                                ));
                                re.a.checkUndefined(e.group) ? e.group == t.currentInstance.name && t.currentInstance.markdownFiles.push(n) : t.currentInstance.markdownFiles.push(n)
                            }
                        ));
                        var i = t.currentInstance.id + "markdownFiles";
                        t.localStore.removeItem(i),
                            t.localStore.setItem(i, r)
                    } else
                        this.openDocuments(e);
                else
                    this.openDocuments(e)
            }
            ,
            Fe.prototype.updateCurrentInstanceSecuritys = function() {
                var e = this;
                if (null != e.currentInstance.securityArrs && e.currentInstance.securityArrs.length > 0) {
                    var t = e.getSecurityStores();
                    null != t && null != t && t.forEach((function(t) {
                            e.currentInstance.securityArrs.forEach((function(e) {
                                    t.key == e.key && t.name == e.name && (e.value = t.value)
                                }
                            ))
                        }
                    ))
                }
            }
            ,
            Fe.prototype.getSecurityStores = function() {
                var e = null;
                if (window.localStorage) {
                    var t = window.localStorage.SwaggerBootstrapUiCacheSecuritys;
                    if (null != t && null != t && "" != t)
                        e = re.a.json5parse(cacheApis)
                }
                return e
            }
            ,
            Fe.prototype.setInstanceBasicPorperties = function(e) {
                this.currentInstance.oas2() ? this.basicInfoOAS2(e) : this.basicInfoOAS3(e)
            }
            ,
            Fe.prototype.basicInfoOAS2 = function(e) {
                var t = this
                    , n = ""
                    , a = ""
                    , r = ""
                    , i = ""
                    , s = ""
                    , o = re.a.getValue(e, "host", "", !0);
                if (t.currentInstance.host = o,
                null != e && null != e) {
                    if (e.hasOwnProperty("info")) {
                        var l = e.info;
                        if (n = re.a.getValue(l, "title", "", !0),
                            a = re.a.getValue(l, "description", "", !0),
                            l.hasOwnProperty("contact")) {
                            var c = l.contact;
                            r = re.a.getValue(c, "name", "", !0)
                        }
                        i = re.a.getValue(l, "version", "", !0),
                            s = re.a.getValue(l, "termsOfService", "", !0)
                    }
                    t.currentInstance.title = n,
                        t.currentInstance.description = le.marked.parse(a),
                        t.currentInstance.contact = r,
                        t.currentInstance.version = i,
                        t.currentInstance.termsOfService = s,
                        t.currentInstance.basePath = re.a.getValue(e, "basePath", "/", !0);
                    var p = {
                        swagger: e.swagger || "2.0",
                        info: e.info || {},
                        host: e.host || "",
                        basePath: e.basePath || "/",
                        schemes: e.schemes || [],
                        consumes: e.consumes || ["*/*"],
                        produces: e.produces || ["*/*"]
                    };
                    t.currentInstance.openApiBaseInfo = p
                } else
                    n = t.currentInstance.title
            }
            ,
            Fe.prototype.basicInfoOAS3 = function(e) {
                var t = this
                    , n = ""
                    , a = ""
                    , r = ""
                    , i = ""
                    , s = ""
                    , o = re.a.getValue(e, "host", "", !0);
                if (re.a.checkUndefined(e)) {
                    if (e.hasOwnProperty("servers") && re.a.checkUndefined(e.servers)) {
                        var l = e.servers;
                        re.a.arrNotEmpty(l) && (o = l[0].url)
                    }
                    if (t.currentInstance.host = o,
                    e.hasOwnProperty("info") && re.a.checkUndefined(e.info)) {
                        var c = e.info;
                        if (n = re.a.getValue(c, "title", "", !0),
                            a = re.a.getValue(c, "description", "", !0),
                            c.hasOwnProperty("contact")) {
                            var p = c.contact;
                            r = re.a.getValue(p, "name", "", !0)
                        }
                        i = re.a.getValue(c, "version", "", !0),
                            s = re.a.getValue(c, "termsOfService", "", !0),
                            t.currentInstance.title = n,
                            t.currentInstance.description = le.marked.parse(a),
                            t.currentInstance.contact = r,
                            t.currentInstance.version = i,
                            t.currentInstance.termsOfService = s;
                        var u = re.a.getValue(e, "basePath", "/", !0);
                        if ("/" == u) {
                            var d = re.a.getDesktopCode();
                            "ROOT" != d && (u = "/" + d)
                        }
                        t.currentInstance.basePath = u
                    } else
                        n = t.currentInstance.title;
                    var h = {
                        openapi: e.openapi || "3.0.3",
                        info: e.info || {},
                        servers: e.servers || []
                    };
                    t.currentInstance.openApiBaseInfo = h
                }
            }
            ,
            Fe.prototype.analysisDefinitionAsync = function(e, t, n) {
                n ? this.analysisDefinitionAsyncOAS2(e, t, n) : this.analysisDefinitionAsyncOAS3(e, t, n)
            }
            ,
            Fe.prototype.analysisDefinitionAsyncOAS2 = function(e, t, n) {
                var a = this
                    , r = t.name;
                if (null != e && void 0 !== e && null != e && e.hasOwnProperty("definitions")) {
                    var i = e.definitions;
                    for (var s in i)
                        if (s == r) {
                            var o = i[s];
                            if (re.a.checkUndefined(o) && (t.description = re.a.propValue("description", o, ""),
                                t.type = re.a.propValue("type", o, ""),
                                t.title = re.a.propValue("title", o, ""),
                            o.hasOwnProperty("required") && (t.required = o.required),
                                o.hasOwnProperty("properties"))) {
                                var l = o.properties
                                    , c = {};
                                for (var p in l) {
                                    var u = l[p];
                                    !u.hasOwnProperty("readOnly") || u.readOnly;
                                    var d = new lt;
                                    u.hasOwnProperty("readOnly") && (d.readOnly = u.readOnly),
                                        d.name = p,
                                        d.originProperty = u,
                                        d.type = re.a.propValue("type", u, "string"),
                                        d.description = re.a.propValue("description", u, ""),
                                    u.hasOwnProperty("enum") && (d.enum = u.enum,
                                    "" != d.description && (d.description += ","),
                                        d.description = d.description + re.a.enumAvalibleLabel(a.i18nInstance, d.enum)),
                                        "string" == d.type ? d.example = re.a.getExample("example", u, "") : d.example = re.a.propValue("example", u, ""),
                                        d.format = re.a.propValue("format", u, ""),
                                        d.required = re.a.propValue("required", u, !1),
                                    t.required.length > 0 && t.required.indexOf(d.name) > -1 && (d.required = !0);
                                    var h = "";
                                    if (u.hasOwnProperty("type")) {
                                        var f = u.type;
                                        if (u.hasOwnProperty("example"))
                                            h = "string" == f ? re.a.getExample("example", u, "") : u.example;
                                        else if (re.a.checkIsBasicType(f)) {
                                            if (h = re.a.getBasicTypeValue(f),
                                            "object" == f && u.hasOwnProperty("additionalProperties")) {
                                                var m = u.additionalProperties;
                                                a.log("------解析map-=-----------additionalProperties,defName:" + s);
                                                var g = new we(m,n).findClassName();
                                                if (re.a.strNotBlank(g)) {
                                                    var y = new Array;
                                                    y.push(s);
                                                    var v = null;
                                                    h = new be(m,g,v = g != s ? a.findRefDefinition(g, i, !1, y, null, n) : a.findRefDefinition(g, i, !0, y, s, n)).additionalMapValue(null),
                                                        d.type = g,
                                                        d.refType = g
                                                } else if (m.hasOwnProperty("$ref")) {
                                                    var b = m.$ref
                                                        , w = new RegExp(re.a.oasmodel(n),"ig");
                                                    if (w.test(b)) {
                                                        var k = RegExp.$1;
                                                        v = null,
                                                            (y = new Array).push(s),
                                                            h = {
                                                                additionalProperties1: v = k != s ? a.findRefDefinition(k, i, !1, y, null, n) : a.findRefDefinition(k, i, !0, y, s, n)
                                                            },
                                                            a.log("解析map-=完毕："),
                                                            a.log(h),
                                                            d.type = k,
                                                            d.refType = k
                                                    }
                                                } else if (m.hasOwnProperty("items")) {
                                                    if (b = m.items.$ref,
                                                        (w = new RegExp(re.a.oasmodel(n),"ig")).test(b)) {
                                                        k = RegExp.$1,
                                                            v = null,
                                                            (y = new Array).push(s),
                                                            v = k != s ? a.findRefDefinition(k, i, !1, y, null, n) : a.findRefDefinition(k, i, !0, y, s, n);
                                                        var x = new Array;
                                                        x.push(v),
                                                            h = {
                                                                additionalProperties1: x
                                                            },
                                                            a.log("解析map-=完毕："),
                                                            a.log(h),
                                                            d.type = "array",
                                                            d.refType = k
                                                    }
                                                }
                                            }
                                        } else if ("array" == f) {
                                            h = new Array;
                                            var S = u.items
                                                , T = S.$ref;
                                            if (S.hasOwnProperty("type") && "array" == S.type && (T = S.items.$ref),
                                            S.hasOwnProperty("enum") && ("" != d.description && (d.description += ","),
                                                d.description = d.description + re.a.enumAvalibleLabel(a.i18nInstance, S.enum)),
                                                (w = new RegExp(re.a.oasmodel(n),"ig")).test(T)) {
                                                var I = RegExp.$1;
                                                d.refType = I,
                                                    (y = new Array).push(s),
                                                    I != s ? h.push(a.findRefDefinition(I, i, !1, y, null, n)) : h.push(a.findRefDefinition(I, i, !0, y, s, n))
                                            } else if (d.refType = S.type,
                                                re.a.checkIsBasicType(d.refType)) {
                                                var P = re.a.numberFormat(u);
                                                re.a.checkUndefined(P) && (d.refType = d.refType + "(" + P + ")")
                                            }
                                        }
                                    } else
                                        u.hasOwnProperty("$ref") ? (T = u.$ref,
                                        (w = new RegExp(re.a.oasmodel(n),"ig")).test(T) && (I = RegExp.$1,
                                            d.refType = I,
                                            (y = new Array).push(s),
                                            h = I != s ? a.findRefDefinition(I, i, !1, y, null, n) : a.findRefDefinition(I, i, !0, y, null, n))) : h = {};
                                    d.value = h,
                                    null != d.format && null != d.format && "" != d.format && (d.type += "(" + d.format + ")"),
                                    null != d.refType && "" != d.refType && "string" == d.type && (d.type = d.refType),
                                    a.checkPropertiesExists(t.properties, d) || (t.properties.push(d),
                                    d.readOnly || (c[p] = h))
                                }
                                t.value = c
                            }
                            Qe(t, a, t, t, n),
                                t.init = !0;
                            break
                        }
                }
            }
            ,
            Fe.prototype.analysisDefinitionAsyncOAS3 = function(e, t, n) {
                var a = this
                    , r = t.name
                    , i = {};
                if (re.a.checkUndefined(e) && e.hasOwnProperty("components")) {
                    var s = e.components;
                    if (re.a.checkUndefined(s) && s.hasOwnProperty("schemas")) {
                        var o = s.schemas;
                        re.a.checkUndefined(o) && (i = o)
                    }
                }
                if (re.a.checkUndefined(i))
                    for (var l in i)
                        if (l == r) {
                            var c = i[l];
                            if (re.a.checkUndefined(c) && (t.description = re.a.propValue("description", c, ""),
                                t.type = re.a.propValue("type", c, ""),
                                t.title = re.a.propValue("title", c, ""),
                            c.hasOwnProperty("required") && (t.required = c.required),
                                c.hasOwnProperty("properties"))) {
                                var p = c.properties
                                    , u = {};
                                for (var d in p) {
                                    var h = p[d];
                                    !h.hasOwnProperty("readOnly") || h.readOnly;
                                    var f = new lt;
                                    a.validateJSR303(f, h),
                                    h.hasOwnProperty("readOnly") && (f.readOnly = h.readOnly),
                                        f.name = d,
                                        f.originProperty = h,
                                        f.type = re.a.propValue("type", h, "string"),
                                        f.description = re.a.propValue("description", h, ""),
                                    h.hasOwnProperty("enum") && (f.enum = h.enum,
                                    "" != f.description && (f.description += ","),
                                        f.description = f.description + re.a.enumAvalibleLabel(a.i18nInstance, f.enum)),
                                        "string" == f.type ? f.example = re.a.getExample("example", h, "") : f.example = re.a.propValue("example", h, ""),
                                        f.format = re.a.propValue("format", h, ""),
                                        f.required = re.a.propValue("required", h, !1),
                                    t.required.length > 0 && t.required.indexOf(f.name) > -1 && (f.required = !0);
                                    var m = "";
                                    if (h.hasOwnProperty("type")) {
                                        var g = h.type;
                                        if (h.hasOwnProperty("example"))
                                            m = "string" == g ? re.a.getExample("example", h, "") : h.example;
                                        else if (h.hasOwnProperty("default"))
                                            m = re.a.propValue("default", h, "");
                                        else if (re.a.checkIsBasicType(g)) {
                                            if (m = re.a.getBasicTypeValue(g),
                                            "object" == g) {
                                                if (h.hasOwnProperty("additionalProperties")) {
                                                    var y = h.additionalProperties;
                                                    a.log("------解析map-=-----------additionalProperties,defName:" + l);
                                                    var v = new we(y,n).findClassName();
                                                    if (re.a.strNotBlank(v)) {
                                                        var b = new Array;
                                                        b.push(l);
                                                        var w = null;
                                                        m = {
                                                            additionalProperties1: w = v != l ? a.findRefDefinition(v, i, !1, b, null, n) : a.findRefDefinition(v, i, !0, b, l, n)
                                                        },
                                                            f.type = v,
                                                            f.refType = v
                                                    } else if (y.hasOwnProperty("$ref")) {
                                                        var k = y.$ref
                                                            , x = new RegExp(re.a.oasmodel(n),"ig");
                                                        if (x.test(k)) {
                                                            var S = RegExp.$1;
                                                            w = null,
                                                                (b = new Array).push(l),
                                                                m = {
                                                                    additionalProperties1: w = S != l ? a.findRefDefinition(S, i, !1, b, null, n) : a.findRefDefinition(S, i, !0, b, l, n)
                                                                },
                                                                a.log("解析map-=完毕："),
                                                                a.log(m),
                                                                f.type = S,
                                                                f.refType = S
                                                        }
                                                    } else if (y.hasOwnProperty("items")) {
                                                        if (k = y.items.$ref,
                                                            (x = new RegExp(re.a.oasmodel(n),"ig")).test(k)) {
                                                            S = RegExp.$1,
                                                                w = null,
                                                                (b = new Array).push(l),
                                                                w = S != l ? a.findRefDefinition(S, i, !1, b, null, n) : a.findRefDefinition(S, i, !0, b, l, n);
                                                            var T = new Array;
                                                            T.push(w),
                                                                m = {
                                                                    additionalProperties1: T
                                                                },
                                                                a.log("解析map-=完毕："),
                                                                a.log(m),
                                                                f.type = "array",
                                                                f.refType = S
                                                        }
                                                    }
                                                }
                                                if (h.hasOwnProperty("properties")) {
                                                    var I = l + "_" + d;
                                                    f.refType = I;
                                                    var P = new st;
                                                    P.name = I,
                                                        P.ignoreFilterName = I,
                                                        new Se(h).readBasicProperty(P, a, i, n),
                                                    re.a.checkUndefined(P.properties) && (f.properties = P.properties),
                                                        m = P.value
                                                }
                                            }
                                        } else if ("array" == g) {
                                            m = new Array;
                                            var j = h.items
                                                , C = j.$ref;
                                            if (j.hasOwnProperty("type") && "array" == j.type && (C = j.items.$ref),
                                            j.hasOwnProperty("enum") && ("" != f.description && (f.description += ","),
                                                f.description = f.description + re.a.enumAvalibleLabel(a.i18nInstance, j.enum)),
                                                (x = new RegExp(re.a.oasmodel(n),"ig")).test(C)) {
                                                var O = RegExp.$1;
                                                f.refType = O,
                                                    (b = new Array).push(l),
                                                    O != l ? m.push(a.findRefDefinition(O, i, !1, b, null, n)) : m.push(a.findRefDefinition(O, i, !0, b, l, n))
                                            } else
                                                f.refType = j.type;
                                            if (j.hasOwnProperty("properties")) {
                                                var A = l + "_" + d;
                                                f.refType = A;
                                                var V = new st;
                                                V.name = A,
                                                    V.ignoreFilterName = A,
                                                    new Se(j).readBasicProperty(V, a, i, n),
                                                re.a.checkUndefined(V.properties) && (f.properties = V.properties),
                                                    m.push(V.value)
                                            }
                                        }
                                    } else
                                        h.hasOwnProperty("$ref") ? (C = h.$ref,
                                        (x = new RegExp(re.a.oasmodel(n),"ig")).test(C) && (O = RegExp.$1,
                                            f.refType = O,
                                            (b = new Array).push(l),
                                            m = O != l ? a.findRefDefinition(O, i, !1, b, null, n) : a.findRefDefinition(O, i, !0, b, null, n))) : m = {};
                                    f.value = m,
                                    null != f.format && null != f.format && "" != f.format && (f.type += "(" + f.format + ")"),
                                    null != f.refType && "" != f.refType && "string" == f.type && (f.type = f.refType),
                                    a.checkPropertiesExists(t.properties, f) || (t.properties.push(f),
                                    f.readOnly || (u[d] = m))
                                }
                                t.value = u
                            }
                            Qe(t, a, t, t, n),
                                t.init = !0;
                            break
                        }
            }
            ,
            Fe.prototype.analysisDefinitionRefModel = function(e) {
                this.currentInstance.oas2() ? this.analysisDefinitionRefModelOAS2(e) : this.analysisDefinitionRefModelOAS3(e)
            }
            ,
            Fe.prototype.analysisDefinitionRefModelOAS2 = function(e) {
                if (null != e && void 0 !== e && null != e && e.hasOwnProperty("definitions")) {
                    var t = e.definitions;
                    for (var n in t) {
                        var a = a = new st;
                        a.name = n,
                            a.ignoreFilterName = n,
                            this.currentInstance.difArrs.push(a);
                        var r = new dt;
                        r.name = n,
                            r.id = oe()(n),
                            this.currentInstance.swaggerTreeTableModels[n] = r
                    }
                }
            }
            ,
            Fe.prototype.analysisDefinitionRefModelOAS3 = function(e) {
                if (null != e && void 0 !== e && null != e && e.hasOwnProperty("components")) {
                    var t = e.components;
                    if (re.a.checkUndefined(t) && t.hasOwnProperty("schemas")) {
                        var n = t.schemas;
                        if (re.a.checkUndefined(n))
                            for (var a in n) {
                                var r = r = new st;
                                r.name = a,
                                    r.ignoreFilterName = a,
                                    this.currentInstance.difArrs.push(r);
                                var i = new dt;
                                i.name = a,
                                    i.id = oe()(a),
                                    this.currentInstance.swaggerTreeTableModels[a] = i
                            }
                    }
                }
            }
            ,
            Fe.prototype.analysisDefinitionRefTableModel = function(e, t) {
                var n = this
                    , a = t;
                if (!t.init) {
                    var r = null;
                    for (name in this.instances.forEach((function(t) {
                            t.id == e && (r = t)
                        }
                    )),
                        r.swaggerTreeTableModels)
                        if (name == t.name && !(a = r.swaggerTreeTableModels[name]).init) {
                            a.init = !0;
                            var i = r.getOASDefinitions()
                                , s = r.oas2();
                            if (re.a.checkUndefined(i))
                                for (var o in i)
                                    if (o == a.name) {
                                        var l = i[o];
                                        if (re.a.checkUndefined(l))
                                            if (l.hasOwnProperty("properties")) {
                                                var c = l.properties
                                                    , p = l.hasOwnProperty("required") ? l.required : new Array;
                                                for (var u in c) {
                                                    var d = c[u];
                                                    d.refType = n.getSwaggerModelRefType(d, s);
                                                    var h = new ht;
                                                    h.pid = a.id,
                                                        h.readOnly = d.readOnly,
                                                        h.parentTypes.push(t.name),
                                                        h.parentTypes.push(o),
                                                        h.name = u,
                                                        h.type = d.type;
                                                    var f = re.a.propValue("format", d, "");
                                                    re.a.strNotBlank(f) && (h.type = h.type + "(" + f + ")"),
                                                    "array" != d.type && null != d.refType && null != d.refType && "" != d.refType && (h.type = d.refType),
                                                        re.a.checkUndefined(d.required) ? h.require = d.required : p.includes(u) && (h.require = !0),
                                                        h.example = d.example,
                                                        h.txtValue = d.example,
                                                    re.a.checkUndefined(d.example) || (h.example = d.default,
                                                        h.txtValue = d.default,
                                                        h.value = d.default);
                                                    var m = re.a.propValue("description", d, "");
                                                    if (d.hasOwnProperty("enum") && ("" != m && (m += ","),
                                                        m += re.a.enumAvalibleLabel(n.i18nInstance, d.enum)),
                                                        h.description = re.a.replaceMultipLineStr(m),
                                                        n.validateJSR303(h, d),
                                                        a.params.push(h),
                                                    re.a.checkUndefined(d.refType) && !re.a.checkIsBasicType(d.refType)) {
                                                        h.schemaValue = d.refType,
                                                            h.schema = !0;
                                                        var g = n.getOriginalDefinitionByName(d.refType, i);
                                                        re.a.checkUndefined(g) && (h.parentTypes.includes(d.refType) || ze(h, i, g, a, n, s))
                                                    } else if ("array" == d.type && re.a.checkUndefined(d.refType) && (h.schemaValue = d.refType,
                                                        g = n.getOriginalDefinitionByName(d.refType, i),
                                                    re.a.checkUndefined(g) && (h.parentTypes.includes(d.refType) || ze(h, i, g, a, n, s)),
                                                        re.a.checkIsBasicType(d.refType))) {
                                                        var y = re.a.numberFormat(d);
                                                        re.a.checkUndefined(y) && (h.schemaValue = h.schemaValue + "(" + y + ")")
                                                    }
                                                }
                                            } else if (l.hasOwnProperty("additionalProperties")) {
                                                var v = n.getSwaggerModelRefType(l, s);
                                                (h = new ht).pid = a.id,
                                                    h.readOnly = !0,
                                                    h.parentTypes.push(t.name),
                                                    h.name = "additionalProperty1",
                                                    h.type = re.a.propValue("title", l, ""),
                                                re.a.checkUndefined(v) && (h.type = v),
                                                    h.parentTypes.push(t.name),
                                                    a.params.push(h),
                                                    g = n.getOriginalDefinitionByName(v, i),
                                                re.a.checkUndefined(g) && (h.schemaValue = h.type,
                                                    h.schema = !0,
                                                h.parentTypes.includes(v) || ze(h, i, g, a, n, s))
                                            } else
                                                l.hasOwnProperty("enum") && ((h = new ht).pid = a.id,
                                                    h.readOnly = l.readOnly,
                                                    h.parentTypes.push(t.name),
                                                    h.parentTypes.push(o),
                                                    h.name = u,
                                                    h.type = l.type,
                                                    h.example = l.example,
                                                    m = spropObj.description + re.a.enumAvalibleLabel(n.i18nInstance, l.enum),
                                                    h.description = re.a.replaceMultipLineStr(m),
                                                    a.params.push(h))
                                    }
                            r.refTreeTableModels[name] = a
                        }
                }
                return a
            }
            ,
            Fe.prototype.getOriginalDefinitionByName = function(e, t) {
                var n = {
                    name: e
                };
                for (var a in t)
                    if (a == e) {
                        n.properties = t[a];
                        break
                    }
                return n
            }
            ,
            Fe.prototype.getSwaggerModelRefArray = function(e, t) {
                var n = !1;
                e.hasOwnProperty("type") && ("array" == e.type && (n = !0));
                return n
            }
            ,
            Fe.prototype.getSwaggerModelRefType = function(e, t) {
                var n = null;
                if (e.hasOwnProperty("type")) {
                    var a = e.type;
                    if (re.a.checkIsBasicType(a)) {
                        if ("object" == a)
                            if (e.hasOwnProperty("additionalProperties")) {
                                var r = e.additionalProperties
                                    , i = new we(r,t).findClassName();
                                if (re.a.strNotBlank(i))
                                    n = i;
                                else if (r.hasOwnProperty("$ref")) {
                                    var s = r.$ref
                                        , o = new RegExp(re.a.oasmodel(t),"ig");
                                    o.test(s) && (n = RegExp.$1)
                                } else if (r.hasOwnProperty("items")) {
                                    s = r.items.$ref,
                                    (o = new RegExp(re.a.oasmodel(t),"ig")).test(s) && (n = RegExp.$1)
                                }
                            } else
                                n = a
                    } else if ("array" == a) {
                        var l = e.items;
                        if (re.a.checkUndefined(l)) {
                            var c = l.$ref;
                            l.hasOwnProperty("type") && "array" == l.type && (c = l.items.$ref),
                                n = (o = new RegExp(re.a.oasmodel(t),"ig")).test(c) ? RegExp.$1 : l.type
                        }
                    }
                } else
                    e.hasOwnProperty("$ref") && (c = e.$ref,
                    (o = new RegExp(re.a.oasmodel(t),"ig")).test(c) && (n = RegExp.$1));
                return n
            }
            ,
            Fe.prototype.analysisDefinition = function(e) {
                var t = this;
                if (this.currentInstance.swaggerData = e,
                    t.analysisDefinitionRefModel(e),
                null != e && void 0 !== e && null != e && e.hasOwnProperty("tags")) {
                    var n = e.tags
                        , a = [];
                    if (n.forEach((function(e) {
                            var n = re.a.getValue(e, "description", "", !0)
                                , r = null
                                , i = null;
                            if (t.currentInstance.oas2())
                                r = re.a.getValue(e, "x-author", "", !0),
                                    i = re.a.getValue(e, "x-order", "", !0);
                            else {
                                if (re.a.checkUndefined(e.extensions)) {
                                    var s = e.extensions;
                                    r = re.a.getValue(s, "x-author", "", !0),
                                        i = re.a.getValue(s, "x-order", "", !0)
                                }
                                re.a.strBlank(i) && (i = re.a.getValue(e, "x-order", "", !0))
                            }
                            var o = new ct(re.a.toString(e.name, "").replace(/\//g, "-"),n);
                            re.a.strNotBlank(r) && (o.author = r),
                            re.a.strNotBlank(i) && (o.order = parseInt(i)),
                                a.push(o)
                        }
                    )),
                        re.a.arrNotEmpty(a))
                        a.sort((function(e, t) {
                                return e.order - t.order
                            }
                        ));
                    else {
                        var r = new ct("default","default");
                        a.push(r)
                    }
                    t.currentInstance.tags = a
                }
                if (null != e && void 0 !== e && null != e && e.hasOwnProperty("paths")) {
                    var i = e.paths
                        , s = re.a.appendBasePath(i, t.currentInstance.basePath)
                        , o = (new Date).getTime()
                        , l = ["get", "post", "put", "delete", "patch", "options", "trace", "head", "connect"];
                    if (ce.a.forEachOf(i, (function(e, n, a) {
                            var r = null;
                            l.forEach((function(a) {
                                    if (e.hasOwnProperty(a) && null != (r = e[a])) {
                                        var i = t.createApiInfoInstance(n, a, r, s);
                                        t.currentInstance.paths.push(i),
                                            i.hashCollections.forEach((function(e) {
                                                    t.currentInstance.pathsDictionary[e] = i
                                                }
                                            )),
                                            t.methodCountAndDown(a.toUpperCase())
                                    }
                                }
                            ))
                        }
                    )),
                        t.settings.enableFilterMultipartApis) {
                        t.currentInstance.paths.forEach((function(e) {
                                var n = t.currentInstance.pathFilters[e.url];
                                if (null == n || null == n) {
                                    var a = new at;
                                    a.methods.push(e),
                                        t.currentInstance.pathFilters[e.url] = a
                                } else
                                    n.methods.push(e),
                                        t.currentInstance.pathFilters[e.url] = n
                            }
                        ));
                        var c = new Array;
                        for (var p in t.log(t.currentInstance.pathFilters),
                            t.currentInstance.pathFilters) {
                            var u = t.currentInstance.pathFilters[p];
                            c = c.concat(u.api(t.settings.enableFilterMultipartApiMethodType))
                        }
                        t.log("重新赋值。。。。。"),
                            t.currentInstance.paths = c
                    }
                }
                if (t.readSecurityContextSchemes(e),
                    t.currentInstance.clearOAuth2(),
                "alpha" == t.currentInstance.tagSort && t.currentInstance.tags.sort((function(e, t) {
                        return e.name.localeCompare(t.name)
                    }
                )),
                    t.currentInstance.tags.forEach((function(e) {
                            if (t.currentInstance.firstLoad)
                                t.currentInstance.paths.forEach((function(t) {
                                        t.tags.forEach((function(n) {
                                                n == e.name && (re.a.strNotBlank(t.author) || re.a.strNotBlank(e.author) && (t.author = e.author),
                                                    e.childrens.push(t))
                                            }
                                        ))
                                    }
                                ));
                            else {
                                var n = !1
                                    , a = !1;
                                t.currentInstance.paths.forEach((function(a) {
                                        a.tags.forEach((function(r) {
                                                r == e.name && (t.currentInstance.cacheInstance.cacheApis.includes(a.id) || (n = !0,
                                                    a.hasNew = !0),
                                                re.a.strNotBlank(a.author) || re.a.strNotBlank(e.author) && (a.author = e.author),
                                                    e.childrens.push(a))
                                            }
                                        ))
                                    }
                                )),
                                    n ? e.hasNew = !0 : (t.currentInstance.paths.forEach((function(t) {
                                            t.tags.forEach((function(n) {
                                                    n == e.name && t.hasChanged && (a = !0)
                                                }
                                            ))
                                        }
                                    )),
                                        e.hasChanged = a)
                            }
                            "alpha" == t.currentInstance.operationSort ? e.childrens.sort((function(e, t) {
                                    return e.showUrl.localeCompare(t.showUrl)
                                }
                            )) : e.childrens.sort((function(e, t) {
                                    return e.order - t.order
                                }
                            ))
                        }
                    )),
                    t.currentInstance.firstLoad ? t.cacheApis.push(t.currentInstance.cacheInstance) : t.cacheApis.length > 0 && t.cacheApis.forEach((function(e) {
                            e.id == t.currentInstance.cacheInstance.id && (e.updateApis = t.currentInstance.cacheInstance.updateApis)
                        }
                    )),
                    t.storeCacheApis(),
                    t.log("开始解析refTreetableparameters属性................."),
                    t.log((new Date).toTimeString()),
                    o = (new Date).getTime(),
                    t.settings.enableSwaggerBootstrapUi) {
                    var d = e.swaggerBootstrapUi;
                    re.a.checkUndefined(d) && re.a.checkUndefined(d.markdownFiles) && d.markdownFiles.forEach((function(e) {
                            var n = oe()(e.title);
                            t.currentInstance.markdownFiles.push(Object(ae.a)(Object(ae.a)({}, e), {}, {
                                id: n
                            }))
                        }
                    ))
                }
                t.log("解析refTreetableparameters结束,耗时：" + ((new Date).getTime() - o)),
                    t.log((new Date).toTimeString())
            }
            ,
            Fe.prototype.readSecurityContextSchemes = function(e) {
                if (this.currentInstance.oas2()) {
                    if (null != e && void 0 !== e && null != e && e.hasOwnProperty("securityDefinitions")) {
                        var t = e.securityDefinitions;
                        this.readSecurityContextSchemesCommon(t)
                    }
                } else if (re.a.checkUndefined(e) && e.hasOwnProperty("components")) {
                    var n = e.components;
                    re.a.checkUndefined(n) && n.hasOwnProperty("securitySchemes") && (t = n.securitySchemes,
                        this.readSecurityContextSchemesCommon(t))
                }
            }
            ,
            Fe.prototype.readSecurityContextSchemesCommon = function(e) {
                var t = this;
                if (re.a.checkUndefined(e)) {
                    var n = t.getGlobalSecurityInfos()
                        , a = new Array;
                    for (var r in e) {
                        var i = e[r];
                        if ("oauth2" == i.type)
                            if (this.currentInstance.oas2()) {
                                var s = new Ke(re.a.getValue(i, "flow", "", !0),re.a.getValue(i, "tokenUrl", "", !0),re.a.getValue(i, "authorizationUrl", "", !0),t.currentInstance.id);
                                s.sync(),
                                    t.currentInstance.oauths = s
                            } else
                                for (var o in i.flows) {
                                    var l = new ve(o,t.currentInstance.id,i.flows[o]).readOAuth2();
                                    l.sync(),
                                        t.currentInstance.oauths = l
                                }
                        else {
                            var c = new ot;
                            c.key = r,
                                c.type = i.type,
                                c.name = i.name,
                                c.in = i.in,
                                c.schema = re.a.propValue("scheme", i, null),
                            re.a.strBlank(i.name) && (c.name = r,
                                c.in = "header"),
                            null != n && null != n && n.forEach((function(e) {
                                    e.key == c.key && e.name == c.name && (c.value = e.value)
                                }
                            ));
                            var p = c.key + c.type + c.in + c.name + c.schema;
                            c.id = oe()(p),
                                a.push(c)
                        }
                    }
                    a.length > 0 ? (t.currentInstance.securityArrs = a,
                        t.log("解析securityDefinitions属性---------------------------------------------------------------\x3e")) : t.clearSecuritys()
                } else
                    t.clearSecuritys()
            }
            ,
            Ke.prototype.syncOAuth = function() {
                if (window.localStorage) {
                    var e = this.state
                        , t = window.localStorage.getItem(e);
                    if (re.a.strNotBlank(t)) {
                        var n = re.a.json5parse(t);
                        this.accessToken = re.a.getValue(n, "tokenType", "Bearer", !0) + " " + n.accessToken,
                            this.tokenType = n.tokenType,
                            this.granted = !0
                    }
                }
            }
            ,
            Ke.prototype.sync = function() {
                if (this.syncOAuth(),
                    window.localStorage) {
                    var e = "SELF" + this.state
                        , t = window.localStorage.getItem(e);
                    if (re.a.strNotBlank(t)) {
                        var n = re.a.json5parse(t);
                        this.grantType == n.grantType && (this.granted = n.granted,
                        re.a.strBlank(this.clientId) && (this.clientId = n.clientId),
                        re.a.strBlank(this.clientSecret) && (this.clientSecret = n.clientSecret),
                        re.a.strBlank(this.redirectUri) && (this.redirectUri = n.redirectUri),
                        re.a.strBlank(this.username) && (this.username = n.username),
                        re.a.strBlank(this.password) && (this.password = n.password),
                        re.a.strBlank(this.accessToken) && (this.accessToken = n.accessToken),
                        re.a.strBlank(this.tokenType) && (this.tokenType = n.tokenType)),
                            window.localStorage.setItem(e, re.a.json5stringify(this))
                    } else
                        window.localStorage.setItem(e, re.a.json5stringify(this))
                }
            }
            ,
            Ke.prototype.clear = function() {
                this.username = null,
                    this.password = null,
                    this.accessToken = null,
                    this.redirectUri = null,
                    this.granted = !1,
                    this.clientId = "",
                    this.clientSecret = "",
                    this.accessToken = null,
                    this.tokenType = null;
                var e = "SELF" + this.state;
                window.localStorage.setItem(e, re.a.json5stringify(this))
            }
            ,
            Fe.prototype.clearSecuritys = function() {
                this.localStore.setItem(Y.a.globalSecurityParamPrefix, [])
            }
            ,
            Fe.prototype.processModels = function() {
                var e = this;
                if (re.a.checkUndefined(this.currentInstance.refTreeTableModels))
                    for (var t in e.currentInstance.refTreeTableModels) {
                        e.currentInstance.modelNames.push(t);
                        var n = e.currentInstance.refTreeTableModels[t]
                            , a = new et(n.id,t);
                        re.a.arrNotEmpty(n.params) && n.params.forEach((function(t) {
                                var n = Object(ae.a)(Object(ae.a)({}, t), {}, {
                                    pid: "-1"
                                });
                                a.data.push(n),
                                t.schema && Ge(a, e.currentInstance.refTreeTableModels, t, n)
                            }
                        )),
                            e.currentInstance.models.push(a)
                    }
            }
            ,
            Fe.prototype.createDescriptionElement = function() {}
            ,
            Fe.prototype.selectInstanceByGroupId = function(e) {
                var t = null;
                return this.instances.forEach((function(n) {
                        n.id != e || (t = n)
                    }
                )),
                    t
            }
            ,
            Fe.prototype.getI18n = function() {
                return this.i18nInstance
            }
            ,
            Fe.prototype.createDetailMenu = function(e) {
                var t = this
                    , n = [];
                t.log(t.currentInstance);
                var a = t.currentInstance.name
                    , r = t.currentInstance.id;
                if (n.push({
                    groupName: a,
                    groupId: r,
                    key: "kmain",
                    name: this.getI18n().menu.home,
                    i18n: "home",
                    component: "Main",
                    icon: "icon-home",
                    path: "home"
                }),
                (re.a.arrNotEmpty(t.currentInstance.securityArrs) || re.a.checkUndefined(t.currentInstance.oauths)) && n.push({
                    groupName: a,
                    groupId: r,
                    key: "Authorize" + oe()(a),
                    name: "Authorize",
                    tabName: "Authorize(" + a + ")",
                    component: "Authorize",
                    icon: "icon-authenticationsystem",
                    path: "Authorize/" + a
                }),
                    t.settings.enableSwaggerModels) {
                    var i = re.a.getValue(t.settings, "swaggerModelName", "Swagger Models", !0);
                    n.push({
                        groupName: a,
                        groupId: r,
                        key: "swaggerModel" + oe()(a),
                        name: i,
                        component: "SwaggerModels",
                        tabName: i + "(" + a + ")",
                        icon: "icon-modeling",
                        path: "SwaggerModels/" + a
                    })
                }
                t.settings.enableDocumentManage && n.push({
                    groupName: a,
                    groupId: r,
                    key: "documentManager" + oe()(a),
                    i18n: "manager",
                    name: this.getI18n().menu.manager,
                    icon: "icon-zdlxb",
                    path: "documentManager",
                    children: [{
                        groupName: a,
                        groupId: r,
                        key: "globalParameters" + oe()(a),
                        name: this.getI18n().menu.globalsettings,
                        i18n: "globalsettings",
                        tabName: this.getI18n().menu.globalsettings + "(" + a + ")",
                        component: "GlobalParameters",
                        path: "GlobalParameters-" + a
                    }, {
                        groupName: a,
                        groupId: r,
                        key: "OfficelineDocument" + oe()(a),
                        name: this.getI18n().menu.officeline,
                        i18n: "officeline",
                        tabName: this.getI18n().menu.officeline + "(" + a + ")",
                        component: "OfficelineDocument",
                        path: "OfficelineDocument-" + a
                    }, {
                        groupName: a,
                        groupId: r,
                        key: "Settings" + oe()(a),
                        name: this.getI18n().menu.selfSettings,
                        i18n: "selfSettings",
                        component: "Settings",
                        path: "Settings"
                    }]
                }),
                re.a.arrNotEmpty(t.currentInstance.markdownFiles) && t.currentInstance.markdownFiles.forEach((function(e) {
                        var t = e.id.substr(0, 10)
                            , i = {
                            groupName: a,
                            groupId: r,
                            key: e.id,
                            name: e.name,
                            i18n: "other",
                            icon: "icon-APIwendang",
                            path: a + "-" + t + "-omd",
                            children: []
                        };
                        re.a.arrNotEmpty(e.children) && e.children.forEach((function(e) {
                                i.children.push({
                                    groupName: a,
                                    groupId: r,
                                    key: e.id,
                                    component: "OtherMarkdown",
                                    name: e.title,
                                    path: e.id
                                })
                            }
                        )),
                            i.num = i.children.length,
                            n.push(i)
                    }
                )),
                    t.currentInstance.tags.forEach((function(e) {
                            var i = "";
                            if (0 == e.childrens.length)
                                i = t.settings.showTagStatus ? e.name + "(" + e.description + ")" : e.name,
                                    n.push({
                                        groupName: a,
                                        groupId: r,
                                        key: oe()(i),
                                        name: i,
                                        icon: "icon-APIwendang",
                                        path: ""
                                    });
                            else {
                                i = t.settings.showTagStatus ? e.name + "(" + e.description + ")" : e.name;
                                var s = {
                                    groupName: a,
                                    groupId: r,
                                    key: oe()(i),
                                    name: i,
                                    icon: "icon-APIwendang",
                                    path: a + "/" + e.name,
                                    hasNew: e.hasNew || e.hasChanged,
                                    num: null,
                                    children: []
                                };
                                e.childrens.forEach((function(e) {
                                        var t = {
                                            groupName: a,
                                            groupId: r,
                                            key: oe()(a + e.summary + e.operationId),
                                            name: e.summary,
                                            description: e.description,
                                            path: e.operationId,
                                            component: "ApiInfo",
                                            hasNew: e.hasNew || e.hasChanged,
                                            deprecated: e.deprecated,
                                            url: e.url,
                                            method: e.methodType.toUpperCase(),
                                            menuClass: "knife4j-menu-left-style"
                                        };
                                        s.children.push(t)
                                    }
                                )),
                                    s.num = s.children.length,
                                    n.push(s)
                            }
                        }
                    ));
                var s = re.a.formatter(n);
                e && (t.globalMenuDatas = t.globalMenuDatas.concat(s)),
                    this.menuData = s,
                    this.store.dispatch("globals/setMenuData", s),
                    this.store.dispatch("globals/setGitVersion", this.settings.enableVersion),
                    t.log("菜单初始化完成...")
            }
            ,
            Fe.prototype.checkPropertiesExists = function(e, t) {
                var n = !1;
                return null != e && null != e && e.length > 0 && null != t && null != t && e.forEach((function(e) {
                        e.name == t.name && e.in == t.in && e.type == t.type && (n = !0)
                    }
                )),
                    n
            }
            ,
            Fe.prototype.storeCacheApis = function() {
                var e = this;
                e.log("缓存对象...storeCacheApis--\x3e"),
                    e.localStore.setItem(Y.a.globalGitApiVersionCaches, e.cacheApis)
            }
            ,
            Fe.prototype.initApiInfoAsync = function(e) {
                e.oas2 ? this.initApiInfoAsyncOAS2(e) : this.initApiInfoAsyncOAS3(e)
            }
            ,
            Fe.prototype.initApiInfoAsyncOAS2 = function(e) {
                var t = this
                    , n = e.originalApiInfo;
                if (!e.init) {
                    if (n.hasOwnProperty("parameters"))
                        n.parameters.forEach((function(n) {
                                var a = re.a.propValue("name", n, "")
                                    , r = re.a.propValue("in", n, "");
                                null != e.includeParameters ? re.a.filterIncludeParameters(r, a, e.includeParameters) && t.assembleParameter(n, e) : re.a.filterIgnoreParameters(r, a, e.ignoreParameters) && t.assembleParameter(n, e)
                            }
                        ));
                    var a = null
                        , r = !1;
                    if (void 0 !== n.responses && null != n.responses) {
                        var i = n.responses
                            , s = 0;
                        for (var o in i) {
                            var l = new tt
                                , c = i[o];
                            l.code = o,
                                l.oas2 = e.oas2,
                                l.description = c.description;
                            var p = null;
                            if (c.hasOwnProperty("schema") && re.a.checkUndefined(c.schema)) {
                                var u = c.schema
                                    , d = new RegExp("#/definitions/(.*)$","ig");
                                if (u.hasOwnProperty("$ref")) {
                                    if (d.test(u.$ref)) {
                                        var h = RegExp.$1;
                                        e.responseParameterRefName = h,
                                            l.responseParameterRefName = h,
                                            a = h,
                                            p = h,
                                            l.schema = h
                                    }
                                } else if (u.hasOwnProperty("type")) {
                                    var f = u.type;
                                    if ("array" == f) {
                                        if (r = !0,
                                            u.hasOwnProperty("items")) {
                                            var m = u.items
                                                , g = m.$ref;
                                            m.hasOwnProperty("type") && "array" == m.type && (g = m.items.$ref),
                                            d.test(g) && (h = RegExp.$1,
                                                e.responseParameterRefName = h,
                                                l.responseParameterRefName = h,
                                                a = h,
                                                p = h,
                                                l.schema = h)
                                        }
                                    } else if (u.hasOwnProperty("properties")) {
                                        l.schema = f;
                                        var y = new st;
                                        y.name = e.id,
                                            y.description = "自定义Schema",
                                            a = y.name,
                                            p = y.name,
                                            l.responseParameterRefName = y.name;
                                        var v = u.properties
                                            , b = {};
                                        for (var w in v) {
                                            var k = new lt;
                                            k.name = w;
                                            var x = v[w];
                                            k.originProperty = x,
                                                k.type = re.a.propValue("type", x, "string"),
                                                k.description = re.a.propValue("description", x, ""),
                                                k.example = re.a.getExample("example", x, ""),
                                                k.format = re.a.propValue("format", x, ""),
                                                k.required = re.a.propValue("required", x, !1),
                                            y.required.length > 0 && y.required.includes(k.name) && (k.required = !0);
                                            var S = "";
                                            if (x.hasOwnProperty("type")) {
                                                var T = x.type;
                                                x.hasOwnProperty("example") ? S = "string" == T ? re.a.getExample("example", x, "") : x.example : re.a.checkIsBasicType(T) && (S = re.a.getBasicTypeValue(T))
                                            }
                                            k.value = S,
                                            null != k.format && null != k.format && "" != k.format && (k.type += "(" + k.format + ")"),
                                                y.properties.push(k),
                                                b[w] = S
                                        }
                                        y.value = b,
                                            y.init = !0,
                                            t.currentInstance.difArrs.push(y)
                                    } else if (re.a.checkIsBasicType(f)) {
                                        var I = f;
                                        e.responseText = f,
                                            e.responseBasicType = !0,
                                            l.responseText = f,
                                            l.responseBasicType = !0;
                                        var P = re.a.propValue("format", u, "");
                                        re.a.strNotBlank(P) && (I = I + "(" + P + ")"),
                                            l.schemaTitle = I
                                    }
                                }
                            }
                            if (null != p) {
                                var j = t.getDefinitionByName(p, e.oas2);
                                if (null != j) {
                                    if (r) {
                                        var C = new Array;
                                        C.push(j.value),
                                            l.responseValue = re.a.json5stringifyFormat(C, null, "\t"),
                                            l.responseJson = C
                                    } else
                                        l.responseValue = re.a.json5stringifyFormat(j.value, null, "\t"),
                                            l.responseJson = j.value;
                                    if (j.hasOwnProperty("properties")) {
                                        var O = j.properties;
                                        O.forEach((function(n) {
                                                var a = new ht;
                                                if (a.name = n.name,
                                                    !re.a.checkParamArrsExists(l.responseParameters, a))
                                                    if (l.responseParameters.push(a),
                                                        a.description = re.a.replaceMultipLineStr(n.description),
                                                    null == n.type || "" == n.type) {
                                                        if (null != n.refType && !re.a.checkIsBasicType(n.refType)) {
                                                            a.schemaValue = n.refType,
                                                                a.schema = !0,
                                                                a.type = n.refType;
                                                            var r = null != (s = t.getDefinitionByName(n.refType, e.oas2)) ? s : n;
                                                            We(l, t, r, a),
                                                                a.parentTypes.push(n.refType),
                                                                Ye(l, t, r, a)
                                                        }
                                                    } else if (a.type = n.type,
                                                        re.a.checkIsBasicType(n.type)) {
                                                        if (null != n.refType && !re.a.checkIsBasicType(n.refType)) {
                                                            a.schemaValue = n.refType,
                                                                a.schema = !0,
                                                            "array" != n.type && (a.type = n.refType);
                                                            var i = null != (s = t.getDefinitionByName(n.refType, e.oas2)) ? s : n;
                                                            We(l, t, i, a),
                                                                a.parentTypes.push(n.refType),
                                                                Ye(l, t, i, a)
                                                        }
                                                    } else if (null != n.refType) {
                                                        if (!re.a.checkIsBasicType(n.refType)) {
                                                            a.schemaValue = n.refType,
                                                                a.schema = !0,
                                                            "array" != n.type && (a.type = n.refType);
                                                            var s, o = null != (s = t.getDefinitionByName(n.refType, e.oas2)) ? s : n;
                                                            We(l, t, o, a),
                                                                a.parentTypes.push(n.refType),
                                                                Ye(l, t, o, a)
                                                        }
                                                    } else {
                                                        a.schemaValue = n.type,
                                                            a.schema = !0,
                                                            a.type = n.type;
                                                        var c = null != (s = t.getDefinitionByName(n.type, e.oas2)) ? s : n;
                                                        We(l, t, c, a),
                                                            a.parentTypes.push(n.type),
                                                            Ye(l, t, c, a)
                                                    }
                                            }
                                        ))
                                    }
                                }
                            }
                            if (null != l.schema && null != l.schema && (s += 1),
                                c.hasOwnProperty("headers")) {
                                var A = c.headers;
                                for (var V in l.responseHeaderParameters = new Array,
                                    A) {
                                    var E = Object(ae.a)(Object(ae.a)({}, A[V]), {}, {
                                        name: V,
                                        id: oe()(V),
                                        pid: "-1"
                                    });
                                    l.responseHeaderParameters.push(E)
                                }
                                "200" == o && (e.responseHeaderParameters = l.responseHeaderParameters)
                            }
                            e.responseCodes.push(l)
                        }
                        e.multipartResponseSchemaCount = s,
                        s > 1 && (e.multipartResponseSchema = !0)
                    }
                    if (null != a && !e.multipartResponseSchema) {
                        for (var M = 0; M < t.currentInstance.difArrs.length; M++) {
                            var R = t.currentInstance.difArrs[M];
                            R.name == a && (R.init || t.analysisDefinitionAsync(t.currentInstance.swaggerData, R),
                                r ? ((C = new Array).push(R.value),
                                    e.responseValue = re.a.json5stringifyFormat(C, null, "\t"),
                                    e.responseJson = C) : (e.responseValue = re.a.json5stringifyFormat(R.value, null, "\t"),
                                    e.responseJson = R.value))
                        }
                        null != (j = t.getDefinitionByName(a, e.oas2)) && j.hasOwnProperty("properties") && (O = j.properties).forEach((function(n) {
                                var a = new ht;
                                if (a.name = n.name,
                                    !re.a.checkParamArrsExists(e.responseParameters, a))
                                    if (e.responseParameters.push(a),
                                        a.description = re.a.replaceMultipLineStr(n.description),
                                    null == n.type || "" == n.type) {
                                        if (null != n.refType && !re.a.checkIsBasicType(n.refType)) {
                                            a.schemaValue = n.refType,
                                                a.schema = !0,
                                                a.type = n.refType;
                                            var r = t.getDefinitionByName(n.refType, e.oas2);
                                            We(e, t, r, a),
                                                a.parentTypes.push(n.refType),
                                                Ye(e, t, r, a)
                                        }
                                    } else
                                        a.type = n.type,
                                        re.a.checkIsBasicType(n.type) || (null != n.refType ? re.a.checkIsBasicType(n.refType) || (a.schemaValue = n.refType,
                                        "array" != n.type && (a.type = n.refType),
                                            r = t.getDefinitionByName(n.refType, e.oas2),
                                            We(e, t, r, a),
                                            a.parentTypes.push(n.refType),
                                            Ye(e, t, r, a)) : (a.schemaValue = n.type,
                                            a.type = n.type,
                                            r = t.getDefinitionByName(n.type, e.oas2),
                                            We(e, t, r, a),
                                            a.parentTypes.push(n.type),
                                            Ye(e, t, r, a)))
                            }
                        ))
                    }
                    if (null != e.parameters) {
                        var D = 0
                            , N = null
                            , U = "";
                        if (e.parameters.forEach((function(e) {
                                "body" == e.in && (D += 1,
                                null != e.txtValue && "" != e.txtValue && (N = e.txtValue,
                                    U = e.schemaValue))
                            }
                        )),
                        1 == D && (e.requestValue = N,
                            re.a.arrNotEmpty(e.consumes))) {
                            var H = e.consumes.filter((function(e) {
                                    return re.a.strNotBlank(e)
                                }
                            ));
                            if (re.a.arrNotEmpty(H))
                                if (H.some((function(e) {
                                        return e.toLowerCase().indexOf("xml") > -1
                                    }
                                )) && re.a.strNotBlank(N)) {
                                    var B = re.a.json5parse(N)
                                        , L = new Be.a.Builder({
                                        rootName: U
                                    });
                                    L.buildObject(B),
                                        e.requestValue = L.buildObject(B),
                                        e.xmlRequest = !0
                                }
                        }
                        if (null != n.consumes && null != n.consumes && n.consumes.length > 0) {
                            var q = n.consumes[0];
                            if (q.indexOf("multipart/form-data") >= 0)
                                e.contentType = q,
                                    e.contentValue = "form-data";
                            else if (q.indexOf("text/plain") >= 0)
                                e.contentType = q,
                                    e.contentValue = "raw",
                                    e.contentShowValue = "Text(text/plain)",
                                    e.contentMode = "text";
                            else if (q.indexOf("application/xml") >= 0)
                                e.contentType = q,
                                    e.contentValue = "raw",
                                    e.contentShowValue = "XML(application/xml)",
                                    e.contentMode = "xml";
                            else {
                                var F = "application/x-www-form-urlencoded;charset=UTF-8"
                                    , z = "x-www-form-urlencoded";
                                if (re.a.arrNotEmpty(e.parameters)) {
                                    for (M = 0; M < e.parameters.length; M++) {
                                        var K = e.parameters[M];
                                        if ("body" == K.in) {
                                            if ("MultipartFile" == K.schemaValue || "file" == K.type) {
                                                F = "multipart/form-data",
                                                    z = "form-data";
                                                break
                                            }
                                            z = "raw",
                                                F = "application/json",
                                            q.indexOf("application/json") >= 0 && (F = q),
                                                e.contentMode = "json";
                                            break
                                        }
                                        if ("MultipartFile" == K.schemaValue || "file" == K.type) {
                                            F = "multipart/form-data",
                                                z = "form-data";
                                            break
                                        }
                                    }
                                    e.contentType = F,
                                        e.contentValue = z
                                } else
                                    q.indexOf("application/json") >= 0 ? (e.contentType = q,
                                        e.contentValue = "raw",
                                        e.contentShowValue = "JSON(application/json)",
                                        e.contentMode = "json") : (e.contentType = q,
                                        e.contentValue = z)
                            }
                        } else {
                            for (F = "application/x-www-form-urlencoded;charset=UTF-8",
                                     z = "x-www-form-urlencoded",
                                     M = 0; M < e.parameters.length; M++) {
                                if ("body" == (K = e.parameters[M]).in) {
                                    if ("MultipartFile" == K.schemaValue || "file" == K.type) {
                                        F = "multipart/form-data",
                                            z = "form-data";
                                        break
                                    }
                                    z = "raw",
                                        F = "application/json",
                                        e.contentMode = "json";
                                    break
                                }
                                if ("MultipartFile" == K.schemaValue || "file" == K.type) {
                                    F = "multipart/form-data",
                                        z = "form-data";
                                    break
                                }
                            }
                            e.contentType = F,
                                e.contentValue = z
                        }
                    } else
                        e.contentType = "application/x-www-form-urlencoded",
                            e.contentValue = "x-www-form-urlencoded";
                    e.init = !0
                }
            }
            ,
            Fe.prototype.initApiInfoAsyncOAS3 = function(e) {
                var t = this
                    , n = e.originalApiInfo;
                if (!e.init) {
                    var a = t.currentInstance.swaggerData.components.parameters
                        , r = null;
                    if (n.hasOwnProperty("parameters"))
                        n.parameters.forEach((function(n) {
                                var r = re.a.propValue("name", n, "")
                                    , i = re.a.propValue("in", n, "")
                                    , s = re.a.propValue("$ref", n, "");
                                if (re.a.strNotBlank(s)) {
                                    var o = re.a.getRefParameterName(s);
                                    if (re.a.strNotBlank(o) && re.a.checkUndefined(a)) {
                                        var l = a[o];
                                        re.a.checkUndefined(l) && t.assembleParameterOAS3(l, e, [])
                                    }
                                } else
                                    null != e.includeParameters ? re.a.filterIncludeParameters(i, r, e.includeParameters) && t.assembleParameterOAS3(n, e, []) : re.a.filterIgnoreParameters(i, r, e.ignoreParameters) && t.assembleParameterOAS3(n, e, [])
                            }
                        ));
                    if (n.hasOwnProperty("requestBody")) {
                        var i = n.requestBody;
                        if (re.a.checkUndefined(i) && i.hasOwnProperty("content") && re.a.checkUndefined(i.content)) {
                            var s = i.content;
                            for (var o in s) {
                                var l = s[o];
                                if (re.a.checkUndefined(l) && l.hasOwnProperty("schema")) {
                                    var c = l.schema;
                                    if (re.a.arrNotEmpty(e.consumes))
                                        e.consumes.includes(o) || e.consumes.push(o);
                                    else {
                                        var p = [];
                                        p.push(o),
                                            e.consumes = p
                                    }
                                    if (c.hasOwnProperty("properties") && re.a.checkUndefined(c.properties)) {
                                        var u = c.properties
                                            , d = [];
                                        for (var h in c.hasOwnProperty("required") && re.a.checkUndefined(c.required) && (d = c.required),
                                            u) {
                                            var f = u[h];
                                            f.name = h,
                                                f.in = "query",
                                                t.assembleParameterOAS3(f, e, d)
                                        }
                                    } else {
                                        var m = t.getSwaggerModelRefArray(c, e.oas2)
                                            , g = t.getSwaggerModelRefType(c, e.oas2);
                                        if (re.a.checkUndefined(g)) {
                                            var y = null
                                                , v = re.a.camelCase(g);
                                            m ? (y = {
                                                type: "array",
                                                items: {
                                                    originalRef: g,
                                                    $ref: "#/components/schemas/" + g
                                                }
                                            },
                                                v += "s") : y = {
                                                originalRef: g,
                                                $ref: "#/components/schemas/" + g
                                            };
                                            var b = {
                                                in: "body",
                                                description: g,
                                                name: v,
                                                required: !0,
                                                schema: y
                                            };
                                            "object" == g && (b = Object.assign({}, b, {
                                                default: "{}"
                                            })),
                                                t.assembleParameterOAS3(b, e, [])
                                        }
                                    }
                                }
                            }
                            if (re.a.arrNotEmpty(e.consumes)) {
                                var w = e.consumes.filter((function(e) {
                                        return e.indexOf("xml") > -1
                                    }
                                ));
                                re.a.arrNotEmpty(w) && (e.consumes = ["application/xml"])
                            }
                        }
                    }
                    var k = null
                        , x = !1;
                    if (void 0 !== n.responses && null != n.responses) {
                        var S = n.responses
                            , T = 0;
                        for (var I in S) {
                            var P = new tt
                                , j = S[I];
                            P.oas2 = e.oas2,
                                P.code = I,
                                P.description = j.description;
                            var C = null;
                            if (j.hasOwnProperty("content") && re.a.checkUndefined(j.content)) {
                                var O = j.content;
                                for (var A in O) {
                                    var V = O[A]
                                        , E = V.examples;
                                    if (V.hasOwnProperty("schema") && re.a.checkUndefined(V.schema)) {
                                        e.produces.includes(A) || (e.produces.push(A),
                                        "*/*" === e.produces[0] && e.produces.shift()),
                                            c = V.schema,
                                            r = new de(c);
                                        var M = new RegExp(re.a.oasmodel(e.oas2),"ig");
                                        if (c.hasOwnProperty("$ref")) {
                                            if (M.test(c.$ref)) {
                                                var R = RegExp.$1;
                                                e.responseParameterRefName = R,
                                                    P.responseParameterRefName = R,
                                                    k = R,
                                                    C = R,
                                                    P.schema = R
                                            }
                                        } else if (c.hasOwnProperty("type")) {
                                            var D = c.type;
                                            if ("array" == D) {
                                                if (x = !0,
                                                    c.hasOwnProperty("items")) {
                                                    var N = c.items
                                                        , U = N.$ref;
                                                    N.hasOwnProperty("type") && "array" == N.type && (U = N.items.$ref),
                                                    M.test(U) && (R = RegExp.$1,
                                                        e.responseParameterRefName = R,
                                                        P.responseParameterRefName = R,
                                                        k = R,
                                                        C = R,
                                                        P.schema = R)
                                                }
                                            } else if (c.hasOwnProperty("properties")) {
                                                P.schema = D;
                                                var H = new st;
                                                H.name = e.id,
                                                    H.description = "自定义Schema",
                                                    k = H.name,
                                                    C = H.name,
                                                    P.responseParameterRefName = H.name;
                                                var B = c.properties
                                                    , L = {};
                                                for (var q in B) {
                                                    var F = new lt;
                                                    F.name = q;
                                                    var z = B[q];
                                                    F.originProperty = z,
                                                        F.type = re.a.propValue("type", z, "string"),
                                                        F.description = re.a.propValue("description", z, ""),
                                                        F.example = re.a.getExample("example", z, ""),
                                                        F.format = re.a.propValue("format", z, ""),
                                                        F.required = re.a.propValue("required", z, !1),
                                                    H.required.length > 0 && H.required.includes(F.name) && (F.required = !0);
                                                    var K = "";
                                                    z.hasOwnProperty("type") && (g = z.type,
                                                        z.hasOwnProperty("example") ? K = "string" == g ? re.a.getExample("example", z, "") : z.example : re.a.checkIsBasicType(g) && (K = re.a.getBasicTypeValue(g))),
                                                        F.value = K,
                                                    null != F.format && null != F.format && "" != F.format && (F.type += "(" + F.format + ")"),
                                                        H.properties.push(F),
                                                        L[q] = K
                                                }
                                                H.value = L,
                                                    H.init = !0,
                                                    t.currentInstance.difArrs.push(H)
                                            } else
                                                re.a.checkIsBasicType(D) && (e.responseText = D,
                                                    e.responseBasicType = !0,
                                                    P.responseText = D,
                                                    P.responseBasicType = !0)
                                        }
                                    } else
                                        r = new de(V);
                                    re.a.checkUndefined(E) && (r = new fe(V));
                                    break
                                }
                            }
                            if (j.hasOwnProperty("schema") && re.a.checkUndefined(j.schema) && (c = j.schema),
                            null != C) {
                                var G = t.getDefinitionByName(C, e.oas2);
                                if (null != G) {
                                    if (x) {
                                        var X = new Array;
                                        X.push(G.value),
                                            P.responseValue = re.a.json5stringifyFormat(X, null, "\t"),
                                            P.responseJson = X
                                    } else
                                        P.responseValue = re.a.json5stringifyFormat(G.value, null, "\t"),
                                            P.responseJson = G.value;
                                    if (G.hasOwnProperty("properties")) {
                                        var J = G.properties;
                                        J.forEach((function(n) {
                                                var a = new ht;
                                                if (a.name = n.name,
                                                    !re.a.checkParamArrsExists(P.responseParameters, a))
                                                    if (P.responseParameters.push(a),
                                                        a.description = re.a.replaceMultipLineStr(n.description),
                                                    null == n.type || "" == n.type) {
                                                        if (null != n.refType && !re.a.checkIsBasicType(n.refType)) {
                                                            a.schemaValue = n.refType,
                                                                a.schema = !0,
                                                                a.type = n.refType;
                                                            var r = null != (s = t.getDefinitionByName(n.refType, e.oas2)) ? s : n;
                                                            We(P, t, r, a),
                                                                a.parentTypes.push(n.refType),
                                                                Ye(P, t, r, a)
                                                        }
                                                    } else if (a.type = n.type,
                                                        re.a.checkIsBasicType(n.type)) {
                                                        if (null != n.refType && !re.a.checkIsBasicType(n.refType)) {
                                                            a.schemaValue = n.refType,
                                                                a.schema = !0,
                                                            "array" != n.type && (a.type = n.refType);
                                                            var i = null != (s = t.getDefinitionByName(n.refType, e.oas2)) ? s : n;
                                                            We(P, t, i, a),
                                                                a.parentTypes.push(n.refType),
                                                                Ye(P, t, i, a)
                                                        }
                                                    } else if (null != n.refType) {
                                                        if (!re.a.checkIsBasicType(n.refType)) {
                                                            a.schemaValue = n.refType,
                                                                a.schema = !0,
                                                            "array" != n.type && (a.type = n.refType);
                                                            var s, o = null != (s = t.getDefinitionByName(n.refType, e.oas2)) ? s : n;
                                                            We(P, t, o, a),
                                                                a.parentTypes.push(n.refType),
                                                                Ye(P, t, o, a)
                                                        }
                                                    } else {
                                                        a.schemaValue = n.type,
                                                            a.schema = !0,
                                                            a.type = n.type;
                                                        var l = null != (s = t.getDefinitionByName(n.type, e.oas2)) ? s : n;
                                                        We(P, t, l, a),
                                                            a.parentTypes.push(n.type),
                                                            Ye(P, t, l, a)
                                                    }
                                            }
                                        ))
                                    }
                                }
                            }
                            if (null != P.schema && null != P.schema && (T += 1),
                                j.hasOwnProperty("headers")) {
                                var Z = j.headers;
                                for (var W in P.responseHeaderParameters = new Array,
                                    Z) {
                                    var Y = Object(ae.a)(Object(ae.a)({}, Z[W]), {}, {
                                        name: W,
                                        id: oe()(W),
                                        pid: "-1"
                                    });
                                    P.responseHeaderParameters.push(Y)
                                }
                                "200" == I && (e.responseHeaderParameters = P.responseHeaderParameters)
                            }
                            re.a.checkUndefined(r) && re.a.checkUndefined(r.responseText) && (P.responseValue = r.responseValue,
                                P.responseText = r.responseText,
                                P.responseJson = r.responseText),
                                e.responseCodes.push(P)
                        }
                        e.multipartResponseSchemaCount = T,
                        T > 1 && (e.multipartResponseSchema = !0)
                    }
                    if (null != k && !e.multipartResponseSchema) {
                        for (var Q = 0; Q < t.currentInstance.difArrs.length; Q++) {
                            var $ = t.currentInstance.difArrs[Q];
                            $.name == k && ($.init || t.analysisDefinitionAsync(t.currentInstance.swaggerData, $),
                                x ? ((X = new Array).push($.value),
                                    e.responseValue = re.a.json5stringifyFormat(X, null, "\t"),
                                    e.responseJson = X) : (e.responseValue = re.a.json5stringifyFormat($.value, null, "\t"),
                                    e.responseJson = $.value))
                        }
                        null != (G = t.getDefinitionByName(k, e.oas2)) && G.hasOwnProperty("properties") && (J = G.properties).forEach((function(n) {
                                var a = new ht;
                                if (a.name = n.name,
                                    !re.a.checkParamArrsExists(e.responseParameters, a))
                                    if (e.responseParameters.push(a),
                                        a.description = re.a.replaceMultipLineStr(n.description),
                                    null == n.type || "" == n.type) {
                                        if (null != n.refType && !re.a.checkIsBasicType(n.refType)) {
                                            a.schemaValue = n.refType,
                                                a.schema = !0,
                                                a.type = n.refType;
                                            var r = t.getDefinitionByName(n.refType, e.oas2);
                                            We(e, t, r, a),
                                                a.parentTypes.push(n.refType),
                                                Ye(e, t, r, a)
                                        }
                                    } else
                                        a.type = n.type,
                                        re.a.checkIsBasicType(n.type) || (null != n.refType ? re.a.checkIsBasicType(n.refType) || (a.schemaValue = n.refType,
                                        "array" != n.type && (a.type = n.refType),
                                            r = t.getDefinitionByName(n.refType, e.oas2),
                                            We(e, t, r, a),
                                            a.parentTypes.push(n.refType),
                                            Ye(e, t, r, a)) : (a.schemaValue = n.type,
                                            a.type = n.type,
                                            r = t.getDefinitionByName(n.type, e.oas2),
                                            We(e, t, r, a),
                                            a.parentTypes.push(n.type),
                                            Ye(e, t, r, a)))
                            }
                        ))
                    }
                    if (null != e.parameters) {
                        var _ = 0
                            , ee = null
                            , te = "";
                        if (e.parameters.forEach((function(e) {
                                "body" == e.in && (_ += 1,
                                null != e.txtValue && "" != e.txtValue && (ee = e.txtValue,
                                    te = e.schemaValue))
                            }
                        )),
                        1 == _ && (e.requestValue = ee,
                            re.a.arrNotEmpty(e.consumes))) {
                            var ne = e.consumes.filter((function(e) {
                                    return re.a.strNotBlank(e)
                                }
                            ));
                            if (re.a.arrNotEmpty(ne))
                                if (ne.some((function(e) {
                                        return e.toLowerCase().indexOf("xml") > -1
                                    }
                                )) && re.a.strNotBlank(ee)) {
                                    var ie = re.a.json5parse(ee)
                                        , se = new Be.a.Builder({
                                        rootName: te
                                    });
                                    se.buildObject(ie),
                                        e.requestValue = se.buildObject(ie),
                                        e.xmlRequest = !0
                                }
                        }
                        if (null != e.consumes && null != e.consumes && e.consumes.length > 0) {
                            var le = e.consumes[0];
                            if (le.indexOf("multipart/form-data") >= 0)
                                e.contentType = le,
                                    e.contentValue = "form-data";
                            else if (le.indexOf("text/plain") >= 0)
                                e.contentType = le,
                                    e.contentValue = "raw",
                                    e.contentShowValue = "Text(text/plain)",
                                    e.contentMode = "text";
                            else if (le.indexOf("application/xml") >= 0)
                                e.contentType = le,
                                    e.contentValue = "raw",
                                    e.contentShowValue = "XML(application/xml)",
                                    e.contentMode = "xml";
                            else {
                                var ce = "application/x-www-form-urlencoded;charset=UTF-8"
                                    , pe = "x-www-form-urlencoded";
                                if (re.a.arrNotEmpty(e.parameters)) {
                                    for (Q = 0; Q < e.parameters.length; Q++) {
                                        var ue = e.parameters[Q];
                                        if ("body" == ue.in) {
                                            if ("MultipartFile" == ue.schemaValue || "file" == ue.type) {
                                                ce = "multipart/form-data",
                                                    pe = "form-data";
                                                break
                                            }
                                            pe = "raw",
                                                ce = "application/json",
                                            le.indexOf("application/json") >= 0 && (ce = le),
                                                e.contentMode = "json";
                                            break
                                        }
                                        if ("MultipartFile" == ue.schemaValue || "file" == ue.type) {
                                            ce = "multipart/form-data",
                                                pe = "form-data";
                                            break
                                        }
                                    }
                                    e.contentType = ce,
                                        e.contentValue = pe
                                } else
                                    le.indexOf("application/json") >= 0 ? (e.contentType = le,
                                        e.contentValue = "raw",
                                        e.contentShowValue = "JSON(application/json)",
                                        e.contentMode = "json") : (e.contentType = le,
                                        e.contentValue = pe)
                            }
                        } else {
                            for (ce = "application/x-www-form-urlencoded;charset=UTF-8",
                                     pe = "x-www-form-urlencoded",
                                     Q = 0; Q < e.parameters.length; Q++) {
                                if ("body" == (ue = e.parameters[Q]).in) {
                                    if ("MultipartFile" == ue.schemaValue || "file" == ue.type) {
                                        ce = "multipart/form-data",
                                            pe = "form-data";
                                        break
                                    }
                                    pe = "raw",
                                        ce = "application/json",
                                        e.contentMode = "json";
                                    break
                                }
                                if ("MultipartFile" == ue.schemaValue || "file" == ue.type) {
                                    ce = "multipart/form-data",
                                        pe = "form-data";
                                    break
                                }
                            }
                            e.contentType = ce,
                                e.contentValue = pe
                        }
                    }
                    re.a.checkUndefined(r) && re.a.checkUndefined(r.responseText) && (e.responseValue = r.responseValue,
                        e.responseText = r.responseText,
                        e.responseJson = r.responseText),
                        e.init = !0
                }
            }
            ,
            Fe.prototype.createApiInfoInstance = function(e, t, n, a) {
                var r = this
                    , i = new pt;
                r.currentInstance.oas2() ? i.oas2 = !0 : i.oas2 = !1,
                    i.originalApiInfo = n;
                var s = r.currentInstance.basePath
                    , o = "";
                re.a.checkUndefined(r.currentInstance.contextPath) && (o += r.currentInstance.contextPath);
                var l = !1;
                if ("" != s && "/" != s && (l = !0),
                i.oas2 && (a || re.a.checkUndefined(s) && (o += s)),
                r.springdoc || !i.oas2) {
                    var c = window.location.pathname
                        , p = "";
                    // tzy：解决文档中api总是会带上服务器根请求路径问题
                    // new RegExp("(.*?)/doc.html.*$","ig").test(c) && (p = RegExp.$1),
                    //     o += p
                }
                var u = o += e;
                if (re.a.strNotBlank(r.currentInstance.servicePath)) {
                    var d = r.currentInstance.servicePath;
                    o.startsWith("/") || (d += "/"),
                        u = d += o
                }
                i.showUrl = u,
                    i.instanceId = r.currentInstance.id,
                    i.host = r.currentInstance.host,
                    i.url = u,
                    i.originalUrl = u,
                    i.basePathFlag = l,
                    i.methodType = t.toUpperCase(),
                re.a.checkUndefined(r.configuration.supportedSubmitMethods) && (r.configuration.supportedSubmitMethods.includes(t.toLowerCase()) || (i.configurationDebugSupport = !1));
                var h = u + t.toUpperCase();
                if (i.id = oe()(h),
                    i.versionId = re.a.md5Id(n),
                null != n) {
                    this.readApiSecurity(i, n),
                        this.readOpenApiSpeci(e, i, n, r.currentInstance.swaggerData, r.currentInstance.openApiBaseInfo),
                    n.hasOwnProperty("deprecated") && (i.deprecated = n.deprecated),
                    re.a.arrEmpty(n.tags) && (n.tags = ["default"]),
                        i.consumes = re.a.getValue(n, "consumes", [].concat("application/x-www-form-urlencoded"), !0),
                        i.description = re.a.getValue(n, "description", "", !0),
                    re.a.strNotBlank(i.description) && (i.description = le.marked.parse(i.description)),
                        n.operationId = n.operationId || i.id,
                        i.operationId = n.operationId,
                        i.summary = re.a.toString(n.summary, "").replace(/\//g, "-"),
                    re.a.strBlank(i.summary) && (i.summary = n.operationId),
                        i.tags = n.tags,
                        this.readApiInfoInstanceExt(i, n),
                        i.operationId = re.a.getValue(n, "operationId", "", !0);
                    var f = r.currentInstance.name;
                    i.tags.forEach((function(e) {
                            var t = "#/" + f + "/" + e + "/" + i.operationId;
                            i.hashCollections.push(t)
                        }
                    )),
                        re.a.checkUndefined(n.produces) ? i.produces = n.produces : i.produces = [].concat("*/*");
                    for (var m = 0; m < n.tags.length; m++) {
                        var g = n.tags[m];
                        r.mergeApiInfoSelfTags(g)
                    }
                }
                if (r.currentInstance.firstLoad) {
                    r.currentInstance.cacheInstance.cacheApis.push(i.id);
                    var y = new rt(i.versionId);
                    y.url = i.url,
                        r.currentInstance.cacheInstance.updateApis[i.id] = y
                } else {
                    var v = r.currentInstance.cacheInstance.updateApis;
                    if (v.hasOwnProperty(i.id)) {
                        var b = v[i.id];
                        null != b && null != b && b.versionId != i.versionId && (i.hasChanged = !0)
                    } else
                        (y = new rt(i.versionId)).url = i.url,
                            r.currentInstance.cacheInstance.updateApis[i.id] = y,
                            r.log(r.currentInstance.cacheInstance)
                }
                return i
            }
            ,
            Fe.prototype.readApiSecurity = function(e, t) {
                e.oas2 ? this.readApiSecurityOAS2(e, t) : this.readApiSecurityOAS3(e, t)
            }
            ,
            Fe.prototype.readApiSecurityOAS2 = function(e, t) {
                if (re.a.checkUndefined(t) && t.hasOwnProperty("security")) {
                    var n = t.security;
                    if (re.a.arrNotEmpty(n)) {
                        var a = new Array;
                        n.forEach((function(e) {
                                var t = Object.keys(e || {});
                                re.a.arrNotEmpty(t) && (a = a.concat(t))
                            }
                        )),
                        re.a.arrNotEmpty(a) && (e.securityFlag = !0,
                            e.securityKeys = a)
                    }
                }
            }
            ,
            Fe.prototype.readApiSecurityOAS3 = function(e, t) {
                if (re.a.checkUndefined(t) && t.hasOwnProperty("security")) {
                    var n = t.security;
                    if (re.a.arrNotEmpty(n)) {
                        var a = new Array;
                        n.forEach((function(e) {
                                var t = Object.keys(e || {});
                                re.a.arrNotEmpty(t) && (a = a.concat(t))
                            }
                        )),
                        re.a.arrNotEmpty(a) && (e.securityFlag = !0,
                            e.securityKeys = a)
                    }
                }
            }
            ,
            Fe.prototype.readOpenApiSpeci = function(e, t, n, a, r) {
                try {
                    var i = Ve()(r || {})
                        , s = t.methodType.toLowerCase()
                        , o = {};
                    o[s] = n;
                    var l = {};
                    l[e] = o,
                        i.paths = l;
                    var c = {};
                    t.oas2 ? (c = this.readOpenApiSpeciOAS2(n, a),
                        i.definitions = c) : (c = this.readOpenApiSpeciOAS3(n, a),
                        i.components = c),
                        t.openApiRaw = i
                } catch (e) {
                    window.console && window.console.error(e)
                }
            }
            ,
            Fe.prototype.readOpenApiSpeciOAS2 = function(e, t) {
                for (var n, a = {}, r = re.a.json5stringify(e), i = new RegExp('"#/definitions/(.*?)"',"ig"), s = t.definitions, o = new Array; null != (n = i.exec(r)); ) {
                    var l = n[1];
                    re.a.checkUndefined(l) && (o.includes(l) || o.push(l))
                }
                return o.length > 0 && (o.forEach((function(e) {
                        Xe(e, o, s, !0)
                    }
                )),
                    o.forEach((function(e) {
                            a[e] = s[e]
                        }
                    ))),
                    a
            }
            ,
            Fe.prototype.readOpenApiSpeciOAS3 = function(e, t) {
                for (var n, a = {}, r = re.a.json5stringify(e), i = new Array, s = new RegExp('"#/components/schemas/(.*?)"',"ig"); null != (n = s.exec(r)); ) {
                    var o = n[1];
                    re.a.checkUndefined(o) && (i.includes(o) || i.push(o))
                }
                var l = t.components;
                if (re.a.checkUndefined(l)) {
                    var c = l.schemas;
                    i.length > 0 && (i.forEach((function(e) {
                            Xe(e, i, c, !1)
                        }
                    )),
                        i.forEach((function(e) {
                                a[e] = c[e]
                            }
                        )))
                }
                return a
            }
            ,
            Fe.prototype.readApiInfoInstanceExt = function(e, t) {
                e.oas2 ? this.readApiInfoInstanceExtOAS2(e, t) : this.readApiInfoInstanceExtOAS3(e, t)
            }
            ,
            Fe.prototype.readApiInfoInstanceExtOAS2 = function(e, t) {
                if (t.hasOwnProperty("x-ignoreParameters")) {
                    var n = t["x-ignoreParameters"];
                    e.ignoreParameters = n[0]
                }
                if (t.hasOwnProperty("x-includeParameters")) {
                    var a = t["x-includeParameters"];
                    e.includeParameters = a[0]
                }
                if (t.hasOwnProperty("x-order") && (e.order = parseInt(t["x-order"])),
                    t.hasOwnProperty("x-author")) {
                    var r = t["x-author"];
                    re.a.strNotBlank(r) && (e.author = r)
                }
            }
            ,
            Fe.prototype.readApiInfoInstanceExtOAS3 = function(e, t) {
                if (t.hasOwnProperty("extensions") && re.a.checkUndefined(t.extensions)) {
                    var n = t.extensions;
                    if (n.hasOwnProperty("x-ignoreParameters")) {
                        var a = n["x-ignoreParameters"];
                        e.ignoreParameters = a[0]
                    }
                    if (n.hasOwnProperty("x-includeParameters")) {
                        var r = n["x-includeParameters"];
                        e.includeParameters = r[0]
                    }
                    if (n.hasOwnProperty("x-order") && (e.order = parseInt(n["x-order"])),
                        n.hasOwnProperty("x-author")) {
                        var i = n["x-author"];
                        re.a.strNotBlank(i) && (e.author = i)
                    }
                } else
                    t.hasOwnProperty("x-order") && (e.order = parseInt(t["x-order"])),
                    t.hasOwnProperty("x-author") && (i = t["x-author"],
                    re.a.strNotBlank(i) && (e.author = i))
            }
            ,
            Fe.prototype.assembleParameter = function(e, t) {
                var n = this
                    , a = re.a.propValue("name", e, "")
                    , r = re.a.propValue("in", e, "")
                    , i = new ht;
                i.name = a,
                    i.ignoreFilterName = a,
                    i.type = re.a.propValue("type", e, ""),
                    i.in = r,
                    i.require = re.a.propValue("required", e, !1),
                    i.description = re.a.replaceMultipLineStr(re.a.propValue("description", e, ""));
                var s = re.a.propValue("format", e, "");
                if (re.a.strNotBlank(s)) {
                    var o = i.type + "(" + s + ")";
                    i.type = o
                }
                if (e.hasOwnProperty("enum") && (i.enum = e.enum,
                    null != e.description && null != e.description && "" != e.description ? i.description = e.description + "," + re.a.enumAvalibleLabel(n.i18nInstance, e.enum) : i.description = re.a.enumAvalibleLabel(n.i18nInstance, e.enum)),
                e.hasOwnProperty("default") && (i.txtValue = e.default,
                    i.example = e.default),
                e.hasOwnProperty("x-example") && (i.txtValue = e["x-example"],
                re.a.checkUndefined(i.txtValue) && (i.example = i.txtValue)),
                    e.hasOwnProperty("schema")) {
                    i.schema = !0;
                    var l = e.schema
                        , c = l.type;
                    if ("array" == c) {
                        i.type = c;
                        var p = l.items
                            , u = p.$ref
                            , d = re.a.getClassName(u, t.oas2);
                        i.schemaValue = d;
                        var h = n.getDefinitionByName(d, t.oas2);
                        if (null != h)
                            i.def = h,
                                i.value = h.value,
                            null != h.description && null != h.description && "" != h.description && (i.description = re.a.replaceMultipLineStr(h.description));
                        else {
                            var f = p.type
                                , m = f;
                            if ("string" == f && (i.value = ""),
                            "integer" == f) {
                                var g = p.format;
                                i.value = null != g && null != g && "int32" == g ? 0 : 0xea2e8e293c84000,
                                re.a.checkUndefined(g) && (m = m + "(" + g + ")")
                            }
                            if ("number" == f) {
                                var y = p.format;
                                null != p.format && null != p.format && "double" == p.format ? i.value = .5 : i.value = 0,
                                re.a.checkUndefined(y) && (m = m + "(" + y + ")")
                            }
                            i.schemaValue = m
                        }
                    } else if (l.hasOwnProperty("$ref"))
                        u = e.schema.$ref,
                            d = re.a.getClassName(u, t.oas2),
                        "array" != i.type && (i.type = d),
                            i.schemaValue = d,
                        null != (h = n.getDefinitionByName(d, t.oas2)) && (i.def = h,
                            i.value = h.value,
                        null != h.description && null != h.description && "" != h.description && (i.description = re.a.replaceMultipLineStr(h.description)));
                    else if (l.hasOwnProperty("additionalProperties")) {
                        var v = l.additionalProperties;
                        if (v.hasOwnProperty("$ref"))
                            null != (d = re.a.getClassName(v.$ref, t.oas2)) && null != (h = n.getDefinitionByName(d, t.oas2)) && (i.def = h,
                                i.value = {
                                    additionalProperties1: h.value
                                },
                            null != h.description && null != h.description && "" != h.description && (i.description = re.a.replaceMultipLineStr(h.description)));
                        else if (v.hasOwnProperty("items")) {
                            var b = v.items;
                            if (null != (d = re.a.getClassName(b.$ref, t.oas2)) && null != (h = n.getDefinitionByName(d, t.oas2))) {
                                var w = new Array;
                                w.push(h.value),
                                    i.def = h,
                                    i.value = {
                                        additionalProperties1: w
                                    },
                                null != h.description && null != h.description && "" != h.description && (i.description = re.a.replaceMultipLineStr(h.description))
                            }
                        }
                    } else {
                        if (l.hasOwnProperty("type") && (i.type = l.type,
                            l.hasOwnProperty("example"))) {
                            var k = re.a.propValue("example", l, null);
                            null != k && "" != k && (i.txtValue = k,
                                i.example = k)
                        }
                        i.value = ""
                    }
                }
                if (e.hasOwnProperty("items")) {
                    var x = e.items;
                    x.hasOwnProperty("$ref") ? (u = x.$ref,
                        d = re.a.getClassName(u, t.oas2),
                        i.schemaValue = d,
                    null != (h = n.getDefinitionByName(d, t.oas2)) && (i.def = h,
                        i.value = h.value,
                    null != h.description && null != h.description && "" != h.description && (i.description = re.a.replaceMultipLineStr(h.description)))) : (x.hasOwnProperty("type") && (i.schemaValue = x.type),
                        i.value = "")
                }
                if ("body" == i.in && (Ue()(i.txtValue) || De()(i.txtValue))) {
                    var S = function() {
                        if (je()(i.value)) {
                            var e = null
                                , n = re.a.json5parse(re.a.json5stringify(i.value));
                            return null != t.includeParameters ? e = new Je(n,t.includeParameters).result() : (e = n,
                            t.ignoreParameters && je()(i.value) && Object.keys(t.ignoreParameters || {}).forEach((function(t) {
                                    var n = t.startsWith("".concat(a, ".")) ? t.replace("".concat(a, "."), "") : t;
                                    Object.keys(e || {}).forEach((function(t) {
                                            if (Oe()(e, n))
                                                t === n && Me()(e, t);
                                            else {
                                                var a = n;
                                                n.endsWith("$") || (a += "$"),
                                                new RegExp(a,"g").test(t) && Me()(e, t)
                                            }
                                        }
                                    ))
                                }
                            ))),
                                e
                        }
                        return null
                    }();
                    Ue()(S) || De()(S) ? "array" === i.type && (i.txtValue = JSON.stringify([])) : i.txtValue = re.a.json5stringify("array" === i.type ? [S] : S, null, "\t")
                }
                ("query" != i.in && "formData" != i.in || i.schema && re.a.checkUndefined(i.value) && re.a.strBlank(i.txtValue) && (i.txtValue = re.a.json5stringify("array" === i.type ? [i.value] : i.value, null, "\t")),
                    n.validateJSR303(i, e),
                    re.a.checkParamArrsExists(t.parameters, i)) || (Object.keys(t.ignoreParameters || {}).includes(a) || t.parameters.push(i),
                i.schema && i.parentTypes.push(i.schemaValue))
            }
            ,
            Fe.prototype.assembleParameterOAS3 = function(e, t, n) {
                var a = this
                    , r = re.a.propValue("name", e, "")
                    , i = re.a.propValue("in", e, "")
                    , s = new ht;
                s.deprecated = re.a.propValue("deprecated", e, !1),
                    s.allowEmptyValue = re.a.propValue("allowEmptyValue", e, !1),
                    s.name = r,
                    s.ignoreFilterName = r,
                    s.type = re.a.propValue("type", e, ""),
                    s.in = i,
                    s.require = re.a.propValue("required", e, !1),
                re.a.arrNotEmpty(n) && (s.require = n.includes(s.name)),
                    s.description = re.a.replaceMultipLineStr(re.a.propValue("description", e, "")),
                e.hasOwnProperty("enum") && (s.enum = e.enum,
                    e.enum.join(","),
                    null != e.description && null != e.description && "" != e.description ? s.description = e.description + "," + re.a.enumAvalibleLabel(a.i18nInstance, e.enum) : s.description = "枚举类型," + re.a.enumAvalibleLabel(a.i18nInstance, e.enum)),
                e.hasOwnProperty("default") && (s.txtValue = e.default),
                e.hasOwnProperty("x-example") && (s.txtValue = e["x-example"],
                re.a.checkUndefined(s.txtValue) && (s.example = s.txtValue)),
                e.hasOwnProperty("example") && (s.example = re.a.propValue("example", e, ""),
                    s.txtValue = re.a.propValue("example", e, "")),
                "binary" == re.a.propValue("format", e, "") && (s.type = "file");
                var o = {};
                if (e.hasOwnProperty("schema")) {
                    s.schema = !0;
                    var l = e.schema
                        , c = l.type;
                    s.type = c;
                    var p = re.a.propValue("description", l, null);
                    if (re.a.checkUndefined(p) && (s.description = p),
                    "array" == c) {
                        s.type = c;
                        var u = l.items
                            , d = u.$ref
                            , h = re.a.getClassName(d, t.oas2);
                        s.schemaValue = h;
                        var f = a.getDefinitionByName(h, t.oas2);
                        if (null != f)
                            s.def = f,
                                s.value = f.value,
                            null != f.description && null != f.description && "" != f.description && (s.description = re.a.replaceMultipLineStr(f.description));
                        else {
                            var m = u.type;
                            s.schemaValue = u.type,
                            "string" == m && (s.value = ""),
                            "integer" == m && (null != u.format && null != u.format && "int32" == u.format ? s.value = 0 : s.value = 0xea2e8e293c84000),
                            "number" == m && (null != u.format && null != u.format && "double" == u.format ? s.value = .5 : s.value = 0);
                            var g = re.a.propValue("enum", l, []);
                            re.a.arrNotEmpty(g) && (s.enum = g,
                                null != e.description && null != e.description && "" != e.description ? s.description = e.description + "," + re.a.enumAvalibleLabel(a.i18nInstance, g) : s.description = re.a.enumAvalibleLabel(a.i18nInstance, g))
                        }
                    } else if (re.a.checkIsBasicType(c)) {
                        var y = re.a.propValue("format", l, "");
                        if (re.a.strNotBlank(y)) {
                            var v = c + "(" + y + ")";
                            s.type = v,
                            "binary" == y && (s.type = "file")
                        }
                        g = re.a.propValue("enum", l, []),
                        re.a.arrNotEmpty(g) && (s.enum = g,
                            null != e.description && null != e.description && "" != e.description ? s.description = e.description + "," + re.a.enumAvalibleLabel(a.i18nInstance, g) : s.description = re.a.enumAvalibleLabel(a.i18nInstance, g)),
                        l.hasOwnProperty("default") && (s.example = re.a.propValue("default", l, null),
                            s.txtValue = re.a.propValue("default", l, null))
                    } else if (l.hasOwnProperty("$ref"))
                        d = e.schema.$ref,
                            h = re.a.getClassName(d, t.oas2),
                        "array" != s.type && (s.type = h),
                            s.schemaValue = h,
                        null != (f = a.getDefinitionByName(h, t.oas2)) && (s.def = f,
                            s.value = f.value,
                        null != f.description && null != f.description && "" != f.description && (s.description = re.a.replaceMultipLineStr(f.description)));
                    else if (l.hasOwnProperty("additionalProperties")) {
                        var b = l.additionalProperties;
                        if (b.hasOwnProperty("$ref"))
                            null != (h = re.a.getClassName(b.$ref, t.oas2)) && null != (f = a.getDefinitionByName(h, t.oas2)) && (s.def = f,
                                s.value = {
                                    additionalProperties1: f.value
                                },
                            null != f.description && null != f.description && "" != f.description && (s.description = re.a.replaceMultipLineStr(f.description)));
                        else if (b.hasOwnProperty("items")) {
                            var w = b.items;
                            if (null != (h = re.a.getClassName(w.$ref, t.oas2)) && null != (f = a.getDefinitionByName(h, t.oas2))) {
                                var k = new Array;
                                k.push(f.value),
                                    s.def = f,
                                    s.value = {
                                        additionalProperties1: k
                                    },
                                null != f.description && null != f.description && "" != f.description && (s.description = re.a.replaceMultipLineStr(f.description))
                            }
                        }
                    } else
                        l.hasOwnProperty("type") && (s.type = l.type),
                            s.value = "";
                    o = l
                } else
                    o = e;
                if (a.validateJSR303(s, o),
                    e.hasOwnProperty("items")) {
                    var x = e.items;
                    if (x.hasOwnProperty("$ref"))
                        d = x.$ref,
                            h = re.a.getClassName(d, t.oas2),
                            s.schemaValue = h,
                        null != (f = a.getDefinitionByName(h, t.oas2)) && (s.schema = !0,
                            s.def = f,
                            s.value = f.value,
                        null != f.description && null != f.description && "" != f.description && (s.description = re.a.replaceMultipLineStr(f.description)));
                    else {
                        if (x.hasOwnProperty("type"))
                            s.schemaValue = x.type,
                            "binary" == re.a.propValue("format", x, "") && (s.type = "array",
                                s.schemaValue = "file");
                        s.value = ""
                    }
                }
                if ("body" == s.in && (Ue()(s.txtValue) || De()(s.txtValue))) {
                    var S = function() {
                        if (je()(s.value)) {
                            var e = null
                                , n = re.a.json5parse(re.a.json5stringify(s.value));
                            return null != t.includeParameters ? e = new Je(n,t.includeParameters).result() : (e = n,
                            t.ignoreParameters && je()(s.value) && Object.keys(t.ignoreParameters || {}).forEach((function(t) {
                                    var n = t.startsWith("".concat(r, ".")) ? t.replace("".concat(r, "."), "") : t;
                                    Object.keys(e || {}).forEach((function(t) {
                                            if (Oe()(e, n))
                                                t === n && Me()(e, t);
                                            else {
                                                var a = n;
                                                n.endsWith("$") || (a += "$"),
                                                new RegExp(a,"g").test(t) && Me()(e, t)
                                            }
                                        }
                                    ))
                                }
                            ))),
                                e
                        }
                        return null
                    }();
                    Ue()(S) || De()(S) ? "array" === s.type && (s.txtValue = JSON.stringify([])) : s.txtValue = re.a.json5stringify("array" === s.type ? [S] : S, null, "\t")
                }
                ("query" != s.in && "formData" != s.in || s.schema && re.a.checkUndefined(s.value) && re.a.strBlank(s.txtValue) && (s.txtValue = re.a.json5stringify("array" === s.type ? [s.value] : s.value, null, "\t")),
                    re.a.checkParamArrsExists(t.parameters, s)) || (Object.keys(t.ignoreParameters || {}).includes(r) || t.parameters.push(s),
                s.schema && s.parentTypes.push(s.schemaValue))
            }
            ,
            Je.prototype = {
                isObjInArray: function(e) {
                    return !!this.isArray(e) && 0 !== e.length && this.isObject(e[0])
                },
                isObject: function(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                merge: function(e, t) {
                    var n = this;
                    if (this.isObject(e))
                        for (var a in t)
                            e[a] = this.isObject(e[a]) || this.isObjInArray(e[a]) ? this.merge(e[a], t[a]) : e[a] = t[a];
                    else
                        this.isObjInArray(t) ? e.forEach((function(e, a) {
                                n.merge(e, t[a])
                            }
                        )) : e.push.apply(e, t);
                    return e
                },
                getByPath: function(e, t) {
                    var n = this;
                    if (this.isObjInArray(e)) {
                        var a = [];
                        return e.forEach((function(e) {
                                a.push(n.getByPath(e, t))
                            }
                        )),
                            a
                    }
                    for (var r = t.split("."), i = re.a.json5parse(re.a.json5stringify(e)), s = i, o = r.length, l = 0; l < o; l++) {
                        var c = r[l];
                        for (var p in s)
                            p !== c && delete s[p];
                        if (!s[c])
                            break;
                        if (this.isObjInArray(s[c])) {
                            var u = this.getByPath(s[c], r.slice(l + 1).join("."));
                            s[c] = re.a.json5parse(re.a.json5stringify(u));
                            break
                        }
                        s = s[c]
                    }
                    return i
                },
                result: function() {
                    var e = this;
                    if (null == this.includeArrays || 0 == this.includeArrays.length)
                        return this.json;
                    var t = [];
                    return this.includeArrays.forEach((function(n) {
                            t.push(e.getByPath(e.json, n))
                        }
                    )),
                        t.reduce((function(t, n) {
                                return t ? (e.merge(t, n),
                                    t) : n
                            }
                        ))
                }
            },
            Fe.prototype.mergeApiInfoSelfTags = function(e) {
                var t = !1;
                if (this.currentInstance.tags.forEach((function(n) {
                        n.name == e && (t = !0)
                    }
                )),
                    !t) {
                    var n = new ct(e,e);
                    this.currentInstance.tags.push(n)
                }
            }
            ,
            Fe.prototype.validateJSR303 = function(e, t) {
                var n = t.maximum
                    , a = t.minimum
                    , r = t.exclusiveMinimum
                    , i = t.exclusiveMaximum
                    , s = t.pattern
                    , o = t.maxLength
                    , l = t.minLength;
                n || a || r || i ? (e.validateStatus = !0,
                    e.validateInstance = {
                        minimum: a,
                        maximum: n,
                        exclusiveMaximum: i,
                        exclusiveMinimum: r
                    }) : s ? (e.validateStatus = !0,
                    e.validateInstance = {
                        pattern: t.pattern
                    }) : (o || l) && (e.validateStatus = !0,
                    e.validateInstance = {
                        maxLength: o,
                        minLength: l
                    })
            }
            ,
            Fe.prototype.getDefinitionByName = function(e, t) {
                var n = this
                    , a = null
                    , r = !0;
                return re.a.checkUndefined(t) && (r = t),
                    n.currentInstance.difArrs.forEach((function(t) {
                            if (t.name == e)
                                return t.init || (t.init = !0,
                                    n.analysisDefinitionAsync(n.currentInstance.swaggerData, t, r)),
                                    void (a = t)
                        }
                    )),
                    a
            }
            ,
            Fe.prototype.findRefDefinition = function(e, t, n, a, r, i) {
                var s = this
                    , o = "";
                if (re.a.checkUndefined(s.currentInstance.definitionValues[e]))
                    o = s.currentInstance.definitionValues[e];
                else {
                    for (var l in t)
                        if (e == l) {
                            s.log("解析definitionName:" + e);
                            var c = t[l];
                            if (c.hasOwnProperty("properties")) {
                                var p = c.properties
                                    , u = {};
                                for (var d in p) {
                                    var h = p[d];
                                    if (!h.hasOwnProperty("readOnly") || !h.readOnly) {
                                        var f = "";
                                        if (h.hasOwnProperty("type")) {
                                            var m = h.type;
                                            if (h.hasOwnProperty("example"))
                                                f = re.a.getExample("example", h, "");
                                            else if (h.hasOwnProperty("default"))
                                                f = re.a.getExample("default", h, "");
                                            else if (re.a.checkIsBasicType(m)) {
                                                if (f = re.a.getBasicTypeValue(m),
                                                "object" == m && h.hasOwnProperty("additionalProperties")) {
                                                    var g = h.additionalProperties
                                                        , y = new we(g,i).findClassName();
                                                    if (re.a.strNotBlank(y)) {
                                                        if (-1 == a.indexOf(y))
                                                            a.push(y),
                                                                f = {
                                                                    additionalProperties1: k = s.findRefDefinition(y, t, !1, a, r, i)
                                                                },
                                                                f = new be(g,y,k).additionalMapValue(null)
                                                    } else if (g.hasOwnProperty("$ref")) {
                                                        var v = g.$ref
                                                            , b = new RegExp(re.a.oasmodel(i),"ig");
                                                        if (b.test(v)) {
                                                            var w = RegExp.$1
                                                                , k = null;
                                                            n || -1 == a.indexOf(w) && (a.push(w),
                                                                f = {
                                                                    additionalProperties1: k = s.findRefDefinition(w, t, n, a, r, i)
                                                                })
                                                        }
                                                    }
                                                }
                                            } else if ("array" == m) {
                                                f = new Array;
                                                var x = h.items
                                                    , S = x.$ref;
                                                if (x.hasOwnProperty("type") && "array" == x.type && (S = x.items.$ref),
                                                    (b = new RegExp(re.a.oasmodel(i),"ig")).test(S)) {
                                                    var T = RegExp.$1;
                                                    n || (-1 != a.indexOf(T) ? f.push({}) : (a.push(e),
                                                        f.push(s.findRefDefinition(T, t, n, a, r, i))))
                                                }
                                            }
                                        } else
                                            h.hasOwnProperty("$ref") ? (S = h.$ref,
                                            (b = new RegExp(re.a.oasmodel(i),"ig")).test(S) && (T = RegExp.$1,
                                            n || (-1 != a.indexOf(T) ? f = {} : (a.push(e),
                                                f = s.findRefDefinition(T, t, n, a, r, i))))) : f = {};
                                        u[d] = f
                                    }
                                }
                                o = u
                            } else
                                o = {}
                        }
                    s.currentInstance.definitionValues[e] = o
                }
                return o
            }
            ,
            Fe.prototype.methodCountAndDown = function(e) {
                var t = !1;
                if (this.currentInstance.pathArrs.forEach((function(n) {
                        n.method == e && (t = !0,
                            n.count = n.count + 1)
                    }
                )),
                    !t) {
                    var n = new Ze;
                    n.method = e,
                        n.count = 1,
                        this.currentInstance.pathArrs.push(n)
                }
            }
            ,
            Fe.prototype.getGlobalSecurityInfos = function() {
                var e = [];
                if (window.localStorage) {
                    var t = window.localStorage.SwaggerBootstrapUiSecuritys;
                    if (null != t && null != t && "" != t)
                        re.a.json5parse(t).forEach((function(t) {
                                e = e.concat(t.value)
                            }
                        ))
                }
                return e
            }
        ;
        var Ze = function() {
            this.method = "",
                this.count = 0
        };
        function We(e, t, n, a) {
            if (null != n && n.hasOwnProperty("properties")) {
                var r = new ut;
                if (r.name = n.name,
                !re.a.checkParamArrsExists(e.responseRefParameters, r) && (e.responseRefParameters.push(r),
                    n.hasOwnProperty("properties")))
                    n.properties.forEach((function(n) {
                            var i = new ht;
                            if (i.pid = a.id,
                                i.name = n.name,
                                i.type = n.type,
                                i.description = re.a.replaceMultipLineStr(n.description),
                                r.params.push(i),
                            !re.a.checkIsBasicType(n.refType) && (i.schemaValue = n.refType,
                                i.schema = !0,
                            a.name != i.name || a.schemaValue != n.refType)) {
                                var s = t.getDefinitionByName(n.refType, e.oas2);
                                null != s && We(e, t, s, i)
                            }
                        }
                    ))
            }
        }
        function Ye(e, t, n, a) {
            if (null != n && n.hasOwnProperty("properties")) {
                var r = new dt;
                if (r.name = n.name,
                    r.id = a.id,
                !_e(e.responseTreetableRefParameters, r) && (e.responseTreetableRefParameters.push(r),
                    n.hasOwnProperty("properties")))
                    n.properties.forEach((function(i) {
                            var s = new ht;
                            if (a.parentTypes.forEach((function(e) {
                                    s.parentTypes.push(e)
                                }
                            )),
                            i.hasOwnProperty("readOnly") && (s.readOnly = i.readOnly),
                                s.parentTypes.push(n.name),
                                s.pid = a.id,
                                s.name = i.name,
                                s.type = i.type,
                                s.description = re.a.replaceMultipLineStr(i.description),
                                s.example = i.example,
                                r.params.push(s),
                                re.a.checkIsBasicType(i.refType))
                                "array" == i.type && null != i.refType && null != i.refType && "" != i.refType && (s.schemaValue = i.refType);
                            else if (s.schemaValue = i.refType,
                                s.schema = !0,
                            a.name != s.name || a.schemaValue != i.refType) {
                                var o = t.getDefinitionByName(i.refType, e.oas2);
                                $e(s.parentTypes, i.refType) || Ye(e, t, o, s)
                            }
                        }
                    ))
            }
        }
        function Qe(e, t, n, a, r) {
            if (null != n)
                if (re.a.checkUndefined(t.currentInstance.refTreeTableModels[n.name])) {
                    var i = t.currentInstance.refTreeTableModels[n.name];
                    a.refTreetableparameters.push(i),
                        a.refTreetableModelsparameters.push(i)
                } else {
                    (i = new dt).name = n.name,
                        i.id = e.id;
                    var s = new dt;
                    if (s.name = n.name,
                        s.id = e.id,
                    !_e(a.refTreetableparameters, i) && (a.refTreetableparameters.push(i),
                        a.refTreetableModelsparameters.push(s),
                        n.hasOwnProperty("properties")))
                        n.properties.forEach((function(o) {
                                var l = e.ignoreFilterName + "." + o.name;
                                if (null == a.ignoreParameters || null != a.ignoreParameters && !a.ignoreParameters.hasOwnProperty(l)) {
                                    var c = new ht;
                                    if (c.pid = e.id,
                                        e.parentTypes.forEach((function(e) {
                                                c.parentTypes.push(e)
                                            }
                                        )),
                                        c.readOnly = o.readOnly,
                                        c.parentTypes.push(n.name),
                                        c.level = e.level + 1,
                                        c.name = o.name,
                                        c.ignoreFilterName = l,
                                        c.type = o.type,
                                    "array" != o.type && null != o.refType && null != o.refType && "" != o.refType && (c.type = o.refType),
                                        c.in = e.in,
                                        c.require = o.required,
                                        c.example = o.example,
                                        c.description = re.a.replaceMultipLineStr(o.description),
                                        t.validateJSR303(c, o.originProperty),
                                        s.params.push(c),
                                    o.readOnly || i.params.push(c),
                                    re.a.checkUndefined(o.refType) && !re.a.checkIsBasicType(o.refType)) {
                                        if (c.schemaValue = o.refType,
                                            c.schema = !0,
                                        e.name != c.name || e.schemaValue != o.refType) {
                                            var p = t.getDefinitionByName(o.refType, r);
                                            $e(c.parentTypes, o.refType) || Qe(c, t, p, a, r)
                                        }
                                    } else
                                        "array" == o.type && null != o.refType && null != o.refType && "" != o.refType && (c.schemaValue = o.refType)
                                }
                            }
                        ));
                    t.currentInstance.refTreeTableModels[n.name] = i
                }
        }
        function $e(e, t) {
            var n = !1;
            return e.forEach((function(e) {
                    e == t && (n = !0)
                }
            )),
                n
        }
        function _e(e, t) {
            var n = !1;
            return null != e && e.length > 0 && e.forEach((function(e) {
                    e.name == t.name && e.id == t.id && (n = !0)
                }
            )),
                n
        }
        var et = function(e, t) {
            this.id = e,
                this.name = t,
                this.data = new Array,
                this.random = parseInt(6 * Math.random() + 1, 10),
                this.modelClass = function() {
                    var e = "panel-default";
                    switch (this.random) {
                        case 1:
                        case 2:
                            e = "panel-success";
                            break;
                        case 3:
                            e = "panel-info";
                            break;
                        case 4:
                            e = "panel-warning";
                            break;
                        case 5:
                            e = "panel-danger";
                            break;
                        case 6:
                            e = "panel-default"
                    }
                    return e
                }
        }
            , tt = function() {
            this.oas2 = !1,
                this.code = null,
                this.description = null,
                this.schema = null,
                this.schemaTitle = null,
                this.refTreetableparameters = new Array,
                this.responseCodes = new Array,
                this.responseValue = null,
                this.responseJson = null,
                this.responseText = null,
                this.responseBasicType = !1,
                this.responseHeaderParameters = null,
                this.responseParameters = new Array,
                this.responseParameterRefName = "",
                this.responseRefParameters = new Array,
                this.responseTreetableRefParameters = new Array,
                this.responseDescriptionFind = function(e, t, n) {
                    this.responseDescriptions || (this.responseDescriptions = nt(this.responseParameters, n));
                    var a = e.join(">") + ">" + t;
                    return a = a.replace(/0>/g, ""),
                        this.responseDescriptions && this.responseDescriptions[a] ? this.responseDescriptions[a] : ""
                }
        }
            , nt = function e(t, n, a) {
            var r = {};
            if ("object" == Object(ie.a)(t) && Array.isArray(t))
                for (var i in t) {
                    var s = t[i];
                    if (null != a && null != a || (a = new Array),
                    "object" == Object(ie.a)(s)) {
                        var o, l = s.name;
                        if (r[l] = s.description,
                        s.schemaValue || s.refType) {
                            if (-1 == a.indexOf(s.schemaValue || s.refType)) {
                                a.push(s.schemaValue || s.refType);
                                var c = n.getDefinitionByName(s.schemaValue || s.refType);
                                c && c.properties && (o = e(c.properties, n, a))
                            }
                        } else
                            s.params && (o = e(s.params, n));
                        if (o)
                            for (var p in o)
                                r[l + ">" + p] = o[p]
                    }
                }
            return r
        }
            , at = function() {
            this.api = function(e) {
                var t = new Array;
                if (this.methods.length > 1) {
                    for (var n = null, a = 0; a < this.methods.length; a++)
                        this.methods[a].methodType == e && (n = this.methods[a]);
                    null == n && (n = this.methods[0]),
                        t.push(n)
                } else
                    t = t.concat(this.methods);
                return t
            }
                ,
                this.methods = new Array
        }
            , rt = function(e) {
            this.url = "",
                this.versionId = e,
                this.lastTime = new Date
        };
        function it(e) {
            this.id = e.id || "",
                this.name = e.name || "",
                this.cacheApis = [],
                this.updateApis = {}
        }
        var st = function() {
            this.init = !1,
                this.name = "",
                this.ignoreFilterName = null,
                this.schemaValue = null,
                this.id = "definition" + re.a.randomMd5(),
                this.pid = "-1",
                this.level = 1,
                this.childrenTypes = new Array,
                this.parentTypes = new Array,
                this.description = "",
                this.type = "",
                this.properties = new Array,
                this.value = null,
                this.required = new Array,
                this.title = "",
                this.refTreetableparameters = new Array,
                this.refTreetableModelsparameters = new Array
        }
            , ot = function() {
            this.key = "",
                this.type = "",
                this.in = "",
                this.name = "",
                this.value = "",
                this.id = "",
                this.schema = null
        }
            , lt = function() {
            this.basic = !0,
                this.name = "",
                this.type = "",
                this.refType = null,
                this.description = "",
                this.example = "",
                this.format = "",
                this.required = !1,
                this.value = null,
                this.property = null,
                this.originProperty = null,
                this.enum = null,
                this.readOnly = !1,
                this.validateStatus = !1,
                this.validateInstance = null,
                this.properties = new Array
        }
            , ct = function(e, t) {
            this.name = e,
                this.description = t,
                this.order = 2147483647,
                this.author = null,
                this.childrens = new Array,
                this.hasNew = !1,
                this.hasChanged = !1
        }
            , pt = function() {
            this.init = !1,
                this.oas2 = !0,
                this.openApiRaw = "",
                this.originalApiInfo = null,
                this.url = null,
                this.originalUrl = null,
                this.configurationDebugSupport = !0,
                this.showUrl = "",
                this.basePathFlag = !1,
                this.author = null,
                this.methodType = null,
                this.description = null,
                this.summary = null,
                this.consumes = null,
                this.operationId = null,
                this.produces = null,
                this.tags = null,
                this.contentType = "application/json",
                this.contentShowValue = "JSON(application/json)",
                this.contentMode = "Text",
                this.contentValue = "raw",
                this.parameters = new Array,
                this.parameterSize = 0,
                this.requestValue = null,
                this.xmlRequest = !1,
                this.refparameters = new Array,
                this.refTreetableparameters = new Array,
                this.refTreetableModelsparameters = new Array,
                this.reqParameters = new Array,
                this.responseCodes = new Array,
                this.responseHttpObject = null,
                this.getHttpSuccessCodeObject = function() {
                    if (null == this.responseHttpObject && null != this.responseCodes && this.responseCodes.length > 0) {
                        for (var e = null, t = 0; t < this.responseCodes.length; t++)
                            if ("200" == this.responseCodes[t].code) {
                                e = this.responseCodes[t];
                                break
                            }
                        this.responseHttpObject = e
                    }
                    return this.responseHttpObject
                }
                ,
                this.responseValue = null,
                this.responseJson = null,
                this.responseText = null,
                this.hasMoreExample = !1,
                this.responseTextArray = [],
                this.responseBasicType = !1,
                this.responseHeaderParameters = null,
                this.responseParameters = new Array,
                this.responseParameterRefName = "",
                this.responseRefParameters = new Array,
                this.responseTreetableRefParameters = new Array,
                this.id = "",
                this.versionId = "",
                this.order = 2147483647,
                this.hasNew = !1,
                this.hasChanged = !1,
                this.deprecated = !1,
                this.multipartResponseSchema = !1,
                this.multipartResponseSchemaCount = 0,
                this.hashCollections = [],
                this.ignoreParameters = null,
                this.includeParameters = null,
                this.instanceId = null,
                this.host = null,
                this.securityFlag = !1,
                this.securityKeys = null
        }
            , ut = function() {
            this.name = null,
                this.params = new Array
        }
            , dt = function() {
            this.init = !1,
                this.id = "",
                this.name = null,
                this.params = new Array,
                this.level = 1,
                this.childrenTypes = new Array
        }
            , ht = function() {
            this.name = null,
                this.ignoreFilterName = null,
                this.deprecated = !1,
                this.allowEmptyValue = !1,
                this.require = !1,
                this.type = null,
                this.in = null,
                this.schema = !1,
                this.schemaValue = null,
                this.value = null,
                this.validateStatus = !1,
                this.validateInstance = null,
                this.def = null,
                this.description = null,
                this.txtValue = null,
                this.enum = null,
                this.id = Ie()("param"),
                this.pid = "-1",
                this.level = 1,
                this.show = !0,
                this.readOnly = !1,
                this.example = null,
                this.childrenTypes = new Array,
                this.children = null,
                this.parentTypes = new Array
        };
        function ft(e, t, n) {
            this.swaggerData = null,
                this.oauths = null,
                this.openApiBaseInfo = {},
                this.id = "SwaggerBootstrapUiInstance" + oe()(e + t + n),
                this.load = !1,
                this.name = e,
                this.location = t,
                this.url = null,
                this.extUrl = null,
                re.a.strNotBlank(n) ? this.groupVersion = n : this.groupVersion = "2.0",
                this.allGroupIds = null,
                this.basePath = "",
                this.baseUrl = "",
                this.host = "",
                this.swagger = "",
                this.description = "",
                this.title = "",
                this.version = "",
                this.termsOfService = "",
                this.contact = "",
                this.difArrs = [],
                this.definitionValues = {},
                this.swaggerModelsDifinitions = [],
                this.swaggerTreeTableModels = {},
                this.refTreeTableModels = {},
                this.tags = [],
                this.paths = [],
                this.pathsDictionary = {},
                this.globalParameters = [],
                this.pathArrs = [],
                this.pathFilters = {},
                this.securityArrs = [],
                this.models = [],
                this.modelNames = [],
                this.modelArrs = [],
                this.groupId = oe()(e),
                this.firstLoad = !0,
                this.groupApis = [],
                this.cacheInstance = null,
                this.markdownFiles = [],
                this.i18n = null,
                this.header = null,
                this.basicAuth = null,
                this.servicePath = null,
                this.desktop = !1,
                this.desktopCode = null,
                this.tagSort = "order",
                this.operationSort = "order",
                this.contextPath = null
        }
        function mt(e) {
            this.id = "mdtag" + oe()(e),
                this.name = e,
                this.children = []
        }
        function gt(e) {
            this.id = "document-" + oe()(e),
                this.title = e,
                this.content = null
        }
        ft.prototype.clearOAuth2 = function() {
            if (!re.a.checkUndefined(this.oauths) && window.localStorage) {
                var e = "SELFOAuth" + this.id;
                window.localStorage.removeItem(e)
            }
        }
            ,
            ft.prototype.oas2 = function() {
                return !(re.a.strNotBlank(this.groupVersion) && this.groupVersion.indexOf("3") >= 0)
            }
            ,
            ft.prototype.getOASDefinitions = function() {
                var e = {}
                    , t = this.swaggerData;
                if (this.oas2())
                    re.a.checkUndefined(t) && t.hasOwnProperty("definitions") && re.a.checkUndefined(t.definitions) && (e = t.definitions);
                else if (re.a.checkUndefined(t) && t.hasOwnProperty("components")) {
                    var n = t.components;
                    if (re.a.checkUndefined(n) && n.hasOwnProperty("schemas")) {
                        var a = n.schemas;
                        re.a.checkUndefined(a) && (e = a)
                    }
                }
                return e
            }
            ,
            ft.prototype.getDefinitionByName = function(e, t) {
                var n = this
                    , a = null;
                return n.difArrs.forEach((function(r) {
                        if (r.name == e)
                            return r.init || (r.init = !0,
                                n.analysisDefinitionAsync(this.currentInstance.swaggerData, r, t)),
                                void (a = r)
                    }
                )),
                    a
            }
            ,
            ft.prototype.freeMemory = function() {
                this.difArrs = [],
                    this.definitionValues = {},
                    this.swaggerModelsDifinitions = [],
                    this.refTreeTableModels = {},
                    this.tags = [],
                    this.paths = [],
                    this.pathsDictionary = {},
                    this.globalParameters = [],
                    this.pathArrs = [],
                    this.pathFilters = {},
                    this.securityArrs = [],
                    this.models = [],
                    this.modelNames = [],
                    this.modelArrs = [],
                    this.firstLoad = !0,
                    this.groupApis = [],
                    this.cacheInstance = null,
                    this.markdownFiles = [],
                    this.i18n = null
            }
            ,
            Fe.prototype.log = function(e) {}
            ,
            Fe.prototype.ajax = function(e, t, n) {
                var a = qe.a.create();
                a.interceptors.response.use((function(e) {
                        return e.data
                    }
                ), (function(e) {
                        return Promise.reject(e)
                    }
                )),
                    a.request(e).then((function(e) {
                            t(e)
                        }
                    )).catch((function(e) {
                            n(e)
                        }
                    ))
            }
            ,
            Fe.prototype.error = function(e) {
                window.console && window.console.error(e)
            }
        ;
        var yt = Fe
            , vt = {
            name: "Contextmenu",
            props: {
                visible: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                itemList: {
                    type: Array,
                    required: !0,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    left: 0,
                    top: 0,
                    target: null,
                    selectedKeys: []
                }
            },
            computed: {
                style: function() {
                    return {
                        left: this.left + "px",
                        top: this.top + "px"
                    }
                }
            },
            created: function() {
                var e = this;
                window.addEventListener("mousedown", (function(t) {
                        return e.closeMenu(t)
                    }
                )),
                    window.addEventListener("contextmenu", (function(t) {
                            return e.setPosition(t)
                        }
                    ))
            },
            methods: {
                closeMenu: function(e) {
                    ["menuitemicon", "menuitem"].indexOf(e.target.getAttribute("role")) < 0 && this.$emit("update:visible", !1)
                },
                setPosition: function(e) {
                    this.left = e.clientX,
                        this.top = e.clientY,
                        this.target = e.target
                },
                handleClick: function(e) {
                    var t = e.key;
                    this.$emit("select", t, this.target),
                        this.$emit("update:visible", !1)
                }
            }
        }
            , bt = (n("b43e"),
            Object(M.a)(vt, (function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("a-menu", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible,
                            expression: "visible"
                        }],
                        staticClass: "contextmenu",
                        style: e.style,
                        attrs: {
                            selectedKeys: e.selectedKeys
                        },
                        on: {
                            click: e.handleClick
                        }
                    }, e._l(e.itemList, (function(t) {
                            return n("a-menu-item", {
                                key: t.key
                            }, [t.icon ? n("a-icon", {
                                attrs: {
                                    role: "menuitemicon",
                                    type: t.icon
                                }
                            }) : e._e(), e._v(e._s(t.text) + " ")], 1)
                        }
                    )), 1)
                }
            ), [], !1, null, "17acf4b2", null)).exports
            , wt = {
            name: "BasicLayout",
            components: {
                SiderMenu: J,
                GlobalHeader: $,
                GlobalFooter: ee,
                GlobalHeaderTab: ne,
                ContextMenu: bt,
                ThreeMenu: z
            },
            data: function() {
                return {
                    i18n: null,
                    logo: N,
                    documentTitle: "",
                    menuWidth: 320,
                    headerClass: "knife4j-header-width",
                    localMenuData: [],
                    collapsed: !1,
                    linkList: [],
                    panels: [],
                    panelIndex: 0,
                    activeKey: "",
                    newTabIndex: 0,
                    openKeys: [],
                    selectedKeys: [],
                    status: !1,
                    firstLoad: !0,
                    menuVisible: !1,
                    nextUrl: "",
                    nextKey: "",
                    menuItemList: []
                }
            },
            beforeCreate: function() {},
            created: function() {
                this.initKnife4jDemoDoc(),
                    this.initI18n()
            },
            computed: {
                currentUser: function() {
                    return this.$store.state.header.userCurrent
                },
                cacheMenuData: function() {
                    return this.$store.state.globals.currentMenuData
                },
                currentMenuData: function() {
                    return this.$store.state.globals.currentMenuData
                },
                language: function() {
                    return this.$store.state.globals.language
                },
                MenuData: function() {
                    return this.$store.state.globals.currentMenuData
                },
                swagger: function() {
                    return this.$store.state.globals.swagger
                },
                swaggerCurrentInstance: function() {
                    return this.$store.state.globals.swaggerCurrentInstance
                },
                serviceOptions: function() {
                    return this.$store.state.globals.serviceOptions
                },
                defaultServiceOption: function() {
                    return this.$store.state.globals.defaultServiceOption
                },
                settings: function() {
                    return this.$store.state.globals.settings
                }
            },
            updated: function() {
                this.openDefaultTabByPath()
            },
            beforeMount: function() {},
            mounted: function() {},
            watch: {
                $route: function() {
                    this.watchPathMenuSelect()
                },
                swaggerCurrentInstance: function() {
                    var e = this.swaggerCurrentInstance.title;
                    e || (e = "Knife4j 接口文档"),
                        this.documentTitle = e,
                        window.document.title = e
                },
                language: function(e, t) {
                    this.initI18n(),
                        this.updateMenuI18n()
                },
                MenuData: function() {
                    this.localMenuData = this.$store.state.globals.currentMenuData
                }
            },
            methods: {
                getCurrentI18nInstance: function() {
                    return this.i18n = this.$i18n.messages[this.language],
                        this.i18n
                },
                initI18n: function() {
                    this.getCurrentI18nInstance(),
                        this.menuItemList = this.i18n.menu.menuItemList
                },
                updateMenuI18n: function() {
                    var e = this;
                    re.a.arrNotEmpty(this.MenuData) && this.MenuData.forEach((function(t) {
                            re.a.checkUndefined(t.i18n) && (t.name = e.getCurrentI18nInstance().menu[t.i18n],
                            re.a.arrNotEmpty(t.children) && t.children.forEach((function(t) {
                                    re.a.checkUndefined(t.i18n) && (t.name = e.getCurrentI18nInstance().menu[t.i18n])
                                }
                            )))
                        }
                    ))
                },
                getPlusStatus: function() {
                    var e = !1;
                    return -1 != this.$route.path.indexOf("/plus") && (e = !0),
                        e
                },
                getI18nFromUrl: function() {
                    var e = this.$route.params
                        , t = !1
                        , n = "zh-CN";
                    if (re.a.checkUndefined(e)) {
                        var a = e.i18n;
                        if (re.a.checkUndefined(a)) {
                            ["zh-CN", "en-US"].includes(a) && (t = !0,
                                n = a)
                        }
                    }
                    return {
                        include: t,
                        i18n: n
                    }
                },
                getCacheSettings: function(e) {
                    var t = Y.a.defaultSettings
                        , n = Y.a.defaultPlusSettings
                        , a = null;
                    null != e && null != e && "" != e ? (this.plus && (e.enableSwaggerBootstrapUi = n.enableSwaggerBootstrapUi,
                        e.enableRequestCache = n.enableRequestCache),
                        a = Object.assign({}, t, e)) : a = this.plus ? n : t;
                    return a
                },
                getCacheGitVersion: function(e) {
                    var t = [];
                    return re.a.strNotBlank(e) && (t = e),
                        t
                },
                initSpringDocOpenApi: function() {
                    var e = this
                        , t = this
                        , n = this.getI18nFromUrl()
                        , a = n.i18n;
                    this.$localStore.getItem(Y.a.globalSettingsKey).then((function(r) {
                            var i = e.getCacheSettings(r);
                            i.enableSwaggerBootstrapUi || (i.enableSwaggerBootstrapUi = e.getPlusStatus()),
                                i.language = a,
                                t.$localStore.setItem(Y.a.globalSettingsKey, i),
                                e.$localStore.getItem(Y.a.globalGitApiVersionCaches).then((function(r) {
                                        var s = e.getCacheGitVersion(r);
                                        n.include ? (e.$store.dispatch("globals/setLang", a),
                                            e.$localStore.setItem(Y.a.globalI18nCache, a),
                                            e.$i18n.locale = a,
                                            e.enableVersion = i.enableVersion,
                                            e.initSwagger({
                                                springdoc: !0,
                                                baseSpringFox: !0,
                                                store: e.$store,
                                                localStore: e.$localStore,
                                                settings: i,
                                                cacheApis: s,
                                                routeParams: t.$route.params,
                                                plus: e.getPlusStatus(),
                                                i18n: a,
                                                i18nVue: e.$i18n,
                                                i18nFlag: n.include,
                                                configSupport: !1,
                                                i18nInstance: e.getCurrentI18nInstance()
                                            })) : e.$localStore.getItem(Y.a.globalI18nCache).then((function(r) {
                                                re.a.checkUndefined(r) && (e.$store.dispatch("globals/setLang", r),
                                                    a = r),
                                                    e.$i18n.locale = a,
                                                    e.enableVersion = i.enableVersion,
                                                    e.initSwagger({
                                                        springdoc: !0,
                                                        baseSpringFox: !0,
                                                        store: e.$store,
                                                        localStore: e.$localStore,
                                                        settings: i,
                                                        cacheApis: s,
                                                        routeParams: t.$route.params,
                                                        plus: e.getPlusStatus(),
                                                        i18n: a,
                                                        i18nVue: e.$i18n,
                                                        i18nFlag: n.include,
                                                        configSupport: !1,
                                                        i18nInstance: e.getCurrentI18nInstance()
                                                    })
                                            }
                                        ))
                                    }
                                ))
                        }
                    ))
                },
                initKnife4jSpringUi: function() {
                    var e = this
                        , t = this
                        , n = this.getI18nFromUrl()
                        , a = n.i18n;
                    this.$localStore.getItem(Y.a.globalSettingsKey).then((function(r) {
                            var i = e.getCacheSettings(r);
                            i.enableSwaggerBootstrapUi || (i.enableSwaggerBootstrapUi = e.getPlusStatus()),
                                i.language = a,
                                t.$localStore.setItem(Y.a.globalSettingsKey, i),
                                e.$localStore.getItem(Y.a.globalGitApiVersionCaches).then((function(r) {
                                        var s = e.getCacheGitVersion(r);
                                        n.include ? (e.$store.dispatch("globals/setLang", a),
                                            e.$localStore.setItem(Y.a.globalI18nCache, a),
                                            e.$i18n.locale = a,
                                            e.enableVersion = i.enableVersion,
                                            e.initSwagger({
                                                baseSpringFox: !0,
                                                store: e.$store,
                                                localStore: e.$localStore,
                                                settings: i,
                                                cacheApis: s,
                                                routeParams: t.$route.params,
                                                plus: e.getPlusStatus(),
                                                i18n: a,
                                                i18nVue: e.$i18n,
                                                i18nFlag: n.include,
                                                configSupport: !1,
                                                desktop: !0,
                                                i18nInstance: e.getCurrentI18nInstance()
                                            })) : e.$localStore.getItem(Y.a.globalI18nCache).then((function(r) {
                                                re.a.checkUndefined(r) && (e.$store.dispatch("globals/setLang", r),
                                                    a = r),
                                                    e.$i18n.locale = a,
                                                    e.enableVersion = i.enableVersion,
                                                    e.initSwagger({
                                                        baseSpringFox: !0,
                                                        store: e.$store,
                                                        localStore: e.$localStore,
                                                        settings: i,
                                                        cacheApis: s,
                                                        routeParams: t.$route.params,
                                                        plus: e.getPlusStatus(),
                                                        i18n: a,
                                                        i18nVue: e.$i18n,
                                                        i18nFlag: n.include,
                                                        configSupport: !1,
                                                        desktop: !0,
                                                        i18nInstance: e.getCurrentI18nInstance()
                                                    })
                                            }
                                        ))
                                    }
                                ))
                        }
                    ))
                },
                initKnife4jDemoDoc: function() {
                    var e = this
                        , t = this
                        , n = this.getI18nFromUrl()
                        , a = n.i18n;
                    this.$localStore.getItem(Y.a.globalSettingsKey).then((function(r) {
                            var i = e.getCacheSettings(r);
                            i.enableSwaggerBootstrapUi || (i.enableSwaggerBootstrapUi = e.getPlusStatus()),
                                i.language = a,
                                t.$localStore.setItem(Y.a.globalSettingsKey, i),
                                e.$localStore.getItem(Y.a.globalGitApiVersionCaches).then((function(r) {
                                        var s = e.getCacheGitVersion(r);
                                        if (n.include) {
                                            e.$store.dispatch("globals/setLang", a),
                                                e.$localStore.setItem(Y.a.globalI18nCache, a),
                                                e.$i18n.locale = a,
                                                e.enableVersion = i.enableVersion;
                                            window.location,
                                                re.a.getLocationParams("code");
                                            e.initSwagger({
                                                url: "/knife4j/openapi.json",
                                                baseSpringFox: !0,
                                                store: e.$store,
                                                localStore: e.$localStore,
                                                settings: i,
                                                cacheApis: s,
                                                routeParams: t.$route.params,
                                                plus: e.getPlusStatus(),
                                                i18n: a,
                                                i18nVue: e.$i18n,
                                                i18nFlag: n.include,
                                                configSupport: !1,
                                                desktop: !0,
                                                i18nInstance: e.getCurrentI18nInstance()
                                            })
                                        } else
                                            e.$localStore.getItem(Y.a.globalI18nCache).then((function(r) {
                                                    re.a.checkUndefined(r) && (e.$store.dispatch("globals/setLang", r),
                                                        a = r),
                                                        e.$i18n.locale = a,
                                                        e.enableVersion = i.enableVersion;
                                                    window.location,
                                                        re.a.getLocationParams("code");
                                                    e.initSwagger({
                                                        url: "/knife4j/openapi.json",
                                                        baseSpringFox: !0,
                                                        store: e.$store,
                                                        localStore: e.$localStore,
                                                        settings: i,
                                                        cacheApis: s,
                                                        routeParams: t.$route.params,
                                                        plus: e.getPlusStatus(),
                                                        i18n: a,
                                                        i18nVue: e.$i18n,
                                                        i18nFlag: n.include,
                                                        configSupport: !1,
                                                        desktop: !0,
                                                        i18nInstance: e.getCurrentI18nInstance()
                                                    })
                                                }
                                            ))
                                    }
                                ))
                        }
                    ))
                },
                initKnife4jJFinal: function() {
                    var e = this
                        , t = this
                        , n = this.getI18nFromUrl()
                        , a = n.i18n;
                    this.$localStore.getItem(Y.a.globalSettingsKey).then((function(r) {
                            var i = e.getCacheSettings(r);
                            i.enableSwaggerBootstrapUi || (i.enableSwaggerBootstrapUi = e.getPlusStatus()),
                                i.language = a,
                                t.$localStore.setItem(Y.a.globalSettingsKey, i),
                                e.$localStore.getItem(Y.a.globalGitApiVersionCaches).then((function(r) {
                                        var s = e.getCacheGitVersion(r);
                                        n.include ? (e.$store.dispatch("globals/setLang", a),
                                            e.$localStore.setItem(Y.a.globalI18nCache, a),
                                            e.$i18n.locale = a,
                                            e.enableVersion = i.enableVersion,
                                            e.initSwagger({
                                                baseSpringFox: !0,
                                                store: e.$store,
                                                localStore: e.$localStore,
                                                settings: i,
                                                cacheApis: s,
                                                routeParams: t.$route.params,
                                                plus: e.getPlusStatus(),
                                                i18n: a,
                                                url: "jf-swagger/swagger-resources",
                                                i18nVue: e.$i18n,
                                                i18nFlag: n.include,
                                                configSupport: !1,
                                                i18nInstance: e.getCurrentI18nInstance()
                                            })) : e.$localStore.getItem(Y.a.globalI18nCache).then((function(r) {
                                                re.a.checkUndefined(r) && (e.$store.dispatch("globals/setLang", r),
                                                    a = r),
                                                    e.$i18n.locale = a,
                                                    e.enableVersion = i.enableVersion,
                                                    e.initSwagger({
                                                        baseSpringFox: !0,
                                                        store: e.$store,
                                                        localStore: e.$localStore,
                                                        settings: i,
                                                        cacheApis: s,
                                                        routeParams: t.$route.params,
                                                        plus: e.getPlusStatus(),
                                                        i18n: a,
                                                        url: "jf-swagger/swagger-resources",
                                                        i18nVue: e.$i18n,
                                                        i18nFlag: n.include,
                                                        configSupport: !1,
                                                        i18nInstance: e.getCurrentI18nInstance()
                                                    })
                                            }
                                        ))
                                    }
                                ))
                        }
                    ))
                },
                initKnife4jFront: function() {
                    var e = this.getI18nFromUrl().i18n
                        , t = {
                        store: this.$store,
                        localStore: this.$localStore,
                        routeParams: this.$route.params,
                        plus: this.getPlusStatus(),
                        i18n: e,
                        configSupport: !1,
                        i18nInstance: this.getCurrentI18nInstance(),
                        url: "/services.json"
                    };
                    this.initSwagger(t)
                },
                initSwagger: function(e) {
                    this.i18n = e.i18nInstance;
                    var t = new yt(e);
                    try {
                        t.main(),
                            this.$store.dispatch("globals/setSwagger", t)
                    } catch (e) {}
                    this.$store.dispatch("header/getCurrentUser")
                },
                mouseMiddleCloseTab: function(e) {},
                searchClear: function() {
                    this.localMenuData = this.currentMenuData
                },
                searchKey: function(e) {
                    if (re.a.strNotBlank(e)) {
                        var t = []
                            , n = ".*?" + e + ".*";
                        this.cacheMenuData.forEach((function(e) {
                                if (re.a.arrNotEmpty(e.children)) {
                                    var a = [];
                                    if (e.children.forEach((function(e) {
                                            var t = re.a.searchMatch(n, e.url)
                                                , r = re.a.searchMatch(n, e.name)
                                                , i = re.a.searchMatch(n, e.description);
                                            (t || r || i) && a.push(e)
                                        }
                                    )),
                                    a.length > 0) {
                                        var r = {
                                            groupName: e.groupName,
                                            groupId: e.groupId,
                                            key: e.key,
                                            name: e.name,
                                            icon: e.icon,
                                            path: e.path,
                                            hasNew: e.hasNew,
                                            authority: e.authority,
                                            children: a
                                        };
                                        0 == t.filter((function(e) {
                                                return e.key === r.key
                                            }
                                        )).length && t.push(r)
                                    }
                                }
                            }
                        )),
                            this.localMenuData = t
                    }
                },
                serviceChange: function(e, t) {
                    var n = this
                        , a = this.swagger.selectInstanceByGroupId(e);
                    this.swagger.analysisApi(a),
                        this.$store.dispatch("globals/setDefaultService", e),
                        setTimeout((function() {
                                n.updateMainTabInstance()
                            }
                        ), 500)
                },
                onMenuSelect: function(e, t) {
                    var n = this.getPageKey(t);
                    switch (e) {
                        case "1":
                            this.closeLeft(n);
                            break;
                        case "2":
                            this.closeRight(n);
                            break;
                        case "3":
                            this.closeOthers(n)
                    }
                },
                onContextmenu: function(e) {
                    null !== this.getPageKey(e.target) && (e.preventDefault(),
                        this.menuVisible = !0)
                },
                getPageKey: function(e, t) {
                    if ((t = t || 0) > 2)
                        return null;
                    var n = e.getAttribute("pagekey");
                    return (n = n || (e.previousElementSibling ? e.previousElementSibling.getAttribute("pagekey") : null)) || (e.firstElementChild ? this.getPageKey(e.firstElementChild, ++t) : null)
                },
                closeOthers: function(e) {
                    this.linkList = ["kmain", e];
                    var t = [];
                    this.panels.forEach((function(n) {
                            "kmain" != n.key && n.key != e || t.push(n)
                        }
                    )),
                        this.panels = t,
                        this.activeKey = e
                },
                closeLeft: function(e) {
                    if (this.linkList.length > 2) {
                        var t = this.linkList.indexOf(e)
                            , n = this.linkList.slice(t)
                            , a = ["kmain"].concat(n);
                        this.linkList = a;
                        var r = this.panels[0]
                            , i = [];
                        i.push(r);
                        var s = this.panels.slice(t);
                        this.panels = i.concat(s),
                            this.activeKey = e
                    }
                },
                closeRight: function(e) {
                    this.activeKey = e;
                    for (var t = this.linkList.indexOf(e), n = [], a = [], r = this.linkList, i = this.panels, s = 0; s <= t; s++)
                        n.push(r[s]),
                            a.push(i[s]);
                    this.linkList = n,
                        this.panels = a
                },
                childrenEmitMethod: function(e, t) {
                    this[e](t)
                },
                addGlobalParameters: function(e) {
                    this.swaggerCurrentInstance.globalParameters.push(e)
                },
                getDefaultBrowserPath: function() {
                    var e = this.$route.path;
                    return e.startWith("/plus") && (e = "/plus"),
                    e.startWith("/home") && (e = "/home"),
                    "/plus" == e && (e = "/home"),
                        e
                },
                openFirstTabMenu: function() {
                    this.firstLoad && (this.firstLoad = !1,
                        this.watchPathMenuSelect())
                },
                openDefaultTabByPath: function() {
                    var e = this.panels
                        , t = this.getDefaultBrowserPath();
                    if (this.nextUrl === t)
                        return !1;
                    var n = K(t, this.swagger.globalMenuDatas);
                    if (null != (n = K(t, this.swagger.globalMenuDatas))) {
                        0 == this.panels.filter((function(e) {
                                return "kmain" == e.key
                            }
                        )) && (e.push({
                            title: this.getCurrentI18nInstance().menu.home,
                            component: "Main",
                            content: "Main",
                            key: "kmain",
                            instance: this.swaggerCurrentInstance,
                            closable: !1
                        }),
                            this.linkList.push("kmain"));
                        var a = !1;
                        -1 == e.map((function(e) {
                                return e.key
                            }
                        )).indexOf(n.key) && (e.push({
                            title: n.tabName ? n.tabName : n.name,
                            content: n.component,
                            key: n.key,
                            instance: this.swaggerCurrentInstance,
                            closable: "kmain" != n.key
                        }),
                            this.linkList.push(n.key),
                            this.panels = e,
                            a = !0),
                            this.activeKey = n.key,
                            this.nextUrl = t,
                            this.nextKey = n.key,
                            this.freePanelMemory(this.activeKey),
                        a && this.openFirstTabMenu()
                    } else
                        this.activeKey = "kmain",
                            this.nextKey = "kmain",
                            this.updateMainTabInstance(),
                            this.freePanelMemory(this.activeKey)
                },
                freePanelMemory: function(e) {
                    var t = this;
                    this.panels.forEach((function(n) {
                            n.key == e ? n.instance = t.swaggerCurrentInstance : n.instance = null
                        }
                    ))
                },
                updateMainTabInstance: function() {
                    var e = this;
                    e.panels.forEach((function(t) {
                            "kmain" == t.key && (t.instance = e.swaggerCurrentInstance)
                        }
                    ))
                },
                watchPathMenuSelect: function() {
                    var e = this.$route.path
                        , t = this.collapsed
                        , n = U(e)
                        , a = K(e, this.MenuData);
                    if (!t)
                        if (2 == n.length) {
                            var r = K(n[0], this.MenuData);
                            null != r && (this.openKeys = [r.key])
                        } else
                            3 == n.length ? null != (r = K(n[1], this.MenuData)) && (this.openKeys = [r.key]) : null != a && (this.openKeys = [a.key]);
                    null != a && (this.selectedKeys = [a.key])
                },
                selectDefaultMenu: function() {
                    var e = this.$route.path
                        , t = U(e)
                        , n = K(e, this.MenuData);
                    if (2 == t.length) {
                        var a = K(t[0], this.MenuData);
                        null != a && (this.openKeys = [a.key])
                    } else
                        this.openKeys = [n.key];
                    null != n && null != n && (this.selectedKeys = [n.key])
                },
                menuClick: function(e) {
                    var t = this.panels
                        , n = this.panels.map((function(e) {
                            return e.key
                        }
                    ))
                        , a = G(e, this.MenuData);
                    null != a ? (-1 == n.indexOf(a.key) && (t.push({
                        title: a.name,
                        content: a.component,
                        key: a.key,
                        closable: !0
                    }),
                        this.linkList.push(a.key),
                        this.panels = t),
                        this.activeKey = a.key) : (this.activeKey = "kmain",
                        this.updateMainTabInstance())
                },
                tabEditCallback: function(e, t) {
                    this[t](e)
                },
                tabChange: function(e) {
                    var t = G(e, this.swagger.globalMenuDatas);
                    if (null != t) {
                        var n = t.path;
                        this.$router.push({
                            path: n
                        })
                    } else
                        this.$router.push({
                            path: "/"
                        })
                },
                remove: function(e) {
                    var t, n = this.activeKey, a = e == n;
                    this.panels.forEach((function(n, a) {
                            n.key === e && (t = a - 1)
                        }
                    ));
                    var r = this.panels.filter((function(t) {
                            return t.key !== e
                        }
                    ));
                    r.length && n === e && (n = t >= 0 ? r[t].key : r[0].key),
                        this.panels = r,
                        this.activeKey = n,
                    a && this.tabChange(n)
                },
                handleMenuCollapse: function(e) {
                    var t = this
                        , n = this.collapsed;
                    this.collapsed = !n,
                        this.selectDefaultMenu(),
                        setTimeout((function() {
                                n ? (t.headerClass = "knife4j-header-width",
                                    t.menuWidth = 320) : (t.headerClass = "knife4j-header-width-collapsed",
                                    t.menuWidth = 80)
                            }
                        ), 10)
                },
                handleOpenChange: function(e) {
                    var t;
                    e.length > 1 ? (t = e.length > 2 ? [e[e.length - 1]] : e[1].indexOf(e[0]) > -1 ? [e[0], e[1]] : [e[e.length - 1]],
                        this.openKeys = t) : this.openKeys = e
                },
                selected: function(e) {
                    e.item,
                        e.key;
                    var t = e.selectedKeys;
                    this.selectedKeys = t
                },
                collapsedChange: function(e, t) {}
            }
        }
            , kt = Object(M.a)(wt, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "BasicLayout"
                }, [n("a-layout", {
                    staticClass: "ant-layout-has-sider"
                }, [n("a-layout-sider", {
                    staticClass: "sider",
                    staticStyle: {
                        background: "#1e282c"
                    },
                    attrs: {
                        trigger: null,
                        collapsible: "",
                        collapsed: e.collapsed,
                        breakpoint: "lg",
                        width: e.menuWidth
                    },
                    on: {
                        collapse: e.handleMenuCollapse
                    }
                }, [!e.collapsed && e.settings.enableGroup ? n("div", {
                    key: "logo",
                    staticClass: "knife4j-logo-data"
                }, [n("a", {
                    staticStyle: {
                        float: "left"
                    },
                    attrs: {
                        to: "/"
                    }
                }, [n("a-select", {
                    staticStyle: {
                        width: "300px"
                    },
                    attrs: {
                        "show-search": "",
                        value: e.defaultServiceOption,
                        options: e.serviceOptions,
                        optionFilterProp: "children"
                    },
                    on: {
                        change: e.serviceChange
                    }
                })], 1)]) : e._e(), e.collapsed && e.settings.enableGroup ? n("div", {
                    key: "logo",
                    staticClass: "knife4j-logo"
                }, [e.collapsed ? n("a", {
                    staticStyle: {
                        float: "left"
                    },
                    attrs: {
                        to: "/"
                    }
                }, [n("img", {
                    attrs: {
                        src: e.logo,
                        alt: "logo"
                    }
                })]) : e._e()]) : e._e(), n("div", {
                    class: e.settings.enableGroup ? "knife4j-menu" : "knife4j-menu-all"
                }, [n("a-menu", {
                    key: "Menu",
                    staticStyle: {
                        padding: "2px 0",
                        width: "100%"
                    },
                    attrs: {
                        theme: "dark",
                        mode: "inline",
                        inlineCollapsed: e.collapsed,
                        openKeys: e.openKeys,
                        selectedKeys: e.selectedKeys
                    },
                    on: {
                        openChange: e.handleOpenChange,
                        select: e.selected
                    }
                }, [n("ThreeMenu", {
                    attrs: {
                        menuData: e.localMenuData,
                        collapsed: e.collapsed
                    }
                })], 1)], 1)]), n("a-layout", [n("a-layout-header", {
                    staticStyle: {
                        padding: "0",
                        background: "#fff",
                        height: "56px",
                        "line-height": "56px"
                    }
                }, [n("GlobalHeader", {
                    attrs: {
                        documentTitle: e.documentTitle,
                        collapsed: e.collapsed,
                        headerClass: e.headerClass,
                        currentUser: e.currentUser,
                        onCollapse: e.handleMenuCollapse,
                        onMenuClick: function(t) {
                            return e.handleMenuClick(t)
                        }
                    },
                    on: {
                        searchKey: e.searchKey,
                        searchClear: e.searchClear
                    }
                })], 1), n("context-menu", {
                    attrs: {
                        itemList: e.menuItemList,
                        visible: e.menuVisible
                    },
                    on: {
                        "update:visible": function(t) {
                            e.menuVisible = t
                        },
                        select: e.onMenuSelect
                    }
                }), n("a-tabs", {
                    staticClass: "knife4j-tab",
                    attrs: {
                        hideAdd: "",
                        type: "editable-card"
                    },
                    on: {
                        change: e.tabChange,
                        edit: e.tabEditCallback
                    },
                    nativeOn: {
                        contextmenu: function(t) {
                            return function(t) {
                                return e.onContextmenu(t)
                            }
                                .apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.activeKey,
                        callback: function(t) {
                            e.activeKey = t
                        },
                        expression: "activeKey"
                    }
                }, e._l(e.panels, (function(t) {
                        return n("a-tab-pane", {
                            key: t.key,
                            attrs: {
                                closable: t.closable
                            }
                        }, [n("span", {
                            attrs: {
                                slot: "tab",
                                pagekey: t.key
                            },
                            slot: "tab"
                        }, [e._v(e._s(t.title))]), n(t.content, {
                            tag: "component",
                            attrs: {
                                data: t
                            },
                            on: {
                                childrenMethods: e.childrenEmitMethod
                            }
                        })], 1)
                    }
                )), 1), n("a-layout-footer", {
                    staticStyle: {
                        padding: "0"
                    }
                }, [n("GlobalFooter")], 1)], 1)], 1)], 1)
            }
        ), [], !1, null, "21f3b5d7", null).exports;
        C.a.use(D.a);
        var xt = [{
            path: "/",
            name: "home",
            component: kt,
            redirect: "/home",
            children: [{
                path: "/home",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "121c"))
                }
            }, {
                path: "/home/:i18n",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "121c"))
                }
            }, {
                path: "/plus",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "121c"))
                }
            }, {
                path: "/plus/:i18n",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "121c"))
                }
            }, {
                path: "/Authorize/:groupName",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "0556"))
                }
            }, {
                path: "/:groupName/:controller/:summary",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "9737"))
                }
            }, {
                path: "/SwaggerModels/:groupName",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "f3b8"))
                }
            }, {
                path: "/documentManager/GlobalParameters-:groupName",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "ede0"))
                }
            }, {
                path: "/documentManager/OfficelineDocument-:groupName",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "3cd9"))
                }
            }, {
                path: "/documentManager/Settings",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "ee09"))
                }
            }, {
                path: "/:groupName-:mdid-omd/:id",
                component: function() {
                    return Promise.resolve().then(n.bind(null, "924a"))
                }
            }]
        }, {
            path: "/oauth2",
            name: "oauth2",
            component: function() {
                return n.e("chunk-2d0da532").then(n.bind(null, "6ab3"))
            }
        }]
            , St = new D.a({
            routes: xt
        })
            , Tt = n("2f62")
            , It = {
            namespaced: !0,
            state: {
                userCurrent: {}
            },
            mutations: {
                SetCurrentUser: function(e) {
                    e.userCurrent = {
                        name: "八一菜刀",
                        avatar: ""
                    }
                }
            },
            actions: {
                getCurrentUser: function(e) {
                    (0,
                        e.commit)("SetCurrentUser")
                }
            }
        }
            , Pt = {
            namespaced: !0,
            state: {
                menuData: [],
                language: "zh-CN",
                swagger: null,
                swaggerCurrentInstance: null,
                enableVersion: !1,
                enableAfterScript: !0,
                enableResponseCode: !0,
                enableReloadCacheParameter: !1,
                currentMenuData: [],
                serviceOptions: [],
                settings: {},
                defaultServiceOption: ""
            },
            mutations: {
                setMenuData: function(e, t) {
                    var n = e.menuData.concat(t);
                    e.menuData = n,
                        e.currentMenuData = t
                },
                setCurrentMenuData: function(e, t) {
                    e.currentMenuData = t
                },
                setLang: function(e, t) {
                    e.language = t
                },
                setSwagger: function(e, t) {
                    e.swagger = t
                },
                setSwaggerInstance: function(e, t) {
                    e.swaggerCurrentInstance = t
                },
                setServiceOptions: function(e, t) {
                    e.serviceOptions = t
                },
                setDefaultService: function(e, t) {
                    e.defaultServiceOption = t
                },
                setGitVersion: function(e, t) {
                    e.enableVersion = t
                },
                setAfterScript: function(e, t) {
                    e.enableAfterScript = t
                },
                setResponseCode: function(e, t) {
                    e.enableResponseCode = t
                },
                setReloadCacheParameter: function(e, t) {
                    e.enableReloadCacheParameter = t
                },
                setSettings: function(e, t) {
                    e.settings = t
                }
            },
            actions: {
                setSettings: function(e, t) {
                    (0,
                        e.commit)("setSettings", t)
                },
                setReloadCacheParameter: function(e, t) {
                    (0,
                        e.commit)("setReloadCacheParameter", t)
                },
                setAfterScript: function(e, t) {
                    (0,
                        e.commit)("setAfterScript", t)
                },
                setResponseCode: function(e, t) {
                    (0,
                        e.commit)("setResponseCode", t)
                },
                setGitVersion: function(e, t) {
                    (0,
                        e.commit)("setGitVersion", t)
                },
                setMenuData: function(e, t) {
                    (0,
                        e.commit)("setMenuData", t)
                },
                setCurrentMenuData: function(e, t) {
                    (0,
                        e.commit)("setCurrentMenuData", t)
                },
                setLang: function(e, t) {
                    (0,
                        e.commit)("setLang", t)
                },
                setSwagger: function(e, t) {
                    (0,
                        e.commit)("setSwagger", t)
                },
                setSwaggerInstance: function(e, t) {
                    (0,
                        e.commit)("setSwaggerInstance", t)
                },
                setServiceOptions: function(e, t) {
                    (0,
                        e.commit)("setServiceOptions", t)
                },
                setDefaultService: function(e, t) {
                    (0,
                        e.commit)("setDefaultService", t)
                }
            }
        };
        C.a.use(Tt.a);
        var jt = new Tt.a.Store({
            modules: {
                header: It,
                globals: Pt
            }
        })
            , Ct = (n("2ee0"),
                function() {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.show,
                            expression: "show"
                        }],
                        staticClass: "knife4j-loading-container"
                    }, [n("div", {
                        staticClass: "knife4j-loading-mask"
                    }), n("div", {
                        staticClass: "knife4j-loading-content"
                    }, [n("div", {
                        staticClass: "knife4j-loading-animate"
                    }), n("div", {
                        staticClass: "knife4j-loading-text"
                    }, [e._v(e._s(e.text))])])])
                }
        )
            , Ot = {
            props: {
                show: Boolean,
                text: {
                    type: String,
                    default: "正在加载中..."
                }
            }
        }
            , At = (n("15eb"),
            Object(M.a)(Ot, Ct, [], !1, null, "78e38ee1", null)).exports
            , Vt = new (C.a.extend(At))({
            el: document.createElement("div")
        });
        Vt.show = !1;
        var Et = {
            show: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Vt.show = !0,
                e && (document.body.append(Vt.$el),
                    Vt.text = e.text)
            },
            destroy: function() {
                Vt.show = !1
            }
        }
            , Mt = {
            install: function() {
                C.a.$kloading || (C.a.$kloading = Et),
                    C.a.mixin({
                        created: function() {
                            this.$kloading = C.a.$kloading
                        }
                    })
            }
        }
            , Rt = n("a925")
            , Dt = n("121c")
            , Nt = !function(e) {
            var t, n = '<svg><symbol id="icon-modeling" viewBox="0 0 1024 1024"><path d="M934.368 283.376l0 457.248L513.936 1008 89.632 740.624 89.632 283.376 513.936 16 934.368 283.376zM891.744 306.624 513.936 68.32 132.256 306.624l0 410.752L513.936 955.68l377.808-238.32L891.744 306.624zM205.872 300.816c21.968 0 37.456 8.4 46.496 25.184l513.44 0c7.744-16.784 22.544-25.184 44.56-25.184 25.824 0 43.856 14.848 54.256 44.56 0 16.784-4.576 31.008-13.568 42.624-9.04 11.632-22.608 17.44-40.688 17.44-14.272 0-25.888-4.528-34.88-13.568L275.632 668.944c0 14.208-5.168 26.48-15.504 36.816-10.384 10.336-22.608 15.504-36.816 15.504-15.504 0-28.416-4.848-38.752-14.528-10.352-9.68-15.504-21.648-15.504-35.84 0-10.336 2.912-19.696 8.72-28.096s12.592-15.168 20.336-20.336l-11.632-220.88c-21.984-10.336-32.944-27.12-32.944-50.368 0-14.208 5.136-26.16 15.504-35.84C179.392 305.664 191.648 300.816 205.872 300.816zM256.256 370.56c-6.512 12.912-15.504 22.608-27.12 29.056l13.568 220.88c2.592 0 4.848 0.64 6.784 1.936s4.144 2.576 6.784 3.872L727.056 370.56 256.256 370.56zM389.936 506.192c-14.272-1.296-25.504-7.104-33.904-17.44-8.448-10.336-12.592-21.968-12.592-34.88 0-14.208 4.528-26.48 13.568-36.816 8.992-10.336 22.544-15.504 40.688-15.504l5.808-19.376 48.432 0-13.568 36.816c6.464 10.336 9.68 21.312 9.68 32.944 0 18.08-5.168 31.008-15.504 38.752l5.808 23.248-38.752 21.312L389.936 506.192zM761.936 597.248c14.208 0 25.184 5.168 32.944 15.504s11.632 22.608 11.632 36.816-4.208 26.48-12.592 36.816c-8.448 10.336-21.648 15.504-39.712 15.504-7.744 0-15.504-1.936-23.248-5.808l-168.56 124c0 2.576 0.272 4.848 0.976 6.784 0.64 1.936 0.976 3.552 0.976 4.848 0 14.208-5.168 26.8-15.504 37.776-10.384 10.992-22.608 16.464-36.816 16.464-15.504 0-28.416-5.488-38.752-16.464-10.384-10.992-15.504-23.584-15.504-37.776 0-16.8 6.464-29.696 19.376-38.752l-58.128-193.744 38.752-19.376 60.064 199.568c7.744 0 14.208 2.576 19.376 7.744l166.624-125.936c0-10.336 0.64-19.696 1.936-28.096 1.232-8.384 5.104-15.168 11.632-20.336l-67.808-135.632 38.752-21.312L761.936 597.248zM512 116.752c14.208 0 26.416 5.168 36.816 15.504 10.336 10.336 15.504 22.608 15.504 36.816 0 9.04-3.232 18.72-9.68 29.056l60.064 116.256L564.32 314.384c-6.512-12.912-13.888-28.736-22.288-47.472-8.448-18.72-17.76-33.264-28.096-43.6l-36.816 91.056-44.56 0 40.688-108.496c-10.384-9.04-15.504-21.312-15.504-36.816 0-14.208 4.848-26.48 14.528-36.816S495.216 116.752 512 116.752zM616.624 417.056l-17.44-34.88 50.368 0 5.808 15.504L616.624 417.056z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M62.900896 424.812249l391.020899-306.640062c33.433712-26.454357 85.818613-26.421844 119.20175 0l388.055034 306.697862c13.25066 10.501545 15.515699 29.763409 5.053891 43.017682-10.476258 13.257885-29.763409 15.526536-43.024907 5.053891l-12.553447-9.927157 0 370.790884c0 52.572751-54.472927 91.851492-103.212813 91.851492L195.078755 925.65684c-48.132985 0-80.497396-36.92339-80.497396-91.851492L114.581359 462.096888l-13.864785 10.87002c-5.639117 4.407253-12.249996 6.527792-18.864489 6.52418-9.092669 0-18.095026-4.006265-24.127905-11.726184C47.284047 454.481733 49.614111 435.227094 62.900896 424.812249L62.900896 424.812249zM420.759021 800.498074l0 63.930459 183.71021 0 0-171.395188c0-35.615664-28.751909-73.915417-91.855105-73.915417-63.135709 0-91.855105 38.299753-91.855105 73.915417L420.759021 800.498074 420.759021 800.498074z"  ></path></symbol><symbol id="icon-authenticationsystem" viewBox="0 0 1024 1024"><path d="M512 1024C229.376 1024 0 794.624 0 512 0 229.376 229.376 0 512 0c282.624 0 512 229.376 512 512C1024 794.624 794.624 1024 512 1024M798.72 409.6l-71.68 0 0-92.16c0 0 0-215.04-215.04-215.04C296.96 102.4 296.96 317.44 296.96 317.44L296.96 409.6 225.28 409.6l0 409.6 573.44 0L798.72 409.6zM512 163.84c143.36 0 153.6 129.024 153.6 153.6L665.6 409.6l-307.2 0 0-92.16C358.4 292.864 368.64 163.84 512 163.84M512 532.48c34.816 0 61.44 26.624 61.44 61.44 0 22.528-12.288 43.008-30.72 53.248l0 108.544-61.44 0 0-108.544C462.848 636.928 450.56 616.448 450.56 593.92 450.56 559.104 477.184 532.48 512 532.48"  ></path></symbol><symbol id="icon-zhuye" viewBox="0 0 1024 1024"><path d="M950.32093 355.327728 532.539802 62.055334c-11.719926-8.227382-27.326369-8.27957-39.10053-0.12996L73.813123 352.339674c-15.481599 10.714016-19.34765 31.948643-8.636704 47.432289l1.376347 1.989307c10.653641 15.400758 31.775704 19.24839 47.176462 8.594749l399.109883-276.097222 397.069411 278.731212c15.442714 10.840906 36.749996 7.109931 47.590901-8.333806l1.168616-1.663896C969.525318 387.526057 965.788204 366.18603 950.32093 355.327728z"  ></path><path d="M517.14416 188.411137 136.838551 446.971961l0 486.963791c0 18.896372 15.318894 34.215266 34.215266 34.215266l219.312938 0c18.896372 0 34.215266-15.318894 34.215266-34.215266L424.582021 653.936663l174.884053 0 0 279.999089c0 18.896372 15.318894 34.215266 34.215266 34.215266l219.696678 0c18.896372 0 34.215266-15.318894 34.215266-34.215266L887.593284 446.971961 517.14416 188.411137z"  ></path></symbol><symbol id="icon-APIwendang" viewBox="0 0 1024 1024"><path d="M0 651.84768c0 92.3904 69.16608 169.05216 159.9744 183.84896l32.0256 2.56h316.78976l6.4256-0.88576 316.79488 0.88576 32.02048-2.56c90.8032-14.7968 159.96928-91.45856 159.96928-183.84896 0-81.1776-53.43232-150.25152-128.04608-175.85152-2.69824-160.768-137.77408-290.25792-303.94368-290.25792-119.85408 0-223.50848 67.3536-273.03424 165.23776-23.40864-25.13408-57.2928-40.96-94.99648-40.96-70.70208 0-128 55.66976-128 124.27264 0 17.92 3.91168 34.95936 10.89024 50.36032C43.56608 515.0976 0 578.53952 0 651.84768z m159.9744-150.8096l-15.36-40.26368a57.82528 57.82528 0 0 1-5.4016-24.52992c0-33.41824 33.792-83.08736 86.8096-83.08736 18.2016 0 39.51616 9.07776 51.712 21.97504l50.03776 34.76992 42.54208-56.73984c48.17408-71.81824 129.44384-121.20064 221.09184-121.20064 129.2544 0 256.83968 123.20256 258.88256 246.36416v43.65824l45.00992 12.05248c50.7392 17.08032 84.76672 63.0272 84.76672 114.31424 0 59.43808-60.88704 133.9136-122.22976 143.68768h-342.71744v0.36864h-6.4256v-0.36864H194.23744l-21.22752-1.67424c-61.34784-9.7792-129.11616-82.52928-129.11616-141.97248 0-46.48448 39.60832-120.96 116.08064-147.3536z" fill="" ></path><path d="M256 654.2848h38.51776l28.97408-40.25856h72.19712l-1.00864 40.25856h35.53792l2.53952-182.1696h-41.6256L256 654.2848z m140.43648-70.5792H341.88288l56.91904-73.31328-2.36544 73.31328z m266.112-91.52c-3.21024-7.16288-8.36096-12.30336-15.47776-15.4112-7.11168-3.10272-17.24928-4.6592-30.41792-4.6592h-74.0608l-70.28224 182.1696h37.51936l26.78784-69.45792h23.98208c16.15872 0 27.24864-0.4096 33.29024-1.24928 10.34752-1.39776 18.74944-3.46112 25.1904-6.15936 6.43072-2.67776 12.69248-6.64064 18.80064-11.84768 6.08768-5.2224 11.6992-12.18048 16.78848-20.87936 5.09952-8.69888 8.448-17.64352 10.07104-26.83904 1.75104-9.94816 1.02912-18.5088-2.19136-25.66656z m-35.87072 28.76416c-1.16224 6.54848-4.1216 12.54912-8.89856 18.01728-4.77184 5.46816-10.7008 9.45152-17.77152 11.9296-7.06048 2.48832-20.50048 3.73248-40.28928 3.73248h-11.56096l20.33152-52.56192h26.83904c12.18048 0 19.91168 0.63488 23.2192 1.93024 3.28192 1.28 5.6576 3.31776 7.10144 6.144 1.44896 2.82112 1.792 6.4256 1.02912 10.80832z m103.92064-48.83456l-70.28224 182.1696h37.51936L768 472.1152h-37.4016z" fill="" ></path></symbol><symbol id="icon-wendang" viewBox="0 0 1024 1024"><path d="M832 0H390.4c-19.2 0-38.4 12.8-51.2 25.6l-192 192c-12.8 12.8-19.2 32-19.2 44.8V960c0 38.4 32 64 64 64h620.8c32 0 83.2-25.6 83.2-64V64c0-32-32-64-64-64zM358.4 57.6v140.8c0 19.2-12.8 32-32 32H185.6L358.4 57.6zM864 960c0 12.8-25.6 32-51.2 32H192c-19.2 0-32-12.8-32-32V262.4h166.4c38.4 0 64-32 64-64V32H832c19.2 0 32 12.8 32 32v896zM729.6 217.6H505.6c-6.4 0-19.2 6.4-19.2 19.2 0 6.4 6.4 19.2 19.2 19.2h230.4c6.4 0 19.2-6.4 19.2-19.2-6.4-12.8-12.8-19.2-25.6-19.2z m0 147.2H294.4c-6.4 0-19.2 6.4-19.2 19.2 0 6.4 6.4 19.2 19.2 19.2h441.6c6.4 0 19.2-6.4 19.2-19.2-6.4-12.8-12.8-19.2-25.6-19.2z m0 166.4H294.4c-6.4 0-19.2 6.4-19.2 19.2 0 6.4 6.4 19.2 19.2 19.2h441.6c6.4 0 19.2-6.4 19.2-19.2-6.4-12.8-12.8-19.2-25.6-19.2z m0 147.2H294.4c-6.4 0-19.2 6.4-19.2 19.2 0 6.4 6.4 19.2 19.2 19.2h441.6c6.4 0 19.2-6.4 19.2-19.2-6.4-12.8-12.8-19.2-25.6-19.2z m0 166.4H288c-6.4 0-19.2 6.4-19.2 19.2 0 6.4 6.4 19.2 19.2 19.2h435.2c6.4 0 19.2-6.4 19.2-19.2 0-12.8-6.4-19.2-12.8-19.2z"  ></path></symbol><symbol id="icon-tubiaozhizuomobanyihuifu-" viewBox="0 0 1024 1024"><path d="M923.71 718.26l0.65-0.8 0.52-0.66 0.68-0.91 0.42-0.59q0.36-0.52 0.7-1l0.31-0.49q0.37-0.59 0.73-1.2l0.21-0.37q0.38-0.67 0.73-1.35l0.13-0.26q0.38-0.74 0.72-1.5l0.07-0.15q0.36-0.8 0.69-1.62v-0.08q0.33-0.84 0.63-1.7 0.3-0.87 0.56-1.75v-0.06q0.25-0.87 0.47-1.75v-0.13c0.13-0.56 0.26-1.13 0.37-1.7v-0.26c0.1-0.53 0.19-1.06 0.27-1.59 0-0.16 0-0.32 0.06-0.49 0.06-0.46 0.12-0.93 0.17-1.4 0-0.29 0-0.58 0.07-0.87s0.06-0.7 0.08-1.06V122A113.63 113.63 0 0 0 819.64 8.52H217.45A113.63 113.63 0 0 0 104 122v780a113.63 113.63 0 0 0 113.5 113.5h407.34a39.8 39.8 0 0 0 19.41-5h0.06q0.82-0.46 1.61-0.95l0.32-0.21c0.44-0.28 0.87-0.56 1.3-0.86l0.5-0.35c0.36-0.26 0.72-0.52 1.07-0.79l0.6-0.47 0.92-0.75 0.65-0.56 0.83-0.75 0.64-0.61 0.78-0.78 0.35-0.35 268.3-283 0.28-0.31 0.65-0.72zM217.45 935.48A33.54 33.54 0 0 1 184 902V122a33.54 33.54 0 0 1 33.5-33.5h602.14a33.54 33.54 0 0 1 33.5 33.5v530.47h-154.8A113.63 113.63 0 0 0 584.84 766v169.48z m582.65-203L664.84 875.14V766a33.54 33.54 0 0 1 33.5-33.5z" fill="#7B808B" ></path><path d="M315 286.51h358.53a40 40 0 0 0 0-80H315a40 40 0 0 0 0 80zM713.53 416.84a40 40 0 0 0-40-40H315a40 40 0 0 0 0 80h358.53a40 40 0 0 0 40-40zM523.53 547.17H315a40 40 0 0 0 0 80h208.53a40 40 0 0 0 0-80zM538.45 874.41H344a15 15 0 0 0 0 30h194.45a15 15 0 0 0 0-30z" fill="#7B808B" ></path><path d="M288.51 889.41m-15 0a15 15 0 1 0 30 0 15 15 0 1 0-30 0Z" fill="#7B808B" ></path></symbol><symbol id="icon-zdlxb" viewBox="0 0 1024 1024"><path d="M993.889598 704.576038l-41.044193 12.788439c1.179981 8.865801 2.455635 17.508362 2.455636 26.661186 0 9.057149-1.435112 17.859167-2.806441 26.533619l41.394998 12.884114c9.694976 2.806441 17.859167 9.376063 22.57909 18.241864 4.688031 8.865801 5.644772 19.262387 2.423745 28.829798-6.665296 19.708867-28.574668 30.360584-49.080819 24.046093l-41.873369-12.979788a207.389579 207.389579 0 0 1-32.178392 43.27659l25.544987 33.741069a36.388053 36.388053 0 0 1-8.61067 52.174281 39.896104 39.896104 0 0 1-54.438568-8.227973l-25.672553-33.900526a218.009405 218.009405 0 0 1-52.748326 17.093774v41.139867c0 20.601825-17.476471 37.408577-38.939363 37.408577-21.558566 0-39.003146-16.711078-39.003145-37.408577v-41.139867a217.818057 217.818057 0 0 1-52.780218-17.093774l-25.60877 33.900526a40.183126 40.183126 0 0 1-54.47046 8.227973 36.164814 36.164814 0 0 1-8.578778-52.174281l25.800118-34.059983a201.138871 201.138871 0 0 1-33.29459-42.702545l-40.916628 12.78844c-20.601825 6.442057-42.511196-4.337226-49.11271-24.046093a36.930206 36.930206 0 0 1 24.970943-47.071662l41.076084-12.724657c-1.148089-8.833909-2.519418-17.604036-2.519418-26.693077 0-9.184715 1.498894-17.859167 2.838332-26.661185l-41.42689-12.820331c-20.569934-6.442057-31.66813-27.490361-24.970942-47.135445 6.601514-19.613193 28.510885-30.296802 49.112709-24.014201l41.841478 13.04357a211.057087 211.057087 0 0 1 32.178392-43.372263l-25.513096-33.645396a36.451836 36.451836 0 0 1 8.578779-52.206172 39.959887 39.959887 0 0 1 54.47046 8.291756l25.640661 33.900526a214.469463 214.469463 0 0 1 52.748326-17.125665v-41.139868c0-20.633716 17.412688-37.408577 39.003146-37.408577 21.494783 0 38.971254 16.647295 38.971254 37.408577v41.076085a216.733751 216.733751 0 0 1 52.716435 17.157557l25.672553-33.932418a40.119343 40.119343 0 0 1 54.438568-8.291756c17.348905 12.182503 21.271544 35.495095 8.642561 52.238064l-25.832009 34.028092c12.724657 12.916005 24.365007 26.980099 33.358373 42.60687l40.884736-12.660874c20.538042-6.314491 42.415522 4.401009 49.080819 24.077985 6.76097 19.613193-4.528575 40.661497-25.002835 47.071662z m-252.898564-91.273101c-75.327416 0-136.463172 58.616338-136.463172 130.8184 0 72.265844 61.135756 130.754617 136.463172 130.754617 75.231742 0 136.39939-58.488773 136.39939-130.754617 0-72.202062-61.071974-130.8184-136.39939-130.8184z"  ></path><path d="M441.690527 895.669127H99.528018a49.750537 49.750537 0 0 1-49.782429-49.782429V99.596749c0-27.45847 22.292068-49.782429 49.782429-49.782429h447.818617v223.909309a99.532966 99.532966 0 0 0 99.532966 99.532966h199.002149v36.451836a322.102837 322.102837 0 0 1 49.782429 32.018935V348.381326l-8.802018-8.770127 1.530785-8.802018-307.05011-330.713507H99.559909A99.532966 99.532966 0 0 0 0.026943 99.62864v746.321841a99.532966 99.532966 0 0 0 99.532966 99.532966h390.446043a322.963904 322.963904 0 0 1-48.315425-49.81432z"  ></path><path d="M597.129064 91.145536l217.818057 232.32863h-168.06752a49.750537 49.750537 0 0 1-49.782428-49.750537V91.145536h0.031891zM174.185715 423.007132h248.784577v-49.750537H174.185715v49.750537zM422.970292 223.9412H174.185715v49.782429h248.784577V223.9412zM174.185715 744.057554h248.784577v-49.750537H174.185715v49.750537zM514.115828 545.023514H174.185715v49.750537h339.930113v-49.750537z"  ></path></symbol><symbol id="icon-APIwendang1" viewBox="0 0 1152 1024"><path d="M526.272 56c-160.832 0-297.792 106.88-330.88 252.736C80 356.864 3.2 465.536 3.2 587.904c0 168.512 144.256 305.088 322.112 305.088h26.88c19.712 0 35.776-15.168 35.776-33.92 0-18.688-16-33.856-35.84-33.856h-26.816c-138.368 0-250.496-106.24-250.496-237.312 0-100.416 66.496-188.928 164.48-222.912l19.84-6.848 3.2-19.84c19.648-122.688 131.52-214.528 263.872-214.528 126.656 0 235.136 84.224 261.056 200l6.016 26.88h33.28c138.368 0 250.496 106.24 250.496 237.248 0 131.072-112.128 237.312-250.496 237.312h-148.288c-19.776 0-35.84 15.168-35.84 33.92 0 18.688 16.064 33.92 35.84 33.92h148.288c177.92 0 322.112-136.64 322.112-305.152 0-160.896-131.584-292.736-298.432-304.256C807.808 150.272 677.248 56 526.272 56zM370.944 418.304h47.616l97.664 255.552h-44.736l-23.232-64H341.248l-23.296 64H273.28l97.728-255.552z m-17.216 157.12h81.984l-40.064-112h-1.472l-40.448 112z m187.52-157.12h105.984c61.568 0 92.736 26.112 92.736 78.4 0 52.608-31.168 79.104-93.44 79.104h-63.36v98.048h-41.856V418.304z m41.92 35.84v85.888h60.8c18.688 0 32.256-3.584 40.832-10.048 8.64-6.784 12.928-17.92 12.928-33.28s-4.672-26.112-13.248-32.64c-8.576-6.72-22.208-9.984-40.448-9.984h-60.8z m192.576-35.84v255.552h41.856V418.304h-41.856z m-34.688 372.544a25.344 25.344 0 0 0-30.976-40.064l-140.672 108.608 141.184 103.68a25.344 25.344 0 1 0 29.952-40.768l-87.04-63.936 87.552-67.52z" fill="#8F99AE" ></path></symbol><symbol id="icon-debug" viewBox="0 0 1024 1024"><path d="M1022.065 583.401c0 11.056-4.034 20.62-12.111 28.697-8.078 8.078-17.64 12.118-28.69 12.118H838.445c0 72.69-14.235 134.32-42.718 184.899l132.615 133.263c8.077 8.066 12.118 17.635 12.118 28.69 0 11.051-4.035 20.615-12.118 28.692-7.653 8.066-17.21 12.107-28.69 12.107-11.476 0-21.04-4.041-28.691-12.107L744.718 874.153c-2.125 2.118-5.31 4.884-9.559 8.284-4.259 3.398-13.18 9.463-26.785 18.172-13.599 8.715-27.415 16.473-41.44 23.276-14.03 6.798-31.462 12.966-52.29 18.493-20.827 5.518-41.447 8.286-61.842 8.286V379.387H471.19v571.277c-21.668 0-43.25-2.875-64.708-8.615-21.473-5.735-39.96-12.75-55.476-21.04-15.519-8.29-29.542-16.572-42.078-24.867-12.541-8.29-21.78-15.193-27.74-20.715l-9.558-8.932L154.95 998.48c-8.5 8.921-18.7 13.387-30.606 13.387-10.2 0-19.335-3.405-27.409-10.203-8.079-7.652-12.437-17.11-13.08-28.372-0.634-11.263 2.659-21.143 9.893-29.647l128.787-144.727c-24.65-48.465-36.98-106.7-36.98-174.71H42.739c-11.058 0-20.617-4.041-28.69-12.112-8.08-8.082-12.12-17.641-12.12-28.697 0-11.05 4.04-20.62 12.12-28.69 8.073-8.072 17.632-12.107 28.69-12.107h142.815V355.157L75.25 244.855c-8.075-8.078-12.114-17.641-12.114-28.692 0-11.05 4.045-20.62 12.114-28.69 8.072-8.077 17.64-12.123 28.692-12.123 11.057 0 20.612 4.052 28.692 12.123l110.302 110.302h538.129l110.303-110.302c8.07-8.077 17.632-12.123 28.69-12.123 11.05 0 20.618 4.052 28.69 12.123 8.078 8.07 12.119 17.64 12.119 28.69s-4.041 20.615-12.12 28.692L838.447 355.157v187.448h142.816c11.056 0 20.619 4.035 28.69 12.114 8.078 8.07 12.119 17.639 12.119 28.683h-0.006zM716.021 216.158H307.97c0-56.526 19.871-104.668 59.616-144.414 39.734-39.746 87.883-59.612 144.411-59.612 56.53 0 104.679 19.866 144.413 59.612 39.748 39.745 59.612 87.888 59.612 144.414z" fill="" ></path></symbol></svg>';
            if ((t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss") && !e.__iconfont__svg__cssinject__) {
                e.__iconfont__svg__cssinject__ = !0;
                try {
                    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
                } catch (t) {
                    console
                }
            }
            !function(t) {
                if (document.addEventListener)
                    if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
                        setTimeout(t, 0);
                    else {
                        document.addEventListener("DOMContentLoaded", (function e() {
                                document.removeEventListener("DOMContentLoaded", e, !1),
                                    t()
                            }
                        ), !1)
                    }
                else
                    document.attachEvent && (a = t,
                            r = e.document,
                            i = !1,
                            (s = function() {
                                    try {
                                        r.documentElement.doScroll("left")
                                    } catch (e) {
                                        return void setTimeout(s, 50)
                                    }
                                    n()
                                }
                            )(),
                            r.onreadystatechange = function() {
                                "complete" == r.readyState && (r.onreadystatechange = null,
                                    n())
                            }
                    );
                function n() {
                    i || (i = !0,
                        a())
                }
                var a, r, i, s
            }((function() {
                    var e, t;
                    (e = document.createElement("div")).innerHTML = n,
                        n = null,
                    (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"),
                        t.style.position = "absolute",
                        t.style.width = 0,
                        t.style.height = 0,
                        t.style.overflow = "hidden",
                        function(e, t) {
                            t.firstChild ? function(e, t) {
                                t.parentNode.insertBefore(e, t)
                            }(e, t.firstChild) : t.appendChild(e)
                        }(t, document.body))
                }
            ))
        }(window)
            , Ut = {
            props: {
                type: String
            }
        }
            , Ht = (n("abc3"),
            Object(M.a)(Ut, (function() {
                    var e = this
                        , t = e.$createElement;
                    return (e._self._c || t)("span", {
                        class: e.type
                    }, [e._v(e._s(e.type))])
                }
            ), [], !1, null, "421cf8b4", null)).exports
            , Bt = n("9737")
            , Lt = n("0556")
            , qt = n("f3b8")
            , Ft = n("ede0")
            , zt = n("ee09")
            , Kt = n("3cd9")
            , Gt = n("924a")
            , Xt = n("1469")
            , Jt = new C.a({
            data: {
                instance: {},
                load: {},
                tags: {}
            },
            methods: {
                setTags: function(e, t) {},
                setValue: function(e, t) {
                    var n = this
                        , a = this.instance[e];
                    if (null == a || null == a) {
                        var r = t;
                        for (var i in r) {
                            var s = r[i];
                            if (null != s && null != s) {
                                var o = s.params;
                                null != o && null != o && o.forEach((function(e) {
                                        e.schema && (e.children = n.deepModel(r, e, e))
                                    }
                                ))
                            }
                        }
                        this.instance[e] = r
                    }
                },
                deepModel: function(e, t, n) {
                    var a = []
                        , r = this
                        , i = e[t.schemaValue];
                    return null != i && null != i && null != i.params && null != i.params && i.params.forEach((function(i) {
                            var s = r.deepCopy(i);
                            s.pid = t.id,
                            s.schema && (n.parentTypes.push(t.schemaValue),
                            -1 == n.parentTypes.indexOf(s.schemaValue) && (s.children = r.deepModel(e, s, n))),
                                a.push(s)
                        }
                    )),
                        a
                },
                deepCopy: function(e) {
                    return {
                        childrenTypes: e.childrenTypes,
                        def: e.def,
                        description: e.description,
                        enum: e.enum,
                        example: e.example,
                        id: e.id,
                        ignoreFilterName: e.ignoreFilterName,
                        in: e.in,
                        level: e.level,
                        name: e.name,
                        parentTypes: e.parentTypes,
                        pid: e.pid,
                        readOnly: e.readOnly,
                        require: e.require,
                        schema: e.schema,
                        schemaValue: e.schemaValue,
                        show: e.show,
                        txtValue: e.txtValue,
                        type: e.type,
                        validateInstance: e.validateInstance,
                        validateStatus: e.validateStatus,
                        value: e.value
                    }
                },
                getByModelName: function(e, t) {
                    return this.instance[e][t]
                },
                addModels: function(e, t, n) {
                    re.a.checkUndefined(this.instance[e]) || this.initInstance(e),
                        this.instance[e][t] = n
                },
                exists: function(e, t) {
                    re.a.checkUndefined(this.instance[e]) || this.initInstance(e);
                    var n = !1
                        , a = this.instance[e][t];
                    return null != a && null != a && (n = !0),
                        n
                }
            }
        })
            , Zt = {
            info: function(e) {},
            error: function(e) {
                window.console && window.console.error(e)
            }
        }
            , Wt = {
            lang: "zh",
            title: "标题11111",
            searchHolderText: "输入文档关键字搜索",
            docLinkTip: "帮助文档",
            langText: "中",
            settingText: "个性化配置",
            cacheText: "清除缓存",
            table: {
                swaggerModelsColumns: [{
                    title: "名称",
                    dataIndex: "name",
                    width: "30%"
                }, {
                    title: "类型",
                    dataIndex: "type",
                    width: "15%"
                }, {
                    title: "说明",
                    width: "35%",
                    dataIndex: "description",
                    scopedSlots: {
                        customRender: "descriptionValueTemplate"
                    }
                }, {
                    title: "schema",
                    dataIndex: "schemaValue",
                    width: "15%"
                }],
                documentRequestColumns: [{
                    title: "参数名称",
                    dataIndex: "name",
                    width: "30%"
                }, {
                    title: "参数说明",
                    dataIndex: "description",
                    width: "25%",
                    scopedSlots: {
                        customRender: "descriptionValueTemplate"
                    }
                }, {
                    title: "请求类型",
                    dataIndex: "in",
                    scopedSlots: {
                        customRender: "typeTemplate"
                    }
                }, {
                    title: "是否必须",
                    dataIndex: "require",
                    scopedSlots: {
                        customRender: "requireTemplate"
                    }
                }, {
                    title: "数据类型",
                    dataIndex: "type",
                    scopedSlots: {
                        customRender: "datatypeTemplate"
                    }
                }, {
                    title: "schema",
                    dataIndex: "schemaValue",
                    width: "15%"
                }],
                documentResponseStatusColumns: [{
                    title: "状态码",
                    dataIndex: "code",
                    width: "20%"
                }, {
                    title: "说明",
                    dataIndex: "description",
                    width: "55%",
                    scopedSlots: {
                        customRender: "descriptionTemplate"
                    }
                }, {
                    title: "schema",
                    dataIndex: "schema",
                    scopedSlots: {
                        customRender: "schemaTemplate"
                    }
                }],
                documentResponseHeaderColumns: [{
                    title: "参数名称",
                    dataIndex: "name",
                    width: "30%"
                }, {
                    title: "参数说明",
                    dataIndex: "description",
                    width: "55%"
                }, {
                    title: "数据类型",
                    dataIndex: "type"
                }],
                documentResponseColumns: [{
                    title: "参数名称",
                    dataIndex: "name",
                    width: "35%"
                }, {
                    title: "参数说明",
                    dataIndex: "description",
                    scopedSlots: {
                        customRender: "descriptionTemplate"
                    },
                    width: "40%"
                }, {
                    title: "类型",
                    dataIndex: "type"
                }, {
                    title: "schema",
                    dataIndex: "schemaValue",
                    width: "15%"
                }],
                debugRequestHeaderColumns: [{
                    title: "请求头",
                    dataIndex: "name",
                    width: "20%",
                    scopedSlots: {
                        customRender: "headerName"
                    }
                }, {
                    title: "内容",
                    dataIndex: "content",
                    scopedSlots: {
                        customRender: "headerValue"
                    }
                }, {
                    title: "操作",
                    dataIndex: "operation",
                    width: "10%",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                debugFormDataRequestColumns: [{
                    title: "参数名称",
                    dataIndex: "name",
                    width: "20%",
                    scopedSlots: {
                        customRender: "formName"
                    }
                }, {
                    title: "类型",
                    dataIndex: "type",
                    width: "12%",
                    scopedSlots: {
                        customRender: "formType"
                    }
                }, {
                    title: "参数值",
                    dataIndex: "content",
                    scopedSlots: {
                        customRender: "formValue"
                    }
                }, {
                    title: "操作",
                    dataIndex: "operation",
                    width: "10%",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                debugUrlFormRequestColumns: [{
                    title: "参数名称",
                    dataIndex: "name",
                    width: "20%",
                    scopedSlots: {
                        customRender: "urlFormName"
                    }
                }, {
                    title: "参数值",
                    dataIndex: "content",
                    scopedSlots: {
                        customRender: "urlFormValue"
                    }
                }, {
                    title: "操作",
                    dataIndex: "operation",
                    width: "10%",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                debugResponseHeaderColumns: [{
                    title: "响应头",
                    dataIndex: "name",
                    width: "20%"
                }, {
                    title: "值",
                    dataIndex: "value"
                }],
                authHeaderColumns: [{
                    title: "参数key",
                    dataIndex: "key",
                    customRender: function(e, t, n) {
                        return t.key + "(" + t.type + ")"
                    }
                }, {
                    title: "参数名称",
                    className: "column-money",
                    dataIndex: "name"
                }, {
                    title: "in",
                    dataIndex: "in"
                }, {
                    title: "参数值",
                    dataIndex: "value",
                    scopedSlots: {
                        customRender: "paramIpt"
                    }
                }]
            },
            homePage: {
                description: "简介",
                author: "作者",
                version: "版本",
                host: "host",
                basePath: "basePath",
                serviceUrl: "API服务条款",
                groupName: "分组名称",
                groupUrl: "分组Url",
                groupLocation: "分组location",
                apiCountNumber: "接口统计信息"
            },
            markdown: {
                title: "其他文档"
            },
            message: {
                success: "保存成功",
                settingTip: "启用个性化配置后,接口Tab标签需关闭后重新打开或者刷新当前页面",
                settingHost: "启用Host成功,请关闭接口Tab或者刷新当前页面再进行调试",
                unsupportstore: "当前浏览器不支持localStorage对象,无法使用该功能",
                copy: {
                    url: {
                        success: "复制地址成功",
                        fail: "复制地址失败,您当前浏览器版本不兼容,请手动复制."
                    },
                    method: {
                        success: "复制接口成功",
                        fail: "复制接口失败,您当前浏览器版本不兼容,请手动复制."
                    },
                    document: {
                        success: "复制文档成功",
                        fail: "复制文档失败,您当前浏览器版本不兼容,请手动复制."
                    },
                    raw: {
                        success: "复制raw成功",
                        fail: "复制raw失败,您当前浏览器版本不兼容,请手动复制."
                    },
                    curl: {
                        success: "复制curl成功",
                        fail: "复制curl失败,您当前浏览器版本不兼容,请手动复制."
                    },
                    open: {
                        success: "复制OpenAPI成功",
                        fail: "复制OpenAPI失败,您当前浏览器版本不兼容,请手动复制."
                    }
                },
                layer: {
                    title: "信息",
                    yes: "确定",
                    no: "取消"
                },
                auth: {
                    invalid: "值无效",
                    confirm: "确定注销吗?",
                    success: "注销成功"
                },
                global: {
                    iptname: "请输入全局参数名称",
                    iptvalue: "请输入全局参数值",
                    deleteSuccess: "删除成功"
                },
                settings: {
                    plusFail: "无法开启Knife4j增强功能,请确保后端启用注解@EnableKnife4j",
                    plusError: "无法开启Knife4j增强功能,错误原因:",
                    success: "保存成功,请刷新该文档页"
                },
                offline: {
                    imple: "该功能尚未实现...",
                    markdown: "正在下载Markdown文件中,请稍后...",
                    html: "正在下载Html中,请稍后...",
                    word: "正在下载Word中,请稍后...",
                    copy: "拷贝文档",
                    toomany: "当前接口数量超出限制,请使用第三方markdown转换软件进行转换以查看效果.",
                    note: "swagger-bootstrap-ui 提供markdwon格式类型的离线文档,开发者可拷贝该内容通过其他markdown转换工具进行转换为html或pdf."
                },
                debug: {
                    urlNotEmpty: "请求url地址不能为空",
                    fieldNotEmpty: "不能为空",
                    networkErr: "服务器正在重启或者已经挂了:(~~~~",
                    contentToBig: "接口响应数据量超过限制,不在响应内容中显示,请在raw中进行查看",
                    contentToBigBlob: "接口响应数据量超过限制,不在响应内容中显示"
                },
                sys: {
                    loadErr: "请确保swagger资源接口正确."
                }
            },
            swaggerModel: {
                nodata: "暂无Swagger Models",
                tableHeader: {
                    name: "名称",
                    des: "说明",
                    type: "类型"
                }
            },
            global: {
                tab: "全局参数设置",
                add: "添加参数",
                model: "新增参数",
                tableHeader: [{
                    title: "参数名称",
                    dataIndex: "name",
                    width: "15%",
                    scopedSlots: {
                        customRender: "name"
                    }
                }, {
                    title: "参数值",
                    className: "column-money",
                    dataIndex: "value",
                    width: "65%",
                    scopedSlots: {
                        customRender: "paramContentLabel"
                    }
                }, {
                    title: "参数类型",
                    dataIndex: "in",
                    width: "10%",
                    scopedSlots: {
                        customRender: "paramTypeLable"
                    }
                }, {
                    title: "操作",
                    dataIndex: "operation",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                form: {
                    name: "参数名称",
                    value: "参数值",
                    type: "参数类型",
                    validate: {
                        name: "请输入参数名称",
                        value: "请输入参数值"
                    }
                },
                ok: "确定",
                cancel: "取消",
                save: "保存",
                delete: "删除",
                note: "Knife4j 提供全局参数Debug功能,目前默认提供header(请求头)、query(form)两种方式的入参.<br /><br />在此添加全局参数后,默认Debug调试tab页会带上该参数"
            },
            settings: {
                title: "个性化设置",
                openCache: "开启请求参数缓存",
                dynamicParameter: "开启动态请求参数",
                showApi: "菜单Api地址显示",
                tagDes: "分组tag显示dsecription说明属性",
                apiFilter: "开启RequestMapping接口过滤,默认只显示",
                openCacheApi: "开启缓存已打开的api文档",
                plus: "启用Knife4j提供的增强功能",
                save: "保存内容",
                copy: "复制",
                fastTitle: "<h5>通过 <kbd>ctrl + c</kbd> 复制以下地址,打开浏览器快速个性化设置</h5>"
            },
            auth: {
                cancel: "注销",
                save: "保存",
                tableHeader: {
                    key: "参数key",
                    name: "参数名称",
                    in: "in",
                    value: "参数值",
                    operator: "操作"
                },
                valueInvalid: "值无效"
            },
            menu: {
                home: "主页",
                manager: "文档管理",
                globalsettings: "全局参数设置",
                officeline: "离线文档",
                selfSettings: "个性化设置",
                other: "其他文档",
                menuItemList: [{
                    key: "1",
                    icon: "caret-left",
                    text: "关闭左侧"
                }, {
                    key: "2",
                    icon: "caret-right",
                    text: "关闭右侧"
                }, {
                    key: "3",
                    icon: "close-circle",
                    text: "关闭其它"
                }]
            },
            offline: {
                des: "Knife4j提供导出4种格式的离线文档(Html/Markdown/Word/OpenAPI)",
                download: {
                    markdown: "下载Markdown",
                    html: "下载Html",
                    word: "下载Word",
                    pdf: "下载Pdf"
                },
                contact: "联系人",
                url: "接口路径",
                note: "简介",
                schemaDes: "schema属性说明"
            },
            doc: {
                title: "文档",
                note: "接口说明",
                copy: "复制文档",
                copyHash: "复制地址",
                copyMethod: "复制接口",
                produces: "请求数据类型",
                consumes: "响应数据类型",
                author: "开发者",
                url: "接口地址",
                method: "请求方式",
                des: "接口描述",
                params: "请求参数",
                example: "示例值",
                enumAvalible: "可用值",
                requestExample: "请求示例",
                paramsHeader: {
                    name: "参数名称",
                    des: "参数说明",
                    require: "是否必须",
                    type: "数据类型",
                    requestType: "请求类型"
                },
                responseHeaderParams: "响应Header",
                response: "响应状态",
                responseHeader: {
                    code: "状态码",
                    des: "说明"
                },
                responseParams: "响应参数",
                responseParamsHeader: {
                    name: "参数名称",
                    des: "参数说明",
                    type: "类型"
                },
                responseExample: "响应示例",
                nodata: "暂无"
            },
            debug: {
                title: "调试",
                send: " 发 送 ",
                headers: "请求头部",
                params: "请求参数",
                form: {
                    upload: "选择文件",
                    itemText: "文本",
                    itemFile: "文件"
                },
                tableHeader: {
                    holderName: "请求头名称",
                    holderValue: "请求头内容",
                    holderDel: "删除",
                    selectAll: "全选",
                    type: "参数类型",
                    name: "参数名称",
                    value: "参数值"
                },
                response: {
                    content: "响应内容",
                    showDes: "显示说明",
                    code: "响应码:",
                    cost: "耗时:",
                    size: "大小:",
                    header: "请求头",
                    download: "下载文件",
                    copy: "复制"
                }
            },
            open: {
                copy: " 复 制 ",
                download: " 下 载 "
            },
            tab: {
                closeCurrent: "关闭当前标签页",
                closeOther: "关闭其它标签页",
                closeAll: "关闭全部标签页"
            },
            validate: {
                header: "请求头 ",
                notEmpty: " 不能为空",
                fileNotEmpty: " 文件不能为空"
            },
            script: {
                JSExample: "JS模板示例",
                TSExample: "TS模板示例"
            }
        }
            , Yt = {
            lang: "us",
            title: "title",
            searchHolderText: "Enter keyword search",
            docLinkTip: "Documentation",
            langText: "EN",
            settingText: "Settings",
            cacheText: "Clear Caches",
            table: {
                swaggerModelsColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "30%"
                }, {
                    title: "type",
                    dataIndex: "type",
                    width: "15%"
                }, {
                    title: "description",
                    width: "35%",
                    dataIndex: "description",
                    scopedSlots: {
                        customRender: "descriptionValueTemplate"
                    }
                }, {
                    title: "schema",
                    dataIndex: "schemaValue",
                    width: "15%"
                }],
                documentRequestColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "30%"
                }, {
                    title: "description",
                    dataIndex: "description",
                    width: "25%",
                    scopedSlots: {
                        customRender: "descriptionValueTemplate"
                    }
                }, {
                    title: "in",
                    dataIndex: "in",
                    scopedSlots: {
                        customRender: "typeTemplate"
                    }
                }, {
                    title: "require",
                    dataIndex: "require",
                    scopedSlots: {
                        customRender: "requireTemplate"
                    }
                }, {
                    title: "type",
                    dataIndex: "type",
                    scopedSlots: {
                        customRender: "datatypeTemplate"
                    }
                }, {
                    title: "schema",
                    dataIndex: "schemaValue",
                    width: "15%"
                }],
                documentResponseStatusColumns: [{
                    title: "code",
                    dataIndex: "code",
                    width: "20%"
                }, {
                    title: "description",
                    dataIndex: "description",
                    width: "55%",
                    scopedSlots: {
                        customRender: "descriptionTemplate"
                    }
                }, {
                    title: "schema",
                    dataIndex: "schema",
                    scopedSlots: {
                        customRender: "schemaTemplate"
                    }
                }],
                documentResponseHeaderColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "30%"
                }, {
                    title: "description",
                    dataIndex: "description",
                    width: "55%"
                }, {
                    title: "type",
                    dataIndex: "type"
                }],
                documentResponseColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "35%"
                }, {
                    title: "description",
                    dataIndex: "description",
                    scopedSlots: {
                        customRender: "descriptionTemplate"
                    },
                    width: "40%"
                }, {
                    title: "type",
                    dataIndex: "type"
                }, {
                    title: "schema",
                    dataIndex: "schemaValue",
                    width: "15%"
                }],
                debugRequestHeaderColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "20%",
                    scopedSlots: {
                        customRender: "headerName"
                    }
                }, {
                    title: "value",
                    dataIndex: "content",
                    scopedSlots: {
                        customRender: "headerValue"
                    }
                }, {
                    title: "operation",
                    dataIndex: "operation",
                    width: "10%",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                debugFormDataRequestColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "20%",
                    scopedSlots: {
                        customRender: "formName"
                    }
                }, {
                    title: "type",
                    dataIndex: "type",
                    width: "12%",
                    scopedSlots: {
                        customRender: "formType"
                    }
                }, {
                    title: "value",
                    dataIndex: "content",
                    scopedSlots: {
                        customRender: "formValue"
                    }
                }, {
                    title: "operation",
                    dataIndex: "operation",
                    width: "10%",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                debugUrlFormRequestColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "20%",
                    scopedSlots: {
                        customRender: "urlFormName"
                    }
                }, {
                    title: "value",
                    dataIndex: "content",
                    scopedSlots: {
                        customRender: "urlFormValue"
                    }
                }, {
                    title: "operation",
                    dataIndex: "operation",
                    width: "10%",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                debugResponseHeaderColumns: [{
                    title: "name",
                    dataIndex: "name",
                    width: "20%"
                }, {
                    title: "value",
                    dataIndex: "value"
                }],
                authHeaderColumns: [{
                    title: "key",
                    dataIndex: "key",
                    customRender: function(e, t, n) {
                        return t.key + "(" + t.type + ")"
                    }
                }, {
                    title: "name",
                    className: "column-money",
                    dataIndex: "name"
                }, {
                    title: "in",
                    dataIndex: "in"
                }, {
                    title: "value",
                    dataIndex: "value",
                    scopedSlots: {
                        customRender: "paramIpt"
                    }
                }]
            },
            homePage: {
                description: "Description",
                author: "Author",
                version: "Version",
                host: "Host",
                basePath: "BasePath",
                serviceUrl: "termsOfService",
                groupName: "Group Name",
                groupUrl: "Group Url",
                groupLocation: "Group Location",
                apiCountNumber: "Interface statistics"
            },
            markdown: {
                title: "Other Document"
            },
            message: {
                success: "Save successfully",
                settingTip: "When personalization is enabled, close the interface tab or refresh the current pageAfter personalization is enabled, the interface tab tab needs to be closed and then reopened or the current page needs to be refreshed",
                settingHost: "The host is enabled successfully. Please close the interface tab or refresh the current page to enable debuggingThe host is enabled successfully. Please close the interface tab or refresh the current page before debugging",
                unsupportstore: "Current browsers do not support localStorage objects and cannot use this feature",
                copy: {
                    url: {
                        success: "Copy address successfully",
                        fail: "Failed to copy the address, your current browser version is not compatible, please copy manually."
                    },
                    method: {
                        success: "Copy Url successfully",
                        fail: "Failed to copy the url, your current browser version is not compatible, please copy manually."
                    },
                    document: {
                        success: "Copy document successful",
                        fail: "Failed to copy the document, your current browser version is not compatible, please copy it manually."
                    },
                    raw: {
                        success: "Copy raw successfully",
                        fail: "Failed to copy raw, your current browser version is not compatible, please copy manually."
                    },
                    curl: {
                        success: "Copy curl successfully",
                        fail: "Copy curl failed, your current browser version is not compatible, please copy manually."
                    },
                    open: {
                        success: "Copy OpenAPI successfully",
                        fail: "Copy OpenAPI failed, your current browser version is not compatible, please copy manually."
                    }
                },
                layer: {
                    title: "message",
                    yes: "Yes",
                    no: "No"
                },
                auth: {
                    invalid: "Invalid value",
                    confirm: "Are you sure you want to logout?",
                    success: "Logout Success"
                },
                global: {
                    iptname: "Please enter the global parameter name",
                    iptvalue: "Please enter the global parameter value",
                    deleteSuccess: "Delete Success"
                },
                settings: {
                    plusFail: "Knife4j enhancements cannot be turned on. Make sure that the annotation @EnableKnife4j is enabled on the back end",
                    plusError: "Unable to turn on Swagger BootstrapUi Enhancement, Error Cause:",
                    success: "Save successfully, please refresh the document page"
                },
                offline: {
                    imple: "This feature has not been implemented ...",
                    markdown: "Downloading Markdown file, please wait...",
                    html: "Downloading Html file, please wait...",
                    word: "Downloading Word file, please wait...",
                    copy: "Copy",
                    toomany: "The current number of interfaces exceeds the limit. Please use the third-party markdown conversion software for conversion to see the effect.",
                    note: "swagger-bootstrap-ui provides markdwon-formatted offline documents that developers can copy and convert to HTML or PDF through other markdown conversion tools.."
                },
                debug: {
                    urlNotEmpty: "Request URL address cannot be empty",
                    fieldNotEmpty: "cannot be empty",
                    networkErr: "The server is restarting or hanging up:(~~~~",
                    contentToBig: "The amount of interface response data exceeds the limit and is not displayed in the response content. Please check it in raw",
                    contentToBigBlob: "The amount of interface response data exceeds the limit and is not displayed in the response content."
                },
                sys: {
                    loadErr: "Make sure the swagger resource interface is correct."
                }
            },
            home: {
                des: "Description",
                author: "Author",
                version: "Version",
                serviceUrl: "serviceUrl",
                groupName: "Group Name",
                groupUrl: "Group url",
                groupLocation: "Group Location",
                apiCount: "Api Counts",
                searchText: "Search..."
            },
            swaggerModel: {
                nodata: "No Swagger Models",
                tableHeader: {
                    name: "name",
                    des: "description",
                    type: "type"
                }
            },
            global: {
                tab: "Global Parameter Settings",
                add: "Add",
                model: "Add Parameter",
                tableHeader: [{
                    title: "name",
                    dataIndex: "name",
                    width: "15%",
                    scopedSlots: {
                        customRender: "name"
                    }
                }, {
                    title: "value",
                    className: "column-money",
                    dataIndex: "value",
                    width: "65%",
                    scopedSlots: {
                        customRender: "paramContentLabel"
                    }
                }, {
                    title: "type",
                    dataIndex: "in",
                    width: "10%",
                    scopedSlots: {
                        customRender: "paramTypeLable"
                    }
                }, {
                    title: "operation",
                    dataIndex: "operation",
                    scopedSlots: {
                        customRender: "operation"
                    }
                }],
                form: {
                    name: "name",
                    value: "value",
                    type: "type",
                    validate: {
                        name: "Please enter the parameter name",
                        value: "Please enter the parameter value"
                    }
                },
                ok: "ok",
                cancel: "cancel",
                save: "Save",
                delete: "Delete",
                note: "Knife4j Provide global parameter Debug function, currently default to provide header (request header), query (form) two ways of entry.<br /><br />After adding the global parameter here, the default Debug debug tab page will take this parameter."
            },
            settings: {
                title: "Personalized Settings",
                openCache: "Enable request parameter cache",
                dynamicParameter: "Enable dynamic request parameters",
                showApi: "Enable Menu Api Address Display",
                tagDes: "Enable Grouping tag displays dsecription description properties",
                apiFilter: "Open RequestMapping Interface Filtering,Default",
                openCacheApi: "Enable Open cached open API documents",
                plus: "Enabling enhancements provided by Knife4j",
                save: "Save",
                copy: "copy",
                fastTitle: "<h5>Copy the following address through <kbd>ctrl + c</kbd> to open the browser"
            },
            auth: {
                cancel: "Logout",
                save: "Save",
                tableHeader: {
                    key: "key",
                    name: "name",
                    in: "in",
                    value: "value",
                    operator: "operate"
                },
                valueInvalid: "Invalid Value"
            },
            menu: {
                home: "Home",
                manager: "DocumentHelper",
                globalsettings: "GlobalParams",
                officeline: "OfflineDocument",
                selfSettings: "Settings",
                other: "Others",
                menuItemList: [{
                    key: "1",
                    icon: "caret-left",
                    text: "Close Left"
                }, {
                    key: "2",
                    icon: "caret-right",
                    text: "Close Right"
                }, {
                    key: "3",
                    icon: "close-circle",
                    text: "Close Other"
                }]
            },
            doc: {
                title: "Doc",
                note: "Description",
                copy: "Copy",
                copyHash: "Copy Address",
                copyMethod: "Copy Url",
                produces: "produces",
                consumes: "consumes",
                author: "Developer",
                url: "url",
                method: "method",
                des: "Note",
                params: "Params",
                example: "example",
                enumAvalible: "Avalible",
                requestExample: "Example",
                paramsHeader: {
                    name: "name",
                    des: "description",
                    require: "require",
                    type: "data type",
                    requestType: "request type"
                },
                responseHeaderParams: "Response Header",
                response: "Status",
                responseHeader: {
                    code: "code",
                    des: "description"
                },
                responseParams: "Response Params",
                responseParamsHeader: {
                    name: "name",
                    des: "description",
                    type: "type"
                },
                responseExample: "Response Example",
                nodata: "No data"
            },
            offline: {
                des: "Knife4j provides export of offline documents in 4 formats (Html/Markdown/Word/OpenAPI)",
                download: {
                    markdown: "Markdown",
                    html: "Html",
                    word: "Word",
                    pdf: "Pdf"
                },
                contact: "Contact",
                url: "api url",
                note: "Description",
                schemaDes: "schema Description"
            },
            debug: {
                title: "Debug",
                send: "Send",
                headers: "Headers",
                params: "Params",
                form: {
                    upload: "Upload",
                    itemText: "text",
                    itemFile: "file"
                },
                tableHeader: {
                    holderName: "Name",
                    holderValue: "Value",
                    holderDel: "Delete",
                    selectAll: "Select All",
                    type: "type",
                    name: "name",
                    value: "value"
                },
                response: {
                    content: "Response",
                    showDes: "Show Description",
                    code: "code:",
                    cost: "cost:",
                    size: "size:",
                    header: "Request Header",
                    download: "Download File",
                    copy: "copy"
                }
            },
            open: {
                copy: " Copy ",
                download: " Download "
            },
            tab: {
                closeCurrent: "Close Current Tab",
                closeOther: "Close Other Tab",
                closeAll: "Close All Tab"
            },
            validate: {
                header: "Request Header ",
                notEmpty: " cannot be empty",
                fileNotEmpty: " file cannot be empty"
            },
            script: {
                JSExample: "JSExample",
                TSExample: "TSExample"
            }
        };
        C.a.prototype.$message = j.a,
            C.a.use(P.a),
            C.a.use(I.a),
            C.a.use(T.a),
            C.a.use(S.a),
            C.a.use(x.a),
            C.a.use(k.a),
            C.a.use(w.a),
            C.a.use(b.a),
            C.a.use(v.a),
            C.a.use(y.a),
            C.a.use(g.a),
            C.a.use(m.a),
            C.a.use(f.a),
            C.a.use(h.a),
            C.a.use(d.d),
            C.a.use(u.a),
            C.a.use(p.a),
            C.a.use(c.a),
            C.a.use(l.a),
            C.a.use(o.a),
            C.a.use(s.a),
            C.a.use(i.a),
            C.a.use(r.a),
            C.a.use(a.a),
            C.a.use(Rt.a),
            C.a.use(Mt),
            C.a.component("Main", Dt.default);
        var Qt = m.a.createFromIconfontCN({
            scriptUrl: Nt
        });
        C.a.component("my-icon", Qt),
            C.a.component("MethodType", Ht),
            C.a.component("ApiInfo", Bt.default),
            C.a.component("Authorize", Lt.default),
            C.a.component("SwaggerModels", qt.default),
            C.a.component("GlobalParameters", Ft.default),
            C.a.component("Settings", zt.default),
            C.a.component("OfficelineDocument", Kt.default),
            C.a.component("OtherMarkdown", Gt.default),
            C.a.config.productionTip = !1,
            qe.a.interceptors.response.use((function(e) {
                    return e.data
                }
            ), (function(e) {
                    return Promise.reject(e)
                }
            )),
            C.a.prototype.$axios = qe.a,
            C.a.prototype.$localStore = Xt.a,
            C.a.prototype.$Knife4jModels = Jt,
            C.a.prototype.$logger = Zt,
            String.prototype.gblen = function() {
                for (var e = 0, t = 0; t < this.length; t++)
                    this.charCodeAt(t) > 127 || 94 == this.charCodeAt(t) ? e += 2 : e++;
                return e
            }
            ,
            String.prototype.startWith = function(e) {
                return new RegExp("^" + e).test(this)
            }
        ;
        var $t = new Rt.a({
            locale: "zh-CN",
            messages: {
                "zh-CN": Wt,
                "en-US": Yt
            }
        });
        new C.a({
            router: St,
            store: jt,
            i18n: $t,
            render: function(e) {
                return e(R)
            }
        }).$mount("#app")
    },
    "596c": function(e, t, n) {},
    "6bb9": function(e, t, n) {
        "use strict";
        var a = n("11f0");
        n.n(a).a
    },
    "7a48b": function(e, t, n) {
        "use strict";
        var a = n("21a5");
        n.n(a).a
    },
    "7abe": function(e, t, n) {},
    "7c55": function(e, t, n) {
        "use strict";
        var a = n("2395");
        n.n(a).a
    },
    8601: function(e, t, n) {
        "use strict";
        var a = n("a223");
        n.n(a).a
    },
    "924a": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("d3b7"),
            n("596c"),
            n("b1c7"))
            , r = {
            props: {
                data: {
                    type: Object
                }
            },
            components: {
                Markdown: function() {
                    return n.e("chunk-f876db6c").then(n.bind(null, "68cc"))
                }
            },
            data: function() {
                return {
                    content: ""
                }
            },
            created: function() {
                var e = this
                    , t = this.$route.params.id
                    , n = this.data.instance.id + "markdownFiles";
                this.$localStore.getItem(n).then((function(n) {
                        if (a.a.checkUndefined(n)) {
                            var r = n[t];
                            a.a.strNotBlank(r) && (e.content = r)
                        }
                    }
                ))
            }
        }
            , i = n("2877")
            , s = Object(i.a)(r, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [n("a-row", {
                    staticClass: "markdown-body editormd-preview-container"
                }, [n("Markdown", {
                    attrs: {
                        source: e.content
                    }
                })], 1)], 1)
            }
        ), [], !1, null, null, null);
        t.default = s.exports
    },
    "94fb": function(e, t, n) {
        "use strict";
        var a = n("3ea0");
        n.n(a).a
    },
    9731: function(e, t, n) {},
    9737: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("4160"),
            n("d3b7"),
            n("159b"),
            n("5609"))
            , r = n("b1c7")
            , i = {
            name: "APIDoc",
            components: {
                Document: function() {
                    return n.e("chunk-d7d5f59c").then(n.bind(null, "eeba"))
                },
                Debug: function() {
                    return n.e("chunk-069eb437").then(n.bind(null, "7444"))
                },
                OpenApi: function() {
                    return n.e("chunk-adb9e944").then(n.bind(null, "19aa0"))
                },
                ScriptView: function() {
                    return n.e("chunk-296622eb").then(n.bind(null, "9a5c"))
                }
            },
            props: {
                data: {
                    type: Object
                }
            },
            data: function() {
                return {
                    api: null,
                    swaggerInstance: null,
                    debugSupport: !1
                }
            },
            computed: {
                swagger: function() {
                    return this.$store.state.globals.swagger
                },
                settings: function() {
                    return this.$store.state.globals.settings
                }
            },
            mounted: function() {},
            beforeCreate: function() {},
            created: function() {
                var e = this.$route.params
                    , t = this.data.instance
                    , n = null;
                t.paths.forEach((function(t) {
                        t.operationId == e.summary && (n = t)
                    }
                )),
                n.init || this.swagger.initApiInfoAsync(n),
                    this.storeCacheApiAddApiInfo(n, t.groupId),
                    this.swaggerInstance = t,
                    this.api = n,
                    this.debugSupport = this.settings.enableDebug
            },
            methods: {
                onTabChange: function(e, t) {
                    this[t] = e
                },
                storeCacheApiAddApiInfo: function(e, t) {
                    var n = this;
                    (e.hasNew || e.hasChanged) && this.$localStore.getItem(a.a.globalGitApiVersionCaches).then((function(i) {
                            r.a.strNotBlank(i) && i.forEach((function(n) {
                                    if (n.id == t)
                                        if (e.hasNew)
                                            n.cacheApis.push(e.id);
                                        else if (e.hasChanged) {
                                            var a = n.updateApis;
                                            null != a && null != a ? a.hasOwnProperty(e.id) && (n.updateApis[e.id].versionId = e.versionId,
                                                n.updateApis[e.id].lastTime = new Date) : (n.updateApis = new Object,
                                                n.updateApis[e.id].url = e.url,
                                                n.updateApis[e.id].versionId = e.versionId,
                                                n.updateApis[e.id].lastTime = new Date)
                                        }
                                }
                            )),
                                n.$localStore.setItem(a.a.globalGitApiVersionCaches, i)
                        }
                    ))
                }
            }
        }
            , s = n("2877")
            , o = Object(s.a)(i, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [e.debugSupport ? n("a-row", [n("a-tabs", {
                    staticClass: "api-tab",
                    attrs: {
                        defaultActiveKey: "doc",
                        tabPosition: "left"
                    }
                }, [n("a-tab-pane", {
                    key: "doc"
                }, [n("span", {
                    attrs: {
                        slot: "tab"
                    },
                    slot: "tab"
                }, [n("my-icon", {
                    attrs: {
                        type: "icon-wendang"
                    }
                }), n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("doc.title"))
                    }
                }, [e._v("文档")])], 1), n("Document", {
                    attrs: {
                        api: e.api,
                        swaggerInstance: e.swaggerInstance
                    }
                })], 1), n("a-tab-pane", {
                    key: "debug"
                }, [n("span", {
                    attrs: {
                        slot: "tab"
                    },
                    slot: "tab"
                }, [n("my-icon", {
                    attrs: {
                        type: "icon-debug"
                    }
                }), n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("debug.title"))
                    }
                }, [e._v("调试")])], 1), n("Debug", {
                    attrs: {
                        api: e.api,
                        swaggerInstance: e.swaggerInstance
                    }
                })], 1), e.settings.enableOpenApi ? n("a-tab-pane", {
                    key: "openapi"
                }, [n("span", {
                    attrs: {
                        slot: "tab"
                    },
                    slot: "tab"
                }, [n("a-icon", {
                    attrs: {
                        type: "file-text"
                    }
                }), n("span", [e._v("Open")])], 1), n("OpenApi", {
                    attrs: {
                        api: e.api,
                        swaggerInstance: e.swaggerInstance
                    }
                })], 1) : e._e(), e.settings.enableOpenApi ? n("a-tab-pane", {
                    key: "script"
                }, [n("span", {
                    attrs: {
                        slot: "tab"
                    },
                    slot: "tab"
                }, [n("a-icon", {
                    attrs: {
                        type: "codepen"
                    }
                }), n("span", [e._v("Script")])], 1), n("ScriptView", {
                    attrs: {
                        api: e.api,
                        swaggerInstance: e.swaggerInstance
                    }
                })], 1) : e._e()], 1)], 1) : n("a-row", {
                    staticClass: "knife4j-api-readonly"
                }, [n("Document", {
                    attrs: {
                        api: e.api,
                        swaggerInstance: e.swaggerInstance
                    }
                })], 1)], 1)
            }
        ), [], !1, null, "c988a4b0", null);
        t.default = o.exports
    },
    "9c80": function(e, t, n) {},
    a213: function(e, t, n) {
        "use strict";
        var a = n("1ee8");
        n.n(a).a
    },
    a223: function(e, t, n) {},
    abc3: function(e, t, n) {
        "use strict";
        var a = n("eb64");
        n.n(a).a
    },
    b1c7: function(e, t, n) {
        "use strict";
        n("99af"),
            n("4de4"),
            n("4160"),
            n("caad"),
            n("c975"),
            n("a15b"),
            n("d81d"),
            n("fb6a"),
            n("45fc"),
            n("b0c0"),
            n("b64b"),
            n("d3b7"),
            n("4d63"),
            n("ac1f"),
            n("25f0"),
            n("466d"),
            n("5319"),
            n("1276"),
            n("2ca0"),
            n("159b");
        var a = n("53ca")
            , r = n("5530")
            , i = n("8237")
            , s = n.n(i)
            , o = (n("a9e3"),
            n("bf19"),
            "object" === ("undefined" == typeof exports ? "undefined" : Object(a.a)(exports)) ? exports : {});
        o.parse = function() {
            var e, t, n, r, i, s, o = {
                "'": "'",
                '"': '"',
                "\\": "\\",
                "/": "/",
                "\n": "",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            }, l = [" ", "\t", "\r", "\n", "\v", "\f", " ", "\ufeff"], c = function(e) {
                return "" === e ? "EOF" : "'" + e + "'"
            }, p = function(a) {
                var r = new SyntaxError;
                throw r.message = a + " at line " + t + " column " + n + " of the JSON5 data. Still to read: " + JSON.stringify(i.substring(e - 1, e + 19)),
                    r.at = e,
                    r.lineNumber = t,
                    r.columnNumber = n,
                    r
            }, u = function(a) {
                return a && a !== r && p("Expected " + c(a) + " instead of " + c(r)),
                    r = i.charAt(e),
                    e++,
                    n++,
                ("\n" === r || "\r" === r && "\n" !== d()) && (t++,
                    n = 0),
                    r
            }, d = function() {
                return i.charAt(e)
            }, h = function() {
                var e = r;
                for ("_" !== r && "$" !== r && (r < "a" || r > "z") && (r < "A" || r > "Z") && p("Bad identifier as unquoted key"); u() && ("_" === r || "$" === r || r >= "a" && r <= "z" || r >= "A" && r <= "Z" || r >= "0" && r <= "9"); )
                    e += r;
                return e
            }, f = function() {
                var e, t = "", n = "", a = 10;
                if ("-" !== r && "+" !== r || (t = r,
                    u(r)),
                "I" === r)
                    return ("number" != typeof (e = v()) || isNaN(e)) && p("Unexpected word for number"),
                        "-" === t ? -e : e;
                if ("N" === r)
                    return e = v(),
                    isNaN(e) || p("expected word to be NaN"),
                        e;
                switch ("0" === r && (n += r,
                    u(),
                    "x" === r || "X" === r ? (n += r,
                        u(),
                        a = 16) : r >= "0" && r <= "9" && p("Octal literal")),
                    a) {
                    case 10:
                        for (; r >= "0" && r <= "9"; )
                            n += r,
                                u();
                        if ("." === r)
                            for (n += "."; u() && r >= "0" && r <= "9"; )
                                n += r;
                        if ("e" === r || "E" === r)
                            for (n += r,
                                     u(),
                                 "-" !== r && "+" !== r || (n += r,
                                     u()); r >= "0" && r <= "9"; )
                                n += r,
                                    u();
                        break;
                    case 16:
                        for (; r >= "0" && r <= "9" || r >= "A" && r <= "F" || r >= "a" && r <= "f"; )
                            n += r,
                                u()
                }
                if (e = "-" === t ? -n : +n,
                n.length > 15 && ((e = new Number(n)).toString = function() {
                        return t + n
                    }
                ),
                    isFinite(e))
                    return e;
                p("Bad number")
            }, m = function() {
                var e, t, n, a, i = "";
                if ('"' === r || "'" === r)
                    for (n = r; u(); ) {
                        if (r === n)
                            return u(),
                                i;
                        if ("\\" === r)
                            if (u(),
                            "u" === r) {
                                for (a = 0,
                                         t = 0; t < 4 && (e = parseInt(u(), 16),
                                    isFinite(e)); t += 1)
                                    a = 16 * a + e;
                                i += String.fromCharCode(a)
                            } else if ("\r" === r)
                                "\n" === d() && u();
                            else {
                                if ("string" != typeof o[r])
                                    break;
                                i += o[r]
                            }
                        else {
                            if ("\n" === r)
                                break;
                            i += r
                        }
                    }
                p("Bad string")
            }, g = function() {
                "/" !== r && p("Not a comment"),
                    u("/"),
                    "/" === r ? function() {
                        "/" !== r && p("Not an inline comment");
                        do {
                            if (u(),
                            "\n" === r || "\r" === r)
                                return void u()
                        } while (r)
                    }() : "*" === r ? function() {
                        "*" !== r && p("Not a block comment");
                        do {
                            for (u(); "*" === r; )
                                if (u("*"),
                                "/" === r)
                                    return void u("/")
                        } while (r);
                        p("Unterminated block comment")
                    }() : p("Unrecognized comment")
            }, y = function() {
                for (; r; )
                    if ("/" === r)
                        g();
                    else {
                        if (!(l.indexOf(r) >= 0))
                            return;
                        u()
                    }
            }, v = function() {
                switch (r) {
                    case "t":
                        return u("t"),
                            u("r"),
                            u("u"),
                            u("e"),
                            !0;
                    case "f":
                        return u("f"),
                            u("a"),
                            u("l"),
                            u("s"),
                            u("e"),
                            !1;
                    case "n":
                        return u("n"),
                            u("u"),
                            u("l"),
                            u("l"),
                            null;
                    case "I":
                        return u("I"),
                            u("n"),
                            u("f"),
                            u("i"),
                            u("n"),
                            u("i"),
                            u("t"),
                            u("y"),
                        1 / 0;
                    case "N":
                        return u("N"),
                            u("a"),
                            u("N"),
                            NaN
                }
                p("Unexpected " + c(r))
            };
            return s = function() {
                switch (y(),
                    r) {
                    case "{":
                        return function() {
                            var e, t = {};
                            if ("{" === r)
                                for (u("{"),
                                         y(); r; ) {
                                    if ("}" === r)
                                        return u("}"),
                                            t;
                                    if (e = '"' === r || "'" === r ? m() : h(),
                                        y(),
                                        u(":"),
                                        t[e] = s(),
                                        y(),
                                    "," !== r)
                                        return u("}"),
                                            t;
                                    u(","),
                                        y()
                                }
                            p("Bad object")
                        }();
                    case "[":
                        return function() {
                            var e = [];
                            if ("[" === r)
                                for (u("["),
                                         y(); r; ) {
                                    if ("]" === r)
                                        return u("]"),
                                            e;
                                    if ("," === r ? p("Missing array element") : e.push(s()),
                                        y(),
                                    "," !== r)
                                        return u("]"),
                                            e;
                                    u(","),
                                        y()
                                }
                            p("Bad array")
                        }();
                    case '"':
                    case "'":
                        return m();
                    case "-":
                    case "+":
                    case ".":
                        return f();
                    default:
                        return r >= "0" && r <= "9" ? f() : v()
                }
            }
                ,
                function(o, l) {
                    var c;
                    return i = String(o),
                        e = 0,
                        t = 1,
                        n = 1,
                        r = " ",
                        c = s(),
                        y(),
                    r && p("Syntax error"),
                        "function" == typeof l ? function e(t, n) {
                            var r, i, s = t[n];
                            if (s && "object" === Object(a.a)(s))
                                for (r in s)
                                    Object.prototype.hasOwnProperty.call(s, r) && (void 0 !== (i = e(s, r)) ? s[r] = i : delete s[r]);
                            return l.call(t, n, s)
                        }({
                            "": c
                        }, "") : c
                }
        }(),
            o.stringify = function(e, t, n) {
                if (t && "function" != typeof t && !l(t))
                    throw new Error("Replacer must be a function or an array");
                var r = function(e, n, a) {
                    var r = e[n];
                    return r && r.toJSON && "function" == typeof r.toJSON && (r = r.toJSON()),
                        "function" == typeof t ? t.call(e, n, r) : t ? a || l(e) || t.indexOf(n) >= 0 ? r : void 0 : r
                };
                function i(e) {
                    return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || "_" === e || "$" === e
                }
                function s(e) {
                    if ("string" != typeof e)
                        return !1;
                    if (!function(e) {
                        return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || "_" === e || "$" === e
                    }(e[0]))
                        return !1;
                    for (var t = 1, n = e.length; t < n; ) {
                        if (!i(e[t]))
                            return !1;
                        t++
                    }
                    return !0
                }
                function l(e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
                }
                function c(e) {
                    return "[object Number]" === Object.prototype.toString.call(e)
                }
                o.isWord = s;
                var p, u = [];
                function d(e) {
                    for (var t = 0; t < u.length; t++)
                        if (u[t] === e)
                            throw new TypeError("Converting circular structure to JSON")
                }
                function h(e, t, n) {
                    if (!e)
                        return "";
                    e.length > 10 && (e = e.substring(0, 10));
                    for (var a = n ? "" : "\n", r = 0; r < t; r++)
                        a += e;
                    return a
                }
                n && ("string" == typeof n ? p = n : "number" == typeof n && n >= 0 && (p = h(" ", n, !0)));
                var f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
                    , m = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                };
                function g(e) {
                    return f.lastIndex = 0,
                        f.test(e) ? '"' + e.replace(f, (function(e) {
                                var t = m[e];
                                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            }
                        )) + '"' : '"' + e + '"'
                }
                var y = {
                    "": e
                };
                return void 0 === e ? r(y, "", !0) : function e(t, n, i) {
                    var f, m, y = r(t, n, i);
                    switch (!y || function(e) {
                        return "[object Date]" === Object.prototype.toString.call(e)
                    }(y) || c(y) || (y = y.valueOf()),
                        Object(a.a)(y)) {
                        case "boolean":
                            return y.toString();
                        case "number":
                            return isNaN(y) || !isFinite(y) ? "null" : y.toString();
                        case "string":
                            return g(y.toString());
                        case "object":
                            if (null === y)
                                return "null";
                            if (l(y)) {
                                d(y),
                                    f = "[",
                                    u.push(y);
                                for (var v = 0; v < y.length; v++)
                                    m = e(y, v, !1),
                                        f += h(p, u.length),
                                        f += null == m ? "null" : m,
                                        v < y.length - 1 ? f += "," : p && (f += "\n");
                                u.pop(),
                                y.length && (f += h(p, u.length, !0)),
                                    f += "]"
                            } else {
                                if (c(y))
                                    return y.toString();
                                d(y),
                                    f = "{";
                                var b = !1;
                                for (var w in u.push(y),
                                    y)
                                    if (y.hasOwnProperty(w)) {
                                        var k = e(y, w, !1);
                                        if (i = !1,
                                        null != k)
                                            f += h(p, u.length),
                                                b = !0,
                                                n = o.compatible ? g(w) : s(w) ? w : g(w),
                                                new RegExp('".*?"',"ig").test(n) ? f += n + ":" + (p ? " " : "") + k + "," : f += '"' + n + '":' + (p ? " " : "") + k + ","
                                    }
                                u.pop(),
                                    f = b ? f.substring(0, f.length - 1) + h(p, u.length) + "}" : "{}"
                            }
                            return f;
                        default:
                            return
                    }
                }(y, "", !0)
            }
        ;
        var l = o
            , c = n("1a8c")
            , p = n.n(c)
            , u = n("501e")
            , d = n.n(u)
            , h = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g
            , f = {
            "application/octet-stream": !0,
            "application/x-001": !0,
            "text/h323": !0,
            "drawing/907": !0,
            "audio/x-mei-aac": !0,
            "audio/aiff": !0,
            "text/asa": !0,
            "text/asp": !0,
            "audio/basic": !0,
            "application/vnd.adobe.workflow": !0,
            "application/x-bmp": !0,
            "application/x-c4t": !0,
            "application/x-cals": !0,
            "application/x-netcdf": !0,
            "application/x-cel": !0,
            "application/x-g4": !0,
            "application/x-cit": !0,
            "text/xml": !0,
            "application/x-cmx": !0,
            "application/pkix-crl": !0,
            "application/x-csi": !0,
            "application/x-cut": !0,
            "application/x-dbm": !0,
            "application/x-x509-ca-cert": !0,
            "application/x-dib": !0,
            "application/msword": !0,
            "application/x-drw": !0,
            "Model/vnd.dwf": !0,
            "application/x-dwg": !0,
            "application/x-dxf": !0,
            "application/x-emf": !0,
            "application/x-ps": !0,
            "application/x-ebx": !0,
            "image/fax": !0,
            "application/fractals": !0,
            "application/x-frm": !0,
            "application/x-gbr": !0,
            "image/gif": !0,
            "application/x-gp4": !0,
            "application/x-hmr": !0,
            "application/x-hpl": !0,
            "application/x-hrf": !0,
            "text/x-component": !0,
            "text/html": !0,
            "image/x-icon": !0,
            "application/x-iff": !0,
            "application/x-igs": !0,
            "application/x-img": !0,
            "application/x-internet-signup": !0,
            "java/*": !0,
            "image/jpeg": !0,
            "application/x-jpg": !0,
            "application/x-laplayer-reg": !0,
            "audio/x-liquid-secure": !0,
            "audio/x-la-lms": !0,
            "application/x-ltr": !0,
            "video/x-mpeg": !0,
            "video/mpeg4": !0,
            "application/x-troff-man": !0,
            "application/msaccess": !0,
            "application/x-shockwave-flash": !0,
            "message/rfc822": !0,
            "audio/mid": !0,
            "application/x-mil": !0,
            "audio/x-musicnet-download": !0,
            "application/x-javascript": !0,
            "audio/mp1": !0,
            "video/mpeg": !0,
            "application/vnd.ms-project": !0,
            "video/mpg": !0,
            "audio/rn-mpeg": !0,
            "image/pnetvue": !0,
            "application/x-out": !0,
            "application/x-pkcs12": !0,
            "application/pkcs7-mime": !0,
            "application/x-pkcs7-certreqresp": !0,
            "application/x-pc5": !0,
            "application/x-pcl": !0,
            "application/pdf": !0,
            "application/vnd.adobe.pdx": !0,
            "application/x-pgl": !0,
            "application/vnd.ms-pki.pko": !0,
            "application/x-plt": !0,
            "application/x-png": !0,
            "application/vnd.ms-powerpoint": !0,
            "application/x-ppt": !0,
            "application/pics-rules": !0,
            "application/x-prt": !0,
            "application/postscript": !0,
            "audio/vnd.rn-realaudio": !0,
            "application/x-ras": !0,
            "application/x-red": !0,
            "application/vnd.rn-realsystem-rjs": !0,
            "application/x-rlc": !0,
            "application/vnd.rn-realmedia": !0,
            "audio/x-pn-realaudio": !0,
            "application/vnd.rn-realmedia-secure": !0,
            "application/vnd.rn-realsystem-rmx": !0,
            "image/vnd.rn-realpix": !0,
            "application/vnd.rn-rsml": !0,
            "video/vnd.rn-realvideo": !0,
            "application/x-sat": !0,
            "application/x-sdw": !0,
            "application/x-slb": !0,
            "drawing/x-slk": !0,
            "application/smil": !0,
            "text/plain": !0,
            "application/futuresplash": !0,
            "application/streamingmedia": !0,
            "application/vnd.ms-pki.stl": !0,
            "application/x-sty": !0,
            "application/x-tg4": !0,
            "image/tiff": !0,
            "image/png": !0,
            "drawing/x-top": !0,
            "application/x-icq": !0,
            "text/x-vcard": !0,
            "application/vnd.visio": !0,
            "application/x-vpeg005": !0,
            "application/x-vsd": !0,
            "audio/wav": !0,
            "application/x-wb1": !0,
            "application/x-wb3": !0,
            "application/x-wk4": !0,
            "application/x-wks": !0,
            "audio/x-ms-wma": !0,
            "application/x-wmf": !0,
            "video/x-ms-wmv": !0,
            "application/x-ms-wmz": !0,
            "application/x-wpd": !0,
            "application/vnd.ms-wpl": !0,
            "application/x-wr1": !0,
            "application/x-wrk": !0,
            "application/x-ws": !0,
            "application/vnd.adobe.xdp": !0,
            "application/vnd.adobe.xfd": !0,
            "application/x-xls": !0,
            "application/x-xwd": !0,
            "application/vnd.symbian.install": !0,
            "application/x-x_t": !0,
            "application/vnd.android.package-archive": !0
        };
        function m(e) {
            return h.test(e)
        }
        var g = {
            getLocationParams: function(e) {
                var t = window.location.href
                    , n = t.indexOf("?");
                if (1 == t.indexOf("?"))
                    return !1;
                t = (t = t.substr(n + 1)).split("&"),
                    e = e || "";
                for (var a, r = 0; r < t.length; r++) {
                    var i = t[r].split("=")
                        , s = {};
                    s[i[0]] = decodeURI(i[1]),
                        t[r] = s
                }
                if (e)
                    for (r = 0; r < t.length; r++)
                        for (var o in t[r])
                            o == e && (a = t[r][o]);
                else
                    a = t;
                return a
            },
            getOAuth2Html: function(e) {
                return e ? "webjars/oauth/oauth2.html" : "oauth/oauth2.html"
            },
            getOAuth2BearerValue: function(e, t) {
                return "bearer" == e && null != t && "" != t ? t.toLocaleLowerCase().indexOf("bearer") > -1 ? t : "Bearer " + t : t
            },
            groupName: function(e, t) {
                var n = t;
                if (new RegExp(".*?group=(.*?)(&.*?)?$").test(e)) {
                    var a = RegExp.$1;
                    this.strNotBlank(a) && a != t && (n = a)
                }
                return n
            },
            getDesktopCode: function() {
                var e = window.location.pathname
                    , t = "ROOT";
                if (new RegExp("(?:/(.*?))?/doc.html","ig").exec(e)) {
                    var n = RegExp.$1;
                    this.strNotBlank(n) && (t = n)
                }
                return t
            },
            oasmodel: function(e) {
                return e ? "#/definitions/(.*)$" : "#/components/schemas/(.*)$"
            },
            filterIgnoreParameters: function(e, t, n) {
                if (null == n)
                    return !0;
                var a = Object.keys(n || {})
                    , r = []
                    , i = new RegExp("\\[0\\]","gm");
                return null != a && a.length > 0 && a.forEach((function(e) {
                        r.push(e),
                        e.indexOf("[0]") > -1 && r.push(e.replace(i, ""))
                    }
                )),
                    t.indexOf("[0]") > -1 ? !(r.length > 0) || !(r.filter((function(e) {
                            return t.startsWith(e)
                        }
                    )).length > 0) : "query" == e ? !r.some((function(e) {
                            return new RegExp("^(".concat(e, "$|").concat(e, "[.[])")).test(t) || new RegExp(e,"g").test(t)
                        }
                    )) : !r.includes(t)
            },
            appendBasePath: function(e, t) {
                var n = !1;
                try {
                    if (this.checkUndefined(t) && this.strNotBlank(t) && "/" != t) {
                        for (var a = Object.keys(e || {}), r = a.length, i = 0, s = t + "/", o = 0; o < a.length; o++)
                            a[o].startsWith(s) && i++;
                        if (i == r)
                            n = !0;
                        else if (r > 0) {
                            100 * parseFloat(i / r) >= 60 && (n = !0)
                        }
                    } else
                        n = !0
                } catch (e) {
                    n = !0
                }
                return n
            },
            filterIncludeParameters: function(e, t, n) {
                if (null == n)
                    return !0;
                var a = Object.keys(n || {})
                    , r = []
                    , i = new RegExp("\\[0\\]","gm");
                return null != a && a.length > 0 && a.forEach((function(e) {
                        r.push(e),
                        e.indexOf("[0]") > -1 && r.push(e.replace(i, ""))
                    }
                )),
                    t.indexOf("[0]") > -1 ? !(r.length > 0) || r.filter((function(e) {
                            return t.startsWith(e)
                        }
                    )).length > 0 : "query" == e ? r.includes(t) : "body" == e || r.includes(t)
            },
            rootKeysPath: function(e, t, n) {
                var a = [];
                if (null != t && null != t)
                    for (var r in t) {
                        var i = e + "." + r;
                        if (!n.some((function(e) {
                                return e.startsWith(i)
                            }
                        ))) {
                            a.push(i);
                            var s = t[r];
                            if (Array.isArray(s)) {
                                var o = e + "." + r + "[0]";
                                a = a.concat(this.rootKeysPath(o, s[0], n))
                            } else
                                p()(s) && (a = a.concat(this.rootKeysPath(i, s, n)))
                        }
                    }
                return a
            },
            binaryContentType: function(e, t) {
                var n = !1
                    , a = "";
                return null != e && null != e && e.forEach((function(e) {
                        f[e] && (a = e,
                            n = !0)
                    }
                )),
                null != t && !n && f[t] && (n = !0,
                    a = t),
                    {
                        binary: n,
                        binaryType: a
                    }
            },
            copyOneObject: function(e) {
                var t = {};
                for (var n in e)
                    t[n] = e[n];
                return t
            },
            randomMd5: function() {
                return s()((new Date).getTime().toString() + Math.floor(1e5 * Math.random()).toString())
            },
            randomMd5Str: function(e) {
                return s()((new Date).getTime().toString() + Math.floor(1e4 * Math.random()).toString() + e)
            },
            numberFormat: function(e) {
                var t = e.items;
                if (this.checkUndefined(t)) {
                    var n = t.format;
                    if (this.checkUndefined(n))
                        return n
                }
                return null
            },
            formatter: function(e) {
                var t = this
                    , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/"
                    , a = arguments.length > 2 ? arguments[2] : void 0;
                return e.map((function(e) {
                        var i = e.path;
                        m(i) || (i = n + e.path);
                        var s = Object(r.a)(Object(r.a)({}, e), {}, {
                            path: i,
                            authority: e.authority || a
                        });
                        return e.children && (s.children = t.formatter(e.children, "".concat(n).concat(e.path, "/"), e.authority)),
                            s
                    }
                ))
            },
            md5Id: function(e) {
                var t = "";
                try {
                    if (null != e && null != e) {
                        var n = JSON.stringify(e);
                        if ("" != n) {
                            var a = n.split("");
                            a.sort();
                            var r = a.join("");
                            t = s()(r)
                        }
                    }
                } catch (e) {}
                return t
            },
            checkParamArrsExists: function(e, t) {
                return (e || []).some((function(e) {
                        return e.name + e.in == t.name + t.in
                    }
                ))
            },
            isChinese: function(e) {
                return new RegExp("[\\u4E00-\\u9FFF]+","g").test(e)
            },
            json5stringifyNoFormat: function(e) {
                var t = null;
                try {
                    t = l.stringify(e)
                } catch (n) {
                    t = JSON.stringify(e)
                }
                return t
            },
            json5stringify: function(e) {
                var t = null;
                try {
                    t = l.stringify(e, null, 2)
                } catch (n) {
                    t = JSON.stringify(e, null, 2)
                }
                return t
            },
            json5stringifyFormat: function(e, t, n) {
                var a = null;
                try {
                    a = l.stringify(e, t, n)
                } catch (r) {
                    a = JSON.stringify(e, t, n)
                }
                return a
            },
            json5parse: function(e) {
                var t = null;
                try {
                    t = l.parse(e)
                } catch (n) {
                    t = JSON.parse(e)
                }
                return t
            },
            filterJsonObject: function(e, t, n) {
                var a = null;
                try {
                    a = g.filterObject(e, t, n)
                } catch (e) {
                    a = t
                }
                return a
            },
            filterObject: function(e, t, n) {
                var a = {};
                if (null != n && null != n)
                    for (var r in t) {
                        var i = t[r]
                            , s = e + "." + r;
                        n.hasOwnProperty(s) || (a[r] = i);
                        var o = g.genericType(i);
                        if ("object" == o)
                            a[r] = g.filterObject(s, i, n);
                        else if ("array" == o) {
                            var l = i[0]
                                , c = new Array;
                            c.push(g.filterObject(s, l, n)),
                                a[r] = c
                        }
                    }
                else
                    a = t;
                return a
            },
            genericType: function(e) {
                var t = Object.prototype.toString.call(e)
                    , n = "";
                return null != t && null != t && (-1 != t.indexOf("Array") ? n = "array" : -1 != t.indexOf("Object") && (n = "object")),
                    n
            },
            getJsonKeyLength: function(e) {
                var t = 0;
                if (null != e)
                    for (key in e)
                        e.hasOwnProperty(key) && t++;
                return t
            },
            regexMatchStr: function(e, t) {
                var n = !1;
                null != e && null != e && null != t && null != t && (null != t.match(e) && (n = !0));
                return n
            },
            searchMatch: function(e, t) {
                var n = !1;
                return null != e && null != e && null != t && null != t && (n = new RegExp(e,"ig").test(t)),
                    n
            },
            validateJSR303: function(e, t) {
                var n = t.maximum
                    , a = t.minimum
                    , r = t.exclusiveMinimum
                    , i = t.exclusiveMaximum
                    , s = t.pattern
                    , o = t.maxLength
                    , l = t.minLength;
                n || a || r || i ? (e.validateStatus = !0,
                    e.validateInstance = {
                        minimum: a,
                        maximum: n,
                        exclusiveMaximum: i,
                        exclusiveMinimum: r
                    }) : s ? (e.validateStatus = !0,
                    e.validateInstance = {
                        pattern: t.pattern
                    }) : (o || l) && (e.validateStatus = !0,
                    e.validateInstance = {
                        maxLength: o,
                        minLength: l
                    })
            },
            checkUndefined: function(e) {
                var t = !1;
                return null != e && null != e && void 0 !== e && (t = !0),
                    t
            },
            arrNotEmpty: function(e) {
                var t = !1;
                return null != e && null != e && e.length > 0 && (t = !0),
                    t
            },
            arrEmpty: function(e) {
                return !this.arrNotEmpty(e)
            },
            strBlank: function(e) {
                return !this.strNotBlank(e)
            },
            strNotBlank: function(e) {
                var t = !1;
                return null != e && null != e && "" != e && (t = !0),
                    t
            },
            propValue: function(e, t, n) {
                var a = n;
                return t.hasOwnProperty(e) && (a = t[e]),
                    a
            },
            getExample: function(e, t, n) {
                var r = this.propValue(e, t, n);
                return d()(r) || "object" == Object(a.a)(r) && (r = this.json5stringifyNoFormat(r)),
                    r
            },
            checkIsBasicType: function(e) {
                var t = !1;
                return null != e && ["string", "integer", "number", "object", "boolean", "int32", "int64", "float", "double"].indexOf(e) > -1 && (t = !0),
                    t
            },
            getBasicTypeValue: function(e) {
                var t = "";
                return "integer" == e && (t = 0),
                "boolean" == e && (t = !0),
                "object" == e && (t = {}),
                "number" == e && (t = parseFloat(0)),
                    t
            },
            getValue: function(e, t, n, a) {
                var r = n;
                return null != e && null != e && e.hasOwnProperty(t) && (r = e[t],
                a && (null != r && "" != r && null != r || (r = n))),
                    r
            },
            getClassName: function(e, t) {
                if (t) {
                    var n = new RegExp("#/definitions/(.*)$","ig");
                    if (n.test(e)) {
                        var a = RegExp.$1;
                        return a
                    }
                } else if ((n = new RegExp("#/components/schemas/(.*)$","ig")).test(e))
                    return a = RegExp.$1;
                return null
            },
            getRefParameterName: function(e) {
                return new RegExp("#/components/parameters/(.*)$","ig").test(e) ? RegExp.$1 : null
            },
            trim: function(e) {
                var t = "[\\x20\\t\\r\\n\\f]"
                    , n = new RegExp("^" + t + "+|((?:^|[^\\\\])(?:\\\\.)*)" + t + "+$","g");
                return null == e ? "" : (e + "").replace(n, "")
            },
            getStringValue: function(e) {
                var t = "";
                return null != e && void 0 !== e && null != e && (t = e.toString()),
                    t
            },
            toString: function(e, t) {
                var n = t;
                return null != e && void 0 !== e && null != e && (n = e.toString()),
                    n
            },
            randomNumber: function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            },
            htmlEncode: function(e) {
                return null !== e ? e.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
            },
            jsString: function(e) {
                return e = JSON.stringify(e).slice(1, -1),
                    g.htmlEncode(e)
            },
            replaceMultipLineStr: function(e) {
                if (null != e && null != e && "" != e) {
                    var t = /(\r\n|\n\r|\r|\n)/g;
                    return t.test(e) ? e.replace(t, "\\n") : e
                }
                return ""
            },
            camelCase: function(e) {
                return null != e && null != e && "" != e ? 1 == e.length ? e.toLocaleLowerCase() : e.substr(0, 1).toLocaleLowerCase() + e.substr(1) : ""
            },
            generUUID: function() {
                return g.randomNumber() + g.randomNumber() + "-" + g.randomNumber() + "-" + g.randomNumber() + "-" + g.randomNumber() + "-" + g.randomNumber() + g.randomNumber() + g.randomNumber()
            },
            base64Encode: function(e) {
                for (var t, n, a, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", s = 0, o = e.length; s < o; ) {
                    if (t = 255 & e.charCodeAt(s++),
                    s == o) {
                        i += r.charAt(t >> 2),
                            i += r.charAt((3 & t) << 4),
                            i += "==";
                        break
                    }
                    if (n = e.charCodeAt(s++),
                    s == o) {
                        i += r.charAt(t >> 2),
                            i += r.charAt((3 & t) << 4 | (240 & n) >> 4),
                            i += r.charAt((15 & n) << 2),
                            i += "=";
                        break
                    }
                    a = e.charCodeAt(s++),
                        i += r.charAt(t >> 2),
                        i += r.charAt((3 & t) << 4 | (240 & n) >> 4),
                        i += r.charAt((15 & n) << 2 | (192 & a) >> 6),
                        i += r.charAt(63 & a)
                }
                return i
            },
            binToBase64: function(e) {
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = "", a = e.length % 6, r = e.substr(0, e.length - a), i = e.substr(e.length - a, a), s = 0; s < r.length; s += 6) {
                    n += t[parseInt(r.substr(s, 6), 2)]
                }
                return i += new Array(7 - a).join("0"),
                a && (n += t[parseInt(i, 2)],
                    n += new Array((6 - a) / 2 + 1).join("=")),
                    n
            },
            enumAvalibleLabel: function(e, t) {
                if (this.checkUndefined(e) && this.checkUndefined(t))
                    try {
                        return e.doc.enumAvalible + ":" + t.join(",")
                    } catch (e) {}
                if (this.checkUndefined(t))
                    return "可用值:" + t.join(",")
            }
        };
        t.a = g
    },
    b43e: function(e, t, n) {
        "use strict";
        var a = n("9731");
        n.n(a).a
    },
    cfc6: function(e, t, n) {
        "use strict";
        var a = n("3654");
        n.n(a).a
    },
    d35d: function(e, t, n) {
        "use strict";
        var a = n("7abe");
        n.n(a).a
    },
    dd9b: function(e, t, n) {},
    e3b5: function(e, t, n) {},
    e6b5: function(e, t, n) {},
    eb64: function(e, t, n) {},
    ede0: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("4de4"),
            n("4160"),
            n("b0c0"),
            n("159b"),
            n("5530"))
            , r = n("5609")
            , i = null
            , s = null
            , o = {
            props: {
                data: {
                    type: Object
                }
            },
            data: function() {
                return {
                    modelTitle: "新增参数",
                    columns: [],
                    visible: !1,
                    pagination: !1,
                    groupId: "",
                    globalParameters: [],
                    labelCol: {
                        xs: {
                            span: 21
                        },
                        sm: {
                            span: 6
                        }
                    },
                    wrapperCol: {
                        xs: {
                            span: 27
                        },
                        sm: {
                            span: 15
                        }
                    }
                }
            },
            computed: {
                language: function() {
                    return this.$store.state.globals.language
                }
            },
            watch: {
                language: function(e, t) {
                    this.initI18n()
                }
            },
            beforeCreate: function() {
                s = this,
                    this.form = this.$form.createForm(this, {
                        name: "gparameters"
                    }),
                    i = this.$localStore
            },
            created: function() {
                this.groupId = this.data.instance.id;
                var e = this.groupId;
                i.getItem(r.a.globalParameter).then((function(t) {
                        if (null != t)
                            null != t[e] && null != t[e] && (s.globalParameters = t[e]);
                        else {
                            var n = {};
                            n[e] = [],
                                i.setItem(r.a.globalParameter, n)
                        }
                    }
                )),
                    this.initI18n()
            },
            methods: {
                getCurrentI18nInstance: function() {
                    return this.$i18n.messages[this.language]
                },
                initI18n: function() {
                    var e = this.getCurrentI18nInstance();
                    this.modelTitle = e.global.model,
                        this.columns = e.global.tableHeader
                },
                headerContentChange: function(e) {
                    var t = e.target.value
                        , n = e.target.getAttribute("data-key")
                        , a = [];
                    this.globalParameters.forEach((function(e) {
                            e.pkid != n ? a.push(e) : a.push({
                                name: e.name,
                                value: t,
                                in: e.in,
                                pkid: n
                            })
                        }
                    )),
                        this.globalParameters = a,
                        this.storeGlobalParameters()
                },
                globalParamTypeChange: function(e, t) {
                    var n = this
                        , a = this.globalParameters
                        , r = t.data.attrs["data-key"]
                        , i = t.data.attrs["data-name"]
                        , o = i + e;
                    if (0 == s.globalParameters.filter((function(t) {
                            return t.name == i && t.in == e
                        }
                    )).length) {
                        var l = [];
                        this.globalParameters.forEach((function(t) {
                                t.pkid != r ? l.push(t) : l.push({
                                    name: t.name,
                                    value: t.value,
                                    in: e,
                                    pkid: o
                                })
                            }
                        )),
                            this.globalParameters = l,
                            this.storeGlobalParameters()
                    } else
                        s.$message.info("参数已存在,不可重复添加"),
                            this.globalParameters = [],
                            setTimeout((function() {
                                    n.globalParameters = a
                                }
                            ), 10)
                },
                storeGlobalParameters: function() {
                    i.getItem(r.a.globalParameter).then((function(e) {
                            var t = e;
                            t[s.groupId] = s.globalParameters,
                                i.setItem(r.a.globalParameter, t)
                        }
                    ))
                },
                deleteParam: function(e) {
                    var t = [];
                    this.globalParameters.forEach((function(n) {
                            n.name == e.name && n.in == e.in || t.push(n)
                        }
                    )),
                        this.globalParameters = t,
                        this.storeGlobalParameters()
                },
                handleOk: function(e) {
                    var t = this;
                    e.preventDefault();
                    var n = this.groupId;
                    this.form.validateFieldsAndScroll((function(e, o) {
                            if (!e)
                                if (0 == s.globalParameters.filter((function(e) {
                                        return e.name == o.name && e.in == o.in
                                    }
                                )).length) {
                                    var l = o.name + o.in
                                        , c = Object(a.a)(Object(a.a)({}, o), {}, {
                                        pkid: l
                                    });
                                    s.globalParameters.push(c),
                                        i.getItem(r.a.globalParameter).then((function(e) {
                                                var t = e;
                                                t[n] = s.globalParameters,
                                                    i.setItem(r.a.globalParameter, t)
                                            }
                                        )),
                                        t.visible = !1
                                } else
                                    s.$message.info("参数已存在,不可重复添加")
                        }
                    ))
                },
                handleCancel: function(e) {
                    this.visible = !1
                },
                addGlobalParameters: function() {
                    this.form.resetFields(),
                        this.visible = !0
                }
            }
        }
            , l = (n("f563"),
            n("2877"))
            , c = Object(l.a)(o, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [n("a-row", {
                    staticClass: "globalparameters"
                }, [n("a-row", {
                    staticClass: "gptips",
                    domProps: {
                        innerHTML: e._s(e.$t("global.note"))
                    }
                }, [e._v(" Knife4j 提供全局参数Debug功能,目前默认提供header(请求头)、query(form)两种方式的入参. "), n("br"), n("br"), e._v(" 在此添加全局参数后,默认Debug调试tab页会带上该参数 ")])], 1), n("a-row", {
                    staticClass: "globalparameters"
                }, [n("a-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.addGlobalParameters
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "plus"
                    }
                }), n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("global.add"))
                    }
                }, [e._v("添加参数")])], 1)], 1), n("a-row", {
                    staticClass: "globalparameters"
                }, [n("a-table", {
                    attrs: {
                        columns: e.columns,
                        rowKey: "pkid",
                        size: "small",
                        dataSource: e.globalParameters,
                        pagination: e.pagination,
                        bordered: ""
                    },
                    scopedSlots: e._u([{
                        key: "operation",
                        fn: function(t, a) {
                            return n("a-row", {}, [n("a-button", {
                                staticStyle: {
                                    "margin-left": "10px"
                                },
                                attrs: {
                                    icon: "delete",
                                    type: "danger"
                                },
                                domProps: {
                                    innerHTML: e._s(e.$t("global.delete"))
                                },
                                on: {
                                    click: function(t) {
                                        return e.deleteParam(a)
                                    }
                                }
                            }, [e._v("删除")])], 1)
                        }
                    }, {
                        key: "paramContentLabel",
                        fn: function(t, a) {
                            return [n("a-textarea", {
                                attrs: {
                                    "data-key": a.pkid,
                                    defaultValue: t,
                                    autoSize: {
                                        minRows: 2,
                                        maxRows: 6
                                    },
                                    allowClear: ""
                                },
                                on: {
                                    change: e.headerContentChange
                                }
                            })]
                        }
                    }, {
                        key: "paramTypeLable",
                        fn: function(t, a) {
                            return [n("a-select", {
                                attrs: {
                                    defaultValue: t
                                },
                                on: {
                                    change: e.globalParamTypeChange
                                }
                            }, [n("a-select-option", {
                                attrs: {
                                    "data-name": a.name,
                                    "data-key": a.pkid,
                                    value: "header"
                                }
                            }, [e._v("header")]), n("a-select-option", {
                                attrs: {
                                    "data-name": a.name,
                                    "data-key": a.pkid,
                                    value: "query"
                                }
                            }, [e._v("query")])], 1)]
                        }
                    }])
                })], 1), n("a-modal", {
                    attrs: {
                        title: e.modelTitle,
                        cancelText: e.$t("global.cancel"),
                        okText: e.$t("global.ok"),
                        visible: e.visible
                    },
                    on: {
                        ok: e.handleOk,
                        cancel: e.handleCancel
                    }
                }, [n("a-form", {
                    attrs: {
                        form: e.form
                    }
                }, [n("a-form-item", {
                    attrs: {
                        "label-col": e.labelCol,
                        "wrapper-col": e.wrapperCol,
                        label: e.$t("global.form.name")
                    }
                }, [n("a-input", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["name", {
                            rules: [{
                                required: !0,
                                message: ""
                            }]
                        }],
                        expression: "[\n          'name',\n          { rules: [{ required: true, message: '' }] }\n        ]"
                    }],
                    attrs: {
                        placeholder: e.$t("global.form.validate.name")
                    }
                })], 1), n("a-form-item", {
                    attrs: {
                        "label-col": e.labelCol,
                        "wrapper-col": e.wrapperCol,
                        label: e.$t("global.form.value")
                    }
                }, [n("a-input", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["value", {
                            rules: [{
                                required: !0,
                                message: ""
                            }]
                        }],
                        expression: "[\n          'value',\n          { rules: [{ required: true, message: '' }] }\n        ]"
                    }],
                    attrs: {
                        placeholder: e.$t("global.form.validate.value")
                    }
                })], 1), n("a-form-item", {
                    attrs: {
                        "label-col": e.labelCol,
                        "wrapper-col": e.wrapperCol,
                        label: e.$t("global.form.type")
                    }
                }, [n("a-select", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["in", {
                            rules: [{
                                required: !0,
                                message: "请选择参数类型"
                            }],
                            initialValue: "header"
                        }],
                        expression: "[\n          'in',\n          {\n            rules: [{ required: true, message: '请选择参数类型' }],\n            initialValue: 'header'\n          }\n        ]"
                    }]
                }, [n("a-select-option", {
                    attrs: {
                        value: "header"
                    }
                }, [e._v("header")]), n("a-select-option", {
                    attrs: {
                        value: "query"
                    }
                }, [e._v("query")])], 1)], 1)], 1)], 1)], 1)
            }
        ), [], !1, null, "556484d1", null);
        t.default = c.exports
    },
    ee09: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("c975"),
            n("5609"))
            , r = null
            , i = null
            , s = {
            props: {
                data: {
                    type: Object
                }
            },
            computed: {
                swaggerCurrentInstance: function() {
                    return this.$store.state.globals.swaggerCurrentInstance
                },
                language: function() {
                    return this.$store.state.globals.language
                }
            },
            data: function() {
                return {
                    settings: a.a.defaultSettings,
                    hostValue: "",
                    labelCol: {
                        xs: {
                            span: 21
                        },
                        sm: {
                            span: 8
                        }
                    },
                    wrapperCol: {
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 12
                        }
                    }
                }
            },
            beforeCreate: function() {
                i = this,
                    r = this.$localStore,
                    i.$message.config({
                        top: "100px"
                    })
            },
            created: function() {
                var e = this.swaggerCurrentInstance.host;
                r.getItem(a.a.globalSettingsKey).then((function(t) {
                        null != t ? (null != t.enableDynamicParameter && null != t.enableDynamicParameter || (t.enableDynamicParameter = !1),
                            i.settings = t,
                            t.hasOwnProperty("enableHost") ? null != i.settings.enableHostText && "" != i.settings.enableHostText && null != i.settings.enableHostText || (i.settings.enableHostText = e) : (i.settings.enableHost = !1,
                                i.settings.enableHostText = e)) : (i.settings.enableHostText = e,
                            r.setItem(a.a.globalSettingsKey, i.settings))
                    }
                ))
            },
            methods: {
                getCurrentI18nInstance: function() {
                    return this.$i18n.messages[this.language]
                },
                hostChange: function(e) {
                    var t = e.target.value;
                    this.settings.enableHostText = t,
                        this.saveSettingForLocal()
                },
                checkboxChange: function(e) {
                    var t = this.settings[e];
                    this.settings[e] = null == t || null == t || !t,
                        "enableSwaggerBootstrapUi" == e ? this.settings.enableSwaggerBootstrapUi ? this.validateKnife4j() : this.saveSettingForLocal() : "enableHost" == e && this.settings.enableHost ? this.validateHost() : this.saveSettingForLocal()
                },
                filterOptionsChange: function(e) {
                    this.settings.enableFilterMultipartApiMethodType = e,
                        this.saveSettingForLocal()
                },
                saveSettingForLocal: function() {
                    r.setItem(a.a.globalSettingsKey, i.settings)
                },
                validateHost: function() {
                    var e = this.settings.enableHostText;
                    if (null == e || "" == e || null == e)
                        return this.settings.enableHost = !1,
                            this.$message.error("Please Check Host Value"),
                            !1;
                    var t = this.getCurrentI18nInstance();
                    this.$message.success(t.message.settingHost, 2),
                        this.saveSettingForLocal()
                },
                validateKnife4j: function() {
                    var e = this.data.instance.extUrl;
                    0 == e.indexOf("/") && (e = e.substr(1));
                    var t = !0;
                    this.$axios({
                        url: e,
                        dataType: "json",
                        type: "get"
                    }).then((function(e) {
                            if (null != e && e.hasOwnProperty("swaggerBootstrapUi")) {
                                var n = e.swaggerBootstrapUi;
                                if (null != n && null != n && n.hasOwnProperty("errorMsg")) {
                                    var r = n.errorMsg;
                                    if (null != r && null != r && "" != r) {
                                        var s = a.a.i18n.zh.message.settings.plusError + r;
                                        i.$message.info(s),
                                            t = !1
                                    }
                                }
                            }
                            i.settings.enableSwaggerBootstrapUi = t,
                                i.saveSettingForLocal()
                        }
                    )).catch((function(e) {
                            i.$message.info(a.a.i18n.zh.message.settings.plusFail),
                                t = !1,
                                i.settings.enableSwaggerBootstrapUi = t,
                                i.saveSettingForLocal()
                        }
                    ))
                },
                saveSettings: function() {
                    if (this.settings.enableFilterMultipartApis || (this.settings.enableFilterMultipartApiMethodType = "POST"),
                        this.settings.enableSwaggerBootstrapUi) {
                        var e = this.data.instance.extUrl;
                        0 == e.indexOf("/") && (e = e.substr(1)),
                            e = "/tx/fff/www/xx";
                        var t = !0;
                        this.$axios({
                            url: e,
                            dataType: "json",
                            type: "get"
                        }).then((function(e) {
                                if (null != e && e.hasOwnProperty("swaggerBootstrapUi")) {
                                    var n = e.swaggerBootstrapUi;
                                    if (null != n && null != n && n.hasOwnProperty("errorMsg")) {
                                        var r = n.errorMsg;
                                        if (null != r && null != r && "" != r) {
                                            var s = a.a.i18n.zh.message.settings.plusError + r;
                                            i.$message.info(s),
                                                t = !1
                                        }
                                    }
                                }
                                i.settings.enableSwaggerBootstrapUi = t,
                                    i.saveSettingForLocal(t)
                            }
                        )).catch((function(e) {
                                i.$message.info(a.a.i18n.zh.message.settings.plusFail),
                                    t = !1,
                                    i.settings.enableSwaggerBootstrapUi = t,
                                    i.saveSettingForLocal(t)
                            }
                        ))
                    } else
                        i.saveSettingForLocal(!0)
                }
            }
        }
            , o = (n("d35d"),
            n("2877"))
            , l = Object(o.a)(s, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [n("a-row", {
                    staticClass: "settingConfig"
                }, [n("a-row", {
                    staticClass: "gptips",
                    domProps: {
                        innerHTML: e._s(e.$t("message.settingTip"))
                    }
                }, [e._v(" 启用个性化配置后,接口Tab标签需关闭后重新打开或者刷新当前页面 ")])], 1), n("a-row", {
                    staticClass: "settingConfig"
                }, [n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("a-checkbox", {
                    attrs: {
                        checked: e.settings.enableRequestCache
                    },
                    on: {
                        change: function(t) {
                            return e.checkboxChange("enableRequestCache")
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("settings.openCache"))
                    }
                })])], 1)], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("a-checkbox", {
                    attrs: {
                        checked: e.settings.enableDynamicParameter
                    },
                    on: {
                        change: function(t) {
                            return e.checkboxChange("enableDynamicParameter")
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("settings.dynamicParameter"))
                    }
                })])], 1)], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("a-checkbox", {
                    attrs: {
                        checked: e.settings.enableFilterMultipartApis
                    },
                    on: {
                        change: function(t) {
                            return e.checkboxChange("enableFilterMultipartApis")
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: e._s(e.$t("settings.apiFilter"))
                    }
                })]), n("a-select", {
                    staticStyle: {
                        width: "140px"
                    },
                    attrs: {
                        value: e.settings.enableFilterMultipartApiMethodType
                    },
                    on: {
                        change: e.filterOptionsChange
                    }
                }, [n("a-select-option", {
                    attrs: {
                        value: "GET"
                    }
                }, [e._v("GET")]), n("a-select-option", {
                    attrs: {
                        value: "POST"
                    }
                }, [e._v("POST")]), n("a-select-option", {
                    attrs: {
                        value: "PUT"
                    }
                }, [e._v("PUT")]), n("a-select-option", {
                    attrs: {
                        value: "DELETE"
                    }
                }, [e._v("DELETE")]), n("a-select-option", {
                    attrs: {
                        value: "PATCH"
                    }
                }, [e._v("PATCH")]), n("a-select-option", {
                    attrs: {
                        value: "OPTIONS"
                    }
                }, [e._v("OPTIONS")]), n("a-select-option", {
                    attrs: {
                        value: "HEAD"
                    }
                }, [e._v("HEAD")])], 1)], 1)], 1), n("a-divider", {
                    staticClass: "divider"
                }), n("a-divider", {
                    staticClass: "divider"
                }), n("a-row", {
                    staticClass: "content-line"
                }, [n("a-col", {
                    attrs: {
                        span: 24
                    }
                }, [n("a-checkbox", {
                    attrs: {
                        checked: e.settings.enableHost
                    },
                    on: {
                        change: function(t) {
                            return e.checkboxChange("enableHost")
                        }
                    }
                }, [n("span", [e._v("Host: "), n("a-input", {
                    staticStyle: {
                        width: "300px"
                    },
                    attrs: {
                        value: e.settings.enableHostText
                    },
                    on: {
                        change: e.hostChange
                    }
                })], 1)])], 1)], 1), n("a-divider", {
                    staticClass: "divider"
                })], 1)], 1)
            }
        ), [], !1, null, "869b8b5e", null);
        t.default = l.exports
    },
    f3b8: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = (n("a4d3"),
            n("e01a"),
            n("4160"),
            n("c975"),
            n("b0c0"),
            n("159b"),
            n("b1c7"))
            , r = n("5609")
            , i = {
            props: {
                data: {
                    type: Object
                }
            },
            computed: {
                language: function() {
                    return this.$store.state.globals.language
                },
                swagger: function() {
                    return this.$store.state.globals.swagger
                }
            },
            watch: {
                language: function(e, t) {
                    this.initI18n()
                }
            },
            created: function() {
                this.initI18n(),
                    this.initModelNames()
            },
            data: function() {
                return {
                    columns: [],
                    expanRows: !0,
                    page: !1,
                    modelNames: []
                }
            },
            methods: {
                getCurrentI18nInstance: function() {
                    return this.$i18n.messages[this.language]
                },
                initI18n: function() {
                    this.columns = this.getCurrentI18nInstance().table.swaggerModelsColumns
                },
                unionKey: function() {
                    return a.a.randomMd5()
                },
                initModelNames: function() {
                    var e = r.a.globalTreeTableModelParams + this.data.instance.id
                        , t = this.data.instance.swaggerTreeTableModels;
                    if (this.$Knife4jModels.setValue(e, t),
                        a.a.checkUndefined(t))
                        for (var n in t) {
                            var i = {
                                id: n,
                                name: n,
                                load: !1,
                                data: [],
                                random: parseInt(6 * Math.random() + 1, 10),
                                modelClass: function() {
                                    var e = "panel-default";
                                    switch (this.random) {
                                        case 1:
                                        case 2:
                                            e = "panel-success";
                                            break;
                                        case 3:
                                            e = "panel-info";
                                            break;
                                        case 4:
                                            e = "panel-warning";
                                            break;
                                        case 5:
                                            e = "panel-danger";
                                            break;
                                        case 6:
                                            e = "panel-default"
                                    }
                                    return e
                                }
                            };
                            this.modelNames.push(i)
                        }
                },
                modelChange: function(e) {
                    var t = this
                        , n = r.a.globalTreeTableModelParams + this.data.instance.id;
                    if (a.a.arrNotEmpty(e)) {
                        var i = e[e.length - 1];
                        this.modelNames.forEach((function(e) {
                                if (e.id == i && !e.load) {
                                    var r = []
                                        , s = t.$Knife4jModels.getByModelName(n, e.name);
                                    s = t.swagger.analysisDefinitionRefTableModel(t.data.instance.id, s),
                                    a.a.checkUndefined(s) && a.a.arrNotEmpty(s.params) && s.params.forEach((function(e) {
                                            var t = {
                                                children: e.children,
                                                childrenTypes: e.childrenTypes,
                                                def: e.def,
                                                description: e.description,
                                                enum: e.enum,
                                                example: e.example,
                                                id: e.id,
                                                ignoreFilterName: e.ignoreFilterName,
                                                in: e.in,
                                                level: e.level,
                                                name: e.name,
                                                parentTypes: e.parentTypes,
                                                pid: "-1",
                                                readOnly: e.readOnly,
                                                require: e.require,
                                                schema: e.schema,
                                                schemaValue: e.schemaValue,
                                                show: e.show,
                                                txtValue: e.txtValue,
                                                type: e.type,
                                                validateInstance: e.validateInstance,
                                                validateStatus: e.validateStatus,
                                                value: e.value
                                            };
                                            r.push(t)
                                        }
                                    )),
                                        e.data = r,
                                        e.load = !0
                                }
                            }
                        ))
                    }
                    t.expanRows = !0
                },
                deepFindChildren: function(e) {
                    var t = this
                        , n = [];
                    return a.a.arrNotEmpty(e) && e.forEach((function(a) {
                            var r = {
                                childrenTypes: a.childrenTypes,
                                def: a.def,
                                description: a.description,
                                enum: a.enum,
                                example: a.example,
                                id: a.id,
                                ignoreFilterName: a.ignoreFilterName,
                                in: a.in,
                                level: a.level,
                                name: a.name,
                                parentTypes: a.parentTypes,
                                pid: a.pid,
                                readOnly: a.readOnly,
                                require: a.require,
                                schema: a.schema,
                                schemaValue: a.schemaValue,
                                show: a.show,
                                txtValue: a.txtValue,
                                type: a.type,
                                validateInstance: a.validateInstance,
                                validateStatus: a.validateStatus,
                                value: a.value
                            };
                            "-1" == r.pid && (r.children = [],
                                r.childrenIds = [],
                                t.findModelChildren(r, e),
                            0 == r.children.length && (r.children = null),
                                n.push(r))
                        }
                    )),
                        n
                },
                findModelChildren: function(e, t) {
                    var n = this;
                    a.a.arrNotEmpty(t) && t.forEach((function(a) {
                            var r = {
                                childrenTypes: a.childrenTypes,
                                def: a.def,
                                description: a.description,
                                enum: a.enum,
                                example: a.example,
                                id: a.id,
                                ignoreFilterName: a.ignoreFilterName,
                                in: a.in,
                                level: a.level,
                                name: a.name,
                                parentTypes: a.parentTypes,
                                pid: a.pid,
                                readOnly: a.readOnly,
                                require: a.require,
                                schema: a.schema,
                                schemaValue: a.schemaValue,
                                show: a.show,
                                txtValue: a.txtValue,
                                type: a.type,
                                validateInstance: a.validateInstance,
                                validateStatus: a.validateStatus,
                                value: a.value
                            };
                            r.pid == e.id && (r.children = [],
                                r.childrenIds = [],
                                n.findModelChildren(r, t),
                            0 == r.children.length && (r.children = null),
                            -1 == e.childrenIds.indexOf(r.id) && (e.childrenIds.push(r.id),
                                e.children.push(r)))
                        }
                    ))
                },
                deepTreeTableSchemaModel: function(e, t, n, r) {
                    var i = this;
                    if (a.a.checkUndefined(n.schemaValue)) {
                        var s = t[n.schemaValue];
                        a.a.checkUndefined(s) && (r.parentTypes.push(n.schemaValue),
                        a.a.arrNotEmpty(s.params) && s.params.forEach((function(a) {
                                var s = {
                                    childrenTypes: a.childrenTypes,
                                    def: a.def,
                                    description: a.description,
                                    enum: a.enum,
                                    example: a.example,
                                    id: a.id,
                                    ignoreFilterName: a.ignoreFilterName,
                                    in: a.in,
                                    level: a.level,
                                    name: a.name,
                                    parentTypes: a.parentTypes,
                                    pid: a.pid,
                                    readOnly: a.readOnly,
                                    require: a.require,
                                    schema: a.schema,
                                    schemaValue: a.schemaValue,
                                    show: a.show,
                                    txtValue: a.txtValue,
                                    type: a.type,
                                    validateInstance: a.validateInstance,
                                    validateStatus: a.validateStatus,
                                    value: a.value
                                };
                                s.pid = n.id,
                                    e.push(s),
                                s.schema && -1 == r.parentTypes.indexOf(s.schemaValue) && i.deepTreeTableSchemaModel(e, t, s, r)
                            }
                        )))
                    }
                }
            }
        }
            , s = (n("229e"),
            n("2877"))
            , o = Object(s.a)(i, (function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("a-layout-content", {
                    staticClass: "knife4j-body-content"
                }, [n("div", {
                    staticClass: "swaggermododel"
                }, [n("a-collapse", {
                    on: {
                        change: e.modelChange
                    }
                }, e._l(e.modelNames, (function(t) {
                        return n("a-collapse-panel", {
                            key: t.id,
                            class: t.modelClass(),
                            attrs: {
                                header: t.name
                            }
                        }, [t.load ? n("a-table", {
                            attrs: {
                                defaultExpandAllRows: e.expanRows,
                                columns: e.columns,
                                dataSource: t.data,
                                rowKey: e.unionKey,
                                size: "middle",
                                pagination: e.page
                            },
                            scopedSlots: e._u([{
                                key: "descriptionValueTemplate",
                                fn: function(t) {
                                    return [n("span", {
                                        domProps: {
                                            innerHTML: e._s(t)
                                        }
                                    })]
                                }
                            }], null, !0)
                        }) : e._e()], 1)
                    }
                )), 1)], 1)])
            }
        ), [], !1, null, "6f8734a9", null);
        t.default = o.exports
    },
    f563: function(e, t, n) {
        "use strict";
        var a = n("e3b5");
        n.n(a).a
    },
    f7c5: function(e, t, n) {
        "use strict";
        var a = n("dd9b");
        n.n(a).a
    },
    fbc4: function(e, t, n) {
        "use strict";
        var a = n("32ba");
        n.n(a).a
    }
});
