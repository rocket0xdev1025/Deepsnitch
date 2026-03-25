import { j as e, S as d } from "./index-BN8Hac8J.js";
import { r as i } from "./wallet-libs-C4iBya-7.js";
import "./App-B3-mP0gp.js";
import { u as p } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const y = ({ isOpen: t, onClose: a }) => {
  const [l, o] = i.useState(!1),
    { t: s } = p();
  if (
    (i.useEffect(() => {
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
      const r = (c) => {
        c.key === "Escape" && a();
      };
      return (
        t && document.addEventListener("keydown", r),
        () => {
          document.removeEventListener("keydown", r);
        }
      );
    }, [t, a]),
    !l && !t)
  )
    return null;
  const n = () =>
    e.jsx("svg", {
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      className: "w-6 h-6",
      children: e.jsx("path", {
        d: "M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174",
      }),
    });
  return e.jsxs("div", {
    className: `fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
      t ? "opacity-100" : "opacity-0"
    }`,
    children: [
      e.jsx("div", {
        className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
        onClick: a,
      }),
      e.jsxs("div", {
        className: `relative bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 p-6 max-w-md w-full mx-4 shadow-xl transform transition-all duration-300 ${
          t ? "translate-y-0" : "translate-y-8"
        }`,
        children: [
          e.jsx("button", {
            onClick: a,
            className:
              "absolute top-4 right-4 text-white/70 hover:text-white transition-colors",
            children: e.jsx(d, { className: "w-6 h-6", name: "close" }),
          }),
          e.jsxs("div", {
            className: "text-center mb-6",
            children: [
              e.jsx("h2", {
                className: "font-VT323 text-36 tracking-1 text-green mb-2",
                children: s("whitepaper.title", "WHITEPAPER"),
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
                children: s(
                  "whitepaper.description",
                  "The DeepSnitch Whitepaper outlines our revolutionary approach to blockchain security and privacy, detailing our proprietary algorithms and technical specifications."
                ),
              }),
              e.jsx("p", {
                className: "text-18 leading-relaxed",
                children: s(
                  "whitepaper.content",
                  "Our whitepaper includes comprehensive information about our token economics, roadmap, and future development plans for the DeepSnitch ecosystem."
                ),
              }),
              e.jsx("p", {
                className: "text-18 leading-relaxed",
                children: s(
                  "whitepaper.downloadPrompt",
                  "View the complete whitepaper to explore the technical details and vision behind DeepSnitch."
                ),
              }),
            ],
          }),
          
        ],
      }),
    ],
  });
};
export { y as default };
