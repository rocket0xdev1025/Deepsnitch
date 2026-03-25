import { j as e } from "./index-BN8Hac8J.js";
import { I as r } from "./App-B3-mP0gp.js";
import "./Link-CIaIkVx8.js";
import { r as l } from "./wallet-libs-C4iBya-7.js";
import { u as V } from "./i18n-libs-7YlS43F0.js";
import {
  useAnimation as Y,
  useScroll as B,
  useSpring as T,
  useTransform as a,
  useMotionValueEvent as k,
  motion as i,
} from "./animation-libs-DQqW_Ij_.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const K = () => {
  const { t: A } = V(),
    n = l.useRef(null),
    x = l.useRef(null),
    d = l.useRef(null),
    m = l.useRef(null),
    u = l.useRef(null),
    p = Y(),
    [g, f] = l.useState(!1),
    [s, y] = l.useState(!0);
  l.useEffect(() => {
    const o = () => {
      y(document.visibilityState === "visible");
    };
    return (
      document.addEventListener("visibilitychange", o),
      () => {
        document.removeEventListener("visibilitychange", o);
      }
    );
  }, []);
  const { scrollYProgress: c } = B({
      target: n,
      offset: ["start end", "end start"],
    }),
    t = T(c, { damping: 15, stiffness: 100 }),
    h = a(t, [0, 1], [-80, 80]),
    b = a(t, [0, 1], [-40, 120]),
    v = a(t, [0.1, 0.3], [0.8, 1]),
    w = a(t, [0.1, 0.3], [0, 1]),
    j = a(t, [0.1, 0.3], [40, 0]),
    I = a(t, [0.5, 0.8], [0.8, 1.1]),
    N = a(t, [0.5, 0.8], [-5, 5]),
    E = a(t, [0, 1], [10, -5]),
    R = a(t, [0, 1], [-10, 5]),
    S = a(t, [0, 0.5, 1], [-50, 0, -30]),
    z = a(t, [0, 0.5, 1], [-50, 0, -30]);
  k(c, "change", (o) => {
    o > 0.05 && !g && (f(!0), p.start("visible"));
  });
  const F = {
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
    C = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 100, delay: 0.2 },
      },
    };
  return e.jsxs(i.div, {
    ref: n,
    className:
      "flex flex-col items-start lg:items-center max-w-[500px] xl:max-w-[618px] mx-auto pt-[80px] lg:pt-[120px] xl:pt-[260px] pb-[120px] lg:pb-[200px] xl:pb-[240px] relative px-[15px] sm:px-[20px] md:px-0",
    style: { perspective: 1e3 },
    initial: "hidden",
    animate: p,
    variants: F,
    children: [
      e.jsx("div", {
        className:
          "absolute top-[-178px] left-[-210%] w-[695px] h-[494px] bg-[#4DFF17] blur-[150px] opacity-75",
      }),
      e.jsx("div", {
        className:
          "absolute top-[150px] left-[10%] w-[347px] h-[321px] bg-gradient-to-b from-[#2E990E] to-[#17ECFF] blur-[180px] opacity-60",
      }),
      e.jsxs(i.div, {
        ref: x,
        className:
          "lg:absolute top-[25px] lg:left-[-91%] xl:left-[-115%] lg:w-[429.35px] lg:h-[570px] xl:w-[666px] xl:h-[882px] mb-[48px] lg:mb-[0px]",
        style: { y: h, rotateY: E, z: S, transformStyle: "preserve-3d" },
        initial: { x: -200, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { type: "spring", damping: 15, stiffness: 80, delay: 0.2 },
        children: [
          e.jsx("div", {
            className:
              "absolute top-[25px] left-[276px] w-[347px] h-[321px] bg-gradient-to-b from-[#2E990E] to-[#17ECFF] blur-[150px]",
          }),
          e.jsx(r, {
            className: "relative z-10 hidden lg:block",
            url: "images/Built/1.png",
            alt: "picture",
          }),
          e.jsx(r, {
            className: "relative z-10 block lg:hidden",
            url: "images/Built/1-m.png",
            alt: "picture",
          }),
        ],
      }),
      e.jsx(i.div, {
        ref: m,
        style: {
          scale: v,
          opacity: w,
          y: j,
          transformStyle: "preserve-3d",
          z: 100,
        },
        className: "w-full max-w-[1800px] mx-auto",
        children: e.jsx(i.div, {
          variants: C,
          className:
            "w-full aspect-video mx-auto px-[15px] sm:px-[15px] lg:px-[0px]",
          children: e.jsx("iframe", {
            src: "https://player.vimeo.com/video/1105495174?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0",
            width: "100%",
            height: "100%",
            frameBorder: "0",
            allow:
              "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            title: "Deep Snitch AI IS LIVE",
            className: "rounded-lg shadow-lg",
          }),
        }),
      }),
      e.jsxs(i.div, {
        ref: d,
        className:
          "hidden lg:flex absolute top-[25px] right-[-90%] xl:right-[-115%] w-[429.35px] xl:w-[666px]",
        style: {
          y: b,
          rotateY: R,
          filter: "drop-shadow(0px 10px 30px rgba(77, 255, 23, 0.4))",
          z,
          transformStyle: "preserve-3d",
        },
        initial: { x: 200, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { type: "spring", damping: 15, stiffness: 80, delay: 0.4 },
        children: [
          e.jsx("div", {
            className:
              "absolute top-[25px] left-[276px] w-[347px] h-[321px] bg-gradient-to-b from-[#2E990E] to-[#17ECFF] blur-[150px]",
          }),
          e.jsx(r, {
            className: "relative z-10",
            url: "images/Built/2.png",
            alt: "picture",
          }),
        ],
      }),
      e.jsxs(i.div, {
        ref: u,
        className:
          "lg:absolute z-20 top-[75%] xl:top-[70%] right-[-58%] xl:right-[-90%] w-full lg:w-[320px] h-[232px] xl:w-[480px] xl:h-[322px] mx-auto mt-[128px] lg:mt-0",
        style: {
          scale: I,
          rotate: N,
          filter: "drop-shadow(0px 10px 30px rgba(77, 255, 23, 0.4))",
          transformStyle: "preserve-3d",
        },
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { type: "spring", damping: 12, stiffness: 60, delay: 0.6 },
        children: [
          e.jsx(r, {
            className: "rounded-[40px] w-full h-full object-cover",
            url: "images/Built/drone.png",
            alt: "picture",
          }),
          e.jsx(i.div, {
            className:
              "absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full opacity-20",
            animate: s
              ? { y: [0, 10, 0], scale: [1, 1.2, 1], rotate: [0, 180, 360] }
              : { y: 0, scale: 1, rotate: 0 },
            transition: {
              duration: 10,
              repeat: s ? 1 / 0 : 0,
              ease: "easeInOut",
            },
          }),
          e.jsx(i.div, {
            className:
              "absolute -bottom-6 -right-6 w-12 h-12 bg-cyan-400 rounded-full opacity-20",
            animate: s
              ? { y: [0, -15, 0], scale: [1, 1.3, 1], rotate: [0, -180, -360] }
              : { y: 0, scale: 1, rotate: 0 },
            transition: {
              duration: 12,
              repeat: s ? 1 / 0 : 0,
              ease: "easeInOut",
            },
          }),
        ],
      }),
      e.jsx(i.div, {
        className:
          "absolute w-16 h-16 bg-green-500 rounded-full opacity-0 hidden lg:block",
        style: { top: "15%", left: "10%", z: 5 },
        animate: s
          ? { opacity: [0, 0.2, 0], y: [-20, 20], scale: [0.8, 1.2, 0.8] }
          : { opacity: 0, y: 0, scale: 1 },
        transition: {
          duration: 10,
          repeat: s ? 1 / 0 : 0,
          repeatType: "reverse",
        },
      }),
      e.jsx(i.div, {
        className:
          "absolute w-12 h-12 bg-blue-400 rounded-full opacity-0 hidden lg:block",
        style: { bottom: "20%", right: "5%", z: 5 },
        animate: s
          ? { opacity: [0, 0.3, 0], y: [20, -20], scale: [0.8, 1.1, 0.8] }
          : { opacity: 0, y: 0, scale: 1 },
        transition: {
          duration: 8,
          repeat: s ? 1 / 0 : 0,
          repeatType: "reverse",
          delay: 1,
        },
      }),
    ],
  });
};
export { K as default };
