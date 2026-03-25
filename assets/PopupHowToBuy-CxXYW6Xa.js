const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/swiper-react-D6YOFoP1.js",
      "assets/wallet-libs-C4iBya-7.js",
      "assets/crypto-libs-BTkSibId.js",
      "assets/swiper-libs-ChlQaAX5.js",
      "assets/index-C-TM0h7h.js",
      "assets/pagination-C4xMGJHK.js",
    ])
) => i.map((i) => d[i]);
import { r as p, _ as c } from "./wallet-libs-C4iBya-7.js";
import { j as e, S as l } from "./index-BN8Hac8J.js";
import { T as a, B as v } from "./App-B3-mP0gp.js";
import { u as j } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const y = async () => {
    const [i, r] = await Promise.all([
      c(
        () => import("./swiper-react-D6YOFoP1.js"),
        __vite__mapDeps([0, 1, 2, 3])
      ),
      c(() => import("./index-C-TM0h7h.js"), __vite__mapDeps([4, 3, 5])),
    ]);
    return {
      Swiper: i.Swiper,
      SwiperSlide: i.SwiperSlide,
      Navigation: r.Navigation,
      Pagination: r.Pagination,
    };
  },
  C = ({ isOpen: i, onClose: r }) => {
    const [d, n] = p.useState(i),
      [m, h] = p.useState(0),
      [x, u] = p.useState(3),
      { t: s } = j(),
      w = p.useRef(null),
      [o, g] = p.useState(null);
    p.useEffect(() => {
      i && !o && y().then(g);
    }, [i, o]),
      p.useEffect(() => {
        let t;
        return (
          i
            ? (n(!0), (document.body.style.overflow = "hidden"))
            : ((t = setTimeout(() => {
                n(!1);
              }, 300)),
              (document.body.style.overflow = "")),
          () => {
            t && clearTimeout(t);
          }
        );
      }, [i]),
      p.useEffect(() => {
        const t = (f) => {
          f.key === "Escape" && r();
        };
        return (
          i && document.addEventListener("keydown", t),
          () => {
            document.removeEventListener("keydown", t);
          }
        );
      }, [i, r]);
    const b = () => {
      r(),
        setTimeout(() => {
          const t = document.getElementById("home-hero");
          t
            ? t.scrollIntoView({ behavior: "smooth" })
            : window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
    };
    return !d && !i
      ? null
      : e.jsxs("div", {
          className:
            "fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out",
          onClick: r,
          style: { opacity: i ? 1 : 0 },
          children: [
            e.jsx("style", {
              children: `
        .swiper-pagination-bullet {
          width: 25px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 35px;
          background: #D6FC70;
        }
        /* Custom full-width progress indicator */
        .progress-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-bar {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #D6FC70;
          transition: width 0.3s ease;
        }
      `,
            }),
            e.jsx("div", {
              className:
                "blure-popup absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm",
            }),
            e.jsxs("div", {
              className:
                "popup-how-to-buy absolute max-w-[420px] lg:max-w-[100%] lg:w-[627px] h-auto min-h-[320px] lg:min-h-[552px] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 mx-4 sm:mx-0 bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 shadow-xl overflow-y-auto max-h-[90vh] relative",
              style: {
                opacity: i ? 1 : 0,
                transform: `translate(-50%, -50%) ${
                  i ? "scale(1)" : "scale(0.95)"
                }`,
              },
              onClick: (t) => t.stopPropagation(),
              children: [
                e.jsx("div", {
                  onClick: r,
                  className:
                    "cursor-pointer absolute top-4 right-4 z-10 w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] flex items-center justify-center",
                  children: e.jsx(l, {
                    className:
                      "w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] text-white hover:text-green transition-colors",
                    name: "close",
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "pt-[40px] px-[30px] sm:pt-[60px] sm:px-[48px] pb-[40px]",
                  children: [
                    o
                      ? e.jsxs(o.Swiper, {
                          modules: [o.Navigation, o.Pagination],
                          spaceBetween: 0,
                          slidesPerView: 1,
                          navigation: {
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                          },
                          onSwiper: (t) => {
                            (w.current = t), u(t.slides.length);
                          },
                          onSlideChange: (t) => {
                            h(t.activeIndex);
                          },
                          className: "popup-swiper mb-[30px] sm:mb-[43px]",
                          children: [
                            e.jsx(o.SwiperSlide, {
                              children: e.jsxs("div", {
                                className: "",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "flex justify-between items-center mb-[20px] sm:mb-[40px]",
                                    children: e.jsxs(a, {
                                      size: "lg",
                                      className: "text-white pr-4",
                                      children: [
                                        s("popup.howToBuy.title"),
                                        " ",
                                        e.jsx("span", {
                                          className: "text-green",
                                          children: s(
                                            "popup.howToBuy.titleHighlight"
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(a, {
                                    size: "xm",
                                    className: "text-white mb-[10px]",
                                    children: s("popup.howToBuy.step1.title"),
                                  }),
                                  e.jsx(a, {
                                    className:
                                      "text-white text-[16px] leading-[24px] tracking-[0.01em] mb-[10px]",
                                    children: s(
                                      "popup.howToBuy.step1.description1"
                                    ),
                                  }),
                                  e.jsx(a, {
                                    className:
                                      "text-white text-[16px] leading-[24px] tracking-[0.01em]",
                                    children: s(
                                      "popup.howToBuy.step1.description2"
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsx(o.SwiperSlide, {
                              children: e.jsxs("div", {
                                className: "",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "flex justify-between items-center mb-[20px] sm:mb-[40px]",
                                    children: e.jsxs(a, {
                                      size: "lg",
                                      className: "text-white pr-4",
                                      children: [
                                        s("popup.howToBuy.title"),
                                        " ",
                                        e.jsx("span", {
                                          className: "text-green",
                                          children: s(
                                            "popup.howToBuy.titleHighlight"
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(a, {
                                    size: "xm",
                                    className: "text-white mb-[10px]",
                                    children: s("popup.howToBuy.step2.title"),
                                  }),
                                  e.jsx(a, {
                                    className:
                                      "text-white text-[16px] leading-[24px] tracking-[0.01em] mb-[10px]",
                                    children: s(
                                      "popup.howToBuy.step2.description1"
                                    ),
                                  }),
                                  e.jsx(a, {
                                    className:
                                      "text-white text-[16px] leading-[24px] tracking-[0.01em]",
                                    children: s(
                                      "popup.howToBuy.step2.description2"
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsx(o.SwiperSlide, {
                              children: e.jsxs("div", {
                                className: "",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "flex justify-between items-center mb-[20px] sm:mb-[40px]",
                                    children: e.jsxs(a, {
                                      size: "lg",
                                      className: "text-white pr-4",
                                      children: [
                                        s("popup.howToBuy.staking.title"),
                                        " ",
                                        e.jsx("span", {
                                          className: "text-green",
                                          children: s(
                                            "popup.howToBuy.titleHighlight"
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(a, {
                                    size: "xm",
                                    className: "text-white mb-[10px]",
                                    children: s(
                                      "popup.howToBuy.staking.subtitle"
                                    ),
                                  }),
                                  e.jsx(a, {
                                    className:
                                      "text-white text-[16px] leading-[24px] tracking-[0.01em]",
                                    children: s(
                                      "popup.howToBuy.staking.description",
                                      { token: "$DSNT" }
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col gap-4",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "nav nav-left !text-white w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] cursor-pointer swiper-button-prev !bg-transparent after:hidden !relative",
                                      children: e.jsx(l, {
                                        className:
                                          "w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]",
                                        name: "arrow-left",
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "nav nav-right !text-white rotate-180 w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] cursor-pointer swiper-button-next !bg-transparent after:hidden !relative",
                                      children: e.jsx(l, {
                                        className:
                                          "w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]",
                                        name: "arrow-left",
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "w-full px-1 mt-2",
                                  children: e.jsx("div", {
                                    className: "progress-container",
                                    children: e.jsx("div", {
                                      className: "progress-bar",
                                      style: {
                                        width: `${
                                          x > 0 ? ((m + 1) / x) * 100 : 0
                                        }%`,
                                      },
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsx("div", {
                          className:
                            "min-h-[200px] w-full flex items-center justify-center",
                          children: e.jsx("div", {
                            className:
                              "pulse-dot w-3 h-3 bg-[#d6fc70] rounded-full",
                          }),
                        }),
                    e.jsx(v, {
                      className: "w-full sm:w-auto px-[30px] sm:px-[74px]",
                      rounded: "full",
                      onClick: b,
                      children: s("popup.howToBuy.buyButton"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { C as default };
