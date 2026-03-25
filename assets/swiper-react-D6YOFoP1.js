import { r as p, R as v } from "./wallet-libs-C4iBya-7.js";
import { s as H, d as k, S as ee } from "./swiper-libs-ChlQaAX5.js";
import "./crypto-libs-BTkSibId.js";
const W = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function L(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function $(e, t) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((n) => i.indexOf(n) < 0)
    .forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : L(t[n]) && L(e[n]) && Object.keys(t[n]).length > 0
        ? t[n].__swiper__
          ? (e[n] = t[n])
          : $(e[n], t[n])
        : (e[n] = t[n]);
    });
}
function q(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function G(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function U(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function y(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((n) => n.trim())
      .filter((n) => !!n),
    i = [];
  return (
    t.forEach((n) => {
      i.indexOf(n) < 0 && i.push(n);
    }),
    i.join(" ")
  );
}
function te(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function ne(e) {
  let {
    swiper: t,
    slides: i,
    passedParams: n,
    changedParams: c,
    nextEl: a,
    prevEl: u,
    scrollbarEl: f,
    paginationEl: r,
  } = e;
  const g = c.filter(
      (l) => l !== "children" && l !== "direction" && l !== "wrapperClass"
    ),
    {
      params: s,
      pagination: d,
      navigation: E,
      scrollbar: m,
      virtual: S,
      thumbs: R,
    } = t;
  let b, o, _, N, z, x, C, P;
  c.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    !n.thumbs.swiper.destroyed &&
    s.thumbs &&
    (!s.thumbs.swiper || s.thumbs.swiper.destroyed) &&
    (b = !0),
    c.includes("controller") &&
      n.controller &&
      n.controller.control &&
      s.controller &&
      !s.controller.control &&
      (o = !0),
    c.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || r) &&
      (s.pagination || s.pagination === !1) &&
      d &&
      !d.el &&
      (_ = !0),
    c.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || f) &&
      (s.scrollbar || s.scrollbar === !1) &&
      m &&
      !m.el &&
      (N = !0),
    c.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || u) &&
      (n.navigation.nextEl || a) &&
      (s.navigation || s.navigation === !1) &&
      E &&
      !E.prevEl &&
      !E.nextEl &&
      (z = !0);
  const w = (l) => {
    t[l] &&
      (t[l].destroy(),
      l === "navigation"
        ? (t.isElement && (t[l].prevEl.remove(), t[l].nextEl.remove()),
          (s[l].prevEl = void 0),
          (s[l].nextEl = void 0),
          (t[l].prevEl = void 0),
          (t[l].nextEl = void 0))
        : (t.isElement && t[l].el.remove(),
          (s[l].el = void 0),
          (t[l].el = void 0)));
  };
  c.includes("loop") &&
    t.isElement &&
    (s.loop && !n.loop ? (x = !0) : !s.loop && n.loop ? (C = !0) : (P = !0)),
    g.forEach((l) => {
      if (L(s[l]) && L(n[l]))
        Object.assign(s[l], n[l]),
          (l === "navigation" || l === "pagination" || l === "scrollbar") &&
            "enabled" in n[l] &&
            !n[l].enabled &&
            w(l);
      else {
        const B = n[l];
        (B === !0 || B === !1) &&
        (l === "navigation" || l === "pagination" || l === "scrollbar")
          ? B === !1 && w(l)
          : (s[l] = n[l]);
      }
    }),
    g.includes("controller") &&
      !o &&
      t.controller &&
      t.controller.control &&
      s.controller &&
      s.controller.control &&
      (t.controller.control = s.controller.control),
    c.includes("children") && i && S && s.virtual.enabled
      ? ((S.slides = i), S.update(!0))
      : c.includes("virtual") &&
        S &&
        s.virtual.enabled &&
        (i && (S.slides = i), S.update(!0)),
    c.includes("children") && i && s.loop && (P = !0),
    b && R.init() && R.update(!0),
    o && (t.controller.control = s.controller.control),
    _ &&
      (t.isElement &&
        (!r || typeof r == "string") &&
        ((r = document.createElement("div")),
        r.classList.add("swiper-pagination"),
        r.part.add("pagination"),
        t.el.appendChild(r)),
      r && (s.pagination.el = r),
      d.init(),
      d.render(),
      d.update()),
    N &&
      (t.isElement &&
        (!f || typeof f == "string") &&
        ((f = document.createElement("div")),
        f.classList.add("swiper-scrollbar"),
        f.part.add("scrollbar"),
        t.el.appendChild(f)),
      f && (s.scrollbar.el = f),
      m.init(),
      m.updateSize(),
      m.setTranslate()),
    z &&
      (t.isElement &&
        ((!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-next"),
          H(a, t.hostEl.constructor.nextButtonSvg),
          a.part.add("button-next"),
          t.el.appendChild(a)),
        (!u || typeof u == "string") &&
          ((u = document.createElement("div")),
          u.classList.add("swiper-button-prev"),
          H(u, t.hostEl.constructor.prevButtonSvg),
          u.part.add("button-prev"),
          t.el.appendChild(u))),
      a && (s.navigation.nextEl = a),
      u && (s.navigation.prevEl = u),
      E.init(),
      E.update()),
    c.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext),
    c.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev),
    c.includes("direction") && t.changeDirection(n.direction, !1),
    (x || P) && t.loopDestroy(),
    (C || P) && t.loopCreate(),
    t.update();
}
function re(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const i = { on: {} },
    n = {},
    c = {};
  $(i, k), (i._emitClasses = !0), (i.init = !1);
  const a = {},
    u = W.map((r) => r.replace(/_/, "")),
    f = Object.assign({}, e);
  return (
    Object.keys(f).forEach((r) => {
      typeof e[r] > "u" ||
        (u.indexOf(r) >= 0
          ? L(e[r])
            ? ((i[r] = {}), (c[r] = {}), $(i[r], e[r]), $(c[r], e[r]))
            : ((i[r] = e[r]), (c[r] = e[r]))
          : r.search(/on[A-Z]/) === 0 && typeof e[r] == "function"
          ? t
            ? (n[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
            : (i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
          : (a[r] = e[r]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((r) => {
      i[r] === !0 && (i[r] = {}), i[r] === !1 && delete i[r];
    }),
    { params: i, passedParams: c, rest: a, events: n }
  );
}
function ie(e, t) {
  let {
    el: i,
    nextEl: n,
    prevEl: c,
    paginationEl: a,
    scrollbarEl: u,
    swiper: f,
  } = e;
  q(t) &&
    n &&
    c &&
    ((f.params.navigation.nextEl = n),
    (f.originalParams.navigation.nextEl = n),
    (f.params.navigation.prevEl = c),
    (f.originalParams.navigation.prevEl = c)),
    G(t) &&
      a &&
      ((f.params.pagination.el = a), (f.originalParams.pagination.el = a)),
    U(t) &&
      u &&
      ((f.params.scrollbar.el = u), (f.originalParams.scrollbar.el = u)),
    f.init(i);
}
function se(e, t, i, n, c) {
  const a = [];
  if (!t) return a;
  const u = (r) => {
    a.indexOf(r) < 0 && a.push(r);
  };
  if (i && n) {
    const r = n.map(c),
      g = i.map(c);
    r.join("") !== g.join("") && u("children"),
      n.length !== i.length && u("children");
  }
  return (
    W.filter((r) => r[0] === "_")
      .map((r) => r.replace(/_/, ""))
      .forEach((r) => {
        if (r in e && r in t)
          if (L(e[r]) && L(t[r])) {
            const g = Object.keys(e[r]),
              s = Object.keys(t[r]);
            g.length !== s.length
              ? u(r)
              : (g.forEach((d) => {
                  e[r][d] !== t[r][d] && u(r);
                }),
                s.forEach((d) => {
                  e[r][d] !== t[r][d] && u(r);
                }));
          } else e[r] !== t[r] && u(r);
      }),
    a
  );
}
const le = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.emit("_virtualUpdated"),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }),
    M.apply(this, arguments)
  );
}
function K(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Z(e) {
  const t = [];
  return (
    v.Children.toArray(e).forEach((i) => {
      K(i)
        ? t.push(i)
        : i.props &&
          i.props.children &&
          Z(i.props.children).forEach((n) => t.push(n));
    }),
    t
  );
}
function ae(e) {
  const t = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    v.Children.toArray(e).forEach((n) => {
      if (K(n)) t.push(n);
      else if (n.props && n.props.slot && i[n.props.slot])
        i[n.props.slot].push(n);
      else if (n.props && n.props.children) {
        const c = Z(n.props.children);
        c.length > 0 ? c.forEach((a) => t.push(a)) : i["container-end"].push(n);
      } else i["container-end"].push(n);
    }),
    { slides: t, slots: i }
  );
}
function oe(e, t, i) {
  if (!i) return null;
  const n = (s) => {
      let d = s;
      return (
        s < 0 ? (d = t.length + s) : d >= t.length && (d = d - t.length), d
      );
    },
    c = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${i.offset}px` }
      : { top: `${i.offset}px` },
    { from: a, to: u } = i,
    f = e.params.loop ? -t.length : 0,
    r = e.params.loop ? t.length * 2 : t.length,
    g = [];
  for (let s = f; s < r; s += 1) s >= a && s <= u && g.push(t[n(s)]);
  return g.map((s, d) =>
    v.cloneElement(s, {
      swiper: e,
      style: c,
      key: s.props.virtualIndex || s.key || `slide-${d}`,
    })
  );
}
function j(e, t) {
  return typeof window > "u" ? p.useEffect(e, t) : p.useLayoutEffect(e, t);
}
const V = p.createContext(null),
  ve = () => p.useContext(V),
  J = p.createContext(null),
  ge = () => p.useContext(J),
  ce = p.forwardRef(function (e, t) {
    let {
        className: i,
        tag: n = "div",
        wrapperTag: c = "div",
        children: a,
        onSwiper: u,
        ...f
      } = e === void 0 ? {} : e,
      r = !1;
    const [g, s] = p.useState("swiper"),
      [d, E] = p.useState(null),
      [m, S] = p.useState(!1),
      R = p.useRef(!1),
      b = p.useRef(null),
      o = p.useRef(null),
      _ = p.useRef(null),
      N = p.useRef(null),
      z = p.useRef(null),
      x = p.useRef(null),
      C = p.useRef(null),
      P = p.useRef(null),
      { params: w, passedParams: l, rest: B, events: I } = re(f),
      { slides: T, slots: A } = ae(a),
      D = () => {
        S(!m);
      };
    Object.assign(w.on, {
      _containerClasses(h, O) {
        s(O);
      },
    });
    const F = () => {
      Object.assign(w.on, I), (r = !0);
      const h = { ...w };
      if (
        (delete h.wrapperClass,
        (o.current = new ee(h)),
        o.current.virtual && o.current.params.virtual.enabled)
      ) {
        o.current.virtual.slides = T;
        const O = {
          cache: !1,
          slides: T,
          renderExternal: E,
          renderExternalUpdate: !1,
        };
        $(o.current.params.virtual, O), $(o.current.originalParams.virtual, O);
      }
    };
    b.current || F(), o.current && o.current.on("_beforeBreakpoint", D);
    const Q = () => {
        r ||
          !I ||
          !o.current ||
          Object.keys(I).forEach((h) => {
            o.current.on(h, I[h]);
          });
      },
      X = () => {
        !I ||
          !o.current ||
          Object.keys(I).forEach((h) => {
            o.current.off(h, I[h]);
          });
      };
    p.useEffect(() => () => {
      o.current && o.current.off("_beforeBreakpoint", D);
    }),
      p.useEffect(() => {
        !R.current &&
          o.current &&
          (o.current.emitSlidesClasses(), (R.current = !0));
      }),
      j(() => {
        if ((t && (t.current = b.current), !!b.current))
          return (
            o.current.destroyed && F(),
            ie(
              {
                el: b.current,
                nextEl: z.current,
                prevEl: x.current,
                paginationEl: C.current,
                scrollbarEl: P.current,
                swiper: o.current,
              },
              w
            ),
            u && !o.current.destroyed && u(o.current),
            () => {
              o.current && !o.current.destroyed && o.current.destroy(!0, !1);
            }
          );
      }, []),
      j(() => {
        Q();
        const h = se(l, _.current, T, N.current, (O) => O.key);
        return (
          (_.current = l),
          (N.current = T),
          h.length &&
            o.current &&
            !o.current.destroyed &&
            ne({
              swiper: o.current,
              slides: T,
              passedParams: l,
              changedParams: h,
              nextEl: z.current,
              prevEl: x.current,
              scrollbarEl: P.current,
              paginationEl: C.current,
            }),
          () => {
            X();
          }
        );
      }),
      j(() => {
        le(o.current);
      }, [d]);
    function Y() {
      return w.virtual
        ? oe(o.current, T, d)
        : T.map((h, O) =>
            v.cloneElement(h, { swiper: o.current, swiperSlideIndex: O })
          );
    }
    return v.createElement(
      n,
      M({ ref: b, className: y(`${g}${i ? ` ${i}` : ""}`) }, B),
      v.createElement(
        J.Provider,
        { value: o.current },
        A["container-start"],
        v.createElement(
          c,
          { className: te(w.wrapperClass) },
          A["wrapper-start"],
          Y(),
          A["wrapper-end"]
        ),
        q(w) &&
          v.createElement(
            v.Fragment,
            null,
            v.createElement("div", { ref: x, className: "swiper-button-prev" }),
            v.createElement("div", { ref: z, className: "swiper-button-next" })
          ),
        U(w) &&
          v.createElement("div", { ref: P, className: "swiper-scrollbar" }),
        G(w) &&
          v.createElement("div", { ref: C, className: "swiper-pagination" }),
        A["container-end"]
      )
    );
  });
ce.displayName = "Swiper";
const ue = p.forwardRef(function (e, t) {
  let {
    tag: i = "div",
    children: n,
    className: c = "",
    swiper: a,
    zoom: u,
    lazy: f,
    virtualIndex: r,
    swiperSlideIndex: g,
    ...s
  } = e === void 0 ? {} : e;
  const d = p.useRef(null),
    [E, m] = p.useState("swiper-slide"),
    [S, R] = p.useState(!1);
  function b(z, x, C) {
    x === d.current && m(C);
  }
  j(() => {
    if (
      (typeof g < "u" && (d.current.swiperSlideIndex = g),
      t && (t.current = d.current),
      !(!d.current || !a))
    ) {
      if (a.destroyed) {
        E !== "swiper-slide" && m("swiper-slide");
        return;
      }
      return (
        a.on("_slideClass", b),
        () => {
          a && a.off("_slideClass", b);
        }
      );
    }
  }),
    j(() => {
      a && d.current && !a.destroyed && m(a.getSlideClasses(d.current));
    }, [a]);
  const o = {
      isActive: E.indexOf("swiper-slide-active") >= 0,
      isVisible: E.indexOf("swiper-slide-visible") >= 0,
      isPrev: E.indexOf("swiper-slide-prev") >= 0,
      isNext: E.indexOf("swiper-slide-next") >= 0,
    },
    _ = () => (typeof n == "function" ? n(o) : n),
    N = () => {
      R(!0);
    };
  return v.createElement(
    i,
    M(
      {
        ref: d,
        className: y(`${E}${c ? ` ${c}` : ""}`),
        "data-swiper-slide-index": r,
        onLoad: N,
      },
      s
    ),
    u &&
      v.createElement(
        V.Provider,
        { value: o },
        v.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof u == "number" ? u : void 0,
          },
          _(),
          f &&
            !S &&
            v.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !u &&
      v.createElement(
        V.Provider,
        { value: o },
        _(),
        f &&
          !S &&
          v.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
ue.displayName = "SwiperSlide";
export {
  ce as Swiper,
  ue as SwiperSlide,
  ge as useSwiper,
  ve as useSwiperSlide,
};
