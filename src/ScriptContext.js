export const scriptMobile = `
(function (b, a, c, d) {
if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) {
  c = [];
  for (a = a.currentScript; a; a = a.parentElement)
    a.id && c.push(a.id);
  return b.log(
    "A copy of P has already been loaded on this page.",
    "FATAL",
    c.join(" ")
  );
}
})(window, document, Date);
(function (a, b, c, d) {
"use strict";
a._pSetI = function () {
  return null;
};
})(window, document, Date);
(function (d, G, I, J) {
"use strict";
d._sw = (function () {
  var p;
  return function (w, e, u, z, h, A, q, k, x, B) {
    p || ((p = !0),
      B.execute("RetailPageServiceWorker", function () {
        function y(a, b) {
          g.controller && a
            ? ((a = {
                feature: "retail_service_worker_messaging",
                command: a,
              }),
              b && (a.data = b),
              g.controller.postMessage(a))
            : a && h("sw:sw_message_no_ctrl", 1);
        }
        function p(a) {
          var b = a.data;
          if (
            b &&
            "retail_service_worker_messaging" === b.feature &&
            b.command &&
            b.data
          ) {
            var c = b.data;
            a = d.ue;
            var f = d.ueLogError;
            switch (b.command) {
              case "log_counter":
                a &&
                  k(a.count) &&
                  c.name &&
                  a.count(c.name, 0 === c.value ? 0 : c.value || 1);
                break;
              case "log_tag":
                a &&
                  k(a.tag) &&
                  c.tag &&
                  (a.tag(c.tag), (b = d.uex), a.isl && k(b) && b("at"));
                break;
              case "log_error":
                f &&
                  k(f) &&
                  c.message &&
                  f({
                    message: c.message,
                    logLevel: c.level || "ERROR",
                    attribution: c.attribution || "RetailServiceWorker",
                  });
                break;
              case "log_weblab_trigger":
                if (!c.weblab || !c.treatment) break;
                a && k(a.trigger)
                  ? a.trigger(c.weblab, c.treatment)
                  : (h("sw:wt:miss"),
                    h("sw:wt:miss:" + c.weblab + ":" + c.treatment));
                break;
              default:
                h("sw:unsupported_message_command", 1);
            }
          }
        }
        function v(a, b) {
          return "sw:" + (b || "") + ":" + a + ":";
        }
        function C() {
          l.forEach(function (a) {
            q(a);
          });
        }
        function n(a) {
          return a.capabilities.isAmazonApp && a.capabilities.android;
        }
        function D(a, b, c) {
          if (b)
            if (b.mshop && n(a))
              (a = v(c, "mshop_and")),
                (b = b.mshop.action),
                l.push(a + "supported"),
                b(a, c);
            else if (b.browser) {
              a =
                u(/Chrome/i) &&
                !u(/Edge/i) &&
                !u(/OPR/i) &&
                !a.capabilities.isAmazonApp &&
                !u(new RegExp(z + "bwv" + z + "b"));
              var f = b.browser;
              b = v(c, "browser");
              a
                ? ((a = f.action), l.push(b + "supported"), a(b, c))
                : l.push(b + "unsupported");
            }
        }
        function E(a, b, c) {
          a && l.push(v("register", c) + "unsupported");
          b && l.push(v("unregister", c) + "unsupported");
          C();
        }
        try {
          var g = navigator.serviceWorker;
        } catch (a) {
          q("sw:nav_err");
        }
        (function () {
          if (g) {
            var a = function () {
              y("page_loaded", {
                rid: d.ue_id,
                mid: d.ue_mid,
                pty: d.ue_pty,
                sid: d.ue_sid,
                spty: d.ue_spty,
                furl: d.ue_furl,
              });
            };
            x(g, "message", p);
            y("client_messaging_ready");
            B.when("load").execute(a);
            x(g, "controllerchange", function () {
              y("client_messaging_ready");
              "complete" === G.readyState && a();
            });
          }
        })();
        var l = [],
          m = function (a, b) {
            var c = d.uex,
              f = d.uet;
            a = e(":", "aui", "sw", a);
            "ld" === b && k(c)
              ? c("ld", a, { wb: 1 })
              : k(f) && f(b, a, { wb: 1 });
          },
          H = function (a, b, c) {
            function f(a) {
              b && k(b.failure) && b.failure(a);
            }
            function F() {
              l = setTimeout(function () {
                q(e(":", "sw:" + r, t.TIMED_OUT));
                f({ ok: !1, statusCode: t.TIMED_OUT, done: !1 });
                m(r, "ld");
              }, c || 4e3);
            }
            var t = {
                NO_CONTROLLER: "no_ctrl",
                TIMED_OUT: "timed_out",
                UNSUPPORTED_BROWSER: "unsupported_browser",
                UNEXPECTED_RESPONSE: "unexpected_response",
              },
              r = e(":", a.feature, a.command),
              l,
              n = !0;
            if ("MessageChannel" in d && g && "controller" in g)
              if (g.controller) {
                var p = new MessageChannel();
                p.port1.onmessage = function (c) {
                  (c = c.data) &&
                  c.feature === a.feature &&
                  c.command === a.command
                    ? (n && (m(r, "cf"), (n = !1)),
                      m(r, "af"),
                      clearTimeout(l),
                      c.done || F(),
                      c.ok ? b && k(b.success) && b.success(c) : f(c),
                      c.done && m(r, "ld"))
                    : h(e(":", "sw:" + r, t.UNEXPECTED_RESPONSE), 1);
                };
                F();
                m(r, "bb");
                g.controller.postMessage(a, [p.port2]);
              } else
                q(e(":", "sw:" + a.feature, t.NO_CONTROLLER)),
                  f({ ok: !1, statusCode: t.NO_CONTROLLER, done: !0 });
            else
              q(e(":", "sw:" + a.feature, t.UNSUPPORTED_BROWSER)),
                f({
                  ok: !1,
                  statusCode: t.UNSUPPORTED_BROWSER,
                  done: !0,
                });
          };
        (function () {
          g
            ? (m("ctrl_changed", "bb"),
              g.addEventListener("controllerchange", function () {
                q("sw:ctrl_changed");
                m("ctrl_changed", "ld");
              }))
            : h(e(":", "sw:ctrl_changed", "sw_unsupp"), 1);
        })();
        (function () {
          var a = function () {
            m(b, "ld");
            var a = d.uex;
            H(
              {
                feature: "page_proxy",
                command: "request_feature_tags",
              },
              {
                success: function (b) {
                  b = b.data;
                  Array.isArray(b) &&
                    b.forEach(function (a) {
                      "string" === typeof a
                        ? q(e(":", "sw:ppft", a))
                        : h(e(":", "sw:ppft", "invalid_tag"), 1);
                    });
                  h(e(":", "sw:ppft", "success"), 1);
                  A && A.isl && k(a) && a("at");
                },
                failure: function (a) {
                  h(
                    e(
                      ":",
                      "sw:ppft",
                      "error:" + (a.statusCode || "ppft_error")
                    ),
                    1
                  );
                },
              }
            );
          };
          if ("requestIdleCallback" in d) {
            var b = e(":", "ppft", "callback_ricb");
            d.requestIdleCallback(a, { timeout: 1e3 });
          } else (b = e(":", "ppft", "callback_timeout")), setTimeout(a, 0);
          m(b, "bb");
        })();
        (function (a) {
          var b = a.reg,
            c = a.unreg;
          g && g.getRegistrations
            ? (w.when("A").execute(function (b) {
                if (
                  (a.reg.mshop || a.unreg.mshop) &&
                  "function" === typeof n &&
                  n(b)
                ) {
                  var f = a.reg.mshop ? "T1" : "C",
                    e = d.ue;
                  e && e.trigger
                    ? e.trigger("MSHOP_SW_CLIENT_446196", f)
                    : h("sw:mshop:wt:failed");
                }
                D(b, c, "unregister");
              }),
              x(d, "load", function () {
                w.when("A").execute(function (a) {
                  D(a, b, "register");
                  C();
                });
              }))
            : (E(b && b.browser, c && c.browser, "browser"),
              w.when("A").execute(function (a) {
                "function" === typeof n &&
                  n(a) &&
                  E(b && b.mshop, c && c.mshop, "mshop_and");
              }));
        })({ reg: {}, unreg: {} });
      }));
  };
})();
})(window, document, Date);
(function (c, e, I, B) {
"use strict";
c._pd = (function () {
  var a, u;
  return function (C, f, h, k, b, D, v, E, F) {
    function w(d) {
      try {
        return d();
      } catch (J) {
        return !1;
      }
    }
    function l() {
      if (m) {
        var d = {
          w: c.innerWidth || b.clientWidth,
          h: c.innerHeight || b.clientHeight,
        };
        5 < Math.abs(d.w - q.w) || 50 < d.h - q.h
          ? ((q = d),
            (n = 4),
            (d =
              a.mobile || a.tablet
                ? 450 < d.w && d.w > d.h
                : 1250 <= d.w)
              ? k(b, "a-ws")
              : (b.className = v(b, "a-ws")))
          : 0 < n && (n--, (x = setTimeout(l, 16)));
      }
    }
    function G(d) {
      (m = d === B ? !m : !!d) && l();
    }
    function H() {
      return m;
    }
    if (!u) {
      u = !0;
      var r = (function () {
          var d = ["O", "ms", "Moz", "Webkit"],
            c = e.createElement("div");
          return {
            testGradients: function () {
              return !0;
            },
            test: function (a) {
              var b = a.charAt(0).toUpperCase() + a.substr(1);
              a = (d.join(b + " ") + b + " " + a).split(" ");
              for (b = a.length; b--; )
                if ("" === c.style[a[b]]) return !0;
              return !1;
            },
            testTransform3d: function () {
              return !0;
            },
          };
        })(),
        y = b.className,
        z = /(^| )a-mobile( |$)/.test(y),
        A = /(^| )a-tablet( |$)/.test(y);
      a = {
        audio: function () {
          return !!e.createElement("audio").canPlayType;
        },
        video: function () {
          return !!e.createElement("video").canPlayType;
        },
        canvas: function () {
          return !!e.createElement("canvas").getContext;
        },
        svg: function () {
          return (
            !!e.createElementNS &&
            !!e.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect
          );
        },
        offline: function () {
          return (
            navigator.hasOwnProperty &&
            navigator.hasOwnProperty("onLine") &&
            navigator.onLine
          );
        },
        dragDrop: function () {
          return "draggable" in e.createElement("span");
        },
        geolocation: function () {
          return !!navigator.geolocation;
        },
        history: function () {
          return !(!c.history || !c.history.pushState);
        },
        webworker: function () {
          return !!c.Worker;
        },
        autofocus: function () {
          return "autofocus" in e.createElement("input");
        },
        inputPlaceholder: function () {
          return "placeholder" in e.createElement("input");
        },
        textareaPlaceholder: function () {
          return "placeholder" in e.createElement("textarea");
        },
        localStorage: function () {
          return "localStorage" in c && null !== c.localStorage;
        },
        orientation: function () {
          return "orientation" in c;
        },
        touch: function () {
          return "ontouchend" in e;
        },
        gradients: function () {
          return r.testGradients();
        },
        hires: function () {
          var a =
            (c.devicePixelRatio && 1.5 <= c.devicePixelRatio) ||
            (c.matchMedia &&
              c.matchMedia("(min-resolution:144dpi)").matches);
          E(
            "hiRes" + (z ? "Mobile" : A ? "Tablet" : "Desktop"),
            a ? 1 : 0
          );
          return a;
        },
        transform3d: function () {
          return r.testTransform3d();
        },
        touchScrolling: function () {
          return f(
            /Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i
          );
        },
        ios: function () {
          return (
            f(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) &&
            !f(/trident|Edge/i)
          );
        },
        android: function () {
          return f(/android.([1-9]|[L-Z])/i) && !f(/trident|Edge/i);
        },
        mobile: function () {
          return z;
        },
        tablet: function () {
          return A;
        },
        rtl: function () {
          return "rtl" === b.dir;
        },
      };
      for (var g in a) a.hasOwnProperty(g) && (a[g] = w(a[g]));
      for (
        var t =
            "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(
              " "
            ),
          p = 0;
        p < t.length;
        p++
      )
        a[t[p]] = w(function () {
          return r.test(t[p]);
        });
      var m = !0,
        x = 0,
        q = { w: 0, h: 0 },
        n = 4;
      l();
      h(c, "resize", function () {
        clearTimeout(x);
        n = 4;
        l();
      });
      b.className = v(b, "a-no-js");
      k(b, "a-js");
      !f(/OS [1-8](_[0-9]*)+ like Mac OS X/i) ||
        c.navigator.standalone ||
        f(/safari/i) ||
        k(b, "a-ember");
      h = [];
      for (g in a)
        a.hasOwnProperty(g) &&
          a[g] &&
          h.push(
            "a-" +
              g.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase();
              })
          );
      k(b, h.join(" "));
      b.setAttribute("data-aui-build-date", F);
      C.register("p-detect", function () {
        return {
          capabilities: a,
          localStorage: a.localStorage && D,
          toggleResponsiveGrid: G,
          responsiveGridEnabled: H,
        };
      });
      return a || {};
    }
  };
})();
})(window, document, Date);
(function (g, l, C, D) {
function E(a) {
  n && n.tag && n.tag(p(":", "aui", a));
}
function m(a, b) {
  n &&
    n.count &&
    n.count(
      "aui:" + a,
      0 === b ? 0 : b || (n.count("aui:" + a) || 0) + 1
    );
}
function F(a) {
  try {
    return a.test(navigator.userAgent);
  } catch (b) {
    return !1;
  }
}
function G(a) {
  return "function" === typeof a;
}
function u(a, b, c) {
  a.addEventListener
    ? a.addEventListener(b, c, !1)
    : a.attachEvent && a.attachEvent("on" + b, c);
}
function p(a, b, c, f) {
  b = b && c ? b + a + c : b || c;
  return f ? p(a, b, f) : b;
}
function y(a, b, c) {
  try {
    Object.defineProperty(a, b, { value: c, writable: !1 });
  } catch (f) {
    a[b] = c;
  }
  return c;
}
function O(a, b) {
  a.className = P(a, b) + " " + b;
}
function P(a, b) {
  return (" " + a.className + " ")
    .split(" " + b + " ")
    .join(" ")
    .replace(/^ | $/g, "");
}
function ca(a, b, c) {
  var f = (c = a.length),
    e = function () {
      f-- ||
        (H.push(b), I || (q ? q.set(z) : setTimeout(z, 0), (I = !0)));
    };
  for (e(); c--; ) Q[a[c]] ? e() : (v[a[c]] = v[a[c]] || []).push(e);
}
function da(a, b, c, f, e) {
  var d = l.createElement(a ? "script" : "link");
  u(d, "error", f);
  e && u(d, "load", e);
  a
    ? ((d.type = "text/javascript"),
      (d.async = !0),
      c &&
        /AUIClients|images[/]I/.test(b) &&
        d.setAttribute("crossorigin", "anonymous"),
      (d.src = b))
    : ((d.rel = "stylesheet"), (d.href = b));
  l.getElementsByTagName("head")[0].appendChild(d);
}
function R(a, b) {
  return function (c, f) {
    function e() {
      da(
        b,
        c,
        d,
        function (b) {
          J
            ? m("resource_unload")
            : d
            ? ((d = !1), m("resource_retry"), e())
            : (m("resource_error"),
              a.log("Asset failed to load: " + c));
          b && b.stopPropagation
            ? b.stopPropagation()
            : g.event && (g.event.cancelBubble = !0);
        },
        f
      );
    }
    if (S[c]) return !1;
    S[c] = !0;
    m("resource_count");
    var d = !0;
    return !e();
  };
}
function ea(a, b, c) {
  for (
    var f = {
        name: a,
        guard: function (c) {
          return b.guardFatal(a, c);
        },
        guardTime: function (a) {
          return b.guardTime(a);
        },
        logError: function (c, d, e) {
          b.logError(c, d, e, a);
        },
      },
      e = [],
      d = 0;
    d < c.length;
    d++
  )
    A.hasOwnProperty(c[d]) &&
      (e[d] = K.hasOwnProperty(c[d]) ? K[c[d]](A[c[d]], f) : A[c[d]]);
  return e;
}
function w(a, b, c, f, e) {
  return function (d, k) {
    function n() {
      var a = null;
      f
        ? (a = k)
        : G(k) &&
          ((q.start = r()),
          (a = k.apply(g, ea(d, h, l))),
          (q.end = r()));
      if (b) {
        A[d] = a;
        a = d;
        for (Q[a] = !0; (v[a] || []).length; ) v[a].shift()();
        delete v[a];
      }
      q.done = !0;
    }
    var h = e || this;
    G(d) && ((k = d), (d = D));
    b &&
      ((d = d ? d.replace(T, "") : "__NONAME__"),
      L.hasOwnProperty(d) &&
        h.error(
          p(
            ", reregistered by ",
            p(" by ", d + " already registered", L[d]),
            h.attribution
          ),
          d
        ),
      (L[d] = h.attribution));
    for (var l = [], m = 0; m < a.length; m++)
      l[m] = a[m].replace(T, "");
    var q = (x[d || "anon" + ++fa] = {
      depend: l,
      registered: r(),
      namespace: h.namespace,
    });
    d && ha.hasOwnProperty(d);
    c ? n() : ca(l, h.guardFatal(d, n), d);
    return {
      decorate: function (a) {
        K[d] = h.guardFatal(d, a);
      },
    };
  };
}
function U(a) {
  return function () {
    var b = Array.prototype.slice.call(arguments);
    return {
      execute: w(b, !1, a, !1, this),
      register: w(b, !0, a, !1, this),
    };
  };
}
function M(a, b) {
  return function (c, f) {
    f || ((f = c), (c = D));
    var e = this.attribution;
    return function () {
      h.push(b || { attribution: e, name: c, logLevel: a });
      var d = f.apply(this, arguments);
      h.pop();
      return d;
    };
  };
}
function B(a, b) {
  this.load = { js: R(this, !0), css: R(this) };
  y(this, "namespace", b);
  y(this, "attribution", a);
}
function V() {
  l.body ? k.trigger("a-bodyBegin") : setTimeout(V, 20);
}
("use strict");
var t = (C.now =
    C.now ||
    function () {
      return +new C();
    }),
  r = (function (a) {
    return a && a.now ? a.now.bind(a) : t;
  })(g.performance),
  ia = r(),
  ha = {},
  n = g.ue;
E();
E("aui_build_date:3.24.1-2024-02-26");
var W = {
    getItem: function (a) {
      try {
        return g.localStorage.getItem(a);
      } catch (b) {}
    },
    setItem: function (a, b) {
      try {
        return g.localStorage.setItem(a, b);
      } catch (c) {}
    },
  },
  q = g._pSetI(),
  H = [],
  ja = [],
  I = !1,
  ka =
    navigator.scheduling &&
    "function" === typeof navigator.scheduling.isInputPending;
var z = function () {
  for (
    var a = q ? q.set(z) : setTimeout(z, 0), b = t();
    ja.length || H.length;

  )
    if ((H.shift()(), q && ka)) {
      if (
        (150 < t() - b && !navigator.scheduling.isInputPending()) ||
        (50 < t() - b && navigator.scheduling.isInputPending())
      )
        return;
    } else if (50 < t() - b) return;
  q ? q.clear(a) : clearTimeout(a);
  I = !1;
};
var Q = {},
  v = {},
  S = {},
  J = !1;
u(g, "beforeunload", function () {
  J = !0;
  setTimeout(function () {
    J = !1;
  }, 1e4);
});
var T = /^prv:/,
  L = {},
  A = {},
  K = {},
  x = {},
  fa = 0,
  X = String.fromCharCode(92),
  h = [],
  Y = !0,
  Z = g.onerror;
g.onerror = function (a, b, c, f, e) {
  (e && "object" === typeof e) ||
    ((e = Error(a, b, c)),
    (e.columnNumber = f),
    (e.stack =
      b || c || f ? p(X, e.message, "at " + p(":", b, c, f)) : D));
  var d = h.pop() || {};
  e.attribution = p(":", e.attribution || d.attribution, d.name);
  e.logLevel = d.logLevel;
  e.attribution &&
    console &&
    console.log &&
    console.log(
      [e.logLevel || "ERROR", a, "thrown by", e.attribution].join(" ")
    );
  h = [];
  Z && ((d = [].slice.call(arguments)), (d[4] = e), Z.apply(g, d));
};
B.prototype = {
  logError: function (a, b, c, f) {
    b = {
      message: b,
      logLevel: c || "ERROR",
      attribution: p(":", this.attribution, f),
    };
    if (g.ueLogError) return g.ueLogError(a || b, a ? b : null), !0;
    console && console.error && (console.log(b), console.error(a));
    return !1;
  },
  error: function (a, b, c, f) {
    a = Error(p(":", f, a, c));
    a.attribution = p(":", this.attribution, b);
    throw a;
  },
  guardError: M(),
  guardFatal: M("FATAL"),
  guardCurrent: function (a) {
    var b = h[h.length - 1];
    return b ? M(b.logLevel, b).call(this, a) : a;
  },
  guardTime: function (a) {
    var b = h[h.length - 1],
      c = b && b.name;
    return c && c in x
      ? function () {
          var b = r(),
            e = a.apply(this, arguments);
          x[c].async = (x[c].async || 0) + r() - b;
          return e;
        }
      : a;
  },
  log: function (a, b, c) {
    return this.logError(null, a, b, c);
  },
  declare: w([], !0, !0, !0),
  register: w([], !0),
  execute: w([]),
  AUI_BUILD_DATE: "3.24.1-2024-02-26",
  when: U(),
  now: U(!0),
  trigger: function (a, b, c) {
    var f = t();
    this.declare(a, {
      data: b,
      pageElapsedTime: f - (g.aPageStart || NaN),
      triggerTime: f,
    });
    c &&
      c.instrument &&
      N.when("prv:a-logTrigger").execute(function (b) {
        b(a);
      });
  },
  handleTriggers: function () {
    this.log("handleTriggers deprecated");
  },
  attributeErrors: function (a) {
    return new B(a);
  },
  _namespace: function (a, b) {
    return new B(a, b);
  },
  setPriority: function (a) {
    Y ? (Y = !1) : this.log("setPriority only accept the first call.");
  },
};
var k = y(g, "AmazonUIPageJS", new B());
var N = k._namespace("PageJS", "AmazonUI");
N.declare("prv:p-debug", x);
k.declare("p-recorder-events", []);
k.declare("p-recorder-stop", function () {});
y(g, "P", k);
V();
if (l.addEventListener) {
  var aa;
  l.addEventListener(
    "DOMContentLoaded",
    (aa = function () {
      k.trigger("a-domready");
      l.removeEventListener("DOMContentLoaded", aa, !1);
    }),
    !1
  );
}
var ba = l.documentElement,
  la = g._pd(k, F, u, O, ba, W, P, m, "3.24.1-2024-02-26");
F(/UCBrowser/i) ||
  (la.localStorage && O(ba, W.getItem("a-font-class")));
k.declare("a-event-revised-handling", !1);
g._sw(N, p, F, X, m, n, E, G, u, k);
k.declare("a-fix-event-off", !1);
m("pagejs:pkgExecTime", r() - ia);
})(window, document, Date);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
"https://images-na.ssl-images-amazon.com/images/I/61ZS63EQSsL._RC|11Y+5x+kkTL.js,51ExhNVPbdL.js,11yKORv-GTL.js,11GgN1+C7hL.js,313nCSj5srL.js,01VRMV3FBdL.js,21BJeD9yjcL.js,01BF5+CcG3L.js,11rRjDLdAVL.js,51UOrPXYGsL.js,11RnlMIG5YL.js,11UNP9ncXuL.js,1174TO1N7GL.js,11EWRk6r74L.js,21paGe30x-L.js,01490L6yBnL.js,610n89LC1RL.js,01JYHc2oIlL.js,31-MbZeXPYL.js,41ryyLkxgnL.js,11bEz2VIYrL.js,31dreCHeIuL.js,01qkmZhGmAL.js,01RMmNcPMuL.js_.js?AUIClients/AmazonUI&WOBvLLbH#mobile.786834-T1"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
"https://images-na.ssl-images-amazon.com/images/I/01AiKkUsdTL.js?AUIClients/AbbottViewComponentMobileAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
"https://images-na.ssl-images-amazon.com/images/I/31IwoCo8XiL.js?AUIClients/AmazonUIFormControlsJS#mobile"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
"https://images-na.ssl-images-amazon.com/images/I/21QREc8SBAL.js?AUIClients/AbbottPortalAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
"https://images-na.ssl-images-amazon.com/images/I/413QmhKENjL.js?AUIClients/AbbottViewComponentCommonAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
"https://images-na.ssl-images-amazon.com/images/I/419T3U4YyUL._RC|41yWQpMBvkL.js,01CMyuQ8OQL.js,31odYvSoo1L.js_.js?AUIClients/AmazonNavigationMobileMetaAsset"
);
`;

