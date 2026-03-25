const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Welcome-ItxRIC1o.js",
      "assets/index-BN8Hac8J.js",
      "assets/wallet-libs-C4iBya-7.js",
      "assets/crypto-libs-BTkSibId.js",
      "assets/react-vendor-CKqXOJaQ.js",
      "assets/animation-libs-DQqW_Ij_.js",
      "assets/i18n-libs-7YlS43F0.js",
      "assets/css/index-BcRriLhl.css",
      "assets/App-B3-mP0gp.js",
      "assets/index-Chjiymov.js",
      "assets/v4-C6aID195.js",
      "assets/empty-Bo4iX0pm.js",
      "assets/css/App-DqQskmkT.css",
      "assets/Cards-CwWziXNZ.js",
      "assets/StakeForm-CtDglORI.js",
      "assets/ClaimRewards-DN_2jrSJ.js",
      "assets/ClaimBonus-CtDIHHdx.js",
    ])
) => i.map((i) => d[i]);
import { r as t, _ as o } from "./wallet-libs-C4iBya-7.js";
import { j as e, L as n } from "./index-BN8Hac8J.js";
import { g as j, P as v } from "./seoConfigs-BEyLWaUm.js";
import { S as y } from "./App-B3-mP0gp.js";
import { u as k } from "./i18n-libs-7YlS43F0.js";
import { u as g } from "./react-vendor-CKqXOJaQ.js";
import {
  motion as c,
  AnimatePresence as _,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const E = t.lazy(() =>
    o(
      () => import("./Welcome-ItxRIC1o.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  S = t.lazy(() =>
    o(
      () => import("./Cards-CwWziXNZ.js"),
      __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  w = t.lazy(() =>
    o(
      () => import("./StakeForm-CtDglORI.js"),
      __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  T = t.lazy(() =>
    o(
      () => import("./ClaimRewards-DN_2jrSJ.js"),
      __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  A = t.lazy(() =>
    o(
      () => import("./ClaimBonus-CtDIHHdx.js"),
      __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  W = () => {
    const { t: l } = k(),
      { presaleData: r } = g() || { presaleData: null },
      x = j("staking"),
      [C, I] = t.useState(!0),
      [a, u] = t.useState(
        () => sessionStorage.getItem("stakingActiveTab") || "stake"
      ),
      d = t.useMemo(() => {
        if (!r) return !1;
        const s = Number(r.endAt ?? 0);
        if (!s || s <= 0) return !1;
        const m = Number(r.serverNow ?? Math.floor(Date.now() / 1e3)),
          p = 10080 * 60;
        return m >= s + p;
      }, [r]);
    t.useEffect(() => {
      sessionStorage.setItem("stakingActiveTab", a);
    }, [a]),
      t.useEffect(() => {
        !d && a === "bonus" && u("stake");
      }, [d, a]);
    const b = (s) => {
        u(s);
      },
      f = [
        { id: "stake", label: l("STAKE"), icon: "💰" },
        { id: "claim", label: l("STAKING REWARDS"), icon: "🏆" },
        ...(d
          ? [{ id: "bonus", label: l("stake.tabs.bonus"), icon: "🎁" }]
          : []),
      ],
      h = () => {
        const s = e.jsx(t.Suspense, {
            fallback: e.jsx(n, {}),
            children: e.jsx(w, {}),
          }),
          m = e.jsx(t.Suspense, {
            fallback: e.jsx(n, {}),
            children: e.jsx(T, {}),
          }),
          p = e.jsx(t.Suspense, {
            fallback: e.jsx(n, {}),
            children: e.jsx(A, {}),
          });
        return e.jsxs(c.div, {
          className: "w-full",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 },
          children: [
            e.jsx("div", {
              className: "flex justify-center mb-10",
              children: e.jsx("div", {
                className:
                  "inline-flex p-1.5 bg-[#0a0e0a] backdrop-blur-sm rounded-xl border border-[#1a1f1a] shadow-lg shadow-black/20",
                children: f.map((i) =>
                  e.jsxs(
                    "button",
                    {
                      className: `px-6 py-3.5 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px] whitespace-nowrap ${
                        a === i.id
                          ? "bg-gradient-to-r from-[#d6fc70] to-[#8cffa8] text-black shadow-sm hover:bg-transparent hover:text-green hover:border hover:border-green"
                          : "bg-transparent text-white/70 hover:bg-gradient-to-r hover:from-[#d6fc70] hover:to-[#8cffa8] hover:text-black hover:border-transparent"
                      }`,
                      onClick: () => b(i.id),
                      children: [
                        e.jsx("span", { children: i.icon }),
                        e.jsx("span", { children: i.label }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            }),
            e.jsx("div", {
              className: "min-h-[480px]",
              children: e.jsxs(_, {
                mode: "wait",
                children: [
                  a === "stake" &&
                    e.jsx(
                      c.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -10 },
                        transition: { duration: 0.3 },
                        children: s,
                      },
                      "stake-tab"
                    ),
                  a === "claim" &&
                    e.jsx(
                      c.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -10 },
                        transition: { duration: 0.3 },
                        children: m,
                      },
                      "claim-tab"
                    ),
                  a === "bonus" &&
                    e.jsx(
                      c.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -10 },
                        transition: { duration: 0.3 },
                        children: p,
                      },
                      "bonus-tab"
                    ),
                ],
              }),
            }),
          ],
        });
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(y, { ...x }),
        e.jsx(v, {}),
        e.jsx("div", { id: "staking-top" }),
        e.jsx(t.Suspense, {
          fallback: e.jsx(n, {}),
          children: e.jsx(E, { stakingInterface: e.jsx(h, {}) }),
        }),
        e.jsx(t.Suspense, { fallback: e.jsx(n, {}), children: e.jsx(S, {}) }),
      ],
    });
  };
export { W as default };
