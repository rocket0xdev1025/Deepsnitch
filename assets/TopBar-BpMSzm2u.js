import { j as e, S as r } from "./index-BN8Hac8J.js";
import { r as i } from "./wallet-libs-C4iBya-7.js";
import { u as p } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
const f = `
  @keyframes typewriter {
    from { width: 0; }
    to { width: 160px; }
  }
  
  @keyframes blink {
    0%, 100% { border-color: transparent; }
    50% { border-color: #d6fc70; }
  }

  /* Background animation */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes scanline {
    0% { 
      transform: translateY(0); 
    }
    100% { 
      transform: translateY(44px); 
    }
  }
  
  @keyframes glow {
    0% { opacity: 0.3; }
    50% { opacity: 0.8; }
    100% { opacity: 0.3; }
  }
  
  .animated-bg {
    background: linear-gradient(270deg, #2D7457, #1c503a, #3a8b6a);
    background-size: 600% 100%;
    animation: gradientShift 12s ease infinite;
    position: relative;
    overflow: hidden;
  }
  
  /* Prominent scanlines */
  .animated-bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(0, 0, 0, 0.15) 2px,
      transparent 2px,
      transparent 6px
    );
    pointer-events: none;
    animation: scanline 8s linear infinite;
    opacity: 0.9;
    z-index: 1;
  }
  
  /* Digital circuit pattern */
  .animated-bg::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 50% 50%, rgba(214, 252, 112, 0.15) 0%, rgba(0, 0, 0, 0) 70%),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23d6fc70' stroke-width='0.5' stroke-opacity='0.1' fill='none'/%3E%3C/svg%3E");
    background-size: 100% 100%, 40px 40px;
    pointer-events: none;
    z-index: 2;
    opacity: 0.6;
    animation: glow 5s ease-in-out infinite;
  }
  
  /* Add subtle highlight streaks */
  .animated-bg .highlight-streak {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
    animation: streak 12s ease-in-out infinite;
    z-index: 3;
  }
  
  @keyframes streak {
    0% { left: -100%; }
    30%, 100% { left: 200%; }
  }
  
  .typewriter-container {
    position: relative;
    display: inline-block;
    width: auto;
    height: 24px; /* Match text height */
    overflow: hidden;
    margin-right: 10px; /* Add small margin before divider */
  }
  
  .typewriter-placeholder {
    visibility: hidden;
    white-space: nowrap;
    display: block;
    height: 24px; /* Fixed height */
    line-height: 24px; /* Match height */
  }
  
  .typewriter {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px; /* Fixed height */
    line-height: 24px; /* Match height */
    overflow: hidden;
    white-space: nowrap;
    animation: 
      typewriter 2s steps(16) 0.5s forwards;
    width: 0;
    max-width: 160px;
  }
  
  /* Dot blinking/pulsing animation */
  @keyframes dotPulse {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.4); opacity: 1; box-shadow: 0 0 8px rgba(214, 252, 112, 0.8); }
    100% { transform: scale(1); opacity: 0.4; }
  }
  
  .pulse-dot {
    animation: dotPulse 1.5s ease-in-out infinite;
  }
  
  /* Simple glitch effect that doesn't hide the text */
  @keyframes glitch-animation {
    0%, 85%, 100% {
      text-shadow: 
        0.05em 0 0 rgba(255,0,0,0.75),
        -0.05em -0.025em 0 rgba(0,255,0,0.75),
        -0.025em 0.05em 0 rgba(0,0,255,0.75);
    }
    5% {
      text-shadow: 
        -0.05em -0.025em 0 rgba(255,0,0,0.75),
        0.025em 0.025em 0 rgba(0,255,0,0.75),
        -0.05em -0.05em 0 rgba(0,0,255,0.75);
    }
    10% {
      text-shadow: 
        0.025em 0.05em 0 rgba(255,0,0,0.75),
        0.05em 0 0 rgba(0,255,0,0.75),
        0 -0.05em 0 rgba(0,0,255,0.75);
    }
    15% {
      text-shadow: 
        -0.025em 0 0 rgba(255,0,0,0.75),
        -0.025em -0.025em 0 rgba(0,255,0,0.75),
        -0.025em -0.05em 0 rgba(0,0,255,0.75);
    }
  }
  
  /* Simplified glitch effect */
  .glitch-text {
    animation: glitch-animation 3s ease-in-out infinite;
  }

  /* Add a subtle hue shift on hover */
  .social-icon:hover {
    filter: hue-rotate(60deg) brightness(1.2);
    transition: filter 0.3s ease;
  }

`,
  a = i.memo(() =>
    e.jsxs("div", {
      className: "typewriter-container",
      children: [
        e.jsx("span", {
          className:
            "font-VT323 text-transparent text-xl tracking-wide uppercase typewriter-placeholder",
          children: "DEEPSNITCH IS LIVE",
        }),
        e.jsx("span", {
          className:
            "font-VT323 text-[#d6fc70] text-xl tracking-wide uppercase typewriter",
          children: "DEEPSNITCH IS LIVE",
        }),
      ],
    })
  ),
  o = i.memo(() =>
    e.jsx("div", {
      className:
        "w-2 h-2 bg-[#d6fc70] rounded-full pulse-dot mr-3 flex-shrink-0",
    })
  ),
  c = ({ className: t }) =>
    e.jsx("svg", {
      width: "22px",
      height: "22px",
      viewBox: "0 0 24 24",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      className: t,
      children: e.jsx("path", {
        d: "M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174",
      }),
    }),
  b = i.memo(() =>
    e.jsxs("div", {
      className: "flex items-center gap-3",
      children: [
        e.jsx("a", {
          href: "https://t.me/AI_Deepsnitch",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "opacity-60 hover:opacity-100 transition-opacity",
          children: e.jsx(r, {
            className: "w-[22px] h-[22px] text-white social-icon",
            name: "telegram",
          }),
        }),
        e.jsx("a", {
          href: "https://x.com/AI_Deepsnitch",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "opacity-60 hover:opacity-100 transition-opacity",
          children: e.jsx(r, {
            className: "w-[22px] h-[22px] text-white social-icon",
            name: "x",
          }),
        }),
        
      ],
    })
  ),
  u = i.memo(() =>
    e.jsxs("div", {
      className: "flex items-center gap-2",
      children: [
        e.jsx("a", {
          href: "https://t.me/AI_Deepsnitch",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "opacity-60 hover:opacity-100 transition-opacity",
          children: e.jsx(r, {
            className: "w-[20px] h-[20px] text-white social-icon",
            name: "telegram",
          }),
        }),
        e.jsx("a", {
          href: "https://x.com/AI_Deepsnitch",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "opacity-60 hover:opacity-100 transition-opacity",
          children: e.jsx(r, {
            className: "w-[20px] h-[20px] text-white social-icon",
            name: "x",
          }),
        }),
      ],
    })
  ),
  w = i.memo(({ presaleData: t }) => {
    const { t: n } = p(),
      l = i.useMemo(
        () =>
          !t || !t.raisedAmount
            ? "0.00"
            : t.raisedAmount.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
        [t]
      ),
      d = i.useMemo(
        () =>
          !t || !t.currentStageInfo
            ? "loading..."
            : t.currentStageInfo.currentStageTreshold.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
        [t]
      ),
      m = i.useMemo(
        () =>
          !t || !t.currentPrice
            ? "loading..."
            : t.currentPrice.toLocaleString(void 0, {
                minimumFractionDigits: 5,
                maximumFractionDigits: 5,
              }),
        [t]
      ),
      h = i.useMemo(() => {
        var s;
        if (!t) return "loading...";
        const x =
            ((s = t == null ? void 0 : t.currentStageInfo) == null
              ? void 0
              : s.currentStage) ?? 1,
          g = Array.isArray(t == null ? void 0 : t.stages)
            ? t.stages.length
            : 15;
        return `${x}/${g}`;
      }, [t]);
    
  }),
  F = i.memo(({ presaleData: t }) =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("style", { children: f }),
        e.jsxs("div", {
          className:
            "hidden lg:block fixed top-0 w-full animated-bg border-b border-[#d6fc70]/10 z-[9]",
          children: [
            e.jsx("div", { className: "highlight-streak" }),
            e.jsxs("div", {
              className:
                "container mx-auto flex justify-between items-center h-[44px] px-6 relative z-10",
              children: [
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center",
                      children: [e.jsx(o, {}), e.jsx(a, {})],
                    }),
                    e.jsx("span", {
                      className: "text-white/20 font-VT323 text-base mx-3",
                      children: "|",
                    }),
                    e.jsx(w, { presaleData: t }),
                  ],
                }),
                e.jsx(b, {}),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "hidden md:block lg:hidden fixed top-0 w-full animated-bg border-b border-[#d6fc70]/10 z-[9]",
          children: [
            e.jsx("div", { className: "highlight-streak" }),
            e.jsxs("div", {
              className:
                "px-4 flex justify-between items-center h-[44px] relative z-10",
              children: [
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [e.jsx(o, {}), e.jsx(a, {})],
                }),
                e.jsx(u, {}),
              ],
            }),
          ],
        }),
      ],
    })
  );
export { F as default };