export const scriptLaptop = `
(function (b, a, c, d) {
  if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) {
    c = [];
    for (a = a.currentScript; a; a = a.parentElement)
      a.id && c.push(a.id);
    return b.log(
      "A copy of P has already been loaded on this page.",
      "FATAL",
      c.join(" ")
    );
  }
})(window, document, Date);
(function (a, b, c, d) {
  "use strict";
  a._pSetI = function () {
    return null;
  };
})(window, document, Date);
(function (d, G, I, J) {
  "use strict";
  d._sw = (function () {
    var p;
    return function (w, e, u, z, h, A, q, k, x, B) {
      p ||
        ((p = !0),
        B.execute("RetailPageServiceWorker", function () {
          function y(a, b) {
            g.controller && a
              ? ((a = {
                  feature: "retail_service_worker_messaging",
                  command: a,
                }),
                b && (a.data = b),
                g.controller.postMessage(a))
              : a && h("sw:sw_message_no_ctrl", 1);
          }
          function p(a) {
            var b = a.data;
            if (
              b &&
              "retail_service_worker_messaging" === b.feature &&
              b.command &&
              b.data
            ) {
              var c = b.data;
              a = d.ue;
              var f = d.ueLogError;
              switch (b.command) {
                case "log_counter":
                  a &&
                    k(a.count) &&
                    c.name &&
                    a.count(c.name, 0 === c.value ? 0 : c.value || 1);
                  break;
                case "log_tag":
                  a &&
                    k(a.tag) &&
                    c.tag &&
                    (a.tag(c.tag), (b = d.uex), a.isl && k(b) && b("at"));
                  break;
                case "log_error":
                  f &&
                    k(f) &&
                    c.message &&
                    f({
                      message: c.message,
                      logLevel: c.level || "ERROR",
                      attribution: c.attribution || "RetailServiceWorker",
                    });
                  break;
                case "log_weblab_trigger":
                  if (!c.weblab || !c.treatment) break;
                  a && k(a.trigger)
                    ? a.trigger(c.weblab, c.treatment)
                    : (h("sw:wt:miss"),
                      h("sw:wt:miss:" + c.weblab + ":" + c.treatment));
                  break;
                default:
                  h("sw:unsupported_message_command", 1);
              }
            }
          }
          function v(a, b) {
            return "sw:" + (b || "") + ":" + a + ":";
          }
          function C() {
            l.forEach(function (a) {
              q(a);
            });
          }
          function n(a) {
            return a.capabilities.isAmazonApp && a.capabilities.android;
          }
          function D(a, b, c) {
            if (b)
              if (b.mshop && n(a))
                (a = v(c, "mshop_and")),
                  (b = b.mshop.action),
                  l.push(a + "supported"),
                  b(a, c);
              else if (b.browser) {
                a =
                  u(/Chrome/i) &&
                  !u(/Edge/i) &&
                  !u(/OPR/i) &&
                  !a.capabilities.isAmazonApp &&
                  !u(new RegExp(z + "bwv" + z + "b"));
                var f = b.browser;
                b = v(c, "browser");
                a
                  ? ((a = f.action), l.push(b + "supported"), a(b, c))
                  : l.push(b + "unsupported");
              }
          }
          function E(a, b, c) {
            a && l.push(v("register", c) + "unsupported");
            b && l.push(v("unregister", c) + "unsupported");
            C();
          }
          try {
            var g = navigator.serviceWorker;
          } catch (a) {
            q("sw:nav_err");
          }
          (function () {
            if (g) {
              var a = function () {
                y("page_loaded", {
                  rid: d.ue_id,
                  mid: d.ue_mid,
                  pty: d.ue_pty,
                  sid: d.ue_sid,
                  spty: d.ue_spty,
                  furl: d.ue_furl,
                });
              };
              x(g, "message", p);
              y("client_messaging_ready");
              B.when("load").execute(a);
              x(g, "controllerchange", function () {
                y("client_messaging_ready");
                "complete" === G.readyState && a();
              });
            }
          })();
          var l = [],
            m = function (a, b) {
              var c = d.uex,
                f = d.uet;
              a = e(":", "aui", "sw", a);
              "ld" === b && k(c)
                ? c("ld", a, { wb: 1 })
                : k(f) && f(b, a, { wb: 1 });
            },
            H = function (a, b, c) {
              function f(a) {
                b && k(b.failure) && b.failure(a);
              }
              function F() {
                l = setTimeout(function () {
                  q(e(":", "sw:" + r, t.TIMED_OUT));
                  f({ ok: !1, statusCode: t.TIMED_OUT, done: !1 });
                  m(r, "ld");
                }, c || 4e3);
              }
              var t = {
                  NO_CONTROLLER: "no_ctrl",
                  TIMED_OUT: "timed_out",
                  UNSUPPORTED_BROWSER: "unsupported_browser",
                  UNEXPECTED_RESPONSE: "unexpected_response",
                },
                r = e(":", a.feature, a.command),
                l,
                n = !0;
              if ("MessageChannel" in d && g && "controller" in g)
                if (g.controller) {
                  var p = new MessageChannel();
                  p.port1.onmessage = function (c) {
                    (c = c.data) &&
                    c.feature === a.feature &&
                    c.command === a.command
                      ? (n && (m(r, "cf"), (n = !1)),
                        m(r, "af"),
                        clearTimeout(l),
                        c.done || F(),
                        c.ok ? b && k(b.success) && b.success(c) : f(c),
                        c.done && m(r, "ld"))
                      : h(e(":", "sw:" + r, t.UNEXPECTED_RESPONSE), 1);
                  };
                  F();
                  m(r, "bb");
                  g.controller.postMessage(a, [p.port2]);
                } else
                  q(e(":", "sw:" + a.feature, t.NO_CONTROLLER)),
                    f({ ok: !1, statusCode: t.NO_CONTROLLER, done: !0 });
              else
                q(e(":", "sw:" + a.feature, t.UNSUPPORTED_BROWSER)),
                  f({
                    ok: !1,
                    statusCode: t.UNSUPPORTED_BROWSER,
                    done: !0,
                  });
            };
          (function () {
            g
              ? (m("ctrl_changed", "bb"),
                g.addEventListener("controllerchange", function () {
                  q("sw:ctrl_changed");
                  m("ctrl_changed", "ld");
                }))
              : h(e(":", "sw:ctrl_changed", "sw_unsupp"), 1);
          })();
          (function () {
            var a = function () {
              m(b, "ld");
              var a = d.uex;
              H(
                {
                  feature: "page_proxy",
                  command: "request_feature_tags",
                },
                {
                  success: function (b) {
                    b = b.data;
                    Array.isArray(b) &&
                      b.forEach(function (a) {
                        "string" === typeof a
                          ? q(e(":", "sw:ppft", a))
                          : h(e(":", "sw:ppft", "invalid_tag"), 1);
                      });
                    h(e(":", "sw:ppft", "success"), 1);
                    A && A.isl && k(a) && a("at");
                  },
                  failure: function (a) {
                    h(
                      e(
                        ":",
                        "sw:ppft",
                        "error:" + (a.statusCode || "ppft_error")
                      ),
                      1
                    );
                  },
                }
              );
            };
            if ("requestIdleCallback" in d) {
              var b = e(":", "ppft", "callback_ricb");
              d.requestIdleCallback(a, { timeout: 1e3 });
            } else (b = e(":", "ppft", "callback_timeout")), setTimeout(a, 0);
            m(b, "bb");
          })();
          (function (a) {
            var b = a.reg,
              c = a.unreg;
            g && g.getRegistrations
              ? (w.when("A").execute(function (b) {
                  if (
                    (a.reg.mshop || a.unreg.mshop) &&
                    "function" === typeof n &&
                    n(b)
                  ) {
                    var f = a.reg.mshop ? "T1" : "C",
                      e = d.ue;
                    e && e.trigger
                      ? e.trigger("MSHOP_SW_CLIENT_446196", f)
                      : h("sw:mshop:wt:failed");
                  }
                  D(b, c, "unregister");
                }),
                x(d, "load", function () {
                  w.when("A").execute(function (a) {
                    D(a, b, "register");
                    C();
                  });
                }))
              : (E(b && b.browser, c && c.browser, "browser"),
                w.when("A").execute(function (a) {
                  "function" === typeof n &&
                    n(a) &&
                    E(b && b.mshop, c && c.mshop, "mshop_and");
                }));
          })({ reg: {}, unreg: {} });
        }));
    };
  })();
})(window, document, Date);
(function (c, e, I, B) {
  "use strict";
  c._pd = (function () {
    var a, u;
    return function (C, f, h, k, b, D, v, E, F) {
      function w(d) {
        try {
          return d();
        } catch (J) {
          return !1;
        }
      }
      function l() {
        if (m) {
          var d = {
            w: c.innerWidth || b.clientWidth,
            h: c.innerHeight || b.clientHeight,
          };
          5 < Math.abs(d.w - q.w) || 50 < d.h - q.h
            ? ((q = d),
              (n = 4),
              (d =
                a.mobile || a.tablet
                  ? 450 < d.w && d.w > d.h
                  : 1250 <= d.w)
                ? k(b, "a-ws")
                : (b.className = v(b, "a-ws")))
            : 0 < n && (n--, (x = setTimeout(l, 16)));
        }
      }
      function G(d) {
        (m = d === B ? !m : !!d) && l();
      }
      function H() {
        return m;
      }
      if (!u) {
        u = !0;
        var r = (function () {
            var d = ["O", "ms", "Moz", "Webkit"],
              c = e.createElement("div");
            return {
              testGradients: function () {
                return !0;
              },
              test: function (a) {
                var b = a.charAt(0).toUpperCase() + a.substr(1);
                a = (d.join(b + " ") + b + " " + a).split(" ");
                for (b = a.length; b--; )
                  if ("" === c.style[a[b]]) return !0;
                return !1;
              },
              testTransform3d: function () {
                return !0;
              },
            };
          })(),
          y = b.className,
          z = /(^| )a-mobile( |$)/.test(y),
          A = /(^| )a-tablet( |$)/.test(y);
        a = {
          audio: function () {
            return !!e.createElement("audio").canPlayType;
          },
          video: function () {
            return !!e.createElement("video").canPlayType;
          },
          canvas: function () {
            return !!e.createElement("canvas").getContext;
          },
          svg: function () {
            return (
              !!e.createElementNS &&
              !!e.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect
            );
          },
          offline: function () {
            return (
              navigator.hasOwnProperty &&
              navigator.hasOwnProperty("onLine") &&
              navigator.onLine
            );
          },
          dragDrop: function () {
            return "draggable" in e.createElement("span");
          },
          geolocation: function () {
            return !!navigator.geolocation;
          },
          history: function () {
            return !(!c.history || !c.history.pushState);
          },
          webworker: function () {
            return !!c.Worker;
          },
          autofocus: function () {
            return "autofocus" in e.createElement("input");
          },
          inputPlaceholder: function () {
            return "placeholder" in e.createElement("input");
          },
          textareaPlaceholder: function () {
            return "placeholder" in e.createElement("textarea");
          },
          localStorage: function () {
            return "localStorage" in c && null !== c.localStorage;
          },
          orientation: function () {
            return "orientation" in c;
          },
          touch: function () {
            return "ontouchend" in e;
          },
          gradients: function () {
            return r.testGradients();
          },
          hires: function () {
            var a =
              (c.devicePixelRatio && 1.5 <= c.devicePixelRatio) ||
              (c.matchMedia &&
                c.matchMedia("(min-resolution:144dpi)").matches);
            E(
              "hiRes" + (z ? "Mobile" : A ? "Tablet" : "Desktop"),
              a ? 1 : 0
            );
            return a;
          },
          transform3d: function () {
            return r.testTransform3d();
          },
          touchScrolling: function () {
            return f(
              /Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i
            );
          },
          ios: function () {
            return (
              f(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) &&
              !f(/trident|Edge/i)
            );
          },
          android: function () {
            return f(/android.([1-9]|[L-Z])/i) && !f(/trident|Edge/i);
          },
          mobile: function () {
            return z;
          },
          tablet: function () {
            return A;
          },
          rtl: function () {
            return "rtl" === b.dir;
          },
        };
        for (var g in a) a.hasOwnProperty(g) && (a[g] = w(a[g]));
        for (
          var t =
              "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(
                " "
              ),
            p = 0;
          p < t.length;
          p++
        )
          a[t[p]] = w(function () {
            return r.test(t[p]);
          });
        var m = !0,
          x = 0,
          q = { w: 0, h: 0 },
          n = 4;
        l();
        h(c, "resize", function () {
          clearTimeout(x);
          n = 4;
          l();
        });
        b.className = v(b, "a-no-js");
        k(b, "a-js");
        !f(/OS [1-8](_[0-9]*)+ like Mac OS X/i) ||
          c.navigator.standalone ||
          f(/safari/i) ||
          k(b, "a-ember");
        h = [];
        for (g in a)
          a.hasOwnProperty(g) &&
            a[g] &&
            h.push(
              "a-" +
                g.replace(/([A-Z])/g, function (a) {
                  return "-" + a.toLowerCase();
                })
            );
        k(b, h.join(" "));
        b.setAttribute("data-aui-build-date", F);
        C.register("p-detect", function () {
          return {
            capabilities: a,
            localStorage: a.localStorage && D,
            toggleResponsiveGrid: G,
            responsiveGridEnabled: H,
          };
        });
        return a || {};
      }
    };
  })();
})(window, document, Date);
(function (g, l, C, D) {
  function E(a) {
    n && n.tag && n.tag(p(":", "aui", a));
  }
  function m(a, b) {
    n &&
      n.count &&
      n.count(
        "aui:" + a,
        0 === b ? 0 : b || (n.count("aui:" + a) || 0) + 1
      );
  }
  function F(a) {
    try {
      return a.test(navigator.userAgent);
    } catch (b) {
      return !1;
    }
  }
  function G(a) {
    return "function" === typeof a;
  }
  function u(a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function p(a, b, c, f) {
    b = b && c ? b + a + c : b || c;
    return f ? p(a, b, f) : b;
  }
  function y(a, b, c) {
    try {
      Object.defineProperty(a, b, { value: c, writable: !1 });
    } catch (f) {
      a[b] = c;
    }
    return c;
  }
  function O(a, b) {
    a.className = P(a, b) + " " + b;
  }
  function P(a, b) {
    return (" " + a.className + " ")
      .split(" " + b + " ")
      .join(" ")
      .replace(/^ | $/g, "");
  }
  function ca(a, b, c) {
    var f = (c = a.length),
      e = function () {
        f-- ||
          (H.push(b), I || (q ? q.set(z) : setTimeout(z, 0), (I = !0)));
      };
    for (e(); c--; ) Q[a[c]] ? e() : (v[a[c]] = v[a[c]] || []).push(e);
  }
  function da(a, b, c, f, e) {
    var d = l.createElement(a ? "script" : "link");
    u(d, "error", f);
    e && u(d, "load", e);
    a
      ? ((d.type = "text/javascript"),
        (d.async = !0),
        c &&
          /AUIClients|images[/]I/.test(b) &&
          d.setAttribute("crossorigin", "anonymous"),
        (d.src = b))
      : ((d.rel = "stylesheet"), (d.href = b));
    l.getElementsByTagName("head")[0].appendChild(d);
  }
  function R(a, b) {
    return function (c, f) {
      function e() {
        da(
          b,
          c,
          d,
          function (b) {
            J
              ? m("resource_unload")
              : d
              ? ((d = !1), m("resource_retry"), e())
              : (m("resource_error"),
                a.log("Asset failed to load: " + c));
            b && b.stopPropagation
              ? b.stopPropagation()
              : g.event && (g.event.cancelBubble = !0);
          },
          f
        );
      }
      if (S[c]) return !1;
      S[c] = !0;
      m("resource_count");
      var d = !0;
      return !e();
    };
  }
  function ea(a, b, c) {
    for (
      var f = {
          name: a,
          guard: function (c) {
            return b.guardFatal(a, c);
          },
          guardTime: function (a) {
            return b.guardTime(a);
          },
          logError: function (c, d, e) {
            b.logError(c, d, e, a);
          },
        },
        e = [],
        d = 0;
      d < c.length;
      d++
    )
      A.hasOwnProperty(c[d]) &&
        (e[d] = K.hasOwnProperty(c[d]) ? K[c[d]](A[c[d]], f) : A[c[d]]);
    return e;
  }
  function w(a, b, c, f, e) {
    return function (d, k) {
      function n() {
        var a = null;
        f
          ? (a = k)
          : G(k) &&
            ((q.start = r()),
            (a = k.apply(g, ea(d, h, l))),
            (q.end = r()));
        if (b) {
          A[d] = a;
          a = d;
          for (Q[a] = !0; (v[a] || []).length; ) v[a].shift()();
          delete v[a];
        }
        q.done = !0;
      }
      var h = e || this;
      G(d) && ((k = d), (d = D));
      b &&
        ((d = d ? d.replace(T, "") : "__NONAME__"),
        L.hasOwnProperty(d) &&
          h.error(
            p(
              ", reregistered by ",
              p(" by ", d + " already registered", L[d]),
              h.attribution
            ),
            d
          ),
        (L[d] = h.attribution));
      for (var l = [], m = 0; m < a.length; m++)
        l[m] = a[m].replace(T, "");
      var q = (x[d || "anon" + ++fa] = {
        depend: l,
        registered: r(),
        namespace: h.namespace,
      });
      d && ha.hasOwnProperty(d);
      c ? n() : ca(l, h.guardFatal(d, n), d);
      return {
        decorate: function (a) {
          K[d] = h.guardFatal(d, a);
        },
      };
    };
  }
  function U(a) {
    return function () {
      var b = Array.prototype.slice.call(arguments);
      return {
        execute: w(b, !1, a, !1, this),
        register: w(b, !0, a, !1, this),
      };
    };
  }
  function M(a, b) {
    return function (c, f) {
      f || ((f = c), (c = D));
      var e = this.attribution;
      return function () {
        h.push(b || { attribution: e, name: c, logLevel: a });
        var d = f.apply(this, arguments);
        h.pop();
        return d;
      };
    };
  }
  function B(a, b) {
    this.load = { js: R(this, !0), css: R(this) };
    y(this, "namespace", b);
    y(this, "attribution", a);
  }
  function V() {
    l.body ? k.trigger("a-bodyBegin") : setTimeout(V, 20);
  }
  ("use strict");
  var t = (C.now =
      C.now ||
      function () {
        return +new C();
      }),
    r = (function (a) {
      return a && a.now ? a.now.bind(a) : t;
    })(g.performance),
    ia = r(),
    ha = {},
    n = g.ue;
  E();
  E("aui_build_date:3.24.1-2024-02-26");
  var W = {
      getItem: function (a) {
        try {
          return g.localStorage.getItem(a);
        } catch (b) {}
      },
      setItem: function (a, b) {
        try {
          return g.localStorage.setItem(a, b);
        } catch (c) {}
      },
    },
    q = g._pSetI(),
    H = [],
    ja = [],
    I = !1,
    ka =
      navigator.scheduling &&
      "function" === typeof navigator.scheduling.isInputPending;
  var z = function () {
    for (
      var a = q ? q.set(z) : setTimeout(z, 0), b = t();
      ja.length || H.length;

    )
      if ((H.shift()(), q && ka)) {
        if (
          (150 < t() - b && !navigator.scheduling.isInputPending()) ||
          (50 < t() - b && navigator.scheduling.isInputPending())
        )
          return;
      } else if (50 < t() - b) return;
    q ? q.clear(a) : clearTimeout(a);
    I = !1;
  };
  var Q = {},
    v = {},
    S = {},
    J = !1;
  u(g, "beforeunload", function () {
    J = !0;
    setTimeout(function () {
      J = !1;
    }, 1e4);
  });
  var T = /^prv:/,
    L = {},
    A = {},
    K = {},
    x = {},
    fa = 0,
    X = String.fromCharCode(92),
    h = [],
    Y = !0,
    Z = g.onerror;
  g.onerror = function (a, b, c, f, e) {
    (e && "object" === typeof e) ||
      ((e = Error(a, b, c)),
      (e.columnNumber = f),
      (e.stack =
        b || c || f ? p(X, e.message, "at " + p(":", b, c, f)) : D));
    var d = h.pop() || {};
    e.attribution = p(":", e.attribution || d.attribution, d.name);
    e.logLevel = d.logLevel;
    e.attribution &&
      console &&
      console.log &&
      console.log(
        [e.logLevel || "ERROR", a, "thrown by", e.attribution].join(" ")
      );
    h = [];
    Z && ((d = [].slice.call(arguments)), (d[4] = e), Z.apply(g, d));
  };
  B.prototype = {
    logError: function (a, b, c, f) {
      b = {
        message: b,
        logLevel: c || "ERROR",
        attribution: p(":", this.attribution, f),
      };
      if (g.ueLogError) return g.ueLogError(a || b, a ? b : null), !0;
      console && console.error && (console.log(b), console.error(a));
      return !1;
    },
    error: function (a, b, c, f) {
      a = Error(p(":", f, a, c));
      a.attribution = p(":", this.attribution, b);
      throw a;
    },
    guardError: M(),
    guardFatal: M("FATAL"),
    guardCurrent: function (a) {
      var b = h[h.length - 1];
      return b ? M(b.logLevel, b).call(this, a) : a;
    },
    guardTime: function (a) {
      var b = h[h.length - 1],
        c = b && b.name;
      return c && c in x
        ? function () {
            var b = r(),
              e = a.apply(this, arguments);
            x[c].async = (x[c].async || 0) + r() - b;
            return e;
          }
        : a;
    },
    log: function (a, b, c) {
      return this.logError(null, a, b, c);
    },
    declare: w([], !0, !0, !0),
    register: w([], !0),
    execute: w([]),
    AUI_BUILD_DATE: "3.24.1-2024-02-26",
    when: U(),
    now: U(!0),
    trigger: function (a, b, c) {
      var f = t();
      this.declare(a, {
        data: b,
        pageElapsedTime: f - (g.aPageStart || NaN),
        triggerTime: f,
      });
      c &&
        c.instrument &&
        N.when("prv:a-logTrigger").execute(function (b) {
          b(a);
        });
    },
    handleTriggers: function () {
      this.log("handleTriggers deprecated");
    },
    attributeErrors: function (a) {
      return new B(a);
    },
    _namespace: function (a, b) {
      return new B(a, b);
    },
    setPriority: function (a) {
      Y ? (Y = !1) : this.log("setPriority only accept the first call.");
    },
  };
  var k = y(g, "AmazonUIPageJS", new B());
  var N = k._namespace("PageJS", "AmazonUI");
  N.declare("prv:p-debug", x);
  k.declare("p-recorder-events", []);
  k.declare("p-recorder-stop", function () {});
  y(g, "P", k);
  V();
  if (l.addEventListener) {
    var aa;
    l.addEventListener(
      "DOMContentLoaded",
      (aa = function () {
        k.trigger("a-domready");
        l.removeEventListener("DOMContentLoaded", aa, !1);
      }),
      !1
    );
  }
  var ba = l.documentElement,
    la = g._pd(k, F, u, O, ba, W, P, m, "3.24.1-2024-02-26");
  F(/UCBrowser/i) ||
    (la.localStorage && O(ba, W.getItem("a-font-class")));
  k.declare("a-event-revised-handling", !1);
  g._sw(N, p, F, X, m, n, E, G, u, k);
  k.declare("a-fix-event-off", !1);
  m("pagejs:pkgExecTime", r() - ia);
})(window, document, Date);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/61ZS63EQSsL._RC|11Y+5x+kkTL.js,51ExhNVPbdL.js,11yKORv-GTL.js,11GgN1+C7hL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21BJeD9yjcL.js,01cS+tLhj4L.js,11rRjDLdAVL.js,51UOrPXYGsL.js,11YA5PIFcPL.js,11UNP9ncXuL.js,1174TO1N7GL.js,11EWRk6r74L.js,21paGe30x-L.js,01490L6yBnL.js,51nBtdyQGcL.js,01JYHc2oIlL.js,31nfKXylf6L.js,01ezj5Rkz1L.js,11bEz2VIYrL.js,31o2NGTXThL.js,01rpauTep4L.js,01RMmNcPMuL.js_.js?AUIClients/AmazonUI&WOBvLLbH#786834-T1"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/31jdfgcsPAL.js?AUIClients/AmazonUIFormControlsJS"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/21QREc8SBAL.js?AUIClients/AbbottPortalAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/413QmhKENjL.js?AUIClients/AbbottViewComponentCommonAssets"
);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
  "https://images-na.ssl-images-amazon.com/images/I/01gxRex5dHL.js?AUIClients/AbbottViewComponentDesktopAssets"
);
`;
