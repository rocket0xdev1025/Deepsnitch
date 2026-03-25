const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Partners-pea1j36q.js",
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
      "assets/Built-Bo6l0SPZ.js",
      "assets/Link-CIaIkVx8.js",
      "assets/Agents-FkMYQa8o.js",
      "assets/swiper-react-D6YOFoP1.js",
      "assets/swiper-libs-ChlQaAX5.js",
      "assets/pagination-C4xMGJHK.js",
      "assets/css/Agents-B_l4pjL9.css",
      "assets/Promo-CCB-m5jx.js",
      "assets/FuelOptimized-BChaYp70.js",
      "assets/How-DipiwoZd.js",
      "assets/PopupHowToBuy-CxXYW6Xa.js",
      "assets/HowToBuy-BYXvux9v.js",
      "assets/Syndicate-CI7wZvFh.js",
      "assets/Faq-CBthjM23.js",
    ])
) => i.map((i) => d[i]);
import { r as t, $ as xt, R as Xe, _ as Be } from "./wallet-libs-C4iBya-7.js";
import {
  j as e,
  c as lt,
  a as vt,
  b as jt,
  d as St,
  p as ht,
  n as Ct,
  g as kt,
  u as Pt,
  e as Tt,
  L as We,
} from "./index-BN8Hac8J.js";
import {
  u as At,
  n as st,
  I as oe,
  g as Wt,
  b as Bt,
  c as $t,
  h as Lt,
  i as Rt,
  E as It,
  B as De,
  C as nt,
  j as _t,
  S as bt,
} from "./App-B3-mP0gp.js";
import Ft from "./PopupHowToBuy-CxXYW6Xa.js";
import { g as Ot, P as wt } from "./seoConfigs-BEyLWaUm.js";
import {
  A as Et,
  J as He,
  t as tt,
  P as Ue,
  L as qe,
  z as Je,
  p as Dt,
  D as rt,
} from "./crypto-libs-BTkSibId.js";
import { u as et } from "./i18n-libs-7YlS43F0.js";
import { u as Mt } from "./useBalance-Cm6QGrIt.js";
import { u as it, a as zt, b as Vt } from "./react-vendor-CKqXOJaQ.js";
import {
  motion as ye,
  AnimatePresence as yt,
} from "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const Ht = ({
    variant: o = "spinner",
    message: x = "Loading...",
    className: C = "",
    size: v = "medium",
  }) => {
    const _ = { small: "w-4 h-4", medium: "w-8 h-8", large: "w-12 h-12" },
      K = () =>
        e.jsx("div", {
          className: `animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${_[v]}`,
        }),
      te = () =>
        e.jsxs("div", {
          className: "flex space-x-1",
          children: [
            e.jsx("div", {
              className: "w-2 h-2 bg-blue-600 rounded-full animate-bounce",
            }),
            e.jsx("div", {
              className: "w-2 h-2 bg-blue-600 rounded-full animate-bounce",
              style: { animationDelay: "0.1s" },
            }),
            e.jsx("div", {
              className: "w-2 h-2 bg-blue-600 rounded-full animate-bounce",
              style: { animationDelay: "0.2s" },
            }),
          ],
        }),
      z = () =>
        e.jsxs("div", {
          className: "animate-pulse",
          children: [
            e.jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
            e.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/2" }),
          ],
        }),
      U = () => {
        switch (o) {
          case "dots":
            return te();
          case "skeleton":
            return z();
          case "spinner":
          default:
            return K();
        }
      };
    return e.jsxs("div", {
      className: `flex flex-col items-center justify-center p-4 ${C}`,
      children: [
        U(),
        x &&
          e.jsx("p", {
            className: "mt-2 text-sm text-gray-600 text-center",
            children: x,
          }),
      ],
    });
  },
  Nt = (o) =>
    o
      ? o.isTrust ||
        o._isTrustWallet ||
        o.isTrustWallet ||
        (o.constructor && o.constructor.name === "TrustWallet") ||
        (typeof window < "u" && window.trustwallet) ||
        (o.isMetaMask && o.overrideIsMetaMask === !1 && o.isTrust) ||
        (o._events && o._events.trust_wallet_connect)
      : !1,
  Ye = {
    PROVIDER_INIT_DELAY: 200,
    PRE_WARM_DELAY: 100,
    BALANCE_FETCH_DELAY: 150,
    TOKEN_BALANCE_DELAY: 150,
    TRANSACTION_DELAY: 100,
    SIGNATURE_DELAY: 150,
  },
  Ut = async (o, x = "default") => {
    if (!Nt(o)) return;
    const C = {
        provider_init: Ye.PROVIDER_INIT_DELAY,
        pre_warm: Ye.PRE_WARM_DELAY,
        balance_fetch: Ye.BALANCE_FETCH_DELAY,
        token_balance: Ye.TOKEN_BALANCE_DELAY,
        transaction: Ye.TRANSACTION_DELAY,
        signature: Ye.SIGNATURE_DELAY,
        default: 100,
      },
      v = C[x] || C.default;
    await new Promise((_) => setTimeout(_, v));
  },
  M = st;
