import { j as e } from "./index-BN8Hac8J.js";
import { T as t, B as p } from "./App-B3-mP0gp.js";
import "./Link-CIaIkVx8.js";
import { r as o } from "./wallet-libs-C4iBya-7.js";
import { u as b } from "./i18n-libs-7YlS43F0.js";
import {
  motion as l,
  useAnimation as g,
  useInView as v,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const j = ({ className: c = "" }) => {
    const s = g(),
      r = o.useRef(null),
      i = v(r, { once: !1, amount: 0.3 }),
      { t: n, i18n: x } = b(),
      d = x.language,
      f = (
        d === "en" || !d
          ? "How to Buy $DSNT"
          : n("howToBuy.title", "How to Buy $DSNT")
      ).split(" "),
      h = d === "en" || !d ? ["$DSNT"] : [f[0]],
      u = {
        hidden: { opacity: 0, y: 20 },
        visible: (a) => ({
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: a * 0.1,
          },
        }),
      };
    return (
      o.useEffect(() => {
        i ? s.start("visible") : s.start("hidden");
      }, [s, i]),
      e.jsx(l.div, {
        ref: r,
        className: `uppercase ${c} text-center text-white font-bold text-28 leading-32 lg:text-36 lg:leading-40 xl:text-48 xl:leading-56`,
        initial: "hidden",
        animate: s,
        children: e.jsx("div", {
          className: "flex flex-wrap justify-center",
          children: f.map((a, m) =>
            e.jsx(
              l.span,
              {
                variants: u,
                custom: m,
                className: `inline-block mx-1 ${
                  h.includes(a)
                    ? "bg-clip-text text-transparent bg-gradient-primary drop-shadow-[0_0_10px_rgba(214,252,112,0.5)]"
                    : ""
                }`,
                children: h.includes(a)
                  ? e.jsx(l.span, {
                      animate: i
                        ? {
                            y: [0, -5, 0],
                            transition: {
                              duration: 3,
                              ease: "easeInOut",
                              repeat: 1 / 0,
                              delay: m * 0.2,
                            },
                          }
                        : {},
                      children: a,
                    })
                  : a,
              },
              m
            )
          ),
        }),
      })
    );
  },
  N = o.memo(({ presaleData: c }) => {
    if (!c) return null;
    const { t: s } = b(),
      [r, i] = o.useState("crypto"),
      n = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
            delayChildren: 0.3,
            duration: 0.8,
          },
        },
      },
      x = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", damping: 12, stiffness: 100 },
        },
      };
    return e.jsxs("div", {
      className:
        "w-full max-w-[1800px] mx-auto px-[15px] sm:px-[20px] lg:px-[40px] xl:px-[60px]",
      children: [
        e.jsx(l.div, {
          className: "text-center mb-16 lg:mb-20",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !1, amount: 0.3 },
          variants: n,
          children: e.jsx(j, { className: "mx-auto" }),
        }),
        e.jsx(l.div, {
          className: "flex justify-center",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !1, amount: 0.3 },
          variants: n,
          children: e.jsx(l.div, {
            className: "w-full max-w-2xl",
            variants: x,
            children: e.jsxs("div", {
              className:
                "relative border border-[#d6fc70]/20 rounded-lg p-6 bg-black/80 backdrop-blur-md overflow-hidden",
              children: [
                e.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-[20px] h-[20px] border-t border-l border-[#d6fc70]/80",
                }),
                e.jsx("div", {
                  className:
                    "absolute top-0 right-0 w-[20px] h-[20px] border-t border-r border-[#d6fc70]/80",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-0 left-0 w-[20px] h-[20px] border-b border-l border-[#d6fc70]/80",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-0 right-0 w-[20px] h-[20px] border-b border-r border-[#d6fc70]/80",
                }),
                e.jsxs("div", {
                  className: "mb-8 text-center",
                  children: [
                    e.jsx("h3", {
                      className:
                        "bg-clip-text text-transparent bg-gradient-to-r from-[#d6fc70] via-[#8cffa8] to-[#49ff8c] font-VT323 text-3xl tracking-wide uppercase text-center mx-auto drop-shadow-[0_0_8px_rgba(214,252,112,0.5)]",
                      style: {
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                      children: "STEP-BY-STEP GUIDE",
                    }),
                    e.jsx("div", {
                      className:
                        "w-[180px] h-[2px] bg-gradient-to-r from-[#d6fc70] via-[#8cffa8] to-[#49ff8c] mx-auto mt-2",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-8 text-center",
                  children: [
                    e.jsxs("div", {
                      className: "mb-4",
                      children: [
                        e.jsx(t, {
                          className:
                            "text-white/80 font-semibold mb-2 block text-center",
                          size: "lg",
                          children: s(
                            "howToBuy.paymentMethod.title",
                            "Choose Payment Method"
                          ),
                        }),
                        e.jsx(t, {
                          className: "text-white/60 text-sm block text-center",
                          size: "sm",
                          children: s(
                            "howToBuy.paymentMethod.subtitle",
                            "Select your preferred way to buy $DSNT"
                          ),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex justify-center",
                      children: e.jsx("div", {
                        className:
                          "relative bg-[#0a0e0a] rounded-full p-1 border border-[#d6fc70]/30",
                        children: e.jsxs("div", {
                          className: "flex relative",
                          children: [
                            e.jsx("button", {
                              onClick: () => i("crypto"),
                              className: `px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                                r === "crypto"
                                  ? "text-black bg-[#d6fc70] shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                                  : "text-white/70 hover:text-white"
                              }`,
                              children: s(
                                "howToBuy.paymentMethod.crypto",
                                "Crypto"
                              ),
                            }),
                            e.jsx("button", {
                              onClick: () => i("creditCard"),
                              className: `px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                                r === "creditCard"
                                  ? "text-black bg-[#17ECFF] shadow-[0_0_15px_rgba(23,236,255,0.5)]"
                                  : "text-white/70 hover:text-white"
                              }`,
                              children: s(
                                "howToBuy.paymentMethod.creditCard",
                                "Credit Card"
                              ),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-6",
                  children:
                    r === "crypto"
                      ? e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#d6fc70]/20 hover:border-[#d6fc70]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#d6fc70] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "1",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: s(
                                      "howToBuy.steps.crypto.connectWallet",
                                      "Connect Wallet"
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#17ECFF]/20 hover:border-[#17ECFF]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#17ECFF] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "2",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Select Network",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#49ff8c]/20 hover:border-[#49ff8c]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#49ff8c] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "3",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children:
                                      "Enter Amount (in payment token or DSNT)",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#8cffa8]/20 hover:border-[#8cffa8]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#8cffa8] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "4",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Confirm Transaction",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#4ca2ff]/20 hover:border-[#4ca2ff]/40 transition-all duration-300",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#4ca2ff] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "5",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Have Your Tokens Secured",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#d6fc70]/20 hover:border-[#d6fc70]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#d6fc70] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "1",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Connect Wallet",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#17ECFF]/20 hover:border-[#17ECFF]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#17ECFF] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "2",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Enter Amount (USD or DSNT)",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#49ff8c]/20 hover:border-[#49ff8c]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#49ff8c] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "3",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Verify Your Phone Number",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#8cffa8]/20 hover:border-[#8cffa8]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#8cffa8] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "4",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children:
                                      "Enter Credit Card Data & Personal Details",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#4ca2ff]/20 hover:border-[#4ca2ff]/40 transition-all duration-300 mb-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#4ca2ff] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "5",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Confirm Payment",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-start gap-4 p-4 bg-[#0a0e0a]/50 rounded-lg border border-[#d6fc70]/20 hover:border-[#d6fc70]/40 transition-all duration-300",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-[#d6fc70] rounded-full flex items-center justify-center text-black font-bold text-sm",
                                  children: "6",
                                }),
                                e.jsx("div", {
                                  className: "flex-1",
                                  children: e.jsx(t, {
                                    className: "text-white font-semibold",
                                    size: "lg",
                                    children: "Have Your Tokens Secured",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                }),
                e.jsx("div", {
                  className: "mt-8 text-center",
                  children: e.jsx(p, {
                    className:
                      "bg-gradient-to-r from-[#d6fc70] to-[#49ff8c] text-black font-bold py-3 px-8 rounded-lg hover:from-[#49ff8c] hover:to-[#d6fc70] transition-all duration-300 transform hover:scale-105",
                    onClick: () =>
                      window.scrollTo({ top: 0, behavior: "smooth" }),
                    children: s("howToBuy.cta.startBuying", "Start Buying Now"),
                  }),
                }),
                e.jsx("div", {
                  className: "text-center mt-6",
                  children: e.jsx(t, {
                    className:
                      "text-xs leading-tight inline-block max-w-[280px] sm:max-w-none opacity-70",
                    children: s(
                      "howToBuy.disclaimer",
                      "* Ensure you have sufficient funds and understand the investment risks"
                    ),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  });
N.displayName = "HowToBuy";
export { N as default };
