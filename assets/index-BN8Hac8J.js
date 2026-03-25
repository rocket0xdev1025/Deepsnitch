const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/wallet-libs-C4iBya-7.js",
      "assets/crypto-libs-BTkSibId.js",
      "assets/App-B3-mP0gp.js",
      "assets/react-vendor-CKqXOJaQ.js",
      "assets/i18n-libs-7YlS43F0.js",
      "assets/index-Chjiymov.js",
      "assets/animation-libs-DQqW_Ij_.js",
      "assets/v4-C6aID195.js",
      "assets/empty-Bo4iX0pm.js",
      "assets/css/App-DqQskmkT.css",
    ])
) => i.map((i) => d[i]);
var va = (t) => {
  throw TypeError(t);
};
var Lr = (t, e, n) => e.has(t) || va("Cannot " + n);
var $ = (t, e, n) => (
    Lr(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  X = (t, e, n) =>
    e.has(t)
      ? va("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, n),
  q = (t, e, n, o) => (
    Lr(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n
  ),
  Se = (t, e, n) => (Lr(t, e, "access private method"), n);
var Do = (t, e, n, o) => ({
  set _(r) {
    q(t, e, r, n);
  },
  get _() {
    return $(t, e, o);
  },
});
import {
  a as Gs,
  A as Y,
  o as E,
  a0 as te,
  v as L,
  Q as z,
  p as re,
  y as j,
  a9 as Xe,
  a3 as Q,
  cg as Zo,
  B as F,
  ac as Tl,
  r as V,
  g as xe,
  d as K,
  n as d,
  f as S,
  i as A,
  s as de,
  x as c,
  c as U,
  e as ie,
  t as N,
  z as f,
  V as B,
  ar as $n,
  q as ee,
  a1 as ye,
  u as xt,
  W as Fe,
  a8 as Mo,
  a4 as Ce,
  aO as Pl,
  cA as ct,
  cB as Bo,
  cC as Rl,
  aw as ya,
  cD as Qe,
  cE as Sn,
  aF as Lc,
  cF as qt,
  cG as Ve,
  L as Ol,
  ay as Ko,
  cH as Wl,
  cI as Nl,
  aC as Ll,
  cJ as Ca,
  b as se,
  aL as oe,
  cK as En,
  a6 as Dc,
  aa as Dl,
  a7 as xn,
  a5 as Ml,
  a2 as Bl,
  T as ys,
  cL as jl,
  aj as zl,
  cM as Vl,
  aN as xa,
  R as Rt,
  cN as Ul,
  cO as Fl,
  cP as Hl,
  cQ as Zl,
  cR as Kl,
  cS as ql,
  cT as Gl,
  cU as Yl,
  cV as Ys,
  cW as Mc,
  cX as Bc,
  cY as Ql,
  cZ as Xl,
  bN as Dr,
  bO as Mr,
  c_ as Jl,
  _ as Re,
  c$ as ed,
} from "./wallet-libs-C4iBya-7.js";
import { g as jc } from "./crypto-libs-BTkSibId.js";
import { r as td } from "./react-vendor-CKqXOJaQ.js";
import {
  AnimatePresence as nd,
  motion as id,
} from "./animation-libs-DQqW_Ij_.js";
import { i as Ee, B as od, a as rd, b as sd } from "./i18n-libs-7YlS43F0.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
var Br = { exports: {} },
  zi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a;
function ad() {
  if ($a) return zi;
  $a = 1;
  var t = Gs(),
    e = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var p,
      h = {},
      m = null,
      g = null;
    u !== void 0 && (m = "" + u),
      l.key !== void 0 && (m = "" + l.key),
      l.ref !== void 0 && (g = l.ref);
    for (p in l) o.call(l, p) && !i.hasOwnProperty(p) && (h[p] = l[p]);
    if (a && a.defaultProps)
      for (p in ((l = a.defaultProps), l)) h[p] === void 0 && (h[p] = l[p]);
    return {
      $$typeof: e,
      type: a,
      key: m,
      ref: g,
      props: h,
      _owner: r.current,
    };
  }
  return (zi.Fragment = n), (zi.jsx = s), (zi.jsxs = s), zi;
}
var Sa;
function cd() {
  return Sa || ((Sa = 1), (Br.exports = ad())), Br.exports;
}
var ne = cd(),
  jo = {},
  Ea;
function ld() {
  if (Ea) return jo;
  Ea = 1;
  var t = td();
  return (jo.createRoot = t.createRoot), (jo.hydrateRoot = t.hydrateRoot), jo;
}
var dd = ld();
const ud = jc(dd);
function hd() {
  try {
    return j.returnOpenHref(
      `${Q.SECURE_SITE_SDK_ORIGIN}/loading`,
      "popupWindow",
      "width=600,height=800,scrollbars=yes"
    );
  } catch {
    throw new Error("Could not open social popup");
  }
}
async function pd() {
  L.push("ConnectingFarcaster");
  const t = z.getAuthConnector();
  if (t && !Y.state.farcasterUrl)
    try {
      const { url: e } = await t.provider.getFarcasterUri();
      Y.setFarcasterUrl(e, E.state.activeChain);
    } catch (e) {
      L.goBack(), re.showError(e);
    }
}
async function fd(t) {
  L.push("ConnectingSocial");
  const e = z.getAuthConnector();
  let n = null;
  try {
    const o = setTimeout(() => {
      throw new Error("Social login timed out. Please try again.");
    }, 45e3);
    if (e && t) {
      if ((j.isTelegram() || (n = hd()), n))
        Y.setSocialWindow(n, E.state.activeChain);
      else if (!j.isTelegram())
        throw new Error("Could not create social popup");
      const { uri: r } = await e.provider.getSocialRedirectUri({ provider: t });
      if (!r)
        throw (
          (n == null || n.close(),
          new Error("Could not fetch the social redirect uri"))
        );
      if ((n && (n.location.href = r), j.isTelegram())) {
        Xe.setTelegramSocialProvider(t);
        const i = j.formatTelegramSocialLoginUrl(r);
        j.openHref(i, "_top");
      }
      clearTimeout(o);
    }
  } catch (o) {
    n == null || n.close(), re.showError(o == null ? void 0 : o.message);
  }
}
async function md(t) {
  Y.setSocialProvider(t, E.state.activeChain),
    te.sendEvent({
      type: "track",
      event: "SOCIAL_LOGIN_STARTED",
      properties: { provider: t },
    }),
    t === "farcaster" ? await pd() : await fd(t);
}
function pp(t) {
  const { providers: e, providerIds: n } = Zo(Tl.state),
    o = e[t],
    r = n[t];
  return { walletProvider: o, walletProviderType: r };
}
function wd() {
  const { activeCaipNetwork: t } = Zo(E.state);
  return {
    caipNetwork: t,
    chainId: t == null ? void 0 : t.id,
    caipNetworkId: t == null ? void 0 : t.caipNetworkId,
  };
}
function gd(t) {
  var u;
  const e = Zo(E.state),
    { activeConnectorIds: n } = Zo(z.state),
    o = (t == null ? void 0 : t.namespace) || e.activeChain;
  if (!o)
    return {
      allAccounts: [],
      address: void 0,
      caipAddress: void 0,
      status: void 0,
      isConnected: !1,
      embeddedWalletInfo: void 0,
    };
  const r = (u = e.chains.get(o)) == null ? void 0 : u.accountState,
    i = z.getAuthConnector(o),
    s = n[o];
  return {
    allAccounts: F.getConnections(o).flatMap((p) =>
      p.accounts.map(({ address: h, type: m, publicKey: g }) =>
        j.createAccount(o, h, m || "eoa", g)
      )
    ),
    caipAddress: r == null ? void 0 : r.caipAddress,
    address: j.getPlainAddress(r == null ? void 0 : r.caipAddress),
    isConnected: !!(r != null && r.caipAddress),
    status: r == null ? void 0 : r.status,
    embeddedWalletInfo:
      i && s === Q.CONNECTOR_ID.AUTH
        ? {
            user:
              r != null && r.user
                ? { ...r.user, username: Xe.getConnectedSocialUsername() }
                : void 0,
            authProvider: (r == null ? void 0 : r.socialProvider) || "email",
            accountType: r == null ? void 0 : r.preferredAccountType,
            isSmartAccountDeployed: !!(r != null && r.smartAccountDeployed),
          }
        : void 0,
  };
}
let Ue;
function bd(t) {
  t && (Ue = t);
}
function vd() {
  if (!Ue)
    throw new Error('Please call "createAppKit" before using "useAppKit" hook');
  async function t(n) {
    return Ue == null ? void 0 : Ue.open(n);
  }
  async function e() {
    await (Ue == null ? void 0 : Ue.close());
  }
  return { open: t, close: e };
}
function yd() {
  if (!Ue)
    throw new Error(
      'Please call "createAppKit" before using "useAppKitEvents" hook'
    );
  const [t, e] = V.useState(Ue.getEvent());
  return (
    V.useEffect(() => {
      const n =
        Ue == null
          ? void 0
          : Ue.subscribeEvents((o) => {
              e({ ...o });
            });
      return () => {
        n == null || n();
      };
    }, []),
    t
  );
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Cd = new Set(["children", "localName", "ref", "style", "className"]),
  ka = new WeakMap(),
  _a = (t, e, n, o, r) => {
    const i = r == null ? void 0 : r[e];
    i === void 0
      ? ((t[e] = n),
        n == null && e in HTMLElement.prototype && t.removeAttribute(e))
      : n !== o &&
        ((s, a, l) => {
          let u = ka.get(s);
          u === void 0 && ka.set(s, (u = new Map()));
          let p = u.get(a);
          l !== void 0
            ? p === void 0
              ? (u.set(a, (p = { handleEvent: l })), s.addEventListener(a, p))
              : (p.handleEvent = l)
            : p !== void 0 && (u.delete(a), s.removeEventListener(a, p));
        })(t, i, n);
  },
  gr = ({
    react: t,
    tagName: e,
    elementClass: n,
    events: o,
    displayName: r,
  }) => {
    const i = new Set(Object.keys(o ?? {})),
      s = t.forwardRef((a, l) => {
        const u = t.useRef(new Map()),
          p = t.useRef(null),
          h = {},
          m = {};
        for (const [g, W] of Object.entries(a))
          Cd.has(g)
            ? (h[g === "className" ? "class" : g] = W)
            : i.has(g) || g in n.prototype
            ? (m[g] = W)
            : (h[g] = W);
        return (
          t.useLayoutEffect(() => {
            if (p.current === null) return;
            const g = new Map();
            for (const W in m)
              _a(p.current, W, a[W], u.current.get(W), o),
                u.current.delete(W),
                g.set(W, a[W]);
            for (const [W, _] of u.current) _a(p.current, W, void 0, _, o);
            u.current = g;
          }),
          t.useLayoutEffect(() => {
            var g;
            (g = p.current) == null || g.removeAttribute("defer-hydration");
          }, []),
          (h.suppressHydrationWarning = !0),
          t.createElement(e, {
            ...h,
            ref: t.useCallback(
              (g) => {
                (p.current = g),
                  typeof l == "function" ? l(g) : l !== null && (l.current = g);
              },
              [l]
            ),
          })
        );
      });
    return (s.displayName = r ?? n.name), s;
  },
  xd = xe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;
var je = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let ke = class extends A {
  render() {
    return (
      (this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && de.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && de.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && de.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && de.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && de.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && de.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && de.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && de.getSpacingStyles(this.margin, 3)};
      width: ${this.width};
    `),
      c`<slot></slot>`
    );
  }
};
ke.styles = [K, xd];
je([d()], ke.prototype, "flexDirection", void 0);
je([d()], ke.prototype, "flexWrap", void 0);
je([d()], ke.prototype, "flexBasis", void 0);
je([d()], ke.prototype, "flexGrow", void 0);
je([d()], ke.prototype, "flexShrink", void 0);
je([d()], ke.prototype, "alignItems", void 0);
je([d()], ke.prototype, "justifyContent", void 0);
je([d()], ke.prototype, "columnGap", void 0);
je([d()], ke.prototype, "rowGap", void 0);
je([d()], ke.prototype, "gap", void 0);
je([d()], ke.prototype, "padding", void 0);
je([d()], ke.prototype, "margin", void 0);
je([d()], ke.prototype, "width", void 0);
ke = je([S("wui-flex")], ke);
const $d = U`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({ borderRadius: t }) => t[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;
var wo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let kn = class extends A {
  constructor() {
    super(...arguments),
      (this.imageSrc = void 0),
      (this.alt = void 0),
      (this.address = void 0),
      (this.size = "xl");
  }
  render() {
    const e = {
      inherit: "inherit",
      xxs: "3",
      xs: "5",
      sm: "6",
      md: "8",
      mdl: "8",
      lg: "10",
      xl: "16",
      xxl: "20",
    };
    return (
      (this.style.cssText = `
    --local-width: var(--apkt-spacing-${e[this.size ?? "xl"]});
    --local-height: var(--apkt-spacing-${e[this.size ?? "xl"]});
    `),
      c`${this.visualTemplate()}`
    );
  }
  visualTemplate() {
    if (this.imageSrc)
      return (
        (this.dataset.variant = "image"),
        c`<wui-image src=${this.imageSrc} alt=${
          this.alt ?? "avatar"
        }></wui-image>`
      );
    if (this.address) {
      this.dataset.variant = "generated";
      const e = de.generateAvatarColors(this.address);
      return (
        (this.style.cssText += `
 ${e}`),
        null
      );
    }
    return (this.dataset.variant = "default"), null;
  }
};
kn.styles = [K, $d];
wo([d()], kn.prototype, "imageSrc", void 0);
wo([d()], kn.prototype, "alt", void 0);
wo([d()], kn.prototype, "address", void 0);
wo([d()], kn.prototype, "size", void 0);
kn = wo([S("wui-avatar")], kn);
const Sd = U`
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: t }) => t[20]};
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    display: flex;
    gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[1]};
    color: ${({ tokens: t }) => t.theme.textSecondary};
    border-radius: ${({ borderRadius: t }) => t[16]};
    height: 32px;
    transition: box-shadow ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({ borderRadius: t }) => t[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({ borderRadius: t }) => t[16]};
    padding-left: ${({ spacing: t }) => t[1]};
    padding-right: ${({ spacing: t }) => t[1]};
    background: ${({ tokens: t }) => t.theme.foregroundSecondary};
    color: ${({ tokens: t }) => t.theme.textPrimary};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({ tokens: t }) => t.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;
var ht = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let He = class extends A {
  constructor() {
    super(...arguments),
      (this.networkSrc = void 0),
      (this.avatarSrc = void 0),
      (this.balance = void 0),
      (this.isUnsupportedChain = void 0),
      (this.disabled = !1),
      (this.loading = !1),
      (this.address = ""),
      (this.profileName = ""),
      (this.charsStart = 4),
      (this.charsEnd = 6);
  }
  render() {
    return c`
      <button
        ?disabled=${this.disabled}
        class=${N(this.balance ? void 0 : "local-no-balance")}
        data-error=${N(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `;
  }
  imageTemplate() {
    const e = this.networkSrc
      ? c`<wui-image src=${this.networkSrc}></wui-image>`
      : c` <wui-icon size="inherit" color="inherit" icon="networkPlaceholder"></wui-icon> `;
    return c`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`;
  }
  addressTemplate() {
    return c`<wui-text variant="md-regular" color="inherit">
      ${
        this.address
          ? de.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 18 : this.charsStart,
              charsEnd: this.profileName ? 0 : this.charsEnd,
              truncate: this.profileName ? "end" : "middle",
            })
          : null
      }
    </wui-text>`;
  }
  balanceTemplate() {
    if (this.balance) {
      const e = this.loading
        ? c`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`
        : c`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;
      return c`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`;
    }
    return null;
  }
};
He.styles = [K, ie, Sd];
ht([d()], He.prototype, "networkSrc", void 0);
ht([d()], He.prototype, "avatarSrc", void 0);
ht([d()], He.prototype, "balance", void 0);
ht([d({ type: Boolean })], He.prototype, "isUnsupportedChain", void 0);
ht([d({ type: Boolean })], He.prototype, "disabled", void 0);
ht([d({ type: Boolean })], He.prototype, "loading", void 0);
ht([d()], He.prototype, "address", void 0);
ht([d()], He.prototype, "profileName", void 0);
ht([d()], He.prototype, "charsStart", void 0);
ht([d()], He.prototype, "charsEnd", void 0);
He = ht([S("wui-account-button")], He);
var Ne = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
class Le extends A {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.balance = "show"),
      (this.charsStart = 4),
      (this.charsEnd = 6),
      (this.namespace = void 0),
      (this.isSupported = B.state.allowUnsupportedChain
        ? !0
        : E.state.activeChain
        ? E.checkIfSupportedNetwork(E.state.activeChain)
        : !0);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.setAccountData(E.getAccountData(this.namespace)),
      this.setNetworkData(E.getNetworkData(this.namespace));
  }
  firstUpdated() {
    const e = this.namespace;
    e
      ? this.unsubscribe.push(
          E.subscribeChainProp(
            "accountState",
            (n) => {
              this.setAccountData(n);
            },
            e
          ),
          E.subscribeChainProp(
            "networkState",
            (n) => {
              var o;
              this.setNetworkData(n),
                (this.isSupported = E.checkIfSupportedNetwork(
                  e,
                  (o = n == null ? void 0 : n.caipNetwork) == null
                    ? void 0
                    : o.caipNetworkId
                ));
            },
            e
          )
        )
      : this.unsubscribe.push(
          $n.subscribeNetworkImages(() => {
            this.networkImage = ee.getNetworkImage(this.network);
          }),
          E.subscribeKey("activeCaipAddress", (n) => {
            this.caipAddress = n;
          }),
          Y.subscribeKey("balance", (n) => (this.balanceVal = n)),
          Y.subscribeKey("balanceSymbol", (n) => (this.balanceSymbol = n)),
          Y.subscribeKey("profileName", (n) => (this.profileName = n)),
          Y.subscribeKey("profileImage", (n) => (this.profileImage = n)),
          E.subscribeKey("activeCaipNetwork", (n) => {
            (this.network = n),
              (this.networkImage = ee.getNetworkImage(n)),
              (this.isSupported =
                n != null && n.chainNamespace
                  ? E.checkIfSupportedNetwork(
                      n == null ? void 0 : n.chainNamespace
                    )
                  : !0),
              this.fetchNetworkImage(n);
          })
        );
  }
  updated() {
    this.fetchNetworkImage(this.network);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (!E.state.activeChain) return null;
    const e = this.balance === "show",
      n = typeof this.balanceVal != "string",
      { formattedText: o } = j.parseBalance(
        this.balanceVal,
        this.balanceSymbol
      );
    return c`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${
          B.state.allowUnsupportedChain ? !1 : !this.isSupported
        }
        address=${N(j.getPlainAddress(this.caipAddress))}
        profileName=${N(this.profileName)}
        networkSrc=${N(this.networkImage)}
        avatarSrc=${N(this.profileImage)}
        balance=${e ? o : ""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${
          this.namespace ? `-${this.namespace}` : ""
        }`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${n}
      >
      </wui-account-button>
    `;
  }
  onClick() {
    this.isSupported || B.state.allowUnsupportedChain
      ? ye.open({ namespace: this.namespace })
      : ye.open({ view: "UnsupportedChain" });
  }
  async fetchNetworkImage(e) {
    var n, o;
    (n = e == null ? void 0 : e.assets) != null &&
      n.imageId &&
      (this.networkImage = await ee.fetchNetworkImage(
        (o = e == null ? void 0 : e.assets) == null ? void 0 : o.imageId
      ));
  }
  setAccountData(e) {
    e &&
      ((this.caipAddress = e.caipAddress),
      (this.balanceVal = e.balance),
      (this.balanceSymbol = e.balanceSymbol),
      (this.profileName = e.profileName),
      (this.profileImage = e.profileImage));
  }
  setNetworkData(e) {
    e &&
      ((this.network = e.caipNetwork),
      (this.networkImage = ee.getNetworkImage(e.caipNetwork)));
  }
}
Ne([d({ type: Boolean })], Le.prototype, "disabled", void 0);
Ne([d()], Le.prototype, "balance", void 0);
Ne([d()], Le.prototype, "charsStart", void 0);
Ne([d()], Le.prototype, "charsEnd", void 0);
Ne([d()], Le.prototype, "namespace", void 0);
Ne([f()], Le.prototype, "caipAddress", void 0);
Ne([f()], Le.prototype, "balanceVal", void 0);
Ne([f()], Le.prototype, "balanceSymbol", void 0);
Ne([f()], Le.prototype, "profileName", void 0);
Ne([f()], Le.prototype, "profileImage", void 0);
Ne([f()], Le.prototype, "network", void 0);
Ne([f()], Le.prototype, "networkImage", void 0);
Ne([f()], Le.prototype, "isSupported", void 0);
let Cs = class extends Le {};
Cs = Ne([S("w3m-account-button")], Cs);
let qo = class extends Le {};
qo = Ne([S("appkit-account-button")], qo);
const Ed = xe`
  :host {
    display: block;
    width: max-content;
  }
`;
var pt = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
class nt extends A {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.balance = void 0),
      (this.size = void 0),
      (this.label = void 0),
      (this.loadingLabel = void 0),
      (this.charsStart = 4),
      (this.charsEnd = 6),
      (this.namespace = void 0);
  }
  firstUpdated() {
    var e, n;
    (this.caipAddress = this.namespace
      ? (n =
          (e = E.state.chains.get(this.namespace)) == null
            ? void 0
            : e.accountState) == null
        ? void 0
        : n.caipAddress
      : E.state.activeCaipAddress),
      this.namespace
        ? this.unsubscribe.push(
            E.subscribeChainProp(
              "accountState",
              (o) => {
                this.caipAddress = o == null ? void 0 : o.caipAddress;
              },
              this.namespace
            )
          )
        : this.unsubscribe.push(
            E.subscribeKey("activeCaipAddress", (o) => (this.caipAddress = o))
          );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return this.caipAddress
      ? c`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${N(this.balance)}
            .charsStart=${N(this.charsStart)}
            .charsEnd=${N(this.charsEnd)}
            namespace=${N(this.namespace)}
          >
          </appkit-account-button>
        `
      : c`
          <appkit-connect-button
            size=${N(this.size)}
            label=${N(this.label)}
            loadingLabel=${N(this.loadingLabel)}
            namespace=${N(this.namespace)}
          ></appkit-connect-button>
        `;
  }
}
nt.styles = Ed;
pt([d({ type: Boolean })], nt.prototype, "disabled", void 0);
pt([d()], nt.prototype, "balance", void 0);
pt([d()], nt.prototype, "size", void 0);
pt([d()], nt.prototype, "label", void 0);
pt([d()], nt.prototype, "loadingLabel", void 0);
pt([d()], nt.prototype, "charsStart", void 0);
pt([d()], nt.prototype, "charsEnd", void 0);
pt([d()], nt.prototype, "namespace", void 0);
pt([f()], nt.prototype, "caipAddress", void 0);
let xs = class extends nt {};
xs = pt([S("w3m-button")], xs);
let Go = class extends nt {};
Go = pt([S("appkit-button")], Go);
const kd = U`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  button[data-size='sm'] {
    padding: ${({ spacing: t }) => t[2]};
  }

  button[data-size='md'] {
    padding: ${({ spacing: t }) => t[3]};
  }

  button[data-size='lg'] {
    padding: ${({ spacing: t }) => t[4]};
  }

  button[data-variant='primary'] {
    background: ${({ tokens: t }) => t.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({ borderRadius: t }) => t[32]};
    padding: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({ borderRadius: t }) => t[20]};
    padding: ${({ spacing: t }) => t[3]} ${({ spacing: t }) => t[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({ borderRadius: t }) => t[16]};
    padding: ${({ spacing: t }) => t[4]} ${({ spacing: t }) => t[5]};
  }
`;
var go = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let _n = class extends A {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.variant = "primary"),
      (this.loading = !1),
      (this.text = "Connect Wallet");
  }
  render() {
    return c`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `;
  }
  contentTemplate() {
    const e = { lg: "lg-regular", md: "md-regular", sm: "sm-regular" },
      n = { primary: "invert", secondary: "accent-primary" };
    return this.loading
      ? c`<wui-loading-spinner
      color=${n[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`
      : c` <wui-text variant=${e[this.size]} color=${n[this.variant]}>
        ${this.text}
      </wui-text>`;
  }
};
_n.styles = [K, ie, kd];
go([d()], _n.prototype, "size", void 0);
go([d()], _n.prototype, "variant", void 0);
go([d({ type: Boolean })], _n.prototype, "loading", void 0);
go([d()], _n.prototype, "text", void 0);
_n = go([S("wui-connect-button")], _n);
var cn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
class ln extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.size = "md"),
      (this.label = "Connect Wallet"),
      (this.loadingLabel = "Connecting..."),
      (this.open = ye.state.open),
      (this.loading = this.namespace
        ? ye.state.loadingNamespaceMap.get(this.namespace)
        : ye.state.loading),
      this.unsubscribe.push(
        ye.subscribe((e) => {
          (this.open = e.open),
            (this.loading = this.namespace
              ? e.loadingNamespaceMap.get(this.namespace)
              : e.loading);
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      <wui-connect-button
        size=${N(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${
          this.namespace ? `-${this.namespace}` : ""
        }`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    this.open
      ? ye.close()
      : this.loading || ye.open({ view: "Connect", namespace: this.namespace });
  }
}
cn([d()], ln.prototype, "size", void 0);
cn([d()], ln.prototype, "label", void 0);
cn([d()], ln.prototype, "loadingLabel", void 0);
cn([d()], ln.prototype, "namespace", void 0);
cn([f()], ln.prototype, "open", void 0);
cn([f()], ln.prototype, "loading", void 0);
let $s = class extends ln {};
$s = cn([S("w3m-connect-button")], $s);
let Yo = class extends ln {};
Yo = cn([S("appkit-connect-button")], Yo);
const _d = U`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ borderRadius: t }) => t[2]};
    padding: ${({ spacing: t }) => t[1]} !important;
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({ spacing: t }) => t[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({ tokens: t }) => t.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({ tokens: t }) => t.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({ tokens: t }) => t.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({ tokens: t }) => t.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({ tokens: t }) => t.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({ tokens: t }) => t.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({ tokens: t }) => t.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({ tokens: t }) => t.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;
var bo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let An = class extends A {
  constructor() {
    super(...arguments),
      (this.icon = "copy"),
      (this.size = "md"),
      (this.padding = "1"),
      (this.color = "default");
  }
  render() {
    return (
      (this.dataset.padding = this.padding),
      (this.dataset.color = this.color),
      c`
      <wui-icon size=${N(this.size)} name=${
        this.icon
      } color="inherit"></wui-icon>
    `
    );
  }
};
An.styles = [K, ie, _d];
bo([d()], An.prototype, "icon", void 0);
bo([d()], An.prototype, "size", void 0);
bo([d()], An.prototype, "padding", void 0);
bo([d()], An.prototype, "color", void 0);
An = bo([S("wui-icon-box")], An);
const Ad = U`
  :host {
    display: block;
  }

  button {
    border-radius: ${({ borderRadius: t }) => t[32]};
    display: flex;
    gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]}
      ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[1]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({ borderRadius: t }) => t[32]};
  }
`;
var vo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let In = class extends A {
  constructor() {
    super(...arguments),
      (this.imageSrc = void 0),
      (this.isUnsupportedChain = void 0),
      (this.disabled = !1),
      (this.size = "lg");
  }
  render() {
    const e = { sm: "sm-regular", md: "md-regular", lg: "lg-regular" };
    return c`
      <button data-size=${
        this.size
      } data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${e[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  visualTemplate() {
    return this.isUnsupportedChain
      ? c` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `
      : this.imageSrc
      ? c`<wui-image src=${this.imageSrc}></wui-image>`
      : c` <wui-icon-box color="default" icon="networkPlaceholder"></wui-icon-box> `;
  }
};
In.styles = [K, ie, Ad];
vo([d()], In.prototype, "imageSrc", void 0);
vo([d({ type: Boolean })], In.prototype, "isUnsupportedChain", void 0);
vo([d({ type: Boolean })], In.prototype, "disabled", void 0);
vo([d()], In.prototype, "size", void 0);
In = vo([S("wui-network-button")], In);
const Id = xe`
  :host {
    display: block;
    width: max-content;
  }
`;
var Ut = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
class Et extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.network = E.state.activeCaipNetwork),
      (this.networkImage = ee.getNetworkImage(this.network)),
      (this.caipAddress = E.state.activeCaipAddress),
      (this.loading = ye.state.loading),
      (this.isSupported = B.state.allowUnsupportedChain
        ? !0
        : E.state.activeChain
        ? E.checkIfSupportedNetwork(E.state.activeChain)
        : !0),
      this.unsubscribe.push(
        $n.subscribeNetworkImages(() => {
          this.networkImage = ee.getNetworkImage(this.network);
        }),
        E.subscribeKey("activeCaipAddress", (e) => {
          this.caipAddress = e;
        }),
        E.subscribeKey("activeCaipNetwork", (e) => {
          var n;
          (this.network = e),
            (this.networkImage = ee.getNetworkImage(e)),
            (this.isSupported =
              e != null && e.chainNamespace
                ? E.checkIfSupportedNetwork(e.chainNamespace)
                : !0),
            ee.fetchNetworkImage(
              (n = e == null ? void 0 : e.assets) == null ? void 0 : n.imageId
            );
        }),
        ye.subscribeKey("loading", (e) => (this.loading = e))
      );
  }
  firstUpdated() {
    var e, n;
    ee.fetchNetworkImage(
      (n = (e = this.network) == null ? void 0 : e.assets) == null
        ? void 0
        : n.imageId
    );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.network
      ? E.checkIfSupportedNetwork(this.network.chainNamespace)
      : !0;
    return c`
      <wui-network-button
        .disabled=${!!(this.disabled || this.loading)}
        .isUnsupportedChain=${B.state.allowUnsupportedChain ? !1 : !e}
        imageSrc=${N(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
  }
  getLabel() {
    return this.network
      ? !this.isSupported && !B.state.allowUnsupportedChain
        ? "Switch Network"
        : this.network.name
      : this.label
      ? this.label
      : this.caipAddress
      ? "Unknown Network"
      : "Select Network";
  }
  onClick() {
    this.loading ||
      (te.sendEvent({ type: "track", event: "CLICK_NETWORKS" }),
      ye.open({ view: "Networks" }));
  }
}
Et.styles = Id;
Ut([d({ type: Boolean })], Et.prototype, "disabled", void 0);
Ut([d({ type: String })], Et.prototype, "label", void 0);
Ut([f()], Et.prototype, "network", void 0);
Ut([f()], Et.prototype, "networkImage", void 0);
Ut([f()], Et.prototype, "caipAddress", void 0);
Ut([f()], Et.prototype, "loading", void 0);
Ut([f()], Et.prototype, "isSupported", void 0);
let Ss = class extends Et {};
Ss = Ut([S("w3m-network-button")], Ss);
let Qo = class extends Et {};
Qo = Ut([S("appkit-network-button")], Qo);
const Ap = /[.*+?^${}()|[\]\\]/gu,
  Ip = /[0-9,.]/u,
  Td = "https://reown.com",
  Pd = U`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;
var Rd = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Es = class extends A {
  render() {
    return c`
      <a
        data-testid="ux-branding-reown"
        href=${Td}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01", "0", "3", "0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `;
  }
};
Es.styles = [K, ie, Pd];
Es = Rd([S("wui-ux-by-reown")], Es);
const Od = U`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({ spacing: t }) => t[3]};
  }

  a {
    text-decoration: none;
    color: ${({ tokens: t }) => t.core.textAccentPrimary};
    font-weight: 500;
  }
`;
var zc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Xo = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.unsubscribe.push(
        B.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    var i;
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state,
      o = (i = B.state.features) == null ? void 0 : i.legalCheckbox;
    return (!e && !n) || o
      ? c`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(
          !0
        )} </wui-flex>
      `
      : c`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4", "3", "3", "3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state;
    return e && n ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = B.state;
    return e
      ? c`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`
      : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = B.state;
    return e
      ? c`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`
      : null;
  }
  reownBrandingTemplate(e = !1) {
    var n;
    return (n = this.remoteFeatures) != null && n.reownBranding
      ? e
        ? c`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`
        : c`<wui-ux-by-reown></wui-ux-by-reown>`
      : null;
  }
};
Xo.styles = [Od];
zc([f()], Xo.prototype, "remoteFeatures", void 0);
Xo = zc([S("w3m-legal-footer")], Xo);
const Wd = U`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({ spacing: t }) => t[2]};
    column-gap: ${({ spacing: t }) => t[1]};
    border-radius: ${({ borderRadius: t }) => t[1]};
    padding: 0 ${({ spacing: t }) => t[1]};
    border-radius: ${({ spacing: t }) => t[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({ tokens: t }) => t.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var yo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Nd = { sm: "sm-medium", md: "md-medium" },
  Ld = { accent: "accent-primary", secondary: "secondary" };
let Tn = class extends A {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.disabled = !1),
      (this.variant = "accent"),
      (this.icon = void 0);
  }
  render() {
    return c`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${Ld[this.variant]}
          variant=${Nd[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `;
  }
  iconTemplate() {
    return this.icon
      ? c`<wui-icon name=${this.icon} size="sm"></wui-icon>`
      : null;
  }
};
Tn.styles = [K, ie, Wd];
yo([d()], Tn.prototype, "size", void 0);
yo([d({ type: Boolean })], Tn.prototype, "disabled", void 0);
yo([d()], Tn.prototype, "variant", void 0);
yo([d()], Tn.prototype, "icon", void 0);
Tn = yo([S("wui-link")], Tn);
const Dd = xe``;
var Md = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let ks = class extends A {
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state;
    return !e && !n
      ? null
      : c`
      <wui-flex
        .padding=${["4", "3", "3", "3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
  }
  howDoesItWorkTemplate() {
    return c` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
  }
  onWhatIsBuy() {
    te.sendEvent({
      type: "track",
      event: "SELECT_WHAT_IS_A_BUY",
      properties: {
        isSmartAccount:
          xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      L.push("WhatIsABuy");
  }
};
ks.styles = [Dd];
ks = Md([S("w3m-onramp-providers-footer")], ks);
const si = {
    getTabsByNamespace(t) {
      var n;
      return !!t && t === Q.CHAIN.EVM
        ? ((n = B.state.remoteFeatures) == null ? void 0 : n.activity) === !1
          ? Mo.ACCOUNT_TABS.filter((o) => o.label !== "Activity")
          : Mo.ACCOUNT_TABS
        : [];
    },
    isValidReownName(t) {
      return /^[a-zA-Z0-9]+$/gu.test(t);
    },
    isValidEmail(t) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(t);
    },
    validateReownName(t) {
      return t
        .replace(/\^/gu, "")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/gu, "");
    },
    hasFooter() {
      var e;
      const t = L.state.view;
      if (Mo.VIEWS_WITH_LEGAL_FOOTER.includes(t)) {
        const { termsConditionsUrl: n, privacyPolicyUrl: o } = B.state,
          r = (e = B.state.features) == null ? void 0 : e.legalCheckbox;
        return !((!n && !o) || r);
      }
      return Mo.VIEWS_WITH_DEFAULT_FOOTER.includes(t);
    },
  },
  Bd = U`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;
var Qs = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let gi = class extends A {
  constructor() {
    super(...arguments),
      (this.resizeObserver = void 0),
      (this.unsubscribe = []),
      (this.status = "hide"),
      (this.view = L.state.view);
  }
  firstUpdated() {
    (this.status = si.hasFooter() ? "show" : "hide"),
      this.unsubscribe.push(
        L.subscribeKey("view", (e) => {
          (this.view = e),
            (this.status = si.hasFooter() ? "show" : "hide"),
            this.status === "hide" &&
              document.documentElement.style.setProperty(
                "--apkt-footer-height",
                "0px"
              );
        })
      ),
      (this.resizeObserver = new ResizeObserver((e) => {
        for (const n of e)
          if (n.target === this.getWrapper()) {
            const o = `${n.contentRect.height}px`;
            document.documentElement.style.setProperty(
              "--apkt-footer-height",
              o
            );
          }
      })),
      this.resizeObserver.observe(this.getWrapper());
  }
  render() {
    return c`
      <div class="container" status=${
        this.status
      }>${this.templatePageContainer()}</div>
    `;
  }
  templatePageContainer() {
    return si.hasFooter() ? c` ${this.templateFooter()}` : null;
  }
  templateFooter() {
    switch (this.view) {
      case "Networks":
        return this.templateNetworksFooter();
      case "Connect":
      case "ConnectWallets":
      case "OnRampFiatSelect":
      case "OnRampTokenSelect":
        return c`<w3m-legal-footer></w3m-legal-footer>`;
      case "OnRampProviders":
        return c`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;
      default:
        return null;
    }
  }
  templateNetworksFooter() {
    return c` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`;
  }
  onNetworkHelp() {
    te.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" }),
      L.push("WhatIsANetwork");
  }
  getWrapper() {
    var e;
    return (e = this.shadowRoot) == null
      ? void 0
      : e.querySelector("div.container");
  }
};
gi.styles = [Bd];
Qs([f()], gi.prototype, "status", void 0);
Qs([f()], gi.prototype, "view", void 0);
gi = Qs([S("w3m-footer")], gi);
const jd = U`
  :host {
    display: block;
    width: inherit;
  }
`;
var Xs = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let bi = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.viewState = L.state.view),
      (this.history = L.state.history.join(",")),
      this.unsubscribe.push(
        L.subscribeKey("view", () => {
          (this.history = L.state.history.join(",")),
            document.documentElement.style.setProperty(
              "--apkt-duration-dynamic",
              "var(--apkt-durations-lg)"
            );
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()),
      document.documentElement.style.setProperty(
        "--apkt-duration-dynamic",
        "0s"
      );
  }
  render() {
    return c`${this.templatePageContainer()}`;
  }
  templatePageContainer() {
    return c`<w3m-router-container
      history=${this.history}
      .setView=${() => {
        this.viewState = L.state.view;
      }}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`;
  }
  viewTemplate(e) {
    switch (e) {
      case "AccountSettings":
        return c`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "Account":
        return c`<w3m-account-view></w3m-account-view>`;
      case "AllWallets":
        return c`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return c`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return c`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return c`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return c`<w3m-connect-view></w3m-connect-view>`;
      case "Create":
        return c`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return c`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingWalletConnectBasic":
        return c`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
      case "ConnectingExternal":
        return c`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return c`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return c`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return c`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return c`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "DataCapture":
        return c`<w3m-data-capture-view></w3m-data-capture-view>`;
      case "DataCaptureOtpConfirm":
        return c`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;
      case "Downloads":
        return c`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailLogin":
        return c`<w3m-email-login-view></w3m-email-login-view>`;
      case "EmailVerifyOtp":
        return c`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return c`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "GetWallet":
        return c`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Networks":
        return c`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return c`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "ProfileWallets":
        return c`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;
      case "Transactions":
        return c`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return c`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampTokenSelect":
        return c`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return c`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return c`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpdateEmailWallet":
        return c`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return c`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return c`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return c`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "Swap":
        return c`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return c`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return c`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return c`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return c`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return c`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WalletSendConfirmed":
        return c`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;
      case "WhatIsABuy":
        return c`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WalletReceive":
        return c`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return c`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "WhatIsAWallet":
        return c`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "ConnectingMultiChain":
        return c`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
      case "WhatIsANetwork":
        return c`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "ConnectingFarcaster":
        return c`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
      case "SwitchActiveChain":
        return c`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
      case "RegisterAccountName":
        return c`<w3m-register-account-name-view></w3m-register-account-name-view>`;
      case "RegisterAccountNameSuccess":
        return c`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
      case "SmartSessionCreated":
        return c`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
      case "SmartSessionList":
        return c`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
      case "SIWXSignMessage":
        return c`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
      case "Pay":
        return c`<w3m-pay-view></w3m-pay-view>`;
      case "PayLoading":
        return c`<w3m-pay-loading-view></w3m-pay-loading-view>`;
      case "FundWallet":
        return c`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;
      case "PayWithExchange":
        return c`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;
      case "PayWithExchangeSelectAsset":
        return c`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;
      default:
        return c`<w3m-connect-view></w3m-connect-view>`;
    }
  }
};
bi.styles = [jd];
Xs([f()], bi.prototype, "viewState", void 0);
Xs([f()], bi.prototype, "history", void 0);
bi = Xs([S("w3m-router")], bi);
const zd = U`
  button {
    background-color: transparent;
    padding: ${({ spacing: t }) => t[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens: t }) => t.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({ borderRadius: t }) => t[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;
var Ti = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let tn = class extends A {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.disabled = !1),
      (this.icon = "copy"),
      (this.iconColor = "default"),
      (this.variant = "accent");
  }
  render() {
    const e = {
      accent: "accent-primary",
      primary: "inverse",
      secondary: "default",
    };
    return c`
      <button data-variant=${this.variant} ?disabled=${
      this.disabled
    } data-size=${this.size}>
        <wui-icon
          color=${e[this.variant] || this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `;
  }
};
tn.styles = [K, ie, zd];
Ti([d()], tn.prototype, "size", void 0);
Ti([d({ type: Boolean })], tn.prototype, "disabled", void 0);
Ti([d()], tn.prototype, "icon", void 0);
Ti([d()], tn.prototype, "iconColor", void 0);
Ti([d()], tn.prototype, "variant", void 0);
tn = Ti([S("wui-icon-link")], tn);
const Vd = U`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    transition:
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      scale ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({ tokens: t }) => t.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var kt = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Je = class extends A {
  constructor() {
    super(...arguments),
      (this.imageSrc = "google"),
      (this.loading = !1),
      (this.disabled = !1),
      (this.rightIcon = !0),
      (this.rounded = !1),
      (this.fullSize = !1);
  }
  render() {
    return (
      (this.dataset.rounded = this.rounded ? "true" : "false"),
      c`
      <button
        ?disabled=${this.loading ? !0 : !!this.disabled}
        data-loading=${this.loading}
        tabindex=${N(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `
    );
  }
  templateLeftIcon() {
    return this.icon
      ? c`<wui-image
        icon=${this.icon}
        iconColor=${N(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`
      : c`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`;
  }
  templateRightIcon() {
    return this.rightIcon
      ? this.loading
        ? c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
        : c`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`
      : null;
  }
};
Je.styles = [K, ie, Vd];
kt([d()], Je.prototype, "imageSrc", void 0);
kt([d()], Je.prototype, "icon", void 0);
kt([d()], Je.prototype, "iconColor", void 0);
kt([d({ type: Boolean })], Je.prototype, "loading", void 0);
kt([d()], Je.prototype, "tabIdx", void 0);
kt([d({ type: Boolean })], Je.prototype, "disabled", void 0);
kt([d({ type: Boolean })], Je.prototype, "rightIcon", void 0);
kt([d({ type: Boolean })], Je.prototype, "rounded", void 0);
kt([d({ type: Boolean })], Je.prototype, "fullSize", void 0);
Je = kt([S("wui-list-item")], Je);
const Ud = U`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({ spacing: t }) => t[2]};
    transition:
      scale ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-1"]},
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      border-radius ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({ borderRadius: t }) => t[2]};
    padding: 0 ${({ spacing: t }) => t[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({ borderRadius: t }) => t[3]};
    padding: 0 ${({ spacing: t }) => t[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({ borderRadius: t }) => t[4]};
    padding: 0 ${({ spacing: t }) => t[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({ tokens: t }) => t.core.backgroundAccentPrimary};
    color: ${({ tokens: t }) => t.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
    color: ${({ tokens: t }) => t.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({ tokens: t }) => t.theme.backgroundInvert};
    color: ${({ tokens: t }) => t.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({ tokens: t }) => t.theme.borderSecondary};
    color: ${({ tokens: t }) => t.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    color: ${({ tokens: t }) => t.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({ tokens: t }) => t.core.textError};
    color: ${({ tokens: t }) => t.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({ tokens: t }) => t.core.backgroundError};
    color: ${({ tokens: t }) => t.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;
var Fn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Fd = {
    lg: "lg-regular-mono",
    md: "md-regular-mono",
    sm: "sm-regular-mono",
  },
  Hd = { lg: "md", md: "md", sm: "sm" };
let Nt = class extends A {
  constructor() {
    super(...arguments),
      (this.size = "lg"),
      (this.disabled = !1),
      (this.fullWidth = !1),
      (this.loading = !1),
      (this.variant = "accent-primary");
  }
  render() {
    this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
     `;
    const e = this.textVariant ?? Fd[this.size];
    return c`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${
      this.disabled
    }>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
  loadingTemplate() {
    if (this.loading) {
      const e = Hd[this.size],
        n =
          this.variant === "neutral-primary" ||
          this.variant === "accent-primary"
            ? "invert"
            : "primary";
      return c`<wui-loading-spinner color=${n} size=${e}></wui-loading-spinner>`;
    }
    return null;
  }
};
Nt.styles = [K, ie, Ud];
Fn([d()], Nt.prototype, "size", void 0);
Fn([d({ type: Boolean })], Nt.prototype, "disabled", void 0);
Fn([d({ type: Boolean })], Nt.prototype, "fullWidth", void 0);
Fn([d({ type: Boolean })], Nt.prototype, "loading", void 0);
Fn([d()], Nt.prototype, "variant", void 0);
Fn([d()], Nt.prototype, "textVariant", void 0);
Nt = Fn([S("wui-button")], Nt);
const Zd = U`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: t }) => t[4]};
    padding: ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[4]};
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({ spacing: t }) => t[2]};
    color: ${({ tokens: t }) => t.theme.textInvert};
    background-color: ${({ tokens: t }) => t.core.backgroundAccentPrimary};
    border-radius: ${({ borderRadius: t }) => t[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.core.foregroundAccent020};
    }
  }
`;
var br = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let vi = class extends A {
  constructor() {
    super(...arguments),
      (this.label = ""),
      (this.description = ""),
      (this.icon = "wallet");
  }
  render() {
    return c`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `;
  }
};
vi.styles = [K, ie, Zd];
br([d()], vi.prototype, "label", void 0);
br([d()], vi.prototype, "description", void 0);
br([d()], vi.prototype, "icon", void 0);
vi = br([S("wui-notice-card")], vi);
var Vc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let _s = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.socialProvider = Xe.getConnectedSocialProvider()),
      (this.socialUsername = Xe.getConnectedSocialUsername()),
      (this.namespace = E.state.activeChain),
      this.unsubscribe.push(
        E.subscribeKey("activeChain", (e) => {
          this.namespace = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = z.getConnectorId(this.namespace),
      n = z.getAuthConnector();
    if (!n || e !== Q.CONNECTOR_ID.AUTH)
      return (this.style.cssText = "display: none"), null;
    const o = n.provider.getEmail() ?? "";
    return !o && !this.socialUsername
      ? ((this.style.cssText = "display: none"), null)
      : c`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider ?? "mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
          this.onGoToUpdateEmail(o, this.socialProvider);
        }}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(
          o
        )}</wui-text>
      </wui-list-item>
    `;
  }
  onGoToUpdateEmail(e, n) {
    n || L.push("UpdateEmailWallet", { email: e, redirectView: "Account" });
  }
  getAuthName(e) {
    return this.socialUsername
      ? this.socialProvider === "discord" && this.socialUsername.endsWith("0")
        ? this.socialUsername.slice(0, -1)
        : this.socialUsername
      : e.length > 30
      ? `${e.slice(0, -3)}...`
      : e;
  }
};
Vc([f()], _s.prototype, "namespace", void 0);
_s = Vc([S("w3m-account-auth-button")], _s);
var _t = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let et = class extends A {
  constructor() {
    super(),
      (this.usubscribe = []),
      (this.networkImages = $n.state.networkImages),
      (this.address = Y.state.address),
      (this.profileImage = Y.state.profileImage),
      (this.profileName = Y.state.profileName),
      (this.network = E.state.activeCaipNetwork),
      (this.disconnecting = !1),
      (this.loading = !1),
      (this.switched = !1),
      (this.text = ""),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.usubscribe.push(
        Y.subscribe((e) => {
          e.address &&
            ((this.address = e.address),
            (this.profileImage = e.profileImage),
            (this.profileName = e.profileName));
        }),
        E.subscribeKey("activeCaipNetwork", (e) => {
          e != null && e.id && (this.network = e);
        }),
        B.subscribeKey("remoteFeatures", (e) => {
          this.remoteFeatures = e;
        })
      );
  }
  disconnectedCallback() {
    this.usubscribe.forEach((e) => e());
  }
  render() {
    var n, o, r;
    if (!this.address)
      throw new Error("w3m-account-settings-view: No account provided");
    const e =
      this.networkImages[
        ((o = (n = this.network) == null ? void 0 : n.assets) == null
          ? void 0
          : o.imageId) ?? ""
      ];
    return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0", "5", "3", "5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${N(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${de.getTruncateString({
                string: this.address,
                charsStart: 4,
                charsEnd: 6,
                truncate: "middle",
              })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[
          "6",
          "4",
          "3",
          "4",
        ]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${N(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${((r = this.network) == null ? void 0 : r.name) ?? "Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  chooseNameButtonTemplate() {
    var i;
    const e = (i = this.network) == null ? void 0 : i.chainNamespace,
      n = z.getConnectorId(e),
      o = z.getAuthConnector();
    return !E.checkIfNamesSupported() ||
      !o ||
      n !== Q.CONNECTOR_ID.AUTH ||
      this.profileName
      ? null
      : c`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    var r;
    const e = z.getConnectorId(
        (r = this.network) == null ? void 0 : r.chainNamespace
      ),
      n = z.getAuthConnector(),
      { origin: o } = location;
    return !n || e !== Q.CONNECTOR_ID.AUTH || o.includes(Ce.SECURE_SITE)
      ? null
      : c`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  isAllowedNetworkSwitch() {
    const e = E.getAllRequestedCaipNetworks(),
      n = e ? e.length > 1 : !1,
      o =
        e == null
          ? void 0
          : e.find(({ id: r }) => {
              var i;
              return r === ((i = this.network) == null ? void 0 : i.id);
            });
    return n || !o;
  }
  onCopyAddress() {
    try {
      this.address &&
        (j.copyToClopboard(this.address), re.showSuccess("Address copied"));
    } catch {
      re.showError("Failed to copy");
    }
  }
  togglePreferredAccountBtnTemplate() {
    var i;
    const e = (i = this.network) == null ? void 0 : i.chainNamespace,
      n = E.checkIfSmartAccountEnabled(),
      o = z.getConnectorId(e);
    return !z.getAuthConnector() || o !== Q.CONNECTOR_ID.AUTH || !n
      ? null
      : (this.switched ||
          (this.text =
            xt(e) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT
              ? "Switch to your EOA"
              : "Switch to your Smart Account"),
        c`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `);
  }
  onChooseName() {
    L.push("ChooseAccountName");
  }
  async changePreferredAccountType() {
    var i;
    const e = (i = this.network) == null ? void 0 : i.chainNamespace,
      n = E.checkIfSmartAccountEnabled(),
      o =
        xt(e) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT || !n
          ? Fe.ACCOUNT_TYPES.EOA
          : Fe.ACCOUNT_TYPES.SMART_ACCOUNT;
    z.getAuthConnector() &&
      ((this.loading = !0),
      await F.setPreferredAccountType(o, e),
      (this.text =
        o === Fe.ACCOUNT_TYPES.SMART_ACCOUNT
          ? "Switch to your EOA"
          : "Switch to your Smart Account"),
      (this.switched = !0),
      Pl.resetSend(),
      (this.loading = !1),
      this.requestUpdate());
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() && L.push("Networks");
  }
  async onDisconnect() {
    var e, n;
    try {
      this.disconnecting = !0;
      const o = (e = this.network) == null ? void 0 : e.chainNamespace,
        i = F.getConnections(o).length > 0,
        s = o && z.state.activeConnectorIds[o],
        a = (n = this.remoteFeatures) == null ? void 0 : n.multiWallet;
      await F.disconnect(a ? { id: s, namespace: o } : {}),
        i && a && (L.push("ProfileWallets"), re.showSuccess("Wallet deleted"));
    } catch {
      te.sendEvent({
        type: "track",
        event: "DISCONNECT_ERROR",
        properties: { message: "Failed to disconnect" },
      }),
        re.showError("Failed to disconnect");
    } finally {
      this.disconnecting = !1;
    }
  }
  onGoToUpgradeView() {
    te.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" }),
      L.push("UpgradeEmailWallet");
  }
};
_t([f()], et.prototype, "address", void 0);
_t([f()], et.prototype, "profileImage", void 0);
_t([f()], et.prototype, "profileName", void 0);
_t([f()], et.prototype, "network", void 0);
_t([f()], et.prototype, "disconnecting", void 0);
_t([f()], et.prototype, "loading", void 0);
_t([f()], et.prototype, "switched", void 0);
_t([f()], et.prototype, "text", void 0);
_t([f()], et.prototype, "remoteFeatures", void 0);
et = _t([S("w3m-account-settings-view")], et);
const Kd = U`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]};
    column-gap: ${({ spacing: t }) => t[1]};
    color: ${({ tokens: t }) => t.theme.textSecondary};
    border-radius: ${({ borderRadius: t }) => t[20]};
    background-color: transparent;
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens: t }) => t.theme.textPrimary};
    background-color: ${({ tokens: t }) => t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens: t }) => t.theme.textPrimary};
    }
  }
`;
var Co = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const qd = { lg: "lg-regular", md: "md-regular", sm: "sm-regular" },
  Gd = { lg: "md", md: "sm", sm: "sm" };
let Pn = class extends A {
  constructor() {
    super(...arguments),
      (this.icon = "mobile"),
      (this.size = "md"),
      (this.label = ""),
      (this.active = !1);
  }
  render() {
    return c`
      <button data-active=${this.active}>
        ${
          this.icon
            ? c`<wui-icon size=${Gd[this.size]} name=${this.icon}></wui-icon>`
            : ""
        }
        <wui-text variant=${qd[this.size]}> ${this.label} </wui-text>
      </button>
    `;
  }
};
Pn.styles = [K, ie, Kd];
Co([d()], Pn.prototype, "icon", void 0);
Co([d()], Pn.prototype, "size", void 0);
Co([d()], Pn.prototype, "label", void 0);
Co([d({ type: Boolean })], Pn.prototype, "active", void 0);
Pn = Co([S("wui-tab-item")], Pn);
const Yd = U`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    border-radius: ${({ borderRadius: t }) => t[32]};
    padding: ${({ spacing: t }) => t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;
var xo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Rn = class extends A {
  constructor() {
    super(...arguments),
      (this.tabs = []),
      (this.onTabChange = () => null),
      (this.size = "md"),
      (this.activeTab = 0);
  }
  render() {
    return (
      (this.dataset.size = this.size),
      this.tabs.map((e, n) => {
        var r;
        const o = n === this.activeTab;
        return c`
        <wui-tab-item
          @click=${() => this.onTabClick(n)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(r = e.label) == null ? void 0 : r.toLowerCase()}"
        ></wui-tab-item>
      `;
      })
    );
  }
  onTabClick(e) {
    (this.activeTab = e), this.onTabChange(e);
  }
};
Rn.styles = [K, ie, Yd];
xo([d({ type: Array })], Rn.prototype, "tabs", void 0);
xo([d()], Rn.prototype, "onTabChange", void 0);
xo([d()], Rn.prototype, "size", void 0);
xo([f()], Rn.prototype, "activeTab", void 0);
Rn = xo([S("wui-tabs")], Rn);
const Qd = U`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ spacing: t }) => t[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({ tokens: t }) => t.core.foregroundAccent010};
    color: ${({ tokens: t }) => t.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
    color: ${({ tokens: t }) => t.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({ tokens: t }) => t.core.backgroundWarning};
    color: ${({ tokens: t }) => t.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({ tokens: t }) => t.core.backgroundError};
    color: ${({ tokens: t }) => t.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({ spacing: t }) => t[1]};
    border-radius: ${({ borderRadius: t }) => t[1]};
  }
`;
var vr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let yi = class extends A {
  constructor() {
    super(...arguments),
      (this.variant = "accent"),
      (this.size = "md"),
      (this.icon = void 0);
  }
  render() {
    (this.dataset.variant = this.variant), (this.dataset.size = this.size);
    const e = this.size === "md" ? "md-medium" : "sm-medium",
      n = this.size === "md" ? "md" : "sm";
    return c`
      ${this.icon ? c`<wui-icon size=${n} name=${this.icon}></wui-icon>` : null}
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
yi.styles = [K, Qd];
vr([d()], yi.prototype, "variant", void 0);
vr([d()], yi.prototype, "size", void 0);
vr([d()], yi.prototype, "icon", void 0);
yi = vr([S("wui-tag")], yi);
const Xd = U`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[4]};
    column-gap: ${({ spacing: t }) => t[1]};
    background-color: transparent;
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({ spacing: t }) => t[6]};
    height: ${({ spacing: t }) => t[6]};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({ tokens: t }) => t.core.textSuccess};
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }
`;
var At = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let tt = class extends A {
  constructor() {
    super(...arguments),
      (this.address = ""),
      (this.profileName = ""),
      (this.alt = ""),
      (this.imageSrc = ""),
      (this.icon = void 0),
      (this.iconSize = "md"),
      (this.loading = !1),
      (this.charsStart = 4),
      (this.charsEnd = 6);
  }
  render() {
    return c`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `;
  }
  leftImageTemplate() {
    const e = this.icon
      ? c`<wui-icon
          size=${N(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`
      : c`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;
    return c`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `;
  }
  textTemplate() {
    return c`
      <wui-text variant="lg-regular" color="primary">
        ${de.getTruncateString({
          string: this.profileName || this.address,
          charsStart: this.profileName ? 16 : this.charsStart,
          charsEnd: this.profileName ? 0 : this.charsEnd,
          truncate: this.profileName ? "end" : "middle",
        })}
      </wui-text>
    `;
  }
  rightImageTemplate() {
    return c`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`;
  }
};
tt.styles = [K, ie, Xd];
At([d()], tt.prototype, "address", void 0);
At([d()], tt.prototype, "profileName", void 0);
At([d()], tt.prototype, "alt", void 0);
At([d()], tt.prototype, "imageSrc", void 0);
At([d()], tt.prototype, "icon", void 0);
At([d()], tt.prototype, "iconSize", void 0);
At([d({ type: Boolean })], tt.prototype, "loading", void 0);
At([d({ type: Number })], tt.prototype, "charsStart", void 0);
At([d({ type: Number })], tt.prototype, "charsEnd", void 0);
tt = At([S("wui-wallet-switch")], tt);
const Jd = U`
  wui-icon-link {
    margin-right: calc(${({ spacing: t }) => t[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({ spacing: t }) => t[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: t }) => t[3]};
    height: 48px;
    padding: ${({ spacing: t }) => t[2]};
    padding-right: ${({ spacing: t }) => t[3]};
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.theme.foregroundPrimary};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[6]};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({ tokens: t }) => t.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({ spacing: t }) => t[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({ durations: t }) => t.md}
        ${({ easings: t }) => t["ease-out-power-1"]},
      opacity ${({ durations: t }) => t.md} ${({ easings: t }) =>
  t["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;
var it = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let De = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.caipAddress = Y.state.caipAddress),
      (this.address = j.getPlainAddress(Y.state.caipAddress)),
      (this.profileImage = Y.state.profileImage),
      (this.profileName = Y.state.profileName),
      (this.disconnecting = !1),
      (this.balance = Y.state.balance),
      (this.balanceSymbol = Y.state.balanceSymbol),
      (this.features = B.state.features),
      (this.remoteFeatures = B.state.remoteFeatures),
      (this.namespace = E.state.activeChain),
      (this.activeConnectorIds = z.state.activeConnectorIds),
      this.unsubscribe.push(
        Y.subscribeKey("caipAddress", (e) => {
          (this.address = j.getPlainAddress(e)), (this.caipAddress = e);
        }),
        Y.subscribeKey("balance", (e) => (this.balance = e)),
        Y.subscribeKey("balanceSymbol", (e) => (this.balanceSymbol = e)),
        Y.subscribeKey("profileName", (e) => (this.profileName = e)),
        Y.subscribeKey("profileImage", (e) => (this.profileImage = e)),
        B.subscribeKey("features", (e) => (this.features = e)),
        B.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e)),
        z.subscribeKey("activeConnectorIds", (e) => {
          this.activeConnectorIds = e;
        }),
        E.subscribeKey("activeChain", (e) => (this.namespace = e)),
        E.subscribeKey("activeCaipNetwork", (e) => {
          e != null &&
            e.chainNamespace &&
            (this.namespace = e == null ? void 0 : e.chainNamespace);
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (!this.caipAddress || !this.namespace) return null;
    const e = this.activeConnectorIds[this.namespace],
      n = e ? z.getConnectorById(e) : void 0,
      o = ee.getConnectorImage(n),
      {
        value: r,
        decimals: i,
        symbol: s,
      } = j.parseBalance(this.balance, this.balanceSymbol);
    return c`<wui-flex
        flexDirection="column"
        .padding=${["0", "5", "4", "5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${N(this.caipAddress)}
          address=${N(j.getPlainAddress(this.caipAddress))}
          imageSrc=${N(this.profileImage === null ? void 0 : this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${n == null ? void 0 : n.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="row" alignItems="flex-end" justifyContent="center" gap="1">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${i}</wui-text>
          <wui-text variant="h6-medium" color="primary">${s}</wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0", "3", "3", "3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
  }
  fundWalletTemplate() {
    var s, a, l;
    if (!this.namespace) return null;
    const e = Ce.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),
      n = Ce.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(
        this.namespace
      ),
      o = !!((s = this.features) != null && s.receive),
      r = ((a = this.remoteFeatures) == null ? void 0 : a.onramp) && e,
      i = ((l = this.remoteFeatures) == null ? void 0 : l.payWithExchange) && n;
    return !r && !o && !i
      ? null
      : c`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `;
  }
  orderedFeaturesTemplate() {
    var n;
    return (
      ((n = this.features) == null ? void 0 : n.walletFeaturesOrder) ||
      Ce.DEFAULT_FEATURES.walletFeaturesOrder
    ).map((o) => {
      switch (o) {
        case "onramp":
          return this.fundWalletTemplate();
        case "swaps":
          return this.swapsTemplate();
        case "send":
          return this.sendTemplate();
        default:
          return null;
      }
    });
  }
  activityTemplate() {
    var n;
    return this.namespace &&
      ((n = this.remoteFeatures) == null ? void 0 : n.activity) &&
      Ce.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)
      ? c` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`
      : null;
  }
  swapsTemplate() {
    var o;
    const e = (o = this.remoteFeatures) == null ? void 0 : o.swaps,
      n = E.state.activeChain === Q.CHAIN.EVM;
    return !e || !n
      ? null
      : c`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `;
  }
  sendTemplate() {
    var r;
    const e = (r = this.features) == null ? void 0 : r.send,
      n = E.state.activeChain;
    if (!n)
      throw new Error("SendController:sendTemplate - namespace is required");
    const o = Ce.SEND_SUPPORTED_NAMESPACES.includes(n);
    return !e || !o
      ? null
      : c`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    const e = E.state.activeChain;
    if (!e)
      throw new Error(
        "AuthCardTemplate:authCardTemplate - namespace is required"
      );
    const n = z.getConnectorId(e),
      o = z.getAuthConnector(),
      { origin: r } = location;
    return !o || n !== Q.CONNECTOR_ID.AUTH || r.includes(Ce.SECURE_SITE)
      ? null
      : c`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  handleClickFundWallet() {
    L.push("FundWallet");
  }
  handleClickSwap() {
    L.push("Swap");
  }
  handleClickSend() {
    L.push("WalletSend");
  }
  explorerBtnTemplate() {
    return Y.state.addressExplorerUrl
      ? c`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(
        this
      )}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `
      : null;
  }
  onTransactions() {
    te.sendEvent({
      type: "track",
      event: "CLICK_TRANSACTIONS",
      properties: {
        isSmartAccount:
          xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      L.push("Transactions");
  }
  async onDisconnect() {
    var e;
    try {
      this.disconnecting = !0;
      const o = F.getConnections(this.namespace).length > 0,
        r = this.namespace && z.state.activeConnectorIds[this.namespace],
        i = (e = this.remoteFeatures) == null ? void 0 : e.multiWallet;
      await F.disconnect(i ? { id: r, namespace: this.namespace } : {}),
        o && i && (L.push("ProfileWallets"), re.showSuccess("Wallet deleted"));
    } catch {
      te.sendEvent({
        type: "track",
        event: "DISCONNECT_ERROR",
        properties: { message: "Failed to disconnect" },
      }),
        re.showError("Failed to disconnect");
    } finally {
      this.disconnecting = !1;
    }
  }
  onExplorer() {
    const e = Y.state.addressExplorerUrl;
    e && j.openHref(e, "_blank");
  }
  onGoToUpgradeView() {
    te.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" }),
      L.push("UpgradeEmailWallet");
  }
  onGoToProfileWalletsView() {
    L.push("ProfileWallets");
  }
};
De.styles = Jd;
it([f()], De.prototype, "caipAddress", void 0);
it([f()], De.prototype, "address", void 0);
it([f()], De.prototype, "profileImage", void 0);
it([f()], De.prototype, "profileName", void 0);
it([f()], De.prototype, "disconnecting", void 0);
it([f()], De.prototype, "balance", void 0);
it([f()], De.prototype, "balanceSymbol", void 0);
it([f()], De.prototype, "features", void 0);
it([f()], De.prototype, "remoteFeatures", void 0);
it([f()], De.prototype, "namespace", void 0);
it([f()], De.prototype, "activeConnectorIds", void 0);
De = it([S("w3m-account-default-widget")], De);
const eu = U`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({ tokens: t }) => t.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }
`;
var Js = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Zi = class extends A {
  constructor() {
    super(...arguments), (this.dollars = "0"), (this.pennies = "00");
  }
  render() {
    return c`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
  }
};
Zi.styles = [K, eu];
Js([d()], Zi.prototype, "dollars", void 0);
Js([d()], Zi.prototype, "pennies", void 0);
Zi = Js([S("wui-balance")], Zi);
const tu = U`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({ colors: t }) => t.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({ colors: t }) => t.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({ colors: t }) => t.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({ colors: t }) => t.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({ colors: t }) => t.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({ colors: t }) => t.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host([data-size='md']) {
    padding: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
var $o = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const nu = { sm: "sm-regular", md: "md-regular" };
let On = class extends A {
  constructor() {
    super(...arguments),
      (this.placement = "top"),
      (this.variant = "fill"),
      (this.size = "md"),
      (this.message = "");
  }
  render() {
    return (
      (this.dataset.variant = this.variant),
      (this.dataset.size = this.size),
      c`<wui-icon data-placement=${
        this.placement
      } size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${nu[this.size]}>${this.message}</wui-text>`
    );
  }
};
On.styles = [K, ie, tu];
$o([d()], On.prototype, "placement", void 0);
$o([d()], On.prototype, "variant", void 0);
$o([d()], On.prototype, "size", void 0);
$o([d()], On.prototype, "message", void 0);
On = $o([S("wui-tooltip")], On);
var As;
(function (t) {
  (t.approve = "approved"),
    (t.bought = "bought"),
    (t.borrow = "borrowed"),
    (t.burn = "burnt"),
    (t.cancel = "canceled"),
    (t.claim = "claimed"),
    (t.deploy = "deployed"),
    (t.deposit = "deposited"),
    (t.execute = "executed"),
    (t.mint = "minted"),
    (t.receive = "received"),
    (t.repay = "repaid"),
    (t.send = "sent"),
    (t.sell = "sold"),
    (t.stake = "staked"),
    (t.trade = "swapped"),
    (t.unstake = "unstaked"),
    (t.withdraw = "withdrawn");
})(As || (As = {}));
const iu = U`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.core.glass010};
    background-color: ${({ tokens: t }) => t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({ borderRadius: t }) => t[4]};
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({ tokens: t }) => t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;
var Hn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Lt = class extends A {
  constructor() {
    super(...arguments),
      (this.images = []),
      (this.secondImage = { type: void 0, url: "" });
  }
  render() {
    const [e, n] = this.images;
    this.images.length || (this.dataset.noImages = "true");
    const o = (e == null ? void 0 : e.type) === "NFT",
      r = n != null && n.url ? n.type === "NFT" : o,
      i = o ? "var(--apkt-borderRadius-3)" : "var(--apkt-borderRadius-5)",
      s = r ? "var(--apkt-borderRadius-3)" : "var(--apkt-borderRadius-5)";
    return (
      (this.style.cssText = `
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `),
      c`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`
    );
  }
  templateVisual() {
    const [e, n] = this.images,
      o = e == null ? void 0 : e.type;
    return this.images.length === 2 &&
      ((e != null && e.url) || (n != null && n.url))
      ? c`<div class="swap-images-container">
        ${
          e != null && e.url
            ? c`<wui-image src=${e.url} alt="Transaction image"></wui-image>`
            : null
        }
        ${
          n != null && n.url
            ? c`<wui-image src=${n.url} alt="Transaction image"></wui-image>`
            : null
        }
      </div>`
      : e != null && e.url
      ? c`<wui-image src=${e.url} alt="Transaction image"></wui-image>`
      : o === "NFT"
      ? c`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`
      : c`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`;
  }
  templateIcon() {
    let e = "accent-primary",
      n;
    return (
      (n = this.getIcon()),
      this.status && (e = this.getStatusColor()),
      n
        ? c`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${e} icon=${n}></wui-icon-box>
      </wui-flex>
    `
        : null
    );
  }
  getDirectionIcon() {
    switch (this.direction) {
      case "in":
        return "arrowBottom";
      case "out":
        return "arrowTop";
      default:
        return;
    }
  }
  getIcon() {
    return this.onlyDirectionIcon
      ? this.getDirectionIcon()
      : this.type === "trade"
      ? "swapHorizontal"
      : this.type === "approve"
      ? "checkmark"
      : this.type === "cancel"
      ? "close"
      : this.getDirectionIcon();
  }
  getStatusColor() {
    switch (this.status) {
      case "confirmed":
        return "success";
      case "failed":
        return "error";
      case "pending":
        return "inverse";
      default:
        return "accent-primary";
    }
  }
};
Lt.styles = [iu];
Hn([d()], Lt.prototype, "type", void 0);
Hn([d()], Lt.prototype, "status", void 0);
Hn([d()], Lt.prototype, "direction", void 0);
Hn([d({ type: Boolean })], Lt.prototype, "onlyDirectionIcon", void 0);
Hn([d({ type: Array })], Lt.prototype, "images", void 0);
Hn([d({ type: Object })], Lt.prototype, "secondImage", void 0);
Lt = Hn([S("wui-transaction-visual")], Lt);
const ou = U`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[1]} ${({ spacing: t }) => t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
var dn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let $t = class extends A {
  constructor() {
    super(...arguments),
      (this.type = "approve"),
      (this.onlyDirectionIcon = !1),
      (this.images = []);
  }
  render() {
    return c`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${N(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${As[this.type] || this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${
          this.date
        }</span></wui-text>
      </wui-flex>
    `;
  }
  templateDescription() {
    var n;
    const e = (n = this.descriptions) == null ? void 0 : n[0];
    return e
      ? c`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `
      : null;
  }
  templateSecondDescription() {
    var n;
    const e = (n = this.descriptions) == null ? void 0 : n[1];
    return e
      ? c`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `
      : null;
  }
};
$t.styles = [K, ou];
dn([d()], $t.prototype, "type", void 0);
dn([d({ type: Array })], $t.prototype, "descriptions", void 0);
dn([d()], $t.prototype, "date", void 0);
dn([d({ type: Boolean })], $t.prototype, "onlyDirectionIcon", void 0);
dn([d()], $t.prototype, "status", void 0);
dn([d()], $t.prototype, "direction", void 0);
dn([d({ type: Array })], $t.prototype, "images", void 0);
$t = dn([S("wui-transaction-list-item")], $t);
const ru = U`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({ tokens: t }) => t.theme.foregroundSecondary} 0%,
      ${({ tokens: t }) => t.theme.foregroundTertiary} 50%,
      ${({ tokens: t }) => t.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius: t }) => t[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
var So = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Wn = class extends A {
  constructor() {
    super(...arguments),
      (this.width = ""),
      (this.height = ""),
      (this.variant = "default"),
      (this.rounded = !1);
  }
  render() {
    return (
      (this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
    `),
      (this.dataset.rounded = this.rounded ? "true" : "false"),
      c`<slot></slot>`
    );
  }
};
Wn.styles = [ru];
So([d()], Wn.prototype, "width", void 0);
So([d()], Wn.prototype, "height", void 0);
So([d()], Wn.prototype, "variant", void 0);
So([d({ type: Boolean })], Wn.prototype, "rounded", void 0);
Wn = So([S("wui-shimmer")], Wn);
const su = U`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({ borderRadius: t }) => t[128]};
  }

  .fallback-icon {
    color: ${({ tokens: t }) => t.theme.iconInverse};
    border-radius: ${({ borderRadius: t }) => t[3]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({ borderRadius: t }) => t[128]};
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({ spacing: t }) => t["01"]};
    color: ${({ tokens: t }) => t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({ tokens: t }) => t.core.textSuccess} 30%,
      ${({ tokens: t }) => t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({ spacing: t }) => t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({ spacing: t }) => t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;
var Eo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const jr = { sm: "xxs", lg: "md" };
let Nn = class extends A {
  constructor() {
    super(...arguments),
      (this.type = "approve"),
      (this.size = "lg"),
      (this.statusImageUrl = ""),
      (this.images = []);
  }
  render() {
    return c`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`;
  }
  templateVisual() {
    switch (((this.dataset.size = this.size), this.type)) {
      case "trade":
        return this.swapTemplate();
      case "fiat":
        return this.fiatTemplate();
      case "unknown":
        return this.unknownTemplate();
      default:
        return this.tokenTemplate();
    }
  }
  swapTemplate() {
    const [e, n] = this.images;
    return this.images.length === 2 && (e || n)
      ? c`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${n} alt="Swap image"></wui-image>
      `
      : e
      ? c`<wui-image src=${e} alt="Swap image"></wui-image>`
      : null;
  }
  fiatTemplate() {
    return c`<wui-icon
      class="fallback-icon"
      size=${jr[this.size]}
      name="dollar"
    ></wui-icon>`;
  }
  unknownTemplate() {
    return c`<wui-icon
      class="fallback-icon"
      size=${jr[this.size]}
      name="questionMark"
    ></wui-icon>`;
  }
  tokenTemplate() {
    const [e] = this.images;
    return e
      ? c`<wui-image src=${e} alt="Token image"></wui-image> `
      : c`<wui-icon
      class="fallback-icon"
      name=${this.type === "nft" ? "image" : "coinPlaceholder"}
    ></wui-icon>`;
  }
  templateIcon() {
    return this.statusImageUrl
      ? c`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`
      : c`<wui-icon
      class="direction-icon"
      size=${jr[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`;
  }
  getTemplateIcon() {
    return this.type === "trade" ? "arrowClockWise" : "arrowBottom";
  }
};
Nn.styles = [su];
Eo([d()], Nn.prototype, "type", void 0);
Eo([d()], Nn.prototype, "size", void 0);
Eo([d()], Nn.prototype, "statusImageUrl", void 0);
Eo([d({ type: Array })], Nn.prototype, "images", void 0);
Nn = Eo([S("wui-transaction-thumbnail")], Nn);
const au = U`
  :host > wui-flex:first-child {
    gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;
var cu = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Is = class extends A {
  render() {
    return c`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `;
  }
};
Is.styles = [K, au];
Is = cu([S("wui-transaction-list-item-loader")], Is);
const lu = U`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({ spacing: t }) => t[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;
var Zn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const zo = "last-transaction",
  du = 7;
let Dt = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.paginationObserver = void 0),
      (this.page = "activity"),
      (this.caipAddress = E.state.activeCaipAddress),
      (this.transactionsByYear = ct.state.transactionsByYear),
      (this.loading = ct.state.loading),
      (this.empty = ct.state.empty),
      (this.next = ct.state.next),
      ct.clearCursor(),
      this.unsubscribe.push(
        E.subscribeKey("activeCaipAddress", (e) => {
          e &&
            this.caipAddress !== e &&
            (ct.resetTransactions(), ct.fetchTransactions(e)),
            (this.caipAddress = e);
        }),
        E.subscribeKey("activeCaipNetwork", () => {
          this.updateTransactionView();
        }),
        ct.subscribe((e) => {
          (this.transactionsByYear = e.transactionsByYear),
            (this.loading = e.loading),
            (this.empty = e.empty),
            (this.next = e.next);
        })
      );
  }
  firstUpdated() {
    this.updateTransactionView(), this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
  }
  updateTransactionView() {
    ct.resetTransactions(),
      this.caipAddress &&
        ct.fetchTransactions(j.getPlainAddress(this.caipAddress));
  }
  templateTransactionsByYear() {
    return Object.keys(this.transactionsByYear)
      .sort()
      .reverse()
      .map((n) => {
        const o = parseInt(n, 10),
          r = new Array(12)
            .fill(null)
            .map((i, s) => {
              var u;
              const a = Bo.getTransactionGroupTitle(o, s),
                l = (u = this.transactionsByYear[o]) == null ? void 0 : u[s];
              return { groupTitle: a, transactions: l };
            })
            .filter(({ transactions: i }) => i)
            .reverse();
        return r.map(({ groupTitle: i, transactions: s }, a) => {
          const l = a === r.length - 1;
          return s
            ? c`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${l ? "true" : "false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2", "3", "3", "3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${i}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s, l)}
            </wui-flex>
          </wui-flex>
        `
            : null;
        });
      });
  }
  templateRenderTransaction(e, n) {
    const {
        date: o,
        descriptions: r,
        direction: i,
        isAllNFT: s,
        images: a,
        status: l,
        transfers: u,
        type: p,
      } = this.getTransactionListItemProps(e),
      h = (u == null ? void 0 : u.length) > 1;
    return (u == null ? void 0 : u.length) === 2 && !s
      ? c`
        <wui-transaction-list-item
          date=${o}
          .direction=${i}
          id=${n && this.next ? zo : ""}
          status=${l}
          type=${p}
          .images=${a}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `
      : h
      ? u.map((g, W) => {
          const _ = Bo.getTransferDescription(g),
            k = n && W === u.length - 1;
          return c` <wui-transaction-list-item
          date=${o}
          direction=${g.direction}
          id=${k && this.next ? zo : ""}
          status=${l}
          type=${p}
          .onlyDirectionIcon=${!0}
          .images=${[a[W]]}
          .descriptions=${[_]}
        ></wui-transaction-list-item>`;
        })
      : c`
      <wui-transaction-list-item
        date=${o}
        .direction=${i}
        id=${n && this.next ? zo : ""}
        status=${l}
        type=${p}
        .images=${a}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(e, n) {
    return e.map((o, r) => {
      const i = n && r === e.length - 1;
      return c`${this.templateRenderTransaction(o, i)}`;
    });
  }
  emptyStateActivity() {
    return c`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10", "5", "10", "5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
  }
  emptyStateAccount() {
    return c`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
  }
  templateEmpty() {
    return this.page === "account"
      ? c`${this.emptyStateAccount()}`
      : c`${this.emptyStateActivity()}`;
  }
  templateLoading() {
    return this.page === "activity"
      ? Array(du)
          .fill(
            c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `
          )
          .map((e) => e)
      : null;
  }
  onReceiveClick() {
    L.push("WalletReceive");
  }
  createPaginationObserver() {
    const { projectId: e } = B.state;
    (this.paginationObserver = new IntersectionObserver(([n]) => {
      n != null &&
        n.isIntersecting &&
        !this.loading &&
        (ct.fetchTransactions(j.getPlainAddress(this.caipAddress)),
        te.sendEvent({
          type: "track",
          event: "LOAD_MORE_TRANSACTIONS",
          properties: {
            address: j.getPlainAddress(this.caipAddress),
            projectId: e,
            cursor: this.next,
            isSmartAccount:
              xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
          },
        }));
    }, {})),
      this.setPaginationObserver();
  }
  setPaginationObserver() {
    var n, o, r;
    (n = this.paginationObserver) == null || n.disconnect();
    const e =
      (o = this.shadowRoot) == null ? void 0 : o.querySelector(`#${zo}`);
    e && ((r = this.paginationObserver) == null || r.observe(e));
  }
  getTransactionListItemProps(e) {
    var l, u, p, h, m;
    const n = Rl.formatDate(
        (l = e == null ? void 0 : e.metadata) == null ? void 0 : l.minedAt
      ),
      o = Bo.getTransactionDescriptions(e),
      r = e == null ? void 0 : e.transfers,
      i = (u = e == null ? void 0 : e.transfers) == null ? void 0 : u[0],
      s =
        !!i &&
        ((p = e == null ? void 0 : e.transfers) == null
          ? void 0
          : p.every((g) => !!g.nft_info)),
      a = Bo.getTransactionImages(r);
    return {
      date: n,
      direction: i == null ? void 0 : i.direction,
      descriptions: o,
      isAllNFT: s,
      images: a,
      status: (h = e.metadata) == null ? void 0 : h.status,
      transfers: r,
      type: (m = e.metadata) == null ? void 0 : m.operationType,
    };
  }
};
Dt.styles = lu;
Zn([d()], Dt.prototype, "page", void 0);
Zn([f()], Dt.prototype, "caipAddress", void 0);
Zn([f()], Dt.prototype, "transactionsByYear", void 0);
Zn([f()], Dt.prototype, "loading", void 0);
Zn([f()], Dt.prototype, "empty", void 0);
Zn([f()], Dt.prototype, "next", void 0);
Dt = Zn([S("w3m-activity-list")], Dt);
const uu = xe`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;
var hu = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ts = class extends A {
  render() {
    return c`<w3m-activity-list page="account"></w3m-activity-list>`;
  }
};
Ts.styles = uu;
Ts = hu([S("w3m-account-activity-widget")], Ts);
const pu = U`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
var fu = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ps = class extends A {
  render() {
    return c`${this.nftTemplate()}`;
  }
  nftTemplate() {
    return c` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="5"
    >
      <wui-icon-box icon="wallet" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="md-regular"
          align="center"
          color="primary"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="sm-regular"
          align="center"
          color="secondary"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(
        this
      )} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`;
  }
  onReceiveClick() {
    L.push("WalletReceive");
  }
};
Ps.styles = pu;
Ps = fu([S("w3m-account-nfts-widget")], Ps);
const mu = U`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ spacing: t }) => t[4]};
    padding: ${({ spacing: t }) => t[4]};
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }
`;
var Pi = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let nn = class extends A {
  constructor() {
    super(...arguments),
      (this.icon = "card"),
      (this.text = ""),
      (this.description = ""),
      (this.tag = void 0),
      (this.disabled = !1);
  }
  render() {
    return c`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${
            this.icon
          } size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${
              this.text
            }</wui-text>
            ${
              this.description
                ? c`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`
                : null
            }
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${
            this.tag
              ? c`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`
              : null
          }
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `;
  }
};
nn.styles = [K, ie, mu];
Pi([d()], nn.prototype, "icon", void 0);
Pi([d()], nn.prototype, "text", void 0);
Pi([d()], nn.prototype, "description", void 0);
Pi([d()], nn.prototype, "tag", void 0);
Pi([d({ type: Boolean })], nn.prototype, "disabled", void 0);
nn = Pi([S("wui-list-description")], nn);
const wu = U`
  :host {
    width: 100%;
  }

  button {
    padding: ${({ spacing: t }) => t[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({ borderRadius: t }) => t[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens: t }) => t.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({ spacing: t }) => t[10]};
    height: ${({ spacing: t }) => t[10]};
  }

  wui-image {
    border-radius: ${({ borderRadius: t }) => t[16]};
  }
`;
var Kn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Mt = class extends A {
  constructor() {
    super(...arguments),
      (this.tokenName = ""),
      (this.tokenImageUrl = ""),
      (this.tokenValue = 0),
      (this.tokenAmount = "0.0"),
      (this.tokenCurrency = ""),
      (this.clickable = !1);
  }
  render() {
    return c`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${
              this.tokenName
            }</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${ya.formatNumberToLocalString(this.tokenAmount, 4)} ${
      this.tokenCurrency
    }
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${ya.formatNumberToLocalString(this.tokenAmount, 4)}
          </wui-text>
        </wui-flex>
      </button>
    `;
  }
  visualTemplate() {
    return this.tokenName && this.tokenImageUrl
      ? c`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`
      : c`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`;
  }
};
Mt.styles = [K, ie, wu];
Kn([d()], Mt.prototype, "tokenName", void 0);
Kn([d()], Mt.prototype, "tokenImageUrl", void 0);
Kn([d({ type: Number })], Mt.prototype, "tokenValue", void 0);
Kn([d()], Mt.prototype, "tokenAmount", void 0);
Kn([d()], Mt.prototype, "tokenCurrency", void 0);
Kn([d({ type: Boolean })], Mt.prototype, "clickable", void 0);
Mt = Kn([S("wui-list-token")], Mt);
const gu = xe`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;
var ea = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ki = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tokenBalance = Y.state.tokenBalance),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.unsubscribe.push(
        Y.subscribe((e) => {
          this.tokenBalance = e.tokenBalance;
        }),
        B.subscribeKey("remoteFeatures", (e) => {
          this.remoteFeatures = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`${this.tokenTemplate()}`;
  }
  tokenTemplate() {
    var e;
    return this.tokenBalance &&
      ((e = this.tokenBalance) == null ? void 0 : e.length) > 0
      ? c`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`
      : c` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`;
  }
  onRampTemplate() {
    var e;
    return (e = this.remoteFeatures) != null && e.onramp
      ? c`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`
      : c``;
  }
  tokenItemTemplate() {
    var e;
    return (e = this.tokenBalance) == null
      ? void 0
      : e.map(
          (n) => c`<wui-list-token
          tokenName=${n.name}
          tokenImageUrl=${n.iconUrl}
          tokenAmount=${n.quantity.numeric}
          tokenValue=${n.value}
          tokenCurrency=${n.symbol}
        ></wui-list-token>`
        );
  }
  onReceiveClick() {
    L.push("WalletReceive");
  }
  onBuyClick() {
    te.sendEvent({
      type: "track",
      event: "SELECT_BUY_CRYPTO",
      properties: {
        isSmartAccount:
          xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      L.push("OnRampProviders");
  }
};
Ki.styles = gu;
ea([f()], Ki.prototype, "tokenBalance", void 0);
ea([f()], Ki.prototype, "remoteFeatures", void 0);
Ki = ea([S("w3m-account-tokens-widget")], Ki);
const bu = xe`
  :host {
    width: 100%;
    display: block;
  }
`;
var ta = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let qi = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.text = ""),
      (this.open = Qe.state.open),
      this.unsubscribe.push(
        L.subscribeKey("view", () => {
          Qe.hide();
        }),
        ye.subscribeKey("open", (e) => {
          e || Qe.hide();
        }),
        Qe.subscribeKey("open", (e) => {
          this.open = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), Qe.hide();
  }
  render() {
    return c`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
  }
  renderChildren() {
    return c`<slot></slot> `;
  }
  onMouseEnter() {
    const e = this.getBoundingClientRect();
    if (!this.open) {
      const n = document.querySelector("w3m-modal"),
        o = { width: e.width, height: e.height, left: e.left, top: e.top };
      if (n) {
        const r = n.getBoundingClientRect();
        (o.left = e.left - (window.innerWidth - r.width) / 2),
          (o.top = e.top - (window.innerHeight - r.height) / 2);
      }
      Qe.showTooltip({ message: this.text, triggerRect: o, variant: "shade" });
    }
  }
  onMouseLeave(e) {
    this.contains(e.relatedTarget) || Qe.hide();
  }
};
qi.styles = [bu];
ta([d()], qi.prototype, "text", void 0);
ta([f()], qi.prototype, "open", void 0);
qi = ta([S("w3m-tooltip-trigger")], qi);
const vu = U`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({ spacing: t }) => t[3]} 10px ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[3]};
    color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({ spacing: t }) => t[5]});
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({ durations: t }) => t.xl};
    animation-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({ tokens: t }) => t.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var ko = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ln = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.open = Qe.state.open),
      (this.message = Qe.state.message),
      (this.triggerRect = Qe.state.triggerRect),
      (this.variant = Qe.state.variant),
      this.unsubscribe.push(
        Qe.subscribe((e) => {
          (this.open = e.open),
            (this.message = e.message),
            (this.triggerRect = e.triggerRect),
            (this.variant = e.variant);
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    this.dataset.variant = this.variant;
    const e = this.triggerRect.top,
      n = this.triggerRect.left;
    return (
      (this.style.cssText = `
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${n}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `),
      c`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`
    );
  }
};
Ln.styles = [vu];
ko([f()], Ln.prototype, "open", void 0);
ko([f()], Ln.prototype, "message", void 0);
ko([f()], Ln.prototype, "triggerRect", void 0);
ko([f()], Ln.prototype, "variant", void 0);
Ln = ko([S("w3m-tooltip")], Ln);
const yu = U`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({ spacing: t }) => t[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({ spacing: t }) => t[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
var ft = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ze = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.address = Y.state.address),
      (this.profileName = Y.state.profileName),
      (this.network = E.state.activeCaipNetwork),
      (this.currentTab = Y.state.currentTab),
      (this.tokenBalance = Y.state.tokenBalance),
      (this.features = B.state.features),
      (this.namespace = E.state.activeChain),
      (this.activeConnectorIds = z.state.activeConnectorIds),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.unsubscribe.push(
        Y.subscribe((e) => {
          e.address
            ? ((this.address = e.address),
              (this.profileName = e.profileName),
              (this.currentTab = e.currentTab),
              (this.tokenBalance = e.tokenBalance))
            : ye.close();
        }),
        z.subscribeKey("activeConnectorIds", (e) => {
          this.activeConnectorIds = e;
        }),
        E.subscribeKey("activeChain", (e) => (this.namespace = e)),
        E.subscribeKey("activeCaipNetwork", (e) => (this.network = e)),
        B.subscribeKey("features", (e) => (this.features = e)),
        B.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
      ),
      this.watchSwapValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), clearInterval(this.watchTokenBalance);
  }
  firstUpdated() {
    Y.fetchTokenBalance();
  }
  render() {
    if (!this.address) throw new Error("w3m-account-view: No account provided");
    if (!this.namespace) return null;
    const e = this.activeConnectorIds[this.namespace],
      n = e ? z.getConnectorById(e) : void 0,
      { icon: o, iconSize: r } = this.getAuthData();
    return c`<wui-flex
      flexDirection="column"
      .padding=${["0", "3", "4", "3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${r}
          alt=${n == null ? void 0 : n.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`;
  }
  orderedWalletFeatures() {
    var i;
    const e =
      ((i = this.features) == null ? void 0 : i.walletFeaturesOrder) ||
      Ce.DEFAULT_FEATURES.walletFeaturesOrder;
    if (
      e.every((s) => {
        var a, l;
        return s === "send" || s === "receive"
          ? !((a = this.features) != null && a[s])
          : s === "swaps" || s === "onramp"
          ? !((l = this.remoteFeatures) != null && l[s])
          : !0;
      })
    )
      return null;
    const o = e.map((s) => (s === "receive" || s === "onramp" ? "fund" : s)),
      r = [...new Set(o)];
    return c`<wui-flex gap="2">
      ${r.map((s) => {
        switch (s) {
          case "fund":
            return this.fundWalletTemplate();
          case "swaps":
            return this.swapsTemplate();
          case "send":
            return this.sendTemplate();
          default:
            return null;
        }
      })}
    </wui-flex>`;
  }
  fundWalletTemplate() {
    var s, a, l;
    if (!this.namespace) return null;
    const e = Ce.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),
      n = Ce.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(
        this.namespace
      ),
      o = (s = this.features) == null ? void 0 : s.receive,
      r = ((a = this.remoteFeatures) == null ? void 0 : a.onramp) && e,
      i = ((l = this.remoteFeatures) == null ? void 0 : l.payWithExchange) && n;
    return !r && !o && !i
      ? null
      : c`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
  }
  swapsTemplate() {
    var o;
    const e = (o = this.remoteFeatures) == null ? void 0 : o.swaps,
      n = E.state.activeChain === Q.CHAIN.EVM;
    return !e || !n
      ? null
      : c`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
  }
  sendTemplate() {
    var r;
    const e = (r = this.features) == null ? void 0 : r.send,
      n = E.state.activeChain,
      o = Ce.SEND_SUPPORTED_NAMESPACES.includes(n);
    return !e || !o
      ? null
      : c`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `;
  }
  watchSwapValues() {
    this.watchTokenBalance = setInterval(
      () => Y.fetchTokenBalance((e) => this.onTokenBalanceError(e)),
      1e4
    );
  }
  onTokenBalanceError(e) {
    e instanceof Error &&
      e.cause instanceof Response &&
      e.cause.status === Q.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
      clearInterval(this.watchTokenBalance);
  }
  listContentTemplate() {
    return this.currentTab === 0
      ? c`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
      : this.currentTab === 1
      ? c`<w3m-account-nfts-widget></w3m-account-nfts-widget>`
      : this.currentTab === 2
      ? c`<w3m-account-activity-widget></w3m-account-activity-widget>`
      : c`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
  }
  tokenBalanceTemplate() {
    var e;
    if (
      this.tokenBalance &&
      ((e = this.tokenBalance) == null ? void 0 : e.length) >= 0
    ) {
      const n = j.calculateBalance(this.tokenBalance),
        { dollars: o = "0", pennies: r = "00" } = j.formatTokenBalance(n);
      return c`<wui-balance dollars=${o} pennies=${r}></wui-balance>`;
    }
    return c`<wui-balance dollars="0" pennies="00"></wui-balance>`;
  }
  tabsTemplate() {
    const e = si.getTabsByNamespace(E.state.activeChain);
    return e.length === 0
      ? null
      : c`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`;
  }
  onTabChange(e) {
    Y.setCurrentTab(e);
  }
  onFundWalletClick() {
    L.push("FundWallet");
  }
  onSwapClick() {
    var e, n, o;
    (e = this.network) != null &&
    e.caipNetworkId &&
    !Ce.SWAP_SUPPORTED_NETWORKS.includes(
      (n = this.network) == null ? void 0 : n.caipNetworkId
    )
      ? L.push("UnsupportedChain", { swapUnsupportedChain: !0 })
      : (te.sendEvent({
          type: "track",
          event: "OPEN_SWAP",
          properties: {
            network:
              ((o = this.network) == null ? void 0 : o.caipNetworkId) || "",
            isSmartAccount:
              xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
          },
        }),
        L.push("Swap"));
  }
  getAuthData() {
    const e = Xe.getConnectedSocialProvider(),
      n = Xe.getConnectedSocialUsername(),
      o = z.getAuthConnector(),
      r = (o == null ? void 0 : o.provider.getEmail()) ?? "";
    return {
      name: Sn.getAuthName({ email: r, socialUsername: n, socialProvider: e }),
      icon: e ?? "mail",
      iconSize: e ? "xl" : "md",
    };
  }
  onGoToProfileWalletsView() {
    L.push("ProfileWallets");
  }
  onSendClick() {
    var e;
    te.sendEvent({
      type: "track",
      event: "OPEN_SEND",
      properties: {
        network: ((e = this.network) == null ? void 0 : e.caipNetworkId) || "",
        isSmartAccount:
          xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      L.push("WalletSend");
  }
};
Ze.styles = yu;
ft([f()], Ze.prototype, "watchTokenBalance", void 0);
ft([f()], Ze.prototype, "address", void 0);
ft([f()], Ze.prototype, "profileName", void 0);
ft([f()], Ze.prototype, "network", void 0);
ft([f()], Ze.prototype, "currentTab", void 0);
ft([f()], Ze.prototype, "tokenBalance", void 0);
ft([f()], Ze.prototype, "features", void 0);
ft([f()], Ze.prototype, "namespace", void 0);
ft([f()], Ze.prototype, "activeConnectorIds", void 0);
ft([f()], Ze.prototype, "remoteFeatures", void 0);
Ze = ft([S("w3m-account-wallet-features-widget")], Ze);
var Uc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Jo = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.namespace = E.state.activeChain),
      this.unsubscribe.push(
        E.subscribeKey("activeChain", (e) => {
          this.namespace = e;
        })
      );
  }
  render() {
    if (!this.namespace) return null;
    const e = z.getConnectorId(this.namespace),
      n = z.getAuthConnector();
    return c`
      ${
        n && e === Q.CONNECTOR_ID.AUTH
          ? this.walletFeaturesTemplate()
          : this.defaultTemplate()
      }
    `;
  }
  walletFeaturesTemplate() {
    return c`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
  }
  defaultTemplate() {
    return c`<w3m-account-default-widget></w3m-account-default-widget>`;
  }
};
Uc([f()], Jo.prototype, "namespace", void 0);
Jo = Uc([S("w3m-account-view")], Jo);
const Cu = U`
  :host {
    position: relative;
    background-color: ${({ tokens: t }) => t.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({ colors: t }) => t.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({ colors: t }) => t.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
    padding: 1px;
  }
`;
var qn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Bt = class extends A {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.name = ""),
      (this.installed = !1),
      (this.badgeSize = "xs");
  }
  render() {
    let e = "1";
    return (
      this.size === "lg"
        ? (e = "4")
        : this.size === "md"
        ? (e = "2")
        : this.size === "sm" && (e = "1"),
      (this.style.cssText = `
       --local-border-radius: var(--apkt-borderRadius-${e});
   `),
      (this.dataset.size = this.size),
      this.imageSrc && (this.dataset.image = "true"),
      this.walletIcon && (this.dataset.walletIcon = this.walletIcon),
      c`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `
    );
  }
  templateVisual() {
    return this.imageSrc
      ? c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
      : this.walletIcon
      ? c`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`
      : c`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
  }
};
Bt.styles = [K, Cu];
qn([d()], Bt.prototype, "size", void 0);
qn([d()], Bt.prototype, "name", void 0);
qn([d()], Bt.prototype, "imageSrc", void 0);
qn([d()], Bt.prototype, "walletIcon", void 0);
qn([d({ type: Boolean })], Bt.prototype, "installed", void 0);
qn([d()], Bt.prototype, "badgeSize", void 0);
Bt = qn([S("wui-wallet-image")], Bt);
const xu = U`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({ borderRadius: t }) => t[2]};
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing: t }) => t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;
var ze = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let _e = class extends A {
  constructor() {
    super(...arguments),
      (this.address = ""),
      (this.profileName = ""),
      (this.content = []),
      (this.alt = ""),
      (this.imageSrc = ""),
      (this.icon = void 0),
      (this.iconSize = "md"),
      (this.iconBadge = void 0),
      (this.iconBadgeSize = "md"),
      (this.buttonVariant = "neutral-primary"),
      (this.enableMoreButton = !1),
      (this.charsStart = 4),
      (this.charsEnd = 6);
  }
  render() {
    return c`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `;
  }
  topTemplate() {
    return c`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${
          this.enableMoreButton
            ? c`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`
            : null
        }
      </wui-flex>
    `;
  }
  bottomTemplate() {
    return c` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `;
  }
  imageOrIconTemplate() {
    return this.icon
      ? c`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${
              this.icon
            } class="custom-icon"></wui-icon>

            ${
              this.iconBadge
                ? c`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null
            }
          </wui-flex>
        </wui-flex>
      `
      : c`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `;
  }
  contentTemplate() {
    return this.content.length === 0
      ? null
      : c`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map((e) => this.labelAndTagTemplate(e))}
      </wui-flex>
    `;
  }
  labelAndTagTemplate({
    address: e,
    profileName: n,
    label: o,
    description: r,
    enableButton: i,
    buttonType: s,
    buttonLabel: a,
    buttonVariant: l,
    tagVariant: u,
    tagLabel: p,
    alignItems: h = "flex-end",
  }) {
    return c`
      <wui-flex justifyContent="space-between" alignItems=${h} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${
            o
              ? c`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`
              : null
          }

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${de.getTruncateString({
                string: n || e,
                charsStart: n ? 16 : this.charsStart,
                charsEnd: n ? 0 : this.charsEnd,
                truncate: n ? "end" : "middle",
              })}
            </wui-text>

            ${u && p ? c`<wui-tag variant=${u} size="sm">${p}</wui-tag>` : null}
          </wui-flex>

          ${
            r
              ? c`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`
              : null
          }
        </wui-flex>

        ${
          i
            ? this.buttonTemplate({
                buttonType: s,
                buttonLabel: a,
                buttonVariant: l,
              })
            : null
        }
      </wui-flex>
    `;
  }
  buttonTemplate({ buttonType: e, buttonLabel: n, buttonVariant: o }) {
    return c`
      <wui-button
        size="sm"
        variant=${o}
        @click=${
          e === "disconnect"
            ? this.dispatchDisconnectEvent.bind(this)
            : this.dispatchSwitchEvent.bind(this)
        }
        data-testid=${
          e === "disconnect"
            ? "wui-active-profile-wallet-item-disconnect-button"
            : "wui-active-profile-wallet-item-switch-button"
        }
      >
        ${n}
      </wui-button>
    `;
  }
  dispatchDisconnectEvent() {
    this.dispatchEvent(
      new CustomEvent("disconnect", { bubbles: !0, composed: !0 })
    );
  }
  dispatchSwitchEvent() {
    this.dispatchEvent(
      new CustomEvent("switch", { bubbles: !0, composed: !0 })
    );
  }
  dispatchExternalLinkEvent() {
    this.dispatchEvent(
      new CustomEvent("externalLink", { bubbles: !0, composed: !0 })
    );
  }
  dispatchMoreButtonEvent() {
    this.dispatchEvent(new CustomEvent("more", { bubbles: !0, composed: !0 }));
  }
  dispatchCopyEvent() {
    this.dispatchEvent(new CustomEvent("copy", { bubbles: !0, composed: !0 }));
  }
};
_e.styles = [K, ie, xu];
ze([d()], _e.prototype, "address", void 0);
ze([d()], _e.prototype, "profileName", void 0);
ze([d({ type: Array })], _e.prototype, "content", void 0);
ze([d()], _e.prototype, "alt", void 0);
ze([d()], _e.prototype, "imageSrc", void 0);
ze([d()], _e.prototype, "icon", void 0);
ze([d()], _e.prototype, "iconSize", void 0);
ze([d()], _e.prototype, "iconBadge", void 0);
ze([d()], _e.prototype, "iconBadgeSize", void 0);
ze([d()], _e.prototype, "buttonVariant", void 0);
ze([d({ type: Boolean })], _e.prototype, "enableMoreButton", void 0);
ze([d({ type: Number })], _e.prototype, "charsStart", void 0);
ze([d({ type: Number })], _e.prototype, "charsEnd", void 0);
_e = ze([S("wui-active-profile-wallet-item")], _e);
const $u = U`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border: 2px solid ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({ spacing: t }) => t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;
var Ie = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let we = class extends A {
  constructor() {
    super(...arguments),
      (this.address = ""),
      (this.profileName = ""),
      (this.alt = ""),
      (this.buttonLabel = ""),
      (this.buttonVariant = "accent-primary"),
      (this.imageSrc = ""),
      (this.icon = void 0),
      (this.iconSize = "md"),
      (this.iconBadgeSize = "md"),
      (this.rightIcon = "signOut"),
      (this.rightIconSize = "md"),
      (this.loading = !1),
      (this.charsStart = 4),
      (this.charsEnd = 6);
  }
  render() {
    return c`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `;
  }
  imageOrIconTemplate() {
    return this.icon
      ? c`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${
              this.icon
            } class="custom-icon"></wui-icon>

            ${
              this.iconBadge
                ? c`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`
                : null
            }
          </wui-flex>
        </wui-flex>
      `
      : c`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`;
  }
  labelAndDescriptionTemplate() {
    return c`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${de.getTruncateString({
            string: this.profileName || this.address,
            charsStart: this.profileName ? 16 : this.charsStart,
            charsEnd: this.profileName ? 0 : this.charsEnd,
            truncate: this.profileName ? "end" : "middle",
          })}
        </wui-text>
      </wui-flex>
    `;
  }
  buttonActionTemplate() {
    return c`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${N(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `;
  }
  handleButtonClick() {
    this.dispatchEvent(
      new CustomEvent("buttonClick", { bubbles: !0, composed: !0 })
    );
  }
  handleIconClick() {
    this.dispatchEvent(
      new CustomEvent("iconClick", { bubbles: !0, composed: !0 })
    );
  }
};
we.styles = [K, ie, $u];
Ie([d()], we.prototype, "address", void 0);
Ie([d()], we.prototype, "profileName", void 0);
Ie([d()], we.prototype, "alt", void 0);
Ie([d()], we.prototype, "buttonLabel", void 0);
Ie([d()], we.prototype, "buttonVariant", void 0);
Ie([d()], we.prototype, "imageSrc", void 0);
Ie([d()], we.prototype, "icon", void 0);
Ie([d()], we.prototype, "iconSize", void 0);
Ie([d()], we.prototype, "iconBadge", void 0);
Ie([d()], we.prototype, "iconBadgeSize", void 0);
Ie([d()], we.prototype, "rightIcon", void 0);
Ie([d()], we.prototype, "rightIconSize", void 0);
Ie([d({ type: Boolean })], we.prototype, "loading", void 0);
Ie([d({ type: Number })], we.prototype, "charsStart", void 0);
Ie([d({ type: Number })], we.prototype, "charsEnd", void 0);
we = Ie([S("wui-inactive-profile-wallet-item")], we);
const Su = U`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({ tokens: t }) => t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
  }
`;
var Fc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let er = class extends A {
  constructor() {
    super(...arguments), (this.text = "");
  }
  render() {
    return c`${this.template()}`;
  }
  template() {
    return this.text
      ? c`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`
      : null;
  }
};
er.styles = [K, Su];
Fc([d()], er.prototype, "text", void 0);
er = Fc([S("wui-separator")], er);
const zr = {
    getAuthData(t) {
      var s, a;
      const e = t.connectorId === Q.CONNECTOR_ID.AUTH;
      if (!e)
        return { isAuth: !1, icon: void 0, iconSize: void 0, name: void 0 };
      const n =
          ((s = t == null ? void 0 : t.auth) == null ? void 0 : s.name) ??
          Xe.getConnectedSocialProvider(),
        o =
          ((a = t == null ? void 0 : t.auth) == null ? void 0 : a.username) ??
          Xe.getConnectedSocialUsername(),
        r = z.getAuthConnector(),
        i = (r == null ? void 0 : r.provider.getEmail()) ?? "";
      return {
        isAuth: !0,
        icon: n ?? "mail",
        iconSize: n ? "xl" : "md",
        name: e
          ? Sn.getAuthName({ email: i, socialUsername: o, socialProvider: n })
          : void 0,
      };
    },
  },
  Eu = U`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ easings: t }) => t["ease-out-power-1"]}
      ${({ durations: t }) => t.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({ spacing: t }) => t[4]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-separator {
    margin: ${({ spacing: t }) => t[2]} 0 ${({ spacing: t }) => t[2]} 0;
  }

  .active-connection {
    padding: ${({ spacing: t }) => t[2]};
  }

  .recent-connection {
    padding: ${({ spacing: t }) => t[2]} 0 ${({ spacing: t }) => t[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;
var Ke = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Ge = {
    ADDRESS_DISPLAY: { START: 4, END: 6 },
    BADGE: { SIZE: "md", ICON: "lightbulb" },
    SCROLL_THRESHOLD: 50,
    OPACITY_RANGE: [0, 1],
  },
  Fi = { eip155: "ethereum", solana: "solana", bip122: "bitcoin" },
  ku = [
    { namespace: "eip155", icon: Fi.eip155, label: "EVM" },
    { namespace: "solana", icon: Fi.solana, label: "Solana" },
    { namespace: "bip122", icon: Fi.bip122, label: "Bitcoin" },
  ],
  _u = {
    eip155: {
      title: "Add EVM Wallet",
      description: "Add your first EVM wallet",
    },
    solana: {
      title: "Add Solana Wallet",
      description: "Add your first Solana wallet",
    },
    bip122: {
      title: "Add Bitcoin Wallet",
      description: "Add your first Bitcoin wallet",
    },
  };
let Ae = class extends A {
  constructor() {
    var e, n;
    super(),
      (this.unsubscribers = []),
      (this.currentTab = 0),
      (this.namespace = E.state.activeChain),
      (this.namespaces = Array.from(E.state.chains.keys())),
      (this.caipAddress = void 0),
      (this.profileName = void 0),
      (this.activeConnectorIds = z.state.activeConnectorIds),
      (this.lastSelectedAddress = ""),
      (this.lastSelectedConnectorId = ""),
      (this.isSwitching = !1),
      (this.caipNetwork = E.state.activeCaipNetwork),
      (this.user = Y.state.user),
      (this.remoteFeatures = B.state.remoteFeatures),
      (this.currentTab = this.namespace
        ? this.namespaces.indexOf(this.namespace)
        : 0),
      (this.caipAddress =
        (e = E.getAccountData(this.namespace)) == null
          ? void 0
          : e.caipAddress),
      (this.profileName =
        (n = E.getAccountData(this.namespace)) == null
          ? void 0
          : n.profileName),
      this.unsubscribers.push(
        F.subscribeKey("connections", () => this.onConnectionsChange()),
        F.subscribeKey("recentConnections", () => this.requestUpdate()),
        z.subscribeKey("activeConnectorIds", (o) => {
          this.activeConnectorIds = o;
        }),
        E.subscribeKey("activeCaipNetwork", (o) => (this.caipNetwork = o)),
        Y.subscribeKey("user", (o) => (this.user = o)),
        B.subscribeKey("remoteFeatures", (o) => (this.remoteFeatures = o))
      ),
      (this.chainListener = E.subscribeChainProp(
        "accountState",
        (o) => {
          (this.caipAddress = o == null ? void 0 : o.caipAddress),
            (this.profileName = o == null ? void 0 : o.profileName);
        },
        this.namespace
      ));
  }
  disconnectedCallback() {
    var e, n;
    this.unsubscribers.forEach((o) => o()),
      (e = this.resizeObserver) == null || e.disconnect(),
      this.removeScrollListener(),
      (n = this.chainListener) == null || n.call(this);
  }
  firstUpdated() {
    var o;
    const e =
      (o = this.shadowRoot) == null ? void 0 : o.querySelector(".wallet-list");
    if (!e) return;
    const n = () => this.updateScrollOpacity(e);
    requestAnimationFrame(n),
      e.addEventListener("scroll", n),
      (this.resizeObserver = new ResizeObserver(n)),
      this.resizeObserver.observe(e),
      n();
  }
  render() {
    const e = this.namespace;
    if (!e) throw new Error("Namespace is not set");
    return c`
      <wui-flex flexDirection="column" .padding=${["0", "4", "4", "4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(
      e
    )}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `;
  }
  renderTabs() {
    const e = ku.filter((o) => this.namespaces.includes(o.namespace));
    return e.length > 1
      ? c`
        <wui-tabs
          .onTabChange=${(o) => this.handleTabChange(o)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `
      : null;
  }
  renderHeader(e) {
    const o =
      this.getActiveConnections(e).flatMap(({ accounts: r }) => r).length +
      (this.caipAddress ? 1 : 0);
    return c`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Fi[e] ?? Fi.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${o > 1 ? "Wallets" : "Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${o}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${() => F.disconnect({ namespace: e })}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `;
  }
  renderConnections(e) {
    const n = this.hasAnyConnections(e);
    return c`
      <wui-flex flexDirection="column" class=${Lc({
        "wallet-list": !0,
        "active-wallets-box": n,
        "empty-wallet-list-box": !n,
      })} rowgap="3">
        ${n ? this.renderActiveConnections(e) : this.renderEmptyState(e)}
      </wui-flex>
    `;
  }
  renderActiveConnections(e) {
    const n = this.getActiveConnections(e),
      o = this.activeConnectorIds[e],
      r = this.getPlainAddress();
    return c`
      ${
        r || o || n.length > 0
          ? c`<wui-flex
            flexDirection="column"
            .padding=${["4", "0", "4", "0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(
              e
            )}
          </wui-flex>`
          : null
      }
      ${this.renderRecentConnections(e)}
    `;
  }
  renderActiveProfile(e) {
    const n = this.activeConnectorIds[e];
    if (!n) return null;
    const { connections: o } = qt.getConnectionsData(e),
      r = z.getConnectorById(n),
      i = ee.getConnectorImage(r),
      s = this.getPlainAddress();
    if (!s) return null;
    const a = e === Q.CHAIN.BITCOIN,
      l = zr.getAuthData({ connectorId: n, accounts: [] }),
      u = this.getActiveConnections(e).flatMap((m) => m.accounts).length > 0,
      p = o.find((m) => m.connectorId === n),
      h =
        p == null
          ? void 0
          : p.accounts.filter((m) => !Ve.isLowerCaseMatch(m.address, s));
    return c`
      <wui-flex flexDirection="column" .padding=${["0", "4", "0", "4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${r == null ? void 0 : r.name}
          .content=${this.getProfileContent({
            address: s,
            connections: o,
            connectorId: n,
            namespace: e,
          })}
          .charsStart=${Ge.ADDRESS_DISPLAY.START}
          .charsEnd=${Ge.ADDRESS_DISPLAY.END}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(s) ? Ge.BADGE.ICON : void 0}
          .iconBadgeSize=${this.isSmartAccount(s) ? Ge.BADGE.SIZE : void 0}
          imageSrc=${i}
          ?enableMoreButton=${l.isAuth}
          @copy=${() => this.handleCopyAddress(s)}
          @disconnect=${() => this.handleDisconnect(e, { id: n })}
          @switch=${() => {
            a &&
              p &&
              h != null &&
              h[0] &&
              this.handleSwitchWallet(p, h[0].address, e);
          }}
          @externalLink=${() => this.handleExternalLink(s)}
          @more=${() => this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${u ? c`<wui-separator></wui-separator>` : null}
      </wui-flex>
    `;
  }
  renderActiveConnectionsList(e) {
    const n = this.getActiveConnections(e);
    return n.length === 0
      ? null
      : c`
      <wui-flex flexDirection="column" .padding=${["0", "2", "0", "2"]}>
        ${this.renderConnectionList(n, !1, e)}
      </wui-flex>
    `;
  }
  renderRecentConnections(e) {
    const { recentConnections: n } = qt.getConnectionsData(e);
    return n.flatMap((r) => r.accounts).length === 0
      ? null
      : c`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "2",
        "0",
        "2",
      ]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0", "2", "0", "2"]}>
          ${this.renderConnectionList(n, !0, e)}
        </wui-flex>
      </wui-flex>
    `;
  }
  renderConnectionList(e, n, o) {
    return e
      .filter((r) => r.accounts.length > 0)
      .map((r, i) => {
        const s = z.getConnectorById(r.connectorId),
          a = ee.getConnectorImage(s) ?? "",
          l = zr.getAuthData(r);
        return r.accounts.map((u, p) => {
          const h = i !== 0 || p !== 0,
            m = this.isAccountLoading(r.connectorId, u.address);
          return c`
            <wui-flex flexDirection="column">
              ${h ? c`<wui-separator></wui-separator>` : null}
              <wui-inactive-profile-wallet-item
                address=${u.address}
                alt=${r.connectorId}
                buttonLabel=${n ? "Connect" : "Switch"}
                buttonVariant=${n ? "neutral-secondary" : "accent-secondary"}
                rightIcon=${n ? "bin" : "power"}
                rightIconSize="sm"
                class=${n ? "recent-connection" : "active-connection"}
                data-testid=${n ? "recent-connection" : "active-connection"}
                imageSrc=${a}
                .iconBadge=${
                  this.isSmartAccount(u.address) ? Ge.BADGE.ICON : void 0
                }
                .iconBadgeSize=${
                  this.isSmartAccount(u.address) ? Ge.BADGE.SIZE : void 0
                }
                .icon=${l.icon}
                .iconSize=${l.iconSize}
                .loading=${m}
                .showBalance=${!1}
                .charsStart=${Ge.ADDRESS_DISPLAY.START}
                .charsEnd=${Ge.ADDRESS_DISPLAY.END}
                @buttonClick=${() => this.handleSwitchWallet(r, u.address, o)}
                @iconClick=${() =>
                  this.handleWalletAction({
                    connection: r,
                    address: u.address,
                    isRecentConnection: n,
                    namespace: o,
                  })}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `;
        });
      });
  }
  renderAddConnectionButton(e) {
    if (
      (!this.isMultiWalletEnabled() && this.caipAddress) ||
      !this.hasAnyConnections(e)
    )
      return null;
    const { title: n } = this.getChainLabelInfo(e);
    return c`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${() => this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${n}</wui-text>
      </wui-list-item>
    `;
  }
  renderEmptyState(e) {
    const { title: n, description: o } = this.getChainLabelInfo(e);
    return c`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${() => this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${n}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
  }
  handleTabChange(e) {
    var o, r, i;
    const n = this.namespaces[e];
    n &&
      ((o = this.chainListener) == null || o.call(this),
      (this.currentTab = this.namespaces.indexOf(n)),
      (this.namespace = n),
      (this.caipAddress =
        (r = E.getAccountData(n)) == null ? void 0 : r.caipAddress),
      (this.profileName =
        (i = E.getAccountData(n)) == null ? void 0 : i.profileName),
      (this.chainListener = E.subscribeChainProp(
        "accountState",
        (s) => {
          this.caipAddress = s == null ? void 0 : s.caipAddress;
        },
        n
      )));
  }
  async handleSwitchWallet(e, n, o) {
    try {
      (this.isSwitching = !0),
        (this.lastSelectedConnectorId = e.connectorId),
        (this.lastSelectedAddress = n),
        await F.switchConnection({
          connection: e,
          address: n,
          namespace: o,
          closeModalOnConnect: !1,
          onChange({ hasSwitchedAccount: r, hasSwitchedWallet: i }) {
            i
              ? re.showSuccess("Wallet switched")
              : r && re.showSuccess("Account switched");
          },
        });
    } catch {
      re.showError("Failed to switch wallet");
    } finally {
      this.isSwitching = !1;
    }
  }
  handleWalletAction(e) {
    const {
      connection: n,
      address: o,
      isRecentConnection: r,
      namespace: i,
    } = e;
    r
      ? (Xe.deleteAddressFromConnection({
          connectorId: n.connectorId,
          address: o,
          namespace: i,
        }),
        F.syncStorageConnections(),
        re.showSuccess("Wallet deleted"))
      : this.handleDisconnect(i, { id: n.connectorId });
  }
  async handleDisconnect(e, { id: n }) {
    try {
      await F.disconnect({ id: n, namespace: e }),
        re.showSuccess("Wallet disconnected");
    } catch {
      re.showError("Failed to disconnect wallet");
    }
  }
  handleCopyAddress(e) {
    j.copyToClopboard(e), re.showSuccess("Address copied");
  }
  handleMore() {
    L.push("AccountSettings");
  }
  handleExternalLink(e) {
    var o, r;
    const n =
      (r = (o = this.caipNetwork) == null ? void 0 : o.blockExplorers) == null
        ? void 0
        : r.default.url;
    n && j.openHref(`${n}/address/${e}`, "_blank");
  }
  handleAddConnection(e) {
    z.setFilterByNamespace(e), L.push("Connect");
  }
  getChainLabelInfo(e) {
    return (
      _u[e] ?? { title: "Add Wallet", description: "Add your first wallet" }
    );
  }
  isSmartAccount(e) {
    var o, r;
    if (!this.namespace) return !1;
    const n =
      (r = (o = this.user) == null ? void 0 : o.accounts) == null
        ? void 0
        : r.find((i) => i.type === "smartAccount");
    return n && e ? Ve.isLowerCaseMatch(n.address, e) : !1;
  }
  getPlainAddress() {
    return this.caipAddress ? j.getPlainAddress(this.caipAddress) : void 0;
  }
  getActiveConnections(e) {
    const n = this.activeConnectorIds[e],
      { connections: o } = qt.getConnectionsData(e),
      [r] = o.filter((l) => Ve.isLowerCaseMatch(l.connectorId, n));
    if (!n) return o;
    const i = e === Q.CHAIN.BITCOIN,
      { address: s } = this.caipAddress
        ? Ol.parseCaipAddress(this.caipAddress)
        : {};
    let a = [...(s ? [s] : [])];
    return (
      i && r && (a = r.accounts.map((l) => l.address) || []),
      qt.excludeConnectorAddressFromConnections({
        connectorId: n,
        addresses: a,
        connections: o,
      })
    );
  }
  hasAnyConnections(e) {
    const n = this.getActiveConnections(e),
      { recentConnections: o } = qt.getConnectionsData(e);
    return !!this.caipAddress || n.length > 0 || o.length > 0;
  }
  isAccountLoading(e, n) {
    return (
      Ve.isLowerCaseMatch(this.lastSelectedConnectorId, e) &&
      Ve.isLowerCaseMatch(this.lastSelectedAddress, n) &&
      this.isSwitching
    );
  }
  getProfileContent(e) {
    const { address: n, connections: o, connectorId: r, namespace: i } = e,
      [s] = o.filter((l) => Ve.isLowerCaseMatch(l.connectorId, r));
    if (
      i === Q.CHAIN.BITCOIN &&
      s != null &&
      s.accounts.every((l) => typeof l.type == "string")
    )
      return this.getBitcoinProfileContent(s.accounts, n);
    const a = zr.getAuthData({ connectorId: r, accounts: [] });
    return [
      {
        address: n,
        tagLabel: "Active",
        tagVariant: "success",
        enableButton: !0,
        profileName: this.profileName,
        buttonType: "disconnect",
        buttonLabel: "Disconnect",
        buttonVariant: "neutral-secondary",
        ...(a.isAuth
          ? {
              description: this.isSmartAccount(n)
                ? "Smart Account"
                : "EOA Account",
            }
          : {}),
      },
    ];
  }
  getBitcoinProfileContent(e, n) {
    const o = e.length > 1,
      r = this.getPlainAddress();
    return e.map((i) => {
      const s = Ve.isLowerCaseMatch(i.address, r);
      let a = "PAYMENT";
      return (
        i.type === "ordinal" && (a = "ORDINALS"),
        {
          address: i.address,
          tagLabel: Ve.isLowerCaseMatch(i.address, n) ? "Active" : void 0,
          tagVariant: Ve.isLowerCaseMatch(i.address, n) ? "success" : void 0,
          enableButton: !0,
          ...(o
            ? {
                label: a,
                alignItems: "flex-end",
                buttonType: s ? "disconnect" : "switch",
                buttonLabel: s ? "Disconnect" : "Switch",
                buttonVariant: s ? "neutral-secondary" : "accent-secondary",
              }
            : {
                alignItems: "center",
                buttonType: "disconnect",
                buttonLabel: "Disconnect",
                buttonVariant: "neutral-secondary",
              }),
        }
      );
    });
  }
  removeScrollListener() {
    var n;
    const e =
      (n = this.shadowRoot) == null ? void 0 : n.querySelector(".wallet-list");
    e && e.removeEventListener("scroll", () => this.handleConnectListScroll());
  }
  handleConnectListScroll() {
    var n;
    const e =
      (n = this.shadowRoot) == null ? void 0 : n.querySelector(".wallet-list");
    e && this.updateScrollOpacity(e);
  }
  isMultiWalletEnabled() {
    var e;
    return !!((e = this.remoteFeatures) != null && e.multiWallet);
  }
  updateScrollOpacity(e) {
    e.style.setProperty(
      "--connect-scroll--top-opacity",
      Ko.interpolate(
        [0, Ge.SCROLL_THRESHOLD],
        Ge.OPACITY_RANGE,
        e.scrollTop
      ).toString()
    ),
      e.style.setProperty(
        "--connect-scroll--bottom-opacity",
        Ko.interpolate(
          [0, Ge.SCROLL_THRESHOLD],
          Ge.OPACITY_RANGE,
          e.scrollHeight - e.scrollTop - e.offsetHeight
        ).toString()
      );
  }
  onConnectionsChange() {
    if (this.isMultiWalletEnabled() && this.namespace) {
      const { connections: e } = qt.getConnectionsData(this.namespace);
      e.length === 0 && L.reset("ProfileWallets");
    }
    this.requestUpdate();
  }
};
Ae.styles = Eu;
Ke([f()], Ae.prototype, "currentTab", void 0);
Ke([f()], Ae.prototype, "namespace", void 0);
Ke([f()], Ae.prototype, "namespaces", void 0);
Ke([f()], Ae.prototype, "caipAddress", void 0);
Ke([f()], Ae.prototype, "profileName", void 0);
Ke([f()], Ae.prototype, "activeConnectorIds", void 0);
Ke([f()], Ae.prototype, "lastSelectedAddress", void 0);
Ke([f()], Ae.prototype, "lastSelectedConnectorId", void 0);
Ke([f()], Ae.prototype, "isSwitching", void 0);
Ke([f()], Ae.prototype, "caipNetwork", void 0);
Ke([f()], Ae.prototype, "user", void 0);
Ke([f()], Ae.prototype, "remoteFeatures", void 0);
Ae = Ke([S("w3m-profile-wallets-view")], Ae);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const m2 = (t) =>
    t === null || (typeof t != "object" && typeof t != "function"),
  Au = (t) => t.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Hi = (t, e) => {
    var o;
    const n = t._$AN;
    if (n === void 0) return !1;
    for (const r of n) (o = r._$AO) == null || o.call(r, e, !1), Hi(r, e);
    return !0;
  },
  tr = (t) => {
    let e, n;
    do {
      if ((e = t._$AM) === void 0) break;
      (n = e._$AN), n.delete(t), (t = e);
    } while ((n == null ? void 0 : n.size) === 0);
  },
  Hc = (t) => {
    for (let e; (e = t._$AM); t = e) {
      let n = e._$AN;
      if (n === void 0) e._$AN = n = new Set();
      else if (n.has(t)) break;
      n.add(t), Pu(e);
    }
  };
function Iu(t) {
  this._$AN !== void 0
    ? (tr(this), (this._$AM = t), Hc(this))
    : (this._$AM = t);
}
function Tu(t, e = !1, n = 0) {
  const o = this._$AH,
    r = this._$AN;
  if (r !== void 0 && r.size !== 0)
    if (e)
      if (Array.isArray(o))
        for (let i = n; i < o.length; i++) Hi(o[i], !1), tr(o[i]);
      else o != null && (Hi(o, !1), tr(o));
    else Hi(this, t);
}
const Pu = (t) => {
  t.type == Nl.CHILD && (t._$AP ?? (t._$AP = Tu), t._$AQ ?? (t._$AQ = Iu));
};
class Ru extends Wl {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(e, n, o) {
    super._$AT(e, n, o), Hc(this), (this.isConnected = e._$AU);
  }
  _$AO(e, n = !0) {
    var o, r;
    e !== this.isConnected &&
      ((this.isConnected = e),
      e
        ? (o = this.reconnected) == null || o.call(this)
        : (r = this.disconnected) == null || r.call(this)),
      n && (Hi(this, e), tr(this));
  }
  setValue(e) {
    if (Au(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const n = [...this._$Ct._$AH];
      (n[this._$Ci] = e), this._$Ct._$AI(n, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const _o = () => new Ou();
class Ou {}
const Vr = new WeakMap(),
  Ao = Ll(
    class extends Ru {
      render(t) {
        return Ca;
      }
      update(t, [e]) {
        var o;
        const n = e !== this.G;
        return (
          n && this.G !== void 0 && this.rt(void 0),
          (n || this.lt !== this.ct) &&
            ((this.G = e),
            (this.ht = (o = t.options) == null ? void 0 : o.host),
            this.rt((this.ct = t.element))),
          Ca
        );
      }
      rt(t) {
        if ((this.isConnected || (t = void 0), typeof this.G == "function")) {
          const e = this.ht ?? globalThis;
          let n = Vr.get(e);
          n === void 0 && ((n = new WeakMap()), Vr.set(e, n)),
            n.get(this.G) !== void 0 && this.G.call(this.ht, void 0),
            n.set(this.G, t),
            t !== void 0 && this.G.call(this.ht, t);
        } else this.G.value = t;
      }
      get lt() {
        var t, e;
        return typeof this.G == "function"
          ? (t = Vr.get(this.ht ?? globalThis)) == null
            ? void 0
            : t.get(this.G)
          : (e = this.G) == null
          ? void 0
          : e.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    }
  ),
  Wu = U`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      color ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      border ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      box-shadow ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      width ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      height ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      transform ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      opacity ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors: t }) => t.neutrals300};
    border-radius: ${({ borderRadius: t }) => t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      color ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      border ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      box-shadow ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      width ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      height ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]},
      transform ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]},
      opacity ${({ durations: t }) => t.lg} ${({ easings: t }) =>
    t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors: t }) => t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens: t }) => t.core.iconAccentPrimary};
    background-color: ${({ tokens: t }) => t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens: t }) => t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens: t }) => t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors: t }) => t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors: t }) => t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors: t }) => t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors: t }) => t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors: t }) => t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens: t }) => t.theme.textTertiary};
  }
`;
var yr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ci = class extends A {
  constructor() {
    super(...arguments),
      (this.inputElementRef = _o()),
      (this.checked = !1),
      (this.disabled = !1),
      (this.size = "md");
  }
  render() {
    return c`
      <label data-size=${this.size}>
        <input
          ${Ao(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var e;
    this.dispatchEvent(
      new CustomEvent("switchChange", {
        detail: (e = this.inputElementRef.value) == null ? void 0 : e.checked,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
Ci.styles = [K, ie, Wu];
yr([d({ type: Boolean })], Ci.prototype, "checked", void 0);
yr([d({ type: Boolean })], Ci.prototype, "disabled", void 0);
yr([d()], Ci.prototype, "size", void 0);
Ci = yr([S("wui-toggle")], Ci);
const Nu = U`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.theme.foregroundPrimary};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var Zc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let nr = class extends A {
  constructor() {
    super(...arguments), (this.checked = !1);
  }
  render() {
    return c`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
  }
  handleToggleChange(e) {
    e.stopPropagation(), (this.checked = e.detail), this.dispatchSwitchEvent();
  }
  dispatchSwitchEvent() {
    this.dispatchEvent(
      new CustomEvent("certifiedSwitchChange", {
        detail: this.checked,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
nr.styles = [K, ie, Nu];
Zc([d({ type: Boolean })], nr.prototype, "checked", void 0);
nr = Zc([S("wui-certified-switch")], nr);
const Lu = U`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({ spacing: t }) => t[3]};
    color: ${({ tokens: t }) => t.theme.textPrimary};
    caret-color: ${({ tokens: t }) => t.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({ borderRadius: t }) => t[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({ tokens: t }) => t.theme.borderPrimary};
    caret-color: ${({ tokens: t }) => t.core.textAccentPrimary};
    padding: ${({ spacing: t }) => t[3]} ${({ spacing: t }) => t[3]}
      ${({ spacing: t }) => t[3]} ${({ spacing: t }) => t[10]};
    font-size: ${({ textSize: t }) => t.large};
    line-height: ${({ typography: t }) => t["lg-regular"].lineHeight};
    letter-spacing: ${({ typography: t }) => t["lg-regular"].letterSpacing};
    font-weight: ${({ fontWeight: t }) => t.regular};
    font-family: ${({ fontFamily: t }) => t.regular};
  }

  input[data-size='lg'] {
    padding: ${({ spacing: t }) => t[4]} ${({ spacing: t }) => t[3]}
      ${({ spacing: t }) => t[4]} ${({ spacing: t }) => t[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({ tokens: t }) => t.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({ tokens: t }) => t.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({ tokens: t }) => t.theme.borderSecondary};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens: t }) =>
      t.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens: t }) =>
      t.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({ tokens: t }) =>
      t.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({ spacing: t }) => t[4]};
    color: ${({ tokens: t }) => t.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing: t }) => t[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({ borderRadius: t }) => t[2]};
    color: ${({ tokens: t }) => t.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({ tokens: t }) => t.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({ spacing: t }) => t[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
var ot = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Me = class extends A {
  constructor() {
    super(...arguments),
      (this.inputElementRef = _o()),
      (this.disabled = !1),
      (this.loading = !1),
      (this.placeholder = ""),
      (this.type = "text"),
      (this.value = ""),
      (this.size = "md");
  }
  render() {
    return c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Ao(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${N(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value || ""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`;
  }
  templateLeftIcon() {
    return this.icon
      ? c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`
      : null;
  }
  templateSubmitButton() {
    var e;
    return this.onSubmit
      ? c`<button
        class="wui-input-text-submit-button ${this.loading ? "loading" : ""}"
        @click=${(e = this.onSubmit) == null ? void 0 : e.bind(this)}
        ?disabled=${this.disabled || this.loading}
      >
        ${
          this.loading
            ? c`<wui-icon name="spinner" size="md"></wui-icon>`
            : c`<wui-icon name="chevronRight" size="md"></wui-icon>`
        }
      </button>`
      : null;
  }
  templateError() {
    return this.errorText
      ? c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`
      : null;
  }
  templateWarning() {
    return this.warningText
      ? c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`
      : null;
  }
  dispatchInputChangeEvent() {
    var e;
    this.dispatchEvent(
      new CustomEvent("inputChange", {
        detail: (e = this.inputElementRef.value) == null ? void 0 : e.value,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
Me.styles = [K, ie, Lu];
ot([d()], Me.prototype, "icon", void 0);
ot([d({ type: Boolean })], Me.prototype, "disabled", void 0);
ot([d({ type: Boolean })], Me.prototype, "loading", void 0);
ot([d()], Me.prototype, "placeholder", void 0);
ot([d()], Me.prototype, "type", void 0);
ot([d()], Me.prototype, "value", void 0);
ot([d()], Me.prototype, "errorText", void 0);
ot([d()], Me.prototype, "warningText", void 0);
ot([d()], Me.prototype, "onSubmit", void 0);
ot([d()], Me.prototype, "size", void 0);
ot([d({ attribute: !1 })], Me.prototype, "onKeyDown", void 0);
Me = ot([S("wui-input-text")], Me);
const Du = U`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing: t }) => t[3]};
    color: ${({ tokens: t }) => t.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing: t }) => t[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
    transition: background-color ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }
`;
var Kc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let ir = class extends A {
  constructor() {
    super(...arguments),
      (this.inputComponentRef = _o()),
      (this.inputValue = "");
  }
  render() {
    return c`
      <wui-input-text
        ${Ao(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${
          this.inputValue
            ? c`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`
            : null
        }
      </wui-input-text>
    `;
  }
  onInputChange(e) {
    this.inputValue = e.detail || "";
  }
  clearValue() {
    const e = this.inputComponentRef.value,
      n = e == null ? void 0 : e.inputElementRef.value;
    n &&
      ((n.value = ""),
      (this.inputValue = ""),
      n.focus(),
      n.dispatchEvent(new Event("input")));
  }
};
ir.styles = [K, Du];
Kc([d()], ir.prototype, "inputValue", void 0);
ir = Kc([S("wui-search-bar")], ir);
const qc = se`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,
  Mu = U`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing: t }) => t[2]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens: t }) => t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var Gc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let or = class extends A {
  constructor() {
    super(...arguments), (this.type = "wallet");
  }
  render() {
    return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    return this.type === "network"
      ? c` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${qc}`
      : c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
  }
};
or.styles = [K, ie, Mu];
Gc([d()], or.prototype, "type", void 0);
or = Gc([S("wui-card-select-loader")], or);
const Bu = xe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var rt = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Be = class extends A {
  render() {
    return (
      (this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && de.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && de.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && de.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && de.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && de.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && de.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && de.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && de.getSpacingStyles(this.margin, 3)};
    `),
      c`<slot></slot>`
    );
  }
};
Be.styles = [K, Bu];
rt([d()], Be.prototype, "gridTemplateRows", void 0);
rt([d()], Be.prototype, "gridTemplateColumns", void 0);
rt([d()], Be.prototype, "justifyItems", void 0);
rt([d()], Be.prototype, "alignItems", void 0);
rt([d()], Be.prototype, "justifyContent", void 0);
rt([d()], Be.prototype, "alignContent", void 0);
rt([d()], Be.prototype, "columnGap", void 0);
rt([d()], Be.prototype, "rowGap", void 0);
rt([d()], Be.prototype, "gap", void 0);
rt([d()], Be.prototype, "padding", void 0);
rt([d()], Be.prototype, "margin", void 0);
Be = rt([S("wui-grid")], Be);
const ju = U`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[3]} ${({ spacing: t }) => t[0]};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius: t }) => t[4]}, 20px);
    transition:
      color ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-1"]},
      background-color ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-1"]},
      border-radius ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens: t }) => t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens: t }) => t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors: t }) => t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors: t }) => t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors: t }) => t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var Io = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Dn = class extends A {
  constructor() {
    super(),
      (this.observer = new IntersectionObserver(() => {})),
      (this.visible = !1),
      (this.imageSrc = void 0),
      (this.imageLoading = !1),
      (this.wallet = void 0),
      (this.observer = new IntersectionObserver(
        (e) => {
          e.forEach((n) => {
            n.isIntersecting
              ? ((this.visible = !0), this.fetchImageSrc())
              : (this.visible = !1);
          });
        },
        { threshold: 0.01 }
      ));
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    var n, o;
    const e =
      ((n = this.wallet) == null ? void 0 : n.badge_type) === "certified";
    return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${N(e ? "certified" : void 0)}
            >${(o = this.wallet) == null ? void 0 : o.name}</wui-text
          >
          ${
            e
              ? c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`
              : null
          }
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    var e, n;
    return (!this.visible && !this.imageSrc) || this.imageLoading
      ? this.shimmerTemplate()
      : c`
      <wui-wallet-image
        size="lg"
        imageSrc=${N(this.imageSrc)}
        name=${(e = this.wallet) == null ? void 0 : e.name}
        .installed=${(n = this.wallet) == null ? void 0 : n.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    this.wallet &&
      ((this.imageSrc = ee.getWalletImage(this.wallet)),
      !this.imageSrc &&
        ((this.imageLoading = !0),
        (this.imageSrc = await ee.fetchWalletImage(this.wallet.image_id)),
        (this.imageLoading = !1)));
  }
};
Dn.styles = ju;
Io([f()], Dn.prototype, "visible", void 0);
Io([f()], Dn.prototype, "imageSrc", void 0);
Io([f()], Dn.prototype, "imageLoading", void 0);
Io([d()], Dn.prototype, "wallet", void 0);
Dn = Io([S("w3m-all-wallets-list-item")], Dn);
const zu = U`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations: t }) => t.xl};
    animation-timing-function: ${({ easings: t }) => t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing: t }) => t[4]};
    padding-bottom: ${({ spacing: t }) => t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var Ri = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Aa = "local-paginator";
let on = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.paginationObserver = void 0),
      (this.loading = !oe.state.wallets.length),
      (this.wallets = oe.state.wallets),
      (this.recommended = oe.state.recommended),
      (this.featured = oe.state.featured),
      (this.filteredWallets = oe.state.filteredWallets),
      this.unsubscribe.push(
        oe.subscribeKey("wallets", (e) => (this.wallets = e)),
        oe.subscribeKey("recommended", (e) => (this.recommended = e)),
        oe.subscribeKey("featured", (e) => (this.featured = e)),
        oe.subscribeKey("filteredWallets", (e) => (this.filteredWallets = e))
      );
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e;
    this.unsubscribe.forEach((n) => n()),
      (e = this.paginationObserver) == null || e.disconnect();
  }
  render() {
    return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "3", "3", "3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var n;
    this.loading = !0;
    const e =
      (n = this.shadowRoot) == null ? void 0 : n.querySelector("wui-grid");
    e &&
      (await oe.fetchWalletsByPage({ page: 1 }),
      await e.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease",
      }).finished,
      (this.loading = !1),
      e.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease",
      }));
  }
  shimmerTemplate(e, n) {
    return [...Array(e)].map(
      () => c`
        <wui-card-select-loader type="wallet" id=${N(
          n
        )}></wui-card-select-loader>
      `
    );
  }
  getWallets() {
    var r;
    const e = [...this.featured, ...this.recommended];
    ((r = this.filteredWallets) == null ? void 0 : r.length) > 0
      ? e.push(...this.filteredWallets)
      : e.push(...this.wallets);
    const n = j.uniqueBy(e, "id"),
      o = En.markWalletsAsInstalled(n);
    return En.markWalletsWithDisplayIndex(o);
  }
  walletsTemplate() {
    return this.getWallets().map(
      (n) => c`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${n.id}"
          @click=${() => this.onConnectWallet(n)}
          .wallet=${n}
        ></w3m-all-wallets-list-item>
      `
    );
  }
  paginationLoaderTemplate() {
    const {
        wallets: e,
        recommended: n,
        featured: o,
        count: r,
        mobileFilteredOutWalletsLength: i,
      } = oe.state,
      s = window.innerWidth < 352 ? 3 : 4,
      a = e.length + n.length;
    let u = Math.ceil(a / s) * s - a + s;
    return (
      (u -= e.length ? o.length % s : 0),
      r === 0 && o.length > 0
        ? null
        : r === 0 || [...o, ...e, ...n].length < r - (i ?? 0)
        ? this.shimmerTemplate(u, Aa)
        : null
    );
  }
  createPaginationObserver() {
    var n;
    const e =
      (n = this.shadowRoot) == null ? void 0 : n.querySelector(`#${Aa}`);
    e &&
      ((this.paginationObserver = new IntersectionObserver(([o]) => {
        if (o != null && o.isIntersecting && !this.loading) {
          const { page: r, count: i, wallets: s } = oe.state;
          s.length < i && oe.fetchWalletsByPage({ page: r + 1 });
        }
      })),
      this.paginationObserver.observe(e));
  }
  onConnectWallet(e) {
    z.selectWalletConnector(e);
  }
};
on.styles = zu;
Ri([f()], on.prototype, "loading", void 0);
Ri([f()], on.prototype, "wallets", void 0);
Ri([f()], on.prototype, "recommended", void 0);
Ri([f()], on.prototype, "featured", void 0);
Ri([f()], on.prototype, "filteredWallets", void 0);
on = Ri([S("w3m-all-wallets-list")], on);
const Vu = xe`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var Cr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let xi = class extends A {
  constructor() {
    super(...arguments),
      (this.prevQuery = ""),
      (this.prevBadge = void 0),
      (this.loading = !0),
      (this.query = "");
  }
  render() {
    return (
      this.onSearch(),
      this.loading
        ? c`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`
        : this.walletsTemplate()
    );
  }
  async onSearch() {
    (this.query.trim() !== this.prevQuery.trim() ||
      this.badge !== this.prevBadge) &&
      ((this.prevQuery = this.query),
      (this.prevBadge = this.badge),
      (this.loading = !0),
      await oe.searchWallet({ search: this.query, badge: this.badge }),
      (this.loading = !1));
  }
  walletsTemplate() {
    const { search: e } = oe.state,
      n = En.markWalletsAsInstalled(e);
    return e.length
      ? c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "3", "3", "3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${n.map(
          (o) => c`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
      : c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
  }
  onConnectWallet(e) {
    z.selectWalletConnector(e);
  }
};
xi.styles = Vu;
Cr([f()], xi.prototype, "loading", void 0);
Cr([d()], xi.prototype, "query", void 0);
Cr([d()], xi.prototype, "badge", void 0);
xi = Cr([S("w3m-all-wallets-search")], xi);
var na = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Gi = class extends A {
  constructor() {
    super(...arguments),
      (this.search = ""),
      (this.badge = void 0),
      (this.onDebouncedSearch = j.debounce((e) => {
        this.search = e;
      }));
  }
  render() {
    const e = this.search.length >= 2;
    return c`
      <wui-flex .padding=${["1", "3", "3", "3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(
          this
        )}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === "certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? c`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`
          : c`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`
      }
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  onCertifiedSwitchChange(e) {
    e.detail
      ? ((this.badge = "certified"),
        re.showSvg("Only WalletConnect certified", {
          icon: "walletConnectBrown",
          iconColor: "accent-100",
        }))
      : (this.badge = void 0);
  }
  qrButtonTemplate() {
    return j.isMobile()
      ? c`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
      : null;
  }
  onWalletConnectQr() {
    L.push("ConnectingWalletConnect");
  }
};
na([f()], Gi.prototype, "search", void 0);
na([f()], Gi.prototype, "badge", void 0);
Gi = na([S("w3m-all-wallets-view")], Gi);
const Uu = U`
  button {
    display: flex;
    gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[4]};
    width: 100%;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  :host([data-size='md']) button {
    padding: ${({ spacing: t }) => t[3]};
    border-radius: ${({ borderRadius: t }) => t[3]};
  }

  button:hover {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;
var Oi = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let rn = class extends A {
  constructor() {
    super(...arguments),
      (this.text = ""),
      (this.disabled = !1),
      (this.size = "lg"),
      (this.icon = "copy"),
      (this.tabIdx = void 0);
  }
  render() {
    this.dataset.size = this.size;
    const e = `${this.size}-regular`;
    return c`
      <button ?disabled=${this.disabled} tabindex=${N(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${
      this.size
    } color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${
      this.text
    }</wui-text>
      </button>
    `;
  }
};
rn.styles = [K, ie, Uu];
Oi([d()], rn.prototype, "text", void 0);
Oi([d({ type: Boolean })], rn.prototype, "disabled", void 0);
Oi([d()], rn.prototype, "size", void 0);
Oi([d()], rn.prototype, "icon", void 0);
Oi([d()], rn.prototype, "tabIdx", void 0);
rn = Oi([S("wui-list-button")], rn);
const Fu = xe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
var To = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Mn = class extends A {
  constructor() {
    super(...arguments), (this.disabled = !1);
  }
  render() {
    return c`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${N(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `;
  }
  templateError() {
    return this.errorMessage
      ? c`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`
      : null;
  }
};
Mn.styles = [K, Fu];
To([d()], Mn.prototype, "errorMessage", void 0);
To([d({ type: Boolean })], Mn.prototype, "disabled", void 0);
To([d()], Mn.prototype, "value", void 0);
To([d()], Mn.prototype, "tabIdx", void 0);
Mn = To([S("wui-email-input")], Mn);
const Hu = U`
  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({ spacing: t }) => t[2]};
  }

  wui-loading-spinner {
    right: ${({ spacing: t }) => t[3]};
  }

  wui-text {
    margin: ${({ spacing: t }) => t[2]} ${({ spacing: t }) => t[3]}
      ${({ spacing: t }) => t[0]} ${({ spacing: t }) => t[3]};
  }
`;
var Wi = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let sn = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.formRef = _o()),
      (this.email = ""),
      (this.loading = !1),
      (this.error = ""),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.unsubscribe.push(
        B.subscribeKey("remoteFeatures", (e) => {
          this.remoteFeatures = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  firstUpdated() {
    var e;
    (e = this.formRef.value) == null ||
      e.addEventListener("keydown", (n) => {
        n.key === "Enter" && this.onSubmitEmail(n);
      });
  }
  render() {
    const e = F.hasAnyConnection(Q.CONNECTOR_ID.AUTH);
    return c`
      <form ${Ao(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${N(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
  }
  submitButtonTemplate() {
    return !this.loading && this.email.length > 3
      ? c`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
      : null;
  }
  loadingTemplate() {
    return this.loading
      ? c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`
      : null;
  }
  templateError() {
    return this.error
      ? c`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`
      : null;
  }
  onEmailInputChange(e) {
    (this.email = e.detail.trim()), (this.error = "");
  }
  async onSubmitEmail(e) {
    var o;
    if (!si.isValidEmail(this.email)) {
      Dc.open(
        { displayMessage: Dl.ALERT_WARNINGS.INVALID_EMAIL.displayMessage },
        "warning"
      );
      return;
    }
    if (
      !Q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((r) => r === E.state.activeChain)
    ) {
      const r = E.getFirstCaipNetworkSupportsAuthConnector();
      if (r) {
        L.push("SwitchNetwork", { network: r });
        return;
      }
    }
    try {
      if (this.loading) return;
      (this.loading = !0), e.preventDefault();
      const r = z.getAuthConnector();
      if (!r)
        throw new Error("w3m-email-login-widget: Auth connector not found");
      const { action: i } = await r.provider.connectEmail({
        email: this.email,
      });
      if (
        (te.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" }),
        i === "VERIFY_OTP")
      )
        te.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" }),
          L.push("EmailVerifyOtp", { email: this.email });
      else if (i === "VERIFY_DEVICE")
        L.push("EmailVerifyDevice", { email: this.email });
      else if (i === "CONNECT") {
        const s = (o = this.remoteFeatures) == null ? void 0 : o.multiWallet;
        await F.connectExternal(r, E.state.activeChain),
          s
            ? (L.replace("ProfileWallets"), re.showSuccess("New Wallet Added"))
            : L.replace("Account");
      }
    } catch (r) {
      const i = j.parseError(r);
      i != null && i.includes("Invalid email")
        ? (this.error = "Invalid email. Try again.")
        : re.showError(r);
    } finally {
      this.loading = !1;
    }
  }
  onFocusEvent() {
    te.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
  }
};
sn.styles = Hu;
Wi([d()], sn.prototype, "tabIdx", void 0);
Wi([f()], sn.prototype, "email", void 0);
Wi([f()], sn.prototype, "loading", void 0);
Wi([f()], sn.prototype, "error", void 0);
Wi([f()], sn.prototype, "remoteFeatures", void 0);
sn = Wi([S("w3m-email-login-widget")], sn);
const Zu = U`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({ spacing: t }) => t[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({ colors: t }) => t.neutrals400};
    color: ${({ colors: t }) => t.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({ colors: t }) => t.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({ colors: t }) => t.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({ borderRadius: t }) => t[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({ borderRadius: t }) => t[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({ tokens: t }) => t.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({ tokens: t }) => t.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({ colors: t }) => t.neutrals700};
    background-color: ${({ colors: t }) => t.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({ colors: t }) => t.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({ colors: t }) => t.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;
var xr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Ku = { lg: "md", md: "sm", sm: "sm" };
let $i = class extends A {
  constructor() {
    super(...arguments),
      (this.inputElementRef = _o()),
      (this.checked = void 0),
      (this.disabled = !1),
      (this.size = "md");
  }
  render() {
    const e = Ku[this.size];
    return c`
      <label data-size=${this.size}>
        <input
          ${Ao(this.inputElementRef)}
          ?checked=${N(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${e}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var e;
    this.dispatchEvent(
      new CustomEvent("checkboxChange", {
        detail: (e = this.inputElementRef.value) == null ? void 0 : e.checked,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
$i.styles = [K, Zu];
xr([d({ type: Boolean })], $i.prototype, "checked", void 0);
xr([d({ type: Boolean })], $i.prototype, "disabled", void 0);
xr([d()], $i.prototype, "size", void 0);
$i = xr([S("wui-checkbox")], $i);
const qu = U`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({ spacing: t }) => t[3]};
  }
  a {
    text-decoration: none;
    color: ${({ tokens: t }) => t.theme.textSecondary};
    font-weight: 500;
  }
`;
var Yc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let rr = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.checked = xn.state.isLegalCheckboxChecked),
      this.unsubscribe.push(
        xn.subscribeKey("isLegalCheckboxChecked", (e) => {
          this.checked = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    var r;
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state,
      o = (r = B.state.features) == null ? void 0 : r.legalCheckbox;
    return (!e && !n) || !o
      ? null
      : c`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state;
    return e && n ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = B.state;
    return e
      ? c`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`
      : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = B.state;
    return e
      ? c`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`
      : null;
  }
  onCheckboxChange() {
    xn.setIsLegalCheckboxChecked(!this.checked);
  }
};
rr.styles = [qu];
Yc([f()], rr.prototype, "checked", void 0);
rr = Yc([S("w3m-legal-checkbox")], rr);
const Gu = U`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({ borderRadius: t }) => t[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;
var Qc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let sr = class extends A {
  constructor() {
    super(...arguments), (this.logo = "google");
  }
  render() {
    return c`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `;
  }
};
sr.styles = [K, Gu];
Qc([d()], sr.prototype, "logo", void 0);
sr = Qc([S("wui-logo")], sr);
const Yu = U`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var Po = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Bn = class extends A {
  constructor() {
    super(...arguments),
      (this.logo = "google"),
      (this.name = "Continue with google"),
      (this.disabled = !1);
  }
  render() {
    return c`
      <button ?disabled=${this.disabled} tabindex=${N(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `;
  }
};
Bn.styles = [K, ie, Yu];
Po([d()], Bn.prototype, "logo", void 0);
Po([d()], Bn.prototype, "name", void 0);
Po([d()], Bn.prototype, "tabIdx", void 0);
Po([d({ type: Boolean })], Bn.prototype, "disabled", void 0);
Bn = Po([S("wui-list-social")], Bn);
const Qu = U`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({ tokens: t }) => t.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  button > wui-icon {
    width: 24px;
    height: 24px;
  }
`;
var $r = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Si = class extends A {
  constructor() {
    super(...arguments),
      (this.logo = "google"),
      (this.disabled = !1),
      (this.tabIdx = void 0);
  }
  render() {
    return c`
      <button ?disabled=${this.disabled} tabindex=${N(this.tabIdx)}>
        <wui-icon name=${this.logo}></wui-icon>
      </button>
    `;
  }
};
Si.styles = [K, ie, Qu];
$r([d()], Si.prototype, "logo", void 0);
$r([d({ type: Boolean })], Si.prototype, "disabled", void 0);
$r([d()], Si.prototype, "tabIdx", void 0);
Si = $r([S("wui-logo-select")], Si);
const Xu = U`
  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1)
      ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }
`;
var Gn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Ia = 2,
  Ta = 6;
let jt = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.walletGuide = "get-started"),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.remoteFeatures = B.state.remoteFeatures),
      (this.authConnector = this.connectors.find((e) => e.type === "AUTH")),
      (this.isPwaLoading = !1),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => {
          (this.connectors = e),
            (this.authConnector = this.connectors.find(
              (n) => n.type === "AUTH"
            ));
        }),
        B.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
      );
  }
  connectedCallback() {
    super.connectedCallback(), this.handlePwaFrameLoad();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
  }
  topViewTemplate() {
    var o;
    const e = this.walletGuide === "explore";
    let n = (o = this.remoteFeatures) == null ? void 0 : o.socials;
    return !n && e
      ? ((n = Ce.DEFAULT_SOCIALS), this.renderTopViewContent(n))
      : n
      ? this.renderTopViewContent(n)
      : null;
  }
  renderTopViewContent(e) {
    return e.length === 2
      ? c` <wui-flex gap="2">
        ${e.slice(0, Ia).map(
          (n) => c`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${() => {
                this.onSocialClick(n);
              }}
              logo=${n}
              tabIdx=${N(this.tabIdx)}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`
        )}
      </wui-flex>`
      : c` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${() => {
        this.onSocialClick(e[0]);
      }}
      size="lg"
      icon=${N(e[0])}
      text=${`Continue with ${e[0]}`}
      tabIdx=${N(this.tabIdx)}
      ?disabled=${this.isPwaLoading || this.hasConnection()}
    ></wui-list-button>`;
  }
  bottomViewTemplate() {
    var r;
    let e = (r = this.remoteFeatures) == null ? void 0 : r.socials;
    const n = this.walletGuide === "explore";
    return (
      (!this.authConnector || !e || e.length === 0) &&
        n &&
        (e = Ce.DEFAULT_SOCIALS),
      !e || e.length <= Ia
        ? null
        : e && e.length > Ta
        ? c`<wui-flex gap="2">
        ${e.slice(1, Ta - 1).map(
          (i) => c`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${() => {
                this.onSocialClick(i);
              }}
              logo=${i}
              tabIdx=${N(this.tabIdx)}
              ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
              ?disabled=${this.isPwaLoading || this.hasConnection()}
            ></wui-logo-select>`
        )}
        <wui-logo-select
          logo="more"
          tabIdx=${N(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading || this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`
        : e
        ? c`<wui-flex gap="2">
      ${e.slice(1, e.length).map(
        (i) => c`<wui-logo-select
            data-testid=${`social-selector-${i}`}
            @click=${() => {
              this.onSocialClick(i);
            }}
            logo=${i}
            tabIdx=${N(this.tabIdx)}
            ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
            ?disabled=${this.isPwaLoading || this.hasConnection()}
          ></wui-logo-select>`
      )}
    </wui-flex>`
        : null
    );
  }
  onMoreSocialsClick() {
    L.push("ConnectSocials");
  }
  async onSocialClick(e) {
    if (
      !Q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((o) => o === E.state.activeChain)
    ) {
      const o = E.getFirstCaipNetworkSupportsAuthConnector();
      if (o) {
        L.push("SwitchNetwork", { network: o });
        return;
      }
    }
    e && (await md(e));
  }
  async handlePwaFrameLoad() {
    var e;
    if (j.isPWA()) {
      this.isPwaLoading = !0;
      try {
        ((e = this.authConnector) == null ? void 0 : e.provider) instanceof
          Ml && (await this.authConnector.provider.init());
      } catch (n) {
        Dc.open(
          {
            displayMessage: "Error loading embedded wallet in PWA",
            debugMessage: n.message,
          },
          "error"
        );
      } finally {
        this.isPwaLoading = !1;
      }
    }
  }
  hasConnection() {
    return F.hasAnyConnection(Q.CONNECTOR_ID.AUTH);
  }
};
jt.styles = Xu;
Gn([d()], jt.prototype, "walletGuide", void 0);
Gn([d()], jt.prototype, "tabIdx", void 0);
Gn([f()], jt.prototype, "connectors", void 0);
Gn([f()], jt.prototype, "remoteFeatures", void 0);
Gn([f()], jt.prototype, "authConnector", void 0);
Gn([f()], jt.prototype, "isPwaLoading", void 0);
jt = Gn([S("w3m-social-login-widget")], jt);
const Ju = U`
  :host {
    position: relative;
    border-radius: ${({ borderRadius: t }) => t[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({ spacing: t }) => t[1]};
    padding: ${({ spacing: t }) => t[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;
var Xc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Ur = 4;
let ar = class extends A {
  constructor() {
    super(...arguments), (this.walletImages = []);
  }
  render() {
    const e = this.walletImages.length < Ur;
    return c`${this.walletImages.slice(0, Ur).map(
      ({ src: n, walletName: o }) => c`
          <wui-wallet-image
            size="sm"
            imageSrc=${n}
            name=${N(o)}
          ></wui-wallet-image>
        `
    )}
    ${
      e
        ? [...Array(Ur - this.walletImages.length)].map(
            () => c` <wui-wallet-image size="sm" name=""></wui-wallet-image>`
          )
        : null
    } `;
  }
};
ar.styles = [K, Ju];
Xc([d({ type: Array })], ar.prototype, "walletImages", void 0);
ar = Xc([S("wui-all-wallets-image")], ar);
const e1 = U`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({ spacing: t }) => t[2]};
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
    color: ${({ tokens: t }) => t.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({ tokens: t }) => t.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({ tokens: t }) => t.core.glass010};
    color: ${({ tokens: t }) => t.theme.foregroundTertiary};
  }
`;
var qe = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Oe = class extends A {
  constructor() {
    super(...arguments),
      (this.walletImages = []),
      (this.imageSrc = ""),
      (this.name = ""),
      (this.size = "md"),
      (this.tabIdx = void 0),
      (this.disabled = !1),
      (this.showAllWallets = !1),
      (this.loading = !1),
      (this.loadingSpinnerColor = "accent-100");
  }
  render() {
    return (
      (this.dataset.size = this.size),
      c`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${N(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `
    );
  }
  templateAllWallets() {
    return this.showAllWallets && this.imageSrc
      ? c` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `
      : this.showAllWallets && this.walletIcon
      ? c` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `
      : null;
  }
  templateWalletImage() {
    return !this.showAllWallets && this.imageSrc
      ? c`<wui-wallet-image
        size=${N(this.size === "sm" ? "sm" : "md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`
      : !this.showAllWallets && !this.imageSrc
      ? c`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`
      : null;
  }
  templateStatus() {
    return this.loading
      ? c`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`
      : this.tagLabel && this.tagVariant
      ? c`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`
      : null;
  }
};
Oe.styles = [K, ie, e1];
qe([d({ type: Array })], Oe.prototype, "walletImages", void 0);
qe([d()], Oe.prototype, "imageSrc", void 0);
qe([d()], Oe.prototype, "name", void 0);
qe([d()], Oe.prototype, "size", void 0);
qe([d()], Oe.prototype, "tagLabel", void 0);
qe([d()], Oe.prototype, "tagVariant", void 0);
qe([d()], Oe.prototype, "walletIcon", void 0);
qe([d()], Oe.prototype, "tabIdx", void 0);
qe([d({ type: Boolean })], Oe.prototype, "disabled", void 0);
qe([d({ type: Boolean })], Oe.prototype, "showAllWallets", void 0);
qe([d({ type: Boolean })], Oe.prototype, "loading", void 0);
qe([d({ type: String })], Oe.prototype, "loadingSpinnerColor", void 0);
Oe = qe([S("wui-list-wallet")], Oe);
var Ni = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let jn = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.count = oe.state.count),
      (this.filteredCount = oe.state.filteredWallets.length),
      (this.isFetchingRecommendedWallets =
        oe.state.isFetchingRecommendedWallets),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e)),
        oe.subscribeKey("count", (e) => (this.count = e)),
        oe.subscribeKey(
          "filteredWallets",
          (e) => (this.filteredCount = e.length)
        ),
        oe.subscribeKey(
          "isFetchingRecommendedWallets",
          (e) => (this.isFetchingRecommendedWallets = e)
        )
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.find((u) => u.id === "walletConnect"),
      { allWallets: n } = B.state;
    if (!e || n === "HIDE" || (n === "ONLY_MOBILE" && !j.isMobile()))
      return null;
    const o = oe.state.featured.length,
      r = this.count + o,
      i = r < 10 ? r : Math.floor(r / 10) * 10,
      s = this.filteredCount > 0 ? this.filteredCount : i;
    let a = `${s}`;
    this.filteredCount > 0
      ? (a = `${this.filteredCount}`)
      : s < r && (a = `${s}+`);
    const l = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${N(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    te.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }),
      L.push("AllWallets");
  }
};
Ni([d()], jn.prototype, "tabIdx", void 0);
Ni([f()], jn.prototype, "connectors", void 0);
Ni([f()], jn.prototype, "count", void 0);
Ni([f()], jn.prototype, "filteredCount", void 0);
Ni([f()], jn.prototype, "isFetchingRecommendedWallets", void 0);
jn = Ni([S("w3m-all-wallets-widget")], jn);
var Sr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Yi = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.connections = F.state.connections),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e)),
        F.subscribeKey("connections", (e) => (this.connections = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((n) => n.type === "ANNOUNCED");
    return e != null && e.length
      ? c`
      <wui-flex flexDirection="column" gap="2">
        ${e.filter(Sn.showConnector).map((n) => {
          const r = (this.connections.get(n.chain) ?? []).some((i) =>
            Ve.isLowerCaseMatch(i.connectorId, n.id)
          );
          return c`
            <wui-list-wallet
              imageSrc=${N(ee.getConnectorImage(n))}
              name=${n.name ?? "Unknown"}
              @click=${() => this.onConnector(n)}
              tagVariant=${r ? "info" : "success"}
              tagLabel=${r ? "connected" : "installed"}
              size="sm"
              data-testid=${`wallet-selector-${n.id}`}
              .installed=${!0}
              tabIdx=${N(this.tabIdx)}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `
      : ((this.style.cssText = "display: none"), null);
  }
  onConnector(e) {
    e.id === "walletConnect"
      ? j.isMobile()
        ? L.push("AllWallets")
        : L.push("ConnectingWalletConnect")
      : L.push("ConnectingExternal", { connector: e });
  }
};
Sr([d()], Yi.prototype, "tabIdx", void 0);
Sr([f()], Yi.prototype, "connectors", void 0);
Sr([f()], Yi.prototype, "connections", void 0);
Yi = Sr([S("w3m-connect-announced-widget")], Yi);
var Er = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Qi = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e))
      ),
      j.isTelegram() &&
        j.isIos() &&
        ((this.loading = !F.state.wcUri),
        this.unsubscribe.push(
          F.subscribeKey("wcUri", (e) => (this.loading = !e))
        ));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { customWallets: e } = B.state;
    if (!(e != null && e.length))
      return (this.style.cssText = "display: none"), null;
    const n = this.filterOutDuplicateWallets(e),
      o = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`<wui-flex flexDirection="column" gap="2">
      ${n.map(
        (r) => c`
          <wui-list-wallet
            imageSrc=${N(ee.getWalletImage(r))}
            name=${r.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(r)}
            size="sm"
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${N(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
          >
          </wui-list-wallet>
        `
      )}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(e) {
    const n = Xe.getRecentWallets(),
      o = this.connectors
        .map((a) => {
          var l;
          return (l = a.info) == null ? void 0 : l.rdns;
        })
        .filter(Boolean),
      r = n.map((a) => a.rdns).filter(Boolean),
      i = o.concat(r);
    if (i.includes("io.metamask.mobile") && j.isMobile()) {
      const a = i.indexOf("io.metamask.mobile");
      i[a] = "io.metamask";
    }
    return e.filter((a) => !i.includes(String(a == null ? void 0 : a.rdns)));
  }
  onConnectWallet(e) {
    this.loading || L.push("ConnectingWalletConnect", { wallet: e });
  }
};
Er([d()], Qi.prototype, "tabIdx", void 0);
Er([f()], Qi.prototype, "connectors", void 0);
Er([f()], Qi.prototype, "loading", void 0);
Qi = Er([S("w3m-connect-custom-widget")], Qi);
var ia = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let cr = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const o = this.connectors
      .filter((i) => i.type === "EXTERNAL")
      .filter(Sn.showConnector)
      .filter((i) => i.id !== Q.CONNECTOR_ID.COINBASE_SDK);
    if (!(o != null && o.length))
      return (this.style.cssText = "display: none"), null;
    const r = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`
      <wui-flex flexDirection="column" gap="2">
        ${o.map(
          (i) => c`
            <wui-list-wallet
              imageSrc=${N(ee.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name ?? "Unknown"}
              data-testid=${`wallet-selector-external-${i.id}`}
              size="sm"
              @click=${() => this.onConnector(i)}
              tabIdx=${N(this.tabIdx)}
              ?disabled=${r}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `;
  }
  onConnector(e) {
    L.push("ConnectingExternal", { connector: e });
  }
};
ia([d()], cr.prototype, "tabIdx", void 0);
ia([f()], cr.prototype, "connectors", void 0);
cr = ia([S("w3m-connect-external-widget")], cr);
var oa = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let lr = class extends A {
  constructor() {
    super(...arguments), (this.tabIdx = void 0), (this.wallets = []);
  }
  render() {
    if (!this.wallets.length)
      return (this.style.cssText = "display: none"), null;
    const e = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(
          (n) => c`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${n.id}`}
              imageSrc=${N(ee.getWalletImage(n))}
              name=${n.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(n)}
              tabIdx=${N(this.tabIdx)}
              size="sm"
              ?disabled=${e}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `;
  }
  onConnectWallet(e) {
    z.selectWalletConnector(e);
  }
};
oa([d()], lr.prototype, "tabIdx", void 0);
oa([d()], lr.prototype, "wallets", void 0);
lr = oa([S("w3m-connect-featured-widget")], lr);
var kr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Xi = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = []),
      (this.connections = F.state.connections),
      this.unsubscribe.push(
        F.subscribeKey("connections", (e) => (this.connections = e))
      );
  }
  render() {
    const e = this.connectors.filter(Sn.showConnector);
    return e.length === 0
      ? ((this.style.cssText = "display: none"), null)
      : c`
      <wui-flex flexDirection="column" gap="2">
        ${e.map((n) => {
          const r = (this.connections.get(n.chain) ?? []).some((i) =>
            Ve.isLowerCaseMatch(i.connectorId, n.id)
          );
          return c`
            <wui-list-wallet
              imageSrc=${N(ee.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name ?? "Unknown"}
              tagVariant=${r ? "info" : "success"}
              tagLabel=${r ? "connected" : "installed"}
              data-testid=${`wallet-selector-${n.id}`}
              size="sm"
              @click=${() => this.onConnector(n)}
              tabIdx=${N(this.tabIdx)}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `;
  }
  onConnector(e) {
    z.setActiveConnector(e), L.push("ConnectingExternal", { connector: e });
  }
};
kr([d()], Xi.prototype, "tabIdx", void 0);
kr([d()], Xi.prototype, "connectors", void 0);
kr([f()], Xi.prototype, "connections", void 0);
Xi = kr([S("w3m-connect-injected-widget")], Xi);
var ra = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let dr = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter(
      (n) => n.type === "MULTI_CHAIN" && n.name !== "WalletConnect"
    );
    return e != null && e.length
      ? c`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(
          (n) => c`
            <wui-list-wallet
              imageSrc=${N(ee.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name ?? "Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${n.id}`}
              size="sm"
              @click=${() => this.onConnector(n)}
              tabIdx=${N(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = "display: none"), null);
  }
  onConnector(e) {
    z.setActiveConnector(e), L.push("ConnectingMultiChain");
  }
};
ra([d()], dr.prototype, "tabIdx", void 0);
ra([f()], dr.prototype, "connectors", void 0);
dr = ra([S("w3m-connect-multi-chain-widget")], dr);
var _r = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ji = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e))
      ),
      j.isTelegram() &&
        j.isIos() &&
        ((this.loading = !F.state.wcUri),
        this.unsubscribe.push(
          F.subscribeKey("wcUri", (e) => (this.loading = !e))
        ));
  }
  render() {
    const n = Xe.getRecentWallets()
      .filter((r) => !En.isExcluded(r))
      .filter((r) => !this.hasWalletConnector(r))
      .filter((r) => this.isWalletCompatibleWithCurrentChain(r));
    if (!n.length) return (this.style.cssText = "display: none"), null;
    const o = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`
      <wui-flex flexDirection="column" gap="2">
        ${n.map(
          (r) => c`
            <wui-list-wallet
              imageSrc=${N(ee.getWalletImage(r))}
              name=${r.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(r)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${N(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${o}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `;
  }
  onConnectWallet(e) {
    this.loading || z.selectWalletConnector(e);
  }
  hasWalletConnector(e) {
    return this.connectors.some((n) => n.id === e.id || n.name === e.name);
  }
  isWalletCompatibleWithCurrentChain(e) {
    const n = E.state.activeChain;
    return n && e.chains
      ? e.chains.some((o) => {
          const r = o.split(":")[0];
          return n === r;
        })
      : !0;
  }
};
_r([d()], Ji.prototype, "tabIdx", void 0);
_r([f()], Ji.prototype, "connectors", void 0);
_r([f()], Ji.prototype, "loading", void 0);
Ji = _r([S("w3m-connect-recent-widget")], Ji);
var Ar = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Pa = 4;
let eo = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.wallets = []),
      (this.loading = !1),
      j.isTelegram() &&
        j.isIos() &&
        ((this.loading = !F.state.wcUri),
        this.unsubscribe.push(
          F.subscribeKey("wcUri", (e) => (this.loading = !e))
        ));
  }
  render() {
    var T, R, P, x, Z, b;
    const { connectors: e } = z.state,
      { customWallets: n, featuredWalletIds: o } = B.state,
      r = e.find((C) => C.id === "walletConnect"),
      i = e.filter(
        (C) =>
          C.type === "INJECTED" ||
          C.type === "ANNOUNCED" ||
          C.type === "MULTI_CHAIN"
      );
    if (!r && !i.length && !(n != null && n.length)) return null;
    const s = !!(
        ((T = B.state.features) != null && T.email) ||
        ((R = B.state.remoteFeatures) != null && R.email)
      ),
      a =
        (Array.isArray((P = B.state.features) == null ? void 0 : P.socials) &&
          ((x = B.state.features) == null ? void 0 : x.socials.length) > 0) ||
        (Array.isArray(
          (Z = B.state.remoteFeatures) == null ? void 0 : Z.socials
        ) &&
          ((b = B.state.remoteFeatures) == null ? void 0 : b.socials.length) >
            0),
      l = i.filter((C) => C.name !== "Browser Wallet"),
      u = (o == null ? void 0 : o.length) || 0,
      p = (n == null ? void 0 : n.length) || 0,
      h = l.length || 0,
      m = s ? 1 : 0,
      g = a ? 1 : 0,
      W = u + p + h + m + g;
    if (W >= Pa) return (this.style.cssText = "display: none"), null;
    const _ = En.filterOutDuplicateWallets(this.wallets).slice(0, Pa - W);
    if (!_.length) return (this.style.cssText = "display: none"), null;
    const k = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`
      <wui-flex flexDirection="column" gap="2">
        ${_.map(
          (C) => c`
            <wui-list-wallet
              imageSrc=${N(ee.getWalletImage(C))}
              name=${(C == null ? void 0 : C.name) ?? "Unknown"}
              @click=${() => this.onConnectWallet(C)}
              size="sm"
              tabIdx=${N(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${k}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `;
  }
  onConnectWallet(e) {
    if (this.loading) return;
    const n = z.getConnector({ id: e.id, rdns: e.rdns });
    n
      ? L.push("ConnectingExternal", { connector: n })
      : L.push("ConnectingWalletConnect", { wallet: e });
  }
};
Ar([d()], eo.prototype, "tabIdx", void 0);
Ar([d()], eo.prototype, "wallets", void 0);
Ar([f()], eo.prototype, "loading", void 0);
eo = Ar([S("w3m-connect-recommended-widget")], eo);
var Ir = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let to = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.connectorImages = $n.state.connectorImages),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e)),
        $n.subscribeKey("connectorImages", (e) => (this.connectorImages = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (j.isMobile()) return (this.style.cssText = "display: none"), null;
    const e = this.connectors.find((r) => r.id === "walletConnect");
    if (!e) return (this.style.cssText = "display: none"), null;
    const n =
        e.imageUrl ||
        this.connectorImages[(e == null ? void 0 : e.imageId) ?? ""],
      o = F.hasAnyConnection(Q.CONNECTOR_ID.WALLET_CONNECT);
    return c`
      <wui-list-wallet
        imageSrc=${N(n)}
        name=${e.name ?? "Unknown"}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${N(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${o}
      >
      </wui-list-wallet>
    `;
  }
  onConnector(e) {
    z.setActiveConnector(e), L.push("ConnectingWalletConnect");
  }
};
Ir([d()], to.prototype, "tabIdx", void 0);
Ir([f()], to.prototype, "connectors", void 0);
Ir([f()], to.prototype, "connectorImages", void 0);
to = Ir([S("w3m-connect-walletconnect-widget")], to);
const t1 = U`
  :host {
    margin-top: ${({ spacing: t }) => t[1]};
  }
  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1)
      ${({ spacing: t }) => t[2]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }
`;
var Ro = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let zn = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = z.state.connectors),
      (this.recommended = oe.state.recommended),
      (this.featured = oe.state.featured),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (e) => (this.connectors = e)),
        oe.subscribeKey("recommended", (e) => (this.recommended = e)),
        oe.subscribeKey("featured", (e) => (this.featured = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  connectorListTemplate() {
    const e = Sn.getConnectorsByType(
        this.connectors,
        this.recommended,
        this.featured
      ),
      {
        custom: n,
        recent: o,
        announced: r,
        injected: i,
        multiChain: s,
        recommended: a,
        featured: l,
        external: u,
      } = e;
    return Sn.getConnectorTypeOrder({
      custom: n,
      recent: o,
      announced: r,
      injected: i,
      multiChain: s,
      recommended: a,
      featured: l,
      external: u,
    }).map((h) => {
      switch (h) {
        case "injected":
          return c`
            ${
              s.length
                ? c`<w3m-connect-multi-chain-widget
                  tabIdx=${N(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`
                : null
            }
            ${
              r.length
                ? c`<w3m-connect-announced-widget
                  tabIdx=${N(this.tabIdx)}
                ></w3m-connect-announced-widget>`
                : null
            }
            ${
              i.length
                ? c`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${N(this.tabIdx)}
                ></w3m-connect-injected-widget>`
                : null
            }
          `;
        case "walletConnect":
          return c`<w3m-connect-walletconnect-widget
            tabIdx=${N(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
        case "recent":
          return c`<w3m-connect-recent-widget
            tabIdx=${N(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
        case "featured":
          return c`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${N(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
        case "custom":
          return c`<w3m-connect-custom-widget
            tabIdx=${N(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
        case "external":
          return c`<w3m-connect-external-widget
            tabIdx=${N(this.tabIdx)}
          ></w3m-connect-external-widget>`;
        case "recommended":
          return c`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${N(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
        default:
          return console.warn(`Unknown connector type: ${h}`), null;
      }
    });
  }
};
zn.styles = t1;
Ro([d()], zn.prototype, "tabIdx", void 0);
Ro([f()], zn.prototype, "connectors", void 0);
Ro([f()], zn.prototype, "recommended", void 0);
Ro([f()], zn.prototype, "featured", void 0);
zn = Ro([S("w3m-connector-list")], zn);
var Jc = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Rs = class extends A {
  constructor() {
    super(...arguments), (this.tabIdx = void 0);
  }
  render() {
    return c`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${N(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${N(
          this.tabIdx
        )}></w3m-all-wallets-widget>
      </wui-flex>
    `;
  }
};
Jc([d()], Rs.prototype, "tabIdx", void 0);
Rs = Jc([S("w3m-wallet-login-list")], Rs);
const n1 = U`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({ spacing: t }) => t[3]} calc(${({ spacing: t }) => t[3]} * -1);
    width: calc(100% + ${({ spacing: t }) => t[3]} * 2);
  }
`;
var st = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const i1 = 470;
let We = class extends A {
  constructor() {
    var e, n;
    super(),
      (this.unsubscribe = []),
      (this.connectors = z.state.connectors),
      (this.authConnector = this.connectors.find((o) => o.type === "AUTH")),
      (this.features = B.state.features),
      (this.remoteFeatures = B.state.remoteFeatures),
      (this.enableWallets = B.state.enableWallets),
      (this.noAdapters = E.state.noAdapters),
      (this.walletGuide = "get-started"),
      (this.checked = xn.state.isLegalCheckboxChecked),
      (this.isEmailEnabled =
        ((e = this.remoteFeatures) == null ? void 0 : e.email) &&
        !E.state.noAdapters),
      (this.isSocialEnabled =
        ((n = this.remoteFeatures) == null ? void 0 : n.socials) &&
        this.remoteFeatures.socials.length > 0 &&
        !E.state.noAdapters),
      (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
      this.unsubscribe.push(
        z.subscribeKey("connectors", (o) => {
          (this.connectors = o),
            (this.authConnector = this.connectors.find(
              (r) => r.type === "AUTH"
            )),
            (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors));
        }),
        B.subscribeKey("features", (o) => {
          this.features = o;
        }),
        B.subscribeKey("remoteFeatures", (o) => {
          (this.remoteFeatures = o),
            this.setEmailAndSocialEnableCheck(
              this.noAdapters,
              this.remoteFeatures
            );
        }),
        B.subscribeKey("enableWallets", (o) => (this.enableWallets = o)),
        E.subscribeKey("noAdapters", (o) =>
          this.setEmailAndSocialEnableCheck(o, this.remoteFeatures)
        ),
        xn.subscribeKey("isLegalCheckboxChecked", (o) => (this.checked = o))
      );
  }
  disconnectedCallback() {
    var n, o;
    this.unsubscribe.forEach((r) => r()),
      (n = this.resizeObserver) == null || n.disconnect();
    const e =
      (o = this.shadowRoot) == null ? void 0 : o.querySelector(".connect");
    e == null ||
      e.removeEventListener("scroll", this.handleConnectListScroll.bind(this));
  }
  firstUpdated() {
    var n, o;
    const e =
      (n = this.shadowRoot) == null ? void 0 : n.querySelector(".connect");
    e &&
      (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
      e == null ||
        e.addEventListener("scroll", this.handleConnectListScroll.bind(this)),
      (this.resizeObserver = new ResizeObserver(() => {
        this.handleConnectListScroll();
      })),
      (o = this.resizeObserver) == null || o.observe(e),
      this.handleConnectListScroll());
  }
  render() {
    var m;
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state,
      o = (m = B.state.features) == null ? void 0 : m.legalCheckbox,
      s =
        !!(e || n) &&
        !!o &&
        this.walletGuide === "get-started" &&
        !this.checked,
      a = { connect: !0, disabled: s },
      l = B.state.enableWalletGuide,
      u = this.enableWallets,
      p = this.isSocialEnabled || this.authConnector,
      h = s ? -1 : void 0;
    return c`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0", "0", "4", "0"]}
          class=${Lc(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${
              p && u && l && this.walletGuide === "get-started"
                ? ["0", "3", "0", "3"]
                : ["0", "3", "3", "3"]
            }
          >
            ${this.renderConnectMethod(h)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
  }
  reownBrandingTemplate() {
    var e;
    return si.hasFooter() ||
      !((e = this.remoteFeatures) != null && e.reownBranding)
      ? null
      : c`<wui-ux-by-reown></wui-ux-by-reown>`;
  }
  setEmailAndSocialEnableCheck(e, n) {
    (this.isEmailEnabled = (n == null ? void 0 : n.email) && !e),
      (this.isSocialEnabled =
        (n == null ? void 0 : n.socials) && n.socials.length > 0 && !e),
      (this.remoteFeatures = n),
      (this.noAdapters = e);
  }
  checkIfAuthEnabled(e) {
    const n = e
      .filter((r) => r.type === Bl.CONNECTOR_TYPE_AUTH)
      .map((r) => r.chain);
    return Q.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((r) => n.includes(r));
  }
  renderConnectMethod(e) {
    const n = En.getConnectOrderMethod(this.features, this.connectors);
    return c`${n.map((o, r) => {
      switch (o) {
        case "email":
          return c`${this.emailTemplate(e)} ${this.separatorTemplate(
            r,
            "email"
          )}`;
        case "social":
          return c`${this.socialListTemplate(e)}
          ${this.separatorTemplate(r, "social")}`;
        case "wallet":
          return c`${this.walletListTemplate(e)}
          ${this.separatorTemplate(r, "wallet")}`;
        default:
          return null;
      }
    })}`;
  }
  checkMethodEnabled(e) {
    switch (e) {
      case "wallet":
        return this.enableWallets;
      case "social":
        return this.isSocialEnabled && this.isAuthEnabled;
      case "email":
        return this.isEmailEnabled && this.isAuthEnabled;
      default:
        return null;
    }
  }
  checkIsThereNextMethod(e) {
    const o = En.getConnectOrderMethod(this.features, this.connectors)[e + 1];
    return o
      ? this.checkMethodEnabled(o)
        ? o
        : this.checkIsThereNextMethod(e + 1)
      : void 0;
  }
  separatorTemplate(e, n) {
    const o = this.checkIsThereNextMethod(e),
      r = this.walletGuide === "explore";
    switch (n) {
      case "wallet":
        return this.enableWallets && o && !r
          ? c`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
          : null;
      case "email": {
        const i = o === "social";
        return this.isAuthEnabled && this.isEmailEnabled && !i && o
          ? c`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
          : null;
      }
      case "social": {
        const i = o === "email";
        return this.isAuthEnabled && this.isSocialEnabled && !i && o
          ? c`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
          : null;
      }
      default:
        return null;
    }
  }
  emailTemplate(e) {
    return !this.isEmailEnabled || !this.isAuthEnabled
      ? null
      : c`<w3m-email-login-widget tabIdx=${N(e)}></w3m-email-login-widget>`;
  }
  socialListTemplate(e) {
    return !this.isSocialEnabled || !this.isAuthEnabled
      ? null
      : c`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${N(e)}
    ></w3m-social-login-widget>`;
  }
  walletListTemplate(e) {
    var a, l;
    const n = this.enableWallets,
      o = ((a = this.features) == null ? void 0 : a.emailShowWallets) === !1,
      r = (l = this.features) == null ? void 0 : l.collapseWallets,
      i = o || r;
    return !n ||
      (j.isTelegram() &&
        (j.isSafari() || j.isIos()) &&
        F.connectWalletConnect().catch((u) => ({})),
      this.walletGuide === "explore")
      ? null
      : this.isAuthEnabled && (this.isEmailEnabled || this.isSocialEnabled) && i
      ? c`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${N(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`
      : c`<w3m-wallet-login-list tabIdx=${N(e)}></w3m-wallet-login-list>`;
  }
  legalCheckboxTemplate() {
    return this.walletGuide === "explore"
      ? null
      : c`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
  }
  handleConnectListScroll() {
    var o;
    const e =
      (o = this.shadowRoot) == null ? void 0 : o.querySelector(".connect");
    if (!e) return;
    e.scrollHeight > i1
      ? (e.style.setProperty(
          "--connect-mask-image",
          `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`
        ),
        e.style.setProperty(
          "--connect-scroll--top-opacity",
          Ko.interpolate([0, 50], [0, 1], e.scrollTop).toString()
        ),
        e.style.setProperty(
          "--connect-scroll--bottom-opacity",
          Ko.interpolate(
            [0, 50],
            [0, 1],
            e.scrollHeight - e.scrollTop - e.offsetHeight
          ).toString()
        ))
      : (e.style.setProperty("--connect-mask-image", "none"),
        e.style.setProperty("--connect-scroll--top-opacity", "0"),
        e.style.setProperty("--connect-scroll--bottom-opacity", "0"));
  }
  onContinueWalletClick() {
    L.push("ConnectWallets");
  }
};
We.styles = n1;
st([f()], We.prototype, "connectors", void 0);
st([f()], We.prototype, "authConnector", void 0);
st([f()], We.prototype, "features", void 0);
st([f()], We.prototype, "remoteFeatures", void 0);
st([f()], We.prototype, "enableWallets", void 0);
st([f()], We.prototype, "noAdapters", void 0);
st([d()], We.prototype, "walletGuide", void 0);
st([f()], We.prototype, "checked", void 0);
st([f()], We.prototype, "isEmailEnabled", void 0);
st([f()], We.prototype, "isSocialEnabled", void 0);
st([f()], We.prototype, "isAuthEnabled", void 0);
We = st([S("w3m-connect-view")], We);
const o1 = U`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${(t) => t.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var el = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let ur = class extends A {
  constructor() {
    super(...arguments), (this.radius = 36);
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const e = this.radius > 50 ? 50 : this.radius,
      o = 36 - e,
      r = 116 + o,
      i = 245 + o,
      s = 360 + o * 1.75;
    return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `;
  }
};
ur.styles = [K, o1];
el([d({ type: Number })], ur.prototype, "radius", void 0);
ur = el([S("wui-loading-thumbnail")], ur);
const r1 = U`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[5]};
    padding-left: ${({ spacing: t }) => t[3]};
    padding-right: ${({ spacing: t }) => t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing: t }) => t[6]};
  }

  wui-text {
    color: ${({ tokens: t }) => t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;
var Tr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ei = class extends A {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.label = ""),
      (this.buttonLabel = "");
  }
  render() {
    return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
Ei.styles = [K, ie, r1];
Tr([d({ type: Boolean })], Ei.prototype, "disabled", void 0);
Tr([d()], Ei.prototype, "label", void 0);
Tr([d()], Ei.prototype, "buttonLabel", void 0);
Ei = Tr([S("wui-cta-button")], Ei);
const s1 = U`
  :host {
    display: block;
    padding: 0 ${({ spacing: t }) => t[5]} ${({ spacing: t }) => t[5]};
  }
`;
var tl = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let hr = class extends A {
  constructor() {
    super(...arguments), (this.wallet = void 0);
  }
  render() {
    if (!this.wallet) return (this.style.display = "none"), null;
    const {
        name: e,
        app_store: n,
        play_store: o,
        chrome_store: r,
        homepage: i,
      } = this.wallet,
      s = j.isMobile(),
      a = j.isIos(),
      l = j.isAndroid(),
      u = [n, o, i, r].filter(Boolean).length > 1,
      p = de.getTruncateString({
        string: e,
        charsStart: 12,
        charsEnd: 0,
        truncate: "end",
      });
    return u && !s
      ? c`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${() => L.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `
      : !u && i
      ? c`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
      : n && a
      ? c`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
      : o && l
      ? c`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
      : ((this.style.display = "none"), null);
  }
  onAppStore() {
    var e;
    (e = this.wallet) != null &&
      e.app_store &&
      j.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var e;
    (e = this.wallet) != null &&
      e.play_store &&
      j.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var e;
    (e = this.wallet) != null &&
      e.homepage &&
      j.openHref(this.wallet.homepage, "_blank");
  }
};
hr.styles = [s1];
tl([d({ type: Object })], hr.prototype, "wallet", void 0);
hr = tl([S("w3m-mobile-download-links")], hr);
const a1 = U`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: t }) => t[1]} * -1);
    bottom: calc(${({ spacing: t }) => t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations: t }) => t.lg};
    transition-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: t }) => t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: t }) => t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;
var mt = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
class ge extends A {
  constructor() {
    var e, n, o, r, i;
    super(),
      (this.wallet = (e = L.state.data) == null ? void 0 : e.wallet),
      (this.connector = (n = L.state.data) == null ? void 0 : n.connector),
      (this.timeout = void 0),
      (this.secondaryBtnIcon = "refresh"),
      (this.onConnect = void 0),
      (this.onRender = void 0),
      (this.onAutoConnect = void 0),
      (this.isWalletConnect = !0),
      (this.unsubscribe = []),
      (this.imageSrc =
        ee.getWalletImage(this.wallet) ?? ee.getConnectorImage(this.connector)),
      (this.name =
        ((o = this.wallet) == null ? void 0 : o.name) ??
        ((r = this.connector) == null ? void 0 : r.name) ??
        "Wallet"),
      (this.isRetrying = !1),
      (this.uri = F.state.wcUri),
      (this.error = F.state.wcError),
      (this.ready = !1),
      (this.showRetry = !1),
      (this.label = void 0),
      (this.secondaryBtnLabel = "Try again"),
      (this.secondaryLabel = "Accept connection request in the wallet"),
      (this.isLoading = !1),
      (this.isMobile = !1),
      (this.onRetry = void 0),
      this.unsubscribe.push(
        F.subscribeKey("wcUri", (s) => {
          var a;
          (this.uri = s),
            this.isRetrying &&
              this.onRetry &&
              ((this.isRetrying = !1),
              (a = this.onConnect) == null || a.call(this));
        }),
        F.subscribeKey("wcError", (s) => (this.error = s))
      ),
      (j.isTelegram() || j.isSafari()) &&
        j.isIos() &&
        F.state.wcUri &&
        ((i = this.onConnect) == null || i.call(this));
  }
  firstUpdated() {
    var e;
    (e = this.onAutoConnect) == null || e.call(this),
      (this.showRetry = !this.onAutoConnect);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()),
      F.setWcError(!1),
      clearTimeout(this.timeout);
  }
  render() {
    var o;
    (o = this.onRender) == null || o.call(this), this.onShowRetry();
    const e = this.error
      ? "Connection can be declined if a previous request is still active"
      : this.secondaryLabel;
    let n = "";
    return (
      this.label
        ? (n = this.label)
        : ((n = `Continue in ${this.name}`),
          this.error && (n = "Connection declined")),
      c`
      <wui-flex
        data-error=${N(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${N(
            this.imageSrc
          )}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2", "0", "0", "0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${
            this.error ? "error" : "primary"
          }>
            ${n}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? c`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? c`
              <wui-flex .padding=${[
                "0",
                "5",
                "5",
                "5",
              ]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `
          : null
      }

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `
    );
  }
  onShowRetry() {
    var e;
    if (this.error && !this.showRetry) {
      this.showRetry = !0;
      const n =
        (e = this.shadowRoot) == null ? void 0 : e.querySelector("wui-button");
      n == null ||
        n.animate([{ opacity: 0 }, { opacity: 1 }], {
          fill: "forwards",
          easing: "ease",
        });
    }
  }
  onTryAgain() {
    var e, n;
    F.setWcError(!1),
      this.onRetry
        ? ((this.isRetrying = !0), (e = this.onRetry) == null || e.call(this))
        : (n = this.onConnect) == null || n.call(this);
  }
  loaderTemplate() {
    const e = ys.state.themeVariables["--w3m-border-radius-master"],
      n = e ? parseInt(e.replace("px", ""), 10) : 4;
    return c`<wui-loading-thumbnail radius=${n * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      this.uri && (j.copyToClopboard(this.uri), re.showSuccess("Link copied"));
    } catch {
      re.showError("Failed to copy");
    }
  }
}
ge.styles = a1;
mt([f()], ge.prototype, "isRetrying", void 0);
mt([f()], ge.prototype, "uri", void 0);
mt([f()], ge.prototype, "error", void 0);
mt([f()], ge.prototype, "ready", void 0);
mt([f()], ge.prototype, "showRetry", void 0);
mt([f()], ge.prototype, "label", void 0);
mt([f()], ge.prototype, "secondaryBtnLabel", void 0);
mt([f()], ge.prototype, "secondaryLabel", void 0);
mt([f()], ge.prototype, "isLoading", void 0);
mt([d({ type: Boolean })], ge.prototype, "isMobile", void 0);
mt([d()], ge.prototype, "onRetry", void 0);
var c1 = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Os = class extends ge {
  constructor() {
    var n, o, r, i;
    if (
      (super(),
      (this.externalViewUnsubscribe = []),
      (this.connectionsByNamespace = F.getConnections(
        (n = this.connector) == null ? void 0 : n.chain
      )),
      (this.hasMultipleConnections = this.connectionsByNamespace.length > 0),
      (this.remoteFeatures = B.state.remoteFeatures),
      (this.currentActiveConnectorId =
        z.state.activeConnectorIds[
          (o = this.connector) == null ? void 0 : o.chain
        ]),
      !this.connector)
    )
      throw new Error("w3m-connecting-view: No connector provided");
    const e = (r = this.connector) == null ? void 0 : r.chain;
    this.isAlreadyConnected(this.connector) &&
      ((this.secondaryBtnLabel = void 0),
      (this.label = `This account is already linked, change your account in ${this.connector.name}`),
      (this.secondaryLabel = `To link a new account, open ${this.connector.name} and switch to the account you want to link`)),
      te.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: this.connector.name ?? "Unknown",
          platform: "browser",
          displayIndex: (i = this.wallet) == null ? void 0 : i.display_index,
        },
      }),
      (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onAutoConnect = this.onConnectProxy.bind(this)),
      (this.isWalletConnect = !1),
      this.externalViewUnsubscribe.push(
        z.subscribeKey("activeConnectorIds", (s) => {
          var u;
          const a = s[e],
            l = (u = this.remoteFeatures) == null ? void 0 : u.multiWallet;
          a !== this.currentActiveConnectorId &&
            (this.hasMultipleConnections && l
              ? (L.replace("ProfileWallets"),
                re.showSuccess("New Wallet Added"))
              : ye.close());
        }),
        F.subscribeKey("connections", this.onConnectionsChange.bind(this))
      );
  }
  disconnectedCallback() {
    this.externalViewUnsubscribe.forEach((e) => e());
  }
  async onConnectProxy() {
    try {
      if (((this.error = !1), this.connector)) {
        if (this.isAlreadyConnected(this.connector)) return;
        (this.connector.id !== Q.CONNECTOR_ID.COINBASE_SDK || !this.error) &&
          (await F.connectExternal(this.connector, this.connector.chain),
          te.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: {
              method: "browser",
              name: this.connector.name || "Unknown",
            },
          }));
      }
    } catch (e) {
      te.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (e == null ? void 0 : e.message) ?? "Unknown" },
      }),
        (this.error = !0);
    }
  }
  onConnectionsChange(e) {
    var n, o;
    if (
      (n = this.connector) != null &&
      n.chain &&
      e.get(this.connector.chain) &&
      this.isAlreadyConnected(this.connector)
    ) {
      const r = e.get(this.connector.chain) ?? [],
        i = (o = this.remoteFeatures) == null ? void 0 : o.multiWallet;
      if (r.length === 0) L.replace("Connect");
      else {
        const s = qt
            .getConnectionsByConnectorId(
              this.connectionsByNamespace,
              this.connector.id
            )
            .flatMap((l) => l.accounts),
          a = qt
            .getConnectionsByConnectorId(r, this.connector.id)
            .flatMap((l) => l.accounts);
        a.length === 0
          ? this.hasMultipleConnections && i
            ? (L.replace("ProfileWallets"), re.showSuccess("Wallet deleted"))
            : ye.close()
          : !s.every((u) =>
              a.some((p) => Ve.isLowerCaseMatch(u.address, p.address))
            ) &&
            i &&
            L.replace("ProfileWallets");
      }
    }
  }
  isAlreadyConnected(e) {
    return (
      !!e &&
      this.connectionsByNamespace.some((n) =>
        Ve.isLowerCaseMatch(n.connectorId, e.id)
      )
    );
  }
};
Os = c1([S("w3m-connecting-external-view")], Os);
const l1 = xe`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;
var nl = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let no = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.activeConnector = z.state.activeConnector),
      this.unsubscribe.push(
        z.subscribeKey("activeConnector", (e) => (this.activeConnector = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    var e;
    return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3", "5", "5", "5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${N(ee.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0", "3", "0", "3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${
              (e = this.activeConnector) == null ? void 0 : e.name
            }
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2", "0", "2", "0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
  }
  networksTemplate() {
    var e, n;
    return (n = (e = this.activeConnector) == null ? void 0 : e.connectors) ==
      null
      ? void 0
      : n.map((o) =>
          o.name
            ? c`
            <wui-list-wallet
              imageSrc=${N(ee.getChainImage(o.chain))}
              name=${Q.CHAIN_NAME_MAP[o.chain]}
              @click=${() => this.onConnector(o)}
              size="sm"
              data-testid="wui-list-chain-${o.chain}"
            ></wui-list-wallet>
          `
            : null
        );
  }
  onConnector(e) {
    var o, r;
    const n =
      (r = (o = this.activeConnector) == null ? void 0 : o.connectors) == null
        ? void 0
        : r.find((i) => i.chain === e.chain);
    if (!n) {
      re.showError("Failed to find connector");
      return;
    }
    n.id === "walletConnect"
      ? j.isMobile()
        ? L.push("AllWallets")
        : L.push("ConnectingWalletConnect")
      : L.push("ConnectingExternal", { connector: n });
  }
};
no.styles = l1;
nl([f()], no.prototype, "activeConnector", void 0);
no = nl([S("w3m-connecting-multi-chain-view")], no);
var sa = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let pr = class extends A {
  constructor() {
    super(...arguments),
      (this.platformTabs = []),
      (this.unsubscribe = []),
      (this.platforms = []),
      (this.onSelectPlatfrom = void 0);
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.generateTabs();
    return c`
      <wui-flex justifyContent="center" .padding=${["0", "0", "4", "0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(
      this
    )}></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const e = this.platforms.map((n) =>
      n === "browser"
        ? { label: "Browser", icon: "extension", platform: "browser" }
        : n === "mobile"
        ? { label: "Mobile", icon: "mobile", platform: "mobile" }
        : n === "qrcode"
        ? { label: "Mobile", icon: "mobile", platform: "qrcode" }
        : n === "web"
        ? { label: "Webapp", icon: "browser", platform: "web" }
        : n === "desktop"
        ? { label: "Desktop", icon: "desktop", platform: "desktop" }
        : { label: "Browser", icon: "extension", platform: "unsupported" }
    );
    return (this.platformTabs = e.map(({ platform: n }) => n)), e;
  }
  onTabChange(e) {
    var o;
    const n = this.platformTabs[e];
    n && ((o = this.onSelectPlatfrom) == null || o.call(this, n));
  }
};
sa([d({ type: Array })], pr.prototype, "platforms", void 0);
sa([d()], pr.prototype, "onSelectPlatfrom", void 0);
pr = sa([S("w3m-connecting-header")], pr);
var d1 = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ra = class extends ge {
  constructor() {
    var e;
    if ((super(), !this.wallet))
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onAutoConnect = this.onConnectProxy.bind(this)),
      te.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: this.wallet.name,
          platform: "browser",
          displayIndex: (e = this.wallet) == null ? void 0 : e.display_index,
        },
      });
  }
  async onConnectProxy() {
    var e;
    try {
      this.error = !1;
      const { connectors: n } = z.state,
        o = n.find((r) => {
          var i, s, a;
          return (
            (r.type === "ANNOUNCED" &&
              ((i = r.info) == null ? void 0 : i.rdns) ===
                ((s = this.wallet) == null ? void 0 : s.rdns)) ||
            r.type === "INJECTED" ||
            r.name === ((a = this.wallet) == null ? void 0 : a.name)
          );
        });
      if (o) await F.connectExternal(o, o.chain);
      else throw new Error("w3m-connecting-wc-browser: No connector found");
      ye.close(),
        te.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          properties: {
            method: "browser",
            name: ((e = this.wallet) == null ? void 0 : e.name) || "Unknown",
          },
        });
    } catch (n) {
      te.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (n == null ? void 0 : n.message) ?? "Unknown" },
      }),
        (this.error = !0);
    }
  }
};
Ra = d1([S("w3m-connecting-wc-browser")], Ra);
var u1 = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Oa = class extends ge {
  constructor() {
    var e;
    if ((super(), !this.wallet))
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onRender = this.onRenderProxy.bind(this)),
      te.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: this.wallet.name,
          platform: "desktop",
          displayIndex: (e = this.wallet) == null ? void 0 : e.display_index,
        },
      });
  }
  onRenderProxy() {
    var e;
    !this.ready &&
      this.uri &&
      ((this.ready = !0), (e = this.onConnect) == null || e.call(this));
  }
  onConnectProxy() {
    var e;
    if ((e = this.wallet) != null && e.desktop_link && this.uri)
      try {
        this.error = !1;
        const { desktop_link: n, name: o } = this.wallet,
          { redirect: r, href: i } = j.formatNativeUrl(n, this.uri);
        F.setWcLinking({ name: o, href: i }),
          F.setRecentWallet(this.wallet),
          j.openHref(r, "_blank");
      } catch {
        this.error = !0;
      }
  }
};
Oa = u1([S("w3m-connecting-wc-desktop")], Oa);
var Li = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Vn = class extends ge {
  constructor() {
    var e;
    if (
      (super(),
      (this.btnLabelTimeout = void 0),
      (this.redirectDeeplink = void 0),
      (this.redirectUniversalLink = void 0),
      (this.target = void 0),
      (this.preferUniversalLinks = B.state.experimental_preferUniversalLinks),
      (this.isLoading = !0),
      (this.onConnect = () => {
        var n;
        if ((n = this.wallet) != null && n.mobile_link && this.uri)
          try {
            this.error = !1;
            const { mobile_link: o, link_mode: r, name: i } = this.wallet,
              {
                redirect: s,
                redirectUniversalLink: a,
                href: l,
              } = j.formatNativeUrl(o, this.uri, r);
            (this.redirectDeeplink = s),
              (this.redirectUniversalLink = a),
              (this.target = j.isIframe() ? "_top" : "_self"),
              F.setWcLinking({ name: i, href: l }),
              F.setRecentWallet(this.wallet),
              this.preferUniversalLinks && this.redirectUniversalLink
                ? j.openHref(this.redirectUniversalLink, this.target)
                : j.openHref(this.redirectDeeplink, this.target);
          } catch (o) {
            te.sendEvent({
              type: "track",
              event: "CONNECT_PROXY_ERROR",
              properties: {
                message:
                  o instanceof Error ? o.message : "Error parsing the deeplink",
                uri: this.uri,
                mobile_link: this.wallet.mobile_link,
                name: this.wallet.name,
              },
            }),
              (this.error = !0);
          }
      }),
      !this.wallet)
    )
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    (this.secondaryBtnLabel = "Open"),
      (this.secondaryLabel = Ce.CONNECT_LABELS.MOBILE),
      (this.secondaryBtnIcon = "externalLink"),
      this.onHandleURI(),
      this.unsubscribe.push(
        F.subscribeKey("wcUri", () => {
          this.onHandleURI();
        })
      ),
      te.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: this.wallet.name,
          platform: "mobile",
          displayIndex: (e = this.wallet) == null ? void 0 : e.display_index,
        },
      });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
  }
  onHandleURI() {
    var e;
    (this.isLoading = !this.uri),
      !this.ready &&
        this.uri &&
        ((this.ready = !0), (e = this.onConnect) == null || e.call(this));
  }
  onTryAgain() {
    var e;
    F.setWcError(!1), (e = this.onConnect) == null || e.call(this);
  }
};
Li([f()], Vn.prototype, "redirectDeeplink", void 0);
Li([f()], Vn.prototype, "redirectUniversalLink", void 0);
Li([f()], Vn.prototype, "target", void 0);
Li([f()], Vn.prototype, "preferUniversalLinks", void 0);
Li([f()], Vn.prototype, "isLoading", void 0);
Vn = Li([S("w3m-connecting-wc-mobile")], Vn);
var ii = {},
  Fr,
  Wa;
function h1() {
  return (
    Wa ||
      ((Wa = 1),
      (Fr = function () {
        return (
          typeof Promise == "function" &&
          Promise.prototype &&
          Promise.prototype.then
        );
      })),
    Fr
  );
}
var Hr = {},
  Ht = {},
  Na;
function Yn() {
  if (Na) return Ht;
  Na = 1;
  let t;
  const e = [
    0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
    733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
    2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
  ];
  return (
    (Ht.getSymbolSize = function (o) {
      if (!o) throw new Error('"version" cannot be null or undefined');
      if (o < 1 || o > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return o * 4 + 17;
    }),
    (Ht.getSymbolTotalCodewords = function (o) {
      return e[o];
    }),
    (Ht.getBCHDigit = function (n) {
      let o = 0;
      for (; n !== 0; ) o++, (n >>>= 1);
      return o;
    }),
    (Ht.setToSJISFunction = function (o) {
      if (typeof o != "function")
        throw new Error('"toSJISFunc" is not a valid function.');
      t = o;
    }),
    (Ht.isKanjiModeEnabled = function () {
      return typeof t < "u";
    }),
    (Ht.toSJIS = function (o) {
      return t(o);
    }),
    Ht
  );
}
var Zr = {},
  La;
function aa() {
  return (
    La ||
      ((La = 1),
      (function (t) {
        (t.L = { bit: 1 }),
          (t.M = { bit: 0 }),
          (t.Q = { bit: 3 }),
          (t.H = { bit: 2 });
        function e(n) {
          if (typeof n != "string") throw new Error("Param is not a string");
          switch (n.toLowerCase()) {
            case "l":
            case "low":
              return t.L;
            case "m":
            case "medium":
              return t.M;
            case "q":
            case "quartile":
              return t.Q;
            case "h":
            case "high":
              return t.H;
            default:
              throw new Error("Unknown EC Level: " + n);
          }
        }
        (t.isValid = function (o) {
          return o && typeof o.bit < "u" && o.bit >= 0 && o.bit < 4;
        }),
          (t.from = function (o, r) {
            if (t.isValid(o)) return o;
            try {
              return e(o);
            } catch {
              return r;
            }
          });
      })(Zr)),
    Zr
  );
}
var Kr, Da;
function p1() {
  if (Da) return Kr;
  Da = 1;
  function t() {
    (this.buffer = []), (this.length = 0);
  }
  return (
    (t.prototype = {
      get: function (e) {
        const n = Math.floor(e / 8);
        return ((this.buffer[n] >>> (7 - (e % 8))) & 1) === 1;
      },
      put: function (e, n) {
        for (let o = 0; o < n; o++)
          this.putBit(((e >>> (n - o - 1)) & 1) === 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        const n = Math.floor(this.length / 8);
        this.buffer.length <= n && this.buffer.push(0),
          e && (this.buffer[n] |= 128 >>> this.length % 8),
          this.length++;
      },
    }),
    (Kr = t),
    Kr
  );
}
var qr, Ma;
function f1() {
  if (Ma) return qr;
  Ma = 1;
  function t(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    (this.size = e),
      (this.data = new Uint8Array(e * e)),
      (this.reservedBit = new Uint8Array(e * e));
  }
  return (
    (t.prototype.set = function (e, n, o, r) {
      const i = e * this.size + n;
      (this.data[i] = o), r && (this.reservedBit[i] = !0);
    }),
    (t.prototype.get = function (e, n) {
      return this.data[e * this.size + n];
    }),
    (t.prototype.xor = function (e, n, o) {
      this.data[e * this.size + n] ^= o;
    }),
    (t.prototype.isReserved = function (e, n) {
      return this.reservedBit[e * this.size + n];
    }),
    (qr = t),
    qr
  );
}
var Gr = {},
  Ba;
function m1() {
  return (
    Ba ||
      ((Ba = 1),
      (function (t) {
        const e = Yn().getSymbolSize;
        (t.getRowColCoords = function (o) {
          if (o === 1) return [];
          const r = Math.floor(o / 7) + 2,
            i = e(o),
            s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * r - 2)) * 2,
            a = [i - 7];
          for (let l = 1; l < r - 1; l++) a[l] = a[l - 1] - s;
          return a.push(6), a.reverse();
        }),
          (t.getPositions = function (o) {
            const r = [],
              i = t.getRowColCoords(o),
              s = i.length;
            for (let a = 0; a < s; a++)
              for (let l = 0; l < s; l++)
                (a === 0 && l === 0) ||
                  (a === 0 && l === s - 1) ||
                  (a === s - 1 && l === 0) ||
                  r.push([i[a], i[l]]);
            return r;
          });
      })(Gr)),
    Gr
  );
}
var Yr = {},
  ja;
function w1() {
  if (ja) return Yr;
  ja = 1;
  const t = Yn().getSymbolSize,
    e = 7;
  return (
    (Yr.getPositions = function (o) {
      const r = t(o);
      return [
        [0, 0],
        [r - e, 0],
        [0, r - e],
      ];
    }),
    Yr
  );
}
var Qr = {},
  za;
function g1() {
  return (
    za ||
      ((za = 1),
      (function (t) {
        t.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        const e = { N1: 3, N2: 3, N3: 40, N4: 10 };
        (t.isValid = function (r) {
          return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7;
        }),
          (t.from = function (r) {
            return t.isValid(r) ? parseInt(r, 10) : void 0;
          }),
          (t.getPenaltyN1 = function (r) {
            const i = r.size;
            let s = 0,
              a = 0,
              l = 0,
              u = null,
              p = null;
            for (let h = 0; h < i; h++) {
              (a = l = 0), (u = p = null);
              for (let m = 0; m < i; m++) {
                let g = r.get(h, m);
                g === u
                  ? a++
                  : (a >= 5 && (s += e.N1 + (a - 5)), (u = g), (a = 1)),
                  (g = r.get(m, h)),
                  g === p
                    ? l++
                    : (l >= 5 && (s += e.N1 + (l - 5)), (p = g), (l = 1));
              }
              a >= 5 && (s += e.N1 + (a - 5)), l >= 5 && (s += e.N1 + (l - 5));
            }
            return s;
          }),
          (t.getPenaltyN2 = function (r) {
            const i = r.size;
            let s = 0;
            for (let a = 0; a < i - 1; a++)
              for (let l = 0; l < i - 1; l++) {
                const u =
                  r.get(a, l) +
                  r.get(a, l + 1) +
                  r.get(a + 1, l) +
                  r.get(a + 1, l + 1);
                (u === 4 || u === 0) && s++;
              }
            return s * e.N2;
          }),
          (t.getPenaltyN3 = function (r) {
            const i = r.size;
            let s = 0,
              a = 0,
              l = 0;
            for (let u = 0; u < i; u++) {
              a = l = 0;
              for (let p = 0; p < i; p++)
                (a = ((a << 1) & 2047) | r.get(u, p)),
                  p >= 10 && (a === 1488 || a === 93) && s++,
                  (l = ((l << 1) & 2047) | r.get(p, u)),
                  p >= 10 && (l === 1488 || l === 93) && s++;
            }
            return s * e.N3;
          }),
          (t.getPenaltyN4 = function (r) {
            let i = 0;
            const s = r.data.length;
            for (let l = 0; l < s; l++) i += r.data[l];
            return Math.abs(Math.ceil((i * 100) / s / 5) - 10) * e.N4;
          });
        function n(o, r, i) {
          switch (o) {
            case t.Patterns.PATTERN000:
              return (r + i) % 2 === 0;
            case t.Patterns.PATTERN001:
              return r % 2 === 0;
            case t.Patterns.PATTERN010:
              return i % 3 === 0;
            case t.Patterns.PATTERN011:
              return (r + i) % 3 === 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
              return ((r * i) % 2) + ((r * i) % 3) === 0;
            case t.Patterns.PATTERN110:
              return (((r * i) % 2) + ((r * i) % 3)) % 2 === 0;
            case t.Patterns.PATTERN111:
              return (((r * i) % 3) + ((r + i) % 2)) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + o);
          }
        }
        (t.applyMask = function (r, i) {
          const s = i.size;
          for (let a = 0; a < s; a++)
            for (let l = 0; l < s; l++)
              i.isReserved(l, a) || i.xor(l, a, n(r, l, a));
        }),
          (t.getBestMask = function (r, i) {
            const s = Object.keys(t.Patterns).length;
            let a = 0,
              l = 1 / 0;
            for (let u = 0; u < s; u++) {
              i(u), t.applyMask(u, r);
              const p =
                t.getPenaltyN1(r) +
                t.getPenaltyN2(r) +
                t.getPenaltyN3(r) +
                t.getPenaltyN4(r);
              t.applyMask(u, r), p < l && ((l = p), (a = u));
            }
            return a;
          });
      })(Qr)),
    Qr
  );
}
var Vo = {},
  Va;
function il() {
  if (Va) return Vo;
  Va = 1;
  const t = aa(),
    e = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
      4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
      9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
      13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
      18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34,
      40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17,
      33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56,
      66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
    ],
    n = [
      7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
      88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160,
      192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
      288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168,
      308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700,
      224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810,
      960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390,
      728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868,
      1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
      1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100,
      660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
    ];
  return (
    (Vo.getBlocksCount = function (r, i) {
      switch (i) {
        case t.L:
          return e[(r - 1) * 4 + 0];
        case t.M:
          return e[(r - 1) * 4 + 1];
        case t.Q:
          return e[(r - 1) * 4 + 2];
        case t.H:
          return e[(r - 1) * 4 + 3];
        default:
          return;
      }
    }),
    (Vo.getTotalCodewordsCount = function (r, i) {
      switch (i) {
        case t.L:
          return n[(r - 1) * 4 + 0];
        case t.M:
          return n[(r - 1) * 4 + 1];
        case t.Q:
          return n[(r - 1) * 4 + 2];
        case t.H:
          return n[(r - 1) * 4 + 3];
        default:
          return;
      }
    }),
    Vo
  );
}
var Xr = {},
  Vi = {},
  Ua;
function b1() {
  if (Ua) return Vi;
  Ua = 1;
  const t = new Uint8Array(512),
    e = new Uint8Array(256);
  return (
    (function () {
      let o = 1;
      for (let r = 0; r < 255; r++)
        (t[r] = o), (e[o] = r), (o <<= 1), o & 256 && (o ^= 285);
      for (let r = 255; r < 512; r++) t[r] = t[r - 255];
    })(),
    (Vi.log = function (o) {
      if (o < 1) throw new Error("log(" + o + ")");
      return e[o];
    }),
    (Vi.exp = function (o) {
      return t[o];
    }),
    (Vi.mul = function (o, r) {
      return o === 0 || r === 0 ? 0 : t[e[o] + e[r]];
    }),
    Vi
  );
}
var Fa;
function v1() {
  return (
    Fa ||
      ((Fa = 1),
      (function (t) {
        const e = b1();
        (t.mul = function (o, r) {
          const i = new Uint8Array(o.length + r.length - 1);
          for (let s = 0; s < o.length; s++)
            for (let a = 0; a < r.length; a++) i[s + a] ^= e.mul(o[s], r[a]);
          return i;
        }),
          (t.mod = function (o, r) {
            let i = new Uint8Array(o);
            for (; i.length - r.length >= 0; ) {
              const s = i[0];
              for (let l = 0; l < r.length; l++) i[l] ^= e.mul(r[l], s);
              let a = 0;
              for (; a < i.length && i[a] === 0; ) a++;
              i = i.slice(a);
            }
            return i;
          }),
          (t.generateECPolynomial = function (o) {
            let r = new Uint8Array([1]);
            for (let i = 0; i < o; i++)
              r = t.mul(r, new Uint8Array([1, e.exp(i)]));
            return r;
          });
      })(Xr)),
    Xr
  );
}
var Jr, Ha;
function y1() {
  if (Ha) return Jr;
  Ha = 1;
  const t = v1();
  function e(n) {
    (this.genPoly = void 0),
      (this.degree = n),
      this.degree && this.initialize(this.degree);
  }
  return (
    (e.prototype.initialize = function (o) {
      (this.degree = o), (this.genPoly = t.generateECPolynomial(this.degree));
    }),
    (e.prototype.encode = function (o) {
      if (!this.genPoly) throw new Error("Encoder not initialized");
      const r = new Uint8Array(o.length + this.degree);
      r.set(o);
      const i = t.mod(r, this.genPoly),
        s = this.degree - i.length;
      if (s > 0) {
        const a = new Uint8Array(this.degree);
        return a.set(i, s), a;
      }
      return i;
    }),
    (Jr = e),
    Jr
  );
}
var es = {},
  ts = {},
  ns = {},
  Za;
function ol() {
  return (
    Za ||
      ((Za = 1),
      (ns.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      })),
    ns
  );
}
var gt = {},
  Ka;
function rl() {
  if (Ka) return gt;
  Ka = 1;
  const t = "[0-9]+",
    e = "[A-Z $%*+\\-./:]+";
  let n =
    "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  n = n.replace(/u/g, "\\u");
  const o =
    "(?:(?![A-Z0-9 $%*+\\-./:]|" +
    n +
    `)(?:.|[\r
]))+`;
  (gt.KANJI = new RegExp(n, "g")),
    (gt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
    (gt.BYTE = new RegExp(o, "g")),
    (gt.NUMERIC = new RegExp(t, "g")),
    (gt.ALPHANUMERIC = new RegExp(e, "g"));
  const r = new RegExp("^" + n + "$"),
    i = new RegExp("^" + t + "$"),
    s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return (
    (gt.testKanji = function (l) {
      return r.test(l);
    }),
    (gt.testNumeric = function (l) {
      return i.test(l);
    }),
    (gt.testAlphanumeric = function (l) {
      return s.test(l);
    }),
    gt
  );
}
var qa;
function Qn() {
  return (
    qa ||
      ((qa = 1),
      (function (t) {
        const e = ol(),
          n = rl();
        (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (t.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (t.MIXED = { bit: -1 }),
          (t.getCharCountIndicator = function (i, s) {
            if (!i.ccBits) throw new Error("Invalid mode: " + i);
            if (!e.isValid(s)) throw new Error("Invalid version: " + s);
            return s >= 1 && s < 10
              ? i.ccBits[0]
              : s < 27
              ? i.ccBits[1]
              : i.ccBits[2];
          }),
          (t.getBestModeForData = function (i) {
            return n.testNumeric(i)
              ? t.NUMERIC
              : n.testAlphanumeric(i)
              ? t.ALPHANUMERIC
              : n.testKanji(i)
              ? t.KANJI
              : t.BYTE;
          }),
          (t.toString = function (i) {
            if (i && i.id) return i.id;
            throw new Error("Invalid mode");
          }),
          (t.isValid = function (i) {
            return i && i.bit && i.ccBits;
          });
        function o(r) {
          if (typeof r != "string") throw new Error("Param is not a string");
          switch (r.toLowerCase()) {
            case "numeric":
              return t.NUMERIC;
            case "alphanumeric":
              return t.ALPHANUMERIC;
            case "kanji":
              return t.KANJI;
            case "byte":
              return t.BYTE;
            default:
              throw new Error("Unknown mode: " + r);
          }
        }
        t.from = function (i, s) {
          if (t.isValid(i)) return i;
          try {
            return o(i);
          } catch {
            return s;
          }
        };
      })(ts)),
    ts
  );
}
var Ga;
function C1() {
  return (
    Ga ||
      ((Ga = 1),
      (function (t) {
        const e = Yn(),
          n = il(),
          o = aa(),
          r = Qn(),
          i = ol(),
          s = 7973,
          a = e.getBCHDigit(s);
        function l(m, g, W) {
          for (let _ = 1; _ <= 40; _++)
            if (g <= t.getCapacity(_, W, m)) return _;
        }
        function u(m, g) {
          return r.getCharCountIndicator(m, g) + 4;
        }
        function p(m, g) {
          let W = 0;
          return (
            m.forEach(function (_) {
              const k = u(_.mode, g);
              W += k + _.getBitsLength();
            }),
            W
          );
        }
        function h(m, g) {
          for (let W = 1; W <= 40; W++)
            if (p(m, W) <= t.getCapacity(W, g, r.MIXED)) return W;
        }
        (t.from = function (g, W) {
          return i.isValid(g) ? parseInt(g, 10) : W;
        }),
          (t.getCapacity = function (g, W, _) {
            if (!i.isValid(g)) throw new Error("Invalid QR Code version");
            typeof _ > "u" && (_ = r.BYTE);
            const k = e.getSymbolTotalCodewords(g),
              T = n.getTotalCodewordsCount(g, W),
              R = (k - T) * 8;
            if (_ === r.MIXED) return R;
            const P = R - u(_, g);
            switch (_) {
              case r.NUMERIC:
                return Math.floor((P / 10) * 3);
              case r.ALPHANUMERIC:
                return Math.floor((P / 11) * 2);
              case r.KANJI:
                return Math.floor(P / 13);
              case r.BYTE:
              default:
                return Math.floor(P / 8);
            }
          }),
          (t.getBestVersionForData = function (g, W) {
            let _;
            const k = o.from(W, o.M);
            if (Array.isArray(g)) {
              if (g.length > 1) return h(g, k);
              if (g.length === 0) return 1;
              _ = g[0];
            } else _ = g;
            return l(_.mode, _.getLength(), k);
          }),
          (t.getEncodedBits = function (g) {
            if (!i.isValid(g) || g < 7)
              throw new Error("Invalid QR Code version");
            let W = g << 12;
            for (; e.getBCHDigit(W) - a >= 0; )
              W ^= s << (e.getBCHDigit(W) - a);
            return (g << 12) | W;
          });
      })(es)),
    es
  );
}
var is = {},
  Ya;
function x1() {
  if (Ya) return is;
  Ya = 1;
  const t = Yn(),
    e = 1335,
    n = 21522,
    o = t.getBCHDigit(e);
  return (
    (is.getEncodedBits = function (i, s) {
      const a = (i.bit << 3) | s;
      let l = a << 10;
      for (; t.getBCHDigit(l) - o >= 0; ) l ^= e << (t.getBCHDigit(l) - o);
      return ((a << 10) | l) ^ n;
    }),
    is
  );
}
var os = {},
  rs,
  Qa;
function $1() {
  if (Qa) return rs;
  Qa = 1;
  const t = Qn();
  function e(n) {
    (this.mode = t.NUMERIC), (this.data = n.toString());
  }
  return (
    (e.getBitsLength = function (o) {
      return 10 * Math.floor(o / 3) + (o % 3 ? (o % 3) * 3 + 1 : 0);
    }),
    (e.prototype.getLength = function () {
      return this.data.length;
    }),
    (e.prototype.getBitsLength = function () {
      return e.getBitsLength(this.data.length);
    }),
    (e.prototype.write = function (o) {
      let r, i, s;
      for (r = 0; r + 3 <= this.data.length; r += 3)
        (i = this.data.substr(r, 3)), (s = parseInt(i, 10)), o.put(s, 10);
      const a = this.data.length - r;
      a > 0 &&
        ((i = this.data.substr(r)), (s = parseInt(i, 10)), o.put(s, a * 3 + 1));
    }),
    (rs = e),
    rs
  );
}
var ss, Xa;
function S1() {
  if (Xa) return ss;
  Xa = 1;
  const t = Qn(),
    e = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":",
    ];
  function n(o) {
    (this.mode = t.ALPHANUMERIC), (this.data = o);
  }
  return (
    (n.getBitsLength = function (r) {
      return 11 * Math.floor(r / 2) + 6 * (r % 2);
    }),
    (n.prototype.getLength = function () {
      return this.data.length;
    }),
    (n.prototype.getBitsLength = function () {
      return n.getBitsLength(this.data.length);
    }),
    (n.prototype.write = function (r) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let s = e.indexOf(this.data[i]) * 45;
        (s += e.indexOf(this.data[i + 1])), r.put(s, 11);
      }
      this.data.length % 2 && r.put(e.indexOf(this.data[i]), 6);
    }),
    (ss = n),
    ss
  );
}
var as, Ja;
function E1() {
  return (
    Ja ||
      ((Ja = 1),
      (as = function (e) {
        for (var n = [], o = e.length, r = 0; r < o; r++) {
          var i = e.charCodeAt(r);
          if (i >= 55296 && i <= 56319 && o > r + 1) {
            var s = e.charCodeAt(r + 1);
            s >= 56320 &&
              s <= 57343 &&
              ((i = (i - 55296) * 1024 + s - 56320 + 65536), (r += 1));
          }
          if (i < 128) {
            n.push(i);
            continue;
          }
          if (i < 2048) {
            n.push((i >> 6) | 192), n.push((i & 63) | 128);
            continue;
          }
          if (i < 55296 || (i >= 57344 && i < 65536)) {
            n.push((i >> 12) | 224),
              n.push(((i >> 6) & 63) | 128),
              n.push((i & 63) | 128);
            continue;
          }
          if (i >= 65536 && i <= 1114111) {
            n.push((i >> 18) | 240),
              n.push(((i >> 12) & 63) | 128),
              n.push(((i >> 6) & 63) | 128),
              n.push((i & 63) | 128);
            continue;
          }
          n.push(239, 191, 189);
        }
        return new Uint8Array(n).buffer;
      })),
    as
  );
}
var cs, ec;
function k1() {
  if (ec) return cs;
  ec = 1;
  const t = E1(),
    e = Qn();
  function n(o) {
    (this.mode = e.BYTE),
      typeof o == "string" && (o = t(o)),
      (this.data = new Uint8Array(o));
  }
  return (
    (n.getBitsLength = function (r) {
      return r * 8;
    }),
    (n.prototype.getLength = function () {
      return this.data.length;
    }),
    (n.prototype.getBitsLength = function () {
      return n.getBitsLength(this.data.length);
    }),
    (n.prototype.write = function (o) {
      for (let r = 0, i = this.data.length; r < i; r++) o.put(this.data[r], 8);
    }),
    (cs = n),
    cs
  );
}
var ls, tc;
function _1() {
  if (tc) return ls;
  tc = 1;
  const t = Qn(),
    e = Yn();
  function n(o) {
    (this.mode = t.KANJI), (this.data = o);
  }
  return (
    (n.getBitsLength = function (r) {
      return r * 13;
    }),
    (n.prototype.getLength = function () {
      return this.data.length;
    }),
    (n.prototype.getBitsLength = function () {
      return n.getBitsLength(this.data.length);
    }),
    (n.prototype.write = function (o) {
      let r;
      for (r = 0; r < this.data.length; r++) {
        let i = e.toSJIS(this.data[r]);
        if (i >= 33088 && i <= 40956) i -= 33088;
        else if (i >= 57408 && i <= 60351) i -= 49472;
        else
          throw new Error(
            "Invalid SJIS character: " +
              this.data[r] +
              `
Make sure your charset is UTF-8`
          );
        (i = ((i >>> 8) & 255) * 192 + (i & 255)), o.put(i, 13);
      }
    }),
    (ls = n),
    ls
  );
}
var ds = { exports: {} },
  nc;
function A1() {
  return (
    nc ||
      ((nc = 1),
      (function (t) {
        var e = {
          single_source_shortest_paths: function (n, o, r) {
            var i = {},
              s = {};
            s[o] = 0;
            var a = e.PriorityQueue.make();
            a.push(o, 0);
            for (var l, u, p, h, m, g, W, _, k; !a.empty(); ) {
              (l = a.pop()), (u = l.value), (h = l.cost), (m = n[u] || {});
              for (p in m)
                m.hasOwnProperty(p) &&
                  ((g = m[p]),
                  (W = h + g),
                  (_ = s[p]),
                  (k = typeof s[p] > "u"),
                  (k || _ > W) && ((s[p] = W), a.push(p, W), (i[p] = u)));
            }
            if (typeof r < "u" && typeof s[r] > "u") {
              var T = ["Could not find a path from ", o, " to ", r, "."].join(
                ""
              );
              throw new Error(T);
            }
            return i;
          },
          extract_shortest_path_from_predecessor_list: function (n, o) {
            for (var r = [], i = o; i; ) r.push(i), n[i], (i = n[i]);
            return r.reverse(), r;
          },
          find_path: function (n, o, r) {
            var i = e.single_source_shortest_paths(n, o, r);
            return e.extract_shortest_path_from_predecessor_list(i, r);
          },
          PriorityQueue: {
            make: function (n) {
              var o = e.PriorityQueue,
                r = {},
                i;
              n = n || {};
              for (i in o) o.hasOwnProperty(i) && (r[i] = o[i]);
              return (
                (r.queue = []), (r.sorter = n.sorter || o.default_sorter), r
              );
            },
            default_sorter: function (n, o) {
              return n.cost - o.cost;
            },
            push: function (n, o) {
              var r = { value: n, cost: o };
              this.queue.push(r), this.queue.sort(this.sorter);
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return this.queue.length === 0;
            },
          },
        };
        t.exports = e;
      })(ds)),
    ds.exports
  );
}
var ic;
function I1() {
  return (
    ic ||
      ((ic = 1),
      (function (t) {
        const e = Qn(),
          n = $1(),
          o = S1(),
          r = k1(),
          i = _1(),
          s = rl(),
          a = Yn(),
          l = A1();
        function u(T) {
          return unescape(encodeURIComponent(T)).length;
        }
        function p(T, R, P) {
          const x = [];
          let Z;
          for (; (Z = T.exec(P)) !== null; )
            x.push({
              data: Z[0],
              index: Z.index,
              mode: R,
              length: Z[0].length,
            });
          return x;
        }
        function h(T) {
          const R = p(s.NUMERIC, e.NUMERIC, T),
            P = p(s.ALPHANUMERIC, e.ALPHANUMERIC, T);
          let x, Z;
          return (
            a.isKanjiModeEnabled()
              ? ((x = p(s.BYTE, e.BYTE, T)), (Z = p(s.KANJI, e.KANJI, T)))
              : ((x = p(s.BYTE_KANJI, e.BYTE, T)), (Z = [])),
            R.concat(P, x, Z)
              .sort(function (C, y) {
                return C.index - y.index;
              })
              .map(function (C) {
                return { data: C.data, mode: C.mode, length: C.length };
              })
          );
        }
        function m(T, R) {
          switch (R) {
            case e.NUMERIC:
              return n.getBitsLength(T);
            case e.ALPHANUMERIC:
              return o.getBitsLength(T);
            case e.KANJI:
              return i.getBitsLength(T);
            case e.BYTE:
              return r.getBitsLength(T);
          }
        }
        function g(T) {
          return T.reduce(function (R, P) {
            const x = R.length - 1 >= 0 ? R[R.length - 1] : null;
            return x && x.mode === P.mode
              ? ((R[R.length - 1].data += P.data), R)
              : (R.push(P), R);
          }, []);
        }
        function W(T) {
          const R = [];
          for (let P = 0; P < T.length; P++) {
            const x = T[P];
            switch (x.mode) {
              case e.NUMERIC:
                R.push([
                  x,
                  { data: x.data, mode: e.ALPHANUMERIC, length: x.length },
                  { data: x.data, mode: e.BYTE, length: x.length },
                ]);
                break;
              case e.ALPHANUMERIC:
                R.push([x, { data: x.data, mode: e.BYTE, length: x.length }]);
                break;
              case e.KANJI:
                R.push([x, { data: x.data, mode: e.BYTE, length: u(x.data) }]);
                break;
              case e.BYTE:
                R.push([{ data: x.data, mode: e.BYTE, length: u(x.data) }]);
            }
          }
          return R;
        }
        function _(T, R) {
          const P = {},
            x = { start: {} };
          let Z = ["start"];
          for (let b = 0; b < T.length; b++) {
            const C = T[b],
              y = [];
            for (let w = 0; w < C.length; w++) {
              const v = C[w],
                O = "" + b + w;
              y.push(O), (P[O] = { node: v, lastCount: 0 }), (x[O] = {});
              for (let I = 0; I < Z.length; I++) {
                const M = Z[I];
                P[M] && P[M].node.mode === v.mode
                  ? ((x[M][O] =
                      m(P[M].lastCount + v.length, v.mode) -
                      m(P[M].lastCount, v.mode)),
                    (P[M].lastCount += v.length))
                  : (P[M] && (P[M].lastCount = v.length),
                    (x[M][O] =
                      m(v.length, v.mode) +
                      4 +
                      e.getCharCountIndicator(v.mode, R)));
              }
            }
            Z = y;
          }
          for (let b = 0; b < Z.length; b++) x[Z[b]].end = 0;
          return { map: x, table: P };
        }
        function k(T, R) {
          let P;
          const x = e.getBestModeForData(T);
          if (((P = e.from(R, x)), P !== e.BYTE && P.bit < x.bit))
            throw new Error(
              '"' +
                T +
                '" cannot be encoded with mode ' +
                e.toString(P) +
                `.
 Suggested mode is: ` +
                e.toString(x)
            );
          switch (
            (P === e.KANJI && !a.isKanjiModeEnabled() && (P = e.BYTE), P)
          ) {
            case e.NUMERIC:
              return new n(T);
            case e.ALPHANUMERIC:
              return new o(T);
            case e.KANJI:
              return new i(T);
            case e.BYTE:
              return new r(T);
          }
        }
        (t.fromArray = function (R) {
          return R.reduce(function (P, x) {
            return (
              typeof x == "string"
                ? P.push(k(x, null))
                : x.data && P.push(k(x.data, x.mode)),
              P
            );
          }, []);
        }),
          (t.fromString = function (R, P) {
            const x = h(R, a.isKanjiModeEnabled()),
              Z = W(x),
              b = _(Z, P),
              C = l.find_path(b.map, "start", "end"),
              y = [];
            for (let w = 1; w < C.length - 1; w++) y.push(b.table[C[w]].node);
            return t.fromArray(g(y));
          }),
          (t.rawSplit = function (R) {
            return t.fromArray(h(R, a.isKanjiModeEnabled()));
          });
      })(os)),
    os
  );
}
var oc;
function T1() {
  if (oc) return Hr;
  oc = 1;
  const t = Yn(),
    e = aa(),
    n = p1(),
    o = f1(),
    r = m1(),
    i = w1(),
    s = g1(),
    a = il(),
    l = y1(),
    u = C1(),
    p = x1(),
    h = Qn(),
    m = I1();
  function g(b, C) {
    const y = b.size,
      w = i.getPositions(C);
    for (let v = 0; v < w.length; v++) {
      const O = w[v][0],
        I = w[v][1];
      for (let M = -1; M <= 7; M++)
        if (!(O + M <= -1 || y <= O + M))
          for (let D = -1; D <= 7; D++)
            I + D <= -1 ||
              y <= I + D ||
              ((M >= 0 && M <= 6 && (D === 0 || D === 6)) ||
              (D >= 0 && D <= 6 && (M === 0 || M === 6)) ||
              (M >= 2 && M <= 4 && D >= 2 && D <= 4)
                ? b.set(O + M, I + D, !0, !0)
                : b.set(O + M, I + D, !1, !0));
    }
  }
  function W(b) {
    const C = b.size;
    for (let y = 8; y < C - 8; y++) {
      const w = y % 2 === 0;
      b.set(y, 6, w, !0), b.set(6, y, w, !0);
    }
  }
  function _(b, C) {
    const y = r.getPositions(C);
    for (let w = 0; w < y.length; w++) {
      const v = y[w][0],
        O = y[w][1];
      for (let I = -2; I <= 2; I++)
        for (let M = -2; M <= 2; M++)
          I === -2 || I === 2 || M === -2 || M === 2 || (I === 0 && M === 0)
            ? b.set(v + I, O + M, !0, !0)
            : b.set(v + I, O + M, !1, !0);
    }
  }
  function k(b, C) {
    const y = b.size,
      w = u.getEncodedBits(C);
    let v, O, I;
    for (let M = 0; M < 18; M++)
      (v = Math.floor(M / 3)),
        (O = (M % 3) + y - 8 - 3),
        (I = ((w >> M) & 1) === 1),
        b.set(v, O, I, !0),
        b.set(O, v, I, !0);
  }
  function T(b, C, y) {
    const w = b.size,
      v = p.getEncodedBits(C, y);
    let O, I;
    for (O = 0; O < 15; O++)
      (I = ((v >> O) & 1) === 1),
        O < 6
          ? b.set(O, 8, I, !0)
          : O < 8
          ? b.set(O + 1, 8, I, !0)
          : b.set(w - 15 + O, 8, I, !0),
        O < 8
          ? b.set(8, w - O - 1, I, !0)
          : O < 9
          ? b.set(8, 15 - O - 1 + 1, I, !0)
          : b.set(8, 15 - O - 1, I, !0);
    b.set(w - 8, 8, 1, !0);
  }
  function R(b, C) {
    const y = b.size;
    let w = -1,
      v = y - 1,
      O = 7,
      I = 0;
    for (let M = y - 1; M > 0; M -= 2)
      for (M === 6 && M--; ; ) {
        for (let D = 0; D < 2; D++)
          if (!b.isReserved(v, M - D)) {
            let J = !1;
            I < C.length && (J = ((C[I] >>> O) & 1) === 1),
              b.set(v, M - D, J),
              O--,
              O === -1 && (I++, (O = 7));
          }
        if (((v += w), v < 0 || y <= v)) {
          (v -= w), (w = -w);
          break;
        }
      }
  }
  function P(b, C, y) {
    const w = new n();
    y.forEach(function (D) {
      w.put(D.mode.bit, 4),
        w.put(D.getLength(), h.getCharCountIndicator(D.mode, b)),
        D.write(w);
    });
    const v = t.getSymbolTotalCodewords(b),
      O = a.getTotalCodewordsCount(b, C),
      I = (v - O) * 8;
    for (
      w.getLengthInBits() + 4 <= I && w.put(0, 4);
      w.getLengthInBits() % 8 !== 0;

    )
      w.putBit(0);
    const M = (I - w.getLengthInBits()) / 8;
    for (let D = 0; D < M; D++) w.put(D % 2 ? 17 : 236, 8);
    return x(w, b, C);
  }
  function x(b, C, y) {
    const w = t.getSymbolTotalCodewords(C),
      v = a.getTotalCodewordsCount(C, y),
      O = w - v,
      I = a.getBlocksCount(C, y),
      M = w % I,
      D = I - M,
      J = Math.floor(w / I),
      le = Math.floor(O / I),
      fe = le + 1,
      Di = J - le,
      No = new l(Di);
    let ei = 0;
    const hn = new Array(I),
      Mi = new Array(I);
    let ti = 0;
    const ni = new Uint8Array(b.buffer);
    for (let wt = 0; wt < I; wt++) {
      const pn = wt < D ? le : fe;
      (hn[wt] = ni.slice(ei, ei + pn)),
        (Mi[wt] = No.encode(hn[wt])),
        (ei += pn),
        (ti = Math.max(ti, pn));
    }
    const pe = new Uint8Array(w);
    let Bi = 0,
      at,
      $e;
    for (at = 0; at < ti; at++)
      for ($e = 0; $e < I; $e++) at < hn[$e].length && (pe[Bi++] = hn[$e][at]);
    for (at = 0; at < Di; at++)
      for ($e = 0; $e < I; $e++) pe[Bi++] = Mi[$e][at];
    return pe;
  }
  function Z(b, C, y, w) {
    let v;
    if (Array.isArray(b)) v = m.fromArray(b);
    else if (typeof b == "string") {
      let J = C;
      if (!J) {
        const le = m.rawSplit(b);
        J = u.getBestVersionForData(le, y);
      }
      v = m.fromString(b, J || 40);
    } else throw new Error("Invalid data");
    const O = u.getBestVersionForData(v, y);
    if (!O)
      throw new Error(
        "The amount of data is too big to be stored in a QR Code"
      );
    if (!C) C = O;
    else if (C < O)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
          O +
          `.
`
      );
    const I = P(C, y, v),
      M = t.getSymbolSize(C),
      D = new o(M);
    return (
      g(D, C),
      W(D),
      _(D, C),
      T(D, y, 0),
      C >= 7 && k(D, C),
      R(D, I),
      isNaN(w) && (w = s.getBestMask(D, T.bind(null, D, y))),
      s.applyMask(w, D),
      T(D, y, w),
      {
        modules: D,
        version: C,
        errorCorrectionLevel: y,
        maskPattern: w,
        segments: v,
      }
    );
  }
  return (
    (Hr.create = function (C, y) {
      if (typeof C > "u" || C === "") throw new Error("No input text");
      let w = e.M,
        v,
        O;
      return (
        typeof y < "u" &&
          ((w = e.from(y.errorCorrectionLevel, e.M)),
          (v = u.from(y.version)),
          (O = s.from(y.maskPattern)),
          y.toSJISFunc && t.setToSJISFunction(y.toSJISFunc)),
        Z(C, v, w, O)
      );
    }),
    Hr
  );
}
var us = {},
  hs = {},
  rc;
function sl() {
  return (
    rc ||
      ((rc = 1),
      (function (t) {
        function e(n) {
          if (
            (typeof n == "number" && (n = n.toString()), typeof n != "string")
          )
            throw new Error("Color should be defined as hex string");
          let o = n.slice().replace("#", "").split("");
          if (o.length < 3 || o.length === 5 || o.length > 8)
            throw new Error("Invalid hex color: " + n);
          (o.length === 3 || o.length === 4) &&
            (o = Array.prototype.concat.apply(
              [],
              o.map(function (i) {
                return [i, i];
              })
            )),
            o.length === 6 && o.push("F", "F");
          const r = parseInt(o.join(""), 16);
          return {
            r: (r >> 24) & 255,
            g: (r >> 16) & 255,
            b: (r >> 8) & 255,
            a: r & 255,
            hex: "#" + o.slice(0, 6).join(""),
          };
        }
        (t.getOptions = function (o) {
          o || (o = {}), o.color || (o.color = {});
          const r =
              typeof o.margin > "u" || o.margin === null || o.margin < 0
                ? 4
                : o.margin,
            i = o.width && o.width >= 21 ? o.width : void 0,
            s = o.scale || 4;
          return {
            width: i,
            scale: i ? 4 : s,
            margin: r,
            color: {
              dark: e(o.color.dark || "#000000ff"),
              light: e(o.color.light || "#ffffffff"),
            },
            type: o.type,
            rendererOpts: o.rendererOpts || {},
          };
        }),
          (t.getScale = function (o, r) {
            return r.width && r.width >= o + r.margin * 2
              ? r.width / (o + r.margin * 2)
              : r.scale;
          }),
          (t.getImageWidth = function (o, r) {
            const i = t.getScale(o, r);
            return Math.floor((o + r.margin * 2) * i);
          }),
          (t.qrToImageData = function (o, r, i) {
            const s = r.modules.size,
              a = r.modules.data,
              l = t.getScale(s, i),
              u = Math.floor((s + i.margin * 2) * l),
              p = i.margin * l,
              h = [i.color.light, i.color.dark];
            for (let m = 0; m < u; m++)
              for (let g = 0; g < u; g++) {
                let W = (m * u + g) * 4,
                  _ = i.color.light;
                if (m >= p && g >= p && m < u - p && g < u - p) {
                  const k = Math.floor((m - p) / l),
                    T = Math.floor((g - p) / l);
                  _ = h[a[k * s + T] ? 1 : 0];
                }
                (o[W++] = _.r), (o[W++] = _.g), (o[W++] = _.b), (o[W] = _.a);
              }
          });
      })(hs)),
    hs
  );
}
var sc;
function P1() {
  return (
    sc ||
      ((sc = 1),
      (function (t) {
        const e = sl();
        function n(r, i, s) {
          r.clearRect(0, 0, i.width, i.height),
            i.style || (i.style = {}),
            (i.height = s),
            (i.width = s),
            (i.style.height = s + "px"),
            (i.style.width = s + "px");
        }
        function o() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        (t.render = function (i, s, a) {
          let l = a,
            u = s;
          typeof l > "u" && (!s || !s.getContext) && ((l = s), (s = void 0)),
            s || (u = o()),
            (l = e.getOptions(l));
          const p = e.getImageWidth(i.modules.size, l),
            h = u.getContext("2d"),
            m = h.createImageData(p, p);
          return (
            e.qrToImageData(m.data, i, l),
            n(h, u, p),
            h.putImageData(m, 0, 0),
            u
          );
        }),
          (t.renderToDataURL = function (i, s, a) {
            let l = a;
            typeof l > "u" && (!s || !s.getContext) && ((l = s), (s = void 0)),
              l || (l = {});
            const u = t.render(i, s, l),
              p = l.type || "image/png",
              h = l.rendererOpts || {};
            return u.toDataURL(p, h.quality);
          });
      })(us)),
    us
  );
}
var ps = {},
  ac;
function R1() {
  if (ac) return ps;
  ac = 1;
  const t = sl();
  function e(r, i) {
    const s = r.a / 255,
      a = i + '="' + r.hex + '"';
    return s < 1 ? a + " " + i + '-opacity="' + s.toFixed(2).slice(1) + '"' : a;
  }
  function n(r, i, s) {
    let a = r + i;
    return typeof s < "u" && (a += " " + s), a;
  }
  function o(r, i, s) {
    let a = "",
      l = 0,
      u = !1,
      p = 0;
    for (let h = 0; h < r.length; h++) {
      const m = Math.floor(h % i),
        g = Math.floor(h / i);
      !m && !u && (u = !0),
        r[h]
          ? (p++,
            (h > 0 && m > 0 && r[h - 1]) ||
              ((a += u ? n("M", m + s, 0.5 + g + s) : n("m", l, 0)),
              (l = 0),
              (u = !1)),
            (m + 1 < i && r[h + 1]) || ((a += n("h", p)), (p = 0)))
          : l++;
    }
    return a;
  }
  return (
    (ps.render = function (i, s, a) {
      const l = t.getOptions(s),
        u = i.modules.size,
        p = i.modules.data,
        h = u + l.margin * 2,
        m = l.color.light.a
          ? "<path " +
            e(l.color.light, "fill") +
            ' d="M0 0h' +
            h +
            "v" +
            h +
            'H0z"/>'
          : "",
        g =
          "<path " +
          e(l.color.dark, "stroke") +
          ' d="' +
          o(p, u, l.margin) +
          '"/>',
        W = 'viewBox="0 0 ' + h + " " + h + '"',
        k =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") +
          W +
          ' shape-rendering="crispEdges">' +
          m +
          g +
          `</svg>
`;
      return typeof a == "function" && a(null, k), k;
    }),
    ps
  );
}
var cc;
function O1() {
  if (cc) return ii;
  cc = 1;
  const t = h1(),
    e = T1(),
    n = P1(),
    o = R1();
  function r(i, s, a, l, u) {
    const p = [].slice.call(arguments, 1),
      h = p.length,
      m = typeof p[h - 1] == "function";
    if (!m && !t()) throw new Error("Callback required as last argument");
    if (m) {
      if (h < 2) throw new Error("Too few arguments provided");
      h === 2
        ? ((u = a), (a = s), (s = l = void 0))
        : h === 3 &&
          (s.getContext && typeof u > "u"
            ? ((u = l), (l = void 0))
            : ((u = l), (l = a), (a = s), (s = void 0)));
    } else {
      if (h < 1) throw new Error("Too few arguments provided");
      return (
        h === 1
          ? ((a = s), (s = l = void 0))
          : h === 2 && !s.getContext && ((l = a), (a = s), (s = void 0)),
        new Promise(function (g, W) {
          try {
            const _ = e.create(a, l);
            g(i(_, s, l));
          } catch (_) {
            W(_);
          }
        })
      );
    }
    try {
      const g = e.create(a, l);
      u(null, i(g, s, l));
    } catch (g) {
      u(g);
    }
  }
  return (
    (ii.create = e.create),
    (ii.toCanvas = r.bind(null, n.render)),
    (ii.toDataURL = r.bind(null, n.renderToDataURL)),
    (ii.toString = r.bind(null, function (i, s, a) {
      return o.render(i, a);
    })),
    ii
  );
}
var W1 = O1();
const N1 = jc(W1),
  L1 = 0.1,
  lc = 2.5,
  It = 7;
function fs(t, e, n) {
  return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= n + L1;
}
function D1(t, e) {
  const n = Array.prototype.slice.call(
      N1.create(t, { errorCorrectionLevel: e }).modules.data,
      0
    ),
    o = Math.sqrt(n.length);
  return n.reduce(
    (r, i, s) => (s % o === 0 ? r.push([i]) : r[r.length - 1].push(i)) && r,
    []
  );
}
const M1 = {
    generate({
      uri: t,
      size: e,
      logoSize: n,
      padding: o = 8,
      dotColor: r = "var(--apkt-tokens-theme-textInvert)",
    }) {
      const s = [],
        a = D1(t, "Q"),
        l = (e - 2 * o) / a.length,
        u = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      u.forEach(({ x: _, y: k }) => {
        const T = (a.length - It) * l * _ + o,
          R = (a.length - It) * l * k + o,
          P = 0.45;
        for (let x = 0; x < u.length; x += 1) {
          const Z = l * (It - x * 2);
          s.push(se`
            <rect
              fill=${
                x === 2
                  ? "var(--apkt-tokens-theme-textInvert)"
                  : "var(--apkt-tokens-theme-textPrimary)"
              }
              width=${x === 0 ? Z - 10 : Z}
              rx= ${x === 0 ? (Z - 10) * P : Z * P}
              ry= ${x === 0 ? (Z - 10) * P : Z * P}
              stroke=${r}
              stroke-width=${x === 0 ? 10 : 0}
              height=${x === 0 ? Z - 10 : Z}
              x= ${x === 0 ? R + l * x + 10 / 2 : R + l * x}
              y= ${x === 0 ? T + l * x + 10 / 2 : T + l * x}
            />
          `);
        }
      });
      const p = Math.floor((n + 25) / l),
        h = a.length / 2 - p / 2,
        m = a.length / 2 + p / 2 - 1,
        g = [];
      a.forEach((_, k) => {
        _.forEach((T, R) => {
          if (
            a[k][R] &&
            !(
              (k < It && R < It) ||
              (k > a.length - (It + 1) && R < It) ||
              (k < It && R > a.length - (It + 1))
            ) &&
            !(k > h && k < m && R > h && R < m)
          ) {
            const P = k * l + l / 2 + o,
              x = R * l + l / 2 + o;
            g.push([P, x]);
          }
        });
      });
      const W = {};
      return (
        g.forEach(([_, k]) => {
          var T;
          W[_] ? (T = W[_]) == null || T.push(k) : (W[_] = [k]);
        }),
        Object.entries(W)
          .map(([_, k]) => {
            const T = k.filter((R) => k.every((P) => !fs(R, P, l)));
            return [Number(_), T];
          })
          .forEach(([_, k]) => {
            k.forEach((T) => {
              s.push(se`<circle cx=${_} cy=${T} fill=${r} r=${l / lc} />`);
            });
          }),
        Object.entries(W)
          .filter(([_, k]) => k.length > 1)
          .map(([_, k]) => {
            const T = k.filter((R) => k.some((P) => fs(R, P, l)));
            return [Number(_), T];
          })
          .map(([_, k]) => {
            k.sort((R, P) => (R < P ? -1 : 1));
            const T = [];
            for (const R of k) {
              const P = T.find((x) => x.some((Z) => fs(R, Z, l)));
              P ? P.push(R) : T.push([R]);
            }
            return [_, T.map((R) => [R[0], R[R.length - 1]])];
          })
          .forEach(([_, k]) => {
            k.forEach(([T, R]) => {
              s.push(se`
              <line
                x1=${_}
                x2=${_}
                y1=${T}
                y2=${R}
                stroke=${r}
                stroke-width=${l / (lc / 2)}
                stroke-linecap="round"
              />
            `);
            });
          }),
        s
      );
    },
  },
  B1 = U`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ tokens: t }) => t.theme.backgroundInvert};
    color: ${({ tokens: t }) => t.theme.textInvert};
  }

  :host {
    border-radius: ${({ borderRadius: t }) => t[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens: t }) => t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens: t }) => t.theme.backgroundPrimary};
    border-radius: ${({ borderRadius: t }) => t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius: t }) => t[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;
var un = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let St = class extends A {
  constructor() {
    super(...arguments),
      (this.uri = ""),
      (this.size = 0),
      (this.theme = "dark"),
      (this.imageSrc = void 0),
      (this.alt = void 0),
      (this.arenaClear = void 0),
      (this.farcaster = void 0);
  }
  render() {
    return (
      (this.dataset.theme = this.theme),
      (this.dataset.clear = String(this.arenaClear)),
      (this.style.cssText = `--local-size: ${this.size}px`),
      c`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`
    );
  }
  templateSvg() {
    return se`
      <svg height=${this.size} width=${this.size}>
        ${M1.generate({
          uri: this.uri,
          size: this.size,
          logoSize: this.arenaClear ? 0 : this.size / 4,
        })}
      </svg>
    `;
  }
  templateVisual() {
    return this.imageSrc
      ? c`<wui-image src=${this.imageSrc} alt=${
          this.alt ?? "logo"
        }></wui-image>`
      : this.farcaster
      ? c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`
      : c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
St.styles = [K, B1];
un([d()], St.prototype, "uri", void 0);
un([d({ type: Number })], St.prototype, "size", void 0);
un([d()], St.prototype, "theme", void 0);
un([d()], St.prototype, "imageSrc", void 0);
un([d()], St.prototype, "alt", void 0);
un([d({ type: Boolean })], St.prototype, "arenaClear", void 0);
un([d({ type: Boolean })], St.prototype, "farcaster", void 0);
St = un([S("wui-qr-code")], St);
const j1 = U`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations: t }) => t.xl};
    animation-timing-function: ${({ easings: t }) => t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var al = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let fr = class extends ge {
  constructor() {
    super(),
      (this.basic = !1),
      (this.forceUpdate = () => {
        this.requestUpdate();
      }),
      window.addEventListener("resize", this.forceUpdate);
  }
  firstUpdated() {
    var e, n;
    this.basic ||
      te.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name:
            ((e = this.wallet) == null ? void 0 : e.name) ?? "WalletConnect",
          platform: "qrcode",
          displayIndex: (n = this.wallet) == null ? void 0 : n.display_index,
        },
      });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      (e = this.unsubscribe) == null || e.forEach((n) => n()),
      window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    return (
      this.onRenderProxy(),
      c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "5", "5", "5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `
    );
  }
  onRenderProxy() {
    !this.ready &&
      this.uri &&
      (this.timeout = setTimeout(() => {
        this.ready = !0;
      }, 200));
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) return null;
    const e = this.getBoundingClientRect().width - 40,
      n = this.wallet ? this.wallet.name : void 0;
    return (
      F.setWcLinking(void 0),
      F.setRecentWallet(this.wallet),
      c` <wui-qr-code
      size=${e}
      theme=${ys.state.themeMode}
      uri=${this.uri}
      imageSrc=${N(ee.getWalletImage(this.wallet))}
      color=${N(ys.state.themeVariables["--w3m-qr-color"])}
      alt=${N(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`
    );
  }
  copyTemplate() {
    const e = !this.uri || !this.ready;
    return c`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
  }
};
fr.styles = j1;
al([d({ type: Boolean })], fr.prototype, "basic", void 0);
fr = al([S("w3m-connecting-wc-qrcode")], fr);
var z1 = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let dc = class extends A {
  constructor() {
    var e, n;
    if (
      (super(),
      (this.wallet = (e = L.state.data) == null ? void 0 : e.wallet),
      !this.wallet)
    )
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    te.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.wallet.name,
        platform: "browser",
        displayIndex: (n = this.wallet) == null ? void 0 : n.display_index,
      },
    });
  }
  render() {
    return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${N(ee.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `;
  }
};
dc = z1([S("w3m-connecting-wc-unsupported")], dc);
var cl = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ws = class extends ge {
  constructor() {
    var e;
    if ((super(), (this.isLoading = !0), !this.wallet))
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    (this.onConnect = this.onConnectProxy.bind(this)),
      (this.secondaryBtnLabel = "Open"),
      (this.secondaryLabel = Ce.CONNECT_LABELS.MOBILE),
      (this.secondaryBtnIcon = "externalLink"),
      this.updateLoadingState(),
      this.unsubscribe.push(
        F.subscribeKey("wcUri", () => {
          this.updateLoadingState();
        })
      ),
      te.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: this.wallet.name,
          platform: "web",
          displayIndex: (e = this.wallet) == null ? void 0 : e.display_index,
        },
      });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    var e;
    if ((e = this.wallet) != null && e.webapp_link && this.uri)
      try {
        this.error = !1;
        const { webapp_link: n, name: o } = this.wallet,
          { redirect: r, href: i } = j.formatUniversalUrl(n, this.uri);
        F.setWcLinking({ name: o, href: i }),
          F.setRecentWallet(this.wallet),
          j.openHref(r, "_blank");
      } catch {
        this.error = !0;
      }
  }
};
cl([f()], Ws.prototype, "isLoading", void 0);
Ws = cl([S("w3m-connecting-wc-web")], Ws);
var Xn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let zt = class extends A {
  constructor() {
    var e;
    super(),
      (this.wallet = (e = L.state.data) == null ? void 0 : e.wallet),
      (this.unsubscribe = []),
      (this.platform = void 0),
      (this.platforms = []),
      (this.isSiwxEnabled = !!B.state.siwx),
      (this.remoteFeatures = B.state.remoteFeatures),
      (this.displayBranding = !0),
      (this.basic = !1),
      this.determinePlatforms(),
      this.initializeConnection(),
      this.unsubscribe.push(
        B.subscribeKey("remoteFeatures", (n) => (this.remoteFeatures = n))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
  }
  reownBrandingTemplate() {
    var e;
    return !((e = this.remoteFeatures) != null && e.reownBranding) ||
      !this.displayBranding
      ? null
      : c`<wui-ux-by-reown></wui-ux-by-reown>`;
  }
  async initializeConnection(e = !1) {
    var n, o;
    if (!(this.platform === "browser" || (B.state.manualWCControl && !e)))
      try {
        const { wcPairingExpiry: r, status: i } = F.state;
        if (
          e ||
          B.state.enableEmbedded ||
          j.isPairingExpired(r) ||
          i === "connecting"
        ) {
          const s = F.getConnections(E.state.activeChain),
            a = (n = this.remoteFeatures) == null ? void 0 : n.multiWallet,
            l = s.length > 0;
          await F.connectWalletConnect({ cache: "never" }),
            this.isSiwxEnabled ||
              (l && a
                ? (L.replace("ProfileWallets"),
                  re.showSuccess("New Wallet Added"))
                : ye.close());
        }
      } catch (r) {
        if (
          r instanceof Error &&
          r.message.includes(
            "An error occurred when attempting to switch chain"
          ) &&
          !B.state.enableNetworkSwitch &&
          E.state.activeChain
        ) {
          E.setActiveCaipNetwork(
            jl.getUnsupportedNetwork(
              `${E.state.activeChain}:${
                (o = E.state.activeCaipNetwork) == null ? void 0 : o.id
              }`
            )
          ),
            E.showUnsupportedChainUI();
          return;
        }
        te.sendEvent({
          type: "track",
          event: "CONNECT_ERROR",
          properties: {
            message: (r == null ? void 0 : r.message) ?? "Unknown",
          },
        }),
          F.setWcError(!0),
          re.showError(r.message ?? "Connection error"),
          F.resetWcConnection(),
          L.goBack();
      }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push("qrcode"), (this.platform = "qrcode");
      return;
    }
    if (this.platform) return;
    const {
        mobile_link: e,
        desktop_link: n,
        webapp_link: o,
        injected: r,
        rdns: i,
      } = this.wallet,
      s = r == null ? void 0 : r.map(({ injected_id: W }) => W).filter(Boolean),
      a = [...(i ? [i] : s ?? [])],
      l = B.state.isUniversalProvider ? !1 : a.length,
      u = e,
      p = o,
      h = F.checkInstalled(a),
      m = l && h,
      g = n && !j.isMobile();
    m && !E.state.noAdapters && this.platforms.push("browser"),
      u && this.platforms.push(j.isMobile() ? "mobile" : "qrcode"),
      p && this.platforms.push("web"),
      g && this.platforms.push("desktop"),
      !m && l && !E.state.noAdapters && this.platforms.push("unsupported"),
      (this.platform = this.platforms[0]);
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "web":
        return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case "desktop":
        return c`
          <w3m-connecting-wc-desktop .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
      case "mobile":
        return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return c`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
      default:
        return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    return this.platforms.length > 1
      ? c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
      : null;
  }
  async onSelectPlatform(e) {
    var o;
    const n = (o = this.shadowRoot) == null ? void 0 : o.querySelector("div");
    n &&
      (await n.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease",
      }).finished,
      (this.platform = e),
      n.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease",
      }));
  }
};
Xn([f()], zt.prototype, "platform", void 0);
Xn([f()], zt.prototype, "platforms", void 0);
Xn([f()], zt.prototype, "isSiwxEnabled", void 0);
Xn([f()], zt.prototype, "remoteFeatures", void 0);
Xn([d({ type: Boolean })], zt.prototype, "displayBranding", void 0);
Xn([d({ type: Boolean })], zt.prototype, "basic", void 0);
zt = Xn([S("w3m-connecting-wc-view")], zt);
var ca = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let io = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.isMobile = j.isMobile()),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.unsubscribe.push(
        B.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (this.isMobile) {
      const { featured: e, recommended: n } = oe.state,
        { customWallets: o } = B.state,
        r = Xe.getRecentWallets(),
        i = e.length || n.length || (o == null ? void 0 : o.length) || r.length;
      return c`<wui-flex flexDirection="column" gap="2" .margin=${[
        "1",
        "3",
        "3",
        "3",
      ]}>
        ${i ? c`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return c`<wui-flex flexDirection="column" .padding=${["0", "0", "4", "0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0", "3", "0", "3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
  }
  reownBrandingTemplate() {
    var e;
    return (e = this.remoteFeatures) != null && e.reownBranding
      ? c` <wui-flex flexDirection="column" .padding=${["1", "0", "1", "0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`
      : null;
  }
};
ca([f()], io.prototype, "isMobile", void 0);
ca([f()], io.prototype, "remoteFeatures", void 0);
io = ca([S("w3m-connecting-wc-basic-view")], io);
const V1 = xe`
  .continue-button-container {
    width: 100%;
  }
`;
var ll = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let oo = class extends A {
  constructor() {
    super(...arguments), (this.loading = !1);
  }
  render() {
    return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0", "0", "4", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            j.openHref(zl.URLS.FAQ, "_blank");
          }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return c` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0", "6", "0", "6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return c`<wui-flex
      .padding=${["0", "8", "0", "8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
  }
  handleContinue() {
    L.push("RegisterAccountName"),
      te.sendEvent({
        type: "track",
        event: "OPEN_ENS_FLOW",
        properties: {
          isSmartAccount:
            xt(E.state.activeChain) === Fe.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      });
  }
};
oo.styles = V1;
ll([f()], oo.prototype, "loading", void 0);
oo = ll([S("w3m-choose-account-name-view")], oo);
var U1 = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ns = class extends A {
  constructor() {
    var e;
    super(...arguments),
      (this.wallet = (e = L.state.data) == null ? void 0 : e.wallet);
  }
  render() {
    if (!this.wallet) throw new Error("w3m-downloads-view");
    return c`
      <wui-flex gap="2" flexDirection="column" .padding=${["3", "3", "4", "3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var e;
    return (e = this.wallet) != null && e.chrome_store
      ? c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`
      : null;
  }
  iosTemplate() {
    var e;
    return (e = this.wallet) != null && e.app_store
      ? c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`
      : null;
  }
  androidTemplate() {
    var e;
    return (e = this.wallet) != null && e.play_store
      ? c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`
      : null;
  }
  homepageTemplate() {
    var e;
    return (e = this.wallet) != null && e.homepage
      ? c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `
      : null;
  }
  onChromeStore() {
    var e;
    (e = this.wallet) != null &&
      e.chrome_store &&
      j.openHref(this.wallet.chrome_store, "_blank");
  }
  onAppStore() {
    var e;
    (e = this.wallet) != null &&
      e.app_store &&
      j.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var e;
    (e = this.wallet) != null &&
      e.play_store &&
      j.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var e;
    (e = this.wallet) != null &&
      e.homepage &&
      j.openHref(this.wallet.homepage, "_blank");
  }
};
Ns = U1([S("w3m-downloads-view")], Ns);
var F1 = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const H1 = "https://walletconnect.com/explorer";
let Ls = class extends A {
  render() {
    return c`
      <wui-flex flexDirection="column" .padding=${["0", "3", "3", "3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${() => {
            j.openHref(
              "https://walletconnect.com/explorer?type=wallet",
              "_blank"
            );
          }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended: e, featured: n } = oe.state,
      { customWallets: o } = B.state;
    return [...n, ...(o ?? []), ...e].slice(0, 4).map(
      (i) => c`
        <wui-list-wallet
          name=${i.name ?? "Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${N(ee.getWalletImage(i))}
          @click=${() => {
            j.openHref(i.homepage ?? H1, "_blank");
          }}
        ></wui-list-wallet>
      `
    );
  }
};
Ls = F1([S("w3m-get-wallet-view")], Ls);
const Z1 = se`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
  K1 = se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,
  q1 = se`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,
  G1 = se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,
  Y1 = se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,
  Q1 = se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,
  X1 = se`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,
  J1 = se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,
  eh = se`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
  th = se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,
  nh = se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,
  ih = se`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,
  oh = se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,
  rh = se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,
  sh = se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,
  ah = se`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,
  ch = se`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
  lh = se`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,
  dh = se`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,
  uh = se`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,
  hh = xe`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;
var la = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const ph = {
  browser: K1,
  dao: q1,
  defi: G1,
  defiAlt: Y1,
  eth: Q1,
  layers: J1,
  lock: th,
  login: nh,
  network: oh,
  nft: rh,
  noun: sh,
  profile: lh,
  system: uh,
  meld: ih,
  onrampCard: ah,
  google: X1,
  pencil: ch,
  lightbulb: eh,
  solana: dh,
  bitcoin: Z1,
};
let ro = class extends A {
  constructor() {
    super(...arguments), (this.name = "browser"), (this.size = "md");
  }
  render() {
    return (
      (this.style.cssText = `
       --local-size: var(--apkt-visual-size-${this.size});
   `),
      c`${ph[this.name]}`
    );
  }
};
ro.styles = [K, hh];
la([d()], ro.prototype, "name", void 0);
la([d()], ro.prototype, "size", void 0);
ro = la([S("wui-visual")], ro);
var dl = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ds = class extends A {
  constructor() {
    super(...arguments), (this.data = []);
  }
  render() {
    return c`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(
          (e) => c`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(
                  (n) => c`<wui-visual size="sm" name=${n}></wui-visual>`
                )}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${
                e.title
              }</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `
        )}
      </wui-flex>
    `;
  }
};
dl([d({ type: Array })], Ds.prototype, "data", void 0);
Ds = dl([S("w3m-help-widget")], Ds);
var fh = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const mh = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!",
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.",
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.",
  },
];
let Ms = class extends A {
  render() {
    return c`
      <wui-flex
        flexDirection="column"
        .padding=${["6", "5", "5", "5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${mh}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(
          this
        )}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    te.sendEvent({ type: "track", event: "CLICK_GET_WALLET" }),
      L.push("GetWallet");
  }
};
Ms = fh([S("w3m-what-is-a-wallet-view")], Ms);
const wh = U`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({ durations: t }) => t.lg}
      ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
var ul = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let so = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.checked = xn.state.isLegalCheckboxChecked),
      this.unsubscribe.push(
        xn.subscribeKey("isLegalCheckboxChecked", (e) => {
          this.checked = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    var l;
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = B.state,
      o = (l = B.state.features) == null ? void 0 : l.legalCheckbox,
      i = !!(e || n) && !!o,
      s = i && !this.checked,
      a = s ? -1 : void 0;
    return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i ? ["0", "3", "3", "3"] : "3"}
        gap="2"
        class=${N(s ? "disabled" : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${N(a)}></w3m-wallet-login-list>
      </wui-flex>
    `;
  }
};
so.styles = wh;
ul([f()], so.prototype, "checked", void 0);
so = ul([S("w3m-connect-wallets-view")], so);
const gh = U`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${(t) => t.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var bh = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Bs = class extends A {
  render() {
    return c`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
  }
};
Bs.styles = [K, gh];
Bs = bh([S("wui-loading-hexagon")], Bs);
const vh = se`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,
  yh = se`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,
  Ch = U`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({ tokens: t }) => t.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;
var Jn = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Vt = class extends A {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.name = "uknown"),
      (this.networkImagesBySize = { sm: yh, md: qc, lg: vh }),
      (this.selected = !1),
      (this.round = !1);
  }
  render() {
    const e = { sm: "4", md: "6", lg: "10" };
    return (
      this.round
        ? ((this.dataset.round = "true"),
          (this.style.cssText = `
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `))
        : (this.style.cssText = `

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${e[this.size]});
    `),
      c`${this.templateVisual()} ${this.svgTemplate()} `
    );
  }
  svgTemplate() {
    return this.round ? null : this.networkImagesBySize[this.size];
  }
  templateVisual() {
    return this.imageSrc
      ? c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
      : c`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
  }
};
Vt.styles = [K, Ch];
Jn([d()], Vt.prototype, "size", void 0);
Jn([d()], Vt.prototype, "name", void 0);
Jn([d({ type: Object })], Vt.prototype, "networkImagesBySize", void 0);
Jn([d()], Vt.prototype, "imageSrc", void 0);
Jn([d({ type: Boolean })], Vt.prototype, "selected", void 0);
Jn([d({ type: Boolean })], Vt.prototype, "round", void 0);
Vt = Jn([S("wui-network-image")], Vt);
const xh = xe`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;
var da = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let ki = class extends A {
  constructor() {
    var e;
    super(),
      (this.network = (e = L.state.data) == null ? void 0 : e.network),
      (this.unsubscribe = []),
      (this.showRetry = !1),
      (this.error = !1);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network)
      throw new Error("w3m-network-switch-view: No network provided");
    this.onShowRetry();
    const e = this.getLabel(),
      n = this.getSubLabel();
    return c`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "10", "5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${N(ee.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : c`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  getSubLabel() {
    const e = z.getConnectorId(E.state.activeChain);
    return z.getAuthConnector() && e === Q.CONNECTOR_ID.AUTH
      ? ""
      : this.error
      ? "Switch can be declined if chain is not supported by a wallet or previous request is still active"
      : "Accept connection request in your wallet";
  }
  getLabel() {
    var o;
    const e = z.getConnectorId(E.state.activeChain);
    return z.getAuthConnector() && e === Q.CONNECTOR_ID.AUTH
      ? `Switching to ${
          ((o = this.network) == null ? void 0 : o.name) ?? "Unknown"
        } network...`
      : this.error
      ? "Switch declined"
      : "Approve in wallet";
  }
  onShowRetry() {
    var e;
    if (this.error && !this.showRetry) {
      this.showRetry = !0;
      const n =
        (e = this.shadowRoot) == null ? void 0 : e.querySelector("wui-button");
      n == null ||
        n.animate([{ opacity: 0 }, { opacity: 1 }], {
          fill: "forwards",
          easing: "ease",
        });
    }
  }
  async onSwitchNetwork() {
    var e;
    try {
      (this.error = !1),
        E.state.activeChain !==
          ((e = this.network) == null ? void 0 : e.chainNamespace) &&
          E.setIsSwitchingNamespace(!0),
        this.network && (await E.switchActiveNetwork(this.network));
    } catch {
      this.error = !0;
    }
  }
};
ki.styles = xh;
da([f()], ki.prototype, "showRetry", void 0);
da([f()], ki.prototype, "error", void 0);
ki = da([S("w3m-network-switch-view")], ki);
const $h = U`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing: t }) => t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({ borderRadius: t }) => t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var Oo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Un = class extends A {
  constructor() {
    super(...arguments),
      (this.imageSrc = "ethereum"),
      (this.name = "Ethereum"),
      (this.disabled = !1);
  }
  render() {
    return c`
      <button ?disabled=${this.disabled} tabindex=${N(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `;
  }
};
Un.styles = [K, ie, $h];
Oo([d()], Un.prototype, "imageSrc", void 0);
Oo([d()], Un.prototype, "name", void 0);
Oo([d()], Un.prototype, "tabIdx", void 0);
Oo([d({ type: Boolean })], Un.prototype, "disabled", void 0);
Un = Oo([S("wui-list-network")], Un);
const Sh = xe`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;
var Wo = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let an = class extends A {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.network = E.state.activeCaipNetwork),
      (this.requestedCaipNetworks = E.getCaipNetworks()),
      (this.search = ""),
      (this.onDebouncedSearch = j.debounce((e) => {
        this.search = e;
      }, 100)),
      this.unsubscribe.push(
        $n.subscribeNetworkImages(() => this.requestUpdate()),
        E.subscribeKey("activeCaipNetwork", (e) => (this.network = e)),
        E.subscribe(() => {
          this.requestedCaipNetworks = E.getAllRequestedCaipNetworks();
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0", "3", "3", "3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `;
  }
  templateSearchInput() {
    return c`
      <wui-flex gap="2" .padding=${["0", "3", "3", "3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  networksTemplate() {
    var o;
    const e = E.getAllApprovedCaipNetworkIds(),
      n = j.sortRequestedNetworks(e, this.requestedCaipNetworks);
    return (
      this.search
        ? (this.filteredNetworks =
            n == null
              ? void 0
              : n.filter((r) => {
                  var i;
                  return (i = r == null ? void 0 : r.name) == null
                    ? void 0
                    : i.toLowerCase().includes(this.search.toLowerCase());
                }))
        : (this.filteredNetworks = n),
      (o = this.filteredNetworks) == null
        ? void 0
        : o.map((r) => {
            var i;
            return c`
        <wui-list-network
          .selected=${((i = this.network) == null ? void 0 : i.id) === r.id}
          imageSrc=${N(ee.getNetworkImage(r))}
          type="network"
          name=${r.name ?? r.id}
          @click=${() => this.onSwitchNetwork(r)}
          .disabled=${this.getNetworkDisabled(r)}
          data-testid=${`w3m-network-switch-${r.name ?? r.id}`}
        ></wui-list-network>
      `;
          })
    );
  }
  getNetworkDisabled(e) {
    const n = e.chainNamespace,
      o = Y.getCaipAddress(n),
      r = E.getAllApprovedCaipNetworkIds(),
      i = E.getNetworkProp("supportsAllNetworks", n) !== !1,
      s = z.getConnectorId(n),
      a = z.getAuthConnector(),
      l = s === Q.CONNECTOR_ID.AUTH && a;
    return !o || i || l ? !1 : !(r != null && r.includes(e.caipNetworkId));
  }
  onSwitchNetwork(e) {
    Vl.onSwitchNetwork({ network: e });
  }
};
an.styles = Sh;
Wo([f()], an.prototype, "network", void 0);
Wo([f()], an.prototype, "requestedCaipNetworks", void 0);
Wo([f()], an.prototype, "filteredNetworks", void 0);
Wo([f()], an.prototype, "search", void 0);
an = Wo([S("w3m-networks-view")], an);
const Eh = U`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({ borderRadius: t }) => t[1]} * 9 - ${({ borderRadius: t }) => t[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({ borderRadius: t }) => t[1]} * 9 - ${({ borderRadius: t }) => t[3]}
    );
    box-shadow: inset 0 0 0 1px ${({ tokens: t }) => t.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing: t }) => t[1]} * -1);
    bottom: calc(${({ spacing: t }) => t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({ durations: t }) => t.lg} ${({ easings: t }) =>
  t["ease-out-power-2"]},
      transform ${({ durations: t }) => t.lg}
        ${({ easings: t }) => t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing: t }) => t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings: t }) => t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({ spacing: t }) => t["01"]} ${({ spacing: t }) => t[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;
var hl = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const kh = {
  eip155: "eth",
  solana: "solana",
  bip122: "bitcoin",
  polkadot: void 0,
};
let ao = class extends A {
  constructor() {
    var e, n;
    super(...arguments),
      (this.unsubscribe = []),
      (this.switchToChain =
        (e = L.state.data) == null ? void 0 : e.switchToChain),
      (this.caipNetwork = (n = L.state.data) == null ? void 0 : n.network),
      (this.activeChain = E.state.activeChain);
  }
  firstUpdated() {
    this.unsubscribe.push(
      E.subscribeKey("activeChain", (e) => (this.activeChain = e))
    );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.switchToChain
      ? Q.CHAIN_NAME_MAP[this.switchToChain]
      : "supported";
    if (!this.switchToChain) return null;
    const n = Q.CHAIN_NAME_MAP[this.switchToChain];
    return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4", "2", "2", "2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${N(kh[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${n}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${n}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
  }
  async switchActiveChain() {
    this.switchToChain &&
      (E.setIsSwitchingNamespace(!0),
      z.setFilterByNamespace(this.switchToChain),
      this.caipNetwork
        ? await E.switchActiveNetwork(this.caipNetwork)
        : E.setActiveNamespace(this.switchToChain),
      L.reset("Connect"));
  }
};
ao.styles = Eh;
hl([d()], ao.prototype, "activeChain", void 0);
ao = hl([S("w3m-switch-active-chain-view")], ao);
var _h = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
const Ah = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.",
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences.",
  },
];
let js = class extends A {
  render() {
    return c`
      <wui-flex
        flexDirection="column"
        .padding=${["6", "5", "5", "5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Ah}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${() => {
            j.openHref(
              "https://ethereum.org/en/developers/docs/networks/",
              "_blank"
            );
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
js = _h([S("w3m-what-is-a-network-view")], js);
const Ih = xe`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var ua = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let _i = class extends A {
  constructor() {
    var e;
    super(),
      (this.swapUnsupportedChain =
        (e = L.state.data) == null ? void 0 : e.swapUnsupportedChain),
      (this.unsubscribe = []),
      (this.disconnecting = !1),
      (this.remoteFeatures = B.state.remoteFeatures),
      this.unsubscribe.push(
        $n.subscribeNetworkImages(() => this.requestUpdate()),
        B.subscribeKey("remoteFeatures", (n) => {
          this.remoteFeatures = n;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3", "5", "2", "5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  descriptionTemplate() {
    return this.swapUnsupportedChain
      ? c`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `
      : c`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
  }
  networksTemplate() {
    const e = E.getAllRequestedCaipNetworks(),
      n = E.getAllApprovedCaipNetworkIds(),
      o = j.sortRequestedNetworks(n, e);
    return (
      this.swapUnsupportedChain
        ? o.filter((i) => Ce.SWAP_SUPPORTED_NETWORKS.includes(i.caipNetworkId))
        : o
    ).map(
      (i) => c`
        <wui-list-network
          imageSrc=${N(ee.getNetworkImage(i))}
          name=${i.name ?? "Unknown"}
          @click=${() => this.onSwitchNetwork(i)}
        >
        </wui-list-network>
      `
    );
  }
  async onDisconnect() {
    var e;
    try {
      this.disconnecting = !0;
      const n = E.state.activeChain,
        r = F.getConnections(n).length > 0,
        i = n && z.state.activeConnectorIds[n],
        s = (e = this.remoteFeatures) == null ? void 0 : e.multiWallet;
      await F.disconnect(s ? { id: i, namespace: n } : {}),
        r && s && (L.push("ProfileWallets"), re.showSuccess("Wallet deleted"));
    } catch {
      te.sendEvent({
        type: "track",
        event: "DISCONNECT_ERROR",
        properties: { message: "Failed to disconnect" },
      }),
        re.showError("Failed to disconnect");
    } finally {
      this.disconnecting = !1;
    }
  }
  async onSwitchNetwork(e) {
    const n = Y.state.caipAddress,
      o = E.getAllApprovedCaipNetworkIds(),
      r = E.getNetworkProp("supportsAllNetworks", e.chainNamespace),
      i = L.state.data;
    n
      ? o != null && o.includes(e.caipNetworkId)
        ? await E.switchActiveNetwork(e)
        : r
        ? L.push("SwitchNetwork", { ...i, network: e })
        : L.push("SwitchNetwork", { ...i, network: e })
      : n || (E.setActiveCaipNetwork(e), L.push("Connect"));
  }
};
_i.styles = Ih;
ua([f()], _i.prototype, "disconnecting", void 0);
ua([f()], _i.prototype, "remoteFeatures", void 0);
_i = ua([S("w3m-unsupported-chain-view")], _i);
const Th = U`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing: t }) => t[2]};
    border-radius: ${({ borderRadius: t }) => t[4]};
    padding: ${({ spacing: t }) => t[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({ tokens: t }) => t.theme.textSecondary};
    background-color: ${({ tokens: t }) => t.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({ tokens: t }) => t.core.textSuccess};
    background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({ tokens: t }) => t.core.textError};
    background-color: ${({ tokens: t }) => t.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({ tokens: t }) => t.core.textWarning};
    background-color: ${({ tokens: t }) => t.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({ tokens: t }) => t.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;
var Pr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ai = class extends A {
  constructor() {
    super(...arguments),
      (this.icon = "externalLink"),
      (this.text = ""),
      (this.type = "info");
  }
  render() {
    return c`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `;
  }
};
Ai.styles = [K, ie, Th];
Pr([d()], Ai.prototype, "icon", void 0);
Pr([d()], Ai.prototype, "text", void 0);
Pr([d()], Ai.prototype, "type", void 0);
Ai = Pr([S("wui-banner")], Ai);
const Ph = xe`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var Rh = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let mr = class extends A {
  constructor() {
    super(), (this.unsubscribe = []);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c` <wui-flex flexDirection="column" .padding=${[
      "2",
      "3",
      "3",
      "3",
    ]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const e = E.getAllRequestedCaipNetworks(),
      n = E.getAllApprovedCaipNetworkIds(),
      o = E.state.activeCaipNetwork,
      r = E.checkIfSmartAccountEnabled();
    let i = j.sortRequestedNetworks(n, e);
    if (
      r &&
      xt(o == null ? void 0 : o.chainNamespace) ===
        Fe.ACCOUNT_TYPES.SMART_ACCOUNT
    ) {
      if (!o) return null;
      i = [o];
    }
    return i
      .filter(
        (a) => a.chainNamespace === (o == null ? void 0 : o.chainNamespace)
      )
      .map(
        (a) => c`
        <wui-list-network
          imageSrc=${N(ee.getNetworkImage(a))}
          name=${a.name ?? "Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `
      );
  }
};
mr.styles = Ph;
mr = Rh([S("w3m-wallet-compatible-networks-view")], mr);
const Oh = U`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({ tokens: t }) => t.theme.borderPrimary};
    border-radius: ${({ borderRadius: t }) => t[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;
var Rr = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let Ii = class extends A {
  render() {
    return (
      (this.dataset.borderRadiusFull = this.borderRadiusFull
        ? "true"
        : "false"),
      c`${this.templateVisual()}`
    );
  }
  templateVisual() {
    return this.imageSrc
      ? c`<wui-image src=${this.imageSrc} alt=${this.alt ?? ""}></wui-image>`
      : c`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`;
  }
};
Ii.styles = [K, Oh];
Rr([d()], Ii.prototype, "imageSrc", void 0);
Rr([d()], Ii.prototype, "alt", void 0);
Rr([d({ type: Boolean })], Ii.prototype, "borderRadiusFull", void 0);
Ii = Rr([S("wui-visual-thumbnail")], Ii);
const Wh = U`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({ spacing: t }) => t[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
var Nh = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let zs = class extends A {
  constructor() {
    var e, n;
    super(...arguments),
      (this.dappImageUrl = (e = B.state.metadata) == null ? void 0 : e.icons),
      (this.walletImageUrl =
        (n = Y.state.connectedWalletInfo) == null ? void 0 : n.icon);
  }
  firstUpdated() {
    var n;
    const e =
      (n = this.shadowRoot) == null
        ? void 0
        : n.querySelectorAll("wui-visual-thumbnail");
    e != null && e[0] && this.createAnimation(e[0], "translate(18px)"),
      e != null && e[1] && this.createAnimation(e[1], "translate(-18px)");
  }
  render() {
    var e;
    return c`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e = this.dappImageUrl) == null ? void 0 : e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${
        this.walletImageUrl
      }></wui-visual-thumbnail>
    `;
  }
  createAnimation(e, n) {
    e.animate([{ transform: "translateX(0px)" }, { transform: n }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: 1 / 0,
    });
  }
};
zs.styles = Wh;
zs = Nh([S("w3m-siwx-sign-message-thumbnails")], zs);
var ha = function (t, e, n, o) {
  var r = arguments.length,
    i =
      r < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, n)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, o);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (r < 3 ? s(i) : r > 3 ? s(e, n, i) : s(e, n)) || i);
  return r > 3 && i && Object.defineProperty(e, n, i), i;
};
let co = class extends A {
  constructor() {
    var e;
    super(...arguments),
      (this.dappName = (e = B.state.metadata) == null ? void 0 : e.name),
      (this.isCancelling = !1),
      (this.isSigning = !1);
  }
  render() {
    return c`
      <wui-flex justifyContent="center" .padding=${["8", "0", "6", "0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[
        "0",
        "20",
        "5",
        "20",
      ]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName ?? "Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        "0",
        "10",
        "4",
        "10",
      ]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        "4",
        "5",
        "5",
        "5",
      ]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? "Cancelling..." : "Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
  }
  async onSign() {
    this.isSigning = !0;
    try {
      await xa.requestSignMessage();
    } catch (e) {
      if (e instanceof Error && e.message.includes("OTP is required")) {
        re.showError({
          message:
            "Something went wrong. We need to verify your account again.",
        }),
          L.replace("DataCapture");
        return;
      }
      throw e;
    } finally {
      this.isSigning = !1;
    }
  }
  async onCancel() {
    (this.isCancelling = !0),
      await xa.cancelSignMessage().finally(() => (this.isCancelling = !1));
  }
};
ha([f()], co.prototype, "isCancelling", void 0);
ha([f()], co.prototype, "isSigning", void 0);
co = ha([S("w3m-siwx-sign-message-view")], co);
const P3 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get AppKitAccountButton() {
        return qo;
      },
      get AppKitButton() {
        return Go;
      },
      get AppKitConnectButton() {
        return Yo;
      },
      get AppKitNetworkButton() {
        return Qo;
      },
      get W3mAccountButton() {
        return Cs;
      },
      get W3mAccountSettingsView() {
        return et;
      },
      get W3mAccountView() {
        return Jo;
      },
      get W3mAllWalletsView() {
        return Gi;
      },
      get W3mButton() {
        return xs;
      },
      get W3mChooseAccountNameView() {
        return oo;
      },
      get W3mConnectButton() {
        return $s;
      },
      get W3mConnectView() {
        return We;
      },
      get W3mConnectWalletsView() {
        return so;
      },
      get W3mConnectingExternalView() {
        return Os;
      },
      get W3mConnectingMultiChainView() {
        return no;
      },
      get W3mConnectingWcBasicView() {
        return io;
      },
      get W3mConnectingWcView() {
        return zt;
      },
      get W3mDownloadsView() {
        return Ns;
      },
      get W3mFooter() {
        return gi;
      },
      get W3mGetWalletView() {
        return Ls;
      },
      get W3mNetworkButton() {
        return Ss;
      },
      get W3mNetworkSwitchView() {
        return ki;
      },
      get W3mNetworksView() {
        return an;
      },
      get W3mProfileWalletsView() {
        return Ae;
      },
      get W3mRouter() {
        return bi;
      },
      get W3mSIWXSignMessageView() {
        return co;
      },
      get W3mSwitchActiveChainView() {
        return ao;
      },
      get W3mUnsupportedChainView() {
        return _i;
      },
      get W3mWalletCompatibleNetworksView() {
        return mr;
      },
      get W3mWhatIsANetworkView() {
        return js;
      },
      get W3mWhatIsAWalletView() {
        return Ms;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
gr({ tagName: "appkit-button", elementClass: Go, react: Rt });
gr({ tagName: "appkit-network-button", elementClass: Qo, react: Rt });
gr({ tagName: "appkit-connect-button", elementClass: Yo, react: Rt });
gr({ tagName: "appkit-account-button", elementClass: qo, react: Rt });
let mn;
function Lh(t) {
  return (
    mn ||
      ((mn = new Ul({
        ...t,
        sdkVersion: j.generateSdkVersion(t.adapters ?? [], "react", Fl),
      })),
      bd(mn)),
    mn
  );
}
function Dh() {
  const { caipNetwork: t, caipNetworkId: e, chainId: n } = wd();
  async function o(r) {
    await (mn == null ? void 0 : mn.switchNetwork(r));
  }
  return { caipNetwork: t, caipNetworkId: e, chainId: n, switchNetwork: o };
}
function Mh(t) {
  const {
      children: e,
      config: n,
      initialState: o,
      reconnectOnMount: r = !0,
    } = t,
    { onMount: i } = Hl(n, { initialState: o, reconnectOnMount: r });
  n._internal.ssr || i();
  const s = V.useRef(!0);
  return (
    V.useEffect(() => {
      if (s.current && n._internal.ssr)
        return (
          i(),
          () => {
            s.current = !1;
          }
        );
    }, []),
    e
  );
}
const pl = V.createContext(void 0);
function Bh(t) {
  const { children: e, config: n } = t,
    o = { value: n };
  return V.createElement(Mh, t, V.createElement(pl.Provider, o, e));
}
const jh = "2.16.9",
  zh = () => `wagmi@${jh}`;
class Vh extends Zl {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiError",
      });
  }
  get docsBaseUrl() {
    return "https://wagmi.sh/react";
  }
  get version() {
    return zh();
  }
}
class Uh extends Vh {
  constructor() {
    super("`useConfig` must be used within `WagmiProvider`.", {
      docsPath: "/api/WagmiProvider",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiProviderNotFoundError",
      });
  }
}
function Fh(t = {}) {
  const e = t.config ?? V.useContext(pl);
  if (!e) throw new Uh();
  return e;
}
var ms = { exports: {} },
  ws = {},
  gs = { exports: {} },
  bs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Hh() {
  if (uc) return bs;
  uc = 1;
  var t = Gs();
  function e(h, m) {
    return (h === m && (h !== 0 || 1 / h === 1 / m)) || (h !== h && m !== m);
  }
  var n = typeof Object.is == "function" ? Object.is : e,
    o = t.useState,
    r = t.useEffect,
    i = t.useLayoutEffect,
    s = t.useDebugValue;
  function a(h, m) {
    var g = m(),
      W = o({ inst: { value: g, getSnapshot: m } }),
      _ = W[0].inst,
      k = W[1];
    return (
      i(
        function () {
          (_.value = g), (_.getSnapshot = m), l(_) && k({ inst: _ });
        },
        [h, g, m]
      ),
      r(
        function () {
          return (
            l(_) && k({ inst: _ }),
            h(function () {
              l(_) && k({ inst: _ });
            })
          );
        },
        [h]
      ),
      s(g),
      g
    );
  }
  function l(h) {
    var m = h.getSnapshot;
    h = h.value;
    try {
      var g = m();
      return !n(h, g);
    } catch {
      return !0;
    }
  }
  function u(h, m) {
    return m();
  }
  var p =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : a;
  return (
    (bs.useSyncExternalStore =
      t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : p),
    bs
  );
}
var hc;
function Zh() {
  return hc || ((hc = 1), (gs.exports = Hh())), gs.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function Kh() {
  if (pc) return ws;
  pc = 1;
  var t = Gs(),
    e = Zh();
  function n(u, p) {
    return (u === p && (u !== 0 || 1 / u === 1 / p)) || (u !== u && p !== p);
  }
  var o = typeof Object.is == "function" ? Object.is : n,
    r = e.useSyncExternalStore,
    i = t.useRef,
    s = t.useEffect,
    a = t.useMemo,
    l = t.useDebugValue;
  return (
    (ws.useSyncExternalStoreWithSelector = function (u, p, h, m, g) {
      var W = i(null);
      if (W.current === null) {
        var _ = { hasValue: !1, value: null };
        W.current = _;
      } else _ = W.current;
      W = a(
        function () {
          function T(b) {
            if (!R) {
              if (((R = !0), (P = b), (b = m(b)), g !== void 0 && _.hasValue)) {
                var C = _.value;
                if (g(C, b)) return (x = C);
              }
              return (x = b);
            }
            if (((C = x), o(P, b))) return C;
            var y = m(b);
            return g !== void 0 && g(C, y) ? ((P = b), C) : ((P = b), (x = y));
          }
          var R = !1,
            P,
            x,
            Z = h === void 0 ? null : h;
          return [
            function () {
              return T(p());
            },
            Z === null
              ? void 0
              : function () {
                  return T(Z());
                },
          ];
        },
        [p, h, m, g]
      );
      var k = r(u, W[0], W[1]);
      return (
        s(
          function () {
            (_.hasValue = !0), (_.value = k);
          },
          [k]
        ),
        l(k),
        k
      );
    }),
    ws
  );
}
var fc;
function qh() {
  return fc || ((fc = 1), (ms.exports = Kh())), ms.exports;
}
var Gh = qh();
const vs = (t) => typeof t == "object" && !Array.isArray(t);
function Yh(t, e, n = e, o = Kl) {
  const r = V.useRef([]),
    i = Gh.useSyncExternalStoreWithSelector(
      t,
      e,
      n,
      (s) => s,
      (s, a) => {
        if (vs(s) && vs(a) && r.current.length) {
          for (const l of r.current) if (!o(s[l], a[l])) return !1;
          return !0;
        }
        return o(s, a);
      }
    );
  return V.useMemo(() => {
    if (vs(i)) {
      const s = { ...i };
      let a = {};
      for (const [l, u] of Object.entries(s))
        a = {
          ...a,
          [l]: {
            configurable: !1,
            enumerable: !0,
            get: () => (r.current.includes(l) || r.current.push(l), u),
          },
        };
      return Object.defineProperties(s, a), s;
    }
    return i;
  }, [i]);
}
function Qh(t = {}) {
  const e = Fh(t);
  return Yh(
    (n) => Gl(e, { onChange: n }),
    () => ql(e)
  );
}
var Or = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Xh = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: (t) => clearInterval(t),
  },
  Gt,
  qs,
  _c,
  Jh =
    ((_c = class {
      constructor() {
        X(this, Gt, Xh);
        X(this, qs, !1);
      }
      setTimeoutProvider(t) {
        q(this, Gt, t);
      }
      setTimeout(t, e) {
        return $(this, Gt).setTimeout(t, e);
      }
      clearTimeout(t) {
        $(this, Gt).clearTimeout(t);
      }
      setInterval(t, e) {
        return $(this, Gt).setInterval(t, e);
      }
      clearInterval(t) {
        $(this, Gt).clearInterval(t);
      }
    }),
    (Gt = new WeakMap()),
    (qs = new WeakMap()),
    _c),
  Vs = new Jh();
function e0(t) {
  setTimeout(t, 0);
}
var Wr = typeof window > "u" || "Deno" in globalThis;
function lt() {}
function t0(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function n0(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function i0(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Us(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function o0(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function mc(t, e) {
  const {
    type: n = "all",
    exact: o,
    fetchStatus: r,
    predicate: i,
    queryKey: s,
    stale: a,
  } = t;
  if (s) {
    if (o) {
      if (e.queryHash !== pa(s, e.options)) return !1;
    } else if (!uo(e.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = e.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && e.isStale() !== a) ||
    (r && r !== e.state.fetchStatus) ||
    (i && !i(e))
  );
}
function wc(t, e) {
  const { exact: n, status: o, predicate: r, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey) return !1;
    if (n) {
      if (lo(e.options.mutationKey) !== lo(i)) return !1;
    } else if (!uo(e.options.mutationKey, i)) return !1;
  }
  return !((o && e.state.status !== o) || (r && !r(e)));
}
function pa(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || lo)(t);
}
function lo(t) {
  return JSON.stringify(t, (e, n) =>
    Fs(n)
      ? Object.keys(n)
          .sort()
          .reduce((o, r) => ((o[r] = n[r]), o), {})
      : n
  );
}
function uo(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
    ? !1
    : t && e && typeof t == "object" && typeof e == "object"
    ? Object.keys(e).every((n) => uo(t[n], e[n]))
    : !1;
}
var r0 = Object.prototype.hasOwnProperty;
function fl(t, e) {
  if (t === e) return t;
  const n = gc(t) && gc(e);
  if (!n && !(Fs(t) && Fs(e))) return e;
  const r = (n ? t : Object.keys(t)).length,
    i = n ? e : Object.keys(e),
    s = i.length,
    a = n ? new Array(s) : {};
  let l = 0;
  for (let u = 0; u < s; u++) {
    const p = n ? u : i[u],
      h = t[p],
      m = e[p];
    if (h === m) {
      (a[p] = h), (n ? u < r : r0.call(t, p)) && l++;
      continue;
    }
    if (
      h === null ||
      m === null ||
      typeof h != "object" ||
      typeof m != "object"
    ) {
      a[p] = m;
      continue;
    }
    const g = fl(h, m);
    (a[p] = g), g === h && l++;
  }
  return r === s && l === r ? t : a;
}
function R3(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (t[n] !== e[n]) return !1;
  return !0;
}
function gc(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Fs(t) {
  if (!bc(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const n = e.prototype;
  return !(
    !bc(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function bc(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function s0(t) {
  return new Promise((e) => {
    Vs.setTimeout(e, t);
  });
}
function a0(t, e, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(t, e)
    : n.structuralSharing !== !1
    ? fl(t, e)
    : e;
}
function c0(t, e, n = 0) {
  const o = [...t, e];
  return n && o.length > n ? o.slice(1) : o;
}
function l0(t, e, n = 0) {
  const o = [e, ...t];
  return n && o.length > n ? o.slice(0, -1) : o;
}
var fa = Symbol();
function ml(t, e) {
  return !t.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === fa
    ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
    : t.queryFn;
}
function O3(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var wn,
  Yt,
  li,
  Ac,
  d0 =
    ((Ac = class extends Or {
      constructor() {
        super();
        X(this, wn);
        X(this, Yt);
        X(this, li);
        q(this, li, (e) => {
          if (!Wr && window.addEventListener) {
            const n = () => e();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        $(this, Yt) || this.setEventListener($(this, li));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = $(this, Yt)) == null || e.call(this), q(this, Yt, void 0));
      }
      setEventListener(e) {
        var n;
        q(this, li, e),
          (n = $(this, Yt)) == null || n.call(this),
          q(
            this,
            Yt,
            e((o) => {
              typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
            })
          );
      }
      setFocused(e) {
        $(this, wn) !== e && (q(this, wn, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((n) => {
          n(e);
        });
      }
      isFocused() {
        var e;
        return typeof $(this, wn) == "boolean"
          ? $(this, wn)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (wn = new WeakMap()),
    (Yt = new WeakMap()),
    (li = new WeakMap()),
    Ac),
  wl = new d0();
function u0() {
  let t, e;
  const n = new Promise((r, i) => {
    (t = r), (e = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function o(r) {
    Object.assign(n, r), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (r) => {
      o({ status: "fulfilled", value: r }), t(r);
    }),
    (n.reject = (r) => {
      o({ status: "rejected", reason: r }), e(r);
    }),
    n
  );
}
var h0 = e0;
function p0() {
  let t = [],
    e = 0,
    n = (a) => {
      a();
    },
    o = (a) => {
      a();
    },
    r = h0;
  const i = (a) => {
      e
        ? t.push(a)
        : r(() => {
            n(a);
          });
    },
    s = () => {
      const a = t;
      (t = []),
        a.length &&
          r(() => {
            o(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      e++;
      try {
        l = a();
      } finally {
        e--, e || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      o = a;
    },
    setScheduler: (a) => {
      r = a;
    },
  };
}
var Pe = p0(),
  di,
  Qt,
  ui,
  Ic,
  f0 =
    ((Ic = class extends Or {
      constructor() {
        super();
        X(this, di, !0);
        X(this, Qt);
        X(this, ui);
        q(this, ui, (e) => {
          if (!Wr && window.addEventListener) {
            const n = () => e(!0),
              o = () => e(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", o, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", o);
              }
            );
          }
        });
      }
      onSubscribe() {
        $(this, Qt) || this.setEventListener($(this, ui));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = $(this, Qt)) == null || e.call(this), q(this, Qt, void 0));
      }
      setEventListener(e) {
        var n;
        q(this, ui, e),
          (n = $(this, Qt)) == null || n.call(this),
          q(this, Qt, e(this.setOnline.bind(this)));
      }
      setOnline(e) {
        $(this, di) !== e &&
          (q(this, di, e),
          this.listeners.forEach((o) => {
            o(e);
          }));
      }
      isOnline() {
        return $(this, di);
      }
    }),
    (di = new WeakMap()),
    (Qt = new WeakMap()),
    (ui = new WeakMap()),
    Ic),
  wr = new f0();
function m0(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function gl(t) {
  return (t ?? "online") === "online" ? wr.isOnline() : !0;
}
var Hs = class extends Error {
  constructor(t) {
    super("CancelledError"),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
};
function bl(t) {
  let e = !1,
    n = 0,
    o;
  const r = u0(),
    i = () => r.status !== "pending",
    s = (_) => {
      var k;
      if (!i()) {
        const T = new Hs(_);
        m(T), (k = t.onCancel) == null || k.call(t, T);
      }
    },
    a = () => {
      e = !0;
    },
    l = () => {
      e = !1;
    },
    u = () =>
      wl.isFocused() &&
      (t.networkMode === "always" || wr.isOnline()) &&
      t.canRun(),
    p = () => gl(t.networkMode) && t.canRun(),
    h = (_) => {
      i() || (o == null || o(), r.resolve(_));
    },
    m = (_) => {
      i() || (o == null || o(), r.reject(_));
    },
    g = () =>
      new Promise((_) => {
        var k;
        (o = (T) => {
          (i() || u()) && _(T);
        }),
          (k = t.onPause) == null || k.call(t);
      }).then(() => {
        var _;
        (o = void 0), i() || (_ = t.onContinue) == null || _.call(t);
      }),
    W = () => {
      if (i()) return;
      let _;
      const k = n === 0 ? t.initialPromise : void 0;
      try {
        _ = k ?? t.fn();
      } catch (T) {
        _ = Promise.reject(T);
      }
      Promise.resolve(_)
        .then(h)
        .catch((T) => {
          var b;
          if (i()) return;
          const R = t.retry ?? (Wr ? 0 : 3),
            P = t.retryDelay ?? m0,
            x = typeof P == "function" ? P(n, T) : P,
            Z =
              R === !0 ||
              (typeof R == "number" && n < R) ||
              (typeof R == "function" && R(n, T));
          if (e || !Z) {
            m(T);
            return;
          }
          n++,
            (b = t.onFail) == null || b.call(t, n, T),
            s0(x)
              .then(() => (u() ? void 0 : g()))
              .then(() => {
                e ? m(T) : W();
              });
        });
    };
  return {
    promise: r,
    status: () => r.status,
    cancel: s,
    continue: () => (o == null || o(), r),
    cancelRetry: a,
    continueRetry: l,
    canStart: p,
    start: () => (p() ? W() : g().then(W), r),
  };
}
var gn,
  Tc,
  vl =
    ((Tc = class {
      constructor() {
        X(this, gn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          n0(this.gcTime) &&
            q(
              this,
              gn,
              Vs.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (Wr ? 1 / 0 : 300 * 1e3));
      }
      clearGcTimeout() {
        $(this, gn) && (Vs.clearTimeout($(this, gn)), q(this, gn, void 0));
      }
    }),
    (gn = new WeakMap()),
    Tc),
  bn,
  hi,
  Ye,
  vn,
  me,
  po,
  yn,
  dt,
  Tt,
  Pc,
  w0 =
    ((Pc = class extends vl {
      constructor(e) {
        super();
        X(this, dt);
        X(this, bn);
        X(this, hi);
        X(this, Ye);
        X(this, vn);
        X(this, me);
        X(this, po);
        X(this, yn);
        q(this, yn, !1),
          q(this, po, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          q(this, vn, e.client),
          q(this, Ye, $(this, vn).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          q(this, bn, vc(this.options)),
          (this.state = e.state ?? $(this, bn)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = $(this, me)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        if (
          ((this.options = { ...$(this, po), ...e }),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const n = vc(this.options);
          n.data !== void 0 &&
            (this.setData(n.data, { updatedAt: n.dataUpdatedAt, manual: !0 }),
            q(this, bn, n));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          $(this, Ye).remove(this);
      }
      setData(e, n) {
        const o = a0(this.state.data, e, this.options);
        return (
          Se(this, dt, Tt).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          o
        );
      }
      setState(e, n) {
        Se(this, dt, Tt).call(this, {
          type: "setState",
          state: e,
          setStateOptions: n,
        });
      }
      cancel(e) {
        var o, r;
        const n = (o = $(this, me)) == null ? void 0 : o.promise;
        return (
          (r = $(this, me)) == null || r.cancel(e),
          n ? n.then(lt).catch(lt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState($(this, bn));
      }
      isActive() {
        return this.observers.some((e) => o0(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === fa ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (e) => Us(e.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return this.state.data === void 0
          ? !0
          : e === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !i0(this.state.dataUpdatedAt, e);
      }
      onFocus() {
        var n;
        const e = this.observers.find((o) => o.shouldFetchOnWindowFocus());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (n = $(this, me)) == null || n.continue();
      }
      onOnline() {
        var n;
        const e = this.observers.find((o) => o.shouldFetchOnReconnect());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (n = $(this, me)) == null || n.continue();
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          $(this, Ye).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((n) => n !== e)),
          this.observers.length ||
            ($(this, me) &&
              ($(this, yn)
                ? $(this, me).cancel({ revert: !0 })
                : $(this, me).cancelRetry()),
            this.scheduleGc()),
          $(this, Ye).notify({
            type: "observerRemoved",
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Se(this, dt, Tt).call(this, { type: "invalidate" });
      }
      async fetch(e, n) {
        var l, u, p, h, m, g, W, _, k, T, R, P;
        if (
          this.state.fetchStatus !== "idle" &&
          ((l = $(this, me)) == null ? void 0 : l.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if ($(this, me))
            return $(this, me).continueRetry(), $(this, me).promise;
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const x = this.observers.find((Z) => Z.options.queryFn);
          x && this.setOptions(x.options);
        }
        const o = new AbortController(),
          r = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (q(this, yn, !0), o.signal),
            });
          },
          i = () => {
            const x = ml(this.options, n),
              b = (() => {
                const C = {
                  client: $(this, vn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return r(C), C;
              })();
            return (
              q(this, yn, !1),
              this.options.persister ? this.options.persister(x, b, this) : x(b)
            );
          },
          a = (() => {
            const x = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: $(this, vn),
              state: this.state,
              fetchFn: i,
            };
            return r(x), x;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          q(this, hi, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((p = a.fetchOptions) == null ? void 0 : p.meta)) &&
            Se(this, dt, Tt).call(this, {
              type: "fetch",
              meta: (h = a.fetchOptions) == null ? void 0 : h.meta,
            }),
          q(
            this,
            me,
            bl({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              onCancel: (x) => {
                x instanceof Hs &&
                  x.revert &&
                  this.setState({ ...$(this, hi), fetchStatus: "idle" }),
                  o.abort();
              },
              onFail: (x, Z) => {
                Se(this, dt, Tt).call(this, {
                  type: "failed",
                  failureCount: x,
                  error: Z,
                });
              },
              onPause: () => {
                Se(this, dt, Tt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Se(this, dt, Tt).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          );
        try {
          const x = await $(this, me).start();
          if (x === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(x),
            (g = (m = $(this, Ye).config).onSuccess) == null ||
              g.call(m, x, this),
            (_ = (W = $(this, Ye).config).onSettled) == null ||
              _.call(W, x, this.state.error, this),
            x
          );
        } catch (x) {
          if (x instanceof Hs) {
            if (x.silent) return $(this, me).promise;
            if (x.revert) {
              if (this.state.data === void 0) throw x;
              return this.state.data;
            }
          }
          throw (
            (Se(this, dt, Tt).call(this, { type: "error", error: x }),
            (T = (k = $(this, Ye).config).onError) == null ||
              T.call(k, x, this),
            (P = (R = $(this, Ye).config).onSettled) == null ||
              P.call(R, this.state.data, x, this),
            x)
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (bn = new WeakMap()),
    (hi = new WeakMap()),
    (Ye = new WeakMap()),
    (vn = new WeakMap()),
    (me = new WeakMap()),
    (po = new WeakMap()),
    (yn = new WeakMap()),
    (dt = new WeakSet()),
    (Tt = function (e) {
      const n = (o) => {
        switch (e.type) {
          case "failed":
            return {
              ...o,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...o, fetchStatus: "paused" };
          case "continue":
            return { ...o, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...o,
              ...g0(o.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            const r = {
              ...o,
              data: e.data,
              dataUpdateCount: o.dataUpdateCount + 1,
              dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return q(this, hi, e.manual ? r : void 0), r;
          case "error":
            const i = e.error;
            return {
              ...o,
              error: i,
              errorUpdateCount: o.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: o.fetchFailureCount + 1,
              fetchFailureReason: i,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...o, isInvalidated: !0 };
          case "setState":
            return { ...o, ...e.state };
        }
      };
      (this.state = n(this.state)),
        Pe.batch(() => {
          this.observers.forEach((o) => {
            o.onQueryUpdate();
          }),
            $(this, Ye).notify({ query: this, type: "updated", action: e });
        });
    }),
    Pc);
function g0(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: gl(e.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function vc(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    n = e !== void 0,
    o = n
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? o ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function yc(t) {
  return {
    onFetch: (e, n) => {
      var p, h, m, g, W;
      const o = e.options,
        r =
          (m =
            (h = (p = e.fetchOptions) == null ? void 0 : p.meta) == null
              ? void 0
              : h.fetchMore) == null
            ? void 0
            : m.direction,
        i = ((g = e.state.data) == null ? void 0 : g.pages) || [],
        s = ((W = e.state.data) == null ? void 0 : W.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let _ = !1;
        const k = (P) => {
            Object.defineProperty(P, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (_ = !0)
                  : e.signal.addEventListener("abort", () => {
                      _ = !0;
                    }),
                e.signal
              ),
            });
          },
          T = ml(e.options, e.fetchOptions),
          R = async (P, x, Z) => {
            if (_) return Promise.reject();
            if (x == null && P.pages.length) return Promise.resolve(P);
            const C = (() => {
                const O = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: x,
                  direction: Z ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return k(O), O;
              })(),
              y = await T(C),
              { maxPages: w } = e.options,
              v = Z ? l0 : c0;
            return {
              pages: v(P.pages, y, w),
              pageParams: v(P.pageParams, x, w),
            };
          };
        if (r && i.length) {
          const P = r === "backward",
            x = P ? b0 : Cc,
            Z = { pages: i, pageParams: s },
            b = x(o, Z);
          a = await R(Z, b, P);
        } else {
          const P = t ?? i.length;
          do {
            const x = l === 0 ? s[0] ?? o.initialPageParam : Cc(o, a);
            if (l > 0 && x == null) break;
            (a = await R(a, x)), l++;
          } while (l < P);
        }
        return a;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var _, k;
            return (k = (_ = e.options).persister) == null
              ? void 0
              : k.call(
                  _,
                  u,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  n
                );
          })
        : (e.fetchFn = u);
    },
  };
}
function Cc(t, { pages: e, pageParams: n }) {
  const o = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[o], e, n[o], n) : void 0;
}
function b0(t, { pages: e, pageParams: n }) {
  var o;
  return e.length > 0
    ? (o = t.getPreviousPageParam) == null
      ? void 0
      : o.call(t, e[0], e, n[0], n)
    : void 0;
}
var fo,
  bt,
  Te,
  Cn,
  vt,
  Zt,
  Rc,
  v0 =
    ((Rc = class extends vl {
      constructor(e) {
        super();
        X(this, vt);
        X(this, fo);
        X(this, bt);
        X(this, Te);
        X(this, Cn);
        q(this, fo, e.client),
          (this.mutationId = e.mutationId),
          q(this, Te, e.mutationCache),
          q(this, bt, []),
          (this.state = e.state || y0()),
          this.setOptions(e.options),
          this.scheduleGc();
      }
      setOptions(e) {
        (this.options = e), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        $(this, bt).includes(e) ||
          ($(this, bt).push(e),
          this.clearGcTimeout(),
          $(this, Te).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        q(
          this,
          bt,
          $(this, bt).filter((n) => n !== e)
        ),
          this.scheduleGc(),
          $(this, Te).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          });
      }
      optionalRemove() {
        $(this, bt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : $(this, Te).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = $(this, Cn)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var s, a, l, u, p, h, m, g, W, _, k, T, R, P, x, Z, b, C, y, w;
        const n = () => {
            Se(this, vt, Zt).call(this, { type: "continue" });
          },
          o = {
            client: $(this, fo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        q(
          this,
          Cn,
          bl({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e, o)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (v, O) => {
              Se(this, vt, Zt).call(this, {
                type: "failed",
                failureCount: v,
                error: O,
              });
            },
            onPause: () => {
              Se(this, vt, Zt).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => $(this, Te).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          i = !$(this, Cn).canStart();
        try {
          if (r) n();
          else {
            Se(this, vt, Zt).call(this, {
              type: "pending",
              variables: e,
              isPaused: i,
            }),
              await ((a = (s = $(this, Te).config).onMutate) == null
                ? void 0
                : a.call(s, e, this, o));
            const O = await ((u = (l = this.options).onMutate) == null
              ? void 0
              : u.call(l, e, o));
            O !== this.state.context &&
              Se(this, vt, Zt).call(this, {
                type: "pending",
                context: O,
                variables: e,
                isPaused: i,
              });
          }
          const v = await $(this, Cn).start();
          return (
            await ((h = (p = $(this, Te).config).onSuccess) == null
              ? void 0
              : h.call(p, v, e, this.state.context, this, o)),
            await ((g = (m = this.options).onSuccess) == null
              ? void 0
              : g.call(m, v, e, this.state.context, o)),
            await ((_ = (W = $(this, Te).config).onSettled) == null
              ? void 0
              : _.call(
                  W,
                  v,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  o
                )),
            await ((T = (k = this.options).onSettled) == null
              ? void 0
              : T.call(k, v, null, e, this.state.context, o)),
            Se(this, vt, Zt).call(this, { type: "success", data: v }),
            v
          );
        } catch (v) {
          try {
            throw (
              (await ((P = (R = $(this, Te).config).onError) == null
                ? void 0
                : P.call(R, v, e, this.state.context, this, o)),
              await ((Z = (x = this.options).onError) == null
                ? void 0
                : Z.call(x, v, e, this.state.context, o)),
              await ((C = (b = $(this, Te).config).onSettled) == null
                ? void 0
                : C.call(
                    b,
                    void 0,
                    v,
                    this.state.variables,
                    this.state.context,
                    this,
                    o
                  )),
              await ((w = (y = this.options).onSettled) == null
                ? void 0
                : w.call(y, void 0, v, e, this.state.context, o)),
              v)
            );
          } finally {
            Se(this, vt, Zt).call(this, { type: "error", error: v });
          }
        } finally {
          $(this, Te).runNext(this);
        }
      }
    }),
    (fo = new WeakMap()),
    (bt = new WeakMap()),
    (Te = new WeakMap()),
    (Cn = new WeakMap()),
    (vt = new WeakSet()),
    (Zt = function (e) {
      const n = (o) => {
        switch (e.type) {
          case "failed":
            return {
              ...o,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...o, isPaused: !0 };
          case "continue":
            return { ...o, isPaused: !1 };
          case "pending":
            return {
              ...o,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: "pending",
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...o,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...o,
              data: void 0,
              error: e.error,
              failureCount: o.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Pe.batch(() => {
          $(this, bt).forEach((o) => {
            o.onMutationUpdate(e);
          }),
            $(this, Te).notify({ mutation: this, type: "updated", action: e });
        });
    }),
    Rc);
function y0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Pt,
  ut,
  mo,
  Oc,
  C0 =
    ((Oc = class extends Or {
      constructor(e = {}) {
        super();
        X(this, Pt);
        X(this, ut);
        X(this, mo);
        (this.config = e),
          q(this, Pt, new Set()),
          q(this, ut, new Map()),
          q(this, mo, 0);
      }
      build(e, n, o) {
        const r = new v0({
          client: e,
          mutationCache: this,
          mutationId: ++Do(this, mo)._,
          options: e.defaultMutationOptions(n),
          state: o,
        });
        return this.add(r), r;
      }
      add(e) {
        $(this, Pt).add(e);
        const n = Uo(e);
        if (typeof n == "string") {
          const o = $(this, ut).get(n);
          o ? o.push(e) : $(this, ut).set(n, [e]);
        }
        this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        if ($(this, Pt).delete(e)) {
          const n = Uo(e);
          if (typeof n == "string") {
            const o = $(this, ut).get(n);
            if (o)
              if (o.length > 1) {
                const r = o.indexOf(e);
                r !== -1 && o.splice(r, 1);
              } else o[0] === e && $(this, ut).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        const n = Uo(e);
        if (typeof n == "string") {
          const o = $(this, ut).get(n),
            r =
              o == null ? void 0 : o.find((i) => i.state.status === "pending");
          return !r || r === e;
        } else return !0;
      }
      runNext(e) {
        var o;
        const n = Uo(e);
        if (typeof n == "string") {
          const r =
            (o = $(this, ut).get(n)) == null
              ? void 0
              : o.find((i) => i !== e && i.state.isPaused);
          return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Pe.batch(() => {
          $(this, Pt).forEach((e) => {
            this.notify({ type: "removed", mutation: e });
          }),
            $(this, Pt).clear(),
            $(this, ut).clear();
        });
      }
      getAll() {
        return Array.from($(this, Pt));
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((o) => wc(n, o));
      }
      findAll(e = {}) {
        return this.getAll().filter((n) => wc(e, n));
      }
      notify(e) {
        Pe.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((n) => n.state.isPaused);
        return Pe.batch(() =>
          Promise.all(e.map((n) => n.continue().catch(lt)))
        );
      }
    }),
    (Pt = new WeakMap()),
    (ut = new WeakMap()),
    (mo = new WeakMap()),
    Oc);
function Uo(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
var yt,
  Wc,
  x0 =
    ((Wc = class extends Or {
      constructor(e = {}) {
        super();
        X(this, yt);
        (this.config = e), q(this, yt, new Map());
      }
      build(e, n, o) {
        const r = n.queryKey,
          i = n.queryHash ?? pa(r, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new w0({
              client: e,
              queryKey: r,
              queryHash: i,
              options: e.defaultQueryOptions(n),
              state: o,
              defaultOptions: e.getQueryDefaults(r),
            })),
            this.add(s)),
          s
        );
      }
      add(e) {
        $(this, yt).has(e.queryHash) ||
          ($(this, yt).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const n = $(this, yt).get(e.queryHash);
        n &&
          (e.destroy(),
          n === e && $(this, yt).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        Pe.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return $(this, yt).get(e);
      }
      getAll() {
        return [...$(this, yt).values()];
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((o) => mc(n, o));
      }
      findAll(e = {}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter((o) => mc(e, o)) : n;
      }
      notify(e) {
        Pe.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      onFocus() {
        Pe.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        Pe.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (yt = new WeakMap()),
    Wc),
  he,
  Xt,
  Jt,
  pi,
  fi,
  en,
  mi,
  wi,
  Nc,
  $0 =
    ((Nc = class {
      constructor(t = {}) {
        X(this, he);
        X(this, Xt);
        X(this, Jt);
        X(this, pi);
        X(this, fi);
        X(this, en);
        X(this, mi);
        X(this, wi);
        q(this, he, t.queryCache || new x0()),
          q(this, Xt, t.mutationCache || new C0()),
          q(this, Jt, t.defaultOptions || {}),
          q(this, pi, new Map()),
          q(this, fi, new Map()),
          q(this, en, 0);
      }
      mount() {
        Do(this, en)._++,
          $(this, en) === 1 &&
            (q(
              this,
              mi,
              wl.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), $(this, he).onFocus());
              })
            ),
            q(
              this,
              wi,
              wr.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), $(this, he).onOnline());
              })
            ));
      }
      unmount() {
        var t, e;
        Do(this, en)._--,
          $(this, en) === 0 &&
            ((t = $(this, mi)) == null || t.call(this),
            q(this, mi, void 0),
            (e = $(this, wi)) == null || e.call(this),
            q(this, wi, void 0));
      }
      isFetching(t) {
        return $(this, he).findAll({ ...t, fetchStatus: "fetching" }).length;
      }
      isMutating(t) {
        return $(this, Xt).findAll({ ...t, status: "pending" }).length;
      }
      getQueryData(t) {
        var n;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (n = $(this, he).get(e.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(t) {
        const e = this.defaultQueryOptions(t),
          n = $(this, he).build(this, e),
          o = n.state.data;
        return o === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale &&
              n.isStaleByTime(Us(e.staleTime, n)) &&
              this.prefetchQuery(e),
            Promise.resolve(o));
      }
      getQueriesData(t) {
        return $(this, he)
          .findAll(t)
          .map(({ queryKey: e, state: n }) => {
            const o = n.data;
            return [e, o];
          });
      }
      setQueryData(t, e, n) {
        const o = this.defaultQueryOptions({ queryKey: t }),
          r = $(this, he).get(o.queryHash),
          i = r == null ? void 0 : r.state.data,
          s = t0(e, i);
        if (s !== void 0)
          return $(this, he)
            .build(this, o)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(t, e, n) {
        return Pe.batch(() =>
          $(this, he)
            .findAll(t)
            .map(({ queryKey: o }) => [o, this.setQueryData(o, e, n)])
        );
      }
      getQueryState(t) {
        var n;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (n = $(this, he).get(e.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(t) {
        const e = $(this, he);
        Pe.batch(() => {
          e.findAll(t).forEach((n) => {
            e.remove(n);
          });
        });
      }
      resetQueries(t, e) {
        const n = $(this, he);
        return Pe.batch(
          () => (
            n.findAll(t).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries({ type: "active", ...t }, e)
          )
        );
      }
      cancelQueries(t, e = {}) {
        const n = { revert: !0, ...e },
          o = Pe.batch(() =>
            $(this, he)
              .findAll(t)
              .map((r) => r.cancel(n))
          );
        return Promise.all(o).then(lt).catch(lt);
      }
      invalidateQueries(t, e = {}) {
        return Pe.batch(
          () => (
            $(this, he)
              .findAll(t)
              .forEach((n) => {
                n.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...t,
                    type:
                      (t == null ? void 0 : t.refetchType) ??
                      (t == null ? void 0 : t.type) ??
                      "active",
                  },
                  e
                )
          )
        );
      }
      refetchQueries(t, e = {}) {
        const n = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          o = Pe.batch(() =>
            $(this, he)
              .findAll(t)
              .filter((r) => !r.isDisabled() && !r.isStatic())
              .map((r) => {
                let i = r.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(lt)),
                  r.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(o).then(lt);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = $(this, he).build(this, e);
        return n.isStaleByTime(Us(e.staleTime, n))
          ? n.fetch(e)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(lt).catch(lt);
      }
      fetchInfiniteQuery(t) {
        return (t.behavior = yc(t.pages)), this.fetchQuery(t);
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(lt).catch(lt);
      }
      ensureInfiniteQueryData(t) {
        return (t.behavior = yc(t.pages)), this.ensureQueryData(t);
      }
      resumePausedMutations() {
        return wr.isOnline()
          ? $(this, Xt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return $(this, he);
      }
      getMutationCache() {
        return $(this, Xt);
      }
      getDefaultOptions() {
        return $(this, Jt);
      }
      setDefaultOptions(t) {
        q(this, Jt, t);
      }
      setQueryDefaults(t, e) {
        $(this, pi).set(lo(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...$(this, pi).values()],
          n = {};
        return (
          e.forEach((o) => {
            uo(t, o.queryKey) && Object.assign(n, o.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(t, e) {
        $(this, fi).set(lo(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...$(this, fi).values()],
          n = {};
        return (
          e.forEach((o) => {
            uo(t, o.mutationKey) && Object.assign(n, o.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
          ...$(this, Jt).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = pa(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
          e.queryFn === fa && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...$(this, Jt).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        $(this, he).clear(), $(this, Xt).clear();
      }
    }),
    (he = new WeakMap()),
    (Xt = new WeakMap()),
    (Jt = new WeakMap()),
    (pi = new WeakMap()),
    (fi = new WeakMap()),
    (en = new WeakMap()),
    (mi = new WeakMap()),
    (wi = new WeakMap()),
    Nc),
  yl = V.createContext(void 0),
  W3 = (t) => {
    const e = V.useContext(yl);
    if (!e)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  S0 = ({ client: t, children: e }) => (
    V.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    ne.jsx(yl.Provider, { value: t, children: e })
  );
const E0 = async () => {
    const [
      { HuobiWalletAdapter: t },
      { PhantomWalletAdapter: e },
      { SolflareWalletAdapter: n },
      { TrustWalletAdapter: o },
      { LedgerWalletAdapter: r },
    ] = await Promise.all([
      Re(
        () => import("./wallet-libs-C4iBya-7.js").then((i) => i.d1),
        __vite__mapDeps([0, 1])
      ).then((i) => ({ HuobiWalletAdapter: i.HuobiWalletAdapter })),
      Re(
        () => import("./wallet-libs-C4iBya-7.js").then((i) => i.d1),
        __vite__mapDeps([0, 1])
      ).then((i) => ({ PhantomWalletAdapter: i.PhantomWalletAdapter })),
      Re(
        () => import("./wallet-libs-C4iBya-7.js").then((i) => i.d1),
        __vite__mapDeps([0, 1])
      ).then((i) => ({ SolflareWalletAdapter: i.SolflareWalletAdapter })),
      Re(
        () => import("./wallet-libs-C4iBya-7.js").then((i) => i.d1),
        __vite__mapDeps([0, 1])
      ).then((i) => ({ TrustWalletAdapter: i.TrustWalletAdapter })),
      Re(
        () => import("./wallet-libs-C4iBya-7.js").then((i) => i.d1),
        __vite__mapDeps([0, 1])
      ).then((i) => ({ LedgerWalletAdapter: i.LedgerWalletAdapter })),
    ]);
    return {
      HuobiWalletAdapter: t,
      PhantomWalletAdapter: e,
      SolflareWalletAdapter: n,
      TrustWalletAdapter: o,
      LedgerWalletAdapter: r,
    };
  },
  k0 = new $0({
    defaultOptions: {
      queries: {
        staleTime: 1e3 * 60 * 5,
        cacheTime: 1e3 * 60 * 10,
        refetchOnWindowFocus: !1,
        retry: 1,
      },
    },
  }),
  Zs = "7406013aa2d0fcb59220687ce55a9c21",
  _0 =
    "https://still-cosmological-sanctuary.ethereum-sepolia.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
  A0 =
    "https://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
  I0 =
    "https://still-cosmological-sanctuary.bsc.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678";
let Ot, Cl, xl;
(Cl =
  "https://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678"),
  (xl =
    "wss://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678");
const T0 = Yl({
    id: 123456789,
    caipNetworkId: "eip155:123456789",
    chainNamespace: "eip155",
    name: "Credit Card",
    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
    rpcUrls: { default: { http: [Cl], webSocket: [xl] } },
    blockExplorers: {
      default: { name: "Explorer", url: "BLOCK_EXPLORER_URL" },
    },
  }),
  Nr = [Ys, Mc, Bc, T0],
  $l = [Ql, Xl];
Ot = [...Nr, ...$l];
console.log(
  "[reownSetup] evmNetworks:",
  Nr.map((t) => t.name)
);
console.log(
  "[reownSetup] solNetworks:",
  $l.map((t) => t.name)
);
console.log(
  "🔧 Network order configured:",
  Ot.map((t) => t.name)
);
const ma = {
    11155111: Dr({ chain: Mc, transport: Mr(_0, { batch: !0 }) }),
    1: Dr({ chain: Ys, transport: Mr(A0, { batch: !0 }) }),
    56: Dr({ chain: Bc, transport: Mr(I0, { batch: !0 }) }),
  },
  P0 = { ...ma };
typeof window < "u" &&
  (console.log(
    "🚫 Phantom EVM blocking enabled - will destroy any wagmi Phantom EVM connections"
  ),
  (window.__blockPhantomEVM = !0));
const Ct = new Jl({
  networks: Nr,
  projectId: Zs,
  ssr: !0,
  autoConnect: !0,
  publicClients: ma,
  pollingInterval: 3e4,
});
console.log(
  "🔍 [DEBUG] Wagmi adapter configured with chains:",
  Ct.wagmiConfig.chains.map((t) => {
    var e;
    return {
      id: t.id,
      name: t.name,
      network: t.network,
      nativeCurrency: (e = t.nativeCurrency) == null ? void 0 : e.symbol,
    };
  })
);
let ai = !1,
  ho = 0,
  Wt = !1,
  ci = 0;
const xc = () => {
    try {
      return localStorage.getItem("ds_phantom_evm_allowed") === "true";
    } catch {
      return !1;
    }
  },
  R0 = () => {
    try {
      localStorage.setItem("ds_phantom_evm_allowed", "true"),
        console.log("✅ Phantom EVM marked as allowed (persisted)");
    } catch (t) {
      console.error("❌ Error saving Phantom EVM permission:", t);
    }
  },
  O0 = () => {
    try {
      localStorage.removeItem("ds_phantom_evm_allowed"),
        console.log("✅ Phantom EVM permission removed");
    } catch (t) {
      console.error("❌ Error removing Phantom EVM permission:", t);
    }
  },
  oi = () => {
    (ai = !1),
      (ho = 0),
      console.log("✅ Cleared manual disconnect flag (external request)");
  },
  W0 = () => {
    (Wt = !0),
      (ci = Date.now()),
      console.log("✅ User-initiated connection started (Phantom EVM allowed)"),
      setTimeout(() => {
        Wt &&
          ((Wt = !1),
          (ci = 0),
          console.log(
            "⏰ User-initiated connection flag auto-cleared (30s timeout)"
          ));
      }, 3e4);
  },
  N0 = () => {
    (Wt = !1),
      (ci = 0),
      console.log("✅ Cleared user-initiated connection flag");
  };
let $c = !1,
  Fo = null;
typeof window < "u" &&
  !$c &&
  (($c = !0),
  Re(async () => {
    const {
      watchAccount: t,
      disconnect: e,
      getConnections: n,
    } = await import("./wallet-libs-C4iBya-7.js").then((o) => o.d0);
    return { watchAccount: t, disconnect: e, getConnections: n };
  }, __vite__mapDeps([0, 1])).then(
    ({ watchAccount: t, disconnect: e, getConnections: n }) => {
      t(Ct.wagmiConfig, {
        onChange: async (o) => {
          const r = Date.now() - ho,
            i = r < 2e3;
          if (ai && o.isConnected && i) {
            console.log(
              "⚠️ Prevented auto-reconnect during manual disconnect:",
              o.address,
              `(${r}ms after disconnect)`
            );
            try {
              await e(Ct.wagmiConfig);
            } catch (s) {
              console.error("❌ Error force-disconnecting:", s);
            }
            return;
          }
          if (
            (ai &&
              !i &&
              (console.log(
                "✅ Auto-clearing manual disconnect flag (2s timeout)"
              ),
              (ai = !1),
              (ho = 0)),
            o.isConnected && o.connector)
          ) {
            const s = o.connector.id,
              a = o.connector.name;
            if (
              (s == null ? void 0 : s.includes("phantom")) ||
              (a == null ? void 0 : a.includes("Phantom"))
            ) {
              const p = Date.now() - ci < 3e4,
                h = xc();
              if ((Wt && p) || h)
                console.log("✅ Allowing Phantom EVM connection", {
                  userInitiated: Wt && p,
                  previouslyAllowed: h,
                }),
                  h || R0(),
                  Wt && ((Wt = !1), (ci = 0));
              else {
                console.log(
                  "🚫 Detected unexpected Phantom EVM connection - FORCE DISCONNECTING"
                );
                try {
                  await e(Ct.wagmiConfig),
                    console.log(
                      "✅ Force-disconnected unexpected Phantom EVM connection"
                    );
                } catch (m) {
                  console.error("❌ Error force-disconnecting Phantom EVM:", m);
                }
              }
            }
          }
        },
      }),
        (Fo = setInterval(async () => {
          var o, r, i, s;
          try {
            const l = Date.now() - ci < 3e4;
            if ((Wt && l) || xc()) return;
            const u = n(Ct.wagmiConfig);
            for (const p of u)
              (((r = (o = p.connector) == null ? void 0 : o.id) == null
                ? void 0
                : r.includes("phantom")) ||
                ((s = (i = p.connector) == null ? void 0 : i.name) == null
                  ? void 0
                  : s.includes("Phantom"))) &&
                (console.log(
                  "🚫 [WAGMI MONITOR] Found unexpected Phantom EVM connection - destroying"
                ),
                await e(Ct.wagmiConfig, { connector: p.connector }),
                console.log("✅ Destroyed unexpected Phantom EVM connection"));
          } catch {}
        }, 2e3)),
        typeof window < "u" &&
          window.addEventListener("beforeunload", () => {
            Fo && (clearInterval(Fo), (Fo = null));
          });
    }
  ));
console.log(
  "[wagmi] adapter initialized with networks:",
  Nr.map((t) => t.name)
);
let Kt;
const Sl = async () => {
    var t;
    if (!Kt) {
      console.log("🔧 Initializing Solana adapter...");
      try {
        const e = await E0();
        console.log("🔍 Loaded wallet adapters:", Object.keys(e)),
          (Kt = new ed({
            wallets: [
              new e.PhantomWalletAdapter(),
              new e.SolflareWalletAdapter(),
              new e.TrustWalletAdapter(),
              new e.HuobiWalletAdapter(),
              new e.LedgerWalletAdapter(),
            ],
            autoConnect: !1,
          })),
          console.log("✅ Solana adapter initialized with wallets:", [
            "PhantomWalletAdapter",
            "SolflareWalletAdapter",
            "TrustWalletAdapter",
            "HuobiWalletAdapter",
            "LedgerWalletAdapter",
          ]),
          console.log("🧪 Testing Solana adapter:", {
            adapter: !!Kt,
            wallets:
              ((t = Kt == null ? void 0 : Kt.wallets) == null
                ? void 0
                : t.length) || 0,
          });
      } catch (e) {
        throw (console.error("❌ Error initializing Solana adapter:", e), e);
      }
    }
    return Kt;
  },
  L0 = async () => {
    console.log("🔌 Starting full disconnect of all wallets..."),
      (ai = !0),
      (ho = Date.now()),
      O0();
    try {
      const t = wa || (await ga);
      if (t && typeof t.disconnect == "function")
        try {
          console.log("🔌 Disconnecting AppKit..."),
            await t.disconnect(),
            console.log("✅ AppKit disconnected");
        } catch (e) {
          console.error("❌ Error disconnecting AppKit:", e);
        }
      if (t && typeof t.resetNetwork == "function")
        try {
          await t.resetNetwork(),
            console.log("✅ AppKit network reset (Solana chain unstuck)");
        } catch (e) {
          console.warn("⚠️ AppKit resetNetwork skipped:", e.message);
        }
      if (t && typeof t.resetAccount == "function")
        try {
          await t.resetAccount(), console.log("✅ AppKit account reset");
        } catch (e) {
          console.warn(
            "⚠️ AppKit resetAccount skipped (expected if chain required):",
            e.message
          );
        }
      if (t && typeof t.switchNetwork == "function")
        try {
          const e = Ot.find(
            (n) =>
              n.name.toLowerCase().includes("ethereum") &&
              !n.name.toLowerCase().includes("sepolia")
          );
          e &&
            (await t.switchNetwork(e),
            console.log(
              "✅ AppKit switched back to Ethereum (preventing Solana stuck state)"
            ));
        } catch (e) {
          console.warn("⚠️ AppKit switchNetwork skipped:", e.message);
        }
    } catch (t) {
      console.error("❌ Error disconnecting AppKit:", t);
    }
    try {
      const t = await Sl(),
        e = (t == null ? void 0 : t.wallets) || [];
      console.log(`🔌 Disconnecting ${e.length} Solana wallet(s)...`);
      for (const n of e) {
        try {
          typeof (n == null ? void 0 : n.disconnect) == "function" &&
            (await n.disconnect(),
            console.log("✅ Disconnected Solana wallet instance"));
        } catch (o) {
          console.error("❌ Error disconnecting Solana wallet:", o);
        }
        try {
          n != null &&
            n.adapter &&
            typeof n.adapter.disconnect == "function" &&
            (await n.adapter.disconnect(),
            console.log("✅ Disconnected Solana wallet adapter"));
        } catch (o) {
          console.error("❌ Error disconnecting Solana adapter:", o);
        }
      }
      if (t && typeof t.disconnect == "function")
        try {
          await t.disconnect(), console.log("✅ Disconnected Solana adapter");
        } catch (n) {
          console.error("❌ Error disconnecting Solana adapter:", n);
        }
      (Kt = null), console.log("✅ Reset Solana adapter instance");
    } catch (t) {
      console.error("❌ Error disconnecting Solana adapter:", t);
    }
    try {
      const { getAccount: t } = await Re(async () => {
          const { getAccount: n } = await import(
            "./wallet-libs-C4iBya-7.js"
          ).then((o) => o.d0);
          return { getAccount: n };
        }, __vite__mapDeps([0, 1])),
        e = t(Ct.wagmiConfig);
      if (e.connector) {
        console.log(
          "🔌 Disconnecting active wagmi connector:",
          e.connector.name
        );
        try {
          typeof e.connector.disconnect == "function" &&
            (await e.connector.disconnect());
        } catch (n) {
          console.error(
            "❌ Error disconnecting active connector:",
            e.connector.name,
            n
          );
        }
      } else console.log("ℹ️ No active wagmi connector to disconnect");
    } catch (t) {
      console.error("❌ Error disconnecting wagmi connector:", t);
    }
    try {
      const t = localStorage.getItem("@appkit/connected_namespaces");
      t &&
        (console.log("🔍 Found connected namespaces:", t),
        localStorage.removeItem("@appkit/connected_namespaces"),
        console.log(
          "✅ Force-cleared AppKit connected namespaces (Solana unstuck)"
        ));
      const e = localStorage.getItem("@appkit/active_chain");
      e &&
        (console.log("🔍 Found active chain:", e),
        localStorage.removeItem("@appkit/active_chain"),
        console.log("✅ Force-cleared AppKit active chain"));
    } catch (t) {
      console.error("❌ Error force-clearing AppKit namespaces:", t);
    }
    try {
      const t = [];
      for (let e = 0; e < localStorage.length; e += 1) {
        const n = localStorage.key(e);
        n &&
          (n.startsWith("wc@") ||
            n.startsWith("@appkit/") ||
            n.includes("walletconnect") ||
            n.startsWith("wagmi") ||
            n.includes("appkit") ||
            n.includes("reown") ||
            n.includes("NETWORK_ID") ||
            n.includes("SELECTED_NETWORK_ID") ||
            n.includes("connector") ||
            n.includes("solana") ||
            n.includes("phantom") ||
            n.includes("solflare") ||
            n.includes("trust")) &&
          t.push(n);
      }
      console.log("🧹 Clearing localStorage keys:", t),
        t.forEach((e) => localStorage.removeItem(e)),
        console.log("✅ Cleared", t.length, "cached wallet/network keys");
    } catch (t) {
      console.error("❌ Error clearing localStorage:", t);
    }
    try {
      localStorage.setItem("ds_manual_disconnect", Date.now().toString()),
        console.log("🔖 Marked manual disconnect in localStorage");
    } catch (t) {
      console.error("❌ Error setting disconnect flag:", t);
    }
    setTimeout(() => {
      (ai = !1),
        (ho = 0),
        console.log("✅ Disconnect complete, re-enabling connections");
    }, 500);
  },
  D0 = async () => {
    const t = await Sl();
    return (
      console.log("🔧 AppKit Network Configuration:", {
        totalNetworks: Ot.length,
        networkNames: Ot.map((e) => e.name),
        solanaNetworks: Ot.filter((e) => e.name.includes("Solana")),
        evmNetworks: Ot.filter(
          (e) => e.name !== "Credit Card" && !e.name.includes("Solana")
        ),
      }),
      Lh({
        adapters: [Ct, t],
        networks: Ot,
        defaultNetwork: Ys,
        projectId: Zs,
        features: {
          analytics: !1,
          socials: !1,
          email: !1,
          swaps: !1,
          onramp: !1,
        },
        themeMode: "dark",
        themeVariables: { "--w3m-z-index": "9999" },
        walletConnect: {
          projectId: Zs,
          metadata: {
            name: "DeepSnitch",
            description: "AI-powered crypto intelligence platform",
            url:
              typeof window < "u"
                ? window.location.origin
                : "https://deepsnitch.com",
            icons: ["https://deepsnitch.com/favicon.ico"],
          },
          qrModal: !0,
          qrModalOptions: {
            themeMode: "dark",
            themeVariables: { "--w3m-z-index": "9999" },
          },
          universalLink: "https://deepsnitch.com/wc",
          deepLink: "deepsnitch://wc",
          connectionTimeout: 3e4,
          enableMobileWalletLink: !0,
        },
      })
    );
  };
let wa = null,
  ga = D0()
    .then(
      (t) => (
        (wa = t),
        typeof window < "u" && (window.appKit = t),
        console.log("✅ AppKit instance initialized and stored"),
        t
      )
    )
    .catch((t) => {
      throw (console.error("❌ AppKit initialization failed:", t), t);
    });
function El({ children: t }) {
  return ne.jsx(Bh, {
    config: Ct.wagmiConfig,
    children: ne.jsx(S0, { client: k0, children: t }),
  });
}
const ri = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AppKitProvider: El,
        get appKitInstance() {
          return wa;
        },
        appKitPromise: ga,
        clearManualDisconnectFlag: oi,
        clearUserConnectionFlag: N0,
        disconnectAllWallets: L0,
        evmPublicClients: ma,
        get networks() {
          return Ot;
        },
        publicClients: P0,
        startUserConnection: W0,
        wagmiAdapter: Ct,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ui = "dsSnitch_direct_wallet_connection";
(() => {
  try {
    const t = localStorage.getItem(Ui);
    if (t) {
      const e = JSON.parse(t);
      if (e.chainType === "solana" && e.connectionSource === "direct") {
        localStorage.removeItem("wagmi.store"),
          localStorage.removeItem("wagmi.recentConnectorId"),
          localStorage.removeItem("wagmi.connected");
        const n = [];
        for (let o = 0; o < localStorage.length; o++) {
          const r = localStorage.key(o);
          r && r.startsWith("wagmi.") && n.push(r);
        }
        n.forEach((o) => localStorage.removeItem(o)),
          console.log("✅ Cleared wagmi cache for Solana direct connection");
      }
    }
  } catch (t) {
    console.error("⚠️ Error in pre-initialization cleanup:", t.message);
  }
})();
function M0() {
  const [t, e] = V.useState(!1),
    [n, o] = V.useState(null),
    [r, i] = V.useState({
      isConnected: !1,
      address: null,
      walletType: null,
      provider: null,
      connectionSource: null,
    }),
    { open: s } = vd(),
    a = V.useRef(!1),
    l = V.useRef({
      metamask: null,
      coinbase: null,
      phantom: { accountChanged: null, disconnect: null },
      solflare: { disconnect: null },
    }),
    u = V.useCallback((b) => {
      try {
        let C = null;
        b.walletType === "phantom" || b.walletType === "solflare"
          ? (C = "solana")
          : (b.walletType === "metamask" || b.walletType === "coinbase") &&
            (C = "evm");
        const y = {
          walletType: b.walletType,
          address: b.address,
          connectionSource: b.connectionSource,
          chainType: C,
          timestamp: Date.now(),
        };
        localStorage.setItem(Ui, JSON.stringify(y)),
          console.log(
            "💾 Saved direct connection to localStorage:",
            y.walletType,
            `(${C})`
          );
      } catch (C) {
        console.error("⚠️ Error saving direct connection:", C.message, C);
      }
    }, []),
    p = V.useCallback(() => {
      try {
        const b = localStorage.getItem(Ui);
        if (!b) return null;
        const C = JSON.parse(b),
          y = Date.now() - (C.timestamp || 0),
          w = 10080 * 60 * 1e3;
        return y > w
          ? (console.log(
              "🧹 Direct connection data is too old, clearing (age:",
              Math.floor(y / 1e3 / 60 / 60 / 24),
              "days)"
            ),
            localStorage.removeItem(Ui),
            null)
          : (console.log(
              "✅ Loaded direct connection from localStorage:",
              C.walletType
            ),
            C);
      } catch (b) {
        return (
          console.log("⚠️ Error loading direct connection:", b.message), null
        );
      }
    }, []),
    h = V.useCallback(() => {
      try {
        localStorage.removeItem(Ui),
          console.log("🧹 Cleared direct connection from localStorage");
      } catch (b) {
        console.log("⚠️ Error clearing direct connection:", b.message);
      }
    }, []),
    m = V.useCallback((b) => {
      var C;
      if (
        (console.log(`🧹 Cleaning up event listeners for ${b}`),
        b === "metamask" && l.current.metamask)
      ) {
        try {
          const y = l.current.metamask.provider,
            w = l.current.metamask.handler;
          y &&
            w &&
            (y.removeListener("accountsChanged", w),
            console.log("✅ Removed MetaMask accountsChanged listener"));
        } catch (y) {
          console.log("⚠️ Error removing MetaMask listener:", y.message);
        }
        l.current.metamask = null;
      }
      if (b === "coinbase" && l.current.coinbase) {
        try {
          const y = l.current.coinbase.provider,
            w = l.current.coinbase.handler;
          y &&
            w &&
            (y.removeListener("accountsChanged", w),
            console.log("✅ Removed Coinbase accountsChanged listener"));
        } catch (y) {
          console.log("⚠️ Error removing Coinbase listener:", y.message);
        }
        l.current.coinbase = null;
      }
      if (b === "phantom") {
        try {
          const y = (C = window.phantom) == null ? void 0 : C.solana;
          y &&
            l.current.phantom.accountChanged &&
            (y.removeListener(
              "accountChanged",
              l.current.phantom.accountChanged
            ),
            console.log("✅ Removed Phantom accountChanged listener")),
            y &&
              l.current.phantom.disconnect &&
              (y.removeListener("disconnect", l.current.phantom.disconnect),
              console.log("✅ Removed Phantom disconnect listener"));
        } catch (y) {
          console.log("⚠️ Error removing Phantom listeners:", y.message);
        }
        l.current.phantom = { accountChanged: null, disconnect: null };
      }
      if (b === "solflare") {
        try {
          const y = window.solflare;
          y &&
            l.current.solflare.disconnect &&
            (y.removeListener("disconnect", l.current.solflare.disconnect),
            console.log("✅ Removed Solflare disconnect listener"));
        } catch (y) {
          console.log("⚠️ Error removing Solflare listener:", y.message);
        }
        l.current.solflare = { disconnect: null };
      }
    }, []),
    g = V.useCallback(async () => {
      var b, C, y;
      if (r.isConnected && r.walletType) {
        if (
          (console.log(`🔄 Disconnecting previous wallet: ${r.walletType}`),
          m(r.walletType),
          r.walletType === "phantom" &&
            (C = (b = window.phantom) == null ? void 0 : b.solana) != null &&
            C.isConnected)
        )
          try {
            await window.phantom.solana.disconnect();
          } catch (w) {
            console.log("⚠️ Error disconnecting Phantom:", w.message);
          }
        if (
          r.walletType === "solflare" &&
          (y = window.solflare) != null &&
          y.isConnected
        )
          try {
            await window.solflare.disconnect();
          } catch (w) {
            console.log("⚠️ Error disconnecting Solflare:", w.message);
          }
        i({
          isConnected: !1,
          address: null,
          walletType: null,
          provider: null,
          connectionSource: null,
        });
      }
    }, [r.isConnected, r.walletType, m]);
  V.useEffect(
    () => (
      console.log("🔍 Direct wallet connection hook initialized"),
      (async () => {
        var C, y, w, v, O, I, M, D, J, le, fe, Di, No, ei, hn, Mi, ti;
        try {
          const ni = localStorage.getItem("ds_manual_disconnect");
          if (ni) {
            const H = Date.now() - parseInt(ni, 10);
            if (H < 3e3) {
              console.log(
                "🚫 Skipping auto-reconnect - user manually disconnected",
                Math.floor(H / 1e3),
                "seconds ago"
              ),
                h();
              try {
                localStorage.removeItem("ds_phantom_evm_allowed"),
                  console.log(
                    "✅ Cleared Phantom EVM permission on manual disconnect"
                  );
              } catch (G) {
                console.log(
                  "⚠️ Error clearing Phantom EVM permission:",
                  G.message
                );
              }
              return;
            } else
              console.log(
                "✅ Manual disconnect flag expired, allowing reconnection"
              ),
                localStorage.removeItem("ds_manual_disconnect");
          }
          const pe = p();
          console.log("📂 Saved direct connection:", pe);
          const Bi = localStorage.getItem("@appkit/connected_namespaces"),
            at = localStorage.getItem("@appkit/connection_status");
          let $e = !1,
            wt = !1,
            pn = !1;
          if (at === "connected" && Bi) {
            $e = !0;
            try {
              const H = JSON.parse(Bi);
              (wt = !!H.solana), (pn = !!H.eip155);
            } catch (H) {
              console.log("⚠️ Error parsing AppKit namespaces:", H.message);
            }
          }
          if (
            (console.log("🔍 Connection restoration check:", {
              savedDirectConnection: pe == null ? void 0 : pe.walletType,
              wasAppKitConnected: $e,
              wasAppKitSolana: wt,
              wasAppKitEVM: pn,
              phantomConnected:
                (y = (C = window.phantom) == null ? void 0 : C.solana) == null
                  ? void 0
                  : y.isConnected,
              solflareConnected:
                (w = window.solflare) == null ? void 0 : w.isConnected,
            }),
            pe && pe.connectionSource === "direct")
          ) {
            console.log(`🔄 Restoring direct ${pe.walletType} connection...`);
            try {
              const H = localStorage.getItem("wagmi.store");
              if (H) {
                const G = JSON.parse(H);
                (O =
                  (v = G == null ? void 0 : G.state) == null
                    ? void 0
                    : v.connections) != null &&
                  O.value &&
                  (console.log(
                    "🧹 Clearing wagmi connections to restore direct wallet"
                  ),
                  (G.state.connections.value = {}),
                  localStorage.setItem("wagmi.store", JSON.stringify(G)));
              }
            } catch (H) {
              console.log("⚠️ Error clearing wagmi state:", H.message);
            }
            if (pe.walletType === "phantom" || pe.walletType === "solflare")
              try {
                const H = [];
                for (let G = 0; G < localStorage.length; G += 1) {
                  const ae = localStorage.key(G);
                  ae &&
                    (ae.startsWith("wc@2:") ||
                      ae.includes("walletconnect") ||
                      ae.includes("appkit") ||
                      ae.includes("reown")) &&
                    H.push(ae);
                }
                H.length > 0 &&
                  (H.forEach((G) => localStorage.removeItem(G)),
                  console.log(
                    `🧹 Cleared ${H.length} AppKit keys for direct Solana restoration`
                  ));
              } catch (H) {
                console.log("⚠️ Error clearing AppKit cache:", H.message);
              }
            if (pe.walletType === "phantom") {
              if (
                (console.log(
                  "🔍 Attempting to restore Phantom Solana connection..."
                ),
                pe.chainType !== "solana")
              )
                console.log(
                  "⚠️ Phantom connection saved without Solana chainType - clearing to prevent EVM restoration"
                ),
                  h();
              else if ((I = window.phantom) != null && I.solana) {
                console.log("✅ Phantom Solana provider detected"),
                  console.log("🔍 Phantom connection state:", {
                    isConnected: window.phantom.solana.isConnected,
                    hasPublicKey: !!window.phantom.solana.publicKey,
                    publicKey:
                      ((M = window.phantom.solana.publicKey) == null
                        ? void 0
                        : M.toString()) || "none",
                  });
                try {
                  const H = localStorage.getItem("wagmi.store");
                  if (H) {
                    const G = JSON.parse(H),
                      ae =
                        (J =
                          (D = G == null ? void 0 : G.state) == null
                            ? void 0
                            : D.connections) == null
                          ? void 0
                          : J.value;
                    ae &&
                      Array.isArray(ae) &&
                      ae.some(([be, ce]) => {
                        var ve, Ft, fn, ji;
                        return (
                          ((Ft =
                            (ve = ce == null ? void 0 : ce.connector) == null
                              ? void 0
                              : ve.id) == null
                            ? void 0
                            : Ft.includes("phantom")) ||
                          ((ji =
                            (fn = ce == null ? void 0 : ce.connector) == null
                              ? void 0
                              : fn.name) == null
                            ? void 0
                            : ji.includes("Phantom"))
                        );
                      }) &&
                      (console.log(
                        "🧹 Detected wagmi Phantom EVM connection - clearing to restore Solana"
                      ),
                      localStorage.removeItem("wagmi.store"),
                      localStorage.removeItem("wagmi.recentConnectorId"),
                      localStorage.removeItem("wagmi.connected"));
                  }
                } catch (H) {
                  console.log("⚠️ Error checking wagmi store:", H.message);
                }
                try {
                  const H = window.phantom.solana;
                  if (H.isConnected && H.publicKey) {
                    const G = H.publicKey.toString();
                    console.log(
                      "✅ Phantom already connected, restoring state:",
                      G
                    );
                    const ae = {
                      isConnected: !0,
                      address: G,
                      walletType: "phantom",
                      provider: H,
                      connectionSource: "direct",
                    };
                    i(ae),
                      u(ae),
                      console.log(
                        "💾 Re-saved connection data after restoration"
                      );
                    const ue = (ce) => {
                        if (ce) {
                          const ve = ce.toString();
                          u({
                            walletType: "phantom",
                            address: ve,
                            connectionSource: "direct",
                          }),
                            i({
                              isConnected: !0,
                              address: ve,
                              walletType: "phantom",
                              provider: H,
                              connectionSource: "direct",
                            });
                        } else
                          h(),
                            m("phantom"),
                            i({
                              isConnected: !1,
                              address: null,
                              walletType: null,
                              provider: null,
                              connectionSource: null,
                            });
                      },
                      be = () => {
                        h(),
                          m("phantom"),
                          i({
                            isConnected: !1,
                            address: null,
                            walletType: null,
                            provider: null,
                            connectionSource: null,
                          });
                      };
                    (l.current.phantom = {
                      accountChanged: ue,
                      disconnect: be,
                    }),
                      H.on("accountChanged", ue),
                      H.on("disconnect", be);
                    try {
                      localStorage.removeItem("wagmi.store"),
                        localStorage.removeItem("wagmi.recentConnectorId"),
                        localStorage.removeItem("wagmi.connected"),
                        console.log(
                          "✅ Cleared wagmi cache after Phantom Solana restoration"
                        );
                    } catch (ce) {
                      console.log("⚠️ Error clearing wagmi cache:", ce.message);
                    }
                    return;
                  } else {
                    console.log(
                      "🔄 Phantom not connected, attempting reconnection..."
                    );
                    const G = async (ue = 0, be = 3) => {
                      try {
                        console.log(
                          `🔄 Phantom reconnection attempt ${ue + 1}/${
                            be + 1
                          }...`
                        );
                        const ce = await H.connect({ onlyIfTrusted: !0 });
                        if (ce != null && ce.publicKey) {
                          const ve = ce.publicKey.toString();
                          console.log("✅ Phantom reconnected:", ve);
                          const Ft = {
                            isConnected: !0,
                            address: ve,
                            walletType: "phantom",
                            provider: H,
                            connectionSource: "direct",
                          };
                          i(Ft),
                            u(Ft),
                            console.log(
                              "💾 Re-saved connection data after reconnection"
                            );
                          const fn = (Lo) => {
                              if (Lo) {
                                const ba = Lo.toString();
                                u({
                                  walletType: "phantom",
                                  address: ba,
                                  connectionSource: "direct",
                                }),
                                  i({
                                    isConnected: !0,
                                    address: ba,
                                    walletType: "phantom",
                                    provider: H,
                                    connectionSource: "direct",
                                  });
                              } else
                                h(),
                                  m("phantom"),
                                  i({
                                    isConnected: !1,
                                    address: null,
                                    walletType: null,
                                    provider: null,
                                    connectionSource: null,
                                  });
                            },
                            ji = () => {
                              h(),
                                m("phantom"),
                                i({
                                  isConnected: !1,
                                  address: null,
                                  walletType: null,
                                  provider: null,
                                  connectionSource: null,
                                });
                            };
                          (l.current.phantom = {
                            accountChanged: fn,
                            disconnect: ji,
                          }),
                            H.on("accountChanged", fn),
                            H.on("disconnect", ji);
                          try {
                            localStorage.removeItem("wagmi.store"),
                              localStorage.removeItem(
                                "wagmi.recentConnectorId"
                              ),
                              localStorage.removeItem("wagmi.connected"),
                              console.log(
                                "✅ Cleared wagmi cache after Phantom reconnection"
                              );
                          } catch (Lo) {
                            console.log(
                              "⚠️ Error clearing wagmi cache:",
                              Lo.message
                            );
                          }
                          return !0;
                        }
                        return ue < be
                          ? (console.log(
                              `⚠️ Phantom reconnection attempt ${
                                ue + 1
                              } failed, retrying...`
                            ),
                            await new Promise((ve) => setTimeout(ve, 500)),
                            await G(ue + 1, be))
                          : (console.log(
                              "⚠️ All Phantom reconnection attempts failed"
                            ),
                            h(),
                            !1);
                      } catch (ce) {
                        return (
                          console.log(
                            `⚠️ Phantom reconnection error (attempt ${
                              ue + 1
                            }):`,
                            ce.message
                          ),
                          ue < be
                            ? (await new Promise((ve) => setTimeout(ve, 500)),
                              await G(ue + 1, be))
                            : (h(), !1)
                        );
                      }
                    };
                    if (await G()) return;
                  }
                } catch (H) {
                  console.log("⚠️ Error restoring Phantom:", H.message), h();
                }
              }
            }
            if (pe.walletType === "solflare" && window.solflare)
              try {
                const H = window.solflare;
                if (H.isConnected && H.publicKey) {
                  const G = H.publicKey.toString();
                  console.log(
                    "✅ Solflare already connected, restoring state:",
                    G
                  );
                  const ae = {
                    isConnected: !0,
                    address: G,
                    walletType: "solflare",
                    provider: H,
                    connectionSource: "direct",
                  };
                  i(ae),
                    u(ae),
                    console.log(
                      "💾 Re-saved connection data after restoration"
                    );
                  const ue = () => {
                    h(),
                      m("solflare"),
                      i({
                        isConnected: !1,
                        address: null,
                        walletType: null,
                        provider: null,
                        connectionSource: null,
                      });
                  };
                  (l.current.solflare = { disconnect: ue }),
                    H.on("disconnect", ue);
                  try {
                    localStorage.removeItem("wagmi.store"),
                      localStorage.removeItem("wagmi.recentConnectorId"),
                      localStorage.removeItem("wagmi.connected"),
                      console.log(
                        "✅ Cleared wagmi cache after Solflare restoration"
                      );
                  } catch (be) {
                    console.log("⚠️ Error clearing wagmi cache:", be.message);
                  }
                  return;
                } else {
                  console.log(
                    "🔄 Solflare not connected, attempting reconnection..."
                  );
                  const G = async (ue = 0, be = 3) => {
                    try {
                      if (
                        (console.log(
                          `🔄 Solflare reconnection attempt ${ue + 1}/${
                            be + 1
                          }...`
                        ),
                        await H.connect({ onlyIfTrusted: !0 }),
                        H.publicKey)
                      ) {
                        const ce = H.publicKey.toString();
                        console.log("✅ Solflare reconnected:", ce);
                        const ve = {
                          isConnected: !0,
                          address: ce,
                          walletType: "solflare",
                          provider: H,
                          connectionSource: "direct",
                        };
                        i(ve),
                          u(ve),
                          console.log(
                            "💾 Re-saved connection data after reconnection"
                          );
                        const Ft = () => {
                          h(),
                            m("solflare"),
                            i({
                              isConnected: !1,
                              address: null,
                              walletType: null,
                              provider: null,
                              connectionSource: null,
                            });
                        };
                        (l.current.solflare = { disconnect: Ft }),
                          H.on("disconnect", Ft);
                        try {
                          localStorage.removeItem("wagmi.store"),
                            localStorage.removeItem("wagmi.recentConnectorId"),
                            localStorage.removeItem("wagmi.connected"),
                            console.log(
                              "✅ Cleared wagmi cache after Solflare reconnection"
                            );
                        } catch (fn) {
                          console.log(
                            "⚠️ Error clearing wagmi cache:",
                            fn.message
                          );
                        }
                        return !0;
                      }
                      return ue < be
                        ? (console.log(
                            `⚠️ Solflare reconnection attempt ${
                              ue + 1
                            } failed, retrying...`
                          ),
                          await new Promise((ce) => setTimeout(ce, 500)),
                          await G(ue + 1, be))
                        : (console.log(
                            "⚠️ All Solflare reconnection attempts failed"
                          ),
                          h(),
                          !1);
                    } catch (ce) {
                      return (
                        console.log(
                          `⚠️ Solflare reconnection error (attempt ${ue + 1}):`,
                          ce.message
                        ),
                        ue < be
                          ? (await new Promise((ve) => setTimeout(ve, 500)),
                            await G(ue + 1, be))
                          : (h(), !1)
                      );
                    }
                  };
                  if (await G()) return;
                }
              } catch (H) {
                console.log("⚠️ Error restoring Solflare:", H.message), h();
              }
            (pe.walletType === "metamask" || pe.walletType === "coinbase") &&
              (console.log(
                `⚠️ ${pe.walletType} direct connection cannot be auto-restored (EVM limitation)`
              ),
              h());
          }
          if ($e && wt) {
            console.log(
              "✅ AppKit Solana connection detected - preserving for restoration"
            );
            try {
              const H = localStorage.getItem("wagmi.store");
              if (H) {
                const G = JSON.parse(H);
                (fe =
                  (le = G == null ? void 0 : G.state) == null
                    ? void 0
                    : le.connections) != null &&
                  fe.value &&
                  Object.keys(G.state.connections.value).length > 0 &&
                  (console.log(
                    "🧹 Clearing conflicting wagmi EVM connections to prevent Solana override"
                  ),
                  (G.state.connections.value = {}),
                  localStorage.setItem("wagmi.store", JSON.stringify(G)));
              }
            } catch (H) {
              console.log(
                "⚠️ Error clearing conflicting wagmi state:",
                H.message
              );
            }
            return;
          }
          if ($e && pn) {
            console.log(
              "✅ AppKit EVM connection detected - preserving for restoration"
            );
            return;
          }
          if (
            (((No = (Di = window.phantom) == null ? void 0 : Di.solana) == null
              ? void 0
              : No.isConnected) ||
              ((ei = window.solflare) == null ? void 0 : ei.isConnected)) &&
            !$e &&
            !pe
          ) {
            console.log(
              "🧹 Detected orphaned Solana wallet connection (no session data) - clearing"
            );
            const H = [];
            for (let G = 0; G < localStorage.length; G += 1) {
              const ae = localStorage.key(G);
              ae &&
                (ae.startsWith("wc@2:") ||
                  ae.includes("walletconnect") ||
                  ae.includes("appkit") ||
                  ae.includes("reown") ||
                  ae.includes("WALLETCONNECT")) &&
                H.push(ae);
            }
            H.length > 0 &&
              (H.forEach((G) => localStorage.removeItem(G)),
              console.log(`🧹 Cleared ${H.length} orphaned cache keys`));
          }
          !pe &&
            !$e &&
            !(
              (Mi = (hn = window.phantom) == null ? void 0 : hn.solana) !=
                null && Mi.isConnected
            ) &&
            !((ti = window.solflare) != null && ti.isConnected) &&
            console.log("✅ No active connections detected - clean state");
        } catch (ni) {
          console.log("Connection restoration error:", ni.message);
        }
      })(),
      () => {
        console.log("🧹 Cleaning up wallet connection hook on unmount"),
          m("metamask"),
          m("coinbase"),
          m("phantom"),
          m("solflare");
      }
    ),
    [m, p, h, u]
  );
  const W = V.useCallback(async () => {
      var b, C, y;
      if (a.current)
        return (
          console.log("⚠️ Connection already in progress, ignoring"),
          { success: !1, error: "Connection already in progress" }
        );
      (a.current = !0), e(!0), o(null);
      try {
        oi();
        try {
          localStorage.removeItem("ds_manual_disconnect");
        } catch {}
        await g(), console.log("🦊 Connecting to MetaMask...");
        const w =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        if (
          (console.log("📱 Mobile device detected:", w), w && !window.ethereum)
        ) {
          console.log(
            "📱 Mobile device without injected provider - using deep link"
          );
          const M = `https://metamask.app.link/dapp/${window.location.href.replace(
            /^https?:\/\//,
            ""
          )}`;
          return (
            console.log("🔗 Opening MetaMask via deep link:", M),
            console.log(
              "💡 This will open MetaMask app with your site loaded in its browser"
            ),
            (window.location.href = M),
            (a.current = !1),
            e(!1),
            {
              success: !1,
              error: "Redirecting to MetaMask app...",
              isRedirect: !0,
            }
          );
        }
        console.log("🔍 window.ethereum exists:", !!window.ethereum),
          console.log(
            "🔍 window.ethereum.providers:",
            (b = window.ethereum) == null ? void 0 : b.providers
          );
        let v = null;
        try {
          console.log("🔍 Attempting EIP-6963 wallet discovery...");
          const I = await new Promise((D) => {
            const J = [],
              le = (fe) => {
                console.log("📡 EIP-6963 provider announced:", fe.detail.info),
                  J.push(fe.detail);
              };
            window.addEventListener("eip6963:announceProvider", le),
              window.dispatchEvent(new Event("eip6963:requestProvider")),
              setTimeout(() => {
                window.removeEventListener("eip6963:announceProvider", le),
                  console.log(
                    "✅ EIP-6963 discovery completed, found:",
                    J.length,
                    "providers"
                  ),
                  D(J);
              }, 300);
          });
          console.log(
            "📋 EIP-6963 providers:",
            I.map((D) => D.info.name)
          );
          const M = I.find(
            (D) =>
              D.info.rdns === "io.metamask" ||
              (D.info.name && D.info.name.toLowerCase().includes("metamask"))
          );
          M &&
            ((v = M.provider), console.log("✅ Found MetaMask via EIP-6963"));
        } catch (I) {
          console.log("⚠️ EIP-6963 discovery failed:", I.message);
        }
        if (
          (!v &&
            (C = window.ethereum) != null &&
            C.providers &&
            Array.isArray(window.ethereum.providers) &&
            (console.log("🔍 Checking window.ethereum.providers array..."),
            console.log(
              "📋 Providers:",
              window.ethereum.providers.map((I) => ({
                isMetaMask: I.isMetaMask,
                isPhantom: I.isPhantom,
                _metamask: !!I._metamask,
                _phantom: !!I._phantom,
              }))
            ),
            (v = window.ethereum.providers.find(
              (I) =>
                I.isMetaMask === !0 &&
                I.isPhantom !== !0 &&
                !I.isBraveWallet &&
                !I.isCoinbaseWallet
            )),
            v && console.log("✅ Found MetaMask in providers array")),
          !v && window.ethereum)
        ) {
          console.log("🔍 Checking window.ethereum directly...");
          const I = window.ethereum;
          I.isMetaMask === !0 && I.isPhantom !== !0 && !I.isCoinbaseWallet
            ? ((v = I), console.log("✅ Found MetaMask as window.ethereum"))
            : console.log("❌ window.ethereum is not MetaMask:", {
                isMetaMask: I.isMetaMask,
                isPhantom: I.isPhantom,
                isCoinbaseWallet: I.isCoinbaseWallet,
              });
        }
        if (!v)
          throw (
            (console.error(
              "❌ MetaMask provider not found after all strategies"
            ),
            new Error(
              "MetaMask is not installed. Please install MetaMask extension."
            ))
          );
        console.log("✅ MetaMask provider selected:", {
          isMetaMask: v.isMetaMask,
          isPhantom: v.isPhantom,
        }),
          console.log("🚀 Opening MetaMask...");
        const O = await v.request({ method: "eth_requestAccounts" });
        if (O && O.length > 0) {
          console.log("✅ MetaMask connected:", O[0]),
            i({
              isConnected: !0,
              address: O[0],
              walletType: "metamask",
              provider: v,
              connectionSource: "direct",
            }),
            console.log("🧹 Clearing Solana direct connection cache..."),
            h();
          let I = Date.now();
          const M = (D) => {
            console.log("🔄 MetaMask accounts changed:", D);
            const J = Date.now() - I;
            if ((!D || D.length === 0) && J < 2e3) {
              console.log(
                `⚠️ Ignoring spurious empty accountsChanged (${J}ms after connect)`
              );
              return;
            }
            D && D.length > 0
              ? (console.log("✅ Updating to new account:", D[0]),
                (I = Date.now()),
                i({
                  isConnected: !0,
                  address: D[0],
                  walletType: "metamask",
                  provider: v,
                  connectionSource: "direct",
                }))
              : (console.log(
                  "⚠️ Empty accounts array - user disconnected from MetaMask"
                ),
                m("metamask"),
                i({
                  isConnected: !1,
                  address: null,
                  walletType: null,
                  provider: null,
                  connectionSource: null,
                }));
          };
          (l.current.metamask = { provider: v, handler: M }),
            v.on("accountsChanged", M);
          try {
            localStorage.removeItem("ds_manual_disconnect");
          } catch {}
          return (a.current = !1), e(!1), { success: !0, address: O[0] };
        } else throw new Error("No accounts found in MetaMask");
      } catch (w) {
        console.error("❌ MetaMask connection error:", w);
        let v = "Failed to connect to MetaMask";
        return (
          (y = w.message) != null && y.includes("User rejected")
            ? (v = "Connection rejected by user")
            : w.message && (v = w.message),
          o(v),
          (a.current = !1),
          e(!1),
          { success: !1, error: v }
        );
      }
    }, [g, m, h]),
    _ = V.useCallback(async () => {
      var b, C, y;
      if (a.current)
        return (
          console.log("⚠️ Connection already in progress, ignoring"),
          { success: !1, error: "Connection already in progress" }
        );
      (a.current = !0), e(!0), o(null);
      try {
        oi();
        try {
          localStorage.removeItem("ds_manual_disconnect");
        } catch {}
        await g(), console.log("🔵 Connecting to Coinbase Wallet...");
        const w =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        if (
          (console.log("📱 Mobile device detected:", w),
          w && !window.ethereum && !window.coinbaseWalletExtension)
        ) {
          console.log(
            "📱 Mobile device without injected provider - using deep link"
          );
          const M = `https://go.cb-w.com/dapp/${window.location.href.replace(
            /^https?:\/\//,
            ""
          )}`;
          return (
            console.log("🔗 Opening Coinbase Wallet via deep link:", M),
            console.log(
              "💡 This will open Coinbase Wallet app with your site loaded in its browser"
            ),
            (window.location.href = M),
            (a.current = !1),
            e(!1),
            {
              success: !1,
              error: "Redirecting to Coinbase Wallet app...",
              isRedirect: !0,
            }
          );
        }
        let v = null;
        try {
          console.log("🔍 Trying EIP-6963 discovery for Coinbase...");
          const I = await ((b = window.ethereum) == null
              ? void 0
              : b.request({ method: "wallet_getProviders" }).catch(() => [])),
            M =
              I == null
                ? void 0
                : I.find((D) => {
                    var J, le, fe;
                    return (
                      ((le = (J = D.info) == null ? void 0 : J.name) == null
                        ? void 0
                        : le.toLowerCase().includes("coinbase")) ||
                      ((fe = D.info) == null ? void 0 : fe.rdns) ===
                        "com.coinbase.wallet"
                    );
                  });
          M &&
            ((v = M.provider),
            console.log("✅ Found Coinbase Wallet via EIP-6963"));
        } catch (I) {
          console.log("⚠️ EIP-6963 discovery failed:", I.message);
        }
        if (
          (!v &&
            (C = window.ethereum) != null &&
            C.providers &&
            Array.isArray(window.ethereum.providers) &&
            (console.log(
              "🔍 Checking window.ethereum.providers array for Coinbase..."
            ),
            console.log(
              "📋 Providers:",
              window.ethereum.providers.map((I) => ({
                isCoinbaseWallet: I.isCoinbaseWallet,
                isMetaMask: I.isMetaMask,
              }))
            ),
            (v = window.ethereum.providers.find(
              (I) => I.isCoinbaseWallet === !0
            )),
            v && console.log("✅ Found Coinbase Wallet in providers array")),
          !v && window.ethereum)
        ) {
          console.log("🔍 Checking window.ethereum directly for Coinbase...");
          const I = window.ethereum;
          I.isCoinbaseWallet === !0
            ? ((v = I),
              console.log("✅ Found Coinbase Wallet as window.ethereum"))
            : console.log("❌ window.ethereum is not Coinbase Wallet:", {
                isCoinbaseWallet: I.isCoinbaseWallet,
              });
        }
        if (
          (!v &&
            window.coinbaseWalletExtension &&
            (console.log("🔍 Checking window.coinbaseWalletExtension..."),
            (v = window.coinbaseWalletExtension),
            console.log(
              "✅ Found Coinbase Wallet via window.coinbaseWalletExtension"
            )),
          !v)
        )
          throw (
            (console.error(
              "❌ Coinbase Wallet provider not found after all strategies"
            ),
            new Error(
              "Coinbase Wallet is not installed. Please install Coinbase Wallet extension."
            ))
          );
        console.log("✅ Coinbase Wallet provider selected:", {
          isCoinbaseWallet: v.isCoinbaseWallet,
        }),
          console.log("🚀 Opening Coinbase Wallet...");
        const O = await v.request({ method: "eth_requestAccounts" });
        if (O && O.length > 0) {
          console.log("✅ Coinbase Wallet connected:", O[0]),
            i({
              isConnected: !0,
              address: O[0],
              walletType: "coinbase",
              provider: v,
              connectionSource: "direct",
            }),
            console.log("🧹 Clearing Solana direct connection cache..."),
            h();
          let I = Date.now();
          const M = (D) => {
            console.log("🔄 Coinbase Wallet accounts changed:", D);
            const J = Date.now() - I;
            if ((!D || D.length === 0) && J < 2e3) {
              console.log(
                `⚠️ Ignoring spurious empty accountsChanged (${J}ms after connect)`
              );
              return;
            }
            D && D.length > 0
              ? (console.log("✅ Updating to new account:", D[0]),
                (I = Date.now()),
                i({
                  isConnected: !0,
                  address: D[0],
                  walletType: "coinbase",
                  provider: v,
                  connectionSource: "direct",
                }))
              : (console.log(
                  "⚠️ Empty accounts array - user disconnected from Coinbase Wallet"
                ),
                m("coinbase"),
                i({
                  isConnected: !1,
                  address: null,
                  walletType: null,
                  provider: null,
                  connectionSource: null,
                }));
          };
          (l.current.coinbase = { provider: v, handler: M }),
            v.on("accountsChanged", M);
          try {
            localStorage.removeItem("ds_manual_disconnect");
          } catch {}
          return (a.current = !1), e(!1), { success: !0, address: O[0] };
        } else throw new Error("No accounts found in Coinbase Wallet");
      } catch (w) {
        console.error("❌ Coinbase Wallet connection error:", w);
        let v = "Failed to connect to Coinbase Wallet";
        return (
          (y = w.message) != null && y.includes("User rejected")
            ? (v = "Connection rejected by user")
            : w.message && (v = w.message),
          o(v),
          (a.current = !1),
          e(!1),
          { success: !1, error: v }
        );
      }
    }, [g, m, h]),
    k = V.useCallback(async () => {
      var b, C;
      if (a.current)
        return (
          console.log("⚠️ Connection already in progress, ignoring"),
          { success: !1, error: "Connection already in progress" }
        );
      (a.current = !0), e(!0), o(null);
      try {
        oi();
        try {
          localStorage.removeItem("ds_manual_disconnect");
        } catch {}
        await g(), console.log("👻 Connecting to Phantom...");
        const y =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        console.log("📱 Mobile device detected:", y);
        const w = (b = window.phantom) == null ? void 0 : b.solana;
        if (!w && y) {
          console.log(
            "📱 Mobile device without Phantom provider - using deep link"
          );
          const I = `https://phantom.app/ul/browse/${window.location.href.replace(
            /^https?:\/\//,
            ""
          )}?ref=${encodeURIComponent(window.location.origin)}`;
          return (
            console.log("🔗 Opening Phantom via deep link:", I),
            console.log(
              "💡 This will open Phantom app with your site loaded in its browser"
            ),
            (window.location.href = I),
            (a.current = !1),
            e(!1),
            {
              success: !1,
              error: "Redirecting to Phantom app...",
              isRedirect: !0,
            }
          );
        }
        if (!w)
          throw new Error(
            "Phantom wallet is not installed. Please install Phantom extension."
          );
        console.log("🚀 Opening Phantom...");
        const v = await w.connect();
        if (v != null && v.publicKey) {
          const O = v.publicKey.toString();
          console.log("✅ Phantom connected:", O);
          const I = {
            isConnected: !0,
            address: O,
            walletType: "phantom",
            provider: w,
            connectionSource: "direct",
          };
          i(I),
            u(I),
            console.log("🧹 Clearing AppKit EVM cache to prevent conflicts...");
          try {
            const J = [];
            for (let le = 0; le < localStorage.length; le++) {
              const fe = localStorage.key(le);
              fe &&
                (fe.startsWith("@appkit/") ||
                  fe.startsWith("wc@") ||
                  fe.startsWith("wagmi") ||
                  fe.includes("walletconnect") ||
                  fe.includes("reown")) &&
                J.push(fe);
            }
            J.forEach((le) => localStorage.removeItem(le)),
              console.log("✅ Cleared", J.length, "AppKit/EVM cache keys"),
              localStorage.removeItem("wagmi.store"),
              localStorage.removeItem("wagmi.recentConnectorId"),
              localStorage.removeItem("wagmi.connected"),
              console.log("✅ Explicitly cleared wagmi.store and related keys");
          } catch (J) {
            console.error("❌ Error clearing AppKit cache:", J);
          }
          const M = (J) => {
              if (J) {
                const le = {
                  isConnected: !0,
                  address: J.toString(),
                  walletType: "phantom",
                  provider: w,
                  connectionSource: "direct",
                };
                i(le), u(le);
              } else
                m("phantom"),
                  h(),
                  i({
                    isConnected: !1,
                    address: null,
                    walletType: null,
                    provider: null,
                    connectionSource: null,
                  });
            },
            D = () => {
              m("phantom"),
                h(),
                i({
                  isConnected: !1,
                  address: null,
                  walletType: null,
                  provider: null,
                  connectionSource: null,
                });
            };
          (l.current.phantom = { accountChanged: M, disconnect: D }),
            w.on("accountChanged", M),
            w.on("disconnect", D);
          try {
            localStorage.removeItem("ds_manual_disconnect");
          } catch {}
          return (a.current = !1), e(!1), { success: !0, address: O };
        } else throw new Error("Failed to get public key from Phantom");
      } catch (y) {
        console.error("❌ Phantom connection error:", y);
        let w = "Failed to connect to Phantom";
        return (
          (C = y.message) != null && C.includes("User rejected")
            ? (w = "Connection rejected by user")
            : y.message && (w = y.message),
          o(w),
          (a.current = !1),
          e(!1),
          { success: !1, error: w }
        );
      }
    }, [g, m, h, u]),
    T = V.useCallback(async () => {
      var b;
      if (a.current)
        return (
          console.log("⚠️ Connection already in progress, ignoring"),
          { success: !1, error: "Connection already in progress" }
        );
      (a.current = !0), e(!0), o(null);
      try {
        oi();
        try {
          localStorage.removeItem("ds_manual_disconnect");
        } catch {}
        await g(), console.log("🌞 Connecting to Solflare...");
        const C =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        console.log("📱 Mobile device detected:", C);
        const y = window.solflare;
        if (!y && C) {
          console.log(
            "📱 Mobile device without Solflare provider - using deep link"
          );
          const w = window.location.href,
            v = `https://solflare.com/ul/v1/browse/${encodeURIComponent(w)}`;
          return (
            console.log("🔗 Opening Solflare via deep link:", v),
            console.log(
              "💡 This will open Solflare app with your site loaded in its browser"
            ),
            (window.location.href = v),
            (a.current = !1),
            e(!1),
            {
              success: !1,
              error: "Redirecting to Solflare app...",
              isRedirect: !0,
            }
          );
        }
        if (!y)
          throw new Error(
            "Solflare wallet is not installed. Please install Solflare extension."
          );
        if (
          (console.log("🚀 Opening Solflare..."),
          await y.connect(),
          y.publicKey)
        ) {
          const w = y.publicKey.toString();
          console.log("✅ Solflare connected:", w);
          const v = {
            isConnected: !0,
            address: w,
            walletType: "solflare",
            provider: y,
            connectionSource: "direct",
          };
          i(v),
            u(v),
            console.log("🧹 Clearing AppKit EVM cache to prevent conflicts...");
          try {
            const I = [];
            for (let M = 0; M < localStorage.length; M++) {
              const D = localStorage.key(M);
              D &&
                (D.startsWith("@appkit/") ||
                  D.startsWith("wc@") ||
                  D.startsWith("wagmi") ||
                  D.includes("walletconnect") ||
                  D.includes("reown")) &&
                I.push(D);
            }
            I.forEach((M) => localStorage.removeItem(M)),
              console.log("✅ Cleared", I.length, "AppKit/EVM cache keys"),
              localStorage.removeItem("wagmi.store"),
              localStorage.removeItem("wagmi.recentConnectorId"),
              localStorage.removeItem("wagmi.connected"),
              console.log("✅ Explicitly cleared wagmi.store and related keys");
          } catch (I) {
            console.error("❌ Error clearing AppKit cache:", I);
          }
          const O = () => {
            m("solflare"),
              h(),
              i({
                isConnected: !1,
                address: null,
                walletType: null,
                provider: null,
                connectionSource: null,
              });
          };
          (l.current.solflare = { disconnect: O }), y.on("disconnect", O);
          try {
            localStorage.removeItem("ds_manual_disconnect");
          } catch {}
          return (a.current = !1), e(!1), { success: !0, address: w };
        } else throw new Error("Failed to get public key from Solflare");
      } catch (C) {
        console.error("❌ Solflare connection error:", C);
        let y = "Failed to connect to Solflare";
        return (
          (b = C.message) != null && b.includes("User rejected")
            ? (y = "Connection rejected by user")
            : C.message && (y = C.message),
          o(y),
          (a.current = !1),
          e(!1),
          { success: !1, error: y }
        );
      }
    }, [g, m, h, u]),
    R = V.useCallback(
      async (b = null) => {
        console.log(
          "🔍 [connectOtherWallets] Called with chainType:",
          b,
          "typeof:",
          typeof b
        ),
          e(!0),
          o(null);
        try {
          oi();
          try {
            localStorage.removeItem("ds_manual_disconnect"),
              console.log(
                "✅ Cleared ds_manual_disconnect flag for new connection"
              );
          } catch (w) {
            console.log("⚠️ Error clearing ds_manual_disconnect:", w.message);
          }
          const { startUserConnection: C } = await Re(async () => {
            const { startUserConnection: w } = await Promise.resolve().then(
              () => ri
            );
            return { startUserConnection: w };
          }, void 0);
          if (
            (C(),
            console.log(
              "🔗 Opening AppKit modal for other wallets...",
              b ? `(${b})` : ""
            ),
            console.log(
              "🔍 [connectOtherWallets] Will connect to:",
              b === "solana" ? "Solana" : "EVM"
            ),
            b === "solana")
          ) {
            console.log(
              "🧹 Clearing EVM cache for Solana AppKit connection..."
            );
            try {
              const w = [];
              for (let v = 0; v < localStorage.length; v++) {
                const O = localStorage.key(v);
                O &&
                  ((O.startsWith("wagmi") && !O.includes("solana")) ||
                    O.includes("eip155") ||
                    O.includes("@appkit/eip155") ||
                    O.includes("wc@2:eip155")) &&
                  w.push(O);
              }
              w.forEach((v) => localStorage.removeItem(v)),
                console.log("✅ Cleared", w.length, "EVM cache keys");
            } catch (w) {
              console.error("❌ Error clearing EVM cache:", w);
            }
          } else {
            console.log(
              "🧹 Clearing Solana connection cache for EVM AppKit connection..."
            ),
              h();
            try {
              const w = [];
              for (let v = 0; v < localStorage.length; v++) {
                const O = localStorage.key(v);
                O &&
                  (O.includes("solana") ||
                    O.includes("@appkit/solana") ||
                    O.includes("wc@2:solana")) &&
                  w.push(O);
              }
              w.forEach((v) => localStorage.removeItem(v)),
                console.log(
                  "✅ Cleared",
                  w.length,
                  "Solana-specific cache keys"
                );
            } catch (w) {
              console.error("❌ Error clearing Solana cache:", w);
            }
          }
          console.log("🔍 [connectOtherWallets] chainType:", b);
          const y =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            );
          return (
            console.log("📱 [connectOtherWallets] isMobile:", y),
            b === "solana"
              ? (console.log("📱 Opening AppKit with Solana namespace"),
                y
                  ? await s({ view: "AllWallets", namespace: "solana" })
                  : await s({ namespace: "solana" }))
              : (console.log("📱 Opening AppKit with EVM namespace"),
                y
                  ? await s({ view: "AllWallets", namespace: "eip155" })
                  : await s({ namespace: "eip155" })),
            console.log("✅ AppKit opened successfully"),
            i({
              isConnected: !1,
              address: null,
              walletType: null,
              provider: null,
              connectionSource: null,
            }),
            e(!1),
            { success: !0 }
          );
        } catch (C) {
          console.error("❌ AppKit modal error:", C);
          const y = C.message || "Failed to open wallet modal";
          o(y), e(!1);
          try {
            const { clearUserConnectionFlag: w } = await Re(async () => {
              const { clearUserConnectionFlag: v } =
                await Promise.resolve().then(() => ri);
              return { clearUserConnectionFlag: v };
            }, void 0);
            w();
          } catch (w) {
            console.log("⚠️ Error clearing user connection flag:", w.message);
          }
          return { success: !1, error: y };
        }
      },
      [s, h]
    ),
    P = V.useCallback(
      async (b, C = null) => {
        switch (
          (console.log(`🔌 Connecting to: ${b}`, C ? `(${C})` : ""),
          b.toLowerCase())
        ) {
          case "metamask":
            return await W();
          case "base":
          case "coinbase":
          case "coinbase wallet":
            return await _();
          case "phantom":
            return await k();
          case "solflare":
            return await T();
          case "rainbow":
          case "other wallets":
            return await R(C);
          default:
            return await R(C);
        }
      },
      [W, _, k, T, R]
    ),
    x = V.useCallback(async () => {
      var b, C, y;
      try {
        console.log("🔌 Disconnecting wallet...");
        const w = r.walletType,
          v = r.connectionSource;
        if (!w || v !== "direct") {
          console.log("⚠️ No direct wallet connection to disconnect");
          return;
        }
        h(),
          m(w),
          w === "metamask" &&
            (console.log("🧹 Clearing MetaMask state"),
            i({
              isConnected: !1,
              address: null,
              walletType: null,
              provider: null,
            }),
            await new Promise((O) => setTimeout(O, 50))),
          w === "coinbase" &&
            (console.log("🧹 Clearing Coinbase state"),
            i({
              isConnected: !1,
              address: null,
              walletType: null,
              provider: null,
              connectionSource: null,
            }),
            await new Promise((O) => setTimeout(O, 50))),
          w === "phantom" &&
            (C = (b = window.phantom) == null ? void 0 : b.solana) != null &&
            C.isConnected &&
            (console.log("🧹 Disconnecting Phantom"),
            await window.phantom.solana.disconnect(),
            i({
              isConnected: !1,
              address: null,
              walletType: null,
              provider: null,
              connectionSource: null,
            })),
          w === "solflare" &&
            (y = window.solflare) != null &&
            y.isConnected &&
            (console.log("🧹 Disconnecting Solflare"),
            await window.solflare.disconnect(),
            i({
              isConnected: !1,
              address: null,
              walletType: null,
              provider: null,
              connectionSource: null,
            })),
          (a.current = !1),
          console.log("✅ Wallet disconnected");
      } catch (w) {
        console.error("❌ Disconnect error:", w),
          m(r.walletType),
          i({
            isConnected: !1,
            address: null,
            walletType: null,
            provider: null,
            connectionSource: null,
          }),
          (a.current = !1);
      }
    }, [r.walletType, r.connectionSource, m, h]),
    Z = V.useCallback(() => {
      o(null);
    }, []);
  return {
    connectWallet: P,
    disconnectWallet: x,
    isConnecting: t,
    isConnected: r.isConnected,
    address: r.address,
    walletType: r.walletType,
    provider: r.provider,
    connectionSource: r.connectionSource,
    error: n,
    clearError: Z,
  };
}
function B0() {
  const [t, e] = V.useState({ address: null, isConnected: !1 }),
    [n, o] = V.useState(!1),
    [r, i] = V.useState(null),
    s = V0();
  return (
    V.useEffect(() => {
      try {
        i(null),
          e({
            address: (s == null ? void 0 : s.address) || null,
            isConnected: (s == null ? void 0 : s.isConnected) || !1,
          }),
          o(!0);
      } catch (a) {
        console.warn("Wallet connection failed:", a),
          i(a),
          e({ address: null, isConnected: !1 }),
          o(!0);
      }
    }, [s == null ? void 0 : s.address, s == null ? void 0 : s.isConnected]),
    {
      address: t.address,
      isConnected: t.isConnected,
      isInitialized: n,
      error: r,
      hasError: !!r,
      walletType: s == null ? void 0 : s.walletType,
      chainType: s == null ? void 0 : s.chainType,
      provider: s == null ? void 0 : s.provider,
      isWagmiStable: s == null ? void 0 : s.isWagmiStable,
    }
  );
}
function N3(t = "eip155") {
  const [e, n] = V.useState(!1),
    [o, r] = V.useState(null),
    [i, s] = V.useState(null);
  return (
    V.useEffect(() => {
      let a;
      const l = async () => {
        try {
          if (typeof window < "u" && window.appKit) {
            const u = window.appKit;
            if (u && typeof u.getWalletProvider == "function")
              try {
                const p = await u.getWalletProvider(t);
                s(p), n(!0), r(null);
                return;
              } catch (p) {
                console.warn(`Failed to get wallet provider for ${t}:`, p);
              }
            n(!0), s(null), r(null);
          } else a = setTimeout(l, 200);
        } catch (u) {
          console.warn("Error checking AppKit availability:", u),
            r(u),
            (a = setTimeout(l, 500));
        }
      };
      return (
        l(),
        () => {
          a && clearTimeout(a);
        }
      );
    }, [t]),
    { walletProvider: i, isInitialized: e, error: o, hasError: !!o }
  );
}
const kl = V.createContext({
  isConnecting: !1,
  startConnecting: () => {},
  stopConnecting: () => {},
  signalUserDisconnect: () => {},
});
function L3({ children: t }) {
  const [e, n] = V.useState(!1),
    [o, r] = V.useState(!1),
    i = yd(),
    { isConnected: s } = B0(),
    a = V.useCallback(() => n(!0), []),
    l = V.useCallback(() => n(!1), []),
    u = V.useCallback(() => {
      console.log("🔔 User initiated disconnect"), r(!0);
    }, []),
    p = V.useMemo(
      () => ({
        isConnecting: e,
        startConnecting: a,
        stopConnecting: l,
        signalUserDisconnect: u,
      }),
      [e, a, l, u]
    );
  return (
    V.useEffect(() => {
      var m, g;
      if (!((m = i == null ? void 0 : i.data) != null && m.event)) return;
      console.log(
        "EVENTS-------------------------",
        (g = i == null ? void 0 : i.data) == null ? void 0 : g.event
      );
      const h = String(i.data.event).toUpperCase();
      if (h.includes("DISCONNECT") && o) {
        console.log("🔌 User disconnected wallet (user-initiated)"), r(!1), l();
        return;
      }
      if (h.includes("DISCONNECT") && s) {
        console.log(
          "⚠️ Ignoring spurious DISCONNECT event - user is still connected"
        );
        return;
      }
      if (
        h.includes("CONNECT") &&
        (h.includes("OPEN") || h.includes("REQUEST") || h.includes("START"))
      ) {
        a();
        return;
      }
      if (h.includes("CONNECT") && h.includes("SUCCESS")) {
        console.log("✅ Connection successful"), l();
        return;
      }
      if ((h.includes("MODAL") && h.includes("CLOSE")) || h.includes("CLOSE")) {
        s || l();
        return;
      }
    }, [i, s, o, a, l]),
    V.useEffect(() => {
      s && l();
    }, [s, l]),
    ne.jsx(kl.Provider, { value: p, children: t })
  );
}
function j0() {
  return V.useContext(kl);
}
const _l = V.createContext({
  isConnected: !1,
  address: null,
  walletType: null,
  chainType: null,
  provider: null,
  isConnecting: !1,
  error: null,
  connectWallet: () => {},
  disconnectWallet: () => {},
  clearError: () => {},
});
function z0({ children: t }) {
  const e = M0(),
    n = gd(),
    o = Qh(),
    { switchNetwork: r, caipNetwork: i } = Dh(),
    { signalUserDisconnect: s } = j0(),
    l = (() => {
      if (e.walletType === "metamask" || e.walletType === "coinbase")
        return "evm";
      if (e.walletType === "phantom" || e.walletType === "solflare")
        return "solana";
      if (n.isConnected) {
        const k = n.address;
        if (k && k.startsWith("0x") && k.length === 42) return "evm";
        if (k && !k.startsWith("0x")) return "solana";
      }
      if (o.isConnected) {
        const k = o.address;
        if (k && k.startsWith("0x") && k.length === 42) return "evm";
      }
      return null;
    })(),
    [u, p] = Rt.useState(!1);
  Rt.useEffect(() => {
    const k = n.isConnected || o.isConnected;
    if (k && !e.isConnected) {
      p(!1);
      const T = setTimeout(() => {
        p(!0);
      }, 500);
      return () => clearTimeout(T);
    } else k ? e.isConnected && p(!0) : p(!1);
  }, [n.isConnected, o.isConnected, e.isConnected]);
  const [h, m] = Rt.useState(null),
    g = Rt.useRef(!1);
  Rt.useEffect(() => {
    if (!g.current) {
      g.current = !0;
      const k = localStorage.getItem("@appkit/connected_namespaces");
      if (k)
        try {
          const T = JSON.parse(k),
            R = !!T.solana,
            P = !!T.eip155;
          R && !P
            ? (m("solana"),
              console.log(
                "🔍 [WalletContext] Expected chain type on mount: Solana"
              ))
            : P &&
              !R &&
              (m("evm"),
              console.log(
                "🔍 [WalletContext] Expected chain type on mount: EVM"
              ));
        } catch (T) {
          console.log("⚠️ Error checking mount chain type:", T.message);
        }
    }
  }, []),
    V.useEffect(() => {
      console.log("🔍 [WalletContext] State:", {
        directConnection: {
          isConnected: e.isConnected,
          address: e.address,
          walletType: e.walletType,
          connectionSource: e.connectionSource,
        },
        appKitAccount: { isConnected: n.isConnected, address: n.address },
        wagmiConnection: { isConnected: o.isConnected, address: o.address },
        chainType: l,
        caipNetwork: i == null ? void 0 : i.name,
        expectedChainTypeOnMount: h,
      }),
        h === "solana" &&
          l === "evm" &&
          !e.isConnected &&
          (n.isConnected || o.isConnected) &&
          (console.error(
            "❌ [WalletContext] CHAIN TYPE MISMATCH! Expected Solana but got EVM"
          ),
          console.error(
            "❌ This indicates localStorage corruption or improper restoration"
          ),
          console.error(
            "❌ Please disconnect and reconnect your Solana wallet"
          ));
    }, [
      e.isConnected,
      e.address,
      e.walletType,
      e.connectionSource,
      n.isConnected,
      n.address,
      o.isConnected,
      o.address,
      l,
      i == null ? void 0 : i.name,
      h,
    ]),
    V.useEffect(() => {
      if (!(!e.isConnected || e.connectionSource !== "direct")) {
        if (l === "solana") {
          const k = i == null ? void 0 : i.name;
          (k == null ? void 0 : k.toLowerCase().includes("solana")) ||
            (console.log(
              "🔄 Auto-switching to Solana network for direct Solana wallet connection"
            ),
            Re(() => Promise.resolve().then(() => ri), void 0).then((R) => {
              var x;
              const P =
                (x = R.networks) == null
                  ? void 0
                  : x.find((Z) => Z.name.toLowerCase().includes("solana"));
              P && r && r(P);
            }));
        } else if (l === "evm") {
          const k = i == null ? void 0 : i.name;
          (k == null ? void 0 : k.toLowerCase().includes("ethereum")) ||
            (k == null ? void 0 : k.toLowerCase().includes("sepolia")) ||
            (k == null ? void 0 : k.toLowerCase().includes("bnb")) ||
            (console.log(
              "🔄 Auto-switching to Ethereum network for direct EVM wallet connection"
            ),
            Re(() => Promise.resolve().then(() => ri), void 0).then((R) => {
              var x, Z;
              const P =
                ((x = R.networks) == null
                  ? void 0
                  : x.find(
                      (b) =>
                        b.name.toLowerCase().includes("ethereum") &&
                        !b.name.toLowerCase().includes("sepolia")
                    )) ||
                ((Z = R.networks) == null
                  ? void 0
                  : Z.find((b) => b.namespace === "eip155"));
              P && r && r(P);
            }));
        }
      }
    }, [e.isConnected, e.connectionSource, e.walletType, l, i, r]);
  const W = V.useCallback(async () => {
      console.log("🔌 User clicked disconnect"),
        s
          ? (s(), console.log("✅ User disconnect signal sent"))
          : console.error("❌ signalUserDisconnect is not available!");
      try {
        const k = e.connectionSource === "direct",
          T = (n.isConnected || o.isConnected) && !k;
        if (k)
          console.log("🔌 Disconnecting direct wallet connection..."),
            await e.disconnectWallet(),
            console.log("✅ Direct wallet disconnected");
        else if (T) {
          console.log("🔌 Disconnecting AppKit connection...");
          const { disconnectAllWallets: R } = await Re(async () => {
            const { disconnectAllWallets: P } = await Promise.resolve().then(
              () => ri
            );
            return { disconnectAllWallets: P };
          }, void 0);
          await R(), console.log("✅ AppKit disconnected (all adapters)");
        } else console.log("⚠️ No active connection to disconnect");
      } catch (k) {
        console.error("❌ Error disconnecting:", k);
        try {
          if (
            (e.connectionSource === "direct" && (await e.disconnectWallet()),
            n.isConnected || o.isConnected)
          ) {
            const { disconnectAllWallets: T } = await Re(async () => {
              const { disconnectAllWallets: R } = await Promise.resolve().then(
                () => ri
              );
              return { disconnectAllWallets: R };
            }, void 0);
            await T();
          }
        } catch (T) {
          console.error("❌ Error in forced cleanup:", T);
        }
      }
    }, [e, n.isConnected, o.isConnected, s]),
    _ = {
      isConnected: e.isConnected || n.isConnected || o.isConnected,
      address: e.address || n.address || o.address,
      walletType:
        e.walletType || (n.isConnected || o.isConnected ? "appkit" : null),
      chainType: l,
      provider: e.provider,
      isConnecting: e.isConnecting,
      error: e.error,
      connectWallet: e.connectWallet,
      disconnectWallet: W,
      clearError: e.clearError,
      isWagmiStable: u,
      _debug: {
        direct: {
          isConnected: e.isConnected,
          address: e.address,
          walletType: e.walletType,
          provider: e.provider,
          connectionSource: e.connectionSource,
        },
        appKit: { isConnected: n.isConnected, address: n.address },
        wagmi: { isConnected: o.isConnected, address: o.address },
        chainType: l,
      },
    };
  return ne.jsx(_l.Provider, { value: _, children: t });
}
function V0() {
  const t = V.useContext(_l);
  if (!t)
    throw new Error(
      "useWalletConnection must be used within WalletConnectionProvider"
    );
  return t;
}
const U0 = ({ size: t = "medium", className: e = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return ne.jsx("div", {
      className: `flex items-center justify-center ${e}`,
      children: ne.jsx("div", {
        className: `${n[t]} rounded-full border-2 border-[#d6fc70] border-t-transparent animate-spin`,
        role: "status",
        "aria-label": "Loading",
      }),
    });
  },
  F0 = V.memo(U0),
  H0 = ({
    height: t = "min-h-[200px]",
    width: e = "w-full",
    spinnerSize: n = "medium",
    showSpinner: o = !0,
    className: r = "",
  }) =>
    ne.jsx("div", {
      className: `${t} ${e} flex items-center justify-center ${r}`,
      "aria-hidden": "true",
      children: o && ne.jsx(F0, { size: n }),
    }),
  Z0 = V.memo(H0);
function K0({ name: t, prefix: e = "icon", color: n = "#333", ...o }) {
  const r = `#${e}-${t}`;
  return ne.jsx("svg", {
    ...o,
    "aria-hidden": "true",
    children: ne.jsx("use", { href: r, fill: n }),
  });
}
const Sc = V.memo(K0),
  q0 = ({
    type: t = "info",
    message: e,
    show: n,
    onClose: o,
    duration: r = 4e3,
  }) => {
    const [i, s] = V.useState(n);
    V.useEffect(() => {
      s(n);
      let u;
      return (
        n &&
          r > 0 &&
          (u = setTimeout(() => {
            s(!1), o && setTimeout(o, 300);
          }, r)),
        () => {
          u && clearTimeout(u);
        }
      );
    }, [n, r, o]);
    const l = (() => {
      switch (t) {
        case "success":
          return {
            bgColor: "bg-[#0D1F14]",
            borderColor: "border-[#62D387]",
            iconColor: "text-[#62D387]",
            icon: "checkmark",
            shadowColor: "shadow-[#62D387]/20",
          };
        case "error":
          return {
            bgColor: "bg-[#2A1215]",
            borderColor: "border-[#F87171]",
            iconColor: "text-[#F87171]",
            icon: "close",
            shadowColor: "shadow-[#F87171]/20",
          };
        case "warning":
          return {
            bgColor: "bg-[#2A2012]",
            borderColor: "border-[#FBBF24]",
            iconColor: "text-[#FBBF24]",
            icon: "warning",
            shadowColor: "shadow-[#FBBF24]/20",
          };
        default:
          return {
            bgColor: "bg-[#112331]",
            borderColor: "border-[#60A5FA]",
            iconColor: "text-[#60A5FA]",
            icon: "info",
            shadowColor: "shadow-[#60A5FA]/20",
          };
      }
    })();
    return ne.jsx(nd, {
      children:
        i &&
        ne.jsx(id.div, {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          className:
            "fixed top-6 left-0 right-0 z-[9999] flex justify-center px-4",
          children: ne.jsx("div", {
            className: `${l.bgColor} ${l.borderColor} border 
                       rounded-lg px-4 py-3 min-w-[200px] sm:min-w-[300px] max-w-[90vw] sm:max-w-md shadow-lg ${l.shadowColor}
                     backdrop-blur-lg`,
            children: ne.jsxs("div", {
              className: "flex items-center",
              children: [
                ne.jsx("div", {
                  className: `flex-shrink-0 ${l.iconColor}`,
                  children: ne.jsx(Sc, { className: "w-5 h-5", name: l.icon }),
                }),
                ne.jsx("div", {
                  className: "ml-3 mr-8 flex-grow",
                  children: ne.jsx("p", {
                    className: "text-white text-sm",
                    children: e,
                  }),
                }),
                ne.jsx("button", {
                  type: "button",
                  className: "text-white/60 hover:text-white transition-colors",
                  onClick: () => {
                    s(!1), o && setTimeout(o, 300);
                  },
                  children: ne.jsx(Sc, { className: "w-4 h-4", name: "close" }),
                }),
              ],
            }),
          }),
        }),
    });
  },
  Al = V.createContext(null),
  G0 = ({ children: t }) => {
    const [e, n] = V.useState([]),
      o = V.useCallback((p, h, m = 4e3) => {
        const g = Date.now() + Math.random();
        return n((W) => [...W, { id: g, type: p, message: h, duration: m }]), g;
      }, []),
      r = V.useCallback((p, h) => o("success", p, h), [o]),
      i = V.useCallback((p, h) => o("error", p, h), [o]),
      s = V.useCallback((p, h) => o("warning", p, h), [o]),
      a = V.useCallback((p, h) => o("info", p, h), [o]),
      l = V.useCallback((p) => {
        n((h) => h.filter((m) => m.id !== p));
      }, []),
      u = V.useCallback(() => {
        n([]);
      }, []);
    return ne.jsxs(Al.Provider, {
      value: {
        notifySuccess: r,
        notifyError: i,
        notifyWarning: s,
        notifyInfo: a,
        clearNotifications: u,
      },
      children: [
        t,
        e.map((p) =>
          ne.jsx(
            q0,
            {
              type: p.type,
              message: p.message,
              show: !0,
              onClose: () => l(p.id),
              duration: p.duration,
            },
            p.id
          )
        ),
      ],
    });
  },
  D3 = () => {
    const t = V.useContext(Al);
    if (!t)
      throw new Error(
        "useNotification must be used within a NotificationProvider"
      );
    return t;
  },
  Ec = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_API_URL: "https://b4ck.my/",
    VITE_BUILD_MEMORY_LIMIT: "6144",
    VITE_ERC_PAYMENT_ADDRESS: "0x50aA939DD22f62C04EC80f1DEbA0EFC0f58059D4",
    VITE_GA_MEASUREMENT_ID: "G-37XSSLY9N4",
    VITE_HOMEPAGE_URL: "https://deepsnitch.ai",
    VITE_LOGROCKET_APP_ID: "lulwek/production-qo0or",
    VITE_NODE_ENV: "production",
    VITE_PRESALE_ID: "687510cc7a9450a659e8d5d3",
    VITE_REOWN_PROJECT_ID: "7406013aa2d0fcb59220687ce55a9c21",
    VITE_RPC_URL_BSC:
      "https://still-cosmological-sanctuary.bsc.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
    VITE_RPC_URL_ETHEREUM:
      "https://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
    VITE_RPC_URL_SEPOLIA:
      "https://still-cosmological-sanctuary.ethereum-sepolia.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
    VITE_RPC_URL_SOLANA:
      "https://still-cosmological-sanctuary.solana-mainnet.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
    VITE_RPC_URL_SOLANA_DEVNET:
      "https://still-cosmological-sanctuary.solana-devnet.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
    VITE_SOL_PAYMENT_ADDRESS: "5u3p8EtqPm3NAu3PzSBTm6erAByqjSTQCAycnSDs687h",
    VITE_STAKING_CONTRACT: "0x5c84BceB9477A2BE971d95e15f97c150E19aB000",
    VITE_WEB_URL: "https://deepsnitch.ai",
    VITE_WERT_ORIGIN: "https://widget.wert.io",
    VITE_WERT_PARTNER_ID: "01K0DVGRA5ZAYSSFBNF41VDW7F",
    VITE_WERT_SC: "0x78055Fc04AdB18ab2122904529bb0E34DFd3710A",
    VITE_WSS_URL_ETHEREUM:
      "wss://still-cosmological-sanctuary.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
    VITE_WSS_URL_SEPOLIA:
      "wss://still-cosmological-sanctuary.ethereum-sepolia.quiknode.pro/b4b39f3c6861964047feaf6c275d0692700fc678",
  },
  Y0 = [
    "VITE_API_URL",
    "VITE_PRESALE_ID",
    "VITE_RPC_URL_SEPOLIA",
    "VITE_RPC_URL_ETHEREUM",
  ],
  Q0 = ["VITE_STAKING_CONTRACT", "VITE_LOGROCKET_APP_ID"],
  X0 = () => {
    const t = [],
      e = [];
    return (
      Y0.forEach((n) => {
        Ec[n] || t.push(n);
      }),
      Q0.forEach((n) => {
        Ec[n] || e.push(n);
      }),
      t.length > 0 &&
        (console.error("❌ Missing required environment variables:", t),
        console.error(
          "Please check your .env file and ensure all required variables are set."
        )),
      e.length > 0 &&
        (console.warn("⚠️  Missing optional environment variables:", e),
        console.warn(
          "Some features may not work correctly without these variables."
        )),
      t.length === 0 &&
        e.length === 0 &&
        console.log("✅ All environment variables are properly configured."),
      {
        isValid: t.length === 0,
        missing: t,
        warnings: e,
        hasWarnings: e.length > 0,
      }
    );
  };
class J0 {
  constructor() {
    (this.logs = []),
      (this.maxLogs = 1e3),
      (this.sessionId = this.generateSessionId()),
      (this.startTime = Date.now()),
      this.setupGlobalErrorHandlers(),
      this.interceptConsoleErrors(),
      this.interceptNetworkErrors(),
      this.setupPromiseRejectionHandler();
  }
  generateSessionId() {
    return (
      "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
    );
  }
  log(e, n, o = null, r = null) {
    const i = {
      timestamp: new Date().toISOString(),
      level: e,
      message: n,
      data: o,
      error: r
        ? { name: r.name, message: r.message, stack: r.stack, cause: r.cause }
        : null,
      sessionId: this.sessionId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      timeSinceStart: Date.now() - this.startTime,
    };
    this.logs.push(i),
      this.logs.length > this.maxLogs &&
        (this.logs = this.logs.slice(-this.maxLogs)),
      console.log(`[${e.toUpperCase()}] ${n}`, o || "", r || "");
  }
  setupGlobalErrorHandlers() {
    window.addEventListener("error", (e) => {
      this.log(
        "error",
        "JavaScript Error",
        {
          filename: e.filename,
          lineno: e.lineno,
          colno: e.colno,
          message: e.message,
        },
        e.error
      );
    }),
      window.addEventListener(
        "error",
        (e) => {
          e.target &&
            e.target !== window &&
            this.log("error", "Resource Loading Error", {
              tagName: e.target.tagName,
              src: e.target.src,
              href: e.target.href,
              type: e.target.type,
            });
        },
        !0
      ),
      window.addEventListener("unhandledrejection", (e) => {
        this.log(
          "error",
          "Unhandled Promise Rejection",
          { reason: e.reason },
          e.reason
        );
      });
  }
  interceptConsoleErrors() {
    const e = console.error,
      n = console.warn;
    (console.error = (...o) => {
      this.log("error", "Console Error", o), e.apply(console, o);
    }),
      (console.warn = (...o) => {
        this.log("warn", "Console Warning", o), n.apply(console, o);
      });
  }
  interceptNetworkErrors() {
    const e = window.fetch;
    window.fetch = async (...r) => {
      try {
        const i = await e(...r);
        return (
          i.ok ||
            this.log("error", "Fetch Error", {
              url: r[0],
              status: i.status,
              statusText: i.statusText,
            }),
          i
        );
      } catch (i) {
        throw (this.log("error", "Fetch Network Error", { url: r[0] }, i), i);
      }
    };
    const n = XMLHttpRequest.prototype.open,
      o = XMLHttpRequest.prototype.send;
    (XMLHttpRequest.prototype.open = function (...r) {
      return (this._xhrUrl = r[1]), n.apply(this, r);
    }),
      (XMLHttpRequest.prototype.send = function (...r) {
        return (
          this.addEventListener("error", () => {
            Ks.log("error", "XHR Error", {
              url: this._xhrUrl,
              status: this.status,
              statusText: this.statusText,
            });
          }),
          this.addEventListener("load", () => {
            this.status >= 400 &&
              Ks.log("error", "XHR Response Error", {
                url: this._xhrUrl,
                status: this.status,
                statusText: this.statusText,
              });
          }),
          o.apply(this, r)
        );
      });
  }
  setupPromiseRejectionHandler() {
    window.addEventListener("unhandledrejection", (e) => {
      this.log(
        "error",
        "Unhandled Promise Rejection",
        { reason: e.reason },
        e.reason
      );
    });
  }
  getLogs() {
    return this.logs;
  }
  downloadLogs() {
    const e = {
        sessionId: this.sessionId,
        startTime: new Date(this.startTime).toISOString(),
        endTime: new Date().toISOString(),
        totalLogs: this.logs.length,
        logs: this.logs,
        systemInfo: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          cookieEnabled: navigator.cookieEnabled,
          onLine: navigator.onLine,
          memory: navigator.memory
            ? {
                usedJSHeapSize: navigator.memory.usedJSHeapSize,
                totalJSHeapSize: navigator.memory.totalJSHeapSize,
                jsHeapSizeLimit: navigator.memory.jsHeapSizeLimit,
              }
            : null,
        },
      },
      n = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }),
      o = URL.createObjectURL(n),
      r = document.createElement("a");
    (r.href = o),
      (r.download = `error-logs-${this.sessionId}.json`),
      document.body.appendChild(r),
      r.click(),
      document.body.removeChild(r),
      URL.revokeObjectURL(o);
  }
  clearLogs() {
    this.logs = [];
  }
}
const Ks = new J0(),
  ep = [
    /SES.*removing.*unpermitted.*intrinsics/i,
    /lockdown.*install/i,
    /could not establish connection.*receiving end does not exist/i,
    /extension context invalidated/i,
    /message port closed/i,
    /\[phantom\].*error updating cache/i,
    /phantom.*connection.*error/i,
    /content.*script.*error/i,
    /chrome-extension.*error/i,
    /moz-extension.*error/i,
    /walletconnect.*session.*closed/i,
    /walletconnect.*transport.*closed/i,
    /trust.*wallet.*disconnected/i,
    /trust.*wallet.*connection.*lost/i,
  ],
  Ho = (t) => {
    if (!t) return !1;
    const e = t.message || t.toString() || "",
      n = t.stack || "",
      o = `${e} ${n}`;
    return ep.some((r) => r.test(o));
  },
  tp = console.error,
  np = console.warn,
  ip = () => {
    (console.error = (...t) => {
      const e = t.join(" ");
      Ho({ message: e }) || tp.apply(console, t);
    }),
      (console.warn = (...t) => {
        const e = t.join(" ");
        Ho({ message: e }) || np.apply(console, t);
      }),
      window.addEventListener("error", (t) => {
        if (Ho(t.error)) return t.preventDefault(), !1;
      }),
      window.addEventListener("unhandledrejection", (t) => {
        if (Ho(t.reason)) return t.preventDefault(), !1;
      });
  },
  M3 = () => {
    try {
      if (typeof window < "u") {
        const t = setTimeout(() => {}, 0);
        for (let n = 0; n < t; n++) clearTimeout(n);
        const e = [];
        for (let n = 0; n < localStorage.length; n++) {
          const o = localStorage.key(n);
          o !== "dsSnitch_direct_wallet_connection" &&
            o &&
            (o.includes("wallet") ||
              o.includes("phantom") ||
              o.includes("trust") ||
              o.includes("walletconnect")) &&
            (o.includes("temp") ||
              o.includes("cache") ||
              o.includes("connection")) &&
            e.push(o);
        }
        e.forEach((n) => {
          try {
            localStorage.removeItem(n);
          } catch {}
        });
      }
    } catch (t) {
      console.debug("Wallet cleanup completed with minor issues:", t);
    }
  };
if (typeof window < "u") {
  let t = function () {
    var e = document.body,
      n = document.getElementById("__svg__icons__dom__");
    n ||
      ((n = document.createElementNS("http://www.w3.org/2000/svg", "svg")),
      (n.style.position = "absolute"),
      (n.style.width = "0"),
      (n.style.height = "0"),
      (n.id = "__svg__icons__dom__"),
      n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
      n.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")),
      (n.innerHTML =
        '<symbol fill="none"  viewBox="0 0 48 48" id="icon-add"><g clip-path="url(#icon-add_a)"><path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4Z" fill="#D6FC70" /></g><defs><clipPath id="icon-add_a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-arr"><g clip-path="url(#icon-arr_a)"><path d="m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71Z" fill="#fff" /></g><defs><clipPath id="icon-arr_a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-arrow-down"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10.171c0 .292.127.582.373.78l6 4.828a1 1 0 0 0 1.267-.01l6-5a1 1 0 1 0-1.28-1.536l-5.371 4.474-5.362-4.315a1 1 0 0 0-1.627.78Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-arrow-f"><g clip-path="url(#icon-arrow-f_a)"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z" fill="#fff" /></g><defs><clipPath id="icon-arrow-f_a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-arrow-left"><g clip-path="url(#icon-arrow-left_a)"><path d="M28.5 19.5H11.745l7.32 7.32a1.512 1.512 0 0 1 0 2.13 1.494 1.494 0 0 1-2.115 0l-9.885-9.885a1.494 1.494 0 0 1 0-2.115l9.87-9.9a1.494 1.494 0 0 1 2.115 0c.585.585.585 1.53 0 2.115L11.745 16.5H28.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5Z" fill="#fff" /></g><defs><clipPath id="icon-arrow-left_a"><path fill="#fff" transform="matrix(-1 0 0 1 36 0)" d="M0 0h36v36H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-arrow-right-green"><g clip-path="url(#icon-arrow-right-green_a)"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z" fill="#D6FC70" /></g><defs><clipPath id="icon-arrow-right-green_a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-arrow-right"><g clip-path="url(#icon-arrow-right_a)"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z" fill="#fff" /></g><defs><clipPath id="icon-arrow-right_a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-cloes"><g clip-path="url(#icon-cloes_a)"><path d="M27.45 8.565a1.494 1.494 0 0 0-2.115 0L18 15.885 10.665 8.55a1.494 1.494 0 0 0-2.115 0 1.494 1.494 0 0 0 0 2.115L15.885 18 8.55 25.335a1.494 1.494 0 0 0 0 2.115c.585.585 1.53.585 2.115 0L18 20.115l7.335 7.335c.585.585 1.53.585 2.115 0a1.494 1.494 0 0 0 0-2.115L20.115 18l7.335-7.335c.57-.57.57-1.53 0-2.1Z" fill="#fff" fill-opacity=".4" /></g><defs><clipPath id="icon-cloes_a"><path fill="#fff" d="M0 0h36v36H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-close"><g clip-path="url(#icon-close_a)"><path d="M27.45 8.565a1.494 1.494 0 0 0-2.115 0L18 15.885 10.665 8.55a1.494 1.494 0 0 0-2.115 0 1.494 1.494 0 0 0 0 2.115L15.885 18 8.55 25.335a1.494 1.494 0 0 0 0 2.115c.585.585 1.53.585 2.115 0L18 20.115l7.335 7.335c.585.585 1.53.585 2.115 0a1.494 1.494 0 0 0 0-2.115L20.115 18l7.335-7.335c.57-.57.57-1.53 0-2.1Z" fill="#fff" fill-opacity=".4" /></g><defs><clipPath id="icon-close_a"><path fill="#fff" d="M0 0h36v36H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-coinbase"><path d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Z" fill="#0052FF" /><path d="M18.008 24.326A6.324 6.324 0 0 1 11.682 18a6.322 6.322 0 0 1 12.557-1.054h6.373C30.072 10.449 24.638 5.342 18 5.342 11.01 5.342 5.34 11.01 5.34 18c0 6.99 5.67 12.659 12.659 12.659 6.638 0 12.073-5.107 12.612-11.605h-6.38a6.314 6.314 0 0 1-6.224 5.272Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 221 42" id="icon-coincodex"><g clip-path="url(#icon-coincodex_a)"><path d="M46.705 35.852V7.778h4.64V42H27.11l19.596-6.148Z" fill="#fff" /><path d="M39.264 30.296V10.222L27.11 14.074V6.148L46.705 0v35.852L27.109 42v-7.926l12.155-3.778ZM17.68 39.926 24.236 42v-7.926l-9.576-2.963-5.894 6 8.914 2.815ZM12.155 10.222l12.081 3.852V6.148L4.641 0v23.63l7.514-4.519v-8.889Z" fill="#558DCA" /><path d="M17.68 39.926 8.766 37.11 3.978 42h20.258l-6.556-2.074ZM4.641 7.778H0v18.667l4.641-2.815V7.778Z" fill="#fff" /><path d="m24.236 42-6.556-2.074L24.236 42Z" fill="#057951" /><path d="m25.71 24.222-7.514-5.481L0 29.778V42l18.196-18.593 7.514 3.704 7.882-9.037.368 2.889 2.579-6.74-6.704 2.518 2.947.37-7.072 7.111ZM76.466 22.518c-.295-2-1.547-3.037-3.536-3.037-3.094 0-4.052 3.111-4.052 5.704 0 2.519.958 5.556 3.978 5.556 2.21 0 3.536-1.408 3.831-3.556h4.641c-.59 4.667-3.83 7.185-8.398 7.185-5.304 0-8.84-3.703-8.84-9.037 0-5.481 3.241-9.481 8.914-9.481 4.125 0 7.882 2.148 8.177 6.666h-4.715ZM92.452 15.852c5.525 0 9.061 3.703 9.061 9.26 0 5.555-3.536 9.258-9.061 9.258-5.452 0-8.988-3.703-8.988-9.259-.073-5.556 3.536-9.26 8.988-9.26Zm0 14.889c3.241 0 4.272-2.815 4.272-5.63s-.957-5.63-4.272-5.63c-3.242 0-4.2 2.815-4.2 5.63s.958 5.63 4.2 5.63ZM109.542 13.63h-4.788v-4h4.788v4Zm-4.788 2.74h4.788v17.556h-4.788V16.37ZM113.299 16.37h4.568v2.445h.073c1.253-2 3.315-2.889 5.304-2.889 5.083 0 6.409 2.889 6.409 7.26V34h-4.788V24c0-2.889-.81-4.296-3.094-4.296-2.578 0-3.683 1.481-3.683 5.037v9.185h-4.789V16.37ZM145.86 21.852c-.589-2.593-2.136-4.222-4.936-4.222-4.051 0-6.114 3.703-6.114 7.481 0 3.704 2.063 7.482 6.114 7.482 2.652 0 4.789-2.074 5.083-4.963h2.137c-.59 4.222-3.315 6.814-7.22 6.814-5.304 0-8.25-4.222-8.25-9.259s2.873-9.259 8.25-9.259c3.684 0 6.557 2 7.072 6h-2.136v-.074ZM166.708 25.185c0 5.037-2.873 9.26-8.251 9.26-5.378 0-8.251-4.223-8.251-9.26s2.873-9.259 8.251-9.259c5.378 0 8.251 4.222 8.251 9.26Zm-14.365 0c0 3.704 2.062 7.482 6.114 7.482s6.114-3.704 6.114-7.482c0-3.703-2.062-7.481-6.114-7.481s-6.114 3.703-6.114 7.481ZM185.198 33.926h-1.989v-3.333h-.074c-.884 2.296-3.683 3.851-6.188 3.851-5.304 0-7.808-4.296-7.808-9.259s2.504-9.26 7.808-9.26c2.579 0 5.157 1.334 6.041 3.853h.074V9.63h2.136v24.296Zm-8.251-1.333c4.494 0 6.115-3.852 6.115-7.482 0-3.63-1.621-7.481-6.115-7.481-4.051 0-5.746 3.852-5.746 7.481.074 3.704 1.695 7.482 5.746 7.482ZM190.502 25.704c0 3.11 1.621 6.889 5.746 6.889 3.094 0 4.788-1.852 5.451-4.519h2.137c-.884 4-3.242 6.296-7.588 6.296-5.525 0-7.882-4.296-7.882-9.259 0-4.593 2.357-9.26 7.882-9.26 5.599 0 7.809 4.89 7.661 9.853h-13.407Zm11.271-1.778c-.074-3.26-2.063-6.222-5.525-6.222s-5.378 3.037-5.746 6.222h11.271ZM211.571 24.815l-6.262-8.445h2.652l4.936 6.667 4.862-6.667h2.652l-6.262 8.37 6.777 9.112h-2.725l-5.452-7.408-5.377 7.408h-2.579l6.778-9.037Z" fill="#fff" /></g><defs><clipPath id="icon-coincodex_a"><path fill="#fff" d="M0 0h221v42H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 274 48" id="icon-coinmarketcap"><path d="M40.363 28.698c-.822.511-1.781.604-2.512.186-.913-.558-1.46-1.814-1.46-3.535v-5.256c0-2.512-.96-4.326-2.603-4.79-2.785-.838-4.886 2.65-5.662 3.953l-4.931 8.046v-9.907c-.046-2.279-.776-3.628-2.146-4.046-.913-.28-2.283-.14-3.607 1.907L6.438 33.209A20.14 20.14 0 0 1 4.2 24c0-10.837 8.538-19.628 18.994-19.628S42.189 13.162 42.189 24v.093c.091 2.093-.548 3.767-1.826 4.605ZM46.39 24v-.093C46.344 10.744 35.934 0 23.195 0 10.41 0 0 10.744 0 24c0 13.21 10.41 24 23.195 24 5.89 0 11.46-2.28 15.752-6.419a2.177 2.177 0 0 0 .091-3.07c-.776-.883-2.1-.93-2.967-.139l-.046.047c-3.47 3.348-8.127 5.255-12.921 5.255-5.617 0-10.64-2.511-14.11-6.511l9.909-16.186v7.488c0 3.582 1.37 4.744 2.511 5.07 1.142.326 2.877.093 4.749-2.93l5.433-8.977c.183-.28.32-.558.502-.744v4.558c0 3.349 1.324 6.046 3.607 7.349 2.055 1.209 4.658 1.07 6.804-.28 2.648-1.767 4.063-4.837 3.88-8.511Zm32.326-8.186c.548.326 1.05 1.116 1.05 1.814 0 1.116-.913 2.046-1.963 2.046-.274 0-.502-.093-.73-.14-1.233-.93-2.786-1.534-4.43-1.534-3.88 0-6.529 3.21-6.529 7.21s2.694 7.162 6.53 7.162c1.917 0 3.652-.79 4.93-2.046.32-.233.731-.373 1.142-.373 1.05 0 1.872.838 1.872 1.907 0 .698-.41 1.303-.913 1.628-1.872 1.628-4.383 2.698-6.986 2.698-5.935 0-10.775-4.977-10.775-11.116 0-6.14 4.84-11.117 10.775-11.117 2.192-.046 4.292.652 6.027 1.861Zm10.867 4.651c4.064 0 7.442 3.488 7.442 7.814 0 4.28-3.424 7.954-7.442 7.954-4.246 0-7.762-3.628-7.762-7.954s3.516-7.814 7.762-7.814Zm-.046 11.907c1.781 0 3.288-1.72 3.288-4.046 0-2.326-1.507-3.814-3.288-3.814-1.917 0-3.515 1.441-3.515 3.814 0 2.279 1.598 4.046 3.515 4.046Zm10.045 1.442V22.837c0-1.21.914-2.186 2.101-2.186 1.141 0 2.1.977 2.1 2.186v10.977c0 1.21-.959 2.186-2.1 2.186-1.142 0-2.1-1.023-2.1-2.186Zm-.32-17.302c0-1.442 1.097-2.559 2.421-2.559 1.369 0 2.465 1.163 2.465 2.559 0 1.395-1.096 2.511-2.465 2.511a2.5 2.5 0 0 1-2.42-2.511ZM111.82 27.86v5.954c0 1.21-.959 2.186-2.1 2.186-1.142 0-2.101-.977-2.101-2.186V22.326c0-.93.731-1.675 1.644-1.675.913 0 1.598.79 1.598 1.675 1.69-1.628 3.196-1.86 4.612-1.86 4.2 0 6.072 3.208 6.072 6.883v6.465c0 1.21-.958 2.186-2.1 2.186-1.141 0-2.1-.977-2.1-2.186V27.86c0-1.86-.229-3.441-2.877-3.441-1.872 0-2.648 1.581-2.648 3.441Zm23.332 2.28c-.502 0-.822-.233-1.096-.559l-4.886-5.395v9.628c0 1.21-.958 2.186-2.1 2.186-1.141 0-2.1-.977-2.1-2.186v-19.07c.137-.325.456-.558.776-.558.365 0 .685.326.913.558l7.808 8.93c.228.28.502.419.685.419.137 0 .456-.14.685-.419l7.807-8.93c.229-.232.503-.558.914-.558.365 0 .684.233.776.558v19.07c0 1.21-.913 2.186-2.101 2.186-1.141 0-2.1-.977-2.1-2.186v-9.628l-4.885 5.395c-.366.326-.685.559-1.096.559Zm20.181 2.232c1.872 0 3.47-1.72 3.47-4.046 0-2.326-1.644-3.86-3.47-3.86-1.826 0-3.333 1.58-3.333 3.86 0 2.232 1.461 4.046 3.333 4.046Zm4.475 1.954-.092-.512c-.821 1.628-3.424 2.372-5.068 2.372-3.926 0-6.849-3.628-6.849-7.953 0-4.28 2.968-7.814 7.078-7.814.684 0 3.059.186 4.885 2.372l.091-.512c0-.93.685-1.674 1.598-1.674.914 0 1.644.79 1.644 1.674v12c0 .93-.73 1.674-1.644 1.674-.958.047-1.643-.744-1.643-1.627Zm14.839-9.907h-.457c-2.648.14-3.15 1.674-3.15 3.441v5.954c0 1.21-.959 2.186-2.1 2.186-1.142 0-2.101-.977-2.101-2.186V22.326c0-.93.731-1.675 1.644-1.675.913 0 1.598.79 1.598 1.675 1.552-1.489 2.831-1.814 4.109-1.86h.411c1.005 0 1.918.883 1.918 2 .046 1.022-.868 1.953-1.872 1.953Zm16.209 8.372c.183.325.319.65.319 1.023 0 1.116-1.004 2.14-2.1 2.14-.73 0-1.37-.559-1.872-1.21l-4.84-5.72v4.743c0 1.21-.959 2.186-2.1 2.186-1.142 0-2.1-.976-2.1-2.186V16.326c0-1.21.913-2.187 2.1-2.187s2.1.977 2.1 2.187v10.883l4.84-5.442c.502-.558 1.096-1.162 1.827-1.162 1.05 0 2.009.976 2.009 2.093 0 .325-.092.697-.274.976l-3.836 4.28 3.927 4.837Zm8.219-8.326c-1.142 0-3.014.605-3.014 2.419h6.073c-.046-1.814-1.964-2.419-3.059-2.419Zm5.479 5.163h-8.493c0 2.558 2.42 2.977 3.47 2.977.776 0 1.872-.14 2.74-.558a2.04 2.04 0 0 1 1.095-.326c.914 0 1.69.79 1.69 1.767 0 .651-.411 1.21-.913 1.535-1.279.977-2.968 1.21-4.566 1.21-4.247 0-7.762-2.326-7.762-7.768 0-4.279 2.146-8 7.168-8 4.064 0 7.123 2.698 7.214 7.488 0 .884-.73 1.675-1.643 1.675Zm11.688 6.558H215.1c-3.196 0-5.068-1.442-5.068-6.512V24.42h-1.096c-1.005 0-1.872-.93-1.872-1.954 0-1.116.913-2 1.872-2h1.096V16.42c0-1.21.913-2.186 2.1-2.186 1.141 0 2.1.976 2.1 2.186v4.046h1.735c1.005 0 1.872.884 1.872 2 0 1.023-.913 1.954-1.872 1.954h-1.735v4.418c0 2.93.137 3.535 1.416 3.535h.593c1.005 0 1.872.837 1.872 1.907 0 1.023-.867 1.907-1.872 1.907Zm20.319-20.372c.547.326 1.05 1.116 1.05 1.814 0 1.116-.913 2.046-1.964 2.046-.274 0-.502-.093-.73-.14-1.233-.93-2.785-1.534-4.429-1.534-3.881 0-6.529 3.21-6.529 7.21s2.694 7.162 6.529 7.162c1.918 0 3.653-.79 4.931-2.046.32-.233.731-.373 1.142-.373 1.05 0 1.872.838 1.872 1.907 0 .698-.411 1.303-.914 1.628-1.872 1.628-4.383 2.698-6.985 2.698-5.936 0-10.776-4.977-10.776-11.116 0-6.14 4.84-11.117 10.776-11.117a10.091 10.091 0 0 1 6.027 1.861Zm10.638 16.558c1.872 0 3.47-1.72 3.47-4.046 0-2.326-1.644-3.86-3.47-3.86-1.872 0-3.333 1.58-3.333 3.86 0 2.232 1.507 4.046 3.333 4.046Zm4.475 1.954-.092-.512c-.821 1.628-3.424 2.372-5.068 2.372-3.926 0-6.849-3.628-6.849-7.953 0-4.28 2.968-7.814 7.078-7.814.684 0 3.059.186 4.885 2.372l.091-.512c0-.93.685-1.674 1.598-1.674.914 0 1.644.79 1.644 1.674v12c0 .93-.73 1.674-1.644 1.674-.958.047-1.643-.744-1.643-1.627Zm14.748-1.954c1.872 0 3.333-1.814 3.333-4.046 0-2.326-1.507-3.86-3.333-3.86-1.872 0-3.47 1.534-3.47 3.86 0 2.325 1.598 4.046 3.47 4.046Zm-3.47 2.558v5.442c0 1.21-.959 2.186-2.101 2.186-1.141 0-2.1-.977-2.1-2.186V22.326c0-.93.73-1.675 1.644-1.675.913 0 1.598.79 1.598 1.86 1.552-1.627 3.47-2.046 4.931-2.046 4.064 0 7.077 3.488 7.077 7.814 0 4.28-2.877 7.954-6.849 7.954-1.233-.047-3.059-.419-4.2-1.303Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 198 50" id="icon-coinspeaker"><path d="M10.657 15.375c-1.419 0-2.54.62-3.3 1.825-.791 1.206-1.187 2.893-1.187 5.028 0 4.442 1.617 6.68 4.85 6.68.99 0 1.914-.172 2.87-.413.891-.275 1.848-.62 2.772-1.033v5.303c-1.847.827-3.96 1.24-6.269 1.24-3.365 0-5.906-.999-7.654-3.03C.989 28.942 0 26.014 0 22.192c0-2.41.462-4.51 1.32-6.336.858-1.825 2.111-3.202 3.695-4.2 1.584-1 3.564-1.481 5.708-1.481 2.409 0 4.652.516 6.863 1.618l-1.848 4.924c-.791-.413-1.65-.723-2.441-.998a9.757 9.757 0 0 0-2.64-.345Zm26.297 9.332c0 2.927-.759 5.235-2.244 6.853-1.517 1.618-3.596 2.445-6.302 2.445-2.705 0-4.652-.827-6.203-2.514-1.55-1.687-2.31-3.926-2.31-6.818 0-2.893.76-5.165 2.244-6.818 1.518-1.619 3.663-2.445 6.368-2.445 1.716 0 3.168.379 4.455 1.102 1.32.723 2.309 1.825 3.002 3.236.66 1.447.99 3.065.99 4.96Zm-11.12 0c0 1.515.199 2.72.595 3.513.396.792 1.055 1.205 2.012 1.205.891 0 1.551-.413 1.947-1.205.396-.827.56-1.997.56-3.513 0-1.515-.197-2.651-.56-3.443-.396-.792-1.056-1.137-1.947-1.137-.89 0-1.55.38-1.946 1.137-.462.723-.66 1.86-.66 3.443Zm20.457 8.988h-5.906V15.788h5.906v17.907Zm-6.07-22.383c0-.93.263-1.618.758-2.1.495-.483 1.32-.69 2.409-.69 1.089 0 1.913.207 2.408.69.495.482.76 1.136.76 2.031 0 1.825-1.057 2.72-3.168 2.72-2.112.07-3.168-.826-3.168-2.651Zm21.05 22.383v-9.78c0-1.205-.165-2.1-.495-2.651-.297-.62-.858-.93-1.55-.93-.99 0-1.716.413-2.145 1.24-.462.826-.66 2.238-.66 4.304v7.851h-5.906V15.823h4.454l.759 2.204h.363a4.626 4.626 0 0 1 2.111-1.894c.891-.413 1.914-.62 3.102-.62 1.913 0 3.365.586 4.421 1.722 1.056 1.136 1.617 2.79 1.617 4.855v11.674h-6.005l-.066-.07Zm23.228-5.475c0 1.928-.594 3.34-1.848 4.339-1.254.998-3.068 1.48-5.41 1.48-1.255 0-2.344-.069-3.3-.206a14.885 14.885 0 0 1-2.87-.792v-4.96c.89.414 1.913.793 3.002 1.034 1.089.276 2.045.413 2.97.413 1.319 0 1.913-.31 1.913-.93 0-.31-.198-.585-.561-.826-.363-.241-1.419-.723-3.102-1.48-1.55-.69-2.672-1.413-3.3-2.308-.593-.895-.956-1.928-.956-3.306 0-1.687.594-2.995 1.848-3.856 1.254-.93 2.97-1.412 5.213-1.412 1.155 0 2.21.172 3.167.413.99.276 2.046.62 3.102 1.102l-1.617 3.96a14.6 14.6 0 0 0-2.507-.93c-.891-.275-1.617-.413-2.145-.413-.957 0-1.452.275-1.452.723 0 .31.165.585.495.792.33.207 1.32.62 2.97 1.309 1.188.516 2.111 1.033 2.672 1.515a4.32 4.32 0 0 1 1.32 1.79c.231.758.396 1.55.396 2.549Zm13.56 5.785c-.857 0-1.649-.172-2.342-.413-.692-.31-1.353-.827-2.045-1.619h-.265c.199 1.24.265 2.032.265 2.342v7.162h-5.907V15.79h4.817l.859 2.307h.263c1.09-1.722 2.607-2.617 4.554-2.617 1.946 0 3.398.826 4.454 2.445 1.089 1.618 1.616 3.925 1.616 6.749s-.561 5.165-1.715 6.852c-1.122 1.653-2.64 2.48-4.554 2.48ZM96.08 20.3c-.858 0-1.518.31-1.847.998-.364.62-.561 1.619-.561 2.893v.482c0 1.515.197 2.651.593 3.34.396.689.99 1.033 1.848 1.033.76 0 1.32-.31 1.65-.998.362-.69.495-1.825.495-3.41 0-1.584-.165-2.617-.495-3.305-.33-.689-.89-1.033-1.683-1.033Zm19.929 13.705c-2.871 0-5.048-.792-6.665-2.342-1.551-1.584-2.342-3.857-2.342-6.818 0-2.961.758-5.337 2.21-6.956 1.451-1.618 3.563-2.445 6.268-2.445 2.707 0 4.554.689 5.972 2.1 1.42 1.413 2.112 3.41 2.112 6.061v2.79h-10.591c.066.998.396 1.79 1.056 2.341.659.586 1.551.827 2.706.827 1.056 0 2.013-.104 2.869-.31.892-.207 1.815-.586 2.872-1.033v4.442a12 12 0 0 1-2.872 1.033c-1.021.206-2.242.31-3.595.31Zm-.329-14.325c-.694 0-1.321.206-1.75.689-.462.482-.759 1.136-.792 2.134h5.114c0-.895-.264-1.584-.692-2.1-.528-.448-1.155-.723-1.88-.723Zm22.402 14.015-1.154-2.342h-.1c-.792 1.033-1.617 1.722-2.441 2.1-.858.38-1.914.586-3.2.586-1.618 0-2.904-.516-3.796-1.515-.956-.999-1.418-2.445-1.418-4.304 0-1.86.66-3.34 1.914-4.236 1.253-.93 3.101-1.48 5.51-1.584l2.87-.103v-.276c0-1.48-.692-2.204-2.111-2.204-1.254 0-2.871.414-4.752 1.309l-1.715-4.098c2.012-1.102 4.52-1.618 7.555-1.618 2.211 0 3.927.585 5.115 1.722 1.187 1.136 1.814 2.72 1.814 4.752v11.708h-4.057l-.034.103Zm-4.355-4.063c.692 0 1.32-.276 1.848-.724a2.476 2.476 0 0 0 .759-1.825v-1.411l-1.353.068c-1.946.07-2.904.827-2.904 2.239-.065 1.136.495 1.653 1.65 1.653Zm18.245-6.027a25.216 25.216 0 0 1 1.848-2.789l3.86-5.062h6.633L158.34 23.4l6.303 10.296h-6.765l-3.76-6.44-1.915 1.516v4.855h-5.972V9.039h5.972v9.676c0 1.688-.098 3.306-.362 4.856h.131v.034Zm22.998 10.4c-2.871 0-5.048-.792-6.665-2.342-1.551-1.584-2.343-3.857-2.343-6.818 0-2.961.76-5.337 2.211-6.956 1.452-1.618 3.563-2.445 6.27-2.445 2.705 0 4.551.689 5.971 2.1 1.419 1.413 2.111 3.41 2.111 6.061v2.79h-10.624c.066.998.396 1.79 1.056 2.341.661.586 1.551.827 2.705.827 1.057 0 2.013-.104 2.872-.31.89-.207 1.813-.586 2.869-1.033v4.442a11.98 11.98 0 0 1-2.869 1.033c-.991.206-2.212.31-3.564.31Zm-.363-14.325c-.693 0-1.321.206-1.748.689-.463.482-.76 1.136-.792 2.134h5.114c0-.895-.264-1.584-.694-2.1-.527-.448-1.121-.723-1.88-.723Zm21.578-4.236c.496 0 .99.069 1.452.103l.363.07-.561 5.819a9.609 9.609 0 0 0-2.013-.207c-1.319 0-2.244.31-2.804.93-.594.62-.891 1.515-.891 2.652v8.78h-5.905V15.686h4.42l.892 2.893h.296a6.43 6.43 0 0 1 2.046-2.307c.957-.517 1.848-.827 2.705-.827Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-copy"><path d="M9 18c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 7 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 9 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 18H9Zm0-2h9V4H9v12Zm-4 6c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 20V7c0-.283.096-.521.288-.713A.967.967 0 0 1 4 6a.97.97 0 0 1 .713.287A.97.97 0 0 1 5 7v13h10c.283 0 .521.096.713.288A.967.967 0 0 1 16 21c0 .283-.096.52-.287.712A.968.968 0 0 1 15 22H5Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 237 47" id="icon-cryptonews"><path d="M59.282 21.582a6.737 6.737 0 0 0-.285 1.943c0 .636.094 1.26.285 1.873.19.613.482 1.163.874 1.658.393.495.886.895 1.48 1.202.595.306 1.298.457 2.106.457.833 0 1.592-.158 2.283-.477a5.19 5.19 0 0 0 1.748-1.29l2.499 2.685a9.053 9.053 0 0 1-2.784 1.978c-1.069.495-2.321.741-3.746.741-1.425 0-2.7-.214-3.82-.636-1.118-.425-2.06-1.025-2.822-1.802a7.786 7.786 0 0 1-1.748-2.792c-.406-1.081-.606-2.282-.606-3.602 0-1.201.218-2.337.66-3.408a8.645 8.645 0 0 1 1.839-2.807 8.705 8.705 0 0 1 2.837-1.908c1.107-.47 2.326-.706 3.657-.706 1.357 0 2.594.24 3.714.723 1.117.483 2.07 1.136 2.855 1.96L67.63 20.06a5.241 5.241 0 0 0-1.676-1.272c-.642-.304-1.379-.457-2.215-.457-.807 0-1.51.148-2.105.442a4.516 4.516 0 0 0-1.481 1.146 4.746 4.746 0 0 0-.871 1.664Zm21.739-6.64c-.69 0-1.303.083-1.839.246a6.863 6.863 0 0 0-1.41.6 5.554 5.554 0 0 0-1.051.778c-.3.281-.541.54-.732.776l-.106-2.083h-4.036v16.565h4.214V22.89c0-.61.111-1.166.34-1.659.226-.495.528-.92.91-1.271a3.946 3.946 0 0 1 1.355-.812 4.8 4.8 0 0 1 1.641-.282c.407 0 .757.023 1.052.07.297.048.589.131.874.247l.855-3.92a5.244 5.244 0 0 0-.98-.247 7.424 7.424 0 0 0-1.087-.073Zm12.35 11.657L88.586 15.26h-4.853l7.53 16.425-.535 1.342c-.407.99-.79 1.72-1.159 2.192-.368.47-.838.706-1.41.706-.429 0-.784-.088-1.069-.264a8.391 8.391 0 0 1-.784-.548l-1.893 2.93a5.26 5.26 0 0 0 1.659.936c.63.224 1.42.337 2.372.337 1.092 0 2-.237 2.713-.707a6.35 6.35 0 0 0 1.803-1.82 12.69 12.69 0 0 0 1.232-2.417c.333-.872.665-1.72 1-2.544l6.998-16.565h-4.605L93.37 26.599Zm26.556-6.183c.308 1.036.463 2.109.463 3.215 0 1.294-.191 2.402-.572 3.32a9.212 9.212 0 0 1-1.427 2.403c-.953 1.13-1.994 1.917-3.124 2.367a9.382 9.382 0 0 1-3.48.671c-.549 0-1.018-.022-1.41-.07a8.035 8.035 0 0 1-1.96-.475c-.275-.106-.567-.216-.874-.337v7.382h-4.176V15.259h4.069l.107 1.872c.213-.236.482-.483.802-.741a5.844 5.844 0 0 1 1.143-.707 7.682 7.682 0 0 1 3.373-.742c1.286 0 2.396.247 3.338.742a6.98 6.98 0 0 1 2.339 1.96 8.642 8.642 0 0 1 1.389 2.773Zm-3.784 3.217c0-.706-.079-1.365-.234-1.978a4.525 4.525 0 0 0-.749-1.608 3.734 3.734 0 0 0-1.338-1.096c-.549-.272-1.225-.407-2.035-.407a3.73 3.73 0 0 0-1.747.407 4.502 4.502 0 0 0-1.339 1.04 4.843 4.843 0 0 0-.856 1.395 3.972 3.972 0 0 0-.302 1.466v4.908c.833.684 2.093 1.026 3.784 1.026.762 0 1.44-.149 2.035-.443a4.797 4.797 0 0 0 1.519-1.166c.416-.482.731-1.03.944-1.641a5.783 5.783 0 0 0 .318-1.903Zm15.725 4.909c-.392.188-.922.281-1.588.281-.714 0-1.232-.254-1.552-.759-.32-.505-.48-1.229-.48-2.171v-7.241h4.498v-3.39h-4.498v-5.37h-4.213v5.37h-2.855v3.39h2.855v7.525c0 .92.093 1.762.284 2.523.19.767.505 1.42.945 1.96.439.543 1.018.96 1.732 1.255.714.294 1.582.442 2.606.442 1.001 0 1.905-.148 2.713-.442.807-.294 1.63-.782 2.461-1.466l-1.783-2.58a7.366 7.366 0 0 1-1.125.673Zm20.408-8.425c.439 1.073.66 2.21.66 3.408a8.897 8.897 0 0 1-.66 3.408 8.82 8.82 0 0 1-1.839 2.825c-.785.815-1.732 1.456-2.837 1.925-1.108.47-2.327.707-3.658.707-1.333 0-2.552-.236-3.657-.707a8.535 8.535 0 0 1-2.837-1.925 8.915 8.915 0 0 1-2.499-6.233 8.84 8.84 0 0 1 .66-3.408 8.63 8.63 0 0 1 1.839-2.808 8.706 8.706 0 0 1 2.837-1.907c1.105-.47 2.326-.706 3.657-.706s2.55.236 3.658.706c1.107.472 2.052 1.106 2.837 1.908a8.7 8.7 0 0 1 1.839 2.807Zm-3.586 3.41c0-.588-.094-1.196-.285-1.82a5.285 5.285 0 0 0-.874-1.696 4.552 4.552 0 0 0-1.48-1.236c-.595-.32-1.298-.478-2.106-.478-.81 0-1.511.159-2.106.478a4.594 4.594 0 0 0-1.48 1.236 5.225 5.225 0 0 0-.874 1.697 6.201 6.201 0 0 0-.285 1.82c0 .61.094 1.224.285 1.834.19.611.482 1.18.874 1.697.393.518.886.935 1.48 1.252.595.319 1.298.477 2.106.477.808 0 1.511-.158 2.106-.477a4.483 4.483 0 0 0 1.48-1.252 5.437 5.437 0 0 0 .874-1.697 6.22 6.22 0 0 0 .285-1.834Zm23.235-8.62c-.668 0-1.263.07-1.786.21-.523.142-.995.325-1.41.549a5.739 5.739 0 0 0-1.069.724c-.3.258-.554.507-.767.741l-.107-1.872h-4.033v16.565h4.214v-8.973c0-.61.101-1.183.305-1.714.2-.53.482-.992.838-1.395a3.709 3.709 0 0 1 1.285-.934 3.893 3.893 0 0 1 1.608-.337c.929 0 1.684.286 2.265.864.585.578.874 1.395.874 2.456v10.03h4.214V21.757c0-2.094-.546-3.763-1.641-4.997-1.1-1.234-2.697-1.852-4.79-1.852Zm24.594 5.828c.284 1.131.429 2.285.429 3.461v.6h-12.491c0 .612.137 1.167.411 1.66.274.495.63.92 1.069 1.271.44.352.94.624 1.499.812a5.167 5.167 0 0 0 1.659.282c.807 0 1.516-.078 2.125-.232a8.59 8.59 0 0 0 1.552-.53c.427-.2.78-.412 1.052-.636.274-.223.483-.407.625-.548l2.283 2.544-.589.583c-.323.32-.785.654-1.392 1.008-.607.352-1.379.671-2.321.952-.94.282-2.065.425-3.374.425-1.333 0-2.547-.224-3.639-.67-1.095-.448-2.03-1.066-2.802-1.856-.774-.789-1.369-1.736-1.785-2.842-.417-1.106-.625-2.33-.625-3.675 0-1.224.208-2.36.625-3.408.416-1.048 1-1.96 1.747-2.737a8.136 8.136 0 0 1 2.677-1.835c1.037-.445 2.182-.67 3.444-.67 1.522 0 2.815.276 3.874.829 1.059.555 1.91 1.276 2.55 2.171a8.912 8.912 0 0 1 1.397 3.041Zm-3.891 1.058a3.574 3.574 0 0 0-.981-2.418 3.78 3.78 0 0 0-1.232-.846c-.5-.224-1.069-.337-1.714-.337-.691 0-1.303.11-1.839.337a4.38 4.38 0 0 0-1.339.846c-.358.34-.629.727-.822 1.147a3.071 3.071 0 0 0-.285 1.271h8.212Zm25.701-6.532-3.177 11.514-3.569-11.514h-3.533l-3.533 11.514-3.216-11.514h-4.64l5.674 16.566h3.927l3.32-9.996 3.426 9.996h4.069l5.677-16.566h-4.425Zm18.275 9.838a4.37 4.37 0 0 0-1.125-1.503 6.333 6.333 0 0 0-1.748-1.059 13.634 13.634 0 0 0-2.304-.706c-1.379-.33-2.397-.64-3.05-.935-.655-.294-.98-.701-.98-1.219 0-.425.195-.782.589-1.078.394-.294 1.087-.442 2.088-.442 1 0 1.867.135 2.606.407.736.271 1.331.57 1.785.9l2.177-2.931a9.02 9.02 0 0 0-2.802-1.377c-1.036-.305-2.291-.458-3.764-.458-.833 0-1.658.118-2.481.352-.821.236-1.56.57-2.215 1.008a5.346 5.346 0 0 0-1.588 1.623c-.406.649-.607 1.383-.607 2.21 0 .799.173 1.488.519 2.066a5.206 5.206 0 0 0 1.32 1.483 6.718 6.718 0 0 0 1.733.97 14.65 14.65 0 0 0 1.785.563c.93.213 1.666.412 2.215.6.546.189.975.378 1.285.566.307.189.513.384.607.583.094.199.142.417.142.654 0 .543-.274.93-.82 1.163-.549.236-1.273.352-2.177.352-1.023 0-1.933-.17-2.73-.513-.798-.341-1.458-.771-1.981-1.289l-2.535 2.72c.762.846 1.773 1.487 3.035 1.925 1.262.435 2.677.653 4.247.653a10.1 10.1 0 0 0 2.766-.37 7.817 7.817 0 0 0 2.283-1.04 5.072 5.072 0 0 0 1.552-1.641c.381-.648.569-1.372.569-2.172-.005-.799-.135-1.488-.396-2.066Zm-79.426 1.852c-1.361 0-2.461 1.09-2.461 2.435 0 1.347 1.102 2.436 2.461 2.436 1.359 0 2.461-1.091 2.461-2.436.003-1.344-1.1-2.435-2.461-2.435Z" fill="#fff" /><path d="M23.748 0C10.635 0 0 10.524 0 23.5 0 36.477 10.635 47 23.748 47c13.114 0 23.748-10.523 23.748-23.5C47.496 10.524 36.864 0 23.748 0Zm0 30.643a7.24 7.24 0 0 0 5.966-3.124 1.778 1.778 0 0 1 2.457-.46 1.738 1.738 0 0 1 .464 2.43 10.785 10.785 0 0 1-8.89 4.655c-5.928 0-10.75-4.773-10.75-10.636 0-5.867 4.822-10.64 10.75-10.64 3.56 0 6.884 1.74 8.89 4.655.552.8.34 1.888-.464 2.43a1.779 1.779 0 0 1-2.456-.46 7.233 7.233 0 0 0-5.967-3.123c-3.977 0-7.213 3.202-7.213 7.137 0 3.934 3.236 7.136 7.213 7.136ZM13.5 33.29c2.677 2.742 6.273 4.272 10.124 4.307 3.86.028 7.472-1.432 10.195-4.127 2.69-2.661 4.173-6.2 4.173-9.962 0-3.765-1.48-7.304-4.173-9.963-5.552-5.495-14.587-5.495-20.142 0-3.42 3.385-4.866 8.208-3.86 12.9a.748.748 0 0 1-.584.888.755.755 0 0 1-.897-.578c-1.112-5.19.485-10.526 4.27-14.274 6.144-6.08 16.138-6.08 22.282 0 6.144 6.08 6.144 15.97 0 22.05-2.979 2.948-6.931 4.567-11.137 4.567h-.142c-4.26-.038-8.237-1.73-11.199-4.763a.745.745 0 0 1 .02-1.06.756.756 0 0 1 1.07.015Zm-1.52-2.886c0 .83-.677 1.5-1.516 1.5a1.508 1.508 0 0 1-1.516-1.5c0-.83.678-1.5 1.516-1.5.839 0 1.517.67 1.517 1.5ZM33.109 5.157c.838 0 1.516.671 1.516 1.5 0 .83-.678 1.501-1.516 1.501a1.508 1.508 0 0 1-1.516-1.5c.002-.83.68-1.5 1.516-1.5Zm4.912 32.468c-3.812 3.773-8.882 5.849-14.27 5.849-5.391 0-10.459-2.079-14.271-5.849-3.812-3.772-5.91-8.79-5.91-14.122 0-5.334 2.1-10.35 5.91-14.123 4.97-4.919 11.846-6.87 18.859-5.354a.746.746 0 0 1 .576.893.754.754 0 0 1-.901.57c-6.5-1.405-12.868.397-17.465 4.946-3.525 3.49-5.466 8.129-5.466 13.062 0 4.934 1.94 9.574 5.466 13.063 3.526 3.488 8.214 5.408 13.2 5.408 4.986 0 9.675-1.923 13.2-5.409 3.526-3.488 5.466-8.128 5.466-13.061 0-4.904-2.027-9.695-5.557-13.148a.742.742 0 0 1-.005-1.06.761.761 0 0 1 1.072-.006c3.817 3.733 6.007 8.913 6.007 14.213.002 5.339-2.098 10.356-5.91 14.128Z" fill="#0D7FC3" /></symbol><symbol fill="none"  viewBox="0 0 227 33" id="icon-cryptonomist"><g clip-path="url(#icon-cryptonomist_a)"><path d="M80.64 11.286c.228.35.333.719.333 1.122 0 .49-.14.929-.44 1.262-.298.35-.685.525-1.178.525-.422 0-.774-.14-1.073-.402-.3-.263-.44-.614-.44-1.07 0-.613.317-1.139.968-1.542-.124-.175-.335-.28-.598-.28-.757 0-1.425.28-2.023.858a6.261 6.261 0 0 0-1.425 2.121c-.352.841-.528 1.63-.528 2.366v6.011c0 .876.246 1.49.756 1.823.493.333 1.25.508 2.27.508v.596c-2.34-.07-3.8-.105-4.38-.105-.51 0-1.62.035-3.36.105v-.596c.527 0 .967-.053 1.266-.175.317-.123.528-.333.686-.614.14-.298.211-.7.211-1.226V13.67c0-.877-.158-1.507-.475-1.91-.316-.403-.88-.596-1.689-.596v-.596c.599.052 1.179.087 1.76.087 1.196 0 2.198-.122 2.955-.385v3.54c.211-.596.528-1.157.915-1.718a5.08 5.08 0 0 1 1.442-1.367c.563-.367 1.144-.543 1.76-.543.492 0 .95.105 1.336.298.405.193.722.456.95.806Zm10.237-.718v.56c.74.053 1.285.176 1.619.386.334.21.51.543.51.982 0 .315-.106.753-.3 1.296l-3.148 8.22-3.43-8.482c-.247-.596-.37-1.052-.37-1.402 0-.298.088-.526.264-.666.176-.14.387-.228.651-.263a8.635 8.635 0 0 1 1.09-.053v-.578c-1.653.123-2.884.175-3.694.175-.967 0-1.9-.053-2.797-.175v.596c.317 0 .651.105.968.298.317.21.633.63.968 1.279l5.171 12.373-1.02 2.593c-.563 1.473-1.372 2.209-2.427 2.209-.07 0-.124-.018-.176-.035.51-.28.756-.719.756-1.28 0-.42-.14-.753-.405-.981a1.58 1.58 0 0 0-1.037-.35c-.475 0-.845.14-1.109.402-.264.28-.404.631-.404 1.087 0 .543.176.946.545 1.262.37.298.827.456 1.39.456.95 0 1.688-.246 2.234-.737.457-.403.862-1.069 1.214-1.997l.967-2.471 4.68-12.145c.263-.702.545-1.192.826-1.49.3-.298.634-.473 1.02-.508v-.561c-.598.052-1.319.087-2.163.087-.598-.017-1.39-.035-2.393-.087Zm19.333 2.839c.458 1.069.686 2.33.686 3.803 0 1.454-.228 2.804-.703 4.083-.475 1.28-1.179 2.296-2.164 3.085-.985.788-2.199 1.191-3.659 1.191-.721 0-1.372-.14-1.97-.42-.581-.28-1.038-.649-1.372-1.122v3.628c0 .771.228 1.297.686 1.595.457.298 1.143.455 2.058.455v.596c-.246-.017-.774-.035-1.618-.07a59.968 59.968 0 0 0-2.48-.053c-.599 0-1.232.018-1.866.053-.633.035-1.038.053-1.213.07v-.596c.703 0 1.178-.122 1.46-.385.281-.263.422-.719.422-1.385V13.67c0-.877-.158-1.507-.475-1.91-.317-.403-.88-.596-1.689-.596v-.596c.598.052 1.179.087 1.76.087 1.196 0 2.198-.122 2.955-.385v2.997c.422-.982 1.038-1.735 1.829-2.261.792-.543 1.707-.806 2.727-.806 1.003 0 1.917.28 2.709.824.827.508 1.46 1.314 1.917 2.383Zm-2.075 4.188c0-4.38-1.109-6.571-3.308-6.571-.862 0-1.636.315-2.322.928-.686.614-1.178 1.508-1.46 2.664v8.482c.282.561.669 1.017 1.179 1.332.51.333 1.126.491 1.829.491 2.727 0 4.082-2.436 4.082-7.326Zm12.859 6.24c-.422.473-.915.7-1.513.7-.598 0-1.055-.192-1.354-.56-.299-.368-.458-1-.458-1.84V11.163h4.205v-.579h-4.205V5.854c-.633.245-1.495.368-2.551.403v4.328h-2.744v.561h2.744v9.499c0 1.034.088 1.84.247 2.436.158.613.457 1.121.862 1.524.316.316.686.561 1.108.72.422.157.95.227 1.583.227 2.006 0 3.237-1.314 3.694-3.926l-.563-.14c-.281 1.104-.633 1.893-1.055 2.348Zm15.322-10.305c.563 1.156.845 2.593.845 4.363 0 1.753-.282 3.207-.845 4.347-.563 1.139-1.319 1.98-2.287 2.523-.967.543-2.076.806-3.325.806s-2.357-.262-3.324-.806c-.968-.543-1.724-1.384-2.287-2.523-.563-1.14-.845-2.594-.845-4.347 0-1.752.282-3.207.845-4.363.563-1.14 1.319-1.998 2.287-2.542.967-.543 2.075-.823 3.324-.823 1.249 0 2.358.28 3.325.823.95.544 1.724 1.402 2.287 2.542Zm-1.935 4.363c0-2.436-.334-4.24-1.003-5.397-.668-1.157-1.565-1.735-2.709-1.735-1.143 0-2.04.578-2.709 1.735-.668 1.156-1.003 2.961-1.003 5.397 0 2.436.335 4.224 1.003 5.38.669 1.157 1.566 1.736 2.709 1.736 1.144 0 2.041-.579 2.709-1.735.669-1.175 1.003-2.962 1.003-5.38ZM5.365 21.048c-.263.298-.58.438-.95.438-.369 0-.65-.123-.844-.35-.193-.228-.281-.614-.281-1.14V13.18h2.62v-.35H3.29V9.884c-.405.158-.933.228-1.584.246v2.699H0v.35h1.706v5.906c0 .631.053 1.14.159 1.525.105.385.281.7.527.946.212.193.423.35.687.438.263.088.58.14.985.14 1.249 0 2.005-.806 2.304-2.436l-.352-.087c-.176.666-.404 1.156-.65 1.437Zm9.746-.035c-.088-.175-.14-.438-.14-.771v-4.697c0-.596-.053-1.07-.141-1.42a1.998 1.998 0 0 0-.475-.893c-.423-.438-1.056-.666-1.883-.666-.65 0-1.249.157-1.776.49-.528.333-.933.86-1.232 1.613v-6.59c-.457.175-1.073.246-1.847.246-.352 0-.721-.018-1.09-.053v.368c.51 0 .844.123 1.055.368.193.245.299.631.299 1.174v10.042c0 .333-.053.578-.14.771a.76.76 0 0 1-.423.386c-.193.07-.457.105-.792.105v.368a49.883 49.883 0 0 1 2.129-.07c.334 0 .985.018 1.97.07v-.368c-.299 0-.527-.035-.686-.105-.158-.053-.281-.193-.352-.368a2.131 2.131 0 0 1-.123-.771v-3.926c0-.613.106-1.157.317-1.647.21-.491.51-.859.88-1.14a2.23 2.23 0 0 1 1.284-.402c.404 0 .703.087.914.262.211.176.352.404.422.701.07.28.106.649.106 1.07v5.082c0 .333-.035.578-.123.77-.088.176-.194.316-.37.386-.175.07-.404.106-.685.106v.368c.985-.053 1.653-.07 1.987-.07.317 0 1.02.017 2.129.07v-.368c-.334 0-.598-.036-.792-.106a.76.76 0 0 1-.422-.385Zm9.288-1.385.352.14c-.14.404-.352.807-.668 1.157a3.3 3.3 0 0 1-1.126.877c-.457.227-.95.332-1.513.332-.844 0-1.566-.192-2.181-.578-.616-.385-1.073-.911-1.408-1.612-.316-.684-.475-1.49-.475-2.384 0-1.016.159-1.91.493-2.663.334-.754.791-1.332 1.39-1.735.598-.404 1.301-.614 2.11-.614 1.056 0 1.883.316 2.446.964.58.649.862 1.612.862 2.91h-5.524a9.989 9.989 0 0 0-.053 1.12c0 .772.123 1.455.387 2.034.264.578.598 1.016 1.003 1.332.422.315.844.473 1.32.473 1.178 0 2.04-.579 2.585-1.753Zm-5.26-3.522h3.853a6.72 6.72 0 0 0-.14-1.613c-.124-.49-.317-.876-.581-1.156-.264-.28-.58-.42-.95-.42s-.704.122-1.003.35c-.299.228-.563.596-.774 1.069-.211.455-.352 1.051-.404 1.77Zm133.203 7.658c-.141-.298-.211-.7-.211-1.226v-7.571c0-.964-.071-1.718-.229-2.296-.158-.579-.404-1.052-.756-1.437-.686-.701-1.689-1.07-3.026-1.07-1.073 0-2.023.264-2.867.807-.845.543-1.513 1.402-1.988 2.611v-3.33c-.774.263-1.759.386-2.956.386-.58 0-1.178-.035-1.759-.088v.596c.809 0 1.372.193 1.689.596.317.403.475 1.034.475 1.91v8.868c0 .526-.07.929-.211 1.227-.141.298-.37.508-.686.613-.317.123-.739.175-1.267.175v.596c1.742-.07 2.885-.105 3.413-.105.545 0 1.601.035 3.202.105v-.596c-.475 0-.845-.052-1.109-.175a1.198 1.198 0 0 1-.598-.613c-.123-.298-.193-.701-.193-1.227v-6.274c0-.964.176-1.84.492-2.629.335-.788.809-1.402 1.408-1.858a3.388 3.388 0 0 1 2.075-.683c.651 0 1.144.14 1.478.42.334.281.563.667.669 1.122.105.456.158 1.034.158 1.718v8.202c0 .525-.07.928-.194 1.226-.123.298-.316.509-.58.614-.264.122-.633.175-1.108.175v.596c1.6-.07 2.656-.105 3.184-.105.545 0 1.671.035 3.412.105v-.596c-.545 0-.967-.053-1.266-.175a1.17 1.17 0 0 1-.651-.614Zm15.797-10.234c.563 1.156.844 2.593.844 4.363 0 1.753-.281 3.207-.844 4.347-.563 1.139-1.319 1.98-2.287 2.523-.967.543-2.076.806-3.325.806s-2.357-.262-3.324-.806c-.968-.543-1.724-1.384-2.287-2.523-.563-1.14-.845-2.594-.845-4.347 0-1.752.282-3.207.845-4.363.563-1.14 1.319-1.998 2.287-2.542.967-.543 2.075-.823 3.324-.823 1.249 0 2.358.28 3.325.823.968.544 1.724 1.402 2.287 2.542Zm-1.917 4.363c0-2.436-.335-4.24-1.003-5.397-.669-1.157-1.566-1.735-2.709-1.735-1.144 0-2.041.578-2.709 1.735-.669 1.156-1.003 2.961-1.003 5.397 0 2.436.334 4.224 1.003 5.38.668 1.157 1.565 1.736 2.709 1.736 1.143 0 2.04-.579 2.709-1.735.668-1.175 1.003-2.962 1.003-5.38Zm26.985 5.871c-.141-.298-.211-.7-.211-1.226v-7.571c0-.93-.071-1.683-.211-2.279-.141-.578-.387-1.069-.722-1.454-.686-.701-1.671-1.07-2.955-1.07-1.02 0-1.953.264-2.779.79-.827.525-1.496 1.384-1.953 2.576-.106-1-.405-1.77-.88-2.279-.686-.7-1.671-1.069-2.955-1.069-.985 0-1.9.28-2.727.841-.826.561-1.477 1.42-1.952 2.577v-3.33c-.774.263-1.759.385-2.956.385-.58 0-1.178-.035-1.759-.087v.596c.809 0 1.372.193 1.689.595.317.404.475 1.034.475 1.91v8.869c0 .525-.07.928-.211 1.226-.141.298-.37.509-.686.614-.317.122-.739.175-1.267.175v.596c1.742-.07 2.885-.105 3.413-.105.545 0 1.601.035 3.202.105v-.596c-.475 0-.845-.053-1.109-.175-.264-.123-.457-.333-.598-.614-.123-.298-.193-.7-.193-1.226v-6.292c0-.946.176-1.823.51-2.611.334-.789.791-1.42 1.372-1.876a3.13 3.13 0 0 1 1.97-.683c.634 0 1.108.14 1.425.42.317.281.51.65.598 1.087.088.456.123 1.034.123 1.753v8.202c0 .525-.052.928-.176 1.226-.123.298-.316.509-.58.614-.264.122-.633.175-1.108.175v.596c1.583-.07 2.656-.105 3.201-.105.528 0 1.671.035 3.395.105v-.596c-.527 0-.949-.053-1.266-.175a1.273 1.273 0 0 1-.669-.614c-.14-.298-.211-.7-.211-1.226V16.21c0-.946.159-1.823.493-2.594.334-.77.791-1.402 1.372-1.858a3.084 3.084 0 0 1 1.953-.683c.651 0 1.125.14 1.442.42.317.281.51.65.598 1.087.088.456.123 1.034.123 1.753v8.202c0 .525-.07.928-.193 1.226-.123.298-.317.509-.581.614-.264.122-.633.175-1.108.175v.596c1.601-.07 2.656-.105 3.184-.105s1.671.035 3.413.105v-.596c-.545 0-.968-.053-1.267-.175a1.148 1.148 0 0 1-.668-.614Zm8.145 0c-.141-.298-.211-.7-.211-1.226V10.252c-.774.263-1.76.386-2.956.386-.58 0-1.178-.035-1.759-.088v.596c.809 0 1.372.193 1.689.596.317.403.475 1.034.475 1.91v8.868c0 .526-.071.929-.211 1.227-.141.298-.37.508-.686.613-.317.123-.739.175-1.267.175v.596c1.742-.07 2.885-.105 3.448-.105.563 0 1.706.035 3.448.105v-.596c-.545 0-.968-.052-1.267-.175a1.044 1.044 0 0 1-.703-.596Zm-2.586-16.912c.281.158.58.246.914.246.317 0 .634-.07.898-.246a1.74 1.74 0 0 0 .668-.665c.158-.28.246-.579.246-.912 0-.315-.088-.63-.246-.894a1.869 1.869 0 0 0-.668-.666 1.82 1.82 0 0 0-.898-.245 1.88 1.88 0 0 0-.914.245c-.282.176-.51.386-.669.666-.158.28-.246.579-.246.894 0 .316.088.631.246.912.159.297.387.508.669.665Zm14.741 11.287c-.527-.438-1.231-.947-2.111-1.508-.263-.175-.721-.455-1.354-.858-.633-.403-1.179-.806-1.619-1.245-.439-.438-.668-.98-.668-1.647 0-.683.211-1.21.651-1.595.44-.385 1.003-.578 1.689-.578 1.178 0 2.058.403 2.674 1.227.598.806 1.002 1.84 1.213 3.084h.634c0-2.296.035-3.89.105-4.82h-.651c-.088.825-.299 1.245-.633 1.245-.123 0-.299-.07-.493-.228-.334-.263-.774-.508-1.301-.718-.528-.21-1.126-.316-1.795-.316-.774 0-1.477.14-2.128.403a3.365 3.365 0 0 0-1.513 1.227c-.387.543-.563 1.227-.563 2.033 0 .736.176 1.384.51 1.928a4.98 4.98 0 0 0 1.249 1.384c.493.386 1.214.859 2.146 1.455.774.473 1.372.876 1.795 1.21a4.72 4.72 0 0 1 1.038 1.103c.263.42.387.877.387 1.385 0 .63-.124 1.156-.37 1.56a2.272 2.272 0 0 1-.95.876 2.887 2.887 0 0 1-1.196.263c-.915 0-1.636-.21-2.164-.631-.545-.42-.932-1.017-1.196-1.77-.264-.754-.457-1.718-.598-2.892h-.651c0 2.699-.035 4.574-.106 5.66h.651c.106-.718.299-1.068.581-1.068a.36.36 0 0 1 .264.105c.404.315.791.578 1.161.753.651.263 1.407.403 2.251.403.88 0 1.689-.157 2.428-.455.739-.316 1.337-.754 1.777-1.35.44-.595.668-1.314.668-2.155 0-.736-.158-1.385-.492-1.946a6.072 6.072 0 0 0-1.32-1.524Zm12.93 3.382c-.281 1.087-.633 1.858-1.055 2.33-.423.474-.915.702-1.513.702-.598 0-1.056-.193-1.355-.56-.299-.369-.457-1-.457-1.841V11.164h4.204v-.579h-4.204V5.854c-.633.245-1.495.368-2.551.403v4.328h-2.744v.561h2.744v9.499c0 1.034.088 1.84.246 2.436.159.613.458 1.121.862 1.524.317.316.704.561 1.109.72.422.157.95.227 1.583.227 2.005 0 3.237-1.314 3.694-3.926l-.563-.105ZM66.812 25.377a16.6 16.6 0 0 1-13.281 7.606c-9.605.368-17.539-7.536-17.152-17.105.229-5.941 3.642-11.076 8.585-13.775.21-.123.404.158.228.316-3.834 3.487-5.928 8.867-4.784 14.668a15.135 15.135 0 0 0 3.043 6.537c.457-.841 1.354-1.893 1.372-3.277.035-3.873.035-7.729.018-11.602 0-.648.175-1.104.686-1.524 2.867-2.349 5.7-4.732 8.567-7.063.21-.175.703-.21.95-.07 1.935 1.086 9.464 3.627 10.29 3.715.141.018.388.228.106.473 0 0-2.234 2.226-3.448 3.453-.21.21-.475.157-.686.087-1.231-.42-3.113-1.191-4.785-1.857v9.937h1.25v1.244h-1.303v12.32c3.888-.193 7.424-1.788 10.045-4.311.176-.193.422.017.3.228Zm-14.9-8.272h-2.286c-.44 1.84-1.39 3.365-2.886 4.75-.492.455-1.741 1.646-2.357 2.242a.4.4 0 0 0-.035.526l.158.158.3.298c.175.175.369.35.562.508l.317.263c.123.105.246.21.37.298a16.9 16.9 0 0 0 3.483 2.033 15.42 15.42 0 0 0 2.198.736.226.226 0 0 0 .176-.21V17.104Zm.018-12.671c0-.193-.194-.28-.37-.175 0 0-.334.21-.51.298-.88.525-1.213 1.35-1.178 2.4l.035 7.361a8.877 8.877 0 0 1-.088 1.542h2.076l.035-11.426Zm3.254 12.67H53.18c0 3.821 0 7.624-.018 11.112 0 .7.159 1.016.845 1.139.404.035.791.07 1.178.087V17.105Zm0-11.689c-.387-.157-.756-.28-1.073-.403-.07-.017-.246-.087-.316-.105-.493-.158-.634.07-.634.333v10.603h2.006V5.415h.017Z" fill="#fff" /></g><defs><clipPath id="icon-cryptonomist_a"><path fill="#fff" d="M0 0h227v33H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 26" id="icon-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M36 7.986h-1.982V5.989H32V3.993h-2V0h-2v1.996h-2v1.997h-2v3.993h2v1.996h2v1.997h4V9.982h4V7.986Zm-29.117 0h3.957V5.989H8V.998H3v2.995H2v1.996H0V9.982h6.883V7.986ZM27.1 12.025v3.992H30V22h-4v2.005h-9V26h-4v-1.996h-1V26H8.8v-2.01H5.9v-1.991h-4v-3.985h2v-3.993h2v-1.996h2v-1.997h4V8.032H22v1.996h2v1.997h3.1ZM6 19.965h4l.019-3.992H6v3.992Zm15-1.95h1V13.43h-4.9v2.587H16v3.993h5v-1.997Z" fill="url(#icon-icon_a)" /><defs><linearGradient id="icon-icon_a" x1="5.027" y1="10.463" x2="18.182" y2="25.021" gradientUnits="userSpaceOnUse"><stop stop-color="#C3FC61" /><stop offset="1" stop-color="#74FFA9" /></linearGradient></defs></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-info"><g clip-path="url(#icon-info_a)"><path d="M11 7h2v2h-2V7Zm1 10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1Zm0-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="#000" /></g><defs><clipPath id="icon-info_a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 188 139" id="icon-lim"><circle cx="93.5" cy="69.5" r="68.5" stroke="currentColor" /><g clip-path="url(#icon-lim_a)"><path d="M185.593 44h-73.427a4.532 4.532 0 0 0-3.452 1.592l-6.013 7.036a6.648 6.648 0 0 1-5.045 2.33H26.645a4.855 4.855 0 0 0-3.697 1.704l-2.576 3a2.425 2.425 0 0 0-.365 2.58c.19.42.497.776.882 1.027.385.25.834.385 1.293.388h74.096c.33 0 .66-.026.987-.074l-4.457 5.21a6.662 6.662 0 0 1-2.27 1.716c-.87.402-1.817.61-2.775.61H16.752a4.864 4.864 0 0 0-3.7 1.707l-2.573 3.008a2.422 2.422 0 0 0-.363 2.585c.192.42.5.777.887 1.026.387.25.838.382 1.298.382h74.084c.33-.001.66-.025.987-.071l-4.457 5.206a6.664 6.664 0 0 1-2.27 1.719c-.87.402-1.817.61-2.775.61H6.859A4.864 4.864 0 0 0 3.159 89L.592 92.007a2.423 2.423 0 0 0 .524 3.611c.387.25.838.383 1.298.382h74.078c.992 0 1.973-.216 2.875-.632a6.894 6.894 0 0 0 2.35-1.78l5.102-5.951a7.373 7.373 0 0 1 2.51-1.903 7.332 7.332 0 0 1 3.071-.677h68.077a6.766 6.766 0 0 0 2.831-.625 6.801 6.801 0 0 0 2.315-1.755l2-2.338a2.429 2.429 0 0 0 .364-2.583 2.415 2.415 0 0 0-.886-1.027 2.392 2.392 0 0 0-1.297-.383H92.528l4.184-4.891a7.372 7.372 0 0 1 2.512-1.9 7.332 7.332 0 0 1 3.069-.674h68.077a6.77 6.77 0 0 0 5.149-2.38l2.003-2.338a2.422 2.422 0 0 0-.524-3.611 2.394 2.394 0 0 0-1.298-.382h-73.277l4.182-4.891a7.38 7.38 0 0 1 2.512-1.9 7.33 7.33 0 0 1 3.069-.674h68.077a6.77 6.77 0 0 0 5.149-2.38l2.003-2.338a2.431 2.431 0 0 0 .357-2.58A2.408 2.408 0 0 0 185.593 44Z" fill="#0B0B0B" /></g><defs><clipPath id="icon-lim_a"><path fill="#fff" transform="translate(0 44)" d="M0 0h188v52H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-linkedin"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 31.5h-21a3 3 0 0 1-3-3v-21a3 3 0 0 1 3-3h21a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3ZM8.25 10.649a2.39 2.39 0 0 0 2.381 2.399 2.39 2.39 0 0 0 2.38-2.4 2.39 2.39 0 0 0-2.38-2.398 2.39 2.39 0 0 0-2.381 2.399ZM23.743 27.75h4.007v-8.23c0-3.483-1.974-5.167-4.732-5.167s-3.92 2.148-3.92 2.148V14.75h-3.86v13h3.86v-6.824c0-1.829.843-2.917 2.454-2.917 1.48 0 2.191 1.046 2.191 2.917v6.824Zm-15.106 0h4.027v-13H8.637v13Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 37 27" id="icon-logo-m"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.598 8.127h-2.014V6.095h-2.052V4.064h-2.033V0h-2.034v2.032h-2.033v2.032H24.4v4.063h2.033v2.032h2.033v2.032h4.067v-2.032h4.066V8.127Zm-29.6 0h4.022V6.095H8.133V1.016H3.05v3.048H2.033v2.031H0v4.064h6.998V8.127Zm20.552 4.11V16.3l.001.001H30.5v6.087h-4.067v2.04h-9.15v2.032h-4.066v-2.032H12.2v2.032H8.946v-2.046H5.998v-2.026H1.932v-4.055h2.033v-4.064h2.033v-2.031h2.033v-2.032h4.067V8.174h10.268v2.032h2.033v2.032h3.151ZM6.1 20.318h4.066l.02-4.061H6.1v4.062Zm15.249-1.984h1.017v-4.665h-4.982v2.633h-1.118v4.064h5.083v-2.032Z" fill="url(#icon-logo-m_a)" /><defs><linearGradient id="icon-logo-m_a" x1="5.11" y1="10.649" x2="18.5" y2="25.45" gradientUnits="userSpaceOnUse"><stop stop-color="#C3FC61" /><stop offset="1" stop-color="#74FFA9" /></linearGradient></defs></symbol><symbol fill="none"  viewBox="0 0 372 53" id="icon-logo"><g clip-path="url(#icon-logo_a)"><path d="M96.148 42.819v-32.66h19.61v6.532h6.536v19.596h-6.536v6.532h-19.61Zm6.536-6.532h12.812V16.69h-12.812v19.596ZM127.524 42.819v-32.66h19.611v6.532h-13.074v6.532h13.074v6.532h-13.074v6.532h13.074v6.532h-19.611ZM152.364 42.819v-32.66h19.61v6.532H158.9v6.532h13.074v6.532H158.9v6.532h13.074v6.532h-19.61ZM177.204 42.819v-32.66h19.61v6.532h6.537v6.532h-6.537v6.532h-13.073v13.064h-6.537Zm6.537-19.596h12.811V16.69h-12.811v6.532Z" fill="#fff" /><path d="M215.117 16.69V10.16h19.61v6.532h-19.61Zm13.074 19.597v-6.532h-13.074v-6.532h-6.537V16.69h6.537v6.532h13.074v6.532h6.536v6.532h-6.536Zm-19.611 6.532v-6.532h19.611v6.532H208.58ZM239.957 42.819v-32.66h6.537v6.532h6.536v6.532h6.537v6.532h6.537V10.159h6.537v32.66h-6.537v-6.532h-6.537v-6.532h-6.537v-6.532h-6.536v19.596h-6.537ZM277.87 42.819v-32.66h6.537v32.66h-6.537ZM296.173 42.819V16.69h-6.536v-6.532h19.61v6.532h-6.537v26.128h-6.537ZM334.087 23.223V16.69h-13.074v-6.532h13.074v6.532h6.537v6.532h-6.537Zm-13.074 19.596v-6.532h-6.537V16.69h6.537v19.596h13.074v6.532h-13.074Zm13.074-6.532v-6.532h6.537v6.532h-6.537ZM345.853 42.819v-32.66h6.536v13.064h13.074V10.159H372v32.66h-6.537V29.755h-13.074v13.064h-6.536Z" fill="#D6FC70" /><path fill-rule="evenodd" clip-rule="evenodd" d="M73.197 16.254h-4.03v-4.063h-4.103V8.127h-4.067V0h-4.066v4.064h-4.067v4.063h-4.066v8.127h4.066v4.064h4.067v4.063h8.133v-4.063h8.133v-4.064Zm-59.202 0h8.045v-4.063h-5.774V2.03H6.1v6.096H4.066v4.064H0V20.318h13.995v-4.064Zm41.106 8.221v8.126l.002.001h5.894v12.174h-8.133v4.08H34.565v4.064h-8.133v-4.064H24.4v4.064h-6.507v-4.092h-5.896v-4.052H3.863v-8.11H7.93v-8.127h4.066v-4.064h4.067v-4.063h8.133v-4.064H44.73v4.064h4.067v4.063H55.1ZM12.2 40.635h8.132l.039-8.124H12.2v8.124Zm30.498-3.97h2.033v-9.328h-9.963v5.265h-2.236v8.128h10.166v-4.064Z" fill="url(#icon-logo_b)" /></g><defs><linearGradient id="icon-logo_b" x1="10.221" y1="21.297" x2="37" y2="50.899" gradientUnits="userSpaceOnUse"><stop stop-color="#C3FC61" /><stop offset="1" stop-color="#74FFA9" /></linearGradient><clipPath id="icon-logo_a"><path fill="#fff" d="M0 0h372v53H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-medium"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.922 17.519c0 4.705-3.788 8.519-8.461 8.519S3 22.224 3 17.518C3 12.815 6.788 9 11.46 9c4.674 0 8.462 3.814 8.462 8.519Zm9.281 0c0 4.429-1.894 8.019-4.23 8.019-2.336 0-4.23-3.59-4.23-8.02 0-4.428 1.894-8.018 4.23-8.018 2.336 0 4.23 3.59 4.23 8.019Zm2.309 7.185c.822 0 1.488-3.217 1.488-7.185 0-3.968-.666-7.185-1.488-7.185s-1.488 3.217-1.488 7.185c0 3.968.666 7.185 1.488 7.185Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 24 24" id="icon-menu"><g clip-path="url(#icon-menu_a)"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Z" fill="#fff" /></g><defs><clipPath id="icon-menu_a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-okx"><path d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0ZM7.788 8.316a.46.46 0 0 1 .458-.459h5.895a.46.46 0 0 1 .459.46v5.894a.46.46 0 0 1-.459.461H8.246a.46.46 0 0 1-.458-.461V8.316ZM14.6 27.684a.46.46 0 0 1-.459.459H8.246a.46.46 0 0 1-.458-.46V21.79a.46.46 0 0 1 .458-.461h5.895a.46.46 0 0 1 .459.461v5.895Zm6.347-6.278h-5.894a.463.463 0 0 1-.462-.462V15.05c0-.253.206-.462.462-.462h5.894c.253 0 .462.206.462.462v5.894a.463.463 0 0 1-.462.462Zm7.274 6.278a.46.46 0 0 1-.462.459h-5.894a.46.46 0 0 1-.459-.46V21.79a.46.46 0 0 1 .459-.461h5.894c.253 0 .462.206.462.461v5.895Zm0-13.476a.461.461 0 0 1-.462.461h-5.894a.46.46 0 0 1-.459-.461V8.313a.46.46 0 0 1 .459-.459h5.894c.253 0 .462.207.462.46v5.894Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 222 139" id="icon-org"><circle cx="110.5" cy="69.5" r="68.5" stroke="currentColor" /><g clip-path="url(#icon-org_a)"><path d="M170.24 6.76c-5.183 29.07-14.563 45.395-33.806 54.845-17.008-3.052-20.951-17.034-15.792-46.1-5.19 29.06-14.564 45.384-33.805 54.846-17.009-3.052-20.98-17.029-15.793-46.1-7.232 40.484-22.607 56.263-61.483 63.112 38.875-6.855 49.432 4.363 42.201 44.853 5.187-29.047 14.543-45.368 33.818-54.812 17.014 3.051 20.98 17.03 15.798 46.099 5.186-29.047 14.566-45.372 33.805-54.81 17.015 3.051 20.952 17.034 15.799 46.099 7.219-40.487 22.6-56.267 61.477-63.11-38.897 6.799-49.447-4.415-42.219-44.922Z" fill="#0B0B0B" /></g><defs><clipPath id="icon-org_a"><path fill="#fff" transform="rotate(-10 209.87 14.779)" d="M0 0h206v103H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-phantom"><g clip-path="url(#icon-phantom_a)"><mask id="icon-phantom_b" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><path d="M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18 18-8.059 18-18Z" fill="#fff" /></mask><g mask="url(#icon-phantom_b)"><path d="M36 0H0v36h36V0Z" fill="#AB9FF2" /><path fill-rule="evenodd" clip-rule="evenodd" d="M15.667 22.945c-1.414 2.165-3.783 4.906-6.934 4.906-1.49 0-2.923-.613-2.923-3.277 0-6.786 9.264-17.29 17.86-17.29 4.89 0 6.839 3.393 6.839 7.246 0 4.945-3.21 10.6-6.4 10.6-1.012 0-1.509-.556-1.509-1.438 0-.23.039-.48.115-.747-1.089 1.859-3.19 3.584-5.157 3.584-1.433 0-2.159-.901-2.159-2.166 0-.46.096-.94.268-1.418Zm7.404-8.549c0 1.123-.662 1.684-1.403 1.684-.752 0-1.403-.561-1.403-1.684 0-1.123.65-1.684 1.403-1.684.74 0 1.403.562 1.403 1.684Zm4.21 0c0 1.123-.662 1.684-1.403 1.684-.752 0-1.404-.561-1.404-1.684 0-1.122.652-1.684 1.404-1.684.74 0 1.403.562 1.403 1.684Z" fill="#FFFDF8" /></g></g><defs><clipPath id="icon-phantom_a"><path fill="#fff" d="M0 0h36v36H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 48 48" id="icon-remove"><g clip-path="url(#icon-remove_a)"><path d="M38 26H10v-4h28v4Z" fill="#D6FC70" /></g><defs><clipPath id="icon-remove_a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-roobinium"><path d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Z" fill="#D6FC70" /><path fill-rule="evenodd" clip-rule="evenodd" d="M13.627 32.643C7.304 30.73 2.7 24.858 2.7 17.91c0-8.5 6.89-15.39 15.39-15.39 5.633 0 10.559 3.026 13.24 7.541H18.553a4.925 4.925 0 0 0-4.925 4.925v17.657Zm4.925-20.273a2.616 2.616 0 0 0-2.617 2.616V33.15c.705.099 1.424.15 2.155.15 8.5 0 15.39-6.89 15.39-15.39 0-1.953-.364-3.821-1.027-5.54H18.552Zm12.927 5.54c0 7.395-5.994 13.39-13.389 13.39l-.154-.002V14.986c0-.34.276-.616.616-.616h12.455c.312 1.142.472 2.329.472 3.54ZM18.552 8.06a6.926 6.926 0 0 0-6.926 6.926v14.655a13.399 13.399 0 0 1-6.925-11.73c0-7.396 5.994-13.39 13.389-13.39 3.438 0 6.648 1.305 9.072 3.54h-8.61Z" fill="#000" /></symbol><symbol fill="none"  viewBox="0 0 155 176" id="icon-scar"><g clip-path="url(#icon-scar_a)"><path d="M123.237 96.216c10.192 9.775 15.102 18.141 12.48 23.043-3.325 6.225-18.015 5.497-38.048-.701L92.13 95.801l25.906-9.494a281.594 281.594 0 0 1 26.461 17.222c-6.021-5.784-13.914-12.066-23.176-18.411l33.666-12.357-51.524 1.045a341.17 341.17 0 0 0-7.302-4.144L124.549 0 82.283 62.432a329.698 329.698 0 0 0-7.138-3.404L47.05 15.233 55.725 50.9c-25.591-9.532-45.272-11.846-49.19-4.519-3.762 7.053 7.978 21.197 28.586 36.422-10.189-9.775-15.102-18.14-12.476-23.043 3.167-5.925 16.643-5.544 35.217-.144l5.018 20.586L35.873 90.1c-8.11-4.853-15.52-9.779-22.042-14.601 5.148 4.939 11.643 10.236 19.193 15.626L0 103.232l49.878-1.002a324.38 324.38 0 0 0 8.58 5.047L30.438 176l41.576-61.43a317.487 317.487 0 0 0 9.152 4.482l26.759 41.716-8.209-33.731c26.983 10.437 48.002 13.209 52.066 5.608 3.79-7.047-7.954-21.204-28.545-36.43ZM94.632 73.99h-.237l.04-.097.197.097Zm-36.977 28.073 2.947-.056-.515 1.265c-.81-.411-1.62-.798-2.432-1.209Zm17.37 8.079.224-.334.375.584-.6-.25Z" fill="#0B0B0B" /></g><defs><clipPath id="icon-scar_a"><path fill="#fff" d="M0 0h155v176H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-telegram"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5c7.456 0 13.5-6.044 13.5-13.5S25.456 4.5 18 4.5 4.5 10.544 4.5 18 10.544 31.5 18 31.5Zm.484-17.034c-1.313.546-3.938 1.677-7.873 3.392-.64.254-.974.502-1.004.745-.052.411.463.573 1.163.793l.295.094c.69.224 1.617.486 2.099.497.437.01.925-.171 1.464-.541 3.677-2.482 5.575-3.737 5.694-3.764.084-.019.2-.043.28.027.079.07.071.203.063.239-.051.217-2.07 2.095-3.116 3.067-.326.302-.557.517-.604.566-.106.11-.214.214-.318.314-.64.617-1.12 1.08.027 1.836.551.364.992.664 1.433.964.48.327.96.654 1.58 1.06.158.104.309.211.456.316.559.399 1.061.757 1.682.7.361-.033.734-.372.923-1.384.447-2.391 1.326-7.571 1.53-9.706a2.386 2.386 0 0 0-.023-.531.57.57 0 0 0-.192-.366c-.162-.131-.412-.159-.523-.157-.508.009-1.287.28-5.036 1.84Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-x"><path fill-rule="evenodd" clip-rule="evenodd" d="m29.218 6-8.935 10.386L30 30.527h-7.147l-6.543-9.523-8.193 9.523H6l9.37-10.89L6 6h7.147l6.196 9.018L27.1 6h2.117ZM16.434 18.399l.95 1.358 6.465 9.249h3.253l-7.924-11.334-.95-1.358-6.096-8.72H8.88l7.554 10.805Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 36 36" id="icon-youtube"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.722 8.127a3.757 3.757 0 0 1 2.652 2.652c.627 2.34.627 7.221.627 7.221s0 4.882-.627 7.221a3.757 3.757 0 0 1-2.652 2.653c-2.34.627-11.721.627-11.721.627s-9.382 0-11.722-.627a3.757 3.757 0 0 1-2.652-2.653C3 22.881 3 18.001 3 18.001s0-4.882.627-7.222a3.757 3.757 0 0 1 2.652-2.652C8.62 7.5 18.001 7.5 18.001 7.5s9.381 0 11.721.627ZM22.795 18 15 22.5v-9l7.795 4.5Z" fill="#fff" /></symbol>'),
      e.insertBefore(n, e.lastChild);
  };
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", t)
    : t();
}
const kc = {
  NL: "nl",
  BE: "nl",
  FR: "fr",
  ES: "es",
  GB: "en",
  US: "en",
  IT: "it",
  DE: "de",
  AT: "de",
  CH: "de",
  PT: "pt",
  BR: "pt",
  VN: "vi",
  default: "en",
};
Ee.use(od)
  .use(rd)
  .use(sd)
  .init({
    fallbackLng: "en",
    debug: !1,
    supportedLngs: ["en", "es", "fr", "nl", "tr", "it", "de", "pt", "vi"],
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: { escapeValue: !1 },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng",
      lookupCookie: "i18next",
      checkWhitelist: !0,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      requestOptions: { cache: "default" },
      reloadInterval: !1,
      maxRetries: 1,
      crossDomain: !1,
    },
    react: { useSuspense: !1 },
    preload: !1,
    keySeparator: ".",
    nsSeparator: ":",
  });
function Il() {
  const t = localStorage.getItem("i18nextLng"),
    e = document.cookie.match(/i18next=([^;]+)/);
  return !t && !e;
}
async function op() {
  if (Il())
    try {
      const t = await fetch("https://ipapi.co/json/");
      if (!t.ok) throw new Error("IP detection failed");
      const n = (await t.json()).country_code,
        o = kc[n] || kc.default;
      o !== Ee.language &&
        Ee.options.supportedLngs.includes(o) &&
        (await Ee.changeLanguage(o));
    } catch (t) {
      console.warn("IP-based language detection failed:", t.message),
        (!Ee.language || Ee.language === "cimode") &&
          (await Ee.changeLanguage("en"));
    }
}
Ee.changeLanguageOptimized = async (t) => {
  try {
    return (
      await Ee.changeLanguage(t),
      typeof document < "u" &&
        (document.documentElement.setAttribute("lang", t),
        document.documentElement.setAttribute("data-lang", t)),
      localStorage.setItem("i18nextLng", t),
      !0
    );
  } catch (e) {
    return console.error("Language change failed:", e), !1;
  }
};
Ee.preloadLanguage = async (t) => {
  if (
    Ee.options.supportedLngs.includes(t) &&
    !Ee.hasResourceBundle(t, "translation")
  )
    try {
      await Ee.loadLanguages([t]);
    } catch (e) {
      console.warn(`Failed to preload language ${t}:`, e);
    }
};
typeof window < "u" &&
  (Ee.on("initialized", () => {
    const t = Ee.language || "en";
    document.documentElement.setAttribute("lang", t),
      document.documentElement.setAttribute("data-lang", t),
      Il() && op();
  }),
  Ee.on("languageChanged", (t) => {
    document.documentElement.setAttribute("lang", t),
      document.documentElement.setAttribute("data-lang", t);
  }));
Re(() => import("./netLogger-lite-Dpan7uYN.js"), []);
Ks.log("info", "Main Entry Point Loaded", {
  timestamp: new Date().toISOString(),
  url: window.location.href,
});
ip();
X0();
const rp = V.lazy(() =>
  Re(
    () => import("./App-B3-mP0gp.js").then((t) => t.A),
    __vite__mapDeps([2, 0, 1, 3, 4, 5, 6, 7, 8, 9])
  )
);
(async () => {
  try {
    await ga;
  } catch (t) {
    console.error("[appkit] init failed:", t);
  }
  ud.createRoot(document.getElementById("root")).render(
    ne.jsx(El, {
      children: ne.jsx(z0, {
        children: ne.jsx(G0, {
          children: ne.jsx(V.Suspense, {
            fallback: ne.jsx(Z0, { height: "min-h-screen", showSpinner: !1 }),
            children: ne.jsx(rp, {}),
          }),
        }),
      }),
    })
  );
})();
export {
  u0 as A,
  o0 as B,
  Us as C,
  Wr as D,
  n0 as E,
  i0 as F,
  Vs as G,
  si as H,
  wl as I,
  g0 as J,
  a0 as K,
  Z0 as L,
  fl as M,
  Ks as N,
  gd as O,
  pp as P,
  N1 as Q,
  j0 as R,
  Sc as S,
  M3 as T,
  yd as U,
  L3 as V,
  P3 as W,
  ri as X,
  Dh as a,
  D3 as b,
  B0 as c,
  N3 as d,
  Qh as e,
  Fh as f,
  vd as g,
  _o as h,
  Ao as i,
  ne as j,
  md as k,
  Or as l,
  lo as m,
  Ot as n,
  y0 as o,
  P0 as p,
  Pe as q,
  W3 as r,
  R3 as s,
  lt as t,
  V0 as u,
  O3 as v,
  Ru as w,
  m2 as x,
  Ip as y,
  Ap as z,
};
