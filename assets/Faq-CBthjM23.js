import { j as t, S as f } from "./index-BN8Hac8J.js";
import { r as n } from "./wallet-libs-C4iBya-7.js";
import { a as b, T as m } from "./App-B3-mP0gp.js";
import { u as y } from "./i18n-libs-7YlS43F0.js";
import {
  useInView as g,
  useAnimation as v,
  motion as a,
  AnimatePresence as w,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const j = n.memo(
    ({ item: r, index: l, isOpen: e, toggleAccordion: p, delay: x }) => {
      const i = n.useRef(null),
        d = g(i, { once: !1, margin: "-100px 0px" });
      return t.jsxs(a.div, {
        ref: i,
        initial: { opacity: 0, y: 30 },
        animate: d ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.6, delay: x },
        className: `faq-item pt-[15px] lg:pt-[30px] pb-[0px] ${
          l === 0 ? "border-t" : ""
        } border-white border-b relative`,
        children: [
          t.jsxs("div", {
            className:
              "faq-item-title flex items-center gap-[16px] lg:gap-[48px] justify-between cursor-pointer hover:bg-dark2/30 rounded-lg p-2 transition-colors duration-200",
            onClick: () => p(r.id),
            children: [
              t.jsxs("div", {
                className: "flex items-center gap-[16px] lg:gap-[48px]",
                children: [
                  t.jsxs(a.div, {
                    className:
                      "font-VT323 lg:text-56 flex-shrink-0 text-[#D6FC70]",
                    animate: {
                      textShadow: e
                        ? [
                            "0 0 5px rgba(214,252,112,0.3)",
                            "0 0 15px rgba(214,252,112,0.6)",
                            "0 0 5px rgba(214,252,112,0.3)",
                          ]
                        : "none",
                      opacity: e ? [0.8, 1, 0.8] : 0.8,
                    },
                    transition: {
                      duration: 2,
                      repeat: 1 / 0,
                      repeatType: "reverse",
                    },
                    children: ["//: ", r.id],
                  }),
                  t.jsx(m, {
                    className: "lg:text-30 leading-6 lg:leading-36",
                    size: "sm",
                    children: r.question,
                  }),
                ],
              }),
              t.jsx(a.div, {
                className:
                  "faq-item-icon w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-dark2 rounded-full p-2 ",
                animate: {
                  rotate: e ? 135 : 0,
                  backgroundColor: e
                    ? "rgba(214, 252, 112, 0.2)"
                    : "rgba(25, 25, 25, 0.5)",
                  boxShadow: e ? "0 0 10px rgba(214,252,112,0.3)" : "none",
                },
                transition: { duration: 0.3 },
                whileHover: {
                  scale: 1.1,
                  backgroundColor: e
                    ? "rgba(214, 252, 112, 0.3)"
                    : "rgba(25, 25, 25, 0.7)",
                },
                whileTap: { scale: 0.95 },
                children: t.jsx(f, { name: e ? "remove" : "add" }),
              }),
            ],
          }),
          t.jsx(w, {
            children:
              e &&
              t.jsx(a.div, {
                className: "faq-item-content pl-[20px] lg:pl-[20px]  pb-[40px]",
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                children: t.jsx(a.div, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.2, delay: 0.1 },
                  children: t.jsxs(m, {
                    size: "xm",
                    className: "relative pl-5 border-l-2 border-[#D6FC70]/50",
                    children: [
                      t.jsx(a.div, {
                        className:
                          "absolute left-[-4px] top-[10px] w-[6px] h-[6px] bg-[#D6FC70] rounded-full",
                        animate: {
                          boxShadow: ["0 0 0px #D6FC70", "0 0 10px #D6FC70"],
                          y: [0, -5, 0, 5, 0],
                        },
                        transition: {
                          boxShadow: {
                            duration: 1.5,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                          },
                          y: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
                        },
                      }),
                      r.answer,
                    ],
                  }),
                }),
              }),
          }),
        ],
      });
    }
  ),
  F = () => {
    const [r, l] = n.useState(null),
      { t: e } = y(),
      p = n.useRef(null),
      x = g(p, { once: !1, amount: 0.2 }),
      i = v();
    n.useEffect(() => {
      x ? i.start("visible") : i.start("hidden");
    }, [i, x]);
    const d = {
        hidden: { opacity: 0, y: -30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 15 },
        },
      }
      const faq = {
        items: {
          1: {
            question: "What is Deep Snitch AI?",
            answer: "Deep Snitch AI is an AI-powered on-chain intelligence platform that monitors wallet activity, social sentiment, and emerging market movements in real time. Insights are delivered directly to $DSNT holders, with tiered access based on token holdings."
          },
          2: {
            question: "How does the AI actually work?",
            answer: "Our AI system combines on-chain data analysis with natural language processing to detect patterns, track smart money movements, and surface early signals. The system continuously adapts using machine learning models trained on evolving blockchain and market data."
          },
          3: {
            question: "Is $DSNT audited and secure?",
            answer: "Security is a top priority. Our smart contract follows industry best practices and has been thoroughly tested. The contract is publicly verifiable on-chain to ensure transparency."
          },
          4: {
            question: "Where can I buy $DSNT?",
            answer: "$DSNT is available for trading following its public launch. You can purchase it through supported decentralized or centralized exchanges where it is listed. Always verify the official contract address before trading."
          },
          5: {
            question: "Is there a token presale?",
            answer: "No. $DSNT launched directly to the public market to ensure a fair and transparent distribution without private allocation phases."
          },
          6: {
            question: "What utility does $DSNT provide?",
            answer: "$DSNT unlocks access to Deep Snitch AI analytics tools, intelligence dashboards, alerts, and premium insights. Higher holdings provide enhanced access tiers and additional platform features."
          },
          7: {
            question: "What determines the token price?",
            answer: "The price of $DSNT is determined by open market supply and demand. As with any digital asset, price movements can be volatile and are influenced by market conditions."
          },
          8: {
            question: "How is token transparency ensured?",
            answer: "All $DSNT transactions, supply metrics, and contract activity are fully transparent and verifiable on-chain. We encourage holders to independently review the contract and monitor activity through blockchain explorers."
          },
          9: {
            question: "Why is Deep Snitch AI gaining attention?",
            answer: "Deep Snitch AI stands out by combining AI-driven blockchain intelligence with real utility. The platform focuses on providing actionable insights typically accessible only to advanced traders and institutions."
          },
          10: {
            question: "Is $DSNT just a meme coin?",
            answer: "Deep Snitch AI blends strong branding with real technology. While it embraces the viral energy of meme culture, $DSNT is fundamentally a utility token powering an AI analytics ecosystem."
          },
          11: {
            question: "When will the Deep Snitch dashboard be available?",
            answer: "The Deep Snitch dashboard and tools are being rolled out in phases following launch. $DSNT holders will gain access as platform features go live."
          }
        }
      },
      h = Object.entries(faq.items).map(([s, o]) => ({
        id: s,
        question: o.question,
        answer: o.answer,
      }));

    // ✅ Fix: r = activeId, l = setActiveId from useState

    const u = (s) => {
      l(r === s ? null : s);
    };
    return t.jsxs(a.div, {
      ref: p,
      className: "mt-[60px] lg:mt-[180px] xl:mt-[150px] mx-[0px] relative",
      initial: "hidden",
      animate: i,
      id: "faq",
      children: [
        t.jsx("div", {
          className:
            "absolute top-[-269px] left-[1562px] w-[540px] h-[869px] rounded-[540px] bg-gradient-to-b from-[#B2FF17] to-[#B2FF17] blur-[150px]",
        }),
        t.jsx("div", {
          className:
            "absolute top-[757px] left-[-689px] w-[540px] h-[869px] rounded-[540px] bg-gradient-to-b from-[#B2FF17] to-[#B2FF17] blur-[150px]",
        }),
        t.jsx(a.div, {
          variants: d,
          children: t.jsx(b, {
            level: 3,
            weight: "light",
            color: "primary",
            align: "center",
            className: "relative z-10 text-center mt-[100px] lg:mt-[0px]",
            children: e("FAQ"),
          }),
        }),
        t.jsx("div", {
          className:
            "faq mt-[25px] lg:mt-[45px] xl:mt-[96px] relative z-10 max-w-[1200px] mx-auto",
          children: h.map((s, o) =>
            t.jsx(
              j,
              {
                item: s,
                index: o,
                isOpen: r === s.id,
                toggleAccordion: u,
                delay: o * 0.1,
              },
              s.id
            )
          ),
        }),
        t.jsx(a.div, {
          className:
            "absolute bottom-[20px] right-0 w-[100px] h-[100px] opacity-20 hidden lg:block",
          animate: { opacity: [0.1, 0.2, 0.1] },
          transition: { duration: 5, repeat: 1 / 0, repeatType: "reverse" },
          children: t.jsxs("svg", {
            width: "100",
            height: "100",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              t.jsx("path", {
                d: "M0 0L100 0M0 50L100 50M0 100L100 100",
                stroke: "#D6FC70",
                strokeWidth: "1",
              }),
              t.jsx("path", {
                d: "M0 0L0 100M50 0L50 100M100 0L100 100",
                stroke: "#D6FC70",
                strokeWidth: "1",
              }),
            ],
          }),
        }),
      ],
    });
  },
  B = n.memo(F);
export { B as default };
