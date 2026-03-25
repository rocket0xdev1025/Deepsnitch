import { u as F, a as R, j as e } from "./index-BN8Hac8J.js";
import { u as z, I as V, T as I, n as L, B as W } from "./App-B3-mP0gp.js";
import "./swiper-react-D6YOFoP1.js";
import { r as s } from "./wallet-libs-C4iBya-7.js";
import { P, L as B, z as _ } from "./crypto-libs-BTkSibId.js";
import { u as K } from "./i18n-libs-7YlS43F0.js";
import { u as T } from "./useBalance-Cm6QGrIt.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
import "./swiper-libs-ChlQaAX5.js";
const $ = L,
  le = ({ isOpen: a, onClose: c, userTokenBalance: t }) => {
    var v;
    const [N, m] = s.useState(a),
      [D, M] = s.useState(!1),
      [j, u] = s.useState("0.00"),
      [S, h] = s.useState("0.00"),
      [C, g] = s.useState("0.00"),
      [k, y] = s.useState(!0),
      { t: d } = K(),
      { disconnectWallet: A, isConnected: o, address: r } = F(),
      { caipNetwork: n } = R(),
      { connection: f } = z();
    s.useRef(null);
    const x = s.useRef(!1),
      p = s.useRef(!1),
      { data: q, refetch: b } = T({
        address: r,
        query: {
          enabled: o && !!r,
          staleTime: 3e4,
          cacheTime: 3e5,
          refetchOnMount: !1,
          refetchOnWindowFocus: !1,
        },
      });
    return (
      s.useEffect(() => {
        if (!o || !n) return;
        (async () => {
          y(!0);
          try {
            if (n.name.includes("Solana")) {
              if (f && r) {
                const l = new P(r),
                  E = ((await f.getBalance(l)) / B).toFixed(4);
                u(E);
              }
            } else {
              const l = await b();
              if (l != null && l.data) {
                const w = _(l.data.value, "ether");
                u(Number(w).toFixed(4));
              }
            }
            t != null && t.displayBalance ? h(t.displayBalance) : h("0.00"),
              t != null && t.displayStakedBalance
                ? g(t.displayStakedBalance)
                : g("0.00");
          } catch (l) {
            console.error("Error fetching balances:", l);
          } finally {
            y(!1);
          }
        })();
      }, [o, n, r, f, b, t]),
      s.useEffect(() => {
        let i;
        return (
          a
            ? (m(!0), (document.body.style.overflow = "hidden"))
            : ((i = setTimeout(() => {
                m(!1);
              }, 300)),
              (document.body.style.overflow = "")),
          () => {
            i && clearTimeout(i);
          }
        );
      }, [a]),
      s.useEffect(() => {
        const i = (l) => {
          l.key === "Escape" && c();
        };
        return (
          a && document.addEventListener("keydown", i),
          () => {
            document.removeEventListener("keydown", i);
          }
        );
      }, [a, c]),
      s.useEffect(() => {
        a && o && ((x.current = !0), (p.current = !1)),
          a || ((x.current = !1), (p.current = !1)),
          a &&
            x.current &&
            !o &&
            !p.current &&
            (console.log("👋 Wallet disconnected, auto-closing account modal"),
            (p.current = !0),
            c(),
            (x.current = !1));
      }, [o, a, c]),
      !N && !a
        ? null
        : e.jsxs("div", {
            className: `fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
              a ? "opacity-100" : "opacity-0 pointer-events-none"
            }`,
            onClick: c,
            children: [
              e.jsx("div", {
                className: "absolute inset-0 bg-black bg-opacity-70",
              }),
              e.jsx("div", {
                className: "relative z-10",
                style: {
                  borderRadius: "20px",
                  padding: "1px",
                  background:
                    "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
                  maxWidth: "392px",
                  width: "90%",
                  maxHeight: "90vh",
                },
                onClick: (i) => i.stopPropagation(),
                children: e.jsxs("div", {
                  className:
                    "relative rounded-[20px] px-[10px] lg:px-[20px] py-[8px] lg:py-[16px] max-h-[90vh] overflow-y-auto w-full",
                  style: {
                    background: "rgba(12, 16, 15, 1)",
                    overflow: "hidden",
                  },
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                      style: {
                        width: "229px",
                        height: "20px",
                        marginTop: "-40px",
                        background:
                          "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                        filter: "blur(74px)",
                        opacity: 0.8,
                      },
                    }),
                    e.jsx("div", {
                      className:
                        "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                      style: {
                        width: "229px",
                        height: "20px",
                        marginTop: "-40px",
                        background:
                          "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                        filter: "blur(40px)",
                        opacity: 0.4,
                      },
                    }),
                    e.jsxs("div", {
                      className:
                        "relative flex items-center justify-center mb-4",
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold uppercase font-VT323",
                          style: {
                            background:
                              "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          },
                          children: d("walletAccount.title"),
                        }),
                        e.jsx("button", {
                          onClick: c,
                          className:
                            "hover:opacity-70 transition-opacity absolute top-0 right-0",
                          "aria-label": "Close modal",
                          children: e.jsx("img", {
                            src: "/images/exit.svg",
                            alt: "Close",
                            className: "w-6 h-6",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-center mb-2",
                      style: { color: "#797979", fontSize: "12px" },
                      children: r,
                    }),
                    e.jsx("div", {
                      className:
                        "flex w-full flex-col backdrop-blur-50 rounded-[12px] p-[12px] mb-[8px]",
                      style: { background: "rgba(53, 53, 53, 0.4)" },
                      children: e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-[8px]",
                            children: [
                              n &&
                                e.jsx(V, {
                                  url: n.name.includes("Solana")
                                    ? "/images/payments-logos/solana.svg"
                                    : "/images/payments-logos/ethereum.svg",
                                  className: "w-[28px] h-[28px]",
                                  alt: "Native Token",
                                }),
                              e.jsxs("div", {
                                className: "flex flex-col",
                                children: [
                                  e.jsx(I, {
                                    className: "text-white text-sm",
                                    children: n
                                      ? ((v = $[n.name]) == null
                                          ? void 0
                                          : v.name) || n.name
                                      : "Network",
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs",
                                    style: { color: "rgba(121, 121, 121, 1)" },
                                    children: d("walletAccount.walletBalance"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("span", {
                            className: "text-white font-VT323",
                            style: { fontSize: "24px" },
                            children: k ? "..." : j,
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex gap-[8px]",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex w-full h-full flex-col p-[12px] rounded-[12px]",
                          style: { background: "rgba(53, 53, 53, 0.4)" },
                          children: [
                            e.jsxs("div", {
                              className: "flex gap-[4px]",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "font-VT323 text-[24px] text-white",
                                  children:
                                    (t == null ? void 0 : t.displayBalance) ||
                                    S,
                                }),
                                e.jsx("span", {
                                  className:
                                    "font-VT323 text-[24px] text-white",
                                  children: "$DSNT",
                                }),
                              ],
                            }),
                            e.jsx("span", {
                              style: {
                                fontSize: "14px",
                                color: "rgba(121, 121, 121, 1)",
                              },
                              children: d("walletAccount.tokenBalance"),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex w-full h-full flex-col p-[12px] rounded-[12px]",
                          style: { background: "rgba(53, 53, 53, 0.4)" },
                          children: [
                            e.jsxs("div", {
                              className: "flex items-baseline gap-[4px]",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "font-VT323 text-[24px] text-white",
                                  children:
                                    (t == null
                                      ? void 0
                                      : t.displayStakedBalance) || C,
                                }),
                                e.jsx("span", {
                                  className:
                                    "font-VT323 text-[24px] text-white",
                                  children: "$DSNT",
                                }),
                              ],
                            }),
                            e.jsx("span", {
                              style: {
                                fontSize: "14px",
                                color: "rgba(121, 121, 121, 1)",
                              },
                              children: d("walletAccount.stakedTokens"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    !1,
                    e.jsx(W, {
                      className: "w-full mt-[24px] py-[10px]",
                      rounded: "full",
                      variant: "secondary",
                      onClick: async () => {
                        await A();
                      },
                      style: {
                        borderRadius: "56px",
                        height: "46px",
                        textTransform: "uppercase",
                        fontSize: "24px",
                      },
                      children: d("walletAccount.disconnect"),
                    }),
                  ],
                }),
              }),
            ],
          })
    );
  };
export { le as default };
