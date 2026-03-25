import { j as s } from "./index-BN8Hac8J.js";
import { r as a } from "./wallet-libs-C4iBya-7.js";
import { motion as g } from "./animation-libs-DQqW_Ij_.js";
import { I as ie } from "./App-B3-mP0gp.js";
import { u as z } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const A = (e, n, t = !1) => {
    let i = !1;
    return function (...o) {
      const c = this;
      i ||
        (t
          ? requestAnimationFrame(() => {
              e.apply(c, o), (i = !1);
            })
          : (e.apply(c, o), (i = !0), setTimeout(() => (i = !1), n)),
        (i = !0));
    };
  },
  j = () => {
    if (typeof window > "u") return { isMobile: !1, isLowEnd: !1 };
    if (j.cached) return j.cached;
    const e = window.innerWidth < 768,
      n = navigator.hardwareConcurrency || 4,
      t = navigator.deviceMemory || 4,
      i = window.devicePixelRatio || 1,
      o =
        n <= 4 ||
        t <= 4 ||
        i < 1.5 ||
        e ||
        !window.requestIdleCallback ||
        !window.IntersectionObserver,
      c = {
        isMobile: e,
        isLowEnd: o,
        cores: n,
        memory: t,
        pixelRatio: i,
        canUseAdvancedFeatures: !o && n >= 6,
      };
    return (j.cached = c), c;
  },
  oe = (e, n = {}) => {
    const [t, i] = a.useState(!1),
      [o, c] = a.useState(0),
      r = a.useRef(null),
      l = { threshold: [0, 0.1, 0.2, 0.5, 0.8, 1], rootMargin: "50px", ...n };
    return (
      a.useEffect(() => {
        if (e.current)
          return (
            (r.current = new IntersectionObserver((d) => {
              const [u] = d;
              i(u.isIntersecting), c(u.intersectionRatio);
            }, l)),
            r.current.observe(e.current),
            () => {
              r.current && r.current.disconnect();
            }
          );
      }, [e, l.threshold, l.rootMargin]),
      { isVisible: t, intersectionRatio: o }
    );
  },
  re = (e, n) => {
    const t = a.useRef({ lastY: 0, velocity: 0 }),
      i = a.useMemo(() => j(), []),
      o = i.isLowEnd ? 32 : i.canUseAdvancedFeatures ? 8 : 16,
      c = a.useCallback(
        A(() => {
          const r = window.scrollY;
          (t.current.velocity = Math.abs(r - t.current.lastY)),
            (t.current.lastY = r),
            n && n(r, t.current.velocity);
        }, o),
        [n, o]
      );
    return (
      a.useEffect(() => {
        if (e)
          return (
            window.addEventListener("scroll", c, { passive: !0 }),
            () => {
              window.removeEventListener("scroll", c);
            }
          );
      }, [e, c]),
      t.current
    );
  },
  le = (e, n = {}) => {
    const [t, i] = a.useState({ x: null, y: null }),
      o = a.useRef({ x: null, y: null }),
      c = a.useMemo(() => j(), []),
      {
        throttleMs: r = c.isLowEnd ? 100 : 50,
        enabled: l = !c.isMobile,
        trackOnlyInBounds: d = !0,
      } = n,
      u = a.useCallback(
        A((m) => {
          if (!l) return;
          if (d) {
            const x = document.documentElement.getBoundingClientRect();
            if (
              m.clientX < 0 ||
              m.clientX > x.width ||
              m.clientY < 0 ||
              m.clientY > x.height
            )
              return;
          }
          const f = { x: m.clientX, y: m.clientY };
          (o.current = f), i(f);
        }, r),
        [l, d, r]
      );
    return (
      a.useEffect(() => {
        if (!(!e || !l))
          return (
            window.addEventListener("mousemove", u, { passive: !0 }),
            () => {
              window.removeEventListener("mousemove", u);
            }
          );
      }, [e, l, u]),
      { mousePos: t, enabled: l }
    );
  },
  ce = () => {
    const [e, n] = a.useState(!0),
      [t, i] = a.useState("auto"),
      o = a.useRef({ frames: 0, lastTime: 0, fps: 60 }),
      c = a.useMemo(() => j(), []);
    return (
      a.useEffect(() => {
        let r;
        const l = () => {
          const d = performance.now();
          if ((o.current.frames++, d - o.current.lastTime >= 1e3)) {
            const u = Math.round(
              (o.current.frames * 1e3) / (d - o.current.lastTime)
            );
            (o.current.fps = u),
              (o.current.frames = 0),
              (o.current.lastTime = d),
              u < 30 && t !== "low"
                ? i("low")
                : u > 50 && u < 55 && t !== "medium"
                ? i("medium")
                : u >= 55 && t !== "high" && i("high");
          }
          r = requestAnimationFrame(l);
        };
        return (
          e && (r = requestAnimationFrame(l)),
          () => {
            r && cancelAnimationFrame(r);
          }
        );
      }, [e, t]),
      a.useEffect(() => {
        const r = () => {
          n(document.visibilityState === "visible");
        };
        return (
          document.addEventListener("visibilitychange", r, { passive: !0 }),
          () => {
            document.removeEventListener("visibilitychange", r);
          }
        );
      }, []),
      {
        isTabActive: e,
        performanceMode: t,
        currentFPS: o.current.fps,
        deviceCaps: c,
        shouldReduceAnimations: t === "low" || c.isLowEnd,
        shouldUseHighQuality: t === "high" && !c.isLowEnd,
      }
    );
  },
  de = () => {
    const e = ce();
    return {
      ...e,
      shouldRender: (n = "medium") => {
        const { performanceMode: t, deviceCaps: i } = e;
        switch (n) {
          case "high":
            return t === "high" && !i.isLowEnd;
          case "medium":
            return t !== "low";
          case "low":
          default:
            return !0;
        }
      },
      getAnimationConfig: (n = {}) => {
        const { performanceMode: t, deviceCaps: i } = e,
          o = {
            low: { duration: n.duration * 1.5, quality: 0.5 },
            medium: { duration: n.duration, quality: 0.75 },
            high: { duration: n.duration * 0.8, quality: 1 },
          };
        return { ...n, ...o[t], paused: !e.isTabActive || i.isLowEnd };
      },
    };
  },
  M = {
    INTERSECTION_THRESHOLD: 0.2,
    PROGRESS_SMOOTHING: 0.1,
    VIEWPORT_SCALE_FACTOR: 3,
    MIN_SCROLL_DELTA: 1,
    DEBOUNCE_RESIZE: 250,
  },
  ue = (e, n, t, i) => {
    const o = n,
      r = n + t - i - o;
    if (r <= 0) return 0;
    const l = Math.max(0, Math.min(1, (e - o) / r));
    return l * l * (3 - 2 * l);
  },
  me = (e, n) => Math.min(Math.floor(e * n), n - 1),
  pe = (e, n = {}) => {
    const [t, i] = a.useState(!1),
      [o, c] = a.useState(0),
      r = a.useRef(0),
      { threshold: l = M.INTERSECTION_THRESHOLD, enabled: d = !0 } = n,
      { isVisible: u, intersectionRatio: m } = oe(e, {
        threshold: [0, l, 0.5, 0.8, 1],
        rootMargin: "50px",
      });
    return (
      a.useEffect(() => {
        let f;
        const x = () => {
            const h = window.innerHeight;
            Math.abs(h - r.current) > 10 && (c(h), (r.current = h));
          },
          w = () => {
            clearTimeout(f), (f = setTimeout(x, M.DEBOUNCE_RESIZE));
          };
        return (
          x(),
          d && window.addEventListener("resize", w, { passive: !0 }),
          () => {
            window.removeEventListener("resize", w), clearTimeout(f);
          }
        );
      }, [d]),
      a.useEffect(() => {
        if (!d) return;
        const f = m >= l;
        f !== t && i(f);
      }, [m, l, t, d]),
      { isLocked: t, isVisible: u, viewportHeight: o, intersectionRatio: m }
    );
  },
  fe = (e, n = {}) => {
    const [t, i] = a.useState(0),
      [o, c] = a.useState(0),
      [r, l] = a.useState(!1),
      d = a.useRef({
        lastProgress: 0,
        lastActiveIndex: 0,
        lastScrollY: 0,
        progressBuffer: [],
        frameId: null,
      }),
      {
        totalMilestones: u = 4,
        smoothingFactor: m = M.PROGRESS_SMOOTHING,
        enabled: f = !0,
        onProgressChange: x,
        onActiveIndexChange: w,
      } = n,
      { isLocked: h, isVisible: R, viewportHeight: b } = pe(e, { enabled: f }),
      E = a.useCallback(
        (y, v) => {
          if (!e.current || !h) return;
          const p = d.current;
          if (Math.abs(y - p.lastScrollY) < M.MIN_SCROLL_DELTA) return;
          e.current.getBoundingClientRect();
          const I = e.current.offsetTop,
            ee = e.current.offsetHeight,
            te = ue(y, I, ee, b);
          p.progressBuffer.push(te),
            p.progressBuffer.length > 3 && p.progressBuffer.shift();
          const se =
              p.progressBuffer.reduce((ne, ae) => ne + ae, 0) /
              p.progressBuffer.length,
            C = p.lastProgress + (se - p.lastProgress) * m,
            F = me(C, u),
            T = Math.abs(C - p.lastProgress) > 0.001,
            _ = F !== p.lastActiveIndex;
          (T || _) &&
            (p.frameId && cancelAnimationFrame(p.frameId),
            (p.frameId = requestAnimationFrame(() => {
              T && (i(C), (p.lastProgress = C), x && x(C)),
                _ && (c(F), (p.lastActiveIndex = F), w && w(F)),
                l(v > 50),
                (p.lastScrollY = y),
                (p.frameId = null);
            })));
        },
        [h, b, u, m, x, w]
      );
    re(h && f && R, E),
      a.useEffect(
        () => () => {
          const y = d.current;
          y.frameId && cancelAnimationFrame(y.frameId);
        },
        []
      );
    const P = a.useMemo(
        () => (!f || !b ? {} : { height: `${b * M.VIEWPORT_SCALE_FACTOR}px` }),
        [f, b]
      ),
      J = a.useMemo(
        () => ({
          opacity: h ? 1 : 0,
          pointerEvents: h ? "auto" : "none",
          transition: "opacity 0.3s ease-in-out",
        }),
        [h]
      );
    return {
      scrollProgress: t,
      activeIndex: o,
      isLocked: h,
      isVisible: R,
      isAnimating: r,
      viewportHeight: b,
      sectionStyle: P,
      containerStyle: J,
      getMilestoneProgress: a.useCallback(
        (y) => {
          const v = 1 / u,
            p = y * v,
            I = (y + 1) * v;
          return t < p ? 0 : t > I ? 1 : (t - p) / v;
        },
        [t, u]
      ),
      isMilestoneVisible: a.useCallback(
        (y) => {
          const v = 1 / u,
            p = y === 0 ? 0.05 : y * v;
          return t >= p;
        },
        [t, u]
      ),
      getPerformanceData: a.useCallback(
        () => ({
          progress: t,
          activeIndex: o,
          bufferSize: d.current.progressBuffer.length,
          lastVelocity: d.current.velocity || 0,
        }),
        [t, o]
      ),
    };
  },
  O = a.memo(({ size: e, opacity: n = 0.3, delay: t = 0 }) =>
    s.jsx("div", {
      className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[${e}px] h-[${e}px] rounded-full border-2 border-[#D6FC7015]`,
      style: { opacity: n },
    })
  ),
  N = a.memo(
    ({
      size: e = 20,
      scale: n = 25,
      duration: t = 3,
      delay: i = 0,
      opacity: o = [0.7, 0],
      isActive: c = !0,
      className: r = "bg-[#D6FC70]",
    }) => {
      const l = a.useMemo(() => ({ scale: [1, n], opacity: o }), [n, o]),
        d = a.useMemo(
          () => ({
            duration: t,
            ease: "easeOut",
            repeat: 1 / 0,
            repeatDelay: 0,
            delay: i,
            paused: !c,
          }),
          [t, i, c]
        );
      return c
        ? s.jsx(g.div, {
            className: `absolute top-0 left-0 w-[${e}px] h-[${e}px] -ml-[${
              e / 2
            }px] -mt-[${
              e / 2
            }px] rounded-full ${r} shadow-[0_0_20px_10px_rgba(214,252,112,0.3)]`,
            style: { willChange: c ? "transform, opacity" : "auto" },
            animate: l,
            transition: d,
          })
        : null;
    }
  ),
  B = a.memo(({ isActive: e = !0, duration: n = 8 }) => {
    const t = a.useMemo(
      () => ({ duration: n, ease: "linear", repeat: 1 / 0, paused: !e }),
      [n, e]
    );
    return e
      ? s.jsx(g.div, {
          className:
            "absolute top-1/2 left-1/2 w-[750px] h-[4px] bg-gradient-to-r from-transparent via-[#D6FC7040] to-transparent origin-left",
          style: {
            transformOrigin: "left center",
            rotate: 0,
            willChange: e ? "transform" : "auto",
            backfaceVisibility: "hidden",
          },
          animate: { rotate: 360 },
          transition: t,
        })
      : null;
  }),
  $ = a.memo(
    ({
      isVisible: e = !0,
      isTabActive: n = !0,
      performanceMode: t = "medium",
      shouldReduceAnimations: i = !1,
    }) => {
      const o = a.useMemo(() => {
          const r = e && n && !i;
          switch (t) {
            case "low":
              return {
                showBeam: r,
                showPrimaryPing: r,
                showSecondaryPing: !1,
                showFastPing: !1,
                showSlowPing: !1,
                showExtraCircles: !1,
              };
            case "medium":
              return {
                showBeam: r,
                showPrimaryPing: r,
                showSecondaryPing: r,
                showFastPing: r,
                showSlowPing: !1,
                showExtraCircles: !1,
              };
            case "high":
            default:
              return {
                showBeam: r,
                showPrimaryPing: r,
                showSecondaryPing: r,
                showFastPing: r,
                showSlowPing: r,
                showExtraCircles: r,
              };
          }
        }, [e, n, i, t]),
        c = a.useMemo(
          () => [
            { size: 900, opacity: 0.3 },
            { size: 700, opacity: 0.2 },
            { size: 500, opacity: 0.15 },
          ],
          []
        );
      return e
        ? s.jsxs("div", {
            className: "absolute inset-0 overflow-hidden z-5 mt-[180px]",
            children: [
              c.map((r, l) =>
                s.jsx(O, { size: r.size, opacity: r.opacity }, `circle-${l}`)
              ),
              o.showExtraCircles && s.jsx(O, { size: 300, opacity: 0.1 }),
              s.jsx(B, { isActive: o.showBeam, duration: 8 }),
              s.jsxs("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0",
                children: [
                  s.jsx(N, {
                    size: 20,
                    scale: 25,
                    duration: 3,
                    delay: 0,
                    opacity: [0.7, 0],
                    isActive: o.showPrimaryPing,
                    className:
                      "bg-[#D6FC70] shadow-[0_0_20px_10px_rgba(214,252,112,0.3)]",
                  }),
                  s.jsx(N, {
                    size: 15,
                    scale: 20,
                    duration: 3,
                    delay: 1.5,
                    opacity: [0.8, 0],
                    isActive: o.showSecondaryPing,
                    className:
                      "bg-[#D6FC70] shadow-[0_0_20px_5px_rgba(214,252,112,0.4)]",
                  }),
                  s.jsx(N, {
                    size: 10,
                    scale: 15,
                    duration: 1.5,
                    delay: 0.7,
                    opacity: [1, 0],
                    isActive: o.showFastPing,
                    className:
                      "bg-[#D6FC70] shadow-[0_0_15px_5px_rgba(214,252,112,0.5)]",
                  }),
                  s.jsx(N, {
                    size: 5,
                    scale: 40,
                    duration: 5,
                    delay: 0.3,
                    opacity: [0.5, 0],
                    isActive: o.showSlowPing,
                    className:
                      "bg-[#D6FC70] shadow-[0_0_25px_15px_rgba(214,252,112,0.25)]",
                  }),
                ],
              }),
            ],
          })
        : null;
    }
  );
