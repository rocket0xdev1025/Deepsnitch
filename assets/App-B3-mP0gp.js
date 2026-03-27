const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BN8Hac8J.js",
      "assets/wallet-libs-C4iBya-7.js",
      "assets/crypto-libs-BTkSibId.js",
      "assets/react-vendor-CKqXOJaQ.js",
      "assets/animation-libs-DQqW_Ij_.js",
      "assets/i18n-libs-7YlS43F0.js",
      "assets/css/index-BcRriLhl.css",
      "assets/PopupHowToBuy-CxXYW6Xa.js",
      "assets/index-Chjiymov.js",
      "assets/v4-C6aID195.js",
      "assets/empty-Bo4iX0pm.js",
      "assets/PopupConnect-D6O56i5a.js",
      "assets/swiper-react-D6YOFoP1.js",
      "assets/swiper-libs-ChlQaAX5.js",
      "assets/PopupAccount-Bybn2VD-.js",
      "assets/useBalance-Cm6QGrIt.js",
      "assets/PopupWhitepaper-ze4KooDf.js",
      "assets/PopupAudit-DKj0BMK5.js",
      "assets/PopupTerms-BlH4c1Xl.js",
      "assets/PopupPrivacy-BEB2VzhF.js",
      "assets/PopupDisclaimer-DHewr697.js",
      "assets/PopupCookie-wPHcL8MQ.js",
      "assets/TopBar-BpMSzm2u.js",
      "assets/Staking-BMoTZI5Q.js",
      "assets/seoConfigs-BEyLWaUm.js",
      "assets/Welcome-ItxRIC1o.js",
      "assets/Cards-CwWziXNZ.js",
      "assets/StakeForm-CtDglORI.js",
      "assets/Home-Mb6Ru59x.js",
    ])
) => i.map((i) => d[i]);
var Xt = Object.defineProperty;
var qt = (e) => {
  throw TypeError(e);
};
var Zt = (e, t, n) =>
  t in e
    ? Xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var lt = (e, t, n) => Zt(e, typeof t != "symbol" ? t + "" : t, n),
  Ct = (e, t, n) => t.has(e) || qt("Cannot " + n);
var J = (e, t, n) => (
    Ct(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Xe = (e, t, n) =>
    t.has(e)
      ? qt("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  ze = (e, t, n, r) => (
    Ct(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Ke = (e, t, n) => (Ct(e, t, "access private method"), n);
import {
  cc as getWalletClient,
  cd as readContract,
  r as reactExports,
  ce as watchChainId,
  cf as getChainId,
  cg as useSnapshot,
  ch as SolStoreUtil,
  R as React,
  a as requireReact,
  ci as formatEther,
  cj as formatUnits,
  $ as erc20Abi,
  _ as __vitePreload,
  bW as toHex,
  ck as parseEther,
  cl as parseUnits,
  bd as commonjsRequire,
} from "./wallet-libs-C4iBya-7.js";
import {
  l as Subscribable,
  A as pendingThenable,
  B as resolveEnabled,
  s as shallowEqualObjects,
  C as resolveStaleTime,
  t as noop,
  D as isServer,
  E as isValidTimeout,
  F as timeUntilStale,
  G as timeoutManager,
  I as focusManager,
  J as fetchState,
  K as replaceData,
  q as notifyManager,
  M as replaceEqualDeep,
  v as shouldThrowError,
  r as useQueryClient,
  f as useConfig,
  e as useAccount,
  j as jsxRuntimeExports,
  N as errorLogger,
  S as SvgIcon,
  g as useAppKit,
  c as useSafeAppKitAccount,
  a as useAppKitNetwork,
  b as useNotification,
  O as useAppKitAccount,
  P as useAppKitProvider,
  R as useConnectionStatus,
  p as publicClients,
  u as useWalletConnection,
  d as useSafeAppKitProvider,
  T as cleanupWalletConnections,
  L as LazyLoadFallback,
  U as useAppKitEvents,
  V as ConnectionStatusProvider,
} from "./index-BN8Hac8J.js";
import {
  R as ReactDOM,
  N as NavLink,
  a as useLocation,
  L as Link,
  O as Outlet,
  c as useParams,
  d as Navigate,
  e as Routes,
  f as Route,
  b as useNavigate,
  g as useRouteError,
  i as isRouteErrorResponse,
  h as RouterProvider2,
  j as createBrowserRouter,
} from "./react-vendor-CKqXOJaQ.js";
import {
  g as getDefaultExportFromCjs,
  N as Interface,
  t as Connection,
  P as PublicKey,
  p as TOKEN_PROGRAM_ID,
  L as LAMPORTS_PER_SOL,
  T as Transaction,
  S as SystemProgram,
  n as createAssociatedTokenAccountInstruction,
  O as createTransferInstruction,
  Q as ASSOCIATED_TOKEN_PROGRAM_ID,
  z as formatUnits$1,
  B as Buffer,
} from "./crypto-libs-BTkSibId.js";
import { u as useTranslation, T as Trans } from "./i18n-libs-7YlS43F0.js";
import { r as requirePropTypes } from "./index-Chjiymov.js";
import { AnimatePresence, motion } from "./animation-libs-DQqW_Ij_.js";
import { v as v4 } from "./v4-C6aID195.js";
import { r as require$$2 } from "./empty-Bo4iX0pm.js";
var ot,
  Ce,
  jt,
  nt,
  ft,
  yt,
  ut,
  pt,
  Rt,
  bt,
  wt,
  ht,
  gt,
  mt,
  Et,
  Pe,
  St,
  _t,
  At,
  It,
  Pt,
  Nt,
  Lt,
  Ot,
  zt,
  Ut,
  QueryObserver =
    ((Ut = class extends Subscribable {
      constructor(t, n) {
        super();
        Xe(this, Pe);
        Xe(this, ot);
        Xe(this, Ce);
        Xe(this, jt);
        Xe(this, nt);
        Xe(this, ft);
        Xe(this, yt);
        Xe(this, ut);
        Xe(this, pt);
        Xe(this, Rt);
        Xe(this, bt);
        Xe(this, wt);
        Xe(this, ht);
        Xe(this, gt);
        Xe(this, mt);
        Xe(this, Et, new Set());
        (this.options = n),
          ze(this, ot, t),
          ze(this, pt, null),
          ze(this, ut, pendingThenable()),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (J(this, Ce).addObserver(this),
          shouldFetchOnMount(J(this, Ce), this.options)
            ? Ke(this, Pe, St).call(this)
            : this.updateResult(),
          Ke(this, Pe, Pt).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return shouldFetchOn(
          J(this, Ce),
          this.options,
          this.options.refetchOnReconnect
        );
      }
      shouldFetchOnWindowFocus() {
        return shouldFetchOn(
          J(this, Ce),
          this.options,
          this.options.refetchOnWindowFocus
        );
      }
      destroy() {
        (this.listeners = new Set()),
          Ke(this, Pe, Nt).call(this),
          Ke(this, Pe, Lt).call(this),
          J(this, Ce).removeObserver(this);
      }
      setOptions(t) {
        const n = this.options,
          r = J(this, Ce);
        if (
          ((this.options = J(this, ot).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof resolveEnabled(this.options.enabled, J(this, Ce)) !=
              "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        Ke(this, Pe, Ot).call(this),
          J(this, Ce).setOptions(this.options),
          n._defaulted &&
            !shallowEqualObjects(this.options, n) &&
            J(this, ot)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: J(this, Ce),
                observer: this,
              });
        const i = this.hasListeners();
        i &&
          shouldFetchOptionally(J(this, Ce), r, this.options, n) &&
          Ke(this, Pe, St).call(this),
          this.updateResult(),
          i &&
            (J(this, Ce) !== r ||
              resolveEnabled(this.options.enabled, J(this, Ce)) !==
                resolveEnabled(n.enabled, J(this, Ce)) ||
              resolveStaleTime(this.options.staleTime, J(this, Ce)) !==
                resolveStaleTime(n.staleTime, J(this, Ce))) &&
            Ke(this, Pe, _t).call(this);
        const o = Ke(this, Pe, At).call(this);
        i &&
          (J(this, Ce) !== r ||
            resolveEnabled(this.options.enabled, J(this, Ce)) !==
              resolveEnabled(n.enabled, J(this, Ce)) ||
            o !== J(this, mt)) &&
          Ke(this, Pe, It).call(this, o);
      }
      getOptimisticResult(t) {
        const n = J(this, ot).getQueryCache().build(J(this, ot), t),
          r = this.createResult(n, t);
        return (
          shouldAssignObserverCurrentProperties(this, r) &&
            (ze(this, nt, r),
            ze(this, yt, this.options),
            ze(this, ft, J(this, Ce).state)),
          r
        );
      }
      getCurrentResult() {
        return J(this, nt);
      }
      trackResult(t, n) {
        return new Proxy(t, {
          get: (r, i) => (
            this.trackProp(i),
            n == null || n(i),
            i === "promise" &&
              !this.options.experimental_prefetchInRender &&
              J(this, ut).status === "pending" &&
              J(this, ut).reject(
                new Error(
                  "experimental_prefetchInRender feature flag is not enabled"
                )
              ),
            Reflect.get(r, i)
          ),
        });
      }
      trackProp(t) {
        J(this, Et).add(t);
      }
      getCurrentQuery() {
        return J(this, Ce);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = J(this, ot).defaultQueryOptions(t),
          r = J(this, ot).getQueryCache().build(J(this, ot), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return Ke(this, Pe, St)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), J(this, nt)));
      }
      createResult(t, n) {
        var H;
        const r = J(this, Ce),
          i = this.options,
          o = J(this, nt),
          a = J(this, ft),
          c = J(this, yt),
          d = t !== r ? t.state : J(this, jt),
          { state: p } = t;
        let m = { ...p },
          h = !1,
          f;
        if (n._optimisticResults) {
          const K = this.hasListeners(),
            W = !K && shouldFetchOnMount(t, n),
            L = K && shouldFetchOptionally(t, r, n, i);
          (W || L) && (m = { ...m, ...fetchState(p.data, t.options) }),
            n._optimisticResults === "isRestoring" && (m.fetchStatus = "idle");
        }
        let { error: b, errorUpdatedAt: v, status: j } = m;
        f = m.data;
        let S = !1;
        if (n.placeholderData !== void 0 && f === void 0 && j === "pending") {
          let K;
          o != null &&
          o.isPlaceholderData &&
          n.placeholderData === (c == null ? void 0 : c.placeholderData)
            ? ((K = o.data), (S = !0))
            : (K =
                typeof n.placeholderData == "function"
                  ? n.placeholderData(
                      (H = J(this, wt)) == null ? void 0 : H.state.data,
                      J(this, wt)
                    )
                  : n.placeholderData),
            K !== void 0 &&
              ((j = "success"),
              (f = replaceData(o == null ? void 0 : o.data, K, n)),
              (h = !0));
        }
        if (n.select && f !== void 0 && !S)
          if (
            o &&
            f === (a == null ? void 0 : a.data) &&
            n.select === J(this, Rt)
          )
            f = J(this, bt);
          else
            try {
              ze(this, Rt, n.select),
                (f = n.select(f)),
                (f = replaceData(o == null ? void 0 : o.data, f, n)),
                ze(this, bt, f),
                ze(this, pt, null);
            } catch (K) {
              ze(this, pt, K);
            }
        J(this, pt) &&
          ((b = J(this, pt)),
          (f = J(this, bt)),
          (v = Date.now()),
          (j = "error"));
        const C = m.fetchStatus === "fetching",
          k = j === "pending",
          _ = j === "error",
          P = k && C,
          x = f !== void 0,
          V = {
            status: j,
            fetchStatus: m.fetchStatus,
            isPending: k,
            isSuccess: j === "success",
            isError: _,
            isInitialLoading: P,
            isLoading: P,
            data: f,
            dataUpdatedAt: m.dataUpdatedAt,
            error: b,
            errorUpdatedAt: v,
            failureCount: m.fetchFailureCount,
            failureReason: m.fetchFailureReason,
            errorUpdateCount: m.errorUpdateCount,
            isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
            isFetchedAfterMount:
              m.dataUpdateCount > d.dataUpdateCount ||
              m.errorUpdateCount > d.errorUpdateCount,
            isFetching: C,
            isRefetching: C && !k,
            isLoadingError: _ && !x,
            isPaused: m.fetchStatus === "paused",
            isPlaceholderData: h,
            isRefetchError: _ && x,
            isStale: isStale(t, n),
            refetch: this.refetch,
            promise: J(this, ut),
            isEnabled: resolveEnabled(n.enabled, t) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const K = (B) => {
              V.status === "error"
                ? B.reject(V.error)
                : V.data !== void 0 && B.resolve(V.data);
            },
            W = () => {
              const B = ze(this, ut, (V.promise = pendingThenable()));
              K(B);
            },
            L = J(this, ut);
          switch (L.status) {
            case "pending":
              t.queryHash === r.queryHash && K(L);
              break;
            case "fulfilled":
              (V.status === "error" || V.data !== L.value) && W();
              break;
            case "rejected":
              (V.status !== "error" || V.error !== L.reason) && W();
              break;
          }
        }
        return V;
      }
      updateResult() {
        const t = J(this, nt),
          n = this.createResult(J(this, Ce), this.options);
        if (
          (ze(this, ft, J(this, Ce).state),
          ze(this, yt, this.options),
          J(this, ft).data !== void 0 && ze(this, wt, J(this, Ce)),
          shallowEqualObjects(n, t))
        )
          return;
        ze(this, nt, n);
        const r = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: i } = this.options,
            o = typeof i == "function" ? i() : i;
          if (o === "all" || (!o && !J(this, Et).size)) return !0;
          const a = new Set(o ?? J(this, Et));
          return (
            this.options.throwOnError && a.add("error"),
            Object.keys(J(this, nt)).some((c) => {
              const l = c;
              return J(this, nt)[l] !== t[l] && a.has(l);
            })
          );
        };
        Ke(this, Pe, zt).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Ke(this, Pe, Pt).call(this);
      }
    }),
    (ot = new WeakMap()),
    (Ce = new WeakMap()),
    (jt = new WeakMap()),
    (nt = new WeakMap()),
    (ft = new WeakMap()),
    (yt = new WeakMap()),
    (ut = new WeakMap()),
    (pt = new WeakMap()),
    (Rt = new WeakMap()),
    (bt = new WeakMap()),
    (wt = new WeakMap()),
    (ht = new WeakMap()),
    (gt = new WeakMap()),
    (mt = new WeakMap()),
    (Et = new WeakMap()),
    (Pe = new WeakSet()),
    (St = function (t) {
      Ke(this, Pe, Ot).call(this);
      let n = J(this, Ce).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(noop)), n;
    }),
    (_t = function () {
      Ke(this, Pe, Nt).call(this);
      const t = resolveStaleTime(this.options.staleTime, J(this, Ce));
      if (isServer || J(this, nt).isStale || !isValidTimeout(t)) return;
      const r = timeUntilStale(J(this, nt).dataUpdatedAt, t) + 1;
      ze(
        this,
        ht,
        timeoutManager.setTimeout(() => {
          J(this, nt).isStale || this.updateResult();
        }, r)
      );
    }),
    (At = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(J(this, Ce))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (It = function (t) {
      Ke(this, Pe, Lt).call(this),
        ze(this, mt, t),
        !(
          isServer ||
          resolveEnabled(this.options.enabled, J(this, Ce)) === !1 ||
          !isValidTimeout(J(this, mt)) ||
          J(this, mt) === 0
        ) &&
          ze(
            this,
            gt,
            timeoutManager.setInterval(() => {
              (this.options.refetchIntervalInBackground ||
                focusManager.isFocused()) &&
                Ke(this, Pe, St).call(this);
            }, J(this, mt))
          );
    }),
    (Pt = function () {
      Ke(this, Pe, _t).call(this),
        Ke(this, Pe, It).call(this, Ke(this, Pe, At).call(this));
    }),
    (Nt = function () {
      J(this, ht) &&
        (timeoutManager.clearTimeout(J(this, ht)), ze(this, ht, void 0));
    }),
    (Lt = function () {
      J(this, gt) &&
        (timeoutManager.clearInterval(J(this, gt)), ze(this, gt, void 0));
    }),
    (Ot = function () {
      const t = J(this, ot).getQueryCache().build(J(this, ot), this.options);
      if (t === J(this, Ce)) return;
      const n = J(this, Ce);
      ze(this, Ce, t),
        ze(this, jt, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (zt = function (t) {
      notifyManager.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(J(this, nt));
          }),
          J(this, ot)
            .getQueryCache()
            .notify({ query: J(this, Ce), type: "observerResultsUpdated" });
      });
    }),
    Ut);
function shouldLoadOnMount(e, t) {
  return (
    resolveEnabled(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function shouldFetchOnMount(e, t) {
  return (
    shouldLoadOnMount(e, t) ||
    (e.state.data !== void 0 && shouldFetchOn(e, t, t.refetchOnMount))
  );
}
function shouldFetchOn(e, t, n) {
  if (
    resolveEnabled(t.enabled, e) !== !1 &&
    resolveStaleTime(t.staleTime, e) !== "static"
  ) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && isStale(e, t));
  }
  return !1;
}
function shouldFetchOptionally(e, t, n, r) {
  return (
    (e !== t || resolveEnabled(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    isStale(e, n)
  );
}
function isStale(e, t) {
  return (
    resolveEnabled(t.enabled, e) !== !1 &&
    e.isStaleByTime(resolveStaleTime(t.staleTime, e))
  );
}
function shouldAssignObserverCurrentProperties(e, t) {
  return !shallowEqualObjects(e.getCurrentResult(), t);
}
function structuralSharing(e, t) {
  return replaceEqualDeep(e, t);
}
function hashFn(e) {
  return JSON.stringify(e, (t, n) =>
    isPlainObject$1(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : typeof n == "bigint"
      ? n.toString()
      : n
  );
}
function isPlainObject$1(e) {
  if (!hasObjectPrototype(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!hasObjectPrototype(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function hasObjectPrototype(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function filterQueryOptions(e) {
  const {
    _defaulted: t,
    behavior: n,
    gcTime: r,
    initialData: i,
    initialDataUpdatedAt: o,
    maxPages: a,
    meta: c,
    networkMode: l,
    queryFn: d,
    queryHash: p,
    queryKey: m,
    queryKeyHashFn: h,
    retry: f,
    retryDelay: b,
    structuralSharing: v,
    getPreviousPageParam: j,
    getNextPageParam: S,
    initialPageParam: C,
    _optimisticResults: k,
    enabled: _,
    notifyOnChangeProps: P,
    placeholderData: x,
    refetchInterval: Y,
    refetchIntervalInBackground: V,
    refetchOnMount: H,
    refetchOnReconnect: K,
    refetchOnWindowFocus: W,
    retryOnMount: L,
    select: B,
    staleTime: M,
    suspense: Q,
    throwOnError: ye,
    config: z,
    connector: de,
    query: te,
    ...w
  } = e;
  return w;
}
function getWalletClientQueryOptions(e, t = {}) {
  return {
    gcTime: 0,
    async queryFn({ queryKey: n }) {
      const { connector: r } = t,
        { connectorUid: i, scopeKey: o, ...a } = n[1];
      return getWalletClient(e, { ...a, connector: r });
    },
    queryKey: getWalletClientQueryKey(t),
  };
}
function getWalletClientQueryKey(e = {}) {
  const { connector: t, ...n } = e;
  return [
    "walletClient",
    { ...filterQueryOptions(n), connectorUid: t == null ? void 0 : t.uid },
  ];
}
function readContractQueryOptions(e, t = {}) {
  return {
    async queryFn({ queryKey: n }) {
      const r = t.abi;
      if (!r) throw new Error("abi is required");
      const { functionName: i, scopeKey: o, ...a } = n[1],
        c = (() => {
          const l = n[1];
          if (l.address) return { address: l.address };
          if (l.code) return { code: l.code };
          throw new Error("address or code is required");
        })();
      if (!i) throw new Error("functionName is required");
      return readContract(e, {
        abi: r,
        functionName: i,
        args: a.args,
        ...c,
        ...a,
      });
    },
    queryKey: readContractQueryKey(t),
  };
}
function readContractQueryKey(e = {}) {
  const { abi: t, ...n } = e;
  return ["readContract", filterQueryOptions(n)];
}
var IsRestoringContext = reactExports.createContext(!1),
  useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue()),
  useQueryErrorResetBoundary = () =>
    reactExports.useContext(QueryErrorResetBoundaryContext),
  ensurePreventErrorBoundaryRetry = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  useClearResetErrorBoundary = (e) => {
    reactExports.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  getHasError = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || shouldThrowError(n, [e.error, r])),
  ensureSuspenseTimers = (e) => {
    if (e.suspense) {
      const n = (i) => (i === "static" ? i : Math.max(i ?? 1e3, 1e3)),
        r = e.staleTime;
      (e.staleTime = typeof r == "function" ? (...i) => n(r(...i)) : n(r)),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3));
    }
  },
  willFetch = (e, t) => e.isLoading && e.isFetching && !t,
  shouldSuspend = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  fetchOptimistic = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function useBaseQuery(e, t, n) {
  var m, h, f, b, v;
  const r = useIsRestoring(),
    i = useQueryErrorResetBoundary(),
    o = useQueryClient(),
    a = o.defaultQueryOptions(e);
  (h =
    (m = o.getDefaultOptions().queries) == null
      ? void 0
      : m._experimental_beforeQuery) == null || h.call(m, a),
    (a._optimisticResults = r ? "isRestoring" : "optimistic"),
    ensureSuspenseTimers(a),
    ensurePreventErrorBoundaryRetry(a, i),
    useClearResetErrorBoundary(i);
  const c = !o.getQueryCache().get(a.queryHash),
    [l] = reactExports.useState(() => new t(o, a)),
    d = l.getOptimisticResult(a),
    p = !r && e.subscribed !== !1;
  if (
    (reactExports.useSyncExternalStore(
      reactExports.useCallback(
        (j) => {
          const S = p ? l.subscribe(notifyManager.batchCalls(j)) : noop;
          return l.updateResult(), S;
        },
        [l, p]
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult()
    ),
    reactExports.useEffect(() => {
      l.setOptions(a);
    }, [a, l]),
    shouldSuspend(a, d))
  )
    throw fetchOptimistic(a, l, i);
  if (
    getHasError({
      result: d,
      errorResetBoundary: i,
      throwOnError: a.throwOnError,
      query: o.getQueryCache().get(a.queryHash),
      suspense: a.suspense,
    })
  )
    throw d.error;
  if (
    ((b =
      (f = o.getDefaultOptions().queries) == null
        ? void 0
        : f._experimental_afterQuery) == null || b.call(f, a, d),
    a.experimental_prefetchInRender && !isServer && willFetch(d, r))
  ) {
    const j = c
      ? fetchOptimistic(a, l, i)
      : (v = o.getQueryCache().get(a.queryHash)) == null
      ? void 0
      : v.promise;
    j == null ||
      j.catch(noop).finally(() => {
        l.updateResult();
      });
  }
  return a.notifyOnChangeProps ? d : l.trackResult(d);
}
function useQuery$1(e, t) {
  return useBaseQuery(e, QueryObserver);
}
function useQuery(e) {
  const t = useQuery$1({ ...e, queryKeyHashFn: hashFn });
  return (t.queryKey = e.queryKey), t;
}
function useChainId(e = {}) {
  const t = useConfig(e);
  return reactExports.useSyncExternalStore(
    (n) => watchChainId(t, { onChange: n }),
    () => getChainId(t),
    () => getChainId(t)
  );
}
function useReadContract(e = {}) {
  const { abi: t, address: n, functionName: r, query: i = {} } = e,
    o = e.code,
    a = useConfig(e),
    c = useChainId({ config: a }),
    l = readContractQueryOptions(a, { ...e, chainId: e.chainId ?? c }),
    d = !!((n || o) && t && r && (i.enabled ?? !0));
  return useQuery({
    ...i,
    ...l,
    enabled: d,
    structuralSharing: i.structuralSharing ?? structuralSharing,
  });
}
function useWalletClient(e = {}) {
  const { query: t = {}, ...n } = e,
    r = useConfig(n),
    i = useQueryClient(),
    { address: o, connector: a, status: c } = useAccount({ config: r }),
    l = useChainId({ config: r }),
    d = e.connector ?? a,
    { queryKey: p, ...m } = getWalletClientQueryOptions(r, {
      ...e,
      chainId: e.chainId ?? l,
      connector: e.connector ?? a,
    }),
    h = !!(
      (c === "connected" ||
        (c === "reconnecting" && d != null && d.getProvider)) &&
      (t.enabled ?? !0)
    ),
    f = reactExports.useRef(o);
  return (
    reactExports.useEffect(() => {
      const b = f.current;
      !o && b
        ? (i.removeQueries({ queryKey: p }), (f.current = void 0))
        : o !== b && (i.invalidateQueries({ queryKey: p }), (f.current = o));
    }, [o, i]),
    useQuery({
      ...t,
      ...m,
      queryKey: p,
      enabled: h,
      staleTime: Number.POSITIVE_INFINITY,
    })
  );
}
function useAppKitConnection() {
  return { connection: useSnapshot(SolStoreUtil.state).connection };
}
var reactFastCompare, hasRequiredReactFastCompare;
function requireReactFastCompare() {
  if (hasRequiredReactFastCompare) return reactFastCompare;
  hasRequiredReactFastCompare = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    n = typeof Set == "function",
    r = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(o, a) {
    if (o === a) return !0;
    if (o && a && typeof o == "object" && typeof a == "object") {
      if (o.constructor !== a.constructor) return !1;
      var c, l, d;
      if (Array.isArray(o)) {
        if (((c = o.length), c != a.length)) return !1;
        for (l = c; l-- !== 0; ) if (!i(o[l], a[l])) return !1;
        return !0;
      }
      var p;
      if (t && o instanceof Map && a instanceof Map) {
        if (o.size !== a.size) return !1;
        for (p = o.entries(); !(l = p.next()).done; )
          if (!a.has(l.value[0])) return !1;
        for (p = o.entries(); !(l = p.next()).done; )
          if (!i(l.value[1], a.get(l.value[0]))) return !1;
        return !0;
      }
      if (n && o instanceof Set && a instanceof Set) {
        if (o.size !== a.size) return !1;
        for (p = o.entries(); !(l = p.next()).done; )
          if (!a.has(l.value[0])) return !1;
        return !0;
      }
      if (r && ArrayBuffer.isView(o) && ArrayBuffer.isView(a)) {
        if (((c = o.length), c != a.length)) return !1;
        for (l = c; l-- !== 0; ) if (o[l] !== a[l]) return !1;
        return !0;
      }
      if (o.constructor === RegExp)
        return o.source === a.source && o.flags === a.flags;
      if (
        o.valueOf !== Object.prototype.valueOf &&
        typeof o.valueOf == "function" &&
        typeof a.valueOf == "function"
      )
        return o.valueOf() === a.valueOf();
      if (
        o.toString !== Object.prototype.toString &&
        typeof o.toString == "function" &&
        typeof a.toString == "function"
      )
        return o.toString() === a.toString();
      if (((d = Object.keys(o)), (c = d.length), c !== Object.keys(a).length))
        return !1;
      for (l = c; l-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(a, d[l])) return !1;
      if (e && o instanceof Element) return !1;
      for (l = c; l-- !== 0; )
        if (
          !(
            (d[l] === "_owner" || d[l] === "__v" || d[l] === "__o") &&
            o.$$typeof
          ) &&
          !i(o[d[l]], a[d[l]])
        )
          return !1;
      return !0;
    }
    return o !== o && a !== a;
  }
  return (
    (reactFastCompare = function (a, c) {
      try {
        return i(a, c);
      } catch (l) {
        if ((l.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw l;
      }
    }),
    reactFastCompare
  );
}
var reactFastCompareExports = requireReactFastCompare();
const fastCompare = getDefaultExportFromCjs(reactFastCompareExports);
var browser, hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser;
  hasRequiredBrowser = 1;
  var e = function (t, n, r, i, o, a, c, l) {
    if (!t) {
      var d;
      if (n === void 0)
        d = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var p = [r, i, o, a, c, l],
          m = 0;
        (d = new Error(
          n.replace(/%s/g, function () {
            return p[m++];
          })
        )),
          (d.name = "Invariant Violation");
      }
      throw ((d.framesToPop = 1), d);
    }
  };
  return (browser = e), browser;
}
var browserExports = requireBrowser();
const invariant = getDefaultExportFromCjs(browserExports);
var shallowequal, hasRequiredShallowequal;
function requireShallowequal() {
  return (
    hasRequiredShallowequal ||
      ((hasRequiredShallowequal = 1),
      (shallowequal = function (t, n, r, i) {
        var o = r ? r.call(i, t, n) : void 0;
        if (o !== void 0) return !!o;
        if (t === n) return !0;
        if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
        var a = Object.keys(t),
          c = Object.keys(n);
        if (a.length !== c.length) return !1;
        for (
          var l = Object.prototype.hasOwnProperty.bind(n), d = 0;
          d < a.length;
          d++
        ) {
          var p = a[d];
          if (!l(p)) return !1;
          var m = t[p],
            h = n[p];
          if (
            ((o = r ? r.call(i, m, h, p) : void 0),
            o === !1 || (o === void 0 && m !== h))
          )
            return !1;
        }
        return !0;
      })),
    shallowequal
  );
}
var shallowequalExports = requireShallowequal();
const shallowEqual = getDefaultExportFromCjs(shallowequalExports);
var TAG_NAMES = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(TAG_NAMES || {}),
  SEO_PRIORITY_TAGS = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  VALID_TAG_NAMES = Object.values(TAG_NAMES),
  REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
    (e, [t, n]) => ((e[n] = t), e),
    {}
  ),
  HELMET_ATTRIBUTE = "data-rh",
  HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  getInnermostProperty = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  getTitleFromPropsList = (e) => {
    let t = getInnermostProperty(e, "title");
    const n = getInnermostProperty(e, HELMET_PROPS.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), n && t))
      return n.replace(/%s/g, () => t);
    const r = getInnermostProperty(e, HELMET_PROPS.DEFAULT_TITLE);
    return t || r || void 0;
  },
  getOnChangeClientState = (e) =>
    getInnermostProperty(e, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {}),
  getAttributesFromPropsList = (e, t) =>
    t
      .filter((n) => typeof n[e] < "u")
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  getBaseTagFromPropsList = (e, t) =>
    t
      .filter((n) => typeof n.base < "u")
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const i = Object.keys(r);
          for (let o = 0; o < i.length; o += 1) {
            const c = i[o].toLowerCase();
            if (e.indexOf(c) !== -1 && r[c]) return n.concat(r);
          }
        }
        return n;
      }, []),
  warn = (e) => console && typeof console.warn == "function" && console.warn(e),
  getTagsFromPropsList = (e, t, n) => {
    const r = {};
    return n
      .filter((i) =>
        Array.isArray(i[e])
          ? !0
          : (typeof i[e] < "u" &&
              warn(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof i[
                  e
                ]}"`
              ),
            !1)
      )
      .map((i) => i[e])
      .reverse()
      .reduce((i, o) => {
        const a = {};
        o.filter((l) => {
          let d;
          const p = Object.keys(l);
          for (let h = 0; h < p.length; h += 1) {
            const f = p[h],
              b = f.toLowerCase();
            t.indexOf(b) !== -1 &&
              !(d === "rel" && l[d].toLowerCase() === "canonical") &&
              !(b === "rel" && l[b].toLowerCase() === "stylesheet") &&
              (d = b),
              t.indexOf(f) !== -1 &&
                (f === "innerHTML" || f === "cssText" || f === "itemprop") &&
                (d = f);
          }
          if (!d || !l[d]) return !1;
          const m = l[d].toLowerCase();
          return (
            r[d] || (r[d] = {}),
            a[d] || (a[d] = {}),
            r[d][m] ? !1 : ((a[d][m] = !0), !0)
          );
        })
          .reverse()
          .forEach((l) => i.push(l));
        const c = Object.keys(a);
        for (let l = 0; l < c.length; l += 1) {
          const d = c[l],
            p = { ...r[d], ...a[d] };
          r[d] = p;
        }
        return i;
      }, [])
      .reverse();
  },
  getAnyTrueFromPropsList = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  reducePropsToState = (e) => ({
    baseTag: getBaseTagFromPropsList(["href"], e),
    bodyAttributes: getAttributesFromPropsList("bodyAttributes", e),
    defer: getInnermostProperty(e, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(e, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList("htmlAttributes", e),
    linkTags: getTagsFromPropsList("link", ["rel", "href"], e),
    metaTags: getTagsFromPropsList(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e
    ),
    noscriptTags: getTagsFromPropsList("noscript", ["innerHTML"], e),
    onChangeClientState: getOnChangeClientState(e),
    scriptTags: getTagsFromPropsList("script", ["src", "innerHTML"], e),
    styleTags: getTagsFromPropsList("style", ["cssText"], e),
    title: getTitleFromPropsList(e),
    titleAttributes: getAttributesFromPropsList("titleAttributes", e),
    prioritizeSeoTags: getAnyTrueFromPropsList(
      e,
      HELMET_PROPS.PRIORITIZE_SEO_TAGS
    ),
  }),
  flattenArray = (e) => (Array.isArray(e) ? e.join("") : e),
  checkIfPropsMatch = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  prioritizer = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (n, r) => (
            checkIfPropsMatch(r, t) ? n.priority.push(r) : n.default.push(r), n
          ),
          { priority: [], default: [] }
        )
      : { default: e, priority: [] },
  without = (e, t) => ({ ...e, [t]: void 0 }),
  SELF_CLOSING_TAGS = ["noscript", "script", "style"],
  encodeSpecialCharacters = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  generateElementAttributesAsString = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ""),
  generateTitleAsString = (e, t, n, r) => {
    const i = generateElementAttributesAsString(n),
      o = flattenArray(t);
    return i
      ? `<${e} ${HELMET_ATTRIBUTE}="true" ${i}>${encodeSpecialCharacters(
          o,
          r
        )}</${e}>`
      : `<${e} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
          o,
          r
        )}</${e}>`;
  },
  generateTagsAsString = (e, t, n = !0) =>
    t.reduce((r, i) => {
      const o = i,
        a = Object.keys(o)
          .filter((d) => !(d === "innerHTML" || d === "cssText"))
          .reduce((d, p) => {
            const m =
              typeof o[p] > "u"
                ? p
                : `${p}="${encodeSpecialCharacters(o[p], n)}"`;
            return d ? `${d} ${m}` : m;
          }, ""),
        c = o.innerHTML || o.cssText || "",
        l = SELF_CLOSING_TAGS.indexOf(e) === -1;
      return `${r}<${e} ${HELMET_ATTRIBUTE}="true" ${a}${
        l ? "/>" : `>${c}</${e}>`
      }`;
    }, ""),
  convertElementAttributesToReactProps = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const i = REACT_TAG_MAP[r];
      return (n[i || r] = e[r]), n;
    }, t),
  generateTitleAsReactComponent = (e, t, n) => {
    const r = { key: t, [HELMET_ATTRIBUTE]: !0 },
      i = convertElementAttributesToReactProps(n, r);
    return [React.createElement("title", i, t)];
  },
  generateTagsAsReactComponent = (e, t) =>
    t.map((n, r) => {
      const i = { key: r, [HELMET_ATTRIBUTE]: !0 };
      return (
        Object.keys(n).forEach((o) => {
          const c = REACT_TAG_MAP[o] || o;
          if (c === "innerHTML" || c === "cssText") {
            const l = n.innerHTML || n.cssText;
            i.dangerouslySetInnerHTML = { __html: l };
          } else i[c] = n[o];
        }),
        React.createElement(e, i)
      );
    }),
  getMethodsForTag = (e, t, n = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () =>
            generateTitleAsReactComponent(e, t.title, t.titleAttributes),
          toString: () =>
            generateTitleAsString(e, t.title, t.titleAttributes, n),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return {
          toComponent: () => convertElementAttributesToReactProps(t),
          toString: () => generateElementAttributesAsString(t),
        };
      default:
        return {
          toComponent: () => generateTagsAsReactComponent(e, t),
          toString: () => generateTagsAsString(e, t, n),
        };
    }
  },
  getPriorityMethods = ({
    metaTags: e,
    linkTags: t,
    scriptTags: n,
    encode: r,
  }) => {
    const i = prioritizer(e, SEO_PRIORITY_TAGS.meta),
      o = prioritizer(t, SEO_PRIORITY_TAGS.link),
      a = prioritizer(n, SEO_PRIORITY_TAGS.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...generateTagsAsReactComponent("meta", i.priority),
          ...generateTagsAsReactComponent("link", o.priority),
          ...generateTagsAsReactComponent("script", a.priority),
        ],
        toString: () =>
          `${getMethodsForTag("meta", i.priority, r)} ${getMethodsForTag(
            "link",
            o.priority,
            r
          )} ${getMethodsForTag("script", a.priority, r)}`,
      },
      metaTags: i.default,
      linkTags: o.default,
      scriptTags: a.default,
    };
  },
  mapStateOnServer = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: i,
      noscriptTags: o,
      styleTags: a,
      title: c = "",
      titleAttributes: l,
      prioritizeSeoTags: d,
    } = e;
    let { linkTags: p, metaTags: m, scriptTags: h } = e,
      f = { toComponent: () => {}, toString: () => "" };
    return (
      d &&
        ({
          priorityMethods: f,
          linkTags: p,
          metaTags: m,
          scriptTags: h,
        } = getPriorityMethods(e)),
      {
        priority: f,
        base: getMethodsForTag("base", t, r),
        bodyAttributes: getMethodsForTag("bodyAttributes", n, r),
        htmlAttributes: getMethodsForTag("htmlAttributes", i, r),
        link: getMethodsForTag("link", p, r),
        meta: getMethodsForTag("meta", m, r),
        noscript: getMethodsForTag("noscript", o, r),
        script: getMethodsForTag("script", h, r),
        style: getMethodsForTag("style", a, r),
        title: getMethodsForTag("title", { title: c, titleAttributes: l }, r),
      }
    );
  },
  server_default = mapStateOnServer,
  instances = [],
  isDocument = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  HelmetData = class {
    constructor(e, t) {
      lt(this, "instances", []);
      lt(this, "canUseDOM", isDocument);
      lt(this, "context");
      lt(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? instances : this.instances),
          add: (e) => {
            (this.canUseDOM ? instances : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? instances : this.instances).indexOf(e);
            (this.canUseDOM ? instances : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = server_default({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  defaultValue = {},
  Context = React.createContext(defaultValue),
  xt,
  HelmetProvider =
    ((xt = class extends reactExports.Component {
      constructor(n) {
        super(n);
        lt(this, "helmetData");
        this.helmetData = new HelmetData(
          this.props.context || {},
          xt.canUseDOM
        );
      }
      render() {
        return React.createElement(
          Context.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    lt(xt, "canUseDOM", isDocument),
    xt),
  updateTags = (e, t) => {
    const n = document.head || document.querySelector("head"),
      r = n.querySelectorAll(`${e}[${HELMET_ATTRIBUTE}]`),
      i = [].slice.call(r),
      o = [];
    let a;
    return (
      t &&
        t.length &&
        t.forEach((c) => {
          const l = document.createElement(e);
          for (const d in c)
            if (Object.prototype.hasOwnProperty.call(c, d))
              if (d === "innerHTML") l.innerHTML = c.innerHTML;
              else if (d === "cssText")
                l.styleSheet
                  ? (l.styleSheet.cssText = c.cssText)
                  : l.appendChild(document.createTextNode(c.cssText));
              else {
                const p = d,
                  m = typeof c[p] > "u" ? "" : c[p];
                l.setAttribute(d, m);
              }
          l.setAttribute(HELMET_ATTRIBUTE, "true"),
            i.some((d, p) => ((a = p), l.isEqualNode(d)))
              ? i.splice(a, 1)
              : o.push(l);
        }),
      i.forEach((c) => {
        var l;
        return (l = c.parentNode) == null ? void 0 : l.removeChild(c);
      }),
      o.forEach((c) => n.appendChild(c)),
      { oldTags: i, newTags: o }
    );
  },
  updateAttributes = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(HELMET_ATTRIBUTE),
      i = r ? r.split(",") : [],
      o = [...i],
      a = Object.keys(t);
    for (const c of a) {
      const l = t[c] || "";
      n.getAttribute(c) !== l && n.setAttribute(c, l),
        i.indexOf(c) === -1 && i.push(c);
      const d = o.indexOf(c);
      d !== -1 && o.splice(d, 1);
    }
    for (let c = o.length - 1; c >= 0; c -= 1) n.removeAttribute(o[c]);
    i.length === o.length
      ? n.removeAttribute(HELMET_ATTRIBUTE)
      : n.getAttribute(HELMET_ATTRIBUTE) !== a.join(",") &&
        n.setAttribute(HELMET_ATTRIBUTE, a.join(","));
  },
  updateTitle = (e, t) => {
    typeof e < "u" &&
      document.title !== e &&
      (document.title = flattenArray(e)),
      updateAttributes("title", t);
  },
  commitTagChanges = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: i,
      linkTags: o,
      metaTags: a,
      noscriptTags: c,
      onChangeClientState: l,
      scriptTags: d,
      styleTags: p,
      title: m,
      titleAttributes: h,
    } = e;
    updateAttributes("body", r), updateAttributes("html", i), updateTitle(m, h);
    const f = {
        baseTag: updateTags("base", n),
        linkTags: updateTags("link", o),
        metaTags: updateTags("meta", a),
        noscriptTags: updateTags("noscript", c),
        scriptTags: updateTags("script", d),
        styleTags: updateTags("style", p),
      },
      b = {},
      v = {};
    Object.keys(f).forEach((j) => {
      const { newTags: S, oldTags: C } = f[j];
      S.length && (b[j] = S), C.length && (v[j] = f[j].oldTags);
    }),
      t && t(),
      l(e, b, v);
  },
  _helmetCallback = null,
  handleStateChangeOnClient = (e) => {
    _helmetCallback && cancelAnimationFrame(_helmetCallback),
      e.defer
        ? (_helmetCallback = requestAnimationFrame(() => {
            commitTagChanges(e, () => {
              _helmetCallback = null;
            });
          }))
        : (commitTagChanges(e), (_helmetCallback = null));
  },
  client_default = handleStateChangeOnClient,
  HelmetDispatcher = class extends reactExports.Component {
    constructor() {
      super(...arguments);
      lt(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !shallowEqual(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const i = reducePropsToState(
        t.get().map((o) => {
          const a = { ...o.props };
          return delete a.context, a;
        })
      );
      HelmetProvider.canUseDOM
        ? client_default(i)
        : server_default && (r = server_default(i)),
        n(r);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  Tt,
  Helmet =
    ((Tt = class extends reactExports.Component {
      shouldComponentUpdate(e) {
        return !fastCompare(
          without(this.props, "helmetData"),
          without(e, "helmetData")
        );
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...n, ...this.mapNestedChildrenToProps(e, r) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case "body":
            return { ...t, bodyAttributes: { ...n } };
          case "html":
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          invariant(
            VALID_TAG_NAMES.some((n) => e.type === n),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${VALID_TAG_NAMES.join(
                  ", "
                )} are allowed. Helmet does not support rendering <${
                  e.type
                }> elements. Refer to our API for more information.`
          ),
          invariant(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((n) => typeof n != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          React.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: i, ...o } = r.props,
              a = Object.keys(o).reduce(
                (l, d) => ((l[HTML_TAG_MAP[d] || d] = o[d]), l),
                {}
              );
            let { type: c } = r;
            switch (
              (typeof c == "symbol"
                ? (c = c.toString())
                : this.warnOnInvalidChildren(r, i),
              c)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(i, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                n = this.flattenArrayTypeChildren(r, n, a, i);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, a, i);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if (
          (e && (n = this.mapChildrenToProps(e, n)),
          r && !(r instanceof HelmetData))
        ) {
          const i = r;
          (r = new HelmetData(i.context, !0)), delete n.helmetData;
        }
        return r
          ? React.createElement(HelmetDispatcher, { ...n, context: r.value })
          : React.createElement(Context.Consumer, null, (i) =>
              React.createElement(HelmetDispatcher, { ...n, context: i })
            );
      }
    }),
    lt(Tt, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    Tt);
const SharedStateContext = reactExports.createContext(null);
function SharedStateProvider({ children: e }) {
  const [t, n] = reactExports.useState(!1);
  return jsxRuntimeExports.jsx(SharedStateContext.Provider, {
    value: { isCreditCardMode: t, setIsCreditCardMode: n },
    children: e,
  });
}
function useSharedState() {
  return reactExports.useContext(SharedStateContext);
}
const styles = {
    "language-switcher-container": "_language-switcher-container_1omtw_1",
    "language-dropdown": "_language-dropdown_1omtw_7",
  },
  LanguageSwitcher = () => {
    var S, C;
    const { i18n: e } = useTranslation(),
      [t, n] = reactExports.useState(!1),
      [r, i] = reactExports.useState(!1),
      [o, a] = reactExports.useState(!1),
      [c, l] = reactExports.useState(!1),
      d = reactExports.useRef(null),
      p = reactExports.useRef(null),
      m = reactExports.useRef(null),
      [h, f] = reactExports.useState({}),
      b = [
        { code: "en", label: "EN", fullLabel: "ENGLISH", countryCode: "gb" },
        { code: "es", label: "ES", fullLabel: "ESPAÑOL", countryCode: "es" },
        { code: "fr", label: "FR", fullLabel: "FRANÇAIS", countryCode: "fr" },
        { code: "nl", label: "NL", fullLabel: "NEDERLANDS", countryCode: "nl" },
        { code: "tr", label: "TR", fullLabel: "TÜRKÇE", countryCode: "tr" },
        { code: "it", label: "IT", fullLabel: "ITALIANO", countryCode: "it" },
        { code: "de", label: "DE", fullLabel: "DEUTSCH", countryCode: "de" },
        { code: "pt", label: "PT", fullLabel: "PORTUGUÊS", countryCode: "pt" },
        { code: "vi", label: "VI", fullLabel: "TIẾNG VIỆT", countryCode: "vn" },
      ];
    reactExports.useEffect(() => {
      if (p.current) {
        const k =
          p.current.closest(".container") &&
          p.current
            .closest(".container")
            .parentElement.classList.contains("fixed");
        l(k);
      }
    }, []),
      reactExports.useEffect(() => {
        if (t && p.current) {
          const k = p.current.getBoundingClientRect();
          f(
            c
              ? {
                  position: "fixed",
                  top: k.bottom + 4,
                  right: 20,
                  width: 240,
                  zIndex: 9999,
                }
              : {
                  position: "absolute",
                  top: k.bottom + window.scrollY + 4,
                  left: k.right - 240 + window.scrollX,
                  width: 240,
                  zIndex: 9999,
                }
          );
        }
      }, [t, c]);
    const v = async (k) => {
      if (k === e.language || o) {
        n(!1);
        return;
      }
      a(!0), i(!0);
      try {
        e.changeLanguageOptimized
          ? await e.changeLanguageOptimized(k)
          : await e.changeLanguage(k),
          setTimeout(() => {
            i(!1), n(!1), a(!1);
          }, 300);
      } catch (_) {
        console.error("Failed to change language:", _), i(!1), n(!1), a(!1);
      }
    };
    reactExports.useEffect(() => {
      const k = (_) => {
        t &&
          d.current &&
          !d.current.contains(_.target) &&
          p.current &&
          !p.current.contains(_.target) &&
          !o &&
          n(!1);
      };
      return (
        document.addEventListener("mousedown", k),
        () => {
          document.removeEventListener("mousedown", k);
        }
      );
    }, [t, o]);
    const j = jsxRuntimeExports.jsx("div", {
      ref: d,
      className: `bg-[#0f1a17]/95 backdrop-blur-md rounded-[12px] w-[240px] text-white flex flex-col border-green/30 overflow-hidden transition-all duration-300 dropdown-panel ${
        t ? "open" : ""
      } ${c ? "mobile-dropdown" : ""}`,
      style: h,
      children: jsxRuntimeExports.jsx("div", {
        className: "p-[4px]",
        children: b.map((k) =>
          jsxRuntimeExports.jsxs(
            "div",
            {
              className: `font-VT323 text-26 leading-26 tracking-1 cursor-pointer transition-all duration-200 p-[12px] rounded-[8px] flex items-center gap-3 lang-option ${
                e.language === k.code ? "active" : ""
              } ${o ? "pointer-events-none opacity-50" : ""}`,
              onClick: (_) => {
                _.stopPropagation(), o || v(k.code);
              },
              children: [
                jsxRuntimeExports.jsx("span", {
                  className: `fi fi-${k.countryCode} text-xl lang-flag`,
                }),
                jsxRuntimeExports.jsx("span", {
                  className: "lang-name",
                  children: k.fullLabel,
                }),
                e.language === k.code &&
                  !o &&
                  jsxRuntimeExports.jsx("span", {
                    className: "ml-auto lang-check",
                    children: jsxRuntimeExports.jsx("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: jsxRuntimeExports.jsx("path", {
                        d: "M3 8L6.5 11.5L13 5",
                        stroke: "#D6FC70",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                  }),
                o &&
                  e.language === k.code &&
                  jsxRuntimeExports.jsx("span", {
                    className: "ml-auto lang-check",
                    children: jsxRuntimeExports.jsx("div", {
                      className:
                        "w-4 h-4 border-2 border-green/30 border-t-green rounded-full animate-spin",
                    }),
                  }),
              ],
            },
            k.code
          )
        ),
      }),
    });
    return jsxRuntimeExports.jsx("div", {
      ref: m,
      className: `${styles["language-switcher-container"]} ${
        c ? "mobile-lang-switcher" : ""
      }`,
      children: jsxRuntimeExports.jsxs("div", {
        ref: p,
        className: `${
          styles["language-dropdown"]
        } relative transition-all duration-300 hover:scale-105 lang-trigger ${
          t ? "active" : ""
        } ${o ? "opacity-70 cursor-wait" : ""}`,
        onClick: () => !o && n(!t),
        style: { zIndex: 100 },
        children: [
          jsxRuntimeExports.jsxs("span", {
            className: `font-VT323 text-28 leading-36 tracking-1 text-white cursor-pointer flex items-center gap-1 ${
              r ? "lang-switch-animation" : ""
            }`,
            children: [
              jsxRuntimeExports.jsx("span", {
                className: "opacity-70 lang-bracket",
                children: "[",
              }),
              jsxRuntimeExports.jsx("span", {
                className: "lang-code flex items-center gap-1",
                children: o
                  ? "..."
                  : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [
                        jsxRuntimeExports.jsx("span", {
                          className: `fi fi-${
                            (S = b.find((k) => k.code === e.language)) == null
                              ? void 0
                              : S.countryCode
                          } text-base`,
                        }),
                        (C = b.find((k) => k.code === e.language)) == null
                          ? void 0
                          : C.label,
                      ],
                    }),
              }),
              jsxRuntimeExports.jsx("span", {
                className: "opacity-70 lang-bracket",
                children: "]",
              }),
              o
                ? jsxRuntimeExports.jsx("div", {
                    className:
                      "ml-1 w-2 h-2 border border-green/30 border-t-green rounded-full animate-spin",
                  })
                : jsxRuntimeExports.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "10",
                    height: "6",
                    viewBox: "0 0 10 6",
                    fill: "none",
                    className: `ml-1 transition-transform duration-300 ${
                      t ? "rotate-180" : ""
                    }`,
                    children: jsxRuntimeExports.jsx("path", {
                      d: "M1 1L5 5L9 1",
                      stroke: "#D6FC70",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
            ],
          }),
          t && !o && ReactDOM.createPortal(j, document.body),
        ],
      }),
    });
  };
var propTypesExports = requirePropTypes();
const PropTypes = getDefaultExportFromCjs(propTypesExports),
  Container = ({
    children: e,
    className: t = "container",
    fluid: n = !1,
    as: r = "div",
    padding: i = !0,
    center: o = !0,
  }) => {
    const a = r,
      c = [n ? "w-full" : "mx-auto container", i ? "xl:px-[50px]" : "", "", t]
        .filter(Boolean)
        .join(" ");
    return jsxRuntimeExports.jsx(a, { className: c, children: e });
  };
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  as: PropTypes.string,
  padding: PropTypes.bool,
  center: PropTypes.bool,
};
const Container$1 = reactExports.memo(Container);
class ErrorBoundary extends React.Component {
  constructor() {
    super(...arguments);
    lt(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null,
      showLogs: !1,
    });
    lt(this, "handleDownloadLogs", () => {
      errorLogger.downloadLogs();
    });
    lt(this, "handleRefresh", () => {
      window.location.reload();
    });
    lt(this, "toggleLogs", () => {
      this.setState((n) => ({ showLogs: !n.showLogs }));
    });
  }
  static getDerivedStateFromError(n) {
    return { hasError: !0, error: n };
  }
  componentDidCatch(n, r) {
    this.setState({ error: n, errorInfo: r }),
      errorLogger.log(
        "error",
        "React Error Boundary Caught Error",
        {
          componentStack: r.componentStack,
          errorName: n.name,
          errorMessage: n.message,
          errorStack: n.stack,
          currentUrl: window.location.href,
          timestamp: new Date().toISOString(),
        },
        n
      ),
      console.error("Error caught by ErrorBoundary:", {
        message: n.message,
        stack: n.stack,
        componentStack: r.componentStack,
      });
  }
  render() {
    return this.state.hasError
      ? jsxRuntimeExports.jsx("div", {
          className:
            "flex flex-col items-center justify-center min-h-[400px] p-6 text-center bg-gray-50",
          children: jsxRuntimeExports.jsxs("div", {
            className: "max-w-md w-full bg-white rounded-lg shadow-lg p-6",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "mb-6",
                children: [
                  jsxRuntimeExports.jsx("h2", {
                    className: "text-xl font-semibold text-red-600 mb-4",
                    children: "Unable to load page content",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-gray-600 mb-4",
                    children:
                      "We've encountered an unexpected error. Our system has logged this issue for investigation.",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "space-y-3",
                children: [
                  jsxRuntimeExports.jsx("button", {
                    onClick: this.handleRefresh,
                    className:
                      "w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                    children: "Refresh Page",
                  }),
                  jsxRuntimeExports.jsx("button", {
                    onClick: this.handleDownloadLogs,
                    className:
                      "w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",
                    children: "Download Error Logs",
                  }),
                  jsxRuntimeExports.jsxs("button", {
                    onClick: this.toggleLogs,
                    className:
                      "w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",
                    children: [
                      this.state.showLogs ? "Hide" : "Show",
                      " Recent Logs",
                    ],
                  }),
                ],
              }),
              this.state.showLogs &&
                jsxRuntimeExports.jsxs("div", {
                  className: "mt-6 p-4 bg-gray-100 rounded text-left",
                  children: [
                    jsxRuntimeExports.jsx("h3", {
                      className: "font-semibold mb-2",
                      children: "Recent Error Logs:",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "text-xs max-h-40 overflow-y-auto",
                      children: errorLogger
                        .getLogs()
                        .slice(-10)
                        .map((n, r) =>
                          jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "mb-2 p-2 bg-white rounded border",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "font-mono text-xs",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "text-gray-500",
                                      children: ["[", n.timestamp, "]"],
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: `ml-2 px-1 rounded text-xs ${
                                        n.level === "error"
                                          ? "bg-red-100 text-red-800"
                                          : n.level === "warn"
                                          ? "bg-yellow-100 text-yellow-800"
                                          : "bg-blue-100 text-blue-800"
                                      }`,
                                      children: n.level.toUpperCase(),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "text-gray-700 mt-1",
                                  children: n.message,
                                }),
                                n.data &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "text-gray-500 mt-1",
                                    children: [
                                      "Data: ",
                                      JSON.stringify(n.data).substring(0, 100),
                                      "...",
                                    ],
                                  }),
                              ],
                            },
                            r
                          )
                        ),
                    }),
                  ],
                }),
              this.state.error &&
                jsxRuntimeExports.jsxs("div", {
                  className: "mt-4 p-3 bg-red-50 rounded text-left",
                  children: [
                    jsxRuntimeExports.jsx("h4", {
                      className: "font-semibold text-red-800 mb-2",
                      children: "Error Details:",
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className: "text-xs text-red-700",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          children: [
                            jsxRuntimeExports.jsx("strong", {
                              children: "Name:",
                            }),
                            " ",
                            this.state.error.name,
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          children: [
                            jsxRuntimeExports.jsx("strong", {
                              children: "Message:",
                            }),
                            " ",
                            this.state.error.message,
                          ],
                        }),
                        this.state.error.stack &&
                          jsxRuntimeExports.jsxs("div", {
                            className: "mt-2",
                            children: [
                              jsxRuntimeExports.jsx("strong", {
                                children: "Stack:",
                              }),
                              jsxRuntimeExports.jsx("pre", {
                                className: "text-xs mt-1 overflow-x-auto",
                                children: this.state.error.stack,
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        })
      : this.props.children;
  }
}
const fetchWithRetry = async (e, t = {}, n = 1e4, r = 3) => {
    for (let i = 0; i < r; i++)
      try {
        const o = new AbortController(),
          a = setTimeout(() => o.abort(), n),
          c = await fetch(e, {
            ...t,
            mode: "cors",
            credentials: "omit",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              ...t.headers,
            },
            signal: o.signal,
          });
        if ((clearTimeout(a), c.status >= 400 && c.status < 500))
          throw new Error(`Client error: ${c.status}`);
        if (c.ok) return c;
        if (i === r - 1) throw new Error(`Server error: ${c.status}`);
        const l = Math.pow(2, i) * 1e3;
        await new Promise((d) => setTimeout(d, l));
      } catch (o) {
        if (o.name === "AbortError") throw new Error("Request timeout");
        if (i === r - 1) throw o;
        const a = Math.pow(2, i) * 1e3;
        await new Promise((c) => setTimeout(c, a));
      }
  },
  safeJsonParse = (e) => {
    try {
      return JSON.parse(e);
    } catch (t) {
      return console.error("Failed to parse JSON:", t), null;
    }
  },
  isOnline = () => navigator.onLine,
  checkConnectivity = async () => {
    try {
      const e = ["/", "/index.html", "/vite.svg"];
      for (const t of e)
        try {
          if (
            (
              await fetch(t, {
                method: "HEAD",
                cache: "no-cache",
                signal: AbortSignal.timeout(3e3),
              })
            ).ok
          )
            return !0;
        } catch {
          continue;
        }
      return !0;
    } catch {
      return !0;
    }
  },
  fallbackPresaleData = {
    decimals: 18,
    totalStaked: "0",
    presaleAddress: "",
    stakingAddress: "",
    tokenAddress: "",
    presalePrice: "0",
    presaleStartTime: 0,
    presaleEndTime: 0,
    minBuy: "0",
    maxBuy: "0",
    softCap: "0",
    hardCap: "0",
    totalRaised: "0",
    totalSold: "0",
    presaleStatus: "pending",
    stakingStatus: "pending",
    claimInterval: 0,
    rewardsPerInterval: "0",
    HUNDRED_PERCENT: "100000000000000000000",
    displayTotalStaked: "0.00",
    apr: "0.00",
    displayApr: "0.00",
    apy: "0.00",
    displayApy: "0.00",
    dailyReturnPercent: "0.00000",
    displayDailyReturnPercent: "0.00",
    dailyReward: "0.00000",
    displayDailyRewards: "0.00",
  },
  useNetworkStatus = () => {
    const [e, t] = reactExports.useState(isOnline()),
      [n, r] = reactExports.useState(!0),
      [i, o] = reactExports.useState(!1);
    return (
      reactExports.useEffect(() => {
        const a = () => {
            t(!0), r(!0);
          },
          c = () => {
            t(!1), r(!1);
          },
          l = async () => {
            o(!0);
            try {
              const p = await checkConnectivity();
              r(p);
            } catch (p) {
              console.warn("Connectivity check failed:", p), r(!1);
            } finally {
              o(!1);
            }
          };
        l(),
          window.addEventListener("online", a),
          window.addEventListener("offline", c);
        const d = setInterval(l, 3e4);
        return () => {
          window.removeEventListener("online", a),
            window.removeEventListener("offline", c),
            clearInterval(d);
        };
      }, []),
      {
        isOnline: e,
        hasConnectivity: n,
        isChecking: i,
        isFullyConnected: e && n,
      }
    );
  },
  NetworkStatus = () => {
    const {
      isOnline: e,
      hasConnectivity: t,
      isChecking: n,
      isFullyConnected: r,
    } = useNetworkStatus();
    return r && !n
      ? null
      : n
      ? jsxRuntimeExports.jsxs("div", {
          className:
            "fixed top-4 right-4 z-50 bg-yellow-100 border border-yellow-400 text-yellow-800 px-3 py-2 rounded-md shadow-lg flex items-center space-x-2",
          children: [
            jsxRuntimeExports.jsx("div", {
              className: "w-3 h-3 bg-yellow-500 rounded-full animate-pulse",
            }),
            jsxRuntimeExports.jsx("span", {
              className: "text-sm font-medium",
              children: "Checking connection...",
            }),
          ],
        })
      : e
      ? t
        ? null
        : jsxRuntimeExports.jsxs("div", {
            className:
              "fixed top-4 right-4 z-50 bg-orange-100 border border-orange-400 text-orange-800 px-3 py-2 rounded-md shadow-lg flex items-center space-x-2",
            children: [
              jsxRuntimeExports.jsx(SvgIcon, {
                name: "wifi",
                className: "w-4 h-4",
              }),
              jsxRuntimeExports.jsx("span", {
                className: "text-sm font-medium",
                children: "Connection issues detected",
              }),
            ],
          })
      : jsxRuntimeExports.jsxs("div", {
          className:
            "fixed top-4 right-4 z-50 bg-red-100 border border-red-400 text-red-800 px-3 py-2 rounded-md shadow-lg flex items-center space-x-2",
          children: [
            jsxRuntimeExports.jsx(SvgIcon, {
              name: "wifi-off",
              className: "w-4 h-4",
            }),
            jsxRuntimeExports.jsx("span", {
              className: "text-sm font-medium",
              children: "You're offline",
            }),
          ],
        });
  },
  useUKDetection = () => {
    const [e, t] = reactExports.useState(!1),
      [n, r] = reactExports.useState(!0);
    return (
      reactExports.useEffect(() => {
        (async () => {
          try {
            const a = document.cookie
              .split(";")
              .find((c) => c.trim().startsWith("cf-ipcountry="));
            if (a) {
              const l = a.split("=")[1].trim() === "GB";
              t(l);
              return;
            }
            try {
              const c = await fetch("https://ipapi.co/json/", {
                timeout: 5e3,
                headers: { Accept: "application/json" },
              });
              if (c.ok) {
                const d = (await c.json()).country_code === "GB";
                t(d);
                return;
              }
            } catch (c) {
              console.warn("IP API failed:", c);
            }
            try {
              const c = await fetch("https://api.country.is/", {
                timeout: 5e3,
              });
              if (c.ok) {
                const d = (await c.json()).country === "GB";
                t(d);
                return;
              }
            } catch (c) {
              console.warn("Country.is API failed:", c);
            }
            try {
              if (
                Intl.DateTimeFormat().resolvedOptions().timeZone ===
                "Europe/London"
              ) {
                t(!0);
                return;
              }
            } catch (c) {
              console.warn("Timezone detection failed:", c);
            }
            t(!1);
          } catch (o) {
            console.warn("Error checking UK user status:", o), t(!1);
          } finally {
            r(!1);
          }
        })();
      }, []),
      { isUKUser: e, isLoading: n }
    );
  },
  UKDisclaimerModal = ({ isVisible: e, onClose: t }) => {
    const { t: n } = useTranslation(),
      [r, i] = reactExports.useState(!1);
    reactExports.useEffect(() => {
      e && i(!0);
    }, [e]);
    const o = () => {
        window.history.length > 1
          ? window.history.back()
          : (window.location.href = "https://www.google.com");
      },
      a = () => {
        t();
      };
    return e
      ? jsxRuntimeExports.jsx(AnimatePresence, {
          children:
            r &&
            jsxRuntimeExports.jsx(motion.div, {
              className:
                "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: jsxRuntimeExports.jsxs(motion.div, {
                className:
                  "relative w-full max-w-md bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 shadow-xl overflow-hidden",
                initial: { scale: 0.9, y: 20 },
                animate: { scale: 1, y: 0 },
                exit: { scale: 0.9, y: 20 },
                transition: { type: "spring", damping: 25, stiffness: 300 },
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "bg-[#0f1a17]/95 text-white px-6 py-4 relative overflow-hidden border-b border-green/30",
                    children: jsxRuntimeExports.jsx("h2", {
                      className:
                        "text-xl font-bold text-center font-VT323 tracking-wide relative z-10",
                      children: n("ukDisclaimer.title", "Website Disclaimer"),
                    }),
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "px-6 py-6",
                    children: jsxRuntimeExports.jsxs("div", {
                      className: "text-white/90 text-center space-y-4",
                      children: [
                        jsxRuntimeExports.jsx("p", {
                          className: "text-sm leading-relaxed",
                          children: n(
                            "ukDisclaimer.message",
                            "Our website is not intended for visitors from the United Kingdom and does not follow UK Financial Promotions regulations. If you are accessing the site from the UK, we kindly ask that you exit."
                          ),
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "text-xs text-white/60 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm",
                          children: [
                            jsxRuntimeExports.jsx("strong", {
                              className: "text-green",
                              children: "Note:",
                            }),
                            " This restriction is in place due to UK financial regulations.",
                          ],
                        }),
                      ],
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "px-6 pb-6 space-y-3",
                    children: [
                      jsxRuntimeExports.jsx("button", {
                        onClick: o,
                        className:
                          "w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#4a4a4a] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95",
                        children: n("ukDisclaimer.leaveSite", "Leave the Site"),
                      }),
                      jsxRuntimeExports.jsx("button", {
                        onClick: a,
                        className:
                          "w-full bg-[#4a5a3a] hover:bg-[#5a6a4a] border border-[#6a7a5a] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 active:scale-95",
                        children: n(
                          "ukDisclaimer.continue",
                          "Continue to Site"
                        ),
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "bg-white/5 px-6 py-3 text-center border-t border-white/10",
                    children: jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-white/50",
                      children: n(
                        "ukDisclaimer.footer",
                        "By continuing, you acknowledge that you are not accessing this site from the UK"
                      ),
                    }),
                  }),
                ],
              }),
            }),
        })
      : null;
  },
  Image = reactExports.forwardRef((e, t) => {
    const {
        url: n,
        alt: r,
        className: i,
        priority: o = !1,
        srcSet: a = "",
        sizes: c = "",
        placeholder: l = !1,
        objectFit: d = "cover",
        width: p,
        height: m,
        onLoad: h,
        ...f
      } = e,
      [b, v] = reactExports.useState(!1),
      [j, S] = reactExports.useState(!1);
    reactExports.useEffect(() => {
      v(!1), S(!1);
    }, [n]);
    const C = (_) => {
        v(!0), h && h(_);
      },
      k = () => {
        S(!0), console.warn(`Failed to load image: ${n}`);
      };
    return jsxRuntimeExports.jsx("img", {
      ref: t,
      src: n,
      alt: r || "",
      className: i,
      srcSet: a,
      sizes: c,
      width: p,
      height: m,
      style: { objectFit: d },
      loading: o ? "eager" : "lazy",
      onLoad: C,
      onError: k,
      ...f,
    });
  });
Image.displayName = "Image";
const Image$1 = reactExports.memo(Image),
  Ethereum = {
    cmc_id: 1027,
    icon: "images/eth.png",
    radomName: "Ethereum",
    tokens: {
      native: {
        address: null,
        icon: "images/payments-logos/ethereum.svg",
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
        address: "0x70470797217dacc572f3383efbb3a3ee82bd774d",
        icon: "images/usdc.png",
        label: "USDC",
        cmc_id: 3408,
      },
    },
  },
  Sepolia = {
    cmc_id: 1027,
    icon: "images/eth.png",
    radomName: "SepoliaTestnet",
    tokens: {
      native: { address: null, icon: "images/eth.png", label: "ETH" },
      usdt: {
        address: "0xE50d86c6dE38F9754f6777d2925377564Bf79482",
        icon: "images/usdt.png",
        label: "USDT",
        cmc_id: 825,
      },
      usdc: {
        address: "0xa4fCE8264370437e718aE207805b4e6233638b9E",
        icon: "images/usdc.png",
        label: "USDC",
        cmc_id: 3408,
      },
    },
  },
  Solana = {
    cmc_id: 5426,
    icon: "images/sol.png",
    radomName: "Solana",
    tokens: {
      native: {
        address: null,
        icon: "images/payments-logos/solana.svg",
        label: "SOL",
      },
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
  networksInfo_dev = {
    Ethereum,
    Sepolia,
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
    Solana,
    "Solana Devnet": {
      cmc_id: 5426,
      icon: "images/sol.png",
      radomName: "SolanaDevnet",
      tokens: {
        native: { address: null, icon: "images/sol.png", label: "SOL" },
        usdc: {
          address: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
          icon: "images/usdc.png",
          label: "USDC",
          cmc_id: 825,
        },
      },
    },
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
  Button = ({
    children: e,
    className: t = "",
    to: n,
    onClick: r,
    onKeyDown: i,
    variant: o = "primary",
    size: a = "md",
    disabled: c = !1,
    i18nKey: l,
    fullWidth: d = !1,
    rounded: p = "md",
    type: m = "button",
    icon: h,
    style: f,
    "aria-label": b,
    "aria-describedby": v,
    role: j,
    tabIndex: S,
  }) => {
    const C = {
        primary:
          "font-VT323 text-30 leading-30 tracking-1 text-dark px-[40px] py-[17px] rounded-[100px] transition-shadow duration-300 button-primary",
        secondary:
          "font-VT323 text-30 leading-30 tracking-1 px-[40px] py-[17px] rounded-[100px] transition-colors duration-300 button-secondary",
        outline:
          "font-VT323 text-30 leading-30 tracking-1 bg-transparent border-2 border-green text-green px-[40px] py-[17px] rounded-[100px] transition-all duration-300 hover:bg-gradient-primary hover:text-dark hover:border-transparent active:scale-95",
        danger:
          "bg-red-600 hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600 active:bg-red-800 text-white focus:ring-red-500 hover:scale-105 active:scale-95 transition-all duration-300",
        success:
          "bg-green-600 hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600 active:bg-green-800 text-white focus:ring-green-500 hover:scale-105 active:scale-95 transition-all duration-300",
        ghost:
          "bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300 hover:scale-105 active:scale-95 transition-all duration-300",
      },
      k = { sm: "py-1 px-3 text-sm", md: "py-2 px-4", lg: "py-3 px-6 text-lg" },
      _ = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      P = [
        "focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center",
        C[o],
        k[a],
        _[p],
        d ? "w-full" : "",
        c ? "cursor-not-allowed button-disabled" : "cursor-pointer",
        t,
      ]
        .filter(Boolean)
        .join(" "),
      Y =
        o === "primary"
          ? {
              boxShadow:
                "0px 4px 24px -7px rgba(168, 252, 162, 0.7), 0px 0.5px 0px 0px rgba(255, 255, 255, 0.7) inset",
              ...f,
            }
          : o === "secondary"
          ? {
              background:
                "linear-gradient(90deg, rgba(203, 251, 122, 0.1) 0%, rgba(133, 252, 200, 0.1) 100%)",
              boxShadow: "0px 0.5px 0px 0px #8DFCBE33 inset",
              ...f,
            }
          : f,
      V = jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [
          h &&
            jsxRuntimeExports.jsx("span", { className: "mr-2", children: h }),
          jsxRuntimeExports.jsx("span", {
            children: l
              ? jsxRuntimeExports.jsx(Trans, { i18nKey: l, children: e })
              : e,
          }),
        ],
      });
    return (
      React.useEffect(() => {
        if (!document.getElementById("button-hover-styles")) {
          const H = document.createElement("style");
          (H.id = "button-hover-styles"),
            (H.textContent = `
        .button-primary {
          background: linear-gradient(135deg, #D6FC70 0%, #70FCDE 100%) !important;
        }
        
        .button-primary:hover {
          background: linear-gradient(135deg, #D6FC70 0%, #70FCDE 100%) !important;
        }
        
        .button-primary:not(.button-disabled):hover {
          box-shadow: 0px 4px 30px -7px rgba(168, 252, 162, 1), 0px 0.5px 0px 0px rgba(255, 255, 255, 0.7) inset !important;
        }
        
        .button-primary.button-disabled {
          box-shadow: 0px 4px 24px -7px rgba(168, 252, 162, 0.7), 0px 0.5px 0px 0px rgba(255, 255, 255, 0.7) inset !important;
          opacity: 0.5;
        }
        
        .button-primary.button-disabled:hover {
          box-shadow: 0px 4px 24px -7px rgba(168, 252, 162, 0.7), 0px 0.5px 0px 0px rgba(255, 255, 255, 0.7) inset !important;
          background: linear-gradient(135deg, #D6FC70 0%, #70FCDE 100%) !important;
        }
        
        .button-secondary span {
          background: linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .button-secondary:not(.button-disabled):hover span {
          -webkit-text-fill-color: white !important;
        }
      `),
            document.head.appendChild(H);
        }
      }, []),
      n
        ? jsxRuntimeExports.jsx(NavLink, {
            to: n,
            className: P,
            onClick: c ? (H) => H.preventDefault() : r,
            onKeyDown: i,
            style: Y,
            "aria-label": b,
            "aria-describedby": v,
            role: j,
            tabIndex: S,
            children: V,
          })
        : jsxRuntimeExports.jsx("button", {
            type: m,
            onClick: r,
            onKeyDown: i,
            className: P,
            disabled: c,
            style: Y,
            "aria-label": b,
            "aria-describedby": v,
            role: j,
            tabIndex: S,
            children: V,
          })
    );
  };
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "danger",
    "success",
    "ghost",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  i18nKey: PropTypes.string,
  fullWidth: PropTypes.bool,
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
  type: PropTypes.string,
  icon: PropTypes.node,
  style: PropTypes.object,
  "aria-label": PropTypes.string,
  "aria-describedby": PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
};
const Button$1 = reactExports.memo(Button),
  networksInfo$1 = networksInfo_dev;
function MobileButton({
  userAddress: e,
  setIsPopUpOpen: t,
  onConnectClick: n,
}) {
  var d;
  const { open: r } = useAppKit(),
    { t: i } = useTranslation(),
    { isConnected: o } = useSafeAppKitAccount(),
    { caipNetwork: a } = useAppKitNetwork(),
    [c, l] = reactExports.useState(!1);
  if (!o && !a) {
    console.log("not connected no caipnetwork");
    return;
  } else {
    if (
      !o &&
      (a.name == "Ethereum" ||
        a.name == "Sepolia" ||
        a.name == "BNB Smart Chain" ||
        a.name == "Credit Card")
    )
      return jsxRuntimeExports.jsx(Button$1, {
        variant: "primary",
        className: "w-full mb-[20px] connect-wallet",
        rounded: "full",
        onClick: () => {
          if (n) n();
          else
            try {
              l(!0), r({ view: "Connect" });
            } catch (p) {
              console.warn("Wallet connection error:", p);
              try {
                r({ view: "Connect" });
              } catch (m) {
                console.error("Failed to open wallet connection:", m);
              }
            } finally {
              l(!1);
            }
        },
        disabled: c,
        style: {
          borderRadius: "56px",
          height: "46px",
          lineHeight: "46px",
          textTransform: "uppercase",
          padding: "0 24px",
          fontSize: "24px",
        },
        children: c
          ? jsxRuntimeExports.jsxs("div", {
              className: "flex items-center justify-center",
              children: [
                jsxRuntimeExports.jsxs("svg", {
                  className: "animate-spin -ml-1 mr-2 h-5 w-5 text-green",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    jsxRuntimeExports.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    jsxRuntimeExports.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("span", {
                  className:
                    "font-VT323 text-22 leading-22 tracking-1 whitespace-nowrap uppercase",
                  children: i("home.connecting", "CONNECTING..."),
                }),
              ],
            })
          : jsxRuntimeExports.jsx("span", {
              className:
                "font-VT323 text-22 leading-22 tracking-1 whitespace-nowrap uppercase",
              children: i("CONNECT WALLET", "CONNECT WALLET"),
            }),
      });
    if (!o && (a.name == "Solana Devnet" || a.name == "Solana"))
      return jsxRuntimeExports.jsx(Button$1, {
        variant: "primary",
        className: "w-full mb-[20px] connect-wallet",
        rounded: "full",
        onClick: () => {
          if (n) n();
          else
            try {
              l(!0), r({ view: "Connect" });
            } catch (p) {
              console.warn("Wallet connection error:", p);
              try {
                r({ view: "Connect" });
              } catch (m) {
                console.error("Failed to open wallet connection:", m);
              }
            } finally {
              l(!1);
            }
        },
        disabled: c,
        style: {
          borderRadius: "56px",
          height: "46px",
          lineHeight: "46px",
          textTransform: "uppercase",
          padding: "0 24px",
          fontSize: "24px",
        },
        children: c
          ? jsxRuntimeExports.jsxs("div", {
              className: "flex items-center justify-center",
              children: [
                jsxRuntimeExports.jsxs("svg", {
                  className: "animate-spin -ml-1 mr-2 h-5 w-5 text-green",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    jsxRuntimeExports.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    jsxRuntimeExports.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("span", {
                  className:
                    "font-VT323 text-22 leading-22 tracking-1 whitespace-nowrap uppercase",
                  children: i("home.connecting", "CONNECTING..."),
                }),
              ],
            })
          : jsxRuntimeExports.jsx("span", {
              className:
                "font-VT323 text-22 leading-22 tracking-1 whitespace-nowrap uppercase",
              children: i("CONNECT WALLET", "CONNECT WALLET"),
            }),
      });
    if (o)
      return jsxRuntimeExports.jsxs("button", {
        className:
          "font-VT323 text-20 leading-28 tracking-1 rounded-[64px] flex items-center gap-[8px] p-[10px] mt-3",
        style: {
          background:
            "linear-gradient(90deg, rgba(203, 251, 122, 0.1) 0%, rgba(133, 252, 200, 0.1) 100%)",
          border: "1px solid",
          borderColor: "rgba(167, 252, 162, 0.1)",
          color: "rgba(188, 251, 138, 1)",
        },
        onClick: () => t(!0),
        onKeyDown: (p) => {
          (p.key === "Enter" || p.key === " ") && (p.preventDefault(), t(!0));
        },
        "aria-label": i("home.openAccountMenu", "Open account menu"),
        "aria-describedby": "account-menu-description",
        type: "button",
        children: [
          jsxRuntimeExports.jsx(Image$1, {
            url:
              ((d = networksInfo$1[a == null ? void 0 : a.name]) == null
                ? void 0
                : d.icon) || "images/eth.png",
            alt: "network",
            className: "w-[28px] h-[28px]",
          }),
          e,
        ],
      });
  }
  return null;
}
const getGA4ClientId = () => {
    if (typeof document > "u") return null;
    const e = document.cookie.split("; ").find((t) => t.startsWith("_ga="));
    if (!e) return console.log("🔍 No _ga cookie found"), null;
    try {
      const t = e.split("=")[1];
      console.log("🔍 _ga cookie value:", t);
      const n = t.split(".");
      if (
        (console.log("🔍 _ga cookie parts:", n),
        n.length >= 4 && n[0] === "GA1" && (n[1] === "2" || n[1] === "1"))
      ) {
        const r = n.slice(2).join(".");
        return console.log("✅ Extracted client_id:", r), r;
      }
    } catch (t) {
      console.warn("Failed to parse GA4 client_id from _ga cookie:", t);
    }
    return null;
  },
  getGA4SessionId = () => {
    if (typeof document > "u") return null;
    const e = document.cookie.split("; ").find((t) => t.startsWith("_ga_"));
    if (!e) return console.log("🔍 No _ga_ cookie found"), null;
    try {
      const t = e.split("=")[1];
      console.log("🔍 _ga_ cookie value:", t);
      const n = t.split(".");
      console.log("🔍 _ga_ cookie parts:", n);
      const r = n[n.length - 1];
      return console.log("✅ Extracted session_id:", r), r;
    } catch (t) {
      console.warn("Failed to parse GA4 session_id from _ga_ cookie:", t);
    }
    return null;
  },
  getClickId = (e = null) => {
    if (e != null && e.click_id)
      return (
        console.log("✅ Click ID from tracking data:", e.click_id), e.click_id
      );
    if (typeof window > "u") return null;
    const t = new URLSearchParams(window.location.search),
      n = {
        gclid: t.get("gclid"),
        gbraid: t.get("gbraid"),
        wbraid: t.get("wbraid"),
        fbclid: t.get("fbclid"),
        ttclid: t.get("ttclid"),
        scid: t.get("scid"),
        twclid: t.get("twclid"),
        li_fat_id: t.get("li_fat_id"),
        epik: t.get("epik"),
      };
    console.log("🔍 URL parameters:", Object.fromEntries(t)),
      console.log("🔍 Click IDs found:", n);
    const r = Object.entries(n).find(([, o]) => o != null),
      i = r ? r[1] : null;
    return console.log("✅ Click ID extracted:", i), i;
  },
  getGA4Parameters = (e = null) => {
    const t = {
      client_id: getGA4ClientId(),
      session_id: getGA4SessionId(),
      click_id: getClickId(e),
      click_id_type: (e == null ? void 0 : e.click_id_type) || null,
    };
    return console.log("🔍 GA4 Parameters extracted:", t), t;
  },
  createGTMEventWithGA4 = (e, t = {}, n = null) => {
    const r = getGA4Parameters(n);
    return {
      event: e,
      ...t,
      client_id: r.client_id,
      session_id: r.session_id,
      ga_session_id: r.session_id,
      click_id: r.click_id,
      click_id_type: r.click_id_type,
      event_timestamp: new Date().toISOString(),
    };
  },
  isGTMAvailable = () => typeof window < "u" && window.dataLayer,
  pushToDataLayer = (e) => {
    isGTMAvailable()
      ? (console.log("📤 Pushing to GTM dataLayer:", e),
        window.dataLayer.push(e))
      : console.warn("⚠️ GTM not available, cannot push event:", e);
  },
  trackEvent = (e, t = {}, n = null) => {
    const r = createGTMEventWithGA4(e, t, n);
    pushToDataLayer(r);
  },
  trackWalletConnection = (e, t = {}, n = null) => {
    trackEvent("wallet_connect", { wallet_type: e, ...t }, n);
  },
  trackPurchaseAttempt = (e, t, n = {}, r = null) => {
    trackEvent("purchase_attempt", { value: e, currency: t, ...n }, r);
  },
  trackPurchaseSuccess = (e, t, n = {}, r = null) => {
    trackEvent("purchase_success", { value: e, currency: t, ...n }, r);
  },
  trackWalletConnectionConversion = (e, t = {}, n = null) => {
    console.log("🎯 Creating walletConnect event for wallet connection...");
    const r = createGTMEventWithGA4(
      "walletConnect",
      {
        conversion_type: "wallet_connect",
        wallet_type: e,
        conversion_value: 1,
        ...t,
      },
      n
    );
    console.log("📤 Pushing walletConnect event to GTM:", r),
      pushToDataLayer(r);
  },
  getLocalStorageTrackingParams = () => {
    if (typeof window > "u" || !window.localStorage) return {};
    try {
      return {
        ga4_client_id: localStorage.getItem("ga4_client_id") || null,
        ga4_session_id: localStorage.getItem("ga4_session_id") || null,
        optic_aem_traffic_gclid:
          localStorage.getItem("optic_aem_traffic_gclid") || null,
        optic_aem_traffic_source:
          localStorage.getItem("optic_aem_traffic_source") || null,
        optic_aem_traffic_source_first:
          localStorage.getItem("optic_aem_traffic_source_first") || null,
        optic_aem_traffic_source_mta:
          localStorage.getItem("optic_aem_traffic_source_mta") || null,
        optic_aem_traffic_medium:
          localStorage.getItem("optic_aem_traffic_medium") || null,
        optic_aem_traffic_medium_first:
          localStorage.getItem("optic_aem_traffic_medium_first") || null,
        optic_aem_traffic_medium_mta:
          localStorage.getItem("optic_aem_traffic_medium_mta") || null,
        optic_aem_traffic_campaign:
          localStorage.getItem("optic_aem_traffic_campaign") || null,
        optic_aem_traffic_campaign_first:
          localStorage.getItem("optic_aem_traffic_campaign_first") || null,
        optic_aem_traffic_campaign_mta:
          localStorage.getItem("optic_aem_traffic_campaign_mta") || null,
        optic_aem_traffic_campaign_id:
          localStorage.getItem("optic_aem_traffic_campaign_id") || null,
        optic_aem_traffic_campaign_id_first:
          localStorage.getItem("optic_aem_traffic_campaign_id_first") || null,
        optic_aem_traffic_campaign_id_mta:
          localStorage.getItem("optic_aem_traffic_campaign_id_mta") || null,
        optic_aem_traffic_content:
          localStorage.getItem("optic_aem_traffic_content") || null,
        optic_aem_traffic_content_first:
          localStorage.getItem("optic_aem_traffic_content_first") || null,
        optic_aem_traffic_content_mta:
          localStorage.getItem("optic_aem_traffic_content_mta") || null,
        optic_aem_traffic_term:
          localStorage.getItem("optic_aem_traffic_term") || null,
        optic_aem_traffic_term_first:
          localStorage.getItem("optic_aem_traffic_term_first") || null,
        optic_aem_traffic_term_mta:
          localStorage.getItem("optic_aem_traffic_term_mta") || null,
        timestamp_first_user:
          localStorage.getItem("optic_aem_timestamp_first_user") || null,
        timestamp_latest_user:
          localStorage.getItem("optic_aem_timestamp_latest_user") || null,
      };
    } catch (e) {
      return console.warn("Error reading localStorage tracking params:", e), {};
    }
  },
  getEnrichedTrackingData = (e = {}) => {
    const t = getLocalStorageTrackingParams();
    return { ...e, ...t };
  };
let cachedIP = null,
  ipFetchPromise = null;
const getClientIP = async () =>
    cachedIP ||
    ipFetchPromise ||
    ((ipFetchPromise = (async () => {
      try {
        return (
          (cachedIP = (
            await (
              await fetch("https://api.ipify.org?format=json", { timeout: 3e3 })
            ).json()
          ).ip),
          console.log("📍 [IP] Client IP fetched:", cachedIP),
          cachedIP
        );
      } catch (e) {
        return console.warn("⚠️ [IP] Failed to fetch client IP:", e), null;
      } finally {
        ipFetchPromise = null;
      }
    })()),
    ipFetchPromise),
  waitForGTMReady = (e = 3e3) =>
    new Promise((t) => {
      let r = 0;
      const i = () => {
        const o = localStorage.getItem("ga4_client_id") !== null,
          a = localStorage.getItem("optic_aem_timestamp_first_user") !== null;
        if (o || a) {
          console.log("✅ [GTM] Ready after", r, "ms"), t(!0);
          return;
        }
        if (((r += 100), r >= e)) {
          console.warn("⚠️ [GTM] Not ready after", e, "ms - proceeding anyway"),
            t(!1);
          return;
        }
        setTimeout(i, 100);
      };
      i();
    }),
  PopupSuccess = ({
    isOpen: e,
    onClose: t,
    apr: n,
    stakingUrl: r = "/staking",
  }) =>
    e
      ? jsxRuntimeExports.jsxs("div", {
          className:
            "fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out",
          onClick: t,
          style: { opacity: e ? 1 : 0 },
          children: [
            jsxRuntimeExports.jsx("div", {
              className:
                "blure-popup absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm",
            }),
            jsxRuntimeExports.jsxs("div", {
              className:
                "absolute max-w-[420px] lg:max-w-[100%] lg:w-[540px] h-auto min-h-[320px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 mx-4 sm:mx-0 bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 shadow-xl overflow-y-auto max-h-[90vh] relative",
              style: {
                opacity: e ? 1 : 0,
                transform: `translate(-50%, -50%) ${
                  e ? "scale(1)" : "scale(0.95)"
                }`,
              },
              onClick: (i) => i.stopPropagation(),
              children: [
                jsxRuntimeExports.jsx("div", {
                  className:
                    "cursor-pointer absolute top-4 right-4 z-10 w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] flex items-center justify-center",
                  onClick: t,
                  children: jsxRuntimeExports.jsx(SvgIcon, {
                    className:
                      "w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] text-white hover:text-green transition-colors",
                    name: "close",
                  }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "pt-[40px] px-[30px] sm:pt-[60px] sm:px-[48px] pb-[40px] flex flex-col items-center text-center",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className: "text-green font-bold mb-4",
                      style: { fontSize: "2.5rem", lineHeight: "1.1" },
                      children: "Thanks for joining the $DSNT!",
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className: "text-white text-base mb-4",
                      children: [
                        "🧠 You now hold early-stage tokens in one of the most exciting AI projects of 2025.",
                        jsxRuntimeExports.jsx("br", {}),
                        jsxRuntimeExports.jsx("br", {}),
                        jsxRuntimeExports.jsx("span", {
                          className: "text-[#D6FC70] font-semibold",
                          children:
                            "💼 Your DSNT tokens have been added to your balance.",
                        }),
                        jsxRuntimeExports.jsx("br", {}),
                        "You can view your balance on the website, and your tokens will be sent to your wallet after launch.",
                        jsxRuntimeExports.jsx("br", {}),
                        jsxRuntimeExports.jsx("br", {}),
                        jsxRuntimeExports.jsx("span", {
                          className: "text-green font-semibold",
                          children:
                            "📈 Want to earn more while you wait for launch?",
                        }),
                        jsxRuntimeExports.jsx("br", {}),
                        "You can now stake your $DSNT tokens and earn rewards of up to ",
                        jsxRuntimeExports.jsx("span", {
                          className: "text-green font-bold",
                          children: n ? `${n}% APR` : "high APR",
                        }),
                        ".",
                      ],
                    }),
                    jsxRuntimeExports.jsx(Button$1, {
                      to: r,
                      variant: "primary",
                      size: "md",
                      rounded: "full",
                      className: "mb-6 mt-5 py-2 lg:py-3 px-10",
                      children: "STAKE NOW →",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "text-center mb-6",
                      children: jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-[#D6FC70]/10 border border-[#D6FC70]/30 rounded-lg p-4 mb-4",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "text-[#D6FC70] text-sm font-semibold mb-2",
                            children: "🎯 Current Staking Rewards",
                          }),
                          n &&
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-white text-2xl font-VT323 tracking-1",
                              children: [n, "% APR"],
                            }),
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className: "text-white text-sm mb-4 text-center",
                      children: [
                        "✅ ",
                        jsxRuntimeExports.jsx("span", {
                          className: "text-[#D6FC70]",
                          children:
                            "To stay informed about the token launch, new features, and exclusive alpha drops:",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-col gap-3 mb-6",
                      children: [
                        jsxRuntimeExports.jsxs("a", {
                          href: "https://twitter.com/AI_Deepsnitch",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center gap-3 w-full px-6 py-3 bg-transparent border border-white/20 hover:border-[#D6FC70]/50 rounded-full transition-all duration-300 hover:bg-[#D6FC70]/5 hover:scale-105 group",
                          children: [
                            jsxRuntimeExports.jsx(SvgIcon, {
                              name: "x",
                              className:
                                "w-5 h-5 text-white group-hover:text-[#D6FC70] transition-colors",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "font-VT323 text-22 leading-22 tracking-1 text-white group-hover:text-[#D6FC70] transition-colors",
                              children: "FOLLOW US ON X/TWITTER",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("a", {
                          href: "https://t.me/DeepSnitchAI_entry",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center gap-3 w-full px-6 py-3 bg-transparent border border-white/20 hover:border-[#D6FC70]/50 rounded-full transition-all duration-300 hover:bg-[#D6FC70]/5 hover:scale-105 group",
                          children: [
                            jsxRuntimeExports.jsx(SvgIcon, {
                              name: "telegram",
                              className:
                                "w-5 h-5 text-white group-hover:text-[#D6FC70] transition-colors",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "font-VT323 text-22 leading-22 tracking-1 text-white group-hover:text-[#D6FC70] transition-colors",
                              children: "JOIN OUR TELEGRAM COMMUNITY",
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "text-white/70 text-xs mt-6",
                      children:
                        "Be part of the DeepSnitch fam - early is everything.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
var wertModule = {};
const version = "6.8.0",
  require$$0 = { version };
var widgetInitializer, hasRequiredWidgetInitializer;
function requireWidgetInitializer() {
  if (hasRequiredWidgetInitializer) return widgetInitializer;
  hasRequiredWidgetInitializer = 1;
  const e = require$$0;
  class t {
    constructor(r) {
      (this.options = r),
        (this.iframe = document.createElement("iframe")),
        (this.widgetWindow = null),
        (this.widget_layout_mode = "Modal"),
        (this.await_data = !1),
        (this.onMessage = (i) => {
          var o, a, c, l, d, p, m, h, f, b;
          const v = i.source === this.widgetWindow,
            j = typeof i.data == "object";
          if (!(!v || !j))
            switch (i.data.type) {
              case "loaded":
                this.sendEvent("allow-redirect", { redirectAllowed: !1 }),
                  this.sendEvent("extra", this.options.extra),
                  this.sendEvent("parent-hostname", {
                    hostname: window.location.hostname,
                  }),
                  (a =
                    (o = this.options.listeners) === null || o === void 0
                      ? void 0
                      : o[i.data.type]) === null ||
                    a === void 0 ||
                    a.call(o);
                break;
              case "payment-status":
                (l =
                  (c = this.options.listeners) === null || c === void 0
                    ? void 0
                    : c[i.data.type]) === null ||
                  l === void 0 ||
                  l.call(c, i.data.data);
                break;
              case "position":
                (p =
                  (d = this.options.listeners) === null || d === void 0
                    ? void 0
                    : d[i.data.type]) === null ||
                  p === void 0 ||
                  p.call(d, i.data.data);
                break;
              case "rate-update":
                (h =
                  (m = this.options.listeners) === null || m === void 0
                    ? void 0
                    : m[i.data.type]) === null ||
                  h === void 0 ||
                  h.call(m, i.data.data);
                break;
              case "close":
                this.close();
                break;
              case "error":
                (b =
                  (f = this.options.listeners) === null || f === void 0
                    ? void 0
                    : f[i.data.type]) === null ||
                  b === void 0 ||
                  b.call(f, i.data.data);
                break;
              case "3ds-start":
                this.iframe.style.background = "#fff";
                break;
              case "3ds-end":
                this.iframe.style.background = "transparent";
                break;
            }
        }),
        this.validateOptions(r),
        this.options.origin || (this.options.origin = "https://widget.wert.io"),
        this.options.extra && (this.await_data = !0);
    }
    open() {
      (this.iframe.style.border = "none"),
        (this.iframe.style.width = "100%"),
        (this.iframe.style.height = "100%"),
        (this.iframe.style.bottom = "0"),
        (this.iframe.style.right = "0"),
        (this.iframe.style.position = "fixed"),
        (this.iframe.style.zIndex = "10000"),
        (document.body.style.overflow = "hidden"),
        this.iframe.setAttribute("src", this.getEmbedUrl()),
        this.iframe.setAttribute("allow", "camera *; microphone *; payment"),
        this.iframe.setAttribute(
          "sandbox",
          "allow-scripts allow-forms allow-popups allow-same-origin"
        ),
        this.iframe.setAttribute("data-version", e.version),
        document.body.appendChild(this.iframe),
        (this.widgetWindow = this.iframe.contentWindow),
        this.listenWidget();
    }
    addEventListeners(r) {
      this.options.listeners = Object.assign(
        Object.assign({}, this.options.listeners),
        r
      );
    }
    removeEventListeners(r) {
      var i, o;
      if (typeof r > "u") delete this.options.listeners;
      else if (typeof r == "string")
        (i = this.options.listeners) === null || i === void 0 || delete i[r];
      else
        for (const a of r)
          (o = this.options.listeners) === null || o === void 0 || delete o[a];
    }
    updateTheme(r) {
      !r || !Object.keys(r).length || this.sendEvent("theme", r);
    }
    close() {
      var r, i;
      document.body.removeChild(this.iframe),
        (document.body.style.overflow = ""),
        this.unListenWidget(),
        (i =
          (r = this.options.listeners) === null || r === void 0
            ? void 0
            : r.close) === null ||
          i === void 0 ||
          i.call(r);
    }
    validateOptions(r) {
      var i, o, a, c;
      if (!r.partner_id)
        throw Error(
          "Please provide a partner_id in order for the widget to work correctly"
        );
      r.container_id && console.error("container_id is no longer supported"),
        !(
          (o =
            (i = r.extra) === null || i === void 0 ? void 0 : i.item_info) ===
            null || o === void 0
        ) &&
          o.name &&
          r.extra.item_info.name.length > 40 &&
          console.error(
            "Max length of the extra.item_info.name value is 40 characters"
          ),
        !(
          (c =
            (a = r.extra) === null || a === void 0 ? void 0 : a.item_info) ===
            null || c === void 0
        ) &&
          c.category &&
          r.extra.item_info.category.length > 40 &&
          console.error(
            "Max length of the extra.item_info.category value is 40 characters"
          );
    }
    listenWidget() {
      window.addEventListener("message", this.onMessage);
      const r = () => {
        (this.widgetWindow && !this.widgetWindow.closed) ||
          this.unListenWidget();
      };
      this.checkIntervalId = window.setInterval(r, 200);
    }
    unListenWidget() {
      this.checkIntervalId &&
        (clearInterval(this.checkIntervalId),
        (this.checkIntervalId = void 0),
        window.removeEventListener("message", this.onMessage));
    }
    sendEvent(r, i) {
      var o;
      i &&
        ((o = this.widgetWindow) === null ||
          o === void 0 ||
          o.postMessage({ data: i, type: r }, this.options.origin));
    }
    getEmbedUrl() {
      const r = this.getParametersString();
      return `${this.options.origin}/${this.options.partner_id}/widget${r}`;
    }
    getParametersString() {
      return Object.entries(
        Object.assign(
          Object.assign(Object.assign({}, this.options), {
            widget_layout_mode: this.widget_layout_mode,
          }),
          this.await_data && { await_data: this.await_data }
        )
      ).reduce((r, [i, o]) => {
        if (
          o === void 0 ||
          typeof o == "object" ||
          ["origin", "partner_id"].includes(i)
        )
          return r;
        const a = r.length ? "&" : "?";
        return r + a + i + "=" + encodeURIComponent(o);
      }, "");
    }
  }
  return (widgetInitializer = t), widgetInitializer;
}
var hasRequiredWertModule;
function requireWertModule() {
  if (hasRequiredWertModule) return wertModule;
  (hasRequiredWertModule = 1),
    Object.defineProperty(wertModule, "__esModule", { value: !0 });
  var e = requireReact(),
    t = requireWidgetInitializer();
  function n(m) {
    return m && typeof m == "object" && "default" in m ? m : { default: m };
  }
  var r = n(t),
    i = function () {
      return (
        (i =
          Object.assign ||
          function (h) {
            for (var f, b = 1, v = arguments.length; b < v; b++) {
              f = arguments[b];
              for (var j in f)
                Object.prototype.hasOwnProperty.call(f, j) && (h[j] = f[j]);
            }
            return h;
          }),
        i.apply(this, arguments)
      );
    },
    o = function (m) {
      var h = m.widgetCallback,
        f = m.listeners;
      return i(i({}, f || {}), {
        close: function () {
          h && h(), f != null && f.close && f.close();
        },
      });
    },
    a = ["theme", "brand_color"],
    c = function (m) {
      var h = m.widget,
        f = m.options,
        b = m.prevOptions;
      if (h) {
        var v = a.reduce(function (j, S) {
          var C, k;
          if (
            ((k = b.current) === null || k === void 0 ? void 0 : k[S]) !==
            (f == null ? void 0 : f[S])
          )
            switch (S) {
              case "theme":
                return i(i({}, j), { theme: f == null ? void 0 : f[S] });
              default:
                return i(
                  i({}, j),
                  ((C = {}), (C[S] = f == null ? void 0 : f[S]), C)
                );
            }
          return j;
        }, {});
        Object.keys(v).length && h.updateTheme(v);
      }
    },
    l = function (m) {
      var h,
        f = m.widget,
        b = m.options,
        v = m.prevOptions,
        j = m.widgetCallback;
      if (f) {
        if (!((h = v.current) === null || h === void 0) && h.listeners) {
          var S = (b == null ? void 0 : b.listeners) || {},
            C = Object.keys(v.current.listeners).filter(function (_) {
              return !(_ in S);
            });
          C.length && f.removeEventListeners(C);
        }
        var k = o({
          listeners: b == null ? void 0 : b.listeners,
          widgetCallback: j,
        });
        f.addEventListeners(k);
      }
    },
    d = function (m) {
      var h = m.widget,
        f = m.options,
        b = m.prevOptions,
        v = m.widgetCallback;
      c({ widget: h, options: f, prevOptions: b }),
        l({ widget: h, options: f, prevOptions: b, widgetCallback: v }),
        (b.current = f);
    },
    p = function (m) {
      var h = e.useRef(m),
        f = e.useRef(),
        b = e.useState(!1),
        v = b[0],
        j = b[1];
      return (
        e.useEffect(
          function () {
            d({
              widget: f.current,
              widgetCallback: function () {
                return j(!1);
              },
              options: m,
              prevOptions: h,
            });
          },
          [m]
        ),
        {
          open: function (S) {
            if (v) {
              console.error("The Wert widget is already open");
              return;
            }
            (f.current = new r.default(
              i(i(i({}, S), m), {
                listeners: o({
                  listeners: m == null ? void 0 : m.listeners,
                  widgetCallback: function () {
                    return j(!1);
                  },
                }),
              })
            )),
              f.current.open(),
              j(!0);
          },
          close: function () {
            var S;
            if (!v) {
              console.error("The Wert widget is already closed");
              return;
            }
            (S = f.current) === null || S === void 0 || S.close(), j(!1);
          },
          isWidgetOpen: v,
        }
      );
    };
  return (wertModule.useWertWidget = p), wertModule;
}
var wertModuleExports = requireWertModule();
function WertWidgetButton({
  currency_amount: e,
  receiveAmount: t,
  fiatValue: n,
  trackingData: r,
  selectedTokenName: i,
  bonusCode: o = null,
}) {
  const { caipNetwork: a } = useAppKitNetwork(),
    { isConnected: c, address: l } = useSafeAppKitAccount(),
    d = ["function checkout(address recipient, string uuid) payable"],
    { t: p } = useTranslation(),
    { notifyError: m } = useNotification(),
    [h, f] = reactExports.useState(!1),
    b = reactExports.useRef(null),
    v = 20,
    j = typeof window < "u" ? window.location.hostname : "",
    S = j === "localhost" || j === "127.0.0.1",
    C = /staging|preview|dev|test|sandbox|st4g3\.site/i.test(j),
    k = "".toLowerCase();
  let _ = !S && !C;
  k === "true" && (_ = !0), k === "false" && (_ = !1);
  const P = !_ || parseFloat(n) >= v,
    x =
      e > 0 &&
      P &&
      c &&
      (a.name == "Ethereum" || a.name == "Sepolia") &&
      i == "USD FIAT",
    Y = reactExports.useMemo(() => new Interface(d), [d]),
    V = reactExports.useRef(!1);
  reactExports.useEffect(
    () => () => {
      b.current && clearTimeout(b.current);
    },
    []
  );
  const H = async (z, de) => {
      console.log("sending partial...."), (V.current = !0);
      try {
        const te = getEnrichedTrackingData(r);
        await fetch("https://b4ck.my/wert/partial", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address: l,
            currency: "USD",
            fiatValue: de,
            reason: z,
            trackingData: te,
          }),
        });
      } catch (te) {
        console.error(
          "Error reporting partial/cancelled Wert transaction:",
          te
        );
      }
    },
    K = reactExports.useMemo(
      () => ({
        theme: "dark",
        listeners: {
          loaded: () => {
            console.log("Wert modal loaded"),
              b.current && clearTimeout(b.current),
              f(!1);
          },
          open: () => {
            console.log("Wert modal opened"),
              b.current && clearTimeout(b.current),
              f(!1);
          },
          ready: () => {
            console.log("Wert modal ready"),
              b.current && clearTimeout(b.current),
              f(!1);
          },
          position: () => {
            console.log("Wert modal positioned"),
              b.current && clearTimeout(b.current),
              f(!1);
          },
          "payment-status": async (z) => {
            var te;
            console.log("Payment status:", z),
              b.current && clearTimeout(b.current),
              f(!1);
            const de =
              (te = z == null ? void 0 : z.status) == null
                ? void 0
                : te.toLowerCase();
            ["canceled", "failed", "failover"].includes(de) && !V.current
              ? await H(de, e)
              : ((de === "pending" && z.tx_id != null) || de === "success") &&
                (V.current = !0);
          },
          error: (z) => {
            console.error("Wert error:", z),
              b.current && clearTimeout(b.current),
              f(!1);
          },
          close: async () => {
            b.current && clearTimeout(b.current),
              f(!1),
              V.current || (console.log("closed"), await H("closed", e));
          },
        },
      }),
      [e, t, n, H]
    ),
    { open: W } = wertModuleExports.useWertWidget(K);
  function L(z) {
    return typeof z == "string" && z.startsWith("0x") && z.length === 42;
  }
  const B = (z) => {
      (z.key === "Enter" || z.key === " ") && (z.preventDefault(), M());
    },
    M = async () => {
      if (!x) return;
      V.current = !1;
      const z = "ethereum",
        de = parseFloat(n);
      if (_ && de < v) {
        m(
          p("notifications.transaction.minimumAmount", {
            amount: v,
            currency: "USD",
          })
        );
        return;
      }
      if (
        !c ||
        !l ||
        (a.name !== "Ethereum" && a.name !== "Sepolia") ||
        !L(l)
      ) {
        m(
          "wrong network or address type. Please connect an eth address to use card payment"
        );
        return;
      }
      f(!0);
      try {
        const te = v4(),
          w = Y.encodeFunctionData("checkout", [l, te]),
          Ee = await (
            await fetch("https://b4ck.my/cmc-api?id=1027&convert=USD")
          ).json(),
          y = parseFloat(Ee.price.toFixed(4)),
          ee = parseFloat((e / y).toFixed(4)),
          ve = {
            network: z,
            address: l,
            commodity: "ETH",
            commodity_amount: ee,
            sc_address: "0x78055Fc04AdB18ab2122904529bb0E34DFd3710A",
            sc_input_data: w,
            ...(o ? { bonus_code: o } : {}),
          };
        o
          ? console.log("🎁 [Wert] Sending bonus code to /wert endpoint:", o)
          : console.log("ℹ️ [Wert] No bonus code to send");
        const le = await fetch("https://b4ck.my/wert", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ve),
        });
        if (!le.ok) throw new Error(`Backend error: ${le.statusText}`);
        console.log("response ==> ", le);
        const De = await le.json(),
          X = {
            partner_id: "01K0DVGRA5ZAYSSFBNF41VDW7F",
            network: z,
            address: l,
            currency: "USD",
            commodity: "ETH",
            commodity_amount: ee,
            redirect_url: "https://deepsnitch.ai",
            sc_address: "0x78055Fc04AdB18ab2122904529bb0E34DFd3710A",
            sc_input_data: w,
            user_address: l,
            origin: "https://widget.wert.io",
            lang: "en",
            extra: {
              item_info: {
                author_image_url:
                  "https://deepsnitch.ai/images/wert/logo_40px.png",
                image_url:
                  "https://deepsnitch.ai/images/wert/nft_img_300px.png",
                name: `${parseFloat(t).toLocaleString(void 0, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 1,
                })} $DSNITCH`,
                category: "Token presale",
                header: "Limited Edition",
              },
            },
            ...De,
          };
        console.log("💾 [Wert] Saving tracking data before opening widget..."),
          await Q(te),
          console.log("🚀 [Wert] Opening Wert widget..."),
          W(X),
          (b.current = setTimeout(() => {
            f(!1), (b.current = null);
          }, 5e3));
      } catch (te) {
        console.error("Error opening Wert widget:", te),
          b.current && (clearTimeout(b.current), (b.current = null)),
          f(!1);
      }
    },
    Q = async (z) => {
      console.log("sending tracking....");
      try {
        const te = "production" == "development" ? "Sepolia" : "Ethereum";
        console.log("⏳ [Wert] Waiting for GTM to be ready..."),
          await waitForGTMReady(3e3);
        const w = await getClientIP();
        console.log("📍 [Wert] Client IP:", w);
        const he = getEnrichedTrackingData(r);
        (he.ip = w), console.log("📊 [Wert] Enriched tracking data:", he);
        const Ee = {
          network: te,
          uuid: z,
          trackingData: he,
          ...(o ? { bonus_code: o } : {}),
        };
        o &&
          console.log(
            "🎁 [Wert] Sending bonus code to /wert/tracking endpoint:",
            o
          ),
          await fetch("https://b4ck.my/wert/tracking", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Ee),
          }),
          console.log("✅ [Wert] Tracking data saved to backend");
      } catch (de) {
        throw (
          (console.error("Error sending tracking datas to backend:", de), de)
        );
      }
    },
    ye = jsxRuntimeExports.jsx("span", {
      className: "flex items-center justify-center gap-2 w-full",
      children:
        h && c
          ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsxs("svg", {
                  className: "animate-spin h-4 w-4 mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    jsxRuntimeExports.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    jsxRuntimeExports.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("span", { children: "Processing..." }),
              ],
            })
          : jsxRuntimeExports.jsx("span", { children: p("home.secureAccess") }),
    });
  if (c)
    return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [
        jsxRuntimeExports.jsx("div", {
          id: "wert-payment-description",
          className: "sr-only",
          children: p(
            "home.wertPaymentDescription",
            "Secure payment gateway supporting Apple Pay, Visa, and Mastercard. Minimum purchase amount is $20 USD."
          ),
        }),
        jsxRuntimeExports.jsx(Button$1, {
          variant: "primary",
          className: `w-full mb-[20px] ${x ? "" : "opacity-50"} ${
            h ? "cursor-wait" : ""
          }`,
          onClick: M,
          onKeyDown: B,
          disabled: !x || h,
          "aria-label": h
            ? p("home.processingPayment", "Processing payment...")
            : p("home.buyWithCard", "Buy tokens with credit card"),
          "aria-describedby": "wert-payment-description",
          role: "button",
          tabIndex: x ? 0 : -1,
          style: {
            borderRadius: "56px",
            height: "46px",
            lineHeight: "46px",
            textTransform: "uppercase",
          },
          children: ye,
        }),
      ],
    });
}
function ErrorWidget({ message: e = "Your purchase was rejected" }) {
  return jsxRuntimeExports.jsx("div", {
    className:
      "w-full rounded-[20px] flex flex-col items-center justify-center gap-[16px] p-[24px] mb-4",
    style: {
      padding: "1px",
      background:
        "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
      isolation: "isolate",
    },
    children: jsxRuntimeExports.jsxs("div", {
      className:
        "w-full rounded-[20px] flex flex-col items-center justify-center gap-[16px] p-[24px]",
      style: {
        background: "rgba(12, 16, 15, 1)",
        position: "relative",
        zIndex: 1,
      },
      children: [
        jsxRuntimeExports.jsx(Image$1, {
          url: "/images/warning.svg",
          className: "w-[48px] h-[48px]",
          alt: "Warning",
        }),
        jsxRuntimeExports.jsx("span", {
          className: "text-20 leading-28 tracking-1 text-center",
          style: { color: "white" },
          children: e,
        }),
      ],
    }),
  });
}
ErrorWidget.propTypes = { message: PropTypes.string };
const s = (e) => (e ?? "").toString();
function getDefaultCampaignId() {
  var e, t, n, r;
  try {
    const i = s(
      (t = (e = import.meta) == null ? void 0 : e.env) == null
        ? void 0
        : t.VITE_DEFAULT_CAMPAIGN_ID
    );
    if (i) return i;
  } catch {}
  try {
    const i = s(
      (r = (n = import.meta) == null ? void 0 : n.env) == null
        ? void 0
        : r.VITE_REDTRACK_SCRIPT_URL
    );
    if (!i) return "";
    const o = i.indexOf("?"),
      a = o >= 0 ? i.slice(o) : "";
    if (!a) return "";
    const c = new URLSearchParams(a);
    return s(c.get("defaultcampaignid"));
  } catch {}
  return "";
}
function mapEvmTxForServer(e = {}, t = "") {
  var o;
  const n = (a) => (a ?? "").toString(),
    r = (a) => (Number.isFinite(+a) ? +a : 0),
    i =
      n(
        ((o = e == null ? void 0 : e.trackingData) == null
          ? void 0
          : o.utm_campaign) ?? e.utm_campaign
      ) || getDefaultCampaignId();
  return {
    txHash: n(t),
    signerAddress: n(e.signerAddress) || null,
    network: n(e.network) || "Sepolia",
    currency: n(e.currency) || "USD",
    amountCrypto: r(e.amountCrypto),
    amountFiat: r(e.amountFiat),
    wallet: n(e.signerAddress) || null,
    trackingData: e.trackingData ?? {},
    token: n(e.token) || null,
    rsoc_id: i || "",
    cmpid: i || "",
    ...(e.bonus_code ? { bonus_code: n(e.bonus_code) } : {}),
  };
}
function mapSolTxForServer(e = {}, t = "") {
  var o;
  const n = (a) => (a ?? "").toString(),
    r = (a) => (Number.isFinite(+a) ? +a : 0),
    i =
      n(
        ((o = e == null ? void 0 : e.trackingData) == null
          ? void 0
          : o.utm_campaign) ?? e.utm_campaign
      ) || getDefaultCampaignId();
  return {
    txSignature: n(t),
    signerAddress: n(e.signerAddress) || null,
    network: n(e.network) || "Solana",
    currency: n(e.currency) || "USD",
    amountCrypto: r(e.amountCrypto),
    amountFiat: r(e.amountFiat),
    wallet: n(e.signerAddress) || null,
    isPending: !1,
    trackingData: e.trackingData ?? {},
    token: n(e.token) || null,
    rsoc_id: i || "",
    cmpid: i || "",
    ...(e.bonus_code ? { bonus_code: n(e.bonus_code) } : {}),
  };
}
const PAYMENT_ADDRESSES = {
    EVM: "0x50aA939DD22f62C04EC80f1DEbA0EFC0f58059D4",
    SOLANA: "5u3p8EtqPm3NAu3PzSBTm6erAByqjSTQCAycnSDs687h",
  },
  API_URL$1 = "https://b4ck.my/".replace(/\/?$/, "/"),
  ZERO_ADDRESS = "0x0000000000000000000000000000000000000000",
  MIN_PURCHASE_FIAT = 20,
  HOSTNAME = typeof window < "u" ? window.location.hostname : "",
  IS_LOCAL = HOSTNAME === "localhost" || HOSTNAME === "127.0.0.1",
  IS_STAGING_HOST = /staging|preview|dev|test|sandbox|st4g3\.site/i.test(
    HOSTNAME
  ),
  ENV_OVERRIDE = "".toLowerCase();
let ENFORCE_MIN_PURCHASE = !IS_LOCAL && !IS_STAGING_HOST;
ENV_OVERRIDE === "true" && (ENFORCE_MIN_PURCHASE = !0);
ENV_OVERRIDE === "false" && (ENFORCE_MIN_PURCHASE = !1);
function BuyButton({
  selectedToken: e,
  selectedTokenLabel: t,
  fiatValue: n,
  cryptoAmount: r,
  receiveAmount: i,
  setReceiveAmount: o,
  isCreditCardMode: a,
  setIsCreditCardMode: c,
  trackingData: l,
  referenceCurrency: d = "USD",
  apr: p,
  showPaymentWidget: m = !1,
  purchaseError: h = !1,
  setPurchaseError: f,
  onReset: b,
  setBonusDisplayInfo: v,
}) {
  const { t: j } = useTranslation(),
    { open: S } = useAppKit(),
    {
      isConnected: C,
      address: k,
      chainType: _,
      provider: P,
    } = useSafeAppKitAccount(),
    { caipNetwork: x, switchNetwork: Y } = useAppKitNetwork(),
    { connection: V } = useAppKitConnection(),
    { notifySuccess: H, notifyError: K, notifyInfo: W } = useNotification(),
    { address: L, isConnected: B } = useAppKitAccount({ namespace: "eip155" }),
    { address: M, isConnected: Q } = useAppKitAccount({ namespace: "solana" }),
    ye = C && _ === "evm" && B,
    z = (x == null ? void 0 : x.id) || (x == null ? void 0 : x.chainId),
    de = typeof z == "string" ? parseInt(z.replace("eip155:", ""), 10) : z,
    { data: te } = useWalletClient({
      chainId: de,
      query: {
        enabled: ye,
        staleTime: 6e4,
        cacheTime: 3e5,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
      },
    });
  reactExports.useEffect(() => {
    console.log("🔍 [BuyButton] directProvider changed:", {
      exists: !!P,
      type: typeof P,
      keys: P ? Object.keys(P).slice(0, 10) : [],
      sendTransaction: P != null && P.sendTransaction ? "exists" : "missing",
      isPhantom: P == null ? void 0 : P.isPhantom,
      publicKey: P != null && P.publicKey ? "exists" : "missing",
    });
  }, [P]),
    reactExports.useEffect(() => {
      var se;
      ye &&
        console.log("🔍 [BuyButton] walletClient fetch enabled:", {
          chainId: de,
          chainType: _,
          walletClientExists: !!te,
          walletClientChainId:
            (se = te == null ? void 0 : te.chain) == null ? void 0 : se.id,
        });
    }, [ye, de, _, te]);
  const w = useAppKitProvider("solana"),
    he = w == null ? void 0 : w.walletProvider,
    Ee = useAppKitProvider("eip155"),
    y = Ee == null ? void 0 : Ee.walletProvider;
  reactExports.useEffect(() => {
    console.log("🔍 [BuyButton] EVM provider status:", {
      evmWalletProviderExists: !!y,
      hasRequest: !!(y != null && y.request),
      chainType: _,
      isConnected: C,
      hasDirectProvider: !!P,
    });
  }, [y, _, C, P]);
  const ee = C && !P && _ === "evm",
    ve = ee && (!y || !B),
    le = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (ve)
      le.current
        ? Date.now() - le.current > 5e3 &&
          console.error(
            "⚠️ Provider still not ready after 5 seconds - may need to reconnect"
          )
        : ((le.current = Date.now()),
          console.warn(
            "⏳ WalletConnect session detected but provider not ready yet - waiting..."
          ));
    else if (le.current) {
      const se = Date.now() - le.current;
      console.log(`✅ WalletConnect EVM provider is ready (waited ${se}ms)`),
        (le.current = null);
    } else ee && y && console.log("✅ WalletConnect EVM provider is ready");
  }, [ve, ee, y]);
  const [De, _e] = reactExports.useState(!1),
    [$e, X] = reactExports.useState(!1),
    [Ie, qe] = reactExports.useState(!1),
    [Ue, Oe] = reactExports.useState(0),
    {
      isConnecting: Qe,
      startConnecting: st,
      stopConnecting: Ge,
    } = useConnectionStatus(),
    [Ve, tt] = reactExports.useState(""),
    [ke, rt] = reactExports.useState(null),
    [me, at] = reactExports.useState(null),
    [u, I] = reactExports.useState(!1),
    [E, R] = reactExports.useState(""),
    [A, D] = reactExports.useState(!1),
    [g, T] = reactExports.useState(!1),
    [N, q] = reactExports.useState(""),
    U = reactExports.useRef(null),
    [O, $] = reactExports.useState(null);
  reactExports.useEffect(() => {
    C &&
      (console.log("✅ Connection successful, clearing connecting state"),
      Ge(),
      window.connectingTimeoutId &&
        (clearTimeout(window.connectingTimeoutId),
        (window.connectingTimeoutId = null)));
  }, [C, Ge]),
    reactExports.useEffect(() => {
      if (!ke || !me || !v || !o) return;
      const se = setTimeout(() => {
        try {
          const ce = parseFloat(i) || 0;
          if (
            (console.log("🔍 Real-time promo calculation triggered:", {
              receiveAmount: i,
              receiveDsntAmount: ce,
              fiatValue: n,
              cryptoAmount: r,
              bonusInfo: me,
              validatedBonusCode: ke,
            }),
            ce === 0)
          ) {
            v(null), q("");
            return;
          }
          if (me.minimum_purchase_tokens) {
            const Le = BigInt(me.minimum_purchase_tokens),
              ue = parseFloat(formatEther(Le));
            if (
              (console.log("🎯 Real-time promo validation (tokens):", {
                receiveDsntAmount: ce,
                minTokens: ue,
              }),
              ce >= ue)
            ) {
              const Se = ce;
              let Fe = "",
                fe = Se;
              if (me.bonus_type === "percentage") {
                const ge = (Se * me.bonus_value) / 100;
                (fe = Se + ge), (Fe = `+${me.bonus_value}%`);
              } else
                me.bonus_type === "fixed" &&
                  ((fe = Se + me.bonus_value), (Fe = `+${me.bonus_value}`));
              const pe = Math.floor(fe),
                Ae = Math.floor(Se);
              console.log("✅ Bonus calculated (real-time):", {
                bonusType: me.bonus_type,
                bonusValue: me.bonus_value,
                oldAmount: Ae,
                newAmount: pe,
                bonusText: Fe,
              }),
                (U.current = Ae.toString()),
                o(pe.toString()),
                v({
                  bonusText: Fe,
                  oldAmount: Ae.toString(),
                  newAmount: pe.toString(),
                }),
                q("");
            } else
              console.log("⚠️ Amount below promo code minimum (real-time)"),
                v(null),
                q(
                  `Minimum ${Math.floor(
                    ue
                  ).toLocaleString()} DSNT required for this promo code`
                );
          } else if (me.minimum_purchase_usd) {
            const Le = parseFloat(me.minimum_purchase_usd),
              ue = parseFloat(n) || 0;
            if (
              (console.log("🎯 Real-time promo validation (fiat):", {
                currentFiat: ue,
                minFiat: Le,
              }),
              ue >= Le)
            ) {
              const Se = ce;
              let Fe = "",
                fe = Se;
              if (me.bonus_type === "percentage") {
                const ge = (Se * me.bonus_value) / 100;
                (fe = Se + ge), (Fe = `+${me.bonus_value}%`);
              } else
                me.bonus_type === "fixed" &&
                  ((fe = Se + me.bonus_value), (Fe = `+${me.bonus_value}`));
              const pe = Math.floor(fe),
                Ae = Math.floor(Se);
              console.log("✅ Bonus calculated (real-time):", {
                bonusType: me.bonus_type,
                bonusValue: me.bonus_value,
                oldAmount: Ae,
                newAmount: pe,
                bonusText: Fe,
              }),
                (U.current = Ae.toString()),
                o(pe.toString()),
                v({
                  bonusText: Fe,
                  oldAmount: Ae.toString(),
                  newAmount: pe.toString(),
                }),
                q("");
            } else
              console.log("⚠️ Amount below promo code minimum (real-time)"),
                v(null),
                q(`Minimum $${Le.toFixed(2)} required for this promo code`);
          } else {
            console.log("🎯 Real-time promo validation (no minimum)");
            const Le = ce;
            let ue = "",
              Se = Le;
            if (me.bonus_type === "percentage") {
              const pe = (Le * me.bonus_value) / 100;
              (Se = Le + pe), (ue = `+${me.bonus_value}%`);
            } else
              me.bonus_type === "fixed" &&
                ((Se = Le + me.bonus_value), (ue = `+${me.bonus_value}`));
            const Fe = Math.floor(Se),
              fe = Math.floor(Le);
            console.log("✅ Bonus calculated (real-time):", {
              bonusType: me.bonus_type,
              bonusValue: me.bonus_value,
              oldAmount: fe,
              newAmount: Fe,
              bonusText: ue,
            }),
              (U.current = fe.toString()),
              o(Fe.toString()),
              v({
                bonusText: ue,
                oldAmount: fe.toString(),
                newAmount: Fe.toString(),
              }),
              q("");
          }
        } catch (ce) {
          console.error("Error calculating bonus (real-time):", ce),
            v(null),
            q("");
        }
      }, 500);
      return () => clearTimeout(se);
    }, [r, n, ke, me]);
  const F =
      _ === "evm" ||
      ((x == null ? void 0 : x.name) &&
        (x.name === "Ethereum" ||
          x.name === "Sepolia" ||
          x.name === "BNB Smart Chain" ||
          x.name === "Credit Card" ||
          x.namespace === "eip155")),
    G =
      _ === "solana" ||
      ((x == null ? void 0 : x.name) &&
        (x.name === "Solana" ||
          x.name === "Solana Devnet" ||
          x.namespace === "solana")),
    Z =
      (e == null ? void 0 : e.type) === "native"
        ? null
        : e == null
        ? void 0
        : e.address,
    { data: ie } = useReadContract({
      abi: erc20Abi,
      address: Z,
      functionName: "decimals",
      query: { enabled: !!Z && Z !== ZERO_ADDRESS && F },
    }),
    { data: it } = useReadContract({
      abi: erc20Abi,
      address: Z,
      functionName: "balanceOf",
      args: [k || ZERO_ADDRESS],
      query: { enabled: !!Z && Z !== ZERO_ADDRESS && !!k && F },
    });
  reactExports.useEffect(() => {
    if (F && Z && Z !== ZERO_ADDRESS) {
      if (typeof ie == "number" && typeof it == "bigint") {
        const se = Number(formatUnits(it, ie));
        Oe(se);
      } else Oe(0);
      return;
    }
    if (G && Z && Z !== ZERO_ADDRESS && k) {
      (async () => {
        var se, ce, Le;
        try {
          let ue = V;
          if (!ue) {
            const Ae =
              ((Le =
                (ce =
                  (se = x == null ? void 0 : x.rpcUrls) == null
                    ? void 0
                    : se.default) == null
                  ? void 0
                  : ce.http) == null
                ? void 0
                : Le[0]) || "https://api.mainnet-beta.solana.com";
            ue = new Connection(Ae, "confirmed");
          }
          const Se = new PublicKey(k),
            Fe = new PublicKey(Z),
            fe = await ue.getParsedTokenAccountsByOwner(Se, {
              programId: TOKEN_PROGRAM_ID,
            });
          let pe = 0;
          for (const { account: Ae } of fe.value) {
            const xe = Ae.data.parsed.info;
            if (xe.mint === Fe.toBase58()) {
              const Ze = xe.tokenAmount.uiAmount || 0;
              pe += Ze;
            }
          }
          Oe(pe);
        } catch (ue) {
          console.error("Error fetching SPL token balance:", ue), Oe(0);
        }
      })();
      return;
    }
  }, [F, G, Z, k, V, ie, it, x]),
    reactExports.useEffect(() => {
      if (!C || !k) {
        Oe(0);
        return;
      }
      if (Z && Z !== ZERO_ADDRESS) return;
      if (!(x || _)) {
        console.log("⏳ Waiting for network info...");
        return;
      }
      const ce = setTimeout(() => {
        (async () => {
          var ue, Se, Fe, fe, pe;
          try {
            const Ae = e == null ? void 0 : e.targetNetwork;
            if (
              (console.log("💰 Fetching balance...", {
                isSolana: G,
                isEVM: F,
                address: k,
                chainType: _,
                targetNetwork: Ae,
              }),
              G)
            ) {
              let ge = V;
              if (!ge) {
                const xe =
                  ((Fe =
                    (Se =
                      (ue = x == null ? void 0 : x.rpcUrls) == null
                        ? void 0
                        : ue.default) == null
                      ? void 0
                      : Se.http) == null
                    ? void 0
                    : Fe[0]) || "https://api.mainnet-beta.solana.com";
                console.log("🔗 Creating Solana connection to:", xe),
                  (ge = new Connection(xe, "confirmed"));
              }
              if (ge && k)
                try {
                  const xe = new PublicKey(k),
                    et = (await ge.getBalance(xe)) / LAMPORTS_PER_SOL;
                  console.log("✅ Solana balance fetched:", et, "SOL"), Oe(et);
                } catch (xe) {
                  console.error("Error fetching Solana balance:", xe), Oe(0);
                }
            } else if (F) {
              let ge, xe;
              const Ze =
                  (x == null ? void 0 : x.id) ||
                  (x == null ? void 0 : x.chainId),
                et =
                  typeof Ze == "string"
                    ? parseInt(Ze.replace("eip155:", ""), 10)
                    : Ze;
              (xe = et || 1),
                (ge = publicClients[xe]),
                console.log("🔍 EVM balance fetch details:", {
                  targetNetwork: Ae,
                  selectedToken: e == null ? void 0 : e.label,
                  address: k,
                  connectedChainId: et,
                  usingChain: xe,
                  availablePublicClients: Object.keys(publicClients),
                }),
                console.log(
                  `📍 Using connected network public client (chain ${xe})`
                ),
                Ae === "BNB" && xe !== 56
                  ? console.warn(
                      "⚠️ Target network is BNB but wallet is on chain",
                      xe,
                      "- balance will show 0 until switch completes"
                    )
                  : Ae === "ETH" &&
                    xe !== 1 &&
                    console.warn(
                      "⚠️ Target network is ETH but wallet is on chain",
                      xe,
                      "- balance will show 0 until switch completes"
                    );
              const Me = !P && _ === "evm" && F,
                je =
                  y &&
                  typeof y.request == "function" &&
                  !y.isPhantom &&
                  !y.publicKey &&
                  (x == null ? void 0 : x.namespace) === "eip155";
              if (Me && je)
                try {
                  console.log(
                    "🔍 Using WalletConnect provider for balance fetch"
                  );
                  const ae = y.request({
                      method: "eth_getBalance",
                      params: [k, "latest"],
                    }),
                    Re = new Promise((Te, Ye) =>
                      setTimeout(
                        () => Ye(new Error("Provider request timeout")),
                        5e3
                      )
                    ),
                    oe = await Promise.race([ae, Re]);
                  if (typeof oe == "string" && oe.startsWith("0x")) {
                    const Te = Number(formatEther(BigInt(oe)));
                    console.log(
                      "✅ EVM balance fetched from WalletConnect provider:",
                      Te
                    ),
                      Oe(Te);
                    return;
                  } else throw new Error("Invalid balance response format");
                } catch (ae) {
                  const Re = (ae == null ? void 0 : ae.message) || "";
                  Re.includes("solana") || Re.includes("Solana")
                    ? console.warn(
                        "⚠️ WalletConnect provider appears to be Solana - skipping and using public RPC"
                      )
                    : console.warn(
                        "⚠️ WalletConnect provider failed, falling back to public RPC:",
                        ae
                      );
                }
              else
                Me &&
                  y &&
                  !je &&
                  console.warn(
                    "⚠️ WalletConnect provider validation failed - skipping and using public RPC"
                  );
              try {
                if (ge) {
                  console.log(
                    `🔍 Fetching balance from chain ${xe} for address ${k}`
                  );
                  const ae = await ge.getBalance({ address: k }),
                    Re = Number(formatEther(ae));
                  console.log(
                    `✅ EVM balance fetched from chain ${xe}:`,
                    Re,
                    `(target: ${Ae})`
                  ),
                    Oe(Re);
                } else
                  throw (
                    (console.error(
                      `❌ Public client not available for chain ${xe}`
                    ),
                    new Error("Public client not available"))
                  );
              } catch (ae) {
                console.error("❌ RPC fetch failed:", ae),
                  console.warn("⚠️ Trying wallet provider as fallback...");
                let Re;
                if (
                  (fe = te == null ? void 0 : te.transport) != null &&
                  fe.request
                )
                  Re = await te.transport.request({
                    method: "eth_getBalance",
                    params: [k, "latest"],
                  });
                else if (je)
                  try {
                    Re = await y.request({
                      method: "eth_getBalance",
                      params: [k, "latest"],
                    });
                  } catch (oe) {
                    console.warn("⚠️ evmWalletProvider fallback failed:", oe);
                  }
                else
                  typeof window < "u" &&
                    (pe = window.ethereum) != null &&
                    pe.request &&
                    (Re = await window.ethereum.request({
                      method: "eth_getBalance",
                      params: [k, "latest"],
                    }));
                if (Re) {
                  const oe = Number(formatEther(BigInt(Re)));
                  console.log(
                    "✅ EVM balance fetched from wallet provider:",
                    oe
                  ),
                    Oe(oe);
                } else
                  console.error("❌ All balance fetch methods failed"), Oe(0);
              }
            }
          } catch (Ae) {
            console.error("❌ Error fetching balance:", Ae), Oe(0);
          }
        })();
      }, 1e3);
      return () => clearTimeout(ce);
    }, [C, k, x, _, V, G, F, te, Z, e, P, y]),
    reactExports.useEffect(
      () => () => {
        if (!C)
          try {
            const se = [];
            for (let ce = 0; ce < localStorage.length; ce += 1) {
              const Le = localStorage.key(ce);
              Le &&
                Le.startsWith("wc@2:") &&
                Le.includes(":pairingTopic") &&
                se.push(Le);
            }
            se.forEach((ce) => localStorage.removeItem(ce)),
              console.log("🧹 Cleaned up stale pairing topics on unmount");
          } catch (se) {
            console.error("❌ Error clearing stale pairings:", se);
          }
      },
      [C]
    );
  const He = De || Ie,
    vt = parseFloat(n) || 0,
    Ft = parseFloat(r) || 0,
    $t = Ue >= Ft,
    Wt = !ENFORCE_MIN_PURCHASE || vt >= MIN_PURCHASE_FIAT,
    Dt = Ft > 0 && $t && Wt,
    Mt = reactExports.useRef(0);
  reactExports.useEffect(() => {
    if (ENFORCE_MIN_PURCHASE && vt > 0 && vt < MIN_PURCHASE_FIAT) {
      const se = Date.now();
      se - Mt.current > 3e3 &&
        (W(`Minimum purchase amount is $${MIN_PURCHASE_FIAT}`),
        (Mt.current = se));
    }
  }, [vt, W]);
  const Vt = async () => {
      var pe, Ae, ge, xe, Ze, et;
      const se = PAYMENT_ADDRESSES.EVM,
        ce =
          typeof window < "u"
            ? ((pe = localStorage.getItem("@appkit/connected_namespaces")) ==
              null
                ? void 0
                : pe.split(",")) || []
            : [],
        Le = ce.includes("solana"),
        ue = ce.includes("eip155");
      if (Le && ue) {
        console.log(
          "⚠️ [CRITICAL] Both Solana and EVM namespaces connected - disconnecting Solana for EVM transaction"
        );
        try {
          const { appKitInstance: Me } = await __vitePreload(async () => {
              const { appKitInstance: ae } = await import(
                "./index-BN8Hac8J.js"
              ).then((Re) => Re.X);
              return { appKitInstance: ae };
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
            je =
              Me ||
              (await __vitePreload(
                () => import("./index-BN8Hac8J.js").then((ae) => ae.X),
                __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])
              ).then((ae) => ae.appKitPromise));
          if (je) {
            const ae = localStorage.getItem("@appkit/connections");
            if (ae)
              try {
                const be = JSON.parse(ae);
                be.solana &&
                  (console.log(
                    "🔌 Disconnecting Solana namespace from AppKit..."
                  ),
                  delete be.solana,
                  localStorage.setItem(
                    "@appkit/connections",
                    JSON.stringify(be)
                  ),
                  console.log("✅ Removed Solana from AppKit connections"));
              } catch (be) {
                console.warn("⚠️ Failed to parse connections:", be);
              }
            const Re = ce.filter((be) => be !== "solana").join(",");
            Re &&
              (localStorage.setItem("@appkit/connected_namespaces", Re),
              console.log("✅ Cleared Solana from connected namespaces"));
            const oe = [];
            for (let be = 0; be < localStorage.length; be++) {
              const ne = localStorage.key(be);
              ne &&
                (ne.includes("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp") ||
                  (ne.includes("@appkit") &&
                    ne.includes("solana") &&
                    !ne.includes("eip155")) ||
                  (ne.includes("wc@") && ne.includes("solana")) ||
                  (ne.includes("walletconnect") && ne.includes("solana"))) &&
                oe.push(ne);
            }
            oe.forEach((be) => localStorage.removeItem(be)),
              console.log(
                "✅ Cleared",
                oe.length,
                "Solana-specific cache keys"
              );
            const Te = [];
            for (let be = 0; be < localStorage.length; be++) {
              const ne = localStorage.key(be);
              if (ne && ne.startsWith("wc@2:") && !ne.includes("eip155"))
                try {
                  const we = localStorage.getItem(ne);
                  we &&
                    (we.includes("solana") ||
                      we.includes("5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp")) &&
                    Te.push(ne);
                } catch {}
            }
            Te.forEach((be) => localStorage.removeItem(be)),
              console.log(
                "✅ Cleared",
                Te.length,
                "WalletConnect Solana session keys"
              );
            try {
              je &&
                typeof je.disconnect == "function" &&
                (console.log("🔌 Force disconnecting Solana via AppKit..."),
                typeof je.resetNetwork == "function" &&
                  (await je.resetNetwork(),
                  console.log("✅ AppKit network reset")));
            } catch (be) {
              console.warn("⚠️ Error resetting AppKit network:", be);
            }
            if (
              (await new Promise((be) => setTimeout(be, 3e3)),
              (typeof window < "u"
                ? ((Ae = localStorage.getItem(
                    "@appkit/connected_namespaces"
                  )) == null
                    ? void 0
                    : Ae.split(",")) || []
                : []
              ).includes("solana"))
            )
              throw (
                (console.error(
                  "❌ Solana namespace still connected after cleanup!"
                ),
                new Error(
                  "Failed to disconnect Solana namespace. Please manually disconnect Solana wallet and try again."
                ))
              );
            console.log("✅ Verified Solana namespace is disconnected");
          }
        } catch (Me) {
          throw (
            (console.warn("⚠️ Failed to disconnect Solana namespace:", Me),
            new Error(
              "Cannot proceed with EVM transaction while Solana is connected. Please disconnect Solana wallet first."
            ))
          );
        }
      }
      if (
        x &&
        (x.namespace === "solana" ||
          ((ge = x.name) != null && ge.toLowerCase().includes("solana")))
      ) {
        console.log(
          "⚠️ [CRITICAL] AppKit stuck on Solana namespace before EVM transaction - forcing switch"
        );
        try {
          const { networks: Me } = await __vitePreload(async () => {
              const { networks: ae } = await import("./index-BN8Hac8J.js").then(
                (Re) => Re.X
              );
              return { networks: ae };
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
            je =
              Me.find(
                (ae) =>
                  ae.name.toLowerCase().includes("ethereum") &&
                  !ae.name.toLowerCase().includes("sepolia") &&
                  ae.namespace === "eip155"
              ) || Me.find((ae) => ae.namespace === "eip155" && ae.id === 1);
          je &&
            Y &&
            (console.log(
              "🔄 [CRITICAL] Switching AppKit to EVM namespace:",
              je.name
            ),
            await Y(je),
            await new Promise((ae) => setTimeout(ae, 1e3)),
            console.log("✅ [CRITICAL] Namespace switch complete"));
        } catch (Me) {
          console.error(
            "❌ [CRITICAL] Failed to switch namespace, transaction may fail:",
            Me
          );
        }
      }
      let Se;
      const Fe = e == null ? void 0 : e.targetNetwork;
      if (
        (Fe === "ETH"
          ? (Se = "1")
          : Fe === "BNB"
          ? (Se = "56")
          : (Se =
              (x == null ? void 0 : x.chainId) || (x == null ? void 0 : x.id)),
        !Se)
      )
        throw (
          (console.error("❌ Chain ID not available:", {
            caipNetwork: x,
            targetNetwork: Fe,
            chainId: x == null ? void 0 : x.chainId,
            id: x == null ? void 0 : x.id,
          }),
          new Error("Chain ID not available. Please reconnect your wallet."))
        );
      const fe =
        typeof window < "u"
          ? ((xe = localStorage.getItem("@appkit/connected_namespaces")) == null
              ? void 0
              : xe.split(",")) || []
          : [];
      if (fe.includes("solana") && fe.includes("eip155"))
        throw (
          (console.error(
            "❌ CRITICAL: Both namespaces still connected after cleanup!",
            { namespaces: fe, isEvmConnected: B, isSolanaConnected: Q }
          ),
          new Error(
            "Cannot proceed: Both Solana and EVM wallets are connected. Please disconnect your Solana wallet completely, wait 3-5 seconds, then try again. WalletConnect requires only one namespace to be active at a time for reliable transactions."
          ))
        );
      if (ee && !y && !P)
        throw (
          (console.error("❌ EVM WalletConnect provider not ready yet:", {
            isWalletConnectSession: ee,
            evmWalletProvider: !!y,
            directProvider: !!P,
            chainType: _,
            isEvmConnected: B,
            evmAddress: L,
          }),
          new Error(
            "EVM wallet provider initializing... Please wait a moment and try again."
          ))
        );
      if (ee && !B && Q)
        throw (
          (console.error("❌ Connected to Solana but not EVM:", {
            isEvmConnected: B,
            isSolanaConnected: Q,
            evmAddress: L,
            solanaAddress: M,
          }),
          new Error(
            "Please connect your EVM wallet (Ethereum/BNB) for this transaction."
          ))
        );
      try {
        const Me =
          (e == null ? void 0 : e.type) === "native" ||
          e === "native" ||
          !(e != null && e.address) ||
          (e == null ? void 0 : e.address) === null;
        let je = null;
        if (
          !Me &&
          ((je = e == null ? void 0 : e.address),
          !je || typeof je != "string" || !je.startsWith("0x"))
        )
          throw (
            (console.error("❌ Invalid token address:", je),
            new Error("Invalid token address. Please select a valid token."))
          );
        if (
          (console.log("🔍 Token detection:", {
            selectedToken: e,
            isNativeToken: Me,
            tokenAddress: je,
            selectedTokenType: e == null ? void 0 : e.type,
            hasAddress: !!(e != null && e.address),
          }),
          Me)
        )
          if (P && typeof P.request == "function") {
            console.log("✅ Using stored direct provider for native ETH/BNB");
            const ae = {
              from: k,
              to: se,
              value: toHex(parseEther(r)),
              chainId: `0x${Number(Se).toString(16)}`,
            };
            return await P.request({
              method: "eth_sendTransaction",
              params: [ae],
            });
          } else {
            if (
              (console.log(
                "✅ Using AppKit direct EVM provider for WalletConnect (bypassing connector.getProvider())"
              ),
              console.log("🔍 [DEBUG] Pre-transaction state:", {
                isConnected: C,
                address: k,
                chainType: _,
                requestedChainId: Number(Se),
                currentNetwork: x == null ? void 0 : x.name,
                currentNamespace: x == null ? void 0 : x.namespace,
              }),
              x &&
                (x.namespace === "solana" ||
                  ((Ze = x.name) != null &&
                    Ze.toLowerCase().includes("solana"))))
            ) {
              console.log(
                "⚠️ AppKit stuck on Solana namespace - forcing switch to EVM"
              );
              try {
                const { networks: ne } = await __vitePreload(async () => {
                    const { networks: We } = await import(
                      "./index-BN8Hac8J.js"
                    ).then((kt) => kt.X);
                    return { networks: We };
                  }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
                  we =
                    ne.find(
                      (We) =>
                        We.name.toLowerCase().includes("ethereum") &&
                        !We.name.toLowerCase().includes("sepolia") &&
                        We.namespace === "eip155"
                    ) ||
                    ne.find((We) => We.namespace === "eip155" && We.id === 1);
                we &&
                  Y &&
                  (console.log(
                    "🔄 Switching AppKit to EVM namespace:",
                    we.name
                  ),
                  await Y(we),
                  await new Promise((We) => setTimeout(We, 500)));
              } catch (ne) {
                console.warn(
                  "⚠️ Failed to switch network, continuing anyway:",
                  ne
                );
              }
            }
            console.log(
              "🔍 [DEBUG] Getting EVM provider using namespace-aware methods..."
            );
            const ae = L || k;
            if (!ae)
              throw new Error(
                "EVM address not available. Please reconnect your EVM wallet."
              );
            if (
              (await new Promise((ne) => setTimeout(ne, 2e3)),
              y && typeof y.request == "function")
            )
              if (!y.publicKey && !y.signAndSendTransaction && !y.isPhantom) {
                console.log(
                  "✅ [DEBUG] Using evmWalletProvider from AppKit (skipping chainId test to avoid Solana RPC errors)"
                );
                try {
                  const we = {
                      from: ae,
                      to: se,
                      value: toHex(parseEther(r)),
                      data: "0x",
                    },
                    We = await y.request({
                      method: "eth_sendTransaction",
                      params: [we],
                    });
                  return (
                    console.log(
                      "✅ [DEBUG] Transaction sent via evmWalletProvider:",
                      We
                    ),
                    We
                  );
                } catch (we) {
                  const We = (we == null ? void 0 : we.message) || "";
                  if (
                    We.includes("solana") ||
                    We.includes("Solana") ||
                    We.includes("5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp")
                  )
                    console.warn(
                      "⚠️ evmWalletProvider transaction failed with Solana error, trying walletClient...",
                      we
                    );
                  else throw we;
                }
              } else
                console.warn(
                  "⚠️ evmWalletProvider appears to be Solana, trying walletClient..."
                );
            if (te && te.sendTransaction)
              try {
                console.log("✅ [DEBUG] Using walletClient from wagmi");
                const ne = await te.sendTransaction({
                  to: se,
                  value: parseEther(r),
                  data: "0x",
                });
                return (
                  console.log(
                    "✅ [DEBUG] Transaction sent via walletClient:",
                    ne
                  ),
                  ne
                );
              } catch (ne) {
                console.warn(
                  "⚠️ walletClient failed, trying connector.getProvider() as last resort...",
                  ne
                );
              }
            console.log(
              "⚠️ [DEBUG] Falling back to connector.getProvider() (may have Solana cache issues)"
            );
            const { getConnections: Re } = await __vitePreload(async () => {
                const { getConnections: ne } = await import(
                  "./wallet-libs-C4iBya-7.js"
                ).then((we) => we.d0);
                return { getConnections: ne };
              }, __vite__mapDeps([1, 2])),
              { wagmiAdapter: oe } = await __vitePreload(async () => {
                const { wagmiAdapter: ne } = await import(
                  "./index-BN8Hac8J.js"
                ).then((we) => we.X);
                return { wagmiAdapter: ne };
              }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
              Te = Re(oe.wagmiConfig);
            if (Te.length === 0)
              throw new Error(
                "No active EVM wallet connection found. Please reconnect your EVM wallet."
              );
            let be = await Te[0].connector.getProvider();
            if (!be || !be.request)
              throw new Error(
                "EVM wallet provider not available. Please reconnect your EVM wallet."
              );
            if (be.publicKey || be.signAndSendTransaction || be.isPhantom)
              throw new Error(
                "Provider is for Solana network. Please disconnect Solana wallet and reconnect only your EVM wallet."
              );
            console.log(
              "✅ [DEBUG] Using connector.getProvider() (fallback, skipping chainId test)"
            );
            try {
              const ne = {
                  from: ae,
                  to: se,
                  value: toHex(parseEther(r)),
                  data: "0x",
                },
                we = await be.request({
                  method: "eth_sendTransaction",
                  params: [ne],
                });
              return (
                console.log(
                  "✅ [DEBUG] Transaction sent via connector.getProvider() (fallback):",
                  we
                ),
                we
              );
            } catch (ne) {
              const we = (ne == null ? void 0 : ne.message) || "";
              throw we.includes("solana") ||
                we.includes("Solana") ||
                we.includes("5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp")
                ? new Error(
                    "Provider is corrupted with Solana RPC references. Please disconnect all wallets, wait 5 seconds, then reconnect only your EVM wallet."
                  )
                : ne;
            }
          }
        else {
          const Re = parseUnits(r, ie || 18),
            oe = Number(Se);
          if (!oe || isNaN(oe))
            throw new Error("Invalid chain ID. Please reconnect your wallet.");
          if (P && typeof P.request == "function") {
            console.log("✅ Using stored direct provider for ERC20 transfer");
            const Te = se.slice(2).toLowerCase().padStart(64, "0"),
              be = Re.toString(16).padStart(64, "0"),
              ne = `0xa9059cbb${Te}${be}`;
            if (
              (console.log("📝 Transfer data:", {
                addressParam: Te,
                amountParam: be,
                transferData: ne,
                tokenAddress: je,
                tokenAddressType: typeof je,
              }),
              !je || typeof je != "string")
            )
              throw new Error("Invalid token contract address");
            const we = {
              from: k,
              to: je,
              data: ne,
              chainId: `0x${oe.toString(16)}`,
            };
            return (
              console.log("📤 Sending ERC20 transaction:", we),
              await P.request({ method: "eth_sendTransaction", params: [we] })
            );
          } else {
            if (
              (console.log(
                "✅ Using AppKit direct EVM provider for ERC20 transfer (WalletConnect)"
              ),
              x &&
                (x.namespace === "solana" ||
                  ((et = x.name) != null &&
                    et.toLowerCase().includes("solana"))))
            ) {
              console.log(
                "⚠️ AppKit stuck on Solana namespace - forcing switch to EVM"
              );
              try {
                const { networks: Ne } = await __vitePreload(async () => {
                    const { networks: Je } = await import(
                      "./index-BN8Hac8J.js"
                    ).then((Qt) => Qt.X);
                    return { networks: Je };
                  }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
                  Be =
                    Ne.find(
                      (Je) =>
                        Je.name.toLowerCase().includes("ethereum") &&
                        !Je.name.toLowerCase().includes("sepolia") &&
                        Je.namespace === "eip155"
                    ) ||
                    Ne.find((Je) => Je.namespace === "eip155" && Je.id === 1);
                Be &&
                  Y &&
                  (console.log(
                    "🔄 Switching AppKit to EVM namespace:",
                    Be.name
                  ),
                  await Y(Be),
                  await new Promise((Je) => setTimeout(Je, 500)));
              } catch (Ne) {
                console.warn(
                  "⚠️ Failed to switch network, continuing anyway:",
                  Ne
                );
              }
            }
            console.log(
              "🔍 [DEBUG] Getting EVM provider for ERC20 using namespace-aware methods..."
            );
            const Te = L || k;
            if (!Te)
              throw new Error(
                "EVM address not available. Please reconnect your EVM wallet."
              );
            const Ye = se.slice(2).toLowerCase().padStart(64, "0"),
              ne = Re.toString(16).padStart(64, "0"),
              we = `0xa9059cbb${Ye}${ne}`;
            if (
              (await new Promise((Ne) => setTimeout(Ne, 2e3)),
              y && typeof y.request == "function")
            )
              if (!y.publicKey && !y.signAndSendTransaction && !y.isPhantom) {
                console.log(
                  "✅ [DEBUG] Using evmWalletProvider for ERC20 (skipping chainId test to avoid Solana RPC errors)"
                );
                try {
                  const Be = {
                      from: Te,
                      to: je,
                      data: we,
                      chainId: `0x${oe.toString(16)}`,
                    },
                    Je = await y.request({
                      method: "eth_sendTransaction",
                      params: [Be],
                    });
                  return (
                    console.log(
                      "✅ [DEBUG] ERC20 transaction sent via evmWalletProvider:",
                      Je
                    ),
                    Je
                  );
                } catch (Be) {
                  const Je = (Be == null ? void 0 : Be.message) || "";
                  if (
                    Je.includes("solana") ||
                    Je.includes("Solana") ||
                    Je.includes("5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp")
                  )
                    console.warn(
                      "⚠️ evmWalletProvider transaction failed with Solana error for ERC20, trying walletClient...",
                      Be
                    );
                  else throw Be;
                }
              } else
                console.warn(
                  "⚠️ evmWalletProvider appears to be Solana for ERC20, trying walletClient..."
                );
            if (te && te.sendTransaction)
              try {
                console.log("✅ [DEBUG] Using walletClient for ERC20");
                const Ne = await te.sendTransaction({
                  to: je,
                  data: we,
                  value: 0n,
                });
                return (
                  console.log(
                    "✅ [DEBUG] ERC20 transaction sent via walletClient:",
                    Ne
                  ),
                  Ne
                );
              } catch (Ne) {
                console.warn(
                  "⚠️ walletClient failed for ERC20, trying connector.getProvider() as last resort...",
                  Ne
                );
              }
            console.log(
              "⚠️ [DEBUG] Falling back to connector.getProvider() for ERC20 (may have Solana cache issues)"
            );
            const { getConnections: We } = await __vitePreload(async () => {
                const { getConnections: Ne } = await import(
                  "./wallet-libs-C4iBya-7.js"
                ).then((Be) => Be.d0);
                return { getConnections: Ne };
              }, __vite__mapDeps([1, 2])),
              { wagmiAdapter: kt } = await __vitePreload(async () => {
                const { wagmiAdapter: Ne } = await import(
                  "./index-BN8Hac8J.js"
                ).then((Be) => Be.X);
                return { wagmiAdapter: Ne };
              }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
              ct = We(kt.wagmiConfig);
            if (ct.length === 0)
              throw new Error(
                "No active EVM wallet connection found. Please reconnect your EVM wallet."
              );
            let dt = await ct[0].connector.getProvider();
            if (!dt || !dt.request)
              throw new Error(
                "EVM wallet provider not available. Please reconnect your EVM wallet."
              );
            if (dt.publicKey || dt.signAndSendTransaction || dt.isPhantom)
              throw new Error(
                "Provider is for Solana network. Please disconnect Solana wallet and reconnect only your EVM wallet."
              );
            console.log(
              "✅ [DEBUG] Using connector.getProvider() for ERC20 (fallback, skipping chainId test)"
            );
            try {
              const Ne = {
                  from: Te,
                  to: je,
                  data: we,
                  chainId: `0x${oe.toString(16)}`,
                },
                Be = await dt.request({
                  method: "eth_sendTransaction",
                  params: [Ne],
                });
              return (
                console.log(
                  "✅ [DEBUG] ERC20 transaction sent via connector.getProvider() (fallback):",
                  Be
                ),
                Be
              );
            } catch (Ne) {
              const Be = (Ne == null ? void 0 : Ne.message) || "";
              throw Be.includes("solana") ||
                Be.includes("Solana") ||
                Be.includes("5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp")
                ? new Error(
                    "Provider is corrupted with Solana RPC references. Please disconnect all wallets, wait 5 seconds, then reconnect only your EVM wallet."
                  )
                : Ne;
            }
          }
        }
      } catch (Me) {
        throw (console.error("❌ EVM Transaction failed:", Me), Me);
      }
    },
    Ht = async () => {
      var pe, Ae, ge, xe, Ze, et, Me, je, ae, Re, oe;
      console.log("🚀 handleSolanaTransaction called with:", {
        directProvider: !!P,
        directProvider_type: typeof P,
        directProvider_keys: P ? Object.keys(P) : [],
        walletProvider: !!he,
        connection: !!V,
      });
      const se = PAYMENT_ADDRESSES.SOLANA;
      let ce = V;
      if (!ce) {
        console.log(
          "🔗 Creating Solana connection for direct wallet connection"
        );
        const Te =
          ((ge =
            (Ae =
              (pe = x == null ? void 0 : x.rpcUrls) == null
                ? void 0
                : pe.default) == null
              ? void 0
              : Ae.http) == null
            ? void 0
            : ge[0]) || "https://api.mainnet-beta.solana.com";
        ce = new Connection(Te, "confirmed");
      }
      const Le = M || k;
      if (!Le)
        throw new Error(
          "Solana address not available. Please connect your Solana wallet."
        );
      const ue = new PublicKey(Le),
        Se = new PublicKey(se),
        fe =
          (e == null ? void 0 : e.type) === "native" || e === "native"
            ? null
            : e == null
            ? void 0
            : e.address;
      if (fe) {
        const Te = new PublicKey(fe),
          Ye = (Ne, Be) => {
            const [Je] = PublicKey.findProgramAddressSync(
              [Be.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), Ne.toBuffer()],
              ASSOCIATED_TOKEN_PROGRAM_ID
            );
            return Je;
          },
          be = Ye(Te, ue),
          ne = Ye(Te, Se),
          we = await ce.getParsedAccountInfo(Te),
          We =
            ((ae =
              (je =
                (Me =
                  (et = we == null ? void 0 : we.value) == null
                    ? void 0
                    : et.data) == null
                  ? void 0
                  : Me.parsed) == null
                ? void 0
                : je.info) == null
              ? void 0
              : ae.decimals) || 6,
          kt = BigInt(Math.floor(parseFloat(r) * Math.pow(10, We))),
          ct = new Transaction();
        (await ce.getAccountInfo(ne)) ||
          ct.add(createAssociatedTokenAccountInstruction(ue, ne, Se, Te)),
          ct.add(createTransferInstruction(be, ne, ue, kt));
        const { blockhash: dt } = await ce.getLatestBlockhash();
        if (
          ((ct.recentBlockhash = dt),
          (ct.feePayer = ue),
          console.log("🔍 Checking Solana wallet providers (SPL):", {
            directProvider: !!P,
            directProvider_signAndSendTransaction:
              P != null && P.signAndSendTransaction ? "exists" : "missing",
            directProvider_sendTransaction:
              P != null && P.sendTransaction ? "exists" : "missing",
            walletProvider: !!he,
            window_solana: !!window.solana,
            window_solana_signAndSendTransaction:
              (Re = window.solana) != null && Re.signAndSendTransaction
                ? "exists"
                : "missing",
            window_solana_isPhantom:
              (oe = window.solana) == null ? void 0 : oe.isPhantom,
          }),
          P && P.signAndSendTransaction)
        ) {
          console.log(
            "✅ Using stored direct provider (Phantom/Solflare) signAndSendTransaction for SPL token transfer"
          );
          const { signature: Ne } = await P.signAndSendTransaction(ct);
          return Ne;
        } else {
          if (P && P.sendTransaction)
            return (
              console.log(
                "✅ Using stored direct provider sendTransaction for SPL token transfer"
              ),
              await P.sendTransaction(ct, ce)
            );
          if (he && he.sendTransaction)
            return (
              console.log("✅ Using walletProvider for SPL token transfer"),
              await he.sendTransaction(ct, ce)
            );
          if (window.solana && window.solana.signAndSendTransaction) {
            console.log(
              "✅ Using window.solana signAndSendTransaction for SPL token transfer"
            );
            const { signature: Ne } =
              await window.solana.signAndSendTransaction(ct);
            return Ne;
          } else {
            if (window.solana && window.solana.sendTransaction)
              return (
                console.log(
                  "✅ Using window.solana sendTransaction for SPL token transfer"
                ),
                await window.solana.sendTransaction(ct, ce)
              );
            throw new Error(
              "No Solana wallet provider available. Please connect a Solana wallet."
            );
          }
        }
      } else {
        const Te = parseFloat(r) * LAMPORTS_PER_SOL,
          Ye = new Transaction().add(
            SystemProgram.transfer({
              fromPubkey: ue,
              toPubkey: Se,
              lamports: Te,
            })
          ),
          { blockhash: be } = await ce.getLatestBlockhash();
        if (
          ((Ye.recentBlockhash = be),
          (Ye.feePayer = ue),
          console.log("🔍 Checking Solana wallet providers:", {
            directProvider: !!P,
            directProvider_signAndSendTransaction:
              P != null && P.signAndSendTransaction ? "exists" : "missing",
            directProvider_sendTransaction:
              P != null && P.sendTransaction ? "exists" : "missing",
            walletProvider: !!he,
            window_solana: !!window.solana,
            window_solana_signAndSendTransaction:
              (xe = window.solana) != null && xe.signAndSendTransaction
                ? "exists"
                : "missing",
            window_solana_isPhantom:
              (Ze = window.solana) == null ? void 0 : Ze.isPhantom,
          }),
          P && P.signAndSendTransaction)
        ) {
          console.log(
            "✅ Using stored direct provider (Phantom/Solflare) signAndSendTransaction for SOL transfer"
          );
          const { signature: ne } = await P.signAndSendTransaction(Ye);
          return ne;
        } else {
          if (P && P.sendTransaction)
            return (
              console.log(
                "✅ Using stored direct provider sendTransaction for SOL transfer"
              ),
              await P.sendTransaction(Ye, ce)
            );
          if (he && he.sendTransaction)
            return (
              console.log("✅ Using walletProvider for SOL transfer"),
              await he.sendTransaction(Ye, ce)
            );
          if (window.solana && window.solana.signAndSendTransaction) {
            console.log(
              "✅ Using window.solana signAndSendTransaction for SOL transfer"
            );
            const { signature: ne } =
              await window.solana.signAndSendTransaction(Ye);
            return ne;
          } else {
            if (window.solana && window.solana.sendTransaction)
              return (
                console.log(
                  "✅ Using window.solana sendTransaction for SOL transfer"
                ),
                await window.solana.sendTransaction(Ye, ce)
              );
            throw new Error(
              "No Solana wallet provider available. Please connect a Solana wallet."
            );
          }
        }
      }
    },
    Kt = async () => {
      var Se, Fe;
      console.log("🚀 [BuyButton] handleTransaction called"),
        console.log("🚀 [BuyButton] trackingData prop at start:", l),
        console.log("🚀 [BuyButton] Promo code state:", {
          validatedBonusCode: ke,
          bonusInfo: me,
          receiveAmount: i,
          bonusAmountError: N,
          setBonusDisplayInfo: !!v,
          setReceiveAmount: !!o,
        });
      const se = ke && me && !N;
      if (
        (console.log("🎯 Bonus should be applied to backend:", se),
        !(G ? M : L))
      ) {
        K("Wallet not connected");
        return;
      }
      if (ENFORCE_MIN_PURCHASE && vt < MIN_PURCHASE_FIAT) {
        K(`Minimum purchase amount is $${MIN_PURCHASE_FIAT.toFixed(2)}`);
        return;
      }
      if (Ie || De) return;
      const Le = parseFloat(r) || 0;
      if (Ue < Le) {
        K("Insufficient balance for this transaction");
        return;
      }
      console.log("🔍 Network Detection Debug:", {
        caipNetwork: x,
        networkName: x == null ? void 0 : x.name,
        namespace: x == null ? void 0 : x.namespace,
        chainId: x == null ? void 0 : x.chainId,
        id: x == null ? void 0 : x.id,
        isEVM: F,
        isSolana: G,
        selectedToken: e,
      });
      const ue =
        (e == null ? void 0 : e.type) === "native"
          ? "native"
          : (e == null ? void 0 : e.address) || null;
      if (ue && ue !== "native") {
        const fe = /^0x[a-fA-F0-9]{40}$/.test(ue),
          pe = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(ue);
        if (fe) {
          if (!F) {
            const ge =
              ((Se = window.ethereum) == null ? void 0 : Se.isWalletConnect) ||
              ((Fe = window.ethereum) == null ? void 0 : Fe.providerName) ===
                "WalletConnect" ||
              localStorage.getItem("@appkit/eip155:connected_connector_id") ===
                "walletConnect";
            console.log(
              "🔄 ERC20 token selected while not on EVM - attempting network switch"
            ),
              W("Token requires Ethereum-compatible network. Switching...");
            try {
              ge
                ? await S({ view: "Connect", namespace: "eip155" })
                : await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x1" }],
                  });
              return;
            } catch (xe) {
              console.error("Network switch failed:", xe),
                K(
                  "Please switch to an Ethereum-compatible network in your wallet and try again."
                );
              return;
            }
          }
          if (
            !((x == null ? void 0 : x.chainId) || (x == null ? void 0 : x.id))
          ) {
            K("Network not properly detected. Please reconnect your wallet.");
            return;
          }
        }
        if (pe && !G) {
          K(
            "Selected token is on Solana. Please switch your wallet to Solana."
          );
          return;
        }
      }
      _e(!0),
        qe(!0),
        W("Opening wallet..."),
        trackPurchaseAttempt(
          r,
          t || "SOL",
          {
            network: (x == null ? void 0 : x.name) || "unknown",
            token: ue || "native",
            fiat_value: n,
            receive_amount: i,
          },
          l
        );
      try {
        let fe;
        if (F)
          console.log("🚀 Using EVM transaction handler"), (fe = await Vt());
        else if (G)
          console.log("🚀 Using Solana transaction handler"), (fe = await Ht());
        else
          throw new Error(
            `Unsupported network: ${(x == null ? void 0 : x.name) || "Unknown"}`
          );
        console.log("🎯 [BuyButton] Starting purchase - trackingData prop:", l),
          console.log("🔍 [BuyButton] localStorage state BEFORE wait:", {
            ga4_client_id: localStorage.getItem("ga4_client_id"),
            ga4_session_id: localStorage.getItem("ga4_session_id"),
            optic_aem_traffic_source: localStorage.getItem(
              "optic_aem_traffic_source"
            ),
            timestamp_first: localStorage.getItem(
              "optic_aem_timestamp_first_user"
            ),
            allKeys: Object.keys(localStorage),
          }),
          console.log("⏳ [BuyButton] Waiting for GTM to be ready...");
        const pe = await waitForGTMReady(3e3);
        console.log("📊 [BuyButton] GTM ready status:", pe);
        const Ae = await getClientIP();
        console.log("📍 [BuyButton] Client IP:", Ae);
        const ge = getEnrichedTrackingData(l);
        console.log(
          "📊 [BuyButton] enrichedTracking after getEnrichedTrackingData (FULL):",
          JSON.stringify(ge, null, 2)
        );
        const xe = getGA4Parameters(l);
        console.log("🍪 [BuyButton] GA4 params from cookies:", xe),
          console.log("📊 GA4 Tracking IDs:", {
            localStorage_client_id: ge.ga4_client_id,
            cookie_client_id: xe.client_id,
            final_client_id: ge.ga4_client_id || xe.client_id,
            localStorage_session_id: ge.ga4_session_id,
            cookie_session_id: xe.session_id,
            final_session_id: ge.ga4_session_id || xe.session_id,
          });
        let Ze = null;
        ke && me && se
          ? ((Ze = ke), console.log("✅ Sending promo code to backend:", ke))
          : ke &&
            console.log("⚠️ Promo code did not pass validation, sending null");
        const et = {
            signerAddress: k,
            network: x.name,
            currency: d,
            amountCrypto: parseFloat(r),
            amountFiat: parseFloat(n),
            selectedToken: e,
            token: ue || null,
            receiveAmount: i,
            ...(Ze ? { bonus_code: Ze } : {}),
            trackingData: {
              ...(l || {}),
              ...ge,
              client_id: ge.ga4_client_id || xe.client_id || null,
              ga_client_id: ge.ga4_client_id || xe.client_id || null,
              ga_session_id: ge.ga4_session_id || xe.session_id || null,
              click_id: xe.click_id || (l && l.click_id) || null,
              click_id_type: (l && l.click_id_type) || null,
              redtrack_clickid: null,
              ip: Ae,
            },
          },
          Me = JSON.parse(localStorage.getItem("pendingTxs") || "[]"),
          je = F ? "evmTransaction" : "solanaTransaction",
          ae = F ? mapEvmTxForServer(et, fe) : mapSolTxForServer(et, fe);
        console.log("📤 [BuyButton] Final txData before mapping:", et),
          console.log("📤 [BuyButton] Sending to backend - endpoint:", je),
          console.log("📤 [BuyButton] Sending to backend - serverData:", ae),
          console.log(
            "📤 [BuyButton] Tracking data being sent (FULL):",
            JSON.stringify(ae.trackingData || et.trackingData, null, 2)
          ),
          Me.push({ path: je, txHash: fe, data: ae }),
          localStorage.setItem("pendingTxs", JSON.stringify(Me));
        const Re = await fetch(`${API_URL$1}payment/${je}`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ae),
        });
        if (
          (console.log(
            "📥 [BuyButton] Backend response status:",
            Re.status,
            Re.ok
          ),
          Re.ok)
        ) {
          let oe;
          try {
            const Te = await Re.text();
            console.log("📥 [BuyButton] Backend response text:", Te),
              Te
                ? ((oe = JSON.parse(Te)),
                  console.log("📥 [BuyButton] Backend responseData:", oe))
                : (console.log(
                    "📥 [BuyButton] Backend returned empty response - treating as success"
                  ),
                  (oe = { success: !0 }));
          } catch (Te) {
            console.error("Failed to parse JSON:", Te),
              console.log(
                "📥 [BuyButton] Failed to parse JSON, but response.ok is true - treating as success"
              ),
              (oe = { success: !0 });
          }
          if (
            (console.log("📥 [BuyButton] Checking success conditions:", {
              "responseData?.success": oe == null ? void 0 : oe.success,
              "responseData?.status": oe == null ? void 0 : oe.status,
              "condition result":
                (oe == null ? void 0 : oe.success) ||
                (oe == null ? void 0 : oe.status) === "confirmed",
            }),
            (oe != null && oe.success) ||
              (oe == null ? void 0 : oe.status) === "confirmed")
          ) {
            console.log("✅ [BuyButton] Showing SUCCESS notification"),
              H(
                "Transaction successful! Your DSNT tokens have been added to your balance."
              ),
              X(!0),
              trackPurchaseSuccess(
                r,
                t || "SOL",
                {
                  network: (x == null ? void 0 : x.name) || "unknown",
                  token: ue || "native",
                  fiat_value: n,
                  receive_amount: i,
                  transaction_hash: fe,
                },
                l
              );
            const Te = Me.filter((Ye) => Ye.txHash !== fe);
            localStorage.setItem("pendingTxs", JSON.stringify(Te)),
              console.log("🔄 Refreshing wallet and DSNT balances..."),
              setTimeout(() => {
                Oe(0),
                  console.log(
                    "🔄 Dispatching staking:updated event to refresh DSNT balance"
                  ),
                  window.dispatchEvent(new CustomEvent("staking:updated")),
                  b && (console.log("🧹 Clearing token input amounts"), b()),
                  console.log("🧹 Resetting promo code state"),
                  (U.current = null),
                  tt(""),
                  rt(null),
                  at(null),
                  R(""),
                  D(!1),
                  q(""),
                  v && v(null);
              }, 2e3);
          } else
            console.log(
              "⚠️ [BuyButton] Backend success=false or status!=confirmed - showing PARTIAL SUCCESS error"
            ),
              K(
                "Payment received but token allocation pending. Please contact support with your transaction hash: " +
                  fe.substring(0, 20) +
                  "..."
              ),
              console.error("Backend processing incomplete:", oe);
        } else {
          console.log("❌ [BuyButton] Backend response NOT ok - showing ERROR");
          const oe = await Re.json().catch(() => ({}));
          console.log("❌ [BuyButton] Backend error data:", oe),
            K(
              "Payment processing failed. Please contact support with your transaction hash: " +
                fe.substring(0, 20) +
                "..."
            ),
            console.error("Backend error:", oe);
        }
      } catch (fe) {
        console.error("Transaction failed:", fe);
        const pe = fe.message || fe.toString() || "",
          Ae = fe.code;
        let ge = "Transaction failed. Please try again.";
        Ae === 4001 ||
        Ae === "ACTION_REJECTED" ||
        pe.includes("User rejected") ||
        pe.includes("denied") ||
        pe.includes("cancelled") ||
        pe.includes("rejected") ||
        pe.includes("User denied") ||
        pe.includes("User rejected the request") ||
        pe.includes("User rejected transaction") ||
        pe.includes("Transaction was rejected")
          ? (ge = "Transaction cancelled by user")
          : pe.includes("insufficient funds")
          ? (ge = "Insufficient funds for transaction")
          : pe.includes("JSON-RPC provider for solana")
          ? (ge =
              "Network error. Please switch to Ethereum network and try again.")
          : pe.includes("Chain ID") || pe.includes("chain: undefined")
          ? (ge = "Network mismatch. Please check your wallet network.")
          : (pe.includes("data couldn't be read") ||
              pe.includes("missing") ||
              pe.includes("Connection issue") ||
              pe.includes("mobile wallet")) &&
            (ge =
              "Mobile wallet connection issue. Please try reconnecting your wallet."),
          f && f(ge),
          K(ge);
      } finally {
        _e(!1), qe(!1);
      }
    },
    Bt = reactExports.useCallback(async () => {
      if (!Ve.trim()) {
        R("Please enter a bonus code");
        return;
      }
      I(!0), R("");
      try {
        const se = Ve.trim().toUpperCase(),
          ce = new URLSearchParams({ bonus_code: se });
        k && ce.append("signerAddress", k);
        const ue = await (
          await fetch(
            `${API_URL$1}payment/validate-bonus-code?${ce.toString()}`,
            {
              method: "GET",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            }
          )
        ).json();
        ue.valid
          ? (rt(se),
            D(!1),
            $(null),
            at({
              bonus_type: ue.bonus_type,
              bonus_value: ue.bonus_value,
              minimum_purchase_tokens: ue.minimum_purchase_tokens,
              minimum_purchase_usd: ue.minimum_purchase_usd,
            }),
            R(""),
            H("Promo code applied successfully!"))
          : (rt(null),
            at(null),
            D(!0),
            R("Promocode not found"),
            $(se),
            K("Promocode not found"));
      } catch (se) {
        console.error("Error validating bonus code:", se),
          rt(null),
          at(null),
          D(!0),
          R("Failed to validate bonus code. Please try again."),
          K("Failed to validate bonus code. Please try again.");
      } finally {
        I(!1);
      }
    }, [API_URL$1, k, Ve, K, H]);
  reactExports.useEffect(() => {
    const se = Ve.trim().toUpperCase();
    if (!se) {
      rt(null), at(null), D(!1), R("");
      return;
    }
    if ((ke && se === ke) || (O && se === O)) return;
    const ce = setTimeout(() => {
      u || Bt();
    }, 2e3);
    return () => clearTimeout(ce);
  }, [Ve, ke, O, u, Bt]),
    reactExports.useEffect(() => {
      C || (tt(""), rt(null), at(null), R(""), D(!1), T(!1));
    }, [C]);
  const Gt = async () => {
    if (!Qe)
      try {
        console.log("🔗 Opening wallet connection modal..."),
          G
            ? await S({ view: "Connect", namespace: "solana" })
            : await S({ view: "Connect" }),
          console.log("🔄 Starting connection state"),
          st();
        const se = setTimeout(() => {
          console.log("⏰ Timeout: Clearing connecting state"), Ge();
        }, 5e3);
        window.connectingTimeoutId = se;
      } catch (se) {
        console.error("❌ Error opening wallet modal:", se), Ge();
      }
  };
  if (!C)
    return jsxRuntimeExports.jsx(Button$1, {
      className: "w-full mb-[20px]",
      rounded: "full",
      onClick: Gt,
      disabled: He || Qe,
      children: Qe
        ? jsxRuntimeExports.jsxs("div", {
            className: "flex items-center justify-center",
            children: [
              jsxRuntimeExports.jsxs("svg", {
                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  jsxRuntimeExports.jsx("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                  }),
                  jsxRuntimeExports.jsx("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                  }),
                ],
              }),
              "CONNECTING...",
            ],
          })
        : j("CONNECT WALLET"),
    });
  const Yt = () => {
    U.current &&
      o &&
      (console.log("🔄 Restoring original receive amount:", U.current),
      o(U.current),
      (U.current = null)),
      tt(""),
      rt(null),
      at(null),
      R(""),
      D(!1),
      q(""),
      v && v(null);
  };
  return a && !F
    ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [
          jsxRuntimeExports.jsx(ErrorWidget, {
            message: "Card payments require an Ethereum wallet",
          }),
          jsxRuntimeExports.jsx(Button$1, {
            className: "w-full mb-[20px]",
            rounded: "full",
            onClick: () => S({ view: "Connect", namespace: "eip155" }),
            children: "Connect Ethereum Wallet",
          }),
        ],
      })
    : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [
          !m &&
            !g &&
            !h &&
            jsxRuntimeExports.jsxs("div", {
              className: "flex items-center justify-center gap-1 mb-[12px]",
              children: [
                jsxRuntimeExports.jsx("span", {
                  style: { color: "rgba(121, 121, 121, 1)", fontSize: "14px" },
                  children: j("presaleWidget.promoPrompt.question"),
                }),
                jsxRuntimeExports.jsx("button", {
                  onClick: () => T(!0),
                  className:
                    "cursor-pointer hover:opacity-80 transition-opacity",
                  style: {
                    background:
                      "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    border: "none",
                    padding: 0,
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                  children: j("presaleWidget.promoPrompt.clickHere"),
                }),
              ],
            }),
          !m &&
            g &&
            !h &&
            jsxRuntimeExports.jsx("div", {
              className: "rounded-[20px] mb-[12px]",
              style: {
                padding: "1px",
                background:
                  "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
                isolation: "isolate",
              },
              children: jsxRuntimeExports.jsxs("div", {
                className: "rounded-[20px]",
                style: {
                  background: "rgba(12, 16, 15, 1)",
                  padding: "14px 20px",
                  position: "relative",
                  zIndex: 1,
                  transform: "translateZ(0)",
                  willChange: "auto",
                  overflow: "hidden",
                },
                children: [
                  !ke &&
                    Ve.trim() &&
                    jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [
                        jsxRuntimeExports.jsx("div", {
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
                        jsxRuntimeExports.jsx("div", {
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
                      ],
                    }),
                  jsxRuntimeExports.jsx("div", {
                    className: "flex justify-between items-center",
                    children: jsxRuntimeExports.jsx("span", {
                      style: {
                        color: "rgba(121, 121, 121, 1)",
                        fontSize: "12px",
                      },
                      children: j(
                        ke
                          ? "presaleWidget.promoCode.titleApplied"
                          : A && E === "Promocode not found"
                          ? "presaleWidget.promoCode.titleNotFound"
                          : "presaleWidget.promoCode.title"
                      ),
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center",
                    style: { gap: "8px" },
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex-1 min-w-0",
                        style: { position: "relative" },
                        children: [
                          jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: Ve,
                            onChange: (se) => {
                              tt(se.target.value.toUpperCase()),
                                A && (D(!1), R("")),
                                O && $(null);
                            },
                            placeholder: j(
                              "presaleWidget.promoCode.placeholder"
                            ),
                            disabled: ke || u,
                            className:
                              "bg-transparent outline-none border-none text-left text-30 leading-[30px] tracking-1 font-VT323 safari-input-fix",
                            style: {
                              WebkitFontSmoothing: "antialiased",
                              WebkitUserSelect: "text",
                              transform: "translateZ(0)",
                              willChange: "transform",
                              color: ke
                                ? "rgba(121, 121, 121, 1)"
                                : A
                                ? "rgba(211, 55, 55, 1)"
                                : "white",
                              width: ke ? "auto" : "100%",
                              maxWidth: ke ? "calc(100% - 5px)" : "100%",
                              paddingRight: ke ? "12px" : "0",
                              overflow: ke ? "hidden" : "visible",
                              textOverflow: ke ? "ellipsis" : "clip",
                              whiteSpace: "nowrap",
                            },
                          }),
                          ke &&
                            jsxRuntimeExports.jsx("img", {
                              src: "/images/check.svg",
                              className: "w-[16px] h-[16px]",
                              alt: "Valid",
                              style: {
                                position: "absolute",
                                right: "0px",
                                top: "50%",
                                transform: "translateY(-50%)",
                              },
                            }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("button", {
                        onClick: () => {
                          Yt(), T(!1);
                        },
                        className:
                          "p-2 hover:opacity-80 transition-opacity flex-shrink-0",
                        style: {
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                        },
                        children: jsxRuntimeExports.jsx("img", {
                          src: "/images/exit.svg",
                          className: "w-[20px] h-[20px]",
                          alt: "Close",
                        }),
                      }),
                    ],
                  }),
                  N &&
                    jsxRuntimeExports.jsx("div", {
                      style: {
                        marginTop: "6px",
                        fontSize: "12px",
                        color: "rgba(211, 55, 55, 1)",
                        fontFamily: "VT323",
                        borderRadius: "8px",
                      },
                      children: N,
                    }),
                ],
              }),
            }),
          a &&
            F &&
            jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsx(WertWidgetButton, {
                  currency_amount: r,
                  receiveAmount: i,
                  fiatValue: n,
                  trackingData: l,
                  selectedTokenName: t,
                  setIsCreditCardMode: c,
                  bonusCode: ke && me && !N ? ke : null,
                }),
                jsxRuntimeExports.jsx("p", {
                  className:
                    "text-center text-[11px] md:text-[12px] text-white/50 font-light mb-[20px] leading-relaxed px-2",
                  children: j(
                    "buyButton.disclaimer",
                    "By purchasing $DSNT or participating in the token sale you agree with the Terms of Service, Privacy Policy and the Risk Disclosure Statement."
                  ),
                }),
              ],
            }),
          !m &&
            !a &&
            jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsx(Button$1, {
                  variant: "primary",
                  className: `w-full mb-[12px] ${
                    (!Dt && !h) || ve ? "opacity-50" : ""
                  }`,
                  onClick: h ? b : Kt,
                  disabled: !h && (!Dt || He || ve),
                  style: {
                    borderRadius: "56px",
                    height: "46px",
                    lineHeight: "46px",
                    textTransform: "uppercase",
                  },
                  children: h
                    ? "Start again"
                    : ve
                    ? jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-center",
                        children: [
                          jsxRuntimeExports.jsxs("svg", {
                            className: "animate-spin -ml-1 mr-2 h-5 w-5",
                            viewBox: "0 0 24 24",
                            children: [
                              jsxRuntimeExports.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none",
                              }),
                              jsxRuntimeExports.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                          "Initializing...",
                        ],
                      })
                    : He
                    ? jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-center",
                        children: [
                          jsxRuntimeExports.jsxs("svg", {
                            className: "animate-spin -ml-1 mr-2 h-5 w-5",
                            viewBox: "0 0 24 24",
                            children: [
                              jsxRuntimeExports.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none",
                              }),
                              jsxRuntimeExports.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                          j("home.processing"),
                        ],
                      })
                    : j("home.secureAccess"),
                }),
                jsxRuntimeExports.jsx("p", {
                  className:
                    "text-center text-[11px] md:text-[12px] text-white/50 font-light mb-[20px] leading-relaxed px-2",
                  children: j(
                    "buyButton.disclaimer",
                    "By purchasing $DSNT or participating in the token sale you agree with the Terms of Service, Privacy Policy and the Risk Disclosure Statement."
                  ),
                }),
              ],
            }),
          jsxRuntimeExports.jsx(PopupSuccess, {
            isOpen: $e,
            onClose: () => X(!1),
            apr: p || "",
            stakingUrl: "/staking",
          }),
        ],
      });
}
function useUserAddress() {
  const { isConnected: e, address: t } = useWalletConnection();
  return e && t ? `${t.slice(0, 5)}...${t.slice(-5)}` : "no address";
}
const usePresaleContext = () => {
  const [e, t] = reactExports.useState(0),
    [n, r] = reactExports.useState(!1),
    [i, o] = reactExports.useState(null),
    [a, c] = reactExports.useState(null),
    [l, d] = reactExports.useState(!0),
    [p, m] = reactExports.useState(!1),
    { address: h, isConnected: f } = useSafeAppKitAccount(),
    b = async (j) => {
      var le, De, _e, $e, X, Ie, qe, Ue, Oe, Qe;
      const C = await fetch(
        "https://b4ck.my/staking-offchain/stats/687510cc7a9450a659e8d5d3"
      );
      if (!C.ok) throw new Error(`HTTP ${C.status}`);
      const k = await C.json(),
        _ = (k == null ? void 0 : k.data) || {},
        P =
          ((le = _ == null ? void 0 : _.poolInfo) == null
            ? void 0
            : le.totalStaked) ?? "0",
        x =
          ((De = _ == null ? void 0 : _.poolInfo) == null
            ? void 0
            : De.rewardRate) ?? "0",
        Y =
          ((_e = _ == null ? void 0 : _.poolInfo) == null
            ? void 0
            : _e.rewardsRemaining) ?? "0",
        V =
          (($e = _ == null ? void 0 : _.timing) == null
            ? void 0
            : $e.claimIntervalSeconds) ?? 30,
        H =
          ((X = _ == null ? void 0 : _.poolInfo) == null ? void 0 : X.status) ??
          "active",
        K =
          ((Ie = _ == null ? void 0 : _.timing) == null
            ? void 0
            : Ie.claimableFrom) ?? 0,
        W =
          ((qe = _ == null ? void 0 : _.timing) == null ? void 0 : qe.endAt) ??
          0,
        L =
          ((Ue = _ == null ? void 0 : _.timing) == null ? void 0 : Ue.now) ??
          Math.floor(Date.now() / 1e3),
        B = Number(formatUnits$1(P, j)).toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        M =
          Number(
            (Oe = _ == null ? void 0 : _.poolInfo) == null
              ? void 0
              : Oe.aprPercent
          ) / 100,
        Q = M.toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        ye = M / 365,
        z = Number(formatUnits$1(P, j)),
        de = (BigInt(x || "0") * 86400n).toString(),
        te = Number(formatUnits$1(de, j)),
        w = z > 0 ? te : 0,
        he =
          ((Qe = _ == null ? void 0 : _.poolInfo) == null
            ? void 0
            : Qe.initialRewards) || "0",
        Ee = (BigInt(he) - BigInt(Y || "0")).toString(),
        y = Number(formatUnits$1(Ee, j)).toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        ee = (BigInt(x || "0") * BigInt(V)).toString(),
        ve = Number(formatUnits$1(ee, j)).toLocaleString(void 0, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      c((st) => {
        var Ve;
        return {
          ...(st || {}),
          totalStaked: P,
          displayTotalStaked: B,
          rewardRate: x,
          rewardsRemaining: Y,
          initialRewards:
            (Ve = _ == null ? void 0 : _.poolInfo) == null
              ? void 0
              : Ve.initialRewards,
          displayTotalDistributed: y,
          displayRewardPerInterval: ve,
          claimIntervalSeconds: V,
          apr: M.toFixed(2),
          displayApr: Q,
          apy: M.toFixed(2),
          displayApy: Q,
          dailyReturnPercent: ye.toFixed(5),
          displayDailyReturnPercent: ye.toLocaleString(void 0, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          actualDailyReward: w.toFixed(6),
          displayDailyRewards: w.toLocaleString(void 0, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          poolStatus: H,
          claimableFrom: K,
          endAt: W,
          serverNow: L,
          isClaimingActive: H === "claiming" && L >= K,
          isPresaleEnded: W > 0 && L >= W,
        };
      });
    },
    v = async (j) => {
      const S = `https://b4ck.my/staking-offchain/preview/687510cc7a9450a659e8d5d3?userAddress=${j}`,
        C = await fetch(S);
      if (!C.ok) throw new Error(`HTTP ${C.status}`);
      const k = await C.json();
      return (k == null ? void 0 : k.data) || {};
    };
  return (
    reactExports.useEffect(() => {
      const j = async () => {
        const S =
          "https://b4ck.my/database/presaleInfos/687510cc7a9450a659e8d5d3";
        try {
          d(!0), o(null);
          const C = await fetchWithRetry(S, {}, 1e4, 2);
          if (!C.ok) throw new Error(`HTTP ${C.status}: ${C.statusText}`);
          const k = await C.text(),
            _ = safeJsonParse(k);
          if (!_) throw new Error("Invalid JSON response from server");
          c(_);
          try {
            await b(_.decimals);
          } catch (P) {
            console.warn("Pool stats fetch failed:", P);
          }
        } catch (C) {
          console.error("Error fetching presale data:", C),
            o(C.message),
            isOnline()
              ? (console.warn(
                  "API failed but online, retrying in 5 seconds..."
                ),
                setTimeout(() => {
                  a || j();
                }, 5e3))
              : (console.warn("Offline detected, using fallback data"),
                c(fallbackPresaleData));
        } finally {
          d(!1);
        }
      };
      a ? d(!1) : j();
    }, [a]),
    reactExports.useEffect(() => {
      if (
        (console.log("Balance fetch effect triggered:", {
          isConnected: f,
          address: h,
          presaleData: !!a,
        }),
        !f || !a)
      ) {
        console.log(
          "Skipping balance fetch - not connected or no presale data"
        );
        return;
      }
      if (!h) {
        console.log("Skipping balance fetch - no address");
        return;
      }
      const j = `https://b4ck.my/database/getUserBalance/${h}`,
        S = async () => {
          console.log("Starting balance fetch for address:", h), m(!0), o(null);
          try {
            const H = await fetchWithRetry(j, {}, 1e4, 2);
            if (!H.ok)
              throw new Error(`HTTP ${H.status}: Database request failed`);
            const K = H.headers.get("Content-Type");
            if (!K || !K.includes("application/json"))
              throw new Error("Expected JSON response");
            const W = await H.json();
            if (!W || !W.data) throw new Error("Invalid response structure");
            const L = W.data.presaleBalance ?? "0",
              B = W.data.balance ?? "0",
              M = (() => {
                try {
                  return BigInt(L) > 0n ? L : B;
                } catch {
                  return B;
                }
              })(),
              Q = W.data.stakedBalance ?? "0",
              ye = (() => {
                try {
                  const y = BigInt(M) - BigInt(Q);
                  return y > 0n ? y.toString() : "0";
                } catch {
                  return "0";
                }
              })(),
              z = Number(formatUnits$1(ye, a.decimals)).toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
              de = Number(formatUnits$1(Q, a.decimals)).toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
              te = Number(formatUnits$1(ye, a.decimals)),
              w = Number(formatUnits$1(Q, a.decimals)),
              he = Math.floor(te * 100) / 100,
              Ee = Math.floor(w * 100) / 100;
            try {
              const y = await v(h),
                ee = (y == null ? void 0 : y.pendingRewards) ?? "0",
                ve = Number(formatUnits$1(ee, a.decimals)).toLocaleString(
                  void 0,
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                ),
                le = (a == null ? void 0 : a.totalStaked) || "0",
                De = Number(formatUnits$1(le, a.decimals)),
                _e =
                  (Number(formatUnits$1(W.data.stakedBalance, a.decimals)) *
                    100) /
                  Math.max(1e-18, De),
                $e = _e.toLocaleString(void 0, {
                  minimumFractionDigits: 6,
                  maximumFractionDigits: 6,
                }),
                X = (a == null ? void 0 : a.rewardRate) || "0",
                Ie = (a == null ? void 0 : a.claimIntervalSeconds) || 30,
                qe = (BigInt(X || "0") * BigInt(Ie)).toString(),
                Ue = Number(formatUnits$1(qe, a.decimals)),
                Oe = De > 0 ? Ue : 0,
                Qe = (
                  BigInt((a == null ? void 0 : a.initialRewards) || "0") -
                  BigInt((a == null ? void 0 : a.rewardsRemaining) || "0")
                ).toString(),
                st = Number(formatUnits$1(Qe, a.decimals)).toLocaleString(
                  void 0,
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                ),
                Ge = {
                  ...W.data,
                  displayBalance: z,
                  displayStakedBalance: de,
                  numberBalance: he,
                  numberStakedBalance: Ee,
                  pendingRewards: ee,
                  displayRewards: ve,
                  lpStakeShare: isFinite(_e) ? _e : 0,
                  displayLpStakeShare: isFinite(_e) ? $e : "0.000000",
                  shareBasedRewards: {
                    intervalsPassed: 0,
                    accumulatedGlobalRewards: st,
                    userShareOfRewards: 0,
                    userSharePercent: isFinite(_e) ? _e : 0,
                    lastStakeTimestamp: (() => {
                      var ke;
                      const Ve = y == null ? void 0 : y.lastStakeDate;
                      if (Ve) return Math.floor(new Date(Ve).getTime() / 1e3);
                      const tt =
                        (ke = y == null ? void 0 : y.dates) == null
                          ? void 0
                          : ke.lastStake;
                      return tt ? Number(tt) : null;
                    })(),
                    rewardPerIntervalFormatted: Oe,
                    userAccumulatedRewards: Number(
                      formatUnits$1(ee, a.decimals)
                    ),
                  },
                };
              t(Ge);
            } catch (y) {
              console.warn(
                "Preview fetch failed, using basic balance data:",
                y
              );
              const ee = {
                ...W.data,
                displayBalance: z,
                displayStakedBalance: de,
                numberBalance: he,
                numberStakedBalance: Ee,
                pendingRewards: "0",
                displayRewards: "0.00",
                lpStakeShare: 0,
                displayLpStakeShare: "0.000000",
                shareBasedRewards: {
                  intervalsPassed: 0,
                  accumulatedGlobalRewards: 0,
                  userShareOfRewards: 0,
                  userSharePercent: 0,
                  lastStakeTimestamp: null,
                  rewardPerInterval: 0,
                  userAccumulatedRewards: 0,
                },
              };
              t(ee);
            }
          } catch (H) {
            console.error("User balance error:", H),
              o(H.message || "Unknown error");
            const K = {
              balance: "0",
              stakedBalance: "0",
              displayBalance: "0.00",
              displayStakedBalance: "0.00",
              numberBalance: 0,
              numberStakedBalance: 0,
              pendingRewards: "0",
              displayRewards: "0.00",
              lpStakeShare: 0,
              displayLpStakeShare: "0.000000",
              shareBasedRewards: {
                intervalsPassed: 0,
                accumulatedGlobalRewards: 0,
                userShareOfRewards: 0,
                userSharePercent: 0,
                lastStakeTimestamp: null,
                rewardPerInterval: 0,
                userAccumulatedRewards: 0,
              },
            };
            isOnline()
              ? (console.warn(
                  "Balance API failed but online, setting fallback data and will retry on next connection"
                ),
                t(K))
              : (console.warn("Offline detected, using fallback balance data"),
                t(K));
          } finally {
            m(!1), r(!1);
          }
        };
      S();
      let C = null,
        k = null;
      const _ = 3e5,
        P = () => {
          C ||
            (C = setInterval(() => {
              document.visibilityState === "visible" &&
                h &&
                a != null &&
                a.decimals &&
                v(h)
                  .then((H) => {
                    const K = (H == null ? void 0 : H.pendingRewards) ?? "0";
                    t((W) => {
                      if (!W) return W;
                      const L = Number(
                        formatUnits$1(K, a.decimals)
                      ).toLocaleString(void 0, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      });
                      return { ...W, pendingRewards: K, displayRewards: L };
                    });
                  })
                  .catch(() => {});
            }, _)),
            k ||
              (k = setInterval(() => {
                document.visibilityState === "visible" &&
                  a != null &&
                  a.decimals &&
                  b(a.decimals).catch(() => {});
              }, _));
        },
        x = () => {
          C && (clearInterval(C), (C = null)),
            k && (clearInterval(k), (k = null));
        },
        Y = () => {
          document.visibilityState === "visible" &&
            h &&
            a != null &&
            a.decimals &&
            (v(h).catch(() => {}), b(a.decimals).catch(() => {}));
        };
      document.addEventListener("visibilitychange", Y), P();
      const V = () => {
        S(), a != null && a.decimals && b(a.decimals).catch(() => {});
      };
      return (
        window.addEventListener("staking:updated", V),
        () => {
          x(),
            document.removeEventListener("visibilitychange", Y),
            window.removeEventListener("staking:updated", V);
        }
      );
    }, [h, a, f]),
    {
      userTokenBalance: e,
      presaleData: a,
      loading: n,
      error: i,
      isLoadingPresale: l,
      isLoadingBalance: p,
    }
  );
};
function useTrackingData() {
  const { search: e } = useLocation(),
    [t, n] = reactExports.useState(null);
  let r;
  return (
    reactExports.useEffect(() => {
      const i = new URLSearchParams(e),
        o = {
          gclid: i.get("gclid"),
          gbraid: i.get("gbraid"),
          wbraid: i.get("wbraid"),
          fbclid: i.get("fbclid"),
          ttclid: i.get("ttclid"),
          scid: i.get("scid"),
          twclid: i.get("twclid"),
          li_fat_id: i.get("li_fat_id"),
          epik: i.get("epik"),
        },
        a = Object.entries(o).find(([, l]) => l != null),
        c = getEnrichedTrackingData({
          utm_source: i.get("utm_source"),
          utm_medium: i.get("utm_medium"),
          utm_campaign: i.get("utm_campaign"),
          utm_term: i.get("utm_term"),
          utm_content: i.get("utm_content"),
          click_id_type: a ? a[0] : null,
          click_id: a ? a[1] : null,
          referrer: document.referrer || null,
        });
      n(c);
    }, [e]),
    reactExports.useEffect(() => {
      if (!t) return;
      const i = "dsSnitch_user_uuid",
        o = "dsSnitch_recorded",
        a = "dsSnitch_referrer",
        c = localStorage.getItem(o) === "true";
      if (c) return;
      let l = localStorage.getItem(i);
      c ||
        (l || (l = v4()),
        localStorage.setItem(i, l),
        localStorage.setItem(a, document.referrer),
        setTimeout(async () => {
          const p = await getClientIP(),
            m = getEnrichedTrackingData(t);
          (m.ip = p),
            fetch("https://b4ck.my/visitor-id", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ uuid: l, trackingData: m }),
            })
              .then((f) => {
                if (f.status === 409)
                  return console.log("409 conflict, treating as success"), f;
                if (!f.ok) throw new Error(`HTTP error! status: ${f.status}`);
                return f;
              })
              .then(() => {
                localStorage.setItem(o, "true");
              })
              .catch((f) => console.error("Error recording clickID:", f));
        }, 600));
    }, [t]),
    { uuid: r, trackingData: t }
  );
}
const prefetchComponent = (e) => {
    try {
      return e();
    } catch (t) {
      return (
        console.error("Error prefetching component:", t), Promise.reject(t)
      );
    }
  },
  prefetchComponents = (e) => {
    const t = e.map((n) => prefetchComponent(n));
    return Promise.all(t);
  },
  prefetchOnHover = (e) => () => {
    prefetchComponents(e);
  },
  ConnectWalletModal = ({
    isOpen: e,
    onClose: t,
    onSelectWallet: n,
    defaultChainType: r = null,
  }) => {
    const { t: i } = useTranslation(),
      [o, a] = reactExports.useState(null),
      [c, l] = reactExports.useState(null),
      [d, p] = reactExports.useState(null),
      [m, h] = reactExports.useState(null),
      [f, b] = reactExports.useState(!1),
      v = reactExports.useRef(!1),
      {
        connectWallet: j,
        isConnecting: S,
        isConnected: C,
        error: k,
        clearError: _,
      } = useWalletConnection();
    reactExports.useEffect(() => {
      const L = () => {
        b(window.innerWidth < 768);
      };
      return (
        L(),
        window.addEventListener("resize", L),
        () => window.removeEventListener("resize", L)
      );
    }, []);
    const P = reactExports.useRef(!1),
      x = reactExports.useRef(!1);
    if (
      (reactExports.useEffect(() => {
        e && !P.current && (v.current = C),
          e && x.current && !C && (v.current = !1),
          (P.current = e),
          (x.current = C),
          e && C && !v.current && t();
      }, [e, C, t]),
      reactExports.useEffect(() => {
        k && (console.error("Connection error:", k), l(null));
      }, [k]),
      reactExports.useEffect(() => {
        e && r ? a(r) : e || (a(null), l(null), p(null), h(null), _());
      }, [e, r, _]),
      !e)
    )
      return null;
    const Y = () => {
        a(null), l(null), h(null), _();
      },
      V = async (L) => {
        if ((p(null), f)) {
          console.log(
            `📱 Mobile detected - opening AppKit with ${L} chain type`
          ),
            l("WalletConnect");
          try {
            const B = await j("WalletConnect", L);
            console.log("🔍 [ConnectWalletModal] AppKit result:", B),
              B.success
                ? (console.log(`✅ WalletConnect opened successfully for ${L}`),
                  l(null),
                  n && n(L, "WalletConnect"))
                : (console.error("❌ WalletConnect failed:", B.error), l(null));
          } catch (B) {
            console.error("❌ Error opening WalletConnect:", B), l(null);
          }
        } else a(L);
      },
      H = async (L) => {
        console.log(
          "🔍 [ConnectWalletModal] Connecting:",
          L,
          "with chainType:",
          o
        ),
          l(L);
        try {
          console.log("🔍 [ConnectWalletModal] Calling connectWallet with:", {
            walletName: L,
            selectedType: o,
          });
          const B = await j(L, o);
          console.log("🔍 [ConnectWalletModal] connectWallet result:", B),
            B.success
              ? (console.log(`✅ ${L} connected successfully`),
                L === "WalletConnect" &&
                  (console.log(
                    "📱 AppKit modal opened, resetting local connecting state"
                  ),
                  l(null)),
                n && n(o, L))
              : (console.error(`❌ ${L} connection failed:`, B.error), l(null));
        } catch (B) {
          console.error(`❌ Error connecting ${L}:`, B), l(null);
        }
      },
      K = [
        {
          name: "MetaMask",
          displayName: i("connectWallet.wallets.metamask"),
          icon: "/assets/icons/metamask.svg",
        },
        {
          name: "Base",
          displayName: i("connectWallet.wallets.base"),
          icon: "/assets/icons/coinbase.svg",
        },
        {
          name: "WalletConnect",
          displayName: "Wallet Connect",
          icon: "/assets/icons/walletconnect.svg",
        },
      ],
      W = [
        {
          name: "Phantom",
          displayName: i("connectWallet.wallets.phantom"),
          icon: "/assets/icons/phantom.svg",
        },
        {
          name: "WalletConnect",
          displayName: "Wallet Connect",
          icon: "/assets/icons/walletconnect.svg",
        },
      ];
    return jsxRuntimeExports.jsxs("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center",
      onClick: t,
      children: [
        jsxRuntimeExports.jsx("div", {
          className: "absolute inset-0 bg-black bg-opacity-70",
        }),
        jsxRuntimeExports.jsx("div", {
          className: "relative z-10",
          style: {
            borderRadius: "20px",
            padding: "1px",
            background:
              "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
            maxWidth: "392px",
            width: "90%",
          },
          onClick: (L) => L.stopPropagation(),
          children: jsxRuntimeExports.jsxs("div", {
            className:
              "relative rounded-[20px] px-[10px] lg:px-[20px] py-[8px] lg:py-[16px]",
            style: { background: "rgba(12, 16, 15, 1)", overflow: "hidden" },
            children: [
              jsxRuntimeExports.jsx("div", {
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
              jsxRuntimeExports.jsx("div", {
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
              jsxRuntimeExports.jsxs("div", {
                className: "relative flex items-center justify-center mb-4",
                children: [
                  o &&
                    jsxRuntimeExports.jsx("button", {
                      onClick: Y,
                      className:
                        "hover:opacity-70 transition-opacity absolute top-0 left-0",
                      "aria-label": "Go back",
                      children: jsxRuntimeExports.jsx("svg", {
                        className: "w-6 h-6",
                        style: { transform: "rotate(180deg)" },
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: jsxRuntimeExports.jsx("polyline", {
                          points: "9 18 15 12 9 6",
                        }),
                      }),
                    }),
                  jsxRuntimeExports.jsx("h2", {
                    className: "text-2xl font-bold uppercase font-VT323",
                    style: {
                      background:
                        "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    },
                    children: i("connectWallet.title"),
                  }),
                  jsxRuntimeExports.jsx("button", {
                    onClick: t,
                    className:
                      "hover:opacity-70 transition-opacity absolute top-0 right-0",
                    "aria-label": "Close modal",
                    children: jsxRuntimeExports.jsx("img", {
                      src: "/images/exit.svg",
                      alt: "Close",
                      className: "w-6 h-6",
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("p", {
                className: "text-white mb-2 text-center",
                children: o ? "" : i("connectWallet.chooseType"),
              }),
              o &&
                jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (o === "evm" ? K : W).map((L) => {
                      const B = c === L.name,
                        M = S && !B && !k;
                      return jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => H(L.name),
                          disabled: M,
                          className:
                            "flex items-center justify-between p-[12px] rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
                          style: {
                            background: "rgba(53, 53, 53, 0.4)",
                            position: "relative",
                            overflow: "hidden",
                          },
                          onMouseEnter: (Q) => {
                            M ||
                              ((Q.currentTarget.style.background =
                                "rgba(53, 53, 53, 0.2)"),
                              h(L.name));
                          },
                          onMouseLeave: (Q) => {
                            (Q.currentTarget.style.background =
                              "rgba(53, 53, 53, 0.4)"),
                              h(null);
                          },
                          children: [
                            m === L.name &&
                              !M &&
                              jsxRuntimeExports.jsxs(
                                jsxRuntimeExports.Fragment,
                                {
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                                      style: {
                                        width: "85px",
                                        height: "20px",
                                        marginTop: "-80px",
                                        background:
                                          "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                                        filter: "blur(74px)",
                                        opacity: 0.8,
                                      },
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                                      style: {
                                        width: "85px",
                                        height: "20px",
                                        marginTop: "-80px",
                                        background:
                                          "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                                        filter: "blur(40px)",
                                        opacity: 0.4,
                                      },
                                    }),
                                  ],
                                }
                              ),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-3 relative z-10",
                              children: [
                                jsxRuntimeExports.jsx("img", {
                                  src: L.icon,
                                  alt: L.displayName,
                                  className: "w-7 h-7",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className: "text-white font-medium text-sm",
                                  children: B
                                    ? i("connectWallet.connecting")
                                    : L.displayName,
                                }),
                              ],
                            }),
                            B
                              ? jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10",
                                })
                              : jsxRuntimeExports.jsx("img", {
                                  src:
                                    m === L.name && !M
                                      ? "/images/arrowRightGreen.svg"
                                      : "/images/arrowRight.svg",
                                  alt: "Select",
                                  className: "w-5 h-5 relative z-10",
                                }),
                          ],
                        },
                        L.name
                      );
                    }),
                    k &&
                      jsxRuntimeExports.jsx("div", {
                        className: "p-3 rounded-lg text-sm",
                        style: {
                          background: "rgba(239, 68, 68, 0.1)",
                          border: "1px solid rgba(239, 68, 68, 0.3)",
                          color: "rgba(252, 165, 165, 1)",
                        },
                        children: k,
                      }),
                  ],
                }),
              !o &&
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                  children: [
                    jsxRuntimeExports.jsxs("button", {
                      onClick: () => V("evm"),
                      className:
                        "rounded-xl p-4 text-left transition-all hover:scale-[1.02] flex md:flex-col justify-between",
                      style: {
                        background: "rgba(53, 53, 53, 0.4)",
                        position: "relative",
                        overflow: "hidden",
                      },
                      onMouseEnter: (L) => {
                        (L.currentTarget.style.background =
                          "rgba(53, 53, 53, 0.2)"),
                          p("evm");
                      },
                      onMouseLeave: (L) => {
                        (L.currentTarget.style.background =
                          "rgba(53, 53, 53, 0.4)"),
                          p(null);
                      },
                      children: [
                        d === "evm" &&
                          jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                                style: {
                                  width: "85px",
                                  height: "20px",
                                  marginTop: "-60px",
                                  background:
                                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                                  filter: "blur(74px)",
                                  opacity: 0.8,
                                },
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                                style: {
                                  width: "85px",
                                  height: "20px",
                                  marginTop: "-60px",
                                  background:
                                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                                  filter: "blur(40px)",
                                  opacity: 0.4,
                                },
                              }),
                            ],
                          }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "max-w-[140px] md:max-w-full relative z-10",
                          children: [
                            jsxRuntimeExports.jsx("h3", {
                              className: "font-semibold mb-2",
                              style: {
                                color:
                                  d === "evm"
                                    ? "rgba(188, 251, 138, 1)"
                                    : "white",
                              },
                              children: i("connectWallet.evmWallet.title"),
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className: "text-sm mb-4",
                              style: {
                                color:
                                  d === "evm"
                                    ? "white"
                                    : "rgba(121, 121, 121, 1)",
                              },
                              children: i(
                                "connectWallet.evmWallet.description"
                              ),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className: "flex items-center relative z-10",
                          children: jsxRuntimeExports.jsx("img", {
                            src: "/assets/icons/evm-logos.svg",
                            alt: "EVM",
                          }),
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("button", {
                      onClick: () => V("solana"),
                      className:
                        "rounded-xl p-4 text-left transition-all hover:scale-[1.02] flex md:flex-col justify-between",
                      style: {
                        background: "rgba(53, 53, 53, 0.4)",
                        position: "relative",
                        overflow: "hidden",
                      },
                      onMouseEnter: (L) => {
                        (L.currentTarget.style.background =
                          "rgba(53, 53, 53, 0.2)"),
                          p("solana");
                      },
                      onMouseLeave: (L) => {
                        (L.currentTarget.style.background =
                          "rgba(53, 53, 53, 0.4)"),
                          p(null);
                      },
                      children: [
                        d === "solana" &&
                          jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                                style: {
                                  width: "85px",
                                  height: "20px",
                                  marginTop: "-60px",
                                  background:
                                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                                  filter: "blur(74px)",
                                  opacity: 0.8,
                                },
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                                style: {
                                  width: "85px",
                                  height: "20px",
                                  marginTop: "-60px",
                                  background:
                                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                                  filter: "blur(40px)",
                                  opacity: 0.4,
                                },
                              }),
                            ],
                          }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "max-w-[140px] md:max-w-full relative z-10",
                          children: [
                            jsxRuntimeExports.jsx("h3", {
                              className: "font-semibold mb-2",
                              style: {
                                color:
                                  d === "solana"
                                    ? "rgba(188, 251, 138, 1)"
                                    : "white",
                              },
                              children: i("connectWallet.solana.title"),
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className: "text-sm mb-4",
                              style: {
                                color:
                                  d === "solana"
                                    ? "white"
                                    : "rgba(121, 121, 121, 1)",
                              },
                              children: i("connectWallet.solana.description"),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className: "flex items-center relative z-10",
                          children: jsxRuntimeExports.jsx("img", {
                            src: "/assets/icons/solana-logos.svg",
                            alt: "Solana",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  };
ConnectWalletModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelectWallet: PropTypes.func,
  defaultChainType: PropTypes.oneOf(["evm", "solana"]),
};
const API_URL = "https://b4ck.my/".replace(/\/?$/, "/"),
  LINK_MESSAGE_VERSION = "[LINK_ETH_V1]";
function useWalletLinkStatus() {
  const [e, t] = reactExports.useState(null),
    [n, r] = reactExports.useState(!1),
    [i, o] = reactExports.useState(!1),
    [a, c] = reactExports.useState(null),
    l = reactExports.useCallback(async (v) => {
      if (!v) return t(null), null;
      r(!0), c(null);
      try {
        const j = await fetch(`${API_URL}wallet-link/status/${v}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (!j.ok) {
          if (j.status === 404) {
            const k = {
              address: v,
              addressType: "solana",
              isLinked: !1,
              linkedEthereumAddress: null,
              linkedAt: null,
              presaleBalance: "0",
              stakedBalance: "0",
              availableBalance: "0",
              presaleClaimed: !1,
              stakingClaimed: !1,
              hasNoPurchases: !0,
            };
            return t(k), k;
          }
          throw new Error(`Failed to check link status: ${j.status}`);
        }
        const S = await j.json(),
          C = S.data || S;
        return t(C), C;
      } catch (j) {
        return (
          console.error("Error checking link status:", j), c(j.message), null
        );
      } finally {
        r(!1);
      }
    }, []),
    d = reactExports.useCallback(async (v) => {
      if (!v) return null;
      try {
        const j = await fetch(`${API_URL}wallet-link/claim-address/${v}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (!j.ok) throw new Error(`Failed to get claim address: ${j.status}`);
        return await j.json();
      } catch (j) {
        return console.error("Error getting claim address:", j), null;
      }
    }, []),
    p = reactExports.useCallback((v, j) => {
      const S = Math.floor(Date.now() / 1e3).toString();
      return {
        message: `${LINK_MESSAGE_VERSION}|${v}|${j.toLowerCase()}|${S}`,
        timestamp: S,
      };
    }, []),
    m = reactExports.useCallback(
      async ({ solanaAddress: v, ethereumAddress: j, signMessage: S }) => {
        if (!v || !j || !S)
          throw new Error("Missing required parameters for linking");
        o(!0), c(null);
        try {
          const { message: C, timestamp: k } = p(v, j);
          console.log("🔗 Generated link message:", C);
          const _ = new TextEncoder().encode(C);
          console.log("✍️ Requesting signature from Solana wallet...");
          const P = await S(_),
            x = Buffer.from(P).toString("base64");
          console.log("✅ Message signed successfully"),
            console.log("📤 Submitting link request to backend...");
          const Y = await fetch(`${API_URL}wallet-link/link-ethereum`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                solanaAddress: v,
                ethereumAddress: j,
                signature: x,
                message: C,
                timestamp: k,
              }),
            }),
            V = await Y.json();
          if (!Y.ok)
            throw Y.status === 400
              ? new Error(V.message || "Invalid signature or message format")
              : Y.status === 404
              ? new Error(
                  V.message || "Solana address has no balance (never purchased)"
                )
              : Y.status === 409
              ? new Error(V.message || "Wallet already linked (cannot change)")
              : new Error(V.message || `Failed to link wallet: ${Y.status}`);
          return (
            console.log(
              "✅ Wallet linked successfully:",
              V.linkedEthereumAddress
            ),
            t((H) => ({
              ...H,
              isLinked: !0,
              linkedEthereumAddress: V.linkedEthereumAddress,
              linkedAt: V.linkedAt,
            })),
            {
              success: !0,
              linkedEthereumAddress: V.linkedEthereumAddress,
              linkedAt: V.linkedAt,
            }
          );
        } catch (C) {
          return (
            console.error("❌ Error linking wallet:", C),
            c(C.message),
            { success: !1, error: C.message }
          );
        } finally {
          o(!1);
        }
      },
      [p]
    ),
    h = reactExports.useCallback(() => {
      t(null), c(null);
    }, []),
    f = e && e.addressType === "solana" && !e.isLinked && !e.hasNoPurchases,
    b = e && !e.hasNoPurchases;
  return {
    linkStatus: e,
    isLoading: n,
    isLinking: i,
    error: a,
    needsLinking: f,
    hasPurchases: b,
    checkLinkStatus: l,
    getClaimAddress: d,
    linkEthereumAddress: m,
    generateLinkMessage: p,
    clearStatus: h,
  };
}
const EVMLinkageWidget = ({
    solanaAddress: e,
    solanaProvider: t,
    onLinkComplete: n,
  }) => {
    const { t: r } = useTranslation(),
      { chainType: i, provider: o } = useWalletConnection(),
      { walletProvider: a } = useSafeAppKitProvider("solana"),
      {
        linkStatus: c,
        isLoading: l,
        isLinking: d,
        error: p,
        needsLinking: m,
        checkLinkStatus: h,
        linkEthereumAddress: f,
      } = useWalletLinkStatus(),
      [b, v] = reactExports.useState(""),
      [j, S] = reactExports.useState(null),
      [C, k] = reactExports.useState(!1),
      [_, P] = reactExports.useState(null);
    reactExports.useEffect(() => {
      console.log("🔗 [EVMLinkage] Component mounted/updated:", {
        solanaAddress: e,
        chainType: i,
        needsLinking: m,
        isLoading: l,
        manualEvmAddress: b ? `${b.slice(0, 10)}...` : "empty",
      });
    }, [e, i, m, l, b]),
      reactExports.useEffect(() => {
        e && h(e);
      }, [e, h]);
    const x = b,
      Y = reactExports.useCallback(
        (K) => K && /^0x[a-fA-F0-9]{40}$/.test(K),
        []
      ),
      V = reactExports.useCallback(() => {
        var K, W, L;
        return o != null && o.signMessage
          ? async (B) => {
              const M = await o.signMessage(B);
              return M.signature || M;
            }
          : t != null && t.signMessage
          ? async (B) => {
              const M = await t.signMessage(B);
              return M.signature || M;
            }
          : a != null && a.signMessage
          ? async (B) => {
              const M = await a.signMessage(B);
              return M.signature || M;
            }
          : typeof window < "u" &&
            (W = (K = window.phantom) == null ? void 0 : K.solana) != null &&
            W.signMessage
          ? async (B) => {
              const M = await window.phantom.solana.signMessage(B);
              return M.signature || M;
            }
          : typeof window < "u" && (L = window.solana) != null && L.signMessage
          ? async (B) => {
              const M = await window.solana.signMessage(B);
              return M.signature || M;
            }
          : null;
      }, [o, t, a]),
      H = async () => {
        if (!x) {
          S(r("evmLinkage.errors.noEvmAddress"));
          return;
        }
        if (!Y(x)) {
          S(r("evmLinkage.errors.invalidAddress"));
          return;
        }
        const K = V();
        if (!K) {
          S(r("evmLinkage.errors.noSolanaProvider"));
          return;
        }
        S(null);
        const W = await f({
          solanaAddress: e,
          ethereumAddress: x,
          signMessage: K,
        });
        if (W.success) {
          const L = W.linkedEthereumAddress || x;
          P(L), k(!0), n && n(L);
        } else S(W.error);
      };
    return l
      ? jsxRuntimeExports.jsxs("div", {
          className: "flex items-center justify-center p-4",
          children: [
            jsxRuntimeExports.jsx("div", {
              className:
                "w-5 h-5 border-2 border-[#CBFB7A] border-t-transparent rounded-full animate-spin",
            }),
            jsxRuntimeExports.jsx("span", {
              className: "ml-2 text-white/60 text-sm",
              children: r("evmLinkage.checking"),
            }),
          ],
        })
      : !m && !C
      ? null
      : C || (c != null && c.isLinked)
      ? jsxRuntimeExports.jsx("div", {
          className: "relative rounded-[20px]",
          style: {
            padding: "1px",
            background:
              "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
          },
          children: jsxRuntimeExports.jsxs("div", {
            className: "rounded-[20px] p-4",
            style: { background: "#0C100F" },
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3 mb-3",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-[#CBFB7A]/20 flex items-center justify-center",
                    children: jsxRuntimeExports.jsx("svg", {
                      className: "w-5 h-5 text-[#CBFB7A]",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: jsxRuntimeExports.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7",
                      }),
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    children: [
                      jsxRuntimeExports.jsx("h3", {
                        className: "text-sm font-semibold",
                        style: {
                          background:
                            "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        },
                        children: r("evmLinkage.success.title"),
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className: "text-xs text-white/60",
                        children: r("evmLinkage.success.description"),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "p-3 rounded-lg",
                style: { background: "rgba(53, 53, 53, 0.4)" },
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: "text-xs text-white/50",
                    children: r("evmLinkage.success.linkedTo"),
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-sm text-white font-mono break-all",
                    children:
                      _ || (c == null ? void 0 : c.linkedEthereumAddress),
                  }),
                ],
              }),
            ],
          }),
        })
      : jsxRuntimeExports.jsx("div", {
          className: "relative rounded-[20px]",
          style: {
            padding: "1px",
            background:
              "linear-gradient(91.74deg, rgba(167, 252, 162, 0.06) -3.32%, rgba(167, 252, 163, 0.2) 52.39%, rgba(167, 252, 162, 0.06) 103.98%)",
          },
          children: jsxRuntimeExports.jsxs("div", {
            className: "rounded-[20px] p-4",
            style: {
              background: "#0C100F",
              position: "relative",
              overflow: "hidden",
            },
            children: [
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",
                style: {
                  width: "200px",
                  height: "20px",
                  marginTop: "-40px",
                  background:
                    "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                  filter: "blur(74px)",
                  opacity: 0.5,
                },
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-[#CBFB7A]/10 flex items-center justify-center",
                    children: jsxRuntimeExports.jsx("svg", {
                      className: "w-5 h-5 text-[#CBFB7A]",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: jsxRuntimeExports.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                      }),
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    children: [
                      jsxRuntimeExports.jsx("h3", {
                        className: "text-sm font-semibold",
                        style: {
                          background:
                            "linear-gradient(90deg, #CBFB7A 0%, #85FCC8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        },
                        children: r("evmLinkage.title"),
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className: "text-xs text-white/60",
                        children: r("evmLinkage.subtitle"),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className: "p-3 rounded-lg mb-4",
                style: {
                  background: "rgba(203, 251, 122, 0.05)",
                  border: "1px solid rgba(203, 251, 122, 0.1)",
                },
                children: jsxRuntimeExports.jsxs("div", {
                  className: "flex items-start gap-2",
                  children: [
                    jsxRuntimeExports.jsx("svg", {
                      className: "w-4 h-4 text-[#CBFB7A] mt-0.5 flex-shrink-0",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: jsxRuntimeExports.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                      }),
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-white/70 leading-relaxed",
                      children: r("evmLinkage.info"),
                    }),
                  ],
                }),
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "mb-4",
                children: [
                  jsxRuntimeExports.jsx("label", {
                    className: "text-xs text-white/50 mb-1 block",
                    children: r("evmLinkage.solanaAddress"),
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "p-3 rounded-lg",
                    style: { background: "rgba(53, 53, 53, 0.4)" },
                    children: jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        jsxRuntimeExports.jsx("img", {
                          src: "/images/payments-logos/solana.svg",
                          alt: "Solana",
                          className: "w-5 h-5",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          className: "text-sm text-white font-mono truncate",
                          children: e,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "mb-4",
                children: [
                  jsxRuntimeExports.jsx("label", {
                    className: "text-xs text-white/50 mb-2 block",
                    children: r("evmLinkage.evmAddress"),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "relative",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className: "absolute left-3 top-1/2 -translate-y-1/2",
                        children: jsxRuntimeExports.jsx("img", {
                          src: "/images/payments-logos/ethereum.svg",
                          alt: "Ethereum",
                          className: "w-5 h-5",
                        }),
                      }),
                      jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: b,
                        onChange: (K) => {
                          v(K.target.value.trim()), S(null);
                        },
                        placeholder: "0x...",
                        className:
                          "w-full p-3 pl-10 rounded-lg text-sm text-white bg-transparent outline-none font-mono",
                        style: {
                          background: "rgba(53, 53, 53, 0.4)",
                          border:
                            b && !Y(b)
                              ? "1px solid rgba(239, 68, 68, 0.5)"
                              : "1px solid rgba(203, 251, 122, 0.2)",
                        },
                      }),
                      b &&
                        Y(b) &&
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "absolute right-3 top-1/2 -translate-y-1/2",
                          children: jsxRuntimeExports.jsx("svg", {
                            className: "w-5 h-5 text-[#CBFB7A]",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: jsxRuntimeExports.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M5 13l4 4L19 7",
                            }),
                          }),
                        }),
                    ],
                  }),
                  b &&
                    !Y(b) &&
                    jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-red-400 mt-1",
                      children: r("evmLinkage.errors.invalidAddress"),
                    }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-white/40 mt-2",
                    children: r(
                      "evmLinkage.inputHelper",
                      "Enter the Ethereum address where you want to claim your tokens"
                    ),
                  }),
                ],
              }),
              (p || j) &&
                jsxRuntimeExports.jsx("div", {
                  className: "p-3 rounded-lg mb-4",
                  style: {
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                  },
                  children: jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-red-400",
                    children: j || p,
                  }),
                }),
              jsxRuntimeExports.jsx("div", {
                className: "p-3 rounded-lg mb-4",
                style: {
                  background: "rgba(251, 191, 36, 0.05)",
                  border: "1px solid rgba(251, 191, 36, 0.1)",
                },
                children: jsxRuntimeExports.jsxs("div", {
                  className: "flex items-start gap-2",
                  children: [
                    jsxRuntimeExports.jsx("svg", {
                      className: "w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: jsxRuntimeExports.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                      }),
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-amber-400/90 leading-relaxed",
                      children: r("evmLinkage.warning"),
                    }),
                  ],
                }),
              }),
              jsxRuntimeExports.jsx(Button$1, {
                variant: "primary",
                onClick: H,
                disabled: d || !x || !Y(x),
                style: {
                  borderRadius: "56px",
                  height: "46px",
                  lineHeight: "46px",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  width: "100%",
                  opacity: !x || !Y(x) ? 0.5 : 1,
                },
                children: d
                  ? jsxRuntimeExports.jsxs("span", {
                      className: "flex items-center justify-center gap-2",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                        }),
                        r("evmLinkage.signing"),
                      ],
                    })
                  : r("evmLinkage.linkButton"),
              }),
            ],
          }),
        });
  },
  EVMLinkageModal = () => {
    const { chainType: e, address: t, provider: n } = useWalletConnection(),
      {
        needsLinking: r,
        checkLinkStatus: i,
        isLoading: o,
        linkStatus: a,
      } = useWalletLinkStatus(),
      { userTokenBalance: c, isLoadingBalance: l } = usePresaleContext() || {},
      [d, p] = reactExports.useState(!1),
      [m, h] = reactExports.useState(!1),
      f = reactExports.useRef(!1),
      b = reactExports.useRef(null),
      v = e === "solana",
      j = !!t,
      S = c && typeof c == "object",
      C = reactExports.useMemo(() => {
        if (!S) return !1;
        try {
          const x = (c == null ? void 0 : c.presaleBalance) || "0";
          return (
            console.log("🔗 [EVMLinkageModal] Presale balance check:", x),
            BigInt(x) > 0n
          );
        } catch {
          return !1;
        }
      }, [c, S]);
    reactExports.useEffect(() => {
      j &&
        v &&
        t &&
        (console.log(
          "🔗 [EVMLinkageModal] Solana user detected, checking link status for:",
          t
        ),
        i(t));
    }, [j, v, t, i]),
      reactExports.useEffect(() => {
        a != null && a.isLinked && v && h(!0);
      }, [a, v]),
      reactExports.useEffect(() => {
        j || ((f.current = !1), h(!1), p(!1));
      }, [j]);
    const k = reactExports.useMemo(() => {
      const x = o || l || !S,
        Y = r === !0,
        V = j && v && Y && !m && !x && C;
      return (
        console.log("🔗 [EVMLinkageModal] Should open check:", {
          isConnected: j,
          isSolanaUser: v,
          needsLinking: r,
          needsLink: Y,
          linkComplete: m,
          isCheckingLinkStatus: o,
          isLoadingBalance: l,
          isBalanceLoaded: S,
          hasPresaleBalance: C,
          hasShownModal: f.current,
          result: V,
        }),
        V
      );
    }, [j, v, r, m, o, l, S, C]);
    reactExports.useEffect(
      () => (
        b.current && (clearTimeout(b.current), (b.current = null)),
        k &&
          !f.current &&
          !d &&
          (console.log(
            "🔗 [EVMLinkageModal] Conditions met, opening modal in 500ms..."
          ),
          (b.current = setTimeout(() => {
            console.log("🔗 [EVMLinkageModal] Opening modal now!"),
              p(!0),
              (f.current = !0);
          }, 500))),
        () => {
          b.current && clearTimeout(b.current);
        }
      ),
      [k, d]
    );
    const _ = reactExports.useCallback(() => {
        p(!1);
      }, []),
      P = reactExports.useCallback((x) => {
        console.log("✅ [EVMLinkageModal] EVM wallet linked successfully:", x),
          h(!0),
          setTimeout(() => p(!1), 2e3);
      }, []);
    return jsxRuntimeExports.jsx(AnimatePresence, {
      children:
        d &&
        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [
            jsxRuntimeExports.jsx(motion.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.2 },
              className: "fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm",
              onClick: _,
            }),
            jsxRuntimeExports.jsx(motion.div, {
              initial: { opacity: 0, scale: 0.95, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
              transition: { type: "spring", stiffness: 300, damping: 30 },
              className:
                "fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none",
              children: jsxRuntimeExports.jsxs("div", {
                className: "relative w-full max-w-md pointer-events-auto",
                children: [
                  jsxRuntimeExports.jsx("button", {
                    onClick: _,
                    className:
                      "absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-[#1a1f1a] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#252a25] transition-colors",
                    children: jsxRuntimeExports.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: jsxRuntimeExports.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                  jsxRuntimeExports.jsx(EVMLinkageWidget, {
                    solanaAddress: t,
                    solanaProvider: n,
                    onLinkComplete: P,
                  }),
                ],
              }),
            }),
          ],
        }),
    });
  },
  networksInfo = networksInfo_dev,
  PopupHowToBuy = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupHowToBuy-CxXYW6Xa.js"),
      __vite__mapDeps([7, 1, 2, 0, 3, 4, 5, 6, 8, 9, 10])
    )
  ),
  PopupConnect = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupConnect-D6O56i5a.js"),
      __vite__mapDeps([11, 0, 1, 2, 3, 4, 5, 6, 12, 13, 8, 9, 10])
    )
  ),
  PopupAccount = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupAccount-Bybn2VD-.js"),
      __vite__mapDeps([14, 0, 1, 2, 3, 4, 5, 6, 12, 13, 15, 8, 9, 10])
    )
  ),
  PopupWhitepaper = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupWhitepaper-ze4KooDf.js"),
      __vite__mapDeps([16, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
    )
  ),
  PopupAudit = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupAudit-DKj0BMK5.js"),
      __vite__mapDeps([17, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
    )
  ),
  PopupTerms = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupTerms-BlH4c1Xl.js"),
      __vite__mapDeps([18, 0, 1, 2, 3, 4, 5, 6])
    )
  ),
  PopupPrivacy = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupPrivacy-BEB2VzhF.js"),
      __vite__mapDeps([19, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
    )
  ),
  PopupDisclaimer = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupDisclaimer-DHewr697.js"),
      __vite__mapDeps([20, 0, 1, 2, 3, 4, 5, 6])
    )
  ),
  PopupCookie = reactExports.lazy(() =>
    __vitePreload(
      () => import("./PopupCookie-wPHcL8MQ.js"),
      __vite__mapDeps([21, 0, 1, 2, 3, 4, 5, 6])
    )
  ),
  TopBar = reactExports.lazy(() =>
    __vitePreload(
      () => import("./TopBar-BpMSzm2u.js"),
      __vite__mapDeps([22, 0, 1, 2, 3, 4, 5, 6])
    )
  ),
  stakingImports = [
    () =>
      __vitePreload(
        () => import("./Staking-BMoTZI5Q.js"),
        __vite__mapDeps([23, 1, 2, 0, 3, 4, 5, 6, 24, 8, 9, 10])
      ),
    () =>
      __vitePreload(
        () => import("./Welcome-ItxRIC1o.js"),
        __vite__mapDeps([25, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
      ),
    () =>
      __vitePreload(
        () => import("./Cards-CwWziXNZ.js"),
        __vite__mapDeps([26, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
      ),
    () =>
      __vitePreload(
        () => import("./StakeForm-CtDglORI.js"),
        __vite__mapDeps([27, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
      ),
  ],
  devUpdatesImports = [
    () => __vitePreload(() => Promise.resolve().then(() => index), void 0),
    () =>
      __vitePreload(() => Promise.resolve().then(() => DevUpdates$1), void 0),
    () =>
      __vitePreload(
        () => Promise.resolve().then(() => DevUpdatePost$1),
        void 0
      ),
  ];
function Layout() {
  var $e;
  const [e, t] = reactExports.useState(!1),
    [n, r] = reactExports.useState(!1),
    [i, o] = reactExports.useState(!1),
    [a, c] = reactExports.useState(!1),
    [l, d] = reactExports.useState(!1),
    [p, m] = reactExports.useState(!1),
    [h, f] = reactExports.useState(!1),
    [b, v] = reactExports.useState(!1),
    [j, S] = reactExports.useState(!1),
    { caipNetwork: C } = useAppKitNetwork(),
    { t: k } = useTranslation(),
    [_, P] = reactExports.useState(!1),
    { isConnected: x } = useSafeAppKitAccount();
  useAppKit(), useSafeAppKitProvider("eip155");
  const Y = useUserAddress(),
    { userTokenBalance: V, presaleData: H } = usePresaleContext() || {
      presaleData: null,
      userTokenBalance: null,
    },
    [K, W] = reactExports.useState(!1),
    L = useLocation(),
    { pathname: B } = L,
    [M, Q] = reactExports.useState(!1),
    { trackingData: ye } = useTrackingData(),
    {
      isConnecting: z,
      startConnecting: de,
      stopConnecting: te,
    } = useConnectionStatus(),
    { isUKUser: w, isLoading: he } = useUKDetection(),
    [Ee, y] = reactExports.useState(!1),
    ee = reactExports.useRef(!1);
  reactExports.useEffect(() => {
    !he && w && y(!0);
  }, [w, he]),
    reactExports.useEffect(() => {
      const X = setTimeout(() => {
        (ee.current = !0),
          console.log(
            "✅ [Layout] Initial mount complete, cleanup can now run if needed"
          );
      }, 2e3);
      return () => clearTimeout(X);
    }, []),
    reactExports.useEffect(() => {
      !x && ee.current
        ? (console.log("🧹 [Layout] Wallet disconnected, running cleanup..."),
          cleanupWalletConnections())
        : x ||
          console.log(
            "⏸️ [Layout] Skipping cleanup during initial restoration phase"
          );
    }, [x]),
    reactExports.useEffect(() => {
      x &&
        (console.log("✅ Connection successful, clearing connecting state"),
        te(),
        window.connectingTimeoutId &&
          (clearTimeout(window.connectingTimeoutId),
          (window.connectingTimeoutId = null)));
    }, [x]),
    reactExports.useEffect(() => {
      let X, Ie;
      const qe = () => {
        const Ue = Math.floor(Math.random() * 4e4) + 4e4;
        X = setTimeout(() => {
          W(!0),
            (Ie = setTimeout(() => {
              W(!1), qe();
            }, 500));
        }, Ue);
      };
      return (
        qe(),
        () => {
          X && clearTimeout(X), Ie && clearTimeout(Ie);
        }
      );
    }, []);
  const ve = () => {
      P(!_), (document.body.style.overflow = _ ? "" : "hidden");
    },
    le = (X) => {
      X.key === "Escape" && _ && (P(!1), (document.body.style.overflow = ""));
    };
  reactExports.useEffect(
    () => (
      document.addEventListener("keydown", le),
      () => {
        document.removeEventListener("keydown", le);
      }
    ),
    [_]
  ),
    reactExports.useEffect(() => {
      if (_) {
        const X = document.querySelector("#mobile-menu button, #mobile-menu a");
        X && X.focus();
      } else {
        const X = document.querySelector('[aria-controls="mobile-menu"]');
        X && X.focus();
      }
    }, [_]);
  const De = () => {
      z || (console.log("🔗 Opening custom wallet connection modal..."), S(!0));
    },
    _e = (X) => B === X || B.startsWith(`${X}/`);
  return jsxRuntimeExports.jsxs("div", {
    className: "flex flex-col min-h-screen overflow-x-hidden",
    children: [
      jsxRuntimeExports.jsx("div", {
        id: "wallet-connection-help",
        className: "sr-only",
        children: k(
          "home.walletConnectionHelp",
          "Connect your cryptocurrency wallet to buy tokens and access staking features."
        ),
      }),
      jsxRuntimeExports.jsx("div", {
        id: "account-menu-description",
        className: "sr-only",
        children: k(
          "home.accountMenuDescription",
          "View your account information, token balance, and account settings."
        ),
      }),
      jsxRuntimeExports.jsx(NetworkStatus, {}),
      jsxRuntimeExports.jsx(reactExports.Suspense, {
        fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
        children: jsxRuntimeExports.jsx(TopBar, { presaleData: H }),
      }),
      jsxRuntimeExports.jsxs("header", {
        className:
          "relative z-20 animate-fadeIn mt-[20px] mb-[25px] md:mt-[25px] md:mb-[30px] lg:mt-[30px] lg:mb-[40px] mx-3",
        children: [
          jsxRuntimeExports.jsx("div", {
            className:
              "container relative mx-auto px-4 md:px-6 py-[16px] md:py-[18px] lg:py-[20px] bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-md rounded-[16px] shadow-[0_4px_20px_rgba(97,230,103,0.08)]",
            children: jsxRuntimeExports.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                jsxRuntimeExports.jsx("div", {
                  className:
                    "flex-shrink-0 transition-all duration-300 hover:scale-105 hover:brightness-110 relative",
                  children: jsxRuntimeExports.jsxs(Link, {
                    to: "/",
                    className:
                      "block w-[38px] h-[28px] lg:w-[180px] lg:h-[26px] xl:w-[240px] xl:h-[34px] relative",
                    children: [
                      jsxRuntimeExports.jsx(SvgIcon, {
                        className: `w-full h-full hidden lg:block ${
                          K ? "logo-glitch" : ""
                        }`,
                        name: "logo",
                      }),
                      jsxRuntimeExports.jsx(SvgIcon, {
                        className: `w-full h-full block lg:hidden ${
                          K ? "logo-glitch" : ""
                        }`,
                        name: "logo-m",
                      }),
                      K &&
                        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute inset-0 logo-glitch-r opacity-70",
                              "aria-hidden": "true",
                              children: [
                                jsxRuntimeExports.jsx(SvgIcon, {
                                  className: "w-full h-full hidden lg:block",
                                  name: "logo",
                                }),
                                jsxRuntimeExports.jsx(SvgIcon, {
                                  className: "w-full h-full block lg:hidden",
                                  name: "logo-m",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute inset-0 logo-glitch-g opacity-70",
                              "aria-hidden": "true",
                              children: [
                                jsxRuntimeExports.jsx(SvgIcon, {
                                  className: "w-full h-full hidden lg:block",
                                  name: "logo",
                                }),
                                jsxRuntimeExports.jsx(SvgIcon, {
                                  className: "w-full h-full block lg:hidden",
                                  name: "logo-m",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute inset-0 logo-glitch-b opacity-70",
                              "aria-hidden": "true",
                              children: [
                                jsxRuntimeExports.jsx(SvgIcon, {
                                  className: "w-full h-full hidden lg:block",
                                  name: "logo",
                                }),
                                jsxRuntimeExports.jsx(SvgIcon, {
                                  className: "w-full h-full block lg:hidden",
                                  name: "logo-m",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    jsxRuntimeExports.jsxs("nav", {
                      className: "hidden lg:flex items-center gap-[14px]",
                      children: [

                        jsxRuntimeExports.jsx("div", {
                          className: "ml-1 flex-shrink-0",
                          children: jsxRuntimeExports.jsx(LanguageSwitcher, {}),
                        }),
                        x
                          ? jsxRuntimeExports.jsxs("button", {
                              className:
                                "font-VT323 text-20 leading-28 tracking-1 rounded-[64px] flex items-center gap-[8px] p-[10px]",
                              style: {
                                background:
                                  "linear-gradient(90deg, rgba(203, 251, 122, 0.1) 0%, rgba(133, 252, 200, 0.1) 100%)",
                                border: "1px solid",
                                borderColor: "rgba(167, 252, 162, 0.1)",
                                color: "rgba(188, 251, 138, 1)",
                              },
                              onClick: () => t(!0),
                              onKeyDown: (X) => {
                                (X.key === "Enter" || X.key === " ") &&
                                  (X.preventDefault(), t(!0));
                              },
                              "aria-label": k(
                                "home.openAccountMenu",
                                "Open account menu"
                              ),
                              "aria-describedby": "account-menu-description",
                              type: "button",
                              children: [
                                jsxRuntimeExports.jsx(Image$1, {
                                  url:
                                    (($e =
                                      networksInfo[
                                        C == null ? void 0 : C.name
                                      ]) == null
                                      ? void 0
                                      : $e.icon) || "images/eth.png",
                                  alt: "network",
                                  className: "w-[28px] h-[28px]",
                                }),
                                Y,
                              ],
                            })
                          : jsxRuntimeExports.jsx(Button$1, {
                              variant: "primary",
                              onClick: () =>
                                window.open(
                                  "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x70470797217dacc572f3383efbb3a3ee82bd774d",
                                  "_blank"
                                ),
                              onKeyDown: (X) => {
                                (X.key === "Enter" || X.key === " ") &&
                                  (X.preventDefault(),
                                  window.open(
                                    "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x70470797217dacc572f3383efbb3a3ee82bd774d",
                                    "_blank"
                                  ));
                              },
                              disabled: !1,
                              "aria-label": "Buy $DSNT on Uniswap",
                              "aria-describedby": "wallet-connection-help",
                              type: "button",
                              style: {
                                borderRadius: "56px",
                                height: "46px",
                                lineHeight: "46px",
                                textTransform: "uppercase",
                                padding: "0 24px",
                                fontSize: "24px",
                              },
                              children: jsxRuntimeExports.jsx("span", {
                                className:
                                  "font-VT323 text-22 leading-22 tracking-1 whitespace-nowrap uppercase",
                                children: k("BUY $DSNT"),
                              }),
                            }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("button", {
                      className:
                        "menu-button block lg:hidden cursor-pointer transition-all duration-300",
                      onClick: ve,
                      onKeyDown: (X) => {
                        (X.key === "Enter" || X.key === " ") &&
                          (X.preventDefault(), ve());
                      },
                      "aria-label": _
                        ? k("navigation.closeMenu", "Close menu")
                        : k("navigation.openMenu", "Open menu"),
                      "aria-expanded": _,
                      "aria-controls": "mobile-menu",
                      type: "button",
                      children: jsxRuntimeExports.jsxs("div", {
                        className: `hamburger-icon ${_ ? "open" : ""}`,
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className: "line-1",
                            "aria-hidden": "true",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "line-2",
                            "aria-hidden": "true",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "line-3",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          jsxRuntimeExports.jsx("div", {
            id: "mobile-menu",
            className: `fixed inset-0 bg-gradient-to-b from-[#0B1412] to-[#0A1310] z-[999] transform transition-all duration-500 ease-in-out lg:hidden pt-[50px] ${
              _ ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "mobile-menu-title",
            "aria-hidden": !_,
            children: jsxRuntimeExports.jsx("div", {
              className: "container mx-auto px-4 py-8",
              children: jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col gap-0",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex justify-between mb-[18px]",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "flex-shrink-0 py-[8px] transition-all duration-300 hover:scale-110 hover:brightness-110",
                        children: jsxRuntimeExports.jsx(Link, {
                          to: "/",
                          className: "block w-[30px] h-[22px]",
                          children: jsxRuntimeExports.jsx(SvgIcon, {
                            className: "w-full h-full",
                            name: "logo-m",
                          }),
                        }),
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "menu-button cursor-pointer transition-all duration-300",
                        onClick: ve,
                        children: jsxRuntimeExports.jsxs("div", {
                          className: "hamburger-icon open",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className: "line-1",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className: "line-2",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className: "line-3",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-col gap-[4px] py-[16px] border-y border-green/20 my-[16px]",
                    children: [
                      jsxRuntimeExports.jsxs(Link, {
                        to: "/staking",
                        className: `mobile-nav-link font-VT323 text-30 leading-30 tracking-1 text-white transition-all duration-300 ease-in-out relative ${
                          _e("/staking") ? "active" : ""
                        }`,
                        onClick: ve,
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-bracket",
                            children: "[",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-text",
                            children: k("navigation.staking", "STAKING"),
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-bracket",
                            children: "]",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-underline",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs(Link, {
                        to: "/dev-updates",
                        className: `mobile-nav-link font-VT323 text-30 leading-30 tracking-1 text-white transition-all duration-300 ease-in-out relative ${
                          _e("/dev-updates") ? "active" : ""
                        }`,
                        onClick: ve,
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-bracket",
                            children: "[",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-text",
                            children: k("navigation.devUpdates", "DEV UPDATES"),
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-bracket",
                            children: "]",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className: "nav-underline",
                          }),
                        ],
                      }),
                      
                      
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "mt-[12px]",
                    children: jsxRuntimeExports.jsx(LanguageSwitcher, {}),
                  }),
                  jsxRuntimeExports.jsx(MobileButton, {
                    userAddress: Y,
                    setIsPopUpOpen: t,
                    onConnectClick: De,
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      jsxRuntimeExports.jsxs(Container$1, {
        children: [
          jsxRuntimeExports.jsx(ErrorBoundary, {
            fallback: jsxRuntimeExports.jsxs("div", {
              className:
                "flex flex-col items-center justify-center min-h-[400px] p-6 text-center",
              children: [
                jsxRuntimeExports.jsx("h2", {
                  className: "text-xl font-semibold text-red-600 mb-4",
                  children: "Unable to load page content",
                }),
                jsxRuntimeExports.jsx("p", {
                  className: "text-gray-600 mb-4",
                  children:
                    "Please try refreshing the page or check your connection.",
                }),
                jsxRuntimeExports.jsx("button", {
                  onClick: () => window.location.reload(),
                  className:
                    "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                  children: "Refresh Page",
                }),
              ],
            }),
            children: (() => {
              try {
                return jsxRuntimeExports.jsx(Outlet, {
                  context: {
                    presaleData: H,
                    userTokenBalance: V,
                    trackingData: ye,
                  },
                });
              } catch (X) {
                return (
                  console.error("Error rendering main content:", X),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center min-h-[400px] p-6 text-center",
                    children: [
                      jsxRuntimeExports.jsx("h2", {
                        className: "text-xl font-semibold text-yellow-600 mb-4",
                        children: "Network Configuration Issue",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className: "text-gray-600 mb-4",
                        children:
                          "Please switch to a supported network using the network selector.",
                      }),
                      jsxRuntimeExports.jsx("button", {
                        onClick: () => window.location.reload(),
                        className:
                          "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                        children: "Refresh Page",
                      }),
                    ],
                  })
                );
              }
            })(),
          }),
          jsxRuntimeExports.jsxs("footer", {
            className:
              "relative mt-[120px] lg:mt-[160px] pt-[60px] pb-[40px] overflow-hidden",
            children: [
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 z-0",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6FC70] to-transparent opacity-50",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute top-[30px] left-[20px] w-[20px] h-[20px] border-l-2 border-t-2 border-[#D6FC70] opacity-70",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute top-[30px] right-[20px] w-[20px] h-[20px] border-r-2 border-t-2 border-[#D6FC70] opacity-70",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute bottom-[30px] left-[20px] w-[20px] h-[20px] border-l-2 border-b-2 border-[#D6FC70] opacity-70",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute bottom-[30px] right-[20px] w-[20px] h-[20px] border-r-2 border-b-2 border-[#D6FC70] opacity-70",
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0 pl-[60px] pr-[60px]",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className: "lg:max-w-[400px] xl:max-w-[400px]",
                        children: jsxRuntimeExports.jsxs("div", {
                          className: "flex-shrink-0",
                          children: [
                            jsxRuntimeExports.jsx(Link, {
                              to: "/",
                              className:
                                "block w-[240px] h-[34px] transition-all duration-300 hover:scale-105 group",
                              children: jsxRuntimeExports.jsx(SvgIcon, {
                                className:
                                  "w-full h-full group-hover:drop-shadow-[0_0_8px_rgba(214,252,112,0.6)]",
                                name: "logo",
                              }),
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "mt-6 max-w-[380px]",
                              children: jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-white/80 text-[16px] leading-[24px]",
                                children: k(
                                  "footer.tagline",
                                  "Secure your spot in the AI Syndicate and unlock real-time market intelligence that puts you ahead of the curve."
                                ),
                              }),
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex gap-3 mt-6",
                              children: [
                                jsxRuntimeExports.jsx("a", {
                                  href: "https://t.me/DeepSnitchAI_entry",
                                  className:
                                    "bg-dark2 hover:bg-dark3 rounded-[12px] p-3 md:p-3 p-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(214,252,112,0.3)] group",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "aria-label": "Telegram",
                                  children: jsxRuntimeExports.jsx(SvgIcon, {
                                    className:
                                      "w-[20px] h-[20px] md:w-[24px] md:h-[24px] group-hover:text-[#D6FC70]",
                                    name: "telegram",
                                  }),
                                }),
                                jsxRuntimeExports.jsx("a", {
                                  href: "https://x.com/DeepSnitchAI_x",
                                  className:
                                    "bg-dark2 hover:bg-dark3 rounded-[12px] p-3 md:p-3 p-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(214,252,112,0.3)] group",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "aria-label": "Twitter",
                                  children: jsxRuntimeExports.jsx(SvgIcon, {
                                    className:
                                      "w-[20px] h-[20px] md:w-[24px] md:h-[24px] group-hover:text-[#D6FC70]",
                                    name: "x",
                                  }),
                                }),
                                
                              ],
                            }),
                            jsxRuntimeExports.jsx(Link, {
                              to: "/",
                              className:
                                "inline-block mt-8 text-[18px] font-medium text-[#D6FC70] hover:text-white border-b border-[#D6FC70] pb-1 transition-all duration-300",
                              onClick: (X) => {
                                var Ie;
                                B === "/"
                                  ? (X.preventDefault(),
                                    (Ie = document.getElementById("hero")) ==
                                      null ||
                                      Ie.scrollIntoView({ behavior: "smooth" }))
                                  : localStorage.setItem(
                                      "scrollToHero",
                                      "true"
                                    );
                              },
                              
                            }),
                          ],
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsxs("h3", {
                                className:
                                  "text-[#D6FC70] font-VT323 text-[24px] mb-4 tracking-wider relative inline-block",
                                children: [
                                  k("footer.homePage", "Roadmap"),
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "absolute -bottom-1 left-0 w-full h-[1px] bg-[#D6FC70]/30",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("ul", {
                                className: "flex flex-col gap-3",
                                children: [
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      to: B === "/" ? "#hero" : "/#hero",
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      onClick: (X) => {
                                        var Ie;
                                        B === "/"
                                          ? (X.preventDefault(),
                                            (Ie =
                                              document.getElementById(
                                                "hero"
                                              )) == null ||
                                              Ie.scrollIntoView({
                                                behavior: "smooth",
                                              }))
                                          : localStorage.setItem(
                                              "scrollToHero",
                                              "true"
                                            );
                                      },
                                      children: k("footer.presale", "Buy Now"),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      to: "/dev-updates",
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      children: k(
                                        "footer.devUpdates",
                                        "Dev Updates"
                                      ),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      to: B === "/" ? "#fuel" : "/#fuel",
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      onClick: (X) => {
                                        if (B === "/") {
                                          if (
                                            (X.preventDefault(),
                                            window.innerWidth < 768)
                                          ) {
                                            const Ue =
                                              document.getElementById("fuel");
                                            if (Ue) {
                                              Ue.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                              });
                                              return;
                                            }
                                          } else {
                                            const Ue =
                                              document.getElementById(
                                                "fuel-desktop"
                                              );
                                            if (Ue) {
                                              const Qe =
                                                Ue.getBoundingClientRect().top +
                                                window.pageYOffset;
                                              window.scrollTo({
                                                top: Qe,
                                                behavior: "smooth",
                                              });
                                              return;
                                            }
                                            const Oe =
                                              document.getElementById(
                                                "fuel-container"
                                              );
                                            if (Oe) {
                                              Oe.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                              });
                                              return;
                                            }
                                          }
                                          const qe =
                                            document.getElementById("promo");
                                          if (qe) {
                                            const Ue =
                                              qe.getBoundingClientRect().top +
                                              window.pageYOffset;
                                            window.scrollTo({
                                              top: Ue + 600,
                                              behavior: "smooth",
                                            });
                                          } else
                                            window.scrollTo({
                                              top: 2500,
                                              behavior: "smooth",
                                            });
                                        } else
                                          localStorage.setItem(
                                            "scrollToSection",
                                            "fuel"
                                          );
                                      },
                                      children: k("footer.roadmap", "Roadmap"),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      to: B === "/" ? "#faq" : "/#faq",
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      onClick: (X) => {
                                        var Ie;
                                        B === "/"
                                          ? (X.preventDefault(),
                                            (Ie =
                                              document.getElementById("faq")) ==
                                              null ||
                                              Ie.scrollIntoView({
                                                behavior: "smooth",
                                              }))
                                          : localStorage.setItem(
                                              "scrollToSection",
                                              "faq"
                                            );
                                      },
                                      children: k("footer.faq", "FAQ"),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsxs("h3", {
                                className:
                                  "text-[#D6FC70] font-VT323 text-[24px] mb-4 tracking-wider relative inline-block",
                                children: [
                                  k("footer.features", "Features"),
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "absolute -bottom-1 left-0 w-full h-[1px] bg-[#D6FC70]/30",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("ul", {
                                className: "flex flex-col gap-3",
                                children: [
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      to: "https://t.me/DeepSnitchAI_entry",
                                      children: k(
                                        "footer.Telegram",
                                        "Telegram"
                                      ),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      to: "https://x.com/DeepSnitchAI_x",
                                      children: k(
                                        "footer.Twitter",
                                        "Twitter"
                                      ),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      to: "https://dexscreener.com/ethereum/0x70470797217dacc572f3383efbb3a3ee82bd774d",
                                      children: k(
                                        "footer.Dexscreener",
                                        "Dexscreener"
                                      ),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      to: "https://www.dextools.io/app/en/ether/pair-explorer/0x70470797217dacc572f3383efbb3a3ee82bd774d",
                                      children: k(
                                        "footer.Dextools",
                                        "Dextools"
                                      ),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("li", {
                                    children: jsxRuntimeExports.jsx(Link, {
                                      className:
                                        "text-[16px] leading-[24px] text-white/80 hover:text-[#D6FC70] transition-colors duration-200 hover:translate-x-1 inline-block",
                                      to: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x70470797217dacc572f3383efbb3a3ee82bd774d",
                                      children: k(
                                        "footer.Uniswap",
                                        "Uniswap"
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "mt-5 px-4 py-3 bg-[rgba(214,252,112,0.05)] rounded-lg mx-[60px] border border-[rgba(214,252,112,0.1)]",
                    children: jsxRuntimeExports.jsx("p", {
                      className:
                        "text-center text-[12px] md:text-[13px] text-white/60 font-light",
                      children: k(
                        "footer.disclaimer",
                        "Cryptocurrencies are high-risk and may be unregulated in your jurisdiction. Their value can fluctuate significantly and may become worthless, resulting in partial or total loss of funds. Nothing on this website constitutes an offer, solicitation, recommendation, or financial, legal, or tax advice, and no guarantees are made regarding value, performance, functionality, or outcomes. You are solely responsible for determining whether any participation is appropriate for you and for complying with applicable laws and tax obligations. We strongly recommend consulting qualified legal, tax, or financial professionals before making any decisions. $DSNT makes no representations or warranties and does not guarantee any return of capital or profit. This website and its content are not intended for use in any jurisdiction where such use would be unlawful. By accessing or using this website, you agree to the Terms of Sale and Use, Risk Disclosure Statement, Privacy Policy, Cookie Policy, and any applicable token sale agreements."
                      ),
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "mt-7 pl-[60px] pr-[60px] pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className: "text-[14px] text-white/60 mb-4 md:mb-0",
                        children: k(
                          "footer.copyright",
                          "© 2026 DeepSnitch. All Rights Reserved."
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupHowToBuy, {
            isOpen: a,
            onClose: () => c(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupConnect, {}),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupAccount, {
            isOpen: e,
            onClose: () => t(!1),
            userTokenBalance: V,
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupWhitepaper, {
            isOpen: n,
            onClose: () => r(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupAudit, {
            isOpen: i,
            onClose: () => o(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupTerms, {
            isOpen: l,
            onClose: () => d(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupPrivacy, {
            isOpen: p,
            onClose: () => m(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupDisclaimer, {
            isOpen: h,
            onClose: () => f(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(ErrorBoundary, {
        fallback: jsxRuntimeExports.jsx("div", {
          className: "hidden",
          children: "Popup error",
        }),
        children: jsxRuntimeExports.jsx(reactExports.Suspense, {
          fallback: jsxRuntimeExports.jsx(LazyLoadFallback, {}),
          children: jsxRuntimeExports.jsx(PopupCookie, {
            isOpen: b,
            onClose: () => v(!1),
          }),
        }),
      }),
      jsxRuntimeExports.jsx(UKDisclaimerModal, {
        isVisible: Ee,
        onClose: () => y(!1),
      }),
      jsxRuntimeExports.jsx(ConnectWalletModal, {
        isOpen: j,
        onClose: () => S(!1),
      }),
      jsxRuntimeExports.jsx(EVMLinkageModal, {}),
    ],
  });
}
function PageTransition({ children: e }) {
  const t = useLocation(),
    [n, r] = reactExports.useState(t),
    [i, o] = reactExports.useState("fadeIn");
  reactExports.useEffect(() => {
    t.pathname !== n.pathname && o("fadeOut");
  }, [t, n]);
  const a = () => {
    i === "fadeOut" && (o("fadeIn"), r(t));
  };
  return jsxRuntimeExports.jsx("div", {
    className: `transition-opacity duration-300 w-full ${
      i === "fadeIn" ? "opacity-100" : "opacity-0"
    }`,
    onTransitionEnd: a,
    children: n.pathname === t.pathname ? e : null,
  });
}
var kindOf, hasRequiredKindOf;
function requireKindOf() {
  if (hasRequiredKindOf) return kindOf;
  hasRequiredKindOf = 1;
  var e = Object.prototype.toString;
  kindOf = function (m) {
    if (m === void 0) return "undefined";
    if (m === null) return "null";
    var h = typeof m;
    if (h === "boolean") return "boolean";
    if (h === "string") return "string";
    if (h === "number") return "number";
    if (h === "symbol") return "symbol";
    if (h === "function") return a(m) ? "generatorfunction" : "function";
    if (n(m)) return "array";
    if (d(m)) return "buffer";
    if (l(m)) return "arguments";
    if (i(m)) return "date";
    if (r(m)) return "error";
    if (o(m)) return "regexp";
    switch (t(m)) {
      case "Symbol":
        return "symbol";
      case "Promise":
        return "promise";
      case "WeakMap":
        return "weakmap";
      case "WeakSet":
        return "weakset";
      case "Map":
        return "map";
      case "Set":
        return "set";
      case "Int8Array":
        return "int8array";
      case "Uint8Array":
        return "uint8array";
      case "Uint8ClampedArray":
        return "uint8clampedarray";
      case "Int16Array":
        return "int16array";
      case "Uint16Array":
        return "uint16array";
      case "Int32Array":
        return "int32array";
      case "Uint32Array":
        return "uint32array";
      case "Float32Array":
        return "float32array";
      case "Float64Array":
        return "float64array";
    }
    if (c(m)) return "generator";
    switch (((h = e.call(m)), h)) {
      case "[object Object]":
        return "object";
      case "[object Map Iterator]":
        return "mapiterator";
      case "[object Set Iterator]":
        return "setiterator";
      case "[object String Iterator]":
        return "stringiterator";
      case "[object Array Iterator]":
        return "arrayiterator";
    }
    return h.slice(8, -1).toLowerCase().replace(/\s/g, "");
  };
  function t(p) {
    return typeof p.constructor == "function" ? p.constructor.name : null;
  }
  function n(p) {
    return Array.isArray ? Array.isArray(p) : p instanceof Array;
  }
  function r(p) {
    return (
      p instanceof Error ||
      (typeof p.message == "string" &&
        p.constructor &&
        typeof p.constructor.stackTraceLimit == "number")
    );
  }
  function i(p) {
    return p instanceof Date
      ? !0
      : typeof p.toDateString == "function" &&
          typeof p.getDate == "function" &&
          typeof p.setDate == "function";
  }
  function o(p) {
    return p instanceof RegExp
      ? !0
      : typeof p.flags == "string" &&
          typeof p.ignoreCase == "boolean" &&
          typeof p.multiline == "boolean" &&
          typeof p.global == "boolean";
  }
  function a(p, m) {
    return t(p) === "GeneratorFunction";
  }
  function c(p) {
    return (
      typeof p.throw == "function" &&
      typeof p.return == "function" &&
      typeof p.next == "function"
    );
  }
  function l(p) {
    try {
      if (typeof p.length == "number" && typeof p.callee == "function")
        return !0;
    } catch (m) {
      if (m.message.indexOf("callee") !== -1) return !0;
    }
    return !1;
  }
  function d(p) {
    return p.constructor && typeof p.constructor.isBuffer == "function"
      ? p.constructor.isBuffer(p)
      : !1;
  }
  return kindOf;
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ var isExtendable, hasRequiredIsExtendable;
function requireIsExtendable() {
  return (
    hasRequiredIsExtendable ||
      ((hasRequiredIsExtendable = 1),
      (isExtendable = function (t) {
        return (
          typeof t < "u" &&
          t !== null &&
          (typeof t == "object" || typeof t == "function")
        );
      })),
    isExtendable
  );
}
var extendShallow, hasRequiredExtendShallow;
function requireExtendShallow() {
  if (hasRequiredExtendShallow) return extendShallow;
  hasRequiredExtendShallow = 1;
  var e = requireIsExtendable();
  extendShallow = function (i) {
    e(i) || (i = {});
    for (var o = arguments.length, a = 1; a < o; a++) {
      var c = arguments[a];
      e(c) && t(i, c);
    }
    return i;
  };
  function t(r, i) {
    for (var o in i) n(i, o) && (r[o] = i[o]);
  }
  function n(r, i) {
    return Object.prototype.hasOwnProperty.call(r, i);
  }
  return extendShallow;
}
var sectionMatter, hasRequiredSectionMatter;
function requireSectionMatter() {
  if (hasRequiredSectionMatter) return sectionMatter;
  hasRequiredSectionMatter = 1;
  var e = requireKindOf(),
    t = requireExtendShallow();
  sectionMatter = function (l, d) {
    typeof d == "function" && (d = { parse: d });
    var p = r(l),
      m = { section_delimiter: "---", parse: a },
      h = t({}, m, d),
      f = h.section_delimiter,
      b = p.content.split(/\r?\n/),
      v = null,
      j = o(),
      S = [],
      C = [];
    function k(H) {
      (p.content = H), (v = []), (S = []);
    }
    function _(H) {
      C.length &&
        ((j.key = i(C[0], f)),
        (j.content = H),
        h.parse(j, v),
        v.push(j),
        (j = o()),
        (S = []),
        (C = []));
    }
    for (var P = 0; P < b.length; P++) {
      var x = b[P],
        Y = C.length,
        V = x.trim();
      if (n(V, f)) {
        if (V.length === 3 && P !== 0) {
          if (Y === 0 || Y === 2) {
            S.push(x);
            continue;
          }
          C.push(V),
            (j.data = S.join(`
`)),
            (S = []);
          continue;
        }
        v === null &&
          k(
            S.join(`
`)
          ),
          Y === 2 &&
            _(
              S.join(`
`)
            ),
          C.push(V);
        continue;
      }
      S.push(x);
    }
    return (
      v === null
        ? k(
            S.join(`
`)
          )
        : _(
            S.join(`
`)
          ),
      (p.sections = v),
      p
    );
  };
  function n(l, d) {
    return !(
      l.slice(0, d.length) !== d || l.charAt(d.length + 1) === d.slice(-1)
    );
  }
  function r(l) {
    if (
      (e(l) !== "object" && (l = { content: l }),
      typeof l.content != "string" && !c(l.content))
    )
      throw new TypeError("expected a buffer or string");
    return (l.content = l.content.toString()), (l.sections = []), l;
  }
  function i(l, d) {
    return l ? l.slice(d.length).trim() : "";
  }
  function o() {
    return { key: "", data: "", content: "" };
  }
  function a(l) {
    return l;
  }
  function c(l) {
    return l && l.constructor && typeof l.constructor.isBuffer == "function"
      ? l.constructor.isBuffer(l)
      : !1;
  }
  return sectionMatter;
}
var engines = { exports: {} },
  jsYaml$1 = {},
  loader = {},
  common = {},
  hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function e(a) {
    return typeof a > "u" || a === null;
  }
  function t(a) {
    return typeof a == "object" && a !== null;
  }
  function n(a) {
    return Array.isArray(a) ? a : e(a) ? [] : [a];
  }
  function r(a, c) {
    var l, d, p, m;
    if (c)
      for (m = Object.keys(c), l = 0, d = m.length; l < d; l += 1)
        (p = m[l]), (a[p] = c[p]);
    return a;
  }
  function i(a, c) {
    var l = "",
      d;
    for (d = 0; d < c; d += 1) l += a;
    return l;
  }
  function o(a) {
    return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
  }
  return (
    (common.isNothing = e),
    (common.isObject = t),
    (common.toArray = n),
    (common.repeat = i),
    (common.isNegativeZero = o),
    (common.extend = r),
    common
  );
}
var exception, hasRequiredException;
function requireException() {
  if (hasRequiredException) return exception;
  hasRequiredException = 1;
  function e(t, n) {
    Error.call(this),
      (this.name = "YAMLException"),
      (this.reason = t),
      (this.mark = n),
      (this.message =
        (this.reason || "(unknown reason)") +
        (this.mark ? " " + this.mark.toString() : "")),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack || "");
  }
  return (
    (e.prototype = Object.create(Error.prototype)),
    (e.prototype.constructor = e),
    (e.prototype.toString = function (n) {
      var r = this.name + ": ";
      return (
        (r += this.reason || "(unknown reason)"),
        !n && this.mark && (r += " " + this.mark.toString()),
        r
      );
    }),
    (exception = e),
    exception
  );
}
var mark$1, hasRequiredMark;
function requireMark() {
  if (hasRequiredMark) return mark$1;
  hasRequiredMark = 1;
  var e = requireCommon();
  function t(n, r, i, o, a) {
    (this.name = n),
      (this.buffer = r),
      (this.position = i),
      (this.line = o),
      (this.column = a);
  }
  return (
    (t.prototype.getSnippet = function (r, i) {
      var o, a, c, l, d;
      if (!this.buffer) return null;
      for (
        r = r || 4, i = i || 75, o = "", a = this.position;
        a > 0 &&
        `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(a - 1)) === -1;

      )
        if (((a -= 1), this.position - a > i / 2 - 1)) {
          (o = " ... "), (a += 5);
          break;
        }
      for (
        c = "", l = this.position;
        l < this.buffer.length &&
        `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(l)) === -1;

      )
        if (((l += 1), l - this.position > i / 2 - 1)) {
          (c = " ... "), (l -= 5);
          break;
        }
      return (
        (d = this.buffer.slice(a, l)),
        e.repeat(" ", r) +
          o +
          d +
          c +
          `
` +
          e.repeat(" ", r + this.position - a + o.length) +
          "^"
      );
    }),
    (t.prototype.toString = function (r) {
      var i,
        o = "";
      return (
        this.name && (o += 'in "' + this.name + '" '),
        (o += "at line " + (this.line + 1) + ", column " + (this.column + 1)),
        r ||
          ((i = this.getSnippet()),
          i &&
            (o +=
              `:
` + i)),
        o
      );
    }),
    (mark$1 = t),
    mark$1
  );
}
var type, hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  var e = requireException(),
    t = [
      "kind",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "defaultStyle",
      "styleAliases",
    ],
    n = ["scalar", "sequence", "mapping"];
  function r(o) {
    var a = {};
    return (
      o !== null &&
        Object.keys(o).forEach(function (c) {
          o[c].forEach(function (l) {
            a[String(l)] = c;
          });
        }),
      a
    );
  }
  function i(o, a) {
    if (
      ((a = a || {}),
      Object.keys(a).forEach(function (c) {
        if (t.indexOf(c) === -1)
          throw new e(
            'Unknown option "' +
              c +
              '" is met in definition of "' +
              o +
              '" YAML type.'
          );
      }),
      (this.tag = o),
      (this.kind = a.kind || null),
      (this.resolve =
        a.resolve ||
        function () {
          return !0;
        }),
      (this.construct =
        a.construct ||
        function (c) {
          return c;
        }),
      (this.instanceOf = a.instanceOf || null),
      (this.predicate = a.predicate || null),
      (this.represent = a.represent || null),
      (this.defaultStyle = a.defaultStyle || null),
      (this.styleAliases = r(a.styleAliases || null)),
      n.indexOf(this.kind) === -1)
    )
      throw new e(
        'Unknown kind "' +
          this.kind +
          '" is specified for "' +
          o +
          '" YAML type.'
      );
  }
  return (type = i), type;
}
var schema, hasRequiredSchema;
function requireSchema() {
  if (hasRequiredSchema) return schema;
  hasRequiredSchema = 1;
  var e = requireCommon(),
    t = requireException(),
    n = requireType();
  function r(a, c, l) {
    var d = [];
    return (
      a.include.forEach(function (p) {
        l = r(p, c, l);
      }),
      a[c].forEach(function (p) {
        l.forEach(function (m, h) {
          m.tag === p.tag && m.kind === p.kind && d.push(h);
        }),
          l.push(p);
      }),
      l.filter(function (p, m) {
        return d.indexOf(m) === -1;
      })
    );
  }
  function i() {
    var a = { scalar: {}, sequence: {}, mapping: {}, fallback: {} },
      c,
      l;
    function d(p) {
      a[p.kind][p.tag] = a.fallback[p.tag] = p;
    }
    for (c = 0, l = arguments.length; c < l; c += 1) arguments[c].forEach(d);
    return a;
  }
  function o(a) {
    (this.include = a.include || []),
      (this.implicit = a.implicit || []),
      (this.explicit = a.explicit || []),
      this.implicit.forEach(function (c) {
        if (c.loadKind && c.loadKind !== "scalar")
          throw new t(
            "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
          );
      }),
      (this.compiledImplicit = r(this, "implicit", [])),
      (this.compiledExplicit = r(this, "explicit", [])),
      (this.compiledTypeMap = i(this.compiledImplicit, this.compiledExplicit));
  }
  return (
    (o.DEFAULT = null),
    (o.create = function () {
      var c, l;
      switch (arguments.length) {
        case 1:
          (c = o.DEFAULT), (l = arguments[0]);
          break;
        case 2:
          (c = arguments[0]), (l = arguments[1]);
          break;
        default:
          throw new t("Wrong number of arguments for Schema.create function");
      }
      if (
        ((c = e.toArray(c)),
        (l = e.toArray(l)),
        !c.every(function (d) {
          return d instanceof o;
        }))
      )
        throw new t(
          "Specified list of super schemas (or a single Schema object) contains a non-Schema object."
        );
      if (
        !l.every(function (d) {
          return d instanceof n;
        })
      )
        throw new t(
          "Specified list of YAML types (or a single Type object) contains a non-Type object."
        );
      return new o({ include: c, explicit: l });
    }),
    (schema = o),
    schema
  );
}
var str, hasRequiredStr;
function requireStr() {
  if (hasRequiredStr) return str;
  hasRequiredStr = 1;
  var e = requireType();
  return (
    (str = new e("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function (t) {
        return t !== null ? t : "";
      },
    })),
    str
  );
}
var seq, hasRequiredSeq;
function requireSeq() {
  if (hasRequiredSeq) return seq;
  hasRequiredSeq = 1;
  var e = requireType();
  return (
    (seq = new e("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function (t) {
        return t !== null ? t : [];
      },
    })),
    seq
  );
}
var map, hasRequiredMap;
function requireMap() {
  if (hasRequiredMap) return map;
  hasRequiredMap = 1;
  var e = requireType();
  return (
    (map = new e("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function (t) {
        return t !== null ? t : {};
      },
    })),
    map
  );
}
var failsafe, hasRequiredFailsafe;
function requireFailsafe() {
  if (hasRequiredFailsafe) return failsafe;
  hasRequiredFailsafe = 1;
  var e = requireSchema();
  return (
    (failsafe = new e({
      explicit: [requireStr(), requireSeq(), requireMap()],
    })),
    failsafe
  );
}
var _null, hasRequired_null;
function require_null() {
  if (hasRequired_null) return _null;
  hasRequired_null = 1;
  var e = requireType();
  function t(i) {
    if (i === null) return !0;
    var o = i.length;
    return (
      (o === 1 && i === "~") ||
      (o === 4 && (i === "null" || i === "Null" || i === "NULL"))
    );
  }
  function n() {
    return null;
  }
  function r(i) {
    return i === null;
  }
  return (
    (_null = new e("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: t,
      construct: n,
      predicate: r,
      represent: {
        canonical: function () {
          return "~";
        },
        lowercase: function () {
          return "null";
        },
        uppercase: function () {
          return "NULL";
        },
        camelcase: function () {
          return "Null";
        },
      },
      defaultStyle: "lowercase",
    })),
    _null
  );
}
var bool, hasRequiredBool;
function requireBool() {
  if (hasRequiredBool) return bool;
  hasRequiredBool = 1;
  var e = requireType();
  function t(i) {
    if (i === null) return !1;
    var o = i.length;
    return (
      (o === 4 && (i === "true" || i === "True" || i === "TRUE")) ||
      (o === 5 && (i === "false" || i === "False" || i === "FALSE"))
    );
  }
  function n(i) {
    return i === "true" || i === "True" || i === "TRUE";
  }
  function r(i) {
    return Object.prototype.toString.call(i) === "[object Boolean]";
  }
  return (
    (bool = new e("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: t,
      construct: n,
      predicate: r,
      represent: {
        lowercase: function (i) {
          return i ? "true" : "false";
        },
        uppercase: function (i) {
          return i ? "TRUE" : "FALSE";
        },
        camelcase: function (i) {
          return i ? "True" : "False";
        },
      },
      defaultStyle: "lowercase",
    })),
    bool
  );
}
var int, hasRequiredInt;
function requireInt() {
  if (hasRequiredInt) return int;
  hasRequiredInt = 1;
  var e = requireCommon(),
    t = requireType();
  function n(l) {
    return (
      (48 <= l && l <= 57) || (65 <= l && l <= 70) || (97 <= l && l <= 102)
    );
  }
  function r(l) {
    return 48 <= l && l <= 55;
  }
  function i(l) {
    return 48 <= l && l <= 57;
  }
  function o(l) {
    if (l === null) return !1;
    var d = l.length,
      p = 0,
      m = !1,
      h;
    if (!d) return !1;
    if (((h = l[p]), (h === "-" || h === "+") && (h = l[++p]), h === "0")) {
      if (p + 1 === d) return !0;
      if (((h = l[++p]), h === "b")) {
        for (p++; p < d; p++)
          if (((h = l[p]), h !== "_")) {
            if (h !== "0" && h !== "1") return !1;
            m = !0;
          }
        return m && h !== "_";
      }
      if (h === "x") {
        for (p++; p < d; p++)
          if (((h = l[p]), h !== "_")) {
            if (!n(l.charCodeAt(p))) return !1;
            m = !0;
          }
        return m && h !== "_";
      }
      for (; p < d; p++)
        if (((h = l[p]), h !== "_")) {
          if (!r(l.charCodeAt(p))) return !1;
          m = !0;
        }
      return m && h !== "_";
    }
    if (h === "_") return !1;
    for (; p < d; p++)
      if (((h = l[p]), h !== "_")) {
        if (h === ":") break;
        if (!i(l.charCodeAt(p))) return !1;
        m = !0;
      }
    return !m || h === "_"
      ? !1
      : h !== ":"
      ? !0
      : /^(:[0-5]?[0-9])+$/.test(l.slice(p));
  }
  function a(l) {
    var d = l,
      p = 1,
      m,
      h,
      f = [];
    return (
      d.indexOf("_") !== -1 && (d = d.replace(/_/g, "")),
      (m = d[0]),
      (m === "-" || m === "+") &&
        (m === "-" && (p = -1), (d = d.slice(1)), (m = d[0])),
      d === "0"
        ? 0
        : m === "0"
        ? d[1] === "b"
          ? p * parseInt(d.slice(2), 2)
          : d[1] === "x"
          ? p * parseInt(d, 16)
          : p * parseInt(d, 8)
        : d.indexOf(":") !== -1
        ? (d.split(":").forEach(function (b) {
            f.unshift(parseInt(b, 10));
          }),
          (d = 0),
          (h = 1),
          f.forEach(function (b) {
            (d += b * h), (h *= 60);
          }),
          p * d)
        : p * parseInt(d, 10)
    );
  }
  function c(l) {
    return (
      Object.prototype.toString.call(l) === "[object Number]" &&
      l % 1 === 0 &&
      !e.isNegativeZero(l)
    );
  }
  return (
    (int = new t("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: o,
      construct: a,
      predicate: c,
      represent: {
        binary: function (l) {
          return l >= 0 ? "0b" + l.toString(2) : "-0b" + l.toString(2).slice(1);
        },
        octal: function (l) {
          return l >= 0 ? "0" + l.toString(8) : "-0" + l.toString(8).slice(1);
        },
        decimal: function (l) {
          return l.toString(10);
        },
        hexadecimal: function (l) {
          return l >= 0
            ? "0x" + l.toString(16).toUpperCase()
            : "-0x" + l.toString(16).toUpperCase().slice(1);
        },
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"],
      },
    })),
    int
  );
}
var float, hasRequiredFloat;
function requireFloat() {
  if (hasRequiredFloat) return float;
  hasRequiredFloat = 1;
  var e = requireCommon(),
    t = requireType(),
    n = new RegExp(
      "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
  function r(l) {
    return !(l === null || !n.test(l) || l[l.length - 1] === "_");
  }
  function i(l) {
    var d, p, m, h;
    return (
      (d = l.replace(/_/g, "").toLowerCase()),
      (p = d[0] === "-" ? -1 : 1),
      (h = []),
      "+-".indexOf(d[0]) >= 0 && (d = d.slice(1)),
      d === ".inf"
        ? p === 1
          ? Number.POSITIVE_INFINITY
          : Number.NEGATIVE_INFINITY
        : d === ".nan"
        ? NaN
        : d.indexOf(":") >= 0
        ? (d.split(":").forEach(function (f) {
            h.unshift(parseFloat(f, 10));
          }),
          (d = 0),
          (m = 1),
          h.forEach(function (f) {
            (d += f * m), (m *= 60);
          }),
          p * d)
        : p * parseFloat(d, 10)
    );
  }
  var o = /^[-+]?[0-9]+e/;
  function a(l, d) {
    var p;
    if (isNaN(l))
      switch (d) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === l)
      switch (d) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === l)
      switch (d) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (e.isNegativeZero(l)) return "-0.0";
    return (p = l.toString(10)), o.test(p) ? p.replace("e", ".e") : p;
  }
  function c(l) {
    return (
      Object.prototype.toString.call(l) === "[object Number]" &&
      (l % 1 !== 0 || e.isNegativeZero(l))
    );
  }
  return (
    (float = new t("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: r,
      construct: i,
      predicate: c,
      represent: a,
      defaultStyle: "lowercase",
    })),
    float
  );
}
var json, hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json;
  hasRequiredJson = 1;
  var e = requireSchema();
  return (
    (json = new e({
      include: [requireFailsafe()],
      implicit: [require_null(), requireBool(), requireInt(), requireFloat()],
    })),
    json
  );
}
var core, hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  var e = requireSchema();
  return (core = new e({ include: [requireJson()] })), core;
}
var timestamp, hasRequiredTimestamp;
function requireTimestamp() {
  if (hasRequiredTimestamp) return timestamp;
  hasRequiredTimestamp = 1;
  var e = requireType(),
    t = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
    n = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
  function r(a) {
    return a === null ? !1 : t.exec(a) !== null || n.exec(a) !== null;
  }
  function i(a) {
    var c,
      l,
      d,
      p,
      m,
      h,
      f,
      b = 0,
      v = null,
      j,
      S,
      C;
    if (((c = t.exec(a)), c === null && (c = n.exec(a)), c === null))
      throw new Error("Date resolve error");
    if (((l = +c[1]), (d = +c[2] - 1), (p = +c[3]), !c[4]))
      return new Date(Date.UTC(l, d, p));
    if (((m = +c[4]), (h = +c[5]), (f = +c[6]), c[7])) {
      for (b = c[7].slice(0, 3); b.length < 3; ) b += "0";
      b = +b;
    }
    return (
      c[9] &&
        ((j = +c[10]),
        (S = +(c[11] || 0)),
        (v = (j * 60 + S) * 6e4),
        c[9] === "-" && (v = -v)),
      (C = new Date(Date.UTC(l, d, p, m, h, f, b))),
      v && C.setTime(C.getTime() - v),
      C
    );
  }
  function o(a) {
    return a.toISOString();
  }
  return (
    (timestamp = new e("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: r,
      construct: i,
      instanceOf: Date,
      represent: o,
    })),
    timestamp
  );
}
var merge$1, hasRequiredMerge;
function requireMerge() {
  if (hasRequiredMerge) return merge$1;
  hasRequiredMerge = 1;
  var e = requireType();
  function t(n) {
    return n === "<<" || n === null;
  }
  return (
    (merge$1 = new e("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: t,
    })),
    merge$1
  );
}
var binary, hasRequiredBinary;
function requireBinary() {
  if (hasRequiredBinary) return binary;
  hasRequiredBinary = 1;
  var e;
  try {
    var t = commonjsRequire;
    e = t("buffer").Buffer;
  } catch {}
  var n = requireType(),
    r = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function i(l) {
    if (l === null) return !1;
    var d,
      p,
      m = 0,
      h = l.length,
      f = r;
    for (p = 0; p < h; p++)
      if (((d = f.indexOf(l.charAt(p))), !(d > 64))) {
        if (d < 0) return !1;
        m += 6;
      }
    return m % 8 === 0;
  }
  function o(l) {
    var d,
      p,
      m = l.replace(/[\r\n=]/g, ""),
      h = m.length,
      f = r,
      b = 0,
      v = [];
    for (d = 0; d < h; d++)
      d % 4 === 0 &&
        d &&
        (v.push((b >> 16) & 255), v.push((b >> 8) & 255), v.push(b & 255)),
        (b = (b << 6) | f.indexOf(m.charAt(d)));
    return (
      (p = (h % 4) * 6),
      p === 0
        ? (v.push((b >> 16) & 255), v.push((b >> 8) & 255), v.push(b & 255))
        : p === 18
        ? (v.push((b >> 10) & 255), v.push((b >> 2) & 255))
        : p === 12 && v.push((b >> 4) & 255),
      e ? (e.from ? e.from(v) : new e(v)) : v
    );
  }
  function a(l) {
    var d = "",
      p = 0,
      m,
      h,
      f = l.length,
      b = r;
    for (m = 0; m < f; m++)
      m % 3 === 0 &&
        m &&
        ((d += b[(p >> 18) & 63]),
        (d += b[(p >> 12) & 63]),
        (d += b[(p >> 6) & 63]),
        (d += b[p & 63])),
        (p = (p << 8) + l[m]);
    return (
      (h = f % 3),
      h === 0
        ? ((d += b[(p >> 18) & 63]),
          (d += b[(p >> 12) & 63]),
          (d += b[(p >> 6) & 63]),
          (d += b[p & 63]))
        : h === 2
        ? ((d += b[(p >> 10) & 63]),
          (d += b[(p >> 4) & 63]),
          (d += b[(p << 2) & 63]),
          (d += b[64]))
        : h === 1 &&
          ((d += b[(p >> 2) & 63]),
          (d += b[(p << 4) & 63]),
          (d += b[64]),
          (d += b[64])),
      d
    );
  }
  function c(l) {
    return e && e.isBuffer(l);
  }
  return (
    (binary = new n("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: i,
      construct: o,
      predicate: c,
      represent: a,
    })),
    binary
  );
}
var omap, hasRequiredOmap;
function requireOmap() {
  if (hasRequiredOmap) return omap;
  hasRequiredOmap = 1;
  var e = requireType(),
    t = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString;
  function r(o) {
    if (o === null) return !0;
    var a = [],
      c,
      l,
      d,
      p,
      m,
      h = o;
    for (c = 0, l = h.length; c < l; c += 1) {
      if (((d = h[c]), (m = !1), n.call(d) !== "[object Object]")) return !1;
      for (p in d)
        if (t.call(d, p))
          if (!m) m = !0;
          else return !1;
      if (!m) return !1;
      if (a.indexOf(p) === -1) a.push(p);
      else return !1;
    }
    return !0;
  }
  function i(o) {
    return o !== null ? o : [];
  }
  return (
    (omap = new e("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: r,
      construct: i,
    })),
    omap
  );
}
var pairs, hasRequiredPairs;
function requirePairs() {
  if (hasRequiredPairs) return pairs;
  hasRequiredPairs = 1;
  var e = requireType(),
    t = Object.prototype.toString;
  function n(i) {
    if (i === null) return !0;
    var o,
      a,
      c,
      l,
      d,
      p = i;
    for (d = new Array(p.length), o = 0, a = p.length; o < a; o += 1) {
      if (
        ((c = p[o]),
        t.call(c) !== "[object Object]" ||
          ((l = Object.keys(c)), l.length !== 1))
      )
        return !1;
      d[o] = [l[0], c[l[0]]];
    }
    return !0;
  }
  function r(i) {
    if (i === null) return [];
    var o,
      a,
      c,
      l,
      d,
      p = i;
    for (d = new Array(p.length), o = 0, a = p.length; o < a; o += 1)
      (c = p[o]), (l = Object.keys(c)), (d[o] = [l[0], c[l[0]]]);
    return d;
  }
  return (
    (pairs = new e("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: n,
      construct: r,
    })),
    pairs
  );
}
var set, hasRequiredSet;
function requireSet() {
  if (hasRequiredSet) return set;
  hasRequiredSet = 1;
  var e = requireType(),
    t = Object.prototype.hasOwnProperty;
  function n(i) {
    if (i === null) return !0;
    var o,
      a = i;
    for (o in a) if (t.call(a, o) && a[o] !== null) return !1;
    return !0;
  }
  function r(i) {
    return i !== null ? i : {};
  }
  return (
    (set = new e("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: n,
      construct: r,
    })),
    set
  );
}
var default_safe, hasRequiredDefault_safe;
function requireDefault_safe() {
  if (hasRequiredDefault_safe) return default_safe;
  hasRequiredDefault_safe = 1;
  var e = requireSchema();
  return (
    (default_safe = new e({
      include: [requireCore()],
      implicit: [requireTimestamp(), requireMerge()],
      explicit: [requireBinary(), requireOmap(), requirePairs(), requireSet()],
    })),
    default_safe
  );
}
var _undefined, hasRequired_undefined;
function require_undefined() {
  if (hasRequired_undefined) return _undefined;
  hasRequired_undefined = 1;
  var e = requireType();
  function t() {
    return !0;
  }
  function n() {}
  function r() {
    return "";
  }
  function i(o) {
    return typeof o > "u";
  }
  return (
    (_undefined = new e("tag:yaml.org,2002:js/undefined", {
      kind: "scalar",
      resolve: t,
      construct: n,
      predicate: i,
      represent: r,
    })),
    _undefined
  );
}
var regexp, hasRequiredRegexp;
function requireRegexp() {
  if (hasRequiredRegexp) return regexp;
  hasRequiredRegexp = 1;
  var e = requireType();
  function t(o) {
    if (o === null || o.length === 0) return !1;
    var a = o,
      c = /\/([gim]*)$/.exec(o),
      l = "";
    return !(
      a[0] === "/" &&
      (c && (l = c[1]), l.length > 3 || a[a.length - l.length - 1] !== "/")
    );
  }
  function n(o) {
    var a = o,
      c = /\/([gim]*)$/.exec(o),
      l = "";
    return (
      a[0] === "/" &&
        (c && (l = c[1]), (a = a.slice(1, a.length - l.length - 1))),
      new RegExp(a, l)
    );
  }
  function r(o) {
    var a = "/" + o.source + "/";
    return (
      o.global && (a += "g"),
      o.multiline && (a += "m"),
      o.ignoreCase && (a += "i"),
      a
    );
  }
  function i(o) {
    return Object.prototype.toString.call(o) === "[object RegExp]";
  }
  return (
    (regexp = new e("tag:yaml.org,2002:js/regexp", {
      kind: "scalar",
      resolve: t,
      construct: n,
      predicate: i,
      represent: r,
    })),
    regexp
  );
}
var _function, hasRequired_function;
function require_function() {
  if (hasRequired_function) return _function;
  hasRequired_function = 1;
  var e;
  try {
    var t = commonjsRequire;
    e = t("esprima");
  } catch {
    typeof window < "u" && (e = window.esprima);
  }
  var n = requireType();
  function r(c) {
    if (c === null) return !1;
    try {
      var l = "(" + c + ")",
        d = e.parse(l, { range: !0 });
      return !(
        d.type !== "Program" ||
        d.body.length !== 1 ||
        d.body[0].type !== "ExpressionStatement" ||
        (d.body[0].expression.type !== "ArrowFunctionExpression" &&
          d.body[0].expression.type !== "FunctionExpression")
      );
    } catch {
      return !1;
    }
  }
  function i(c) {
    var l = "(" + c + ")",
      d = e.parse(l, { range: !0 }),
      p = [],
      m;
    if (
      d.type !== "Program" ||
      d.body.length !== 1 ||
      d.body[0].type !== "ExpressionStatement" ||
      (d.body[0].expression.type !== "ArrowFunctionExpression" &&
        d.body[0].expression.type !== "FunctionExpression")
    )
      throw new Error("Failed to resolve function");
    return (
      d.body[0].expression.params.forEach(function (h) {
        p.push(h.name);
      }),
      (m = d.body[0].expression.body.range),
      d.body[0].expression.body.type === "BlockStatement"
        ? new Function(p, l.slice(m[0] + 1, m[1] - 1))
        : new Function(p, "return " + l.slice(m[0], m[1]))
    );
  }
  function o(c) {
    return c.toString();
  }
  function a(c) {
    return Object.prototype.toString.call(c) === "[object Function]";
  }
  return (
    (_function = new n("tag:yaml.org,2002:js/function", {
      kind: "scalar",
      resolve: r,
      construct: i,
      predicate: a,
      represent: o,
    })),
    _function
  );
}
var default_full, hasRequiredDefault_full;
function requireDefault_full() {
  if (hasRequiredDefault_full) return default_full;
  hasRequiredDefault_full = 1;
  var e = requireSchema();
  return (
    (default_full = e.DEFAULT =
      new e({
        include: [requireDefault_safe()],
        explicit: [require_undefined(), requireRegexp(), require_function()],
      })),
    default_full
  );
}
var hasRequiredLoader;
function requireLoader() {
  if (hasRequiredLoader) return loader;
  hasRequiredLoader = 1;
  var e = requireCommon(),
    t = requireException(),
    n = requireMark(),
    r = requireDefault_safe(),
    i = requireDefault_full(),
    o = Object.prototype.hasOwnProperty,
    a = 1,
    c = 2,
    l = 3,
    d = 4,
    p = 1,
    m = 2,
    h = 3,
    f =
      /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    b = /[\x85\u2028\u2029]/,
    v = /[,\[\]\{\}]/,
    j = /^(?:!|!!|![a-z\-]+!)$/i,
    S =
      /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function C(u) {
    return Object.prototype.toString.call(u);
  }
  function k(u) {
    return u === 10 || u === 13;
  }
  function _(u) {
    return u === 9 || u === 32;
  }
  function P(u) {
    return u === 9 || u === 32 || u === 10 || u === 13;
  }
  function x(u) {
    return u === 44 || u === 91 || u === 93 || u === 123 || u === 125;
  }
  function Y(u) {
    var I;
    return 48 <= u && u <= 57
      ? u - 48
      : ((I = u | 32), 97 <= I && I <= 102 ? I - 97 + 10 : -1);
  }
  function V(u) {
    return u === 120 ? 2 : u === 117 ? 4 : u === 85 ? 8 : 0;
  }
  function H(u) {
    return 48 <= u && u <= 57 ? u - 48 : -1;
  }
  function K(u) {
    return u === 48
      ? "\0"
      : u === 97
      ? "\x07"
      : u === 98
      ? "\b"
      : u === 116 || u === 9
      ? "	"
      : u === 110
      ? `
`
      : u === 118
      ? "\v"
      : u === 102
      ? "\f"
      : u === 114
      ? "\r"
      : u === 101
      ? "\x1B"
      : u === 32
      ? " "
      : u === 34
      ? '"'
      : u === 47
      ? "/"
      : u === 92
      ? "\\"
      : u === 78
      ? ""
      : u === 95
      ? " "
      : u === 76
      ? "\u2028"
      : u === 80
      ? "\u2029"
      : "";
  }
  function W(u) {
    return u <= 65535
      ? String.fromCharCode(u)
      : String.fromCharCode(
          ((u - 65536) >> 10) + 55296,
          ((u - 65536) & 1023) + 56320
        );
  }
  for (var L = new Array(256), B = new Array(256), M = 0; M < 256; M++)
    (L[M] = K(M) ? 1 : 0), (B[M] = K(M));
  function Q(u, I) {
    (this.input = u),
      (this.filename = I.filename || null),
      (this.schema = I.schema || i),
      (this.onWarning = I.onWarning || null),
      (this.legacy = I.legacy || !1),
      (this.json = I.json || !1),
      (this.listener = I.listener || null),
      (this.implicitTypes = this.schema.compiledImplicit),
      (this.typeMap = this.schema.compiledTypeMap),
      (this.length = u.length),
      (this.position = 0),
      (this.line = 0),
      (this.lineStart = 0),
      (this.lineIndent = 0),
      (this.documents = []);
  }
  function ye(u, I) {
    return new t(
      I,
      new n(u.filename, u.input, u.position, u.line, u.position - u.lineStart)
    );
  }
  function z(u, I) {
    throw ye(u, I);
  }
  function de(u, I) {
    u.onWarning && u.onWarning.call(null, ye(u, I));
  }
  var te = {
    YAML: function (I, E, R) {
      var A, D, g;
      I.version !== null && z(I, "duplication of %YAML directive"),
        R.length !== 1 && z(I, "YAML directive accepts exactly one argument"),
        (A = /^([0-9]+)\.([0-9]+)$/.exec(R[0])),
        A === null && z(I, "ill-formed argument of the YAML directive"),
        (D = parseInt(A[1], 10)),
        (g = parseInt(A[2], 10)),
        D !== 1 && z(I, "unacceptable YAML version of the document"),
        (I.version = R[0]),
        (I.checkLineBreaks = g < 2),
        g !== 1 && g !== 2 && de(I, "unsupported YAML version of the document");
    },
    TAG: function (I, E, R) {
      var A, D;
      R.length !== 2 && z(I, "TAG directive accepts exactly two arguments"),
        (A = R[0]),
        (D = R[1]),
        j.test(A) ||
          z(I, "ill-formed tag handle (first argument) of the TAG directive"),
        o.call(I.tagMap, A) &&
          z(
            I,
            'there is a previously declared suffix for "' + A + '" tag handle'
          ),
        S.test(D) ||
          z(I, "ill-formed tag prefix (second argument) of the TAG directive"),
        (I.tagMap[A] = D);
    },
  };
  function w(u, I, E, R) {
    var A, D, g, T;
    if (I < E) {
      if (((T = u.input.slice(I, E)), R))
        for (A = 0, D = T.length; A < D; A += 1)
          (g = T.charCodeAt(A)),
            g === 9 ||
              (32 <= g && g <= 1114111) ||
              z(u, "expected valid JSON character");
      else f.test(T) && z(u, "the stream contains non-printable characters");
      u.result += T;
    }
  }
  function he(u, I, E, R) {
    var A, D, g, T;
    for (
      e.isObject(E) ||
        z(
          u,
          "cannot merge mappings; the provided source object is unacceptable"
        ),
        A = Object.keys(E),
        g = 0,
        T = A.length;
      g < T;
      g += 1
    )
      (D = A[g]), o.call(I, D) || ((I[D] = E[D]), (R[D] = !0));
  }
  function Ee(u, I, E, R, A, D, g, T) {
    var N, q;
    if (Array.isArray(A))
      for (
        A = Array.prototype.slice.call(A), N = 0, q = A.length;
        N < q;
        N += 1
      )
        Array.isArray(A[N]) &&
          z(u, "nested arrays are not supported inside keys"),
          typeof A == "object" &&
            C(A[N]) === "[object Object]" &&
            (A[N] = "[object Object]");
    if (
      (typeof A == "object" &&
        C(A) === "[object Object]" &&
        (A = "[object Object]"),
      (A = String(A)),
      I === null && (I = {}),
      R === "tag:yaml.org,2002:merge")
    )
      if (Array.isArray(D))
        for (N = 0, q = D.length; N < q; N += 1) he(u, I, D[N], E);
      else he(u, I, D, E);
    else
      !u.json &&
        !o.call(E, A) &&
        o.call(I, A) &&
        ((u.line = g || u.line),
        (u.position = T || u.position),
        z(u, "duplicated mapping key")),
        (I[A] = D),
        delete E[A];
    return I;
  }
  function y(u) {
    var I;
    (I = u.input.charCodeAt(u.position)),
      I === 10
        ? u.position++
        : I === 13
        ? (u.position++, u.input.charCodeAt(u.position) === 10 && u.position++)
        : z(u, "a line break is expected"),
      (u.line += 1),
      (u.lineStart = u.position);
  }
  function ee(u, I, E) {
    for (var R = 0, A = u.input.charCodeAt(u.position); A !== 0; ) {
      for (; _(A); ) A = u.input.charCodeAt(++u.position);
      if (I && A === 35)
        do A = u.input.charCodeAt(++u.position);
        while (A !== 10 && A !== 13 && A !== 0);
      if (k(A))
        for (
          y(u), A = u.input.charCodeAt(u.position), R++, u.lineIndent = 0;
          A === 32;

        )
          u.lineIndent++, (A = u.input.charCodeAt(++u.position));
      else break;
    }
    return (
      E !== -1 && R !== 0 && u.lineIndent < E && de(u, "deficient indentation"),
      R
    );
  }
  function ve(u) {
    var I = u.position,
      E;
    return (
      (E = u.input.charCodeAt(I)),
      !!(
        (E === 45 || E === 46) &&
        E === u.input.charCodeAt(I + 1) &&
        E === u.input.charCodeAt(I + 2) &&
        ((I += 3), (E = u.input.charCodeAt(I)), E === 0 || P(E))
      )
    );
  }
  function le(u, I) {
    I === 1
      ? (u.result += " ")
      : I > 1 &&
        (u.result += e.repeat(
          `
`,
          I - 1
        ));
  }
  function De(u, I, E) {
    var R,
      A,
      D,
      g,
      T,
      N,
      q,
      U,
      O = u.kind,
      $ = u.result,
      F;
    if (
      ((F = u.input.charCodeAt(u.position)),
      P(F) ||
        x(F) ||
        F === 35 ||
        F === 38 ||
        F === 42 ||
        F === 33 ||
        F === 124 ||
        F === 62 ||
        F === 39 ||
        F === 34 ||
        F === 37 ||
        F === 64 ||
        F === 96 ||
        ((F === 63 || F === 45) &&
          ((A = u.input.charCodeAt(u.position + 1)), P(A) || (E && x(A)))))
    )
      return !1;
    for (
      u.kind = "scalar", u.result = "", D = g = u.position, T = !1;
      F !== 0;

    ) {
      if (F === 58) {
        if (((A = u.input.charCodeAt(u.position + 1)), P(A) || (E && x(A))))
          break;
      } else if (F === 35) {
        if (((R = u.input.charCodeAt(u.position - 1)), P(R))) break;
      } else {
        if ((u.position === u.lineStart && ve(u)) || (E && x(F))) break;
        if (k(F))
          if (
            ((N = u.line),
            (q = u.lineStart),
            (U = u.lineIndent),
            ee(u, !1, -1),
            u.lineIndent >= I)
          ) {
            (T = !0), (F = u.input.charCodeAt(u.position));
            continue;
          } else {
            (u.position = g),
              (u.line = N),
              (u.lineStart = q),
              (u.lineIndent = U);
            break;
          }
      }
      T && (w(u, D, g, !1), le(u, u.line - N), (D = g = u.position), (T = !1)),
        _(F) || (g = u.position + 1),
        (F = u.input.charCodeAt(++u.position));
    }
    return w(u, D, g, !1), u.result ? !0 : ((u.kind = O), (u.result = $), !1);
  }
  function _e(u, I) {
    var E, R, A;
    if (((E = u.input.charCodeAt(u.position)), E !== 39)) return !1;
    for (
      u.kind = "scalar", u.result = "", u.position++, R = A = u.position;
      (E = u.input.charCodeAt(u.position)) !== 0;

    )
      if (E === 39)
        if (
          (w(u, R, u.position, !0),
          (E = u.input.charCodeAt(++u.position)),
          E === 39)
        )
          (R = u.position), u.position++, (A = u.position);
        else return !0;
      else
        k(E)
          ? (w(u, R, A, !0), le(u, ee(u, !1, I)), (R = A = u.position))
          : u.position === u.lineStart && ve(u)
          ? z(u, "unexpected end of the document within a single quoted scalar")
          : (u.position++, (A = u.position));
    z(u, "unexpected end of the stream within a single quoted scalar");
  }
  function $e(u, I) {
    var E, R, A, D, g, T;
    if (((T = u.input.charCodeAt(u.position)), T !== 34)) return !1;
    for (
      u.kind = "scalar", u.result = "", u.position++, E = R = u.position;
      (T = u.input.charCodeAt(u.position)) !== 0;

    ) {
      if (T === 34) return w(u, E, u.position, !0), u.position++, !0;
      if (T === 92) {
        if (
          (w(u, E, u.position, !0),
          (T = u.input.charCodeAt(++u.position)),
          k(T))
        )
          ee(u, !1, I);
        else if (T < 256 && L[T]) (u.result += B[T]), u.position++;
        else if ((g = V(T)) > 0) {
          for (A = g, D = 0; A > 0; A--)
            (T = u.input.charCodeAt(++u.position)),
              (g = Y(T)) >= 0
                ? (D = (D << 4) + g)
                : z(u, "expected hexadecimal character");
          (u.result += W(D)), u.position++;
        } else z(u, "unknown escape sequence");
        E = R = u.position;
      } else
        k(T)
          ? (w(u, E, R, !0), le(u, ee(u, !1, I)), (E = R = u.position))
          : u.position === u.lineStart && ve(u)
          ? z(u, "unexpected end of the document within a double quoted scalar")
          : (u.position++, (R = u.position));
    }
    z(u, "unexpected end of the stream within a double quoted scalar");
  }
  function X(u, I) {
    var E = !0,
      R,
      A = u.tag,
      D,
      g = u.anchor,
      T,
      N,
      q,
      U,
      O,
      $ = {},
      F,
      G,
      Z,
      ie;
    if (((ie = u.input.charCodeAt(u.position)), ie === 91))
      (N = 93), (O = !1), (D = []);
    else if (ie === 123) (N = 125), (O = !0), (D = {});
    else return !1;
    for (
      u.anchor !== null && (u.anchorMap[u.anchor] = D),
        ie = u.input.charCodeAt(++u.position);
      ie !== 0;

    ) {
      if ((ee(u, !0, I), (ie = u.input.charCodeAt(u.position)), ie === N))
        return (
          u.position++,
          (u.tag = A),
          (u.anchor = g),
          (u.kind = O ? "mapping" : "sequence"),
          (u.result = D),
          !0
        );
      E || z(u, "missed comma between flow collection entries"),
        (G = F = Z = null),
        (q = U = !1),
        ie === 63 &&
          ((T = u.input.charCodeAt(u.position + 1)),
          P(T) && ((q = U = !0), u.position++, ee(u, !0, I))),
        (R = u.line),
        Ge(u, I, a, !1, !0),
        (G = u.tag),
        (F = u.result),
        ee(u, !0, I),
        (ie = u.input.charCodeAt(u.position)),
        (U || u.line === R) &&
          ie === 58 &&
          ((q = !0),
          (ie = u.input.charCodeAt(++u.position)),
          ee(u, !0, I),
          Ge(u, I, a, !1, !0),
          (Z = u.result)),
        O
          ? Ee(u, D, $, G, F, Z)
          : q
          ? D.push(Ee(u, null, $, G, F, Z))
          : D.push(F),
        ee(u, !0, I),
        (ie = u.input.charCodeAt(u.position)),
        ie === 44
          ? ((E = !0), (ie = u.input.charCodeAt(++u.position)))
          : (E = !1);
    }
    z(u, "unexpected end of the stream within a flow collection");
  }
  function Ie(u, I) {
    var E,
      R,
      A = p,
      D = !1,
      g = !1,
      T = I,
      N = 0,
      q = !1,
      U,
      O;
    if (((O = u.input.charCodeAt(u.position)), O === 124)) R = !1;
    else if (O === 62) R = !0;
    else return !1;
    for (u.kind = "scalar", u.result = ""; O !== 0; )
      if (((O = u.input.charCodeAt(++u.position)), O === 43 || O === 45))
        p === A
          ? (A = O === 43 ? h : m)
          : z(u, "repeat of a chomping mode identifier");
      else if ((U = H(O)) >= 0)
        U === 0
          ? z(
              u,
              "bad explicit indentation width of a block scalar; it cannot be less than one"
            )
          : g
          ? z(u, "repeat of an indentation width identifier")
          : ((T = I + U - 1), (g = !0));
      else break;
    if (_(O)) {
      do O = u.input.charCodeAt(++u.position);
      while (_(O));
      if (O === 35)
        do O = u.input.charCodeAt(++u.position);
        while (!k(O) && O !== 0);
    }
    for (; O !== 0; ) {
      for (
        y(u), u.lineIndent = 0, O = u.input.charCodeAt(u.position);
        (!g || u.lineIndent < T) && O === 32;

      )
        u.lineIndent++, (O = u.input.charCodeAt(++u.position));
      if ((!g && u.lineIndent > T && (T = u.lineIndent), k(O))) {
        N++;
        continue;
      }
      if (u.lineIndent < T) {
        A === h
          ? (u.result += e.repeat(
              `
`,
              D ? 1 + N : N
            ))
          : A === p &&
            D &&
            (u.result += `
`);
        break;
      }
      for (
        R
          ? _(O)
            ? ((q = !0),
              (u.result += e.repeat(
                `
`,
                D ? 1 + N : N
              )))
            : q
            ? ((q = !1),
              (u.result += e.repeat(
                `
`,
                N + 1
              )))
            : N === 0
            ? D && (u.result += " ")
            : (u.result += e.repeat(
                `
`,
                N
              ))
          : (u.result += e.repeat(
              `
`,
              D ? 1 + N : N
            )),
          D = !0,
          g = !0,
          N = 0,
          E = u.position;
        !k(O) && O !== 0;

      )
        O = u.input.charCodeAt(++u.position);
      w(u, E, u.position, !1);
    }
    return !0;
  }
  function qe(u, I) {
    var E,
      R = u.tag,
      A = u.anchor,
      D = [],
      g,
      T = !1,
      N;
    for (
      u.anchor !== null && (u.anchorMap[u.anchor] = D),
        N = u.input.charCodeAt(u.position);
      N !== 0 &&
      !(N !== 45 || ((g = u.input.charCodeAt(u.position + 1)), !P(g)));

    ) {
      if (((T = !0), u.position++, ee(u, !0, -1) && u.lineIndent <= I)) {
        D.push(null), (N = u.input.charCodeAt(u.position));
        continue;
      }
      if (
        ((E = u.line),
        Ge(u, I, l, !1, !0),
        D.push(u.result),
        ee(u, !0, -1),
        (N = u.input.charCodeAt(u.position)),
        (u.line === E || u.lineIndent > I) && N !== 0)
      )
        z(u, "bad indentation of a sequence entry");
      else if (u.lineIndent < I) break;
    }
    return T
      ? ((u.tag = R), (u.anchor = A), (u.kind = "sequence"), (u.result = D), !0)
      : !1;
  }
  function Ue(u, I, E) {
    var R,
      A,
      D,
      g,
      T = u.tag,
      N = u.anchor,
      q = {},
      U = {},
      O = null,
      $ = null,
      F = null,
      G = !1,
      Z = !1,
      ie;
    for (
      u.anchor !== null && (u.anchorMap[u.anchor] = q),
        ie = u.input.charCodeAt(u.position);
      ie !== 0;

    ) {
      if (
        ((R = u.input.charCodeAt(u.position + 1)),
        (D = u.line),
        (g = u.position),
        (ie === 63 || ie === 58) && P(R))
      )
        ie === 63
          ? (G && (Ee(u, q, U, O, $, null), (O = $ = F = null)),
            (Z = !0),
            (G = !0),
            (A = !0))
          : G
          ? ((G = !1), (A = !0))
          : z(
              u,
              "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
            ),
          (u.position += 1),
          (ie = R);
      else if (Ge(u, E, c, !1, !0))
        if (u.line === D) {
          for (ie = u.input.charCodeAt(u.position); _(ie); )
            ie = u.input.charCodeAt(++u.position);
          if (ie === 58)
            (ie = u.input.charCodeAt(++u.position)),
              P(ie) ||
                z(
                  u,
                  "a whitespace character is expected after the key-value separator within a block mapping"
                ),
              G && (Ee(u, q, U, O, $, null), (O = $ = F = null)),
              (Z = !0),
              (G = !1),
              (A = !1),
              (O = u.tag),
              ($ = u.result);
          else if (Z)
            z(u, "can not read an implicit mapping pair; a colon is missed");
          else return (u.tag = T), (u.anchor = N), !0;
        } else if (Z)
          z(
            u,
            "can not read a block mapping entry; a multiline key may not be an implicit key"
          );
        else return (u.tag = T), (u.anchor = N), !0;
      else break;
      if (
        ((u.line === D || u.lineIndent > I) &&
          (Ge(u, I, d, !0, A) && (G ? ($ = u.result) : (F = u.result)),
          G || (Ee(u, q, U, O, $, F, D, g), (O = $ = F = null)),
          ee(u, !0, -1),
          (ie = u.input.charCodeAt(u.position))),
        u.lineIndent > I && ie !== 0)
      )
        z(u, "bad indentation of a mapping entry");
      else if (u.lineIndent < I) break;
    }
    return (
      G && Ee(u, q, U, O, $, null),
      Z && ((u.tag = T), (u.anchor = N), (u.kind = "mapping"), (u.result = q)),
      Z
    );
  }
  function Oe(u) {
    var I,
      E = !1,
      R = !1,
      A,
      D,
      g;
    if (((g = u.input.charCodeAt(u.position)), g !== 33)) return !1;
    if (
      (u.tag !== null && z(u, "duplication of a tag property"),
      (g = u.input.charCodeAt(++u.position)),
      g === 60
        ? ((E = !0), (g = u.input.charCodeAt(++u.position)))
        : g === 33
        ? ((R = !0), (A = "!!"), (g = u.input.charCodeAt(++u.position)))
        : (A = "!"),
      (I = u.position),
      E)
    ) {
      do g = u.input.charCodeAt(++u.position);
      while (g !== 0 && g !== 62);
      u.position < u.length
        ? ((D = u.input.slice(I, u.position)),
          (g = u.input.charCodeAt(++u.position)))
        : z(u, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; g !== 0 && !P(g); )
        g === 33 &&
          (R
            ? z(u, "tag suffix cannot contain exclamation marks")
            : ((A = u.input.slice(I - 1, u.position + 1)),
              j.test(A) ||
                z(u, "named tag handle cannot contain such characters"),
              (R = !0),
              (I = u.position + 1))),
          (g = u.input.charCodeAt(++u.position));
      (D = u.input.slice(I, u.position)),
        v.test(D) &&
          z(u, "tag suffix cannot contain flow indicator characters");
    }
    return (
      D && !S.test(D) && z(u, "tag name cannot contain such characters: " + D),
      E
        ? (u.tag = D)
        : o.call(u.tagMap, A)
        ? (u.tag = u.tagMap[A] + D)
        : A === "!"
        ? (u.tag = "!" + D)
        : A === "!!"
        ? (u.tag = "tag:yaml.org,2002:" + D)
        : z(u, 'undeclared tag handle "' + A + '"'),
      !0
    );
  }
  function Qe(u) {
    var I, E;
    if (((E = u.input.charCodeAt(u.position)), E !== 38)) return !1;
    for (
      u.anchor !== null && z(u, "duplication of an anchor property"),
        E = u.input.charCodeAt(++u.position),
        I = u.position;
      E !== 0 && !P(E) && !x(E);

    )
      E = u.input.charCodeAt(++u.position);
    return (
      u.position === I &&
        z(u, "name of an anchor node must contain at least one character"),
      (u.anchor = u.input.slice(I, u.position)),
      !0
    );
  }
  function st(u) {
    var I, E, R;
    if (((R = u.input.charCodeAt(u.position)), R !== 42)) return !1;
    for (
      R = u.input.charCodeAt(++u.position), I = u.position;
      R !== 0 && !P(R) && !x(R);

    )
      R = u.input.charCodeAt(++u.position);
    return (
      u.position === I &&
        z(u, "name of an alias node must contain at least one character"),
      (E = u.input.slice(I, u.position)),
      o.call(u.anchorMap, E) || z(u, 'unidentified alias "' + E + '"'),
      (u.result = u.anchorMap[E]),
      ee(u, !0, -1),
      !0
    );
  }
  function Ge(u, I, E, R, A) {
    var D,
      g,
      T,
      N = 1,
      q = !1,
      U = !1,
      O,
      $,
      F,
      G,
      Z;
    if (
      (u.listener !== null && u.listener("open", u),
      (u.tag = null),
      (u.anchor = null),
      (u.kind = null),
      (u.result = null),
      (D = g = T = d === E || l === E),
      R &&
        ee(u, !0, -1) &&
        ((q = !0),
        u.lineIndent > I
          ? (N = 1)
          : u.lineIndent === I
          ? (N = 0)
          : u.lineIndent < I && (N = -1)),
      N === 1)
    )
      for (; Oe(u) || Qe(u); )
        ee(u, !0, -1)
          ? ((q = !0),
            (T = D),
            u.lineIndent > I
              ? (N = 1)
              : u.lineIndent === I
              ? (N = 0)
              : u.lineIndent < I && (N = -1))
          : (T = !1);
    if (
      (T && (T = q || A),
      (N === 1 || d === E) &&
        (a === E || c === E ? (G = I) : (G = I + 1),
        (Z = u.position - u.lineStart),
        N === 1
          ? (T && (qe(u, Z) || Ue(u, Z, G))) || X(u, G)
            ? (U = !0)
            : ((g && Ie(u, G)) || _e(u, G) || $e(u, G)
                ? (U = !0)
                : st(u)
                ? ((U = !0),
                  (u.tag !== null || u.anchor !== null) &&
                    z(u, "alias node should not have any properties"))
                : De(u, G, a === E) &&
                  ((U = !0), u.tag === null && (u.tag = "?")),
              u.anchor !== null && (u.anchorMap[u.anchor] = u.result))
          : N === 0 && (U = T && qe(u, Z))),
      u.tag !== null && u.tag !== "!")
    )
      if (u.tag === "?") {
        for (
          u.result !== null &&
            u.kind !== "scalar" &&
            z(
              u,
              'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
                u.kind +
                '"'
            ),
            O = 0,
            $ = u.implicitTypes.length;
          O < $;
          O += 1
        )
          if (((F = u.implicitTypes[O]), F.resolve(u.result))) {
            (u.result = F.construct(u.result)),
              (u.tag = F.tag),
              u.anchor !== null && (u.anchorMap[u.anchor] = u.result);
            break;
          }
      } else
        o.call(u.typeMap[u.kind || "fallback"], u.tag)
          ? ((F = u.typeMap[u.kind || "fallback"][u.tag]),
            u.result !== null &&
              F.kind !== u.kind &&
              z(
                u,
                "unacceptable node kind for !<" +
                  u.tag +
                  '> tag; it should be "' +
                  F.kind +
                  '", not "' +
                  u.kind +
                  '"'
              ),
            F.resolve(u.result)
              ? ((u.result = F.construct(u.result)),
                u.anchor !== null && (u.anchorMap[u.anchor] = u.result))
              : z(
                  u,
                  "cannot resolve a node with !<" + u.tag + "> explicit tag"
                ))
          : z(u, "unknown tag !<" + u.tag + ">");
    return (
      u.listener !== null && u.listener("close", u),
      u.tag !== null || u.anchor !== null || U
    );
  }
  function Ve(u) {
    var I = u.position,
      E,
      R,
      A,
      D = !1,
      g;
    for (
      u.version = null,
        u.checkLineBreaks = u.legacy,
        u.tagMap = {},
        u.anchorMap = {};
      (g = u.input.charCodeAt(u.position)) !== 0 &&
      (ee(u, !0, -1),
      (g = u.input.charCodeAt(u.position)),
      !(u.lineIndent > 0 || g !== 37));

    ) {
      for (
        D = !0, g = u.input.charCodeAt(++u.position), E = u.position;
        g !== 0 && !P(g);

      )
        g = u.input.charCodeAt(++u.position);
      for (
        R = u.input.slice(E, u.position),
          A = [],
          R.length < 1 &&
            z(
              u,
              "directive name must not be less than one character in length"
            );
        g !== 0;

      ) {
        for (; _(g); ) g = u.input.charCodeAt(++u.position);
        if (g === 35) {
          do g = u.input.charCodeAt(++u.position);
          while (g !== 0 && !k(g));
          break;
        }
        if (k(g)) break;
        for (E = u.position; g !== 0 && !P(g); )
          g = u.input.charCodeAt(++u.position);
        A.push(u.input.slice(E, u.position));
      }
      g !== 0 && y(u),
        o.call(te, R)
          ? te[R](u, R, A)
          : de(u, 'unknown document directive "' + R + '"');
    }
    if (
      (ee(u, !0, -1),
      u.lineIndent === 0 &&
      u.input.charCodeAt(u.position) === 45 &&
      u.input.charCodeAt(u.position + 1) === 45 &&
      u.input.charCodeAt(u.position + 2) === 45
        ? ((u.position += 3), ee(u, !0, -1))
        : D && z(u, "directives end mark is expected"),
      Ge(u, u.lineIndent - 1, d, !1, !0),
      ee(u, !0, -1),
      u.checkLineBreaks &&
        b.test(u.input.slice(I, u.position)) &&
        de(u, "non-ASCII line breaks are interpreted as content"),
      u.documents.push(u.result),
      u.position === u.lineStart && ve(u))
    ) {
      u.input.charCodeAt(u.position) === 46 &&
        ((u.position += 3), ee(u, !0, -1));
      return;
    }
    if (u.position < u.length - 1)
      z(u, "end of the stream or a document separator is expected");
    else return;
  }
  function tt(u, I) {
    (u = String(u)),
      (I = I || {}),
      u.length !== 0 &&
        (u.charCodeAt(u.length - 1) !== 10 &&
          u.charCodeAt(u.length - 1) !== 13 &&
          (u += `
`),
        u.charCodeAt(0) === 65279 && (u = u.slice(1)));
    var E = new Q(u, I),
      R = u.indexOf("\0");
    for (
      R !== -1 && ((E.position = R), z(E, "null byte is not allowed in input")),
        E.input += "\0";
      E.input.charCodeAt(E.position) === 32;

    )
      (E.lineIndent += 1), (E.position += 1);
    for (; E.position < E.length - 1; ) Ve(E);
    return E.documents;
  }
  function ke(u, I, E) {
    I !== null &&
      typeof I == "object" &&
      typeof E > "u" &&
      ((E = I), (I = null));
    var R = tt(u, E);
    if (typeof I != "function") return R;
    for (var A = 0, D = R.length; A < D; A += 1) I(R[A]);
  }
  function rt(u, I) {
    var E = tt(u, I);
    if (E.length !== 0) {
      if (E.length === 1) return E[0];
      throw new t("expected a single document in the stream, but found more");
    }
  }
  function me(u, I, E) {
    return (
      typeof I == "object" &&
        I !== null &&
        typeof E > "u" &&
        ((E = I), (I = null)),
      ke(u, I, e.extend({ schema: r }, E))
    );
  }
  function at(u, I) {
    return rt(u, e.extend({ schema: r }, I));
  }
  return (
    (loader.loadAll = ke),
    (loader.load = rt),
    (loader.safeLoadAll = me),
    (loader.safeLoad = at),
    loader
  );
}
var dumper = {},
  hasRequiredDumper;
function requireDumper() {
  if (hasRequiredDumper) return dumper;
  hasRequiredDumper = 1;
  var e = requireCommon(),
    t = requireException(),
    n = requireDefault_full(),
    r = requireDefault_safe(),
    i = Object.prototype.toString,
    o = Object.prototype.hasOwnProperty,
    a = 9,
    c = 10,
    l = 13,
    d = 32,
    p = 33,
    m = 34,
    h = 35,
    f = 37,
    b = 38,
    v = 39,
    j = 42,
    S = 44,
    C = 45,
    k = 58,
    _ = 61,
    P = 62,
    x = 63,
    Y = 64,
    V = 91,
    H = 93,
    K = 96,
    W = 123,
    L = 124,
    B = 125,
    M = {};
  (M[0] = "\\0"),
    (M[7] = "\\a"),
    (M[8] = "\\b"),
    (M[9] = "\\t"),
    (M[10] = "\\n"),
    (M[11] = "\\v"),
    (M[12] = "\\f"),
    (M[13] = "\\r"),
    (M[27] = "\\e"),
    (M[34] = '\\"'),
    (M[92] = "\\\\"),
    (M[133] = "\\N"),
    (M[160] = "\\_"),
    (M[8232] = "\\L"),
    (M[8233] = "\\P");
  var Q = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF",
  ];
  function ye(g, T) {
    var N, q, U, O, $, F, G;
    if (T === null) return {};
    for (N = {}, q = Object.keys(T), U = 0, O = q.length; U < O; U += 1)
      ($ = q[U]),
        (F = String(T[$])),
        $.slice(0, 2) === "!!" && ($ = "tag:yaml.org,2002:" + $.slice(2)),
        (G = g.compiledTypeMap.fallback[$]),
        G && o.call(G.styleAliases, F) && (F = G.styleAliases[F]),
        (N[$] = F);
    return N;
  }
  function z(g) {
    var T, N, q;
    if (((T = g.toString(16).toUpperCase()), g <= 255)) (N = "x"), (q = 2);
    else if (g <= 65535) (N = "u"), (q = 4);
    else if (g <= 4294967295) (N = "U"), (q = 8);
    else
      throw new t(
        "code point within a string may not be greater than 0xFFFFFFFF"
      );
    return "\\" + N + e.repeat("0", q - T.length) + T;
  }
  function de(g) {
    (this.schema = g.schema || n),
      (this.indent = Math.max(1, g.indent || 2)),
      (this.noArrayIndent = g.noArrayIndent || !1),
      (this.skipInvalid = g.skipInvalid || !1),
      (this.flowLevel = e.isNothing(g.flowLevel) ? -1 : g.flowLevel),
      (this.styleMap = ye(this.schema, g.styles || null)),
      (this.sortKeys = g.sortKeys || !1),
      (this.lineWidth = g.lineWidth || 80),
      (this.noRefs = g.noRefs || !1),
      (this.noCompatMode = g.noCompatMode || !1),
      (this.condenseFlow = g.condenseFlow || !1),
      (this.implicitTypes = this.schema.compiledImplicit),
      (this.explicitTypes = this.schema.compiledExplicit),
      (this.tag = null),
      (this.result = ""),
      (this.duplicates = []),
      (this.usedDuplicates = null);
  }
  function te(g, T) {
    for (
      var N = e.repeat(" ", T), q = 0, U = -1, O = "", $, F = g.length;
      q < F;

    )
      (U = g.indexOf(
        `
`,
        q
      )),
        U === -1
          ? (($ = g.slice(q)), (q = F))
          : (($ = g.slice(q, U + 1)), (q = U + 1)),
        $.length &&
          $ !==
            `
` &&
          (O += N),
        (O += $);
    return O;
  }
  function w(g, T) {
    return (
      `
` + e.repeat(" ", g.indent * T)
    );
  }
  function he(g, T) {
    var N, q, U;
    for (N = 0, q = g.implicitTypes.length; N < q; N += 1)
      if (((U = g.implicitTypes[N]), U.resolve(T))) return !0;
    return !1;
  }
  function Ee(g) {
    return g === d || g === a;
  }
  function y(g) {
    return (
      (32 <= g && g <= 126) ||
      (161 <= g && g <= 55295 && g !== 8232 && g !== 8233) ||
      (57344 <= g && g <= 65533 && g !== 65279) ||
      (65536 <= g && g <= 1114111)
    );
  }
  function ee(g) {
    return y(g) && !Ee(g) && g !== 65279 && g !== l && g !== c;
  }
  function ve(g, T) {
    return (
      y(g) &&
      g !== 65279 &&
      g !== S &&
      g !== V &&
      g !== H &&
      g !== W &&
      g !== B &&
      g !== k &&
      (g !== h || (T && ee(T)))
    );
  }
  function le(g) {
    return (
      y(g) &&
      g !== 65279 &&
      !Ee(g) &&
      g !== C &&
      g !== x &&
      g !== k &&
      g !== S &&
      g !== V &&
      g !== H &&
      g !== W &&
      g !== B &&
      g !== h &&
      g !== b &&
      g !== j &&
      g !== p &&
      g !== L &&
      g !== _ &&
      g !== P &&
      g !== v &&
      g !== m &&
      g !== f &&
      g !== Y &&
      g !== K
    );
  }
  function De(g) {
    var T = /^\n* /;
    return T.test(g);
  }
  var _e = 1,
    $e = 2,
    X = 3,
    Ie = 4,
    qe = 5;
  function Ue(g, T, N, q, U) {
    var O,
      $,
      F,
      G = !1,
      Z = !1,
      ie = q !== -1,
      it = -1,
      He = le(g.charCodeAt(0)) && !Ee(g.charCodeAt(g.length - 1));
    if (T)
      for (O = 0; O < g.length; O++) {
        if ((($ = g.charCodeAt(O)), !y($))) return qe;
        (F = O > 0 ? g.charCodeAt(O - 1) : null), (He = He && ve($, F));
      }
    else {
      for (O = 0; O < g.length; O++) {
        if ((($ = g.charCodeAt(O)), $ === c))
          (G = !0),
            ie && ((Z = Z || (O - it - 1 > q && g[it + 1] !== " ")), (it = O));
        else if (!y($)) return qe;
        (F = O > 0 ? g.charCodeAt(O - 1) : null), (He = He && ve($, F));
      }
      Z = Z || (ie && O - it - 1 > q && g[it + 1] !== " ");
    }
    return !G && !Z
      ? He && !U(g)
        ? _e
        : $e
      : N > 9 && De(g)
      ? qe
      : Z
      ? Ie
      : X;
  }
  function Oe(g, T, N, q) {
    g.dump = (function () {
      if (T.length === 0) return "''";
      if (!g.noCompatMode && Q.indexOf(T) !== -1) return "'" + T + "'";
      var U = g.indent * Math.max(1, N),
        O =
          g.lineWidth === -1
            ? -1
            : Math.max(Math.min(g.lineWidth, 40), g.lineWidth - U),
        $ = q || (g.flowLevel > -1 && N >= g.flowLevel);
      function F(G) {
        return he(g, G);
      }
      switch (Ue(T, $, g.indent, O, F)) {
        case _e:
          return T;
        case $e:
          return "'" + T.replace(/'/g, "''") + "'";
        case X:
          return "|" + Qe(T, g.indent) + st(te(T, U));
        case Ie:
          return ">" + Qe(T, g.indent) + st(te(Ge(T, O), U));
        case qe:
          return '"' + tt(T) + '"';
        default:
          throw new t("impossible error: invalid scalar style");
      }
    })();
  }
  function Qe(g, T) {
    var N = De(g) ? String(T) : "",
      q =
        g[g.length - 1] ===
        `
`,
      U =
        q &&
        (g[g.length - 2] ===
          `
` ||
          g ===
            `
`),
      O = U ? "+" : q ? "" : "-";
    return (
      N +
      O +
      `
`
    );
  }
  function st(g) {
    return g[g.length - 1] ===
      `
`
      ? g.slice(0, -1)
      : g;
  }
  function Ge(g, T) {
    for (
      var N = /(\n+)([^\n]*)/g,
        q = (function () {
          var Z = g.indexOf(`
`);
          return (
            (Z = Z !== -1 ? Z : g.length),
            (N.lastIndex = Z),
            Ve(g.slice(0, Z), T)
          );
        })(),
        U =
          g[0] ===
            `
` || g[0] === " ",
        O,
        $;
      ($ = N.exec(g));

    ) {
      var F = $[1],
        G = $[2];
      (O = G[0] === " "),
        (q +=
          F +
          (!U && !O && G !== ""
            ? `
`
            : "") +
          Ve(G, T)),
        (U = O);
    }
    return q;
  }
  function Ve(g, T) {
    if (g === "" || g[0] === " ") return g;
    for (var N = / [^ ]/g, q, U = 0, O, $ = 0, F = 0, G = ""; (q = N.exec(g)); )
      (F = q.index),
        F - U > T &&
          ((O = $ > U ? $ : F),
          (G +=
            `
` + g.slice(U, O)),
          (U = O + 1)),
        ($ = F);
    return (
      (G += `
`),
      g.length - U > T && $ > U
        ? (G +=
            g.slice(U, $) +
            `
` +
            g.slice($ + 1))
        : (G += g.slice(U)),
      G.slice(1)
    );
  }
  function tt(g) {
    for (var T = "", N, q, U, O = 0; O < g.length; O++) {
      if (
        ((N = g.charCodeAt(O)),
        N >= 55296 &&
          N <= 56319 &&
          ((q = g.charCodeAt(O + 1)), q >= 56320 && q <= 57343))
      ) {
        (T += z((N - 55296) * 1024 + q - 56320 + 65536)), O++;
        continue;
      }
      (U = M[N]), (T += !U && y(N) ? g[O] : U || z(N));
    }
    return T;
  }
  function ke(g, T, N) {
    var q = "",
      U = g.tag,
      O,
      $;
    for (O = 0, $ = N.length; O < $; O += 1)
      I(g, T, N[O], !1, !1) &&
        (O !== 0 && (q += "," + (g.condenseFlow ? "" : " ")), (q += g.dump));
    (g.tag = U), (g.dump = "[" + q + "]");
  }
  function rt(g, T, N, q) {
    var U = "",
      O = g.tag,
      $,
      F;
    for ($ = 0, F = N.length; $ < F; $ += 1)
      I(g, T + 1, N[$], !0, !0) &&
        ((!q || $ !== 0) && (U += w(g, T)),
        g.dump && c === g.dump.charCodeAt(0) ? (U += "-") : (U += "- "),
        (U += g.dump));
    (g.tag = O), (g.dump = U || "[]");
  }
  function me(g, T, N) {
    var q = "",
      U = g.tag,
      O = Object.keys(N),
      $,
      F,
      G,
      Z,
      ie;
    for ($ = 0, F = O.length; $ < F; $ += 1)
      (ie = ""),
        $ !== 0 && (ie += ", "),
        g.condenseFlow && (ie += '"'),
        (G = O[$]),
        (Z = N[G]),
        I(g, T, G, !1, !1) &&
          (g.dump.length > 1024 && (ie += "? "),
          (ie +=
            g.dump +
            (g.condenseFlow ? '"' : "") +
            ":" +
            (g.condenseFlow ? "" : " ")),
          I(g, T, Z, !1, !1) && ((ie += g.dump), (q += ie)));
    (g.tag = U), (g.dump = "{" + q + "}");
  }
  function at(g, T, N, q) {
    var U = "",
      O = g.tag,
      $ = Object.keys(N),
      F,
      G,
      Z,
      ie,
      it,
      He;
    if (g.sortKeys === !0) $.sort();
    else if (typeof g.sortKeys == "function") $.sort(g.sortKeys);
    else if (g.sortKeys)
      throw new t("sortKeys must be a boolean or a function");
    for (F = 0, G = $.length; F < G; F += 1)
      (He = ""),
        (!q || F !== 0) && (He += w(g, T)),
        (Z = $[F]),
        (ie = N[Z]),
        I(g, T + 1, Z, !0, !0, !0) &&
          ((it =
            (g.tag !== null && g.tag !== "?") ||
            (g.dump && g.dump.length > 1024)),
          it &&
            (g.dump && c === g.dump.charCodeAt(0) ? (He += "?") : (He += "? ")),
          (He += g.dump),
          it && (He += w(g, T)),
          I(g, T + 1, ie, !0, it) &&
            (g.dump && c === g.dump.charCodeAt(0) ? (He += ":") : (He += ": "),
            (He += g.dump),
            (U += He)));
    (g.tag = O), (g.dump = U || "{}");
  }
  function u(g, T, N) {
    var q, U, O, $, F, G;
    for (
      U = N ? g.explicitTypes : g.implicitTypes, O = 0, $ = U.length;
      O < $;
      O += 1
    )
      if (
        ((F = U[O]),
        (F.instanceOf || F.predicate) &&
          (!F.instanceOf ||
            (typeof T == "object" && T instanceof F.instanceOf)) &&
          (!F.predicate || F.predicate(T)))
      ) {
        if (((g.tag = N ? F.tag : "?"), F.represent)) {
          if (
            ((G = g.styleMap[F.tag] || F.defaultStyle),
            i.call(F.represent) === "[object Function]")
          )
            q = F.represent(T, G);
          else if (o.call(F.represent, G)) q = F.represent[G](T, G);
          else
            throw new t(
              "!<" + F.tag + '> tag resolver accepts not "' + G + '" style'
            );
          g.dump = q;
        }
        return !0;
      }
    return !1;
  }
  function I(g, T, N, q, U, O) {
    (g.tag = null), (g.dump = N), u(g, N, !1) || u(g, N, !0);
    var $ = i.call(g.dump);
    q && (q = g.flowLevel < 0 || g.flowLevel > T);
    var F = $ === "[object Object]" || $ === "[object Array]",
      G,
      Z;
    if (
      (F && ((G = g.duplicates.indexOf(N)), (Z = G !== -1)),
      ((g.tag !== null && g.tag !== "?") || Z || (g.indent !== 2 && T > 0)) &&
        (U = !1),
      Z && g.usedDuplicates[G])
    )
      g.dump = "*ref_" + G;
    else {
      if (
        (F && Z && !g.usedDuplicates[G] && (g.usedDuplicates[G] = !0),
        $ === "[object Object]")
      )
        q && Object.keys(g.dump).length !== 0
          ? (at(g, T, g.dump, U), Z && (g.dump = "&ref_" + G + g.dump))
          : (me(g, T, g.dump), Z && (g.dump = "&ref_" + G + " " + g.dump));
      else if ($ === "[object Array]") {
        var ie = g.noArrayIndent && T > 0 ? T - 1 : T;
        q && g.dump.length !== 0
          ? (rt(g, ie, g.dump, U), Z && (g.dump = "&ref_" + G + g.dump))
          : (ke(g, ie, g.dump), Z && (g.dump = "&ref_" + G + " " + g.dump));
      } else if ($ === "[object String]") g.tag !== "?" && Oe(g, g.dump, T, O);
      else {
        if (g.skipInvalid) return !1;
        throw new t("unacceptable kind of an object to dump " + $);
      }
      g.tag !== null &&
        g.tag !== "?" &&
        (g.dump = "!<" + g.tag + "> " + g.dump);
    }
    return !0;
  }
  function E(g, T) {
    var N = [],
      q = [],
      U,
      O;
    for (R(g, N, q), U = 0, O = q.length; U < O; U += 1)
      T.duplicates.push(N[q[U]]);
    T.usedDuplicates = new Array(O);
  }
  function R(g, T, N) {
    var q, U, O;
    if (g !== null && typeof g == "object")
      if (((U = T.indexOf(g)), U !== -1)) N.indexOf(U) === -1 && N.push(U);
      else if ((T.push(g), Array.isArray(g)))
        for (U = 0, O = g.length; U < O; U += 1) R(g[U], T, N);
      else
        for (q = Object.keys(g), U = 0, O = q.length; U < O; U += 1)
          R(g[q[U]], T, N);
  }
  function A(g, T) {
    T = T || {};
    var N = new de(T);
    return (
      N.noRefs || E(g, N),
      I(N, 0, g, !0, !0)
        ? N.dump +
          `
`
        : ""
    );
  }
  function D(g, T) {
    return A(g, e.extend({ schema: r }, T));
  }
  return (dumper.dump = A), (dumper.safeDump = D), dumper;
}
var hasRequiredJsYaml$1;
function requireJsYaml$1() {
  if (hasRequiredJsYaml$1) return jsYaml$1;
  hasRequiredJsYaml$1 = 1;
  var e = requireLoader(),
    t = requireDumper();
  function n(r) {
    return function () {
      throw new Error("Function " + r + " is deprecated and cannot be used.");
    };
  }
  return (
    (jsYaml$1.Type = requireType()),
    (jsYaml$1.Schema = requireSchema()),
    (jsYaml$1.FAILSAFE_SCHEMA = requireFailsafe()),
    (jsYaml$1.JSON_SCHEMA = requireJson()),
    (jsYaml$1.CORE_SCHEMA = requireCore()),
    (jsYaml$1.DEFAULT_SAFE_SCHEMA = requireDefault_safe()),
    (jsYaml$1.DEFAULT_FULL_SCHEMA = requireDefault_full()),
    (jsYaml$1.load = e.load),
    (jsYaml$1.loadAll = e.loadAll),
    (jsYaml$1.safeLoad = e.safeLoad),
    (jsYaml$1.safeLoadAll = e.safeLoadAll),
    (jsYaml$1.dump = t.dump),
    (jsYaml$1.safeDump = t.safeDump),
    (jsYaml$1.YAMLException = requireException()),
    (jsYaml$1.MINIMAL_SCHEMA = requireFailsafe()),
    (jsYaml$1.SAFE_SCHEMA = requireDefault_safe()),
    (jsYaml$1.DEFAULT_SCHEMA = requireDefault_full()),
    (jsYaml$1.scan = n("scan")),
    (jsYaml$1.parse = n("parse")),
    (jsYaml$1.compose = n("compose")),
    (jsYaml$1.addConstructor = n("addConstructor")),
    jsYaml$1
  );
}
var jsYaml, hasRequiredJsYaml;
function requireJsYaml() {
  if (hasRequiredJsYaml) return jsYaml;
  hasRequiredJsYaml = 1;
  var e = requireJsYaml$1();
  return (jsYaml = e), jsYaml;
}
var hasRequiredEngines;
function requireEngines() {
  return (
    hasRequiredEngines ||
      ((hasRequiredEngines = 1),
      (function (module, exports) {
        const yaml = requireJsYaml(),
          engines = module.exports;
        (engines.yaml = {
          parse: yaml.safeLoad.bind(yaml),
          stringify: yaml.safeDump.bind(yaml),
        }),
          (engines.json = {
            parse: JSON.parse.bind(JSON),
            stringify: function (e, t) {
              const n = Object.assign({ replacer: null, space: 2 }, t);
              return JSON.stringify(e, n.replacer, n.space);
            },
          }),
          (engines.javascript = {
            parse: function parse(str, options, wrap) {
              try {
                return (
                  wrap !== !1 &&
                    (str =
                      `(function() {
return ` +
                      str.trim() +
                      `;
}());`),
                  eval(str) || {}
                );
              } catch (e) {
                if (wrap !== !1 && /(unexpected|identifier)/i.test(e.message))
                  return parse(str, options, !1);
                throw new SyntaxError(e);
              }
            },
            stringify: function () {
              throw new Error("stringifying JavaScript is not supported");
            },
          });
      })(engines)),
    engines.exports
  );
}
var utils = {};
/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var stripBomString, hasRequiredStripBomString;
function requireStripBomString() {
  return (
    hasRequiredStripBomString ||
      ((hasRequiredStripBomString = 1),
      (stripBomString = function (e) {
        return typeof e == "string" && e.charAt(0) === "\uFEFF"
          ? e.slice(1)
          : e;
      })),
    stripBomString
  );
}
var hasRequiredUtils;
function requireUtils() {
  return (
    hasRequiredUtils ||
      ((hasRequiredUtils = 1),
      (function (e) {
        const t = requireStripBomString(),
          n = requireKindOf();
        (e.define = function (r, i, o) {
          Reflect.defineProperty(r, i, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: o,
          });
        }),
          (e.isBuffer = function (r) {
            return n(r) === "buffer";
          }),
          (e.isObject = function (r) {
            return n(r) === "object";
          }),
          (e.toBuffer = function (r) {
            return typeof r == "string" ? Buffer.from(r) : r;
          }),
          (e.toString = function (r) {
            if (e.isBuffer(r)) return t(String(r));
            if (typeof r != "string")
              throw new TypeError("expected input to be a string or buffer");
            return t(r);
          }),
          (e.arrayify = function (r) {
            return r ? (Array.isArray(r) ? r : [r]) : [];
          }),
          (e.startsWith = function (r, i, o) {
            return typeof o != "number" && (o = i.length), r.slice(0, o) === i;
          });
      })(utils)),
    utils
  );
}
var defaults, hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults;
  hasRequiredDefaults = 1;
  const e = requireEngines(),
    t = requireUtils();
  return (
    (defaults = function (n) {
      const r = Object.assign({}, n);
      return (
        (r.delimiters = t.arrayify(r.delims || r.delimiters || "---")),
        r.delimiters.length === 1 && r.delimiters.push(r.delimiters[0]),
        (r.language = (r.language || r.lang || "yaml").toLowerCase()),
        (r.engines = Object.assign({}, e, r.parsers, r.engines)),
        r
      );
    }),
    defaults
  );
}
var engine, hasRequiredEngine;
function requireEngine() {
  if (hasRequiredEngine) return engine;
  (hasRequiredEngine = 1),
    (engine = function (t, n) {
      let r = n.engines[t] || n.engines[e(t)];
      if (typeof r > "u")
        throw new Error('gray-matter engine "' + t + '" is not registered');
      return typeof r == "function" && (r = { parse: r }), r;
    });
  function e(t) {
    switch (t.toLowerCase()) {
      case "js":
      case "javascript":
        return "javascript";
      case "coffee":
      case "coffeescript":
      case "cson":
        return "coffee";
      case "yaml":
      case "yml":
        return "yaml";
      default:
        return t;
    }
  }
  return engine;
}
var stringify$2, hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify$2;
  hasRequiredStringify = 1;
  const e = requireKindOf(),
    t = requireEngine(),
    n = requireDefaults();
  stringify$2 = function (i, o, a) {
    if (o == null && a == null)
      switch (e(i)) {
        case "object":
          (o = i.data), (a = {});
          break;
        case "string":
          return i;
        default:
          throw new TypeError("expected file to be a string or object");
      }
    const c = i.content,
      l = n(a);
    if (o == null) {
      if (!l.data) return i;
      o = l.data;
    }
    const d = i.language || l.language,
      p = t(d, l);
    if (typeof p.stringify != "function")
      throw new TypeError('expected "' + d + '.stringify" to be a function');
    o = Object.assign({}, i.data, o);
    const m = l.delimiters[0],
      h = l.delimiters[1],
      f = p.stringify(o, a).trim();
    let b = "";
    return (
      f !== "{}" && (b = r(m) + r(f) + r(h)),
      typeof i.excerpt == "string" &&
        i.excerpt !== "" &&
        c.indexOf(i.excerpt.trim()) === -1 &&
        (b += r(i.excerpt) + r(h)),
      b + r(c)
    );
  };
  function r(i) {
    return i.slice(-1) !==
      `
`
      ? i +
          `
`
      : i;
  }
  return stringify$2;
}
var excerpt, hasRequiredExcerpt;
function requireExcerpt() {
  if (hasRequiredExcerpt) return excerpt;
  hasRequiredExcerpt = 1;
  const e = requireDefaults();
  return (
    (excerpt = function (t, n) {
      const r = e(n);
      if ((t.data == null && (t.data = {}), typeof r.excerpt == "function"))
        return r.excerpt(t, r);
      const i = t.data.excerpt_separator || r.excerpt_separator;
      if (i == null && (r.excerpt === !1 || r.excerpt == null)) return t;
      const o = typeof r.excerpt == "string" ? r.excerpt : i || r.delimiters[0],
        a = t.content.indexOf(o);
      return a !== -1 && (t.excerpt = t.content.slice(0, a)), t;
    }),
    excerpt
  );
}
var toFile, hasRequiredToFile;
function requireToFile() {
  if (hasRequiredToFile) return toFile;
  hasRequiredToFile = 1;
  const e = requireKindOf(),
    t = requireStringify(),
    n = requireUtils();
  return (
    (toFile = function (r) {
      return (
        e(r) !== "object" && (r = { content: r }),
        e(r.data) !== "object" && (r.data = {}),
        r.contents && r.content == null && (r.content = r.contents),
        n.define(r, "orig", n.toBuffer(r.content)),
        n.define(r, "language", r.language || ""),
        n.define(r, "matter", r.matter || ""),
        n.define(r, "stringify", function (i, o) {
          return o && o.language && (r.language = o.language), t(r, i, o);
        }),
        (r.content = n.toString(r.content)),
        (r.isEmpty = !1),
        (r.excerpt = ""),
        r
      );
    }),
    toFile
  );
}
var parse$1, hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse$1;
  hasRequiredParse = 1;
  const e = requireEngine(),
    t = requireDefaults();
  return (
    (parse$1 = function (n, r, i) {
      const o = t(i),
        a = e(n, o);
      if (typeof a.parse != "function")
        throw new TypeError('expected "' + n + '.parse" to be a function');
      return a.parse(r, o);
    }),
    parse$1
  );
}
var grayMatter, hasRequiredGrayMatter;
function requireGrayMatter() {
  if (hasRequiredGrayMatter) return grayMatter;
  hasRequiredGrayMatter = 1;
  const e = require$$2,
    t = requireSectionMatter(),
    n = requireDefaults(),
    r = requireStringify(),
    i = requireExcerpt(),
    o = requireEngines(),
    a = requireToFile(),
    c = requireParse(),
    l = requireUtils();
  function d(m, h) {
    if (m === "") return { data: {}, content: m, excerpt: "", orig: m };
    let f = a(m);
    const b = d.cache[f.content];
    if (!h) {
      if (b) return (f = Object.assign({}, b)), (f.orig = b.orig), f;
      d.cache[f.content] = f;
    }
    return p(f, h);
  }
  function p(m, h) {
    const f = n(h),
      b = f.delimiters[0],
      v =
        `
` + f.delimiters[1];
    let j = m.content;
    f.language && (m.language = f.language);
    const S = b.length;
    if (!l.startsWith(j, b, S)) return i(m, f), m;
    if (j.charAt(S) === b.slice(-1)) return m;
    j = j.slice(S);
    const C = j.length,
      k = d.language(j, f);
    k.name && ((m.language = k.name), (j = j.slice(k.raw.length)));
    let _ = j.indexOf(v);
    return (
      _ === -1 && (_ = C),
      (m.matter = j.slice(0, _)),
      m.matter.replace(/^\s*#[^\n]+/gm, "").trim() === ""
        ? ((m.isEmpty = !0), (m.empty = m.content), (m.data = {}))
        : (m.data = c(m.language, m.matter, f)),
      _ === C
        ? (m.content = "")
        : ((m.content = j.slice(_ + v.length)),
          m.content[0] === "\r" && (m.content = m.content.slice(1)),
          m.content[0] ===
            `
` && (m.content = m.content.slice(1))),
      i(m, f),
      (f.sections === !0 || typeof f.section == "function") && t(m, f.section),
      m
    );
  }
  return (
    (d.engines = o),
    (d.stringify = function (m, h, f) {
      return typeof m == "string" && (m = d(m, f)), r(m, h, f);
    }),
    (d.read = function (m, h) {
      const f = e.readFileSync(m, "utf8"),
        b = d(f, h);
      return (b.path = m), b;
    }),
    (d.test = function (m, h) {
      return l.startsWith(m, n(h).delimiters[0]);
    }),
    (d.language = function (m, h) {
      const b = n(h).delimiters[0];
      d.test(m) && (m = m.slice(b.length));
      const v = m.slice(0, m.search(/\r?\n/));
      return { raw: v, name: v ? v.trim() : "" };
    }),
    (d.cache = {}),
    (d.clearCache = function () {
      d.cache = {};
    }),
    (grayMatter = d),
    grayMatter
  );
}
requireGrayMatter();
const SEO = ({
  title:
    e = "Deep Snitch AI | We Snitch So You Don't Get Rekt - DEEPSNITCH is Now Live",
  description:
    t = "Gain your upper hand in crypto using AI-powered bots that sniff out scams, track whales, filter real projects and news. is live.",
  canonical: n = "https://deepsnitch.ai",
  image: r = "https://deepsnitch.ai/og-image.jpg",
  type: i = "website",
  twitterCard: o = "summary_large_image",
  keywords:
    a = "crypto AI, Deep Snitch AI, DSAI token, crypto scam detection, whale tracking, presale, DeFi, blockchain security, AI bots",
  author: c = "Deep Snitch AI Team",
  structuredData: l = null,
  noIndex: d = !1,
  robots: p = "index, follow",
}) => {
  const m = e.includes("Deep Snitch AI") ? e : `${e} | Deep Snitch AI`;
  return jsxRuntimeExports.jsxs(Helmet, {
    children: [
      jsxRuntimeExports.jsx("title", { children: m }),
      jsxRuntimeExports.jsx("meta", { name: "description", content: t }),
      jsxRuntimeExports.jsx("meta", { name: "keywords", content: a }),
      jsxRuntimeExports.jsx("meta", { name: "author", content: c }),
      jsxRuntimeExports.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "theme-color",
        content: "#d6fc70",
      }),
      jsxRuntimeExports.jsx("link", { rel: "canonical", href: n }),
      d
        ? jsxRuntimeExports.jsx("meta", {
            name: "robots",
            content: "noindex, nofollow",
          })
        : jsxRuntimeExports.jsx("meta", { name: "robots", content: p }),
      jsxRuntimeExports.jsx("meta", { property: "og:type", content: i }),
      jsxRuntimeExports.jsx("meta", { property: "og:url", content: n }),
      jsxRuntimeExports.jsx("meta", { property: "og:title", content: m }),
      jsxRuntimeExports.jsx("meta", { property: "og:description", content: t }),
      jsxRuntimeExports.jsx("meta", { property: "og:image", content: r }),
      jsxRuntimeExports.jsx("meta", {
        property: "og:image:width",
        content: "1200",
      }),
      jsxRuntimeExports.jsx("meta", {
        property: "og:image:height",
        content: "630",
      }),
      jsxRuntimeExports.jsx("meta", {
        property: "og:image:alt",
        content: `${e} - Deep Snitch AI`,
      }),
      jsxRuntimeExports.jsx("meta", {
        property: "og:site_name",
        content: "Deep Snitch AI",
      }),
      jsxRuntimeExports.jsx("meta", {
        property: "og:locale",
        content: "en_US",
      }),
      jsxRuntimeExports.jsx("meta", { property: "twitter:card", content: o }),
      jsxRuntimeExports.jsx("meta", { property: "twitter:url", content: n }),
      jsxRuntimeExports.jsx("meta", { property: "twitter:title", content: m }),
      jsxRuntimeExports.jsx("meta", {
        property: "twitter:description",
        content: t,
      }),
      jsxRuntimeExports.jsx("meta", { property: "twitter:image", content: r }),
      jsxRuntimeExports.jsx("meta", {
        property: "twitter:image:alt",
        content: `${e} - Deep Snitch AI`,
      }),
      jsxRuntimeExports.jsx("meta", {
        property: "twitter:site",
        content: "@DeepSnitchAI",
      }),
      jsxRuntimeExports.jsx("meta", {
        property: "twitter:creator",
        content: "@DeepSnitchAI",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "application-name",
        content: "Deep Snitch AI",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "apple-mobile-web-app-title",
        content: "Deep Snitch AI",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "format-detection",
        content: "telephone=no",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "msapplication-config",
        content: "/browserconfig.xml",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#d6fc70",
      }),
      jsxRuntimeExports.jsx("meta", {
        name: "msapplication-tap-highlight",
        content: "no",
      }),
      jsxRuntimeExports.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      }),
      jsxRuntimeExports.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      }),
      jsxRuntimeExports.jsx("link", {
        rel: "preconnect",
        href: "https://api.coinmarketcap.com",
      }),
      jsxRuntimeExports.jsx("link", {
        rel: "dns-prefetch",
        href: "https://ethereum.org",
      }),
      jsxRuntimeExports.jsx("link", {
        rel: "dns-prefetch",
        href: "https://bscscan.com",
      }),
      l &&
        (Array.isArray(l)
          ? l.map((h, f) =>
              jsxRuntimeExports.jsx(
                "script",
                { type: "application/ld+json", children: JSON.stringify(h) },
                f
              )
            )
          : jsxRuntimeExports.jsx("script", {
              type: "application/ld+json",
              children: JSON.stringify(l),
            })),
    ],
  });
};
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  twitterCard: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  structuredData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  noIndex: PropTypes.bool,
  robots: PropTypes.string,
};
const Title = ({
  children: e,
  className: t = "",
  level: n = 1,
  i18nKey: r,
  color: i = "primary",
  align: o = "left",
  weight: a = "bold",
  noDefaultSize: c = !1,
}) => {
  const { t: l } = useTranslation(),
    d = [1, 2, 3, 4, 5, 6],
    p = ["primary", "secondary", "accent", "green"],
    m = d.includes(n) ? n : 1,
    h = p.includes(i) ? i : "primary",
    f = `h${m}`,
    b = {
      primary: "text-white",
      secondary: "text-black",
      accent: "text-accent",
      green: "text-[#d6fc70]",
    },
    v = { left: "text-left", center: "lg:text-center", right: "text-right" },
    j = {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    S = {
      1: "text-36 leading-36 lg:text-48 lg:leading-48 xl:text-72 xl:leading-72",
      2: "text-36 leading-36 lg:text-48 lg:leading-48 xl:text-64 xl:leading-72",
      3: "text-36 leading-36 lg:text-48 lg:leading-48 xl:text-96 xl:leading-72",
      4: "text-30 leading-30 lg:text-48 lg:leading-48 xl:text-48 xl:leading-48",
      5: "text-56 leading-36 xl:tracking-1",
      6: "xl:text-base xl:leading-lg",
    },
    C = [b[h], v[o], j[a], !c && S[m], t].filter(Boolean).join(" ");
  return jsxRuntimeExports.jsx(f, {
    className: C,
    children: r ? jsxRuntimeExports.jsx(Trans, { i18nKey: r, children: e }) : e,
  });
};
Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  i18nKey: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "accent", "green"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  weight: PropTypes.oneOf(["light", "normal", "medium", "semibold", "bold"]),
  noDefaultSize: PropTypes.bool,
};
const Text = ({
  children: e,
  className: t = "",
  i18nKey: n,
  color: r = "default",
  size: i = "md",
  weight: o = "normal",
  as: a = "p",
  align: c = "left",
}) => {
  const { t: l } = useTranslation(),
    d = a,
    p = [
      "default",
      "light",
      "dark",
      "primary",
      "success",
      "warning",
      "danger",
      "green",
    ],
    m = ["xs", "sm", "md", "lg", "xl"],
    h = p.includes(r) ? r : "default",
    f = m.includes(i) ? i : "md",
    b = {
      default: "text-white",
      light: "text-gray-300",
      dark: "text-gray-800",
      primary: "text-blue-600",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      green: "text-[#d6fc70]",
    },
    v = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    j = {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    S = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    C = [b[h], v[f], j[o], S[c], "", t].filter(Boolean).join(" ");
  return jsxRuntimeExports.jsx(d, {
    className: C,
    children: n ? jsxRuntimeExports.jsx(Trans, { i18nKey: n, children: e }) : e,
  });
};
Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  i18nKey: PropTypes.string,
  color: PropTypes.oneOf([
    "default",
    "light",
    "dark",
    "primary",
    "success",
    "warning",
    "danger",
    "green",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  weight: PropTypes.oneOf(["light", "normal", "medium", "semibold", "bold"]),
  as: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
};
const Text$1 = reactExports.memo(Text);
function ok$1() {}
function unreachable() {}
function stringify$1(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
    .trim();
}
const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  emptyOptions$2 = {};
function name(e, t) {
  return (emptyOptions$2.jsx ? nameReJsx : nameRe).test(e);
}
const re = /[ \t\n\f\r]/g;
function whitespace(e) {
  return typeof e == "object"
    ? e.type === "text"
      ? empty$1(e.value)
      : !1
    : empty$1(e);
}
function empty$1(e) {
  return e.replace(re, "") === "";
}
class Schema {
  constructor(t, n, r) {
    (this.normal = n), (this.property = t), r && (this.space = r);
  }
}
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;
function merge(e, t) {
  const n = {},
    r = {};
  for (const i of e) Object.assign(n, i.property), Object.assign(r, i.normal);
  return new Schema(n, r, t);
}
function normalize$1(e) {
  return e.toLowerCase();
}
class Info {
  constructor(t, n) {
    (this.attribute = n), (this.property = t);
  }
}
Info.prototype.attribute = "";
Info.prototype.booleanish = !1;
Info.prototype.boolean = !1;
Info.prototype.commaOrSpaceSeparated = !1;
Info.prototype.commaSeparated = !1;
Info.prototype.defined = !1;
Info.prototype.mustUseProperty = !1;
Info.prototype.number = !1;
Info.prototype.overloadedBoolean = !1;
Info.prototype.property = "";
Info.prototype.spaceSeparated = !1;
Info.prototype.space = void 0;
let powers = 0;
const boolean = increment(),
  booleanish = increment(),
  overloadedBoolean = increment(),
  number = increment(),
  spaceSeparated = increment(),
  commaSeparated = increment(),
  commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}
const types = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean,
        booleanish,
        commaOrSpaceSeparated,
        commaSeparated,
        number,
        overloadedBoolean,
        spaceSeparated,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  checks = Object.keys(types);
class DefinedInfo extends Info {
  constructor(t, n, r, i) {
    let o = -1;
    if ((super(t, n), mark(this, "space", i), typeof r == "number"))
      for (; ++o < checks.length; ) {
        const a = checks[o];
        mark(this, checks[o], (r & types[a]) === types[a]);
      }
  }
}
DefinedInfo.prototype.defined = !0;
function mark(e, t, n) {
  n && (e[t] = n);
}
function create(e) {
  const t = {},
    n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new DefinedInfo(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty &&
      e.mustUseProperty.includes(r) &&
      (o.mustUseProperty = !0),
      (t[r] = o),
      (n[normalize$1(r)] = r),
      (n[normalize$1(o.attribute)] = r);
  }
  return new Schema(t, n, e.space);
}
const aria = create({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null,
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
});
function caseSensitiveTransform(e, t) {
  return t in e ? e[t] : t;
}
function caseInsensitiveTransform(e, t) {
  return caseSensitiveTransform(e, t.toLowerCase());
}
const html$2 = create({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: commaSeparated,
      acceptCharset: spaceSeparated,
      accessKey: spaceSeparated,
      action: null,
      allow: null,
      allowFullScreen: boolean,
      allowPaymentRequest: boolean,
      allowUserMedia: boolean,
      alt: null,
      as: null,
      async: boolean,
      autoCapitalize: null,
      autoComplete: spaceSeparated,
      autoFocus: boolean,
      autoPlay: boolean,
      blocking: spaceSeparated,
      capture: null,
      charSet: null,
      checked: boolean,
      cite: null,
      className: spaceSeparated,
      cols: number,
      colSpan: null,
      content: null,
      contentEditable: booleanish,
      controls: boolean,
      controlsList: spaceSeparated,
      coords: number | commaSeparated,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: boolean,
      defer: boolean,
      dir: null,
      dirName: null,
      disabled: boolean,
      download: overloadedBoolean,
      draggable: booleanish,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: boolean,
      formTarget: null,
      headers: spaceSeparated,
      height: number,
      hidden: overloadedBoolean,
      high: number,
      href: null,
      hrefLang: null,
      htmlFor: spaceSeparated,
      httpEquiv: spaceSeparated,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: boolean,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: boolean,
      itemId: null,
      itemProp: spaceSeparated,
      itemRef: spaceSeparated,
      itemScope: boolean,
      itemType: spaceSeparated,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: boolean,
      low: number,
      manifest: null,
      max: null,
      maxLength: number,
      media: null,
      method: null,
      min: null,
      minLength: number,
      multiple: boolean,
      muted: boolean,
      name: null,
      nonce: null,
      noModule: boolean,
      noValidate: boolean,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: boolean,
      optimum: number,
      pattern: null,
      ping: spaceSeparated,
      placeholder: null,
      playsInline: boolean,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: boolean,
      referrerPolicy: null,
      rel: spaceSeparated,
      required: boolean,
      reversed: boolean,
      rows: number,
      rowSpan: number,
      sandbox: spaceSeparated,
      scope: null,
      scoped: boolean,
      seamless: boolean,
      selected: boolean,
      shadowRootClonable: boolean,
      shadowRootDelegatesFocus: boolean,
      shadowRootMode: null,
      shape: null,
      size: number,
      sizes: null,
      slot: null,
      span: number,
      spellCheck: booleanish,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: number,
      step: null,
      style: null,
      tabIndex: number,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: boolean,
      useMap: null,
      value: booleanish,
      width: number,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: spaceSeparated,
      axis: null,
      background: null,
      bgColor: null,
      border: number,
      borderColor: null,
      bottomMargin: number,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: boolean,
      declare: boolean,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: number,
      leftMargin: number,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: number,
      marginWidth: number,
      noResize: boolean,
      noHref: boolean,
      noShade: boolean,
      noWrap: boolean,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: number,
      rules: null,
      scheme: null,
      scrolling: booleanish,
      standby: null,
      summary: null,
      text: null,
      topMargin: number,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: number,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: boolean,
      disableRemotePlayback: boolean,
      prefix: null,
      property: null,
      results: number,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: caseInsensitiveTransform,
  }),
  svg$1 = create({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: commaOrSpaceSeparated,
      accentHeight: number,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: number,
      amplitude: number,
      arabicForm: null,
      ascent: number,
      attributeName: null,
      attributeType: null,
      azimuth: number,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: number,
      by: null,
      calcMode: null,
      capHeight: number,
      className: spaceSeparated,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: number,
      diffuseConstant: number,
      direction: null,
      display: null,
      dur: null,
      divisor: number,
      dominantBaseline: null,
      download: boolean,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: number,
      enableBackground: null,
      end: null,
      event: null,
      exponent: number,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: number,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: commaSeparated,
      g2: commaSeparated,
      glyphName: commaSeparated,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: number,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: number,
      horizOriginX: number,
      horizOriginY: number,
      id: null,
      ideographic: number,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: number,
      k: number,
      k1: number,
      k2: number,
      k3: number,
      k4: number,
      kernelMatrix: commaOrSpaceSeparated,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: number,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: number,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: number,
      overlineThickness: number,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: number,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: spaceSeparated,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: number,
      pointsAtY: number,
      pointsAtZ: number,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: commaOrSpaceSeparated,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: commaOrSpaceSeparated,
      rev: commaOrSpaceSeparated,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: commaOrSpaceSeparated,
      requiredFeatures: commaOrSpaceSeparated,
      requiredFonts: commaOrSpaceSeparated,
      requiredFormats: commaOrSpaceSeparated,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: number,
      specularExponent: number,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: number,
      strikethroughThickness: number,
      string: null,
      stroke: null,
      strokeDashArray: commaOrSpaceSeparated,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: number,
      strokeOpacity: number,
      strokeWidth: null,
      style: null,
      surfaceScale: number,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: commaOrSpaceSeparated,
      tabIndex: number,
      tableValues: null,
      target: null,
      targetX: number,
      targetY: number,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: commaOrSpaceSeparated,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: number,
      underlineThickness: number,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: number,
      values: null,
      vAlphabetic: number,
      vMathematical: number,
      vectorEffect: null,
      vHanging: number,
      vIdeographic: number,
      version: null,
      vertAdvY: number,
      vertOriginX: number,
      vertOriginY: number,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: number,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: caseSensitiveTransform,
  }),
  xlink = create({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
  }),
  xmlns = create({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: caseInsensitiveTransform,
  }),
  xml = create({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
  }),
  hastToReact = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  cap$1 = /[A-Z]/g,
  dash = /-[a-z]/g,
  valid = /^data[-\w.:]+$/i;
function find(e, t) {
  const n = normalize$1(t);
  let r = t,
    i = Info;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && valid.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(dash, camelcase);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!dash.test(o)) {
        let a = o.replace(cap$1, kebab);
        a.charAt(0) !== "-" && (a = "-" + a), (t = "data" + a);
      }
    }
    i = DefinedInfo;
  }
  return new i(r, t);
}
function kebab(e) {
  return "-" + e.toLowerCase();
}
function camelcase(e) {
  return e.charAt(1).toUpperCase();
}
const html$1 = merge([aria, html$2, xlink, xmlns, xml], "html"),
  svg = merge([aria, svg$1, xlink, xmlns, xml], "svg");
function stringify(e) {
  return e.join(" ").trim();
}
var cjs$1 = {},
  inlineStyleParser,
  hasRequiredInlineStyleParser;
function requireInlineStyleParser() {
  if (hasRequiredInlineStyleParser) return inlineStyleParser;
  hasRequiredInlineStyleParser = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    t = /\n/g,
    n = /^\s*/,
    r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    i = /^:\s*/,
    o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    a = /^[;\s]*/,
    c = /^\s+|\s+$/g,
    l = `
`,
    d = "/",
    p = "*",
    m = "",
    h = "comment",
    f = "declaration";
  inlineStyleParser = function (v, j) {
    if (typeof v != "string")
      throw new TypeError("First argument must be a string");
    if (!v) return [];
    j = j || {};
    var S = 1,
      C = 1;
    function k(B) {
      var M = B.match(t);
      M && (S += M.length);
      var Q = B.lastIndexOf(l);
      C = ~Q ? B.length - Q : C + B.length;
    }
    function _() {
      var B = { line: S, column: C };
      return function (M) {
        return (M.position = new P(B)), V(), M;
      };
    }
    function P(B) {
      (this.start = B),
        (this.end = { line: S, column: C }),
        (this.source = j.source);
    }
    P.prototype.content = v;
    function x(B) {
      var M = new Error(j.source + ":" + S + ":" + C + ": " + B);
      if (
        ((M.reason = B),
        (M.filename = j.source),
        (M.line = S),
        (M.column = C),
        (M.source = v),
        !j.silent)
      )
        throw M;
    }
    function Y(B) {
      var M = B.exec(v);
      if (M) {
        var Q = M[0];
        return k(Q), (v = v.slice(Q.length)), M;
      }
    }
    function V() {
      Y(n);
    }
    function H(B) {
      var M;
      for (B = B || []; (M = K()); ) M !== !1 && B.push(M);
      return B;
    }
    function K() {
      var B = _();
      if (!(d != v.charAt(0) || p != v.charAt(1))) {
        for (
          var M = 2;
          m != v.charAt(M) && (p != v.charAt(M) || d != v.charAt(M + 1));

        )
          ++M;
        if (((M += 2), m === v.charAt(M - 1)))
          return x("End of comment missing");
        var Q = v.slice(2, M - 2);
        return (
          (C += 2), k(Q), (v = v.slice(M)), (C += 2), B({ type: h, comment: Q })
        );
      }
    }
    function W() {
      var B = _(),
        M = Y(r);
      if (M) {
        if ((K(), !Y(i))) return x("property missing ':'");
        var Q = Y(o),
          ye = B({
            type: f,
            property: b(M[0].replace(e, m)),
            value: Q ? b(Q[0].replace(e, m)) : m,
          });
        return Y(a), ye;
      }
    }
    function L() {
      var B = [];
      H(B);
      for (var M; (M = W()); ) M !== !1 && (B.push(M), H(B));
      return B;
    }
    return V(), L();
  };
  function b(v) {
    return v ? v.replace(c, m) : m;
  }
  return inlineStyleParser;
}
var hasRequiredCjs$1;
function requireCjs$1() {
  if (hasRequiredCjs$1) return cjs$1;
  hasRequiredCjs$1 = 1;
  var e =
    (cjs$1 && cjs$1.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  Object.defineProperty(cjs$1, "__esModule", { value: !0 }),
    (cjs$1.default = n);
  var t = e(requireInlineStyleParser());
  function n(r, i) {
    var o = null;
    if (!r || typeof r != "string") return o;
    var a = (0, t.default)(r),
      c = typeof i == "function";
    return (
      a.forEach(function (l) {
        if (l.type === "declaration") {
          var d = l.property,
            p = l.value;
          c ? i(d, p, l) : p && ((o = o || {}), (o[d] = p));
        }
      }),
      o
    );
  }
  return cjs$1;
}
var utilities = {},
  hasRequiredUtilities;
function requireUtilities() {
  if (hasRequiredUtilities) return utilities;
  (hasRequiredUtilities = 1),
    Object.defineProperty(utilities, "__esModule", { value: !0 }),
    (utilities.camelCase = void 0);
  var e = /^--[a-zA-Z0-9_-]+$/,
    t = /-([a-z])/g,
    n = /^[^-]+$/,
    r = /^-(webkit|moz|ms|o|khtml)-/,
    i = /^-(ms)-/,
    o = function (d) {
      return !d || n.test(d) || e.test(d);
    },
    a = function (d, p) {
      return p.toUpperCase();
    },
    c = function (d, p) {
      return "".concat(p, "-");
    },
    l = function (d, p) {
      return (
        p === void 0 && (p = {}),
        o(d)
          ? d
          : ((d = d.toLowerCase()),
            p.reactCompat ? (d = d.replace(i, c)) : (d = d.replace(r, c)),
            d.replace(t, a))
      );
    };
  return (utilities.camelCase = l), utilities;
}
var cjs, hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var e =
      (cjs && cjs.__importDefault) ||
      function (i) {
        return i && i.__esModule ? i : { default: i };
      },
    t = e(requireCjs$1()),
    n = requireUtilities();
  function r(i, o) {
    var a = {};
    return (
      !i ||
        typeof i != "string" ||
        (0, t.default)(i, function (c, l) {
          c && l && (a[(0, n.camelCase)(c, o)] = l);
        }),
      a
    );
  }
  return (r.default = r), (cjs = r), cjs;
}
var cjsExports = requireCjs();
const styleToJs = getDefaultExportFromCjs(cjsExports),
  pointEnd = point$2("end"),
  pointStart = point$2("start");
function point$2(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function position$1(e) {
  const t = pointStart(e),
    n = pointEnd(e);
  if (t && n) return { start: t, end: n };
}
function stringifyPosition(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? position(e.position)
    : "start" in e || "end" in e
    ? position(e)
    : "line" in e || "column" in e
    ? point$1(e)
    : "";
}
function point$1(e) {
  return index$1(e && e.line) + ":" + index$1(e && e.column);
}
function position(e) {
  return point$1(e && e.start) + "-" + point$1(e && e.end);
}
function index$1(e) {
  return e && typeof e == "number" ? e : 1;
}
class VFileMessage extends Error {
  constructor(t, n, r) {
    super(), typeof n == "string" && ((r = n), (n = void 0));
    let i = "",
      o = {},
      a = !1;
    if (
      (n &&
        ("line" in n && "column" in n
          ? (o = { place: n })
          : "start" in n && "end" in n
          ? (o = { place: n })
          : "type" in n
          ? (o = { ancestors: [n], place: n.position })
          : (o = { ...n })),
      typeof t == "string"
        ? (i = t)
        : !o.cause && t && ((a = !0), (i = t.message), (o.cause = t)),
      !o.ruleId && !o.source && typeof r == "string")
    ) {
      const l = r.indexOf(":");
      l === -1
        ? (o.ruleId = r)
        : ((o.source = r.slice(0, l)), (o.ruleId = r.slice(l + 1)));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const l = o.ancestors[o.ancestors.length - 1];
      l && (o.place = l.position);
    }
    const c = o.place && "start" in o.place ? o.place.start : o.place;
    (this.ancestors = o.ancestors || void 0),
      (this.cause = o.cause || void 0),
      (this.column = c ? c.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = i),
      (this.line = c ? c.line : void 0),
      (this.name = stringifyPosition(o.place) || "1:1"),
      (this.place = o.place || void 0),
      (this.reason = this.message),
      (this.ruleId = o.ruleId || void 0),
      (this.source = o.source || void 0),
      (this.stack =
        a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0);
  }
}
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;
const own$3 = {}.hasOwnProperty,
  emptyMap = new Map(),
  cap = /[A-Z]/g,
  tableElements = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  tableCellElement = new Set(["td", "th"]),
  docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function toJsxRuntime(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = developmentCreate(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = productionCreate(n, t.jsx, t.jsxs);
  }
  const i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || "react",
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === "svg" ? svg : html$1,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    o = one$1(i, e, void 0);
  return o && typeof o != "string"
    ? o
    : i.create(e, i.Fragment, { children: o || void 0 }, void 0);
}
function one$1(e, t, n) {
  if (t.type === "element") return element$1(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return mdxExpression(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return mdxJsxElement(e, t, n);
  if (t.type === "mdxjsEsm") return mdxEsm(e, t);
  if (t.type === "root") return root$1(e, t, n);
  if (t.type === "text") return text$3(e, t);
}
function element$1(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" &&
    r.space === "html" &&
    ((i = svg), (e.schema = i)),
    e.ancestors.push(t);
  const o = findComponentFromName(e, t.tagName, !1),
    a = createElementProps(e, t);
  let c = createChildren(e, t);
  return (
    tableElements.has(t.tagName) &&
      (c = c.filter(function (l) {
        return typeof l == "string" ? !whitespace(l) : !0;
      })),
    addNode(e, a, o, t),
    addChildren(a, c),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, a, n)
  );
}
function mdxExpression(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, e.evaluater.evaluateExpression(r.expression);
  }
  crashEstree(e, t.position);
}
function mdxEsm(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  crashEstree(e, t.position);
}
function mdxJsxElement(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && ((i = svg), (e.schema = i)),
    e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : findComponentFromName(e, t.name, !0),
    a = createJsxElementProps(e, t),
    c = createChildren(e, t);
  return (
    addNode(e, a, o, t),
    addChildren(a, c),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, a, n)
  );
}
function root$1(e, t, n) {
  const r = {};
  return addChildren(r, createChildren(e, t)), e.create(t, e.Fragment, r, n);
}
function text$3(e, t) {
  return t.value;
}
function addNode(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function addChildren(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function productionCreate(e, t, n) {
  return r;
  function r(i, o, a, c) {
    const d = Array.isArray(a.children) ? n : t;
    return c ? d(o, a, c) : d(o, a);
  }
}
function developmentCreate(e, t) {
  return n;
  function n(r, i, o, a) {
    const c = Array.isArray(o.children),
      l = pointStart(r);
    return t(
      i,
      o,
      a,
      c,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: e,
        lineNumber: l ? l.line : void 0,
      },
      void 0
    );
  }
}
function createElementProps(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && own$3.call(t.properties, i)) {
      const o = createProperty(e, i, t.properties[i]);
      if (o) {
        const [a, c] = o;
        e.tableCellAlignToStyle &&
        a === "align" &&
        typeof c == "string" &&
        tableCellElement.has(t.tagName)
          ? (r = c)
          : (n[a] = c);
      }
    }
  if (r) {
    const o = n.style || (n.style = {});
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function createJsxElementProps(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const c = a.properties[0];
        c.type, Object.assign(n, e.evaluater.evaluateExpression(c.argument));
      } else crashEstree(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const c = r.value.data.estree.body[0];
          c.type, (o = e.evaluater.evaluateExpression(c.expression));
        } else crashEstree(e, t.position);
      else o = r.value === null ? !0 : r.value;
      n[i] = o;
    }
  return n;
}
function createChildren(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : emptyMap;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let a;
    if (e.passKeys) {
      const l =
        o.type === "element"
          ? o.tagName
          : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement"
          ? o.name
          : void 0;
      if (l) {
        const d = i.get(l) || 0;
        (a = l + "-" + d), i.set(l, d + 1);
      }
    }
    const c = one$1(e, o, a);
    c !== void 0 && n.push(c);
  }
  return n;
}
function createProperty(e, t, n) {
  const r = find(e.schema, t);
  if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) &&
        (n = r.commaSeparated ? stringify$1(n) : stringify(n)),
      r.property === "style")
    ) {
      let i = typeof n == "object" ? n : parseStyle(e, String(n));
      return (
        e.stylePropertyNameCase === "css" &&
          (i = transformStylesToCssCasing(i)),
        ["style", i]
      );
    }
    return [
      e.elementAttributeNameCase === "react" && r.space
        ? hastToReact[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function parseStyle(e, t) {
  try {
    return styleToJs(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle) return {};
    const r = n,
      i = new VFileMessage("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: r,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime",
      });
    throw (
      ((i.file = e.filePath || void 0),
      (i.url = docs + "#cannot-parse-style-attribute"),
      i)
    );
  }
}
function findComponentFromName(e, t, n) {
  let r;
  if (!n) r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1,
      a;
    for (; ++o < i.length; ) {
      const c = name(i[o])
        ? { type: "Identifier", name: i[o] }
        : { type: "Literal", value: i[o] };
      a = a
        ? {
            type: "MemberExpression",
            object: a,
            property: c,
            computed: !!(o && c.type === "Literal"),
            optional: !1,
          }
        : c;
    }
    r = a;
  } else
    r =
      name(t) && !/^[a-z]/.test(t)
        ? { type: "Identifier", name: t }
        : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = r.value;
    return own$3.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  crashEstree(e);
}
function crashEstree(e, t) {
  const n = new VFileMessage(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime",
    }
  );
  throw (
    ((n.file = e.filePath || void 0),
    (n.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater"),
    n)
  );
}
function transformStylesToCssCasing(e) {
  const t = {};
  let n;
  for (n in e) own$3.call(e, n) && (t[transformStyleToCssCasing(n)] = e[n]);
  return t;
}
function transformStyleToCssCasing(e) {
  let t = e.replace(cap, toDash);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function toDash(e) {
  return "-" + e.toLowerCase();
}
const urlAttributes = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  emptyOptions$1 = {};
function toString$1(e, t) {
  const n = emptyOptions$1,
    r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return one(e, r, i);
}
function one(e, t, n) {
  if (node(e)) {
    if ("value" in e) return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return all(e.children, t, n);
  }
  return Array.isArray(e) ? all(e, t, n) : "";
}
function all(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = one(e[i], t, n);
  return r.join("");
}
function node(e) {
  return !!(e && typeof e == "object");
}
const element = document.createElement("i");
function decodeNamedCharacterReference(e) {
  const t = "&" + e + ";";
  element.innerHTML = t;
  const n = element.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
    ? !1
    : n;
}
function splice(e, t, n, r) {
  const i = e.length;
  let o = 0,
    a;
  if (
    (t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (a = Array.from(r)), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      (a = r.slice(o, o + 1e4)),
        a.unshift(t, 0),
        e.splice(...a),
        (o += 1e4),
        (t += 1e4);
}
function push(e, t) {
  return e.length > 0 ? (splice(e, e.length, 0, t), e) : t;
}
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) syntaxExtension(t, e[n]);
  return t;
}
function syntaxExtension(e, t) {
  let n;
  for (n in t) {
    const i = (hasOwnProperty.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      o = t[n];
    let a;
    if (o)
      for (a in o) {
        hasOwnProperty.call(i, a) || (i[a] = []);
        const c = o[a];
        constructs(i[a], Array.isArray(c) ? c : c ? [c] : []);
      }
  }
}
function constructs(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
  splice(e, 0, 0, r);
}
function decodeNumericCharacterReference(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? "�"
    : String.fromCodePoint(n);
}
function normalizeIdentifier(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const asciiAlpha = regexCheck(/[A-Za-z]/),
  asciiAlphanumeric = regexCheck(/[\dA-Za-z]/),
  asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(e) {
  return e !== null && (e < 32 || e === 127);
}
const asciiDigit = regexCheck(/\d/),
  asciiHexDigit = regexCheck(/[\dA-Fa-f]/),
  asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(e) {
  return e !== null && e < -2;
}
function markdownLineEndingOrSpace(e) {
  return e !== null && (e < 0 || e === 32);
}
function markdownSpace(e) {
  return e === -2 || e === -1 || e === 32;
}
const unicodePunctuation = regexCheck(new RegExp("\\p{P}|\\p{S}", "u")),
  unicodeWhitespace = regexCheck(/\s/);
function regexCheck(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function normalizeUri(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (
      o === 37 &&
      asciiAlphanumeric(e.charCodeAt(n + 1)) &&
      asciiAlphanumeric(e.charCodeAt(n + 2))
    )
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
        (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const c = e.charCodeAt(n + 1);
      o < 56320 && c > 56319 && c < 57344
        ? ((a = String.fromCharCode(o, c)), (i = 1))
        : (a = "�");
    } else a = String.fromCharCode(o);
    a &&
      (t.push(e.slice(r, n), encodeURIComponent(a)), (r = n + i + 1), (a = "")),
      i && ((n += i), (i = 0));
  }
  return t.join("") + e.slice(r);
}
function factorySpace(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(l) {
    return markdownSpace(l) ? (e.enter(n), c(l)) : t(l);
  }
  function c(l) {
    return markdownSpace(l) && o++ < i ? (e.consume(l), c) : (e.exit(n), t(l));
  }
}
const content$1 = { tokenize: initializeContent };
function initializeContent(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(c) {
    if (c === null) {
      e.consume(c);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(c),
      e.exit("lineEnding"),
      factorySpace(e, t, "linePrefix")
    );
  }
  function i(c) {
    return e.enter("paragraph"), o(c);
  }
  function o(c) {
    const l = e.enter("chunkText", { contentType: "text", previous: n });
    return n && (n.next = l), (n = l), a(c);
  }
  function a(c) {
    if (c === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(c);
      return;
    }
    return markdownLineEnding(c)
      ? (e.consume(c), e.exit("chunkText"), o)
      : (e.consume(c), a);
  }
}
const document$2 = { tokenize: initializeDocument },
  containerConstruct = { tokenize: tokenizeContainer };
function initializeDocument(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    o,
    a;
  return c;
  function c(k) {
    if (r < n.length) {
      const _ = n[r];
      return (t.containerState = _[1]), e.attempt(_[0].continuation, l, d)(k);
    }
    return d(k);
  }
  function l(k) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), i && C();
      const _ = t.events.length;
      let P = _,
        x;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          x = t.events[P][1].end;
          break;
        }
      S(r);
      let Y = _;
      for (; Y < t.events.length; ) (t.events[Y][1].end = { ...x }), Y++;
      return (
        splice(t.events, P + 1, 0, t.events.slice(_)),
        (t.events.length = Y),
        d(k)
      );
    }
    return c(k);
  }
  function d(k) {
    if (r === n.length) {
      if (!i) return h(k);
      if (i.currentConstruct && i.currentConstruct.concrete) return b(k);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return (t.containerState = {}), e.check(containerConstruct, p, m)(k);
  }
  function p(k) {
    return i && C(), S(r), h(k);
  }
  function m(k) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (a = t.now().offset), b(k)
    );
  }
  function h(k) {
    return (t.containerState = {}), e.attempt(containerConstruct, f, b)(k);
  }
  function f(k) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(k);
  }
  function b(k) {
    if (k === null) {
      i && C(), S(0), e.consume(k);
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: o }),
      v(k)
    );
  }
  function v(k) {
    if (k === null) {
      j(e.exit("chunkFlow"), !0), S(0), e.consume(k);
      return;
    }
    return markdownLineEnding(k)
      ? (e.consume(k),
        j(e.exit("chunkFlow")),
        (r = 0),
        (t.interrupt = void 0),
        c)
      : (e.consume(k), v);
  }
  function j(k, _) {
    const P = t.sliceStream(k);
    if (
      (_ && P.push(null),
      (k.previous = o),
      o && (o.next = k),
      (o = k),
      i.defineSkip(k.start),
      i.write(P),
      t.parser.lazy[k.start.line])
    ) {
      let x = i.events.length;
      for (; x--; )
        if (
          i.events[x][1].start.offset < a &&
          (!i.events[x][1].end || i.events[x][1].end.offset > a)
        )
          return;
      const Y = t.events.length;
      let V = Y,
        H,
        K;
      for (; V--; )
        if (t.events[V][0] === "exit" && t.events[V][1].type === "chunkFlow") {
          if (H) {
            K = t.events[V][1].end;
            break;
          }
          H = !0;
        }
      for (S(r), x = Y; x < t.events.length; )
        (t.events[x][1].end = { ...K }), x++;
      splice(t.events, V + 1, 0, t.events.slice(Y)), (t.events.length = x);
    }
  }
  function S(k) {
    let _ = n.length;
    for (; _-- > k; ) {
      const P = n[_];
      (t.containerState = P[1]), P[0].exit.call(t, e);
    }
    n.length = k;
  }
  function C() {
    i.write([null]),
      (o = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function tokenizeContainer(e, t, n) {
  return factorySpace(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function classifyCharacter(e) {
  if (e === null || markdownLineEndingOrSpace(e) || unicodeWhitespace(e))
    return 1;
  if (unicodePunctuation(e)) return 2;
}
function resolveAll(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && ((t = o(t, n)), r.push(o));
  }
  return t;
}
const attention = {
  name: "attention",
  resolveAll: resolveAllAttention,
  tokenize: tokenizeAttention,
};
function resolveAllAttention(e, t) {
  let n = -1,
    r,
    i,
    o,
    a,
    c,
    l,
    d,
    p;
  for (; ++n < e.length; )
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          l =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const m = { ...e[r][1].end },
            h = { ...e[n][1].start };
          movePoint(m, -l),
            movePoint(h, l),
            (a = {
              type: l > 1 ? "strongSequence" : "emphasisSequence",
              start: m,
              end: { ...e[r][1].end },
            }),
            (c = {
              type: l > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...e[n][1].start },
              end: h,
            }),
            (o = {
              type: l > 1 ? "strongText" : "emphasisText",
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = {
              type: l > 1 ? "strong" : "emphasis",
              start: { ...a.start },
              end: { ...c.end },
            }),
            (e[r][1].end = { ...a.start }),
            (e[n][1].start = { ...c.end }),
            (d = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (d = push(d, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (d = push(d, [
              ["enter", i, t],
              ["enter", a, t],
              ["exit", a, t],
              ["enter", o, t],
            ])),
            (d = push(
              d,
              resolveAll(
                t.parser.constructs.insideSpan.null,
                e.slice(r + 1, n),
                t
              )
            )),
            (d = push(d, [
              ["exit", o, t],
              ["enter", c, t],
              ["exit", c, t],
              ["exit", i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((p = 2),
                (d = push(d, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (p = 0),
            splice(e, r - 1, n - r + 3, d),
            (n = r + d.length - p - 2);
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function tokenizeAttention(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = classifyCharacter(r);
  let o;
  return a;
  function a(l) {
    return (o = l), e.enter("attentionSequence"), c(l);
  }
  function c(l) {
    if (l === o) return e.consume(l), c;
    const d = e.exit("attentionSequence"),
      p = classifyCharacter(l),
      m = !p || (p === 2 && i) || n.includes(l),
      h = !i || (i === 2 && p) || n.includes(r);
    return (
      (d._open = !!(o === 42 ? m : m && (i || !h))),
      (d._close = !!(o === 42 ? h : h && (p || !m))),
      t(l)
    );
  }
}
function movePoint(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const autolink = { name: "autolink", tokenize: tokenizeAutolink };
function tokenizeAutolink(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(f),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      o
    );
  }
  function o(f) {
    return asciiAlpha(f) ? (e.consume(f), a) : f === 64 ? n(f) : d(f);
  }
  function a(f) {
    return f === 43 || f === 45 || f === 46 || asciiAlphanumeric(f)
      ? ((r = 1), c(f))
      : d(f);
  }
  function c(f) {
    return f === 58
      ? (e.consume(f), (r = 0), l)
      : (f === 43 || f === 45 || f === 46 || asciiAlphanumeric(f)) && r++ < 32
      ? (e.consume(f), c)
      : ((r = 0), d(f));
  }
  function l(f) {
    return f === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(f),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : f === null || f === 32 || f === 60 || asciiControl(f)
      ? n(f)
      : (e.consume(f), l);
  }
  function d(f) {
    return f === 64
      ? (e.consume(f), p)
      : asciiAtext(f)
      ? (e.consume(f), d)
      : n(f);
  }
  function p(f) {
    return asciiAlphanumeric(f) ? m(f) : n(f);
  }
  function m(f) {
    return f === 46
      ? (e.consume(f), (r = 0), p)
      : f === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
        e.enter("autolinkMarker"),
        e.consume(f),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : h(f);
  }
  function h(f) {
    if ((f === 45 || asciiAlphanumeric(f)) && r++ < 63) {
      const b = f === 45 ? h : m;
      return e.consume(f), b;
    }
    return n(f);
  }
}
const blankLine = { partial: !0, tokenize: tokenizeBlankLine };
function tokenizeBlankLine(e, t, n) {
  return r;
  function r(o) {
    return markdownSpace(o) ? factorySpace(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || markdownLineEnding(o) ? t(o) : n(o);
  }
}
const blockQuote = {
  continuation: { tokenize: tokenizeBlockQuoteContinuation },
  exit,
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
};
function tokenizeBlockQuoteStart(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const c = r.containerState;
      return (
        c.open || (e.enter("blockQuote", { _container: !0 }), (c.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(a),
        e.exit("blockQuoteMarker"),
        o
      );
    }
    return n(a);
  }
  function o(a) {
    return markdownSpace(a)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(a),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(a));
  }
}
function tokenizeBlockQuoteContinuation(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return markdownSpace(a)
      ? factorySpace(
          e,
          o,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(a)
      : o(a);
  }
  function o(a) {
    return e.attempt(blockQuote, t, n)(a);
  }
}
function exit(e) {
  e.exit("blockQuote");
}
const characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape,
};
function tokenizeCharacterEscape(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(o),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(o) {
    return asciiPunctuation(o)
      ? (e.enter("characterEscapeValue"),
        e.consume(o),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(o);
  }
}
const characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference,
};
function tokenizeCharacterReference(e, t, n) {
  const r = this;
  let i = 0,
    o,
    a;
  return c;
  function c(m) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(m),
      e.exit("characterReferenceMarker"),
      l
    );
  }
  function l(m) {
    return m === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(m),
        e.exit("characterReferenceMarkerNumeric"),
        d)
      : (e.enter("characterReferenceValue"),
        (o = 31),
        (a = asciiAlphanumeric),
        p(m));
  }
  function d(m) {
    return m === 88 || m === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(m),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (o = 6),
        (a = asciiHexDigit),
        p)
      : (e.enter("characterReferenceValue"), (o = 7), (a = asciiDigit), p(m));
  }
  function p(m) {
    if (m === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return a === asciiAlphanumeric &&
        !decodeNamedCharacterReference(r.sliceSerialize(h))
        ? n(m)
        : (e.enter("characterReferenceMarker"),
          e.consume(m),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return a(m) && i++ < o ? (e.consume(m), p) : n(m);
  }
}
const nonLazyContinuation = {
    partial: !0,
    tokenize: tokenizeNonLazyContinuation,
  },
  codeFenced = {
    concrete: !0,
    name: "codeFenced",
    tokenize: tokenizeCodeFenced,
  };
function tokenizeCodeFenced(e, t, n) {
  const r = this,
    i = { partial: !0, tokenize: P };
  let o = 0,
    a = 0,
    c;
  return l;
  function l(x) {
    return d(x);
  }
  function d(x) {
    const Y = r.events[r.events.length - 1];
    return (
      (o =
        Y && Y[1].type === "linePrefix"
          ? Y[2].sliceSerialize(Y[1], !0).length
          : 0),
      (c = x),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      p(x)
    );
  }
  function p(x) {
    return x === c
      ? (a++, e.consume(x), p)
      : a < 3
      ? n(x)
      : (e.exit("codeFencedFenceSequence"),
        markdownSpace(x) ? factorySpace(e, m, "whitespace")(x) : m(x));
  }
  function m(x) {
    return x === null || markdownLineEnding(x)
      ? (e.exit("codeFencedFence"),
        r.interrupt ? t(x) : e.check(nonLazyContinuation, v, _)(x))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        h(x));
  }
  function h(x) {
    return x === null || markdownLineEnding(x)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), m(x))
      : markdownSpace(x)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        factorySpace(e, f, "whitespace")(x))
      : x === 96 && x === c
      ? n(x)
      : (e.consume(x), h);
  }
  function f(x) {
    return x === null || markdownLineEnding(x)
      ? m(x)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        b(x));
  }
  function b(x) {
    return x === null || markdownLineEnding(x)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(x))
      : x === 96 && x === c
      ? n(x)
      : (e.consume(x), b);
  }
  function v(x) {
    return e.attempt(i, _, j)(x);
  }
  function j(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), S;
  }
  function S(x) {
    return o > 0 && markdownSpace(x)
      ? factorySpace(e, C, "linePrefix", o + 1)(x)
      : C(x);
  }
  function C(x) {
    return x === null || markdownLineEnding(x)
      ? e.check(nonLazyContinuation, v, _)(x)
      : (e.enter("codeFlowValue"), k(x));
  }
  function k(x) {
    return x === null || markdownLineEnding(x)
      ? (e.exit("codeFlowValue"), C(x))
      : (e.consume(x), k);
  }
  function _(x) {
    return e.exit("codeFenced"), t(x);
  }
  function P(x, Y, V) {
    let H = 0;
    return K;
    function K(Q) {
      return x.enter("lineEnding"), x.consume(Q), x.exit("lineEnding"), W;
    }
    function W(Q) {
      return (
        x.enter("codeFencedFence"),
        markdownSpace(Q)
          ? factorySpace(
              x,
              L,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(Q)
          : L(Q)
      );
    }
    function L(Q) {
      return Q === c ? (x.enter("codeFencedFenceSequence"), B(Q)) : V(Q);
    }
    function B(Q) {
      return Q === c
        ? (H++, x.consume(Q), B)
        : H >= a
        ? (x.exit("codeFencedFenceSequence"),
          markdownSpace(Q) ? factorySpace(x, M, "whitespace")(Q) : M(Q))
        : V(Q);
    }
    function M(Q) {
      return Q === null || markdownLineEnding(Q)
        ? (x.exit("codeFencedFence"), Y(Q))
        : V(Q);
    }
  }
}
function tokenizeNonLazyContinuation(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null
      ? n(a)
      : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const codeIndented = { name: "codeIndented", tokenize: tokenizeCodeIndented },
  furtherStart = { partial: !0, tokenize: tokenizeFurtherStart };
function tokenizeCodeIndented(e, t, n) {
  const r = this;
  return i;
  function i(d) {
    return e.enter("codeIndented"), factorySpace(e, o, "linePrefix", 5)(d);
  }
  function o(d) {
    const p = r.events[r.events.length - 1];
    return p &&
      p[1].type === "linePrefix" &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? a(d)
      : n(d);
  }
  function a(d) {
    return d === null
      ? l(d)
      : markdownLineEnding(d)
      ? e.attempt(furtherStart, a, l)(d)
      : (e.enter("codeFlowValue"), c(d));
  }
  function c(d) {
    return d === null || markdownLineEnding(d)
      ? (e.exit("codeFlowValue"), a(d))
      : (e.consume(d), c);
  }
  function l(d) {
    return e.exit("codeIndented"), t(d);
  }
}
function tokenizeFurtherStart(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line]
      ? n(a)
      : markdownLineEnding(a)
      ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i)
      : factorySpace(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const c = r.events[r.events.length - 1];
    return c &&
      c[1].type === "linePrefix" &&
      c[2].sliceSerialize(c[1], !0).length >= 4
      ? t(a)
      : markdownLineEnding(a)
      ? i(a)
      : n(a);
  }
}
const codeText = {
  name: "codeText",
  previous,
  resolve: resolveCodeText,
  tokenize: tokenizeCodeText,
};
function resolveCodeText(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        (e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2);
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function previous(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function tokenizeCodeText(e, t, n) {
  let r = 0,
    i,
    o;
  return a;
  function a(m) {
    return e.enter("codeText"), e.enter("codeTextSequence"), c(m);
  }
  function c(m) {
    return m === 96
      ? (e.consume(m), r++, c)
      : (e.exit("codeTextSequence"), l(m));
  }
  function l(m) {
    return m === null
      ? n(m)
      : m === 32
      ? (e.enter("space"), e.consume(m), e.exit("space"), l)
      : m === 96
      ? ((o = e.enter("codeTextSequence")), (i = 0), p(m))
      : markdownLineEnding(m)
      ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), l)
      : (e.enter("codeTextData"), d(m));
  }
  function d(m) {
    return m === null || m === 32 || m === 96 || markdownLineEnding(m)
      ? (e.exit("codeTextData"), l(m))
      : (e.consume(m), d);
  }
  function p(m) {
    return m === 96
      ? (e.consume(m), i++, p)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), t(m))
      : ((o.type = "codeTextData"), d(m));
  }
}
class SpliceBuffer {
  constructor(t) {
    (this.left = t ? [...t] : []), (this.right = []);
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          t +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      );
    return t < this.left.length
      ? this.left[t]
      : this.right[this.right.length - t + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(t, r)
      : t > this.left.length
      ? this.right
          .slice(
            this.right.length - r + this.left.length,
            this.right.length - t + this.left.length
          )
          .reverse()
      : this.left
          .slice(t)
          .concat(
            this.right.slice(this.right.length - r + this.left.length).reverse()
          );
  }
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(
      this.right.length - i,
      Number.POSITIVE_INFINITY
    );
    return r && chunkedPush(this.left, r), o.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), chunkedPush(this.left, t);
  }
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  unshiftMany(t) {
    this.setCursor(0), chunkedPush(this.right, t.reverse());
  }
  setCursor(t) {
    if (
      !(
        t === this.left.length ||
        (t > this.left.length && this.right.length === 0) ||
        (t < 0 && this.left.length === 0)
      )
    )
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        chunkedPush(this.right, n.reverse());
      } else {
        const n = this.right.splice(
          this.left.length + this.right.length - t,
          Number.POSITIVE_INFINITY
        );
        chunkedPush(this.left, n.reverse());
      }
  }
}
function chunkedPush(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
}
function subtokenize(e) {
  const t = {};
  let n = -1,
    r,
    i,
    o,
    a,
    c,
    l,
    d;
  const p = new SpliceBuffer(e);
  for (; ++n < p.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = p.get(n)),
      n &&
        r[1].type === "chunkFlow" &&
        p.get(n - 1)[1].type === "listItemPrefix" &&
        ((l = r[1]._tokenizer.events),
        (o = 0),
        o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2),
        o < l.length && l[o][1].type === "content"))
    )
      for (; ++o < l.length && l[o][1].type !== "content"; )
        l[o][1].type === "chunkText" &&
          ((l[o][1]._isInFirstContentOfListItem = !0), o++);
    if (r[0] === "enter")
      r[1].contentType &&
        (Object.assign(t, subcontent(p, n)), (n = t[n]), (d = !0));
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (
          ((a = p.get(o)),
          a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
        )
          a[0] === "enter" &&
            (i && (p.get(i)[1].type = "lineEndingBlank"),
            (a[1].type = "lineEnding"),
            (i = o));
        else if (
          !(a[1].type === "linePrefix" || a[1].type === "listItemIndent")
        )
          break;
      i &&
        ((r[1].end = { ...p.get(i)[1].start }),
        (c = p.slice(i, n)),
        c.unshift(r),
        p.splice(i, n - i + 1, c));
    }
  }
  return splice(e, 0, Number.POSITIVE_INFINITY, p.slice(0)), !d;
}
function subcontent(e, t) {
  const n = e.get(t)[1],
    r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let a = n._tokenizer;
  a ||
    ((a = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const c = a.events,
    l = [],
    d = {};
  let p,
    m,
    h = -1,
    f = n,
    b = 0,
    v = 0;
  const j = [v];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; );
    o.push(i),
      f._tokenizer ||
        ((p = r.sliceStream(f)),
        f.next || p.push(null),
        m && a.defineSkip(f.start),
        f._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = !0),
        a.write(p),
        f._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = void 0)),
      (m = f),
      (f = f.next);
  }
  for (f = n; ++h < c.length; )
    c[h][0] === "exit" &&
      c[h - 1][0] === "enter" &&
      c[h][1].type === c[h - 1][1].type &&
      c[h][1].start.line !== c[h][1].end.line &&
      ((v = h + 1),
      j.push(v),
      (f._tokenizer = void 0),
      (f.previous = void 0),
      (f = f.next));
  for (
    a.events = [],
      f ? ((f._tokenizer = void 0), (f.previous = void 0)) : j.pop(),
      h = j.length;
    h--;

  ) {
    const S = c.slice(j[h], j[h + 1]),
      C = o.pop();
    l.push([C, C + S.length - 1]), e.splice(C, 2, S);
  }
  for (l.reverse(), h = -1; ++h < l.length; )
    (d[b + l[h][0]] = b + l[h][1]), (b += l[h][1] - l[h][0] - 1);
  return d;
}
const content = { resolve: resolveContent, tokenize: tokenizeContent },
  continuationConstruct = { partial: !0, tokenize: tokenizeContinuation };
function resolveContent(e) {
  return subtokenize(e), e;
}
function tokenizeContent(e, t) {
  let n;
  return r;
  function r(c) {
    return (
      e.enter("content"),
      (n = e.enter("chunkContent", { contentType: "content" })),
      i(c)
    );
  }
  function i(c) {
    return c === null
      ? o(c)
      : markdownLineEnding(c)
      ? e.check(continuationConstruct, a, o)(c)
      : (e.consume(c), i);
  }
  function o(c) {
    return e.exit("chunkContent"), e.exit("content"), t(c);
  }
  function a(c) {
    return (
      e.consume(c),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function tokenizeContinuation(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      factorySpace(e, o, "linePrefix")
    );
  }
  function o(a) {
    if (a === null || markdownLineEnding(a)) return n(a);
    const c = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      c &&
      c[1].type === "linePrefix" &&
      c[2].sliceSerialize(c[1], !0).length >= 4
      ? t(a)
      : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function factoryDestination(e, t, n, r, i, o, a, c, l) {
  const d = l || Number.POSITIVE_INFINITY;
  let p = 0;
  return m;
  function m(S) {
    return S === 60
      ? (e.enter(r), e.enter(i), e.enter(o), e.consume(S), e.exit(o), h)
      : S === null || S === 32 || S === 41 || asciiControl(S)
      ? n(S)
      : (e.enter(r),
        e.enter(a),
        e.enter(c),
        e.enter("chunkString", { contentType: "string" }),
        v(S));
  }
  function h(S) {
    return S === 62
      ? (e.enter(o), e.consume(S), e.exit(o), e.exit(i), e.exit(r), t)
      : (e.enter(c), e.enter("chunkString", { contentType: "string" }), f(S));
  }
  function f(S) {
    return S === 62
      ? (e.exit("chunkString"), e.exit(c), h(S))
      : S === null || S === 60 || markdownLineEnding(S)
      ? n(S)
      : (e.consume(S), S === 92 ? b : f);
  }
  function b(S) {
    return S === 60 || S === 62 || S === 92 ? (e.consume(S), f) : f(S);
  }
  function v(S) {
    return !p && (S === null || S === 41 || markdownLineEndingOrSpace(S))
      ? (e.exit("chunkString"), e.exit(c), e.exit(a), e.exit(r), t(S))
      : p < d && S === 40
      ? (e.consume(S), p++, v)
      : S === 41
      ? (e.consume(S), p--, v)
      : S === null || S === 32 || S === 40 || asciiControl(S)
      ? n(S)
      : (e.consume(S), S === 92 ? j : v);
  }
  function j(S) {
    return S === 40 || S === 41 || S === 92 ? (e.consume(S), v) : v(S);
  }
}
function factoryLabel(e, t, n, r, i, o) {
  const a = this;
  let c = 0,
    l;
  return d;
  function d(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), p;
  }
  function p(f) {
    return c > 999 ||
      f === null ||
      f === 91 ||
      (f === 93 && !l) ||
      (f === 94 && !c && "_hiddenFootnoteSupport" in a.parser.constructs)
      ? n(f)
      : f === 93
      ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t)
      : markdownLineEnding(f)
      ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), p)
      : (e.enter("chunkString", { contentType: "string" }), m(f));
  }
  function m(f) {
    return f === null ||
      f === 91 ||
      f === 93 ||
      markdownLineEnding(f) ||
      c++ > 999
      ? (e.exit("chunkString"), p(f))
      : (e.consume(f), l || (l = !markdownSpace(f)), f === 92 ? h : m);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), c++, m) : m(f);
  }
}
function factoryTitle(e, t, n, r, i, o) {
  let a;
  return c;
  function c(h) {
    return h === 34 || h === 39 || h === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(h),
        e.exit(i),
        (a = h === 40 ? 41 : h),
        l)
      : n(h);
  }
  function l(h) {
    return h === a
      ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t)
      : (e.enter(o), d(h));
  }
  function d(h) {
    return h === a
      ? (e.exit(o), l(a))
      : h === null
      ? n(h)
      : markdownLineEnding(h)
      ? (e.enter("lineEnding"),
        e.consume(h),
        e.exit("lineEnding"),
        factorySpace(e, d, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), p(h));
  }
  function p(h) {
    return h === a || h === null || markdownLineEnding(h)
      ? (e.exit("chunkString"), d(h))
      : (e.consume(h), h === 92 ? m : p);
  }
  function m(h) {
    return h === a || h === 92 ? (e.consume(h), p) : p(h);
  }
}
function factoryWhitespace(e, t) {
  let n;
  return r;
  function r(i) {
    return markdownLineEnding(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
      : markdownSpace(i)
      ? factorySpace(e, r, n ? "linePrefix" : "lineSuffix")(i)
      : t(i);
  }
}
const definition = { name: "definition", tokenize: tokenizeDefinition },
  titleBefore = { partial: !0, tokenize: tokenizeTitleBefore };
function tokenizeDefinition(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), a(f);
  }
  function a(f) {
    return factoryLabel.call(
      r,
      e,
      c,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function c(f) {
    return (
      (i = normalizeIdentifier(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )),
      f === 58
        ? (e.enter("definitionMarker"),
          e.consume(f),
          e.exit("definitionMarker"),
          l)
        : n(f)
    );
  }
  function l(f) {
    return markdownLineEndingOrSpace(f) ? factoryWhitespace(e, d)(f) : d(f);
  }
  function d(f) {
    return factoryDestination(
      e,
      p,
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function p(f) {
    return e.attempt(titleBefore, m, m)(f);
  }
  function m(f) {
    return markdownSpace(f) ? factorySpace(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || markdownLineEnding(f)
      ? (e.exit("definition"), r.parser.defined.push(i), t(f))
      : n(f);
  }
}
function tokenizeTitleBefore(e, t, n) {
  return r;
  function r(c) {
    return markdownLineEndingOrSpace(c) ? factoryWhitespace(e, i)(c) : n(c);
  }
  function i(c) {
    return factoryTitle(
      e,
      o,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(c);
  }
  function o(c) {
    return markdownSpace(c) ? factorySpace(e, a, "whitespace")(c) : a(c);
  }
  function a(c) {
    return c === null || markdownLineEnding(c) ? t(c) : n(c);
  }
}
const hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape,
};
function tokenizeHardBreakEscape(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return markdownLineEnding(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const headingAtx = {
  name: "headingAtx",
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx,
};
function resolveHeadingAtx(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    o;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
      (o = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text",
      }),
      splice(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", o, t],
        ["exit", o, t],
        ["exit", i, t],
      ])),
    e
  );
}
function tokenizeHeadingAtx(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("atxHeading"), o(p);
  }
  function o(p) {
    return e.enter("atxHeadingSequence"), a(p);
  }
  function a(p) {
    return p === 35 && r++ < 6
      ? (e.consume(p), a)
      : p === null || markdownLineEndingOrSpace(p)
      ? (e.exit("atxHeadingSequence"), c(p))
      : n(p);
  }
  function c(p) {
    return p === 35
      ? (e.enter("atxHeadingSequence"), l(p))
      : p === null || markdownLineEnding(p)
      ? (e.exit("atxHeading"), t(p))
      : markdownSpace(p)
      ? factorySpace(e, c, "whitespace")(p)
      : (e.enter("atxHeadingText"), d(p));
  }
  function l(p) {
    return p === 35 ? (e.consume(p), l) : (e.exit("atxHeadingSequence"), c(p));
  }
  function d(p) {
    return p === null || p === 35 || markdownLineEndingOrSpace(p)
      ? (e.exit("atxHeadingText"), c(p))
      : (e.consume(p), d);
  }
}
const htmlBlockNames = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  htmlRawNames = ["pre", "script", "style", "textarea"],
  htmlFlow = {
    concrete: !0,
    name: "htmlFlow",
    resolveTo: resolveToHtmlFlow,
    tokenize: tokenizeHtmlFlow,
  },
  blankLineBefore = { partial: !0, tokenize: tokenizeBlankLineBefore },
  nonLazyContinuationStart = {
    partial: !0,
    tokenize: tokenizeNonLazyContinuationStart,
  };
function resolveToHtmlFlow(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function tokenizeHtmlFlow(e, t, n) {
  const r = this;
  let i, o, a, c, l;
  return d;
  function d(y) {
    return p(y);
  }
  function p(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), m;
  }
  function m(y) {
    return y === 33
      ? (e.consume(y), h)
      : y === 47
      ? (e.consume(y), (o = !0), v)
      : y === 63
      ? (e.consume(y), (i = 3), r.interrupt ? t : w)
      : asciiAlpha(y)
      ? (e.consume(y), (a = String.fromCharCode(y)), j)
      : n(y);
  }
  function h(y) {
    return y === 45
      ? (e.consume(y), (i = 2), f)
      : y === 91
      ? (e.consume(y), (i = 5), (c = 0), b)
      : asciiAlpha(y)
      ? (e.consume(y), (i = 4), r.interrupt ? t : w)
      : n(y);
  }
  function f(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : w) : n(y);
  }
  function b(y) {
    const ee = "CDATA[";
    return y === ee.charCodeAt(c++)
      ? (e.consume(y), c === ee.length ? (r.interrupt ? t : L) : b)
      : n(y);
  }
  function v(y) {
    return asciiAlpha(y)
      ? (e.consume(y), (a = String.fromCharCode(y)), j)
      : n(y);
  }
  function j(y) {
    if (y === null || y === 47 || y === 62 || markdownLineEndingOrSpace(y)) {
      const ee = y === 47,
        ve = a.toLowerCase();
      return !ee && !o && htmlRawNames.includes(ve)
        ? ((i = 1), r.interrupt ? t(y) : L(y))
        : htmlBlockNames.includes(a.toLowerCase())
        ? ((i = 6), ee ? (e.consume(y), S) : r.interrupt ? t(y) : L(y))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? C(y) : k(y));
    }
    return y === 45 || asciiAlphanumeric(y)
      ? (e.consume(y), (a += String.fromCharCode(y)), j)
      : n(y);
  }
  function S(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : L) : n(y);
  }
  function C(y) {
    return markdownSpace(y) ? (e.consume(y), C) : K(y);
  }
  function k(y) {
    return y === 47
      ? (e.consume(y), K)
      : y === 58 || y === 95 || asciiAlpha(y)
      ? (e.consume(y), _)
      : markdownSpace(y)
      ? (e.consume(y), k)
      : K(y);
  }
  function _(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || asciiAlphanumeric(y)
      ? (e.consume(y), _)
      : P(y);
  }
  function P(y) {
    return y === 61
      ? (e.consume(y), x)
      : markdownSpace(y)
      ? (e.consume(y), P)
      : k(y);
  }
  function x(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96
      ? n(y)
      : y === 34 || y === 39
      ? (e.consume(y), (l = y), Y)
      : markdownSpace(y)
      ? (e.consume(y), x)
      : V(y);
  }
  function Y(y) {
    return y === l
      ? (e.consume(y), (l = null), H)
      : y === null || markdownLineEnding(y)
      ? n(y)
      : (e.consume(y), Y);
  }
  function V(y) {
    return y === null ||
      y === 34 ||
      y === 39 ||
      y === 47 ||
      y === 60 ||
      y === 61 ||
      y === 62 ||
      y === 96 ||
      markdownLineEndingOrSpace(y)
      ? P(y)
      : (e.consume(y), V);
  }
  function H(y) {
    return y === 47 || y === 62 || markdownSpace(y) ? k(y) : n(y);
  }
  function K(y) {
    return y === 62 ? (e.consume(y), W) : n(y);
  }
  function W(y) {
    return y === null || markdownLineEnding(y)
      ? L(y)
      : markdownSpace(y)
      ? (e.consume(y), W)
      : n(y);
  }
  function L(y) {
    return y === 45 && i === 2
      ? (e.consume(y), ye)
      : y === 60 && i === 1
      ? (e.consume(y), z)
      : y === 62 && i === 4
      ? (e.consume(y), he)
      : y === 63 && i === 3
      ? (e.consume(y), w)
      : y === 93 && i === 5
      ? (e.consume(y), te)
      : markdownLineEnding(y) && (i === 6 || i === 7)
      ? (e.exit("htmlFlowData"), e.check(blankLineBefore, Ee, B)(y))
      : y === null || markdownLineEnding(y)
      ? (e.exit("htmlFlowData"), B(y))
      : (e.consume(y), L);
  }
  function B(y) {
    return e.check(nonLazyContinuationStart, M, Ee)(y);
  }
  function M(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), Q;
  }
  function Q(y) {
    return y === null || markdownLineEnding(y)
      ? B(y)
      : (e.enter("htmlFlowData"), L(y));
  }
  function ye(y) {
    return y === 45 ? (e.consume(y), w) : L(y);
  }
  function z(y) {
    return y === 47 ? (e.consume(y), (a = ""), de) : L(y);
  }
  function de(y) {
    if (y === 62) {
      const ee = a.toLowerCase();
      return htmlRawNames.includes(ee) ? (e.consume(y), he) : L(y);
    }
    return asciiAlpha(y) && a.length < 8
      ? (e.consume(y), (a += String.fromCharCode(y)), de)
      : L(y);
  }
  function te(y) {
    return y === 93 ? (e.consume(y), w) : L(y);
  }
  function w(y) {
    return y === 62
      ? (e.consume(y), he)
      : y === 45 && i === 2
      ? (e.consume(y), w)
      : L(y);
  }
  function he(y) {
    return y === null || markdownLineEnding(y)
      ? (e.exit("htmlFlowData"), Ee(y))
      : (e.consume(y), he);
  }
  function Ee(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function tokenizeNonLazyContinuationStart(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return markdownLineEnding(a)
      ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o)
      : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function tokenizeBlankLineBefore(e, t, n) {
  return r;
  function r(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      e.attempt(blankLine, t, n)
    );
  }
}
const htmlText = { name: "htmlText", tokenize: tokenizeHtmlText };
function tokenizeHtmlText(e, t, n) {
  const r = this;
  let i, o, a;
  return c;
  function c(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), l;
  }
  function l(w) {
    return w === 33
      ? (e.consume(w), d)
      : w === 47
      ? (e.consume(w), P)
      : w === 63
      ? (e.consume(w), k)
      : asciiAlpha(w)
      ? (e.consume(w), V)
      : n(w);
  }
  function d(w) {
    return w === 45
      ? (e.consume(w), p)
      : w === 91
      ? (e.consume(w), (o = 0), b)
      : asciiAlpha(w)
      ? (e.consume(w), C)
      : n(w);
  }
  function p(w) {
    return w === 45 ? (e.consume(w), f) : n(w);
  }
  function m(w) {
    return w === null
      ? n(w)
      : w === 45
      ? (e.consume(w), h)
      : markdownLineEnding(w)
      ? ((a = m), z(w))
      : (e.consume(w), m);
  }
  function h(w) {
    return w === 45 ? (e.consume(w), f) : m(w);
  }
  function f(w) {
    return w === 62 ? ye(w) : w === 45 ? h(w) : m(w);
  }
  function b(w) {
    const he = "CDATA[";
    return w === he.charCodeAt(o++)
      ? (e.consume(w), o === he.length ? v : b)
      : n(w);
  }
  function v(w) {
    return w === null
      ? n(w)
      : w === 93
      ? (e.consume(w), j)
      : markdownLineEnding(w)
      ? ((a = v), z(w))
      : (e.consume(w), v);
  }
  function j(w) {
    return w === 93 ? (e.consume(w), S) : v(w);
  }
  function S(w) {
    return w === 62 ? ye(w) : w === 93 ? (e.consume(w), S) : v(w);
  }
  function C(w) {
    return w === null || w === 62
      ? ye(w)
      : markdownLineEnding(w)
      ? ((a = C), z(w))
      : (e.consume(w), C);
  }
  function k(w) {
    return w === null
      ? n(w)
      : w === 63
      ? (e.consume(w), _)
      : markdownLineEnding(w)
      ? ((a = k), z(w))
      : (e.consume(w), k);
  }
  function _(w) {
    return w === 62 ? ye(w) : k(w);
  }
  function P(w) {
    return asciiAlpha(w) ? (e.consume(w), x) : n(w);
  }
  function x(w) {
    return w === 45 || asciiAlphanumeric(w) ? (e.consume(w), x) : Y(w);
  }
  function Y(w) {
    return markdownLineEnding(w)
      ? ((a = Y), z(w))
      : markdownSpace(w)
      ? (e.consume(w), Y)
      : ye(w);
  }
  function V(w) {
    return w === 45 || asciiAlphanumeric(w)
      ? (e.consume(w), V)
      : w === 47 || w === 62 || markdownLineEndingOrSpace(w)
      ? H(w)
      : n(w);
  }
  function H(w) {
    return w === 47
      ? (e.consume(w), ye)
      : w === 58 || w === 95 || asciiAlpha(w)
      ? (e.consume(w), K)
      : markdownLineEnding(w)
      ? ((a = H), z(w))
      : markdownSpace(w)
      ? (e.consume(w), H)
      : ye(w);
  }
  function K(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || asciiAlphanumeric(w)
      ? (e.consume(w), K)
      : W(w);
  }
  function W(w) {
    return w === 61
      ? (e.consume(w), L)
      : markdownLineEnding(w)
      ? ((a = W), z(w))
      : markdownSpace(w)
      ? (e.consume(w), W)
      : H(w);
  }
  function L(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96
      ? n(w)
      : w === 34 || w === 39
      ? (e.consume(w), (i = w), B)
      : markdownLineEnding(w)
      ? ((a = L), z(w))
      : markdownSpace(w)
      ? (e.consume(w), L)
      : (e.consume(w), M);
  }
  function B(w) {
    return w === i
      ? (e.consume(w), (i = void 0), Q)
      : w === null
      ? n(w)
      : markdownLineEnding(w)
      ? ((a = B), z(w))
      : (e.consume(w), B);
  }
  function M(w) {
    return w === null ||
      w === 34 ||
      w === 39 ||
      w === 60 ||
      w === 61 ||
      w === 96
      ? n(w)
      : w === 47 || w === 62 || markdownLineEndingOrSpace(w)
      ? H(w)
      : (e.consume(w), M);
  }
  function Q(w) {
    return w === 47 || w === 62 || markdownLineEndingOrSpace(w) ? H(w) : n(w);
  }
  function ye(w) {
    return w === 62
      ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : n(w);
  }
  function z(w) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(w),
      e.exit("lineEnding"),
      de
    );
  }
  function de(w) {
    return markdownSpace(w)
      ? factorySpace(
          e,
          te,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(w)
      : te(w);
  }
  function te(w) {
    return e.enter("htmlTextData"), a(w);
  }
}
const labelEnd = {
    name: "labelEnd",
    resolveAll: resolveAllLabelEnd,
    resolveTo: resolveToLabelEnd,
    tokenize: tokenizeLabelEnd,
  },
  resourceConstruct = { tokenize: tokenizeResource },
  referenceFullConstruct = { tokenize: tokenizeReferenceFull },
  referenceCollapsedConstruct = { tokenize: tokenizeReferenceCollapsed };
function resolveAllLabelEnd(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (
      (n.push(e[t]),
      r.type === "labelImage" ||
        r.type === "labelLink" ||
        r.type === "labelEnd")
    ) {
      const i = r.type === "labelImage" ? 4 : 2;
      (r.type = "data"), (t += i);
    }
  }
  return e.length !== n.length && splice(e, 0, e.length, n), e;
}
function resolveToLabelEnd(e, t) {
  let n = e.length,
    r = 0,
    i,
    o,
    a,
    c;
  for (; n--; )
    if (((i = e[n][1]), o)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (
        e[n][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((o = n), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const l = {
      type: e[o][1].type === "labelLink" ? "link" : "image",
      start: { ...e[o][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    d = { type: "label", start: { ...e[o][1].start }, end: { ...e[a][1].end } },
    p = {
      type: "labelText",
      start: { ...e[o + r + 2][1].end },
      end: { ...e[a - 2][1].start },
    };
  return (
    (c = [
      ["enter", l, t],
      ["enter", d, t],
    ]),
    (c = push(c, e.slice(o + 1, o + r + 3))),
    (c = push(c, [["enter", p, t]])),
    (c = push(
      c,
      resolveAll(
        t.parser.constructs.insideSpan.null,
        e.slice(o + r + 4, a - 3),
        t
      )
    )),
    (c = push(c, [["exit", p, t], e[a - 2], e[a - 1], ["exit", d, t]])),
    (c = push(c, e.slice(a + 1))),
    (c = push(c, [["exit", l, t]])),
    splice(e, o, e.length, c),
    e
  );
}
function tokenizeLabelEnd(e, t, n) {
  const r = this;
  let i = r.events.length,
    o,
    a;
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      o = r.events[i][1];
      break;
    }
  return c;
  function c(h) {
    return o
      ? o._inactive
        ? m(h)
        : ((a = r.parser.defined.includes(
            normalizeIdentifier(
              r.sliceSerialize({ start: o.end, end: r.now() })
            )
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(h),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          l)
      : n(h);
  }
  function l(h) {
    return h === 40
      ? e.attempt(resourceConstruct, p, a ? p : m)(h)
      : h === 91
      ? e.attempt(referenceFullConstruct, p, a ? d : m)(h)
      : a
      ? p(h)
      : m(h);
  }
  function d(h) {
    return e.attempt(referenceCollapsedConstruct, p, m)(h);
  }
  function p(h) {
    return t(h);
  }
  function m(h) {
    return (o._balanced = !0), n(h);
  }
}
function tokenizeResource(e, t, n) {
  return r;
  function r(m) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(m),
      e.exit("resourceMarker"),
      i
    );
  }
  function i(m) {
    return markdownLineEndingOrSpace(m) ? factoryWhitespace(e, o)(m) : o(m);
  }
  function o(m) {
    return m === 41
      ? p(m)
      : factoryDestination(
          e,
          a,
          c,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(m);
  }
  function a(m) {
    return markdownLineEndingOrSpace(m) ? factoryWhitespace(e, l)(m) : p(m);
  }
  function c(m) {
    return n(m);
  }
  function l(m) {
    return m === 34 || m === 39 || m === 40
      ? factoryTitle(
          e,
          d,
          n,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(m)
      : p(m);
  }
  function d(m) {
    return markdownLineEndingOrSpace(m) ? factoryWhitespace(e, p)(m) : p(m);
  }
  function p(m) {
    return m === 41
      ? (e.enter("resourceMarker"),
        e.consume(m),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : n(m);
  }
}
function tokenizeReferenceFull(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return factoryLabel.call(
      r,
      e,
      o,
      a,
      "reference",
      "referenceMarker",
      "referenceString"
    )(c);
  }
  function o(c) {
    return r.parser.defined.includes(
      normalizeIdentifier(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    )
      ? t(c)
      : n(c);
  }
  function a(c) {
    return n(c);
  }
}
function tokenizeReferenceCollapsed(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(o),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(o) {
    return o === 93
      ? (e.enter("referenceMarker"),
        e.consume(o),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(o);
  }
}
const labelStartImage = {
  name: "labelStartImage",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartImage,
};
function tokenizeLabelStartImage(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(c),
      e.exit("labelImageMarker"),
      o
    );
  }
  function o(c) {
    return c === 91
      ? (e.enter("labelMarker"),
        e.consume(c),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        a)
      : n(c);
  }
  function a(c) {
    return c === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(c)
      : t(c);
  }
}
const labelStartLink = {
  name: "labelStartLink",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink,
};
function tokenizeLabelStartLink(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(a),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      o
    );
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(a)
      : t(a);
  }
}
const lineEnding = { name: "lineEnding", tokenize: tokenizeLineEnding };
function tokenizeLineEnding(e, t) {
  return n;
  function n(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      factorySpace(e, t, "linePrefix")
    );
  }
}
const thematicBreak$1 = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak,
};
function tokenizeThematicBreak(e, t, n) {
  let r = 0,
    i;
  return o;
  function o(d) {
    return e.enter("thematicBreak"), a(d);
  }
  function a(d) {
    return (i = d), c(d);
  }
  function c(d) {
    return d === i
      ? (e.enter("thematicBreakSequence"), l(d))
      : r >= 3 && (d === null || markdownLineEnding(d))
      ? (e.exit("thematicBreak"), t(d))
      : n(d);
  }
  function l(d) {
    return d === i
      ? (e.consume(d), r++, l)
      : (e.exit("thematicBreakSequence"),
        markdownSpace(d) ? factorySpace(e, c, "whitespace")(d) : c(d));
  }
}
const list$1 = {
    continuation: { tokenize: tokenizeListContinuation },
    exit: tokenizeListEnd,
    name: "list",
    tokenize: tokenizeListStart,
  },
  listItemPrefixWhitespaceConstruct = {
    partial: !0,
    tokenize: tokenizeListItemPrefixWhitespace,
  },
  indentConstruct = { partial: !0, tokenize: tokenizeIndent };
function tokenizeListStart(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let o =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    a = 0;
  return c;
  function c(f) {
    const b =
      r.containerState.type ||
      (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (
      b === "listUnordered"
        ? !r.containerState.marker || f === r.containerState.marker
        : asciiDigit(f)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = b), e.enter(b, { _container: !0 })),
        b === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          f === 42 || f === 45 ? e.check(thematicBreak$1, n, d)(f) : d(f)
        );
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(f);
    }
    return n(f);
  }
  function l(f) {
    return asciiDigit(f) && ++a < 10
      ? (e.consume(f), l)
      : (!r.interrupt || a < 2) &&
        (r.containerState.marker
          ? f === r.containerState.marker
          : f === 41 || f === 46)
      ? (e.exit("listItemValue"), d(f))
      : n(f);
  }
  function d(f) {
    return (
      e.enter("listItemMarker"),
      e.consume(f),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || f),
      e.check(
        blankLine,
        r.interrupt ? n : p,
        e.attempt(listItemPrefixWhitespaceConstruct, h, m)
      )
    );
  }
  function p(f) {
    return (r.containerState.initialBlankLine = !0), o++, h(f);
  }
  function m(f) {
    return markdownSpace(f)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(f),
        e.exit("listItemPrefixWhitespace"),
        h)
      : n(f);
  }
  function h(f) {
    return (
      (r.containerState.size =
        o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(f)
    );
  }
}
function tokenizeListContinuation(e, t, n) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(blankLine, i, o);
  function i(c) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      factorySpace(e, t, "listItemIndent", r.containerState.size + 1)(c)
    );
  }
  function o(c) {
    return r.containerState.furtherBlankLines || !markdownSpace(c)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        a(c))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(indentConstruct, t, a)(c));
  }
  function a(c) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      factorySpace(
        e,
        e.attempt(list$1, t, n),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(c)
    );
  }
}
function tokenizeIndent(e, t, n) {
  const r = this;
  return factorySpace(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === "listItemIndent" &&
      a[2].sliceSerialize(a[1], !0).length === r.containerState.size
      ? t(o)
      : n(o);
  }
}
function tokenizeListEnd(e) {
  e.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(e, t, n) {
  const r = this;
  return factorySpace(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !markdownSpace(o) && a && a[1].type === "listItemPrefixWhitespace"
      ? t(o)
      : n(o);
  }
}
const setextUnderline = {
  name: "setextUnderline",
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline,
};
function resolveToSetextUnderline(e, t) {
  let n = e.length,
    r,
    i,
    o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1),
        !o && e[n][1].type === "definition" && (o = n);
  const a = {
    type: "setextHeading",
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    o
      ? (e.splice(i, 0, ["enter", a, t]),
        e.splice(o + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = { ...e[o][1].end }))
      : (e[r][1] = a),
    e.push(["exit", a, t]),
    e
  );
}
function tokenizeSetextUnderline(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(d) {
    let p = r.events.length,
      m;
    for (; p--; )
      if (
        r.events[p][1].type !== "lineEnding" &&
        r.events[p][1].type !== "linePrefix" &&
        r.events[p][1].type !== "content"
      ) {
        m = r.events[p][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || m)
      ? (e.enter("setextHeadingLine"), (i = d), a(d))
      : n(d);
  }
  function a(d) {
    return e.enter("setextHeadingLineSequence"), c(d);
  }
  function c(d) {
    return d === i
      ? (e.consume(d), c)
      : (e.exit("setextHeadingLineSequence"),
        markdownSpace(d) ? factorySpace(e, l, "lineSuffix")(d) : l(d));
  }
  function l(d) {
    return d === null || markdownLineEnding(d)
      ? (e.exit("setextHeadingLine"), t(d))
      : n(d);
  }
}
const flow$1 = { tokenize: initializeFlow };
function initializeFlow(e) {
  const t = this,
    n = e.attempt(
      blankLine,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        factorySpace(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(content, i)),
          "linePrefix"
        )
      )
    );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(o),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const resolver = { resolveAll: createResolver() },
  string$1 = initializeFactory("string"),
  text$2 = initializeFactory("text");
function initializeFactory(e) {
  return {
    resolveAll: createResolver(e === "text" ? resolveAllLineSuffixes : void 0),
    tokenize: t,
  };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      o = n.attempt(i, a, c);
    return a;
    function a(p) {
      return d(p) ? o(p) : c(p);
    }
    function c(p) {
      if (p === null) {
        n.consume(p);
        return;
      }
      return n.enter("data"), n.consume(p), l;
    }
    function l(p) {
      return d(p) ? (n.exit("data"), o(p)) : (n.consume(p), l);
    }
    function d(p) {
      if (p === null) return !0;
      const m = i[p];
      let h = -1;
      if (m)
        for (; ++h < m.length; ) {
          const f = m[h];
          if (!f.previous || f.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function createResolver(e) {
  return t;
  function t(n, r) {
    let i = -1,
      o;
    for (; ++i <= n.length; )
      o === void 0
        ? n[i] && n[i][1].type === "data" && ((o = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== o + 2 &&
            ((n[o][1].end = n[i - 1][1].end),
            n.splice(o + 2, i - o - 2),
            (i = o + 2)),
          (o = void 0));
    return e ? e(n, r) : n;
  }
}
function resolveAllLineSuffixes(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let o = i.length,
        a = -1,
        c = 0,
        l;
      for (; o--; ) {
        const d = i[o];
        if (typeof d == "string") {
          for (a = d.length; d.charCodeAt(a - 1) === 32; ) c++, a--;
          if (a) break;
          a = -1;
        } else if (d === -2) (l = !0), c++;
        else if (d !== -1) {
          o++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (c = 0), c)) {
        const d = {
          type:
            n === e.length || l || c < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - c,
            offset: r.end.offset - c,
          },
          end: { ...r.end },
        };
        (r.end = { ...d.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, d)
            : (e.splice(n, 0, ["enter", d, t], ["exit", d, t]), (n += 2));
      }
      n++;
    }
  return e;
}
const document$1 = {
    42: list$1,
    43: list$1,
    45: list$1,
    48: list$1,
    49: list$1,
    50: list$1,
    51: list$1,
    52: list$1,
    53: list$1,
    54: list$1,
    55: list$1,
    56: list$1,
    57: list$1,
    62: blockQuote,
  },
  contentInitial = { 91: definition },
  flowInitial = { [-2]: codeIndented, [-1]: codeIndented, 32: codeIndented },
  flow = {
    35: headingAtx,
    42: thematicBreak$1,
    45: [setextUnderline, thematicBreak$1],
    60: htmlFlow,
    61: setextUnderline,
    95: thematicBreak$1,
    96: codeFenced,
    126: codeFenced,
  },
  string = { 38: characterReference, 92: characterEscape },
  text$1 = {
    [-5]: lineEnding,
    [-4]: lineEnding,
    [-3]: lineEnding,
    33: labelStartImage,
    38: characterReference,
    42: attention,
    60: [autolink, htmlText],
    91: labelStartLink,
    92: [hardBreakEscape, characterEscape],
    93: labelEnd,
    95: attention,
    96: codeText,
  },
  insideSpan = { null: [attention, resolver] },
  attentionMarkers = { null: [42, 95] },
  disable = { null: [] },
  defaultConstructs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers,
        contentInitial,
        disable,
        document: document$1,
        flow,
        flowInitial,
        insideSpan,
        string,
        text: text$1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function createTokenizer(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (n && n.line) || 1,
    column: (n && n.column) || 1,
    offset: (n && n.offset) || 0,
  };
  const i = {},
    o = [];
  let a = [],
    c = [];
  const l = {
      attempt: Y(P),
      check: Y(x),
      consume: C,
      enter: k,
      exit: _,
      interrupt: Y(x, { interrupt: !0 }),
    },
    d = {
      code: null,
      containerState: {},
      defineSkip: v,
      events: [],
      now: b,
      parser: e,
      previous: null,
      sliceSerialize: h,
      sliceStream: f,
      write: m,
    };
  let p = t.tokenize.call(d, l);
  return t.resolveAll && o.push(t), d;
  function m(W) {
    return (
      (a = push(a, W)),
      j(),
      a[a.length - 1] !== null
        ? []
        : (V(t, 0), (d.events = resolveAll(o, d.events, d)), d.events)
    );
  }
  function h(W, L) {
    return serializeChunks(f(W), L);
  }
  function f(W) {
    return sliceChunks(a, W);
  }
  function b() {
    const { _bufferIndex: W, _index: L, line: B, column: M, offset: Q } = r;
    return { _bufferIndex: W, _index: L, line: B, column: M, offset: Q };
  }
  function v(W) {
    (i[W.line] = W.column), K();
  }
  function j() {
    let W;
    for (; r._index < a.length; ) {
      const L = a[r._index];
      if (typeof L == "string")
        for (
          W = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === W && r._bufferIndex < L.length;

        )
          S(L.charCodeAt(r._bufferIndex));
      else S(L);
    }
  }
  function S(W) {
    p = p(W);
  }
  function C(W) {
    markdownLineEnding(W)
      ? (r.line++, (r.column = 1), (r.offset += W === -3 ? 2 : 1), K())
      : W !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === a[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (d.previous = W);
  }
  function k(W, L) {
    const B = L || {};
    return (
      (B.type = W),
      (B.start = b()),
      d.events.push(["enter", B, d]),
      c.push(B),
      B
    );
  }
  function _(W) {
    const L = c.pop();
    return (L.end = b()), d.events.push(["exit", L, d]), L;
  }
  function P(W, L) {
    V(W, L.from);
  }
  function x(W, L) {
    L.restore();
  }
  function Y(W, L) {
    return B;
    function B(M, Q, ye) {
      let z, de, te, w;
      return Array.isArray(M) ? Ee(M) : "tokenize" in M ? Ee([M]) : he(M);
      function he(le) {
        return De;
        function De(_e) {
          const $e = _e !== null && le[_e],
            X = _e !== null && le.null,
            Ie = [
              ...(Array.isArray($e) ? $e : $e ? [$e] : []),
              ...(Array.isArray(X) ? X : X ? [X] : []),
            ];
          return Ee(Ie)(_e);
        }
      }
      function Ee(le) {
        return (z = le), (de = 0), le.length === 0 ? ye : y(le[de]);
      }
      function y(le) {
        return De;
        function De(_e) {
          return (
            (w = H()),
            (te = le),
            le.partial || (d.currentConstruct = le),
            le.name && d.parser.constructs.disable.null.includes(le.name)
              ? ve()
              : le.tokenize.call(
                  L ? Object.assign(Object.create(d), L) : d,
                  l,
                  ee,
                  ve
                )(_e)
          );
        }
      }
      function ee(le) {
        return W(te, w), Q;
      }
      function ve(le) {
        return w.restore(), ++de < z.length ? y(z[de]) : ye;
      }
    }
  }
  function V(W, L) {
    W.resolveAll && !o.includes(W) && o.push(W),
      W.resolve &&
        splice(
          d.events,
          L,
          d.events.length - L,
          W.resolve(d.events.slice(L), d)
        ),
      W.resolveTo && (d.events = W.resolveTo(d.events, d));
  }
  function H() {
    const W = b(),
      L = d.previous,
      B = d.currentConstruct,
      M = d.events.length,
      Q = Array.from(c);
    return { from: M, restore: ye };
    function ye() {
      (r = W),
        (d.previous = L),
        (d.currentConstruct = B),
        (d.events.length = M),
        (c = Q),
        K();
    }
  }
  function K() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function sliceChunks(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    o = t.end._bufferIndex;
  let a;
  if (n === i) a = [e[n].slice(r, o)];
  else {
    if (((a = e.slice(n, i)), r > -1)) {
      const c = a[0];
      typeof c == "string" ? (a[0] = c.slice(r)) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function serializeChunks(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == "string") a = o;
    else
      switch (o) {
        case -5: {
          a = "\r";
          break;
        }
        case -4: {
          a = `
`;
          break;
        }
        case -3: {
          a = `\r
`;
          break;
        }
        case -2: {
          a = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          a = " ";
          break;
        }
        default:
          a = String.fromCharCode(o);
      }
    (i = o === -2), r.push(a);
  }
  return r.join("");
}
function parse(e) {
  const r = {
    constructs: combineExtensions([
      defaultConstructs,
      ...((e || {}).extensions || []),
    ]),
    content: i(content$1),
    defined: [],
    document: i(document$2),
    flow: i(flow$1),
    lazy: {},
    string: i(string$1),
    text: i(text$2),
  };
  return r;
  function i(o) {
    return a;
    function a(c) {
      return createTokenizer(r, o, c);
    }
  }
}
function postprocess(e) {
  for (; !subtokenize(e); );
  return e;
}
const search = /[\0\t\n\r]/g;
function preprocess() {
  let e = 1,
    t = "",
    n = !0,
    r;
  return i;
  function i(o, a, c) {
    const l = [];
    let d, p, m, h, f;
    for (
      o =
        t +
        (typeof o == "string"
          ? o.toString()
          : new TextDecoder(a || void 0).decode(o)),
        m = 0,
        t = "",
        n && (o.charCodeAt(0) === 65279 && m++, (n = void 0));
      m < o.length;

    ) {
      if (
        ((search.lastIndex = m),
        (d = search.exec(o)),
        (h = d && d.index !== void 0 ? d.index : o.length),
        (f = o.charCodeAt(h)),
        !d)
      ) {
        t = o.slice(m);
        break;
      }
      if (f === 10 && m === h && r) l.push(-3), (r = void 0);
      else
        switch (
          (r && (l.push(-5), (r = void 0)),
          m < h && (l.push(o.slice(m, h)), (e += h - m)),
          f)
        ) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (p = Math.ceil(e / 4) * 4, l.push(-2); e++ < p; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      m = h + 1;
    }
    return c && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
const characterEscapeOrReference =
  /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(e) {
  return e.replace(characterEscapeOrReference, decode);
}
function decode(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      o = i === 120 || i === 88;
    return decodeNumericCharacterReference(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return decodeNamedCharacterReference(n) || e;
}
const own$2 = {}.hasOwnProperty;
function fromMarkdown(e, t, n) {
  return (
    typeof t != "string" && ((n = t), (t = void 0)),
    compiler(n)(postprocess(parse(n).document().write(preprocess()(e, t, !0))))
  );
}
function compiler(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(tt),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: o(Qe),
      blockQuote: o(X),
      characterEscape: H,
      characterReference: H,
      codeFenced: o(Ie),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(Ie, a),
      codeText: o(qe, a),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: o(Ue),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(Oe),
      hardBreakEscape: o(st),
      hardBreakTrailing: o(st),
      htmlFlow: o(Ge, a),
      htmlFlowData: H,
      htmlText: o(Ge, a),
      htmlTextData: H,
      image: o(Ve),
      label: a,
      link: o(tt),
      listItem: o(rt),
      listItemValue: h,
      listOrdered: o(ke, m),
      listUnordered: o(ke),
      paragraph: o(me),
      reference: y,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(Qe),
      strong: o(at),
      thematicBreak: o(I),
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: P,
      autolink: l(),
      autolinkEmail: $e,
      autolinkProtocol: _e,
      blockQuote: l(),
      characterEscapeValue: K,
      characterReferenceMarkerHexadecimal: ve,
      characterReferenceMarkerNumeric: ve,
      characterReferenceValue: le,
      characterReference: De,
      codeFenced: l(j),
      codeFencedFence: v,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: b,
      codeFlowValue: K,
      codeIndented: l(S),
      codeText: l(Q),
      codeTextData: K,
      data: K,
      definition: l(),
      definitionDestinationString: _,
      definitionLabelString: C,
      definitionTitleString: k,
      emphasis: l(),
      hardBreakEscape: l(L),
      hardBreakTrailing: l(L),
      htmlFlow: l(B),
      htmlFlowData: K,
      htmlText: l(M),
      htmlTextData: K,
      image: l(z),
      label: te,
      labelText: de,
      lineEnding: W,
      link: l(ye),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: ee,
      resourceDestinationString: w,
      resourceTitleString: he,
      resource: Ee,
      setextHeading: l(V),
      setextHeadingLineSequence: Y,
      setextHeadingText: x,
      strong: l(),
      thematicBreak: l(),
    },
  };
  configure(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(E) {
    let R = { type: "root", children: [] };
    const A = {
        stack: [R],
        tokenStack: [],
        config: t,
        enter: c,
        exit: d,
        buffer: a,
        resume: p,
        data: n,
      },
      D = [];
    let g = -1;
    for (; ++g < E.length; )
      if (E[g][1].type === "listOrdered" || E[g][1].type === "listUnordered")
        if (E[g][0] === "enter") D.push(g);
        else {
          const T = D.pop();
          g = i(E, T, g);
        }
    for (g = -1; ++g < E.length; ) {
      const T = t[E[g][0]];
      own$2.call(T, E[g][1].type) &&
        T[E[g][1].type].call(
          Object.assign({ sliceSerialize: E[g][2].sliceSerialize }, A),
          E[g][1]
        );
    }
    if (A.tokenStack.length > 0) {
      const T = A.tokenStack[A.tokenStack.length - 1];
      (T[1] || defaultOnError).call(A, void 0, T[0]);
    }
    for (
      R.position = {
        start: point(
          E.length > 0 ? E[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: point(
          E.length > 0
            ? E[E.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        g = -1;
      ++g < t.transforms.length;

    )
      R = t.transforms[g](R) || R;
    return R;
  }
  function i(E, R, A) {
    let D = R - 1,
      g = -1,
      T = !1,
      N,
      q,
      U,
      O;
    for (; ++D <= A; ) {
      const $ = E[D];
      switch ($[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          $[0] === "enter" ? g++ : g--, (O = void 0);
          break;
        }
        case "lineEndingBlank": {
          $[0] === "enter" && (N && !O && !g && !U && (U = D), (O = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          O = void 0;
      }
      if (
        (!g && $[0] === "enter" && $[1].type === "listItemPrefix") ||
        (g === -1 &&
          $[0] === "exit" &&
          ($[1].type === "listUnordered" || $[1].type === "listOrdered"))
      ) {
        if (N) {
          let F = D;
          for (q = void 0; F--; ) {
            const G = E[F];
            if (G[1].type === "lineEnding" || G[1].type === "lineEndingBlank") {
              if (G[0] === "exit") continue;
              q && ((E[q][1].type = "lineEndingBlank"), (T = !0)),
                (G[1].type = "lineEnding"),
                (q = F);
            } else if (
              !(
                G[1].type === "linePrefix" ||
                G[1].type === "blockQuotePrefix" ||
                G[1].type === "blockQuotePrefixWhitespace" ||
                G[1].type === "blockQuoteMarker" ||
                G[1].type === "listItemIndent"
              )
            )
              break;
          }
          U && (!q || U < q) && (N._spread = !0),
            (N.end = Object.assign({}, q ? E[q][1].start : $[1].end)),
            E.splice(q || D, 0, ["exit", N, $[2]]),
            D++,
            A++;
        }
        if ($[1].type === "listItemPrefix") {
          const F = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, $[1].start),
            end: void 0,
          };
          (N = F),
            E.splice(D, 0, ["enter", F, $[2]]),
            D++,
            A++,
            (U = void 0),
            (O = !0);
        }
      }
    }
    return (E[R][1]._spread = T), A;
  }
  function o(E, R) {
    return A;
    function A(D) {
      c.call(this, E(D), D), R && R.call(this, D);
    }
  }
  function a() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function c(E, R, A) {
    this.stack[this.stack.length - 1].children.push(E),
      this.stack.push(E),
      this.tokenStack.push([R, A || void 0]),
      (E.position = { start: point(R.start), end: void 0 });
  }
  function l(E) {
    return R;
    function R(A) {
      E && E.call(this, A), d.call(this, A);
    }
  }
  function d(E, R) {
    const A = this.stack.pop(),
      D = this.tokenStack.pop();
    if (D)
      D[0].type !== E.type &&
        (R
          ? R.call(this, E, D[0])
          : (D[1] || defaultOnError).call(this, E, D[0]));
    else
      throw new Error(
        "Cannot close `" +
          E.type +
          "` (" +
          stringifyPosition({ start: E.start, end: E.end }) +
          "): it’s not open"
      );
    A.position.end = point(E.end);
  }
  function p() {
    return toString$1(this.stack.pop());
  }
  function m() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(E) {
    if (this.data.expectingFirstListItemValue) {
      const R = this.stack[this.stack.length - 2];
      (R.start = Number.parseInt(this.sliceSerialize(E), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function f() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.lang = E;
  }
  function b() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.meta = E;
  }
  function v() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function j() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    (R.value = E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function S() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.value = E.replace(/(\r?\n|\r)$/g, "");
  }
  function C(E) {
    const R = this.resume(),
      A = this.stack[this.stack.length - 1];
    (A.label = R),
      (A.identifier = normalizeIdentifier(
        this.sliceSerialize(E)
      ).toLowerCase());
  }
  function k() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.title = E;
  }
  function _() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.url = E;
  }
  function P(E) {
    const R = this.stack[this.stack.length - 1];
    if (!R.depth) {
      const A = this.sliceSerialize(E).length;
      R.depth = A;
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function Y(E) {
    const R = this.stack[this.stack.length - 1];
    R.depth = this.sliceSerialize(E).codePointAt(0) === 61 ? 1 : 2;
  }
  function V() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function H(E) {
    const A = this.stack[this.stack.length - 1].children;
    let D = A[A.length - 1];
    (!D || D.type !== "text") &&
      ((D = u()),
      (D.position = { start: point(E.start), end: void 0 }),
      A.push(D)),
      this.stack.push(D);
  }
  function K(E) {
    const R = this.stack.pop();
    (R.value += this.sliceSerialize(E)), (R.position.end = point(E.end));
  }
  function W(E) {
    const R = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const A = R.children[R.children.length - 1];
      (A.position.end = point(E.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(R.type) &&
      (H.call(this, E), K.call(this, E));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.value = E;
  }
  function M() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.value = E;
  }
  function Q() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.value = E;
  }
  function ye() {
    const E = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const R = this.data.referenceType || "shortcut";
      (E.type += "Reference"),
        (E.referenceType = R),
        delete E.url,
        delete E.title;
    } else delete E.identifier, delete E.label;
    this.data.referenceType = void 0;
  }
  function z() {
    const E = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const R = this.data.referenceType || "shortcut";
      (E.type += "Reference"),
        (E.referenceType = R),
        delete E.url,
        delete E.title;
    } else delete E.identifier, delete E.label;
    this.data.referenceType = void 0;
  }
  function de(E) {
    const R = this.sliceSerialize(E),
      A = this.stack[this.stack.length - 2];
    (A.label = decodeString(R)),
      (A.identifier = normalizeIdentifier(R).toLowerCase());
  }
  function te() {
    const E = this.stack[this.stack.length - 1],
      R = this.resume(),
      A = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), A.type === "link")) {
      const D = E.children;
      A.children = D;
    } else A.alt = R;
  }
  function w() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.url = E;
  }
  function he() {
    const E = this.resume(),
      R = this.stack[this.stack.length - 1];
    R.title = E;
  }
  function Ee() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function ee(E) {
    const R = this.resume(),
      A = this.stack[this.stack.length - 1];
    (A.label = R),
      (A.identifier = normalizeIdentifier(
        this.sliceSerialize(E)
      ).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function ve(E) {
    this.data.characterReferenceType = E.type;
  }
  function le(E) {
    const R = this.sliceSerialize(E),
      A = this.data.characterReferenceType;
    let D;
    A
      ? ((D = decodeNumericCharacterReference(
          R,
          A === "characterReferenceMarkerNumeric" ? 10 : 16
        )),
        (this.data.characterReferenceType = void 0))
      : (D = decodeNamedCharacterReference(R));
    const g = this.stack[this.stack.length - 1];
    g.value += D;
  }
  function De(E) {
    const R = this.stack.pop();
    R.position.end = point(E.end);
  }
  function _e(E) {
    K.call(this, E);
    const R = this.stack[this.stack.length - 1];
    R.url = this.sliceSerialize(E);
  }
  function $e(E) {
    K.call(this, E);
    const R = this.stack[this.stack.length - 1];
    R.url = "mailto:" + this.sliceSerialize(E);
  }
  function X() {
    return { type: "blockquote", children: [] };
  }
  function Ie() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function qe() {
    return { type: "inlineCode", value: "" };
  }
  function Ue() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function Oe() {
    return { type: "emphasis", children: [] };
  }
  function Qe() {
    return { type: "heading", depth: 0, children: [] };
  }
  function st() {
    return { type: "break" };
  }
  function Ge() {
    return { type: "html", value: "" };
  }
  function Ve() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function tt() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function ke(E) {
    return {
      type: "list",
      ordered: E.type === "listOrdered",
      start: null,
      spread: E._spread,
      children: [],
    };
  }
  function rt(E) {
    return { type: "listItem", spread: E._spread, checked: null, children: [] };
  }
  function me() {
    return { type: "paragraph", children: [] };
  }
  function at() {
    return { type: "strong", children: [] };
  }
  function u() {
    return { type: "text", value: "" };
  }
  function I() {
    return { type: "thematicBreak" };
  }
}
function point(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function configure(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? configure(e, r) : extension(e, r);
  }
}
function extension(e, t) {
  let n;
  for (n in t)
    if (own$2.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function defaultOnError(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          stringifyPosition({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          stringifyPosition({ start: t.start, end: t.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          stringifyPosition({ start: t.start, end: t.end }) +
          ") is still open"
      );
}
function remarkParse(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return fromMarkdown(r, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  }
}
function blockquote(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function hardBreak(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function code(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (i.data = { meta: t.meta }),
    e.patch(t, i),
    (i = e.applyData(t, i)),
    (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
    e.patch(t, i),
    i
  );
}
function strikethrough(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function emphasis(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function footnoteReference(e, t) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(t.identifier).toUpperCase(),
    i = normalizeUri(r.toLowerCase()),
    o = e.footnoteOrder.indexOf(r);
  let a,
    c = e.footnoteCounts.get(r);
  c === void 0
    ? ((c = 0), e.footnoteOrder.push(r), (a = e.footnoteOrder.length))
    : (a = o + 1),
    (c += 1),
    e.footnoteCounts.set(r, c);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (c > 1 ? "-" + c : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(a) }],
  };
  e.patch(t, l);
  const d = { type: "element", tagName: "sup", properties: {}, children: [l] };
  return e.patch(t, d), e.applyData(t, d);
}
function heading(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function html(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function revert(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed"
      ? (r += "[]")
      : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t),
    o = i[0];
  o && o.type === "text"
    ? (o.value = "[" + o.value)
    : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return (
    a && a.type === "text"
      ? (a.value += r)
      : i.push({ type: "text", value: r }),
    i
  );
}
function imageReference(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return revert(e, t);
  const i = { src: normalizeUri(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function image(e, t) {
  const n = { src: normalizeUri(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function inlineCode(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = { type: "element", tagName: "code", properties: {}, children: [n] };
  return e.patch(t, r), e.applyData(t, r);
}
function linkReference(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return revert(e, t);
  const i = { href: normalizeUri(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function link(e, t) {
  const n = { href: normalizeUri(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function listItem(e, t, n) {
  const r = e.all(t),
    i = n ? listLoose(n) : listItemLoose(t),
    o = {},
    a = [];
  if (typeof t.checked == "boolean") {
    const p = r[0];
    let m;
    p && p.type === "element" && p.tagName === "p"
      ? (m = p)
      : ((m = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(m)),
      m.children.length > 0 && m.children.unshift({ type: "text", value: " " }),
      m.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (o.className = ["task-list-item"]);
  }
  let c = -1;
  for (; ++c < r.length; ) {
    const p = r[c];
    (i || c !== 0 || p.type !== "element" || p.tagName !== "p") &&
      a.push({
        type: "text",
        value: `
`,
      }),
      p.type === "element" && p.tagName === "p" && !i
        ? a.push(...p.children)
        : a.push(p);
  }
  const l = r[r.length - 1];
  l &&
    (i || l.type !== "element" || l.tagName !== "p") &&
    a.push({
      type: "text",
      value: `
`,
    });
  const d = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(t, d), e.applyData(t, d);
}
function listLoose(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = listItemLoose(n[r]);
  }
  return t;
}
function listItemLoose(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function list(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++i < r.length;

  ) {
    const a = r[i];
    if (
      a.type === "element" &&
      a.tagName === "li" &&
      a.properties &&
      Array.isArray(a.properties.className) &&
      a.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function paragraph(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function root(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function strong(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function table(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, !0),
      },
      c = pointStart(t.children[1]),
      l = pointEnd(t.children[t.children.length - 1]);
    c && l && (a.position = { start: c, end: l }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function tableRow(e, t, n) {
  const r = n ? n.children : void 0,
    o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    a = n && n.type === "table" ? n.align : void 0,
    c = a ? a.length : t.children.length;
  let l = -1;
  const d = [];
  for (; ++l < c; ) {
    const m = t.children[l],
      h = {},
      f = a ? a[l] : void 0;
    f && (h.align = f);
    let b = { type: "element", tagName: o, properties: h, children: [] };
    m && ((b.children = e.all(m)), e.patch(m, b), (b = e.applyData(m, b))),
      d.push(b);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(d, !0),
  };
  return e.patch(t, p), e.applyData(t, p);
}
function tableCell(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const tab = 9,
  space = 32;
function trimLines(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const o = [];
  for (; r; )
    o.push(trimLine(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return o.push(trimLine(t.slice(i), i > 0, !1)), o.join("");
}
function trimLine(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === tab || o === space; ) r++, (o = e.codePointAt(r));
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === tab || o === space; ) i--, (o = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function text(e, t) {
  const n = { type: "text", value: trimLines(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function thematicBreak(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
const handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list,
  paragraph,
  root,
  strong,
  table,
  tableCell,
  tableRow,
  text,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore,
};
function ignore() {}
const VOID = -1,
  PRIMITIVE = 0,
  ARRAY = 1,
  OBJECT = 2,
  DATE = 3,
  REGEXP = 4,
  MAP = 5,
  SET = 6,
  ERROR = 7,
  BIGINT = 8,
  env = typeof self == "object" ? self : globalThis,
  deserializer = (e, t) => {
    const n = (i, o) => (e.set(o, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [o, a] = t[i];
        switch (o) {
          case PRIMITIVE:
          case VOID:
            return n(a, i);
          case ARRAY: {
            const c = n([], i);
            for (const l of a) c.push(r(l));
            return c;
          }
          case OBJECT: {
            const c = n({}, i);
            for (const [l, d] of a) c[r(l)] = r(d);
            return c;
          }
          case DATE:
            return n(new Date(a), i);
          case REGEXP: {
            const { source: c, flags: l } = a;
            return n(new RegExp(c, l), i);
          }
          case MAP: {
            const c = n(new Map(), i);
            for (const [l, d] of a) c.set(r(l), r(d));
            return c;
          }
          case SET: {
            const c = n(new Set(), i);
            for (const l of a) c.add(r(l));
            return c;
          }
          case ERROR: {
            const { name: c, message: l } = a;
            return n(new env[c](l), i);
          }
          case BIGINT:
            return n(BigInt(a), i);
          case "BigInt":
            return n(Object(BigInt(a)), i);
          case "ArrayBuffer":
            return n(new Uint8Array(a).buffer, a);
          case "DataView": {
            const { buffer: c } = new Uint8Array(a);
            return n(new DataView(c), a);
          }
        }
        return n(new env[o](a), i);
      };
    return r;
  },
  deserialize = (e) => deserializer(new Map(), e)(0),
  EMPTY = "",
  { toString } = {},
  { keys } = Object,
  typeOf = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [PRIMITIVE, t];
    const n = toString.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [ARRAY, EMPTY];
      case "Object":
        return [OBJECT, EMPTY];
      case "Date":
        return [DATE, EMPTY];
      case "RegExp":
        return [REGEXP, EMPTY];
      case "Map":
        return [MAP, EMPTY];
      case "Set":
        return [SET, EMPTY];
      case "DataView":
        return [ARRAY, n];
    }
    return n.includes("Array")
      ? [ARRAY, n]
      : n.includes("Error")
      ? [ERROR, n]
      : [OBJECT, n];
  },
  shouldSkip = ([e, t]) =>
    e === PRIMITIVE && (t === "function" || t === "symbol"),
  serializer = (e, t, n, r) => {
    const i = (a, c) => {
        const l = r.push(a) - 1;
        return n.set(c, l), l;
      },
      o = (a) => {
        if (n.has(a)) return n.get(a);
        let [c, l] = typeOf(a);
        switch (c) {
          case PRIMITIVE: {
            let p = a;
            switch (l) {
              case "bigint":
                (c = BIGINT), (p = a.toString());
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + l);
                p = null;
                break;
              case "undefined":
                return i([VOID], a);
            }
            return i([c, p], a);
          }
          case ARRAY: {
            if (l) {
              let h = a;
              return (
                l === "DataView"
                  ? (h = new Uint8Array(a.buffer))
                  : l === "ArrayBuffer" && (h = new Uint8Array(a)),
                i([l, [...h]], a)
              );
            }
            const p = [],
              m = i([c, p], a);
            for (const h of a) p.push(o(h));
            return m;
          }
          case OBJECT: {
            if (l)
              switch (l) {
                case "BigInt":
                  return i([l, a.toString()], a);
                case "Boolean":
                case "Number":
                case "String":
                  return i([l, a.valueOf()], a);
              }
            if (t && "toJSON" in a) return o(a.toJSON());
            const p = [],
              m = i([c, p], a);
            for (const h of keys(a))
              (e || !shouldSkip(typeOf(a[h]))) && p.push([o(h), o(a[h])]);
            return m;
          }
          case DATE:
            return i([c, a.toISOString()], a);
          case REGEXP: {
            const { source: p, flags: m } = a;
            return i([c, { source: p, flags: m }], a);
          }
          case MAP: {
            const p = [],
              m = i([c, p], a);
            for (const [h, f] of a)
              (e || !(shouldSkip(typeOf(h)) || shouldSkip(typeOf(f)))) &&
                p.push([o(h), o(f)]);
            return m;
          }
          case SET: {
            const p = [],
              m = i([c, p], a);
            for (const h of a) (e || !shouldSkip(typeOf(h))) && p.push(o(h));
            return m;
          }
        }
        const { message: d } = a;
        return i([c, { name: l, message: d }], a);
      };
    return o;
  },
  serialize = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return serializer(!(t || n), !!t, new Map(), r)(e), r;
  },
  structuredClone$1 =
    typeof structuredClone == "function"
      ? (e, t) =>
          t && ("json" in t || "lossy" in t)
            ? deserialize(serialize(e, t))
            : structuredClone(e)
      : (e, t) => deserialize(serialize(e, t));
function defaultFootnoteBackContent(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function defaultFootnoteBackLabel(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function footer(e) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    n = e.options.footnoteBackContent || defaultFootnoteBackContent,
    r = e.options.footnoteBackLabel || defaultFootnoteBackLabel,
    i = e.options.footnoteLabel || "Footnotes",
    o = e.options.footnoteLabelTagName || "h2",
    a = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    c = [];
  let l = -1;
  for (; ++l < e.footnoteOrder.length; ) {
    const d = e.footnoteById.get(e.footnoteOrder[l]);
    if (!d) continue;
    const p = e.all(d),
      m = String(d.identifier).toUpperCase(),
      h = normalizeUri(m.toLowerCase());
    let f = 0;
    const b = [],
      v = e.footnoteCounts.get(m);
    for (; v !== void 0 && ++f <= v; ) {
      b.length > 0 && b.push({ type: "text", value: " " });
      let C = typeof n == "string" ? n : n(l, f);
      typeof C == "string" && (C = { type: "text", value: C }),
        b.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + h + (f > 1 ? "-" + f : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(l, f),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(C) ? C : [C],
        });
    }
    const j = p[p.length - 1];
    if (j && j.type === "element" && j.tagName === "p") {
      const C = j.children[j.children.length - 1];
      C && C.type === "text"
        ? (C.value += " ")
        : j.children.push({ type: "text", value: " " }),
        j.children.push(...b);
    } else p.push(...b);
    const S = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(p, !0),
    };
    e.patch(d, S), c.push(S);
  }
  if (c.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: { ...structuredClone$1(a), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(c, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const convert = function (e) {
  if (e == null) return ok;
  if (typeof e == "function") return castFactory(e);
  if (typeof e == "object")
    return Array.isArray(e) ? anyFactory(e) : propsFactory(e);
  if (typeof e == "string") return typeFactory(e);
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = convert(e[n]);
  return castFactory(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; ) if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function propsFactory(e) {
  const t = e;
  return castFactory(n);
  function n(r) {
    const i = r;
    let o;
    for (o in e) if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function typeFactory(e) {
  return castFactory(t);
  function t(n) {
    return n && n.type === e;
  }
}
function castFactory(e) {
  return t;
  function t(n, r, i) {
    return !!(
      looksLikeANode(n) &&
      e.call(this, n, typeof r == "number" ? r : void 0, i || void 0)
    );
  }
}
function ok() {
  return !0;
}
function looksLikeANode(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
function color(e) {
  return e;
}
const empty = [],
  CONTINUE = !0,
  EXIT = !1,
  SKIP = "skip";
function visitParents(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function"
    ? ((r = n), (n = t))
    : (i = t);
  const o = convert(i),
    a = r ? -1 : 1;
  c(e, void 0, [])();
  function c(l, d, p) {
    const m = l && typeof l == "object" ? l : {};
    if (typeof m.type == "string") {
      const f =
        typeof m.tagName == "string"
          ? m.tagName
          : typeof m.name == "string"
          ? m.name
          : void 0;
      Object.defineProperty(h, "name", {
        value: "node (" + (l.type + (f ? "<" + f + ">" : "")) + ")",
      });
    }
    return h;
    function h() {
      let f = empty,
        b,
        v,
        j;
      if (
        (!t || o(l, d, p[p.length - 1] || void 0)) &&
        ((f = toResult(n(l, p))), f[0] === EXIT)
      )
        return f;
      if ("children" in l && l.children) {
        const S = l;
        if (S.children && f[0] !== SKIP)
          for (
            v = (r ? S.children.length : -1) + a, j = p.concat(S);
            v > -1 && v < S.children.length;

          ) {
            const C = S.children[v];
            if (((b = c(C, v, j)()), b[0] === EXIT)) return b;
            v = typeof b[1] == "number" ? b[1] : v + a;
          }
      }
      return f;
    }
  }
}
function toResult(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
    ? [CONTINUE, e]
    : e == null
    ? empty
    : [e];
}
function visit(e, t, n, r) {
  let i, o, a;
  typeof t == "function" && typeof n != "function"
    ? ((o = void 0), (a = t), (i = n))
    : ((o = t), (a = n), (i = r)),
    visitParents(e, o, c, i);
  function c(l, d) {
    const p = d[d.length - 1],
      m = p ? p.children.indexOf(l) : void 0;
    return a(l, m, p);
  }
}
const own$1 = {}.hasOwnProperty,
  emptyOptions = {};
function createState(e, t) {
  const n = t || emptyOptions,
    r = new Map(),
    i = new Map(),
    o = new Map(),
    a = { ...handlers, ...n.handlers },
    c = {
      all: d,
      applyData,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: a,
      one: l,
      options: n,
      patch,
      wrap: wrap$1,
    };
  return (
    visit(e, function (p) {
      if (p.type === "definition" || p.type === "footnoteDefinition") {
        const m = p.type === "definition" ? r : i,
          h = String(p.identifier).toUpperCase();
        m.has(h) || m.set(h, p);
      }
    }),
    c
  );
  function l(p, m) {
    const h = p.type,
      f = c.handlers[h];
    if (own$1.call(c.handlers, h) && f) return f(c, p, m);
    if (c.options.passThrough && c.options.passThrough.includes(h)) {
      if ("children" in p) {
        const { children: v, ...j } = p,
          S = structuredClone$1(j);
        return (S.children = c.all(p)), S;
      }
      return structuredClone$1(p);
    }
    return (c.options.unknownHandler || defaultUnknownHandler)(c, p, m);
  }
  function d(p) {
    const m = [];
    if ("children" in p) {
      const h = p.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const b = c.one(h[f], p);
        if (b) {
          if (
            f &&
            h[f - 1].type === "break" &&
            (!Array.isArray(b) &&
              b.type === "text" &&
              (b.value = trimMarkdownSpaceStart(b.value)),
            !Array.isArray(b) && b.type === "element")
          ) {
            const v = b.children[0];
            v &&
              v.type === "text" &&
              (v.value = trimMarkdownSpaceStart(v.value));
          }
          Array.isArray(b) ? m.push(...b) : m.push(b);
        }
      }
    }
    return m;
  }
}
function patch(e, t) {
  e.position && (t.position = position$1(e));
}
function applyData(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element") n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" &&
      o &&
      Object.assign(n.properties, structuredClone$1(o)),
      "children" in n &&
        n.children &&
        i !== null &&
        i !== void 0 &&
        (n.children = i);
  }
  return n;
}
function defaultUnknownHandler(e, t) {
  const n = t.data || {},
    r =
      "value" in t &&
      !(own$1.call(n, "hProperties") || own$1.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function wrap$1(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function trimMarkdownSpaceStart(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) t++, (n = e.charCodeAt(t));
  return e.slice(t);
}
function toHast(e, t) {
  const n = createState(e, t),
    r = n.one(e, void 0),
    i = footer(n),
    o = Array.isArray(r)
      ? { type: "root", children: r }
      : r || { type: "root", children: [] };
  return (
    i &&
      o.children.push(
        {
          type: "text",
          value: `
`,
        },
        i
      ),
    o
  );
}
function remarkRehype(e, t) {
  return e && "run" in e
    ? async function (n, r) {
        const i = toHast(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return toHast(n, { file: r, ...(e || t) });
      };
}
function bail(e) {
  if (e) throw e;
}
var extend$1, hasRequiredExtend;
function requireExtend() {
  if (hasRequiredExtend) return extend$1;
  hasRequiredExtend = 1;
  var e = Object.prototype.hasOwnProperty,
    t = Object.prototype.toString,
    n = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = function (d) {
      return typeof Array.isArray == "function"
        ? Array.isArray(d)
        : t.call(d) === "[object Array]";
    },
    o = function (d) {
      if (!d || t.call(d) !== "[object Object]") return !1;
      var p = e.call(d, "constructor"),
        m =
          d.constructor &&
          d.constructor.prototype &&
          e.call(d.constructor.prototype, "isPrototypeOf");
      if (d.constructor && !p && !m) return !1;
      var h;
      for (h in d);
      return typeof h > "u" || e.call(d, h);
    },
    a = function (d, p) {
      n && p.name === "__proto__"
        ? n(d, p.name, {
            enumerable: !0,
            configurable: !0,
            value: p.newValue,
            writable: !0,
          })
        : (d[p.name] = p.newValue);
    },
    c = function (d, p) {
      if (p === "__proto__")
        if (e.call(d, p)) {
          if (r) return r(d, p).value;
        } else return;
      return d[p];
    };
  return (
    (extend$1 = function l() {
      var d,
        p,
        m,
        h,
        f,
        b,
        v = arguments[0],
        j = 1,
        S = arguments.length,
        C = !1;
      for (
        typeof v == "boolean" && ((C = v), (v = arguments[1] || {}), (j = 2)),
          (v == null || (typeof v != "object" && typeof v != "function")) &&
            (v = {});
        j < S;
        ++j
      )
        if (((d = arguments[j]), d != null))
          for (p in d)
            (m = c(v, p)),
              (h = c(d, p)),
              v !== h &&
                (C && h && (o(h) || (f = i(h)))
                  ? (f
                      ? ((f = !1), (b = m && i(m) ? m : []))
                      : (b = m && o(m) ? m : {}),
                    a(v, { name: p, newValue: l(C, b, h) }))
                  : typeof h < "u" && a(v, { name: p, newValue: h }));
      return v;
    }),
    extend$1
  );
}
var extendExports = requireExtend();
const extend = getDefaultExportFromCjs(extendExports);
function isPlainObject(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function trough() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    c(null, ...i);
    function c(l, ...d) {
      const p = e[++o];
      let m = -1;
      if (l) {
        a(l);
        return;
      }
      for (; ++m < i.length; )
        (d[m] === null || d[m] === void 0) && (d[m] = i[m]);
      (i = d), p ? wrap(p, c)(...d) : a(null, ...d);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e.push(i), t;
  }
}
function wrap(e, t) {
  let n;
  return r;
  function r(...a) {
    const c = e.length > a.length;
    let l;
    c && a.push(i);
    try {
      l = e.apply(this, a);
    } catch (d) {
      const p = d;
      if (c && n) throw p;
      return i(p);
    }
    c ||
      (l && l.then && typeof l.then == "function"
        ? l.then(o, i)
        : l instanceof Error
        ? i(l)
        : o(l));
  }
  function i(a, ...c) {
    n || ((n = !0), t(a, ...c));
  }
  function o(a) {
    i(null, a);
  }
}
const minpath = { basename, dirname, extname, join, sep: "/" };
function basename(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  assertPath$1(e);
  let n = 0,
    r = -1,
    i = e.length,
    o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((o = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let a = -1,
    c = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && ((o = !0), (a = i + 1)),
        c > -1 &&
          (e.codePointAt(i) === t.codePointAt(c--)
            ? c < 0 && (r = i)
            : ((c = -1), (r = a)));
  return n === r ? (r = a) : r < 0 && (r = e.length), e.slice(n, r);
}
function dirname(e) {
  if ((assertPath$1(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
    ? "//"
    : e.slice(0, t);
}
function extname(e) {
  assertPath$1(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    o = 0,
    a;
  for (; t--; ) {
    const c = e.codePointAt(t);
    if (c === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((a = !0), (n = t + 1)),
      c === 46 ? (i < 0 ? (i = t) : o !== 1 && (o = 1)) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || o === 0 || (o === 1 && i === n - 1 && i === r + 1)
    ? ""
    : e.slice(i, n);
}
function join(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    assertPath$1(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : normalize(n);
}
function normalize(e) {
  assertPath$1(e);
  const t = e.codePointAt(0) === 47;
  let n = normalizeString(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function normalizeString(e, t) {
  let n = "",
    r = 0,
    i = -1,
    o = 0,
    a = -1,
    c,
    l;
  for (; ++a <= e.length; ) {
    if (a < e.length) c = e.codePointAt(a);
    else {
      if (c === 47) break;
      c = 47;
    }
    if (c === 47) {
      if (!(i === a - 1 || o === 1))
        if (i !== a - 1 && o === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((l = n.lastIndexOf("/")), l !== n.length - 1)) {
                l < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, l)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = a),
                  (o = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ""), (r = 0), (i = a), (o = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + e.slice(i + 1, a))
            : (n = e.slice(i + 1, a)),
            (r = a - i - 1);
      (i = a), (o = 0);
    } else c === 46 && o > -1 ? o++ : (o = -1);
  }
  return n;
}
function assertPath$1(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const minproc = { cwd };
function cwd() {
  return "/";
}
function isUrl(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function urlToPath(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!isUrl(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return getPathFromURLPosix(e);
}
function getPathFromURLPosix(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const order = ["history", "path", "basename", "stem", "extname", "dirname"];
class VFile {
  constructor(t) {
    let n;
    t
      ? isUrl(t)
        ? (n = { path: t })
        : typeof t == "string" || isUint8Array$1(t)
        ? (n = { value: t })
        : (n = t)
      : (n = {}),
      (this.cwd = "cwd" in n ? "" : minproc.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < order.length; ) {
      const o = order[r];
      o in n &&
        n[o] !== void 0 &&
        n[o] !== null &&
        (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n) order.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == "string" ? minpath.basename(this.path) : void 0;
  }
  set basename(t) {
    assertNonEmpty(t, "basename"),
      assertPart(t, "basename"),
      (this.path = minpath.join(this.dirname || "", t));
  }
  get dirname() {
    return typeof this.path == "string" ? minpath.dirname(this.path) : void 0;
  }
  set dirname(t) {
    assertPath(this.basename, "dirname"),
      (this.path = minpath.join(t || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? minpath.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((assertPart(t, "extname"), assertPath(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = minpath.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    isUrl(t) && (t = urlToPath(t)),
      assertNonEmpty(t, "path"),
      this.path !== t && this.history.push(t);
  }
  get stem() {
    return typeof this.path == "string"
      ? minpath.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    assertNonEmpty(t, "stem"),
      assertPart(t, "stem"),
      (this.path = minpath.join(this.dirname || "", t + (this.extname || "")));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = void 0), i;
  }
  message(t, n, r) {
    const i = new VFileMessage(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(t || void 0).decode(this.value);
  }
}
function assertPart(e, t) {
  if (e && e.includes(minpath.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + minpath.sep + "`"
    );
}
function assertNonEmpty(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function assertPath(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function isUint8Array$1(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const CallableInstance = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      o = function () {
        return i.apply(o, arguments);
      };
    return Object.setPrototypeOf(o, r), o;
  },
  own = {}.hasOwnProperty;
class Processor extends CallableInstance {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = trough());
  }
  copy() {
    const t = new Processor();
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(extend(!0, {}, this.namespace)), t;
  }
  data(t, n) {
    return typeof t == "string"
      ? arguments.length === 2
        ? (assertUnfrozen("data", this.frozen), (this.namespace[t] = n), this)
        : (own.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
      ? (assertUnfrozen("data", this.frozen), (this.namespace = t), this)
      : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(t) {
    this.freeze();
    const n = vfile(t),
      r = this.parser || this.Parser;
    return assertParser("parse", r), r(String(n), n);
  }
  process(t, n) {
    const r = this;
    return (
      this.freeze(),
      assertParser("process", this.parser || this.Parser),
      assertCompiler("process", this.compiler || this.Compiler),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(o, a) {
      const c = vfile(t),
        l = r.parse(c);
      r.run(l, c, function (p, m, h) {
        if (p || !m || !h) return d(p);
        const f = m,
          b = r.stringify(f, h);
        looksLikeAValue(b) ? (h.value = b) : (h.result = b), d(p, h);
      });
      function d(p, m) {
        p || !m ? a(p) : o ? o(m) : n(void 0, m);
      }
    }
  }
  processSync(t) {
    let n = !1,
      r;
    return (
      this.freeze(),
      assertParser("processSync", this.parser || this.Parser),
      assertCompiler("processSync", this.compiler || this.Compiler),
      this.process(t, i),
      assertDone("processSync", "process", n),
      r
    );
    function i(o, a) {
      (n = !0), bail(o), (r = a);
    }
  }
  run(t, n, r) {
    assertNode(t), this.freeze();
    const i = this.transformers;
    return (
      !r && typeof n == "function" && ((r = n), (n = void 0)),
      r ? o(void 0, r) : new Promise(o)
    );
    function o(a, c) {
      const l = vfile(n);
      i.run(t, l, d);
      function d(p, m, h) {
        const f = m || t;
        p ? c(p) : a ? a(f) : r(void 0, f, h);
      }
    }
  }
  runSync(t, n) {
    let r = !1,
      i;
    return this.run(t, n, o), assertDone("runSync", "run", r), i;
    function o(a, c) {
      bail(a), (i = c), (r = !0);
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = vfile(n),
      i = this.compiler || this.Compiler;
    return assertCompiler("stringify", i), assertNode(t), i(t, r);
  }
  use(t, ...n) {
    const r = this.attachers,
      i = this.namespace;
    if ((assertUnfrozen("use", this.frozen), t != null))
      if (typeof t == "function") l(t, n);
      else if (typeof t == "object") Array.isArray(t) ? c(t) : a(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(d) {
      if (typeof d == "function") l(d, []);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [p, ...m] = d;
          l(p, m);
        } else a(d);
      else throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function a(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      c(d.plugins),
        d.settings && (i.settings = extend(!0, i.settings, d.settings));
    }
    function c(d) {
      let p = -1;
      if (d != null)
        if (Array.isArray(d))
          for (; ++p < d.length; ) {
            const m = d[p];
            o(m);
          }
        else throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function l(d, p) {
      let m = -1,
        h = -1;
      for (; ++m < r.length; )
        if (r[m][0] === d) {
          h = m;
          break;
        }
      if (h === -1) r.push([d, ...p]);
      else if (p.length > 0) {
        let [f, ...b] = p;
        const v = r[h][1];
        isPlainObject(v) && isPlainObject(f) && (f = extend(!0, v, f)),
          (r[h] = [d, f, ...b]);
      }
    }
  }
}
const unified = new Processor().freeze();
function assertParser(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function assertCompiler(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function assertUnfrozen(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function assertNode(e) {
  if (!isPlainObject(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function assertDone(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function vfile(e) {
  return looksLikeAVFile(e) ? e : new VFile(e);
}
function looksLikeAVFile(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function looksLikeAValue(e) {
  return typeof e == "string" || isUint8Array(e);
}
function isUint8Array(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const changelog =
    "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  emptyPlugins = [],
  emptyRemarkRehypeOptions = { allowDangerousHtml: !0 },
  safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i,
  deprecations = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    { from: "className", id: "remove-classname" },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function Markdown(e) {
  const t = createProcessor(e),
    n = createFile(e);
  return post(t.runSync(t.parse(n), n), e);
}
function createProcessor(e) {
  const t = e.rehypePlugins || emptyPlugins,
    n = e.remarkPlugins || emptyPlugins,
    r = e.remarkRehypeOptions
      ? { ...e.remarkRehypeOptions, ...emptyRemarkRehypeOptions }
      : emptyRemarkRehypeOptions;
  return unified().use(remarkParse).use(n).use(remarkRehype, r).use(t);
}
function createFile(e) {
  const t = e.children || "",
    n = new VFile();
  return typeof t == "string" && (n.value = t), n;
}
function post(e, t) {
  const n = t.allowedElements,
    r = t.allowElement,
    i = t.components,
    o = t.disallowedElements,
    a = t.skipHtml,
    c = t.unwrapDisallowed,
    l = t.urlTransform || defaultUrlTransform;
  for (const p of deprecations)
    Object.hasOwn(t, p.from) &&
      ("" +
        p.from +
        (p.to ? "use `" + p.to + "` instead" : "remove it") +
        changelog +
        p.id,
      void 0);
  return (
    visit(e, d),
    toJsxRuntime(e, {
      Fragment: jsxRuntimeExports.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: jsxRuntimeExports.jsx,
      jsxs: jsxRuntimeExports.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function d(p, m, h) {
    if (p.type === "raw" && h && typeof m == "number")
      return (
        a
          ? h.children.splice(m, 1)
          : (h.children[m] = { type: "text", value: p.value }),
        m
      );
    if (p.type === "element") {
      let f;
      for (f in urlAttributes)
        if (Object.hasOwn(urlAttributes, f) && Object.hasOwn(p.properties, f)) {
          const b = p.properties[f],
            v = urlAttributes[f];
          (v === null || v.includes(p.tagName)) &&
            (p.properties[f] = l(String(b || ""), f, p));
        }
    }
    if (p.type === "element") {
      let f = n ? !n.includes(p.tagName) : o ? o.includes(p.tagName) : !1;
      if (
        (!f && r && typeof m == "number" && (f = !r(p, m, h)),
        f && h && typeof m == "number")
      )
        return (
          c && p.children
            ? h.children.splice(m, 1, ...p.children)
            : h.children.splice(m, 1),
          m
        );
    }
  }
}
function defaultUrlTransform(e) {
  const t = e.indexOf(":"),
    n = e.indexOf("?"),
    r = e.indexOf("#"),
    i = e.indexOf("/");
  return t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    safeProtocol.test(e.slice(0, t))
    ? e
    : "";
}
const devUpdatesData = [
    {
      slug: "2026-02-20-dev-update-production-layer-activated",
      title: "Development Update v8: Production Layer Activated",
      date: "2026-11-20",
      description:
        "DeepSnitch has crossed the threshold from intelligence platform to fully operational product. The network is live, layered, and ready.",
      tags: ["Deep Plus", "Production", "Intelligence", "UX"],
      content: `# 🚀 Development Update: Production Layer Activated

## Update 8: Intelligence Hardened — Deep Plus Unlocked

DeepSnitch has crossed the threshold from intelligence platform to fully operational product. The network is no longer in development — it's live, layered, and ready.

## ⚙️ What's New

### Intelligent Caching Layer

The intelligence engine now retains and reuses recently processed token signals — dramatically reducing redundant lookups and reinforcing system stability under high-volume conditions. Speed up. Noise down.

### Asset Recognition Expanded

The risk engine now understands context. Established assets are correctly identified and classified — no false alarms, no noise. The intelligence layer knows what it's looking at.

### SnitchGPT: Cognitive Upgrade

The query engine no longer just interrogates data — it thinks. General crypto questions, market context, protocol concepts — answered intelligently, grounded in live platform data. The gap between raw signal and human understanding just closed.

### UX Evolution

The interface has been rebuilt for clarity under pressure. Sharper layouts, refined visual hierarchy, polished interactions from login screen to deep token analysis. Every surface refined. No friction left behind.

### Deep Plus Access Layer

Advanced intelligence is now unlocked for those ready to go deeper. Seamless access flows are embedded across every feature — Feed, Scan, Audit, Cast, GPT, Explorer. The full network, unrestricted.

### Operational Backbone

Synchronized payment state management. Real-time access status. Automated resilience across the entire platform. The infrastructure runs itself.

## 🧠 Why It Matters

DeepSnitch isn't a prototype anymore.

Every system — intelligence, security, conversation, discovery — is connected, production-hardened, and actively serving users. The platform doesn't just collect signals. It classifies, protects, explains, and scales.

## 🔮 What's Next

- Wrapped asset recognition — bridged tokens correctly classified across chains
- Deeper SnitchGPT correlations — multi-signal query responses
- Expanded alert taxonomy — more granular, more precise threat classification
- Broader multi-chain coverage across the intelligence layer

The network is production-ready.
The intelligence is live.
**Deep Plus is open.**

---

![DeepSnitch Platform](/images/deepsnitch-screenshot.jpg)`,
    },
    {
      slug: "2026-01-06-dev-update-security-layer-activated",
      title: "Development Update v7: Security Layer Activated",
      date: "2026-10-06",
      description:
        "DeepSnitch now includes on-chain security auditing — real-time contract analysis meets adaptive threat detection.",
      tags: ["AuditSnitch", "Security", "Intelligence", "Refinement"],
      content: `# 🚀 Development Update: Security Layer Activated

## Update 7: AuditSnitch + Refined Intelligence

DeepSnitch now includes on-chain security auditing — real-time contract analysis meets adaptive threat detection.

## ⚡ What's New

### AuditSnitch Deployed

- Instant smart contract security audit — paste any token address, receive a verdict
- Multi-layer threat analysis: honeypot detection, ownership traps, liquidity locks, tax anomalies
- Tri-tier verdict system: CLEAN / CAUTION / SKETCHY — powered by deep on-chain forensics
- 8+ risk vectors analyzed per token, cross-referenced against known exploit patterns

### Intelligence Refinement

- SnitchScan upgraded: direct contract address input, transparent gem/scam scoring breakdown
- Terminology clarity: info tooltips for Sentiment, Mentions, Social Dominance, alert types
- "Whale Splash" renamed → "Dominance Surge" for semantic precision
- Stablecoin recognition layer — known assets bypass false-positive risk triggers

### UX & Performance

- Animation pipeline optimized — faster graph rendering, zero UI lag
- Token Explorer search fully operational with real-time feedback
- SnitchCast filtering logic corrected — accurate news sentiment surfacing
- Color-coded risk metrics for instant visual comprehension

## 🧠 Why It Matters

Security is no longer a separate step — it's embedded in the intelligence layer.

AuditSnitch transforms raw contract data into instant trust signals. Before you ape, you audit. The network now protects as it watches.

## 🔮 What's Next

- SnitchGPT expansion — broader query understanding, deeper conversational intelligence
- UI evolution — visual identity aligned with brand aesthetics
- Multi-chain security coverage — extending audit reach across ecosystems
- Enhanced alert taxonomy — more granular threat classification

The network audits.
The network protects.
**Trust is verified, not assumed.**`,
    },
    {
      slug: "2025-12-01-dev-update-intelligence-amplified",
      title: "Development Update v6: Intelligence Amplified",
      date: "2026-8-01",
      description:
        "DeepSnitch now responds to natural language and surfaces deep token intelligence on demand.",
      tags: ["SnitchGPT", "Token Explorer", "Query Layer", "Intelligence"],
      content: `# 🚀 Development Update: Intelligence Amplified

## Update 6: Query Layer + Token Explorer Live

DeepSnitch now responds to natural language and surfaces deep token intelligence on demand.

## ⚡ What's New

### SnitchGPT Deployed

- Ask questions, get real-time crypto intel ("What's ETH risk score?")
- Powered by adaptive query parsing and multi-source data fusion
- Conversational interface bridges raw data and actionable insight

### Token Explorer Active

- Single-token deep dive: alerts, risk scoring, and time-series analytics in one view
- Visual risk profiling with liquidity metrics and holder concentration
- Live alert feed per token — catch narrative shifts as they emerge

### Unified Intelligence Access

- SnitchFeed + SnitchScan + SnitchGPT now operate as one cognitive layer
- Query any signal, explore any token, track any anomaly
- "Show whale splashes today"

## 🧠 Why It Matters

Intelligence isn't just collected — it's interrogated.

Users can now ask, explore, and act on crypto signals without hunting through dashboards or raw feeds.

## 🔮 What's Next

- Expanded query taxonomy (more signal types, deeper correlations)
- Multi-token comparative analysis
- Enhanced visual storytelling for risk and sentiment patterns

The network listens.
The network answers.
**The intelligence layer evolves.**`,
    },
    {
      slug: "2025-10-31-dev-update-network-activation",
      title: "Development Update v5: The Intelligence Engine Awakens",
      date: "2026-6-31",
      description: "The DeepSnitch network is now fully operational.",
      tags: ["Intelligence", "Engine", "Infrastructure"],
      content: `# 🚀 Development Update: The Intelligence Engine Awakens

## Update 5: The Intelligence Engine Awakens

The DeepSnitch network is now fully operational.
Our systems have transitioned from isolated modules to a **cohesive intelligence layer** — continuously
learning, adapting, and detecting patterns across the crypto landscape.

## What's New

### Unified Dashboard Online

- **SnitchFeed** and **SnitchScan** now operate in sync, creating a seamless flow of real-time market intelligence.
- The interface has evolved — faster visuals, smarter alerts, and cleaner user interactions.
- The risk model has matured, translating raw blockchain data into intuitive insight.

### Intelligence Core

- The alert system now surfaces emerging anomalies and sentiment shifts before they trend.
- Interactive token metrics and adaptive analytics enhance situational awareness.
- Authorization layer upgraded for enhanced security and identity verification.

## Why It Matters

DeepSnitch is no longer just watching — it's **thinking**.
Every signal, every movement, every anomaly is processed through an expanding neural layer that turns
noise into actionable intelligence.

## What's Next

- Deeper integration between intelligence agents.
- Broader coverage across networks and narratives.
- Gradual rollout toward closed beta access.

The network is awake.
The signals are live.
**Welcome to the new era of crypto intelligence.**`,
    },
    {
      slug: "2025-10-23-dev-update-closed-deployment-and-next-phase",
      title: "Development Update v4: Closed Deployment & Next Phase",
      date: "2026-5-23",
      description:
        "DeepSnitch has oficially moved from prototype to a deployed intelligence layer — now running in our internal environment.",
      tags: ["Deployment", "Next Phase"],
      content: `# 🚀 Development Update: Closed Deployment & Next Phase

## Update 4: Closed Deployment & Next Phase

DeepSnitch has oficially moved from prototype to a **deployed intelligence layer** — now running in our internal environment.

## What's New

- **Internal Deployment**: SnitchFeed is live on our secure backend, streaming real-time alerts and sentiment flows.
- **Smarter Alerts**: Refined detection logic for Mood Flips, FUD Storms, and Whale Splashes, with cleaner UI messages.
- **Enhanced Dashboard**: Global Alert Banner, Token Sentiment Visuals, Live Feed, and Active Alerts are now seamlessly connected.

## Why It Matters

We're no longer just visualizing data — we're running a **living intelligence engine** that catches early narrative shifts before the crowd.

## What's Next

- UI polish for sharper insights at a glance.
- Expanding the **alert taxonomy** (more nuanced categories of market signals).
- Preparing **SnitchScan integration** to complete the Unified Intelligence Dashboard.

The syndicate is forming. Momentum is accelerating.`,
    },
    {
      slug: "2024-09-30-dev-update-dashboard-awakens",
      title: "Development Update v3: The Dashboard Awakens",
      date: "2026-03-22",
      description:
        "SnitchFeed lights up the unified intelligence dashboard with live alerts, sentiment tracking, and AI-driven warnings.",
      tags: ["Dashboard", "SnitchFeed", "AI"],
      content: `# 🚀 Development Update: From Vision to MVP

## Update 3: The Dashboard Awakens

DeepSnitch is moving from concept to reality. After months of laying the groundwork with advanced research and architecture, the first pieces of our unified intelligence dashboard are coming alive - starting with SnitchFeed.

## What's New

- **Global Alert Banner** -> Real-time detection of sudden market shifts, sentiment flips, and hidden whale moves.
- **Token Sentiment Visuals** -> Dynamic graphs tracking crowd emotion across leading assets.
- **Live Feed** -> The pulse of the market distilled into one stream, surfacing chatter before it trends.
- **Active Alerts** -> AI-driven warnings for FUD storms, insider signals, and unusual trading activity.

## Why It Matters

DeepSnitch is not about noise - it's about clarity. The intelligence engine cuts through the chaos of social media and market chatter, surfacing signals that actually move markets. Instead of chasing rumors, our users will get early alerts on emerging narratives and actionable insights before they go mainstream.

## Current Focus

- Fine-tuning the predictive alert engine for maximum signal-to-noise ratio.
- Expanding the multi-channel intelligence feed to capture the full spectrum of market sentiment.
- Enhancing the dashboard experience so complex insights are delivered in simple, actionable ways.

## What's Next

We're transitioning from early prototype to closed beta, with presale supporters getting the first glimpse of SnitchFeed in action. This is just the beginning: as each agent comes online, the dashboard will evolve into a real-time intelligence syndicate built to give you the ultimate edge.

The foundation is solid, the engine is running, and momentum is building fast.

SnitchFeed goes live soon.`,
    },
    {
      slug: "2024-08-20-dev-update-infrastructure-intelligence",
      title: "Development Update v2: From Research to Reality",
      date: "2026-02-20",
      description:
        "Our surveillance network, predictive alert engine, and intelligence pipeline are moving from research into an actionable, continuously monitored system.",
      tags: ["Infrastructure", "Intelligence", "AI"],
      content: `# Dev Update: Infrastructure & Intelligence Systems

## Update 2: From Research to Reality

The DeepSnitch surveillance network is taking shape and the work from the research phase is paying off.

### Progress This Week

- **Decentralized Data Pipeline:** Proprietary intelligence aggregation ensures nonstop monitoring across chains and social channels.
- **AI Neural Framework:** Advanced sentiment analysis and anomaly detection models are being tuned for maximum signal-to-noise ratio.
- **Predictive Alert Engine:** Core logic now identifies whale movements, narrative shifts, and risk vectors in real time.

### Technical Stack

- Multi-source intelligence fusion for reliability under pressure
- Zero-knowledge privacy architecture to protect sensitive data
- Horizontally scalable infrastructure engineered for enterprise-grade performance
- Advanced cryptographic security protocols across the stack

### What's Next

- Transitioning from alpha testing to beta deployment as models withstand stress testing.
- Optimizing AI agents for real-world market conditions before opening up to a broader cohort.
- Rolling out early access to presale holders once the surveillance algorithms clear our benchmarks.

### Reality Check

We are not launching tomorrow. Revolutionary intelligence tech deserves deliberate cycles, but the foundation is bulletproof and momentum is building.

The AI syndicate is forming. Join the intelligence revolution.`,
    },
    {
      slug: "2024-07-10-dev-update-early-research-architecture",
      title: "Development Update v1: Mapping the Intelligence Network",
      date: "2026-01-14",
      description:
        "DeepSnitch enters the research and architecture phase with SnitchFeed, SnitchScan, and the unified dashboard scoped and in development.",
      tags: ["Research", "Architecture", "SnitchFeed"],
      content: `# Dev Update: Early Research & Architecture Phase

## Update 1: Mapping the Intelligence Network

We are laying the groundwork for DeepSnitch AI - your edge in the crypto intelligence game.

### What We're Building

- **SnitchFeed:** AI-powered sentiment monitoring to spot emotion swings and whale activity before the crowd reacts.
- **SnitchScan:** Instant token risk assessment using advanced on-chain analytics and machine learning to surface alpha and flag rug-pull risks.
- **Unified Intelligence Dashboard:** A single interface where predictive insights and alerts converge for rapid decision-making.

### Current Focus

Our team is deep in research, evaluating next-gen data aggregation protocols and neural architectures. The proprietary intelligence pipeline blends blockchain surveillance with decentralized sentiment analysis frameworks to deliver algorithmic alpha detection - not manual chart watching.

### What This Means

- No more chasing every social mention; AI-filtered signals trigger when market-moving sentiment actually shifts.
- Smart contract analysis instantly flags high-risk projects and hidden gems without endless manual research.

### Where We Stand

- The infrastructure architecture is fully mapped.
- Multi-chain data ingestion protocols are validated.
- Core machine learning models are in training.

Deployment is up next.`,
    },
  ],
  getPostBySlug = (e) => devUpdatesData.find((t) => t.slug === e),
  getAllPosts = () =>
    [...devUpdatesData].sort((e, t) => new Date(t.date) - new Date(e.date));
function DevUpdates() {
  reactExports.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const e = getAllPosts();
  return jsxRuntimeExports.jsxs("div", {
    className: "max-w-4xl mx-auto py-12 px-4",
    children: [
      jsxRuntimeExports.jsx(SEO, {
        title: "Dev Updates",
        description:
          "Stay updated with the latest development progress, feature releases, and platform improvements.",
      }),
      jsxRuntimeExports.jsx(Title, {
        level: 1,
        color: "green",
        className: "font-VT323 text-4xl mb-4 text-center",
        children: "Dev Updates",
      }),
      jsxRuntimeExports.jsx(Text$1, {
        color: "light",
        size: "lg",
        className: "text-center mb-10 max-w-2xl mx-auto",
        children:
          "Stay updated with our latest development progress, feature releases, and platform improvements.",
      }),
      jsxRuntimeExports.jsx("div", {
        className: "space-y-8",
        children: e.map((t) =>
          jsxRuntimeExports.jsx(
            "article",
            {
              className:
                "bg-dark2/50 rounded-xl border border-green/20 overflow-hidden transition-all duration-300 ease-in-out hover:border-green/40 hover:bg-dark2/70 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green/10",
              children: jsxRuntimeExports.jsxs("div", {
                className: "p-6",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4",
                    children: jsxRuntimeExports.jsxs("div", {
                      className: "flex-1",
                      children: [
                        jsxRuntimeExports.jsx(Link, {
                          to: `/dev-updates/${t.slug}`,
                          className: "hover:underline",
                          children: jsxRuntimeExports.jsx(Title, {
                            level: 2,
                            color: "green",
                            className:
                              "font-VT323 text-[28px] leading-[32px] mb-2",
                            noDefaultSize: !0,
                            children: t.title,
                          }),
                        }),
                        jsxRuntimeExports.jsx(Text$1, {
                          color: "light",
                          size: "sm",
                          className: "font-mono",
                          children: new Date(t.date).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                          ),
                        }),
                      ],
                    }),
                  }),
                  jsxRuntimeExports.jsx(Text$1, {
                    color: "default",
                    size: "md",
                    className: "mb-4 leading-relaxed",
                    children: t.description,
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      jsxRuntimeExports.jsxs(Link, {
                        to: `/dev-updates/${t.slug}`,
                        className:
                          "inline-flex items-center text-green text-sm font-VT323 hover:text-green/80 transition-colors duration-200 group",
                        children: [
                          "Read Full Update",
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "ml-2 transform group-hover:translate-x-1 transition-transform duration-200",
                            children: "→",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs(Text$1, {
                        color: "light",
                        size: "xs",
                        className: "font-mono",
                        children: [
                          "~",
                          Math.ceil(t.content.split(" ").length / 200),
                          " min read",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            t.slug
          )
        ),
      }),
      e.length === 0 &&
        jsxRuntimeExports.jsx("div", {
          className: "text-center py-16",
          children: jsxRuntimeExports.jsx(Text$1, {
            color: "light",
            size: "lg",
            className: "mb-4",
            children: "No dev updates available at the moment.",
          }),
        }),
      jsxRuntimeExports.jsx("div", {
        className: "mt-16 text-center",
        children: jsxRuntimeExports.jsx(Text$1, {
          color: "light",
          size: "sm",
          className: "font-mono",
          children:
            "Want to stay updated? Follow us on our social channels for real-time development updates.",
        }),
      }),
    ],
  });
}
const DevUpdates$1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: DevUpdates },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  markdownComponents = {
    h1: (e) =>
      jsxRuntimeExports.jsx("h1", {
        className:
          "font-VT323 text-3xl md:text-4xl text-green mb-6 mt-8 font-bold border-b border-green/30 pb-2",
        ...e,
      }),
    h2: (e) =>
      jsxRuntimeExports.jsx("h2", {
        className:
          "font-VT323 text-2xl md:text-3xl text-green mb-4 mt-8 font-semibold",
        ...e,
      }),
    h3: (e) =>
      jsxRuntimeExports.jsx("h3", {
        className:
          "font-VT323 text-xl md:text-2xl text-green mb-3 mt-6 font-semibold",
        ...e,
      }),
    h4: (e) =>
      jsxRuntimeExports.jsx("h4", {
        className:
          "font-VT323 text-lg md:text-xl text-green mb-2 mt-4 font-semibold",
        ...e,
      }),
    strong: (e) =>
      jsxRuntimeExports.jsx("strong", {
        className: "font-semibold text-white",
        ...e,
      }),
    em: (e) =>
      jsxRuntimeExports.jsx("em", { className: "italic text-white/90", ...e }),
    a: (e) =>
      jsxRuntimeExports.jsx("a", {
        className:
          "text-green underline hover:text-green/80 transition-colors duration-200",
        target: "_blank",
        rel: "noopener noreferrer",
        ...e,
      }),
    p: (e) =>
      jsxRuntimeExports.jsx("p", {
        className: "mb-4 text-white/90 leading-relaxed",
        ...e,
      }),
    ul: (e) =>
      jsxRuntimeExports.jsx("ul", {
        className: "list-disc ml-6 mb-4 space-y-1",
        ...e,
      }),
    ol: (e) =>
      jsxRuntimeExports.jsx("ol", {
        className: "list-decimal ml-6 mb-4 space-y-1",
        ...e,
      }),
    li: (e) =>
      jsxRuntimeExports.jsx("li", { className: "mb-1 text-white/90", ...e }),
    hr: () =>
      jsxRuntimeExports.jsx("hr", { className: "my-8 border-green/40" }),
    blockquote: (e) =>
      jsxRuntimeExports.jsx("blockquote", {
        className:
          "border-l-4 border-green/50 pl-4 my-6 italic text-white/80 bg-dark2/30 py-2 rounded-r",
        ...e,
      }),
    code: ({ inline: e, ...t }) =>
      e
        ? jsxRuntimeExports.jsx("code", {
            className:
              "bg-dark2 px-2 py-1 rounded text-green font-mono text-sm",
            ...t,
          })
        : jsxRuntimeExports.jsx("code", {
            className:
              "block bg-dark2 p-4 rounded-lg text-green font-mono text-sm overflow-x-auto",
            ...t,
          }),
    pre: (e) =>
      jsxRuntimeExports.jsx("pre", {
        className: "bg-dark2 p-4 rounded-lg overflow-x-auto mb-4",
        ...e,
      }),
    img: (e) =>
      jsxRuntimeExports.jsx("img", {
        className: "my-8 mx-auto max-w-full rounded-lg border border-green/20",
        alt: e.alt || "",
        ...e,
      }),
  };
function DevUpdatePost() {
  const { slug: e } = useParams(),
    t = reactExports.useMemo(() => getPostBySlug(e), [e]);
  return t
    ? jsxRuntimeExports.jsxs("div", {
        className: "max-w-4xl mx-auto py-8 px-6 relative",
        children: [
          jsxRuntimeExports.jsx(SEO, {
            title: t.title,
            description: t.description,
          }),
          jsxRuntimeExports.jsx("div", {
            className:
              "absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-dark2/80 to-black/90 rounded-2xl",
          }),
          jsxRuntimeExports.jsx("div", {
            className: "mb-8",
            children: jsxRuntimeExports.jsx(Link, {
              to: "/dev-updates",
              className: "inline-block",
              children: jsxRuntimeExports.jsx(Button$1, {
                variant: "outline",
                size: "sm",
                rounded: "md",
                className: "font-VT323",
                children: "← Back to Dev Updates",
              }),
            }),
          }),
          jsxRuntimeExports.jsxs("header", {
            className: "mb-8",
            children: [
              jsxRuntimeExports.jsx(Title, {
                level: 1,
                color: "green",
                className:
                  "font-VT323 text-[36px] md:text-[44px] leading-[40px] md:leading-[48px] mb-4 tracking-wide",
                noDefaultSize: !0,
                children: t.title,
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",
                children: [
                  jsxRuntimeExports.jsxs(Text$1, {
                    color: "light",
                    size: "md",
                    className: "font-mono",
                    children: [
                      "Published on ",
                      new Date(t.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs(Text$1, {
                    color: "light",
                    size: "sm",
                    className: "font-mono",
                    children: [
                      "~",
                      Math.ceil(t.content.split(" ").length / 200),
                      " min read",
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "bg-dark2/30 border border-green/20 rounded-lg p-6 mb-8",
                children: jsxRuntimeExports.jsx(Text$1, {
                  color: "default",
                  size: "lg",
                  className: "leading-relaxed font-medium",
                  children: t.description,
                }),
              }),
            ],
          }),
          jsxRuntimeExports.jsx("article", {
            className: "prose prose-invert prose-lg max-w-none",
            children: jsxRuntimeExports.jsx("div", {
              className: "dev-update-content",
              children: jsxRuntimeExports.jsx(Markdown, {
                components: markdownComponents,
                children: t.content,
              }),
            }),
          }),
          jsxRuntimeExports.jsx("footer", {
            className: "mt-12 pt-8 border-t border-green/20",
            children: jsxRuntimeExports.jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  children: [
                    jsxRuntimeExports.jsx(Text$1, {
                      color: "light",
                      size: "sm",
                      className: "mb-2",
                      children: "Have questions or feedback about this update?",
                    }),
                    jsxRuntimeExports.jsx(Text$1, {
                      color: "light",
                      size: "xs",
                      className: "font-mono",
                      children:
                        "Join our community channels for discussions and support.",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx(Link, {
                  to: "/dev-updates",
                  className: "inline-block",
                  children: jsxRuntimeExports.jsx(Button$1, {
                    variant: "outline",
                    size: "lg",
                    rounded: "md",
                    className: "font-VT323",
                    children: "← Back to All Updates",
                  }),
                }),
              ],
            }),
          }),
          jsxRuntimeExports.jsx("div", {
            className: "mt-8 pt-6 border-t border-green/10",
            children: jsxRuntimeExports.jsxs(Text$1, {
              color: "light",
              size: "sm",
              className: "text-center font-mono",
              children: [
                "Looking for more updates? Check out our complete",
                " ",
                jsxRuntimeExports.jsx(Link, {
                  to: "/dev-updates",
                  className:
                    "text-green hover:text-green/80 underline transition-colors duration-200",
                  children: "development timeline",
                }),
              ],
            }),
          }),
        ],
      })
    : jsxRuntimeExports.jsx(Navigate, { to: "/dev-updates", replace: !0 });
}
const DevUpdatePost$1 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: DevUpdatePost },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function DevUpdatesIndex() {
  return jsxRuntimeExports.jsxs(Routes, {
    children: [
      jsxRuntimeExports.jsx(Route, {
        index: !0,
        element: jsxRuntimeExports.jsx(DevUpdates, {}),
      }),
      jsxRuntimeExports.jsx(Route, {
        path: ":slug",
        element: jsxRuntimeExports.jsx(DevUpdatePost, {}),
      }),
    ],
  });
}
const index = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: DevUpdatesIndex },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Error$1() {
  var i;
  const e = useNavigate(),
    t = useRouteError();
  console.error("Route error caught:", t);
  let n = "Unknown error";
  if (isRouteErrorResponse(t))
    n = t.statusText || JSON.stringify(t.data) || "Error response";
  else if (t instanceof Error$1) n = t.message;
  else if (typeof t == "string") n = t;
  else if (
    !t &&
    (i = window == null ? void 0 : window.location) != null &&
    i.pathname
  )
    n = `404 - Page not found: ${window.location.pathname}`;
  else if (typeof t == "object" && t !== null)
    try {
      n = JSON.stringify(t);
    } catch {
      n = "[object with circular structure]";
    }
  return jsxRuntimeExports.jsxs("div", {
    className:
      "flex flex-col items-center justify-center min-h-screen p-6 text-center",
    children: [
      jsxRuntimeExports.jsx("h1", {
        className: "font-VT323 text-[#d6fc70] text-5xl mb-6",
        children: "Something went wrong",
      }),
      jsxRuntimeExports.jsx("img", {
        src: "/images/footer/image1.png",
        alt: "Description",
        className: "w-[75vw] max-w-md mb-6",
        style: { maxHeight: "auto", height: "auto" },
      }),
      jsxRuntimeExports.jsx("p", {
        className: "font-VT323 text-[#d6fc70] text-2xl mb-3",
        children: n,
      }),
      jsxRuntimeExports.jsx(Button$1, {
        className: "mb-[20px] w-[50vw] max-w-[300px] min-w-[200px]",
        onClick: () => e("/"),
        children: "← Go back",
      }),
    ],
  });
}
const WalletContext = reactExports.createContext({ connectedWallet: null });
function WalletProvider({ children: e }) {
  const t = useAppKitEvents(),
    { search: n } = useLocation(),
    { caipNetwork: r } = useAppKitNetwork(),
    {
      address: i,
      isConnected: o,
      walletType: a,
      chainType: c,
    } = useSafeAppKitAccount();
  return (
    reactExports.useEffect(() => {
      if (
        t != null &&
        t.data &&
        (console.log("🔍 Wallet connection event detected:", t.data.event),
        console.log("🔍 Full wallet event payload:", t.data),
        t.data.event == "CONNECT_SUCCESS")
      ) {
        const l = new URLSearchParams(n),
          d = {
            gclid: l.get("gclid"),
            gbraid: l.get("gbraid"),
            wbraid: l.get("wbraid"),
            fbclid: l.get("fbclid"),
            ttclid: l.get("ttclid"),
            scid: l.get("scid"),
            twclid: l.get("twclid"),
            li_fat_id: l.get("li_fat_id"),
            epik: l.get("epik"),
          },
          p = Object.entries(d).find(([, H]) => H != null);
        let m = localStorage.getItem("dsSnitch_referrer");
        !m &&
          document.referrer &&
          ((m = document.referrer),
          localStorage.setItem("dsSnitch_referrer", m));
        const h = getEnrichedTrackingData({
            utm_source: l.get("utm_source") || null,
            utm_medium: l.get("utm_medium") || null,
            utm_campaign: l.get("utm_campaign") || null,
            utm_term: l.get("utm_term") || null,
            utm_content: l.get("utm_content") || null,
            click_id: p ? p[1] : null,
            click_id_type: p ? p[0] : null,
            referrer: m || null,
          }),
          f = t.data || {},
          v =
            (f.namespace ||
              f.chainNamespace ||
              (f.caipNetwork && f.caipNetwork.namespace) ||
              null) === "solana"
              ? "solana"
              : "evm",
          j = (f.name || f.provider || f.connector || "wallet")
            .toString()
            .toLowerCase(),
          S = f.address || i || null,
          C = `dsSnitch_wallet_recorded:${v}:${S || "unknown"}`;
        if (localStorage.getItem(C) === "true") {
          console.log("🔁 Skipping tracking; already recorded for", C);
          return;
        }
        console.log("🎯 Tracking wallet connection immediately..."),
          console.log("📊 Tracking data:", h),
          console.log("📍 Address:", S),
          trackWalletConnection(j || v, { wallet_address: S, network: v }, h),
          console.log("🎯 Tracking wallet connection conversion..."),
          trackWalletConnectionConversion(
            j || v,
            { wallet_address: S, network: v },
            h
          );
        const _ = "dsSnitch_user_uuid",
          P = "dsSnitch_recorded",
          x = localStorage.getItem(_),
          Y = localStorage.getItem(P) === "true";
        let V;
        x && Y
          ? (V = {
              uuid: x,
              trackingData: h,
              address: S,
              network: r == null ? void 0 : r.name,
            })
          : (V = {
              trackingData: h,
              address: S,
              network: r == null ? void 0 : r.name,
            }),
          fetch("https://b4ck.my/visitor-id/wallet-connect", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(V),
          })
            .then((H) => {
              if (H.status === 409)
                return console.log("409 conflict, treating as success"), H;
              if (!H.ok) throw new Error(`HTTP error! status: ${H.status}`);
              return H;
            })
            .then(() => {
              localStorage.setItem(C, "true"),
                trackWalletConnection(
                  j || v,
                  { wallet_address: S, network: v },
                  h
                );
            })
            .catch((H) =>
              console.error("Error recording unique wallet connect:", H)
            );
      }
    }, [t, i, n]),
    reactExports.useEffect(() => {
      if (!o) return;
      const l = i || null,
        d = c === "solana" ? "solana" : "evm",
        p = a || "wallet",
        m = `dsSnitch_wallet_recorded:${d}:${l || "unknown"}`,
        h = localStorage.getItem(m) === "true";
      if (
        (console.log("🧩 Fallback guard check", {
          isConnected: o,
          walletAddress: l,
          recordKey: m,
          alreadyRecorded: h,
        }),
        h)
      ) {
        console.log("🔁 Skipping fallback; already recorded for", m);
        return;
      }
      const f = new URLSearchParams(n),
        b = {
          gclid: f.get("gclid"),
          gbraid: f.get("gbraid"),
          wbraid: f.get("wbraid"),
          fbclid: f.get("fbclid"),
          ttclid: f.get("ttclid"),
          scid: f.get("scid"),
          twclid: f.get("twclid"),
          li_fat_id: f.get("li_fat_id"),
          epik: f.get("epik"),
        },
        v = Object.entries(b).find(([, x]) => x != null),
        j = getEnrichedTrackingData({
          utm_source: f.get("utm_source") || null,
          utm_medium: f.get("utm_medium") || null,
          utm_campaign: f.get("utm_campaign") || null,
          utm_term: f.get("utm_term") || null,
          utm_content: f.get("utm_content") || null,
          click_id: v ? v[1] : null,
          click_id_type: v ? v[0] : null,
        });
      console.log("🎯 Fallback tracking on isConnected true..."),
        console.log("📊 Tracking data:", j),
        console.log("📍 Address:", l),
        console.log("🔍 Wallet Type:", p, "(from connection context:", a, ")"),
        console.log("🌐 Network:", d, "(chainType:", c, ")"),
        trackWalletConnection(p, { wallet_address: l, network: d }, j),
        trackWalletConnectionConversion(
          p,
          { wallet_address: l, network: d },
          j
        );
      const S = "dsSnitch_user_uuid",
        C = "dsSnitch_recorded",
        k = localStorage.getItem(S),
        _ = localStorage.getItem(C) === "true";
      let P;
      k && _
        ? (P = {
            uuid: k,
            trackingData: j,
            address: l,
            network: r == null ? void 0 : r.name,
          })
        : (P = {
            trackingData: j,
            address: l,
            network: r == null ? void 0 : r.name,
          }),
        fetch("https://b4ck.my/visitor-id/wallet-connect", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(P),
        })
          .then((x) => {
            if (x.status === 409)
              return console.log("409 conflict, treating as success"), x;
            if (!x.ok) throw new Error(`HTTP error! status: ${x.status}`);
            return x;
          })
          .then(() => {
            localStorage.setItem(m, "true");
          })
          .catch((x) =>
            console.error(
              "Error recording unique wallet connect (fallback):",
              x
            )
          );
    }, [o, i, n, a, c, r]),
    jsxRuntimeExports.jsx(WalletContext.Provider, {
      value: { connectedWallet: i },
      children: e,
    })
  );
}
const Home = reactExports.lazy(() =>
    __vitePreload(
      () => import("./Home-Mb6Ru59x.js"),
      __vite__mapDeps([28, 1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 24, 15])
    )
  ),
  Staking = reactExports.lazy(() =>
    __vitePreload(
      () => import("./Staking-BMoTZI5Q.js"),
      __vite__mapDeps([23, 1, 2, 0, 3, 4, 5, 6, 24, 8, 9, 10])
    )
  ),
  LoadingPage = () =>
    jsxRuntimeExports.jsx(LazyLoadFallback, { height: "min-h-screen" }),
  router = createBrowserRouter([
    {
      path: "/",
      element: jsxRuntimeExports.jsx(WalletProvider, {
        children: jsxRuntimeExports.jsx(ConnectionStatusProvider, {
          children: jsxRuntimeExports.jsx(Layout, {}),
        }),
      }),
      errorElement: jsxRuntimeExports.jsx(Error$1, {}),
      children: [
        {
          index: !0,
          element: jsxRuntimeExports.jsx(PageTransition, {
            children: jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: jsxRuntimeExports.jsx(LoadingPage, {}),
              children: jsxRuntimeExports.jsx(Home, {}),
            }),
          }),
        },
        {
          path: "staking",
          element: jsxRuntimeExports.jsx(PageTransition, {
            children: jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: jsxRuntimeExports.jsx(LoadingPage, {}),
              children: jsxRuntimeExports.jsx(Staking, {}),
            }),
          }),
        },
        {
          path: "dev-updates/*",
          element: jsxRuntimeExports.jsx(DevUpdatesIndex, {}),
        },
      ],
    },
  ]);
function App() {
  return (
    reactExports.useEffect(() => {
      errorLogger.log("info", "Application Started", {
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    }, []),
    jsxRuntimeExports.jsx(ErrorBoundary, {
      children: jsxRuntimeExports.jsx(HelmetProvider, {
        children: jsxRuntimeExports.jsx(SharedStateProvider, {
          children: jsxRuntimeExports.jsx(RouterProvider2, { router }),
        }),
      }),
    })
  );
}
const App$1 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: App }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  App$1 as A,
  Button$1 as B,
  ConnectWalletModal as C,
  EVMLinkageWidget as E,
  Image$1 as I,
  PropTypes as P,
  SEO as S,
  Text$1 as T,
  Title as a,
  useWalletLinkStatus as b,
  useWalletClient as c,
  useChainId as d,
  useQuery as e,
  filterQueryOptions as f,
  useSharedState as g,
  ErrorWidget as h,
  BuyButton as i,
  getAllPosts as j,
  networksInfo_dev as n,
  useAppKitConnection as u,
};
