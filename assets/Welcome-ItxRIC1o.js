import { j as t } from "./index-BN8Hac8J.js";
import "./App-B3-mP0gp.js";
import { r } from "./wallet-libs-C4iBya-7.js";
import { u as d } from "./i18n-libs-7YlS43F0.js";
import {
  AnimatePresence as m,
  motion as a,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const I = ({ stakingInterface: c }) => {
  const { t: s } = d(),
    [l, g] = r.useState(!0);
  r.useEffect(() => {
    var i;
    localStorage.getItem("scrollToStakingTop") === "true" &&
      (localStorage.removeItem("scrollToStakingTop"),
      window.scrollTo({ top: 0, behavior: "smooth" }),
      (i = document.getElementById("staking-top")) == null ||
        i.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);
  const x = {
      hidden: { opacity: 0, y: 80 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 40,
          staggerChildren: 0.3,
          delayChildren: 0.2,
        },
      },
    },
    n = {
      hidden: { y: 80, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 10, stiffness: 50, duration: 1 },
      },
    },
    p = s("STAKE $DSNT POWER THE AI TO EARN TOKENS").split(" "),
    o = [
      "$DSNT",
      "POWER",
      "AI",
      "EARN",
      "ALIMENTER",
      "L'IA",
      "GAGNER",
      "TOKENS",
      "STAKER",
    ];
  return t.jsxs("div", {
    className:
      "pb-4 md:min-h-[calc(100vh-450px)] md:flex md:flex-col md:justify-between md:relative",
    id: "staking-hero",
    children: [
      t.jsx("div", { id: "staking-top" }),
      t.jsx("div", {
        className: "md:flex-grow md:flex md:items-center md:justify-center",
        children: t.jsxs("div", {
          className:
            "w-full flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-[1400px] mx-auto px-4",
          children: [
            t.jsx(
              m,
              {
                mode: "wait",
                children:
                  l &&
                  t.jsxs(
                    a.div,
                    {
                      className:
                        "block px-[0px] flex flex-col justify-center lg:w-1/2 mb-8 lg:mb-0",
                      initial: "hidden",
                      animate: "visible",
                      exit: { opacity: 0, y: -30 },
                      variants: x,
                      children: [
                        t.jsx(a.h1, {
                          className:
                            "uppercase max-w-[650px] mb-[24px] lg:mb-[28px] text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl relative tracking-tight",
                          variants: n,
                          children: p.map((e, i) =>
                            t.jsx(
                              "span",
                              {
                                className: `inline-block mr-2 ${
                                  o.includes(e)
                                    ? "bg-clip-text text-transparent bg-gradient-primary drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                                    : ""
                                }`,
                                children: o.includes(e)
                                  ? t.jsx(a.span, {
                                      animate: {
                                        y: [0, -5, 0],
                                        transition: {
                                          duration: 3,
                                          ease: "easeInOut",
                                          repeat: 1 / 0,
                                          delay: i * 0.2,
                                        },
                                      },
                                      children: e,
                                    })
                                  : e,
                              },
                              i
                            )
                          ),
                        }),
                        t.jsx(a.div, {
                          variants: n,
                          children: t.jsx("p", {
                            className:
                              "max-w-[650px] mb-0 text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-medium",
                            children: s("Lock your $DSNT and let your tokens work for you. Stakers fuel the AI Syndicate—earning real rewards daily while powering and securing the network."),
                          }),
                        }),
                      ],
                    },
                    "welcomeContentInner"
                  ),
              },
              "welcomeContent"
            ),
            t.jsx(
              m,
              {
                mode: "wait",
                children:
                  l &&
                  t.jsxs(
                    a.div,
                    {
                      className: "lg:w-1/2 relative w-full mb-4 lg:mb-0",
                      initial: { opacity: 0, x: 60 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 60 },
                      transition: {
                        delay: 0.3,
                        duration: 0.9,
                        type: "spring",
                        damping: 15,
                      },
                      children: [
                        t.jsx("div", {
                          className:
                            "absolute top-1/2 -translate-y-1/2 right-[-300px] md:right-[-320px] lg:right-[-350px] xl:right-[-380px] w-[450px] md:w-[550px] lg:w-[650px] xl:w-[700px] h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] z-0 opacity-80 pointer-events-none",
                          children: t.jsx("img", {
                            src: "/images/staking/image.png",
                            alt: "Staking Background",
                            className: "object-contain w-full h-full",
                          }),
                        }),
                        t.jsx("div", {
                          className: "relative z-10",
                          children: c,
                        }),
                      ],
                    },
                    "stakingInterfaceInner"
                  ),
              },
              "stakingInterface"
            ),
          ],
        }),
      }),
    ],
  });
};
export { I as default };
