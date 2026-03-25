import { j as e } from "./index-BN8Hac8J.js";
import { a as C, T as N } from "./App-B3-mP0gp.js";
import { r as t } from "./wallet-libs-C4iBya-7.js";
import { u as S } from "./i18n-libs-7YlS43F0.js";
import {
  useInView as k,
  useAnimation as F,
  motion as r,
  AnimatePresence as D,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const I = () => {
    const [i, n] = t.useState({
      width: typeof window < "u" ? window.innerWidth : 0,
      height: typeof window < "u" ? window.innerHeight : 0,
    });
    return (
      t.useEffect(() => {
        let a = null;
        function s() {
          clearTimeout(a),
            (a = setTimeout(() => {
              n({ width: window.innerWidth, height: window.innerHeight });
            }, 200));
        }
        return (
          window.addEventListener("resize", s),
          s(),
          () => {
            window.removeEventListener("resize", s), clearTimeout(a);
          }
        );
      }, []),
      i
    );
  },
  M = t.memo(({ isActive: i, isMobile: n }) => {
    const a = i || n;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(r.div, {
          className:
            "absolute bottom-[20px] right-[20px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#D6FC70]",
          animate: { opacity: a ? [0.2, 1, 0.2] : 0.2 },
          transition: { duration: 4, repeat: a ? 1 / 0 : 0 },
        }),
        e.jsx(r.div, {
          className:
            "absolute top-[20px] left-[20px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#D6FC70]",
          animate: { opacity: a ? [0.2, 1, 0.2] : 0.2 },
          transition: {
            duration: 4,
            repeat: a ? 1 / 0 : 0,
            repeatType: "reverse",
          },
        }),
      ],
    });
  }),
  T = t.memo(({ items: i, subtitle: n, isTabActive: a = !0 }) => {
    const s = Array.isArray(i) ? i : [];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(N, {
          className: "text-white-240 mb-[24px] text-shadow-green",
          size: "sm",
          children: n,
        }),
        e.jsx("ul", {
          className:
            "list-none text-[16px] leading-[24px] text-white tracking-1 font-light",
          children: s.map((d, p) =>
            e.jsxs(
              r.li,
              {
                className:
                  "mb-[12px] pl-[20px] border-l-2 border-[#D6FC70] relative",
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 + p * 0.1 },
                children: [
                  e.jsx(r.div, {
                    className:
                      "absolute left-[-4px] top-[10px] w-[6px] h-[6px] bg-[#D6FC70] rounded-full",
                    animate: {
                      boxShadow: a
                        ? ["0 0 0px #D6FC70", "0 0 10px #D6FC70"]
                        : "0 0 5px #D6FC70",
                    },
                    transition: {
                      duration: 2,
                      repeat: a ? 1 / 0 : 0,
                      repeatType: "reverse",
                    },
                  }),
                  d,
                ],
              },
              p
            )
          ),
        }),
      ],
    });
  }),
  z = t.memo(
    ({
      title: i,
      subtitle: n,
      items: a,
      index: s,
      activeIndex: d,
      setActiveIndex: p,
      isTabActive: c,
    }) => {
      const l = d === s,
        b = t.useRef(null),
        { width: y } = I(),
        m = y < 768,
        f = t.useMemo(
          () => ({ height: l ? "400px" : m ? "80px" : "400px" }),
          [l, m]
        ),
        g = t.useMemo(
          () => `
    relative cursor-pointer overflow-hidden rounded-[24px] backdrop-blur-sm
    ${l ? "lg:w-[500px] w-full" : "lg:w-[120px] w-full"} 
    transition-all duration-300 mb-3 lg:mb-0
  `,
          [l]
        ),
        x = t.useMemo(
          () => `
    absolute inset-0 rounded-[24px] border border-[#D6FC70] 
    ${l ? "opacity-100" : "opacity-60"} 
    transition-opacity duration-300
  `,
          [l]
        ),
        v = t.useMemo(
          () => `
    absolute inset-0 rounded-[24px] 
    ${l ? "bg-dark2/80" : "bg-dark2/70"} 
    transition-colors duration-300
  `,
          [l]
        ),
        w = t.useMemo(
          () => `
    absolute -inset-1 bg-gradient-to-r from-[#D6FC70] to-[#0099FF] 
    ${l ? "opacity-30 blur-[20px]" : "opacity-15 blur-[10px]"} 
    rounded-[30px] transition-all duration-500
  `,
          [l]
        ),
        j = t.useCallback(() => {
          p(s);
        }, [p, s]),
        o = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.1,
              yoyo: 1 / 0,
              repeatDelay: Math.random() * 5 + 4,
            },
          },
        };
      return e.jsxs(r.div, {
        ref: b,
        className: g,
        style: f,
        onClick: j,
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.5,
          delay: s * 0.15,
          type: "spring",
          stiffness: 70,
        },
        whileHover: { scale: 1.02 },
        children: [
          e.jsx("div", {
            className: x,
            children: e.jsx("div", { className: v }),
          }),
          e.jsx("div", { className: w }),
          e.jsxs("div", {
            className: "relative z-10 h-full flex flex-col",
            children: [
              l
                ? e.jsx(r.div, {
                    className: "w-full p-[30px]",
                    animate: { opacity: 1 },
                    children: e.jsx(r.div, {
                      variants: o,
                      initial: "hidden",
                      animate: "visible",
                      className: "inline-block",
                      children: e.jsx(C, {
                        className: "font-VT323 uppercase",
                        weight: "light",
                        color: "green",
                        level: 5,
                        children: i,
                      }),
                    }),
                  })
                : e.jsxs(r.div, {
                    className: "w-full h-full flex items-center justify-center",
                    animate: { opacity: 1 },
                    children: [
                      e.jsx(r.div, {
                        className:
                          "lg:hidden font-VT323 uppercase text-[#D6FC70] text-[22px] font-bold tracking-wider text-center drop-shadow-[0_0_8px_rgba(214,252,112,0.6)]",
                        initial: { opacity: 0.7 },
                        animate: {
                          opacity: c ? [0.7, 1, 0.7] : 0.7,
                          textShadow: c
                            ? [
                                "0 0 5px rgba(214,252,112,0.3)",
                                "0 0 15px rgba(214,252,112,0.6)",
                                "0 0 5px rgba(214,252,112,0.3)",
                              ]
                            : "0 0 5px rgba(214,252,112,0.3)",
                        },
                        transition: {
                          duration: 3,
                          repeat: c ? 1 / 0 : 0,
                          repeatType: "reverse",
                        },
                        children: i,
                      }),
                      e.jsx(r.div, {
                        className:
                          "hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center rotate-90 font-VT323 uppercase text-[#D6FC70] text-[28px] font-bold tracking-wider whitespace-nowrap drop-shadow-[0_0_8px_rgba(214,252,112,0.6)]",
                        initial: { opacity: 0.7 },
                        animate: {
                          opacity: c ? [0.7, 1, 0.7] : 0.7,
                          textShadow: c
                            ? [
                                "0 0 5px rgba(214,252,112,0.3)",
                                "0 0 15px rgba(214,252,112,0.6)",
                                "0 0 5px rgba(214,252,112,0.3)",
                              ]
                            : "0 0 5px rgba(214,252,112,0.3)",
                        },
                        transition: {
                          duration: 3,
                          repeat: c ? 1 / 0 : 0,
                          repeatType: "reverse",
                        },
                        children: i,
                      }),
                    ],
                  }),
              e.jsx(D, {
                children:
                  l &&
                  e.jsx(r.div, {
                    className:
                      "p-[30px] pt-0 flex-1 overflow-auto max-h-[300px]",
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "300px" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.3 },
                    children: e.jsx(T, {
                      subtitle: n,
                      items: a,
                      isTabActive: c,
                    }),
                  }),
              }),
              e.jsx(M, { isActive: l, isMobile: m }),
            ],
          }),
        ],
      });
    }
  ),
  E = t.memo(
    ({ activeIndex: i, setActiveIndex: n }) => {
      const a = t.useMemo(() => [0, 1, 2], []);
      return e.jsx("div", {
        className: "flex justify-center mt-[40px] gap-4",
        children: a.map((s) =>
          e.jsx(
            "button",
            {
              className: `
            w-[12px] h-[12px] rounded-full transition-all duration-300 ease-in-out
            ${
              i === s
                ? "bg-[#D6FC70] shadow-[0_0_10px_#D6FC70] scale-110"
                : "bg-white/20 hover:scale-125"
            }
          `,
              onClick: () => n(s),
              style: { willChange: "transform, box-shadow" },
            },
            s
          )
        ),
      });
    },
    (i, n) => i.activeIndex === n.activeIndex
  ),
  _ = t.memo(({ titleLetters: i, letterVariants: n, titleText: a }) =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          className: "hidden md:block",
          children: i.map((s, d) =>
            e.jsx(
              r.span,
              {
                variants: n,
                className: "inline-block",
                children: s === " " ? " " : s,
              },
              d
            )
          ),
        }),
        e.jsx("div", {
          className: "block md:hidden",
          children: a
            .split(" ")
            .map((s, d) =>
              e.jsxs(
                r.span,
                {
                  className: "inline-block mx-[2px] my-[2px]",
                  variants: n,
                  children: [
                    s
                      .split("")
                      .map((p, c) =>
                        e.jsx(
                          r.span,
                          {
                            variants: n,
                            className: "inline-block",
                            children: p,
                          },
                          c
                        )
                      ),
                    d < a.split(" ").length - 1 && " ",
                  ],
                },
                d
              )
            ),
        }),
      ],
    })
  ),
  A = () => {
    const { t: i } = S(),
      n = t.useRef(null),
      a = k(n, { once: !1, amount: 0.2 }),
      s = F(),
      [d, p] = t.useState(0),
      [c, l] = t.useState(!0);
    t.useEffect(() => {
      const o = () => {
        l(document.visibilityState === "visible");
      };
      return (
        document.addEventListener("visibilitychange", o),
        () => {
          document.removeEventListener("visibilitychange", o);
        }
      );
    }, []);
    const b = t.useCallback((o) => {
        p(o);
      }, []),
      y = t.useCallback((o) => {
        p(o);
      }, []);
    t.useEffect(() => {
      a && c && s.start("visible");
    }, [s, a, c]);
    const m = t.useMemo(
        () => ({
          hidden: { opacity: 0 },
          visible: { opacity: 0.1, transition: { duration: 1.5 } },
        }),
        []
      ),
      f = t.useMemo(
        () => ({
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
        }),
        []
      ),
      g = t.useMemo(
        () => ({
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", damping: 10 },
          },
        }),
        []
      ),
      x = t.useMemo(() => i("syndicate.title"), [i]),
      v = t.useMemo(() => x.split(""), [x]),
      w = t.useMemo(() => {
        const o = (u) => {
          try {
            const h = i(u, { returnObjects: !0 });
            return Array.isArray(h) ? h : [];
          } catch (h) {
            return console.warn(`Translation error for ${u}:`, h), [];
          }
        };
        return [
          {
            title: i("PHASE1"),
            subtitle: i("Presale launch & early access for top-tier holders"),
            items: o("syndicate.phase1.items","SDKJFLDSKF","KDSLFJKDS"),
          },
          {
            title: i("syndicate.phase2.title"),
            subtitle: i("syndicate.phase2.subtitle"),
            items: o("syndicate.phase2.items"),
          },
          {
            title: i("syndicate.phase3.title"),
            subtitle: i("syndicate.phase3.subtitle"),
            items: o("syndicate.phase3.items"),
          },
        ];
      }, [i]),
      j = t.useMemo(
        () => ({
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "bold",
          letterSpacing: "0.05em",
          WebkitTextStroke: "1px rgba(214,252,112,0.3)",
          filter: "drop-shadow(0 0 15px rgba(214,252,112,0.15))",
          wordBreak: "keep-all",
          whiteSpace: "normal",
          hyphens: "none",
        }),
        []
      );
    
  },
  G = t.memo(A);
export { G as default };
