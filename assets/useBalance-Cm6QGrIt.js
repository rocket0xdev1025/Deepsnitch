import { f as c, d as u, e as i } from "./App-B3-mP0gp.js";
import { f as d } from "./index-BN8Hac8J.js";
import { m as l } from "./wallet-libs-C4iBya-7.js";
function f(e, r = {}) {
  return {
    async queryFn({ queryKey: a }) {
      const { address: n, scopeKey: s, ...o } = a[1];
      if (!n) throw new Error("address is required");
      return (await l(e, { ...o, address: n })) ?? null;
    },
    queryKey: y(r),
  };
}
function y(e = {}) {
  return ["balance", c(e)];
}
function h(e = {}) {
  const { address: r, query: a = {} } = e,
    n = d(e),
    s = u({ config: n }),
    o = f(n, { ...e, chainId: e.chainId ?? s }),
    t = !!(r && (a.enabled ?? !0));
  return i({ ...a, ...o, enabled: t });
}
export { h as u };
