import { j as i } from "./index-BN8Hac8J.js";
import { r } from "./wallet-libs-C4iBya-7.js";
import { motion as v } from "./animation-libs-DQqW_Ij_.js";
const b = [
    { x: [-8, 8, -8], y: [-6, 6, -6] },
    { x: [-6, 10, -6], y: [-8, 4, -8] },
    { x: [-10, 6, -10], y: [-5, 8, -5] },
    { x: [-7, 9, -7], y: [-9, 7, -9] },
    { x: [-9, 5, -9], y: [-7, 9, -7] },
  ],
  M = (e) =>
    Array.from({ length: e }, (n, a) => ({
      id: `particle-${a}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.7 ? "#D6FC70" : "#70FCDE",
      duration: Math.random() * 15 + 45,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.4 + 0.15,
      pathIndex: Math.floor(Math.random() * b.length),
    })),
  w = (e, n) =>
    Array.from({ length: e }, (a, t) => ({
      id: `${n ? "h" : "v"}-line-${t}`,
      position: t * (100 / e) + (Math.random() * 2 - 1),
      opacity: Math.random() * 0.06 + 0.02,
      size: Math.random() > 0.85 ? 1 : 0.5,
    })),
  L = r.memo(() =>
    i.jsxs("div", {
      className:
        "fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]",
      children: [
        i.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-[#0a1a15] via-[#0c1611] to-[#080a08]",
        }),
        i.jsx("div", {
          className:
            "absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full blur-[150px] bg-[#D6FC7020] opacity-30",
        }),
      ],
    })
  ),
  j = r.memo(({ horizontalLines: e, verticalLines: n, isVisible: a }) =>
    a
      ? i.jsxs("div", {
          className: "absolute inset-0 transform-gpu will-change-auto",
          children: [
            i.jsx("div", {
              className: "absolute inset-0 transform-gpu",
              children: e.map((t) =>
                i.jsx(
                  "div",
                  {
                    className: "absolute w-full transform-gpu",
                    style: {
                      height: `${t.size}px`,
                      top: `${t.position}%`,
                      backgroundColor: `rgba(214, 252, 112, ${t.opacity})`,
                      contain: "layout paint style",
                    },
                  },
                  t.id
                )
              ),
            }),
            i.jsx("div", {
              className: "absolute inset-0 transform-gpu",
              children: n.map((t) =>
                i.jsx(
                  "div",
                  {
                    className: "absolute h-full transform-gpu",
                    style: {
                      width: `${t.size}px`,
                      left: `${t.position}%`,
                      backgroundColor: `rgba(214, 252, 112, ${t.opacity})`,
                      contain: "layout paint style",
                    },
                  },
                  t.id
                )
              ),
            }),
          ],
        })
      : null
  ),
  P = r.memo(({ particle: e, isVisible: n, isTabActive: a }) => {
    if (!n || !a) return null;
    const t = b[e.pathIndex];
    return i.jsx(v.div, {
      className: "absolute rounded-full transform-gpu will-change-transform",
      style: {
        left: `${e.x}%`,
        top: `${e.y}%`,
        width: `${e.size}px`,
        height: `${e.size}px`,
        backgroundColor: e.color,
        opacity: e.opacity,
        contain: "layout paint style",
      },
      animate: { x: t.x, y: t.y },
      transition: {
        duration: e.duration,
        ease: "linear",
        times: [0, 0.5, 1],
        repeat: 1 / 0,
        delay: e.delay,
      },
    });
  }),
  T = r.memo(({ isVisible: e, isTabActive: n }) =>
    e
      ? i.jsx(v.div, {
          className:
            "absolute w-full h-[1px] bg-[#D6FC7040] transform-gpu will-change-transform",
          animate: { top: ["120%", "-20%"] },
          transition: {
            duration: 25,
            ease: "linear",
            repeat: 1 / 0,
            repeatType: "loop",
          },
          style: { contain: "layout paint style" },
        })
      : null
  ),
  E = (e, n = {}) => {
    const [a, t] = r.useState(!0);
    return (
      r.useEffect(() => {
        const h = new IntersectionObserver(([m]) => t(m.isIntersecting), {
          threshold: 0,
          ...n,
        });
        return e.current && h.observe(e.current), () => h.disconnect();
      }, [e, n.threshold]),
      a
    );
  },
  F = () => {
    const [e, n] = r.useState("high");
    return (
      r.useEffect(() => {
        (() => {
          const t =
            (typeof navigator.deviceMemory < "u" &&
              navigator.deviceMemory < 4) ||
            (typeof navigator.hardwareConcurrency < "u" &&
              navigator.hardwareConcurrency < 4) ||
            window.innerWidth < 768;
          n(t ? "low" : "high");
        })();
      }, []),
      e
    );
  },
  N = () => {
    const [e, n] = r.useState(!0);
    return (
      r.useEffect(() => {
        const a = () => {
            n(document.visibilityState === "visible");
          },
          t = () => {
            n(document.hasFocus());
          };
        return (
          document.addEventListener("visibilitychange", a),
          window.addEventListener("focus", t),
          window.addEventListener("blur", t),
          () => {
            document.removeEventListener("visibilitychange", a),
              window.removeEventListener("focus", t),
              window.removeEventListener("blur", t);
          }
        );
      }, []),
      e
    );
  },
  z = () => {
    const e = r.useRef(null),
      [n, a] = r.useState(!1),
      [t, h] = r.useState(!1),
      [m, S] = r.useState(!1),
      d = E(e),
      y = F(),
      f = N();
    r.useEffect(() => {
      const l = () => {
        const g =
          window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        a(g);
        const $ =
          (typeof navigator.deviceMemory < "u" && navigator.deviceMemory < 4) ||
          (typeof navigator.hardwareConcurrency < "u" &&
            navigator.hardwareConcurrency < 4) ||
          g ||
          window.innerWidth < 768;
        h($);
        const C = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        S(C);
      };
      l();
      let p;
      const u = () => {
        clearTimeout(p), (p = setTimeout(l, 200));
      };
      return (
        window.addEventListener("resize", u),
        () => {
          window.removeEventListener("resize", u), clearTimeout(p);
        }
      );
    }, []);
    const c = r.useMemo(() => {
        let l, p, u, g;
        if (m)
          return {
            particleCount: 2,
            gridLineCount: 2,
            showGrid: !1,
            showScanning: !1,
            showGlow: !0,
          };
        switch (y) {
          case "low":
            (l = t ? 2 : 3), (p = 2), (u = !n);
            break;
          case "medium":
            (l = t ? 3 : n ? 4 : 5), (p = n ? 3 : 4), (u = !0);
            break;
          case "high":
          default:
            (l = t ? 4 : n ? 5 : 8), (p = n ? 4 : 5), (u = !0);
            break;
        }
        return {
          particleCount: l,
          gridLineCount: p,
          showGrid: u,
          showScanning: g,
          showGlow: !0,
        };
      }, [n, t, y, m]),
      I = r.useMemo(() => M(c.particleCount), [c.particleCount]),
      k = r.useMemo(() => w(c.gridLineCount, !0), [c.gridLineCount]),
      D = r.useMemo(() => w(c.gridLineCount, !1), [c.gridLineCount]),
      x = r.useMemo(
        () =>
          c.showGlow
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx("div", {
                    className:
                      "absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full blur-[150px] bg-[#D6FC7020] opacity-30 transform-gpu",
                  }),
                  i.jsx("div", {
                    className:
                      "absolute bottom-1/4 right-1/3 w-1/3 h-1/3 rounded-full blur-[120px] bg-[#70FCDE20] opacity-20 transform-gpu",
                  }),
                ],
              })
            : null,
        [c.showGlow]
      );
    return (!d && y === "low") || (t && !d)
      ? i.jsx(L, {})
      : i.jsxs("div", {
          ref: e,
          className:
            "fixed inset-0 w-full h-full overflow-hidden pointer-events-none",
          style: { zIndex: -1 },
          children: [
            i.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-[#0a1a15] via-[#0c1611] to-[#080a08] transform-gpu",
            }),
            i.jsx(j, {
              horizontalLines: k,
              verticalLines: D,
              isVisible: c.showGrid && d,
            }),
            d &&
              f &&
              I.map((l) =>
                i.jsx(P, { particle: l, isVisible: d, isTabActive: f }, l.id)
              ),
            x,
            i.jsx(T, { isVisible: c.showScanning && d, isTabActive: f }),
            i.jsx("style", {
              children: `
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
          contain: layout paint style;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .will-change-auto {
          will-change: auto;
        }
        
        /* Optimize animations for better performance */
        @media (prefers-reduced-motion: reduce) {
          .transform-gpu {
            animation: none !important;
            transition: none !important;
          }
        }
      `,
            }),
          ],
        });
  },
  R = r.memo(z, (e, n) => !0),
  o = "https://deepsnitch.ai",
  s = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deep Snitch AI",
    alternateName: "DSAI",
    url: o,
    logo: `${o}/seo/logo.png`,
    sameAs: [
      "https://twitter.com/AI_Deepsnitch",
      "https://t.me/AI_Deepsnitch",
      "https://medium.com/@DeepSnitchAI",
    ],
    description:
      "AI-powered crypto intelligence platform that protects investors from scams, tracks whale movements, and provides real-time market insights.",
  },
  O = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deep Snitch AI",
    url: o,
    potentialAction: {
      "@type": "SearchAction",
      target: `${o}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  A = {
    home: {
      title:
        "DeepSnitch AI ($DSNT): AI Agents for On-Chain Crypto Alpha",
      description:
        "Be early to DeepSnitch AI. $DSNT token is live – access real-time market intelligence from autonomous AI agents.",
      canonical: o,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "Deep Snitch AI, DSAI token, crypto AI bots, scam detection, whale tracking, presale, DeFi protection, blockchain security, crypto intelligence",
      structuredData: [
        s,
        O,
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Deep Snitch AI",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          description: "AI-powered crypto intelligence platform",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      ],
    },
    presale: {
      title: "Deep Snitch AI Presale | Now Live",
      description:
        "The moment you have all been waiting for, secure your spot for the full power of our AI bots before everyone else. Join the best crypto presale to unlock full protection from rugs, fake pumps, and contract risks.",
      canonical: `${o}/#presale`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "Deep Snitch AI presale, DSAI token sale, crypto presale 2024, AI token presale, DeFi presale, blockchain presale",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Deep Snitch AI Token Presale",
          description:
            "Exclusive presale for DSAI tokens - AI-powered crypto protection platform",
          startDate: "2024-01-01T00:00:00Z",
          endDate: "2024-12-31T23:59:59Z",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          location: { "@type": "VirtualLocation", url: `${o}/#presale` },
          organizer: s,
        },
      ],
    },
    agents: {
      title: "Deep Snitch AI | Meet the AI Agents",
      description:
        "Always watching and listening to the noisy crypto market and reporting in real-time exclusively to you.",
      canonical: `${o}/#agents`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "AI agents, crypto intelligence bots, real-time market analysis, crypto protection AI, blockchain monitoring",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Deep Snitch AI Agents",
          description:
            "AI-powered agents for real-time crypto market intelligence and protection",
          category: "AI Software",
          brand: s,
        },
      ],
    },
    faq: {
      title: "Deep Snitch AI | FAQ",
      description:
        "Learn how our AI Agents protect you from rug pulls, leaky contracts, big moves, and web3 news.",
      canonical: `${o}/#faq`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "Deep Snitch AI FAQ, crypto protection questions, AI bot FAQ, DeFi safety, rug pull protection",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How does Deep Snitch AI protect against rug pulls?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our AI agents continuously monitor smart contracts, liquidity pools, and developer activities to identify potential rug pull indicators before they happen.",
              },
            },
            {
              "@type": "Question",
              name: "What is the DSAI token used for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "DSAI tokens provide access to premium AI features, staking rewards, and governance rights within the Deep Snitch AI ecosystem.",
              },
            },
          ],
        },
      ],
    },
    staking: {
      title: "Deep Snitch AI Staking | Stake $DSAI",
      description:
        "Early stakers get the alpha. Stake your $DSNT tokens to earn rewards, unlock exclusive features, and support the AI-powered crypto intel network. Secure your spot now and grow with Deep Snitch AI.",
      canonical: `${o}/staking`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "DSAI staking, crypto staking rewards, Deep Snitch AI staking, DeFi staking, AI token staking, passive income crypto",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          name: "DSAI Token Staking",
          description:
            "Stake DSAI tokens to earn rewards and access premium features",
          provider: s,
          category: "Cryptocurrency Staking",
        },
      ],
    },
    whitepaper: {
      title: "Deep Snitch AI Whitepaper | The Vision, Tech & Tokenomics",
      description:
        "Read the Deep Snitch AI whitepaper to learn about our mission, AI architecture, token utility, risk detection models, and the roadmap powering smarter crypto intelligence.",
      canonical: `${o}/whitepaper`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "Deep Snitch AI whitepaper, DSAI tokenomics, AI architecture, crypto intelligence roadmap, blockchain whitepaper",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Deep Snitch AI: Technical Whitepaper",
          description:
            "Comprehensive technical documentation for Deep Snitch AI platform",
          author: s,
          datePublished: "2024-01-01",
          inLanguage: "en-US",
        },
      ],
    },
    audit: {
      title:
        "Deep Snitch AI Audit | Security, Smart Contract Safety & Verification",
      description:
        "View the Deep Snitch AI audit reports and security assessments. Learn how we ensure safety, platform reliability, and transparency for all users and investors.",
      canonical: `${o}/audit`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "Deep Snitch AI audit, smart contract audit, security assessment, blockchain audit, crypto safety verification",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "Report",
          name: "Deep Snitch AI Security Audit Report",
          description:
            "Comprehensive security audit and smart contract verification",
          author: s,
          about: "Smart contract security and platform safety verification",
        },
      ],
    },
    blog: {
      title: "Deep Snitch AI Blog | The Snitch Feed",
      description:
        "A feed of Web3 wisdom, AI crypto hacks, rug radar alerts, and early alpha. Stay snitched in because being late is expensive.",
      canonical: `${o}/blog`,
      image: `${o}/seo/og-image.jpg`,
      keywords:
        "Deep Snitch AI blog, crypto news, Web3 wisdom, AI crypto insights, rug radar alerts, DeFi alpha, blockchain intelligence",
      structuredData: [
        s,
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Snitch Feed",
          description: "Latest insights and intelligence from the crypto world",
          url: `${o}/blog`,
          author: s,
          inLanguage: "en-US",
        },
      ],
    },
  },
  B = (e = "home") => A[e] || A.home;
export { R as P, B as g };
