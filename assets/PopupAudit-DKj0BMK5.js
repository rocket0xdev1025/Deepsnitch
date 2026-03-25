import { j as e, S as d } from "./index-BN8Hac8J.js";
import { r as i } from "./wallet-libs-C4iBya-7.js";
import "./App-B3-mP0gp.js";
import { u as c } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const w = ({ isOpen: t, onClose: s }) => {
  const [l, o] = i.useState(!1),
    { t: a } = c();
  return (
    i.useEffect(() => {
      let r;
      return (
        t
          ? (o(!0), (document.body.style.overflow = "hidden"))
          : ((r = setTimeout(() => {
              o(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          r && clearTimeout(r);
        }
      );
    }, [t]),
    i.useEffect(() => {
      const r = (n) => {
        n.key === "Escape" && s();
      };
      return (
        t && document.addEventListener("keydown", r),
        () => {
          document.removeEventListener("keydown", r);
        }
      );
    }, [t, s]),
    !l && !t
      ? null
      : e.jsxs("div", {
          className: `fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
            t ? "opacity-100" : "opacity-0"
          }`,
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
              onClick: s,
            }),
            e.jsxs("div", {
              className: `relative bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 p-6 max-w-md w-full mx-4 shadow-xl transform transition-all duration-300 ${
                t ? "translate-y-0" : "translate-y-8"
              }`,
              children: [
                e.jsx("button", {
                  onClick: s,
                  className:
                    "absolute top-4 right-4 text-white/70 hover:text-white transition-colors",
                  children: e.jsx(d, { className: "w-6 h-6", name: "close" }),
                }),
                e.jsxs("div", {
                  className: "text-center mb-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "font-VT323 text-36 tracking-1 text-green mb-2",
                      children: a("audit.title", "SECURITY AUDIT"),
                    }),
                    e.jsx("div", {
                      className: "w-[60px] h-[3px] bg-green/50 mx-auto",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-white space-y-4 mb-6",
                  children: [
                    e.jsx("p", {
                      className: "text-18 leading-relaxed",
                      children: a(
                        "audit.description",
                        "DeepSnitch has undergone rigorous security audits by leading blockchain security firms to ensure the integrity and safety of our smart contracts."
                      ),
                    }),
                    e.jsx("p", {
                      className: "text-18 leading-relaxed",
                      children: a(
                        "audit.auditDetails",
                        "Our smart contracts have been audited by CertiK and SlowMist, with zero critical vulnerabilities found."
                      ),
                    }),
                    e.jsx("p", {
                      className: "text-18 leading-relaxed",
                      children: a(
                        "audit.viewPrompt",
                        "View the complete audit report by clicking the button below."
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex justify-center items-center gap-8 mb-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-[160px] h-[45px] bg-[#0a0e0a] border border-[#1a1f1a] rounded-md flex items-center justify-center overflow-hidden",
                      style: { border: "1px solid #000", borderRadius: "17px" },
                      children: e.jsx("a", {
                        href: "https://app.coinsult.net/eth/0x1f999fe52fed5ded2228810b7ab781402fc34622",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center justify-center w-full h-full",
                        children: e.jsx("img", {
                          src: "/images/coinsult.jpg",
                          alt: "Coinsult Audit",
                          className: "w-auto h-[45px] object-contain",
                        }),
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "w-[160px] h-[45px] bg-[#0a0e0a] border border-[#1a1f1a] rounded-md flex items-center justify-center overflow-hidden",
                      style: { border: "1px solid #000", borderRadius: "17px" },
                      children: e.jsx("a", {
                        href: "https://app.solidproof.io/projects/deep-snitch",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center justify-center w-full h-full",
                        children: e.jsx("img", {
                          src: "/images/solidproof.jpg",
                          alt: "Solidproof Audit",
                          className: "w-auto h-[45px] object-contain",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
  );
};
export { w as default };
