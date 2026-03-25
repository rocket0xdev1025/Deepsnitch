import { a as Ep, r as M } from "./wallet-libs-C4iBya-7.js";
import { g as kp } from "./crypto-libs-BTkSibId.js";
var Ya = { exports: {} },
  yt = {},
  Xa = { exports: {} },
  Ga = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc;
function xp() {
  return (
    Uc ||
      ((Uc = 1),
      (function (l) {
        function a($, G) {
          var B = $.length;
          $.push(G);
          e: for (; 0 < B; ) {
            var me = (B - 1) >>> 1,
              ge = $[me];
            if (0 < f(ge, G)) ($[me] = G), ($[B] = ge), (B = me);
            else break e;
          }
        }
        function u($) {
          return $.length === 0 ? null : $[0];
        }
        function c($) {
          if ($.length === 0) return null;
          var G = $[0],
            B = $.pop();
          if (B !== G) {
            $[0] = B;
            e: for (var me = 0, ge = $.length, _e = ge >>> 1; me < _e; ) {
              var Ve = 2 * (me + 1) - 1,
                Xt = $[Ve],
                Qe = Ve + 1,
                mn = $[Qe];
              if (0 > f(Xt, B))
                Qe < ge && 0 > f(mn, Xt)
                  ? (($[me] = mn), ($[Qe] = B), (me = Qe))
                  : (($[me] = Xt), ($[Ve] = B), (me = Ve));
              else if (Qe < ge && 0 > f(mn, B))
                ($[me] = mn), ($[Qe] = B), (me = Qe);
              else break e;
            }
          }
          return G;
        }
        function f($, G) {
          var B = $.sortIndex - G.sortIndex;
          return B !== 0 ? B : $.id - G.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          l.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            g = p.now();
          l.unstable_now = function () {
            return p.now() - g;
          };
        }
        var m = [],
          y = [],
          k = 1,
          R = null,
          T = 3,
          D = !1,
          j = !1,
          W = !1,
          I = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          oe = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function V($) {
          for (var G = u(y); G !== null; ) {
            if (G.callback === null) c(y);
            else if (G.startTime <= $)
              c(y), (G.sortIndex = G.expirationTime), a(m, G);
            else break;
            G = u(y);
          }
        }
        function de($) {
          if (((W = !1), V($), !j))
            if (u(m) !== null) (j = !0), he(ue);
            else {
              var G = u(y);
              G !== null && Ue(de, G.startTime - $);
            }
        }
        function ue($, G) {
          (j = !1), W && ((W = !1), H(ye), (ye = -1)), (D = !0);
          var B = T;
          try {
            for (
              V(G), R = u(m);
              R !== null && (!(R.expirationTime > G) || ($ && !We()));

            ) {
              var me = R.callback;
              if (typeof me == "function") {
                (R.callback = null), (T = R.priorityLevel);
                var ge = me(R.expirationTime <= G);
                (G = l.unstable_now()),
                  typeof ge == "function"
                    ? (R.callback = ge)
                    : R === u(m) && c(m),
                  V(G);
              } else c(m);
              R = u(m);
            }
            if (R !== null) var _e = !0;
            else {
              var Ve = u(y);
              Ve !== null && Ue(de, Ve.startTime - G), (_e = !1);
            }
            return _e;
          } finally {
            (R = null), (T = B), (D = !1);
          }
        }
        var L = !1,
          ae = null,
          ye = -1,
          ce = 5,
          xe = -1;
        function We() {
          return !(l.unstable_now() - xe < ce);
        }
        function at() {
          if (ae !== null) {
            var $ = l.unstable_now();
            xe = $;
            var G = !0;
            try {
              G = ae(!0, $);
            } finally {
              G ? Xe() : ((L = !1), (ae = null));
            }
          } else L = !1;
        }
        var Xe;
        if (typeof oe == "function")
          Xe = function () {
            oe(at);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            Ne = we.port2;
          (we.port1.onmessage = at),
            (Xe = function () {
              Ne.postMessage(null);
            });
        } else
          Xe = function () {
            I(at, 0);
          };
        function he($) {
          (ae = $), L || ((L = !0), Xe());
        }
        function Ue($, G) {
          ye = I(function () {
            $(l.unstable_now());
          }, G);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            j || D || ((j = !0), he(ue));
          }),
          (l.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ce = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return u(m);
          }),
          (l.unstable_next = function ($) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = T;
            }
            var B = T;
            T = G;
            try {
              return $();
            } finally {
              T = B;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function ($, G) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var B = T;
            T = $;
            try {
              return G();
            } finally {
              T = B;
            }
          }),
          (l.unstable_scheduleCallback = function ($, G, B) {
            var me = l.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? me + B : me))
                : (B = me),
              $)
            ) {
              case 1:
                var ge = -1;
                break;
              case 2:
                ge = 250;
                break;
              case 5:
                ge = 1073741823;
                break;
              case 4:
                ge = 1e4;
                break;
              default:
                ge = 5e3;
            }
            return (
              (ge = B + ge),
              ($ = {
                id: k++,
                callback: G,
                priorityLevel: $,
                startTime: B,
                expirationTime: ge,
                sortIndex: -1,
              }),
              B > me
                ? (($.sortIndex = B),
                  a(y, $),
                  u(m) === null &&
                    $ === u(y) &&
                    (W ? (H(ye), (ye = -1)) : (W = !0), Ue(de, B - me)))
                : (($.sortIndex = ge), a(m, $), j || D || ((j = !0), he(ue))),
              $
            );
          }),
          (l.unstable_shouldYield = We),
          (l.unstable_wrapCallback = function ($) {
            var G = T;
            return function () {
              var B = T;
              T = G;
              try {
                return $.apply(this, arguments);
              } finally {
                T = B;
              }
            };
          });
      })(Ga)),
    Ga
  );
}
var jc;
function Cp() {
  return jc || ((jc = 1), (Xa.exports = xp())), Xa.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac;
function Rp() {
  if (Ac) return yt;
  Ac = 1;
  var l = Ep(),
    a = Cp();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    f = {};
  function d(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var g = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    k = {},
    R = {};
  function T(e) {
    return m.call(R, e)
      ? !0
      : m.call(k, e)
      ? !1
      : y.test(e)
      ? (R[e] = !0)
      : ((k[e] = !0), !1);
  }
  function D(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function j(e, t, n, r) {
    if (t === null || typeof t > "u" || D(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function W(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = s);
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      I[e] = new W(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      I[t] = new W(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      I[e] = new W(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      I[e] = new W(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        I[e] = new W(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      I[e] = new W(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      I[e] = new W(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      I[e] = new W(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      I[e] = new W(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var H = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(H, oe);
      I[t] = new W(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(H, oe);
        I[t] = new W(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(H, oe);
      I[t] = new W(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      I[e] = new W(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (I.xlinkHref = new W(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      I[e] = new W(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function V(e, t, n, r) {
    var o = I.hasOwnProperty(t) ? I[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (j(t, n, o, r) && (n = null),
      r || o === null
        ? T(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var de = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ue = Symbol.for("react.element"),
    L = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    ye = Symbol.for("react.strict_mode"),
    ce = Symbol.for("react.profiler"),
    xe = Symbol.for("react.provider"),
    We = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    we = Symbol.for("react.suspense_list"),
    Ne = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    Ue = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var B = Object.assign,
    me;
  function ge(e) {
    if (me === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        me = (t && t[1]) || "";
      }
    return (
      `
` +
      me +
      e
    );
  }
  var _e = !1;
  function Ve(e, t) {
    if (!e || _e) return "";
    _e = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var r = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            r = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == "string") {
        for (
          var o = P.stack.split(`
`),
            i = r.stack.split(`
`),
            s = o.length - 1,
            h = i.length - 1;
          1 <= s && 0 <= h && o[s] !== i[h];

        )
          h--;
        for (; 1 <= s && 0 <= h; s--, h--)
          if (o[s] !== i[h]) {
            if (s !== 1 || h !== 1)
              do
                if ((s--, h--, 0 > h || o[s] !== i[h])) {
                  var w =
                    `
` + o[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= s && 0 <= h);
            break;
          }
      }
    } finally {
      (_e = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? ge(e) : "";
  }
  function Xt(e) {
    switch (e.tag) {
      case 5:
        return ge(e.type);
      case 16:
        return ge("Lazy");
      case 13:
        return ge("Suspense");
      case 19:
        return ge("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ve(e.type, !1)), e;
      case 11:
        return (e = Ve(e.type.render, !1)), e;
      case 1:
        return (e = Ve(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case L:
        return "Portal";
      case ce:
        return "Profiler";
      case ye:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case We:
          return (e.displayName || "Context") + ".Consumer";
        case xe:
          return (e._context.displayName || "Context") + ".Provider";
        case at:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ne:
          return (
            (t = e.displayName || null), t !== null ? t : Qe(e.type) || "Memo"
          );
        case he:
          (t = e._payload), (e = e._init);
          try {
            return Qe(e(t));
          } catch {}
      }
    return null;
  }
  function mn(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qe(t);
      case 8:
        return t === ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Gt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Bl(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ge(e) {
    var t = Bl(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (s) {
            (r = "" + s), i.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function It(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function Qr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Bl(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function pr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ut(e, t) {
    var n = t.checked;
    return B({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Wl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Gt(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Vl(e, t) {
    (t = t.checked), t != null && V(e, "checked", t, !1);
  }
  function hr(e, t) {
    Vl(e, t);
    var n = Gt(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Kr(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Kr(e, t.type, Gt(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Ql(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Kr(e, t, n) {
    (t !== "number" || pr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function vn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Gt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return B({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function yn(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Gt(n) };
  }
  function Yr(e, t) {
    var n = Gt(t.value),
      r = Gt(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function mr(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function At(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function wt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? At(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Yn,
    vr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Yn = Yn || document.createElement("div"),
            Yn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Yn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Xn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ct = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Kl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ct).forEach(function (e) {
    Kl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ct[t] = ct[e]);
    });
  });
  function Xr(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ct.hasOwnProperty(e) && ct[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Gr(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Xr(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var di = B(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function yr(e, t) {
    if (t) {
      if (di[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function gn(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function Gn(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Jr = null,
    nn = null,
    wn = null;
  function Zr(e) {
    if ((e = yl(e))) {
      if (typeof Jr != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = ho(t)), Jr(e.stateNode, e.type, t));
    }
  }
  function Jn(e) {
    nn ? (wn ? wn.push(e) : (wn = [e])) : (nn = e);
  }
  function Zn() {
    if (nn) {
      var e = nn,
        t = wn;
      if (((wn = nn = null), Zr(e), t)) for (e = 0; e < t.length; e++) Zr(t[e]);
    }
  }
  function Yl(e, t) {
    return e(t);
  }
  function Xl() {}
  var v = !1;
  function E(e, t, n) {
    if (v) return e(t, n);
    v = !0;
    try {
      return Yl(e, t, n);
    } finally {
      (v = !1), (nn !== null || wn !== null) && (Xl(), Zn());
    }
  }
  function N(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ho(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var F = !1;
  if (g)
    try {
      var A = {};
      Object.defineProperty(A, "passive", {
        get: function () {
          F = !0;
        },
      }),
        window.addEventListener("test", A, A),
        window.removeEventListener("test", A, A);
    } catch {
      F = !1;
    }
  function te(e, t, n, r, o, i, s, h, w) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (_) {
      this.onError(_);
    }
  }
  var Z = !1,
    Y = null,
    b = !1,
    ne = null,
    ie = {
      onError: function (e) {
        (Z = !0), (Y = e);
      },
    };
  function ee(e, t, n, r, o, i, s, h, w) {
    (Z = !1), (Y = null), te.apply(ie, arguments);
  }
  function fe(e, t, n, r, o, i, s, h, w) {
    if ((ee.apply(this, arguments), Z)) {
      if (Z) {
        var P = Y;
        (Z = !1), (Y = null);
      } else throw Error(u(198));
      b || ((b = !0), (ne = P));
    }
  }
  function Se(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ae(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Je(e) {
    if (Se(e) !== e) throw Error(u(188));
  }
  function Te(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Se(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return Je(o), e;
          if (i === r) return Je(o), t;
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = o), (r = i);
      else {
        for (var s = !1, h = o.child; h; ) {
          if (h === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (h === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          h = h.sibling;
        }
        if (!s) {
          for (h = i.child; h; ) {
            if (h === n) {
              (s = !0), (n = i), (r = o);
              break;
            }
            if (h === r) {
              (s = !0), (r = i), (n = o);
              break;
            }
            h = h.sibling;
          }
          if (!s) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Pe(e) {
    return (e = Te(e)), e !== null ? Jt(e) : null;
  }
  function Jt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Jt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Sn = a.unstable_scheduleCallback,
    $t = a.unstable_cancelCallback,
    Rt = a.unstable_shouldYield,
    qr = a.unstable_requestPaint,
    Le = a.unstable_now,
    rn = a.unstable_getCurrentPriorityLevel,
    En = a.unstable_ImmediatePriority,
    qn = a.unstable_UserBlockingPriority,
    ve = a.unstable_NormalPriority,
    Ze = a.unstable_LowPriority,
    ln = a.unstable_IdlePriority,
    Pt = null,
    Ce = null;
  function wr(e) {
    if (Ce && typeof Ce.onCommitFiberRoot == "function")
      try {
        Ce.onCommitFiberRoot(Pt, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : Af,
    pi = Math.log,
    jf = Math.LN2;
  function Af(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pi(e) / jf) | 0)) | 0;
  }
  var Gl = 64,
    Jl = 4194304;
  function br(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Zl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var h = s & ~o;
      h !== 0 ? (r = br(h)) : ((i &= s), i !== 0 && (r = br(i)));
    } else (s = n & ~o), s !== 0 ? (r = br(s)) : i !== 0 && (r = br(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & o) === 0 &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function $f(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var s = 31 - ft(i),
        h = 1 << s,
        w = o[s];
      w === -1
        ? ((h & n) === 0 || (h & r) !== 0) && (o[s] = $f(h, t))
        : w <= t && (e.expiredLanes |= h),
        (i &= ~h);
    }
  }
  function hi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function hu() {
    var e = Gl;
    return (Gl <<= 1), (Gl & 4194240) === 0 && (Gl = 64), e;
  }
  function mi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function el(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ft(t)),
      (e[t] = n);
  }
  function Bf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - ft(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function vi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var Re = 0;
  function mu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var vu,
    yi,
    yu,
    gu,
    wu,
    gi = !1,
    ql = [],
    kn = null,
    xn = null,
    Cn = null,
    tl = new Map(),
    nl = new Map(),
    Rn = [],
    Wf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Su(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Cn = null;
        break;
      case "pointerover":
      case "pointerout":
        tl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nl.delete(t.pointerId);
    }
  }
  function rl(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = yl(t)), t !== null && yi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Vf(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (kn = rl(kn, e, t, n, r, o)), !0;
      case "dragenter":
        return (xn = rl(xn, e, t, n, r, o)), !0;
      case "mouseover":
        return (Cn = rl(Cn, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return tl.set(i, rl(tl.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), nl.set(i, rl(nl.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Eu(e) {
    var t = bn(e.target);
    if (t !== null) {
      var n = Se(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ae(n)), t !== null)) {
            (e.blockedOn = t),
              wu(e.priority, function () {
                yu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Si(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (gr = r), n.target.dispatchEvent(r), (gr = null);
      } else return (t = yl(n)), t !== null && yi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ku(e, t, n) {
    bl(e) && n.delete(t);
  }
  function Qf() {
    (gi = !1),
      kn !== null && bl(kn) && (kn = null),
      xn !== null && bl(xn) && (xn = null),
      Cn !== null && bl(Cn) && (Cn = null),
      tl.forEach(ku),
      nl.forEach(ku);
  }
  function ll(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      gi ||
        ((gi = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Qf)));
  }
  function ol(e) {
    function t(o) {
      return ll(o, e);
    }
    if (0 < ql.length) {
      ll(ql[0], e);
      for (var n = 1; n < ql.length; n++) {
        var r = ql[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      kn !== null && ll(kn, e),
        xn !== null && ll(xn, e),
        Cn !== null && ll(Cn, e),
        tl.forEach(t),
        nl.forEach(t),
        n = 0;
      n < Rn.length;
      n++
    )
      (r = Rn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && ((n = Rn[0]), n.blockedOn === null); )
      Eu(n), n.blockedOn === null && Rn.shift();
  }
  var Sr = de.ReactCurrentBatchConfig,
    eo = !0;
  function Kf(e, t, n, r) {
    var o = Re,
      i = Sr.transition;
    Sr.transition = null;
    try {
      (Re = 1), wi(e, t, n, r);
    } finally {
      (Re = o), (Sr.transition = i);
    }
  }
  function Yf(e, t, n, r) {
    var o = Re,
      i = Sr.transition;
    Sr.transition = null;
    try {
      (Re = 4), wi(e, t, n, r);
    } finally {
      (Re = o), (Sr.transition = i);
    }
  }
  function wi(e, t, n, r) {
    if (eo) {
      var o = Si(e, t, n, r);
      if (o === null) Ui(e, t, r, to, n), Su(e, r);
      else if (Vf(o, e, t, n, r)) r.stopPropagation();
      else if ((Su(e, r), t & 4 && -1 < Wf.indexOf(e))) {
        for (; o !== null; ) {
          var i = yl(o);
          if (
            (i !== null && vu(i),
            (i = Si(e, t, n, r)),
            i === null && Ui(e, t, r, to, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else Ui(e, t, r, null, n);
    }
  }
  var to = null;
  function Si(e, t, n, r) {
    if (((to = null), (e = Gn(r)), (e = bn(e)), e !== null))
      if (((t = Se(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ae(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (to = e), null;
  }
  function xu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rn()) {
          case En:
            return 1;
          case qn:
            return 4;
          case ve:
          case Ze:
            return 16;
          case ln:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Pn = null,
    Ei = null,
    no = null;
  function Cu() {
    if (no) return no;
    var e,
      t = Ei,
      n = t.length,
      r,
      o = "value" in Pn ? Pn.value : Pn.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (no = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ro(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function lo() {
    return !0;
  }
  function Ru() {
    return !1;
  }
  function St(e) {
    function t(n, r, o, i, s) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var h in e)
        e.hasOwnProperty(h) && ((n = e[h]), (this[h] = n ? n(i) : i[h]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? lo
          : Ru),
        (this.isPropagationStopped = Ru),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = lo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = lo));
        },
        persist: function () {},
        isPersistent: lo,
      }),
      t
    );
  }
  var Er = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ki = St(Er),
    il = B({}, Er, { view: 0, detail: 0 }),
    Xf = St(il),
    xi,
    Ci,
    al,
    oo = B({}, il, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Pi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== al &&
              (al && e.type === "mousemove"
                ? ((xi = e.screenX - al.screenX), (Ci = e.screenY - al.screenY))
                : (Ci = xi = 0),
              (al = e)),
            xi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ci;
      },
    }),
    Pu = St(oo),
    Gf = B({}, oo, { dataTransfer: 0 }),
    Jf = St(Gf),
    Zf = B({}, il, { relatedTarget: 0 }),
    Ri = St(Zf),
    qf = B({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bf = St(qf),
    ed = B({}, Er, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    td = St(ed),
    nd = B({}, Er, { data: 0 }),
    Lu = St(nd),
    rd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ld = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    od = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function id(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = od[e])
      ? !!t[e]
      : !1;
  }
  function Pi() {
    return id;
  }
  var ad = B({}, il, {
      key: function (e) {
        if (e.key) {
          var t = rd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? ld[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pi,
      charCode: function (e) {
        return e.type === "keypress" ? ro(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ro(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ud = St(ad),
    sd = B({}, oo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nu = St(sd),
    cd = B({}, il, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pi,
    }),
    fd = St(cd),
    dd = B({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pd = St(dd),
    hd = B({}, oo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    md = St(hd),
    vd = [9, 13, 27, 32],
    Li = g && "CompositionEvent" in window,
    ul = null;
  g && "documentMode" in document && (ul = document.documentMode);
  var yd = g && "TextEvent" in window && !ul,
    Mu = g && (!Li || (ul && 8 < ul && 11 >= ul)),
    Tu = " ",
    Du = !1;
  function zu(e, t) {
    switch (e) {
      case "keyup":
        return vd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _u(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var kr = !1;
  function gd(e, t) {
    switch (e) {
      case "compositionend":
        return _u(t);
      case "keypress":
        return t.which !== 32 ? null : ((Du = !0), Tu);
      case "textInput":
        return (e = t.data), e === Tu && Du ? null : e;
      default:
        return null;
    }
  }
  function wd(e, t) {
    if (kr)
      return e === "compositionend" || (!Li && zu(e, t))
        ? ((e = Cu()), (no = Ei = Pn = null), (kr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Mu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sd[e.type] : t === "textarea";
  }
  function Ou(e, t, n, r) {
    Jn(r),
      (t = co(t, "onChange")),
      0 < t.length &&
        ((n = new ki("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var sl = null,
    cl = null;
  function Ed(e) {
    bu(e, 0);
  }
  function io(e) {
    var t = Lr(e);
    if (Qr(t)) return e;
  }
  function kd(e, t) {
    if (e === "change") return t;
  }
  var Iu = !1;
  if (g) {
    var Ni;
    if (g) {
      var Mi = "oninput" in document;
      if (!Mi) {
        var Uu = document.createElement("div");
        Uu.setAttribute("oninput", "return;"),
          (Mi = typeof Uu.oninput == "function");
      }
      Ni = Mi;
    } else Ni = !1;
    Iu = Ni && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    sl && (sl.detachEvent("onpropertychange", Au), (cl = sl = null));
  }
  function Au(e) {
    if (e.propertyName === "value" && io(cl)) {
      var t = [];
      Ou(t, cl, e, Gn(e)), E(Ed, t);
    }
  }
  function xd(e, t, n) {
    e === "focusin"
      ? (ju(), (sl = t), (cl = n), sl.attachEvent("onpropertychange", Au))
      : e === "focusout" && ju();
  }
  function Cd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return io(cl);
  }
  function Rd(e, t) {
    if (e === "click") return io(t);
  }
  function Pd(e, t) {
    if (e === "input" || e === "change") return io(t);
  }
  function Ld(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ht = typeof Object.is == "function" ? Object.is : Ld;
  function fl(e, t) {
    if (Ht(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!m.call(t, o) || !Ht(e[o], t[o])) return !1;
    }
    return !0;
  }
  function $u(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hu(e, t) {
    var n = $u(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = $u(n);
    }
  }
  function Bu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Bu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Wu() {
    for (var e = window, t = pr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = pr(e.document);
    }
    return t;
  }
  function Ti(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Nd(e) {
    var t = Wu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Bu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ti(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          (r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = Hu(n, i));
          var s = Hu(n, r);
          o &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Md = g && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    Di = null,
    dl = null,
    zi = !1;
  function Vu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zi ||
      xr == null ||
      xr !== pr(r) ||
      ((r = xr),
      "selectionStart" in r && Ti(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (dl && fl(dl, r)) ||
        ((dl = r),
        (r = co(Di, "onSelect")),
        0 < r.length &&
          ((t = new ki("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = xr))));
  }
  function ao(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Cr = {
      animationend: ao("Animation", "AnimationEnd"),
      animationiteration: ao("Animation", "AnimationIteration"),
      animationstart: ao("Animation", "AnimationStart"),
      transitionend: ao("Transition", "TransitionEnd"),
    },
    _i = {},
    Qu = {};
  g &&
    ((Qu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Cr.animationend.animation,
      delete Cr.animationiteration.animation,
      delete Cr.animationstart.animation),
    "TransitionEvent" in window || delete Cr.transitionend.transition);
  function uo(e) {
    if (_i[e]) return _i[e];
    if (!Cr[e]) return e;
    var t = Cr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qu) return (_i[e] = t[n]);
    return e;
  }
  var Ku = uo("animationend"),
    Yu = uo("animationiteration"),
    Xu = uo("animationstart"),
    Gu = uo("transitionend"),
    Ju = new Map(),
    Zu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ln(e, t) {
    Ju.set(e, t), d(t, [e]);
  }
  for (var Fi = 0; Fi < Zu.length; Fi++) {
    var Oi = Zu[Fi],
      Td = Oi.toLowerCase(),
      Dd = Oi[0].toUpperCase() + Oi.slice(1);
    Ln(Td, "on" + Dd);
  }
  Ln(Ku, "onAnimationEnd"),
    Ln(Yu, "onAnimationIteration"),
    Ln(Xu, "onAnimationStart"),
    Ln("dblclick", "onDoubleClick"),
    Ln("focusin", "onFocus"),
    Ln("focusout", "onBlur"),
    Ln(Gu, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var pl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    zd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(pl)
    );
  function qu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), fe(r, t, void 0, e), (e.currentTarget = null);
  }
  function bu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var h = r[s],
              w = h.instance,
              P = h.currentTarget;
            if (((h = h.listener), w !== i && o.isPropagationStopped()))
              break e;
            qu(o, h, P), (i = w);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((h = r[s]),
              (w = h.instance),
              (P = h.currentTarget),
              (h = h.listener),
              w !== i && o.isPropagationStopped())
            )
              break e;
            qu(o, h, P), (i = w);
          }
      }
    }
    if (b) throw ((e = ne), (b = !1), (ne = null), e);
  }
  function De(e, t) {
    var n = t[Wi];
    n === void 0 && (n = t[Wi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (es(t, e, 2, !1), n.add(r));
  }
  function Ii(e, t, n) {
    var r = 0;
    t && (r |= 4), es(n, e, r, t);
  }
  var so = "_reactListening" + Math.random().toString(36).slice(2);
  function hl(e) {
    if (!e[so]) {
      (e[so] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (zd.has(n) || Ii(n, !1, e), Ii(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[so] || ((t[so] = !0), Ii("selectionchange", !1, t));
    }
  }
  function es(e, t, n, r) {
    switch (xu(t)) {
      case 1:
        var o = Kf;
        break;
      case 4:
        o = Yf;
        break;
      default:
        o = wi;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !F ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function Ui(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var h = r.stateNode.containerInfo;
          if (h === o || (h.nodeType === 8 && h.parentNode === o)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var w = s.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = s.stateNode.containerInfo),
                w === o || (w.nodeType === 8 && w.parentNode === o))
              )
                return;
              s = s.return;
            }
          for (; h !== null; ) {
            if (((s = bn(h)), s === null)) return;
            if (((w = s.tag), w === 5 || w === 6)) {
              r = i = s;
              continue e;
            }
            h = h.parentNode;
          }
        }
        r = r.return;
      }
    E(function () {
      var P = i,
        _ = Gn(n),
        O = [];
      e: {
        var z = Ju.get(e);
        if (z !== void 0) {
          var Q = ki,
            X = e;
          switch (e) {
            case "keypress":
              if (ro(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = ud;
              break;
            case "focusin":
              (X = "focus"), (Q = Ri);
              break;
            case "focusout":
              (X = "blur"), (Q = Ri);
              break;
            case "beforeblur":
            case "afterblur":
              Q = Ri;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Pu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = fd;
              break;
            case Ku:
            case Yu:
            case Xu:
              Q = bf;
              break;
            case Gu:
              Q = pd;
              break;
            case "scroll":
              Q = Xf;
              break;
            case "wheel":
              Q = md;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = td;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Nu;
          }
          var J = (t & 4) !== 0,
            $e = !J && e === "scroll",
            x = J ? (z !== null ? z + "Capture" : null) : z;
          J = [];
          for (var S = P, C; S !== null; ) {
            C = S;
            var U = C.stateNode;
            if (
              (C.tag === 5 &&
                U !== null &&
                ((C = U),
                x !== null &&
                  ((U = N(S, x)), U != null && J.push(ml(S, U, C)))),
              $e)
            )
              break;
            S = S.return;
          }
          0 < J.length &&
            ((z = new Q(z, X, null, n, _)), O.push({ event: z, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            z &&
              n !== gr &&
              (X = n.relatedTarget || n.fromElement) &&
              (bn(X) || X[on]))
          )
            break e;
          if (
            (Q || z) &&
            ((z =
              _.window === _
                ? _
                : (z = _.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            Q
              ? ((X = n.relatedTarget || n.toElement),
                (Q = P),
                (X = X ? bn(X) : null),
                X !== null &&
                  (($e = Se(X)), X !== $e || (X.tag !== 5 && X.tag !== 6)) &&
                  (X = null))
              : ((Q = null), (X = P)),
            Q !== X)
          ) {
            if (
              ((J = Pu),
              (U = "onMouseLeave"),
              (x = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = Nu),
                (U = "onPointerLeave"),
                (x = "onPointerEnter"),
                (S = "pointer")),
              ($e = Q == null ? z : Lr(Q)),
              (C = X == null ? z : Lr(X)),
              (z = new J(U, S + "leave", Q, n, _)),
              (z.target = $e),
              (z.relatedTarget = C),
              (U = null),
              bn(_) === P &&
                ((J = new J(x, S + "enter", X, n, _)),
                (J.target = C),
                (J.relatedTarget = $e),
                (U = J)),
              ($e = U),
              Q && X)
            )
              t: {
                for (J = Q, x = X, S = 0, C = J; C; C = Rr(C)) S++;
                for (C = 0, U = x; U; U = Rr(U)) C++;
                for (; 0 < S - C; ) (J = Rr(J)), S--;
                for (; 0 < C - S; ) (x = Rr(x)), C--;
                for (; S--; ) {
                  if (J === x || (x !== null && J === x.alternate)) break t;
                  (J = Rr(J)), (x = Rr(x));
                }
                J = null;
              }
            else J = null;
            Q !== null && ts(O, z, Q, J, !1),
              X !== null && $e !== null && ts(O, $e, X, J, !0);
          }
        }
        e: {
          if (
            ((z = P ? Lr(P) : window),
            (Q = z.nodeName && z.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && z.type === "file"))
          )
            var q = kd;
          else if (Fu(z))
            if (Iu) q = Pd;
            else {
              q = Cd;
              var re = xd;
            }
          else
            (Q = z.nodeName) &&
              Q.toLowerCase() === "input" &&
              (z.type === "checkbox" || z.type === "radio") &&
              (q = Rd);
          if (q && (q = q(e, P))) {
            Ou(O, q, n, _);
            break e;
          }
          re && re(e, z, P),
            e === "focusout" &&
              (re = z._wrapperState) &&
              re.controlled &&
              z.type === "number" &&
              Kr(z, "number", z.value);
        }
        switch (((re = P ? Lr(P) : window), e)) {
          case "focusin":
            (Fu(re) || re.contentEditable === "true") &&
              ((xr = re), (Di = P), (dl = null));
            break;
          case "focusout":
            dl = Di = xr = null;
            break;
          case "mousedown":
            zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zi = !1), Vu(O, n, _);
            break;
          case "selectionchange":
            if (Md) break;
          case "keydown":
          case "keyup":
            Vu(O, n, _);
        }
        var le;
        if (Li)
          e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          kr
            ? zu(e, n) && (se = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (se = "onCompositionStart");
        se &&
          (Mu &&
            n.locale !== "ko" &&
            (kr || se !== "onCompositionStart"
              ? se === "onCompositionEnd" && kr && (le = Cu())
              : ((Pn = _),
                (Ei = "value" in Pn ? Pn.value : Pn.textContent),
                (kr = !0))),
          (re = co(P, se)),
          0 < re.length &&
            ((se = new Lu(se, e, null, n, _)),
            O.push({ event: se, listeners: re }),
            le
              ? (se.data = le)
              : ((le = _u(n)), le !== null && (se.data = le)))),
          (le = yd ? gd(e, n) : wd(e, n)) &&
            ((P = co(P, "onBeforeInput")),
            0 < P.length &&
              ((_ = new Lu("onBeforeInput", "beforeinput", null, n, _)),
              O.push({ event: _, listeners: P }),
              (_.data = le)));
      }
      bu(O, t);
    });
  }
  function ml(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function co(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = N(e, n)),
        i != null && r.unshift(ml(e, i, o)),
        (i = N(e, t)),
        i != null && r.push(ml(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function Rr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ts(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var h = n,
        w = h.alternate,
        P = h.stateNode;
      if (w !== null && w === r) break;
      h.tag === 5 &&
        P !== null &&
        ((h = P),
        o
          ? ((w = N(n, i)), w != null && s.unshift(ml(n, w, h)))
          : o || ((w = N(n, i)), w != null && s.push(ml(n, w, h)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var _d = /\r\n?/g,
    Fd = /\u0000|\uFFFD/g;
  function ns(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _d,
        `
`
      )
      .replace(Fd, "");
  }
  function fo(e, t, n) {
    if (((t = ns(t)), ns(e) !== t && n)) throw Error(u(425));
  }
  function po() {}
  var ji = null,
    Ai = null;
  function $i(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hi = typeof setTimeout == "function" ? setTimeout : void 0,
    Od = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rs = typeof Promise == "function" ? Promise : void 0,
    Id =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rs < "u"
        ? function (e) {
            return rs.resolve(null).then(e).catch(Ud);
          }
        : Hi;
  function Ud(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bi(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), ol(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    ol(t);
  }
  function Nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ls(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Pr = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + Pr,
    vl = "__reactProps$" + Pr,
    on = "__reactContainer$" + Pr,
    Wi = "__reactEvents$" + Pr,
    jd = "__reactListeners$" + Pr,
    Ad = "__reactHandles$" + Pr;
  function bn(e) {
    var t = e[Zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[on] || n[Zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ls(e); e !== null; ) {
            if ((n = e[Zt])) return n;
            e = ls(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function yl(e) {
    return (
      (e = e[Zt] || e[on]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ho(e) {
    return e[vl] || null;
  }
  var Vi = [],
    Nr = -1;
  function Mn(e) {
    return { current: e };
  }
  function ze(e) {
    0 > Nr || ((e.current = Vi[Nr]), (Vi[Nr] = null), Nr--);
  }
  function Me(e, t) {
    Nr++, (Vi[Nr] = e.current), (e.current = t);
  }
  var Tn = {},
    rt = Mn(Tn),
    dt = Mn(!1),
    er = Tn;
  function Mr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function pt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function mo() {
    ze(dt), ze(rt);
  }
  function os(e, t, n) {
    if (rt.current !== Tn) throw Error(u(168));
    Me(rt, t), Me(dt, n);
  }
  function is(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(u(108, mn(e) || "Unknown", o));
    return B({}, n, r);
  }
  function vo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Tn),
      (er = rt.current),
      Me(rt, e),
      Me(dt, dt.current),
      !0
    );
  }
  function as(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = is(e, t, er)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ze(dt),
        ze(rt),
        Me(rt, e))
      : ze(dt),
      Me(dt, n);
  }
  var an = null,
    yo = !1,
    Qi = !1;
  function us(e) {
    an === null ? (an = [e]) : an.push(e);
  }
  function $d(e) {
    (yo = !0), us(e);
  }
  function Dn() {
    if (!Qi && an !== null) {
      Qi = !0;
      var e = 0,
        t = Re;
      try {
        var n = an;
        for (Re = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (an = null), (yo = !1);
      } catch (o) {
        throw (an !== null && (an = an.slice(e + 1)), Sn(En, Dn), o);
      } finally {
        (Re = t), (Qi = !1);
      }
    }
    return null;
  }
  var Tr = [],
    Dr = 0,
    go = null,
    wo = 0,
    Lt = [],
    Nt = 0,
    tr = null,
    un = 1,
    sn = "";
  function nr(e, t) {
    (Tr[Dr++] = wo), (Tr[Dr++] = go), (go = e), (wo = t);
  }
  function ss(e, t, n) {
    (Lt[Nt++] = un), (Lt[Nt++] = sn), (Lt[Nt++] = tr), (tr = e);
    var r = un;
    e = sn;
    var o = 32 - ft(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - ft(t) + o;
    if (30 < i) {
      var s = o - (o % 5);
      (i = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (o -= s),
        (un = (1 << (32 - ft(t) + o)) | (n << o) | r),
        (sn = i + e);
    } else (un = (1 << i) | (n << o) | r), (sn = e);
  }
  function Ki(e) {
    e.return !== null && (nr(e, 1), ss(e, 1, 0));
  }
  function Yi(e) {
    for (; e === go; )
      (go = Tr[--Dr]), (Tr[Dr] = null), (wo = Tr[--Dr]), (Tr[Dr] = null);
    for (; e === tr; )
      (tr = Lt[--Nt]),
        (Lt[Nt] = null),
        (sn = Lt[--Nt]),
        (Lt[Nt] = null),
        (un = Lt[--Nt]),
        (Lt[Nt] = null);
  }
  var Et = null,
    kt = null,
    Fe = !1,
    Bt = null;
  function cs(e, t) {
    var n = zt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function fs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Et = e), (kt = Nn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Et = e), (kt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = tr !== null ? { id: un, overflow: sn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = zt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Et = e),
              (kt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gi(e) {
    if (Fe) {
      var t = kt;
      if (t) {
        var n = t;
        if (!fs(e, t)) {
          if (Xi(e)) throw Error(u(418));
          t = Nn(n.nextSibling);
          var r = Et;
          t && fs(e, t)
            ? cs(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (Et = e));
        }
      } else {
        if (Xi(e)) throw Error(u(418));
        (e.flags = (e.flags & -4097) | 2), (Fe = !1), (Et = e);
      }
    }
  }
  function ds(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Et = e;
  }
  function So(e) {
    if (e !== Et) return !1;
    if (!Fe) return ds(e), (Fe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps))),
      t && (t = kt))
    ) {
      if (Xi(e)) throw (ps(), Error(u(418)));
      for (; t; ) cs(e, t), (t = Nn(t.nextSibling));
    }
    if ((ds(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                kt = Nn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        kt = null;
      }
    } else kt = Et ? Nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ps() {
    for (var e = kt; e; ) e = Nn(e.nextSibling);
  }
  function zr() {
    (kt = Et = null), (Fe = !1);
  }
  function Ji(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  var Hd = de.ReactCurrentBatchConfig;
  function gl(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (s) {
              var h = o.refs;
              s === null ? delete h[i] : (h[i] = s);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Eo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function hs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ms(e) {
    function t(x, S) {
      if (e) {
        var C = x.deletions;
        C === null ? ((x.deletions = [S]), (x.flags |= 16)) : C.push(S);
      }
    }
    function n(x, S) {
      if (!e) return null;
      for (; S !== null; ) t(x, S), (S = S.sibling);
      return null;
    }
    function r(x, S) {
      for (x = new Map(); S !== null; )
        S.key !== null ? x.set(S.key, S) : x.set(S.index, S), (S = S.sibling);
      return x;
    }
    function o(x, S) {
      return (x = An(x, S)), (x.index = 0), (x.sibling = null), x;
    }
    function i(x, S, C) {
      return (
        (x.index = C),
        e
          ? ((C = x.alternate),
            C !== null
              ? ((C = C.index), C < S ? ((x.flags |= 2), S) : C)
              : ((x.flags |= 2), S))
          : ((x.flags |= 1048576), S)
      );
    }
    function s(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function h(x, S, C, U) {
      return S === null || S.tag !== 6
        ? ((S = Ha(C, x.mode, U)), (S.return = x), S)
        : ((S = o(S, C)), (S.return = x), S);
    }
    function w(x, S, C, U) {
      var q = C.type;
      return q === ae
        ? _(x, S, C.props.children, U, C.key)
        : S !== null &&
          (S.elementType === q ||
            (typeof q == "object" &&
              q !== null &&
              q.$$typeof === he &&
              hs(q) === S.type))
        ? ((U = o(S, C.props)), (U.ref = gl(x, S, C)), (U.return = x), U)
        : ((U = Qo(C.type, C.key, C.props, null, x.mode, U)),
          (U.ref = gl(x, S, C)),
          (U.return = x),
          U);
    }
    function P(x, S, C, U) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== C.containerInfo ||
        S.stateNode.implementation !== C.implementation
        ? ((S = Ba(C, x.mode, U)), (S.return = x), S)
        : ((S = o(S, C.children || [])), (S.return = x), S);
    }
    function _(x, S, C, U, q) {
      return S === null || S.tag !== 7
        ? ((S = cr(C, x.mode, U, q)), (S.return = x), S)
        : ((S = o(S, C)), (S.return = x), S);
    }
    function O(x, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = Ha("" + S, x.mode, C)), (S.return = x), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ue:
            return (
              (C = Qo(S.type, S.key, S.props, null, x.mode, C)),
              (C.ref = gl(x, null, S)),
              (C.return = x),
              C
            );
          case L:
            return (S = Ba(S, x.mode, C)), (S.return = x), S;
          case he:
            var U = S._init;
            return O(x, U(S._payload), C);
        }
        if (Kn(S) || G(S))
          return (S = cr(S, x.mode, C, null)), (S.return = x), S;
        Eo(x, S);
      }
      return null;
    }
    function z(x, S, C, U) {
      var q = S !== null ? S.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return q !== null ? null : h(x, S, "" + C, U);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case ue:
            return C.key === q ? w(x, S, C, U) : null;
          case L:
            return C.key === q ? P(x, S, C, U) : null;
          case he:
            return (q = C._init), z(x, S, q(C._payload), U);
        }
        if (Kn(C) || G(C)) return q !== null ? null : _(x, S, C, U, null);
        Eo(x, C);
      }
      return null;
    }
    function Q(x, S, C, U, q) {
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return (x = x.get(C) || null), h(S, x, "" + U, q);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ue:
            return (
              (x = x.get(U.key === null ? C : U.key) || null), w(S, x, U, q)
            );
          case L:
            return (
              (x = x.get(U.key === null ? C : U.key) || null), P(S, x, U, q)
            );
          case he:
            var re = U._init;
            return Q(x, S, C, re(U._payload), q);
        }
        if (Kn(U) || G(U)) return (x = x.get(C) || null), _(S, x, U, q, null);
        Eo(S, U);
      }
      return null;
    }
    function X(x, S, C, U) {
      for (
        var q = null, re = null, le = S, se = (S = 0), et = null;
        le !== null && se < C.length;
        se++
      ) {
        le.index > se ? ((et = le), (le = null)) : (et = le.sibling);
        var ke = z(x, le, C[se], U);
        if (ke === null) {
          le === null && (le = et);
          break;
        }
        e && le && ke.alternate === null && t(x, le),
          (S = i(ke, S, se)),
          re === null ? (q = ke) : (re.sibling = ke),
          (re = ke),
          (le = et);
      }
      if (se === C.length) return n(x, le), Fe && nr(x, se), q;
      if (le === null) {
        for (; se < C.length; se++)
          (le = O(x, C[se], U)),
            le !== null &&
              ((S = i(le, S, se)),
              re === null ? (q = le) : (re.sibling = le),
              (re = le));
        return Fe && nr(x, se), q;
      }
      for (le = r(x, le); se < C.length; se++)
        (et = Q(le, x, se, C[se], U)),
          et !== null &&
            (e &&
              et.alternate !== null &&
              le.delete(et.key === null ? se : et.key),
            (S = i(et, S, se)),
            re === null ? (q = et) : (re.sibling = et),
            (re = et));
      return (
        e &&
          le.forEach(function ($n) {
            return t(x, $n);
          }),
        Fe && nr(x, se),
        q
      );
    }
    function J(x, S, C, U) {
      var q = G(C);
      if (typeof q != "function") throw Error(u(150));
      if (((C = q.call(C)), C == null)) throw Error(u(151));
      for (
        var re = (q = null), le = S, se = (S = 0), et = null, ke = C.next();
        le !== null && !ke.done;
        se++, ke = C.next()
      ) {
        le.index > se ? ((et = le), (le = null)) : (et = le.sibling);
        var $n = z(x, le, ke.value, U);
        if ($n === null) {
          le === null && (le = et);
          break;
        }
        e && le && $n.alternate === null && t(x, le),
          (S = i($n, S, se)),
          re === null ? (q = $n) : (re.sibling = $n),
          (re = $n),
          (le = et);
      }
      if (ke.done) return n(x, le), Fe && nr(x, se), q;
      if (le === null) {
        for (; !ke.done; se++, ke = C.next())
          (ke = O(x, ke.value, U)),
            ke !== null &&
              ((S = i(ke, S, se)),
              re === null ? (q = ke) : (re.sibling = ke),
              (re = ke));
        return Fe && nr(x, se), q;
      }
      for (le = r(x, le); !ke.done; se++, ke = C.next())
        (ke = Q(le, x, se, ke.value, U)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              le.delete(ke.key === null ? se : ke.key),
            (S = i(ke, S, se)),
            re === null ? (q = ke) : (re.sibling = ke),
            (re = ke));
      return (
        e &&
          le.forEach(function (Sp) {
            return t(x, Sp);
          }),
        Fe && nr(x, se),
        q
      );
    }
    function $e(x, S, C, U) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === ae &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case ue:
            e: {
              for (var q = C.key, re = S; re !== null; ) {
                if (re.key === q) {
                  if (((q = C.type), q === ae)) {
                    if (re.tag === 7) {
                      n(x, re.sibling),
                        (S = o(re, C.props.children)),
                        (S.return = x),
                        (x = S);
                      break e;
                    }
                  } else if (
                    re.elementType === q ||
                    (typeof q == "object" &&
                      q !== null &&
                      q.$$typeof === he &&
                      hs(q) === re.type)
                  ) {
                    n(x, re.sibling),
                      (S = o(re, C.props)),
                      (S.ref = gl(x, re, C)),
                      (S.return = x),
                      (x = S);
                    break e;
                  }
                  n(x, re);
                  break;
                } else t(x, re);
                re = re.sibling;
              }
              C.type === ae
                ? ((S = cr(C.props.children, x.mode, U, C.key)),
                  (S.return = x),
                  (x = S))
                : ((U = Qo(C.type, C.key, C.props, null, x.mode, U)),
                  (U.ref = gl(x, S, C)),
                  (U.return = x),
                  (x = U));
            }
            return s(x);
          case L:
            e: {
              for (re = C.key; S !== null; ) {
                if (S.key === re)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === C.containerInfo &&
                    S.stateNode.implementation === C.implementation
                  ) {
                    n(x, S.sibling),
                      (S = o(S, C.children || [])),
                      (S.return = x),
                      (x = S);
                    break e;
                  } else {
                    n(x, S);
                    break;
                  }
                else t(x, S);
                S = S.sibling;
              }
              (S = Ba(C, x.mode, U)), (S.return = x), (x = S);
            }
            return s(x);
          case he:
            return (re = C._init), $e(x, S, re(C._payload), U);
        }
        if (Kn(C)) return X(x, S, C, U);
        if (G(C)) return J(x, S, C, U);
        Eo(x, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (n(x, S.sibling), (S = o(S, C)), (S.return = x), (x = S))
            : (n(x, S), (S = Ha(C, x.mode, U)), (S.return = x), (x = S)),
          s(x))
        : n(x, S);
    }
    return $e;
  }
  var _r = ms(!0),
    vs = ms(!1),
    ko = Mn(null),
    xo = null,
    Fr = null,
    Zi = null;
  function qi() {
    Zi = Fr = xo = null;
  }
  function bi(e) {
    var t = ko.current;
    ze(ko), (e._currentValue = t);
  }
  function ea(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Or(e, t) {
    (xo = e),
      (Zi = Fr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ht = !0), (e.firstContext = null));
  }
  function Mt(e) {
    var t = e._currentValue;
    if (Zi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fr === null)) {
        if (xo === null) throw Error(u(308));
        (Fr = e), (xo.dependencies = { lanes: 0, firstContext: e });
      } else Fr = Fr.next = e;
    return t;
  }
  var rr = null;
  function ta(e) {
    rr === null ? (rr = [e]) : rr.push(e);
  }
  function ys(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), ta(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      cn(e, r)
    );
  }
  function cn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var zn = !1;
  function na(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function fn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function _n(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Ee & 2) !== 0)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        cn(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), ta(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      cn(e, n)
    );
  }
  function Co(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
    }
  }
  function ws(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Ro(e, t, n, r) {
    var o = e.updateQueue;
    zn = !1;
    var i = o.firstBaseUpdate,
      s = o.lastBaseUpdate,
      h = o.shared.pending;
    if (h !== null) {
      o.shared.pending = null;
      var w = h,
        P = w.next;
      (w.next = null), s === null ? (i = P) : (s.next = P), (s = w);
      var _ = e.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (h = _.lastBaseUpdate),
        h !== s &&
          (h === null ? (_.firstBaseUpdate = P) : (h.next = P),
          (_.lastBaseUpdate = w)));
    }
    if (i !== null) {
      var O = o.baseState;
      (s = 0), (_ = P = w = null), (h = i);
      do {
        var z = h.lane,
          Q = h.eventTime;
        if ((r & z) === z) {
          _ !== null &&
            (_ = _.next =
              {
                eventTime: Q,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null,
              });
          e: {
            var X = e,
              J = h;
            switch (((z = t), (Q = n), J.tag)) {
              case 1:
                if (((X = J.payload), typeof X == "function")) {
                  O = X.call(Q, O, z);
                  break e;
                }
                O = X;
                break e;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = J.payload),
                  (z = typeof X == "function" ? X.call(Q, O, z) : X),
                  z == null)
                )
                  break e;
                O = B({}, O, z);
                break e;
              case 2:
                zn = !0;
            }
          }
          h.callback !== null &&
            h.lane !== 0 &&
            ((e.flags |= 64),
            (z = o.effects),
            z === null ? (o.effects = [h]) : z.push(h));
        } else
          (Q = {
            eventTime: Q,
            lane: z,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            _ === null ? ((P = _ = Q), (w = O)) : (_ = _.next = Q),
            (s |= z);
        if (((h = h.next), h === null)) {
          if (((h = o.shared.pending), h === null)) break;
          (z = h),
            (h = z.next),
            (z.next = null),
            (o.lastBaseUpdate = z),
            (o.shared.pending = null);
        }
      } while (!0);
      if (
        (_ === null && (w = O),
        (o.baseState = w),
        (o.firstBaseUpdate = P),
        (o.lastBaseUpdate = _),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (s |= o.lane), (o = o.next);
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      (ir |= s), (e.lanes = s), (e.memoizedState = O);
    }
  }
  function Ss(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(u(191, o));
          o.call(r);
        }
      }
  }
  var wl = {},
    qt = Mn(wl),
    Sl = Mn(wl),
    El = Mn(wl);
  function lr(e) {
    if (e === wl) throw Error(u(174));
    return e;
  }
  function ra(e, t) {
    switch ((Me(El, t), Me(Sl, e), Me(qt, wl), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wt(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = wt(t, e));
    }
    ze(qt), Me(qt, t);
  }
  function Ir() {
    ze(qt), ze(Sl), ze(El);
  }
  function Es(e) {
    lr(El.current);
    var t = lr(qt.current),
      n = wt(t, e.type);
    t !== n && (Me(Sl, e), Me(qt, n));
  }
  function la(e) {
    Sl.current === e && (ze(qt), ze(Sl));
  }
  var Oe = Mn(0);
  function Po(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var oa = [];
  function ia() {
    for (var e = 0; e < oa.length; e++)
      oa[e]._workInProgressVersionPrimary = null;
    oa.length = 0;
  }
  var Lo = de.ReactCurrentDispatcher,
    aa = de.ReactCurrentBatchConfig,
    or = 0,
    Ie = null,
    Ke = null,
    qe = null,
    No = !1,
    kl = !1,
    xl = 0,
    Bd = 0;
  function lt() {
    throw Error(u(321));
  }
  function ua(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function sa(e, t, n, r, o, i) {
    if (
      ((or = i),
      (Ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Lo.current = e === null || e.memoizedState === null ? Kd : Yd),
      (e = n(r, o)),
      kl)
    ) {
      i = 0;
      do {
        if (((kl = !1), (xl = 0), 25 <= i)) throw Error(u(301));
        (i += 1),
          (qe = Ke = null),
          (t.updateQueue = null),
          (Lo.current = Xd),
          (e = n(r, o));
      } while (kl);
    }
    if (
      ((Lo.current = Do),
      (t = Ke !== null && Ke.next !== null),
      (or = 0),
      (qe = Ke = Ie = null),
      (No = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function ca() {
    var e = xl !== 0;
    return (xl = 0), e;
  }
  function bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (Ie.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function Tt() {
    if (Ke === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var t = qe === null ? Ie.memoizedState : qe.next;
    if (t !== null) (qe = t), (Ke = e);
    else {
      if (e === null) throw Error(u(310));
      (Ke = e),
        (e = {
          memoizedState: Ke.memoizedState,
          baseState: Ke.baseState,
          baseQueue: Ke.baseQueue,
          queue: Ke.queue,
          next: null,
        }),
        qe === null ? (Ie.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function Cl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fa(e) {
    var t = Tt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ke,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var s = o.next;
        (o.next = i.next), (i.next = s);
      }
      (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
      (i = o.next), (r = r.baseState);
      var h = (s = null),
        w = null,
        P = i;
      do {
        var _ = P.lane;
        if ((or & _) === _)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (r = P.hasEagerState ? P.eagerState : e(r, P.action));
        else {
          var O = {
            lane: _,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          w === null ? ((h = w = O), (s = r)) : (w = w.next = O),
            (Ie.lanes |= _),
            (ir |= _);
        }
        P = P.next;
      } while (P !== null && P !== i);
      w === null ? (s = r) : (w.next = h),
        Ht(r, t.memoizedState) || (ht = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = w),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (Ie.lanes |= i), (ir |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function da(e) {
    var t = Tt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var s = (o = o.next);
      do (i = e(i, s.action)), (s = s.next);
      while (s !== o);
      Ht(i, t.memoizedState) || (ht = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function ks() {}
  function xs(e, t) {
    var n = Ie,
      r = Tt(),
      o = t(),
      i = !Ht(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (ht = !0)),
      (r = r.queue),
      pa(Ps.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Rl(9, Rs.bind(null, n, r, o, t), void 0, null),
        be === null)
      )
        throw Error(u(349));
      (or & 30) !== 0 || Cs(n, t, o);
    }
    return o;
  }
  function Cs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ie.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Rs(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ls(t) && Ns(e);
  }
  function Ps(e, t, n) {
    return n(function () {
      Ls(t) && Ns(e);
    });
  }
  function Ls(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function Ns(e) {
    var t = cn(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function Ms(e) {
    var t = bt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cl,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Qd.bind(null, Ie, e)),
      [t.memoizedState, e]
    );
  }
  function Rl(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ie.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ts() {
    return Tt().memoizedState;
  }
  function Mo(e, t, n, r) {
    var o = bt();
    (Ie.flags |= e),
      (o.memoizedState = Rl(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function To(e, t, n, r) {
    var o = Tt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ke !== null) {
      var s = Ke.memoizedState;
      if (((i = s.destroy), r !== null && ua(r, s.deps))) {
        o.memoizedState = Rl(t, n, i, r);
        return;
      }
    }
    (Ie.flags |= e), (o.memoizedState = Rl(1 | t, n, i, r));
  }
  function Ds(e, t) {
    return Mo(8390656, 8, e, t);
  }
  function pa(e, t) {
    return To(2048, 8, e, t);
  }
  function zs(e, t) {
    return To(4, 2, e, t);
  }
  function _s(e, t) {
    return To(4, 4, e, t);
  }
  function Fs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Os(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), To(4, 4, Fs.bind(null, t, e), n)
    );
  }
  function ha() {}
  function Is(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ua(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Us(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ua(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function js(e, t, n) {
    return (or & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = n))
      : (Ht(n, t) ||
          ((n = hu()), (Ie.lanes |= n), (ir |= n), (e.baseState = !0)),
        t);
  }
  function Wd(e, t) {
    var n = Re;
    (Re = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = aa.transition;
    aa.transition = {};
    try {
      e(!1), t();
    } finally {
      (Re = n), (aa.transition = r);
    }
  }
  function As() {
    return Tt().memoizedState;
  }
  function Vd(e, t, n) {
    var r = Un(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $s(e))
    )
      Hs(t, n);
    else if (((n = ys(e, t, n, r)), n !== null)) {
      var o = st();
      Kt(n, e, r, o), Bs(n, t, r);
    }
  }
  function Qd(e, t, n) {
    var r = Un(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if ($s(e)) Hs(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var s = t.lastRenderedState,
            h = i(s, n);
          if (((o.hasEagerState = !0), (o.eagerState = h), Ht(h, s))) {
            var w = t.interleaved;
            w === null
              ? ((o.next = o), ta(t))
              : ((o.next = w.next), (w.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = ys(e, t, o, r)),
        n !== null && ((o = st()), Kt(n, e, r, o), Bs(n, t, r));
    }
  }
  function $s(e) {
    var t = e.alternate;
    return e === Ie || (t !== null && t === Ie);
  }
  function Hs(e, t) {
    kl = No = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Bs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), vi(e, n);
    }
  }
  var Do = {
      readContext: Mt,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useInsertionEffect: lt,
      useLayoutEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useMutableSource: lt,
      useSyncExternalStore: lt,
      useId: lt,
      unstable_isNewReconciler: !1,
    },
    Kd = {
      readContext: Mt,
      useCallback: function (e, t) {
        return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Mt,
      useEffect: Ds,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Mo(4194308, 4, Fs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Mo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Mo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = bt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = bt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Vd.bind(null, Ie, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = bt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ms,
      useDebugValue: ha,
      useDeferredValue: function (e) {
        return (bt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ms(!1),
          t = e[0];
        return (e = Wd.bind(null, e[1])), (bt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ie,
          o = bt();
        if (Fe) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), be === null)) throw Error(u(349));
          (or & 30) !== 0 || Cs(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          Ds(Ps.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Rl(9, Rs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = bt(),
          t = be.identifierPrefix;
        if (Fe) {
          var n = sn,
            r = un;
          (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = xl++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Bd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: Mt,
      useCallback: Is,
      useContext: Mt,
      useEffect: pa,
      useImperativeHandle: Os,
      useInsertionEffect: zs,
      useLayoutEffect: _s,
      useMemo: Us,
      useReducer: fa,
      useRef: Ts,
      useState: function () {
        return fa(Cl);
      },
      useDebugValue: ha,
      useDeferredValue: function (e) {
        var t = Tt();
        return js(t, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = fa(Cl)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: ks,
      useSyncExternalStore: xs,
      useId: As,
      unstable_isNewReconciler: !1,
    },
    Xd = {
      readContext: Mt,
      useCallback: Is,
      useContext: Mt,
      useEffect: pa,
      useImperativeHandle: Os,
      useInsertionEffect: zs,
      useLayoutEffect: _s,
      useMemo: Us,
      useReducer: da,
      useRef: Ts,
      useState: function () {
        return da(Cl);
      },
      useDebugValue: ha,
      useDeferredValue: function (e) {
        var t = Tt();
        return Ke === null ? (t.memoizedState = e) : js(t, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = da(Cl)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: ks,
      useSyncExternalStore: xs,
      useId: As,
      unstable_isNewReconciler: !1,
    };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      (t = B({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ma(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : B({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var zo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Se(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = st(),
        o = Un(e),
        i = fn(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = _n(e, i, o)),
        t !== null && (Kt(t, e, o, r), Co(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = st(),
        o = Un(e),
        i = fn(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = _n(e, i, o)),
        t !== null && (Kt(t, e, o, r), Co(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = st(),
        r = Un(e),
        o = fn(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = _n(e, o, r)),
        t !== null && (Kt(t, e, r, n), Co(t, e, r));
    },
  };
  function Ws(e, t, n, r, o, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !fl(n, r) || !fl(o, i)
        : !0
    );
  }
  function Vs(e, t, n) {
    var r = !1,
      o = Tn,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Mt(i))
        : ((o = pt(t) ? er : rt.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Mr(e, o) : Tn)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = zo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Qs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function va(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), na(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Mt(i))
      : ((i = pt(t) ? er : rt.current), (o.context = Mr(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (ma(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && zo.enqueueReplaceState(o, o.state, null),
        Ro(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ur(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Xt(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function ya(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ga(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Gd = typeof WeakMap == "function" ? WeakMap : Map;
  function Ks(e, t, n) {
    (n = fn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ao || ((Ao = !0), (_a = r)), ga(e, t);
      }),
      n
    );
  }
  function Ys(e, t, n) {
    (n = fn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          ga(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          ga(e, t),
            typeof r != "function" &&
              (On === null ? (On = new Set([this])) : On.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Xs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Gd();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = sp.bind(null, e, t, n)), t.then(e, e));
  }
  function Gs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Js(e, t, n, r, o) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = fn(-1, 1)), (t.tag = 2), _n(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = o), e);
  }
  var Jd = de.ReactCurrentOwner,
    ht = !1;
  function ut(e, t, n, r) {
    t.child = e === null ? vs(t, null, n, r) : _r(t, e.child, n, r);
  }
  function Zs(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      Or(t, o),
      (r = sa(e, t, n, r, i, o)),
      (n = ca()),
      e !== null && !ht
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          dn(e, t, o))
        : (Fe && n && Ki(t), (t.flags |= 1), ut(e, t, r, o), t.child)
    );
  }
  function qs(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !$a(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), bs(e, t, i, r, o))
        : ((e = Qo(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & o) === 0)) {
      var s = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : fl), n(s, r) && e.ref === t.ref)
      )
        return dn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = An(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function bs(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (fl(i, r) && e.ref === t.ref)
        if (((ht = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          (e.flags & 131072) !== 0 && (ht = !0);
        else return (t.lanes = e.lanes), dn(e, t, o);
    }
    return wa(e, t, n, r, o);
  }
  function ec(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Me(Ar, xt),
          (xt |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Me(Ar, xt),
            (xt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          Me(Ar, xt),
          (xt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Me(Ar, xt),
        (xt |= r);
    return ut(e, t, o, n), t.child;
  }
  function tc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function wa(e, t, n, r, o) {
    var i = pt(n) ? er : rt.current;
    return (
      (i = Mr(t, i)),
      Or(t, o),
      (n = sa(e, t, n, r, i, o)),
      (r = ca()),
      e !== null && !ht
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          dn(e, t, o))
        : (Fe && r && Ki(t), (t.flags |= 1), ut(e, t, n, o), t.child)
    );
  }
  function nc(e, t, n, r, o) {
    if (pt(n)) {
      var i = !0;
      vo(t);
    } else i = !1;
    if ((Or(t, o), t.stateNode === null))
      Fo(e, t), Vs(t, n, r), va(t, n, r, o), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        h = t.memoizedProps;
      s.props = h;
      var w = s.context,
        P = n.contextType;
      typeof P == "object" && P !== null
        ? (P = Mt(P))
        : ((P = pt(n) ? er : rt.current), (P = Mr(t, P)));
      var _ = n.getDerivedStateFromProps,
        O =
          typeof _ == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      O ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((h !== r || w !== P) && Qs(t, s, r, P)),
        (zn = !1);
      var z = t.memoizedState;
      (s.state = z),
        Ro(t, r, s, o),
        (w = t.memoizedState),
        h !== r || z !== w || dt.current || zn
          ? (typeof _ == "function" && (ma(t, n, _, r), (w = t.memoizedState)),
            (h = zn || Ws(t, n, h, r, z, w, P))
              ? (O ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = w)),
            (s.props = r),
            (s.state = w),
            (s.context = P),
            (r = h))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        gs(e, t),
        (h = t.memoizedProps),
        (P = t.type === t.elementType ? h : Wt(t.type, h)),
        (s.props = P),
        (O = t.pendingProps),
        (z = s.context),
        (w = n.contextType),
        typeof w == "object" && w !== null
          ? (w = Mt(w))
          : ((w = pt(n) ? er : rt.current), (w = Mr(t, w)));
      var Q = n.getDerivedStateFromProps;
      (_ =
        typeof Q == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((h !== O || z !== w) && Qs(t, s, r, w)),
        (zn = !1),
        (z = t.memoizedState),
        (s.state = z),
        Ro(t, r, s, o);
      var X = t.memoizedState;
      h !== O || z !== X || dt.current || zn
        ? (typeof Q == "function" && (ma(t, n, Q, r), (X = t.memoizedState)),
          (P = zn || Ws(t, n, P, r, z, X, w) || !1)
            ? (_ ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, X, w),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, X, w)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (h === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (h === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = X)),
          (s.props = r),
          (s.state = X),
          (s.context = w),
          (r = P))
        : (typeof s.componentDidUpdate != "function" ||
            (h === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (h === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Sa(e, t, n, r, i, o);
  }
  function Sa(e, t, n, r, o, i) {
    tc(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && as(t, n, !1), dn(e, t, i);
    (r = t.stateNode), (Jd.current = t);
    var h =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = _r(t, e.child, null, i)), (t.child = _r(t, null, h, i)))
        : ut(e, t, h, i),
      (t.memoizedState = r.state),
      o && as(t, n, !0),
      t.child
    );
  }
  function rc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? os(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && os(e, t.context, !1),
      ra(e, t.containerInfo);
  }
  function lc(e, t, n, r, o) {
    return zr(), Ji(o), (t.flags |= 256), ut(e, t, n, r), t.child;
  }
  var Ea = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ka(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function oc(e, t, n) {
    var r = t.pendingProps,
      o = Oe.current,
      i = !1,
      s = (t.flags & 128) !== 0,
      h;
    if (
      ((h = s) ||
        (h = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      h
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      Me(Oe, o & 1),
      e === null)
    )
      return (
        Gi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((s = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (s = { mode: "hidden", children: s }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = s))
                  : (i = Ko(s, r, 0, null)),
                (e = cr(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = ka(n)),
                (t.memoizedState = Ea),
                e)
              : xa(t, s))
      );
    if (((o = e.memoizedState), o !== null && ((h = o.dehydrated), h !== null)))
      return Zd(e, t, s, r, h, o, n);
    if (i) {
      (i = r.fallback), (s = t.mode), (o = e.child), (h = o.sibling);
      var w = { mode: "hidden", children: r.children };
      return (
        (s & 1) === 0 && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = w),
            (t.deletions = null))
          : ((r = An(o, w)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        h !== null ? (i = An(h, i)) : ((i = cr(i, s, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? ka(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (i.memoizedState = s),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ea),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = An(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function xa(e, t) {
    return (
      (t = Ko({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _o(e, t, n, r) {
    return (
      r !== null && Ji(r),
      _r(t, e.child, null, n),
      (e = xa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zd(e, t, n, r, o, i, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ya(Error(u(422)))), _o(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ko({ mode: "visible", children: r.children }, o, 0, null)),
          (i = cr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          (t.mode & 1) !== 0 && _r(t, e.child, null, s),
          (t.child.memoizedState = ka(s)),
          (t.memoizedState = Ea),
          i);
    if ((t.mode & 1) === 0) return _o(e, t, s, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var h = r.dgst;
      return (
        (r = h), (i = Error(u(419))), (r = ya(i, r, void 0)), _o(e, t, s, r)
      );
    }
    if (((h = (s & e.childLanes) !== 0), ht || h)) {
      if (((r = be), r !== null)) {
        switch (s & -s) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = (o & (r.suspendedLanes | s)) !== 0 ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), cn(e, o), Kt(r, e, o, -1));
      }
      return Aa(), (r = ya(Error(u(421)))), _o(e, t, s, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = cp.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (kt = Nn(o.nextSibling)),
        (Et = t),
        (Fe = !0),
        (Bt = null),
        e !== null &&
          ((Lt[Nt++] = un),
          (Lt[Nt++] = sn),
          (Lt[Nt++] = tr),
          (un = e.id),
          (sn = e.overflow),
          (tr = t)),
        (t = xa(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ic(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ea(e.return, t, n);
  }
  function Ca(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function ac(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((ut(e, t, r.children, n), (r = Oe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
          else if (e.tag === 19) ic(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Me(Oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && Po(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Ca(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && Po(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          Ca(t, !0, n, null, i);
          break;
        case "together":
          Ca(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Fo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function dn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ir |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = An(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function qd(e, t, n) {
    switch (t.tag) {
      case 3:
        rc(t), zr();
        break;
      case 5:
        Es(t);
        break;
      case 1:
        pt(t.type) && vo(t);
        break;
      case 4:
        ra(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        Me(ko, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Me(Oe, Oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? oc(e, t, n)
            : (Me(Oe, Oe.current & 1),
              (e = dn(e, t, n)),
              e !== null ? e.sibling : null);
        Me(Oe, Oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ac(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Me(Oe, Oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ec(e, t, n);
    }
    return dn(e, t, n);
  }
  var uc, Ra, sc, cc;
  (uc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ra = function () {}),
    (sc = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), lr(qt.current);
        var i = null;
        switch (n) {
          case "input":
            (o = Ut(e, o)), (r = Ut(e, r)), (i = []);
            break;
          case "select":
            (o = B({}, o, { value: void 0 })),
              (r = B({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (o = jt(e, o)), (r = jt(e, r)), (i = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = po);
        }
        yr(n, r);
        var s;
        n = null;
        for (P in o)
          if (!r.hasOwnProperty(P) && o.hasOwnProperty(P) && o[P] != null)
            if (P === "style") {
              var h = o[P];
              for (s in h) h.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (f.hasOwnProperty(P)
                  ? i || (i = [])
                  : (i = i || []).push(P, null));
        for (P in r) {
          var w = r[P];
          if (
            ((h = o != null ? o[P] : void 0),
            r.hasOwnProperty(P) && w !== h && (w != null || h != null))
          )
            if (P === "style")
              if (h) {
                for (s in h)
                  !h.hasOwnProperty(s) ||
                    (w && w.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in w)
                  w.hasOwnProperty(s) &&
                    h[s] !== w[s] &&
                    (n || (n = {}), (n[s] = w[s]));
              } else n || (i || (i = []), i.push(P, n)), (n = w);
            else
              P === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (h = h ? h.__html : void 0),
                  w != null && h !== w && (i = i || []).push(P, w))
                : P === "children"
                ? (typeof w != "string" && typeof w != "number") ||
                  (i = i || []).push(P, "" + w)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(P)
                    ? (w != null && P === "onScroll" && De("scroll", e),
                      i || h === w || (i = []))
                    : (i = i || []).push(P, w));
        }
        n && (i = i || []).push("style", n);
        var P = i;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (cc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Pl(e, t) {
    if (!Fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function bd(e, t, n) {
    var r = t.pendingProps;
    switch ((Yi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(t), null;
      case 1:
        return pt(t.type) && mo(), ot(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Ir(),
          ze(dt),
          ze(rt),
          ia(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (So(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Bt !== null && (Ia(Bt), (Bt = null)))),
          Ra(e, t),
          ot(t),
          null
        );
      case 5:
        la(t);
        var o = lr(El.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          sc(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return ot(t), null;
          }
          if (((e = lr(qt.current)), So(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Zt] = t), (r[vl] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                De("cancel", r), De("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < pl.length; o++) De(pl[o], r);
                break;
              case "source":
                De("error", r);
                break;
              case "img":
              case "image":
              case "link":
                De("error", r), De("load", r);
                break;
              case "details":
                De("toggle", r);
                break;
              case "input":
                Wl(r, i), De("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  De("invalid", r);
                break;
              case "textarea":
                yn(r, i), De("invalid", r);
            }
            yr(n, i), (o = null);
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var h = i[s];
                s === "children"
                  ? typeof h == "string"
                    ? r.textContent !== h &&
                      (i.suppressHydrationWarning !== !0 &&
                        fo(r.textContent, h, e),
                      (o = ["children", h]))
                    : typeof h == "number" &&
                      r.textContent !== "" + h &&
                      (i.suppressHydrationWarning !== !0 &&
                        fo(r.textContent, h, e),
                      (o = ["children", "" + h]))
                  : f.hasOwnProperty(s) &&
                    h != null &&
                    s === "onScroll" &&
                    De("scroll", r);
              }
            switch (n) {
              case "input":
                It(r), Ql(r, i, !0);
                break;
              case "textarea":
                It(r), mr(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = po);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = At(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Zt] = t),
              (e[vl] = r),
              uc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = gn(n, r)), n)) {
                case "dialog":
                  De("cancel", e), De("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < pl.length; o++) De(pl[o], e);
                  o = r;
                  break;
                case "source":
                  De("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  De("error", e), De("load", e), (o = r);
                  break;
                case "details":
                  De("toggle", e), (o = r);
                  break;
                case "input":
                  Wl(e, r), (o = Ut(e, r)), De("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = B({}, r, { value: void 0 })),
                    De("invalid", e);
                  break;
                case "textarea":
                  yn(e, r), (o = jt(e, r)), De("invalid", e);
                  break;
                default:
                  o = r;
              }
              yr(n, o), (h = o);
              for (i in h)
                if (h.hasOwnProperty(i)) {
                  var w = h[i];
                  i === "style"
                    ? Gr(e, w)
                    : i === "dangerouslySetInnerHTML"
                    ? ((w = w ? w.__html : void 0), w != null && vr(e, w))
                    : i === "children"
                    ? typeof w == "string"
                      ? (n !== "textarea" || w !== "") && Xn(e, w)
                      : typeof w == "number" && Xn(e, "" + w)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (f.hasOwnProperty(i)
                        ? w != null && i === "onScroll" && De("scroll", e)
                        : w != null && V(e, i, w, s));
                }
              switch (n) {
                case "input":
                  It(e), Ql(e, r, !1);
                  break;
                case "textarea":
                  It(e), mr(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Gt(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? vn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        vn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = po);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ot(t), null;
      case 6:
        if (e && t.stateNode != null) cc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = lr(El.current)), lr(qt.current), So(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Zt] = t),
              (i = r.nodeValue !== n) && ((e = Et), e !== null))
            )
              switch (e.tag) {
                case 3:
                  fo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    fo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Zt] = t),
              (t.stateNode = r);
        }
        return ot(t), null;
      case 13:
        if (
          (ze(Oe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Fe && kt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ps(), zr(), (t.flags |= 98560), (i = !1);
          else if (((i = So(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[Zt] = t;
            } else
              zr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ot(t), (i = !1);
          } else Bt !== null && (Ia(Bt), (Bt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Oe.current & 1) !== 0
                  ? Ye === 0 && (Ye = 3)
                  : Aa())),
            t.updateQueue !== null && (t.flags |= 4),
            ot(t),
            null);
      case 4:
        return (
          Ir(),
          Ra(e, t),
          e === null && hl(t.stateNode.containerInfo),
          ot(t),
          null
        );
      case 10:
        return bi(t.type._context), ot(t), null;
      case 17:
        return pt(t.type) && mo(), ot(t), null;
      case 19:
        if ((ze(Oe), (i = t.memoizedState), i === null)) return ot(t), null;
        if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (r) Pl(i, !1);
          else {
            if (Ye !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = Po(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Pl(i, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (s = i.alternate),
                      s === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = s.childLanes),
                          (i.lanes = s.lanes),
                          (i.child = s.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = s.memoizedProps),
                          (i.memoizedState = s.memoizedState),
                          (i.updateQueue = s.updateQueue),
                          (i.type = s.type),
                          (e = s.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Me(Oe, (Oe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Le() > $r &&
              ((t.flags |= 128), (r = !0), Pl(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Po(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Pl(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !s.alternate &&
                  !Fe)
              )
                return ot(t), null;
            } else
              2 * Le() - i.renderingStartTime > $r &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Pl(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = i.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Le()),
            (t.sibling = null),
            (n = Oe.current),
            Me(Oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (ot(t), null);
      case 22:
      case 23:
        return (
          ja(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (xt & 1073741824) !== 0 &&
              (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ot(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function ep(e, t) {
    switch ((Yi(t), t.tag)) {
      case 1:
        return (
          pt(t.type) && mo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ir(),
          ze(dt),
          ze(rt),
          ia(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return la(t), null;
      case 13:
        if (
          (ze(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          zr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ze(Oe), null;
      case 4:
        return Ir(), null;
      case 10:
        return bi(t.type._context), null;
      case 22:
      case 23:
        return ja(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Oo = !1,
    it = !1,
    tp = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function jr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          je(e, t, r);
        }
      else n.current = null;
  }
  function Pa(e, t, n) {
    try {
      n();
    } catch (r) {
      je(e, t, r);
    }
  }
  var fc = !1;
  function np(e, t) {
    if (((ji = eo), (e = Wu()), Ti(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              h = -1,
              w = -1,
              P = 0,
              _ = 0,
              O = e,
              z = null;
            t: for (;;) {
              for (
                var Q;
                O !== n || (o !== 0 && O.nodeType !== 3) || (h = s + o),
                  O !== i || (r !== 0 && O.nodeType !== 3) || (w = s + r),
                  O.nodeType === 3 && (s += O.nodeValue.length),
                  (Q = O.firstChild) !== null;

              )
                (z = O), (O = Q);
              for (;;) {
                if (O === e) break t;
                if (
                  (z === n && ++P === o && (h = s),
                  z === i && ++_ === r && (w = s),
                  (Q = O.nextSibling) !== null)
                )
                  break;
                (O = z), (z = O.parentNode);
              }
              O = Q;
            }
            n = h === -1 || w === -1 ? null : { start: h, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ai = { focusedElem: e, selectionRange: n }, eo = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (K = e);
      else
        for (; K !== null; ) {
          t = K;
          try {
            var X = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (X !== null) {
                    var J = X.memoizedProps,
                      $e = X.memoizedState,
                      x = t.stateNode,
                      S = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? J : Wt(t.type, J),
                        $e
                      );
                    x.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (U) {
            je(t, t.return, U);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (K = e);
            break;
          }
          K = t.return;
        }
    return (X = fc), (fc = !1), X;
  }
  function Ll(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && Pa(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Io(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function La(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function dc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), dc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Zt],
          delete t[vl],
          delete t[Wi],
          delete t[jd],
          delete t[Ad])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function pc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function hc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || pc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Na(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = po));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Na(e, t, n), e = e.sibling; e !== null; )
        Na(e, t, n), (e = e.sibling);
  }
  function Ma(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ma(e, t, n), e = e.sibling; e !== null; )
        Ma(e, t, n), (e = e.sibling);
  }
  var tt = null,
    Vt = !1;
  function Fn(e, t, n) {
    for (n = n.child; n !== null; ) mc(e, t, n), (n = n.sibling);
  }
  function mc(e, t, n) {
    if (Ce && typeof Ce.onCommitFiberUnmount == "function")
      try {
        Ce.onCommitFiberUnmount(Pt, n);
      } catch {}
    switch (n.tag) {
      case 5:
        it || jr(n, t);
      case 6:
        var r = tt,
          o = Vt;
        (tt = null),
          Fn(e, t, n),
          (tt = r),
          (Vt = o),
          tt !== null &&
            (Vt
              ? ((e = tt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : tt.removeChild(n.stateNode));
        break;
      case 18:
        tt !== null &&
          (Vt
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8
                ? Bi(e.parentNode, n)
                : e.nodeType === 1 && Bi(e, n),
              ol(e))
            : Bi(tt, n.stateNode));
        break;
      case 4:
        (r = tt),
          (o = Vt),
          (tt = n.stateNode.containerInfo),
          (Vt = !0),
          Fn(e, t, n),
          (tt = r),
          (Vt = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !it &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              s = i.destroy;
            (i = i.tag),
              s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Pa(n, t, s),
              (o = o.next);
          } while (o !== r);
        }
        Fn(e, t, n);
        break;
      case 1:
        if (
          !it &&
          (jr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (h) {
            je(n, t, h);
          }
        Fn(e, t, n);
        break;
      case 21:
        Fn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((it = (r = it) || n.memoizedState !== null), Fn(e, t, n), (it = r))
          : Fn(e, t, n);
        break;
      default:
        Fn(e, t, n);
    }
  }
  function vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new tp()),
        t.forEach(function (r) {
          var o = fp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function Qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            s = t,
            h = s;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 5:
                (tt = h.stateNode), (Vt = !1);
                break e;
              case 3:
                (tt = h.stateNode.containerInfo), (Vt = !0);
                break e;
              case 4:
                (tt = h.stateNode.containerInfo), (Vt = !0);
                break e;
            }
            h = h.return;
          }
          if (tt === null) throw Error(u(160));
          mc(i, s, o), (tt = null), (Vt = !1);
          var w = o.alternate;
          w !== null && (w.return = null), (o.return = null);
        } catch (P) {
          je(o, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) yc(t, e), (t = t.sibling);
  }
  function yc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Qt(t, e), en(e), r & 4)) {
          try {
            Ll(3, e, e.return), Io(3, e);
          } catch (J) {
            je(e, e.return, J);
          }
          try {
            Ll(5, e, e.return);
          } catch (J) {
            je(e, e.return, J);
          }
        }
        break;
      case 1:
        Qt(t, e), en(e), r & 512 && n !== null && jr(n, n.return);
        break;
      case 5:
        if (
          (Qt(t, e),
          en(e),
          r & 512 && n !== null && jr(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Xn(o, "");
          } catch (J) {
            je(e, e.return, J);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            s = n !== null ? n.memoizedProps : i,
            h = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              h === "input" && i.type === "radio" && i.name != null && Vl(o, i),
                gn(h, s);
              var P = gn(h, i);
              for (s = 0; s < w.length; s += 2) {
                var _ = w[s],
                  O = w[s + 1];
                _ === "style"
                  ? Gr(o, O)
                  : _ === "dangerouslySetInnerHTML"
                  ? vr(o, O)
                  : _ === "children"
                  ? Xn(o, O)
                  : V(o, _, O, P);
              }
              switch (h) {
                case "input":
                  hr(o, i);
                  break;
                case "textarea":
                  Yr(o, i);
                  break;
                case "select":
                  var z = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var Q = i.value;
                  Q != null
                    ? vn(o, !!i.multiple, Q, !1)
                    : z !== !!i.multiple &&
                      (i.defaultValue != null
                        ? vn(o, !!i.multiple, i.defaultValue, !0)
                        : vn(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[vl] = i;
            } catch (J) {
              je(e, e.return, J);
            }
        }
        break;
      case 6:
        if ((Qt(t, e), en(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (J) {
            je(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          (Qt(t, e), en(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ol(t.containerInfo);
          } catch (J) {
            je(e, e.return, J);
          }
        break;
      case 4:
        Qt(t, e), en(e);
        break;
      case 13:
        Qt(t, e),
          en(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (za = Le())),
          r & 4 && vc(e);
        break;
      case 22:
        if (
          ((_ = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((it = (P = it) || _), Qt(t, e), (it = P)) : Qt(t, e),
          en(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !_ && (e.mode & 1) !== 0)
          )
            for (K = e, _ = e.child; _ !== null; ) {
              for (O = K = _; K !== null; ) {
                switch (((z = K), (Q = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ll(4, z, z.return);
                    break;
                  case 1:
                    jr(z, z.return);
                    var X = z.stateNode;
                    if (typeof X.componentWillUnmount == "function") {
                      (r = z), (n = z.return);
                      try {
                        (t = r),
                          (X.props = t.memoizedProps),
                          (X.state = t.memoizedState),
                          X.componentWillUnmount();
                      } catch (J) {
                        je(r, n, J);
                      }
                    }
                    break;
                  case 5:
                    jr(z, z.return);
                    break;
                  case 22:
                    if (z.memoizedState !== null) {
                      Sc(O);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = z), (K = Q)) : Sc(O);
              }
              _ = _.sibling;
            }
          e: for (_ = null, O = e; ; ) {
            if (O.tag === 5) {
              if (_ === null) {
                _ = O;
                try {
                  (o = O.stateNode),
                    P
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((h = O.stateNode),
                        (w = O.memoizedProps.style),
                        (s =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (h.style.display = Xr("display", s)));
                } catch (J) {
                  je(e, e.return, J);
                }
              }
            } else if (O.tag === 6) {
              if (_ === null)
                try {
                  O.stateNode.nodeValue = P ? "" : O.memoizedProps;
                } catch (J) {
                  je(e, e.return, J);
                }
            } else if (
              ((O.tag !== 22 && O.tag !== 23) ||
                O.memoizedState === null ||
                O === e) &&
              O.child !== null
            ) {
              (O.child.return = O), (O = O.child);
              continue;
            }
            if (O === e) break e;
            for (; O.sibling === null; ) {
              if (O.return === null || O.return === e) break e;
              _ === O && (_ = null), (O = O.return);
            }
            _ === O && (_ = null),
              (O.sibling.return = O.return),
              (O = O.sibling);
          }
        }
        break;
      case 19:
        Qt(t, e), en(e), r & 4 && vc(e);
        break;
      case 21:
        break;
      default:
        Qt(t, e), en(e);
    }
  }
  function en(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (pc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Xn(o, ""), (r.flags &= -33));
            var i = hc(e);
            Ma(e, i, o);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              h = hc(e);
            Na(e, h, s);
            break;
          default:
            throw Error(u(161));
        }
      } catch (w) {
        je(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rp(e, t, n) {
    (K = e), gc(e);
  }
  function gc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var o = K,
        i = o.child;
      if (o.tag === 22 && r) {
        var s = o.memoizedState !== null || Oo;
        if (!s) {
          var h = o.alternate,
            w = (h !== null && h.memoizedState !== null) || it;
          h = Oo;
          var P = it;
          if (((Oo = s), (it = w) && !P))
            for (K = o; K !== null; )
              (s = K),
                (w = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Ec(o)
                  : w !== null
                  ? ((w.return = s), (K = w))
                  : Ec(o);
          for (; i !== null; ) (K = i), gc(i), (i = i.sibling);
          (K = o), (Oo = h), (it = P);
        }
        wc(e);
      } else
        (o.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = o), (K = i))
          : wc(e);
    }
  }
  function wc(e) {
    for (; K !== null; ) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                it || Io(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !it)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Wt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Ss(t, i, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ss(t, s, n);
                }
                break;
              case 5:
                var h = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = h;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && n.focus();
                      break;
                    case "img":
                      w.src && (n.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var _ = P.memoizedState;
                    if (_ !== null) {
                      var O = _.dehydrated;
                      O !== null && ol(O);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          it || (t.flags & 512 && La(t));
        } catch (z) {
          je(t, t.return, z);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function Sc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function Ec(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Io(4, t);
            } catch (w) {
              je(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                je(t, o, w);
              }
            }
            var i = t.return;
            try {
              La(t);
            } catch (w) {
              je(t, i, w);
            }
            break;
          case 5:
            var s = t.return;
            try {
              La(t);
            } catch (w) {
              je(t, s, w);
            }
        }
      } catch (w) {
        je(t, t.return, w);
      }
      if (t === e) {
        K = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        (h.return = t.return), (K = h);
        break;
      }
      K = t.return;
    }
  }
  var lp = Math.ceil,
    Uo = de.ReactCurrentDispatcher,
    Ta = de.ReactCurrentOwner,
    Dt = de.ReactCurrentBatchConfig,
    Ee = 0,
    be = null,
    Be = null,
    nt = 0,
    xt = 0,
    Ar = Mn(0),
    Ye = 0,
    Nl = null,
    ir = 0,
    jo = 0,
    Da = 0,
    Ml = null,
    mt = null,
    za = 0,
    $r = 1 / 0,
    pn = null,
    Ao = !1,
    _a = null,
    On = null,
    $o = !1,
    In = null,
    Ho = 0,
    Tl = 0,
    Fa = null,
    Bo = -1,
    Wo = 0;
  function st() {
    return (Ee & 6) !== 0 ? Le() : Bo !== -1 ? Bo : (Bo = Le());
  }
  function Un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ee & 2) !== 0 && nt !== 0
      ? nt & -nt
      : Hd.transition !== null
      ? (Wo === 0 && (Wo = hu()), Wo)
      : ((e = Re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xu(e.type))),
        e);
  }
  function Kt(e, t, n, r) {
    if (50 < Tl) throw ((Tl = 0), (Fa = null), Error(u(185)));
    el(e, n, r),
      ((Ee & 2) === 0 || e !== be) &&
        (e === be && ((Ee & 2) === 0 && (jo |= n), Ye === 4 && jn(e, nt)),
        vt(e, r),
        n === 1 &&
          Ee === 0 &&
          (t.mode & 1) === 0 &&
          (($r = Le() + 500), yo && Dn()));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    Hf(e, t);
    var r = Zl(e, e === be ? nt : 0);
    if (r === 0)
      n !== null && $t(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && $t(n), t === 1))
        e.tag === 0 ? $d(xc.bind(null, e)) : us(xc.bind(null, e)),
          Id(function () {
            (Ee & 6) === 0 && Dn();
          }),
          (n = null);
      else {
        switch (mu(r)) {
          case 1:
            n = En;
            break;
          case 4:
            n = qn;
            break;
          case 16:
            n = ve;
            break;
          case 536870912:
            n = ln;
            break;
          default:
            n = ve;
        }
        n = Dc(n, kc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function kc(e, t) {
    if (((Bo = -1), (Wo = 0), (Ee & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Hr() && e.callbackNode !== n) return null;
    var r = Zl(e, e === be ? nt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Vo(e, r);
    else {
      t = r;
      var o = Ee;
      Ee |= 2;
      var i = Rc();
      (be !== e || nt !== t) && ((pn = null), ($r = Le() + 500), ur(e, t));
      do
        try {
          ap();
          break;
        } catch (h) {
          Cc(e, h);
        }
      while (!0);
      qi(),
        (Uo.current = i),
        (Ee = o),
        Be !== null ? (t = 0) : ((be = null), (nt = 0), (t = Ye));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = hi(e)), o !== 0 && ((r = o), (t = Oa(e, o)))),
        t === 1)
      )
        throw ((n = Nl), ur(e, 0), jn(e, r), vt(e, Le()), n);
      if (t === 6) jn(e, r);
      else {
        if (
          ((o = e.current.alternate),
          (r & 30) === 0 &&
            !op(o) &&
            ((t = Vo(e, r)),
            t === 2 && ((i = hi(e)), i !== 0 && ((r = i), (t = Oa(e, i)))),
            t === 1))
        )
          throw ((n = Nl), ur(e, 0), jn(e, r), vt(e, Le()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            sr(e, mt, pn);
            break;
          case 3:
            if (
              (jn(e, r),
              (r & 130023424) === r && ((t = za + 500 - Le()), 10 < t))
            ) {
              if (Zl(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                st(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Hi(sr.bind(null, e, mt, pn), t);
              break;
            }
            sr(e, mt, pn);
            break;
          case 4:
            if ((jn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var s = 31 - ft(r);
              (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
            }
            if (
              ((r = o),
              (r = Le() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * lp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Hi(sr.bind(null, e, mt, pn), r);
              break;
            }
            sr(e, mt, pn);
            break;
          case 5:
            sr(e, mt, pn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return vt(e, Le()), e.callbackNode === n ? kc.bind(null, e) : null;
  }
  function Oa(e, t) {
    var n = Ml;
    return (
      e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
      (e = Vo(e, t)),
      e !== 2 && ((t = mt), (mt = n), t !== null && Ia(t)),
      e
    );
  }
  function Ia(e) {
    mt === null ? (mt = e) : mt.push.apply(mt, e);
  }
  function op(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!Ht(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function jn(e, t) {
    for (
      t &= ~Da,
        t &= ~jo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ft(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function xc(e) {
    if ((Ee & 6) !== 0) throw Error(u(327));
    Hr();
    var t = Zl(e, 0);
    if ((t & 1) === 0) return vt(e, Le()), null;
    var n = Vo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = hi(e);
      r !== 0 && ((t = r), (n = Oa(e, r)));
    }
    if (n === 1) throw ((n = Nl), ur(e, 0), jn(e, t), vt(e, Le()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sr(e, mt, pn),
      vt(e, Le()),
      null
    );
  }
  function Ua(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      (Ee = n), Ee === 0 && (($r = Le() + 500), yo && Dn());
    }
  }
  function ar(e) {
    In !== null && In.tag === 0 && (Ee & 6) === 0 && Hr();
    var t = Ee;
    Ee |= 1;
    var n = Dt.transition,
      r = Re;
    try {
      if (((Dt.transition = null), (Re = 1), e)) return e();
    } finally {
      (Re = r), (Dt.transition = n), (Ee = t), (Ee & 6) === 0 && Dn();
    }
  }
  function ja() {
    (xt = Ar.current), ze(Ar);
  }
  function ur(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Od(n)), Be !== null))
      for (n = Be.return; n !== null; ) {
        var r = n;
        switch ((Yi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && mo();
            break;
          case 3:
            Ir(), ze(dt), ze(rt), ia();
            break;
          case 5:
            la(r);
            break;
          case 4:
            Ir();
            break;
          case 13:
            ze(Oe);
            break;
          case 19:
            ze(Oe);
            break;
          case 10:
            bi(r.type._context);
            break;
          case 22:
          case 23:
            ja();
        }
        n = n.return;
      }
    if (
      ((be = e),
      (Be = e = An(e.current, null)),
      (nt = xt = t),
      (Ye = 0),
      (Nl = null),
      (Da = jo = ir = 0),
      (mt = Ml = null),
      rr !== null)
    ) {
      for (t = 0; t < rr.length; t++)
        if (((n = rr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var s = i.next;
            (i.next = o), (r.next = s);
          }
          n.pending = r;
        }
      rr = null;
    }
    return e;
  }
  function Cc(e, t) {
    do {
      var n = Be;
      try {
        if ((qi(), (Lo.current = Do), No)) {
          for (var r = Ie.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          No = !1;
        }
        if (
          ((or = 0),
          (qe = Ke = Ie = null),
          (kl = !1),
          (xl = 0),
          (Ta.current = null),
          n === null || n.return === null)
        ) {
          (Ye = 1), (Nl = t), (Be = null);
          break;
        }
        e: {
          var i = e,
            s = n.return,
            h = n,
            w = t;
          if (
            ((t = nt),
            (h.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var P = w,
              _ = h,
              O = _.tag;
            if ((_.mode & 1) === 0 && (O === 0 || O === 11 || O === 15)) {
              var z = _.alternate;
              z
                ? ((_.updateQueue = z.updateQueue),
                  (_.memoizedState = z.memoizedState),
                  (_.lanes = z.lanes))
                : ((_.updateQueue = null), (_.memoizedState = null));
            }
            var Q = Gs(s);
            if (Q !== null) {
              (Q.flags &= -257),
                Js(Q, s, h, i, t),
                Q.mode & 1 && Xs(i, P, t),
                (t = Q),
                (w = P);
              var X = t.updateQueue;
              if (X === null) {
                var J = new Set();
                J.add(w), (t.updateQueue = J);
              } else X.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                Xs(i, P, t), Aa();
                break e;
              }
              w = Error(u(426));
            }
          } else if (Fe && h.mode & 1) {
            var $e = Gs(s);
            if ($e !== null) {
              ($e.flags & 65536) === 0 && ($e.flags |= 256),
                Js($e, s, h, i, t),
                Ji(Ur(w, h));
              break e;
            }
          }
          (i = w = Ur(w, h)),
            Ye !== 4 && (Ye = 2),
            Ml === null ? (Ml = [i]) : Ml.push(i),
            (i = s);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = Ks(i, w, t);
                ws(i, x);
                break e;
              case 1:
                h = w;
                var S = i.type,
                  C = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (On === null || !On.has(C))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var U = Ys(i, h, t);
                  ws(i, U);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Lc(n);
      } catch (q) {
        (t = q), Be === n && n !== null && (Be = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Rc() {
    var e = Uo.current;
    return (Uo.current = Do), e === null ? Do : e;
  }
  function Aa() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
      be === null ||
        ((ir & 268435455) === 0 && (jo & 268435455) === 0) ||
        jn(be, nt);
  }
  function Vo(e, t) {
    var n = Ee;
    Ee |= 2;
    var r = Rc();
    (be !== e || nt !== t) && ((pn = null), ur(e, t));
    do
      try {
        ip();
        break;
      } catch (o) {
        Cc(e, o);
      }
    while (!0);
    if ((qi(), (Ee = n), (Uo.current = r), Be !== null)) throw Error(u(261));
    return (be = null), (nt = 0), Ye;
  }
  function ip() {
    for (; Be !== null; ) Pc(Be);
  }
  function ap() {
    for (; Be !== null && !Rt(); ) Pc(Be);
  }
  function Pc(e) {
    var t = Tc(e.alternate, e, xt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Lc(e) : (Be = t),
      (Ta.current = null);
  }
  function Lc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = bd(n, t, xt)), n !== null)) {
          Be = n;
          return;
        }
      } else {
        if (((n = ep(n, t)), n !== null)) {
          (n.flags &= 32767), (Be = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ye = 6), (Be = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function sr(e, t, n) {
    var r = Re,
      o = Dt.transition;
    try {
      (Dt.transition = null), (Re = 1), up(e, t, n, r);
    } finally {
      (Dt.transition = o), (Re = r);
    }
    return null;
  }
  function up(e, t, n, r) {
    do Hr();
    while (In !== null);
    if ((Ee & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (Bf(e, i),
      e === be && ((Be = be = null), (nt = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        $o ||
        (($o = !0),
        Dc(ve, function () {
          return Hr(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      (i = Dt.transition), (Dt.transition = null);
      var s = Re;
      Re = 1;
      var h = Ee;
      (Ee |= 4),
        (Ta.current = null),
        np(e, n),
        yc(n, e),
        Nd(Ai),
        (eo = !!ji),
        (Ai = ji = null),
        (e.current = n),
        rp(n),
        qr(),
        (Ee = h),
        (Re = s),
        (Dt.transition = i);
    } else e.current = n;
    if (
      ($o && (($o = !1), (In = e), (Ho = o)),
      (i = e.pendingLanes),
      i === 0 && (On = null),
      wr(n.stateNode),
      vt(e, Le()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Ao) throw ((Ao = !1), (e = _a), (_a = null), e);
    return (
      (Ho & 1) !== 0 && e.tag !== 0 && Hr(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Fa ? Tl++ : ((Tl = 0), (Fa = e))) : (Tl = 0),
      Dn(),
      null
    );
  }
  function Hr() {
    if (In !== null) {
      var e = mu(Ho),
        t = Dt.transition,
        n = Re;
      try {
        if (((Dt.transition = null), (Re = 16 > e ? 16 : e), In === null))
          var r = !1;
        else {
          if (((e = In), (In = null), (Ho = 0), (Ee & 6) !== 0))
            throw Error(u(331));
          var o = Ee;
          for (Ee |= 4, K = e.current; K !== null; ) {
            var i = K,
              s = i.child;
            if ((K.flags & 16) !== 0) {
              var h = i.deletions;
              if (h !== null) {
                for (var w = 0; w < h.length; w++) {
                  var P = h[w];
                  for (K = P; K !== null; ) {
                    var _ = K;
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ll(8, _, i);
                    }
                    var O = _.child;
                    if (O !== null) (O.return = _), (K = O);
                    else
                      for (; K !== null; ) {
                        _ = K;
                        var z = _.sibling,
                          Q = _.return;
                        if ((dc(_), _ === P)) {
                          K = null;
                          break;
                        }
                        if (z !== null) {
                          (z.return = Q), (K = z);
                          break;
                        }
                        K = Q;
                      }
                  }
                }
                var X = i.alternate;
                if (X !== null) {
                  var J = X.child;
                  if (J !== null) {
                    X.child = null;
                    do {
                      var $e = J.sibling;
                      (J.sibling = null), (J = $e);
                    } while (J !== null);
                  }
                }
                K = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && s !== null)
              (s.return = i), (K = s);
            else
              e: for (; K !== null; ) {
                if (((i = K), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, i, i.return);
                  }
                var x = i.sibling;
                if (x !== null) {
                  (x.return = i.return), (K = x);
                  break e;
                }
                K = i.return;
              }
          }
          var S = e.current;
          for (K = S; K !== null; ) {
            s = K;
            var C = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && C !== null)
              (C.return = s), (K = C);
            else
              e: for (s = S; K !== null; ) {
                if (((h = K), (h.flags & 2048) !== 0))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Io(9, h);
                    }
                  } catch (q) {
                    je(h, h.return, q);
                  }
                if (h === s) {
                  K = null;
                  break e;
                }
                var U = h.sibling;
                if (U !== null) {
                  (U.return = h.return), (K = U);
                  break e;
                }
                K = h.return;
              }
          }
          if (
            ((Ee = o),
            Dn(),
            Ce && typeof Ce.onPostCommitFiberRoot == "function")
          )
            try {
              Ce.onPostCommitFiberRoot(Pt, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Re = n), (Dt.transition = t);
      }
    }
    return !1;
  }
  function Nc(e, t, n) {
    (t = Ur(n, t)),
      (t = Ks(e, t, 1)),
      (e = _n(e, t, 1)),
      (t = st()),
      e !== null && (el(e, 1, t), vt(e, t));
  }
  function je(e, t, n) {
    if (e.tag === 3) Nc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (On === null || !On.has(r)))
          ) {
            (e = Ur(n, e)),
              (e = Ys(t, e, 1)),
              (t = _n(t, e, 1)),
              (e = st()),
              t !== null && (el(t, 1, e), vt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function sp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = st()),
      (e.pingedLanes |= e.suspendedLanes & n),
      be === e &&
        (nt & n) === n &&
        (Ye === 4 || (Ye === 3 && (nt & 130023424) === nt && 500 > Le() - za)
          ? ur(e, 0)
          : (Da |= n)),
      vt(e, t);
  }
  function Mc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Jl), (Jl <<= 1), (Jl & 130023424) === 0 && (Jl = 4194304)));
    var n = st();
    (e = cn(e, t)), e !== null && (el(e, t, n), vt(e, n));
  }
  function cp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Mc(e, n);
  }
  function fp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Mc(e, n);
  }
  var Tc;
  Tc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || dt.current) ht = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (ht = !1), qd(e, t, n);
        ht = (e.flags & 131072) !== 0;
      }
    else (ht = !1), Fe && (t.flags & 1048576) !== 0 && ss(t, wo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Fo(e, t), (e = t.pendingProps);
        var o = Mr(t, rt.current);
        Or(t, n), (o = sa(null, t, r, e, o, n));
        var i = ca();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              pt(r) ? ((i = !0), vo(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              na(t),
              (o.updater = zo),
              (t.stateNode = o),
              (o._reactInternals = t),
              va(t, r, e, n),
              (t = Sa(null, t, r, !0, i, n)))
            : ((t.tag = 0), Fe && i && Ki(t), ut(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Fo(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = pp(r)),
            (e = Wt(r, e)),
            o)
          ) {
            case 0:
              t = wa(null, t, r, e, n);
              break e;
            case 1:
              t = nc(null, t, r, e, n);
              break e;
            case 11:
              t = Zs(null, t, r, e, n);
              break e;
            case 14:
              t = qs(null, t, r, Wt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Wt(r, o)),
          wa(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Wt(r, o)),
          nc(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((rc(t), e === null)) throw Error(u(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            gs(e, t),
            Ro(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (o = Ur(Error(u(423)), t)), (t = lc(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = Ur(Error(u(424)), t)), (t = lc(e, t, r, n, o));
              break e;
            } else
              for (
                kt = Nn(t.stateNode.containerInfo.firstChild),
                  Et = t,
                  Fe = !0,
                  Bt = null,
                  n = vs(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((zr(), r === o)) {
              t = dn(e, t, n);
              break e;
            }
            ut(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Es(t),
          e === null && Gi(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (s = o.children),
          $i(r, o) ? (s = null) : i !== null && $i(r, i) && (t.flags |= 32),
          tc(e, t),
          ut(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && Gi(t), null;
      case 13:
        return oc(e, t, n);
      case 4:
        return (
          ra(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _r(t, null, r, n)) : ut(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Wt(r, o)),
          Zs(e, t, r, o, n)
        );
      case 7:
        return ut(e, t, t.pendingProps, n), t.child;
      case 8:
        return ut(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ut(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (s = o.value),
            Me(ko, r._currentValue),
            (r._currentValue = s),
            i !== null)
          )
            if (Ht(i.value, s)) {
              if (i.children === o.children && !dt.current) {
                t = dn(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var h = i.dependencies;
                if (h !== null) {
                  s = i.child;
                  for (var w = h.firstContext; w !== null; ) {
                    if (w.context === r) {
                      if (i.tag === 1) {
                        (w = fn(-1, n & -n)), (w.tag = 2);
                        var P = i.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var _ = P.pending;
                          _ === null
                            ? (w.next = w)
                            : ((w.next = _.next), (_.next = w)),
                            (P.pending = w);
                        }
                      }
                      (i.lanes |= n),
                        (w = i.alternate),
                        w !== null && (w.lanes |= n),
                        ea(i.return, n, t),
                        (h.lanes |= n);
                      break;
                    }
                    w = w.next;
                  }
                } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((s = i.return), s === null)) throw Error(u(341));
                  (s.lanes |= n),
                    (h = s.alternate),
                    h !== null && (h.lanes |= n),
                    ea(s, n, t),
                    (s = i.sibling);
                } else s = i.child;
                if (s !== null) s.return = i;
                else
                  for (s = i; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((i = s.sibling), i !== null)) {
                      (i.return = s.return), (s = i);
                      break;
                    }
                    s = s.return;
                  }
                i = s;
              }
          ut(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          Or(t, n),
          (o = Mt(o)),
          (r = r(o)),
          (t.flags |= 1),
          ut(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = Wt(r, t.pendingProps)),
          (o = Wt(r.type, o)),
          qs(e, t, r, o, n)
        );
      case 15:
        return bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Wt(r, o)),
          Fo(e, t),
          (t.tag = 1),
          pt(r) ? ((e = !0), vo(t)) : (e = !1),
          Or(t, n),
          Vs(t, r, o),
          va(t, r, o, n),
          Sa(null, t, r, !0, e, n)
        );
      case 19:
        return ac(e, t, n);
      case 22:
        return ec(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Dc(e, t) {
    return Sn(e, t);
  }
  function dp(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function zt(e, t, n, r) {
    return new dp(e, t, n, r);
  }
  function $a(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function pp(e) {
    if (typeof e == "function") return $a(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === at)) return 11;
      if (e === Ne) return 14;
    }
    return 2;
  }
  function An(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = zt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Qo(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) $a(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case ae:
          return cr(n.children, o, i, t);
        case ye:
          (s = 8), (o |= 8);
          break;
        case ce:
          return (
            (e = zt(12, n, t, o | 2)), (e.elementType = ce), (e.lanes = i), e
          );
        case Xe:
          return (e = zt(13, n, t, o)), (e.elementType = Xe), (e.lanes = i), e;
        case we:
          return (e = zt(19, n, t, o)), (e.elementType = we), (e.lanes = i), e;
        case Ue:
          return Ko(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xe:
                s = 10;
                break e;
              case We:
                s = 9;
                break e;
              case at:
                s = 11;
                break e;
              case Ne:
                s = 14;
                break e;
              case he:
                (s = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = zt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function cr(e, t, n, r) {
    return (e = zt(7, e, r, t)), (e.lanes = n), e;
  }
  function Ko(e, t, n, r) {
    return (
      (e = zt(22, e, r, t)),
      (e.elementType = Ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ha(e, t, n) {
    return (e = zt(6, e, null, t)), (e.lanes = n), e;
  }
  function Ba(e, t, n) {
    return (
      (t = zt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function hp(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = mi(0)),
      (this.expirationTimes = mi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Wa(e, t, n, r, o, i, s, h, w) {
    return (
      (e = new hp(e, t, n, h, w)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = zt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      na(i),
      e
    );
  }
  function mp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: L,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function zc(e) {
    if (!e) return Tn;
    e = e._reactInternals;
    e: {
      if (Se(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pt(n)) return is(e, n, t);
    }
    return t;
  }
  function _c(e, t, n, r, o, i, s, h, w) {
    return (
      (e = Wa(n, r, !0, e, o, i, s, h, w)),
      (e.context = zc(null)),
      (n = e.current),
      (r = st()),
      (o = Un(n)),
      (i = fn(r, o)),
      (i.callback = t ?? null),
      _n(n, i, o),
      (e.current.lanes = o),
      el(e, o, r),
      vt(e, r),
      e
    );
  }
  function Yo(e, t, n, r) {
    var o = t.current,
      i = st(),
      s = Un(o);
    return (
      (n = zc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = fn(i, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = _n(o, t, s)),
      e !== null && (Kt(e, o, s, i), Co(e, o, s)),
      s
    );
  }
  function Xo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Va(e, t) {
    Fc(e, t), (e = e.alternate) && Fc(e, t);
  }
  function vp() {
    return null;
  }
  var Oc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Qa(e) {
    this._internalRoot = e;
  }
  (Go.prototype.render = Qa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Yo(e, t, null, null);
    }),
    (Go.prototype.unmount = Qa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ar(function () {
            Yo(null, e, null, null);
          }),
            (t[on] = null);
        }
      });
  function Go(e) {
    this._internalRoot = e;
  }
  Go.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rn.length && t !== 0 && t < Rn[n].priority; n++);
      Rn.splice(n, 0, e), n === 0 && Eu(e);
    }
  };
  function Ka(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Jo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ic() {}
  function yp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var P = Xo(s);
          i.call(P);
        };
      }
      var s = _c(t, r, e, 0, null, !1, !1, "", Ic);
      return (
        (e._reactRootContainer = s),
        (e[on] = s.current),
        hl(e.nodeType === 8 ? e.parentNode : e),
        ar(),
        s
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var h = r;
      r = function () {
        var P = Xo(w);
        h.call(P);
      };
    }
    var w = Wa(e, 0, !1, null, null, !1, !1, "", Ic);
    return (
      (e._reactRootContainer = w),
      (e[on] = w.current),
      hl(e.nodeType === 8 ? e.parentNode : e),
      ar(function () {
        Yo(t, w, n, r);
      }),
      w
    );
  }
  function Zo(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof o == "function") {
        var h = o;
        o = function () {
          var w = Xo(s);
          h.call(w);
        };
      }
      Yo(t, s, e, o);
    } else s = yp(n, t, e, o, r);
    return Xo(s);
  }
  (vu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = br(t.pendingLanes);
          n !== 0 &&
            (vi(t, n | 1),
            vt(t, Le()),
            (Ee & 6) === 0 && (($r = Le() + 500), Dn()));
        }
        break;
      case 13:
        ar(function () {
          var r = cn(e, 1);
          if (r !== null) {
            var o = st();
            Kt(r, e, 1, o);
          }
        }),
          Va(e, 1);
    }
  }),
    (yi = function (e) {
      if (e.tag === 13) {
        var t = cn(e, 134217728);
        if (t !== null) {
          var n = st();
          Kt(t, e, 134217728, n);
        }
        Va(e, 134217728);
      }
    }),
    (yu = function (e) {
      if (e.tag === 13) {
        var t = Un(e),
          n = cn(e, t);
        if (n !== null) {
          var r = st();
          Kt(n, e, t, r);
        }
        Va(e, t);
      }
    }),
    (gu = function () {
      return Re;
    }),
    (wu = function (e, t) {
      var n = Re;
      try {
        return (Re = e), t();
      } finally {
        Re = n;
      }
    }),
    (Jr = function (e, t, n) {
      switch (t) {
        case "input":
          if ((hr(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = ho(r);
                if (!o) throw Error(u(90));
                Qr(r), hr(r, o);
              }
            }
          }
          break;
        case "textarea":
          Yr(e, n);
          break;
        case "select":
          (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
      }
    }),
    (Yl = Ua),
    (Xl = ar);
  var gp = { usingClientEntryPoint: !1, Events: [yl, Lr, ho, Jn, Zn, Ua] },
    Dl = {
      findFiberByHostInstance: bn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    wp = {
      bundleType: Dl.bundleType,
      version: Dl.version,
      rendererPackageName: Dl.rendererPackageName,
      rendererConfig: Dl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: de.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Pe(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Dl.findFiberByHostInstance || vp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qo.isDisabled && qo.supportsFiber)
      try {
        (Pt = qo.inject(wp)), (Ce = qo);
      } catch {}
  }
  return (
    (yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp),
    (yt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ka(t)) throw Error(u(200));
      return mp(e, t, null, n);
    }),
    (yt.createRoot = function (e, t) {
      if (!Ka(e)) throw Error(u(299));
      var n = !1,
        r = "",
        o = Oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Wa(e, 1, !1, null, null, n, !1, r, o)),
        (e[on] = t.current),
        hl(e.nodeType === 8 ? e.parentNode : e),
        new Qa(t)
      );
    }),
    (yt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = Pe(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (yt.flushSync = function (e) {
      return ar(e);
    }),
    (yt.hydrate = function (e, t, n) {
      if (!Jo(t)) throw Error(u(200));
      return Zo(null, e, t, !0, n);
    }),
    (yt.hydrateRoot = function (e, t, n) {
      if (!Ka(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = Oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = _c(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[on] = t.current),
        hl(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new Go(t);
    }),
    (yt.render = function (e, t, n) {
      if (!Jo(t)) throw Error(u(200));
      return Zo(null, e, t, !1, n);
    }),
    (yt.unmountComponentAtNode = function (e) {
      if (!Jo(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (ar(function () {
            Zo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[on] = null);
            });
          }),
          !0)
        : !1;
    }),
    (yt.unstable_batchedUpdates = Ua),
    (yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Jo(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return Zo(e, t, n, !1, r);
    }),
    (yt.version = "18.3.1-next-f1338f8080-20240426"),
    yt
  );
}
var $c;
function Pp() {
  if ($c) return Ya.exports;
  $c = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (a) {
        console.error(a);
      }
  }
  return l(), (Ya.exports = Rp()), Ya.exports;
}
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var sf = (l) => {
    throw TypeError(l);
  },
  Lp = (l, a, u) => a.has(l) || sf("Cannot " + u),
  Ja = (l, a, u) => (
    Lp(l, a, "read from private field"), u ? u.call(l) : a.get(l)
  ),
  Np = (l, a, u) =>
    a.has(l)
      ? sf("Cannot add the same private member more than once")
      : a instanceof WeakSet
      ? a.add(l)
      : a.set(l, u),
  Hc = "popstate";
function Mp(l = {}) {
  function a(c, f) {
    let { pathname: d, search: p, hash: g } = c.location;
    return Il(
      "",
      { pathname: d, search: p, hash: g },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function u(c, f) {
    return typeof f == "string" ? f : Vn(f);
  }
  return Dp(a, u, null, l);
}
function pe(l, a) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(a);
}
function He(l, a) {
  if (!l) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function Tp() {
  return Math.random().toString(36).substring(2, 10);
}
function Bc(l, a) {
  return { usr: l.state, key: l.key, idx: a };
}
function Il(l, a, u = null, c) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? hn(a) : a),
    state: u,
    key: (a && a.key) || c || Tp(),
  };
}
function Vn({ pathname: l = "/", search: a = "", hash: u = "" }) {
  return (
    a && a !== "?" && (l += a.charAt(0) === "?" ? a : "?" + a),
    u && u !== "#" && (l += u.charAt(0) === "#" ? u : "#" + u),
    l
  );
}
function hn(l) {
  let a = {};
  if (l) {
    let u = l.indexOf("#");
    u >= 0 && ((a.hash = l.substring(u)), (l = l.substring(0, u)));
    let c = l.indexOf("?");
    c >= 0 && ((a.search = l.substring(c)), (l = l.substring(0, c))),
      l && (a.pathname = l);
  }
  return a;
}
function Dp(l, a, u, c = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = c,
    p = f.history,
    g = "POP",
    m = null,
    y = k();
  y == null && ((y = 0), p.replaceState({ ...p.state, idx: y }, ""));
  function k() {
    return (p.state || { idx: null }).idx;
  }
  function R() {
    g = "POP";
    let I = k(),
      H = I == null ? null : I - y;
    (y = I), m && m({ action: g, location: W.location, delta: H });
  }
  function T(I, H) {
    g = "PUSH";
    let oe = Il(W.location, I, H);
    y = k() + 1;
    let V = Bc(oe, y),
      de = W.createHref(oe);
    try {
      p.pushState(V, "", de);
    } catch (ue) {
      if (ue instanceof DOMException && ue.name === "DataCloneError") throw ue;
      f.location.assign(de);
    }
    d && m && m({ action: g, location: W.location, delta: 1 });
  }
  function D(I, H) {
    g = "REPLACE";
    let oe = Il(W.location, I, H);
    y = k();
    let V = Bc(oe, y),
      de = W.createHref(oe);
    p.replaceState(V, "", de),
      d && m && m({ action: g, location: W.location, delta: 0 });
  }
  function j(I) {
    return cf(I);
  }
  let W = {
    get action() {
      return g;
    },
    get location() {
      return l(f, p);
    },
    listen(I) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Hc, R),
        (m = I),
        () => {
          f.removeEventListener(Hc, R), (m = null);
        }
      );
    },
    createHref(I) {
      return a(f, I);
    },
    createURL: j,
    encodeLocation(I) {
      let H = j(I);
      return { pathname: H.pathname, search: H.search, hash: H.hash };
    },
    push: T,
    replace: D,
    go(I) {
      return p.go(I);
    },
  };
  return W;
}
function cf(l, a = !1) {
  let u = "http://localhost";
  typeof window < "u" &&
    (u =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    pe(u, "No window.location.(origin|href) available to create URL");
  let c = typeof l == "string" ? l : Vn(l);
  return (
    (c = c.replace(/ $/, "%20")),
    !a && c.startsWith("//") && (c = u + c),
    new URL(c, u)
  );
}
var Ol,
  Wc = class {
    constructor(l) {
      if ((Np(this, Ol, new Map()), l)) for (let [a, u] of l) this.set(a, u);
    }
    get(l) {
      if (Ja(this, Ol).has(l)) return Ja(this, Ol).get(l);
      if (l.defaultValue !== void 0) return l.defaultValue;
      throw new Error("No value found for context");
    }
    set(l, a) {
      Ja(this, Ol).set(l, a);
    }
  };
Ol = new WeakMap();
var zp = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function _p(l) {
  return zp.has(l);
}
var Fp = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function Op(l) {
  return Fp.has(l);
}
function Ip(l) {
  return l.index === !0;
}
function Ul(l, a, u = [], c = {}, f = !1) {
  return l.map((d, p) => {
    let g = [...u, String(p)],
      m = typeof d.id == "string" ? d.id : g.join("-");
    if (
      (pe(
        d.index !== !0 || !d.children,
        "Cannot specify children on an index route"
      ),
      pe(
        f || !c[m],
        `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`
      ),
      Ip(d))
    ) {
      let y = { ...d, ...a(d), id: m };
      return (c[m] = y), y;
    } else {
      let y = { ...d, ...a(d), id: m, children: void 0 };
      return (
        (c[m] = y), d.children && (y.children = Ul(d.children, a, g, c, f)), y
      );
    }
  });
}
function Bn(l, a, u = "/") {
  return ni(l, a, u, !1);
}
function ni(l, a, u, c) {
  let f = typeof a == "string" ? hn(a) : a,
    d = Ft(f.pathname || "/", u);
  if (d == null) return null;
  let p = ff(l);
  jp(p);
  let g = null;
  for (let m = 0; g == null && m < p.length; ++m) {
    let y = Gp(d);
    g = Yp(p[m], y, c);
  }
  return g;
}
function Up(l, a) {
  let { route: u, pathname: c, params: f } = l;
  return {
    id: u.id,
    pathname: c,
    params: f,
    data: a[u.id],
    loaderData: a[u.id],
    handle: u.handle,
  };
}
function ff(l, a = [], u = [], c = "", f = !1) {
  let d = (p, g, m = f, y) => {
    let k = {
      relativePath: y === void 0 ? p.path || "" : y,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: g,
      route: p,
    };
    if (k.relativePath.startsWith("/")) {
      if (!k.relativePath.startsWith(c) && m) return;
      pe(
        k.relativePath.startsWith(c),
        `Absolute route path "${k.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (k.relativePath = k.relativePath.slice(c.length));
    }
    let R = tn([c, k.relativePath]),
      T = u.concat(k);
    p.children &&
      p.children.length > 0 &&
      (pe(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
      ),
      ff(p.children, a, T, R, m)),
      !(p.path == null && !p.index) &&
        a.push({ path: R, score: Qp(R, p.index), routesMeta: T });
  };
  return (
    l.forEach((p, g) => {
      var m;
      if (p.path === "" || !((m = p.path) != null && m.includes("?"))) d(p, g);
      else for (let y of df(p.path)) d(p, g, !0, y);
    }),
    a
  );
}
function df(l) {
  let a = l.split("/");
  if (a.length === 0) return [];
  let [u, ...c] = a,
    f = u.endsWith("?"),
    d = u.replace(/\?$/, "");
  if (c.length === 0) return f ? [d, ""] : [d];
  let p = df(c.join("/")),
    g = [];
  return (
    g.push(...p.map((m) => (m === "" ? d : [d, m].join("/")))),
    f && g.push(...p),
    g.map((m) => (l.startsWith("/") && m === "" ? "/" : m))
  );
}
function jp(l) {
  l.sort((a, u) =>
    a.score !== u.score
      ? u.score - a.score
      : Kp(
          a.routesMeta.map((c) => c.childrenIndex),
          u.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
var Ap = /^:[\w-]+$/,
  $p = 3,
  Hp = 2,
  Bp = 1,
  Wp = 10,
  Vp = -2,
  Vc = (l) => l === "*";
function Qp(l, a) {
  let u = l.split("/"),
    c = u.length;
  return (
    u.some(Vc) && (c += Vp),
    a && (c += Hp),
    u
      .filter((f) => !Vc(f))
      .reduce((f, d) => f + (Ap.test(d) ? $p : d === "" ? Bp : Wp), c)
  );
}
function Kp(l, a) {
  return l.length === a.length && l.slice(0, -1).every((c, f) => c === a[f])
    ? l[l.length - 1] - a[a.length - 1]
    : 0;
}
function Yp(l, a, u = !1) {
  let { routesMeta: c } = l,
    f = {},
    d = "/",
    p = [];
  for (let g = 0; g < c.length; ++g) {
    let m = c[g],
      y = g === c.length - 1,
      k = d === "/" ? a : a.slice(d.length) || "/",
      R = ii(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: y },
        k
      ),
      T = m.route;
    if (
      (!R &&
        y &&
        u &&
        !c[c.length - 1].route.index &&
        (R = ii(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          k
        )),
      !R)
    )
      return null;
    Object.assign(f, R.params),
      p.push({
        params: f,
        pathname: tn([d, R.pathname]),
        pathnameBase: bp(tn([d, R.pathnameBase])),
        route: T,
      }),
      R.pathnameBase !== "/" && (d = tn([d, R.pathnameBase]));
  }
  return p;
}
function ii(l, a) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [u, c] = Xp(l.path, l.caseSensitive, l.end),
    f = a.match(u);
  if (!f) return null;
  let d = f[0],
    p = d.replace(/(.)\/+$/, "$1"),
    g = f.slice(1);
  return {
    params: c.reduce((y, { paramName: k, isOptional: R }, T) => {
      if (k === "*") {
        let j = g[T] || "";
        p = d.slice(0, d.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const D = g[T];
      return (
        R && !D ? (y[k] = void 0) : (y[k] = (D || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: d,
    pathnameBase: p,
    pattern: l,
  };
}
function Xp(l, a = !1, u = !0) {
  He(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let c = [],
    f =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, g, m) => (
            c.push({ paramName: g, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    l.endsWith("*")
      ? (c.push({ paramName: "*" }),
        (f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
      ? (f += "\\/*$")
      : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, a ? void 0 : "i"), c]
  );
}
function Gp(l) {
  try {
    return l
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      He(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      l
    );
  }
}
function Ft(l, a) {
  if (a === "/") return l;
  if (!l.toLowerCase().startsWith(a.toLowerCase())) return null;
  let u = a.endsWith("/") ? a.length - 1 : a.length,
    c = l.charAt(u);
  return c && c !== "/" ? null : l.slice(u) || "/";
}
function Jp({ basename: l, pathname: a }) {
  return a === "/" ? l : tn([l, a]);
}
function Zp(l, a = "/") {
  let {
    pathname: u,
    search: c = "",
    hash: f = "",
  } = typeof l == "string" ? hn(l) : l;
  return {
    pathname: u ? (u.startsWith("/") ? u : qp(u, a)) : a,
    search: eh(c),
    hash: th(f),
  };
}
function qp(l, a) {
  let u = a.replace(/\/+$/, "").split("/");
  return (
    l.split("/").forEach((f) => {
      f === ".." ? u.length > 1 && u.pop() : f !== "." && u.push(f);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function Za(l, a, u, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function pf(l) {
  return l.filter(
    (a, u) => u === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function si(l) {
  let a = pf(l);
  return a.map((u, c) => (c === a.length - 1 ? u.pathname : u.pathnameBase));
}
function ci(l, a, u, c = !1) {
  let f;
  typeof l == "string"
    ? (f = hn(l))
    : ((f = { ...l }),
      pe(
        !f.pathname || !f.pathname.includes("?"),
        Za("?", "pathname", "search", f)
      ),
      pe(
        !f.pathname || !f.pathname.includes("#"),
        Za("#", "pathname", "hash", f)
      ),
      pe(!f.search || !f.search.includes("#"), Za("#", "search", "hash", f)));
  let d = l === "" || f.pathname === "",
    p = d ? "/" : f.pathname,
    g;
  if (p == null) g = u;
  else {
    let R = a.length - 1;
    if (!c && p.startsWith("..")) {
      let T = p.split("/");
      for (; T[0] === ".."; ) T.shift(), (R -= 1);
      f.pathname = T.join("/");
    }
    g = R >= 0 ? a[R] : "/";
  }
  let m = Zp(f, g),
    y = p && p !== "/" && p.endsWith("/"),
    k = (d || p === ".") && u.endsWith("/");
  return !m.pathname.endsWith("/") && (y || k) && (m.pathname += "/"), m;
}
var tn = (l) => l.join("/").replace(/\/\/+/g, "/"),
  bp = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
  eh = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  th = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l),
  ai = class {
    constructor(l, a, u, c = !1) {
      (this.status = l),
        (this.statusText = a || ""),
        (this.internal = c),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u);
    }
  };
function jl(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
var hf = ["POST", "PUT", "PATCH", "DELETE"],
  nh = new Set(hf),
  rh = ["GET", ...hf],
  lh = new Set(rh),
  oh = new Set([301, 302, 303, 307, 308]),
  ih = new Set([307, 308]),
  qa = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ah = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  uh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  iu = (l) => uh.test(l),
  sh = (l) => ({ hasErrorBoundary: !!l.hasErrorBoundary }),
  mf = "remix-router-transitions",
  vf = Symbol("ResetLoaderData");
function ch(l) {
  const a = l.window ? l.window : typeof window < "u" ? window : void 0,
    u =
      typeof a < "u" &&
      typeof a.document < "u" &&
      typeof a.document.createElement < "u";
  pe(
    l.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let c = l.hydrationRouteProperties || [],
    f = l.mapRouteProperties || sh,
    d = {},
    p = Ul(l.routes, f, void 0, d),
    g,
    m = l.basename || "/";
  m.startsWith("/") || (m = `/${m}`);
  let y = l.dataStrategy || mh,
    k = { ...l.future },
    R = null,
    T = new Set(),
    D = null,
    j = null,
    W = null,
    I = l.hydrationData != null,
    H = Bn(p, l.history.location, m),
    oe = !1,
    V = null,
    de;
  if (H == null && !l.patchRoutesOnNavigation) {
    let v = _t(404, { pathname: l.history.location.pathname }),
      { matches: E, route: N } = bo(p);
    (de = !0), (H = E), (V = { [N.id]: v });
  } else if (
    (H &&
      !l.hydrationData &&
      Jn(H, p, l.history.location.pathname).active &&
      (H = null),
    H)
  )
    if (H.some((v) => v.route.lazy)) de = !1;
    else if (!H.some((v) => v.route.loader)) de = !0;
    else {
      let v = l.hydrationData ? l.hydrationData.loaderData : null,
        E = l.hydrationData ? l.hydrationData.errors : null;
      if (E) {
        let N = H.findIndex((F) => E[F.route.id] !== void 0);
        de = H.slice(0, N + 1).every((F) => !nu(F.route, v, E));
      } else de = H.every((N) => !nu(N.route, v, E));
    }
  else {
    (de = !1), (H = []);
    let v = Jn(null, p, l.history.location.pathname);
    v.active && v.matches && ((oe = !0), (H = v.matches));
  }
  let ue,
    L = {
      historyAction: l.history.action,
      location: l.history.location,
      matches: H,
      initialized: de,
      navigation: qa,
      restoreScrollPosition: l.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (l.hydrationData && l.hydrationData.loaderData) || {},
      actionData: (l.hydrationData && l.hydrationData.actionData) || null,
      errors: (l.hydrationData && l.hydrationData.errors) || V,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ae = "POP",
    ye = !1,
    ce,
    xe = !1,
    We = new Map(),
    at = null,
    Xe = !1,
    we = !1,
    Ne = new Set(),
    he = new Map(),
    Ue = 0,
    $ = -1,
    G = new Map(),
    B = new Set(),
    me = new Map(),
    ge = new Map(),
    _e = new Set(),
    Ve = new Map(),
    Xt,
    Qe = null;
  function mn() {
    if (
      ((R = l.history.listen(({ action: v, location: E, delta: N }) => {
        if (Xt) {
          Xt(), (Xt = void 0);
          return;
        }
        He(
          Ve.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = gr({
          currentLocation: L.location,
          nextLocation: E,
          historyAction: v,
        });
        if (F && N != null) {
          let A = new Promise((te) => {
            Xt = te;
          });
          l.history.go(N * -1),
            gn(F, {
              state: "blocked",
              location: E,
              proceed() {
                gn(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: E,
                }),
                  A.then(() => l.history.go(N));
              },
              reset() {
                let te = new Map(L.blockers);
                te.set(F, zl), Ge({ blockers: te });
              },
            });
          return;
        }
        return Ut(v, E);
      })),
      u)
    ) {
      Th(a, We);
      let v = () => Dh(a, We);
      a.addEventListener("pagehide", v),
        (at = () => a.removeEventListener("pagehide", v));
    }
    return L.initialized || Ut("POP", L.location, { initialHydration: !0 }), ue;
  }
  function Gt() {
    R && R(),
      at && at(),
      T.clear(),
      ce && ce.abort(),
      L.fetchers.forEach((v, E) => vr(E)),
      L.blockers.forEach((v, E) => yr(E));
  }
  function Bl(v) {
    return T.add(v), () => T.delete(v);
  }
  function Ge(v, E = {}) {
    v.matches &&
      (v.matches = v.matches.map((A) => {
        let te = d[A.route.id],
          Z = A.route;
        return Z.element !== te.element ||
          Z.errorElement !== te.errorElement ||
          Z.hydrateFallbackElement !== te.hydrateFallbackElement
          ? { ...A, route: te }
          : A;
      })),
      (L = { ...L, ...v });
    let N = [],
      F = [];
    L.fetchers.forEach((A, te) => {
      A.state === "idle" && (_e.has(te) ? N.push(te) : F.push(te));
    }),
      _e.forEach((A) => {
        !L.fetchers.has(A) && !he.has(A) && N.push(A);
      }),
      [...T].forEach((A) =>
        A(L, {
          deletedFetchers: N,
          viewTransitionOpts: E.viewTransitionOpts,
          flushSync: E.flushSync === !0,
        })
      ),
      N.forEach((A) => vr(A)),
      F.forEach((A) => L.fetchers.delete(A));
  }
  function It(v, E, { flushSync: N } = {}) {
    var ie, ee;
    let F =
        L.actionData != null &&
        L.navigation.formMethod != null &&
        gt(L.navigation.formMethod) &&
        L.navigation.state === "loading" &&
        ((ie = v.state) == null ? void 0 : ie._isRedirect) !== !0,
      A;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (A = E.actionData)
        : (A = null)
      : F
      ? (A = L.actionData)
      : (A = null);
    let te = E.loaderData
        ? ef(L.loaderData, E.loaderData, E.matches || [], E.errors)
        : L.loaderData,
      Z = L.blockers;
    Z.size > 0 && ((Z = new Map(Z)), Z.forEach((fe, Se) => Z.set(Se, zl)));
    let Y = Xe ? !1 : Zr(v, E.matches || L.matches),
      b =
        ye === !0 ||
        (L.navigation.formMethod != null &&
          gt(L.navigation.formMethod) &&
          ((ee = v.state) == null ? void 0 : ee._isRedirect) !== !0);
    g && ((p = g), (g = void 0)),
      Xe ||
        ae === "POP" ||
        (ae === "PUSH"
          ? l.history.push(v, v.state)
          : ae === "REPLACE" && l.history.replace(v, v.state));
    let ne;
    if (ae === "POP") {
      let fe = We.get(L.location.pathname);
      fe && fe.has(v.pathname)
        ? (ne = { currentLocation: L.location, nextLocation: v })
        : We.has(v.pathname) &&
          (ne = { currentLocation: v, nextLocation: L.location });
    } else if (xe) {
      let fe = We.get(L.location.pathname);
      fe
        ? fe.add(v.pathname)
        : ((fe = new Set([v.pathname])), We.set(L.location.pathname, fe)),
        (ne = { currentLocation: L.location, nextLocation: v });
    }
    Ge(
      {
        ...E,
        actionData: A,
        loaderData: te,
        historyAction: ae,
        location: v,
        initialized: !0,
        navigation: qa,
        revalidation: "idle",
        restoreScrollPosition: Y,
        preventScrollReset: b,
        blockers: Z,
      },
      { viewTransitionOpts: ne, flushSync: N === !0 }
    ),
      (ae = "POP"),
      (ye = !1),
      (xe = !1),
      (Xe = !1),
      (we = !1),
      Qe == null || Qe.resolve(),
      (Qe = null);
  }
  async function Qr(v, E) {
    if (typeof v == "number") {
      l.history.go(v);
      return;
    }
    let N = tu(
        L.location,
        L.matches,
        m,
        v,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      { path: F, submission: A, error: te } = Qc(!1, N, E),
      Z = L.location,
      Y = Il(L.location, F, E && E.state);
    Y = { ...Y, ...l.history.encodeLocation(Y) };
    let b = E && E.replace != null ? E.replace : void 0,
      ne = "PUSH";
    b === !0
      ? (ne = "REPLACE")
      : b === !1 ||
        (A != null &&
          gt(A.formMethod) &&
          A.formAction === L.location.pathname + L.location.search &&
          (ne = "REPLACE"));
    let ie =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      ee = (E && E.flushSync) === !0,
      fe = gr({ currentLocation: Z, nextLocation: Y, historyAction: ne });
    if (fe) {
      gn(fe, {
        state: "blocked",
        location: Y,
        proceed() {
          gn(fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Y,
          }),
            Qr(v, E);
        },
        reset() {
          let Se = new Map(L.blockers);
          Se.set(fe, zl), Ge({ blockers: Se });
        },
      });
      return;
    }
    await Ut(ne, Y, {
      submission: A,
      pendingError: te,
      preventScrollReset: ie,
      replace: E && E.replace,
      enableViewTransition: E && E.viewTransition,
      flushSync: ee,
    });
  }
  function pr() {
    Qe || (Qe = zh()), mr(), Ge({ revalidation: "loading" });
    let v = Qe.promise;
    return L.navigation.state === "submitting"
      ? v
      : L.navigation.state === "idle"
      ? (Ut(L.historyAction, L.location, {
          startUninterruptedRevalidation: !0,
        }),
        v)
      : (Ut(ae || L.historyAction, L.navigation.location, {
          overrideNavigation: L.navigation,
          enableViewTransition: xe === !0,
        }),
        v);
  }
  async function Ut(v, E, N) {
    ce && ce.abort(),
      (ce = null),
      (ae = v),
      (Xe = (N && N.startUninterruptedRevalidation) === !0),
      wn(L.location, L.matches),
      (ye = (N && N.preventScrollReset) === !0),
      (xe = (N && N.enableViewTransition) === !0);
    let F = g || p,
      A = N && N.overrideNavigation,
      te =
        N != null &&
        N.initialHydration &&
        L.matches &&
        L.matches.length > 0 &&
        !oe
          ? L.matches
          : Bn(F, E, m),
      Z = (N && N.flushSync) === !0;
    if (
      te &&
      L.initialized &&
      !we &&
      xh(L.location, E) &&
      !(N && N.submission && gt(N.submission.formMethod))
    ) {
      It(E, { matches: te }, { flushSync: Z });
      return;
    }
    let Y = Jn(te, F, E.pathname);
    if ((Y.active && Y.matches && (te = Y.matches), !te)) {
      let { error: Je, notFoundMatches: Te, route: Pe } = Gn(E.pathname);
      It(
        E,
        { matches: Te, loaderData: {}, errors: { [Pe.id]: Je } },
        { flushSync: Z }
      );
      return;
    }
    ce = new AbortController();
    let b = Br(l.history, E, ce.signal, N && N.submission),
      ne = l.getContext ? await l.getContext() : new Wc(),
      ie;
    if (N && N.pendingError)
      ie = [Wn(te).route.id, { type: "error", error: N.pendingError }];
    else if (N && N.submission && gt(N.submission.formMethod)) {
      let Je = await Wl(
        b,
        E,
        N.submission,
        te,
        ne,
        Y.active,
        N && N.initialHydration === !0,
        { replace: N.replace, flushSync: Z }
      );
      if (Je.shortCircuited) return;
      if (Je.pendingActionResult) {
        let [Te, Pe] = Je.pendingActionResult;
        if (Ct(Pe) && jl(Pe.error) && Pe.error.status === 404) {
          (ce = null),
            It(E, {
              matches: Je.matches,
              loaderData: {},
              errors: { [Te]: Pe.error },
            });
          return;
        }
      }
      (te = Je.matches || te),
        (ie = Je.pendingActionResult),
        (A = ba(E, N.submission)),
        (Z = !1),
        (Y.active = !1),
        (b = Br(l.history, b.url, b.signal));
    }
    let {
      shortCircuited: ee,
      matches: fe,
      loaderData: Se,
      errors: Ae,
    } = await Vl(
      b,
      E,
      te,
      ne,
      Y.active,
      A,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      Z,
      ie
    );
    ee ||
      ((ce = null),
      It(E, { matches: fe || te, ...tf(ie), loaderData: Se, errors: Ae }));
  }
  async function Wl(v, E, N, F, A, te, Z, Y = {}) {
    mr();
    let b = Nh(E, N);
    if ((Ge({ navigation: b }, { flushSync: Y.flushSync === !0 }), te)) {
      let ee = await Zn(F, E.pathname, v.signal);
      if (ee.type === "aborted") return { shortCircuited: !0 };
      if (ee.type === "error") {
        if (ee.partialMatches.length === 0) {
          let { matches: Se, route: Ae } = bo(p);
          return {
            matches: Se,
            pendingActionResult: [Ae.id, { type: "error", error: ee.error }],
          };
        }
        let fe = Wn(ee.partialMatches).route.id;
        return {
          matches: ee.partialMatches,
          pendingActionResult: [fe, { type: "error", error: ee.error }],
        };
      } else if (ee.matches) F = ee.matches;
      else {
        let { notFoundMatches: fe, error: Se, route: Ae } = Gn(E.pathname);
        return {
          matches: fe,
          pendingActionResult: [Ae.id, { type: "error", error: Se }],
        };
      }
    }
    let ne,
      ie = ri(F, E);
    if (!ie.route.action && !ie.route.lazy)
      ne = {
        type: "error",
        error: _t(405, {
          method: v.method,
          pathname: E.pathname,
          routeId: ie.route.id,
        }),
      };
    else {
      let ee = Wr(f, d, v, F, ie, Z ? [] : c, A),
        fe = await yn(v, ee, A, null);
      if (((ne = fe[ie.route.id]), !ne)) {
        for (let Se of F)
          if (fe[Se.route.id]) {
            ne = fe[Se.route.id];
            break;
          }
      }
      if (v.signal.aborted) return { shortCircuited: !0 };
    }
    if (fr(ne)) {
      let ee;
      return (
        Y && Y.replace != null
          ? (ee = Y.replace)
          : (ee =
              Zc(ne.response.headers.get("Location"), new URL(v.url), m) ===
              L.location.pathname + L.location.search),
        await jt(v, ne, !0, { submission: N, replace: ee }),
        { shortCircuited: !0 }
      );
    }
    if (Ct(ne)) {
      let ee = Wn(F, ie.route.id);
      return (
        (Y && Y.replace) !== !0 && (ae = "PUSH"),
        { matches: F, pendingActionResult: [ee.route.id, ne, ie.route.id] }
      );
    }
    return { matches: F, pendingActionResult: [ie.route.id, ne] };
  }
  async function Vl(v, E, N, F, A, te, Z, Y, b, ne, ie, ee) {
    let fe = te || ba(E, Z),
      Se = Z || Y || rf(fe),
      Ae = !Xe && !ne;
    if (A) {
      if (Ae) {
        let Ze = hr(ee);
        Ge(
          { navigation: fe, ...(Ze !== void 0 ? { actionData: Ze } : {}) },
          { flushSync: ie }
        );
      }
      let ve = await Zn(N, E.pathname, v.signal);
      if (ve.type === "aborted") return { shortCircuited: !0 };
      if (ve.type === "error") {
        if (ve.partialMatches.length === 0) {
          let { matches: ln, route: Pt } = bo(p);
          return { matches: ln, loaderData: {}, errors: { [Pt.id]: ve.error } };
        }
        let Ze = Wn(ve.partialMatches).route.id;
        return {
          matches: ve.partialMatches,
          loaderData: {},
          errors: { [Ze]: ve.error },
        };
      } else if (ve.matches) N = ve.matches;
      else {
        let { error: Ze, notFoundMatches: ln, route: Pt } = Gn(E.pathname);
        return { matches: ln, loaderData: {}, errors: { [Pt.id]: Ze } };
      }
    }
    let Je = g || p,
      { dsMatches: Te, revalidatingFetchers: Pe } = Kc(
        v,
        F,
        f,
        d,
        l.history,
        L,
        N,
        Se,
        E,
        ne ? [] : c,
        ne === !0,
        we,
        Ne,
        _e,
        me,
        B,
        Je,
        m,
        l.patchRoutesOnNavigation != null,
        ee
      );
    if (
      (($ = ++Ue),
      !l.dataStrategy &&
        !Te.some((ve) => ve.shouldLoad) &&
        !Te.some((ve) => ve.route.middleware) &&
        Pe.length === 0)
    ) {
      let ve = Xr();
      return (
        It(
          E,
          {
            matches: N,
            loaderData: {},
            errors: ee && Ct(ee[1]) ? { [ee[0]]: ee[1].error } : null,
            ...tf(ee),
            ...(ve ? { fetchers: new Map(L.fetchers) } : {}),
          },
          { flushSync: ie }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ae) {
      let ve = {};
      if (!A) {
        ve.navigation = fe;
        let Ze = hr(ee);
        Ze !== void 0 && (ve.actionData = Ze);
      }
      Pe.length > 0 && (ve.fetchers = Ql(Pe)), Ge(ve, { flushSync: ie });
    }
    Pe.forEach((ve) => {
      ct(ve.key), ve.controller && he.set(ve.key, ve.controller);
    });
    let Jt = () => Pe.forEach((ve) => ct(ve.key));
    ce && ce.signal.addEventListener("abort", Jt);
    let { loaderResults: Sn, fetcherResults: $t } = await Yr(Te, Pe, v, F);
    if (v.signal.aborted) return { shortCircuited: !0 };
    ce && ce.signal.removeEventListener("abort", Jt),
      Pe.forEach((ve) => he.delete(ve.key));
    let Rt = ei(Sn);
    if (Rt)
      return await jt(v, Rt.result, !0, { replace: b }), { shortCircuited: !0 };
    if (((Rt = ei($t)), Rt))
      return (
        B.add(Rt.key),
        await jt(v, Rt.result, !0, { replace: b }),
        { shortCircuited: !0 }
      );
    let { loaderData: qr, errors: Le } = bc(L, N, Sn, ee, Pe, $t);
    ne && L.errors && (Le = { ...L.errors, ...Le });
    let rn = Xr(),
      En = Gr($),
      qn = rn || En || Pe.length > 0;
    return {
      matches: N,
      loaderData: qr,
      errors: Le,
      ...(qn ? { fetchers: new Map(L.fetchers) } : {}),
    };
  }
  function hr(v) {
    if (v && !Ct(v[1])) return { [v[0]]: v[1].data };
    if (L.actionData)
      return Object.keys(L.actionData).length === 0 ? null : L.actionData;
  }
  function Ql(v) {
    return (
      v.forEach((E) => {
        let N = L.fetchers.get(E.key),
          F = _l(void 0, N ? N.data : void 0);
        L.fetchers.set(E.key, F);
      }),
      new Map(L.fetchers)
    );
  }
  async function Kr(v, E, N, F) {
    ct(v);
    let A = (F && F.flushSync) === !0,
      te = g || p,
      Z = tu(L.location, L.matches, m, N, E, F == null ? void 0 : F.relative),
      Y = Bn(te, Z, m),
      b = Jn(Y, te, Z);
    if ((b.active && b.matches && (Y = b.matches), !Y)) {
      wt(v, E, _t(404, { pathname: Z }), { flushSync: A });
      return;
    }
    let { path: ne, submission: ie, error: ee } = Qc(!0, Z, F);
    if (ee) {
      wt(v, E, ee, { flushSync: A });
      return;
    }
    let fe = l.getContext ? await l.getContext() : new Wc(),
      Se = (F && F.preventScrollReset) === !0;
    if (ie && gt(ie.formMethod)) {
      await Kn(v, E, ne, Y, fe, b.active, A, Se, ie);
      return;
    }
    me.set(v, { routeId: E, path: ne }),
      await vn(v, E, ne, Y, fe, b.active, A, Se, ie);
  }
  async function Kn(v, E, N, F, A, te, Z, Y, b) {
    mr(), me.delete(v);
    let ne = L.fetchers.get(v);
    At(v, Mh(b, ne), { flushSync: Z });
    let ie = new AbortController(),
      ee = Br(l.history, N, ie.signal, b);
    if (te) {
      let Ce = await Zn(F, new URL(ee.url).pathname, ee.signal, v);
      if (Ce.type === "aborted") return;
      if (Ce.type === "error") {
        wt(v, E, Ce.error, { flushSync: Z });
        return;
      } else if (Ce.matches) F = Ce.matches;
      else {
        wt(v, E, _t(404, { pathname: N }), { flushSync: Z });
        return;
      }
    }
    let fe = ri(F, N);
    if (!fe.route.action && !fe.route.lazy) {
      let Ce = _t(405, { method: b.formMethod, pathname: N, routeId: E });
      wt(v, E, Ce, { flushSync: Z });
      return;
    }
    he.set(v, ie);
    let Se = Ue,
      Ae = Wr(f, d, ee, F, fe, c, A),
      Te = (await yn(ee, Ae, A, v))[fe.route.id];
    if (ee.signal.aborted) {
      he.get(v) === ie && he.delete(v);
      return;
    }
    if (_e.has(v)) {
      if (fr(Te) || Ct(Te)) {
        At(v, Hn(void 0));
        return;
      }
    } else {
      if (fr(Te))
        if ((he.delete(v), $ > Se)) {
          At(v, Hn(void 0));
          return;
        } else
          return (
            B.add(v),
            At(v, _l(b)),
            jt(ee, Te, !1, { fetcherSubmission: b, preventScrollReset: Y })
          );
      if (Ct(Te)) {
        wt(v, E, Te.error);
        return;
      }
    }
    let Pe = L.navigation.location || L.location,
      Jt = Br(l.history, Pe, ie.signal),
      Sn = g || p,
      $t =
        L.navigation.state !== "idle"
          ? Bn(Sn, L.navigation.location, m)
          : L.matches;
    pe($t, "Didn't find any matches after fetcher action");
    let Rt = ++Ue;
    G.set(v, Rt);
    let qr = _l(b, Te.data);
    L.fetchers.set(v, qr);
    let { dsMatches: Le, revalidatingFetchers: rn } = Kc(
      Jt,
      A,
      f,
      d,
      l.history,
      L,
      $t,
      b,
      Pe,
      c,
      !1,
      we,
      Ne,
      _e,
      me,
      B,
      Sn,
      m,
      l.patchRoutesOnNavigation != null,
      [fe.route.id, Te]
    );
    rn
      .filter((Ce) => Ce.key !== v)
      .forEach((Ce) => {
        let wr = Ce.key,
          ft = L.fetchers.get(wr),
          pi = _l(void 0, ft ? ft.data : void 0);
        L.fetchers.set(wr, pi),
          ct(wr),
          Ce.controller && he.set(wr, Ce.controller);
      }),
      Ge({ fetchers: new Map(L.fetchers) });
    let En = () => rn.forEach((Ce) => ct(Ce.key));
    ie.signal.addEventListener("abort", En);
    let { loaderResults: qn, fetcherResults: ve } = await Yr(Le, rn, Jt, A);
    if (ie.signal.aborted) return;
    if (
      (ie.signal.removeEventListener("abort", En),
      G.delete(v),
      he.delete(v),
      rn.forEach((Ce) => he.delete(Ce.key)),
      L.fetchers.has(v))
    ) {
      let Ce = Hn(Te.data);
      L.fetchers.set(v, Ce);
    }
    let Ze = ei(qn);
    if (Ze) return jt(Jt, Ze.result, !1, { preventScrollReset: Y });
    if (((Ze = ei(ve)), Ze))
      return B.add(Ze.key), jt(Jt, Ze.result, !1, { preventScrollReset: Y });
    let { loaderData: ln, errors: Pt } = bc(L, $t, qn, void 0, rn, ve);
    Gr(Rt),
      L.navigation.state === "loading" && Rt > $
        ? (pe(ae, "Expected pending action"),
          ce && ce.abort(),
          It(L.navigation.location, {
            matches: $t,
            loaderData: ln,
            errors: Pt,
            fetchers: new Map(L.fetchers),
          }))
        : (Ge({
            errors: Pt,
            loaderData: ef(L.loaderData, ln, $t, Pt),
            fetchers: new Map(L.fetchers),
          }),
          (we = !1));
  }
  async function vn(v, E, N, F, A, te, Z, Y, b) {
    let ne = L.fetchers.get(v);
    At(v, _l(b, ne ? ne.data : void 0), { flushSync: Z });
    let ie = new AbortController(),
      ee = Br(l.history, N, ie.signal);
    if (te) {
      let Pe = await Zn(F, new URL(ee.url).pathname, ee.signal, v);
      if (Pe.type === "aborted") return;
      if (Pe.type === "error") {
        wt(v, E, Pe.error, { flushSync: Z });
        return;
      } else if (Pe.matches) F = Pe.matches;
      else {
        wt(v, E, _t(404, { pathname: N }), { flushSync: Z });
        return;
      }
    }
    let fe = ri(F, N);
    he.set(v, ie);
    let Se = Ue,
      Ae = Wr(f, d, ee, F, fe, c, A),
      Te = (await yn(ee, Ae, A, v))[fe.route.id];
    if ((he.get(v) === ie && he.delete(v), !ee.signal.aborted)) {
      if (_e.has(v)) {
        At(v, Hn(void 0));
        return;
      }
      if (fr(Te))
        if ($ > Se) {
          At(v, Hn(void 0));
          return;
        } else {
          B.add(v), await jt(ee, Te, !1, { preventScrollReset: Y });
          return;
        }
      if (Ct(Te)) {
        wt(v, E, Te.error);
        return;
      }
      At(v, Hn(Te.data));
    }
  }
  async function jt(
    v,
    E,
    N,
    {
      submission: F,
      fetcherSubmission: A,
      preventScrollReset: te,
      replace: Z,
    } = {}
  ) {
    E.response.headers.has("X-Remix-Revalidate") && (we = !0);
    let Y = E.response.headers.get("Location");
    pe(Y, "Expected a Location header on the redirect Response"),
      (Y = Zc(Y, new URL(v.url), m));
    let b = Il(L.location, Y, { _isRedirect: !0 });
    if (u) {
      let Ae = !1;
      if (E.response.headers.has("X-Remix-Reload-Document")) Ae = !0;
      else if (iu(Y)) {
        const Je = cf(Y, !0);
        Ae = Je.origin !== a.location.origin || Ft(Je.pathname, m) == null;
      }
      if (Ae) {
        Z ? a.location.replace(Y) : a.location.assign(Y);
        return;
      }
    }
    ce = null;
    let ne =
        Z === !0 || E.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: ie, formAction: ee, formEncType: fe } = L.navigation;
    !F && !A && ie && ee && fe && (F = rf(L.navigation));
    let Se = F || A;
    if (ih.has(E.response.status) && Se && gt(Se.formMethod))
      await Ut(ne, b, {
        submission: { ...Se, formAction: Y },
        preventScrollReset: te || ye,
        enableViewTransition: N ? xe : void 0,
      });
    else {
      let Ae = ba(b, F);
      await Ut(ne, b, {
        overrideNavigation: Ae,
        fetcherSubmission: A,
        preventScrollReset: te || ye,
        enableViewTransition: N ? xe : void 0,
      });
    }
  }
  async function yn(v, E, N, F) {
    let A,
      te = {};
    try {
      A = await yh(y, v, E, F, N, !1);
    } catch (Z) {
      return (
        E.filter((Y) => Y.shouldLoad).forEach((Y) => {
          te[Y.route.id] = { type: "error", error: Z };
        }),
        te
      );
    }
    if (v.signal.aborted) return te;
    for (let [Z, Y] of Object.entries(A))
      if (Ph(Y)) {
        let b = Y.result;
        te[Z] = { type: "redirect", response: Eh(b, v, Z, E, m) };
      } else te[Z] = await Sh(Y);
    return te;
  }
  async function Yr(v, E, N, F) {
    let A = yn(N, v, F, null),
      te = Promise.all(
        E.map(async (b) => {
          if (b.matches && b.match && b.request && b.controller) {
            let ie = (await yn(b.request, b.matches, F, b.key))[
              b.match.route.id
            ];
            return { [b.key]: ie };
          } else
            return Promise.resolve({
              [b.key]: { type: "error", error: _t(404, { pathname: b.path }) },
            });
        })
      ),
      Z = await A,
      Y = (await te).reduce((b, ne) => Object.assign(b, ne), {});
    return { loaderResults: Z, fetcherResults: Y };
  }
  function mr() {
    (we = !0),
      me.forEach((v, E) => {
        he.has(E) && Ne.add(E), ct(E);
      });
  }
  function At(v, E, N = {}) {
    L.fetchers.set(v, E),
      Ge(
        { fetchers: new Map(L.fetchers) },
        { flushSync: (N && N.flushSync) === !0 }
      );
  }
  function wt(v, E, N, F = {}) {
    let A = Wn(L.matches, E);
    vr(v),
      Ge(
        { errors: { [A.route.id]: N }, fetchers: new Map(L.fetchers) },
        { flushSync: (F && F.flushSync) === !0 }
      );
  }
  function Yn(v) {
    return (
      ge.set(v, (ge.get(v) || 0) + 1),
      _e.has(v) && _e.delete(v),
      L.fetchers.get(v) || ah
    );
  }
  function vr(v) {
    let E = L.fetchers.get(v);
    he.has(v) && !(E && E.state === "loading" && G.has(v)) && ct(v),
      me.delete(v),
      G.delete(v),
      B.delete(v),
      _e.delete(v),
      Ne.delete(v),
      L.fetchers.delete(v);
  }
  function Xn(v) {
    let E = (ge.get(v) || 0) - 1;
    E <= 0 ? (ge.delete(v), _e.add(v)) : ge.set(v, E),
      Ge({ fetchers: new Map(L.fetchers) });
  }
  function ct(v) {
    let E = he.get(v);
    E && (E.abort(), he.delete(v));
  }
  function Kl(v) {
    for (let E of v) {
      let N = Yn(E),
        F = Hn(N.data);
      L.fetchers.set(E, F);
    }
  }
  function Xr() {
    let v = [],
      E = !1;
    for (let N of B) {
      let F = L.fetchers.get(N);
      pe(F, `Expected fetcher: ${N}`),
        F.state === "loading" && (B.delete(N), v.push(N), (E = !0));
    }
    return Kl(v), E;
  }
  function Gr(v) {
    let E = [];
    for (let [N, F] of G)
      if (F < v) {
        let A = L.fetchers.get(N);
        pe(A, `Expected fetcher: ${N}`),
          A.state === "loading" && (ct(N), G.delete(N), E.push(N));
      }
    return Kl(E), E.length > 0;
  }
  function di(v, E) {
    let N = L.blockers.get(v) || zl;
    return Ve.get(v) !== E && Ve.set(v, E), N;
  }
  function yr(v) {
    L.blockers.delete(v), Ve.delete(v);
  }
  function gn(v, E) {
    let N = L.blockers.get(v) || zl;
    pe(
      (N.state === "unblocked" && E.state === "blocked") ||
        (N.state === "blocked" && E.state === "blocked") ||
        (N.state === "blocked" && E.state === "proceeding") ||
        (N.state === "blocked" && E.state === "unblocked") ||
        (N.state === "proceeding" && E.state === "unblocked"),
      `Invalid blocker state transition: ${N.state} -> ${E.state}`
    );
    let F = new Map(L.blockers);
    F.set(v, E), Ge({ blockers: F });
  }
  function gr({ currentLocation: v, nextLocation: E, historyAction: N }) {
    if (Ve.size === 0) return;
    Ve.size > 1 && He(!1, "A router only supports one blocker at a time");
    let F = Array.from(Ve.entries()),
      [A, te] = F[F.length - 1],
      Z = L.blockers.get(A);
    if (
      !(Z && Z.state === "proceeding") &&
      te({ currentLocation: v, nextLocation: E, historyAction: N })
    )
      return A;
  }
  function Gn(v) {
    let E = _t(404, { pathname: v }),
      N = g || p,
      { matches: F, route: A } = bo(N);
    return { notFoundMatches: F, route: A, error: E };
  }
  function Jr(v, E, N) {
    if (((D = v), (W = E), (j = N || null), !I && L.navigation === qa)) {
      I = !0;
      let F = Zr(L.location, L.matches);
      F != null && Ge({ restoreScrollPosition: F });
    }
    return () => {
      (D = null), (W = null), (j = null);
    };
  }
  function nn(v, E) {
    return (
      (j &&
        j(
          v,
          E.map((F) => Up(F, L.loaderData))
        )) ||
      v.key
    );
  }
  function wn(v, E) {
    if (D && W) {
      let N = nn(v, E);
      D[N] = W();
    }
  }
  function Zr(v, E) {
    if (D) {
      let N = nn(v, E),
        F = D[N];
      if (typeof F == "number") return F;
    }
    return null;
  }
  function Jn(v, E, N) {
    if (l.patchRoutesOnNavigation)
      if (v) {
        if (Object.keys(v[0].params).length > 0)
          return { active: !0, matches: ni(E, N, m, !0) };
      } else return { active: !0, matches: ni(E, N, m, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Zn(v, E, N, F) {
    if (!l.patchRoutesOnNavigation) return { type: "success", matches: v };
    let A = v;
    for (;;) {
      let te = g == null,
        Z = g || p,
        Y = d;
      try {
        await l.patchRoutesOnNavigation({
          signal: N,
          path: E,
          matches: A,
          fetcherKey: F,
          patch: (ie, ee) => {
            N.aborted || Yc(ie, ee, Z, Y, f, !1);
          },
        });
      } catch (ie) {
        return { type: "error", error: ie, partialMatches: A };
      } finally {
        te && !N.aborted && (p = [...p]);
      }
      if (N.aborted) return { type: "aborted" };
      let b = Bn(Z, E, m);
      if (b) return { type: "success", matches: b };
      let ne = ni(Z, E, m, !0);
      if (
        !ne ||
        (A.length === ne.length &&
          A.every((ie, ee) => ie.route.id === ne[ee].route.id))
      )
        return { type: "success", matches: null };
      A = ne;
    }
  }
  function Yl(v) {
    (d = {}), (g = Ul(v, f, void 0, d));
  }
  function Xl(v, E, N = !1) {
    let F = g == null;
    Yc(v, E, g || p, d, f, N), F && ((p = [...p]), Ge({}));
  }
  return (
    (ue = {
      get basename() {
        return m;
      },
      get future() {
        return k;
      },
      get state() {
        return L;
      },
      get routes() {
        return p;
      },
      get window() {
        return a;
      },
      initialize: mn,
      subscribe: Bl,
      enableScrollRestoration: Jr,
      navigate: Qr,
      fetch: Kr,
      revalidate: pr,
      createHref: (v) => l.history.createHref(v),
      encodeLocation: (v) => l.history.encodeLocation(v),
      getFetcher: Yn,
      deleteFetcher: Xn,
      dispose: Gt,
      getBlocker: di,
      deleteBlocker: yr,
      patchRoutes: Xl,
      _internalFetchControllers: he,
      _internalSetRoutes: Yl,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(v) {
        Ge(v);
      },
    }),
    ue
  );
}
function fh(l) {
  return (
    l != null &&
    (("formData" in l && l.formData != null) ||
      ("body" in l && l.body !== void 0))
  );
}
function tu(l, a, u, c, f, d) {
  let p, g;
  if (f) {
    p = [];
    for (let y of a)
      if ((p.push(y), y.route.id === f)) {
        g = y;
        break;
      }
  } else (p = a), (g = a[a.length - 1]);
  let m = ci(c || ".", si(p), Ft(l.pathname, u) || l.pathname, d === "path");
  if (
    (c == null && ((m.search = l.search), (m.hash = l.hash)),
    (c == null || c === "" || c === ".") && g)
  ) {
    let y = au(m.search);
    if (g.route.index && !y)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!g.route.index && y) {
      let k = new URLSearchParams(m.search),
        R = k.getAll("index");
      k.delete("index"),
        R.filter((D) => D).forEach((D) => k.append("index", D));
      let T = k.toString();
      m.search = T ? `?${T}` : "";
    }
  }
  return (
    u !== "/" && (m.pathname = Jp({ basename: u, pathname: m.pathname })), Vn(m)
  );
}
function Qc(l, a, u) {
  if (!u || !fh(u)) return { path: a };
  if (u.formMethod && !Lh(u.formMethod))
    return { path: a, error: _t(405, { method: u.formMethod }) };
  let c = () => ({ path: a, error: _t(400, { type: "invalid-body" }) }),
    d = (u.formMethod || "get").toUpperCase(),
    p = kf(a);
  if (u.body !== void 0) {
    if (u.formEncType === "text/plain") {
      if (!gt(d)) return c();
      let R =
        typeof u.body == "string"
          ? u.body
          : u.body instanceof FormData || u.body instanceof URLSearchParams
          ? Array.from(u.body.entries()).reduce(
              (T, [D, j]) => `${T}${D}=${j}
`,
              ""
            )
          : String(u.body);
      return {
        path: a,
        submission: {
          formMethod: d,
          formAction: p,
          formEncType: u.formEncType,
          formData: void 0,
          json: void 0,
          text: R,
        },
      };
    } else if (u.formEncType === "application/json") {
      if (!gt(d)) return c();
      try {
        let R = typeof u.body == "string" ? JSON.parse(u.body) : u.body;
        return {
          path: a,
          submission: {
            formMethod: d,
            formAction: p,
            formEncType: u.formEncType,
            formData: void 0,
            json: R,
            text: void 0,
          },
        };
      } catch {
        return c();
      }
    }
  }
  pe(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let g, m;
  if (u.formData) (g = lu(u.formData)), (m = u.formData);
  else if (u.body instanceof FormData) (g = lu(u.body)), (m = u.body);
  else if (u.body instanceof URLSearchParams) (g = u.body), (m = qc(g));
  else if (u.body == null) (g = new URLSearchParams()), (m = new FormData());
  else
    try {
      (g = new URLSearchParams(u.body)), (m = qc(g));
    } catch {
      return c();
    }
  let y = {
    formMethod: d,
    formAction: p,
    formEncType: (u && u.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (gt(y.formMethod)) return { path: a, submission: y };
  let k = hn(a);
  return (
    l && k.search && au(k.search) && g.append("index", ""),
    (k.search = `?${g}`),
    { path: Vn(k), submission: y }
  );
}
function Kc(l, a, u, c, f, d, p, g, m, y, k, R, T, D, j, W, I, H, oe, V) {
  var Xe;
  let de = V ? (Ct(V[1]) ? V[1].error : V[1].data) : void 0,
    ue = f.createURL(d.location),
    L = f.createURL(m),
    ae;
  if (k && d.errors) {
    let we = Object.keys(d.errors)[0];
    ae = p.findIndex((Ne) => Ne.route.id === we);
  } else if (V && Ct(V[1])) {
    let we = V[0];
    ae = p.findIndex((Ne) => Ne.route.id === we) - 1;
  }
  let ye = V ? V[1].statusCode : void 0,
    ce = ye && ye >= 400,
    xe = {
      currentUrl: ue,
      currentParams: ((Xe = d.matches[0]) == null ? void 0 : Xe.params) || {},
      nextUrl: L,
      nextParams: p[0].params,
      ...g,
      actionResult: de,
      actionStatus: ye,
    },
    We = p.map((we, Ne) => {
      let { route: he } = we,
        Ue = null;
      if (
        (ae != null && Ne > ae
          ? (Ue = !1)
          : he.lazy
          ? (Ue = !0)
          : he.loader == null
          ? (Ue = !1)
          : k
          ? (Ue = nu(he, d.loaderData, d.errors))
          : dh(d.loaderData, d.matches[Ne], we) && (Ue = !0),
        Ue !== null)
      )
        return ru(u, c, l, we, y, a, Ue);
      let $ = ce
          ? !1
          : R ||
            ue.pathname + ue.search === L.pathname + L.search ||
            ue.search !== L.search ||
            ph(d.matches[Ne], we),
        G = { ...xe, defaultShouldRevalidate: $ },
        B = ui(we, G);
      return ru(u, c, l, we, y, a, B, G);
    }),
    at = [];
  return (
    j.forEach((we, Ne) => {
      if (k || !p.some((_e) => _e.route.id === we.routeId) || D.has(Ne)) return;
      let he = d.fetchers.get(Ne),
        Ue = he && he.state !== "idle" && he.data === void 0,
        $ = Bn(I, we.path, H);
      if (!$) {
        if (oe && Ue) return;
        at.push({
          key: Ne,
          routeId: we.routeId,
          path: we.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (W.has(Ne)) return;
      let G = ri($, we.path),
        B = new AbortController(),
        me = Br(f, we.path, B.signal),
        ge = null;
      if (T.has(Ne)) T.delete(Ne), (ge = Wr(u, c, me, $, G, y, a));
      else if (Ue) R && (ge = Wr(u, c, me, $, G, y, a));
      else {
        let _e = { ...xe, defaultShouldRevalidate: ce ? !1 : R };
        ui(G, _e) && (ge = Wr(u, c, me, $, G, y, a, _e));
      }
      ge &&
        at.push({
          key: Ne,
          routeId: we.routeId,
          path: we.path,
          matches: ge,
          match: G,
          request: me,
          controller: B,
        });
    }),
    { dsMatches: We, revalidatingFetchers: at }
  );
}
function nu(l, a, u) {
  if (l.lazy) return !0;
  if (!l.loader) return !1;
  let c = a != null && l.id in a,
    f = u != null && u[l.id] !== void 0;
  return !c && f
    ? !1
    : typeof l.loader == "function" && l.loader.hydrate === !0
    ? !0
    : !c && !f;
}
function dh(l, a, u) {
  let c = !a || u.route.id !== a.route.id,
    f = !l.hasOwnProperty(u.route.id);
  return c || f;
}
function ph(l, a) {
  let u = l.route.path;
  return (
    l.pathname !== a.pathname ||
    (u != null && u.endsWith("*") && l.params["*"] !== a.params["*"])
  );
}
function ui(l, a) {
  if (l.route.shouldRevalidate) {
    let u = l.route.shouldRevalidate(a);
    if (typeof u == "boolean") return u;
  }
  return a.defaultShouldRevalidate;
}
function Yc(l, a, u, c, f, d) {
  let p;
  if (l) {
    let y = c[l];
    pe(y, `No route found to patch children into: routeId = ${l}`),
      y.children || (y.children = []),
      (p = y.children);
  } else p = u;
  let g = [],
    m = [];
  if (
    (a.forEach((y) => {
      let k = p.find((R) => yf(y, R));
      k ? m.push({ existingRoute: k, newRoute: y }) : g.push(y);
    }),
    g.length > 0)
  ) {
    let y = Ul(
      g,
      f,
      [l || "_", "patch", String((p == null ? void 0 : p.length) || "0")],
      c
    );
    p.push(...y);
  }
  if (d && m.length > 0)
    for (let y = 0; y < m.length; y++) {
      let { existingRoute: k, newRoute: R } = m[y],
        T = k,
        [D] = Ul([R], f, [], {}, !0);
      Object.assign(T, {
        element: D.element ? D.element : T.element,
        errorElement: D.errorElement ? D.errorElement : T.errorElement,
        hydrateFallbackElement: D.hydrateFallbackElement
          ? D.hydrateFallbackElement
          : T.hydrateFallbackElement,
      });
    }
}
function yf(l, a) {
  return "id" in l && "id" in a && l.id === a.id
    ? !0
    : l.index === a.index &&
      l.path === a.path &&
      l.caseSensitive === a.caseSensitive
    ? (!l.children || l.children.length === 0) &&
      (!a.children || a.children.length === 0)
      ? !0
      : l.children.every((u, c) => {
          var f;
          return (f = a.children) == null ? void 0 : f.some((d) => yf(u, d));
        })
    : !1;
}
var Xc = new WeakMap(),
  gf = ({ key: l, route: a, manifest: u, mapRouteProperties: c }) => {
    let f = u[a.id];
    if (
      (pe(f, "No route found in manifest"),
      !f.lazy || typeof f.lazy != "object")
    )
      return;
    let d = f.lazy[l];
    if (!d) return;
    let p = Xc.get(f);
    p || ((p = {}), Xc.set(f, p));
    let g = p[l];
    if (g) return g;
    let m = (async () => {
      let y = _p(l),
        R = f[l] !== void 0 && l !== "hasErrorBoundary";
      if (y)
        He(
          !y,
          "Route property " +
            l +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (p[l] = Promise.resolve());
      else if (R)
        He(
          !1,
          `Route "${f.id}" has a static property "${l}" defined. The lazy property will be ignored.`
        );
      else {
        let T = await d();
        T != null && (Object.assign(f, { [l]: T }), Object.assign(f, c(f)));
      }
      typeof f.lazy == "object" &&
        ((f.lazy[l] = void 0),
        Object.values(f.lazy).every((T) => T === void 0) && (f.lazy = void 0));
    })();
    return (p[l] = m), m;
  },
  Gc = new WeakMap();
function hh(l, a, u, c, f) {
  let d = u[l.id];
  if ((pe(d, "No route found in manifest"), !l.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof l.lazy == "function") {
    let k = Gc.get(d);
    if (k) return { lazyRoutePromise: k, lazyHandlerPromise: k };
    let R = (async () => {
      pe(typeof l.lazy == "function", "No lazy route function found");
      let T = await l.lazy(),
        D = {};
      for (let j in T) {
        let W = T[j];
        if (W === void 0) continue;
        let I = Op(j),
          oe = d[j] !== void 0 && j !== "hasErrorBoundary";
        I
          ? He(
              !I,
              "Route property " +
                j +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : oe
          ? He(
              !oe,
              `Route "${d.id}" has a static property "${j}" defined but its lazy function is also returning a value for this property. The lazy route property "${j}" will be ignored.`
            )
          : (D[j] = W);
      }
      Object.assign(d, D), Object.assign(d, { ...c(d), lazy: void 0 });
    })();
    return (
      Gc.set(d, R),
      R.catch(() => {}),
      { lazyRoutePromise: R, lazyHandlerPromise: R }
    );
  }
  let p = Object.keys(l.lazy),
    g = [],
    m;
  for (let k of p) {
    if (f && f.includes(k)) continue;
    let R = gf({ key: k, route: l, manifest: u, mapRouteProperties: c });
    R && (g.push(R), k === a && (m = R));
  }
  let y = g.length > 0 ? Promise.all(g).then(() => {}) : void 0;
  return (
    y == null || y.catch(() => {}),
    m == null || m.catch(() => {}),
    { lazyRoutePromise: y, lazyHandlerPromise: m }
  );
}
async function Jc(l) {
  let a = l.matches.filter((f) => f.shouldLoad),
    u = {};
  return (
    (await Promise.all(a.map((f) => f.resolve()))).forEach((f, d) => {
      u[a[d].route.id] = f;
    }),
    u
  );
}
async function mh(l) {
  return l.matches.some((a) => a.route.middleware) ? wf(l, () => Jc(l)) : Jc(l);
}
function wf(l, a) {
  return vh(l, a, (c) => c, Ch, u);
  function u(c, f, d) {
    if (d)
      return Promise.resolve(
        Object.assign(d.value, { [f]: { type: "error", result: c } })
      );
    {
      let { matches: p } = l,
        g = Math.min(
          p.findIndex((y) => y.route.id === f) || 0,
          p.findIndex((y) => y.unstable_shouldCallHandler()) || 0
        ),
        m = Wn(p, p[g].route.id).route.id;
      return Promise.resolve({ [m]: { type: "error", result: c } });
    }
  }
}
async function vh(l, a, u, c, f) {
  let { matches: d, request: p, params: g, context: m } = l,
    y = d.flatMap((R) =>
      R.route.middleware ? R.route.middleware.map((T) => [R.route.id, T]) : []
    );
  return await Sf({ request: p, params: g, context: m }, y, a, u, c, f);
}
async function Sf(l, a, u, c, f, d, p = 0) {
  let { request: g } = l;
  if (g.signal.aborted)
    throw g.signal.reason ?? new Error(`Request aborted: ${g.method} ${g.url}`);
  let m = a[p];
  if (!m) return await u();
  let [y, k] = m,
    R,
    T = async () => {
      if (R) throw new Error("You may only call `next()` once per middleware");
      try {
        return (R = { value: await Sf(l, a, u, c, f, d, p + 1) }), R.value;
      } catch (D) {
        return (R = { value: await d(D, y, R) }), R.value;
      }
    };
  try {
    let D = await k(l, T),
      j = D != null ? c(D) : void 0;
    return f(j) ? j : R ? j ?? R.value : ((R = { value: await T() }), R.value);
  } catch (D) {
    return await d(D, y, R);
  }
}
function Ef(l, a, u, c, f) {
  let d = gf({
      key: "middleware",
      route: c.route,
      manifest: a,
      mapRouteProperties: l,
    }),
    p = hh(c.route, gt(u.method) ? "action" : "loader", a, l, f);
  return {
    middleware: d,
    route: p.lazyRoutePromise,
    handler: p.lazyHandlerPromise,
  };
}
function ru(l, a, u, c, f, d, p, g = null) {
  let m = !1,
    y = Ef(l, a, u, c, f);
  return {
    ...c,
    _lazyPromises: y,
    shouldLoad: p,
    unstable_shouldRevalidateArgs: g,
    unstable_shouldCallHandler(k) {
      return (
        (m = !0),
        g
          ? typeof k == "boolean"
            ? ui(c, { ...g, defaultShouldRevalidate: k })
            : ui(c, g)
          : p
      );
    },
    resolve(k) {
      return m || p || (k && !gt(u.method) && (c.route.lazy || c.route.loader))
        ? gh({
            request: u,
            match: c,
            lazyHandlerPromise: y == null ? void 0 : y.handler,
            lazyRoutePromise: y == null ? void 0 : y.route,
            handlerOverride: k,
            scopedContext: d,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Wr(l, a, u, c, f, d, p, g = null) {
  return c.map((m) =>
    m.route.id !== f.route.id
      ? {
          ...m,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: g,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Ef(l, a, u, m, d),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : ru(l, a, u, m, d, p, !0, g)
  );
}
async function yh(l, a, u, c, f, d) {
  u.some((y) => {
    var k;
    return (k = y._lazyPromises) == null ? void 0 : k.middleware;
  }) &&
    (await Promise.all(
      u.map((y) => {
        var k;
        return (k = y._lazyPromises) == null ? void 0 : k.middleware;
      })
    ));
  let p = { request: a, params: u[0].params, context: f, matches: u },
    m = await l({
      ...p,
      fetcherKey: c,
      runClientMiddleware: (y) => {
        let k = p;
        return wf(k, () =>
          y({
            ...k,
            fetcherKey: c,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
              );
            },
          })
        );
      },
    });
  try {
    await Promise.all(
      u.flatMap((y) => {
        var k, R;
        return [
          (k = y._lazyPromises) == null ? void 0 : k.handler,
          (R = y._lazyPromises) == null ? void 0 : R.route,
        ];
      })
    );
  } catch {}
  return m;
}
async function gh({
  request: l,
  match: a,
  lazyHandlerPromise: u,
  lazyRoutePromise: c,
  handlerOverride: f,
  scopedContext: d,
}) {
  let p,
    g,
    m = gt(l.method),
    y = m ? "action" : "loader",
    k = (R) => {
      let T,
        D = new Promise((I, H) => (T = H));
      (g = () => T()), l.signal.addEventListener("abort", g);
      let j = (I) =>
          typeof R != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${y}" [routeId: ${a.route.id}]`
                )
              )
            : R(
                { request: l, params: a.params, context: d },
                ...(I !== void 0 ? [I] : [])
              ),
        W = (async () => {
          try {
            return { type: "data", result: await (f ? f((H) => j(H)) : j()) };
          } catch (I) {
            return { type: "error", result: I };
          }
        })();
      return Promise.race([W, D]);
    };
  try {
    let R = m ? a.route.action : a.route.loader;
    if (u || c)
      if (R) {
        let T,
          [D] = await Promise.all([
            k(R).catch((j) => {
              T = j;
            }),
            u,
            c,
          ]);
        if (T !== void 0) throw T;
        p = D;
      } else {
        await u;
        let T = m ? a.route.action : a.route.loader;
        if (T) [p] = await Promise.all([k(T), c]);
        else if (y === "action") {
          let D = new URL(l.url),
            j = D.pathname + D.search;
          throw _t(405, { method: l.method, pathname: j, routeId: a.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (R) p = await k(R);
    else {
      let T = new URL(l.url),
        D = T.pathname + T.search;
      throw _t(404, { pathname: D });
    }
  } catch (R) {
    return { type: "error", result: R };
  } finally {
    g && l.signal.removeEventListener("abort", g);
  }
  return p;
}
async function wh(l) {
  let a = l.headers.get("Content-Type");
  return a && /\bapplication\/json\b/.test(a)
    ? l.body == null
      ? null
      : l.json()
    : l.text();
}
async function Sh(l) {
  var c, f, d, p, g, m;
  let { result: a, type: u } = l;
  if (xf(a)) {
    let y;
    try {
      y = await wh(a);
    } catch (k) {
      return { type: "error", error: k };
    }
    return u === "error"
      ? {
          type: "error",
          error: new ai(a.status, a.statusText, y),
          statusCode: a.status,
          headers: a.headers,
        }
      : { type: "data", data: y, statusCode: a.status, headers: a.headers };
  }
  return u === "error"
    ? nf(a)
      ? a.data instanceof Error
        ? {
            type: "error",
            error: a.data,
            statusCode: (c = a.init) == null ? void 0 : c.status,
            headers:
              (f = a.init) != null && f.headers
                ? new Headers(a.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new ai(
              ((d = a.init) == null ? void 0 : d.status) || 500,
              void 0,
              a.data
            ),
            statusCode: jl(a) ? a.status : void 0,
            headers:
              (p = a.init) != null && p.headers
                ? new Headers(a.init.headers)
                : void 0,
          }
      : { type: "error", error: a, statusCode: jl(a) ? a.status : void 0 }
    : nf(a)
    ? {
        type: "data",
        data: a.data,
        statusCode: (g = a.init) == null ? void 0 : g.status,
        headers:
          (m = a.init) != null && m.headers
            ? new Headers(a.init.headers)
            : void 0,
      }
    : { type: "data", data: a };
}
function Eh(l, a, u, c, f) {
  let d = l.headers.get("Location");
  if (
    (pe(
      d,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !iu(d))
  ) {
    let p = c.slice(0, c.findIndex((g) => g.route.id === u) + 1);
    (d = tu(new URL(a.url), p, f, d)), l.headers.set("Location", d);
  }
  return l;
}
function Zc(l, a, u) {
  if (iu(l)) {
    let c = l,
      f = c.startsWith("//") ? new URL(a.protocol + c) : new URL(c),
      d = Ft(f.pathname, u) != null;
    if (f.origin === a.origin && d) return f.pathname + f.search + f.hash;
  }
  return l;
}
function Br(l, a, u, c) {
  let f = l.createURL(kf(a)).toString(),
    d = { signal: u };
  if (c && gt(c.formMethod)) {
    let { formMethod: p, formEncType: g } = c;
    (d.method = p.toUpperCase()),
      g === "application/json"
        ? ((d.headers = new Headers({ "Content-Type": g })),
          (d.body = JSON.stringify(c.json)))
        : g === "text/plain"
        ? (d.body = c.text)
        : g === "application/x-www-form-urlencoded" && c.formData
        ? (d.body = lu(c.formData))
        : (d.body = c.formData);
  }
  return new Request(f, d);
}
function lu(l) {
  let a = new URLSearchParams();
  for (let [u, c] of l.entries())
    a.append(u, typeof c == "string" ? c : c.name);
  return a;
}
function qc(l) {
  let a = new FormData();
  for (let [u, c] of l.entries()) a.append(u, c);
  return a;
}
function kh(l, a, u, c = !1, f = !1) {
  let d = {},
    p = null,
    g,
    m = !1,
    y = {},
    k = u && Ct(u[1]) ? u[1].error : void 0;
  return (
    l.forEach((R) => {
      if (!(R.route.id in a)) return;
      let T = R.route.id,
        D = a[T];
      if (
        (pe(!fr(D), "Cannot handle redirect results in processLoaderData"),
        Ct(D))
      ) {
        let j = D.error;
        if ((k !== void 0 && ((j = k), (k = void 0)), (p = p || {}), f))
          p[T] = j;
        else {
          let W = Wn(l, T);
          p[W.route.id] == null && (p[W.route.id] = j);
        }
        c || (d[T] = vf),
          m || ((m = !0), (g = jl(D.error) ? D.error.status : 500)),
          D.headers && (y[T] = D.headers);
      } else
        (d[T] = D.data),
          D.statusCode && D.statusCode !== 200 && !m && (g = D.statusCode),
          D.headers && (y[T] = D.headers);
    }),
    k !== void 0 && u && ((p = { [u[0]]: k }), u[2] && (d[u[2]] = void 0)),
    { loaderData: d, errors: p, statusCode: g || 200, loaderHeaders: y }
  );
}
function bc(l, a, u, c, f, d) {
  let { loaderData: p, errors: g } = kh(a, u, c);
  return (
    f
      .filter((m) => !m.matches || m.matches.some((y) => y.shouldLoad))
      .forEach((m) => {
        let { key: y, match: k, controller: R } = m;
        if (R && R.signal.aborted) return;
        let T = d[y];
        if ((pe(T, "Did not find corresponding fetcher result"), Ct(T))) {
          let D = Wn(l.matches, k == null ? void 0 : k.route.id);
          (g && g[D.route.id]) || (g = { ...g, [D.route.id]: T.error }),
            l.fetchers.delete(y);
        } else if (fr(T)) pe(!1, "Unhandled fetcher revalidation redirect");
        else {
          let D = Hn(T.data);
          l.fetchers.set(y, D);
        }
      }),
    { loaderData: p, errors: g }
  );
}
function ef(l, a, u, c) {
  let f = Object.entries(a)
    .filter(([, d]) => d !== vf)
    .reduce((d, [p, g]) => ((d[p] = g), d), {});
  for (let d of u) {
    let p = d.route.id;
    if (
      (!a.hasOwnProperty(p) &&
        l.hasOwnProperty(p) &&
        d.route.loader &&
        (f[p] = l[p]),
      c && c.hasOwnProperty(p))
    )
      break;
  }
  return f;
}
function tf(l) {
  return l
    ? Ct(l[1])
      ? { actionData: {} }
      : { actionData: { [l[0]]: l[1].data } }
    : {};
}
function Wn(l, a) {
  return (
    (a ? l.slice(0, l.findIndex((c) => c.route.id === a) + 1) : [...l])
      .reverse()
      .find((c) => c.route.hasErrorBoundary === !0) || l[0]
  );
}
function bo(l) {
  let a =
    l.length === 1
      ? l[0]
      : l.find((u) => u.index || !u.path || u.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: a }],
    route: a,
  };
}
function _t(
  l,
  { pathname: a, routeId: u, method: c, type: f, message: d } = {}
) {
  let p = "Unknown Server Error",
    g = "Unknown @remix-run/router error";
  return (
    l === 400
      ? ((p = "Bad Request"),
        c && a && u
          ? (g = `You made a ${c} request to "${a}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`)
          : f === "invalid-body" && (g = "Unable to encode submission body"))
      : l === 403
      ? ((p = "Forbidden"), (g = `Route "${u}" does not match URL "${a}"`))
      : l === 404
      ? ((p = "Not Found"), (g = `No route matches URL "${a}"`))
      : l === 405 &&
        ((p = "Method Not Allowed"),
        c && a && u
          ? (g = `You made a ${c.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`)
          : c && (g = `Invalid request method "${c.toUpperCase()}"`)),
    new ai(l || 500, p, new Error(g), !0)
  );
}
function ei(l) {
  let a = Object.entries(l);
  for (let u = a.length - 1; u >= 0; u--) {
    let [c, f] = a[u];
    if (fr(f)) return { key: c, result: f };
  }
}
function kf(l) {
  let a = typeof l == "string" ? hn(l) : l;
  return Vn({ ...a, hash: "" });
}
function xh(l, a) {
  return l.pathname !== a.pathname || l.search !== a.search
    ? !1
    : l.hash === ""
    ? a.hash !== ""
    : l.hash === a.hash
    ? !0
    : a.hash !== "";
}
function Ch(l) {
  return (
    l != null &&
    typeof l == "object" &&
    Object.entries(l).every(([a, u]) => typeof a == "string" && Rh(u))
  );
}
function Rh(l) {
  return (
    l != null &&
    typeof l == "object" &&
    "type" in l &&
    "result" in l &&
    (l.type === "data" || l.type === "error")
  );
}
function Ph(l) {
  return xf(l.result) && oh.has(l.result.status);
}
function Ct(l) {
  return l.type === "error";
}
function fr(l) {
  return (l && l.type) === "redirect";
}
function nf(l) {
  return (
    typeof l == "object" &&
    l != null &&
    "type" in l &&
    "data" in l &&
    "init" in l &&
    l.type === "DataWithResponseInit"
  );
}
function xf(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.headers == "object" &&
    typeof l.body < "u"
  );
}
function Lh(l) {
  return lh.has(l.toUpperCase());
}
function gt(l) {
  return nh.has(l.toUpperCase());
}
function au(l) {
  return new URLSearchParams(l).getAll("index").some((a) => a === "");
}
function ri(l, a) {
  let u = typeof a == "string" ? hn(a).search : a.search;
  if (l[l.length - 1].route.index && au(u || "")) return l[l.length - 1];
  let c = pf(l);
  return c[c.length - 1];
}
function rf(l) {
  let {
    formMethod: a,
    formAction: u,
    formEncType: c,
    text: f,
    formData: d,
    json: p,
  } = l;
  if (!(!a || !u || !c)) {
    if (f != null)
      return {
        formMethod: a,
        formAction: u,
        formEncType: c,
        formData: void 0,
        json: void 0,
        text: f,
      };
    if (d != null)
      return {
        formMethod: a,
        formAction: u,
        formEncType: c,
        formData: d,
        json: void 0,
        text: void 0,
      };
    if (p !== void 0)
      return {
        formMethod: a,
        formAction: u,
        formEncType: c,
        formData: void 0,
        json: p,
        text: void 0,
      };
  }
}
function ba(l, a) {
  return a
    ? {
        state: "loading",
        location: l,
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
      }
    : {
        state: "loading",
        location: l,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Nh(l, a) {
  return {
    state: "submitting",
    location: l,
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text,
  };
}
function _l(l, a) {
  return l
    ? {
        state: "loading",
        formMethod: l.formMethod,
        formAction: l.formAction,
        formEncType: l.formEncType,
        formData: l.formData,
        json: l.json,
        text: l.text,
        data: a,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: a,
      };
}
function Mh(l, a) {
  return {
    state: "submitting",
    formMethod: l.formMethod,
    formAction: l.formAction,
    formEncType: l.formEncType,
    formData: l.formData,
    json: l.json,
    text: l.text,
    data: a ? a.data : void 0,
  };
}
function Hn(l) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: l,
  };
}
function Th(l, a) {
  try {
    let u = l.sessionStorage.getItem(mf);
    if (u) {
      let c = JSON.parse(u);
      for (let [f, d] of Object.entries(c || {}))
        d && Array.isArray(d) && a.set(f, new Set(d || []));
    }
  } catch {}
}
function Dh(l, a) {
  if (a.size > 0) {
    let u = {};
    for (let [c, f] of a) u[c] = [...f];
    try {
      l.sessionStorage.setItem(mf, JSON.stringify(u));
    } catch (c) {
      He(
        !1,
        `Failed to save applied view transitions in sessionStorage (${c}).`
      );
    }
  }
}
function zh() {
  let l,
    a,
    u = new Promise((c, f) => {
      (l = async (d) => {
        c(d);
        try {
          await u;
        } catch {}
      }),
        (a = async (d) => {
          f(d);
          try {
            await u;
          } catch {}
        });
    });
  return { promise: u, resolve: l, reject: a };
}
var dr = M.createContext(null);
dr.displayName = "DataRouter";
var Al = M.createContext(null);
Al.displayName = "DataRouterState";
M.createContext(!1);
var uu = M.createContext({ isTransitioning: !1 });
uu.displayName = "ViewTransition";
var Cf = M.createContext(new Map());
Cf.displayName = "Fetchers";
var _h = M.createContext(null);
_h.displayName = "Await";
var Yt = M.createContext(null);
Yt.displayName = "Navigation";
var $l = M.createContext(null);
$l.displayName = "Location";
var Ot = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ot.displayName = "Route";
var su = M.createContext(null);
su.displayName = "RouteError";
function Fh(l, { relative: a } = {}) {
  pe(
    Vr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: u, navigator: c } = M.useContext(Yt),
    { hash: f, pathname: d, search: p } = Hl(l, { relative: a }),
    g = d;
  return (
    u !== "/" && (g = d === "/" ? u : tn([u, d])),
    c.createHref({ pathname: g, search: p, hash: f })
  );
}
function Vr() {
  return M.useContext($l) != null;
}
function Qn() {
  return (
    pe(
      Vr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    M.useContext($l).location
  );
}
var Rf =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Pf(l) {
  M.useContext(Yt).static || M.useLayoutEffect(l);
}
function Lf() {
  let { isDataRoute: l } = M.useContext(Ot);
  return l ? Xh() : Oh();
}
function Oh() {
  pe(
    Vr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = M.useContext(dr),
    { basename: a, navigator: u } = M.useContext(Yt),
    { matches: c } = M.useContext(Ot),
    { pathname: f } = Qn(),
    d = JSON.stringify(si(c)),
    p = M.useRef(!1);
  return (
    Pf(() => {
      p.current = !0;
    }),
    M.useCallback(
      (m, y = {}) => {
        if ((He(p.current, Rf), !p.current)) return;
        if (typeof m == "number") {
          u.go(m);
          return;
        }
        let k = ci(m, JSON.parse(d), f, y.relative === "path");
        l == null &&
          a !== "/" &&
          (k.pathname = k.pathname === "/" ? a : tn([a, k.pathname])),
          (y.replace ? u.replace : u.push)(k, y.state, y);
      },
      [a, u, d, f, l]
    )
  );
}
var Nf = M.createContext(null);
function jm() {
  return M.useContext(Nf);
}
function Ih(l) {
  let a = M.useContext(Ot).outlet;
  return a && M.createElement(Nf.Provider, { value: l }, a);
}
function Am() {
  let { matches: l } = M.useContext(Ot),
    a = l[l.length - 1];
  return a ? a.params : {};
}
function Hl(l, { relative: a } = {}) {
  let { matches: u } = M.useContext(Ot),
    { pathname: c } = Qn(),
    f = JSON.stringify(si(u));
  return M.useMemo(() => ci(l, JSON.parse(f), c, a === "path"), [l, f, c, a]);
}
function Uh(l, a) {
  return Mf(l, a);
}
function Mf(l, a, u, c, f) {
  var oe;
  pe(
    Vr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = M.useContext(Yt),
    { matches: p } = M.useContext(Ot),
    g = p[p.length - 1],
    m = g ? g.params : {},
    y = g ? g.pathname : "/",
    k = g ? g.pathnameBase : "/",
    R = g && g.route;
  {
    let V = (R && R.path) || "";
    Tf(
      y,
      !R || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${
        V === "/" ? "*" : `${V}/*`
      }">.`
    );
  }
  let T = Qn(),
    D;
  if (a) {
    let V = typeof a == "string" ? hn(a) : a;
    pe(
      k === "/" || ((oe = V.pathname) == null ? void 0 : oe.startsWith(k)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (D = V);
  } else D = T;
  let j = D.pathname || "/",
    W = j;
  if (k !== "/") {
    let V = k.replace(/^\//, "").split("/");
    W = "/" + j.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let I = Bn(l, { pathname: W });
  He(
    R || I != null,
    `No routes matched location "${D.pathname}${D.search}${D.hash}" `
  ),
    He(
      I == null ||
        I[I.length - 1].route.element !== void 0 ||
        I[I.length - 1].route.Component !== void 0 ||
        I[I.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let H = Bh(
    I &&
      I.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, m, V.params),
          pathname: tn([
            k,
            d.encodeLocation
              ? d.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? k
              : tn([
                  k,
                  d.encodeLocation
                    ? d.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        })
      ),
    p,
    u,
    c,
    f
  );
  return a && H
    ? M.createElement(
        $l.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...D,
            },
            navigationType: "POP",
          },
        },
        H
      )
    : H;
}
function jh() {
  let l = Yh(),
    a = jl(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
      ? l.message
      : JSON.stringify(l),
    u = l instanceof Error ? l.stack : null,
    c = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: c },
    d = { padding: "2px 4px", backgroundColor: c },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (p = M.createElement(
      M.Fragment,
      null,
      M.createElement("p", null, "💿 Hey developer 👋"),
      M.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        M.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        M.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement("h2", null, "Unexpected Application Error!"),
      M.createElement("h3", { style: { fontStyle: "italic" } }, a),
      u ? M.createElement("pre", { style: f }, u) : null,
      p
    )
  );
}
var Ah = M.createElement(jh, null),
  $h = class extends M.Component {
    constructor(l) {
      super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error,
        });
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, a) {
      return a.location !== l.location ||
        (a.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : a.error,
            location: a.location,
            revalidation: l.revalidation || a.revalidation,
          };
    }
    componentDidCatch(l, a) {
      this.props.unstable_onError
        ? this.props.unstable_onError(l, a)
        : console.error(
            "React Router caught the following error during render",
            l
          );
    }
    render() {
      return this.state.error !== void 0
        ? M.createElement(
            Ot.Provider,
            { value: this.props.routeContext },
            M.createElement(su.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Hh({ routeContext: l, match: a, children: u }) {
  let c = M.useContext(dr);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = a.route.id),
    M.createElement(Ot.Provider, { value: l }, u)
  );
}
function Bh(l, a = [], u = null, c = null, f = null) {
  if (l == null) {
    if (!u) return null;
    if (u.errors) l = u.matches;
    else if (a.length === 0 && !u.initialized && u.matches.length > 0)
      l = u.matches;
    else return null;
  }
  let d = l,
    p = u == null ? void 0 : u.errors;
  if (p != null) {
    let y = d.findIndex(
      (k) => k.route.id && (p == null ? void 0 : p[k.route.id]) !== void 0
    );
    pe(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, y + 1)));
  }
  let g = !1,
    m = -1;
  if (u)
    for (let y = 0; y < d.length; y++) {
      let k = d[y];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (m = y),
        k.route.id)
      ) {
        let { loaderData: R, errors: T } = u,
          D =
            k.route.loader &&
            !R.hasOwnProperty(k.route.id) &&
            (!T || T[k.route.id] === void 0);
        if (k.route.lazy || D) {
          (g = !0), m >= 0 ? (d = d.slice(0, m + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((y, k, R) => {
    let T,
      D = !1,
      j = null,
      W = null;
    u &&
      ((T = p && k.route.id ? p[k.route.id] : void 0),
      (j = k.route.errorElement || Ah),
      g &&
        (m < 0 && R === 0
          ? (Tf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (D = !0),
            (W = null))
          : m === R &&
            ((D = !0), (W = k.route.hydrateFallbackElement || null))));
    let I = a.concat(d.slice(0, R + 1)),
      H = () => {
        let oe;
        return (
          T
            ? (oe = j)
            : D
            ? (oe = W)
            : k.route.Component
            ? (oe = M.createElement(k.route.Component, null))
            : k.route.element
            ? (oe = k.route.element)
            : (oe = y),
          M.createElement(Hh, {
            match: k,
            routeContext: { outlet: y, matches: I, isDataRoute: u != null },
            children: oe,
          })
        );
      };
    return u && (k.route.ErrorBoundary || k.route.errorElement || R === 0)
      ? M.createElement($h, {
          location: u.location,
          revalidation: u.revalidation,
          component: j,
          error: T,
          children: H(),
          routeContext: { outlet: null, matches: I, isDataRoute: !0 },
          unstable_onError: c,
        })
      : H();
  }, null);
}
function cu(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wh(l) {
  let a = M.useContext(dr);
  return pe(a, cu(l)), a;
}
function Vh(l) {
  let a = M.useContext(Al);
  return pe(a, cu(l)), a;
}
function Qh(l) {
  let a = M.useContext(Ot);
  return pe(a, cu(l)), a;
}
function fu(l) {
  let a = Qh(l),
    u = a.matches[a.matches.length - 1];
  return (
    pe(
      u.route.id,
      `${l} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function Kh() {
  return fu("useRouteId");
}
function Yh() {
  var c;
  let l = M.useContext(su),
    a = Vh("useRouteError"),
    u = fu("useRouteError");
  return l !== void 0 ? l : (c = a.errors) == null ? void 0 : c[u];
}
function Xh() {
  let { router: l } = Wh("useNavigate"),
    a = fu("useNavigate"),
    u = M.useRef(!1);
  return (
    Pf(() => {
      u.current = !0;
    }),
    M.useCallback(
      async (f, d = {}) => {
        He(u.current, Rf),
          u.current &&
            (typeof f == "number"
              ? l.navigate(f)
              : await l.navigate(f, { fromRouteId: a, ...d }));
      },
      [l, a]
    )
  );
}
var lf = {};
function Tf(l, a, u) {
  !a && !lf[l] && ((lf[l] = !0), He(!1, u));
}
var of = {};
function af(l, a) {
  !l && !of[a] && ((of[a] = !0), console.warn(a));
}
function Gh(l) {
  let a = {
    hasErrorBoundary:
      l.hasErrorBoundary || l.ErrorBoundary != null || l.errorElement != null,
  };
  return (
    l.Component &&
      (l.element &&
        He(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(a, {
        element: M.createElement(l.Component),
        Component: void 0,
      })),
    l.HydrateFallback &&
      (l.hydrateFallbackElement &&
        He(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(a, {
        hydrateFallbackElement: M.createElement(l.HydrateFallback),
        HydrateFallback: void 0,
      })),
    l.ErrorBoundary &&
      (l.errorElement &&
        He(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(a, {
        errorElement: M.createElement(l.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    a
  );
}
var Jh = ["HydrateFallback", "hydrateFallbackElement"],
  Zh = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((l, a) => {
          (this.resolve = (u) => {
            this.status === "pending" && ((this.status = "resolved"), l(u));
          }),
            (this.reject = (u) => {
              this.status === "pending" && ((this.status = "rejected"), a(u));
            });
        }));
    }
  };
function qh({ router: l, flushSync: a, unstable_onError: u }) {
  let [c, f] = M.useState(l.state),
    [d, p] = M.useState(),
    [g, m] = M.useState({ isTransitioning: !1 }),
    [y, k] = M.useState(),
    [R, T] = M.useState(),
    [D, j] = M.useState(),
    W = M.useRef(new Map()),
    I = M.useCallback(
      (ue) => {
        f(
          (L) => (
            ue.errors &&
              u &&
              Object.entries(ue.errors).forEach(([ae, ye]) => {
                var ce;
                ((ce = L.errors) == null ? void 0 : ce[ae]) !== ye && u(ye);
              }),
            ue
          )
        );
      },
      [u]
    ),
    H = M.useCallback(
      (ue, { deletedFetchers: L, flushSync: ae, viewTransitionOpts: ye }) => {
        ue.fetchers.forEach((xe, We) => {
          xe.data !== void 0 && W.current.set(We, xe.data);
        }),
          L.forEach((xe) => W.current.delete(xe)),
          af(
            ae === !1 || a != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let ce =
          l.window != null &&
          l.window.document != null &&
          typeof l.window.document.startViewTransition == "function";
        if (
          (af(
            ye == null || ce,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !ye || !ce)
        ) {
          a && ae ? a(() => I(ue)) : M.startTransition(() => I(ue));
          return;
        }
        if (a && ae) {
          a(() => {
            R && (y && y.resolve(), R.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ye.currentLocation,
                nextLocation: ye.nextLocation,
              });
          });
          let xe = l.window.document.startViewTransition(() => {
            a(() => I(ue));
          });
          xe.finished.finally(() => {
            a(() => {
              k(void 0), T(void 0), p(void 0), m({ isTransitioning: !1 });
            });
          }),
            a(() => T(xe));
          return;
        }
        R
          ? (y && y.resolve(),
            R.skipTransition(),
            j({
              state: ue,
              currentLocation: ye.currentLocation,
              nextLocation: ye.nextLocation,
            }))
          : (p(ue),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ye.currentLocation,
              nextLocation: ye.nextLocation,
            }));
      },
      [l.window, a, R, y, I]
    );
  M.useLayoutEffect(() => l.subscribe(H), [l, H]),
    M.useEffect(() => {
      g.isTransitioning && !g.flushSync && k(new Zh());
    }, [g]),
    M.useEffect(() => {
      if (y && d && l.window) {
        let ue = d,
          L = y.promise,
          ae = l.window.document.startViewTransition(async () => {
            M.startTransition(() => I(ue)), await L;
          });
        ae.finished.finally(() => {
          k(void 0), T(void 0), p(void 0), m({ isTransitioning: !1 });
        }),
          T(ae);
      }
    }, [d, y, l.window, I]),
    M.useEffect(() => {
      y && d && c.location.key === d.location.key && y.resolve();
    }, [y, R, c.location, d]),
    M.useEffect(() => {
      !g.isTransitioning &&
        D &&
        (p(D.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: D.currentLocation,
          nextLocation: D.nextLocation,
        }),
        j(void 0));
    }, [g.isTransitioning, D]);
  let oe = M.useMemo(
      () => ({
        createHref: l.createHref,
        encodeLocation: l.encodeLocation,
        go: (ue) => l.navigate(ue),
        push: (ue, L, ae) =>
          l.navigate(ue, {
            state: L,
            preventScrollReset: ae == null ? void 0 : ae.preventScrollReset,
          }),
        replace: (ue, L, ae) =>
          l.navigate(ue, {
            replace: !0,
            state: L,
            preventScrollReset: ae == null ? void 0 : ae.preventScrollReset,
          }),
      }),
      [l]
    ),
    V = l.basename || "/",
    de = M.useMemo(
      () => ({
        router: l,
        navigator: oe,
        static: !1,
        basename: V,
        unstable_onError: u,
      }),
      [l, oe, V, u]
    );
  return M.createElement(
    M.Fragment,
    null,
    M.createElement(
      dr.Provider,
      { value: de },
      M.createElement(
        Al.Provider,
        { value: c },
        M.createElement(
          Cf.Provider,
          { value: W.current },
          M.createElement(
            uu.Provider,
            { value: g },
            M.createElement(
              nm,
              {
                basename: V,
                location: c.location,
                navigationType: c.historyAction,
                navigator: oe,
              },
              M.createElement(bh, {
                routes: l.routes,
                future: l.future,
                state: c,
                unstable_onError: u,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var bh = M.memo(em);
function em({ routes: l, future: a, state: u, unstable_onError: c }) {
  return Mf(l, void 0, u, c, a);
}
function $m({ to: l, replace: a, state: u, relative: c }) {
  pe(
    Vr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = M.useContext(Yt);
  He(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: d } = M.useContext(Ot),
    { pathname: p } = Qn(),
    g = Lf(),
    m = ci(l, si(d), p, c === "path"),
    y = JSON.stringify(m);
  return (
    M.useEffect(() => {
      g(JSON.parse(y), { replace: a, state: u, relative: c });
    }, [g, y, c, a, u]),
    null
  );
}
function Hm(l) {
  return Ih(l.context);
}
function tm(l) {
  pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function nm({
  basename: l = "/",
  children: a = null,
  location: u,
  navigationType: c = "POP",
  navigator: f,
  static: d = !1,
}) {
  pe(
    !Vr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = l.replace(/^\/*/, "/"),
    g = M.useMemo(
      () => ({ basename: p, navigator: f, static: d, future: {} }),
      [p, f, d]
    );
  typeof u == "string" && (u = hn(u));
  let {
      pathname: m = "/",
      search: y = "",
      hash: k = "",
      state: R = null,
      key: T = "default",
    } = u,
    D = M.useMemo(() => {
      let j = Ft(m, p);
      return j == null
        ? null
        : {
            location: { pathname: j, search: y, hash: k, state: R, key: T },
            navigationType: c,
          };
    }, [p, m, y, k, R, T, c]);
  return (
    He(
      D != null,
      `<Router basename="${p}"> is not able to match the URL "${m}${y}${k}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    D == null
      ? null
      : M.createElement(
          Yt.Provider,
          { value: g },
          M.createElement($l.Provider, { children: a, value: D })
        )
  );
}
function Bm({ children: l, location: a }) {
  return Uh(ou(l), a);
}
function ou(l, a = []) {
  let u = [];
  return (
    M.Children.forEach(l, (c, f) => {
      if (!M.isValidElement(c)) return;
      let d = [...a, f];
      if (c.type === M.Fragment) {
        u.push.apply(u, ou(c.props.children, d));
        return;
      }
      pe(
        c.type === tm,
        `[${
          typeof c.type == "string" ? c.type : c.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        pe(
          !c.props.index || !c.props.children,
          "An index route cannot have child routes."
        );
      let p = {
        id: c.props.id || d.join("-"),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      };
      c.props.children && (p.children = ou(c.props.children, d)), u.push(p);
    }),
    u
  );
}
var li = "get",
  oi = "application/x-www-form-urlencoded";
function fi(l) {
  return l != null && typeof l.tagName == "string";
}
function rm(l) {
  return fi(l) && l.tagName.toLowerCase() === "button";
}
function lm(l) {
  return fi(l) && l.tagName.toLowerCase() === "form";
}
function om(l) {
  return fi(l) && l.tagName.toLowerCase() === "input";
}
function im(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function am(l, a) {
  return l.button === 0 && (!a || a === "_self") && !im(l);
}
var ti = null;
function um() {
  if (ti === null)
    try {
      new FormData(document.createElement("form"), 0), (ti = !1);
    } catch {
      ti = !0;
    }
  return ti;
}
var sm = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function eu(l) {
  return l != null && !sm.has(l)
    ? (He(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oi}"`
      ),
      null)
    : l;
}
function cm(l, a) {
  let u, c, f, d, p;
  if (lm(l)) {
    let g = l.getAttribute("action");
    (c = g ? Ft(g, a) : null),
      (u = l.getAttribute("method") || li),
      (f = eu(l.getAttribute("enctype")) || oi),
      (d = new FormData(l));
  } else if (rm(l) || (om(l) && (l.type === "submit" || l.type === "image"))) {
    let g = l.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = l.getAttribute("formaction") || g.getAttribute("action");
    if (
      ((c = m ? Ft(m, a) : null),
      (u = l.getAttribute("formmethod") || g.getAttribute("method") || li),
      (f =
        eu(l.getAttribute("formenctype")) ||
        eu(g.getAttribute("enctype")) ||
        oi),
      (d = new FormData(g, l)),
      !um())
    ) {
      let { name: y, type: k, value: R } = l;
      if (k === "image") {
        let T = y ? `${y}.` : "";
        d.append(`${T}x`, "0"), d.append(`${T}y`, "0");
      } else y && d.append(y, R);
    }
  } else {
    if (fi(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (u = li), (c = null), (f = oi), (p = l);
  }
  return (
    d && f === "text/plain" && ((p = d), (d = void 0)),
    { action: c, method: u.toLowerCase(), encType: f, formData: d, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function du(l, a) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(a);
}
function fm(l, a, u) {
  let c =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : l;
  return (
    c.pathname === "/"
      ? (c.pathname = `_root.${u}`)
      : a && Ft(c.pathname, a) === "/"
      ? (c.pathname = `${a.replace(/\/$/, "")}/_root.${u}`)
      : (c.pathname = `${c.pathname.replace(/\/$/, "")}.${u}`),
    c
  );
}
async function dm(l, a) {
  if (l.id in a) return a[l.id];
  try {
    let u = await import(l.module);
    return (a[l.id] = u), u;
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function pm(l) {
  return l == null
    ? !1
    : l.href == null
    ? l.rel === "preload" &&
      typeof l.imageSrcSet == "string" &&
      typeof l.imageSizes == "string"
    : typeof l.rel == "string" && typeof l.href == "string";
}
async function hm(l, a, u) {
  let c = await Promise.all(
    l.map(async (f) => {
      let d = a.routes[f.route.id];
      if (d) {
        let p = await dm(d, u);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return gm(
    c
      .flat(1)
      .filter(pm)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function uf(l, a, u, c, f, d) {
  let p = (m, y) => (u[y] ? m.route.id !== u[y].route.id : !0),
    g = (m, y) => {
      var k;
      return (
        u[y].pathname !== m.pathname ||
        (((k = u[y].route.path) == null ? void 0 : k.endsWith("*")) &&
          u[y].params["*"] !== m.params["*"])
      );
    };
  return d === "assets"
    ? a.filter((m, y) => p(m, y) || g(m, y))
    : d === "data"
    ? a.filter((m, y) => {
        var R;
        let k = c.routes[m.route.id];
        if (!k || !k.hasLoader) return !1;
        if (p(m, y) || g(m, y)) return !0;
        if (m.route.shouldRevalidate) {
          let T = m.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((R = u[0]) == null ? void 0 : R.params) || {},
            nextUrl: new URL(l, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof T == "boolean") return T;
        }
        return !0;
      })
    : [];
}
function mm(l, a, { includeHydrateFallback: u } = {}) {
  return vm(
    l
      .map((c) => {
        let f = a.routes[c.route.id];
        if (!f) return [];
        let d = [f.module];
        return (
          f.clientActionModule && (d = d.concat(f.clientActionModule)),
          f.clientLoaderModule && (d = d.concat(f.clientLoaderModule)),
          u &&
            f.hydrateFallbackModule &&
            (d = d.concat(f.hydrateFallbackModule)),
          f.imports && (d = d.concat(f.imports)),
          d
        );
      })
      .flat(1)
  );
}
function vm(l) {
  return [...new Set(l)];
}
function ym(l) {
  let a = {},
    u = Object.keys(l).sort();
  for (let c of u) a[c] = l[c];
  return a;
}
function gm(l, a) {
  let u = new Set();
  return (
    new Set(a),
    l.reduce((c, f) => {
      let d = JSON.stringify(ym(f));
      return u.has(d) || (u.add(d), c.push({ key: d, link: f })), c;
    }, [])
  );
}
function Df() {
  let l = M.useContext(dr);
  return (
    du(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    l
  );
}
function wm() {
  let l = M.useContext(Al);
  return (
    du(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    l
  );
}
var pu = M.createContext(void 0);
pu.displayName = "FrameworkContext";
function zf() {
  let l = M.useContext(pu);
  return (
    du(l, "You must render this element inside a <HydratedRouter> element"), l
  );
}
function Sm(l, a) {
  let u = M.useContext(pu),
    [c, f] = M.useState(!1),
    [d, p] = M.useState(!1),
    {
      onFocus: g,
      onBlur: m,
      onMouseEnter: y,
      onMouseLeave: k,
      onTouchStart: R,
    } = a,
    T = M.useRef(null);
  M.useEffect(() => {
    if ((l === "render" && p(!0), l === "viewport")) {
      let W = (H) => {
          H.forEach((oe) => {
            p(oe.isIntersecting);
          });
        },
        I = new IntersectionObserver(W, { threshold: 0.5 });
      return (
        T.current && I.observe(T.current),
        () => {
          I.disconnect();
        }
      );
    }
  }, [l]),
    M.useEffect(() => {
      if (c) {
        let W = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(W);
        };
      }
    }, [c]);
  let D = () => {
      f(!0);
    },
    j = () => {
      f(!1), p(!1);
    };
  return u
    ? l !== "intent"
      ? [d, T, {}]
      : [
          d,
          T,
          {
            onFocus: Fl(g, D),
            onBlur: Fl(m, j),
            onMouseEnter: Fl(y, D),
            onMouseLeave: Fl(k, j),
            onTouchStart: Fl(R, D),
          },
        ]
    : [!1, T, {}];
}
function Fl(l, a) {
  return (u) => {
    l && l(u), u.defaultPrevented || a(u);
  };
}
function Em({ page: l, ...a }) {
  let { router: u } = Df(),
    c = M.useMemo(() => Bn(u.routes, l, u.basename), [u.routes, l, u.basename]);
  return c ? M.createElement(xm, { page: l, matches: c, ...a }) : null;
}
function km(l) {
  let { manifest: a, routeModules: u } = zf(),
    [c, f] = M.useState([]);
  return (
    M.useEffect(() => {
      let d = !1;
      return (
        hm(l, a, u).then((p) => {
          d || f(p);
        }),
        () => {
          d = !0;
        }
      );
    }, [l, a, u]),
    c
  );
}
function xm({ page: l, matches: a, ...u }) {
  let c = Qn(),
    { manifest: f, routeModules: d } = zf(),
    { basename: p } = Df(),
    { loaderData: g, matches: m } = wm(),
    y = M.useMemo(() => uf(l, a, m, f, c, "data"), [l, a, m, f, c]),
    k = M.useMemo(() => uf(l, a, m, f, c, "assets"), [l, a, m, f, c]),
    R = M.useMemo(() => {
      if (l === c.pathname + c.search + c.hash) return [];
      let j = new Set(),
        W = !1;
      if (
        (a.forEach((H) => {
          var V;
          let oe = f.routes[H.route.id];
          !oe ||
            !oe.hasLoader ||
            ((!y.some((de) => de.route.id === H.route.id) &&
              H.route.id in g &&
              (V = d[H.route.id]) != null &&
              V.shouldRevalidate) ||
            oe.hasClientLoader
              ? (W = !0)
              : j.add(H.route.id));
        }),
        j.size === 0)
      )
        return [];
      let I = fm(l, p, "data");
      return (
        W &&
          j.size > 0 &&
          I.searchParams.set(
            "_routes",
            a
              .filter((H) => j.has(H.route.id))
              .map((H) => H.route.id)
              .join(",")
          ),
        [I.pathname + I.search]
      );
    }, [p, g, c, f, y, a, l, d]),
    T = M.useMemo(() => mm(k, f), [k, f]),
    D = km(k);
  return M.createElement(
    M.Fragment,
    null,
    R.map((j) =>
      M.createElement("link", {
        key: j,
        rel: "prefetch",
        as: "fetch",
        href: j,
        ...u,
      })
    ),
    T.map((j) =>
      M.createElement("link", { key: j, rel: "modulepreload", href: j, ...u })
    ),
    D.map(({ key: j, link: W }) =>
      M.createElement("link", { key: j, nonce: u.nonce, ...W })
    )
  );
}
function Cm(...l) {
  return (a) => {
    l.forEach((u) => {
      typeof u == "function" ? u(a) : u != null && (u.current = a);
    });
  };
}
var _f =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  _f && (window.__reactRouterVersion = "7.9.1");
} catch {}
function Wm(l, a) {
  return ch({
    basename: a == null ? void 0 : a.basename,
    getContext: a == null ? void 0 : a.getContext,
    future: a == null ? void 0 : a.future,
    history: Mp({ window: a == null ? void 0 : a.window }),
    hydrationData: Rm(),
    routes: l,
    mapRouteProperties: Gh,
    hydrationRouteProperties: Jh,
    dataStrategy: a == null ? void 0 : a.dataStrategy,
    patchRoutesOnNavigation: a == null ? void 0 : a.patchRoutesOnNavigation,
    window: a == null ? void 0 : a.window,
  }).initialize();
}
function Rm() {
  let l = window == null ? void 0 : window.__staticRouterHydrationData;
  return l && l.errors && (l = { ...l, errors: Pm(l.errors) }), l;
}
function Pm(l) {
  if (!l) return null;
  let a = Object.entries(l),
    u = {};
  for (let [c, f] of a)
    if (f && f.__type === "RouteErrorResponse")
      u[c] = new ai(f.status, f.statusText, f.data, f.internal === !0);
    else if (f && f.__type === "Error") {
      if (f.__subType) {
        let d = window[f.__subType];
        if (typeof d == "function")
          try {
            let p = new d(f.message);
            (p.stack = ""), (u[c] = p);
          } catch {}
      }
      if (u[c] == null) {
        let d = new Error(f.message);
        (d.stack = ""), (u[c] = d);
      }
    } else u[c] = f;
  return u;
}
var Ff = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Of = M.forwardRef(function (
    {
      onClick: a,
      discover: u = "render",
      prefetch: c = "none",
      relative: f,
      reloadDocument: d,
      replace: p,
      state: g,
      target: m,
      to: y,
      preventScrollReset: k,
      viewTransition: R,
      ...T
    },
    D
  ) {
    let { basename: j } = M.useContext(Yt),
      W = typeof y == "string" && Ff.test(y),
      I,
      H = !1;
    if (typeof y == "string" && W && ((I = y), _f))
      try {
        let ce = new URL(window.location.href),
          xe = y.startsWith("//") ? new URL(ce.protocol + y) : new URL(y),
          We = Ft(xe.pathname, j);
        xe.origin === ce.origin && We != null
          ? (y = We + xe.search + xe.hash)
          : (H = !0);
      } catch {
        He(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let oe = Fh(y, { relative: f }),
      [V, de, ue] = Sm(c, T),
      L = Tm(y, {
        replace: p,
        state: g,
        target: m,
        preventScrollReset: k,
        relative: f,
        viewTransition: R,
      });
    function ae(ce) {
      a && a(ce), ce.defaultPrevented || L(ce);
    }
    let ye = M.createElement("a", {
      ...T,
      ...ue,
      href: I || oe,
      onClick: H || d ? a : ae,
      ref: Cm(D, de),
      target: m,
      "data-discover": !W && u === "render" ? "true" : void 0,
    });
    return V && !W
      ? M.createElement(M.Fragment, null, ye, M.createElement(Em, { page: oe }))
      : ye;
  });
Of.displayName = "Link";
var Lm = M.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: u = !1,
    className: c = "",
    end: f = !1,
    style: d,
    to: p,
    viewTransition: g,
    children: m,
    ...y
  },
  k
) {
  let R = Hl(p, { relative: y.relative }),
    T = Qn(),
    D = M.useContext(Al),
    { navigator: j, basename: W } = M.useContext(Yt),
    I = D != null && Om(R) && g === !0,
    H = j.encodeLocation ? j.encodeLocation(R).pathname : R.pathname,
    oe = T.pathname,
    V =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  u ||
    ((oe = oe.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (H = H.toLowerCase())),
    V && W && (V = Ft(V, W) || V);
  const de = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
  let ue = oe === H || (!f && oe.startsWith(H) && oe.charAt(de) === "/"),
    L =
      V != null &&
      (V === H || (!f && V.startsWith(H) && V.charAt(H.length) === "/")),
    ae = { isActive: ue, isPending: L, isTransitioning: I },
    ye = ue ? a : void 0,
    ce;
  typeof c == "function"
    ? (ce = c(ae))
    : (ce = [
        c,
        ue ? "active" : null,
        L ? "pending" : null,
        I ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let xe = typeof d == "function" ? d(ae) : d;
  return M.createElement(
    Of,
    {
      ...y,
      "aria-current": ye,
      className: ce,
      ref: k,
      style: xe,
      to: p,
      viewTransition: g,
    },
    typeof m == "function" ? m(ae) : m
  );
});
Lm.displayName = "NavLink";
var Nm = M.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: a,
      navigate: u,
      reloadDocument: c,
      replace: f,
      state: d,
      method: p = li,
      action: g,
      onSubmit: m,
      relative: y,
      preventScrollReset: k,
      viewTransition: R,
      ...T
    },
    D
  ) => {
    let j = _m(),
      W = Fm(g, { relative: y }),
      I = p.toLowerCase() === "get" ? "get" : "post",
      H = typeof g == "string" && Ff.test(g),
      oe = (V) => {
        if ((m && m(V), V.defaultPrevented)) return;
        V.preventDefault();
        let de = V.nativeEvent.submitter,
          ue = (de == null ? void 0 : de.getAttribute("formmethod")) || p;
        j(de || V.currentTarget, {
          fetcherKey: a,
          method: ue,
          navigate: u,
          replace: f,
          state: d,
          relative: y,
          preventScrollReset: k,
          viewTransition: R,
        });
      };
    return M.createElement("form", {
      ref: D,
      method: I,
      action: W,
      onSubmit: c ? m : oe,
      ...T,
      "data-discover": !H && l === "render" ? "true" : void 0,
    });
  }
);
Nm.displayName = "Form";
function Mm(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function If(l) {
  let a = M.useContext(dr);
  return pe(a, Mm(l)), a;
}
function Tm(
  l,
  {
    target: a,
    replace: u,
    state: c,
    preventScrollReset: f,
    relative: d,
    viewTransition: p,
  } = {}
) {
  let g = Lf(),
    m = Qn(),
    y = Hl(l, { relative: d });
  return M.useCallback(
    (k) => {
      if (am(k, a)) {
        k.preventDefault();
        let R = u !== void 0 ? u : Vn(m) === Vn(y);
        g(l, {
          replace: R,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: p,
        });
      }
    },
    [m, g, y, u, c, a, l, f, d, p]
  );
}
var Dm = 0,
  zm = () => `__${String(++Dm)}__`;
function _m() {
  let { router: l } = If("useSubmit"),
    { basename: a } = M.useContext(Yt),
    u = Kh();
  return M.useCallback(
    async (c, f = {}) => {
      let { action: d, method: p, encType: g, formData: m, body: y } = cm(c, a);
      if (f.navigate === !1) {
        let k = f.fetcherKey || zm();
        await l.fetch(k, u, f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: m,
          body: y,
          formMethod: f.method || p,
          formEncType: f.encType || g,
          flushSync: f.flushSync,
        });
      } else
        await l.navigate(f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: m,
          body: y,
          formMethod: f.method || p,
          formEncType: f.encType || g,
          replace: f.replace,
          state: f.state,
          fromRouteId: u,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [l, a, u]
  );
}
function Fm(l, { relative: a } = {}) {
  let { basename: u } = M.useContext(Yt),
    c = M.useContext(Ot);
  pe(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1),
    d = { ...Hl(l || ".", { relative: a }) },
    p = Qn();
  if (l == null) {
    d.search = p.search;
    let g = new URLSearchParams(d.search),
      m = g.getAll("index");
    if (m.some((k) => k === "")) {
      g.delete("index"),
        m.filter((R) => R).forEach((R) => g.append("index", R));
      let k = g.toString();
      d.search = k ? `?${k}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (d.pathname = d.pathname === "/" ? u : tn([u, d.pathname])),
    Vn(d)
  );
}
function Om(l, { relative: a } = {}) {
  let u = M.useContext(uu);
  pe(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = If("useViewTransitionState"),
    f = Hl(l, { relative: a });
  if (!u.isTransitioning) return !1;
  let d = Ft(u.currentLocation.pathname, c) || u.currentLocation.pathname,
    p = Ft(u.nextLocation.pathname, c) || u.nextLocation.pathname;
  return ii(f.pathname, p) != null || ii(f.pathname, d) != null;
}
var Uf = Pp();
const Vm = kp(Uf);
function Qm(l) {
  return M.createElement(qh, { flushSync: Uf.flushSync, ...l });
}
export {
  Of as L,
  Lm as N,
  Hm as O,
  Vm as R,
  Qn as a,
  Lf as b,
  Am as c,
  $m as d,
  Bm as e,
  tm as f,
  Yh as g,
  Qm as h,
  jl as i,
  Wm as j,
  Pp as r,
  jm as u,
};
