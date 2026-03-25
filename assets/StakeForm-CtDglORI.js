var be = (t) => {
  throw TypeError(t);
};
var ce = (t, s, n) => s.has(t) || be("Cannot " + n);
var g = (t, s, n) => (
    ce(t, s, "read from private field"), n ? n.call(t) : s.get(t)
  ),
  J = (t, s, n) =>
    s.has(t)
      ? be("Cannot add the same private member more than once")
      : s instanceof WeakSet
      ? s.add(t)
      : s.set(t, n),
  X = (t, s, n, i) => (
    ce(t, s, "write to private field"), i ? i.call(t, n) : s.set(t, n), n
  ),
  Z = (t, s, n) => (ce(t, s, "access private method"), n);
import {
  l as Ce,
  s as Se,
  m as pe,
  o as Ee,
  q as Ne,
  r as Te,
  t as Ae,
  v as Pe,
  f as Me,
  a as ie,
  c as oe,
  j as e,
  S as me,
  n as we,
  b as ke,
  g as Re,
  d as fe,
} from "./index-BN8Hac8J.js";
import { ab as _e, r as h } from "./wallet-libs-C4iBya-7.js";
import { I as re, B as ee, T as O, g as Ie } from "./App-B3-mP0gp.js";
import { u as xe } from "./i18n-libs-7YlS43F0.js";
import { u as ge, R as Be } from "./react-vendor-CKqXOJaQ.js";
import { E as De, P as Ue } from "./crypto-libs-BTkSibId.js";
import { motion as de } from "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
var U,
  W,
  P,
  F,
  L,
  ne,
  he,
  ve,
  Fe =
    ((ve = class extends Ce {
      constructor(s, n) {
        super();
        J(this, L);
        J(this, U);
        J(this, W);
        J(this, P);
        J(this, F);
        X(this, U, s),
          this.setOptions(n),
          this.bindMethods(),
          Z(this, L, ne).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(s) {
        var i;
        const n = this.options;
        (this.options = g(this, U).defaultMutationOptions(s)),
          Se(this.options, n) ||
            g(this, U)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: g(this, P),
                observer: this,
              }),
          n != null &&
          n.mutationKey &&
          this.options.mutationKey &&
          pe(n.mutationKey) !== pe(this.options.mutationKey)
            ? this.reset()
            : ((i = g(this, P)) == null ? void 0 : i.state.status) ===
                "pending" && g(this, P).setOptions(this.options);
      }
      onUnsubscribe() {
        var s;
        this.hasListeners() ||
          (s = g(this, P)) == null ||
          s.removeObserver(this);
      }
      onMutationUpdate(s) {
        Z(this, L, ne).call(this), Z(this, L, he).call(this, s);
      }
      getCurrentResult() {
        return g(this, W);
      }
      reset() {
        var s;
        (s = g(this, P)) == null || s.removeObserver(this),
          X(this, P, void 0),
          Z(this, L, ne).call(this),
          Z(this, L, he).call(this);
      }
      mutate(s, n) {
        var i;
        return (
          X(this, F, n),
          (i = g(this, P)) == null || i.removeObserver(this),
          X(
            this,
            P,
            g(this, U).getMutationCache().build(g(this, U), this.options)
          ),
          g(this, P).addObserver(this),
          g(this, P).execute(s)
        );
      }
    }),
    (U = new WeakMap()),
    (W = new WeakMap()),
    (P = new WeakMap()),
    (F = new WeakMap()),
    (L = new WeakSet()),
    (ne = function () {
      var n;
      const s = ((n = g(this, P)) == null ? void 0 : n.state) ?? Ee();
      X(this, W, {
        ...s,
        isPending: s.status === "pending",
        isSuccess: s.status === "success",
        isError: s.status === "error",
        isIdle: s.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (he = function (s) {
      Ne.batch(() => {
        var n, i, a, w, r, u, j, b;
        if (g(this, F) && this.hasListeners()) {
          const v = g(this, W).variables,
            o = g(this, W).context,
            m = {
              client: g(this, U),
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          (s == null ? void 0 : s.type) === "success"
            ? ((i = (n = g(this, F)).onSuccess) == null ||
                i.call(n, s.data, v, o, m),
              (w = (a = g(this, F)).onSettled) == null ||
                w.call(a, s.data, null, v, o, m))
            : (s == null ? void 0 : s.type) === "error" &&
              ((u = (r = g(this, F)).onError) == null ||
                u.call(r, s.error, v, o, m),
              (b = (j = g(this, F)).onSettled) == null ||
                b.call(j, void 0, s.error, v, o, m));
        }
        this.listeners.forEach((v) => {
          v(g(this, W));
        });
      });
    }),
    ve);
function Le(t) {
  return {
    mutationFn(s) {
      return _e(t, s);
    },
    mutationKey: ["signMessage"],
  };
}
function Oe(t, s) {
  const n = Te(),
    [i] = h.useState(() => new Fe(n, t));
  h.useEffect(() => {
    i.setOptions(t);
  }, [i, t]);
  const a = h.useSyncExternalStore(
      h.useCallback((r) => i.subscribe(Ne.batchCalls(r)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    w = h.useCallback(
      (r, u) => {
        i.mutate(r, u).catch(Ae);
      },
      [i]
    );
  if (a.error && Pe(i.options.throwOnError, [a.error])) throw a.error;
  return { ...a, mutate: w, mutateAsync: a.mutate };
}
function je(t = {}) {
  const { mutation: s } = t,
    n = Me(t),
    i = Le(n),
    { mutate: a, mutateAsync: w, ...r } = Oe({ ...s, ...i });
  return { ...r, signMessage: a, signMessageAsync: w };
}
const We = {
    cmc_id: 1027,
    icon: "images/eth.png",
    radomName: "Ethereum",
    tokens: {
      native: {
        address: null,
        icon: "images/eth.png",
        label: "ETH",
        type: "native",
      },
      usdt: {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        icon: "images/usdt.png",
        label: "USDT",
        cmc_id: 825,
      },
      usdc: {
        address: "0xComingSoon",
        icon: "images/usdc.png",
        label: "USDC",
        cmc_id: 3408,
      },
    },
  },
  $e = {
    cmc_id: 5426,
    icon: "images/sol.png",
    radomName: "Solana",
    tokens: {
      native: { address: null, icon: "images/sol.png", label: "SOL" },
      usdt: {
        address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        icon: "images/usdt.png",
        label: "USDT",
        cmc_id: 825,
      },
      usdc: {
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        icon: "images/usdc.png",
        label: "USDC",
        cmc_id: 3408,
      },
    },
  },
  qe = {
    Ethereum: We,
    "BNB Smart Chain": {
      cmc_id: 1839,
      icon: "images/bnb.png",
      radomName: "BNB",
      tokens: {
        native: { address: null, icon: "images/bnb.png", label: "BNB" },
        usdt: {
          address: "0x55d398326f99059ff775485246999027b3197955",
          icon: "images/usdt.png",
          label: "USDT",
          cmc_id: 825,
        },
        usdc: {
          address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          icon: "images/usdc.png",
          label: "USDC",
          cmc_id: 3408,
        },
      },
    },
    Solana: $e,
    "Credit Card": {
      cmc_id: 1027,
      icon: "images/visa_icon.svg",
      tokens: {
        native: {
          address: null,
          icon: "images/usd_icon.svg",
          label: "USD FIAT",
          type: "native",
        },
      },
    },
  },
  ye = qe,
  ue = ({
    isSelectOpen: t,
    setIsSelectOpen: s,
    isCreditCardMode: n,
    setIsCreditCardMode: i,
    hideCreditCard: a = !1,
  }) => {
    const { switchNetwork: w, caipNetwork: r } = ie();
    oe();
    const u = (o) => ye[o] || null;
    if (!r || !u(r.name))
      return e.jsx("div", {
        className: "bg-red-100 text-red-800 p-3 rounded mb-4",
        children:
          "Network data unavailable. Please connect your wallet and select a supported network.",
      });
    const j = () => {
        s(!t);
      },
      b = async (o) => {
        try {
          if (!u(o.name)) {
            console.warn(`Network ${o.name} is not supported`);
            return;
          }
          const m = we.find((c) => c.name === o.name);
          if ((console.log("matchedNetworkObject ==> ", m), i(!1), !m)) {
            console.warn(
              `No matching network object found for name: ${o.name}`
            );
            return;
          }
          if (m.name == "Credit Card") {
            i(!0);
            const c = "Ethereum",
              l = we.find((k) => k.name === c);
            if (!l) {
              console.error(`AppKit network not found: ${c}`);
              return;
            }
            w(l), s(!1);
            return;
          }
          w(m), s(!1);
        } catch (m) {
          console.error("Network switch error:", m);
        }
      },
      v = () => {
        if (n) {
          const m = u("Credit Card");
          return (m == null ? void 0 : m.icon) || "/images/eth.png";
        }
        if (!(r != null && r.name)) return "/images/eth.png";
        const o = u(r.name);
        return (o == null ? void 0 : o.icon) || "/images/eth.png";
      };
    return e.jsx(e.Fragment, {
      children: e.jsx("div", {
        className:
          "border border-white-240 backdrop-blur-50 rounded-lg mb-[6px]",
        children: e.jsx("div", {
          className: "bg-dark2 rounded-lg ",
          children: e.jsxs("div", {
            className: "select relative",
            children: [
              e.jsxs("div", {
                className:
                  "select-current p-[12px] flex items-center gap-[12px] justify-between text-18 leading-[24px] letter-spacing-1 text-white cursor-pointer",
                onClick: j,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-[12px]",
                    children: [
                      e.jsx(re, {
                        url: v(),
                        className: "w-[24px] h-[24px]",
                        alt: "network-icon",
                      }),
                      n
                        ? "Bank Card / ApplePay"
                        : (r == null ? void 0 : r.name) || "Unknown Network",
                    ],
                  }),
                  e.jsx("div", {
                    className: `select-arrow transition-transform ${
                      t ? "rotate-180" : ""
                    }`,
                    children: e.jsx(me, {
                      className: "w-[24px] h-[24px]",
                      name: "arr",
                    }),
                  }),
                ],
              }),
              t &&
                e.jsx("div", {
                  className:
                    "flex flex-col absolute top-[60px] left-0 w-full bg-dark2 rounded-lg border border-white-240 z-[99999] shadow-2xl shadow-black/50",
                  children: Object.entries(ye)
                    .filter(([o]) => !a || o !== "Credit Card")
                    .map(([o, m], c) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-[12px] text-18 leading-[24px] letter-spacing-1 text-white p-[12px] hover:bg-white240 cursor-pointer rounded-lg",
                          onClick: () => b({ name: o, ...m }),
                          children: [
                            e.jsx(re, {
                              url: m.icon || "/images/eth.png",
                              className: "w-[24px] h-[24px]",
                              alt: "network-icon",
                            }),
                            o === "Credit Card" ? "Bank Card / ApplePay" : o,
                          ],
                        },
                        c
                      )
                    ),
                }),
            ],
          }),
        }),
      }),
    });
  },
  Ve = {
    "User rejected": "Transaction was cancelled by user",
    "User rejected the request": "Transaction was cancelled by user",
    "MetaMask Tx Signature: User denied": "Transaction was cancelled by user",
    "User denied message signature": "Message signing was cancelled by user",
    "User rejected the transaction": "Transaction was cancelled by user",
    "does not support message signing":
      "Your wallet does not support message signing for staking. Please try connecting with Phantom or Solflare wallet instead.",
    "Unexpected error":
      "Your wallet does not support this operation. For Solana staking, please use Phantom or Solflare wallet.",
    "insufficient funds": "Insufficient funds for gas fees",
    "insufficient funds for gas": "Insufficient funds for gas fees",
    "gas required exceeds allowance": "Insufficient funds for gas fees",
    "execution reverted": "Transaction failed on blockchain",
    "nonce too low": "Transaction nonce is too low. Please try again",
    "replacement transaction underpriced":
      "Gas price too low. Please try again",
    "already known": "Transaction already submitted",
    "transaction underpriced": "Gas price too low. Please try again",
    "network error": "Network connection error. Please check your internet",
    timeout: "Request timed out. Please try again",
    "rate limit": "Too many requests. Please wait and try again",
    Staking__CannotWithdrawYet:
      "Cannot withdraw yet. Please check withdrawal schedule",
    Staking__ClaimingNotAllowed: "Claiming is not allowed at this time",
    Staking__ContributionNotAvailable: "Staking is not available at this time",
    Staking__InvalidPermitSignature: "Invalid signature. Please try again",
    Staking__NothingToClaim: "No rewards available to claim",
    Staking__WithdrawTooMuch: "Withdrawal amount exceeds staked amount",
    Staking__ZeroStakeAmount: "Stake amount must be greater than 0",
    Staking__ZeroWithdrawAmount: "Withdrawal amount must be greater than 0",
    ECDSAInvalidSignature: "Invalid signature provided",
    ECDSAInvalidSignatureLength: "Invalid signature length",
    Verification__ExpiredSignature: "Signature has expired. Please try again",
    Verification__NotAuthorizedAccess: "Access not authorized",
    SafeERC20FailedOperation: "Token transfer failed. Please check allowance",
    ReentrancyGuardReentrantCall: "Reentrant call detected. Please try again",
    "invalid address": "Invalid wallet address provided",
    "invalid amount": "Invalid amount provided",
    "amount too low": "Amount is below minimum requirement",
    "amount too high": "Amount exceeds maximum limit",
    "insufficient balance": "Insufficient token balance",
    "invalid signature": "Invalid signature provided",
    "expired deadline": "Transaction deadline has expired",
    unauthorized: "Authentication required. Please connect your wallet",
    forbidden: "Access denied. Please check your permissions",
    "not found": "Resource not found. Please check the URL",
    "internal server error": "Server error. Please try again later",
    "bad request": "Invalid request. Please check your input",
    "too many requests": "Too many requests. Please wait and try again",
    "unknown error": "An unexpected error occurred. Please try again",
    "transaction failed": "Transaction failed. Please try again",
    "operation failed": "Operation failed. Please try again",
  },
  ze = (t) => {
    const s =
        (t == null ? void 0 : t.message) ||
        (t == null ? void 0 : t.toString()) ||
        String(t),
      n = s.toLowerCase();
    for (const [i, a] of Object.entries(Ve))
      if (n.includes(i.toLowerCase()))
        return {
          type: "specific",
          original: s,
          userMessage: a,
          category: Ke(i),
        };
    if (t != null && t.code) {
      const i = Ge(t.code);
      if (i)
        return {
          type: "code",
          original: s,
          userMessage: i,
          category: "network",
          code: t.code,
        };
    }
    if (t != null && t.status) {
      const i = Ye(t.status);
      if (i)
        return {
          type: "http",
          original: s,
          userMessage: i,
          category: "api",
          status: t.status,
        };
    }
    return {
      type: "generic",
      original: s,
      userMessage: "An unexpected error occurred. Please try again.",
      category: "unknown",
    };
  },
  Ke = (t) =>
    t.includes("User rejected") || t.includes("denied")
      ? "user_cancelled"
      : t.includes("insufficient") || t.includes("gas")
      ? "insufficient_funds"
      : t.includes("Staking__") ||
        t.includes("ECDSA") ||
        t.includes("SafeERC20")
      ? "smart_contract"
      : t.includes("network") ||
        t.includes("timeout") ||
        t.includes("rate limit")
      ? "network"
      : t.includes("invalid") || t.includes("amount") || t.includes("address")
      ? "validation"
      : t.includes("unauthorized") ||
        t.includes("forbidden") ||
        t.includes("not found")
      ? "api"
      : "unknown",
  Ge = (t) =>
    ({
      ACTION_REJECTED: "Transaction was cancelled by user",
      INSUFFICIENT_FUNDS: "Insufficient funds for transaction",
      UNPREDICTABLE_GAS_LIMIT:
        "Unable to estimate gas. Please try with a higher amount",
      NONCE_EXPIRED: "Transaction nonce expired. Please try again",
      REPLACEMENT_UNDERPRICED: "Gas price too low. Please try again",
      UNSUPPORTED_OPERATION: "Operation not supported by your wallet",
      INVALID_ARGUMENT: "Invalid transaction parameters",
      MISSING_ARGUMENT: "Missing required transaction parameters",
      UNEXPECTED_ARGUMENT: "Unexpected transaction parameters",
      CALL_EXCEPTION: "Contract call failed",
      INSUFFICIENT_FUNDS_FOR_GAS: "Insufficient funds for gas fees",
      NETWORK_ERROR: "Network connection error. Please check your internet",
      TIMEOUT: "Request timed out. Please try again",
      SERVER_ERROR: "Server error. Please try again later",
      UNKNOWN_ERROR: "An unexpected error occurred. Please try again",
    }[t] || null),
  Ye = (t) =>
    ({
      400: "Invalid request. Please check your input",
      401: "Authentication required. Please connect your wallet",
      403: "Access denied. Please check your permissions",
      404: "Resource not found. Please check the URL",
      409: "Conflict detected. Please try again",
      429: "Too many requests. Please wait and try again",
      500: "Server error. Please try again later",
      502: "Bad gateway. Please try again later",
      503: "Service unavailable. Please try again later",
      504: "Gateway timeout. Please try again later",
    }[t] || null),
  Q = (t, s = "Unknown", n = {}) => {
    const i = ze(t);
    return (
      console.group(`🚨 Error in ${s}`),
      console.error("Original error:", t),
      console.error("Parsed error:", i),
      console.error("Additional data:", n),
      console.groupEnd(),
      i
    );
  },
  He = ({
    inputAmount: t,
    setIsStaking: s,
    isStaking: n,
    inputFormatError: i,
  }) => {
    const { caipNetwork: a } = ie(),
      { isConnected: w, address: r } = oe(),
      { t: u } = xe(),
      { notifySuccess: j, notifyError: b } = ke(),
      { userTokenBalance: v } = ge(),
      [o, m] = h.useState(!1),
      { open: c } = Re(),
      { walletProvider: l } = fe("eip155"),
      { walletProvider: k } = fe("solana"),
      { signMessageAsync: te } = je(),
      D = () =>
        r != null && r.startsWith("0x")
          ? (l &&
              ((l.isCoinbaseWallet && typeof l.qrUrl < "u") ||
                (l.name || "")
                  .toLowerCase()
                  .includes("coinbase smart wallet"))) ||
            (typeof window < "u" &&
              window.ethereum &&
              window.ethereum.isCoinbaseWallet &&
              typeof window.ethereum.qrUrl < "u")
            ? "webauthn"
            : "evm"
          : "solana",
      _ = async () => {
        var S, E, f, q, V, H;
        if (!t || parseFloat(t) <= 0) {
          b(u("stake.form.errors.invalidAmount"));
          return;
        }
        if (parseFloat(t) < 1) {
          b(
            u("stake.form.errors.minimumAmount", {
              amount: 1,
              currency: "$DSNT",
            })
          );
          return;
        }
        if (!v || !v.numberBalance || parseFloat(t) > v.numberBalance) {
          b(u("stake.form.errors.insufficientBalance"));
          return;
        }
        s && s(!0);
        try {
          let p;
          try {
            p = De(String(t), 18).toString();
          } catch (x) {
            throw (b(u("stake.form.errors.invalidAmount")), x);
          }
          let T = "";
          try {
            const x = await fetch(
              `https://b4ck.my/staking-offchain/nonce/${r}`,
              { cache: "no-store" }
            );
            if (x.ok) {
              const N = await x.json(),
                C =
                  ((S = N == null ? void 0 : N.data) == null
                    ? void 0
                    : S.nonce) ?? (N == null ? void 0 : N.nonce);
              T = C != null ? String(C) : "";
            }
          } catch (x) {
            console.warn("Failed to fetch nonce:", x);
          }
          if (!T) {
            b(
              u(
                "stake.form.errors.backendError",
                "Unable to fetch signing nonce. Please try again."
              )
            ),
              s && s(!1);
            return;
          }
          const z = "687510cc7a9450a659e8d5d3",
            A = Math.floor(Date.now() / 1e3),
            K = `[STAKE_V1]|${r.toLowerCase()}|${z}|${p}|${T}|${A}`;
          let M = "",
            G = D();
          try {
            if (r != null && r.startsWith("0x")) {
              if (
                ((M = await te({ message: K, account: r })),
                M && M.length > 500)
              ) {
                const x = M.toLowerCase();
                (x.includes("776562617574686e2e676574") ||
                  x.includes("6b6579732e636f696e626173652e636f6d")) &&
                  (G = "webauthn");
              }
            } else if (
              (k != null && k.signMessage) ||
              (typeof window < "u" &&
                (E = window.solana) != null &&
                E.signMessage)
            ) {
              const x = new TextEncoder().encode(K),
                C = await (k || window.solana).signMessage(x),
                ae = C
                  ? C.signature &&
                    (C.signature instanceof Uint8Array ||
                      Array.isArray(C.signature))
                    ? C.signature
                    : C instanceof Uint8Array || Array.isArray(C)
                    ? C
                    : null
                  : null;
              if (typeof C == "string") M = C;
              else if (ae) {
                const le = Array.from(ae)
                  .map((se) => String.fromCharCode(se))
                  .join("");
                M = btoa(le);
              } else throw new Error("Unsupported Solana signature format");
            } else
              throw new Error(
                "No compatible wallet provider for message signing"
              );
          } catch (x) {
            const N = String((x == null ? void 0 : x.message) || x);
            throw (
              (!(r != null && r.startsWith("0x")) &&
              N.toLowerCase().includes("unexpected error")
                ? b(
                    "Trust Wallet does not support Solana message signing via WalletConnect. Please use Phantom, Solflare, or connect directly through the Trust Wallet browser."
                  )
                : (N.toLowerCase().includes("user") &&
                    N.toLowerCase().includes("den")) ||
                  N.toLowerCase().includes("reject")
                ? b(u("stake.form.errors.userCancelled"))
                : N.toLowerCase().includes("not been authorized")
                ? b(
                    u(
                      "stake.form.errors.backendError",
                      "Please authorize this site in your wallet and try again."
                    )
                  )
                : b(u("stake.form.errors.backendError")),
              x)
            );
          }
          const Y = "https://b4ck.my/staking-offchain/deposit",
            I =
              typeof crypto < "u" && crypto.randomUUID
                ? crypto.randomUUID()
                : `${Date.now()}-${Math.random()}`,
            d = (r == null ? void 0 : r.startsWith("0x")) && r.length === 42,
            y = {
              presaleId: z,
              userAddress: r,
              amount: p,
              idempotencyKey: I,
              ...(d && { rewardAddress: r }),
              signature: M,
              signatureType: G,
              message: K,
              nonce: T,
            },
            R = await fetch(Y, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(y),
            });
          if (!R.ok) {
            let x = {};
            try {
              x = await R.json();
            } catch (N) {
              console.warn("Failed to parse error response:", N);
            }
            Q(new Error(`HTTP ${R.status}`), "Off-chain Deposit", {
              status: R.status,
              errorBody: x,
              url: Y,
            }),
              b(u("stake.form.errors.backendError"));
            return;
          }
          j(u("stake.form.stakingSuccess"));
          try {
            window.dispatchEvent(new Event("staking:updated"));
          } catch (x) {
            console.error("Error dispatching staking:updated event:", x);
          }
        } catch (p) {
          Q(p, "Staking Transaction", {
            inputAmount: t,
            address: r,
            network: a == null ? void 0 : a.name,
          });
          const T = p.message || "";
          if (
            T.toLowerCase().includes("unexpected error") ||
            (T.toLowerCase().includes("user") &&
              T.toLowerCase().includes("den")) ||
            T.toLowerCase().includes("reject") ||
            T.toLowerCase().includes("not been authorized")
          )
            return;
          let A;
          (f = p.message) != null && f.includes("insufficient funds")
            ? (A = u("stake.form.errors.insufficientFunds"))
            : (q = p.message) != null && q.includes("network error")
            ? (A = u("stake.form.errors.networkError"))
            : (V = p.message) != null && V.includes("timeout")
            ? (A = u("stake.form.errors.timeout"))
            : (H = p.message) != null && H.includes("gas")
            ? (A = u("stake.form.errors.gasError"))
            : (A = p.message || u("stake.form.stakingFailed")),
            b(A);
        } finally {
          s && s(!1);
        }
      },
      $ = v && v.numberBalance && v.numberBalance > 0,
      B = (w && (!t || parseFloat(t) <= 0 || !$)) || n || i;
    if (
      !w &&
      (a.name == "Ethereum" ||
        a.name == "Sepolia" ||
        a.name == "BNB Smart Chain" ||
        a.name == "Credit Card")
    )
      return e.jsx(ee, {
        className: "w-full mb-[20px] connect-wallet",
        rounded: "full",
        onClick: async () => {
          try {
            m(!0),
              l && !w && l.request({ method: "eth_accounts" }).catch(() => {}),
              c({ view: "Connect" });
          } catch (S) {
            Q(S, "Wallet Connection", { network: a == null ? void 0 : a.name });
            try {
              c({ view: "Connect" });
            } catch (E) {
              Q(E, "Wallet Connection Fallback", {
                network: a == null ? void 0 : a.name,
              });
            }
          } finally {
            m(!1);
          }
        },
        disabled: o,
        children: o
          ? e.jsxs("div", {
              className: "flex items-center justify-center",
              children: [
                e.jsxs("svg", {
                  className: "animate-spin -ml-1 mr-2 h-5 w-5 text-black",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    e.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    e.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                u("home.connecting"),
              ],
            })
          : u("CONNECT WALLET"),
      });
    if (!w && (a.name == "Solana Devnet" || a.name == "Solana"))
      return e.jsx(ee, {
        className: "w-full mb-[20px] connect-wallet",
        rounded: "full",
        onClick: async () => {
          try {
            m(!0), c({ view: "Connect" });
          } catch (S) {
            Q(S, "Wallet Connection", { network: a == null ? void 0 : a.name });
            try {
              c({ view: "Connect" });
            } catch (E) {
              Q(E, "Wallet Connection Fallback", {
                network: a == null ? void 0 : a.name,
              });
            }
          } finally {
            m(!1);
          }
        },
        disabled: o,
        children: o
          ? e.jsxs("div", {
              className: "flex items-center justify-center",
              children: [
                e.jsxs("svg", {
                  className: "animate-spin -ml-1 mr-2 h-5 w-5 text-black",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    e.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    e.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                u("home.connecting"),
              ],
            })
          : u("CONNECT WALLET"),
      });
    if (w)
      return e.jsx(ee, {
        variant: "primary",
        rounded: "full",
        fullWidth: !0,
        disabled: B,
        onClick: _,
        className: `relative overflow-hidden ${B ? "opacity-50" : ""} py-3`,
        children: e.jsx("div", {
          className: "flex items-center justify-center",
          children: n
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("svg", {
                    className: "animate-spin -ml-1 mr-2 h-5 w-5 text-black",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      e.jsx("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4",
                      }),
                      e.jsx("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                      }),
                    ],
                  }),
                  u("stake.form.stakeButton"),
                  "...",
                ],
              })
            : u("stake.form.stakeButton"),
        }),
      });
  },
  Je = ({ isOpen: t, onClose: s }) => {
    const [n, i] = h.useState(t),
      [a, w] = h.useState(""),
      [r, u] = h.useState(!1),
      { notifySuccess: j, notifyError: b, notifyInfo: v } = ke();
    ie();
    const { address: o } = oe(),
      { userTokenBalance: m } = ge(),
      [c, l] = h.useState(""),
      [k, te] = h.useState(""),
      [D, _] = h.useState(!1),
      [$, B] = h.useState(!1),
      [S, E] = h.useState(""),
      { t: f } = xe();
    je();
    const { walletProvider: q } = fe("solana");
    h.useEffect(() => {
      let d;
      return (
        t
          ? (i(!0), (document.body.style.overflow = "hidden"))
          : ((d = setTimeout(() => {
              i(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          d && clearTimeout(d);
        }
      );
    }, [t]),
      h.useEffect(() => {
        const d = (y) => {
          y.key === "Escape" && s();
        };
        return (
          t && document.addEventListener("keydown", d),
          () => {
            document.removeEventListener("keydown", d);
          }
        );
      }, [t, s]),
      h.useEffect(() => {
        t || (_(!1), B(!1), E(""));
      }, [t]);
    const V = (d) =>
        d
          ? !d.startsWith("0x") || d.length !== 42
            ? f("transfer.confirm.invalidAddress", "Invalid Ethereum address.")
            : ""
          : f(
              "transfer.confirm.addressRequired",
              "Destination address is required."
            ),
      H = (d) => {
        const y = d.target.value;
        l(y), te(V(y));
      },
      p = a && !isNaN(a) && Number(a) > 0 && Number(a) <= m.numberBalance,
      T = !V(c),
      z = !p || !T,
      A = S.trim().toLowerCase() === c.trim().toLowerCase(),
      K = !$ || !A,
      M = (d) => {
        if (
          (console.log("handleAmountChange ==> ", M),
          d === "" || /^\d*\.?\d*$/.test(d))
        ) {
          const y = parseFloat(d);
          !isNaN(y) && y > 0 && y <= m.numberBalance && w(y);
        }
      },
      G = async (d, y) => {
        console.log("handleTransferToEthereum ==> ");
        let R = { address: o, recipientEthAddress: d, amount: y };
        const N = await (
            await fetch("https://b4ck.my/siwe/getMessageTransferToEth", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(R),
            })
          ).json(),
          C = new TextEncoder().encode(N.msg),
          ae = await q.signMessage(C),
          le = new Ue(o);
        R = { ...R, publicKey: le, signedMessage: ae, deadline: N.deadline };
        const se = await fetch("https://b4ck.my/convert-to-eth", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(R),
        });
        console.log("response:", se),
          se.ok
            ? j(f("notifications.transaction.success"))
            : se.ok || b(f("notifications.transaction.error"));
      };
    if (!n && !t) return null;
    const Y = e.jsxs("div", {
        className:
          "fixed inset-0 z-[10000] transition-opacity duration-300 ease-in-out",
        onClick: () => _(!1),
        style: { opacity: D ? 1 : 0 },
        children: [
          e.jsx("div", {
            className:
              "blure-popup absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm",
          }),
          e.jsx("div", {
            className:
              "absolute w-full max-w-[520px] min-h-[320px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 mx-2 sm:mx-4 bg-[#18181A] rounded-2xl shadow-lg",
            style: {
              opacity: D ? 1 : 0,
              transform: `translate(-50%, -50%) ${
                D ? "scale(1)" : "scale(0.95)"
              }`,
            },
            onClick: (d) => d.stopPropagation(),
            children: e.jsxs("div", {
              className: "relative z-10 pt-8 px-8 pb-6",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between items-center mb-6",
                  children: [
                    e.jsx(O, {
                      size: "xl",
                      className: "text-white font-bold text-xl md:text-2xl",
                      children: f("transfer.confirm.title", "Confirm Transfer"),
                    }),
                    e.jsx("div", {
                      onClick: () => _(!1),
                      className: "cursor-pointer",
                      children: e.jsx(me, {
                        className: "w-[32px] h-[32px]",
                        name: "close",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "text-yellow-200 bg-yellow-900/30 border border-yellow-400/30 rounded p-4 mb-6 text-base md:text-lg",
                  children: [
                    e.jsx("span", {
                      className: "font-bold text-yellow-400",
                      children: f("transfer.confirm.warningLabel", "Warning:"),
                    }),
                    " ",
                    f(
                      "transfer.confirm.warning",
                      "If you send to the wrong address, your funds may be lost and cannot be recovered. Please double-check the address and ensure you have full control over it."
                    ),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-4 text-white/90 text-base md:text-lg",
                  children: [
                    e.jsx("span", {
                      children: f("transfer.confirm.amountLabel", "Amount:"),
                    }),
                    e.jsxs("span", {
                      className:
                        "font-mono ml-2 text-green-400 text-lg md:text-xl",
                      children: [a, " $DSNT"],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-4 text-white/90 text-base md:text-lg",
                  children: [
                    e.jsx("span", {
                      children: f(
                        "transfer.confirm.destinationLabel",
                        "Destination address:"
                      ),
                    }),
                    e.jsx("span", {
                      className:
                        "block font-mono text-green-400 text-base md:text-lg mt-1 break-all",
                      children: c,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-4 flex items-start",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      id: "confirm-checkbox",
                      checked: $,
                      onChange: (d) => B(d.target.checked),
                      className: "mr-3 scale-125 mt-1",
                    }),
                    e.jsx("label", {
                      htmlFor: "confirm-checkbox",
                      className:
                        "text-white/80 text-base md:text-lg leading-tight",
                      children: f(
                        "transfer.confirm.checkbox",
                        "I confirm that I own this Ethereum address and understand the risks."
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-6",
                  children: [
                    e.jsx("label", {
                      className:
                        "block text-white/80 text-base md:text-lg mb-2",
                      children: f(
                        "transfer.confirm.typeToConfirm",
                        "Type the destination address to confirm:"
                      ),
                    }),
                    e.jsx("input", {
                      type: "text",
                      value: S,
                      onChange: (d) => E(d.target.value),
                      className: `w-full p-3 rounded bg-[#23232A] text-white text-base md:text-lg border ${
                        A || S === "" ? "border-[#333]" : "border-red-400"
                      } focus:outline-none focus:border-green-400`,
                      placeholder: f(
                        "transfer.confirm.typeAddressPlaceholder",
                        "Paste the destination address here"
                      ),
                    }),
                    !A &&
                      S !== "" &&
                      e.jsx("div", {
                        className: "text-base text-red-400 mt-2",
                        children: f(
                          "transfer.confirm.addressMismatch",
                          "Address does not match."
                        ),
                      }),
                  ],
                }),
                e.jsx(ee, {
                  variant: "primary",
                  fullWidth: !0,
                  className: "mt-2 text-xl md:text-2xl py-5 font-bold",
                  disabled: K,
                  onClick: () => {
                    _(!1), G(c, a), s();
                  },
                  children: f(
                    "transfer.confirm.confirmButton",
                    "Confirm Transfer"
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
      I = e.jsxs("div", {
        className:
          "fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out",
        onClick: s,
        style: { opacity: t ? 1 : 0 },
        children: [
          e.jsx("div", {
            className:
              "blure-popup absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm",
          }),
          e.jsx("div", {
            className:
              "absolute w-full max-w-[520px] min-h-[380px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 mx-2 sm:mx-4 bg-[#18181A] rounded-2xl shadow-lg",
            style: {
              opacity: t ? 1 : 0,
              transform: `translate(-50%, -50%) ${
                t ? "scale(1)" : "scale(0.95)"
              }`,
            },
            onClick: (d) => d.stopPropagation(),
            children: e.jsxs("div", {
              className: "relative z-10 pt-8 px-8 pb-6",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between items-center mb-6",
                  children: [
                    e.jsx(O, {
                      size: "xl",
                      className: "text-white font-bold text-xl md:text-2xl",
                      children: f("transfer.title", "Transfer to Ethereum"),
                    }),
                    e.jsx("div", {
                      onClick: s,
                      className: "cursor-pointer",
                      children: e.jsx(me, {
                        className: "w-[32px] h-[32px]",
                        name: "close",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "text-white text-base md:text-lg leading-[22px] mb-4 opacity-80",
                  children: [
                    f("transfer.currentAddress", "Your current address:"),
                    e.jsx("span", {
                      className:
                        "block font-mono text-green-400 text-base md:text-lg mt-1 break-all",
                      children: o,
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "text-yellow-200 bg-yellow-900/30 border border-yellow-400/30 rounded p-4 mb-6 text-base md:text-lg",
                  children: f(
                    "transfer.info",
                    "You are connected with a non-EVM address. To stake, you must transfer your tokens to an Ethereum address. Please specify the amount and destination address below."
                  ),
                }),
                e.jsxs("div", {
                  className: "mb-6",
                  children: [
                    e.jsx("label", {
                      className:
                        "block text-white/80 text-base md:text-lg mb-2",
                      children: f("transfer.amountLabel", "Amount to transfer"),
                    }),
                    e.jsx("input", {
                      type: "number",
                      min: "0",
                      value: a,
                      onChange: (d) => M(d.target.value),
                      className:
                        "w-full p-3 rounded bg-[#23232A] text-white text-base md:text-lg border border-[#333] focus:outline-none focus:border-green-400",
                      placeholder: f(
                        "transfer.amountPlaceholder",
                        "Enter amount"
                      ),
                    }),
                    e.jsxs("div", {
                      className: "text-base md:text-lg text-white/40 mt-1",
                      children: [
                        f("transfer.balance", "Balance:"),
                        " ",
                        r ? "..." : m.displayBalance,
                        " $DSNT",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-6",
                  children: [
                    e.jsx("label", {
                      className:
                        "block text-white/80 text-base md:text-lg mb-2",
                      children: f(
                        "transfer.destinationLabel",
                        "Destination Ethereum Address"
                      ),
                    }),
                    e.jsx("input", {
                      type: "text",
                      value: c,
                      onChange: H,
                      className: `w-full p-3 rounded bg-[#23232A] text-white text-base md:text-lg border ${
                        k ? "border-red-400" : "border-[#333]"
                      } focus:outline-none focus:border-green-400`,
                      placeholder: f(
                        "transfer.destinationPlaceholder",
                        "0x..."
                      ),
                    }),
                    k &&
                      e.jsx("div", {
                        className: "text-base md:text-lg text-red-400 mt-1",
                        children: k,
                      }),
                  ],
                }),
                e.jsx(ee, {
                  variant: "primary",
                  fullWidth: !0,
                  className: "mt-2 text-xl md:text-2xl py-5 font-bold",
                  disabled: z,
                  onClick: () => _(!0),
                  children: f("transfer.button", "Transfer to Ethereum"),
                }),
              ],
            }),
          }),
          D && Y,
        ],
      });
    return Be.createPortal(I, document.body);
  },
  lt = () => {
    var M, G, Y;
    const { t } = xe(),
      [s, n] = h.useState(""),
      [i, a] = h.useState(""),
      [w, r] = h.useState(""),
      [u, j] = h.useState(!1),
      [b, v] = h.useState(!1),
      { isConnected: o, address: m } = oe(),
      { presaleData: c, userTokenBalance: l } = ge(),
      { caipNetwork: k } = ie(),
      [te, D] = h.useState(!1),
      [_, $] = h.useState(!1),
      [B, S] = h.useState(!1),
      { isCreditCardMode: E, setIsCreditCardMode: f } = Ie(),
      q =
        k &&
        (k.name === "Ethereum" ||
          k.name === "Sepolia" ||
          k.name === "BNB Smart Chain"),
      V = k && k.name === "Solana",
      H = o && m && m.startsWith("0x") && m.length === 42,
      p = h.useCallback(() => l && l.numberBalance && l.numberBalance > 0, [l]),
      T = h.useCallback(
        (I) => {
          const d = I.target.value;
          if ((r(""), j(!1), $(!1), /[,\s]/.test(d))) {
            $(!0), r(t("validation.noSpacesOrCommas"));
            return;
          }
          if (d === "") {
            n(""), a("");
            return;
          }
          if (/^\d*\.?\d*$/.test(d)) {
            n(d);
            const y = parseFloat(d),
              R =
                (c == null ? void 0 : c.apy) ||
                (c == null ? void 0 : c.displayApy) ||
                0;
            if (isNaN(y)) a("");
            else {
              if (o && !p()) {
                j(!0), r(t("stake.form.noBalance"));
                const x = y * (R / 100);
                a(x.toFixed(2));
                return;
              }
              if (o && y > l.numberBalance) {
                j(!0), r(t("stake.form.insufficientBalance"));
                const x = y * (R / 100);
                a(x.toFixed(2));
              } else {
                const x = y * (R / 100);
                a(x.toFixed(2));
              }
            }
          } else j(!0), r(t("validation.invalidAmount"));
        },
        [l, t, c, p, o]
      ),
      z = h.useCallback(() => {
        if ((r(""), j(!1), o && !p())) {
          j(!0), r(t("stake.form.noBalance"));
          return;
        }
        const I = l.numberBalance;
        n(I);
        const d =
            (c == null ? void 0 : c.apy) ||
            (c == null ? void 0 : c.displayApy) ||
            0,
          y = I * (d / 100);
        a(y.toFixed(2));
      }, [l, t, c, p, o]);
    h.useEffect(
      () => () => {
        r(""), j(!1);
      },
      []
    ),
      h.useEffect(() => {
        const I = () => {
          n(""), a("");
        };
        return (
          window.addEventListener("staking:updated", I),
          () => window.removeEventListener("staking:updated", I)
        );
      }, []);
    const A =
        (c == null ? void 0 : c.apy) ||
        (c == null ? void 0 : c.displayApy) ||
        0,
      K = Number(A) || 0;
    return (
      console.log("isConnected :", o, k, m),
      o && q && !H
        ? e.jsxs("div", {
            className: "w-full max-w-md mx-auto",
            children: [
              e.jsx(ue, {
                isSelectOpen: b,
                setIsSelectOpen: v,
                isCreditCardMode: E,
                setIsCreditCardMode: f,
                hideCreditCard: !0,
              }),
              e.jsxs(de.div, {
                className:
                  "relative border border-[#d6fc70]/30 rounded-xl p-4 md:p-5 bg-[#0D1514] shadow-lg shadow-black/30",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.5 },
                children: [
                  e.jsx("div", {
                    className: "bg-yellow-100 text-yellow-800 p-3 rounded mb-4",
                    children: t(
                      "stake.form.transferRequired",
                      "You are connected with a non-EVM address. To stake, you must transfer your tokens to an Ethereum address."
                    ),
                  }),
                  e.jsx(ee, {
                    variant: "primary",
                    fullWidth: !0,
                    className: "mt-2",
                    onClick: () => D(!0),
                    children: t(
                      "stake.form.transferToEthereum",
                      "Transfer to Ethereum"
                    ),
                  }),
                  e.jsx(Je, { isOpen: te, onClose: () => D(!1) }),
                ],
              }),
            ],
          })
        : o && !q && !V
        ? e.jsx("div", {
            className: "w-full max-w-md mx-auto",
            children: e.jsxs(de.div, {
              className:
                "relative border border-[#d6fc70]/30 rounded-xl p-4 md:p-5 bg-[#0D1514] shadow-lg shadow-black/30",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5 },
              children: [
                e.jsx("div", {
                  className: "bg-yellow-100 text-yellow-800 p-3 rounded mb-4",
                  children: t(
                    "stake.form.wrongNetwork",
                    "You are on the wrong network. Please switch to an EVM network (Ethereum or BNB) to be able to stake."
                  ),
                }),
                e.jsx(ue, {
                  isSelectOpen: b,
                  setIsSelectOpen: v,
                  isCreditCardMode: E,
                  setIsCreditCardMode: f,
                  hideCreditCard: !0,
                }),
              ],
            }),
          })
        : e.jsx("div", {
            className: "w-full max-w-md mx-auto",
            children: e.jsxs(de.div, {
              className:
                "relative border border-[#d6fc70]/30 rounded-xl p-4 md:p-5 bg-[#0D1514] shadow-lg shadow-black/30",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5 },
              children: [
                e.jsx("div", {
                  className:
                    "absolute top-0 left-0 w-[24px] h-[24px] border-t border-l border-[#d6fc70]/80",
                }),
                e.jsx("div", {
                  className:
                    "absolute top-0 right-0 w-[24px] h-[24px] border-t border-r border-[#d6fc70]/80",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-0 left-0 w-[24px] h-[24px] border-b border-l border-[#d6fc70]/80",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-0 right-0 w-[24px] h-[24px] border-b border-r border-[#d6fc70]/80",
                }),
                e.jsxs("h2", {
                  className:
                    "text-white mb-4 uppercase font-bold text-2xl md:text-3xl tracking-wide text-center relative leading-tight",
                  children: [
                    e.jsx("span", {
                      className:
                        "bg-clip-text text-transparent bg-gradient-to-r from-[#d6fc70] to-[#8cffa8] ",
                      children: t("STAKE YOUR TOKENS"),
                    }),
                    e.jsx("div", {
                      className:
                        "absolute left-0 right-0 bottom-[-0.5rem] h-[1px] bg-gradient-to-r from-transparent via-[#d6fc70]/50 to-transparent",
                    }),
                  ],
                }),
                w &&
                  !u &&
                  e.jsx("div", {
                    className:
                      "mb-4 p-2 bg-red-800/30 border border-red-500/50 rounded text-red-400 text-sm text-center",
                    children: w,
                  }),
                e.jsxs("div", {
                  className: "mb-3 mt-6",
                  children: [
                    e.jsx(ue, {
                      isSelectOpen: b,
                      setIsSelectOpen: v,
                      isCreditCardMode: E,
                      setIsCreditCardMode: f,
                      hideCreditCard: !0,
                    }),
                    e.jsx(O, {
                      className:
                        "text-white/60 uppercase tracking-wider text-xs font-medium mb-2 leading-none",
                      children: t("AVAILABLE BALANCE"),
                    }),
                    e.jsxs("div", {
                      className: `border ${
                        o && !p() ? "border-red-500/30" : "border-[#1a1f1a]"
                      } bg-[#0a0e0a] rounded-lg flex items-center h-12 transition-all duration-200`,
                      children: [
                        e.jsxs("div", {
                          className:
                            "font-VT323 text-2xl text-[#d6fc70] font-bold tracking-wide leading-none pl-3",
                          children: [
                            l != null && l.balance ? l.displayBalance : "0.00",
                            e.jsx("span", {
                              className: "text-lg ml-1 font-normal",
                              children: " $DSNT",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "bg-[#d6fc70]/10 p-2 rounded-full flex items-center justify-center border border-[#d6fc70]/20 ml-auto mr-3",
                          children: e.jsx(re, {
                            url: "/assets/icons/logo-m.svg",
                            className: "w-5 h-5",
                            alt: "DSNT token",
                          }),
                        }),
                      ],
                    }),
                    o &&
                      !p() &&
                      e.jsx("p", {
                        className: "mt-1 text-red-400 text-xs",
                        children: t("stake.form.noTokensToStake"),
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-3",
                  children: [
                    e.jsx(O, {
                      className:
                        "text-white/60 uppercase tracking-wider text-xs font-medium mb-2 leading-none",
                      children: t("stake"),
                    }),
                    e.jsxs("div", {
                      className: `border ${
                        u || _ ? "border-red-500/50" : "border-[#1a1f1a]"
                      } rounded-lg bg-[#0a0e0a] flex items-center h-12 relative transition-all duration-200 ${
                        !u && !_ ? "focus-within:border-[#d6fc70]/80" : ""
                      }`,
                      children: [
                        e.jsx("input", {
                          type: "text",
                          value: s,
                          onChange: T,
                          className:
                            "bg-transparent pl-3 pr-24 font-VT323 text-2xl text-white flex-1 min-w-0 focus:outline-none h-full leading-none",
                          placeholder: "0.00",
                          disabled: B,
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center absolute right-0 h-full",
                          children: [
                            e.jsx("button", {
                              className: `bg-[#1a1f1a] hover:bg-[#2a2f2a] text-[#d6fc70] font-bold px-3 py-1 rounded text-xs mr-2 uppercase tracking-wider leading-none ${
                                !p() || B ? "opacity-50 cursor-not-allowed" : ""
                              }`,
                              onClick: z,
                              disabled: !p() || B,
                              children: "MAX",
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1 mr-3",
                              children: [
                                e.jsx(re, {
                                  url: "/assets/icons/logo-m.svg",
                                  className: "w-4 h-4",
                                  alt: "DSNT token",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-white/80 text-xs font-medium whitespace-nowrap leading-none",
                                  children: "$DSNT",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (u || _) &&
                      e.jsx("p", {
                        className: "mt-1 text-red-400 text-xs",
                        children: w,
                      }),
                    e.jsx("p", {
                      className: "mt-1 text-white/40 text-xs",
                      children: t(
                        "stake.form.inputFormatHelper",
                        "Only numbers and a single dot allowed. No spaces or commas."
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-4",
                  children: [
                    e.jsx(O, {
                      className:
                        "text-white/60 uppercase tracking-wider text-xs font-medium mb-2 leading-none",
                      children: t("REWARDS"),
                    }),
                    e.jsxs("div", {
                      className:
                        "border border-[#1a1f1a] bg-[#0a0e0a] rounded-lg transition-all duration-200",
                      children: [
                        e.jsxs("div", {
                          className: "border-b border-[#1a1f1a]/50",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center p-2.5 border-b border-[#1a1f1a]/30",
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col",
                                  children: [
                                    e.jsx("div", {
                                      className: "flex items-center",
                                      children: e.jsx("div", {
                                        className:
                                          "font-VT323 text-lg text-[#f7fc70] font-bold leading-none",
                                        children:
                                          (M =
                                            l == null
                                              ? void 0
                                              : l.shareBasedRewards) != null &&
                                          M.lastStakeTimestamp
                                            ? new Date(
                                                l.shareBasedRewards
                                                  .lastStakeTimestamp * 1e3
                                              ).toLocaleDateString()
                                            : "No stakes yet",
                                      }),
                                    }),
                                    e.jsx(O, {
                                      className:
                                        "text-white/50 text-xs leading-tight",
                                      children: "Last Stake Date",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "bg-[#f7fc70]/10 h-6 w-6 rounded-full flex items-center justify-center border border-[#f7fc70]/20",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[#f7fc70] text-xs leading-none",
                                    children: "📅",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center p-2.5 border-b border-[#1a1f1a]/30",
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col",
                                  children: [
                                    e.jsx("div", {
                                      className: "flex items-center",
                                      children: e.jsxs("div", {
                                        className:
                                          "font-VT323 text-xl text-white font-bold leading-none",
                                        children: [
                                          (l == null
                                            ? void 0
                                            : l.displayStakedBalance) || "0.00",
                                          e.jsx("span", {
                                            className:
                                              "text-white/80 text-lg font-medium ml-2 leading-none",
                                            children: "$DSNT",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx(O, {
                                      className:
                                        "text-white/50 text-xs leading-tight",
                                      children: "Your Stake",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "bg-[#70a8fc]/10 h-6 w-6 rounded-full flex items-center justify-center border border-[#70a8fc]/20",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[#70a8fc] text-xs leading-none",
                                    children: "👤",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center p-2.5",
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col",
                                  children: [
                                    e.jsx("div", {
                                      className: "flex items-center",
                                      children: e.jsxs("div", {
                                        className:
                                          "font-VT323 text-xl text-[#8cffa8] font-bold leading-none",
                                        children: [
                                          (
                                            ((G =
                                              l == null
                                                ? void 0
                                                : l.shareBasedRewards) == null
                                              ? void 0
                                              : G.userAccumulatedRewards) || 0
                                          ).toLocaleString(void 0, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-white/80 text-lg font-medium ml-2 leading-none",
                                            children: "$DSNT",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsxs(O, {
                                      className:
                                        "text-white/50 text-xs leading-tight",
                                      children: [
                                        "Your accumulated rewards (",
                                        e.jsxs("span", {
                                          className: "text-[#70a8fc] font-bold",
                                          children: [
                                            (
                                              ((Y =
                                                l == null
                                                  ? void 0
                                                  : l.shareBasedRewards) == null
                                                ? void 0
                                                : Y.userSharePercent) || 0
                                            ).toLocaleString(void 0, {
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 4,
                                            }),
                                            "%",
                                          ],
                                        }),
                                        " share)",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "bg-[#8cffa8]/10 h-7 w-7 rounded-full flex items-center justify-center border border-[#8cffa8]/20",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[#8cffa8] text-sm leading-none",
                                    children: "💰",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between p-2 bg-[#0c110c]",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-9 h-9 rounded-full bg-[#8cffa8]/10 flex items-center justify-center mr-2",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[#8cffa8] text-base leading-none",
                                    children: "💹",
                                  }),
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-white/80 text-xs leading-tight",
                                      children: t("APY Projection"),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "text-[#8cffa8] font-VT323 text-2xl leading-none",
                                      children: [
                                        "24.33 %",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col items-end",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "text-white/50 text-xs leading-tight",
                                  children: [
                                    l != null && l.displayStakedBalance
                                      ? l.displayStakedBalance
                                      : "0.00",
                                    " $DSNT staked",
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-white/50 text-xs leading-tight",
                                  children: "* with daily compounding",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "text-white/40 text-xs italic mt-1 text-center",
                          children:
                            "*calculated based on the current rates. Rates are highly volatile and depend on changing factors.",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(He, {
                  inputAmount: s,
                  setIsStaking: S,
                  isStaking: B,
                  inputFormatError: _,
                }),
                e.jsx("div", {
                  className: "mt-3 text-center text-white/50 text-xs",
                  children: t("stake.form.minimumStake", {
                    amount: 100,
                    token: "$DSNT",
                  }),
                }),
              ],
            }),
          })
    );
  };
export { lt as default };
