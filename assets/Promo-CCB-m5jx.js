import { j as e } from "./index-BN8Hac8J.js";
import { a, B as c } from "./App-B3-mP0gp.js";
import "./wallet-libs-C4iBya-7.js";
import { u as o } from "./i18n-libs-7YlS43F0.js";
import { motion as s } from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const d = () =>
    e.jsxs("div", {
      className: "w-full h-full relative",
      children: [
        e.jsx("div", {
          className: "absolute inset-0 opacity-10",
          children: e.jsx("div", {
            className: "w-full h-full",
            style: {
              backgroundImage: `
            linear-gradient(rgba(214, 252, 112, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214, 252, 112, 0.08) 1px, transparent 1px)
          `,
              backgroundSize: "50px 50px",
            },
          }),
        }),
        e.jsxs("svg", {
          className: "absolute inset-0 w-full h-full",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [
            e.jsx("path", {
              d: "M0,75 L10,62 L20,48 L30,55 L40,40 L50,45 L60,30 L70,35 L80,20 L90,25 L100,5",
              stroke: "#D6FC70",
              strokeWidth: "0.5",
              fill: "none",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "10",
              cy: "62",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "20",
              cy: "48",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "30",
              cy: "55",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "40",
              cy: "40",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "50",
              cy: "45",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "60",
              cy: "30",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "70",
              cy: "35",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "80",
              cy: "20",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "90",
              cy: "25",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
            e.jsx("circle", {
              cx: "100",
              cy: "5",
              r: "0.5",
              fill: "#D6FC70",
              opacity: "0.8",
            }),
          ],
        }),
      ],
    }),
  g = () => {
    const { t } = o(),
      l = () => {
        const r = document.getElementById("hero");
        r &&
          (r.scrollIntoView({ behavior: "smooth" }),
          setTimeout(() => {
            const i = r.querySelector("input") || r.querySelector("form");
            i && i.focus();
          }, 800));
      };
    return e.jsxs(s.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6 },
      className:
        "relative py-[40px] md:py-[60px] lg:py-[80px] w-full overflow-hidden z-10",
      id: "promo",
      children: [
      ],
    });
  };
export { g as default };
