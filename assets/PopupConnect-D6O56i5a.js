import { j as e, S as i } from "./index-BN8Hac8J.js";
import { I as l, T as c } from "./App-B3-mP0gp.js";
import "./swiper-react-D6YOFoP1.js";
import { r as o } from "./wallet-libs-C4iBya-7.js";
import "./react-vendor-CKqXOJaQ.js";
import { u as m } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
import "./swiper-libs-ChlQaAX5.js";
const E = ({ isOpen: t, onClose: r }) => {
  const [n, p] = o.useState(t),
    { t: a } = m();
  return (
    o.useEffect(() => {
      let s;
      return (
        t
          ? (p(!0), (document.body.style.overflow = "hidden"))
          : ((s = setTimeout(() => {
              p(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          s && clearTimeout(s);
        }
      );
    }, [t]),
    o.useEffect(() => {
      const s = (x) => {
        x.key === "Escape" && r();
      };
      return (
        t && document.addEventListener("keydown", s),
        () => {
          document.removeEventListener("keydown", s);
        }
      );
    }, [t, r]),
    !n && !t
      ? null
      : e.jsxs("div", {
          className:
            "fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out",
          onClick: r,
          style: { opacity: t ? 1 : 0 },
          children: [
            e.jsx("div", {
              className:
                "blure-popup absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm",
            }),
            e.jsxs("div", {
              className:
                "popup-how-to-buy absolute w-[423px] h-[552px] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 mx-4 sm:mx-0",
              style: {
                opacity: t ? 1 : 0,
                transform: `translate(-50%, -50%) ${
                  t ? "scale(1)" : "scale(0.95)"
                }`,
              },
              onClick: (s) => s.stopPropagation(),
              children: [
                e.jsx(l, {
                  url: "/images/figures/subtract-connect.svg",
                  alt: "popup-how-to-buy",
                  className: "w-full h-full object-cover absolute top-0 left-0",
                }),
                e.jsxs("div", {
                  className: "relative z-10 pt-[80px] px-[48px]",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-center mb-[40px]",
                      children: [
                        e.jsx(c, {
                          size: "lg",
                          className: "text-white ",
                          children: a("popup.connect.title"),
                        }),
                        e.jsx("div", {
                          onClick: r,
                          className: "cursor-pointer",
                          children: e.jsx(i, {
                            className: "w-[36px] h-[36px]",
                            name: "close",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "text-white pl-[63px] text-[16px] leading-[24px] tracking-[0.01em] mb-[10px] opacity-60",
                      children: a("popup.connect.selectWallet"),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex mb-[8px] justify-between items-center bg-[#2B2B2C] border border-white/24 backdrop-blur-50 rounded-[12px] p-[13px]",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-[10px]",
                          children: [
                            e.jsx(l, {
                              url: "/images/phantom.png",
                              alt: "metamask",
                              className: "w-[36px] h-[36px]",
                            }),
                            e.jsx(c, {
                              size: "xsm",
                              weight: "light",
                              className: "text-white ",
                              children: a("popup.connect.phantom"),
                            }),
                          ],
                        }),
                        e.jsx(i, {
                          className: "w-[24px] h-[24px]",
                          name: "arrow-f",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex mb-[8px] justify-between items-center bg-[#2B2B2C] border border-white/24 backdrop-blur-50 rounded-[12px] p-[13px]",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-[10px]",
                          children: [
                            e.jsx(l, {
                              url: "/images/okx.png",
                              alt: "metamask",
                              className: "w-[36px] h-[36px]",
                            }),
                            e.jsx(c, {
                              size: "xsm",
                              weight: "light",
                              className: "text-white ",
                              children: a("popup.connect.okx"),
                            }),
                          ],
                        }),
                        e.jsx(i, {
                          className: "w-[24px] h-[24px]",
                          name: "arrow-f",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex mb-[8px] justify-between items-center bg-[#2B2B2C] border border-white/24 backdrop-blur-50 rounded-[12px] p-[13px]",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-[10px]",
                          children: [
                            e.jsx(l, {
                              url: "/images/coinbase.png",
                              alt: "metamask",
                              className: "w-[36px] h-[36px]",
                            }),
                            e.jsx(c, {
                              size: "xsm",
                              weight: "light",
                              className: "text-white ",
                              children: a("popup.connect.coinbase"),
                            }),
                          ],
                        }),
                        e.jsx(i, {
                          className: "w-[24px] h-[24px]",
                          name: "arrow-f",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "text-white mt-[26px] mb-[16px] text-[16px] leading-[24px] tracking-[0.01em]  text-center",
                      children: a("popup.connect.noWalletInfo"),
                    }),
                    e.jsx("a", {
                      href: "",
                      className:
                        "text-green underline text-[16px] leading-[24px] tracking-[0.01em]  text-center flex justify-center",
                      children: a("popup.connect.otherWallet"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
  );
};
export { E as default };
