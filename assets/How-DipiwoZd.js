const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/animation-libs-DQqW_Ij_.js",
      "assets/wallet-libs-C4iBya-7.js",
      "assets/crypto-libs-BTkSibId.js",
    ])
) => i.map((i) => d[i]);
import { r as s, _ as I } from "./wallet-libs-C4iBya-7.js";
import { j as e } from "./index-BN8Hac8J.js";
import { I as T } from "./App-B3-mP0gp.js";
import "./Link-CIaIkVx8.js";
import k from "./PopupHowToBuy-CxXYW6Xa.js";
import { u as v } from "./i18n-libs-7YlS43F0.js";
import { useAnimation as y, motion as x } from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const j = (i, f = {}) => {
    const [o, p] = s.useState(!1),
      [u, d] = s.useState(!1),
      r = s.useRef(null),
      g = s.useRef(null),
      m = { threshold: [0, 0.1, 0.2, 0.3], rootMargin: "50px 0px", ...f };
    return (
      s.useEffect(() => {
        d(!0);
      }, []),
      s.useEffect(() => {
        if (!u || !i.current) return;
        const a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          l = (t) => {
            const [n] = t,
              c = a ? 0.1 : m.threshold[1] || 0.2;
            p(n.intersectionRatio >= c || n.isIntersecting);
          };
        try {
          (r.current = new IntersectionObserver(l, m)),
            r.current.observe(i.current);
        } catch {
          console.warn("IntersectionObserver failed, using scroll fallback");
        }
        if (a) {
          const t = () => {
            if (!i.current) return;
            const h = i.current.getBoundingClientRect(),
              b = window.innerHeight,
              w = h.top < b * 0.8 && h.bottom > b * 0.2;
            w !== o && p(w);
          };
          let n = !1;
          const c = () => {
            n ||
              (requestAnimationFrame(() => {
                t(), (n = !1);
              }),
              (n = !0));
          };
          return (
            window.addEventListener("scroll", c, { passive: !0 }),
            t(),
            (g.current = c),
            () => {
              window.removeEventListener("scroll", c);
            }
          );
        }
        return () => {
          r.current && i.current && r.current.unobserve(i.current);
        };
      }, [u, m.threshold]),
      o
    );
  },
  N = ({ t: i, className: f = "" }) => {
    const o = y(),
      p = s.useRef(null),
      u = j(p, { threshold: [0, 0.1, 0.2, 0.3] }),
      { i18n: d } = v(),
      r = d.language,
      m = (
        r === "en" || !r
          ? "How to secure your $DSNT bag - Join the AI syndicate before it becames consensus."
          : i("how.title")
      ).split(" "),
      a = r === "en" || !r ? ["$DSNT", "AI"] : [m[0]],
      l = {
        hidden: { opacity: 0, y: 20 },
        visible: (t) => ({
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: t * 0.1,
          },
        }),
      };
    return (
      s.useEffect(() => {
        let t;
        return (
          u
            ? (t = setTimeout(() => {
                o.start("visible");
              }, 100))
            : o.start("hidden"),
          () => {
            t && clearTimeout(t);
          }
        );
      }, [o, u]),
      e.jsx(x.div, {
        ref: p,
        className: `uppercase mb-[20px] xl:mb-[40px] uppercase px-[5px] sm:px-[10px] lg:px-0 flex flex-col justify-start text-white font-bold text-36 leading-36 lg:text-48 lg:leading-56 xl:text-68 xl:leading-68 ${f}`,
        initial: "hidden",
        animate: o,
        children: e.jsx("div", {
          className: "flex flex-wrap",
          children: m.map((t, n) =>
            e.jsx(
              x.span,
              {
                variants: l,
                custom: n,
                className: `inline-block mr-2 ${
                  a.includes(t)
                    ? "bg-clip-text text-transparent bg-gradient-primary drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                    : ""
                }`,
                children: a.includes(t)
                  ? e.jsx(x.span, {
                      animate: {
                        y: [0, -5, 0],
                        transition: {
                          duration: 3,
                          ease: "easeInOut",
                          repeat: 1 / 0,
                          delay: n * 0.2,
                        },
                      },
                      children: t,
                    })
                  : t,
              },
              n
            )
          ),
        }),
      })
    );
  },
  $ = () => {
    const [i, f] = s.useState(!1),
      { t: o } = v(),
      p = s.useRef(null),
      u = j(p, {
        threshold: [0, 0.1, 0.15, 0.2, 0.25],
        rootMargin: "100px 0px",
      }),
      d = y();
    s.useEffect(() => {
      let l;
      return (
        u
          ? (l = setTimeout(() => {
              d.start("visible");
            }, 150))
          : d.start("hidden"),
        () => {
          l && clearTimeout(l);
        }
      );
    }, [d, u]),
      s.useCallback(() => {
        f(!0);
      }, []);
    const r = s.useCallback(() => {
        f(!1);
      }, []),
      g = s.useCallback(() => {
        const l = document.getElementById("hero");
        l &&
          (l.scrollIntoView({ behavior: "smooth" }),
          setTimeout(() => {
            const t = l.querySelector(".form");
            if (t) {
              const n = {
                x: [0, -10, 10, -10, 10, -5, 5, -2, 2, 0],
                transition: { duration: 0.8, ease: "easeInOut" },
              };
              I(async () => {
                const { animate: c } = await import(
                  "./animation-libs-DQqW_Ij_.js"
                );
                return { animate: c };
              }, __vite__mapDeps([0, 1, 2])).then(({ animate: c }) => {
                c(t, n);
              });
            }
          }, 800));
      }, []),
      m = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
            duration: 0.6,
          },
        },
      },
      a = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 80,
            duration: 0.8,
          },
        },
      };
    return e.jsxs(x.div, {
      ref: p,
      className: "relative",
      variants: m,
      initial: "hidden",
      animate: d,
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col-reverse lg:flex-row items-center pb-0 lg:pb-[80px] relative mx-[0px] gap-[40px] px-[15px] sm:px-[20px] lg:px-0",
          children: [
            e.jsx("div", {
              className:
                "absolute left-[1232px] top-[0px] w-[533px] h-[493px] bg-gradient-to-b from-[#0099FF] to-[#D6FC70] blur-[150px]",
              style: { willChange: "auto", transform: "translateZ(0)" },
            }),
            e.jsxs(x.div, {
              className:
                "lg:max-w-[664px] xl:max-w-[764px] flex-shrink-0 w-full relative z-10",
              variants: a,
              children: [
                e.jsx(N, { t: o }),
                e.jsx(x.div, {
                  variants: a,
                  children: e.jsx("p", {
                    className:
                      "text-white text-sm font-normal text-left text-white text-20 leading-28 lg:text-24 lg:leading-36 xl:text-36 xl:leading-40 tracking-1 font-normal mb-[48px] max-w-[500px] xl:max-w-[618px] px-[5px] sm:px-[10px] lg:px-0",
                    children:
                      "Follow these easy steps to buy $DSNT and unlock AI-powered market intelligence.",
                  }),
                }),
                e.jsx(x.div, {
                  variants: a,
                  children: e.jsx("p", {
                    className:
                      "text-white text-sm font-normal text-left text-white text-20 leading-28 lg:text-24 lg:leading-36 xl:text-36 xl:leading-40 tracking-1 font-normal mb-[48px] max-w-[500px] xl:max-w-[618px] px-[5px] sm:px-[10px] lg:px-0",
                    children:
                      "*Buyers secure elite-tier benefit and early access to game-changing intelligence.",
                  }),
                }),
                e.jsx(x.div, {
                  variants: a,
                  tabIndex: 0,
                  children: e.jsx("button", {
                    type: "button",
                    className:
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 font-VT323 text-24 leading-30 lg:text-30 lg:leading-30 tracking-1 text-dark bg-gradient-primary rounded-[100px] shadow-soft hover:shadow-soft-hover transition-all duration-300 px-[24px] py-[12px] lg:px-[40px] lg:py-[17px] rounded-full uppercase mb-8 lg:mb-0 inline-flex px-10",
                    onClick: g,
                    children: e.jsx("span", {
                      children: e.jsx("span", { children: "Buy $DSNT" }),
                    }),
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute top-[-178px] left-[-210%] w-[695px] h-[494px] bg-[#4DFF17] blur-[150px]",
              style: { willChange: "auto", transform: "translateZ(0)" },
            }),
            e.jsx("div", {
              className:
                "lg:flex hidden absolute top-[585px] left-[-750px] w-[778px] h-[869px] bg-[#B2FF17] blur-[150px]",
              style: { willChange: "auto", transform: "translateZ(0)" },
            }),
            e.jsx(x.div, {
              className:
                "block lg:w-[532px] xl:w-[690px] flex-shrink-0 relative lg:left-[-10px] xl:left-[0px] z-1",
              variants: a,
              children: e.jsx(T, {
                url: "/images/how/image.png",
                alt: "picture",
                className: "",
                loading: "lazy",
                style: { objectFit: "cover" },
              }),
            }),
          ],
        }),
        i && e.jsx(k, { isOpen: i, onClose: r }),
      ],
    });
  };
export { $ as default };
