import { j as e, S as v } from "./index-BN8Hac8J.js";
import { SwiperSlide as A, Swiper as F } from "./swiper-react-D6YOFoP1.js";
import { N as z, P as E } from "./pagination-C4xMGJHK.js";
import { I as u, T as j } from "./App-B3-mP0gp.js";
import { r as i } from "./wallet-libs-C4iBya-7.js";
import { u as I } from "./i18n-libs-7YlS43F0.js";
import {
  useInView as R,
  useAnimation as $,
  motion as f,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./swiper-libs-ChlQaAX5.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const k = i.memo(({ text: t, isActive: l }) => {
    const [s, r] = i.useState(""),
      [n, c] = i.useState(0),
      p = i.useRef(null),
      d = i.useRef(null);
    return (
      i.useRef(0),
      i.useEffect(() => {
        if (!l) {
          r(""), c(0);
          return;
        }
        return (
          p.current && clearTimeout(p.current),
          d.current && cancelAnimationFrame(d.current),
          n < t.length &&
            (p.current = setTimeout(() => {
              r((x) => x + t.charAt(n)), c((x) => x + 1);
            }, 50)),
          () => {
            p.current && clearTimeout(p.current),
              d.current && cancelAnimationFrame(d.current);
          }
        );
      }, [l, t, n]),
      e.jsxs("span", {
        className: "typewriter-text",
        children: [
          s,
          n < t.length &&
            l &&
            e.jsx("span", { className: "cursor-blink", children: "|" }),
        ],
      })
    );
  }),
  P = {
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
  },
  M = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  D = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  },
  V = i.memo(({ t, className: l = "" }) => {
    const s = i.useMemo(() => t("Meet The AI Agents - Always watching. reporting in real time exclusively to you."), [t]),
      r = i.useMemo(
        () =>
          s
            .split(" ")
            .map((n, c) => ({
              id: `word-${n.toLowerCase().replace(/[^a-z0-9]/g, "")}-${c}`,
              text: n,
              isHighlighted:
                n === "exclusively" ||
                n === "to" ||
                n === "YOU." ||
                n === "YOU",
            })),
        [s]
      );
    return e.jsx(f.div, {
      className: `uppercase ${l} flex flex-col justify-start text-white font-bold text-36 leading-36 lg:text-48 lg:leading-56 xl:text-68 xl:leading-68`,
      initial: "hidden",
      animate: "visible",
      children: e.jsx("div", {
        className: "flex flex-wrap",
        children: r.map((n, c) =>
          e.jsx(
            f.span,
            {
              variants: P,
              custom: c,
              className: "inline-block mr-2",
              children: n.isHighlighted
                ? e.jsx(f.span, {
                    animate: {
                      y: [0, -5, 0],
                      transition: {
                        duration: 3,
                        ease: "easeInOut",
                        repeat: 1 / 0,
                        repeatDelay: 1,
                        delay: c * 0.2,
                      },
                    },
                    style: { willChange: "transform" },
                    className:
                      "bg-clip-text text-transparent bg-gradient-primary drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]",
                    children: n.text,
                  })
                : n.text,
            },
            n.id
          )
        ),
      }),
    });
  }),
  O = i.memo(({ agent: t, hoveredAgent: l, setHoveredAgent: s, onClick: r }) =>
    e.jsx("div", {
      className:
        "relative lg:h-[439px] p-[1px] lg:p-[28px] group lg:px-[40px] lx:px-[40px] custom-gradient-theme lg:before:hidden lg:bg-transparent rounded-[12px] lg:rounded-[0px] w-full overflow-visible",
      onMouseEnter: () => s(t.id),
      onMouseLeave: () => s(null),
      onClick: r,
      children: e.jsxs("div", {
        className:
          "bg-[#070708] lg:bg-transparent p-[12px] lg:p-[0px] rounded-[12px] lg:rounded-[0px] flex flex-col items-center",
        children: [
          e.jsx("div", {
            className:
              "absolute top-0 left-0 w-full h-full group-hover:invisible lg:flex hidden",
            children: e.jsx(u, {
              url: "images/figures/subtract-2.svg",
              alt: t.name,
            }),
          }),
          e.jsxs("div", {
            className:
              "relative z-10 px-[8px] sm:px-[15px] lg:px-[0px] flex flex-col items-center w-full",
            children: [
              e.jsx("div", {
                className:
                  "mb-[28px] flex justify-center agent-image-container",
                children: e.jsx("div", {
                  className: "transform-gpu w-full h-full",
                  children: e.jsx(u, {
                    className: "w-full h-full object-contain",
                    url: `images/layers/mouse-${t.icon}.png`,
                    alt: t.name,
                  }),
                }),
              }),
              e.jsx(j, {
                className:
                  "text-white mb-2 text-center w-full text-[18px] lg:text-[20px] xl:text-[22px] font-bold agent-title-text",
                children: t.name,
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "lg:flex hidden absolute bottom-0 left-0 w-full h-full pt-[33px] px-[40px] pb-[72px] invisible group-hover:visible z-20",
            children: [
              e.jsx("div", {
                className: "absolute top-0 left-0 w-full h-full",
                children: e.jsx(u, {
                  url: "images/figures/subtract-hover.svg",
                  alt: t.name,
                }),
              }),
              e.jsxs("div", {
                className:
                  "relative flex flex-col justify-between h-full agent-card-content",
                children: [
                  e.jsx("div", {
                    className:
                      "agent-title text-black !text-black dark:!text-black font-bold mb-2 text-[22px] leading-[26px] xl:text-[30px] xl:leading-[34px] px-[10px]",
                    style: { color: "black !important" },
                    children: t.name,
                  }),
                  e.jsx("div", {
                    className:
                      "agent-description text-[35px] leading-[38px] pb-[10px] xl:text-[36px] xl:leading-[40px] text-black !text-black dark:!text-black px-[10px]",
                    style: { color: "black !important" },
                    children: e.jsx(k, {
                      text: t.description,
                      isActive: l === t.id,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  ),
  _ = i.memo(({ agent: t, flippedCards: l, handleCardFlip: s }) => {
    const r = l.includes(t.id);
    return e.jsx("div", {
      className: `flip-card lg:hidden block ${r ? "flipped" : ""}`,
      onClick: () => s(t.id),
      "aria-label": r
        ? `Flip back ${t.name} card`
        : `Flip ${t.name} card to see details`,
      children: e.jsxs("div", {
        className: "flip-card-inner",
        children: [
          e.jsx("div", {
            className: "flip-card-front",
            children: e.jsxs("div", {
              className: "relative z-10 flex flex-col items-center w-full",
              children: [
                e.jsx("div", {
                  className:
                    "mb-[28px] flex justify-center agent-image-container",
                  children: e.jsx("div", {
                    className: "transform-gpu w-full h-full",
                    children: e.jsx(u, {
                      className: "w-full h-full object-contain",
                      url: `images/layers/mouse-${t.icon}.png`,
                      alt: t.name,
                    }),
                  }),
                }),
                e.jsx(j, {
                  className:
                    "text-white mb-2 text-center w-full text-[18px] lg:text-[20px] xl:text-[22px] font-bold agent-title-text",
                  children: t.name,
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "flip-card-back",
            children: e.jsxs("div", {
              className: "agent-card-content-mobile",
              children: [
                e.jsx("div", {
                  className:
                    "agent-title text-black !text-black dark:!text-black font-bold mb-4 text-[22px] leading-[26px] text-center px-[10px]",
                  style: { color: "black !important" },
                  children: t.name,
                }),
                e.jsx("div", {
                  className: "agent-description-mobile",
                  style: { color: "black !important" },
                  children: e.jsx(k, { text: t.description, isActive: r }),
                }),
                e.jsx("div", { className: "mt-4 text-center text-[14px]" }),
              ],
            }),
          }),
        ],
      }),
    });
  }),
  L = i.memo(() =>
    e.jsx("style", {
      children: `
    .cursor-blink {
      display: inline-block;
      animation: blink 0.7s steps(2, start) infinite;
      font-weight: bold;
    }
    
    @keyframes blink {
      to { visibility: hidden; }
    }
    
    .typewriter-text {
      white-space: pre-wrap;
      word-break: break-word;
      will-change: contents;
    }
    
    /* Force black text in hover cards */
    .group:hover .text-black,
    .group-hover .text-black {
      color: #000 !important;
    }
    
    /* Force black text in dark mode */
    .dark .group:hover .text-black,
    .dark .group-hover .text-black {
      color: #000 !important;
    }
    
    /* Direct targeting */
    .agent-card-content {
      color: #000 !important;
    }
    
    .agent-title,
    .agent-description {
      color: black !important;
    }
    
    /* Override any theme color */
    .dark .agent-title,
    .dark .agent-description {
      color: black !important;
    }
    
    /* Control title font size */
    .agent-title {
      font-size: 22px !important;
      line-height: 26px !important;
    }
    
    @media (min-width: 1280px) {
      .agent-title {
        font-size: 20px !important;
        line-height: 34px !important;
      }
    }
    
    /* Adjust card text alignment for all devices */
    .agents-swiper .swiper-slide {
      text-align: center;
      contain: content;
    }
    
    /* Agent image effects - optimized with will-change */
    .agent-image-container {
      margin-top: -50px;
      transform: scale(1.15);
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                  margin-top 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      will-change: transform, margin-top;
      contain: layout style;
    }
    
    .group:hover .agent-image-container {
      margin-top: -15px;
      transform: scale(1);
    }
    
    /* Make agent images smaller on mobile */
    @media (max-width: 1023px) {
      .agent-image-container {
        margin-top: -20px;
        transform: scale(0.7);
        max-height: 170px;
        height: 170px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .agent-image-container img,
      .agent-image-container .transform-gpu {
        height: 280px;
        width: auto;
        object-fit: contain;
      }
      .flip-card-front {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        min-height: 0;
        padding-bottom: 24px;
        overflow: hidden;
        height: 220px;
      }
      .agent-title-text {
        margin-top: 0 !important;
        padding-bottom: 4px;
        font-size: 18px !important;
        line-height: 22px !important;
        color: #fff !important;
        background: none !important;
        position: relative;
        z-index: 2;
        text-align: center;
        width: 100%;
        display: block;
        font-weight: bold;
      }
      .flip-card-front .agent-title-text {
        margin-bottom: 0 !important;
      }
    }
    
    /* Hardware acceleration for smoother animations */
    .transform-gpu {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
      will-change: transform;
    }
    
    /* Fix swiper container - simplified */
    .agents-swiper {
      padding-top: 60px !important;
      padding-bottom: 40px !important;
      margin-top: -60px !important;
      contain: layout style;
    }
    
    /* Remove top padding on mobile */
    @media (max-width: 768px) {
      .agents-swiper {
        padding-top: 10px !important;
        margin-top: -10px !important;
      }
    }
    
    /* Flip card styles - optimized transitions */
    @media (max-width: 1023px) {
      .flip-card {
        perspective: 1000px;
        height: 350px;
        width: 100%;
        position: relative;
        contain: layout style paint;
      }
      
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
        transform-style: preserve-3d;
        will-change: transform;
      }
      
      .flip-card.flipped .flip-card-inner {
        transform: rotateY(180deg);
      }
      
      .flip-card-front, 
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        contain: content;
      }
      
      .flip-card-front {
        background: #070708;
        transform: rotateY(0deg);
        border: 1px solid rgba(214, 252, 112, 0.3);
        padding: 12px;
      }
      
      .flip-card-back {
        background: #D6FC70;
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 33px 20px 20px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      }
      
      /* Use translate3d and backface-visibility for better performance */
      .flip-card-inner, .flip-card-front, .flip-card-back {
        transform-style: preserve-3d;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      
      .agent-card-content-mobile {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .agent-description-mobile {
        font-size: 22px;
        line-height: 28px;
        color: black !important;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        overflow-y: auto;
      }
      
      /* Fix title styling on mobile */
      .flip-card-front .agent-title-text {
        font-size: 22px !important;
        line-height: 26px !important;
        font-weight: bold;
        color: white !important;
        margin-bottom: 15px;
      }
    }
    
    .agent-popup-close-btn {
      border-radius: 50%;
      padding: 6px;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.3;
    }
    .agent-popup-close-btn:hover {
      background: rgba(0,0,0,0.7);
    }
  `,
    })
  ),
  Y = i.memo(() =>
    e.jsxs("div", {
      className:
        "flex items-center justify-between gap-[20px] relative bottom-[30px] lg:bottom-[0px]",
      children: [
        e.jsx("div", {
          className:
            "nav nav-left !text-white w-[36px] h-[36px] cursor-pointer swiper-button-prev !bg-transparent after:hidden !relative",
          children: e.jsx(v, {
            className: "w-[36px] h-[36px]",
            name: "arrow-left",
          }),
        }),
        e.jsx("div", {
          className:
            "nav nav-right !text-white rotate-180 w-[36px] h-[36px] cursor-pointer swiper-button-next !bg-transparent after:hidden !relative",
          children: e.jsx(v, {
            className: "w-[36px] h-[36px]",
            name: "arrow-left",
          }),
        }),
        e.jsx("div", { className: "swiper-pagination" }),
      ],
    })
  ),
  G = i.memo(() =>
    e.jsx("div", {
      className:
        "absolute w-[533px] h-[493px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-65%] bg-gradient-to-b from-[#0099FF] to-[#D6FC70] blur-[150px] opacity-60",
    })
  ),
  H = () => {
    const { t } = I(),
      l = i.useRef(null),
      s = R(l, { once: !0, amount: 0.2 }),
      r = $(),
      [n, c] = i.useState(null),
      [p, d] = i.useState([]),
      [x, w] = i.useState(3),
      [N, h] = i.useState(null);
    i.useEffect(() => {
      const a = setTimeout(() => {
        s && r.start("visible");
      }, 100);
      return () => clearTimeout(a);
    }, [r, s]);
    const b = i.useCallback(
      () => (window.innerWidth > 1599 ? 4 : window.innerWidth < 1023 ? 1 : 3),
      []
    );
    i.useEffect(() => {
      w(b());
      const a = () => {
        w(b());
      };
      return (
        window.addEventListener("resize", a),
        () => window.removeEventListener("resize", a)
      );
    }, [b]);
    const y = i.useCallback((a) => {
      d((o) => (o.includes(a) ? o.filter((g) => g !== a) : [...o, a]));
    }, []);
    i.useEffect(() => {
      s && r.start("visible");
    }, [r, s]);
    const m = i.useMemo(
      () => [
        {
          id: 1,
          key: "snitchFeed",
          name: t("SnitchFeed"),
          icon: "fat",
          description: t("Front-running the crowd's emotion swings."),
        },
        {
          id: 2,
          key: "snitchScan",
          name: t("SnitchScan"),
          icon: "rug",
          description: t("Snigging rugs. Sifting gems."),
        },
        {
          id: 3,
          key: "snitchGPT",
          name: t("SnitchGPT"),
          icon: "tg",
          description: t("Smarter takes. On-chain trained."),
        },
        {
          id: 4,
          key: "snitchCast",
          name: t("SnitchCast"),
          icon: "bag",
          description: t("I'll whisper the alpha straight into your ear."),
        },
        {
          id: 5,
          key: "auditSnitch",
          name: t("AuditSnitch"),
          icon: "shadow",
          description: t("Contract in. Risk vectors out."),
        },
      ],
      [t]
    );
    i.useEffect(() => {
      s &&
        m.length > 0 &&
        setTimeout(() => {
          m.forEach((o) => {
            const g = document.createElement("img");
            g.src = `images/layers/mouse-${o.icon}.png`;
          });
        }, 200);
    }, [s, m]);
    const C = i.useMemo(
        () =>
          m.map((a) =>
            e.jsxs(
              A,
              {
                className:
                  "flex justify-center items-center pt-[50px] pb-[20px]",
                children: [
                  e.jsx("div", {
                    className: "hidden lg:block",
                    children: e.jsx(O, {
                      agent: a,
                      hoveredAgent: n,
                      setHoveredAgent: c,
                      onClick: () => h(a.key),
                    }),
                  }),
                  e.jsx("div", {
                    className: "lg:hidden block",
                    children: e.jsx(_, {
                      agent: a,
                      flippedCards: p,
                      handleCardFlip: (o) => {
                        y(o), p.includes(o) || h(a.key);
                      },
                    }),
                  }),
                ],
              },
              a.id
            )
          ),
        [m, n, p, y]
      ),
      S = i.useMemo(
        () => ({
          modules: [z, E],
          spaceBetween: 20,
          slidesPerView: x,
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
          pagination: { el: ".swiper-pagination", type: "progressbar" },
          className: "agents-swiper",
        }),
        [x]
      ),
      
      T = ({ agentKey: a, onClose: o }) =>
        a
          ? e.jsx("div", {
              className:
                "fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm",
              onClick: o,
              children: e.jsxs("div", {
                className:
                  "bg-[#0f1a17] rounded-[16px] border border-green/30 shadow-xl max-w-[420px] w-full p-8 relative",
                onClick: (g) => g.stopPropagation(),
                children: [
                  e.jsx("button", {
                    className:
                      "agent-popup-close-btn absolute top-4 right-4 text-white",
                    onClick: o,
                    "aria-label": "Close",
                    children: e.jsx(v, { name: "close" }),
                  }),
                  e.jsx("h2", {
                    className: "text-2xl font-bold text-green mb-4",
                    children: t(`agents.popups.${a}.title`),
                  }),
                  e.jsx("p", {
                    className: "text-white text-lg whitespace-pre-line",
                    children: t(`agents.popups.${a}.body`),
                  }),
                ],
              }),
            })
          : null;
    return e.jsxs(f.div, {
      ref: l,
      className:
        "relative mx-[0px] mt-[70px] xl:mt-[140px] pb-[56px] mb-[46px] px-[15px] sm:px-[20px] lg:px-0",
      variants: M,
      initial: "hidden",
      animate: r,
      layoutId: "agents-section",
      children: [
        e.jsx(V, {
          t,
          className:
            "mb-[48px] max-w-[752px] px-[15px] sm:px-[15px] lg:px-[0px]",
        }),
        e.jsxs(f.div, {
          className: "relative",
          variants: D,
          children: [
            e.jsx(G, {}),
            e.jsx(L, {}),
            e.jsxs(F, { ...S, children: [C, e.jsx(Y, {})] }),
          ],
        }),
      ],
    });
  },
  ae = i.memo(H);
export { ae as default };