$.displayName = "RadarAnimations";
O.displayName = "RadarCircle";
N.displayName = "RadarPing";
B.displayName = "RadarBeam";
const K = a.memo(
  ({
    scrollProgress: e = 0,
    isVisible: n = !0,
    isTabActive: t = !0,
    performanceMode: i = "medium",
    enableMouseTracking: o = !0,
  }) => {
    const c = a.useRef(null),
      r = a.useRef({ baseRotation: 0, mouseInfluence: 0 }),
      { mousePos: l, enabled: d } = le(n && o && i !== "low", {
        throttleMs: i === "low" ? 100 : 50,
        enabled: o && !("ontouchstart" in window),
        trackOnlyInBounds: !0,
      }),
      u = a.useMemo(() => {
        if (!d || !l.x || !l.y) return 0;
        const f = window.innerWidth,
          x = window.innerHeight,
          w = (l.x / f) * 2 - 1,
          h = (l.y / x) * 2 - 1,
          R = Math.sqrt(w * w + h * h),
          b = Math.max(0, 1 - R),
          E = Math.atan2(h, w) * (180 / Math.PI),
          P = i === "high" ? 8 : 4;
        return E * b * P;
      }, [l, d, i]),
      m = a.useMemo(() => {
        const f = e * 360,
          x = f + u;
        return (
          (r.current = {
            baseRotation: f,
            mouseInfluence: u,
            totalRotation: x,
          }),
          {
            transform: `rotate(${x}deg)`,
            transformOrigin: "center center",
            transition: d ? "transform 0.1s ease-out" : "none",
            willChange: n ? "transform" : "auto",
          }
        );
      }, [e, u, n, d]);
    return (
      a.useEffect(() => {}, [n, t, e]),
      s.jsxs("div", {
        ref: c,
        className:
          "relative w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] z-25",
        style: m,
        children: [
          s.jsx(ie, {
            className: "w-full h-full object-contain",
            url: "images/fuel/radar.png",
            alt: "DeFi Cheese Planet",
            loading: "eager",
          }),
          !1,
        ],
      })
    );
  }
);
K.displayName = "PlanetRotation";
const S = [
    {
      id: 1,
      titleKey: "EARLY ACCESS",
      descriptionKey: "SNITCH FEED WALLET FINDER AND AUDIT SNITCH WATCHDOG, ETHEREUM SUPPORT",
      dateKey: "Q1 2026",
      color: "#D6FC70",
      angle: 180,
      xOffset: -300,
      yOffset: -120,
    },
    {
      id: 2,
      titleKey: "PREDICTIVE INTEL",
      descriptionKey: "LAUNCH BAG HOLDERS ALARM, ADVANCED PREDICTIVE ANALYTICS, CUSTOMIZABLE ALERTS",
      dateKey: "Q1-Q2 2026",
      color: "#D6FC70",
      angle: 0,
      xOffset: 300,
      yOffset: -120,
    },
    {
      id: 3,
      titleKey: "EXPANSION",
      descriptionKey: "ADD SNITCHGPT&SNITCHCAST,MULTI-CHAIN(SOLANA,BASE) INTEGRATION",
      dateKey: "Q3 2026",
      color: "#D6FC70",
      angle: 180,
      xOffset: -300,
      yOffset: 120,
    },
    {
      id: 4,
      titleKey: "INSTITUTIONAL TRACKING",
      descriptionKey: "DARK POOL TRACKING, COMPLIANCE MODULES, INSTITUTIONAL DASHBOARD",
      dateKey: "Q4 2026",
      color: "#D6FC70",
      angle: 0,
      xOffset: 300,
      yOffset: 120,
    },
  ],
  H = a.memo(({ progress: e, item: n, isVisible: t }) => {
    const i = a.useMemo(
        () => `M 0,0 L ${n.xOffset},${n.yOffset}`,
        [n.xOffset, n.yOffset]
      ),
      o = a.useMemo(
        () => ({ pathLength: t ? e : 0, opacity: t ? 0.5 : 0 }),
        [t, e]
      ),
      c = a.useMemo(
        () => ({
          pathLength: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.3 },
        }),
        []
      );
    return e <= 0.01 && !t
      ? null
      : s.jsx(g.svg, {
          width: "800",
          height: "800",
          viewBox: "-400 -400 800 800",
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 5,
            willChange: t ? "opacity" : "auto",
          },
          children: s.jsx(g.path, {
            d: i,
            stroke: "#D6FC70",
            strokeWidth: "2",
            strokeDasharray: "5,5",
            fill: "none",
            initial: { pathLength: 0, opacity: 0 },
            animate: o,
            transition: c,
          }),
        });
  }),
  Y = a.memo(({ item: e, progress: n, isActive: t, isVisible: i, t: o }) => {
    const c = a.useMemo(
        () => ({
          top: "50%",
          left: "50%",
          x: e.xOffset,
          y: e.yOffset,
          opacity: i ? 1 : 0,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 30,
        }),
        [e.xOffset, e.yOffset, i]
      ),
      r = a.useMemo(
        () => ({
          background: "rgba(0, 0, 0, 0.6)",
          boxShadow: "0 0 15px rgba(214, 252, 112, 0.15)",
          borderRadius: "12px",
          borderLeft: e.angle === 180 ? "2px solid #D6FC70" : "none",
          borderRight: e.angle === 0 ? "2px solid #D6FC70" : "none",
          width: "280px",
          padding: "0",
          willChange: i ? "transform, opacity" : "auto",
        }),
        [e.angle, i]
      ),
      l = a.useMemo(
        () => ({
          background: `linear-gradient(to ${
            e.angle === 180 ? "right" : "left"
          }, #D6FC70 0%, transparent 100%)`,
          backgroundSize: `${n * 100}% 100%`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: e.angle === 180 ? "left" : "right",
          filter: "blur(8px)",
        }),
        [n, e.angle]
      ),
      d = a.useMemo(
        () => ({
          width: `${n * 100}%`,
          height: "100%",
          background: `linear-gradient(to ${
            e.angle === 180 ? "right" : "left"
          }, #D6FC70 30%, transparent 100%)`,
          position: "absolute",
          top: 0,
          left: e.angle === 180 ? 0 : "auto",
          right: e.angle === 0 ? 0 : "auto",
          transformOrigin: e.angle === 180 ? "left" : "right",
        }),
        [n, e.angle]
      ),
      u = a.useMemo(
        () => ({
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: i ? 1 : 0, scale: i ? 1 : 0.8 },
          positioned: {
            x: t ? 0 : e.angle === 180 ? -20 : 20,
            transition: { duration: 0.4 },
          },
        }),
        [i, t, e.angle]
      ),
      m = a.useMemo(
        () => ({
          date: o(e.dateKey),
          title: o(e.titleKey),
          description: o(e.descriptionKey),
        }),
        [o, e.dateKey, e.titleKey, e.descriptionKey]
      );
    return n <= 0.01 && !i
      ? null
      : s.jsx(g.div, {
          className: "absolute pointer-events-none",
          style: c,
          initial: "hidden",
          animate: "visible",
          variants: u,
          transition: { duration: 0.5 },
          children: s.jsxs(g.div, {
            className: "relative backdrop-blur-sm overflow-hidden",
            style: r,
            animate: "positioned",
            variants: u,
            children: [
              s.jsxs("div", {
                className: "px-4 pt-4 pb-2",
                children: [
                  s.jsx(g.div, {
                    className:
                      "text-[#D6FC70] font-mono text-xs mb-2 inline-block",
                    initial: { opacity: 0 },
                    animate: { opacity: i ? 1 : 0 },
                    transition: { delay: 0.2 },
                    children: m.date,
                  }),
                  s.jsx(g.div, {
                    className: "w-full h-[1px] bg-[#D6FC7055]",
                    initial: { scaleX: 0 },
                    animate: { scaleX: i ? 1 : 0 },
                    transition: { duration: 0.6, delay: 0.3 },
                    style: { transformOrigin: "left" },
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "px-4 pb-4",
                children: [
                  s.jsx(g.h3, {
                    className: "text-[#D6FC70] text-xl font-bold mb-2",
                    initial: { y: 10, opacity: 0 },
                    animate: { y: i ? 0 : 10, opacity: i ? 1 : 0 },
                    transition: { duration: 0.4, delay: 0.1 },
                    children: m.title,
                  }),
                  s.jsx(g.p, {
                    className: "text-white text-sm opacity-90",
                    initial: { y: 10, opacity: 0 },
                    animate: { y: i ? 0 : 10, opacity: i ? 1 : 0 },
                    transition: { duration: 0.4, delay: 0.2 },
                    children: m.description,
                  }),
                ],
              }),
              s.jsx(g.div, {
                className: "absolute inset-0",
                initial: { opacity: 0 },
                animate: { opacity: i ? 0.15 : 0 },
                transition: { duration: 0.5 },
                style: l,
              }),
              s.jsx(g.div, {
                className: "absolute inset-0 overflow-hidden",
                style: {
                  borderRadius: "12px",
                  opacity: 0.2,
                  mixBlendMode: "lighten",
                },
                children: s.jsx(g.div, {
                  style: d,
                  initial: { scaleX: 0 },
                  animate: { scaleX: i ? 1 : 0 },
                  transition: { duration: 0.6 },
                }),
              }),
            ],
          }),
        });
  }),
  X = a.memo(({ t: e }) => {
    const n = a.useMemo(
      () =>
        S.map((t) =>
          s.jsxs(
            g.div,
            {
              className: "relative backdrop-blur-sm overflow-hidden",
              style: {
                background: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0 0 15px rgba(214, 252, 112, 0.15)",
                borderRadius: "12px",
                borderLeft: "2px solid #D6FC70",
                padding: "0",
              },
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-50px" },
              transition: { duration: 0.5, delay: 0.1 * (t.id - 1) },
              children: [
                s.jsxs("div", {
                  className: "px-4 pt-4 pb-2",
                  children: [
                    s.jsx("div", {
                      className:
                        "text-[#D6FC70] font-mono text-xs mb-2 inline-block",
                      children: e(t.dateKey),
                    }),
                    s.jsx("div", {
                      className: "w-full h-[1px] bg-[#D6FC7055]",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "px-4 pb-4",
                  children: [
                    s.jsx("h3", {
                      className: "text-[#D6FC70] text-xl font-bold mb-2",
                      children: e(t.titleKey),
                    }),
                    s.jsx("p", {
                      className: "text-white text-sm opacity-90",
                      children: e(t.descriptionKey),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "absolute inset-0 opacity-10",
                  style: {
                    background:
                      "linear-gradient(to right, #D6FC70 0%, transparent 70%)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "left",
                  },
                }),
              ],
            },
            `mobile-card-${t.id}`
          )
        ),
      [e]
    );
    return s.jsx("div", {
      className: "lg:hidden",
      children: s.jsx("div", {
        className: "relative py-12",
        children: s.jsx("div", {
          className: "relative z-20 space-y-6 max-w-[400px] mx-auto",
          children: n,
        }),
      }),
    });
  }),
  D = a.memo(
    ({ scrollProgress: e = 0, activeIndex: n = 0, t, isMobile: i = !1 }) => {
      const o = a.useCallback(
          (d) => {
            const u = 1 / S.length,
              m = d * u,
              f = (d + 1) * u;
            return e < m ? 0 : e > f ? 1 : (e - m) / u;
          },
          [e]
        ),
        c = a.useCallback(
          (d) => {
            const u = 1 / S.length,
              m = d === 0 ? 0.05 : d * u;
            return e >= m;
          },
          [e]
        ),
        r = a.useMemo(
          () =>
            S.map((d, u) =>
              s.jsx(
                H,
                { progress: o(u), item: d, isVisible: c(u) },
                `line-${d.id}`
              )
            ),
          [o, c]
        ),
        l = a.useMemo(
          () =>
            S.map((d, u) =>
              s.jsx(
                Y,
                {
                  item: d,
                  progress: o(u),
                  isActive: u === n,
                  isVisible: c(u),
                  t,
                },
                `milestone-${d.id}`
              )
            ),
          [o, c, n, t]
        );
      return i
        ? s.jsx(X, { t })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsx("div", {
                className:
                  "absolute w-[550px] h-[550px] rounded-full border border-dashed border-[#D6FC7033] z-20",
              }),
              r,
              l,
            ],
          });
    }
  );
H.displayName = "ConnectionLine";
Y.displayName = "Milestone";
X.displayName = "MobileRoadmap";
D.displayName = "RoadmapSystem";
const k = a.memo(() =>
    s.jsx("div", {
      className:
        "absolute inset-0 bg-[url('/images/grid.png')] bg-repeat opacity-10 z-10",
      style: { willChange: "auto" },
    })
  ),
  q = a.memo(({ performanceMode: e = "medium" }) => {
    const n = a.useMemo(() => {
      switch (e) {
        case "low":
          return [
            {
              style: {
                left: "-200px",
                top: "0px",
                width: "400px",
                height: "400px",
                background: "linear-gradient(45deg, #0099FF, #D6FC70)",
                opacity: 0.05,
                filter: "blur(100px)",
              },
            },
          ];
        case "medium":
          return [
            {
              style: {
                left: "-300px",
                top: "0px",
                width: "600px",
                height: "600px",
                background: "linear-gradient(135deg, #0099FF, #D6FC70)",
                opacity: 0.08,
                filter: "blur(120px)",
              },
            },
            {
              style: {
                right: "-100px",
                bottom: "-100px",
                width: "200px",
                height: "200px",
                background: "linear-gradient(225deg, #D6FC70, #2E990E)",
                opacity: 0.1,
                filter: "blur(80px)",
              },
            },
          ];
        case "high":
        default:
          return [
            {
              style: {
                left: "-300px",
                top: "0px",
                width: "600px",
                height: "600px",
                background: "linear-gradient(135deg, #0099FF, #D6FC70)",
                opacity: 0.1,
                filter: "blur(150px)",
              },
            },
            {
              style: {
                right: "-150px",
                bottom: "-150px",
                width: "300px",
                height: "300px",
                background: "linear-gradient(225deg, #D6FC70, #2E990E)",
                opacity: 0.15,
                filter: "blur(100px)",
              },
            },
          ];
      }
    }, [e]);
    return s.jsx(s.Fragment, {
      children: n.map((t, i) =>
        s.jsx("div", { className: "absolute z-0", style: t.style }, `glow-${i}`)
      ),
    });
  }),
  G = a.memo(({ progress: e = 0 }) => {
    const n = a.useMemo(
      () => ({
        width: `${e * 100}%`,
        boxShadow: e > 0.1 ? "0 0 10px rgba(214, 252, 112, 0.5)" : "none",
      }),
      [e]
    );
    return s.jsx("div", {
      className: "absolute top-0 left-0 w-full h-1 bg-[#1A1A1A] z-50",
      children: s.jsx("div", {
        className: "h-full bg-[#D6FC70] transition-all duration-100 ease-out",
        style: n,
      }),
    });
  }),
  W = a.memo(({ isVisible: e = !0, performanceMode: n = "medium" }) =>
    n === "low" || !e
      ? null
      : (a.useMemo(
          () => ({
            animate: { opacity: [0.3, 0.8, 0.3] },
            transition: { duration: 2, repeat: 1 / 0 },
          }),
          []
        ),
        s.jsxs("div", {
          className:
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-50 flex flex-col items-center z-30",
          style: { willChange: "opacity" },
          children: [
            s.jsx("div", {
              className: "text-sm mb-2 font-mono",
              children: "SCROLL TO EXPLORE",
            }),
            s.jsxs("svg", {
              width: "20",
              height: "30",
              viewBox: "0 0 20 30",
              children: [
                s.jsx("rect", {
                  width: "20",
                  height: "30",
                  rx: "10",
                  stroke: "#D6FC70",
                  strokeWidth: "1",
                  fill: "none",
                }),
                s.jsx("circle", {
                  cx: "10",
                  cy: "10",
                  r: "4",
                  fill: "#D6FC70",
                  style: {
                    animationName: "scrollBounce",
                    animationDuration: "2s",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  },
                }),
              ],
            }),
          ],
        }))
  ),
  L = a.memo(({ t: e, className: n = "" }) => {
    const { i18n: t } = z(),
      i = (t == null ? void 0 : t.language) || "en",
      o = a.useMemo(() => {
        if (e("fuel.title.line1", !1) !== !1)
          return {
            structured: !0,
            firstLine: e("The"),
            secondLine: e("Fuel Behind THE DEEP SNITCH NETWORK"),
            prefix: e("fuel.prefix", ""),
            highlights: [e("fuel.highlights.word1", "")].filter(Boolean),
          };
        const l = e("fuel.title", "The Fuel Behind the Deep Snitch Network"),
          d =
            i === "fr"
              ? ["Carburant"]
              : i === "es"
              ? ["Combustible"]
              : ["Fuel"];
        return { structured: !1, words: l.split(" "), highlights: d };
      }, [e, i]);
    a.useMemo(
      () => ({
        hidden: { opacity: 0, y: 20 },
        visible: (r) => ({
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: r * 0.1,
          },
        }),
      }),
      []
    );
    const c = a.useMemo(
      () =>
        o.structured
          ? s.jsxs(s.Fragment, {
              children: [
                o.prefix &&
                  s.jsx("div", {
                    className: "text-white font-light",
                    children: o.prefix,
                  }),
                s.jsx("div", {
                  className: "flex flex-wrap justify-center",
                  children: o.firstLine
                    .split(" ")
                    .map((r, l) =>
                      s.jsx(
                        "span",
                        {
                          className: `inline-block mx-2 ${
                            o.highlights.includes(r)
                              ? "text-green drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                              : ""
                          }`,
                          children: r,
                        },
                        `first-${l}`
                      )
                    ),
                }),
                s.jsx("div", {
                  className: "flex flex-wrap justify-center",
                  children: o.secondLine
                    .split(" ")
                    .map((r, l) =>
                      s.jsx(
                        "span",
                        {
                          className: `inline-block mx-2 ${
                            o.highlights.includes(r)
                              ? "text-green drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                              : ""
                          }`,
                          children: r,
                        },
                        `second-${l}`
                      )
                    ),
                }),
              ],
            })
          : s.jsx("div", {
              className: "flex flex-wrap justify-center",
              children: o.words.map((r, l) =>
                s.jsx(
                  "span",
                  {
                    className: `inline-block mx-2 ${
                      o.highlights.includes(r)
                        ? "text-green drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                        : ""
                    }`,
                    children: r,
                  },
                  `word-${l}`
                )
              ),
            }),
      [o]
    );
    return s.jsx("div", {
      className: `uppercase ${n} flex flex-col justify-center text-center text-white font-bold text-36 leading-36 lg:text-48 lg:leading-56 xl:text-68 xl:leading-68`,
      children: c,
    });
  }),
  U = a.memo(() =>
    s.jsx("style", {
      jsx: "true",
      children: `
    @keyframes scrollBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(10px); }
    }
  `,
    })
  ),
  V = a.memo(({ performanceData: e, scrollData: n, show: t = !1 }) => null);
k.displayName = "OptimizedGrid";
q.displayName = "BackgroundGlows";
G.displayName = "ProgressBar";
W.displayName = "ScrollIndicator";
L.displayName = "AnimatedTitle";
U.displayName = "ScrollIndicatorStyles";
V.displayName = "PerformanceMonitor";
const Q = a.memo(({ t: e }) =>
    s.jsx("div", {
      className: "md:hidden w-full relative py-16",
      id: "fuel",
      children: s.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          s.jsx("div", {
            className: "text-center mb-12",
            children: s.jsx(L, { t: e, className: "max-w-[90%] mx-auto" }),
          }),
          s.jsxs("div", {
            className: "absolute inset-0 overflow-hidden opacity-20 z-0",
            children: [
              s.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#D6FC7030]",
              }),
              s.jsx(k, {}),
            ],
          }),
          s.jsx("div", {
            className: "relative w-[220px] h-[220px] mx-auto mb-12 z-10",
            children: s.jsx("img", {
              className: "w-full h-full object-contain",
              src: "images/fuel/radar.png",
              alt: "Deep Snitch Radar",
              loading: "lazy",
              decoding: "async",
            }),
          }),
          s.jsx(D, { scrollProgress: 1, activeIndex: 0, t: e, isMobile: !0 }),
        ],
      }),
    })
  ),
  Z = a.memo(({ t: e, performance: n, scrollManagement: t }) => {
    const i = a.useRef(null);
    return n.deviceCaps.isMobile
      ? null
      : s.jsxs("div", {
          ref: t.sectionRef,
          className: "relative w-full overflow-hidden hidden md:block",
          style: t.sectionStyle,
          id: "fuel-desktop",
          children: [
            s.jsx(U, {}),
            s.jsxs("div", {
              className:
                "w-full h-screen bg-[#000000] fixed top-0 left-0 z-20 flex items-center justify-center",
              style: t.containerStyle,
              id: "fuel-container",
              children: [
                s.jsx(G, { progress: t.scrollProgress }),
                s.jsx($, {
                  isVisible: t.isVisible,
                  isTabActive: n.isTabActive,
                  performanceMode: n.performanceMode,
                  shouldReduceAnimations: n.shouldReduceAnimations,
                }),
                s.jsx(q, { performanceMode: n.performanceMode }),
                s.jsx(k, {}),
                s.jsx("div", {
                  className: "absolute left-0 right-0 text-center z-30",
                  style: { top: "6vh", position: "absolute" },
                  children: s.jsx(L, {
                    t: e,
                    className: "max-w-[801px] mx-auto",
                  }),
                }),
                s.jsxs("div", {
                  ref: i,
                  className:
                    "relative w-full max-w-[1400px] h-[600px] mx-auto z-20 flex items-center justify-center mt-[240px]",
                  children: [
                    s.jsx(K, {
                      scrollProgress: t.scrollProgress,
                      isVisible: t.isVisible,
                      isTabActive: n.isTabActive,
                      performanceMode: n.performanceMode,
                      enableMouseTracking: n.shouldUseHighQuality,
                    }),
                    s.jsx(D, {
                      scrollProgress: t.scrollProgress,
                      activeIndex: t.activeIndex,
                      t: e,
                      isMobile: !1,
                    }),
                  ],
                }),
                s.jsx(W, {
                  isVisible: t.isVisible,
                  performanceMode: n.performanceMode,
                }),
                s.jsx(V, { performanceData: n, scrollData: t, show: !1 }),
              ],
            }),
          ],
        });
  }),
  he = a.memo(() => {
    const { t: e } = z(),
      n = a.useRef(null),
      t = de(),
      i = fe(n, {
        totalMilestones: 4,
        enabled: !t.deviceCaps.isMobile,
        smoothingFactor: t.deviceCaps.isLowEnd ? 0.2 : 0.1,
      });
    return (
      (i.sectionRef = n),
      s.jsxs(s.Fragment, {
        children: [
          s.jsx(Q, { t: e }),
          s.jsx(Z, { t: e, performance: t, scrollManagement: i }),
        ],
      })
    );
  });
Q.displayName = "MobileVersion";
Z.displayName = "DesktopVersion";
he.displayName = "FuelOptimized";
export { he as default };