function qt({
  referenceCurrency: o,
  presaleData: x,
  setSelectedToken: C,
  selectedToken: v,
  setFiatValue: _,
  fiatValue: K,
  cryptoAmount: te,
  setCryptoAmount: z,
  receiveAmount: U,
  setReceiveAmount: Q,
  isCreditCardMode: j,
  isSelectOpen: ee,
  setIsSelectOpen: F,
  setIsCreditCardMode: V,
  showPaymentWidget: re,
  setShowPaymentWidget: X,
  bonusDisplayInfo: Y,
}) {
  var we, g, Fe, ne, Ve;
  const { t: O } = et(),
    [le, ce] = t.useState(1),
    [me, R] = t.useState("0.00000"),
    [A, q] = t.useState({}),
    [ae, Ce] = t.useState({}),
    { isConnected: W, address: h, chainType: H } = lt(),
    [$, ke] = t.useState("ETH"),
    Ee = t.useRef(!1);
  t.useEffect(() => {}, [W, h]);
  const { caipNetwork: n, switchNetwork: Me } = vt(),
    { connection: S } = At(),
    { notifyError: ge, notifyInfo: de } = jt();
  t.useEffect(() => {
    var a;
    if ((a = n == null ? void 0 : n.name) != null && a.includes("Solana")) {
      console.log("🔧 Solana Network Detected:", {
        networkName: n.name,
        connection: !!S,
        address: h,
        isConnected: W,
        caipNetwork: n,
      });
      const s = () => {
        var r;
        console.log("🔍 Forcing Solana wallet detection..."),
          console.log("🔍 Available window objects:", {
            windowSolana: !!window.solana,
            windowPhantom: !!window.phantom,
            windowSolflare: !!window.solflare,
            windowTrustWallet: !!window.trustwallet,
            windowBackpack: !!window.backpack,
          }),
          (r = window.phantom) != null &&
            r.solana &&
            console.log("✅ Phantom Solana provider found"),
          window.solflare && console.log("✅ Solflare provider found"),
          window.trustwallet && console.log("✅ Trust Wallet provider found");
      };
      s(),
        S
          ? (console.log("✅ Solana connection is available"),
            console.log("🔍 Connection details:", {
              rpcEndpoint: S.rpcEndpoint,
              commitment: S.commitment,
            }))
          : (console.warn(
              "⚠️ No Solana connection available - trying to force initialization"
            ),
            setTimeout(() => {
              console.log("🔄 Retrying Solana connection after delay..."), s();
            }, 1e3),
            setTimeout(() => {
              console.log("🔄 Final retry for Solana connection..."), s();
            }, 3e3)),
        S && h
          ? (console.log("🧪 Testing immediate balance fetch..."),
            (async () => {
              try {
                console.log("🔍 Address validation:", {
                  address: h,
                  addressLength: h == null ? void 0 : h.length,
                  isBase58: /^[1-9A-HJ-NP-Za-km-z]+$/.test(h),
                });
                const l = new Ue(h);
                console.log("🔍 PublicKey created successfully:", l.toBase58());
                const c = await S.getBalance(l);
                console.log("🧪 Test balance result:", {
                  address: h,
                  balance: c,
                  balanceSOL: c / qe,
                });
              } catch (l) {
                console.error("🧪 Test balance error:", l),
                  console.error("🧪 Error details:", {
                    message: l.message,
                    stack: l.stack,
                  });
              }
            })())
          : (console.log("🧪 Cannot test balance - missing requirements:", {
              hasConnection: !!S,
              hasAddress: !!h,
            }),
            S ||
              setTimeout(() => {
                console.log(
                  "🔄 Retrying balance fetch after connection delay..."
                ),
                  S &&
                    h &&
                    (async () => {
                      try {
                        const l = new Ue(h),
                          c = await S.getBalance(l);
                        console.log("🔄 Retry balance result:", {
                          address: h,
                          balance: c,
                          balanceSOL: c / qe,
                        });
                      } catch (l) {
                        console.error("🔄 Retry balance error:", l);
                      }
                    })();
              }, 2e3));
    }
  }, [n, S, h, W]);
  const { walletProvider: J } = St("eip155"),
    [ve, L] = t.useState({}),
    [pe, Z] = t.useState(new Set()),
    [xe, P] = t.useState({}),
    { userTokenBalance: f } = it(),
    { refetch: Ne } = Mt({
      address: h,
      query: {
        enabled: W && !!h && H === "evm",
        staleTime: 3e4,
        cacheTime: 3e5,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
      },
    }),
    je = t.useRef(n == null ? void 0 : n.name),
    he = t.useRef(0);
  t.useEffect(() => {
    console.log(
      "currentNetworkRef updated from",
      je.current,
      "to",
      n == null ? void 0 : n.name
    ),
      (je.current = n == null ? void 0 : n.name);
  }, [n]);
  const be = t.useCallback(
    (a) => {
      var r, l, c, u;
      const s =
        J &&
        typeof J.request == "function" &&
        !J.isPhantom &&
        !J.publicKey &&
        (n == null ? void 0 : n.namespace) === "eip155";
      try {
        if (s) return new Et(J);
      } catch (m) {
        console.warn(
          "⚠️ Failed to create BrowserProvider from evmWalletProvider:",
          m
        );
      }
      try {
        const m = n == null ? void 0 : n.id;
        if (m && typeof m == "string" && m.startsWith("eip155:")) {
          const b = parseInt(m.replace("eip155:", ""), 10);
          if (!isNaN(b)) {
            const E = (r = ht) == null ? void 0 : r[b];
            if ((l = E == null ? void 0 : E.transport) != null && l.url)
              return new He(E.transport.url);
          }
        } else if (m && typeof m == "number") {
          const b = (c = ht) == null ? void 0 : c[m];
          if ((u = b == null ? void 0 : b.transport) != null && u.url)
            return new He(b.transport.url);
        }
      } catch {}
      try {
        const m = a || (n == null ? void 0 : n.name);
        if (m === "Ethereum")
          return new He(
            "https://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678"
          );
        if (m === "Sepolia")
          return new He(
            "https://still-cosmological-sanctuary.ethereum-sepolia.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678"
          );
        if (m === "BNB Smart Chain")
          return new He(
            "https://still-cosmological-sanctuary.bsc.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678"
          );
      } catch {}
    },
    [J, n]
  );
  t.useEffect(() => {
    if (!W || !n) return;
    let a = !1;
    const r = setTimeout(async () => {
      var l, c, u, m, b, E;
      try {
        if (n.name.includes("Solana"))
          if (
            (console.log("🔍 Solana balance fetch attempt:", {
              hasConnection: !!S,
              hasAddress: !!h,
              networkName: n.name,
            }),
            h)
          )
            try {
              if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(h)) {
                console.error("❌ Invalid Solana address format:", h),
                  a ||
                    (R("0.0000 SOL"),
                    q((N) => ({
                      ...N,
                      native: { balance: 0, formatted: "0.0000 SOL" },
                    })),
                    L((N) => ({
                      ...N,
                      native: { balance: 0, formatted: "0.0000 SOL" },
                    })));
                return;
              }
              let i = S;
              if (!i) {
                const N =
                  ((u =
                    (c =
                      (l = n == null ? void 0 : n.rpcUrls) == null
                        ? void 0
                        : l.default) == null
                      ? void 0
                      : c.http) == null
                    ? void 0
                    : u[0]) || "https://api.mainnet-beta.solana.com";
                console.log("🔗 [swap.jsx] Creating Solana connection to:", N),
                  (i = new tt(N, "confirmed"));
              }
              const d = new Ue(h);
              console.log("🔍 PublicKey created successfully:", d.toBase58());
              let p = null,
                k = 3;
              for (; k > 0 && p === null; )
                try {
                  (p = await i.getBalance(d)),
                    console.log(
                      `✅ Solana balance fetched (attempt ${4 - k}):`,
                      p
                    );
                  break;
                } catch (N) {
                  k--,
                    console.warn(
                      `⚠️ Balance fetch attempt ${4 - k} failed:`,
                      N
                    ),
                    k > 0 && (await new Promise((w) => setTimeout(w, 1e3)));
                }
              if (p !== null) {
                const N = (p / qe).toFixed(4);
                a ||
                  (R(`${N} SOL`),
                  q((w) => ({
                    ...w,
                    native: { balance: p / qe, formatted: `${N} SOL` },
                  })),
                  L((w) => ({
                    ...w,
                    native: { balance: p / qe, formatted: `${N} SOL` },
                  })),
                  console.log("✅ Solana balance updated in UI:", `${N} SOL`));
              } else
                throw new Error("Failed to fetch balance after all retries");
            } catch (i) {
              console.error("❌ Error fetching Solana balance:", i),
                console.error("❌ Error details:", {
                  message: i.message,
                  stack: i.stack,
                  address: h,
                  connection: !!S,
                }),
                a ||
                  (R("0.0000 SOL"),
                  q((d) => ({
                    ...d,
                    native: { balance: 0, formatted: "0.0000 SOL" },
                  })),
                  L((d) => ({
                    ...d,
                    native: { balance: 0, formatted: "0.0000 SOL" },
                  })));
            }
          else
            console.warn("⚠️ Missing Solana connection or address:", {
              connection: !!S,
              address: !!h,
              connectionDetails: S
                ? { rpcEndpoint: S.rpcEndpoint, commitment: S.commitment }
                : null,
            }),
              a || R("0.0000 SOL");
        else {
          const i = be(n == null ? void 0 : n.name);
          if (!i) return;
          const d = await i.getBalance(h);
          if (d != null) {
            const p = Number(Je(d, 18));
            if (!a) {
              const k =
                ((E =
                  (b =
                    (m = M[n == null ? void 0 : n.name]) == null
                      ? void 0
                      : m.tokens) == null
                    ? void 0
                    : b.native) == null
                  ? void 0
                  : E.label) || "ETH";
              R(`${p.toFixed(4)} ${k}`),
                q((N) => ({
                  ...N,
                  native: { balance: p, formatted: `${p.toFixed(4)} ${k}` },
                })),
                L((N) => ({
                  ...N,
                  native: { balance: p, formatted: `${p.toFixed(4)} ${k}` },
                }));
            }
          }
        }
      } catch (i) {
        console.error("❌ Error in balance fetch effect:", i), a || R("0.0000");
      }
    }, 150);
    return () => {
      (a = !0), clearTimeout(r);
    };
  }, [W, n, h, S, Ne, be]);
  const ue = t.useRef(null),
    Se = () => {
      X(!re);
    },
    I = async (a, s, r) => {
      if (Pe(a)) {
        const c = A[r];
        if (!c || c.balance === 0) {
          ge("Insufficient balance for this token");
          return;
        }
      }
      X(!1);
      const l = { ...s, targetNetwork: a };
      if ((C(l), a === "CARD")) V(!0);
      else if ((V(!1), (a === "ETH" || a === "BNB") && (ke(a), !Pe(a)))) {
        const c = n == null ? void 0 : n.name;
        let u = null;
        if (
          (a === "ETH"
            ? (u = "Ethereum")
            : a === "BNB" && (u = "BNB Smart Chain"),
          u && c !== u)
        ) {
          console.log(`🔄 Switching network from ${c} to ${u}`),
            de(`Switching to ${u}...`);
          const m = Ct.find((b) => b.name === u);
          if (m)
            try {
              await Me(m),
                await new Promise((b) => setTimeout(b, 1e3)),
                console.log(`✅ Network switch requested for ${u}`);
            } catch (b) {
              console.error("❌ Network switch failed:", b),
                ge(
                  `Network switch failed. Please switch to ${u} manually in your wallet.`
                );
            }
        }
      }
    };
  t.useEffect(() => {
    const a = (s) => {
      ue.current && !ue.current.contains(s.target) && F(!1);
    };
    return (
      ee && document.addEventListener("mousedown", a),
      () => {
        document.removeEventListener("mousedown", a);
      }
    );
  }, [ee, F]),
    t.useEffect(() => {
      var l, c, u, m, b, E, i, d, p, k, N;
      if (j) {
        const w = M["Credit Card"];
        (l = w == null ? void 0 : w.tokens) != null &&
          l.native &&
          C(w.tokens.native);
        return;
      }
      if (!n) {
        if (H === "evm") {
          const w = M.Ethereum;
          (c = w == null ? void 0 : w.tokens) != null &&
            c.native &&
            (C(w.tokens.native), L({}), Z(new Set()));
        } else if (H === "solana") {
          const w = M.Solana;
          (u = w == null ? void 0 : w.tokens) != null &&
            u.native &&
            (C(w.tokens.native), L({}), Z(new Set()));
        } else {
          const w = M.Ethereum;
          (m = w == null ? void 0 : w.tokens) != null &&
            m.native &&
            (C(w.tokens.native), L({}), Z(new Set()));
        }
        return;
      }
      const a =
          (b = n.name) == null ? void 0 : b.toLowerCase().includes("solana"),
        s =
          ((E = n.name) == null
            ? void 0
            : E.toLowerCase().includes("ethereum")) ||
          ((i = n.name) == null
            ? void 0
            : i.toLowerCase().includes("sepolia")) ||
          ((d = n.name) == null ? void 0 : d.toLowerCase().includes("bnb"));
      if ((H === "evm" && a) || (H === "solana" && s)) {
        if (
          (console.log("⚠️ Network mismatch detected:", {
            chainType: H,
            caipNetwork: n.name,
            "Prioritizing chainType": H,
          }),
          H === "evm")
        ) {
          const w = M.Ethereum;
          (p = w == null ? void 0 : w.tokens) != null &&
            p.native &&
            (C(w.tokens.native), L({}), Z(new Set()));
        } else if (H === "solana") {
          const w = M.Solana;
          (k = w == null ? void 0 : w.tokens) != null &&
            k.native &&
            (C(w.tokens.native), L({}), Z(new Set()));
        }
        return;
      }
      const r = M[n.name];
      (N = r == null ? void 0 : r.tokens) != null &&
        N.native &&
        (C(r.tokens.native),
        L({}),
        Z(new Set()),
        console.log(
          "Network changed to:",
          n.name,
          "Reset tokenBalances and loadedTokens"
        ));
    }, [n, H, j, C]);
  const Le = t.useCallback(
      async (a) => {
        var s;
        if (!(!o || !a || j))
          try {
            const r = (s = M[a]) == null ? void 0 : s.tokens;
            if (!r) {
              console.warn(`No tokens found for network: ${a}`);
              return;
            }
            const l = [],
              c = Object.entries(r);
            for (const [b, E] of c)
              if (E.address == null) {
                const i = M[a].cmc_id;
                l.push(
                  fetch(`https://b4ck.my/cmc-api?id=${i}&convert=${o}`)
                    .then((d) => d.json())
                    .then((d) => ({ tokenKey: b, price: d.price }))
                    .catch(() => ({ tokenKey: b, price: 0 }))
                );
              } else
                E.cmc_id
                  ? l.push(
                      fetch(
                        `https://b4ck.my/cmc-api?id=${E.cmc_id}&convert=${o}`
                      )
                        .then((i) => i.json())
                        .then((i) => ({ tokenKey: b, price: i.price }))
                        .catch(() => ({ tokenKey: b, price: 0 }))
                    )
                  : l.push(Promise.resolve({ tokenKey: b, price: 0 }));
            const u = await Promise.all(l),
              m = {};
            u.forEach(({ tokenKey: b, price: E }) => {
              m[b] = E;
            }),
              Ce(m);
          } catch {}
      },
      [o, j]
    ),
    $e = t.useCallback(
      async (a, s, r) => {
        var l, c, u, m, b, E;
        try {
          switch (a) {
            case "Ethereum":
            case "BNB Smart Chain":
            case "Sepolia":
            case "Custom Network": {
              if (!h)
                return {
                  tokenKey: s,
                  balance: 0,
                  formatted: `0.00000 ${r.label}`,
                };
              let i;
              try {
                if (((i = be(a)), !i)) throw new Error("No RPC provider");
                const d = await i.getBalance(h),
                  p = Number(Je(d, 18)),
                  k =
                    ((u =
                      (c = (l = M[a]) == null ? void 0 : l.tokens) == null
                        ? void 0
                        : c.native) == null
                      ? void 0
                      : u.label) || "ETH";
                return {
                  tokenKey: s,
                  balance: p,
                  formatted: `${p.toFixed(5)} ${k}`,
                };
              } catch (d) {
                return {
                  tokenKey: s,
                  balance: 0,
                  formatted: `0.00000 ${r.label}`,
                };
              }
            }
            case "Solana":
            case "Solana Devnet": {
              if (!h) throw new Error("missing address");
              if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(h))
                throw new Error(`Invalid Solana address format: ${h}`);
              let i = S;
              if (!i) {
                const w =
                  ((E =
                    (b =
                      (m = n == null ? void 0 : n.rpcUrls) == null
                        ? void 0
                        : m.default) == null
                      ? void 0
                      : b.http) == null
                    ? void 0
                    : E[0]) || "https://api.mainnet-beta.solana.com";
                console.log(
                  "🔗 [fetchNativeBalance] Creating Solana connection to:",
                  w
                ),
                  (i = new tt(w, "confirmed"));
              }
              const d = new Ue(h);
              let p = null,
                k = 3;
              for (; k > 0 && p === null; )
                try {
                  (p = await i.getBalance(d)),
                    console.log(
                      `✅ Solana balance fetched for ${s} (attempt ${4 - k}):`,
                      p
                    );
                  break;
                } catch (w) {
                  k--,
                    console.warn(
                      `⚠️ Balance fetch attempt ${4 - k} failed for ${s}:`,
                      w
                    ),
                    k > 0 && (await new Promise((Te) => setTimeout(Te, 1e3)));
                }
              if (p == null)
                throw new Error(
                  `Failed to fetch Solana balance for ${s} after all retries`
                );
              const N = p / qe;
              return {
                tokenKey: s,
                balance: N,
                formatted: `${N.toFixed(5)} ${r.label}`,
              };
            }
            default:
              throw new Error(`Unsupported network: ${a}`);
          }
        } catch {
          return { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` };
        }
      },
      [
        h,
        S,
        be,
        (g =
          (we = n == null ? void 0 : n.rpcUrls) == null
            ? void 0
            : we.default) == null
          ? void 0
          : g.http,
      ]
    ),
    Re = t.useCallback(
      async (a, s, r) => {
        var l, c, u, m;
        console.log(
          `fetchTokenBalance called for ${s} (${r.label}) on ${a}`,
          r
        );
        try {
          switch (a) {
            case "Ethereum":
            case "BNB Smart Chain":
            case "Sepolia":
            case "Custom Network": {
              if (!r.address)
                return (
                  console.log(
                    `No address for token ${s}, returning zero balance`
                  ),
                  { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` }
                );
              try {
                const b = be(a);
                if (!b)
                  throw (
                    (console.error(`No available EVM provider for ${a}`),
                    new Error("No available EVM provider"))
                  );
                console.log(
                  `Fetching balance for ${s} at address ${r.address}`
                ),
                  Nt(J) && (await Ut(J, "token_balance"));
                const E = new rt(r.address, xt, b);
                let i = await E.balanceOf(h),
                  d;
                try {
                  d = await E.decimals();
                } catch {
                  d = 18;
                }
                const p = Number(Je(i, d));
                return (
                  console.log(`Successfully fetched balance for ${s}: ${p}`),
                  {
                    tokenKey: s,
                    balance: p,
                    formatted: `${p.toFixed(5)} ${r.label}`,
                  }
                );
              } catch (b) {
                return (
                  console.error(`Error fetching balance for ${s}:`, b),
                  { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` }
                );
              }
            }
            case "Solana":
            case "Solana Devnet": {
              if (!h || !r.address)
                return {
                  tokenKey: s,
                  balance: 0,
                  formatted: `0.00000 ${r.label}`,
                };
              try {
                let b = S;
                if (!b) {
                  const k =
                    ((u =
                      (c =
                        (l = n == null ? void 0 : n.rpcUrls) == null
                          ? void 0
                          : l.default) == null
                        ? void 0
                        : c.http) == null
                      ? void 0
                      : u[0]) || "https://api.mainnet-beta.solana.com";
                  console.log(
                    `🔗 Creating Solana connection for ${s} balance fetch:`,
                    k
                  ),
                    (b = new tt(k, "confirmed"));
                }
                if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(h))
                  return (
                    console.error(`Invalid Solana address format: ${h}`),
                    { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` }
                  );
                const E = new Ue(h),
                  i = new Ue(r.address);
                let d = null,
                  p = 3;
                for (; p > 0 && d === null; )
                  try {
                    (d = await b.getParsedTokenAccountsByOwner(E, {
                      programId: Dt,
                    })),
                      console.log(
                        `✅ Token accounts fetched for ${s} (attempt ${
                          4 - p
                        }):`,
                        ((m = d == null ? void 0 : d.value) == null
                          ? void 0
                          : m.length) || 0
                      );
                    break;
                  } catch (k) {
                    p--,
                      console.warn(
                        `⚠️ Token accounts fetch attempt ${
                          4 - p
                        } failed for ${s}:`,
                        k
                      ),
                      p > 0 && (await new Promise((N) => setTimeout(N, 1e3)));
                  }
                if (!(d != null && d.value))
                  return (
                    console.warn(`No token accounts found for ${s}`),
                    { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` }
                  );
                for (const { account: k } of d.value) {
                  const w = k.data.parsed.info;
                  if (w.mint === i.toBase58()) {
                    const Te = w.tokenAmount.uiAmount || 0;
                    return (
                      console.log(`✅ Token balance found for ${s}:`, Te),
                      {
                        tokenKey: s,
                        balance: Te,
                        formatted: `${Te.toFixed(5)} ${r.label}`,
                      }
                    );
                  }
                }
                return (
                  console.log(
                    `No token account found for ${s} with mint ${r.address}`
                  ),
                  { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` }
                );
              } catch (b) {
                return (
                  console.error(`Error fetching token balance for ${s}:`, b),
                  { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` }
                );
              }
            }
            default:
              throw new Error(`Unsupported network: ${a}`);
          }
        } catch {
          return { tokenKey: s, balance: 0, formatted: `0.00000 ${r.label}` };
        }
      },
      [h, S, be, J, n]
    ),
    Ae = t.useCallback(async (a, s) => {
      var r;
      if (!a || !s) return null;
      console.log(`🌐 Fetching cross-chain balances for ${a}`);
      try {
        let l = null;
        if (
          (a === "Ethereum"
            ? (l =
                "https://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678")
            : a === "BNB Smart Chain"
            ? (l =
                "https://still-cosmological-sanctuary.bsc.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678")
            : a === "Sepolia" &&
              (l =
                "https://still-cosmological-sanctuary.ethereum-sepolia.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678"),
          !l)
        )
          return console.warn(`No RPC URL configured for ${a}`), null;
        const c = new He(l),
          u = (r = M[a]) == null ? void 0 : r.tokens;
        if (!u) return null;
        const m = {},
          b = Object.entries(u).map(async ([i, d]) => {
            try {
              if (d.address == null) {
                const p = await c.getBalance(s),
                  k = Number(Je(p, 18)),
                  N = d.label;
                return {
                  key: i,
                  balance: k,
                  formatted: `${k.toFixed(5)} ${N}`,
                };
              } else {
                const p = new rt(d.address, xt, c),
                  k = await p.balanceOf(s);
                let N;
                try {
                  N = await p.decimals();
                } catch {
                  N = 18;
                }
                const w = Number(Je(k, N));
                return {
                  key: i,
                  balance: w,
                  formatted: `${w.toFixed(5)} ${d.label}`,
                };
              }
            } catch (p) {
              return (
                console.error(`Error fetching ${i} balance on ${a}:`, p),
                { key: i, balance: 0, formatted: `0.00000 ${d.label}` }
              );
            }
          });
        return (
          (await Promise.all(b)).forEach((i) => {
            i && (m[i.key] = { balance: i.balance, formatted: i.formatted });
          }),
          console.log(`✅ Cross-chain balances fetched for ${a}:`, m),
          m
        );
      } catch (l) {
        return (
          console.error(`Error fetching cross-chain balances for ${a}:`, l),
          null
        );
      }
    }, []),
    Ie = t.useCallback(
      async (a) => {
        var r;
        const s = ++he.current;
        if (
          (console.log(
            "fetchAllTokenBalances started for network:",
            a,
            "requestId:",
            s,
            "current network:",
            je.current
          ),
          !a || !W || !h || j)
        ) {
          console.log("fetchAllTokenBalances early return:", {
            networkName: a,
            isConnected: W,
            address: !!h,
            isCreditCardMode: j,
          });
          return;
        }
        try {
          const l = (r = M[a]) == null ? void 0 : r.tokens;
          if (!l) return;
          const u = Object.entries(l).filter(([i, d]) =>
            i === "native" ? !0 : !!d.address
          );
          console.log(
            "Valid tokens to process:",
            u.map(([i, d]) => ({
              key: i,
              hasAddress: !!d.address,
              address: d.address,
            }))
          );
          const m = u.map(async ([i, d]) => {
              try {
                console.log(`Processing token ${i} with address: ${d.address}`);
                const p = await ze(() =>
                  d.address == null ? $e(a, i, d) : Re(a, i, d)
                );
                return (
                  console.log(`Result for token ${i}:`, p),
                  { status: "fulfilled", tokenKey: i, ...p }
                );
              } catch (p) {
                return (
                  console.error(`Error processing token ${i}:`, p),
                  {
                    status: "rejected",
                    tokenKey: i,
                    balance: 0,
                    formatted: `0.00000 ${d.label}`,
                  }
                );
              }
            }),
            b = await Promise.all(m),
            E = {};
          b.forEach((i) => {
            var d, p, k, N, w, Te;
            i.status === "fulfilled" && i.tokenKey
              ? (E[i.tokenKey] = {
                  balance: i.balance || 0,
                  formatted:
                    i.formatted ||
                    `0.00000 ${
                      ((k =
                        (p = (d = M[a]) == null ? void 0 : d.tokens) == null
                          ? void 0
                          : p[i.tokenKey]) == null
                        ? void 0
                        : k.label) || "Token"
                    }`,
                })
              : i.status === "rejected" &&
                i.tokenKey &&
                (E[i.tokenKey] = {
                  balance: 0,
                  formatted:
                    i.formatted ||
                    `0.00000 ${
                      ((Te =
                        (w = (N = M[a]) == null ? void 0 : N.tokens) == null
                          ? void 0
                          : w[i.tokenKey]) == null
                        ? void 0
                        : Te.label) || "Token"
                    }`,
                });
          }),
            s === he.current && je.current === a
              ? (console.log(
                  "fetchAllTokenBalances updating state for network:",
                  a,
                  "balances:",
                  E
                ),
                q((i) => ({ ...i, ...E })),
                L((i) => ({ ...i, ...E })),
                Z((i) => {
                  const d = new Set(i);
                  return Object.keys(E).forEach((p) => d.add(p)), d;
                }))
              : console.log(
                  "fetchAllTokenBalances skipped update - stale request. RequestId:",
                  s,
                  "current:",
                  he.current,
                  "Network:",
                  a,
                  "current:",
                  je.current
                );
        } catch {
        } finally {
        }
      },
      [W, h, j, J, S, $e, Re]
    ),
    ze = async (a, s = 2, r = 400) => {
      let l;
      for (let c = 0; c <= s; c++)
        try {
          return await a();
        } catch (u) {
          (l = u),
            console.warn(`Attempt ${c + 1} failed:`, u),
            c < s && r > 0 && (await new Promise((m) => setTimeout(m, r)));
        }
      throw l;
    };
  t.useEffect(() => {
    if (!(n != null && n.name)) return;
    const a = j ? "Credit Card" : n.name;
    (async () => await Le(a))();
  }, [n, j, o, Le]),
    t.useEffect(() => {
      if (!(n != null && n.name) || !h) return;
      const a = j ? "Credit Card" : n.name,
        s = setTimeout(async () => {
          await Ie(a);
        }, 100);
      return () => clearTimeout(s);
    }, [n, W, h, S, j, Ie]),
    t.useEffect(() => {
      if (!W || !h || H !== "evm" || j) return;
      const s = setTimeout(async () => {
        console.log("🌐 Starting multi-chain balance fetch for EVM chains");
        const [r, l] = await Promise.all([
            Ae("Ethereum", h),
            Ae("BNB Smart Chain", h),
          ]),
          c = {};
        r && (c.Ethereum = r),
          l && (c["BNB Smart Chain"] = l),
          P(c),
          console.log("✅ Multi-chain balances updated:", c);
      }, 500);
      return () => clearTimeout(s);
    }, [W, h, H, j, Ae]),
    t.useEffect(() => {
      var r;
      if (!v || j) {
        j && R("");
        return;
      }
      const a = n == null ? void 0 : n.name;
      if (!a) return;
      const s = Object.keys(
        ((r = M[a]) == null ? void 0 : r.tokens) || {}
      ).find((l) => M[a].tokens[l].label === (v == null ? void 0 : v.label));
      s && A[s]
        ? R(A[s].formatted)
        : R(
            W
              ? s
                ? `Loading... ${(v == null ? void 0 : v.label) || "Token"}`
                : `0.00000 ${(v == null ? void 0 : v.label) || "Token"}`
              : `0.00000 ${(v == null ? void 0 : v.label) || "Token"}`
          );
    }, [A, v, W, n, j]);
  const G = t.useCallback(
    ({ e: a, customExchangeRate: s } = {}) => {
      let r = a.target.value;
      if (r === "" || /^\d*\.?\d*$/.test(r)) {
        (Ee.current = !1), z(r);
        const l = s ?? le,
          c = parseFloat(r);
        if (!isNaN(c) && c > 0) {
          const u = (l * c).toFixed(2);
          _(u);
          const m = u ? (u / x.currentPrice).toFixed(4) : "";
          Q(m);
        } else _("0.00"), Q("");
      }
    },
    [le, x.currentPrice, z, _, Q]
  );
  t.useEffect(() => {
    var l;
    if (!v) return;
    const a = j ? "Credit Card" : n == null ? void 0 : n.name,
      s = Object.keys(((l = M[a]) == null ? void 0 : l.tokens) || {}).find(
        (c) => M[a].tokens[c].label === (v == null ? void 0 : v.label)
      );
    let r = 1;
    !j && s && ae[s] && (r = ae[s]),
      ce(r),
      !j && s && A[s] ? R(A[s].formatted) : j && R(""),
      te &&
        !Ee.current &&
        G({ e: { target: { value: te } }, customExchangeRate: r });
  }, [v, ae, A, j, n == null ? void 0 : n.name, te, G]);
  const B = t.useCallback(
      (a) => {
        Ee.current = !0;
        let s = a.target.value;
        if (s === "" || /^\d*$/.test(s)) {
          const c = parseInt(s, 10);
          if (!isNaN(c) && c > 0) {
            let u = c;
            u < 1 && (u = 1), u > 1e13 && (u = 1e13), Q(u.toString());
            const m = u * x.currentPrice;
            _(m.toFixed(2));
            const b = m ? Math.floor((m / le) * 1e6) / 1e6 : "";
            z(b.toString());
          } else s === "" && (Q(""), _("0.00"), z(""));
        }
      },
      [le, x.currentPrice, Q, _, z]
    ),
    se = j ? "Credit Card" : (n == null ? void 0 : n.name) || "Ethereum",
    _e = (a, s) => {
      const r = ae[a] || 0,
        l = s * r;
      return l > 0.01 ? `$${l.toFixed(2)}` : l > 0 ? "<$0.01" : "$0.00";
    },
    Pe = (a) => {
      const s = n == null ? void 0 : n.name;
      return a === "ETH"
        ? s === "Ethereum" || s === "Sepolia"
        : a === "BNB"
        ? s === "BNB Smart Chain"
        : a === "SOL"
        ? s == null
          ? void 0
          : s.includes("Solana")
        : !1;
    };
  return e.jsxs(e.Fragment, {
    children: [
      re &&
        e.jsx("div", {
          className: "rounded-[20px] mb-[12px] relative",
          style: {
            padding: "1px",
            background:
              "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
            boxShadow: "0px 4px 32px 0px rgba(188, 251, 138, 0.2)",
            isolation: "isolate",
            border: "1px solid",
            borderColor: "rgba(167, 252, 162, 0.05)",
          },
          children: e.jsxs("div", {
            className: "rounded-[20px]",
            style: {
              background: "rgba(12, 16, 15, 1)",
              padding: "20px",
              position: "relative",
              zIndex: 1,
              transform: "translateZ(0)",
              willChange: "auto",
              overflow: "hidden",
            },
            children: [
              e.jsx("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                style: {
                  width: "229px",
                  height: "20px",
                  marginTop: "-40px",
                  background:
                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                  filter: "blur(74px)",
                  opacity: 0.8,
                },
              }),
              e.jsx("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                style: {
                  width: "229px",
                  height: "20px",
                  marginTop: "-40px",
                  background:
                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                  filter: "blur(40px)",
                  opacity: 0.4,
                },
              }),
              e.jsxs("div", {
                className:
                  "flex justify-center items-center mb-[20px] relative z-[1]",
                children: [
                  e.jsx("span", {
                    className: "font-VT323 text-24 leading-24 tracking-1",
                    style: {
                      background:
                        "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    },
                    children: O("presaleWidget.paymentWidget.title"),
                  }),
                  e.jsx("button", {
                    onClick: () => X(!1),
                    className:
                      "absolute right-0 p-2 hover:opacity-80 transition-opacity cursor-pointer",
                    style: { border: "none", background: "transparent" },
                    children: e.jsx(oe, {
                      url: "/images/exit.svg",
                      className: "w-[20px] h-[20px]",
                      alt: "Close",
                    }),
                  }),
                ],
              }),
              H === "evm" &&
                e.jsxs("div", {
                  className:
                    "flex rounded-[12px] mb-[16px] overflow-hidden relative z-[1]",
                  style: {
                    background: "rgba(53, 53, 53, 0.4)",
                    padding: "6px",
                  },
                  children: [
                    e.jsxs("button", {
                      onClick: () => ke("ETH"),
                      className:
                        "flex-1 py-[8px] px-[16px] text-14 leading-14 tracking-1 transition-all cursor-pointer border-none rounded-[8px] flex items-center justify-center gap-[4px]",
                      style: {
                        background:
                          $ === "ETH" ? "rgba(53, 53, 53, 0.8)" : "transparent",
                        color: "white",
                      },
                      children: [
                        e.jsx(oe, {
                          url: "/images/payments-logos/ethereum.svg",
                          className: "w-[24px] h-[24px]",
                          alt: "ETH",
                        }),
                        "ETH",
                      ],
                    }),
                    e.jsxs("button", {
                      onClick: () => ke("BNB"),
                      className:
                        "flex-1 py-[8px] px-[16px] text-14 leading-14 tracking-1 transition-all cursor-pointer border-none rounded-[8px] flex items-center justify-center gap-[4px]",
                      style: {
                        background:
                          $ === "BNB" ? "rgba(53, 53, 53, 0.8)" : "transparent",
                        color: "white",
                      },
                      children: [
                        e.jsx(oe, {
                          url: "/images/payments-logos/bnb.svg",
                          className: "w-[24px] h-[24px]",
                          alt: "BNB",
                        }),
                        "BNB",
                      ],
                    }),
                  ],
                }),
              e.jsx("div", {
                className: "flex flex-col gap-[12px] relative z-[1]",
                children:
                  H === "evm"
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className: "rounded-[12px]",
                            style: {
                              background: "rgba(53, 53, 53, 0.4)",
                              padding: "6px 12px",
                            },
                            children: Object.entries(
                              ((Fe =
                                M[
                                  $ === "ETH" ? "Ethereum" : "BNB Smart Chain"
                                ]) == null
                                ? void 0
                                : Fe.tokens) || {}
                            ).map(([a, s], r, l) => {
                              var i;
                              const c =
                                  $ === "ETH" ? "Ethereum" : "BNB Smart Chain",
                                u = Pe($);
                              let m = null;
                              (i = xe[c]) != null && i[a]
                                ? (m = xe[c][a])
                                : u && A[a] && (m = A[a]);
                              const E = m && m.balance > 0;
                              return e.jsxs(
                                "div",
                                {
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => E && I($, s, a),
                                      className:
                                        "w-full flex items-center justify-between py-[12px] transition-opacity border-none bg-transparent",
                                      style: {
                                        cursor: E ? "pointer" : "not-allowed",
                                        opacity: E ? 1 : 0.5,
                                      },
                                      disabled: !E,
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-[12px]",
                                          children: [
                                            e.jsx(oe, {
                                              url: s.icon,
                                              className: "w-[24px] h-[24px]",
                                              alt: s.label,
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex flex-col items-start",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "text-white text-14 leading-14 tracking-1",
                                                  children: s.label,
                                                }),
                                                m
                                                  ? e.jsxs("span", {
                                                      className:
                                                        "text-12 leading-12",
                                                      style: {
                                                        color:
                                                          "rgba(121, 121, 121, 1)",
                                                      },
                                                      children: [
                                                        "Balance: ",
                                                        m.formatted,
                                                      ],
                                                    })
                                                  : xe[c]
                                                  ? e.jsxs("span", {
                                                      className:
                                                        "text-12 leading-12",
                                                      style: {
                                                        color:
                                                          "rgba(121, 121, 121, 1)",
                                                      },
                                                      children: [
                                                        "Balance: 0.00000 ",
                                                        s.label,
                                                      ],
                                                    })
                                                  : e.jsx("span", {
                                                      className:
                                                        "text-12 leading-12",
                                                      style: {
                                                        color:
                                                          "rgba(121, 121, 121, 1)",
                                                      },
                                                      children: "Loading...",
                                                    }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx(oe, {
                                          url: "/images/arrowRight.svg",
                                          className: "w-[20px] h-[20px]",
                                          alt: "Select",
                                        }),
                                      ],
                                    }),
                                    r < l.length - 1 &&
                                      e.jsx("div", {
                                        className: "w-full h-[1px]",
                                        style: {
                                          background: "rgba(53, 53, 53, 0.4)",
                                        },
                                      }),
                                  ],
                                },
                                a
                              );
                            }),
                          }),
                          e.jsx("div", {
                            className: "rounded-[12px]",
                            style: {
                              background: "rgba(53, 53, 53, 0.4)",
                              padding: "6px 12px",
                            },
                            children: e.jsxs("button", {
                              onClick: () =>
                                I(
                                  "CARD",
                                  M["Credit Card"].tokens.native,
                                  "native"
                                ),
                              className:
                                "w-full flex items-center justify-between py-[12px] hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-[12px]",
                                  children: [
                                    e.jsx(oe, {
                                      url: "/images/payments-logos/usd.svg",
                                      className: "w-[24px] h-[24px]",
                                      alt: "Card",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-white text-14 leading-14 tracking-1",
                                      children: O(
                                        "presaleWidget.paymentWidget.payByCard"
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsx(oe, {
                                  url: "/images/arrowRight.svg",
                                  className: "w-[20px] h-[20px]",
                                  alt: "Select",
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className: "rounded-[12px]",
                            style: {
                              background: "rgba(53, 53, 53, 0.4)",
                              padding: "12px",
                            },
                            children: Object.entries(
                              ((ne = M.Solana) == null ? void 0 : ne.tokens) ||
                                {}
                            ).map(([a, s], r, l) => {
                              const c = A[a],
                                u = c && c.balance > 0;
                              return e.jsxs(
                                "div",
                                {
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => u && I("SOL", s, a),
                                      className:
                                        "w-full flex items-center justify-between py-[12px] transition-opacity border-none bg-transparent",
                                      style: {
                                        cursor: u ? "pointer" : "not-allowed",
                                        opacity: u ? 1 : 0.5,
                                      },
                                      disabled: !u,
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-[12px]",
                                          children: [
                                            e.jsx(oe, {
                                              url: s.icon,
                                              className: "w-[24px] h-[24px]",
                                              alt: s.label,
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex flex-col items-start",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "text-white text-14 leading-14 tracking-1",
                                                  children: s.label,
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-12 leading-12",
                                                  style: {
                                                    color:
                                                      "rgba(121, 121, 121, 1)",
                                                  },
                                                  children: c
                                                    ? `Balance: ${c.formatted}`
                                                    : `Balance: 0.00000 ${s.label}`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx(oe, {
                                          url: "/images/arrowRight.svg",
                                          className: "w-[20px] h-[20px]",
                                          alt: "Select",
                                        }),
                                      ],
                                    }),
                                    r < l.length - 1 &&
                                      e.jsx("div", {
                                        className: "w-full h-[1px]",
                                        style: {
                                          background: "rgba(53, 53, 53, 0.4)",
                                        },
                                      }),
                                  ],
                                },
                                a
                              );
                            }),
                          }),
                          e.jsx("div", {
                            className: "rounded-[12px]",
                            style: {
                              background: "rgba(53, 53, 53, 0.4)",
                              padding: "12px",
                            },
                            children: e.jsxs("button", {
                              onClick: () =>
                                I(
                                  "CARD",
                                  M["Credit Card"].tokens.native,
                                  "native"
                                ),
                              className:
                                "w-full flex items-center justify-between py-[12px] hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-[12px]",
                                  children: [
                                    e.jsx(oe, {
                                      url: "/images/payments-logos/usd.svg",
                                      className: "w-[24px] h-[24px]",
                                      alt: "Card",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-white text-14 leading-14 tracking-1",
                                      children: O(
                                        "presaleWidget.paymentWidget.payByCard"
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsx(oe, {
                                  url: "/images/arrowRight.svg",
                                  className: "w-[20px] h-[20px]",
                                  alt: "Select",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
              }),
            ],
          }),
        }),
      !re &&
        e.jsx("div", {
          className: "rounded-[20px] mb-[12px] relative",
          style: {
            padding: "1px",
            background:
              "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
            isolation: "isolate",
          },
          children: e.jsxs("div", {
            className: "rounded-[20px]",
            style: {
              background: "rgba(12, 16, 15, 1)",
              padding: "16px 20px",
              position: "relative",
              zIndex: 1,
              transform: "translateZ(0)",
              willChange: "auto",
            },
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  e.jsx("span", {
                    className: "text-sm",
                    style: { color: "rgba(121, 121, 121, 1)" },
                    children: O("home.youPay"),
                  }),
                  e.jsx("button", {
                    onClick: Se,
                    className:
                      "font-VT323 cursor-pointer hover:opacity-80 transition-opacity",
                    style: {
                      background:
                        "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      border: "none",
                      padding: 0,
                      fontSize: "20px",
                    },
                    children: O("presaleWidget.tokenInput.change"),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex justify-between items-center relative z-[9999]",
                children: [
                  v &&
                    e.jsxs("div", {
                      className: "flex items-center gap-[8px] flex-shrink-0",
                      children: [
                        e.jsx(oe, {
                          url: v.icon,
                          className: "w-[24px] h-[24px]",
                          alt: v.label,
                        }),
                        e.jsx("span", {
                          className:
                            "text-white font-VT323 text-24 leading-24 tracking-1",
                          children: v.label,
                        }),
                      ],
                    }),
                  ee &&
                    se &&
                    ((Ve = M[se]) == null ? void 0 : Ve.tokens) &&
                    e.jsxs("div", {
                      ref: ue,
                      className:
                        "absolute top-[calc(100%-30px)] right-0 rounded-[20px] z-[9999]",
                      style: {
                        background: "rgba(12, 16, 15, 1)",
                        minWidth: "220px",
                        border: "1px solid rgba(167, 252, 162, 0.2)",
                      },
                      children: [
                        (console.log("Rendering tokens for network:", se),
                        console.log("Available tokens:", M[se].tokens),
                        console.log("Current tokenBalances:", ve),
                        null),
                        Object.entries(M[se].tokens).map(([a, s]) => {
                          const r = ve[a];
                          console.log(`Token ${a} (${s.label}):`, r);
                          const l = W && (r == null ? void 0 : r.balance) > 0;
                          return e.jsxs(
                            "div",
                            {
                              className: `flex items-center justify-between text-18 leading-[18px] letter-spacing-1 p-[12px] rounded-lg ${
                                l
                                  ? "text-white hover:bg-white/10 cursor-pointer"
                                  : "text-white/40 cursor-not-allowed opacity-50"
                              }`,
                              onClick: () => {
                                l && (C(s), F(!1));
                              },
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-[12px]",
                                  children: [
                                    e.jsx(oe, {
                                      url: s.icon,
                                      className: "w-[24px] h-[24px]",
                                      alt: s.label,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-white text-14 font-medium",
                                      children: s.label,
                                    }),
                                  ],
                                }),
                                !j &&
                                  e.jsxs("div", {
                                    className: "flex flex-col items-end",
                                    children: [
                                      e.jsx("span", {
                                        className: `text-14 ${
                                          l ? "text-white/80" : "text-white/40"
                                        }`,
                                        children:
                                          W && !pe.has(a)
                                            ? "Loading..."
                                            : W
                                            ? (r == null
                                                ? void 0
                                                : r.formatted) ||
                                              `0.00000 ${s.label}`
                                            : `0.00000 ${s.label}`,
                                      }),
                                      e.jsx("span", {
                                        className: `text-12 ${
                                          l ? "text-white/60" : "text-white/30"
                                        }`,
                                        children:
                                          W && !pe.has(a)
                                            ? "..."
                                            : _e(
                                                a,
                                                (r == null
                                                  ? void 0
                                                  : r.balance) || 0
                                              ),
                                      }),
                                    ],
                                  }),
                              ],
                            },
                            a
                          );
                        }),
                      ],
                    }),
                  e.jsx("input", {
                    name: "pay",
                    type: "text",
                    value: te,
                    onChange: (a) => G({ e: a }),
                    placeholder: "0.00",
                    className:
                      "bg-transparent text-white outline-none border-none text-right text-30 leading-[30px] tracking-1 font-VT323 w-full safari-input-fix",
                    style: {
                      WebkitFontSmoothing: "antialiased",
                      WebkitUserSelect: "text",
                      transform: "translateZ(0)",
                      willChange: "transform",
                    },
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  e.jsx("span", {
                    style: {
                      color: "rgba(121, 121, 121, 1)",
                      fontSize: "12px",
                    },
                    children: j ? "" : `${O("home.balance")} ${me}`,
                  }),
                  e.jsxs("span", {
                    style: {
                      color: "rgba(121, 121, 121, 1)",
                      fontSize: "12px",
                    },
                    children: ["$", K],
                  }),
                ],
              }),
            ],
          }),
        }),
      !re &&
        e.jsx("div", {
          className: "rounded-[20px] mb-[12px]",
          style: {
            padding: "1px",
            background:
              "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
            isolation: "isolate",
          },
          children: e.jsxs("div", {
            className: "rounded-[20px]",
            style: {
              background: "rgba(12, 16, 15, 1)",
              padding: "16px 20px",
              position: "relative",
              zIndex: 1,
              transform: "translateZ(0)",
              willChange: "auto",
            },
            children: [
              e.jsx("div", {
                className: "flex justify-between items-center mb-[8px]",
                children: e.jsx("span", {
                  style: { color: "rgba(121, 121, 121, 1)", fontSize: "14px" },
                  children: O("home.youReceive"),
                }),
              }),
              e.jsxs("div", {
                className: "flex justify-between items-center my-[4px]",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-[8px] flex-shrink-0",
                    children: [
                      e.jsx(oe, {
                        url: "/assets/icons/logo-m.svg",
                        className: "w-[24px] h-[24px]",
                        alt: "DSNT token",
                      }),
                      e.jsx("span", {
                        className:
                          "text-white font-VT323 text-24 leading-24 tracking-1",
                        children: "$DSNT",
                      }),
                      Y &&
                        Y.bonusText &&
                        e.jsx("span", {
                          className: "font-VT323",
                          style: {
                            color: "rgba(188, 251, 138, 1)",
                            fontSize: "24px",
                            marginLeft: "4px",
                          },
                          children: Y.bonusText,
                        }),
                    ],
                  }),
                  e.jsx("input", {
                    name: "receive",
                    type: "text",
                    value: U,
                    onChange: B,
                    onFocus: () => {
                      (Ee.current = !0),
                        U && U.includes(".") && (Q(""), z(""), _("0.00"));
                    },
                    placeholder: "0",
                    className:
                      "bg-transparent text-white outline-none border-none text-right text-30 leading-[30px] tracking-1 font-VT323 w-full safari-input-fix",
                    style: {
                      WebkitFontSmoothing: "antialiased",
                      WebkitUserSelect: "text",
                      transform: "translateZ(0)",
                      willChange: "transform",
                    },
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex justify-between items-center mt-[8px]",
                children: [
                  e.jsxs("span", {
                    style: {
                      color: "rgba(121, 121, 121, 1)",
                      fontSize: "12px",
                    },
                    children: [
                      O("home.balance"),
                      f ? f.displayBalance : 0,
                      " ",
                      "$DSNT",
                    ],
                  }),
                  Y &&
                    Y.oldAmount &&
                    e.jsx("span", {
                      style: {
                        color: "rgba(66, 68, 68, 1)",
                        fontSize: "12px",
                        textDecoration: "line-through",
                      },
                      children: Y.oldAmount,
                    }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const Yt = [
    "function claim(address account, uint256 amount, bytes32[] calldata proof) external",
    "function claimedLeafs(bytes32 leaf) external view returns (bool)",
  ],
  Jt = "0x1277c39c04ba2f498e4b085267b7bb5b0f1b9962",
  Ge = "https://b4ck.my/",
  at = "687510cc7a9450a659e8d5d3",
  Zt = ({ value: o, label: x }) =>
    e.jsx("div", {
      className: "flex flex-col items-center",
      children: e.jsxs("div", {
        className:
          "w-full flex flex-col items-center justify-center rounded-[12px]",
        style: {
          background: "rgba(53, 53, 53, 0.4)",
          height: "66px",
          padding: "4px",
        },
        children: [
          e.jsx("span", {
            className: "font-VT323 text-5xl leading-none",
            style: { color: "rgba(188, 251, 138, 1)" },
            children: o,
          }),
          e.jsx("span", {
            className: "text-[10px] leading-none",
            style: { color: "rgba(121, 121, 121, 1)" },
            children: x,
          }),
        ],
      }),
    }),
  Ke = Xe.memo(Zt),
  Gt = Xe.memo(({ targetDate: o }) => {
    const [x, C] = t.useState({
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    t.useEffect(() => {
      let _ = !0;
      const K = () => {
        const z = new Date().getTime(),
          U = o - z;
        if (U > 0) {
          const Q = Math.floor(U / 864e5),
            j = Math.floor((U % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
            ee = Math.floor((U % (1e3 * 60 * 60)) / 1e3 / 60),
            F = Math.floor((U % (1e3 * 60)) / 1e3) % 60;
          _ &&
            C((V) => {
              const re = Q.toString().padStart(2, "0"),
                X = j.toString().padStart(2, "0"),
                Y = ee.toString().padStart(2, "0"),
                O = F.toString().padStart(2, "0");
              return V.days !== re ||
                V.hours !== X ||
                V.minutes !== Y ||
                V.seconds !== O
                ? { days: re, hours: X, minutes: Y, seconds: O }
                : V;
            });
        }
      };
      K();
      const te = setInterval(() => {
        _ && K();
      }, 1e3);
      return () => {
        (_ = !1), clearInterval(te);
      };
    }, [o]);
    const { t: v } = et();
    return e.jsx("div", {
      className: "flex w-full",
      style: { gap: "4px" },
      children: e.jsxs("div", {
        className: "grid grid-cols-4 gap-1 w-full",
        children: [
          e.jsx(Ke, {
            value: x.days,
            label: v("presaleWidget.countdown.days"),
          }),
          e.jsx(Ke, {
            value: x.hours,
            label: v("presaleWidget.countdown.hours"),
          }),
          e.jsx(Ke, {
            value: x.minutes,
            label: v("presaleWidget.countdown.minutes"),
          }),
          e.jsx(Ke, {
            value: x.seconds,
            label: v("presaleWidget.countdown.seconds"),
          }),
        ],
      }),
    });
  });
function Kt() {
  var ct;
  const { t: o } = et(),
    { isConnected: x } = lt(),
    { caipNetwork: C } = vt(),
    { open: v } = kt(),
    [_, K] = t.useState(!1),
    [te, z] = t.useState(!1),
    { isCreditCardMode: U, setIsCreditCardMode: Q } = Wt(),
    [j, ee] = t.useState(null),
    [F, V] = t.useState(0),
    [re, X] = t.useState(""),
    [Y, O] = t.useState(""),
    [le, ce] = t.useState(!1),
    [me, R] = t.useState(null),
    [A, q] = t.useState(null),
    [ae, Ce] = t.useState(null),
    W = "ds_presale_solana_evm_link_state",
    H = (() => {
      try {
        const y = localStorage.getItem(W);
        if (y) {
          const T = JSON.parse(y);
          if (T.originalSolanaAddress && T.linkedEvmAddress)
            return (
              console.log(
                "📂 [PresaleWidget] Restored link state from localStorage:",
                T
              ),
              T
            );
        }
      } catch (y) {
        console.error(
          "❌ [PresaleWidget] Error reading link state from localStorage:",
          y
        );
      }
      return {
        originalSolanaAddress: null,
        linkedEvmAddress: null,
        evmLinkComplete: !1,
      };
    })(),
    [$, ke] = t.useState(null),
    [Ee, n] = t.useState(!1),
    [Me, S] = t.useState(null),
    [ge, de] = t.useState("idle"),
    [J, ve] = t.useState(H.evmLinkComplete),
    [L, pe] = t.useState(H.originalSolanaAddress),
    [Z, xe] = t.useState(H.linkedEvmAddress),
    { chainType: P, address: f, provider: Ne, disconnectWallet: je } = Pt(),
    { walletProvider: he } = St("eip155"),
    {
      needsLinking: be,
      checkLinkStatus: ue,
      isLoading: Se,
      linkStatus: I,
    } = Bt(),
    { notifySuccess: Le, notifyError: $e } = jt(),
    { isConnected: Re } = Tt(),
    Ae = (C == null ? void 0 : C.id) || (C == null ? void 0 : C.chainId),
    Ie = typeof Ae == "string" ? parseInt(Ae.replace("eip155:", ""), 10) : Ae,
    ze = x && P === "evm" && Re,
    { data: G } = $t({
      chainId: Ie,
      query: {
        enabled: ze,
        staleTime: 6e4,
        cacheTime: 3e5,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
      },
    }),
    B = P === "solana",
    se =
      !B &&
      L &&
      Z &&
      (f == null ? void 0 : f.toLowerCase()) ===
        (Z == null ? void 0 : Z.toLowerCase()),
    _e = !!(Ne || he || Re),
    Pe = se ? L : f,
    we = () => {
      R(null), X(""), O(""), V(0), Ce(null);
    },
    { presaleData: g, trackingData: Fe } = it() || {
      presaleData: null,
      trackingData: null,
    },
    ne = t.useMemo(() => {
      if (!g) return !1;
      const y = g.poolStatus === "claiming",
        T = g.isPresaleEnded || (g.endAt > 0 && Date.now() / 1e3 >= g.endAt);
      return (
        console.log("🔍 [PresaleWidget] isPresaleOver check:", {
          poolStatus: g.poolStatus,
          isEnded: T,
          isClaiming: y,
          endAt: g.endAt,
        }),
        y || T
      );
    }, [g]),
    Ve =
      (ct = g == null ? void 0 : g.currentPhaseInfo) != null &&
      ct.nextPhaseStart
        ? new Date(g.currentPhaseInfo.nextPhaseStart).getTime()
        : new Date("2024-06-30T23:59:59").getTime(),
    a = t.useMemo(() => {
      var D;
      if (!g) return { current: 1, total: 15 };
      const y =
          ((D = g == null ? void 0 : g.currentStageInfo) == null
            ? void 0
            : D.currentStage) ?? 1,
        T = Array.isArray(g == null ? void 0 : g.stages) ? g.stages.length : 15;
      return { current: y, total: T };
    }, [g]),
    s = t.useMemo(() => {
      if (!g || !g.currentStageInfo) return 0;
      const y = g.raisedAmount || 0,
        T = g.currentStageInfo.currentStageTreshold || 0;
      return T === 0 ? 0 : Math.min((y / T) * 100, 100);
    }, [g]);
  t.useEffect(() => {
    var y;
    if (C && !U) {
      const T = st[C.name];
      (y = T == null ? void 0 : T.tokens) != null &&
        y.native &&
        ee(st[C.name].tokens.native);
    }
  }, [C, U]);
  const r = t.useCallback(
      (y, T, D) => {
        try {
          const ie = {
            originalSolanaAddress: y,
            linkedEvmAddress: T,
            evmLinkComplete: D,
            timestamp: Date.now(),
          };
          localStorage.setItem(W, JSON.stringify(ie)),
            console.log(
              "💾 [PresaleWidget] Saved link state to localStorage:",
              ie
            );
        } catch (ie) {
          console.error("❌ [PresaleWidget] Error saving link state:", ie);
        }
      },
      [W]
    ),
    l = t.useCallback(() => {
      try {
        localStorage.removeItem(W),
          console.log(
            "🧹 [PresaleWidget] Cleared link state from localStorage"
          );
      } catch (y) {
        console.error("❌ [PresaleWidget] Error clearing link state:", y);
      }
    }, [W]),
    [c, u] = t.useState(!1);
  t.useEffect(() => {
    x ||
      (console.log(
        "🧹 [PresaleWidget] Wallet disconnected - clearing presale claim data (keeping link state)"
      ),
      ke(null),
      de("idle"),
      S(null));
  }, [x]),
    t.useEffect(() => {
      x &&
        B &&
        f &&
        L &&
        f !== L &&
        (console.log(
          "🔄 [PresaleWidget] Different Solana wallet connected, clearing stored link state"
        ),
        console.log("   Connected:", f),
        console.log("   Stored:", L),
        pe(null),
        xe(null),
        ve(!1),
        u(!1),
        l());
    }, [x, B, f, L, l]),
    t.useEffect(() => {
      (async () => {
        var T, D;
        if (!(!L || !Z || c) && !(!x || B || !f)) {
          console.log(
            "🔐 [PresaleWidget] Validating stored link state with backend..."
          );
          try {
            const ie = await fetch(`${Ge}wallet-link/status/${L}`);
            if (!ie.ok) throw new Error(`Backend returned ${ie.status}`);
            const Oe = await ie.json();
            if (Oe.success && (T = Oe.data) != null && T.isLinked) {
              const fe =
                  (D = Oe.data.linkedEthereumAddress) == null
                    ? void 0
                    : D.toLowerCase(),
                dt = Z == null ? void 0 : Z.toLowerCase();
              fe === dt
                ? (console.log(
                    "✅ [PresaleWidget] Stored link validated with backend"
                  ),
                  u(!0))
                : (console.warn(
                    "🚨 [PresaleWidget] SECURITY: Stored link does not match backend!"
                  ),
                  pe(null),
                  xe(null),
                  ve(!1),
                  u(!0),
                  l());
            } else
              console.warn(
                "🚨 [PresaleWidget] SECURITY: No link found in backend"
              ),
                pe(null),
                xe(null),
                ve(!1),
                u(!0),
                l();
          } catch (ie) {
            console.error(
              "❌ [PresaleWidget] Error validating link with backend:",
              ie
            ),
              pe(null),
              xe(null),
              ve(!1),
              u(!0),
              l();
          }
        }
      })();
    }, [x, B, f, L, Z, c, l]),
    t.useEffect(() => {
      console.log("🔗 [PresaleWidget] Link check useEffect triggered:", {
        isConnected: x,
        isSolanaUser: B,
        walletAddress: f,
        chainType: P,
      }),
        x &&
          B &&
          f &&
          (console.log("🔗 [PresaleWidget] Calling checkLinkStatus for:", f),
          ue(f),
          L ||
            (console.log("📍 [PresaleWidget] Storing Solana address:", f),
            pe(f)));
    }, [x, B, f, ue, P, L]),
    t.useEffect(() => {
      I != null &&
        I.isLinked &&
        B &&
        f &&
        !J &&
        (console.log(
          "📍 [PresaleWidget] Returning linked user - storing addresses:",
          { solana: f, evm: I.linkedEthereumAddress }
        ),
        pe(f),
        xe(I.linkedEthereumAddress),
        ve(!0),
        r(f, I.linkedEthereumAddress, !0));
    }, [I, B, f, J, r]),
    t.useEffect(() => {
      !B &&
        x &&
        f &&
        !L &&
        (console.log(
          "🔍 [PresaleWidget] Checking link status for EVM address:",
          f
        ),
        ue(f));
    }, [B, x, f, L, ue]),
    t.useEffect(() => {
      var y;
      !B &&
        I &&
        f &&
        !L &&
        I.addressType === "solana" &&
        ((y = I.linkedEthereumAddress) == null ? void 0 : y.toLowerCase()) ===
          (f == null ? void 0 : f.toLowerCase()) &&
        (console.log(
          "✅ [PresaleWidget] EVM address is linked to Solana:",
          I.address
        ),
        pe(I.address),
        xe(f),
        ve(!0),
        r(I.address, f, !0));
    }, [B, I, f, L, r]);
  const m = t.useCallback(async () => {
    var T;
    const y = Pe;
    if (!ne || !x || !y) {
      de("idle");
      return;
    }
    if (B) {
      if (Se) {
        console.log("🎁 [PresaleWidget] Waiting for link check to complete...");
        return;
      }
      if (be) {
        console.log(
          "🎁 [PresaleWidget] Solana user needs to link - not fetching claim data"
        ),
          de("idle");
        return;
      }
    }
    de("loading"), S(null);
    try {
      console.log("🎁 [PresaleWidget] Fetching presale claim data for:", y);
      const ie = await (await fetch(`${Ge}presale-claim/active/${at}`)).json();
      if (!ie.success || !((T = ie.data) != null && T.hasActiveSnapshot)) {
        console.log("🎁 [PresaleWidget] Presale claiming not yet available"),
          de("not_available");
        return;
      }
      const fe = await (
        await fetch(`${Ge}presale-claim/proof/${at}?userAddress=${y}`)
      ).json();
      if (!fe.success) {
        if (fe.error === "WALLET_NOT_LINKED") {
          console.log(
            "🎁 [PresaleWidget] Solana user needs to link EVM wallet"
          ),
            de("needs_linking");
          return;
        }
        console.log("🎁 [PresaleWidget] No presale tokens to claim"),
          de("no_claim");
        return;
      }
      if (fe.data.alreadyClaimed) {
        console.log(
          "🎁 [PresaleWidget] Already claimed presale tokens - BACKEND SAYS ALREADY CLAIMED:",
          fe.data
        ),
          de("already_claimed");
        return;
      }
      console.log("🎁 [PresaleWidget] Presale claim data:", fe.data),
        ke(fe.data),
        de("ready");
    } catch (D) {
      console.error("❌ [PresaleWidget] Error fetching presale claim data:", D),
        S(D.message),
        de("error");
    }
  }, [ne, x, Pe, B, Se, be]);
  t.useEffect(() => {
    m();
  }, [m]),
    t.useEffect(() => {
      J && ne && m();
    }, [J, ne, m]);
  const b = (y) => {
      console.log("✅ [PresaleWidget] EVM wallet linked successfully:", y),
        B &&
          f &&
          (console.log(
            "📍 [PresaleWidget] Storing original Solana address:",
            f
          ),
          pe(f),
          r(f, y, !0)),
        xe(y),
        ve(!0);
    },
    [E, i] = t.useState(!1),
    d = B ? Z || (I == null ? void 0 : I.linkedEthereumAddress) : se ? Z : f,
    p = (!B && !se && _e) || (se && _e) || (B && !!he),
    k = () => {
      console.log("🔗 [PresaleWidget] Connect EVM wallet button clicked"),
        i(!0),
        B &&
          x &&
          (console.log(
            "🔗 [PresaleWidget] Will disconnect Solana after EVM connect"
          ),
          setTimeout(() => {
            je();
          }, 100));
    },
    N = x && B && be && !J;
  console.log("🔗 [PresaleWidget] Linkage check:", {
    isConnected: x,
    isSolanaUser: B,
    needsLinking: be,
    evmLinkComplete: J,
    isCheckingLinkStatus: Se,
    linkStatus: I,
    shouldShowLinkageWidget: N,
    isEvmWalletReady: p,
    hasAnyEvmProvider: _e,
    isEvmConnected: Re,
    provider: !!Ne,
    evmWalletProvider: !!he,
    presaleClaimStatus: ge,
    originalSolanaAddress: L,
    linkedEvmAddress: Z,
    isLinkedSolanaUserWithEvmWallet: se,
    presaleApiAddress: Pe,
    walletAddress: f,
  });
  const w = async () => {
      var ft, gt, pt;
      if (!$ || !p) throw new Error(o("presaleWidget.claim.evmWalletRequired"));
      console.log("🎁 [PresaleWidget] Executing presale claim with:", {
        hasWalletClient: !!G,
        hasDirectProvider: !!Ne,
        hasEvmWalletProvider: !!he,
        chainType: P,
        isSolanaUser: B,
        isLinkedSolanaUserWithEvmWallet: se,
        walletClientChainId:
          (ft = G == null ? void 0 : G.chain) == null ? void 0 : ft.id,
      });
      let y = null;
      if (
        (G &&
          G.transport &&
          (console.log("🎁 [PresaleWidget] Using walletClient from wagmi"),
          (y = G.transport),
          console.log(
            "✅ [PresaleWidget] Got provider from walletClient.transport"
          )),
        !y &&
          Ne &&
          P === "evm" &&
          (console.log("🎁 [PresaleWidget] Using direct provider"), (y = Ne)),
        !y &&
          he &&
          !he.isPhantom &&
          !he.publicKey &&
          (console.log(
            "🎁 [PresaleWidget] Using evmWalletProvider from AppKit"
          ),
          (y = he)),
        !y)
      )
        throw new Error(o("presaleWidget.claim.evmWalletRequired"));
      const T = new Et(y),
        D = 11155111;
      let ie;
      try {
        const Ze = await T.getNetwork();
        ie = Number(Ze.chainId);
      } catch {
        console.warn(
          "⚠️ [PresaleWidget] Could not get network, will try to switch anyway"
        ),
          (ie = 0);
      }
      if (ie !== D) {
        console.log("🔄 [PresaleWidget] Switching to Sepolia...");
        try {
          (gt = G == null ? void 0 : G.transport) != null && gt.request
            ? await G.transport.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: `0x${D.toString(16)}` }],
              })
            : y.request &&
              (await y.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: `0x${D.toString(16)}` }],
              })),
            await new Promise((Ze) => setTimeout(Ze, 1e3));
        } catch (Ze) {
          if (Ze.code === 4902)
            await (
              ((pt = G == null ? void 0 : G.transport) == null
                ? void 0
                : pt.request) || y.request
            )({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${D.toString(16)}`,
                  chainName: "Sepolia Testnet",
                  nativeCurrency: {
                    name: "SepoliaETH",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  rpcUrls: ["https://rpc.sepolia.org"],
                  blockExplorerUrls: ["https://sepolia.etherscan.io"],
                },
              ],
            });
          else throw new Error("Failed to switch to Sepolia network");
        }
      }
      const Oe = await T.getSigner(),
        fe = await Oe.getAddress();
      if (fe.toLowerCase() !== $.claimAddress.toLowerCase())
        throw (
          (console.error("🚨 [PresaleWidget] SAFETY: Signer address mismatch!"),
          console.error("   Signer:", fe),
          console.error("   Claim address:", $.claimAddress),
          new Error(
            `Wrong wallet connected. Expected ${$.claimAddress.slice(
              0,
              6
            )}...${$.claimAddress.slice(-4)}, got ${fe.slice(
              0,
              6
            )}...${fe.slice(-4)}`
          ))
        );
      console.log("✅ [PresaleWidget] Signer matches claim address:", fe);
      const ut = await new rt($.contractAddress || Jt, Yt, Oe).claim(
        $.claimAddress,
        $.amount,
        $.proof
      );
      console.log("📤 [PresaleWidget] Transaction sent:", ut.hash);
      const mt = await ut.wait();
      return console.log("✅ [PresaleWidget] Transaction confirmed:", mt), mt;
    },
    Te = async () => {
      var y, T;
      if (!$) {
        $e(o("presaleWidget.claim.noTokensToClaim"));
        return;
      }
      n(!0), S(null);
      try {
        await w();
        try {
          console.log(
            "🔍 [PresaleWidget] Verifying presale claim with backend..."
          ),
            await fetch(
              `${Ge}presale-claim/verify/${at}?claimAddress=${$.claimAddress}`,
              { method: "POST" }
            );
        } catch (D) {
          console.warn("⚠️ [PresaleWidget] Verify endpoint error:", D);
        }
        Le(o("presaleWidget.claim.success")), de("already_claimed"), ke(null);
      } catch (D) {
        console.error("❌ [PresaleWidget] Presale claim error:", D),
          D.code === "ACTION_REJECTED" ||
          D.code === 4001 ||
          ((y = D.message) != null && y.includes("user rejected")) ||
          ((T = D.message) != null && T.includes("User denied"))
            ? $e(o("presaleWidget.claim.rejected"))
            : ($e(D.message || o("presaleWidget.claim.failed")), S(D.message));
      } finally {
        n(!1);
      }
    },
    ot = t.useMemo(
      () => ($ != null && $.amount ? Number(Je($.amount, 18)) : 0),
      [$ == null ? void 0 : $.amount]
    );
  return e.jsx("div", {
    id: "presale-widget",
    className: `flex justify-end xl:min-w-[500px] 2xl:min-w-[650px] p-[8px] md:p-[24px] bg-transparent md:bg-[#080708] rounded-none md:rounded-[20px] lg:max-w-[720px] ${
      !ne && "lg:min-h-[519px]"
    }`,
    children: e.jsxs("div", {
      className: "flex flex-col gap-4 w-full md:w-[331px]",
      children: [
       
        !ne &&
          x &&
          j &&
          g &&
          e.jsxs(ye.div, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, type: "spring", stiffness: 90 },
            children: [
              me
                ? e.jsx(Lt, { message: me })
                : e.jsx(qt, {
                    referenceCurrency: g.referenceCurrency || "USD",
                    presaleData: g,
                    setSelectedToken: ee,
                    selectedToken: j,
                    setFiatValue: V,
                    fiatValue: F,
                    cryptoAmount: re,
                    setCryptoAmount: X,
                    receiveAmount: Y,
                    setReceiveAmount: O,
                    isCreditCardMode: U,
                    isSelectOpen: _,
                    setIsSelectOpen: K,
                    setIsCreditCardMode: Q,
                    showPaymentWidget: te,
                    setShowPaymentWidget: z,
                    bonusDisplayInfo: ae,
                  }),
              j &&
                e.jsx(Rt, {
                  selectedToken: j,
                  selectedTokenLabel: j.label,
                  fiatValue: F,
                  cryptoAmount: re,
                  receiveAmount: Y,
                  setReceiveAmount: O,
                  referenceCurrency: g.referenceCurrency || "USD",
                  trackingData: Fe,
                  isCreditCardMode: U,
                  apr: g.displayApr || "0.00",
                  showPaymentWidget: te,
                  purchaseError: me,
                  setPurchaseError: R,
                  onReset: we,
                  bonusDisplayInfo: ae,
                  setBonusDisplayInfo: Ce,
                }),
            ],
          }),
        ne &&
          e.jsxs(ye.div, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, type: "spring", stiffness: 90 },
            children: [
              N &&
                e.jsx(ye.div, {
                  initial: { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2, type: "spring", stiffness: 90 },
                  className: "mb-4",
                  children: e.jsx(It, {
                    solanaAddress: f,
                    solanaProvider: Ne,
                    onLinkComplete: b,
                  }),
                }),
              x &&
                B &&
                Se &&
                e.jsxs("div", {
                  className: "flex items-center justify-center p-4 mb-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-5 h-5 border-2 border-[#CBFB7A] border-t-transparent rounded-full animate-spin",
                    }),
                    e.jsx("span", {
                      className: "ml-2 text-white/60 text-sm",
                      children: o("evmLinkage.checking"),
                    }),
                  ],
                }),
              !N &&
                !Se &&
                e.jsx("div", {
                  className: "relative",
                  style: {
                    borderRadius: "16px",
                    padding: "1px",
                    background:
                      "linear-gradient(91.74deg, rgba(252, 112, 217, 0.1) -3.32%, rgba(214, 252, 112, 0.2) 52.39%, rgba(252, 112, 217, 0.1) 103.98%)",
                  },
                  children: e.jsxs("div", {
                    className: "w-full rounded-[16px]",
                    style: { background: "#0C100F", padding: "16px" },
                    children: [
                      e.jsxs("h3", {
                        className:
                          "text-white mb-4 uppercase font-bold text-xl tracking-wide text-center relative",
                        children: [
                          e.jsx("span", {
                            className:
                              "bg-clip-text text-transparent bg-gradient-to-r from-[#d6fc70] to-[#8cffa8]",
                            children: o("presaleWidget.claim.title"),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute left-0 right-0 bottom-[-0.5rem] h-[1px] bg-gradient-to-r from-transparent via-[#d6fc70]/50 to-transparent",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "mb-4",
                        children: [
                          e.jsx("div", {
                            className: "text-xs mb-2 uppercase tracking-wider",
                            style: { color: "rgba(121, 121, 121, 1)" },
                            children: o("presaleWidget.claim.tokensAvailable"),
                          }),
                          e.jsxs("div", {
                            className:
                              "border border-[#1a1f1a] bg-[#0a0e0a] rounded-lg p-3 flex justify-between items-center",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "font-VT323 text-2xl md:text-3xl text-white font-bold tracking-wide leading-none",
                                    children: x
                                      ? ot.toLocaleString(void 0, {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        })
                                      : "0.00",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-1 ml-2",
                                    children: [
                                      e.jsx(oe, {
                                        url: "/assets/icons/logo-m.svg",
                                        className: "w-5 h-5",
                                        alt: "DSNT token",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-white/80 text-xs font-medium leading-tight",
                                        children: "$DSNT",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              ot > 0 &&
                                e.jsx("div", {
                                  className:
                                    "bg-[#fc70d9]/10 p-2 rounded-full flex items-center justify-center border border-[#fc70d9]/20",
                                  children: e.jsx("span", {
                                    className: "text-[#fc70d9] text-sm",
                                    children: "🎁",
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      ge === "loading" &&
                        e.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-5 h-5 border-2 border-[#CBFB7A] border-t-transparent rounded-full animate-spin",
                            }),
                            e.jsx("span", {
                              className: "ml-2 text-white/60 text-sm",
                              children: o("common.loading"),
                            }),
                          ],
                        }),
                      ge === "not_available" &&
                        e.jsx("div", {
                          className: "text-center py-4 text-white/60 text-sm",
                          children: o("presaleWidget.claim.notAvailableYet"),
                        }),
                      ge === "no_claim" &&
                        x &&
                        e.jsx("div", {
                          className: "text-center py-4 text-white/60 text-sm",
                          children: o("presaleWidget.claim.noTokensToClaim"),
                        }),
                      ge === "already_claimed" &&
                        e.jsx("div", {
                          className: "text-center py-4",
                          children: e.jsxs("div", {
                            className:
                              "text-[#CBFB7A] text-sm flex items-center justify-center gap-2",
                            children: [
                              e.jsx("span", { children: "✅" }),
                              o("presaleWidget.claim.alreadyClaimed"),
                            ],
                          }),
                        }),
                      Me &&
                        e.jsx("div", {
                          className:
                            "mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30",
                          children: e.jsx("p", {
                            className: "text-red-400 text-sm",
                            children: Me,
                          }),
                        }),
                      B &&
                        !p &&
                        ((I == null ? void 0 : I.isLinked) || J) &&
                        e.jsx("div", {
                          className:
                            "mb-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30",
                          children: e.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              e.jsx("div", {
                                className: "flex-shrink-0 mt-0.5",
                                children: e.jsx("svg", {
                                  className: "w-5 h-5 text-blue-400",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                  }),
                                }),
                              }),
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-blue-400 text-sm font-medium mb-1",
                                    children: o(
                                      "presaleWidget.claim.connectEvmRequired"
                                    ),
                                  }),
                                  e.jsx("p", {
                                    className: "text-white/60 text-xs mb-3",
                                    children: o(
                                      "presaleWidget.claim.connectEvmDescription",
                                      {
                                        address: `${
                                          d == null ? void 0 : d.slice(0, 6)
                                        }...${
                                          d == null ? void 0 : d.slice(-4)
                                        }`,
                                      }
                                    ),
                                  }),
                                  e.jsx(De, {
                                    variant: "primary",
                                    onClick: k,
                                    style: {
                                      borderRadius: "56px",
                                      height: "40px",
                                      textTransform: "uppercase",
                                      fontSize: "16px",
                                      padding: "0",
                                      width: "100%",
                                    },
                                    children: e.jsxs("div", {
                                      className:
                                        "flex items-center justify-center",
                                      children: [
                                        e.jsx("img", {
                                          src: "/images/payments-logos/ethereum.svg",
                                          alt: "ETH",
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        o(
                                          "presaleWidget.claim.connectEvmButton"
                                        ),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      !x &&
                        e.jsx(De, {
                          variant: "primary",
                          onClick: () => {
                            q(null), ce(!0);
                          },
                          style: {
                            borderRadius: "56px",
                            height: "46px",
                            lineHeight: "46px",
                            textTransform: "uppercase",
                            fontSize: "20px",
                            width: "100%",
                          },
                          children: o("presaleWidget.buttons.connectWallet"),
                        }),
                      x &&
                        ge === "ready" &&
                        $ &&
                        e.jsx(De, {
                          variant: "primary",
                          onClick: Te,
                          disabled: Ee || !p,
                          style: {
                            borderRadius: "56px",
                            height: "46px",
                            lineHeight: "46px",
                            textTransform: "uppercase",
                            fontSize: "20px",
                            width: "100%",
                            opacity: Ee || !p ? 0.5 : 1,
                          },
                          children: Ee
                            ? e.jsxs("div", {
                                className: "flex items-center justify-center",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2",
                                  }),
                                  o("presaleWidget.claim.claiming"),
                                ],
                              })
                            : o("presaleWidget.claim.claimTokens"),
                        }),
                      x &&
                        ge === "ready" &&
                        e.jsx("p", {
                          className: "text-white/40 text-xs text-center mt-3",
                          children: o("presaleWidget.claim.info"),
                        }),
                    ],
                  }),
                }),
            ],
          }),
        !ne &&
          !x &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx("iframe", {
                src: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xComingSoon&theme=dark",
                style: { width: "90%", height: "470px", border: "none", outline: "none", borderRadius: "10px" }
              })
            ],
          }),
        e.jsx(nt, {
          isOpen: le,
          onClose: () => {
            ce(!1), q(null);
          },
          onSelectWallet: (y, T) => {
            console.log("Selected:", y, T), ce(!1), q(null);
          },
          defaultChainType: A,
        }),
        e.jsx(nt, {
          isOpen: E,
          onClose: () => i(!1),
          onSelectWallet: (y, T) => {
            console.log("🔗 [PresaleWidget] EVM wallet selected:", y, T), i(!1);
          },
          defaultChainType: "evm",
        }),
      ],
    }),
  });
}
const Qt = ({ className: o = "", onAnimationComplete: x }) => {
    const C = window.innerWidth < 1536 && window.innerWidth > 1024 ? 20 : -20,
      [v, _] = t.useState(!1),
      [K, te] = t.useState(
        window.innerWidth < 768 ||
          (window.innerWidth >= 1024 && window.innerWidth <= 1560)
      ),
      [z, U] = t.useState(!1),
      Q = t.useRef(!1),
      j = t.useRef(null),
      ee = t.useRef(null),
      F = t.useRef(null),
      V = t.useRef(null),
      re = t.useRef(null),
      X = t.useRef(null),
      O = zt().pathname === "/",
      le = t.useRef("42"),
      ce = t.useRef(1.04),
      me = t.useRef(0),
      R = t.useRef(0),
      A = t.useRef(!1),
      [q, ae] = t.useState(0),
      Ce = O && !K,
      W = Ce && !z,
      h = t.useMemo(
        () =>
          Ce
            ? [
                { name: "2", x: 0, y: 0, width: 720, height: 864 },
                { name: "4", x: 0, y: 3460, width: 720, height: 864 },
                { name: "6", x: 2884, y: 2595, width: 720, height: 864 },
                { name: "8", x: 2884, y: 1730, width: 720, height: 864 },
                { name: "10", x: 2884, y: 865, width: 720, height: 864 },
                { name: "12", x: 2884, y: 0, width: 720, height: 864 },
                { name: "14", x: 2163, y: 2595, width: 720, height: 864 },
                { name: "16", x: 1442, y: 2595, width: 720, height: 864 },
                { name: "18", x: 721, y: 2595, width: 720, height: 864 },
                { name: "20", x: 0, y: 2595, width: 720, height: 864 },
                { name: "22", x: 2163, y: 1730, width: 720, height: 864 },
                { name: "24", x: 2163, y: 865, width: 720, height: 864 },
                { name: "26", x: 2163, y: 0, width: 720, height: 864 },
                { name: "28", x: 1442, y: 1730, width: 720, height: 864 },
                { name: "30", x: 721, y: 1730, width: 720, height: 864 },
                { name: "32", x: 0, y: 1730, width: 720, height: 864 },
                { name: "34", x: 1442, y: 865, width: 720, height: 864 },
                { name: "36", x: 1442, y: 0, width: 720, height: 864 },
                { name: "38", x: 721, y: 865, width: 720, height: 864 },
                { name: "40", x: 0, y: 865, width: 720, height: 864 },
                { name: "42", x: 721, y: 0, width: 720, height: 864 },
              ]
            : [],
        [Ce]
      ),
      H = t.useMemo(
        () =>
          W
            ? [
                "42",
                "40",
                "38",
                "36",
                "34",
                "32",
                "30",
                "28",
                "26",
                "24",
                "22",
                "20",
                "18",
                "16",
                "14",
                "12",
                "10",
                "8",
                "6",
                "4",
                "2",
              ]
            : [],
        [W]
      ),
      $ = t.useCallback((P) => 1 - Math.pow(1 - P, 3), []),
      ke = t.useCallback(
        (P) => (P < 0.5 ? 8 * P * P * P * P : 1 - Math.pow(-2 * P + 2, 4) / 2),
        []
      ),
      Ee = t.useCallback((P) => 1 - Math.pow(1 - P, 5), []),
      n = t.useCallback((P) => h.find((f) => f.name === P), [h]),
      Me = t.useCallback(
        (P) => {
          const f = n(P);
          return f
            ? {
                backgroundImage:
                  "url(/images/preloader/animation/spritesheet.png)",
                backgroundPosition: `-${f.x}px -${f.y}px`,
                width: `${f.width}px`,
                height: `${f.height}px`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "initial",
              }
            : {};
        },
        [n]
      ),
      S = t.useCallback(() => {
        j.current && (cancelAnimationFrame(j.current), (j.current = null)),
          ee.current &&
            ((ee.current.onload = null),
            (ee.current.onerror = null),
            (ee.current = null)),
          F.current &&
            F.current.parentNode &&
            (F.current.parentNode.removeChild(F.current), (F.current = null)),
          V.current && (clearTimeout(V.current), (V.current = null));
      }, []);
    if (
      (t.useEffect(() => {
        const P = () => {
          V.current && clearTimeout(V.current),
            (V.current = setTimeout(() => {
              te(
                window.innerWidth < 768 ||
                  (window.innerWidth >= 1024 && window.innerWidth <= 1560)
              );
            }, 150));
        };
        return (
          window.addEventListener("resize", P),
          () => {
            window.removeEventListener("resize", P),
              V.current && clearTimeout(V.current);
          }
        );
      }, [K]),
      t.useEffect(() => {
        if (W) {
          F.current &&
            F.current.parentNode &&
            (F.current.parentNode.removeChild(F.current), (F.current = null));
          const P = document.createElement("link");
          (P.rel = "preload"),
            (P.as = "image"),
            (P.href = "/images/preloader/animation/spritesheet.png"),
            (P.fetchPriority = "high"),
            document.head.appendChild(P),
            (F.current = P);
          const f = new Image();
          (f.onload = () => {
            _(!0);
          }),
            (f.onerror = () => {
              console.warn("Character animation spritesheet failed to load");
            }),
            (f.src = "/images/preloader/animation/spritesheet.png"),
            (ee.current = f);
        }
        return S;
      }, [W, S]),
      t.useEffect(() => {
        if (O && !K) {
          if (
            (Q.current &&
              W &&
              ((Q.current = !1),
              U(!1),
              (le.current = "42"),
              (ce.current = 1.3),
              (me.current = 0),
              (R.current = 0),
              (A.current = !1)),
            Q.current)
          ) {
            if (X.current)
              (le.current = X.current.frame),
                (ce.current = X.current.scale),
                (me.current = X.current.offset),
                (R.current = X.current.opacity);
            else {
              le.current = "2";
              const ue = window.innerWidth >= 1536;
              (ce.current = ue ? 1.008 : 0.96),
                (me.current = C),
                (R.current = 1);
            }
            (A.current = !1), U(!0), ae((ue) => ue + 1);
            return;
          } else U(!1);
          let P = !0,
            f = !0;
          const Ne = () => {
              P = document.visibilityState === "visible";
            },
            je = () => {
              f = document.hasFocus();
            };
          document.addEventListener("visibilitychange", Ne),
            window.addEventListener("focus", je),
            window.addEventListener("blur", je);
          const be = setTimeout(() => {
            A.current = !0;
            let ue = 0;
            const Se = 500,
              I = 2500,
              Le = Se,
              $e = I - Se,
              Ae = 1e3 / 24,
              Ie = performance.now();
            let ze = Ie;
            const G = (B) => {
              if (!P || !f) {
                j.current = requestAnimationFrame(G);
                return;
              }
              const se = B - Ie,
                _e = B - ze,
                Pe = Math.min(se / I, 1);
              if (_e >= Ae || Pe >= 1) {
                if (se <= Se) {
                  const we = se / Se,
                    g = Ee(we);
                  R.current = g;
                } else R.current = 1;
                if (se >= Le) {
                  const we = se - Le,
                    g = Math.min(we / $e, 1),
                    Fe = H.length,
                    ne = g * Fe,
                    Ve = Math.floor(ne),
                    a = Math.min(Ve, Fe - 1);
                  if (a !== ue) {
                    ue = a;
                    const b = H[ue];
                    le.current = b;
                  }
                  const s = $(g);
                  window.innerWidth >= 1536
                    ? (ce.current = 1.04 - 0.032 * s)
                    : (ce.current = 1.04 - 0.08 * s);
                  const l = window.innerWidth >= 1536,
                    c = 0,
                    u = l ? 30 : C,
                    m = ke(g);
                  me.current = c + (u - c) * m;
                }
                (ze = B), ae((we) => we + 1);
              }
              if (Pe < 1) j.current = requestAnimationFrame(G);
              else {
                le.current = "2";
                const we = {
                  frame: le.current,
                  scale: ce.current,
                  offset: me.current,
                  opacity: R.current,
                };
                (re.current = we),
                  (X.current = we),
                  (A.current = !1),
                  U(!0),
                  ae((g) => g + 1),
                  (Q.current = !0),
                  x && x(),
                  S();
              }
            };
            j.current = requestAnimationFrame(G);
          }, 300);
          return () => {
            clearTimeout(be),
              S(),
              document.removeEventListener("visibilitychange", Ne),
              window.removeEventListener("focus", je),
              window.removeEventListener("blur", je);
          };
        }
      }, [O, K, v, H, x, $, ke, Ee, S]),
      t.useEffect(() => S, [S]),
      !O || K)
    )
      return null;
    const ge =
        window.innerWidth < 1536 && window.innerWidth > 1024 ? 0.5 : 0.675,
      de = le.current,
      J = ce.current,
      ve = me.current,
      L = R.current,
      pe = A.current,
      Z = {
        transform: `translate3d(${ve}px, 0, 0) scale3d(${J * ge}, ${
          J * ge
        }, 1)`,
        transformOrigin: "center center",
        opacity: v ? L : 0,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        perspective: "1000px",
        isolation: "isolate",
        contain: "layout style paint",
      },
      xe = {
        ...Me(de),
        transformOrigin: "center center",
        willChange: "background-position",
        backfaceVisibility: "hidden",
      };
    return e.jsx("div", {
      className: `character-animation-container absolute pointer-events-none ${o} z-[10]`,
      children: e.jsxs(
        "div",
        {
          className:
            "absolute z-[5] pointer-events-none w-auto h-auto top-[1000px] translate-y-[-50%] right-[28%] lg:translate-x-[50%] lg:right-[42%] lg:top-[44%] xl:top-[590px] xl:right-[43%]",
          children: [
            e.jsx("div", { className: "custom-blure-1" }),
            e.jsx("div", {
              className: "relative flex items-center justify-center",
              style: {
                contain: "layout style paint",
                willChange: pe ? "transform" : "auto",
              },
              children: e.jsx("div", {
                className: "relative flex items-center justify-center",
                style: Z,
                children: e.jsx("div", { className: "z-10", style: xe }),
              }),
            }),
          ],
        },
        `character-${de}`
      ),
    });
  },
  Xt = () => {
    const [o, x] = t.useState(""),
      C = Vt();
    if (
      (t.useEffect(() => {
        const _ = _t();
        if (_.length > 0) {
          const K = _.map((te) => te.title).join(" • ");
          x(K);
        }
      }, []),
      !o)
    )
      return null;
    const v = () => {
      C("/dev-updates");
    };
    return e.jsxs("div", {
      className:
        "flex items-center gap-[12px] w-full max-w-[700px] lg:max-w-[550px] xl:max-w-[700px] mb-[12px]",
      children: [
        e.jsxs("div", {
          onClick: () => window.innerWidth < 500 && v(),
          className:
            "relative overflow-hidden flex items-center px-[12px] min-[500px]:px-[20px] py-[12px] flex-1 cursor-pointer min-[500px]:cursor-default min-w-0",
          style: {
            background: "rgba(8, 7, 9, 1)",
            borderRadius: "56px",
            height: "44px",
          },
          children: [
            e.jsx("div", {
              className: "flex-shrink-0 mr-[8px] min-[500px]:mr-[16px] z-10",
              children: e.jsx("span", {
                className:
                  "font-VT323 text-[16px] min-[500px]:text-[20px] leading-none whitespace-nowrap",
                style: { color: "white" },
                children: "LATEST UPDATES",
              }),
            }),
            e.jsxs("div", {
              className: "flex-1 relative overflow-hidden",
              children: [
                e.jsx("div", {
                  className:
                    "absolute left-0 top-0 bottom-0 w-[20px] min-[500px]:w-[40px] z-10 pointer-events-none",
                  style: {
                    background:
                      "linear-gradient(to right, rgba(8, 7, 9, 1) 0%, rgba(8, 7, 9, 0) 100%)",
                  },
                }),
                e.jsx("div", {
                  className: "scrolling-text-container",
                  children: e.jsxs("div", {
                    className: "scrolling-text",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-white font-VT323 text-[14px] min-[500px]:text-[18px] leading-none whitespace-nowrap",
                        children: o,
                      }),
                      e.jsx("span", {
                        className:
                          "text-white font-VT323 text-[14px] min-[500px]:text-[18px] leading-none whitespace-nowrap ml-[40px]",
                        children: o,
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className:
                    "absolute right-0 top-0 bottom-0 w-[20px] min-[500px]:w-[40px] z-10 pointer-events-none",
                  style: {
                    background:
                      "linear-gradient(to left, rgba(8, 7, 9, 1) 0%, rgba(8, 7, 9, 0) 100%)",
                  },
                }),
              ],
            }),
          ],
        }),
        e.jsx(De, {
          variant: "secondary",
          onClick: v,
          className: "hidden min-[500px]:block",
          style: {
            borderRadius: "56px",
            height: "44px",
            padding: "0 24px",
            fontSize: "16px",
            whiteSpace: "nowrap",
            color: "rgba(188, 251, 138, 1)",
            background:
              "linear-gradient(90deg, rgba(203, 251, 122, 0.1) 0%, rgba(133, 252, 200, 0.1) 100%)",
          },
          children: "READ MORE",
        }),
        e.jsx("style", {
          children: `
        .scrolling-text-container {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .scrolling-text {
          display: inline-flex;
          align-items: center;
          animation: scroll-left 20s linear infinite;
          will-change: transform;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .scrolling-text-container:hover .scrolling-text {
          animation-play-state: paused;
        }
      `,
        }),
      ],
    });
  },
  ea = t.lazy(() =>
    Be(
      () => import("./Partners-pea1j36q.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  ta = t.lazy(() =>
    Be(
      () => import("./Built-Bo6l0SPZ.js"),
      __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14])
    )
  ),
  aa = t.lazy(() =>
    Be(
      () => import("./Agents-FkMYQa8o.js"),
      __vite__mapDeps([
        15, 1, 2, 3, 4, 5, 6, 7, 16, 17, 18, 8, 9, 10, 11, 12, 19,
      ])
    )
  ),
  sa = t.lazy(() =>
    Be(
      () => import("./Promo-CCB-m5jx.js"),
      __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  na = t.lazy(() =>
    Be(
      () => import("./FuelOptimized-BChaYp70.js"),
      __vite__mapDeps([21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  ra = t.lazy(() =>
    Be(
      () => import("./How-DipiwoZd.js"),
      __vite__mapDeps([22, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 23])
    )
  ),
  la = t.lazy(() =>
    Be(
      () => import("./HowToBuy-BYXvux9v.js"),
      __vite__mapDeps([24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14])
    )
  ),
  ia = t.lazy(() =>
    Be(
      () => import("./Syndicate-CI7wZvFh.js"),
      __vite__mapDeps([25, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  oa = t.lazy(() =>
    Be(
      () => import("./Faq-CBthjM23.js"),
      __vite__mapDeps([26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    )
  ),
  ca = ({ value: o, label: x }) =>
    e.jsxs("div", {
      className: "flex flex-col items-center",
      children: [
        e.jsx("div", {
          className:
            "bg-[#0a0e0a] border border-[#1a1f1a] rounded-md w-full h-[48px] flex items-center justify-center",
          children: e.jsx("span", {
            className: "font-VT323 text-[#d6fc70] text-5xl",
            children: o,
          }),
        }),
        e.jsx("span", {
          className: "text-white opacity-60 text-[10px] mt-1 uppercase",
          children: x,
        }),
      ],
    }),
  Qe = Xe.memo(ca);
Xe.memo(({ targetDate: o }) => {
  const [x, C] = t.useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  return (
    t.useEffect(() => {
      let v = !0;
      const _ = () => {
        const te = new Date().getTime(),
          z = o - te;
        if (z > 0) {
          const U = Math.floor(z / 864e5),
            Q = Math.floor((z % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
            j = Math.floor((z % (1e3 * 60 * 60)) / (1e3 * 60)),
            ee = Math.floor((z % (1e3 * 60)) / 1e3);
          v &&
            C((F) => {
              const V = U.toString().padStart(2, "0"),
                re = Q.toString().padStart(2, "0"),
                X = j.toString().padStart(2, "0"),
                Y = ee.toString().padStart(2, "0");
              return F.days !== V ||
                F.hours !== re ||
                F.minutes !== X ||
                F.seconds !== Y
                ? { days: V, hours: re, minutes: X, seconds: Y }
                : F;
            });
        }
      };
      _();
      const K = setInterval(() => {
        v && _();
      }, 1e3);
      return () => {
        (v = !1), clearInterval(K);
      };
    }, [o]),
    e.jsx("div", {
      className: "flex w-full my-2",
      children: e.jsxs("div", {
        className: "grid grid-cols-4 gap-1 w-full",
        children: [
          e.jsx(Qe, { value: x.days, label: "Days" }),
          e.jsx(Qe, { value: x.hours, label: "Hours" }),
          e.jsx(Qe, { value: x.minutes, label: "Minutes" }),
          e.jsx(Qe, { value: x.seconds, label: "Seconds" }),
        ],
      }),
    })
  );
});
const da = `
  @keyframes dotPulse {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.4); opacity: 1; box-shadow: 0 0 8px rgba(214, 252, 112, 0.8); }
    100% { transform: scale(1); opacity: 0.4; }
  }
  
  .pulse-dot {
    animation: dotPulse 1.5s ease-in-out infinite;
  }
`;
function Na() {
  const { t: o } = et(),
    [x, C] = t.useState(!1),
    [v, _] = t.useState(!1),
    [K, te] = t.useState(!0),
    {
      presaleData: z,
      trackingData: U,
      isLoadingPresale: Q,
    } = it() || { presaleData: null, trackingData: null, isLoadingPresale: !1 },
    { isConnected: j } = lt();
  t.useRef(null);
  const ee = Ot("home");
  t.useEffect(() => {
    localStorage.getItem("scrollToHero") === "true" &&
      (localStorage.removeItem("scrollToHero"),
      setTimeout(() => {
        const ae = document.getElementById("hero");
        ae
          ? ae.scrollIntoView({ behavior: "smooth", block: "start" })
          : window.scrollTo(0, 0);
      }, 100));
    const q = localStorage.getItem("scrollToSection");
    q &&
      (localStorage.removeItem("scrollToSection"),
      setTimeout(() => {
        if (q === "fuel") {
          const Ce = window.innerWidth < 768 ? "fuel" : "fuel-desktop",
            W = document.getElementById(Ce);
          if (W) W.scrollIntoView({ behavior: "smooth", block: "start" });
          else {
            const h = document.getElementById("fuel-container");
            if (h) h.scrollIntoView({ behavior: "smooth", block: "start" });
            else {
              const H = document.getElementById("promo");
              if (H) {
                const $ = H.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: $ + 600, behavior: "smooth" });
              } else window.scrollTo({ top: 2500, behavior: "smooth" });
            }
          }
        } else {
          const ae = document.getElementById(q);
          ae && ae.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150));
  }, []);
  const F = () => {
      C(!0);
    },
    V = () => {
      C(!1);
    },
    re = () => {
      _(!1);
    },
    X = {
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
    Y = {
      hidden: { y: 80, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 10, stiffness: 50, duration: 1 },
      },
    },
    O = o("Know first, catch every runner.").split(" "),
    le = O.slice(0, 2),
    ce = O.slice(2),
    me = [O[2]],
    R = [O[0], O[O.length - 1]];
  return Q
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(bt, { ...ee }),
          e.jsx(wt, {}),
          e.jsx("div", {
            className:
              "relative min-h-screen flex flex-col justify-center items-center",
            children: e.jsx(Ht, {
              variant: "spinner",
              message: "Loading presale data...",
              size: "large",
            }),
          }),
        ],
      })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(bt, { ...ee }),
          e.jsx("style", { children: da }),
          e.jsx(wt, {}),
          e.jsx(Qt, { className: "inset-0 z-[1]" }),
          e.jsx("div", {
            className: "relative flex flex-col justify-center",
            id: "hero",
            children: e.jsx("div", {
              className:
                "flex-grow pt-0 lg:pb-48 lg:pt-12 xl:pt-24 lg:content-center",
              children: e.jsxs("div", {
                className:
                  "w-full flex flex-col lg:flex-row items-start justify-between md:justify-end lg:justify-between px-0 md:px-[25px] lg:pr-[9px] lg:pl-0",
                children: [
                  e.jsx(
                    yt,
                    {
                      mode: "wait",
                      children:
                        K &&
                        e.jsxs(
                          ye.div,
                          {
                            className:
                              "block px-[7px] lg:px-[0px] flex flex-col justify-center z-10 w-full md:w-auto",
                            initial: "hidden",
                            animate: "visible",
                            exit: { opacity: 0, y: -30 },
                            variants: X,
                            children: [
                              e.jsx(ye.div, {
                                variants: Y,
                                className: "w-full mb-[12px]",
                                children: e.jsx(Xt, {}),
                              }),
                              e.jsxs(ye.div, {
                                className:
                                  "uppercase max-w-[618px] mb-[20px] lg:mb-[32px] xl:mb-[40px] text-white font-bold text-center md:text-left text-36 leading-48 lg:text-48 lg:leading-56 xl:text-68 xl:leading-68 relative flex flex-col",
                                variants: Y,
                                children: [
                                  e.jsx("div", {
                                    children: le.map((A, q) =>
                                      e.jsx(
                                        "span",
                                        {
                                          className: `inline-block mr-2 ${
                                            R.includes(A)
                                              ? "bg-clip-text text-transparent bg-gradient-primary drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                                              : ""
                                          }`,
                                          children: R.includes(A)
                                            ? e.jsx(ye.span, {
                                                animate: {
                                                  y: [0, -5, 0],
                                                  transition: {
                                                    duration: 3,
                                                    ease: "easeInOut",
                                                    repeat: 1 / 0,
                                                    delay: q * 0.2,
                                                  },
                                                },
                                                children: A,
                                              })
                                            : A,
                                        },
                                        q
                                      )
                                    ),
                                  }),
                                  e.jsx("div", {
                                    className: "relative",
                                    children: ce.map((A, q) =>
                                      e.jsx(
                                        "span",
                                        {
                                          className: `inline-block mr-2 relative ${
                                            R.includes(A)
                                              ? "bg-clip-text text-transparent bg-gradient-primary drop-shadow-[0_0_15px_rgba(214,252,112,0.5)]"
                                              : ""
                                          } ${
                                            me.includes(A)
                                              ? "after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-gradient-primary"
                                              : ""
                                          }`,
                                          children: R.includes(A)
                                            ? e.jsx(ye.span, {
                                                animate: {
                                                  y: [0, -5, 0],
                                                  transition: {
                                                    duration: 3,
                                                    ease: "easeInOut",
                                                    repeat: 1 / 0,
                                                    delay:
                                                      (q + le.length) * 0.2,
                                                  },
                                                },
                                                children: A,
                                              })
                                            : A,
                                        },
                                        q
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              e.jsx(ye.div, {
                                variants: Y,
                                className: "text-center md:text-left",
                                children: e.jsx("p", {
                                  className:
                                    "max-w-[650px] mb-6 text-lg md:text-xl lg:text-2xl text-white/100 leading-relaxed font-medium",
                                  children: o("Join the AI Syndicate and outsmart whales, influencers, and market insiders in real-time. Deep Snitch AI reveals all their moves giving you classified intel to frontrun every play."),
                                }),
                              }),
                              e.jsxs(ye.div, {
                                className:
                                  "flex flex-col md:flex-row gap-4 xl:gap-12 items-center",
                                variants: Y,
                                children: [
                                  e.jsx(De, {
                                    variant: "primary",
                                    onClick: () => {
                                      window.open(
                                        "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
                                        "_blank"
                                      );
                                    },
                                    style: {
                                      borderRadius: "56px",
                                      height: "46px",
                                      lineHeight: "46px",
                                      textTransform: "uppercase",
                                      whiteSpace: "nowrap",
                                      fontSize: "24px",
                                    },
                                    children: o("Buy $DSNT"),
                                  }),
                                  
                                ],
                              }),
                              e.jsx(ye.div, {
                                variants: Y,
                                children: e.jsx(t.Suspense, {
                                  fallback: e.jsx(We, {}),
                                  children: e.jsx(ea, {}),
                                }),
                              }),
                            ],
                          },
                          "heroContentInner"
                        ),
                    },
                    "heroContent"
                  ),
                  e.jsx(
                    yt,
                    {
                      mode: "wait",
                      children:
                        K &&
                        e.jsx(
                          ye.div,
                          {
                            className:
                              "block lg:min-h-[600px] relative w-full lg:w-auto my-6 lg:my-0",
                            initial: { opacity: 0, x: 60 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: 60 },
                            transition: {
                              delay: 0.3,
                              duration: 0.9,
                              type: "spring",
                              damping: 15,
                            },
                            children: e.jsx(ye.div, {
                              className:
                                "relative lg:right-[-80px] xl:right-[12px]",
                              initial: { opacity: 0, scale: 0.9 },
                              animate: { opacity: 1, scale: 1 },
                              transition: {
                                delay: 0.6,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 120,
                              },
                              children: e.jsx(Kt, { onHowToBuyClick: F }),
                            }),
                          },
                          "formContentInner"
                        ),
                    },
                    "formContent"
                  ),
                ],
              }),
            }),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(ta, {}),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(aa, {}),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(sa, {}),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(na, {}),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(ra, {}),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(
              la,
              { presaleData: z },
              (z == null ? void 0 : z.currentPrice) || "loading"
            ),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(ia, {}),
          }),
          e.jsx(t.Suspense, {
            fallback: e.jsx(We, {}),
            children: e.jsx(oa, {}),
          }),
          e.jsx(Ft, { isOpen: x, onClose: V }),
          e.jsx(nt, { isOpen: v, onClose: re }),
        ],
      });
}
export { Na as default };
