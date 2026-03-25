const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/browser-ponyfill-zt2sVDZK.js",
      "assets/crypto-libs-BTkSibId.js",
    ])
) => i.map((i) => d[i]);
import { r as N, _ as mt } from "./wallet-libs-C4iBya-7.js";
import { g as yt, e as A } from "./crypto-libs-BTkSibId.js";
const x = (i) => typeof i == "string",
  Z = () => {
    let i, e;
    const t = new Promise((n, s) => {
      (i = n), (e = s);
    });
    return (t.resolve = i), (t.reject = e), t;
  },
  $e = (i) => (i == null ? "" : "" + i),
  xt = (i, e, t) => {
    i.forEach((n) => {
      e[n] && (t[n] = e[n]);
    });
  },
  bt = /###/g,
  Ne = (i) => (i && i.indexOf("###") > -1 ? i.replace(bt, ".") : i),
  Ee = (i) => !i || x(i),
  ee = (i, e, t) => {
    const n = x(e) ? e.split(".") : e;
    let s = 0;
    for (; s < n.length - 1; ) {
      if (Ee(i)) return {};
      const r = Ne(n[s]);
      !i[r] && t && (i[r] = new t()),
        Object.prototype.hasOwnProperty.call(i, r) ? (i = i[r]) : (i = {}),
        ++s;
    }
    return Ee(i) ? {} : { obj: i, k: Ne(n[s]) };
  },
  ke = (i, e, t) => {
    const { obj: n, k: s } = ee(i, e, Object);
    if (n !== void 0 || e.length === 1) {
      n[s] = t;
      return;
    }
    let r = e[e.length - 1],
      a = e.slice(0, e.length - 1),
      o = ee(i, a, Object);
    for (; o.obj === void 0 && a.length; )
      (r = `${a[a.length - 1]}.${r}`),
        (a = a.slice(0, a.length - 1)),
        (o = ee(i, a, Object)),
        o != null &&
          o.obj &&
          typeof o.obj[`${o.k}.${r}`] < "u" &&
          (o.obj = void 0);
    o.obj[`${o.k}.${r}`] = t;
  },
  vt = (i, e, t, n) => {
    const { obj: s, k: r } = ee(i, e, Object);
    (s[r] = s[r] || []), s[r].push(t);
  },
  le = (i, e) => {
    const { obj: t, k: n } = ee(i, e);
    if (t && Object.prototype.hasOwnProperty.call(t, n)) return t[n];
  },
  St = (i, e, t) => {
    const n = le(i, t);
    return n !== void 0 ? n : le(e, t);
  },
  et = (i, e, t) => {
    for (const n in e)
      n !== "__proto__" &&
        n !== "constructor" &&
        (n in i
          ? x(i[n]) ||
            i[n] instanceof String ||
            x(e[n]) ||
            e[n] instanceof String
            ? t && (i[n] = e[n])
            : et(i[n], e[n], t)
          : (i[n] = e[n]));
    return i;
  },
  X = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var wt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const Ot = (i) => (x(i) ? i.replace(/[&<>"'\/]/g, (e) => wt[e]) : i);
class Lt {
  constructor(e) {
    (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const n = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, n),
      this.regExpQueue.push(e),
      n
    );
  }
}
const Pt = [" ", ",", "?", "!", ";"],
  Ct = new Lt(20),
  $t = (i, e, t) => {
    (e = e || ""), (t = t || "");
    const n = Pt.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
    if (n.length === 0) return !0;
    const s = Ct.getRegExp(
      `(${n.map((a) => (a === "?" ? "\\?" : a)).join("|")})`
    );
    let r = !s.test(i);
    if (!r) {
      const a = i.indexOf(t);
      a > 0 && !s.test(i.substring(0, a)) && (r = !0);
    }
    return r;
  },
  xe = (i, e, t = ".") => {
    if (!i) return;
    if (i[e]) return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0;
    const n = e.split(t);
    let s = i;
    for (let r = 0; r < n.length; ) {
      if (!s || typeof s != "object") return;
      let a,
        o = "";
      for (let l = r; l < n.length; ++l)
        if ((l !== r && (o += t), (o += n[l]), (a = s[o]), a !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof a) > -1 &&
            l < n.length - 1
          )
            continue;
          r += l - r + 1;
          break;
        }
      s = a;
    }
    return s;
  },
  te = (i) => (i == null ? void 0 : i.replace("_", "-")),
  Nt = {
    type: "logger",
    log(i) {
      this.output("log", i);
    },
    warn(i) {
      this.output("warn", i);
    },
    error(i) {
      this.output("error", i);
    },
    output(i, e) {
      var t, n;
      (n =
        (t = console == null ? void 0 : console[i]) == null
          ? void 0
          : t.apply) == null || n.call(t, console, e);
    },
  };
class ue {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    (this.prefix = t.prefix || "i18next:"),
      (this.logger = e || Nt),
      (this.options = t),
      (this.debug = t.debug);
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, s) {
    return s && !this.debug
      ? null
      : (x(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new ue(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new ue(this.logger, e)
    );
  }
}
var U = new ue();
class de {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(" ").forEach((n) => {
        this.observers[n] || (this.observers[n] = new Map());
        const s = this.observers[n].get(t) || 0;
        this.observers[n].set(t, s + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach(([s, r]) => {
        for (let a = 0; a < r; a++) s(...t);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([s, r]) => {
          for (let a = 0; a < r; a++) s.apply(s, [e, ...t]);
        });
  }
}
class je extends de {
  constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
    super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n, s = {}) {
    var u, f;
    const r =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      a =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1
      ? (o = e.split("."))
      : ((o = [e, t]),
        n &&
          (Array.isArray(n)
            ? o.push(...n)
            : x(n) && r
            ? o.push(...n.split(r))
            : o.push(n)));
    const l = le(this.data, o);
    return (
      !l &&
        !t &&
        !n &&
        e.indexOf(".") > -1 &&
        ((e = o[0]), (t = o[1]), (n = o.slice(2).join("."))),
      l || !a || !x(n)
        ? l
        : xe(
            (f = (u = this.data) == null ? void 0 : u[e]) == null
              ? void 0
              : f[t],
            n,
            r
          )
    );
  }
  addResource(e, t, n, s, r = { silent: !1 }) {
    const a =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    n && (o = o.concat(a ? n.split(a) : n)),
      e.indexOf(".") > -1 && ((o = e.split(".")), (s = t), (t = o[1])),
      this.addNamespaces(t),
      ke(this.data, o, s),
      r.silent || this.emit("added", e, t, n, s);
  }
  addResources(e, t, n, s = { silent: !1 }) {
    for (const r in n)
      (x(n[r]) || Array.isArray(n[r])) &&
        this.addResource(e, t, r, n[r], { silent: !0 });
    s.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, s, r, a = { silent: !1, skipCopy: !1 }) {
    let o = [e, t];
    e.indexOf(".") > -1 && ((o = e.split(".")), (s = n), (n = t), (t = o[1])),
      this.addNamespaces(t);
    let l = le(this.data, o) || {};
    a.skipCopy || (n = JSON.parse(JSON.stringify(n))),
      s ? et(l, n, r) : (l = { ...l, ...n }),
      ke(this.data, o, l),
      a.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find(
      (s) => t[s] && Object.keys(t[s]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var tt = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, n, s) {
    return (
      i.forEach((r) => {
        var a;
        e =
          ((a = this.processors[r]) == null ? void 0 : a.process(e, t, n, s)) ??
          e;
      }),
      e
    );
  },
};
const nt = Symbol("i18next/PATH_KEY");
function Et() {
  const i = [],
    e = Object.create(null);
  let t;
  return (
    (e.get = (n, s) => {
      var r;
      return (
        (r = t == null ? void 0 : t.revoke) == null || r.call(t),
        s === nt ? i : (i.push(s), (t = Proxy.revocable(n, e)), t.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), e).proxy
  );
}
function be(i, e) {
  const { [nt]: t } = i(Et());
  return t.join((e == null ? void 0 : e.keySeparator) ?? ".");
}
const Re = {},
  Te = (i) => !x(i) && typeof i != "boolean" && typeof i != "number";
class fe extends de {
  constructor(e, t = {}) {
    super(),
      xt(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = U.create("translator"));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = { interpolation: {} }) {
    const n = { ...t };
    if (e == null) return !1;
    const s = this.resolve(e, n);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const s =
      t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const a = n && e.indexOf(n) > -1,
      o =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !$t(e, n, s);
    if (a && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: x(r) ? [r] : r };
      const u = e.split(n);
      (n !== s || (n === s && this.options.ns.indexOf(u[0]) > -1)) &&
        (r = u.shift()),
        (e = u.join(s));
    }
    return { key: e, namespaces: x(r) ? [r] : r };
  }
  translate(e, t, n) {
    let s = typeof t == "object" ? { ...t } : t;
    if (
      (typeof s != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (s = this.options.overloadTranslationOptionHandler(arguments)),
      typeof s == "object" && (s = { ...s }),
      s || (s = {}),
      e == null)
    )
      return "";
    typeof e == "function" && (e = be(e, { ...this.options, ...s })),
      Array.isArray(e) || (e = [String(e)]);
    const r =
        s.returnDetails !== void 0
          ? s.returnDetails
          : this.options.returnDetails,
      a =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      { key: o, namespaces: l } = this.extractFromKey(e[e.length - 1], s),
      u = l[l.length - 1];
    let f = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    f === void 0 && (f = ":");
    const c = s.lng || this.language,
      p = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((c == null ? void 0 : c.toLowerCase()) === "cimode")
      return p
        ? r
          ? {
              res: `${u}${f}${o}`,
              usedKey: o,
              exactUsedKey: o,
              usedLng: c,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(s),
            }
          : `${u}${f}${o}`
        : r
        ? {
            res: o,
            usedKey: o,
            exactUsedKey: o,
            usedLng: c,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(s),
          }
        : o;
    const h = this.resolve(e, s);
    let d = h == null ? void 0 : h.res;
    const g = (h == null ? void 0 : h.usedKey) || o,
      y = (h == null ? void 0 : h.exactUsedKey) || o,
      b = ["[object Number]", "[object Function]", "[object RegExp]"],
      S = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays,
      v = !this.i18nFormat || this.i18nFormat.handleAsObject,
      w = s.count !== void 0 && !x(s.count),
      k = fe.hasDefaultValue(s),
      O = w ? this.pluralResolver.getSuffix(c, s.count, s) : "",
      m =
        s.ordinal && w
          ? this.pluralResolver.getSuffix(c, s.count, { ordinal: !1 })
          : "",
      L = w && !s.ordinal && s.count === 0,
      P =
        (L && s[`defaultValue${this.options.pluralSeparator}zero`]) ||
        s[`defaultValue${O}`] ||
        s[`defaultValue${m}`] ||
        s.defaultValue;
    let C = d;
    v && !d && k && (C = P);
    const R = Te(C),
      T = Object.prototype.toString.apply(C);
    if (v && C && R && b.indexOf(T) < 0 && !(x(S) && Array.isArray(C))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const $ = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, C, { ...s, ns: l })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return r
          ? ((h.res = $), (h.usedParams = this.getUsedParamsDetails(s)), h)
          : $;
      }
      if (a) {
        const $ = Array.isArray(C),
          j = $ ? [] : {},
          _ = $ ? y : g;
        for (const F in C)
          if (Object.prototype.hasOwnProperty.call(C, F)) {
            const D = `${_}${a}${F}`;
            k && !d
              ? (j[F] = this.translate(D, {
                  ...s,
                  defaultValue: Te(P) ? P[F] : void 0,
                  joinArrays: !1,
                  ns: l,
                }))
              : (j[F] = this.translate(D, { ...s, joinArrays: !1, ns: l })),
              j[F] === D && (j[F] = C[F]);
          }
        d = j;
      }
    } else if (v && x(S) && Array.isArray(d))
      (d = d.join(S)), d && (d = this.extendTranslation(d, e, s, n));
    else {
      let $ = !1,
        j = !1;
      !this.isValidLookup(d) && k && (($ = !0), (d = P)),
        this.isValidLookup(d) || ((j = !0), (d = o));
      const F =
          (s.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          j
            ? void 0
            : d,
        D = k && P !== d && this.options.updateMissing;
      if (j || $ || D) {
        if (
          (this.logger.log(D ? "updateKey" : "missingKey", c, u, o, D ? P : d),
          a)
        ) {
          const V = this.resolve(o, { ...s, keySeparator: !1 });
          V &&
            V.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let E = [];
        const q = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          s.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && q && q[0])
          for (let V = 0; V < q.length; V++) E.push(q[V]);
        else
          this.options.saveMissingTo === "all"
            ? (E = this.languageUtils.toResolveHierarchy(
                s.lng || this.language
              ))
            : E.push(s.lng || this.language);
        const re = (V, B, G) => {
          var Ce;
          const Pe = k && G !== d ? G : F;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(V, u, B, Pe, D, s)
            : (Ce = this.backendConnector) != null &&
              Ce.saveMissing &&
              this.backendConnector.saveMissing(V, u, B, Pe, D, s),
            this.emit("missingKey", V, u, B, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && w
            ? E.forEach((V) => {
                const B = this.pluralResolver.getSuffixes(V, s);
                L &&
                  s[`defaultValue${this.options.pluralSeparator}zero`] &&
                  B.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  B.push(`${this.options.pluralSeparator}zero`),
                  B.forEach((G) => {
                    re([V], o + G, s[`defaultValue${G}`] || P);
                  });
              })
            : re(E, o, P));
      }
      (d = this.extendTranslation(d, e, s, h, n)),
        j &&
          d === o &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${u}${f}${o}`),
        (j || $) &&
          this.options.parseMissingKeyHandler &&
          (d = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${u}${f}${o}` : o,
            $ ? d : void 0,
            s
          ));
    }
    return r
      ? ((h.res = d), (h.usedParams = this.getUsedParamsDetails(s)), h)
      : d;
  }
  extendTranslation(e, t, n, s, r) {
    var l, u;
    if ((l = this.i18nFormat) != null && l.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...n },
        n.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s }
      );
    else if (!n.skipInterpolation) {
      n.interpolation &&
        this.interpolator.init({
          ...n,
          interpolation: { ...this.options.interpolation, ...n.interpolation },
        });
      const f =
        x(e) &&
        (((u = n == null ? void 0 : n.interpolation) == null
          ? void 0
          : u.skipOnVariables) !== void 0
          ? n.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (f) {
        const h = e.match(this.interpolator.nestingRegexp);
        c = h && h.length;
      }
      let p = n.replace && !x(n.replace) ? n.replace : n;
      if (
        (this.options.interpolation.defaultVariables &&
          (p = { ...this.options.interpolation.defaultVariables, ...p }),
        (e = this.interpolator.interpolate(
          e,
          p,
          n.lng || this.language || s.usedLng,
          n
        )),
        f)
      ) {
        const h = e.match(this.interpolator.nestingRegexp),
          d = h && h.length;
        c < d && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng),
        n.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            (...h) =>
              (r == null ? void 0 : r[0]) === h[0] && !n.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${h[0]} in key: ${t[0]}`
                  ),
                  null)
                : this.translate(...h, t),
            n
          )),
        n.interpolation && this.interpolator.reset();
    }
    const a = n.postProcess || this.options.postProcess,
      o = x(a) ? [a] : a;
    return (
      e != null &&
        o != null &&
        o.length &&
        n.applyPostProcessor !== !1 &&
        (e = tt.handle(
          o,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(n),
                },
                ...n,
              }
            : n,
          this
        )),
      e
    );
  }
  resolve(e, t = {}) {
    let n, s, r, a, o;
    return (
      x(e) && (e = [e]),
      e.forEach((l) => {
        if (this.isValidLookup(n)) return;
        const u = this.extractFromKey(l, t),
          f = u.key;
        s = f;
        let c = u.namespaces;
        this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
        const p = t.count !== void 0 && !x(t.count),
          h = p && !t.ordinal && t.count === 0,
          d =
            t.context !== void 0 &&
            (x(t.context) || typeof t.context == "number") &&
            t.context !== "",
          g = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
                t.fallbackLng
              );
        c.forEach((y) => {
          var b, S;
          this.isValidLookup(n) ||
            ((o = y),
            !Re[`${g[0]}-${y}`] &&
              (b = this.utils) != null &&
              b.hasLoadedNamespace &&
              !((S = this.utils) != null && S.hasLoadedNamespace(o)) &&
              ((Re[`${g[0]}-${y}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${g.join(
                  ", "
                )}" won't get resolved as namespace "${o}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            g.forEach((v) => {
              var O;
              if (this.isValidLookup(n)) return;
              a = v;
              const w = [f];
              if ((O = this.i18nFormat) != null && O.addLookupKeys)
                this.i18nFormat.addLookupKeys(w, f, v, y, t);
              else {
                let m;
                p && (m = this.pluralResolver.getSuffix(v, t.count, t));
                const L = `${this.options.pluralSeparator}zero`,
                  P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (p &&
                    (t.ordinal &&
                      m.indexOf(P) === 0 &&
                      w.push(f + m.replace(P, this.options.pluralSeparator)),
                    w.push(f + m),
                    h && w.push(f + L)),
                  d)
                ) {
                  const C = `${f}${this.options.contextSeparator || "_"}${
                    t.context
                  }`;
                  w.push(C),
                    p &&
                      (t.ordinal &&
                        m.indexOf(P) === 0 &&
                        w.push(C + m.replace(P, this.options.pluralSeparator)),
                      w.push(C + m),
                      h && w.push(C + L));
                }
              }
              let k;
              for (; (k = w.pop()); )
                this.isValidLookup(n) ||
                  ((r = k), (n = this.getResource(v, y, k, t)));
            }));
        });
      }),
      { res: n, usedKey: s, exactUsedKey: r, usedLng: a, usedNS: o }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, t, n, s = {}) {
    var r;
    return (r = this.i18nFormat) != null && r.getResource
      ? this.i18nFormat.getResource(e, t, n, s)
      : this.resourceStore.getResource(e, t, n, s);
  }
  getUsedParamsDetails(e = {}) {
    const t = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      n = e.replace && !x(e.replace);
    let s = n ? e.replace : e;
    if (
      (n && typeof e.count < "u" && (s.count = e.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !n)
    ) {
      s = { ...s };
      for (const r of t) delete s[r];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (
        Object.prototype.hasOwnProperty.call(e, n) &&
        t === n.substring(0, t.length) &&
        e[n] !== void 0
      )
        return !0;
    return !1;
  }
}
class Ae {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = U.create("languageUtils"));
  }
  getScriptPartFromCode(e) {
    if (((e = te(e)), !e || e.indexOf("-") < 0)) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = te(e)), !e || e.indexOf("-") < 0)) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (x(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return (
        t && this.options.lowerCaseLng && (t = t.toLowerCase()),
        t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((n) => {
        if (t) return;
        const s = this.formatLanguageCode(n);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((n) => {
          if (t) return;
          const s = this.getScriptPartFromCode(n);
          if (this.isSupportedCode(s)) return (t = s);
          const r = this.getLanguagePartFromCode(n);
          if (this.isSupportedCode(r)) return (t = r);
          t = this.options.supportedLngs.find((a) => {
            if (a === r) return a;
            if (
              !(a.indexOf("-") < 0 && r.indexOf("-") < 0) &&
              ((a.indexOf("-") > 0 &&
                r.indexOf("-") < 0 &&
                a.substring(0, a.indexOf("-")) === r) ||
                (a.indexOf(r) === 0 && r.length > 1))
            )
              return a;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(t)),
      x(e) && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!t) return e.default || [];
    let n = e[t];
    return (
      n || (n = e[this.getScriptPartFromCode(t)]),
      n || (n = e[this.formatLanguageCode(t)]),
      n || (n = e[this.getLanguagePartFromCode(t)]),
      n || (n = e.default),
      n || []
    );
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(
        (t === !1 ? [] : t) || this.options.fallbackLng || [],
        e
      ),
      s = [],
      r = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? s.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`
              ));
      };
    return (
      x(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            r(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            r(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            r(this.getLanguagePartFromCode(e)))
        : x(e) && r(this.formatLanguageCode(e)),
      n.forEach((a) => {
        s.indexOf(a) < 0 && r(this.formatLanguageCode(a));
      }),
      s
    );
  }
}
const Fe = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Ie = {
    select: (i) => (i === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class kt {
  constructor(e, t = {}) {
    (this.languageUtils = e),
      (this.options = t),
      (this.logger = U.create("pluralResolver")),
      (this.pluralRulesCache = {});
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const n = te(e === "dev" ? "en" : e),
      s = t.ordinal ? "ordinal" : "cardinal",
      r = JSON.stringify({ cleanedCode: n, type: s });
    if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
    let a;
    try {
      a = new Intl.PluralRules(n, { type: s });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"), Ie
        );
      if (!e.match(/-|_/)) return Ie;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(l, t);
    }
    return (this.pluralRulesCache[r] = a), a;
  }
  needsPlural(e, t = {}) {
    let n = this.getRule(e, t);
    return (
      n || (n = this.getRule("dev", t)),
      (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(e, t, n = {}) {
    return this.getSuffixes(e, n).map((s) => `${t}${s}`);
  }
  getSuffixes(e, t = {}) {
    let n = this.getRule(e, t);
    return (
      n || (n = this.getRule("dev", t)),
      n
        ? n
            .resolvedOptions()
            .pluralCategories.sort((s, r) => Fe[s] - Fe[r])
            .map(
              (s) =>
                `${this.options.prepend}${
                  t.ordinal ? `ordinal${this.options.prepend}` : ""
                }${s}`
            )
        : []
    );
  }
  getSuffix(e, t, n = {}) {
    const s = this.getRule(e, n);
    return s
      ? `${this.options.prepend}${
          n.ordinal ? `ordinal${this.options.prepend}` : ""
        }${s.select(t)}`
      : (this.logger.warn(`no plural rule found for: ${e}`),
        this.getSuffix("dev", t, n));
  }
}
const De = (i, e, t, n = ".", s = !0) => {
    let r = St(i, e, t);
    return (
      !r && s && x(t) && ((r = xe(i, t, n)), r === void 0 && (r = xe(e, t, n))),
      r
    );
  },
  he = (i) => i.replace(/\$/g, "$$$$");
class jt {
  constructor(e = {}) {
    var t;
    (this.logger = U.create("interpolator")),
      (this.options = e),
      (this.format =
        ((t = e == null ? void 0 : e.interpolation) == null
          ? void 0
          : t.format) || ((n) => n)),
      this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: s,
      prefix: r,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: f,
      unescapePrefix: c,
      nestingPrefix: p,
      nestingPrefixEscaped: h,
      nestingSuffix: d,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: y,
      maxReplaces: b,
      alwaysFormat: S,
    } = e.interpolation;
    (this.escape = t !== void 0 ? t : Ot),
      (this.escapeValue = n !== void 0 ? n : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = r ? X(r) : a || "{{"),
      (this.suffix = o ? X(o) : l || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = f ? "" : c || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : f || ""),
      (this.nestingPrefix = p ? X(p) : h || X("$t(")),
      (this.nestingSuffix = d ? X(d) : g || X(")")),
      (this.nestingOptionsSeparator = y || ","),
      (this.maxReplaces = b || 1e3),
      (this.alwaysFormat = S !== void 0 ? S : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) =>
      (t == null ? void 0 : t.source) === n
        ? ((t.lastIndex = 0), t)
        : new RegExp(n, "g");
    (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`
      ));
  }
  interpolate(e, t, n, s) {
    var h;
    let r, a, o;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (d) => {
        if (d.indexOf(this.formatSeparator) < 0) {
          const S = De(
            t,
            l,
            d,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(S, void 0, n, { ...s, ...t, interpolationkey: d })
            : S;
        }
        const g = d.split(this.formatSeparator),
          y = g.shift().trim(),
          b = g.join(this.formatSeparator).trim();
        return this.format(
          De(
            t,
            l,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          b,
          n,
          { ...s, ...t, interpolationkey: y }
        );
      };
    this.resetRegExp();
    const f =
        (s == null ? void 0 : s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      c =
        ((h = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : h.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (d) => he(d) },
        {
          regex: this.regexp,
          safeValue: (d) => (this.escapeValue ? he(this.escape(d)) : he(d)),
        },
      ].forEach((d) => {
        for (o = 0; (r = d.regex.exec(e)); ) {
          const g = r[1].trim();
          if (((a = u(g)), a === void 0))
            if (typeof f == "function") {
              const b = f(e, r, s);
              a = x(b) ? b : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, g)) a = "";
            else if (c) {
              a = r[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${g} for interpolating ${e}`
              ),
                (a = "");
          else !x(a) && !this.useRawValueToEscape && (a = $e(a));
          const y = d.safeValue(a);
          if (
            ((e = e.replace(r[0], y)),
            c
              ? ((d.regex.lastIndex += a.length),
                (d.regex.lastIndex -= r[0].length))
              : (d.regex.lastIndex = 0),
            o++,
            o >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t, n = {}) {
    let s, r, a;
    const o = (l, u) => {
      const f = this.nestingOptionsSeparator;
      if (l.indexOf(f) < 0) return l;
      const c = l.split(new RegExp(`${f}[ ]*{`));
      let p = `{${c[1]}`;
      (l = c[0]), (p = this.interpolate(p, a));
      const h = p.match(/'/g),
        d = p.match(/"/g);
      ((((h == null ? void 0 : h.length) ?? 0) % 2 === 0 && !d) ||
        d.length % 2 !== 0) &&
        (p = p.replace(/'/g, '"'));
      try {
        (a = JSON.parse(p)), u && (a = { ...u, ...a });
      } catch (g) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            g
          ),
          `${l}${f}${p}`
        );
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        l
      );
    };
    for (; (s = this.nestingRegexp.exec(e)); ) {
      let l = [];
      (a = { ...n }),
        (a = a.replace && !x(a.replace) ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue;
      const u = /{.*}/.test(s[1])
        ? s[1].lastIndexOf("}") + 1
        : s[1].indexOf(this.formatSeparator);
      if (
        (u !== -1 &&
          ((l = s[1]
            .slice(u)
            .split(this.formatSeparator)
            .map((f) => f.trim())
            .filter(Boolean)),
          (s[1] = s[1].slice(0, u))),
        (r = t(o.call(this, s[1].trim(), a), a)),
        r && s[0] === e && !x(r))
      )
        return r;
      x(r) || (r = $e(r)),
        r ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),
          (r = "")),
        l.length &&
          (r = l.reduce(
            (f, c) =>
              this.format(f, c, n.lng, { ...n, interpolationkey: s[1].trim() }),
            r.trim()
          )),
        (e = e.replace(s[0], r)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
const Rt = (i) => {
    let e = i.toLowerCase().trim();
    const t = {};
    if (i.indexOf("(") > -1) {
      const n = i.split("(");
      e = n[0].toLowerCase().trim();
      const s = n[1].substring(0, n[1].length - 1);
      e === "currency" && s.indexOf(":") < 0
        ? t.currency || (t.currency = s.trim())
        : e === "relativetime" && s.indexOf(":") < 0
        ? t.range || (t.range = s.trim())
        : s.split(";").forEach((a) => {
            if (a) {
              const [o, ...l] = a.split(":"),
                u = l
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                f = o.trim();
              t[f] || (t[f] = u),
                u === "false" && (t[f] = !1),
                u === "true" && (t[f] = !0),
                isNaN(u) || (t[f] = parseInt(u, 10));
            }
          });
    }
    return { formatName: e, formatOptions: t };
  },
  Ve = (i) => {
    const e = {};
    return (t, n, s) => {
      let r = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (r = { ...r, [s.interpolationkey]: void 0 });
      const a = n + JSON.stringify(r);
      let o = e[a];
      return o || ((o = i(te(n), s)), (e[a] = o)), o(t);
    };
  },
  Tt = (i) => (e, t, n) => i(te(t), n)(e);
class At {
  constructor(e = {}) {
    (this.logger = U.create("formatter")), (this.options = e), this.init(e);
  }
  init(e, t = { interpolation: {} }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const n = t.cacheInBuiltFormats ? Ve : Tt;
    this.formats = {
      number: n((s, r) => {
        const a = new Intl.NumberFormat(s, { ...r });
        return (o) => a.format(o);
      }),
      currency: n((s, r) => {
        const a = new Intl.NumberFormat(s, { ...r, style: "currency" });
        return (o) => a.format(o);
      }),
      datetime: n((s, r) => {
        const a = new Intl.DateTimeFormat(s, { ...r });
        return (o) => a.format(o);
      }),
      relativetime: n((s, r) => {
        const a = new Intl.RelativeTimeFormat(s, { ...r });
        return (o) => a.format(o, r.range || "day");
      }),
      list: n((s, r) => {
        const a = new Intl.ListFormat(s, { ...r });
        return (o) => a.format(o);
      }),
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Ve(t);
  }
  format(e, t, n, s = {}) {
    const r = t.split(this.formatSeparator);
    if (
      r.length > 1 &&
      r[0].indexOf("(") > 1 &&
      r[0].indexOf(")") < 0 &&
      r.find((o) => o.indexOf(")") > -1)
    ) {
      const o = r.findIndex((l) => l.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, o)].join(this.formatSeparator);
    }
    return r.reduce((o, l) => {
      var c;
      const { formatName: u, formatOptions: f } = Rt(l);
      if (this.formats[u]) {
        let p = o;
        try {
          const h =
              ((c = s == null ? void 0 : s.formatParams) == null
                ? void 0
                : c[s.interpolationkey]) || {},
            d = h.locale || h.lng || s.locale || s.lng || n;
          p = this.formats[u](o, d, { ...f, ...s, ...h });
        } catch (h) {
          this.logger.warn(h);
        }
        return p;
      } else this.logger.warn(`there was no format function for ${u}`);
      return o;
    }, e);
  }
}
const Ft = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class It extends de {
  constructor(e, t, n, s = {}) {
    var r, a;
    super(),
      (this.backend = e),
      (this.store = t),
      (this.services = n),
      (this.languageUtils = n.languageUtils),
      (this.options = s),
      (this.logger = U.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (a = (r = this.backend) == null ? void 0 : r.init) == null ||
        a.call(r, n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const r = {},
      a = {},
      o = {},
      l = {};
    return (
      e.forEach((u) => {
        let f = !0;
        t.forEach((c) => {
          const p = `${u}|${c}`;
          !n.reload && this.store.hasResourceBundle(u, c)
            ? (this.state[p] = 2)
            : this.state[p] < 0 ||
              (this.state[p] === 1
                ? a[p] === void 0 && (a[p] = !0)
                : ((this.state[p] = 1),
                  (f = !1),
                  a[p] === void 0 && (a[p] = !0),
                  r[p] === void 0 && (r[p] = !0),
                  l[c] === void 0 && (l[c] = !0)));
        }),
          f || (o[u] = !0);
      }),
      (Object.keys(r).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(r),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(o),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, t, n) {
    const s = e.split("|"),
      r = s[0],
      a = s[1];
    t && this.emit("failedLoading", r, a, t),
      !t &&
        n &&
        this.store.addResourceBundle(r, a, n, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2),
      t && n && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      vt(l.loaded, [r], a),
        Ft(l, e),
        t && l.errors.push(t),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            o[u] || (o[u] = {});
            const f = l.loaded[u];
            f.length &&
              f.forEach((c) => {
                o[u][c] === void 0 && (o[u][c] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", o),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(e, t, n, s = 0, r = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: s,
        wait: r,
        callback: a,
      });
      return;
    }
    this.readingCalls++;
    const o = (u, f) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const c = this.waitingReads.shift();
          this.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback);
        }
        if (u && f && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, n, s + 1, r * 2, a);
          }, r);
          return;
        }
        a(u, f);
      },
      l = this.backend[n].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function"
          ? u.then((f) => o(null, f)).catch(o)
          : o(null, u);
      } catch (u) {
        o(u);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t, n = {}, s) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        s && s()
      );
    x(e) && (e = this.languageUtils.toResolveHierarchy(e)), x(t) && (t = [t]);
    const r = this.queueLoad(e, t, n, s);
    if (!r.toLoad.length) return r.pending.length || s(), null;
    r.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, { reload: !0 }, n);
  }
  loadOne(e, t = "") {
    const n = e.split("|"),
      s = n[0],
      r = n[1];
    this.read(s, r, "read", void 0, void 0, (a, o) => {
      a &&
        this.logger.warn(
          `${t}loading namespace ${r} for language ${s} failed`,
          a
        ),
        !a &&
          o &&
          this.logger.log(`${t}loaded namespace ${r} for language ${s}`, o),
        this.loaded(e, a, o);
    });
  }
  saveMissing(e, t, n, s, r, a = {}, o = () => {}) {
    var l, u, f, c, p;
    if (
      (u = (l = this.services) == null ? void 0 : l.utils) != null &&
      u.hasLoadedNamespace &&
      !(
        (c = (f = this.services) == null ? void 0 : f.utils) != null &&
        c.hasLoadedNamespace(t)
      )
    ) {
      this.logger.warn(
        `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(n == null || n === "")) {
      if ((p = this.backend) != null && p.create) {
        const h = { ...a, isUpdate: r },
          d = this.backend.create.bind(this.backend);
        if (d.length < 6)
          try {
            let g;
            d.length === 5 ? (g = d(e, t, n, s, h)) : (g = d(e, t, n, s)),
              g && typeof g.then == "function"
                ? g.then((y) => o(null, y)).catch(o)
                : o(null, g);
          } catch (g) {
            o(g);
          }
        else d(e, t, n, s, o, h);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const He = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (i) => {
      let e = {};
      if (
        (typeof i[1] == "object" && (e = i[1]),
        x(i[1]) && (e.defaultValue = i[1]),
        x(i[2]) && (e.tDescription = i[2]),
        typeof i[2] == "object" || typeof i[3] == "object")
      ) {
        const t = i[3] || i[2];
        Object.keys(t).forEach((n) => {
          e[n] = t[n];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (i) => i,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  Ue = (i) => {
    var e, t;
    return (
      x(i.ns) && (i.ns = [i.ns]),
      x(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]),
      x(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]),
      ((t = (e = i.supportedLngs) == null ? void 0 : e.indexOf) == null
        ? void 0
        : t.call(e, "cimode")) < 0 &&
        (i.supportedLngs = i.supportedLngs.concat(["cimode"])),
      typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate),
      i
    );
  },
  ae = () => {},
  Dt = (i) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
      typeof i[t] == "function" && (i[t] = i[t].bind(i));
    });
  };
class ne extends de {
  constructor(e = {}, t) {
    if (
      (super(),
      (this.options = Ue(e)),
      (this.services = {}),
      (this.logger = U),
      (this.modules = { external: [] }),
      Dt(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initAsync) return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    (this.isInitializing = !0),
      typeof e == "function" && ((t = e), (e = {})),
      e.defaultNS == null &&
        e.ns &&
        (x(e.ns)
          ? (e.defaultNS = e.ns)
          : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const n = He();
    (this.options = { ...n, ...this.options, ...Ue(e) }),
      (this.options.interpolation = {
        ...n.interpolation,
        ...this.options.interpolation,
      }),
      e.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = e.keySeparator),
      e.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = e.nsSeparator);
    const s = (u) => (u ? (typeof u == "function" ? new u() : u) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? U.init(s(this.modules.logger), this.options)
        : U.init(null, this.options);
      let u;
      this.modules.formatter ? (u = this.modules.formatter) : (u = At);
      const f = new Ae(this.options);
      this.store = new je(this.options.resources, this.options);
      const c = this.services;
      (c.logger = U),
        (c.resourceStore = this.store),
        (c.languageUtils = f),
        (c.pluralResolver = new kt(f, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== n.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"
          ),
        u &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === n.interpolation.format) &&
          ((c.formatter = s(u)),
          c.formatter.init && c.formatter.init(c, this.options),
          (this.options.interpolation.format = c.formatter.format.bind(
            c.formatter
          ))),
        (c.interpolator = new jt(this.options)),
        (c.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (c.backendConnector = new It(
          s(this.modules.backend),
          c.resourceStore,
          c,
          this.options
        )),
        c.backendConnector.on("*", (h, ...d) => {
          this.emit(h, ...d);
        }),
        this.modules.languageDetector &&
          ((c.languageDetector = s(this.modules.languageDetector)),
          c.languageDetector.init &&
            c.languageDetector.init(c, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((c.i18nFormat = s(this.modules.i18nFormat)),
          c.i18nFormat.init && c.i18nFormat.init(this)),
        (this.translator = new fe(this.services, this.options)),
        this.translator.on("*", (h, ...d) => {
          this.emit(h, ...d);
        }),
        this.modules.external.forEach((h) => {
          h.init && h.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      t || (t = ae),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const u = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((u) => {
        this[u] = (...f) => this.store[u](...f);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((u) => {
        this[u] = (...f) => (this.store[u](...f), this);
      });
    const o = Z(),
      l = () => {
        const u = (f, c) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            o.resolve(c),
            t(f, c);
        };
        if (this.languages && !this.isInitialized)
          return u(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, u);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? l()
        : setTimeout(l, 0),
      o
    );
  }
  loadResources(e, t = ae) {
    var r, a;
    let n = t;
    const s = x(e) ? e : this.language;
    if (
      (typeof e == "function" && (n = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (s == null ? void 0 : s.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return n();
      const o = [],
        l = (u) => {
          if (!u || u === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(u).forEach((c) => {
            c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
          });
        };
      s
        ? l(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((f) => l(f)),
        (a = (r = this.options.preload) == null ? void 0 : r.forEach) == null ||
          a.call(r, (u) => l(u)),
        this.services.backendConnector.load(o, this.options.ns, (u) => {
          !u &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            n(u);
        });
    } else n(null);
  }
  reloadResources(e, t, n) {
    const s = Z();
    return (
      typeof e == "function" && ((n = e), (e = void 0)),
      typeof t == "function" && ((n = t), (t = void 0)),
      e || (e = this.languages),
      t || (t = this.options.ns),
      n || (n = ae),
      this.services.backendConnector.reload(e, t, (r) => {
        s.resolve(), n(r);
      }),
      s
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && tt.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (
          !(["cimode", "dev"].indexOf(n) > -1) &&
          this.store.hasLanguageSomeTranslations(n)
        ) {
          this.resolvedLanguage = n;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(e) < 0 &&
        this.store.hasLanguageSomeTranslations(e) &&
        ((this.resolvedLanguage = e), this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const n = Z();
    this.emit("languageChanging", e);
    const s = (o) => {
        (this.language = o),
          (this.languages = this.services.languageUtils.toResolveHierarchy(o)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(o);
      },
      r = (o, l) => {
        l
          ? this.isLanguageChangingTo === e &&
            (s(l),
            this.translator.changeLanguage(l),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", l),
            this.logger.log("languageChanged", l))
          : (this.isLanguageChangingTo = void 0),
          n.resolve((...u) => this.t(...u)),
          t && t(o, (...u) => this.t(...u));
      },
      a = (o) => {
        var f, c;
        !e && !o && this.services.languageDetector && (o = []);
        const l = x(o) ? o : o && o[0],
          u = this.store.hasLanguageSomeTranslations(l)
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(x(o) ? [o] : o);
        u &&
          (this.language || s(u),
          this.translator.language || this.translator.changeLanguage(u),
          (c =
            (f = this.services.languageDetector) == null
              ? void 0
              : f.cacheUserLanguage) == null || c.call(f, u)),
          this.loadResources(u, (p) => {
            r(p, u);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !e &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(e),
      n
    );
  }
  getFixedT(e, t, n) {
    const s = (r, a, ...o) => {
      let l;
      typeof a != "object"
        ? (l = this.options.overloadTranslationOptionHandler([r, a].concat(o)))
        : (l = { ...a }),
        (l.lng = l.lng || s.lng),
        (l.lngs = l.lngs || s.lngs),
        (l.ns = l.ns || s.ns),
        l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || n || s.keyPrefix);
      const u = this.options.keySeparator || ".";
      let f;
      return (
        l.keyPrefix && Array.isArray(r)
          ? (f = r.map(
              (c) => (
                typeof c == "function" &&
                  (c = be(c, { ...this.options, ...a })),
                `${l.keyPrefix}${u}${c}`
              )
            ))
          : (typeof r == "function" && (r = be(r, { ...this.options, ...a })),
            (f = l.keyPrefix ? `${l.keyPrefix}${u}${r}` : r)),
        this.t(f, l)
      );
    };
    return x(e) ? (s.lng = e) : (s.lngs = e), (s.ns = t), (s.keyPrefix = n), s;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const n = t.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      r = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const a = (o, l) => {
      const u = this.services.backendConnector.state[`${o}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(
      this.hasResourceBundle(n, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(n, e) && (!s || a(r, e)))
    );
  }
  loadNamespaces(e, t) {
    const n = Z();
    return this.options.ns
      ? (x(e) && (e = [e]),
        e.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          n.resolve(), t && t(s);
        }),
        n)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = Z();
    x(e) && (e = [e]);
    const s = this.options.preload || [],
      r = e.filter(
        (a) =>
          s.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a)
      );
    return r.length
      ? ((this.options.preload = s.concat(r)),
        this.loadResources((a) => {
          n.resolve(), t && t(a);
        }),
        n)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    var s, r;
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (((s = this.languages) == null ? void 0 : s.length) > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    try {
      const a = new Intl.Locale(e);
      if (a && a.getTextInfo) {
        const o = a.getTextInfo();
        if (o && o.direction) return o.direction;
      }
    } catch {}
    const t = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      n =
        ((r = this.services) == null ? void 0 : r.languageUtils) ||
        new Ae(He());
    return e.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : t.indexOf(n.getLanguagePartFromCode(e)) > -1 ||
        e.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance(e = {}, t) {
    return new ne(e, t);
  }
  cloneInstance(e = {}, t = ae) {
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const s = { ...this.options, ...e, isClone: !0 },
      r = new ne(s);
    if (
      ((e.debug !== void 0 || e.prefix !== void 0) &&
        (r.logger = r.logger.clone(e)),
      ["store", "services", "language"].forEach((o) => {
        r[o] = this[o];
      }),
      (r.services = { ...this.services }),
      (r.services.utils = { hasLoadedNamespace: r.hasLoadedNamespace.bind(r) }),
      n)
    ) {
      const o = Object.keys(this.store.data).reduce(
        (l, u) => (
          (l[u] = { ...this.store.data[u] }),
          (l[u] = Object.keys(l[u]).reduce(
            (f, c) => ((f[c] = { ...l[u][c] }), f),
            l[u]
          )),
          l
        ),
        {}
      );
      (r.store = new je(o, s)), (r.services.resourceStore = r.store);
    }
    return (
      (r.translator = new fe(r.services, s)),
      r.translator.on("*", (o, ...l) => {
        r.emit(o, ...l);
      }),
      r.init(s, t),
      (r.translator.options = s),
      (r.translator.backendConnector.services.utils = {
        hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
      }),
      r
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const I = ne.createInstance();
I.createInstance = ne.createInstance;
I.createInstance;
I.dir;
I.init;
I.loadResources;
I.reloadResources;
I.use;
I.changeLanguage;
I.getFixedT;
I.t;
I.exists;
I.setDefaultNamespace;
I.hasLoadedNamespace;
I.loadNamespaces;
I.loadLanguages;
var pe, Me;
function Vt() {
  return (
    Me ||
      ((Me = 1),
      (pe = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      })),
    pe
  );
}
var Ht = Vt();
const Ut = yt(Ht);
var Mt = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ke(i) {
  var e = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] },
    t = i.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    t &&
    ((e.name = t[1]),
    (Ut[t[1]] || i.charAt(i.length - 2) === "/") && (e.voidElement = !0),
    e.name.startsWith("!--"))
  ) {
    var n = i.indexOf("-->");
    return { type: "comment", comment: n !== -1 ? i.slice(4, n) : "" };
  }
  for (var s = new RegExp(Mt), r = null; (r = s.exec(i)) !== null; )
    if (r[0].trim())
      if (r[1]) {
        var a = r[1].trim(),
          o = [a, ""];
        a.indexOf("=") > -1 && (o = a.split("=")),
          (e.attrs[o[0]] = o[1]),
          s.lastIndex--;
      } else
        r[2] && (e.attrs[r[2]] = r[3].trim().substring(1, r[3].length - 1));
  return e;
}
var Kt = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  _t = /^\s*$/,
  qt = Object.create(null);
function st(i, e) {
  switch (e.type) {
    case "text":
      return i + e.content;
    case "tag":
      return (
        (i +=
          "<" +
          e.name +
          (e.attrs
            ? (function (t) {
                var n = [];
                for (var s in t) n.push(s + '="' + t[s] + '"');
                return n.length ? " " + n.join(" ") : "";
              })(e.attrs)
            : "") +
          (e.voidElement ? "/>" : ">")),
        e.voidElement ? i : i + e.children.reduce(st, "") + "</" + e.name + ">"
      );
    case "comment":
      return i + "<!--" + e.comment + "-->";
  }
}
var Bt = {
  parse: function (i, e) {
    e || (e = {}), e.components || (e.components = qt);
    var t,
      n = [],
      s = [],
      r = -1,
      a = !1;
    if (i.indexOf("<") !== 0) {
      var o = i.indexOf("<");
      n.push({ type: "text", content: o === -1 ? i : i.substring(0, o) });
    }
    return (
      i.replace(Kt, function (l, u) {
        if (a) {
          if (l !== "</" + t.name + ">") return;
          a = !1;
        }
        var f,
          c = l.charAt(1) !== "/",
          p = l.startsWith("<!--"),
          h = u + l.length,
          d = i.charAt(h);
        if (p) {
          var g = Ke(l);
          return r < 0 ? (n.push(g), n) : ((f = s[r]).children.push(g), n);
        }
        if (
          (c &&
            (r++,
            (t = Ke(l)).type === "tag" &&
              e.components[t.name] &&
              ((t.type = "component"), (a = !0)),
            t.voidElement ||
              a ||
              !d ||
              d === "<" ||
              t.children.push({
                type: "text",
                content: i.slice(h, i.indexOf("<", h)),
              }),
            r === 0 && n.push(t),
            (f = s[r - 1]) && f.children.push(t),
            (s[r] = t)),
          (!c || t.voidElement) &&
            (r > -1 &&
              (t.voidElement || t.name === l.slice(2, -1)) &&
              (r--, (t = r === -1 ? n : s[r])),
            !a && d !== "<" && d))
        ) {
          f = r === -1 ? n : s[r].children;
          var y = i.indexOf("<", h),
            b = i.slice(h, y === -1 ? void 0 : y);
          _t.test(b) && (b = " "),
            ((y > -1 && r + f.length >= 0) || b !== " ") &&
              f.push({ type: "text", content: b });
        }
      }),
      n
    );
  },
  stringify: function (i) {
    return i.reduce(function (e, t) {
      return e + st("", t);
    }, "");
  },
};
const oe = (i, e, t, n) => {
    var r, a, o, l;
    const s = [t, { code: e, ...(n || {}) }];
    if (
      (a = (r = i == null ? void 0 : i.services) == null ? void 0 : r.logger) !=
        null &&
      a.forward
    )
      return i.services.logger.forward(s, "warn", "react-i18next::", !0);
    H(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (l = (o = i == null ? void 0 : i.services) == null ? void 0 : o.logger) !=
        null && l.warn
        ? i.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s);
  },
  _e = {},
  se = (i, e, t, n) => {
    (H(t) && _e[t]) || (H(t) && (_e[t] = new Date()), oe(i, e, t, n));
  },
  it = (i, e) => () => {
    if (i.isInitialized) e();
    else {
      const t = () => {
        setTimeout(() => {
          i.off("initialized", t);
        }, 0),
          e();
      };
      i.on("initialized", t);
    }
  },
  ve = (i, e, t) => {
    i.loadNamespaces(e, it(i, t));
  },
  qe = (i, e, t, n) => {
    if (
      (H(t) && (t = [t]),
      i.options.preload && i.options.preload.indexOf(e) > -1)
    )
      return ve(i, t, n);
    t.forEach((s) => {
      i.options.ns.indexOf(s) < 0 && i.options.ns.push(s);
    }),
      i.loadLanguages(e, it(i, n));
  },
  zt = (i, e, t = {}) =>
    !e.languages || !e.languages.length
      ? (se(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: e.languages,
        }),
        !0)
      : e.hasLoadedNamespace(i, {
          lng: t.lng,
          precheck: (n, s) => {
            if (
              t.bindI18n &&
              t.bindI18n.indexOf("languageChanging") > -1 &&
              n.services.backendConnector.backend &&
              n.isLanguageChangingTo &&
              !s(n.isLanguageChangingTo, i)
            )
              return !1;
          },
        }),
  H = (i) => typeof i == "string",
  M = (i) => typeof i == "object" && i !== null,
  Xt =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Jt = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Wt = (i) => Jt[i],
  Qt = (i) => i.replace(Xt, Wt);
let Se = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Qt,
};
const Yt = (i = {}) => {
    Se = { ...Se, ...i };
  },
  rt = () => Se;
let at;
const Gt = (i) => {
    at = i;
  },
  Le = () => at,
  ge = (i, e) => {
    var n;
    if (!i) return !1;
    const t = ((n = i.props) == null ? void 0 : n.children) ?? i.children;
    return e ? t.length > 0 : !!t;
  },
  me = (i) => {
    var t, n;
    if (!i) return [];
    const e = ((t = i.props) == null ? void 0 : t.children) ?? i.children;
    return (n = i.props) != null && n.i18nIsDynamicList ? Q(e) : e;
  },
  Zt = (i) => Array.isArray(i) && i.every(N.isValidElement),
  Q = (i) => (Array.isArray(i) ? i : [i]),
  en = (i, e) => {
    const t = { ...e };
    return (t.props = Object.assign(i.props, e.props)), t;
  },
  ot = (i, e, t, n) => {
    if (!i) return "";
    let s = "";
    const r = Q(i),
      a =
        e != null && e.transSupportBasicHtmlNodes
          ? e.transKeepBasicHtmlNodesFor ?? []
          : [];
    return (
      r.forEach((o, l) => {
        if (H(o)) {
          s += `${o}`;
          return;
        }
        if (N.isValidElement(o)) {
          const { props: u, type: f } = o,
            c = Object.keys(u).length,
            p = a.indexOf(f) > -1,
            h = u.children;
          if (!h && p && !c) {
            s += `<${f}/>`;
            return;
          }
          if ((!h && (!p || c)) || u.i18nIsDynamicList) {
            s += `<${l}></${l}>`;
            return;
          }
          if (p && c === 1 && H(h)) {
            s += `<${f}>${h}</${f}>`;
            return;
          }
          const d = ot(h, e, t, n);
          s += `<${l}>${d}</${l}>`;
          return;
        }
        if (o === null) {
          oe(t, "TRANS_NULL_VALUE", "Passed in a null value as child", {
            i18nKey: n,
          });
          return;
        }
        if (M(o)) {
          const { format: u, ...f } = o,
            c = Object.keys(f);
          if (c.length === 1) {
            const p = u ? `${c[0]}, ${u}` : c[0];
            s += `{{${p}}}`;
            return;
          }
          oe(
            t,
            "TRANS_INVALID_OBJ",
            "Invalid child - Object should only have keys {{ value, format }} (format is optional).",
            { i18nKey: n, child: o }
          );
          return;
        }
        oe(
          t,
          "TRANS_INVALID_VAR",
          "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.",
          { i18nKey: n, child: o }
        );
      }),
      s
    );
  },
  tn = (i, e, t, n, s, r, a) => {
    if (t === "") return [];
    const o = s.transKeepBasicHtmlNodesFor || [],
      l = t && new RegExp(o.map((b) => `<${b}`).join("|")).test(t);
    if (!i && !e && !l && !a) return [t];
    const u = e ?? {},
      f = (b) => {
        Q(b).forEach((v) => {
          H(v) ||
            (ge(v)
              ? f(me(v))
              : M(v) && !N.isValidElement(v) && Object.assign(u, v));
        });
      };
    f(i);
    const c = Bt.parse(`<0>${t}</0>`),
      p = { ...u, ...r },
      h = (b, S, v) => {
        var O;
        const w = me(b),
          k = g(w, S.children, v);
        return (Zt(w) && k.length === 0) ||
          ((O = b.props) != null && O.i18nIsDynamicList)
          ? w
          : k;
      },
      d = (b, S, v, w, k) => {
        b.dummy
          ? ((b.children = S),
            v.push(N.cloneElement(b, { key: w }, k ? void 0 : S)))
          : v.push(
              ...N.Children.map([b], (O) => {
                const m = { ...O.props };
                return (
                  delete m.i18nIsDynamicList,
                  N.createElement(
                    O.type,
                    { ...m, key: w, ref: O.props.ref ?? O.ref },
                    k ? null : S
                  )
                );
              })
            );
      },
      g = (b, S, v) => {
        const w = Q(b);
        return Q(S).reduce((O, m, L) => {
          var C, R;
          const P =
            ((R = (C = m.children) == null ? void 0 : C[0]) == null
              ? void 0
              : R.content) &&
            n.services.interpolator.interpolate(
              m.children[0].content,
              p,
              n.language
            );
          if (m.type === "tag") {
            let T = w[parseInt(m.name, 10)];
            !T && e && (T = e[m.name]),
              v.length === 1 && !T && (T = v[0][m.name]),
              T || (T = {});
            const $ =
                Object.keys(m.attrs).length !== 0
                  ? en({ props: m.attrs }, T)
                  : T,
              j = N.isValidElement($),
              _ = j && ge(m, !0) && !m.voidElement,
              F = l && M($) && $.dummy && !j,
              D = M(e) && Object.hasOwnProperty.call(e, m.name);
            if (H($)) {
              const E = n.services.interpolator.interpolate($, p, n.language);
              O.push(E);
            } else if (ge($) || _) {
              const E = h($, m, v);
              d($, E, O, L);
            } else if (F) {
              const E = g(w, m.children, v);
              d($, E, O, L);
            } else if (Number.isNaN(parseFloat(m.name)))
              if (D) {
                const E = h($, m, v);
                d($, E, O, L, m.voidElement);
              } else if (s.transSupportBasicHtmlNodes && o.indexOf(m.name) > -1)
                if (m.voidElement)
                  O.push(N.createElement(m.name, { key: `${m.name}-${L}` }));
                else {
                  const E = g(w, m.children, v);
                  O.push(N.createElement(m.name, { key: `${m.name}-${L}` }, E));
                }
              else if (m.voidElement) O.push(`<${m.name} />`);
              else {
                const E = g(w, m.children, v);
                O.push(`<${m.name}>${E}</${m.name}>`);
              }
            else if (M($) && !j) {
              const E = m.children[0] ? P : null;
              E && O.push(E);
            } else d($, P, O, L, m.children.length !== 1 || !P);
          } else if (m.type === "text") {
            const T = s.transWrapTextNodes,
              $ = a
                ? s.unescape(
                    n.services.interpolator.interpolate(
                      m.content,
                      p,
                      n.language
                    )
                  )
                : n.services.interpolator.interpolate(m.content, p, n.language);
            T
              ? O.push(N.createElement(T, { key: `${m.name}-${L}` }, $))
              : O.push($);
          }
          return O;
        }, []);
      },
      y = g([{ dummy: !0, children: i || [] }], c, Q(i || []));
    return me(y[0]);
  },
  lt = (i, e, t) => {
    const n = i.key || e,
      s = N.cloneElement(i, { key: n });
    if (
      !s.props ||
      !s.props.children ||
      (t.indexOf(`${e}/>`) < 0 && t.indexOf(`${e} />`) < 0)
    )
      return s;
    function r() {
      return N.createElement(N.Fragment, null, s);
    }
    return N.createElement(r, { key: n });
  },
  nn = (i, e) => i.map((t, n) => lt(t, n, e)),
  sn = (i, e) => {
    const t = {};
    return (
      Object.keys(i).forEach((n) => {
        Object.assign(t, { [n]: lt(i[n], n, e) });
      }),
      t
    );
  },
  rn = (i, e, t, n) =>
    i
      ? Array.isArray(i)
        ? nn(i, e)
        : M(i)
        ? sn(i, e)
        : (se(
            t,
            "TRANS_INVALID_COMPONENTS",
            '<Trans /> "components" prop expects an object or array',
            { i18nKey: n }
          ),
          null)
      : null,
  an = (i) =>
    !M(i) || Array.isArray(i)
      ? !1
      : Object.keys(i).reduce(
          (e, t) => e && Number.isNaN(Number.parseFloat(t)),
          !0
        );
function on({
  children: i,
  count: e,
  parent: t,
  i18nKey: n,
  context: s,
  tOptions: r = {},
  values: a,
  defaults: o,
  components: l,
  ns: u,
  i18n: f,
  t: c,
  shouldUnescape: p,
  ...h
}) {
  var j, _, F, D, E, q;
  const d = f || Le();
  if (!d)
    return (
      se(
        d,
        "NO_I18NEXT_INSTANCE",
        "Trans: You need to pass in an i18next instance using i18nextReactModule",
        { i18nKey: n }
      ),
      i
    );
  const g = c || d.t.bind(d) || ((re) => re),
    y = { ...rt(), ...((j = d.options) == null ? void 0 : j.react) };
  let b = u || g.ns || ((_ = d.options) == null ? void 0 : _.defaultNS);
  b = H(b) ? [b] : b || ["translation"];
  const S = ot(i, y, d, n),
    v = o || S || y.transEmptyNodeValue || n,
    { hashTransKey: w } = y,
    k = n || (w ? w(S || v) : S || v);
  (D = (F = d.options) == null ? void 0 : F.interpolation) != null &&
    D.defaultVariables &&
    (a =
      a && Object.keys(a).length > 0
        ? { ...a, ...d.options.interpolation.defaultVariables }
        : { ...d.options.interpolation.defaultVariables });
  const O =
      a ||
      (e !== void 0 &&
        !(
          (q = (E = d.options) == null ? void 0 : E.interpolation) != null &&
          q.alwaysFormat
        )) ||
      !i
        ? r.interpolation
        : {
            interpolation: { ...r.interpolation, prefix: "#$?", suffix: "?$#" },
          },
    m = {
      ...r,
      context: s || r.context,
      count: e,
      ...a,
      ...O,
      defaultValue: v,
      ns: b,
    },
    L = k ? g(k, m) : v,
    P = rn(l, L, d, n);
  let C = P || i,
    R = null;
  an(P) && ((R = P), (C = i));
  const T = tn(C, R, L, d, y, m, p),
    $ = t ?? y.defaultTransParent;
  return $ ? N.createElement($, h, T) : T;
}
const _n = {
    type: "3rdParty",
    init(i) {
      Yt(i.options.react), Gt(i);
    },
  },
  ut = N.createContext();
class ln {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function qn({
  children: i,
  count: e,
  parent: t,
  i18nKey: n,
  context: s,
  tOptions: r = {},
  values: a,
  defaults: o,
  components: l,
  ns: u,
  i18n: f,
  t: c,
  shouldUnescape: p,
  ...h
}) {
  var S;
  const { i18n: d, defaultNS: g } = N.useContext(ut) || {},
    y = f || d || Le(),
    b = c || (y == null ? void 0 : y.t.bind(y));
  return on({
    children: i,
    count: e,
    parent: t,
    i18nKey: n,
    context: s,
    tOptions: r,
    values: a,
    defaults: o,
    components: l,
    ns:
      u ||
      (b == null ? void 0 : b.ns) ||
      g ||
      ((S = y == null ? void 0 : y.options) == null ? void 0 : S.defaultNS),
    i18n: y,
    t: c,
    shouldUnescape: p,
    ...h,
  });
}
const un = (i, e) => {
    const t = N.useRef();
    return (
      N.useEffect(() => {
        t.current = i;
      }, [i, e]),
      t.current
    );
  },
  ft = (i, e, t, n) => i.getFixedT(e, t, n),
  fn = (i, e, t, n) => N.useCallback(ft(i, e, t, n), [i, e, t, n]),
  Bn = (i, e = {}) => {
    var w, k, O, m;
    const { i18n: t } = e,
      { i18n: n, defaultNS: s } = N.useContext(ut) || {},
      r = t || n || Le();
    if ((r && !r.reportNamespaces && (r.reportNamespaces = new ln()), !r)) {
      se(
        r,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
      );
      const L = (C, R) =>
          H(R)
            ? R
            : M(R) && H(R.defaultValue)
            ? R.defaultValue
            : Array.isArray(C)
            ? C[C.length - 1]
            : C,
        P = [L, {}, !1];
      return (P.t = L), (P.i18n = {}), (P.ready = !1), P;
    }
    (w = r.options.react) != null &&
      w.wait &&
      se(
        r,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const a = { ...rt(), ...r.options.react, ...e },
      { useSuspense: o, keyPrefix: l } = a;
    let u = s || ((k = r.options) == null ? void 0 : k.defaultNS);
    (u = H(u) ? [u] : u || ["translation"]),
      (m = (O = r.reportNamespaces).addUsedNamespaces) == null || m.call(O, u);
    const f =
        (r.isInitialized || r.initializedStoreOnce) &&
        u.every((L) => zt(L, r, a)),
      c = fn(r, e.lng || null, a.nsMode === "fallback" ? u : u[0], l),
      p = () => c,
      h = () => ft(r, e.lng || null, a.nsMode === "fallback" ? u : u[0], l),
      [d, g] = N.useState(p);
    let y = u.join();
    e.lng && (y = `${e.lng}${y}`);
    const b = un(y),
      S = N.useRef(!0);
    N.useEffect(() => {
      const { bindI18n: L, bindI18nStore: P } = a;
      (S.current = !0),
        !f &&
          !o &&
          (e.lng
            ? qe(r, e.lng, u, () => {
                S.current && g(h);
              })
            : ve(r, u, () => {
                S.current && g(h);
              })),
        f && b && b !== y && S.current && g(h);
      const C = () => {
        S.current && g(h);
      };
      return (
        L && (r == null || r.on(L, C)),
        P && (r == null || r.store.on(P, C)),
        () => {
          (S.current = !1),
            r && L && (L == null || L.split(" ").forEach((R) => r.off(R, C))),
            P && r && P.split(" ").forEach((R) => r.store.off(R, C));
        }
      );
    }, [r, y]),
      N.useEffect(() => {
        S.current && f && g(p);
      }, [r, l, f]);
    const v = [d, r, f];
    if (((v.t = d), (v.i18n = r), (v.ready = f), f || (!f && !o))) return v;
    throw new Promise((L) => {
      e.lng ? qe(r, e.lng, u, () => L()) : ve(r, u, () => L());
    });
  },
  { slice: cn, forEach: dn } = [];
function hn(i) {
  return (
    dn.call(cn.call(arguments, 1), (e) => {
      if (e) for (const t in e) i[t] === void 0 && (i[t] = e[t]);
    }),
    i
  );
}
function pn(i) {
  return typeof i != "string"
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((t) => t.test(i));
}
const Be = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  gn = function (i, e) {
    const n =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      s = encodeURIComponent(e);
    let r = `${i}=${s}`;
    if (n.maxAge > 0) {
      const a = n.maxAge - 0;
      if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
      r += `; Max-Age=${Math.floor(a)}`;
    }
    if (n.domain) {
      if (!Be.test(n.domain)) throw new TypeError("option domain is invalid");
      r += `; Domain=${n.domain}`;
    }
    if (n.path) {
      if (!Be.test(n.path)) throw new TypeError("option path is invalid");
      r += `; Path=${n.path}`;
    }
    if (n.expires) {
      if (typeof n.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      r += `; Expires=${n.expires.toUTCString()}`;
    }
    if (
      (n.httpOnly && (r += "; HttpOnly"),
      n.secure && (r += "; Secure"),
      n.sameSite)
    )
      switch (
        typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
      ) {
        case !0:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return n.partitioned && (r += "; Partitioned"), r;
  },
  ze = {
    create(i, e, t, n) {
      let s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      t &&
        ((s.expires = new Date()),
        s.expires.setTime(s.expires.getTime() + t * 60 * 1e3)),
        n && (s.domain = n),
        (document.cookie = gn(i, e, s));
    },
    read(i) {
      const e = `${i}=`,
        t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        let s = t[n];
        for (; s.charAt(0) === " "; ) s = s.substring(1, s.length);
        if (s.indexOf(e) === 0) return s.substring(e.length, s.length);
      }
      return null;
    },
    remove(i, e) {
      this.create(i, "", -1, e);
    },
  };
var mn = {
    name: "cookie",
    lookup(i) {
      let { lookupCookie: e } = i;
      if (e && typeof document < "u") return ze.read(e) || void 0;
    },
    cacheUserLanguage(i, e) {
      let {
        lookupCookie: t,
        cookieMinutes: n,
        cookieDomain: s,
        cookieOptions: r,
      } = e;
      t && typeof document < "u" && ze.create(t, i, n, s, r);
    },
  },
  yn = {
    name: "querystring",
    lookup(i) {
      var n;
      let { lookupQuerystring: e } = i,
        t;
      if (typeof window < "u") {
        let { search: s } = window.location;
        !window.location.search &&
          ((n = window.location.hash) == null ? void 0 : n.indexOf("?")) > -1 &&
          (s = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        const a = s.substring(1).split("&");
        for (let o = 0; o < a.length; o++) {
          const l = a[o].indexOf("=");
          l > 0 && a[o].substring(0, l) === e && (t = a[o].substring(l + 1));
        }
      }
      return t;
    },
  },
  xn = {
    name: "hash",
    lookup(i) {
      var s;
      let { lookupHash: e, lookupFromHashIndex: t } = i,
        n;
      if (typeof window < "u") {
        const { hash: r } = window.location;
        if (r && r.length > 2) {
          const a = r.substring(1);
          if (e) {
            const o = a.split("&");
            for (let l = 0; l < o.length; l++) {
              const u = o[l].indexOf("=");
              u > 0 &&
                o[l].substring(0, u) === e &&
                (n = o[l].substring(u + 1));
            }
          }
          if (n) return n;
          if (!n && t > -1) {
            const o = r.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(o)
              ? (s = o[typeof t == "number" ? t : 0]) == null
                ? void 0
                : s.replace("/", "")
              : void 0;
          }
        }
      }
      return n;
    },
  };
let J = null;
const Xe = () => {
  if (J !== null) return J;
  try {
    if (((J = typeof window < "u" && window.localStorage !== null), !J))
      return !1;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    J = !1;
  }
  return J;
};
var bn = {
  name: "localStorage",
  lookup(i) {
    let { lookupLocalStorage: e } = i;
    if (e && Xe()) return window.localStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(i, e) {
    let { lookupLocalStorage: t } = e;
    t && Xe() && window.localStorage.setItem(t, i);
  },
};
let W = null;
const Je = () => {
  if (W !== null) return W;
  try {
    if (((W = typeof window < "u" && window.sessionStorage !== null), !W))
      return !1;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"),
      window.sessionStorage.removeItem(i);
  } catch {
    W = !1;
  }
  return W;
};
var vn = {
    name: "sessionStorage",
    lookup(i) {
      let { lookupSessionStorage: e } = i;
      if (e && Je()) return window.sessionStorage.getItem(e) || void 0;
    },
    cacheUserLanguage(i, e) {
      let { lookupSessionStorage: t } = e;
      t && Je() && window.sessionStorage.setItem(t, i);
    },
  },
  Sn = {
    name: "navigator",
    lookup(i) {
      const e = [];
      if (typeof navigator < "u") {
        const { languages: t, userLanguage: n, language: s } = navigator;
        if (t) for (let r = 0; r < t.length; r++) e.push(t[r]);
        n && e.push(n), s && e.push(s);
      }
      return e.length > 0 ? e : void 0;
    },
  },
  wn = {
    name: "htmlTag",
    lookup(i) {
      let { htmlTag: e } = i,
        t;
      const n = e || (typeof document < "u" ? document.documentElement : null);
      return (
        n &&
          typeof n.getAttribute == "function" &&
          (t = n.getAttribute("lang")),
        t
      );
    },
  },
  On = {
    name: "path",
    lookup(i) {
      var s;
      let { lookupFromPathIndex: e } = i;
      if (typeof window > "u") return;
      const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(t)
        ? (s = t[typeof e == "number" ? e : 0]) == null
          ? void 0
          : s.replace("/", "")
        : void 0;
    },
  },
  Ln = {
    name: "subdomain",
    lookup(i) {
      var s, r;
      let { lookupFromSubdomainIndex: e } = i;
      const t = typeof e == "number" ? e + 1 : 1,
        n =
          typeof window < "u" &&
          ((r = (s = window.location) == null ? void 0 : s.hostname) == null
            ? void 0
            : r.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
              ));
      if (n) return n[t];
    },
  };
let ct = !1;
try {
  document.cookie, (ct = !0);
} catch {}
const dt = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
ct || dt.splice(1, 1);
const Pn = () => ({
  order: dt,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (i) => i,
});
class Cn {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = "languageDetector"), (this.detectors = {}), this.init(e, t);
  }
  init() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = e),
      (this.options = hn(t, this.options || {}, Pn())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (s) => s.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = n),
      this.addDetector(mn),
      this.addDetector(yn),
      this.addDetector(bn),
      this.addDetector(vn),
      this.addDetector(Sn),
      this.addDetector(wn),
      this.addDetector(On),
      this.addDetector(Ln),
      this.addDetector(xn);
  }
  addDetector(e) {
    return (this.detectors[e.name] = e), this;
  }
  detect() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      t = [];
    return (
      e.forEach((n) => {
        if (this.detectors[n]) {
          let s = this.detectors[n].lookup(this.options);
          s && typeof s == "string" && (s = [s]), s && (t = t.concat(s));
        }
      }),
      (t = t
        .filter((n) => n != null && !pn(n))
        .map((n) => this.options.convertDetectedLanguage(n))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? t
        : t.length > 0
        ? t[0]
        : null
    );
  }
  cacheUserLanguage(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    t &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(e) > -1) ||
        t.forEach((n) => {
          this.detectors[n] &&
            this.detectors[n].cacheUserLanguage(e, this.options);
        }));
  }
}
Cn.type = "languageDetector";
function we(i) {
  "@babel/helpers - typeof";
  return (
    (we =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    we(i)
  );
}
function ht() {
  return (
    typeof XMLHttpRequest == "function" ||
    (typeof XMLHttpRequest > "u" ? "undefined" : we(XMLHttpRequest)) ===
      "object"
  );
}
function $n(i) {
  return !!i && typeof i.then == "function";
}
function Nn(i) {
  return $n(i) ? i : Promise.resolve(i);
}
function We(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    e &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(i, s).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function Qe(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? We(Object(t), !0).forEach(function (n) {
          En(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
      : We(Object(t)).forEach(function (n) {
          Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return i;
}
function En(i, e, t) {
  return (
    (e = kn(e)) in i
      ? Object.defineProperty(i, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[e] = t),
    i
  );
}
function kn(i) {
  var e = jn(i, "string");
  return z(e) == "symbol" ? e : e + "";
}
function jn(i, e) {
  if (z(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (z(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function z(i) {
  "@babel/helpers - typeof";
  return (
    (z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    z(i)
  );
}
var K = typeof fetch == "function" ? fetch : void 0;
typeof A < "u" && A.fetch
  ? (K = A.fetch)
  : typeof window < "u" && window.fetch && (K = window.fetch);
var ie;
ht() &&
  (typeof A < "u" && A.XMLHttpRequest
    ? (ie = A.XMLHttpRequest)
    : typeof window < "u" &&
      window.XMLHttpRequest &&
      (ie = window.XMLHttpRequest));
var ce;
typeof ActiveXObject == "function" &&
  (typeof A < "u" && A.ActiveXObject
    ? (ce = A.ActiveXObject)
    : typeof window < "u" &&
      window.ActiveXObject &&
      (ce = window.ActiveXObject));
typeof K != "function" && (K = void 0);
if (!K && !ie && !ce)
  try {
    mt(
      () => import("./browser-ponyfill-zt2sVDZK.js").then((i) => i.b),
      __vite__mapDeps([0, 1])
    )
      .then(function (i) {
        K = i.default;
      })
      .catch(function () {});
  } catch {}
var Oe = function (e, t) {
    if (t && z(t) === "object") {
      var n = "";
      for (var s in t)
        n += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(t[s]);
      if (!n) return e;
      e = e + (e.indexOf("?") !== -1 ? "&" : "?") + n.slice(1);
    }
    return e;
  },
  Ye = function (e, t, n, s) {
    var r = function (l) {
      if (!l.ok) return n(l.statusText || "Error", { status: l.status });
      l.text()
        .then(function (u) {
          n(null, { status: l.status, data: u });
        })
        .catch(n);
    };
    if (s) {
      var a = s(e, t);
      if (a instanceof Promise) {
        a.then(r).catch(n);
        return;
      }
    }
    typeof fetch == "function"
      ? fetch(e, t).then(r).catch(n)
      : K(e, t).then(r).catch(n);
  },
  Ge = !1,
  Rn = function (e, t, n, s) {
    e.queryStringParams && (t = Oe(t, e.queryStringParams));
    var r = Qe(
      {},
      typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders
    );
    typeof window > "u" &&
      typeof A < "u" &&
      typeof A.process < "u" &&
      A.process.versions &&
      A.process.versions.node &&
      (r["User-Agent"] = "i18next-http-backend (node/"
        .concat(A.process.version, "; ")
        .concat(A.process.platform, " ")
        .concat(A.process.arch, ")")),
      n && (r["Content-Type"] = "application/json");
    var a =
        typeof e.requestOptions == "function"
          ? e.requestOptions(n)
          : e.requestOptions,
      o = Qe(
        {
          method: n ? "POST" : "GET",
          body: n ? e.stringify(n) : void 0,
          headers: r,
        },
        Ge ? {} : a
      ),
      l =
        typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1
          ? e.alternateFetch
          : void 0;
    try {
      Ye(t, o, s, l);
    } catch (u) {
      if (
        !a ||
        Object.keys(a).length === 0 ||
        !u.message ||
        u.message.indexOf("not implemented") < 0
      )
        return s(u);
      try {
        Object.keys(a).forEach(function (f) {
          delete o[f];
        }),
          Ye(t, o, s, l),
          (Ge = !0);
      } catch (f) {
        s(f);
      }
    }
  },
  Tn = function (e, t, n, s) {
    n && z(n) === "object" && (n = Oe("", n).slice(1)),
      e.queryStringParams && (t = Oe(t, e.queryStringParams));
    try {
      var r = ie ? new ie() : new ce("MSXML2.XMLHTTP.3.0");
      r.open(n ? "POST" : "GET", t, 1),
        e.crossDomain ||
          r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        (r.withCredentials = !!e.withCredentials),
        n &&
          r.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
        r.overrideMimeType && r.overrideMimeType("application/json");
      var a = e.customHeaders;
      if (((a = typeof a == "function" ? a() : a), a))
        for (var o in a) r.setRequestHeader(o, a[o]);
      (r.onreadystatechange = function () {
        r.readyState > 3 &&
          s(r.status >= 400 ? r.statusText : null, {
            status: r.status,
            data: r.responseText,
          });
      }),
        r.send(n);
    } catch (l) {
      console && console.log(l);
    }
  },
  An = function (e, t, n, s) {
    if (
      (typeof n == "function" && ((s = n), (n = void 0)),
      (s = s || function () {}),
      K && t.indexOf("file:") !== 0)
    )
      return Rn(e, t, n, s);
    if (ht() || typeof ActiveXObject == "function") return Tn(e, t, n, s);
    s(new Error("No fetch and no xhr implementation found!"));
  };
function Y(i) {
  "@babel/helpers - typeof";
  return (
    (Y =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Y(i)
  );
}
function Ze(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    e &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(i, s).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function ye(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ze(Object(t), !0).forEach(function (n) {
          pt(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
      : Ze(Object(t)).forEach(function (n) {
          Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return i;
}
function Fn(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function In(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(i, gt(n.key), n);
  }
}
function Dn(i, e, t) {
  return (
    e && In(i.prototype, e),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function pt(i, e, t) {
  return (
    (e = gt(e)) in i
      ? Object.defineProperty(i, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[e] = t),
    i
  );
}
function gt(i) {
  var e = Vn(i, "string");
  return Y(e) == "symbol" ? e : e + "";
}
function Vn(i, e) {
  if (Y(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (Y(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var Hn = function () {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      parse: function (t) {
        return JSON.parse(t);
      },
      stringify: JSON.stringify,
      parsePayload: function (t, n, s) {
        return pt({}, n, s || "");
      },
      parseLoadPayload: function (t, n) {},
      request: An,
      reloadInterval: typeof window < "u" ? !1 : 3600 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
      },
    };
  },
  Un = (function () {
    function i(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Fn(this, i),
        (this.services = e),
        (this.options = t),
        (this.allOptions = n),
        (this.type = "backend"),
        this.init(e, t, n);
    }
    return Dn(i, [
      {
        key: "init",
        value: function (t) {
          var n = this,
            s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            r =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          if (
            ((this.services = t),
            (this.options = ye(ye(ye({}, Hn()), this.options || {}), s)),
            (this.allOptions = r),
            this.services && this.options.reloadInterval)
          ) {
            var a = setInterval(function () {
              return n.reload();
            }, this.options.reloadInterval);
            Y(a) === "object" && typeof a.unref == "function" && a.unref();
          }
        },
      },
      {
        key: "readMulti",
        value: function (t, n, s) {
          this._readAny(t, t, n, n, s);
        },
      },
      {
        key: "read",
        value: function (t, n, s) {
          this._readAny([t], t, [n], n, s);
        },
      },
      {
        key: "_readAny",
        value: function (t, n, s, r, a) {
          var o = this,
            l = this.options.loadPath;
          typeof this.options.loadPath == "function" &&
            (l = this.options.loadPath(t, s)),
            (l = Nn(l)),
            l.then(function (u) {
              if (!u) return a(null, {});
              var f = o.services.interpolator.interpolate(u, {
                lng: t.join("+"),
                ns: s.join("+"),
              });
              o.loadUrl(f, a, n, r);
            });
        },
      },
      {
        key: "loadUrl",
        value: function (t, n, s, r) {
          var a = this,
            o = typeof s == "string" ? [s] : s,
            l = typeof r == "string" ? [r] : r,
            u = this.options.parseLoadPayload(o, l);
          this.options.request(this.options, t, u, function (f, c) {
            if (c && ((c.status >= 500 && c.status < 600) || !c.status))
              return n(
                "failed loading " + t + "; status code: " + c.status,
                !0
              );
            if (c && c.status >= 400 && c.status < 500)
              return n(
                "failed loading " + t + "; status code: " + c.status,
                !1
              );
            if (!c && f && f.message) {
              var p = f.message.toLowerCase(),
                h = ["failed", "fetch", "network", "load"].find(function (y) {
                  return p.indexOf(y) > -1;
                });
              if (h) return n("failed loading " + t + ": " + f.message, !0);
            }
            if (f) return n(f, !1);
            var d, g;
            try {
              typeof c.data == "string"
                ? (d = a.options.parse(c.data, s, r))
                : (d = c.data);
            } catch {
              g = "failed parsing " + t + " to json";
            }
            if (g) return n(g, !1);
            n(null, d);
          });
        },
      },
      {
        key: "create",
        value: function (t, n, s, r, a) {
          var o = this;
          if (this.options.addPath) {
            typeof t == "string" && (t = [t]);
            var l = this.options.parsePayload(n, s, r),
              u = 0,
              f = [],
              c = [];
            t.forEach(function (p) {
              var h = o.options.addPath;
              typeof o.options.addPath == "function" &&
                (h = o.options.addPath(p, n));
              var d = o.services.interpolator.interpolate(h, { lng: p, ns: n });
              o.options.request(o.options, d, l, function (g, y) {
                (u += 1),
                  f.push(g),
                  c.push(y),
                  u === t.length && typeof a == "function" && a(f, c);
              });
            });
          }
        },
      },
      {
        key: "reload",
        value: function () {
          var t = this,
            n = this.services,
            s = n.backendConnector,
            r = n.languageUtils,
            a = n.logger,
            o = s.language;
          if (!(o && o.toLowerCase() === "cimode")) {
            var l = [],
              u = function (c) {
                var p = r.toResolveHierarchy(c);
                p.forEach(function (h) {
                  l.indexOf(h) < 0 && l.push(h);
                });
              };
            u(o),
              this.allOptions.preload &&
                this.allOptions.preload.forEach(function (f) {
                  return u(f);
                }),
              l.forEach(function (f) {
                t.allOptions.ns.forEach(function (c) {
                  s.read(f, c, "read", null, null, function (p, h) {
                    p &&
                      a.warn(
                        "loading namespace "
                          .concat(c, " for language ")
                          .concat(f, " failed"),
                        p
                      ),
                      !p &&
                        h &&
                        a.log(
                          "loaded namespace "
                            .concat(c, " for language ")
                            .concat(f),
                          h
                        ),
                      s.loaded("".concat(f, "|").concat(c), p, h);
                  });
                });
              });
          }
        },
      },
    ]);
  })();
Un.type = "backend";
export { Un as B, qn as T, Cn as a, _n as b, I as i, Bn as u };
