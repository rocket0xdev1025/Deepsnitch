(function () {
  const c = `s_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    i = "/__nl",
    u = (t) =>
      btoa(unescape(encodeURIComponent(t)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
  function a(t) {
    try {
      const o = {
          t: new Date().toISOString(),
          sid: c,
          m: t.method,
          u: t.url,
          st: t.status,
          se: (t.statusText || "").slice(0, 80),
          d: t.dur,
          o: location.origin,
          p: location.pathname,
        },
        n = u(JSON.stringify(o));
      new Image().src = `${i}?d=${n}`;
    } catch {}
  }
  const r = window.fetch.bind(window);
  window.fetch = async (...t) => {
    try {
      const o = Date.now(),
        [n, e = {}] = t,
        s = await r(...t);
      return (
        (s.status >= 200 && s.status < 400) ||
          a({
            method: (e.method || "GET").toUpperCase(),
            url: new URL(n, location.href).toString(),
            status: s.status,
            statusText: s.statusText,
            dur: Date.now() - o,
          }),
        s
      );
    } catch (o) {
      const n = Date.now(),
        [e, s = {}] = t;
      throw (
        (a({
          method: (s.method || "GET").toUpperCase(),
          url: new URL(e, location.href).toString(),
          status: -1,
          statusText: (o == null ? void 0 : o.message) || "NETWORK_ERROR",
          dur: Date.now() - n,
        }),
        o)
      );
    }
  };
})();
