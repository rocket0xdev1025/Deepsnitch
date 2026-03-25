import { j as e } from "./index-BN8Hac8J.js";
import "./wallet-libs-C4iBya-7.js";
import { T as d } from "./App-B3-mP0gp.js";
import { u as a } from "./i18n-libs-7YlS43F0.js";
import { motion as c } from "./animation-libs-DQqW_Ij_.js";
import { u as o } from "./react-vendor-CKqXOJaQ.js";
import "./crypto-libs-BTkSibId.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const r = ({ title: s, children: t, icon: i, accentColor: l }) =>
    e.jsxs(c.div, {
      className: `bg-[#0D1514] border-t-2 ${
        l || "border-[#d6fc70]"
      } rounded-md p-3 md:p-4 relative overflow-hidden group flex flex-col h-full shadow-sm text-center`,
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: !0 },
      transition: { duration: 0.2 },
      whileHover: {
        y: -2,
        boxShadow: "0 5px 15px -5px rgba(0,0,0,0.3)",
        borderColor: "#ffffff",
      },
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-center mb-1 md:mb-2",
          children: [
            e.jsx("div", {
              className:
                "text-[#d6fc70] mr-2 text-base md:text-lg w-6 h-6 md:w-8 md:h-8 flex items-center justify-center",
              children: i,
            }),
            e.jsx(d, {
              className:
                "text-white uppercase font-bold text-xs md:text-base tracking-wider",
              children: s,
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-grow flex flex-col items-center justify-center",
          children: t,
        }),
      ],
    }),
  b = () => {
    const { t: s } = a(),
      { presaleData: t } = o();
    return e.jsx("div", {
      className: "mt-8 px-4 z-30 w-full relative",
      children: e.jsx("div", {
        className: "w-full max-w-[1400px] mx-auto",
        children: e.jsxs("div", {
          className:
            "grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-w-[1000px] mx-auto",
          children: [
            e.jsx(r, {
              title: "total tokens staked",
              icon: "🔒",
              accentColor: "border-[#70a8fc]",
              children: e.jsxs("div", {
                className:
                  "font-VT323 text-[#70a8fc] text-xl md:text-3xl text-center",
                children: [
                  (t == null ? void 0 : t.displayTotalStaked) || 0,
                  " $DSNT",
                ],
              }),
            }),
            e.jsxs(r, {
              title: "total rewards distributed daily",
              icon: "⏱️",
              accentColor: "border-[#f7fc70]",
              children: [
                e.jsxs("div", {
                  className:
                    "font-VT323 text-[#f7fc70] text-lg md:text-2xl text-center",
                  children: [
                    t != null && t.displayDailyRewards
                      ? t.displayDailyRewards
                      : 0,
                    " $DSNT / DAY",
                  ],
                }),
                e.jsx("div", {
                  className: "text-white/80 text-xs md:text-sm text-center",
                }),
              ],
            }),
            e.jsx(r, {
              title: "realtime daily returns",
              icon: "📈",
              accentColor: "border-[#fc70d9]",
              children: e.jsxs("div", {
                className:
                  "font-VT323 text-[#fc70d9] text-lg md:text-2xl text-center",
                children: [
                  t != null && t.displayDailyReturnPercent
                    ? t.displayDailyReturnPercent
                    : 0,
                  "% ",
                  e.jsx("span", {
                    className: "text-white/80 text-base ml-1",
                    children: s("stake.claimRewards.daily"),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  };
export { b as default };
