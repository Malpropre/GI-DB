(function (n) {
    function o(o) {
        for (var t, s, c = o[0], b = o[1], i = o[2], l = 0, d = []; l < c.length; l++) (s = c[l]), Object.prototype.hasOwnProperty.call(a, s) && a[s] && d.push(a[s][0]), (a[s] = 0);
        for (t in b) Object.prototype.hasOwnProperty.call(b, t) && (n[t] = b[t]);
        u && u(o);
        while (d.length) d.shift()();
        return r.push.apply(r, i || []), e();
    }
    function e() {
        for (var n, o = 0; o < r.length; o++) {
            for (var e = r[o], t = !0, s = 1; s < e.length; s++) {
                var b = e[s];
                0 !== a[b] && (t = !1);
            }
            t && (r.splice(o--, 1), (n = c((c.s = e[0]))));
        }
        return n;
    }
    var t = {},
        a = { app: 0 },
        r = [];
    function s(n) {
        return c.p + "js/" + ({ policy: "policy" }[n] || n) + "." + { policy: "e0d50e11" }[n] + ".js";
    }
    function c(o) {
        if (t[o]) return t[o].exports;
        var e = (t[o] = { i: o, l: !1, exports: {} });
        return n[o].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.e = function (n) {
        var o = [],
            e = a[n];
        if (0 !== e)
            if (e) o.push(e[2]);
            else {
                var t = new Promise(function (o, t) {
                    e = a[n] = [o, t];
                });
                o.push((e[2] = t));
                var r,
                    b = document.createElement("script");
                (b.charset = "utf-8"), (b.timeout = 120), c.nc && b.setAttribute("nonce", c.nc), (b.src = s(n));
                var i = new Error();
                r = function (o) {
                    (b.onerror = b.onload = null), clearTimeout(l);
                    var e = a[n];
                    if (0 !== e) {
                        if (e) {
                            var t = o && ("load" === o.type ? "missing" : o.type),
                                r = o && o.target && o.target.src;
                            (i.message = "Loading chunk " + n + " failed.\n(" + t + ": " + r + ")"), (i.name = "ChunkLoadError"), (i.type = t), (i.request = r), e[1](i);
                        }
                        a[n] = void 0;
                    }
                };
                var l = setTimeout(function () {
                    r({ type: "timeout", target: b });
                }, 12e4);
                (b.onerror = b.onload = r), document.head.appendChild(b);
            }
        return Promise.all(o);
    }),
        (c.m = n),
        (c.c = t),
        (c.d = function (n, o, e) {
            c.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: e });
        }),
        (c.r = function (n) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (c.t = function (n, o) {
            if ((1 & o && (n = c(n)), 8 & o)) return n;
            if (4 & o && "object" === typeof n && n && n.__esModule) return n;
            var e = Object.create(null);
            if ((c.r(e), Object.defineProperty(e, "default", { enumerable: !0, value: n }), 2 & o && "string" != typeof n))
                for (var t in n)
                    c.d(
                        e,
                        t,
                        function (o) {
                            return n[o];
                        }.bind(null, t)
                    );
            return e;
        }),
        (c.n = function (n) {
            var o =
                n && n.__esModule
                    ? function () {
                          return n["default"];
                      }
                    : function () {
                          return n;
                      };
            return c.d(o, "a", o), o;
        }),
        (c.o = function (n, o) {
            return Object.prototype.hasOwnProperty.call(n, o);
        }),
        (c.p = "/"),
        (c.oe = function (n) {
            throw (console.error(n), n);
        });
    var b = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        i = b.push.bind(b);
    (b.push = o), (b = b.slice());
    for (var l = 0; l < b.length; l++) o(b[l]);
    var u = i;
    r.push([0, "chunk-vendors"]), e();
})({
    0: function (n, o, e) {
        n.exports = e("56d7");
    },
    "0808": function (n, o, e) {
        "use strict";
        e("dc41");
    },
    "09b9": function (n, o, e) {
        "use strict";
        e("9991");
    },
    "13da": function (n, o, e) {
        "use strict";
        e("93bd");
    },
    "15e9": function (n, o, e) {
        "use strict";
        e("290a");
    },
    "1b03": function (n, o, e) {},
    "21e7": function (n, o, e) {
        "use strict";
        e("81d3");
    },
    2515: function (n, o, e) {},
    2707: function (n, o, e) {
        "use strict";
        e("2515");
    },
    "290a": function (n, o, e) {},
    "56d7": function (n, o, e) {
        "use strict";
        e.r(o);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var t = e("f2bf"),
            a = { key: 0, id: "topnav", class: "p-2 w-100 text-light text-right fixed-top" },
            r = Object(t["j"])(" We rely on donations to pay the server fee (USD 300~500 monthly) Help us and Donate "),
            s = Object(t["k"])(
                "a",
                {
                    target: "_blank",
                    class: "btn btn-sm btn-success px-1 py-0",
                    href: "#",
                },
                " Other ",
                -1
            ),
            c = Object(t["j"])(" 💗 "),
            b = Object(t["k"])("ins", { class: "adsbygoogle fixed-bottom d-lg-none", style: { display: "block", width: "360px", height: "50px" }, "data-ad-client": "#", "data-ad-slot": "#" }, null, -1);
        function i(n, o, e, i, l, u) {
            var d = Object(t["C"])("router-view"),
                m = Object(t["C"])("Messages"),
                p = Object(t["C"])("Modal");
            return (
                Object(t["v"])(),
                Object(t["g"])(
                    t["a"],
                    null,
                    [
                        l.isMobile
                            ? Object(t["h"])("", !0)
                            : (Object(t["v"])(),
                              Object(t["g"])("div", a, [
                                  r,
                                  (Object(t["v"])(),
                                  Object(t["g"])(
                                      t["a"],
                                      null,
                                      Object(t["B"])([2, 5, 10, 20], function (n) {
                                          return Object(t["k"])(
                                              "a",
                                              {
                                                  target: "_blank",
                                                  key: n,
                                                  class: "btn btn-sm btn-success px-1 py-0 mr-1",
                                                  href:
                                                      "#" +
                                                      n,
                                              },
                                              " $" + Object(t["F"])(n),
                                              9,
                                              ["href"]
                                          );
                                      }),
                                      64
                                  )),
                                  s,
                                  c,
                              ])),
                        Object(t["k"])(d, null, {
                            default: Object(t["L"])(function (n) {
                                var o = n.Component;
                                return [(Object(t["v"])(), Object(t["g"])(t["b"], null, [(Object(t["v"])(), Object(t["g"])(Object(t["D"])(o)))], 1024))];
                            }),
                            _: 1,
                        }),
                        Object(t["k"])(m),
                        l.showModal
                            ? (Object(t["v"])(),
                              Object(t["g"])(p, {
                                  key: 1,
                                  onOnOk:
                                      o[1] ||
                                      (o[1] = function (n) {
                                          return (l.showModal = !1);
                                      }),
                              }))
                            : Object(t["h"])("", !0),
                        b,
                    ],
                    64
                )
            );
        }
        var l = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
            u = Object(t["N"])("data-v-7d440a42");
        Object(t["y"])("data-v-7d440a42");
        var d = { id: "messages", class: "fixed-top m-md-3" },
            m = Object(t["k"])("span", { "aria-hidden": "true" }, "×", -1);
        Object(t["w"])();
        var p = u(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])("div", d, [
                        Object(t["k"])(
                            t["d"],
                            { name: "slide-fade" },
                            {
                                default: u(function () {
                                    return [
                                        (Object(t["v"])(!0),
                                        Object(t["g"])(
                                            t["a"],
                                            null,
                                            Object(t["B"])(n.messages, function (o) {
                                                return (
                                                    Object(t["v"])(),
                                                    Object(t["g"])(
                                                        "div",
                                                        { key: o.id, class: ["alert rounded-0 mb-1 text-center", ["alert-" + o.style]] },
                                                        [
                                                            Object(t["M"])(Object(t["k"])("b", { class: "mr-1" }, Object(t["F"])(o.title), 513), [[t["J"], o.title]]),
                                                            Object(t["k"])("span", { innerHTML: o.body }, null, 8, ["innerHTML"]),
                                                            Object(t["k"])(
                                                                "button",
                                                                {
                                                                    type: "button",
                                                                    class: "close",
                                                                    "aria-label": "Close",
                                                                    onClick: function (e) {
                                                                        return n.removeMessage(o);
                                                                    },
                                                                },
                                                                [m],
                                                                8,
                                                                ["onClick"]
                                                            ),
                                                        ],
                                                        2
                                                    )
                                                );
                                            }),
                                            128
                                        )),
                                    ];
                                }),
                                _: 1,
                            }
                        ),
                    ])
                );
            }),
            g = (e("d3b7"), e("5530")),
            h = e("5502"),
            f = {
                name: "Messages",
                computed: Object(h["d"])({
                    messages: function (n) {
                        return n.ui.messages;
                    },
                }),
                data: function () {
                    return { timeframe: 432e5 };
                },
                mounted: function () {},
                methods: Object(g["a"])(
                    Object(g["a"])({}, Object(h["c"])({ addMessage: "ui/addMessage", removeMessage: "ui/removeMessage" })),
                    {},
                    {
                        checkVersion: function () {
                            var n = this;
                            fetch("https://genshin-impact.firebaseio.com/bootstrap/version.json")
                                .then(function (n) {
                                    return n.json();
                                })
                                .then(function (o) {
                                    o &&
                                        o.required &&
                                        o.required > "20200820" &&
                                        n.addMessage({
                                            style: "danger",
                                            title: "UPDATE",
                                            body: 'There is a new version of the map.<br><a href="'.concat("https://genshin-impact-map.appsample.com", '"><u>Click here to reload page.</u></a>'),
                                            expires: n.timeframe / 1e3,
                                        });
                                });
                        },
                        checkNotice: function () {
                            var n = this;
                            fetch("https://genshin-impact.firebaseio.com/bootstrap/notice.json")
                                .then(function (n) {
                                    return n.json();
                                })
                                .then(function (o) {
                                    o && o.body && n.addMessage({ style: o.style, title: o.title, body: o.body, expires: o.expires });
                                })
                                .catch(function (n) {
                                    console.error(n);
                                });
                        },
                    }
                ),
            };
        e("15e9");
        (f.render = p), (f.__scopeId = "data-v-7d440a42");
        var k = f,
            v = Object(t["N"])("data-v-eecbde64");
        Object(t["y"])("data-v-eecbde64");
        var j = { class: "modal d-block" },
            O = { class: "modal-dialog modal-dialog-centered", role: "document" },
            y = { class: "modal-content" },
            w = Object(t["k"])("div", { class: "modal-header" }, [Object(t["k"])("h5", { class: "modal-title" }, "JUST A PREVIEW !")], -1),
            M = Object(t["k"])(
                "div",
                { class: "modal-body" },
                [
                    Object(t["k"])("p", null, "This is a pre-release version of Genshin Impact World Map."),
                    Object(t["k"])("p", null, "For stable release, please visit:"),
                    Object(t["k"])("p", null, [Object(t["k"])("a", { class: "font-weight-bold text-danger", href: "https://genshin-impact-map.appsample.com" }, "https://genshin-impact-map.appsample.com")]),
                ],
                -1
            ),
            C = { class: "modal-footer" };
        Object(t["w"])();
        var A = v(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])("div", j, [
                        Object(t["k"])("div", O, [
                            Object(t["k"])("div", y, [
                                w,
                                M,
                                Object(t["k"])("div", C, [
                                    Object(t["k"])(
                                        "button",
                                        {
                                            type: "button",
                                            class: "btn btn-primary",
                                            onClick:
                                                o[1] ||
                                                (o[1] = function (n) {
                                                    return s.ok();
                                                }),
                                        },
                                        "GOT IT"
                                    ),
                                ]),
                            ]),
                        ]),
                    ])
                );
            }),
            S = {
                name: "Modal",
                methods: {
                    ok: function () {
                        this.$emit("on-ok");
                    },
                },
            };
        e("0808");
        (S.render = A), (S.__scopeId = "data-v-eecbde64");
        var F = S,
            I = (e("c975"), e("a434"), e("d4ec")),
            L = e("bee2"),
            D = e("53ca"),
            z = (function () {
                function n() {
                    Object(I["a"])(this, n);
                }
                return (
                    Object(L["a"])(n, [
                        {
                            key: "get",
                            value: function (n) {
                                var o,
                                    e = localStorage.getItem(n);
                                try {
                                    return (o = JSON.parse(e)), Promise.resolve(o || e);
                                } catch (t) {
                                    return console.error(t), Promise.reject(t);
                                }
                            },
                        },
                        {
                            key: "set",
                            value: function (n, o) {
                                var e = o;
                                try {
                                    switch (Object(D["a"])(o)) {
                                        case "object":
                                            e = JSON.stringify(o);
                                            break;
                                    }
                                    return localStorage.setItem(n, e), Promise.resolve(e);
                                } catch (t) {
                                    return console.error(t), Promise.reject(t);
                                }
                            },
                        },
                    ]),
                    n
                );
            })(),
            x = new z(),
            T = x,
            U = (function () {
                function n(o) {
                    Object(I["a"])(this, n), (this.provider = o);
                }
                return (
                    Object(L["a"])(n, [
                        {
                            key: "get",
                            value: function (n) {
                                return this.provider.get(n);
                            },
                        },
                        {
                            key: "set",
                            value: function (n, o) {
                                return this.provider.set(n, o);
                            },
                        },
                        {
                            key: "isOnList",
                            value: function (n, o) {
                                return this.get(n).then(function (n) {
                                    return n && n.indexOf(o) > -1;
                                });
                            },
                        },
                        {
                            key: "addToList",
                            value: function (n, o) {
                                var e = this;
                                return this.provider.addToList
                                    ? this.provider.addToList(n, o)
                                    : this.get(n).then(function (t) {
                                          return Array.isArray(t) ? -1 == t.indexOf(o) && t.push(o) : (t = [o]), e.set(n, t);
                                      });
                            },
                        },
                        {
                            key: "removeFromList",
                            value: function (n, o) {
                                var e = this;
                                return this.provider.removeFromList
                                    ? this.provider.removeFromList(n, o)
                                    : this.get(n).then(function (t) {
                                          if (Array.isArray(t)) {
                                              var a = t.indexOf(o);
                                              a > -1 && t.splice(a, 1);
                                          } else t = [];
                                          return e.set(n, t);
                                      });
                            },
                        },
                    ]),
                    n
                );
            })(),
            P = new U(T),
            V = P,
            _ = {
                name: "App",
                components: { Messages: k, Modal: F },
                data: function () {
                    return { showModal: /web\.app/.test(window.location.href) || /firebaseapp\.com/.test(window.location.href), googleInit: null, isMobile: l };
                },
                created: function () {
                    var n = this;
                    V.get("gim-local-markers").then(function (o) {
                        o && Array.isArray(o.markerIds) && n.$store.commit("user/setUserData", { localMarkers: o.markerIds });
                    });
                },
                mounted: function () {
                    this.$store.dispatch("user/syncSignInStatus"),
                        (this.googleInit = setTimeout(function () {
                            try {
                                "undefined" !== typeof window && window.self == window.top && (window.adsbygoogle = window.adsbygoogle || []).push({});
                            } catch (n) {
                                return;
                            }
                        }, 1e3));
                },
                unmounted: function () {
                    this.googleInit && clearTimeout(this.googleInit);
                },
            };
        e("9cdc");
        _.render = i;
        var B = _,
            $ = e("6c02");
        function N(n, o, e, a, r, s) {
            var c = Object(t["C"])("Map"),
                b = Object(t["C"])("Sidebar");
            return Object(t["v"])(), Object(t["g"])("div", null, [Object(t["k"])(c), Object(t["k"])(b)]);
        }
        e("b0c0");
        var E = Object(t["N"])("data-v-c3900caa");
        Object(t["y"])("data-v-c3900caa");
        var G = Object(t["k"])("div", { id: "mapDiv", class: "w-100" }, null, -1),
            W = { key: 0, id: "dragConfirm", class: "fixed-bottom m-md-3" },
            R = Object(t["k"])("div", { class: "progress" }, [Object(t["k"])("div", { class: "progress-bar progress-bar-striped progress-bar-animated bg-warning w-100" })], -1),
            q = { class: "alert alert-warning p-4 shadow text-center" },
            H = { class: "mb-3" };
        Object(t["w"])();
        var Y = E(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])(
                        t["a"],
                        null,
                        [
                            G,
                            n.draggedMarker
                                ? (Object(t["v"])(),
                                  Object(t["g"])("div", W, [
                                      R,
                                      Object(t["k"])("div", q, [
                                          Object(t["k"])("h5", H, 'You just moved "' + Object(t["F"])(n.draggedMarker.name) + " #" + Object(t["F"])(n.draggedMarker.id) + '"', 1),
                                          Object(t["k"])("div", null, [
                                              Object(t["k"])(
                                                  "button",
                                                  {
                                                      class: "btn btn-success mr-3",
                                                      onClick:
                                                          o[1] ||
                                                          (o[1] = function (n) {
                                                              return s.submitDrag();
                                                          }),
                                                  },
                                                  "Submit Your Change"
                                              ),
                                              Object(t["k"])(
                                                  "button",
                                                  {
                                                      class: "btn btn-outline-danger",
                                                      onClick:
                                                          o[2] ||
                                                          (o[2] = function (o) {
                                                              return n.discardDrag();
                                                          }),
                                                  },
                                                  "Discard"
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : Object(t["h"])("", !0),
                        ],
                        64
                    )
                );
            }),
            J = (e("caad"), e("d81d"), e("2532"), e("ade3")),
            K = (e("4160"), e("ac1f"), e("1276"), e("159b"), e("59ca")),
            Q =
                (e("ea7b"),
                e("e71f"),
                (function () {
                    function n(o) {
                        Object(I["a"])(this, n), (this.project = o), (this.db = o.firestore());
                    }
                    return (
                        Object(L["a"])(n, [
                            {
                                key: "signIn",
                                value: function () {
                                    var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return this.project
                                        .auth()
                                        .setPersistence("session")
                                        .then(function () {
                                            var o = new K["auth"].GoogleAuthProvider();
                                            return n ? K["auth"]().signInWithRedirect(o) : K["auth"]().signInWithPopup(o);
                                        })
                                        .then(function (n) {
                                            return n.user;
                                        });
                                },
                            },
                            {
                                key: "signOut",
                                value: function () {
                                    return this.project.auth().signOut();
                                },
                            },
                            {
                                key: "checkSignIn",
                                value: function (n) {
                                    this.project.auth().onAuthStateChanged(function (o) {
                                        o && n(o);
                                    });
                                },
                            },
                            {
                                key: "now",
                                value: function () {
                                    return K["firestore"].Timestamp.now();
                                },
                            },
                            {
                                key: "_getQuery",
                                value: function (n) {
                                    var o = n.split("/"),
                                        e = this.db;
                                    return (
                                        o.forEach(function (n, o) {
                                            e = e[o % 2 ? "doc" : "collection"](n);
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "get",
                                value: function (n) {
                                    return this._getQuery(n)
                                        .get()
                                        .then(function (n) {
                                            if ("function" === typeof n.data) return n.data();
                                            var o = {};
                                            return (
                                                n.forEach(function (n) {
                                                    o[n.id] = n.data();
                                                }),
                                                o
                                            );
                                        })
                                        .catch(function (n) {
                                            console.error(n);
                                        });
                                },
                            },
                            {
                                key: "set",
                                value: function (n, o) {
                                    return this._getQuery(n)
                                        .set(o, { merge: !0 })
                                        .then(function () {
                                            return o;
                                        })
                                        .catch(function (n) {
                                            console.error(n);
                                        });
                                },
                            },
                            {
                                key: "delete",
                                value: function (n) {
                                    return this._getQuery(n)
                                        .delete()
                                        .then(function () {
                                            return !0;
                                        })
                                        .catch(function (n) {
                                            console.error(n);
                                        });
                                },
                            },
                            {
                                key: "addToList",
                                value: function (n, o, e) {
                                    var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        a = Object(J["a"])({}, o, K["firestore"].FieldValue.arrayUnion(e));
                                    return t > 0 && (a["_count_" + o] = t), this.set(n, a);
                                },
                            },
                            {
                                key: "removeFromList",
                                value: function (n, o, e) {
                                    return this.set(n, Object(J["a"])({}, o, K["firestore"].FieldValue.arrayRemove(e)));
                                },
                            },
                        ]),
                        n
                    );
                })()),
            X = K["initializeApp"]({
                apiKey: "AIzaSyBVU3WOAtgWA35VLqL4EIXmxDcNYFHSwss",
                authDomain: "genshin-impact.firebaseapp.com",
                databaseURL: "https://genshin-impact.firebaseio.com",
                projectId: "genshin-impact",
                storageBucket: "genshin-impact.appspot.com",
                messagingSenderId: "583171736164",
                appId: "1:583171736164:web:a436ed1a8e7018423a5571",
            }),
            Z = new Q(X),
            nn = Z,
            on = {
                name: "Map",
                computed: Object(g["a"])(
                    Object(g["a"])(
                        {},
                        Object(h["d"])({
                            theUser: function (n) {
                                return n.user.theUser;
                            },
                            draggedMarker: function (n) {
                                return n.map.draggedMarker;
                            },
                        })
                    ),
                    Object(h["b"])({ userShortId: "user/userShortId" })
                ),
                created: function () {
                    var n = this;
                    (window.markAsFound = function (o, e, t) {
                        return t < 5
                            ? (console.log(e),
                              void V.get("gim-local-markers").then(function (t) {
                                  t && Array.isArray(t.markerIds) ? t.markerIds.includes(e) || t.markerIds.push(e) : (t = { ver: 1, by: "genshin-impact-map.appsample.com", markerIds: [e] }),
                                      V.set("gim-local-markers", t).then(function () {
                                          n.$store.commit("user/addUserData", { localMarkers: e }),
                                              n.addMessage({ style: "warning", body: "Location #".concat(e, " has been marked as found and SAVED LOCALLY IN BROWSER."), expires: 5 }),
                                              n.updateMarkerStyle({ type: o, id: e, opacity: 0.35, close: !0 });
                                      });
                              }))
                            : (n.$store
                                  .dispatch("user/userSignIn")
                                  .then(function () {
                                      nn.addToList("users/".concat(n.theUser.uid), "markerIds", e).then(function () {
                                          n.$store.commit("user/addUserData", { doneMarkers: e });
                                      }),
                                          n.updateMarkerStyle({ type: o, id: e, opacity: 0.35, close: !0 }),
                                          n.addMessage({ style: "success", body: n.$t("msg.markAsFound", [e]), expires: 5 });
                                  })
                                  .catch(function () {
                                      console.log("Fail to sign in.");
                                  }),
                              !1);
                    }),
                        (window.markAsNotFound = function (o, e, t) {
                            if (!(t < 5))
                                return (
                                    nn.removeFromList("users/".concat(n.theUser.uid), "markerIds", e).then(function () {
                                        n.$store.commit("user/removeUserData", { doneMarkers: e });
                                    }),
                                    n.updateMarkerStyle({ type: o, id: e, opacity: 1, close: !0 }),
                                    n.addMessage({ style: "success", body: n.$t("msg.markAsNotFound", [e]), expires: 10 }),
                                    !1
                                );
                            V.get("gim-local-markers").then(function (o) {
                                if (o && Array.isArray(o.markerIds)) {
                                    var t = o.markerIds.indexOf(e);
                                    t > -1 && (o.markerIds.splice(t, 1), V.set("gim-local-markers", o)), n.$store.commit("user/removeUserData", { localMarkers: e });
                                }
                                n.addMessage({ style: "success", body: "Location #".concat(e, " has been marked as NOT found."), expires: 5 });
                            });
                        });
                },
                mounted: function () {
                    this.loadMapData(), this.$store.dispatch("map/loadPeopleCount");
                },
                methods: Object(g["a"])(
                    Object(g["a"])(
                        {
                            loadMapData: function () {
                                this.$store.commit("map/loadMarkers"), this.$store.commit("map/createMap", "mapDiv");
                            },
                        },
                        Object(h["c"])({ addMessage: "ui/addMessage", setTab: "ui/setTab", updateMarkerStyle: "map/updateMarkerStyle", discardDrag: "map/discardDrag" })
                    ),
                    {},
                    {
                        submitDrag: function () {
                            var n = this;
                            if (!this.theUser) return this.addMessage({ style: "danger", body: this.$t("msg.loginRequired"), title: "Log In Required" }), void this.setTab("Profile");
                            nn.set("markers/marker-".concat(this.draggedMarker.id), {
                                latLng: Object(J["a"])({}, this.userShortId, { lat: this.draggedMarker.lat, lng: this.draggedMarker.lng, time: new Date().toISOString().substr(0, 10) }),
                            })
                                .then(function () {
                                    n.discardDrag(), n.addMessage({ style: "success", body: n.$t("msg.thanksForFeedback") + n.$t("msg.updateDbLater"), title: "Success!" });
                                })
                                .catch(function () {});
                        },
                    }
                ),
            };
        e("21e7");
        (on.render = Y), (on.__scopeId = "data-v-c3900caa");
        var en = on,
            tn = Object(t["N"])("data-v-362365c4");
        Object(t["y"])("data-v-362365c4");
        var an = { class: "siderbar-header bg-white w-100" },
            rn = { class: "nav nav-tabs nav-fill bg-white mb-2 mx-3 mt-3 justify-content-between" },
            sn = { class: "tab-content bg-white px-3 h-100" },
            cn = { class: "tab-content bg-white px-3 h-100" },
            bn = { class: "tab-content bg-white px-3 h-100" },
            ln = { class: "tab-content bg-white px-3 h-100" },
            un = { class: "sidebar-footer w-100 text-center border-top2" },
            dn = { class: "sidebar-toggle w-100 text-center d-block d-lg-none" };
        Object(t["w"])();
        var mn = tn(function (n, o, e, a, r, s) {
                var c = Object(t["C"])("Header"),
                    b = Object(t["C"])("Markers"),
                    i = Object(t["C"])("Comments"),
                    l = Object(t["C"])("About"),
                    u = Object(t["C"])("MyProfile"),
                    d = Object(t["C"])("Ad");
                return (
                    Object(t["v"])(),
                    Object(t["g"])(
                        "div",
                        { id: "sidebar", class: ["shadow", { "bottom-collapsed": r.bottomCollapsed, "left-collapsed": r.leftCollapsed }] },
                        [
                            Object(t["k"])("div", an, [
                                Object(t["k"])(c),
                                Object(t["k"])("ul", rn, [
                                    (Object(t["v"])(!0),
                                    Object(t["g"])(
                                        t["a"],
                                        null,
                                        Object(t["B"])(r.tabs, function (o) {
                                            return (
                                                Object(t["v"])(),
                                                Object(t["g"])("li", { class: "nav-item", key: o }, [
                                                    Object(t["k"])(
                                                        "a",
                                                        {
                                                            class: ["nav-link", "px-1", n.activeTab === o ? "active font-weight-bold" : ""],
                                                            onClick: function (e) {
                                                                return n.setTab(o);
                                                            },
                                                            href: "#",
                                                        },
                                                        Object(t["F"])(n.$t("ui." + o)),
                                                        11,
                                                        ["onClick"]
                                                    ),
                                                ])
                                            );
                                        }),
                                        128
                                    )),
                                ]),
                            ]),
                            Object(t["M"])(Object(t["k"])("div", sn, [Object(t["k"])(b)], 512), [[t["J"], "Markers" == n.activeTab]]),
                            Object(t["M"])(Object(t["k"])("div", cn, [Object(t["k"])(i)], 512), [[t["J"], "Comments" == n.activeTab]]),
                            Object(t["M"])(Object(t["k"])("div", bn, [Object(t["k"])(l)], 512), [[t["J"], "About" == n.activeTab]]),
                            Object(t["M"])(Object(t["k"])("div", ln, [Object(t["k"])(u)], 512), [[t["J"], "Profile" == n.activeTab]]),
                            Object(t["k"])("div", un, [Object(t["k"])(d)]),
                            Object(t["k"])(
                                "button",
                                {
                                    class: "btn-light left-toggle position-absolute d-none d-lg-block text-center text-primary border-0",
                                    onClick:
                                        o[1] ||
                                        (o[1] = function (n) {
                                            return (r.leftCollapsed = !r.leftCollapsed);
                                        }),
                                },
                                Object(t["F"])(r.leftCollapsed ? "▷" : "◁"),
                                1
                            ),
                            Object(t["k"])("div", dn, [
                                Object(t["k"])(
                                    "button",
                                    {
                                        type: "button",
                                        title: "Collapse Memu",
                                        class: "btn btn-sm btn-light collapseButton shadow-sm border-0 text-primary py-2",
                                        onClick:
                                            o[2] ||
                                            (o[2] = function (n) {
                                                return (r.bottomCollapsed = !r.bottomCollapsed);
                                            }),
                                    },
                                    Object(t["F"])(r.bottomCollapsed ? "▼" : "▲"),
                                    1
                                ),
                            ]),
                        ],
                        2
                    )
                );
            }),
            pn = Object(t["N"])("data-v-342f4764");
        Object(t["y"])("data-v-342f4764");
        var gn = { class: "navbar navbar-dark justify-content-around bg-transparent-dark2 px-0" },
            hn = Object(t["k"])("img", { src: "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/logo.png", class: "logo d-inline-block align-top", alt: "Genshin Impact", loading: "lazy" }, null, -1);
        Object(t["w"])();
        var fn = pn(function (n, o, e, a, r, s) {
                var c = Object(t["C"])("SelectLang");
                return (
                    Object(t["v"])(),
                    Object(t["g"])("nav", gn, [
                        Object(t["k"])("a", { class: "navbar-brand py-1 m-0", href: r.url }, [hn, Object(t["j"])(" " + Object(t["F"])(n.$t("ui.brand")), 1)], 8, ["href"]),
                        Object(t["k"])("div", null, [Object(t["k"])(c)]),
                    ])
                );
            }),
            kn = Object(t["N"])("data-v-1edfb52c");
        Object(t["y"])("data-v-1edfb52c");
        var vn = { class: "input-group input-group-sm" },
            jn = Object(t["k"])(
                "div",
                { class: "input-group-prepend" },
                [Object(t["k"])("label", { class: "input-group-text py-0 px-1 bg-secondary", for: "select-lang" }, [Object(t["k"])("img", { class: "icon", src: "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/global.png" })])],
                -1
            );
        Object(t["w"])();
        var On = kn(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])("div", vn, [
                        jn,
                        Object(t["M"])(
                            Object(t["k"])(
                                "select",
                                {
                                    class: "custom-select",
                                    id: "select-lang",
                                    "onUpdate:modelValue":
                                        o[1] ||
                                        (o[1] = function (o) {
                                            return (n.$i18n.locale = o);
                                        }),
                                    onChange:
                                        o[2] ||
                                        (o[2] = function (n) {
                                            return s.setLang();
                                        }),
                                },
                                [
                                    (Object(t["v"])(!0),
                                    Object(t["g"])(
                                        t["a"],
                                        null,
                                        Object(t["B"])(r.langs, function (n, o) {
                                            return Object(t["v"])(), Object(t["g"])("option", { key: o, value: o }, Object(t["F"])(n), 9, ["value"]);
                                        }),
                                        128
                                    )),
                                ],
                                544
                            ),
                            [[t["H"], n.$i18n.locale]]
                        ),
                    ])
                );
            }),
            yn = {
                name: "LocaleChanger",
                data: function () {
                    return { langs: { en: "English", pt: "Português", ko: "한국어", es: "Español", ja: "日本語", zh: "简体中文" } };
                },
                methods: {
                    setLang: function () {
                        localStorage.setItem("lang", this.$i18n.locale);
                    },
                },
            };
        e("2707");
        (yn.render = On), (yn.__scopeId = "data-v-1edfb52c");
        var wn = yn,
            Mn = {
                name: "Header",
                components: { SelectLang: wn },
                data: function () {
                    return { url: "https://genshin-impact-map.appsample.com" };
                },
            };
        e("7d19");
        (Mn.render = fn), (Mn.__scopeId = "data-v-342f4764");
        var Cn = Mn,
            An = { class: "adsbygoogle pc-responsive", style: { display: "block" }, "data-ad-client": "ca-pub-2115352015986355", "data-ad-slot": "5256371583", "data-ad-format": "auto", "data-full-width-responsive": "true" };
        function Sn(n, o, e, a, r, s) {
            return Object(t["v"])(), Object(t["g"])("ins", An);
        }
        var Fn = {
            name: "Ad",
            data: function () {
                return { googleInit: null };
            },
            mounted: function () {
                this.googleInit = setTimeout(function () {
                    try {
                        "undefined" !== typeof window && window.self == window.top && (window.adsbygoogle = window.adsbygoogle || []).push({});
                    } catch (n) {
                        return;
                    }
                }, 1e3);
            },
            unmounted: function () {
                this.googleInit && clearTimeout(this.googleInit);
            },
        };
        Fn.render = Sn;
        var In = Fn,
            Ln = Object(t["N"])("data-v-ad4d7c78");
        Object(t["y"])("data-v-ad4d7c78");
        var Dn = { key: 0 },
            zn = { class: "mb-1" },
            xn = { class: "mr-2" };
        Object(t["w"])();
        var Tn = Ln(function (n, o, e, a, r, s) {
                var c = Object(t["C"])("MarkerButton");
                return n.$store.state.map.ready && null !== r.activeMarkers
                    ? (Object(t["v"])(),
                      Object(t["g"])("div", Dn, [
                          (Object(t["v"])(!0),
                          Object(t["g"])(
                              t["a"],
                              null,
                              Object(t["B"])(r.category, function (o, e) {
                                  return (
                                      Object(t["v"])(),
                                      Object(t["g"])("section", { key: e }, [
                                          Object(t["k"])("p", zn, [
                                              Object(t["k"])("b", xn, Object(t["F"])(n.$t("category." + e)) + ":", 1),
                                              Object(t["k"])(
                                                  "a",
                                                  {
                                                      class: "mr-2 text-primary small",
                                                      onClick: function (n) {
                                                          return s.select(!0, e);
                                                      },
                                                      rel: "nofollow",
                                                  },
                                                  Object(t["F"])(n.$t("ui.selectAll")),
                                                  9,
                                                  ["onClick"]
                                              ),
                                              Object(t["k"])(
                                                  "a",
                                                  {
                                                      class: "mr-2 text-primary small",
                                                      onClick: function (n) {
                                                          return s.select(!1, e);
                                                      },
                                                      rel: "nofollow",
                                                  },
                                                  Object(t["F"])(n.$t("ui.clearAll")),
                                                  9,
                                                  ["onClick"]
                                              ),
                                          ]),
                                          Object(t["k"])(
                                              "div",
                                              { class: ["d-flex flex-wrap mb-2", [s.isBar(e) ? "md-buttons" : "sm-buttons"]] },
                                              [
                                                  (Object(t["v"])(!0),
                                                  Object(t["g"])(
                                                      t["a"],
                                                      null,
                                                      Object(t["B"])(o, function (n) {
                                                          return Object(t["v"])(), Object(t["g"])(c, { key: n, type: n, label: e, size: s.isBar(e) ? "md" : "sm" }, null, 8, ["type", "label", "size"]);
                                                      }),
                                                      128
                                                  )),
                                              ],
                                              2
                                          ),
                                      ])
                                  );
                              }),
                              128
                          )),
                      ]))
                    : Object(t["h"])("", !0);
            }),
            Un = Object(t["N"])("data-v-7ad5cb29");
        Object(t["y"])("data-v-7ad5cb29");
        var Pn = { key: 0, class: "mr-2" },
            Vn = { key: 0 },
            _n = Object(t["k"])("small", { class: "text-muted mr-1" }, "x", -1);
        Object(t["w"])();
        var Bn = Un(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])("div", null, [
                        Object(t["k"])(
                            "button",
                            {
                                alt: e.type,
                                title: n.$t("markers." + e.type) || n.marker.name,
                                type: "button",
                                class: ["btn p-0 d-flex justify-content-between align-items-center", [n.marker.active ? "btn-primary" : "btn-light", e.size, "md" == e.size ? "btn-block" : "btn-sm"]],
                                onClick:
                                    o[1] ||
                                    (o[1] = function (n) {
                                        return s.onSelect();
                                    }),
                            },
                            [
                                Object(t["k"])("img", { class: { sm: "monster" == e.label }, src: "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/markers/marker-" + n.marker.icon + ".png", alt: n.marker.name }, null, 10, ["src", "alt"]),
                                "md" == e.size
                                    ? (Object(t["v"])(),
                                      Object(t["g"])("span", Pn, [
                                          "featured" == e.label ? (Object(t["v"])(), Object(t["g"])("span", Vn, [Object(t["j"])(Object(t["F"])(n.marker.data.length) + " ", 1), _n])) : Object(t["h"])("", !0),
                                          Object(t["k"])("span", { class: { small: "en" != n.$i18n.locale || "monster" == e.label } }, Object(t["F"])(n.$t("markers." + e.type) || n.marker.name), 3),
                                      ]))
                                    : Object(t["h"])("", !0),
                            ],
                            10,
                            ["alt", "title"]
                        ),
                    ])
                );
            }),
            $n = {
                name: "MarkerButton",
                props: { label: { type: String, required: !1 }, type: { type: String, required: !0 }, size: { type: String, default: "md" } },
                computed: Object(h["d"])({
                    marker: function (n) {
                        return n.map.markers[this.type];
                    },
                }),
                mounted: function () {
                    var n = this;
                    V.isOnList("gim-active-markers", this.type).then(function (o) {
                        n.$store.dispatch("map/setActiveStatus", { type: n.type, active: n.$route.query.type == n.type || o }).then(function () {
                            n.$route.query.type == n.type && n.$route.query.id && n.updateMarkerStyle({ type: n.$route.query.type, id: n.$route.query.id, open: !0 });
                        });
                    });
                },
                methods: Object(g["a"])(
                    {
                        onSelect: function () {
                            this.$store.dispatch("map/setActiveStatus", { type: this.type, active: !this.marker.active });
                        },
                    },
                    Object(h["c"])({ updateMarkerStyle: "map/updateMarkerStyle" })
                ),
            };
        e("13da");
        ($n.render = Bn), ($n.__scopeId = "data-v-7ad5cb29");
        var Nn = $n,
            En = {
                name: "Markers",
                components: { MarkerButton: Nn },
                data: function () {
                    return {
                        activeMarkers: null,
                        category: {
                            featured: ["o5", "o6", "o3", "o2", "o52", "o8"],
                            route: ["p1", "p2"],
                            chest: ["o17", "o44", "o45", "o46", "o64", "o18"],
                            mineral: ["o42", "o16", "o15", "b49", "b14", "o40"],
                            living: ["b53", "b20", "b39", "b34", "b16", "b22", "b50", "b35", "b55"],
                            plant: ["b13", "b47", "o32", "o38", "o30", "b46", "b26", "o34", "b21", "o36", "b30", "o37", "b31", "o29", "o31", "o33", "o43", "o41", "o39", "o35"],
                            monster: ["o55", "o19", "o57", "o22", "o23", "o24", "o25", "o26", "o27", "o28", "o47", "o48", "o49"],
                        },
                    };
                },
                created: function () {
                    var n = this,
                        o = ["o5", "o6", "o3"];
                    V.get("gim-active-markers").then(function (e) {
                        null == e ? (V.set("gim-active-markers", o), (n.activeMarkers = o)) : (n.activeMarkers = e);
                    });
                },
                methods: Object(g["a"])(
                    {
                        select: function (n, o) {
                            this.$store.dispatch("map/setActiveStatus", { active: n, typeArr: this.category[o] });
                        },
                        isBar: function (n) {
                            return ["featured", "route", "monster"].includes(n);
                        },
                    },
                    Object(h["c"])({ addMessage: "ui/addMessage" })
                ),
            };
        e("09b9");
        (En.render = Tn), (En.__scopeId = "data-v-ad4d7c78");
        var Gn = En,
            Wn = Object(t["N"])("data-v-cfef8402");
        Object(t["y"])("data-v-cfef8402");
        var Rn = { key: 0, class: "mb-2" },
            qn = { key: 0, class: "text-muted float-right pr-2" },
            Hn = { class: "input-group input-group-sm mb-md-2 pr-2" },
            Yn = { class: "input-group-prepend", title: "Share this location" },
            Jn = { class: "btn btn-light", type: "button", ref: "copyButton", id: "copyButton" },
            Kn = Object(t["k"])("img", { class: "icon", src: "https://raw.githubusercontent.com/Malpropre/GI-DB/0843042cbfb6b51d4f8752ab68009638074b4a15/images/icon-link.svg" }, null, -1),
            Qn = { key: 1 },
            Xn = Object(t["k"])("span", { class: "badge badge-danger px-2 mr-1" }, "!", -1),
            Zn = Object(t["k"])("u", null, "Sign in here", -1),
            no = { class: "input-group mx-0 mb-3" },
            oo = { class: "input-group-append" },
            eo = Object(t["k"])("div", { class: "text-right" }, null, -1),
            to = { key: 0, class: "text-center" },
            ao = Object(t["k"])("div", { class: "spinner-border text-secondary", role: "status" }, [Object(t["k"])("span", { class: "sr-only" }, "Loading...")], -1),
            ro = { key: 2 },
            so = { class: "alert alert-danger" };
        Object(t["w"])();
        var co = Wn(function (n, o, e, a, r, s) {
                var c = Object(t["C"])("CommentList");
                return (
                    Object(t["v"])(),
                    Object(t["g"])(
                        t["a"],
                        null,
                        [
                            Object(t["M"])(
                                Object(t["k"])(
                                    "div",
                                    null,
                                    [
                                        n.selectedMarker
                                            ? (Object(t["v"])(),
                                              Object(t["g"])("h5", Rn, [
                                                  Object(t["j"])(Object(t["F"])(n.$t("markers." + n.selectedMarker.type)) + ", #" + Object(t["F"])(n.selectedMarker.id) + " ", 1),
                                                  n.peopleCount[n.selectedMarker.id] ? (Object(t["v"])(), Object(t["g"])("small", qn, Object(t["F"])(n.$t("p.foundCount", [n.peopleCount[n.selectedMarker.id]])), 1)) : Object(t["h"])("", !0),
                                              ]))
                                            : Object(t["h"])("", !0),
                                        Object(t["k"])("div", Hn, [
                                            Object(t["k"])("input", { type: "text", class: "form-control border-0 text-info", value: s.shareUrl, readonly: "", onClick: "this.select()" }, null, 8, ["value"]),
                                            Object(t["k"])("div", Yn, [Object(t["k"])("button", Jn, [Kn, Object(t["j"])(" " + Object(t["F"])(r.copied ? "Copied!" : "Copy"), 1)], 512)]),
                                        ]),
                                        n.selectedMarker && n.selectedMarker.level >= 2
                                            ? (Object(t["v"])(),
                                              Object(t["g"])("div", Qn, [
                                                  Object(t["M"])(
                                                      Object(t["k"])(
                                                          "p",
                                                          null,
                                                          [
                                                              Xn,
                                                              Object(t["k"])(
                                                                  "a",
                                                                  {
                                                                      class: "text-danger",
                                                                      href: "#",
                                                                      onClick:
                                                                          o[1] ||
                                                                          (o[1] = function (o) {
                                                                              return n.setTab("Profile");
                                                                          }),
                                                                  },
                                                                  [Zn]
                                                              ),
                                                          ],
                                                          512
                                                      ),
                                                      [[t["J"], !n.theUser]]
                                                  ),
                                                  Object(t["k"])(
                                                      "fieldset",
                                                      { disabled: !n.theUser || r.loading, class: "pr-2" },
                                                      [
                                                          Object(t["k"])("div", no, [
                                                              Object(t["M"])(
                                                                  Object(t["k"])(
                                                                      "textarea",
                                                                      {
                                                                          class: "form-control text-primary border-primary",
                                                                          rows: "2",
                                                                          placeholder: n.theUser ? "Anything helpful to share? 140 characters max." : n.$t("p.loginBeforeComment"),
                                                                          "onUpdate:modelValue":
                                                                              o[2] ||
                                                                              (o[2] = function (n) {
                                                                                  return (r.myComment = n);
                                                                              }),
                                                                          maxlength: "140",
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ["placeholder"]
                                                                  ),
                                                                  [[t["I"], r.myComment]]
                                                              ),
                                                              Object(t["k"])("div", oo, [
                                                                  Object(t["k"])(
                                                                      "button",
                                                                      {
                                                                          type: "button",
                                                                          class: "btn btn-primary h-100",
                                                                          onClick:
                                                                              o[3] ||
                                                                              (o[3] = function (n) {
                                                                                  return s.submitCommnet();
                                                                              }),
                                                                          disabled: !r.myComment,
                                                                      },
                                                                      Object(t["F"])(n.$t("ui.submit")),
                                                                      9,
                                                                      ["disabled"]
                                                                  ),
                                                              ]),
                                                          ]),
                                                      ],
                                                      8,
                                                      ["disabled"]
                                                  ),
                                                  eo,
                                                  Object(t["k"])("h6", null, Object(t["F"])(n.$t("ui.commentList")) + " ...", 1),
                                                  r.loading
                                                      ? (Object(t["v"])(), Object(t["g"])("div", to, [ao]))
                                                      : (Object(t["v"])(), Object(t["g"])(c, { key: 1, comments: r.comments, markerkey: s.getKey() }, null, 8, ["comments", "markerkey"])),
                                              ]))
                                            : (Object(t["v"])(), Object(t["g"])("div", ro, "This location does not support comments.")),
                                    ],
                                    512
                                ),
                                [[t["J"], n.selectedMarker]]
                            ),
                            Object(t["M"])(Object(t["k"])("div", null, [Object(t["k"])("div", so, Object(t["F"])(n.$t("p.pleaseSelectMarker")), 1)], 512), [[t["J"], !n.selectedMarker]]),
                        ],
                        64
                    )
                );
            }),
            bo = (e("07ac"), e("ddb0"), e("b311")),
            io = e.n(bo),
            lo = (e("b64b"), Object(t["N"])("data-v-1297b98b"));
        Object(t["y"])("data-v-1297b98b");
        var uo = { key: 0 },
            mo = { class: "text-muted" },
            po = { key: 1 },
            go = Object(t["k"])("p", { class: "comments" }, "Whoops there are no comments. Be the first one!", -1);
        Object(t["w"])();
        var ho = lo(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])("div", null, [
                        e.comments && Object.keys(e.comments).length
                            ? (Object(t["v"])(),
                              Object(t["g"])("div", uo, [
                                  (Object(t["v"])(!0),
                                  Object(t["g"])(
                                      t["a"],
                                      null,
                                      Object(t["B"])(e.comments, function (o) {
                                          return (
                                              Object(t["v"])(),
                                              Object(t["g"])("p", { key: o.authorUid, class: "comments" }, [
                                                  Object(t["k"])(
                                                      "a",
                                                      {
                                                          class: "badge badge-success mr-1",
                                                          onClick: function (n) {
                                                              return s.vote(o, "upVote");
                                                          },
                                                          title: "Up Vote",
                                                      },
                                                      "▲ " + Object(t["F"])(s.getUpVoteCount(o)),
                                                      9,
                                                      ["onClick"]
                                                  ),
                                                  Object(t["k"])(
                                                      "a",
                                                      {
                                                          class: "badge badge-warning mr-1",
                                                          onClick: function (n) {
                                                              return s.vote(o, "downVote");
                                                          },
                                                          title: "Down Vote",
                                                      },
                                                      "▼",
                                                      8,
                                                      ["onClick"]
                                                  ),
                                                  Object(t["j"])(" " + Object(t["F"])(o.text) + " ", 1),
                                                  n.isAdmin
                                                      ? (Object(t["v"])(),
                                                        Object(t["g"])(
                                                            "a",
                                                            {
                                                                key: 0,
                                                                class: "badge badge-danger mr-1",
                                                                onClick: function (n) {
                                                                    return s.del(o);
                                                                },
                                                                title: "Delete",
                                                            },
                                                            "X",
                                                            8,
                                                            ["onClick"]
                                                        ))
                                                      : Object(t["h"])("", !0),
                                                  Object(t["k"])("small", mo, " - " + Object(t["F"])(o.authorUid == r.adminUid ? "★Admin" : o.name) + " " + Object(t["F"])(o.time.toLocaleDateString()), 1),
                                              ])
                                          );
                                      }),
                                      128
                                  )),
                              ]))
                            : (Object(t["v"])(), Object(t["g"])("div", po, [go])),
                    ])
                );
            }),
            fo =
                (e("fb6a"),
                {
                    name: "CommentList",
                    props: { comments: { type: Array, required: !0 }, markerkey: { type: String, required: !0 } },
                    data: function () {
                        return { adminUid: "CulpcUB6zwXu8TpIsJ1YGWw21Ke2".slice(-16) };
                    },
                    computed: Object(g["a"])({}, Object(h["b"])({ userShortId: "user/userShortId", isAdmin: "user/isAdmin" })),
                    methods: Object(g["a"])(
                        {
                            getUpVoteCount: function (n) {
                                return (n.upVoteCount || n.upVote.length) - (n.downVoteCount || n.downVote.length);
                            },
                            vote: function (n, o) {
                                if (this.userShortId) {
                                    if (n.authorUid == this.userShortId) return void this.addMessage({ style: "danger", body: this.$t("msg.cantVoteYourself") });
                                    if (-1 == n[o].indexOf("")) {
                                        var e = "upVote" == o ? n.upVote.length - n.downVote.length + 1 : 0;
                                        nn.addToList(this.markerkey + "/" + n.authorUid, o, this.userShortId, e), n[o].push(""), this.addMessage({ style: "success", body: this.$t("msg.thanksForFeedback") });
                                    }
                                } else this.setTab("Profile"), this.addMessage({ style: "danger", body: this.$t("msg.loginRequired") });
                            },
                            del: function (n) {
                                confirm("delete => " + n.text) && nn.delete(this.markerkey + "/" + n.authorUid);
                            },
                        },
                        Object(h["c"])({ addMessage: "ui/addMessage", setTab: "ui/setTab" })
                    ),
                });
        e("ed29");
        (fo.render = ho), (fo.__scopeId = "data-v-1297b98b");
        var ko = fo,
            vo = {},
            jo = {},
            Oo = {
                name: "Comments",
                components: { CommentList: ko },
                data: function () {
                    return { comments: [], myComment: "", loading: !1, copied: !1, marker: null };
                },
                computed: Object(g["a"])(
                    Object(g["a"])(
                        Object(g["a"])(
                            {},
                            Object(h["d"])({
                                theUser: function (n) {
                                    return n.user.theUser;
                                },
                                selectedMarker: function (n) {
                                    return n.map.selectedMarker;
                                },
                                peopleCount: function (n) {
                                    return n.map.peopleCount;
                                },
                            })
                        ),
                        Object(h["b"])({ userInitial: "user/userInitial", userShortId: "user/userShortId", isAdmin: "user/isAdmin" })
                    ),
                    {},
                    {
                        shareUrl: function () {
                            return this.selectedMarker ? "https://genshin-impact-map.appsample.com/#/?type=" + this.selectedMarker.type + "&id=" + this.selectedMarker.id : "";
                        },
                    }
                ),
                watch: {
                    selectedMarker: function (n) {
                        (this.copied = !1), n && n.id && n.level >= 4 && (this.loadComments(), this.loadMarker());
                    },
                },
                mounted: function () {
                    var n = this,
                        o = new io.a("#copyButton", {
                            text: function () {
                                return n.shareUrl;
                            },
                        });
                    o.on("success", function () {
                        n.copied = !0;
                    });
                },
                methods: Object(g["a"])(
                    {
                        getKey: function () {
                            return "markers/marker-".concat(this.selectedMarker.id, "/comments");
                        },
                        loadMarker: function () {
                            var n = this;
                            if (this.isAdmin) {
                                var o = "markers/marker-".concat(this.selectedMarker.id);
                                if (jo[o]) return (this.marker = jo[o]), void (this.marker && this.marker.latLng && this.updateHeatmap(Object.values(this.marker.latLng)));
                                nn.get(o).then(function (e) {
                                    (n.marker = e), (jo[o] = e), n.marker && n.marker.latLng && n.updateHeatmap(Object.values(n.marker.latLng));
                                });
                            }
                        },
                        loadCacheComments: function (n) {
                            return fetch("https://oracle.appsample.com/v1/projects/genshin-impact/databases/(default)/documents/" + n)
                                .then(function (n) {
                                    return n.json();
                                })
                                .then(function (n) {
                                    if (n && n.documents) {
                                        var o = {};
                                        return (
                                            n.documents.forEach(function (n) {
                                                o[n.name.split("/").pop()] = {
                                                    name: n.fields.name.stringValue,
                                                    text: n.fields.text.stringValue,
                                                    time: {
                                                        toDate: function () {
                                                            return new Date(n.fields.time.timestampValue);
                                                        },
                                                    },
                                                    upVote:
                                                        n.fields.upVote && n.fields.upVote.arrayValue.values
                                                            ? n.fields.upVote.arrayValue.values.map(function (n) {
                                                                  return n.stringValue;
                                                              })
                                                            : [],
                                                    downVote:
                                                        n.fields.downVote && n.fields.downVote.arrayValue.values
                                                            ? n.fields.downVote.arrayValue.values.map(function (n) {
                                                                  return n.stringValue;
                                                              })
                                                            : [],
                                                };
                                            }),
                                            o
                                        );
                                    }
                                })
                                .catch(function (n) {
                                    console.error(n);
                                });
                        },
                        loadLocalComments: function () {
                            return fetch("/json/comments-".concat(this.selectedMarker.id, ".json"))
                                .then(function (n) {
                                    return n.json();
                                })
                                .catch(function (n) {
                                    console.error(n);
                                });
                        },
                        loadComments: function () {
                            var n = this,
                                o = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                e = this.getKey();
                            o && vo[e] && new Date() - vo[e].cachedAt < 864e5
                                ? (this.comments = vo[e].data)
                                : ((this.loading = !0),
                                  (o ? this.loadLocalComments() : nn.get(e))
                                      .then(function (o) {
                                          var t = [];
                                          for (var a in o)
                                              t.push({
                                                  authorUid: a,
                                                  name: o[a].name,
                                                  text: o[a].text,
                                                  time: "string" == typeof o[a].time ? new Date(o[a].time) : o[a].time.toDate(),
                                                  upVote: o[a].upVote || [],
                                                  downVote: o[a].downVote || [],
                                                  upVoteCount: o[a].upVoteCount || (o[a].upVote || []).length,
                                                  downVoteCount: o[a].downVoteCount || (o[a].downVote || []).length,
                                              });
                                          (n.comments = n.sortComments(t)), (vo[e] = { cachedAt: new Date(), data: n.comments });
                                      })
                                      .finally(function () {
                                          n.loading = !1;
                                      }));
                        },
                        submitCommnet: function () {
                            var n = this;
                            this.selectedMarker.id &&
                                this.userShortId &&
                                this.myComment &&
                                ((this.loading = !0),
                                nn
                                    .set(this.getKey() + "/" + this.userShortId, { text: this.myComment, name: this.userInitial, time: nn.now(), upVote: [] })
                                    .then(function () {
                                        (n.myComment = ""), n.addMessage({ style: "success", body: n.$t("msg.commentSubmitted") }), n.loadComments(!1);
                                    })
                                    .catch(function (n) {
                                        console.error(n);
                                    }));
                        },
                        sortComments: function (n) {
                            return n.sort(function (n, o) {
                                var e = Math.floor(((n.upVoteCount || n.upVote.length) - (n.downVoteCount || n.downVote.length)) / 5),
                                    t = Math.floor(((o.upVoteCount || o.upVote.length) - (o.downVoteCount || o.downVote.length)) / 5);
                                return e > t ? -1 : e < t ? 1 : n.time > o.time ? -1 : 1;
                            });
                        },
                    },
                    Object(h["c"])({ addMessage: "ui/addMessage", setTab: "ui/setTab", updateHeatmap: "map/updateHeatmap" })
                ),
            };
        e("cbc3");
        (Oo.render = co), (Oo.__scopeId = "data-v-cfef8402");
        var yo = Oo,
            wo = Object(t["N"])("data-v-d04e03b6");
        Object(t["y"])("data-v-d04e03b6");
        var Mo = { class: "mb-3" },
            Co = Object(t["k"])(
                "a",
                {
                    target: "_blank",
                    href: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=K5A63XCLWLBEY&item_name=Support+us+and+keep+our+server+running%3A%29+Thank+you+so+much+for+your+generosity%21&currency_code=USD&source=url",
                },
                [Object(t["k"])("img", { src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" })],
                -1
            ),
            Ao = { class: "h-title" },
            So = { class: "updates p-0" },
            Fo = Object(t["k"])("h6", { class: "h-title" }, "Contributors", -1),
            Io = Object(t["k"])("ul", { class: "pl-4" }, [Object(t["k"])("li", null, "행추관절꺾기 (UID 803947199) - Thank you for the Korean translations!"), Object(t["k"])("li", null, "Newtrat - Thank you for sharing the CBT map!")], -1),
            Lo = { class: "h-title" },
            Do = Object(t["k"])(
                "p",
                null,
                [Object(t["j"])(" FANDOM WIKI "), Object(t["k"])("a", { target: "_blank", href: "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki" }, "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki")],
                -1
            ),
            zo = Object(t["k"])("p", null, [Object(t["j"])(" GENSH.IN FANDB "), Object(t["k"])("a", { target: "_blank", href: "https://www.gensh.in/" }, "https://www.gensh.in/")], -1),
            xo = { class: "h-title" },
            To = Object(t["k"])("p", null, " We've got lots of emails everyday, we apologize if you don't get reply in time... Email: appsample@outlook.com ", -1),
            Uo = Object(t["k"])("h6", { class: "h-title" }, "FAQ", -1),
            Po = Object(t["k"])("p", null, ' » Support "Mark as found" for more locations - Due to high traffic and cost of database, unfortunately we have no plans in a month ', -1),
            Vo = Object(t["k"])("p", null, "» More languages - yea we're working on that!", -1),
            _o = Object(t["k"])("p", null, "» Page errors - try switching another browser like Chrome.", -1),
            Bo = Object(t["k"])("h6", { class: "h-title" }, "More..", -1),
            $o = Object(t["j"])("Privacy policy"),
            No = Object(t["k"])(
                "p",
                null,
                [
                    Object(t["j"])(" Icons made by "),
                    Object(t["k"])("a", { href: "https://creativemarket.com/Becris", title: "Becris" }, "Becris"),
                    Object(t["j"])(" from "),
                    Object(t["k"])("a", { href: "https://www.flaticon.com/", title: "Flaticon" }, " www.flaticon.com"),
                ],
                -1
            );
        Object(t["w"])();
        var Eo = wo(function (n, o, e, a, r, s) {
                var c = Object(t["C"])("News"),
                    b = Object(t["C"])("router-link");
                return (
                    Object(t["v"])(),
                    Object(t["g"])(
                        t["a"],
                        null,
                        [
                            Object(t["k"])("p", Mo, [Object(t["j"])(Object(t["F"])(n.$t("p.highTraffice", "en")) + " " + Object(t["F"])(n.$t("p.pleaseDonate", "en")) + " ", 1), Co]),
                            Object(t["k"])("h6", Ao, Object(t["F"])(n.$t("ui.updates")), 1),
                            Object(t["k"])("ul", So, [
                                (Object(t["v"])(!0),
                                Object(t["g"])(
                                    t["a"],
                                    null,
                                    Object(t["B"])(r.updates, function (n, o) {
                                        return (
                                            Object(t["v"])(),
                                            Object(t["g"])("li", { key: o }, [Object(t["k"])("span", { class: ["badge", [n[2] ? "badge-" + n[2] : "badge-info"]] }, Object(t["F"])(n[0]), 3), Object(t["j"])(" " + Object(t["F"])(n[1]), 1)])
                                        );
                                    }),
                                    128
                                )),
                            ]),
                            Fo,
                            Io,
                            Object(t["k"])("h6", Lo, Object(t["F"])(n.$t("ui.links")), 1),
                            Do,
                            zo,
                            Object(t["k"])("h6", xo, Object(t["F"])(n.$t("ui.contact")), 1),
                            To,
                            Uo,
                            Po,
                            Vo,
                            _o,
                            Object(t["k"])(c),
                            Bo,
                            Object(t["k"])("p", null, [
                                Object(t["k"])(
                                    b,
                                    { to: "/policy" },
                                    {
                                        default: wo(function () {
                                            return [$o];
                                        }),
                                        _: 1,
                                    }
                                ),
                            ]),
                            No,
                        ],
                        64
                    )
                );
            }),
            Go = { class: "h-title" },
            Wo = { class: "pl-4" },
            Ro = { class: "text-muted" };
        function qo(n, o, e, a, r, s) {
            return (
                Object(t["v"])(),
                Object(t["g"])(
                    t["a"],
                    null,
                    [
                        Object(t["k"])("h6", Go, Object(t["F"])(n.$t("ui.news")), 1),
                        Object(t["k"])("ul", Wo, [
                            (Object(t["v"])(!0),
                            Object(t["g"])(
                                t["a"],
                                null,
                                Object(t["B"])(r.news, function (n) {
                                    return (
                                        Object(t["v"])(),
                                        Object(t["g"])("li", { key: n.title }, [
                                            Object(t["k"])("a", { href: "https://genshin.mihoyo.com/en/news/detail/" + n.id, target: "_blank", class: "mr-2" }, Object(t["F"])(n.title), 9, ["href"]),
                                            Object(t["k"])("small", Ro, Object(t["F"])(n.time.split(" ")[0]), 1),
                                        ])
                                    );
                                }),
                                128
                            )),
                        ]),
                    ],
                    64
                )
            );
        }
        var Ho = [
                { id: "6312", title: 'Version 1.1 "A New Star Approaches" Trailer | Genshin Impact', start_time: "2020-10-31 09:00:00" },
                { id: "6292", title: "Genshin Impact - Accolades Trailer", start_time: "2020-10-29 00:00:00" },
                { id: "6215", title: 'Collected Miscellany - "Keqing: Starward Sword" | Genshin Impact', start_time: "2020-10-27 05:00:00" },
                { id: "6188", title: 'Collected Miscellany - "Mona: Stellaris Phantasm" | Genshin Impact', start_time: "2020-10-26 07:00:00" },
                { id: "6066", title: "Marvelous Merchandise Event Details", start_time: "2020-10-23 21:00:00" },
            ],
            Yo = {
                name: "News",
                data: function () {
                    return {
                        news: (Ho || [])
                            .map(function (n) {
                                return { id: n.id, title: n.title, time: n.start_time };
                            })
                            .slice(0, 3),
                    };
                },
            };
        Yo.render = qo;
        var Jo = Yo,
            Ko = {
                name: "Markers",
                components: { News: Jo },
                data: function () {
                    return {
                        url: "https://genshin-impact-map.appsample.com",
                        updates: [
                            ["v1.10", "Monster markers (wip)."],
                            ["Sep.21", "Improve map images performance.", "secondary"],
                            ["Sep.20", "Due to high traffic, reduce max zoom level by 1 to lower cost.", "secondary"],
                            ["v1.9", "Mark as found for chests(Data saved locally)."],
                            ["v1.8", "Increase max zoom level by 1. Add a button to hide sidebar."],
                            ["v1.7", "Internationalization - may not be accurate since some are from Google Translate."],
                            ["v1.6", "Cache comments to reduce the cost. Drop Mark as found for Teleporters/Gods to reduce cost."],
                            ["v1.5", "Some performance updates."],
                            ["v1.4", "Farming Route."],
                            ["v1.3", "Update Anemoculus/Geoculus locations and more."],
                            ["v1.2", "Update map."],
                            ["v1.1", "Mark as not found."],
                            ["v1.0", "Map refactor."],
                            ["v0.5", "More locations; Count how many people have found specific location."],
                            ["v0.4", "Comments."],
                            ["v0.3", "Sign in with Google; Mark as found."],
                        ],
                        maintenances: [["2020-10-19", "We ran out of image service quota and service is down."]],
                    };
                },
                computed: Object(g["a"])(
                    {},
                    Object(h["d"])({
                        userData: function (n) {
                            return n.user.userData;
                        },
                    })
                ),
            };
        e("caf4");
        (Ko.render = Eo), (Ko.__scopeId = "data-v-d04e03b6");
        var Qo = Ko,
            Xo = Object(t["N"])("data-v-c0069722");
        Object(t["y"])("data-v-c0069722");
        var Zo = { key: 0 },
            ne = Object(t["k"])(
                "ul",
                null,
                [
                    Object(t["k"])("li", null, 'Save "Mark as found" on cloud and sync across multiple devices.'),
                    Object(t["k"])("li", null, "Comment locations and upvote/downvote comments."),
                    Object(t["k"])("li", null, "Update marker locations."),
                ],
                -1
            ),
            oe = { class: "text-center mt-3" },
            ee = Object(t["k"])("img", { alt: "Sign In with Google", src: "images/google-signin.png" }, null, -1),
            te = { class: "text-center" },
            ae = { key: 0, class: "text-center mb-3" },
            re = Object(t["j"])(" If your browser blocks the sign in popup, "),
            se = Object(t["k"])("u", null, "click here", -1),
            ce = Object(t["j"])(" to sign in. "),
            be = { class: "pb-3" },
            ie = { key: 0, class: "media profile" },
            le = { class: "media-body" },
            ue = { class: "mt-0" },
            de = { class: "mb-2" },
            me = Object(t["j"])(" You have marked "),
            pe = Object(t["j"])(" places as found. "),
            ge = Object(t["k"])("hr", null, null, -1),
            he = Object(t["k"])("h6", { class: "h-title" }, [Object(t["j"])("Data synced on cloud: "), Object(t["k"])("span", { class: "badge badge-info" }, "Always Free")], -1),
            fe = { class: "media" },
            ke = { class: "media-body" },
            ve = { class: "float-right" },
            je = { class: "progress" },
            Oe = { class: "h-title mt-4" },
            ye = Object(t["k"])("p", null, " To reduce our database's burden we save less important data locally in browser. But you can still backup it on cloud(after you log in), and restore it sometime. ", -1),
            we = { class: "media" },
            Me = { class: "media-body" },
            Ce = { class: "float-right" },
            Ae = { class: "progress" },
            Se = { key: 1, class: "d-flex justify-content-between mt-3" },
            Fe = Object(t["k"])("p", { class: "mt-3" }, "TIPS:", -1),
            Ie = Object(t["k"])(
                "ul",
                { class: "pl-4" },
                [
                    Object(t["k"])("li", null, " You can find 65 Anemoculus on the map, and get extra one from main quest with Lisa, which makes it 66 in total. But 65 is what you need to upgrade statue. "),
                    Object(t["k"])("li", null, "You can find 131 Geoculus on the map, but 130 is what you need to upgrade the statue."),
                ],
                -1
            );
        Object(t["w"])();
        var Le = Xo(function (n, o, e, a, r, s) {
                return (
                    Object(t["v"])(),
                    Object(t["g"])(
                        t["a"],
                        null,
                        [
                            n.theUser
                                ? Object(t["h"])("", !0)
                                : (Object(t["v"])(),
                                  Object(t["g"])("div", Zo, [
                                      Object(t["k"])("p", null, Object(t["F"])(n.$t("p.loginToUnlock")), 1),
                                      ne,
                                      Object(t["k"])("p", oe, [
                                          Object(t["k"])(
                                              "a",
                                              {
                                                  class: "sign-in",
                                                  href: "#",
                                                  onClick:
                                                      o[1] ||
                                                      (o[1] = function (n) {
                                                          return s.googleSignIn();
                                                      }),
                                              },
                                              [ee]
                                          ),
                                      ]),
                                      Object(t["k"])("p", te, Object(t["F"])(n.$t("p.useGoogleLogin")), 1),
                                      r.redirectMsg
                                          ? (Object(t["v"])(),
                                            Object(t["g"])("p", ae, [
                                                re,
                                                Object(t["k"])(
                                                    "a",
                                                    {
                                                        class: "text-danger",
                                                        href: "#",
                                                        onClick:
                                                            o[2] ||
                                                            (o[2] = function (n) {
                                                                return s.googleSignIn(!0);
                                                            }),
                                                    },
                                                    [se]
                                                ),
                                                ce,
                                            ]))
                                          : Object(t["h"])("", !0),
                                  ])),
                            Object(t["k"])("div", be, [
                                n.theUser
                                    ? (Object(t["v"])(),
                                      Object(t["g"])("div", ie, [
                                          Object(t["k"])("img", { class: "mr-3 rounded-circle shadow-sm", src: n.theUser.photoURL, alt: n.theUser.uid }, null, 8, ["src", "alt"]),
                                          Object(t["k"])("div", le, [
                                              Object(t["k"])("h5", ue, [
                                                  Object(t["j"])(Object(t["F"])(n.theUser.displayName) + " ", 1),
                                                  Object(t["k"])(
                                                      "button",
                                                      {
                                                          type: "button",
                                                          class: "btn btn-sm px-1 py-0 float-right btn-outline-danger",
                                                          onClick:
                                                              o[3] ||
                                                              (o[3] = function (n) {
                                                                  return s.googleSignOut();
                                                              }),
                                                      },
                                                      " Sign Out "
                                                  ),
                                              ]),
                                              Object(t["k"])("div", de, [me, Object(t["k"])("b", null, Object(t["F"])(n.userData.doneMarkers.length + n.userData.localMarkers.length), 1), pe]),
                                          ]),
                                      ]))
                                    : Object(t["h"])("", !0),
                                ge,
                                he,
                                (Object(t["v"])(!0),
                                Object(t["g"])(
                                    t["a"],
                                    null,
                                    Object(t["B"])(r.cloudArr, function (o) {
                                        return (
                                            Object(t["v"])(),
                                            Object(t["g"])("div", { class: "mb-2", key: o.type }, [
                                                Object(t["k"])("div", fe, [
                                                    Object(t["k"])("img", { class: "icon mr-1", src: "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/markers/marker-" + o.icon + ".png" }, null, 8, ["src"]),
                                                    Object(t["k"])("div", ke, [
                                                        Object(t["k"])("div", null, [
                                                            Object(t["j"])(Object(t["F"])(n.$t("markers." + o.type)) + ": ", 1),
                                                            Object(t["k"])("span", ve, Object(t["F"])(s.collectCount(o.type)) + " / " + Object(t["F"])(o.count) + " Found", 1),
                                                        ]),
                                                        Object(t["k"])("div", je, [
                                                            Object(t["k"])("div", { class: "progress-bar bg-secondary", role: "progressbar", style: { width: 100 * Math.min(1, s.collectCount(o.type) / o.count) + "%" } }, null, 4),
                                                        ]),
                                                    ]),
                                                ]),
                                            ])
                                        );
                                    }),
                                    128
                                )),
                                Object(t["k"])("h6", Oe, "Data saved LOCALLY IN BROWSER: (" + Object(t["F"])(n.userData.localMarkers.length) + " in total)", 1),
                                ye,
                                (Object(t["v"])(!0),
                                Object(t["g"])(
                                    t["a"],
                                    null,
                                    Object(t["B"])(r.localArr, function (o) {
                                        return (
                                            Object(t["v"])(),
                                            Object(t["g"])("div", { class: "mb-2", key: o.type }, [
                                                Object(t["k"])("div", we, [
                                                    Object(t["k"])("img", { class: "icon mr-1", src: "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/markers/marker-" + o.icon + ".png" }, null, 8, ["src"]),
                                                    Object(t["k"])("div", Me, [
                                                        Object(t["k"])("div", null, [
                                                            Object(t["j"])(Object(t["F"])(n.$t("markers." + o.type)) + ": ", 1),
                                                            Object(t["k"])("span", Ce, Object(t["F"])(s.collectCount(o.type, "localMarkers")) + " / " + Object(t["F"])(o.count) + " Found", 1),
                                                        ]),
                                                        Object(t["k"])("div", Ae, [
                                                            Object(t["k"])(
                                                                "div",
                                                                { class: "progress-bar bg-secondary", role: "progressbar", style: { width: 100 * Math.min(1, s.collectCount(o.type, "localMarkers") / o.count) + "%" } },
                                                                null,
                                                                4
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ])
                                        );
                                    }),
                                    128
                                )),
                                n.theUser
                                    ? (Object(t["v"])(),
                                      Object(t["g"])("div", Se, [
                                          Object(t["k"])(
                                              "button",
                                              {
                                                  class: "btn btn-sm btn-outline-secondary",
                                                  onClick:
                                                      o[4] ||
                                                      (o[4] = function (n) {
                                                          return s.restoreBackup();
                                                      }),
                                              },
                                              "Restore From Cloud"
                                          ),
                                          Object(t["k"])(
                                              "button",
                                              {
                                                  class: ["btn btn-sm", [r.backupDone ? "btn-success" : "btn-outline-success"]],
                                                  onClick:
                                                      o[5] ||
                                                      (o[5] = function (n) {
                                                          return s.uploadBackup();
                                                      }),
                                              },
                                              Object(t["F"])(r.backupDone ? "You've Backed Up Today" : "Backup To Cloud"),
                                              3
                                          ),
                                      ]))
                                    : Object(t["h"])("", !0),
                                Fe,
                                Ie,
                            ]),
                        ],
                        64
                    )
                );
            }),
            De =
                (e("99af"),
                e("4de4"),
                {
                    o2: ["2615", "2614", "2613", "4482", "2612", "2611", "2609", "2608", "2610"],
                    o3: [
                        "2633",
                        "2628",
                        "2649",
                        "2647",
                        "2595",
                        "2635",
                        "4407",
                        "4408",
                        "2640",
                        "2639",
                        "2637",
                        "2634",
                        "2629",
                        "2627",
                        "2630",
                        "2631",
                        "2632",
                        "2597",
                        "2598",
                        "4463",
                        "2626",
                        "2623",
                        "2622",
                        "2621",
                        "2636",
                        "2638",
                        "2643",
                        "2642",
                        "2644",
                        "4473",
                        "2641",
                        "2646",
                        "2645",
                        "2648",
                        "2650",
                        "2618",
                        "2619",
                        "2625",
                        "2620",
                        "2617",
                        "2616",
                        "4488",
                        "2592",
                        "2587",
                        "2588",
                        "2589",
                        "2590",
                        "2591",
                        "2594",
                        "2593",
                        "2606",
                        "2607",
                        "2596",
                        "2600",
                        "2605",
                        "2603",
                        "2602",
                        "2604",
                        "2601",
                        "2599",
                        "4576",
                    ],
                    o5: [
                        "306",
                        "305",
                        "311",
                        "318",
                        "316",
                        "317",
                        "363",
                        "360",
                        "333",
                        "332",
                        "336",
                        "338",
                        "325",
                        "328",
                        "322",
                        "302",
                        "307",
                        "310",
                        "323",
                        "355",
                        "357",
                        "342",
                        "343",
                        "344",
                        "356",
                        "345",
                        "339",
                        "349",
                        "340",
                        "353",
                        "351",
                        "354",
                        "361",
                        "358",
                        "341",
                        "337",
                        "327",
                        "330",
                        "329",
                        "326",
                        "308",
                        "314",
                        "315",
                        "313",
                        "304",
                        "301",
                        "309",
                        "321",
                        "320",
                        "1387",
                        "352",
                        "350",
                        "348",
                        "346",
                        "347",
                        "331",
                        "312",
                        "324",
                        "319",
                        "334",
                        "335",
                        "362",
                        "359",
                        "364",
                        "303",
                    ],
                    o6: [
                        "2702",
                        "2759",
                        "2760",
                        "2654",
                        "2659",
                        "2670",
                        "2660",
                        "2658",
                        "2657",
                        "2775",
                        "2661",
                        "2656",
                        "2669",
                        "2662",
                        "2663",
                        "2653",
                        "2665",
                        "2664",
                        "2652",
                        "2666",
                        "2651",
                        "2668",
                        "2678",
                        "2673",
                        "2672",
                        "2671",
                        "2676",
                        "2680",
                        "2683",
                        "2682",
                        "2772",
                        "2771",
                        "2773",
                        "2774",
                        "2722",
                        "2770",
                        "2755",
                        "2743",
                        "2779",
                        "2737",
                        "2718",
                        "2721",
                        "2732",
                        "2778",
                        "2776",
                        "2736",
                        "2777",
                        "2735",
                        "2751",
                        "2734",
                        "2750",
                        "2733",
                        "2752",
                        "2754",
                        "2726",
                        "2727",
                        "2762",
                        "2763",
                        "2724",
                        "2761",
                        "2725",
                        "2756",
                        "2728",
                        "2757",
                        "2729",
                        "2769",
                        "2730",
                        "2766",
                        "2731",
                        "2765",
                        "2723",
                        "2767",
                        "2720",
                        "2764",
                        "2719",
                        "2716",
                        "2701",
                        "2694",
                        "2717",
                        "2687",
                        "2692",
                        "2711",
                        "2713",
                        "2714",
                        "2753",
                        "2749",
                        "2748",
                        "2747",
                        "2739",
                        "2745",
                        "2744",
                        "2710",
                        "4345",
                        "2697",
                        "2696",
                        "2695",
                        "2686",
                        "2715",
                        "2741",
                        "2740",
                        "2704",
                        "2699",
                        "2707",
                        "2712",
                        "4365",
                        "2705",
                        "2706",
                        "2708",
                        "2690",
                        "2742",
                        "2681",
                        "2684",
                        "2693",
                        "2691",
                        "2685",
                        "2667",
                        "2679",
                        "2688",
                        "4379",
                        "2677",
                        "2674",
                        "2675",
                        "2703",
                        "4527",
                        "2709",
                        "2689",
                        "2698",
                        "2655",
                        "2758",
                        "2768",
                        "2738",
                    ],
                    o8: ["2553", "2547", "2546", "2555", "2554", "2549", "2548", "2550", "2551", "2552"],
                    o9: ["2561", "2562", "2560", "2558", "2559", "2565", "2556", "2563", "2564", "2557"],
                    o17: [
                        "2849",
                        "2858",
                        "2866",
                        "2867",
                        "2873",
                        "2886",
                        "2887",
                        "2889",
                        "2890",
                        "2893",
                        "2895",
                        "2900",
                        "2905",
                        "2909",
                        "2912",
                        "2915",
                        "2921",
                        "2922",
                        "2923",
                        "2926",
                        "2929",
                        "2945",
                        "2951",
                        "2953",
                        "2957",
                        "2967",
                        "2970",
                        "2972",
                        "2973",
                        "2977",
                        "2980",
                        "2981",
                        "2985",
                        "2986",
                        "2988",
                        "2990",
                        "2993",
                        "2998",
                        "2999",
                        "3002",
                        "3003",
                        "3008",
                        "3009",
                        "3010",
                        "3012",
                        "3016",
                        "3018",
                        "3019",
                        "3020",
                        "3021",
                        "3022",
                        "3023",
                        "3024",
                        "3026",
                        "3027",
                        "3031",
                        "3033",
                        "3034",
                        "3036",
                        "3038",
                        "3041",
                        "3043",
                        "3044",
                        "3045",
                        "3049",
                        "3050",
                        "3053",
                        "3055",
                        "3059",
                        "3060",
                        "3077",
                        "3087",
                        "3093",
                        "3097",
                        "3098",
                        "3108",
                        "3113",
                        "3114",
                        "3115",
                        "3119",
                        "3124",
                        "3127",
                        "3138",
                        "3141",
                        "3147",
                        "3155",
                        "3196",
                        "3213",
                        "3220",
                        "3222",
                        "3223",
                        "3224",
                        "3225",
                        "3229",
                        "3233",
                        "3246",
                        "3249",
                        "3257",
                        "3259",
                        "3260",
                        "3272",
                        "3275",
                        "3276",
                        "3277",
                        "3278",
                        "3280",
                        "3281",
                        "3287",
                        "3289",
                        "3292",
                        "3308",
                        "3311",
                        "3312",
                        "3315",
                        "3317",
                        "3318",
                        "3321",
                        "3326",
                        "3327",
                        "3333",
                        "3350",
                        "3354",
                        "3359",
                        "3364",
                        "3365",
                        "3366",
                        "3379",
                        "3384",
                        "3385",
                        "3386",
                        "3387",
                        "3391",
                        "3394",
                        "3396",
                        "3399",
                        "3407",
                        "3408",
                        "3411",
                        "3413",
                        "3414",
                        "3419",
                        "3428",
                        "3430",
                        "3433",
                        "3441",
                        "3450",
                        "3452",
                        "3455",
                        "3459",
                        "3461",
                        "3464",
                        "3470",
                        "3471",
                        "3472",
                        "3475",
                        "3477",
                        "3479",
                        "3480",
                        "3481",
                        "3486",
                        "3487",
                        "3489",
                        "3492",
                        "3498",
                        "3502",
                        "3503",
                        "3504",
                        "3507",
                        "3509",
                        "3512",
                        "3514",
                        "3516",
                        "3522",
                        "3523",
                        "3528",
                        "3545",
                        "3549",
                        "3552",
                        "3555",
                        "3556",
                        "3557",
                        "3559",
                        "3560",
                        "3563",
                        "3564",
                        "3569",
                        "3570",
                        "3571",
                        "3575",
                        "3576",
                        "3582",
                        "3584",
                        "3585",
                        "3588",
                        "3592",
                        "3595",
                        "3598",
                        "3599",
                        "3607",
                        "3610",
                        "3612",
                        "3616",
                        "3625",
                        "3626",
                        "3629",
                        "3631",
                        "3637",
                        "3638",
                        "3645",
                        "3652",
                        "3653",
                        "3655",
                        "3657",
                        "3658",
                        "3669",
                        "3670",
                        "3671",
                        "3676",
                        "3678",
                        "3681",
                        "3683",
                        "3684",
                        "3685",
                        "3687",
                        "3694",
                        "3707",
                        "3711",
                        "3714",
                        "3715",
                        "3716",
                        "3724",
                        "3725",
                        "3726",
                        "3727",
                        "3731",
                        "3735",
                        "3736",
                        "3739",
                        "3740",
                        "3741",
                        "3742",
                        "3743",
                        "3746",
                        "3747",
                        "3748",
                        "3750",
                        "3751",
                        "3754",
                        "3755",
                        "3758",
                        "3764",
                        "3766",
                        "3768",
                        "3770",
                        "3774",
                        "3775",
                        "3777",
                        "3781",
                        "3782",
                        "3783",
                        "3786",
                        "3790",
                        "3792",
                        "3794",
                        "3798",
                        "3802",
                        "3805",
                        "3809",
                        "3815",
                        "3819",
                        "3822",
                        "3828",
                        "3829",
                        "3831",
                        "3840",
                        "3841",
                        "3842",
                        "3843",
                        "3845",
                        "3846",
                        "3851",
                        "3852",
                        "3855",
                        "3865",
                        "3867",
                        "3871",
                        "3874",
                        "3876",
                        "3881",
                        "3882",
                        "3883",
                        "3884",
                        "3886",
                        "3893",
                        "3909",
                        "3912",
                        "3918",
                        "3925",
                        "3932",
                        "3936",
                        "3938",
                        "3940",
                        "3941",
                        "3943",
                        "3945",
                        "3953",
                        "3954",
                        "3962",
                        "3963",
                        "3967",
                        "3970",
                        "3971",
                        "3973",
                        "3974",
                        "3979",
                        "3982",
                        "3991",
                        "3998",
                        "4001",
                        "4004",
                        "4009",
                        "4017",
                        "4018",
                        "4021",
                        "4024",
                        "4034",
                        "4037",
                        "4053",
                        "4054",
                        "4062",
                        "4064",
                        "4068",
                        "4076",
                        "4080",
                        "4090",
                        "4092",
                        "4093",
                        "4094",
                        "4095",
                        "4099",
                        "4100",
                        "4101",
                        "4103",
                        "4106",
                        "4107",
                        "4108",
                        "4110",
                        "4113",
                        "4114",
                        "4116",
                        "4117",
                        "4118",
                        "4119",
                        "4122",
                        "4127",
                        "4128",
                        "4131",
                        "4132",
                        "4134",
                        "4135",
                        "4150",
                        "4154",
                        "4157",
                        "4161",
                        "4577",
                        "4578",
                        "4579",
                        "4580",
                        "4581",
                        "4582",
                        "4583",
                        "4584",
                        "4585",
                        "4586",
                        "4587",
                        "4588",
                        "4589",
                        "4590",
                        "4591",
                        "4592",
                        "4593",
                        "4594",
                        "4595",
                        "4596",
                        "4597",
                        "4598",
                        "4599",
                        "4600",
                        "4601",
                        "4602",
                        "4603",
                        "4604",
                        "4605",
                        "4606",
                        "4607",
                        "4608",
                        "4609",
                        "4610",
                        "4611",
                        "4612",
                        "4613",
                        "4614",
                        "4615",
                        "4616",
                        "4617",
                        "4618",
                        "4619",
                        "4620",
                        "4621",
                        "4622",
                        "4623",
                        "4624",
                        "4625",
                        "4626",
                        "4783",
                        "4784",
                        "4785",
                        "4786",
                        "4787",
                        "4788",
                        "4789",
                        "4790",
                        "4791",
                        "4792",
                        "4793",
                        "4794",
                        "4795",
                        "4796",
                        "4797",
                        "4798",
                        "4799",
                        "4800",
                        "4801",
                        "4802",
                        "4803",
                        "4804",
                        "4805",
                        "4806",
                        "4807",
                        "4808",
                        "4809",
                        "4810",
                        "4811",
                        "4812",
                        "4813",
                        "4814",
                        "4815",
                        "4816",
                        "4817",
                        "4818",
                        "4819",
                        "4820",
                        "4821",
                        "4822",
                        "4823",
                        "4824",
                        "4825",
                        "4826",
                        "4849",
                        "4850",
                        "4851",
                        "4852",
                        "4853",
                        "4854",
                        "4855",
                        "4879",
                        "4900",
                        "4901",
                        "4902",
                        "4903",
                        "4904",
                        "4905",
                        "4906",
                        "4907",
                        "4908",
                        "4909",
                        "4910",
                        "4911",
                        "4912",
                        "4913",
                        "4914",
                        "4915",
                        "4916",
                        "4917",
                        "4918",
                        "4919",
                        "4920",
                        "4921",
                        "4922",
                        "4923",
                        "4924",
                        "4925",
                        "4926",
                        "4927",
                        "4928",
                        "4929",
                        "4930",
                        "4931",
                        "4932",
                        "4933",
                        "4934",
                        "4935",
                        "4936",
                        "4937",
                        "4938",
                        "4939",
                        "4940",
                        "4941",
                        "4942",
                        "4943",
                        "4944",
                        "4945",
                        "4946",
                        "4947",
                    ],
                    o44: [
                        "2907",
                        "2918",
                        "2933",
                        "2943",
                        "2952",
                        "3161",
                        "3208",
                        "3300",
                        "3309",
                        "3316",
                        "3328",
                        "3329",
                        "3357",
                        "3388",
                        "3392",
                        "3397",
                        "3415",
                        "3434",
                        "3437",
                        "3458",
                        "3460",
                        "3466",
                        "3467",
                        "3469",
                        "3474",
                        "3485",
                        "3488",
                        "3490",
                        "3493",
                        "3497",
                        "3499",
                        "3517",
                        "3525",
                        "3527",
                        "3531",
                        "3535",
                        "3542",
                        "3544",
                        "3551",
                        "3553",
                        "3617",
                        "3619",
                        "3628",
                        "3642",
                        "3647",
                        "3651",
                        "3661",
                        "3662",
                        "3673",
                        "3686",
                        "3688",
                        "3693",
                        "3696",
                        "3700",
                        "3712",
                        "3717",
                        "3718",
                        "3721",
                        "3729",
                        "3757",
                        "3769",
                        "3785",
                        "3800",
                        "3807",
                        "3817",
                        "3844",
                        "3847",
                        "3853",
                        "3864",
                        "3872",
                        "3877",
                        "3901",
                        "3906",
                        "3916",
                        "3917",
                        "3919",
                        "3927",
                        "3937",
                        "3944",
                        "3946",
                        "3955",
                        "3959",
                        "3961",
                        "3977",
                        "4014",
                        "4015",
                        "4019",
                        "4025",
                        "4041",
                        "4048",
                        "4096",
                        "4098",
                        "4115",
                        "4121",
                        "4125",
                        "4139",
                        "4140",
                        "4149",
                        "4156",
                        "4514",
                        "4515",
                        "4713",
                        "4714",
                        "4715",
                        "4716",
                        "4717",
                        "4718",
                        "4719",
                        "4720",
                        "4721",
                        "4722",
                        "4723",
                        "4724",
                        "4725",
                        "4726",
                        "4727",
                        "4728",
                        "4729",
                        "4730",
                        "4731",
                        "4732",
                        "4733",
                        "4734",
                        "4735",
                        "4736",
                        "4737",
                        "4738",
                        "4739",
                        "4740",
                        "4741",
                        "4742",
                        "4743",
                        "4744",
                        "4745",
                        "4746",
                        "4747",
                        "4748",
                        "4749",
                        "4750",
                        "4751",
                        "4752",
                        "4753",
                        "4754",
                        "4755",
                        "4756",
                        "4757",
                        "4758",
                        "4759",
                        "4760",
                        "4761",
                        "4762",
                        "4763",
                        "4764",
                        "4765",
                        "4766",
                        "4767",
                        "4768",
                        "4769",
                        "4770",
                        "4771",
                        "4772",
                        "4773",
                        "4774",
                        "4775",
                        "4776",
                        "4777",
                        "4778",
                        "4779",
                        "4780",
                        "4880",
                        "4883",
                        "4884",
                        "4885",
                        "4886",
                        "4887",
                        "4888",
                        "4889",
                        "4890",
                        "4891",
                        "4892",
                        "4893",
                        "4894",
                        "4895",
                        "4896",
                        "4897",
                        "4898",
                        "4899",
                        "4948",
                        "4949",
                        "4950",
                        "4951",
                        "4952",
                        "4953",
                        "4954",
                        "4955",
                        "4956",
                        "4957",
                        "4958",
                        "4959",
                        "4960",
                        "4962",
                        "4963",
                        "4964",
                        "4965",
                        "4966",
                        "4967",
                        "4968",
                        "4969",
                        "4970",
                        "4971",
                        "4972",
                        "4973",
                        "4974",
                        "4975",
                        "4976",
                        "4977",
                        "4978",
                        "4979",
                        "4980",
                        "4981",
                        "4982",
                        "4983",
                        "4984",
                        "4985",
                        "4986",
                        "4987",
                        "4988",
                        "4989",
                        "4990",
                        "4991",
                        "4992",
                        "4993",
                        "4994",
                        "4995",
                        "4996",
                        "4997",
                        "4998",
                        "4999",
                        "5000",
                        "5001",
                        "5002",
                        "5004",
                        "5005",
                        "5006",
                        "5007",
                        "5009",
                        "5010",
                        "5011",
                        "5013",
                        "5014",
                        "5015",
                        "5016",
                        "5017",
                        "5018",
                        "5019",
                        "5020",
                        "5021",
                        "5022",
                    ],
                    o45: [
                        "2917",
                        "3605",
                        "3618",
                        "3622",
                        "3772",
                        "3848",
                        "3892",
                        "3898",
                        "3928",
                        "3975",
                        "4002",
                        "4044",
                        "4058",
                        "4097",
                        "4102",
                        "4111",
                        "4148",
                        "4159",
                        "4782",
                        "4827",
                        "4829",
                        "4830",
                        "4831",
                        "4832",
                        "4833",
                        "4835",
                        "4836",
                        "4837",
                        "4838",
                        "4839",
                        "4840",
                        "4841",
                        "4842",
                        "4843",
                        "4844",
                        "4845",
                        "4846",
                        "4847",
                        "4848",
                        "4870",
                        "4874",
                        "4875",
                        "4878",
                    ],
                    o46: ["2938", "3719", "3972", "4089", "4112", "4828", "4834", "4869", "4871", "4872", "4873", "4876", "4877", "4881", "4882", "4961", "5003", "5008", "5012", "5023", "5024"],
                    o64: [
                        "4648",
                        "4649",
                        "4650",
                        "4651",
                        "4652",
                        "4653",
                        "4654",
                        "4655",
                        "4656",
                        "4657",
                        "4658",
                        "4659",
                        "4660",
                        "4661",
                        "4662",
                        "4663",
                        "4664",
                        "4665",
                        "4666",
                        "4667",
                        "4668",
                        "4669",
                        "4670",
                        "4671",
                        "4672",
                        "4673",
                        "4674",
                        "4675",
                        "4676",
                        "4677",
                        "4678",
                        "4679",
                        "4680",
                        "4681",
                        "4682",
                        "4683",
                        "4684",
                        "4685",
                        "4686",
                        "4687",
                        "4690",
                        "4692",
                        "4693",
                        "4694",
                        "4695",
                        "4696",
                        "4697",
                        "4698",
                        "4701",
                        "4702",
                        "4703",
                        "4704",
                        "4705",
                        "4706",
                        "4707",
                        "4708",
                        "4710",
                        "4711",
                        "4712",
                    ],
                    o18: [
                        "2865",
                        "2878",
                        "2896",
                        "2920",
                        "2940",
                        "2946",
                        "2964",
                        "3004",
                        "3030",
                        "3086",
                        "3089",
                        "3090",
                        "3092",
                        "3101",
                        "3106",
                        "3111",
                        "3116",
                        "3135",
                        "3136",
                        "3152",
                        "3153",
                        "3186",
                        "3212",
                        "3216",
                        "3248",
                        "3307",
                        "3319",
                        "3323",
                        "3361",
                        "3363",
                        "3373",
                        "3400",
                        "3403",
                        "3436",
                        "3456",
                        "3463",
                        "3495",
                        "3501",
                        "3532",
                        "3539",
                        "3548",
                        "3586",
                        "3593",
                        "3627",
                        "3633",
                        "3643",
                        "3650",
                        "3680",
                        "3706",
                        "3730",
                        "3732",
                        "3753",
                        "3765",
                        "3771",
                        "3789",
                        "3795",
                        "3804",
                        "3830",
                        "3838",
                        "3856",
                        "3858",
                        "3861",
                        "3896",
                        "3914",
                        "3986",
                        "3987",
                        "3988",
                        "3994",
                        "4012",
                        "4016",
                        "4033",
                        "4049",
                        "4050",
                        "4057",
                        "4070",
                        "4082",
                        "4083",
                        "4091",
                        "4105",
                        "4109",
                        "4120",
                        "4130",
                        "4137",
                        "4143",
                        "4152",
                        "4155",
                        "4162",
                        "4627",
                        "4628",
                        "4629",
                        "4630",
                        "4631",
                        "4632",
                        "4633",
                        "4634",
                        "4635",
                        "4636",
                        "4637",
                        "4638",
                        "4639",
                        "4640",
                        "4641",
                        "4642",
                        "4643",
                        "4644",
                        "4645",
                        "4646",
                        "4647",
                    ],
                }),
            ze = {
                name: "Markers",
                components: {},
                data: function () {
                    return {
                        adminList: [],
                        redirectMsg: !1,
                        backupDone: !1,
                        cloudArr: [
                            { type: "o5", count: 65, icon: "wind" },
                            { type: "o6", count: 131, icon: "earth" },
                            { type: "o8", count: 20, icon: "shrine" },
                        ],
                        localArr: [
                            { type: "o17", count: De.o17.length, icon: "chest1" },
                            { type: "o44", count: De.o44.length, icon: "chest2" },
                            { type: "o45", count: De.o45.length, icon: "chest3" },
                            { type: "o46", count: De.o46.length, icon: "chest4" },
                            { type: "o64", count: De.o64.length, icon: "challenge" },
                            { type: "o18", count: De.o18.length, icon: "seelie" },
                        ],
                    };
                },
                computed: Object(g["a"])(
                    Object(g["a"])(
                        {},
                        Object(h["d"])({
                            theUser: function (n) {
                                return n.user.theUser;
                            },
                            userData: function (n) {
                                return n.user.userData;
                            },
                        })
                    ),
                    Object(h["b"])({ isAdmin: "user/isAdmin" })
                ),
                methods: Object(g["a"])(
                    Object(g["a"])({}, Object(h["c"])({ addMessage: "ui/addMessage" })),
                    {},
                    {
                        googleSignIn: function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            (this.redirectMsg = !0),
                                this.$store.dispatch("user/userSignIn", n).catch(function () {
                                    console.log("Fail to sign in.");
                                });
                        },
                        googleSignOut: function () {
                            this.$store
                                .dispatch("user/userSignOut")
                                .then(function () {
                                    window.location = "/";
                                })
                                .catch(function () {
                                    console.log("Fail to sign out.");
                                });
                        },
                        collectCount: function (n) {
                            var o = this,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "doneMarkers",
                                t = "o8" == n || "o9" == n ? [].concat(De["o8"]).concat(De["o9"]) : De[n];
                            return t.filter(function (n) {
                                return o.userData[e].includes(n);
                            }).length;
                        },
                        uploadBackup: function () {
                            var n = this;
                            this.backupDone ||
                                V.get("gim-local-markers").then(function (o) {
                                    if (o && Array.isArray(o.markerIds)) {
                                        if (!confirm("This will upload " + o.markerIds.length + " records and override the data on cloud. Are you sure?")) return;
                                        nn.set("users-backup/" + n.theUser.uid, o).then(function () {
                                            (n.backupDone = !0), n.addMessage({ style: "success", body: "Data has been backed up." });
                                        });
                                    } else n.addMessage({ style: "danger", body: "You do not have any local data to backup" });
                                });
                        },
                        restoreBackup: function () {
                            confirm("This will download backup from cloud, and merge into your local data. Are you sure?") &&
                                nn.get("users-backup/" + this.theUser.uid).then(function (n) {
                                    n &&
                                        Array.isArray(n.markerIds) &&
                                        V.get("gim-local-markers").then(function (o) {
                                            o &&
                                                Array.isArray(o.markerIds) &&
                                                o.markerIds.forEach(function (o) {
                                                    n.markerIds.includes(o) || n.markerIds.push(o);
                                                }),
                                                V.set("gim-local-markers", n).then(function () {
                                                    alert("Restore successfully! Map is going to reload."), (window.location.href = "/");
                                                });
                                        });
                                });
                        },
                    }
                ),
            };
        e("8b7c");
        (ze.render = Le), (ze.__scopeId = "data-v-c0069722");
        var xe = ze,
            Te = {
                name: "Sidebar",
                components: { Header: Cn, Ad: In, Markers: Gn, Comments: yo, About: Qo, MyProfile: xe },
                data: function () {
                    return { isMobile: l, displayNews: !1, bottomCollapsed: !1, leftCollapsed: !1, tabs: ["Markers", "Comments", "About", "Profile"] };
                },
                computed: Object(h["d"])({
                    activeTab: function (n) {
                        return n.ui.activeTab;
                    },
                }),
                methods: Object(g["a"])({}, Object(h["c"])({ setTab: "ui/setTab" })),
                created: function () {
                    this.$store.commit("ui/setTab", "Markers");
                },
                mounted: function () {
                    var n = this;
                    setTimeout(function () {
                        n.displayNews = !0;
                    }, 5e3);
                },
            };
        e("8966");
        (Te.render = mn), (Te.__scopeId = "data-v-362365c4");
        var Ue = Te,
            Pe = { name: "Home", components: { Map: en, Sidebar: Ue } };
        Pe.render = N;
        var Ve = Pe,
            _e = [
                { path: "/", name: "Home", component: Ve },
                {
                    path: "/policy",
                    name: "Policy",
                    component: function () {
                        return e.e("policy").then(e.bind(null, "2da4"));
                    },
                },
            ],
            Be = Object($["a"])({ history: Object($["b"])(), routes: _e }),
            $e = Be,
            Ne = function () {
                return { activeTab: "", messages: [] };
            },
            Ee = {},
            Ge = {
                setTab: function (n, o) {
                    n.activeTab = o;
                },
                addMessage: function (n, o) {
                    var e = { id: new Date().toISOString(), title: o.title || "", body: o.body, style: o.style || "secondary" };
                    n.messages.push(e),
                        0 !== o.expires &&
                            window.setTimeout(function () {
                                Re(n.messages, e);
                            }, 1e3 * (o.expires || 5));
                },
                removeMessage: function (n, o) {
                    Re(n.messages, o);
                },
            },
            We = {};
        function Re(n, o) {
            var e = n.indexOf(o);
            e > -1 && n.splice(e, 1);
        }
        var qe = { namespaced: !0, state: Ne, getters: Ee, mutations: Ge, actions: We },
            He = (e("a15b"), e("3ca3"), e("2b3d"), e("ab42")),
            Ye = {
                en: {
                    ui: {
                        brand: "WORLD MAP",
                        Markers: "Markers",
                        Comments: "Comments",
                        About: "About",
                        Profile: "Profile",
                        selectAll: "SelectAll",
                        clearAll: "ClearAll",
                        markAsFound: "Mark As Found",
                        markAsNotFound: "Mark As Not Found",
                        news: "Latest Official News",
                        updates: "Updates",
                        links: "Helpful Links",
                        contact: "Contact",
                        submit: "Submit",
                        commentList: "What people say ...",
                    },
                    msg: {
                        cantVoteYourself: "You can not vote your own comments",
                        thanksForFeedback: "Thank you for the feedback!",
                        loginRequired: "Please log in first",
                        markAsFound: "Location # {0} has been marked as found",
                        markAsNotFound: "Location # {0} has been marked as NOT found",
                        updateDbLater: "It will take couple days for us to confirm and update the database",
                        welcomeBack: "Welcome back, {0}",
                        commentSubmitted: "Comment added Successfully",
                    },
                    p: {
                        foundCount: "{0} people found it",
                        pleaseSelectMarker: "Please select a marker on the map to enable comments.",
                        highTraffice: "Due to high traffic we need to pay Google a lot for its cloud services.",
                        pleaseDonate: "If you would like to sponsor this project, it really means a lot to us:",
                        loginToUnlock: "Sign in to enable more features:",
                        useGoogleLogin: "",
                        dragAndDrop: "Drag and drop to correct this place",
                        loginBeforeComment: "Sign in to leave a comment.",
                    },
                    category: { featured: "Featured", plant: "Plant", living: "Living(beta)", mineral: "Mineral(beta)", chest: "Chest(beta)", route: "Farming Route(beta)", monster: "Monster(beta)" },
                    markers: {
                        o2: "StatueOf7",
                        o3: "Teleporter",
                        o5: "Anemoculus",
                        o6: "Geoculus",
                        o8: "Shrine",
                        o52: "WorldQuest",
                        p1: "Artifacts",
                        p2: "Monsters",
                        o17: "Common Chest",
                        o44: "Exquisite Chest",
                        o45: "Precoius Chest",
                        o46: "Luxurious Chest",
                        o64: "Time-limited Challenge",
                        o18: "Mysterious Seelie",
                        o42: "Noctilucous Jade",
                        o16: "Crystal Chunk",
                        o15: "White Iron Chunk",
                        b49: "Iron Chunk",
                        b14: "Electro Crystal",
                        o40: "Cor Lapis",
                        b53: "Starconch",
                        b20: "Butterfly Wing",
                        b39: "Frog",
                        b34: "Bird Egg",
                        b16: "Luminescent Spine",
                        b22: "Crystal Core",
                        b50: "Lizard Tail",
                        b35: "Crab",
                        b55: "Fish",
                        b13: "Mist flower corolla",
                        b47: "Matsutake",
                        o32: "Qinxin",
                        o38: "Glaze Lily",
                        o30: "Jueyun chili",
                        b46: "Pinecone",
                        b26: "Flaming Flower Stamen",
                        o34: "Violetgrass",
                        b21: "Snapdragon",
                        o36: "Silk Flower",
                        b30: "Horsetail",
                        o37: "Dandelion Seed",
                        b31: "Mushroom",
                        o29: "Valberry",
                        o31: "Calla Lily",
                        o33: "Small Lamp Grass",
                        o43: "Windwheel Aster",
                        o41: "Wolfhook",
                        o39: "Philanemo Mushroom",
                        o35: "Cecilia",
                        o55: "Hilichurl - Small",
                        o19: "Hilichurl - Large",
                        o57: "Samachurl",
                        o22: "Pyro Abyss Mage",
                        o23: "Hydro Abyss Mage",
                        o24: "Cryo Abyss Mage",
                        o25: "Fatui Pyro Agent",
                        o26: "Fatui Electro C.M.",
                        o27: "Ruin Guard",
                        o28: "Ruin Hunter",
                        o47: "Cryo Whopper Flwr",
                        o48: "Pyro Whopper Flwr",
                        o49: "Geovishap Hatchling",
                    },
                },
                zh: {
                    ui: { brand: "原神地图", Markers: "标 记", Comments: "评 论", About: "关 于", Profile: "我的资料", selectAll: "全部选择", clearAll: "全部取消", markAsFound: "标记为已找到", markAsNotFound: "标记为未找到" },
                    markers: { o2: "七天神像", o3: "传送点", o5: "风神瞳", o6: "岩神瞳", o8: "地灵龛", o52: "世界任务", p1: "圣遗物" },
                },
                ko: {
                    ui: {
                        brand: "세계 지도",
                        Markers: "지도 마커",
                        Comments: "댓글",
                        About: "추가 정보",
                        Profile: "내 프로필",
                        selectAll: "모두 선택",
                        clearAll: "모두 선택 해제",
                        markAsFound: "찾음으로 표시",
                        markAsNotFound: "찾을 수 없음으로 표시",
                        news: "최신 메시지",
                        updates: "최신 메시지",
                        links: "우정 링크",
                        contact: "연락처",
                        submit: "제출",
                        commentList: "댓글 리스트 ...",
                    },
                    msg: {
                        cantVoteYourself: "당신은 자신의 평론에 대해 투표할 수 없습니다.",
                        thanksForFeedback: "피드백 감사합니다!",
                        loginRequired: "등록해주세요!",
                        markAsFound: "장소 {0}을 찾으셨다고 성공적으로 표기하였습니다.",
                        markAsNotFound: "장소 {0}을 못찾았다고 성공적으로 표기하였습니다.",
                        updateDbLater: "며칠 안에 데이터베이스를 갱신하겠습니다.",
                        welcomeBack: "로그인 성공, {0}님 환영합니다 !",
                        commentSubmitted: "리뷰성공!",
                    },
                    p: {
                        foundCount: "{0}명 이미 찾았습니다",
                        pleaseSelectMarker: "지도상에서 한 지점을 선택하여 평론을 살펴보시기 바랍니다.",
                        highTraffice: "본 사이트의 데이터가 매우 많기 때문에 비싼 서버와 데이터베이스 비용을 지불해야 합니다.",
                        pleaseDonate: "서버 운영을 유지하도록 기부하시길 바랍니다:",
                        loginToUnlock: "로그인한 후 더 많은 기능을 잠금 해제할 수 있어요~",
                        useGoogleLogin: "Google 계정을 사용하여 로그인해주세요",
                        dragAndDrop: "이 표시를 끌어서 위치를 업데이트하시오.",
                        loginBeforeComment: "로그인 후 리뷰해주세요!.",
                    },
                    category: { featured: "Featured", plant: "식물", living: "동물(beta)", mineral: "광물(beta)", chest: "보물(beta)", route: "Farming Route(beta)" },
                    markers: {
                        o2: "일곱신상 바람",
                        o3: "워프 포인트",
                        o5: "바람 신의 눈동자",
                        o6: "바위 신의 눈동자",
                        o8: "지령감실",
                        o52: "월드 임무",
                        p1: "성유물",
                        p2: "Monsters",
                        o17: "평범한 보물상자",
                        o44: "정교한 보물상자",
                        o45: "진귀한 보물상자",
                        o46: "화려한 보물상자",
                        o64: "시간 제한 도전",
                        o18: "선령",
                        o42: "야박석",
                        o16: "수정덩이",
                        o15: "백철",
                        b49: "철광",
                        b14: "전기 수정",
                        o40: "콜 라피스",
                        b53: "별소라",
                        b20: "나비 날개",
                        b39: "청개구리",
                        b34: "새알",
                        b16: "반딧불 정수",
                        b22: "수정 코어",
                        b50: "도마뱀 꼬리",
                        b35: "꽃게",
                        b55: "생선 살코기",
                        b13: "서리꽃 꽃술",
                        b47: "송이버섯",
                        o32: "청심",
                        o38: "유리백합",
                        o30: "절운고추",
                        b46: "솔방울",
                        b26: "화염꽃 꽃술",
                        o34: "유리주머니",
                        b21: "금어초",
                        o36: "예상꽃",
                        b30: "말총",
                        o37: "민들레 씨앗",
                        b31: "버섯",
                        o29: "낙락베리",
                        o31: "통통 연꽃",
                        o33: "등불꽃",
                        o43: "풍차 국화",
                        o41: "고리고리 열매",
                        o39: "바람버섯",
                        o35: "세릴리아꽃",
                    },
                },
                ja: {
                    ui: {
                        brand: "原神地図",
                        Markers: "マーカー",
                        Comments: "コメント",
                        About: "詳しくは",
                        Profile: "個人情報",
                        selectAll: "すべて選択",
                        clearAll: "すべて選択解除",
                        markAsFound: "検出済としてマーク",
                        markAsNotFound: "未検出としてマーク",
                        news: "最新のニュース",
                        updates: "最近の更新",
                        links: "リンク",
                        contact: "連絡先",
                        submit: "発送",
                        commentList: "コメントリスト ...",
                    },
                    msg: {
                        cantVoteYourself: "自分のコメントに投票することはできません",
                        thanksForFeedback: "フィードバックありがとうございます！",
                        loginRequired: "ログインしてください",
                        markAsFound: "サイト{0}が検出済としてマークされました",
                        markAsNotFound: "サイト{0}が未検出としてマークされました",
                        updateDbLater: "数日以内にデータベースを更新します.",
                        welcomeBack: "ログイン成功、ようこそ{0}",
                        commentSubmitted: "コメントに成功しました",
                    },
                    p: {
                        foundCount: "{0}人が見つかりました",
                        pleaseSelectMarker: "コメントを表示するには、地図上の場所を選択してください",
                        highTraffice: "このWebサイトはトラフィックが多いため、サーバとデータベースのコストが高くなります.",
                        pleaseDonate: "サーバの稼働を維持するための寄付:",
                        loginToUnlock: "ログインするとロックを解除できます:",
                        useGoogleLogin: "Googleアカウントを使ってログインする",
                        dragAndDrop: "このマーカーをドラッグして位置を更新します",
                        loginBeforeComment: "ログインしてからコメントしてください.",
                    },
                    category: { featured: "Featured", plant: "植物", living: "動物(beta)", mineral: "鉱物(beta)", chest: "宝箱(beta)", route: "Farming Route(beta)" },
                    markers: { o2: "七天神像", o3: "ワープポイント", o5: "風神の瞳", o6: "岩神の瞳", o8: "地霊壇", o52: "世界任務", p1: "聖遺物" },
                },
                pt: {
                    ui: {
                        brand: "Mapa Mundial",
                        Markers: "Localização",
                        Comments: "Comentário",
                        About: "Mais Informações",
                        Profile: "Informação pessoal",
                        selectAll: "SelectAll",
                        clearAll: "ClearAll",
                        markAsFound: "Marca encontrada",
                        markAsNotFound: "Marca não encontrado",
                        news: "Novidades",
                        updates: "Atualização recente",
                        links: "Links",
                        contact: "Contatos",
                        submit: "Enviar",
                        commentList: "Lista de comentários ...",
                    },
                    msg: {
                        cantVoteYourself: "Não pode votar em seus comentários",
                        thanksForFeedback: "Obrigado pelo seu feedback!",
                        loginRequired: "Faça login primeiro",
                        markAsFound: "Localização {0} foi marcada encontrada com sucesso",
                        markAsNotFound: "A localização {0} foi marcada encontrada com sucesso",
                        updateDbLater: "Atualizaremos o banco de dados em alguns dias.",
                        welcomeBack: "Login com sucesso, bem-vindo {0}",
                        commentSubmitted: "Comentário bem sucedido",
                    },
                    p: {
                        foundCount: "{0} pessoas encontrado",
                        pleaseSelectMarker: "Selecione um local no mapa para ver os comentários.",
                        highTraffice: "Devido ao grande tráfego neste site, precisamos pagar taxas caras para servidor e banco de dados.",
                        pleaseDonate: "Doe-nos para manter o servidor funcionando:",
                        loginToUnlock: "Pode explorar mais funções após o login:",
                        useGoogleLogin: "Faça login por conta do Google",
                        dragAndDrop: "Arraste este marca para atualizar sua posição",
                        loginBeforeComment: "Faça o login para comentar",
                    },
                    category: { featured: "Featured", plant: "Planta", living: "Animal(beta)", mineral: "Mineral(beta)", chest: "Baú(beta)", route: "Farming Route(beta)" },
                },
                es: {
                    ui: {
                        brand: "Mapa Mundial",
                        Markers: "Ubicación",
                        Comments: "Comentarios",
                        About: "Más información",
                        Profile: "Dato personal",
                        selectAll: "SelectAll",
                        clearAll: "ClearAll",
                        markAsFound: "Marcado como encontrado",
                        markAsNotFound: "Marcado como no encontrado",
                        news: "Últimas noticias",
                        updates: "Actualizaciones recientes",
                        links: "Enlace directo",
                        contact: "Contacto",
                        submit: "Enviar",
                        commentList: "Lista de comentarios ...",
                    },
                    msg: {
                        cantVoteYourself: "No puedes votar los comentarios tuyos.",
                        thanksForFeedback: "¡ Gracias por tus respuestas!",
                        loginRequired: "Por favor, ingresa primero.",
                        markAsFound: "La ubicación {0} se marcado como encontrada.",
                        markAsNotFound: "La ubicación {0} se marcado como no encontrada.",
                        updateDbLater: "Actualizaremos la base de datos en unos días.",
                        welcomeBack: "Sesión iniciada correctamente, bienvenido a {0}",
                        commentSubmitted: "Comentario realizado.",
                    },
                    p: {
                        foundCount: "{0} personas han encontrado.",
                        pleaseSelectMarker: "Selecciona una ubicación en el mapa para ver sus comentarios.",
                        highTraffice: "Debido a la gran corriente por este sitio web, necesitamos pagar costosas tarifas del servidor y de base de datos.",
                        pleaseDonate: "Donar para mantener el servidor en funcionamiento:",
                        loginToUnlock: "Desbloquear más funciones al iniciar sesión:",
                        useGoogleLogin: "Iniciar sesión con cuenta de Google",
                        dragAndDrop: "Arrastrar este marcador para actualizar su posición",
                        loginBeforeComment: "Por favor, inicia sesión para realizar comentarios",
                    },
                    category: { featured: "Featured", plant: "Planta", living: "Animal(beta)", mineral: "Mineral(beta)", chest: "Cofre del tesoro(beta)", route: "Farming Route(beta)" },
                },
            },
            Je = Ye;
        function Ke() {
            try {
                var n = new URL(window.location.href),
                    o = n.searchParams.get("lang");
                if (o) return o;
            } catch (e) {
                console.error(e);
            }
            return (localStorage.getItem("lang") || navigator.language || "en-us").split("-")[0];
        }
        var Qe = Object(He["a"])({ locale: Ke(), fallbackLocale: "en", messages: Je, legacy: !0 }),
            Xe = Qe,
            Ze = Xe.global.t,
            nt = function () {
                return { theUser: null, userData: { doneMarkers: [], localMarkers: [] } };
            },
            ot = {
                isMarkerDone: function (n) {
                    return function (o) {
                        return n.userData.doneMarkers.includes(o) || n.userData.localMarkers.includes(o);
                    };
                },
                isAdmin: function (n) {
                    return n.theUser && "CulpcUB6zwXu8TpIsJ1YGWw21Ke2" == n.theUser.uid;
                },
                userInitial: function (n) {
                    return n.theUser
                        ? n.theUser.displayName
                              .split(" ")
                              .map(function (n) {
                                  return n[0].toUpperCase() + ".";
                              })
                              .join("")
                        : "anon";
                },
                userShortId: function (n) {
                    return n.theUser ? n.theUser.uid.slice(-16) : "";
                },
            },
            et = {
                setUser: function (n, o) {
                    n.theUser = { uid: o.uid, displayName: o.displayName, photoURL: o.photoURL };
                },
                setUserData: function (n, o) {
                    for (var e in o) n.userData[e] = o[e];
                },
                addUserData: function (n, o) {
                    for (var e in o) n.userData[e].push(o[e]);
                },
                removeUserData: function (n, o) {
                    for (var e in o) {
                        var t = n.userData[e].indexOf(o[e]);
                        -1 != t && n.userData[e].splice(t, 1);
                    }
                },
                cleanUserAndData: function (n) {
                    (n.theUser = null), (n.userData.doneMarkers = []);
                },
            },
            tt = {
                syncSignInStatus: function (n) {
                    nn.checkSignIn(function (o) {
                        n.commit("ui/addMessage", { style: "success", body: Ze("msg.welcomeBack", [o.displayName]) }, { root: !0 }), n.dispatch("updateUserAndData", o);
                    });
                },
                updateUserAndData: function (n, o) {
                    n.commit("setUser", o),
                        nn.get("users/".concat(o.uid)).then(function (o) {
                            (o = o && o.markerIds ? o.markerIds : []),
                                (o = o.filter(function (n) {
                                    return !De.o2.includes(n) && !De.o3.includes(n);
                                })),
                                n.commit("setUserData", { doneMarkers: o }),
                                n.commit("map/batchUpdateMarkerStyle", o, { root: !0 });
                        });
                },
                userSignIn: function (n) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return n.state.theUser
                        ? Promise.resolve()
                        : nn
                              .signIn(l || o)
                              .then(function (o) {
                                  n.commit("ui/setTab", "Profile", { root: !0 }), n.dispatch("updateUserAndData", o);
                              })
                              .catch(function (n) {
                                  return console.error(n), Promise.reject();
                              });
                },
                userSignOut: function (n) {
                    return n.state.theUser
                        ? nn
                              .signOut()
                              .then(function () {
                                  n.commit("cleanUserAndData");
                              })
                              .catch(function (n) {
                                  return console.error(n), Promise.reject();
                              })
                        : Promise.resolve();
                },
            },
            at = { namespaced: !0, state: nt, getters: ot, mutations: et, actions: tt },
            rt = (e("b680"), e("25f0"), e("5319"), e("13d5"), [4463, 127, 3, 3, 2, 31]),
            st = (function () {
                function n() {
                    Object(I["a"])(this, n),
                        (this.d = (
                            "0" +
                            rt.reduce(function (n, o) {
                                return n * o;
                            })
                        ).split(""));
                }
                return (
                    Object(L["a"])(n, [
                        {
                            key: "getValueByPath",
                            value: function (n, o) {
                                if ("function" === typeof o) return o(n);
                                var e = o.split("."),
                                    t = n;
                                return (
                                    e.forEach(function (n) {
                                        t = t[n];
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "buildArray",
                            value: function (n, o) {
                                var e = this,
                                    t = [];
                                return (
                                    n.forEach(function (n) {
                                        var a = {};
                                        for (var r in o) a[r] = e.getValueByPath(n, o[r]);
                                        t.push(a);
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "arrayToCsv",
                            value: function (n) {
                                var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    e = [];
                                return (
                                    o && e.push(Object.keys(n[0]).join(",")),
                                    n.forEach(function (n) {
                                        e.push(Object.values(n).join(","));
                                    }),
                                    this.encode(e.join("\n"))
                                );
                            },
                        },
                        {
                            key: "csvToArray",
                            value: function (n) {
                                var o = this.decode(n),
                                    e = o.split("\n"),
                                    t = e.shift().split(","),
                                    a = [];
                                return (
                                    e.forEach(function (n) {
                                        var o = n.split(","),
                                            e = {};
                                        t.forEach(function (n, t) {
                                            return (e[n] = o[t]);
                                        }),
                                            a.push(e);
                                    }),
                                    a
                                );
                            },
                        },
                        {
                            key: "encode",
                            value: function (n) {
                                var o = this;
                                return n.replace(/[1-9]/g, function (n) {
                                    return o.d[parseInt(n)];
                                });
                            },
                        },
                        {
                            key: "decode",
                            value: function (n) {
                                var o = this;
                                return n.replace(/[1-9]/g, function (n) {
                                    return o.d.indexOf(n);
                                });
                            },
                        },
                    ]),
                    n
                );
            })(),
            ct = new st().csvToArray(
                "id,type,level,lng,lat\n647,b77,3,-4.8052986,2.6861115\n644,b77,3,-0.4813043,6.8254824\n649,b77,3,-0.7955715,6.9750105\n645,b77,3,-7.4703020,-1.3417934\n648,b77,3,-6.7162701,-6.7140026\n690,b77,3,-8.2695367,-3.6520222\n693,b77,3,-8.2695367,-3.7419987\n691,b77,3,-30.9521922,-3.6618911\n696,b77,3,-36.7719003,3.4396651\n692,b77,3,-35.0872623,6.1596370\n697,b77,3,-11.7595661,-7.7357203\n694,b77,3,-35.4545902,-5.7304567\n699,b77,3,-31.5301752,-36.2862453\n695,b77,3,-36.1461969,-32.0484194\n698,b77,3,-37.2715244,-13.8933559\n650,b77,3,-33.5980405,-38.0796339\n653,b77,3,-33.8989636,-38.1650456\n651,b77,3,-33.5980405,-38.1404617\n656,b77,3,-4.7536034,-31.9748355\n652,b77,3,-8.1545051,-33.3938873\n657,b77,3,-30.0987529,-30.7614124\n654,b77,3,-33.2469848,-9.0517539\n659,b77,3,-5.6509952,-2.9099059\n655,b34,3,-34.4307737,6.9816254\n658,b34,3,-34.4307737,6.4689796\n680,b34,3,-35.3567106,3.9156916\n683,b34,3,-35.3050394,3.4680677\n681,b34,3,-35.1523800,3.2406628\n686,b34,3,-37.0312328,-4.8404077\n682,b34,3,-32.8648311,-9.0546760\n687,b34,3,-32.9852831,-9.3882465\n684,b34,3,-37.1369773,-9.7708946\n689,b34,3,-32.9578094,-9.7708946\n685,b34,3,-39.6477949,-8.6257812\n688,b34,3,-39.7726614,-8.6851414\n200,b34,3,-39.6195172,-8.9277139\n203,b34,3,-39.2230959,-30.3957083\n201,b34,3,-34.7670255,-8.4137553\n206,b34,3,-32.2108954,-36.3934422\n202,b34,3,-31.8965296,-36.2315015\n207,b34,3,-31.6512330,-37.5231400\n204,b34,3,-31.1826125,-37.5429961\n209,b34,3,-37.2017330,-34.2068330\n205,b34,3,-37.1944967,-39.3365691\n208,b34,3,-37.2472601,-39.3172141\n230,b34,3,-37.4180380,-39.0980780\n233,b34,3,-35.3104031,-10.6199693\n231,b34,3,-35.2673872,-10.9905286\n236,b34,3,-36.1704803,-38.6634462\n232,b34,3,-33.6551828,-38.7621639\n237,b34,3,-33.5236087,-35.4048150\n234,b34,3,-4.1069580,-8.2897744\n239,b34,3,-7.8585476,-8.5486796\n235,b34,3,-4.3379015,-8.8264333\n238,b34,3,-5.1024040,-4.2634882\n210,b34,3,-5.3445729,-4.7617646\n213,b34,3,-5.3068674,-4.7877694\n211,b34,3,-5.3068674,-7.8034126\n216,b34,3,-5.2264845,-7.5558806\n212,b34,3,0.0418352,-6.3855271\n217,b34,3,-0.3361720,-6.1126369\n214,b34,3,-6.1783834,-6.6143910\n219,b34,3,-6.1783834,-6.2958395\n215,b34,3,-1.2765637,-3.3612818\n218,b34,3,-1.6956158,-3.3612818\n260,b34,3,-0.2371468,-0.4914897\n263,b34,3,-4.3151593,-6.0759257\n261,b34,3,-4.0201001,-6.0848404\n266,b34,3,-9.5038174,1.2393857\n262,b34,3,-9.5038174,1.6373861\n267,b34,3,-7.8424851,1.2453828\n264,b34,3,-7.8991539,1.6834851\n269,b34,3,-4.0201001,1.6204846\n265,b34,3,-33.4196575,-6.3084896\n268,b34,3,-33.6176975,-6.1598991\n220,b34,3,-31.5672141,-6.0099823\n223,b34,3,-31.4522108,-6.3084896\n221,b34,3,-31.8431469,-6.3543331\n226,b34,3,-31.5672141,-6.1971276\n222,b34,3,-36.3125714,-6.6009080\n227,b34,3,-36.1653078,-6.2443805\n224,b10,3,-9.4363489,3.2135041\n229,b10,3,-4.7743627,-1.5504380\n225,b10,3,-4.7865578,-6.0758987\n228,b10,3,-4.9389162,-6.0939394\n270,b10,3,0.3004485,-6.3088156\n273,b10,3,-1.6198820,-0.8449037\n271,b10,3,2.7219620,-37.0411615\n276,b10,3,2.2491632,-37.0578683\n272,b10,3,2.4778550,-37.3084200\n277,b10,3,6.5704198,-37.6488496\n274,b10,3,6.1939973,-32.5649640\n279,b10,3,6.7305449,-32.9583893\n275,b10,3,-36.3973597,-38.3043652\n278,b10,3,-33.5159140,-35.7879777\n240,b10,3,-31.0818524,-38.0825621\n243,b10,3,-31.0392538,-38.0287887\n241,b10,3,-33.7037251,-38.0374771\n246,b10,3,-33.2362410,-38.6882766\n242,b10,3,-33.2469848,-38.4677086\n247,b10,3,-33.6979309,-34.6111557\n244,b10,3,-31.6512330,-37.8909137\n249,b10,3,-32.5330929,-35.4231436\n245,b10,3,-39.8381439,-10.6916954\n248,b10,3,-37.7156254,-34.8461685\n290,b10,3,-37.4180380,-39.3320297\n293,b10,3,-37.2017330,-39.7766188\n291,b10,3,-37.7767342,-39.9327578\n296,b10,3,-37.7063537,-39.5187920\n292,b10,3,-39.0004294,-34.1469555\n297,b10,3,-36.2424368,-32.2100306\n294,b10,3,-32.6904269,-32.0432470\n299,b10,3,-32.6875337,-36.6027969\n295,b10,3,-31.5963997,-32.3533394\n298,b10,3,-31.8431469,-32.3793853\n250,b10,3,-31.4781765,-36.0596469\n253,b10,3,-33.5765869,-36.7537056\n251,b10,3,-33.7037251,-32.1158200\n256,b10,3,-33.7323617,-32.6004618\n252,b10,3,-33.5067751,-32.4309148\n257,b10,3,-39.2066150,-30.2008193\n254,b10,3,-39.7726614,-30.2361430\n259,b10,3,-39.4024497,-30.7121110\n255,b10,3,-34.0482700,-8.5094997\n258,b10,3,-37.6996268,-9.4658551\n280,b10,3,-32.8410500,-9.3438871\n283,b10,3,-32.5164758,-9.9739894\n281,b10,3,-36.6659946,-6.7864970\n286,b10,3,-38.6231171,1.0576813\n282,b10,3,-38.6154234,3.8387277\n287,b10,3,-38.3712481,1.0055738\n284,b10,3,-35.4647677,1.3308062\n289,b10,3,-35.7430618,1.0576813\n285,b10,3,-35.6293081,1.0626449\n288,b10,3,-39.2152873,1.7488218\n700,b10,3,-34.9923206,1.6011084\n703,b10,3,-34.5122971,1.1003547\n701,b10,3,-34.9437743,1.0576813\n706,b10,3,-34.1909801,2.4601475\n702,b10,3,-34.7112476,2.9639136\n707,b10,3,-34.7085533,2.4601475\n704,b10,3,-34.6669054,2.7232441\n709,b10,3,-34.6844195,2.2950167\n705,b10,3,-4.5753227,-30.3720125\n708,b10,3,-4.4221109,-5.8140101\n730,b10,3,-4.4221109,-8.3591545\n733,b10,3,-9.0524735,-8.1921528\n731,b10,3,-4.7536034,-8.1549083\n736,b10,3,-4.1981839,-8.7785084\n732,b10,3,-31.0818524,-33.3975853\n737,b10,3,-33.2469848,-30.8214185\n734,b10,3,-30.8295461,-33.0154345\n739,b11,3,-39.3680459,7.4743467\n735,b11,3,-39.0361631,7.7022266\n738,b11,3,-39.1800920,2.2192838\n710,b11,3,-10.8034302,6.6293677\n713,b11,3,-10.5008209,6.1750650\n711,b11,3,-10.1912115,1.6443898\n716,b11,3,-38.4350450,1.3165807\n712,b11,3,-38.7818001,1.0080569\n717,b11,3,-38.6446860,1.0135233\n714,b11,3,-35.9124135,1.3165807\n719,b11,3,-35.1849926,3.2575477\n715,b11,3,-31.9570836,0.0026745\n718,b11,3,-32.9302070,-2.0006878\n760,b11,3,-32.8126159,-2.0586430\n763,b11,3,-32.9677919,-2.6743613\n761,b11,3,-31.1826125,-1.9192409\n766,b11,3,-36.6736788,-35.6307182\n762,b11,3,-36.6468262,-35.6494344\n767,b11,3,-36.6583331,-35.2292459\n764,b11,3,-36.6364054,-35.2755482\n769,b11,3,-30.2386240,-34.9554585\n765,b11,3,-30.2484508,-34.5900839\n768,b11,3,-30.6631785,-34.5539327\n720,b11,3,-30.6823951,-34.8924683\n723,b11,3,-30.6354974,-34.8895722\n721,b11,3,9.1962052,-32.0036909\n726,b11,3,9.3112063,-32.3270359\n722,b11,3,4.2450256,-32.2982605\n727,b11,3,4.1346966,-32.7708288\n724,b11,3,4.8936895,-32.6002379\n729,b11,3,4.8052986,-32.6910780\n725,b11,3,4.5095084,-32.2389865\n728,b11,3,4.8052986,-32.2264766\n770,b11,3,4.9900756,-32.7415427\n773,b11,3,4.5753227,-32.7854036\n771,b11,3,0.8633894,-2.0175343\n776,b11,3,3.0222734,-6.8928915\n772,b62,3,-3.6849842,-0.5659294\n777,b62,3,-3.0484359,-1.3014317\n774,b62,3,0.1147096,-1.6382461\n779,b62,3,0.3175697,-6.7217245\n775,b62,3,0.0706628,-2.0944761\n778,b62,3,-0.5398264,-2.9337327\n740,b62,3,3.6780273,-4.8115491\n743,b62,3,-6.7969573,-4.9132586\n741,b62,3,-1.5043946,-5.7148096\n746,b62,3,-6.5461337,-8.4137553\n742,b62,3,-7.2880882,-31.4018983\n747,b62,3,-5.9905927,-5.7322198\n744,b62,3,-9.5684948,-5.4149365\n749,b62,3,-9.6646145,-3.2143997\n745,b62,3,-9.2335187,-3.4394936\n748,b62,3,-9.6646145,-3.9276362\n790,b62,3,-9.3297908,-3.4778474\n793,b62,3,-4.7865578,1.4244298\n791,b62,3,-7.8991539,6.9066223\n796,b62,3,-38.6340753,2.4868088\n792,b62,3,-34.4405542,6.7317727\n797,b62,3,-37.3174458,1.7874444\n794,b62,3,-37.2201412,3.5261131\n799,b62,3,-32.3358454,3.4996121\n795,b62,3,-32.3535599,3.6388075\n798,b62,3,-32.6615812,3.0004522\n750,b62,3,-34.4679354,3.3811147\n753,b62,3,-36.4374357,-6.2958395\n751,b62,3,-32.6904269,-2.5006039\n756,b62,3,-33.2731362,0.1785777\n752,b67,3,-7.4595772,6.4804197\n757,b67,3,-7.7593574,6.4473862\n754,b67,3,-7.7593574,6.2434418\n759,b67,3,-5.7487622,3.1607639\n755,b67,3,-5.4091579,3.0996027\n758,b67,3,-7.7410395,-1.1218629\n780,b67,3,-5.4612767,-6.4634314\n783,b67,3,-2.8798898,-2.8995011\n781,b67,3,-1.8793539,-7.4643953\n786,b67,3,-3.4166069,-7.1483582\n782,b67,3,-3.9336588,-7.2133023\n787,b67,3,-3.7300702,-7.6795375\n784,b67,3,-3.9336588,-7.7851674\n789,b67,3,-3.7918455,-7.4923370\n785,b67,3,0.7441454,-4.3237781\n788,b67,3,0.7157391,-4.2748315\n400,b67,3,0.9503816,-4.6605385\n403,b67,3,0.5607195,-4.2634882\n401,b67,3,1.7727036,-7.3185473\n406,b67,3,-0.5607195,-4.8579408\n402,b67,3,-1.9350803,-9.6595295\n407,b67,3,-1.4392102,-9.2650771\n404,b67,3,-1.0366885,-9.4141114\n409,b67,3,-2.1209123,-9.4364563\n405,b67,3,-6.8367242,-9.9423007\n408,b67,3,-2.0427739,-9.8322062\n430,b67,3,-6.8367242,-9.8148115\n433,b67,3,-6.1526759,-5.7426237\n431,b67,3,-6.0874019,-5.4580425\n436,b67,3,-1.5480877,-8.9798303\n432,b67,3,-1.4392102,-30.0072410\n437,b67,3,-1.9350803,-30.0491592\n434,b67,3,-1.4217597,-30.5454401\n439,b67,3,-1.7023442,-33.3010729\n435,b67,3,-3.6780273,-33.5571205\n438,b67,3,-3.6059301,-33.8752132\n410,b67,3,1.2340501,-31.9914476\n413,b67,3,1.5821414,-31.9310833\n411,b67,3,6.0795732,-31.4979613\n416,b67,3,2.4869686,-31.1886446\n412,b67,3,2.7860458,-31.6675202\n417,b67,3,2.2985374,-31.6298879\n414,b67,3,2.7219620,-31.2108061\n419,b67,3,4.3762721,-31.0453366\n415,b67,3,4.3762721,-31.3233593\n418,b67,3,4.3379015,-31.3585981\n460,b67,3,4.9514235,-31.8723888\n463,b67,3,4.5277401,-36.3166970\n461,b67,3,4.8130418,-36.3569662\n466,b67,3,4.9093681,-36.1095453\n462,b67,3,9.2929298,-36.3875035\n467,b67,3,9.1674793,-36.1453512\n464,b67,3,9.6258302,-36.6152467\n469,b67,3,9.2122360,-36.6152467\n465,b67,3,9.2888379,-36.2315015\n468,b67,3,9.6920953,-36.4232033\n420,b67,3,7.5420195,-32.0573586\n423,b67,3,7.5732221,-32.1947165\n421,b67,3,7.7334518,-32.6878187\n426,b67,3,7.4316719,-32.2639121\n422,b67,3,7.2643506,-32.7373847\n427,b67,3,7.7410395,-32.7061942\n424,b67,3,7.9174049,-32.2836726\n429,b67,3,7.0056615,-32.4112350\n425,b67,3,4.5106863,-37.2421212\n428,b67,3,4.8664293,-37.7332716\n470,b67,3,-5.2357189,-8.1434669\n473,b67,3,-5.1728208,-8.2298345\n471,b67,3,-5.1393587,-8.7938590\n476,b67,3,-30.8574324,-8.2897744\n472,b67,3,-30.5528225,-8.7088426\n477,b67,3,-30.8114843,-8.7849586\n474,b67,3,-33.5159140,-30.0984284\n479,b67,3,-30.3501727,-6.8123166\n475,b67,3,-30.6823951,-2.2902016\n478,b67,3,-30.8960630,-0.0570456\n440,b67,3,-30.9521922,-0.3258267\n443,b67,3,-30.5916404,-0.1733268\n441,b67,3,-36.6364054,1.7518106\n446,b67,3,-36.0927390,1.7638621\n442,b67,3,-36.0884525,1.2772275\n447,b67,3,-36.0286288,1.6204846\n444,b67,3,-36.3125714,1.3594426\n449,b67,3,-36.0123511,1.3928084\n445,b68,3,-35.8657277,4.0670566\n448,b68,3,-38.0948444,7.9485895\n490,b68,3,-32.4116355,9.0600989\n493,b68,3,-32.0531396,2.0781235\n491,b68,3,-32.3358454,6.8560075\n496,b68,3,-36.8070228,6.8901853\n492,b68,3,-36.8776985,6.8049768\n497,b68,3,-36.5213147,6.8049768\n494,b68,3,-36.8394152,6.5778336\n499,b68,3,-36.5348759,6.4712976\n495,b68,3,-32.7938568,6.2258686\n498,b68,3,-32.7938568,6.6850201\n450,b68,3,-32.4628016,6.6576327\n453,b68,3,-32.4116355,6.3826548\n451,b68,3,-32.7245343,6.0237559\n456,b68,3,-36.8498466,6.2434418\n452,b68,3,-36.5491864,6.6850201\n457,b68,3,-36.9069029,6.2258686\n454,b68,3,-36.5348759,6.6134509\n459,b68,3,-36.5491864,6.6058760\n455,b68,3,-36.5729300,6.1276058\n458,b68,3,-36.0438667,1.7224536\n480,b68,3,-36.2321956,1.2214849\n483,b68,3,-31.8254987,1.2188294\n481,b68,3,-31.5856224,1.6762245\n486,b68,3,-36.0123511,1.6373861\n482,b68,3,-36.0884525,1.3928084\n487,b68,3,-36.8219841,0.2732909\n484,b68,3,-36.8507297,0.6597889\n489,b68,3,-35.6138232,-1.2248805\n485,b68,3,-35.1934047,-1.7162873\n488,b68,3,-35.3663572,-1.2248805\n900,b68,3,-35.3104031,-1.7258824\n903,b68,3,-35.0270881,-6.0107618\n901,b68,3,-39.8829469,-6.0240302\n906,b68,3,-35.0096298,-6.3084896\n902,b68,3,-38.2349195,-5.0584057\n907,b68,3,-32.7080425,-36.4232033\n904,b68,3,-32.7621614,-36.4992712\n909,b68,3,-36.1006724,-32.1349487\n905,b68,3,-36.1177112,-32.1204971\n908,b68,3,-39.0943706,-34.2416358\n930,b68,3,-34.9165077,-39.1715048\n933,b68,3,-37.2472601,-39.6988827\n931,b68,3,-37.7379470,-39.9825541\n936,b68,3,-39.5269780,-38.7749028\n932,b68,3,-34.0482700,-38.5251389\n937,b68,3,-34.0634859,-10.3821290\n934,b68,3,-37.3174458,-38.1232723\n939,b68,3,-37.3174458,-38.1547911\n935,b68,3,-36.9341558,-38.6083131\n938,b68,3,-36.5348759,-38.6949190\n910,b68,3,-30.9059912,-35.9104179\n913,b68,3,-30.5897152,-35.8367171\n911,b68,3,-30.8295461,-38.0372289\n916,b68,3,-33.5159140,-8.9277139\n912,b68,3,-33.9808924,-8.5385677\n917,b68,3,-33.9475097,-30.6464826\n914,b68,3,-30.8960630,-30.7254228\n919,b68,3,-30.8295461,-30.7898129\n915,b68,3,-8.0673661,-8.6643916\n918,b68,3,-5.2820639,-8.6962181\n960,b68,3,-5.1393587,-8.4759953\n963,b68,3,-8.1165585,-4.9620502\n961,b68,3,-8.2000411,-4.9132586\n966,b68,3,-36.2993892,-2.5469047\n962,b68,3,-36.4209546,-2.5656241\n967,b68,3,-36.9069029,-2.8039219\n964,b68,3,-36.4766485,-2.8712708\n969,b68,3,-4.2450256,-7.7084526\n965,b68,3,-4.2601890,-7.4643953\n968,b68,3,-8.5805153,-6.4871355\n920,b68,3,-30.0344474,-6.5854877\n923,b68,3,-5.2357189,-6.2150056\n921,b68,3,-30.5528225,-0.0133863\n926,b68,3,-8.1886835,1.3282033\n922,b68,3,-5.9751830,3.3374361\n927,b68,3,-5.4270690,3.0362723\n924,b68,3,-5.4270690,0.5292634\n929,b68,3,-4.2450256,3.9156916\n925,b68,3,-4.7356561,3.4800542\n928,b68,3,-4.1981839,3.2625064\n970,b68,3,-4.3831077,3.6569684\n973,b68,3,-7.8991539,3.9982352\n971,b68,3,-7.3137545,3.8389991\n976,b68,3,-7.8326466,1.6373861\n972,b68,3,-7.5583877,1.1178172\n977,b68,3,-7.5583877,6.3262787\n974,b68,3,-7.9466750,6.0343392\n979,b68,3,-4.5875875,6.4326389\n975,b68,3,-7.4971935,6.4326389\n978,b68,3,-4.5106863,2.5104855\n940,b68,3,-1.1196121,1.2508266\n943,b70,3,-37.6687814,3.0362723\n941,b70,3,-36.8394152,0.8284039\n946,b70,3,-36.4957694,0.4029727\n942,b70,3,-31.7051257,0.3561093\n947,b70,3,-31.2097959,0.3225517\n944,b70,3,-36.0337854,-0.6766216\n949,b70,3,-36.0649442,-0.2188800\n945,b70,3,-31.8254987,-0.9169831\n948,b70,3,-33.5765869,-0.6955811\n990,b70,3,-33.9475097,-3.6645019\n993,b70,3,-33.5159140,-3.2004215\n991,b70,3,-33.9204685,-3.2991242\n996,b70,3,-30.2638184,-3.6595970\n992,b70,3,-30.6040810,-3.4394936\n997,b70,3,-30.6631785,-3.4532825\n994,b70,3,-30.7092611,-3.5574883\n999,b70,3,-33.0855457,-3.9846470\n995,b70,3,-33.0309516,-3.5624716\n998,b70,3,-30.9934805,-1.3446859\n950,b70,3,-30.5082211,-1.1603982\n953,b70,3,-30.3396643,-1.6878514\n951,b70,3,-33.0166478,-1.9201079\n956,b70,3,-33.3548729,-6.0107618\n952,b70,3,-39.5820868,-1.5863182\n957,b70,3,-34.1878796,-2.6262666\n954,b70,3,-36.2993892,-2.4300325\n959,b70,3,-36.7197616,-2.4409452\n955,b70,3,-37.4234014,-5.9142422\n958,b70,3,-37.4342625,-8.0973655\n980,b70,3,-39.4024497,-8.3882839\n983,b70,3,-39.9260586,-8.2406159\n981,b70,3,-39.9260586,-8.7787523\n986,b70,3,-39.4497544,-8.4137553\n982,b70,3,-39.7726614,-8.8042559\n987,b70,3,-39.3036392,-8.2919652\n984,b70,3,-37.5399970,-33.1001044\n989,b70,3,-34.0634859,-36.6152467\n985,b70,3,-34.6241818,-32.2777501\n988,b70,3,-34.3091032,-32.2264766\n500,b70,3,-32.1488968,-32.4241188\n503,b70,3,-32.0605512,-34.3629261\n501,b70,3,-31.9087559,-34.6507693\n506,b70,3,-31.2276603,-39.1426996\n502,b70,3,-31.2276603,-39.6111078\n507,b70,3,-31.0502030,-35.1883044\n504,b70,3,-31.5963997,-35.4547668\n509,b70,3,-32.4400903,-35.2901455\n505,b70,3,-30.1456209,-39.3690327\n508,b70,3,-33.2946533,-31.0453366\n530,b70,3,-33.7037251,-31.3999053\n533,b70,3,-5.4385481,-30.8837258\n531,b70,3,-30.0722390,-33.7263960\n536,b70,3,-8.2418504,-33.2797370\n532,b70,3,-8.7366377,-33.7359071\n537,b70,3,-4.2215507,-33.5960686\n534,b70,3,-4.4538913,-31.0778185\n539,b70,3,-4.1723124,-36.3934422\n535,b70,3,-2.1153207,-31.7805282\n538,b70,3,-2.2985374,-33.3326191\n510,b70,3,-2.2182500,-33.3462056\n513,b70,3,-7.0754499,-30.0072410\n511,b70,3,-4.2450256,-8.8860864\n516,b70,3,-4.7267706,-30.0603872\n512,b70,3,-7.1625203,-5.3424298\n517,b70,3,-7.6961438,-5.6324628\n514,b70,3,-7.0240523,-5.4149365\n519,b70,3,-7.7645709,-9.3120460\n515,b70,3,-7.2259427,-9.3283885\n518,b70,3,-4.2772423,-9.6317324\n560,b70,3,-4.2601890,-9.7366215\n563,b70,3,-4.8847477,-9.2463720\n561,b70,3,-9.3403722,-9.2650771\n566,b70,3,-9.0248002,-9.4465629\n562,b70,3,-9.0910451,-9.8322062\n567,b70,3,-4.8664293,-5.0010146\n564,b70,3,-5.1024040,-7.3861012\n569,b70,3,-9.5684948,-7.7084526\n565,b70,3,-5.7044378,-7.8429590\n568,b70,3,-9.5425229,-7.8321751\n520,b70,3,-9.6646145,-2.9928644\n523,b70,3,-4.2450256,-2.1814615\n521,b70,3,-7.6404994,-7.0063732\n526,b70,3,-7.2643506,-7.0233933\n522,b70,3,-9.4708106,-0.0052395\n527,b70,3,-9.4179761,-0.3166867\n524,b70,3,-9.3898079,1.3644275\n529,b70,3,-9.7415623,1.3928084\n525,b70,3,-6.5315944,-0.0052395\n528,b70,3,-3.2627299,-3.5083198\n570,b70,3,-3.2892441,-6.6585112\n573,b70,3,-0.5451957,-6.6143910\n571,b70,3,3.6780273,-6.4871355\n576,b70,3,-3.1661097,-2.3715872\n572,b70,3,-3.6242437,-2.7781718\n577,b70,3,-3.1567212,-2.4409452\n574,b70,3,-3.1661097,-2.4543217\n579,b70,3,-0.3943912,-2.5469047\n575,b70,3,0.0977019,-2.5580429\n578,b70,3,0.2809444,-2.0731679\n540,b70,3,0.2760376,-2.3192562\n543,b70,3,0.8269533,-6.8928915\n541,b70,3,3.0635492,-2.0175343\n546,b76,3,-6.0902670,-2.5730146\n542,b76,3,-3.2892441,-7.7084526\n547,b76,3,-3.8003247,-7.8145832\n544,b76,3,-1.2154465,-4.0952688\n549,b76,3,-6.0560381,-4.0376077\n545,b76,3,-6.2574858,-4.5296936\n548,b76,3,-6.0874019,-4.8856694\n590,b76,3,-1.2231250,-9.6595295\n593,b76,3,-1.6763435,-9.2463720\n591,b76,3,-1.0469672,-9.6694154\n596,b76,3,-3.5310406,-9.2650771\n592,b76,3,-3.8003247,-9.9368965\n597,b76,3,-3.6780273,-9.3120460\n594,b76,3,-0.5398264,-9.3439448\n599,b76,3,-0.1582142,-5.7322198\n595,b76,3,-0.7233037,-7.7577591\n598,b76,3,-0.6716225,-4.7799654\n550,b76,3,0.0706628,-9.3439448\n553,b76,3,3.3901583,-9.0162551\n551,b76,3,3.4675598,-4.2634882\n556,b76,3,3.9168923,-4.7799654\n552,b76,3,3.6849842,-7.2242372\n557,b76,3,1.0469672,-7.7294657\n554,b76,3,1.2837518,-7.0765260\n559,b76,3,1.7490577,-7.3861012\n555,b76,3,-1.4818160,-5.6713317\n558,b76,3,-1.4392102,-5.8550644\n580,b76,3,-1.7023442,-8.3413877\n583,b76,3,-6.0874019,-8.7088426\n581,b76,3,-6.0271498,-30.1377429\n586,b76,3,-1.5821414,-30.9274466\n582,b76,3,-1.8382606,-30.5639916\n587,b76,3,-1.5359788,-30.8395158\n584,b76,3,-1.7186621,-30.8077657\n589,b76,3,-1.2340501,-33.6119844\n585,b76,3,-1.3735134,-33.1540637\n588,b76,3,-3.0790673,-31.0637788\n800,b76,3,-3.5310406,-31.6298879\n803,b76,3,-0.8269533,-31.4018983\n801,b76,3,-3.1908758,-36.0708010\n806,b76,3,3.3388764,-36.3672258\n802,b76,3,3.6934154,-31.9845541\n807,b76,3,1.2154465,-31.9252684\n804,b76,3,3.2138421,-36.7791646\n809,b76,3,1.8828660,-37.6621824\n805,b76,3,7.7645709,-37.9293256\n808,b76,3,7.4595772,-34.1070653\n830,b76,3,2.3995079,-37.9676991\n833,b76,3,2.5613402,-37.1340094\n831,b76,3,2.5512876,-37.1340094\n836,b76,3,2.1475838,-32.9471063\n832,b76,3,2.9535177,-32.7544803\n837,b76,3,7.8991539,-32.0281971\n834,b76,3,7.7282626,-32.2095419\n839,b76,3,7.5141942,-32.2095419\n835,b76,3,4.3379015,-32.7708288\n838,b76,3,9.7694490,-31.8956518\n810,b76,3,4.6390260,-33.8515079\n813,b76,3,7.5944310,-31.2059725\n811,b76,3,7.6575272,-31.9121052\n816,b76,3,4.0476498,-36.3934422\n812,b32,3,38.2490419,7.9430765\n817,b32,3,38.1207772,7.9679517\n814,b32,3,38.2490419,7.4086818\n819,b32,3,38.7499663,7.4624971\n815,b32,3,9.7415623,-32.0089772\n818,b32,3,9.7972356,-32.0537850\n860,b32,3,1.8516255,-32.7563345\n863,b32,3,1.8489471,-32.4956442\n861,b32,3,1.8227892,-32.9178793\n866,b32,3,3.3799028,-4.9504413\n862,b32,3,3.0381565,-4.5352127\n867,b32,3,-1.4392102,-7.2771968\n864,b32,3,-1.7727036,-7.7633838\n869,b32,3,-0.3361720,-2.9660982\n865,b32,3,-0.3730076,-2.9933637\n868,b32,3,-0.0418352,-2.9842844\n820,b32,3,-3.3515919,-0.2366562\n823,b32,3,-3.0829547,-0.2366562\n821,b32,3,-35.9691076,2.2078376\n826,b32,3,-35.4921548,2.6212295\n822,b32,3,-38.7506349,-6.0502034\n827,b32,3,-37.8352272,-1.0961457\n824,b32,3,-33.2654185,-6.7007716\n829,b32,3,-34.8972988,-7.8541750\n825,b32,3,-34.0047634,-4.0888010\n828,b32,3,-37.1737042,-4.7067284\n870,b32,3,-31.0502030,-4.5743505\n873,b32,3,-33.5980405,-4.5459422\n871,b32,3,-31.5407866,-9.2139658\n876,b32,3,-30.6480333,-30.1335784\n872,b32,3,-30.2227363,-30.1647752\n877,b32,3,-30.6823951,-30.6916600\n874,b32,3,-36.4833131,-5.4899837\n879,b32,3,-36.4374357,-5.9294762\n875,b32,3,-36.4209546,-8.3059163\n878,b32,3,-35.4168736,-30.9721941\n840,b32,3,-39.6202058,-10.3989901\n843,b32,3,-39.1992807,-10.1126023\n841,b32,3,-7.6677307,-8.1873500\n846,b32,3,-7.6575272,-8.6225440\n3045,b28,3,-39.7068895,1.4870978\n3048,b28,3,-39.6371233,1.4516634\n3090,b28,3,-38.1805806,3.8530399\n3093,b28,3,-10.3247571,1.6176824\n3091,b28,3,-10.2969460,1.4487550\n3096,b28,3,-38.2023226,-7.7972498\n3092,b28,3,-38.6958947,-7.9038610\n3097,b28,3,-38.7396894,-7.9327928\n3094,b28,3,-38.2023226,-7.9999539\n3099,b28,3,-38.2023226,-7.8182395\n3095,b28,3,-12.4586386,-2.5377388\n3098,b28,3,-16.9106930,-2.8348743\n3050,b28,3,-12.4586386,-2.0983825\n3053,b28,3,-16.6601921,-6.9436784\n3051,b28,3,-16.2267151,-6.9549875\n3056,b28,3,-16.7380605,-6.5460827\n3052,b28,3,-16.7538286,-6.8686955\n3057,b28,3,-11.4653453,-6.1145403\n3054,b28,3,-11.9732113,-6.6723959\n3059,b28,3,-11.9583962,-6.2823588\n3055,b28,3,-11.9364905,-6.7384231\n3058,b28,3,-16.7380605,-1.5903862\n3080,b28,3,-16.4093390,-1.7990219\n3083,b28,3,-16.6863866,-6.3463599\n3081,b28,3,-16.4093390,-6.3702712\n3086,b28,3,-16.5664126,-6.3978160\n3082,b28,3,-16.9909078,-6.6232251\n3087,b28,3,-12.7705851,-6.4623748\n3084,b28,3,-12.2976877,-1.8894012\n3089,b28,3,-12.1169107,-1.5381138\n3085,b28,3,-13.8662995,-9.2809786\n3088,b28,3,-11.2282311,-5.2390740\n3300,b28,3,-11.6436176,-5.2838434\n3303,b28,3,-39.0175372,-8.3017020\n3301,b28,3,-34.8699181,-8.3993373\n3306,b28,3,-34.4163670,-8.8136654\n3302,b28,3,-34.2529320,-8.5624869\n3307,b28,3,-37.6322125,-8.8905155\n3304,b28,3,-32.0262440,-5.5154280\n3309,b28,3,-36.2710184,-33.2522234\n3305,b28,3,-30.9783096,-33.4631382\n3308,b28,3,-30.4275766,-33.4503055\n3330,b28,3,-34.8550423,-33.6410031\n3333,b28,3,-34.4962488,-33.2299136\n3331,b28,3,-34.2626983,-33.6289705\n3336,b28,3,-8.4683760,-33.4774447\n3332,b28,3,-8.2695367,-33.4774447\n3337,b28,3,-31.5301752,3.7853815\n3334,b28,3,-31.9894928,3.7293693\n3339,b28,3,-31.9629775,3.7626913\n3335,b28,3,-31.9113911,0.4761813\n3338,b28,3,-31.4522108,0.7582144\n3310,b28,3,-32.3046573,1.1304134\n3313,b28,3,-36.8070228,-3.7746890\n3311,b28,3,-36.9155917,-3.4931563\n3316,b28,3,-31.8965296,-6.3463599\n3312,b28,3,-32.8282847,-1.9600081\n3317,b28,3,-32.5432306,-1.9600081\n3314,b28,3,-33.5980405,-1.9027398\n3319,b28,3,-33.9808924,-1.9451225\n3315,b28,3,-36.8219841,-2.2856158\n3318,b28,3,-8.9428804,-1.4839937\n3360,b28,3,-8.9428804,-1.9508589\n3363,b28,3,-7.4971935,-1.7361873\n3361,b28,3,-7.6961438,-1.1272578\n3366,b28,3,-7.2259427,-1.1272578\n3362,b28,3,-7.6250823,-1.1569707\n3367,b28,3,-4.8568510,-7.8496319\n3364,b28,3,-4.8568510,-4.0456681\n3369,b28,3,-4.5095084,-4.0071019\n3365,b28,3,-7.2259427,-9.3421982\n3368,b28,3,-7.7282626,-9.1711198\n3320,b28,3,-2.9822083,-4.4964673\n3323,b28,3,-2.8094463,-4.9439955\n3321,b28,3,-2.8879286,-4.5313630\n3326,b28,3,-2.8563479,-9.4064732\n3322,b28,3,-2.5229220,-9.4765073\n3327,b28,3,-5.6509952,-9.6995022\n3324,b28,3,-5.2455424,-9.2809786\n3329,b28,3,-5.3721902,-9.7208231\n3325,b28,3,-5.0959457,-9.4064732\n3328,b28,3,-5.9663161,-4.4964673\n3370,b28,3,-5.5131082,-4.9283580\n3373,b28,3,-5.9279045,-4.9887220\n3371,b28,3,-8.6338940,-7.8023704\n3376,b28,3,-8.6338940,-4.0508428\n3372,b28,3,-8.7175889,-5.4723705\n3377,b28,3,-5.0764009,-8.4255434\n3374,b28,3,-5.0764009,-8.5624869\n3379,b28,3,-9.7170567,-8.4540272\n3375,b28,3,-9.1578838,-8.9406597\n3378,b28,3,-9.7550038,-8.8136654\n3340,b28,3,-9.6169266,-8.8752794\n3343,b28,3,-9.2122360,-30.0106016\n3341,b28,3,-4.8052986,-30.3454179\n3346,b28,3,-4.0476498,-30.8617972\n3342,b28,3,-4.0998737,-33.3767861\n3347,b28,3,-7.0842380,-33.1941176\n3344,b28,3,-7.0565677,-33.2911018\n3349,b28,3,-2.4605101,-31.8106628\n3345,b28,3,-2.6341149,-31.8505008\n3348,b28,3,-2.1830780,-36.3179589\n3390,b28,3,-2.6155306,-30.1350627\n3393,b28,3,-6.8580280,-8.7691793\n3391,b28,3,-6.8659323,-8.4852654\n3396,b28,3,-1.0946358,-36.6605920\n3392,b28,3,-1.3735134,-36.2972365\n3397,b28,3,-1.0657494,-36.2882579\n3394,b28,3,-7.0056615,-32.3292331\n3399,b28,3,-2.5613402,-32.1383400\n3395,b28,3,-6.4649021,0.2434800\n3398,b28,3,-6.4435936,0.6782847\n3350,b28,3,-6.4922777,0.1358946\n3353,b28,3,-3.3799028,0.9393746\n3351,b28,3,-3.6665996,0.9772961\n3356,b28,3,-3.6665996,0.4834307\n3352,b28,3,-3.1567212,0.7944766\n3357,b28,3,-3.1279833,0.7319573\n3354,b28,3,-0.8269533,-0.3421962\n3359,b28,3,-0.5076403,-0.6532248\n3355,b28,3,-0.5076403,-0.7138474\n3358,b28,3,-0.5774828,-0.7575640\n3380,b28,3,-0.9494059,-0.4971711\n3383,b28,3,-0.5505419,-0.4550172\n3381,b28,3,-1.0366885,-3.2159605\n3386,b28,3,-1.0657494,-3.7076616\n3382,b28,3,-1.0558017,-3.7746890\n3387,b28,3,-1.1712836,-3.7746890\n3384,b28,3,-3.5928959,-3.5334985\n3389,b28,3,-3.8695898,-3.5288442\n3385,b28,3,-3.8551619,-3.8681826\n3388,b28,3,-6.3053546,-3.7264632\n3100,b28,3,-6.3666723,-3.4520292\n3103,b28,3,-3.3273136,-1.7421864\n3101,b28,3,-3.3872741,-1.4150674\n3106,b28,3,-3.1050685,-1.9219725\n3102,b28,3,-3.3388764,-6.2740087\n3107,b28,3,-3.3617695,-6.7795345\n3104,b28,3,0.0699736,-6.2532415\n3109,b28,3,0.3559740,-6.2823588\n3105,b28,3,0.0550541,-6.5128291\n3410,b14,3,9.7701704,-32.6654610\n3413,b14,3,9.2335187,-32.6417082\n3411,b14,3,4.0476498,-32.2798471\n3416,b14,3,4.1158745,-31.6880677\n3412,b14,3,-36.7328259,-13.1450872\n3417,b14,3,-35.1780160,-38.1441911\n3414,b14,3,-35.1849926,-38.6742738\n3419,b14,3,-32.6099176,-37.8694141\n3415,b14,3,-32.6875337,-34.0449655\n3418,b14,3,-32.1090725,-37.8846641\n3460,b14,3,-36.2682243,-36.9888641\n3463,b14,3,-36.7328259,-36.5678622\n3461,b14,3,-36.6583331,-36.5788142\n3466,b14,3,-31.0771661,-32.2869654\n3462,b14,3,-31.0818524,-32.4129887\n3467,b14,3,-31.0818524,-32.4526347\n3464,b14,3,-33.9761166,-31.1584653\n3469,b14,3,-31.7846629,-33.0772097\n3465,b14,3,-32.3223642,-30.6952859\n3468,b14,3,-37.8536465,-8.3711259\n3420,b14,3,-34.0383371,-8.1322098\n3423,b14,3,-37.5504823,-8.1423359\n3421,b14,3,-31.8542605,-8.3685320\n3426,b14,3,-36.8219841,-9.5239933\n3422,b14,3,-2.6983271,-31.8744350\n3427,b14,3,-6.3053546,-8.9573403\n3424,b14,3,-7.7593574,-30.6022403\n3429,b14,3,-4.3762721,-8.4255434\n3425,b14,3,-2.8094463,-8.3685320\n3428,b14,3,-7.4595772,-9.7066074\n3470,b14,3,-7.9360163,-4.9439955\n3473,b14,3,-1.2154465,-9.1327688\n3471,b14,3,-9.8199463,-9.6471702\n3476,b14,3,-5.3445729,-4.9332377\n3472,b14,3,-32.3046573,-4.4964673\n3477,b14,3,-31.0495397,-4.4855160\n3474,b14,3,-31.5963997,-4.6666210\n3479,b14,3,-34.9886092,-2.1873960\n3475,b14,3,-37.5453085,-6.9254208\n3478,b14,3,-30.2638184,-1.5903862\n3440,b14,3,-30.6823951,-1.8913167\n3443,b14,3,-5.9562753,-2.2297733\n3441,b14,3,-8.3675064,-2.9320731\n3446,b14,3,0.3004485,-6.6816453\n3442,b14,3,0.9503816,-2.1358789\n3447,b14,3,0.9212234,-7.1526521\n3444,b14,3,-0.0550541,-2.8184615\n3449,b14,3,-3.8695898,-6.4059333\n3445,b14,3,-0.1368169,-0.4550172\n3448,b14,3,-3.2911883,-0.1376966\n3490,b14,3,-6.2407635,-0.8609053\n3493,b14,3,-6.7254350,0.1227141\n3491,b14,3,-5.1497122,-0.0925256\n3496,b14,3,-8.0088443,3.5443558\n3492,b14,3,-4.4221109,1.9666071\n3497,b14,3,-11.9732113,-9.6197561\n3494,b14,3,-11.5687056,-9.2372419\n3499,b14,3,-11.4466678,-9.2207470\n3495,b14,3,-11.9420074,-9.7375736\n3498,b14,3,-13.6210237,-2.5015699\n3450,b14,3,-13.3830645,-2.9682135\n3453,b14,3,-39.1038595,-3.4520292\n3451,b14,3,-39.1327932,-3.5419150\n3456,b14,3,-34.8550423,-3.5334985\n3452,b14,3,-35.6784819,-6.1716144\n3457,b14,3,-35.5551304,-1.5903862\n3454,b14,3,-10.3055668,-3.8369962\n3459,b14,3,-10.0666638,-1.0154361\n3455,b14,3,-10.4313520,-1.6579988\n3458,b14,3,-10.7337326,-1.2287204\n3480,b14,3,-12.0571882,-1.2599823\n3483,b14,3,-12.3578485,-1.7140228\n3481,b14,3,35.2300194,7.3111287\n3486,b14,3,35.2300194,7.0051763\n3482,b14,3,-31.8254987,-9.6370175\n3487,b14,3,-35.3050394,-38.6499345\n3522,b60,3,-4.9225807,2.9503613\n3527,b60,3,-4.5106863,2.4766144\n3524,b60,3,-9.0248002,2.7683788\n3529,b60,3,-9.3403722,2.2552041\n3525,b60,3,-4.4634647,2.5605201\n3528,b60,3,-4.4745026,2.9349677\n3570,b60,3,-4.8568510,2.0357524\n3573,b60,3,-7.5420195,2.3930190\n3571,b60,3,-7.4128648,6.8021312\n3576,b60,3,-4.9900756,6.0588503\n3572,b60,3,-9.7170567,6.3446997\n3577,b60,3,-9.7550038,6.2051105\n3574,b60,3,-9.0782529,1.3916783\n3579,b60,3,-4.4827774,1.3784027\n3575,b60,3,-4.6211305,3.7914470\n3578,b60,3,-2.5387948,9.0197493\n3540,b63,3,-7.6677307,6.5198272\n3543,b63,3,-4.7865578,1.2196857\n3541,b63,3,-4.7743627,1.6464253\n3546,b63,3,-4.2772423,1.2203294\n3542,b63,3,-2.4351649,-0.2905457\n3547,b63,3,-2.0145006,-0.4971711\n3544,b63,3,-6.7305449,-0.9146275\n3549,b63,3,-6.1783834,-0.5157189\n3545,b63,3,-6.3109907,-3.7483419\n3548,b63,3,-1.6372307,-0.9992653\n3590,b63,3,-1.0366885,-0.5157189\n3593,b63,3,-3.8551619,-0.6775848\n3591,b63,3,-1.9261798,-0.0410960\n3596,b63,3,-3.1567212,-3.0568421\n3592,b63,3,-3.6131869,-0.7083830\n3597,b63,3,-3.1661097,-0.1376966\n3594,b63,3,-0.3004485,-0.8262988\n3599,b63,3,-0.9024806,-3.6030705\n3595,b63,3,-6.0103003,-1.9027398\n3598,b63,3,-1.3587918,-1.8786562\n3550,b63,3,-0.2477855,-1.6297108\n3553,b63,3,0.1147096,-1.4209562\n3551,b63,3,0.6010088,-1.8133408\n3556,b63,3,0.3175697,-6.3311222\n3552,b63,3,0.0706628,-6.3978160\n3557,b63,3,-0.3559740,-6.6232251\n3554,b63,3,-0.1734973,-6.6984656\n3559,b63,3,0.3652133,-2.3219604\n3555,b63,3,-0.5398264,-2.7885412\n3558,b63,3,-3.2293636,-2.5834000\n3580,b63,3,-3.2789325,-2.2856158\n3583,b63,3,-3.4964654,-2.3505248\n3581,b63,3,-7.4703020,-6.1036811\n3586,b63,3,-4.7743627,-4.0867588\n3582,b63,3,-4.7079880,-4.0602758\n3587,b63,3,-4.1158745,-4.0071019\n3584,b63,3,-4.3954138,-4.0779364\n3589,b63,3,-7.5944310,-4.3827443\n3585,b63,3,-7.9557175,-4.6666210\n3588,b63,3,-7.9557175,-7.5837349\n3800,b63,3,-7.8148248,-7.9038610\n3803,b63,3,-7.0754499,-9.2809786\n3801,b63,3,-4.4634647,-9.8348090\n3806,b63,3,-4.7536034,-5.0727503\n3802,b63,3,-4.7079880,-5.1184790\n3807,b63,3,-7.7121447,-5.5808197\n3804,b63,3,-4.0201001,-8.3587248\n3809,b63,3,-7.8687602,-8.1681476\n3805,b63,3,-4.3831077,-8.6141675\n3808,b63,3,-4.3205904,-8.2698591\n3830,b63,3,-4.0370663,-8.2415301\n3833,b63,3,-7.5732221,-30.6232568\n3831,b63,3,-4.2772423,-30.9253123\n3836,b63,3,-4.6817279,-33.0811672\n3832,b63,3,-4.8936895,-30.7979705\n3837,b63,3,-4.8052986,-30.9167311\n3834,b63,3,-4.5106863,-30.8101546\n3839,b63,3,-9.3898079,-30.9675357\n3835,b63,3,-9.0626348,-30.5247152\n3838,b63,3,-4.8755321,-30.8482642\n3810,b63,3,-7.3938139,-33.4503055\n3813,b63,3,-7.0931738,-33.8892664\n3811,b63,3,-2.3995079,-31.7533224\n3816,b63,3,-2.2816883,-31.9016844\n3812,b63,3,-2.1475838,-32.3337398\n3817,b63,3,-2.6447434,-32.3292331\n3814,b63,3,-2.4351649,-32.3292331\n3819,b63,3,-2.5229220,-36.8775208\n3815,b63,3,-7.3080066,-36.9468174\n3818,b63,3,-7.8991539,-36.2371338\n3860,b63,3,-8.2706893,-31.7745984\n3863,b63,3,-5.5937226,-31.1155380\n3861,b63,3,-5.9279045,-31.2789483\n3866,b63,3,-5.5054178,-31.9016844\n3862,b63,3,-5.8896535,-31.5332343\n3867,b63,3,-8.6693263,-31.4953775\n3864,b63,3,-34.5122971,6.4288639\n3869,b63,3,-34.4256015,6.4691364\n3865,b63,3,-34.1566965,6.1864984\n3868,b63,3,-35.6627128,3.7914470\n3820,b63,3,-36.7802732,0.9530399\n3823,b63,3,-32.6615812,-0.6454911\n3821,b63,3,-36.3311452,-0.7138474\n3826,b63,3,-36.4151010,-3.7746890\n3822,b63,3,-32.1488968,-3.7605470\n3827,b63,3,-33.9015552,-3.7746890\n3824,b63,3,-33.4011359,-3.1691071\n3829,b63,3,-30.7518628,-3.0103083\n3825,b63,3,-33.0257669,-1.0236910\n3828,b63,3,-33.0433391,-6.0887099\n3870,b63,3,-36.5348759,-1.7659829\n3873,b63,3,-33.2654185,-7.2308954\n3871,b63,3,-33.1691584,-7.1526521\n3876,b63,3,-33.0678282,-7.3799671\n3872,b63,3,-33.6979309,-7.5374859\n3877,b63,3,-33.7681884,-4.0395633\n3874,b63,3,-33.2946533,-4.1612116\n3879,b63,3,-31.0214289,-4.3220567\n3875,b63,3,-31.6512330,-4.3827443\n3878,b63,3,-31.4890073,-7.8817918\n3840,b63,3,-33.2558429,-4.4855160\n3843,b63,3,-30.2825259,-4.9647857\n3841,b63,3,-30.6480333,-4.4304771\n3846,b63,3,-8.8958326,-9.6012499\n3842,b63,3,-30.0722390,-9.2809786\n3847,b63,3,-30.3494908,-9.1711198\n3844,b63,3,-33.0678282,-9.4159184\n3849,b63,3,-30.8402297,-9.2809786\n3845,b63,3,-33.3926931,-9.1996258\n3848,b63,3,-33.7681884,-5.4444107\n3890,b63,3,-33.4717767,-5.9020170\n3893,b63,3,-33.7149340,-5.9158790\n3891,b63,3,-33.4011359,-5.9765577\n3896,b63,3,-31.9788164,-5.7235532\n3892,b63,3,-31.8965296,-5.4444107\n3897,b63,3,-31.8308158,-5.2390740\n3894,b63,3,-36.3700389,-5.7348161\n3899,b63,3,-36.2993892,-5.3724265\n3895,b63,3,-37.5606757,-5.2982982\n3854,b29,3,37.5777146,1.9521962\n3859,b29,3,32.4116355,3.9736267\n3855,b29,3,34.8706315,1.1926542\n3858,b29,3,-7.6306215,6.9141661\n3880,b29,3,-0.6010088,-0.4550172\n3883,b29,3,0.3175697,-1.2331570\n3881,b29,3,-1.0657494,-3.6147594\n3886,b29,3,-1.4506655,-6.5694461\n3882,b29,3,-3.0381565,-2.6849473\n3887,b29,3,0.3361720,-2.6849473\n3884,b29,3,0.9185792,-2.7922513\n3889,b29,3,-4.7267706,-2.3600126\n3885,b29,3,-10.8686435,6.3983082\n3888,b29,3,-10.9556747,1.8550852\n1000,b29,3,-35.7430618,2.2460144\n1003,b29,3,-35.6892220,1.1304134\n1001,b29,3,-35.3843065,1.1304134\n1006,b29,3,-37.1658111,3.9360751\n1002,b29,3,-37.0703441,3.4929934\n1007,b29,3,-36.3599930,-0.2048843\n1004,b29,3,-36.0286288,-0.7138474\n1009,b29,3,-32.2936362,-0.8609053\n1005,b29,3,-30.2790896,-3.3966790\n1008,b29,3,-31.4522108,-6.0431877\n1030,b29,3,-33.0969005,-1.3262678\n1033,b29,3,-36.7328259,-7.0826802\n1031,b29,3,-36.4833131,-7.3902016\n1036,b29,3,-30.0722390,-9.3421982\n1032,b29,3,-4.6022787,-4.0602758\n1037,b29,3,-38.8795186,-0.9009886\n1034,b29,3,-35.7859521,-1.0154361\n1039,b29,3,-11.3292037,-7.9685786\n1035,b29,3,-13.9229135,-2.2297733\n1038,b29,3,-4.4634647,-5.1024740\n1010,b29,3,-37.1033937,-5.3024357\n1013,b29,3,-34.3389528,-5.4444107\n1011,b29,3,-13.3377621,-5.0390263\n1016,b29,3,-34.0047634,-30.5621635\n1012,b29,3,-37.4342625,-30.4855843\n1017,b29,3,-37.2017330,-30.9896628\n1014,b29,3,-4.6817279,-30.8793705\n1019,b29,3,-4.1981839,-30.8820028\n1015,b29,3,-33.8238988,-32.6329256\n1018,b29,3,-38.2349195,-5.0210458\n1060,b29,3,3.5310406,-31.8612608\n1063,b29,3,7.4595772,-32.1260470\n1061,b36,3,-38.1479117,7.4571669\n1066,b36,3,-38.6062968,7.2877830\n1062,b36,3,-38.1015023,7.1027715\n1067,b36,3,-38.2349195,7.1391318\n1064,b36,3,-38.6446860,2.5595990\n1069,b36,3,-37.2807891,2.0706255\n1065,b36,3,-37.2950369,6.5055975\n1068,b36,3,-8.6592950,4.5271421\n1020,b36,3,-8.6693263,4.5614577\n1023,b36,3,-8.1642966,2.8007701\n1021,b36,3,-8.1434202,2.5285765\n1026,b36,3,-8.1336074,2.5693995\n1022,b36,3,-9.4467027,2.1153941\n1027,b36,3,-9.4940553,2.3800991\n1024,b36,3,-4.0476498,6.1596370\n1029,b36,3,-6.8580280,1.3202911\n1025,b36,3,-2.9822083,3.4868374\n1028,b36,3,-7.8585476,3.9228463\n1070,b36,3,-6.3053546,3.6169679\n1073,b36,3,-1.8489471,3.6410645\n1071,b36,3,-1.8382606,3.6308459\n1076,b36,3,-3.2525514,1.0468656\n1072,b36,3,-5.5669860,3.9561248\n1077,b36,3,-7.8424851,-0.0820308\n1074,b36,3,-0.4183599,-0.3795543\n1079,b36,3,-0.7157391,-0.3795543\n1075,b36,3,-1.6198820,-6.3075979\n1078,b36,3,-3.7918455,-7.6720356\n1040,b36,3,3.3515919,-7.5917427\n1043,b36,3,-6.6912274,-7.8855595\n1041,b36,3,0.1368169,-4.4187708\n1046,b36,3,-1.0469672,-4.8221719\n1042,b36,3,-2.8879286,-2.5917537\n1047,b36,3,-9.8804534,-6.7584142\n1044,b36,3,-8.5474430,-2.1943109\n1049,b36,3,-8.9712090,-2.1462381\n1045,b36,3,-4.9871172,-2.8544927\n1048,b36,3,-2.9744795,-4.1005943\n1090,b36,3,-2.9535177,-4.1583870\n1093,b36,3,-8.6925822,-4.9772568\n1091,b36,3,-8.4032039,-8.0247127\n1096,b36,3,-5.1503050,-8.6489067\n1092,b36,3,3.0222734,-31.9225028\n1097,b36,3,2.2491632,-32.2200922\n1094,b36,3,6.2303841,-37.6358176\n1099,b36,3,6.2303841,-37.6585658\n1095,b36,3,-1.4773939,-31.0067157\n1098,b36,3,-1.4818160,-31.3030039\n1050,b36,3,-1.4025641,-31.3435564\n1053,b36,3,-1.2837518,-31.3289089\n1051,b36,3,-7.2547371,-32.0669050\n1056,b36,3,-30.2511422,-35.6188265\n1052,b36,3,-30.6480333,-35.6357169\n1057,b36,3,-30.1779793,-35.1874987\n1054,b36,3,-35.4336495,-10.4983681\n1059,b36,3,-35.4921541,-10.9742861\n1055,b36,3,-35.7161534,-10.9272299\n1058,b36,3,-35.7541000,-10.9497649\n1080,b36,3,-35.7964342,-10.5669758\n1083,b36,3,-36.2424368,-38.1149523\n1081,b36,3,-36.7719003,-38.1286733\n1086,b36,3,-36.2710184,-38.1822473\n1082,b36,3,-37.2715244,-39.4766449\n1087,b36,3,-37.6588197,-39.4882378\n1084,b36,3,-37.7063537,-39.4598041\n1089,b36,3,-35.0872623,-34.9573881\n1085,b36,3,-35.3663572,-34.5266723\n1088,b36,3,-35.3843065,-34.5444027\n1300,b36,3,-39.0175372,-37.9264393\n1303,b36,3,-34.8699181,-37.9493727\n1301,b36,3,-35.5974142,-5.9673583\n1306,b36,3,-35.5974142,-5.5296670\n1302,b36,3,-33.0433391,-8.9723866\n1307,b36,3,-33.5067751,-8.1519742\n1304,b36,3,-33.7149340,-5.7253102\n1309,b36,3,-33.9808924,-5.1856835\n1305,b36,3,-33.5765869,-7.5110399\n1308,b36,3,-30.8671989,-7.7633838\n1330,b36,3,-33.2362410,-7.7633838\n1333,b36,3,-33.8238988,-9.3907466\n1331,b36,3,-31.6791261,-4.5868603\n1336,b36,3,-32.2243246,-4.9215823\n1332,b36,3,-36.7016471,-7.5788157\n1337,b36,3,-37.1420800,-4.6711785\n1334,b36,3,-34.3389528,-2.6037160\n1339,b36,3,-13.5276834,-5.2961656\n1335,b36,3,-11.3917486,-5.1962007\n1338,b36,3,-11.3899693,-7.2214354\n1310,b36,3,-11.3292037,-7.7075551\n1313,b36,3,-38.8902315,-1.2394436\n1311,b36,3,-38.8614437,-1.2778341\n1316,b36,3,-35.5695973,-1.7798359\n1312,b36,3,-39.4497544,-1.2454496\n1317,b36,3,-39.7183428,-1.2778341\n1314,b36,3,-35.9310697,0.0894376\n1319,b36,3,-39.6195172,-0.1058540\n1315,b36,3,-31.5856224,0.1581692\n1318,b36,3,-36.5491864,1.6227136\n1360,b36,3,-36.5491864,1.1217073\n1373,b13,3,-7.3249768,6.6464509\n1371,b13,3,-9.0248002,6.0614922\n1376,b13,3,-7.2167849,1.4699144\n1372,b13,3,-7.1292126,1.1771794\n1377,b13,3,-7.1917832,1.3011046\n1374,b13,3,-5.7513398,3.7198806\n1379,b13,3,-5.0836710,3.2654667\n1375,b13,3,-7.0931738,-0.4607222\n1378,b13,3,-7.2167849,-3.3448939\n1340,b13,3,-2.1952972,3.0027374\n1343,b13,3,-0.5774828,6.8545399\n1341,b13,3,-0.7233037,6.9750105\n1346,b13,3,-0.6689436,6.8545399\n1342,b13,3,-6.9696968,9.2253712\n1347,b13,3,-33.7735563,6.7727678\n1344,b13,3,-33.7037251,6.7235370\n1349,b13,3,-33.2654185,6.7180867\n1345,b13,3,-30.8671989,6.2035756\n1348,b13,3,-30.5293867,6.6583619\n1390,b13,3,-30.9668687,6.6708769\n1393,b13,3,-8.7652566,6.3919267\n1391,b13,3,-8.2977428,6.3135368\n1396,b13,3,-8.7175889,6.3080509\n1392,b13,3,-8.6289196,4.5614577\n1397,b13,3,-8.6925822,4.5877484\n1394,b13,3,-7.2880882,-4.6322115\n1399,b13,3,-8.9324779,-2.8254295\n1395,b13,3,-8.1280748,-8.0932045\n1398,b13,3,-8.3859110,-8.6489067\n1350,b13,3,-34.1751049,-2.3439583\n1353,b13,3,-34.0824395,-2.3888020\n1351,b13,3,-34.5925303,-2.9842844\n1356,b13,3,-34.5284216,-2.8436165\n1352,b13,3,-39.5820868,-6.0728145\n1357,b13,3,-35.1934047,-6.3354312\n1354,b13,3,-35.3843065,-6.3870128\n1359,b13,3,-35.3756717,-1.7273484\n1355,b13,3,-35.6293081,-1.4293748\n1358,b13,3,-35.2853365,-0.4607222\n1380,b13,3,-35.4439014,-0.6649670\n1383,b13,3,-38.3685570,-0.6649670\n1381,b13,3,-38.4261673,0.0910472\n1386,b13,3,-30.2484508,-0.7768005\n1382,b13,3,-30.2484508,-0.4740834\n1387,b13,3,-37.7440888,4.6445000\n1384,b13,3,-37.5777146,4.1015803\n1389,b13,3,-37.2201412,4.1478271\n1385,b13,3,-32.9578094,4.4636698\n1388,b13,3,-36.5348759,2.3147930\n1100,b13,3,-36.5187211,6.5290367\n1103,b13,3,-36.9981092,6.4822218\n1101,b13,3,-32.0262440,6.9750105\n1106,b13,3,-36.8863633,6.9276041\n1102,b13,3,-36.9341558,6.6583619\n1107,b13,3,-36.8498466,6.6708769\n1104,b13,3,-36.5213147,6.3851047\n1109,b13,3,-36.9341558,1.8539189\n1105,b13,3,-32.2667413,6.2200614\n1108,b13,3,-32.9253746,6.6583619\n1130,b13,3,-32.9409685,6.1308690\n1133,b13,3,-32.7893730,6.0846245\n1131,b13,3,-32.6904269,6.0846245\n1136,b13,3,-32.2667413,1.8458860\n1132,b13,3,-32.6272978,1.9804223\n1612,b24,3,35.9416963,7.7755388\n1617,b24,3,35.5003169,7.2901828\n1614,b24,3,35.8941845,7.7755388\n1619,b24,3,34.9258914,3.5059454\n1615,b24,3,34.5284216,3.4215429\n1618,b24,3,34.5411144,3.7371172\n1660,b24,3,32.9578094,3.4868374\n1663,b24,3,32.8410500,3.4774194\n1661,b24,3,-0.6193999,-0.8337284\n1666,b24,3,0.0550541,-3.5483083\n1662,b24,3,-33.4806028,-1.7562348\n1667,b24,3,-33.4473693,-1.4788024\n1664,b24,3,-33.7422496,-1.9596438\n1669,b24,3,-31.9629775,-6.0182700\n1665,b24,3,-31.4058351,-6.0068917\n1668,b24,3,-30.8303338,-6.3220522\n1620,b24,3,-30.5789990,-1.3550526\n1623,b24,3,-36.3692641,-7.8964156\n1621,b24,3,-36.8070228,-7.0124841\n1626,b24,3,-34.0745447,-8.4985283\n1622,b24,3,-37.0312328,-5.5529008\n1627,b24,3,-39.4770012,-30.8730094\n1624,b24,3,-36.3599930,-8.5806882\n1629,b24,3,-5.6260193,-30.8730094\n1625,b24,3,-4.9871172,-8.9182375\n1628,b24,3,-5.7383887,-5.6405747\n1670,b24,3,-5.0959457,-4.5075697\n1673,b24,3,-31.0025852,8.2386318\n1671,b24,3,-31.3353716,8.6791981\n1676,b24,3,-31.3452591,8.6612780\n1672,b24,3,-31.1355113,8.6094624\n1677,b24,3,-31.1539231,8.1906837\n1674,b24,3,-31.6224784,8.1051888\n1679,b24,3,-31.2874428,8.0626384\n1675,b24,3,-31.2560509,5.8291405\n1678,b24,3,-31.2560509,5.5914018\n1901,o4,7,-5.5768109,-4.3497662\n1978,o4,7,-11.9606756,-0.4498154\n1940,o4,7,-13.4592186,-0.5123675\n1472,o4,7,-30.2380985,8.8569790\n1529,o61,0,-5.9113964,4.5052860\n1525,o61,0,-8.3999855,4.8257942\n1528,o39,6,-4.5436938,7.8792327\n1570,o38,0,-30.3615977,4.0040686\n1573,o61,0,-30.1253253,4.0615788\n1571,o61,0,-8.8685758,2.6026823\n1576,o61,0,-33.3299311,7.3669000\n1572,o34,0,-33.2862086,7.4826995\n1577,o62,0,-9.9704782,7.2742875\n1574,o61,0,-9.8795838,4.0223780\n1579,o61,0,-9.0107775,4.3413196\n1575,o39,6,-5.9001355,4.0078606\n1578,o14,0,-5.4829170,7.5819213\n1540,o61,0,-30.4148077,7.4447795\n1543,o61,0,-5.9349315,4.4876573\n1541,o20,0,-4.7720984,4.2804142\n1546,o20,0,-31.3674385,5.3128333\n1542,o65,0,-33.4178348,5.7218692\n1547,o35,6,3.1588657,39.4483959\n1544,o39,6,-30.4891963,6.7598650\n1549,o39,6,-30.6734578,6.9405453\n1545,o26,0,31.1983349,5.1797027\n1548,o20,0,-4.7641194,4.7775025\n1590,o21,0,-4.4959178,4.2853744\n1593,o62,0,-8.4666421,4.0536715\n1591,o61,0,-30.6985920,4.3885090\n1596,o39,6,-7.1420248,7.6074512\n1592,o14,0,-4.5436311,4.1971047\n1597,o38,0,-30.7334631,6.9975846\n1594,o65,0,-8.5575972,8.2577546\n1599,o60,0,-6.3881104,7.8921286\n1595,o35,6,-33.5046395,6.8547867\n1598,o62,0,-9.5618148,7.2887225\n1550,o20,0,-8.6367279,5.4389242\n1553,o60,0,-6.7585796,4.8616984\n1551,o61,0,-8.3449890,4.8305987\n1556,o65,0,-30.6576955,8.7154523\n1552,o60,0,-6.2796668,7.4827221\n1557,o62,0,-30.3135582,2.1771339\n1554,o39,6,-33.5742659,2.0180862\n1559,o39,6,-5.5235429,2.1626005\n1555,o20,0,-5.1818763,9.5902613\n1558,o39,6,-7.8913046,4.0264603\n1580,o39,6,-30.1322666,2.7984428\n1583,o61,0,-5.5925488,2.3903658\n1581,o34,0,3.5078368,39.9225845\n1586,o39,6,-6.9400155,7.4855472\n1582,o34,0,-33.7635212,7.9546957\n1587,o39,6,-30.6874336,2.9103974\n1584,o35,6,-5.8291735,2.1045808\n1589,o61,0,-5.5638438,9.1395490\n1585,o61,0,-33.3639535,7.0465092\n1588,o38,0,3.1240179,39.4773347\n1800,o39,6,-33.7073230,2.1932403\n1803,o34,0,-9.7752809,34.9139619\n1801,o20,0,-2.1294490,4.5233835\n1806,o38,0,-4.5723574,7.8371093\n1802,o34,0,-9.2593612,34.4088172\n1807,o39,6,-7.8820891,39.0624214\n1804,o62,0,-9.9623468,7.2014271\n1809,o22,6,-7.1487640,39.7368452\n1805,o26,0,-4.9673179,37.9291027\n1808,o39,6,-7.2953746,7.5814883\n1830,o26,0,-4.2284817,34.1958425\n1833,o21,0,-5.7230647,2.9705437\n1831,o39,6,-8.2413753,5.1487569\n1836,o60,0,-6.7412410,4.5499940\n1832,o26,0,-9.1203118,34.1895639\n1837,o39,6,-9.1865827,7.9072898\n1834,o34,0,-9.2149716,34.0109335\n1839,o27,6,-9.7100490,37.6399048\n1835,o22,6,-9.4355905,37.6103264\n1838,o63,0,-0.9792587,7.8792929\n1810,o35,6,-9.4185280,34.6909696\n1813,o39,6,-9.9704081,37.6842677\n1811,o39,6,-9.8639287,32.8686448\n1816,o39,6,-9.5475506,32.5463910\n1812,o38,0,-9.5268168,32.5481363\n1817,o21,0,-5.4166943,2.9868986\n1814,o39,6,-5.9331039,37.2791249\n1819,o34,0,-5.1683683,34.6017989\n1815,o34,0,-9.9623238,39.3828021\n1818,o39,6,-3.7976783,4.0344924\n1860,o26,0,-6.3159590,34.1664110\n1863,o62,0,-30.3268870,2.3480607\n1861,o38,0,-33.9463754,6.8422420\n1866,o22,6,0.8654643,39.9445730\n1862,o38,0,-8.3999433,6.2984758\n1867,o63,0,1.7320095,39.9514872\n1864,o62,0,-30.0567062,2.3483572\n1869,o38,0,-4.9967282,10.4188737\n1865,o24,6,-2.8523015,39.7313210\n1868,o19,0,-7.7268830,39.5823936\n1820,o35,6,-9.5866121,2.3840404\n1823,o62,0,-30.6805510,7.4855451\n1821,o20,0,-2.1329961,4.9550814\n1826,o22,6,0.8079037,35.0804630\n1822,o19,0,-0.1387420,39.8757958\n1827,o39,6,-8.2521963,2.8555316\n1824,o35,6,-1.5266765,39.1333714\n1829,o34,0,-31.3062984,7.2187441\n1825,o60,0,-6.2205438,7.7897674\n1828,o34,0,-9.8141402,39.8909650\n1870,o63,0,-30.2584903,35.7976835\n1873,o39,6,-8.8825047,2.1277123\n1871,o22,6,-9.6935436,37.1189314\n1876,o39,6,-4.0538389,1.8129813\n1872,o61,0,-30.0399682,7.8873203\n1877,o68,0,4.5555107,8.9659810\n1874,o34,0,-2.4346663,34.2610803\n1879,o39,6,-5.6106985,6.9224072\n1875,o34,0,-33.2229581,7.9467505\n1878,o38,0,-30.1021648,7.8980164\n1840,o68,0,4.5555107,30.3070920\n1843,o26,0,33.1714770,8.5791870\n1841,o14,0,0.8113455,39.4665360\n1846,o12,0,-2.1147840,2.6876187\n1842,o35,6,-31.6778737,2.5808094\n1847,o26,0,30.7114029,8.3205807\n1844,o26,0,33.1059211,8.5450450\n1849,o39,6,-6.9818453,34.4958295\n1845,o62,0,-5.7968958,2.9099750\n1848,o61,0,-30.7393320,7.4350511\n1890,o39,6,36.0193237,5.2001740\n1893,o19,0,-6.7748645,34.3040776\n1891,o39,6,-4.4807176,6.2027980\n1896,o39,6,-33.8771432,2.4424997\n1892,o26,0,31.6228578,5.1713350\n1897,o26,0,30.2096664,8.3603397\n1894,o26,0,31.0260572,8.6917300\n1899,o39,6,-2.0918311,32.8224742\n1895,o62,0,-5.2761320,2.9434201\n1898,o34,0,-33.2911148,7.4431075\n1850,o39,6,-2.1260926,32.9598728\n1853,o39,6,-5.1698914,6.9937587\n1851,o20,0,-31.9413411,4.0007776\n1856,o68,0,7.8887546,8.5387587\n1852,o26,0,1.4499014,5.8463640\n1857,o39,6,-7.3909611,37.1580645\n1854,o39,6,-9.0972658,2.2548159\n1859,o61,0,-33.2657807,4.6854123\n1855,o39,6,-6.5541515,32.8946024\n1858,o37,0,-4.2223820,4.2840222\n1880,o39,6,-7.8009574,1.8320228\n1883,o62,0,-30.2731266,4.0549367\n1881,o38,0,-1.2764132,7.0293306\n1886,o39,6,-7.0150359,7.2355035\n1882,o65,0,-33.6732717,4.5748822\n1887,o20,0,-31.5031426,4.0776908\n1884,o38,0,-9.8903961,32.5895831\n1889,o65,0,-33.6498302,9.0099599\n1885,o39,6,-5.3554069,4.2772797\n1888,o39,6,-4.7326514,4.7411087\n6000,o62,0,-5.4664410,2.9829204\n6003,o20,0,-31.3486104,5.0926542\n6001,o39,6,-2.7030648,9.0994054\n6006,o39,6,-7.5966690,4.7683367\n6002,o35,6,-8.8121815,6.2296390\n6007,o34,0,8.9907850,4.5124877\n6004,o60,0,-33.9734804,4.4087164\n6009,o62,0,-8.1974284,7.8763213\n6005,o39,6,-7.0518006,4.7511732\n6008,o39,6,-9.5768218,7.6392462\n6030,o39,6,-7.8403532,6.0770234\n6033,o38,0,-9.2782816,1.0146995\n6031,o39,6,-4.3841738,3.3755603\n6036,o62,0,-30.1021005,2.1313990\n6032,o62,0,-31.7752043,4.6358170\n6037,o38,0,-7.5168155,0.6163285\n6034,o39,6,-9.8458948,6.7778997\n6039,o64,0,-9.2534266,-0.0900127\n6035,o39,6,-5.0124273,0.0077072\n6038,o39,6,-31.8897743,4.9227883\n6010,o39,6,-4.5221420,2.1432557\n6013,o39,6,-2.7310247,4.8148592\n6011,o39,6,-9.3989647,0.0694920\n6016,o39,6,-9.0690124,9.1939728\n6012,o39,6,-4.8944243,-0.9530720\n6017,o62,0,-31.7693309,4.8834117\n6014,o39,6,-4.2261547,-0.8984595\n6019,o39,6,-4.4326477,2.5503639\n6015,o20,0,-2.5090530,5.3672258\n6018,o20,0,-5.3871614,9.5421979\n6060,o35,6,-31.7892951,9.2401386\n6063,o39,6,-7.6456649,9.9123267\n6061,o64,0,-4.5566632,-3.3179957\n6066,o39,6,-7.2953312,4.5737762\n6062,o39,6,-7.2741290,4.0138816\n6067,o21,0,-1.0845641,-3.7422388\n6064,o39,6,-31.8853555,9.7128394\n6069,o20,0,-1.3524435,-3.9253811\n6065,o39,6,-4.7296814,9.1320138\n6068,o20,0,0.3639652,-3.5304109\n6020,o37,0,-6.9190858,4.9537810\n6023,o39,6,-7.0518067,4.1697656\n6021,o38,0,-30.1900351,4.0336156\n6026,o39,6,-8.2499013,7.0834725\n6022,o39,6,-6.9477065,9.9555192\n6027,o39,6,-2.3864977,9.2898573\n6024,o61,0,0.2560205,-6.7316946\n6029,o60,0,-30.9213474,9.3420113\n6025,o62,0,-0.7535224,-2.2664857\n6028,o39,6,-9.0542162,9.6466345\n6070,o39,6,-6.1770682,1.1824161\n6073,o65,0,-33.4641890,5.1465091\n6071,o60,0,-6.3741781,7.8326689\n6076,o39,6,-33.3641025,9.7423315\n6072,o37,0,-1.3419072,-3.5006489\n6077,o39,6,-6.8794687,7.7691807\n6074,o20,0,-1.0925985,-3.4821447\n6079,o21,0,-0.5951740,-2.4060575\n6075,o63,0,-0.2777811,4.0536020\n6078,o39,6,-30.1089140,9.3212958\n6040,o39,6,-6.3824207,9.5133242\n6043,o65,0,-33.1464646,5.0989679\n6041,o25,0,-0.6096584,-2.7077135\n6046,o37,0,-0.5741884,-0.4344655\n6042,o63,0,0.5032054,4.2465000\n6047,o62,0,-0.6038007,-2.4907249\n6044,o17,0,-0.5581621,-0.4549505\n6049,o60,0,-33.2945516,8.3301194\n6045,o62,0,-0.4211129,-2.4164343\n6048,o65,0,-33.1643586,8.2108921\n6090,o62,0,-1.6511482,-1.6701906\n6093,o68,0,3.8784059,9.2659747\n6091,o60,0,-30.7447397,9.3846165\n6096,o68,0,0.9367560,9.1039707\n6092,o62,0,0.4299365,-6.3786827\n6097,o62,0,0.7946777,-6.2464129\n6094,o65,0,-33.5492187,8.2574009\n6099,o39,6,-4.0722979,-0.5823525\n6095,o21,0,0.4504252,-6.9573325\n6098,o62,0,0.7378972,-6.8445662\n6050,o38,0,2.4863507,9.1161847\n6053,o20,0,0.8001312,-6.5022462\n6051,o21,0,-3.6706354,-1.6682861\n6056,o62,0,-1.5909886,-6.1740824\n6052,o61,0,-1.2143511,-6.2373809\n6057,o60,0,-8.4991826,9.9098917\n6054,o35,6,-3.5441820,-6.3154801\n6059,o39,6,-9.6935436,-3.9180871\n6055,o62,0,-3.0027076,-2.4446542\n6058,o35,6,-9.6347181,0.9262806\n6080,o35,6,-1.4499014,-3.8425399\n6083,o65,0,-30.4298888,9.9828587\n6081,o35,6,-0.9878387,-6.2079972\n6086,o39,6,-9.9490947,-3.9318232\n6082,o37,0,-1.8213794,-3.6933575\n6087,o61,0,-0.8333804,-2.9600763\n6084,o64,0,-4.4849010,-3.9271140\n6089,o39,6,0.3089510,-2.6894829\n6085,o39,6,-0.8223171,-6.9524474\n6088,o63,0,0.1607211,4.9657337\n6300,o60,0,-30.8395674,9.8867634\n6303,o35,6,-2.6465618,2.4848904\n6301,o65,0,-30.0998816,8.2574611\n6306,o21,0,-0.5581621,-6.4209387\n6302,o62,0,0.0268315,-2.9298983\n6307,o68,0,3.7087017,9.1039707\n6304,o35,6,-30.1810944,9.8096643\n6309,o62,0,-1.5028603,-1.7154268\n6305,o39,6,-9.0140242,-3.5840453\n6308,o63,0,4.7300914,9.5696797\n6330,o21,0,0.5951740,-6.5285032\n6333,o35,6,0.1057575,-6.7143411\n6331,o65,0,-8.4881662,9.5833908\n6336,o39,6,-4.0505006,-0.2955282\n6332,o39,6,-0.5951740,-2.1798315\n6337,o39,6,-3.6706354,-6.4336142\n6334,o35,6,-3.8940940,-2.4440404\n6339,o34,0,-35.9036469,6.7853510\n6335,o62,0,-39.9355325,1.0588410\n6338,o39,6,-33.2518155,31.0577255\n6310,o60,0,-35.7973322,1.0245900\n6313,o61,0,-35.5440649,6.3742580\n6311,o34,0,-8.2056392,38.6654241\n6316,o65,0,-30.7882771,5.5224318\n6312,o39,6,-9.4707350,2.0959241\n6317,o60,0,-31.4716912,9.8858316\n6314,o62,0,-35.4875924,6.7226390\n6319,o39,6,-5.2211675,39.2659888\n6315,o61,0,-35.9583586,6.1250787\n6318,o60,0,-8.7828245,5.3944284\n6360,o34,0,-10.4040532,6.6996677\n6363,o62,0,-38.6073429,2.7365590\n6361,o61,0,-38.1449230,2.3645610\n6366,o60,0,-39.8945017,3.6453930\n6362,o20,0,-35.1096229,3.6058387\n6367,o35,6,-9.9163792,9.3808178\n6364,o35,6,-30.5968020,5.3851315\n6369,o34,0,-36.2085936,3.0433207\n6365,o39,6,-1.6725177,7.1323083\n6368,o20,0,-10.7584323,6.6155790\n6320,o60,0,-6.3036688,2.8512530\n6323,o39,6,-31.4716905,9.6646526\n6321,o20,0,-37.1814614,1.9646210\n6326,o60,0,-33.3256287,5.1526820\n6322,o62,0,-32.5758869,1.6768007\n6327,o62,0,-37.9813209,3.8227147\n6324,o65,0,-33.7930197,5.2732021\n6329,o39,6,-30.0550495,9.1912424\n6325,o62,0,-37.4077336,1.0460187\n6328,o21,0,-0.5491995,-0.4839110\n6370,o65,0,-30.6748157,8.1819329\n6373,o37,0,-36.8839378,1.3476960\n6371,o35,6,-9.6865399,39.1934749\n6376,o35,6,-8.1283667,5.6907405\n6372,o37,0,-36.2215078,0.8691730\n6377,o39,6,-9.0370485,-1.5589184\n6374,o62,0,-3.4129964,0.7486907\n6379,o65,0,-30.8166080,8.7620867\n6375,o34,0,-33.3899420,-0.2803937\n6378,o62,0,-33.4541868,-0.7046630\n6340,o19,0,-32.0570604,-1.4686570\n6343,o22,6,-9.8691654,39.3140777\n6341,o62,0,-36.3525351,-1.0176120\n6346,o61,0,-31.4236896,-6.6162907\n6342,o20,0,-36.2146654,-1.7212150\n6347,o61,0,-33.4839560,-6.6314897\n6344,o61,0,-36.5307974,-1.3476960\n6349,o14,0,-1.4954505,0.7658578\n6345,o65,0,-33.9671354,5.7398110\n6348,o26,0,-5.3206676,39.3339886\n6390,o21,0,-38.2426254,1.0711747\n6393,o20,0,-38.2426254,1.0640890\n6391,o62,0,-33.7617883,-0.7477517\n6396,o21,0,-33.1061763,-0.7112807\n6392,o62,0,-36.8761811,-1.0876257\n6397,o20,0,-36.3098905,-1.7295327\n6394,o61,0,-10.9539614,0.1300967\n6399,o60,0,-35.4968351,-0.2795717\n6395,o21,0,-3.1207644,0.9737611\n6398,o61,0,-36.9151683,-0.3200280\n6350,o61,0,-33.4541868,-0.9330350\n6353,o65,0,-30.3376680,5.5448724\n6351,o21,0,-31.4809881,-6.3050307\n6356,o37,0,-13.6500227,0.2920310\n6352,o20,0,-36.5788997,3.5985557\n6357,o20,0,-31.6682845,-1.7486407\n6354,o35,6,30.5357169,8.3713972\n6359,o20,0,-36.0633162,-1.3724000\n6355,o34,0,-38.1335700,-0.2877750\n6358,o61,0,-32.6257092,-6.1133190\n6380,o37,0,-13.4592623,0.5491147\n6383,o26,0,30.1109021,8.8619040\n6381,o37,0,-13.0914728,0.9342027\n6386,o37,0,-31.8136232,-6.9651630\n6382,o60,0,-39.8861485,-0.7282160\n6387,o20,0,-32.9619222,3.7673717\n6384,o39,6,-7.2621080,7.3474307\n6389,o37,0,-10.3912217,0.2290987\n6385,o62,0,-33.5167132,-6.6862870\n6388,o62,0,-36.7927226,-0.3624417\n6100,o61,0,-13.5233158,-3.4073990\n6103,o19,0,-32.1349480,-1.8320847\n6101,o60,0,-38.8172660,0.1634387\n6106,o37,0,-13.6643639,-0.0148617\n6102,o38,0,-31.2135666,-6.9331857\n6107,o62,0,-10.5644164,-0.5628097\n6104,o34,0,-37.0274163,3.8156490\n6109,o34,0,0.0516647,32.4637525\n6105,o22,6,-9.7468985,37.5518179\n6108,o37,0,-13.2278369,0.6854030\n6130,o20,0,-10.3885550,-0.6395067\n6133,o62,0,-10.1265005,-3.3084380\n6131,o35,6,36.7973255,30.3849811\n6136,o39,6,-4.0650300,-6.1954140\n6132,o61,0,-32.8841131,-6.1579470\n6137,o61,0,-31.9274801,-6.8540300\n6134,o35,6,-7.8072506,1.6769030\n6139,o20,0,-36.0760985,-2.0183010\n6135,o37,0,-10.2052965,0.7046630\n6138,o37,0,-13.6293088,-0.1841797\n6110,o39,6,-7.5092495,-2.3055145\n6113,o20,0,-33.0003742,-1.7503667\n6111,o39,6,-4.7130705,34.0441642\n6116,o39,6,36.5038225,30.3552776\n6112,o39,6,-4.4247373,6.1615809\n6117,o39,6,-9.7832176,34.4385397\n6114,o61,0,-10.5633627,-0.8759890\n6119,o26,0,30.2165008,8.0812310\n6115,o62,0,-33.1234945,-1.1416600\n6118,o39,6,-2.4729745,-6.8754256\n6160,o19,0,-37.9219655,-0.0699077\n6163,o34,0,-8.4348061,35.7237579\n6161,o37,0,-10.4442437,0.6229640\n6166,o39,6,31.5584143,30.0845468\n6162,o37,0,-13.3657123,-0.6312390\n6167,o37,0,-13.5603709,3.3647737\n6164,o34,0,-32.8675233,-0.3868320\n6169,o60,0,-34.7194503,-1.5898690\n6165,o62,0,-10.4518155,-0.8762307\n6168,o34,0,-10.0671370,-0.2986857\n6120,o60,0,-13.9509255,0.7112807\n6123,o34,0,-32.7450932,-0.4825757\n6121,o34,0,-34.7663481,-0.3916450\n6126,o37,0,-10.9136717,1.0327730\n6122,o61,0,-35.7423641,-6.2984980\n6127,o61,0,-10.0359299,3.1944007\n6124,o39,6,-5.4155471,39.1659372\n6129,o60,0,-37.9639404,-1.9525107\n6125,o35,6,-4.1124646,0.5493895\n6128,o39,6,-36.1163940,9.4904431\n6170,o37,0,-13.7339518,0.8142950\n6173,o37,0,-13.2495903,3.8032627\n6171,o60,0,-39.5687970,-2.0518490\n6176,o61,0,-36.8761811,-1.3476960\n6172,o37,0,-10.6373783,0.6312390\n6177,o37,0,-13.3110745,0.0765470\n6174,o37,0,-13.0493475,0.7539210\n6179,o39,6,-9.6112782,34.1945018\n6175,o34,0,-39.2551914,-1.0083427\n6178,o39,6,-7.8538918,3.4619743\n6140,o39,6,-5.1447524,39.6465479\n6143,o20,0,-32.0014823,-2.0356180\n6141,o34,0,-34.7867286,-2.0913820\n6146,o62,0,-3.2653221,0.7486907\n6142,o62,0,-10.2795979,-3.1033587\n6147,o60,0,-13.9421537,-3.1538590\n6144,o61,0,-35.0810964,-2.7241040\n6149,o61,0,-39.4608581,-3.9180447\n6145,o60,0,-34.2166591,-1.5008500\n6148,o37,0,-10.2795979,0.1486170\n6190,o62,0,-10.8415918,-0.8142950\n6193,o15,0,-35.3232977,1.3337050\n6191,o39,6,-0.2703041,-3.8412858\n6196,o62,0,-31.6821533,5.8631575\n6192,o60,0,-39.9126068,-6.1579470\n6197,o39,6,-9.5866175,34.4987953\n6194,o39,6,-0.8550650,0.9764480\n6199,o39,6,31.0548832,30.4332056\n6195,o39,6,-1.4749136,6.0135086\n6198,o19,0,-37.8416015,-0.4246500\n6150,o39,6,-30.3599466,8.5523527\n6153,o39,6,-5.9773327,35.0001915\n6151,o34,0,-39.7144846,-1.5817707\n6156,o60,0,-37.7743082,-6.8071317\n6152,o62,0,-39.7537596,3.8771887\n6157,o62,0,-13.9645640,-3.7189440\n6154,o60,0,-34.9641478,-1.2557460\n6159,o39,6,31.9710874,30.2714138\n6155,o60,0,-35.8975359,0.0343787\n6158,o39,6,-6.3709262,1.1052786\n6180,o65,0,-30.1830202,8.4260164\n6183,o60,0,-39.4238492,-0.3165587\n6181,o39,6,-6.7498370,34.5352987\n6186,o37,0,32.1289064,10.6039357\n6182,o61,0,-13.7433525,-1.4229937\n6187,o37,0,-37.6578296,-6.9789990\n6184,o62,0,-39.4292747,3.8311097\n6189,o62,0,-32.7967407,-6.1762240\n6185,o20,0,-31.3831833,-3.7358860\n6188,o34,0,-7.5526371,34.8094366\n6600,o22,6,-9.7177743,39.3236549\n6603,o37,0,-36.4745505,-1.2016980\n6601,o37,0,-36.0760985,-1.5117140\n6606,o62,0,-30.8439619,-1.6257320\n6602,o20,0,-32.6257092,-2.6065367\n6607,o34,0,-34.0910525,6.3628260\n6604,o19,0,-37.5842664,-3.1596967\n6609,o35,6,-4.9790975,-3.1770540\n6605,o39,6,-9.2149716,-3.5085852\n6608,o22,6,36.7323443,8.0941432\n6630,o34,0,-39.3758144,-3.2810407\n6633,o39,6,-7.2311714,-1.0143800\n6631,o39,6,-5.3589691,-6.2703388\n6636,o62,0,-3.0425572,-3.2327129\n6632,o61,0,-37.6757035,-2.6460470\n6637,o39,6,-33.4839988,33.8528050\n6634,o22,6,-5.7710395,34.9081035\n6639,o39,6,36.1924284,30.1426903\n6635,o39,6,-9.0488405,-6.6768062\n6638,o35,6,-8.6212251,-2.2737935\n6610,o61,0,-35.8696870,-3.4578927\n6613,o39,6,-8.3338040,-2.1322747\n6611,o62,0,-8.8829187,30.0970947\n6616,o35,6,-9.7080555,-2.2078449\n6612,o62,0,-5.5372824,-7.1653626\n6617,o61,0,-32.6532210,-2.7737817\n6614,o39,6,-6.8744001,1.1070863\n6619,o39,6,-2.8963124,-2.7431095\n6615,o22,6,-7.8041934,34.6080476\n6618,o22,6,36.4202148,30.2407993\n6660,o62,0,-13.7339518,-1.7468920\n6663,o34,0,-38.8322725,-1.9329840\n6661,o37,0,-13.3330954,-0.2877750\n6666,o39,6,36.4745505,33.9830257\n6662,o34,0,-38.6818806,-1.3652207\n6667,o34,0,-10.0099487,-3.3462520\n6664,o60,0,-13.4340975,-1.2557460\n6669,o34,0,-35.5333279,-0.8214697\n6665,o60,0,-34.8225739,-3.4136647\n6668,o62,0,-32.6902465,-6.1847650\n6620,o62,0,-39.3505560,3.9622760\n6623,o34,0,-37.1699234,-3.3238650\n6621,o62,0,-10.9616609,-3.0514547\n6626,o34,0,-38.7601395,-3.5483377\n6622,o37,0,-36.5070547,-2.6876520\n6627,o61,0,-33.2823972,-2.2909870\n6624,o34,0,-10.7584323,-3.8311097\n6629,o62,0,-11.9125920,-0.4601107\n6625,o60,0,-35.9271947,0.4825757\n6628,o34,0,-10.9471476,-3.8945277\n6670,o39,6,36.6478757,31.7992997\n6673,o37,0,-38.8608113,0.8506260\n6671,o62,0,-3.1670297,0.4268187\n6676,o34,0,-35.2255473,-0.0900127\n6672,o39,6,-3.7758022,-2.1296514\n6677,o20,0,-31.0755505,5.3363275\n6674,o61,0,-11.4892157,-0.9259167\n6679,o22,6,-4.1674394,34.6622243\n6675,o62,0,-11.2995427,-3.6958220\n6678,o39,6,32.0570604,30.8560967\n6640,o62,0,-1.1448856,0.3533077\n6643,o35,6,-0.8773062,-3.3072306\n6641,o62,0,-3.4601419,0.2356954\n6646,o35,6,-33.7424935,8.6778196\n6642,o39,6,-9.9044842,39.9368167\n6647,o39,6,-1.9614728,1.3441483\n6644,o39,6,-36.0760491,8.5587949\n6649,o26,0,-4.4235330,39.3138037\n6645,o26,0,30.0620925,30.1551370\n6648,o60,0,-11.0661292,-0.8142950\n6690,o62,0,-3.6008349,0.7503779\n6693,o60,0,-35.0021250,3.3370077\n6691,o34,0,-39.7131091,0.6595150\n6696,o35,6,-33.5918142,31.1979529\n6692,o62,0,-3.9167992,-2.5726494\n6697,o34,0,-38.6510313,-6.5185037\n6694,o34,0,-4.1364431,39.0354571\n6699,o62,0,-11.2682205,-3.3750897\n6695,o60,0,-11.5274621,-3.9556350\n6698,o39,6,36.5650133,30.9204530\n6650,o62,0,-0.8223171,-1.0813967\n6653,o65,0,-8.5419451,8.1655130\n6651,o34,0,-4.2284817,39.4641182\n6656,o26,0,33.3022286,30.1626700\n6652,o39,6,-3.1041259,3.8684825\n6657,o39,6,-31.6552137,30.8019238\n6654,o39,6,-2.3883437,32.7230583\n6659,o39,6,-2.3336678,39.0353450\n6655,o22,6,36.1434474,33.6812297\n6658,o21,0,0.3424960,-3.5652633\n6680,o20,0,-8.1309399,5.7971947\n6683,o39,6,-7.1487640,34.2230312\n6681,o22,6,30.6458088,33.1872807\n6686,o61,0,-0.0308951,-2.6856917\n6682,o39,6,-33.2046249,33.8325446\n6687,o26,0,-9.4791827,35.5214556\n6684,o39,6,37.1131926,31.3521460\n6689,o22,6,-0.8937909,32.3846158\n6685,o34,0,2.1532850,4.8695310\n6688,o39,6,8.3410732,5.4424390\n6200,o35,6,-0.2887053,36.4460796\n6203,o20,0,-35.4050280,1.0640890\n6201,o34,0,-35.7763750,-3.3370077\n6206,o35,6,-0.2447967,36.6934991\n6202,o62,0,-1.3241653,-2.1916427\n6207,o34,0,-38.4952167,-0.2234860\n6204,o34,0,-34.0820231,-3.8683200\n6209,o39,6,30.2355814,9.6863632\n6205,o39,6,36.3925547,9.5775657\n6208,o34,0,-35.1873906,-1.3894810\n6230,o69,0,32.8571260,7.4519797\n6233,o39,6,-7.3025460,-1.9052089\n6231,o26,0,-4.4055942,37.4919771\n6236,o39,6,-2.8963124,37.9071842\n6232,o39,6,-7.0408701,37.2123194\n6237,o22,6,-7.5416755,37.6073778\n6234,o62,0,-13.7151701,-1.9646210\n6239,o34,0,-38.2295536,-3.9449910\n6235,o62,0,-33.7818981,-6.2921817\n6238,o39,6,-4.8933790,-1.8942167\n6210,o62,0,-0.1988223,-2.8920600\n6213,o61,0,-38.9336753,-1.5725270\n6211,o62,0,-13.9068032,-1.4686570\n6216,o62,0,-11.9989470,-0.5491147\n6212,o61,0,-11.5870643,-3.8397820\n6217,o37,0,-10.9819305,0.3357060\n6214,o34,0,-35.4050280,-6.8849560\n6219,o34,0,-38.9289535,-6.9192750\n6215,o39,6,-3.0638705,-2.2415602\n6218,o20,0,-31.0613091,-2.2337267\n6260,o39,6,-1.1437081,-7.3765095\n6263,o61,0,-33.8659817,-7.3942147\n6261,o63,0,2.2793281,33.6041467\n6266,o39,6,5.9937535,30.8560967\n6262,o22,6,0.1572661,35.1456476\n6267,o26,0,30.1783198,8.8079967\n6264,o35,6,-5.0320540,-7.8355891\n6269,o22,6,-9.6078813,35.1675917\n6265,o26,0,31.0613091,8.6182350\n6268,o34,0,-7.4219825,37.1063269\n6220,o26,0,33.1321636,8.5606417\n6223,o39,6,-6.9592980,39.6295495\n6221,o26,0,31.1877520,5.1173577\n6226,o62,0,-5.5816210,-4.3845621\n6222,o20,0,-39.3370365,7.2187810\n6227,o34,0,-7.9467770,37.7972928\n6224,o17,0,0.0000000,-7.8560176\n6229,o19,0,-7.5871862,-9.7112330\n6225,o26,0,33.9923387,9.9562817\n6228,o61,0,-1.6615497,-7.0116415\n6270,o39,6,1.9117864,-2.7399192\n6273,o19,0,1.4315334,-2.9733941\n6271,o39,6,1.9552415,-2.6662059\n6276,o20,0,-1.7248212,-4.5841950\n6272,o29,0,-0.6736012,-4.5331934\n6277,o39,6,-9.9437592,-5.3750447\n6274,o35,6,-4.3086456,37.8676942\n6279,o61,0,-38.7233840,2.8395927\n6275,o22,6,3.0816608,35.3118037\n6278,o39,6,31.6448216,36.3694967\n6240,o22,6,9.4529200,30.5252330\n6243,o39,6,37.7917949,31.0221320\n6241,o62,0,-38.2632320,7.0717690\n6246,o35,6,8.7582799,33.0299337\n6242,o39,6,36.1824001,31.6410397\n6247,o19,0,-7.6098789,39.2547491\n6244,o22,6,33.3906116,9.6174200\n6249,o22,6,0.7815115,39.8627735\n6245,o34,0,-4.2773534,37.3077340\n6248,o22,6,5.5287840,8.4250013\n6290,o39,6,31.0303705,33.1324860\n6293,o39,6,-9.6515687,35.4059432\n6291,o39,6,33.7861990,5.9946498\n6296,o26,0,30.0822728,30.1515157\n6292,o22,6,-9.4451919,32.4577322\n6297,o39,6,0.8440534,39.6402562\n6294,o68,0,7.8119658,8.8079967\n6299,o39,6,31.2599017,36.3424040\n6295,o19,0,-5.8171944,-5.1828307\n6298,o39,6,-4.7768572,-5.3252248\n6250,o39,6,-1.4963839,39.2755219\n6253,o39,6,8.5238746,33.7508970\n6251,o20,0,3.5991911,-7.7437047\n6256,o61,0,-1.7798104,-7.2604610\n6252,o16,0,-3.2403004,-7.5359569\n6257,o22,6,-4.8863362,35.6093510\n6254,o39,6,8.7410055,5.6722437\n6259,o39,6,-2.1548593,37.2926735\n6255,o22,6,36.5070547,36.0411417\n6258,o39,6,-2.2453192,-8.0521345\n6280,o22,6,9.5138469,5.0292173\n6283,o12,0,-4.3759901,-7.6479786\n6281,o39,6,-2.7826949,39.1785534\n6286,o22,6,6.1937064,-7.3392902\n6282,o26,0,30.2584903,8.0472987\n6287,o35,6,0.1640636,39.5254709\n6284,o38,0,32.2849363,36.2934647\n6289,o22,6,8.1947980,30.0367047\n6285,o39,6,-5.2893145,-5.1273961\n6288,o22,6,-4.4481747,39.4299037\n6700,o15,0,-3.4799051,-9.6847300\n6703,o35,6,37.9533417,31.1896987\n6701,o39,6,-9.2723895,-7.3414883\n6706,o39,6,33.1500893,9.1446803\n6702,o39,6,-1.8081160,39.0934270\n6707,o68,0,4.9417931,30.0884597\n6704,o11,0,-5.7600432,-9.9697984\n6709,o39,6,-1.8633982,39.2701498\n6705,o12,0,36.5137765,31.8532470\n6708,o39,6,-5.3270392,7.4362554\n6730,o38,0,-33.1234945,-2.1409137\n6733,o63,0,4.1807054,5.3815447\n6731,o39,6,-5.0798855,-4.3571842\n6736,o38,0,-9.6865399,35.1221055\n6732,o39,6,8.7414553,5.6291124\n6737,o37,0,-37.4595295,-6.6779587\n6734,o39,6,31.6555859,31.8332207\n6739,o22,6,37.4652278,31.7880167\n6735,o62,0,-9.9031612,7.6428151\n6738,o34,0,-34.1325032,-2.8093037\n6710,o62,0,-13.8708308,-3.9180447\n6713,o63,0,4.1797920,5.7540530\n6711,o39,6,-7.4979182,39.1040586\n6716,o39,6,8.2718846,4.8961252\n6712,o62,0,-11.3377568,-6.6350520\n6717,o22,6,3.4923977,39.6673118\n6714,o20,0,-38.5537101,-2.6176787\n6719,o22,6,31.9744452,31.9036490\n6715,o39,6,-2.6062722,-9.8972789\n6718,o38,0,-10.4117259,-2.4341607\n6760,o68,0,4.2349798,8.5321060\n6763,o22,6,-4.5682354,10.7862140\n6761,o35,6,31.4128600,36.9417097\n6766,o60,0,-10.3998634,-5.0175570\n6762,o63,0,4.4849010,5.7769410\n6767,o22,6,-1.5785133,37.7777432\n6764,o63,0,4.6162261,5.9109267\n6769,o26,0,-7.4146197,10.3174105\n6765,o37,0,8.5752164,5.3773430\n6768,o35,6,-2.2453192,-8.3304776\n6720,o68,0,7.5955143,8.3412647\n6723,o61,0,-35.8256961,-7.2121077\n6721,o22,6,-6.2643944,39.6387994\n6726,o63,0,31.7900680,36.4195270\n6722,o22,6,30.6805451,5.6264949\n6727,o39,6,-6.6372342,34.0027641\n6724,o63,0,4.0472777,5.3592500\n6729,o14,0,7.1420248,8.1261620\n6725,o35,6,-4.9184644,38.2355765\n6728,o39,6,30.7700701,32.8104070\n6770,o14,0,3.3464581,-4.4495608\n6773,o22,6,-2.8870530,39.9744679\n6771,o39,6,-1.4315334,-5.1544590\n6776,o22,6,8.3445044,9.2817895\n6772,o63,0,33.4102129,37.2424237\n6777,o39,6,1.0238271,39.9389040\n6774,o39,6,-8.0670754,-5.4571975\n6779,o39,6,33.5952312,32.0574897\n6775,o68,0,7.8391285,8.4459497\n6778,o39,6,-2.7555594,39.8847309\n6740,o39,6,8.4983211,4.5339979\n6743,o64,0,-5.1041008,-34.9873090\n6741,o37,0,33.1389102,39.8486420\n6746,o39,6,37.4728361,36.4390910\n6742,o39,6,-3.8940940,-5.8165522\n6747,o64,0,-5.6815646,-34.8189448\n6744,o34,0,3.4056046,31.6126310\n6749,o14,0,-2.6486164,-5.8853399\n6745,o38,0,-2.7682579,39.9725800\n6748,o39,6,30.3962304,4.6547077\n6790,o39,6,30.6458088,34.1366470\n6793,o39,6,8.1309098,5.4183960\n6791,o63,0,30.5050698,34.1730907\n6796,o61,0,-9.3365964,-8.8953618\n6792,o63,0,3.4799051,31.3453067\n6797,o39,6,-7.2914619,35.0610855\n6794,o39,6,8.5764250,4.5117440\n6799,o38,0,31.6702970,38.6071340\n6795,o37,0,-13.8586624,-7.6428720\n6798,o34,0,33.1321636,39.8929707\n6750,o38,0,3.6889107,31.1531100\n1466,o6,0,-9.4676653,-34.4596990\n6751,o39,6,33.1830959,39.8212637\n6756,o23,0,3.3291138,31.1470407\n6752,o39,6,-4.3645365,-31.1382014\n6757,o39,6,-4.8403955,10.1432874\n6754,o35,6,5.2981217,9.7875385\n6759,o65,0,-5.6476934,-34.5907012\n6755,o39,6,33.0113315,39.4124150\n6758,o15,0,-37.4342587,-9.6101767\n6780,o26,0,1.5591444,8.1254107\n6783,o62,0,-32.0710840,-32.1921158\n6781,o39,6,-7.5585026,35.1427627\n6786,o35,6,30.4684220,4.7995880\n6782,o16,0,-3.3291138,-31.2654010\n6787,o39,6,31.3925165,35.6966737\n6784,o23,0,0.4329981,33.6005990\n6789,o65,0,-5.4276657,-34.2862474\n6785,o39,6,-7.7855510,35.1738977\n6788,o39,6,-0.3783568,36.6034647\n6400,o38,0,8.2129529,7.4684477\n6403,o65,0,-5.9654240,-34.0793292\n6401,o63,0,1.7462089,30.1273160\n6406,o61,0,-32.2831702,-32.5449268\n6402,o34,0,-7.8913205,39.5400956\n6407,o27,6,30.6712242,2.0169196\n6404,o19,0,37.7049097,32.6479877\n6409,o39,6,33.7930115,35.6959650\n6405,o37,0,3.3321596,31.6053717\n6408,o16,0,9.6007060,-36.5434197\n6430,o39,6,-7.7077496,10.7603036\n6433,o64,0,-8.0790341,-34.4947828\n6431,o39,6,33.6797333,2.5560143\n6436,o34,0,-6.0806466,33.1605717\n6432,o14,0,37.6757035,10.2801240\n6437,o65,0,-9.8691665,-39.3164922\n6434,o39,6,-30.7952300,-37.9372262\n6439,o22,6,37.8206242,32.1106400\n6435,o27,6,0.3974731,32.2293709\n6438,o22,6,-5.2543711,-34.3193989\n6410,o68,0,4.9094501,8.7039540\n6413,o37,0,-3.2597243,31.3233930\n6411,o27,6,37.7684213,32.6284640\n6416,o64,0,-5.6132922,-39.4737407\n6412,o37,0,0.6275366,36.1563080\n6417,o39,6,-4.1674394,-31.7107408\n6414,o39,6,32.4916426,32.2521857\n6419,o35,6,-36.6077991,-31.5322511\n6415,o22,6,-5.7452537,-34.0066639\n6418,o39,6,33.9794711,37.6737170\n6460,o65,0,-8.0872287,-34.5075547\n6463,o39,6,-3.2947498,32.9200140\n6461,o61,0,-11.3610731,-6.6270347\n6466,o35,6,33.5167132,34.8749010\n6462,o62,0,-32.5972714,-36.8823247\n6467,o65,0,-5.5895633,-37.5454388\n6464,o65,0,-5.9740305,-34.4026436\n6469,o39,6,33.6628837,39.1104207\n6465,o39,6,33.5825989,37.4757777\n6468,o34,0,-8.8451184,-34.8885311\n6420,o68,0,4.8341440,8.8721710\n6423,o67,0,37.2246192,37.3527267\n6421,o22,6,8.0240701,9.5421951\n6426,o35,6,5.1887381,39.7894877\n6422,o20,0,-16.7085376,-6.8136910\n6427,o39,6,34.0393865,32.5997360\n6424,o67,0,32.7204178,37.4690087\n6429,o22,6,31.8616384,37.2765457\n6425,o26,0,30.9644984,39.0251917\n6428,o62,0,-32.6548656,-32.8636864\n6470,o35,6,32.3162726,37.6960930\n6473,o22,6,-4.3325792,35.7006525\n6471,o39,6,-9.3365964,-5.6232368\n6476,o39,6,8.8716981,9.7008738\n6472,o67,0,37.0870170,37.2699080\n6477,o39,6,33.5272995,39.5563500\n6474,o61,0,-16.6031187,-2.9995177\n6479,o39,6,30.8741264,39.5272927\n6475,o39,6,-6.8244418,35.0295902\n6478,o67,0,37.4475832,37.3327380\n6443,o22,6,33.9454602,35.3717070\n6441,o22,6,-30.1089140,-34.3259726\n6446,o62,0,-5.3038334,-9.3006137\n6442,o20,0,-16.4323051,-2.6388960\n6447,o62,0,-30.8045648,-34.7084362\n6444,o62,0,-30.5242991,-34.5892411\n6449,o67,0,37.2355538,37.4141647\n6445,o67,0,34.7517933,37.0771497\n6448,o39,6,36.7323421,34.1950060\n6490,o39,6,8.1283667,34.3530240\n6493,o39,6,-2.0708775,39.9159033\n6491,o63,0,36.5258886,34.9589107\n6496,o22,6,33.7650522,9.9919029\n6492,o67,0,37.3332816,37.8112820\n6497,o11,0,-36.1399261,-34.2155309\n6494,o39,6,30.4726263,39.5168157\n6499,o67,0,37.2735347,34.0674307\n6495,o39,6,-7.7660315,35.7697124\n6450,o35,6,30.8036714,35.0154377\n6453,o39,6,34.1893698,37.9990757\n6451,o20,0,-36.1684313,-35.0157752\n6456,o39,6,8.5080139,39.4243920\n6452,o39,6,-2.4949361,39.8621026\n6457,o39,6,37.0744036,34.0825410\n6454,o22,6,8.1930835,7.9084800\n6459,o39,6,8.3821217,34.8126560\n6455,o22,6,8.4519912,39.7660797\n6458,o34,0,-39.4292747,-2.2652940\n6480,o38,0,36.7847009,39.7281390\n6483,o34,0,-2.4854484,35.2827953\n6481,o16,0,-5.7710395,-5.7925593\n6486,o22,6,8.2461047,7.9370494\n6482,o39,6,31.4368735,39.7194930\n6487,o67,0,32.9071858,34.3617497\n6484,o22,6,30.7992879,32.5551540\n6489,o62,0,-30.8159827,-34.2162666\n6485,o34,0,-7.2399239,35.4741072\n6488,o67,0,37.0744036,34.2550947\n6900,o22,6,30.4941887,39.5434620\n6903,o20,0,-31.2656254,-39.9263787\n6901,o26,0,-7.6672071,10.4053596\n6906,o62,0,-30.5806922,-34.1098546\n6902,o67,0,37.0624228,34.9589107\n6907,o60,0,-13.7339518,-6.1028497\n6904,o35,6,-9.0758514,-33.7031396\n6909,o39,6,-8.6102835,-5.3458255\n6905,o38,0,-10.1281588,-2.5108397\n6908,o67,0,37.6468808,34.8889820\n6930,o20,0,-37.1149741,-34.8564115\n6933,o39,6,8.1881968,4.5347275\n6931,o22,6,32.8459979,39.6776060\n6936,o12,0,-36.1953607,-35.0990938\n6932,o39,6,8.5468319,35.3982697\n6937,o39,6,5.5692730,34.3723367\n6934,o39,6,-2.7778760,35.6484188\n6939,o22,6,30.4726255,7.2050382\n6935,o22,6,33.0937329,35.9855570\n6938,o24,6,-9.3015844,-31.8332284\n6910,o17,0,-8.3999971,-5.8304872\n6913,o22,6,5.9550283,39.7660797\n6911,o34,0,-7.3789720,35.7340266\n6916,o20,0,-35.6004782,-4.9816947\n6912,o39,6,30.7393374,4.1613806\n6917,o39,6,8.6632900,35.6966737\n6914,o39,6,30.2873781,32.4951317\n6919,o39,6,-7.1540066,38.0140682\n6915,o37,0,30.4266428,4.0978910\n6918,o22,6,8.3436098,35.3646277\n6960,o35,6,-8.8874677,-39.1213887\n6963,o39,6,33.5586804,38.1564900\n6961,o35,6,-8.6546904,-37.1345251\n6966,o20,0,-16.4170542,-6.5185037\n6962,o14,0,-6.6906092,-8.5068451\n6967,o39,6,8.6178508,35.7914710\n6964,o39,6,30.0160844,37.2972327\n6969,o62,0,-30.5050649,-34.5544964\n6965,o38,0,-2.9023759,35.5201568\n6968,o39,6,5.9344805,39.8761027\n6920,o39,6,33.0091998,4.8951768\n6923,o39,6,-30.9300569,-35.4628758\n6921,o39,6,34.3535445,32.7726160\n6926,o39,6,8.7200775,32.5551540\n6922,o63,0,-7.0408701,38.8288018\n6927,o38,0,-10.0453284,-7.2187810\n6924,o39,6,31.9203520,9.3639194\n6929,o39,6,-2.1812941,-8.4553524\n6925,o39,6,8.3338040,35.4755640\n6928,o61,0,-16.1205282,-1.4854647\n6970,o39,6,31.6998107,38.6832000\n6973,o39,6,8.0240645,37.1652057\n6971,o15,0,-30.3406147,-34.6028794\n6976,o35,6,-6.5636835,39.8897009\n6972,o39,6,-33.0686869,-34.6184716\n6977,o39,6,32.8145178,9.0374670\n6974,o18,0,5.8503494,35.8226107\n6979,o22,6,36.9669151,35.6601787\n6975,o39,6,5.7600432,37.9229687\n6978,o37,0,-32.4338521,-7.4621980\n6940,o63,0,-2.9143373,10.6756598\n6943,o61,0,-7.9384211,-33.1824404\n6941,o20,0,-12.0325317,-6.6855537\n6946,o19,0,-8.2984469,-39.5168353\n6942,o39,6,36.1958883,2.4438766\n6947,o35,6,-30.6320189,-34.6374882\n6944,o39,6,5.5545718,38.6218137\n6949,o19,0,37.2451565,38.4511930\n6945,o39,6,8.7730620,32.4410760\n6948,o22,6,-30.1089125,-39.0697317\n6990,o39,6,31.5337782,38.1207950\n6993,o35,6,-36.1049521,-39.0378290\n6991,o27,6,-2.4511016,35.9235521\n6996,o38,0,-34.4377079,-4.1132097\n6992,o39,6,36.9749459,7.0316130\n6997,o39,6,36.4278014,35.8819880\n6994,o21,0,-30.6602570,-34.9170913\n6999,o39,6,8.5845296,36.5077887\n6995,o34,0,36.2549359,38.6764827\n6998,o34,0,-6.8923052,35.6358283\n6950,o60,0,-11.2392522,-1.7295327\n6953,o39,6,-6.8463601,-8.9840640\n6951,o39,6,31.6276365,2.4066479\n6956,o39,6,10.9853888,39.6045127\n6952,o62,0,-33.7400704,-34.0601607\n6957,o22,6,36.4352793,38.6218137\n6954,o39,6,8.1510453,36.4008317\n6959,o26,0,-2.7668844,38.4076026\n6955,o20,0,-39.7784608,-9.2406017\n6958,o35,6,34.1325032,38.5899630\n6980,o39,6,32.6782511,2.9995669\n6983,o20,0,-16.2516485,-1.2272930\n6981,o39,6,39.0309108,38.7483727\n6986,o62,0,-2.9427655,-8.4410965\n6982,o39,6,5.2761320,36.5974120\n6987,o35,6,37.7684213,10.3203167\n6984,o20,0,-32.6610269,-37.5529934\n6989,o63,0,-2.3075245,38.9269105\n6985,o39,6,32.3067304,2.9002717\n6988,o62,0,-31.8266092,-39.3778548\n6500,o22,6,32.0364916,38.3473490\n6503,o37,0,33.8289909,35.5802777\n6501,o39,6,5.7380561,36.6372150\n6506,o20,0,-37.2796074,-7.6262050\n6502,o35,6,-6.8840425,35.7290155\n6507,o39,6,33.4082263,2.5303227\n6504,o18,0,32.1993283,10.6620697\n6509,o22,6,-36.6000566,-34.5615331\n6505,o20,0,-34.9055102,-4.7227897\n6508,o39,6,-7.1487640,-30.0262322\n6530,o20,0,-16.2347004,-1.8382560\n6533,o19,0,-2.7998082,-33.9575640\n6531,o62,0,-32.6610708,-37.0404719\n6536,o62,0,-31.7104797,-34.5536044\n6532,o20,0,-37.2098069,-4.0078297\n6537,o39,6,-7.5092495,-30.5096320\n6534,o20,0,-12.6349360,-6.6702060\n6539,o22,6,3.9747310,36.7150296\n6535,o20,0,-12.3797183,-1.8966250\n6538,o39,6,-2.4511016,10.9800676\n6510,o61,0,-7.6122190,-30.9722227\n6513,o37,0,0.3544182,-3.4533702\n6511,o39,6,33.7304219,31.5456257\n6516,o19,0,-37.4936576,-32.2419406\n6512,o38,0,-31.8698995,-34.4592741\n6517,o38,0,1.8213794,33.2677687\n6514,o61,0,-32.8056874,-7.8451210\n6519,o37,0,-3.0218180,-6.2498887\n6515,o39,6,-7.5526371,-36.2691898\n6518,o39,6,-0.8223171,36.2583765\n6560,o35,6,0.9600706,32.3122540\n6563,o39,6,-2.7310201,-30.2631449\n6561,o20,0,-32.2849383,-32.1984628\n6566,o37,0,-6.7182836,-4.2639854\n6562,o23,0,0.2910414,33.3665877\n6567,o20,0,-31.4103235,-34.7225826\n6564,o20,0,-4.0788442,-8.8592431\n6569,o37,0,-6.2464113,-4.7674998\n6565,o35,6,-2.4949361,-31.2214431\n6568,o20,0,-37.9544400,-32.9849042\n6520,o39,6,-33.6576579,-34.3381345\n6523,o39,6,33.1321636,38.7809007\n6521,o39,6,-5.3356999,-34.3698732\n6526,o39,6,9.8219199,31.7910830\n6522,o22,6,-3.9350556,35.9745674\n6527,o39,6,32.6624536,7.9314654\n6524,o39,6,-7.9467770,-8.7647315\n6529,o22,6,31.1964194,38.8365807\n6525,o27,6,-36.0540091,-34.4770212\n6528,o37,0,-6.6215438,-4.7826157\n6570,o68,0,4.6915273,31.7551707\n6573,o39,6,-1.4954505,-33.9559435\n6571,o39,6,-3.7426867,38.0164786\n6576,o22,6,32.4228355,7.5773632\n6572,o34,0,32.1934400,10.1808277\n6577,o39,6,5.9404064,36.8998497\n6574,o35,6,-32.3272326,-37.1269812\n6579,o68,0,4.1383706,31.4107487\n6575,o35,6,0.8654643,34.0534944\n6578,o64,0,-5.0607766,-39.6860091\n6540,o37,0,-3.7178485,-31.0533600\n6543,o35,6,-0.7612219,34.2758798\n6541,o29,0,-1.8423320,-8.4359466\n6546,o68,0,7.2273591,31.5585827\n6542,o22,6,-1.7382848,38.5499500\n6547,o39,6,36.7927208,7.5031413\n6544,o12,0,-3.3751003,-31.2776417\n6549,o39,6,36.2215078,38.8672647\n6545,o68,0,4.2661171,31.4649180\n6548,o37,0,-36.7323285,-34.4119218\n6590,o26,0,-6.6372342,38.3314166\n6593,o39,6,32.7907398,7.4758752\n6591,o22,6,36.4038585,10.2325670\n6596,o68,0,4.9417931,36.6841177\n6592,o39,6,-6.5216900,10.3292667\n6597,o37,0,-36.6110669,-34.1206154\n6594,o39,6,-7.1487640,-36.1422095\n6599,o22,6,32.2646660,7.8710987\n6595,o37,0,-36.8086560,-37.8339086\n6598,o62,0,-32.0840055,-39.0849261\n6550,o34,0,-13.2526692,-9.0882090\n6553,o39,6,33.9713463,34.7647770\n6551,o39,6,-7.6986350,-36.2484766\n6556,o39,6,-32.7094836,-37.6824390\n6552,o39,6,-5.5309216,-39.2310001\n6557,o34,0,-8.9590499,-39.2527973\n6554,o39,6,3.3833629,37.4103566\n6559,o23,0,0.6749837,30.8552400\n6555,o23,0,-3.1187752,30.0731080\n6558,o20,0,-39.3020674,-9.9884710\n6580,o61,0,-31.2997259,-39.2852685\n6583,o12,0,-3.3719330,-31.2728382\n6581,o27,6,38.2505395,4.1504703\n6586,o39,6,32.1079805,10.1929540\n6582,o68,0,4.4469492,36.4334577\n6587,o62,0,-36.8421422,-32.6819638\n6584,o35,6,3.3924492,32.5495875\n6589,o16,0,-1.7455855,38.5670255\n6585,o27,6,17.0056262,4.5241227\n6588,o20,0,-34.7079169,-9.4979417\n6800,o34,0,0.3371933,37.3417793\n6803,o22,6,32.7877348,10.1929540\n6801,o34,0,6.0380070,31.3870640\n6806,o68,0,4.4501629,36.5901697\n6802,o38,0,-6.0122823,10.0703180\n6807,o20,0,-37.6210627,-9.3108760\n6804,o22,6,0.3251079,37.5988677\n6809,o37,0,1.8329313,31.3955947\n6805,o61,0,-32.0364473,-39.3880515\n6808,o39,6,0.9452920,32.2667486\n6830,o62,0,-2.5841991,-36.6707835\n6833,o63,0,-3.6706354,5.9648060\n6831,o39,6,-1.4096117,36.8420046\n6836,o20,0,-34.3476887,-9.4838110\n6832,o35,6,-3.4231208,32.7158216\n6837,o62,0,-32.1199284,-32.8213481\n6834,o22,6,-8.7034648,-39.5995036\n6839,o22,6,-3.7087017,32.3767385\n6835,o39,6,-3.2343595,32.7095347\n6838,o22,6,0.5919448,32.8425026\n6810,o65,0,-9.8639763,-39.1756993\n6813,o23,0,0.9600706,30.4269120\n6811,o20,0,-37.2801201,-4.4965967\n6816,o62,0,-33.7267996,-34.1628330\n6812,o14,0,-1.9882230,-31.1736055\n6817,o39,6,-5.5948124,-39.6809604\n6814,o68,0,4.7252846,8.2639437\n6819,o22,6,-1.8763675,10.0397671\n6815,o27,6,-5.5372890,-39.7894834\n6818,o61,0,-34.7404329,-5.1797027\n6860,o37,0,17.3277493,4.9941390\n6863,o34,0,-36.2635489,-35.0682740\n6861,o39,6,34.3307057,38.4394660\n6866,o62,0,-2.4615002,-36.4528631\n6862,o68,0,7.8887546,32.3091267\n6867,o34,0,-37.9901363,-32.9836606\n6864,o39,6,5.4705134,37.0313977\n6869,o22,6,-2.3553566,13.3425682\n6865,o39,6,5.5768356,37.5608167\n6868,o37,0,17.3957039,4.7152650\n6820,o39,6,34.4300344,38.8568370\n6823,o39,6,8.4078170,34.6928400\n6821,o68,0,7.7932647,32.3442870\n6826,o39,6,33.3765731,36.1916640\n6822,o22,6,33.2665317,30.2815956\n6827,o39,6,-7.2311714,13.7241548\n6824,o22,6,-8.7568780,-34.9526619\n6829,o65,0,-5.1393963,-39.7660728\n6825,o20,0,-37.4595295,-5.4011207\n6828,o37,0,17.6694574,4.9116710\n6870,o62,0,-31.5227052,-39.0307456\n6873,o62,0,-2.3345170,-36.4189491\n6871,o34,0,-37.0520684,-32.7267913\n6876,o39,6,30.8395388,33.4017130\n6872,o39,6,30.6678976,33.5866810\n6877,o22,6,-5.9001346,-39.1571924\n6874,o64,0,-5.2147203,-39.4817354\n6879,o68,0,7.4376286,31.9222780\n6875,o34,0,-37.4516759,-5.2380887\n6878,o22,6,39.3505560,38.7632280\n6840,o37,0,-36.3415435,-39.8295726\n6843,o22,6,-0.2777876,32.1857731\n6841,o39,6,-6.6696915,-36.7161731\n6846,o39,6,0.9367560,32.3890203\n6842,o37,0,3.0536719,31.7351140\n6847,o23,0,-0.5045899,8.9933330\n6844,o38,0,-8.4666536,-39.0073920\n6849,o39,6,-9.8511171,-39.0567812\n6845,o14,0,-37.9141937,-8.0657290\n6848,o62,0,-36.8484631,-39.3183628\n6890,o39,6,-6.0525921,-36.4113142\n6893,o39,6,-1.7926598,32.1740230\n6891,o24,6,-1.1448856,32.0781802\n6896,o39,6,1.4629450,37.9485396\n6892,o39,6,32.9594672,38.1885187\n6897,o27,6,37.7031352,38.4932850\n6894,o23,0,0.9247394,33.0376817\n6899,o22,6,32.4118412,34.2162657\n6895,o23,0,0.2153285,30.9671827\n6898,o39,6,37.4618745,10.4674537\n6850,o23,0,-0.4179792,8.5247110\n6853,o62,0,-31.8591280,-39.3913863\n6851,o39,6,30.4905302,31.7164317\n6856,o68,0,2.8629008,31.4922627\n6852,o37,0,-34.4142568,-8.6012577\n6857,o65,0,-5.7418840,-39.4416625\n6854,o35,6,3.3503747,37.8298331\n6859,o35,6,0.6356495,37.2607719\n6855,o35,6,-3.1357501,36.4953210\n6858,o23,0,-3.0906927,8.5962727\n6880,o65,0,-5.1560763,-39.9424963\n6883,o39,6,-32.0469129,-34.6884953\n6881,o20,0,-37.4945484,-9.4838110\n6886,o62,0,-36.7572869,-32.8085685\n6882,o35,6,-30.0740120,-39.6032238\n6887,o38,0,-3.9093303,30.0826030\n6884,o62,0,-31.4678611,-34.5726949\n6889,o62,0,-31.2305759,-34.8364371\n6885,o39,6,38.9883569,39.2643007\n6888,o20,0,-36.0633124,-35.0312713\n2000,o20,0,-39.4177003,-5.8065527\n2003,o39,6,34.9389854,38.8381990\n2001,o27,6,-36.4876053,-34.6759803\n2006,o20,0,-31.6397061,-39.7194148\n2002,o39,6,-8.4338975,-35.2323607\n2007,o34,0,-39.8599509,-9.9821477\n2004,o62,0,-32.5835706,-32.3706847\n2009,o20,0,-32.3272349,-39.2245435\n2005,o62,0,-32.9724884,-39.7943274\n2008,o39,6,-31.2195518,-39.9240407\n2030,o19,0,-34.1903860,-32.9580935\n2033,o38,0,-11.2047041,-9.2814137\n2031,o35,6,-37.6100979,-39.0836427\n2036,o37,0,-36.2376781,-35.0861644\n2032,o22,6,-30.0490011,-35.0161180\n2037,o22,6,34.2496000,10.6154730\n2034,o35,6,-39.0653774,-36.8730166\n2039,o39,6,-36.3290392,-31.8965602\n2035,o39,6,-36.4369484,-39.5257105\n2038,o22,6,-33.3425162,-39.8372842\n2010,o67,0,37.4268670,34.5978027\n2013,o39,6,-36.6668321,-35.3399814\n2011,o37,0,-32.7094547,-35.4833712\n2016,o62,0,-32.8365587,-39.4243522\n2012,o39,6,3.7896153,32.0815134\n2017,o22,6,-32.0053545,-39.5563456\n2014,o15,0,-32.1349435,-39.8029673\n2019,o37,0,-32.4436453,-35.7123911\n2015,o38,0,-37.1943499,-38.8957157\n2018,o37,0,-32.7243241,-35.5175038\n2060,o61,0,-32.6532631,-35.5021915\n2063,o34,0,-36.0294606,-35.6674660\n2061,o37,0,-36.0210850,-35.2191662\n2066,o35,6,-31.1877412,-35.7206639\n2062,o39,6,-36.3606495,-35.8500069\n2067,o20,0,-33.5158803,-35.4506578\n2064,o37,0,-30.9081476,-35.4214548\n2069,o39,6,-33.8394243,-38.3245696\n2065,o11,0,-31.0787277,-38.4045767\n2068,o34,0,-31.3579812,-38.7143020\n2020,o21,0,-31.3715760,-38.4227909\n2023,o22,6,-36.4984034,-38.8337532\n2021,o38,0,-36.4495772,-38.8499745\n2026,o38,0,-36.4495401,-10.0341632\n2022,o27,6,-36.5070979,-10.0890385\n2027,o61,0,-32.3565164,-38.7085895\n2024,o20,0,-32.6548629,-38.7297500\n2029,o34,0,-37.7394566,-35.3877576\n2025,o22,6,36.4168799,2.4699230\n2028,o35,6,-33.1321643,-35.8396804\n2070,o35,6,31.9154350,6.8269035\n2073,o61,0,4.2553341,-33.0772273\n2071,o63,0,36.2085936,6.9078310\n2076,o39,6,3.9582244,-31.6046686\n2072,o39,6,3.0425572,-31.6403093\n2077,o17,0,3.4804215,-31.4822754\n2074,o63,0,31.7693022,1.6972247\n2079,o35,6,3.7020362,-36.0357781\n2075,o27,6,31.4245542,1.6505640\n2078,o20,0,6.2643944,-33.2968992\n2040,o34,0,6.5102364,-33.9577224\n2043,o63,0,31.5680028,1.2186337\n2041,o39,6,6.8463601,-31.2117846\n2046,o20,0,4.5995216,-31.5570095\n2042,o39,6,36.0487754,1.5930111\n2047,o11,0,9.2943721,-36.0711504\n2044,o61,0,9.2943721,-36.2378089\n2049,o12,0,9.6007060,-36.5996268\n2045,o39,6,36.6127017,1.7747027\n2048,o11,0,9.1410986,-36.5949837\n2090,o35,6,9.4879351,-36.8543924\n2093,o20,0,4.8933790,-36.4213725\n2091,o20,0,4.5042520,-36.9150297\n2096,o20,0,4.5566632,-32.0044203\n2092,o14,0,4.3509144,-36.9985610\n2097,o34,0,7.9717945,-36.5952455\n2094,o39,6,36.0907854,1.5457102\n2099,o19,0,2.6322614,-32.9879942\n2095,o34,0,2.8181335,-32.5503464\n2098,o63,0,36.6110279,6.5015480\n2050,o39,6,6.3824741,-32.6514658\n2053,o61,0,1.8329313,-37.1065633\n2051,o35,6,36.2429416,2.3211357\n2056,o35,6,2.2011751,-37.0232047\n2052,o21,0,7.2583000,-37.9191385\n2057,o34,0,7.7660315,-37.8127366\n2054,o63,0,36.7577117,2.0432130\n2059,o28,0,7.7268830,-34.0273582\n2055,o63,0,36.4416488,2.0169377\n2058,o24,6,36.9009877,6.9344510\n2080,o39,6,32.5217384,6.7044337\n2083,o35,6,-8.3911517,-38.1380145\n2081,o39,6,37.8131641,7.0225671\n2086,o39,6,37.0678345,2.6286397\n2082,o39,6,32.7793306,1.2099468\n2087,o39,6,37.6229103,1.6495650\n2084,o22,6,-9.4791853,-39.1756205\n2089,o27,6,32.8535511,1.7549104\n2085,o22,6,-9.7100451,-39.5741732\n2088,o39,6,-9.1982380,-39.5305303\n2300,o39,6,-9.3893002,-39.9676508\n2303,o39,6,-4.9290982,-35.0690499\n2301,o27,6,-4.9013506,-39.8295094\n2306,o39,6,37.3169316,1.8400409\n2302,o65,0,-4.9363413,-35.3801003\n2307,o35,6,37.7354597,6.3417921\n2304,o39,6,-7.8201196,-39.5543984\n2309,o39,6,-4.3378905,-35.6535545\n2305,o39,6,-7.3289207,-35.8631062\n2308,o35,6,37.9999188,6.9895656\n2330,o39,6,-2.4665995,-35.7261538\n2333,o27,6,-2.7030445,-35.9162416\n2331,o24,6,-2.2964103,-35.9996665\n2336,o39,6,34.9698940,6.3836867\n2332,o39,6,-2.0317189,-35.1117347\n2337,o22,6,-1.1885848,-35.0682159\n2334,o39,6,34.4516155,2.3186029\n2339,o39,6,-6.5766251,-35.3717046\n2335,o39,6,34.8060525,2.7652290\n2338,o39,6,-1.6619915,-35.0701329\n2310,o35,6,-30.4616978,-38.0958947\n2313,o22,6,-30.6678999,-38.9327847\n2311,o39,6,39.3908955,2.3689007\n2312,o20,0,-30.4255412,-10.9079317\n2317,o22,6,35.0021735,2.1032202\n2314,o20,0,-30.4695401,-10.5014474\n2319,o39,6,-30.5483066,-10.5006661\n2315,o39,6,-30.8352822,-10.8019036\n2318,o16,0,-36.1416289,-10.4198870\n2360,o35,6,-33.6352992,-10.8375155\n2363,o39,6,-33.6053647,-10.8187897\n2361,o39,6,-33.2439899,-10.7529952\n2366,o38,0,35.3232977,2.0997507\n2362,o39,6,-31.4065705,-10.2032704\n2367,o39,6,35.1066395,2.8420568\n2364,o20,0,-31.5865559,-10.7030177\n2369,o35,6,-37.9533469,-10.3361044\n2365,o23,0,3.0768091,30.5427907\n2368,o22,6,38.9345291,7.5944927\n2320,o22,6,-37.6639784,-10.0497602\n2323,o23,0,0.5155723,33.2368867\n2321,o23,0,3.7426867,33.0216170\n2326,o35,6,38.3715477,7.1417438\n2322,o29,0,-2.0090260,-9.6378191\n2327,o20,0,-34.4545705,-10.9006351\n2324,o34,0,-32.5107925,-10.4966944\n2329,o20,0,-12.1829744,-2.6876520\n2325,o27,6,-36.1273893,-10.4230746\n2328,o22,6,-32.4995480,-10.5187599\n2370,o39,6,-37.9596048,-10.9129906\n2373,o20,0,-37.1261219,-13.1044281\n2371,o35,6,38.0781041,7.5669103\n2376,o20,0,-32.1993678,-13.4132061\n2372,o39,6,-31.8550065,-13.4185452\n2377,o35,6,38.5720871,4.7160492\n2374,o22,6,-32.9474935,-13.8227861\n2379,o39,6,-37.2988186,-11.6791741\n2375,o14,0,8.3665412,2.5146020\n2378,o27,6,34.0557713,39.8929707\n2340,o63,0,31.7084758,1.2272930\n2343,o39,6,31.8075707,6.0601154\n2341,o35,6,36.3487744,6.4101286\n2346,o18,0,5.6612765,39.2388230\n2342,o18,0,5.9331039,39.3097120\n2347,o18,0,30.0270760,35.4421117\n2344,o18,0,33.6962371,39.5868760\n2349,o18,0,31.1453657,39.9424990\n2345,o18,0,31.9870813,39.9699227\n2348,o18,0,37.5237214,10.4230450\n2390,o18,0,34.4252206,38.4394660\n2393,o18,0,31.0613091,35.4755640\n2391,o18,0,31.2511362,38.7718870\n2396,o18,0,33.4426697,10.8250857\n2392,o18,0,30.0160844,10.4066417\n1415,o6,0,-9.1624665,-7.6650137\n1743,o5,7,-39.9016297,3.8594357\n1741,o5,7,-39.9874411,2.7365590\n1740,o5,7,-38.3187367,0.6777080\n1775,o5,7,-37.7031352,-33.8328650\n1778,o5,7,-10.4040532,-4.2632530\n1747,o5,7,-0.7726883,-0.3437870\n1774,o5,7,6.8129047,-39.9343857\n1746,o5,7,-8.6102505,4.7852945\n1742,o5,7,-2.2359381,7.2206199\n1779,o5,7,-36.6948246,-39.8577915\n1776,o5,7,-3.1207644,7.8064020\n1729,o5,7,32.5250377,34.5544997\n1724,o5,7,8.2711601,38.5548750\n1777,o5,7,1.2764199,35.7733040\n1772,o5,7,-0.2009026,31.0933247\n1728,o5,7,6.6549929,30.1689647\n1725,o5,7,9.6288028,30.1158467\n1770,o5,7,8.4655784,9.6525837\n1773,o5,7,36.0644317,4.0192867\n1771,o5,7,30.9069270,6.9810840\n2384,o66,0,3.8133570,33.7720217\n2389,o66,0,3.4369872,33.4746540\n2385,o66,0,3.9410033,31.4807820\n2388,o66,0,1.7602973,31.1544047\n2100,o66,0,3.3171477,31.5080890\n2103,o66,0,8.8366324,9.7066827\n2101,o66,0,8.9133843,4.9534067\n2106,o66,0,8.0737178,5.3226550\n2102,o66,0,8.2056392,5.3226550\n2107,o66,0,30.6232422,9.2535257\n2104,o66,0,8.5080139,4.9941390\n2109,o66,0,3.1872194,39.7458918\n2105,o66,0,-2.8351664,38.4300100\n2108,o66,0,-2.3441148,10.1352389\n2130,o66,0,32.8459979,36.2048857\n2133,o66,0,5.2973902,32.5685097\n2131,o66,0,5.2973902,32.7789087\n2136,o66,0,5.4746309,32.6819150\n2132,o66,0,8.3999971,32.2419717\n2137,o66,0,8.1474005,36.8366187\n2134,o66,0,8.1403339,36.4286830\n2139,o66,0,-0.1290087,36.9805722\n2135,o66,0,-0.5626261,36.8557244\n2138,o66,0,-3.5078368,33.7901010\n2110,o66,0,-1.1740103,8.0899857\n2113,o66,0,-1.1882607,7.5382324\n2111,o66,0,36.2085936,37.2343460\n2116,o66,0,36.1161238,34.0825410\n2112,o69,0,0.2703041,32.3035790\n2117,o69,0,37.0624228,7.4938527\n2114,o69,0,35.4792708,2.9629667\n2119,o69,0,35.9155081,2.4305220\n2115,o69,0,32.5023019,6.9110937\n2118,o69,0,30.6248767,9.1446557\n2160,o69,0,30.2201451,9.6174200\n2163,o69,0,31.6157354,9.0708157\n1478,o4,7,-30.0414228,9.1889707\n2166,o69,0,8.5327305,31.0221320\n1490,o4,7,-5.7042415,2.5152339\n1440,o4,7,-8.1930571,4.8263588\n1475,o4,7,-8.2202804,5.1109069\n1479,o4,7,-33.0269441,9.8889684\n1997,o4,7,-33.5227692,9.1747838\n1443,o4,7,-5.1108616,4.8914739\n1474,o4,7,-33.1825440,5.9539185\n1448,o4,7,-8.8775585,7.3207361\n1441,o4,7,-36.3738367,9.9326590\n1446,o4,7,-36.6190356,4.1906694\n1476,o4,7,-31.4985076,8.3241633\n1447,o4,7,-33.9984090,7.6135238\n1442,o4,7,-31.3968192,7.3222534\n1471,o4,7,-36.1079611,8.8118965\n1444,o4,7,-30.3135534,4.0110651\n1473,o4,7,-33.4755729,31.1342801\n2173,o69,0,9.0637693,8.4174977\n1445,o4,7,-30.6733585,2.7500783\n1495,o4,7,-9.2611673,1.0585940\n1496,o4,7,-9.4348800,2.6542061\n1491,o4,7,-5.2631674,1.5729941\n1493,o4,7,-5.4933854,2.3199367\n1494,o4,7,-4.5937520,6.4637902\n1450,o4,7,-5.1009083,0.2234715\n2178,o69,0,0.6961755,32.0028000\n1456,o4,7,-9.4451919,-3.2549321\n1451,o4,7,-9.1410520,-3.2810828\n1991,o4,7,-36.8636675,6.6314897\n1993,o4,7,-37.0093882,2.0518490\n1996,o4,7,-34.3258611,4.0473880\n1992,o4,7,-39.5490107,2.6452737\n1911,o4,7,-33.7519941,-8.8828840\n1990,o4,7,-39.1015682,6.5015480\n1977,o4,7,-36.7643104,3.6958220\n1926,o4,7,-30.9329161,-1.1052470\n1998,o4,7,-32.0603684,-1.9646210\n1969,o4,7,-36.6445271,-31.9644539\n1935,o4,7,-5.4414195,-36.2292582\n1913,o4,7,-30.6644790,-34.4528450\n1961,o4,7,-8.3520833,-38.3958103\n2197,o69,0,-1.8842047,4.5754380\n1995,o4,7,-34.9924584,-0.0837907\n2199,o69,0,-1.8644596,4.5052537\n1994,o4,7,-35.0021250,-0.4061550\n2198,o69,0,-6.0242698,4.9816905\n2150,o69,0,-1.2780976,9.0708960\n2153,o69,0,-1.4201793,4.4800375\n2151,o69,0,-1.5028157,4.2927775\n1964,o4,7,-36.5553875,-31.8171724\n1999,o4,7,-34.5187504,-3.3084380\n2157,o69,0,-1.3166800,4.0093707\n1967,o4,7,-32.8239502,-31.5031566\n1973,o4,7,-39.9095644,-6.3887530\n2155,o69,0,-1.3419241,7.8792994\n1962,o4,7,-39.3978964,-36.9539378\n1970,o4,7,-34.8392041,-6.3555050\n2183,o69,0,-1.0928331,7.8451662\n1966,o4,7,-34.0568332,-32.9580963\n1971,o4,7,-39.8656955,-1.5474350\n2182,o69,0,-3.9918986,4.9663170\n1972,o4,7,-38.1335700,-1.3660720\n1914,o4,7,-39.4769161,-34.4750291\n1919,o4,7,-39.7267326,-35.3706064\n1941,o4,7,-10.7351775,-3.7736310\n1946,o4,7,-13.1105404,-3.6067660\n1912,o4,7,-36.1358813,-34.2639646\n1943,o4,7,-13.6577664,-0.4520577\n1917,o4,7,-37.7278820,-34.8902254\n2606,o69,0,1.6406360,9.1939970\n1974,o4,7,-39.7473100,1.0069950\n1915,o4,7,-39.2580980,-10.7023235\n1979,o4,7,-10.5837324,1.3476960\n2609,o69,0,6.9280776,8.4923720\n1918,o4,7,-36.5268815,-10.3309894\n1948,o4,7,-13.8622264,-6.1579470\n2630,o69,0,3.1872194,8.4987207\n1960,o4,7,-31.3298750,-10.3261383\n1944,o4,7,-11.5353559,-6.0974837\n1963,o4,7,-8.7969552,-35.2734751\n2632,o69,0,0.9014025,30.3575937\n1947,o4,7,-16.6580773,-6.8071317\n1916,o4,7,-33.1379886,-39.6989434\n1949,o4,7,-16.5339375,-1.9239157\n2635,o69,0,0.4754810,33.3700770\n1910,o4,7,-30.7491256,-37.9648641\n1942,o4,7,-16.5009694,-2.0432130\n1938,o4,7,-30.0350817,-37.7145606\n1934,o4,7,-4.1457711,-31.2578090\n2616,o69,0,4.6435448,32.2231047\n1903,o4,7,-2.6322614,-7.1242730\n1482,o4,7,3.2283112,-6.5951500\n2614,o69,0,30.2201451,37.4503037\n2619,o69,0,30.7518525,37.9512270\n1939,o4,7,-9.1965419,-36.0349794\n1459,o4,7,-1.4749122,-6.0428357\n1481,o4,7,-0.6959298,-6.3206187\n1933,o4,7,-6.1344314,-33.5091050\n1936,o4,7,2.4479670,-32.9780300\n2666,o69,0,5.4048055,34.8951250\n1932,o4,7,9.4126788,-36.6500440\n2667,o69,0,36.9681396,37.1476230\n1976,o4,7,-35.9569001,-2.1852190\n1928,o4,7,-39.6314132,-2.3027360\n1925,o4,7,-34.2166591,-7.0101350\n1929,o4,7,-37.2366815,-2.6876520\n2620,o69,0,8.2454897,35.5753647\n1968,o4,7,-38.6304765,-9.8702920\n1927,o4,7,-36.6347744,-2.3027360\n1922,o4,7,-30.5792685,-6.0835730\n1930,o4,7,-7.8913205,-30.9056410\n2627,o4,7,3.3239615,-4.0813637\n1489,o4,7,3.7087017,-7.8236087\n1484,o4,7,-3.3641269,-2.8446760\n2625,o69,0,37.3348532,13.0431370\n1487,o4,7,-0.7378972,-2.4972510\n1454,o4,7,-6.9477114,-2.0271437\n1937,o4,7,4.6158616,-31.1619237\n604,o7,7,-7.7478292,35.6047386\n607,o7,7,-2.7030410,38.9226884\n633,o7,7,-6.6979847,38.1634775\n635,o7,7,0.2114409,34.0453634\n634,o7,7,3.6686202,34.2612366\n639,o7,7,3.1962931,37.9086995\n1923,o4,7,-31.2931671,-4.9337980\n1920,o4,7,-33.7345198,-9.2065556\n1902,o4,7,-7.8339409,-9.7059530\n1488,o4,7,-3.6889107,-9.3482637\n1909,o4,7,-1.6265279,-5.3407297\n1931,o4,7,1.9667935,-31.7910830\n2647,o4,7,-1.6150139,-35.0299406\n1907,o4,7,-7.5628366,-5.3392777\n1904,o4,7,-7.0408701,-5.7611340\n1905,o4,7,-1.3874200,-30.5145470\n1480,o4,7,-0.8284326,-3.8856837\n1921,o4,7,-8.1947980,-1.5220910\n1453,o4,7,-7.6270661,-0.5856365\n1452,o4,7,-4.7928266,-1.1742624\n1486,o4,7,3.8850612,-2.2348600\n1483,o4,7,-0.5569273,-0.5491147\n1457,o4,7,-1.0961622,3.8524417\n1449,o4,7,-30.4754496,6.7276002\n1498,o4,7,-8.5456081,3.3614429\n1455,o4,7,-1.4279241,-1.3281367\n2698,o4,7,-8.4078170,-3.1402230\n1499,o4,7,-7.9042156,1.4962706\n1492,o4,7,-9.4347767,7.7182720\n1497,o4,7,-7.4716567,7.8487151\n646,o7,7,8.7167557,35.9553310\n640,o7,7,34.6364071,10.9614657\n666,o7,7,9.3675600,8.4923720\n661,o7,7,7.9927661,8.9659810\n664,o7,7,9.9873733,9.8447456\n665,o7,7,5.4626846,9.7825316\n617,o7,7,3.3719330,31.7689910\n615,o7,7,1.2143511,30.6878270\n611,o7,7,3.1498513,32.0641663\n601,o7,7,-9.9950729,34.2172882\n609,o7,7,-7.0390692,39.7369039\n630,o7,7,-7.7866818,39.5298166\n616,o7,7,3.8850612,36.1236146\n677,o7,7,36.7830334,36.0827537\n1428,o6,0,-37.9903526,3.7015667\n1429,o6,0,-13.3932759,-0.0900127\n679,o7,7,37.5572772,32.3687417\n1787,o6,0,-3.1120486,5.8172607\n621,o7,7,30.1490683,8.1660708\n626,o7,7,8.8080393,5.4127617\n622,o7,7,33.1942242,5.8754044\n674,o7,7,30.6128893,36.5308540\n1467,o6,0,-8.6370019,-39.5434620\n2209,o6,0,-31.9351229,-5.7694017\n2205,o6,0,-34.3946999,-8.4798827\n1420,o6,0,-39.2776650,-33.5442787\n1437,o1,0,-32.6428929,-32.8104070\n1468,o6,0,-32.8606710,-39.3556137\n1469,o6,0,-31.4128600,-39.2527980\n1462,o6,0,-4.7300914,-35.6601787\n627,o7,7,33.7331374,9.7602762\n1906,o4,7,-5.4705134,-5.0878087\n1418,o6,0,-5.8055086,-5.9211587\n1419,o6,0,-2.3514821,-8.9335787\n668,o7,7,5.9550484,9.0708289\n628,o7,7,33.4789548,7.6538591\n1432,o1,0,-4.6048978,-33.6663840\n1460,o6,0,-6.5178019,-31.2610210\n620,o7,7,8.2906173,7.5097973\n1463,o6,0,-4.9737860,-36.9961507\n676,o7,7,32.0364540,2.5212751\n1461,o6,0,-30.1764655,-32.3862197\n673,o7,7,36.4955602,6.9192968\n672,o7,7,39.7123926,7.0064396\n643,o7,7,36.5538668,38.3473490\n675,o7,7,32.2296331,37.8008250\n623,o7,7,30.6401133,30.3575818\n669,o7,7,5.4358192,8.4635018\n619,o7,7,2.2673815,33.6112160\n660,o7,7,3.1872194,4.6627120\n618,o7,7,0.8654643,9.8096510\n614,o7,7,3.7298141,33.6590430\n605,o7,7,-4.6586312,37.2803166\n632,o7,7,3.9627774,39.6455165\n637,o7,7,0.7785551,39.2699663\n636,o7,7,0.4211129,39.8491011\n602,o7,7,-6.1197805,10.2717948\n603,o7,7,-4.5566632,38.5571583\n608,o7,7,-4.3839025,35.0525000\n613,o7,7,-0.3691197,32.7754983\n610,o7,7,-1.5378056,36.8055917\n3659,o7,7,-0.2560205,4.5600510\n671,o7,7,37.0176971,6.6188552\n670,o7,7,31.2339477,3.8881523\n625,o7,7,31.0521340,4.2842418\n624,o7,7,33.5387863,30.7679450\n629,o7,7,30.6387050,33.3599407\n663,o7,7,2.0090260,5.5948710\n631,o7,7,-3.2510790,39.7676861\n612,o7,7,-6.5328127,31.4089847\n638,o7,7,-3.2510790,37.6036437\n662,o7,7,6.5645508,39.4365770\n667,o7,7,2.6849483,34.7921407\n641,o7,7,5.7418840,10.1754147\n678,o7,7,10.2232052,39.7281390\n1789,o6,0,4.0472777,36.6757100\n642,o7,7,17.9725999,4.7516056\n1785,o6,0,2.4511016,36.3837657\n2246,o6,0,6.5328127,-31.3062477\n1414,o6,0,3.9034130,-4.2088670\n1416,o6,0,-6.0017699,-2.0432130\n1411,o6,0,-9.1093556,-3.9622760\n1413,o6,0,-3.5285149,3.7736310\n1464,o6,0,-33.6585866,-38.2271949\n1465,o6,0,-37.5922991,-13.5752390\n1426,o6,0,-13.5233158,-4.8541807\n1421,o6,0,-35.9919110,-7.4938527\n1422,o6,0,-16.6154970,-6.2802710\n2296,o6,0,-37.0410802,-3.0779720\n1423,o6,0,-36.6855863,-2.5846157\n1424,o6,0,-34.7654756,-2.2909870\n1436,o1,0,-38.5024915,-1.8587097\n1427,o6,0,-38.1823547,-1.3548380\n1425,o6,0,-38.2295536,-0.0972330\n1470,o6,0,-39.4327138,7.9719510\n1435,o6,0,-31.2305773,5.0292630\n1438,o6,0,-31.5222820,7.2050240\n2251,o1,0,-0.9380913,-2.2660587\n1417,o6,0,-3.6706354,-3.0162670\n1431,o1,0,-4.6496740,1.7929290\n1410,o6,0,-5.5692730,2.6388960\n1439,o6,0,-8.2843260,9.5219220\n1434,o6,0,-7.9480223,7.4553220\n2255,o6,0,-4.9094501,4.9548800\n1781,o6,0,-6.8570544,32.6184397\n1759,o6,0,-4.2443785,10.1808277\n1755,o6,0,-9.6332531,34.4396717\n1433,o1,0,-7.7000951,39.1297960\n1758,o6,0,-2.8091772,39.6515177\n1780,o6,0,-1.7985990,35.5296467\n1783,o6,0,3.1357501,34.4402227\n1782,o6,0,0.4649674,36.2759395\n1786,o6,0,1.1437081,31.1258030\n1408,o1,0,1.9700683,5.5152967\n1404,o6,0,31.1359644,2.7381967\n1409,o6,0,35.2132384,2.1511497\n1784,o6,0,4.0137219,30.1515157\n1400,o6,0,36.1399715,30.0275117\n1407,o6,0,4.2661171,5.3664370\n1405,o1,0,30.6798633,8.6930563\n1430,o1,0,30.8583951,34.2433220\n2704,o20,0,-32.0460921,3.9997270\n1406,o6,0,32.2326944,38.3789507\n1401,o6,0,32.2235113,39.9257397\n1402,o6,0,30.6798639,35.0161180\n1403,o6,0,31.8789473,36.2700807\n2733,o69,0,9.3841303,31.8894127\n2731,o69,0,4.5445423,31.7992997\n1788,o6,0,5.9773327,31.6567467\n2732,o22,6,9.5075452,5.3336708\n2737,o22,6,5.5069379,8.4450282\n2734,o71,0,-4.1674394,-39.5490107\n2739,o71,0,-4.4066596,-39.0836427\n2735,o71,0,-9.4676653,-39.1104207\n2738,o71,0,-7.9290599,-35.3525120\n2710,o71,0,-4.9243068,-9.4191520\n2713,o71,0,-8.9940593,-37.3083617\n2711,o71,0,-9.6222375,-39.1213547\n2716,o71,0,-9.4419564,-30.7980540\n2712,o71,0,-33.9794711,-30.6464140\n2717,o71,0,-9.7647626,-39.3704340\n2714,o71,0,-1.3419072,-35.0703437\n2719,o4,7,5.9001178,-37.0818987\n2715,o71,0,-37.1784850,-34.9589107\n2718,o71,0,-7.5966690,-5.0458990\n2760,o71,0,-31.5886570,-4.4609537\n1908,o4,7,-9.1183659,-8.9042540\n2761,o71,0,5.8066101,-37.2309947\n1458,o4,7,-1.3739320,-3.4149696\n2762,o71,0,-9.7848322,-3.3719330\n2767,o71,0,-4.3759901,3.5840250\n2764,o71,0,-8.3449890,2.3140780\n2769,o71,0,10.1656339,39.7476947\n2765,o71,0,-5.3589691,7.7133417\n2768,o20,0,-13.1105404,0.4954880\n2720,o71,0,-38.1665042,-1.0711747\n2723,o71,0,-34.0009147,-6.3279340\n2721,o71,0,-35.8536095,-8.6820740\n2726,o71,0,-0.0945292,-6.3014120\n2722,o71,0,4.4066596,31.9818697\n2727,o71,0,-36.5908779,-3.1538590\n2724,o71,0,4.2514193,36.0060330\n2729,o71,0,7.4219825,31.2767550\n2725,o71,0,-9.3989215,-3.3984267\n2728,o71,0,36.4202367,6.2570477\n2770,o71,0,4.5445423,31.5604260\n2773,o34,0,-13.1256043,0.4966317\n2771,o71,0,3.0692688,5.0089177\n2776,o71,0,0.8333804,9.5638930\n2772,o71,0,4.6825037,36.3260400\n1485,o4,7,2.9767914,-4.5063260\n2774,o71,0,4.2514193,31.8894127\n2779,o71,0,4.4719581,36.3137320\n2775,o34,0,-13.6173767,0.5187130\n2778,o71,0,30.6985553,8.6746707\n2740,o34,0,-13.4942778,0.9782847\n2743,o71,0,7.4696079,31.2758927\n2741,o34,0,-13.2955256,0.4793760\n2746,o71,0,4.1124682,36.6481860\n2742,o71,0,5.2329806,31.1896987\n2747,o71,0,4.1124682,36.0494280\n2744,o71,0,4.4066596,36.7968500\n2749,o71,0,7.9750478,31.7273757\n2745,o20,0,-13.4617263,0.9835377\n2748,o71,0,2.6579808,32.3091267\n2790,o71,0,6.8369156,32.6047220\n2793,o38,0,-0.2777876,-0.3557197\n1477,o4,7,-5.7968921,5.4560650\n606,o7,7,-9.0542153,34.9958297\n1975,o4,7,-13.7491394,0.9202381\n2794,o6,0,-33.7343635,0.6229640\n1945,o4,7,-11.3300825,-6.6453127\n2799,o39,6,-39.4238492,-3.4780210\n2795,o39,6,-39.9189860,-3.8118505\n2798,o39,6,-34.0153562,-3.1221537\n2750,o39,6,-35.4208539,-1.8735011\n2753,o39,6,-39.5190562,-1.4637220\n2751,o39,6,-35.6552548,-2.0169379\n2756,o39,6,-36.6852142,-0.8820697\n2752,o39,6,-39.6627995,-6.6350520\n2757,o39,6,-39.7613833,-6.4607030\n2754,o39,6,-39.5157581,-6.9331899\n2759,o39,6,-39.7131076,-2.0013488\n2755,o39,6,-34.2569496,-2.4072794\n2758,o39,6,-34.0224692,-2.6711838\n2780,o39,6,-34.0664289,-2.9277045\n2783,o39,6,-37.0587620,-6.4589717\n2781,o39,6,-30.8271711,-1.2557465\n2786,o39,6,-30.8621818,-0.9342029\n2782,o39,6,-33.5317273,-3.5213560\n2787,o39,6,-8.1403339,-1.4512948\n2784,o39,6,-36.1493729,-6.0074445\n2789,o39,6,-36.6220078,-6.2175321\n2785,o39,6,-36.9151637,-6.8485702\n2788,o39,6,-30.9484321,-6.8849562\n2400,o39,6,-31.6047411,-7.3393973\n2403,o39,6,-32.3196524,-2.8757324\n2401,o39,6,-37.3772061,-4.0536752\n2406,o39,6,-10.9375462,-1.7141455\n2402,o39,6,-13.2966734,-1.8735012\n2407,o39,6,-16.2618485,-3.2615058\n2404,o39,6,-16.0025350,-1.4512743\n2409,o39,6,-11.9365872,-1.5535704\n2405,o39,6,-16.3647744,-1.5282766\n2408,o39,6,-11.8865200,-6.3730478\n2430,o39,6,-16.8258262,-1.6505651\n2433,o39,6,-12.6867407,-1.9454430\n2431,o39,6,-12.2428296,-6.2633998\n2436,o39,6,-16.4922552,-2.0911089\n2432,o39,6,-16.8946554,-2.3022813\n2437,o39,6,-10.1305426,-2.5377632\n2434,o39,6,-10.1196642,-2.8039086\n2439,o39,6,-10.1861024,-7.3942148\n2435,o39,6,-13.4538686,-7.1523745\n2438,o39,6,-11.3300854,-7.7306589\n2410,o39,6,-38.4090929,-4.9816943\n2413,o39,6,-10.9591139,-4.2376135\n2411,o39,6,-11.1055818,-5.6007890\n2416,o39,6,-13.5797549,-9.4838116\n2412,o39,6,-10.7954156,-9.9202005\n2417,o39,6,-38.9116159,-9.4979412\n2414,o39,6,-39.8861964,-9.8992096\n2419,o35,6,-13.5920461,-9.5970639\n2415,o35,6,-35.3922303,-6.8504222\n2418,o35,6,-16.2077116,-6.4873680\n2460,o35,6,-33.7304214,0.2086920\n2463,o35,6,-30.9644984,-3.1402604\n2461,o35,6,-34.0557713,2.7365892\n2466,o35,6,-35.5194360,1.2200589\n2462,o35,6,-10.8806356,-0.5493871\n2467,o35,6,-13.7041868,-3.0447043\n2464,o35,6,-35.8765411,-1.8320505\n2469,o35,6,-10.6250865,-2.2660587\n2465,o35,6,-38.3958373,-6.5207764\n2468,o35,6,-11.4637783,-6.4389485\n2420,o35,6,-31.7104648,-0.2803812\n2423,o35,6,-13.1085517,-3.5645039\n2421,o35,6,-37.2969963,-7.2279438\n2426,o35,6,-34.5417373,-1.3337533\n2422,o35,6,-37.5290635,3.1596456\n2427,o35,6,-11.6011367,-2.7368681\n2424,o35,6,-11.2152414,-2.4305156\n2429,o35,6,-36.6728504,-2.1856571\n2425,o42,6,-30.0490082,9.4614745\n2428,o42,6,-5.0798855,2.4374824\n2470,o42,6,-1.6615497,-7.0299165\n2473,o42,6,-3.3321596,1.4626126\n2471,o42,6,3.0425572,-7.8765795\n2476,o42,6,3.2071084,-4.1485616\n2472,o42,6,-6.8923052,1.3896168\n2477,o42,6,-7.6246562,6.3778398\n2474,o42,6,0.8079037,-6.2058640\n2479,o42,6,-1.3121539,-6.1858018\n2475,o42,6,-7.6012904,-2.1811233\n2478,o42,6,-7.6012904,9.3712998\n2440,o42,6,-5.5906574,-36.6989149\n2443,o42,6,-35.4806577,-3.2850286\n2441,o42,6,-34.7331315,-1.4626444\n2446,o42,6,-35.8372654,-8.8773400\n2442,o42,6,-30.4819445,8.1116797\n2447,o42,6,-2.7310201,38.5851226\n2444,o42,6,-9.8691654,35.9127859\n2449,o42,6,0.0855065,37.6385522\n2445,o42,6,-9.4419564,38.1057940\n2448,o42,6,-1.8540902,36.4181789\n2490,o42,6,-1.7248212,34.1452051\n2493,o42,6,0.2430522,36.3718641\n2491,o42,6,33.0440174,35.5635122\n2496,o42,6,36.0103271,35.4836048\n2492,o42,6,3.2860671,30.0417850\n2497,o42,6,7.2953135,5.8020868\n2494,o42,6,9.1587125,8.3792187\n2499,o42,6,37.0410802,34.3046502\n2495,o42,6,33.8336290,32.3277407\n2498,o42,6,5.5252181,39.4981560\n2450,o42,6,36.8971254,38.3474417\n2453,o42,6,36.8216320,10.0811926\n2451,o42,6,-10.3912217,-3.7498249\n2456,o42,6,-32.7450932,-31.8851103\n2452,o42,6,-31.7373250,-30.3999483\n2457,o42,6,-10.7494799,-9.9118401\n2454,o42,6,-10.9695385,-3.7092724\n2459,o42,6,-39.0933030,-31.8922341\n2455,o77,0,34.0393865,10.4450007\n2458,o79,0,34.3262263,10.6703890\n2480,o42,6,-10.7494799,1.3207216\n2483,o79,0,34.7517933,10.0257760\n2481,o42,6,-34.1101807,-33.2823984\n2486,o42,6,-30.6387050,-35.3209300\n2482,o42,6,-39.4928010,-10.2697646\n2487,o42,6,-31.2931671,-2.5478371\n2484,o42,6,-34.7404329,-30.7998569\n2489,o42,6,-30.6462105,-34.4403816\n2485,o42,6,-32.7450932,-10.2518580\n2903,o42,6,9.0758514,-32.0204232\n2901,o42,6,-10.5174272,-6.3688553\n2906,o42,6,-13.4340975,0.1786547\n2902,o42,6,-12.0325317,-1.0056177\n2907,o42,6,-10.2576131,6.6098016\n2904,o42,6,-37.1259385,7.3093957\n2909,o42,6,-10.3047966,-0.6223080\n2905,o42,6,-13.4852316,-9.3808134\n2930,o42,6,-36.3672346,-9.6364988\n2933,o42,6,-12.5933313,-6.8755342\n2931,o42,6,-13.6467991,-6.5397937\n2936,o22,6,-10.2678386,-4.5568672\n2932,o22,6,-12.3600510,-1.8674198\n2937,o22,6,-30.9540988,-1.0640836\n2934,o22,6,-8.8209416,-1.9795565\n2939,o22,6,-39.2002247,-3.0550455\n2935,o22,6,-37.3112930,-1.2016994\n2938,o22,6,-33.6876907,0.7282175\n2910,o22,6,-37.2126913,-6.2084255\n2913,o22,6,-34.8775630,-1.0460351\n2911,o22,6,-38.1884974,-0.5366759\n2916,o22,6,-13.4267105,-2.6965671\n2912,o22,6,-39.6747621,-1.8793500\n2917,o22,6,-16.8472087,-2.9012392\n2914,o22,6,-38.9116692,-3.2110640\n2919,o22,6,-36.4038832,-7.6006361\n2915,o22,6,-35.7101191,-3.5483348\n2918,o22,6,-38.1449230,-1.3811821\n2960,o22,6,-10.9375427,-3.9013620\n2963,o22,6,-10.2795924,-0.9425501\n2961,o22,6,-13.1590391,-3.3705151\n2966,o22,6,-39.3758199,-0.7654700\n2962,o22,6,-31.8789449,3.8511181\n2967,o22,6,-35.9155089,-0.6668401\n2964,o22,6,-10.5420484,-0.0509866\n2969,o22,6,-39.8406638,0.6686708\n2965,o22,6,-34.7404375,3.8511181\n2968,o22,6,-39.1129876,2.5754626\n2920,o22,6,-39.0283267,0.7908425\n2923,o22,6,-35.7179364,3.7744888\n2921,o22,6,-35.0975814,1.0903613\n2926,o22,6,-39.7132986,1.6863220\n2922,o22,6,-39.2348372,6.6155790\n2927,o22,6,-36.7216738,6.2428820\n2924,o22,6,-36.8761804,1.4408649\n2929,o22,6,-39.7473100,2.4263475\n2925,o22,6,-34.0621779,4.0103902\n2928,o22,6,-32.9309835,4.4172046\n2970,o22,6,-8.9590442,-3.6384572\n2973,o22,6,-10.4117281,-6.5673873\n2971,o22,6,-36.5340446,-1.5401196\n2976,o22,6,-37.3865191,-2.5029765\n2972,o22,6,-35.4050298,3.3021230\n2977,o22,6,-13.7913424,-7.9210006\n2974,o22,6,-33.3425090,-2.1118880\n2979,o22,6,-31.1414282,-7.6074856\n2975,o22,6,-37.4553577,-9.1901677\n2978,o22,6,-36.5788983,-7.5226776\n2940,o22,6,-11.8288151,-6.2984538\n2943,o22,6,-37.2246198,3.5297971\n2941,o22,6,-10.3702574,-7.6262050\n2946,o22,6,-37.4138989,-4.6688366\n2942,o22,6,-34.4536928,-4.3278805\n2947,o22,6,-16.9092174,-1.9920678\n2944,o22,6,-11.9291984,-4.9400752\n2949,o22,6,-38.2178122,-4.1218767\n2945,o22,6,-34.1325017,-7.9989396\n2948,o22,6,-11.6980418,-9.7066834\n2990,o22,6,-10.4390784,-9.6239844\n2993,o22,6,-34.6364079,-9.5970403\n2991,o22,6,-39.6314117,-9.3808939\n2996,o22,6,-35.9919164,-5.5311882\n2992,o22,6,-38.3732969,-8.0116524\n2997,o22,6,-38.5303438,-9.5970791\n2994,o22,6,-38.2178122,-8.6361285\n2999,o22,6,-38.3419767,-8.2325344\n2995,o22,6,-37.2923761,-8.7651877\n2998,o22,6,-37.5640803,-8.4874374\n2950,o22,6,-39.2195875,-30.2392868\n1965,o4,7,-38.1431738,-8.2036010\n2951,o27,6,-13.6173685,1.0176512\n2956,o39,6,-34.7867763,1.6505661\n2952,o39,6,-34.8561972,3.5649846\n2957,o39,6,-13.1899382,3.8856834\n2954,o39,6,-38.0714450,3.8118507\n2959,o39,6,-39.7904076,3.4378282\n2955,o39,6,-34.5013197,3.1221533\n2958,o39,6,-31.8145626,0.6512231\n2980,o39,6,-36.4745973,0.1500899\n2983,o39,6,-39.2991822,0.1216813\n2981,o39,6,-32.8236601,1.2557418\n2986,o39,6,-39.4327165,1.5817730\n2982,o39,6,-39.8192004,3.4485322\n2987,o39,6,-10.9851069,0.7898030\n2984,o39,6,-13.9459591,3.0989713\n2989,o39,6,-38.9289425,0.0972310\n2985,o39,6,-32.3708064,3.3984260\n2988,o39,6,-35.4208902,3.9164501\n2500,o39,6,-35.8425654,-0.3886005\n2503,o39,6,-10.3160645,-0.6512237\n2501,o39,6,-38.2102151,-0.2646041\n2506,o39,6,-38.9655039,-0.7898032\n2502,o39,6,-36.8645160,3.1944003\n2507,o39,6,-10.8796538,0.0252954\n2504,o39,6,-13.6293050,0.4382296\n2509,o39,6,-38.0503381,-6.5015455\n2505,o39,6,-11.2702371,-3.6675710\n2508,o39,6,-35.4525856,4.6183698\n2530,o39,6,-13.1290521,0.6082540\n2533,o39,6,-13.6714057,1.0176163\n2531,o39,6,-39.3976868,0.0765425\n2536,o39,6,-13.1105698,3.2344288\n2532,o39,6,-31.4052758,1.7141457\n2537,o39,6,-36.5722547,6.5413130\n2534,o39,6,-34.2155904,2.5808234\n2539,o39,6,-35.4380618,6.4967818\n2535,o39,6,-13.8586647,-3.7278140\n2538,o39,6,-13.7041865,-0.2103291\n2510,o39,6,-13.7119433,-3.0447191\n2513,o39,6,-38.4090794,-3.9271142\n2511,o39,6,-38.1884969,-1.3788545\n2516,o39,6,-38.4438707,-1.6072113\n2512,o39,6,-38.2102684,-1.2624851\n2517,o39,6,-38.3876806,-1.2741223\n2514,o39,6,-38.0171122,-1.1052428\n2519,o27,6,-36.5908757,-1.0388222\n2515,o24,6,-35.9951382,-5.8065840\n2518,o27,6,-38.7129178,-9.9279586\n2560,o27,6,-39.6034169,-5.7256857\n2563,o27,6,-35.9564824,-5.5405020\n2561,o27,6,-38.3585550,-1.3194578\n2566,o27,6,-38.6139314,-1.0452649\n2562,o24,6,-38.1561019,-1.3652651\n2567,o27,6,-34.1543789,-6.9549166\n2564,o27,6,-36.9884667,-1.0083794\n2569,o27,6,-36.8761544,-1.0327766\n2565,o27,6,-36.5070547,-0.6408012\n2568,o27,6,-37.0624213,3.3370008\n2520,o27,6,-39.3529765,1.0097074\n2523,o27,6,-37.9813267,1.5046438\n2521,o27,6,-35.2616870,1.4777227\n2526,o27,6,-39.1892745,4.3954017\n2522,o27,6,-33.4963072,-1.0931398\n2527,o27,6,-31.8909670,-3.7126559\n2524,o27,6,-31.4128674,-2.0883319\n2529,o27,6,-37.8955335,-1.8966262\n2525,o27,6,-10.1346925,-2.5482380\n2528,o39,6,-2.5571880,2.3027360\n2570,o39,6,-2.5368209,2.9561310\n2573,o39,6,-2.0708775,5.1415830\n2571,o39,6,-5.2086031,7.1230427\n2576,o39,6,-7.1832812,4.3580557\n2572,o39,6,-8.3821217,6.0891697\n2577,o39,6,-9.5595649,1.3111530\n2574,o64,0,-4.2443785,-3.5022997\n2579,o64,0,-4.7610180,-3.1402230\n2575,o64,0,-4.7895851,-3.0514547\n2578,o64,0,-9.9827110,-0.0699077\n2540,o37,0,-6.2389086,4.0007430\n2543,o37,0,-6.6906092,4.3497217\n2541,o37,0,-1.7232766,4.8768937\n2546,o37,0,-3.3719330,7.6979190\n2542,o37,0,-3.6267408,7.4558988\n2547,o37,0,-1.0718162,4.9905607\n2544,o37,0,-6.1287291,9.0357544\n2549,o37,0,-1.9117864,9.8702920\n2545,o37,0,-7.9290599,7.4702657\n2548,o24,6,31.0898942,10.9259850\n2590,o27,6,-34.6230709,-6.8780997\n2593,o24,6,-8.3225204,9.1039707\n2591,o24,6,6.4335195,32.2967177\n2596,o24,6,2.9373648,36.3137320\n2592,o27,6,-33.9807545,-9.0995430\n2597,o27,6,-33.5037470,-30.8994590\n2594,o24,6,-3.2860671,-35.0312740\n2599,o24,6,33.0440174,-37.6188980\n2595,o27,6,-7.0390692,-35.7050320\n2598,o39,6,-9.2473940,-3.3462500\n2550,o22,6,-30.2873781,-31.5604260\n2553,o24,6,-32.4555634,-31.8345190\n2551,o24,6,-36.4966253,-31.9222780\n2556,o22,6,-32.3825314,-36.8730160\n2552,o22,6,-9.6332531,-3.2661863\n2557,o22,6,-2.6831500,0.9266360\n2554,o22,6,-8.7093131,3.7207680\n2559,o22,6,-8.0417023,2.4611538\n2555,o22,6,-8.3889634,7.6835527\n2558,o22,6,-8.3449890,9.9014870\n2580,o22,6,-0.8194798,-0.5274807\n2583,o22,6,-1.8837787,-4.7288540\n2581,o22,6,-0.4649674,-2.1511497\n2586,o22,6,0.6165748,-9.0361160\n2582,o22,6,5.8641725,-32.8371147\n2587,o22,6,4.9363486,-32.1806947\n2584,o22,6,2.6296491,-32.8756327\n2589,o22,6,-3.9492801,-39.5437840\n2585,o22,6,-33.2156041,33.5859507\n2588,o22,6,-33.4102129,31.0850560\n2800,o39,6,7.8133586,31.0704995\n2803,o39,6,7.7347315,31.1258030\n2801,o39,6,4.7147688,31.4636217\n2806,o39,6,2.9427623,31.8904810\n2802,o39,6,4.5826164,36.7877140\n2807,o39,6,1.0588025,33.5497645\n2804,o39,6,1.1448970,33.4439917\n2809,o39,6,4.0838805,36.7253125\n2805,o39,6,2.8963668,36.0209347\n2808,o39,6,4.7805397,36.8322045\n2830,o39,6,4.9566249,31.5693045\n2833,o39,6,4.0472401,31.2973620\n2831,o39,6,2.8331921,31.9095605\n2836,o39,6,3.2860688,31.0221320\n2832,o39,6,3.5294906,33.7931986\n2837,o39,6,3.4365029,31.1333877\n2834,o39,6,6.0806754,5.3289927\n2839,o39,6,1.3874200,4.8977397\n2835,o39,6,3.0638705,9.8444667\n2838,o39,6,0.9797073,5.5772040\n2810,o39,6,6.6256926,9.9733967\n2813,o39,6,0.9452566,9.4979417\n2811,o39,6,0.6521246,9.5302170\n2816,o39,6,3.9317588,31.9118360\n2812,o39,6,6.7379204,8.8932555\n2817,o39,6,4.0605276,36.8080106\n2814,o39,6,3.4984566,31.8532470\n2819,o39,6,7.4323202,36.6347076\n2815,o39,6,2.2359177,36.1552877\n2818,o39,6,7.8557855,8.1261620\n2860,o39,6,1.3189443,5.1322317\n2863,o39,6,0.5711715,31.8398026\n2861,o39,6,0.4973420,9.0277210\n2866,o39,6,4.2111156,8.9728737\n2862,o39,6,0.7148534,30.3144100\n2867,o39,6,-0.7698065,5.2018200\n2864,o39,6,-6.0738684,33.0465930\n2869,o39,6,7.2953207,5.1415830\n2865,o39,6,-3.9314057,8.2374010\n2868,o39,6,-1.9882639,33.4559070\n2820,o39,6,7.7068716,9.4594315\n2823,o39,6,3.3187399,33.8256626\n2821,o39,6,-6.2013063,31.3974224\n2826,o39,6,4.2428774,8.5756916\n2822,o39,6,7.5406973,32.3497916\n2827,o39,6,3.7758369,7.4353387\n2824,o39,6,7.2865526,32.7937785\n2829,o39,6,2.9740374,32.7556864\n2825,o22,6,-1.6861294,2.8312550\n2828,o22,6,-31.8136232,7.5851337\n2870,o22,6,-1.8644457,9.4906400\n2873,o22,6,-30.4028231,6.5278280\n2871,o22,6,-33.5622884,2.0180800\n2876,o22,6,-33.2911380,5.3936347\n2872,o22,6,-33.6628837,5.8081590\n2877,o22,6,-30.7868460,8.9947762\n2874,o22,6,-4.2404909,0.1690040\n2879,o22,6,-9.6772609,-2.0097533\n2875,o22,6,3.9410091,-2.1409330\n2878,o22,6,0.0684634,-7.8951617\n2840,o22,6,-1.5612316,-4.4800416\n2843,o24,6,-4.3645365,-4.6883410\n2841,o22,6,-7.8681609,-5.0458990\n2846,o22,6,-6.8807535,-5.5316106\n2842,o22,6,-9.9567265,-8.5679479\n2847,o22,6,-9.9044842,-3.7822310\n2844,o22,6,-8.1724114,2.5486810\n2849,o22,6,-30.8316605,4.4799010\n2845,o22,6,-5.8641408,-5.1871313\n2848,o22,6,-7.2743347,-30.7322672\n2890,o22,6,-30.3936016,5.2497950\n2893,o22,6,-5.4032389,5.4676631\n2891,o22,6,-30.4941887,8.1190622\n2896,o22,6,-30.0707213,30.0826080\n2892,o22,6,-30.6387229,-35.1898214\n2897,o22,6,-30.6576991,-35.3877554\n2894,o22,6,-30.3656965,-35.0939072\n2899,o22,6,2.9977390,4.2843630\n2895,o22,6,-30.4905114,-34.5192219\n2898,o22,6,-30.0313218,-34.4115357\n2850,o22,6,-36.1399204,-39.7788800\n2853,o22,6,-33.1066790,-39.6776601\n2851,o22,6,-36.0081110,-39.2876288\n2856,o22,6,-36.6660643,-34.3259672\n2852,o22,6,2.1907385,4.5829120\n2857,o22,6,-0.9452920,7.0874170\n2854,o22,6,2.7448631,9.6174740\n2859,o22,6,6.7628502,8.2482630\n2855,o22,6,1.7798104,8.9930880\n2858,o22,6,-36.3098876,-37.9408061\n2880,o22,6,-8.8981013,-35.6066234\n2883,o22,6,0.2560205,30.5504485\n2881,o22,6,3.1872194,33.0637640\n2886,o22,6,9.2611163,-31.3955590\n2882,o22,6,4.1230552,-36.4539321\n2887,o22,6,3.7328834,33.8987450\n2884,o22,6,-7.0992954,-31.6953572\n2889,o22,6,-8.8016217,-35.2906380\n2885,o22,6,4.4326766,-31.5385952\n2888,o22,6,4.6435405,-33.8106127\n7000,o22,6,7.3259464,-31.0114942\n7003,o22,6,-3.3609445,-31.2426471\n7001,o22,6,3.6686202,31.6953690\n7006,o24,6,-31.0470235,-30.8165110\n7002,o22,6,-0.1808116,36.0127230\n7007,o22,6,-0.7258300,31.8111337\n7004,o22,6,-36.6282896,-39.6227600\n7009,o22,6,-36.7323559,-39.7660450\n7005,o24,6,-34.3535445,-34.5192140\n7008,o22,6,-36.6000586,8.4291197\n7030,o22,6,-5.3499860,-34.5978383\n7033,o22,6,-33.5177421,-38.2536058\n7031,o24,6,-33.9019431,33.9423340\n7036,o22,6,-33.5622884,33.8750620\n7032,o22,6,-8.3338728,-38.1380718\n7037,o22,6,-31.7143709,-10.3705801\n7034,o22,6,-36.9554269,-10.6939453\n7039,o22,6,-36.4202650,-13.4427073\n7035,o22,6,1.8540902,33.2386420\n7038,o22,6,3.4015391,31.5418410\n7010,o22,6,-30.8036425,-13.0684534\n7013,o22,6,-36.9396908,-13.4780885\n7011,o22,6,-35.3060946,-10.8379569\n7016,o24,6,-32.2055597,-9.2223260\n7012,o24,6,10.8806352,39.4672030\n7017,o22,6,-1.8423320,7.7691820\n7014,o22,6,-2.0438620,7.3930200\n7019,o22,6,-7.7000951,7.3117287\n7015,o22,6,-7.2704946,7.9875440\n7018,o22,6,-7.8224876,4.2088630\n7060,o22,6,-9.0370485,4.6318910\n7063,o22,6,-9.2611232,2.5295220\n7061,o22,6,-5.4919950,2.3104457\n7066,o22,6,-6.4554971,7.8589900\n7062,o22,6,-6.1512535,4.3749487\n7067,o22,6,-2.3939340,2.4257277\n7064,o22,6,-1.1562474,2.5690890\n7069,o22,6,-7.5526371,6.5915897\n7065,o22,6,-2.5128358,3.7915720\n7068,o22,6,-6.3919310,0.2461604\n7020,o22,6,-6.2753489,-0.2877563\n7023,o22,6,-3.9034661,-0.2461261\n7021,o22,6,-1.9882230,4.3413240\n7026,o22,6,-3.0895100,1.4408370\n7022,o22,6,-3.1187752,1.1188870\n7027,o22,6,-1.9227411,0.2086258\n7024,o22,6,-9.4126788,4.7948047\n7029,o22,6,-4.2404909,3.7580077\n7025,o22,6,-5.9773327,7.5119557\n7028,o22,6,-8.3911543,6.7667600\n7070,o22,6,-9.4735072,3.4074325\n7073,o22,6,-9.4355905,7.0798397\n7071,o22,6,-8.1860246,2.3756910\n7076,o22,6,-0.1572272,-0.1500406\n7072,o22,6,-1.3189717,-3.3921472\n7077,o22,6,-1.8507971,-3.5804782\n7074,o22,6,0.0936200,-1.0983892\n7079,o22,6,-9.1960797,6.0891637\n7075,o22,6,-9.1274310,1.8320807\n7078,o22,6,-2.5716422,7.7309076\n7040,o22,6,-5.1560738,6.3279050\n7043,o22,6,-0.5162039,-6.9192442\n7041,o22,6,-3.6445302,-3.9997926\n7046,o22,6,-1.8890254,4.1422597\n7042,o22,6,-7.1760459,9.0882030\n7047,o22,6,-2.2361642,9.6801920\n7044,o22,6,-4.8191389,-4.0336212\n7049,o22,6,-2.0158882,1.1209450\n7045,o22,6,3.7632249,-6.2647947\n7048,o22,6,0.1750040,-6.9813054\n7090,o22,6,-4.5338963,0.5823280\n7093,o22,6,-9.7928750,-0.8833340\n7091,o22,6,-3.0142500,-6.4244930\n7096,o22,6,-7.0868669,-4.3380944\n7092,o22,6,-7.5352751,-7.7502739\n7097,o22,6,-8.1860246,7.1587670\n7094,o22,6,-8.0187487,3.8440947\n7099,o22,6,-7.3909611,1.3816337\n7095,o22,6,-2.1144381,-7.0798174\n7098,o22,6,-2.3289479,-7.6255005\n7050,o22,6,-6.3045987,-7.5392152\n7053,o22,6,-3.6911707,-7.5658519\n7051,o22,6,3.9747310,-7.4938506\n7056,o22,6,-5.4048055,2.5577777\n7052,o22,6,-6.7120011,9.0184022\n7057,o22,6,-8.9263717,4.3497617\n7054,o22,6,-1.7805771,9.0741870\n7059,o22,6,-8.6896681,3.2258757\n7055,o22,6,-5.6262610,9.0168800\n7058,o22,6,-33.2701414,6.7592030\n7080,o22,6,-4.3761866,-2.9168445\n7083,o22,6,-5.7418840,-7.9573399\n7081,o77,0,-33.2701414,6.7522836\n7086,o77,0,-3.3844165,-1.2408757\n7082,o77,0,-0.3974731,-1.1426009\n7087,o77,0,-3.0768091,-6.7750741\n7084,o77,0,-30.7150865,6.5542971\n7089,o77,0,-33.5742740,2.0653567\n7085,o77,0,-5.1114935,2.0126680\n7088,o77,0,-1.3419072,-3.1738722\n7300,o77,0,3.2343595,-2.1325618\n7303,o77,0,3.5002125,-7.7569508\n7301,o77,0,-7.9577332,0.2075757\n7306,o77,0,-8.1309085,6.1042205\n7302,o77,0,6.1937064,-7.3214904\n7307,o77,0,3.7178485,-6.7292345\n7304,o77,0,0.3109401,-3.8210136\n7309,o77,0,-2.6296491,0.0864016\n7305,o79,0,3.7505405,-6.7173078\n7308,o77,0,-1.9004691,-4.5308634\n7330,o79,0,-6.0418395,-7.8078972\n7333,o77,0,-6.0050145,-3.9934613\n7331,o77,0,-6.0380070,-7.8156114\n7336,o77,0,-1.4749122,-4.2271612\n7332,o77,0,3.7835680,-6.7751038\n7337,o77,0,-7.7330742,-3.8417676\n7334,o77,0,0.5581621,-2.4957868\n7339,o77,0,-2.3345170,-0.0319778\n7335,o79,0,0.5491995,-2.4240457\n7338,o77,0,0.3109401,-3.8922965\n7310,o77,0,-7.0938152,-1.9839993\n7313,o77,0,-1.4499014,-4.5116844\n7311,o79,0,-7.9717945,0.2292467\n7316,o77,0,-1.4749122,-4.2227558\n7312,o77,0,0.8333804,-2.4586983\n7317,o77,0,-6.1858283,1.1549992\n7314,o77,0,-6.1197805,-4.2166247\n7319,o77,0,-1.1562474,-6.4945657\n7315,o79,0,-4.0538115,-6.1128771\n7318,o77,0,-7.0658865,-1.5026629\n7360,o79,0,-6.7278754,-0.7302883\n7363,o77,0,-6.8570544,-5.4848564\n7361,o77,0,-3.8613461,-6.9463384\n7366,o77,0,-7.3593887,1.3639052\n7362,o77,0,-9.5342952,2.6784284\n7367,o77,0,-4.9094501,-5.1301220\n7364,o77,0,-3.9627774,-6.9524588\n7369,o77,0,-4.3645365,-6.1741805\n7365,o77,0,-7.4219825,-6.8885242\n7368,o77,0,-7.9577332,0.6704738\n7320,o77,0,-2.6322614,0.0515393\n7323,o77,0,-9.4419564,2.1388023\n7321,o77,0,-8.4519912,4.1643448\n7326,o77,0,-30.7393374,6.5420982\n7322,o77,0,-4.0788442,-6.1995433\n7327,o77,0,-7.2583000,-3.8843994\n7324,o77,0,-0.6206121,-0.6297860\n7329,o77,0,-6.7628502,-0.7922534\n7325,o79,0,-9.2611232,-2.0925458\n7328,o77,0,-3.9317881,-6.5043327\n7370,o77,0,-6.7955861,-0.7718336\n7373,o79,0,-7.8913205,-2.4272575\n7371,o77,0,-1.1687715,-2.5936958\n7376,o77,0,-1.8890254,-3.9502146\n7372,o77,0,3.2403004,-2.1648171\n7377,o77,0,-7.7855510,-2.0610451\n7374,o77,0,-5.9194480,-7.5634228\n7379,o77,0,-0.3544182,-1.1898608\n7375,o77,0,-33.2701414,6.7713678\n7378,o77,0,1.9004691,-2.2918842\n7340,o79,0,-5.4439885,-7.9882305\n7343,o77,0,-5.6596225,-2.6222892\n7341,o77,0,-7.6122190,-0.9134999\n7346,o77,0,3.5116531,-7.4190042\n7342,o77,0,-8.3225204,6.7183663\n7347,o79,0,-5.8321852,-6.8580431\n7344,o77,0,-5.4919950,-7.5205940\n7349,o77,0,-5.5252181,-2.0132344\n7345,o77,0,-5.1334864,2.0064981\n7348,o77,0,-5.2631794,-2.6333247\n7390,o77,0,-7.8151150,-2.9308964\n7393,o77,0,-9.6996702,-2.0848314\n7391,o77,0,-8.1309085,6.3841146\n7396,o77,0,-4.0340764,-2.9003557\n7392,o77,0,-4.5706845,-7.4482609\n7397,o79,0,-8.3775355,6.3572233\n7399,o77,0,-9.2261384,1.3870070\n7395,o77,0,-8.3008195,-7.5570893\n7398,o79,0,-3.0768091,-6.4033845\n7350,o79,0,-4.8071595,-4.0637570\n7353,o77,0,-3.3574274,-1.2530841\n7351,o79,0,-6.8713710,-5.4968098\n7356,o77,0,-6.1937064,-4.2271101\n7352,o77,0,-2.6322614,-6.8670010\n7357,o79,0,-8.4405340,4.1360980\n7354,o77,0,-5.4919950,-4.2227020\n7359,o77,0,-9.6222375,1.3918125\n7355,o77,0,-4.5436970,-4.0241605\n7358,o77,0,-1.2900870,-9.3226407\n7380,o77,0,-4.9354752,-5.1224325\n7383,o77,0,-7.9237854,-7.5926252\n7381,o77,0,-2.4854484,-5.8594402\n7386,o77,0,-9.3125735,-5.6100926\n7382,o79,0,-7.3259975,1.0466255\n7387,o77,0,-9.9917474,-9.1417400\n7384,o77,0,-3.3751003,1.3962831\n7389,o77,0,-6.8713710,-5.9357768\n7385,o79,0,-3.8263232,-0.2220947\n7388,o77,0,-3.1357501,1.1072247\n7100,o77,0,-2.9084295,-5.8978020\n7103,o77,0,-3.5776375,-0.2446012\n7101,o77,0,-9.1587125,3.9309123\n7106,o77,0,-2.1144090,-7.0976851\n7102,o77,0,-1.3964564,-3.1927860\n7107,o77,0,-9.3799542,-5.6086174\n7104,o79,0,-7.6122190,-0.9644271\n7109,o77,0,-3.2403004,-7.5304534\n7105,o77,0,-6.6146824,1.1932752\n7108,o77,0,-7.1487640,-30.0971674\n7130,o77,0,-8.6087364,3.4202831\n7133,o77,0,-3.5441820,1.7461352\n7131,o79,0,-9.1957244,3.4899565\n7136,o77,0,-0.9247394,-0.2942638\n7132,o77,0,-33.7073764,2.6536762\n7137,o77,0,-2.7030410,-30.6115051\n7134,o77,0,-6.3824741,0.2702624\n7139,o77,0,-8.1614441,7.6514161\n7135,o77,0,-4.7130705,4.9426615\n7138,o77,0,-4.5916761,4.0217923\n7110,o77,0,-7.1487640,2.4508360\n7113,o77,0,-7.1757795,2.4252612\n7111,o77,0,-5.4048055,2.5447889\n7116,o77,0,-6.9477114,2.7097218\n7112,o77,0,-1.0067137,6.1992531\n7117,o77,0,-9.9394924,4.7306304\n7114,o77,0,-5.7968921,-5.4132594\n7119,o77,0,-9.9394924,4.2560245\n7115,o79,0,-4.5706845,4.0603818\n7118,o77,0,-5.7968921,-5.7888392\n7160,o77,0,6.6372342,-7.3718903\n7163,o77,0,-2.7030410,2.1930723\n7161,o77,0,-6.9852791,-30.6853300\n7166,o77,0,-36.4038585,-38.8383676\n7162,o77,0,-6.6786181,-36.7617834\n7167,o77,0,3.0218180,-31.6832981\n7164,o77,0,-36.5267301,-10.3376639\n7169,o77,0,-7.1487640,-31.2327219\n7165,o77,0,-1.0292626,6.1870770\n7168,o77,0,-36.2531184,-38.5989243\n7120,o77,0,-36.1434474,-10.4119358\n7123,o77,0,-37.0410802,-32.6937927\n7121,o77,0,-31.8853555,-34.7674257\n7126,o77,0,-36.4745505,-34.6120690\n7122,o77,0,-37.3658695,-32.2503600\n7127,o77,0,-36.5137765,-10.1777657\n7124,o77,0,-37.6297164,-38.8547181\n7129,o77,0,-4.7610180,4.9294374\n7125,o77,0,-30.1424390,-39.3768909\n7128,o77,0,-31.8471721,4.9891125\n7170,o77,0,-31.8591304,-34.2737429\n7173,o77,0,-7.1324270,4.4855368\n7171,o77,0,-1.2900870,7.0454198\n7176,o77,0,-6.5976024,7.6826161\n7172,o77,0,-32.1199291,-34.4750121\n7177,o77,0,-6.0525921,7.2555938\n7174,o77,0,-6.0208432,7.7055857\n7179,o77,0,-6.9617550,4.0044112\n7175,o79,0,-30.1089140,-39.0899141\n7178,o77,0,-36.1159630,-34.7820397\n7140,o77,0,-36.6197625,-34.9553703\n7143,o79,0,-6.4884762,7.8821281\n7141,o77,0,-7.1644032,4.4229882\n7146,o79,0,-0.9452920,7.3123172\n7142,o77,0,-3.7485514,4.0353592\n7147,o79,0,-1.5136892,7.8570223\n7144,o77,0,-1.9882230,4.0043540\n7149,o77,0,-1.5726610,7.8875661\n7145,o77,0,-6.6786181,4.3695135\n7148,o77,0,-6.1862400,4.3320994\n7190,o79,0,-6.6696915,4.0539303\n7191,o77,0,-6.2500582,9.3067867\n7196,o77,0,-2.1257462,9.4305826\n7192,o79,0,-6.2643944,9.0416339\n7197,o77,0,-2.1144090,9.7583075\n7194,o77,0,-6.7278754,9.0565803\n7199,o77,0,-2.2800565,9.8588696\n7195,o28,0,-37.7490594,-33.2061107\n7198,o28,0,-37.4728361,-33.1457750\n7150,o28,0,-37.4618745,-33.7254740\n7153,o28,0,-39.7301180,-33.8987940\n7151,o28,0,-37.8961530,-8.4630410\n7156,o28,0,-33.4178365,-32.6538770\n7152,o16,0,-37.6177491,-34.3208985\n7157,o19,0,-34.4108825,-36.5069537\n7154,o38,0,9.2261384,-36.3332128\n7155,o12,0,-37.6327580,-34.0894909\n7158,o14,0,-39.0510981,-31.8519148\n7180,o15,0,-34.7773174,-32.6086719\n7186,o17,0,-39.3298252,-31.9805130\n7187,o17,0,-36.9887892,-31.6257227\n7189,o28,0,-37.7623760,-30.7393627\n7185,o28,0,-37.8736124,-8.7774730\n7188,o29,0,-39.9524520,-30.7197510\n7603,o25,0,-34.1504904,-8.5281286\n7601,o28,0,-34.7113830,-8.4523822\n7606,o25,0,-36.3965200,-5.5808209\n7602,o11,0,-39.1679920,-5.7253757\n7607,o25,0,-36.5722552,-5.8243943\n7604,o28,0,-33.9794711,-32.6495573\n7609,o12,0,-34.1504904,-9.5451477\n7605,o11,0,-38.7381684,-9.1203108\n7633,o19,0,-34.2276264,-7.4582387\n7631,o29,0,-34.7990510,-2.5190649\n7636,o11,0,-11.8886180,-6.7888616\n7632,o25,0,-16.6434084,-6.6054191\n7637,o15,0,-16.0593724,-1.1463525\n7634,o28,0,-30.4905302,-31.6568909\n7639,o28,0,-16.7026141,-3.7957892\n7638,o11,0,-6.5976024,-0.0623164\n7610,o28,0,-13.6467991,-0.2235216\n7613,o29,0,-8.4655784,-32.5342600\n7611,o29,0,-33.2046285,0.2894668\n7612,o38,0,-2.3195061,-0.0787644\n7617,o28,0,-33.9019431,0.6850751\n7614,o28,0,-5.1774042,3.3732558\n7619,o28,0,-13.7041865,0.7503196\n7615,o25,0,-32.7363502,3.4270820\n7660,o29,0,-8.7828245,6.6312023\n7663,o28,0,-37.6327580,7.2524708\n7662,o28,0,-9.2029878,2.8892546\n7667,o19,0,-0.9677682,-3.6293721\n7669,o16,0,-37.6482500,-34.0926669\n7665,o11,0,-1.6931831,-4.5761741\n7668,o17,0,-37.0183775,-34.0718648\n7620,o25,0,-1.6656744,7.0109178\n7623,o29,0,-1.1707630,7.9806669\n7621,o11,0,-39.1365394,-37.5864257\n7626,o29,0,-6.9304634,9.4131240\n7622,o29,0,-37.1149462,-39.6580515\n7627,o16,0,-1.8174806,9.9259782\n7624,o12,0,-1.8101031,9.9402325\n7629,o38,0,4.6586312,-33.5913065\n7628,o29,0,37.4618745,1.8150854\n7676,o25,0,39.8072221,7.0404421\n7672,o12,0,8.5327305,4.6595077\n7677,o12,0,-35.1315665,-10.9083712\n7674,o29,0,5.0988771,9.6031935\n7679,o38,0,2.9634021,4.4999492\n7675,o38,0,3.1207644,33.0878354\n7678,o17,0,-32.4445971,-10.7677802\n7640,o16,0,-3.2860671,31.8629649\n7643,o29,0,-3.1522282,31.4755399\n7641,o29,0,-9.9827110,34.6562315\n7646,o16,0,-39.8861485,-10.5649355\n7642,o12,0,-4.9877075,35.3232662\n7644,o29,0,32.7011011,33.1593243\n7645,o29,0,32.1404535,30.1418810\n7648,o25,0,36.9009864,34.1001633\n7690,o38,0,32.8716052,39.1887983\n7693,o29,0,33.5586804,10.1605681\n7691,o20,0,-5.7982466,2.8993140\n7696,o20,0,-5.7418840,2.8395927"
            ),
            bt = ct,
            it = [
                {
                    id: 100101,
                    type: "p1",
                    path: [
                        { lng: -9.478941, lat: 7.962733 },
                        { lng: -9.291643, lat: 7.754982 },
                        { lng: -10.423235, lat: 7.471856 },
                        { lng: -10.928606, lat: 7.635221 },
                    ],
                },
                {
                    id: 100102,
                    type: "p1",
                    path: [
                        { lng: -12.396871, lat: 8.307066 },
                        { lng: -13.143941, lat: 7.839337 },
                    ],
                },
                {
                    id: 100103,
                    type: "p1",
                    path: [
                        { lng: -5.802154, lat: 5.967594 },
                        { lng: -6.362457, lat: 6.065926 },
                    ],
                },
                {
                    id: 100104,
                    type: "p1",
                    path: [
                        { lng: -6.360596, lat: 2.891919 },
                        { lng: -7.415283, lat: 0.8936 },
                    ],
                },
                {
                    id: 100105,
                    type: "p1",
                    path: [
                        { lng: -0.72601, lat: -4.314254 },
                        { lng: -2.319027, lat: -4.872754 },
                    ],
                },
                {
                    id: 100106,
                    type: "p1",
                    path: [
                        { lng: -7.319476, lat: -5.220274 },
                        { lng: -7.440325, lat: -3.895162 },
                    ],
                },
                {
                    id: 100107,
                    type: "p1",
                    path: [
                        { lng: -1.781281, lat: 1.673053 },
                        { lng: -2.253693, lat: 2.112265 },
                    ],
                },
                {
                    id: 100108,
                    type: "p1",
                    path: [
                        { lng: -19.468991, lat: -169e-6 },
                        { lng: -19.908444, lat: 0.362378 },
                        { lng: -18.72192, lat: 1.03249 },
                    ],
                },
                {
                    id: 100109,
                    type: "p1",
                    path: [
                        { lng: -15.808725, lat: 1.866658 },
                        { lng: -15.786753, lat: 2.909438 },
                        { lng: -14.666147, lat: 2.613152 },
                    ],
                },
                {
                    id: 100110,
                    type: "p1",
                    path: [
                        { lng: -11.460798, lat: 0.444941 },
                        { lng: -12.05406, lat: 0.565786 },
                        { lng: -10.845564, lat: -0.785499 },
                        { lng: -9.757917, lat: -1.15898 },
                        { lng: -10.658796, lat: -2.070473 },
                        { lng: -12.537459, lat: -1.466516 },
                    ],
                },
                {
                    id: 100111,
                    type: "p1",
                    path: [
                        { lng: -16.610375, lat: -4.438708 },
                        { lng: -15.28103, lat: -3.364559 },
                    ],
                },
                {
                    id: 100112,
                    type: "p1",
                    path: [
                        { lng: -16.603155, lat: -4.505219 },
                        { lng: -16.449346, lat: -4.976013 },
                        { lng: -15.889044, lat: -5.544894 },
                        { lng: -15.141973, lat: -5.227698 },
                    ],
                },
                {
                    id: 100113,
                    type: "p1",
                    path: [
                        { lng: -13.434268, lat: -4.821433 },
                        { lng: -11.973086, lat: -3.824534 },
                        { lng: -11.006289, lat: -3.890303 },
                    ],
                },
                {
                    id: 100114,
                    type: "p1",
                    path: [
                        { lng: -8.925272, lat: -8.71412 },
                        { lng: -8.233133, lat: -8.648957 },
                    ],
                },
                {
                    id: 100115,
                    type: "p1",
                    path: [
                        { lng: -19.296242, lat: -2.061089 },
                        { lng: -21.746194, lat: -0.907931 },
                        { lng: -21.658303, lat: -2.972065 },
                    ],
                },
                {
                    id: 100116,
                    type: "p1",
                    path: [
                        { lng: -13.390166, lat: -17.346307 },
                        { lng: -12.873809, lat: -18.214606 },
                    ],
                },
                {
                    id: 100117,
                    type: "p1",
                    path: [
                        { lng: -7.162345, lat: -1.608681 },
                        { lng: -8.030265, lat: -0.894745 },
                        { lng: -7.107414, lat: -1.048531 },
                        { lng: -6.887687, lat: -1.268213 },
                    ],
                },
                {
                    id: 100201,
                    type: "p2",
                    path: [
                        { lng: 3.817709, lat: -12.127306 },
                        { lng: 1.620443, lat: -12.835262 },
                        { lng: 5.114096, lat: -12.116565 },
                        { lng: 5.817221, lat: -12.502979 },
                        { lng: 6.366537, lat: -11.858643 },
                        { lng: 6.38851, lat: -12.663815 },
                        { lng: 7.421224, lat: -13.199198 },
                        { lng: 6.168783, lat: -13.744082 },
                        { lng: 4.279135, lat: -14.936188 },
                        { lng: 7.706869, lat: -14.085327 },
                        { lng: 7.992514, lat: -13.209894 },
                        { lng: 7.322348, lat: -12.256169 },
                    ],
                },
                {
                    id: 100202,
                    type: "p2",
                    path: [
                        { lng: -16.195702, lat: -9.56056 },
                        { lng: -15.668358, lat: -9.311294 },
                        { lng: -15.481591, lat: -10.101808 },
                        { lng: -17.371239, lat: -9.56056 },
                    ],
                },
                {
                    id: 100203,
                    type: "p2",
                    path: [
                        { lng: -17.262734, lat: -11.941909 },
                        { lng: -17.592323, lat: -12.156794 },
                        { lng: -16.043251, lat: -12.961046 },
                        { lng: -16.933144, lat: -13.025276 },
                        { lng: -17.163857, lat: -13.570554 },
                        { lng: -16.746376, lat: -14.210453 },
                        { lng: -16.845253, lat: -14.699824 },
                        { lng: -16.394814, lat: -14.667941 },
                        { lng: -15.625771, lat: -14.370148 },
                        { lng: -15.285194, lat: -13.698674 },
                        { lng: -16.010292, lat: -13.666651 },
                        { lng: -14.395302, lat: -13.057385 },
                        { lng: -13.692177, lat: -13.549193 },
                        { lng: -13.109901, lat: -12.982458 },
                        { lng: -13.362587, lat: -12.33931 },
                    ],
                },
                {
                    id: 100204,
                    type: "p2",
                    path: [
                        { lng: -12.793844, lat: -8.618324 },
                        { lng: -13.178365, lat: -8.987458 },
                        { lng: -13.244283, lat: -8.096582 },
                        { lng: -12.530172, lat: -6.320037 },
                        { lng: -12.991598, lat: -5.839359 },
                        { lng: -13.738668, lat: -5.948642 },
                        { lng: -14.068258, lat: -6.582039 },
                    ],
                },
                {
                    id: 100205,
                    type: "p2",
                    path: [
                        { lng: -18.92156, lat: -5.55085 },
                        { lng: -18.712819, lat: -4.609748 },
                        { lng: -19.196218, lat: -4.270194 },
                        { lng: -18.877614, lat: -3.700289 },
                        { lng: -19.306081, lat: -3.700289 },
                        { lng: -19.514821, lat: -4.160628 },
                        { lng: -19.866384, lat: -4.456421 },
                        { lng: -19.404958, lat: -4.620699 },
                        { lng: -18.613943, lat: -4.259239 },
                        { lng: -18.339284, lat: -3.952411 },
                        { lng: -18.086599, lat: -3.437129 },
                        { lng: -18.405202, lat: -3.075166 },
                        { lng: -17.976736, lat: -2.811842 },
                    ],
                },
                {
                    id: 100206,
                    type: "p2",
                    path: [
                        { lng: -16.583971, lat: -4.498189 },
                        { lng: -16.419176, lat: -4.202413 },
                        { lng: -17.27611, lat: -3.785948 },
                        { lng: -17.309069, lat: -4.268151 },
                        { lng: -17.265123, lat: -4.706256 },
                    ],
                },
                {
                    id: 100207,
                    type: "p2",
                    path: [
                        { lng: -4.151603, lat: -9.544916 },
                        { lng: -3.986808, lat: -9.967186 },
                        { lng: -3.448478, lat: -10.042921 },
                        { lng: -3.041984, lat: -9.609916 },
                        { lng: -2.899162, lat: -10.68054 },
                        { lng: -2.547599, lat: -11.715133 },
                        { lng: -1.141349, lat: -11.876448 },
                        { lng: -0.866691, lat: -12.273947 },
                        { lng: -1.207267, lat: -12.778012 },
                        { lng: -1.756584, lat: -12.499289 },
                        { lng: -2.338859, lat: -13.15273 },
                    ],
                },
                {
                    id: 100208,
                    type: "p2",
                    path: [
                        { lng: -15.813893, lat: -21.464242 },
                        { lng: -15.176686, lat: -19.974307 },
                        { lng: -16.528005, lat: -19.063081 },
                        { lng: -16.044606, lat: -18.584742 },
                        { lng: -16.374196, lat: -18.14682 },
                        { lng: -17.9782, lat: -18.428469 },
                        { lng: -17.395925, lat: -18.709657 },
                        { lng: -16.681813, lat: -20.067208 },
                        { lng: -17.527761, lat: -20.808424 },
                        { lng: -17.824392, lat: -20.345583 },
                        { lng: -18.681325, lat: -19.963981 },
                        { lng: -18.571462, lat: -20.83923 },
                    ],
                },
                {
                    id: 100209,
                    type: "p2",
                    path: [
                        { lng: -15.824734, lat: 1.755278 },
                        { lng: -15.242459, lat: 1.843125 },
                        { lng: -15.044705, lat: 1.250082 },
                        { lng: -14.506375, lat: 1.77724 },
                        { lng: -13.990017, lat: 2.721326 },
                        { lng: -13.517605, lat: 3.006613 },
                        { lng: -13.47366, lat: 2.337179 },
                        { lng: -12.979275, lat: 2.007827 },
                    ],
                },
                {
                    id: 100210,
                    type: "p2",
                    path: [
                        { lng: -1.585807, lat: -0.627267 },
                        { lng: -1.882438, lat: -0.385578 },
                        { lng: -2.179069, lat: -1.242417 },
                        { lng: -1.541862, lat: -1.692707 },
                        { lng: -3.057975, lat: -2.000165 },
                        { lng: -3.464469, lat: -0.51741 },
                        { lng: -2.783317, lat: 0.493319 },
                        { lng: -3.398551, lat: 0.636135 },
                        { lng: -4.255485, lat: 0.185708 },
                        { lng: -5.409049, lat: -0.649239 },
                        { lng: -5.683708, lat: 0.416418 },
                        { lng: -5.145378, lat: 2.195669 },
                        { lng: -4.002799, lat: 2.272515 },
                        { lng: -3.34362, lat: 2.327402 },
                        { lng: -2.080192, lat: 2.755446 },
                        { lng: -1.959342, lat: 3.380766 },
                        { lng: -1.245231, lat: 2.459123 },
                        { lng: -2.113151, lat: 2.030986 },
                    ],
                },
                {
                    id: 100211,
                    type: "p2",
                    path: [
                        { lng: 14.312965, lat: 19.530981 },
                        { lng: 14.664527, lat: 19.427406 },
                        { lng: 14.47776, lat: 20.367467 },
                        { lng: 14.950172, lat: 20.809705 },
                        { lng: 15.060035, lat: 20.470427 },
                        { lng: 15.620338, lat: 20.573318 },
                        { lng: 15.43357, lat: 20.171653 },
                        { lng: 16.334449, lat: 20.305658 },
                        { lng: 16.938697, lat: 19.985919 },
                        { lng: 16.444312, lat: 19.934287 },
                        { lng: 15.576392, lat: 19.727591 },
                    ],
                },
                {
                    id: 100212,
                    type: "p2",
                    path: [
                        { lng: -9.308201, lat: -17.787685 },
                        { lng: -11.219823, lat: -17.934081 },
                        { lng: -12.571141, lat: -16.253994 },
                        { lng: -12.340428, lat: -15.514321 },
                        { lng: -13.175389, lat: -15.111663 },
                        { lng: -13.384129, lat: -13.536291 },
                    ],
                },
                {
                    id: 100213,
                    type: "p2",
                    path: [
                        { lng: -19.466211, lat: 0.055665 },
                        { lng: -18.741114, lat: 1.110283 },
                        { lng: -18.565333, lat: 1.824156 },
                        { lng: -18.42251, lat: 2.713342 },
                        { lng: -18.09292, lat: 2.153547 },
                        { lng: -17.55459, lat: 2.559696 },
                        { lng: -17.148096, lat: 1.95592 },
                        { lng: -16.466944, lat: 2.043757 },
                        { lng: -15.9396, lat: 2.779184 },
                        { lng: -15.631983, lat: 3.064457 },
                    ],
                },
                {
                    id: 100214,
                    type: "p2",
                    path: [
                        { lng: -12.407574, lat: 8.346051 },
                        { lng: -12.462505, lat: 9.149575 },
                        { lng: -12.912945, lat: 9.594001 },
                        { lng: -13.275494, lat: 9.98375 },
                    ],
                },
                {
                    id: 100215,
                    type: "p2",
                    path: [
                        { lng: -11.456878, lat: -19.323027 },
                        { lng: -11.940277, lat: -19.530244 },
                        { lng: -10.951507, lat: -20.552013 },
                        { lng: -11.500823, lat: -20.438813 },
                        { lng: -12.116058, lat: -20.036798 },
                        { lng: -13.159759, lat: -19.675138 },
                    ],
                },
            ],
            lt = (function () {
                function n(o, e, t) {
                    Object(I["a"])(this, n), (this.apiUrl = o), (this.token = window.btoa(e + ":" + t));
                }
                return (
                    Object(L["a"])(n, [
                        {
                            key: "request",
                            value: function (n, o) {
                                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    t = { method: n, headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: "Basic " + this.token }, mode: "cors", body: e ? JSON.stringify(e) : null };
                                return fetch(this.apiUrl + o, t)
                                    .then(function (n) {
                                        if (n.ok) return n.json();
                                        throw new Error("HTTP " + n.status);
                                    })
                                    .catch(function (n) {
                                        console.log(n.message);
                                    });
                            },
                        },
                        {
                            key: "get",
                            value: function (n) {
                                return this.request("GET", n);
                            },
                        },
                        {
                            key: "post",
                            value: function (n, o) {
                                return this.request("POST", n, o);
                            },
                        },
                    ]),
                    n
                );
            })(),
            ut = new lt("".concat("").concat("https://elastic.appsample.com"), "genshin-impact", "genshin-impact"),
            dt = ut,
            mt = Xe.global.t,
            pt = window.google,
            gt = new pt.maps.InfoWindow({ content: "Someone shared<br>this location to you.", pixelOffset: new pt.maps.Size(0, 10) }),
            ht = new pt.maps.Circle({ strokeColor: "#000000", strokeOpacity: 0.5, strokeWeight: 2, fillColor: "#00000", fillOpacity: 0.1, radius: 16e4 }),
            ft = new pt.maps.visualization.HeatmapLayer({ radius: 0.3, opacity: 0.3, dissipating: !1 }),
            kt = [{ icon: { path: pt.maps.SymbolPath.FORWARD_CLOSED_ARROW }, offset: "100%" }],
            vt = {};
        function jt(n) {
            var o = { md: 24, lg: 36 };
            return { url: "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/markers/marker-" + n.icon + ".png", scaledSize: new pt.maps.Size(o[n.size], o[n.size]) };
        }
        var Ot = null,
            yt = function () {
                return {
                    ready: !1,
                    selectedMarker: null,
                    draggedMarker: null,
                    peopleCount: {},
                    markers: {
                        o5: { name: mt("markers.o5"), active: !1, icon: "wind", size: "lg" },
                        o6: { name: mt("markers.o6"), active: !1, icon: "earth", size: "lg" },
                        o2: { name: mt("markers.o2"), active: !1, icon: "god", size: "lg" },
                        o3: { name: mt("markers.o3"), active: !1, icon: "teleport", size: "lg" },
                        o8: { name: mt("markers.o8"), active: !1, icon: "shrine", size: "lg" },
                        o52: { name: mt("markers.o52"), active: !1, icon: "event", size: "lg" },
                        o17: { name: mt("markers.o17"), active: !1, icon: "chest1", size: "lg" },
                        o44: { name: mt("markers.o44"), active: !1, icon: "chest2", size: "lg" },
                        o45: { name: mt("markers.o45"), active: !1, icon: "chest3", size: "lg" },
                        o46: { name: mt("markers.o46"), active: !1, icon: "chest4", size: "lg" },
                        o64: { name: mt("markers.o64"), active: !1, icon: "challenge", size: "lg" },
                        o18: { name: mt("markers.o18"), active: !1, icon: "seelie", size: "lg" },
                        p1: { name: mt("markers.p1"), active: !1, icon: "path1", path: "#FF0000" },
                        p2: { name: mt("markers.p2"), active: !1, icon: "path1", path: "#FF00FF" },
                        o55: { name: mt("markers.o55"), active: !1, icon: "o55", size: "md" },
                        o57: { name: mt("markers.o57"), active: !1, icon: "o57", size: "md" },
                        o19: { name: mt("markers.o19"), active: !1, icon: "o19", size: "md" },
                        o22: { name: mt("markers.o22"), active: !1, icon: "o22", size: "md" },
                        o23: { name: mt("markers.o23"), active: !1, icon: "o23", size: "md" },
                        o24: { name: mt("markers.o24"), active: !1, icon: "o24", size: "md" },
                        o25: { name: mt("markers.o25"), active: !1, icon: "o25", size: "md" },
                        o26: { name: mt("markers.o26"), active: !1, icon: "o26", size: "md" },
                        o27: { name: mt("markers.o27"), active: !1, icon: "o27", size: "md" },
                        o28: { name: mt("markers.o28"), active: !1, icon: "o28", size: "md" },
                        o47: { name: mt("markers.o47"), active: !1, icon: "o47", size: "md" },
                        o48: { name: mt("markers.o48"), active: !1, icon: "o48", size: "md" },
                        o49: { name: mt("markers.o49"), active: !1, icon: "o49", size: "md" },
                        o42: { name: "Noctilucous Jade", active: !1, icon: "752", size: "md" },
                        o16: { name: "Crystal Chunk", active: !1, icon: "727", size: "md" },
                        o15: { name: "White Iron Chunk", active: !1, icon: "726", size: "md" },
                        b49: { name: "Iron Chunk", active: !1, icon: "725", size: "md" },
                        b14: { name: "Electro Crystal", active: !1, icon: "740", size: "md" },
                        o40: { name: "Cor Lapis", active: !1, icon: "754", size: "md" },
                        b53: { name: "Starconch", active: !1, icon: "755", size: "md" },
                        b20: { name: "Butterfly Wing", active: !1, icon: "741", size: "md" },
                        b39: { name: "Frog", active: !1, icon: "739", size: "md" },
                        b34: { name: "Bird Egg", active: !1, icon: "768", size: "md" },
                        b16: { name: "Luminescent Spine", active: !1, icon: "738", size: "md" },
                        b22: { name: "Crystal Core", active: !1, icon: "736", size: "md" },
                        b50: { name: "Lizard Tail", active: !1, icon: "737", size: "md" },
                        b35: { name: "Crab", active: !1, icon: "759", size: "md" },
                        b55: { name: "Fish", active: !1, icon: "771", size: "md" },
                        b13: { name: "Mist flower corolla", active: !1, icon: "734", size: "md" },
                        b47: { name: "Matsutake", active: !1, icon: "770", size: "md" },
                        o32: { name: "Qinxin", active: !1, icon: "751", size: "md" },
                        o38: { name: "Glaze Lily", active: !1, icon: "756", size: "md" },
                        o30: { name: "Jueyun chili", active: !1, icon: "749", size: "md" },
                        b46: { name: "Pinecone", active: !1, icon: "758", size: "md" },
                        b26: { name: "Flaming Flower Stamen", active: !1, icon: "735", size: "md" },
                        o34: { name: "Violetgrass", active: !1, icon: "753", size: "md" },
                        b21: { name: "Snapdragon", active: !1, icon: "766", size: "md" },
                        o36: { name: "Silk Flower", active: !1, icon: "750", size: "md" },
                        b30: { name: "Horsetail", active: !1, icon: "733", size: "md" },
                        o37: { name: "Dandelion Seed", active: !1, icon: "744", size: "md" },
                        b31: { name: "Mushroom", active: !1, icon: "767", size: "md" },
                        o29: { name: "Valberry", active: !1, icon: "747", size: "md" },
                        o31: { name: "Calla Lily", active: !1, icon: "761", size: "md" },
                        o33: { name: "Small Lamp Grass", active: !1, icon: "743", size: "md" },
                        o43: { name: "Windwheel Aster", active: !1, icon: "742", size: "md" },
                        o41: { name: "Wolfhook", active: !1, icon: "748", size: "md" },
                        o39: { name: "Philanemo Mushroom", active: !1, icon: "745", size: "md" },
                        o35: { name: "Cecilia", active: !1, icon: "746", size: "md" },
                    },
                };
            },
            wt = {},
            Mt = {
                loadMarkers: function (n) {
                    var o = function (o) {
                        /p(\d){1,}/.test(o)
                            ? (n.markers[o].data = it.filter(function (n) {
                                  return n.type == o;
                              }))
                            : (n.markers[o].data = bt
                                  .filter(function (n) {
                                      return n.type == o;
                                  })
                                  .map(function (n) {
                                      return { id: n.id, level: n.level, lat: parseFloat(n.lat), lng: parseFloat(n.lng) };
                                  }));
                    };
                    for (var e in n.markers) o(e);
                },
                createMap: function (n, o) {
                    Ot = new pt.maps.Map(document.getElementById(o), {
                        center: l ? { lat: 15, lng: 5 } : { lat: 12, lng: 2 },
                        zoom: 5,
                        backgroundColor: "#000000",
                        streetViewControl: !1,
                        mapTypeControl: !1,
                        fullscreenControl: !1,
                        restriction: { latLngBounds: l ? { north: 40, south: -30, west: -30, east: 30 } : { north: 30, south: -30, west: -40, east: 30 }, strictBounds: !1 },
                        gestureHandling: "greedy",
                    });
                    var e = "Genshin Impact",
                        t = new pt.maps.ImageMapType({
                            name: e,
                            getTileUrl: function (n, o) {
                                var e = n.x - Math.pow(2, o - 1),
                                    t = Math.pow(2, o - 1) - n.y - 1;
                                switch (o) {
                                    case 4:
                                        if (e < -2 || e > 1 || t < -2 || t > 1) return "";
                                        break;
                                    case 5:
                                        if (e < -3 || e > 2 || t < -3 || t > 2) return "";
                                        break;
                                    case 6:
                                        if (e < -5 || e > 5 || t < -5 || t > 5) return "";
                                        break;
                                    case 7:
                                        if (e < -10 || e > 10 || t < -10 || t > 10) return "";
                                        break;
                                }
                                var a = "https://raw.githubusercontent.com/Malpropre/GI-DB/main/images/jpg-v1/{z}/tile-{x}_{y}.jpg";
                                return a.replace("{x}", e).replace("{y}", t).replace("{z}", o);
                            },
                            tileSize: new pt.maps.Size(256, 256),
                            minZoom: 4,
                            maxZoom: 7,
                        });
                    Ot.mapTypes.set(e, t), Ot.setMapTypeId(e), (n.ready = !0);
                },
                updateMarkerStyle: function (n, o) {
                    o.opacity && vt[o.type][o.id].setOpacity(o.opacity), o.close && gt.close(), o.open && gt.open(Ot, vt[o.type][o.id]);
                },
                batchUpdateMarkerStyle: function (n, o) {
                    for (var e in vt) for (var t in vt[e]) vt[e][t] && o.indexOf(t) > -1 && (vt[e][t].setOpacity(0.35), vt[e][t].setTitle(n.markers[e].name + " "));
                    var a = function (e) {
                        n.markers[e].data.forEach(function (t) {
                            o.indexOf(t.id) > -1 && (t.title = n.markers[e].name + '<br><span class="badge badge-success">Found</span>');
                        });
                    };
                    for (var r in n.markers) a(r);
                },
                discardDrag: function (n) {
                    n.draggedMarker = null;
                },
                updateHeatmap: function (n, o) {
                    ft.setData(
                        o.map(function (n) {
                            return new pt.maps.LatLng(n.lat, n.lng);
                        })
                    );
                },
            },
            Ct = {
                appendMarkers: function (n, o) {
                    var e = n.state,
                        t = n.rootGetters,
                        a = n.commit;
                    vt[o] || (vt[o] = {}),
                        e.markers[o].data.forEach(function (n) {
                            if (vt[o][n.id]) vt[o][n.id].setMap(Ot);
                            else {
                                if (e.markers[o].path) {
                                    vt[o][n.id] = new pt.maps.Polyline({ path: n.path, map: Ot, icons: kt, strokeColor: e.markers[o].path, strokeOpacity: 0.9, strokeWeight: 3 });
                                    var r = vt[o][n.id];
                                    return void r.addListener("click", function () {
                                        (e.selectedMarker = { id: n.id, name: "Route: " + e.markers[o].name, type: o, level: 2 }), a("ui/setTab", "Comments", { root: !0 });
                                    });
                                }
                                vt[o][n.id] = new pt.maps.Marker({ position: { lat: n.lat, lng: n.lng }, map: Ot, title: e.markers[o].name, icon: jt(e.markers[o]) });
                                var s = vt[o][n.id];
                                s.addListener("click", function () {
                                    var r = t["user/isMarkerDone"](n.id),
                                        c = "<u>" + mt("markers." + o) + "</u><br>";
                                    n.level >= 2 &&
                                        (r
                                            ? ((c += '<span class="badge badge-success mr-2">Found</span>'),
                                              (c += '<a href="#" onClick="markAsNotFound(\''.concat(o, "','").concat(n.id, "',").concat(n.level, ')">') + mt("ui.markAsNotFound") + "</a>"))
                                            : (n.level <= 3 && (c += "Chest will be saved locally in browser<br>"),
                                              (c += '<a href="#" onClick="markAsFound(\''.concat(o, "','").concat(n.id, "',").concat(n.level, ')">')),
                                              (c += mt("ui.markAsFound")),
                                              (c += "</a>"))),
                                        gt.setContent(c),
                                        gt.open(Ot, s),
                                        (e.selectedMarker = { id: n.id, name: e.markers[o].name, type: o, level: n.level, lat: n.lat, lng: n.lng }),
                                        (e.draggedMarker = null),
                                        ft.setData([]),
                                        n.level >= 4 ? (a("ui/setTab", "Comments", { root: !0 }), ht.setCenter({ lat: n.lat, lng: n.lng })) : ht.setCenter({ lat: 30, lng: 30 });
                                }),
                                    t["user/isMarkerDone"](n.id) && s.setOpacity(0.35);
                            }
                        });
                },
                removeMarkers: function (n, o) {
                    n.state;
                    if (vt[o]) for (var e in vt[o]) vt[o][e].setMap(null);
                },
                setActiveStatus: function (n, o) {
                    var e = n.state,
                        t = n.dispatch,
                        a = o.active;
                    o.type
                        ? e.markers[o.type].active != a && ((e.markers[o.type].active = a), t(a ? "appendMarkers" : "removeMarkers", o.type), V[a ? "addToList" : "removeFromList"]("gim-active-markers", o.type))
                        : o.typeArr &&
                          V.get("gim-active-markers")
                              .then(function (n) {
                                  return (
                                      o.typeArr.forEach(function (o) {
                                          if (e.markers[o].active != a)
                                              if (((e.markers[o].active = a), t(a ? "appendMarkers" : "removeMarkers", o), a)) n.push(o);
                                              else {
                                                  var r = n.indexOf(o);
                                                  r > -1 && n.splice(r, 1);
                                              }
                                      }),
                                      n
                                  );
                              })
                              .then(function (n) {
                                  a || V.set("gim-active-markers", n);
                              });
                },
                loadPeopleCount: function (n) {
                    var o = n.state,
                        e = { aggs: { peopleCount: { terms: { field: "markerIds", size: 999 } } }, size: 0 };
                    dt.post("/app-genshin-users/_search", e)
                        .then(function (n) {
                            n.aggregations.peopleCount.buckets.forEach(function (n) {
                                o.peopleCount[n.key.toString()] = n.doc_count;
                            });
                        })
                        .catch(function () {
                            console.error("Fail to get people count.");
                        });
                },
            },
            At = { namespaced: !0, state: yt, getters: wt, mutations: Mt, actions: Ct, strict: !1 },
            St = Object(h["a"])({ modules: { ui: qe, user: at, map: At } });
        Object(t["f"])(B).use(St).use($e).use(Xe).mount("#app");
    },
    "7d19": function (n, o, e) {
        "use strict";
        e("becb");
    },
    "81d3": function (n, o, e) {},
    8966: function (n, o, e) {
        "use strict";
        e("dd04");
    },
    "8b7c": function (n, o, e) {
        "use strict";
        e("ef30");
    },
    "93bd": function (n, o, e) {},
    9991: function (n, o, e) {},
    "9cdc": function (n, o, e) {
        "use strict";
        e("d673");
    },
    becb: function (n, o, e) {},
    caf4: function (n, o, e) {
        "use strict";
        e("1b03");
    },
    cbc3: function (n, o, e) {
        "use strict";
        e("f226");
    },
    d673: function (n, o, e) {},
    dc41: function (n, o, e) {},
    dd04: function (n, o, e) {},
    ed29: function (n, o, e) {
        "use strict";
        e("ffa6");
    },
    ef30: function (n, o, e) {},
    f226: function (n, o, e) {},
    ffa6: function (n, o, e) {},
});