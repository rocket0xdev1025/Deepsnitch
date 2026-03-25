import { r as y, R as Us } from "./wallet-libs-C4iBya-7.js";
import "./crypto-libs-BTkSibId.js";
const ce = y.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ue = y.createContext({}),
  fe = y.createContext(null),
  he = typeof document < "u",
  yt = he ? y.useLayoutEffect : y.useEffect,
  Ns = y.createContext({ strict: !1 }),
  Qe = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  pr = "framerAppearId",
  Ws = "data-" + Qe(pr);
function mr(t, e, n, s) {
  const { visualElement: i } = y.useContext(ue),
    o = y.useContext(Ns),
    r = y.useContext(fe),
    a = y.useContext(ce).reducedMotion,
    l = y.useRef();
  (s = s || o.renderer),
    !l.current &&
      s &&
      (l.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: r,
        blockInitialAnimation: r ? r.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const c = l.current;
  y.useInsertionEffect(() => {
    c && c.update(n, r);
  });
  const u = y.useRef(!!(n[Ws] && !window.HandoffComplete));
  return (
    yt(() => {
      c &&
        (c.render(),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    y.useEffect(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function Pt(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function gr(t, e, n) {
  return y.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : Pt(n) && (n.current = s));
    },
    [e]
  );
}
function jt(t) {
  return typeof t == "string" || Array.isArray(t);
}
function de(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const tn = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  en = ["initial", ...tn];
function pe(t) {
  return de(t.animate) || en.some((e) => jt(t[e]));
}
function zs(t) {
  return !!(pe(t) || t.variants);
}
function yr(t, e) {
  if (pe(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || jt(n) ? n : void 0,
      animate: jt(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function vr(t) {
  const { initial: e, animate: n } = yr(t, y.useContext(ue));
  return y.useMemo(() => ({ initial: e, animate: n }), [Dn(e), Dn(n)]);
}
function Dn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const En = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ut = {};
for (const t in En) Ut[t] = { isEnabled: (e) => En[t].some((n) => !!e[n]) };
function xr(t) {
  for (const e in t) Ut[e] = { ...Ut[e], ...t[e] };
}
const nn = y.createContext({}),
  Hs = y.createContext({}),
  Pr = Symbol.for("motionComponentSymbol");
function Tr({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i,
}) {
  t && xr(t);
  function o(a, l) {
    let c;
    const u = { ...y.useContext(ce), ...a, layoutId: br(a) },
      { isStatic: f } = u,
      h = vr(a),
      d = s(a, f);
    if (!f && he) {
      h.visualElement = mr(i, d, u, e);
      const p = y.useContext(Hs),
        m = y.useContext(Ns).strict;
      h.visualElement && (c = h.visualElement.loadFeatures(u, m, t, p));
    }
    return y.createElement(
      ue.Provider,
      { value: h },
      c && h.visualElement
        ? y.createElement(c, { visualElement: h.visualElement, ...u })
        : null,
      n(i, a, gr(d, h.visualElement, l), d, f, h.visualElement)
    );
  }
  const r = y.forwardRef(o);
  return (r[Pr] = i), r;
}
function br({ layoutId: t }) {
  const e = y.useContext(nn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Vr(t) {
  function e(s, i = {}) {
    return Tr(t(s, i));
  }
  if (typeof Proxy > "u") return e;
  const n = new Map();
  return new Proxy(e, {
    get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
  });
}
const Sr = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function sn(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Sr.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const ne = {};
function Ar(t) {
  Object.assign(ne, t);
}
const zt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vt = new Set(zt);
function Gs(t, { layout: e, layoutId: n }) {
  return (
    vt.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!ne[t] || t === "opacity"))
  );
}
const I = (t) => !!(t && t.getVelocity),
  wr = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Cr = zt.length;
function Mr(
  t,
  { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 },
  s,
  i
) {
  let o = "";
  for (let r = 0; r < Cr; r++) {
    const a = zt[r];
    if (t[a] !== void 0) {
      const l = wr[a] || a;
      o += `${l}(${t[a]}) `;
    }
  }
  return (
    e && !t.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(t, s ? "" : o)) : n && s && (o = "none"),
    o
  );
}
const $s = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Ks = $s("--"),
  Oe = $s("var(--"),
  Dr =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Er = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  at = (t, e, n) => Math.min(Math.max(n, t), e),
  xt = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Rt = { ...xt, transform: (t) => at(0, 1, t) },
  Xt = { ...xt, default: 1 },
  Bt = (t) => Math.round(t * 1e5) / 1e5,
  me = /(-)?([\d]*\.?[\d])+/g,
  _s =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Lr =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ht(t) {
  return typeof t == "string";
}
const Gt = (t) => ({
    test: (e) => Ht(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  nt = Gt("deg"),
  X = Gt("%"),
  V = Gt("px"),
  Rr = Gt("vh"),
  Br = Gt("vw"),
  Ln = {
    ...X,
    parse: (t) => X.parse(t) / 100,
    transform: (t) => X.transform(t * 100),
  },
  Rn = { ...xt, transform: Math.round },
  Xs = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: nt,
    rotateX: nt,
    rotateY: nt,
    rotateZ: nt,
    scale: Xt,
    scaleX: Xt,
    scaleY: Xt,
    scaleZ: Xt,
    skew: nt,
    skewX: nt,
    skewY: nt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Rt,
    originX: Ln,
    originY: Ln,
    originZ: V,
    zIndex: Rn,
    fillOpacity: Rt,
    strokeOpacity: Rt,
    numOctaves: Rn,
  };
function rn(t, e, n, s) {
  const { style: i, vars: o, transform: r, transformOrigin: a } = t;
  let l = !1,
    c = !1,
    u = !0;
  for (const f in e) {
    const h = e[f];
    if (Ks(f)) {
      o[f] = h;
      continue;
    }
    const d = Xs[f],
      p = Er(h, d);
    if (vt.has(f)) {
      if (((l = !0), (r[f] = p), !u)) continue;
      h !== (d.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = p)) : (i[f] = p);
  }
  if (
    (e.transform ||
      (l || s
        ? (i.transform = Mr(t.transform, n, u, s))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: h = "50%", originZ: d = 0 } = a;
    i.transformOrigin = `${f} ${h} ${d}`;
  }
}
const on = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ys(t, e, n) {
  for (const s in e) !I(e[s]) && !Gs(s, n) && (t[s] = e[s]);
}
function Fr({ transformTemplate: t }, e, n) {
  return y.useMemo(() => {
    const s = on();
    return (
      rn(s, e, { enableHardwareAcceleration: !n }, t),
      Object.assign({}, s.vars, s.style)
    );
  }, [e]);
}
function kr(t, e, n) {
  const s = t.style || {},
    i = {};
  return (
    Ys(i, s, t),
    Object.assign(i, Fr(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
  );
}
function Or(t, e, n) {
  const s = {},
    i = kr(t, e, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (s.tabIndex = 0),
    (s.style = i),
    s
  );
}
const Ir = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function se(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Ir.has(t)
  );
}
let qs = (t) => !se(t);
function jr(t) {
  t && (qs = (e) => (e.startsWith("on") ? !se(e) : t(e)));
}
try {
  jr(require("@emotion/is-prop-valid").default);
} catch {}
function Ur(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((qs(i) ||
        (n === !0 && se(i)) ||
        (!e && !se(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
function Bn(t, e, n) {
  return typeof t == "string" ? t : V.transform(e + n * t);
}
function Nr(t, e, n) {
  const s = Bn(e, t.x, t.width),
    i = Bn(n, t.y, t.height);
  return `${s} ${i}`;
}
const Wr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  zr = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Hr(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Wr : zr;
  t[o.offset] = V.transform(-s);
  const r = V.transform(e),
    a = V.transform(n);
  t[o.array] = `${r} ${a}`;
}
function an(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  h
) {
  if ((rn(t, c, u, h), f)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: d, style: p, dimensions: m } = t;
  d.transform && (m && (p.transform = d.transform), delete d.transform),
    m &&
      (i !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = Nr(
        m,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    r !== void 0 && Hr(d, r, a, l, !1);
}
const Zs = () => ({ ...on(), attrs: {} }),
  ln = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Gr(t, e, n, s) {
  const i = y.useMemo(() => {
    const o = Zs();
    return (
      an(o, e, { enableHardwareAcceleration: !1 }, ln(s), t.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [e]);
  if (t.style) {
    const o = {};
    Ys(o, t.style, t), (i.style = { ...o, ...i.style });
  }
  return i;
}
function $r(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (sn(n) ? Gr : Or)(s, o, r, n),
      u = { ...Ur(s, typeof n == "string", t), ...l, ref: i },
      { children: f } = s,
      h = y.useMemo(() => (I(f) ? f.get() : f), [f]);
    return y.createElement(n, { ...u, children: h });
  };
}
function Js(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n) t.style.setProperty(o, n[o]);
}
const Qs = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ti(t, e, n, s) {
  Js(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(Qs.has(i) ? i : Qe(i), e.attrs[i]);
}
function cn(t, e) {
  const { style: n } = t,
    s = {};
  for (const i in n)
    (I(n[i]) || (e.style && I(e.style[i])) || Gs(i, t)) && (s[i] = n[i]);
  return s;
}
function ei(t, e) {
  const n = cn(t, e);
  for (const s in t)
    if (I(t[s]) || I(e[s])) {
      const i =
        zt.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      n[i] = t[s];
    }
  return n;
}
function un(t, e, n, s = {}, i = {}) {
  return (
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    e
  );
}
function At(t) {
  const e = y.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const ie = (t) => Array.isArray(t),
  Kr = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  _r = (t) => (ie(t) ? t[t.length - 1] || 0 : t);
function Jt(t) {
  const e = I(t) ? t.get() : t;
  return Kr(e) ? e.toValue() : e;
}
function Xr(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  s,
  i,
  o
) {
  const r = { latestValues: Yr(s, i, o, t), renderState: e() };
  return n && (r.mount = (a) => n(s, a, r)), r;
}
const ni = (t) => (e, n) => {
  const s = y.useContext(ue),
    i = y.useContext(fe),
    o = () => Xr(t, e, s, i);
  return n ? o() : At(o);
};
function Yr(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const h in o) i[h] = Jt(o[h]);
  let { initial: r, animate: a } = t;
  const l = pe(t),
    c = zs(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const f = u ? a : r;
  return (
    f &&
      typeof f != "boolean" &&
      !de(f) &&
      (Array.isArray(f) ? f : [f]).forEach((d) => {
        const p = un(t, d);
        if (!p) return;
        const { transitionEnd: m, transition: x, ...T } = p;
        for (const v in T) {
          let g = T[v];
          if (Array.isArray(g)) {
            const P = u ? g.length - 1 : 0;
            g = g[P];
          }
          g !== null && (i[v] = g);
        }
        for (const v in m) i[v] = m[v];
      }),
    i
  );
}
const R = (t) => t;
class Fn {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function qr(t) {
  let e = new Fn(),
    n = new Fn(),
    s = 0,
    i = !1,
    o = !1;
  const r = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        const f = u && i,
          h = f ? e : n;
        return c && r.add(l), h.add(l) && f && i && (s = e.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), r.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([e, n] = [n, e]), n.clear(), (s = e.order.length), s))
          for (let c = 0; c < s; c++) {
            const u = e.order[c];
            u(l), r.has(u) && (a.schedule(u), t());
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const Yt = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Zr = 40;
function Jr(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Yt.reduce((f, h) => ((f[h] = qr(() => (n = !0))), f), {}),
    r = (f) => o[f].process(i),
    a = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = s ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Zr), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Yt.forEach(r),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(a));
    },
    l = () => {
      (n = !0), (s = !0), i.isProcessing || t(a);
    };
  return {
    schedule: Yt.reduce((f, h) => {
      const d = o[h];
      return (f[h] = (p, m = !1, x = !1) => (n || l(), d.schedule(p, m, x))), f;
    }, {}),
    cancel: (f) => Yt.forEach((h) => o[h].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: w,
    cancel: G,
    state: O,
    steps: be,
  } = Jr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : R, !0),
  Qr = {
    useVisualState: ni({
      scrapeMotionValuesFromProps: ei,
      createRenderState: Zs,
      onMount: (t, e, { renderState: n, latestValues: s }) => {
        w.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          w.render(() => {
            an(
              n,
              s,
              { enableHardwareAcceleration: !1 },
              ln(e.tagName),
              t.transformTemplate
            ),
              ti(e, n);
          });
      },
    }),
  },
  to = {
    useVisualState: ni({
      scrapeMotionValuesFromProps: cn,
      createRenderState: on,
    }),
  };
function eo(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...(sn(t) ? Qr : to),
    preloadedFeatures: n,
    useRender: $r(e),
    createVisualElement: s,
    Component: t,
  };
}
function Z(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const si = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function ge(t, e = "page") {
  return { point: { x: t[e + "X"], y: t[e + "Y"] } };
}
const no = (t) => (e) => si(e) && t(e, ge(e));
function J(t, e, n, s) {
  return Z(t, e, no(n), s);
}
const so = (t, e) => (n) => e(t(n)),
  rt = (...t) => t.reduce(so);
function ii(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const kn = ii("dragHorizontal"),
  On = ii("dragVertical");
function ri(t) {
  let e = !1;
  if (t === "y") e = On();
  else if (t === "x") e = kn();
  else {
    const n = kn(),
      s = On();
    n && s
      ? (e = () => {
          n(), s();
        })
      : (n && n(), s && s());
  }
  return e;
}
function oi() {
  const t = ri(!0);
  return t ? (t(), !1) : !0;
}
class ct {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
function In(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"),
    s = "onHover" + (e ? "Start" : "End"),
    i = (o, r) => {
      if (o.pointerType === "touch" || oi()) return;
      const a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e),
        a[s] && w.update(() => a[s](o, r));
    };
  return J(t.current, n, i, { passive: !t.getProps()[s] });
}
class io extends ct {
  mount() {
    this.unmount = rt(In(this.node, !0), In(this.node, !1));
  }
  unmount() {}
}
class ro extends ct {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = rt(
      Z(this.node.current, "focus", () => this.onFocus()),
      Z(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const ai = (t, e) => (e ? (t === e ? !0 : ai(t, e.parentElement)) : !1);
function Ve(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, ge(n));
}
class oo extends ct {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = R),
      (this.removeEndListeners = R),
      (this.removeAccessibleListeners = R),
      (this.startPointerPress = (e, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const s = this.node.getProps(),
          o = J(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: c,
                onTapCancel: u,
                globalTapTarget: f,
              } = this.node.getProps();
              w.update(() => {
                !f && !ai(this.node.current, a.target)
                  ? u && u(a, l)
                  : c && c(a, l);
              });
            },
            { passive: !(s.onTap || s.onPointerUp) }
          ),
          r = J(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          });
        (this.removeEndListeners = rt(o, r)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const r = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ve("up", (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && w.update(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Z(this.node.current, "keyup", r)),
              Ve("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Z(this.node.current, "keydown", e),
          s = () => {
            this.isPressing && Ve("cancel", (o, r) => this.cancelPress(o, r));
          },
          i = Z(this.node.current, "blur", s);
        this.removeAccessibleListeners = rt(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      s && w.update(() => s(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !oi()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: s } = this.node.getProps();
    s && w.update(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = J(
        e.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(e.onTapStart || e.onPointerStart) }
      ),
      s = Z(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = rt(n, s);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ie = new WeakMap(),
  Se = new WeakMap(),
  ao = (t) => {
    const e = Ie.get(t.target);
    e && e(t);
  },
  lo = (t) => {
    t.forEach(ao);
  };
function co({ root: t, ...e }) {
  const n = t || document;
  Se.has(n) || Se.set(n, {});
  const s = Se.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(lo, { root: t, ...e })), s[i];
}
function uo(t, e, n) {
  const s = co(e);
  return (
    Ie.set(t, n),
    s.observe(t),
    () => {
      Ie.delete(t), s.unobserve(t);
    }
  );
}
const fo = { some: 0, all: 1 };
class ho extends ct {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : fo[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
          h = c ? u : f;
        h && h(l);
      };
    return uo(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(po(e, n)) && this.startObserver();
  }
  unmount() {}
}
function po({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const mo = {
  inView: { Feature: ho },
  tap: { Feature: oo },
  focus: { Feature: ro },
  hover: { Feature: io },
};
function li(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function go(t) {
  const e = {};
  return t.values.forEach((n, s) => (e[s] = n.get())), e;
}
function yo(t) {
  const e = {};
  return t.values.forEach((n, s) => (e[s] = n.getVelocity())), e;
}
function ye(t, e, n) {
  const s = t.getProps();
  return un(s, e, n !== void 0 ? n : s.custom, go(t), yo(t));
}
let vo = R,
  fn = R;
const ot = (t) => t * 1e3,
  _ = (t) => t / 1e3,
  xo = { current: !1 },
  ci = (t) => Array.isArray(t) && typeof t[0] == "number";
function ui(t) {
  return !!(
    !t ||
    (typeof t == "string" && fi[t]) ||
    ci(t) ||
    (Array.isArray(t) && t.every(ui))
  );
}
const Lt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  fi = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lt([0, 0.65, 0.55, 1]),
    circOut: Lt([0.55, 0, 1, 0.45]),
    backIn: Lt([0.31, 0.01, 0.66, -0.59]),
    backOut: Lt([0.33, 1.53, 0.69, 0.99]),
  };
function hi(t) {
  if (t) return ci(t) ? Lt(t) : Array.isArray(t) ? t.map(hi) : fi[t];
}
function Po(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const c = { [e]: n };
  l && (c.offset = l);
  const u = hi(a);
  return (
    Array.isArray(u) && (c.easing = u),
    t.animate(c, {
      delay: s,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: r === "reverse" ? "alternate" : "normal",
    })
  );
}
function To(t, { repeat: e, repeatType: n = "loop" }) {
  const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[s];
}
const di = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  bo = 1e-7,
  Vo = 12;
function So(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do (r = e + (n - e) / 2), (o = di(r, s, i) - t), o > 0 ? (n = r) : (e = r);
  while (Math.abs(o) > bo && ++a < Vo);
  return r;
}
function $t(t, e, n, s) {
  if (t === e && n === s) return R;
  const i = (o) => So(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : di(i(o), e, s));
}
const Ao = $t(0.42, 0, 1, 1),
  wo = $t(0, 0, 0.58, 1),
  pi = $t(0.42, 0, 0.58, 1),
  mi = (t) => Array.isArray(t) && typeof t[0] != "number",
  gi = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  yi = (t) => (e) => 1 - t(1 - e),
  hn = (t) => 1 - Math.sin(Math.acos(t)),
  vi = yi(hn),
  Co = gi(hn),
  xi = $t(0.33, 1.53, 0.69, 0.99),
  dn = yi(xi),
  Mo = gi(dn),
  Do = (t) =>
    (t *= 2) < 1 ? 0.5 * dn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Eo = {
    linear: R,
    easeIn: Ao,
    easeInOut: pi,
    easeOut: wo,
    circIn: hn,
    circInOut: Co,
    circOut: vi,
    backIn: dn,
    backInOut: Mo,
    backOut: xi,
    anticipate: Do,
  },
  jn = (t) => {
    if (Array.isArray(t)) {
      fn(t.length === 4);
      const [e, n, s, i] = t;
      return $t(e, n, s, i);
    } else if (typeof t == "string") return Eo[t];
    return t;
  },
  pn = (t, e) => (n) =>
    !!(
      (Ht(n) && Lr.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Pi = (t, e, n) => (s) => {
    if (!Ht(s)) return s;
    const [i, o, r, a] = s.match(me);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Lo = (t) => at(0, 255, t),
  Ae = { ...xt, transform: (t) => Math.round(Lo(t)) },
  mt = {
    test: pn("rgb", "red"),
    parse: Pi("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      Ae.transform(t) +
      ", " +
      Ae.transform(e) +
      ", " +
      Ae.transform(n) +
      ", " +
      Bt(Rt.transform(s)) +
      ")",
  };
function Ro(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const je = { test: pn("#"), parse: Ro, transform: mt.transform },
  Tt = {
    test: pn("hsl", "hue"),
    parse: Pi("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      X.transform(Bt(e)) +
      ", " +
      X.transform(Bt(n)) +
      ", " +
      Bt(Rt.transform(s)) +
      ")",
  },
  j = {
    test: (t) => mt.test(t) || je.test(t) || Tt.test(t),
    parse: (t) =>
      mt.test(t) ? mt.parse(t) : Tt.test(t) ? Tt.parse(t) : je.parse(t),
    transform: (t) =>
      Ht(t) ? t : t.hasOwnProperty("red") ? mt.transform(t) : Tt.transform(t),
  },
  L = (t, e, n) => -n * t + n * e + t;
function we(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
      ? e
      : n < 2 / 3
      ? t + (e - t) * (2 / 3 - n) * 6
      : t
  );
}
function Bo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    (i = we(l, a, t + 1 / 3)), (o = we(l, a, t)), (r = we(l, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
const Ce = (t, e, n) => {
    const s = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - s) + s));
  },
  Fo = [je, mt, Tt],
  ko = (t) => Fo.find((e) => e.test(t));
function Un(t) {
  const e = ko(t);
  let n = e.parse(t);
  return e === Tt && (n = Bo(n)), n;
}
const Ti = (t, e) => {
  const n = Un(t),
    s = Un(e),
    i = { ...n };
  return (o) => (
    (i.red = Ce(n.red, s.red, o)),
    (i.green = Ce(n.green, s.green, o)),
    (i.blue = Ce(n.blue, s.blue, o)),
    (i.alpha = L(n.alpha, s.alpha, o)),
    mt.transform(i)
  );
};
function Oo(t) {
  var e, n;
  return (
    isNaN(t) &&
    Ht(t) &&
    (((e = t.match(me)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(_s)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const bi = { regex: Dr, countKey: "Vars", token: "${v}", parse: R },
  Vi = { regex: _s, countKey: "Colors", token: "${c}", parse: j.parse },
  Si = { regex: me, countKey: "Numbers", token: "${n}", parse: xt.parse };
function Me(t, { regex: e, countKey: n, token: s, parse: i }) {
  const o = t.tokenised.match(e);
  o &&
    ((t["num" + n] = o.length),
    (t.tokenised = t.tokenised.replace(e, s)),
    t.values.push(...o.map(i)));
}
function re(t) {
  const e = t.toString(),
    n = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Me(n, bi), Me(n, Vi), Me(n, Si), n;
}
function Ai(t) {
  return re(t).values;
}
function wi(t) {
  const { values: e, numColors: n, numVars: s, tokenised: i } = re(t),
    o = e.length;
  return (r) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < s
        ? (a = a.replace(bi.token, r[l]))
        : l < s + n
        ? (a = a.replace(Vi.token, j.transform(r[l])))
        : (a = a.replace(Si.token, Bt(r[l])));
    return a;
  };
}
const Io = (t) => (typeof t == "number" ? 0 : t);
function jo(t) {
  const e = Ai(t);
  return wi(t)(e.map(Io));
}
const lt = {
    test: Oo,
    parse: Ai,
    createTransformer: wi,
    getAnimatableNone: jo,
  },
  Ci = (t, e) => (n) => `${n > 0 ? e : t}`;
function Mi(t, e) {
  return typeof t == "number"
    ? (n) => L(t, e, n)
    : j.test(t)
    ? Ti(t, e)
    : t.startsWith("var(")
    ? Ci(t, e)
    : Ei(t, e);
}
const Di = (t, e) => {
    const n = [...t],
      s = n.length,
      i = t.map((o, r) => Mi(o, e[r]));
    return (o) => {
      for (let r = 0; r < s; r++) n[r] = i[r](o);
      return n;
    };
  },
  Uo = (t, e) => {
    const n = { ...t, ...e },
      s = {};
    for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (s[i] = Mi(t[i], e[i]));
    return (i) => {
      for (const o in s) n[o] = s[o](i);
      return n;
    };
  },
  Ei = (t, e) => {
    const n = lt.createTransformer(e),
      s = re(t),
      i = re(e);
    return s.numVars === i.numVars &&
      s.numColors === i.numColors &&
      s.numNumbers >= i.numNumbers
      ? rt(Di(s.values, i.values), n)
      : Ci(t, e);
  },
  gt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  },
  Nn = (t, e) => (n) => L(t, e, n);
function No(t) {
  return typeof t == "number"
    ? Nn
    : typeof t == "string"
    ? j.test(t)
      ? Ti
      : Ei
    : Array.isArray(t)
    ? Di
    : typeof t == "object"
    ? Uo
    : Nn;
}
function Wo(t, e, n) {
  const s = [],
    i = n || No(t[0]),
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || R : e;
      a = rt(l, a);
    }
    s.push(a);
  }
  return s;
}
function ve(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((fn(o === e.length), o === 1)) return () => e[0];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const r = Wo(e, s, i),
    a = r.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < t.length - 2 && !(c < t[u + 1]); u++);
      const f = gt(t[u], t[u + 1], c);
      return r[u](f);
    };
  return n ? (c) => l(at(t[0], t[o - 1], c)) : l;
}
function Li(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = gt(0, e, s);
    t.push(L(n, 1, i));
  }
}
function mn(t) {
  const e = [0];
  return Li(e, t.length - 1), e;
}
function zo(t, e) {
  return t.map((n) => n * e);
}
function Ho(t, e) {
  return t.map(() => e || pi).splice(0, t.length - 1);
}
function oe({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut",
}) {
  const i = mi(s) ? s.map(jn) : jn(s),
    o = { done: !1, value: e[0] },
    r = zo(n && n.length === e.length ? n : mn(e), t),
    a = ve(r, e, { ease: Array.isArray(i) ? i : Ho(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((o.value = a(l)), (o.done = l >= t), o),
  };
}
function gn(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Go = 5;
function Ri(t, e, n) {
  const s = Math.max(e - Go, 0);
  return gn(n - t(s), e - s);
}
const De = 0.001,
  $o = 0.01,
  Ko = 10,
  _o = 0.05,
  Xo = 1;
function Yo({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: s = 1,
}) {
  let i,
    o,
    r = 1 - e;
  (r = at(_o, Xo, r)),
    (t = at($o, Ko, _(t))),
    r < 1
      ? ((i = (c) => {
          const u = c * r,
            f = u * t,
            h = u - n,
            d = Ue(c, r),
            p = Math.exp(-f);
          return De - (h / d) * p;
        }),
        (o = (c) => {
          const f = c * r * t,
            h = f * n + n,
            d = Math.pow(r, 2) * Math.pow(c, 2) * t,
            p = Math.exp(-f),
            m = Ue(Math.pow(c, 2), r);
          return ((-i(c) + De > 0 ? -1 : 1) * ((h - d) * p)) / m;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * t),
            f = (c - n) * t + 1;
          return -De + u * f;
        }),
        (o = (c) => {
          const u = Math.exp(-c * t),
            f = (n - c) * (t * t);
          return u * f;
        }));
  const a = 5 / t,
    l = Zo(i, o, a);
  if (((t = ot(t)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const c = Math.pow(l, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const qo = 12;
function Zo(t, e, n) {
  let s = n;
  for (let i = 1; i < qo; i++) s = s - t(s) / e(s);
  return s;
}
function Ue(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Jo = ["duration", "bounce"],
  Qo = ["stiffness", "damping", "mass"];
function Wn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function ta(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Wn(t, Qo) && Wn(t, Jo)) {
    const n = Yo(t);
    (e = { ...e, ...n, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function yn({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0],
    o = t[t.length - 1],
    r = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: h,
    } = ta({ ...s, velocity: -_(s.velocity || 0) }),
    d = f || 0,
    p = l / (2 * Math.sqrt(a * c)),
    m = o - i,
    x = _(Math.sqrt(a / c)),
    T = Math.abs(m) < 5;
  n || (n = T ? 0.01 : 2), e || (e = T ? 0.005 : 0.5);
  let v;
  if (p < 1) {
    const g = Ue(x, p);
    v = (P) => {
      const S = Math.exp(-p * x * P);
      return (
        o - S * (((d + p * x * m) / g) * Math.sin(g * P) + m * Math.cos(g * P))
      );
    };
  } else if (p === 1) v = (g) => o - Math.exp(-x * g) * (m + (d + x * m) * g);
  else {
    const g = x * Math.sqrt(p * p - 1);
    v = (P) => {
      const S = Math.exp(-p * x * P),
        C = Math.min(g * P, 300);
      return (
        o - (S * ((d + p * x * m) * Math.sinh(C) + g * m * Math.cosh(C))) / g
      );
    };
  }
  return {
    calculatedDuration: (h && u) || null,
    next: (g) => {
      const P = v(g);
      if (h) r.done = g >= u;
      else {
        let S = d;
        g !== 0 && (p < 1 ? (S = Ri(v, g, P)) : (S = 0));
        const C = Math.abs(S) <= n,
          M = Math.abs(o - P) <= e;
        r.done = C && M;
      }
      return (r.value = r.done ? o : P), r;
    },
  };
}
function zn({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const f = t[0],
    h = { done: !1, value: f },
    d = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
    p = (b) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - b) < Math.abs(l - b)
        ? a
        : l;
  let m = n * e;
  const x = f + m,
    T = r === void 0 ? x : r(x);
  T !== x && (m = T - f);
  const v = (b) => -m * Math.exp(-b / s),
    g = (b) => T + v(b),
    P = (b) => {
      const A = v(b),
        k = g(b);
      (h.done = Math.abs(A) <= c), (h.value = h.done ? T : k);
    };
  let S, C;
  const M = (b) => {
    d(h.value) &&
      ((S = b),
      (C = yn({
        keyframes: [h.value, p(h.value)],
        velocity: Ri(g, b, h.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let A = !1;
        return (
          !C && S === void 0 && ((A = !0), P(b), M(b)),
          S !== void 0 && b > S ? C.next(b - S) : (!A && P(b), h)
        );
      },
    }
  );
}
const ea = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => w.update(e, !0),
      stop: () => G(e),
      now: () => (O.isProcessing ? O.timestamp : performance.now()),
    };
  },
  Ne = 2e4;
function We(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Ne; ) (e += n), (s = t.next(e));
  return e >= Ne ? 1 / 0 : e;
}
const na = { decay: zn, inertia: zn, tween: oe, keyframes: oe, spring: yn };
function Nt({
  autoplay: t = !0,
  delay: e = 0,
  driver: n = ea,
  keyframes: s,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: r = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: c,
  onComplete: u,
  onUpdate: f,
  ...h
}) {
  let d = 1,
    p = !1,
    m,
    x;
  const T = () => {
    x = new Promise((D) => {
      m = D;
    });
  };
  T();
  let v;
  const g = na[i] || oe;
  let P;
  g !== oe &&
    typeof s[0] != "number" &&
    ((P = ve([0, 100], s, { clamp: !1 })), (s = [0, 100]));
  const S = g({ ...h, keyframes: s });
  let C;
  a === "mirror" &&
    (C = g({
      ...h,
      keyframes: [...s].reverse(),
      velocity: -(h.velocity || 0),
    }));
  let M = "idle",
    b = null,
    A = null,
    k = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = We(S));
  const { calculatedDuration: Q } = S;
  let U = 1 / 0,
    W = 1 / 0;
  Q !== null && ((U = Q + r), (W = U * (o + 1) - r));
  let E = 0;
  const Y = (D) => {
      if (A === null) return;
      d > 0 && (A = Math.min(A, D)),
        d < 0 && (A = Math.min(D - W / d, A)),
        b !== null ? (E = b) : (E = Math.round(D - A) * d);
      const et = E - e * (d >= 0 ? 1 : -1),
        Kt = d >= 0 ? et < 0 : et > W;
      (E = Math.max(et, 0)), M === "finished" && b === null && (E = W);
      let wn = E,
        Cn = S;
      if (o) {
        const Te = Math.min(E, W) / U;
        let _t = Math.floor(Te),
          ut = Te % 1;
        !ut && Te >= 1 && (ut = 1),
          ut === 1 && _t--,
          (_t = Math.min(_t, o + 1)),
          !!(_t % 2) &&
            (a === "reverse"
              ? ((ut = 1 - ut), r && (ut -= r / U))
              : a === "mirror" && (Cn = C)),
          (wn = at(0, 1, ut) * U);
      }
      const Ct = Kt ? { done: !1, value: s[0] } : Cn.next(wn);
      P && (Ct.value = P(Ct.value));
      let { done: Mn } = Ct;
      !Kt && Q !== null && (Mn = d >= 0 ? E >= W : E <= 0);
      const dr = b === null && (M === "finished" || (M === "running" && Mn));
      return f && f(Ct.value), dr && tt(), Ct;
    },
    B = () => {
      v && v.stop(), (v = void 0);
    },
    $ = () => {
      (M = "idle"), B(), m(), T(), (A = k = null);
    },
    tt = () => {
      (M = "finished"), u && u(), B(), m();
    },
    q = () => {
      if (p) return;
      v || (v = n(Y));
      const D = v.now();
      l && l(),
        b !== null ? (A = D - b) : (!A || M === "finished") && (A = D),
        M === "finished" && T(),
        (k = A),
        (b = null),
        (M = "running"),
        v.start();
    };
  t && q();
  const wt = {
    then(D, et) {
      return x.then(D, et);
    },
    get time() {
      return _(E);
    },
    set time(D) {
      (D = ot(D)),
        (E = D),
        b !== null || !v || d === 0 ? (b = D) : (A = v.now() - D / d);
    },
    get duration() {
      const D = S.calculatedDuration === null ? We(S) : S.calculatedDuration;
      return _(D);
    },
    get speed() {
      return d;
    },
    set speed(D) {
      D === d || !v || ((d = D), (wt.time = _(E)));
    },
    get state() {
      return M;
    },
    play: q,
    pause: () => {
      (M = "paused"), (b = E);
    },
    stop: () => {
      (p = !0), M !== "idle" && ((M = "idle"), c && c(), $());
    },
    cancel: () => {
      k !== null && Y(k), $();
    },
    complete: () => {
      M = "finished";
    },
    sample: (D) => ((A = 0), Y(D)),
  };
  return wt;
}
function Bi(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const sa = Bi(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ia = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  qt = 10,
  ra = 2e4,
  oa = (t, e) => e.type === "spring" || t === "backgroundColor" || !ui(e.ease);
function aa(t, e, { onUpdate: n, onComplete: s, ...i }) {
  if (
    !(
      sa() &&
      ia.has(e) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let r = !1,
    a,
    l,
    c = !1;
  const u = () => {
    l = new Promise((g) => {
      a = g;
    });
  };
  u();
  let { keyframes: f, duration: h = 300, ease: d, times: p } = i;
  if (oa(e, i)) {
    const g = Nt({ ...i, repeat: 0, delay: 0 });
    let P = { done: !1, value: f[0] };
    const S = [];
    let C = 0;
    for (; !P.done && C < ra; ) (P = g.sample(C)), S.push(P.value), (C += qt);
    (p = void 0), (f = S), (h = C - qt), (d = "linear");
  }
  const m = Po(t.owner.current, e, f, { ...i, duration: h, ease: d, times: p }),
    x = () => {
      (c = !1), m.cancel();
    },
    T = () => {
      (c = !0), w.update(x), a(), u();
    };
  return (
    (m.onfinish = () => {
      c || (t.set(To(f, i)), s && s(), T());
    }),
    {
      then(g, P) {
        return l.then(g, P);
      },
      attachTimeline(g) {
        return (m.timeline = g), (m.onfinish = null), R;
      },
      get time() {
        return _(m.currentTime || 0);
      },
      set time(g) {
        m.currentTime = ot(g);
      },
      get speed() {
        return m.playbackRate;
      },
      set speed(g) {
        m.playbackRate = g;
      },
      get duration() {
        return _(h);
      },
      play: () => {
        r || (m.play(), G(x));
      },
      pause: () => m.pause(),
      stop: () => {
        if (((r = !0), m.playState === "idle")) return;
        const { currentTime: g } = m;
        if (g) {
          const P = Nt({ ...i, autoplay: !1 });
          t.setWithVelocity(P.sample(g - qt).value, P.sample(g).value, qt);
        }
        T();
      },
      complete: () => {
        c || m.finish();
      },
      cancel: T,
    }
  );
}
function la({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
  const i = () => (
    n && n(t[t.length - 1]),
    s && s(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: R,
      pause: R,
      stop: R,
      then: (o) => (o(), Promise.resolve()),
      cancel: R,
      complete: R,
    }
  );
  return e
    ? Nt({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i })
    : i();
}
const ca = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ua = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  fa = { type: "keyframes", duration: 0.8 },
  ha = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  da = (t, { keyframes: e }) =>
    e.length > 2
      ? fa
      : vt.has(t)
      ? t.startsWith("scale")
        ? ua(e[1])
        : ca
      : ha,
  ze = (t, e) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (lt.test(e) || e === "0") &&
            !e.startsWith("url("))
        ),
  pa = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ma(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(me) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = pa.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const ga = /([a-z-]*)\(.*?\)/g,
  He = {
    ...lt,
    getAnimatableNone: (t) => {
      const e = t.match(ga);
      return e ? e.map(ma).join(" ") : t;
    },
  },
  ya = {
    ...Xs,
    color: j,
    backgroundColor: j,
    outlineColor: j,
    fill: j,
    stroke: j,
    borderColor: j,
    borderTopColor: j,
    borderRightColor: j,
    borderBottomColor: j,
    borderLeftColor: j,
    filter: He,
    WebkitFilter: He,
  },
  vn = (t) => ya[t];
function Fi(t, e) {
  let n = vn(t);
  return (
    n !== He && (n = lt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const ki = (t) => /^0[^.\s]+$/.test(t);
function va(t) {
  if (typeof t == "number") return t === 0;
  if (t !== null) return t === "none" || t === "0" || ki(t);
}
function xa(t, e, n, s) {
  const i = ze(e, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const r = s.from !== void 0 ? s.from : t.get();
  let a;
  const l = [];
  for (let c = 0; c < o.length; c++)
    o[c] === null && (o[c] = c === 0 ? r : o[c - 1]),
      va(o[c]) && l.push(c),
      typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (a = o[c]);
  if (i && l.length && a)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      o[u] = Fi(e, a);
    }
  return o;
}
function Pa({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: o,
  repeatType: r,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function xn(t, e) {
  return t[e] || t.default || t;
}
const Ta = { skipAnimations: !1 },
  Pn =
    (t, e, n, s = {}) =>
    (i) => {
      const o = xn(s, t) || {},
        r = o.delay || s.delay || 0;
      let { elapsed: a = 0 } = s;
      a = a - ot(r);
      const l = xa(e, t, n, o),
        c = l[0],
        u = l[l.length - 1],
        f = ze(t, c),
        h = ze(t, u);
      let d = {
        keyframes: l,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (p) => {
          e.set(p), o.onUpdate && o.onUpdate(p);
        },
        onComplete: () => {
          i(), o.onComplete && o.onComplete();
        },
      };
      if (
        (Pa(o) || (d = { ...d, ...da(t, d) }),
        d.duration && (d.duration = ot(d.duration)),
        d.repeatDelay && (d.repeatDelay = ot(d.repeatDelay)),
        !f || !h || xo.current || o.type === !1 || Ta.skipAnimations)
      )
        return la(d);
      if (
        !s.isHandoff &&
        e.owner &&
        e.owner.current instanceof HTMLElement &&
        !e.owner.getProps().onUpdate
      ) {
        const p = aa(e, t, d);
        if (p) return p;
      }
      return Nt(d);
    };
function ae(t) {
  return !!(I(t) && t.add);
}
const Oi = (t) => /^\-?\d*\.?\d+$/.test(t);
function Tn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function xe(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class bn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Tn(this.subscriptions, e), () => xe(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ba = (t) => !isNaN(parseFloat(t)),
  Ft = { current: void 0 };
class Va {
  constructor(e, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (s, i = !0) => {
        (this.prev = this.current), (this.current = s);
        const { delta: o, timestamp: r } = O;
        this.lastUpdated !== r &&
          ((this.timeDelta = o),
          (this.lastUpdated = r),
          w.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => w.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: s }) => {
        s !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = e),
      (this.canTrackVelocity = ba(this.current)),
      (this.owner = n.owner);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new bn());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          s(),
            w.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), (this.prev = e), (this.timeDelta = s);
  }
  jump(e) {
    this.updateAndNotify(e),
      (this.prev = e),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return Ft.current && Ft.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? gn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function K(t, e) {
  return new Va(t, e);
}
const Ii = (t) => (e) => e.test(t),
  Sa = { test: (t) => t === "auto", parse: (t) => t },
  ji = [xt, V, X, nt, Br, Rr, Sa],
  Mt = (t) => ji.find(Ii(t)),
  Aa = [...ji, j, lt],
  wa = (t) => Aa.find(Ii(t));
function Ca(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, K(n));
}
function Vn(t, e) {
  const n = ye(t, e);
  let {
    transitionEnd: s = {},
    transition: i = {},
    ...o
  } = n ? t.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = _r(o[r]);
    Ca(t, r, a);
  }
}
function Ge(t, e) {
  [...e].reverse().forEach((s) => {
    const i = t.getVariant(s);
    i && Vn(t, i),
      t.variantChildren &&
        t.variantChildren.forEach((o) => {
          Ge(o, e);
        });
  });
}
function Ma(t, e) {
  if (Array.isArray(e)) return Ge(t, e);
  if (typeof e == "string") return Ge(t, [e]);
  Vn(t, e);
}
function Da(t, e, n) {
  var s, i;
  const o = Object.keys(e).filter((a) => !t.hasValue(a)),
    r = o.length;
  if (r)
    for (let a = 0; a < r; a++) {
      const l = o[a],
        c = e[l];
      let u = null;
      Array.isArray(c) && (u = c[0]),
        u === null &&
          (u =
            (i = (s = n[l]) !== null && s !== void 0 ? s : t.readValue(l)) !==
              null && i !== void 0
              ? i
              : e[l]),
        u != null &&
          (typeof u == "string" && (Oi(u) || ki(u))
            ? (u = parseFloat(u))
            : !wa(u) && lt.test(c) && (u = Fi(l, c)),
          t.addValue(l, K(u, { owner: t })),
          n[l] === void 0 && (n[l] = u),
          u !== null && t.setBaseTarget(l, u));
    }
}
function Ea(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function La(t, e, n) {
  const s = {};
  for (const i in t) {
    const o = Ea(i, e);
    if (o !== void 0) s[i] = o;
    else {
      const r = n.getValue(i);
      r && (s[i] = r.get());
    }
  }
  return s;
}
function Ra({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), s;
}
function Ba(t, e) {
  const n = t.get();
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++) if (e[s] !== n) return !0;
  } else return n !== e;
}
function Sn(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let {
    transition: o = t.getDefaultTransition(),
    transitionEnd: r,
    ...a
  } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  s && (o = s);
  const c = [],
    u = i && t.animationState && t.animationState.getState()[i];
  for (const f in a) {
    const h = t.getValue(f),
      d = a[f];
    if (!h || d === void 0 || (u && Ra(u, f))) continue;
    const p = { delay: n, elapsed: 0, ...xn(o || {}, f) };
    if (window.HandoffAppearAnimations) {
      const T = t.getProps()[Ws];
      if (T) {
        const v = window.HandoffAppearAnimations(T, f, h, w);
        v !== null && ((p.elapsed = v), (p.isHandoff = !0));
      }
    }
    let m = !p.isHandoff && !Ba(h, d);
    if (
      (p.type === "spring" && (h.getVelocity() || p.velocity) && (m = !1),
      h.animation && (m = !1),
      m)
    )
      continue;
    h.start(Pn(f, h, d, t.shouldReduceMotion && vt.has(f) ? { type: !1 } : p));
    const x = h.animation;
    ae(l) && (l.add(f), x.then(() => l.remove(f))), c.push(x);
  }
  return (
    r &&
      Promise.all(c).then(() => {
        r && Vn(t, r);
      }),
    c
  );
}
function $e(t, e, n = {}) {
  const s = ye(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Sn(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: u,
              staggerDirection: f,
            } = i;
            return Fa(t, e, c + l, u, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => c());
  } else return Promise.all([o(), r(n.delay)]);
}
function Fa(t, e, n = 0, s = 0, i = 1, o) {
  const r = [],
    a = (t.variantChildren.size - 1) * s,
    l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return (
    Array.from(t.variantChildren)
      .sort(ka)
      .forEach((c, u) => {
        c.notify("AnimationStart", e),
          r.push(
            $e(c, e, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(r)
  );
}
function ka(t, e) {
  return t.sortNodePosition(e);
}
function Ui(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => $e(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = $e(t, e, n);
  else {
    const i = typeof e == "function" ? ye(t, e, n.custom) : e;
    s = Promise.all(Sn(t, i, n));
  }
  return s.then(() => t.notify("AnimationComplete", e));
}
const Oa = [...tn].reverse(),
  Ia = tn.length;
function ja(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => Ui(t, n, s)));
}
function Ua(t) {
  let e = ja(t);
  const n = Wa();
  let s = !0;
  const i = (l, c) => {
    const u = ye(t, c);
    if (u) {
      const { transition: f, transitionEnd: h, ...d } = u;
      l = { ...l, ...d, ...h };
    }
    return l;
  };
  function o(l) {
    e = l(t);
  }
  function r(l, c) {
    const u = t.getProps(),
      f = t.getVariantContext(!0) || {},
      h = [],
      d = new Set();
    let p = {},
      m = 1 / 0;
    for (let T = 0; T < Ia; T++) {
      const v = Oa[T],
        g = n[v],
        P = u[v] !== void 0 ? u[v] : f[v],
        S = jt(P),
        C = v === c ? g.isActive : null;
      C === !1 && (m = T);
      let M = P === f[v] && P !== u[v] && S;
      if (
        (M && s && t.manuallyAnimateOnMount && (M = !1),
        (g.protectedKeys = { ...p }),
        (!g.isActive && C === null) ||
          (!P && !g.prevProp) ||
          de(P) ||
          typeof P == "boolean")
      )
        continue;
      let A =
          Na(g.prevProp, P) ||
          (v === c && g.isActive && !M && S) ||
          (T > m && S),
        k = !1;
      const Q = Array.isArray(P) ? P : [P];
      let U = Q.reduce(i, {});
      C === !1 && (U = {});
      const { prevResolvedValues: W = {} } = g,
        E = { ...W, ...U },
        Y = (B) => {
          (A = !0),
            d.has(B) && ((k = !0), d.delete(B)),
            (g.needsAnimating[B] = !0);
        };
      for (const B in E) {
        const $ = U[B],
          tt = W[B];
        if (p.hasOwnProperty(B)) continue;
        let q = !1;
        ie($) && ie(tt) ? (q = !li($, tt)) : (q = $ !== tt),
          q
            ? $ !== void 0
              ? Y(B)
              : d.add(B)
            : $ !== void 0 && d.has(B)
            ? Y(B)
            : (g.protectedKeys[B] = !0);
      }
      (g.prevProp = P),
        (g.prevResolvedValues = U),
        g.isActive && (p = { ...p, ...U }),
        s && t.blockInitialAnimation && (A = !1),
        A &&
          (!M || k) &&
          h.push(
            ...Q.map((B) => ({ animation: B, options: { type: v, ...l } }))
          );
    }
    if (d.size) {
      const T = {};
      d.forEach((v) => {
        const g = t.getBaseTarget(v);
        g !== void 0 && (T[v] = g);
      }),
        h.push({ animation: T });
    }
    let x = !!h.length;
    return (
      s &&
        (u.initial === !1 || u.initial === u.animate) &&
        !t.manuallyAnimateOnMount &&
        (x = !1),
      (s = !1),
      x ? e(h) : Promise.resolve()
    );
  }
  function a(l, c, u) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    (f = t.variantChildren) === null ||
      f === void 0 ||
      f.forEach((d) => {
        var p;
        return (p = d.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    const h = r(u, l);
    for (const d in n) n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function Na(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !li(e, t) : !1;
}
function ft(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Wa() {
  return {
    animate: ft(!0),
    whileInView: ft(),
    whileHover: ft(),
    whileTap: ft(),
    whileDrag: ft(),
    whileFocus: ft(),
    exit: ft(),
  };
}
class za extends ct {
  constructor(e) {
    super(e), e.animationState || (e.animationState = Ua(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), de(e) && (this.unmount = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Ha = 0;
class Ga extends ct {
  constructor() {
    super(...arguments), (this.id = Ha++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: e,
        onExitComplete: n,
        custom: s,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const o = this.node.animationState.setActive("exit", !e, {
      custom: s ?? this.node.getProps().custom,
    });
    n && !e && o.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const $a = { animation: { Feature: za }, exit: { Feature: Ga } },
  Hn = (t, e) => Math.abs(t - e);
function Ka(t, e) {
  const n = Hn(t.x, e.x),
    s = Hn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Ni {
  constructor(
    e,
    n,
    { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Le(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          d = Ka(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !d) return;
        const { point: p } = f,
          { timestamp: m } = O;
        this.history.push({ ...p, timestamp: m });
        const { onStart: x, onMove: T } = this.handlers;
        h ||
          (x && x(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          T && T(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Ee(h, this.transformPagePoint)),
          w.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: d, onSessionEnd: p, resumeAnimation: m } = this.handlers;
        if (
          (this.dragSnapToOrigin && m && m(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = Le(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ee(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && d && d(f, x), p && p(f, x);
      }),
      !si(e))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.contextWindow = i || window);
    const r = ge(e),
      a = Ee(r, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = O;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(e, Le(a, this.history)),
      (this.removeListeners = rt(
        J(this.contextWindow, "pointermove", this.handlePointerMove),
        J(this.contextWindow, "pointerup", this.handlePointerUp),
        J(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), G(this.updatePoint);
  }
}
function Ee(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Gn(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Le({ point: t }, e) {
  return {
    point: t,
    delta: Gn(t, Wi(e)),
    offset: Gn(t, _a(e)),
    velocity: Xa(e, 0.1),
  };
}
function _a(t) {
  return t[0];
}
function Wi(t) {
  return t[t.length - 1];
}
function Xa(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Wi(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > ot(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const o = _(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function N(t) {
  return t.max - t.min;
}
function Ke(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function $n(t, e, n, s = 0.5) {
  (t.origin = s),
    (t.originPoint = L(e.min, e.max, t.origin)),
    (t.scale = N(n) / N(e)),
    (Ke(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = L(n.min, n.max, t.origin) - t.originPoint),
    (Ke(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function kt(t, e, n, s) {
  $n(t.x, e.x, n.x, s ? s.originX : void 0),
    $n(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Kn(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + N(e));
}
function Ya(t, e, n) {
  Kn(t.x, e.x, n.x), Kn(t.y, e.y, n.y);
}
function _n(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + N(e));
}
function Ot(t, e, n) {
  _n(t.x, e.x, n.x), _n(t.y, e.y, n.y);
}
function qa(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? L(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? L(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function Xn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Za(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: Xn(t.x, n, i), y: Xn(t.y, e, s) };
}
function Yn(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Ja(t, e) {
  return { x: Yn(t.x, e.x), y: Yn(t.y, e.y) };
}
function Qa(t, e) {
  let n = 0.5;
  const s = N(t),
    i = N(e);
  return (
    i > s
      ? (n = gt(e.min, e.max - s, t.min))
      : s > i && (n = gt(t.min, t.max - i, e.min)),
    at(0, 1, n)
  );
}
function tl(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const _e = 0.35;
function el(t = _e) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = _e),
    { x: qn(t, "left", "right"), y: qn(t, "top", "bottom") }
  );
}
function qn(t, e, n) {
  return { min: Zn(t, e), max: Zn(t, n) };
}
function Zn(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Jn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  bt = () => ({ x: Jn(), y: Jn() }),
  Qn = () => ({ min: 0, max: 0 }),
  F = () => ({ x: Qn(), y: Qn() });
function H(t) {
  return [t("x"), t("y")];
}
function zi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function nl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function sl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function Re(t) {
  return t === void 0 || t === 1;
}
function Xe({ scale: t, scaleX: e, scaleY: n }) {
  return !Re(t) || !Re(e) || !Re(n);
}
function ht(t) {
  return Xe(t) || Hi(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Hi(t) {
  return ts(t.x) || ts(t.y);
}
function ts(t) {
  return t && t !== "0%";
}
function le(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function es(t, e, n, s, i) {
  return i !== void 0 && (t = le(t, i, s)), le(t, n, s) + e;
}
function Ye(t, e = 0, n = 1, s, i) {
  (t.min = es(t.min, e, n, s, i)), (t.max = es(t.max, e, n, s, i));
}
function Gi(t, { x: e, y: n }) {
  Ye(t.x, e.translate, e.scale, e.originPoint),
    Ye(t.y, n.translate, n.scale, n.originPoint);
}
function il(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (r = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Vt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), Gi(t, r)),
      s && ht(o.latestValues) && Vt(t, o.latestValues));
  }
  (e.x = ns(e.x)), (e.y = ns(e.y));
}
function ns(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
    ? t
    : 1;
}
function it(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function ss(t, e, [n, s, i]) {
  const o = e[i] !== void 0 ? e[i] : 0.5,
    r = L(t.min, t.max, o);
  Ye(t, e[n], e[s], r, e.scale);
}
const rl = ["x", "scaleX", "originX"],
  ol = ["y", "scaleY", "originY"];
function Vt(t, e) {
  ss(t.x, e, rl), ss(t.y, e, ol);
}
function $i(t, e) {
  return zi(sl(t.getBoundingClientRect(), e));
}
function al(t, e, n) {
  const s = $i(t, n),
    { scroll: i } = e;
  return i && (it(s.x, i.offset.x), it(s.y, i.offset.y)), s;
}
const Ki = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  ll = new WeakMap();
class cl {
  constructor(e) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = F()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (u) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ge(u, "page").point);
      },
      o = (u, f) => {
        const { drag: h, dragPropagation: d, onDragStart: p } = this.getProps();
        if (
          h &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = ri(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          H((x) => {
            let T = this.getAxisMotionValue(x).get() || 0;
            if (X.test(T)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const g = v.layout.layoutBox[x];
                g && (T = N(g) * (parseFloat(T) / 100));
              }
            }
            this.originPoint[x] = T;
          }),
          p && w.update(() => p(u, f), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      r = (u, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: d,
          onDirectionLock: p,
          onDrag: m,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: x } = f;
        if (d && this.currentDirection === null) {
          (this.currentDirection = ul(x)),
            this.currentDirection !== null && p && p(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, x),
          this.updateAxis("y", f.point, x),
          this.visualElement.render(),
          m && m(u, f);
      },
      a = (u, f) => this.stop(u, f),
      l = () =>
        H((u) => {
          var f;
          return (
            this.getAnimationState(u) === "paused" &&
            ((f = this.getAxisMotionValue(u).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ni(
      e,
      {
        onSessionStart: i,
        onStart: o,
        onMove: r,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Ki(this.visualElement),
      }
    );
  }
  stop(e, n) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && w.update(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Zt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (r = qa(r, this.constraints[e], this.elastic[e])),
      o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
          ? void 0
          : e.layout,
      o = this.constraints;
    n && Pt(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = Za(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = el(s)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        H((r) => {
          this.getAxisMotionValue(r) &&
            (this.constraints[r] = tl(i.layoutBox[r], this.constraints[r]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Pt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = al(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Ja(i.layout.layoutBox, o);
    if (n) {
      const a = n(nl(r));
      (this.hasMutatedConstraints = !!a), a && (r = zi(a));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = H((u) => {
        if (!Zt(u, n, this.currentDirection)) return;
        let f = (l && l[u]) || {};
        r && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: s ? e[u] : 0,
            bounceStiffness: h,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(u, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(Pn(e, s, 0, n));
  }
  stopAnimation() {
    H((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    H((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(),
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    H((n) => {
      const { drag: s } = this.getProps();
      if (!Zt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - L(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Pt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    H((r) => {
      const a = this.getAxisMotionValue(r);
      if (a) {
        const l = a.get();
        i[r] = Qa({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      H((r) => {
        if (!Zt(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: c } = this.constraints[r];
        a.set(L(l, c, i[r]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ll.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = J(e, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        Pt(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
    const r = Z(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (H((u) => {
              const f = this.getAxisMotionValue(u);
              f &&
                ((this.originPoint[u] += l[u].translate),
                f.set(f.get() + l[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = _e,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function Zt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function ul(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class fl extends ct {
  constructor(e) {
    super(e),
      (this.removeGroupControls = R),
      (this.removeListeners = R),
      (this.controls = new cl(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || R);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const is = (t) => (e, n) => {
  t && w.update(() => t(e, n));
};
class hl extends ct {
  constructor() {
    super(...arguments), (this.removePointerDownListener = R);
  }
  onPointerDown(e) {
    this.session = new Ni(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ki(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: is(e),
      onStart: is(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && w.update(() => i(o, r));
      },
    };
  }
  mount() {
    this.removePointerDownListener = J(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function dl() {
  const t = y.useContext(fe);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t,
    i = y.useId();
  return y.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const Qt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function rs(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Dt = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (V.test(t)) t = parseFloat(t);
        else return t;
      const n = rs(t, e.target.x),
        s = rs(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  pl = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = lt.parse(t);
      if (i.length > 5) return s;
      const o = lt.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (i[0 + r] /= a), (i[1 + r] /= l);
      const c = L(a, l, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
      );
    },
  };
class ml extends Us.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: o } = e;
    Ar(gl),
      o &&
        (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Qt.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: o,
      } = this.props,
      r = s.projection;
    return (
      r &&
        ((r.isPresent = o),
        i || e.layoutDependency !== n || n === void 0
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              w.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function _i(t) {
  const [e, n] = dl(),
    s = y.useContext(nn);
  return Us.createElement(ml, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: y.useContext(Hs),
    isPresent: e,
    safeToRemove: n,
  });
}
const gl = {
    borderRadius: {
      ...Dt,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Dt,
    borderTopRightRadius: Dt,
    borderBottomLeftRadius: Dt,
    borderBottomRightRadius: Dt,
    boxShadow: pl,
  },
  Xi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  yl = Xi.length,
  os = (t) => (typeof t == "string" ? parseFloat(t) : t),
  as = (t) => typeof t == "number" || V.test(t);
function vl(t, e, n, s, i, o) {
  i
    ? ((t.opacity = L(0, n.opacity !== void 0 ? n.opacity : 1, xl(s))),
      (t.opacityExit = L(e.opacity !== void 0 ? e.opacity : 1, 0, Pl(s))))
    : o &&
      (t.opacity = L(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        s
      ));
  for (let r = 0; r < yl; r++) {
    const a = `border${Xi[r]}Radius`;
    let l = ls(e, a),
      c = ls(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || as(l) === as(c)
        ? ((t[a] = Math.max(L(os(l), os(c), s), 0)),
          (X.test(c) || X.test(l)) && (t[a] += "%"))
        : (t[a] = c);
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, s));
}
function ls(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const xl = Yi(0, 0.5, vi),
  Pl = Yi(0.5, 0.95, R);
function Yi(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(gt(t, e, s)));
}
function cs(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function z(t, e) {
  cs(t.x, e.x), cs(t.y, e.y);
}
function us(t, e, n, s, i) {
  return (
    (t -= e), (t = le(t, 1 / n, s)), i !== void 0 && (t = le(t, 1 / i, s)), t
  );
}
function Tl(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (X.test(e) && ((e = parseFloat(e)), (e = L(r.min, r.max, e / 100) - r.min)),
    typeof e != "number")
  )
    return;
  let a = L(o.min, o.max, s);
  t === o && (a -= e),
    (t.min = us(t.min, e, n, a, i)),
    (t.max = us(t.max, e, n, a, i));
}
function fs(t, e, [n, s, i], o, r) {
  Tl(t, e[n], e[s], e[i], e.scale, o, r);
}
const bl = ["x", "scaleX", "originX"],
  Vl = ["y", "scaleY", "originY"];
function hs(t, e, n, s) {
  fs(t.x, e, bl, n ? n.x : void 0, s ? s.x : void 0),
    fs(t.y, e, Vl, n ? n.y : void 0, s ? s.y : void 0);
}
function ds(t) {
  return t.translate === 0 && t.scale === 1;
}
function qi(t) {
  return ds(t.x) && ds(t.y);
}
function Sl(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}
function Zi(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  );
}
function ps(t) {
  return N(t.x) / N(t.y);
}
class Al {
  constructor() {
    this.members = [];
  }
  add(e) {
    Tn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (xe(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ms(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y;
  if (
    ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: c, rotateY: u } = n;
    l && (s += `rotate(${l}deg) `),
      c && (s += `rotateX(${c}deg) `),
      u && (s += `rotateY(${u}deg) `);
  }
  const r = t.x.scale * e.x,
    a = t.y.scale * e.y;
  return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || "none";
}
const wl = (t, e) => t.depth - e.depth;
class Cl {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Tn(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    xe(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(wl),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function Ml(t, e) {
  const n = performance.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (G(s), t(o - e));
    };
  return w.read(s, !0), () => G(s);
}
function Dl(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function Ji(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function An(t, e, n) {
  const s = I(t) ? t : K(t);
  return s.start(Pn("", s, e, n)), s.animation;
}
const gs = ["", "X", "Y", "Z"],
  El = { visibility: "hidden" },
  ys = 1e3;
let Ll = 0;
const dt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Qi({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      (this.id = Ll++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (dt.totalNodes =
              dt.resolvedTargetDeltas =
              dt.recalculatedProjection =
                0),
            this.nodes.forEach(Fl),
            this.nodes.forEach(Ul),
            this.nodes.forEach(Nl),
            this.nodes.forEach(kl),
            Dl(dt);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Cl());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new bn()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Ji(r)), (this.instance = r);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        t(r, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Ml(h, 250)),
            Qt.hasAnimatedSinceResize &&
              ((Qt.hasAnimatedSinceResize = !1), this.nodes.forEach(xs));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: d,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const m =
                  this.options.transition || u.getDefaultTransition() || $l,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: T } =
                  u.getProps(),
                v = !this.targetLayout || !Zi(this.targetLayout, p) || d,
                g = !h && d;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const P = { ...xn(m, "layout"), onPlay: x, onComplete: T };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((P.delay = 0), (P.type = !1)),
                  this.startAnimation(P);
              } else
                h || xs(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        G(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Wl),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vs);
        return;
      }
      this.isUpdating || this.nodes.forEach(Il),
        (this.isUpdating = !1),
        this.nodes.forEach(jl),
        this.nodes.forEach(Rl),
        this.nodes.forEach(Bl),
        this.clearAllSnapshots();
      const a = performance.now();
      (O.delta = at(0, 1e3 / 60, a - O.timestamp)),
        (O.timestamp = a),
        (O.isProcessing = !0),
        be.update.process(O),
        be.preRender.process(O),
        be.render.process(O),
        (O.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ol), this.sharedNodes.forEach(zl);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        w.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      w.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = F()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          r ? r.layoutBox : void 0
        );
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === r &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: r,
            isRoot: s(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !qi(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      r &&
        (a || ht(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        Kl(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return F();
      const a = r.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (it(a.x, l.offset.x), it(a.y, l.offset.y)), a;
    }
    removeElementScroll(r) {
      const a = F();
      z(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            z(a, r);
            const { scroll: h } = this.root;
            h && (it(a.x, -h.offset.x), it(a.y, -h.offset.y));
          }
          it(a.x, u.offset.x), it(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = F();
      z(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Vt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          ht(u.latestValues) && Vt(l, u.latestValues);
      }
      return ht(this.latestValues) && Vt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = F();
      z(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !ht(c.latestValues)) continue;
        Xe(c.latestValues) && c.updateSnapshot();
        const u = F(),
          f = c.measurePageBox();
        z(u, f),
          hs(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return ht(this.latestValues) && hs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      (this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== O.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          r ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = O.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = F()),
              (this.relativeTargetOrigin = F()),
              Ot(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox
              ),
              z(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = F()), (this.targetWithTransforms = F())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Ya(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : z(this.target, this.layout.layoutBox),
                Gi(this.target, this.targetDelta))
              : z(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const d = this.getClosestProjectingParent();
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = d),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = F()),
                (this.relativeTargetOrigin = F()),
                Ot(this.relativeTargetOrigin, this.target, d.target),
                z(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          dt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Xe(this.parent.latestValues) ||
          Hi(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var r;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((r = this.parent) === null || r === void 0) &&
            r.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === O.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      z(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        d = this.treeScale.y;
      il(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: p } = a;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = bt()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = bt()),
        (this.projectionDeltaWithTransform = bt()));
      const m = this.projectionTransform;
      kt(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = ms(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== m ||
          this.treeScale.x !== h ||
          this.treeScale.y !== d) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        dt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), r)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = bt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = F(),
        d = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        m = d !== p,
        x = this.getStack(),
        T = !x || x.members.length <= 1,
        v = !!(m && !T && this.options.crossfade === !0 && !this.path.some(Gl));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (P) => {
        const S = P / 1e3;
        Ps(f.x, r.x, S),
          Ps(f.y, r.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ot(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Hl(this.relativeTarget, this.relativeTargetOrigin, h, S),
            g && Sl(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = F()),
            z(g, this.relativeTarget)),
          m &&
            ((this.animationValues = u), vl(u, c, this.latestValues, S, v, T)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (G(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = w.update(() => {
          (Qt.hasAnimatedSinceResize = !0),
            (this.currentAnimation = An(0, ys, {
              ...r,
              onUpdate: (a) => {
                this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
              },
              onComplete: () => {
                r.onComplete && r.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ys),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = r;
      if (!(!a || !l || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          tr(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || F();
          const f = N(this.layout.layoutBox.x);
          (l.x.min = r.target.x.min), (l.x.max = l.x.min + f);
          const h = N(this.layout.layoutBox.y);
          (l.y.min = r.target.y.min), (l.y.max = l.y.min + h);
        }
        z(a, l),
          Vt(a, u),
          kt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Al()),
        this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? (r = this.getStack()) === null || r === void 0
          ? void 0
          : r.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const c = {};
      for (let u = 0; u < gs.length; u++) {
        const f = "rotate" + gs[u];
        l[f] && ((c[f] = l[f]), r.setStaticValue(f, 0));
      }
      r.render();
      for (const u in c) r.setStaticValue(u, c[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return El;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Jt(r == null ? void 0 : r.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const m = {};
        return (
          this.options.layoutId &&
            ((m.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (m.pointerEvents = Jt(r == null ? void 0 : r.pointerEvents) || "")),
          this.hasProjected &&
            !ht(this.latestValues) &&
            ((m.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          m
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = ms(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        u && (c.transform = u(h, c.transform));
      const { x: d, y: p } = this.projectionDelta;
      (c.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const m in ne) {
        if (h[m] === void 0) continue;
        const { correct: x, applyTo: T } = ne[m],
          v = c.transform === "none" ? h[m] : x(h[m], f);
        if (T) {
          const g = T.length;
          for (let P = 0; P < g; P++) c[T[P]] = v;
        } else c[m] = v;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? Jt(r == null ? void 0 : r.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(vs),
        this.root.sharedNodes.clear();
    }
  };
}
function Rl(t) {
  t.updateLayout();
}
function Bl(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = n.source !== t.layout.source;
    o === "size"
      ? H((f) => {
          const h = r ? n.measuredBox[f] : n.layoutBox[f],
            d = N(h);
          (h.min = s[f].min), (h.max = h.min + d);
        })
      : tr(o, n.layoutBox, s) &&
        H((f) => {
          const h = r ? n.measuredBox[f] : n.layoutBox[f],
            d = N(s[f]);
          (h.max = h.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[f].max = t.relativeTarget[f].min + d));
        });
    const a = bt();
    kt(a, s, n.layoutBox);
    const l = bt();
    r ? kt(l, t.applyTransform(i, !0), n.measuredBox) : kt(l, s, n.layoutBox);
    const c = !qi(a);
    let u = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: d } = f;
        if (h && d) {
          const p = F();
          Ot(p, n.layoutBox, h.layoutBox);
          const m = F();
          Ot(m, s, d.layoutBox),
            Zi(p, m) || (u = !0),
            f.options.layoutRoot &&
              ((t.relativeTarget = m),
              (t.relativeTargetOrigin = p),
              (t.relativeParent = f));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Fl(t) {
  dt.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function kl(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Ol(t) {
  t.clearSnapshot();
}
function vs(t) {
  t.clearMeasurements();
}
function Il(t) {
  t.isLayoutDirty = !1;
}
function jl(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function xs(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function Ul(t) {
  t.resolveTargetDelta();
}
function Nl(t) {
  t.calcProjection();
}
function Wl(t) {
  t.resetRotation();
}
function zl(t) {
  t.removeLeadSnapshot();
}
function Ps(t, e, n) {
  (t.translate = L(e.translate, 0, n)),
    (t.scale = L(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Ts(t, e, n, s) {
  (t.min = L(e.min, n.min, s)), (t.max = L(e.max, n.max, s));
}
function Hl(t, e, n, s) {
  Ts(t.x, e.x, n.x, s), Ts(t.y, e.y, n.y, s);
}
function Gl(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const $l = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bs = (t) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
  Vs = bs("applewebkit/") && !bs("chrome/") ? Math.round : R;
function Ss(t) {
  (t.min = Vs(t.min)), (t.max = Vs(t.max));
}
function Kl(t) {
  Ss(t.x), Ss(t.y);
}
function tr(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !Ke(ps(e), ps(n), 0.2))
  );
}
const _l = Qi({
    attachResizeListener: (t, e) => Z(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Be = { current: void 0 },
  er = Qi({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Be.current) {
        const t = new _l({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Be.current = t);
      }
      return Be.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Xl = {
    pan: { Feature: hl },
    drag: { Feature: fl, ProjectionNode: er, MeasureLayout: _i },
  },
  Yl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function ql(t) {
  const e = Yl.exec(t);
  if (!e) return [,];
  const [, n, s] = e;
  return [n, s];
}
function qe(t, e, n = 1) {
  const [s, i] = ql(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Oi(r) ? parseFloat(r) : r;
  } else return Oe(i) ? qe(i, e, n + 1) : i;
}
function Zl(t, { ...e }, n) {
  const s = t.current;
  if (!(s instanceof Element)) return { target: e, transitionEnd: n };
  n && (n = { ...n }),
    t.values.forEach((i) => {
      const o = i.get();
      if (!Oe(o)) return;
      const r = qe(o, s);
      r && i.set(r);
    });
  for (const i in e) {
    const o = e[i];
    if (!Oe(o)) continue;
    const r = qe(o, s);
    r && ((e[i] = r), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: e, transitionEnd: n };
}
const Jl = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  nr = (t) => Jl.has(t),
  Ql = (t) => Object.keys(t).some(nr),
  As = (t) => t === xt || t === V,
  ws = (t, e) => parseFloat(t.split(", ")[e]),
  Cs =
    (t, e) =>
    (n, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const i = s.match(/^matrix3d\((.+)\)$/);
      if (i) return ws(i[1], e);
      {
        const o = s.match(/^matrix\((.+)\)$/);
        return o ? ws(o[1], t) : 0;
      }
    },
  tc = new Set(["x", "y", "z"]),
  ec = zt.filter((t) => !tc.has(t));
function nc(t) {
  const e = [];
  return (
    ec.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e.length && t.render(),
    e
  );
}
const St = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Cs(4, 13),
  y: Cs(5, 14),
};
St.translateX = St.x;
St.translateY = St.y;
const sc = (t, e, n) => {
    const s = e.measureViewportBox(),
      i = e.current,
      o = getComputedStyle(i),
      { display: r } = o,
      a = {};
    r === "none" && e.setStaticValue("display", t.display || "block"),
      n.forEach((c) => {
        a[c] = St[c](s, o);
      }),
      e.render();
    const l = e.measureViewportBox();
    return (
      n.forEach((c) => {
        const u = e.getValue(c);
        u && u.jump(a[c]), (t[c] = St[c](l, o));
      }),
      t
    );
  },
  ic = (t, e, n = {}, s = {}) => {
    (e = { ...e }), (s = { ...s });
    const i = Object.keys(e).filter(nr);
    let o = [],
      r = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const c = t.getValue(l);
        if (!t.hasValue(l)) return;
        let u = n[l],
          f = Mt(u);
        const h = e[l];
        let d;
        if (ie(h)) {
          const p = h.length,
            m = h[0] === null ? 1 : 0;
          (u = h[m]), (f = Mt(u));
          for (let x = m; x < p && h[x] !== null; x++)
            d ? fn(Mt(h[x]) === d) : (d = Mt(h[x]));
        } else d = Mt(h);
        if (f !== d)
          if (As(f) && As(d)) {
            const p = c.get();
            typeof p == "string" && c.set(parseFloat(p)),
              typeof h == "string"
                ? (e[l] = parseFloat(h))
                : Array.isArray(h) && d === V && (e[l] = h.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            d != null &&
            d.transform &&
            (u === 0 || h === 0)
              ? u === 0
                ? c.set(d.transform(u))
                : (e[l] = f.transform(h))
              : (r || ((o = nc(t)), (r = !0)),
                a.push(l),
                (s[l] = s[l] !== void 0 ? s[l] : e[l]),
                c.jump(h));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        c = sc(e, t, a);
      return (
        o.length &&
          o.forEach(([u, f]) => {
            t.getValue(u).set(f);
          }),
        t.render(),
        he && l !== null && window.scrollTo({ top: l }),
        { target: c, transitionEnd: s }
      );
    } else return { target: e, transitionEnd: s };
  };
function rc(t, e, n, s) {
  return Ql(e) ? ic(t, e, n, s) : { target: e, transitionEnd: s };
}
const oc = (t, e, n, s) => {
    const i = Zl(t, e, s);
    return (e = i.target), (s = i.transitionEnd), rc(t, e, n, s);
  },
  Ze = { current: null },
  sr = { current: !1 };
function ac() {
  if (((sr.current = !0), !!he))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Ze.current = t.matches);
      t.addListener(e), e();
    } else Ze.current = !1;
}
function lc(t, e, n) {
  const { willChange: s } = e;
  for (const i in e) {
    const o = e[i],
      r = n[i];
    if (I(o)) t.addValue(i, o), ae(s) && s.add(i);
    else if (I(r)) t.addValue(i, K(o, { owner: t })), ae(s) && s.remove(i);
    else if (r !== o)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, K(a !== void 0 ? a : o, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const Wt = new WeakMap(),
  ir = Object.keys(Ut),
  cc = ir.length,
  Ms = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  uc = en.length;
class fc {
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      visualState: o,
    },
    r = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => w.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = r),
      (this.isControllingVariants = pe(n)),
      (this.isVariantNode = zs(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in u) {
      const h = u[f];
      a[f] !== void 0 && I(h) && (h.set(a[f], !1), ae(c) && c.add(f));
    }
  }
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    (this.current = e),
      Wt.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      sr.current || ac(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ze.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Wt.delete(this.current),
      this.projection && this.projection.unmount(),
      G(this.notifyUpdate),
      G(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const s = vt.has(e),
      i = n.on("change", (r) => {
        (this.latestValues[e] = r),
          this.props.onUpdate && w.update(this.notifyUpdate, !1, !0),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), o();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, s, i, o) {
    let r, a;
    for (let l = 0; l < cc; l++) {
      const c = ir[l],
        {
          isEnabled: u,
          Feature: f,
          ProjectionNode: h,
          MeasureLayout: d,
        } = Ut[c];
      h && (r = h),
        u(n) &&
          (!this.features[c] && f && (this.features[c] = new f(this)),
          d && (a = d));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      r
    ) {
      this.projection = new r(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: c,
        drag: u,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: d,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || (f && Pt(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        layoutScroll: h,
        layoutRoot: d,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : F();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let s = 0; s < Ms.length; s++) {
      const i = Ms[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = e["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = lc(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (s.initial = this.props.initial), s
      );
    }
    const n = {};
    for (let s = 0; s < uc; s++) {
      const i = en[s],
        o = this.props[i];
      (jt(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    n !== this.values.get(e) &&
      (this.removeValue(e), this.bindToMotionValue(e, n)),
      this.values.set(e, n),
      (this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = K(n, { owner: this })), this.addValue(e, s)),
      s
    );
  }
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current
      ? this.latestValues[e]
      : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, e, this.options);
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props,
      i =
        typeof s == "string" || typeof s == "object"
          ? (n = un(this.props, s)) === null || n === void 0
            ? void 0
            : n[e]
          : void 0;
    if (s && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !I(o)
      ? o
      : this.initialValues[e] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new bn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class rr extends fc {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: n, ...s },
    { transformValues: i },
    o
  ) {
    let r = La(s, e || {}, this);
    if ((i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o)) {
      Da(this, s, r);
      const a = oc(this, s, r, n);
      (n = a.transitionEnd), (s = a.target);
    }
    return { transition: e, transitionEnd: n, ...s };
  }
}
function hc(t) {
  return window.getComputedStyle(t);
}
class or extends rr {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(e, n) {
    if (vt.has(n)) {
      const s = vn(n);
      return (s && s.default) || 0;
    } else {
      const s = hc(e),
        i = (Ks(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return $i(e, n);
  }
  build(e, n, s, i) {
    rn(e, n, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return cn(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    I(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(e, n, s, i) {
    Js(e, n, s, i);
  }
}
class ar extends rr {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (vt.has(n)) {
      const s = vn(n);
      return (s && s.default) || 0;
    }
    return (n = Qs.has(n) ? n : Qe(n)), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return F();
  }
  scrapeMotionValuesFromProps(e, n) {
    return ei(e, n);
  }
  build(e, n, s, i) {
    an(e, n, s, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    ti(e, n, s, i);
  }
  mount(e) {
    (this.isSVGTag = ln(e.tagName)), super.mount(e);
  }
}
const dc = (t, e) =>
    sn(t)
      ? new ar(e, { enableHardwareAcceleration: !1 })
      : new or(e, { enableHardwareAcceleration: !0 }),
  pc = { layout: { ProjectionNode: er, MeasureLayout: _i } },
  mc = { ...$a, ...mo, ...Xl, ...pc },
  Su = Vr((t, e) => eo(t, e, mc, dc));
function lr() {
  const t = y.useRef(!1);
  return (
    yt(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      []
    ),
    t
  );
}
function gc() {
  const t = lr(),
    [e, n] = y.useState(0),
    s = y.useCallback(() => {
      t.current && n(e + 1);
    }, [e]);
  return [y.useCallback(() => w.postRender(s), [s]), e];
}
class yc extends y.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      (s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function vc({ children: t, isPresent: e }) {
  const n = y.useId(),
    s = y.useRef(null),
    i = y.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    y.useInsertionEffect(() => {
      const { width: o, height: r, top: a, left: l } = i.current;
      if (e || !s.current || !o || !r) return;
      s.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [e]),
    y.createElement(
      yc,
      { isPresent: e, childRef: s, sizeRef: i },
      y.cloneElement(t, { ref: s })
    )
  );
}
const Fe = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
}) => {
  const a = At(xc),
    l = y.useId(),
    c = y.useMemo(
      () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (const f of a.values()) if (!f) return;
          s && s();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? void 0 : [n]
    );
  return (
    y.useMemo(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    y.useEffect(() => {
      !n && !a.size && s && s();
    }, [n]),
    r === "popLayout" && (t = y.createElement(vc, { isPresent: n }, t)),
    y.createElement(fe.Provider, { value: c }, t)
  );
};
function xc() {
  return new Map();
}
function Pc(t) {
  return y.useEffect(() => () => t(), []);
}
const pt = (t) => t.key || "";
function Tc(t, e) {
  t.forEach((n) => {
    const s = pt(n);
    e.set(s, n);
  });
}
function bc(t) {
  const e = [];
  return (
    y.Children.forEach(t, (n) => {
      y.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Au = ({
  children: t,
  custom: e,
  initial: n = !0,
  onExitComplete: s,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: r = "sync",
}) => {
  const a = y.useContext(nn).forceRender || gc()[0],
    l = lr(),
    c = bc(t);
  let u = c;
  const f = y.useRef(new Map()).current,
    h = y.useRef(u),
    d = y.useRef(new Map()).current,
    p = y.useRef(!0);
  if (
    (yt(() => {
      (p.current = !1), Tc(c, d), (h.current = u);
    }),
    Pc(() => {
      (p.current = !0), d.clear(), f.clear();
    }),
    p.current)
  )
    return y.createElement(
      y.Fragment,
      null,
      u.map((v) =>
        y.createElement(
          Fe,
          {
            key: pt(v),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: r,
          },
          v
        )
      )
    );
  u = [...u];
  const m = h.current.map(pt),
    x = c.map(pt),
    T = m.length;
  for (let v = 0; v < T; v++) {
    const g = m[v];
    x.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0);
  }
  return (
    r === "wait" && f.size && (u = []),
    f.forEach((v, g) => {
      if (x.indexOf(g) !== -1) return;
      const P = d.get(g);
      if (!P) return;
      const S = m.indexOf(g);
      let C = v;
      if (!C) {
        const M = () => {
          f.delete(g);
          const b = Array.from(d.keys()).filter((A) => !x.includes(A));
          if (
            (b.forEach((A) => d.delete(A)),
            (h.current = c.filter((A) => {
              const k = pt(A);
              return k === g || b.includes(k);
            })),
            !f.size)
          ) {
            if (l.current === !1) return;
            a(), s && s();
          }
        };
        (C = y.createElement(
          Fe,
          {
            key: pt(P),
            isPresent: !1,
            onExitComplete: M,
            custom: e,
            presenceAffectsLayout: o,
            mode: r,
          },
          P
        )),
          f.set(g, C);
      }
      u.splice(S, 0, C);
    }),
    (u = u.map((v) => {
      const g = v.key;
      return f.has(g)
        ? v
        : y.createElement(
            Fe,
            { key: pt(v), isPresent: !0, presenceAffectsLayout: o, mode: r },
            v
          );
    })),
    y.createElement(
      y.Fragment,
      null,
      f.size ? u : u.map((v) => y.cloneElement(v))
    )
  );
};
function cr(t) {
  const e = At(() => K(t)),
    { isStatic: n } = y.useContext(ce);
  if (n) {
    const [, s] = y.useState(t);
    y.useEffect(() => e.on("change", s), []);
  }
  return e;
}
const Vc = (t) => t && typeof t == "object" && t.mix,
  Sc = (t) => (Vc(t) ? t.mix : void 0);
function Ac(...t) {
  const e = !Array.isArray(t[0]),
    n = e ? 0 : -1,
    s = t[0 + n],
    i = t[1 + n],
    o = t[2 + n],
    r = t[3 + n],
    a = ve(i, o, { mixer: Sc(o[0]), ...r });
  return e ? a(s) : a;
}
function ur(t, e) {
  const n = cr(e()),
    s = () => n.set(e());
  return (
    s(),
    yt(() => {
      const i = () => w.update(s, !1, !0),
        o = t.map((r) => r.on("change", i));
      return () => {
        o.forEach((r) => r()), G(s);
      };
    }),
    n
  );
}
function wc(t) {
  (Ft.current = []), t();
  const e = ur(Ft.current, t);
  return (Ft.current = void 0), e;
}
function wu(t, e, n, s) {
  if (typeof t == "function") return wc(t);
  const i = typeof e == "function" ? e : Ac(e, n, s);
  return Array.isArray(t) ? Ds(t, i) : Ds([t], ([o]) => i(o));
}
function Ds(t, e) {
  const n = At(() => []);
  return ur(t, () => {
    n.length = 0;
    const s = t.length;
    for (let i = 0; i < s; i++) n[i] = t[i].get();
    return e(n);
  });
}
function Cu(t, e = {}) {
  const { isStatic: n } = y.useContext(ce),
    s = y.useRef(null),
    i = cr(I(t) ? t.get() : t),
    o = () => {
      s.current && s.current.stop();
    };
  return (
    y.useInsertionEffect(
      () =>
        i.attach((r, a) => {
          if (n) return a(r);
          if (
            (o(),
            (s.current = Nt({
              keyframes: [i.get(), r],
              velocity: i.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...e,
              onUpdate: a,
            })),
            !O.isProcessing)
          ) {
            const l = performance.now() - O.timestamp;
            l < 30 && (s.current.time = _(l));
          }
          return i.get();
        }, o),
      [JSON.stringify(e)]
    ),
    yt(() => {
      if (I(t)) return t.on("change", (r) => i.set(parseFloat(r)));
    }, [i]),
    i
  );
}
function Mu(t, e, n) {
  y.useInsertionEffect(() => t.on(e, n), [t, e, n]);
}
function Pe(t, e, n) {
  var s;
  if (typeof t == "string") {
    let i = document;
    n
      ? (((s = n[t]) !== null && s !== void 0) ||
          (n[t] = i.querySelectorAll(t)),
        (t = n[t]))
      : (t = i.querySelectorAll(t));
  } else t instanceof Element && (t = [t]);
  return Array.from(t || []);
}
const te = new WeakMap();
let st;
function Cc(t, e) {
  if (e) {
    const { inlineSize: n, blockSize: s } = e[0];
    return { width: n, height: s };
  } else
    return t instanceof SVGElement && "getBBox" in t
      ? t.getBBox()
      : { width: t.offsetWidth, height: t.offsetHeight };
}
function Mc({ target: t, contentRect: e, borderBoxSize: n }) {
  var s;
  (s = te.get(t)) === null ||
    s === void 0 ||
    s.forEach((i) => {
      i({
        target: t,
        contentSize: e,
        get size() {
          return Cc(t, n);
        },
      });
    });
}
function Dc(t) {
  t.forEach(Mc);
}
function Ec() {
  typeof ResizeObserver > "u" || (st = new ResizeObserver(Dc));
}
function Lc(t, e) {
  st || Ec();
  const n = Pe(t);
  return (
    n.forEach((s) => {
      let i = te.get(s);
      i || ((i = new Set()), te.set(s, i)),
        i.add(e),
        st == null || st.observe(s);
    }),
    () => {
      n.forEach((s) => {
        const i = te.get(s);
        i == null || i.delete(e),
          (i != null && i.size) || st == null || st.unobserve(s);
      });
    }
  );
}
const ee = new Set();
let It;
function Rc() {
  (It = () => {
    const t = { width: window.innerWidth, height: window.innerHeight },
      e = { target: window, size: t, contentSize: t };
    ee.forEach((n) => n(e));
  }),
    window.addEventListener("resize", It);
}
function Bc(t) {
  return (
    ee.add(t),
    It || Rc(),
    () => {
      ee.delete(t), !ee.size && It && (It = void 0);
    }
  );
}
function Fc(t, e) {
  return typeof t == "function" ? Bc(t) : Lc(t, e);
}
const kc = 50,
  Es = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Oc = () => ({ time: 0, x: Es(), y: Es() }),
  Ic = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Ls(t, e, n, s) {
  const i = n[e],
    { length: o, position: r } = Ic[e],
    a = i.current,
    l = n.time;
  (i.current = t["scroll" + r]),
    (i.scrollLength = t["scroll" + o] - t["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = gt(0, i.scrollLength, i.current));
  const c = s - l;
  i.velocity = c > kc ? 0 : gn(i.current - a, c);
}
function jc(t, e, n) {
  Ls(t, "x", e, n), Ls(t, "y", e, n), (e.time = n);
}
function Uc(t, e) {
  const n = { x: 0, y: 0 };
  let s = t;
  for (; s && s !== e; )
    if (s instanceof HTMLElement)
      (n.x += s.offsetLeft), (n.y += s.offsetTop), (s = s.offsetParent);
    else if (s.tagName === "svg") {
      const i = s.getBoundingClientRect();
      s = s.parentElement;
      const o = s.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (s instanceof SVGGraphicsElement) {
      const { x: i, y: o } = s.getBBox();
      (n.x += i), (n.y += o);
      let r = null,
        a = s.parentNode;
      for (; !r; ) a.tagName === "svg" && (r = a), (a = s.parentNode);
      s = r;
    } else break;
  return n;
}
const Nc = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Je = { start: 0, center: 0.5, end: 1 };
function Rs(t, e, n = 0) {
  let s = 0;
  if ((Je[t] !== void 0 && (t = Je[t]), typeof t == "string")) {
    const i = parseFloat(t);
    t.endsWith("px")
      ? (s = i)
      : t.endsWith("%")
      ? (t = i / 100)
      : t.endsWith("vw")
      ? (s = (i / 100) * document.documentElement.clientWidth)
      : t.endsWith("vh")
      ? (s = (i / 100) * document.documentElement.clientHeight)
      : (t = i);
  }
  return typeof t == "number" && (s = e * t), n + s;
}
const Wc = [0, 0];
function zc(t, e, n, s) {
  let i = Array.isArray(t) ? t : Wc,
    o = 0,
    r = 0;
  return (
    typeof t == "number"
      ? (i = [t, t])
      : typeof t == "string" &&
        ((t = t.trim()),
        t.includes(" ") ? (i = t.split(" ")) : (i = [t, Je[t] ? t : "0"])),
    (o = Rs(i[0], n, s)),
    (r = Rs(i[1], e)),
    o - r
  );
}
const Hc = { x: 0, y: 0 };
function Gc(t) {
  return "getBBox" in t && t.tagName !== "svg"
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function $c(t, e, n) {
  let { offset: s = Nc.All } = n;
  const { target: i = t, axis: o = "y" } = n,
    r = o === "y" ? "height" : "width",
    a = i !== t ? Uc(i, t) : Hc,
    l = i === t ? { width: t.scrollWidth, height: t.scrollHeight } : Gc(i),
    c = { width: t.clientWidth, height: t.clientHeight };
  e[o].offset.length = 0;
  let u = !e[o].interpolate;
  const f = s.length;
  for (let h = 0; h < f; h++) {
    const d = zc(s[h], c[r], l[r], a[o]);
    !u && d !== e[o].interpolatorOffsets[h] && (u = !0), (e[o].offset[h] = d);
  }
  u &&
    ((e[o].interpolate = ve(e[o].offset, mn(s))),
    (e[o].interpolatorOffsets = [...e[o].offset])),
    (e[o].progress = e[o].interpolate(e[o].current));
}
function Kc(t, e = t, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
    let s = e;
    for (; s && s !== t; )
      (n.x.targetOffset += s.offsetLeft),
        (n.y.targetOffset += s.offsetTop),
        (s = s.offsetParent);
  }
  (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
    (n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
    (n.x.containerLength = t.clientWidth),
    (n.y.containerLength = t.clientHeight);
}
function _c(t, e, n, s = {}) {
  return {
    measure: () => Kc(t, s.target, n),
    update: (i) => {
      jc(t, n, i), (s.offset || s.target) && $c(t, n, s);
    },
    notify: () => e(n),
  };
}
const Et = new WeakMap(),
  Bs = new WeakMap(),
  ke = new WeakMap(),
  Fs = (t) => (t === document.documentElement ? window : t);
function Xc(t, { container: e = document.documentElement, ...n } = {}) {
  let s = ke.get(e);
  s || ((s = new Set()), ke.set(e, s));
  const i = Oc(),
    o = _c(e, t, i, n);
  if ((s.add(o), !Et.has(e))) {
    const a = () => {
        for (const h of s) h.measure();
      },
      l = () => {
        for (const h of s) h.update(O.timestamp);
      },
      c = () => {
        for (const h of s) h.notify();
      },
      u = () => {
        w.read(a, !1, !0), w.read(l, !1, !0), w.update(c, !1, !0);
      };
    Et.set(e, u);
    const f = Fs(e);
    window.addEventListener("resize", u, { passive: !0 }),
      e !== document.documentElement && Bs.set(e, Fc(e, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  const r = Et.get(e);
  return (
    w.read(r, !1, !0),
    () => {
      var a;
      G(r);
      const l = ke.get(e);
      if (!l || (l.delete(o), l.size)) return;
      const c = Et.get(e);
      Et.delete(e),
        c &&
          (Fs(e).removeEventListener("scroll", c),
          (a = Bs.get(e)) === null || a === void 0 || a(),
          window.removeEventListener("resize", c));
    }
  );
}
function ks(t, e) {
  vo(!!(!e || e.current));
}
const Yc = () => ({
  scrollX: K(0),
  scrollY: K(0),
  scrollXProgress: K(0),
  scrollYProgress: K(0),
});
function Du({ container: t, target: e, layoutEffect: n = !0, ...s } = {}) {
  const i = At(Yc);
  return (
    (n ? yt : y.useEffect)(
      () => (
        ks("target", e),
        ks("container", t),
        Xc(
          ({ x: r, y: a }) => {
            i.scrollX.set(r.current),
              i.scrollXProgress.set(r.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...s,
            container: (t == null ? void 0 : t.current) || void 0,
            target: (e == null ? void 0 : e.current) || void 0,
          }
        )
      ),
      [t, e, JSON.stringify(s.offset)]
    ),
    i
  );
}
function qc(t) {
  t.values.forEach((e) => e.stop());
}
function Zc() {
  const t = new Set(),
    e = {
      subscribe(n) {
        return t.add(n), () => void t.delete(n);
      },
      start(n, s) {
        const i = [];
        return (
          t.forEach((o) => {
            i.push(Ui(o, n, { transitionOverride: s }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return t.forEach((s) => {
          Ma(s, n);
        });
      },
      stop() {
        t.forEach((n) => {
          qc(n);
        });
      },
      mount() {
        return () => {
          e.stop();
        };
      },
    };
  return e;
}
function Jc(t, e) {
  let n;
  const s = () => {
    const { currentTime: i } = e,
      r = (i === null ? 0 : i.value) / 100;
    n !== r && t(r), (n = r);
  };
  return w.update(s, !0), () => G(s);
}
const Qc = Bi(() => window.ScrollTimeline !== void 0);
class fr {
  constructor(e) {
    this.animations = e.filter(Boolean);
  }
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((s) => {
      if (Qc() && s.attachTimeline) s.attachTimeline(e);
      else
        return (
          s.pause(),
          Jc((i) => {
            s.time = s.duration * i;
          }, e)
        );
    });
    return () => {
      n.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  stop() {
    this.runAll("stop");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function tu(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function eu(t) {
  const e = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Ji(t)
      ? new ar(e, { enableHardwareAcceleration: !1 })
      : new or(e, { enableHardwareAcceleration: !0 });
  n.mount(t), Wt.set(t, n);
}
function nu(t, e = 100) {
  const n = yn({ keyframes: [0, e], ...t }),
    s = Math.min(We(n), Ne);
  return {
    type: "keyframes",
    ease: (i) => n.next(s * i).value / e,
    duration: _(s),
  };
}
function Os(t, e, n, s) {
  var i;
  return typeof e == "number"
    ? e
    : e.startsWith("-") || e.startsWith("+")
    ? Math.max(0, t + parseFloat(e))
    : e === "<"
    ? n
    : (i = s.get(e)) !== null && i !== void 0
    ? i
    : t;
}
const su = (t, e, n) => {
  const s = e - t;
  return ((((n - t) % s) + s) % s) + t;
};
function iu(t, e) {
  return mi(t) ? t[su(0, t.length, e)] : t;
}
function ru(t, e, n) {
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    i.at > e && i.at < n && (xe(t, i), s--);
  }
}
function ou(t, e, n, s, i, o) {
  ru(t, i, o);
  for (let r = 0; r < e.length; r++)
    t.push({ value: e[r], at: L(i, o, s[r]), easing: iu(n, r) });
}
function au(t, e) {
  return t.at === e.at
    ? t.value === null
      ? 1
      : e.value === null
      ? -1
      : 0
    : t.at - e.at;
}
const lu = "easeInOut";
function cu(t, { defaultTransition: e = {}, ...n } = {}, s) {
  const i = e.duration || 0.3,
    o = new Map(),
    r = new Map(),
    a = {},
    l = new Map();
  let c = 0,
    u = 0,
    f = 0;
  for (let h = 0; h < t.length; h++) {
    const d = t[h];
    if (typeof d == "string") {
      l.set(d, u);
      continue;
    } else if (!Array.isArray(d)) {
      l.set(d.name, Os(u, d.at, c, l));
      continue;
    }
    let [p, m, x = {}] = d;
    x.at !== void 0 && (u = Os(u, x.at, c, l));
    let T = 0;
    const v = (g, P, S, C = 0, M = 0) => {
      const b = uu(g),
        { delay: A = 0, times: k = mn(b), type: Q = "keyframes", ...U } = P;
      let { ease: W = e.ease || "easeOut", duration: E } = P;
      const Y = typeof A == "function" ? A(C, M) : A,
        B = b.length;
      if (B <= 2 && Q === "spring") {
        let wt = 100;
        if (B === 2 && du(b)) {
          const Kt = b[1] - b[0];
          wt = Math.abs(Kt);
        }
        const D = { ...U };
        E !== void 0 && (D.duration = ot(E));
        const et = nu(D, wt);
        (W = et.ease), (E = et.duration);
      }
      E ?? (E = i);
      const $ = u + Y,
        tt = $ + E;
      k.length === 1 && k[0] === 0 && (k[1] = 1);
      const q = k.length - b.length;
      q > 0 && Li(k, q),
        b.length === 1 && b.unshift(null),
        ou(S, b, W, k, $, tt),
        (T = Math.max(Y + E, T)),
        (f = Math.max(tt, f));
    };
    if (I(p)) {
      const g = Is(p, r);
      v(m, x, js("default", g));
    } else {
      const g = Pe(p, s, a),
        P = g.length;
      for (let S = 0; S < P; S++) {
        (m = m), (x = x);
        const C = g[S],
          M = Is(C, r);
        for (const b in m) v(m[b], fu(x, b), js(b, M), S, P);
      }
    }
    (c = u), (u += T);
  }
  return (
    r.forEach((h, d) => {
      for (const p in h) {
        const m = h[p];
        m.sort(au);
        const x = [],
          T = [],
          v = [];
        for (let P = 0; P < m.length; P++) {
          const { at: S, value: C, easing: M } = m[P];
          x.push(C), T.push(gt(0, f, S)), v.push(M || "easeOut");
        }
        T[0] !== 0 && (T.unshift(0), x.unshift(x[0]), v.unshift(lu)),
          T[T.length - 1] !== 1 && (T.push(1), x.push(null)),
          o.has(d) || o.set(d, { keyframes: {}, transition: {} });
        const g = o.get(d);
        (g.keyframes[p] = x),
          (g.transition[p] = { ...e, duration: f, ease: v, times: T, ...n });
      }
    }),
    o
  );
}
function Is(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function js(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function uu(t) {
  return Array.isArray(t) ? t : [t];
}
function fu(t, e) {
  return t[e] ? { ...t, ...t[e] } : { ...t };
}
const hu = (t) => typeof t == "number",
  du = (t) => t.every(hu);
function hr(t, e, n, s) {
  const i = Pe(t),
    o = i.length,
    r = [];
  for (let a = 0; a < o; a++) {
    const l = i[a];
    Wt.has(l) || eu(l);
    const c = Wt.get(l),
      u = { ...n };
    typeof u.delay == "function" && (u.delay = u.delay(a, o)),
      r.push(...Sn(c, { ...e, transition: u }, {}));
  }
  return new fr(r);
}
const pu = (t) => Array.isArray(t) && Array.isArray(t[0]);
function mu(t, e, n) {
  const s = [];
  return (
    cu(t, e, n).forEach(({ keyframes: o, transition: r }, a) => {
      let l;
      I(a) ? (l = An(a, o.default, r.default)) : (l = hr(a, o, r)), s.push(l);
    }),
    new fr(s)
  );
}
const gu = (t) => {
    function e(n, s, i) {
      let o;
      return (
        pu(n)
          ? (o = mu(n, s, t))
          : tu(s)
          ? (o = hr(n, s, i))
          : (o = An(n, s, i)),
        o
      );
    }
    return e;
  },
  Eu = gu();
function yu() {
  const t = At(Zc);
  return yt(t.mount, []), t;
}
const Lu = yu,
  vu = { some: 0, all: 1 };
function xu(t, e, { root: n, margin: s, amount: i = "some" } = {}) {
  const o = Pe(t),
    r = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        const f = r.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            const h = e(u);
            typeof h == "function" ? r.set(u.target, h) : l.unobserve(u.target);
          } else f && (f(u), r.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: s,
      threshold: typeof i == "number" ? i : vu[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function Ru(t, { root: e, margin: n, amount: s, once: i = !1 } = {}) {
  const [o, r] = y.useState(!1);
  return (
    y.useEffect(() => {
      if (!t.current || (i && o)) return;
      const a = () => (r(!0), i ? void 0 : () => r(!1)),
        l = { root: (e && e.current) || void 0, margin: n, amount: s };
      return xu(t.current, a, l);
    }, [e, t, n, i, s]),
    o
  );
}
export {
  Au as AnimatePresence,
  Cl as FlatTree,
  nn as LayoutGroupContext,
  ce as MotionConfigContext,
  ue as MotionContext,
  Ta as MotionGlobalConfig,
  Va as MotionValue,
  fe as PresenceContext,
  Hs as SwitchLayoutGroupContext,
  fc as VisualElement,
  J as addPointerEvent,
  no as addPointerInfo,
  Ar as addScaleCorrector,
  Eu as animate,
  Nt as animateValue,
  Ui as animateVisualElement,
  Zc as animationControls,
  $a as animations,
  Do as anticipate,
  dn as backIn,
  Mo as backInOut,
  xi as backOut,
  Mr as buildTransform,
  N as calcLength,
  G as cancelFrame,
  Da as checkTargetForNewValues,
  hn as circIn,
  Co as circInOut,
  vi as circOut,
  at as clamp,
  j as color,
  lt as complex,
  F as createBox,
  Tr as createMotionComponent,
  gu as createScopedAnimate,
  $t as cubicBezier,
  Ml as delay,
  Hn as distance,
  Ka as distance2D,
  Ao as easeIn,
  pi as easeInOut,
  wo as easeOut,
  Ur as filterProps,
  w as frame,
  O as frameData,
  xu as inView,
  ve as interpolate,
  fn as invariant,
  he as isBrowser,
  oi as isDragActive,
  I as isMotionValue,
  se as isValidMotionProp,
  ni as makeUseVisualState,
  gi as mirrorEasing,
  L as mix,
  Su as motion,
  K as motionValue,
  Ws as optimizedAppearDataAttribute,
  rt as pipe,
  gt as progress,
  V as px,
  Jt as resolveMotionValue,
  yi as reverseEasing,
  Xc as scrollInfo,
  yn as spring,
  be as steps,
  Ac as transform,
  Lu as useAnimation,
  yu as useAnimationControls,
  gc as useForceUpdate,
  Ru as useInView,
  yt as useIsomorphicLayoutEffect,
  cr as useMotionValue,
  Mu as useMotionValueEvent,
  dl as usePresence,
  Du as useScroll,
  Cu as useSpring,
  wu as useTransform,
  Pc as useUnmountEffect,
  Wt as visualElementStore,
  vo as warning,
  su as wrap,
};
