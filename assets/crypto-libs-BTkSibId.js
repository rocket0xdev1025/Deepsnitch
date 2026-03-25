var Qw = Object.defineProperty;
var n0 = (n) => {
  throw TypeError(n);
};
var Jw = (n, t, e) =>
  t in n
    ? Qw(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var tt = (n, t, e) => Jw(n, typeof t != "symbol" ? t + "" : t, e),
  hf = (n, t, e) => t.has(n) || n0("Cannot " + e);
var C = (n, t, e) => (
    hf(n, t, "read from private field"), e ? e.call(n) : t.get(n)
  ),
  ut = (n, t, e) =>
    t.has(n)
      ? n0("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(n)
      : t.set(n, e),
  Q = (n, t, e, r) => (
    hf(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e
  ),
  pt = (n, t, e) => (hf(n, t, "access private method"), e);
var Xa = (n, t, e, r) => ({
  set _(i) {
    Q(n, t, i, e);
  },
  get _() {
    return C(n, t, r);
  },
});
var tB =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function gl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function xg(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var t = n.default;
  if (typeof t == "function") {
    var e = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return (
    Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.keys(n).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(n, r);
      Object.defineProperty(
        e,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            }
      );
    }),
    e
  );
}
const nu = BigInt(2 ** 32 - 1),
  i0 = BigInt(32);
function jw(n, t = !1) {
  return t
    ? { h: Number(n & nu), l: Number((n >> i0) & nu) }
    : { h: Number((n >> i0) & nu) | 0, l: Number(n & nu) | 0 };
}
function kg(n, t = !1) {
  const e = n.length;
  let r = new Uint32Array(e),
    i = new Uint32Array(e);
  for (let s = 0; s < e; s++) {
    const { h: o, l: a } = jw(n[s], t);
    [r[s], i[s]] = [o, a];
  }
  return [r, i];
}
const s0 = (n, t, e) => n >>> e,
  o0 = (n, t, e) => (n << (32 - e)) | (t >>> e),
  wo = (n, t, e) => (n >>> e) | (t << (32 - e)),
  bo = (n, t, e) => (n << (32 - e)) | (t >>> e),
  iu = (n, t, e) => (n << (64 - e)) | (t >>> (e - 32)),
  su = (n, t, e) => (n >>> (e - 32)) | (t << (64 - e)),
  Zw = (n, t, e) => (n << e) | (t >>> (32 - e)),
  Yw = (n, t, e) => (t << e) | (n >>> (32 - e)),
  Xw = (n, t, e) => (t << (e - 32)) | (n >>> (64 - e)),
  t1 = (n, t, e) => (n << (e - 32)) | (t >>> (64 - e));
function jn(n, t, e, r) {
  const i = (t >>> 0) + (r >>> 0);
  return { h: (n + e + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
const e1 = (n, t, e) => (n >>> 0) + (t >>> 0) + (e >>> 0),
  r1 = (n, t, e, r) => (t + e + r + ((n / 2 ** 32) | 0)) | 0,
  n1 = (n, t, e, r) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0),
  i1 = (n, t, e, r, i) => (t + e + r + i + ((n / 2 ** 32) | 0)) | 0,
  s1 = (n, t, e, r, i) =>
    (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0),
  o1 = (n, t, e, r, i, s) => (t + e + r + i + s + ((n / 2 ** 32) | 0)) | 0,
  Ao =
    typeof globalThis == "object" && "crypto" in globalThis
      ? globalThis.crypto
      : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Vc(
  n
) {
  return (
    n instanceof Uint8Array ||
    (ArrayBuffer.isView(n) && n.constructor.name === "Uint8Array")
  );
}
function gc(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function ki(n, ...t) {
  if (!Vc(n)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(n.length))
    throw new Error(
      "Uint8Array expected of length " + t + ", got length=" + n.length
    );
}
function vg(n) {
  if (typeof n != "function" || typeof n.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  gc(n.outputLen), gc(n.blockLen);
}
function _a(n, t = !0) {
  if (n.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && n.finished) throw new Error("Hash#digest() has already been called");
}
function Sg(n, t) {
  ki(n);
  const e = t.outputLen;
  if (n.length < e)
    throw new Error(
      "digestInto() expects output buffer of length at least " + e
    );
}
function a1(n) {
  return new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4));
}
function cs(...n) {
  for (let t = 0; t < n.length; t++) n[t].fill(0);
}
function df(n) {
  return new DataView(n.buffer, n.byteOffset, n.byteLength);
}
function Sn(n, t) {
  return (n << (32 - t)) | (n >>> t);
}
const c1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function u1(n) {
  return (
    ((n << 24) & 4278190080) |
    ((n << 8) & 16711680) |
    ((n >>> 8) & 65280) |
    ((n >>> 24) & 255)
  );
}
function l1(n) {
  for (let t = 0; t < n.length; t++) n[t] = u1(n[t]);
  return n;
}
const a0 = c1 ? (n) => n : l1,
  Ig =
    typeof Uint8Array.from([]).toHex == "function" &&
    typeof Uint8Array.fromHex == "function",
  f1 = Array.from({ length: 256 }, (n, t) => t.toString(16).padStart(2, "0"));
function Xs(n) {
  if ((ki(n), Ig)) return n.toHex();
  let t = "";
  for (let e = 0; e < n.length; e++) t += f1[n[e]];
  return t;
}
const Zn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function c0(n) {
  if (n >= Zn._0 && n <= Zn._9) return n - Zn._0;
  if (n >= Zn.A && n <= Zn.F) return n - (Zn.A - 10);
  if (n >= Zn.a && n <= Zn.f) return n - (Zn.a - 10);
}
function Mu(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  if (Ig) return Uint8Array.fromHex(n);
  const t = n.length,
    e = t / 2;
  if (t % 2)
    throw new Error("hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(e);
  for (let i = 0, s = 0; i < e; i++, s += 2) {
    const o = c0(n.charCodeAt(s)),
      a = c0(n.charCodeAt(s + 1));
    if (o === void 0 || a === void 0) {
      const c = n[s] + n[s + 1];
      throw new Error(
        'hex string expected, got non-hex character "' + c + '" at index ' + s
      );
    }
    r[i] = o * 16 + a;
  }
  return r;
}
function h1(n) {
  if (typeof n != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(n));
}
function yl(n) {
  return typeof n == "string" && (n = h1(n)), ki(n), n;
}
function Fn(...n) {
  let t = 0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    ki(i), (t += i.length);
  }
  const e = new Uint8Array(t);
  for (let r = 0, i = 0; r < n.length; r++) {
    const s = n[r];
    e.set(s, i), (i += s.length);
  }
  return e;
}
let nd = class {};
function ml(n) {
  const t = (r) => n().update(yl(r)).digest(),
    e = n();
  return (
    (t.outputLen = e.outputLen),
    (t.blockLen = e.blockLen),
    (t.create = () => n()),
    t
  );
}
function id(n = 32) {
  if (Ao && typeof Ao.getRandomValues == "function")
    return Ao.getRandomValues(new Uint8Array(n));
  if (Ao && typeof Ao.randomBytes == "function")
    return Uint8Array.from(Ao.randomBytes(n));
  throw new Error("crypto.getRandomValues must be defined");
}
const d1 = BigInt(0),
  tc = BigInt(1),
  p1 = BigInt(2),
  g1 = BigInt(7),
  y1 = BigInt(256),
  m1 = BigInt(113),
  Bg = [],
  Rg = [],
  Pg = [];
for (let n = 0, t = tc, e = 1, r = 0; n < 24; n++) {
  ([e, r] = [r, (2 * e + 3 * r) % 5]),
    Bg.push(2 * (5 * r + e)),
    Rg.push((((n + 1) * (n + 2)) / 2) % 64);
  let i = d1;
  for (let s = 0; s < 7; s++)
    (t = ((t << tc) ^ ((t >> g1) * m1)) % y1),
      t & p1 && (i ^= tc << ((tc << BigInt(s)) - tc));
  Pg.push(i);
}
const Cg = kg(Pg, !0),
  w1 = Cg[0],
  b1 = Cg[1],
  u0 = (n, t, e) => (e > 32 ? Xw(n, t, e) : Zw(n, t, e)),
  l0 = (n, t, e) => (e > 32 ? t1(n, t, e) : Yw(n, t, e));
function A1(n, t = 24) {
  const e = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      e[o] = n[o] ^ n[o + 10] ^ n[o + 20] ^ n[o + 30] ^ n[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10,
        c = (o + 2) % 10,
        f = e[c],
        h = e[c + 1],
        b = u0(f, h, 1) ^ e[a],
        S = l0(f, h, 1) ^ e[a + 1];
      for (let P = 0; P < 50; P += 10) (n[o + P] ^= b), (n[o + P + 1] ^= S);
    }
    let i = n[2],
      s = n[3];
    for (let o = 0; o < 24; o++) {
      const a = Rg[o],
        c = u0(i, s, a),
        f = l0(i, s, a),
        h = Bg[o];
      (i = n[h]), (s = n[h + 1]), (n[h] = c), (n[h + 1] = f);
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) e[a] = n[o + a];
      for (let a = 0; a < 10; a++)
        n[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    (n[0] ^= w1[r]), (n[1] ^= b1[r]);
  }
  cs(e);
}
let E1 = class Ng extends nd {
  constructor(t, e, r, i = !1, s = 24) {
    if (
      (super(),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      (this.enableXOF = !1),
      (this.blockLen = t),
      (this.suffix = e),
      (this.outputLen = r),
      (this.enableXOF = i),
      (this.rounds = s),
      gc(r),
      !(0 < t && t < 200))
    )
      throw new Error("only keccak-f1600 function is supported");
    (this.state = new Uint8Array(200)), (this.state32 = a1(this.state));
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    a0(this.state32),
      A1(this.state32, this.rounds),
      a0(this.state32),
      (this.posOut = 0),
      (this.pos = 0);
  }
  update(t) {
    _a(this), (t = yl(t)), ki(t);
    const { blockLen: e, state: r } = this,
      i = t.length;
    for (let s = 0; s < i; ) {
      const o = Math.min(e - this.pos, i - s);
      for (let a = 0; a < o; a++) r[this.pos++] ^= t[s++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: e, pos: r, blockLen: i } = this;
    (t[r] ^= e),
      (e & 128) !== 0 && r === i - 1 && this.keccak(),
      (t[i - 1] ^= 128),
      this.keccak();
  }
  writeInto(t) {
    _a(this, !1), ki(t), this.finish();
    const e = this.state,
      { blockLen: r } = this;
    for (let i = 0, s = t.length; i < s; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, s - i);
      t.set(e.subarray(this.posOut, this.posOut + o), i),
        (this.posOut += o),
        (i += o);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return gc(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((Sg(t, this), this.finished))
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), cs(this.state);
  }
  _cloneInto(t) {
    const {
      blockLen: e,
      suffix: r,
      outputLen: i,
      rounds: s,
      enableXOF: o,
    } = this;
    return (
      t || (t = new Ng(e, r, i, o, s)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = s),
      (t.suffix = r),
      (t.outputLen = i),
      (t.enableXOF = o),
      (t.destroyed = this.destroyed),
      t
    );
  }
};
const x1 = (n, t, e) => ml(() => new E1(t, n, e)),
  f0 = x1(1, 136, 256 / 8);
function k1(n, t, e, r) {
  if (typeof n.setBigUint64 == "function") return n.setBigUint64(t, e, r);
  const i = BigInt(32),
    s = BigInt(4294967295),
    o = Number((e >> i) & s),
    a = Number(e & s),
    c = r ? 4 : 0,
    f = r ? 0 : 4;
  n.setUint32(t + c, o, r), n.setUint32(t + f, a, r);
}
function v1(n, t, e) {
  return (n & t) ^ (~n & e);
}
function S1(n, t, e) {
  return (n & t) ^ (n & e) ^ (t & e);
}
class Tg extends nd {
  constructor(t, e, r, i) {
    super(),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.blockLen = t),
      (this.outputLen = e),
      (this.padOffset = r),
      (this.isLE = i),
      (this.buffer = new Uint8Array(t)),
      (this.view = df(this.buffer));
  }
  update(t) {
    _a(this), (t = yl(t)), ki(t);
    const { view: e, buffer: r, blockLen: i } = this,
      s = t.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const c = df(t);
        for (; i <= s - o; o += i) this.process(c, o);
        continue;
      }
      r.set(t.subarray(o, o + a), this.pos),
        (this.pos += a),
        (o += a),
        this.pos === i && (this.process(e, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    _a(this), Sg(t, this), (this.finished = !0);
    const { buffer: e, view: r, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    (e[o++] = 128),
      cs(this.buffer.subarray(o)),
      this.padOffset > i - o && (this.process(r, 0), (o = 0));
    for (let b = o; b < i; b++) e[b] = 0;
    k1(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const a = df(t),
      c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const f = c / 4,
      h = this.get();
    if (f > h.length) throw new Error("_sha2: outputLen bigger than state");
    for (let b = 0; b < f; b++) a.setUint32(4 * b, h[b], s);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const r = t.slice(0, e);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const {
      blockLen: e,
      buffer: r,
      length: i,
      finished: s,
      destroyed: o,
      pos: a,
    } = this;
    return (
      (t.destroyed = o),
      (t.finished = s),
      (t.length = i),
      (t.pos = a),
      i % e && t.buffer.set(r),
      t
    );
  }
  clone() {
    return this._cloneInto();
  }
}
const Pi = Uint32Array.from([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  lr = Uint32Array.from([
    3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
    355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
    3675008525, 1694076839, 1203062813, 3204075428,
  ]),
  fr = Uint32Array.from([
    1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
    2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
    528734635, 4215389547, 1541459225, 327033209,
  ]),
  I1 = Uint32Array.from([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Ci = new Uint32Array(64);
let B1 = class extends Tg {
  constructor(t = 32) {
    super(64, t, 8, !1),
      (this.A = Pi[0] | 0),
      (this.B = Pi[1] | 0),
      (this.C = Pi[2] | 0),
      (this.D = Pi[3] | 0),
      (this.E = Pi[4] | 0),
      (this.F = Pi[5] | 0),
      (this.G = Pi[6] | 0),
      (this.H = Pi[7] | 0);
  }
  get() {
    const { A: t, B: e, C: r, D: i, E: s, F: o, G: a, H: c } = this;
    return [t, e, r, i, s, o, a, c];
  }
  set(t, e, r, i, s, o, a, c) {
    (this.A = t | 0),
      (this.B = e | 0),
      (this.C = r | 0),
      (this.D = i | 0),
      (this.E = s | 0),
      (this.F = o | 0),
      (this.G = a | 0),
      (this.H = c | 0);
  }
  process(t, e) {
    for (let b = 0; b < 16; b++, e += 4) Ci[b] = t.getUint32(e, !1);
    for (let b = 16; b < 64; b++) {
      const S = Ci[b - 15],
        P = Ci[b - 2],
        M = Sn(S, 7) ^ Sn(S, 18) ^ (S >>> 3),
        N = Sn(P, 17) ^ Sn(P, 19) ^ (P >>> 10);
      Ci[b] = (N + Ci[b - 7] + M + Ci[b - 16]) | 0;
    }
    let { A: r, B: i, C: s, D: o, E: a, F: c, G: f, H: h } = this;
    for (let b = 0; b < 64; b++) {
      const S = Sn(a, 6) ^ Sn(a, 11) ^ Sn(a, 25),
        P = (h + S + v1(a, c, f) + I1[b] + Ci[b]) | 0,
        N = ((Sn(r, 2) ^ Sn(r, 13) ^ Sn(r, 22)) + S1(r, i, s)) | 0;
      (h = f),
        (f = c),
        (c = a),
        (a = (o + P) | 0),
        (o = s),
        (s = i),
        (i = r),
        (r = (P + N) | 0);
    }
    (r = (r + this.A) | 0),
      (i = (i + this.B) | 0),
      (s = (s + this.C) | 0),
      (o = (o + this.D) | 0),
      (a = (a + this.E) | 0),
      (c = (c + this.F) | 0),
      (f = (f + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(r, i, s, o, a, c, f, h);
  }
  roundClean() {
    cs(Ci);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), cs(this.buffer);
  }
};
const _g = kg(
    [
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817",
    ].map((n) => BigInt(n))
  ),
  R1 = _g[0],
  P1 = _g[1],
  Ni = new Uint32Array(80),
  Ti = new Uint32Array(80);
let Og = class extends Tg {
  constructor(t = 64) {
    super(128, t, 16, !1),
      (this.Ah = fr[0] | 0),
      (this.Al = fr[1] | 0),
      (this.Bh = fr[2] | 0),
      (this.Bl = fr[3] | 0),
      (this.Ch = fr[4] | 0),
      (this.Cl = fr[5] | 0),
      (this.Dh = fr[6] | 0),
      (this.Dl = fr[7] | 0),
      (this.Eh = fr[8] | 0),
      (this.El = fr[9] | 0),
      (this.Fh = fr[10] | 0),
      (this.Fl = fr[11] | 0),
      (this.Gh = fr[12] | 0),
      (this.Gl = fr[13] | 0),
      (this.Hh = fr[14] | 0),
      (this.Hl = fr[15] | 0);
  }
  get() {
    const {
      Ah: t,
      Al: e,
      Bh: r,
      Bl: i,
      Ch: s,
      Cl: o,
      Dh: a,
      Dl: c,
      Eh: f,
      El: h,
      Fh: b,
      Fl: S,
      Gh: P,
      Gl: M,
      Hh: N,
      Hl: D,
    } = this;
    return [t, e, r, i, s, o, a, c, f, h, b, S, P, M, N, D];
  }
  set(t, e, r, i, s, o, a, c, f, h, b, S, P, M, N, D) {
    (this.Ah = t | 0),
      (this.Al = e | 0),
      (this.Bh = r | 0),
      (this.Bl = i | 0),
      (this.Ch = s | 0),
      (this.Cl = o | 0),
      (this.Dh = a | 0),
      (this.Dl = c | 0),
      (this.Eh = f | 0),
      (this.El = h | 0),
      (this.Fh = b | 0),
      (this.Fl = S | 0),
      (this.Gh = P | 0),
      (this.Gl = M | 0),
      (this.Hh = N | 0),
      (this.Hl = D | 0);
  }
  process(t, e) {
    for (let V = 0; V < 16; V++, e += 4)
      (Ni[V] = t.getUint32(e)), (Ti[V] = t.getUint32((e += 4)));
    for (let V = 16; V < 80; V++) {
      const et = Ni[V - 15] | 0,
        it = Ti[V - 15] | 0,
        X = wo(et, it, 1) ^ wo(et, it, 8) ^ s0(et, it, 7),
        nt = bo(et, it, 1) ^ bo(et, it, 8) ^ o0(et, it, 7),
        R = Ni[V - 2] | 0,
        x = Ti[V - 2] | 0,
        B = wo(R, x, 19) ^ iu(R, x, 61) ^ s0(R, x, 6),
        F = bo(R, x, 19) ^ su(R, x, 61) ^ o0(R, x, 6),
        v = n1(nt, F, Ti[V - 7], Ti[V - 16]),
        y = i1(v, X, B, Ni[V - 7], Ni[V - 16]);
      (Ni[V] = y | 0), (Ti[V] = v | 0);
    }
    let {
      Ah: r,
      Al: i,
      Bh: s,
      Bl: o,
      Ch: a,
      Cl: c,
      Dh: f,
      Dl: h,
      Eh: b,
      El: S,
      Fh: P,
      Fl: M,
      Gh: N,
      Gl: D,
      Hh: q,
      Hl: z,
    } = this;
    for (let V = 0; V < 80; V++) {
      const et = wo(b, S, 14) ^ wo(b, S, 18) ^ iu(b, S, 41),
        it = bo(b, S, 14) ^ bo(b, S, 18) ^ su(b, S, 41),
        X = (b & P) ^ (~b & N),
        nt = (S & M) ^ (~S & D),
        R = s1(z, it, nt, P1[V], Ti[V]),
        x = o1(R, q, et, X, R1[V], Ni[V]),
        B = R | 0,
        F = wo(r, i, 28) ^ iu(r, i, 34) ^ iu(r, i, 39),
        v = bo(r, i, 28) ^ su(r, i, 34) ^ su(r, i, 39),
        y = (r & s) ^ (r & a) ^ (s & a),
        u = (i & o) ^ (i & c) ^ (o & c);
      (q = N | 0),
        (z = D | 0),
        (N = P | 0),
        (D = M | 0),
        (P = b | 0),
        (M = S | 0),
        ({ h: b, l: S } = jn(f | 0, h | 0, x | 0, B | 0)),
        (f = a | 0),
        (h = c | 0),
        (a = s | 0),
        (c = o | 0),
        (s = r | 0),
        (o = i | 0);
      const l = e1(B, v, u);
      (r = r1(l, x, F, y)), (i = l | 0);
    }
    ({ h: r, l: i } = jn(this.Ah | 0, this.Al | 0, r | 0, i | 0)),
      ({ h: s, l: o } = jn(this.Bh | 0, this.Bl | 0, s | 0, o | 0)),
      ({ h: a, l: c } = jn(this.Ch | 0, this.Cl | 0, a | 0, c | 0)),
      ({ h: f, l: h } = jn(this.Dh | 0, this.Dl | 0, f | 0, h | 0)),
      ({ h: b, l: S } = jn(this.Eh | 0, this.El | 0, b | 0, S | 0)),
      ({ h: P, l: M } = jn(this.Fh | 0, this.Fl | 0, P | 0, M | 0)),
      ({ h: N, l: D } = jn(this.Gh | 0, this.Gl | 0, N | 0, D | 0)),
      ({ h: q, l: z } = jn(this.Hh | 0, this.Hl | 0, q | 0, z | 0)),
      this.set(r, i, s, o, a, c, f, h, b, S, P, M, N, D, q, z);
  }
  roundClean() {
    cs(Ni, Ti);
  }
  destroy() {
    cs(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
class C1 extends Og {
  constructor() {
    super(48),
      (this.Ah = lr[0] | 0),
      (this.Al = lr[1] | 0),
      (this.Bh = lr[2] | 0),
      (this.Bl = lr[3] | 0),
      (this.Ch = lr[4] | 0),
      (this.Cl = lr[5] | 0),
      (this.Dh = lr[6] | 0),
      (this.Dl = lr[7] | 0),
      (this.Eh = lr[8] | 0),
      (this.El = lr[9] | 0),
      (this.Fh = lr[10] | 0),
      (this.Fl = lr[11] | 0),
      (this.Gh = lr[12] | 0),
      (this.Gl = lr[13] | 0),
      (this.Hh = lr[14] | 0),
      (this.Hl = lr[15] | 0);
  }
}
const Mg = ml(() => new B1()),
  N1 = ml(() => new Og()),
  iB = ml(() => new C1()),
  h0 = Mg;
let Lg = class extends nd {
  constructor(t, e) {
    super(), (this.finished = !1), (this.destroyed = !1), vg(t);
    const r = yl(e);
    if (((this.iHash = t.create()), typeof this.iHash.update != "function"))
      throw new Error("Expected instance of class which extends utils.Hash");
    (this.blockLen = this.iHash.blockLen),
      (this.outputLen = this.iHash.outputLen);
    const i = this.blockLen,
      s = new Uint8Array(i);
    s.set(r.length > i ? t.create().update(r).digest() : r);
    for (let o = 0; o < s.length; o++) s[o] ^= 54;
    this.iHash.update(s), (this.oHash = t.create());
    for (let o = 0; o < s.length; o++) s[o] ^= 106;
    this.oHash.update(s), cs(s);
  }
  update(t) {
    return _a(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    _a(this),
      ki(t, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(t),
      this.oHash.update(t),
      this.oHash.digestInto(t),
      this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const {
      oHash: e,
      iHash: r,
      finished: i,
      destroyed: s,
      blockLen: o,
      outputLen: a,
    } = this;
    return (
      (t = t),
      (t.finished = i),
      (t.destroyed = s),
      (t.blockLen = o),
      (t.outputLen = a),
      (t.oHash = e._cloneInto(t.oHash)),
      (t.iHash = r._cloneInto(t.iHash)),
      t
    );
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
};
const Ug = (n, t, e) => new Lg(n, t).update(e).digest();
Ug.create = (n, t) => new Lg(n, t);
var sd = {},
  wl = {};
wl.byteLength = O1;
wl.toByteArray = L1;
wl.fromByteArray = D1;
var Dn = [],
  tn = [],
  T1 = typeof Uint8Array < "u" ? Uint8Array : Array,
  pf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Eo = 0, _1 = pf.length; Eo < _1; ++Eo)
  (Dn[Eo] = pf[Eo]), (tn[pf.charCodeAt(Eo)] = Eo);
tn[45] = 62;
tn[95] = 63;
function Fg(n) {
  var t = n.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = n.indexOf("=");
  e === -1 && (e = t);
  var r = e === t ? 0 : 4 - (e % 4);
  return [e, r];
}
function O1(n) {
  var t = Fg(n),
    e = t[0],
    r = t[1];
  return ((e + r) * 3) / 4 - r;
}
function M1(n, t, e) {
  return ((t + e) * 3) / 4 - e;
}
function L1(n) {
  var t,
    e = Fg(n),
    r = e[0],
    i = e[1],
    s = new T1(M1(n, r, i)),
    o = 0,
    a = i > 0 ? r - 4 : r,
    c;
  for (c = 0; c < a; c += 4)
    (t =
      (tn[n.charCodeAt(c)] << 18) |
      (tn[n.charCodeAt(c + 1)] << 12) |
      (tn[n.charCodeAt(c + 2)] << 6) |
      tn[n.charCodeAt(c + 3)]),
      (s[o++] = (t >> 16) & 255),
      (s[o++] = (t >> 8) & 255),
      (s[o++] = t & 255);
  return (
    i === 2 &&
      ((t = (tn[n.charCodeAt(c)] << 2) | (tn[n.charCodeAt(c + 1)] >> 4)),
      (s[o++] = t & 255)),
    i === 1 &&
      ((t =
        (tn[n.charCodeAt(c)] << 10) |
        (tn[n.charCodeAt(c + 1)] << 4) |
        (tn[n.charCodeAt(c + 2)] >> 2)),
      (s[o++] = (t >> 8) & 255),
      (s[o++] = t & 255)),
    s
  );
}
function U1(n) {
  return (
    Dn[(n >> 18) & 63] + Dn[(n >> 12) & 63] + Dn[(n >> 6) & 63] + Dn[n & 63]
  );
}
function F1(n, t, e) {
  for (var r, i = [], s = t; s < e; s += 3)
    (r =
      ((n[s] << 16) & 16711680) + ((n[s + 1] << 8) & 65280) + (n[s + 2] & 255)),
      i.push(U1(r));
  return i.join("");
}
function D1(n) {
  for (
    var t, e = n.length, r = e % 3, i = [], s = 16383, o = 0, a = e - r;
    o < a;
    o += s
  )
    i.push(F1(n, o, o + s > a ? a : o + s));
  return (
    r === 1
      ? ((t = n[e - 1]), i.push(Dn[t >> 2] + Dn[(t << 4) & 63] + "=="))
      : r === 2 &&
        ((t = (n[e - 2] << 8) + n[e - 1]),
        i.push(Dn[t >> 10] + Dn[(t >> 4) & 63] + Dn[(t << 2) & 63] + "=")),
    i.join("")
  );
}
var od = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ od.read =
  function (n, t, e, r, i) {
    var s,
      o,
      a = i * 8 - r - 1,
      c = (1 << a) - 1,
      f = c >> 1,
      h = -7,
      b = e ? i - 1 : 0,
      S = e ? -1 : 1,
      P = n[t + b];
    for (
      b += S, s = P & ((1 << -h) - 1), P >>= -h, h += a;
      h > 0;
      s = s * 256 + n[t + b], b += S, h -= 8
    );
    for (
      o = s & ((1 << -h) - 1), s >>= -h, h += r;
      h > 0;
      o = o * 256 + n[t + b], b += S, h -= 8
    );
    if (s === 0) s = 1 - f;
    else {
      if (s === c) return o ? NaN : (P ? -1 : 1) * (1 / 0);
      (o = o + Math.pow(2, r)), (s = s - f);
    }
    return (P ? -1 : 1) * o * Math.pow(2, s - r);
  };
od.write = function (n, t, e, r, i, s) {
  var o,
    a,
    c,
    f = s * 8 - i - 1,
    h = (1 << f) - 1,
    b = h >> 1,
    S = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    P = r ? 0 : s - 1,
    M = r ? 1 : -1,
    N = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((a = isNaN(t) ? 1 : 0), (o = h))
        : ((o = Math.floor(Math.log(t) / Math.LN2)),
          t * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
          o + b >= 1 ? (t += S / c) : (t += S * Math.pow(2, 1 - b)),
          t * c >= 2 && (o++, (c /= 2)),
          o + b >= h
            ? ((a = 0), (o = h))
            : o + b >= 1
            ? ((a = (t * c - 1) * Math.pow(2, i)), (o = o + b))
            : ((a = t * Math.pow(2, b - 1) * Math.pow(2, i)), (o = 0)));
    i >= 8;
    n[e + P] = a & 255, P += M, a /= 256, i -= 8
  );
  for (
    o = (o << i) | a, f += i;
    f > 0;
    n[e + P] = o & 255, P += M, o /= 256, f -= 8
  );
  n[e + P - M] |= N * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (n) {
  const t = wl,
    e = od,
    r =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (n.Buffer = h), (n.SlowBuffer = it), (n.INSPECT_MAX_BYTES = 50);
  const i = 2147483647;
  n.kMaxLength = i;
  const { Uint8Array: s, ArrayBuffer: o, SharedArrayBuffer: a } = globalThis;
  (h.TYPED_ARRAY_SUPPORT = c()),
    !h.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function c() {
    try {
      const L = new s(1),
        m = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(m, s.prototype),
        Object.setPrototypeOf(L, m),
        L.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (h.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(h.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (h.isBuffer(this)) return this.byteOffset;
      },
    });
  function f(L) {
    if (L > i)
      throw new RangeError(
        'The value "' + L + '" is invalid for option "size"'
      );
    const m = new s(L);
    return Object.setPrototypeOf(m, h.prototype), m;
  }
  function h(L, m, A) {
    if (typeof L == "number") {
      if (typeof m == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return M(L);
    }
    return b(L, m, A);
  }
  h.poolSize = 8192;
  function b(L, m, A) {
    if (typeof L == "string") return N(L, m);
    if (o.isView(L)) return q(L);
    if (L == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof L
      );
    if (
      ur(L, o) ||
      (L && ur(L.buffer, o)) ||
      (typeof a < "u" && (ur(L, a) || (L && ur(L.buffer, a))))
    )
      return z(L, m, A);
    if (typeof L == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const K = L.valueOf && L.valueOf();
    if (K != null && K !== L) return h.from(K, m, A);
    const j = V(L);
    if (j) return j;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof L[Symbol.toPrimitive] == "function"
    )
      return h.from(L[Symbol.toPrimitive]("string"), m, A);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof L
    );
  }
  (h.from = function (L, m, A) {
    return b(L, m, A);
  }),
    Object.setPrototypeOf(h.prototype, s.prototype),
    Object.setPrototypeOf(h, s);
  function S(L) {
    if (typeof L != "number")
      throw new TypeError('"size" argument must be of type number');
    if (L < 0)
      throw new RangeError(
        'The value "' + L + '" is invalid for option "size"'
      );
  }
  function P(L, m, A) {
    return (
      S(L),
      L <= 0
        ? f(L)
        : m !== void 0
        ? typeof A == "string"
          ? f(L).fill(m, A)
          : f(L).fill(m)
        : f(L)
    );
  }
  h.alloc = function (L, m, A) {
    return P(L, m, A);
  };
  function M(L) {
    return S(L), f(L < 0 ? 0 : et(L) | 0);
  }
  (h.allocUnsafe = function (L) {
    return M(L);
  }),
    (h.allocUnsafeSlow = function (L) {
      return M(L);
    });
  function N(L, m) {
    if (((typeof m != "string" || m === "") && (m = "utf8"), !h.isEncoding(m)))
      throw new TypeError("Unknown encoding: " + m);
    const A = X(L, m) | 0;
    let K = f(A);
    const j = K.write(L, m);
    return j !== A && (K = K.slice(0, j)), K;
  }
  function D(L) {
    const m = L.length < 0 ? 0 : et(L.length) | 0,
      A = f(m);
    for (let K = 0; K < m; K += 1) A[K] = L[K] & 255;
    return A;
  }
  function q(L) {
    if (ur(L, s)) {
      const m = new s(L);
      return z(m.buffer, m.byteOffset, m.byteLength);
    }
    return D(L);
  }
  function z(L, m, A) {
    if (m < 0 || L.byteLength < m)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (L.byteLength < m + (A || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let K;
    return (
      m === void 0 && A === void 0
        ? (K = new s(L))
        : A === void 0
        ? (K = new s(L, m))
        : (K = new s(L, m, A)),
      Object.setPrototypeOf(K, h.prototype),
      K
    );
  }
  function V(L) {
    if (h.isBuffer(L)) {
      const m = et(L.length) | 0,
        A = f(m);
      return A.length === 0 || L.copy(A, 0, 0, m), A;
    }
    if (L.length !== void 0)
      return typeof L.length != "number" || pe(L.length) ? f(0) : D(L);
    if (L.type === "Buffer" && Array.isArray(L.data)) return D(L.data);
  }
  function et(L) {
    if (L >= i)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          i.toString(16) +
          " bytes"
      );
    return L | 0;
  }
  function it(L) {
    return +L != L && (L = 0), h.alloc(+L);
  }
  (h.isBuffer = function (m) {
    return m != null && m._isBuffer === !0 && m !== h.prototype;
  }),
    (h.compare = function (m, A) {
      if (
        (ur(m, s) && (m = h.from(m, m.offset, m.byteLength)),
        ur(A, s) && (A = h.from(A, A.offset, A.byteLength)),
        !h.isBuffer(m) || !h.isBuffer(A))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (m === A) return 0;
      let K = m.length,
        j = A.length;
      for (let rt = 0, lt = Math.min(K, j); rt < lt; ++rt)
        if (m[rt] !== A[rt]) {
          (K = m[rt]), (j = A[rt]);
          break;
        }
      return K < j ? -1 : j < K ? 1 : 0;
    }),
    (h.isEncoding = function (m) {
      switch (String(m).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (h.concat = function (m, A) {
      if (!Array.isArray(m))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (m.length === 0) return h.alloc(0);
      let K;
      if (A === void 0) for (A = 0, K = 0; K < m.length; ++K) A += m[K].length;
      const j = h.allocUnsafe(A);
      let rt = 0;
      for (K = 0; K < m.length; ++K) {
        let lt = m[K];
        if (ur(lt, s))
          rt + lt.length > j.length
            ? (h.isBuffer(lt) || (lt = h.from(lt)), lt.copy(j, rt))
            : s.prototype.set.call(j, lt, rt);
        else if (h.isBuffer(lt)) lt.copy(j, rt);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        rt += lt.length;
      }
      return j;
    });
  function X(L, m) {
    if (h.isBuffer(L)) return L.length;
    if (o.isView(L) || ur(L, o)) return L.byteLength;
    if (typeof L != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof L
      );
    const A = L.length,
      K = arguments.length > 2 && arguments[2] === !0;
    if (!K && A === 0) return 0;
    let j = !1;
    for (;;)
      switch (m) {
        case "ascii":
        case "latin1":
        case "binary":
          return A;
        case "utf8":
        case "utf-8":
          return ye(L).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return A * 2;
        case "hex":
          return A >>> 1;
        case "base64":
          return Qt(L).length;
        default:
          if (j) return K ? -1 : ye(L).length;
          (m = ("" + m).toLowerCase()), (j = !0);
      }
  }
  h.byteLength = X;
  function nt(L, m, A) {
    let K = !1;
    if (
      ((m === void 0 || m < 0) && (m = 0),
      m > this.length ||
        ((A === void 0 || A > this.length) && (A = this.length), A <= 0) ||
        ((A >>>= 0), (m >>>= 0), A <= m))
    )
      return "";
    for (L || (L = "utf8"); ; )
      switch (L) {
        case "hex":
          return d(this, m, A);
        case "utf8":
        case "utf-8":
          return k(this, m, A);
        case "ascii":
          return G(this, m, A);
        case "latin1":
        case "binary":
          return O(this, m, A);
        case "base64":
          return g(this, m, A);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p(this, m, A);
        default:
          if (K) throw new TypeError("Unknown encoding: " + L);
          (L = (L + "").toLowerCase()), (K = !0);
      }
  }
  h.prototype._isBuffer = !0;
  function R(L, m, A) {
    const K = L[m];
    (L[m] = L[A]), (L[A] = K);
  }
  (h.prototype.swap16 = function () {
    const m = this.length;
    if (m % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let A = 0; A < m; A += 2) R(this, A, A + 1);
    return this;
  }),
    (h.prototype.swap32 = function () {
      const m = this.length;
      if (m % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let A = 0; A < m; A += 4) R(this, A, A + 3), R(this, A + 1, A + 2);
      return this;
    }),
    (h.prototype.swap64 = function () {
      const m = this.length;
      if (m % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let A = 0; A < m; A += 8)
        R(this, A, A + 7),
          R(this, A + 1, A + 6),
          R(this, A + 2, A + 5),
          R(this, A + 3, A + 4);
      return this;
    }),
    (h.prototype.toString = function () {
      const m = this.length;
      return m === 0
        ? ""
        : arguments.length === 0
        ? k(this, 0, m)
        : nt.apply(this, arguments);
    }),
    (h.prototype.toLocaleString = h.prototype.toString),
    (h.prototype.equals = function (m) {
      if (!h.isBuffer(m)) throw new TypeError("Argument must be a Buffer");
      return this === m ? !0 : h.compare(this, m) === 0;
    }),
    (h.prototype.inspect = function () {
      let m = "";
      const A = n.INSPECT_MAX_BYTES;
      return (
        (m = this.toString("hex", 0, A)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > A && (m += " ... "),
        "<Buffer " + m + ">"
      );
    }),
    r && (h.prototype[r] = h.prototype.inspect),
    (h.prototype.compare = function (m, A, K, j, rt) {
      if ((ur(m, s) && (m = h.from(m, m.offset, m.byteLength)), !h.isBuffer(m)))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof m
        );
      if (
        (A === void 0 && (A = 0),
        K === void 0 && (K = m ? m.length : 0),
        j === void 0 && (j = 0),
        rt === void 0 && (rt = this.length),
        A < 0 || K > m.length || j < 0 || rt > this.length)
      )
        throw new RangeError("out of range index");
      if (j >= rt && A >= K) return 0;
      if (j >= rt) return -1;
      if (A >= K) return 1;
      if (((A >>>= 0), (K >>>= 0), (j >>>= 0), (rt >>>= 0), this === m))
        return 0;
      let lt = rt - j,
        Ht = K - A;
      const Ot = Math.min(lt, Ht),
        Mt = this.slice(j, rt),
        ge = m.slice(A, K);
      for (let Pt = 0; Pt < Ot; ++Pt)
        if (Mt[Pt] !== ge[Pt]) {
          (lt = Mt[Pt]), (Ht = ge[Pt]);
          break;
        }
      return lt < Ht ? -1 : Ht < lt ? 1 : 0;
    });
  function x(L, m, A, K, j) {
    if (L.length === 0) return -1;
    if (
      (typeof A == "string"
        ? ((K = A), (A = 0))
        : A > 2147483647
        ? (A = 2147483647)
        : A < -2147483648 && (A = -2147483648),
      (A = +A),
      pe(A) && (A = j ? 0 : L.length - 1),
      A < 0 && (A = L.length + A),
      A >= L.length)
    ) {
      if (j) return -1;
      A = L.length - 1;
    } else if (A < 0)
      if (j) A = 0;
      else return -1;
    if ((typeof m == "string" && (m = h.from(m, K)), h.isBuffer(m)))
      return m.length === 0 ? -1 : B(L, m, A, K, j);
    if (typeof m == "number")
      return (
        (m = m & 255),
        typeof s.prototype.indexOf == "function"
          ? j
            ? s.prototype.indexOf.call(L, m, A)
            : s.prototype.lastIndexOf.call(L, m, A)
          : B(L, [m], A, K, j)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function B(L, m, A, K, j) {
    let rt = 1,
      lt = L.length,
      Ht = m.length;
    if (
      K !== void 0 &&
      ((K = String(K).toLowerCase()),
      K === "ucs2" || K === "ucs-2" || K === "utf16le" || K === "utf-16le")
    ) {
      if (L.length < 2 || m.length < 2) return -1;
      (rt = 2), (lt /= 2), (Ht /= 2), (A /= 2);
    }
    function Ot(ge, Pt) {
      return rt === 1 ? ge[Pt] : ge.readUInt16BE(Pt * rt);
    }
    let Mt;
    if (j) {
      let ge = -1;
      for (Mt = A; Mt < lt; Mt++)
        if (Ot(L, Mt) === Ot(m, ge === -1 ? 0 : Mt - ge)) {
          if ((ge === -1 && (ge = Mt), Mt - ge + 1 === Ht)) return ge * rt;
        } else ge !== -1 && (Mt -= Mt - ge), (ge = -1);
    } else
      for (A + Ht > lt && (A = lt - Ht), Mt = A; Mt >= 0; Mt--) {
        let ge = !0;
        for (let Pt = 0; Pt < Ht; Pt++)
          if (Ot(L, Mt + Pt) !== Ot(m, Pt)) {
            ge = !1;
            break;
          }
        if (ge) return Mt;
      }
    return -1;
  }
  (h.prototype.includes = function (m, A, K) {
    return this.indexOf(m, A, K) !== -1;
  }),
    (h.prototype.indexOf = function (m, A, K) {
      return x(this, m, A, K, !0);
    }),
    (h.prototype.lastIndexOf = function (m, A, K) {
      return x(this, m, A, K, !1);
    });
  function F(L, m, A, K) {
    A = Number(A) || 0;
    const j = L.length - A;
    K ? ((K = Number(K)), K > j && (K = j)) : (K = j);
    const rt = m.length;
    K > rt / 2 && (K = rt / 2);
    let lt;
    for (lt = 0; lt < K; ++lt) {
      const Ht = parseInt(m.substr(lt * 2, 2), 16);
      if (pe(Ht)) return lt;
      L[A + lt] = Ht;
    }
    return lt;
  }
  function v(L, m, A, K) {
    return le(ye(m, L.length - A), L, A, K);
  }
  function y(L, m, A, K) {
    return le(ve(m), L, A, K);
  }
  function u(L, m, A, K) {
    return le(Qt(m), L, A, K);
  }
  function l(L, m, A, K) {
    return le(Re(m, L.length - A), L, A, K);
  }
  (h.prototype.write = function (m, A, K, j) {
    if (A === void 0) (j = "utf8"), (K = this.length), (A = 0);
    else if (K === void 0 && typeof A == "string")
      (j = A), (K = this.length), (A = 0);
    else if (isFinite(A))
      (A = A >>> 0),
        isFinite(K)
          ? ((K = K >>> 0), j === void 0 && (j = "utf8"))
          : ((j = K), (K = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const rt = this.length - A;
    if (
      ((K === void 0 || K > rt) && (K = rt),
      (m.length > 0 && (K < 0 || A < 0)) || A > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    j || (j = "utf8");
    let lt = !1;
    for (;;)
      switch (j) {
        case "hex":
          return F(this, m, A, K);
        case "utf8":
        case "utf-8":
          return v(this, m, A, K);
        case "ascii":
        case "latin1":
        case "binary":
          return y(this, m, A, K);
        case "base64":
          return u(this, m, A, K);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l(this, m, A, K);
        default:
          if (lt) throw new TypeError("Unknown encoding: " + j);
          (j = ("" + j).toLowerCase()), (lt = !0);
      }
  }),
    (h.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function g(L, m, A) {
    return m === 0 && A === L.length
      ? t.fromByteArray(L)
      : t.fromByteArray(L.slice(m, A));
  }
  function k(L, m, A) {
    A = Math.min(L.length, A);
    const K = [];
    let j = m;
    for (; j < A; ) {
      const rt = L[j];
      let lt = null,
        Ht = rt > 239 ? 4 : rt > 223 ? 3 : rt > 191 ? 2 : 1;
      if (j + Ht <= A) {
        let Ot, Mt, ge, Pt;
        switch (Ht) {
          case 1:
            rt < 128 && (lt = rt);
            break;
          case 2:
            (Ot = L[j + 1]),
              (Ot & 192) === 128 &&
                ((Pt = ((rt & 31) << 6) | (Ot & 63)), Pt > 127 && (lt = Pt));
            break;
          case 3:
            (Ot = L[j + 1]),
              (Mt = L[j + 2]),
              (Ot & 192) === 128 &&
                (Mt & 192) === 128 &&
                ((Pt = ((rt & 15) << 12) | ((Ot & 63) << 6) | (Mt & 63)),
                Pt > 2047 && (Pt < 55296 || Pt > 57343) && (lt = Pt));
            break;
          case 4:
            (Ot = L[j + 1]),
              (Mt = L[j + 2]),
              (ge = L[j + 3]),
              (Ot & 192) === 128 &&
                (Mt & 192) === 128 &&
                (ge & 192) === 128 &&
                ((Pt =
                  ((rt & 15) << 18) |
                  ((Ot & 63) << 12) |
                  ((Mt & 63) << 6) |
                  (ge & 63)),
                Pt > 65535 && Pt < 1114112 && (lt = Pt));
        }
      }
      lt === null
        ? ((lt = 65533), (Ht = 1))
        : lt > 65535 &&
          ((lt -= 65536),
          K.push(((lt >>> 10) & 1023) | 55296),
          (lt = 56320 | (lt & 1023))),
        K.push(lt),
        (j += Ht);
    }
    return _(K);
  }
  const I = 4096;
  function _(L) {
    const m = L.length;
    if (m <= I) return String.fromCharCode.apply(String, L);
    let A = "",
      K = 0;
    for (; K < m; )
      A += String.fromCharCode.apply(String, L.slice(K, (K += I)));
    return A;
  }
  function G(L, m, A) {
    let K = "";
    A = Math.min(L.length, A);
    for (let j = m; j < A; ++j) K += String.fromCharCode(L[j] & 127);
    return K;
  }
  function O(L, m, A) {
    let K = "";
    A = Math.min(L.length, A);
    for (let j = m; j < A; ++j) K += String.fromCharCode(L[j]);
    return K;
  }
  function d(L, m, A) {
    const K = L.length;
    (!m || m < 0) && (m = 0), (!A || A < 0 || A > K) && (A = K);
    let j = "";
    for (let rt = m; rt < A; ++rt) j += Ae[L[rt]];
    return j;
  }
  function p(L, m, A) {
    const K = L.slice(m, A);
    let j = "";
    for (let rt = 0; rt < K.length - 1; rt += 2)
      j += String.fromCharCode(K[rt] + K[rt + 1] * 256);
    return j;
  }
  h.prototype.slice = function (m, A) {
    const K = this.length;
    (m = ~~m),
      (A = A === void 0 ? K : ~~A),
      m < 0 ? ((m += K), m < 0 && (m = 0)) : m > K && (m = K),
      A < 0 ? ((A += K), A < 0 && (A = 0)) : A > K && (A = K),
      A < m && (A = m);
    const j = this.subarray(m, A);
    return Object.setPrototypeOf(j, h.prototype), j;
  };
  function T(L, m, A) {
    if (L % 1 !== 0 || L < 0) throw new RangeError("offset is not uint");
    if (L + m > A)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (h.prototype.readUintLE = h.prototype.readUIntLE =
    function (m, A, K) {
      (m = m >>> 0), (A = A >>> 0), K || T(m, A, this.length);
      let j = this[m],
        rt = 1,
        lt = 0;
      for (; ++lt < A && (rt *= 256); ) j += this[m + lt] * rt;
      return j;
    }),
    (h.prototype.readUintBE = h.prototype.readUIntBE =
      function (m, A, K) {
        (m = m >>> 0), (A = A >>> 0), K || T(m, A, this.length);
        let j = this[m + --A],
          rt = 1;
        for (; A > 0 && (rt *= 256); ) j += this[m + --A] * rt;
        return j;
      }),
    (h.prototype.readUint8 = h.prototype.readUInt8 =
      function (m, A) {
        return (m = m >>> 0), A || T(m, 1, this.length), this[m];
      }),
    (h.prototype.readUint16LE = h.prototype.readUInt16LE =
      function (m, A) {
        return (
          (m = m >>> 0), A || T(m, 2, this.length), this[m] | (this[m + 1] << 8)
        );
      }),
    (h.prototype.readUint16BE = h.prototype.readUInt16BE =
      function (m, A) {
        return (
          (m = m >>> 0), A || T(m, 2, this.length), (this[m] << 8) | this[m + 1]
        );
      }),
    (h.prototype.readUint32LE = h.prototype.readUInt32LE =
      function (m, A) {
        return (
          (m = m >>> 0),
          A || T(m, 4, this.length),
          (this[m] | (this[m + 1] << 8) | (this[m + 2] << 16)) +
            this[m + 3] * 16777216
        );
      }),
    (h.prototype.readUint32BE = h.prototype.readUInt32BE =
      function (m, A) {
        return (
          (m = m >>> 0),
          A || T(m, 4, this.length),
          this[m] * 16777216 +
            ((this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3])
        );
      }),
    (h.prototype.readBigUInt64LE = Pr(function (m) {
      (m = m >>> 0), Ar(m, "offset");
      const A = this[m],
        K = this[m + 7];
      (A === void 0 || K === void 0) && ue(m, this.length - 8);
      const j =
          A + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24,
        rt = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + K * 2 ** 24;
      return BigInt(j) + (BigInt(rt) << BigInt(32));
    })),
    (h.prototype.readBigUInt64BE = Pr(function (m) {
      (m = m >>> 0), Ar(m, "offset");
      const A = this[m],
        K = this[m + 7];
      (A === void 0 || K === void 0) && ue(m, this.length - 8);
      const j =
          A * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m],
        rt = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + K;
      return (BigInt(j) << BigInt(32)) + BigInt(rt);
    })),
    (h.prototype.readIntLE = function (m, A, K) {
      (m = m >>> 0), (A = A >>> 0), K || T(m, A, this.length);
      let j = this[m],
        rt = 1,
        lt = 0;
      for (; ++lt < A && (rt *= 256); ) j += this[m + lt] * rt;
      return (rt *= 128), j >= rt && (j -= Math.pow(2, 8 * A)), j;
    }),
    (h.prototype.readIntBE = function (m, A, K) {
      (m = m >>> 0), (A = A >>> 0), K || T(m, A, this.length);
      let j = A,
        rt = 1,
        lt = this[m + --j];
      for (; j > 0 && (rt *= 256); ) lt += this[m + --j] * rt;
      return (rt *= 128), lt >= rt && (lt -= Math.pow(2, 8 * A)), lt;
    }),
    (h.prototype.readInt8 = function (m, A) {
      return (
        (m = m >>> 0),
        A || T(m, 1, this.length),
        this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m]
      );
    }),
    (h.prototype.readInt16LE = function (m, A) {
      (m = m >>> 0), A || T(m, 2, this.length);
      const K = this[m] | (this[m + 1] << 8);
      return K & 32768 ? K | 4294901760 : K;
    }),
    (h.prototype.readInt16BE = function (m, A) {
      (m = m >>> 0), A || T(m, 2, this.length);
      const K = this[m + 1] | (this[m] << 8);
      return K & 32768 ? K | 4294901760 : K;
    }),
    (h.prototype.readInt32LE = function (m, A) {
      return (
        (m = m >>> 0),
        A || T(m, 4, this.length),
        this[m] | (this[m + 1] << 8) | (this[m + 2] << 16) | (this[m + 3] << 24)
      );
    }),
    (h.prototype.readInt32BE = function (m, A) {
      return (
        (m = m >>> 0),
        A || T(m, 4, this.length),
        (this[m] << 24) | (this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3]
      );
    }),
    (h.prototype.readBigInt64LE = Pr(function (m) {
      (m = m >>> 0), Ar(m, "offset");
      const A = this[m],
        K = this[m + 7];
      (A === void 0 || K === void 0) && ue(m, this.length - 8);
      const j =
        this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (K << 24);
      return (
        (BigInt(j) << BigInt(32)) +
        BigInt(
          A + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24
        )
      );
    })),
    (h.prototype.readBigInt64BE = Pr(function (m) {
      (m = m >>> 0), Ar(m, "offset");
      const A = this[m],
        K = this[m + 7];
      (A === void 0 || K === void 0) && ue(m, this.length - 8);
      const j =
        (A << 24) + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m];
      return (
        (BigInt(j) << BigInt(32)) +
        BigInt(
          this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + K
        )
      );
    })),
    (h.prototype.readFloatLE = function (m, A) {
      return (
        (m = m >>> 0), A || T(m, 4, this.length), e.read(this, m, !0, 23, 4)
      );
    }),
    (h.prototype.readFloatBE = function (m, A) {
      return (
        (m = m >>> 0), A || T(m, 4, this.length), e.read(this, m, !1, 23, 4)
      );
    }),
    (h.prototype.readDoubleLE = function (m, A) {
      return (
        (m = m >>> 0), A || T(m, 8, this.length), e.read(this, m, !0, 52, 8)
      );
    }),
    (h.prototype.readDoubleBE = function (m, A) {
      return (
        (m = m >>> 0), A || T(m, 8, this.length), e.read(this, m, !1, 52, 8)
      );
    });
  function H(L, m, A, K, j, rt) {
    if (!h.isBuffer(L))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (m > j || m < rt)
      throw new RangeError('"value" argument is out of bounds');
    if (A + K > L.length) throw new RangeError("Index out of range");
  }
  (h.prototype.writeUintLE = h.prototype.writeUIntLE =
    function (m, A, K, j) {
      if (((m = +m), (A = A >>> 0), (K = K >>> 0), !j)) {
        const Ht = Math.pow(2, 8 * K) - 1;
        H(this, m, A, K, Ht, 0);
      }
      let rt = 1,
        lt = 0;
      for (this[A] = m & 255; ++lt < K && (rt *= 256); )
        this[A + lt] = (m / rt) & 255;
      return A + K;
    }),
    (h.prototype.writeUintBE = h.prototype.writeUIntBE =
      function (m, A, K, j) {
        if (((m = +m), (A = A >>> 0), (K = K >>> 0), !j)) {
          const Ht = Math.pow(2, 8 * K) - 1;
          H(this, m, A, K, Ht, 0);
        }
        let rt = K - 1,
          lt = 1;
        for (this[A + rt] = m & 255; --rt >= 0 && (lt *= 256); )
          this[A + rt] = (m / lt) & 255;
        return A + K;
      }),
    (h.prototype.writeUint8 = h.prototype.writeUInt8 =
      function (m, A, K) {
        return (
          (m = +m),
          (A = A >>> 0),
          K || H(this, m, A, 1, 255, 0),
          (this[A] = m & 255),
          A + 1
        );
      }),
    (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
      function (m, A, K) {
        return (
          (m = +m),
          (A = A >>> 0),
          K || H(this, m, A, 2, 65535, 0),
          (this[A] = m & 255),
          (this[A + 1] = m >>> 8),
          A + 2
        );
      }),
    (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
      function (m, A, K) {
        return (
          (m = +m),
          (A = A >>> 0),
          K || H(this, m, A, 2, 65535, 0),
          (this[A] = m >>> 8),
          (this[A + 1] = m & 255),
          A + 2
        );
      }),
    (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
      function (m, A, K) {
        return (
          (m = +m),
          (A = A >>> 0),
          K || H(this, m, A, 4, 4294967295, 0),
          (this[A + 3] = m >>> 24),
          (this[A + 2] = m >>> 16),
          (this[A + 1] = m >>> 8),
          (this[A] = m & 255),
          A + 4
        );
      }),
    (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
      function (m, A, K) {
        return (
          (m = +m),
          (A = A >>> 0),
          K || H(this, m, A, 4, 4294967295, 0),
          (this[A] = m >>> 24),
          (this[A + 1] = m >>> 16),
          (this[A + 2] = m >>> 8),
          (this[A + 3] = m & 255),
          A + 4
        );
      });
  function J(L, m, A, K, j) {
    It(m, K, j, L, A, 7);
    let rt = Number(m & BigInt(4294967295));
    (L[A++] = rt),
      (rt = rt >> 8),
      (L[A++] = rt),
      (rt = rt >> 8),
      (L[A++] = rt),
      (rt = rt >> 8),
      (L[A++] = rt);
    let lt = Number((m >> BigInt(32)) & BigInt(4294967295));
    return (
      (L[A++] = lt),
      (lt = lt >> 8),
      (L[A++] = lt),
      (lt = lt >> 8),
      (L[A++] = lt),
      (lt = lt >> 8),
      (L[A++] = lt),
      A
    );
  }
  function at(L, m, A, K, j) {
    It(m, K, j, L, A, 7);
    let rt = Number(m & BigInt(4294967295));
    (L[A + 7] = rt),
      (rt = rt >> 8),
      (L[A + 6] = rt),
      (rt = rt >> 8),
      (L[A + 5] = rt),
      (rt = rt >> 8),
      (L[A + 4] = rt);
    let lt = Number((m >> BigInt(32)) & BigInt(4294967295));
    return (
      (L[A + 3] = lt),
      (lt = lt >> 8),
      (L[A + 2] = lt),
      (lt = lt >> 8),
      (L[A + 1] = lt),
      (lt = lt >> 8),
      (L[A] = lt),
      A + 8
    );
  }
  (h.prototype.writeBigUInt64LE = Pr(function (m, A = 0) {
    return J(this, m, A, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
    (h.prototype.writeBigUInt64BE = Pr(function (m, A = 0) {
      return at(this, m, A, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
    (h.prototype.writeIntLE = function (m, A, K, j) {
      if (((m = +m), (A = A >>> 0), !j)) {
        const Ot = Math.pow(2, 8 * K - 1);
        H(this, m, A, K, Ot - 1, -Ot);
      }
      let rt = 0,
        lt = 1,
        Ht = 0;
      for (this[A] = m & 255; ++rt < K && (lt *= 256); )
        m < 0 && Ht === 0 && this[A + rt - 1] !== 0 && (Ht = 1),
          (this[A + rt] = (((m / lt) >> 0) - Ht) & 255);
      return A + K;
    }),
    (h.prototype.writeIntBE = function (m, A, K, j) {
      if (((m = +m), (A = A >>> 0), !j)) {
        const Ot = Math.pow(2, 8 * K - 1);
        H(this, m, A, K, Ot - 1, -Ot);
      }
      let rt = K - 1,
        lt = 1,
        Ht = 0;
      for (this[A + rt] = m & 255; --rt >= 0 && (lt *= 256); )
        m < 0 && Ht === 0 && this[A + rt + 1] !== 0 && (Ht = 1),
          (this[A + rt] = (((m / lt) >> 0) - Ht) & 255);
      return A + K;
    }),
    (h.prototype.writeInt8 = function (m, A, K) {
      return (
        (m = +m),
        (A = A >>> 0),
        K || H(this, m, A, 1, 127, -128),
        m < 0 && (m = 255 + m + 1),
        (this[A] = m & 255),
        A + 1
      );
    }),
    (h.prototype.writeInt16LE = function (m, A, K) {
      return (
        (m = +m),
        (A = A >>> 0),
        K || H(this, m, A, 2, 32767, -32768),
        (this[A] = m & 255),
        (this[A + 1] = m >>> 8),
        A + 2
      );
    }),
    (h.prototype.writeInt16BE = function (m, A, K) {
      return (
        (m = +m),
        (A = A >>> 0),
        K || H(this, m, A, 2, 32767, -32768),
        (this[A] = m >>> 8),
        (this[A + 1] = m & 255),
        A + 2
      );
    }),
    (h.prototype.writeInt32LE = function (m, A, K) {
      return (
        (m = +m),
        (A = A >>> 0),
        K || H(this, m, A, 4, 2147483647, -2147483648),
        (this[A] = m & 255),
        (this[A + 1] = m >>> 8),
        (this[A + 2] = m >>> 16),
        (this[A + 3] = m >>> 24),
        A + 4
      );
    }),
    (h.prototype.writeInt32BE = function (m, A, K) {
      return (
        (m = +m),
        (A = A >>> 0),
        K || H(this, m, A, 4, 2147483647, -2147483648),
        m < 0 && (m = 4294967295 + m + 1),
        (this[A] = m >>> 24),
        (this[A + 1] = m >>> 16),
        (this[A + 2] = m >>> 8),
        (this[A + 3] = m & 255),
        A + 4
      );
    }),
    (h.prototype.writeBigInt64LE = Pr(function (m, A = 0) {
      return J(
        this,
        m,
        A,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    })),
    (h.prototype.writeBigInt64BE = Pr(function (m, A = 0) {
      return at(
        this,
        m,
        A,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }));
  function yt(L, m, A, K, j, rt) {
    if (A + K > L.length) throw new RangeError("Index out of range");
    if (A < 0) throw new RangeError("Index out of range");
  }
  function wt(L, m, A, K, j) {
    return (
      (m = +m),
      (A = A >>> 0),
      j || yt(L, m, A, 4),
      e.write(L, m, A, K, 23, 4),
      A + 4
    );
  }
  (h.prototype.writeFloatLE = function (m, A, K) {
    return wt(this, m, A, !0, K);
  }),
    (h.prototype.writeFloatBE = function (m, A, K) {
      return wt(this, m, A, !1, K);
    });
  function Ut(L, m, A, K, j) {
    return (
      (m = +m),
      (A = A >>> 0),
      j || yt(L, m, A, 8),
      e.write(L, m, A, K, 52, 8),
      A + 8
    );
  }
  (h.prototype.writeDoubleLE = function (m, A, K) {
    return Ut(this, m, A, !0, K);
  }),
    (h.prototype.writeDoubleBE = function (m, A, K) {
      return Ut(this, m, A, !1, K);
    }),
    (h.prototype.copy = function (m, A, K, j) {
      if (!h.isBuffer(m)) throw new TypeError("argument should be a Buffer");
      if (
        (K || (K = 0),
        !j && j !== 0 && (j = this.length),
        A >= m.length && (A = m.length),
        A || (A = 0),
        j > 0 && j < K && (j = K),
        j === K || m.length === 0 || this.length === 0)
      )
        return 0;
      if (A < 0) throw new RangeError("targetStart out of bounds");
      if (K < 0 || K >= this.length) throw new RangeError("Index out of range");
      if (j < 0) throw new RangeError("sourceEnd out of bounds");
      j > this.length && (j = this.length),
        m.length - A < j - K && (j = m.length - A + K);
      const rt = j - K;
      return (
        this === m && typeof s.prototype.copyWithin == "function"
          ? this.copyWithin(A, K, j)
          : s.prototype.set.call(m, this.subarray(K, j), A),
        rt
      );
    }),
    (h.prototype.fill = function (m, A, K, j) {
      if (typeof m == "string") {
        if (
          (typeof A == "string"
            ? ((j = A), (A = 0), (K = this.length))
            : typeof K == "string" && ((j = K), (K = this.length)),
          j !== void 0 && typeof j != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof j == "string" && !h.isEncoding(j))
          throw new TypeError("Unknown encoding: " + j);
        if (m.length === 1) {
          const lt = m.charCodeAt(0);
          ((j === "utf8" && lt < 128) || j === "latin1") && (m = lt);
        }
      } else
        typeof m == "number"
          ? (m = m & 255)
          : typeof m == "boolean" && (m = Number(m));
      if (A < 0 || this.length < A || this.length < K)
        throw new RangeError("Out of range index");
      if (K <= A) return this;
      (A = A >>> 0), (K = K === void 0 ? this.length : K >>> 0), m || (m = 0);
      let rt;
      if (typeof m == "number") for (rt = A; rt < K; ++rt) this[rt] = m;
      else {
        const lt = h.isBuffer(m) ? m : h.from(m, j),
          Ht = lt.length;
        if (Ht === 0)
          throw new TypeError(
            'The value "' + m + '" is invalid for argument "value"'
          );
        for (rt = 0; rt < K - A; ++rt) this[rt + A] = lt[rt % Ht];
      }
      return this;
    });
  const Rt = {};
  function zt(L, m, A) {
    Rt[L] = class extends A {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: m.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${L}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return L;
      }
      set code(j) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: j,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${L}]: ${this.message}`;
      }
    };
  }
  zt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (L) {
      return L
        ? `${L} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ),
    zt(
      "ERR_INVALID_ARG_TYPE",
      function (L, m) {
        return `The "${L}" argument must be of type number. Received type ${typeof m}`;
      },
      TypeError
    ),
    zt(
      "ERR_OUT_OF_RANGE",
      function (L, m, A) {
        let K = `The value of "${L}" is out of range.`,
          j = A;
        return (
          Number.isInteger(A) && Math.abs(A) > 2 ** 32
            ? (j = Zt(String(A)))
            : typeof A == "bigint" &&
              ((j = String(A)),
              (A > BigInt(2) ** BigInt(32) || A < -(BigInt(2) ** BigInt(32))) &&
                (j = Zt(j)),
              (j += "n")),
          (K += ` It must be ${m}. Received ${j}`),
          K
        );
      },
      RangeError
    );
  function Zt(L) {
    let m = "",
      A = L.length;
    const K = L[0] === "-" ? 1 : 0;
    for (; A >= K + 4; A -= 3) m = `_${L.slice(A - 3, A)}${m}`;
    return `${L.slice(0, A)}${m}`;
  }
  function _t(L, m, A) {
    Ar(m, "offset"),
      (L[m] === void 0 || L[m + A] === void 0) && ue(m, L.length - (A + 1));
  }
  function It(L, m, A, K, j, rt) {
    if (L > A || L < m) {
      const lt = typeof m == "bigint" ? "n" : "";
      let Ht;
      throw (
        (m === 0 || m === BigInt(0)
          ? (Ht = `>= 0${lt} and < 2${lt} ** ${(rt + 1) * 8}${lt}`)
          : (Ht = `>= -(2${lt} ** ${(rt + 1) * 8 - 1}${lt}) and < 2 ** ${
              (rt + 1) * 8 - 1
            }${lt}`),
        new Rt.ERR_OUT_OF_RANGE("value", Ht, L))
      );
    }
    _t(K, j, rt);
  }
  function Ar(L, m) {
    if (typeof L != "number") throw new Rt.ERR_INVALID_ARG_TYPE(m, "number", L);
  }
  function ue(L, m, A) {
    throw Math.floor(L) !== L
      ? (Ar(L, A), new Rt.ERR_OUT_OF_RANGE("offset", "an integer", L))
      : m < 0
      ? new Rt.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Rt.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${m}`, L);
  }
  const ke = /[^+/0-9A-Za-z-_]/g;
  function mo(L) {
    if (((L = L.split("=")[0]), (L = L.trim().replace(ke, "")), L.length < 2))
      return "";
    for (; L.length % 4 !== 0; ) L = L + "=";
    return L;
  }
  function ye(L, m) {
    m = m || 1 / 0;
    let A;
    const K = L.length;
    let j = null;
    const rt = [];
    for (let lt = 0; lt < K; ++lt) {
      if (((A = L.charCodeAt(lt)), A > 55295 && A < 57344)) {
        if (!j) {
          if (A > 56319) {
            (m -= 3) > -1 && rt.push(239, 191, 189);
            continue;
          } else if (lt + 1 === K) {
            (m -= 3) > -1 && rt.push(239, 191, 189);
            continue;
          }
          j = A;
          continue;
        }
        if (A < 56320) {
          (m -= 3) > -1 && rt.push(239, 191, 189), (j = A);
          continue;
        }
        A = (((j - 55296) << 10) | (A - 56320)) + 65536;
      } else j && (m -= 3) > -1 && rt.push(239, 191, 189);
      if (((j = null), A < 128)) {
        if ((m -= 1) < 0) break;
        rt.push(A);
      } else if (A < 2048) {
        if ((m -= 2) < 0) break;
        rt.push((A >> 6) | 192, (A & 63) | 128);
      } else if (A < 65536) {
        if ((m -= 3) < 0) break;
        rt.push((A >> 12) | 224, ((A >> 6) & 63) | 128, (A & 63) | 128);
      } else if (A < 1114112) {
        if ((m -= 4) < 0) break;
        rt.push(
          (A >> 18) | 240,
          ((A >> 12) & 63) | 128,
          ((A >> 6) & 63) | 128,
          (A & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return rt;
  }
  function ve(L) {
    const m = [];
    for (let A = 0; A < L.length; ++A) m.push(L.charCodeAt(A) & 255);
    return m;
  }
  function Re(L, m) {
    let A, K, j;
    const rt = [];
    for (let lt = 0; lt < L.length && !((m -= 2) < 0); ++lt)
      (A = L.charCodeAt(lt)),
        (K = A >> 8),
        (j = A % 256),
        rt.push(j),
        rt.push(K);
    return rt;
  }
  function Qt(L) {
    return t.toByteArray(mo(L));
  }
  function le(L, m, A, K) {
    let j;
    for (j = 0; j < K && !(j + A >= m.length || j >= L.length); ++j)
      m[j + A] = L[j];
    return j;
  }
  function ur(L, m) {
    return (
      L instanceof m ||
      (L != null &&
        L.constructor != null &&
        L.constructor.name != null &&
        L.constructor.name === m.name)
    );
  }
  function pe(L) {
    return L !== L;
  }
  const Ae = (function () {
    const L = "0123456789abcdef",
      m = new Array(256);
    for (let A = 0; A < 16; ++A) {
      const K = A * 16;
      for (let j = 0; j < 16; ++j) m[K + j] = L[A] + L[j];
    }
    return m;
  })();
  function Pr(L) {
    return typeof BigInt > "u" ? ae : L;
  }
  function ae() {
    throw new Error("BigInt not supported");
  }
})(sd);
const Ie = sd.Buffer,
  Nt = sd.Buffer,
  d0 = globalThis || void 0 || self;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ad =
    BigInt(0),
  lh = BigInt(1);
function ro(n, t = "") {
  if (typeof n != "boolean") {
    const e = t && `"${t}"`;
    throw new Error(e + "expected boolean, got type=" + typeof n);
  }
  return n;
}
function An(n, t, e = "") {
  const r = Vc(n),
    i = n == null ? void 0 : n.length,
    s = t !== void 0;
  if (!r || (s && i !== t)) {
    const o = e && `"${e}" `,
      a = s ? ` of length ${t}` : "",
      c = r ? `length=${i}` : `type=${typeof n}`;
    throw new Error(o + "expected Uint8Array" + a + ", got " + c);
  }
  return n;
}
function ou(n) {
  const t = n.toString(16);
  return t.length & 1 ? "0" + t : t;
}
function Dg(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return n === "" ? ad : BigInt("0x" + n);
}
function bl(n) {
  return Dg(Xs(n));
}
function yc(n) {
  return ki(n), Dg(Xs(Uint8Array.from(n).reverse()));
}
function cd(n, t) {
  return Mu(n.toString(16).padStart(t * 2, "0"));
}
function zg(n, t) {
  return cd(n, t).reverse();
}
function Le(n, t, e) {
  let r;
  if (typeof t == "string")
    try {
      r = Mu(t);
    } catch (s) {
      throw new Error(n + " must be hex string or Uint8Array, cause: " + s);
    }
  else if (Vc(t)) r = Uint8Array.from(t);
  else throw new Error(n + " must be hex string or Uint8Array");
  const i = r.length;
  if (typeof e == "number" && i !== e)
    throw new Error(n + " of length " + e + " expected, got " + i);
  return r;
}
function p0(n) {
  return Uint8Array.from(n);
}
const gf = (n) => typeof n == "bigint" && ad <= n;
function z1(n, t, e) {
  return gf(n) && gf(t) && gf(e) && t <= n && n < e;
}
function fh(n, t, e, r) {
  if (!z1(t, e, r))
    throw new Error(
      "expected valid " + n + ": " + e + " <= n < " + r + ", got " + t
    );
}
function Hg(n) {
  let t;
  for (t = 0; n > ad; n >>= lh, t += 1);
  return t;
}
const Wc = (n) => (lh << BigInt(n)) - lh;
function H1(n, t, e) {
  if (typeof n != "number" || n < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function") throw new Error("hmacFn must be a function");
  const r = (P) => new Uint8Array(P),
    i = (P) => Uint8Array.of(P);
  let s = r(n),
    o = r(n),
    a = 0;
  const c = () => {
      s.fill(1), o.fill(0), (a = 0);
    },
    f = (...P) => e(o, s, ...P),
    h = (P = r(0)) => {
      (o = f(i(0), P)),
        (s = f()),
        P.length !== 0 && ((o = f(i(1), P)), (s = f()));
    },
    b = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let P = 0;
      const M = [];
      for (; P < t; ) {
        s = f();
        const N = s.slice();
        M.push(N), (P += s.length);
      }
      return Fn(...M);
    };
  return (P, M) => {
    c(), h(P);
    let N;
    for (; !(N = M(b())); ) h();
    return c(), N;
  };
}
function qc(n, t, e = {}) {
  if (!n || typeof n != "object")
    throw new Error("expected valid options object");
  function r(i, s, o) {
    const a = n[i];
    if (o && a === void 0) return;
    const c = typeof a;
    if (c !== s || a === null)
      throw new Error(`param "${i}" is invalid: expected ${s}, got ${c}`);
  }
  Object.entries(t).forEach(([i, s]) => r(i, s, !1)),
    Object.entries(e).forEach(([i, s]) => r(i, s, !0));
}
function Lu(n) {
  const t = new WeakMap();
  return (e, ...r) => {
    const i = t.get(e);
    if (i !== void 0) return i;
    const s = n(e, ...r);
    return t.set(e, s), s;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Ur =
    BigInt(0),
  ar = BigInt(1),
  Ss = BigInt(2),
  Gg = BigInt(3),
  Kg = BigInt(4),
  Vg = BigInt(5),
  G1 = BigInt(7),
  Wg = BigInt(8),
  K1 = BigInt(9),
  qg = BigInt(16);
function We(n, t) {
  const e = n % t;
  return e >= Ur ? e : t + e;
}
function Me(n, t, e) {
  let r = n;
  for (; t-- > Ur; ) (r *= r), (r %= e);
  return r;
}
function g0(n, t) {
  if (n === Ur) throw new Error("invert: expected non-zero number");
  if (t <= Ur) throw new Error("invert: expected positive modulus, got " + t);
  let e = We(n, t),
    r = t,
    i = Ur,
    s = ar;
  for (; e !== Ur; ) {
    const a = r / e,
      c = r % e,
      f = i - s * a;
    (r = e), (e = c), (i = s), (s = f);
  }
  if (r !== ar) throw new Error("invert: does not exist");
  return We(i, t);
}
function ud(n, t, e) {
  if (!n.eql(n.sqr(t), e)) throw new Error("Cannot find square root");
}
function $g(n, t) {
  const e = (n.ORDER + ar) / Kg,
    r = n.pow(t, e);
  return ud(n, r, t), r;
}
function V1(n, t) {
  const e = (n.ORDER - Vg) / Wg,
    r = n.mul(t, Ss),
    i = n.pow(r, e),
    s = n.mul(t, i),
    o = n.mul(n.mul(s, Ss), i),
    a = n.mul(s, n.sub(o, n.ONE));
  return ud(n, a, t), a;
}
function W1(n) {
  const t = lo(n),
    e = Qg(n),
    r = e(t, t.neg(t.ONE)),
    i = e(t, r),
    s = e(t, t.neg(r)),
    o = (n + G1) / qg;
  return (a, c) => {
    let f = a.pow(c, o),
      h = a.mul(f, r);
    const b = a.mul(f, i),
      S = a.mul(f, s),
      P = a.eql(a.sqr(h), c),
      M = a.eql(a.sqr(b), c);
    (f = a.cmov(f, h, P)), (h = a.cmov(S, b, M));
    const N = a.eql(a.sqr(h), c),
      D = a.cmov(f, h, N);
    return ud(a, D, c), D;
  };
}
function Qg(n) {
  if (n < Gg) throw new Error("sqrt is not defined for small field");
  let t = n - ar,
    e = 0;
  for (; t % Ss === Ur; ) (t /= Ss), e++;
  let r = Ss;
  const i = lo(n);
  for (; y0(i, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (e === 1) return $g;
  let s = i.pow(r, t);
  const o = (t + ar) / Ss;
  return function (c, f) {
    if (c.is0(f)) return f;
    if (y0(c, f) !== 1) throw new Error("Cannot find square root");
    let h = e,
      b = c.mul(c.ONE, s),
      S = c.pow(f, t),
      P = c.pow(f, o);
    for (; !c.eql(S, c.ONE); ) {
      if (c.is0(S)) return c.ZERO;
      let M = 1,
        N = c.sqr(S);
      for (; !c.eql(N, c.ONE); )
        if ((M++, (N = c.sqr(N)), M === h))
          throw new Error("Cannot find square root");
      const D = ar << BigInt(h - M - 1),
        q = c.pow(b, D);
      (h = M), (b = c.sqr(q)), (S = c.mul(S, b)), (P = c.mul(P, q));
    }
    return P;
  };
}
function q1(n) {
  return n % Kg === Gg
    ? $g
    : n % Wg === Vg
    ? V1
    : n % qg === K1
    ? W1(n)
    : Qg(n);
}
const $1 = (n, t) => (We(n, t) & ar) === ar,
  Q1 = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN",
  ];
function J1(n) {
  const t = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number",
    },
    e = Q1.reduce((r, i) => ((r[i] = "function"), r), t);
  return qc(n, e), n;
}
function j1(n, t, e) {
  if (e < Ur) throw new Error("invalid exponent, negatives unsupported");
  if (e === Ur) return n.ONE;
  if (e === ar) return t;
  let r = n.ONE,
    i = t;
  for (; e > Ur; ) e & ar && (r = n.mul(r, i)), (i = n.sqr(i)), (e >>= ar);
  return r;
}
function Jg(n, t, e = !1) {
  const r = new Array(t.length).fill(e ? n.ZERO : void 0),
    i = t.reduce(
      (o, a, c) => (n.is0(a) ? o : ((r[c] = o), n.mul(o, a))),
      n.ONE
    ),
    s = n.inv(i);
  return (
    t.reduceRight(
      (o, a, c) => (n.is0(a) ? o : ((r[c] = n.mul(o, r[c])), n.mul(o, a))),
      s
    ),
    r
  );
}
function y0(n, t) {
  const e = (n.ORDER - ar) / Ss,
    r = n.pow(t, e),
    i = n.eql(r, n.ONE),
    s = n.eql(r, n.ZERO),
    o = n.eql(r, n.neg(n.ONE));
  if (!i && !s && !o) throw new Error("invalid Legendre symbol result");
  return i ? 1 : s ? 0 : -1;
}
function jg(n, t) {
  t !== void 0 && gc(t);
  const e = t !== void 0 ? t : n.toString(2).length,
    r = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: r };
}
function lo(n, t, e = !1, r = {}) {
  if (n <= Ur) throw new Error("invalid field: expected ORDER > 0, got " + n);
  let i,
    s,
    o = !1,
    a;
  if (typeof t == "object" && t != null) {
    if (r.sqrt || e) throw new Error("cannot specify opts in two arguments");
    const S = t;
    S.BITS && (i = S.BITS),
      S.sqrt && (s = S.sqrt),
      typeof S.isLE == "boolean" && (e = S.isLE),
      typeof S.modFromBytes == "boolean" && (o = S.modFromBytes),
      (a = S.allowedLengths);
  } else typeof t == "number" && (i = t), r.sqrt && (s = r.sqrt);
  const { nBitLength: c, nByteLength: f } = jg(n, i);
  if (f > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let h;
  const b = Object.freeze({
    ORDER: n,
    isLE: e,
    BITS: c,
    BYTES: f,
    MASK: Wc(c),
    ZERO: Ur,
    ONE: ar,
    allowedLengths: a,
    create: (S) => We(S, n),
    isValid: (S) => {
      if (typeof S != "bigint")
        throw new Error(
          "invalid field element: expected bigint, got " + typeof S
        );
      return Ur <= S && S < n;
    },
    is0: (S) => S === Ur,
    isValidNot0: (S) => !b.is0(S) && b.isValid(S),
    isOdd: (S) => (S & ar) === ar,
    neg: (S) => We(-S, n),
    eql: (S, P) => S === P,
    sqr: (S) => We(S * S, n),
    add: (S, P) => We(S + P, n),
    sub: (S, P) => We(S - P, n),
    mul: (S, P) => We(S * P, n),
    pow: (S, P) => j1(b, S, P),
    div: (S, P) => We(S * g0(P, n), n),
    sqrN: (S) => S * S,
    addN: (S, P) => S + P,
    subN: (S, P) => S - P,
    mulN: (S, P) => S * P,
    inv: (S) => g0(S, n),
    sqrt: s || ((S) => (h || (h = q1(n)), h(b, S))),
    toBytes: (S) => (e ? zg(S, f) : cd(S, f)),
    fromBytes: (S, P = !0) => {
      if (a) {
        if (!a.includes(S.length) || S.length > f)
          throw new Error(
            "Field.fromBytes: expected " + a + " bytes, got " + S.length
          );
        const N = new Uint8Array(f);
        N.set(S, e ? 0 : N.length - S.length), (S = N);
      }
      if (S.length !== f)
        throw new Error(
          "Field.fromBytes: expected " + f + " bytes, got " + S.length
        );
      let M = e ? yc(S) : bl(S);
      if ((o && (M = We(M, n)), !P && !b.isValid(M)))
        throw new Error("invalid field element: outside of range 0..ORDER");
      return M;
    },
    invertBatch: (S) => Jg(b, S),
    cmov: (S, P, M) => (M ? P : S),
  });
  return Object.freeze(b);
}
function Zg(n) {
  if (typeof n != "bigint") throw new Error("field order must be bigint");
  const t = n.toString(2).length;
  return Math.ceil(t / 8);
}
function Yg(n) {
  const t = Zg(n);
  return t + Math.ceil(t / 2);
}
function Z1(n, t, e = !1) {
  const r = n.length,
    i = Zg(t),
    s = Yg(t);
  if (r < 16 || r < s || r > 1024)
    throw new Error("expected " + s + "-1024 bytes of input, got " + r);
  const o = e ? yc(n) : bl(n),
    a = We(o, t - ar) + ar;
  return e ? zg(a, i) : cd(a, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Oa =
    BigInt(0),
  Is = BigInt(1);
function Uu(n, t) {
  const e = t.negate();
  return n ? e : t;
}
function Bs(n, t) {
  const e = Jg(
    n.Fp,
    t.map((r) => r.Z)
  );
  return t.map((r, i) => n.fromAffine(r.toAffine(e[i])));
}
function Xg(n, t) {
  if (!Number.isSafeInteger(n) || n <= 0 || n > t)
    throw new Error("invalid window size, expected [1.." + t + "], got W=" + n);
}
function yf(n, t) {
  Xg(n, t);
  const e = Math.ceil(t / n) + 1,
    r = 2 ** (n - 1),
    i = 2 ** n,
    s = Wc(n),
    o = BigInt(n);
  return { windows: e, windowSize: r, mask: s, maxNumber: i, shiftBy: o };
}
function m0(n, t, e) {
  const { windowSize: r, mask: i, maxNumber: s, shiftBy: o } = e;
  let a = Number(n & i),
    c = n >> o;
  a > r && ((a -= s), (c += Is));
  const f = t * r,
    h = f + Math.abs(a) - 1,
    b = a === 0,
    S = a < 0,
    P = t % 2 !== 0;
  return { nextN: c, offset: h, isZero: b, isNeg: S, isNegF: P, offsetF: f };
}
function Y1(n, t) {
  if (!Array.isArray(n)) throw new Error("array expected");
  n.forEach((e, r) => {
    if (!(e instanceof t)) throw new Error("invalid point at index " + r);
  });
}
function X1(n, t) {
  if (!Array.isArray(n)) throw new Error("array of scalars expected");
  n.forEach((e, r) => {
    if (!t.isValid(e)) throw new Error("invalid scalar at index " + r);
  });
}
const mf = new WeakMap(),
  ty = new WeakMap();
function wf(n) {
  return ty.get(n) || 1;
}
function w0(n) {
  if (n !== Oa) throw new Error("invalid wNAF");
}
let ey = class {
  constructor(t, e) {
    (this.BASE = t.BASE),
      (this.ZERO = t.ZERO),
      (this.Fn = t.Fn),
      (this.bits = e);
  }
  _unsafeLadder(t, e, r = this.ZERO) {
    let i = t;
    for (; e > Oa; ) e & Is && (r = r.add(i)), (i = i.double()), (e >>= Is);
    return r;
  }
  precomputeWindow(t, e) {
    const { windows: r, windowSize: i } = yf(e, this.bits),
      s = [];
    let o = t,
      a = o;
    for (let c = 0; c < r; c++) {
      (a = o), s.push(a);
      for (let f = 1; f < i; f++) (a = a.add(o)), s.push(a);
      o = a.double();
    }
    return s;
  }
  wNAF(t, e, r) {
    if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
    let i = this.ZERO,
      s = this.BASE;
    const o = yf(t, this.bits);
    for (let a = 0; a < o.windows; a++) {
      const {
        nextN: c,
        offset: f,
        isZero: h,
        isNeg: b,
        isNegF: S,
        offsetF: P,
      } = m0(r, a, o);
      (r = c), h ? (s = s.add(Uu(S, e[P]))) : (i = i.add(Uu(b, e[f])));
    }
    return w0(r), { p: i, f: s };
  }
  wNAFUnsafe(t, e, r, i = this.ZERO) {
    const s = yf(t, this.bits);
    for (let o = 0; o < s.windows && r !== Oa; o++) {
      const { nextN: a, offset: c, isZero: f, isNeg: h } = m0(r, o, s);
      if (((r = a), !f)) {
        const b = e[c];
        i = i.add(h ? b.negate() : b);
      }
    }
    return w0(r), i;
  }
  getPrecomputes(t, e, r) {
    let i = mf.get(e);
    return (
      i ||
        ((i = this.precomputeWindow(e, t)),
        t !== 1 && (typeof r == "function" && (i = r(i)), mf.set(e, i))),
      i
    );
  }
  cached(t, e, r) {
    const i = wf(t);
    return this.wNAF(i, this.getPrecomputes(i, t, r), e);
  }
  unsafe(t, e, r, i) {
    const s = wf(t);
    return s === 1
      ? this._unsafeLadder(t, e, i)
      : this.wNAFUnsafe(s, this.getPrecomputes(s, t, r), e, i);
  }
  createCache(t, e) {
    Xg(e, this.bits), ty.set(t, e), mf.delete(t);
  }
  hasCache(t) {
    return wf(t) !== 1;
  }
};
function tb(n, t, e, r) {
  let i = t,
    s = n.ZERO,
    o = n.ZERO;
  for (; e > Oa || r > Oa; )
    e & Is && (s = s.add(i)),
      r & Is && (o = o.add(i)),
      (i = i.double()),
      (e >>= Is),
      (r >>= Is);
  return { p1: s, p2: o };
}
function ry(n, t, e, r) {
  Y1(e, n), X1(r, t);
  const i = e.length,
    s = r.length;
  if (i !== s)
    throw new Error("arrays of points and scalars must have equal length");
  const o = n.ZERO,
    a = Hg(BigInt(i));
  let c = 1;
  a > 12 ? (c = a - 3) : a > 4 ? (c = a - 2) : a > 0 && (c = 2);
  const f = Wc(c),
    h = new Array(Number(f) + 1).fill(o),
    b = Math.floor((t.BITS - 1) / c) * c;
  let S = o;
  for (let P = b; P >= 0; P -= c) {
    h.fill(o);
    for (let N = 0; N < s; N++) {
      const D = r[N],
        q = Number((D >> BigInt(P)) & f);
      h[q] = h[q].add(e[N]);
    }
    let M = o;
    for (let N = h.length - 1, D = o; N > 0; N--)
      (D = D.add(h[N])), (M = M.add(D));
    if (((S = S.add(M)), P !== 0)) for (let N = 0; N < c; N++) S = S.double();
  }
  return S;
}
function b0(n, t, e) {
  if (t) {
    if (t.ORDER !== n)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return J1(t), t;
  } else return lo(n, { isLE: e });
}
function ny(n, t, e = {}, r) {
  if ((r === void 0 && (r = n === "edwards"), !t || typeof t != "object"))
    throw new Error(`expected valid ${n} CURVE object`);
  for (const c of ["p", "n", "h"]) {
    const f = t[c];
    if (!(typeof f == "bigint" && f > Oa))
      throw new Error(`CURVE.${c} must be positive bigint`);
  }
  const i = b0(t.p, e.Fp, r),
    s = b0(t.n, e.Fn, r),
    a = ["Gx", "Gy", "a", n === "weierstrass" ? "b" : "d"];
  for (const c of a)
    if (!i.isValid(t[c]))
      throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);
  return (t = Object.freeze(Object.assign({}, t))), { CURVE: t, Fp: i, Fn: s };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const _i =
    BigInt(0),
  Ze = BigInt(1),
  bf = BigInt(2),
  eb = BigInt(8);
function rb(n, t, e, r) {
  const i = n.sqr(e),
    s = n.sqr(r),
    o = n.add(n.mul(t.a, i), s),
    a = n.add(n.ONE, n.mul(t.d, n.mul(i, s)));
  return n.eql(o, a);
}
function nb(n, t = {}) {
  const e = ny("edwards", n, t, t.FpFnLE),
    { Fp: r, Fn: i } = e;
  let s = e.CURVE;
  const { h: o } = s;
  qc(t, {}, { uvRatio: "function" });
  const a = bf << (BigInt(i.BYTES * 8) - Ze),
    c = (D) => r.create(D),
    f =
      t.uvRatio ||
      ((D, q) => {
        try {
          return { isValid: !0, value: r.sqrt(r.div(D, q)) };
        } catch {
          return { isValid: !1, value: _i };
        }
      });
  if (!rb(r, s, s.Gx, s.Gy))
    throw new Error("bad curve params: generator point");
  function h(D, q, z = !1) {
    const V = z ? Ze : _i;
    return fh("coordinate " + D, q, V, a), q;
  }
  function b(D) {
    if (!(D instanceof M)) throw new Error("ExtendedPoint expected");
  }
  const S = Lu((D, q) => {
      const { X: z, Y: V, Z: et } = D,
        it = D.is0();
      q == null && (q = it ? eb : r.inv(et));
      const X = c(z * q),
        nt = c(V * q),
        R = r.mul(et, q);
      if (it) return { x: _i, y: Ze };
      if (R !== Ze) throw new Error("invZ was invalid");
      return { x: X, y: nt };
    }),
    P = Lu((D) => {
      const { a: q, d: z } = s;
      if (D.is0()) throw new Error("bad point: ZERO");
      const { X: V, Y: et, Z: it, T: X } = D,
        nt = c(V * V),
        R = c(et * et),
        x = c(it * it),
        B = c(x * x),
        F = c(nt * q),
        v = c(x * c(F + R)),
        y = c(B + c(z * c(nt * R)));
      if (v !== y) throw new Error("bad point: equation left != right (1)");
      const u = c(V * et),
        l = c(it * X);
      if (u !== l) throw new Error("bad point: equation left != right (2)");
      return !0;
    });
  class M {
    constructor(q, z, V, et) {
      (this.X = h("x", q)),
        (this.Y = h("y", z)),
        (this.Z = h("z", V, !0)),
        (this.T = h("t", et)),
        Object.freeze(this);
    }
    static CURVE() {
      return s;
    }
    static fromAffine(q) {
      if (q instanceof M) throw new Error("extended point not allowed");
      const { x: z, y: V } = q || {};
      return h("x", z), h("y", V), new M(z, V, Ze, c(z * V));
    }
    static fromBytes(q, z = !1) {
      const V = r.BYTES,
        { a: et, d: it } = s;
      (q = p0(An(q, V, "point"))), ro(z, "zip215");
      const X = p0(q),
        nt = q[V - 1];
      X[V - 1] = nt & -129;
      const R = yc(X),
        x = z ? a : r.ORDER;
      fh("point.y", R, _i, x);
      const B = c(R * R),
        F = c(B - Ze),
        v = c(it * B - et);
      let { isValid: y, value: u } = f(F, v);
      if (!y) throw new Error("bad point: invalid y coordinate");
      const l = (u & Ze) === Ze,
        g = (nt & 128) !== 0;
      if (!z && u === _i && g) throw new Error("bad point: x=0 and x_0=1");
      return g !== l && (u = c(-u)), M.fromAffine({ x: u, y: R });
    }
    static fromHex(q, z = !1) {
      return M.fromBytes(Le("point", q), z);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(q = 8, z = !0) {
      return N.createCache(this, q), z || this.multiply(bf), this;
    }
    assertValidity() {
      P(this);
    }
    equals(q) {
      b(q);
      const { X: z, Y: V, Z: et } = this,
        { X: it, Y: X, Z: nt } = q,
        R = c(z * nt),
        x = c(it * et),
        B = c(V * nt),
        F = c(X * et);
      return R === x && B === F;
    }
    is0() {
      return this.equals(M.ZERO);
    }
    negate() {
      return new M(c(-this.X), this.Y, this.Z, c(-this.T));
    }
    double() {
      const { a: q } = s,
        { X: z, Y: V, Z: et } = this,
        it = c(z * z),
        X = c(V * V),
        nt = c(bf * c(et * et)),
        R = c(q * it),
        x = z + V,
        B = c(c(x * x) - it - X),
        F = R + X,
        v = F - nt,
        y = R - X,
        u = c(B * v),
        l = c(F * y),
        g = c(B * y),
        k = c(v * F);
      return new M(u, l, k, g);
    }
    add(q) {
      b(q);
      const { a: z, d: V } = s,
        { X: et, Y: it, Z: X, T: nt } = this,
        { X: R, Y: x, Z: B, T: F } = q,
        v = c(et * R),
        y = c(it * x),
        u = c(nt * V * F),
        l = c(X * B),
        g = c((et + it) * (R + x) - v - y),
        k = l - u,
        I = l + u,
        _ = c(y - z * v),
        G = c(g * k),
        O = c(I * _),
        d = c(g * _),
        p = c(k * I);
      return new M(G, O, p, d);
    }
    subtract(q) {
      return this.add(q.negate());
    }
    multiply(q) {
      if (!i.isValidNot0(q))
        throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      const { p: z, f: V } = N.cached(this, q, (et) => Bs(M, et));
      return Bs(M, [z, V])[0];
    }
    multiplyUnsafe(q, z = M.ZERO) {
      if (!i.isValid(q))
        throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      return q === _i
        ? M.ZERO
        : this.is0() || q === Ze
        ? this
        : N.unsafe(this, q, (V) => Bs(M, V), z);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    isTorsionFree() {
      return N.unsafe(this, s.n).is0();
    }
    toAffine(q) {
      return S(this, q);
    }
    clearCofactor() {
      return o === Ze ? this : this.multiplyUnsafe(o);
    }
    toBytes() {
      const { x: q, y: z } = this.toAffine(),
        V = r.toBytes(z);
      return (V[V.length - 1] |= q & Ze ? 128 : 0), V;
    }
    toHex() {
      return Xs(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(q) {
      return Bs(M, q);
    }
    static msm(q, z) {
      return ry(M, i, q, z);
    }
    _setWindowSize(q) {
      this.precompute(q);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  (M.BASE = new M(s.Gx, s.Gy, Ze, c(s.Gx * s.Gy))),
    (M.ZERO = new M(_i, Ze, Ze, _i)),
    (M.Fp = r),
    (M.Fn = i);
  const N = new ey(M, i.BITS);
  return M.BASE.precompute(8), M;
}
function ib(n, t, e = {}) {
  if (typeof t != "function")
    throw new Error('"hash" function param is required');
  qc(
    e,
    {},
    {
      adjustScalarBytes: "function",
      randomBytes: "function",
      domain: "function",
      prehash: "function",
      mapToCurve: "function",
    }
  );
  const { prehash: r } = e,
    { BASE: i, Fp: s, Fn: o } = n,
    a = e.randomBytes || id,
    c = e.adjustScalarBytes || ((x) => x),
    f =
      e.domain ||
      ((x, B, F) => {
        if ((ro(F, "phflag"), B.length || F))
          throw new Error("Contexts/pre-hash are not supported");
        return x;
      });
  function h(x) {
    return o.create(yc(x));
  }
  function b(x) {
    const B = V.secretKey;
    x = Le("private key", x, B);
    const F = Le("hashed private key", t(x), 2 * B),
      v = c(F.slice(0, B)),
      y = F.slice(B, 2 * B),
      u = h(v);
    return { head: v, prefix: y, scalar: u };
  }
  function S(x) {
    const { head: B, prefix: F, scalar: v } = b(x),
      y = i.multiply(v),
      u = y.toBytes();
    return { head: B, prefix: F, scalar: v, point: y, pointBytes: u };
  }
  function P(x) {
    return S(x).pointBytes;
  }
  function M(x = Uint8Array.of(), ...B) {
    const F = Fn(...B);
    return h(t(f(F, Le("context", x), !!r)));
  }
  function N(x, B, F = {}) {
    (x = Le("message", x)), r && (x = r(x));
    const { prefix: v, scalar: y, pointBytes: u } = S(B),
      l = M(F.context, v, x),
      g = i.multiply(l).toBytes(),
      k = M(F.context, g, u, x),
      I = o.create(l + k * y);
    if (!o.isValid(I)) throw new Error("sign failed: invalid s");
    const _ = Fn(g, o.toBytes(I));
    return An(_, V.signature, "result");
  }
  const D = { zip215: !0 };
  function q(x, B, F, v = D) {
    const { context: y, zip215: u } = v,
      l = V.signature;
    (x = Le("signature", x, l)),
      (B = Le("message", B)),
      (F = Le("publicKey", F, V.publicKey)),
      u !== void 0 && ro(u, "zip215"),
      r && (B = r(B));
    const g = l / 2,
      k = x.subarray(0, g),
      I = yc(x.subarray(g, l));
    let _, G, O;
    try {
      (_ = n.fromBytes(F, u)),
        (G = n.fromBytes(k, u)),
        (O = i.multiplyUnsafe(I));
    } catch {
      return !1;
    }
    if (!u && _.isSmallOrder()) return !1;
    const d = M(y, G.toBytes(), _.toBytes(), B);
    return G.add(_.multiplyUnsafe(d)).subtract(O).clearCofactor().is0();
  }
  const z = s.BYTES,
    V = { secretKey: z, publicKey: z, signature: 2 * z, seed: z };
  function et(x = a(V.seed)) {
    return An(x, V.seed, "seed");
  }
  function it(x) {
    const B = R.randomSecretKey(x);
    return { secretKey: B, publicKey: P(B) };
  }
  function X(x) {
    return Vc(x) && x.length === o.BYTES;
  }
  function nt(x, B) {
    try {
      return !!n.fromBytes(x, B);
    } catch {
      return !1;
    }
  }
  const R = {
    getExtendedPublicKey: S,
    randomSecretKey: et,
    isValidSecretKey: X,
    isValidPublicKey: nt,
    toMontgomery(x) {
      const { y: B } = n.fromBytes(x),
        F = V.publicKey,
        v = F === 32;
      if (!v && F !== 57) throw new Error("only defined for 25519 and 448");
      const y = v ? s.div(Ze + B, Ze - B) : s.div(B - Ze, B + Ze);
      return s.toBytes(y);
    },
    toMontgomerySecret(x) {
      const B = V.secretKey;
      An(x, B);
      const F = t(x.subarray(0, B));
      return c(F).subarray(0, B);
    },
    randomPrivateKey: et,
    precompute(x = 8, B = n.BASE) {
      return B.precompute(x, !1);
    },
  };
  return Object.freeze({
    keygen: it,
    getPublicKey: P,
    sign: N,
    verify: q,
    utils: R,
    Point: n,
    lengths: V,
  });
}
function sb(n) {
  const t = {
      a: n.a,
      d: n.d,
      p: n.Fp.ORDER,
      n: n.n,
      h: n.h,
      Gx: n.Gx,
      Gy: n.Gy,
    },
    e = n.Fp,
    r = lo(t.n, n.nBitLength, !0),
    i = { Fp: e, Fn: r, uvRatio: n.uvRatio },
    s = {
      randomBytes: n.randomBytes,
      adjustScalarBytes: n.adjustScalarBytes,
      domain: n.domain,
      prehash: n.prehash,
      mapToCurve: n.mapToCurve,
    };
  return { CURVE: t, curveOpts: i, hash: n.hash, eddsaOpts: s };
}
function ob(n, t) {
  const e = t.Point;
  return Object.assign({}, t, {
    ExtendedPoint: e,
    CURVE: n,
    nBitLength: e.Fn.BITS,
    nByteLength: e.Fn.BYTES,
  });
}
function ab(n) {
  const { CURVE: t, curveOpts: e, hash: r, eddsaOpts: i } = sb(n),
    s = nb(t, e),
    o = ib(s, r, i);
  return ob(n, o);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const cb =
    BigInt(1),
  A0 = BigInt(2);
BigInt(3);
const ub = BigInt(5),
  lb = BigInt(8),
  ld = BigInt(
    "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
  ),
  iy = {
    p: ld,
    n: BigInt(
      "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
    ),
    h: lb,
    a: BigInt(
      "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
    ),
    d: BigInt(
      "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
    ),
    Gx: BigInt(
      "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
    ),
    Gy: BigInt(
      "0x6666666666666666666666666666666666666666666666666666666666666658"
    ),
  };
function fb(n) {
  const t = BigInt(10),
    e = BigInt(20),
    r = BigInt(40),
    i = BigInt(80),
    s = ld,
    a = (((n * n) % s) * n) % s,
    c = (Me(a, A0, s) * a) % s,
    f = (Me(c, cb, s) * n) % s,
    h = (Me(f, ub, s) * f) % s,
    b = (Me(h, t, s) * h) % s,
    S = (Me(b, e, s) * b) % s,
    P = (Me(S, r, s) * S) % s,
    M = (Me(P, i, s) * P) % s,
    N = (Me(M, i, s) * P) % s,
    D = (Me(N, t, s) * h) % s;
  return { pow_p_5_8: (Me(D, A0, s) * n) % s, b2: a };
}
function hb(n) {
  return (n[0] &= 248), (n[31] &= 127), (n[31] |= 64), n;
}
const E0 = BigInt(
  "19681161376707505956807079304988542015446066515923890162744021073123829784752"
);
function db(n, t) {
  const e = ld,
    r = We(t * t * t, e),
    i = We(r * r * t, e),
    s = fb(n * i).pow_p_5_8;
  let o = We(n * r * s, e);
  const a = We(t * o * o, e),
    c = o,
    f = We(o * E0, e),
    h = a === n,
    b = a === We(-n, e),
    S = a === We(-n * E0, e);
  return (
    h && (o = c),
    (b || S) && (o = f),
    $1(o, e) && (o = We(-o, e)),
    { isValid: h || b, value: o }
  );
}
const pb = lo(iy.p, { isLE: !0 }),
  gb = { ...iy, Fp: pb, hash: N1, adjustScalarBytes: hb, uvRatio: db },
  qa = ab(gb);
var xu = { exports: {} },
  Af = {},
  x0;
function fd() {
  return (
    x0 ||
      ((x0 = 1),
      (function (n) {
        Object.defineProperties(n, {
          __esModule: { value: !0 },
          [Symbol.toStringTag]: { value: "Module" },
        });
        var t = {},
          e = {};
        (e.byteLength = h), (e.toByteArray = S), (e.fromByteArray = N);
        for (
          var r = [],
            i = [],
            s = typeof Uint8Array < "u" ? Uint8Array : Array,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = 0,
            c = o.length;
          a < c;
          ++a
        )
          (r[a] = o[a]), (i[o.charCodeAt(a)] = a);
        (i[45] = 62), (i[95] = 63);
        function f(z) {
          var V = z.length;
          if (V % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var et = z.indexOf("=");
          et === -1 && (et = V);
          var it = et === V ? 0 : 4 - (et % 4);
          return [et, it];
        }
        function h(z) {
          var V = f(z),
            et = V[0],
            it = V[1];
          return ((et + it) * 3) / 4 - it;
        }
        function b(z, V, et) {
          return ((V + et) * 3) / 4 - et;
        }
        function S(z) {
          var V,
            et = f(z),
            it = et[0],
            X = et[1],
            nt = new s(b(z, it, X)),
            R = 0,
            x = X > 0 ? it - 4 : it,
            B;
          for (B = 0; B < x; B += 4)
            (V =
              (i[z.charCodeAt(B)] << 18) |
              (i[z.charCodeAt(B + 1)] << 12) |
              (i[z.charCodeAt(B + 2)] << 6) |
              i[z.charCodeAt(B + 3)]),
              (nt[R++] = (V >> 16) & 255),
              (nt[R++] = (V >> 8) & 255),
              (nt[R++] = V & 255);
          return (
            X === 2 &&
              ((V = (i[z.charCodeAt(B)] << 2) | (i[z.charCodeAt(B + 1)] >> 4)),
              (nt[R++] = V & 255)),
            X === 1 &&
              ((V =
                (i[z.charCodeAt(B)] << 10) |
                (i[z.charCodeAt(B + 1)] << 4) |
                (i[z.charCodeAt(B + 2)] >> 2)),
              (nt[R++] = (V >> 8) & 255),
              (nt[R++] = V & 255)),
            nt
          );
        }
        function P(z) {
          return (
            r[(z >> 18) & 63] + r[(z >> 12) & 63] + r[(z >> 6) & 63] + r[z & 63]
          );
        }
        function M(z, V, et) {
          for (var it, X = [], nt = V; nt < et; nt += 3)
            (it =
              ((z[nt] << 16) & 16711680) +
              ((z[nt + 1] << 8) & 65280) +
              (z[nt + 2] & 255)),
              X.push(P(it));
          return X.join("");
        }
        function N(z) {
          for (
            var V,
              et = z.length,
              it = et % 3,
              X = [],
              nt = 16383,
              R = 0,
              x = et - it;
            R < x;
            R += nt
          )
            X.push(M(z, R, R + nt > x ? x : R + nt));
          return (
            it === 1
              ? ((V = z[et - 1]), X.push(r[V >> 2] + r[(V << 4) & 63] + "=="))
              : it === 2 &&
                ((V = (z[et - 2] << 8) + z[et - 1]),
                X.push(r[V >> 10] + r[(V >> 4) & 63] + r[(V << 2) & 63] + "=")),
            X.join("")
          );
        }
        var D = {};
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (D.read =
          function (z, V, et, it, X) {
            var nt,
              R,
              x = X * 8 - it - 1,
              B = (1 << x) - 1,
              F = B >> 1,
              v = -7,
              y = et ? X - 1 : 0,
              u = et ? -1 : 1,
              l = z[V + y];
            for (
              y += u, nt = l & ((1 << -v) - 1), l >>= -v, v += x;
              v > 0;
              nt = nt * 256 + z[V + y], y += u, v -= 8
            );
            for (
              R = nt & ((1 << -v) - 1), nt >>= -v, v += it;
              v > 0;
              R = R * 256 + z[V + y], y += u, v -= 8
            );
            if (nt === 0) nt = 1 - F;
            else {
              if (nt === B) return R ? NaN : (l ? -1 : 1) * (1 / 0);
              (R = R + Math.pow(2, it)), (nt = nt - F);
            }
            return (l ? -1 : 1) * R * Math.pow(2, nt - it);
          }),
          (D.write = function (z, V, et, it, X, nt) {
            var R,
              x,
              B,
              F = nt * 8 - X - 1,
              v = (1 << F) - 1,
              y = v >> 1,
              u = X === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              l = it ? 0 : nt - 1,
              g = it ? 1 : -1,
              k = V < 0 || (V === 0 && 1 / V < 0) ? 1 : 0;
            for (
              V = Math.abs(V),
                isNaN(V) || V === 1 / 0
                  ? ((x = isNaN(V) ? 1 : 0), (R = v))
                  : ((R = Math.floor(Math.log(V) / Math.LN2)),
                    V * (B = Math.pow(2, -R)) < 1 && (R--, (B *= 2)),
                    R + y >= 1 ? (V += u / B) : (V += u * Math.pow(2, 1 - y)),
                    V * B >= 2 && (R++, (B /= 2)),
                    R + y >= v
                      ? ((x = 0), (R = v))
                      : R + y >= 1
                      ? ((x = (V * B - 1) * Math.pow(2, X)), (R = R + y))
                      : ((x = V * Math.pow(2, y - 1) * Math.pow(2, X)),
                        (R = 0)));
              X >= 8;
              z[et + l] = x & 255, l += g, x /= 256, X -= 8
            );
            for (
              R = (R << X) | x, F += X;
              F > 0;
              z[et + l] = R & 255, l += g, R /= 256, F -= 8
            );
            z[et + l - g] |= k * 128;
          });
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ (function (z) {
          const V = e,
            et = D,
            it =
              typeof Symbol == "function" && typeof Symbol.for == "function"
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          (z.Buffer = v), (z.SlowBuffer = p), (z.INSPECT_MAX_BYTES = 50);
          const X = 2147483647;
          z.kMaxLength = X;
          const {
            Uint8Array: nt,
            ArrayBuffer: R,
            SharedArrayBuffer: x,
          } = globalThis;
          (v.TYPED_ARRAY_SUPPORT = B()),
            !v.TYPED_ARRAY_SUPPORT &&
              typeof console < "u" &&
              typeof console.error == "function" &&
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              );
          function B() {
            try {
              const U = new nt(1),
                w = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(w, nt.prototype),
                Object.setPrototypeOf(U, w),
                U.foo() === 42
              );
            } catch {
              return !1;
            }
          }
          Object.defineProperty(v.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (v.isBuffer(this)) return this.buffer;
            },
          }),
            Object.defineProperty(v.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (v.isBuffer(this)) return this.byteOffset;
              },
            });
          function F(U) {
            if (U > X)
              throw new RangeError(
                'The value "' + U + '" is invalid for option "size"'
              );
            const w = new nt(U);
            return Object.setPrototypeOf(w, v.prototype), w;
          }
          function v(U, w, E) {
            if (typeof U == "number") {
              if (typeof w == "string")
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return g(U);
            }
            return y(U, w, E);
          }
          v.poolSize = 8192;
          function y(U, w, E) {
            if (typeof U == "string") return k(U, w);
            if (R.isView(U)) return _(U);
            if (U == null)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof U
              );
            if (
              zr(U, R) ||
              (U && zr(U.buffer, R)) ||
              (typeof x < "u" && (zr(U, x) || (U && zr(U.buffer, x))))
            )
              return G(U, w, E);
            if (typeof U == "number")
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            const W = U.valueOf && U.valueOf();
            if (W != null && W !== U) return v.from(W, w, E);
            const Y = O(U);
            if (Y) return Y;
            if (
              typeof Symbol < "u" &&
              Symbol.toPrimitive != null &&
              typeof U[Symbol.toPrimitive] == "function"
            )
              return v.from(U[Symbol.toPrimitive]("string"), w, E);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof U
            );
          }
          (v.from = function (U, w, E) {
            return y(U, w, E);
          }),
            Object.setPrototypeOf(v.prototype, nt.prototype),
            Object.setPrototypeOf(v, nt);
          function u(U) {
            if (typeof U != "number")
              throw new TypeError('"size" argument must be of type number');
            if (U < 0)
              throw new RangeError(
                'The value "' + U + '" is invalid for option "size"'
              );
          }
          function l(U, w, E) {
            return (
              u(U),
              U <= 0
                ? F(U)
                : w !== void 0
                ? typeof E == "string"
                  ? F(U).fill(w, E)
                  : F(U).fill(w)
                : F(U)
            );
          }
          v.alloc = function (U, w, E) {
            return l(U, w, E);
          };
          function g(U) {
            return u(U), F(U < 0 ? 0 : d(U) | 0);
          }
          (v.allocUnsafe = function (U) {
            return g(U);
          }),
            (v.allocUnsafeSlow = function (U) {
              return g(U);
            });
          function k(U, w) {
            if (
              ((typeof w != "string" || w === "") && (w = "utf8"),
              !v.isEncoding(w))
            )
              throw new TypeError("Unknown encoding: " + w);
            const E = T(U, w) | 0;
            let W = F(E);
            const Y = W.write(U, w);
            return Y !== E && (W = W.slice(0, Y)), W;
          }
          function I(U) {
            const w = U.length < 0 ? 0 : d(U.length) | 0,
              E = F(w);
            for (let W = 0; W < w; W += 1) E[W] = U[W] & 255;
            return E;
          }
          function _(U) {
            if (zr(U, nt)) {
              const w = new nt(U);
              return G(w.buffer, w.byteOffset, w.byteLength);
            }
            return I(U);
          }
          function G(U, w, E) {
            if (w < 0 || U.byteLength < w)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (U.byteLength < w + (E || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            let W;
            return (
              w === void 0 && E === void 0
                ? (W = new nt(U))
                : E === void 0
                ? (W = new nt(U, w))
                : (W = new nt(U, w, E)),
              Object.setPrototypeOf(W, v.prototype),
              W
            );
          }
          function O(U) {
            if (v.isBuffer(U)) {
              const w = d(U.length) | 0,
                E = F(w);
              return E.length === 0 || U.copy(E, 0, 0, w), E;
            }
            if (U.length !== void 0)
              return typeof U.length != "number" || Se(U.length) ? F(0) : I(U);
            if (U.type === "Buffer" && Array.isArray(U.data)) return I(U.data);
          }
          function d(U) {
            if (U >= X)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  X.toString(16) +
                  " bytes"
              );
            return U | 0;
          }
          function p(U) {
            return +U != U && (U = 0), v.alloc(+U);
          }
          (v.isBuffer = function (w) {
            return w != null && w._isBuffer === !0 && w !== v.prototype;
          }),
            (v.compare = function (w, E) {
              if (
                (zr(w, nt) && (w = v.from(w, w.offset, w.byteLength)),
                zr(E, nt) && (E = v.from(E, E.offset, E.byteLength)),
                !v.isBuffer(w) || !v.isBuffer(E))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (w === E) return 0;
              let W = w.length,
                Y = E.length;
              for (let st = 0, ft = Math.min(W, Y); st < ft; ++st)
                if (w[st] !== E[st]) {
                  (W = w[st]), (Y = E[st]);
                  break;
                }
              return W < Y ? -1 : Y < W ? 1 : 0;
            }),
            (v.isEncoding = function (w) {
              switch (String(w).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (v.concat = function (w, E) {
              if (!Array.isArray(w))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              if (w.length === 0) return v.alloc(0);
              let W;
              if (E === void 0)
                for (E = 0, W = 0; W < w.length; ++W) E += w[W].length;
              const Y = v.allocUnsafe(E);
              let st = 0;
              for (W = 0; W < w.length; ++W) {
                let ft = w[W];
                if (zr(ft, nt))
                  st + ft.length > Y.length
                    ? (v.isBuffer(ft) || (ft = v.from(ft)), ft.copy(Y, st))
                    : nt.prototype.set.call(Y, ft, st);
                else if (v.isBuffer(ft)) ft.copy(Y, st);
                else
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                st += ft.length;
              }
              return Y;
            });
          function T(U, w) {
            if (v.isBuffer(U)) return U.length;
            if (R.isView(U) || zr(U, R)) return U.byteLength;
            if (typeof U != "string")
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof U
              );
            const E = U.length,
              W = arguments.length > 2 && arguments[2] === !0;
            if (!W && E === 0) return 0;
            let Y = !1;
            for (;;)
              switch (w) {
                case "ascii":
                case "latin1":
                case "binary":
                  return E;
                case "utf8":
                case "utf-8":
                  return Ot(U).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E * 2;
                case "hex":
                  return E >>> 1;
                case "base64":
                  return Pt(U).length;
                default:
                  if (Y) return W ? -1 : Ot(U).length;
                  (w = ("" + w).toLowerCase()), (Y = !0);
              }
          }
          v.byteLength = T;
          function H(U, w, E) {
            let W = !1;
            if (
              ((w === void 0 || w < 0) && (w = 0),
              w > this.length ||
                ((E === void 0 || E > this.length) && (E = this.length),
                E <= 0) ||
                ((E >>>= 0), (w >>>= 0), E <= w))
            )
              return "";
            for (U || (U = "utf8"); ; )
              switch (U) {
                case "hex":
                  return ye(this, w, E);
                case "utf8":
                case "utf-8":
                  return It(this, w, E);
                case "ascii":
                  return ke(this, w, E);
                case "latin1":
                case "binary":
                  return mo(this, w, E);
                case "base64":
                  return _t(this, w, E);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return ve(this, w, E);
                default:
                  if (W) throw new TypeError("Unknown encoding: " + U);
                  (U = (U + "").toLowerCase()), (W = !0);
              }
          }
          v.prototype._isBuffer = !0;
          function J(U, w, E) {
            const W = U[w];
            (U[w] = U[E]), (U[E] = W);
          }
          (v.prototype.swap16 = function () {
            const w = this.length;
            if (w % 2 !== 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let E = 0; E < w; E += 2) J(this, E, E + 1);
            return this;
          }),
            (v.prototype.swap32 = function () {
              const w = this.length;
              if (w % 4 !== 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits"
                );
              for (let E = 0; E < w; E += 4)
                J(this, E, E + 3), J(this, E + 1, E + 2);
              return this;
            }),
            (v.prototype.swap64 = function () {
              const w = this.length;
              if (w % 8 !== 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits"
                );
              for (let E = 0; E < w; E += 8)
                J(this, E, E + 7),
                  J(this, E + 1, E + 6),
                  J(this, E + 2, E + 5),
                  J(this, E + 3, E + 4);
              return this;
            }),
            (v.prototype.toString = function () {
              const w = this.length;
              return w === 0
                ? ""
                : arguments.length === 0
                ? It(this, 0, w)
                : H.apply(this, arguments);
            }),
            (v.prototype.toLocaleString = v.prototype.toString),
            (v.prototype.equals = function (w) {
              if (!v.isBuffer(w))
                throw new TypeError("Argument must be a Buffer");
              return this === w ? !0 : v.compare(this, w) === 0;
            }),
            (v.prototype.inspect = function () {
              let w = "";
              const E = z.INSPECT_MAX_BYTES;
              return (
                (w = this.toString("hex", 0, E)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > E && (w += " ... "),
                "<Buffer " + w + ">"
              );
            }),
            it && (v.prototype[it] = v.prototype.inspect),
            (v.prototype.compare = function (w, E, W, Y, st) {
              if (
                (zr(w, nt) && (w = v.from(w, w.offset, w.byteLength)),
                !v.isBuffer(w))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof w
                );
              if (
                (E === void 0 && (E = 0),
                W === void 0 && (W = w ? w.length : 0),
                Y === void 0 && (Y = 0),
                st === void 0 && (st = this.length),
                E < 0 || W > w.length || Y < 0 || st > this.length)
              )
                throw new RangeError("out of range index");
              if (Y >= st && E >= W) return 0;
              if (Y >= st) return -1;
              if (E >= W) return 1;
              if (((E >>>= 0), (W >>>= 0), (Y >>>= 0), (st >>>= 0), this === w))
                return 0;
              let ft = st - Y,
                Kt = W - E;
              const Ft = Math.min(ft, Kt),
                Lt = this.slice(Y, st),
                xe = w.slice(E, W);
              for (let Tt = 0; Tt < Ft; ++Tt)
                if (Lt[Tt] !== xe[Tt]) {
                  (ft = Lt[Tt]), (Kt = xe[Tt]);
                  break;
                }
              return ft < Kt ? -1 : Kt < ft ? 1 : 0;
            });
          function at(U, w, E, W, Y) {
            if (U.length === 0) return -1;
            if (
              (typeof E == "string"
                ? ((W = E), (E = 0))
                : E > 2147483647
                ? (E = 2147483647)
                : E < -2147483648 && (E = -2147483648),
              (E = +E),
              Se(E) && (E = Y ? 0 : U.length - 1),
              E < 0 && (E = U.length + E),
              E >= U.length)
            ) {
              if (Y) return -1;
              E = U.length - 1;
            } else if (E < 0)
              if (Y) E = 0;
              else return -1;
            if ((typeof w == "string" && (w = v.from(w, W)), v.isBuffer(w)))
              return w.length === 0 ? -1 : yt(U, w, E, W, Y);
            if (typeof w == "number")
              return (
                (w = w & 255),
                typeof nt.prototype.indexOf == "function"
                  ? Y
                    ? nt.prototype.indexOf.call(U, w, E)
                    : nt.prototype.lastIndexOf.call(U, w, E)
                  : yt(U, [w], E, W, Y)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function yt(U, w, E, W, Y) {
            let st = 1,
              ft = U.length,
              Kt = w.length;
            if (
              W !== void 0 &&
              ((W = String(W).toLowerCase()),
              W === "ucs2" ||
                W === "ucs-2" ||
                W === "utf16le" ||
                W === "utf-16le")
            ) {
              if (U.length < 2 || w.length < 2) return -1;
              (st = 2), (ft /= 2), (Kt /= 2), (E /= 2);
            }
            function Ft(xe, Tt) {
              return st === 1 ? xe[Tt] : xe.readUInt16BE(Tt * st);
            }
            let Lt;
            if (Y) {
              let xe = -1;
              for (Lt = E; Lt < ft; Lt++)
                if (Ft(U, Lt) === Ft(w, xe === -1 ? 0 : Lt - xe)) {
                  if ((xe === -1 && (xe = Lt), Lt - xe + 1 === Kt))
                    return xe * st;
                } else xe !== -1 && (Lt -= Lt - xe), (xe = -1);
            } else
              for (E + Kt > ft && (E = ft - Kt), Lt = E; Lt >= 0; Lt--) {
                let xe = !0;
                for (let Tt = 0; Tt < Kt; Tt++)
                  if (Ft(U, Lt + Tt) !== Ft(w, Tt)) {
                    xe = !1;
                    break;
                  }
                if (xe) return Lt;
              }
            return -1;
          }
          (v.prototype.includes = function (w, E, W) {
            return this.indexOf(w, E, W) !== -1;
          }),
            (v.prototype.indexOf = function (w, E, W) {
              return at(this, w, E, W, !0);
            }),
            (v.prototype.lastIndexOf = function (w, E, W) {
              return at(this, w, E, W, !1);
            });
          function wt(U, w, E, W) {
            E = Number(E) || 0;
            const Y = U.length - E;
            W ? ((W = Number(W)), W > Y && (W = Y)) : (W = Y);
            const st = w.length;
            W > st / 2 && (W = st / 2);
            let ft;
            for (ft = 0; ft < W; ++ft) {
              const Kt = parseInt(w.substr(ft * 2, 2), 16);
              if (Se(Kt)) return ft;
              U[E + ft] = Kt;
            }
            return ft;
          }
          function Ut(U, w, E, W) {
            return Ee(Ot(w, U.length - E), U, E, W);
          }
          function Rt(U, w, E, W) {
            return Ee(Mt(w), U, E, W);
          }
          function zt(U, w, E, W) {
            return Ee(Pt(w), U, E, W);
          }
          function Zt(U, w, E, W) {
            return Ee(ge(w, U.length - E), U, E, W);
          }
          (v.prototype.write = function (w, E, W, Y) {
            if (E === void 0) (Y = "utf8"), (W = this.length), (E = 0);
            else if (W === void 0 && typeof E == "string")
              (Y = E), (W = this.length), (E = 0);
            else if (isFinite(E))
              (E = E >>> 0),
                isFinite(W)
                  ? ((W = W >>> 0), Y === void 0 && (Y = "utf8"))
                  : ((Y = W), (W = void 0));
            else
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            const st = this.length - E;
            if (
              ((W === void 0 || W > st) && (W = st),
              (w.length > 0 && (W < 0 || E < 0)) || E > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            Y || (Y = "utf8");
            let ft = !1;
            for (;;)
              switch (Y) {
                case "hex":
                  return wt(this, w, E, W);
                case "utf8":
                case "utf-8":
                  return Ut(this, w, E, W);
                case "ascii":
                case "latin1":
                case "binary":
                  return Rt(this, w, E, W);
                case "base64":
                  return zt(this, w, E, W);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return Zt(this, w, E, W);
                default:
                  if (ft) throw new TypeError("Unknown encoding: " + Y);
                  (Y = ("" + Y).toLowerCase()), (ft = !0);
              }
          }),
            (v.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          function _t(U, w, E) {
            return w === 0 && E === U.length
              ? V.fromByteArray(U)
              : V.fromByteArray(U.slice(w, E));
          }
          function It(U, w, E) {
            E = Math.min(U.length, E);
            const W = [];
            let Y = w;
            for (; Y < E; ) {
              const st = U[Y];
              let ft = null,
                Kt = st > 239 ? 4 : st > 223 ? 3 : st > 191 ? 2 : 1;
              if (Y + Kt <= E) {
                let Ft, Lt, xe, Tt;
                switch (Kt) {
                  case 1:
                    st < 128 && (ft = st);
                    break;
                  case 2:
                    (Ft = U[Y + 1]),
                      (Ft & 192) === 128 &&
                        ((Tt = ((st & 31) << 6) | (Ft & 63)),
                        Tt > 127 && (ft = Tt));
                    break;
                  case 3:
                    (Ft = U[Y + 1]),
                      (Lt = U[Y + 2]),
                      (Ft & 192) === 128 &&
                        (Lt & 192) === 128 &&
                        ((Tt =
                          ((st & 15) << 12) | ((Ft & 63) << 6) | (Lt & 63)),
                        Tt > 2047 && (Tt < 55296 || Tt > 57343) && (ft = Tt));
                    break;
                  case 4:
                    (Ft = U[Y + 1]),
                      (Lt = U[Y + 2]),
                      (xe = U[Y + 3]),
                      (Ft & 192) === 128 &&
                        (Lt & 192) === 128 &&
                        (xe & 192) === 128 &&
                        ((Tt =
                          ((st & 15) << 18) |
                          ((Ft & 63) << 12) |
                          ((Lt & 63) << 6) |
                          (xe & 63)),
                        Tt > 65535 && Tt < 1114112 && (ft = Tt));
                }
              }
              ft === null
                ? ((ft = 65533), (Kt = 1))
                : ft > 65535 &&
                  ((ft -= 65536),
                  W.push(((ft >>> 10) & 1023) | 55296),
                  (ft = 56320 | (ft & 1023))),
                W.push(ft),
                (Y += Kt);
            }
            return ue(W);
          }
          const Ar = 4096;
          function ue(U) {
            const w = U.length;
            if (w <= Ar) return String.fromCharCode.apply(String, U);
            let E = "",
              W = 0;
            for (; W < w; )
              E += String.fromCharCode.apply(String, U.slice(W, (W += Ar)));
            return E;
          }
          function ke(U, w, E) {
            let W = "";
            E = Math.min(U.length, E);
            for (let Y = w; Y < E; ++Y) W += String.fromCharCode(U[Y] & 127);
            return W;
          }
          function mo(U, w, E) {
            let W = "";
            E = Math.min(U.length, E);
            for (let Y = w; Y < E; ++Y) W += String.fromCharCode(U[Y]);
            return W;
          }
          function ye(U, w, E) {
            const W = U.length;
            (!w || w < 0) && (w = 0), (!E || E < 0 || E > W) && (E = W);
            let Y = "";
            for (let st = w; st < E; ++st) Y += _e[U[st]];
            return Y;
          }
          function ve(U, w, E) {
            const W = U.slice(w, E);
            let Y = "";
            for (let st = 0; st < W.length - 1; st += 2)
              Y += String.fromCharCode(W[st] + W[st + 1] * 256);
            return Y;
          }
          v.prototype.slice = function (w, E) {
            const W = this.length;
            (w = ~~w),
              (E = E === void 0 ? W : ~~E),
              w < 0 ? ((w += W), w < 0 && (w = 0)) : w > W && (w = W),
              E < 0 ? ((E += W), E < 0 && (E = 0)) : E > W && (E = W),
              E < w && (E = w);
            const Y = this.subarray(w, E);
            return Object.setPrototypeOf(Y, v.prototype), Y;
          };
          function Re(U, w, E) {
            if (U % 1 !== 0 || U < 0)
              throw new RangeError("offset is not uint");
            if (U + w > E)
              throw new RangeError("Trying to access beyond buffer length");
          }
          (v.prototype.readUintLE = v.prototype.readUIntLE =
            function (w, E, W) {
              (w = w >>> 0), (E = E >>> 0), W || Re(w, E, this.length);
              let Y = this[w],
                st = 1,
                ft = 0;
              for (; ++ft < E && (st *= 256); ) Y += this[w + ft] * st;
              return Y;
            }),
            (v.prototype.readUintBE = v.prototype.readUIntBE =
              function (w, E, W) {
                (w = w >>> 0), (E = E >>> 0), W || Re(w, E, this.length);
                let Y = this[w + --E],
                  st = 1;
                for (; E > 0 && (st *= 256); ) Y += this[w + --E] * st;
                return Y;
              }),
            (v.prototype.readUint8 = v.prototype.readUInt8 =
              function (w, E) {
                return (w = w >>> 0), E || Re(w, 1, this.length), this[w];
              }),
            (v.prototype.readUint16LE = v.prototype.readUInt16LE =
              function (w, E) {
                return (
                  (w = w >>> 0),
                  E || Re(w, 2, this.length),
                  this[w] | (this[w + 1] << 8)
                );
              }),
            (v.prototype.readUint16BE = v.prototype.readUInt16BE =
              function (w, E) {
                return (
                  (w = w >>> 0),
                  E || Re(w, 2, this.length),
                  (this[w] << 8) | this[w + 1]
                );
              }),
            (v.prototype.readUint32LE = v.prototype.readUInt32LE =
              function (w, E) {
                return (
                  (w = w >>> 0),
                  E || Re(w, 4, this.length),
                  (this[w] | (this[w + 1] << 8) | (this[w + 2] << 16)) +
                    this[w + 3] * 16777216
                );
              }),
            (v.prototype.readUint32BE = v.prototype.readUInt32BE =
              function (w, E) {
                return (
                  (w = w >>> 0),
                  E || Re(w, 4, this.length),
                  this[w] * 16777216 +
                    ((this[w + 1] << 16) | (this[w + 2] << 8) | this[w + 3])
                );
              }),
            (v.prototype.readBigUInt64LE = an(function (w) {
              (w = w >>> 0), j(w, "offset");
              const E = this[w],
                W = this[w + 7];
              (E === void 0 || W === void 0) && rt(w, this.length - 8);
              const Y =
                  E +
                  this[++w] * 2 ** 8 +
                  this[++w] * 2 ** 16 +
                  this[++w] * 2 ** 24,
                st =
                  this[++w] +
                  this[++w] * 2 ** 8 +
                  this[++w] * 2 ** 16 +
                  W * 2 ** 24;
              return BigInt(Y) + (BigInt(st) << BigInt(32));
            })),
            (v.prototype.readBigUInt64BE = an(function (w) {
              (w = w >>> 0), j(w, "offset");
              const E = this[w],
                W = this[w + 7];
              (E === void 0 || W === void 0) && rt(w, this.length - 8);
              const Y =
                  E * 2 ** 24 +
                  this[++w] * 2 ** 16 +
                  this[++w] * 2 ** 8 +
                  this[++w],
                st =
                  this[++w] * 2 ** 24 +
                  this[++w] * 2 ** 16 +
                  this[++w] * 2 ** 8 +
                  W;
              return (BigInt(Y) << BigInt(32)) + BigInt(st);
            })),
            (v.prototype.readIntLE = function (w, E, W) {
              (w = w >>> 0), (E = E >>> 0), W || Re(w, E, this.length);
              let Y = this[w],
                st = 1,
                ft = 0;
              for (; ++ft < E && (st *= 256); ) Y += this[w + ft] * st;
              return (st *= 128), Y >= st && (Y -= Math.pow(2, 8 * E)), Y;
            }),
            (v.prototype.readIntBE = function (w, E, W) {
              (w = w >>> 0), (E = E >>> 0), W || Re(w, E, this.length);
              let Y = E,
                st = 1,
                ft = this[w + --Y];
              for (; Y > 0 && (st *= 256); ) ft += this[w + --Y] * st;
              return (st *= 128), ft >= st && (ft -= Math.pow(2, 8 * E)), ft;
            }),
            (v.prototype.readInt8 = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 1, this.length),
                this[w] & 128 ? (255 - this[w] + 1) * -1 : this[w]
              );
            }),
            (v.prototype.readInt16LE = function (w, E) {
              (w = w >>> 0), E || Re(w, 2, this.length);
              const W = this[w] | (this[w + 1] << 8);
              return W & 32768 ? W | 4294901760 : W;
            }),
            (v.prototype.readInt16BE = function (w, E) {
              (w = w >>> 0), E || Re(w, 2, this.length);
              const W = this[w + 1] | (this[w] << 8);
              return W & 32768 ? W | 4294901760 : W;
            }),
            (v.prototype.readInt32LE = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 4, this.length),
                this[w] |
                  (this[w + 1] << 8) |
                  (this[w + 2] << 16) |
                  (this[w + 3] << 24)
              );
            }),
            (v.prototype.readInt32BE = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 4, this.length),
                (this[w] << 24) |
                  (this[w + 1] << 16) |
                  (this[w + 2] << 8) |
                  this[w + 3]
              );
            }),
            (v.prototype.readBigInt64LE = an(function (w) {
              (w = w >>> 0), j(w, "offset");
              const E = this[w],
                W = this[w + 7];
              (E === void 0 || W === void 0) && rt(w, this.length - 8);
              const Y =
                this[w + 4] +
                this[w + 5] * 2 ** 8 +
                this[w + 6] * 2 ** 16 +
                (W << 24);
              return (
                (BigInt(Y) << BigInt(32)) +
                BigInt(
                  E +
                    this[++w] * 2 ** 8 +
                    this[++w] * 2 ** 16 +
                    this[++w] * 2 ** 24
                )
              );
            })),
            (v.prototype.readBigInt64BE = an(function (w) {
              (w = w >>> 0), j(w, "offset");
              const E = this[w],
                W = this[w + 7];
              (E === void 0 || W === void 0) && rt(w, this.length - 8);
              const Y =
                (E << 24) +
                this[++w] * 2 ** 16 +
                this[++w] * 2 ** 8 +
                this[++w];
              return (
                (BigInt(Y) << BigInt(32)) +
                BigInt(
                  this[++w] * 2 ** 24 +
                    this[++w] * 2 ** 16 +
                    this[++w] * 2 ** 8 +
                    W
                )
              );
            })),
            (v.prototype.readFloatLE = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 4, this.length),
                et.read(this, w, !0, 23, 4)
              );
            }),
            (v.prototype.readFloatBE = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 4, this.length),
                et.read(this, w, !1, 23, 4)
              );
            }),
            (v.prototype.readDoubleLE = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 8, this.length),
                et.read(this, w, !0, 52, 8)
              );
            }),
            (v.prototype.readDoubleBE = function (w, E) {
              return (
                (w = w >>> 0),
                E || Re(w, 8, this.length),
                et.read(this, w, !1, 52, 8)
              );
            });
          function Qt(U, w, E, W, Y, st) {
            if (!v.isBuffer(U))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance'
              );
            if (w > Y || w < st)
              throw new RangeError('"value" argument is out of bounds');
            if (E + W > U.length) throw new RangeError("Index out of range");
          }
          (v.prototype.writeUintLE = v.prototype.writeUIntLE =
            function (w, E, W, Y) {
              if (((w = +w), (E = E >>> 0), (W = W >>> 0), !Y)) {
                const Kt = Math.pow(2, 8 * W) - 1;
                Qt(this, w, E, W, Kt, 0);
              }
              let st = 1,
                ft = 0;
              for (this[E] = w & 255; ++ft < W && (st *= 256); )
                this[E + ft] = (w / st) & 255;
              return E + W;
            }),
            (v.prototype.writeUintBE = v.prototype.writeUIntBE =
              function (w, E, W, Y) {
                if (((w = +w), (E = E >>> 0), (W = W >>> 0), !Y)) {
                  const Kt = Math.pow(2, 8 * W) - 1;
                  Qt(this, w, E, W, Kt, 0);
                }
                let st = W - 1,
                  ft = 1;
                for (this[E + st] = w & 255; --st >= 0 && (ft *= 256); )
                  this[E + st] = (w / ft) & 255;
                return E + W;
              }),
            (v.prototype.writeUint8 = v.prototype.writeUInt8 =
              function (w, E, W) {
                return (
                  (w = +w),
                  (E = E >>> 0),
                  W || Qt(this, w, E, 1, 255, 0),
                  (this[E] = w & 255),
                  E + 1
                );
              }),
            (v.prototype.writeUint16LE = v.prototype.writeUInt16LE =
              function (w, E, W) {
                return (
                  (w = +w),
                  (E = E >>> 0),
                  W || Qt(this, w, E, 2, 65535, 0),
                  (this[E] = w & 255),
                  (this[E + 1] = w >>> 8),
                  E + 2
                );
              }),
            (v.prototype.writeUint16BE = v.prototype.writeUInt16BE =
              function (w, E, W) {
                return (
                  (w = +w),
                  (E = E >>> 0),
                  W || Qt(this, w, E, 2, 65535, 0),
                  (this[E] = w >>> 8),
                  (this[E + 1] = w & 255),
                  E + 2
                );
              }),
            (v.prototype.writeUint32LE = v.prototype.writeUInt32LE =
              function (w, E, W) {
                return (
                  (w = +w),
                  (E = E >>> 0),
                  W || Qt(this, w, E, 4, 4294967295, 0),
                  (this[E + 3] = w >>> 24),
                  (this[E + 2] = w >>> 16),
                  (this[E + 1] = w >>> 8),
                  (this[E] = w & 255),
                  E + 4
                );
              }),
            (v.prototype.writeUint32BE = v.prototype.writeUInt32BE =
              function (w, E, W) {
                return (
                  (w = +w),
                  (E = E >>> 0),
                  W || Qt(this, w, E, 4, 4294967295, 0),
                  (this[E] = w >>> 24),
                  (this[E + 1] = w >>> 16),
                  (this[E + 2] = w >>> 8),
                  (this[E + 3] = w & 255),
                  E + 4
                );
              });
          function le(U, w, E, W, Y) {
            K(w, W, Y, U, E, 7);
            let st = Number(w & BigInt(4294967295));
            (U[E++] = st),
              (st = st >> 8),
              (U[E++] = st),
              (st = st >> 8),
              (U[E++] = st),
              (st = st >> 8),
              (U[E++] = st);
            let ft = Number((w >> BigInt(32)) & BigInt(4294967295));
            return (
              (U[E++] = ft),
              (ft = ft >> 8),
              (U[E++] = ft),
              (ft = ft >> 8),
              (U[E++] = ft),
              (ft = ft >> 8),
              (U[E++] = ft),
              E
            );
          }
          function ur(U, w, E, W, Y) {
            K(w, W, Y, U, E, 7);
            let st = Number(w & BigInt(4294967295));
            (U[E + 7] = st),
              (st = st >> 8),
              (U[E + 6] = st),
              (st = st >> 8),
              (U[E + 5] = st),
              (st = st >> 8),
              (U[E + 4] = st);
            let ft = Number((w >> BigInt(32)) & BigInt(4294967295));
            return (
              (U[E + 3] = ft),
              (ft = ft >> 8),
              (U[E + 2] = ft),
              (ft = ft >> 8),
              (U[E + 1] = ft),
              (ft = ft >> 8),
              (U[E] = ft),
              E + 8
            );
          }
          (v.prototype.writeBigUInt64LE = an(function (w, E = 0) {
            return le(this, w, E, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
            (v.prototype.writeBigUInt64BE = an(function (w, E = 0) {
              return ur(this, w, E, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (v.prototype.writeIntLE = function (w, E, W, Y) {
              if (((w = +w), (E = E >>> 0), !Y)) {
                const Ft = Math.pow(2, 8 * W - 1);
                Qt(this, w, E, W, Ft - 1, -Ft);
              }
              let st = 0,
                ft = 1,
                Kt = 0;
              for (this[E] = w & 255; ++st < W && (ft *= 256); )
                w < 0 && Kt === 0 && this[E + st - 1] !== 0 && (Kt = 1),
                  (this[E + st] = (((w / ft) >> 0) - Kt) & 255);
              return E + W;
            }),
            (v.prototype.writeIntBE = function (w, E, W, Y) {
              if (((w = +w), (E = E >>> 0), !Y)) {
                const Ft = Math.pow(2, 8 * W - 1);
                Qt(this, w, E, W, Ft - 1, -Ft);
              }
              let st = W - 1,
                ft = 1,
                Kt = 0;
              for (this[E + st] = w & 255; --st >= 0 && (ft *= 256); )
                w < 0 && Kt === 0 && this[E + st + 1] !== 0 && (Kt = 1),
                  (this[E + st] = (((w / ft) >> 0) - Kt) & 255);
              return E + W;
            }),
            (v.prototype.writeInt8 = function (w, E, W) {
              return (
                (w = +w),
                (E = E >>> 0),
                W || Qt(this, w, E, 1, 127, -128),
                w < 0 && (w = 255 + w + 1),
                (this[E] = w & 255),
                E + 1
              );
            }),
            (v.prototype.writeInt16LE = function (w, E, W) {
              return (
                (w = +w),
                (E = E >>> 0),
                W || Qt(this, w, E, 2, 32767, -32768),
                (this[E] = w & 255),
                (this[E + 1] = w >>> 8),
                E + 2
              );
            }),
            (v.prototype.writeInt16BE = function (w, E, W) {
              return (
                (w = +w),
                (E = E >>> 0),
                W || Qt(this, w, E, 2, 32767, -32768),
                (this[E] = w >>> 8),
                (this[E + 1] = w & 255),
                E + 2
              );
            }),
            (v.prototype.writeInt32LE = function (w, E, W) {
              return (
                (w = +w),
                (E = E >>> 0),
                W || Qt(this, w, E, 4, 2147483647, -2147483648),
                (this[E] = w & 255),
                (this[E + 1] = w >>> 8),
                (this[E + 2] = w >>> 16),
                (this[E + 3] = w >>> 24),
                E + 4
              );
            }),
            (v.prototype.writeInt32BE = function (w, E, W) {
              return (
                (w = +w),
                (E = E >>> 0),
                W || Qt(this, w, E, 4, 2147483647, -2147483648),
                w < 0 && (w = 4294967295 + w + 1),
                (this[E] = w >>> 24),
                (this[E + 1] = w >>> 16),
                (this[E + 2] = w >>> 8),
                (this[E + 3] = w & 255),
                E + 4
              );
            }),
            (v.prototype.writeBigInt64LE = an(function (w, E = 0) {
              return le(
                this,
                w,
                E,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
              );
            })),
            (v.prototype.writeBigInt64BE = an(function (w, E = 0) {
              return ur(
                this,
                w,
                E,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
              );
            }));
          function pe(U, w, E, W, Y, st) {
            if (E + W > U.length) throw new RangeError("Index out of range");
            if (E < 0) throw new RangeError("Index out of range");
          }
          function Ae(U, w, E, W, Y) {
            return (
              (w = +w),
              (E = E >>> 0),
              Y || pe(U, w, E, 4),
              et.write(U, w, E, W, 23, 4),
              E + 4
            );
          }
          (v.prototype.writeFloatLE = function (w, E, W) {
            return Ae(this, w, E, !0, W);
          }),
            (v.prototype.writeFloatBE = function (w, E, W) {
              return Ae(this, w, E, !1, W);
            });
          function Pr(U, w, E, W, Y) {
            return (
              (w = +w),
              (E = E >>> 0),
              Y || pe(U, w, E, 8),
              et.write(U, w, E, W, 52, 8),
              E + 8
            );
          }
          (v.prototype.writeDoubleLE = function (w, E, W) {
            return Pr(this, w, E, !0, W);
          }),
            (v.prototype.writeDoubleBE = function (w, E, W) {
              return Pr(this, w, E, !1, W);
            }),
            (v.prototype.copy = function (w, E, W, Y) {
              if (!v.isBuffer(w))
                throw new TypeError("argument should be a Buffer");
              if (
                (W || (W = 0),
                !Y && Y !== 0 && (Y = this.length),
                E >= w.length && (E = w.length),
                E || (E = 0),
                Y > 0 && Y < W && (Y = W),
                Y === W || w.length === 0 || this.length === 0)
              )
                return 0;
              if (E < 0) throw new RangeError("targetStart out of bounds");
              if (W < 0 || W >= this.length)
                throw new RangeError("Index out of range");
              if (Y < 0) throw new RangeError("sourceEnd out of bounds");
              Y > this.length && (Y = this.length),
                w.length - E < Y - W && (Y = w.length - E + W);
              const st = Y - W;
              return (
                this === w && typeof nt.prototype.copyWithin == "function"
                  ? this.copyWithin(E, W, Y)
                  : nt.prototype.set.call(w, this.subarray(W, Y), E),
                st
              );
            }),
            (v.prototype.fill = function (w, E, W, Y) {
              if (typeof w == "string") {
                if (
                  (typeof E == "string"
                    ? ((Y = E), (E = 0), (W = this.length))
                    : typeof W == "string" && ((Y = W), (W = this.length)),
                  Y !== void 0 && typeof Y != "string")
                )
                  throw new TypeError("encoding must be a string");
                if (typeof Y == "string" && !v.isEncoding(Y))
                  throw new TypeError("Unknown encoding: " + Y);
                if (w.length === 1) {
                  const ft = w.charCodeAt(0);
                  ((Y === "utf8" && ft < 128) || Y === "latin1") && (w = ft);
                }
              } else
                typeof w == "number"
                  ? (w = w & 255)
                  : typeof w == "boolean" && (w = Number(w));
              if (E < 0 || this.length < E || this.length < W)
                throw new RangeError("Out of range index");
              if (W <= E) return this;
              (E = E >>> 0),
                (W = W === void 0 ? this.length : W >>> 0),
                w || (w = 0);
              let st;
              if (typeof w == "number") for (st = E; st < W; ++st) this[st] = w;
              else {
                const ft = v.isBuffer(w) ? w : v.from(w, Y),
                  Kt = ft.length;
                if (Kt === 0)
                  throw new TypeError(
                    'The value "' + w + '" is invalid for argument "value"'
                  );
                for (st = 0; st < W - E; ++st) this[st + E] = ft[st % Kt];
              }
              return this;
            });
          const ae = {};
          function L(U, w, E) {
            ae[U] = class extends E {
              constructor() {
                super(),
                  Object.defineProperty(this, "message", {
                    value: w.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${U}]`),
                  this.stack,
                  delete this.name;
              }
              get code() {
                return U;
              }
              set code(Y) {
                Object.defineProperty(this, "code", {
                  configurable: !0,
                  enumerable: !0,
                  value: Y,
                  writable: !0,
                });
              }
              toString() {
                return `${this.name} [${U}]: ${this.message}`;
              }
            };
          }
          L(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function (U) {
              return U
                ? `${U} is outside of buffer bounds`
                : "Attempt to access memory outside buffer bounds";
            },
            RangeError
          ),
            L(
              "ERR_INVALID_ARG_TYPE",
              function (U, w) {
                return `The "${U}" argument must be of type number. Received type ${typeof w}`;
              },
              TypeError
            ),
            L(
              "ERR_OUT_OF_RANGE",
              function (U, w, E) {
                let W = `The value of "${U}" is out of range.`,
                  Y = E;
                return (
                  Number.isInteger(E) && Math.abs(E) > 2 ** 32
                    ? (Y = m(String(E)))
                    : typeof E == "bigint" &&
                      ((Y = String(E)),
                      (E > BigInt(2) ** BigInt(32) ||
                        E < -(BigInt(2) ** BigInt(32))) &&
                        (Y = m(Y)),
                      (Y += "n")),
                  (W += ` It must be ${w}. Received ${Y}`),
                  W
                );
              },
              RangeError
            );
          function m(U) {
            let w = "",
              E = U.length;
            const W = U[0] === "-" ? 1 : 0;
            for (; E >= W + 4; E -= 3) w = `_${U.slice(E - 3, E)}${w}`;
            return `${U.slice(0, E)}${w}`;
          }
          function A(U, w, E) {
            j(w, "offset"),
              (U[w] === void 0 || U[w + E] === void 0) &&
                rt(w, U.length - (E + 1));
          }
          function K(U, w, E, W, Y, st) {
            if (U > E || U < w) {
              const ft = typeof w == "bigint" ? "n" : "";
              let Kt;
              throw (
                (w === 0 || w === BigInt(0)
                  ? (Kt = `>= 0${ft} and < 2${ft} ** ${(st + 1) * 8}${ft}`)
                  : (Kt = `>= -(2${ft} ** ${
                      (st + 1) * 8 - 1
                    }${ft}) and < 2 ** ${(st + 1) * 8 - 1}${ft}`),
                new ae.ERR_OUT_OF_RANGE("value", Kt, U))
              );
            }
            A(W, Y, st);
          }
          function j(U, w) {
            if (typeof U != "number")
              throw new ae.ERR_INVALID_ARG_TYPE(w, "number", U);
          }
          function rt(U, w, E) {
            throw Math.floor(U) !== U
              ? (j(U, E), new ae.ERR_OUT_OF_RANGE("offset", "an integer", U))
              : w < 0
              ? new ae.ERR_BUFFER_OUT_OF_BOUNDS()
              : new ae.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${w}`, U);
          }
          const lt = /[^+/0-9A-Za-z-_]/g;
          function Ht(U) {
            if (
              ((U = U.split("=")[0]),
              (U = U.trim().replace(lt, "")),
              U.length < 2)
            )
              return "";
            for (; U.length % 4 !== 0; ) U = U + "=";
            return U;
          }
          function Ot(U, w) {
            w = w || 1 / 0;
            let E;
            const W = U.length;
            let Y = null;
            const st = [];
            for (let ft = 0; ft < W; ++ft) {
              if (((E = U.charCodeAt(ft)), E > 55295 && E < 57344)) {
                if (!Y) {
                  if (E > 56319) {
                    (w -= 3) > -1 && st.push(239, 191, 189);
                    continue;
                  } else if (ft + 1 === W) {
                    (w -= 3) > -1 && st.push(239, 191, 189);
                    continue;
                  }
                  Y = E;
                  continue;
                }
                if (E < 56320) {
                  (w -= 3) > -1 && st.push(239, 191, 189), (Y = E);
                  continue;
                }
                E = (((Y - 55296) << 10) | (E - 56320)) + 65536;
              } else Y && (w -= 3) > -1 && st.push(239, 191, 189);
              if (((Y = null), E < 128)) {
                if ((w -= 1) < 0) break;
                st.push(E);
              } else if (E < 2048) {
                if ((w -= 2) < 0) break;
                st.push((E >> 6) | 192, (E & 63) | 128);
              } else if (E < 65536) {
                if ((w -= 3) < 0) break;
                st.push((E >> 12) | 224, ((E >> 6) & 63) | 128, (E & 63) | 128);
              } else if (E < 1114112) {
                if ((w -= 4) < 0) break;
                st.push(
                  (E >> 18) | 240,
                  ((E >> 12) & 63) | 128,
                  ((E >> 6) & 63) | 128,
                  (E & 63) | 128
                );
              } else throw new Error("Invalid code point");
            }
            return st;
          }
          function Mt(U) {
            const w = [];
            for (let E = 0; E < U.length; ++E) w.push(U.charCodeAt(E) & 255);
            return w;
          }
          function ge(U, w) {
            let E, W, Y;
            const st = [];
            for (let ft = 0; ft < U.length && !((w -= 2) < 0); ++ft)
              (E = U.charCodeAt(ft)),
                (W = E >> 8),
                (Y = E % 256),
                st.push(Y),
                st.push(W);
            return st;
          }
          function Pt(U) {
            return V.toByteArray(Ht(U));
          }
          function Ee(U, w, E, W) {
            let Y;
            for (Y = 0; Y < W && !(Y + E >= w.length || Y >= U.length); ++Y)
              w[Y + E] = U[Y];
            return Y;
          }
          function zr(U, w) {
            return (
              U instanceof w ||
              (U != null &&
                U.constructor != null &&
                U.constructor.name != null &&
                U.constructor.name === w.name)
            );
          }
          function Se(U) {
            return U !== U;
          }
          const _e = (function () {
            const U = "0123456789abcdef",
              w = new Array(256);
            for (let E = 0; E < 16; ++E) {
              const W = E * 16;
              for (let Y = 0; Y < 16; ++Y) w[W + Y] = U[E] + U[Y];
            }
            return w;
          })();
          function an(U) {
            return typeof BigInt > "u" ? Oe : U;
          }
          function Oe() {
            throw new Error("BigInt not supported");
          }
        })(t);
        const q = t.Buffer;
        (n.Blob = t.Blob),
          (n.BlobOptions = t.BlobOptions),
          (n.Buffer = t.Buffer),
          (n.File = t.File),
          (n.FileOptions = t.FileOptions),
          (n.INSPECT_MAX_BYTES = t.INSPECT_MAX_BYTES),
          (n.SlowBuffer = t.SlowBuffer),
          (n.TranscodeEncoding = t.TranscodeEncoding),
          (n.atob = t.atob),
          (n.btoa = t.btoa),
          (n.constants = t.constants),
          (n.default = q),
          (n.isAscii = t.isAscii),
          (n.isUtf8 = t.isUtf8),
          (n.kMaxLength = t.kMaxLength),
          (n.kStringMaxLength = t.kStringMaxLength),
          (n.resolveObjectURL = t.resolveObjectURL),
          (n.transcode = t.transcode);
      })(Af)),
    Af
  );
}
var yb = xu.exports,
  k0;
function sy() {
  return (
    k0 ||
      ((k0 = 1),
      (function (n) {
        (function (t, e) {
          function r(y, u) {
            if (!y) throw new Error(u || "Assertion failed");
          }
          function i(y, u) {
            y.super_ = u;
            var l = function () {};
            (l.prototype = u.prototype),
              (y.prototype = new l()),
              (y.prototype.constructor = y);
          }
          function s(y, u, l) {
            if (s.isBN(y)) return y;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              y !== null &&
                ((u === "le" || u === "be") && ((l = u), (u = 10)),
                this._init(y || 0, u || 10, l || "be"));
          }
          typeof t == "object" ? (t.exports = s) : (e.BN = s),
            (s.BN = s),
            (s.wordSize = 26);
          var o;
          try {
            typeof window < "u" && typeof window.Buffer < "u"
              ? (o = window.Buffer)
              : (o = fd().Buffer);
          } catch {}
          (s.isBN = function (u) {
            return u instanceof s
              ? !0
              : u !== null &&
                  typeof u == "object" &&
                  u.constructor.wordSize === s.wordSize &&
                  Array.isArray(u.words);
          }),
            (s.max = function (u, l) {
              return u.cmp(l) > 0 ? u : l;
            }),
            (s.min = function (u, l) {
              return u.cmp(l) < 0 ? u : l;
            }),
            (s.prototype._init = function (u, l, g) {
              if (typeof u == "number") return this._initNumber(u, l, g);
              if (typeof u == "object") return this._initArray(u, l, g);
              l === "hex" && (l = 16),
                r(l === (l | 0) && l >= 2 && l <= 36),
                (u = u.toString().replace(/\s+/g, ""));
              var k = 0;
              u[0] === "-" && (k++, (this.negative = 1)),
                k < u.length &&
                  (l === 16
                    ? this._parseHex(u, k, g)
                    : (this._parseBase(u, l, k),
                      g === "le" && this._initArray(this.toArray(), l, g)));
            }),
            (s.prototype._initNumber = function (u, l, g) {
              u < 0 && ((this.negative = 1), (u = -u)),
                u < 67108864
                  ? ((this.words = [u & 67108863]), (this.length = 1))
                  : u < 4503599627370496
                  ? ((this.words = [u & 67108863, (u / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(u < 9007199254740992),
                    (this.words = [u & 67108863, (u / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                g === "le" && this._initArray(this.toArray(), l, g);
            }),
            (s.prototype._initArray = function (u, l, g) {
              if ((r(typeof u.length == "number"), u.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(u.length / 3)),
                (this.words = new Array(this.length));
              for (var k = 0; k < this.length; k++) this.words[k] = 0;
              var I,
                _,
                G = 0;
              if (g === "be")
                for (k = u.length - 1, I = 0; k >= 0; k -= 3)
                  (_ = u[k] | (u[k - 1] << 8) | (u[k - 2] << 16)),
                    (this.words[I] |= (_ << G) & 67108863),
                    (this.words[I + 1] = (_ >>> (26 - G)) & 67108863),
                    (G += 24),
                    G >= 26 && ((G -= 26), I++);
              else if (g === "le")
                for (k = 0, I = 0; k < u.length; k += 3)
                  (_ = u[k] | (u[k + 1] << 8) | (u[k + 2] << 16)),
                    (this.words[I] |= (_ << G) & 67108863),
                    (this.words[I + 1] = (_ >>> (26 - G)) & 67108863),
                    (G += 24),
                    G >= 26 && ((G -= 26), I++);
              return this._strip();
            });
          function a(y, u) {
            var l = y.charCodeAt(u);
            if (l >= 48 && l <= 57) return l - 48;
            if (l >= 65 && l <= 70) return l - 55;
            if (l >= 97 && l <= 102) return l - 87;
            r(!1, "Invalid character in " + y);
          }
          function c(y, u, l) {
            var g = a(y, l);
            return l - 1 >= u && (g |= a(y, l - 1) << 4), g;
          }
          s.prototype._parseHex = function (u, l, g) {
            (this.length = Math.ceil((u.length - l) / 6)),
              (this.words = new Array(this.length));
            for (var k = 0; k < this.length; k++) this.words[k] = 0;
            var I = 0,
              _ = 0,
              G;
            if (g === "be")
              for (k = u.length - 1; k >= l; k -= 2)
                (G = c(u, l, k) << I),
                  (this.words[_] |= G & 67108863),
                  I >= 18
                    ? ((I -= 18), (_ += 1), (this.words[_] |= G >>> 26))
                    : (I += 8);
            else {
              var O = u.length - l;
              for (k = O % 2 === 0 ? l + 1 : l; k < u.length; k += 2)
                (G = c(u, l, k) << I),
                  (this.words[_] |= G & 67108863),
                  I >= 18
                    ? ((I -= 18), (_ += 1), (this.words[_] |= G >>> 26))
                    : (I += 8);
            }
            this._strip();
          };
          function f(y, u, l, g) {
            for (
              var k = 0, I = 0, _ = Math.min(y.length, l), G = u;
              G < _;
              G++
            ) {
              var O = y.charCodeAt(G) - 48;
              (k *= g),
                O >= 49
                  ? (I = O - 49 + 10)
                  : O >= 17
                  ? (I = O - 17 + 10)
                  : (I = O),
                r(O >= 0 && I < g, "Invalid character"),
                (k += I);
            }
            return k;
          }
          (s.prototype._parseBase = function (u, l, g) {
            (this.words = [0]), (this.length = 1);
            for (var k = 0, I = 1; I <= 67108863; I *= l) k++;
            k--, (I = (I / l) | 0);
            for (
              var _ = u.length - g,
                G = _ % k,
                O = Math.min(_, _ - G) + g,
                d = 0,
                p = g;
              p < O;
              p += k
            )
              (d = f(u, p, p + k, l)),
                this.imuln(I),
                this.words[0] + d < 67108864
                  ? (this.words[0] += d)
                  : this._iaddn(d);
            if (G !== 0) {
              var T = 1;
              for (d = f(u, p, u.length, l), p = 0; p < G; p++) T *= l;
              this.imuln(T),
                this.words[0] + d < 67108864
                  ? (this.words[0] += d)
                  : this._iaddn(d);
            }
            this._strip();
          }),
            (s.prototype.copy = function (u) {
              u.words = new Array(this.length);
              for (var l = 0; l < this.length; l++) u.words[l] = this.words[l];
              (u.length = this.length),
                (u.negative = this.negative),
                (u.red = this.red);
            });
          function h(y, u) {
            (y.words = u.words),
              (y.length = u.length),
              (y.negative = u.negative),
              (y.red = u.red);
          }
          if (
            ((s.prototype._move = function (u) {
              h(u, this);
            }),
            (s.prototype.clone = function () {
              var u = new s(null);
              return this.copy(u), u;
            }),
            (s.prototype._expand = function (u) {
              for (; this.length < u; ) this.words[this.length++] = 0;
              return this;
            }),
            (s.prototype._strip = function () {
              for (; this.length > 1 && this.words[this.length - 1] === 0; )
                this.length--;
              return this._normSign();
            }),
            (s.prototype._normSign = function () {
              return (
                this.length === 1 && this.words[0] === 0 && (this.negative = 0),
                this
              );
            }),
            typeof Symbol < "u" && typeof Symbol.for == "function")
          )
            try {
              s.prototype[Symbol.for("nodejs.util.inspect.custom")] = b;
            } catch {
              s.prototype.inspect = b;
            }
          else s.prototype.inspect = b;
          function b() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var S = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            P = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            M = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          (s.prototype.toString = function (u, l) {
            (u = u || 10), (l = l | 0 || 1);
            var g;
            if (u === 16 || u === "hex") {
              g = "";
              for (var k = 0, I = 0, _ = 0; _ < this.length; _++) {
                var G = this.words[_],
                  O = (((G << k) | I) & 16777215).toString(16);
                (I = (G >>> (24 - k)) & 16777215),
                  (k += 2),
                  k >= 26 && ((k -= 26), _--),
                  I !== 0 || _ !== this.length - 1
                    ? (g = S[6 - O.length] + O + g)
                    : (g = O + g);
              }
              for (I !== 0 && (g = I.toString(16) + g); g.length % l !== 0; )
                g = "0" + g;
              return this.negative !== 0 && (g = "-" + g), g;
            }
            if (u === (u | 0) && u >= 2 && u <= 36) {
              var d = P[u],
                p = M[u];
              g = "";
              var T = this.clone();
              for (T.negative = 0; !T.isZero(); ) {
                var H = T.modrn(p).toString(u);
                (T = T.idivn(p)),
                  T.isZero() ? (g = H + g) : (g = S[d - H.length] + H + g);
              }
              for (this.isZero() && (g = "0" + g); g.length % l !== 0; )
                g = "0" + g;
              return this.negative !== 0 && (g = "-" + g), g;
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (s.prototype.toNumber = function () {
              var u = this.words[0];
              return (
                this.length === 2
                  ? (u += this.words[1] * 67108864)
                  : this.length === 3 && this.words[2] === 1
                  ? (u += 4503599627370496 + this.words[1] * 67108864)
                  : this.length > 2 &&
                    r(!1, "Number can only safely store up to 53 bits"),
                this.negative !== 0 ? -u : u
              );
            }),
            (s.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            o &&
              (s.prototype.toBuffer = function (u, l) {
                return this.toArrayLike(o, u, l);
              }),
            (s.prototype.toArray = function (u, l) {
              return this.toArrayLike(Array, u, l);
            });
          var N = function (u, l) {
            return u.allocUnsafe ? u.allocUnsafe(l) : new u(l);
          };
          (s.prototype.toArrayLike = function (u, l, g) {
            this._strip();
            var k = this.byteLength(),
              I = g || Math.max(1, k);
            r(k <= I, "byte array longer than desired length"),
              r(I > 0, "Requested array length <= 0");
            var _ = N(u, I),
              G = l === "le" ? "LE" : "BE";
            return this["_toArrayLike" + G](_, k), _;
          }),
            (s.prototype._toArrayLikeLE = function (u, l) {
              for (var g = 0, k = 0, I = 0, _ = 0; I < this.length; I++) {
                var G = (this.words[I] << _) | k;
                (u[g++] = G & 255),
                  g < u.length && (u[g++] = (G >> 8) & 255),
                  g < u.length && (u[g++] = (G >> 16) & 255),
                  _ === 6
                    ? (g < u.length && (u[g++] = (G >> 24) & 255),
                      (k = 0),
                      (_ = 0))
                    : ((k = G >>> 24), (_ += 2));
              }
              if (g < u.length) for (u[g++] = k; g < u.length; ) u[g++] = 0;
            }),
            (s.prototype._toArrayLikeBE = function (u, l) {
              for (
                var g = u.length - 1, k = 0, I = 0, _ = 0;
                I < this.length;
                I++
              ) {
                var G = (this.words[I] << _) | k;
                (u[g--] = G & 255),
                  g >= 0 && (u[g--] = (G >> 8) & 255),
                  g >= 0 && (u[g--] = (G >> 16) & 255),
                  _ === 6
                    ? (g >= 0 && (u[g--] = (G >> 24) & 255), (k = 0), (_ = 0))
                    : ((k = G >>> 24), (_ += 2));
              }
              if (g >= 0) for (u[g--] = k; g >= 0; ) u[g--] = 0;
            }),
            Math.clz32
              ? (s.prototype._countBits = function (u) {
                  return 32 - Math.clz32(u);
                })
              : (s.prototype._countBits = function (u) {
                  var l = u,
                    g = 0;
                  return (
                    l >= 4096 && ((g += 13), (l >>>= 13)),
                    l >= 64 && ((g += 7), (l >>>= 7)),
                    l >= 8 && ((g += 4), (l >>>= 4)),
                    l >= 2 && ((g += 2), (l >>>= 2)),
                    g + l
                  );
                }),
            (s.prototype._zeroBits = function (u) {
              if (u === 0) return 26;
              var l = u,
                g = 0;
              return (
                (l & 8191) === 0 && ((g += 13), (l >>>= 13)),
                (l & 127) === 0 && ((g += 7), (l >>>= 7)),
                (l & 15) === 0 && ((g += 4), (l >>>= 4)),
                (l & 3) === 0 && ((g += 2), (l >>>= 2)),
                (l & 1) === 0 && g++,
                g
              );
            }),
            (s.prototype.bitLength = function () {
              var u = this.words[this.length - 1],
                l = this._countBits(u);
              return (this.length - 1) * 26 + l;
            });
          function D(y) {
            for (var u = new Array(y.bitLength()), l = 0; l < u.length; l++) {
              var g = (l / 26) | 0,
                k = l % 26;
              u[l] = (y.words[g] >>> k) & 1;
            }
            return u;
          }
          (s.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var u = 0, l = 0; l < this.length; l++) {
              var g = this._zeroBits(this.words[l]);
              if (((u += g), g !== 26)) break;
            }
            return u;
          }),
            (s.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function (u) {
              return this.negative !== 0
                ? this.abs().inotn(u).iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function (u) {
              return this.testn(u - 1)
                ? this.notn(u).iaddn(1).ineg()
                : this.clone();
            }),
            (s.prototype.isNeg = function () {
              return this.negative !== 0;
            }),
            (s.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (s.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (s.prototype.iuor = function (u) {
              for (; this.length < u.length; ) this.words[this.length++] = 0;
              for (var l = 0; l < u.length; l++)
                this.words[l] = this.words[l] | u.words[l];
              return this._strip();
            }),
            (s.prototype.ior = function (u) {
              return r((this.negative | u.negative) === 0), this.iuor(u);
            }),
            (s.prototype.or = function (u) {
              return this.length > u.length
                ? this.clone().ior(u)
                : u.clone().ior(this);
            }),
            (s.prototype.uor = function (u) {
              return this.length > u.length
                ? this.clone().iuor(u)
                : u.clone().iuor(this);
            }),
            (s.prototype.iuand = function (u) {
              var l;
              this.length > u.length ? (l = u) : (l = this);
              for (var g = 0; g < l.length; g++)
                this.words[g] = this.words[g] & u.words[g];
              return (this.length = l.length), this._strip();
            }),
            (s.prototype.iand = function (u) {
              return r((this.negative | u.negative) === 0), this.iuand(u);
            }),
            (s.prototype.and = function (u) {
              return this.length > u.length
                ? this.clone().iand(u)
                : u.clone().iand(this);
            }),
            (s.prototype.uand = function (u) {
              return this.length > u.length
                ? this.clone().iuand(u)
                : u.clone().iuand(this);
            }),
            (s.prototype.iuxor = function (u) {
              var l, g;
              this.length > u.length
                ? ((l = this), (g = u))
                : ((l = u), (g = this));
              for (var k = 0; k < g.length; k++)
                this.words[k] = l.words[k] ^ g.words[k];
              if (this !== l)
                for (; k < l.length; k++) this.words[k] = l.words[k];
              return (this.length = l.length), this._strip();
            }),
            (s.prototype.ixor = function (u) {
              return r((this.negative | u.negative) === 0), this.iuxor(u);
            }),
            (s.prototype.xor = function (u) {
              return this.length > u.length
                ? this.clone().ixor(u)
                : u.clone().ixor(this);
            }),
            (s.prototype.uxor = function (u) {
              return this.length > u.length
                ? this.clone().iuxor(u)
                : u.clone().iuxor(this);
            }),
            (s.prototype.inotn = function (u) {
              r(typeof u == "number" && u >= 0);
              var l = Math.ceil(u / 26) | 0,
                g = u % 26;
              this._expand(l), g > 0 && l--;
              for (var k = 0; k < l; k++)
                this.words[k] = ~this.words[k] & 67108863;
              return (
                g > 0 &&
                  (this.words[k] = ~this.words[k] & (67108863 >> (26 - g))),
                this._strip()
              );
            }),
            (s.prototype.notn = function (u) {
              return this.clone().inotn(u);
            }),
            (s.prototype.setn = function (u, l) {
              r(typeof u == "number" && u >= 0);
              var g = (u / 26) | 0,
                k = u % 26;
              return (
                this._expand(g + 1),
                l
                  ? (this.words[g] = this.words[g] | (1 << k))
                  : (this.words[g] = this.words[g] & ~(1 << k)),
                this._strip()
              );
            }),
            (s.prototype.iadd = function (u) {
              var l;
              if (this.negative !== 0 && u.negative === 0)
                return (
                  (this.negative = 0),
                  (l = this.isub(u)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (this.negative === 0 && u.negative !== 0)
                return (
                  (u.negative = 0),
                  (l = this.isub(u)),
                  (u.negative = 1),
                  l._normSign()
                );
              var g, k;
              this.length > u.length
                ? ((g = this), (k = u))
                : ((g = u), (k = this));
              for (var I = 0, _ = 0; _ < k.length; _++)
                (l = (g.words[_] | 0) + (k.words[_] | 0) + I),
                  (this.words[_] = l & 67108863),
                  (I = l >>> 26);
              for (; I !== 0 && _ < g.length; _++)
                (l = (g.words[_] | 0) + I),
                  (this.words[_] = l & 67108863),
                  (I = l >>> 26);
              if (((this.length = g.length), I !== 0))
                (this.words[this.length] = I), this.length++;
              else if (g !== this)
                for (; _ < g.length; _++) this.words[_] = g.words[_];
              return this;
            }),
            (s.prototype.add = function (u) {
              var l;
              return u.negative !== 0 && this.negative === 0
                ? ((u.negative = 0), (l = this.sub(u)), (u.negative ^= 1), l)
                : u.negative === 0 && this.negative !== 0
                ? ((this.negative = 0),
                  (l = u.sub(this)),
                  (this.negative = 1),
                  l)
                : this.length > u.length
                ? this.clone().iadd(u)
                : u.clone().iadd(this);
            }),
            (s.prototype.isub = function (u) {
              if (u.negative !== 0) {
                u.negative = 0;
                var l = this.iadd(u);
                return (u.negative = 1), l._normSign();
              } else if (this.negative !== 0)
                return (
                  (this.negative = 0),
                  this.iadd(u),
                  (this.negative = 1),
                  this._normSign()
                );
              var g = this.cmp(u);
              if (g === 0)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              var k, I;
              g > 0 ? ((k = this), (I = u)) : ((k = u), (I = this));
              for (var _ = 0, G = 0; G < I.length; G++)
                (l = (k.words[G] | 0) - (I.words[G] | 0) + _),
                  (_ = l >> 26),
                  (this.words[G] = l & 67108863);
              for (; _ !== 0 && G < k.length; G++)
                (l = (k.words[G] | 0) + _),
                  (_ = l >> 26),
                  (this.words[G] = l & 67108863);
              if (_ === 0 && G < k.length && k !== this)
                for (; G < k.length; G++) this.words[G] = k.words[G];
              return (
                (this.length = Math.max(this.length, G)),
                k !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (s.prototype.sub = function (u) {
              return this.clone().isub(u);
            });
          function q(y, u, l) {
            l.negative = u.negative ^ y.negative;
            var g = (y.length + u.length) | 0;
            (l.length = g), (g = (g - 1) | 0);
            var k = y.words[0] | 0,
              I = u.words[0] | 0,
              _ = k * I,
              G = _ & 67108863,
              O = (_ / 67108864) | 0;
            l.words[0] = G;
            for (var d = 1; d < g; d++) {
              for (
                var p = O >>> 26,
                  T = O & 67108863,
                  H = Math.min(d, u.length - 1),
                  J = Math.max(0, d - y.length + 1);
                J <= H;
                J++
              ) {
                var at = (d - J) | 0;
                (k = y.words[at] | 0),
                  (I = u.words[J] | 0),
                  (_ = k * I + T),
                  (p += (_ / 67108864) | 0),
                  (T = _ & 67108863);
              }
              (l.words[d] = T | 0), (O = p | 0);
            }
            return O !== 0 ? (l.words[d] = O | 0) : l.length--, l._strip();
          }
          var z = function (u, l, g) {
            var k = u.words,
              I = l.words,
              _ = g.words,
              G = 0,
              O,
              d,
              p,
              T = k[0] | 0,
              H = T & 8191,
              J = T >>> 13,
              at = k[1] | 0,
              yt = at & 8191,
              wt = at >>> 13,
              Ut = k[2] | 0,
              Rt = Ut & 8191,
              zt = Ut >>> 13,
              Zt = k[3] | 0,
              _t = Zt & 8191,
              It = Zt >>> 13,
              Ar = k[4] | 0,
              ue = Ar & 8191,
              ke = Ar >>> 13,
              mo = k[5] | 0,
              ye = mo & 8191,
              ve = mo >>> 13,
              Re = k[6] | 0,
              Qt = Re & 8191,
              le = Re >>> 13,
              ur = k[7] | 0,
              pe = ur & 8191,
              Ae = ur >>> 13,
              Pr = k[8] | 0,
              ae = Pr & 8191,
              L = Pr >>> 13,
              m = k[9] | 0,
              A = m & 8191,
              K = m >>> 13,
              j = I[0] | 0,
              rt = j & 8191,
              lt = j >>> 13,
              Ht = I[1] | 0,
              Ot = Ht & 8191,
              Mt = Ht >>> 13,
              ge = I[2] | 0,
              Pt = ge & 8191,
              Ee = ge >>> 13,
              zr = I[3] | 0,
              Se = zr & 8191,
              _e = zr >>> 13,
              an = I[4] | 0,
              Oe = an & 8191,
              U = an >>> 13,
              w = I[5] | 0,
              E = w & 8191,
              W = w >>> 13,
              Y = I[6] | 0,
              st = Y & 8191,
              ft = Y >>> 13,
              Kt = I[7] | 0,
              Ft = Kt & 8191,
              Lt = Kt >>> 13,
              xe = I[8] | 0,
              Tt = xe & 8191,
              Ge = xe >>> 13,
              r0 = I[9] | 0,
              Ke = r0 & 8191,
              Ve = r0 >>> 13;
            (g.negative = u.negative ^ l.negative),
              (g.length = 19),
              (O = Math.imul(H, rt)),
              (d = Math.imul(H, lt)),
              (d = (d + Math.imul(J, rt)) | 0),
              (p = Math.imul(J, lt));
            var ql = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (ql >>> 26)) | 0),
              (ql &= 67108863),
              (O = Math.imul(yt, rt)),
              (d = Math.imul(yt, lt)),
              (d = (d + Math.imul(wt, rt)) | 0),
              (p = Math.imul(wt, lt)),
              (O = (O + Math.imul(H, Ot)) | 0),
              (d = (d + Math.imul(H, Mt)) | 0),
              (d = (d + Math.imul(J, Ot)) | 0),
              (p = (p + Math.imul(J, Mt)) | 0);
            var $l = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + ($l >>> 26)) | 0),
              ($l &= 67108863),
              (O = Math.imul(Rt, rt)),
              (d = Math.imul(Rt, lt)),
              (d = (d + Math.imul(zt, rt)) | 0),
              (p = Math.imul(zt, lt)),
              (O = (O + Math.imul(yt, Ot)) | 0),
              (d = (d + Math.imul(yt, Mt)) | 0),
              (d = (d + Math.imul(wt, Ot)) | 0),
              (p = (p + Math.imul(wt, Mt)) | 0),
              (O = (O + Math.imul(H, Pt)) | 0),
              (d = (d + Math.imul(H, Ee)) | 0),
              (d = (d + Math.imul(J, Pt)) | 0),
              (p = (p + Math.imul(J, Ee)) | 0);
            var Ql = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (Ql >>> 26)) | 0),
              (Ql &= 67108863),
              (O = Math.imul(_t, rt)),
              (d = Math.imul(_t, lt)),
              (d = (d + Math.imul(It, rt)) | 0),
              (p = Math.imul(It, lt)),
              (O = (O + Math.imul(Rt, Ot)) | 0),
              (d = (d + Math.imul(Rt, Mt)) | 0),
              (d = (d + Math.imul(zt, Ot)) | 0),
              (p = (p + Math.imul(zt, Mt)) | 0),
              (O = (O + Math.imul(yt, Pt)) | 0),
              (d = (d + Math.imul(yt, Ee)) | 0),
              (d = (d + Math.imul(wt, Pt)) | 0),
              (p = (p + Math.imul(wt, Ee)) | 0),
              (O = (O + Math.imul(H, Se)) | 0),
              (d = (d + Math.imul(H, _e)) | 0),
              (d = (d + Math.imul(J, Se)) | 0),
              (p = (p + Math.imul(J, _e)) | 0);
            var Jl = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (Jl >>> 26)) | 0),
              (Jl &= 67108863),
              (O = Math.imul(ue, rt)),
              (d = Math.imul(ue, lt)),
              (d = (d + Math.imul(ke, rt)) | 0),
              (p = Math.imul(ke, lt)),
              (O = (O + Math.imul(_t, Ot)) | 0),
              (d = (d + Math.imul(_t, Mt)) | 0),
              (d = (d + Math.imul(It, Ot)) | 0),
              (p = (p + Math.imul(It, Mt)) | 0),
              (O = (O + Math.imul(Rt, Pt)) | 0),
              (d = (d + Math.imul(Rt, Ee)) | 0),
              (d = (d + Math.imul(zt, Pt)) | 0),
              (p = (p + Math.imul(zt, Ee)) | 0),
              (O = (O + Math.imul(yt, Se)) | 0),
              (d = (d + Math.imul(yt, _e)) | 0),
              (d = (d + Math.imul(wt, Se)) | 0),
              (p = (p + Math.imul(wt, _e)) | 0),
              (O = (O + Math.imul(H, Oe)) | 0),
              (d = (d + Math.imul(H, U)) | 0),
              (d = (d + Math.imul(J, Oe)) | 0),
              (p = (p + Math.imul(J, U)) | 0);
            var jl = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (jl >>> 26)) | 0),
              (jl &= 67108863),
              (O = Math.imul(ye, rt)),
              (d = Math.imul(ye, lt)),
              (d = (d + Math.imul(ve, rt)) | 0),
              (p = Math.imul(ve, lt)),
              (O = (O + Math.imul(ue, Ot)) | 0),
              (d = (d + Math.imul(ue, Mt)) | 0),
              (d = (d + Math.imul(ke, Ot)) | 0),
              (p = (p + Math.imul(ke, Mt)) | 0),
              (O = (O + Math.imul(_t, Pt)) | 0),
              (d = (d + Math.imul(_t, Ee)) | 0),
              (d = (d + Math.imul(It, Pt)) | 0),
              (p = (p + Math.imul(It, Ee)) | 0),
              (O = (O + Math.imul(Rt, Se)) | 0),
              (d = (d + Math.imul(Rt, _e)) | 0),
              (d = (d + Math.imul(zt, Se)) | 0),
              (p = (p + Math.imul(zt, _e)) | 0),
              (O = (O + Math.imul(yt, Oe)) | 0),
              (d = (d + Math.imul(yt, U)) | 0),
              (d = (d + Math.imul(wt, Oe)) | 0),
              (p = (p + Math.imul(wt, U)) | 0),
              (O = (O + Math.imul(H, E)) | 0),
              (d = (d + Math.imul(H, W)) | 0),
              (d = (d + Math.imul(J, E)) | 0),
              (p = (p + Math.imul(J, W)) | 0);
            var Zl = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (Zl >>> 26)) | 0),
              (Zl &= 67108863),
              (O = Math.imul(Qt, rt)),
              (d = Math.imul(Qt, lt)),
              (d = (d + Math.imul(le, rt)) | 0),
              (p = Math.imul(le, lt)),
              (O = (O + Math.imul(ye, Ot)) | 0),
              (d = (d + Math.imul(ye, Mt)) | 0),
              (d = (d + Math.imul(ve, Ot)) | 0),
              (p = (p + Math.imul(ve, Mt)) | 0),
              (O = (O + Math.imul(ue, Pt)) | 0),
              (d = (d + Math.imul(ue, Ee)) | 0),
              (d = (d + Math.imul(ke, Pt)) | 0),
              (p = (p + Math.imul(ke, Ee)) | 0),
              (O = (O + Math.imul(_t, Se)) | 0),
              (d = (d + Math.imul(_t, _e)) | 0),
              (d = (d + Math.imul(It, Se)) | 0),
              (p = (p + Math.imul(It, _e)) | 0),
              (O = (O + Math.imul(Rt, Oe)) | 0),
              (d = (d + Math.imul(Rt, U)) | 0),
              (d = (d + Math.imul(zt, Oe)) | 0),
              (p = (p + Math.imul(zt, U)) | 0),
              (O = (O + Math.imul(yt, E)) | 0),
              (d = (d + Math.imul(yt, W)) | 0),
              (d = (d + Math.imul(wt, E)) | 0),
              (p = (p + Math.imul(wt, W)) | 0),
              (O = (O + Math.imul(H, st)) | 0),
              (d = (d + Math.imul(H, ft)) | 0),
              (d = (d + Math.imul(J, st)) | 0),
              (p = (p + Math.imul(J, ft)) | 0);
            var Yl = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (Yl >>> 26)) | 0),
              (Yl &= 67108863),
              (O = Math.imul(pe, rt)),
              (d = Math.imul(pe, lt)),
              (d = (d + Math.imul(Ae, rt)) | 0),
              (p = Math.imul(Ae, lt)),
              (O = (O + Math.imul(Qt, Ot)) | 0),
              (d = (d + Math.imul(Qt, Mt)) | 0),
              (d = (d + Math.imul(le, Ot)) | 0),
              (p = (p + Math.imul(le, Mt)) | 0),
              (O = (O + Math.imul(ye, Pt)) | 0),
              (d = (d + Math.imul(ye, Ee)) | 0),
              (d = (d + Math.imul(ve, Pt)) | 0),
              (p = (p + Math.imul(ve, Ee)) | 0),
              (O = (O + Math.imul(ue, Se)) | 0),
              (d = (d + Math.imul(ue, _e)) | 0),
              (d = (d + Math.imul(ke, Se)) | 0),
              (p = (p + Math.imul(ke, _e)) | 0),
              (O = (O + Math.imul(_t, Oe)) | 0),
              (d = (d + Math.imul(_t, U)) | 0),
              (d = (d + Math.imul(It, Oe)) | 0),
              (p = (p + Math.imul(It, U)) | 0),
              (O = (O + Math.imul(Rt, E)) | 0),
              (d = (d + Math.imul(Rt, W)) | 0),
              (d = (d + Math.imul(zt, E)) | 0),
              (p = (p + Math.imul(zt, W)) | 0),
              (O = (O + Math.imul(yt, st)) | 0),
              (d = (d + Math.imul(yt, ft)) | 0),
              (d = (d + Math.imul(wt, st)) | 0),
              (p = (p + Math.imul(wt, ft)) | 0),
              (O = (O + Math.imul(H, Ft)) | 0),
              (d = (d + Math.imul(H, Lt)) | 0),
              (d = (d + Math.imul(J, Ft)) | 0),
              (p = (p + Math.imul(J, Lt)) | 0);
            var Xl = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (Xl >>> 26)) | 0),
              (Xl &= 67108863),
              (O = Math.imul(ae, rt)),
              (d = Math.imul(ae, lt)),
              (d = (d + Math.imul(L, rt)) | 0),
              (p = Math.imul(L, lt)),
              (O = (O + Math.imul(pe, Ot)) | 0),
              (d = (d + Math.imul(pe, Mt)) | 0),
              (d = (d + Math.imul(Ae, Ot)) | 0),
              (p = (p + Math.imul(Ae, Mt)) | 0),
              (O = (O + Math.imul(Qt, Pt)) | 0),
              (d = (d + Math.imul(Qt, Ee)) | 0),
              (d = (d + Math.imul(le, Pt)) | 0),
              (p = (p + Math.imul(le, Ee)) | 0),
              (O = (O + Math.imul(ye, Se)) | 0),
              (d = (d + Math.imul(ye, _e)) | 0),
              (d = (d + Math.imul(ve, Se)) | 0),
              (p = (p + Math.imul(ve, _e)) | 0),
              (O = (O + Math.imul(ue, Oe)) | 0),
              (d = (d + Math.imul(ue, U)) | 0),
              (d = (d + Math.imul(ke, Oe)) | 0),
              (p = (p + Math.imul(ke, U)) | 0),
              (O = (O + Math.imul(_t, E)) | 0),
              (d = (d + Math.imul(_t, W)) | 0),
              (d = (d + Math.imul(It, E)) | 0),
              (p = (p + Math.imul(It, W)) | 0),
              (O = (O + Math.imul(Rt, st)) | 0),
              (d = (d + Math.imul(Rt, ft)) | 0),
              (d = (d + Math.imul(zt, st)) | 0),
              (p = (p + Math.imul(zt, ft)) | 0),
              (O = (O + Math.imul(yt, Ft)) | 0),
              (d = (d + Math.imul(yt, Lt)) | 0),
              (d = (d + Math.imul(wt, Ft)) | 0),
              (p = (p + Math.imul(wt, Lt)) | 0),
              (O = (O + Math.imul(H, Tt)) | 0),
              (d = (d + Math.imul(H, Ge)) | 0),
              (d = (d + Math.imul(J, Tt)) | 0),
              (p = (p + Math.imul(J, Ge)) | 0);
            var tf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (tf >>> 26)) | 0),
              (tf &= 67108863),
              (O = Math.imul(A, rt)),
              (d = Math.imul(A, lt)),
              (d = (d + Math.imul(K, rt)) | 0),
              (p = Math.imul(K, lt)),
              (O = (O + Math.imul(ae, Ot)) | 0),
              (d = (d + Math.imul(ae, Mt)) | 0),
              (d = (d + Math.imul(L, Ot)) | 0),
              (p = (p + Math.imul(L, Mt)) | 0),
              (O = (O + Math.imul(pe, Pt)) | 0),
              (d = (d + Math.imul(pe, Ee)) | 0),
              (d = (d + Math.imul(Ae, Pt)) | 0),
              (p = (p + Math.imul(Ae, Ee)) | 0),
              (O = (O + Math.imul(Qt, Se)) | 0),
              (d = (d + Math.imul(Qt, _e)) | 0),
              (d = (d + Math.imul(le, Se)) | 0),
              (p = (p + Math.imul(le, _e)) | 0),
              (O = (O + Math.imul(ye, Oe)) | 0),
              (d = (d + Math.imul(ye, U)) | 0),
              (d = (d + Math.imul(ve, Oe)) | 0),
              (p = (p + Math.imul(ve, U)) | 0),
              (O = (O + Math.imul(ue, E)) | 0),
              (d = (d + Math.imul(ue, W)) | 0),
              (d = (d + Math.imul(ke, E)) | 0),
              (p = (p + Math.imul(ke, W)) | 0),
              (O = (O + Math.imul(_t, st)) | 0),
              (d = (d + Math.imul(_t, ft)) | 0),
              (d = (d + Math.imul(It, st)) | 0),
              (p = (p + Math.imul(It, ft)) | 0),
              (O = (O + Math.imul(Rt, Ft)) | 0),
              (d = (d + Math.imul(Rt, Lt)) | 0),
              (d = (d + Math.imul(zt, Ft)) | 0),
              (p = (p + Math.imul(zt, Lt)) | 0),
              (O = (O + Math.imul(yt, Tt)) | 0),
              (d = (d + Math.imul(yt, Ge)) | 0),
              (d = (d + Math.imul(wt, Tt)) | 0),
              (p = (p + Math.imul(wt, Ge)) | 0),
              (O = (O + Math.imul(H, Ke)) | 0),
              (d = (d + Math.imul(H, Ve)) | 0),
              (d = (d + Math.imul(J, Ke)) | 0),
              (p = (p + Math.imul(J, Ve)) | 0);
            var ef = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (ef >>> 26)) | 0),
              (ef &= 67108863),
              (O = Math.imul(A, Ot)),
              (d = Math.imul(A, Mt)),
              (d = (d + Math.imul(K, Ot)) | 0),
              (p = Math.imul(K, Mt)),
              (O = (O + Math.imul(ae, Pt)) | 0),
              (d = (d + Math.imul(ae, Ee)) | 0),
              (d = (d + Math.imul(L, Pt)) | 0),
              (p = (p + Math.imul(L, Ee)) | 0),
              (O = (O + Math.imul(pe, Se)) | 0),
              (d = (d + Math.imul(pe, _e)) | 0),
              (d = (d + Math.imul(Ae, Se)) | 0),
              (p = (p + Math.imul(Ae, _e)) | 0),
              (O = (O + Math.imul(Qt, Oe)) | 0),
              (d = (d + Math.imul(Qt, U)) | 0),
              (d = (d + Math.imul(le, Oe)) | 0),
              (p = (p + Math.imul(le, U)) | 0),
              (O = (O + Math.imul(ye, E)) | 0),
              (d = (d + Math.imul(ye, W)) | 0),
              (d = (d + Math.imul(ve, E)) | 0),
              (p = (p + Math.imul(ve, W)) | 0),
              (O = (O + Math.imul(ue, st)) | 0),
              (d = (d + Math.imul(ue, ft)) | 0),
              (d = (d + Math.imul(ke, st)) | 0),
              (p = (p + Math.imul(ke, ft)) | 0),
              (O = (O + Math.imul(_t, Ft)) | 0),
              (d = (d + Math.imul(_t, Lt)) | 0),
              (d = (d + Math.imul(It, Ft)) | 0),
              (p = (p + Math.imul(It, Lt)) | 0),
              (O = (O + Math.imul(Rt, Tt)) | 0),
              (d = (d + Math.imul(Rt, Ge)) | 0),
              (d = (d + Math.imul(zt, Tt)) | 0),
              (p = (p + Math.imul(zt, Ge)) | 0),
              (O = (O + Math.imul(yt, Ke)) | 0),
              (d = (d + Math.imul(yt, Ve)) | 0),
              (d = (d + Math.imul(wt, Ke)) | 0),
              (p = (p + Math.imul(wt, Ve)) | 0);
            var rf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (rf >>> 26)) | 0),
              (rf &= 67108863),
              (O = Math.imul(A, Pt)),
              (d = Math.imul(A, Ee)),
              (d = (d + Math.imul(K, Pt)) | 0),
              (p = Math.imul(K, Ee)),
              (O = (O + Math.imul(ae, Se)) | 0),
              (d = (d + Math.imul(ae, _e)) | 0),
              (d = (d + Math.imul(L, Se)) | 0),
              (p = (p + Math.imul(L, _e)) | 0),
              (O = (O + Math.imul(pe, Oe)) | 0),
              (d = (d + Math.imul(pe, U)) | 0),
              (d = (d + Math.imul(Ae, Oe)) | 0),
              (p = (p + Math.imul(Ae, U)) | 0),
              (O = (O + Math.imul(Qt, E)) | 0),
              (d = (d + Math.imul(Qt, W)) | 0),
              (d = (d + Math.imul(le, E)) | 0),
              (p = (p + Math.imul(le, W)) | 0),
              (O = (O + Math.imul(ye, st)) | 0),
              (d = (d + Math.imul(ye, ft)) | 0),
              (d = (d + Math.imul(ve, st)) | 0),
              (p = (p + Math.imul(ve, ft)) | 0),
              (O = (O + Math.imul(ue, Ft)) | 0),
              (d = (d + Math.imul(ue, Lt)) | 0),
              (d = (d + Math.imul(ke, Ft)) | 0),
              (p = (p + Math.imul(ke, Lt)) | 0),
              (O = (O + Math.imul(_t, Tt)) | 0),
              (d = (d + Math.imul(_t, Ge)) | 0),
              (d = (d + Math.imul(It, Tt)) | 0),
              (p = (p + Math.imul(It, Ge)) | 0),
              (O = (O + Math.imul(Rt, Ke)) | 0),
              (d = (d + Math.imul(Rt, Ve)) | 0),
              (d = (d + Math.imul(zt, Ke)) | 0),
              (p = (p + Math.imul(zt, Ve)) | 0);
            var nf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (nf >>> 26)) | 0),
              (nf &= 67108863),
              (O = Math.imul(A, Se)),
              (d = Math.imul(A, _e)),
              (d = (d + Math.imul(K, Se)) | 0),
              (p = Math.imul(K, _e)),
              (O = (O + Math.imul(ae, Oe)) | 0),
              (d = (d + Math.imul(ae, U)) | 0),
              (d = (d + Math.imul(L, Oe)) | 0),
              (p = (p + Math.imul(L, U)) | 0),
              (O = (O + Math.imul(pe, E)) | 0),
              (d = (d + Math.imul(pe, W)) | 0),
              (d = (d + Math.imul(Ae, E)) | 0),
              (p = (p + Math.imul(Ae, W)) | 0),
              (O = (O + Math.imul(Qt, st)) | 0),
              (d = (d + Math.imul(Qt, ft)) | 0),
              (d = (d + Math.imul(le, st)) | 0),
              (p = (p + Math.imul(le, ft)) | 0),
              (O = (O + Math.imul(ye, Ft)) | 0),
              (d = (d + Math.imul(ye, Lt)) | 0),
              (d = (d + Math.imul(ve, Ft)) | 0),
              (p = (p + Math.imul(ve, Lt)) | 0),
              (O = (O + Math.imul(ue, Tt)) | 0),
              (d = (d + Math.imul(ue, Ge)) | 0),
              (d = (d + Math.imul(ke, Tt)) | 0),
              (p = (p + Math.imul(ke, Ge)) | 0),
              (O = (O + Math.imul(_t, Ke)) | 0),
              (d = (d + Math.imul(_t, Ve)) | 0),
              (d = (d + Math.imul(It, Ke)) | 0),
              (p = (p + Math.imul(It, Ve)) | 0);
            var sf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (sf >>> 26)) | 0),
              (sf &= 67108863),
              (O = Math.imul(A, Oe)),
              (d = Math.imul(A, U)),
              (d = (d + Math.imul(K, Oe)) | 0),
              (p = Math.imul(K, U)),
              (O = (O + Math.imul(ae, E)) | 0),
              (d = (d + Math.imul(ae, W)) | 0),
              (d = (d + Math.imul(L, E)) | 0),
              (p = (p + Math.imul(L, W)) | 0),
              (O = (O + Math.imul(pe, st)) | 0),
              (d = (d + Math.imul(pe, ft)) | 0),
              (d = (d + Math.imul(Ae, st)) | 0),
              (p = (p + Math.imul(Ae, ft)) | 0),
              (O = (O + Math.imul(Qt, Ft)) | 0),
              (d = (d + Math.imul(Qt, Lt)) | 0),
              (d = (d + Math.imul(le, Ft)) | 0),
              (p = (p + Math.imul(le, Lt)) | 0),
              (O = (O + Math.imul(ye, Tt)) | 0),
              (d = (d + Math.imul(ye, Ge)) | 0),
              (d = (d + Math.imul(ve, Tt)) | 0),
              (p = (p + Math.imul(ve, Ge)) | 0),
              (O = (O + Math.imul(ue, Ke)) | 0),
              (d = (d + Math.imul(ue, Ve)) | 0),
              (d = (d + Math.imul(ke, Ke)) | 0),
              (p = (p + Math.imul(ke, Ve)) | 0);
            var of = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (of >>> 26)) | 0),
              (of &= 67108863),
              (O = Math.imul(A, E)),
              (d = Math.imul(A, W)),
              (d = (d + Math.imul(K, E)) | 0),
              (p = Math.imul(K, W)),
              (O = (O + Math.imul(ae, st)) | 0),
              (d = (d + Math.imul(ae, ft)) | 0),
              (d = (d + Math.imul(L, st)) | 0),
              (p = (p + Math.imul(L, ft)) | 0),
              (O = (O + Math.imul(pe, Ft)) | 0),
              (d = (d + Math.imul(pe, Lt)) | 0),
              (d = (d + Math.imul(Ae, Ft)) | 0),
              (p = (p + Math.imul(Ae, Lt)) | 0),
              (O = (O + Math.imul(Qt, Tt)) | 0),
              (d = (d + Math.imul(Qt, Ge)) | 0),
              (d = (d + Math.imul(le, Tt)) | 0),
              (p = (p + Math.imul(le, Ge)) | 0),
              (O = (O + Math.imul(ye, Ke)) | 0),
              (d = (d + Math.imul(ye, Ve)) | 0),
              (d = (d + Math.imul(ve, Ke)) | 0),
              (p = (p + Math.imul(ve, Ve)) | 0);
            var af = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (af >>> 26)) | 0),
              (af &= 67108863),
              (O = Math.imul(A, st)),
              (d = Math.imul(A, ft)),
              (d = (d + Math.imul(K, st)) | 0),
              (p = Math.imul(K, ft)),
              (O = (O + Math.imul(ae, Ft)) | 0),
              (d = (d + Math.imul(ae, Lt)) | 0),
              (d = (d + Math.imul(L, Ft)) | 0),
              (p = (p + Math.imul(L, Lt)) | 0),
              (O = (O + Math.imul(pe, Tt)) | 0),
              (d = (d + Math.imul(pe, Ge)) | 0),
              (d = (d + Math.imul(Ae, Tt)) | 0),
              (p = (p + Math.imul(Ae, Ge)) | 0),
              (O = (O + Math.imul(Qt, Ke)) | 0),
              (d = (d + Math.imul(Qt, Ve)) | 0),
              (d = (d + Math.imul(le, Ke)) | 0),
              (p = (p + Math.imul(le, Ve)) | 0);
            var cf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (cf >>> 26)) | 0),
              (cf &= 67108863),
              (O = Math.imul(A, Ft)),
              (d = Math.imul(A, Lt)),
              (d = (d + Math.imul(K, Ft)) | 0),
              (p = Math.imul(K, Lt)),
              (O = (O + Math.imul(ae, Tt)) | 0),
              (d = (d + Math.imul(ae, Ge)) | 0),
              (d = (d + Math.imul(L, Tt)) | 0),
              (p = (p + Math.imul(L, Ge)) | 0),
              (O = (O + Math.imul(pe, Ke)) | 0),
              (d = (d + Math.imul(pe, Ve)) | 0),
              (d = (d + Math.imul(Ae, Ke)) | 0),
              (p = (p + Math.imul(Ae, Ve)) | 0);
            var uf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (uf >>> 26)) | 0),
              (uf &= 67108863),
              (O = Math.imul(A, Tt)),
              (d = Math.imul(A, Ge)),
              (d = (d + Math.imul(K, Tt)) | 0),
              (p = Math.imul(K, Ge)),
              (O = (O + Math.imul(ae, Ke)) | 0),
              (d = (d + Math.imul(ae, Ve)) | 0),
              (d = (d + Math.imul(L, Ke)) | 0),
              (p = (p + Math.imul(L, Ve)) | 0);
            var lf = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            (G = (((p + (d >>> 13)) | 0) + (lf >>> 26)) | 0),
              (lf &= 67108863),
              (O = Math.imul(A, Ke)),
              (d = Math.imul(A, Ve)),
              (d = (d + Math.imul(K, Ke)) | 0),
              (p = Math.imul(K, Ve));
            var ff = (((G + O) | 0) + ((d & 8191) << 13)) | 0;
            return (
              (G = (((p + (d >>> 13)) | 0) + (ff >>> 26)) | 0),
              (ff &= 67108863),
              (_[0] = ql),
              (_[1] = $l),
              (_[2] = Ql),
              (_[3] = Jl),
              (_[4] = jl),
              (_[5] = Zl),
              (_[6] = Yl),
              (_[7] = Xl),
              (_[8] = tf),
              (_[9] = ef),
              (_[10] = rf),
              (_[11] = nf),
              (_[12] = sf),
              (_[13] = of),
              (_[14] = af),
              (_[15] = cf),
              (_[16] = uf),
              (_[17] = lf),
              (_[18] = ff),
              G !== 0 && ((_[19] = G), g.length++),
              g
            );
          };
          Math.imul || (z = q);
          function V(y, u, l) {
            (l.negative = u.negative ^ y.negative),
              (l.length = y.length + u.length);
            for (var g = 0, k = 0, I = 0; I < l.length - 1; I++) {
              var _ = k;
              k = 0;
              for (
                var G = g & 67108863,
                  O = Math.min(I, u.length - 1),
                  d = Math.max(0, I - y.length + 1);
                d <= O;
                d++
              ) {
                var p = I - d,
                  T = y.words[p] | 0,
                  H = u.words[d] | 0,
                  J = T * H,
                  at = J & 67108863;
                (_ = (_ + ((J / 67108864) | 0)) | 0),
                  (at = (at + G) | 0),
                  (G = at & 67108863),
                  (_ = (_ + (at >>> 26)) | 0),
                  (k += _ >>> 26),
                  (_ &= 67108863);
              }
              (l.words[I] = G), (g = _), (_ = k);
            }
            return g !== 0 ? (l.words[I] = g) : l.length--, l._strip();
          }
          function et(y, u, l) {
            return V(y, u, l);
          }
          (s.prototype.mulTo = function (u, l) {
            var g,
              k = this.length + u.length;
            return (
              this.length === 10 && u.length === 10
                ? (g = z(this, u, l))
                : k < 63
                ? (g = q(this, u, l))
                : k < 1024
                ? (g = V(this, u, l))
                : (g = et(this, u, l)),
              g
            );
          }),
            (s.prototype.mul = function (u) {
              var l = new s(null);
              return (
                (l.words = new Array(this.length + u.length)), this.mulTo(u, l)
              );
            }),
            (s.prototype.mulf = function (u) {
              var l = new s(null);
              return (
                (l.words = new Array(this.length + u.length)), et(this, u, l)
              );
            }),
            (s.prototype.imul = function (u) {
              return this.clone().mulTo(u, this);
            }),
            (s.prototype.imuln = function (u) {
              var l = u < 0;
              l && (u = -u), r(typeof u == "number"), r(u < 67108864);
              for (var g = 0, k = 0; k < this.length; k++) {
                var I = (this.words[k] | 0) * u,
                  _ = (I & 67108863) + (g & 67108863);
                (g >>= 26),
                  (g += (I / 67108864) | 0),
                  (g += _ >>> 26),
                  (this.words[k] = _ & 67108863);
              }
              return (
                g !== 0 && ((this.words[k] = g), this.length++),
                (this.length = u === 0 ? 1 : this.length),
                l ? this.ineg() : this
              );
            }),
            (s.prototype.muln = function (u) {
              return this.clone().imuln(u);
            }),
            (s.prototype.sqr = function () {
              return this.mul(this);
            }),
            (s.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function (u) {
              var l = D(u);
              if (l.length === 0) return new s(1);
              for (
                var g = this, k = 0;
                k < l.length && l[k] === 0;
                k++, g = g.sqr()
              );
              if (++k < l.length)
                for (var I = g.sqr(); k < l.length; k++, I = I.sqr())
                  l[k] !== 0 && (g = g.mul(I));
              return g;
            }),
            (s.prototype.iushln = function (u) {
              r(typeof u == "number" && u >= 0);
              var l = u % 26,
                g = (u - l) / 26,
                k = (67108863 >>> (26 - l)) << (26 - l),
                I;
              if (l !== 0) {
                var _ = 0;
                for (I = 0; I < this.length; I++) {
                  var G = this.words[I] & k,
                    O = ((this.words[I] | 0) - G) << l;
                  (this.words[I] = O | _), (_ = G >>> (26 - l));
                }
                _ && ((this.words[I] = _), this.length++);
              }
              if (g !== 0) {
                for (I = this.length - 1; I >= 0; I--)
                  this.words[I + g] = this.words[I];
                for (I = 0; I < g; I++) this.words[I] = 0;
                this.length += g;
              }
              return this._strip();
            }),
            (s.prototype.ishln = function (u) {
              return r(this.negative === 0), this.iushln(u);
            }),
            (s.prototype.iushrn = function (u, l, g) {
              r(typeof u == "number" && u >= 0);
              var k;
              l ? (k = (l - (l % 26)) / 26) : (k = 0);
              var I = u % 26,
                _ = Math.min((u - I) / 26, this.length),
                G = 67108863 ^ ((67108863 >>> I) << I),
                O = g;
              if (((k -= _), (k = Math.max(0, k)), O)) {
                for (var d = 0; d < _; d++) O.words[d] = this.words[d];
                O.length = _;
              }
              if (_ !== 0)
                if (this.length > _)
                  for (this.length -= _, d = 0; d < this.length; d++)
                    this.words[d] = this.words[d + _];
                else (this.words[0] = 0), (this.length = 1);
              var p = 0;
              for (d = this.length - 1; d >= 0 && (p !== 0 || d >= k); d--) {
                var T = this.words[d] | 0;
                (this.words[d] = (p << (26 - I)) | (T >>> I)), (p = T & G);
              }
              return (
                O && p !== 0 && (O.words[O.length++] = p),
                this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (s.prototype.ishrn = function (u, l, g) {
              return r(this.negative === 0), this.iushrn(u, l, g);
            }),
            (s.prototype.shln = function (u) {
              return this.clone().ishln(u);
            }),
            (s.prototype.ushln = function (u) {
              return this.clone().iushln(u);
            }),
            (s.prototype.shrn = function (u) {
              return this.clone().ishrn(u);
            }),
            (s.prototype.ushrn = function (u) {
              return this.clone().iushrn(u);
            }),
            (s.prototype.testn = function (u) {
              r(typeof u == "number" && u >= 0);
              var l = u % 26,
                g = (u - l) / 26,
                k = 1 << l;
              if (this.length <= g) return !1;
              var I = this.words[g];
              return !!(I & k);
            }),
            (s.prototype.imaskn = function (u) {
              r(typeof u == "number" && u >= 0);
              var l = u % 26,
                g = (u - l) / 26;
              if (
                (r(
                  this.negative === 0,
                  "imaskn works only with positive numbers"
                ),
                this.length <= g)
              )
                return this;
              if (
                (l !== 0 && g++,
                (this.length = Math.min(g, this.length)),
                l !== 0)
              ) {
                var k = 67108863 ^ ((67108863 >>> l) << l);
                this.words[this.length - 1] &= k;
              }
              return this._strip();
            }),
            (s.prototype.maskn = function (u) {
              return this.clone().imaskn(u);
            }),
            (s.prototype.iaddn = function (u) {
              return (
                r(typeof u == "number"),
                r(u < 67108864),
                u < 0
                  ? this.isubn(-u)
                  : this.negative !== 0
                  ? this.length === 1 && (this.words[0] | 0) <= u
                    ? ((this.words[0] = u - (this.words[0] | 0)),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(u),
                      (this.negative = 1),
                      this)
                  : this._iaddn(u)
              );
            }),
            (s.prototype._iaddn = function (u) {
              this.words[0] += u;
              for (var l = 0; l < this.length && this.words[l] >= 67108864; l++)
                (this.words[l] -= 67108864),
                  l === this.length - 1
                    ? (this.words[l + 1] = 1)
                    : this.words[l + 1]++;
              return (this.length = Math.max(this.length, l + 1)), this;
            }),
            (s.prototype.isubn = function (u) {
              if ((r(typeof u == "number"), r(u < 67108864), u < 0))
                return this.iaddn(-u);
              if (this.negative !== 0)
                return (
                  (this.negative = 0), this.iaddn(u), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= u), this.length === 1 && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var l = 0; l < this.length && this.words[l] < 0; l++)
                  (this.words[l] += 67108864), (this.words[l + 1] -= 1);
              return this._strip();
            }),
            (s.prototype.addn = function (u) {
              return this.clone().iaddn(u);
            }),
            (s.prototype.subn = function (u) {
              return this.clone().isubn(u);
            }),
            (s.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (s.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function (u, l, g) {
              var k = u.length + g,
                I;
              this._expand(k);
              var _,
                G = 0;
              for (I = 0; I < u.length; I++) {
                _ = (this.words[I + g] | 0) + G;
                var O = (u.words[I] | 0) * l;
                (_ -= O & 67108863),
                  (G = (_ >> 26) - ((O / 67108864) | 0)),
                  (this.words[I + g] = _ & 67108863);
              }
              for (; I < this.length - g; I++)
                (_ = (this.words[I + g] | 0) + G),
                  (G = _ >> 26),
                  (this.words[I + g] = _ & 67108863);
              if (G === 0) return this._strip();
              for (r(G === -1), G = 0, I = 0; I < this.length; I++)
                (_ = -(this.words[I] | 0) + G),
                  (G = _ >> 26),
                  (this.words[I] = _ & 67108863);
              return (this.negative = 1), this._strip();
            }),
            (s.prototype._wordDiv = function (u, l) {
              var g = this.length - u.length,
                k = this.clone(),
                I = u,
                _ = I.words[I.length - 1] | 0,
                G = this._countBits(_);
              (g = 26 - G),
                g !== 0 &&
                  ((I = I.ushln(g)),
                  k.iushln(g),
                  (_ = I.words[I.length - 1] | 0));
              var O = k.length - I.length,
                d;
              if (l !== "mod") {
                (d = new s(null)),
                  (d.length = O + 1),
                  (d.words = new Array(d.length));
                for (var p = 0; p < d.length; p++) d.words[p] = 0;
              }
              var T = k.clone()._ishlnsubmul(I, 1, O);
              T.negative === 0 && ((k = T), d && (d.words[O] = 1));
              for (var H = O - 1; H >= 0; H--) {
                var J =
                  (k.words[I.length + H] | 0) * 67108864 +
                  (k.words[I.length + H - 1] | 0);
                for (
                  J = Math.min((J / _) | 0, 67108863), k._ishlnsubmul(I, J, H);
                  k.negative !== 0;

                )
                  J--,
                    (k.negative = 0),
                    k._ishlnsubmul(I, 1, H),
                    k.isZero() || (k.negative ^= 1);
                d && (d.words[H] = J);
              }
              return (
                d && d._strip(),
                k._strip(),
                l !== "div" && g !== 0 && k.iushrn(g),
                { div: d || null, mod: k }
              );
            }),
            (s.prototype.divmod = function (u, l, g) {
              if ((r(!u.isZero()), this.isZero()))
                return { div: new s(0), mod: new s(0) };
              var k, I, _;
              return this.negative !== 0 && u.negative === 0
                ? ((_ = this.neg().divmod(u, l)),
                  l !== "mod" && (k = _.div.neg()),
                  l !== "div" &&
                    ((I = _.mod.neg()), g && I.negative !== 0 && I.iadd(u)),
                  { div: k, mod: I })
                : this.negative === 0 && u.negative !== 0
                ? ((_ = this.divmod(u.neg(), l)),
                  l !== "mod" && (k = _.div.neg()),
                  { div: k, mod: _.mod })
                : (this.negative & u.negative) !== 0
                ? ((_ = this.neg().divmod(u.neg(), l)),
                  l !== "div" &&
                    ((I = _.mod.neg()), g && I.negative !== 0 && I.isub(u)),
                  { div: _.div, mod: I })
                : u.length > this.length || this.cmp(u) < 0
                ? { div: new s(0), mod: this }
                : u.length === 1
                ? l === "div"
                  ? { div: this.divn(u.words[0]), mod: null }
                  : l === "mod"
                  ? { div: null, mod: new s(this.modrn(u.words[0])) }
                  : {
                      div: this.divn(u.words[0]),
                      mod: new s(this.modrn(u.words[0])),
                    }
                : this._wordDiv(u, l);
            }),
            (s.prototype.div = function (u) {
              return this.divmod(u, "div", !1).div;
            }),
            (s.prototype.mod = function (u) {
              return this.divmod(u, "mod", !1).mod;
            }),
            (s.prototype.umod = function (u) {
              return this.divmod(u, "mod", !0).mod;
            }),
            (s.prototype.divRound = function (u) {
              var l = this.divmod(u);
              if (l.mod.isZero()) return l.div;
              var g = l.div.negative !== 0 ? l.mod.isub(u) : l.mod,
                k = u.ushrn(1),
                I = u.andln(1),
                _ = g.cmp(k);
              return _ < 0 || (I === 1 && _ === 0)
                ? l.div
                : l.div.negative !== 0
                ? l.div.isubn(1)
                : l.div.iaddn(1);
            }),
            (s.prototype.modrn = function (u) {
              var l = u < 0;
              l && (u = -u), r(u <= 67108863);
              for (
                var g = (1 << 26) % u, k = 0, I = this.length - 1;
                I >= 0;
                I--
              )
                k = (g * k + (this.words[I] | 0)) % u;
              return l ? -k : k;
            }),
            (s.prototype.modn = function (u) {
              return this.modrn(u);
            }),
            (s.prototype.idivn = function (u) {
              var l = u < 0;
              l && (u = -u), r(u <= 67108863);
              for (var g = 0, k = this.length - 1; k >= 0; k--) {
                var I = (this.words[k] | 0) + g * 67108864;
                (this.words[k] = (I / u) | 0), (g = I % u);
              }
              return this._strip(), l ? this.ineg() : this;
            }),
            (s.prototype.divn = function (u) {
              return this.clone().idivn(u);
            }),
            (s.prototype.egcd = function (u) {
              r(u.negative === 0), r(!u.isZero());
              var l = this,
                g = u.clone();
              l.negative !== 0 ? (l = l.umod(u)) : (l = l.clone());
              for (
                var k = new s(1),
                  I = new s(0),
                  _ = new s(0),
                  G = new s(1),
                  O = 0;
                l.isEven() && g.isEven();

              )
                l.iushrn(1), g.iushrn(1), ++O;
              for (var d = g.clone(), p = l.clone(); !l.isZero(); ) {
                for (
                  var T = 0, H = 1;
                  (l.words[0] & H) === 0 && T < 26;
                  ++T, H <<= 1
                );
                if (T > 0)
                  for (l.iushrn(T); T-- > 0; )
                    (k.isOdd() || I.isOdd()) && (k.iadd(d), I.isub(p)),
                      k.iushrn(1),
                      I.iushrn(1);
                for (
                  var J = 0, at = 1;
                  (g.words[0] & at) === 0 && J < 26;
                  ++J, at <<= 1
                );
                if (J > 0)
                  for (g.iushrn(J); J-- > 0; )
                    (_.isOdd() || G.isOdd()) && (_.iadd(d), G.isub(p)),
                      _.iushrn(1),
                      G.iushrn(1);
                l.cmp(g) >= 0
                  ? (l.isub(g), k.isub(_), I.isub(G))
                  : (g.isub(l), _.isub(k), G.isub(I));
              }
              return { a: _, b: G, gcd: g.iushln(O) };
            }),
            (s.prototype._invmp = function (u) {
              r(u.negative === 0), r(!u.isZero());
              var l = this,
                g = u.clone();
              l.negative !== 0 ? (l = l.umod(u)) : (l = l.clone());
              for (
                var k = new s(1), I = new s(0), _ = g.clone();
                l.cmpn(1) > 0 && g.cmpn(1) > 0;

              ) {
                for (
                  var G = 0, O = 1;
                  (l.words[0] & O) === 0 && G < 26;
                  ++G, O <<= 1
                );
                if (G > 0)
                  for (l.iushrn(G); G-- > 0; )
                    k.isOdd() && k.iadd(_), k.iushrn(1);
                for (
                  var d = 0, p = 1;
                  (g.words[0] & p) === 0 && d < 26;
                  ++d, p <<= 1
                );
                if (d > 0)
                  for (g.iushrn(d); d-- > 0; )
                    I.isOdd() && I.iadd(_), I.iushrn(1);
                l.cmp(g) >= 0 ? (l.isub(g), k.isub(I)) : (g.isub(l), I.isub(k));
              }
              var T;
              return (
                l.cmpn(1) === 0 ? (T = k) : (T = I),
                T.cmpn(0) < 0 && T.iadd(u),
                T
              );
            }),
            (s.prototype.gcd = function (u) {
              if (this.isZero()) return u.abs();
              if (u.isZero()) return this.abs();
              var l = this.clone(),
                g = u.clone();
              (l.negative = 0), (g.negative = 0);
              for (var k = 0; l.isEven() && g.isEven(); k++)
                l.iushrn(1), g.iushrn(1);
              do {
                for (; l.isEven(); ) l.iushrn(1);
                for (; g.isEven(); ) g.iushrn(1);
                var I = l.cmp(g);
                if (I < 0) {
                  var _ = l;
                  (l = g), (g = _);
                } else if (I === 0 || g.cmpn(1) === 0) break;
                l.isub(g);
              } while (!0);
              return g.iushln(k);
            }),
            (s.prototype.invm = function (u) {
              return this.egcd(u).a.umod(u);
            }),
            (s.prototype.isEven = function () {
              return (this.words[0] & 1) === 0;
            }),
            (s.prototype.isOdd = function () {
              return (this.words[0] & 1) === 1;
            }),
            (s.prototype.andln = function (u) {
              return this.words[0] & u;
            }),
            (s.prototype.bincn = function (u) {
              r(typeof u == "number");
              var l = u % 26,
                g = (u - l) / 26,
                k = 1 << l;
              if (this.length <= g)
                return this._expand(g + 1), (this.words[g] |= k), this;
              for (var I = k, _ = g; I !== 0 && _ < this.length; _++) {
                var G = this.words[_] | 0;
                (G += I), (I = G >>> 26), (G &= 67108863), (this.words[_] = G);
              }
              return I !== 0 && ((this.words[_] = I), this.length++), this;
            }),
            (s.prototype.isZero = function () {
              return this.length === 1 && this.words[0] === 0;
            }),
            (s.prototype.cmpn = function (u) {
              var l = u < 0;
              if (this.negative !== 0 && !l) return -1;
              if (this.negative === 0 && l) return 1;
              this._strip();
              var g;
              if (this.length > 1) g = 1;
              else {
                l && (u = -u), r(u <= 67108863, "Number is too big");
                var k = this.words[0] | 0;
                g = k === u ? 0 : k < u ? -1 : 1;
              }
              return this.negative !== 0 ? -g | 0 : g;
            }),
            (s.prototype.cmp = function (u) {
              if (this.negative !== 0 && u.negative === 0) return -1;
              if (this.negative === 0 && u.negative !== 0) return 1;
              var l = this.ucmp(u);
              return this.negative !== 0 ? -l | 0 : l;
            }),
            (s.prototype.ucmp = function (u) {
              if (this.length > u.length) return 1;
              if (this.length < u.length) return -1;
              for (var l = 0, g = this.length - 1; g >= 0; g--) {
                var k = this.words[g] | 0,
                  I = u.words[g] | 0;
                if (k !== I) {
                  k < I ? (l = -1) : k > I && (l = 1);
                  break;
                }
              }
              return l;
            }),
            (s.prototype.gtn = function (u) {
              return this.cmpn(u) === 1;
            }),
            (s.prototype.gt = function (u) {
              return this.cmp(u) === 1;
            }),
            (s.prototype.gten = function (u) {
              return this.cmpn(u) >= 0;
            }),
            (s.prototype.gte = function (u) {
              return this.cmp(u) >= 0;
            }),
            (s.prototype.ltn = function (u) {
              return this.cmpn(u) === -1;
            }),
            (s.prototype.lt = function (u) {
              return this.cmp(u) === -1;
            }),
            (s.prototype.lten = function (u) {
              return this.cmpn(u) <= 0;
            }),
            (s.prototype.lte = function (u) {
              return this.cmp(u) <= 0;
            }),
            (s.prototype.eqn = function (u) {
              return this.cmpn(u) === 0;
            }),
            (s.prototype.eq = function (u) {
              return this.cmp(u) === 0;
            }),
            (s.red = function (u) {
              return new F(u);
            }),
            (s.prototype.toRed = function (u) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(this.negative === 0, "red works only with positives"),
                u.convertTo(this)._forceRed(u)
              );
            }),
            (s.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function (u) {
              return (this.red = u), this;
            }),
            (s.prototype.forceRed = function (u) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(u)
              );
            }),
            (s.prototype.redAdd = function (u) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, u)
              );
            }),
            (s.prototype.redIAdd = function (u) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, u)
              );
            }),
            (s.prototype.redSub = function (u) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, u)
              );
            }),
            (s.prototype.redISub = function (u) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, u)
              );
            }),
            (s.prototype.redShl = function (u) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, u)
              );
            }),
            (s.prototype.redMul = function (u) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, u),
                this.red.mul(this, u)
              );
            }),
            (s.prototype.redIMul = function (u) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, u),
                this.red.imul(this, u)
              );
            }),
            (s.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function (u) {
              return (
                r(this.red && !u.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, u)
              );
            });
          var it = { k256: null, p224: null, p192: null, p25519: null };
          function X(y, u) {
            (this.name = y),
              (this.p = new s(u, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          (X.prototype._tmp = function () {
            var u = new s(null);
            return (u.words = new Array(Math.ceil(this.n / 13))), u;
          }),
            (X.prototype.ireduce = function (u) {
              var l = u,
                g;
              do
                this.split(l, this.tmp),
                  (l = this.imulK(l)),
                  (l = l.iadd(this.tmp)),
                  (g = l.bitLength());
              while (g > this.n);
              var k = g < this.n ? -1 : l.ucmp(this.p);
              return (
                k === 0
                  ? ((l.words[0] = 0), (l.length = 1))
                  : k > 0
                  ? l.isub(this.p)
                  : l.strip !== void 0
                  ? l.strip()
                  : l._strip(),
                l
              );
            }),
            (X.prototype.split = function (u, l) {
              u.iushrn(this.n, 0, l);
            }),
            (X.prototype.imulK = function (u) {
              return u.imul(this.k);
            });
          function nt() {
            X.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          i(nt, X),
            (nt.prototype.split = function (u, l) {
              for (
                var g = 4194303, k = Math.min(u.length, 9), I = 0;
                I < k;
                I++
              )
                l.words[I] = u.words[I];
              if (((l.length = k), u.length <= 9)) {
                (u.words[0] = 0), (u.length = 1);
                return;
              }
              var _ = u.words[9];
              for (l.words[l.length++] = _ & g, I = 10; I < u.length; I++) {
                var G = u.words[I] | 0;
                (u.words[I - 10] = ((G & g) << 4) | (_ >>> 22)), (_ = G);
              }
              (_ >>>= 22),
                (u.words[I - 10] = _),
                _ === 0 && u.length > 10 ? (u.length -= 10) : (u.length -= 9);
            }),
            (nt.prototype.imulK = function (u) {
              (u.words[u.length] = 0),
                (u.words[u.length + 1] = 0),
                (u.length += 2);
              for (var l = 0, g = 0; g < u.length; g++) {
                var k = u.words[g] | 0;
                (l += k * 977),
                  (u.words[g] = l & 67108863),
                  (l = k * 64 + ((l / 67108864) | 0));
              }
              return (
                u.words[u.length - 1] === 0 &&
                  (u.length--, u.words[u.length - 1] === 0 && u.length--),
                u
              );
            });
          function R() {
            X.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          i(R, X);
          function x() {
            X.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          i(x, X);
          function B() {
            X.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          i(B, X),
            (B.prototype.imulK = function (u) {
              for (var l = 0, g = 0; g < u.length; g++) {
                var k = (u.words[g] | 0) * 19 + l,
                  I = k & 67108863;
                (k >>>= 26), (u.words[g] = I), (l = k);
              }
              return l !== 0 && (u.words[u.length++] = l), u;
            }),
            (s._prime = function (u) {
              if (it[u]) return it[u];
              var l;
              if (u === "k256") l = new nt();
              else if (u === "p224") l = new R();
              else if (u === "p192") l = new x();
              else if (u === "p25519") l = new B();
              else throw new Error("Unknown prime " + u);
              return (it[u] = l), l;
            });
          function F(y) {
            if (typeof y == "string") {
              var u = s._prime(y);
              (this.m = u.p), (this.prime = u);
            } else
              r(y.gtn(1), "modulus must be greater than 1"),
                (this.m = y),
                (this.prime = null);
          }
          (F.prototype._verify1 = function (u) {
            r(u.negative === 0, "red works only with positives"),
              r(u.red, "red works only with red numbers");
          }),
            (F.prototype._verify2 = function (u, l) {
              r(
                (u.negative | l.negative) === 0,
                "red works only with positives"
              ),
                r(u.red && u.red === l.red, "red works only with red numbers");
            }),
            (F.prototype.imod = function (u) {
              return this.prime
                ? this.prime.ireduce(u)._forceRed(this)
                : (h(u, u.umod(this.m)._forceRed(this)), u);
            }),
            (F.prototype.neg = function (u) {
              return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this);
            }),
            (F.prototype.add = function (u, l) {
              this._verify2(u, l);
              var g = u.add(l);
              return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
            }),
            (F.prototype.iadd = function (u, l) {
              this._verify2(u, l);
              var g = u.iadd(l);
              return g.cmp(this.m) >= 0 && g.isub(this.m), g;
            }),
            (F.prototype.sub = function (u, l) {
              this._verify2(u, l);
              var g = u.sub(l);
              return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
            }),
            (F.prototype.isub = function (u, l) {
              this._verify2(u, l);
              var g = u.isub(l);
              return g.cmpn(0) < 0 && g.iadd(this.m), g;
            }),
            (F.prototype.shl = function (u, l) {
              return this._verify1(u), this.imod(u.ushln(l));
            }),
            (F.prototype.imul = function (u, l) {
              return this._verify2(u, l), this.imod(u.imul(l));
            }),
            (F.prototype.mul = function (u, l) {
              return this._verify2(u, l), this.imod(u.mul(l));
            }),
            (F.prototype.isqr = function (u) {
              return this.imul(u, u.clone());
            }),
            (F.prototype.sqr = function (u) {
              return this.mul(u, u);
            }),
            (F.prototype.sqrt = function (u) {
              if (u.isZero()) return u.clone();
              var l = this.m.andln(3);
              if ((r(l % 2 === 1), l === 3)) {
                var g = this.m.add(new s(1)).iushrn(2);
                return this.pow(u, g);
              }
              for (
                var k = this.m.subn(1), I = 0;
                !k.isZero() && k.andln(1) === 0;

              )
                I++, k.iushrn(1);
              r(!k.isZero());
              var _ = new s(1).toRed(this),
                G = _.redNeg(),
                O = this.m.subn(1).iushrn(1),
                d = this.m.bitLength();
              for (
                d = new s(2 * d * d).toRed(this);
                this.pow(d, O).cmp(G) !== 0;

              )
                d.redIAdd(G);
              for (
                var p = this.pow(d, k),
                  T = this.pow(u, k.addn(1).iushrn(1)),
                  H = this.pow(u, k),
                  J = I;
                H.cmp(_) !== 0;

              ) {
                for (var at = H, yt = 0; at.cmp(_) !== 0; yt++)
                  at = at.redSqr();
                r(yt < J);
                var wt = this.pow(p, new s(1).iushln(J - yt - 1));
                (T = T.redMul(wt)),
                  (p = wt.redSqr()),
                  (H = H.redMul(p)),
                  (J = yt);
              }
              return T;
            }),
            (F.prototype.invm = function (u) {
              var l = u._invmp(this.m);
              return l.negative !== 0
                ? ((l.negative = 0), this.imod(l).redNeg())
                : this.imod(l);
            }),
            (F.prototype.pow = function (u, l) {
              if (l.isZero()) return new s(1).toRed(this);
              if (l.cmpn(1) === 0) return u.clone();
              var g = 4,
                k = new Array(1 << g);
              (k[0] = new s(1).toRed(this)), (k[1] = u);
              for (var I = 2; I < k.length; I++) k[I] = this.mul(k[I - 1], u);
              var _ = k[0],
                G = 0,
                O = 0,
                d = l.bitLength() % 26;
              for (d === 0 && (d = 26), I = l.length - 1; I >= 0; I--) {
                for (var p = l.words[I], T = d - 1; T >= 0; T--) {
                  var H = (p >> T) & 1;
                  if ((_ !== k[0] && (_ = this.sqr(_)), H === 0 && G === 0)) {
                    O = 0;
                    continue;
                  }
                  (G <<= 1),
                    (G |= H),
                    O++,
                    !(O !== g && (I !== 0 || T !== 0)) &&
                      ((_ = this.mul(_, k[G])), (O = 0), (G = 0));
                }
                d = 26;
              }
              return _;
            }),
            (F.prototype.convertTo = function (u) {
              var l = u.umod(this.m);
              return l === u ? l.clone() : l;
            }),
            (F.prototype.convertFrom = function (u) {
              var l = u.clone();
              return (l.red = null), l;
            }),
            (s.mont = function (u) {
              return new v(u);
            });
          function v(y) {
            F.call(this, y),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          i(v, F),
            (v.prototype.convertTo = function (u) {
              return this.imod(u.ushln(this.shift));
            }),
            (v.prototype.convertFrom = function (u) {
              var l = this.imod(u.mul(this.rinv));
              return (l.red = null), l;
            }),
            (v.prototype.imul = function (u, l) {
              if (u.isZero() || l.isZero())
                return (u.words[0] = 0), (u.length = 1), u;
              var g = u.imul(l),
                k = g
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                I = g.isub(k).iushrn(this.shift),
                _ = I;
              return (
                I.cmp(this.m) >= 0
                  ? (_ = I.isub(this.m))
                  : I.cmpn(0) < 0 && (_ = I.iadd(this.m)),
                _._forceRed(this)
              );
            }),
            (v.prototype.mul = function (u, l) {
              if (u.isZero() || l.isZero()) return new s(0)._forceRed(this);
              var g = u.mul(l),
                k = g
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                I = g.isub(k).iushrn(this.shift),
                _ = I;
              return (
                I.cmp(this.m) >= 0
                  ? (_ = I.isub(this.m))
                  : I.cmpn(0) < 0 && (_ = I.iadd(this.m)),
                _._forceRed(this)
              );
            }),
            (v.prototype.invm = function (u) {
              var l = this.imod(u._invmp(this.m).mul(this.r2));
              return l._forceRed(this);
            });
        })(n, yb);
      })(xu)),
    xu.exports
  );
}
var mb = sy();
const v0 = gl(mb);
var au = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var S0;
function oy() {
  return (
    S0 ||
      ((S0 = 1),
      (function (n, t) {
        var e = fd(),
          r = e.Buffer;
        function i(o, a) {
          for (var c in o) a[c] = o[c];
        }
        r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow
          ? (n.exports = e)
          : (i(e, t), (t.Buffer = s));
        function s(o, a, c) {
          return r(o, a, c);
        }
        (s.prototype = Object.create(r.prototype)),
          i(r, s),
          (s.from = function (o, a, c) {
            if (typeof o == "number")
              throw new TypeError("Argument must not be a number");
            return r(o, a, c);
          }),
          (s.alloc = function (o, a, c) {
            if (typeof o != "number")
              throw new TypeError("Argument must be a number");
            var f = r(o);
            return (
              a !== void 0
                ? typeof c == "string"
                  ? f.fill(a, c)
                  : f.fill(a)
                : f.fill(0),
              f
            );
          }),
          (s.allocUnsafe = function (o) {
            if (typeof o != "number")
              throw new TypeError("Argument must be a number");
            return r(o);
          }),
          (s.allocUnsafeSlow = function (o) {
            if (typeof o != "number")
              throw new TypeError("Argument must be a number");
            return e.SlowBuffer(o);
          });
      })(au, au.exports)),
    au.exports
  );
}
var Ef, I0;
function wb() {
  if (I0) return Ef;
  I0 = 1;
  var n = oy().Buffer;
  function t(e) {
    if (e.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
    for (var s = 0; s < e.length; s++) {
      var o = e.charAt(s),
        a = o.charCodeAt(0);
      if (r[a] !== 255) throw new TypeError(o + " is ambiguous");
      r[a] = s;
    }
    var c = e.length,
      f = e.charAt(0),
      h = Math.log(c) / Math.log(256),
      b = Math.log(256) / Math.log(c);
    function S(N) {
      if (
        ((Array.isArray(N) || N instanceof Uint8Array) && (N = n.from(N)),
        !n.isBuffer(N))
      )
        throw new TypeError("Expected Buffer");
      if (N.length === 0) return "";
      for (var D = 0, q = 0, z = 0, V = N.length; z !== V && N[z] === 0; )
        z++, D++;
      for (
        var et = ((V - z) * b + 1) >>> 0, it = new Uint8Array(et);
        z !== V;

      ) {
        for (
          var X = N[z], nt = 0, R = et - 1;
          (X !== 0 || nt < q) && R !== -1;
          R--, nt++
        )
          (X += (256 * it[R]) >>> 0),
            (it[R] = X % c >>> 0),
            (X = (X / c) >>> 0);
        if (X !== 0) throw new Error("Non-zero carry");
        (q = nt), z++;
      }
      for (var x = et - q; x !== et && it[x] === 0; ) x++;
      for (var B = f.repeat(D); x < et; ++x) B += e.charAt(it[x]);
      return B;
    }
    function P(N) {
      if (typeof N != "string") throw new TypeError("Expected String");
      if (N.length === 0) return n.alloc(0);
      for (var D = 0, q = 0, z = 0; N[D] === f; ) q++, D++;
      for (
        var V = ((N.length - D) * h + 1) >>> 0, et = new Uint8Array(V);
        D < N.length;

      ) {
        var it = N.charCodeAt(D);
        if (it > 255) return;
        var X = r[it];
        if (X === 255) return;
        for (var nt = 0, R = V - 1; (X !== 0 || nt < z) && R !== -1; R--, nt++)
          (X += (c * et[R]) >>> 0),
            (et[R] = X % 256 >>> 0),
            (X = (X / 256) >>> 0);
        if (X !== 0) throw new Error("Non-zero carry");
        (z = nt), D++;
      }
      for (var x = V - z; x !== V && et[x] === 0; ) x++;
      var B = n.allocUnsafe(q + (V - x));
      B.fill(0, 0, q);
      for (var F = q; x !== V; ) B[F++] = et[x++];
      return B;
    }
    function M(N) {
      var D = P(N);
      if (D) return D;
      throw new Error("Non-base" + c + " character");
    }
    return { encode: S, decodeUnsafe: P, decode: M };
  }
  return (Ef = t), Ef;
}
var xf, B0;
function bb() {
  if (B0) return xf;
  B0 = 1;
  var n = wb(),
    t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  return (xf = n(t)), xf;
}
var Ab = bb();
const ir = gl(Ab);
var ce = {},
  kf,
  R0;
function Eb() {
  if (R0) return kf;
  R0 = 1;
  var n = oy().Buffer;
  function t(e) {
    if (e.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
    for (var s = 0; s < e.length; s++) {
      var o = e.charAt(s),
        a = o.charCodeAt(0);
      if (r[a] !== 255) throw new TypeError(o + " is ambiguous");
      r[a] = s;
    }
    var c = e.length,
      f = e.charAt(0),
      h = Math.log(c) / Math.log(256),
      b = Math.log(256) / Math.log(c);
    function S(N) {
      if (
        ((Array.isArray(N) || N instanceof Uint8Array) && (N = n.from(N)),
        !n.isBuffer(N))
      )
        throw new TypeError("Expected Buffer");
      if (N.length === 0) return "";
      for (var D = 0, q = 0, z = 0, V = N.length; z !== V && N[z] === 0; )
        z++, D++;
      for (
        var et = ((V - z) * b + 1) >>> 0, it = new Uint8Array(et);
        z !== V;

      ) {
        for (
          var X = N[z], nt = 0, R = et - 1;
          (X !== 0 || nt < q) && R !== -1;
          R--, nt++
        )
          (X += (256 * it[R]) >>> 0),
            (it[R] = X % c >>> 0),
            (X = (X / c) >>> 0);
        if (X !== 0) throw new Error("Non-zero carry");
        (q = nt), z++;
      }
      for (var x = et - q; x !== et && it[x] === 0; ) x++;
      for (var B = f.repeat(D); x < et; ++x) B += e.charAt(it[x]);
      return B;
    }
    function P(N) {
      if (typeof N != "string") throw new TypeError("Expected String");
      if (N.length === 0) return n.alloc(0);
      for (var D = 0, q = 0, z = 0; N[D] === f; ) q++, D++;
      for (
        var V = ((N.length - D) * h + 1) >>> 0, et = new Uint8Array(V);
        D < N.length;

      ) {
        var it = N.charCodeAt(D);
        if (it > 255) return;
        var X = r[it];
        if (X === 255) return;
        for (var nt = 0, R = V - 1; (X !== 0 || nt < z) && R !== -1; R--, nt++)
          (X += (c * et[R]) >>> 0),
            (et[R] = X % 256 >>> 0),
            (X = (X / 256) >>> 0);
        if (X !== 0) throw new Error("Non-zero carry");
        (z = nt), D++;
      }
      for (var x = V - z; x !== V && et[x] === 0; ) x++;
      var B = n.allocUnsafe(q + (V - x));
      B.fill(0, 0, q);
      for (var F = q; x !== V; ) B[F++] = et[x++];
      return B;
    }
    function M(N) {
      var D = P(N);
      if (D) return D;
      throw new Error("Non-base" + c + " character");
    }
    return { encode: S, decodeUnsafe: P, decode: M };
  }
  return (kf = t), kf;
}
var vf, P0;
function xb() {
  if (P0) return vf;
  P0 = 1;
  var n = Eb(),
    t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  return (vf = n(t)), vf;
}
function yi(n, t, e) {
  return t <= n && n <= e;
}
function Al(n) {
  if (n === void 0) return {};
  if (n === Object(n)) return n;
  throw TypeError("Could not convert argument to dictionary");
}
function kb(n) {
  for (var t = String(n), e = t.length, r = 0, i = []; r < e; ) {
    var s = t.charCodeAt(r);
    if (s < 55296 || s > 57343) i.push(s);
    else if (56320 <= s && s <= 57343) i.push(65533);
    else if (55296 <= s && s <= 56319)
      if (r === e - 1) i.push(65533);
      else {
        var o = n.charCodeAt(r + 1);
        if (56320 <= o && o <= 57343) {
          var a = s & 1023,
            c = o & 1023;
          i.push(65536 + (a << 10) + c), (r += 1);
        } else i.push(65533);
      }
    r += 1;
  }
  return i;
}
function vb(n) {
  for (var t = "", e = 0; e < n.length; ++e) {
    var r = n[e];
    r <= 65535
      ? (t += String.fromCharCode(r))
      : ((r -= 65536),
        (t += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320)));
  }
  return t;
}
var Fu = -1;
function hd(n) {
  this.tokens = [].slice.call(n);
}
hd.prototype = {
  endOfStream: function () {
    return !this.tokens.length;
  },
  read: function () {
    return this.tokens.length ? this.tokens.shift() : Fu;
  },
  prepend: function (n) {
    if (Array.isArray(n))
      for (var t = n; t.length; ) this.tokens.unshift(t.pop());
    else this.tokens.unshift(n);
  },
  push: function (n) {
    if (Array.isArray(n))
      for (var t = n; t.length; ) this.tokens.push(t.shift());
    else this.tokens.push(n);
  },
};
var Ma = -1;
function Sf(n, t) {
  if (n) throw TypeError("Decoder error");
  return t || 65533;
}
var Du = "utf-8";
function zu(n, t) {
  if (!(this instanceof zu)) return new zu(n, t);
  if (((n = n !== void 0 ? String(n).toLowerCase() : Du), n !== Du))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (t = Al(t)),
    (this._streaming = !1),
    (this._BOMseen = !1),
    (this._decoder = null),
    (this._fatal = !!t.fatal),
    (this._ignoreBOM = !!t.ignoreBOM),
    Object.defineProperty(this, "encoding", { value: "utf-8" }),
    Object.defineProperty(this, "fatal", { value: this._fatal }),
    Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
zu.prototype = {
  decode: function (t, e) {
    var r;
    typeof t == "object" && t instanceof ArrayBuffer
      ? (r = new Uint8Array(t))
      : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer
      ? (r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
      : (r = new Uint8Array(0)),
      (e = Al(e)),
      this._streaming ||
        ((this._decoder = new Sb({ fatal: this._fatal })),
        (this._BOMseen = !1)),
      (this._streaming = !!e.stream);
    for (
      var i = new hd(r), s = [], o;
      !i.endOfStream() && ((o = this._decoder.handler(i, i.read())), o !== Ma);

    )
      o !== null && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    if (!this._streaming) {
      do {
        if (((o = this._decoder.handler(i, i.read())), o === Ma)) break;
        o !== null && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
      } while (!i.endOfStream());
      this._decoder = null;
    }
    return (
      s.length &&
        ["utf-8"].indexOf(this.encoding) !== -1 &&
        !this._ignoreBOM &&
        !this._BOMseen &&
        (s[0] === 65279
          ? ((this._BOMseen = !0), s.shift())
          : (this._BOMseen = !0)),
      vb(s)
    );
  },
};
function Hu(n, t) {
  if (!(this instanceof Hu)) return new Hu(n, t);
  if (((n = n !== void 0 ? String(n).toLowerCase() : Du), n !== Du))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (t = Al(t)),
    (this._streaming = !1),
    (this._encoder = null),
    (this._options = { fatal: !!t.fatal }),
    Object.defineProperty(this, "encoding", { value: "utf-8" });
}
Hu.prototype = {
  encode: function (t, e) {
    (t = t ? String(t) : ""),
      (e = Al(e)),
      this._streaming || (this._encoder = new Ib(this._options)),
      (this._streaming = !!e.stream);
    for (
      var r = [], i = new hd(kb(t)), s;
      !i.endOfStream() && ((s = this._encoder.handler(i, i.read())), s !== Ma);

    )
      Array.isArray(s) ? r.push.apply(r, s) : r.push(s);
    if (!this._streaming) {
      for (; (s = this._encoder.handler(i, i.read())), s !== Ma; )
        Array.isArray(s) ? r.push.apply(r, s) : r.push(s);
      this._encoder = null;
    }
    return new Uint8Array(r);
  },
};
function Sb(n) {
  var t = n.fatal,
    e = 0,
    r = 0,
    i = 0,
    s = 128,
    o = 191;
  this.handler = function (a, c) {
    if (c === Fu && i !== 0) return (i = 0), Sf(t);
    if (c === Fu) return Ma;
    if (i === 0) {
      if (yi(c, 0, 127)) return c;
      if (yi(c, 194, 223)) (i = 1), (e = c - 192);
      else if (yi(c, 224, 239))
        c === 224 && (s = 160), c === 237 && (o = 159), (i = 2), (e = c - 224);
      else if (yi(c, 240, 244))
        c === 240 && (s = 144), c === 244 && (o = 143), (i = 3), (e = c - 240);
      else return Sf(t);
      return (e = e << (6 * i)), null;
    }
    if (!yi(c, s, o))
      return (e = i = r = 0), (s = 128), (o = 191), a.prepend(c), Sf(t);
    if (
      ((s = 128),
      (o = 191),
      (r += 1),
      (e += (c - 128) << (6 * (i - r))),
      r !== i)
    )
      return null;
    var f = e;
    return (e = i = r = 0), f;
  };
}
function Ib(n) {
  n.fatal,
    (this.handler = function (t, e) {
      if (e === Fu) return Ma;
      if (yi(e, 0, 127)) return e;
      var r, i;
      yi(e, 128, 2047)
        ? ((r = 1), (i = 192))
        : yi(e, 2048, 65535)
        ? ((r = 2), (i = 224))
        : yi(e, 65536, 1114111) && ((r = 3), (i = 240));
      for (var s = [(e >> (6 * r)) + i]; r > 0; ) {
        var o = e >> (6 * (r - 1));
        s.push(128 | (o & 63)), (r -= 1);
      }
      return s;
    });
}
const Bb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, TextDecoder: zu, TextEncoder: Hu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Rb = xg(Bb);
var C0;
function Pb() {
  if (C0) return ce;
  C0 = 1;
  var n =
      (ce && ce.__createBinding) ||
      (Object.create
        ? function (x, B, F, v) {
            v === void 0 && (v = F),
              Object.defineProperty(x, v, {
                enumerable: !0,
                get: function () {
                  return B[F];
                },
              });
          }
        : function (x, B, F, v) {
            v === void 0 && (v = F), (x[v] = B[F]);
          }),
    t =
      (ce && ce.__setModuleDefault) ||
      (Object.create
        ? function (x, B) {
            Object.defineProperty(x, "default", { enumerable: !0, value: B });
          }
        : function (x, B) {
            x.default = B;
          }),
    e =
      (ce && ce.__decorate) ||
      function (x, B, F, v) {
        var y = arguments.length,
          u =
            y < 3
              ? B
              : v === null
              ? (v = Object.getOwnPropertyDescriptor(B, F))
              : v,
          l;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          u = Reflect.decorate(x, B, F, v);
        else
          for (var g = x.length - 1; g >= 0; g--)
            (l = x[g]) &&
              (u = (y < 3 ? l(u) : y > 3 ? l(B, F, u) : l(B, F)) || u);
        return y > 3 && u && Object.defineProperty(B, F, u), u;
      },
    r =
      (ce && ce.__importStar) ||
      function (x) {
        if (x && x.__esModule) return x;
        var B = {};
        if (x != null)
          for (var F in x)
            F !== "default" && Object.hasOwnProperty.call(x, F) && n(B, x, F);
        return t(B, x), B;
      },
    i =
      (ce && ce.__importDefault) ||
      function (x) {
        return x && x.__esModule ? x : { default: x };
      };
  Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.deserializeUnchecked =
      ce.deserialize =
      ce.serialize =
      ce.BinaryReader =
      ce.BinaryWriter =
      ce.BorshError =
      ce.baseDecode =
      ce.baseEncode =
        void 0);
  const s = i(sy()),
    o = i(xb()),
    a = r(Rb),
    c = typeof TextDecoder != "function" ? a.TextDecoder : TextDecoder,
    f = new c("utf-8", { fatal: !0 });
  function h(x) {
    return (
      typeof x == "string" && (x = Ie.from(x, "utf8")),
      o.default.encode(Ie.from(x))
    );
  }
  ce.baseEncode = h;
  function b(x) {
    return Ie.from(o.default.decode(x));
  }
  ce.baseDecode = b;
  const S = 1024;
  class P extends Error {
    constructor(B) {
      super(B), (this.fieldPath = []), (this.originalMessage = B);
    }
    addToFieldPath(B) {
      this.fieldPath.splice(0, 0, B),
        (this.message = this.originalMessage + ": " + this.fieldPath.join("."));
    }
  }
  ce.BorshError = P;
  class M {
    constructor() {
      (this.buf = Ie.alloc(S)), (this.length = 0);
    }
    maybeResize() {
      this.buf.length < 16 + this.length &&
        (this.buf = Ie.concat([this.buf, Ie.alloc(S)]));
    }
    writeU8(B) {
      this.maybeResize(),
        this.buf.writeUInt8(B, this.length),
        (this.length += 1);
    }
    writeU16(B) {
      this.maybeResize(),
        this.buf.writeUInt16LE(B, this.length),
        (this.length += 2);
    }
    writeU32(B) {
      this.maybeResize(),
        this.buf.writeUInt32LE(B, this.length),
        (this.length += 4);
    }
    writeU64(B) {
      this.maybeResize(),
        this.writeBuffer(Ie.from(new s.default(B).toArray("le", 8)));
    }
    writeU128(B) {
      this.maybeResize(),
        this.writeBuffer(Ie.from(new s.default(B).toArray("le", 16)));
    }
    writeU256(B) {
      this.maybeResize(),
        this.writeBuffer(Ie.from(new s.default(B).toArray("le", 32)));
    }
    writeU512(B) {
      this.maybeResize(),
        this.writeBuffer(Ie.from(new s.default(B).toArray("le", 64)));
    }
    writeBuffer(B) {
      (this.buf = Ie.concat([
        Ie.from(this.buf.subarray(0, this.length)),
        B,
        Ie.alloc(S),
      ])),
        (this.length += B.length);
    }
    writeString(B) {
      this.maybeResize();
      const F = Ie.from(B, "utf8");
      this.writeU32(F.length), this.writeBuffer(F);
    }
    writeFixedArray(B) {
      this.writeBuffer(Ie.from(B));
    }
    writeArray(B, F) {
      this.maybeResize(), this.writeU32(B.length);
      for (const v of B) this.maybeResize(), F(v);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  }
  ce.BinaryWriter = M;
  function N(x, B, F) {
    const v = F.value;
    F.value = function (...y) {
      try {
        return v.apply(this, y);
      } catch (u) {
        if (u instanceof RangeError) {
          const l = u.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(l) >= 0)
            throw new P("Reached the end of buffer when deserializing");
        }
        throw u;
      }
    };
  }
  class D {
    constructor(B) {
      (this.buf = B), (this.offset = 0);
    }
    readU8() {
      const B = this.buf.readUInt8(this.offset);
      return (this.offset += 1), B;
    }
    readU16() {
      const B = this.buf.readUInt16LE(this.offset);
      return (this.offset += 2), B;
    }
    readU32() {
      const B = this.buf.readUInt32LE(this.offset);
      return (this.offset += 4), B;
    }
    readU64() {
      const B = this.readBuffer(8);
      return new s.default(B, "le");
    }
    readU128() {
      const B = this.readBuffer(16);
      return new s.default(B, "le");
    }
    readU256() {
      const B = this.readBuffer(32);
      return new s.default(B, "le");
    }
    readU512() {
      const B = this.readBuffer(64);
      return new s.default(B, "le");
    }
    readBuffer(B) {
      if (this.offset + B > this.buf.length)
        throw new P(`Expected buffer length ${B} isn't within bounds`);
      const F = this.buf.slice(this.offset, this.offset + B);
      return (this.offset += B), F;
    }
    readString() {
      const B = this.readU32(),
        F = this.readBuffer(B);
      try {
        return f.decode(F);
      } catch (v) {
        throw new P(`Error decoding UTF-8 string: ${v}`);
      }
    }
    readFixedArray(B) {
      return new Uint8Array(this.readBuffer(B));
    }
    readArray(B) {
      const F = this.readU32(),
        v = Array();
      for (let y = 0; y < F; ++y) v.push(B());
      return v;
    }
  }
  e([N], D.prototype, "readU8", null),
    e([N], D.prototype, "readU16", null),
    e([N], D.prototype, "readU32", null),
    e([N], D.prototype, "readU64", null),
    e([N], D.prototype, "readU128", null),
    e([N], D.prototype, "readU256", null),
    e([N], D.prototype, "readU512", null),
    e([N], D.prototype, "readString", null),
    e([N], D.prototype, "readFixedArray", null),
    e([N], D.prototype, "readArray", null),
    (ce.BinaryReader = D);
  function q(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
  function z(x, B, F, v, y) {
    try {
      if (typeof v == "string") y[`write${q(v)}`](F);
      else if (v instanceof Array)
        if (typeof v[0] == "number") {
          if (F.length !== v[0])
            throw new P(
              `Expecting byte array of length ${v[0]}, but got ${F.length} bytes`
            );
          y.writeFixedArray(F);
        } else if (v.length === 2 && typeof v[1] == "number") {
          if (F.length !== v[1])
            throw new P(
              `Expecting byte array of length ${v[1]}, but got ${F.length} bytes`
            );
          for (let u = 0; u < v[1]; u++) z(x, null, F[u], v[0], y);
        } else
          y.writeArray(F, (u) => {
            z(x, B, u, v[0], y);
          });
      else if (v.kind !== void 0)
        switch (v.kind) {
          case "option": {
            F == null ? y.writeU8(0) : (y.writeU8(1), z(x, B, F, v.type, y));
            break;
          }
          case "map": {
            y.writeU32(F.size),
              F.forEach((u, l) => {
                z(x, B, l, v.key, y), z(x, B, u, v.value, y);
              });
            break;
          }
          default:
            throw new P(`FieldType ${v} unrecognized`);
        }
      else V(x, F, y);
    } catch (u) {
      throw (u instanceof P && u.addToFieldPath(B), u);
    }
  }
  function V(x, B, F) {
    if (typeof B.borshSerialize == "function") {
      B.borshSerialize(F);
      return;
    }
    const v = x.get(B.constructor);
    if (!v) throw new P(`Class ${B.constructor.name} is missing in schema`);
    if (v.kind === "struct")
      v.fields.map(([y, u]) => {
        z(x, y, B[y], u, F);
      });
    else if (v.kind === "enum") {
      const y = B[v.field];
      for (let u = 0; u < v.values.length; ++u) {
        const [l, g] = v.values[u];
        if (l === y) {
          F.writeU8(u), z(x, l, B[l], g, F);
          break;
        }
      }
    } else
      throw new P(
        `Unexpected schema kind: ${v.kind} for ${B.constructor.name}`
      );
  }
  function et(x, B, F = M) {
    const v = new F();
    return V(x, B, v), v.toArray();
  }
  ce.serialize = et;
  function it(x, B, F, v) {
    try {
      if (typeof F == "string") return v[`read${q(F)}`]();
      if (F instanceof Array) {
        if (typeof F[0] == "number") return v.readFixedArray(F[0]);
        if (typeof F[1] == "number") {
          const y = [];
          for (let u = 0; u < F[1]; u++) y.push(it(x, null, F[0], v));
          return y;
        } else return v.readArray(() => it(x, B, F[0], v));
      }
      if (F.kind === "option") return v.readU8() ? it(x, B, F.type, v) : void 0;
      if (F.kind === "map") {
        let y = new Map();
        const u = v.readU32();
        for (let l = 0; l < u; l++) {
          const g = it(x, B, F.key, v),
            k = it(x, B, F.value, v);
          y.set(g, k);
        }
        return y;
      }
      return X(x, F, v);
    } catch (y) {
      throw (y instanceof P && y.addToFieldPath(B), y);
    }
  }
  function X(x, B, F) {
    if (typeof B.borshDeserialize == "function") return B.borshDeserialize(F);
    const v = x.get(B);
    if (!v) throw new P(`Class ${B.name} is missing in schema`);
    if (v.kind === "struct") {
      const y = {};
      for (const [u, l] of x.get(B).fields) y[u] = it(x, u, l, F);
      return new B(y);
    }
    if (v.kind === "enum") {
      const y = F.readU8();
      if (y >= v.values.length) throw new P(`Enum index: ${y} is out of range`);
      const [u, l] = v.values[y],
        g = it(x, u, l, F);
      return new B({ [u]: g });
    }
    throw new P(`Unexpected schema kind: ${v.kind} for ${B.constructor.name}`);
  }
  function nt(x, B, F, v = D) {
    const y = new v(F),
      u = X(x, B, y);
    if (y.offset < F.length)
      throw new P(
        `Unexpected ${F.length - y.offset} bytes after deserialized data`
      );
    return u;
  }
  ce.deserialize = nt;
  function R(x, B, F, v = D) {
    const y = new v(F);
    return X(x, B, y);
  }
  return (ce.deserializeUnchecked = R), ce;
}
var If = Pb(),
  ct = {},
  N0;
function Cb() {
  if (N0) return ct;
  (N0 = 1),
    Object.defineProperty(ct, "__esModule", { value: !0 }),
    (ct.s16 =
      ct.s8 =
      ct.nu64be =
      ct.u48be =
      ct.u40be =
      ct.u32be =
      ct.u24be =
      ct.u16be =
      ct.nu64 =
      ct.u48 =
      ct.u40 =
      ct.u32 =
      ct.u24 =
      ct.u16 =
      ct.u8 =
      ct.offset =
      ct.greedy =
      ct.Constant =
      ct.UTF8 =
      ct.CString =
      ct.Blob =
      ct.Boolean =
      ct.BitField =
      ct.BitStructure =
      ct.VariantLayout =
      ct.Union =
      ct.UnionLayoutDiscriminator =
      ct.UnionDiscriminator =
      ct.Structure =
      ct.Sequence =
      ct.DoubleBE =
      ct.Double =
      ct.FloatBE =
      ct.Float =
      ct.NearInt64BE =
      ct.NearInt64 =
      ct.NearUInt64BE =
      ct.NearUInt64 =
      ct.IntBE =
      ct.Int =
      ct.UIntBE =
      ct.UInt =
      ct.OffsetLayout =
      ct.GreedyCount =
      ct.ExternalLayout =
      ct.bindConstructorLayout =
      ct.nameWithProperty =
      ct.Layout =
      ct.uint8ArrayToBuffer =
      ct.checkUint8Array =
        void 0),
    (ct.constant =
      ct.utf8 =
      ct.cstr =
      ct.blob =
      ct.unionLayoutDiscriminator =
      ct.union =
      ct.seq =
      ct.bits =
      ct.struct =
      ct.f64be =
      ct.f64 =
      ct.f32be =
      ct.f32 =
      ct.ns64be =
      ct.s48be =
      ct.s40be =
      ct.s32be =
      ct.s24be =
      ct.s16be =
      ct.ns64 =
      ct.s48 =
      ct.s40 =
      ct.s32 =
      ct.s24 =
        void 0);
  const n = fd();
  function t(d) {
    if (!(d instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  ct.checkUint8Array = t;
  function e(d) {
    return t(d), n.Buffer.from(d.buffer, d.byteOffset, d.length);
  }
  ct.uint8ArrayToBuffer = e;
  let r = class {
    constructor(p, T) {
      if (!Number.isInteger(p)) throw new TypeError("span must be an integer");
      (this.span = p), (this.property = T);
    }
    makeDestinationObject() {
      return {};
    }
    getSpan(p, T) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(p) {
      const T = Object.create(this.constructor.prototype);
      return Object.assign(T, this), (T.property = p), T;
    }
    fromArray(p) {}
  };
  ct.Layout = r;
  function i(d, p) {
    return p.property ? d + "[" + p.property + "]" : d;
  }
  ct.nameWithProperty = i;
  function s(d, p) {
    if (typeof d != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(d, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(p && p instanceof r)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(p, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    (d.layout_ = p),
      (p.boundConstructor_ = d),
      (p.makeDestinationObject = () => new d()),
      Object.defineProperty(d.prototype, "encode", {
        value(T, H) {
          return p.encode(this, T, H);
        },
        writable: !0,
      }),
      Object.defineProperty(d, "decode", {
        value(T, H) {
          return p.decode(T, H);
        },
        writable: !0,
      });
  }
  ct.bindConstructorLayout = s;
  class o extends r {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  }
  ct.ExternalLayout = o;
  class a extends o {
    constructor(p = 1, T) {
      if (!Number.isInteger(p) || 0 >= p)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, T), (this.elementSpan = p);
    }
    isCount() {
      return !0;
    }
    decode(p, T = 0) {
      t(p);
      const H = p.length - T;
      return Math.floor(H / this.elementSpan);
    }
    encode(p, T, H) {
      return 0;
    }
  }
  ct.GreedyCount = a;
  class c extends o {
    constructor(p, T = 0, H) {
      if (!(p instanceof r)) throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(T))
        throw new TypeError("offset must be integer or undefined");
      super(p.span, H || p.property), (this.layout = p), (this.offset = T);
    }
    isCount() {
      return this.layout instanceof f || this.layout instanceof h;
    }
    decode(p, T = 0) {
      return this.layout.decode(p, T + this.offset);
    }
    encode(p, T, H = 0) {
      return this.layout.encode(p, T, H + this.offset);
    }
  }
  ct.OffsetLayout = c;
  class f extends r {
    constructor(p, T) {
      if ((super(p, T), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(p, T = 0) {
      return e(p).readUIntLE(T, this.span);
    }
    encode(p, T, H = 0) {
      return e(T).writeUIntLE(p, H, this.span), this.span;
    }
  }
  ct.UInt = f;
  class h extends r {
    constructor(p, T) {
      if ((super(p, T), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(p, T = 0) {
      return e(p).readUIntBE(T, this.span);
    }
    encode(p, T, H = 0) {
      return e(T).writeUIntBE(p, H, this.span), this.span;
    }
  }
  ct.UIntBE = h;
  class b extends r {
    constructor(p, T) {
      if ((super(p, T), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(p, T = 0) {
      return e(p).readIntLE(T, this.span);
    }
    encode(p, T, H = 0) {
      return e(T).writeIntLE(p, H, this.span), this.span;
    }
  }
  ct.Int = b;
  class S extends r {
    constructor(p, T) {
      if ((super(p, T), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(p, T = 0) {
      return e(p).readIntBE(T, this.span);
    }
    encode(p, T, H = 0) {
      return e(T).writeIntBE(p, H, this.span), this.span;
    }
  }
  ct.IntBE = S;
  const P = Math.pow(2, 32);
  function M(d) {
    const p = Math.floor(d / P),
      T = d - p * P;
    return { hi32: p, lo32: T };
  }
  function N(d, p) {
    return d * P + p;
  }
  class D extends r {
    constructor(p) {
      super(8, p);
    }
    decode(p, T = 0) {
      const H = e(p),
        J = H.readUInt32LE(T),
        at = H.readUInt32LE(T + 4);
      return N(at, J);
    }
    encode(p, T, H = 0) {
      const J = M(p),
        at = e(T);
      return at.writeUInt32LE(J.lo32, H), at.writeUInt32LE(J.hi32, H + 4), 8;
    }
  }
  ct.NearUInt64 = D;
  class q extends r {
    constructor(p) {
      super(8, p);
    }
    decode(p, T = 0) {
      const H = e(p),
        J = H.readUInt32BE(T),
        at = H.readUInt32BE(T + 4);
      return N(J, at);
    }
    encode(p, T, H = 0) {
      const J = M(p),
        at = e(T);
      return at.writeUInt32BE(J.hi32, H), at.writeUInt32BE(J.lo32, H + 4), 8;
    }
  }
  ct.NearUInt64BE = q;
  class z extends r {
    constructor(p) {
      super(8, p);
    }
    decode(p, T = 0) {
      const H = e(p),
        J = H.readUInt32LE(T),
        at = H.readInt32LE(T + 4);
      return N(at, J);
    }
    encode(p, T, H = 0) {
      const J = M(p),
        at = e(T);
      return at.writeUInt32LE(J.lo32, H), at.writeInt32LE(J.hi32, H + 4), 8;
    }
  }
  ct.NearInt64 = z;
  class V extends r {
    constructor(p) {
      super(8, p);
    }
    decode(p, T = 0) {
      const H = e(p),
        J = H.readInt32BE(T),
        at = H.readUInt32BE(T + 4);
      return N(J, at);
    }
    encode(p, T, H = 0) {
      const J = M(p),
        at = e(T);
      return at.writeInt32BE(J.hi32, H), at.writeUInt32BE(J.lo32, H + 4), 8;
    }
  }
  ct.NearInt64BE = V;
  class et extends r {
    constructor(p) {
      super(4, p);
    }
    decode(p, T = 0) {
      return e(p).readFloatLE(T);
    }
    encode(p, T, H = 0) {
      return e(T).writeFloatLE(p, H), 4;
    }
  }
  ct.Float = et;
  class it extends r {
    constructor(p) {
      super(4, p);
    }
    decode(p, T = 0) {
      return e(p).readFloatBE(T);
    }
    encode(p, T, H = 0) {
      return e(T).writeFloatBE(p, H), 4;
    }
  }
  ct.FloatBE = it;
  class X extends r {
    constructor(p) {
      super(8, p);
    }
    decode(p, T = 0) {
      return e(p).readDoubleLE(T);
    }
    encode(p, T, H = 0) {
      return e(T).writeDoubleLE(p, H), 8;
    }
  }
  ct.Double = X;
  class nt extends r {
    constructor(p) {
      super(8, p);
    }
    decode(p, T = 0) {
      return e(p).readDoubleBE(T);
    }
    encode(p, T, H = 0) {
      return e(T).writeDoubleBE(p, H), 8;
    }
  }
  ct.DoubleBE = nt;
  class R extends r {
    constructor(p, T, H) {
      if (!(p instanceof r))
        throw new TypeError("elementLayout must be a Layout");
      if (!((T instanceof o && T.isCount()) || (Number.isInteger(T) && 0 <= T)))
        throw new TypeError(
          "count must be non-negative integer or an unsigned integer ExternalLayout"
        );
      let J = -1;
      !(T instanceof o) && 0 < p.span && (J = T * p.span),
        super(J, H),
        (this.elementLayout = p),
        (this.count = T);
    }
    getSpan(p, T = 0) {
      if (0 <= this.span) return this.span;
      let H = 0,
        J = this.count;
      if ((J instanceof o && (J = J.decode(p, T)), 0 < this.elementLayout.span))
        H = J * this.elementLayout.span;
      else {
        let at = 0;
        for (; at < J; ) (H += this.elementLayout.getSpan(p, T + H)), ++at;
      }
      return H;
    }
    decode(p, T = 0) {
      const H = [];
      let J = 0,
        at = this.count;
      for (at instanceof o && (at = at.decode(p, T)); J < at; )
        H.push(this.elementLayout.decode(p, T)),
          (T += this.elementLayout.getSpan(p, T)),
          (J += 1);
      return H;
    }
    encode(p, T, H = 0) {
      const J = this.elementLayout,
        at = p.reduce((yt, wt) => yt + J.encode(wt, T, H + yt), 0);
      return this.count instanceof o && this.count.encode(p.length, T, H), at;
    }
  }
  ct.Sequence = R;
  class x extends r {
    constructor(p, T, H) {
      if (
        !(Array.isArray(p) && p.reduce((at, yt) => at && yt instanceof r, !0))
      )
        throw new TypeError("fields must be array of Layout instances");
      typeof T == "boolean" && H === void 0 && ((H = T), (T = void 0));
      for (const at of p)
        if (0 > at.span && at.property === void 0)
          throw new Error(
            "fields cannot contain unnamed variable-length layout"
          );
      let J = -1;
      try {
        J = p.reduce((at, yt) => at + yt.getSpan(), 0);
      } catch {}
      super(J, T), (this.fields = p), (this.decodePrefixes = !!H);
    }
    getSpan(p, T = 0) {
      if (0 <= this.span) return this.span;
      let H = 0;
      try {
        H = this.fields.reduce((J, at) => {
          const yt = at.getSpan(p, T);
          return (T += yt), J + yt;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return H;
    }
    decode(p, T = 0) {
      t(p);
      const H = this.makeDestinationObject();
      for (const J of this.fields)
        if (
          (J.property !== void 0 && (H[J.property] = J.decode(p, T)),
          (T += J.getSpan(p, T)),
          this.decodePrefixes && p.length === T)
        )
          break;
      return H;
    }
    encode(p, T, H = 0) {
      const J = H;
      let at = 0,
        yt = 0;
      for (const wt of this.fields) {
        let Ut = wt.span;
        if (((yt = 0 < Ut ? Ut : 0), wt.property !== void 0)) {
          const Rt = p[wt.property];
          Rt !== void 0 &&
            ((yt = wt.encode(Rt, T, H)), 0 > Ut && (Ut = wt.getSpan(T, H)));
        }
        (at = H), (H += Ut);
      }
      return at + yt - J;
    }
    fromArray(p) {
      const T = this.makeDestinationObject();
      for (const H of this.fields)
        H.property !== void 0 && 0 < p.length && (T[H.property] = p.shift());
      return T;
    }
    layoutFor(p) {
      if (typeof p != "string") throw new TypeError("property must be string");
      for (const T of this.fields) if (T.property === p) return T;
    }
    offsetOf(p) {
      if (typeof p != "string") throw new TypeError("property must be string");
      let T = 0;
      for (const H of this.fields) {
        if (H.property === p) return T;
        0 > H.span ? (T = -1) : 0 <= T && (T += H.span);
      }
    }
  }
  ct.Structure = x;
  class B {
    constructor(p) {
      this.property = p;
    }
    decode(p, T) {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode(p, T, H) {
      throw new Error("UnionDiscriminator is abstract");
    }
  }
  ct.UnionDiscriminator = B;
  class F extends B {
    constructor(p, T) {
      if (!(p instanceof o && p.isCount()))
        throw new TypeError(
          "layout must be an unsigned integer ExternalLayout"
        );
      super(T || p.property || "variant"), (this.layout = p);
    }
    decode(p, T) {
      return this.layout.decode(p, T);
    }
    encode(p, T, H) {
      return this.layout.encode(p, T, H);
    }
  }
  ct.UnionLayoutDiscriminator = F;
  class v extends r {
    constructor(p, T, H) {
      let J;
      if (p instanceof f || p instanceof h) J = new F(new c(p));
      else if (p instanceof o && p.isCount()) J = new F(p);
      else if (p instanceof B) J = p;
      else
        throw new TypeError(
          "discr must be a UnionDiscriminator or an unsigned integer layout"
        );
      if ((T === void 0 && (T = null), !(T === null || T instanceof r)))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (T !== null) {
        if (0 > T.span)
          throw new Error("defaultLayout must have constant span");
        T.property === void 0 && (T = T.replicate("content"));
      }
      let at = -1;
      T &&
        ((at = T.span),
        0 <= at && (p instanceof f || p instanceof h) && (at += J.layout.span)),
        super(at, H),
        (this.discriminator = J),
        (this.usesPrefixDiscriminator = p instanceof f || p instanceof h),
        (this.defaultLayout = T),
        (this.registry = {});
      let yt = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (wt) {
        return yt(wt);
      }),
        (this.configGetSourceVariant = function (wt) {
          yt = wt.bind(this);
        });
    }
    getSpan(p, T = 0) {
      if (0 <= this.span) return this.span;
      const H = this.getVariant(p, T);
      if (!H)
        throw new Error("unable to determine span for unrecognized variant");
      return H.getSpan(p, T);
    }
    defaultGetSourceVariant(p) {
      if (
        Object.prototype.hasOwnProperty.call(p, this.discriminator.property)
      ) {
        if (
          this.defaultLayout &&
          this.defaultLayout.property &&
          Object.prototype.hasOwnProperty.call(p, this.defaultLayout.property)
        )
          return;
        const T = this.registry[p[this.discriminator.property]];
        if (
          T &&
          (!T.layout ||
            (T.property && Object.prototype.hasOwnProperty.call(p, T.property)))
        )
          return T;
      } else
        for (const T in this.registry) {
          const H = this.registry[T];
          if (H.property && Object.prototype.hasOwnProperty.call(p, H.property))
            return H;
        }
      throw new Error("unable to infer src variant");
    }
    decode(p, T = 0) {
      let H;
      const J = this.discriminator,
        at = J.decode(p, T),
        yt = this.registry[at];
      if (yt === void 0) {
        const wt = this.defaultLayout;
        let Ut = 0;
        this.usesPrefixDiscriminator && (Ut = J.layout.span),
          (H = this.makeDestinationObject()),
          (H[J.property] = at),
          (H[wt.property] = wt.decode(p, T + Ut));
      } else H = yt.decode(p, T);
      return H;
    }
    encode(p, T, H = 0) {
      const J = this.getSourceVariant(p);
      if (J === void 0) {
        const at = this.discriminator,
          yt = this.defaultLayout;
        let wt = 0;
        return (
          this.usesPrefixDiscriminator && (wt = at.layout.span),
          at.encode(p[at.property], T, H),
          wt + yt.encode(p[yt.property], T, H + wt)
        );
      }
      return J.encode(p, T, H);
    }
    addVariant(p, T, H) {
      const J = new y(this, p, T, H);
      return (this.registry[p] = J), J;
    }
    getVariant(p, T = 0) {
      let H;
      return (
        p instanceof Uint8Array
          ? (H = this.discriminator.decode(p, T))
          : (H = p),
        this.registry[H]
      );
    }
  }
  ct.Union = v;
  class y extends r {
    constructor(p, T, H, J) {
      if (!(p instanceof v)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(T) || 0 > T)
        throw new TypeError("variant must be a (non-negative) integer");
      if ((typeof H == "string" && J === void 0 && ((J = H), (H = null)), H)) {
        if (!(H instanceof r)) throw new TypeError("layout must be a Layout");
        if (
          p.defaultLayout !== null &&
          0 <= H.span &&
          H.span > p.defaultLayout.span
        )
          throw new Error("variant span exceeds span of containing union");
        if (typeof J != "string")
          throw new TypeError("variant must have a String property");
      }
      let at = p.span;
      0 > p.span &&
        ((at = H ? H.span : 0),
        0 <= at &&
          p.usesPrefixDiscriminator &&
          (at += p.discriminator.layout.span)),
        super(at, J),
        (this.union = p),
        (this.variant = T),
        (this.layout = H || null);
    }
    getSpan(p, T = 0) {
      if (0 <= this.span) return this.span;
      let H = 0;
      this.union.usesPrefixDiscriminator &&
        (H = this.union.discriminator.layout.span);
      let J = 0;
      return this.layout && (J = this.layout.getSpan(p, T + H)), H + J;
    }
    decode(p, T = 0) {
      const H = this.makeDestinationObject();
      if (this !== this.union.getVariant(p, T))
        throw new Error("variant mismatch");
      let J = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (J = this.union.discriminator.layout.span),
        this.layout
          ? (H[this.property] = this.layout.decode(p, T + J))
          : this.property
          ? (H[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (H[this.union.discriminator.property] = this.variant),
        H
      );
    }
    encode(p, T, H = 0) {
      let J = 0;
      if (
        (this.union.usesPrefixDiscriminator &&
          (J = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(p, this.property))
      )
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, T, H);
      let at = J;
      if (
        this.layout &&
        (this.layout.encode(p[this.property], T, H + J),
        (at += this.layout.getSpan(T, H + J)),
        0 <= this.union.span && at > this.union.span)
      )
        throw new Error("encoded variant overruns containing union");
      return at;
    }
    fromArray(p) {
      if (this.layout) return this.layout.fromArray(p);
    }
  }
  ct.VariantLayout = y;
  function u(d) {
    return 0 > d && (d += 4294967296), d;
  }
  class l extends r {
    constructor(p, T, H) {
      if (!(p instanceof f || p instanceof h))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (
        (typeof T == "string" && H === void 0 && ((H = T), (T = !1)),
        4 < p.span)
      )
        throw new RangeError("word cannot exceed 32 bits");
      super(p.span, H), (this.word = p), (this.msb = !!T), (this.fields = []);
      let J = 0;
      (this._packedSetValue = function (at) {
        return (J = u(at)), this;
      }),
        (this._packedGetValue = function () {
          return J;
        });
    }
    decode(p, T = 0) {
      const H = this.makeDestinationObject(),
        J = this.word.decode(p, T);
      this._packedSetValue(J);
      for (const at of this.fields)
        at.property !== void 0 && (H[at.property] = at.decode(p));
      return H;
    }
    encode(p, T, H = 0) {
      const J = this.word.decode(T, H);
      this._packedSetValue(J);
      for (const at of this.fields)
        if (at.property !== void 0) {
          const yt = p[at.property];
          yt !== void 0 && at.encode(yt);
        }
      return this.word.encode(this._packedGetValue(), T, H);
    }
    addField(p, T) {
      const H = new g(this, p, T);
      return this.fields.push(H), H;
    }
    addBoolean(p) {
      const T = new k(this, p);
      return this.fields.push(T), T;
    }
    fieldFor(p) {
      if (typeof p != "string") throw new TypeError("property must be string");
      for (const T of this.fields) if (T.property === p) return T;
    }
  }
  ct.BitStructure = l;
  class g {
    constructor(p, T, H) {
      if (!(p instanceof l))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(T) || 0 >= T)
        throw new TypeError("bits must be positive integer");
      const J = 8 * p.span,
        at = p.fields.reduce((yt, wt) => yt + wt.bits, 0);
      if (T + at > J)
        throw new Error(
          "bits too long for span remainder (" +
            (J - at) +
            " of " +
            J +
            " remain)"
        );
      (this.container = p),
        (this.bits = T),
        (this.valueMask = (1 << T) - 1),
        T === 32 && (this.valueMask = 4294967295),
        (this.start = at),
        this.container.msb && (this.start = J - at - T),
        (this.wordMask = u(this.valueMask << this.start)),
        (this.property = H);
    }
    decode(p, T) {
      const H = this.container._packedGetValue();
      return u(H & this.wordMask) >>> this.start;
    }
    encode(p) {
      if (
        typeof p != "number" ||
        !Number.isInteger(p) ||
        p !== u(p & this.valueMask)
      )
        throw new TypeError(
          i("BitField.encode", this) +
            " value must be integer not exceeding " +
            this.valueMask
        );
      const T = this.container._packedGetValue(),
        H = u(p << this.start);
      this.container._packedSetValue(u(T & ~this.wordMask) | H);
    }
  }
  ct.BitField = g;
  class k extends g {
    constructor(p, T) {
      super(p, 1, T);
    }
    decode(p, T) {
      return !!super.decode(p, T);
    }
    encode(p) {
      typeof p == "boolean" && (p = +p), super.encode(p);
    }
  }
  ct.Boolean = k;
  class I extends r {
    constructor(p, T) {
      if (!((p instanceof o && p.isCount()) || (Number.isInteger(p) && 0 <= p)))
        throw new TypeError(
          "length must be positive integer or an unsigned integer ExternalLayout"
        );
      let H = -1;
      p instanceof o || (H = p), super(H, T), (this.length = p);
    }
    getSpan(p, T) {
      let H = this.span;
      return 0 > H && (H = this.length.decode(p, T)), H;
    }
    decode(p, T = 0) {
      let H = this.span;
      return 0 > H && (H = this.length.decode(p, T)), e(p).slice(T, T + H);
    }
    encode(p, T, H) {
      let J = this.length;
      if (
        (this.length instanceof o && (J = p.length),
        !(p instanceof Uint8Array && J === p.length))
      )
        throw new TypeError(
          i("Blob.encode", this) +
            " requires (length " +
            J +
            ") Uint8Array as src"
        );
      if (H + J > T.length)
        throw new RangeError("encoding overruns Uint8Array");
      const at = e(p);
      return (
        e(T).write(at.toString("hex"), H, J, "hex"),
        this.length instanceof o && this.length.encode(J, T, H),
        J
      );
    }
  }
  ct.Blob = I;
  class _ extends r {
    constructor(p) {
      super(-1, p);
    }
    getSpan(p, T = 0) {
      t(p);
      let H = T;
      for (; H < p.length && p[H] !== 0; ) H += 1;
      return 1 + H - T;
    }
    decode(p, T = 0) {
      const H = this.getSpan(p, T);
      return e(p)
        .slice(T, T + H - 1)
        .toString("utf-8");
    }
    encode(p, T, H = 0) {
      typeof p != "string" && (p = String(p));
      const J = n.Buffer.from(p, "utf8"),
        at = J.length;
      if (H + at > T.length) throw new RangeError("encoding overruns Buffer");
      const yt = e(T);
      return J.copy(yt, H), (yt[H + at] = 0), at + 1;
    }
  }
  ct.CString = _;
  class G extends r {
    constructor(p, T) {
      if (
        (typeof p == "string" && T === void 0 && ((T = p), (p = void 0)),
        p === void 0)
      )
        p = -1;
      else if (!Number.isInteger(p))
        throw new TypeError("maxSpan must be an integer");
      super(-1, T), (this.maxSpan = p);
    }
    getSpan(p, T = 0) {
      return t(p), p.length - T;
    }
    decode(p, T = 0) {
      const H = this.getSpan(p, T);
      if (0 <= this.maxSpan && this.maxSpan < H)
        throw new RangeError("text length exceeds maxSpan");
      return e(p)
        .slice(T, T + H)
        .toString("utf-8");
    }
    encode(p, T, H = 0) {
      typeof p != "string" && (p = String(p));
      const J = n.Buffer.from(p, "utf8"),
        at = J.length;
      if (0 <= this.maxSpan && this.maxSpan < at)
        throw new RangeError("text length exceeds maxSpan");
      if (H + at > T.length) throw new RangeError("encoding overruns Buffer");
      return J.copy(e(T), H), at;
    }
  }
  ct.UTF8 = G;
  class O extends r {
    constructor(p, T) {
      super(0, T), (this.value = p);
    }
    decode(p, T) {
      return this.value;
    }
    encode(p, T, H) {
      return 0;
    }
  }
  return (
    (ct.Constant = O),
    (ct.greedy = (d, p) => new a(d, p)),
    (ct.offset = (d, p, T) => new c(d, p, T)),
    (ct.u8 = (d) => new f(1, d)),
    (ct.u16 = (d) => new f(2, d)),
    (ct.u24 = (d) => new f(3, d)),
    (ct.u32 = (d) => new f(4, d)),
    (ct.u40 = (d) => new f(5, d)),
    (ct.u48 = (d) => new f(6, d)),
    (ct.nu64 = (d) => new D(d)),
    (ct.u16be = (d) => new h(2, d)),
    (ct.u24be = (d) => new h(3, d)),
    (ct.u32be = (d) => new h(4, d)),
    (ct.u40be = (d) => new h(5, d)),
    (ct.u48be = (d) => new h(6, d)),
    (ct.nu64be = (d) => new q(d)),
    (ct.s8 = (d) => new b(1, d)),
    (ct.s16 = (d) => new b(2, d)),
    (ct.s24 = (d) => new b(3, d)),
    (ct.s32 = (d) => new b(4, d)),
    (ct.s40 = (d) => new b(5, d)),
    (ct.s48 = (d) => new b(6, d)),
    (ct.ns64 = (d) => new z(d)),
    (ct.s16be = (d) => new S(2, d)),
    (ct.s24be = (d) => new S(3, d)),
    (ct.s32be = (d) => new S(4, d)),
    (ct.s40be = (d) => new S(5, d)),
    (ct.s48be = (d) => new S(6, d)),
    (ct.ns64be = (d) => new V(d)),
    (ct.f32 = (d) => new et(d)),
    (ct.f32be = (d) => new it(d)),
    (ct.f64 = (d) => new X(d)),
    (ct.f64be = (d) => new nt(d)),
    (ct.struct = (d, p, T) => new x(d, p, T)),
    (ct.bits = (d, p, T) => new l(d, p, T)),
    (ct.seq = (d, p, T) => new R(d, p, T)),
    (ct.union = (d, p, T) => new v(d, p, T)),
    (ct.unionLayoutDiscriminator = (d, p) => new F(d, p)),
    (ct.blob = (d, p) => new I(d, p)),
    (ct.cstr = (d) => new _(d)),
    (ct.utf8 = (d, p) => new G(d, p)),
    (ct.constant = (d, p) => new O(d, p)),
    ct
  );
}
var $ = Cb(),
  Nb = 8078e3,
  Tb = 8078001,
  _b = 8078004,
  Ob = 8078005,
  Mb = 8078006,
  Lb = 8078011;
function ay(n) {
  return Array.isArray(n)
    ? "%5B" + n.map(ay).join("%2C%20") + "%5D"
    : typeof n == "bigint"
    ? `${n}n`
    : encodeURIComponent(
        String(n != null && Object.getPrototypeOf(n) === null ? { ...n } : n)
      );
}
function Ub([n, t]) {
  return `${n}=${ay(t)}`;
}
function Fb(n) {
  const t = Object.entries(n).map(Ub).join("&");
  return btoa(t);
}
function Db(n, t = {}) {
  {
    let e = `Solana error #${n}; Decode this error by running \`npx @solana/errors decode -- ${n}`;
    return Object.keys(t).length && (e += ` '${Fb(t)}'`), `${e}\``;
  }
}
var Uo = class extends Error {
  constructor(...[t, e]) {
    let r, i;
    if (e) {
      const { cause: o, ...a } = e;
      o && (i = { cause: o }), Object.keys(a).length > 0 && (r = a);
    }
    const s = Db(t, r);
    super(s, i);
    tt(this, "cause", this.cause);
    tt(this, "context");
    (this.context = { __code: t, ...r }), (this.name = "SolanaError");
  }
};
function zb(n, t) {
  return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(n);
}
function Hb(n) {
  return Object.freeze({
    ...n,
    encode: (t) => {
      const e = new Uint8Array(zb(t, n));
      return n.write(t, e, 0), e;
    },
  });
}
function Gb(n) {
  return Object.freeze({ ...n, decode: (t, e = 0) => n.read(t, e)[0] });
}
function xo(n) {
  return "fixedSize" in n && typeof n.fixedSize == "number";
}
function Kb(n, t) {
  if (xo(n) !== xo(t)) throw new Uo(_b);
  if (xo(n) && xo(t) && n.fixedSize !== t.fixedSize)
    throw new Uo(Ob, {
      decoderFixedSize: t.fixedSize,
      encoderFixedSize: n.fixedSize,
    });
  if (!xo(n) && !xo(t) && n.maxSize !== t.maxSize)
    throw new Uo(Mb, { decoderMaxSize: t.maxSize, encoderMaxSize: n.maxSize });
  return {
    ...t,
    ...n,
    decode: t.decode,
    encode: n.encode,
    read: t.read,
    write: n.write,
  };
}
function Vb(n, t, e = 0) {
  if (t.length - e <= 0) throw new Uo(Nb, { codecDescription: n });
}
function Wb(n, t, e, r = 0) {
  const i = e.length - r;
  if (i < t)
    throw new Uo(Tb, { bytesLength: i, codecDescription: n, expected: t });
}
function qb(n, t, e, r) {
  if (r < t || r > e)
    throw new Uo(Lb, { codecDescription: n, max: e, min: t, value: r });
}
function cy(n) {
  return (n == null ? void 0 : n.endian) !== 1;
}
function $b(n) {
  return Hb({
    fixedSize: n.size,
    write(t, e, r) {
      n.range && qb(n.name, n.range[0], n.range[1], t);
      const i = new ArrayBuffer(n.size);
      return (
        n.set(new DataView(i), t, cy(n.config)),
        e.set(new Uint8Array(i), r),
        r + n.size
      );
    },
  });
}
function Qb(n) {
  return Gb({
    fixedSize: n.size,
    read(t, e = 0) {
      Vb(n.name, t, e), Wb(n.name, n.size, t, e);
      const r = new DataView(Jb(t, e, n.size));
      return [n.get(r, cy(n.config)), e + n.size];
    },
  });
}
function Jb(n, t, e) {
  const r = n.byteOffset + (t ?? 0),
    i = e ?? n.byteLength;
  return n.buffer.slice(r, r + i);
}
var uy = (n = {}) =>
    $b({
      config: n,
      name: "u64",
      range: [0n, BigInt("0xffffffffffffffff")],
      set: (t, e, r) => t.setBigUint64(0, BigInt(e), r),
      size: 8,
    }),
  jb = (n = {}) =>
    Qb({
      config: n,
      get: (t, e) => t.getBigUint64(0, e),
      name: "u64",
      size: 8,
    }),
  Zb = (n = {}) => Kb(uy(n), jb(n));
class Yb extends TypeError {
  constructor(t, e) {
    let r;
    const { message: i, explanation: s, ...o } = t,
      { path: a } = t,
      c = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
    super(s ?? c),
      s != null && (this.cause = c),
      Object.assign(this, o),
      (this.name = this.constructor.name),
      (this.failures = () => r ?? (r = [t, ...e()]));
  }
}
function Xb(n) {
  return $c(n) && typeof n[Symbol.iterator] == "function";
}
function $c(n) {
  return typeof n == "object" && n != null;
}
function Gu(n) {
  return $c(n) && !Array.isArray(n);
}
function En(n) {
  return typeof n == "symbol"
    ? n.toString()
    : typeof n == "string"
    ? JSON.stringify(n)
    : `${n}`;
}
function tA(n) {
  const { done: t, value: e } = n.next();
  return t ? void 0 : e;
}
function eA(n, t, e, r) {
  if (n === !0) return;
  n === !1 ? (n = {}) : typeof n == "string" && (n = { message: n });
  const { path: i, branch: s } = t,
    { type: o } = e,
    {
      refinement: a,
      message: c = `Expected a value of type \`${o}\`${
        a ? ` with refinement \`${a}\`` : ""
      }, but received: \`${En(r)}\``,
    } = n;
  return {
    value: r,
    type: o,
    refinement: a,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...n,
    message: c,
  };
}
function* T0(n, t, e, r) {
  Xb(n) || (n = [n]);
  for (const i of n) {
    const s = eA(i, t, e, r);
    s && (yield s);
  }
}
function* dd(n, t, e = {}) {
  const { path: r = [], branch: i = [n], coerce: s = !1, mask: o = !1 } = e,
    a = { path: r, branch: i, mask: o };
  s && (n = t.coercer(n, a));
  let c = "valid";
  for (const f of t.validator(n, a))
    (f.explanation = e.message), (c = "not_valid"), yield [f, void 0];
  for (let [f, h, b] of t.entries(n, a)) {
    const S = dd(h, b, {
      path: f === void 0 ? r : [...r, f],
      branch: f === void 0 ? i : [...i, h],
      coerce: s,
      mask: o,
      message: e.message,
    });
    for (const P of S)
      P[0]
        ? ((c = P[0].refinement != null ? "not_refined" : "not_valid"),
          yield [P[0], void 0])
        : s &&
          ((h = P[1]),
          f === void 0
            ? (n = h)
            : n instanceof Map
            ? n.set(f, h)
            : n instanceof Set
            ? n.add(h)
            : $c(n) && (h !== void 0 || f in n) && (n[f] = h));
  }
  if (c !== "not_valid")
    for (const f of t.refiner(n, a))
      (f.explanation = e.message), (c = "not_refined"), yield [f, void 0];
  c === "valid" && (yield [void 0, n]);
}
let Jn = class {
  constructor(t) {
    const {
      type: e,
      schema: r,
      validator: i,
      refiner: s,
      coercer: o = (c) => c,
      entries: a = function* () {},
    } = t;
    (this.type = e),
      (this.schema = r),
      (this.entries = a),
      (this.coercer = o),
      i
        ? (this.validator = (c, f) => {
            const h = i(c, f);
            return T0(h, f, this, c);
          })
        : (this.validator = () => []),
      s
        ? (this.refiner = (c, f) => {
            const h = s(c, f);
            return T0(h, f, this, c);
          })
        : (this.refiner = () => []);
  }
  assert(t, e) {
    return ly(t, this, e);
  }
  create(t, e) {
    return bt(t, this, e);
  }
  is(t) {
    return fy(t, this);
  }
  mask(t, e) {
    return rA(t, this, e);
  }
  validate(t, e = {}) {
    return Qc(t, this, e);
  }
};
function ly(n, t, e) {
  const r = Qc(n, t, { message: e });
  if (r[0]) throw r[0];
}
function bt(n, t, e) {
  const r = Qc(n, t, { coerce: !0, message: e });
  if (r[0]) throw r[0];
  return r[1];
}
function rA(n, t, e) {
  const r = Qc(n, t, { coerce: !0, mask: !0, message: e });
  if (r[0]) throw r[0];
  return r[1];
}
function fy(n, t) {
  return !Qc(n, t)[0];
}
function Qc(n, t, e = {}) {
  const r = dd(n, t, e),
    i = tA(r);
  return i[0]
    ? [
        new Yb(i[0], function* () {
          for (const o of r) o[0] && (yield o[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function fo(n, t) {
  return new Jn({ type: n, schema: null, validator: t });
}
function nA() {
  return fo("any", () => !0);
}
function At(n) {
  return new Jn({
    type: "array",
    schema: n,
    *entries(t) {
      if (n && Array.isArray(t))
        for (const [e, r] of t.entries()) yield [e, r, n];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return (
        Array.isArray(t) || `Expected an array value, but received: ${En(t)}`
      );
    },
  });
}
function Qn() {
  return fo("boolean", (n) => typeof n == "boolean");
}
function pd(n) {
  return fo(
    "instance",
    (t) =>
      t instanceof n ||
      `Expected a \`${n.name}\` instance, but received: ${En(t)}`
  );
}
function Ce(n) {
  const t = En(n),
    e = typeof n;
  return new Jn({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? n : null,
    validator(r) {
      return r === n || `Expected the literal \`${t}\`, but received: ${En(r)}`;
    },
  });
}
function iA() {
  return fo("never", () => !1);
}
function Et(n) {
  return new Jn({
    ...n,
    validator: (t, e) => t === null || n.validator(t, e),
    refiner: (t, e) => t === null || n.refiner(t, e),
  });
}
function ot() {
  return fo(
    "number",
    (n) =>
      (typeof n == "number" && !isNaN(n)) ||
      `Expected a number, but received: ${En(n)}`
  );
}
function Bt(n) {
  return new Jn({
    ...n,
    validator: (t, e) => t === void 0 || n.validator(t, e),
    refiner: (t, e) => t === void 0 || n.refiner(t, e),
  });
}
function hy(n, t) {
  return new Jn({
    type: "record",
    schema: null,
    *entries(e) {
      if ($c(e))
        for (const r in e) {
          const i = e[r];
          yield [r, r, n], yield [r, i, t];
        }
    },
    validator(e) {
      return Gu(e) || `Expected an object, but received: ${En(e)}`;
    },
    coercer(e) {
      return Gu(e) ? { ...e } : e;
    },
  });
}
function mt() {
  return fo(
    "string",
    (n) => typeof n == "string" || `Expected a string, but received: ${En(n)}`
  );
}
function gd(n) {
  const t = iA();
  return new Jn({
    type: "tuple",
    schema: null,
    *entries(e) {
      if (Array.isArray(e)) {
        const r = Math.max(n.length, e.length);
        for (let i = 0; i < r; i++) yield [i, e[i], n[i] || t];
      }
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array, but received: ${En(e)}`;
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
  });
}
function dt(n) {
  const t = Object.keys(n);
  return new Jn({
    type: "type",
    schema: n,
    *entries(e) {
      if ($c(e)) for (const r of t) yield [r, e[r], n[r]];
    },
    validator(e) {
      return Gu(e) || `Expected an object, but received: ${En(e)}`;
    },
    coercer(e) {
      return Gu(e) ? { ...e } : e;
    },
  });
}
function Rr(n) {
  const t = n.map((e) => e.type).join(" | ");
  return new Jn({
    type: "union",
    schema: null,
    coercer(e, r) {
      for (const i of n) {
        const [s, o] = i.validate(e, { coerce: !0, mask: r.mask });
        if (!s) return o;
      }
      return e;
    },
    validator(e, r) {
      const i = [];
      for (const s of n) {
        const [...o] = dd(e, s, r),
          [a] = o;
        if (a[0]) for (const [c] of o) c && i.push(c);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${En(
          e
        )}`,
        ...i,
      ];
    },
  });
}
function $a() {
  return fo("unknown", () => !0);
}
function Jc(n, t, e) {
  return new Jn({
    ...n,
    coercer: (r, i) => (fy(r, t) ? n.coercer(e(r, i), i) : n.coercer(r, i)),
  });
}
var cu,
  sA = new Uint8Array(16);
function dy() {
  if (
    !cu &&
    ((cu =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !cu)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return cu(sA);
}
const oA =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function El(n) {
  return typeof n == "string" && oA.test(n);
}
var er = [];
for (var Bf = 0; Bf < 256; ++Bf) er.push((Bf + 256).toString(16).substr(1));
function xl(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    e = (
      er[n[t + 0]] +
      er[n[t + 1]] +
      er[n[t + 2]] +
      er[n[t + 3]] +
      "-" +
      er[n[t + 4]] +
      er[n[t + 5]] +
      "-" +
      er[n[t + 6]] +
      er[n[t + 7]] +
      "-" +
      er[n[t + 8]] +
      er[n[t + 9]] +
      "-" +
      er[n[t + 10]] +
      er[n[t + 11]] +
      er[n[t + 12]] +
      er[n[t + 13]] +
      er[n[t + 14]] +
      er[n[t + 15]]
    ).toLowerCase();
  if (!El(e)) throw TypeError("Stringified UUID is invalid");
  return e;
}
var _0,
  Rf,
  Pf = 0,
  Cf = 0;
function aA(n, t, e) {
  var r = (t && e) || 0,
    i = t || new Array(16);
  n = n || {};
  var s = n.node || _0,
    o = n.clockseq !== void 0 ? n.clockseq : Rf;
  if (s == null || o == null) {
    var a = n.random || (n.rng || dy)();
    s == null && (s = _0 = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]),
      o == null && (o = Rf = ((a[6] << 8) | a[7]) & 16383);
  }
  var c = n.msecs !== void 0 ? n.msecs : Date.now(),
    f = n.nsecs !== void 0 ? n.nsecs : Cf + 1,
    h = c - Pf + (f - Cf) / 1e4;
  if (
    (h < 0 && n.clockseq === void 0 && (o = (o + 1) & 16383),
    (h < 0 || c > Pf) && n.nsecs === void 0 && (f = 0),
    f >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (Pf = c), (Cf = f), (Rf = o), (c += 122192928e5);
  var b = ((c & 268435455) * 1e4 + f) % 4294967296;
  (i[r++] = (b >>> 24) & 255),
    (i[r++] = (b >>> 16) & 255),
    (i[r++] = (b >>> 8) & 255),
    (i[r++] = b & 255);
  var S = ((c / 4294967296) * 1e4) & 268435455;
  (i[r++] = (S >>> 8) & 255),
    (i[r++] = S & 255),
    (i[r++] = ((S >>> 24) & 15) | 16),
    (i[r++] = (S >>> 16) & 255),
    (i[r++] = (o >>> 8) | 128),
    (i[r++] = o & 255);
  for (var P = 0; P < 6; ++P) i[r + P] = s[P];
  return t || xl(i);
}
function py(n) {
  if (!El(n)) throw TypeError("Invalid UUID");
  var t,
    e = new Uint8Array(16);
  return (
    (e[0] = (t = parseInt(n.slice(0, 8), 16)) >>> 24),
    (e[1] = (t >>> 16) & 255),
    (e[2] = (t >>> 8) & 255),
    (e[3] = t & 255),
    (e[4] = (t = parseInt(n.slice(9, 13), 16)) >>> 8),
    (e[5] = t & 255),
    (e[6] = (t = parseInt(n.slice(14, 18), 16)) >>> 8),
    (e[7] = t & 255),
    (e[8] = (t = parseInt(n.slice(19, 23), 16)) >>> 8),
    (e[9] = t & 255),
    (e[10] = ((t = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
    (e[11] = (t / 4294967296) & 255),
    (e[12] = (t >>> 24) & 255),
    (e[13] = (t >>> 16) & 255),
    (e[14] = (t >>> 8) & 255),
    (e[15] = t & 255),
    e
  );
}
function cA(n) {
  n = unescape(encodeURIComponent(n));
  for (var t = [], e = 0; e < n.length; ++e) t.push(n.charCodeAt(e));
  return t;
}
var uA = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  lA = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function gy(n, t, e) {
  function r(i, s, o, a) {
    if (
      (typeof i == "string" && (i = cA(i)),
      typeof s == "string" && (s = py(s)),
      s.length !== 16)
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    var c = new Uint8Array(16 + i.length);
    if (
      (c.set(s),
      c.set(i, s.length),
      (c = e(c)),
      (c[6] = (c[6] & 15) | t),
      (c[8] = (c[8] & 63) | 128),
      o)
    ) {
      a = a || 0;
      for (var f = 0; f < 16; ++f) o[a + f] = c[f];
      return o;
    }
    return xl(c);
  }
  try {
    r.name = n;
  } catch {}
  return (r.DNS = uA), (r.URL = lA), r;
}
function fA(n) {
  if (typeof n == "string") {
    var t = unescape(encodeURIComponent(n));
    n = new Uint8Array(t.length);
    for (var e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
  }
  return hA(dA(pA(n), n.length * 8));
}
function hA(n) {
  for (
    var t = [], e = n.length * 32, r = "0123456789abcdef", i = 0;
    i < e;
    i += 8
  ) {
    var s = (n[i >> 5] >>> i % 32) & 255,
      o = parseInt(r.charAt((s >>> 4) & 15) + r.charAt(s & 15), 16);
    t.push(o);
  }
  return t;
}
function yy(n) {
  return (((n + 64) >>> 9) << 4) + 14 + 1;
}
function dA(n, t) {
  (n[t >> 5] |= 128 << t % 32), (n[yy(t) - 1] = t);
  for (
    var e = 1732584193, r = -271733879, i = -1732584194, s = 271733878, o = 0;
    o < n.length;
    o += 16
  ) {
    var a = e,
      c = r,
      f = i,
      h = s;
    (e = hr(e, r, i, s, n[o], 7, -680876936)),
      (s = hr(s, e, r, i, n[o + 1], 12, -389564586)),
      (i = hr(i, s, e, r, n[o + 2], 17, 606105819)),
      (r = hr(r, i, s, e, n[o + 3], 22, -1044525330)),
      (e = hr(e, r, i, s, n[o + 4], 7, -176418897)),
      (s = hr(s, e, r, i, n[o + 5], 12, 1200080426)),
      (i = hr(i, s, e, r, n[o + 6], 17, -1473231341)),
      (r = hr(r, i, s, e, n[o + 7], 22, -45705983)),
      (e = hr(e, r, i, s, n[o + 8], 7, 1770035416)),
      (s = hr(s, e, r, i, n[o + 9], 12, -1958414417)),
      (i = hr(i, s, e, r, n[o + 10], 17, -42063)),
      (r = hr(r, i, s, e, n[o + 11], 22, -1990404162)),
      (e = hr(e, r, i, s, n[o + 12], 7, 1804603682)),
      (s = hr(s, e, r, i, n[o + 13], 12, -40341101)),
      (i = hr(i, s, e, r, n[o + 14], 17, -1502002290)),
      (r = hr(r, i, s, e, n[o + 15], 22, 1236535329)),
      (e = dr(e, r, i, s, n[o + 1], 5, -165796510)),
      (s = dr(s, e, r, i, n[o + 6], 9, -1069501632)),
      (i = dr(i, s, e, r, n[o + 11], 14, 643717713)),
      (r = dr(r, i, s, e, n[o], 20, -373897302)),
      (e = dr(e, r, i, s, n[o + 5], 5, -701558691)),
      (s = dr(s, e, r, i, n[o + 10], 9, 38016083)),
      (i = dr(i, s, e, r, n[o + 15], 14, -660478335)),
      (r = dr(r, i, s, e, n[o + 4], 20, -405537848)),
      (e = dr(e, r, i, s, n[o + 9], 5, 568446438)),
      (s = dr(s, e, r, i, n[o + 14], 9, -1019803690)),
      (i = dr(i, s, e, r, n[o + 3], 14, -187363961)),
      (r = dr(r, i, s, e, n[o + 8], 20, 1163531501)),
      (e = dr(e, r, i, s, n[o + 13], 5, -1444681467)),
      (s = dr(s, e, r, i, n[o + 2], 9, -51403784)),
      (i = dr(i, s, e, r, n[o + 7], 14, 1735328473)),
      (r = dr(r, i, s, e, n[o + 12], 20, -1926607734)),
      (e = pr(e, r, i, s, n[o + 5], 4, -378558)),
      (s = pr(s, e, r, i, n[o + 8], 11, -2022574463)),
      (i = pr(i, s, e, r, n[o + 11], 16, 1839030562)),
      (r = pr(r, i, s, e, n[o + 14], 23, -35309556)),
      (e = pr(e, r, i, s, n[o + 1], 4, -1530992060)),
      (s = pr(s, e, r, i, n[o + 4], 11, 1272893353)),
      (i = pr(i, s, e, r, n[o + 7], 16, -155497632)),
      (r = pr(r, i, s, e, n[o + 10], 23, -1094730640)),
      (e = pr(e, r, i, s, n[o + 13], 4, 681279174)),
      (s = pr(s, e, r, i, n[o], 11, -358537222)),
      (i = pr(i, s, e, r, n[o + 3], 16, -722521979)),
      (r = pr(r, i, s, e, n[o + 6], 23, 76029189)),
      (e = pr(e, r, i, s, n[o + 9], 4, -640364487)),
      (s = pr(s, e, r, i, n[o + 12], 11, -421815835)),
      (i = pr(i, s, e, r, n[o + 15], 16, 530742520)),
      (r = pr(r, i, s, e, n[o + 2], 23, -995338651)),
      (e = gr(e, r, i, s, n[o], 6, -198630844)),
      (s = gr(s, e, r, i, n[o + 7], 10, 1126891415)),
      (i = gr(i, s, e, r, n[o + 14], 15, -1416354905)),
      (r = gr(r, i, s, e, n[o + 5], 21, -57434055)),
      (e = gr(e, r, i, s, n[o + 12], 6, 1700485571)),
      (s = gr(s, e, r, i, n[o + 3], 10, -1894986606)),
      (i = gr(i, s, e, r, n[o + 10], 15, -1051523)),
      (r = gr(r, i, s, e, n[o + 1], 21, -2054922799)),
      (e = gr(e, r, i, s, n[o + 8], 6, 1873313359)),
      (s = gr(s, e, r, i, n[o + 15], 10, -30611744)),
      (i = gr(i, s, e, r, n[o + 6], 15, -1560198380)),
      (r = gr(r, i, s, e, n[o + 13], 21, 1309151649)),
      (e = gr(e, r, i, s, n[o + 4], 6, -145523070)),
      (s = gr(s, e, r, i, n[o + 11], 10, -1120210379)),
      (i = gr(i, s, e, r, n[o + 2], 15, 718787259)),
      (r = gr(r, i, s, e, n[o + 9], 21, -343485551)),
      (e = ss(e, a)),
      (r = ss(r, c)),
      (i = ss(i, f)),
      (s = ss(s, h));
  }
  return [e, r, i, s];
}
function pA(n) {
  if (n.length === 0) return [];
  for (var t = n.length * 8, e = new Uint32Array(yy(t)), r = 0; r < t; r += 8)
    e[r >> 5] |= (n[r / 8] & 255) << r % 32;
  return e;
}
function ss(n, t) {
  var e = (n & 65535) + (t & 65535),
    r = (n >> 16) + (t >> 16) + (e >> 16);
  return (r << 16) | (e & 65535);
}
function gA(n, t) {
  return (n << t) | (n >>> (32 - t));
}
function kl(n, t, e, r, i, s) {
  return ss(gA(ss(ss(t, n), ss(r, s)), i), e);
}
function hr(n, t, e, r, i, s, o) {
  return kl((t & e) | (~t & r), n, t, i, s, o);
}
function dr(n, t, e, r, i, s, o) {
  return kl((t & r) | (e & ~r), n, t, i, s, o);
}
function pr(n, t, e, r, i, s, o) {
  return kl(t ^ e ^ r, n, t, i, s, o);
}
function gr(n, t, e, r, i, s, o) {
  return kl(e ^ (t | ~r), n, t, i, s, o);
}
var yA = gy("v3", 48, fA);
function mA(n, t, e) {
  n = n || {};
  var r = n.random || (n.rng || dy)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    e = e || 0;
    for (var i = 0; i < 16; ++i) t[e + i] = r[i];
    return t;
  }
  return xl(r);
}
function wA(n, t, e, r) {
  switch (n) {
    case 0:
      return (t & e) ^ (~t & r);
    case 1:
      return t ^ e ^ r;
    case 2:
      return (t & e) ^ (t & r) ^ (e & r);
    case 3:
      return t ^ e ^ r;
  }
}
function Nf(n, t) {
  return (n << t) | (n >>> (32 - t));
}
function bA(n) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782],
    e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof n == "string") {
    var r = unescape(encodeURIComponent(n));
    n = [];
    for (var i = 0; i < r.length; ++i) n.push(r.charCodeAt(i));
  } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
  n.push(128);
  for (
    var s = n.length / 4 + 2, o = Math.ceil(s / 16), a = new Array(o), c = 0;
    c < o;
    ++c
  ) {
    for (var f = new Uint32Array(16), h = 0; h < 16; ++h)
      f[h] =
        (n[c * 64 + h * 4] << 24) |
        (n[c * 64 + h * 4 + 1] << 16) |
        (n[c * 64 + h * 4 + 2] << 8) |
        n[c * 64 + h * 4 + 3];
    a[c] = f;
  }
  (a[o - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
    (a[o - 1][14] = Math.floor(a[o - 1][14])),
    (a[o - 1][15] = ((n.length - 1) * 8) & 4294967295);
  for (var b = 0; b < o; ++b) {
    for (var S = new Uint32Array(80), P = 0; P < 16; ++P) S[P] = a[b][P];
    for (var M = 16; M < 80; ++M)
      S[M] = Nf(S[M - 3] ^ S[M - 8] ^ S[M - 14] ^ S[M - 16], 1);
    for (
      var N = e[0], D = e[1], q = e[2], z = e[3], V = e[4], et = 0;
      et < 80;
      ++et
    ) {
      var it = Math.floor(et / 20),
        X = (Nf(N, 5) + wA(it, D, q, z) + V + t[it] + S[et]) >>> 0;
      (V = z), (z = q), (q = Nf(D, 30) >>> 0), (D = N), (N = X);
    }
    (e[0] = (e[0] + N) >>> 0),
      (e[1] = (e[1] + D) >>> 0),
      (e[2] = (e[2] + q) >>> 0),
      (e[3] = (e[3] + z) >>> 0),
      (e[4] = (e[4] + V) >>> 0);
  }
  return [
    (e[0] >> 24) & 255,
    (e[0] >> 16) & 255,
    (e[0] >> 8) & 255,
    e[0] & 255,
    (e[1] >> 24) & 255,
    (e[1] >> 16) & 255,
    (e[1] >> 8) & 255,
    e[1] & 255,
    (e[2] >> 24) & 255,
    (e[2] >> 16) & 255,
    (e[2] >> 8) & 255,
    e[2] & 255,
    (e[3] >> 24) & 255,
    (e[3] >> 16) & 255,
    (e[3] >> 8) & 255,
    e[3] & 255,
    (e[4] >> 24) & 255,
    (e[4] >> 16) & 255,
    (e[4] >> 8) & 255,
    e[4] & 255,
  ];
}
var AA = gy("v5", 80, bA);
const EA = "00000000-0000-0000-0000-000000000000";
function xA(n) {
  if (!El(n)) throw TypeError("Invalid UUID");
  return parseInt(n.substr(14, 1), 16);
}
const kA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        NIL: EA,
        parse: py,
        stringify: xl,
        v1: aA,
        v3: yA,
        v4: mA,
        v5: AA,
        validate: El,
        version: xA,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  my = xg(kA);
var Tf, O0;
function vA() {
  if (O0) return Tf;
  O0 = 1;
  const n = my.v4;
  return (
    (Tf = function (e, r, i, s) {
      if (typeof e != "string") throw new TypeError(e + " must be a string");
      s = s || {};
      const o = typeof s.version == "number" ? s.version : 2;
      if (o !== 1 && o !== 2) throw new TypeError(o + " must be 1 or 2");
      const a = { method: e };
      if ((o === 2 && (a.jsonrpc = "2.0"), r)) {
        if (typeof r != "object" && !Array.isArray(r))
          throw new TypeError(r + " must be an object, array or omitted");
        a.params = r;
      }
      if (typeof i > "u") {
        const c =
          typeof s.generator == "function"
            ? s.generator
            : function () {
                return n();
              };
        a.id = c(a, s);
      } else
        o === 2 && i === null
          ? s.notificationIdNull && (a.id = null)
          : (a.id = i);
      return a;
    }),
    Tf
  );
}
var _f, M0;
function SA() {
  if (M0) return _f;
  M0 = 1;
  const n = my.v4,
    t = vA(),
    e = function (r, i) {
      if (!(this instanceof e)) return new e(r, i);
      i || (i = {}),
        (this.options = {
          reviver: typeof i.reviver < "u" ? i.reviver : null,
          replacer: typeof i.replacer < "u" ? i.replacer : null,
          generator:
            typeof i.generator < "u"
              ? i.generator
              : function () {
                  return n();
                },
          version: typeof i.version < "u" ? i.version : 2,
          notificationIdNull:
            typeof i.notificationIdNull == "boolean"
              ? i.notificationIdNull
              : !1,
        }),
        (this.callServer = r);
    };
  return (
    (_f = e),
    (e.prototype.request = function (r, i, s, o) {
      const a = this;
      let c = null;
      const f = Array.isArray(r) && typeof i == "function";
      if (this.options.version === 1 && f)
        throw new TypeError("JSON-RPC 1.0 does not support batching");
      if (f || (!f && r && typeof r == "object" && typeof i == "function"))
        (o = i), (c = r);
      else {
        typeof s == "function" && ((o = s), (s = void 0));
        const S = typeof o == "function";
        try {
          c = t(r, i, s, {
            generator: this.options.generator,
            version: this.options.version,
            notificationIdNull: this.options.notificationIdNull,
          });
        } catch (P) {
          if (S) return o(P);
          throw P;
        }
        if (!S) return c;
      }
      let b;
      try {
        b = JSON.stringify(c, this.options.replacer);
      } catch (S) {
        return o(S);
      }
      return (
        this.callServer(b, function (S, P) {
          a._parseResponse(S, P, o);
        }),
        c
      );
    }),
    (e.prototype._parseResponse = function (r, i, s) {
      if (r) {
        s(r);
        return;
      }
      if (!i) return s();
      let o;
      try {
        o = JSON.parse(i, this.options.reviver);
      } catch (a) {
        return s(a);
      }
      if (s.length === 3)
        if (Array.isArray(o)) {
          const a = function (f) {
              return typeof f.error < "u";
            },
            c = function (f) {
              return !a(f);
            };
          return s(null, o.filter(a), o.filter(c));
        } else return s(null, o.error, o.result);
      s(null, o);
    }),
    _f
  );
}
var IA = SA();
const BA = gl(IA);
var Of = { exports: {} },
  L0;
function RA() {
  return (
    L0 ||
      ((L0 = 1),
      (function (n) {
        var t = Object.prototype.hasOwnProperty,
          e = "~";
        function r() {}
        Object.create &&
          ((r.prototype = Object.create(null)), new r().__proto__ || (e = !1));
        function i(c, f, h) {
          (this.fn = c), (this.context = f), (this.once = h || !1);
        }
        function s(c, f, h, b, S) {
          if (typeof h != "function")
            throw new TypeError("The listener must be a function");
          var P = new i(h, b || c, S),
            M = e ? e + f : f;
          return (
            c._events[M]
              ? c._events[M].fn
                ? (c._events[M] = [c._events[M], P])
                : c._events[M].push(P)
              : ((c._events[M] = P), c._eventsCount++),
            c
          );
        }
        function o(c, f) {
          --c._eventsCount === 0 ? (c._events = new r()) : delete c._events[f];
        }
        function a() {
          (this._events = new r()), (this._eventsCount = 0);
        }
        (a.prototype.eventNames = function () {
          var f = [],
            h,
            b;
          if (this._eventsCount === 0) return f;
          for (b in (h = this._events))
            t.call(h, b) && f.push(e ? b.slice(1) : b);
          return Object.getOwnPropertySymbols
            ? f.concat(Object.getOwnPropertySymbols(h))
            : f;
        }),
          (a.prototype.listeners = function (f) {
            var h = e ? e + f : f,
              b = this._events[h];
            if (!b) return [];
            if (b.fn) return [b.fn];
            for (var S = 0, P = b.length, M = new Array(P); S < P; S++)
              M[S] = b[S].fn;
            return M;
          }),
          (a.prototype.listenerCount = function (f) {
            var h = e ? e + f : f,
              b = this._events[h];
            return b ? (b.fn ? 1 : b.length) : 0;
          }),
          (a.prototype.emit = function (f, h, b, S, P, M) {
            var N = e ? e + f : f;
            if (!this._events[N]) return !1;
            var D = this._events[N],
              q = arguments.length,
              z,
              V;
            if (D.fn) {
              switch ((D.once && this.removeListener(f, D.fn, void 0, !0), q)) {
                case 1:
                  return D.fn.call(D.context), !0;
                case 2:
                  return D.fn.call(D.context, h), !0;
                case 3:
                  return D.fn.call(D.context, h, b), !0;
                case 4:
                  return D.fn.call(D.context, h, b, S), !0;
                case 5:
                  return D.fn.call(D.context, h, b, S, P), !0;
                case 6:
                  return D.fn.call(D.context, h, b, S, P, M), !0;
              }
              for (V = 1, z = new Array(q - 1); V < q; V++)
                z[V - 1] = arguments[V];
              D.fn.apply(D.context, z);
            } else {
              var et = D.length,
                it;
              for (V = 0; V < et; V++)
                switch (
                  (D[V].once && this.removeListener(f, D[V].fn, void 0, !0), q)
                ) {
                  case 1:
                    D[V].fn.call(D[V].context);
                    break;
                  case 2:
                    D[V].fn.call(D[V].context, h);
                    break;
                  case 3:
                    D[V].fn.call(D[V].context, h, b);
                    break;
                  case 4:
                    D[V].fn.call(D[V].context, h, b, S);
                    break;
                  default:
                    if (!z)
                      for (it = 1, z = new Array(q - 1); it < q; it++)
                        z[it - 1] = arguments[it];
                    D[V].fn.apply(D[V].context, z);
                }
            }
            return !0;
          }),
          (a.prototype.on = function (f, h, b) {
            return s(this, f, h, b, !1);
          }),
          (a.prototype.once = function (f, h, b) {
            return s(this, f, h, b, !0);
          }),
          (a.prototype.removeListener = function (f, h, b, S) {
            var P = e ? e + f : f;
            if (!this._events[P]) return this;
            if (!h) return o(this, P), this;
            var M = this._events[P];
            if (M.fn)
              M.fn === h &&
                (!S || M.once) &&
                (!b || M.context === b) &&
                o(this, P);
            else {
              for (var N = 0, D = [], q = M.length; N < q; N++)
                (M[N].fn !== h ||
                  (S && !M[N].once) ||
                  (b && M[N].context !== b)) &&
                  D.push(M[N]);
              D.length
                ? (this._events[P] = D.length === 1 ? D[0] : D)
                : o(this, P);
            }
            return this;
          }),
          (a.prototype.removeAllListeners = function (f) {
            var h;
            return (
              f
                ? ((h = e ? e + f : f), this._events[h] && o(this, h))
                : ((this._events = new r()), (this._eventsCount = 0)),
              this
            );
          }),
          (a.prototype.off = a.prototype.removeListener),
          (a.prototype.addListener = a.prototype.on),
          (a.prefixed = e),
          (a.EventEmitter = a),
          (n.exports = a);
      })(Of)),
    Of.exports
  );
}
var PA = RA();
const wy = gl(PA);
var CA = class extends wy {
  constructor(t, e, r) {
    super();
    tt(this, "socket");
    (this.socket = new window.WebSocket(t, r)),
      (this.socket.onopen = () => this.emit("open")),
      (this.socket.onmessage = (i) => this.emit("message", i.data)),
      (this.socket.onerror = (i) => this.emit("error", i)),
      (this.socket.onclose = (i) => {
        this.emit("close", i.code, i.reason);
      });
  }
  send(t, e, r) {
    const i = r || e;
    try {
      this.socket.send(t), i();
    } catch (s) {
      i(s);
    }
  }
  close(t, e) {
    this.socket.close(t, e);
  }
  addEventListener(t, e, r) {
    this.socket.addEventListener(t, e, r);
  }
};
function NA(n, t) {
  return new CA(n, t);
}
var TA = class {
    encode(n) {
      return JSON.stringify(n);
    }
    decode(n) {
      return JSON.parse(n);
    }
  },
  _A = class extends wy {
    constructor(
      t,
      e = "ws://localhost:8080",
      {
        autoconnect: r = !0,
        reconnect: i = !0,
        reconnect_interval: s = 1e3,
        max_reconnects: o = 5,
        ...a
      } = {},
      c,
      f
    ) {
      super();
      tt(this, "address");
      tt(this, "rpc_id");
      tt(this, "queue");
      tt(this, "options");
      tt(this, "autoconnect");
      tt(this, "ready");
      tt(this, "reconnect");
      tt(this, "reconnect_timer_id");
      tt(this, "reconnect_interval");
      tt(this, "max_reconnects");
      tt(this, "rest_options");
      tt(this, "current_reconnects");
      tt(this, "generate_request_id");
      tt(this, "socket");
      tt(this, "webSocketFactory");
      tt(this, "dataPack");
      (this.webSocketFactory = t),
        (this.queue = {}),
        (this.rpc_id = 0),
        (this.address = e),
        (this.autoconnect = r),
        (this.ready = !1),
        (this.reconnect = i),
        (this.reconnect_timer_id = void 0),
        (this.reconnect_interval = s),
        (this.max_reconnects = o),
        (this.rest_options = a),
        (this.current_reconnects = 0),
        (this.generate_request_id =
          c ||
          (() =>
            typeof this.rpc_id == "number"
              ? ++this.rpc_id
              : Number(this.rpc_id) + 1)),
        f ? (this.dataPack = f) : (this.dataPack = new TA()),
        this.autoconnect &&
          this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options,
          });
    }
    connect() {
      this.socket ||
        this._connect(this.address, {
          autoconnect: this.autoconnect,
          reconnect: this.reconnect,
          reconnect_interval: this.reconnect_interval,
          max_reconnects: this.max_reconnects,
          ...this.rest_options,
        });
    }
    call(t, e, r, i) {
      return (
        !i && typeof r == "object" && ((i = r), (r = null)),
        new Promise((s, o) => {
          if (!this.ready) return o(new Error("socket not ready"));
          const a = this.generate_request_id(t, e),
            c = { jsonrpc: "2.0", method: t, params: e || void 0, id: a };
          this.socket.send(this.dataPack.encode(c), i, (f) => {
            if (f) return o(f);
            (this.queue[a] = { promise: [s, o] }),
              r &&
                (this.queue[a].timeout = setTimeout(() => {
                  delete this.queue[a], o(new Error("reply timeout"));
                }, r));
          });
        })
      );
    }
    async login(t) {
      const e = await this.call("rpc.login", t);
      if (!e) throw new Error("authentication failed");
      return e;
    }
    async listMethods() {
      return await this.call("__listMethods");
    }
    notify(t, e) {
      return new Promise((r, i) => {
        if (!this.ready) return i(new Error("socket not ready"));
        const s = { jsonrpc: "2.0", method: t, params: e };
        this.socket.send(this.dataPack.encode(s), (o) => {
          if (o) return i(o);
          r();
        });
      });
    }
    async subscribe(t) {
      typeof t == "string" && (t = [t]);
      const e = await this.call("rpc.on", t);
      if (typeof t == "string" && e[t] !== "ok")
        throw new Error(
          "Failed subscribing to an event '" + t + "' with: " + e[t]
        );
      return e;
    }
    async unsubscribe(t) {
      typeof t == "string" && (t = [t]);
      const e = await this.call("rpc.off", t);
      if (typeof t == "string" && e[t] !== "ok")
        throw new Error("Failed unsubscribing from an event with: " + e);
      return e;
    }
    close(t, e) {
      this.socket.close(t || 1e3, e);
    }
    setAutoReconnect(t) {
      this.reconnect = t;
    }
    setReconnectInterval(t) {
      this.reconnect_interval = t;
    }
    setMaxReconnects(t) {
      this.max_reconnects = t;
    }
    _connect(t, e) {
      clearTimeout(this.reconnect_timer_id),
        (this.socket = this.webSocketFactory(t, e)),
        this.socket.addEventListener("open", () => {
          (this.ready = !0), this.emit("open"), (this.current_reconnects = 0);
        }),
        this.socket.addEventListener("message", ({ data: r }) => {
          r instanceof ArrayBuffer && (r = Nt.from(r).toString());
          try {
            r = this.dataPack.decode(r);
          } catch {
            return;
          }
          if (r.notification && this.listeners(r.notification).length) {
            if (!Object.keys(r.params).length) return this.emit(r.notification);
            const i = [r.notification];
            if (r.params.constructor === Object) i.push(r.params);
            else for (let s = 0; s < r.params.length; s++) i.push(r.params[s]);
            return Promise.resolve().then(() => {
              this.emit.apply(this, i);
            });
          }
          if (!this.queue[r.id])
            return r.method
              ? Promise.resolve().then(() => {
                  this.emit(r.method, r == null ? void 0 : r.params);
                })
              : void 0;
          "error" in r == "result" in r &&
            this.queue[r.id].promise[1](
              new Error(
                'Server response malformed. Response must include either "result" or "error", but not both.'
              )
            ),
            this.queue[r.id].timeout && clearTimeout(this.queue[r.id].timeout),
            r.error
              ? this.queue[r.id].promise[1](r.error)
              : this.queue[r.id].promise[0](r.result),
            delete this.queue[r.id];
        }),
        this.socket.addEventListener("error", (r) => this.emit("error", r)),
        this.socket.addEventListener("close", ({ code: r, reason: i }) => {
          this.ready && setTimeout(() => this.emit("close", r, i), 0),
            (this.ready = !1),
            (this.socket = void 0),
            r !== 1e3 &&
              (this.current_reconnects++,
              this.reconnect &&
                (this.max_reconnects > this.current_reconnects ||
                  this.max_reconnects === 0) &&
                (this.reconnect_timer_id = setTimeout(
                  () => this._connect(t, e),
                  this.reconnect_interval
                )));
        });
    }
  };
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const U0 =
  (n, t) => (n + (n >= 0 ? t : -t) / by) / t;
function OA(n, t, e) {
  const [[r, i], [s, o]] = t,
    a = U0(o * n, e),
    c = U0(-i * n, e);
  let f = n - a * r - c * s,
    h = -a * i - c * o;
  const b = f < bi,
    S = h < bi;
  b && (f = -f), S && (h = -h);
  const P = Wc(Math.ceil(Hg(e) / 2)) + Fo;
  if (f < bi || f >= P || h < bi || h >= P)
    throw new Error("splitScalar (endomorphism): failed, k=" + n);
  return { k1neg: b, k1: f, k2neg: S, k2: h };
}
function hh(n) {
  if (!["compact", "recovered", "der"].includes(n))
    throw new Error(
      'Signature format must be "compact", "recovered", or "der"'
    );
  return n;
}
function Mf(n, t) {
  const e = {};
  for (let r of Object.keys(t)) e[r] = n[r] === void 0 ? t[r] : n[r];
  return (
    ro(e.lowS, "lowS"),
    ro(e.prehash, "prehash"),
    e.format !== void 0 && hh(e.format),
    e
  );
}
class MA extends Error {
  constructor(t = "") {
    super(t);
  }
}
const ni = {
    Err: MA,
    _tlv: {
      encode: (n, t) => {
        const { Err: e } = ni;
        if (n < 0 || n > 256) throw new e("tlv.encode: wrong tag");
        if (t.length & 1) throw new e("tlv.encode: unpadded data");
        const r = t.length / 2,
          i = ou(r);
        if ((i.length / 2) & 128)
          throw new e("tlv.encode: long form length too big");
        const s = r > 127 ? ou((i.length / 2) | 128) : "";
        return ou(n) + s + i + t;
      },
      decode(n, t) {
        const { Err: e } = ni;
        let r = 0;
        if (n < 0 || n > 256) throw new e("tlv.encode: wrong tag");
        if (t.length < 2 || t[r++] !== n) throw new e("tlv.decode: wrong tlv");
        const i = t[r++],
          s = !!(i & 128);
        let o = 0;
        if (!s) o = i;
        else {
          const c = i & 127;
          if (!c)
            throw new e("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new e("tlv.decode(long): byte length is too big");
          const f = t.subarray(r, r + c);
          if (f.length !== c)
            throw new e("tlv.decode: length bytes not complete");
          if (f[0] === 0) throw new e("tlv.decode(long): zero leftmost byte");
          for (const h of f) o = (o << 8) | h;
          if (((r += c), o < 128))
            throw new e("tlv.decode(long): not minimal encoding");
        }
        const a = t.subarray(r, r + o);
        if (a.length !== o) throw new e("tlv.decode: wrong value length");
        return { v: a, l: t.subarray(r + o) };
      },
    },
    _int: {
      encode(n) {
        const { Err: t } = ni;
        if (n < bi) throw new t("integer: negative integers are not allowed");
        let e = ou(n);
        if ((Number.parseInt(e[0], 16) & 8 && (e = "00" + e), e.length & 1))
          throw new t("unexpected DER parsing assertion: unpadded hex");
        return e;
      },
      decode(n) {
        const { Err: t } = ni;
        if (n[0] & 128) throw new t("invalid signature integer: negative");
        if (n[0] === 0 && !(n[1] & 128))
          throw new t("invalid signature integer: unnecessary leading zero");
        return bl(n);
      },
    },
    toSig(n) {
      const { Err: t, _int: e, _tlv: r } = ni,
        i = Le("signature", n),
        { v: s, l: o } = r.decode(48, i);
      if (o.length) throw new t("invalid signature: left bytes after parsing");
      const { v: a, l: c } = r.decode(2, s),
        { v: f, l: h } = r.decode(2, c);
      if (h.length) throw new t("invalid signature: left bytes after parsing");
      return { r: e.decode(a), s: e.decode(f) };
    },
    hexFromSig(n) {
      const { _tlv: t, _int: e } = ni,
        r = t.encode(2, e.encode(n.r)),
        i = t.encode(2, e.encode(n.s)),
        s = r + i;
      return t.encode(48, s);
    },
  },
  bi = BigInt(0),
  Fo = BigInt(1),
  by = BigInt(2),
  uu = BigInt(3),
  LA = BigInt(4);
function Po(n, t) {
  const { BYTES: e } = n;
  let r;
  if (typeof t == "bigint") r = t;
  else {
    let i = Le("private key", t);
    try {
      r = n.fromBytes(i);
    } catch {
      throw new Error(
        `invalid private key: expected ui8a of size ${e}, got ${typeof t}`
      );
    }
  }
  if (!n.isValidNot0(r))
    throw new Error("invalid private key: out of range [1..N-1]");
  return r;
}
function UA(n, t = {}) {
  const e = ny("weierstrass", n, t),
    { Fp: r, Fn: i } = e;
  let s = e.CURVE;
  const { h: o, n: a } = s;
  qc(
    t,
    {},
    {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean",
    }
  );
  const { endo: c } = t;
  if (
    c &&
    (!r.is0(s.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))
  )
    throw new Error(
      'invalid endo: expected "beta": bigint and "basises": array'
    );
  const f = Ey(r, i);
  function h() {
    if (!r.isOdd)
      throw new Error(
        "compression is not supported: Field does not have .isOdd()"
      );
  }
  function b(v, y, u) {
    const { x: l, y: g } = y.toAffine(),
      k = r.toBytes(l);
    if ((ro(u, "isCompressed"), u)) {
      h();
      const I = !r.isOdd(g);
      return Fn(Ay(I), k);
    } else return Fn(Uint8Array.of(4), k, r.toBytes(g));
  }
  function S(v) {
    An(v, void 0, "Point");
    const { publicKey: y, publicKeyUncompressed: u } = f,
      l = v.length,
      g = v[0],
      k = v.subarray(1);
    if (l === y && (g === 2 || g === 3)) {
      const I = r.fromBytes(k);
      if (!r.isValid(I)) throw new Error("bad point: is not on curve, wrong x");
      const _ = N(I);
      let G;
      try {
        G = r.sqrt(_);
      } catch (p) {
        const T = p instanceof Error ? ": " + p.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + T);
      }
      h();
      const O = r.isOdd(G);
      return ((g & 1) === 1) !== O && (G = r.neg(G)), { x: I, y: G };
    } else if (l === u && g === 4) {
      const I = r.BYTES,
        _ = r.fromBytes(k.subarray(0, I)),
        G = r.fromBytes(k.subarray(I, I * 2));
      if (!D(_, G)) throw new Error("bad point: is not on curve");
      return { x: _, y: G };
    } else
      throw new Error(
        `bad point: got length ${l}, expected compressed=${y} or uncompressed=${u}`
      );
  }
  const P = t.toBytes || b,
    M = t.fromBytes || S;
  function N(v) {
    const y = r.sqr(v),
      u = r.mul(y, v);
    return r.add(r.add(u, r.mul(v, s.a)), s.b);
  }
  function D(v, y) {
    const u = r.sqr(y),
      l = N(v);
    return r.eql(u, l);
  }
  if (!D(s.Gx, s.Gy)) throw new Error("bad curve params: generator point");
  const q = r.mul(r.pow(s.a, uu), LA),
    z = r.mul(r.sqr(s.b), BigInt(27));
  if (r.is0(r.add(q, z))) throw new Error("bad curve params: a or b");
  function V(v, y, u = !1) {
    if (!r.isValid(y) || (u && r.is0(y)))
      throw new Error(`bad point coordinate ${v}`);
    return y;
  }
  function et(v) {
    if (!(v instanceof x)) throw new Error("ProjectivePoint expected");
  }
  function it(v) {
    if (!c || !c.basises) throw new Error("no endo");
    return OA(v, c.basises, i.ORDER);
  }
  const X = Lu((v, y) => {
      const { X: u, Y: l, Z: g } = v;
      if (r.eql(g, r.ONE)) return { x: u, y: l };
      const k = v.is0();
      y == null && (y = k ? r.ONE : r.inv(g));
      const I = r.mul(u, y),
        _ = r.mul(l, y),
        G = r.mul(g, y);
      if (k) return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(G, r.ONE)) throw new Error("invZ was invalid");
      return { x: I, y: _ };
    }),
    nt = Lu((v) => {
      if (v.is0()) {
        if (t.allowInfinityPoint && !r.is0(v.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: u } = v.toAffine();
      if (!r.isValid(y) || !r.isValid(u))
        throw new Error("bad point: x or y not field elements");
      if (!D(y, u)) throw new Error("bad point: equation left != right");
      if (!v.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  function R(v, y, u, l, g) {
    return (
      (u = new x(r.mul(u.X, v), u.Y, u.Z)),
      (y = Uu(l, y)),
      (u = Uu(g, u)),
      y.add(u)
    );
  }
  class x {
    constructor(y, u, l) {
      (this.X = V("x", y)),
        (this.Y = V("y", u, !0)),
        (this.Z = V("z", l)),
        Object.freeze(this);
    }
    static CURVE() {
      return s;
    }
    static fromAffine(y) {
      const { x: u, y: l } = y || {};
      if (!y || !r.isValid(u) || !r.isValid(l))
        throw new Error("invalid affine point");
      if (y instanceof x) throw new Error("projective point not allowed");
      return r.is0(u) && r.is0(l) ? x.ZERO : new x(u, l, r.ONE);
    }
    static fromBytes(y) {
      const u = x.fromAffine(M(An(y, void 0, "point")));
      return u.assertValidity(), u;
    }
    static fromHex(y) {
      return x.fromBytes(Le("pointHex", y));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(y = 8, u = !0) {
      return F.createCache(this, y), u || this.multiply(uu), this;
    }
    assertValidity() {
      nt(this);
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (!r.isOdd) throw new Error("Field doesn't support isOdd");
      return !r.isOdd(y);
    }
    equals(y) {
      et(y);
      const { X: u, Y: l, Z: g } = this,
        { X: k, Y: I, Z: _ } = y,
        G = r.eql(r.mul(u, _), r.mul(k, g)),
        O = r.eql(r.mul(l, _), r.mul(I, g));
      return G && O;
    }
    negate() {
      return new x(this.X, r.neg(this.Y), this.Z);
    }
    double() {
      const { a: y, b: u } = s,
        l = r.mul(u, uu),
        { X: g, Y: k, Z: I } = this;
      let _ = r.ZERO,
        G = r.ZERO,
        O = r.ZERO,
        d = r.mul(g, g),
        p = r.mul(k, k),
        T = r.mul(I, I),
        H = r.mul(g, k);
      return (
        (H = r.add(H, H)),
        (O = r.mul(g, I)),
        (O = r.add(O, O)),
        (_ = r.mul(y, O)),
        (G = r.mul(l, T)),
        (G = r.add(_, G)),
        (_ = r.sub(p, G)),
        (G = r.add(p, G)),
        (G = r.mul(_, G)),
        (_ = r.mul(H, _)),
        (O = r.mul(l, O)),
        (T = r.mul(y, T)),
        (H = r.sub(d, T)),
        (H = r.mul(y, H)),
        (H = r.add(H, O)),
        (O = r.add(d, d)),
        (d = r.add(O, d)),
        (d = r.add(d, T)),
        (d = r.mul(d, H)),
        (G = r.add(G, d)),
        (T = r.mul(k, I)),
        (T = r.add(T, T)),
        (d = r.mul(T, H)),
        (_ = r.sub(_, d)),
        (O = r.mul(T, p)),
        (O = r.add(O, O)),
        (O = r.add(O, O)),
        new x(_, G, O)
      );
    }
    add(y) {
      et(y);
      const { X: u, Y: l, Z: g } = this,
        { X: k, Y: I, Z: _ } = y;
      let G = r.ZERO,
        O = r.ZERO,
        d = r.ZERO;
      const p = s.a,
        T = r.mul(s.b, uu);
      let H = r.mul(u, k),
        J = r.mul(l, I),
        at = r.mul(g, _),
        yt = r.add(u, l),
        wt = r.add(k, I);
      (yt = r.mul(yt, wt)),
        (wt = r.add(H, J)),
        (yt = r.sub(yt, wt)),
        (wt = r.add(u, g));
      let Ut = r.add(k, _);
      return (
        (wt = r.mul(wt, Ut)),
        (Ut = r.add(H, at)),
        (wt = r.sub(wt, Ut)),
        (Ut = r.add(l, g)),
        (G = r.add(I, _)),
        (Ut = r.mul(Ut, G)),
        (G = r.add(J, at)),
        (Ut = r.sub(Ut, G)),
        (d = r.mul(p, wt)),
        (G = r.mul(T, at)),
        (d = r.add(G, d)),
        (G = r.sub(J, d)),
        (d = r.add(J, d)),
        (O = r.mul(G, d)),
        (J = r.add(H, H)),
        (J = r.add(J, H)),
        (at = r.mul(p, at)),
        (wt = r.mul(T, wt)),
        (J = r.add(J, at)),
        (at = r.sub(H, at)),
        (at = r.mul(p, at)),
        (wt = r.add(wt, at)),
        (H = r.mul(J, wt)),
        (O = r.add(O, H)),
        (H = r.mul(Ut, wt)),
        (G = r.mul(yt, G)),
        (G = r.sub(G, H)),
        (H = r.mul(yt, J)),
        (d = r.mul(Ut, d)),
        (d = r.add(d, H)),
        new x(G, O, d)
      );
    }
    subtract(y) {
      return this.add(y.negate());
    }
    is0() {
      return this.equals(x.ZERO);
    }
    multiply(y) {
      const { endo: u } = t;
      if (!i.isValidNot0(y)) throw new Error("invalid scalar: out of range");
      let l, g;
      const k = (I) => F.cached(this, I, (_) => Bs(x, _));
      if (u) {
        const { k1neg: I, k1: _, k2neg: G, k2: O } = it(y),
          { p: d, f: p } = k(_),
          { p: T, f: H } = k(O);
        (g = p.add(H)), (l = R(u.beta, d, T, I, G));
      } else {
        const { p: I, f: _ } = k(y);
        (l = I), (g = _);
      }
      return Bs(x, [l, g])[0];
    }
    multiplyUnsafe(y) {
      const { endo: u } = t,
        l = this;
      if (!i.isValid(y)) throw new Error("invalid scalar: out of range");
      if (y === bi || l.is0()) return x.ZERO;
      if (y === Fo) return l;
      if (F.hasCache(this)) return this.multiply(y);
      if (u) {
        const { k1neg: g, k1: k, k2neg: I, k2: _ } = it(y),
          { p1: G, p2: O } = tb(x, l, k, _);
        return R(u.beta, G, O, g, I);
      } else return F.unsafe(l, y);
    }
    multiplyAndAddUnsafe(y, u, l) {
      const g = this.multiplyUnsafe(u).add(y.multiplyUnsafe(l));
      return g.is0() ? void 0 : g;
    }
    toAffine(y) {
      return X(this, y);
    }
    isTorsionFree() {
      const { isTorsionFree: y } = t;
      return o === Fo ? !0 : y ? y(x, this) : F.unsafe(this, a).is0();
    }
    clearCofactor() {
      const { clearCofactor: y } = t;
      return o === Fo ? this : y ? y(x, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(y = !0) {
      return ro(y, "isCompressed"), this.assertValidity(), P(x, this, y);
    }
    toHex(y = !0) {
      return Xs(this.toBytes(y));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(y = !0) {
      return this.toBytes(y);
    }
    _setWindowSize(y) {
      this.precompute(y);
    }
    static normalizeZ(y) {
      return Bs(x, y);
    }
    static msm(y, u) {
      return ry(x, i, y, u);
    }
    static fromPrivateKey(y) {
      return x.BASE.multiply(Po(i, y));
    }
  }
  (x.BASE = new x(s.Gx, s.Gy, r.ONE)),
    (x.ZERO = new x(r.ZERO, r.ONE, r.ZERO)),
    (x.Fp = r),
    (x.Fn = i);
  const B = i.BITS,
    F = new ey(x, t.endo ? Math.ceil(B / 2) : B);
  return x.BASE.precompute(8), x;
}
function Ay(n) {
  return Uint8Array.of(n ? 2 : 3);
}
function Ey(n, t) {
  return {
    secretKey: t.BYTES,
    publicKey: 1 + n.BYTES,
    publicKeyUncompressed: 1 + 2 * n.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * t.BYTES,
  };
}
function FA(n, t = {}) {
  const { Fn: e } = n,
    r = t.randomBytes || id,
    i = Object.assign(Ey(n.Fp, e), { seed: Yg(e.ORDER) });
  function s(P) {
    try {
      return !!Po(e, P);
    } catch {
      return !1;
    }
  }
  function o(P, M) {
    const { publicKey: N, publicKeyUncompressed: D } = i;
    try {
      const q = P.length;
      return (M === !0 && q !== N) || (M === !1 && q !== D)
        ? !1
        : !!n.fromBytes(P);
    } catch {
      return !1;
    }
  }
  function a(P = r(i.seed)) {
    return Z1(An(P, i.seed, "seed"), e.ORDER);
  }
  function c(P, M = !0) {
    return n.BASE.multiply(Po(e, P)).toBytes(M);
  }
  function f(P) {
    const M = a(P);
    return { secretKey: M, publicKey: c(M) };
  }
  function h(P) {
    if (typeof P == "bigint") return !1;
    if (P instanceof n) return !0;
    const { secretKey: M, publicKey: N, publicKeyUncompressed: D } = i;
    if (e.allowedLengths || M === N) return;
    const q = Le("key", P).length;
    return q === N || q === D;
  }
  function b(P, M, N = !0) {
    if (h(P) === !0) throw new Error("first arg must be private key");
    if (h(M) === !1) throw new Error("second arg must be public key");
    const D = Po(e, P);
    return n.fromHex(M).multiply(D).toBytes(N);
  }
  return Object.freeze({
    getPublicKey: c,
    getSharedSecret: b,
    keygen: f,
    Point: n,
    utils: {
      isValidSecretKey: s,
      isValidPublicKey: o,
      randomSecretKey: a,
      isValidPrivateKey: s,
      randomPrivateKey: a,
      normPrivateKeyToScalar: (P) => Po(e, P),
      precompute(P = 8, M = n.BASE) {
        return M.precompute(P, !1);
      },
    },
    lengths: i,
  });
}
function DA(n, t, e = {}) {
  vg(t),
    qc(
      e,
      {},
      {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function",
      }
    );
  const r = e.randomBytes || id,
    i = e.hmac || ((u, ...l) => Ug(t, u, Fn(...l))),
    { Fp: s, Fn: o } = n,
    { ORDER: a, BITS: c } = o,
    {
      keygen: f,
      getPublicKey: h,
      getSharedSecret: b,
      utils: S,
      lengths: P,
    } = FA(n, e),
    M = {
      prehash: !1,
      lowS: typeof e.lowS == "boolean" ? e.lowS : !1,
      format: void 0,
      extraEntropy: !1,
    },
    N = "compact";
  function D(u) {
    const l = a >> Fo;
    return u > l;
  }
  function q(u, l) {
    if (!o.isValidNot0(l))
      throw new Error(`invalid signature ${u}: out of range 1..Point.Fn.ORDER`);
    return l;
  }
  function z(u, l) {
    hh(l);
    const g = P.signature,
      k = l === "compact" ? g : l === "recovered" ? g + 1 : void 0;
    return An(u, k, `${l} signature`);
  }
  class V {
    constructor(l, g, k) {
      (this.r = q("r", l)),
        (this.s = q("s", g)),
        k != null && (this.recovery = k),
        Object.freeze(this);
    }
    static fromBytes(l, g = N) {
      z(l, g);
      let k;
      if (g === "der") {
        const { r: O, s: d } = ni.toSig(An(l));
        return new V(O, d);
      }
      g === "recovered" && ((k = l[0]), (g = "compact"), (l = l.subarray(1)));
      const I = o.BYTES,
        _ = l.subarray(0, I),
        G = l.subarray(I, I * 2);
      return new V(o.fromBytes(_), o.fromBytes(G), k);
    }
    static fromHex(l, g) {
      return this.fromBytes(Mu(l), g);
    }
    addRecoveryBit(l) {
      return new V(this.r, this.s, l);
    }
    recoverPublicKey(l) {
      const g = s.ORDER,
        { r: k, s: I, recovery: _ } = this;
      if (_ == null || ![0, 1, 2, 3].includes(_))
        throw new Error("recovery id invalid");
      if (a * by < g && _ > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      const O = _ === 2 || _ === 3 ? k + a : k;
      if (!s.isValid(O)) throw new Error("recovery id 2 or 3 invalid");
      const d = s.toBytes(O),
        p = n.fromBytes(Fn(Ay((_ & 1) === 0), d)),
        T = o.inv(O),
        H = it(Le("msgHash", l)),
        J = o.create(-H * T),
        at = o.create(I * T),
        yt = n.BASE.multiplyUnsafe(J).add(p.multiplyUnsafe(at));
      if (yt.is0()) throw new Error("point at infinify");
      return yt.assertValidity(), yt;
    }
    hasHighS() {
      return D(this.s);
    }
    toBytes(l = N) {
      if ((hh(l), l === "der")) return Mu(ni.hexFromSig(this));
      const g = o.toBytes(this.r),
        k = o.toBytes(this.s);
      if (l === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return Fn(Uint8Array.of(this.recovery), g, k);
      }
      return Fn(g, k);
    }
    toHex(l) {
      return Xs(this.toBytes(l));
    }
    assertValidity() {}
    static fromCompact(l) {
      return V.fromBytes(Le("sig", l), "compact");
    }
    static fromDER(l) {
      return V.fromBytes(Le("sig", l), "der");
    }
    normalizeS() {
      return this.hasHighS()
        ? new V(this.r, o.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return Xs(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return Xs(this.toBytes("compact"));
    }
  }
  const et =
      e.bits2int ||
      function (l) {
        if (l.length > 8192) throw new Error("input is too large");
        const g = bl(l),
          k = l.length * 8 - c;
        return k > 0 ? g >> BigInt(k) : g;
      },
    it =
      e.bits2int_modN ||
      function (l) {
        return o.create(et(l));
      },
    X = Wc(c);
  function nt(u) {
    return fh("num < 2^" + c, u, bi, X), o.toBytes(u);
  }
  function R(u, l) {
    return (
      An(u, void 0, "message"), l ? An(t(u), void 0, "prehashed message") : u
    );
  }
  function x(u, l, g) {
    if (["recovered", "canonical"].some((J) => J in g))
      throw new Error("sign() legacy options not supported");
    const { lowS: k, prehash: I, extraEntropy: _ } = Mf(g, M);
    u = R(u, I);
    const G = it(u),
      O = Po(o, l),
      d = [nt(O), nt(G)];
    if (_ != null && _ !== !1) {
      const J = _ === !0 ? r(P.secretKey) : _;
      d.push(Le("extraEntropy", J));
    }
    const p = Fn(...d),
      T = G;
    function H(J) {
      const at = et(J);
      if (!o.isValidNot0(at)) return;
      const yt = o.inv(at),
        wt = n.BASE.multiply(at).toAffine(),
        Ut = o.create(wt.x);
      if (Ut === bi) return;
      const Rt = o.create(yt * o.create(T + Ut * O));
      if (Rt === bi) return;
      let zt = (wt.x === Ut ? 0 : 2) | Number(wt.y & Fo),
        Zt = Rt;
      return k && D(Rt) && ((Zt = o.neg(Rt)), (zt ^= 1)), new V(Ut, Zt, zt);
    }
    return { seed: p, k2sig: H };
  }
  function B(u, l, g = {}) {
    u = Le("message", u);
    const { seed: k, k2sig: I } = x(u, l, g);
    return H1(t.outputLen, o.BYTES, i)(k, I);
  }
  function F(u) {
    let l;
    const g = typeof u == "string" || Vc(u),
      k =
        !g &&
        u !== null &&
        typeof u == "object" &&
        typeof u.r == "bigint" &&
        typeof u.s == "bigint";
    if (!g && !k)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    if (k) l = new V(u.r, u.s);
    else if (g) {
      try {
        l = V.fromBytes(Le("sig", u), "der");
      } catch (I) {
        if (!(I instanceof ni.Err)) throw I;
      }
      if (!l)
        try {
          l = V.fromBytes(Le("sig", u), "compact");
        } catch {
          return !1;
        }
    }
    return l || !1;
  }
  function v(u, l, g, k = {}) {
    const { lowS: I, prehash: _, format: G } = Mf(k, M);
    if (((g = Le("publicKey", g)), (l = R(Le("message", l), _)), "strict" in k))
      throw new Error("options.strict was renamed to lowS");
    const O = G === void 0 ? F(u) : V.fromBytes(Le("sig", u), G);
    if (O === !1) return !1;
    try {
      const d = n.fromBytes(g);
      if (I && O.hasHighS()) return !1;
      const { r: p, s: T } = O,
        H = it(l),
        J = o.inv(T),
        at = o.create(H * J),
        yt = o.create(p * J),
        wt = n.BASE.multiplyUnsafe(at).add(d.multiplyUnsafe(yt));
      return wt.is0() ? !1 : o.create(wt.x) === p;
    } catch {
      return !1;
    }
  }
  function y(u, l, g = {}) {
    const { prehash: k } = Mf(g, M);
    return (
      (l = R(l, k)), V.fromBytes(u, "recovered").recoverPublicKey(l).toBytes()
    );
  }
  return Object.freeze({
    keygen: f,
    getPublicKey: h,
    getSharedSecret: b,
    utils: S,
    lengths: P,
    Point: n,
    sign: B,
    verify: v,
    recoverPublicKey: y,
    Signature: V,
    hash: t,
  });
}
function zA(n) {
  const t = {
      a: n.a,
      b: n.b,
      p: n.Fp.ORDER,
      n: n.n,
      h: n.h,
      Gx: n.Gx,
      Gy: n.Gy,
    },
    e = n.Fp;
  let r = n.allowedPrivateKeyLengths
    ? Array.from(
        new Set(n.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))
      )
    : void 0;
  const i = lo(t.n, {
      BITS: n.nBitLength,
      allowedLengths: r,
      modFromBytes: n.wrapPrivateKey,
    }),
    s = {
      Fp: e,
      Fn: i,
      allowInfinityPoint: n.allowInfinityPoint,
      endo: n.endo,
      isTorsionFree: n.isTorsionFree,
      clearCofactor: n.clearCofactor,
      fromBytes: n.fromBytes,
      toBytes: n.toBytes,
    };
  return { CURVE: t, curveOpts: s };
}
function HA(n) {
  const { CURVE: t, curveOpts: e } = zA(n),
    r = {
      hmac: n.hmac,
      randomBytes: n.randomBytes,
      lowS: n.lowS,
      bits2int: n.bits2int,
      bits2int_modN: n.bits2int_modN,
    };
  return { CURVE: t, curveOpts: e, hash: n.hash, ecdsaOpts: r };
}
function GA(n, t) {
  const e = t.Point;
  return Object.assign({}, t, {
    ProjectivePoint: e,
    CURVE: Object.assign({}, n, jg(e.Fn.ORDER, e.Fn.BITS)),
  });
}
function KA(n) {
  const { CURVE: t, curveOpts: e, hash: r, ecdsaOpts: i } = HA(n),
    s = UA(t, e),
    o = DA(s, r, i);
  return GA(n, o);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function VA(
  n,
  t
) {
  const e = (r) => KA({ ...n, hash: r });
  return { ...e(t), create: e };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const yd =
    {
      p: BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      n: BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      h: BigInt(1),
      a: BigInt(0),
      b: BigInt(7),
      Gx: BigInt(
        "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
      ),
      Gy: BigInt(
        "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
      ),
    },
  WA = {
    beta: BigInt(
      "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
    ),
    basises: [
      [
        BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
        -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
      ],
      [
        BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
        BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
      ],
    ],
  },
  F0 = BigInt(2);
function qA(n) {
  const t = yd.p,
    e = BigInt(3),
    r = BigInt(6),
    i = BigInt(11),
    s = BigInt(22),
    o = BigInt(23),
    a = BigInt(44),
    c = BigInt(88),
    f = (n * n * n) % t,
    h = (f * f * n) % t,
    b = (Me(h, e, t) * h) % t,
    S = (Me(b, e, t) * h) % t,
    P = (Me(S, F0, t) * f) % t,
    M = (Me(P, i, t) * P) % t,
    N = (Me(M, s, t) * M) % t,
    D = (Me(N, a, t) * N) % t,
    q = (Me(D, c, t) * D) % t,
    z = (Me(q, a, t) * N) % t,
    V = (Me(z, e, t) * h) % t,
    et = (Me(V, o, t) * M) % t,
    it = (Me(et, r, t) * f) % t,
    X = Me(it, F0, t);
  if (!dh.eql(dh.sqr(X), n)) throw new Error("Cannot find square root");
  return X;
}
const dh = lo(yd.p, { sqrt: qA }),
  md = VA({ ...yd, Fp: dh, lowS: !0, endo: WA }, Mg),
  $A = qa.utils.randomPrivateKey,
  D0 = () => {
    const n = qa.utils.randomPrivateKey(),
      t = Ku(n),
      e = new Uint8Array(64);
    return e.set(n), e.set(t, 32), { publicKey: t, secretKey: e };
  },
  Ku = qa.getPublicKey;
function z0(n) {
  try {
    return qa.ExtendedPoint.fromHex(n), !0;
  } catch {
    return !1;
  }
}
const wd = (n, t) => qa.sign(n, t.slice(0, 32)),
  QA = qa.verify,
  qt = (n) =>
    Nt.isBuffer(n)
      ? n
      : n instanceof Uint8Array
      ? Nt.from(n.buffer, n.byteOffset, n.byteLength)
      : Nt.from(n);
class bd {
  constructor(t) {
    Object.assign(this, t);
  }
  encode() {
    return Nt.from(If.serialize(lc, this));
  }
  static decode(t) {
    return If.deserialize(lc, this, t);
  }
  static decodeUnchecked(t) {
    return If.deserializeUnchecked(lc, this, t);
  }
}
class JA extends bd {
  constructor(t) {
    if ((super(t), (this.enum = ""), Object.keys(t).length !== 1))
      throw new Error("Enum can only take single value");
    Object.keys(t).map((e) => {
      this.enum = e;
    });
  }
}
const lc = new Map();
var xy;
const ky = 32,
  qn = 32;
function jA(n) {
  return n._bn !== void 0;
}
let H0 = 1;
class gt extends bd {
  constructor(t) {
    if ((super({}), (this._bn = void 0), jA(t))) this._bn = t._bn;
    else {
      if (typeof t == "string") {
        const e = ir.decode(t);
        if (e.length != qn) throw new Error("Invalid public key input");
        this._bn = new v0(e);
      } else this._bn = new v0(t);
      if (this._bn.byteLength() > qn)
        throw new Error("Invalid public key input");
    }
  }
  static unique() {
    const t = new gt(H0);
    return (H0 += 1), new gt(t.toBuffer());
  }
  equals(t) {
    return this._bn.eq(t._bn);
  }
  toBase58() {
    return ir.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    const t = this.toBuffer();
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  toBuffer() {
    const t = this._bn.toArrayLike(Nt);
    if (t.length === qn) return t;
    const e = Nt.alloc(32);
    return t.copy(e, 32 - t.length), e;
  }
  get [Symbol.toStringTag]() {
    return `PublicKey(${this.toString()})`;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(t, e, r) {
    const i = Nt.concat([t.toBuffer(), Nt.from(e), r.toBuffer()]),
      s = h0(i);
    return new gt(s);
  }
  static createProgramAddressSync(t, e) {
    let r = Nt.alloc(0);
    t.forEach(function (s) {
      if (s.length > ky) throw new TypeError("Max seed length exceeded");
      r = Nt.concat([r, qt(s)]);
    }),
      (r = Nt.concat([r, e.toBuffer(), Nt.from("ProgramDerivedAddress")]));
    const i = h0(r);
    if (z0(i))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new gt(i);
  }
  static async createProgramAddress(t, e) {
    return this.createProgramAddressSync(t, e);
  }
  static findProgramAddressSync(t, e) {
    let r = 255,
      i;
    for (; r != 0; ) {
      try {
        const s = t.concat(Nt.from([r]));
        i = this.createProgramAddressSync(s, e);
      } catch (s) {
        if (s instanceof TypeError) throw s;
        r--;
        continue;
      }
      return [i, r];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  static async findProgramAddress(t, e) {
    return this.findProgramAddressSync(t, e);
  }
  static isOnCurve(t) {
    const e = new gt(t);
    return z0(e.toBytes());
  }
}
xy = gt;
gt.default = new xy("11111111111111111111111111111111");
lc.set(gt, { kind: "struct", fields: [["_bn", "u256"]] });
class ZA {
  constructor(t) {
    if (((this._publicKey = void 0), (this._secretKey = void 0), t)) {
      const e = qt(t);
      if (t.length !== 64) throw new Error("bad secret key size");
      (this._publicKey = e.slice(32, 64)), (this._secretKey = e.slice(0, 32));
    } else
      (this._secretKey = qt($A())), (this._publicKey = qt(Ku(this._secretKey)));
  }
  get publicKey() {
    return new gt(this._publicKey);
  }
  get secretKey() {
    return Nt.concat([this._secretKey, this._publicKey], 64);
  }
}
const YA = new gt("BPFLoader1111111111111111111111111111111111"),
  os = 1232,
  vl = 127,
  mc = 64;
class Ad extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: block height exceeded.`),
      (this.signature = void 0),
      (this.signature = t);
  }
}
Object.defineProperty(Ad.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError",
});
class Ed extends Error {
  constructor(t, e) {
    super(
      `Transaction was not confirmed in ${e.toFixed(
        2
      )} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`
    ),
      (this.signature = void 0),
      (this.signature = t);
  }
}
Object.defineProperty(Ed.prototype, "name", {
  value: "TransactionExpiredTimeoutError",
});
class Co extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: the nonce is no longer valid.`),
      (this.signature = void 0),
      (this.signature = t);
  }
}
Object.defineProperty(Co.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError",
});
class wc {
  constructor(t, e) {
    (this.staticAccountKeys = void 0),
      (this.accountKeysFromLookups = void 0),
      (this.staticAccountKeys = t),
      (this.accountKeysFromLookups = e);
  }
  keySegments() {
    const t = [this.staticAccountKeys];
    return (
      this.accountKeysFromLookups &&
        (t.push(this.accountKeysFromLookups.writable),
        t.push(this.accountKeysFromLookups.readonly)),
      t
    );
  }
  get(t) {
    for (const e of this.keySegments()) {
      if (t < e.length) return e[t];
      t -= e.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(t) {
    if (this.length > 256)
      throw new Error("Account index overflow encountered during compilation");
    const r = new Map();
    this.keySegments()
      .flat()
      .forEach((s, o) => {
        r.set(s.toBase58(), o);
      });
    const i = (s) => {
      const o = r.get(s.toBase58());
      if (o === void 0)
        throw new Error(
          "Encountered an unknown instruction account key during compilation"
        );
      return o;
    };
    return t.map((s) => ({
      programIdIndex: i(s.programId),
      accountKeyIndexes: s.keys.map((o) => i(o.pubkey)),
      data: s.data,
    }));
  }
}
const jt = (n = "publicKey") => $.blob(32, n),
  XA = (n = "signature") => $.blob(64, n),
  Rs = (n = "string") => {
    const t = $.struct(
        [
          $.u32("length"),
          $.u32("lengthPadding"),
          $.blob($.offset($.u32(), -8), "chars"),
        ],
        n
      ),
      e = t.decode.bind(t),
      r = t.encode.bind(t),
      i = t;
    return (
      (i.decode = (s, o) => e(s, o).chars.toString()),
      (i.encode = (s, o, a) => {
        const c = { chars: Nt.from(s, "utf8") };
        return r(c, o, a);
      }),
      (i.alloc = (s) =>
        $.u32().span + $.u32().span + Nt.from(s, "utf8").length),
      i
    );
  },
  tE = (n = "authorized") => $.struct([jt("staker"), jt("withdrawer")], n),
  eE = (n = "lockup") =>
    $.struct([$.ns64("unixTimestamp"), $.ns64("epoch"), jt("custodian")], n),
  rE = (n = "voteInit") =>
    $.struct(
      [
        jt("nodePubkey"),
        jt("authorizedVoter"),
        jt("authorizedWithdrawer"),
        $.u8("commission"),
      ],
      n
    ),
  nE = (n = "voteAuthorizeWithSeedArgs") =>
    $.struct(
      [
        $.u32("voteAuthorizationType"),
        jt("currentAuthorityDerivedKeyOwnerPubkey"),
        Rs("currentAuthorityDerivedKeySeed"),
        jt("newAuthorized"),
      ],
      n
    );
function vy(n, t) {
  const e = (i) => {
    if (i.span >= 0) return i.span;
    if (typeof i.alloc == "function") return i.alloc(t[i.property]);
    if ("count" in i && "elementLayout" in i) {
      const s = t[i.property];
      if (Array.isArray(s)) return s.length * e(i.elementLayout);
    } else if ("fields" in i) return vy({ layout: i }, t[i.property]);
    return 0;
  };
  let r = 0;
  return (
    n.layout.fields.forEach((i) => {
      r += e(i);
    }),
    r
  );
}
function _r(n) {
  let t = 0,
    e = 0;
  for (;;) {
    let r = n.shift();
    if (((t |= (r & 127) << (e * 7)), (e += 1), (r & 128) === 0)) break;
  }
  return t;
}
function $r(n, t) {
  let e = t;
  for (;;) {
    let r = e & 127;
    if (((e >>= 7), e == 0)) {
      n.push(r);
      break;
    } else (r |= 128), n.push(r);
  }
}
function re(n, t) {
  if (!n) throw new Error(t || "Assertion failed");
}
class Sl {
  constructor(t, e) {
    (this.payer = void 0),
      (this.keyMetaMap = void 0),
      (this.payer = t),
      (this.keyMetaMap = e);
  }
  static compile(t, e) {
    const r = new Map(),
      i = (o) => {
        const a = o.toBase58();
        let c = r.get(a);
        return (
          c === void 0 &&
            ((c = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
            r.set(a, c)),
          c
        );
      },
      s = i(e);
    (s.isSigner = !0), (s.isWritable = !0);
    for (const o of t) {
      i(o.programId).isInvoked = !0;
      for (const a of o.keys) {
        const c = i(a.pubkey);
        c.isSigner || (c.isSigner = a.isSigner),
          c.isWritable || (c.isWritable = a.isWritable);
      }
    }
    return new Sl(e, r);
  }
  getMessageComponents() {
    const t = [...this.keyMetaMap.entries()];
    re(t.length <= 256, "Max static account keys length exceeded");
    const e = t.filter(([, c]) => c.isSigner && c.isWritable),
      r = t.filter(([, c]) => c.isSigner && !c.isWritable),
      i = t.filter(([, c]) => !c.isSigner && c.isWritable),
      s = t.filter(([, c]) => !c.isSigner && !c.isWritable),
      o = {
        numRequiredSignatures: e.length + r.length,
        numReadonlySignedAccounts: r.length,
        numReadonlyUnsignedAccounts: s.length,
      };
    {
      re(e.length > 0, "Expected at least one writable signer key");
      const [c] = e[0];
      re(
        c === this.payer.toBase58(),
        "Expected first writable signer key to be the fee payer"
      );
    }
    const a = [
      ...e.map(([c]) => new gt(c)),
      ...r.map(([c]) => new gt(c)),
      ...i.map(([c]) => new gt(c)),
      ...s.map(([c]) => new gt(c)),
    ];
    return [o, a];
  }
  extractTableLookup(t) {
    const [e, r] = this.drainKeysFoundInLookupTable(
        t.state.addresses,
        (o) => !o.isSigner && !o.isInvoked && o.isWritable
      ),
      [i, s] = this.drainKeysFoundInLookupTable(
        t.state.addresses,
        (o) => !o.isSigner && !o.isInvoked && !o.isWritable
      );
    if (!(e.length === 0 && i.length === 0))
      return [
        { accountKey: t.key, writableIndexes: e, readonlyIndexes: i },
        { writable: r, readonly: s },
      ];
  }
  drainKeysFoundInLookupTable(t, e) {
    const r = new Array(),
      i = new Array();
    for (const [s, o] of this.keyMetaMap.entries())
      if (e(o)) {
        const a = new gt(s),
          c = t.findIndex((f) => f.equals(a));
        c >= 0 &&
          (re(c < 256, "Max lookup table index exceeded"),
          r.push(c),
          i.push(a),
          this.keyMetaMap.delete(s));
      }
    return [r, i];
  }
}
const Sy = "Reached end of buffer unexpectedly";
function zn(n) {
  if (n.length === 0) throw new Error(Sy);
  return n.shift();
}
function Or(n, ...t) {
  const [e] = t;
  if (t.length === 2 ? e + (t[1] ?? 0) > n.length : e >= n.length)
    throw new Error(Sy);
  return n.splice(...t);
}
class xn {
  constructor(t) {
    (this.header = void 0),
      (this.accountKeys = void 0),
      (this.recentBlockhash = void 0),
      (this.instructions = void 0),
      (this.indexToProgramIds = new Map()),
      (this.header = t.header),
      (this.accountKeys = t.accountKeys.map((e) => new gt(e))),
      (this.recentBlockhash = t.recentBlockhash),
      (this.instructions = t.instructions),
      this.instructions.forEach((e) =>
        this.indexToProgramIds.set(
          e.programIdIndex,
          this.accountKeys[e.programIdIndex]
        )
      );
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: ir.decode(t.data),
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new wc(this.staticAccountKeys);
  }
  static compile(t) {
    const e = Sl.compile(t.instructions, t.payerKey),
      [r, i] = e.getMessageComponents(),
      o = new wc(i)
        .compileInstructions(t.instructions)
        .map((a) => ({
          programIdIndex: a.programIdIndex,
          accounts: a.accountKeyIndexes,
          data: ir.encode(a.data),
        }));
    return new xn({
      header: r,
      accountKeys: i,
      recentBlockhash: t.recentBlockhash,
      instructions: o,
    });
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures;
    if (t >= this.header.numRequiredSignatures) {
      const r = t - e,
        s =
          this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
      return r < s;
    } else {
      const r = e - this.header.numReadonlySignedAccounts;
      return t < r;
    }
  }
  isProgramId(t) {
    return this.indexToProgramIds.has(t);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((t, e) => !this.isProgramId(e));
  }
  serialize() {
    const t = this.accountKeys.length;
    let e = [];
    $r(e, t);
    const r = this.instructions.map((b) => {
      const { accounts: S, programIdIndex: P } = b,
        M = Array.from(ir.decode(b.data));
      let N = [];
      $r(N, S.length);
      let D = [];
      return (
        $r(D, M.length),
        {
          programIdIndex: P,
          keyIndicesCount: Nt.from(N),
          keyIndices: S,
          dataLength: Nt.from(D),
          data: M,
        }
      );
    });
    let i = [];
    $r(i, r.length);
    let s = Nt.alloc(os);
    Nt.from(i).copy(s);
    let o = i.length;
    r.forEach((b) => {
      const P = $.struct([
        $.u8("programIdIndex"),
        $.blob(b.keyIndicesCount.length, "keyIndicesCount"),
        $.seq($.u8("keyIndex"), b.keyIndices.length, "keyIndices"),
        $.blob(b.dataLength.length, "dataLength"),
        $.seq($.u8("userdatum"), b.data.length, "data"),
      ]).encode(b, s, o);
      o += P;
    }),
      (s = s.slice(0, o));
    const a = $.struct([
        $.blob(1, "numRequiredSignatures"),
        $.blob(1, "numReadonlySignedAccounts"),
        $.blob(1, "numReadonlyUnsignedAccounts"),
        $.blob(e.length, "keyCount"),
        $.seq(jt("key"), t, "keys"),
        jt("recentBlockhash"),
      ]),
      c = {
        numRequiredSignatures: Nt.from([this.header.numRequiredSignatures]),
        numReadonlySignedAccounts: Nt.from([
          this.header.numReadonlySignedAccounts,
        ]),
        numReadonlyUnsignedAccounts: Nt.from([
          this.header.numReadonlyUnsignedAccounts,
        ]),
        keyCount: Nt.from(e),
        keys: this.accountKeys.map((b) => qt(b.toBytes())),
        recentBlockhash: ir.decode(this.recentBlockhash),
      };
    let f = Nt.alloc(2048);
    const h = a.encode(c, f);
    return s.copy(f, h), f.slice(0, h + s.length);
  }
  static from(t) {
    let e = [...t];
    const r = zn(e);
    if (r !== (r & vl))
      throw new Error(
        "Versioned messages must be deserialized with VersionedMessage.deserialize()"
      );
    const i = zn(e),
      s = zn(e),
      o = _r(e);
    let a = [];
    for (let S = 0; S < o; S++) {
      const P = Or(e, 0, qn);
      a.push(new gt(Nt.from(P)));
    }
    const c = Or(e, 0, qn),
      f = _r(e);
    let h = [];
    for (let S = 0; S < f; S++) {
      const P = zn(e),
        M = _r(e),
        N = Or(e, 0, M),
        D = _r(e),
        q = Or(e, 0, D),
        z = ir.encode(Nt.from(q));
      h.push({ programIdIndex: P, accounts: N, data: z });
    }
    const b = {
      header: {
        numRequiredSignatures: r,
        numReadonlySignedAccounts: i,
        numReadonlyUnsignedAccounts: s,
      },
      recentBlockhash: ir.encode(Nt.from(c)),
      accountKeys: a,
      instructions: h,
    };
    return new xn(b);
  }
}
class no {
  constructor(t) {
    (this.header = void 0),
      (this.staticAccountKeys = void 0),
      (this.recentBlockhash = void 0),
      (this.compiledInstructions = void 0),
      (this.addressTableLookups = void 0),
      (this.header = t.header),
      (this.staticAccountKeys = t.staticAccountKeys),
      (this.recentBlockhash = t.recentBlockhash),
      (this.compiledInstructions = t.compiledInstructions),
      (this.addressTableLookups = t.addressTableLookups);
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let t = 0;
    for (const e of this.addressTableLookups)
      t += e.readonlyIndexes.length + e.writableIndexes.length;
    return t;
  }
  getAccountKeys(t) {
    let e;
    if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
      if (
        this.numAccountKeysFromLookups !=
        t.accountKeysFromLookups.writable.length +
          t.accountKeysFromLookups.readonly.length
      )
        throw new Error(
          "Failed to get account keys because of a mismatch in the number of account keys from lookups"
        );
      e = t.accountKeysFromLookups;
    } else if (
      t &&
      "addressLookupTableAccounts" in t &&
      t.addressLookupTableAccounts
    )
      e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error(
        "Failed to get account keys because address table lookups were not resolved"
      );
    return new wc(this.staticAccountKeys, e);
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures,
      r = this.staticAccountKeys.length;
    if (t >= r) {
      const i = t - r,
        s = this.addressTableLookups.reduce(
          (o, a) => o + a.writableIndexes.length,
          0
        );
      return i < s;
    } else if (t >= this.header.numRequiredSignatures) {
      const i = t - e,
        o = r - e - this.header.numReadonlyUnsignedAccounts;
      return i < o;
    } else {
      const i = e - this.header.numReadonlySignedAccounts;
      return t < i;
    }
  }
  resolveAddressTableLookups(t) {
    const e = { writable: [], readonly: [] };
    for (const r of this.addressTableLookups) {
      const i = t.find((s) => s.key.equals(r.accountKey));
      if (!i)
        throw new Error(
          `Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`
        );
      for (const s of r.writableIndexes)
        if (s < i.state.addresses.length) e.writable.push(i.state.addresses[s]);
        else
          throw new Error(
            `Failed to find address for index ${s} in address lookup table ${r.accountKey.toBase58()}`
          );
      for (const s of r.readonlyIndexes)
        if (s < i.state.addresses.length) e.readonly.push(i.state.addresses[s]);
        else
          throw new Error(
            `Failed to find address for index ${s} in address lookup table ${r.accountKey.toBase58()}`
          );
    }
    return e;
  }
  static compile(t) {
    const e = Sl.compile(t.instructions, t.payerKey),
      r = new Array(),
      i = { writable: new Array(), readonly: new Array() },
      s = t.addressLookupTableAccounts || [];
    for (const h of s) {
      const b = e.extractTableLookup(h);
      if (b !== void 0) {
        const [S, { writable: P, readonly: M }] = b;
        r.push(S), i.writable.push(...P), i.readonly.push(...M);
      }
    }
    const [o, a] = e.getMessageComponents(),
      f = new wc(a, i).compileInstructions(t.instructions);
    return new no({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: t.recentBlockhash,
      compiledInstructions: f,
      addressTableLookups: r,
    });
  }
  serialize() {
    const t = Array();
    $r(t, this.staticAccountKeys.length);
    const e = this.serializeInstructions(),
      r = Array();
    $r(r, this.compiledInstructions.length);
    const i = this.serializeAddressTableLookups(),
      s = Array();
    $r(s, this.addressTableLookups.length);
    const o = $.struct([
        $.u8("prefix"),
        $.struct(
          [
            $.u8("numRequiredSignatures"),
            $.u8("numReadonlySignedAccounts"),
            $.u8("numReadonlyUnsignedAccounts"),
          ],
          "header"
        ),
        $.blob(t.length, "staticAccountKeysLength"),
        $.seq(jt(), this.staticAccountKeys.length, "staticAccountKeys"),
        jt("recentBlockhash"),
        $.blob(r.length, "instructionsLength"),
        $.blob(e.length, "serializedInstructions"),
        $.blob(s.length, "addressTableLookupsLength"),
        $.blob(i.length, "serializedAddressTableLookups"),
      ]),
      a = new Uint8Array(os),
      f = o.encode(
        {
          prefix: 128,
          header: this.header,
          staticAccountKeysLength: new Uint8Array(t),
          staticAccountKeys: this.staticAccountKeys.map((h) => h.toBytes()),
          recentBlockhash: ir.decode(this.recentBlockhash),
          instructionsLength: new Uint8Array(r),
          serializedInstructions: e,
          addressTableLookupsLength: new Uint8Array(s),
          serializedAddressTableLookups: i,
        },
        a
      );
    return a.slice(0, f);
  }
  serializeInstructions() {
    let t = 0;
    const e = new Uint8Array(os);
    for (const r of this.compiledInstructions) {
      const i = Array();
      $r(i, r.accountKeyIndexes.length);
      const s = Array();
      $r(s, r.data.length);
      const o = $.struct([
        $.u8("programIdIndex"),
        $.blob(i.length, "encodedAccountKeyIndexesLength"),
        $.seq($.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
        $.blob(s.length, "encodedDataLength"),
        $.blob(r.data.length, "data"),
      ]);
      t += o.encode(
        {
          programIdIndex: r.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(i),
          accountKeyIndexes: r.accountKeyIndexes,
          encodedDataLength: new Uint8Array(s),
          data: r.data,
        },
        e,
        t
      );
    }
    return e.slice(0, t);
  }
  serializeAddressTableLookups() {
    let t = 0;
    const e = new Uint8Array(os);
    for (const r of this.addressTableLookups) {
      const i = Array();
      $r(i, r.writableIndexes.length);
      const s = Array();
      $r(s, r.readonlyIndexes.length);
      const o = $.struct([
        jt("accountKey"),
        $.blob(i.length, "encodedWritableIndexesLength"),
        $.seq($.u8(), r.writableIndexes.length, "writableIndexes"),
        $.blob(s.length, "encodedReadonlyIndexesLength"),
        $.seq($.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
      ]);
      t += o.encode(
        {
          accountKey: r.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(i),
          writableIndexes: r.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(s),
          readonlyIndexes: r.readonlyIndexes,
        },
        e,
        t
      );
    }
    return e.slice(0, t);
  }
  static deserialize(t) {
    let e = [...t];
    const r = zn(e),
      i = r & vl;
    re(r !== i, "Expected versioned message but received legacy message");
    const s = i;
    re(
      s === 0,
      `Expected versioned message with version 0 but found version ${s}`
    );
    const o = {
        numRequiredSignatures: zn(e),
        numReadonlySignedAccounts: zn(e),
        numReadonlyUnsignedAccounts: zn(e),
      },
      a = [],
      c = _r(e);
    for (let M = 0; M < c; M++) a.push(new gt(Or(e, 0, qn)));
    const f = ir.encode(Or(e, 0, qn)),
      h = _r(e),
      b = [];
    for (let M = 0; M < h; M++) {
      const N = zn(e),
        D = _r(e),
        q = Or(e, 0, D),
        z = _r(e),
        V = new Uint8Array(Or(e, 0, z));
      b.push({ programIdIndex: N, accountKeyIndexes: q, data: V });
    }
    const S = _r(e),
      P = [];
    for (let M = 0; M < S; M++) {
      const N = new gt(Or(e, 0, qn)),
        D = _r(e),
        q = Or(e, 0, D),
        z = _r(e),
        V = Or(e, 0, z);
      P.push({ accountKey: N, writableIndexes: q, readonlyIndexes: V });
    }
    return new no({
      header: o,
      staticAccountKeys: a,
      recentBlockhash: f,
      compiledInstructions: b,
      addressTableLookups: P,
    });
  }
}
const xd = {
  deserializeMessageVersion(n) {
    const t = n[0],
      e = t & vl;
    return e === t ? "legacy" : e;
  },
  deserialize: (n) => {
    const t = xd.deserializeMessageVersion(n);
    if (t === "legacy") return xn.from(n);
    if (t === 0) return no.deserialize(n);
    throw new Error(
      `Transaction message version ${t} deserialization is not supported`
    );
  },
};
let Xn = (function (n) {
  return (
    (n[(n.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
    (n[(n.PROCESSED = 1)] = "PROCESSED"),
    (n[(n.TIMED_OUT = 2)] = "TIMED_OUT"),
    (n[(n.NONCE_INVALID = 3)] = "NONCE_INVALID"),
    n
  );
})({});
const iE = Nt.alloc(mc).fill(0);
class ie {
  constructor(t) {
    (this.keys = void 0),
      (this.programId = void 0),
      (this.data = Nt.alloc(0)),
      (this.programId = t.programId),
      (this.keys = t.keys),
      t.data && (this.data = t.data);
  }
  toJSON() {
    return {
      keys: this.keys.map(({ pubkey: t, isSigner: e, isWritable: r }) => ({
        pubkey: t.toJSON(),
        isSigner: e,
        isWritable: r,
      })),
      programId: this.programId.toJSON(),
      data: [...this.data],
    };
  }
}
let he = class ph {
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  constructor(t) {
    if (
      ((this.signatures = []),
      (this.feePayer = void 0),
      (this.instructions = []),
      (this.recentBlockhash = void 0),
      (this.lastValidBlockHeight = void 0),
      (this.nonceInfo = void 0),
      (this.minNonceContextSlot = void 0),
      (this._message = void 0),
      (this._json = void 0),
      !!t)
    )
      if (
        (t.feePayer && (this.feePayer = t.feePayer),
        t.signatures && (this.signatures = t.signatures),
        Object.prototype.hasOwnProperty.call(t, "nonceInfo"))
      ) {
        const { minContextSlot: e, nonceInfo: r } = t;
        (this.minNonceContextSlot = e), (this.nonceInfo = r);
      } else if (
        Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")
      ) {
        const { blockhash: e, lastValidBlockHeight: r } = t;
        (this.recentBlockhash = e), (this.lastValidBlockHeight = r);
      } else {
        const { recentBlockhash: e, nonceInfo: r } = t;
        r && (this.nonceInfo = r), (this.recentBlockhash = e);
      }
  }
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo
        ? {
            nonce: this.nonceInfo.nonce,
            nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
          }
        : null,
      instructions: this.instructions.map((t) => t.toJSON()),
      signers: this.signatures.map(({ publicKey: t }) => t.toJSON()),
    };
  }
  add(...t) {
    if (t.length === 0) throw new Error("No instructions");
    return (
      t.forEach((e) => {
        "instructions" in e
          ? (this.instructions = this.instructions.concat(e.instructions))
          : "data" in e && "programId" in e && "keys" in e
          ? this.instructions.push(e)
          : this.instructions.push(new ie(e));
      }),
      this
    );
  }
  compileMessage() {
    if (
      this._message &&
      JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
    )
      return this._message;
    let t, e;
    if (
      (this.nonceInfo
        ? ((t = this.nonceInfo.nonce),
          this.instructions[0] != this.nonceInfo.nonceInstruction
            ? (e = [this.nonceInfo.nonceInstruction, ...this.instructions])
            : (e = this.instructions))
        : ((t = this.recentBlockhash), (e = this.instructions)),
      !t)
    )
      throw new Error("Transaction recentBlockhash required");
    e.length < 1 && console.warn("No instructions provided");
    let r;
    if (this.feePayer) r = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      r = this.signatures[0].publicKey;
    else throw new Error("Transaction fee payer required");
    for (let N = 0; N < e.length; N++)
      if (e[N].programId === void 0)
        throw new Error(
          `Transaction instruction index ${N} has undefined program id`
        );
    const i = [],
      s = [];
    e.forEach((N) => {
      N.keys.forEach((q) => {
        s.push({ ...q });
      });
      const D = N.programId.toString();
      i.includes(D) || i.push(D);
    }),
      i.forEach((N) => {
        s.push({ pubkey: new gt(N), isSigner: !1, isWritable: !1 });
      });
    const o = [];
    s.forEach((N) => {
      const D = N.pubkey.toString(),
        q = o.findIndex((z) => z.pubkey.toString() === D);
      q > -1
        ? ((o[q].isWritable = o[q].isWritable || N.isWritable),
          (o[q].isSigner = o[q].isSigner || N.isSigner))
        : o.push(N);
    }),
      o.sort(function (N, D) {
        if (N.isSigner !== D.isSigner) return N.isSigner ? -1 : 1;
        if (N.isWritable !== D.isWritable) return N.isWritable ? -1 : 1;
        const q = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: !1,
          numeric: !1,
          caseFirst: "lower",
        };
        return N.pubkey.toBase58().localeCompare(D.pubkey.toBase58(), "en", q);
      });
    const a = o.findIndex((N) => N.pubkey.equals(r));
    if (a > -1) {
      const [N] = o.splice(a, 1);
      (N.isSigner = !0), (N.isWritable = !0), o.unshift(N);
    } else o.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
    for (const N of this.signatures) {
      const D = o.findIndex((q) => q.pubkey.equals(N.publicKey));
      if (D > -1)
        o[D].isSigner ||
          ((o[D].isSigner = !0),
          console.warn(
            "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
          ));
      else throw new Error(`unknown signer: ${N.publicKey.toString()}`);
    }
    let c = 0,
      f = 0,
      h = 0;
    const b = [],
      S = [];
    o.forEach(({ pubkey: N, isSigner: D, isWritable: q }) => {
      D
        ? (b.push(N.toString()), (c += 1), q || (f += 1))
        : (S.push(N.toString()), q || (h += 1));
    });
    const P = b.concat(S),
      M = e.map((N) => {
        const { data: D, programId: q } = N;
        return {
          programIdIndex: P.indexOf(q.toString()),
          accounts: N.keys.map((z) => P.indexOf(z.pubkey.toString())),
          data: ir.encode(D),
        };
      });
    return (
      M.forEach((N) => {
        re(N.programIdIndex >= 0), N.accounts.forEach((D) => re(D >= 0));
      }),
      new xn({
        header: {
          numRequiredSignatures: c,
          numReadonlySignedAccounts: f,
          numReadonlyUnsignedAccounts: h,
        },
        accountKeys: P,
        recentBlockhash: t,
        instructions: M,
      })
    );
  }
  _compile() {
    const t = this.compileMessage(),
      e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
    return (
      (this.signatures.length === e.length &&
        this.signatures.every((i, s) => e[s].equals(i.publicKey))) ||
        (this.signatures = e.map((r) => ({ signature: null, publicKey: r }))),
      t
    );
  }
  serializeMessage() {
    return this._compile().serialize();
  }
  async getEstimatedFee(t) {
    return (await t.getFeeForMessage(this.compileMessage())).value;
  }
  setSigners(...t) {
    if (t.length === 0) throw new Error("No signers");
    const e = new Set();
    this.signatures = t
      .filter((r) => {
        const i = r.toString();
        return e.has(i) ? !1 : (e.add(i), !0);
      })
      .map((r) => ({ signature: null, publicKey: r }));
  }
  sign(...t) {
    if (t.length === 0) throw new Error("No signers");
    const e = new Set(),
      r = [];
    for (const s of t) {
      const o = s.publicKey.toString();
      e.has(o) || (e.add(o), r.push(s));
    }
    this.signatures = r.map((s) => ({
      signature: null,
      publicKey: s.publicKey,
    }));
    const i = this._compile();
    this._partialSign(i, ...r);
  }
  partialSign(...t) {
    if (t.length === 0) throw new Error("No signers");
    const e = new Set(),
      r = [];
    for (const s of t) {
      const o = s.publicKey.toString();
      e.has(o) || (e.add(o), r.push(s));
    }
    const i = this._compile();
    this._partialSign(i, ...r);
  }
  _partialSign(t, ...e) {
    const r = t.serialize();
    e.forEach((i) => {
      const s = wd(r, i.secretKey);
      this._addSignature(i.publicKey, qt(s));
    });
  }
  addSignature(t, e) {
    this._compile(), this._addSignature(t, e);
  }
  _addSignature(t, e) {
    re(e.length === 64);
    const r = this.signatures.findIndex((i) => t.equals(i.publicKey));
    if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
    this.signatures[r].signature = Nt.from(e);
  }
  verifySignatures(t = !0) {
    return !this._getMessageSignednessErrors(this.serializeMessage(), t);
  }
  _getMessageSignednessErrors(t, e) {
    const r = {};
    for (const { signature: i, publicKey: s } of this.signatures)
      i === null
        ? e && (r.missing || (r.missing = [])).push(s)
        : QA(i, t, s.toBytes()) || (r.invalid || (r.invalid = [])).push(s);
    return r.invalid || r.missing ? r : void 0;
  }
  serialize(t) {
    const { requireAllSignatures: e, verifySignatures: r } = Object.assign(
        { requireAllSignatures: !0, verifySignatures: !0 },
        t
      ),
      i = this.serializeMessage();
    if (r) {
      const s = this._getMessageSignednessErrors(i, e);
      if (s) {
        let o = "Signature verification failed.";
        throw (
          (s.invalid &&
            (o += `
Invalid signature for public key${
              s.invalid.length === 1 ? "" : "(s)"
            } [\`${s.invalid.map((a) => a.toBase58()).join("`, `")}\`].`),
          s.missing &&
            (o += `
Missing signature for public key${
              s.missing.length === 1 ? "" : "(s)"
            } [\`${s.missing.map((a) => a.toBase58()).join("`, `")}\`].`),
          new Error(o))
        );
      }
    }
    return this._serialize(i);
  }
  _serialize(t) {
    const { signatures: e } = this,
      r = [];
    $r(r, e.length);
    const i = r.length + e.length * 64 + t.length,
      s = Nt.alloc(i);
    return (
      re(e.length < 256),
      Nt.from(r).copy(s, 0),
      e.forEach(({ signature: o }, a) => {
        o !== null &&
          (re(o.length === 64, "signature has invalid length"),
          Nt.from(o).copy(s, r.length + a * 64));
      }),
      t.copy(s, r.length + e.length * 64),
      re(s.length <= os, `Transaction too large: ${s.length} > ${os}`),
      s
    );
  }
  get keys() {
    return (
      re(this.instructions.length === 1),
      this.instructions[0].keys.map((t) => t.pubkey)
    );
  }
  get programId() {
    return re(this.instructions.length === 1), this.instructions[0].programId;
  }
  get data() {
    return re(this.instructions.length === 1), this.instructions[0].data;
  }
  static from(t) {
    let e = [...t];
    const r = _r(e);
    let i = [];
    for (let s = 0; s < r; s++) {
      const o = Or(e, 0, mc);
      i.push(ir.encode(Nt.from(o)));
    }
    return ph.populate(xn.from(e), i);
  }
  static populate(t, e = []) {
    const r = new ph();
    return (
      (r.recentBlockhash = t.recentBlockhash),
      t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]),
      e.forEach((i, s) => {
        const o = {
          signature: i == ir.encode(iE) ? null : ir.decode(i),
          publicKey: t.accountKeys[s],
        };
        r.signatures.push(o);
      }),
      t.instructions.forEach((i) => {
        const s = i.accounts.map((o) => {
          const a = t.accountKeys[o];
          return {
            pubkey: a,
            isSigner:
              r.signatures.some(
                (c) => c.publicKey.toString() === a.toString()
              ) || t.isAccountSigner(o),
            isWritable: t.isAccountWritable(o),
          };
        });
        r.instructions.push(
          new ie({
            keys: s,
            programId: t.accountKeys[i.programIdIndex],
            data: ir.decode(i.data),
          })
        );
      }),
      (r._message = t),
      (r._json = r.toJSON()),
      r
    );
  }
};
class kd {
  constructor(t) {
    (this.payerKey = void 0),
      (this.instructions = void 0),
      (this.recentBlockhash = void 0),
      (this.payerKey = t.payerKey),
      (this.instructions = t.instructions),
      (this.recentBlockhash = t.recentBlockhash);
  }
  static decompile(t, e) {
    const { header: r, compiledInstructions: i, recentBlockhash: s } = t,
      {
        numRequiredSignatures: o,
        numReadonlySignedAccounts: a,
        numReadonlyUnsignedAccounts: c,
      } = r,
      f = o - a;
    re(f > 0, "Message header is invalid");
    const h = t.staticAccountKeys.length - o - c;
    re(h >= 0, "Message header is invalid");
    const b = t.getAccountKeys(e),
      S = b.get(0);
    if (S === void 0)
      throw new Error(
        "Failed to decompile message because no account keys were found"
      );
    const P = [];
    for (const M of i) {
      const N = [];
      for (const q of M.accountKeyIndexes) {
        const z = b.get(q);
        if (z === void 0)
          throw new Error(`Failed to find key for account key index ${q}`);
        const V = q < o;
        let et;
        V
          ? (et = q < f)
          : q < b.staticAccountKeys.length
          ? (et = q - o < h)
          : (et =
              q - b.staticAccountKeys.length <
              b.accountKeysFromLookups.writable.length),
          N.push({
            pubkey: z,
            isSigner: q < r.numRequiredSignatures,
            isWritable: et,
          });
      }
      const D = b.get(M.programIdIndex);
      if (D === void 0)
        throw new Error(
          `Failed to find program id for program id index ${M.programIdIndex}`
        );
      P.push(new ie({ programId: D, data: qt(M.data), keys: N }));
    }
    return new kd({ payerKey: S, instructions: P, recentBlockhash: s });
  }
  compileToLegacyMessage() {
    return xn.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
    });
  }
  compileToV0Message(t) {
    return no.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
      addressLookupTableAccounts: t,
    });
  }
}
class vd {
  get version() {
    return this.message.version;
  }
  constructor(t, e) {
    if (((this.signatures = void 0), (this.message = void 0), e !== void 0))
      re(
        e.length === t.header.numRequiredSignatures,
        "Expected signatures length to be equal to the number of required signatures"
      ),
        (this.signatures = e);
    else {
      const r = [];
      for (let i = 0; i < t.header.numRequiredSignatures; i++)
        r.push(new Uint8Array(mc));
      this.signatures = r;
    }
    this.message = t;
  }
  serialize() {
    const t = this.message.serialize(),
      e = Array();
    $r(e, this.signatures.length);
    const r = $.struct([
        $.blob(e.length, "encodedSignaturesLength"),
        $.seq(XA(), this.signatures.length, "signatures"),
        $.blob(t.length, "serializedMessage"),
      ]),
      i = new Uint8Array(2048),
      s = r.encode(
        {
          encodedSignaturesLength: new Uint8Array(e),
          signatures: this.signatures,
          serializedMessage: t,
        },
        i
      );
    return i.slice(0, s);
  }
  static deserialize(t) {
    let e = [...t];
    const r = [],
      i = _r(e);
    for (let o = 0; o < i; o++) r.push(new Uint8Array(Or(e, 0, mc)));
    const s = xd.deserialize(new Uint8Array(e));
    return new vd(s, r);
  }
  sign(t) {
    const e = this.message.serialize(),
      r = this.message.staticAccountKeys.slice(
        0,
        this.message.header.numRequiredSignatures
      );
    for (const i of t) {
      const s = r.findIndex((o) => o.equals(i.publicKey));
      re(s >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`),
        (this.signatures[s] = wd(e, i.secretKey));
    }
  }
  addSignature(t, e) {
    re(e.byteLength === 64, "Signature must be 64 bytes long");
    const i = this.message.staticAccountKeys
      .slice(0, this.message.header.numRequiredSignatures)
      .findIndex((s) => s.equals(t));
    re(
      i >= 0,
      `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`
    ),
      (this.signatures[i] = e);
  }
}
const sE = 160,
  oE = 64,
  aE = sE / oE,
  Iy = 1e3 / aE,
  Un = new gt("SysvarC1ock11111111111111111111111111111111"),
  cE = new gt("SysvarEpochSchedu1e111111111111111111111111"),
  uE = new gt("Sysvar1nstructions1111111111111111111111111"),
  ku = new gt("SysvarRecentB1ockHashes11111111111111111111"),
  La = new gt("SysvarRent111111111111111111111111111111111"),
  lE = new gt("SysvarRewards111111111111111111111111111111"),
  fE = new gt("SysvarS1otHashes111111111111111111111111111"),
  hE = new gt("SysvarS1otHistory11111111111111111111111111"),
  vu = new gt("SysvarStakeHistory1111111111111111111111111");
class bc extends Error {
  constructor({ action: t, signature: e, transactionMessage: r, logs: i }) {
    const s = i
        ? `Logs: 
${JSON.stringify(i.slice(-10), null, 2)}. `
        : "",
      o =
        "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
    let a;
    switch (t) {
      case "send":
        a =
          `Transaction ${e} resulted in an error. 
${r}. ` +
          s +
          o;
        break;
      case "simulate":
        a =
          `Simulation failed. 
Message: ${r}. 
` +
          s +
          o;
        break;
      default:
        a = `Unknown action '${((c) => c)(t)}'`;
    }
    super(a),
      (this.signature = void 0),
      (this.transactionMessage = void 0),
      (this.transactionLogs = void 0),
      (this.signature = e),
      (this.transactionMessage = r),
      (this.transactionLogs = i || void 0);
  }
  get transactionError() {
    return {
      message: this.transactionMessage,
      logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0,
    };
  }
  get logs() {
    const t = this.transactionLogs;
    if (!(t != null && typeof t == "object" && "then" in t)) return t;
  }
  async getLogs(t) {
    return (
      Array.isArray(this.transactionLogs) ||
        (this.transactionLogs = new Promise((e, r) => {
          t.getTransaction(this.signature)
            .then((i) => {
              if (i && i.meta && i.meta.logMessages) {
                const s = i.meta.logMessages;
                (this.transactionLogs = s), e(s);
              } else r(new Error("Log messages not found"));
            })
            .catch(r);
        })),
      await this.transactionLogs
    );
  }
}
const dE = {
  JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
  JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
  JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
  JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
  JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
  JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
  JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
  JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
  JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
  JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
  JSON_RPC_SCAN_ERROR: -32012,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
  JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
  JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
  JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
};
class St extends Error {
  constructor({ code: t, message: e, data: r }, i) {
    super(i != null ? `${i}: ${e}` : e),
      (this.code = void 0),
      (this.data = void 0),
      (this.code = t),
      (this.data = r),
      (this.name = "SolanaJSONRPCError");
  }
}
async function gh(n, t, e, r) {
  const i = r && {
      skipPreflight: r.skipPreflight,
      preflightCommitment: r.preflightCommitment || r.commitment,
      maxRetries: r.maxRetries,
      minContextSlot: r.minContextSlot,
    },
    s = await n.sendTransaction(t, e, i);
  let o;
  if (t.recentBlockhash != null && t.lastValidBlockHeight != null)
    o = (
      await n.confirmTransaction(
        {
          abortSignal: r == null ? void 0 : r.abortSignal,
          signature: s,
          blockhash: t.recentBlockhash,
          lastValidBlockHeight: t.lastValidBlockHeight,
        },
        r && r.commitment
      )
    ).value;
  else if (t.minNonceContextSlot != null && t.nonceInfo != null) {
    const { nonceInstruction: a } = t.nonceInfo,
      c = a.keys[0].pubkey;
    o = (
      await n.confirmTransaction(
        {
          abortSignal: r == null ? void 0 : r.abortSignal,
          minContextSlot: t.minNonceContextSlot,
          nonceAccountPubkey: c,
          nonceValue: t.nonceInfo.nonce,
          signature: s,
        },
        r && r.commitment
      )
    ).value;
  } else
    (r == null ? void 0 : r.abortSignal) != null &&
      console.warn(
        "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
      ),
      (o = (await n.confirmTransaction(s, r && r.commitment)).value);
  if (o.err)
    throw s != null
      ? new bc({
          action: "send",
          signature: s,
          transactionMessage: `Status: (${JSON.stringify(o)})`,
        })
      : new Error(`Transaction ${s} failed (${JSON.stringify(o)})`);
  return s;
}
function bs(n) {
  return new Promise((t) => setTimeout(t, n));
}
function te(n, t) {
  const e = n.layout.span >= 0 ? n.layout.span : vy(n, t),
    r = Nt.alloc(e),
    i = Object.assign({ instruction: n.index }, t);
  return n.layout.encode(i, r), r;
}
function ne(n, t) {
  let e;
  try {
    e = n.layout.decode(t);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (e.instruction !== n.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${e.instruction} != ${n.index}`
    );
  return e;
}
const By = $.nu64("lamportsPerSignature"),
  Ry = $.struct([
    $.u32("version"),
    $.u32("state"),
    jt("authorizedPubkey"),
    jt("nonce"),
    $.struct([By], "feeCalculator"),
  ]),
  yh = Ry.span;
class Il {
  constructor(t) {
    (this.authorizedPubkey = void 0),
      (this.nonce = void 0),
      (this.feeCalculator = void 0),
      (this.authorizedPubkey = t.authorizedPubkey),
      (this.nonce = t.nonce),
      (this.feeCalculator = t.feeCalculator);
  }
  static fromAccountData(t) {
    const e = Ry.decode(qt(t), 0);
    return new Il({
      authorizedPubkey: new gt(e.authorizedPubkey),
      nonce: new gt(e.nonce).toString(),
      feeCalculator: e.feeCalculator,
    });
  }
}
function Ua(n) {
  const t = $.blob(8, n),
    e = t.decode.bind(t),
    r = t.encode.bind(t),
    i = t,
    s = Zb();
  return (
    (i.decode = (o, a) => {
      const c = e(o, a);
      return s.decode(c);
    }),
    (i.encode = (o, a, c) => {
      const f = s.encode(o);
      return r(f, a, c);
    }),
    i
  );
}
class pE {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const r = $.u32("instruction").decode(t.data);
    let i;
    for (const [s, o] of Object.entries(we))
      if (o.index == r) {
        i = s;
        break;
      }
    if (!i)
      throw new Error("Instruction type incorrect; not a SystemInstruction");
    return i;
  }
  static decodeCreateAccount(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { lamports: e, space: r, programId: i } = ne(we.Create, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      newAccountPubkey: t.keys[1].pubkey,
      lamports: e,
      space: r,
      programId: new gt(i),
    };
  }
  static decodeTransfer(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { lamports: e } = ne(we.Transfer, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      toPubkey: t.keys[1].pubkey,
      lamports: e,
    };
  }
  static decodeTransferWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const {
      lamports: e,
      seed: r,
      programId: i,
    } = ne(we.TransferWithSeed, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      basePubkey: t.keys[1].pubkey,
      toPubkey: t.keys[2].pubkey,
      lamports: e,
      seed: r,
      programId: new gt(i),
    };
  }
  static decodeAllocate(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { space: e } = ne(we.Allocate, t.data);
    return { accountPubkey: t.keys[0].pubkey, space: e };
  }
  static decodeAllocateWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const {
      base: e,
      seed: r,
      space: i,
      programId: s,
    } = ne(we.AllocateWithSeed, t.data);
    return {
      accountPubkey: t.keys[0].pubkey,
      basePubkey: new gt(e),
      seed: r,
      space: i,
      programId: new gt(s),
    };
  }
  static decodeAssign(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { programId: e } = ne(we.Assign, t.data);
    return { accountPubkey: t.keys[0].pubkey, programId: new gt(e) };
  }
  static decodeAssignWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
    const { base: e, seed: r, programId: i } = ne(we.AssignWithSeed, t.data);
    return {
      accountPubkey: t.keys[0].pubkey,
      basePubkey: new gt(e),
      seed: r,
      programId: new gt(i),
    };
  }
  static decodeCreateWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const {
      base: e,
      seed: r,
      lamports: i,
      space: s,
      programId: o,
    } = ne(we.CreateWithSeed, t.data);
    return {
      fromPubkey: t.keys[0].pubkey,
      newAccountPubkey: t.keys[1].pubkey,
      basePubkey: new gt(e),
      seed: r,
      lamports: i,
      space: s,
      programId: new gt(o),
    };
  }
  static decodeNonceInitialize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { authorized: e } = ne(we.InitializeNonceAccount, t.data);
    return { noncePubkey: t.keys[0].pubkey, authorizedPubkey: new gt(e) };
  }
  static decodeNonceAdvance(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 3),
      ne(we.AdvanceNonceAccount, t.data),
      { noncePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey }
    );
  }
  static decodeNonceWithdraw(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
    const { lamports: e } = ne(we.WithdrawNonceAccount, t.data);
    return {
      noncePubkey: t.keys[0].pubkey,
      toPubkey: t.keys[1].pubkey,
      authorizedPubkey: t.keys[4].pubkey,
      lamports: e,
    };
  }
  static decodeNonceAuthorize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { authorized: e } = ne(we.AuthorizeNonceAccount, t.data);
    return {
      noncePubkey: t.keys[0].pubkey,
      authorizedPubkey: t.keys[1].pubkey,
      newAuthorizedPubkey: new gt(e),
    };
  }
  static checkProgramId(t) {
    if (!t.equals($e.programId))
      throw new Error("invalid instruction; programId is not SystemProgram");
  }
  static checkKeyLength(t, e) {
    if (t.length < e)
      throw new Error(
        `invalid instruction; found ${t.length} keys, expected at least ${e}`
      );
  }
}
const we = Object.freeze({
  Create: {
    index: 0,
    layout: $.struct([
      $.u32("instruction"),
      $.ns64("lamports"),
      $.ns64("space"),
      jt("programId"),
    ]),
  },
  Assign: {
    index: 1,
    layout: $.struct([$.u32("instruction"), jt("programId")]),
  },
  Transfer: {
    index: 2,
    layout: $.struct([$.u32("instruction"), Ua("lamports")]),
  },
  CreateWithSeed: {
    index: 3,
    layout: $.struct([
      $.u32("instruction"),
      jt("base"),
      Rs("seed"),
      $.ns64("lamports"),
      $.ns64("space"),
      jt("programId"),
    ]),
  },
  AdvanceNonceAccount: { index: 4, layout: $.struct([$.u32("instruction")]) },
  WithdrawNonceAccount: {
    index: 5,
    layout: $.struct([$.u32("instruction"), $.ns64("lamports")]),
  },
  InitializeNonceAccount: {
    index: 6,
    layout: $.struct([$.u32("instruction"), jt("authorized")]),
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: $.struct([$.u32("instruction"), jt("authorized")]),
  },
  Allocate: {
    index: 8,
    layout: $.struct([$.u32("instruction"), $.ns64("space")]),
  },
  AllocateWithSeed: {
    index: 9,
    layout: $.struct([
      $.u32("instruction"),
      jt("base"),
      Rs("seed"),
      $.ns64("space"),
      jt("programId"),
    ]),
  },
  AssignWithSeed: {
    index: 10,
    layout: $.struct([
      $.u32("instruction"),
      jt("base"),
      Rs("seed"),
      jt("programId"),
    ]),
  },
  TransferWithSeed: {
    index: 11,
    layout: $.struct([
      $.u32("instruction"),
      Ua("lamports"),
      Rs("seed"),
      jt("programId"),
    ]),
  },
  UpgradeNonceAccount: { index: 12, layout: $.struct([$.u32("instruction")]) },
});
class $e {
  constructor() {}
  static createAccount(t) {
    const e = we.Create,
      r = te(e, {
        lamports: t.lamports,
        space: t.space,
        programId: qt(t.programId.toBuffer()),
      });
    return new ie({
      keys: [
        { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
        { pubkey: t.newAccountPubkey, isSigner: !0, isWritable: !0 },
      ],
      programId: this.programId,
      data: r,
    });
  }
  static transfer(t) {
    let e, r;
    if ("basePubkey" in t) {
      const i = we.TransferWithSeed;
      (e = te(i, {
        lamports: BigInt(t.lamports),
        seed: t.seed,
        programId: qt(t.programId.toBuffer()),
      })),
        (r = [
          { pubkey: t.fromPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
          { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
        ]);
    } else {
      const i = we.Transfer;
      (e = te(i, { lamports: BigInt(t.lamports) })),
        (r = [
          { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
          { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
        ]);
    }
    return new ie({ keys: r, programId: this.programId, data: e });
  }
  static assign(t) {
    let e, r;
    if ("basePubkey" in t) {
      const i = we.AssignWithSeed;
      (e = te(i, {
        base: qt(t.basePubkey.toBuffer()),
        seed: t.seed,
        programId: qt(t.programId.toBuffer()),
      })),
        (r = [
          { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
        ]);
    } else {
      const i = we.Assign;
      (e = te(i, { programId: qt(t.programId.toBuffer()) })),
        (r = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }]);
    }
    return new ie({ keys: r, programId: this.programId, data: e });
  }
  static createAccountWithSeed(t) {
    const e = we.CreateWithSeed,
      r = te(e, {
        base: qt(t.basePubkey.toBuffer()),
        seed: t.seed,
        lamports: t.lamports,
        space: t.space,
        programId: qt(t.programId.toBuffer()),
      });
    let i = [
      { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
      { pubkey: t.newAccountPubkey, isSigner: !1, isWritable: !0 },
    ];
    return (
      t.basePubkey.equals(t.fromPubkey) ||
        i.push({ pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }),
      new ie({ keys: i, programId: this.programId, data: r })
    );
  }
  static createNonceAccount(t) {
    const e = new he();
    "basePubkey" in t && "seed" in t
      ? e.add(
          $e.createAccountWithSeed({
            fromPubkey: t.fromPubkey,
            newAccountPubkey: t.noncePubkey,
            basePubkey: t.basePubkey,
            seed: t.seed,
            lamports: t.lamports,
            space: yh,
            programId: this.programId,
          })
        )
      : e.add(
          $e.createAccount({
            fromPubkey: t.fromPubkey,
            newAccountPubkey: t.noncePubkey,
            lamports: t.lamports,
            space: yh,
            programId: this.programId,
          })
        );
    const r = {
      noncePubkey: t.noncePubkey,
      authorizedPubkey: t.authorizedPubkey,
    };
    return e.add(this.nonceInitialize(r)), e;
  }
  static nonceInitialize(t) {
    const e = we.InitializeNonceAccount,
      r = te(e, { authorized: qt(t.authorizedPubkey.toBuffer()) }),
      i = {
        keys: [
          { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: ku, isSigner: !1, isWritable: !1 },
          { pubkey: La, isSigner: !1, isWritable: !1 },
        ],
        programId: this.programId,
        data: r,
      };
    return new ie(i);
  }
  static nonceAdvance(t) {
    const e = we.AdvanceNonceAccount,
      r = te(e),
      i = {
        keys: [
          { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: ku, isSigner: !1, isWritable: !1 },
          { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: r,
      };
    return new ie(i);
  }
  static nonceWithdraw(t) {
    const e = we.WithdrawNonceAccount,
      r = te(e, { lamports: t.lamports });
    return new ie({
      keys: [
        { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
        { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
        { pubkey: ku, isSigner: !1, isWritable: !1 },
        { pubkey: La, isSigner: !1, isWritable: !1 },
        { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: r,
    });
  }
  static nonceAuthorize(t) {
    const e = we.AuthorizeNonceAccount,
      r = te(e, { authorized: qt(t.newAuthorizedPubkey.toBuffer()) });
    return new ie({
      keys: [
        { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
        { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: r,
    });
  }
  static allocate(t) {
    let e, r;
    if ("basePubkey" in t) {
      const i = we.AllocateWithSeed;
      (e = te(i, {
        base: qt(t.basePubkey.toBuffer()),
        seed: t.seed,
        space: t.space,
        programId: qt(t.programId.toBuffer()),
      })),
        (r = [
          { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
        ]);
    } else {
      const i = we.Allocate;
      (e = te(i, { space: t.space })),
        (r = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }]);
    }
    return new ie({ keys: r, programId: this.programId, data: e });
  }
}
$e.programId = new gt("11111111111111111111111111111111");
const gE = os - 300;
class io {
  constructor() {}
  static getMinNumSignatures(t) {
    return 2 * (Math.ceil(t / io.chunkSize) + 1 + 1);
  }
  static async load(t, e, r, i, s) {
    {
      const b = await t.getMinimumBalanceForRentExemption(s.length),
        S = await t.getAccountInfo(r.publicKey, "confirmed");
      let P = null;
      if (S !== null) {
        if (S.executable)
          return (
            console.error("Program load failed, account is already executable"),
            !1
          );
        S.data.length !== s.length &&
          ((P = P || new he()),
          P.add($e.allocate({ accountPubkey: r.publicKey, space: s.length }))),
          S.owner.equals(i) ||
            ((P = P || new he()),
            P.add($e.assign({ accountPubkey: r.publicKey, programId: i }))),
          S.lamports < b &&
            ((P = P || new he()),
            P.add(
              $e.transfer({
                fromPubkey: e.publicKey,
                toPubkey: r.publicKey,
                lamports: b - S.lamports,
              })
            ));
      } else
        P = new he().add(
          $e.createAccount({
            fromPubkey: e.publicKey,
            newAccountPubkey: r.publicKey,
            lamports: b > 0 ? b : 1,
            space: s.length,
            programId: i,
          })
        );
      P !== null && (await gh(t, P, [e, r], { commitment: "confirmed" }));
    }
    const o = $.struct([
        $.u32("instruction"),
        $.u32("offset"),
        $.u32("bytesLength"),
        $.u32("bytesLengthPadding"),
        $.seq($.u8("byte"), $.offset($.u32(), -8), "bytes"),
      ]),
      a = io.chunkSize;
    let c = 0,
      f = s,
      h = [];
    for (; f.length > 0; ) {
      const b = f.slice(0, a),
        S = Nt.alloc(a + 16);
      o.encode(
        {
          instruction: 0,
          offset: c,
          bytes: b,
          bytesLength: 0,
          bytesLengthPadding: 0,
        },
        S
      );
      const P = new he().add({
        keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }],
        programId: i,
        data: S,
      });
      h.push(gh(t, P, [e, r], { commitment: "confirmed" })),
        t._rpcEndpoint.includes("solana.com") && (await bs(1e3 / 4)),
        (c += a),
        (f = f.slice(a));
    }
    await Promise.all(h);
    {
      const b = $.struct([$.u32("instruction")]),
        S = Nt.alloc(b.span);
      b.encode({ instruction: 1 }, S);
      const P = new he().add({
          keys: [
            { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
            { pubkey: La, isSigner: !1, isWritable: !1 },
          ],
          programId: i,
          data: S,
        }),
        M = "processed",
        N = await t.sendTransaction(P, [e, r], { preflightCommitment: M }),
        { context: D, value: q } = await t.confirmTransaction(
          {
            signature: N,
            lastValidBlockHeight: P.lastValidBlockHeight,
            blockhash: P.recentBlockhash,
          },
          M
        );
      if (q.err)
        throw new Error(`Transaction ${N} failed (${JSON.stringify(q)})`);
      for (;;) {
        try {
          if ((await t.getSlot({ commitment: M })) > D.slot) break;
        } catch {}
        await new Promise((z) => setTimeout(z, Math.round(Iy / 2)));
      }
    }
    return !0;
  }
}
io.chunkSize = gE;
const yE = new gt("BPFLoader2111111111111111111111111111111111");
class mE {
  static getMinNumSignatures(t) {
    return io.getMinNumSignatures(t);
  }
  static load(t, e, r, i, s) {
    return io.load(t, e, r, s, i);
  }
}
function wE(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Lf, G0;
function bE() {
  if (G0) return Lf;
  G0 = 1;
  var n = Object.prototype.toString,
    t =
      Object.keys ||
      function (r) {
        var i = [];
        for (var s in r) i.push(s);
        return i;
      };
  function e(r, i) {
    var s, o, a, c, f, h, b;
    if (r === !0) return "true";
    if (r === !1) return "false";
    switch (typeof r) {
      case "object":
        if (r === null) return null;
        if (r.toJSON && typeof r.toJSON == "function") return e(r.toJSON(), i);
        if (((b = n.call(r)), b === "[object Array]")) {
          for (a = "[", o = r.length - 1, s = 0; s < o; s++)
            a += e(r[s], !0) + ",";
          return o > -1 && (a += e(r[s], !0)), a + "]";
        } else if (b === "[object Object]") {
          for (c = t(r).sort(), o = c.length, a = "", s = 0; s < o; )
            (f = c[s]),
              (h = e(r[f], !1)),
              h !== void 0 &&
                (a && (a += ","), (a += JSON.stringify(f) + ":" + h)),
              s++;
          return "{" + a + "}";
        } else return JSON.stringify(r);
      case "function":
      case "undefined":
        return i ? null : void 0;
      case "string":
        return JSON.stringify(r);
      default:
        return isFinite(r) ? r : null;
    }
  }
  return (
    (Lf = function (r) {
      var i = e(r, !1);
      if (i !== void 0) return "" + i;
    }),
    Lf
  );
}
var AE = bE(),
  K0 = wE(AE);
const ec = 32;
function Uf(n) {
  let t = 0;
  for (; n > 1; ) (n /= 2), t++;
  return t;
}
function EE(n) {
  return n === 0
    ? 1
    : (n--,
      (n |= n >> 1),
      (n |= n >> 2),
      (n |= n >> 4),
      (n |= n >> 8),
      (n |= n >> 16),
      (n |= n >> 32),
      n + 1);
}
class Py {
  constructor(t, e, r, i, s) {
    (this.slotsPerEpoch = void 0),
      (this.leaderScheduleSlotOffset = void 0),
      (this.warmup = void 0),
      (this.firstNormalEpoch = void 0),
      (this.firstNormalSlot = void 0),
      (this.slotsPerEpoch = t),
      (this.leaderScheduleSlotOffset = e),
      (this.warmup = r),
      (this.firstNormalEpoch = i),
      (this.firstNormalSlot = s);
  }
  getEpoch(t) {
    return this.getEpochAndSlotIndex(t)[0];
  }
  getEpochAndSlotIndex(t) {
    if (t < this.firstNormalSlot) {
      const e = Uf(EE(t + ec + 1)) - Uf(ec) - 1,
        r = this.getSlotsInEpoch(e),
        i = t - (r - ec);
      return [e, i];
    } else {
      const e = t - this.firstNormalSlot,
        r = Math.floor(e / this.slotsPerEpoch),
        i = this.firstNormalEpoch + r,
        s = e % this.slotsPerEpoch;
      return [i, s];
    }
  }
  getFirstSlotInEpoch(t) {
    return t <= this.firstNormalEpoch
      ? (Math.pow(2, t) - 1) * ec
      : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(t) {
    return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
  }
  getSlotsInEpoch(t) {
    return t < this.firstNormalEpoch
      ? Math.pow(2, t + Uf(ec))
      : this.slotsPerEpoch;
  }
}
var xE = globalThis.fetch;
class kE extends _A {
  constructor(t, e, r) {
    const i = (s) => {
      const o = NA(s, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...e,
      });
      return (
        "socket" in o
          ? (this.underlyingSocket = o.socket)
          : (this.underlyingSocket = o),
        o
      );
    };
    super(i, t, e, r), (this.underlyingSocket = void 0);
  }
  call(...t) {
    var r;
    const e = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
    return e === 1
      ? super.call(...t)
      : Promise.reject(
          new Error(
            "Tried to call a JSON-RPC method `" +
              t[0] +
              "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
              e +
              ")"
          )
        );
  }
  notify(...t) {
    var r;
    const e = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
    return e === 1
      ? super.notify(...t)
      : Promise.reject(
          new Error(
            "Tried to send a JSON-RPC notification `" +
              t[0] +
              "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
              e +
              ")"
          )
        );
  }
}
function vE(n, t) {
  let e;
  try {
    e = n.layout.decode(t);
  } catch (r) {
    throw new Error("invalid instruction; " + r);
  }
  if (e.typeIndex !== n.index)
    throw new Error(
      `invalid account data; account type mismatch ${e.typeIndex} != ${n.index}`
    );
  return e;
}
const V0 = 56;
class mh {
  constructor(t) {
    (this.key = void 0),
      (this.state = void 0),
      (this.key = t.key),
      (this.state = t.state);
  }
  isActive() {
    const t = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === t;
  }
  static deserialize(t) {
    const e = vE(SE, t),
      r = t.length - V0;
    re(r >= 0, "lookup table is invalid"),
      re(r % 32 === 0, "lookup table is invalid");
    const i = r / 32,
      { addresses: s } = $.struct([$.seq(jt(), i, "addresses")]).decode(
        t.slice(V0)
      );
    return {
      deactivationSlot: e.deactivationSlot,
      lastExtendedSlot: e.lastExtendedSlot,
      lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
      authority: e.authority.length !== 0 ? new gt(e.authority[0]) : void 0,
      addresses: s.map((o) => new gt(o)),
    };
  }
}
const SE = {
    index: 1,
    layout: $.struct([
      $.u32("typeIndex"),
      Ua("deactivationSlot"),
      $.nu64("lastExtendedSlot"),
      $.u8("lastExtendedStartIndex"),
      $.u8(),
      $.seq(jt(), $.offset($.u8(), -1), "authority"),
    ]),
  },
  IE = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function BE(n) {
  const t = n.match(IE);
  if (t == null) throw TypeError(`Failed to validate endpoint URL \`${n}\``);
  const [e, r, i, s] = t,
    o = n.startsWith("https:") ? "wss:" : "ws:",
    a = i == null ? null : parseInt(i.slice(1), 10),
    c = a == null ? "" : `:${a + 1}`;
  return `${o}//${r}${c}${s}`;
}
const Te = Jc(pd(gt), mt(), (n) => new gt(n)),
  Cy = gd([mt(), Ce("base64")]),
  Sd = Jc(pd(Nt), Cy, (n) => Nt.from(n[0], "base64")),
  Ny = 30 * 1e3;
function RE(n) {
  if (/^https?:/.test(n) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return n;
}
function me(n) {
  let t, e;
  if (typeof n == "string") t = n;
  else if (n) {
    const { commitment: r, ...i } = n;
    (t = r), (e = i);
  }
  return { commitment: t, config: e };
}
function W0(n) {
  return n.map((t) =>
    "memcmp" in t
      ? {
          ...t,
          memcmp: { ...t.memcmp, encoding: t.memcmp.encoding ?? "base58" },
        }
      : t
  );
}
function Ty(n) {
  return Rr([
    dt({ jsonrpc: Ce("2.0"), id: mt(), result: n }),
    dt({
      jsonrpc: Ce("2.0"),
      id: mt(),
      error: dt({ code: $a(), message: mt(), data: Bt(nA()) }),
    }),
  ]);
}
const PE = Ty($a());
function Wt(n) {
  return Jc(Ty(n), PE, (t) =>
    "error" in t ? t : { ...t, result: bt(t.result, n) }
  );
}
function De(n) {
  return Wt(dt({ context: dt({ slot: ot() }), value: n }));
}
function Bl(n) {
  return dt({ context: dt({ slot: ot() }), value: n });
}
function Ff(n, t) {
  return n === 0
    ? new no({
        header: t.header,
        staticAccountKeys: t.accountKeys.map((e) => new gt(e)),
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: t.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: ir.decode(e.data),
        })),
        addressTableLookups: t.addressTableLookups,
      })
    : new xn(t);
}
const CE = dt({
    foundation: ot(),
    foundationTerm: ot(),
    initial: ot(),
    taper: ot(),
    terminal: ot(),
  }),
  NE = Wt(
    At(
      Et(
        dt({
          epoch: ot(),
          effectiveSlot: ot(),
          amount: ot(),
          postBalance: ot(),
          commission: Bt(Et(ot())),
        })
      )
    )
  ),
  TE = At(dt({ slot: ot(), prioritizationFee: ot() })),
  _E = dt({ total: ot(), validator: ot(), foundation: ot(), epoch: ot() }),
  OE = dt({
    epoch: ot(),
    slotIndex: ot(),
    slotsInEpoch: ot(),
    absoluteSlot: ot(),
    blockHeight: Bt(ot()),
    transactionCount: Bt(ot()),
  }),
  ME = dt({
    slotsPerEpoch: ot(),
    leaderScheduleSlotOffset: ot(),
    warmup: Qn(),
    firstNormalEpoch: ot(),
    firstNormalSlot: ot(),
  }),
  LE = hy(mt(), At(ot())),
  ho = Et(Rr([dt({}), mt()])),
  UE = dt({ err: ho }),
  FE = Ce("receivedSignature"),
  DE = dt({ "solana-core": mt(), "feature-set": Bt(ot()) }),
  zE = dt({ program: mt(), programId: Te, parsed: $a() }),
  HE = dt({ programId: Te, accounts: At(Te), data: mt() }),
  q0 = De(
    dt({
      err: Et(Rr([dt({}), mt()])),
      logs: Et(At(mt())),
      accounts: Bt(
        Et(
          At(
            Et(
              dt({
                executable: Qn(),
                owner: mt(),
                lamports: ot(),
                data: At(mt()),
                rentEpoch: Bt(ot()),
              })
            )
          )
        )
      ),
      unitsConsumed: Bt(ot()),
      returnData: Bt(
        Et(dt({ programId: mt(), data: gd([mt(), Ce("base64")]) }))
      ),
      innerInstructions: Bt(
        Et(At(dt({ index: ot(), instructions: At(Rr([zE, HE])) })))
      ),
    })
  ),
  GE = De(
    dt({
      byIdentity: hy(mt(), At(ot())),
      range: dt({ firstSlot: ot(), lastSlot: ot() }),
    })
  );
function KE(n, t, e, r, i, s) {
  const o = e || xE;
  let a;
  s != null &&
    console.warn(
      "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
    );
  let c;
  return (
    r &&
      (c = async (h, b) => {
        const S = await new Promise((P, M) => {
          try {
            r(h, b, (N, D) => P([N, D]));
          } catch (N) {
            M(N);
          }
        });
        return await o(...S);
      }),
    new BA(async (h, b) => {
      const S = {
        method: "POST",
        body: h,
        agent: a,
        headers: Object.assign(
          { "Content-Type": "application/json" },
          t || {},
          Kx
        ),
      };
      try {
        let P = 5,
          M,
          N = 500;
        for (
          ;
          c ? (M = await c(n, S)) : (M = await o(n, S)),
            !(M.status !== 429 || i === !0 || ((P -= 1), P === 0));

        )
          console.error(
            `Server responded with ${M.status} ${M.statusText}.  Retrying after ${N}ms delay...`
          ),
            await bs(N),
            (N *= 2);
        const D = await M.text();
        M.ok ? b(null, D) : b(new Error(`${M.status} ${M.statusText}: ${D}`));
      } catch (P) {
        P instanceof Error && b(P);
      }
    }, {})
  );
}
function VE(n) {
  return (t, e) =>
    new Promise((r, i) => {
      n.request(t, e, (s, o) => {
        if (s) {
          i(s);
          return;
        }
        r(o);
      });
    });
}
function WE(n) {
  return (t) =>
    new Promise((e, r) => {
      t.length === 0 && e([]);
      const i = t.map((s) => n.request(s.methodName, s.args));
      n.request(i, (s, o) => {
        if (s) {
          r(s);
          return;
        }
        e(o);
      });
    });
}
const qE = Wt(CE),
  $E = Wt(_E),
  QE = Wt(TE),
  JE = Wt(OE),
  jE = Wt(ME),
  ZE = Wt(LE),
  YE = Wt(ot()),
  XE = De(
    dt({
      total: ot(),
      circulating: ot(),
      nonCirculating: ot(),
      nonCirculatingAccounts: At(Te),
    })
  ),
  wh = dt({
    amount: mt(),
    uiAmount: Et(ot()),
    decimals: ot(),
    uiAmountString: Bt(mt()),
  }),
  tx = De(
    At(
      dt({
        address: Te,
        amount: mt(),
        uiAmount: Et(ot()),
        decimals: ot(),
        uiAmountString: Bt(mt()),
      })
    )
  ),
  ex = De(
    At(
      dt({
        pubkey: Te,
        account: dt({
          executable: Qn(),
          owner: Te,
          lamports: ot(),
          data: Sd,
          rentEpoch: ot(),
        }),
      })
    )
  ),
  bh = dt({ program: mt(), parsed: $a(), space: ot() }),
  rx = De(
    At(
      dt({
        pubkey: Te,
        account: dt({
          executable: Qn(),
          owner: Te,
          lamports: ot(),
          data: bh,
          rentEpoch: ot(),
        }),
      })
    )
  ),
  nx = De(At(dt({ lamports: ot(), address: Te }))),
  Ac = dt({
    executable: Qn(),
    owner: Te,
    lamports: ot(),
    data: Sd,
    rentEpoch: ot(),
  }),
  ix = dt({ pubkey: Te, account: Ac }),
  sx = Jc(Rr([pd(Nt), bh]), Rr([Cy, bh]), (n) =>
    Array.isArray(n) ? bt(n, Sd) : n
  ),
  Ah = dt({
    executable: Qn(),
    owner: Te,
    lamports: ot(),
    data: sx,
    rentEpoch: ot(),
  }),
  ox = dt({ pubkey: Te, account: Ah }),
  ax = dt({
    state: Rr([
      Ce("active"),
      Ce("inactive"),
      Ce("activating"),
      Ce("deactivating"),
    ]),
    active: ot(),
    inactive: ot(),
  }),
  cx = Wt(
    At(
      dt({
        signature: mt(),
        slot: ot(),
        err: ho,
        memo: Et(mt()),
        blockTime: Bt(Et(ot())),
      })
    )
  ),
  ux = Wt(
    At(
      dt({
        signature: mt(),
        slot: ot(),
        err: ho,
        memo: Et(mt()),
        blockTime: Bt(Et(ot())),
      })
    )
  ),
  lx = dt({ subscription: ot(), result: Bl(Ac) }),
  fx = dt({ pubkey: Te, account: Ac }),
  hx = dt({ subscription: ot(), result: Bl(fx) }),
  dx = dt({ parent: ot(), slot: ot(), root: ot() }),
  px = dt({ subscription: ot(), result: dx }),
  gx = Rr([
    dt({
      type: Rr([
        Ce("firstShredReceived"),
        Ce("completed"),
        Ce("optimisticConfirmation"),
        Ce("root"),
      ]),
      slot: ot(),
      timestamp: ot(),
    }),
    dt({ type: Ce("createdBank"), parent: ot(), slot: ot(), timestamp: ot() }),
    dt({
      type: Ce("frozen"),
      slot: ot(),
      timestamp: ot(),
      stats: dt({
        numTransactionEntries: ot(),
        numSuccessfulTransactions: ot(),
        numFailedTransactions: ot(),
        maxTransactionsPerEntry: ot(),
      }),
    }),
    dt({ type: Ce("dead"), slot: ot(), timestamp: ot(), err: mt() }),
  ]),
  yx = dt({ subscription: ot(), result: gx }),
  mx = dt({ subscription: ot(), result: Bl(Rr([UE, FE])) }),
  wx = dt({ subscription: ot(), result: ot() }),
  bx = dt({
    pubkey: mt(),
    gossip: Et(mt()),
    tpu: Et(mt()),
    rpc: Et(mt()),
    version: Et(mt()),
  }),
  $0 = dt({
    votePubkey: mt(),
    nodePubkey: mt(),
    activatedStake: ot(),
    epochVoteAccount: Qn(),
    epochCredits: At(gd([ot(), ot(), ot()])),
    commission: ot(),
    lastVote: ot(),
    rootSlot: Et(ot()),
  }),
  Ax = Wt(dt({ current: At($0), delinquent: At($0) })),
  Ex = Rr([Ce("processed"), Ce("confirmed"), Ce("finalized")]),
  xx = dt({
    slot: ot(),
    confirmations: Et(ot()),
    err: ho,
    confirmationStatus: Bt(Ex),
  }),
  kx = De(At(Et(xx))),
  vx = Wt(ot()),
  _y = dt({
    accountKey: Te,
    writableIndexes: At(ot()),
    readonlyIndexes: At(ot()),
  }),
  Id = dt({
    signatures: At(mt()),
    message: dt({
      accountKeys: At(mt()),
      header: dt({
        numRequiredSignatures: ot(),
        numReadonlySignedAccounts: ot(),
        numReadonlyUnsignedAccounts: ot(),
      }),
      instructions: At(
        dt({ accounts: At(ot()), data: mt(), programIdIndex: ot() })
      ),
      recentBlockhash: mt(),
      addressTableLookups: Bt(At(_y)),
    }),
  }),
  Oy = dt({
    pubkey: Te,
    signer: Qn(),
    writable: Qn(),
    source: Bt(Rr([Ce("transaction"), Ce("lookupTable")])),
  }),
  My = dt({ accountKeys: At(Oy), signatures: At(mt()) }),
  Ly = dt({ parsed: $a(), program: mt(), programId: Te }),
  Uy = dt({ accounts: At(Te), data: mt(), programId: Te }),
  Sx = Rr([Uy, Ly]),
  Ix = Rr([
    dt({ parsed: $a(), program: mt(), programId: mt() }),
    dt({ accounts: At(mt()), data: mt(), programId: mt() }),
  ]),
  Fy = Jc(Sx, Ix, (n) => ("accounts" in n ? bt(n, Uy) : bt(n, Ly))),
  Dy = dt({
    signatures: At(mt()),
    message: dt({
      accountKeys: At(Oy),
      instructions: At(Fy),
      recentBlockhash: mt(),
      addressTableLookups: Bt(Et(At(_y))),
    }),
  }),
  Vu = dt({
    accountIndex: ot(),
    mint: mt(),
    owner: Bt(mt()),
    programId: Bt(mt()),
    uiTokenAmount: wh,
  }),
  zy = dt({ writable: At(Te), readonly: At(Te) }),
  Rl = dt({
    err: ho,
    fee: ot(),
    innerInstructions: Bt(
      Et(
        At(
          dt({
            index: ot(),
            instructions: At(
              dt({ accounts: At(ot()), data: mt(), programIdIndex: ot() })
            ),
          })
        )
      )
    ),
    preBalances: At(ot()),
    postBalances: At(ot()),
    logMessages: Bt(Et(At(mt()))),
    preTokenBalances: Bt(Et(At(Vu))),
    postTokenBalances: Bt(Et(At(Vu))),
    loadedAddresses: Bt(zy),
    computeUnitsConsumed: Bt(ot()),
  }),
  Bd = dt({
    err: ho,
    fee: ot(),
    innerInstructions: Bt(Et(At(dt({ index: ot(), instructions: At(Fy) })))),
    preBalances: At(ot()),
    postBalances: At(ot()),
    logMessages: Bt(Et(At(mt()))),
    preTokenBalances: Bt(Et(At(Vu))),
    postTokenBalances: Bt(Et(At(Vu))),
    loadedAddresses: Bt(zy),
    computeUnitsConsumed: Bt(ot()),
  }),
  Qa = Rr([Ce(0), Ce("legacy")]),
  po = dt({
    pubkey: mt(),
    lamports: ot(),
    postBalance: Et(ot()),
    rewardType: Et(mt()),
    commission: Bt(Et(ot())),
  }),
  Bx = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        transactions: At(
          dt({ transaction: Id, meta: Et(Rl), version: Bt(Qa) })
        ),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
        blockHeight: Et(ot()),
      })
    )
  ),
  Rx = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
        blockHeight: Et(ot()),
      })
    )
  ),
  Px = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        transactions: At(
          dt({ transaction: My, meta: Et(Rl), version: Bt(Qa) })
        ),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
        blockHeight: Et(ot()),
      })
    )
  ),
  Cx = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        transactions: At(
          dt({ transaction: Dy, meta: Et(Bd), version: Bt(Qa) })
        ),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
        blockHeight: Et(ot()),
      })
    )
  ),
  Nx = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        transactions: At(
          dt({ transaction: My, meta: Et(Bd), version: Bt(Qa) })
        ),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
        blockHeight: Et(ot()),
      })
    )
  ),
  Tx = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
        blockHeight: Et(ot()),
      })
    )
  ),
  _x = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        transactions: At(dt({ transaction: Id, meta: Et(Rl) })),
        rewards: Bt(At(po)),
        blockTime: Et(ot()),
      })
    )
  ),
  Q0 = Wt(
    Et(
      dt({
        blockhash: mt(),
        previousBlockhash: mt(),
        parentSlot: ot(),
        signatures: At(mt()),
        blockTime: Et(ot()),
      })
    )
  ),
  Df = Wt(
    Et(
      dt({
        slot: ot(),
        meta: Et(Rl),
        blockTime: Bt(Et(ot())),
        transaction: Id,
        version: Bt(Qa),
      })
    )
  ),
  lu = Wt(
    Et(
      dt({
        slot: ot(),
        transaction: Dy,
        meta: Et(Bd),
        blockTime: Bt(Et(ot())),
        version: Bt(Qa),
      })
    )
  ),
  Ox = De(dt({ blockhash: mt(), lastValidBlockHeight: ot() })),
  Mx = De(Qn()),
  Lx = dt({
    slot: ot(),
    numTransactions: ot(),
    numSlots: ot(),
    samplePeriodSecs: ot(),
  }),
  Ux = Wt(At(Lx)),
  Fx = De(Et(dt({ feeCalculator: dt({ lamportsPerSignature: ot() }) }))),
  Dx = Wt(mt()),
  zx = Wt(mt()),
  Hx = dt({ err: ho, logs: At(mt()), signature: mt() }),
  Gx = dt({ result: Bl(Hx), subscription: ot() }),
  Kx = { "solana-client": "js/1.0.0-maintenance" };
class Vx {
  constructor(t, e) {
    (this._commitment = void 0),
      (this._confirmTransactionInitialTimeout = void 0),
      (this._rpcEndpoint = void 0),
      (this._rpcWsEndpoint = void 0),
      (this._rpcClient = void 0),
      (this._rpcRequest = void 0),
      (this._rpcBatchRequest = void 0),
      (this._rpcWebSocket = void 0),
      (this._rpcWebSocketConnected = !1),
      (this._rpcWebSocketHeartbeat = null),
      (this._rpcWebSocketIdleTimeout = null),
      (this._rpcWebSocketGeneration = 0),
      (this._disableBlockhashCaching = !1),
      (this._pollingBlockhash = !1),
      (this._blockhashInfo = {
        latestBlockhash: null,
        lastFetch: 0,
        transactionSignatures: [],
        simulatedSignatures: [],
      }),
      (this._nextClientSubscriptionId = 0),
      (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
      (this._subscriptionHashByClientSubscriptionId = {}),
      (this._subscriptionStateChangeCallbacksByHash = {}),
      (this._subscriptionCallbacksByServerSubscriptionId = {}),
      (this._subscriptionsByHash = {}),
      (this._subscriptionsAutoDisposedByRpc = new Set()),
      (this.getBlockHeight = (() => {
        const f = {};
        return async (h) => {
          const { commitment: b, config: S } = me(h),
            P = this._buildArgs([], b, void 0, S),
            M = K0(P);
          return (
            (f[M] =
              f[M] ??
              (async () => {
                try {
                  const N = await this._rpcRequest("getBlockHeight", P),
                    D = bt(N, Wt(ot()));
                  if ("error" in D)
                    throw new St(
                      D.error,
                      "failed to get block height information"
                    );
                  return D.result;
                } finally {
                  delete f[M];
                }
              })()),
            await f[M]
          );
        };
      })());
    let r, i, s, o, a, c;
    e && typeof e == "string"
      ? (this._commitment = e)
      : e &&
        ((this._commitment = e.commitment),
        (this._confirmTransactionInitialTimeout =
          e.confirmTransactionInitialTimeout),
        (r = e.wsEndpoint),
        (i = e.httpHeaders),
        (s = e.fetch),
        (o = e.fetchMiddleware),
        (a = e.disableRetryOnRateLimit),
        (c = e.httpAgent)),
      (this._rpcEndpoint = RE(t)),
      (this._rpcWsEndpoint = r || BE(t)),
      (this._rpcClient = KE(t, i, s, o, a, c)),
      (this._rpcRequest = VE(this._rpcClient)),
      (this._rpcBatchRequest = WE(this._rpcClient)),
      (this._rpcWebSocket = new kE(this._rpcWsEndpoint, {
        autoconnect: !1,
        max_reconnects: 1 / 0,
      })),
      this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
      this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
      this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
      this._rpcWebSocket.on(
        "accountNotification",
        this._wsOnAccountNotification.bind(this)
      ),
      this._rpcWebSocket.on(
        "programNotification",
        this._wsOnProgramAccountNotification.bind(this)
      ),
      this._rpcWebSocket.on(
        "slotNotification",
        this._wsOnSlotNotification.bind(this)
      ),
      this._rpcWebSocket.on(
        "slotsUpdatesNotification",
        this._wsOnSlotUpdatesNotification.bind(this)
      ),
      this._rpcWebSocket.on(
        "signatureNotification",
        this._wsOnSignatureNotification.bind(this)
      ),
      this._rpcWebSocket.on(
        "rootNotification",
        this._wsOnRootNotification.bind(this)
      ),
      this._rpcWebSocket.on(
        "logsNotification",
        this._wsOnLogsNotification.bind(this)
      );
  }
  get commitment() {
    return this._commitment;
  }
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  async getBalanceAndContext(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgs([t.toBase58()], r, void 0, i),
      o = await this._rpcRequest("getBalance", s),
      a = bt(o, De(ot()));
    if ("error" in a)
      throw new St(a.error, `failed to get balance for ${t.toBase58()}`);
    return a.result;
  }
  async getBalance(t, e) {
    return await this.getBalanceAndContext(t, e)
      .then((r) => r.value)
      .catch((r) => {
        throw new Error(
          "failed to get balance of account " + t.toBase58() + ": " + r
        );
      });
  }
  async getBlockTime(t) {
    const e = await this._rpcRequest("getBlockTime", [t]),
      r = bt(e, Wt(Et(ot())));
    if ("error" in r)
      throw new St(r.error, `failed to get block time for slot ${t}`);
    return r.result;
  }
  async getMinimumLedgerSlot() {
    const t = await this._rpcRequest("minimumLedgerSlot", []),
      e = bt(t, Wt(ot()));
    if ("error" in e)
      throw new St(e.error, "failed to get minimum ledger slot");
    return e.result;
  }
  async getFirstAvailableBlock() {
    const t = await this._rpcRequest("getFirstAvailableBlock", []),
      e = bt(t, YE);
    if ("error" in e)
      throw new St(e.error, "failed to get first available block");
    return e.result;
  }
  async getSupply(t) {
    let e = {};
    typeof t == "string"
      ? (e = { commitment: t })
      : t
      ? (e = { ...t, commitment: (t && t.commitment) || this.commitment })
      : (e = { commitment: this.commitment });
    const r = await this._rpcRequest("getSupply", [e]),
      i = bt(r, XE);
    if ("error" in i) throw new St(i.error, "failed to get supply");
    return i.result;
  }
  async getTokenSupply(t, e) {
    const r = this._buildArgs([t.toBase58()], e),
      i = await this._rpcRequest("getTokenSupply", r),
      s = bt(i, De(wh));
    if ("error" in s) throw new St(s.error, "failed to get token supply");
    return s.result;
  }
  async getTokenAccountBalance(t, e) {
    const r = this._buildArgs([t.toBase58()], e),
      i = await this._rpcRequest("getTokenAccountBalance", r),
      s = bt(i, De(wh));
    if ("error" in s)
      throw new St(s.error, "failed to get token account balance");
    return s.result;
  }
  async getTokenAccountsByOwner(t, e, r) {
    const { commitment: i, config: s } = me(r);
    let o = [t.toBase58()];
    "mint" in e
      ? o.push({ mint: e.mint.toBase58() })
      : o.push({ programId: e.programId.toBase58() });
    const a = this._buildArgs(o, i, "base64", s),
      c = await this._rpcRequest("getTokenAccountsByOwner", a),
      f = bt(c, ex);
    if ("error" in f)
      throw new St(
        f.error,
        `failed to get token accounts owned by account ${t.toBase58()}`
      );
    return f.result;
  }
  async getParsedTokenAccountsByOwner(t, e, r) {
    let i = [t.toBase58()];
    "mint" in e
      ? i.push({ mint: e.mint.toBase58() })
      : i.push({ programId: e.programId.toBase58() });
    const s = this._buildArgs(i, r, "jsonParsed"),
      o = await this._rpcRequest("getTokenAccountsByOwner", s),
      a = bt(o, rx);
    if ("error" in a)
      throw new St(
        a.error,
        `failed to get token accounts owned by account ${t.toBase58()}`
      );
    return a.result;
  }
  async getLargestAccounts(t) {
    const e = { ...t, commitment: (t && t.commitment) || this.commitment },
      r = e.filter || e.commitment ? [e] : [],
      i = await this._rpcRequest("getLargestAccounts", r),
      s = bt(i, nx);
    if ("error" in s) throw new St(s.error, "failed to get largest accounts");
    return s.result;
  }
  async getTokenLargestAccounts(t, e) {
    const r = this._buildArgs([t.toBase58()], e),
      i = await this._rpcRequest("getTokenLargestAccounts", r),
      s = bt(i, tx);
    if ("error" in s)
      throw new St(s.error, "failed to get token largest accounts");
    return s.result;
  }
  async getAccountInfoAndContext(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgs([t.toBase58()], r, "base64", i),
      o = await this._rpcRequest("getAccountInfo", s),
      a = bt(o, De(Et(Ac)));
    if ("error" in a)
      throw new St(a.error, `failed to get info about account ${t.toBase58()}`);
    return a.result;
  }
  async getParsedAccountInfo(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgs([t.toBase58()], r, "jsonParsed", i),
      o = await this._rpcRequest("getAccountInfo", s),
      a = bt(o, De(Et(Ah)));
    if ("error" in a)
      throw new St(a.error, `failed to get info about account ${t.toBase58()}`);
    return a.result;
  }
  async getAccountInfo(t, e) {
    try {
      return (await this.getAccountInfoAndContext(t, e)).value;
    } catch (r) {
      throw new Error(
        "failed to get info about account " + t.toBase58() + ": " + r
      );
    }
  }
  async getMultipleParsedAccounts(t, e) {
    const { commitment: r, config: i } = me(e),
      s = t.map((f) => f.toBase58()),
      o = this._buildArgs([s], r, "jsonParsed", i),
      a = await this._rpcRequest("getMultipleAccounts", o),
      c = bt(a, De(At(Et(Ah))));
    if ("error" in c)
      throw new St(c.error, `failed to get info for accounts ${s}`);
    return c.result;
  }
  async getMultipleAccountsInfoAndContext(t, e) {
    const { commitment: r, config: i } = me(e),
      s = t.map((f) => f.toBase58()),
      o = this._buildArgs([s], r, "base64", i),
      a = await this._rpcRequest("getMultipleAccounts", o),
      c = bt(a, De(At(Et(Ac))));
    if ("error" in c)
      throw new St(c.error, `failed to get info for accounts ${s}`);
    return c.result;
  }
  async getMultipleAccountsInfo(t, e) {
    return (await this.getMultipleAccountsInfoAndContext(t, e)).value;
  }
  async getStakeActivation(t, e, r) {
    const { commitment: i, config: s } = me(e),
      o = this._buildArgs([t.toBase58()], i, void 0, {
        ...s,
        epoch: r ?? (s == null ? void 0 : s.epoch),
      }),
      a = await this._rpcRequest("getStakeActivation", o),
      c = bt(a, Wt(ax));
    if ("error" in c)
      throw new St(c.error, `failed to get Stake Activation ${t.toBase58()}`);
    return c.result;
  }
  async getProgramAccounts(t, e) {
    const { commitment: r, config: i } = me(e),
      { encoding: s, ...o } = i || {},
      a = this._buildArgs([t.toBase58()], r, s || "base64", {
        ...o,
        ...(o.filters ? { filters: W0(o.filters) } : null),
      }),
      c = await this._rpcRequest("getProgramAccounts", a),
      f = At(ix),
      h = o.withContext === !0 ? bt(c, De(f)) : bt(c, Wt(f));
    if ("error" in h)
      throw new St(
        h.error,
        `failed to get accounts owned by program ${t.toBase58()}`
      );
    return h.result;
  }
  async getParsedProgramAccounts(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgs([t.toBase58()], r, "jsonParsed", i),
      o = await this._rpcRequest("getProgramAccounts", s),
      a = bt(o, Wt(At(ox)));
    if ("error" in a)
      throw new St(
        a.error,
        `failed to get accounts owned by program ${t.toBase58()}`
      );
    return a.result;
  }
  async confirmTransaction(t, e) {
    var s;
    let r;
    if (typeof t == "string") r = t;
    else {
      const o = t;
      if ((s = o.abortSignal) != null && s.aborted)
        return Promise.reject(o.abortSignal.reason);
      r = o.signature;
    }
    let i;
    try {
      i = ir.decode(r);
    } catch {
      throw new Error("signature must be base58 encoded: " + r);
    }
    return (
      re(i.length === 64, "signature has invalid length"),
      typeof t == "string"
        ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: e || this.commitment,
            signature: r,
          })
        : "lastValidBlockHeight" in t
        ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
            commitment: e || this.commitment,
            strategy: t,
          })
        : await this.confirmTransactionUsingDurableNonceStrategy({
            commitment: e || this.commitment,
            strategy: t,
          })
    );
  }
  getCancellationPromise(t) {
    return new Promise((e, r) => {
      t != null &&
        (t.aborted
          ? r(t.reason)
          : t.addEventListener("abort", () => {
              r(t.reason);
            }));
    });
  }
  getTransactionConfirmationPromise({ commitment: t, signature: e }) {
    let r,
      i,
      s = !1;
    const o = new Promise((c, f) => {
      try {
        r = this.onSignature(
          e,
          (b, S) => {
            r = void 0;
            const P = { context: S, value: b };
            c({ __type: Xn.PROCESSED, response: P });
          },
          t
        );
        const h = new Promise((b) => {
          r == null
            ? b()
            : (i = this._onSubscriptionStateChange(r, (S) => {
                S === "subscribed" && b();
              }));
        });
        (async () => {
          if ((await h, s)) return;
          const b = await this.getSignatureStatus(e);
          if (s || b == null) return;
          const { context: S, value: P } = b;
          if (P != null)
            if (P != null && P.err) f(P.err);
            else {
              switch (t) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (P.confirmationStatus === "processed") return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (
                    P.confirmationStatus === "processed" ||
                    P.confirmationStatus === "confirmed"
                  )
                    return;
                  break;
                }
                case "processed":
                case "recent":
              }
              (s = !0),
                c({ __type: Xn.PROCESSED, response: { context: S, value: P } });
            }
        })();
      } catch (h) {
        f(h);
      }
    });
    return {
      abortConfirmation: () => {
        i && (i(), (i = void 0)),
          r != null && (this.removeSignatureListener(r), (r = void 0));
      },
      confirmationPromise: o,
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment: t,
    strategy: { abortSignal: e, lastValidBlockHeight: r, signature: i },
  }) {
    let s = !1;
    const o = new Promise((b) => {
        const S = async () => {
          try {
            return await this.getBlockHeight(t);
          } catch {
            return -1;
          }
        };
        (async () => {
          let P = await S();
          if (!s) {
            for (; P <= r; )
              if ((await bs(1e3), s || ((P = await S()), s))) return;
            b({ __type: Xn.BLOCKHEIGHT_EXCEEDED });
          }
        })();
      }),
      { abortConfirmation: a, confirmationPromise: c } =
        this.getTransactionConfirmationPromise({ commitment: t, signature: i }),
      f = this.getCancellationPromise(e);
    let h;
    try {
      const b = await Promise.race([f, c, o]);
      if (b.__type === Xn.PROCESSED) h = b.response;
      else throw new Ad(i);
    } finally {
      (s = !0), a();
    }
    return h;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: t,
    strategy: {
      abortSignal: e,
      minContextSlot: r,
      nonceAccountPubkey: i,
      nonceValue: s,
      signature: o,
    },
  }) {
    let a = !1;
    const c = new Promise((P) => {
        let M = s,
          N = null;
        const D = async () => {
          try {
            const { context: q, value: z } = await this.getNonceAndContext(i, {
              commitment: t,
              minContextSlot: r,
            });
            return (N = q.slot), z == null ? void 0 : z.nonce;
          } catch {
            return M;
          }
        };
        (async () => {
          if (((M = await D()), !a))
            for (;;) {
              if (s !== M) {
                P({ __type: Xn.NONCE_INVALID, slotInWhichNonceDidAdvance: N });
                return;
              }
              if ((await bs(2e3), a || ((M = await D()), a))) return;
            }
        })();
      }),
      { abortConfirmation: f, confirmationPromise: h } =
        this.getTransactionConfirmationPromise({ commitment: t, signature: o }),
      b = this.getCancellationPromise(e);
    let S;
    try {
      const P = await Promise.race([b, h, c]);
      if (P.__type === Xn.PROCESSED) S = P.response;
      else {
        let M;
        for (;;) {
          const N = await this.getSignatureStatus(o);
          if (N == null) break;
          if (N.context.slot < (P.slotInWhichNonceDidAdvance ?? r)) {
            await bs(400);
            continue;
          }
          M = N;
          break;
        }
        if (M != null && M.value) {
          const N = t || "finalized",
            { confirmationStatus: D } = M.value;
          switch (N) {
            case "processed":
            case "recent":
              if (D !== "processed" && D !== "confirmed" && D !== "finalized")
                throw new Co(o);
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (D !== "confirmed" && D !== "finalized") throw new Co(o);
              break;
            case "finalized":
            case "max":
            case "root":
              if (D !== "finalized") throw new Co(o);
              break;
            default:
          }
          S = { context: M.context, value: { err: M.value.err } };
        } else throw new Co(o);
      }
    } finally {
      (a = !0), f();
    }
    return S;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment: t,
    signature: e,
  }) {
    let r;
    const i = new Promise((c) => {
        let f = this._confirmTransactionInitialTimeout || 6e4;
        switch (t) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            f = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        r = setTimeout(() => c({ __type: Xn.TIMED_OUT, timeoutMs: f }), f);
      }),
      { abortConfirmation: s, confirmationPromise: o } =
        this.getTransactionConfirmationPromise({ commitment: t, signature: e });
    let a;
    try {
      const c = await Promise.race([o, i]);
      if (c.__type === Xn.PROCESSED) a = c.response;
      else throw new Ed(e, c.timeoutMs / 1e3);
    } finally {
      clearTimeout(r), s();
    }
    return a;
  }
  async getClusterNodes() {
    const t = await this._rpcRequest("getClusterNodes", []),
      e = bt(t, Wt(At(bx)));
    if ("error" in e) throw new St(e.error, "failed to get cluster nodes");
    return e.result;
  }
  async getVoteAccounts(t) {
    const e = this._buildArgs([], t),
      r = await this._rpcRequest("getVoteAccounts", e),
      i = bt(r, Ax);
    if ("error" in i) throw new St(i.error, "failed to get vote accounts");
    return i.result;
  }
  async getSlot(t) {
    const { commitment: e, config: r } = me(t),
      i = this._buildArgs([], e, void 0, r),
      s = await this._rpcRequest("getSlot", i),
      o = bt(s, Wt(ot()));
    if ("error" in o) throw new St(o.error, "failed to get slot");
    return o.result;
  }
  async getSlotLeader(t) {
    const { commitment: e, config: r } = me(t),
      i = this._buildArgs([], e, void 0, r),
      s = await this._rpcRequest("getSlotLeader", i),
      o = bt(s, Wt(mt()));
    if ("error" in o) throw new St(o.error, "failed to get slot leader");
    return o.result;
  }
  async getSlotLeaders(t, e) {
    const r = [t, e],
      i = await this._rpcRequest("getSlotLeaders", r),
      s = bt(i, Wt(At(Te)));
    if ("error" in s) throw new St(s.error, "failed to get slot leaders");
    return s.result;
  }
  async getSignatureStatus(t, e) {
    const { context: r, value: i } = await this.getSignatureStatuses([t], e);
    re(i.length === 1);
    const s = i[0];
    return { context: r, value: s };
  }
  async getSignatureStatuses(t, e) {
    const r = [t];
    e && r.push(e);
    const i = await this._rpcRequest("getSignatureStatuses", r),
      s = bt(i, kx);
    if ("error" in s) throw new St(s.error, "failed to get signature status");
    return s.result;
  }
  async getTransactionCount(t) {
    const { commitment: e, config: r } = me(t),
      i = this._buildArgs([], e, void 0, r),
      s = await this._rpcRequest("getTransactionCount", i),
      o = bt(s, Wt(ot()));
    if ("error" in o) throw new St(o.error, "failed to get transaction count");
    return o.result;
  }
  async getTotalSupply(t) {
    return (
      await this.getSupply({
        commitment: t,
        excludeNonCirculatingAccountsList: !0,
      })
    ).value.total;
  }
  async getInflationGovernor(t) {
    const e = this._buildArgs([], t),
      r = await this._rpcRequest("getInflationGovernor", e),
      i = bt(r, qE);
    if ("error" in i) throw new St(i.error, "failed to get inflation");
    return i.result;
  }
  async getInflationReward(t, e, r) {
    const { commitment: i, config: s } = me(r),
      o = this._buildArgs([t.map((f) => f.toBase58())], i, void 0, {
        ...s,
        epoch: e ?? (s == null ? void 0 : s.epoch),
      }),
      a = await this._rpcRequest("getInflationReward", o),
      c = bt(a, NE);
    if ("error" in c) throw new St(c.error, "failed to get inflation reward");
    return c.result;
  }
  async getInflationRate() {
    const t = await this._rpcRequest("getInflationRate", []),
      e = bt(t, $E);
    if ("error" in e) throw new St(e.error, "failed to get inflation rate");
    return e.result;
  }
  async getEpochInfo(t) {
    const { commitment: e, config: r } = me(t),
      i = this._buildArgs([], e, void 0, r),
      s = await this._rpcRequest("getEpochInfo", i),
      o = bt(s, JE);
    if ("error" in o) throw new St(o.error, "failed to get epoch info");
    return o.result;
  }
  async getEpochSchedule() {
    const t = await this._rpcRequest("getEpochSchedule", []),
      e = bt(t, jE);
    if ("error" in e) throw new St(e.error, "failed to get epoch schedule");
    const r = e.result;
    return new Py(
      r.slotsPerEpoch,
      r.leaderScheduleSlotOffset,
      r.warmup,
      r.firstNormalEpoch,
      r.firstNormalSlot
    );
  }
  async getLeaderSchedule() {
    const t = await this._rpcRequest("getLeaderSchedule", []),
      e = bt(t, ZE);
    if ("error" in e) throw new St(e.error, "failed to get leader schedule");
    return e.result;
  }
  async getMinimumBalanceForRentExemption(t, e) {
    const r = this._buildArgs([t], e),
      i = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
      s = bt(i, vx);
    return "error" in s
      ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0)
      : s.result;
  }
  async getRecentBlockhashAndContext(t) {
    const {
      context: e,
      value: { blockhash: r },
    } = await this.getLatestBlockhashAndContext(t);
    return {
      context: e,
      value: {
        blockhash: r,
        feeCalculator: {
          get lamportsPerSignature() {
            throw new Error(
              "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
            );
          },
          toJSON() {
            return {};
          },
        },
      },
    };
  }
  async getRecentPerformanceSamples(t) {
    const e = await this._rpcRequest(
        "getRecentPerformanceSamples",
        t ? [t] : []
      ),
      r = bt(e, Ux);
    if ("error" in r)
      throw new St(r.error, "failed to get recent performance samples");
    return r.result;
  }
  async getFeeCalculatorForBlockhash(t, e) {
    const r = this._buildArgs([t], e),
      i = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
      s = bt(i, Fx);
    if ("error" in s) throw new St(s.error, "failed to get fee calculator");
    const { context: o, value: a } = s.result;
    return { context: o, value: a !== null ? a.feeCalculator : null };
  }
  async getFeeForMessage(t, e) {
    const r = qt(t.serialize()).toString("base64"),
      i = this._buildArgs([r], e),
      s = await this._rpcRequest("getFeeForMessage", i),
      o = bt(s, De(Et(ot())));
    if ("error" in o) throw new St(o.error, "failed to get fee for message");
    if (o.result === null) throw new Error("invalid blockhash");
    return o.result;
  }
  async getRecentPrioritizationFees(t) {
    var o;
    const e =
        (o = t == null ? void 0 : t.lockedWritableAccounts) == null
          ? void 0
          : o.map((a) => a.toBase58()),
      r = e != null && e.length ? [e] : [],
      i = await this._rpcRequest("getRecentPrioritizationFees", r),
      s = bt(i, QE);
    if ("error" in s)
      throw new St(s.error, "failed to get recent prioritization fees");
    return s.result;
  }
  async getRecentBlockhash(t) {
    try {
      return (await this.getRecentBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  async getLatestBlockhash(t) {
    try {
      return (await this.getLatestBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  async getLatestBlockhashAndContext(t) {
    const { commitment: e, config: r } = me(t),
      i = this._buildArgs([], e, void 0, r),
      s = await this._rpcRequest("getLatestBlockhash", i),
      o = bt(s, Ox);
    if ("error" in o) throw new St(o.error, "failed to get latest blockhash");
    return o.result;
  }
  async isBlockhashValid(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgs([t], r, void 0, i),
      o = await this._rpcRequest("isBlockhashValid", s),
      a = bt(o, Mx);
    if ("error" in a)
      throw new St(
        a.error,
        "failed to determine if the blockhash `" + t + "`is valid"
      );
    return a.result;
  }
  async getVersion() {
    const t = await this._rpcRequest("getVersion", []),
      e = bt(t, Wt(DE));
    if ("error" in e) throw new St(e.error, "failed to get version");
    return e.result;
  }
  async getGenesisHash() {
    const t = await this._rpcRequest("getGenesisHash", []),
      e = bt(t, Wt(mt()));
    if ("error" in e) throw new St(e.error, "failed to get genesis hash");
    return e.result;
  }
  async getBlock(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgsAtLeastConfirmed([t], r, void 0, i),
      o = await this._rpcRequest("getBlock", s);
    try {
      switch (i == null ? void 0 : i.transactionDetails) {
        case "accounts": {
          const a = bt(o, Px);
          if ("error" in a) throw a.error;
          return a.result;
        }
        case "none": {
          const a = bt(o, Rx);
          if ("error" in a) throw a.error;
          return a.result;
        }
        default: {
          const a = bt(o, Bx);
          if ("error" in a) throw a.error;
          const { result: c } = a;
          return c
            ? {
                ...c,
                transactions: c.transactions.map(
                  ({ transaction: f, meta: h, version: b }) => ({
                    meta: h,
                    transaction: { ...f, message: Ff(b, f.message) },
                    version: b,
                  })
                ),
              }
            : null;
        }
      }
    } catch (a) {
      throw new St(a, "failed to get confirmed block");
    }
  }
  async getParsedBlock(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", i),
      o = await this._rpcRequest("getBlock", s);
    try {
      switch (i == null ? void 0 : i.transactionDetails) {
        case "accounts": {
          const a = bt(o, Nx);
          if ("error" in a) throw a.error;
          return a.result;
        }
        case "none": {
          const a = bt(o, Tx);
          if ("error" in a) throw a.error;
          return a.result;
        }
        default: {
          const a = bt(o, Cx);
          if ("error" in a) throw a.error;
          return a.result;
        }
      }
    } catch (a) {
      throw new St(a, "failed to get block");
    }
  }
  async getBlockProduction(t) {
    let e, r;
    if (typeof t == "string") r = t;
    else if (t) {
      const { commitment: a, ...c } = t;
      (r = a), (e = c);
    }
    const i = this._buildArgs([], r, "base64", e),
      s = await this._rpcRequest("getBlockProduction", i),
      o = bt(s, GE);
    if ("error" in o)
      throw new St(o.error, "failed to get block production information");
    return o.result;
  }
  async getTransaction(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgsAtLeastConfirmed([t], r, void 0, i),
      o = await this._rpcRequest("getTransaction", s),
      a = bt(o, Df);
    if ("error" in a) throw new St(a.error, "failed to get transaction");
    const c = a.result;
    return (
      c && {
        ...c,
        transaction: {
          ...c.transaction,
          message: Ff(c.version, c.transaction.message),
        },
      }
    );
  }
  async getParsedTransaction(t, e) {
    const { commitment: r, config: i } = me(e),
      s = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", i),
      o = await this._rpcRequest("getTransaction", s),
      a = bt(o, lu);
    if ("error" in a) throw new St(a.error, "failed to get transaction");
    return a.result;
  }
  async getParsedTransactions(t, e) {
    const { commitment: r, config: i } = me(e),
      s = t.map((c) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([c], r, "jsonParsed", i),
      }));
    return (await this._rpcBatchRequest(s)).map((c) => {
      const f = bt(c, lu);
      if ("error" in f) throw new St(f.error, "failed to get transactions");
      return f.result;
    });
  }
  async getTransactions(t, e) {
    const { commitment: r, config: i } = me(e),
      s = t.map((c) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([c], r, void 0, i),
      }));
    return (await this._rpcBatchRequest(s)).map((c) => {
      const f = bt(c, Df);
      if ("error" in f) throw new St(f.error, "failed to get transactions");
      const h = f.result;
      return (
        h && {
          ...h,
          transaction: {
            ...h.transaction,
            message: Ff(h.version, h.transaction.message),
          },
        }
      );
    });
  }
  async getConfirmedBlock(t, e) {
    const r = this._buildArgsAtLeastConfirmed([t], e),
      i = await this._rpcRequest("getBlock", r),
      s = bt(i, _x);
    if ("error" in s) throw new St(s.error, "failed to get confirmed block");
    const o = s.result;
    if (!o) throw new Error("Confirmed block " + t + " not found");
    const a = {
      ...o,
      transactions: o.transactions.map(({ transaction: c, meta: f }) => {
        const h = new xn(c.message);
        return { meta: f, transaction: { ...c, message: h } };
      }),
    };
    return {
      ...a,
      transactions: a.transactions.map(({ transaction: c, meta: f }) => ({
        meta: f,
        transaction: he.populate(c.message, c.signatures),
      })),
    };
  }
  async getBlocks(t, e, r) {
    const i = this._buildArgsAtLeastConfirmed(e !== void 0 ? [t, e] : [t], r),
      s = await this._rpcRequest("getBlocks", i),
      o = bt(s, Wt(At(ot())));
    if ("error" in o) throw new St(o.error, "failed to get blocks");
    return o.result;
  }
  async getBlockSignatures(t, e) {
    const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
        transactionDetails: "signatures",
        rewards: !1,
      }),
      i = await this._rpcRequest("getBlock", r),
      s = bt(i, Q0);
    if ("error" in s) throw new St(s.error, "failed to get block");
    const o = s.result;
    if (!o) throw new Error("Block " + t + " not found");
    return o;
  }
  async getConfirmedBlockSignatures(t, e) {
    const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
        transactionDetails: "signatures",
        rewards: !1,
      }),
      i = await this._rpcRequest("getBlock", r),
      s = bt(i, Q0);
    if ("error" in s) throw new St(s.error, "failed to get confirmed block");
    const o = s.result;
    if (!o) throw new Error("Confirmed block " + t + " not found");
    return o;
  }
  async getConfirmedTransaction(t, e) {
    const r = this._buildArgsAtLeastConfirmed([t], e),
      i = await this._rpcRequest("getTransaction", r),
      s = bt(i, Df);
    if ("error" in s) throw new St(s.error, "failed to get transaction");
    const o = s.result;
    if (!o) return o;
    const a = new xn(o.transaction.message),
      c = o.transaction.signatures;
    return { ...o, transaction: he.populate(a, c) };
  }
  async getParsedConfirmedTransaction(t, e) {
    const r = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"),
      i = await this._rpcRequest("getTransaction", r),
      s = bt(i, lu);
    if ("error" in s)
      throw new St(s.error, "failed to get confirmed transaction");
    return s.result;
  }
  async getParsedConfirmedTransactions(t, e) {
    const r = t.map((o) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([o], e, "jsonParsed"),
    }));
    return (await this._rpcBatchRequest(r)).map((o) => {
      const a = bt(o, lu);
      if ("error" in a)
        throw new St(a.error, "failed to get confirmed transactions");
      return a.result;
    });
  }
  async getConfirmedSignaturesForAddress(t, e, r) {
    let i = {},
      s = await this.getFirstAvailableBlock();
    for (; !("until" in i) && (e--, !(e <= 0 || e < s)); )
      try {
        const c = await this.getConfirmedBlockSignatures(e, "finalized");
        c.signatures.length > 0 &&
          (i.until = c.signatures[c.signatures.length - 1].toString());
      } catch (c) {
        if (c instanceof Error && c.message.includes("skipped")) continue;
        throw c;
      }
    let o = await this.getSlot("finalized");
    for (; !("before" in i) && (r++, !(r > o)); )
      try {
        const c = await this.getConfirmedBlockSignatures(r);
        c.signatures.length > 0 &&
          (i.before = c.signatures[c.signatures.length - 1].toString());
      } catch (c) {
        if (c instanceof Error && c.message.includes("skipped")) continue;
        throw c;
      }
    return (await this.getConfirmedSignaturesForAddress2(t, i)).map(
      (c) => c.signature
    );
  }
  async getConfirmedSignaturesForAddress2(t, e, r) {
    const i = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
      s = await this._rpcRequest("getConfirmedSignaturesForAddress2", i),
      o = bt(s, cx);
    if ("error" in o)
      throw new St(o.error, "failed to get confirmed signatures for address");
    return o.result;
  }
  async getSignaturesForAddress(t, e, r) {
    const i = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
      s = await this._rpcRequest("getSignaturesForAddress", i),
      o = bt(s, ux);
    if ("error" in o)
      throw new St(o.error, "failed to get signatures for address");
    return o.result;
  }
  async getAddressLookupTable(t, e) {
    const { context: r, value: i } = await this.getAccountInfoAndContext(t, e);
    let s = null;
    return (
      i !== null && (s = new mh({ key: t, state: mh.deserialize(i.data) })),
      { context: r, value: s }
    );
  }
  async getNonceAndContext(t, e) {
    const { context: r, value: i } = await this.getAccountInfoAndContext(t, e);
    let s = null;
    return (
      i !== null && (s = Il.fromAccountData(i.data)), { context: r, value: s }
    );
  }
  async getNonce(t, e) {
    return await this.getNonceAndContext(t, e)
      .then((r) => r.value)
      .catch((r) => {
        throw new Error(
          "failed to get nonce for account " + t.toBase58() + ": " + r
        );
      });
  }
  async requestAirdrop(t, e) {
    const r = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]),
      i = bt(r, Dx);
    if ("error" in i)
      throw new St(i.error, `airdrop to ${t.toBase58()} failed`);
    return i.result;
  }
  async _blockhashWithExpiryBlockHeight(t) {
    if (!t) {
      for (; this._pollingBlockhash; ) await bs(100);
      const r = Date.now() - this._blockhashInfo.lastFetch >= Ny;
      if (this._blockhashInfo.latestBlockhash !== null && !r)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const t = Date.now(),
        e = this._blockhashInfo.latestBlockhash,
        r = e ? e.blockhash : null;
      for (let i = 0; i < 50; i++) {
        const s = await this.getLatestBlockhash("finalized");
        if (r !== s.blockhash)
          return (
            (this._blockhashInfo = {
              latestBlockhash: s,
              lastFetch: Date.now(),
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            s
          );
        await bs(Iy / 2);
      }
      throw new Error(
        `Unable to obtain a new blockhash after ${Date.now() - t}ms`
      );
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  async getStakeMinimumDelegation(t) {
    const { commitment: e, config: r } = me(t),
      i = this._buildArgs([], e, "base64", r),
      s = await this._rpcRequest("getStakeMinimumDelegation", i),
      o = bt(s, De(ot()));
    if ("error" in o)
      throw new St(o.error, "failed to get stake minimum delegation");
    return o.result;
  }
  async simulateTransaction(t, e, r) {
    if ("message" in t) {
      const N = t.serialize(),
        D = Nt.from(N).toString("base64");
      if (Array.isArray(e) || r !== void 0)
        throw new Error("Invalid arguments");
      const q = e || {};
      (q.encoding = "base64"),
        "commitment" in q || (q.commitment = this.commitment),
        e &&
          typeof e == "object" &&
          "innerInstructions" in e &&
          (q.innerInstructions = e.innerInstructions);
      const z = [D, q],
        V = await this._rpcRequest("simulateTransaction", z),
        et = bt(V, q0);
      if ("error" in et)
        throw new Error("failed to simulate transaction: " + et.error.message);
      return et.result;
    }
    let i;
    if (t instanceof he) {
      let M = t;
      (i = new he()),
        (i.feePayer = M.feePayer),
        (i.instructions = t.instructions),
        (i.nonceInfo = M.nonceInfo),
        (i.signatures = M.signatures);
    } else (i = he.populate(t)), (i._message = i._json = void 0);
    if (e !== void 0 && !Array.isArray(e)) throw new Error("Invalid arguments");
    const s = e;
    if (i.nonceInfo && s) i.sign(...s);
    else {
      let M = this._disableBlockhashCaching;
      for (;;) {
        const N = await this._blockhashWithExpiryBlockHeight(M);
        if (
          ((i.lastValidBlockHeight = N.lastValidBlockHeight),
          (i.recentBlockhash = N.blockhash),
          !s)
        )
          break;
        if ((i.sign(...s), !i.signature)) throw new Error("!signature");
        const D = i.signature.toString("base64");
        if (
          !this._blockhashInfo.simulatedSignatures.includes(D) &&
          !this._blockhashInfo.transactionSignatures.includes(D)
        ) {
          this._blockhashInfo.simulatedSignatures.push(D);
          break;
        } else M = !0;
      }
    }
    const o = i._compile(),
      a = o.serialize(),
      f = i._serialize(a).toString("base64"),
      h = { encoding: "base64", commitment: this.commitment };
    if (r) {
      const M = (Array.isArray(r) ? r : o.nonProgramIds()).map((N) =>
        N.toBase58()
      );
      h.accounts = { encoding: "base64", addresses: M };
    }
    s && (h.sigVerify = !0),
      e &&
        typeof e == "object" &&
        "innerInstructions" in e &&
        (h.innerInstructions = e.innerInstructions);
    const b = [f, h],
      S = await this._rpcRequest("simulateTransaction", b),
      P = bt(S, q0);
    if ("error" in P) {
      let M;
      if (
        "data" in P.error &&
        ((M = P.error.data.logs), M && Array.isArray(M))
      ) {
        const N = `
    `,
          D = N + M.join(N);
        console.error(P.error.message, D);
      }
      throw new bc({
        action: "simulate",
        signature: "",
        transactionMessage: P.error.message,
        logs: M,
      });
    }
    return P.result;
  }
  async sendTransaction(t, e, r) {
    if ("version" in t) {
      if (e && Array.isArray(e)) throw new Error("Invalid arguments");
      const o = t.serialize();
      return await this.sendRawTransaction(o, e);
    }
    if (e === void 0 || !Array.isArray(e)) throw new Error("Invalid arguments");
    const i = e;
    if (t.nonceInfo) t.sign(...i);
    else {
      let o = this._disableBlockhashCaching;
      for (;;) {
        const a = await this._blockhashWithExpiryBlockHeight(o);
        if (
          ((t.lastValidBlockHeight = a.lastValidBlockHeight),
          (t.recentBlockhash = a.blockhash),
          t.sign(...i),
          !t.signature)
        )
          throw new Error("!signature");
        const c = t.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(c)) o = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(c);
          break;
        }
      }
    }
    const s = t.serialize();
    return await this.sendRawTransaction(s, r);
  }
  async sendRawTransaction(t, e) {
    const r = qt(t).toString("base64");
    return await this.sendEncodedTransaction(r, e);
  }
  async sendEncodedTransaction(t, e) {
    const r = { encoding: "base64" },
      i = e && e.skipPreflight,
      s =
        i === !0
          ? "processed"
          : (e && e.preflightCommitment) || this.commitment;
    e && e.maxRetries != null && (r.maxRetries = e.maxRetries),
      e && e.minContextSlot != null && (r.minContextSlot = e.minContextSlot),
      i && (r.skipPreflight = i),
      s && (r.preflightCommitment = s);
    const o = [t, r],
      a = await this._rpcRequest("sendTransaction", o),
      c = bt(a, zx);
    if ("error" in c) {
      let f;
      throw (
        ("data" in c.error && (f = c.error.data.logs),
        new bc({
          action: i ? "send" : "simulate",
          signature: "",
          transactionMessage: c.error.message,
          logs: f,
        }))
      );
    }
    return c.result;
  }
  _wsOnOpen() {
    (this._rpcWebSocketConnected = !0),
      (this._rpcWebSocketHeartbeat = setInterval(() => {
        (async () => {
          try {
            await this._rpcWebSocket.notify("ping");
          } catch {}
        })();
      }, 5e3)),
      this._updateSubscriptions();
  }
  _wsOnError(t) {
    (this._rpcWebSocketConnected = !1), console.error("ws error:", t.message);
  }
  _wsOnClose(t) {
    if (
      ((this._rpcWebSocketConnected = !1),
      (this._rpcWebSocketGeneration =
        (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
      this._rpcWebSocketIdleTimeout &&
        (clearTimeout(this._rpcWebSocketIdleTimeout),
        (this._rpcWebSocketIdleTimeout = null)),
      this._rpcWebSocketHeartbeat &&
        (clearInterval(this._rpcWebSocketHeartbeat),
        (this._rpcWebSocketHeartbeat = null)),
      t === 1e3)
    ) {
      this._updateSubscriptions();
      return;
    }
    (this._subscriptionCallbacksByServerSubscriptionId = {}),
      Object.entries(this._subscriptionsByHash).forEach(([e, r]) => {
        this._setSubscription(e, { ...r, state: "pending" });
      });
  }
  _setSubscription(t, e) {
    var i;
    const r = (i = this._subscriptionsByHash[t]) == null ? void 0 : i.state;
    if (((this._subscriptionsByHash[t] = e), r !== e.state)) {
      const s = this._subscriptionStateChangeCallbacksByHash[t];
      s &&
        s.forEach((o) => {
          try {
            o(e.state);
          } catch {}
        });
    }
  }
  _onSubscriptionStateChange(t, e) {
    var s;
    const r = this._subscriptionHashByClientSubscriptionId[t];
    if (r == null) return () => {};
    const i =
      (s = this._subscriptionStateChangeCallbacksByHash)[r] ||
      (s[r] = new Set());
    return (
      i.add(e),
      () => {
        i.delete(e),
          i.size === 0 &&
            delete this._subscriptionStateChangeCallbacksByHash[r];
      }
    );
  }
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      this._rpcWebSocketConnected &&
        ((this._rpcWebSocketConnected = !1),
        (this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;
          try {
            this._rpcWebSocket.close();
          } catch (r) {
            r instanceof Error &&
              console.log(`Error when closing socket connection: ${r.message}`);
          }
        }, 500)));
      return;
    }
    if (
      (this._rpcWebSocketIdleTimeout !== null &&
        (clearTimeout(this._rpcWebSocketIdleTimeout),
        (this._rpcWebSocketIdleTimeout = null),
        (this._rpcWebSocketConnected = !0)),
      !this._rpcWebSocketConnected)
    ) {
      this._rpcWebSocket.connect();
      return;
    }
    const t = this._rpcWebSocketGeneration,
      e = () => t === this._rpcWebSocketGeneration;
    await Promise.all(
      Object.keys(this._subscriptionsByHash).map(async (r) => {
        const i = this._subscriptionsByHash[r];
        if (i !== void 0)
          switch (i.state) {
            case "pending":
            case "unsubscribed":
              if (i.callbacks.size === 0) {
                delete this._subscriptionsByHash[r],
                  i.state === "unsubscribed" &&
                    delete this._subscriptionCallbacksByServerSubscriptionId[
                      i.serverSubscriptionId
                    ],
                  await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const { args: s, method: o } = i;
                try {
                  this._setSubscription(r, { ...i, state: "subscribing" });
                  const a = await this._rpcWebSocket.call(o, s);
                  this._setSubscription(r, {
                    ...i,
                    serverSubscriptionId: a,
                    state: "subscribed",
                  }),
                    (this._subscriptionCallbacksByServerSubscriptionId[a] =
                      i.callbacks),
                    await this._updateSubscriptions();
                } catch (a) {
                  if (
                    (console.error(
                      `Received ${
                        a instanceof Error ? "" : "JSON-RPC "
                      }error calling \`${o}\``,
                      { args: s, error: a }
                    ),
                    !e())
                  )
                    return;
                  this._setSubscription(r, { ...i, state: "pending" }),
                    await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              i.callbacks.size === 0 &&
                (await (async () => {
                  const { serverSubscriptionId: s, unsubscribeMethod: o } = i;
                  if (this._subscriptionsAutoDisposedByRpc.has(s))
                    this._subscriptionsAutoDisposedByRpc.delete(s);
                  else {
                    this._setSubscription(r, { ...i, state: "unsubscribing" }),
                      this._setSubscription(r, {
                        ...i,
                        state: "unsubscribing",
                      });
                    try {
                      await this._rpcWebSocket.call(o, [s]);
                    } catch (a) {
                      if (
                        (a instanceof Error &&
                          console.error(`${o} error:`, a.message),
                        !e())
                      )
                        return;
                      this._setSubscription(r, { ...i, state: "subscribed" }),
                        await this._updateSubscriptions();
                      return;
                    }
                  }
                  this._setSubscription(r, { ...i, state: "unsubscribed" }),
                    await this._updateSubscriptions();
                })());
              break;
          }
      })
    );
  }
  _handleServerNotification(t, e) {
    const r = this._subscriptionCallbacksByServerSubscriptionId[t];
    r !== void 0 &&
      r.forEach((i) => {
        try {
          i(...e);
        } catch (s) {
          console.error(s);
        }
      });
  }
  _wsOnAccountNotification(t) {
    const { result: e, subscription: r } = bt(t, lx);
    this._handleServerNotification(r, [e.value, e.context]);
  }
  _makeSubscription(t, e) {
    const r = this._nextClientSubscriptionId++,
      i = K0([t.method, e]),
      s = this._subscriptionsByHash[i];
    return (
      s === void 0
        ? (this._subscriptionsByHash[i] = {
            ...t,
            args: e,
            callbacks: new Set([t.callback]),
            state: "pending",
          })
        : s.callbacks.add(t.callback),
      (this._subscriptionHashByClientSubscriptionId[r] = i),
      (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] =
        async () => {
          delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r],
            delete this._subscriptionHashByClientSubscriptionId[r];
          const o = this._subscriptionsByHash[i];
          re(
            o !== void 0,
            `Could not find a \`Subscription\` when tearing down client subscription #${r}`
          ),
            o.callbacks.delete(t.callback),
            await this._updateSubscriptions();
        }),
      this._updateSubscriptions(),
      r
    );
  }
  onAccountChange(t, e, r) {
    const { commitment: i, config: s } = me(r),
      o = this._buildArgs(
        [t.toBase58()],
        i || this._commitment || "finalized",
        "base64",
        s
      );
    return this._makeSubscription(
      {
        callback: e,
        method: "accountSubscribe",
        unsubscribeMethod: "accountUnsubscribe",
      },
      o
    );
  }
  async removeAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "account change");
  }
  _wsOnProgramAccountNotification(t) {
    const { result: e, subscription: r } = bt(t, hx);
    this._handleServerNotification(r, [
      { accountId: e.value.pubkey, accountInfo: e.value.account },
      e.context,
    ]);
  }
  onProgramAccountChange(t, e, r, i) {
    const { commitment: s, config: o } = me(r),
      a = this._buildArgs(
        [t.toBase58()],
        s || this._commitment || "finalized",
        "base64",
        o || (i ? { filters: W0(i) } : void 0)
      );
    return this._makeSubscription(
      {
        callback: e,
        method: "programSubscribe",
        unsubscribeMethod: "programUnsubscribe",
      },
      a
    );
  }
  async removeProgramAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "program account change");
  }
  onLogs(t, e, r) {
    const i = this._buildArgs(
      [typeof t == "object" ? { mentions: [t.toString()] } : t],
      r || this._commitment || "finalized"
    );
    return this._makeSubscription(
      {
        callback: e,
        method: "logsSubscribe",
        unsubscribeMethod: "logsUnsubscribe",
      },
      i
    );
  }
  async removeOnLogsListener(t) {
    await this._unsubscribeClientSubscription(t, "logs");
  }
  _wsOnLogsNotification(t) {
    const { result: e, subscription: r } = bt(t, Gx);
    this._handleServerNotification(r, [e.value, e.context]);
  }
  _wsOnSlotNotification(t) {
    const { result: e, subscription: r } = bt(t, px);
    this._handleServerNotification(r, [e]);
  }
  onSlotChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe",
      },
      []
    );
  }
  async removeSlotChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "slot change");
  }
  _wsOnSlotUpdatesNotification(t) {
    const { result: e, subscription: r } = bt(t, yx);
    this._handleServerNotification(r, [e]);
  }
  onSlotUpdate(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe",
      },
      []
    );
  }
  async removeSlotUpdateListener(t) {
    await this._unsubscribeClientSubscription(t, "slot update");
  }
  async _unsubscribeClientSubscription(t, e) {
    const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
    r
      ? await r()
      : console.warn(
          `Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`
        );
  }
  _buildArgs(t, e, r, i) {
    const s = e || this._commitment;
    if (s || r || i) {
      let o = {};
      r && (o.encoding = r),
        s && (o.commitment = s),
        i && (o = Object.assign(o, i)),
        t.push(o);
    }
    return t;
  }
  _buildArgsAtLeastConfirmed(t, e, r, i) {
    const s = e || this._commitment;
    if (s && !["confirmed", "finalized"].includes(s))
      throw new Error(
        "Using Connection with default commitment: `" +
          this._commitment +
          "`, but method requires at least `confirmed`"
      );
    return this._buildArgs(t, e, r, i);
  }
  _wsOnSignatureNotification(t) {
    const { result: e, subscription: r } = bt(t, mx);
    e.value !== "receivedSignature" &&
      this._subscriptionsAutoDisposedByRpc.add(r),
      this._handleServerNotification(
        r,
        e.value === "receivedSignature"
          ? [{ type: "received" }, e.context]
          : [{ type: "status", result: e.value }, e.context]
      );
  }
  onSignature(t, e, r) {
    const i = this._buildArgs([t], r || this._commitment || "finalized"),
      s = this._makeSubscription(
        {
          callback: (o, a) => {
            if (o.type === "status") {
              e(o.result, a);
              try {
                this.removeSignatureListener(s);
              } catch {}
            }
          },
          method: "signatureSubscribe",
          unsubscribeMethod: "signatureUnsubscribe",
        },
        i
      );
    return s;
  }
  onSignatureWithOptions(t, e, r) {
    const { commitment: i, ...s } = {
        ...r,
        commitment: (r && r.commitment) || this._commitment || "finalized",
      },
      o = this._buildArgs([t], i, void 0, s),
      a = this._makeSubscription(
        {
          callback: (c, f) => {
            e(c, f);
            try {
              this.removeSignatureListener(a);
            } catch {}
          },
          method: "signatureSubscribe",
          unsubscribeMethod: "signatureUnsubscribe",
        },
        o
      );
    return a;
  }
  async removeSignatureListener(t) {
    await this._unsubscribeClientSubscription(t, "signature result");
  }
  _wsOnRootNotification(t) {
    const { result: e, subscription: r } = bt(t, wx);
    this._handleServerNotification(r, [e]);
  }
  onRootChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe",
      },
      []
    );
  }
  async removeRootChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "root change");
  }
}
class Do {
  constructor(t) {
    (this._keypair = void 0), (this._keypair = t ?? D0());
  }
  static generate() {
    return new Do(D0());
  }
  static fromSecretKey(t, e) {
    if (t.byteLength !== 64) throw new Error("bad secret key size");
    const r = t.slice(32, 64);
    if (!e || !e.skipValidation) {
      const i = t.slice(0, 32),
        s = Ku(i);
      for (let o = 0; o < 32; o++)
        if (r[o] !== s[o]) throw new Error("provided secretKey is invalid");
    }
    return new Do({ publicKey: r, secretKey: t });
  }
  static fromSeed(t) {
    const e = Ku(t),
      r = new Uint8Array(64);
    return r.set(t), r.set(e, 32), new Do({ publicKey: e, secretKey: r });
  }
  get publicKey() {
    return new gt(this._keypair.publicKey);
  }
  get secretKey() {
    return new Uint8Array(this._keypair.secretKey);
  }
}
const mi = Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: $.struct([
      $.u32("instruction"),
      Ua("recentSlot"),
      $.u8("bumpSeed"),
    ]),
  },
  FreezeLookupTable: { index: 1, layout: $.struct([$.u32("instruction")]) },
  ExtendLookupTable: {
    index: 2,
    layout: $.struct([
      $.u32("instruction"),
      Ua(),
      $.seq(jt(), $.offset($.u32(), -8), "addresses"),
    ]),
  },
  DeactivateLookupTable: { index: 3, layout: $.struct([$.u32("instruction")]) },
  CloseLookupTable: { index: 4, layout: $.struct([$.u32("instruction")]) },
});
class Wx {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const r = $.u32("instruction").decode(t.data);
    let i;
    for (const [s, o] of Object.entries(mi))
      if (o.index == r) {
        i = s;
        break;
      }
    if (!i)
      throw new Error(
        "Invalid Instruction. Should be a LookupTable Instruction"
      );
    return i;
  }
  static decodeCreateLookupTable(t) {
    this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 4);
    const { recentSlot: e } = ne(mi.CreateLookupTable, t.data);
    return {
      authority: t.keys[1].pubkey,
      payer: t.keys[2].pubkey,
      recentSlot: Number(e),
    };
  }
  static decodeExtendLookupTable(t) {
    if ((this.checkProgramId(t.programId), t.keys.length < 2))
      throw new Error(
        `invalid instruction; found ${t.keys.length} keys, expected at least 2`
      );
    const { addresses: e } = ne(mi.ExtendLookupTable, t.data);
    return {
      lookupTable: t.keys[0].pubkey,
      authority: t.keys[1].pubkey,
      payer: t.keys.length > 2 ? t.keys[2].pubkey : void 0,
      addresses: e.map((r) => new gt(r)),
    };
  }
  static decodeCloseLookupTable(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeysLength(t.keys, 3),
      {
        lookupTable: t.keys[0].pubkey,
        authority: t.keys[1].pubkey,
        recipient: t.keys[2].pubkey,
      }
    );
  }
  static decodeFreezeLookupTable(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeysLength(t.keys, 2),
      { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey }
    );
  }
  static decodeDeactivateLookupTable(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeysLength(t.keys, 2),
      { lookupTable: t.keys[0].pubkey, authority: t.keys[1].pubkey }
    );
  }
  static checkProgramId(t) {
    if (!t.equals(Rd.programId))
      throw new Error(
        "invalid instruction; programId is not AddressLookupTable Program"
      );
  }
  static checkKeysLength(t, e) {
    if (t.length < e)
      throw new Error(
        `invalid instruction; found ${t.length} keys, expected at least ${e}`
      );
  }
}
class Rd {
  constructor() {}
  static createLookupTable(t) {
    const [e, r] = gt.findProgramAddressSync(
        [t.authority.toBuffer(), uy().encode(t.recentSlot)],
        this.programId
      ),
      i = mi.CreateLookupTable,
      s = te(i, { recentSlot: BigInt(t.recentSlot), bumpSeed: r }),
      o = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
        { pubkey: t.payer, isSigner: !0, isWritable: !0 },
        { pubkey: $e.programId, isSigner: !1, isWritable: !1 },
      ];
    return [new ie({ programId: this.programId, keys: o, data: s }), e];
  }
  static freezeLookupTable(t) {
    const e = mi.FreezeLookupTable,
      r = te(e),
      i = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
      ];
    return new ie({ programId: this.programId, keys: i, data: r });
  }
  static extendLookupTable(t) {
    const e = mi.ExtendLookupTable,
      r = te(e, { addresses: t.addresses.map((s) => s.toBytes()) }),
      i = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
      ];
    return (
      t.payer &&
        i.push(
          { pubkey: t.payer, isSigner: !0, isWritable: !0 },
          { pubkey: $e.programId, isSigner: !1, isWritable: !1 }
        ),
      new ie({ programId: this.programId, keys: i, data: r })
    );
  }
  static deactivateLookupTable(t) {
    const e = mi.DeactivateLookupTable,
      r = te(e),
      i = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
      ];
    return new ie({ programId: this.programId, keys: i, data: r });
  }
  static closeLookupTable(t) {
    const e = mi.CloseLookupTable,
      r = te(e),
      i = [
        { pubkey: t.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: t.authority, isSigner: !0, isWritable: !1 },
        { pubkey: t.recipient, isSigner: !1, isWritable: !0 },
      ];
    return new ie({ programId: this.programId, keys: i, data: r });
  }
}
Rd.programId = new gt("AddressLookupTab1e1111111111111111111111111");
class qx {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const r = $.u8("instruction").decode(t.data);
    let i;
    for (const [s, o] of Object.entries(Hn))
      if (o.index == r) {
        i = s;
        break;
      }
    if (!i)
      throw new Error(
        "Instruction type incorrect; not a ComputeBudgetInstruction"
      );
    return i;
  }
  static decodeRequestUnits(t) {
    this.checkProgramId(t.programId);
    const { units: e, additionalFee: r } = ne(Hn.RequestUnits, t.data);
    return { units: e, additionalFee: r };
  }
  static decodeRequestHeapFrame(t) {
    this.checkProgramId(t.programId);
    const { bytes: e } = ne(Hn.RequestHeapFrame, t.data);
    return { bytes: e };
  }
  static decodeSetComputeUnitLimit(t) {
    this.checkProgramId(t.programId);
    const { units: e } = ne(Hn.SetComputeUnitLimit, t.data);
    return { units: e };
  }
  static decodeSetComputeUnitPrice(t) {
    this.checkProgramId(t.programId);
    const { microLamports: e } = ne(Hn.SetComputeUnitPrice, t.data);
    return { microLamports: e };
  }
  static checkProgramId(t) {
    if (!t.equals(Pd.programId))
      throw new Error(
        "invalid instruction; programId is not ComputeBudgetProgram"
      );
  }
}
const Hn = Object.freeze({
  RequestUnits: {
    index: 0,
    layout: $.struct([
      $.u8("instruction"),
      $.u32("units"),
      $.u32("additionalFee"),
    ]),
  },
  RequestHeapFrame: {
    index: 1,
    layout: $.struct([$.u8("instruction"), $.u32("bytes")]),
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: $.struct([$.u8("instruction"), $.u32("units")]),
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: $.struct([$.u8("instruction"), Ua("microLamports")]),
  },
});
class Pd {
  constructor() {}
  static requestUnits(t) {
    const e = Hn.RequestUnits,
      r = te(e, t);
    return new ie({ keys: [], programId: this.programId, data: r });
  }
  static requestHeapFrame(t) {
    const e = Hn.RequestHeapFrame,
      r = te(e, t);
    return new ie({ keys: [], programId: this.programId, data: r });
  }
  static setComputeUnitLimit(t) {
    const e = Hn.SetComputeUnitLimit,
      r = te(e, t);
    return new ie({ keys: [], programId: this.programId, data: r });
  }
  static setComputeUnitPrice(t) {
    const e = Hn.SetComputeUnitPrice,
      r = te(e, { microLamports: BigInt(t.microLamports) });
    return new ie({ keys: [], programId: this.programId, data: r });
  }
}
Pd.programId = new gt("ComputeBudget111111111111111111111111111111");
const J0 = 64,
  j0 = 32,
  Z0 = 64,
  Y0 = $.struct([
    $.u8("numSignatures"),
    $.u8("padding"),
    $.u16("signatureOffset"),
    $.u16("signatureInstructionIndex"),
    $.u16("publicKeyOffset"),
    $.u16("publicKeyInstructionIndex"),
    $.u16("messageDataOffset"),
    $.u16("messageDataSize"),
    $.u16("messageInstructionIndex"),
  ]);
class Pl {
  constructor() {}
  static createInstructionWithPublicKey(t) {
    const { publicKey: e, message: r, signature: i, instructionIndex: s } = t;
    re(
      e.length === j0,
      `Public Key must be ${j0} bytes but received ${e.length} bytes`
    ),
      re(
        i.length === Z0,
        `Signature must be ${Z0} bytes but received ${i.length} bytes`
      );
    const o = Y0.span,
      a = o + e.length,
      c = a + i.length,
      f = 1,
      h = Nt.alloc(c + r.length),
      b = s ?? 65535;
    return (
      Y0.encode(
        {
          numSignatures: f,
          padding: 0,
          signatureOffset: a,
          signatureInstructionIndex: b,
          publicKeyOffset: o,
          publicKeyInstructionIndex: b,
          messageDataOffset: c,
          messageDataSize: r.length,
          messageInstructionIndex: b,
        },
        h
      ),
      h.fill(e, o),
      h.fill(i, a),
      h.fill(r, c),
      new ie({ keys: [], programId: Pl.programId, data: h })
    );
  }
  static createInstructionWithPrivateKey(t) {
    const { privateKey: e, message: r, instructionIndex: i } = t;
    re(
      e.length === J0,
      `Private key must be ${J0} bytes but received ${e.length} bytes`
    );
    try {
      const s = Do.fromSecretKey(e),
        o = s.publicKey.toBytes(),
        a = wd(r, s.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey: o,
        message: r,
        signature: a,
        instructionIndex: i,
      });
    } catch (s) {
      throw new Error(`Error creating instruction; ${s}`);
    }
  }
}
Pl.programId = new gt("Ed25519SigVerify111111111111111111111111111");
const $x = (n, t) => {
  const e = md.sign(n, t);
  return [e.toCompactRawBytes(), e.recovery];
};
md.utils.isValidPrivateKey;
const Qx = md.getPublicKey,
  X0 = 32,
  zf = 20,
  tp = 64,
  Jx = 11,
  Hf = $.struct([
    $.u8("numSignatures"),
    $.u16("signatureOffset"),
    $.u8("signatureInstructionIndex"),
    $.u16("ethAddressOffset"),
    $.u8("ethAddressInstructionIndex"),
    $.u16("messageDataOffset"),
    $.u16("messageDataSize"),
    $.u8("messageInstructionIndex"),
    $.blob(20, "ethAddress"),
    $.blob(64, "signature"),
    $.u8("recoveryId"),
  ]);
class zo {
  constructor() {}
  static publicKeyToEthAddress(t) {
    re(
      t.length === tp,
      `Public key must be ${tp} bytes but received ${t.length} bytes`
    );
    try {
      return Nt.from(f0(qt(t))).slice(-zf);
    } catch (e) {
      throw new Error(`Error constructing Ethereum address: ${e}`);
    }
  }
  static createInstructionWithPublicKey(t) {
    const {
      publicKey: e,
      message: r,
      signature: i,
      recoveryId: s,
      instructionIndex: o,
    } = t;
    return zo.createInstructionWithEthAddress({
      ethAddress: zo.publicKeyToEthAddress(e),
      message: r,
      signature: i,
      recoveryId: s,
      instructionIndex: o,
    });
  }
  static createInstructionWithEthAddress(t) {
    const {
      ethAddress: e,
      message: r,
      signature: i,
      recoveryId: s,
      instructionIndex: o = 0,
    } = t;
    let a;
    typeof e == "string"
      ? e.startsWith("0x")
        ? (a = Nt.from(e.substr(2), "hex"))
        : (a = Nt.from(e, "hex"))
      : (a = e),
      re(
        a.length === zf,
        `Address must be ${zf} bytes but received ${a.length} bytes`
      );
    const c = 1 + Jx,
      f = c,
      h = c + a.length,
      b = h + i.length + 1,
      S = 1,
      P = Nt.alloc(Hf.span + r.length);
    return (
      Hf.encode(
        {
          numSignatures: S,
          signatureOffset: h,
          signatureInstructionIndex: o,
          ethAddressOffset: f,
          ethAddressInstructionIndex: o,
          messageDataOffset: b,
          messageDataSize: r.length,
          messageInstructionIndex: o,
          signature: qt(i),
          ethAddress: qt(a),
          recoveryId: s,
        },
        P
      ),
      P.fill(qt(r), Hf.span),
      new ie({ keys: [], programId: zo.programId, data: P })
    );
  }
  static createInstructionWithPrivateKey(t) {
    const { privateKey: e, message: r, instructionIndex: i } = t;
    re(
      e.length === X0,
      `Private key must be ${X0} bytes but received ${e.length} bytes`
    );
    try {
      const s = qt(e),
        o = Qx(s, !1).slice(1),
        a = Nt.from(f0(qt(r))),
        [c, f] = $x(a, s);
      return this.createInstructionWithPublicKey({
        publicKey: o,
        message: r,
        signature: c,
        recoveryId: f,
        instructionIndex: i,
      });
    } catch (s) {
      throw new Error(`Error creating instruction; ${s}`);
    }
  }
}
zo.programId = new gt("KeccakSecp256k11111111111111111111111111111");
var Hy;
const Gy = new gt("StakeConfig11111111111111111111111111111111");
class Ky {
  constructor(t, e) {
    (this.staker = void 0),
      (this.withdrawer = void 0),
      (this.staker = t),
      (this.withdrawer = e);
  }
}
class jc {
  constructor(t, e, r) {
    (this.unixTimestamp = void 0),
      (this.epoch = void 0),
      (this.custodian = void 0),
      (this.unixTimestamp = t),
      (this.epoch = e),
      (this.custodian = r);
  }
}
Hy = jc;
jc.default = new Hy(0, 0, gt.default);
class jx {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const r = $.u32("instruction").decode(t.data);
    let i;
    for (const [s, o] of Object.entries(Ye))
      if (o.index == r) {
        i = s;
        break;
      }
    if (!i)
      throw new Error("Instruction type incorrect; not a StakeInstruction");
    return i;
  }
  static decodeInitialize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const { authorized: e, lockup: r } = ne(Ye.Initialize, t.data);
    return {
      stakePubkey: t.keys[0].pubkey,
      authorized: new Ky(new gt(e.staker), new gt(e.withdrawer)),
      lockup: new jc(r.unixTimestamp, r.epoch, new gt(r.custodian)),
    };
  }
  static decodeDelegate(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 6),
      ne(Ye.Delegate, t.data),
      {
        stakePubkey: t.keys[0].pubkey,
        votePubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[5].pubkey,
      }
    );
  }
  static decodeAuthorize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { newAuthorized: e, stakeAuthorizationType: r } = ne(
        Ye.Authorize,
        t.data
      ),
      i = {
        stakePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[2].pubkey,
        newAuthorizedPubkey: new gt(e),
        stakeAuthorizationType: { index: r },
      };
    return t.keys.length > 3 && (i.custodianPubkey = t.keys[3].pubkey), i;
  }
  static decodeAuthorizeWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
    const {
        newAuthorized: e,
        stakeAuthorizationType: r,
        authoritySeed: i,
        authorityOwner: s,
      } = ne(Ye.AuthorizeWithSeed, t.data),
      o = {
        stakePubkey: t.keys[0].pubkey,
        authorityBase: t.keys[1].pubkey,
        authoritySeed: i,
        authorityOwner: new gt(s),
        newAuthorizedPubkey: new gt(e),
        stakeAuthorizationType: { index: r },
      };
    return t.keys.length > 3 && (o.custodianPubkey = t.keys[3].pubkey), o;
  }
  static decodeSplit(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { lamports: e } = ne(Ye.Split, t.data);
    return {
      stakePubkey: t.keys[0].pubkey,
      splitStakePubkey: t.keys[1].pubkey,
      authorizedPubkey: t.keys[2].pubkey,
      lamports: e,
    };
  }
  static decodeMerge(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 3),
      ne(Ye.Merge, t.data),
      {
        stakePubkey: t.keys[0].pubkey,
        sourceStakePubKey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey,
      }
    );
  }
  static decodeWithdraw(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
    const { lamports: e } = ne(Ye.Withdraw, t.data),
      r = {
        stakePubkey: t.keys[0].pubkey,
        toPubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey,
        lamports: e,
      };
    return t.keys.length > 5 && (r.custodianPubkey = t.keys[5].pubkey), r;
  }
  static decodeDeactivate(t) {
    return (
      this.checkProgramId(t.programId),
      this.checkKeyLength(t.keys, 3),
      ne(Ye.Deactivate, t.data),
      { stakePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey }
    );
  }
  static checkProgramId(t) {
    if (!t.equals(Cl.programId))
      throw new Error("invalid instruction; programId is not StakeProgram");
  }
  static checkKeyLength(t, e) {
    if (t.length < e)
      throw new Error(
        `invalid instruction; found ${t.length} keys, expected at least ${e}`
      );
  }
}
const Ye = Object.freeze({
    Initialize: {
      index: 0,
      layout: $.struct([$.u32("instruction"), tE(), eE()]),
    },
    Authorize: {
      index: 1,
      layout: $.struct([
        $.u32("instruction"),
        jt("newAuthorized"),
        $.u32("stakeAuthorizationType"),
      ]),
    },
    Delegate: { index: 2, layout: $.struct([$.u32("instruction")]) },
    Split: {
      index: 3,
      layout: $.struct([$.u32("instruction"), $.ns64("lamports")]),
    },
    Withdraw: {
      index: 4,
      layout: $.struct([$.u32("instruction"), $.ns64("lamports")]),
    },
    Deactivate: { index: 5, layout: $.struct([$.u32("instruction")]) },
    Merge: { index: 7, layout: $.struct([$.u32("instruction")]) },
    AuthorizeWithSeed: {
      index: 8,
      layout: $.struct([
        $.u32("instruction"),
        jt("newAuthorized"),
        $.u32("stakeAuthorizationType"),
        Rs("authoritySeed"),
        jt("authorityOwner"),
      ]),
    },
  }),
  Zx = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
class Cl {
  constructor() {}
  static initialize(t) {
    const { stakePubkey: e, authorized: r, lockup: i } = t,
      s = i || jc.default,
      o = Ye.Initialize,
      a = te(o, {
        authorized: {
          staker: qt(r.staker.toBuffer()),
          withdrawer: qt(r.withdrawer.toBuffer()),
        },
        lockup: {
          unixTimestamp: s.unixTimestamp,
          epoch: s.epoch,
          custodian: qt(s.custodian.toBuffer()),
        },
      }),
      c = {
        keys: [
          { pubkey: e, isSigner: !1, isWritable: !0 },
          { pubkey: La, isSigner: !1, isWritable: !1 },
        ],
        programId: this.programId,
        data: a,
      };
    return new ie(c);
  }
  static createAccountWithSeed(t) {
    const e = new he();
    e.add(
      $e.createAccountWithSeed({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.stakePubkey,
        basePubkey: t.basePubkey,
        seed: t.seed,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId,
      })
    );
    const { stakePubkey: r, authorized: i, lockup: s } = t;
    return e.add(this.initialize({ stakePubkey: r, authorized: i, lockup: s }));
  }
  static createAccount(t) {
    const e = new he();
    e.add(
      $e.createAccount({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.stakePubkey,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId,
      })
    );
    const { stakePubkey: r, authorized: i, lockup: s } = t;
    return e.add(this.initialize({ stakePubkey: r, authorized: i, lockup: s }));
  }
  static delegate(t) {
    const { stakePubkey: e, authorizedPubkey: r, votePubkey: i } = t,
      s = Ye.Delegate,
      o = te(s);
    return new he().add({
      keys: [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: i, isSigner: !1, isWritable: !1 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
        { pubkey: vu, isSigner: !1, isWritable: !1 },
        { pubkey: Gy, isSigner: !1, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: o,
    });
  }
  static authorize(t) {
    const {
        stakePubkey: e,
        authorizedPubkey: r,
        newAuthorizedPubkey: i,
        stakeAuthorizationType: s,
        custodianPubkey: o,
      } = t,
      a = Ye.Authorize,
      c = te(a, {
        newAuthorized: qt(i.toBuffer()),
        stakeAuthorizationType: s.index,
      }),
      f = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: Un, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ];
    return (
      o && f.push({ pubkey: o, isSigner: !0, isWritable: !1 }),
      new he().add({ keys: f, programId: this.programId, data: c })
    );
  }
  static authorizeWithSeed(t) {
    const {
        stakePubkey: e,
        authorityBase: r,
        authoritySeed: i,
        authorityOwner: s,
        newAuthorizedPubkey: o,
        stakeAuthorizationType: a,
        custodianPubkey: c,
      } = t,
      f = Ye.AuthorizeWithSeed,
      h = te(f, {
        newAuthorized: qt(o.toBuffer()),
        stakeAuthorizationType: a.index,
        authoritySeed: i,
        authorityOwner: qt(s.toBuffer()),
      }),
      b = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
      ];
    return (
      c && b.push({ pubkey: c, isSigner: !0, isWritable: !1 }),
      new he().add({ keys: b, programId: this.programId, data: h })
    );
  }
  static splitInstruction(t) {
    const {
        stakePubkey: e,
        authorizedPubkey: r,
        splitStakePubkey: i,
        lamports: s,
      } = t,
      o = Ye.Split,
      a = te(o, { lamports: s });
    return new ie({
      keys: [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: i, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: a,
    });
  }
  static split(t, e) {
    const r = new he();
    return (
      r.add(
        $e.createAccount({
          fromPubkey: t.authorizedPubkey,
          newAccountPubkey: t.splitStakePubkey,
          lamports: e,
          space: this.space,
          programId: this.programId,
        })
      ),
      r.add(this.splitInstruction(t))
    );
  }
  static splitWithSeed(t, e) {
    const {
        stakePubkey: r,
        authorizedPubkey: i,
        splitStakePubkey: s,
        basePubkey: o,
        seed: a,
        lamports: c,
      } = t,
      f = new he();
    return (
      f.add(
        $e.allocate({
          accountPubkey: s,
          basePubkey: o,
          seed: a,
          space: this.space,
          programId: this.programId,
        })
      ),
      e &&
        e > 0 &&
        f.add(
          $e.transfer({
            fromPubkey: t.authorizedPubkey,
            toPubkey: s,
            lamports: e,
          })
        ),
      f.add(
        this.splitInstruction({
          stakePubkey: r,
          authorizedPubkey: i,
          splitStakePubkey: s,
          lamports: c,
        })
      )
    );
  }
  static merge(t) {
    const { stakePubkey: e, sourceStakePubKey: r, authorizedPubkey: i } = t,
      s = Ye.Merge,
      o = te(s);
    return new he().add({
      keys: [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !1, isWritable: !0 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
        { pubkey: vu, isSigner: !1, isWritable: !1 },
        { pubkey: i, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: o,
    });
  }
  static withdraw(t) {
    const {
        stakePubkey: e,
        authorizedPubkey: r,
        toPubkey: i,
        lamports: s,
        custodianPubkey: o,
      } = t,
      a = Ye.Withdraw,
      c = te(a, { lamports: s }),
      f = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: i, isSigner: !1, isWritable: !0 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
        { pubkey: vu, isSigner: !1, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ];
    return (
      o && f.push({ pubkey: o, isSigner: !0, isWritable: !1 }),
      new he().add({ keys: f, programId: this.programId, data: c })
    );
  }
  static deactivate(t) {
    const { stakePubkey: e, authorizedPubkey: r } = t,
      i = Ye.Deactivate,
      s = te(i);
    return new he().add({
      keys: [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ],
      programId: this.programId,
      data: s,
    });
  }
}
Cl.programId = new gt("Stake11111111111111111111111111111111111111");
Cl.space = 200;
class Vy {
  constructor(t, e, r, i) {
    (this.nodePubkey = void 0),
      (this.authorizedVoter = void 0),
      (this.authorizedWithdrawer = void 0),
      (this.commission = void 0),
      (this.nodePubkey = t),
      (this.authorizedVoter = e),
      (this.authorizedWithdrawer = r),
      (this.commission = i);
  }
}
class Yx {
  constructor() {}
  static decodeInstructionType(t) {
    this.checkProgramId(t.programId);
    const r = $.u32("instruction").decode(t.data);
    let i;
    for (const [s, o] of Object.entries(Gn))
      if (o.index == r) {
        i = s;
        break;
      }
    if (!i)
      throw new Error("Instruction type incorrect; not a VoteInstruction");
    return i;
  }
  static decodeInitializeAccount(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 4);
    const { voteInit: e } = ne(Gn.InitializeAccount, t.data);
    return {
      votePubkey: t.keys[0].pubkey,
      nodePubkey: t.keys[3].pubkey,
      voteInit: new Vy(
        new gt(e.nodePubkey),
        new gt(e.authorizedVoter),
        new gt(e.authorizedWithdrawer),
        e.commission
      ),
    };
  }
  static decodeAuthorize(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { newAuthorized: e, voteAuthorizationType: r } = ne(
      Gn.Authorize,
      t.data
    );
    return {
      votePubkey: t.keys[0].pubkey,
      authorizedPubkey: t.keys[2].pubkey,
      newAuthorizedPubkey: new gt(e),
      voteAuthorizationType: { index: r },
    };
  }
  static decodeAuthorizeWithSeed(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: e,
        currentAuthorityDerivedKeySeed: r,
        newAuthorized: i,
        voteAuthorizationType: s,
      },
    } = ne(Gn.AuthorizeWithSeed, t.data);
    return {
      currentAuthorityDerivedKeyBasePubkey: t.keys[2].pubkey,
      currentAuthorityDerivedKeyOwnerPubkey: new gt(e),
      currentAuthorityDerivedKeySeed: r,
      newAuthorizedPubkey: new gt(i),
      voteAuthorizationType: { index: s },
      votePubkey: t.keys[0].pubkey,
    };
  }
  static decodeWithdraw(t) {
    this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
    const { lamports: e } = ne(Gn.Withdraw, t.data);
    return {
      votePubkey: t.keys[0].pubkey,
      authorizedWithdrawerPubkey: t.keys[2].pubkey,
      lamports: e,
      toPubkey: t.keys[1].pubkey,
    };
  }
  static checkProgramId(t) {
    if (!t.equals(Ja.programId))
      throw new Error("invalid instruction; programId is not VoteProgram");
  }
  static checkKeyLength(t, e) {
    if (t.length < e)
      throw new Error(
        `invalid instruction; found ${t.length} keys, expected at least ${e}`
      );
  }
}
const Gn = Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: $.struct([$.u32("instruction"), rE()]),
    },
    Authorize: {
      index: 1,
      layout: $.struct([
        $.u32("instruction"),
        jt("newAuthorized"),
        $.u32("voteAuthorizationType"),
      ]),
    },
    Withdraw: {
      index: 3,
      layout: $.struct([$.u32("instruction"), $.ns64("lamports")]),
    },
    UpdateValidatorIdentity: {
      index: 4,
      layout: $.struct([$.u32("instruction")]),
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: $.struct([$.u32("instruction"), nE()]),
    },
  }),
  Xx = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
class Ja {
  constructor() {}
  static initializeAccount(t) {
    const { votePubkey: e, nodePubkey: r, voteInit: i } = t,
      s = Gn.InitializeAccount,
      o = te(s, {
        voteInit: {
          nodePubkey: qt(i.nodePubkey.toBuffer()),
          authorizedVoter: qt(i.authorizedVoter.toBuffer()),
          authorizedWithdrawer: qt(i.authorizedWithdrawer.toBuffer()),
          commission: i.commission,
        },
      }),
      a = {
        keys: [
          { pubkey: e, isSigner: !1, isWritable: !0 },
          { pubkey: La, isSigner: !1, isWritable: !1 },
          { pubkey: Un, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: o,
      };
    return new ie(a);
  }
  static createAccount(t) {
    const e = new he();
    return (
      e.add(
        $e.createAccount({
          fromPubkey: t.fromPubkey,
          newAccountPubkey: t.votePubkey,
          lamports: t.lamports,
          space: this.space,
          programId: this.programId,
        })
      ),
      e.add(
        this.initializeAccount({
          votePubkey: t.votePubkey,
          nodePubkey: t.voteInit.nodePubkey,
          voteInit: t.voteInit,
        })
      )
    );
  }
  static authorize(t) {
    const {
        votePubkey: e,
        authorizedPubkey: r,
        newAuthorizedPubkey: i,
        voteAuthorizationType: s,
      } = t,
      o = Gn.Authorize,
      a = te(o, {
        newAuthorized: qt(i.toBuffer()),
        voteAuthorizationType: s.index,
      }),
      c = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ];
    return new he().add({ keys: c, programId: this.programId, data: a });
  }
  static authorizeWithSeed(t) {
    const {
        currentAuthorityDerivedKeyBasePubkey: e,
        currentAuthorityDerivedKeyOwnerPubkey: r,
        currentAuthorityDerivedKeySeed: i,
        newAuthorizedPubkey: s,
        voteAuthorizationType: o,
        votePubkey: a,
      } = t,
      c = Gn.AuthorizeWithSeed,
      f = te(c, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: qt(r.toBuffer()),
          currentAuthorityDerivedKeySeed: i,
          newAuthorized: qt(s.toBuffer()),
          voteAuthorizationType: o.index,
        },
      }),
      h = [
        { pubkey: a, isSigner: !1, isWritable: !0 },
        { pubkey: Un, isSigner: !1, isWritable: !1 },
        { pubkey: e, isSigner: !0, isWritable: !1 },
      ];
    return new he().add({ keys: h, programId: this.programId, data: f });
  }
  static withdraw(t) {
    const {
        votePubkey: e,
        authorizedWithdrawerPubkey: r,
        lamports: i,
        toPubkey: s,
      } = t,
      o = Gn.Withdraw,
      a = te(o, { lamports: i }),
      c = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: s, isSigner: !1, isWritable: !0 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ];
    return new he().add({ keys: c, programId: this.programId, data: a });
  }
  static safeWithdraw(t, e, r) {
    if (t.lamports > e - r)
      throw new Error(
        "Withdraw will leave vote account with insufficient funds."
      );
    return Ja.withdraw(t);
  }
  static updateValidatorIdentity(t) {
    const { votePubkey: e, authorizedWithdrawerPubkey: r, nodePubkey: i } = t,
      s = Gn.UpdateValidatorIdentity,
      o = te(s),
      a = [
        { pubkey: e, isSigner: !1, isWritable: !0 },
        { pubkey: i, isSigner: !0, isWritable: !1 },
        { pubkey: r, isSigner: !0, isWritable: !1 },
      ];
    return new he().add({ keys: a, programId: this.programId, data: o });
  }
}
Ja.programId = new gt("Vote111111111111111111111111111111111111111");
Ja.space = 3762;
const Wy = new gt("Va1idator1nfo111111111111111111111111111111"),
  t2 = dt({
    name: mt(),
    website: Bt(mt()),
    details: Bt(mt()),
    iconUrl: Bt(mt()),
    keybaseUsername: Bt(mt()),
  });
class Cd {
  constructor(t, e) {
    (this.key = void 0), (this.info = void 0), (this.key = t), (this.info = e);
  }
  static fromConfigData(t) {
    let e = [...t];
    if (_r(e) !== 2) return null;
    const i = [];
    for (let s = 0; s < 2; s++) {
      const o = new gt(Or(e, 0, qn)),
        a = zn(e) === 1;
      i.push({ publicKey: o, isSigner: a });
    }
    if (i[0].publicKey.equals(Wy) && i[1].isSigner) {
      const s = Rs().decode(Nt.from(e)),
        o = JSON.parse(s);
      return ly(o, t2), new Cd(i[1].publicKey, o);
    }
    return null;
  }
}
const e2 = new gt("Vote111111111111111111111111111111111111111"),
  r2 = $.struct([
    jt("nodePubkey"),
    jt("authorizedWithdrawer"),
    $.u8("commission"),
    $.nu64(),
    $.seq(
      $.struct([$.nu64("slot"), $.u32("confirmationCount")]),
      $.offset($.u32(), -8),
      "votes"
    ),
    $.u8("rootSlotValid"),
    $.nu64("rootSlot"),
    $.nu64(),
    $.seq(
      $.struct([$.nu64("epoch"), jt("authorizedVoter")]),
      $.offset($.u32(), -8),
      "authorizedVoters"
    ),
    $.struct(
      [
        $.seq(
          $.struct([
            jt("authorizedPubkey"),
            $.nu64("epochOfLastAuthorizedSwitch"),
            $.nu64("targetEpoch"),
          ]),
          32,
          "buf"
        ),
        $.nu64("idx"),
        $.u8("isEmpty"),
      ],
      "priorVoters"
    ),
    $.nu64(),
    $.seq(
      $.struct([$.nu64("epoch"), $.nu64("credits"), $.nu64("prevCredits")]),
      $.offset($.u32(), -8),
      "epochCredits"
    ),
    $.struct([$.nu64("slot"), $.nu64("timestamp")], "lastTimestamp"),
  ]);
class Nd {
  constructor(t) {
    (this.nodePubkey = void 0),
      (this.authorizedWithdrawer = void 0),
      (this.commission = void 0),
      (this.rootSlot = void 0),
      (this.votes = void 0),
      (this.authorizedVoters = void 0),
      (this.priorVoters = void 0),
      (this.epochCredits = void 0),
      (this.lastTimestamp = void 0),
      (this.nodePubkey = t.nodePubkey),
      (this.authorizedWithdrawer = t.authorizedWithdrawer),
      (this.commission = t.commission),
      (this.rootSlot = t.rootSlot),
      (this.votes = t.votes),
      (this.authorizedVoters = t.authorizedVoters),
      (this.priorVoters = t.priorVoters),
      (this.epochCredits = t.epochCredits),
      (this.lastTimestamp = t.lastTimestamp);
  }
  static fromAccountData(t) {
    const r = r2.decode(qt(t), 4);
    let i = r.rootSlot;
    return (
      r.rootSlotValid || (i = null),
      new Nd({
        nodePubkey: new gt(r.nodePubkey),
        authorizedWithdrawer: new gt(r.authorizedWithdrawer),
        commission: r.commission,
        votes: r.votes,
        rootSlot: i,
        authorizedVoters: r.authorizedVoters.map(n2),
        priorVoters: i2(r.priorVoters),
        epochCredits: r.epochCredits,
        lastTimestamp: r.lastTimestamp,
      })
    );
  }
}
function n2({ authorizedVoter: n, epoch: t }) {
  return { epoch: t, authorizedVoter: new gt(n) };
}
function ep({
  authorizedPubkey: n,
  epochOfLastAuthorizedSwitch: t,
  targetEpoch: e,
}) {
  return {
    authorizedPubkey: new gt(n),
    epochOfLastAuthorizedSwitch: t,
    targetEpoch: e,
  };
}
function i2({ buf: n, idx: t, isEmpty: e }) {
  return e ? [] : [...n.slice(t + 1).map(ep), ...n.slice(0, t).map(ep)];
}
const rp = {
  http: {
    devnet: "http://api.devnet.solana.com",
    testnet: "http://api.testnet.solana.com",
    "mainnet-beta": "http://api.mainnet-beta.solana.com/",
  },
  https: {
    devnet: "https://api.devnet.solana.com",
    testnet: "https://api.testnet.solana.com",
    "mainnet-beta": "https://api.mainnet-beta.solana.com/",
  },
};
function s2(n, t) {
  const e = t === !1 ? "http" : "https";
  if (!n) return rp[e].devnet;
  const r = rp[e][n];
  if (!r) throw new Error(`Unknown ${e} cluster: ${n}`);
  return r;
}
async function o2(n, t, e, r) {
  let i, s;
  (e && Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) ||
  (e && Object.prototype.hasOwnProperty.call(e, "nonceValue"))
    ? ((i = e), (s = r))
    : (s = e);
  const o = s && {
      skipPreflight: s.skipPreflight,
      preflightCommitment: s.preflightCommitment || s.commitment,
      minContextSlot: s.minContextSlot,
    },
    a = await n.sendRawTransaction(t, o),
    c = s && s.commitment,
    h = (await (i ? n.confirmTransaction(i, c) : n.confirmTransaction(a, c)))
      .value;
  if (h.err)
    throw a != null
      ? new bc({
          action: o != null && o.skipPreflight ? "send" : "simulate",
          signature: a,
          transactionMessage: `Status: (${JSON.stringify(h)})`,
        })
      : new Error(`Raw transaction ${a} failed (${JSON.stringify(h)})`);
  return a;
}
const a2 = 1e9,
  fB = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Account: ZA,
        AddressLookupTableAccount: mh,
        AddressLookupTableInstruction: Wx,
        AddressLookupTableProgram: Rd,
        Authorized: Ky,
        BLOCKHASH_CACHE_TIMEOUT_MS: Ny,
        BPF_LOADER_DEPRECATED_PROGRAM_ID: YA,
        BPF_LOADER_PROGRAM_ID: yE,
        BpfLoader: mE,
        COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: Hn,
        ComputeBudgetInstruction: qx,
        ComputeBudgetProgram: Pd,
        Connection: Vx,
        Ed25519Program: Pl,
        Enum: JA,
        EpochSchedule: Py,
        FeeCalculatorLayout: By,
        Keypair: Do,
        LAMPORTS_PER_SOL: a2,
        LOOKUP_TABLE_INSTRUCTION_LAYOUTS: mi,
        Loader: io,
        Lockup: jc,
        MAX_SEED_LENGTH: ky,
        Message: xn,
        MessageAccountKeys: wc,
        MessageV0: no,
        NONCE_ACCOUNT_LENGTH: yh,
        NonceAccount: Il,
        PACKET_DATA_SIZE: os,
        PUBLIC_KEY_LENGTH: qn,
        PublicKey: gt,
        SIGNATURE_LENGTH_IN_BYTES: mc,
        SOLANA_SCHEMA: lc,
        STAKE_CONFIG_ID: Gy,
        STAKE_INSTRUCTION_LAYOUTS: Ye,
        SYSTEM_INSTRUCTION_LAYOUTS: we,
        SYSVAR_CLOCK_PUBKEY: Un,
        SYSVAR_EPOCH_SCHEDULE_PUBKEY: cE,
        SYSVAR_INSTRUCTIONS_PUBKEY: uE,
        SYSVAR_RECENT_BLOCKHASHES_PUBKEY: ku,
        SYSVAR_RENT_PUBKEY: La,
        SYSVAR_REWARDS_PUBKEY: lE,
        SYSVAR_SLOT_HASHES_PUBKEY: fE,
        SYSVAR_SLOT_HISTORY_PUBKEY: hE,
        SYSVAR_STAKE_HISTORY_PUBKEY: vu,
        Secp256k1Program: zo,
        SendTransactionError: bc,
        SolanaJSONRPCError: St,
        SolanaJSONRPCErrorCode: dE,
        StakeAuthorizationLayout: Zx,
        StakeInstruction: jx,
        StakeProgram: Cl,
        Struct: bd,
        SystemInstruction: pE,
        SystemProgram: $e,
        Transaction: he,
        TransactionExpiredBlockheightExceededError: Ad,
        TransactionExpiredNonceInvalidError: Co,
        TransactionExpiredTimeoutError: Ed,
        TransactionInstruction: ie,
        TransactionMessage: kd,
        TransactionStatus: Xn,
        VALIDATOR_INFO_KEY: Wy,
        VERSION_PREFIX_MASK: vl,
        VOTE_PROGRAM_ID: e2,
        ValidatorInfo: Cd,
        VersionedMessage: xd,
        VersionedTransaction: vd,
        VoteAccount: Nd,
        VoteAuthorizationLayout: Xx,
        VoteInit: Vy,
        VoteInstruction: Yx,
        VoteProgram: Ja,
        clusterApiUrl: s2,
        sendAndConfirmRawTransaction: o2,
        sendAndConfirmTransaction: gh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bi = new gt("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
  hB = new gt("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),
  Td = new gt("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
new gt("So11111111111111111111111111111111111111112");
new gt("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
const _d = (n) => {
  const t = n.decode.bind(n),
    e = n.encode.bind(n);
  return { decode: t, encode: e };
};
var ds = {},
  np;
function c2() {
  if (np) return ds;
  (np = 1), Object.defineProperty(ds, "__esModule", { value: !0 });
  function n(i) {
    {
      const s = Ie.from(i);
      s.reverse();
      const o = s.toString("hex");
      return o.length === 0 ? BigInt(0) : BigInt(`0x${o}`);
    }
  }
  ds.toBigIntLE = n;
  function t(i) {
    {
      const s = i.toString("hex");
      return s.length === 0 ? BigInt(0) : BigInt(`0x${s}`);
    }
  }
  ds.toBigIntBE = t;
  function e(i, s) {
    {
      const o = i.toString(16),
        a = Ie.from(o.padStart(s * 2, "0").slice(0, s * 2), "hex");
      return a.reverse(), a;
    }
  }
  ds.toBufferLE = e;
  function r(i, s) {
    {
      const o = i.toString(16);
      return Ie.from(o.padStart(s * 2, "0").slice(0, s * 2), "hex");
    }
  }
  return (ds.toBufferBE = r), ds;
}
var ip = c2();
const u2 = (n) => (t) => {
    const e = $.blob(n, t),
      { encode: r, decode: i } = _d(e),
      s = e;
    return (
      (s.decode = (o, a) => {
        const c = i(o, a);
        return ip.toBigIntLE(Ie.from(c));
      }),
      (s.encode = (o, a, c) => {
        const f = ip.toBufferLE(o, n);
        return r(f, a, c);
      }),
      s
    );
  },
  Ho = u2(8);
var l2 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Gf = Math.ceil,
  jr = Math.floor,
  Cr = "[BigNumber Error] ",
  sp = Cr + "Number primitive has more than 15 significant digits: ",
  cn = 1e14,
  Dt = 14,
  Kf = 9007199254740991,
  Vf = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Oi = 1e7,
  Je = 1e9;
function qy(n) {
  var t,
    e,
    r,
    i = (z.prototype = { constructor: z, toString: null, valueOf: null }),
    s = new z(1),
    o = 20,
    a = 4,
    c = -7,
    f = 21,
    h = -1e7,
    b = 1e7,
    S = !1,
    P = 1,
    M = 0,
    N = {
      prefix: "",
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ",",
      decimalSeparator: ".",
      fractionGroupSize: 0,
      fractionGroupSeparator: " ",
      suffix: "",
    },
    D = "0123456789abcdefghijklmnopqrstuvwxyz",
    q = !0;
  function z(R, x) {
    var B,
      F,
      v,
      y,
      u,
      l,
      g,
      k,
      I = this;
    if (!(I instanceof z)) return new z(R, x);
    if (x == null) {
      if (R && R._isBigNumber === !0) {
        (I.s = R.s),
          !R.c || R.e > b
            ? (I.c = I.e = null)
            : R.e < h
            ? (I.c = [(I.e = 0)])
            : ((I.e = R.e), (I.c = R.c.slice()));
        return;
      }
      if ((l = typeof R == "number") && R * 0 == 0) {
        if (((I.s = 1 / R < 0 ? ((R = -R), -1) : 1), R === ~~R)) {
          for (y = 0, u = R; u >= 10; u /= 10, y++);
          y > b ? (I.c = I.e = null) : ((I.e = y), (I.c = [R]));
          return;
        }
        k = String(R);
      } else {
        if (!l2.test((k = String(R)))) return r(I, k, l);
        I.s = k.charCodeAt(0) == 45 ? ((k = k.slice(1)), -1) : 1;
      }
      (y = k.indexOf(".")) > -1 && (k = k.replace(".", "")),
        (u = k.search(/e/i)) > 0
          ? (y < 0 && (y = u), (y += +k.slice(u + 1)), (k = k.substring(0, u)))
          : y < 0 && (y = k.length);
    } else {
      if ((Pe(x, 2, D.length, "Base"), x == 10 && q))
        return (I = new z(R)), X(I, o + I.e + 1, a);
      if (((k = String(R)), (l = typeof R == "number"))) {
        if (R * 0 != 0) return r(I, k, l, x);
        if (
          ((I.s = 1 / R < 0 ? ((k = k.slice(1)), -1) : 1),
          z.DEBUG && k.replace(/^0\.0*|\./, "").length > 15)
        )
          throw Error(sp + R);
      } else I.s = k.charCodeAt(0) === 45 ? ((k = k.slice(1)), -1) : 1;
      for (B = D.slice(0, x), y = u = 0, g = k.length; u < g; u++)
        if (B.indexOf((F = k.charAt(u))) < 0) {
          if (F == ".") {
            if (u > y) {
              y = g;
              continue;
            }
          } else if (
            !v &&
            ((k == k.toUpperCase() && (k = k.toLowerCase())) ||
              (k == k.toLowerCase() && (k = k.toUpperCase())))
          ) {
            (v = !0), (u = -1), (y = 0);
            continue;
          }
          return r(I, String(R), l, x);
        }
      (l = !1),
        (k = e(k, x, 10, I.s)),
        (y = k.indexOf(".")) > -1 ? (k = k.replace(".", "")) : (y = k.length);
    }
    for (u = 0; k.charCodeAt(u) === 48; u++);
    for (g = k.length; k.charCodeAt(--g) === 48; );
    if ((k = k.slice(u, ++g))) {
      if (((g -= u), l && z.DEBUG && g > 15 && (R > Kf || R !== jr(R))))
        throw Error(sp + I.s * R);
      if ((y = y - u - 1) > b) I.c = I.e = null;
      else if (y < h) I.c = [(I.e = 0)];
      else {
        if (
          ((I.e = y), (I.c = []), (u = (y + 1) % Dt), y < 0 && (u += Dt), u < g)
        ) {
          for (u && I.c.push(+k.slice(0, u)), g -= Dt; u < g; )
            I.c.push(+k.slice(u, (u += Dt)));
          u = Dt - (k = k.slice(u)).length;
        } else u -= g;
        for (; u--; k += "0");
        I.c.push(+k);
      }
    } else I.c = [(I.e = 0)];
  }
  (z.clone = qy),
    (z.ROUND_UP = 0),
    (z.ROUND_DOWN = 1),
    (z.ROUND_CEIL = 2),
    (z.ROUND_FLOOR = 3),
    (z.ROUND_HALF_UP = 4),
    (z.ROUND_HALF_DOWN = 5),
    (z.ROUND_HALF_EVEN = 6),
    (z.ROUND_HALF_CEIL = 7),
    (z.ROUND_HALF_FLOOR = 8),
    (z.EUCLID = 9),
    (z.config = z.set =
      function (R) {
        var x, B;
        if (R != null)
          if (typeof R == "object") {
            if (
              (R.hasOwnProperty((x = "DECIMAL_PLACES")) &&
                ((B = R[x]), Pe(B, 0, Je, x), (o = B)),
              R.hasOwnProperty((x = "ROUNDING_MODE")) &&
                ((B = R[x]), Pe(B, 0, 8, x), (a = B)),
              R.hasOwnProperty((x = "EXPONENTIAL_AT")) &&
                ((B = R[x]),
                B && B.pop
                  ? (Pe(B[0], -Je, 0, x),
                    Pe(B[1], 0, Je, x),
                    (c = B[0]),
                    (f = B[1]))
                  : (Pe(B, -Je, Je, x), (c = -(f = B < 0 ? -B : B)))),
              R.hasOwnProperty((x = "RANGE")))
            )
              if (((B = R[x]), B && B.pop))
                Pe(B[0], -Je, -1, x),
                  Pe(B[1], 1, Je, x),
                  (h = B[0]),
                  (b = B[1]);
              else if ((Pe(B, -Je, Je, x), B)) h = -(b = B < 0 ? -B : B);
              else throw Error(Cr + x + " cannot be zero: " + B);
            if (R.hasOwnProperty((x = "CRYPTO")))
              if (((B = R[x]), B === !!B))
                if (B)
                  if (
                    typeof crypto < "u" &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                  )
                    S = B;
                  else throw ((S = !B), Error(Cr + "crypto unavailable"));
                else S = B;
              else throw Error(Cr + x + " not true or false: " + B);
            if (
              (R.hasOwnProperty((x = "MODULO_MODE")) &&
                ((B = R[x]), Pe(B, 0, 9, x), (P = B)),
              R.hasOwnProperty((x = "POW_PRECISION")) &&
                ((B = R[x]), Pe(B, 0, Je, x), (M = B)),
              R.hasOwnProperty((x = "FORMAT")))
            )
              if (((B = R[x]), typeof B == "object")) N = B;
              else throw Error(Cr + x + " not an object: " + B);
            if (R.hasOwnProperty((x = "ALPHABET")))
              if (
                ((B = R[x]),
                typeof B == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(B))
              )
                (q = B.slice(0, 10) == "0123456789"), (D = B);
              else throw Error(Cr + x + " invalid: " + B);
          } else throw Error(Cr + "Object expected: " + R);
        return {
          DECIMAL_PLACES: o,
          ROUNDING_MODE: a,
          EXPONENTIAL_AT: [c, f],
          RANGE: [h, b],
          CRYPTO: S,
          MODULO_MODE: P,
          POW_PRECISION: M,
          FORMAT: N,
          ALPHABET: D,
        };
      }),
    (z.isBigNumber = function (R) {
      if (!R || R._isBigNumber !== !0) return !1;
      if (!z.DEBUG) return !0;
      var x,
        B,
        F = R.c,
        v = R.e,
        y = R.s;
      t: if ({}.toString.call(F) == "[object Array]") {
        if ((y === 1 || y === -1) && v >= -Je && v <= Je && v === jr(v)) {
          if (F[0] === 0) {
            if (v === 0 && F.length === 1) return !0;
            break t;
          }
          if (
            ((x = (v + 1) % Dt), x < 1 && (x += Dt), String(F[0]).length == x)
          ) {
            for (x = 0; x < F.length; x++)
              if (((B = F[x]), B < 0 || B >= cn || B !== jr(B))) break t;
            if (B !== 0) return !0;
          }
        }
      } else if (
        F === null &&
        v === null &&
        (y === null || y === 1 || y === -1)
      )
        return !0;
      throw Error(Cr + "Invalid BigNumber: " + R);
    }),
    (z.maximum = z.max =
      function () {
        return et(arguments, -1);
      }),
    (z.minimum = z.min =
      function () {
        return et(arguments, 1);
      }),
    (z.random = (function () {
      var R = 9007199254740992,
        x =
          (Math.random() * R) & 2097151
            ? function () {
                return jr(Math.random() * R);
              }
            : function () {
                return (
                  ((Math.random() * 1073741824) | 0) * 8388608 +
                  ((Math.random() * 8388608) | 0)
                );
              };
      return function (B) {
        var F,
          v,
          y,
          u,
          l,
          g = 0,
          k = [],
          I = new z(s);
        if ((B == null ? (B = o) : Pe(B, 0, Je), (u = Gf(B / Dt)), S))
          if (crypto.getRandomValues) {
            for (F = crypto.getRandomValues(new Uint32Array((u *= 2))); g < u; )
              (l = F[g] * 131072 + (F[g + 1] >>> 11)),
                l >= 9e15
                  ? ((v = crypto.getRandomValues(new Uint32Array(2))),
                    (F[g] = v[0]),
                    (F[g + 1] = v[1]))
                  : (k.push(l % 1e14), (g += 2));
            g = u / 2;
          } else if (crypto.randomBytes) {
            for (F = crypto.randomBytes((u *= 7)); g < u; )
              (l =
                (F[g] & 31) * 281474976710656 +
                F[g + 1] * 1099511627776 +
                F[g + 2] * 4294967296 +
                F[g + 3] * 16777216 +
                (F[g + 4] << 16) +
                (F[g + 5] << 8) +
                F[g + 6]),
                l >= 9e15
                  ? crypto.randomBytes(7).copy(F, g)
                  : (k.push(l % 1e14), (g += 7));
            g = u / 7;
          } else throw ((S = !1), Error(Cr + "crypto unavailable"));
        if (!S) for (; g < u; ) (l = x()), l < 9e15 && (k[g++] = l % 1e14);
        for (
          u = k[--g],
            B %= Dt,
            u && B && ((l = Vf[Dt - B]), (k[g] = jr(u / l) * l));
          k[g] === 0;
          k.pop(), g--
        );
        if (g < 0) k = [(y = 0)];
        else {
          for (y = -1; k[0] === 0; k.splice(0, 1), y -= Dt);
          for (g = 1, l = k[0]; l >= 10; l /= 10, g++);
          g < Dt && (y -= Dt - g);
        }
        return (I.e = y), (I.c = k), I;
      };
    })()),
    (z.sum = function () {
      for (var R = 1, x = arguments, B = new z(x[0]); R < x.length; )
        B = B.plus(x[R++]);
      return B;
    }),
    (e = (function () {
      var R = "0123456789";
      function x(B, F, v, y) {
        for (var u, l = [0], g, k = 0, I = B.length; k < I; ) {
          for (g = l.length; g--; l[g] *= F);
          for (l[0] += y.indexOf(B.charAt(k++)), u = 0; u < l.length; u++)
            l[u] > v - 1 &&
              (l[u + 1] == null && (l[u + 1] = 0),
              (l[u + 1] += (l[u] / v) | 0),
              (l[u] %= v));
        }
        return l.reverse();
      }
      return function (B, F, v, y, u) {
        var l,
          g,
          k,
          I,
          _,
          G,
          O,
          d,
          p = B.indexOf("."),
          T = o,
          H = a;
        for (
          p >= 0 &&
            ((I = M),
            (M = 0),
            (B = B.replace(".", "")),
            (d = new z(F)),
            (G = d.pow(B.length - p)),
            (M = I),
            (d.c = x(Yn(Qr(G.c), G.e, "0"), 10, v, R)),
            (d.e = d.c.length)),
            O = x(B, F, v, u ? ((l = D), R) : ((l = R), D)),
            k = I = O.length;
          O[--I] == 0;
          O.pop()
        );
        if (!O[0]) return l.charAt(0);
        if (
          (p < 0
            ? --k
            : ((G.c = O),
              (G.e = k),
              (G.s = y),
              (G = t(G, d, T, H, v)),
              (O = G.c),
              (_ = G.r),
              (k = G.e)),
          (g = k + T + 1),
          (p = O[g]),
          (I = v / 2),
          (_ = _ || g < 0 || O[g + 1] != null),
          (_ =
            H < 4
              ? (p != null || _) && (H == 0 || H == (G.s < 0 ? 3 : 2))
              : p > I ||
                (p == I &&
                  (H == 4 ||
                    _ ||
                    (H == 6 && O[g - 1] & 1) ||
                    H == (G.s < 0 ? 8 : 7)))),
          g < 1 || !O[0])
        )
          B = _ ? Yn(l.charAt(1), -T, l.charAt(0)) : l.charAt(0);
        else {
          if (((O.length = g), _))
            for (--v; ++O[--g] > v; )
              (O[g] = 0), g || (++k, (O = [1].concat(O)));
          for (I = O.length; !O[--I]; );
          for (p = 0, B = ""; p <= I; B += l.charAt(O[p++]));
          B = Yn(B, k, l.charAt(0));
        }
        return B;
      };
    })()),
    (t = (function () {
      function R(F, v, y) {
        var u,
          l,
          g,
          k,
          I = 0,
          _ = F.length,
          G = v % Oi,
          O = (v / Oi) | 0;
        for (F = F.slice(); _--; )
          (g = F[_] % Oi),
            (k = (F[_] / Oi) | 0),
            (u = O * g + k * G),
            (l = G * g + (u % Oi) * Oi + I),
            (I = ((l / y) | 0) + ((u / Oi) | 0) + O * k),
            (F[_] = l % y);
        return I && (F = [I].concat(F)), F;
      }
      function x(F, v, y, u) {
        var l, g;
        if (y != u) g = y > u ? 1 : -1;
        else
          for (l = g = 0; l < y; l++)
            if (F[l] != v[l]) {
              g = F[l] > v[l] ? 1 : -1;
              break;
            }
        return g;
      }
      function B(F, v, y, u) {
        for (var l = 0; y--; )
          (F[y] -= l), (l = F[y] < v[y] ? 1 : 0), (F[y] = l * u + F[y] - v[y]);
        for (; !F[0] && F.length > 1; F.splice(0, 1));
      }
      return function (F, v, y, u, l) {
        var g,
          k,
          I,
          _,
          G,
          O,
          d,
          p,
          T,
          H,
          J,
          at,
          yt,
          wt,
          Ut,
          Rt,
          zt,
          Zt = F.s == v.s ? 1 : -1,
          _t = F.c,
          It = v.c;
        if (!_t || !_t[0] || !It || !It[0])
          return new z(
            !F.s || !v.s || (_t ? It && _t[0] == It[0] : !It)
              ? NaN
              : (_t && _t[0] == 0) || !It
              ? Zt * 0
              : Zt / 0
          );
        for (
          p = new z(Zt),
            T = p.c = [],
            k = F.e - v.e,
            Zt = y + k + 1,
            l ||
              ((l = cn),
              (k = Zr(F.e / Dt) - Zr(v.e / Dt)),
              (Zt = (Zt / Dt) | 0)),
            I = 0;
          It[I] == (_t[I] || 0);
          I++
        );
        if ((It[I] > (_t[I] || 0) && k--, Zt < 0)) T.push(1), (_ = !0);
        else {
          for (
            wt = _t.length,
              Rt = It.length,
              I = 0,
              Zt += 2,
              G = jr(l / (It[0] + 1)),
              G > 1 &&
                ((It = R(It, G, l)),
                (_t = R(_t, G, l)),
                (Rt = It.length),
                (wt = _t.length)),
              yt = Rt,
              H = _t.slice(0, Rt),
              J = H.length;
            J < Rt;
            H[J++] = 0
          );
          (zt = It.slice()),
            (zt = [0].concat(zt)),
            (Ut = It[0]),
            It[1] >= l / 2 && Ut++;
          do {
            if (((G = 0), (g = x(It, H, Rt, J)), g < 0)) {
              if (
                ((at = H[0]),
                Rt != J && (at = at * l + (H[1] || 0)),
                (G = jr(at / Ut)),
                G > 1)
              )
                for (
                  G >= l && (G = l - 1),
                    O = R(It, G, l),
                    d = O.length,
                    J = H.length;
                  x(O, H, d, J) == 1;

                )
                  G--, B(O, Rt < d ? zt : It, d, l), (d = O.length), (g = 1);
              else G == 0 && (g = G = 1), (O = It.slice()), (d = O.length);
              if (
                (d < J && (O = [0].concat(O)),
                B(H, O, J, l),
                (J = H.length),
                g == -1)
              )
                for (; x(It, H, Rt, J) < 1; )
                  G++, B(H, Rt < J ? zt : It, J, l), (J = H.length);
            } else g === 0 && (G++, (H = [0]));
            (T[I++] = G),
              H[0] ? (H[J++] = _t[yt] || 0) : ((H = [_t[yt]]), (J = 1));
          } while ((yt++ < wt || H[0] != null) && Zt--);
          (_ = H[0] != null), T[0] || T.splice(0, 1);
        }
        if (l == cn) {
          for (I = 1, Zt = T[0]; Zt >= 10; Zt /= 10, I++);
          X(p, y + (p.e = I + k * Dt - 1) + 1, u, _);
        } else (p.e = k), (p.r = +_);
        return p;
      };
    })());
  function V(R, x, B, F) {
    var v, y, u, l, g;
    if ((B == null ? (B = a) : Pe(B, 0, 8), !R.c)) return R.toString();
    if (((v = R.c[0]), (u = R.e), x == null))
      (g = Qr(R.c)),
        (g =
          F == 1 || (F == 2 && (u <= c || u >= f)) ? hu(g, u) : Yn(g, u, "0"));
    else if (
      ((R = X(new z(R), x, B)),
      (y = R.e),
      (g = Qr(R.c)),
      (l = g.length),
      F == 1 || (F == 2 && (x <= y || y <= c)))
    ) {
      for (; l < x; g += "0", l++);
      g = hu(g, y);
    } else if (
      ((x -= u + (F === 2 && y > u)), (g = Yn(g, y, "0")), y + 1 > l)
    ) {
      if (--x > 0) for (g += "."; x--; g += "0");
    } else if (((x += y - l), x > 0))
      for (y + 1 == l && (g += "."); x--; g += "0");
    return R.s < 0 && v ? "-" + g : g;
  }
  function et(R, x) {
    for (var B, F, v = 1, y = new z(R[0]); v < R.length; v++)
      (F = new z(R[v])),
        (!F.s || (B = ps(y, F)) === x || (B === 0 && y.s === x)) && (y = F);
    return y;
  }
  function it(R, x, B) {
    for (var F = 1, v = x.length; !x[--v]; x.pop());
    for (v = x[0]; v >= 10; v /= 10, F++);
    return (
      (B = F + B * Dt - 1) > b
        ? (R.c = R.e = null)
        : B < h
        ? (R.c = [(R.e = 0)])
        : ((R.e = B), (R.c = x)),
      R
    );
  }
  r = (function () {
    var R = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      x = /^([^.]+)\.$/,
      B = /^\.([^.]+)$/,
      F = /^-?(Infinity|NaN)$/,
      v = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (y, u, l, g) {
      var k,
        I = l ? u : u.replace(v, "");
      if (F.test(I)) y.s = isNaN(I) ? null : I < 0 ? -1 : 1;
      else {
        if (
          !l &&
          ((I = I.replace(R, function (_, G, O) {
            return (
              (k = (O = O.toLowerCase()) == "x" ? 16 : O == "b" ? 2 : 8),
              !g || g == k ? G : _
            );
          })),
          g && ((k = g), (I = I.replace(x, "$1").replace(B, "0.$1"))),
          u != I)
        )
          return new z(I, k);
        if (z.DEBUG)
          throw Error(Cr + "Not a" + (g ? " base " + g : "") + " number: " + u);
        y.s = null;
      }
      y.c = y.e = null;
    };
  })();
  function X(R, x, B, F) {
    var v,
      y,
      u,
      l,
      g,
      k,
      I,
      _ = R.c,
      G = Vf;
    if (_) {
      t: {
        for (v = 1, l = _[0]; l >= 10; l /= 10, v++);
        if (((y = x - v), y < 0))
          (y += Dt),
            (u = x),
            (g = _[(k = 0)]),
            (I = jr((g / G[v - u - 1]) % 10));
        else if (((k = Gf((y + 1) / Dt)), k >= _.length))
          if (F) {
            for (; _.length <= k; _.push(0));
            (g = I = 0), (v = 1), (y %= Dt), (u = y - Dt + 1);
          } else break t;
        else {
          for (g = l = _[k], v = 1; l >= 10; l /= 10, v++);
          (y %= Dt),
            (u = y - Dt + v),
            (I = u < 0 ? 0 : jr((g / G[v - u - 1]) % 10));
        }
        if (
          ((F =
            F || x < 0 || _[k + 1] != null || (u < 0 ? g : g % G[v - u - 1])),
          (F =
            B < 4
              ? (I || F) && (B == 0 || B == (R.s < 0 ? 3 : 2))
              : I > 5 ||
                (I == 5 &&
                  (B == 4 ||
                    F ||
                    (B == 6 &&
                      (y > 0 ? (u > 0 ? g / G[v - u] : 0) : _[k - 1]) % 10 &
                        1) ||
                    B == (R.s < 0 ? 8 : 7)))),
          x < 1 || !_[0])
        )
          return (
            (_.length = 0),
            F
              ? ((x -= R.e + 1),
                (_[0] = G[(Dt - (x % Dt)) % Dt]),
                (R.e = -x || 0))
              : (_[0] = R.e = 0),
            R
          );
        if (
          (y == 0
            ? ((_.length = k), (l = 1), k--)
            : ((_.length = k + 1),
              (l = G[Dt - y]),
              (_[k] = u > 0 ? jr((g / G[v - u]) % G[u]) * l : 0)),
          F)
        )
          for (;;)
            if (k == 0) {
              for (y = 1, u = _[0]; u >= 10; u /= 10, y++);
              for (u = _[0] += l, l = 1; u >= 10; u /= 10, l++);
              y != l && (R.e++, _[0] == cn && (_[0] = 1));
              break;
            } else {
              if (((_[k] += l), _[k] != cn)) break;
              (_[k--] = 0), (l = 1);
            }
        for (y = _.length; _[--y] === 0; _.pop());
      }
      R.e > b ? (R.c = R.e = null) : R.e < h && (R.c = [(R.e = 0)]);
    }
    return R;
  }
  function nt(R) {
    var x,
      B = R.e;
    return B === null
      ? R.toString()
      : ((x = Qr(R.c)),
        (x = B <= c || B >= f ? hu(x, B) : Yn(x, B, "0")),
        R.s < 0 ? "-" + x : x);
  }
  return (
    (i.absoluteValue = i.abs =
      function () {
        var R = new z(this);
        return R.s < 0 && (R.s = 1), R;
      }),
    (i.comparedTo = function (R, x) {
      return ps(this, new z(R, x));
    }),
    (i.decimalPlaces = i.dp =
      function (R, x) {
        var B,
          F,
          v,
          y = this;
        if (R != null)
          return (
            Pe(R, 0, Je),
            x == null ? (x = a) : Pe(x, 0, 8),
            X(new z(y), R + y.e + 1, x)
          );
        if (!(B = y.c)) return null;
        if (((F = ((v = B.length - 1) - Zr(this.e / Dt)) * Dt), (v = B[v])))
          for (; v % 10 == 0; v /= 10, F--);
        return F < 0 && (F = 0), F;
      }),
    (i.dividedBy = i.div =
      function (R, x) {
        return t(this, new z(R, x), o, a);
      }),
    (i.dividedToIntegerBy = i.idiv =
      function (R, x) {
        return t(this, new z(R, x), 0, 1);
      }),
    (i.exponentiatedBy = i.pow =
      function (R, x) {
        var B,
          F,
          v,
          y,
          u,
          l,
          g,
          k,
          I,
          _ = this;
        if (((R = new z(R)), R.c && !R.isInteger()))
          throw Error(Cr + "Exponent not an integer: " + nt(R));
        if (
          (x != null && (x = new z(x)),
          (l = R.e > 14),
          !_.c ||
            !_.c[0] ||
            (_.c[0] == 1 && !_.e && _.c.length == 1) ||
            !R.c ||
            !R.c[0])
        )
          return (
            (I = new z(Math.pow(+nt(_), l ? R.s * (2 - fu(R)) : +nt(R)))),
            x ? I.mod(x) : I
          );
        if (((g = R.s < 0), x)) {
          if (x.c ? !x.c[0] : !x.s) return new z(NaN);
          (F = !g && _.isInteger() && x.isInteger()), F && (_ = _.mod(x));
        } else {
          if (
            R.e > 9 &&
            (_.e > 0 ||
              _.e < -1 ||
              (_.e == 0
                ? _.c[0] > 1 || (l && _.c[1] >= 24e7)
                : _.c[0] < 8e13 || (l && _.c[0] <= 9999975e7)))
          )
            return (
              (y = _.s < 0 && fu(R) ? -0 : 0),
              _.e > -1 && (y = 1 / y),
              new z(g ? 1 / y : y)
            );
          M && (y = Gf(M / Dt + 2));
        }
        for (
          l
            ? ((B = new z(0.5)), g && (R.s = 1), (k = fu(R)))
            : ((v = Math.abs(+nt(R))), (k = v % 2)),
            I = new z(s);
          ;

        ) {
          if (k) {
            if (((I = I.times(_)), !I.c)) break;
            y ? I.c.length > y && (I.c.length = y) : F && (I = I.mod(x));
          }
          if (v) {
            if (((v = jr(v / 2)), v === 0)) break;
            k = v % 2;
          } else if (((R = R.times(B)), X(R, R.e + 1, 1), R.e > 14)) k = fu(R);
          else {
            if (((v = +nt(R)), v === 0)) break;
            k = v % 2;
          }
          (_ = _.times(_)),
            y ? _.c && _.c.length > y && (_.c.length = y) : F && (_ = _.mod(x));
        }
        return F
          ? I
          : (g && (I = s.div(I)), x ? I.mod(x) : y ? X(I, M, a, u) : I);
      }),
    (i.integerValue = function (R) {
      var x = new z(this);
      return R == null ? (R = a) : Pe(R, 0, 8), X(x, x.e + 1, R);
    }),
    (i.isEqualTo = i.eq =
      function (R, x) {
        return ps(this, new z(R, x)) === 0;
      }),
    (i.isFinite = function () {
      return !!this.c;
    }),
    (i.isGreaterThan = i.gt =
      function (R, x) {
        return ps(this, new z(R, x)) > 0;
      }),
    (i.isGreaterThanOrEqualTo = i.gte =
      function (R, x) {
        return (x = ps(this, new z(R, x))) === 1 || x === 0;
      }),
    (i.isInteger = function () {
      return !!this.c && Zr(this.e / Dt) > this.c.length - 2;
    }),
    (i.isLessThan = i.lt =
      function (R, x) {
        return ps(this, new z(R, x)) < 0;
      }),
    (i.isLessThanOrEqualTo = i.lte =
      function (R, x) {
        return (x = ps(this, new z(R, x))) === -1 || x === 0;
      }),
    (i.isNaN = function () {
      return !this.s;
    }),
    (i.isNegative = function () {
      return this.s < 0;
    }),
    (i.isPositive = function () {
      return this.s > 0;
    }),
    (i.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (i.minus = function (R, x) {
      var B,
        F,
        v,
        y,
        u = this,
        l = u.s;
      if (((R = new z(R, x)), (x = R.s), !l || !x)) return new z(NaN);
      if (l != x) return (R.s = -x), u.plus(R);
      var g = u.e / Dt,
        k = R.e / Dt,
        I = u.c,
        _ = R.c;
      if (!g || !k) {
        if (!I || !_) return I ? ((R.s = -x), R) : new z(_ ? u : NaN);
        if (!I[0] || !_[0])
          return _[0] ? ((R.s = -x), R) : new z(I[0] ? u : a == 3 ? -0 : 0);
      }
      if (((g = Zr(g)), (k = Zr(k)), (I = I.slice()), (l = g - k))) {
        for (
          (y = l < 0) ? ((l = -l), (v = I)) : ((k = g), (v = _)),
            v.reverse(),
            x = l;
          x--;
          v.push(0)
        );
        v.reverse();
      } else
        for (
          F = (y = (l = I.length) < (x = _.length)) ? l : x, l = x = 0;
          x < F;
          x++
        )
          if (I[x] != _[x]) {
            y = I[x] < _[x];
            break;
          }
      if (
        (y && ((v = I), (I = _), (_ = v), (R.s = -R.s)),
        (x = (F = _.length) - (B = I.length)),
        x > 0)
      )
        for (; x--; I[B++] = 0);
      for (x = cn - 1; F > l; ) {
        if (I[--F] < _[F]) {
          for (B = F; B && !I[--B]; I[B] = x);
          --I[B], (I[F] += cn);
        }
        I[F] -= _[F];
      }
      for (; I[0] == 0; I.splice(0, 1), --k);
      return I[0]
        ? it(R, I, k)
        : ((R.s = a == 3 ? -1 : 1), (R.c = [(R.e = 0)]), R);
    }),
    (i.modulo = i.mod =
      function (R, x) {
        var B,
          F,
          v = this;
        return (
          (R = new z(R, x)),
          !v.c || !R.s || (R.c && !R.c[0])
            ? new z(NaN)
            : !R.c || (v.c && !v.c[0])
            ? new z(v)
            : (P == 9
                ? ((F = R.s),
                  (R.s = 1),
                  (B = t(v, R, 0, 3)),
                  (R.s = F),
                  (B.s *= F))
                : (B = t(v, R, 0, P)),
              (R = v.minus(B.times(R))),
              !R.c[0] && P == 1 && (R.s = v.s),
              R)
        );
      }),
    (i.multipliedBy = i.times =
      function (R, x) {
        var B,
          F,
          v,
          y,
          u,
          l,
          g,
          k,
          I,
          _,
          G,
          O,
          d,
          p,
          T,
          H = this,
          J = H.c,
          at = (R = new z(R, x)).c;
        if (!J || !at || !J[0] || !at[0])
          return (
            !H.s || !R.s || (J && !J[0] && !at) || (at && !at[0] && !J)
              ? (R.c = R.e = R.s = null)
              : ((R.s *= H.s),
                !J || !at ? (R.c = R.e = null) : ((R.c = [0]), (R.e = 0))),
            R
          );
        for (
          F = Zr(H.e / Dt) + Zr(R.e / Dt),
            R.s *= H.s,
            g = J.length,
            _ = at.length,
            g < _ && ((d = J), (J = at), (at = d), (v = g), (g = _), (_ = v)),
            v = g + _,
            d = [];
          v--;
          d.push(0)
        );
        for (p = cn, T = Oi, v = _; --v >= 0; ) {
          for (
            B = 0, G = at[v] % T, O = (at[v] / T) | 0, u = g, y = v + u;
            y > v;

          )
            (k = J[--u] % T),
              (I = (J[u] / T) | 0),
              (l = O * k + I * G),
              (k = G * k + (l % T) * T + d[y] + B),
              (B = ((k / p) | 0) + ((l / T) | 0) + O * I),
              (d[y--] = k % p);
          d[y] = B;
        }
        return B ? ++F : d.splice(0, 1), it(R, d, F);
      }),
    (i.negated = function () {
      var R = new z(this);
      return (R.s = -R.s || null), R;
    }),
    (i.plus = function (R, x) {
      var B,
        F = this,
        v = F.s;
      if (((R = new z(R, x)), (x = R.s), !v || !x)) return new z(NaN);
      if (v != x) return (R.s = -x), F.minus(R);
      var y = F.e / Dt,
        u = R.e / Dt,
        l = F.c,
        g = R.c;
      if (!y || !u) {
        if (!l || !g) return new z(v / 0);
        if (!l[0] || !g[0]) return g[0] ? R : new z(l[0] ? F : v * 0);
      }
      if (((y = Zr(y)), (u = Zr(u)), (l = l.slice()), (v = y - u))) {
        for (
          v > 0 ? ((u = y), (B = g)) : ((v = -v), (B = l)), B.reverse();
          v--;
          B.push(0)
        );
        B.reverse();
      }
      for (
        v = l.length,
          x = g.length,
          v - x < 0 && ((B = g), (g = l), (l = B), (x = v)),
          v = 0;
        x;

      )
        (v = ((l[--x] = l[x] + g[x] + v) / cn) | 0),
          (l[x] = cn === l[x] ? 0 : l[x] % cn);
      return v && ((l = [v].concat(l)), ++u), it(R, l, u);
    }),
    (i.precision = i.sd =
      function (R, x) {
        var B,
          F,
          v,
          y = this;
        if (R != null && R !== !!R)
          return (
            Pe(R, 1, Je), x == null ? (x = a) : Pe(x, 0, 8), X(new z(y), R, x)
          );
        if (!(B = y.c)) return null;
        if (((v = B.length - 1), (F = v * Dt + 1), (v = B[v]))) {
          for (; v % 10 == 0; v /= 10, F--);
          for (v = B[0]; v >= 10; v /= 10, F++);
        }
        return R && y.e + 1 > F && (F = y.e + 1), F;
      }),
    (i.shiftedBy = function (R) {
      return Pe(R, -Kf, Kf), this.times("1e" + R);
    }),
    (i.squareRoot = i.sqrt =
      function () {
        var R,
          x,
          B,
          F,
          v,
          y = this,
          u = y.c,
          l = y.s,
          g = y.e,
          k = o + 4,
          I = new z("0.5");
        if (l !== 1 || !u || !u[0])
          return new z(!l || (l < 0 && (!u || u[0])) ? NaN : u ? y : 1 / 0);
        if (
          ((l = Math.sqrt(+nt(y))),
          l == 0 || l == 1 / 0
            ? ((x = Qr(u)),
              (x.length + g) % 2 == 0 && (x += "0"),
              (l = Math.sqrt(+x)),
              (g = Zr((g + 1) / 2) - (g < 0 || g % 2)),
              l == 1 / 0
                ? (x = "5e" + g)
                : ((x = l.toExponential()),
                  (x = x.slice(0, x.indexOf("e") + 1) + g)),
              (B = new z(x)))
            : (B = new z(l + "")),
          B.c[0])
        ) {
          for (g = B.e, l = g + k, l < 3 && (l = 0); ; )
            if (
              ((v = B),
              (B = I.times(v.plus(t(y, v, k, 1)))),
              Qr(v.c).slice(0, l) === (x = Qr(B.c)).slice(0, l))
            )
              if (
                (B.e < g && --l,
                (x = x.slice(l - 3, l + 1)),
                x == "9999" || (!F && x == "4999"))
              ) {
                if (!F && (X(v, v.e + o + 2, 0), v.times(v).eq(y))) {
                  B = v;
                  break;
                }
                (k += 4), (l += 4), (F = 1);
              } else {
                (!+x || (!+x.slice(1) && x.charAt(0) == "5")) &&
                  (X(B, B.e + o + 2, 1), (R = !B.times(B).eq(y)));
                break;
              }
        }
        return X(B, B.e + o + 1, a, R);
      }),
    (i.toExponential = function (R, x) {
      return R != null && (Pe(R, 0, Je), R++), V(this, R, x, 1);
    }),
    (i.toFixed = function (R, x) {
      return R != null && (Pe(R, 0, Je), (R = R + this.e + 1)), V(this, R, x);
    }),
    (i.toFormat = function (R, x, B) {
      var F,
        v = this;
      if (B == null)
        R != null && x && typeof x == "object"
          ? ((B = x), (x = null))
          : R && typeof R == "object"
          ? ((B = R), (R = x = null))
          : (B = N);
      else if (typeof B != "object")
        throw Error(Cr + "Argument not an object: " + B);
      if (((F = v.toFixed(R, x)), v.c)) {
        var y,
          u = F.split("."),
          l = +B.groupSize,
          g = +B.secondaryGroupSize,
          k = B.groupSeparator || "",
          I = u[0],
          _ = u[1],
          G = v.s < 0,
          O = G ? I.slice(1) : I,
          d = O.length;
        if ((g && ((y = l), (l = g), (g = y), (d -= y)), l > 0 && d > 0)) {
          for (y = d % l || l, I = O.substr(0, y); y < d; y += l)
            I += k + O.substr(y, l);
          g > 0 && (I += k + O.slice(y)), G && (I = "-" + I);
        }
        F = _
          ? I +
            (B.decimalSeparator || "") +
            ((g = +B.fractionGroupSize)
              ? _.replace(
                  new RegExp("\\d{" + g + "}\\B", "g"),
                  "$&" + (B.fractionGroupSeparator || "")
                )
              : _)
          : I;
      }
      return (B.prefix || "") + F + (B.suffix || "");
    }),
    (i.toFraction = function (R) {
      var x,
        B,
        F,
        v,
        y,
        u,
        l,
        g,
        k,
        I,
        _,
        G,
        O = this,
        d = O.c;
      if (
        R != null &&
        ((l = new z(R)), (!l.isInteger() && (l.c || l.s !== 1)) || l.lt(s))
      )
        throw Error(
          Cr +
            "Argument " +
            (l.isInteger() ? "out of range: " : "not an integer: ") +
            nt(l)
        );
      if (!d) return new z(O);
      for (
        x = new z(s),
          k = B = new z(s),
          F = g = new z(s),
          G = Qr(d),
          y = x.e = G.length - O.e - 1,
          x.c[0] = Vf[(u = y % Dt) < 0 ? Dt + u : u],
          R = !R || l.comparedTo(x) > 0 ? (y > 0 ? x : k) : l,
          u = b,
          b = 1 / 0,
          l = new z(G),
          g.c[0] = 0;
        (I = t(l, x, 0, 1)), (v = B.plus(I.times(F))), v.comparedTo(R) != 1;

      )
        (B = F),
          (F = v),
          (k = g.plus(I.times((v = k)))),
          (g = v),
          (x = l.minus(I.times((v = x)))),
          (l = v);
      return (
        (v = t(R.minus(B), F, 0, 1)),
        (g = g.plus(v.times(k))),
        (B = B.plus(v.times(F))),
        (g.s = k.s = O.s),
        (y = y * 2),
        (_ =
          t(k, F, y, a)
            .minus(O)
            .abs()
            .comparedTo(t(g, B, y, a).minus(O).abs()) < 1
            ? [k, F]
            : [g, B]),
        (b = u),
        _
      );
    }),
    (i.toNumber = function () {
      return +nt(this);
    }),
    (i.toPrecision = function (R, x) {
      return R != null && Pe(R, 1, Je), V(this, R, x, 2);
    }),
    (i.toString = function (R) {
      var x,
        B = this,
        F = B.s,
        v = B.e;
      return (
        v === null
          ? F
            ? ((x = "Infinity"), F < 0 && (x = "-" + x))
            : (x = "NaN")
          : (R == null
              ? (x = v <= c || v >= f ? hu(Qr(B.c), v) : Yn(Qr(B.c), v, "0"))
              : R === 10 && q
              ? ((B = X(new z(B), o + v + 1, a)), (x = Yn(Qr(B.c), B.e, "0")))
              : (Pe(R, 2, D.length, "Base"),
                (x = e(Yn(Qr(B.c), v, "0"), 10, R, F, !0))),
            F < 0 && B.c[0] && (x = "-" + x)),
        x
      );
    }),
    (i.valueOf = i.toJSON =
      function () {
        return nt(this);
      }),
    (i._isBigNumber = !0),
    (i[Symbol.toStringTag] = "BigNumber"),
    (i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf),
    n != null && z.set(n),
    z
  );
}
function Zr(n) {
  var t = n | 0;
  return n > 0 || n === t ? t : t - 1;
}
function Qr(n) {
  for (var t, e, r = 1, i = n.length, s = n[0] + ""; r < i; ) {
    for (t = n[r++] + "", e = Dt - t.length; e--; t = "0" + t);
    s += t;
  }
  for (i = s.length; s.charCodeAt(--i) === 48; );
  return s.slice(0, i + 1 || 1);
}
function ps(n, t) {
  var e,
    r,
    i = n.c,
    s = t.c,
    o = n.s,
    a = t.s,
    c = n.e,
    f = t.e;
  if (!o || !a) return null;
  if (((e = i && !i[0]), (r = s && !s[0]), e || r)) return e ? (r ? 0 : -a) : o;
  if (o != a) return o;
  if (((e = o < 0), (r = c == f), !i || !s)) return r ? 0 : !i ^ e ? 1 : -1;
  if (!r) return (c > f) ^ e ? 1 : -1;
  for (a = (c = i.length) < (f = s.length) ? c : f, o = 0; o < a; o++)
    if (i[o] != s[o]) return (i[o] > s[o]) ^ e ? 1 : -1;
  return c == f ? 0 : (c > f) ^ e ? 1 : -1;
}
function Pe(n, t, e, r) {
  if (n < t || n > e || n !== jr(n))
    throw Error(
      Cr +
        (r || "Argument") +
        (typeof n == "number"
          ? n < t || n > e
            ? " out of range: "
            : " not an integer: "
          : " not a primitive number: ") +
        String(n)
    );
}
function fu(n) {
  var t = n.c.length - 1;
  return Zr(n.e / Dt) == t && n.c[t] % 2 != 0;
}
function hu(n, t) {
  return (
    (n.length > 1 ? n.charAt(0) + "." + n.slice(1) : n) +
    (t < 0 ? "e" : "e+") +
    t
  );
}
function Yn(n, t, e) {
  var r, i;
  if (t < 0) {
    for (i = e + "."; ++t; i += e);
    n = i + n;
  } else if (((r = n.length), ++t > r)) {
    for (i = e, t -= r; --t; i += e);
    n += i;
  } else t < r && (n = n.slice(0, t) + "." + n.slice(t));
  return n;
}
qy();
const $y = (n) => {
    const t = $.u8(n),
      { encode: e, decode: r } = _d(t),
      i = t;
    return (
      (i.decode = (s, o) => !!r(s, o)),
      (i.encode = (s, o, a) => {
        const c = Number(s);
        return e(c, o, a);
      }),
      i
    );
  },
  nr = (n) => {
    const t = $.blob(32, n),
      { encode: e, decode: r } = _d(t),
      i = t;
    return (
      (i.decode = (s, o) => {
        const a = r(s, o);
        return new gt(a);
      }),
      (i.encode = (s, o, a) => {
        const c = s.toBuffer();
        return e(c, o, a);
      }),
      i
    );
  };
class ja extends Error {
  constructor(t) {
    super(t);
  }
}
class Qy extends ja {
  constructor() {
    super(...arguments), (this.name = "TokenAccountNotFoundError");
  }
}
class f2 extends ja {
  constructor() {
    super(...arguments), (this.name = "TokenInvalidAccountError");
  }
}
class Jy extends ja {
  constructor() {
    super(...arguments), (this.name = "TokenInvalidAccountOwnerError");
  }
}
class fc extends ja {
  constructor() {
    super(...arguments), (this.name = "TokenInvalidAccountSizeError");
  }
}
class h2 extends ja {
  constructor() {
    super(...arguments), (this.name = "TokenInvalidMintError");
  }
}
class d2 extends ja {
  constructor() {
    super(...arguments), (this.name = "TokenOwnerOffCurveError");
  }
}
var Wu;
(function (n) {
  (n[(n.InitializeMint = 0)] = "InitializeMint"),
    (n[(n.InitializeAccount = 1)] = "InitializeAccount"),
    (n[(n.InitializeMultisig = 2)] = "InitializeMultisig"),
    (n[(n.Transfer = 3)] = "Transfer"),
    (n[(n.Approve = 4)] = "Approve"),
    (n[(n.Revoke = 5)] = "Revoke"),
    (n[(n.SetAuthority = 6)] = "SetAuthority"),
    (n[(n.MintTo = 7)] = "MintTo"),
    (n[(n.Burn = 8)] = "Burn"),
    (n[(n.CloseAccount = 9)] = "CloseAccount"),
    (n[(n.FreezeAccount = 10)] = "FreezeAccount"),
    (n[(n.ThawAccount = 11)] = "ThawAccount"),
    (n[(n.TransferChecked = 12)] = "TransferChecked"),
    (n[(n.ApproveChecked = 13)] = "ApproveChecked"),
    (n[(n.MintToChecked = 14)] = "MintToChecked"),
    (n[(n.BurnChecked = 15)] = "BurnChecked"),
    (n[(n.InitializeAccount2 = 16)] = "InitializeAccount2"),
    (n[(n.SyncNative = 17)] = "SyncNative"),
    (n[(n.InitializeAccount3 = 18)] = "InitializeAccount3"),
    (n[(n.InitializeMultisig2 = 19)] = "InitializeMultisig2"),
    (n[(n.InitializeMint2 = 20)] = "InitializeMint2"),
    (n[(n.GetAccountDataSize = 21)] = "GetAccountDataSize"),
    (n[(n.InitializeImmutableOwner = 22)] = "InitializeImmutableOwner"),
    (n[(n.AmountToUiAmount = 23)] = "AmountToUiAmount"),
    (n[(n.UiAmountToAmount = 24)] = "UiAmountToAmount"),
    (n[(n.InitializeMintCloseAuthority = 25)] = "InitializeMintCloseAuthority"),
    (n[(n.TransferFeeExtension = 26)] = "TransferFeeExtension"),
    (n[(n.ConfidentialTransferExtension = 27)] =
      "ConfidentialTransferExtension"),
    (n[(n.DefaultAccountStateExtension = 28)] = "DefaultAccountStateExtension"),
    (n[(n.Reallocate = 29)] = "Reallocate"),
    (n[(n.MemoTransferExtension = 30)] = "MemoTransferExtension"),
    (n[(n.CreateNativeMint = 31)] = "CreateNativeMint"),
    (n[(n.InitializeNonTransferableMint = 32)] =
      "InitializeNonTransferableMint"),
    (n[(n.InterestBearingMintExtension = 33)] = "InterestBearingMintExtension"),
    (n[(n.CpiGuardExtension = 34)] = "CpiGuardExtension"),
    (n[(n.InitializePermanentDelegate = 35)] = "InitializePermanentDelegate"),
    (n[(n.TransferHookExtension = 36)] = "TransferHookExtension"),
    (n[(n.MetadataPointerExtension = 39)] = "MetadataPointerExtension"),
    (n[(n.GroupPointerExtension = 40)] = "GroupPointerExtension"),
    (n[(n.GroupMemberPointerExtension = 41)] = "GroupMemberPointerExtension"),
    (n[(n.ScaledUiAmountExtension = 43)] = "ScaledUiAmountExtension"),
    (n[(n.PausableExtension = 44)] = "PausableExtension");
})(Wu || (Wu = {}));
var qu;
(function (n) {
  (n[(n.Uninitialized = 0)] = "Uninitialized"),
    (n[(n.Mint = 1)] = "Mint"),
    (n[(n.Account = 2)] = "Account");
})(qu || (qu = {}));
const jy = 1,
  p2 = $.struct([
    $.u8("m"),
    $.u8("n"),
    $y("isInitialized"),
    nr("signer1"),
    nr("signer2"),
    nr("signer3"),
    nr("signer4"),
    nr("signer5"),
    nr("signer6"),
    nr("signer7"),
    nr("signer8"),
    nr("signer9"),
    nr("signer10"),
    nr("signer11"),
  ]),
  Zy = p2.span;
var $u;
(function (n) {
  (n[(n.Uninitialized = 0)] = "Uninitialized"),
    (n[(n.Initialized = 1)] = "Initialized"),
    (n[(n.Frozen = 2)] = "Frozen");
})($u || ($u = {}));
const Yy = $.struct([
    nr("mint"),
    nr("owner"),
    Ho("amount"),
    $.u32("delegateOption"),
    nr("delegate"),
    $.u8("state"),
    $.u32("isNativeOption"),
    Ho("isNative"),
    Ho("delegatedAmount"),
    $.u32("closeAuthorityOption"),
    nr("closeAuthority"),
  ]),
  Hi = Yy.span;
async function dB(n, t, e, r = Bi) {
  const i = await n.getAccountInfo(t, e);
  return g2(t, i, r);
}
function g2(n, t, e = Bi) {
  if (!t) throw new Qy();
  if (!t.owner.equals(e)) throw new Jy();
  if (t.data.length < Hi) throw new fc();
  const r = Yy.decode(t.data.slice(0, Hi));
  let i = Ie.alloc(0);
  if (t.data.length > Hi) {
    if (t.data.length === Zy) throw new fc();
    if (t.data[Hi] != qu.Account) throw new f2();
    i = t.data.slice(Hi + jy);
  }
  return {
    address: n,
    mint: r.mint,
    owner: r.owner,
    amount: r.amount,
    delegate: r.delegateOption ? r.delegate : null,
    delegatedAmount: r.delegatedAmount,
    isInitialized: r.state !== $u.Uninitialized,
    isFrozen: r.state === $u.Frozen,
    isNative: !!r.isNativeOption,
    rentExemptReserve: r.isNativeOption ? r.isNative : null,
    closeAuthority: r.closeAuthorityOption ? r.closeAuthority : null,
    tlvData: i,
  };
}
function Xy(n, t, e) {
  if (e.length) {
    n.push({ pubkey: t, isSigner: !1, isWritable: !1 });
    for (const r of e)
      n.push({
        pubkey: r instanceof gt ? r : r.publicKey,
        isSigner: !0,
        isWritable: !1,
      });
  } else n.push({ pubkey: t, isSigner: !0, isWritable: !1 });
  return n;
}
const op = $.struct([$.u8("instruction"), Ho("amount"), $.u8("decimals")]);
function pB(n, t, e, r, i, s, o = [], a = Bi) {
  const c = Xy(
      [
        { pubkey: n, isSigner: !1, isWritable: !0 },
        { pubkey: t, isSigner: !1, isWritable: !1 },
        { pubkey: e, isSigner: !1, isWritable: !0 },
      ],
      r,
      o
    ),
    f = Ie.alloc(op.span);
  return (
    op.encode(
      { instruction: Wu.TransferChecked, amount: BigInt(i), decimals: s },
      f
    ),
    new ie({ keys: c, programId: a, data: f })
  );
}
const tm = $.struct([
    $.u32("mintAuthorityOption"),
    nr("mintAuthority"),
    Ho("supply"),
    $.u8("decimals"),
    $y("isInitialized"),
    $.u32("freezeAuthorityOption"),
    nr("freezeAuthority"),
  ]),
  Wf = tm.span;
async function gB(n, t, e, r = Bi) {
  const i = await n.getAccountInfo(t, e);
  return y2(t, i, r);
}
function y2(n, t, e = Bi) {
  if (!t) throw new Qy();
  if (!t.owner.equals(e)) throw new Jy();
  if (t.data.length < Wf) throw new fc();
  const r = tm.decode(t.data.slice(0, Wf));
  let i = Ie.alloc(0);
  if (t.data.length > Wf) {
    if (t.data.length <= Hi) throw new fc();
    if (t.data.length === Zy) throw new fc();
    if (t.data[Hi] != qu.Mint) throw new h2();
    i = t.data.slice(Hi + jy);
  }
  return {
    address: n,
    mintAuthority: r.mintAuthorityOption ? r.mintAuthority : null,
    supply: r.supply,
    decimals: r.decimals,
    isInitialized: r.isInitialized,
    freezeAuthority: r.freezeAuthorityOption ? r.freezeAuthority : null,
    tlvData: i,
  };
}
function yB(n, t, e = !1, r = Bi, i = Td) {
  if (!e && !gt.isOnCurve(t.toBuffer())) throw new d2();
  const [s] = gt.findProgramAddressSync(
    [t.toBuffer(), r.toBuffer(), n.toBuffer()],
    i
  );
  return s;
}
function mB(n, t, e, r, i = Bi, s = Td) {
  return m2(n, t, e, r, Ie.alloc(0), i, s);
}
function m2(n, t, e, r, i, s = Bi, o = Td) {
  const a = [
    { pubkey: n, isSigner: !0, isWritable: !0 },
    { pubkey: t, isSigner: !1, isWritable: !0 },
    { pubkey: e, isSigner: !1, isWritable: !1 },
    { pubkey: r, isSigner: !1, isWritable: !1 },
    { pubkey: $e.programId, isSigner: !1, isWritable: !1 },
    { pubkey: s, isSigner: !1, isWritable: !1 },
  ];
  return new ie({ keys: a, programId: o, data: i });
}
const ap = $.struct([$.u8("instruction"), Ho("amount")]);
function wB(n, t, e, r, i = [], s = Bi) {
  const o = Xy(
      [
        { pubkey: n, isSigner: !1, isWritable: !0 },
        { pubkey: t, isSigner: !1, isWritable: !0 },
      ],
      e,
      i
    ),
    a = Ie.alloc(ap.span);
  return (
    ap.encode({ instruction: Wu.Transfer, amount: BigInt(r) }, a),
    new ie({ keys: o, programId: s, data: a })
  );
}
const w2 = "6.15.0";
function b2(n, t, e) {
  const r = t.split("|").map((s) => s.trim());
  for (let s = 0; s < r.length; s++)
    switch (t) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof n === t) return;
    }
  const i = new Error(`invalid value for type ${t}`);
  throw (
    ((i.code = "INVALID_ARGUMENT"),
    (i.argument = `value.${e}`),
    (i.value = n),
    i)
  );
}
async function kr(n) {
  const t = Object.keys(n);
  return (await Promise.all(t.map((r) => Promise.resolve(n[r])))).reduce(
    (r, i, s) => ((r[t[s]] = i), r),
    {}
  );
}
function Ct(n, t, e) {
  for (let r in t) {
    let i = t[r];
    const s = e ? e[r] : null;
    s && b2(i, s, r),
      Object.defineProperty(n, r, { enumerable: !0, value: i, writable: !1 });
  }
}
function No(n, t) {
  if (n == null) return "null";
  if ((t == null && (t = new Set()), typeof n == "object")) {
    if (t.has(n)) return "[Circular]";
    t.add(n);
  }
  if (Array.isArray(n)) return "[ " + n.map((e) => No(e, t)).join(", ") + " ]";
  if (n instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let r = "0x";
    for (let i = 0; i < n.length; i++) (r += e[n[i] >> 4]), (r += e[n[i] & 15]);
    return r;
  }
  if (typeof n == "object" && typeof n.toJSON == "function")
    return No(n.toJSON(), t);
  switch (typeof n) {
    case "boolean":
    case "number":
    case "symbol":
      return n.toString();
    case "bigint":
      return BigInt(n).toString();
    case "string":
      return JSON.stringify(n);
    case "object": {
      const e = Object.keys(n);
      return (
        e.sort(),
        "{ " + e.map((r) => `${No(r, t)}: ${No(n[r], t)}`).join(", ") + " }"
      );
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function or(n, t) {
  return n && n.code === t;
}
function Od(n) {
  return or(n, "CALL_EXCEPTION");
}
function Be(n, t, e) {
  let r = n;
  {
    const s = [];
    if (e) {
      if ("message" in e || "code" in e || "name" in e)
        throw new Error(`value will overwrite populated values: ${No(e)}`);
      for (const o in e) {
        if (o === "shortMessage") continue;
        const a = e[o];
        s.push(o + "=" + No(a));
      }
    }
    s.push(`code=${t}`),
      s.push(`version=${w2}`),
      s.length && (n += " (" + s.join(", ") + ")");
  }
  let i;
  switch (t) {
    case "INVALID_ARGUMENT":
      i = new TypeError(n);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      i = new RangeError(n);
      break;
    default:
      i = new Error(n);
  }
  return (
    Ct(i, { code: t }),
    e && Object.assign(i, e),
    i.shortMessage == null && Ct(i, { shortMessage: r }),
    i
  );
}
function ht(n, t, e, r) {
  if (!n) throw Be(t, e, r);
}
function Z(n, t, e, r) {
  ht(n, t, "INVALID_ARGUMENT", { argument: e, value: r });
}
function em(n, t, e) {
  e == null && (e = ""),
    e && (e = ": " + e),
    ht(n >= t, "missing argument" + e, "MISSING_ARGUMENT", {
      count: n,
      expectedCount: t,
    }),
    ht(n <= t, "too many arguments" + e, "UNEXPECTED_ARGUMENT", {
      count: n,
      expectedCount: t,
    });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((n, t) => {
  try {
    if ("test".normalize(t) !== "test") throw new Error("bad");
    if (t === "NFD" && "é".normalize("NFD") !== "é") throw new Error("broken");
    n.push(t);
  } catch {}
  return n;
}, []);
function Zc(n, t, e) {
  if ((e == null && (e = ""), n !== t)) {
    let r = e,
      i = "new";
    e && ((r += "."), (i += " " + e)),
      ht(
        !1,
        `private constructor; use ${r}from* methods`,
        "UNSUPPORTED_OPERATION",
        { operation: i }
      );
  }
}
function rm(n, t, e) {
  if (n instanceof Uint8Array) return e ? new Uint8Array(n) : n;
  if (typeof n == "string" && n.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
    const r = new Uint8Array((n.length - 2) / 2);
    let i = 2;
    for (let s = 0; s < r.length; s++)
      (r[s] = parseInt(n.substring(i, i + 2), 16)), (i += 2);
    return r;
  }
  Z(!1, "invalid BytesLike value", t || "value", n);
}
function $t(n, t) {
  return rm(n, t, !1);
}
function vr(n, t) {
  return rm(n, t, !0);
}
function be(n, t) {
  return !(
    typeof n != "string" ||
    !n.match(/^0x[0-9A-Fa-f]*$/) ||
    (typeof t == "number" && n.length !== 2 + 2 * t) ||
    (t === !0 && n.length % 2 !== 0)
  );
}
function Md(n) {
  return be(n, !0) || n instanceof Uint8Array;
}
const cp = "0123456789abcdef";
function xt(n) {
  const t = $t(n);
  let e = "0x";
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    e += cp[(i & 240) >> 4] + cp[i & 15];
  }
  return e;
}
function Fe(n) {
  return "0x" + n.map((t) => xt(t).substring(2)).join("");
}
function Go(n) {
  return be(n, !0) ? (n.length - 2) / 2 : $t(n).length;
}
function Ue(n, t, e) {
  const r = $t(n);
  return (
    e != null &&
      e > r.length &&
      ht(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: r,
        length: r.length,
        offset: e,
      }),
    xt(r.slice(t ?? 0, e ?? r.length))
  );
}
function nm(n, t, e) {
  const r = $t(n);
  ht(t >= r.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(r),
    length: t,
    offset: t + 1,
  });
  const i = new Uint8Array(t);
  return i.fill(0), e ? i.set(r, t - r.length) : i.set(r, 0), xt(i);
}
function vi(n, t) {
  return nm(n, t, !0);
}
function A2(n, t) {
  return nm(n, t, !1);
}
const Nl = BigInt(0),
  bn = BigInt(1),
  To = 9007199254740991;
function Qu(n, t) {
  const e = Tl(n, "value"),
    r = BigInt(Gt(t, "width"));
  if (
    (ht(e >> r === Nl, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: n,
    }),
    e >> (r - bn))
  ) {
    const i = (bn << r) - bn;
    return -((~e & i) + bn);
  }
  return e;
}
function im(n, t) {
  let e = vt(n, "value");
  const r = BigInt(Gt(t, "width")),
    i = bn << (r - bn);
  if (e < Nl) {
    (e = -e),
      ht(e <= i, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: n,
      });
    const s = (bn << r) - bn;
    return (~e & s) + bn;
  } else
    ht(e < i, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: n,
    });
  return e;
}
function Ps(n, t) {
  const e = Tl(n, "value"),
    r = BigInt(Gt(t, "bits"));
  return e & ((bn << r) - bn);
}
function vt(n, t) {
  switch (typeof n) {
    case "bigint":
      return n;
    case "number":
      return (
        Z(Number.isInteger(n), "underflow", t || "value", n),
        Z(n >= -To && n <= To, "overflow", t || "value", n),
        BigInt(n)
      );
    case "string":
      try {
        if (n === "") throw new Error("empty string");
        return n[0] === "-" && n[1] !== "-"
          ? -BigInt(n.substring(1))
          : BigInt(n);
      } catch (e) {
        Z(!1, `invalid BigNumberish string: ${e.message}`, t || "value", n);
      }
  }
  Z(!1, "invalid BigNumberish value", t || "value", n);
}
function Tl(n, t) {
  const e = vt(n, t);
  return (
    ht(e >= Nl, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value: n,
    }),
    e
  );
}
const up = "0123456789abcdef";
function _l(n) {
  if (n instanceof Uint8Array) {
    let t = "0x0";
    for (const e of n) (t += up[e >> 4]), (t += up[e & 15]);
    return BigInt(t);
  }
  return vt(n);
}
function Gt(n, t) {
  switch (typeof n) {
    case "bigint":
      return Z(n >= -To && n <= To, "overflow", t || "value", n), Number(n);
    case "number":
      return (
        Z(Number.isInteger(n), "underflow", t || "value", n),
        Z(n >= -To && n <= To, "overflow", t || "value", n),
        n
      );
    case "string":
      try {
        if (n === "") throw new Error("empty string");
        return Gt(BigInt(n), t);
      } catch (e) {
        Z(!1, `invalid numeric string: ${e.message}`, t || "value", n);
      }
  }
  Z(!1, "invalid numeric value", t || "value", n);
}
function E2(n) {
  return Gt(_l(n));
}
function us(n, t) {
  let r = Tl(n, "value").toString(16);
  if (t == null) r.length % 2 && (r = "0" + r);
  else {
    const i = Gt(t, "width");
    for (
      ht(
        i * 2 >= r.length,
        `value exceeds width (${i} bytes)`,
        "NUMERIC_FAULT",
        { operation: "toBeHex", fault: "overflow", value: n }
      );
      r.length < i * 2;

    )
      r = "0" + r;
  }
  return "0x" + r;
}
function Qe(n) {
  const t = Tl(n, "value");
  if (t === Nl) return new Uint8Array([]);
  let e = t.toString(16);
  e.length % 2 && (e = "0" + e);
  const r = new Uint8Array(e.length / 2);
  for (let i = 0; i < r.length; i++) {
    const s = i * 2;
    r[i] = parseInt(e.substring(s, s + 2), 16);
  }
  return r;
}
function wn(n) {
  let t = xt(Md(n) ? n : Qe(n)).substring(2);
  for (; t.startsWith("0"); ) t = t.substring(1);
  return t === "" && (t = "0"), "0x" + t;
}
const lp = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const fp = BigInt(58);
function x2(n) {
  const t = $t(n);
  let e = _l(t),
    r = "";
  for (; e; ) (r = lp[Number(e % fp)] + r), (e /= fp);
  for (let i = 0; i < t.length && !t[i]; i++) r = lp[0] + r;
  return r;
}
function k2(n) {
  n = atob(n);
  const t = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) t[e] = n.charCodeAt(e);
  return $t(t);
}
function v2(n) {
  const t = $t(n);
  let e = "";
  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
  return btoa(e);
}
var qo;
class sm {
  constructor(t, e, r) {
    tt(this, "filter");
    tt(this, "emitter");
    ut(this, qo);
    Q(this, qo, e), Ct(this, { emitter: t, filter: r });
  }
  async removeListener() {
    C(this, qo) != null && (await this.emitter.off(this.filter, C(this, qo)));
  }
}
qo = new WeakMap();
function S2(n, t, e, r, i) {
  Z(!1, `invalid codepoint at offset ${t}; ${n}`, "bytes", e);
}
function om(n, t, e, r, i) {
  if (n === "BAD_PREFIX" || n === "UNEXPECTED_CONTINUE") {
    let s = 0;
    for (let o = t + 1; o < e.length && e[o] >> 6 === 2; o++) s++;
    return s;
  }
  return n === "OVERRUN" ? e.length - t - 1 : 0;
}
function I2(n, t, e, r, i) {
  return n === "OVERLONG"
    ? (Z(
        typeof i == "number",
        "invalid bad code point for replacement",
        "badCodepoint",
        i
      ),
      r.push(i),
      0)
    : (r.push(65533), om(n, t, e));
}
const B2 = Object.freeze({ error: S2, ignore: om, replace: I2 });
function R2(n, t) {
  t == null && (t = B2.error);
  const e = $t(n, "bytes"),
    r = [];
  let i = 0;
  for (; i < e.length; ) {
    const s = e[i++];
    if (s >> 7 === 0) {
      r.push(s);
      continue;
    }
    let o = null,
      a = null;
    if ((s & 224) === 192) (o = 1), (a = 127);
    else if ((s & 240) === 224) (o = 2), (a = 2047);
    else if ((s & 248) === 240) (o = 3), (a = 65535);
    else {
      (s & 192) === 128
        ? (i += t("UNEXPECTED_CONTINUE", i - 1, e, r))
        : (i += t("BAD_PREFIX", i - 1, e, r));
      continue;
    }
    if (i - 1 + o >= e.length) {
      i += t("OVERRUN", i - 1, e, r);
      continue;
    }
    let c = s & ((1 << (8 - o - 1)) - 1);
    for (let f = 0; f < o; f++) {
      let h = e[i];
      if ((h & 192) != 128) {
        (i += t("MISSING_CONTINUE", i, e, r)), (c = null);
        break;
      }
      (c = (c << 6) | (h & 63)), i++;
    }
    if (c !== null) {
      if (c > 1114111) {
        i += t("OUT_OF_RANGE", i - 1 - o, e, r, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        i += t("UTF16_SURROGATE", i - 1 - o, e, r, c);
        continue;
      }
      if (c <= a) {
        i += t("OVERLONG", i - 1 - o, e, r, c);
        continue;
      }
      r.push(c);
    }
  }
  return r;
}
function Ei(n, t) {
  Z(typeof n == "string", "invalid string value", "str", n);
  let e = [];
  for (let r = 0; r < n.length; r++) {
    const i = n.charCodeAt(r);
    if (i < 128) e.push(i);
    else if (i < 2048) e.push((i >> 6) | 192), e.push((i & 63) | 128);
    else if ((i & 64512) == 55296) {
      r++;
      const s = n.charCodeAt(r);
      Z(
        r < n.length && (s & 64512) === 56320,
        "invalid surrogate pair",
        "str",
        n
      );
      const o = 65536 + ((i & 1023) << 10) + (s & 1023);
      e.push((o >> 18) | 240),
        e.push(((o >> 12) & 63) | 128),
        e.push(((o >> 6) & 63) | 128),
        e.push((o & 63) | 128);
    } else
      e.push((i >> 12) | 224),
        e.push(((i >> 6) & 63) | 128),
        e.push((i & 63) | 128);
  }
  return new Uint8Array(e);
}
function P2(n) {
  return n
    .map((t) =>
      t <= 65535
        ? String.fromCharCode(t)
        : ((t -= 65536),
          String.fromCharCode(((t >> 10) & 1023) + 55296, (t & 1023) + 56320))
    )
    .join("");
}
function Ju(n, t) {
  return P2(R2(n, t));
}
function am(n) {
  async function t(e, r) {
    ht(
      r == null || !r.cancelled,
      "request cancelled before sending",
      "CANCELLED"
    );
    const i = e.url.split(":")[0].toLowerCase();
    ht(
      i === "http" || i === "https",
      `unsupported protocol ${i}`,
      "UNSUPPORTED_OPERATION",
      { info: { protocol: i }, operation: "request" }
    ),
      ht(
        i === "https" || !e.credentials || e.allowInsecureAuthentication,
        "insecure authorized connections unsupported",
        "UNSUPPORTED_OPERATION",
        { operation: "request" }
      );
    let s = null;
    const o = new AbortController(),
      a = setTimeout(() => {
        (s = Be("request timeout", "TIMEOUT")), o.abort();
      }, e.timeout);
    r &&
      r.addListener(() => {
        (s = Be("request cancelled", "CANCELLED")), o.abort();
      });
    const c = Object.assign({}, n, {
      method: e.method,
      headers: new Headers(Array.from(e)),
      body: e.body || void 0,
      signal: o.signal,
    });
    let f;
    try {
      f = await fetch(e.url, c);
    } catch (P) {
      throw (clearTimeout(a), s || P);
    }
    clearTimeout(a);
    const h = {};
    f.headers.forEach((P, M) => {
      h[M.toLowerCase()] = P;
    });
    const b = await f.arrayBuffer(),
      S = b == null ? null : new Uint8Array(b);
    return {
      statusCode: f.status,
      statusMessage: f.statusText,
      headers: h,
      body: S,
    };
  }
  return t;
}
const C2 = 12,
  N2 = 250;
let hp = am();
const T2 = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
  _2 = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let qf = !1;
async function cm(n, t) {
  try {
    const e = n.match(T2);
    if (!e) throw new Error("invalid data");
    return new as(
      200,
      "OK",
      { "content-type": e[1] || "text/plain" },
      e[2] ? k2(e[3]) : M2(e[3])
    );
  } catch {
    return new as(599, "BAD REQUEST (invalid data: URI)", {}, null, new Si(n));
  }
}
function um(n) {
  async function t(e, r) {
    try {
      const i = e.match(_2);
      if (!i) throw new Error("invalid link");
      return new Si(`${n}${i[2]}`);
    } catch {
      return new as(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new Si(e));
    }
  }
  return t;
}
const du = { data: cm, ipfs: um("https://gateway.ipfs.io/ipfs/") },
  lm = new WeakMap();
var _s, Gi;
class O2 {
  constructor(t) {
    ut(this, _s);
    ut(this, Gi);
    Q(this, _s, []),
      Q(this, Gi, !1),
      lm.set(t, () => {
        if (!C(this, Gi)) {
          Q(this, Gi, !0);
          for (const e of C(this, _s))
            setTimeout(() => {
              e();
            }, 0);
          Q(this, _s, []);
        }
      });
  }
  addListener(t) {
    ht(!C(this, Gi), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener",
    }),
      C(this, _s).push(t);
  }
  get cancelled() {
    return C(this, Gi);
  }
  checkSignal() {
    ht(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
(_s = new WeakMap()), (Gi = new WeakMap());
function pu(n) {
  if (n == null) throw new Error("missing signal; should not happen");
  return n.checkSignal(), n;
}
var $o, Qo, hn, si, Jo, jo, je, Kr, oi, Os, Ms, Ls, Rn, dn, Ki, Us, sc;
const cl = class cl {
  constructor(t) {
    ut(this, Us);
    ut(this, $o);
    ut(this, Qo);
    ut(this, hn);
    ut(this, si);
    ut(this, Jo);
    ut(this, jo);
    ut(this, je);
    ut(this, Kr);
    ut(this, oi);
    ut(this, Os);
    ut(this, Ms);
    ut(this, Ls);
    ut(this, Rn);
    ut(this, dn);
    ut(this, Ki);
    Q(this, jo, String(t)),
      Q(this, $o, !1),
      Q(this, Qo, !0),
      Q(this, hn, {}),
      Q(this, si, ""),
      Q(this, Jo, 3e5),
      Q(this, dn, { slotInterval: N2, maxAttempts: C2 }),
      Q(this, Ki, null);
  }
  get url() {
    return C(this, jo);
  }
  set url(t) {
    Q(this, jo, String(t));
  }
  get body() {
    return C(this, je) == null ? null : new Uint8Array(C(this, je));
  }
  set body(t) {
    if (t == null) Q(this, je, void 0), Q(this, Kr, void 0);
    else if (typeof t == "string")
      Q(this, je, Ei(t)), Q(this, Kr, "text/plain");
    else if (t instanceof Uint8Array)
      Q(this, je, t), Q(this, Kr, "application/octet-stream");
    else if (typeof t == "object")
      Q(this, je, Ei(JSON.stringify(t))), Q(this, Kr, "application/json");
    else throw new Error("invalid body");
  }
  hasBody() {
    return C(this, je) != null;
  }
  get method() {
    return C(this, si) ? C(this, si) : this.hasBody() ? "POST" : "GET";
  }
  set method(t) {
    t == null && (t = ""), Q(this, si, String(t).toUpperCase());
  }
  get headers() {
    const t = Object.assign({}, C(this, hn));
    return (
      C(this, oi) && (t.authorization = `Basic ${v2(Ei(C(this, oi)))}`),
      this.allowGzip && (t["accept-encoding"] = "gzip"),
      t["content-type"] == null &&
        C(this, Kr) &&
        (t["content-type"] = C(this, Kr)),
      this.body && (t["content-length"] = String(this.body.length)),
      t
    );
  }
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  setHeader(t, e) {
    C(this, hn)[String(t).toLowerCase()] = String(e);
  }
  clearHeaders() {
    Q(this, hn, {});
  }
  [Symbol.iterator]() {
    const t = this.headers,
      e = Object.keys(t);
    let r = 0;
    return {
      next: () => {
        if (r < e.length) {
          const i = e[r++];
          return { value: [i, t[i]], done: !1 };
        }
        return { value: void 0, done: !0 };
      },
    };
  }
  get credentials() {
    return C(this, oi) || null;
  }
  setCredentials(t, e) {
    Z(
      !t.match(/:/),
      "invalid basic authentication username",
      "username",
      "[REDACTED]"
    ),
      Q(this, oi, `${t}:${e}`);
  }
  get allowGzip() {
    return C(this, Qo);
  }
  set allowGzip(t) {
    Q(this, Qo, !!t);
  }
  get allowInsecureAuthentication() {
    return !!C(this, $o);
  }
  set allowInsecureAuthentication(t) {
    Q(this, $o, !!t);
  }
  get timeout() {
    return C(this, Jo);
  }
  set timeout(t) {
    Z(t >= 0, "timeout must be non-zero", "timeout", t), Q(this, Jo, t);
  }
  get preflightFunc() {
    return C(this, Os) || null;
  }
  set preflightFunc(t) {
    Q(this, Os, t);
  }
  get processFunc() {
    return C(this, Ms) || null;
  }
  set processFunc(t) {
    Q(this, Ms, t);
  }
  get retryFunc() {
    return C(this, Ls) || null;
  }
  set retryFunc(t) {
    Q(this, Ls, t);
  }
  get getUrlFunc() {
    return C(this, Ki) || hp;
  }
  set getUrlFunc(t) {
    Q(this, Ki, t);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(
      this.method
    )} url=${JSON.stringify(this.url)} headers=${JSON.stringify(
      this.headers
    )} body=${C(this, je) ? xt(C(this, je)) : "null"}>`;
  }
  setThrottleParams(t) {
    t.slotInterval != null && (C(this, dn).slotInterval = t.slotInterval),
      t.maxAttempts != null && (C(this, dn).maxAttempts = t.maxAttempts);
  }
  send() {
    return (
      ht(C(this, Rn) == null, "request already sent", "UNSUPPORTED_OPERATION", {
        operation: "fetchRequest.send",
      }),
      Q(this, Rn, new O2(this)),
      pt(this, Us, sc).call(
        this,
        0,
        dp() + this.timeout,
        0,
        this,
        new as(0, "", {}, null, this)
      )
    );
  }
  cancel() {
    ht(
      C(this, Rn) != null,
      "request has not been sent",
      "UNSUPPORTED_OPERATION",
      { operation: "fetchRequest.cancel" }
    );
    const t = lm.get(this);
    if (!t) throw new Error("missing signal; should not happen");
    t();
  }
  redirect(t) {
    const e = this.url.split(":")[0].toLowerCase(),
      r = t.split(":")[0].toLowerCase();
    ht(
      this.method === "GET" &&
        (e !== "https" || r !== "http") &&
        t.match(/^https?:/),
      "unsupported redirect",
      "UNSUPPORTED_OPERATION",
      {
        operation: `redirect(${this.method} ${JSON.stringify(
          this.url
        )} => ${JSON.stringify(t)})`,
      }
    );
    const i = new cl(t);
    return (
      (i.method = "GET"),
      (i.allowGzip = this.allowGzip),
      (i.timeout = this.timeout),
      Q(i, hn, Object.assign({}, C(this, hn))),
      C(this, je) && Q(i, je, new Uint8Array(C(this, je))),
      Q(i, Kr, C(this, Kr)),
      i
    );
  }
  clone() {
    const t = new cl(this.url);
    return (
      Q(t, si, C(this, si)),
      C(this, je) && Q(t, je, C(this, je)),
      Q(t, Kr, C(this, Kr)),
      Q(t, hn, Object.assign({}, C(this, hn))),
      Q(t, oi, C(this, oi)),
      this.allowGzip && (t.allowGzip = !0),
      (t.timeout = this.timeout),
      this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0),
      Q(t, Os, C(this, Os)),
      Q(t, Ms, C(this, Ms)),
      Q(t, Ls, C(this, Ls)),
      Q(t, dn, Object.assign({}, C(this, dn))),
      Q(t, Ki, C(this, Ki)),
      t
    );
  }
  static lockConfig() {
    qf = !0;
  }
  static getGateway(t) {
    return du[t.toLowerCase()] || null;
  }
  static registerGateway(t, e) {
    if (((t = t.toLowerCase()), t === "http" || t === "https"))
      throw new Error(`cannot intercept ${t}; use registerGetUrl`);
    if (qf) throw new Error("gateways locked");
    du[t] = e;
  }
  static registerGetUrl(t) {
    if (qf) throw new Error("gateways locked");
    hp = t;
  }
  static createGetUrlFunc(t) {
    return am(t);
  }
  static createDataGateway() {
    return cm;
  }
  static createIpfsGatewayFunc(t) {
    return um(t);
  }
};
($o = new WeakMap()),
  (Qo = new WeakMap()),
  (hn = new WeakMap()),
  (si = new WeakMap()),
  (Jo = new WeakMap()),
  (jo = new WeakMap()),
  (je = new WeakMap()),
  (Kr = new WeakMap()),
  (oi = new WeakMap()),
  (Os = new WeakMap()),
  (Ms = new WeakMap()),
  (Ls = new WeakMap()),
  (Rn = new WeakMap()),
  (dn = new WeakMap()),
  (Ki = new WeakMap()),
  (Us = new WeakSet()),
  (sc = async function (t, e, r, i, s) {
    var h, b, S;
    if (t >= C(this, dn).maxAttempts)
      return s.makeServerError("exceeded maximum retry limit");
    ht(dp() <= e, "timeout", "TIMEOUT", {
      operation: "request.send",
      reason: "timeout",
      request: i,
    }),
      r > 0 && (await L2(r));
    let o = this.clone();
    const a = (o.url.split(":")[0] || "").toLowerCase();
    if (a in du) {
      const P = await du[a](o.url, pu(C(i, Rn)));
      if (P instanceof as) {
        let M = P;
        if (this.processFunc) {
          pu(C(i, Rn));
          try {
            M = await this.processFunc(o, M);
          } catch (N) {
            (N.throttle == null || typeof N.stall != "number") &&
              M.makeServerError(
                "error in post-processing function",
                N
              ).assertOk();
          }
        }
        return M;
      }
      o = P;
    }
    this.preflightFunc && (o = await this.preflightFunc(o));
    const c = await this.getUrlFunc(o, pu(C(i, Rn)));
    let f = new as(c.statusCode, c.statusMessage, c.headers, c.body, i);
    if (f.statusCode === 301 || f.statusCode === 302) {
      try {
        const P = f.headers.location || "";
        return pt((h = o.redirect(P)), Us, sc).call(h, t + 1, e, 0, i, f);
      } catch {}
      return f;
    } else if (
      f.statusCode === 429 &&
      (this.retryFunc == null || (await this.retryFunc(o, f, t)))
    ) {
      const P = f.headers["retry-after"];
      let M =
        C(this, dn).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
      return (
        typeof P == "string" && P.match(/^[1-9][0-9]*$/) && (M = parseInt(P)),
        pt((b = o.clone()), Us, sc).call(b, t + 1, e, M, i, f)
      );
    }
    if (this.processFunc) {
      pu(C(i, Rn));
      try {
        f = await this.processFunc(o, f);
      } catch (P) {
        (P.throttle == null || typeof P.stall != "number") &&
          f.makeServerError("error in post-processing function", P).assertOk();
        let M =
          C(this, dn).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
        return (
          P.stall >= 0 && (M = P.stall),
          pt((S = o.clone()), Us, sc).call(S, t + 1, e, M, i, f)
        );
      }
    }
    return f;
  });
let Si = cl;
var Tc, _c, Oc, Vr, Zo, Fs;
const Xd = class Xd {
  constructor(t, e, r, i, s) {
    ut(this, Tc);
    ut(this, _c);
    ut(this, Oc);
    ut(this, Vr);
    ut(this, Zo);
    ut(this, Fs);
    Q(this, Tc, t),
      Q(this, _c, e),
      Q(
        this,
        Oc,
        Object.keys(r).reduce(
          (o, a) => ((o[a.toLowerCase()] = String(r[a])), o),
          {}
        )
      ),
      Q(this, Vr, i == null ? null : new Uint8Array(i)),
      Q(this, Zo, s || null),
      Q(this, Fs, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${
      C(this, Vr) ? xt(C(this, Vr)) : "null"
    }>`;
  }
  get statusCode() {
    return C(this, Tc);
  }
  get statusMessage() {
    return C(this, _c);
  }
  get headers() {
    return Object.assign({}, C(this, Oc));
  }
  get body() {
    return C(this, Vr) == null ? null : new Uint8Array(C(this, Vr));
  }
  get bodyText() {
    try {
      return C(this, Vr) == null ? "" : Ju(C(this, Vr));
    } catch {
      ht(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this },
      });
    }
  }
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch {
      ht(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this },
      });
    }
  }
  [Symbol.iterator]() {
    const t = this.headers,
      e = Object.keys(t);
    let r = 0;
    return {
      next: () => {
        if (r < e.length) {
          const i = e[r++];
          return { value: [i, t[i]], done: !1 };
        }
        return { value: void 0, done: !0 };
      },
    };
  }
  makeServerError(t, e) {
    let r;
    t
      ? (r = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})`)
      : ((t = `${this.statusCode} ${this.statusMessage}`),
        (r = `CLIENT ESCALATED SERVER ERROR (${t})`));
    const i = new Xd(599, r, this.headers, this.body, C(this, Zo) || void 0);
    return Q(i, Fs, { message: t, error: e }), i;
  }
  throwThrottleError(t, e) {
    e == null
      ? (e = -1)
      : Z(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
    const r = new Error(t || "throttling requests");
    throw (Ct(r, { stall: e, throttle: !0 }), r);
  }
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  hasBody() {
    return C(this, Vr) != null;
  }
  get request() {
    return C(this, Zo);
  }
  ok() {
    return (
      C(this, Fs).message === "" &&
      this.statusCode >= 200 &&
      this.statusCode < 300
    );
  }
  assertOk() {
    if (this.ok()) return;
    let { message: t, error: e } = C(this, Fs);
    t === "" &&
      (t = `server response ${this.statusCode} ${this.statusMessage}`);
    let r = null;
    this.request && (r = this.request.url);
    let i = null;
    try {
      C(this, Vr) && (i = Ju(C(this, Vr)));
    } catch {}
    ht(!1, t, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: e,
      info: {
        requestUrl: r,
        responseBody: i,
        responseStatus: `${this.statusCode} ${this.statusMessage}`,
      },
    });
  }
};
(Tc = new WeakMap()),
  (_c = new WeakMap()),
  (Oc = new WeakMap()),
  (Vr = new WeakMap()),
  (Zo = new WeakMap()),
  (Fs = new WeakMap());
let as = Xd;
function dp() {
  return new Date().getTime();
}
function M2(n) {
  return Ei(
    n.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
      String.fromCharCode(parseInt(e, 16))
    )
  );
}
function L2(n) {
  return new Promise((t) => setTimeout(t, n));
}
const U2 = BigInt(-1),
  un = BigInt(0),
  _o = BigInt(1),
  F2 = BigInt(5),
  ko = {};
let Ko = "0000";
for (; Ko.length < 80; ) Ko += Ko;
function gs(n) {
  let t = Ko;
  for (; t.length < n; ) t += t;
  return BigInt("1" + t.substring(0, n));
}
function rc(n, t, e) {
  const r = BigInt(t.width);
  if (t.signed) {
    const i = _o << (r - _o);
    ht(e == null || (n >= -i && n < i), "overflow", "NUMERIC_FAULT", {
      operation: e,
      fault: "overflow",
      value: n,
    }),
      n > un ? (n = Qu(Ps(n, r), r)) : (n = -Qu(Ps(-n, r), r));
  } else {
    const i = _o << r;
    ht(e == null || (n >= 0 && n < i), "overflow", "NUMERIC_FAULT", {
      operation: e,
      fault: "overflow",
      value: n,
    }),
      (n = ((n % i) + i) % i & (i - _o));
  }
  return n;
}
function $f(n) {
  typeof n == "number" && (n = `fixed128x${n}`);
  let t = !0,
    e = 128,
    r = 18;
  if (typeof n == "string") {
    if (n !== "fixed")
      if (n === "ufixed") t = !1;
      else {
        const s = n.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        Z(s, "invalid fixed format", "format", n),
          (t = s[1] !== "u"),
          (e = parseInt(s[2])),
          (r = parseInt(s[3]));
      }
  } else if (n) {
    const s = n,
      o = (a, c, f) =>
        s[a] == null
          ? f
          : (Z(
              typeof s[a] === c,
              "invalid fixed format (" + a + " not " + c + ")",
              "format." + a,
              s[a]
            ),
            s[a]);
    (t = o("signed", "boolean", t)),
      (e = o("width", "number", e)),
      (r = o("decimals", "number", r));
  }
  Z(
    e % 8 === 0,
    "invalid FixedNumber width (not byte aligned)",
    "format.width",
    e
  ),
    Z(
      r <= 80,
      "invalid FixedNumber decimals (too large)",
      "format.decimals",
      r
    );
  const i = (t ? "" : "u") + "fixed" + String(e) + "x" + String(r);
  return { signed: t, width: e, decimals: r, name: i };
}
function D2(n, t) {
  let e = "";
  n < un && ((e = "-"), (n *= U2));
  let r = n.toString();
  if (t === 0) return e + r;
  for (; r.length <= t; ) r = Ko + r;
  const i = r.length - t;
  for (
    r = r.substring(0, i) + "." + r.substring(i);
    r[0] === "0" && r[1] !== ".";

  )
    r = r.substring(1);
  for (; r[r.length - 1] === "0" && r[r.length - 2] !== "."; )
    r = r.substring(0, r.length - 1);
  return e + r;
}
var pn, fe, Er, se, ms, ti, Eh, xh, kh, vh;
const zi = class zi {
  constructor(t, e, r) {
    ut(this, se);
    tt(this, "format");
    ut(this, pn);
    ut(this, fe);
    ut(this, Er);
    tt(this, "_value");
    Zc(t, ko, "FixedNumber"), Q(this, fe, e), Q(this, pn, r);
    const i = D2(e, r.decimals);
    Ct(this, { format: r.name, _value: i }), Q(this, Er, gs(r.decimals));
  }
  get signed() {
    return C(this, pn).signed;
  }
  get width() {
    return C(this, pn).width;
  }
  get decimals() {
    return C(this, pn).decimals;
  }
  get value() {
    return C(this, fe);
  }
  addUnsafe(t) {
    return pt(this, se, Eh).call(this, t);
  }
  add(t) {
    return pt(this, se, Eh).call(this, t, "add");
  }
  subUnsafe(t) {
    return pt(this, se, xh).call(this, t);
  }
  sub(t) {
    return pt(this, se, xh).call(this, t, "sub");
  }
  mulUnsafe(t) {
    return pt(this, se, kh).call(this, t);
  }
  mul(t) {
    return pt(this, se, kh).call(this, t, "mul");
  }
  mulSignal(t) {
    pt(this, se, ms).call(this, t);
    const e = C(this, fe) * C(t, fe);
    return (
      ht(
        e % C(this, Er) === un,
        "precision lost during signalling mul",
        "NUMERIC_FAULT",
        { operation: "mulSignal", fault: "underflow", value: this }
      ),
      pt(this, se, ti).call(this, e / C(this, Er), "mulSignal")
    );
  }
  divUnsafe(t) {
    return pt(this, se, vh).call(this, t);
  }
  div(t) {
    return pt(this, se, vh).call(this, t, "div");
  }
  divSignal(t) {
    ht(C(t, fe) !== un, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this,
    }),
      pt(this, se, ms).call(this, t);
    const e = C(this, fe) * C(this, Er);
    return (
      ht(
        e % C(t, fe) === un,
        "precision lost during signalling div",
        "NUMERIC_FAULT",
        { operation: "divSignal", fault: "underflow", value: this }
      ),
      pt(this, se, ti).call(this, e / C(t, fe), "divSignal")
    );
  }
  cmp(t) {
    let e = this.value,
      r = t.value;
    const i = this.decimals - t.decimals;
    return (
      i > 0 ? (r *= gs(i)) : i < 0 && (e *= gs(-i)), e < r ? -1 : e > r ? 1 : 0
    );
  }
  eq(t) {
    return this.cmp(t) === 0;
  }
  lt(t) {
    return this.cmp(t) < 0;
  }
  lte(t) {
    return this.cmp(t) <= 0;
  }
  gt(t) {
    return this.cmp(t) > 0;
  }
  gte(t) {
    return this.cmp(t) >= 0;
  }
  floor() {
    let t = C(this, fe);
    return (
      C(this, fe) < un && (t -= C(this, Er) - _o),
      (t = (C(this, fe) / C(this, Er)) * C(this, Er)),
      pt(this, se, ti).call(this, t, "floor")
    );
  }
  ceiling() {
    let t = C(this, fe);
    return (
      C(this, fe) > un && (t += C(this, Er) - _o),
      (t = (C(this, fe) / C(this, Er)) * C(this, Er)),
      pt(this, se, ti).call(this, t, "ceiling")
    );
  }
  round(t) {
    if ((t == null && (t = 0), t >= this.decimals)) return this;
    const e = this.decimals - t,
      r = F2 * gs(e - 1);
    let i = this.value + r;
    const s = gs(e);
    return (
      (i = (i / s) * s), rc(i, C(this, pn), "round"), new zi(ko, i, C(this, pn))
    );
  }
  isZero() {
    return C(this, fe) === un;
  }
  isNegative() {
    return C(this, fe) < un;
  }
  toString() {
    return this._value;
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return zi.fromString(this.toString(), t);
  }
  static fromValue(t, e, r) {
    const i = e == null ? 0 : Gt(e),
      s = $f(r);
    let o = vt(t, "value");
    const a = i - s.decimals;
    if (a > 0) {
      const c = gs(a);
      ht(o % c === un, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: t,
      }),
        (o /= c);
    } else a < 0 && (o *= gs(-a));
    return rc(o, s, "fromValue"), new zi(ko, o, s);
  }
  static fromString(t, e) {
    const r = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    Z(
      r && r[2].length + r[3].length > 0,
      "invalid FixedNumber string value",
      "value",
      t
    );
    const i = $f(e);
    let s = r[2] || "0",
      o = r[3] || "";
    for (; o.length < i.decimals; ) o += Ko;
    ht(
      o.substring(i.decimals).match(/^0*$/),
      "too many decimals for format",
      "NUMERIC_FAULT",
      { operation: "fromString", fault: "underflow", value: t }
    ),
      (o = o.substring(0, i.decimals));
    const a = BigInt(r[1] + s + o);
    return rc(a, i, "fromString"), new zi(ko, a, i);
  }
  static fromBytes(t, e) {
    let r = _l($t(t, "value"));
    const i = $f(e);
    return (
      i.signed && (r = Qu(r, i.width)), rc(r, i, "fromBytes"), new zi(ko, r, i)
    );
  }
};
(pn = new WeakMap()),
  (fe = new WeakMap()),
  (Er = new WeakMap()),
  (se = new WeakSet()),
  (ms = function (t) {
    Z(
      this.format === t.format,
      "incompatible format; use fixedNumber.toFormat",
      "other",
      t
    );
  }),
  (ti = function (t, e) {
    return (t = rc(t, C(this, pn), e)), new zi(ko, t, C(this, pn));
  }),
  (Eh = function (t, e) {
    return (
      pt(this, se, ms).call(this, t),
      pt(this, se, ti).call(this, C(this, fe) + C(t, fe), e)
    );
  }),
  (xh = function (t, e) {
    return (
      pt(this, se, ms).call(this, t),
      pt(this, se, ti).call(this, C(this, fe) - C(t, fe), e)
    );
  }),
  (kh = function (t, e) {
    return (
      pt(this, se, ms).call(this, t),
      pt(this, se, ti).call(this, (C(this, fe) * C(t, fe)) / C(this, Er), e)
    );
  }),
  (vh = function (t, e) {
    return (
      ht(C(t, fe) !== un, "division by zero", "NUMERIC_FAULT", {
        operation: "div",
        fault: "divide-by-zero",
        value: this,
      }),
      pt(this, se, ms).call(this, t),
      pt(this, se, ti).call(this, (C(this, fe) * C(this, Er)) / C(t, fe), e)
    );
  });
let ju = zi;
function z2(n) {
  let t = n.toString(16);
  for (; t.length < 2; ) t = "0" + t;
  return "0x" + t;
}
function pp(n, t, e) {
  let r = 0;
  for (let i = 0; i < e; i++) r = r * 256 + n[t + i];
  return r;
}
function gp(n, t, e, r) {
  const i = [];
  for (; e < t + 1 + r; ) {
    const s = fm(n, e);
    i.push(s.result),
      (e += s.consumed),
      ht(e <= t + 1 + r, "child data too short", "BUFFER_OVERRUN", {
        buffer: n,
        length: r,
        offset: t,
      });
  }
  return { consumed: 1 + r, result: i };
}
function fm(n, t) {
  ht(n.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: n,
    length: 0,
    offset: 1,
  });
  const e = (r) => {
    ht(r <= n.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: n,
      length: n.length,
      offset: r,
    });
  };
  if (n[t] >= 248) {
    const r = n[t] - 247;
    e(t + 1 + r);
    const i = pp(n, t + 1, r);
    return e(t + 1 + r + i), gp(n, t, t + 1 + r, r + i);
  } else if (n[t] >= 192) {
    const r = n[t] - 192;
    return e(t + 1 + r), gp(n, t, t + 1, r);
  } else if (n[t] >= 184) {
    const r = n[t] - 183;
    e(t + 1 + r);
    const i = pp(n, t + 1, r);
    e(t + 1 + r + i);
    const s = xt(n.slice(t + 1 + r, t + 1 + r + i));
    return { consumed: 1 + r + i, result: s };
  } else if (n[t] >= 128) {
    const r = n[t] - 128;
    e(t + 1 + r);
    const i = xt(n.slice(t + 1, t + 1 + r));
    return { consumed: 1 + r, result: i };
  }
  return { consumed: 1, result: z2(n[t]) };
}
function Yc(n) {
  const t = $t(n, "data"),
    e = fm(t, 0);
  return (
    Z(e.consumed === t.length, "unexpected junk after rlp payload", "data", n),
    e.result
  );
}
function yp(n) {
  const t = [];
  for (; n; ) t.unshift(n & 255), (n >>= 8);
  return t;
}
function hm(n) {
  if (Array.isArray(n)) {
    let r = [];
    if (
      (n.forEach(function (s) {
        r = r.concat(hm(s));
      }),
      r.length <= 55)
    )
      return r.unshift(192 + r.length), r;
    const i = yp(r.length);
    return i.unshift(247 + i.length), i.concat(r);
  }
  const t = Array.prototype.slice.call($t(n, "object"));
  if (t.length === 1 && t[0] <= 127) return t;
  if (t.length <= 55) return t.unshift(128 + t.length), t;
  const e = yp(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
const mp = "0123456789abcdef";
function ls(n) {
  let t = "0x";
  for (const e of hm(n)) (t += mp[e >> 4]), (t += mp[e & 15]);
  return t;
}
const H2 = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
function bB(n, t) {
  let e = 18;
  if (typeof t == "string") {
    const r = H2.indexOf(t);
    Z(r >= 0, "invalid unit", "unit", t), (e = 3 * r);
  } else t != null && (e = Gt(t, "unit"));
  return ju.fromValue(n, e, { decimals: e, width: 512 }).toString();
}
function AB(n, t) {
  Z(typeof n == "string", "value must be a string", "value", n);
  let e = 18;
  return (
    (e = Gt(t, "unit")), ju.fromString(n, { decimals: e, width: 512 }).value
  );
}
const Sr = 32,
  Sh = new Uint8Array(Sr),
  G2 = ["then"],
  gu = {},
  dm = new WeakMap();
function As(n) {
  return dm.get(n);
}
function wp(n, t) {
  dm.set(n, t);
}
function nc(n, t) {
  const e = new Error(
    `deferred error during ABI decoding triggered accessing ${n}`
  );
  throw ((e.error = t), e);
}
function Ih(n, t, e) {
  return n.indexOf(null) >= 0
    ? t.map((r, i) => (r instanceof Fa ? Ih(As(r), r, e) : r))
    : n.reduce((r, i, s) => {
        let o = t.getValue(i);
        return (
          i in r || (e && o instanceof Fa && (o = Ih(As(o), o, e)), (r[i] = o)),
          r
        );
      }, {});
}
var Yo;
const Oo = class Oo extends Array {
  constructor(...e) {
    const r = e[0];
    let i = e[1],
      s = (e[2] || []).slice(),
      o = !0;
    r !== gu && ((i = e), (s = []), (o = !1));
    super(i.length);
    ut(this, Yo);
    i.forEach((f, h) => {
      this[h] = f;
    });
    const a = s.reduce(
      (f, h) => (typeof h == "string" && f.set(h, (f.get(h) || 0) + 1), f),
      new Map()
    );
    if (
      (wp(
        this,
        Object.freeze(
          i.map((f, h) => {
            const b = s[h];
            return b != null && a.get(b) === 1 ? b : null;
          })
        )
      ),
      Q(this, Yo, []),
      C(this, Yo) == null && C(this, Yo),
      !o)
    )
      return;
    Object.freeze(this);
    const c = new Proxy(this, {
      get: (f, h, b) => {
        if (typeof h == "string") {
          if (h.match(/^[0-9]+$/)) {
            const P = Gt(h, "%index");
            if (P < 0 || P >= this.length)
              throw new RangeError("out of result range");
            const M = f[P];
            return M instanceof Error && nc(`index ${P}`, M), M;
          }
          if (G2.indexOf(h) >= 0) return Reflect.get(f, h, b);
          const S = f[h];
          if (S instanceof Function)
            return function (...P) {
              return S.apply(this === b ? f : this, P);
            };
          if (!(h in f)) return f.getValue.apply(this === b ? f : this, [h]);
        }
        return Reflect.get(f, h, b);
      },
    });
    return wp(c, As(this)), c;
  }
  toArray(e) {
    const r = [];
    return (
      this.forEach((i, s) => {
        i instanceof Error && nc(`index ${s}`, i),
          e && i instanceof Oo && (i = i.toArray(e)),
          r.push(i);
      }),
      r
    );
  }
  toObject(e) {
    const r = As(this);
    return r.reduce(
      (i, s, o) => (
        ht(s != null, `value at index ${o} unnamed`, "UNSUPPORTED_OPERATION", {
          operation: "toObject()",
        }),
        Ih(r, this, e)
      ),
      {}
    );
  }
  slice(e, r) {
    e == null && (e = 0),
      e < 0 && ((e += this.length), e < 0 && (e = 0)),
      r == null && (r = this.length),
      r < 0 && ((r += this.length), r < 0 && (r = 0)),
      r > this.length && (r = this.length);
    const i = As(this),
      s = [],
      o = [];
    for (let a = e; a < r; a++) s.push(this[a]), o.push(i[a]);
    return new Oo(gu, s, o);
  }
  filter(e, r) {
    const i = As(this),
      s = [],
      o = [];
    for (let a = 0; a < this.length; a++) {
      const c = this[a];
      c instanceof Error && nc(`index ${a}`, c),
        e.call(r, c, a, this) && (s.push(c), o.push(i[a]));
    }
    return new Oo(gu, s, o);
  }
  map(e, r) {
    const i = [];
    for (let s = 0; s < this.length; s++) {
      const o = this[s];
      o instanceof Error && nc(`index ${s}`, o), i.push(e.call(r, o, s, this));
    }
    return i;
  }
  getValue(e) {
    const r = As(this).indexOf(e);
    if (r === -1) return;
    const i = this[r];
    return (
      i instanceof Error && nc(`property ${JSON.stringify(e)}`, i.error), i
    );
  }
  static fromItems(e, r) {
    return new Oo(gu, e, r);
  }
};
Yo = new WeakMap();
let Fa = Oo;
function bp(n) {
  let t = Qe(n);
  return (
    ht(t.length <= Sr, "value out-of-bounds", "BUFFER_OVERRUN", {
      buffer: t,
      length: Sr,
      offset: t.length,
    }),
    t.length !== Sr && (t = vr(Fe([Sh.slice(t.length % Sr), t]))),
    t
  );
}
class Ri {
  constructor(t, e, r, i) {
    tt(this, "name");
    tt(this, "type");
    tt(this, "localName");
    tt(this, "dynamic");
    Ct(
      this,
      { name: t, type: e, localName: r, dynamic: i },
      {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean",
      }
    );
  }
  _throwError(t, e) {
    Z(!1, t, this.localName, e);
  }
}
var ai, Ds, Xo, Su;
class Bh {
  constructor() {
    ut(this, Xo);
    ut(this, ai);
    ut(this, Ds);
    Q(this, ai, []), Q(this, Ds, 0);
  }
  get data() {
    return Fe(C(this, ai));
  }
  get length() {
    return C(this, Ds);
  }
  appendWriter(t) {
    return pt(this, Xo, Su).call(this, vr(t.data));
  }
  writeBytes(t) {
    let e = vr(t);
    const r = e.length % Sr;
    return r && (e = vr(Fe([e, Sh.slice(r)]))), pt(this, Xo, Su).call(this, e);
  }
  writeValue(t) {
    return pt(this, Xo, Su).call(this, bp(t));
  }
  writeUpdatableValue() {
    const t = C(this, ai).length;
    return (
      C(this, ai).push(Sh),
      Q(this, Ds, C(this, Ds) + Sr),
      (e) => {
        C(this, ai)[t] = bp(e);
      }
    );
  }
}
(ai = new WeakMap()),
  (Ds = new WeakMap()),
  (Xo = new WeakSet()),
  (Su = function (t) {
    return C(this, ai).push(t), Q(this, Ds, C(this, Ds) + t.length), t.length;
  });
var Nr, Wr, zs, Hs, Vi, uo, Ph, pm;
const t0 = class t0 {
  constructor(t, e, r) {
    ut(this, uo);
    tt(this, "allowLoose");
    ut(this, Nr);
    ut(this, Wr);
    ut(this, zs);
    ut(this, Hs);
    ut(this, Vi);
    Ct(this, { allowLoose: !!e }),
      Q(this, Nr, vr(t)),
      Q(this, zs, 0),
      Q(this, Hs, null),
      Q(this, Vi, r ?? 1024),
      Q(this, Wr, 0);
  }
  get data() {
    return xt(C(this, Nr));
  }
  get dataLength() {
    return C(this, Nr).length;
  }
  get consumed() {
    return C(this, Wr);
  }
  get bytes() {
    return new Uint8Array(C(this, Nr));
  }
  subReader(t) {
    const e = new t0(
      C(this, Nr).slice(C(this, Wr) + t),
      this.allowLoose,
      C(this, Vi)
    );
    return Q(e, Hs, this), e;
  }
  readBytes(t, e) {
    let r = pt(this, uo, pm).call(this, 0, t, !!e);
    return (
      pt(this, uo, Ph).call(this, t),
      Q(this, Wr, C(this, Wr) + r.length),
      r.slice(0, t)
    );
  }
  readValue() {
    return _l(this.readBytes(Sr));
  }
  readIndex() {
    return E2(this.readBytes(Sr));
  }
};
(Nr = new WeakMap()),
  (Wr = new WeakMap()),
  (zs = new WeakMap()),
  (Hs = new WeakMap()),
  (Vi = new WeakMap()),
  (uo = new WeakSet()),
  (Ph = function (t) {
    var e;
    if (C(this, Hs)) return pt((e = C(this, Hs)), uo, Ph).call(e, t);
    Q(this, zs, C(this, zs) + t),
      ht(
        C(this, Vi) < 1 || C(this, zs) <= C(this, Vi) * this.dataLength,
        `compressed ABI data exceeds inflation ratio of ${C(
          this,
          Vi
        )} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,
        "BUFFER_OVERRUN",
        {
          buffer: vr(C(this, Nr)),
          offset: C(this, Wr),
          length: t,
          info: { bytesRead: C(this, zs), dataLength: this.dataLength },
        }
      );
  }),
  (pm = function (t, e, r) {
    let i = Math.ceil(e / Sr) * Sr;
    return (
      C(this, Wr) + i > C(this, Nr).length &&
        (this.allowLoose && r && C(this, Wr) + e <= C(this, Nr).length
          ? (i = e)
          : ht(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
              buffer: vr(C(this, Nr)),
              length: C(this, Nr).length,
              offset: C(this, Wr) + i,
            })),
      C(this, Nr).slice(C(this, Wr), C(this, Wr) + i)
    );
  });
let Rh = t0;
function Zu(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function Ld(n, ...t) {
  if (!(n instanceof Uint8Array)) throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(n.length))
    throw new Error(
      `Expected Uint8Array of length ${t}, not of length=${n.length}`
    );
}
function K2(n) {
  if (typeof n != "function" || typeof n.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Zu(n.outputLen), Zu(n.blockLen);
}
function Da(n, t = !0) {
  if (n.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && n.finished) throw new Error("Hash#digest() has already been called");
}
function gm(n, t) {
  Ld(n);
  const e = t.outputLen;
  if (n.length < e)
    throw new Error(
      `digestInto() expects output buffer of length at least ${e}`
    );
}
const Qf =
  typeof globalThis == "object" && "crypto" in globalThis
    ? globalThis.crypto
    : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ym =
    (n) => n instanceof Uint8Array,
  V2 = (n) =>
    new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4)),
  Jf = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength),
  In = (n, t) => (n << (32 - t)) | (n >>> t),
  W2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!W2) throw new Error("Non little-endian hardware is not supported");
function q2(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function Ol(n) {
  if ((typeof n == "string" && (n = q2(n)), !ym(n)))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
function $2(...n) {
  const t = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let e = 0;
  return (
    n.forEach((r) => {
      if (!ym(r)) throw new Error("Uint8Array expected");
      t.set(r, e), (e += r.length);
    }),
    t
  );
}
class Ud {
  clone() {
    return this._cloneInto();
  }
}
function Fd(n) {
  const t = (r) => n().update(Ol(r)).digest(),
    e = n();
  return (
    (t.outputLen = e.outputLen),
    (t.blockLen = e.blockLen),
    (t.create = () => n()),
    t
  );
}
function Q2(n = 32) {
  if (Qf && typeof Qf.getRandomValues == "function")
    return Qf.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
class mm extends Ud {
  constructor(t, e) {
    super(), (this.finished = !1), (this.destroyed = !1), K2(t);
    const r = Ol(e);
    if (((this.iHash = t.create()), typeof this.iHash.update != "function"))
      throw new Error("Expected instance of class which extends utils.Hash");
    (this.blockLen = this.iHash.blockLen),
      (this.outputLen = this.iHash.outputLen);
    const i = this.blockLen,
      s = new Uint8Array(i);
    s.set(r.length > i ? t.create().update(r).digest() : r);
    for (let o = 0; o < s.length; o++) s[o] ^= 54;
    this.iHash.update(s), (this.oHash = t.create());
    for (let o = 0; o < s.length; o++) s[o] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(t) {
    return Da(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Da(this),
      Ld(t, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(t),
      this.oHash.update(t),
      this.oHash.digestInto(t),
      this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const {
      oHash: e,
      iHash: r,
      finished: i,
      destroyed: s,
      blockLen: o,
      outputLen: a,
    } = this;
    return (
      (t = t),
      (t.finished = i),
      (t.destroyed = s),
      (t.blockLen = o),
      (t.outputLen = a),
      (t.oHash = e._cloneInto(t.oHash)),
      (t.iHash = r._cloneInto(t.iHash)),
      t
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const wm = (n, t, e) => new mm(n, t).update(e).digest();
wm.create = (n, t) => new mm(n, t);
function J2(n, t, e, r) {
  if (typeof n.setBigUint64 == "function") return n.setBigUint64(t, e, r);
  const i = BigInt(32),
    s = BigInt(4294967295),
    o = Number((e >> i) & s),
    a = Number(e & s),
    c = r ? 4 : 0,
    f = r ? 0 : 4;
  n.setUint32(t + c, o, r), n.setUint32(t + f, a, r);
}
class bm extends Ud {
  constructor(t, e, r, i) {
    super(),
      (this.blockLen = t),
      (this.outputLen = e),
      (this.padOffset = r),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(t)),
      (this.view = Jf(this.buffer));
  }
  update(t) {
    Da(this);
    const { view: e, buffer: r, blockLen: i } = this;
    t = Ol(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const c = Jf(t);
        for (; i <= s - o; o += i) this.process(c, o);
        continue;
      }
      r.set(t.subarray(o, o + a), this.pos),
        (this.pos += a),
        (o += a),
        this.pos === i && (this.process(e, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    Da(this), gm(t, this), (this.finished = !0);
    const { buffer: e, view: r, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    (e[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > i - o && (this.process(r, 0), (o = 0));
    for (let b = o; b < i; b++) e[b] = 0;
    J2(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const a = Jf(t),
      c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const f = c / 4,
      h = this.get();
    if (f > h.length) throw new Error("_sha2: outputLen bigger than state");
    for (let b = 0; b < f; b++) a.setUint32(4 * b, h[b], s);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const r = t.slice(0, e);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const {
      blockLen: e,
      buffer: r,
      length: i,
      finished: s,
      destroyed: o,
      pos: a,
    } = this;
    return (
      (t.length = i),
      (t.pos = a),
      (t.finished = s),
      (t.destroyed = o),
      i % e && t.buffer.set(r),
      t
    );
  }
}
const j2 = (n, t, e) => (n & t) ^ (~n & e),
  Z2 = (n, t, e) => (n & t) ^ (n & e) ^ (t & e),
  Y2 = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Mi = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Li = new Uint32Array(64);
class X2 extends bm {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Mi[0] | 0),
      (this.B = Mi[1] | 0),
      (this.C = Mi[2] | 0),
      (this.D = Mi[3] | 0),
      (this.E = Mi[4] | 0),
      (this.F = Mi[5] | 0),
      (this.G = Mi[6] | 0),
      (this.H = Mi[7] | 0);
  }
  get() {
    const { A: t, B: e, C: r, D: i, E: s, F: o, G: a, H: c } = this;
    return [t, e, r, i, s, o, a, c];
  }
  set(t, e, r, i, s, o, a, c) {
    (this.A = t | 0),
      (this.B = e | 0),
      (this.C = r | 0),
      (this.D = i | 0),
      (this.E = s | 0),
      (this.F = o | 0),
      (this.G = a | 0),
      (this.H = c | 0);
  }
  process(t, e) {
    for (let b = 0; b < 16; b++, e += 4) Li[b] = t.getUint32(e, !1);
    for (let b = 16; b < 64; b++) {
      const S = Li[b - 15],
        P = Li[b - 2],
        M = In(S, 7) ^ In(S, 18) ^ (S >>> 3),
        N = In(P, 17) ^ In(P, 19) ^ (P >>> 10);
      Li[b] = (N + Li[b - 7] + M + Li[b - 16]) | 0;
    }
    let { A: r, B: i, C: s, D: o, E: a, F: c, G: f, H: h } = this;
    for (let b = 0; b < 64; b++) {
      const S = In(a, 6) ^ In(a, 11) ^ In(a, 25),
        P = (h + S + j2(a, c, f) + Y2[b] + Li[b]) | 0,
        N = ((In(r, 2) ^ In(r, 13) ^ In(r, 22)) + Z2(r, i, s)) | 0;
      (h = f),
        (f = c),
        (c = a),
        (a = (o + P) | 0),
        (o = s),
        (s = i),
        (i = r),
        (r = (P + N) | 0);
    }
    (r = (r + this.A) | 0),
      (i = (i + this.B) | 0),
      (s = (s + this.C) | 0),
      (o = (o + this.D) | 0),
      (a = (a + this.E) | 0),
      (c = (c + this.F) | 0),
      (f = (f + this.G) | 0),
      (h = (h + this.H) | 0),
      this.set(r, i, s, o, a, c, f, h);
  }
  roundClean() {
    Li.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Am = Fd(() => new X2()),
  yu = BigInt(2 ** 32 - 1),
  Ch = BigInt(32);
function Em(n, t = !1) {
  return t
    ? { h: Number(n & yu), l: Number((n >> Ch) & yu) }
    : { h: Number((n >> Ch) & yu) | 0, l: Number(n & yu) | 0 };
}
function xm(n, t = !1) {
  let e = new Uint32Array(n.length),
    r = new Uint32Array(n.length);
  for (let i = 0; i < n.length; i++) {
    const { h: s, l: o } = Em(n[i], t);
    [e[i], r[i]] = [s, o];
  }
  return [e, r];
}
const tk = (n, t) => (BigInt(n >>> 0) << Ch) | BigInt(t >>> 0),
  ek = (n, t, e) => n >>> e,
  rk = (n, t, e) => (n << (32 - e)) | (t >>> e),
  nk = (n, t, e) => (n >>> e) | (t << (32 - e)),
  ik = (n, t, e) => (n << (32 - e)) | (t >>> e),
  sk = (n, t, e) => (n << (64 - e)) | (t >>> (e - 32)),
  ok = (n, t, e) => (n >>> (e - 32)) | (t << (64 - e)),
  ak = (n, t) => t,
  ck = (n, t) => n,
  km = (n, t, e) => (n << e) | (t >>> (32 - e)),
  vm = (n, t, e) => (t << e) | (n >>> (32 - e)),
  Sm = (n, t, e) => (t << (e - 32)) | (n >>> (64 - e)),
  Im = (n, t, e) => (n << (e - 32)) | (t >>> (64 - e));
function uk(n, t, e, r) {
  const i = (t >>> 0) + (r >>> 0);
  return { h: (n + e + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
const lk = (n, t, e) => (n >>> 0) + (t >>> 0) + (e >>> 0),
  fk = (n, t, e, r) => (t + e + r + ((n / 2 ** 32) | 0)) | 0,
  hk = (n, t, e, r) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0),
  dk = (n, t, e, r, i) => (t + e + r + i + ((n / 2 ** 32) | 0)) | 0,
  pk = (n, t, e, r, i) =>
    (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0),
  gk = (n, t, e, r, i, s) => (t + e + r + i + s + ((n / 2 ** 32) | 0)) | 0,
  Vt = {
    fromBig: Em,
    split: xm,
    toBig: tk,
    shrSH: ek,
    shrSL: rk,
    rotrSH: nk,
    rotrSL: ik,
    rotrBH: sk,
    rotrBL: ok,
    rotr32H: ak,
    rotr32L: ck,
    rotlSH: km,
    rotlSL: vm,
    rotlBH: Sm,
    rotlBL: Im,
    add: uk,
    add3L: lk,
    add3H: fk,
    add4L: hk,
    add4H: dk,
    add5H: gk,
    add5L: pk,
  },
  [yk, mk] = Vt.split(
    [
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817",
    ].map((n) => BigInt(n))
  ),
  Ui = new Uint32Array(80),
  Fi = new Uint32Array(80);
class wk extends bm {
  constructor() {
    super(128, 64, 16, !1),
      (this.Ah = 1779033703),
      (this.Al = -205731576),
      (this.Bh = -1150833019),
      (this.Bl = -2067093701),
      (this.Ch = 1013904242),
      (this.Cl = -23791573),
      (this.Dh = -1521486534),
      (this.Dl = 1595750129),
      (this.Eh = 1359893119),
      (this.El = -1377402159),
      (this.Fh = -1694144372),
      (this.Fl = 725511199),
      (this.Gh = 528734635),
      (this.Gl = -79577749),
      (this.Hh = 1541459225),
      (this.Hl = 327033209);
  }
  get() {
    const {
      Ah: t,
      Al: e,
      Bh: r,
      Bl: i,
      Ch: s,
      Cl: o,
      Dh: a,
      Dl: c,
      Eh: f,
      El: h,
      Fh: b,
      Fl: S,
      Gh: P,
      Gl: M,
      Hh: N,
      Hl: D,
    } = this;
    return [t, e, r, i, s, o, a, c, f, h, b, S, P, M, N, D];
  }
  set(t, e, r, i, s, o, a, c, f, h, b, S, P, M, N, D) {
    (this.Ah = t | 0),
      (this.Al = e | 0),
      (this.Bh = r | 0),
      (this.Bl = i | 0),
      (this.Ch = s | 0),
      (this.Cl = o | 0),
      (this.Dh = a | 0),
      (this.Dl = c | 0),
      (this.Eh = f | 0),
      (this.El = h | 0),
      (this.Fh = b | 0),
      (this.Fl = S | 0),
      (this.Gh = P | 0),
      (this.Gl = M | 0),
      (this.Hh = N | 0),
      (this.Hl = D | 0);
  }
  process(t, e) {
    for (let V = 0; V < 16; V++, e += 4)
      (Ui[V] = t.getUint32(e)), (Fi[V] = t.getUint32((e += 4)));
    for (let V = 16; V < 80; V++) {
      const et = Ui[V - 15] | 0,
        it = Fi[V - 15] | 0,
        X = Vt.rotrSH(et, it, 1) ^ Vt.rotrSH(et, it, 8) ^ Vt.shrSH(et, it, 7),
        nt = Vt.rotrSL(et, it, 1) ^ Vt.rotrSL(et, it, 8) ^ Vt.shrSL(et, it, 7),
        R = Ui[V - 2] | 0,
        x = Fi[V - 2] | 0,
        B = Vt.rotrSH(R, x, 19) ^ Vt.rotrBH(R, x, 61) ^ Vt.shrSH(R, x, 6),
        F = Vt.rotrSL(R, x, 19) ^ Vt.rotrBL(R, x, 61) ^ Vt.shrSL(R, x, 6),
        v = Vt.add4L(nt, F, Fi[V - 7], Fi[V - 16]),
        y = Vt.add4H(v, X, B, Ui[V - 7], Ui[V - 16]);
      (Ui[V] = y | 0), (Fi[V] = v | 0);
    }
    let {
      Ah: r,
      Al: i,
      Bh: s,
      Bl: o,
      Ch: a,
      Cl: c,
      Dh: f,
      Dl: h,
      Eh: b,
      El: S,
      Fh: P,
      Fl: M,
      Gh: N,
      Gl: D,
      Hh: q,
      Hl: z,
    } = this;
    for (let V = 0; V < 80; V++) {
      const et =
          Vt.rotrSH(b, S, 14) ^ Vt.rotrSH(b, S, 18) ^ Vt.rotrBH(b, S, 41),
        it = Vt.rotrSL(b, S, 14) ^ Vt.rotrSL(b, S, 18) ^ Vt.rotrBL(b, S, 41),
        X = (b & P) ^ (~b & N),
        nt = (S & M) ^ (~S & D),
        R = Vt.add5L(z, it, nt, mk[V], Fi[V]),
        x = Vt.add5H(R, q, et, X, yk[V], Ui[V]),
        B = R | 0,
        F = Vt.rotrSH(r, i, 28) ^ Vt.rotrBH(r, i, 34) ^ Vt.rotrBH(r, i, 39),
        v = Vt.rotrSL(r, i, 28) ^ Vt.rotrBL(r, i, 34) ^ Vt.rotrBL(r, i, 39),
        y = (r & s) ^ (r & a) ^ (s & a),
        u = (i & o) ^ (i & c) ^ (o & c);
      (q = N | 0),
        (z = D | 0),
        (N = P | 0),
        (D = M | 0),
        (P = b | 0),
        (M = S | 0),
        ({ h: b, l: S } = Vt.add(f | 0, h | 0, x | 0, B | 0)),
        (f = a | 0),
        (h = c | 0),
        (a = s | 0),
        (c = o | 0),
        (s = r | 0),
        (o = i | 0);
      const l = Vt.add3L(B, v, u);
      (r = Vt.add3H(l, x, F, y)), (i = l | 0);
    }
    ({ h: r, l: i } = Vt.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)),
      ({ h: s, l: o } = Vt.add(this.Bh | 0, this.Bl | 0, s | 0, o | 0)),
      ({ h: a, l: c } = Vt.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0)),
      ({ h: f, l: h } = Vt.add(this.Dh | 0, this.Dl | 0, f | 0, h | 0)),
      ({ h: b, l: S } = Vt.add(this.Eh | 0, this.El | 0, b | 0, S | 0)),
      ({ h: P, l: M } = Vt.add(this.Fh | 0, this.Fl | 0, P | 0, M | 0)),
      ({ h: N, l: D } = Vt.add(this.Gh | 0, this.Gl | 0, N | 0, D | 0)),
      ({ h: q, l: z } = Vt.add(this.Hh | 0, this.Hl | 0, q | 0, z | 0)),
      this.set(r, i, s, o, a, c, f, h, b, S, P, M, N, D, q, z);
  }
  roundClean() {
    Ui.fill(0), Fi.fill(0);
  }
  destroy() {
    this.buffer.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const bk = Fd(() => new wk());
function Ak() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof d0 < "u") return d0;
  throw new Error("unable to locate global object");
}
const Ap = Ak();
Ap.crypto || Ap.msCrypto;
function Ek(n) {
  switch (n) {
    case "sha256":
      return Am.create();
    case "sha512":
      return bk.create();
  }
  Z(!1, "invalid hashing algorithm name", "algorithm", n);
}
const [Bm, Rm, Pm] = [[], [], []],
  xk = BigInt(0),
  ic = BigInt(1),
  kk = BigInt(2),
  vk = BigInt(7),
  Sk = BigInt(256),
  Ik = BigInt(113);
for (let n = 0, t = ic, e = 1, r = 0; n < 24; n++) {
  ([e, r] = [r, (2 * e + 3 * r) % 5]),
    Bm.push(2 * (5 * r + e)),
    Rm.push((((n + 1) * (n + 2)) / 2) % 64);
  let i = xk;
  for (let s = 0; s < 7; s++)
    (t = ((t << ic) ^ ((t >> vk) * Ik)) % Sk),
      t & kk && (i ^= ic << ((ic << BigInt(s)) - ic));
  Pm.push(i);
}
const [Bk, Rk] = xm(Pm, !0),
  Ep = (n, t, e) => (e > 32 ? Sm(n, t, e) : km(n, t, e)),
  xp = (n, t, e) => (e > 32 ? Im(n, t, e) : vm(n, t, e));
function Pk(n, t = 24) {
  const e = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      e[o] = n[o] ^ n[o + 10] ^ n[o + 20] ^ n[o + 30] ^ n[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10,
        c = (o + 2) % 10,
        f = e[c],
        h = e[c + 1],
        b = Ep(f, h, 1) ^ e[a],
        S = xp(f, h, 1) ^ e[a + 1];
      for (let P = 0; P < 50; P += 10) (n[o + P] ^= b), (n[o + P + 1] ^= S);
    }
    let i = n[2],
      s = n[3];
    for (let o = 0; o < 24; o++) {
      const a = Rm[o],
        c = Ep(i, s, a),
        f = xp(i, s, a),
        h = Bm[o];
      (i = n[h]), (s = n[h + 1]), (n[h] = c), (n[h + 1] = f);
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) e[a] = n[o + a];
      for (let a = 0; a < 10; a++)
        n[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    (n[0] ^= Bk[r]), (n[1] ^= Rk[r]);
  }
  e.fill(0);
}
class Dd extends Ud {
  constructor(t, e, r, i = !1, s = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = e),
      (this.outputLen = r),
      (this.enableXOF = i),
      (this.rounds = s),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      Zu(r),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error("Sha3 supports only keccak-f1600 function");
    (this.state = new Uint8Array(200)), (this.state32 = V2(this.state));
  }
  keccak() {
    Pk(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(t) {
    Da(this);
    const { blockLen: e, state: r } = this;
    t = Ol(t);
    const i = t.length;
    for (let s = 0; s < i; ) {
      const o = Math.min(e - this.pos, i - s);
      for (let a = 0; a < o; a++) r[this.pos++] ^= t[s++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: e, pos: r, blockLen: i } = this;
    (t[r] ^= e),
      (e & 128) !== 0 && r === i - 1 && this.keccak(),
      (t[i - 1] ^= 128),
      this.keccak();
  }
  writeInto(t) {
    Da(this, !1), Ld(t), this.finish();
    const e = this.state,
      { blockLen: r } = this;
    for (let i = 0, s = t.length; i < s; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, s - i);
      t.set(e.subarray(this.posOut, this.posOut + o), i),
        (this.posOut += o),
        (i += o);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Zu(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((gm(t, this), this.finished))
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(t) {
    const {
      blockLen: e,
      suffix: r,
      outputLen: i,
      rounds: s,
      enableXOF: o,
    } = this;
    return (
      t || (t = new Dd(e, r, i, o, s)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = s),
      (t.suffix = r),
      (t.outputLen = i),
      (t.enableXOF = o),
      (t.destroyed = this.destroyed),
      t
    );
  }
}
const Ck = (n, t, e) => Fd(() => new Dd(t, n, e)),
  Nk = Ck(1, 136, 256 / 8);
let Cm = !1;
const Nm = function (n) {
  return Nk(n);
};
let Tm = Nm;
function qe(n) {
  const t = $t(n, "data");
  return xt(Tm(t));
}
qe._ = Nm;
qe.lock = function () {
  Cm = !0;
};
qe.register = function (n) {
  if (Cm) throw new TypeError("keccak256 is locked");
  Tm = n;
};
Object.freeze(qe);
const _m = function (n) {
  return Ek("sha256").update(n).digest();
};
let Om = _m,
  Mm = !1;
function Za(n) {
  const t = $t(n, "data");
  return xt(Om(t));
}
Za._ = _m;
Za.lock = function () {
  Mm = !0;
};
Za.register = function (n) {
  if (Mm) throw new Error("sha256 is locked");
  Om = n;
};
Object.freeze(Za);
Object.freeze(Za);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Lm =
    BigInt(0),
  Ml = BigInt(1),
  Tk = BigInt(2),
  Ll = (n) => n instanceof Uint8Array,
  _k = Array.from({ length: 256 }, (n, t) => t.toString(16).padStart(2, "0"));
function za(n) {
  if (!Ll(n)) throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < n.length; e++) t += _k[n[e]];
  return t;
}
function Um(n) {
  const t = n.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function zd(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
function Ha(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const t = n.length;
  if (t % 2)
    throw new Error(
      "padded hex string expected, got unpadded hex of length " + t
    );
  const e = new Uint8Array(t / 2);
  for (let r = 0; r < e.length; r++) {
    const i = r * 2,
      s = n.slice(i, i + 2),
      o = Number.parseInt(s, 16);
    if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
    e[r] = o;
  }
  return e;
}
function to(n) {
  return zd(za(n));
}
function Hd(n) {
  if (!Ll(n)) throw new Error("Uint8Array expected");
  return zd(za(Uint8Array.from(n).reverse()));
}
function Ga(n, t) {
  return Ha(n.toString(16).padStart(t * 2, "0"));
}
function Gd(n, t) {
  return Ga(n, t).reverse();
}
function Ok(n) {
  return Ha(Um(n));
}
function fn(n, t, e) {
  let r;
  if (typeof t == "string")
    try {
      r = Ha(t);
    } catch (s) {
      throw new Error(`${n} must be valid hex string, got "${t}". Cause: ${s}`);
    }
  else if (Ll(t)) r = Uint8Array.from(t);
  else throw new Error(`${n} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof e == "number" && i !== e)
    throw new Error(`${n} expected ${e} bytes, got ${i}`);
  return r;
}
function Ec(...n) {
  const t = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let e = 0;
  return (
    n.forEach((r) => {
      if (!Ll(r)) throw new Error("Uint8Array expected");
      t.set(r, e), (e += r.length);
    }),
    t
  );
}
function Mk(n, t) {
  if (n.length !== t.length) return !1;
  for (let e = 0; e < n.length; e++) if (n[e] !== t[e]) return !1;
  return !0;
}
function Lk(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function Uk(n) {
  let t;
  for (t = 0; n > Lm; n >>= Ml, t += 1);
  return t;
}
function Fk(n, t) {
  return (n >> BigInt(t)) & Ml;
}
const Dk = (n, t, e) => n | ((e ? Ml : Lm) << BigInt(t)),
  Kd = (n) => (Tk << BigInt(n - 1)) - Ml,
  jf = (n) => new Uint8Array(n),
  kp = (n) => Uint8Array.from(n);
function Fm(n, t, e) {
  if (typeof n != "number" || n < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function") throw new Error("hmacFn must be a function");
  let r = jf(n),
    i = jf(n),
    s = 0;
  const o = () => {
      r.fill(1), i.fill(0), (s = 0);
    },
    a = (...b) => e(i, r, ...b),
    c = (b = jf()) => {
      (i = a(kp([0]), b)),
        (r = a()),
        b.length !== 0 && ((i = a(kp([1]), b)), (r = a()));
    },
    f = () => {
      if (s++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let b = 0;
      const S = [];
      for (; b < t; ) {
        r = a();
        const P = r.slice();
        S.push(P), (b += r.length);
      }
      return Ec(...S);
    };
  return (b, S) => {
    o(), c(b);
    let P;
    for (; !(P = S(f())); ) c();
    return o(), P;
  };
}
const zk = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || n instanceof Uint8Array,
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, t) => t.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen),
};
function Xc(n, t, e = {}) {
  const r = (i, s, o) => {
    const a = zk[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const c = n[i];
    if (!(o && c === void 0) && !a(c, n))
      throw new Error(
        `Invalid param ${String(i)}=${c} (${typeof c}), expected ${s}`
      );
  };
  for (const [i, s] of Object.entries(t)) r(i, s, !1);
  for (const [i, s] of Object.entries(e)) r(i, s, !0);
  return n;
}
const Hk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      bitGet: Fk,
      bitLen: Uk,
      bitMask: Kd,
      bitSet: Dk,
      bytesToHex: za,
      bytesToNumberBE: to,
      bytesToNumberLE: Hd,
      concatBytes: Ec,
      createHmacDrbg: Fm,
      ensureBytes: fn,
      equalBytes: Mk,
      hexToBytes: Ha,
      hexToNumber: zd,
      numberToBytesBE: Ga,
      numberToBytesLE: Gd,
      numberToHexUnpadded: Um,
      numberToVarBytesBE: Ok,
      utf8ToBytes: Lk,
      validateObject: Xc,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const tr =
    BigInt(0),
  He = BigInt(1),
  Es = BigInt(2),
  Gk = BigInt(3),
  Nh = BigInt(4),
  vp = BigInt(5),
  Sp = BigInt(8);
BigInt(9);
BigInt(16);
function Mr(n, t) {
  const e = n % t;
  return e >= tr ? e : t + e;
}
function Kk(n, t, e) {
  if (e <= tr || t < tr) throw new Error("Expected power/modulo > 0");
  if (e === He) return tr;
  let r = He;
  for (; t > tr; ) t & He && (r = (r * n) % e), (n = (n * n) % e), (t >>= He);
  return r;
}
function Jr(n, t, e) {
  let r = n;
  for (; t-- > tr; ) (r *= r), (r %= e);
  return r;
}
function Th(n, t) {
  if (n === tr || t <= tr)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${t}`);
  let e = Mr(n, t),
    r = t,
    i = tr,
    s = He;
  for (; e !== tr; ) {
    const a = r / e,
      c = r % e,
      f = i - s * a;
    (r = e), (e = c), (i = s), (s = f);
  }
  if (r !== He) throw new Error("invert: does not exist");
  return Mr(i, t);
}
function Vk(n) {
  const t = (n - He) / Es;
  let e, r, i;
  for (e = n - He, r = 0; e % Es === tr; e /= Es, r++);
  for (i = Es; i < n && Kk(i, t, n) !== n - He; i++);
  if (r === 1) {
    const o = (n + He) / Nh;
    return function (c, f) {
      const h = c.pow(f, o);
      if (!c.eql(c.sqr(h), f)) throw new Error("Cannot find square root");
      return h;
    };
  }
  const s = (e + He) / Es;
  return function (a, c) {
    if (a.pow(c, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let f = r,
      h = a.pow(a.mul(a.ONE, i), e),
      b = a.pow(c, s),
      S = a.pow(c, e);
    for (; !a.eql(S, a.ONE); ) {
      if (a.eql(S, a.ZERO)) return a.ZERO;
      let P = 1;
      for (let N = a.sqr(S); P < f && !a.eql(N, a.ONE); P++) N = a.sqr(N);
      const M = a.pow(h, He << BigInt(f - P - 1));
      (h = a.sqr(M)), (b = a.mul(b, M)), (S = a.mul(S, h)), (f = P);
    }
    return b;
  };
}
function Wk(n) {
  if (n % Nh === Gk) {
    const t = (n + He) / Nh;
    return function (r, i) {
      const s = r.pow(i, t);
      if (!r.eql(r.sqr(s), i)) throw new Error("Cannot find square root");
      return s;
    };
  }
  if (n % Sp === vp) {
    const t = (n - vp) / Sp;
    return function (r, i) {
      const s = r.mul(i, Es),
        o = r.pow(s, t),
        a = r.mul(i, o),
        c = r.mul(r.mul(a, Es), o),
        f = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(f), i)) throw new Error("Cannot find square root");
      return f;
    };
  }
  return Vk(n);
}
const qk = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN",
];
function $k(n) {
  const t = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger",
    },
    e = qk.reduce((r, i) => ((r[i] = "function"), r), t);
  return Xc(n, e);
}
function Qk(n, t, e) {
  if (e < tr) throw new Error("Expected power > 0");
  if (e === tr) return n.ONE;
  if (e === He) return t;
  let r = n.ONE,
    i = t;
  for (; e > tr; ) e & He && (r = n.mul(r, i)), (i = n.sqr(i)), (e >>= He);
  return r;
}
function Jk(n, t) {
  const e = new Array(t.length),
    r = t.reduce(
      (s, o, a) => (n.is0(o) ? s : ((e[a] = s), n.mul(s, o))),
      n.ONE
    ),
    i = n.inv(r);
  return (
    t.reduceRight(
      (s, o, a) => (n.is0(o) ? s : ((e[a] = n.mul(s, e[a])), n.mul(s, o))),
      i
    ),
    e
  );
}
function Dm(n, t) {
  const e = t !== void 0 ? t : n.toString(2).length,
    r = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: r };
}
function jk(n, t, e = !1, r = {}) {
  if (n <= tr) throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: i, nByteLength: s } = Dm(n, t);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Wk(n),
    a = Object.freeze({
      ORDER: n,
      BITS: i,
      BYTES: s,
      MASK: Kd(i),
      ZERO: tr,
      ONE: He,
      create: (c) => Mr(c, n),
      isValid: (c) => {
        if (typeof c != "bigint")
          throw new Error(
            `Invalid field element: expected bigint, got ${typeof c}`
          );
        return tr <= c && c < n;
      },
      is0: (c) => c === tr,
      isOdd: (c) => (c & He) === He,
      neg: (c) => Mr(-c, n),
      eql: (c, f) => c === f,
      sqr: (c) => Mr(c * c, n),
      add: (c, f) => Mr(c + f, n),
      sub: (c, f) => Mr(c - f, n),
      mul: (c, f) => Mr(c * f, n),
      pow: (c, f) => Qk(a, c, f),
      div: (c, f) => Mr(c * Th(f, n), n),
      sqrN: (c) => c * c,
      addN: (c, f) => c + f,
      subN: (c, f) => c - f,
      mulN: (c, f) => c * f,
      inv: (c) => Th(c, n),
      sqrt: r.sqrt || ((c) => o(a, c)),
      invertBatch: (c) => Jk(a, c),
      cmov: (c, f, h) => (h ? f : c),
      toBytes: (c) => (e ? Gd(c, s) : Ga(c, s)),
      fromBytes: (c) => {
        if (c.length !== s)
          throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);
        return e ? Hd(c) : to(c);
      },
    });
  return Object.freeze(a);
}
function zm(n) {
  if (typeof n != "bigint") throw new Error("field order must be bigint");
  const t = n.toString(2).length;
  return Math.ceil(t / 8);
}
function Hm(n) {
  const t = zm(n);
  return t + Math.ceil(t / 2);
}
function Zk(n, t, e = !1) {
  const r = n.length,
    i = zm(t),
    s = Hm(t);
  if (r < 16 || r < s || r > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
  const o = e ? to(n) : Hd(n),
    a = Mr(o, t - He) + He;
  return e ? Gd(a, i) : Ga(a, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Yk =
    BigInt(0),
  Zf = BigInt(1);
function Xk(n, t) {
  const e = (i, s) => {
      const o = s.negate();
      return i ? o : s;
    },
    r = (i) => {
      const s = Math.ceil(t / i) + 1,
        o = 2 ** (i - 1);
      return { windows: s, windowSize: o };
    };
  return {
    constTimeNegate: e,
    unsafeLadder(i, s) {
      let o = n.ZERO,
        a = i;
      for (; s > Yk; ) s & Zf && (o = o.add(a)), (a = a.double()), (s >>= Zf);
      return o;
    },
    precomputeWindow(i, s) {
      const { windows: o, windowSize: a } = r(s),
        c = [];
      let f = i,
        h = f;
      for (let b = 0; b < o; b++) {
        (h = f), c.push(h);
        for (let S = 1; S < a; S++) (h = h.add(f)), c.push(h);
        f = h.double();
      }
      return c;
    },
    wNAF(i, s, o) {
      const { windows: a, windowSize: c } = r(i);
      let f = n.ZERO,
        h = n.BASE;
      const b = BigInt(2 ** i - 1),
        S = 2 ** i,
        P = BigInt(i);
      for (let M = 0; M < a; M++) {
        const N = M * c;
        let D = Number(o & b);
        (o >>= P), D > c && ((D -= S), (o += Zf));
        const q = N,
          z = N + Math.abs(D) - 1,
          V = M % 2 !== 0,
          et = D < 0;
        D === 0 ? (h = h.add(e(V, s[q]))) : (f = f.add(e(et, s[z])));
      }
      return { p: f, f: h };
    },
    wNAFCached(i, s, o, a) {
      const c = i._WINDOW_SIZE || 1;
      let f = s.get(i);
      return (
        f || ((f = this.precomputeWindow(i, c)), c !== 1 && s.set(i, a(f))),
        this.wNAF(c, f, o)
      );
    },
  };
}
function Gm(n) {
  return (
    $k(n.Fp),
    Xc(
      n,
      { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
      { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
    ),
    Object.freeze({ ...Dm(n.n, n.nBitLength), ...n, p: n.Fp.ORDER })
  );
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function tv(
  n
) {
  const t = Gm(n);
  Xc(
    t,
    { a: "field", b: "field" },
    {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function",
    }
  );
  const { endo: e, Fp: r, a: i } = t;
  if (e) {
    if (!r.eql(i, r.ZERO))
      throw new Error(
        "Endomorphism can only be defined for Koblitz curves that have a=0"
      );
    if (
      typeof e != "object" ||
      typeof e.beta != "bigint" ||
      typeof e.splitScalar != "function"
    )
      throw new Error(
        "Expected endomorphism with beta: bigint and splitScalar: function"
      );
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: ev, hexToBytes: rv } = Hk,
  Cs = {
    Err: class extends Error {
      constructor(t = "") {
        super(t);
      }
    },
    _parseInt(n) {
      const { Err: t } = Cs;
      if (n.length < 2 || n[0] !== 2)
        throw new t("Invalid signature integer tag");
      const e = n[1],
        r = n.subarray(2, e + 2);
      if (!e || r.length !== e)
        throw new t("Invalid signature integer: wrong length");
      if (r[0] & 128) throw new t("Invalid signature integer: negative");
      if (r[0] === 0 && !(r[1] & 128))
        throw new t("Invalid signature integer: unnecessary leading zero");
      return { d: ev(r), l: n.subarray(e + 2) };
    },
    toSig(n) {
      const { Err: t } = Cs,
        e = typeof n == "string" ? rv(n) : n;
      if (!(e instanceof Uint8Array)) throw new Error("ui8a expected");
      let r = e.length;
      if (r < 2 || e[0] != 48) throw new t("Invalid signature tag");
      if (e[1] !== r - 2) throw new t("Invalid signature: incorrect length");
      const { d: i, l: s } = Cs._parseInt(e.subarray(2)),
        { d: o, l: a } = Cs._parseInt(s);
      if (a.length) throw new t("Invalid signature: left bytes after parsing");
      return { r: i, s: o };
    },
    hexFromSig(n) {
      const t = (f) => (Number.parseInt(f[0], 16) & 8 ? "00" + f : f),
        e = (f) => {
          const h = f.toString(16);
          return h.length & 1 ? `0${h}` : h;
        },
        r = t(e(n.s)),
        i = t(e(n.r)),
        s = r.length / 2,
        o = i.length / 2,
        a = e(s),
        c = e(o);
      return `30${e(o + s + 4)}02${c}${i}02${a}${r}`;
    },
  },
  wi = BigInt(0),
  on = BigInt(1);
BigInt(2);
const Ip = BigInt(3);
BigInt(4);
function nv(n) {
  const t = tv(n),
    { Fp: e } = t,
    r =
      t.toBytes ||
      ((M, N, D) => {
        const q = N.toAffine();
        return Ec(Uint8Array.from([4]), e.toBytes(q.x), e.toBytes(q.y));
      }),
    i =
      t.fromBytes ||
      ((M) => {
        const N = M.subarray(1),
          D = e.fromBytes(N.subarray(0, e.BYTES)),
          q = e.fromBytes(N.subarray(e.BYTES, 2 * e.BYTES));
        return { x: D, y: q };
      });
  function s(M) {
    const { a: N, b: D } = t,
      q = e.sqr(M),
      z = e.mul(q, M);
    return e.add(e.add(z, e.mul(M, N)), D);
  }
  if (!e.eql(e.sqr(t.Gy), s(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(M) {
    return typeof M == "bigint" && wi < M && M < t.n;
  }
  function a(M) {
    if (!o(M)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(M) {
    const {
      allowedPrivateKeyLengths: N,
      nByteLength: D,
      wrapPrivateKey: q,
      n: z,
    } = t;
    if (N && typeof M != "bigint") {
      if (
        (M instanceof Uint8Array && (M = za(M)),
        typeof M != "string" || !N.includes(M.length))
      )
        throw new Error("Invalid key");
      M = M.padStart(D * 2, "0");
    }
    let V;
    try {
      V = typeof M == "bigint" ? M : to(fn("private key", M, D));
    } catch {
      throw new Error(
        `private key must be ${D} bytes, hex or bigint, not ${typeof M}`
      );
    }
    return q && (V = Mr(V, z)), a(V), V;
  }
  const f = new Map();
  function h(M) {
    if (!(M instanceof b)) throw new Error("ProjectivePoint expected");
  }
  class b {
    constructor(N, D, q) {
      if (
        ((this.px = N),
        (this.py = D),
        (this.pz = q),
        N == null || !e.isValid(N))
      )
        throw new Error("x required");
      if (D == null || !e.isValid(D)) throw new Error("y required");
      if (q == null || !e.isValid(q)) throw new Error("z required");
    }
    static fromAffine(N) {
      const { x: D, y: q } = N || {};
      if (!N || !e.isValid(D) || !e.isValid(q))
        throw new Error("invalid affine point");
      if (N instanceof b) throw new Error("projective point not allowed");
      const z = (V) => e.eql(V, e.ZERO);
      return z(D) && z(q) ? b.ZERO : new b(D, q, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(N) {
      const D = e.invertBatch(N.map((q) => q.pz));
      return N.map((q, z) => q.toAffine(D[z])).map(b.fromAffine);
    }
    static fromHex(N) {
      const D = b.fromAffine(i(fn("pointHex", N)));
      return D.assertValidity(), D;
    }
    static fromPrivateKey(N) {
      return b.BASE.multiply(c(N));
    }
    _setWindowSize(N) {
      (this._WINDOW_SIZE = N), f.delete(this);
    }
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !e.is0(this.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: N, y: D } = this.toAffine();
      if (!e.isValid(N) || !e.isValid(D))
        throw new Error("bad point: x or y not FE");
      const q = e.sqr(D),
        z = s(N);
      if (!e.eql(q, z)) throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: N } = this.toAffine();
      if (e.isOdd) return !e.isOdd(N);
      throw new Error("Field doesn't support isOdd");
    }
    equals(N) {
      h(N);
      const { px: D, py: q, pz: z } = this,
        { px: V, py: et, pz: it } = N,
        X = e.eql(e.mul(D, it), e.mul(V, z)),
        nt = e.eql(e.mul(q, it), e.mul(et, z));
      return X && nt;
    }
    negate() {
      return new b(this.px, e.neg(this.py), this.pz);
    }
    double() {
      const { a: N, b: D } = t,
        q = e.mul(D, Ip),
        { px: z, py: V, pz: et } = this;
      let it = e.ZERO,
        X = e.ZERO,
        nt = e.ZERO,
        R = e.mul(z, z),
        x = e.mul(V, V),
        B = e.mul(et, et),
        F = e.mul(z, V);
      return (
        (F = e.add(F, F)),
        (nt = e.mul(z, et)),
        (nt = e.add(nt, nt)),
        (it = e.mul(N, nt)),
        (X = e.mul(q, B)),
        (X = e.add(it, X)),
        (it = e.sub(x, X)),
        (X = e.add(x, X)),
        (X = e.mul(it, X)),
        (it = e.mul(F, it)),
        (nt = e.mul(q, nt)),
        (B = e.mul(N, B)),
        (F = e.sub(R, B)),
        (F = e.mul(N, F)),
        (F = e.add(F, nt)),
        (nt = e.add(R, R)),
        (R = e.add(nt, R)),
        (R = e.add(R, B)),
        (R = e.mul(R, F)),
        (X = e.add(X, R)),
        (B = e.mul(V, et)),
        (B = e.add(B, B)),
        (R = e.mul(B, F)),
        (it = e.sub(it, R)),
        (nt = e.mul(B, x)),
        (nt = e.add(nt, nt)),
        (nt = e.add(nt, nt)),
        new b(it, X, nt)
      );
    }
    add(N) {
      h(N);
      const { px: D, py: q, pz: z } = this,
        { px: V, py: et, pz: it } = N;
      let X = e.ZERO,
        nt = e.ZERO,
        R = e.ZERO;
      const x = t.a,
        B = e.mul(t.b, Ip);
      let F = e.mul(D, V),
        v = e.mul(q, et),
        y = e.mul(z, it),
        u = e.add(D, q),
        l = e.add(V, et);
      (u = e.mul(u, l)),
        (l = e.add(F, v)),
        (u = e.sub(u, l)),
        (l = e.add(D, z));
      let g = e.add(V, it);
      return (
        (l = e.mul(l, g)),
        (g = e.add(F, y)),
        (l = e.sub(l, g)),
        (g = e.add(q, z)),
        (X = e.add(et, it)),
        (g = e.mul(g, X)),
        (X = e.add(v, y)),
        (g = e.sub(g, X)),
        (R = e.mul(x, l)),
        (X = e.mul(B, y)),
        (R = e.add(X, R)),
        (X = e.sub(v, R)),
        (R = e.add(v, R)),
        (nt = e.mul(X, R)),
        (v = e.add(F, F)),
        (v = e.add(v, F)),
        (y = e.mul(x, y)),
        (l = e.mul(B, l)),
        (v = e.add(v, y)),
        (y = e.sub(F, y)),
        (y = e.mul(x, y)),
        (l = e.add(l, y)),
        (F = e.mul(v, l)),
        (nt = e.add(nt, F)),
        (F = e.mul(g, l)),
        (X = e.mul(u, X)),
        (X = e.sub(X, F)),
        (F = e.mul(u, v)),
        (R = e.mul(g, R)),
        (R = e.add(R, F)),
        new b(X, nt, R)
      );
    }
    subtract(N) {
      return this.add(N.negate());
    }
    is0() {
      return this.equals(b.ZERO);
    }
    wNAF(N) {
      return P.wNAFCached(this, f, N, (D) => {
        const q = e.invertBatch(D.map((z) => z.pz));
        return D.map((z, V) => z.toAffine(q[V])).map(b.fromAffine);
      });
    }
    multiplyUnsafe(N) {
      const D = b.ZERO;
      if (N === wi) return D;
      if ((a(N), N === on)) return this;
      const { endo: q } = t;
      if (!q) return P.unsafeLadder(this, N);
      let { k1neg: z, k1: V, k2neg: et, k2: it } = q.splitScalar(N),
        X = D,
        nt = D,
        R = this;
      for (; V > wi || it > wi; )
        V & on && (X = X.add(R)),
          it & on && (nt = nt.add(R)),
          (R = R.double()),
          (V >>= on),
          (it >>= on);
      return (
        z && (X = X.negate()),
        et && (nt = nt.negate()),
        (nt = new b(e.mul(nt.px, q.beta), nt.py, nt.pz)),
        X.add(nt)
      );
    }
    multiply(N) {
      a(N);
      let D = N,
        q,
        z;
      const { endo: V } = t;
      if (V) {
        const { k1neg: et, k1: it, k2neg: X, k2: nt } = V.splitScalar(D);
        let { p: R, f: x } = this.wNAF(it),
          { p: B, f: F } = this.wNAF(nt);
        (R = P.constTimeNegate(et, R)),
          (B = P.constTimeNegate(X, B)),
          (B = new b(e.mul(B.px, V.beta), B.py, B.pz)),
          (q = R.add(B)),
          (z = x.add(F));
      } else {
        const { p: et, f: it } = this.wNAF(D);
        (q = et), (z = it);
      }
      return b.normalizeZ([q, z])[0];
    }
    multiplyAndAddUnsafe(N, D, q) {
      const z = b.BASE,
        V = (it, X) =>
          X === wi || X === on || !it.equals(z)
            ? it.multiplyUnsafe(X)
            : it.multiply(X),
        et = V(this, D).add(V(N, q));
      return et.is0() ? void 0 : et;
    }
    toAffine(N) {
      const { px: D, py: q, pz: z } = this,
        V = this.is0();
      N == null && (N = V ? e.ONE : e.inv(z));
      const et = e.mul(D, N),
        it = e.mul(q, N),
        X = e.mul(z, N);
      if (V) return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(X, e.ONE)) throw new Error("invZ was invalid");
      return { x: et, y: it };
    }
    isTorsionFree() {
      const { h: N, isTorsionFree: D } = t;
      if (N === on) return !0;
      if (D) return D(b, this);
      throw new Error(
        "isTorsionFree() has not been declared for the elliptic curve"
      );
    }
    clearCofactor() {
      const { h: N, clearCofactor: D } = t;
      return N === on ? this : D ? D(b, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(N = !0) {
      return this.assertValidity(), r(b, this, N);
    }
    toHex(N = !0) {
      return za(this.toRawBytes(N));
    }
  }
  (b.BASE = new b(t.Gx, t.Gy, e.ONE)), (b.ZERO = new b(e.ZERO, e.ONE, e.ZERO));
  const S = t.nBitLength,
    P = Xk(b, t.endo ? Math.ceil(S / 2) : S);
  return {
    CURVE: t,
    ProjectivePoint: b,
    normPrivateKeyToScalar: c,
    weierstrassEquation: s,
    isWithinCurveOrder: o,
  };
}
function iv(n) {
  const t = Gm(n);
  return (
    Xc(
      t,
      { hash: "hash", hmac: "function", randomBytes: "function" },
      { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }
    ),
    Object.freeze({ lowS: !0, ...t })
  );
}
function sv(n) {
  const t = iv(n),
    { Fp: e, n: r } = t,
    i = e.BYTES + 1,
    s = 2 * e.BYTES + 1;
  function o(l) {
    return wi < l && l < e.ORDER;
  }
  function a(l) {
    return Mr(l, r);
  }
  function c(l) {
    return Th(l, r);
  }
  const {
      ProjectivePoint: f,
      normPrivateKeyToScalar: h,
      weierstrassEquation: b,
      isWithinCurveOrder: S,
    } = nv({
      ...t,
      toBytes(l, g, k) {
        const I = g.toAffine(),
          _ = e.toBytes(I.x),
          G = Ec;
        return k
          ? G(Uint8Array.from([g.hasEvenY() ? 2 : 3]), _)
          : G(Uint8Array.from([4]), _, e.toBytes(I.y));
      },
      fromBytes(l) {
        const g = l.length,
          k = l[0],
          I = l.subarray(1);
        if (g === i && (k === 2 || k === 3)) {
          const _ = to(I);
          if (!o(_)) throw new Error("Point is not on curve");
          const G = b(_);
          let O = e.sqrt(G);
          const d = (O & on) === on;
          return ((k & 1) === 1) !== d && (O = e.neg(O)), { x: _, y: O };
        } else if (g === s && k === 4) {
          const _ = e.fromBytes(I.subarray(0, e.BYTES)),
            G = e.fromBytes(I.subarray(e.BYTES, 2 * e.BYTES));
          return { x: _, y: G };
        } else
          throw new Error(
            `Point of length ${g} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`
          );
      },
    }),
    P = (l) => za(Ga(l, t.nByteLength));
  function M(l) {
    const g = r >> on;
    return l > g;
  }
  function N(l) {
    return M(l) ? a(-l) : l;
  }
  const D = (l, g, k) => to(l.slice(g, k));
  class q {
    constructor(g, k, I) {
      (this.r = g), (this.s = k), (this.recovery = I), this.assertValidity();
    }
    static fromCompact(g) {
      const k = t.nByteLength;
      return (
        (g = fn("compactSignature", g, k * 2)),
        new q(D(g, 0, k), D(g, k, 2 * k))
      );
    }
    static fromDER(g) {
      const { r: k, s: I } = Cs.toSig(fn("DER", g));
      return new q(k, I);
    }
    assertValidity() {
      if (!S(this.r)) throw new Error("r must be 0 < r < CURVE.n");
      if (!S(this.s)) throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(g) {
      return new q(this.r, this.s, g);
    }
    recoverPublicKey(g) {
      const { r: k, s: I, recovery: _ } = this,
        G = nt(fn("msgHash", g));
      if (_ == null || ![0, 1, 2, 3].includes(_))
        throw new Error("recovery id invalid");
      const O = _ === 2 || _ === 3 ? k + t.n : k;
      if (O >= e.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const d = (_ & 1) === 0 ? "02" : "03",
        p = f.fromHex(d + P(O)),
        T = c(O),
        H = a(-G * T),
        J = a(I * T),
        at = f.BASE.multiplyAndAddUnsafe(p, H, J);
      if (!at) throw new Error("point at infinify");
      return at.assertValidity(), at;
    }
    hasHighS() {
      return M(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new q(this.r, a(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return Ha(this.toDERHex());
    }
    toDERHex() {
      return Cs.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return Ha(this.toCompactHex());
    }
    toCompactHex() {
      return P(this.r) + P(this.s);
    }
  }
  const z = {
    isValidPrivateKey(l) {
      try {
        return h(l), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: h,
    randomPrivateKey: () => {
      const l = Hm(t.n);
      return Zk(t.randomBytes(l), t.n);
    },
    precompute(l = 8, g = f.BASE) {
      return g._setWindowSize(l), g.multiply(BigInt(3)), g;
    },
  };
  function V(l, g = !0) {
    return f.fromPrivateKey(l).toRawBytes(g);
  }
  function et(l) {
    const g = l instanceof Uint8Array,
      k = typeof l == "string",
      I = (g || k) && l.length;
    return g
      ? I === i || I === s
      : k
      ? I === 2 * i || I === 2 * s
      : l instanceof f;
  }
  function it(l, g, k = !0) {
    if (et(l)) throw new Error("first arg must be private key");
    if (!et(g)) throw new Error("second arg must be public key");
    return f.fromHex(g).multiply(h(l)).toRawBytes(k);
  }
  const X =
      t.bits2int ||
      function (l) {
        const g = to(l),
          k = l.length * 8 - t.nBitLength;
        return k > 0 ? g >> BigInt(k) : g;
      },
    nt =
      t.bits2int_modN ||
      function (l) {
        return a(X(l));
      },
    R = Kd(t.nBitLength);
  function x(l) {
    if (typeof l != "bigint") throw new Error("bigint expected");
    if (!(wi <= l && l < R))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return Ga(l, t.nByteLength);
  }
  function B(l, g, k = F) {
    if (["recovered", "canonical"].some((wt) => wt in k))
      throw new Error("sign() legacy options not supported");
    const { hash: I, randomBytes: _ } = t;
    let { lowS: G, prehash: O, extraEntropy: d } = k;
    G == null && (G = !0),
      (l = fn("msgHash", l)),
      O && (l = fn("prehashed msgHash", I(l)));
    const p = nt(l),
      T = h(g),
      H = [x(T), x(p)];
    if (d != null) {
      const wt = d === !0 ? _(e.BYTES) : d;
      H.push(fn("extraEntropy", wt));
    }
    const J = Ec(...H),
      at = p;
    function yt(wt) {
      const Ut = X(wt);
      if (!S(Ut)) return;
      const Rt = c(Ut),
        zt = f.BASE.multiply(Ut).toAffine(),
        Zt = a(zt.x);
      if (Zt === wi) return;
      const _t = a(Rt * a(at + Zt * T));
      if (_t === wi) return;
      let It = (zt.x === Zt ? 0 : 2) | Number(zt.y & on),
        Ar = _t;
      return G && M(_t) && ((Ar = N(_t)), (It ^= 1)), new q(Zt, Ar, It);
    }
    return { seed: J, k2sig: yt };
  }
  const F = { lowS: t.lowS, prehash: !1 },
    v = { lowS: t.lowS, prehash: !1 };
  function y(l, g, k = F) {
    const { seed: I, k2sig: _ } = B(l, g, k),
      G = t;
    return Fm(G.hash.outputLen, G.nByteLength, G.hmac)(I, _);
  }
  f.BASE._setWindowSize(8);
  function u(l, g, k, I = v) {
    var zt;
    const _ = l;
    if (((g = fn("msgHash", g)), (k = fn("publicKey", k)), "strict" in I))
      throw new Error("options.strict was renamed to lowS");
    const { lowS: G, prehash: O } = I;
    let d, p;
    try {
      if (typeof _ == "string" || _ instanceof Uint8Array)
        try {
          d = q.fromDER(_);
        } catch (Zt) {
          if (!(Zt instanceof Cs.Err)) throw Zt;
          d = q.fromCompact(_);
        }
      else if (
        typeof _ == "object" &&
        typeof _.r == "bigint" &&
        typeof _.s == "bigint"
      ) {
        const { r: Zt, s: _t } = _;
        d = new q(Zt, _t);
      } else throw new Error("PARSE");
      p = f.fromHex(k);
    } catch (Zt) {
      if (Zt.message === "PARSE")
        throw new Error(
          "signature must be Signature instance, Uint8Array or hex string"
        );
      return !1;
    }
    if (G && d.hasHighS()) return !1;
    O && (g = t.hash(g));
    const { r: T, s: H } = d,
      J = nt(g),
      at = c(H),
      yt = a(J * at),
      wt = a(T * at),
      Ut =
        (zt = f.BASE.multiplyAndAddUnsafe(p, yt, wt)) == null
          ? void 0
          : zt.toAffine();
    return Ut ? a(Ut.x) === T : !1;
  }
  return {
    CURVE: t,
    getPublicKey: V,
    getSharedSecret: it,
    sign: y,
    verify: u,
    ProjectivePoint: f,
    Signature: q,
    utils: z,
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function ov(
  n
) {
  return { hash: n, hmac: (t, ...e) => wm(n, t, $2(...e)), randomBytes: Q2 };
}
function av(n, t) {
  const e = (r) => sv({ ...n, ...ov(r) });
  return Object.freeze({ ...e(t), create: e });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const Km =
    BigInt(
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
    ),
  Bp = BigInt(
    "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
  ),
  cv = BigInt(1),
  _h = BigInt(2),
  Rp = (n, t) => (n + t / _h) / t;
function uv(n) {
  const t = Km,
    e = BigInt(3),
    r = BigInt(6),
    i = BigInt(11),
    s = BigInt(22),
    o = BigInt(23),
    a = BigInt(44),
    c = BigInt(88),
    f = (n * n * n) % t,
    h = (f * f * n) % t,
    b = (Jr(h, e, t) * h) % t,
    S = (Jr(b, e, t) * h) % t,
    P = (Jr(S, _h, t) * f) % t,
    M = (Jr(P, i, t) * P) % t,
    N = (Jr(M, s, t) * M) % t,
    D = (Jr(N, a, t) * N) % t,
    q = (Jr(D, c, t) * D) % t,
    z = (Jr(q, a, t) * N) % t,
    V = (Jr(z, e, t) * h) % t,
    et = (Jr(V, o, t) * M) % t,
    it = (Jr(et, r, t) * f) % t,
    X = Jr(it, _h, t);
  if (!Oh.eql(Oh.sqr(X), n)) throw new Error("Cannot find square root");
  return X;
}
const Oh = jk(Km, void 0, void 0, { sqrt: uv }),
  Di = av(
    {
      a: BigInt(0),
      b: BigInt(7),
      Fp: Oh,
      n: Bp,
      Gx: BigInt(
        "55066263022277343669578718895168534326250603453777594175500187360389116729240"
      ),
      Gy: BigInt(
        "32670510020758816978083085130507043184471273380659243275938904335757337482424"
      ),
      h: BigInt(1),
      lowS: !0,
      endo: {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        splitScalar: (n) => {
          const t = Bp,
            e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            r = -cv * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
            i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            s = e,
            o = BigInt("0x100000000000000000000000000000000"),
            a = Rp(s * n, t),
            c = Rp(-r * n, t);
          let f = Mr(n - a * e - c * i, t),
            h = Mr(-a * r - c * s, t);
          const b = f > o,
            S = h > o;
          if ((b && (f = t - f), S && (h = t - h), f > o || h > o))
            throw new Error("splitScalar: Endomorphism failed, k=" + n);
          return { k1neg: b, k1: f, k2neg: S, k2: h };
        },
      },
    },
    Am
  );
BigInt(0);
Di.ProjectivePoint;
const xc = "0x0000000000000000000000000000000000000000",
  Pp = "0x0000000000000000000000000000000000000000000000000000000000000000",
  Cp = BigInt(0),
  Np = BigInt(1),
  Tp = BigInt(2),
  _p = BigInt(27),
  Op = BigInt(28),
  mu = BigInt(35),
  vo = {};
function Mp(n) {
  return vi(Qe(n), 32);
}
var ta, Pn, ea, Gs;
const ln = class ln {
  constructor(t, e, r, i) {
    ut(this, ta);
    ut(this, Pn);
    ut(this, ea);
    ut(this, Gs);
    Zc(t, vo, "Signature"),
      Q(this, ta, e),
      Q(this, Pn, r),
      Q(this, ea, i),
      Q(this, Gs, null);
  }
  get r() {
    return C(this, ta);
  }
  set r(t) {
    Z(Go(t) === 32, "invalid r", "value", t), Q(this, ta, xt(t));
  }
  get s() {
    return (
      Z(
        parseInt(C(this, Pn).substring(0, 3)) < 8,
        "non-canonical s; use ._s",
        "s",
        C(this, Pn)
      ),
      C(this, Pn)
    );
  }
  set s(t) {
    Z(Go(t) === 32, "invalid s", "value", t), Q(this, Pn, xt(t));
  }
  get _s() {
    return C(this, Pn);
  }
  isValid() {
    return parseInt(C(this, Pn).substring(0, 3)) < 8;
  }
  get v() {
    return C(this, ea);
  }
  set v(t) {
    const e = Gt(t, "value");
    Z(e === 27 || e === 28, "invalid v", "v", t), Q(this, ea, e);
  }
  get networkV() {
    return C(this, Gs);
  }
  get legacyChainId() {
    const t = this.networkV;
    return t == null ? null : ln.getChainId(t);
  }
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  get yParityAndS() {
    const t = $t(this.s);
    return this.yParity && (t[0] |= 128), xt(t);
  }
  get compactSerialized() {
    return Fe([this.r, this.yParityAndS]);
  }
  get serialized() {
    return Fe([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this._s}"${
      this.isValid() ? "" : ', valid: "false"'
    }, yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  clone() {
    const t = new ln(vo, this.r, this._s, this.v);
    return this.networkV && Q(t, Gs, this.networkV), t;
  }
  toJSON() {
    const t = this.networkV;
    return {
      _type: "signature",
      networkV: t != null ? t.toString() : null,
      r: this.r,
      s: this._s,
      v: this.v,
    };
  }
  static getChainId(t) {
    const e = vt(t, "v");
    return e == _p || e == Op
      ? Cp
      : (Z(e >= mu, "invalid EIP-155 v", "v", t), (e - mu) / Tp);
  }
  static getChainIdV(t, e) {
    return vt(t) * Tp + BigInt(35 + e - 27);
  }
  static getNormalizedV(t) {
    const e = vt(t);
    return e === Cp || e === _p
      ? 27
      : e === Np || e === Op
      ? 28
      : (Z(e >= mu, "invalid v", "v", t), e & Np ? 27 : 28);
  }
  static from(t) {
    function e(f, h) {
      Z(f, h, "signature", t);
    }
    if (t == null) return new ln(vo, Pp, Pp, 27);
    if (typeof t == "string") {
      const f = $t(t, "signature");
      if (f.length === 64) {
        const h = xt(f.slice(0, 32)),
          b = f.slice(32, 64),
          S = b[0] & 128 ? 28 : 27;
        return (b[0] &= 127), new ln(vo, h, xt(b), S);
      }
      if (f.length === 65) {
        const h = xt(f.slice(0, 32)),
          b = xt(f.slice(32, 64)),
          S = ln.getNormalizedV(f[64]);
        return new ln(vo, h, b, S);
      }
      e(!1, "invalid raw signature length");
    }
    if (t instanceof ln) return t.clone();
    const r = t.r;
    e(r != null, "missing r");
    const i = Mp(r),
      s = (function (f, h) {
        if (f != null) return Mp(f);
        if (h != null) {
          e(be(h, 32), "invalid yParityAndS");
          const b = $t(h);
          return (b[0] &= 127), xt(b);
        }
        e(!1, "missing s");
      })(t.s, t.yParityAndS),
      { networkV: o, v: a } = (function (f, h, b) {
        if (f != null) {
          const S = vt(f);
          return { networkV: S >= mu ? S : void 0, v: ln.getNormalizedV(S) };
        }
        if (h != null)
          return (
            e(be(h, 32), "invalid yParityAndS"), { v: $t(h)[0] & 128 ? 28 : 27 }
          );
        if (b != null) {
          switch (Gt(b, "sig.yParity")) {
            case 0:
              return { v: 27 };
            case 1:
              return { v: 28 };
          }
          e(!1, "invalid yParity");
        }
        e(!1, "missing v");
      })(t.v, t.yParityAndS, t.yParity),
      c = new ln(vo, i, s, a);
    return (
      o && Q(c, Gs, o),
      e(
        t.yParity == null || Gt(t.yParity, "sig.yParity") === c.yParity,
        "yParity mismatch"
      ),
      e(
        t.yParityAndS == null || t.yParityAndS === c.yParityAndS,
        "yParityAndS mismatch"
      ),
      c
    );
  }
};
(ta = new WeakMap()),
  (Pn = new WeakMap()),
  (ea = new WeakMap()),
  (Gs = new WeakMap());
let Fr = ln;
var ci;
const xs = class xs {
  constructor(t) {
    ut(this, ci);
    Z(Go(t) === 32, "invalid private key", "privateKey", "[REDACTED]"),
      Q(this, ci, xt(t));
  }
  get privateKey() {
    return C(this, ci);
  }
  get publicKey() {
    return xs.computePublicKey(C(this, ci));
  }
  get compressedPublicKey() {
    return xs.computePublicKey(C(this, ci), !0);
  }
  sign(t) {
    Z(Go(t) === 32, "invalid digest length", "digest", t);
    const e = Di.sign(vr(t), vr(C(this, ci)), { lowS: !0 });
    return Fr.from({ r: us(e.r, 32), s: us(e.s, 32), v: e.recovery ? 28 : 27 });
  }
  computeSharedSecret(t) {
    const e = xs.computePublicKey(t);
    return xt(Di.getSharedSecret(vr(C(this, ci)), $t(e), !1));
  }
  static computePublicKey(t, e) {
    let r = $t(t, "key");
    if (r.length === 32) {
      const s = Di.getPublicKey(r, !!e);
      return xt(s);
    }
    if (r.length === 64) {
      const s = new Uint8Array(65);
      (s[0] = 4), s.set(r, 1), (r = s);
    }
    const i = Di.ProjectivePoint.fromHex(r);
    return xt(i.toRawBytes(e));
  }
  static recoverPublicKey(t, e) {
    Z(Go(t) === 32, "invalid digest length", "digest", t);
    const r = Fr.from(e);
    let i = Di.Signature.fromCompact(vr(Fe([r.r, r.s])));
    i = i.addRecoveryBit(r.yParity);
    const s = i.recoverPublicKey(vr(t));
    return (
      Z(s != null, "invalid signature for digest", "signature", e),
      "0x" + s.toHex(!1)
    );
  }
  static addPoints(t, e, r) {
    const i = Di.ProjectivePoint.fromHex(xs.computePublicKey(t).substring(2)),
      s = Di.ProjectivePoint.fromHex(xs.computePublicKey(e).substring(2));
    return "0x" + i.add(s).toHex(!!r);
  }
};
ci = new WeakMap();
let kc = xs;
const lv = BigInt(0),
  fv = BigInt(36);
function Lp(n) {
  n = n.toLowerCase();
  const t = n.substring(2).split(""),
    e = new Uint8Array(40);
  for (let i = 0; i < 40; i++) e[i] = t[i].charCodeAt(0);
  const r = $t(qe(e));
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()),
      (r[i >> 1] & 15) >= 8 && (t[i + 1] = t[i + 1].toUpperCase());
  return "0x" + t.join("");
}
const Vd = {};
for (let n = 0; n < 10; n++) Vd[String(n)] = String(n);
for (let n = 0; n < 26; n++) Vd[String.fromCharCode(65 + n)] = String(10 + n);
const Up = 15;
function hv(n) {
  (n = n.toUpperCase()), (n = n.substring(4) + n.substring(0, 2) + "00");
  let t = n
    .split("")
    .map((r) => Vd[r])
    .join("");
  for (; t.length >= Up; ) {
    let r = t.substring(0, Up);
    t = (parseInt(r, 10) % 97) + t.substring(r.length);
  }
  let e = String(98 - (parseInt(t, 10) % 97));
  for (; e.length < 2; ) e = "0" + e;
  return e;
}
const dv = (function () {
  const n = {};
  for (let t = 0; t < 36; t++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    n[e] = BigInt(t);
  }
  return n;
})();
function pv(n) {
  n = n.toLowerCase();
  let t = lv;
  for (let e = 0; e < n.length; e++) t = t * fv + dv[n[e]];
  return t;
}
function oe(n) {
  if (
    (Z(typeof n == "string", "invalid address", "address", n),
    n.match(/^(0x)?[0-9a-fA-F]{40}$/))
  ) {
    n.startsWith("0x") || (n = "0x" + n);
    const t = Lp(n);
    return (
      Z(
        !n.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === n,
        "bad address checksum",
        "address",
        n
      ),
      t
    );
  }
  if (n.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    Z(n.substring(2, 4) === hv(n), "bad icap checksum", "address", n);
    let t = pv(n.substring(4)).toString(16);
    for (; t.length < 40; ) t = "0" + t;
    return Lp("0x" + t);
  }
  Z(!1, "invalid address", "address", n);
}
function gv(n) {
  const t = oe(n.from);
  let r = vt(n.nonce, "tx.nonce").toString(16);
  return (
    r === "0" ? (r = "0x") : r.length % 2 ? (r = "0x0" + r) : (r = "0x" + r),
    oe(Ue(qe(ls([t, r])), 12))
  );
}
function Vm(n) {
  return n && typeof n.getAddress == "function";
}
async function Yf(n, t) {
  const e = await t;
  return (
    (e == null || e === "0x0000000000000000000000000000000000000000") &&
      (ht(typeof n != "string", "unconfigured name", "UNCONFIGURED_NAME", {
        value: n,
      }),
      Z(
        !1,
        "invalid AddressLike value; did not resolve to a value address",
        "target",
        n
      )),
    oe(e)
  );
}
function Ir(n, t) {
  if (typeof n == "string")
    return n.match(/^0x[0-9a-f]{40}$/i)
      ? oe(n)
      : (ht(
          t != null,
          "ENS resolution requires a provider",
          "UNSUPPORTED_OPERATION",
          { operation: "resolveName" }
        ),
        Yf(n, t.resolveName(n)));
  if (Vm(n)) return Yf(n, n.getAddress());
  if (n && typeof n.then == "function") return Yf(n, n);
  Z(!1, "unsupported addressable value", "target", n);
}
const ei = {};
function kt(n, t) {
  let e = !1;
  return (
    t < 0 && ((e = !0), (t *= -1)),
    new br(ei, `${e ? "" : "u"}int${t}`, n, { signed: e, width: t })
  );
}
function ee(n, t) {
  return new br(ei, `bytes${t || ""}`, n, { size: t });
}
const Fp = Symbol.for("_ethers_typed");
var Ks;
const ri = class ri {
  constructor(t, e, r, i) {
    tt(this, "type");
    tt(this, "value");
    ut(this, Ks);
    tt(this, "_typedSymbol");
    i == null && (i = null),
      Zc(ei, t, "Typed"),
      Ct(this, { _typedSymbol: Fp, type: e, value: r }),
      Q(this, Ks, i),
      this.format();
  }
  format() {
    if (this.type === "array") throw new Error("");
    if (this.type === "dynamicArray") throw new Error("");
    return this.type === "tuple"
      ? `tuple(${this.value.map((t) => t.format()).join(",")})`
      : this.type;
  }
  defaultValue() {
    return 0;
  }
  minValue() {
    return 0;
  }
  maxValue() {
    return 0;
  }
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  isData() {
    return this.type.startsWith("bytes");
  }
  isString() {
    return this.type === "string";
  }
  get tupleName() {
    if (this.type !== "tuple") throw TypeError("not a tuple");
    return C(this, Ks);
  }
  get arrayLength() {
    if (this.type !== "array") throw TypeError("not an array");
    return C(this, Ks) === !0
      ? -1
      : C(this, Ks) === !1
      ? this.value.length
      : null;
  }
  static from(t, e) {
    return new ri(ei, t, e);
  }
  static uint8(t) {
    return kt(t, 8);
  }
  static uint16(t) {
    return kt(t, 16);
  }
  static uint24(t) {
    return kt(t, 24);
  }
  static uint32(t) {
    return kt(t, 32);
  }
  static uint40(t) {
    return kt(t, 40);
  }
  static uint48(t) {
    return kt(t, 48);
  }
  static uint56(t) {
    return kt(t, 56);
  }
  static uint64(t) {
    return kt(t, 64);
  }
  static uint72(t) {
    return kt(t, 72);
  }
  static uint80(t) {
    return kt(t, 80);
  }
  static uint88(t) {
    return kt(t, 88);
  }
  static uint96(t) {
    return kt(t, 96);
  }
  static uint104(t) {
    return kt(t, 104);
  }
  static uint112(t) {
    return kt(t, 112);
  }
  static uint120(t) {
    return kt(t, 120);
  }
  static uint128(t) {
    return kt(t, 128);
  }
  static uint136(t) {
    return kt(t, 136);
  }
  static uint144(t) {
    return kt(t, 144);
  }
  static uint152(t) {
    return kt(t, 152);
  }
  static uint160(t) {
    return kt(t, 160);
  }
  static uint168(t) {
    return kt(t, 168);
  }
  static uint176(t) {
    return kt(t, 176);
  }
  static uint184(t) {
    return kt(t, 184);
  }
  static uint192(t) {
    return kt(t, 192);
  }
  static uint200(t) {
    return kt(t, 200);
  }
  static uint208(t) {
    return kt(t, 208);
  }
  static uint216(t) {
    return kt(t, 216);
  }
  static uint224(t) {
    return kt(t, 224);
  }
  static uint232(t) {
    return kt(t, 232);
  }
  static uint240(t) {
    return kt(t, 240);
  }
  static uint248(t) {
    return kt(t, 248);
  }
  static uint256(t) {
    return kt(t, 256);
  }
  static uint(t) {
    return kt(t, 256);
  }
  static int8(t) {
    return kt(t, -8);
  }
  static int16(t) {
    return kt(t, -16);
  }
  static int24(t) {
    return kt(t, -24);
  }
  static int32(t) {
    return kt(t, -32);
  }
  static int40(t) {
    return kt(t, -40);
  }
  static int48(t) {
    return kt(t, -48);
  }
  static int56(t) {
    return kt(t, -56);
  }
  static int64(t) {
    return kt(t, -64);
  }
  static int72(t) {
    return kt(t, -72);
  }
  static int80(t) {
    return kt(t, -80);
  }
  static int88(t) {
    return kt(t, -88);
  }
  static int96(t) {
    return kt(t, -96);
  }
  static int104(t) {
    return kt(t, -104);
  }
  static int112(t) {
    return kt(t, -112);
  }
  static int120(t) {
    return kt(t, -120);
  }
  static int128(t) {
    return kt(t, -128);
  }
  static int136(t) {
    return kt(t, -136);
  }
  static int144(t) {
    return kt(t, -144);
  }
  static int152(t) {
    return kt(t, -152);
  }
  static int160(t) {
    return kt(t, -160);
  }
  static int168(t) {
    return kt(t, -168);
  }
  static int176(t) {
    return kt(t, -176);
  }
  static int184(t) {
    return kt(t, -184);
  }
  static int192(t) {
    return kt(t, -192);
  }
  static int200(t) {
    return kt(t, -200);
  }
  static int208(t) {
    return kt(t, -208);
  }
  static int216(t) {
    return kt(t, -216);
  }
  static int224(t) {
    return kt(t, -224);
  }
  static int232(t) {
    return kt(t, -232);
  }
  static int240(t) {
    return kt(t, -240);
  }
  static int248(t) {
    return kt(t, -248);
  }
  static int256(t) {
    return kt(t, -256);
  }
  static int(t) {
    return kt(t, -256);
  }
  static bytes1(t) {
    return ee(t, 1);
  }
  static bytes2(t) {
    return ee(t, 2);
  }
  static bytes3(t) {
    return ee(t, 3);
  }
  static bytes4(t) {
    return ee(t, 4);
  }
  static bytes5(t) {
    return ee(t, 5);
  }
  static bytes6(t) {
    return ee(t, 6);
  }
  static bytes7(t) {
    return ee(t, 7);
  }
  static bytes8(t) {
    return ee(t, 8);
  }
  static bytes9(t) {
    return ee(t, 9);
  }
  static bytes10(t) {
    return ee(t, 10);
  }
  static bytes11(t) {
    return ee(t, 11);
  }
  static bytes12(t) {
    return ee(t, 12);
  }
  static bytes13(t) {
    return ee(t, 13);
  }
  static bytes14(t) {
    return ee(t, 14);
  }
  static bytes15(t) {
    return ee(t, 15);
  }
  static bytes16(t) {
    return ee(t, 16);
  }
  static bytes17(t) {
    return ee(t, 17);
  }
  static bytes18(t) {
    return ee(t, 18);
  }
  static bytes19(t) {
    return ee(t, 19);
  }
  static bytes20(t) {
    return ee(t, 20);
  }
  static bytes21(t) {
    return ee(t, 21);
  }
  static bytes22(t) {
    return ee(t, 22);
  }
  static bytes23(t) {
    return ee(t, 23);
  }
  static bytes24(t) {
    return ee(t, 24);
  }
  static bytes25(t) {
    return ee(t, 25);
  }
  static bytes26(t) {
    return ee(t, 26);
  }
  static bytes27(t) {
    return ee(t, 27);
  }
  static bytes28(t) {
    return ee(t, 28);
  }
  static bytes29(t) {
    return ee(t, 29);
  }
  static bytes30(t) {
    return ee(t, 30);
  }
  static bytes31(t) {
    return ee(t, 31);
  }
  static bytes32(t) {
    return ee(t, 32);
  }
  static address(t) {
    return new ri(ei, "address", t);
  }
  static bool(t) {
    return new ri(ei, "bool", !!t);
  }
  static bytes(t) {
    return new ri(ei, "bytes", t);
  }
  static string(t) {
    return new ri(ei, "string", t);
  }
  static array(t, e) {
    throw new Error("not implemented yet");
  }
  static tuple(t, e) {
    throw new Error("not implemented yet");
  }
  static overrides(t) {
    return new ri(ei, "overrides", Object.assign({}, t));
  }
  static isTyped(t) {
    return (
      t && typeof t == "object" && "_typedSymbol" in t && t._typedSymbol === Fp
    );
  }
  static dereference(t, e) {
    if (ri.isTyped(t)) {
      if (t.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
      return t.value;
    }
    return t;
  }
};
Ks = new WeakMap();
let br = ri;
class yv extends Ri {
  constructor(t) {
    super("address", "address", t, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(t, e) {
    let r = br.dereference(e, "string");
    try {
      r = oe(r);
    } catch (i) {
      return this._throwError(i.message, e);
    }
    return t.writeValue(r);
  }
  decode(t) {
    return oe(us(t.readValue(), 20));
  }
}
class mv extends Ri {
  constructor(e) {
    super(e.name, e.type, "_", e.dynamic);
    tt(this, "coder");
    this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, r) {
    return this.coder.encode(e, r);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
function Wm(n, t, e) {
  let r = [];
  if (Array.isArray(e)) r = e;
  else if (e && typeof e == "object") {
    let c = {};
    r = t.map((f) => {
      const h = f.localName;
      return (
        ht(
          h,
          "cannot encode object for signature with missing names",
          "INVALID_ARGUMENT",
          { argument: "values", info: { coder: f }, value: e }
        ),
        ht(
          !c[h],
          "cannot encode object for signature with duplicate names",
          "INVALID_ARGUMENT",
          { argument: "values", info: { coder: f }, value: e }
        ),
        (c[h] = !0),
        e[h]
      );
    });
  } else Z(!1, "invalid tuple value", "tuple", e);
  Z(t.length === r.length, "types/value length mismatch", "tuple", e);
  let i = new Bh(),
    s = new Bh(),
    o = [];
  t.forEach((c, f) => {
    let h = r[f];
    if (c.dynamic) {
      let b = s.length;
      c.encode(s, h);
      let S = i.writeUpdatableValue();
      o.push((P) => {
        S(P + b);
      });
    } else c.encode(i, h);
  }),
    o.forEach((c) => {
      c(i.length);
    });
  let a = n.appendWriter(i);
  return (a += n.appendWriter(s)), a;
}
function qm(n, t) {
  let e = [],
    r = [],
    i = n.subReader(0);
  return (
    t.forEach((s) => {
      let o = null;
      if (s.dynamic) {
        let a = n.readIndex(),
          c = i.subReader(a);
        try {
          o = s.decode(c);
        } catch (f) {
          if (or(f, "BUFFER_OVERRUN")) throw f;
          (o = f),
            (o.baseType = s.name),
            (o.name = s.localName),
            (o.type = s.type);
        }
      } else
        try {
          o = s.decode(n);
        } catch (a) {
          if (or(a, "BUFFER_OVERRUN")) throw a;
          (o = a),
            (o.baseType = s.name),
            (o.name = s.localName),
            (o.type = s.type);
        }
      if (o == null) throw new Error("investigate");
      e.push(o), r.push(s.localName || null);
    }),
    Fa.fromItems(e, r)
  );
}
class wv extends Ri {
  constructor(e, r, i) {
    const s = e.type + "[" + (r >= 0 ? r : "") + "]",
      o = r === -1 || e.dynamic;
    super("array", s, i, o);
    tt(this, "coder");
    tt(this, "length");
    Ct(this, { coder: e, length: r });
  }
  defaultValue() {
    const e = this.coder.defaultValue(),
      r = [];
    for (let i = 0; i < this.length; i++) r.push(e);
    return r;
  }
  encode(e, r) {
    const i = br.dereference(r, "array");
    Array.isArray(i) || this._throwError("expected array value", i);
    let s = this.length;
    s === -1 && ((s = i.length), e.writeValue(i.length)),
      em(
        i.length,
        s,
        "coder array" + (this.localName ? " " + this.localName : "")
      );
    let o = [];
    for (let a = 0; a < i.length; a++) o.push(this.coder);
    return Wm(e, o, i);
  }
  decode(e) {
    let r = this.length;
    r === -1 &&
      ((r = e.readIndex()),
      ht(r * Sr <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
        buffer: e.bytes,
        offset: r * Sr,
        length: e.dataLength,
      }));
    let i = [];
    for (let s = 0; s < r; s++) i.push(new mv(this.coder));
    return qm(e, i);
  }
}
class bv extends Ri {
  constructor(t) {
    super("bool", "bool", t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    const r = br.dereference(e, "bool");
    return t.writeValue(r ? 1 : 0);
  }
  decode(t) {
    return !!t.readValue();
  }
}
class $m extends Ri {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(t, e) {
    e = vr(e);
    let r = t.writeValue(e.length);
    return (r += t.writeBytes(e)), r;
  }
  decode(t) {
    return t.readBytes(t.readIndex(), !0);
  }
}
class Av extends $m {
  constructor(t) {
    super("bytes", t);
  }
  decode(t) {
    return xt(super.decode(t));
  }
}
class Ev extends Ri {
  constructor(e, r) {
    let i = "bytes" + String(e);
    super(i, i, r, !1);
    tt(this, "size");
    Ct(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
      0,
      2 + this.size * 2
    );
  }
  encode(e, r) {
    let i = vr(br.dereference(r, this.type));
    return (
      i.length !== this.size && this._throwError("incorrect data length", r),
      e.writeBytes(i)
    );
  }
  decode(e) {
    return xt(e.readBytes(this.size));
  }
}
const xv = new Uint8Array([]);
class kv extends Ri {
  constructor(t) {
    super("null", "", t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError("not null", e), t.writeBytes(xv);
  }
  decode(t) {
    return t.readBytes(0), null;
  }
}
const vv = BigInt(0),
  Sv = BigInt(1),
  Iv = BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  );
class Bv extends Ri {
  constructor(e, r, i) {
    const s = (r ? "int" : "uint") + e * 8;
    super(s, s, i, !1);
    tt(this, "size");
    tt(this, "signed");
    Ct(this, { size: e, signed: r }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, r) {
    let i = vt(br.dereference(r, this.type)),
      s = Ps(Iv, Sr * 8);
    if (this.signed) {
      let o = Ps(s, this.size * 8 - 1);
      (i > o || i < -(o + Sv)) && this._throwError("value out-of-bounds", r),
        (i = im(i, 8 * Sr));
    } else
      (i < vv || i > Ps(s, this.size * 8)) &&
        this._throwError("value out-of-bounds", r);
    return e.writeValue(i);
  }
  decode(e) {
    let r = Ps(e.readValue(), this.size * 8);
    return this.signed && (r = Qu(r, this.size * 8)), r;
  }
}
class Rv extends $m {
  constructor(t) {
    super("string", t);
  }
  defaultValue() {
    return "";
  }
  encode(t, e) {
    return super.encode(t, Ei(br.dereference(e, "string")));
  }
  decode(t) {
    return Ju(super.decode(t));
  }
}
class wu extends Ri {
  constructor(e, r) {
    let i = !1;
    const s = [];
    e.forEach((a) => {
      a.dynamic && (i = !0), s.push(a.type);
    });
    const o = "tuple(" + s.join(",") + ")";
    super("tuple", o, r, i);
    tt(this, "coders");
    Ct(this, { coders: Object.freeze(e.slice()) });
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((i) => {
      e.push(i.defaultValue());
    });
    const r = this.coders.reduce((i, s) => {
      const o = s.localName;
      return o && (i[o] || (i[o] = 0), i[o]++), i;
    }, {});
    return (
      this.coders.forEach((i, s) => {
        let o = i.localName;
        !o ||
          r[o] !== 1 ||
          (o === "length" && (o = "_length"), e[o] == null && (e[o] = e[s]));
      }),
      Object.freeze(e)
    );
  }
  encode(e, r) {
    const i = br.dereference(r, "tuple");
    return Wm(e, this.coders, i);
  }
  decode(e) {
    return qm(e, this.coders);
  }
}
function Xf(n, t) {
  return {
    address: oe(n),
    storageKeys: t.map(
      (e, r) => (
        Z(be(e, 32), "invalid slot", `storageKeys[${r}]`, e), e.toLowerCase()
      )
    ),
  };
}
function go(n) {
  if (Array.isArray(n))
    return n.map((e, r) =>
      Array.isArray(e)
        ? (Z(e.length === 2, "invalid slot set", `value[${r}]`, e),
          Xf(e[0], e[1]))
        : (Z(
            e != null && typeof e == "object",
            "invalid address-slot set",
            "value",
            n
          ),
          Xf(e.address, e.storageKeys))
    );
  Z(n != null && typeof n == "object", "invalid access list", "value", n);
  const t = Object.keys(n).map((e) => {
    const r = n[e].reduce((i, s) => ((i[s] = !0), i), {});
    return Xf(e, Object.keys(r).sort());
  });
  return t.sort((e, r) => e.address.localeCompare(r.address)), t;
}
function Qm(n) {
  return {
    address: oe(n.address),
    nonce: vt(n.nonce != null ? n.nonce : 0),
    chainId: vt(n.chainId != null ? n.chainId : 0),
    signature: Fr.from(n.signature),
  };
}
function Pv(n) {
  let t;
  return (
    typeof n == "string" ? (t = kc.computePublicKey(n, !1)) : (t = n.publicKey),
    oe(qe("0x" + t.substring(4)).substring(26))
  );
}
function Cv(n, t) {
  return Pv(kc.recoverPublicKey(n, t));
}
const Xe = BigInt(0),
  Nv = BigInt(2),
  Tv = BigInt(27),
  _v = BigInt(28),
  Ov = BigInt(35),
  Mv = BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  ),
  th = 4096 * 32;
function Lv(n) {
  return {
    blobToKzgCommitment: (r) => {
      if ("computeBlobProof" in n) {
        if (
          "blobToKzgCommitment" in n &&
          typeof n.blobToKzgCommitment == "function"
        )
          return $t(n.blobToKzgCommitment(xt(r)));
      } else if (
        "blobToKzgCommitment" in n &&
        typeof n.blobToKzgCommitment == "function"
      )
        return $t(n.blobToKzgCommitment(r));
      if (
        "blobToKZGCommitment" in n &&
        typeof n.blobToKZGCommitment == "function"
      )
        return $t(n.blobToKZGCommitment(xt(r)));
      Z(!1, "unsupported KZG library", "kzg", n);
    },
    computeBlobKzgProof: (r, i) => {
      if ("computeBlobProof" in n && typeof n.computeBlobProof == "function")
        return $t(n.computeBlobProof(xt(r), xt(i)));
      if (
        "computeBlobKzgProof" in n &&
        typeof n.computeBlobKzgProof == "function"
      )
        return n.computeBlobKzgProof(r, i);
      if (
        "computeBlobKZGProof" in n &&
        typeof n.computeBlobKZGProof == "function"
      )
        return $t(n.computeBlobKZGProof(xt(r), xt(i)));
      Z(!1, "unsupported KZG library", "kzg", n);
    },
  };
}
function Dp(n, t) {
  let e = n.toString(16);
  for (; e.length < 2; ) e = "0" + e;
  return (e += Za(t).substring(4)), "0x" + e;
}
function Ya(n) {
  return n === "0x" ? null : oe(n);
}
function Ul(n, t) {
  try {
    return go(n);
  } catch (e) {
    Z(!1, e.message, t, n);
  }
}
function Uv(n, t) {
  try {
    if (!Array.isArray(n)) throw new Error("authorizationList: invalid array");
    const e = [];
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      if (!Array.isArray(i))
        throw new Error(`authorization[${r}]: invalid array`);
      if (i.length !== 6) throw new Error(`authorization[${r}]: wrong length`);
      if (!i[1]) throw new Error(`authorization[${r}]: null address`);
      e.push({
        address: Ya(i[1]),
        nonce: de(i[2], "nonce"),
        chainId: de(i[0], "chainId"),
        signature: Fr.from({
          yParity: yo(i[3], "yParity"),
          r: vi(i[4], 32),
          s: vi(i[5], 32),
        }),
      });
    }
    return e;
  } catch (e) {
    Z(!1, e.message, t, n);
  }
}
function yo(n, t) {
  return n === "0x" ? 0 : Gt(n, t);
}
function de(n, t) {
  if (n === "0x") return Xe;
  const e = vt(n, t);
  return Z(e <= Mv, "value exceeds uint size", t, e), e;
}
function Xt(n, t) {
  const e = vt(n, "value"),
    r = Qe(e);
  return Z(r.length <= 32, "value too large", `tx.${t}`, e), r;
}
function Fl(n) {
  return go(n).map((t) => [t.address, t.storageKeys]);
}
function Fv(n) {
  return n.map((t) => [
    Xt(t.chainId, "chainId"),
    t.address,
    Xt(t.nonce, "nonce"),
    Xt(t.signature.yParity, "yParity"),
    Qe(t.signature.r),
    Qe(t.signature.s),
  ]);
}
function Dv(n, t) {
  Z(Array.isArray(n), `invalid ${t}`, "value", n);
  for (let e = 0; e < n.length; e++)
    Z(be(n[e], 32), "invalid ${ param } hash", `value[${e}]`, n[e]);
  return n;
}
function zv(n) {
  const t = Yc(n);
  Z(
    Array.isArray(t) && (t.length === 9 || t.length === 6),
    "invalid field count for legacy transaction",
    "data",
    n
  );
  const e = {
    type: 0,
    nonce: yo(t[0], "nonce"),
    gasPrice: de(t[1], "gasPrice"),
    gasLimit: de(t[2], "gasLimit"),
    to: Ya(t[3]),
    value: de(t[4], "value"),
    data: xt(t[5]),
    chainId: Xe,
  };
  if (t.length === 6) return e;
  const r = de(t[6], "v"),
    i = de(t[7], "r"),
    s = de(t[8], "s");
  if (i === Xe && s === Xe) e.chainId = r;
  else {
    let o = (r - Ov) / Nv;
    o < Xe && (o = Xe),
      (e.chainId = o),
      Z(o !== Xe || r === Tv || r === _v, "non-canonical legacy v", "v", t[6]),
      (e.signature = Fr.from({ r: vi(t[7], 32), s: vi(t[8], 32), v: r }));
  }
  return e;
}
function Hv(n, t) {
  const e = [
    Xt(n.nonce, "nonce"),
    Xt(n.gasPrice || 0, "gasPrice"),
    Xt(n.gasLimit, "gasLimit"),
    n.to || "0x",
    Xt(n.value, "value"),
    n.data,
  ];
  let r = Xe;
  if (n.chainId != Xe)
    (r = vt(n.chainId, "tx.chainId")),
      Z(
        !t || t.networkV == null || t.legacyChainId === r,
        "tx.chainId/sig.v mismatch",
        "sig",
        t
      );
  else if (n.signature) {
    const s = n.signature.legacyChainId;
    s != null && (r = s);
  }
  if (!t) return r !== Xe && (e.push(Qe(r)), e.push("0x"), e.push("0x")), ls(e);
  let i = BigInt(27 + t.yParity);
  return (
    r !== Xe
      ? (i = Fr.getChainIdV(r, t.v))
      : BigInt(t.v) !== i && Z(!1, "tx.chainId/sig.v mismatch", "sig", t),
    e.push(Qe(i)),
    e.push(Qe(t.r)),
    e.push(Qe(t.s)),
    ls(e)
  );
}
function Dl(n, t) {
  let e;
  try {
    if (((e = yo(t[0], "yParity")), e !== 0 && e !== 1))
      throw new Error("bad yParity");
  } catch {
    Z(!1, "invalid yParity", "yParity", t[0]);
  }
  const r = vi(t[1], 32),
    i = vi(t[2], 32),
    s = Fr.from({ r, s: i, yParity: e });
  n.signature = s;
}
function Gv(n) {
  const t = Yc($t(n).slice(1));
  Z(
    Array.isArray(t) && (t.length === 9 || t.length === 12),
    "invalid field count for transaction type: 2",
    "data",
    xt(n)
  );
  const e = {
    type: 2,
    chainId: de(t[0], "chainId"),
    nonce: yo(t[1], "nonce"),
    maxPriorityFeePerGas: de(t[2], "maxPriorityFeePerGas"),
    maxFeePerGas: de(t[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: de(t[4], "gasLimit"),
    to: Ya(t[5]),
    value: de(t[6], "value"),
    data: xt(t[7]),
    accessList: Ul(t[8], "accessList"),
  };
  return t.length === 9 || Dl(e, t.slice(9)), e;
}
function Kv(n, t) {
  const e = [
    Xt(n.chainId, "chainId"),
    Xt(n.nonce, "nonce"),
    Xt(n.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Xt(n.maxFeePerGas || 0, "maxFeePerGas"),
    Xt(n.gasLimit, "gasLimit"),
    n.to || "0x",
    Xt(n.value, "value"),
    n.data,
    Fl(n.accessList || []),
  ];
  return (
    t && (e.push(Xt(t.yParity, "yParity")), e.push(Qe(t.r)), e.push(Qe(t.s))),
    Fe(["0x02", ls(e)])
  );
}
function Vv(n) {
  const t = Yc($t(n).slice(1));
  Z(
    Array.isArray(t) && (t.length === 8 || t.length === 11),
    "invalid field count for transaction type: 1",
    "data",
    xt(n)
  );
  const e = {
    type: 1,
    chainId: de(t[0], "chainId"),
    nonce: yo(t[1], "nonce"),
    gasPrice: de(t[2], "gasPrice"),
    gasLimit: de(t[3], "gasLimit"),
    to: Ya(t[4]),
    value: de(t[5], "value"),
    data: xt(t[6]),
    accessList: Ul(t[7], "accessList"),
  };
  return t.length === 8 || Dl(e, t.slice(8)), e;
}
function Wv(n, t) {
  const e = [
    Xt(n.chainId, "chainId"),
    Xt(n.nonce, "nonce"),
    Xt(n.gasPrice || 0, "gasPrice"),
    Xt(n.gasLimit, "gasLimit"),
    n.to || "0x",
    Xt(n.value, "value"),
    n.data,
    Fl(n.accessList || []),
  ];
  return (
    t &&
      (e.push(Xt(t.yParity, "recoveryParam")),
      e.push(Qe(t.r)),
      e.push(Qe(t.s))),
    Fe(["0x01", ls(e)])
  );
}
function qv(n) {
  let t = Yc($t(n).slice(1)),
    e = "3",
    r = null;
  if (t.length === 4 && Array.isArray(t[0])) {
    e = "3 (network format)";
    const s = t[1],
      o = t[2],
      a = t[3];
    Z(
      Array.isArray(s),
      "invalid network format: blobs not an array",
      "fields[1]",
      s
    ),
      Z(
        Array.isArray(o),
        "invalid network format: commitments not an array",
        "fields[2]",
        o
      ),
      Z(
        Array.isArray(a),
        "invalid network format: proofs not an array",
        "fields[3]",
        a
      ),
      Z(
        s.length === o.length,
        "invalid network format: blobs/commitments length mismatch",
        "fields",
        t
      ),
      Z(
        s.length === a.length,
        "invalid network format: blobs/proofs length mismatch",
        "fields",
        t
      ),
      (r = []);
    for (let c = 0; c < t[1].length; c++)
      r.push({ data: s[c], commitment: o[c], proof: a[c] });
    t = t[0];
  }
  Z(
    Array.isArray(t) && (t.length === 11 || t.length === 14),
    `invalid field count for transaction type: ${e}`,
    "data",
    xt(n)
  );
  const i = {
    type: 3,
    chainId: de(t[0], "chainId"),
    nonce: yo(t[1], "nonce"),
    maxPriorityFeePerGas: de(t[2], "maxPriorityFeePerGas"),
    maxFeePerGas: de(t[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: de(t[4], "gasLimit"),
    to: Ya(t[5]),
    value: de(t[6], "value"),
    data: xt(t[7]),
    accessList: Ul(t[8], "accessList"),
    maxFeePerBlobGas: de(t[9], "maxFeePerBlobGas"),
    blobVersionedHashes: t[10],
  };
  r && (i.blobs = r),
    Z(i.to != null, `invalid address for transaction type: ${e}`, "data", n),
    Z(
      Array.isArray(i.blobVersionedHashes),
      "invalid blobVersionedHashes: must be an array",
      "data",
      n
    );
  for (let s = 0; s < i.blobVersionedHashes.length; s++)
    Z(
      be(i.blobVersionedHashes[s], 32),
      `invalid blobVersionedHash at index ${s}: must be length 32`,
      "data",
      n
    );
  return t.length === 11 || Dl(i, t.slice(11)), i;
}
function $v(n, t, e) {
  const r = [
    Xt(n.chainId, "chainId"),
    Xt(n.nonce, "nonce"),
    Xt(n.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Xt(n.maxFeePerGas || 0, "maxFeePerGas"),
    Xt(n.gasLimit, "gasLimit"),
    n.to || xc,
    Xt(n.value, "value"),
    n.data,
    Fl(n.accessList || []),
    Xt(n.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
    Dv(n.blobVersionedHashes || [], "blobVersionedHashes"),
  ];
  return t &&
    (r.push(Xt(t.yParity, "yParity")), r.push(Qe(t.r)), r.push(Qe(t.s)), e)
    ? Fe([
        "0x03",
        ls([
          r,
          e.map((i) => i.data),
          e.map((i) => i.commitment),
          e.map((i) => i.proof),
        ]),
      ])
    : Fe(["0x03", ls(r)]);
}
function Qv(n) {
  const t = Yc($t(n).slice(1));
  Z(
    Array.isArray(t) && (t.length === 10 || t.length === 13),
    "invalid field count for transaction type: 4",
    "data",
    xt(n)
  );
  const e = {
    type: 4,
    chainId: de(t[0], "chainId"),
    nonce: yo(t[1], "nonce"),
    maxPriorityFeePerGas: de(t[2], "maxPriorityFeePerGas"),
    maxFeePerGas: de(t[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: de(t[4], "gasLimit"),
    to: Ya(t[5]),
    value: de(t[6], "value"),
    data: xt(t[7]),
    accessList: Ul(t[8], "accessList"),
    authorizationList: Uv(t[9], "authorizationList"),
  };
  return t.length === 10 || Dl(e, t.slice(10)), e;
}
function Jv(n, t) {
  const e = [
    Xt(n.chainId, "chainId"),
    Xt(n.nonce, "nonce"),
    Xt(n.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Xt(n.maxFeePerGas || 0, "maxFeePerGas"),
    Xt(n.gasLimit, "gasLimit"),
    n.to || "0x",
    Xt(n.value, "value"),
    n.data,
    Fl(n.accessList || []),
    Fv(n.authorizationList || []),
  ];
  return (
    t && (e.push(Xt(t.yParity, "yParity")), e.push(Qe(t.r)), e.push(Qe(t.s))),
    Fe(["0x04", ls(e)])
  );
}
var gn, ra, na, ia, sa, oa, aa, ca, ua, la, fa, ha, Vs, Wi, Cn, qi, da, pa, Iu;
const Bn = class Bn {
  constructor() {
    ut(this, pa);
    ut(this, gn);
    ut(this, ra);
    ut(this, na);
    ut(this, ia);
    ut(this, sa);
    ut(this, oa);
    ut(this, aa);
    ut(this, ca);
    ut(this, ua);
    ut(this, la);
    ut(this, fa);
    ut(this, ha);
    ut(this, Vs);
    ut(this, Wi);
    ut(this, Cn);
    ut(this, qi);
    ut(this, da);
    Q(this, gn, null),
      Q(this, ra, null),
      Q(this, ia, 0),
      Q(this, sa, Xe),
      Q(this, oa, null),
      Q(this, aa, null),
      Q(this, ca, null),
      Q(this, na, "0x"),
      Q(this, ua, Xe),
      Q(this, la, Xe),
      Q(this, fa, null),
      Q(this, ha, null),
      Q(this, Vs, null),
      Q(this, Wi, null),
      Q(this, Cn, null),
      Q(this, qi, null),
      Q(this, da, null);
  }
  get type() {
    return C(this, gn);
  }
  set type(t) {
    switch (t) {
      case null:
        Q(this, gn, null);
        break;
      case 0:
      case "legacy":
        Q(this, gn, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        Q(this, gn, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        Q(this, gn, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        Q(this, gn, 3);
        break;
      case 4:
      case "pectra":
      case "eip-7702":
        Q(this, gn, 4);
        break;
      default:
        Z(!1, "unsupported transaction type", "type", t);
    }
  }
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
      case 3:
        return "eip-4844";
      case 4:
        return "eip-7702";
    }
    return null;
  }
  get to() {
    const t = C(this, ra);
    return t == null && this.type === 3 ? xc : t;
  }
  set to(t) {
    Q(this, ra, t == null ? null : oe(t));
  }
  get nonce() {
    return C(this, ia);
  }
  set nonce(t) {
    Q(this, ia, Gt(t, "value"));
  }
  get gasLimit() {
    return C(this, sa);
  }
  set gasLimit(t) {
    Q(this, sa, vt(t));
  }
  get gasPrice() {
    const t = C(this, oa);
    return t == null && (this.type === 0 || this.type === 1) ? Xe : t;
  }
  set gasPrice(t) {
    Q(this, oa, t == null ? null : vt(t, "gasPrice"));
  }
  get maxPriorityFeePerGas() {
    const t = C(this, aa);
    return t ?? (this.type === 2 || this.type === 3 ? Xe : null);
  }
  set maxPriorityFeePerGas(t) {
    Q(this, aa, t == null ? null : vt(t, "maxPriorityFeePerGas"));
  }
  get maxFeePerGas() {
    const t = C(this, ca);
    return t ?? (this.type === 2 || this.type === 3 ? Xe : null);
  }
  set maxFeePerGas(t) {
    Q(this, ca, t == null ? null : vt(t, "maxFeePerGas"));
  }
  get data() {
    return C(this, na);
  }
  set data(t) {
    Q(this, na, xt(t));
  }
  get value() {
    return C(this, ua);
  }
  set value(t) {
    Q(this, ua, vt(t, "value"));
  }
  get chainId() {
    return C(this, la);
  }
  set chainId(t) {
    Q(this, la, vt(t));
  }
  get signature() {
    return C(this, fa) || null;
  }
  set signature(t) {
    Q(this, fa, t == null ? null : Fr.from(t));
  }
  get accessList() {
    const t = C(this, ha) || null;
    return (
      t ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null)
    );
  }
  set accessList(t) {
    Q(this, ha, t == null ? null : go(t));
  }
  get authorizationList() {
    const t = C(this, da) || null;
    return t == null && this.type === 4 ? [] : t;
  }
  set authorizationList(t) {
    Q(this, da, t == null ? null : t.map((e) => Qm(e)));
  }
  get maxFeePerBlobGas() {
    const t = C(this, Vs);
    return t == null && this.type === 3 ? Xe : t;
  }
  set maxFeePerBlobGas(t) {
    Q(this, Vs, t == null ? null : vt(t, "maxFeePerBlobGas"));
  }
  get blobVersionedHashes() {
    let t = C(this, Wi);
    return t == null && this.type === 3 ? [] : t;
  }
  set blobVersionedHashes(t) {
    if (t != null) {
      Z(Array.isArray(t), "blobVersionedHashes must be an Array", "value", t),
        (t = t.slice());
      for (let e = 0; e < t.length; e++)
        Z(be(t[e], 32), "invalid blobVersionedHash", `value[${e}]`, t[e]);
    }
    Q(this, Wi, t);
  }
  get blobs() {
    return C(this, qi) == null
      ? null
      : C(this, qi).map((t) => Object.assign({}, t));
  }
  set blobs(t) {
    if (t == null) {
      Q(this, qi, null);
      return;
    }
    const e = [],
      r = [];
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (Md(s)) {
        ht(
          C(this, Cn),
          "adding a raw blob requires a KZG library",
          "UNSUPPORTED_OPERATION",
          { operation: "set blobs()" }
        );
        let o = $t(s);
        if (
          (Z(o.length <= th, "blob is too large", `blobs[${i}]`, s),
          o.length !== th)
        ) {
          const f = new Uint8Array(th);
          f.set(o), (o = f);
        }
        const a = C(this, Cn).blobToKzgCommitment(o),
          c = xt(C(this, Cn).computeBlobKzgProof(o, a));
        e.push({ data: xt(o), commitment: xt(a), proof: c }), r.push(Dp(1, a));
      } else {
        const o = xt(s.commitment);
        e.push({ data: xt(s.data), commitment: o, proof: xt(s.proof) }),
          r.push(Dp(1, o));
      }
    }
    Q(this, qi, e), Q(this, Wi, r);
  }
  get kzg() {
    return C(this, Cn);
  }
  set kzg(t) {
    t == null ? Q(this, Cn, null) : Q(this, Cn, Lv(t));
  }
  get hash() {
    return this.signature == null
      ? null
      : qe(pt(this, pa, Iu).call(this, !0, !1));
  }
  get unsignedHash() {
    return qe(this.unsignedSerialized);
  }
  get from() {
    return this.signature == null
      ? null
      : Cv(this.unsignedHash, this.signature);
  }
  get fromPublicKey() {
    return this.signature == null
      ? null
      : kc.recoverPublicKey(this.unsignedHash, this.signature);
  }
  isSigned() {
    return this.signature != null;
  }
  get serialized() {
    return pt(this, pa, Iu).call(this, !0, !0);
  }
  get unsignedSerialized() {
    return pt(this, pa, Iu).call(this, !1, !1);
  }
  inferType() {
    const t = this.inferTypes();
    return t.indexOf(2) >= 0 ? 2 : t.pop();
  }
  inferTypes() {
    const t = this.gasPrice != null,
      e = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null,
      r = this.accessList != null,
      i = C(this, Vs) != null || C(this, Wi);
    this.maxFeePerGas != null &&
      this.maxPriorityFeePerGas != null &&
      ht(
        this.maxFeePerGas >= this.maxPriorityFeePerGas,
        "priorityFee cannot be more than maxFee",
        "BAD_DATA",
        { value: this }
      ),
      ht(
        !e || (this.type !== 0 && this.type !== 1),
        "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas",
        "BAD_DATA",
        { value: this }
      ),
      ht(
        this.type !== 0 || !r,
        "legacy transaction cannot have accessList",
        "BAD_DATA",
        { value: this }
      );
    const s = [];
    return (
      this.type != null
        ? s.push(this.type)
        : this.authorizationList && this.authorizationList.length
        ? s.push(4)
        : e
        ? s.push(2)
        : t
        ? (s.push(1), r || s.push(0))
        : r
        ? (s.push(1), s.push(2))
        : ((i && this.to) || (s.push(0), s.push(1), s.push(2)), s.push(3)),
      s.sort(),
      s
    );
  }
  isLegacy() {
    return this.type === 0;
  }
  isBerlin() {
    return this.type === 1;
  }
  isLondon() {
    return this.type === 2;
  }
  isCancun() {
    return this.type === 3;
  }
  clone() {
    return Bn.from(this);
  }
  toJSON() {
    const t = (e) => (e == null ? null : e.toString());
    return {
      type: this.type,
      to: this.to,
      data: this.data,
      nonce: this.nonce,
      gasLimit: t(this.gasLimit),
      gasPrice: t(this.gasPrice),
      maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
      maxFeePerGas: t(this.maxFeePerGas),
      value: t(this.value),
      chainId: t(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList,
    };
  }
  static from(t) {
    if (t == null) return new Bn();
    if (typeof t == "string") {
      const r = $t(t);
      if (r[0] >= 127) return Bn.from(zv(r));
      switch (r[0]) {
        case 1:
          return Bn.from(Vv(r));
        case 2:
          return Bn.from(Gv(r));
        case 3:
          return Bn.from(qv(r));
        case 4:
          return Bn.from(Qv(r));
      }
      ht(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
        operation: "from",
      });
    }
    const e = new Bn();
    return (
      t.type != null && (e.type = t.type),
      t.to != null && (e.to = t.to),
      t.nonce != null && (e.nonce = t.nonce),
      t.gasLimit != null && (e.gasLimit = t.gasLimit),
      t.gasPrice != null && (e.gasPrice = t.gasPrice),
      t.maxPriorityFeePerGas != null &&
        (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
      t.maxFeePerGas != null && (e.maxFeePerGas = t.maxFeePerGas),
      t.maxFeePerBlobGas != null && (e.maxFeePerBlobGas = t.maxFeePerBlobGas),
      t.data != null && (e.data = t.data),
      t.value != null && (e.value = t.value),
      t.chainId != null && (e.chainId = t.chainId),
      t.signature != null && (e.signature = Fr.from(t.signature)),
      t.accessList != null && (e.accessList = t.accessList),
      t.authorizationList != null &&
        (e.authorizationList = t.authorizationList),
      t.blobVersionedHashes != null &&
        (e.blobVersionedHashes = t.blobVersionedHashes),
      t.kzg != null && (e.kzg = t.kzg),
      t.blobs != null && (e.blobs = t.blobs),
      t.hash != null &&
        (Z(e.isSigned(), "unsigned transaction cannot define '.hash'", "tx", t),
        Z(e.hash === t.hash, "hash mismatch", "tx", t)),
      t.from != null &&
        (Z(e.isSigned(), "unsigned transaction cannot define '.from'", "tx", t),
        Z(
          e.from.toLowerCase() === (t.from || "").toLowerCase(),
          "from mismatch",
          "tx",
          t
        )),
      e
    );
  }
};
(gn = new WeakMap()),
  (ra = new WeakMap()),
  (na = new WeakMap()),
  (ia = new WeakMap()),
  (sa = new WeakMap()),
  (oa = new WeakMap()),
  (aa = new WeakMap()),
  (ca = new WeakMap()),
  (ua = new WeakMap()),
  (la = new WeakMap()),
  (fa = new WeakMap()),
  (ha = new WeakMap()),
  (Vs = new WeakMap()),
  (Wi = new WeakMap()),
  (Cn = new WeakMap()),
  (qi = new WeakMap()),
  (da = new WeakMap()),
  (pa = new WeakSet()),
  (Iu = function (t, e) {
    ht(
      !t || this.signature != null,
      "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized",
      "UNSUPPORTED_OPERATION",
      { operation: ".serialized" }
    );
    const r = t ? this.signature : null;
    switch (this.inferType()) {
      case 0:
        return Hv(this, r);
      case 1:
        return Wv(this, r);
      case 2:
        return Kv(this, r);
      case 3:
        return $v(this, r, e ? this.blobs : null);
      case 4:
        return Jv(this, r);
    }
    ht(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
      operation: ".serialized",
    });
  });
let Yu = Bn;
function so(n) {
  return qe(Ei(n));
}
var jv =
  "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const zp = new Map([
    [8217, "apostrophe"],
    [8260, "fraction slash"],
    [12539, "middle dot"],
  ]),
  Hp = 4;
function Zv(n) {
  let t = 0;
  function e() {
    return (n[t++] << 8) | n[t++];
  }
  let r = e(),
    i = 1,
    s = [0, 1];
  for (let it = 1; it < r; it++) s.push((i += e()));
  let o = e(),
    a = t;
  t += o;
  let c = 0,
    f = 0;
  function h() {
    return c == 0 && ((f = (f << 8) | n[t++]), (c = 8)), (f >> --c) & 1;
  }
  const b = 31,
    S = 2 ** b,
    P = S >>> 1,
    M = P >> 1,
    N = S - 1;
  let D = 0;
  for (let it = 0; it < b; it++) D = (D << 1) | h();
  let q = [],
    z = 0,
    V = S;
  for (;;) {
    let it = Math.floor(((D - z + 1) * i - 1) / V),
      X = 0,
      nt = r;
    for (; nt - X > 1; ) {
      let B = (X + nt) >>> 1;
      it < s[B] ? (nt = B) : (X = B);
    }
    if (X == 0) break;
    q.push(X);
    let R = z + Math.floor((V * s[X]) / i),
      x = z + Math.floor((V * s[X + 1]) / i) - 1;
    for (; ((R ^ x) & P) == 0; )
      (D = ((D << 1) & N) | h()), (R = (R << 1) & N), (x = ((x << 1) & N) | 1);
    for (; R & ~x & M; )
      (D = (D & P) | ((D << 1) & (N >>> 1)) | h()),
        (R = (R << 1) ^ P),
        (x = ((x ^ P) << 1) | P | 1);
    (z = R), (V = 1 + x - R);
  }
  let et = r - 4;
  return q.map((it) => {
    switch (it - et) {
      case 3:
        return et + 65792 + ((n[a++] << 16) | (n[a++] << 8) | n[a++]);
      case 2:
        return et + 256 + ((n[a++] << 8) | n[a++]);
      case 1:
        return et + n[a++];
      default:
        return it - 1;
    }
  });
}
function Yv(n) {
  let t = 0;
  return () => n[t++];
}
function Jm(n) {
  return Yv(Zv(Xv(n)));
}
function Xv(n) {
  let t = [];
  [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  ].forEach((i, s) => (t[i.charCodeAt(0)] = s));
  let e = n.length,
    r = new Uint8Array((6 * e) >> 3);
  for (let i = 0, s = 0, o = 0, a = 0; i < e; i++)
    (a = (a << 6) | t[n.charCodeAt(i)]),
      (o += 6),
      o >= 8 && (r[s++] = a >> (o -= 8));
  return r;
}
function tS(n) {
  return n & 1 ? ~n >> 1 : n >> 1;
}
function eS(n, t) {
  let e = Array(n);
  for (let r = 0, i = 0; r < n; r++) e[r] = i += tS(t());
  return e;
}
function vc(n, t = 0) {
  let e = [];
  for (;;) {
    let r = n(),
      i = n();
    if (!i) break;
    t += r;
    for (let s = 0; s < i; s++) e.push(t + s);
    t += i + 1;
  }
  return e;
}
function jm(n) {
  return Sc(() => {
    let t = vc(n);
    if (t.length) return t;
  });
}
function Zm(n) {
  let t = [];
  for (;;) {
    let e = n();
    if (e == 0) break;
    t.push(rS(e, n));
  }
  for (;;) {
    let e = n() - 1;
    if (e < 0) break;
    t.push(nS(e, n));
  }
  return t.flat();
}
function Sc(n) {
  let t = [];
  for (;;) {
    let e = n(t.length);
    if (!e) break;
    t.push(e);
  }
  return t;
}
function Ym(n, t, e) {
  let r = Array(n)
    .fill()
    .map(() => []);
  for (let i = 0; i < t; i++) eS(n, e).forEach((s, o) => r[o].push(s));
  return r;
}
function rS(n, t) {
  let e = 1 + t(),
    r = t(),
    i = Sc(t);
  return Ym(i.length, 1 + n, t).flatMap((o, a) => {
    let [c, ...f] = o;
    return Array(i[a])
      .fill()
      .map((h, b) => {
        let S = b * r;
        return [c + b * e, f.map((P) => P + S)];
      });
  });
}
function nS(n, t) {
  let e = 1 + t();
  return Ym(e, 1 + n, t).map((i) => [i[0], i.slice(1)]);
}
function iS(n) {
  let t = [],
    e = vc(n);
  return i(r([]), []), t;
  function r(s) {
    let o = n(),
      a = Sc(() => {
        let c = vc(n).map((f) => e[f]);
        if (c.length) return r(c);
      });
    return { S: o, B: a, Q: s };
  }
  function i({ S: s, B: o }, a, c) {
    if (!(s & 4 && c === a[a.length - 1])) {
      s & 2 && (c = a[a.length - 1]), s & 1 && t.push(a);
      for (let f of o) for (let h of f.Q) i(f, [...a, h], c);
    }
  }
}
function sS(n) {
  return n.toString(16).toUpperCase().padStart(2, "0");
}
function Xm(n) {
  return `{${sS(n)}}`;
}
function oS(n) {
  let t = [];
  for (let e = 0, r = n.length; e < r; ) {
    let i = n.codePointAt(e);
    (e += i < 65536 ? 1 : 2), t.push(i);
  }
  return t;
}
function Ka(n) {
  let e = n.length;
  if (e < 4096) return String.fromCodePoint(...n);
  let r = [];
  for (let i = 0; i < e; )
    r.push(String.fromCodePoint(...n.slice(i, (i += 4096))));
  return r.join("");
}
function aS(n, t) {
  let e = n.length,
    r = e - t.length;
  for (let i = 0; r == 0 && i < e; i++) r = n[i] - t[i];
  return r;
}
var cS =
  "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
const Ic = 44032,
  Xu = 4352,
  tl = 4449,
  el = 4519,
  tw = 19,
  ew = 21,
  Va = 28,
  rl = ew * Va,
  uS = tw * rl,
  lS = Ic + uS,
  fS = Xu + tw,
  hS = tl + ew,
  dS = el + Va;
function oc(n) {
  return (n >> 24) & 255;
}
function rw(n) {
  return n & 16777215;
}
let Mh, Gp, Lh, Bu;
function pS() {
  let n = Jm(cS);
  (Mh = new Map(jm(n).flatMap((t, e) => t.map((r) => [r, (e + 1) << 24])))),
    (Gp = new Set(vc(n))),
    (Lh = new Map()),
    (Bu = new Map());
  for (let [t, e] of Zm(n)) {
    if (!Gp.has(t) && e.length == 2) {
      let [r, i] = e,
        s = Bu.get(r);
      s || ((s = new Map()), Bu.set(r, s)), s.set(i, t);
    }
    Lh.set(t, e.reverse());
  }
}
function nw(n) {
  return n >= Ic && n < lS;
}
function gS(n, t) {
  if (n >= Xu && n < fS && t >= tl && t < hS)
    return Ic + (n - Xu) * rl + (t - tl) * Va;
  if (nw(n) && t > el && t < dS && (n - Ic) % Va == 0) return n + (t - el);
  {
    let e = Bu.get(n);
    return e && ((e = e.get(t)), e) ? e : -1;
  }
}
function iw(n) {
  Mh || pS();
  let t = [],
    e = [],
    r = !1;
  function i(s) {
    let o = Mh.get(s);
    o && ((r = !0), (s |= o)), t.push(s);
  }
  for (let s of n)
    for (;;) {
      if (s < 128) t.push(s);
      else if (nw(s)) {
        let o = s - Ic,
          a = (o / rl) | 0,
          c = ((o % rl) / Va) | 0,
          f = o % Va;
        i(Xu + a), i(tl + c), f > 0 && i(el + f);
      } else {
        let o = Lh.get(s);
        o ? e.push(...o) : i(s);
      }
      if (!e.length) break;
      s = e.pop();
    }
  if (r && t.length > 1) {
    let s = oc(t[0]);
    for (let o = 1; o < t.length; o++) {
      let a = oc(t[o]);
      if (a == 0 || s <= a) {
        s = a;
        continue;
      }
      let c = o - 1;
      for (;;) {
        let f = t[c + 1];
        if (((t[c + 1] = t[c]), (t[c] = f), !c || ((s = oc(t[--c])), s <= a)))
          break;
      }
      s = oc(t[o]);
    }
  }
  return t;
}
function yS(n) {
  let t = [],
    e = [],
    r = -1,
    i = 0;
  for (let s of n) {
    let o = oc(s),
      a = rw(s);
    if (r == -1) o == 0 ? (r = a) : t.push(a);
    else if (i > 0 && i >= o)
      o == 0 ? (t.push(r, ...e), (e.length = 0), (r = a)) : e.push(a), (i = o);
    else {
      let c = gS(r, a);
      c >= 0
        ? (r = c)
        : i == 0 && o == 0
        ? (t.push(r), (r = a))
        : (e.push(a), (i = o));
    }
  }
  return r >= 0 && t.push(r, ...e), t;
}
function sw(n) {
  return iw(n).map(rw);
}
function mS(n) {
  return yS(iw(n));
}
const Kp = 45,
  ow = ".",
  aw = 65039,
  cw = 1,
  nl = (n) => Array.from(n);
function Bc(n, t) {
  return n.P.has(t) || n.Q.has(t);
}
class wS extends Array {
  get is_emoji() {
    return !0;
  }
}
let Uh, uw, Ns, Fh, lw, Vo, eh, Io, ws, Vp, Dh;
function Wd() {
  if (Uh) return;
  let n = Jm(jv);
  const t = () => vc(n),
    e = () => new Set(t()),
    r = (h, b) => b.forEach((S) => h.add(S));
  (Uh = new Map(Zm(n))),
    (uw = e()),
    (Ns = t()),
    (Fh = new Set(t().map((h) => Ns[h]))),
    (Ns = new Set(Ns)),
    (lw = e()),
    e();
  let i = jm(n),
    s = n();
  const o = () => {
    let h = new Set();
    return t().forEach((b) => r(h, i[b])), r(h, t()), h;
  };
  (Vo = Sc((h) => {
    let b = Sc(n).map((S) => S + 96);
    if (b.length) {
      let S = h >= s;
      (b[0] -= 32), (b = Ka(b)), S && (b = `Restricted[${b}]`);
      let P = o(),
        M = o(),
        N = !n();
      return { N: b, P, Q: M, M: N, R: S };
    }
  })),
    (eh = e()),
    (Io = new Map());
  let a = t()
    .concat(nl(eh))
    .sort((h, b) => h - b);
  a.forEach((h, b) => {
    let S = n(),
      P = (a[b] = S ? a[b - S] : { V: [], M: new Map() });
    P.V.push(h), eh.has(h) || Io.set(h, P);
  });
  for (let { V: h, M: b } of new Set(Io.values())) {
    let S = [];
    for (let M of h) {
      let N = Vo.filter((q) => Bc(q, M)),
        D = S.find(({ G: q }) => N.some((z) => q.has(z)));
      D || ((D = { G: new Set(), V: [] }), S.push(D)), D.V.push(M), r(D.G, N);
    }
    let P = S.flatMap((M) => nl(M.G));
    for (let { G: M, V: N } of S) {
      let D = new Set(P.filter((q) => !M.has(q)));
      for (let q of N) b.set(q, D);
    }
  }
  ws = new Set();
  let c = new Set();
  const f = (h) => (ws.has(h) ? c.add(h) : ws.add(h));
  for (let h of Vo) {
    for (let b of h.P) f(b);
    for (let b of h.Q) f(b);
  }
  for (let h of ws) !Io.has(h) && !c.has(h) && Io.set(h, cw);
  r(ws, sw(ws)),
    (Vp = iS(n)
      .map((h) => wS.from(h))
      .sort(aS)),
    (Dh = new Map());
  for (let h of Vp) {
    let b = [Dh];
    for (let S of h) {
      let P = b.map((M) => {
        let N = M.get(S);
        return N || ((N = new Map()), M.set(S, N)), N;
      });
      S === aw ? b.push(...P) : (b = P);
    }
    for (let S of b) S.V = h;
  }
}
function qd(n) {
  return (fw(n) ? "" : `${$d(zl([n]))} `) + Xm(n);
}
function $d(n) {
  return `"${n}"‎`;
}
function bS(n) {
  if (n.length >= 4 && n[2] == Kp && n[3] == Kp)
    throw new Error(`invalid label extension: "${Ka(n.slice(0, 4))}"`);
}
function AS(n) {
  for (let e = n.lastIndexOf(95); e > 0; )
    if (n[--e] !== 95) throw new Error("underscore allowed only at start");
}
function ES(n) {
  let t = n[0],
    e = zp.get(t);
  if (e) throw hc(`leading ${e}`);
  let r = n.length,
    i = -1;
  for (let s = 1; s < r; s++) {
    t = n[s];
    let o = zp.get(t);
    if (o) {
      if (i == s) throw hc(`${e} + ${o}`);
      (i = s + 1), (e = o);
    }
  }
  if (i == r) throw hc(`trailing ${e}`);
}
function zl(n, t = 1 / 0, e = Xm) {
  let r = [];
  xS(n[0]) && r.push("◌"),
    n.length > t && ((t >>= 1), (n = [...n.slice(0, t), 8230, ...n.slice(-t)]));
  let i = 0,
    s = n.length;
  for (let o = 0; o < s; o++) {
    let a = n[o];
    fw(a) && (r.push(Ka(n.slice(i, o))), r.push(e(a)), (i = o + 1));
  }
  return r.push(Ka(n.slice(i, s))), r.join("");
}
function xS(n) {
  return Wd(), Ns.has(n);
}
function fw(n) {
  return Wd(), lw.has(n);
}
function kS(n) {
  return BS(vS(n, mS, CS));
}
function vS(n, t, e) {
  if (!n) return [];
  Wd();
  let r = 0;
  return n.split(ow).map((i) => {
    let s = oS(i),
      o = { input: s, offset: r };
    r += s.length + 1;
    try {
      let a = (o.tokens = PS(s, t, e)),
        c = a.length,
        f;
      if (!c) throw new Error("empty label");
      let h = (o.output = a.flat());
      if (
        (AS(h), !(o.emoji = c > 1 || a[0].is_emoji) && h.every((S) => S < 128))
      )
        bS(h), (f = "ASCII");
      else {
        let S = a.flatMap((P) => (P.is_emoji ? [] : P));
        if (!S.length) f = "Emoji";
        else {
          if (Ns.has(h[0])) throw hc("leading combining mark");
          for (let N = 1; N < c; N++) {
            let D = a[N];
            if (!D.is_emoji && Ns.has(D[0]))
              throw hc(
                `emoji + combining mark: "${Ka(a[N - 1])} + ${zl([D[0]])}"`
              );
          }
          ES(h);
          let P = nl(new Set(S)),
            [M] = IS(P);
          RS(M, S), SS(M, P), (f = M.N);
        }
      }
      o.type = f;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function SS(n, t) {
  let e,
    r = [];
  for (let i of t) {
    let s = Io.get(i);
    if (s === cw) return;
    if (s) {
      let o = s.M.get(i);
      if (((e = e ? e.filter((a) => o.has(a)) : nl(o)), !e.length)) return;
    } else r.push(i);
  }
  if (e) {
    for (let i of e)
      if (r.every((s) => Bc(i, s)))
        throw new Error(`whole-script confusable: ${n.N}/${i.N}`);
  }
}
function IS(n) {
  let t = Vo;
  for (let e of n) {
    let r = t.filter((i) => Bc(i, e));
    if (!r.length) throw Vo.some((i) => Bc(i, e)) ? dw(t[0], e) : hw(e);
    if (((t = r), r.length == 1)) break;
  }
  return t;
}
function BS(n) {
  return n
    .map(({ input: t, error: e, output: r }) => {
      if (e) {
        let i = e.message;
        throw new Error(
          n.length == 1 ? i : `Invalid label ${$d(zl(t, 63))}: ${i}`
        );
      }
      return Ka(r);
    })
    .join(ow);
}
function hw(n) {
  return new Error(`disallowed character: ${qd(n)}`);
}
function dw(n, t) {
  let e = qd(t),
    r = Vo.find((i) => i.P.has(t));
  return r && (e = `${r.N} ${e}`), new Error(`illegal mixture: ${n.N} + ${e}`);
}
function hc(n) {
  return new Error(`illegal placement: ${n}`);
}
function RS(n, t) {
  for (let e of t) if (!Bc(n, e)) throw dw(n, e);
  if (n.M) {
    let e = sw(t);
    for (let r = 1, i = e.length; r < i; r++)
      if (Fh.has(e[r])) {
        let s = r + 1;
        for (let o; s < i && Fh.has((o = e[s])); s++)
          for (let a = r; a < s; a++)
            if (e[a] == o)
              throw new Error(`duplicate non-spacing marks: ${qd(o)}`);
        if (s - r > Hp)
          throw new Error(
            `excessive non-spacing marks: ${$d(zl(e.slice(r - 1, s)))} (${
              s - r
            }/${Hp})`
          );
        r = s;
      }
  }
}
function PS(n, t, e) {
  let r = [],
    i = [];
  for (n = n.slice().reverse(); n.length; ) {
    let s = NS(n);
    if (s) i.length && (r.push(t(i)), (i = [])), r.push(e(s));
    else {
      let o = n.pop();
      if (ws.has(o)) i.push(o);
      else {
        let a = Uh.get(o);
        if (a) i.push(...a);
        else if (!uw.has(o)) throw hw(o);
      }
    }
  }
  return i.length && r.push(t(i)), r;
}
function CS(n) {
  return n.filter((t) => t != aw);
}
function NS(n, t) {
  let e = Dh,
    r,
    i = n.length;
  for (; i && ((e = e.get(n[--i])), !!e); ) {
    let { V: s } = e;
    s && ((r = s), (n.length = i));
  }
  return r;
}
const pw = new Uint8Array(32);
pw.fill(0);
function Wp(n) {
  return Z(n.length !== 0, "invalid ENS name; empty component", "comp", n), n;
}
function gw(n) {
  const t = Ei(TS(n)),
    e = [];
  if (n.length === 0) return e;
  let r = 0;
  for (let i = 0; i < t.length; i++)
    t[i] === 46 && (e.push(Wp(t.slice(r, i))), (r = i + 1));
  return (
    Z(r < t.length, "invalid ENS name; empty component", "name", n),
    e.push(Wp(t.slice(r))),
    e
  );
}
function TS(n) {
  try {
    if (n.length === 0) throw new Error("empty label");
    return kS(n);
  } catch (t) {
    Z(!1, `invalid ENS name (${t.message})`, "name", n);
  }
}
function zh(n) {
  Z(typeof n == "string", "invalid ENS name; not a string", "name", n),
    Z(n.length, "invalid ENS name (empty label)", "name", n);
  let t = pw;
  const e = gw(n);
  for (; e.length; ) t = qe(Fe([t, qe(e.pop())]));
  return xt(t);
}
function _S(n, t) {
  const e = t;
  return (
    Z(e <= 255, "DNS encoded label cannot exceed 255", "length", e),
    xt(
      Fe(
        gw(n).map((r) => {
          Z(
            r.length <= e,
            `label ${JSON.stringify(n)} exceeds ${e} bytes`,
            "name",
            n
          );
          const i = new Uint8Array(r.length + 1);
          return i.set(r, 1), (i[0] = i.length - 1), i;
        })
      )
    ) + "00"
  );
}
const yw = new Uint8Array(32);
yw.fill(0);
const OS = BigInt(-1),
  mw = BigInt(0),
  ww = BigInt(1),
  MS = BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  );
function LS(n) {
  const t = $t(n),
    e = t.length % 32;
  return e ? Fe([t, yw.slice(e)]) : xt(t);
}
const US = us(ww, 32),
  FS = us(mw, 32),
  qp = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32",
  },
  rh = ["name", "version", "chainId", "verifyingContract", "salt"];
function $p(n) {
  return function (t) {
    return (
      Z(
        typeof t == "string",
        `invalid domain value for ${JSON.stringify(n)}`,
        `domain.${n}`,
        t
      ),
      t
    );
  };
}
const DS = {
  name: $p("name"),
  version: $p("version"),
  chainId: function (n) {
    const t = vt(n, "domain.chainId");
    return (
      Z(t >= 0, "invalid chain ID", "domain.chainId", n),
      Number.isSafeInteger(t) ? Number(t) : wn(t)
    );
  },
  verifyingContract: function (n) {
    try {
      return oe(n).toLowerCase();
    } catch {}
    Z(
      !1,
      'invalid domain value "verifyingContract"',
      "domain.verifyingContract",
      n
    );
  },
  salt: function (n) {
    const t = $t(n, "domain.salt");
    return (
      Z(t.length === 32, 'invalid domain value "salt"', "domain.salt", n), xt(t)
    );
  },
};
function nh(n) {
  {
    const t = n.match(/^(u?)int(\d+)$/);
    if (t) {
      const e = t[1] === "",
        r = parseInt(t[2]);
      Z(
        r % 8 === 0 && r !== 0 && r <= 256 && t[2] === String(r),
        "invalid numeric width",
        "type",
        n
      );
      const i = Ps(MS, e ? r - 1 : r),
        s = e ? (i + ww) * OS : mw;
      return function (o) {
        const a = vt(o, "value");
        return (
          Z(a >= s && a <= i, `value out-of-bounds for ${n}`, "value", a),
          us(e ? im(a, 256) : a, 32)
        );
      };
    }
  }
  {
    const t = n.match(/^bytes(\d+)$/);
    if (t) {
      const e = parseInt(t[1]);
      return (
        Z(
          e !== 0 && e <= 32 && t[1] === String(e),
          "invalid bytes width",
          "type",
          n
        ),
        function (r) {
          const i = $t(r);
          return (
            Z(i.length === e, `invalid length for ${n}`, "value", r), LS(r)
          );
        }
      );
    }
  }
  switch (n) {
    case "address":
      return function (t) {
        return vi(oe(t), 32);
      };
    case "bool":
      return function (t) {
        return t ? US : FS;
      };
    case "bytes":
      return function (t) {
        return qe(t);
      };
    case "string":
      return function (t) {
        return so(t);
      };
  }
  return null;
}
function Qp(n, t) {
  return `${n}(${t.map(({ name: e, type: r }) => r + " " + e).join(",")})`;
}
function bu(n) {
  const t = n.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return t
    ? {
        base: t[1],
        index: t[2] + t[4],
        array: {
          base: t[1],
          prefix: t[1] + t[2],
          count: t[5] ? parseInt(t[5]) : -1,
        },
      }
    : { base: n };
}
var Mc, ui, ga, ul, bw;
const Yr = class Yr {
  constructor(t) {
    ut(this, ul);
    tt(this, "primaryType");
    ut(this, Mc);
    ut(this, ui);
    ut(this, ga);
    Q(this, ui, new Map()), Q(this, ga, new Map());
    const e = new Map(),
      r = new Map(),
      i = new Map(),
      s = {};
    Object.keys(t).forEach((c) => {
      (s[c] = t[c].map(({ name: f, type: h }) => {
        let { base: b, index: S } = bu(h);
        return (
          b === "int" && !t.int && (b = "int256"),
          b === "uint" && !t.uint && (b = "uint256"),
          { name: f, type: b + (S || "") }
        );
      })),
        e.set(c, new Set()),
        r.set(c, []),
        i.set(c, new Set());
    }),
      Q(this, Mc, JSON.stringify(s));
    for (const c in s) {
      const f = new Set();
      for (const h of s[c]) {
        Z(
          !f.has(h.name),
          `duplicate variable name ${JSON.stringify(
            h.name
          )} in ${JSON.stringify(c)}`,
          "types",
          t
        ),
          f.add(h.name);
        const b = bu(h.type).base;
        Z(
          b !== c,
          `circular type reference to ${JSON.stringify(b)}`,
          "types",
          t
        ),
          !nh(b) &&
            (Z(r.has(b), `unknown type ${JSON.stringify(b)}`, "types", t),
            r.get(b).push(c),
            e.get(c).add(b));
      }
    }
    const o = Array.from(r.keys()).filter((c) => r.get(c).length === 0);
    Z(o.length !== 0, "missing primary type", "types", t),
      Z(
        o.length === 1,
        `ambiguous primary types or unused types: ${o
          .map((c) => JSON.stringify(c))
          .join(", ")}`,
        "types",
        t
      ),
      Ct(this, { primaryType: o[0] });
    function a(c, f) {
      Z(
        !f.has(c),
        `circular type reference to ${JSON.stringify(c)}`,
        "types",
        t
      ),
        f.add(c);
      for (const h of e.get(c))
        if (r.has(h)) {
          a(h, f);
          for (const b of f) i.get(b).add(h);
        }
      f.delete(c);
    }
    a(this.primaryType, new Set());
    for (const [c, f] of i) {
      const h = Array.from(f);
      h.sort(),
        C(this, ui).set(c, Qp(c, s[c]) + h.map((b) => Qp(b, s[b])).join(""));
    }
  }
  get types() {
    return JSON.parse(C(this, Mc));
  }
  getEncoder(t) {
    let e = C(this, ga).get(t);
    return (
      e || ((e = pt(this, ul, bw).call(this, t)), C(this, ga).set(t, e)), e
    );
  }
  encodeType(t) {
    const e = C(this, ui).get(t);
    return Z(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e;
  }
  encodeData(t, e) {
    return this.getEncoder(t)(e);
  }
  hashStruct(t, e) {
    return qe(this.encodeData(t, e));
  }
  encode(t) {
    return this.encodeData(this.primaryType, t);
  }
  hash(t) {
    return this.hashStruct(this.primaryType, t);
  }
  _visit(t, e, r) {
    if (nh(t)) return r(t, e);
    const i = bu(t).array;
    if (i)
      return (
        Z(
          i.count === -1 || i.count === e.length,
          `array length mismatch; expected length ${i.count}`,
          "value",
          e
        ),
        e.map((o) => this._visit(i.prefix, o, r))
      );
    const s = this.types[t];
    if (s)
      return s.reduce(
        (o, { name: a, type: c }) => ((o[a] = this._visit(c, e[a], r)), o),
        {}
      );
    Z(!1, `unknown type: ${t}`, "type", t);
  }
  visit(t, e) {
    return this._visit(this.primaryType, t, e);
  }
  static from(t) {
    return new Yr(t);
  }
  static getPrimaryType(t) {
    return Yr.from(t).primaryType;
  }
  static hashStruct(t, e, r) {
    return Yr.from(e).hashStruct(t, r);
  }
  static hashDomain(t) {
    const e = [];
    for (const r in t) {
      if (t[r] == null) continue;
      const i = qp[r];
      Z(i, `invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t),
        e.push({ name: r, type: i });
    }
    return (
      e.sort((r, i) => rh.indexOf(r.name) - rh.indexOf(i.name)),
      Yr.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
    );
  }
  static encode(t, e, r) {
    return Fe(["0x1901", Yr.hashDomain(t), Yr.from(e).hash(r)]);
  }
  static hash(t, e, r) {
    return qe(Yr.encode(t, e, r));
  }
  static async resolveNames(t, e, r, i) {
    t = Object.assign({}, t);
    for (const a in t) t[a] == null && delete t[a];
    const s = {};
    t.verifyingContract &&
      !be(t.verifyingContract, 20) &&
      (s[t.verifyingContract] = "0x");
    const o = Yr.from(e);
    o.visit(r, (a, c) => (a === "address" && !be(c, 20) && (s[c] = "0x"), c));
    for (const a in s) s[a] = await i(a);
    return (
      t.verifyingContract &&
        s[t.verifyingContract] &&
        (t.verifyingContract = s[t.verifyingContract]),
      (r = o.visit(r, (a, c) => (a === "address" && s[c] ? s[c] : c))),
      { domain: t, value: r }
    );
  }
  static getPayload(t, e, r) {
    Yr.hashDomain(t);
    const i = {},
      s = [];
    rh.forEach((c) => {
      const f = t[c];
      f != null && ((i[c] = DS[c](f)), s.push({ name: c, type: qp[c] }));
    });
    const o = Yr.from(e);
    e = o.types;
    const a = Object.assign({}, e);
    return (
      Z(
        a.EIP712Domain == null,
        "types must not contain EIP712Domain type",
        "types.EIP712Domain",
        e
      ),
      (a.EIP712Domain = s),
      o.encode(r),
      {
        types: a,
        domain: i,
        primaryType: o.primaryType,
        message: o.visit(r, (c, f) => {
          if (c.match(/^bytes(\d*)/)) return xt($t(f));
          if (c.match(/^u?int/)) return vt(f).toString();
          switch (c) {
            case "address":
              return f.toLowerCase();
            case "bool":
              return !!f;
            case "string":
              return Z(typeof f == "string", "invalid string", "value", f), f;
          }
          Z(!1, "unsupported type", "type", c);
        }),
      }
    );
  }
};
(Mc = new WeakMap()),
  (ui = new WeakMap()),
  (ga = new WeakMap()),
  (ul = new WeakSet()),
  (bw = function (t) {
    {
      const i = nh(t);
      if (i) return i;
    }
    const e = bu(t).array;
    if (e) {
      const i = e.prefix,
        s = this.getEncoder(i);
      return (o) => {
        Z(
          e.count === -1 || e.count === o.length,
          `array length mismatch; expected length ${e.count}`,
          "value",
          o
        );
        let a = o.map(s);
        return C(this, ui).has(i) && (a = a.map(qe)), qe(Fe(a));
      };
    }
    const r = this.types[t];
    if (r) {
      const i = so(C(this, ui).get(t));
      return (s) => {
        const o = r.map(({ name: a, type: c }) => {
          const f = this.getEncoder(c)(s[a]);
          return C(this, ui).has(c) ? qe(f) : f;
        });
        return o.unshift(i), Fe(o);
      };
    }
    Z(!1, `unknown type: ${t}`, "type", t);
  });
let il = Yr;
function Br(n) {
  const t = new Set();
  return n.forEach((e) => t.add(e)), Object.freeze(t);
}
const zS = "external public payable override",
  HS = Br(zS.split(" ")),
  Aw = "constant external internal payable private public pure view override",
  GS = Br(Aw.split(" ")),
  Ew = "constructor error event fallback function receive struct",
  xw = Br(Ew.split(" ")),
  kw = "calldata memory storage payable indexed",
  KS = Br(kw.split(" ")),
  VS = "tuple returns",
  WS = [Ew, kw, VS, Aw].join(" "),
  qS = Br(WS.split(" ")),
  $S = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT",
  },
  QS = new RegExp("^(\\s*)"),
  JS = new RegExp("^([0-9]+)"),
  jS = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
  vw = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
  Sw = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var rr, yn, Lc, Hh;
const ll = class ll {
  constructor(t) {
    ut(this, Lc);
    ut(this, rr);
    ut(this, yn);
    Q(this, rr, 0), Q(this, yn, t.slice());
  }
  get offset() {
    return C(this, rr);
  }
  get length() {
    return C(this, yn).length - C(this, rr);
  }
  clone() {
    return new ll(C(this, yn));
  }
  reset() {
    Q(this, rr, 0);
  }
  popKeyword(t) {
    const e = this.peek();
    if (e.type !== "KEYWORD" || !t.has(e.text))
      throw new Error(`expected keyword ${e.text}`);
    return this.pop().text;
  }
  popType(t) {
    if (this.peek().type !== t) {
      const e = this.peek();
      throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`);
    }
    return this.pop().text;
  }
  popParen() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN") throw new Error("bad start");
    const e = pt(this, Lc, Hh).call(this, C(this, rr) + 1, t.match + 1);
    return Q(this, rr, t.match + 1), e;
  }
  popParams() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN") throw new Error("bad start");
    const e = [];
    for (; C(this, rr) < t.match - 1; ) {
      const r = this.peek().linkNext;
      e.push(pt(this, Lc, Hh).call(this, C(this, rr) + 1, r)), Q(this, rr, r);
    }
    return Q(this, rr, t.match + 1), e;
  }
  peek() {
    if (C(this, rr) >= C(this, yn).length) throw new Error("out-of-bounds");
    return C(this, yn)[C(this, rr)];
  }
  peekKeyword(t) {
    const e = this.peekType("KEYWORD");
    return e != null && t.has(e) ? e : null;
  }
  peekType(t) {
    if (this.length === 0) return null;
    const e = this.peek();
    return e.type === t ? e.text : null;
  }
  pop() {
    const t = this.peek();
    return Xa(this, rr)._++, t;
  }
  toString() {
    const t = [];
    for (let e = C(this, rr); e < C(this, yn).length; e++) {
      const r = C(this, yn)[e];
      t.push(`${r.type}:${r.text}`);
    }
    return `<TokenString ${t.join(" ")}>`;
  }
};
(rr = new WeakMap()),
  (yn = new WeakMap()),
  (Lc = new WeakSet()),
  (Hh = function (t = 0, e = 0) {
    return new ll(
      C(this, yn)
        .slice(t, e)
        .map((r) =>
          Object.freeze(
            Object.assign({}, r, {
              match: r.match - t,
              linkBack: r.linkBack - t,
              linkNext: r.linkNext - t,
            })
          )
        )
    );
  });
let kn = ll;
function hs(n) {
  const t = [],
    e = (o) => {
      const a = s < n.length ? JSON.stringify(n[s]) : "$EOI";
      throw new Error(`invalid token ${a} at ${s}: ${o}`);
    };
  let r = [],
    i = [],
    s = 0;
  for (; s < n.length; ) {
    let o = n.substring(s),
      a = o.match(QS);
    a && ((s += a[1].length), (o = n.substring(s)));
    const c = {
      depth: r.length,
      linkBack: -1,
      linkNext: -1,
      match: -1,
      type: "",
      text: "",
      offset: s,
      value: -1,
    };
    t.push(c);
    let f = $S[o[0]] || "";
    if (f) {
      if (((c.type = f), (c.text = o[0]), s++, f === "OPEN_PAREN"))
        r.push(t.length - 1), i.push(t.length - 1);
      else if (f == "CLOSE_PAREN")
        r.length === 0 && e("no matching open bracket"),
          (c.match = r.pop()),
          (t[c.match].match = t.length - 1),
          c.depth--,
          (c.linkBack = i.pop()),
          (t[c.linkBack].linkNext = t.length - 1);
      else if (f === "COMMA")
        (c.linkBack = i.pop()),
          (t[c.linkBack].linkNext = t.length - 1),
          i.push(t.length - 1);
      else if (f === "OPEN_BRACKET") c.type = "BRACKET";
      else if (f === "CLOSE_BRACKET") {
        let h = t.pop().text;
        if (t.length > 0 && t[t.length - 1].type === "NUMBER") {
          const b = t.pop().text;
          (h = b + h), (t[t.length - 1].value = Gt(b));
        }
        if (t.length === 0 || t[t.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        t[t.length - 1].text += h;
      }
      continue;
    }
    if (((a = o.match(jS)), a)) {
      if (((c.text = a[1]), (s += c.text.length), qS.has(c.text))) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(Sw)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (((a = o.match(JS)), a)) {
      (c.text = a[1]), (c.type = "NUMBER"), (s += c.text.length);
      continue;
    }
    throw new Error(
      `unexpected token ${JSON.stringify(o[0])} at position ${s}`
    );
  }
  return new kn(t.map((o) => Object.freeze(o)));
}
function Jp(n, t) {
  let e = [];
  for (const r in t.keys()) n.has(r) && e.push(r);
  if (e.length > 1) throw new Error(`conflicting types: ${e.join(", ")}`);
}
function Hl(n, t) {
  if (t.peekKeyword(xw)) {
    const e = t.pop().text;
    if (e !== n) throw new Error(`expected ${n}, got ${e}`);
  }
  return t.popType("ID");
}
function Ii(n, t) {
  const e = new Set();
  for (;;) {
    const r = n.peekType("KEYWORD");
    if (r == null || (t && !t.has(r))) break;
    if ((n.pop(), e.has(r)))
      throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
    e.add(r);
  }
  return Object.freeze(e);
}
function Iw(n) {
  let t = Ii(n, GS);
  return (
    Jp(t, Br("constant payable nonpayable".split(" "))),
    Jp(t, Br("pure view payable nonpayable".split(" "))),
    t.has("view")
      ? "view"
      : t.has("pure")
      ? "pure"
      : t.has("payable")
      ? "payable"
      : t.has("nonpayable")
      ? "nonpayable"
      : t.has("constant")
      ? "view"
      : "nonpayable"
  );
}
function xi(n, t) {
  return n.popParams().map((e) => cr.from(e, t));
}
function Bw(n) {
  if (n.peekType("AT")) {
    if ((n.pop(), n.peekType("NUMBER"))) return vt(n.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function oo(n) {
  if (n.length)
    throw new Error(`unexpected tokens at offset ${n.offset}: ${n.toString()}`);
}
const ZS = new RegExp(/^(.*)\[([0-9]*)\]$/);
function jp(n) {
  const t = n.match(Sw);
  if ((Z(t, "invalid type", "type", n), n === "uint")) return "uint256";
  if (n === "int") return "int256";
  if (t[2]) {
    const e = parseInt(t[2]);
    Z(e !== 0 && e <= 32, "invalid bytes length", "type", n);
  } else if (t[3]) {
    const e = parseInt(t[3]);
    Z(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", n);
  }
  return n;
}
const Ne = {},
  Dr = Symbol.for("_ethers_internal"),
  Zp = "_ParamTypeInternal",
  Yp = "_ErrorInternal",
  Xp = "_EventInternal",
  tg = "_ConstructorInternal",
  eg = "_FallbackInternal",
  rg = "_FunctionInternal",
  ng = "_StructInternal";
var ya, Ru;
const Xr = class Xr {
  constructor(t, e, r, i, s, o, a, c) {
    ut(this, ya);
    tt(this, "name");
    tt(this, "type");
    tt(this, "baseType");
    tt(this, "indexed");
    tt(this, "components");
    tt(this, "arrayLength");
    tt(this, "arrayChildren");
    if (
      (Zc(t, Ne, "ParamType"),
      Object.defineProperty(this, Dr, { value: Zp }),
      o && (o = Object.freeze(o.slice())),
      i === "array")
    ) {
      if (a == null || c == null) throw new Error("");
    } else if (a != null || c != null) throw new Error("");
    if (i === "tuple") {
      if (o == null) throw new Error("");
    } else if (o != null) throw new Error("");
    Ct(this, {
      name: e,
      type: r,
      baseType: i,
      indexed: s,
      components: o,
      arrayLength: a,
      arrayChildren: c,
    });
  }
  format(t) {
    if ((t == null && (t = "sighash"), t === "json")) {
      const r = this.name || "";
      if (this.isArray()) {
        const s = JSON.parse(this.arrayChildren.format("json"));
        return (
          (s.name = r),
          (s.type += `[${
            this.arrayLength < 0 ? "" : String(this.arrayLength)
          }]`),
          JSON.stringify(s)
        );
      }
      const i = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: r,
      };
      return (
        typeof this.indexed == "boolean" && (i.indexed = this.indexed),
        this.isTuple() &&
          (i.components = this.components.map((s) => JSON.parse(s.format(t)))),
        JSON.stringify(i)
      );
    }
    let e = "";
    return (
      this.isArray()
        ? ((e += this.arrayChildren.format(t)),
          (e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`))
        : this.isTuple()
        ? (e +=
            "(" +
            this.components
              .map((r) => r.format(t))
              .join(t === "full" ? ", " : ",") +
            ")")
        : (e += this.type),
      t !== "sighash" &&
        (this.indexed === !0 && (e += " indexed"),
        t === "full" && this.name && (e += " " + this.name)),
      e
    );
  }
  isArray() {
    return this.baseType === "array";
  }
  isTuple() {
    return this.baseType === "tuple";
  }
  isIndexable() {
    return this.indexed != null;
  }
  walk(t, e) {
    if (this.isArray()) {
      if (!Array.isArray(t)) throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const r = this;
      return t.map((i) => r.arrayChildren.walk(i, e));
    }
    if (this.isTuple()) {
      if (!Array.isArray(t)) throw new Error("invalid tuple value");
      if (t.length !== this.components.length)
        throw new Error("array is wrong length");
      const r = this;
      return t.map((i, s) => r.components[s].walk(i, e));
    }
    return e(this.type, t);
  }
  async walkAsync(t, e) {
    const r = [],
      i = [t];
    return (
      pt(this, ya, Ru).call(this, r, t, e, (s) => {
        i[0] = s;
      }),
      r.length && (await Promise.all(r)),
      i[0]
    );
  }
  static from(t, e) {
    if (Xr.isParamType(t)) return t;
    if (typeof t == "string")
      try {
        return Xr.from(hs(t), e);
      } catch {
        Z(!1, "invalid param type", "obj", t);
      }
    else if (t instanceof kn) {
      let a = "",
        c = "",
        f = null;
      Ii(t, Br(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN")
        ? ((c = "tuple"),
          (f = t.popParams().map((N) => Xr.from(N))),
          (a = `tuple(${f.map((N) => N.format()).join(",")})`))
        : ((a = jp(t.popType("TYPE"))), (c = a));
      let h = null,
        b = null;
      for (; t.length && t.peekType("BRACKET"); ) {
        const N = t.pop();
        (h = new Xr(Ne, "", a, c, null, f, b, h)),
          (b = N.value),
          (a += N.text),
          (c = "array"),
          (f = null);
      }
      let S = null;
      if (Ii(t, KS).has("indexed")) {
        if (!e) throw new Error("");
        S = !0;
      }
      const M = t.peekType("ID") ? t.pop().text : "";
      if (t.length) throw new Error("leftover tokens");
      return new Xr(Ne, M, a, c, S, f, b, h);
    }
    const r = t.name;
    Z(
      !r || (typeof r == "string" && r.match(vw)),
      "invalid name",
      "obj.name",
      r
    );
    let i = t.indexed;
    i != null &&
      (Z(e, "parameter cannot be indexed", "obj.indexed", t.indexed),
      (i = !!i));
    let s = t.type,
      o = s.match(ZS);
    if (o) {
      const a = parseInt(o[2] || "-1"),
        c = Xr.from({ type: o[1], components: t.components });
      return new Xr(Ne, r || "", s, "array", i, null, a, c);
    }
    if (s === "tuple" || s.startsWith("tuple(") || s.startsWith("(")) {
      const a =
        t.components != null ? t.components.map((f) => Xr.from(f)) : null;
      return new Xr(Ne, r || "", s, "tuple", i, a, null, null);
    }
    return (s = jp(t.type)), new Xr(Ne, r || "", s, s, i, null, null, null);
  }
  static isParamType(t) {
    return t && t[Dr] === Zp;
  }
};
(ya = new WeakSet()),
  (Ru = function (t, e, r, i) {
    if (this.isArray()) {
      if (!Array.isArray(e)) throw new Error("invalid array value");
      if (this.arrayLength !== -1 && e.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const o = this.arrayChildren,
        a = e.slice();
      a.forEach((c, f) => {
        var h;
        pt((h = o), ya, Ru).call(h, t, c, r, (b) => {
          a[f] = b;
        });
      }),
        i(a);
      return;
    }
    if (this.isTuple()) {
      const o = this.components;
      let a;
      if (Array.isArray(e)) a = e.slice();
      else {
        if (e == null || typeof e != "object")
          throw new Error("invalid tuple value");
        a = o.map((c) => {
          if (!c.name)
            throw new Error("cannot use object value with unnamed components");
          if (!(c.name in e))
            throw new Error(`missing value for component ${c.name}`);
          return e[c.name];
        });
      }
      if (a.length !== this.components.length)
        throw new Error("array is wrong length");
      a.forEach((c, f) => {
        var h;
        pt((h = o[f]), ya, Ru).call(h, t, c, r, (b) => {
          a[f] = b;
        });
      }),
        i(a);
      return;
    }
    const s = r(this.type, e);
    s.then
      ? t.push(
          (async function () {
            i(await s);
          })()
        )
      : i(s);
  });
let cr = Xr;
class ao {
  constructor(t, e, r) {
    tt(this, "type");
    tt(this, "inputs");
    Zc(t, Ne, "Fragment"),
      (r = Object.freeze(r.slice())),
      Ct(this, { type: e, inputs: r });
  }
  static from(t) {
    if (typeof t == "string") {
      try {
        ao.from(JSON.parse(t));
      } catch {}
      return ao.from(hs(t));
    }
    if (t instanceof kn)
      switch (t.peekKeyword(xw)) {
        case "constructor":
          return Ai.from(t);
        case "error":
          return Lr.from(t);
        case "event":
          return Kn.from(t);
        case "fallback":
        case "receive":
          return ii.from(t);
        case "function":
          return Vn.from(t);
        case "struct":
          return eo.from(t);
      }
    else if (typeof t == "object") {
      switch (t.type) {
        case "constructor":
          return Ai.from(t);
        case "error":
          return Lr.from(t);
        case "event":
          return Kn.from(t);
        case "fallback":
        case "receive":
          return ii.from(t);
        case "function":
          return Vn.from(t);
        case "struct":
          return eo.from(t);
      }
      ht(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from",
      });
    }
    Z(!1, "unsupported frgament object", "obj", t);
  }
  static isConstructor(t) {
    return Ai.isFragment(t);
  }
  static isError(t) {
    return Lr.isFragment(t);
  }
  static isEvent(t) {
    return Kn.isFragment(t);
  }
  static isFunction(t) {
    return Vn.isFragment(t);
  }
  static isStruct(t) {
    return eo.isFragment(t);
  }
}
class Gl extends ao {
  constructor(e, r, i, s) {
    super(e, r, s);
    tt(this, "name");
    Z(typeof i == "string" && i.match(vw), "invalid identifier", "name", i),
      (s = Object.freeze(s.slice())),
      Ct(this, { name: i });
  }
}
function Rc(n, t) {
  return "(" + t.map((e) => e.format(n)).join(n === "full" ? ", " : ",") + ")";
}
class Lr extends Gl {
  constructor(t, e, r) {
    super(t, "error", e, r), Object.defineProperty(this, Dr, { value: Yp });
  }
  get selector() {
    return so(this.format("sighash")).substring(0, 10);
  }
  format(t) {
    if ((t == null && (t = "sighash"), t === "json"))
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((r) => JSON.parse(r.format(t))),
      });
    const e = [];
    return (
      t !== "sighash" && e.push("error"),
      e.push(this.name + Rc(t, this.inputs)),
      e.join(" ")
    );
  }
  static from(t) {
    if (Lr.isFragment(t)) return t;
    if (typeof t == "string") return Lr.from(hs(t));
    if (t instanceof kn) {
      const e = Hl("error", t),
        r = xi(t);
      return oo(t), new Lr(Ne, e, r);
    }
    return new Lr(Ne, t.name, t.inputs ? t.inputs.map(cr.from) : []);
  }
  static isFragment(t) {
    return t && t[Dr] === Yp;
  }
}
class Kn extends Gl {
  constructor(e, r, i, s) {
    super(e, "event", r, i);
    tt(this, "anonymous");
    Object.defineProperty(this, Dr, { value: Xp }), Ct(this, { anonymous: s });
  }
  get topicHash() {
    return so(this.format("sighash"));
  }
  format(e) {
    if ((e == null && (e = "sighash"), e === "json"))
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((i) => JSON.parse(i.format(e))),
      });
    const r = [];
    return (
      e !== "sighash" && r.push("event"),
      r.push(this.name + Rc(e, this.inputs)),
      e !== "sighash" && this.anonymous && r.push("anonymous"),
      r.join(" ")
    );
  }
  static getTopicHash(e, r) {
    return (
      (r = (r || []).map((s) => cr.from(s))), new Kn(Ne, e, r, !1).topicHash
    );
  }
  static from(e) {
    if (Kn.isFragment(e)) return e;
    if (typeof e == "string")
      try {
        return Kn.from(hs(e));
      } catch {
        Z(!1, "invalid event fragment", "obj", e);
      }
    else if (e instanceof kn) {
      const r = Hl("event", e),
        i = xi(e, !0),
        s = !!Ii(e, Br(["anonymous"])).has("anonymous");
      return oo(e), new Kn(Ne, r, i, s);
    }
    return new Kn(
      Ne,
      e.name,
      e.inputs ? e.inputs.map((r) => cr.from(r, !0)) : [],
      !!e.anonymous
    );
  }
  static isFragment(e) {
    return e && e[Dr] === Xp;
  }
}
class Ai extends ao {
  constructor(e, r, i, s, o) {
    super(e, r, i);
    tt(this, "payable");
    tt(this, "gas");
    Object.defineProperty(this, Dr, { value: tg }),
      Ct(this, { payable: s, gas: o });
  }
  format(e) {
    if (
      (ht(
        e != null && e !== "sighash",
        "cannot format a constructor for sighash",
        "UNSUPPORTED_OPERATION",
        { operation: "format(sighash)" }
      ),
      e === "json")
    )
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(e))),
      });
    const r = [`constructor${Rc(e, this.inputs)}`];
    return (
      this.payable && r.push("payable"),
      this.gas != null && r.push(`@${this.gas.toString()}`),
      r.join(" ")
    );
  }
  static from(e) {
    if (Ai.isFragment(e)) return e;
    if (typeof e == "string")
      try {
        return Ai.from(hs(e));
      } catch {
        Z(!1, "invalid constuctor fragment", "obj", e);
      }
    else if (e instanceof kn) {
      Ii(e, Br(["constructor"]));
      const r = xi(e),
        i = !!Ii(e, HS).has("payable"),
        s = Bw(e);
      return oo(e), new Ai(Ne, "constructor", r, i, s);
    }
    return new Ai(
      Ne,
      "constructor",
      e.inputs ? e.inputs.map(cr.from) : [],
      !!e.payable,
      e.gas != null ? e.gas : null
    );
  }
  static isFragment(e) {
    return e && e[Dr] === tg;
  }
}
class ii extends ao {
  constructor(e, r, i) {
    super(e, "fallback", r);
    tt(this, "payable");
    Object.defineProperty(this, Dr, { value: eg }), Ct(this, { payable: i });
  }
  format(e) {
    const r = this.inputs.length === 0 ? "receive" : "fallback";
    if (e === "json") {
      const i = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: r, stateMutability: i });
    }
    return `${r}()${this.payable ? " payable" : ""}`;
  }
  static from(e) {
    if (ii.isFragment(e)) return e;
    if (typeof e == "string")
      try {
        return ii.from(hs(e));
      } catch {
        Z(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof kn) {
      const r = e.toString(),
        i = e.peekKeyword(Br(["fallback", "receive"]));
      if (
        (Z(i, "type must be fallback or receive", "obj", r),
        e.popKeyword(Br(["fallback", "receive"])) === "receive")
      ) {
        const c = xi(e);
        return (
          Z(c.length === 0, "receive cannot have arguments", "obj.inputs", c),
          Ii(e, Br(["payable"])),
          oo(e),
          new ii(Ne, [], !0)
        );
      }
      let o = xi(e);
      o.length
        ? Z(
            o.length === 1 && o[0].type === "bytes",
            "invalid fallback inputs",
            "obj.inputs",
            o.map((c) => c.format("minimal")).join(", ")
          )
        : (o = [cr.from("bytes")]);
      const a = Iw(e);
      if (
        (Z(
          a === "nonpayable" || a === "payable",
          "fallback cannot be constants",
          "obj.stateMutability",
          a
        ),
        Ii(e, Br(["returns"])).has("returns"))
      ) {
        const c = xi(e);
        Z(
          c.length === 1 && c[0].type === "bytes",
          "invalid fallback outputs",
          "obj.outputs",
          c.map((f) => f.format("minimal")).join(", ")
        );
      }
      return oo(e), new ii(Ne, o, a === "payable");
    }
    if (e.type === "receive") return new ii(Ne, [], !0);
    if (e.type === "fallback") {
      const r = [cr.from("bytes")],
        i = e.stateMutability === "payable";
      return new ii(Ne, r, i);
    }
    Z(!1, "invalid fallback description", "obj", e);
  }
  static isFragment(e) {
    return e && e[Dr] === eg;
  }
}
class Vn extends Gl {
  constructor(e, r, i, s, o, a) {
    super(e, "function", r, s);
    tt(this, "constant");
    tt(this, "outputs");
    tt(this, "stateMutability");
    tt(this, "payable");
    tt(this, "gas");
    Object.defineProperty(this, Dr, { value: rg }),
      (o = Object.freeze(o.slice())),
      Ct(this, {
        constant: i === "view" || i === "pure",
        gas: a,
        outputs: o,
        payable: i === "payable",
        stateMutability: i,
      });
  }
  get selector() {
    return so(this.format("sighash")).substring(0, 10);
  }
  format(e) {
    if ((e == null && (e = "sighash"), e === "json"))
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability:
          this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(e))),
        outputs: this.outputs.map((i) => JSON.parse(i.format(e))),
      });
    const r = [];
    return (
      e !== "sighash" && r.push("function"),
      r.push(this.name + Rc(e, this.inputs)),
      e !== "sighash" &&
        (this.stateMutability !== "nonpayable" && r.push(this.stateMutability),
        this.outputs &&
          this.outputs.length &&
          (r.push("returns"), r.push(Rc(e, this.outputs))),
        this.gas != null && r.push(`@${this.gas.toString()}`)),
      r.join(" ")
    );
  }
  static getSelector(e, r) {
    return (
      (r = (r || []).map((s) => cr.from(s))),
      new Vn(Ne, e, "view", r, [], null).selector
    );
  }
  static from(e) {
    if (Vn.isFragment(e)) return e;
    if (typeof e == "string")
      try {
        return Vn.from(hs(e));
      } catch {
        Z(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof kn) {
      const i = Hl("function", e),
        s = xi(e),
        o = Iw(e);
      let a = [];
      Ii(e, Br(["returns"])).has("returns") && (a = xi(e));
      const c = Bw(e);
      return oo(e), new Vn(Ne, i, o, s, a, c);
    }
    let r = e.stateMutability;
    return (
      r == null &&
        ((r = "payable"),
        typeof e.constant == "boolean"
          ? ((r = "view"),
            e.constant ||
              ((r = "payable"),
              typeof e.payable == "boolean" &&
                !e.payable &&
                (r = "nonpayable")))
          : typeof e.payable == "boolean" && !e.payable && (r = "nonpayable")),
      new Vn(
        Ne,
        e.name,
        r,
        e.inputs ? e.inputs.map(cr.from) : [],
        e.outputs ? e.outputs.map(cr.from) : [],
        e.gas != null ? e.gas : null
      )
    );
  }
  static isFragment(e) {
    return e && e[Dr] === rg;
  }
}
class eo extends Gl {
  constructor(t, e, r) {
    super(t, "struct", e, r), Object.defineProperty(this, Dr, { value: ng });
  }
  format() {
    throw new Error("@TODO");
  }
  static from(t) {
    if (typeof t == "string")
      try {
        return eo.from(hs(t));
      } catch {
        Z(!1, "invalid struct fragment", "obj", t);
      }
    else if (t instanceof kn) {
      const e = Hl("struct", t),
        r = xi(t);
      return oo(t), new eo(Ne, e, r);
    }
    return new eo(Ne, t.name, t.inputs ? t.inputs.map(cr.from) : []);
  }
  static isFragment(t) {
    return t && t[Dr] === ng;
  }
}
const vn = new Map();
vn.set(0, "GENERIC_PANIC");
vn.set(1, "ASSERT_FALSE");
vn.set(17, "OVERFLOW");
vn.set(18, "DIVIDE_BY_ZERO");
vn.set(33, "ENUM_RANGE_ERROR");
vn.set(34, "BAD_STORAGE_DATA");
vn.set(49, "STACK_UNDERFLOW");
vn.set(50, "ARRAY_RANGE_ERROR");
vn.set(65, "OUT_OF_MEMORY");
vn.set(81, "UNINITIALIZED_FUNCTION_CALL");
const YS = new RegExp(/^bytes([0-9]*)$/),
  XS = new RegExp(/^(u?int)([0-9]*)$/);
let ih = null,
  ig = 1024;
function tI(n, t, e, r) {
  let i = "missing revert data",
    s = null;
  const o = null;
  let a = null;
  if (e) {
    i = "execution reverted";
    const f = $t(e);
    if (((e = xt(e)), f.length === 0))
      (i += " (no data present; likely require(false) occurred"),
        (s = "require(false)");
    else if (f.length % 32 !== 4)
      i += " (could not decode reason; invalid data length)";
    else if (xt(f.slice(0, 4)) === "0x08c379a0")
      try {
        (s = r.decode(["string"], f.slice(4))[0]),
          (a = { signature: "Error(string)", name: "Error", args: [s] }),
          (i += `: ${JSON.stringify(s)}`);
      } catch {
        i += " (could not decode reason; invalid string data)";
      }
    else if (xt(f.slice(0, 4)) === "0x4e487b71")
      try {
        const h = Number(r.decode(["uint256"], f.slice(4))[0]);
        (a = { signature: "Panic(uint256)", name: "Panic", args: [h] }),
          (s = `Panic due to ${vn.get(h) || "UNKNOWN"}(${h})`),
          (i += `: ${s}`);
      } catch {
        i += " (could not decode panic code)";
      }
    else i += " (unknown custom error)";
  }
  const c = { to: t.to ? oe(t.to) : null, data: t.data || "0x" };
  return (
    t.from && (c.from = oe(t.from)),
    Be(i, "CALL_EXCEPTION", {
      action: n,
      data: e,
      reason: s,
      transaction: c,
      invocation: o,
      revert: a,
    })
  );
}
var $i, Bo;
const fl = class fl {
  constructor() {
    ut(this, $i);
  }
  getDefaultValue(t) {
    const e = t.map((i) => pt(this, $i, Bo).call(this, cr.from(i)));
    return new wu(e, "_").defaultValue();
  }
  encode(t, e) {
    em(e.length, t.length, "types/values length mismatch");
    const r = t.map((o) => pt(this, $i, Bo).call(this, cr.from(o))),
      i = new wu(r, "_"),
      s = new Bh();
    return i.encode(s, e), s.data;
  }
  decode(t, e, r) {
    const i = t.map((o) => pt(this, $i, Bo).call(this, cr.from(o)));
    return new wu(i, "_").decode(new Rh(e, r, ig));
  }
  static _setDefaultMaxInflation(t) {
    Z(
      typeof t == "number" && Number.isInteger(t),
      "invalid defaultMaxInflation factor",
      "value",
      t
    ),
      (ig = t);
  }
  static defaultAbiCoder() {
    return ih == null && (ih = new fl()), ih;
  }
  static getBuiltinCallException(t, e, r) {
    return tI(t, e, r, fl.defaultAbiCoder());
  }
};
($i = new WeakSet()),
  (Bo = function (t) {
    if (t.isArray())
      return new wv(
        pt(this, $i, Bo).call(this, t.arrayChildren),
        t.arrayLength,
        t.name
      );
    if (t.isTuple())
      return new wu(
        t.components.map((r) => pt(this, $i, Bo).call(this, r)),
        t.name
      );
    switch (t.baseType) {
      case "address":
        return new yv(t.name);
      case "bool":
        return new bv(t.name);
      case "string":
        return new Rv(t.name);
      case "bytes":
        return new Av(t.name);
      case "":
        return new kv(t.name);
    }
    let e = t.type.match(XS);
    if (e) {
      let r = parseInt(e[2] || "256");
      return (
        Z(
          r !== 0 && r <= 256 && r % 8 === 0,
          "invalid " + e[1] + " bit length",
          "param",
          t
        ),
        new Bv(r / 8, e[1] === "int", t.name)
      );
    }
    if (((e = t.type.match(YS)), e)) {
      let r = parseInt(e[1]);
      return (
        Z(r !== 0 && r <= 32, "invalid bytes length", "param", t),
        new Ev(r, t.name)
      );
    }
    Z(!1, "invalid type", "type", t.type);
  });
let Pc = fl;
class eI {
  constructor(t, e, r) {
    tt(this, "fragment");
    tt(this, "name");
    tt(this, "signature");
    tt(this, "topic");
    tt(this, "args");
    const i = t.name,
      s = t.format();
    Ct(this, { fragment: t, name: i, signature: s, topic: e, args: r });
  }
}
class rI {
  constructor(t, e, r, i) {
    tt(this, "fragment");
    tt(this, "name");
    tt(this, "args");
    tt(this, "signature");
    tt(this, "selector");
    tt(this, "value");
    const s = t.name,
      o = t.format();
    Ct(this, {
      fragment: t,
      name: s,
      args: r,
      signature: o,
      selector: e,
      value: i,
    });
  }
}
class nI {
  constructor(t, e, r) {
    tt(this, "fragment");
    tt(this, "name");
    tt(this, "args");
    tt(this, "signature");
    tt(this, "selector");
    const i = t.name,
      s = t.format();
    Ct(this, { fragment: t, name: i, args: r, signature: s, selector: e });
  }
}
class sg {
  constructor(t) {
    tt(this, "hash");
    tt(this, "_isIndexed");
    Ct(this, { hash: t, _isIndexed: !0 });
  }
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const og = {
    0: "generic panic",
    1: "assert(false)",
    17: "arithmetic overflow",
    18: "division or modulo by zero",
    33: "enum overflow",
    34: "invalid encoded storage byte array accessed",
    49: "out-of-bounds array access; popping on an empty array",
    50: "out-of-bounds access of an array or bytesN",
    65: "out of memory",
    81: "uninitialized function",
  },
  ag = {
    "0x08c379a0": {
      signature: "Error(string)",
      name: "Error",
      inputs: ["string"],
      reason: (n) => `reverted with reason string ${JSON.stringify(n)}`,
    },
    "0x4e487b71": {
      signature: "Panic(uint256)",
      name: "Panic",
      inputs: ["uint256"],
      reason: (n) => {
        let t = "unknown panic code";
        return (
          n >= 0 && n <= 255 && og[n.toString()] && (t = og[n.toString()]),
          `reverted with panic code 0x${n.toString(16)} (${t})`
        );
      },
    },
  };
var Nn, Tn, _n, yr, $n, Pu, Cu;
const ks = class ks {
  constructor(t) {
    ut(this, $n);
    tt(this, "fragments");
    tt(this, "deploy");
    tt(this, "fallback");
    tt(this, "receive");
    ut(this, Nn);
    ut(this, Tn);
    ut(this, _n);
    ut(this, yr);
    let e = [];
    typeof t == "string" ? (e = JSON.parse(t)) : (e = t),
      Q(this, _n, new Map()),
      Q(this, Nn, new Map()),
      Q(this, Tn, new Map());
    const r = [];
    for (const o of e)
      try {
        r.push(ao.from(o));
      } catch (a) {
        console.log(
          `[Warning] Invalid Fragment ${JSON.stringify(o)}:`,
          a.message
        );
      }
    Ct(this, { fragments: Object.freeze(r) });
    let i = null,
      s = !1;
    Q(this, yr, this.getAbiCoder()),
      this.fragments.forEach((o, a) => {
        let c;
        switch (o.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            Ct(this, { deploy: o });
            return;
          case "fallback":
            o.inputs.length === 0
              ? (s = !0)
              : (Z(
                  !i || o.payable !== i.payable,
                  "conflicting fallback fragments",
                  `fragments[${a}]`,
                  o
                ),
                (i = o),
                (s = i.payable));
            return;
          case "function":
            c = C(this, _n);
            break;
          case "event":
            c = C(this, Tn);
            break;
          case "error":
            c = C(this, Nn);
            break;
          default:
            return;
        }
        const f = o.format();
        c.has(f) || c.set(f, o);
      }),
      this.deploy || Ct(this, { deploy: Ai.from("constructor()") }),
      Ct(this, { fallback: i, receive: s });
  }
  format(t) {
    const e = t ? "minimal" : "full";
    return this.fragments.map((i) => i.format(e));
  }
  formatJson() {
    const t = this.fragments.map((e) => e.format("json"));
    return JSON.stringify(t.map((e) => JSON.parse(e)));
  }
  getAbiCoder() {
    return Pc.defaultAbiCoder();
  }
  getFunctionName(t) {
    const e = pt(this, $n, Pu).call(this, t, null, !1);
    return Z(e, "no matching function", "key", t), e.name;
  }
  hasFunction(t) {
    return !!pt(this, $n, Pu).call(this, t, null, !1);
  }
  getFunction(t, e) {
    return pt(this, $n, Pu).call(this, t, e || null, !0);
  }
  forEachFunction(t) {
    const e = Array.from(C(this, _n).keys());
    e.sort((r, i) => r.localeCompare(i));
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      t(C(this, _n).get(i), r);
    }
  }
  getEventName(t) {
    const e = pt(this, $n, Cu).call(this, t, null, !1);
    return Z(e, "no matching event", "key", t), e.name;
  }
  hasEvent(t) {
    return !!pt(this, $n, Cu).call(this, t, null, !1);
  }
  getEvent(t, e) {
    return pt(this, $n, Cu).call(this, t, e || null, !0);
  }
  forEachEvent(t) {
    const e = Array.from(C(this, Tn).keys());
    e.sort((r, i) => r.localeCompare(i));
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      t(C(this, Tn).get(i), r);
    }
  }
  getError(t, e) {
    if (be(t)) {
      const i = t.toLowerCase();
      if (ag[i]) return Lr.from(ag[i].signature);
      for (const s of C(this, Nn).values()) if (i === s.selector) return s;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const i = [];
      for (const [s, o] of C(this, Nn)) s.split("(")[0] === t && i.push(o);
      if (i.length === 0)
        return t === "Error"
          ? Lr.from("error Error(string)")
          : t === "Panic"
          ? Lr.from("error Panic(uint256)")
          : null;
      if (i.length > 1) {
        const s = i.map((o) => JSON.stringify(o.format())).join(", ");
        Z(!1, `ambiguous error description (i.e. ${s})`, "name", t);
      }
      return i[0];
    }
    if (((t = Lr.from(t).format()), t === "Error(string)"))
      return Lr.from("error Error(string)");
    if (t === "Panic(uint256)") return Lr.from("error Panic(uint256)");
    const r = C(this, Nn).get(t);
    return r || null;
  }
  forEachError(t) {
    const e = Array.from(C(this, Nn).keys());
    e.sort((r, i) => r.localeCompare(i));
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      t(C(this, Nn).get(i), r);
    }
  }
  _decodeParams(t, e) {
    return C(this, yr).decode(t, e);
  }
  _encodeParams(t, e) {
    return C(this, yr).encode(t, e);
  }
  encodeDeploy(t) {
    return this._encodeParams(this.deploy.inputs, t || []);
  }
  decodeErrorResult(t, e) {
    if (typeof t == "string") {
      const r = this.getError(t);
      Z(r, "unknown error", "fragment", t), (t = r);
    }
    return (
      Z(
        Ue(e, 0, 4) === t.selector,
        `data signature does not match error ${t.name}.`,
        "data",
        e
      ),
      this._decodeParams(t.inputs, Ue(e, 4))
    );
  }
  encodeErrorResult(t, e) {
    if (typeof t == "string") {
      const r = this.getError(t);
      Z(r, "unknown error", "fragment", t), (t = r);
    }
    return Fe([t.selector, this._encodeParams(t.inputs, e || [])]);
  }
  decodeFunctionData(t, e) {
    if (typeof t == "string") {
      const r = this.getFunction(t);
      Z(r, "unknown function", "fragment", t), (t = r);
    }
    return (
      Z(
        Ue(e, 0, 4) === t.selector,
        `data signature does not match function ${t.name}.`,
        "data",
        e
      ),
      this._decodeParams(t.inputs, Ue(e, 4))
    );
  }
  encodeFunctionData(t, e) {
    if (typeof t == "string") {
      const r = this.getFunction(t);
      Z(r, "unknown function", "fragment", t), (t = r);
    }
    return Fe([t.selector, this._encodeParams(t.inputs, e || [])]);
  }
  decodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const s = this.getFunction(t);
      Z(s, "unknown function", "fragment", t), (t = s);
    }
    let r = "invalid length for result data";
    const i = vr(e);
    if (i.length % 32 === 0)
      try {
        return C(this, yr).decode(t.outputs, i);
      } catch {
        r = "could not decode result data";
      }
    ht(!1, r, "BAD_DATA", {
      value: xt(i),
      info: { method: t.name, signature: t.format() },
    });
  }
  makeError(t, e) {
    const r = $t(t, "data"),
      i = Pc.getBuiltinCallException("call", e, r);
    if (i.message.startsWith("execution reverted (unknown custom error)")) {
      const a = xt(r.slice(0, 4)),
        c = this.getError(a);
      if (c)
        try {
          const f = C(this, yr).decode(c.inputs, r.slice(4));
          (i.revert = { name: c.name, signature: c.format(), args: f }),
            (i.reason = i.revert.signature),
            (i.message = `execution reverted: ${i.reason}`);
        } catch {
          i.message = "execution reverted (coult not decode custom error)";
        }
    }
    const o = this.parseTransaction(e);
    return (
      o &&
        (i.invocation = {
          method: o.name,
          signature: o.signature,
          args: o.args,
        }),
      i
    );
  }
  encodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const r = this.getFunction(t);
      Z(r, "unknown function", "fragment", t), (t = r);
    }
    return xt(C(this, yr).encode(t.outputs, e || []));
  }
  encodeFilterTopics(t, e) {
    if (typeof t == "string") {
      const s = this.getEvent(t);
      Z(s, "unknown event", "eventFragment", t), (t = s);
    }
    ht(
      e.length <= t.inputs.length,
      `too many arguments for ${t.format()}`,
      "UNEXPECTED_ARGUMENT",
      { count: e.length, expectedCount: t.inputs.length }
    );
    const r = [];
    t.anonymous || r.push(t.topicHash);
    const i = (s, o) =>
      s.type === "string"
        ? so(o)
        : s.type === "bytes"
        ? qe(xt(o))
        : (s.type === "bool" && typeof o == "boolean"
            ? (o = o ? "0x01" : "0x00")
            : s.type.match(/^u?int/)
            ? (o = us(o))
            : s.type.match(/^bytes/)
            ? (o = A2(o, 32))
            : s.type === "address" && C(this, yr).encode(["address"], [o]),
          vi(xt(o), 32));
    for (
      e.forEach((s, o) => {
        const a = t.inputs[o];
        if (!a.indexed) {
          Z(
            s == null,
            "cannot filter non-indexed parameters; must be null",
            "contract." + a.name,
            s
          );
          return;
        }
        s == null
          ? r.push(null)
          : a.baseType === "array" || a.baseType === "tuple"
          ? Z(
              !1,
              "filtering with tuples or arrays not supported",
              "contract." + a.name,
              s
            )
          : Array.isArray(s)
          ? r.push(s.map((c) => i(a, c)))
          : r.push(i(a, s));
      });
      r.length && r[r.length - 1] === null;

    )
      r.pop();
    return r;
  }
  encodeEventLog(t, e) {
    if (typeof t == "string") {
      const o = this.getEvent(t);
      Z(o, "unknown event", "eventFragment", t), (t = o);
    }
    const r = [],
      i = [],
      s = [];
    return (
      t.anonymous || r.push(t.topicHash),
      Z(
        e.length === t.inputs.length,
        "event arguments/values mismatch",
        "values",
        e
      ),
      t.inputs.forEach((o, a) => {
        const c = e[a];
        if (o.indexed)
          if (o.type === "string") r.push(so(c));
          else if (o.type === "bytes") r.push(qe(c));
          else {
            if (o.baseType === "tuple" || o.baseType === "array")
              throw new Error("not implemented");
            r.push(C(this, yr).encode([o.type], [c]));
          }
        else i.push(o), s.push(c);
      }),
      { data: C(this, yr).encode(i, s), topics: r }
    );
  }
  decodeEventLog(t, e, r) {
    if (typeof t == "string") {
      const P = this.getEvent(t);
      Z(P, "unknown event", "eventFragment", t), (t = P);
    }
    if (r != null && !t.anonymous) {
      const P = t.topicHash;
      Z(
        be(r[0], 32) && r[0].toLowerCase() === P,
        "fragment/topic mismatch",
        "topics[0]",
        r[0]
      ),
        (r = r.slice(1));
    }
    const i = [],
      s = [],
      o = [];
    t.inputs.forEach((P, M) => {
      P.indexed
        ? P.type === "string" ||
          P.type === "bytes" ||
          P.baseType === "tuple" ||
          P.baseType === "array"
          ? (i.push(cr.from({ type: "bytes32", name: P.name })), o.push(!0))
          : (i.push(P), o.push(!1))
        : (s.push(P), o.push(!1));
    });
    const a = r != null ? C(this, yr).decode(i, Fe(r)) : null,
      c = C(this, yr).decode(s, e, !0),
      f = [],
      h = [];
    let b = 0,
      S = 0;
    return (
      t.inputs.forEach((P, M) => {
        let N = null;
        if (P.indexed)
          if (a == null) N = new sg(null);
          else if (o[M]) N = new sg(a[S++]);
          else
            try {
              N = a[S++];
            } catch (D) {
              N = D;
            }
        else
          try {
            N = c[b++];
          } catch (D) {
            N = D;
          }
        f.push(N), h.push(P.name || null);
      }),
      Fa.fromItems(f, h)
    );
  }
  parseTransaction(t) {
    const e = $t(t.data, "tx.data"),
      r = vt(t.value != null ? t.value : 0, "tx.value"),
      i = this.getFunction(xt(e.slice(0, 4)));
    if (!i) return null;
    const s = C(this, yr).decode(i.inputs, e.slice(4));
    return new rI(i, i.selector, s, r);
  }
  parseCallResult(t) {
    throw new Error("@TODO");
  }
  parseLog(t) {
    const e = this.getEvent(t.topics[0]);
    return !e || e.anonymous
      ? null
      : new eI(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
  }
  parseError(t) {
    const e = xt(t),
      r = this.getError(Ue(e, 0, 4));
    if (!r) return null;
    const i = C(this, yr).decode(r.inputs, Ue(e, 4));
    return new nI(r, r.selector, i);
  }
  static from(t) {
    return t instanceof ks
      ? t
      : typeof t == "string"
      ? new ks(JSON.parse(t))
      : typeof t.formatJson == "function"
      ? new ks(t.formatJson())
      : typeof t.format == "function"
      ? new ks(t.format("json"))
      : new ks(t);
  }
};
(Nn = new WeakMap()),
  (Tn = new WeakMap()),
  (_n = new WeakMap()),
  (yr = new WeakMap()),
  ($n = new WeakSet()),
  (Pu = function (t, e, r) {
    if (be(t)) {
      const s = t.toLowerCase();
      for (const o of C(this, _n).values()) if (s === o.selector) return o;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [o, a] of C(this, _n)) o.split("(")[0] === t && s.push(a);
      if (e) {
        const o = e.length > 0 ? e[e.length - 1] : null;
        let a = e.length,
          c = !0;
        br.isTyped(o) && o.type === "overrides" && ((c = !1), a--);
        for (let f = s.length - 1; f >= 0; f--) {
          const h = s[f].inputs.length;
          h !== a && (!c || h !== a - 1) && s.splice(f, 1);
        }
        for (let f = s.length - 1; f >= 0; f--) {
          const h = s[f].inputs;
          for (let b = 0; b < e.length; b++)
            if (br.isTyped(e[b])) {
              if (b >= h.length) {
                if (e[b].type === "overrides") continue;
                s.splice(f, 1);
                break;
              }
              if (e[b].type !== h[b].baseType) {
                s.splice(f, 1);
                break;
              }
            }
        }
      }
      if (s.length === 1 && e && e.length !== s[0].inputs.length) {
        const o = e[e.length - 1];
        (o == null || Array.isArray(o) || typeof o != "object") &&
          s.splice(0, 1);
      }
      if (s.length === 0) return null;
      if (s.length > 1 && r) {
        const o = s.map((a) => JSON.stringify(a.format())).join(", ");
        Z(!1, `ambiguous function description (i.e. matches ${o})`, "key", t);
      }
      return s[0];
    }
    const i = C(this, _n).get(Vn.from(t).format());
    return i || null;
  }),
  (Cu = function (t, e, r) {
    if (be(t)) {
      const s = t.toLowerCase();
      for (const o of C(this, Tn).values()) if (s === o.topicHash) return o;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [o, a] of C(this, Tn)) o.split("(")[0] === t && s.push(a);
      if (e) {
        for (let o = s.length - 1; o >= 0; o--)
          s[o].inputs.length < e.length && s.splice(o, 1);
        for (let o = s.length - 1; o >= 0; o--) {
          const a = s[o].inputs;
          for (let c = 0; c < e.length; c++)
            if (br.isTyped(e[c]) && e[c].type !== a[c].baseType) {
              s.splice(o, 1);
              break;
            }
        }
      }
      if (s.length === 0) return null;
      if (s.length > 1 && r) {
        const o = s.map((a) => JSON.stringify(a.format())).join(", ");
        Z(!1, `ambiguous event description (i.e. matches ${o})`, "key", t);
      }
      return s[0];
    }
    const i = C(this, Tn).get(Kn.from(t).format());
    return i || null;
  });
let Gh = ks;
const Rw = BigInt(0);
function Wo(n) {
  return n ?? null;
}
function ze(n) {
  return n == null ? null : n.toString();
}
class cg {
  constructor(t, e, r) {
    tt(this, "gasPrice");
    tt(this, "maxFeePerGas");
    tt(this, "maxPriorityFeePerGas");
    Ct(this, {
      gasPrice: Wo(t),
      maxFeePerGas: Wo(e),
      maxPriorityFeePerGas: Wo(r),
    });
  }
  toJSON() {
    const { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: r } = this;
    return {
      _type: "FeeData",
      gasPrice: ze(t),
      maxFeePerGas: ze(e),
      maxPriorityFeePerGas: ze(r),
    };
  }
}
function sl(n) {
  const t = {};
  n.to && (t.to = n.to),
    n.from && (t.from = n.from),
    n.data && (t.data = xt(n.data));
  const e =
    "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(
      /,/
    );
  for (const i of e)
    !(i in n) || n[i] == null || (t[i] = vt(n[i], `request.${i}`));
  const r = "type,nonce".split(/,/);
  for (const i of r)
    !(i in n) || n[i] == null || (t[i] = Gt(n[i], `request.${i}`));
  return (
    n.accessList && (t.accessList = go(n.accessList)),
    n.authorizationList && (t.authorizationList = n.authorizationList.slice()),
    "blockTag" in n && (t.blockTag = n.blockTag),
    "enableCcipRead" in n && (t.enableCcipRead = !!n.enableCcipRead),
    "customData" in n && (t.customData = n.customData),
    "blobVersionedHashes" in n &&
      n.blobVersionedHashes &&
      (t.blobVersionedHashes = n.blobVersionedHashes.slice()),
    "kzg" in n && (t.kzg = n.kzg),
    "blobs" in n &&
      n.blobs &&
      (t.blobs = n.blobs.map((i) => (Md(i) ? xt(i) : Object.assign({}, i)))),
    t
  );
}
var li;
class iI {
  constructor(t, e) {
    tt(this, "provider");
    tt(this, "number");
    tt(this, "hash");
    tt(this, "timestamp");
    tt(this, "parentHash");
    tt(this, "parentBeaconBlockRoot");
    tt(this, "nonce");
    tt(this, "difficulty");
    tt(this, "gasLimit");
    tt(this, "gasUsed");
    tt(this, "stateRoot");
    tt(this, "receiptsRoot");
    tt(this, "blobGasUsed");
    tt(this, "excessBlobGas");
    tt(this, "miner");
    tt(this, "prevRandao");
    tt(this, "extraData");
    tt(this, "baseFeePerGas");
    ut(this, li);
    Q(
      this,
      li,
      t.transactions.map((r) => (typeof r != "string" ? new Cc(r, e) : r))
    ),
      Ct(this, {
        provider: e,
        hash: Wo(t.hash),
        number: t.number,
        timestamp: t.timestamp,
        parentHash: t.parentHash,
        parentBeaconBlockRoot: t.parentBeaconBlockRoot,
        nonce: t.nonce,
        difficulty: t.difficulty,
        gasLimit: t.gasLimit,
        gasUsed: t.gasUsed,
        blobGasUsed: t.blobGasUsed,
        excessBlobGas: t.excessBlobGas,
        miner: t.miner,
        prevRandao: Wo(t.prevRandao),
        extraData: t.extraData,
        baseFeePerGas: Wo(t.baseFeePerGas),
        stateRoot: t.stateRoot,
        receiptsRoot: t.receiptsRoot,
      });
  }
  get transactions() {
    return C(this, li).map((t) => (typeof t == "string" ? t : t.hash));
  }
  get prefetchedTransactions() {
    const t = C(this, li).slice();
    return t.length === 0
      ? []
      : (ht(
          typeof t[0] == "object",
          "transactions were not prefetched with block request",
          "UNSUPPORTED_OPERATION",
          { operation: "transactionResponses()" }
        ),
        t);
  }
  toJSON() {
    const {
      baseFeePerGas: t,
      difficulty: e,
      extraData: r,
      gasLimit: i,
      gasUsed: s,
      hash: o,
      miner: a,
      prevRandao: c,
      nonce: f,
      number: h,
      parentHash: b,
      parentBeaconBlockRoot: S,
      stateRoot: P,
      receiptsRoot: M,
      timestamp: N,
      transactions: D,
    } = this;
    return {
      _type: "Block",
      baseFeePerGas: ze(t),
      difficulty: ze(e),
      extraData: r,
      gasLimit: ze(i),
      gasUsed: ze(s),
      blobGasUsed: ze(this.blobGasUsed),
      excessBlobGas: ze(this.excessBlobGas),
      hash: o,
      miner: a,
      prevRandao: c,
      nonce: f,
      number: h,
      parentHash: b,
      timestamp: N,
      parentBeaconBlockRoot: S,
      stateRoot: P,
      receiptsRoot: M,
      transactions: D,
    };
  }
  [Symbol.iterator]() {
    let t = 0;
    const e = this.transactions;
    return {
      next: () =>
        t < this.length
          ? { value: e[t++], done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  get length() {
    return C(this, li).length;
  }
  get date() {
    return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
  }
  async getTransaction(t) {
    let e;
    if (typeof t == "number") e = C(this, li)[t];
    else {
      const r = t.toLowerCase();
      for (const i of C(this, li))
        if (typeof i == "string") {
          if (i !== r) continue;
          e = i;
          break;
        } else {
          if (i.hash !== r) continue;
          e = i;
          break;
        }
    }
    if (e == null) throw new Error("no such tx");
    return typeof e == "string" ? await this.provider.getTransaction(e) : e;
  }
  getPrefetchedTransaction(t) {
    const e = this.prefetchedTransactions;
    if (typeof t == "number") return e[t];
    t = t.toLowerCase();
    for (const r of e) if (r.hash === t) return r;
    Z(!1, "no matching transaction", "indexOrHash", t);
  }
  isMined() {
    return !!this.hash;
  }
  isLondon() {
    return !!this.baseFeePerGas;
  }
  orphanedEvent() {
    if (!this.isMined()) throw new Error("");
    return sI(this);
  }
}
li = new WeakMap();
class tu {
  constructor(t, e) {
    tt(this, "provider");
    tt(this, "transactionHash");
    tt(this, "blockHash");
    tt(this, "blockNumber");
    tt(this, "removed");
    tt(this, "address");
    tt(this, "data");
    tt(this, "topics");
    tt(this, "index");
    tt(this, "transactionIndex");
    this.provider = e;
    const r = Object.freeze(t.topics.slice());
    Ct(this, {
      transactionHash: t.transactionHash,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      removed: t.removed,
      address: t.address,
      data: t.data,
      topics: r,
      index: t.index,
      transactionIndex: t.transactionIndex,
    });
  }
  toJSON() {
    const {
      address: t,
      blockHash: e,
      blockNumber: r,
      data: i,
      index: s,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: f,
    } = this;
    return {
      _type: "log",
      address: t,
      blockHash: e,
      blockNumber: r,
      data: i,
      index: s,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: f,
    };
  }
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    return ht(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  async getTransaction() {
    const t = await this.provider.getTransaction(this.transactionHash);
    return ht(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  async getTransactionReceipt() {
    const t = await this.provider.getTransactionReceipt(this.transactionHash);
    return (
      ht(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t
    );
  }
  removedEvent() {
    return oI(this);
  }
}
var Uc;
class Pw {
  constructor(t, e) {
    tt(this, "provider");
    tt(this, "to");
    tt(this, "from");
    tt(this, "contractAddress");
    tt(this, "hash");
    tt(this, "index");
    tt(this, "blockHash");
    tt(this, "blockNumber");
    tt(this, "logsBloom");
    tt(this, "gasUsed");
    tt(this, "blobGasUsed");
    tt(this, "cumulativeGasUsed");
    tt(this, "gasPrice");
    tt(this, "blobGasPrice");
    tt(this, "type");
    tt(this, "status");
    tt(this, "root");
    ut(this, Uc);
    Q(this, Uc, Object.freeze(t.logs.map((i) => new tu(i, e))));
    let r = Rw;
    t.effectiveGasPrice != null
      ? (r = t.effectiveGasPrice)
      : t.gasPrice != null && (r = t.gasPrice),
      Ct(this, {
        provider: e,
        to: t.to,
        from: t.from,
        contractAddress: t.contractAddress,
        hash: t.hash,
        index: t.index,
        blockHash: t.blockHash,
        blockNumber: t.blockNumber,
        logsBloom: t.logsBloom,
        gasUsed: t.gasUsed,
        cumulativeGasUsed: t.cumulativeGasUsed,
        blobGasUsed: t.blobGasUsed,
        gasPrice: r,
        blobGasPrice: t.blobGasPrice,
        type: t.type,
        status: t.status,
        root: t.root,
      });
  }
  get logs() {
    return C(this, Uc);
  }
  toJSON() {
    const {
      to: t,
      from: e,
      contractAddress: r,
      hash: i,
      index: s,
      blockHash: o,
      blockNumber: a,
      logsBloom: c,
      logs: f,
      status: h,
      root: b,
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: o,
      blockNumber: a,
      contractAddress: r,
      cumulativeGasUsed: ze(this.cumulativeGasUsed),
      from: e,
      gasPrice: ze(this.gasPrice),
      blobGasUsed: ze(this.blobGasUsed),
      blobGasPrice: ze(this.blobGasPrice),
      gasUsed: ze(this.gasUsed),
      hash: i,
      index: s,
      logs: f,
      logsBloom: c,
      root: b,
      status: h,
      to: t,
    };
  }
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.length
          ? { value: this.logs[t++], done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    if (t == null) throw new Error("TODO");
    return t;
  }
  async getTransaction() {
    const t = await this.provider.getTransaction(this.hash);
    if (t == null) throw new Error("TODO");
    return t;
  }
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  async confirmations() {
    return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
  }
  removedEvent() {
    return Nw(this);
  }
  reorderedEvent(t) {
    return (
      ht(
        !t || t.isMined(),
        "unmined 'other' transction cannot be orphaned",
        "UNSUPPORTED_OPERATION",
        { operation: "reorderedEvent(other)" }
      ),
      Cw(this, t)
    );
  }
}
Uc = new WeakMap();
var Qi;
const e0 = class e0 {
  constructor(t, e) {
    tt(this, "provider");
    tt(this, "blockNumber");
    tt(this, "blockHash");
    tt(this, "index");
    tt(this, "hash");
    tt(this, "type");
    tt(this, "to");
    tt(this, "from");
    tt(this, "nonce");
    tt(this, "gasLimit");
    tt(this, "gasPrice");
    tt(this, "maxPriorityFeePerGas");
    tt(this, "maxFeePerGas");
    tt(this, "maxFeePerBlobGas");
    tt(this, "data");
    tt(this, "value");
    tt(this, "chainId");
    tt(this, "signature");
    tt(this, "accessList");
    tt(this, "blobVersionedHashes");
    tt(this, "authorizationList");
    ut(this, Qi);
    (this.provider = e),
      (this.blockNumber = t.blockNumber != null ? t.blockNumber : null),
      (this.blockHash = t.blockHash != null ? t.blockHash : null),
      (this.hash = t.hash),
      (this.index = t.index),
      (this.type = t.type),
      (this.from = t.from),
      (this.to = t.to || null),
      (this.gasLimit = t.gasLimit),
      (this.nonce = t.nonce),
      (this.data = t.data),
      (this.value = t.value),
      (this.gasPrice = t.gasPrice),
      (this.maxPriorityFeePerGas =
        t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null),
      (this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null),
      (this.maxFeePerBlobGas =
        t.maxFeePerBlobGas != null ? t.maxFeePerBlobGas : null),
      (this.chainId = t.chainId),
      (this.signature = t.signature),
      (this.accessList = t.accessList != null ? t.accessList : null),
      (this.blobVersionedHashes =
        t.blobVersionedHashes != null ? t.blobVersionedHashes : null),
      (this.authorizationList =
        t.authorizationList != null ? t.authorizationList : null),
      Q(this, Qi, -1);
  }
  toJSON() {
    const {
      blockNumber: t,
      blockHash: e,
      index: r,
      hash: i,
      type: s,
      to: o,
      from: a,
      nonce: c,
      data: f,
      signature: h,
      accessList: b,
      blobVersionedHashes: S,
    } = this;
    return {
      _type: "TransactionResponse",
      accessList: b,
      blockNumber: t,
      blockHash: e,
      blobVersionedHashes: S,
      chainId: ze(this.chainId),
      data: f,
      from: a,
      gasLimit: ze(this.gasLimit),
      gasPrice: ze(this.gasPrice),
      hash: i,
      maxFeePerGas: ze(this.maxFeePerGas),
      maxPriorityFeePerGas: ze(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: ze(this.maxFeePerBlobGas),
      nonce: c,
      signature: h,
      to: o,
      index: r,
      type: s,
      value: ze(this.value),
    };
  }
  async getBlock() {
    let t = this.blockNumber;
    if (t == null) {
      const r = await this.getTransaction();
      r && (t = r.blockNumber);
    }
    if (t == null) return null;
    const e = this.provider.getBlock(t);
    if (e == null) throw new Error("TODO");
    return e;
  }
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: e, blockNumber: r } = await kr({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber(),
      });
      return e == null || e.blockNumber == null ? 0 : r - e.blockNumber + 1;
    }
    return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
  }
  async wait(t, e) {
    const r = t ?? 1,
      i = e ?? 0;
    let s = C(this, Qi),
      o = -1,
      a = s === -1;
    const c = async () => {
        if (a) return null;
        const { blockNumber: S, nonce: P } = await kr({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from),
        });
        if (P < this.nonce) {
          s = S;
          return;
        }
        if (a) return null;
        const M = await this.getTransaction();
        if (!(M && M.blockNumber != null))
          for (
            o === -1 && ((o = s - 3), o < C(this, Qi) && (o = C(this, Qi)));
            o <= S;

          ) {
            if (a) return null;
            const N = await this.provider.getBlock(o, !0);
            if (N == null) return;
            for (const D of N) if (D === this.hash) return;
            for (let D = 0; D < N.length; D++) {
              const q = await N.getTransaction(D);
              if (q.from === this.from && q.nonce === this.nonce) {
                if (a) return null;
                const z = await this.provider.getTransactionReceipt(q.hash);
                if (z == null || S - z.blockNumber + 1 < r) return;
                let V = "replaced";
                q.data === this.data &&
                q.to === this.to &&
                q.value === this.value
                  ? (V = "repriced")
                  : q.data === "0x" &&
                    q.from === q.to &&
                    q.value === Rw &&
                    (V = "cancelled"),
                  ht(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                    cancelled: V === "replaced" || V === "cancelled",
                    reason: V,
                    replacement: q.replaceableTransaction(s),
                    hash: q.hash,
                    receipt: z,
                  });
              }
            }
            o++;
          }
      },
      f = (S) => {
        if (S == null || S.status !== 0) return S;
        ht(!1, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: { to: S.to, from: S.from, data: "" },
          receipt: S,
        });
      },
      h = await this.provider.getTransactionReceipt(this.hash);
    if (r === 0) return f(h);
    if (h) {
      if (r === 1 || (await h.confirmations()) >= r) return f(h);
    } else if ((await c(), r === 0)) return null;
    return await new Promise((S, P) => {
      const M = [],
        N = () => {
          M.forEach((q) => q());
        };
      if (
        (M.push(() => {
          a = !0;
        }),
        i > 0)
      ) {
        const q = setTimeout(() => {
          N(), P(Be("wait for transaction timeout", "TIMEOUT"));
        }, i);
        M.push(() => {
          clearTimeout(q);
        });
      }
      const D = async (q) => {
        if ((await q.confirmations()) >= r) {
          N();
          try {
            S(f(q));
          } catch (z) {
            P(z);
          }
        }
      };
      if (
        (M.push(() => {
          this.provider.off(this.hash, D);
        }),
        this.provider.on(this.hash, D),
        s >= 0)
      ) {
        const q = async () => {
          try {
            await c();
          } catch (z) {
            if (or(z, "TRANSACTION_REPLACED")) {
              N(), P(z);
              return;
            }
          }
          a || this.provider.once("block", q);
        };
        M.push(() => {
          this.provider.off("block", q);
        }),
          this.provider.once("block", q);
      }
    });
  }
  isMined() {
    return this.blockHash != null;
  }
  isLegacy() {
    return this.type === 0;
  }
  isBerlin() {
    return this.type === 1;
  }
  isLondon() {
    return this.type === 2;
  }
  isCancun() {
    return this.type === 3;
  }
  removedEvent() {
    return (
      ht(
        this.isMined(),
        "unmined transaction canot be orphaned",
        "UNSUPPORTED_OPERATION",
        { operation: "removeEvent()" }
      ),
      Nw(this)
    );
  }
  reorderedEvent(t) {
    return (
      ht(
        this.isMined(),
        "unmined transaction canot be orphaned",
        "UNSUPPORTED_OPERATION",
        { operation: "removeEvent()" }
      ),
      ht(
        !t || t.isMined(),
        "unmined 'other' transaction canot be orphaned",
        "UNSUPPORTED_OPERATION",
        { operation: "removeEvent()" }
      ),
      Cw(this, t)
    );
  }
  replaceableTransaction(t) {
    Z(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
    const e = new e0(this, this.provider);
    return Q(e, Qi, t), e;
  }
};
Qi = new WeakMap();
let Cc = e0;
function sI(n) {
  return { orphan: "drop-block", hash: n.hash, number: n.number };
}
function Cw(n, t) {
  return { orphan: "reorder-transaction", tx: n, other: t };
}
function Nw(n) {
  return { orphan: "drop-transaction", tx: n };
}
function oI(n) {
  return {
    orphan: "drop-log",
    log: {
      transactionHash: n.transactionHash,
      blockHash: n.blockHash,
      blockNumber: n.blockNumber,
      address: n.address,
      data: n.data,
      topics: Object.freeze(n.topics.slice()),
      index: n.index,
    },
  };
}
class Qd extends tu {
  constructor(e, r, i) {
    super(e, e.provider);
    tt(this, "interface");
    tt(this, "fragment");
    tt(this, "args");
    const s = r.decodeEventLog(i, e.data, e.topics);
    Ct(this, { args: s, fragment: i, interface: r });
  }
  get eventName() {
    return this.fragment.name;
  }
  get eventSignature() {
    return this.fragment.format();
  }
}
class Tw extends tu {
  constructor(e, r) {
    super(e, e.provider);
    tt(this, "error");
    Ct(this, { error: r });
  }
}
var ma;
class aI extends Pw {
  constructor(e, r, i) {
    super(i, r);
    ut(this, ma);
    Q(this, ma, e);
  }
  get logs() {
    return super.logs.map((e) => {
      const r = e.topics.length ? C(this, ma).getEvent(e.topics[0]) : null;
      if (r)
        try {
          return new Qd(e, C(this, ma), r);
        } catch (i) {
          return new Tw(e, i);
        }
      return e;
    });
  }
}
ma = new WeakMap();
var Fc;
class Jd extends Cc {
  constructor(e, r, i) {
    super(i, r);
    ut(this, Fc);
    Q(this, Fc, e);
  }
  async wait(e, r) {
    const i = await super.wait(e, r);
    return i == null ? null : new aI(C(this, Fc), this.provider, i);
  }
}
Fc = new WeakMap();
class _w extends sm {
  constructor(e, r, i, s) {
    super(e, r, i);
    tt(this, "log");
    Ct(this, { log: s });
  }
  async getBlock() {
    return await this.log.getBlock();
  }
  async getTransaction() {
    return await this.log.getTransaction();
  }
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class cI extends _w {
  constructor(t, e, r, i, s) {
    super(t, e, r, new Qd(s, t.interface, i));
    const o = t.interface.decodeEventLog(i, this.log.data, this.log.topics);
    Ct(this, { args: o, fragment: i });
  }
  get eventName() {
    return this.fragment.name;
  }
  get eventSignature() {
    return this.fragment.format();
  }
}
const ug = BigInt(0);
function Ow(n) {
  return n && typeof n.call == "function";
}
function Mw(n) {
  return n && typeof n.estimateGas == "function";
}
function Kl(n) {
  return n && typeof n.resolveName == "function";
}
function Lw(n) {
  return n && typeof n.sendTransaction == "function";
}
function Uw(n) {
  if (n != null) {
    if (Kl(n)) return n;
    if (n.provider) return n.provider;
  }
}
var Dc;
class uI {
  constructor(t, e, r) {
    ut(this, Dc);
    tt(this, "fragment");
    if ((Ct(this, { fragment: e }), e.inputs.length < r.length))
      throw new Error("too many arguments");
    const i = co(t.runner, "resolveName"),
      s = Kl(i) ? i : null;
    Q(
      this,
      Dc,
      (async function () {
        const o = await Promise.all(
          e.inputs.map((a, c) =>
            r[c] == null
              ? null
              : a.walkAsync(r[c], (h, b) =>
                  h === "address"
                    ? Array.isArray(b)
                      ? Promise.all(b.map((S) => Ir(S, s)))
                      : Ir(b, s)
                    : b
                )
          )
        );
        return t.interface.encodeFilterTopics(e, o);
      })()
    );
  }
  getTopicFilter() {
    return C(this, Dc);
  }
}
Dc = new WeakMap();
function co(n, t) {
  return n == null
    ? null
    : typeof n[t] == "function"
    ? n
    : n.provider && typeof n.provider[t] == "function"
    ? n.provider
    : null;
}
function Ts(n) {
  return n == null ? null : n.provider || null;
}
async function Fw(n, t) {
  const e = br.dereference(n, "overrides");
  Z(typeof e == "object", "invalid overrides parameter", "overrides", n);
  const r = sl(e);
  return (
    Z(
      r.to == null || (t || []).indexOf("to") >= 0,
      "cannot override to",
      "overrides.to",
      r.to
    ),
    Z(
      r.data == null || (t || []).indexOf("data") >= 0,
      "cannot override data",
      "overrides.data",
      r.data
    ),
    r.from && (r.from = r.from),
    r
  );
}
async function lI(n, t, e) {
  const r = co(n, "resolveName"),
    i = Kl(r) ? r : null;
  return await Promise.all(
    t.map((s, o) =>
      s.walkAsync(
        e[o],
        (a, c) => ((c = br.dereference(c, a)), a === "address" ? Ir(c, i) : c)
      )
    )
  );
}
function fI(n) {
  const t = async function (o) {
      const a = await Fw(o, ["data"]);
      (a.to = await n.getAddress()),
        a.from && (a.from = await Ir(a.from, Uw(n.runner)));
      const c = n.interface,
        f = vt(a.value || ug, "overrides.value") === ug,
        h = (a.data || "0x") === "0x";
      c.fallback &&
        !c.fallback.payable &&
        c.receive &&
        !h &&
        !f &&
        Z(
          !1,
          "cannot send data to receive or send value to non-payable fallback",
          "overrides",
          o
        ),
        Z(
          c.fallback || h,
          "cannot send data to receive-only contract",
          "overrides.data",
          a.data
        );
      const b = c.receive || (c.fallback && c.fallback.payable);
      return (
        Z(
          b || f,
          "cannot send value to non-payable fallback",
          "overrides.value",
          a.value
        ),
        Z(
          c.fallback || h,
          "cannot send data to receive-only contract",
          "overrides.data",
          a.data
        ),
        a
      );
    },
    e = async function (o) {
      const a = co(n.runner, "call");
      ht(
        Ow(a),
        "contract runner does not support calling",
        "UNSUPPORTED_OPERATION",
        { operation: "call" }
      );
      const c = await t(o);
      try {
        return await a.call(c);
      } catch (f) {
        throw Od(f) && f.data ? n.interface.makeError(f.data, c) : f;
      }
    },
    r = async function (o) {
      const a = n.runner;
      ht(
        Lw(a),
        "contract runner does not support sending transactions",
        "UNSUPPORTED_OPERATION",
        { operation: "sendTransaction" }
      );
      const c = await a.sendTransaction(await t(o)),
        f = Ts(n.runner);
      return new Jd(n.interface, f, c);
    },
    i = async function (o) {
      const a = co(n.runner, "estimateGas");
      return (
        ht(
          Mw(a),
          "contract runner does not support gas estimation",
          "UNSUPPORTED_OPERATION",
          { operation: "estimateGas" }
        ),
        await a.estimateGas(await t(o))
      );
    },
    s = async (o) => await r(o);
  return (
    Ct(s, {
      _contract: n,
      estimateGas: i,
      populateTransaction: t,
      send: r,
      staticCall: e,
    }),
    s
  );
}
function hI(n, t) {
  const e = function (...f) {
      const h = n.interface.getFunction(t, f);
      return (
        ht(h, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key: t, args: f },
        }),
        h
      );
    },
    r = async function (...f) {
      const h = e(...f);
      let b = {};
      if (
        (h.inputs.length + 1 === f.length &&
          ((b = await Fw(f.pop())),
          b.from && (b.from = await Ir(b.from, Uw(n.runner)))),
        h.inputs.length !== f.length)
      )
        throw new Error(
          "internal error: fragment inputs doesn't match arguments; should not happen"
        );
      const S = await lI(n.runner, h.inputs, f);
      return Object.assign(
        {},
        b,
        await kr({
          to: n.getAddress(),
          data: n.interface.encodeFunctionData(h, S),
        })
      );
    },
    i = async function (...f) {
      const h = await a(...f);
      return h.length === 1 ? h[0] : h;
    },
    s = async function (...f) {
      const h = n.runner;
      ht(
        Lw(h),
        "contract runner does not support sending transactions",
        "UNSUPPORTED_OPERATION",
        { operation: "sendTransaction" }
      );
      const b = await h.sendTransaction(await r(...f)),
        S = Ts(n.runner);
      return new Jd(n.interface, S, b);
    },
    o = async function (...f) {
      const h = co(n.runner, "estimateGas");
      return (
        ht(
          Mw(h),
          "contract runner does not support gas estimation",
          "UNSUPPORTED_OPERATION",
          { operation: "estimateGas" }
        ),
        await h.estimateGas(await r(...f))
      );
    },
    a = async function (...f) {
      const h = co(n.runner, "call");
      ht(
        Ow(h),
        "contract runner does not support calling",
        "UNSUPPORTED_OPERATION",
        { operation: "call" }
      );
      const b = await r(...f);
      let S = "0x";
      try {
        S = await h.call(b);
      } catch (M) {
        throw Od(M) && M.data ? n.interface.makeError(M.data, b) : M;
      }
      const P = e(...f);
      return n.interface.decodeFunctionResult(P, S);
    },
    c = async (...f) => (e(...f).constant ? await i(...f) : await s(...f));
  return (
    Ct(c, {
      name: n.interface.getFunctionName(t),
      _contract: n,
      _key: t,
      getFragment: e,
      estimateGas: o,
      populateTransaction: r,
      send: s,
      staticCall: i,
      staticCallResult: a,
    }),
    Object.defineProperty(c, "fragment", {
      configurable: !1,
      enumerable: !0,
      get: () => {
        const f = n.interface.getFunction(t);
        return (
          ht(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
            operation: "fragment",
            info: { key: t },
          }),
          f
        );
      },
    }),
    c
  );
}
function dI(n, t) {
  const e = function (...i) {
      const s = n.interface.getEvent(t, i);
      return (
        ht(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key: t, args: i },
        }),
        s
      );
    },
    r = function (...i) {
      return new uI(n, e(...i), i);
    };
  return (
    Ct(r, {
      name: n.interface.getEventName(t),
      _contract: n,
      _key: t,
      getFragment: e,
    }),
    Object.defineProperty(r, "fragment", {
      configurable: !1,
      enumerable: !0,
      get: () => {
        const i = n.interface.getEvent(t);
        return (
          ht(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
            operation: "fragment",
            info: { key: t },
          }),
          i
        );
      },
    }),
    r
  );
}
const ol = Symbol.for("_ethersInternal_contract"),
  Dw = new WeakMap();
function pI(n, t) {
  Dw.set(n[ol], t);
}
function Gr(n) {
  return Dw.get(n[ol]);
}
function gI(n) {
  return (
    n &&
    typeof n == "object" &&
    "getTopicFilter" in n &&
    typeof n.getTopicFilter == "function" &&
    n.fragment
  );
}
async function jd(n, t) {
  let e,
    r = null;
  if (Array.isArray(t)) {
    const s = function (o) {
      if (be(o, 32)) return o;
      const a = n.interface.getEvent(o);
      return Z(a, "unknown fragment", "name", o), a.topicHash;
    };
    e = t.map((o) => (o == null ? null : Array.isArray(o) ? o.map(s) : s(o)));
  } else
    t === "*"
      ? (e = [null])
      : typeof t == "string"
      ? be(t, 32)
        ? (e = [t])
        : ((r = n.interface.getEvent(t)),
          Z(r, "unknown fragment", "event", t),
          (e = [r.topicHash]))
      : gI(t)
      ? (e = await t.getTopicFilter())
      : "fragment" in t
      ? ((r = t.fragment), (e = [r.topicHash]))
      : Z(!1, "unknown event name", "event", t);
  e = e.map((s) => {
    if (s == null) return null;
    if (Array.isArray(s)) {
      const o = Array.from(new Set(s.map((a) => a.toLowerCase())).values());
      return o.length === 1 ? o[0] : (o.sort(), o);
    }
    return s.toLowerCase();
  });
  const i = e
    .map((s) => (s == null ? "null" : Array.isArray(s) ? s.join("|") : s))
    .join("&");
  return { fragment: r, tag: i, topics: e };
}
async function ac(n, t) {
  const { subs: e } = Gr(n);
  return e.get((await jd(n, t)).tag) || null;
}
async function lg(n, t, e) {
  const r = Ts(n.runner);
  ht(
    r,
    "contract runner does not support subscribing",
    "UNSUPPORTED_OPERATION",
    { operation: t }
  );
  const { fragment: i, tag: s, topics: o } = await jd(n, e),
    { addr: a, subs: c } = Gr(n);
  let f = c.get(s);
  if (!f) {
    const b = { address: a || n, topics: o },
      S = (D) => {
        let q = i;
        if (q == null)
          try {
            q = n.interface.getEvent(D.topics[0]);
          } catch {}
        if (q) {
          const z = q,
            V = i ? n.interface.decodeEventLog(i, D.data, D.topics) : [];
          Vh(n, e, V, (et) => new cI(n, et, e, z, D));
        } else Vh(n, e, [], (z) => new _w(n, z, e, D));
      };
    let P = [];
    (f = {
      tag: s,
      listeners: [],
      start: () => {
        P.length || P.push(r.on(b, S));
      },
      stop: async () => {
        if (P.length == 0) return;
        let D = P;
        (P = []), await Promise.all(D), r.off(b, S);
      },
    }),
      c.set(s, f);
  }
  return f;
}
let Kh = Promise.resolve();
async function yI(n, t, e, r) {
  await Kh;
  const i = await ac(n, t);
  if (!i) return !1;
  const s = i.listeners.length;
  return (
    (i.listeners = i.listeners.filter(({ listener: o, once: a }) => {
      const c = Array.from(e);
      r && c.push(r(a ? null : o));
      try {
        o.call(n, ...c);
      } catch {}
      return !a;
    })),
    i.listeners.length === 0 && (i.stop(), Gr(n).subs.delete(i.tag)),
    s > 0
  );
}
async function Vh(n, t, e, r) {
  try {
    await Kh;
  } catch {}
  const i = yI(n, t, e, r);
  return (Kh = i), await i;
}
const Au = ["then"];
var Eg;
Eg = ol;
const pc = class pc {
  constructor(t, e, r, i) {
    tt(this, "target");
    tt(this, "interface");
    tt(this, "runner");
    tt(this, "filters");
    tt(this, Eg);
    tt(this, "fallback");
    Z(
      typeof t == "string" || Vm(t),
      "invalid value for Contract target",
      "target",
      t
    ),
      r == null && (r = null);
    const s = Gh.from(e);
    Ct(this, { target: t, runner: r, interface: s }),
      Object.defineProperty(this, ol, { value: {} });
    let o,
      a = null,
      c = null;
    if (i) {
      const b = Ts(r);
      c = new Jd(this.interface, b, i);
    }
    let f = new Map();
    if (typeof t == "string")
      if (be(t)) (a = t), (o = Promise.resolve(t));
      else {
        const b = co(r, "resolveName");
        if (!Kl(b))
          throw Be(
            "contract runner does not support name resolution",
            "UNSUPPORTED_OPERATION",
            { operation: "resolveName" }
          );
        o = b.resolveName(t).then((S) => {
          if (S == null)
            throw Be(
              "an ENS name used for a contract target must be correctly configured",
              "UNCONFIGURED_NAME",
              { value: t }
            );
          return (Gr(this).addr = S), S;
        });
      }
    else
      o = t.getAddress().then((b) => {
        if (b == null) throw new Error("TODO");
        return (Gr(this).addr = b), b;
      });
    pI(this, { addrPromise: o, addr: a, deployTx: c, subs: f });
    const h = new Proxy(
      {},
      {
        get: (b, S, P) => {
          if (typeof S == "symbol" || Au.indexOf(S) >= 0)
            return Reflect.get(b, S, P);
          try {
            return this.getEvent(S);
          } catch (M) {
            if (!or(M, "INVALID_ARGUMENT") || M.argument !== "key") throw M;
          }
        },
        has: (b, S) =>
          Au.indexOf(S) >= 0
            ? Reflect.has(b, S)
            : Reflect.has(b, S) || this.interface.hasEvent(String(S)),
      }
    );
    return (
      Ct(this, { filters: h }),
      Ct(this, { fallback: s.receive || s.fallback ? fI(this) : null }),
      new Proxy(this, {
        get: (b, S, P) => {
          if (typeof S == "symbol" || S in b || Au.indexOf(S) >= 0)
            return Reflect.get(b, S, P);
          try {
            return b.getFunction(S);
          } catch (M) {
            if (!or(M, "INVALID_ARGUMENT") || M.argument !== "key") throw M;
          }
        },
        has: (b, S) =>
          typeof S == "symbol" || S in b || Au.indexOf(S) >= 0
            ? Reflect.has(b, S)
            : b.interface.hasFunction(S),
      })
    );
  }
  connect(t) {
    return new pc(this.target, this.interface, t);
  }
  attach(t) {
    return new pc(t, this.interface, this.runner);
  }
  async getAddress() {
    return await Gr(this).addrPromise;
  }
  async getDeployedCode() {
    const t = Ts(this.runner);
    ht(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
      operation: "getDeployedCode",
    });
    const e = await t.getCode(await this.getAddress());
    return e === "0x" ? null : e;
  }
  async waitForDeployment() {
    const t = this.deploymentTransaction();
    if (t) return await t.wait(), this;
    if ((await this.getDeployedCode()) != null) return this;
    const r = Ts(this.runner);
    return (
      ht(
        r != null,
        "contract runner does not support .provider",
        "UNSUPPORTED_OPERATION",
        { operation: "waitForDeployment" }
      ),
      new Promise((i, s) => {
        const o = async () => {
          try {
            if ((await this.getDeployedCode()) != null) return i(this);
            r.once("block", o);
          } catch (a) {
            s(a);
          }
        };
        o();
      })
    );
  }
  deploymentTransaction() {
    return Gr(this).deployTx;
  }
  getFunction(t) {
    return typeof t != "string" && (t = t.format()), hI(this, t);
  }
  getEvent(t) {
    return typeof t != "string" && (t = t.format()), dI(this, t);
  }
  async queryTransaction(t) {
    throw new Error("@TODO");
  }
  async queryFilter(t, e, r) {
    e == null && (e = 0), r == null && (r = "latest");
    const { addr: i, addrPromise: s } = Gr(this),
      o = i || (await s),
      { fragment: a, topics: c } = await jd(this, t),
      f = { address: o, topics: c, fromBlock: e, toBlock: r },
      h = Ts(this.runner);
    return (
      ht(
        h,
        "contract runner does not have a provider",
        "UNSUPPORTED_OPERATION",
        { operation: "queryFilter" }
      ),
      (await h.getLogs(f)).map((b) => {
        let S = a;
        if (S == null)
          try {
            S = this.interface.getEvent(b.topics[0]);
          } catch {}
        if (S)
          try {
            return new Qd(b, this.interface, S);
          } catch (P) {
            return new Tw(b, P);
          }
        return new tu(b, h);
      })
    );
  }
  async on(t, e) {
    const r = await lg(this, "on", t);
    return r.listeners.push({ listener: e, once: !1 }), r.start(), this;
  }
  async once(t, e) {
    const r = await lg(this, "once", t);
    return r.listeners.push({ listener: e, once: !0 }), r.start(), this;
  }
  async emit(t, ...e) {
    return await Vh(this, t, e, null);
  }
  async listenerCount(t) {
    if (t) {
      const i = await ac(this, t);
      return i ? i.listeners.length : 0;
    }
    const { subs: e } = Gr(this);
    let r = 0;
    for (const { listeners: i } of e.values()) r += i.length;
    return r;
  }
  async listeners(t) {
    if (t) {
      const i = await ac(this, t);
      return i ? i.listeners.map(({ listener: s }) => s) : [];
    }
    const { subs: e } = Gr(this);
    let r = [];
    for (const { listeners: i } of e.values())
      r = r.concat(i.map(({ listener: s }) => s));
    return r;
  }
  async off(t, e) {
    const r = await ac(this, t);
    if (!r) return this;
    if (e) {
      const i = r.listeners.map(({ listener: s }) => s).indexOf(e);
      i >= 0 && r.listeners.splice(i, 1);
    }
    return (
      (e == null || r.listeners.length === 0) &&
        (r.stop(), Gr(this).subs.delete(r.tag)),
      this
    );
  }
  async removeAllListeners(t) {
    if (t) {
      const e = await ac(this, t);
      if (!e) return this;
      e.stop(), Gr(this).subs.delete(e.tag);
    } else {
      const { subs: e } = Gr(this);
      for (const { tag: r, stop: i } of e.values()) i(), e.delete(r);
    }
    return this;
  }
  async addListener(t, e) {
    return await this.on(t, e);
  }
  async removeListener(t, e) {
    return await this.off(t, e);
  }
  static buildClass(t) {
    class e extends pc {
      constructor(i, s = null) {
        super(i, t, s);
      }
    }
    return e;
  }
  static from(t, e, r) {
    return r == null && (r = null), new this(t, e, r);
  }
};
let Wh = pc;
function mI() {
  return Wh;
}
class dc extends mI() {}
function sh(n) {
  return (
    n.match(/^ipfs:\/\/ipfs\//i)
      ? (n = n.substring(12))
      : n.match(/^ipfs:\/\//i)
      ? (n = n.substring(7))
      : Z(!1, "unsupported IPFS format", "link", n),
    `https://gateway.ipfs.io/ipfs/${n}`
  );
}
class wI {
  constructor(t) {
    tt(this, "name");
    Ct(this, { name: t });
  }
  connect(t) {
    return this;
  }
  supportsCoinType(t) {
    return !1;
  }
  async encodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
  async decodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
}
const zw = new RegExp("^(ipfs)://(.*)$", "i"),
  fg = [
    new RegExp("^(https)://(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    zw,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
  ];
var Ji, Ws, ji, Ro, hl, Hw;
const Mo = class Mo {
  constructor(t, e, r) {
    ut(this, ji);
    tt(this, "provider");
    tt(this, "address");
    tt(this, "name");
    ut(this, Ji);
    ut(this, Ws);
    Ct(this, { provider: t, address: e, name: r }),
      Q(this, Ji, null),
      Q(
        this,
        Ws,
        new dc(
          e,
          [
            "function supportsInterface(bytes4) view returns (bool)",
            "function resolve(bytes, bytes) view returns (bytes)",
            "function addr(bytes32) view returns (address)",
            "function addr(bytes32, uint) view returns (bytes)",
            "function text(bytes32, string) view returns (string)",
            "function contenthash(bytes32) view returns (bytes)",
          ],
          t
        )
      );
  }
  async supportsWildcard() {
    return (
      C(this, Ji) == null &&
        Q(
          this,
          Ji,
          (async () => {
            try {
              return await C(this, Ws).supportsInterface("0x9061b923");
            } catch (t) {
              if (or(t, "CALL_EXCEPTION")) return !1;
              throw (Q(this, Ji, null), t);
            }
          })()
        ),
      await C(this, Ji)
    );
  }
  async getAddress(t) {
    if ((t == null && (t = 60), t === 60))
      try {
        const s = await pt(this, ji, Ro).call(this, "addr(bytes32)");
        return s == null || s === xc ? null : s;
      } catch (s) {
        if (or(s, "CALL_EXCEPTION")) return null;
        throw s;
      }
    if (t >= 0 && t < 2147483648) {
      let s = t + 2147483648;
      const o = await pt(this, ji, Ro).call(this, "addr(bytes32,uint)", [s]);
      if (be(o, 20)) return oe(o);
    }
    let e = null;
    for (const s of this.provider.plugins)
      if (s instanceof wI && s.supportsCoinType(t)) {
        e = s;
        break;
      }
    if (e == null) return null;
    const r = await pt(this, ji, Ro).call(this, "addr(bytes32,uint)", [t]);
    if (r == null || r === "0x") return null;
    const i = await e.decodeAddress(t, r);
    if (i != null) return i;
    ht(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${t})`,
      info: { coinType: t, data: r },
    });
  }
  async getText(t) {
    const e = await pt(this, ji, Ro).call(this, "text(bytes32,string)", [t]);
    return e == null || e === "0x" ? null : e;
  }
  async getContentHash() {
    const t = await pt(this, ji, Ro).call(this, "contenthash(bytes32)");
    if (t == null || t === "0x") return null;
    const e = t.match(
      /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
    );
    if (e) {
      const i = e[1] === "e3010170" ? "ipfs" : "ipns",
        s = parseInt(e[4], 16);
      if (e[5].length === s * 2) return `${i}://${x2("0x" + e[2])}`;
    }
    const r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (r && r[1].length === 64) return `bzz://${r[1]}`;
    ht(
      !1,
      "invalid or unsupported content hash data",
      "UNSUPPORTED_OPERATION",
      { operation: "getContentHash()", info: { data: t } }
    );
  }
  async getAvatar() {
    return (await this._getAvatar()).url;
  }
  async _getAvatar() {
    const t = [{ type: "name", value: this.name }];
    try {
      const e = await this.getText("avatar");
      if (e == null)
        return (
          t.push({ type: "!avatar", value: "" }), { url: null, linkage: t }
        );
      t.push({ type: "avatar", value: e });
      for (let r = 0; r < fg.length; r++) {
        const i = e.match(fg[r]);
        if (i == null) continue;
        const s = i[1].toLowerCase();
        switch (s) {
          case "https":
          case "data":
            return t.push({ type: "url", value: e }), { linkage: t, url: e };
          case "ipfs": {
            const o = sh(e);
            return (
              t.push({ type: "ipfs", value: e }),
              t.push({ type: "url", value: o }),
              { linkage: t, url: o }
            );
          }
          case "erc721":
          case "erc1155": {
            const o = s === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            t.push({ type: s, value: e });
            const a = await this.getAddress();
            if (a == null)
              return (
                t.push({ type: "!owner", value: "" }), { url: null, linkage: t }
              );
            const c = (i[2] || "").split("/");
            if (c.length !== 2)
              return (
                t.push({ type: `!${s}caip`, value: i[2] || "" }),
                { url: null, linkage: t }
              );
            const f = c[1],
              h = new dc(
                c[0],
                [
                  "function tokenURI(uint) view returns (string)",
                  "function ownerOf(uint) view returns (address)",
                  "function uri(uint) view returns (string)",
                  "function balanceOf(address, uint256) view returns (uint)",
                ],
                this.provider
              );
            if (s === "erc721") {
              const N = await h.ownerOf(f);
              if (a !== N)
                return (
                  t.push({ type: "!owner", value: N }),
                  { url: null, linkage: t }
                );
              t.push({ type: "owner", value: N });
            } else if (s === "erc1155") {
              const N = await h.balanceOf(a, f);
              if (!N)
                return (
                  t.push({ type: "!balance", value: "0" }),
                  { url: null, linkage: t }
                );
              t.push({ type: "balance", value: N.toString() });
            }
            let b = await h[o](f);
            if (b == null || b === "0x")
              return (
                t.push({ type: "!metadata-url", value: "" }),
                { url: null, linkage: t }
              );
            t.push({ type: "metadata-url-base", value: b }),
              s === "erc1155" &&
                ((b = b.replace("{id}", us(f, 32).substring(2))),
                t.push({ type: "metadata-url-expanded", value: b })),
              b.match(/^ipfs:/i) && (b = sh(b)),
              t.push({ type: "metadata-url", value: b });
            let S = {};
            const P = await new Si(b).send();
            P.assertOk();
            try {
              S = P.bodyJson;
            } catch {
              try {
                t.push({ type: "!metadata", value: P.bodyText });
              } catch {
                const q = P.body;
                return (
                  q && t.push({ type: "!metadata", value: xt(q) }),
                  { url: null, linkage: t }
                );
              }
              return { url: null, linkage: t };
            }
            if (!S)
              return (
                t.push({ type: "!metadata", value: "" }),
                { url: null, linkage: t }
              );
            t.push({ type: "metadata", value: JSON.stringify(S) });
            let M = S.image;
            if (typeof M != "string")
              return (
                t.push({ type: "!imageUrl", value: "" }),
                { url: null, linkage: t }
              );
            if (!M.match(/^(https:\/\/|data:)/i)) {
              if (M.match(zw) == null)
                return (
                  t.push({ type: "!imageUrl-ipfs", value: M }),
                  { url: null, linkage: t }
                );
              t.push({ type: "imageUrl-ipfs", value: M }), (M = sh(M));
            }
            return t.push({ type: "url", value: M }), { linkage: t, url: M };
          }
        }
      }
    } catch {}
    return { linkage: t, url: null };
  }
  static async getEnsAddress(t) {
    const e = await t.getNetwork(),
      r = e.getPlugin("org.ethers.plugins.network.Ens");
    return (
      ht(r, "network does not support ENS", "UNSUPPORTED_OPERATION", {
        operation: "getEnsAddress",
        info: { network: e },
      }),
      r.address
    );
  }
  static async fromName(t, e) {
    var i;
    let r = e;
    for (;;) {
      if (r === "" || r === "." || (e !== "eth" && r === "eth")) return null;
      const s = await pt((i = Mo), hl, Hw).call(i, t, r);
      if (s != null) {
        const o = new Mo(t, s, e);
        return r !== e && !(await o.supportsWildcard()) ? null : o;
      }
      r = r.split(".").slice(1).join(".");
    }
  }
};
(Ji = new WeakMap()),
  (Ws = new WeakMap()),
  (ji = new WeakSet()),
  (Ro = async function (t, e) {
    e = (e || []).slice();
    const r = C(this, Ws).interface;
    e.unshift(zh(this.name));
    let i = null;
    (await this.supportsWildcard()) &&
      ((i = r.getFunction(t)),
      ht(i, "missing fragment", "UNKNOWN_ERROR", { info: { funcName: t } }),
      (e = [_S(this.name, 255), r.encodeFunctionData(i, e)]),
      (t = "resolve(bytes,bytes)")),
      e.push({ enableCcipRead: !0 });
    try {
      const s = await C(this, Ws)[t](...e);
      return i ? r.decodeFunctionResult(i, s)[0] : s;
    } catch (s) {
      if (!or(s, "CALL_EXCEPTION")) throw s;
    }
    return null;
  }),
  (hl = new WeakSet()),
  (Hw = async function (t, e) {
    const r = await Mo.getEnsAddress(t);
    try {
      const s = await new dc(
        r,
        ["function resolver(bytes32) view returns (address)"],
        t
      ).resolver(zh(e), { enableCcipRead: !0 });
      return s === xc ? null : s;
    } catch (i) {
      throw i;
    }
    return null;
  }),
  ut(Mo, hl);
let al = Mo;
const hg = BigInt(0);
function Yt(n, t) {
  return function (e) {
    return e == null ? t : n(e);
  };
}
function Nc(n, t) {
  return (e) => {
    if (t && e == null) return null;
    if (!Array.isArray(e)) throw new Error("not an array");
    return e.map((r) => n(r));
  };
}
function eu(n, t) {
  return (e) => {
    const r = {};
    for (const i in n) {
      let s = i;
      if (t && i in t && !(s in e)) {
        for (const o of t[i])
          if (o in e) {
            s = o;
            break;
          }
      }
      try {
        const o = n[i](e[s]);
        o !== void 0 && (r[i] = o);
      } catch (o) {
        const a = o instanceof Error ? o.message : "not-an-error";
        ht(!1, `invalid value for value.${i} (${a})`, "BAD_DATA", { value: e });
      }
    }
    return r;
  };
}
function bI(n) {
  switch (n) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  Z(!1, `invalid boolean; ${JSON.stringify(n)}`, "value", n);
}
function Wa(n) {
  return Z(be(n, !0), "invalid data", "value", n), n;
}
function sr(n) {
  return Z(be(n, 32), "invalid hash", "value", n), n;
}
const AI = eu(
  {
    address: oe,
    blockHash: sr,
    blockNumber: Gt,
    data: Wa,
    index: Gt,
    removed: Yt(bI, !1),
    topics: Nc(sr),
    transactionHash: sr,
    transactionIndex: Gt,
  },
  { index: ["logIndex"] }
);
function EI(n) {
  return AI(n);
}
const xI = eu(
  {
    hash: Yt(sr),
    parentHash: sr,
    parentBeaconBlockRoot: Yt(sr, null),
    number: Gt,
    timestamp: Gt,
    nonce: Yt(Wa),
    difficulty: vt,
    gasLimit: vt,
    gasUsed: vt,
    stateRoot: Yt(sr, null),
    receiptsRoot: Yt(sr, null),
    blobGasUsed: Yt(vt, null),
    excessBlobGas: Yt(vt, null),
    miner: Yt(oe),
    prevRandao: Yt(sr, null),
    extraData: Wa,
    baseFeePerGas: Yt(vt),
  },
  { prevRandao: ["mixHash"] }
);
function kI(n) {
  const t = xI(n);
  return (
    (t.transactions = n.transactions.map((e) =>
      typeof e == "string" ? e : Gw(e)
    )),
    t
  );
}
const vI = eu(
  {
    transactionIndex: Gt,
    blockNumber: Gt,
    transactionHash: sr,
    address: oe,
    topics: Nc(sr),
    data: Wa,
    index: Gt,
    blockHash: sr,
  },
  { index: ["logIndex"] }
);
function SI(n) {
  return vI(n);
}
const II = eu(
  {
    to: Yt(oe, null),
    from: Yt(oe, null),
    contractAddress: Yt(oe, null),
    index: Gt,
    root: Yt(xt),
    gasUsed: vt,
    blobGasUsed: Yt(vt, null),
    logsBloom: Yt(Wa),
    blockHash: sr,
    hash: sr,
    logs: Nc(SI),
    blockNumber: Gt,
    cumulativeGasUsed: vt,
    effectiveGasPrice: Yt(vt),
    blobGasPrice: Yt(vt, null),
    status: Yt(Gt),
    type: Yt(Gt, 0),
  },
  {
    effectiveGasPrice: ["gasPrice"],
    hash: ["transactionHash"],
    index: ["transactionIndex"],
  }
);
function BI(n) {
  return II(n);
}
function Gw(n) {
  n.to &&
    vt(n.to) === hg &&
    (n.to = "0x0000000000000000000000000000000000000000");
  const t = eu(
    {
      hash: sr,
      index: Yt(Gt, void 0),
      type: (e) => (e === "0x" || e == null ? 0 : Gt(e)),
      accessList: Yt(go, null),
      blobVersionedHashes: Yt(Nc(sr, !0), null),
      authorizationList: Yt(
        Nc((e) => {
          let r;
          if (e.signature) r = e.signature;
          else {
            let i = e.yParity;
            i === "0x1b" ? (i = 0) : i === "0x1c" && (i = 1),
              (r = Object.assign({}, e, { yParity: i }));
          }
          return {
            address: oe(e.address),
            chainId: vt(e.chainId),
            nonce: vt(e.nonce),
            signature: Fr.from(r),
          };
        }, !1),
        null
      ),
      blockHash: Yt(sr, null),
      blockNumber: Yt(Gt, null),
      transactionIndex: Yt(Gt, null),
      from: oe,
      gasPrice: Yt(vt),
      maxPriorityFeePerGas: Yt(vt),
      maxFeePerGas: Yt(vt),
      maxFeePerBlobGas: Yt(vt, null),
      gasLimit: vt,
      to: Yt(oe, null),
      value: vt,
      nonce: Gt,
      data: Wa,
      creates: Yt(oe, null),
      chainId: Yt(vt, null),
    },
    { data: ["input"], gasLimit: ["gas"], index: ["transactionIndex"] }
  )(n);
  if (
    (t.to == null && t.creates == null && (t.creates = gv(t)),
    (n.type === 1 || n.type === 2) &&
      n.accessList == null &&
      (t.accessList = []),
    n.signature
      ? (t.signature = Fr.from(n.signature))
      : (t.signature = Fr.from(n)),
    t.chainId == null)
  ) {
    const e = t.signature.legacyChainId;
    e != null && (t.chainId = e);
  }
  return t.blockHash && vt(t.blockHash) === hg && (t.blockHash = null), t;
}
const RI = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class ru {
  constructor(t) {
    tt(this, "name");
    Ct(this, { name: t });
  }
  clone() {
    return new ru(this.name);
  }
}
class Vl extends ru {
  constructor(e, r) {
    e == null && (e = 0);
    super(`org.ethers.network.plugins.GasCost#${e || 0}`);
    tt(this, "effectiveBlock");
    tt(this, "txBase");
    tt(this, "txCreate");
    tt(this, "txDataZero");
    tt(this, "txDataNonzero");
    tt(this, "txAccessListStorageKey");
    tt(this, "txAccessListAddress");
    const i = { effectiveBlock: e };
    function s(o, a) {
      let c = (r || {})[o];
      c == null && (c = a),
        Z(typeof c == "number", `invalud value for ${o}`, "costs", r),
        (i[o] = c);
    }
    s("txBase", 21e3),
      s("txCreate", 32e3),
      s("txDataZero", 4),
      s("txDataNonzero", 16),
      s("txAccessListStorageKey", 1900),
      s("txAccessListAddress", 2400),
      Ct(this, i);
  }
  clone() {
    return new Vl(this.effectiveBlock, this);
  }
}
class Wl extends ru {
  constructor(e, r) {
    super("org.ethers.plugins.network.Ens");
    tt(this, "address");
    tt(this, "targetNetwork");
    Ct(this, { address: e || RI, targetNetwork: r ?? 1 });
  }
  clone() {
    return new Wl(this.address, this.targetNetwork);
  }
}
var zc, Hc;
class PI extends ru {
  constructor(e, r) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    ut(this, zc);
    ut(this, Hc);
    Q(this, zc, e), Q(this, Hc, r);
  }
  get url() {
    return C(this, zc);
  }
  get processFunc() {
    return C(this, Hc);
  }
  clone() {
    return this;
  }
}
(zc = new WeakMap()), (Hc = new WeakMap());
const oh = new Map();
var wa, ba, Zi;
const Lo = class Lo {
  constructor(t, e) {
    ut(this, wa);
    ut(this, ba);
    ut(this, Zi);
    Q(this, wa, t), Q(this, ba, vt(e)), Q(this, Zi, new Map());
  }
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  get name() {
    return C(this, wa);
  }
  set name(t) {
    Q(this, wa, t);
  }
  get chainId() {
    return C(this, ba);
  }
  set chainId(t) {
    Q(this, ba, vt(t, "chainId"));
  }
  matches(t) {
    if (t == null) return !1;
    if (typeof t == "string") {
      try {
        return this.chainId === vt(t);
      } catch {}
      return this.name === t;
    }
    if (typeof t == "number" || typeof t == "bigint") {
      try {
        return this.chainId === vt(t);
      } catch {}
      return !1;
    }
    if (typeof t == "object") {
      if (t.chainId != null) {
        try {
          return this.chainId === vt(t.chainId);
        } catch {}
        return !1;
      }
      return t.name != null ? this.name === t.name : !1;
    }
    return !1;
  }
  get plugins() {
    return Array.from(C(this, Zi).values());
  }
  attachPlugin(t) {
    if (C(this, Zi).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return C(this, Zi).set(t.name, t.clone()), this;
  }
  getPlugin(t) {
    return C(this, Zi).get(t) || null;
  }
  getPlugins(t) {
    return this.plugins.filter((e) => e.name.split("#")[0] === t);
  }
  clone() {
    const t = new Lo(this.name, this.chainId);
    return (
      this.plugins.forEach((e) => {
        t.attachPlugin(e.clone());
      }),
      t
    );
  }
  computeIntrinsicGas(t) {
    const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new Vl();
    let r = e.txBase;
    if ((t.to == null && (r += e.txCreate), t.data))
      for (let i = 2; i < t.data.length; i += 2)
        t.data.substring(i, i + 2) === "00"
          ? (r += e.txDataZero)
          : (r += e.txDataNonzero);
    if (t.accessList) {
      const i = go(t.accessList);
      for (const s in i)
        r +=
          e.txAccessListAddress +
          e.txAccessListStorageKey * i[s].storageKeys.length;
    }
    return r;
  }
  static from(t) {
    if ((CI(), t == null)) return Lo.from("mainnet");
    if (
      (typeof t == "number" && (t = BigInt(t)),
      typeof t == "string" || typeof t == "bigint")
    ) {
      const e = oh.get(t);
      if (e) return e();
      if (typeof t == "bigint") return new Lo("unknown", t);
      Z(!1, "unknown network", "network", t);
    }
    if (typeof t.clone == "function") return t.clone();
    if (typeof t == "object") {
      Z(
        typeof t.name == "string" && typeof t.chainId == "number",
        "invalid network object name or chainId",
        "network",
        t
      );
      const e = new Lo(t.name, t.chainId);
      return (
        (t.ensAddress || t.ensNetwork != null) &&
          e.attachPlugin(new Wl(t.ensAddress, t.ensNetwork)),
        e
      );
    }
    Z(!1, "invalid network", "network", t);
  }
  static register(t, e) {
    typeof t == "number" && (t = BigInt(t));
    const r = oh.get(t);
    r &&
      Z(
        !1,
        `conflicting network for ${JSON.stringify(r.name)}`,
        "nameOrChainId",
        t
      ),
      oh.set(t, e);
  }
};
(wa = new WeakMap()), (ba = new WeakMap()), (Zi = new WeakMap());
let Wn = Lo;
function dg(n, t) {
  const e = String(n);
  if (!e.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${n}`);
  const r = e.split(".");
  if ((r.length === 1 && r.push(""), r.length !== 2))
    throw new Error(`invalid gwei value: ${n}`);
  for (; r[1].length < t; ) r[1] += "0";
  if (r[1].length > 9) {
    let i = BigInt(r[1].substring(0, 9));
    r[1].substring(9).match(/^0+$/) || i++, (r[1] = i.toString());
  }
  return BigInt(r[0] + r[1]);
}
function pg(n) {
  return new PI(n, async (t, e, r) => {
    r.setHeader("User-Agent", "ethers");
    let i;
    try {
      const [s, o] = await Promise.all([r.send(), t()]);
      i = s;
      const a = i.bodyJson.standard;
      return {
        gasPrice: o.gasPrice,
        maxFeePerGas: dg(a.maxFee, 9),
        maxPriorityFeePerGas: dg(a.maxPriorityFee, 9),
      };
    } catch (s) {
      ht(
        !1,
        `error encountered with polygon gas station (${JSON.stringify(r.url)})`,
        "SERVER_ERROR",
        { request: r, response: i, error: s }
      );
    }
  });
}
let gg = !1;
function CI() {
  if (gg) return;
  gg = !0;
  function n(t, e, r) {
    const i = function () {
      const s = new Wn(t, e);
      return (
        r.ensNetwork != null && s.attachPlugin(new Wl(null, r.ensNetwork)),
        s.attachPlugin(new Vl()),
        (r.plugins || []).forEach((o) => {
          s.attachPlugin(o);
        }),
        s
      );
    };
    Wn.register(t, i),
      Wn.register(e, i),
      r.altNames &&
        r.altNames.forEach((s) => {
          Wn.register(s, i);
        });
  }
  n("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }),
    n("ropsten", 3, { ensNetwork: 3 }),
    n("rinkeby", 4, { ensNetwork: 4 }),
    n("goerli", 5, { ensNetwork: 5 }),
    n("kovan", 42, { ensNetwork: 42 }),
    n("sepolia", 11155111, { ensNetwork: 11155111 }),
    n("holesky", 17e3, { ensNetwork: 17e3 }),
    n("classic", 61, {}),
    n("classicKotti", 6, {}),
    n("arbitrum", 42161, { ensNetwork: 1 }),
    n("arbitrum-goerli", 421613, {}),
    n("arbitrum-sepolia", 421614, {}),
    n("base", 8453, { ensNetwork: 1 }),
    n("base-goerli", 84531, {}),
    n("base-sepolia", 84532, {}),
    n("bnb", 56, { ensNetwork: 1 }),
    n("bnbt", 97, {}),
    n("linea", 59144, { ensNetwork: 1 }),
    n("linea-goerli", 59140, {}),
    n("linea-sepolia", 59141, {}),
    n("matic", 137, {
      ensNetwork: 1,
      plugins: [pg("https://gasstation.polygon.technology/v2")],
    }),
    n("matic-amoy", 80002, {}),
    n("matic-mumbai", 80001, {
      altNames: ["maticMumbai", "maticmum"],
      plugins: [pg("https://gasstation-testnet.polygon.technology/v2")],
    }),
    n("optimism", 10, { ensNetwork: 1, plugins: [] }),
    n("optimism-goerli", 420, {}),
    n("optimism-sepolia", 11155420, {}),
    n("xdai", 100, { ensNetwork: 1 });
}
function qh(n) {
  return JSON.parse(JSON.stringify(n));
}
var fi, en, Yi, On, Aa, Nu;
class NI {
  constructor(t) {
    ut(this, Aa);
    ut(this, fi);
    ut(this, en);
    ut(this, Yi);
    ut(this, On);
    Q(this, fi, t), Q(this, en, null), Q(this, Yi, 4e3), Q(this, On, -2);
  }
  get pollingInterval() {
    return C(this, Yi);
  }
  set pollingInterval(t) {
    Q(this, Yi, t);
  }
  start() {
    C(this, en) ||
      (Q(
        this,
        en,
        C(this, fi)._setTimeout(pt(this, Aa, Nu).bind(this), C(this, Yi))
      ),
      pt(this, Aa, Nu).call(this));
  }
  stop() {
    C(this, en) && (C(this, fi)._clearTimeout(C(this, en)), Q(this, en, null));
  }
  pause(t) {
    this.stop(), t && Q(this, On, -2);
  }
  resume() {
    this.start();
  }
}
(fi = new WeakMap()),
  (en = new WeakMap()),
  (Yi = new WeakMap()),
  (On = new WeakMap()),
  (Aa = new WeakSet()),
  (Nu = async function () {
    try {
      const t = await C(this, fi).getBlockNumber();
      if (C(this, On) === -2) {
        Q(this, On, t);
        return;
      }
      if (t !== C(this, On)) {
        for (let e = C(this, On) + 1; e <= t; e++) {
          if (C(this, en) == null) return;
          await C(this, fi).emit("block", e);
        }
        Q(this, On, t);
      }
    } catch {}
    C(this, en) != null &&
      Q(
        this,
        en,
        C(this, fi)._setTimeout(pt(this, Aa, Nu).bind(this), C(this, Yi))
      );
  });
var qs, $s, Xi;
class Zd {
  constructor(t) {
    ut(this, qs);
    ut(this, $s);
    ut(this, Xi);
    Q(this, qs, t),
      Q(this, Xi, !1),
      Q(this, $s, (e) => {
        this._poll(e, C(this, qs));
      });
  }
  async _poll(t, e) {
    throw new Error("sub-classes must override this");
  }
  start() {
    C(this, Xi) ||
      (Q(this, Xi, !0),
      C(this, $s).call(this, -2),
      C(this, qs).on("block", C(this, $s)));
  }
  stop() {
    C(this, Xi) && (Q(this, Xi, !1), C(this, qs).off("block", C(this, $s)));
  }
  pause(t) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
(qs = new WeakMap()), ($s = new WeakMap()), (Xi = new WeakMap());
var Ea, hi;
class TI extends Zd {
  constructor(e, r) {
    super(e);
    ut(this, Ea);
    ut(this, hi);
    Q(this, Ea, r), Q(this, hi, -2);
  }
  pause(e) {
    e && Q(this, hi, -2), super.pause(e);
  }
  async _poll(e, r) {
    const i = await r.getBlock(C(this, Ea));
    i != null &&
      (C(this, hi) === -2
        ? Q(this, hi, i.number)
        : i.number > C(this, hi) &&
          (r.emit(C(this, Ea), i.number), Q(this, hi, i.number)));
  }
}
(Ea = new WeakMap()), (hi = new WeakMap());
var dl;
class _I extends Zd {
  constructor(e, r) {
    super(e);
    ut(this, dl);
    Q(this, dl, qh(r));
  }
  async _poll(e, r) {
    throw new Error("@TODO");
  }
}
dl = new WeakMap();
var xa;
class OI extends Zd {
  constructor(e, r) {
    super(e);
    ut(this, xa);
    Q(this, xa, r);
  }
  async _poll(e, r) {
    const i = await r.getTransactionReceipt(C(this, xa));
    i && r.emit(C(this, xa), i);
  }
}
xa = new WeakMap();
var di, ka, va, ts, rn, pl, Kw;
class Yd {
  constructor(t, e) {
    ut(this, pl);
    ut(this, di);
    ut(this, ka);
    ut(this, va);
    ut(this, ts);
    ut(this, rn);
    Q(this, di, t),
      Q(this, ka, qh(e)),
      Q(this, va, pt(this, pl, Kw).bind(this)),
      Q(this, ts, !1),
      Q(this, rn, -2);
  }
  start() {
    C(this, ts) ||
      (Q(this, ts, !0),
      C(this, rn) === -2 &&
        C(this, di)
          .getBlockNumber()
          .then((t) => {
            Q(this, rn, t);
          }),
      C(this, di).on("block", C(this, va)));
  }
  stop() {
    C(this, ts) && (Q(this, ts, !1), C(this, di).off("block", C(this, va)));
  }
  pause(t) {
    this.stop(), t && Q(this, rn, -2);
  }
  resume() {
    this.start();
  }
}
(di = new WeakMap()),
  (ka = new WeakMap()),
  (va = new WeakMap()),
  (ts = new WeakMap()),
  (rn = new WeakMap()),
  (pl = new WeakSet()),
  (Kw = async function (t) {
    if (C(this, rn) === -2) return;
    const e = qh(C(this, ka));
    (e.fromBlock = C(this, rn) + 1), (e.toBlock = t);
    const r = await C(this, di).getLogs(e);
    if (r.length === 0) {
      C(this, rn) < t - 60 && Q(this, rn, t - 60);
      return;
    }
    for (const i of r)
      C(this, di).emit(C(this, ka), i), Q(this, rn, i.blockNumber);
  });
const MI = BigInt(2),
  LI = 10;
function Eu(n) {
  return n && typeof n.then == "function";
}
function Tu(n, t) {
  return (
    n +
    ":" +
    JSON.stringify(t, (e, r) => {
      if (r == null) return "null";
      if (typeof r == "bigint") return `bigint:${r.toString()}`;
      if (typeof r == "string") return r.toLowerCase();
      if (typeof r == "object" && !Array.isArray(r)) {
        const i = Object.keys(r);
        return i.sort(), i.reduce((s, o) => ((s[o] = r[o]), s), {});
      }
      return r;
    })
  );
}
class Vw {
  constructor(t) {
    tt(this, "name");
    Ct(this, { name: t });
  }
  start() {}
  stop() {}
  pause(t) {}
  resume() {}
}
function UI(n) {
  return JSON.parse(JSON.stringify(n));
}
function $h(n) {
  return (n = Array.from(new Set(n).values())), n.sort(), n;
}
async function ah(n, t) {
  if (n == null) throw new Error("invalid event");
  if ((Array.isArray(n) && (n = { topics: n }), typeof n == "string"))
    switch (n) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return { type: n, tag: n };
    }
  if (be(n, 32)) {
    const e = n.toLowerCase();
    return { type: "transaction", tag: Tu("tx", { hash: e }), hash: e };
  }
  if (n.orphan) {
    const e = n;
    return { type: "orphan", tag: Tu("orphan", e), filter: UI(e) };
  }
  if (n.address || n.topics) {
    const e = n,
      r = {
        topics: (e.topics || []).map((i) =>
          i == null
            ? null
            : Array.isArray(i)
            ? $h(i.map((s) => s.toLowerCase()))
            : i.toLowerCase()
        ),
      };
    if (e.address) {
      const i = [],
        s = [],
        o = (a) => {
          be(a)
            ? i.push(a)
            : s.push(
                (async () => {
                  i.push(await Ir(a, t));
                })()
              );
        };
      Array.isArray(e.address) ? e.address.forEach(o) : o(e.address),
        s.length && (await Promise.all(s)),
        (r.address = $h(i.map((a) => a.toLowerCase())));
    }
    return { filter: r, tag: Tu("event", r), type: "event" };
  }
  Z(!1, "unknown ProviderEvent", "event", n);
}
function ch() {
  return new Date().getTime();
}
const FI = { cacheTimeout: 250, pollingInterval: 4e3 };
var mr,
  es,
  wr,
  Sa,
  qr,
  Qs,
  rs,
  pi,
  Gc,
  nn,
  Ia,
  Ba,
  Jt,
  Hr,
  Qh,
  Jh,
  cc,
  jh,
  uc,
  _u;
class DI {
  constructor(t, e) {
    ut(this, Jt);
    ut(this, mr);
    ut(this, es);
    ut(this, wr);
    ut(this, Sa);
    ut(this, qr);
    ut(this, Qs);
    ut(this, rs);
    ut(this, pi);
    ut(this, Gc);
    ut(this, nn);
    ut(this, Ia);
    ut(this, Ba);
    if ((Q(this, Ba, Object.assign({}, FI, e || {})), t === "any"))
      Q(this, Qs, !0), Q(this, qr, null);
    else if (t) {
      const r = Wn.from(t);
      Q(this, Qs, !1),
        Q(this, qr, Promise.resolve(r)),
        setTimeout(() => {
          this.emit("network", r, null);
        }, 0);
    } else Q(this, Qs, !1), Q(this, qr, null);
    Q(this, pi, -1),
      Q(this, rs, new Map()),
      Q(this, mr, new Map()),
      Q(this, es, new Map()),
      Q(this, wr, null),
      Q(this, Sa, !1),
      Q(this, Gc, 1),
      Q(this, nn, new Map()),
      Q(this, Ia, !1);
  }
  get pollingInterval() {
    return C(this, Ba).pollingInterval;
  }
  get provider() {
    return this;
  }
  get plugins() {
    return Array.from(C(this, es).values());
  }
  attachPlugin(t) {
    if (C(this, es).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return C(this, es).set(t.name, t.connect(this)), this;
  }
  getPlugin(t) {
    return C(this, es).get(t) || null;
  }
  get disableCcipRead() {
    return C(this, Ia);
  }
  set disableCcipRead(t) {
    Q(this, Ia, !!t);
  }
  async ccipReadFetch(t, e, r) {
    if (this.disableCcipRead || r.length === 0 || t.to == null) return null;
    const i = t.to.toLowerCase(),
      s = e.toLowerCase(),
      o = [];
    for (let a = 0; a < r.length; a++) {
      const c = r[a],
        f = c.replace("{sender}", i).replace("{data}", s),
        h = new Si(f);
      c.indexOf("{data}") === -1 && (h.body = { data: s, sender: i }),
        this.emit("debug", {
          action: "sendCcipReadFetchRequest",
          request: h,
          index: a,
          urls: r,
        });
      let b = "unknown error",
        S;
      try {
        S = await h.send();
      } catch (P) {
        o.push(P.message),
          this.emit("debug", {
            action: "receiveCcipReadFetchError",
            request: h,
            result: { error: P },
          });
        continue;
      }
      try {
        const P = S.bodyJson;
        if (P.data)
          return (
            this.emit("debug", {
              action: "receiveCcipReadFetchResult",
              request: h,
              result: P,
            }),
            P.data
          );
        P.message && (b = P.message),
          this.emit("debug", {
            action: "receiveCcipReadFetchError",
            request: h,
            result: P,
          });
      } catch {}
      ht(
        S.statusCode < 400 || S.statusCode >= 500,
        `response not found during CCIP fetch: ${b}`,
        "OFFCHAIN_FAULT",
        {
          reason: "404_MISSING_RESOURCE",
          transaction: t,
          info: { url: c, errorMessage: b },
        }
      ),
        o.push(b);
    }
    ht(
      !1,
      `error encountered during CCIP fetch: ${o
        .map((a) => JSON.stringify(a))
        .join(", ")}`,
      "OFFCHAIN_FAULT",
      {
        reason: "500_SERVER_ERROR",
        transaction: t,
        info: { urls: r, errorMessages: o },
      }
    );
  }
  _wrapBlock(t, e) {
    return new iI(kI(t), this);
  }
  _wrapLog(t, e) {
    return new tu(EI(t), this);
  }
  _wrapTransactionReceipt(t, e) {
    return new Pw(BI(t), this);
  }
  _wrapTransactionResponse(t, e) {
    return new Cc(Gw(t), this);
  }
  _detectNetwork() {
    ht(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork",
    });
  }
  async _perform(t) {
    ht(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
      operation: t.method,
      info: t,
    });
  }
  async getBlockNumber() {
    const t = Gt(
      await pt(this, Jt, Hr).call(this, { method: "getBlockNumber" }),
      "%response"
    );
    return C(this, pi) >= 0 && Q(this, pi, t), t;
  }
  _getAddress(t) {
    return Ir(t, this);
  }
  _getBlockTag(t) {
    if (t == null) return "latest";
    switch (t) {
      case "earliest":
        return "0x0";
      case "finalized":
      case "latest":
      case "pending":
      case "safe":
        return t;
    }
    if (be(t)) return be(t, 32) ? t : wn(t);
    if ((typeof t == "bigint" && (t = Gt(t, "blockTag")), typeof t == "number"))
      return t >= 0
        ? wn(t)
        : C(this, pi) >= 0
        ? wn(C(this, pi) + t)
        : this.getBlockNumber().then((e) => wn(e + t));
    Z(!1, "invalid blockTag", "blockTag", t);
  }
  _getFilter(t) {
    const e = (t.topics || []).map((c) =>
        c == null
          ? null
          : Array.isArray(c)
          ? $h(c.map((f) => f.toLowerCase()))
          : c.toLowerCase()
      ),
      r = "blockHash" in t ? t.blockHash : void 0,
      i = (c, f, h) => {
        let b;
        switch (c.length) {
          case 0:
            break;
          case 1:
            b = c[0];
            break;
          default:
            c.sort(), (b = c);
        }
        if (r && (f != null || h != null)) throw new Error("invalid filter");
        const S = {};
        return (
          b && (S.address = b),
          e.length && (S.topics = e),
          f && (S.fromBlock = f),
          h && (S.toBlock = h),
          r && (S.blockHash = r),
          S
        );
      };
    let s = [];
    if (t.address)
      if (Array.isArray(t.address))
        for (const c of t.address) s.push(this._getAddress(c));
      else s.push(this._getAddress(t.address));
    let o;
    "fromBlock" in t && (o = this._getBlockTag(t.fromBlock));
    let a;
    return (
      "toBlock" in t && (a = this._getBlockTag(t.toBlock)),
      s.filter((c) => typeof c != "string").length ||
      (o != null && typeof o != "string") ||
      (a != null && typeof a != "string")
        ? Promise.all([Promise.all(s), o, a]).then((c) => i(c[0], c[1], c[2]))
        : i(s, o, a)
    );
  }
  _getTransactionRequest(t) {
    const e = sl(t),
      r = [];
    if (
      (["to", "from"].forEach((i) => {
        if (e[i] == null) return;
        const s = Ir(e[i], this);
        Eu(s)
          ? r.push(
              (async function () {
                e[i] = await s;
              })()
            )
          : (e[i] = s);
      }),
      e.blockTag != null)
    ) {
      const i = this._getBlockTag(e.blockTag);
      Eu(i)
        ? r.push(
            (async function () {
              e.blockTag = await i;
            })()
          )
        : (e.blockTag = i);
    }
    return r.length
      ? (async function () {
          return await Promise.all(r), e;
        })()
      : e;
  }
  async getNetwork() {
    if (C(this, qr) == null) {
      const i = (async () => {
        try {
          const s = await this._detectNetwork();
          return this.emit("network", s, null), s;
        } catch (s) {
          throw (C(this, qr) === i && Q(this, qr, null), s);
        }
      })();
      return Q(this, qr, i), (await i).clone();
    }
    const t = C(this, qr),
      [e, r] = await Promise.all([t, this._detectNetwork()]);
    return (
      e.chainId !== r.chainId &&
        (C(this, Qs)
          ? (this.emit("network", r, e),
            C(this, qr) === t && Q(this, qr, Promise.resolve(r)))
          : ht(
              !1,
              `network changed: ${e.chainId} => ${r.chainId} `,
              "NETWORK_ERROR",
              { event: "changed" }
            )),
      e.clone()
    );
  }
  async getFeeData() {
    const t = await this.getNetwork(),
      e = async () => {
        const {
          _block: i,
          gasPrice: s,
          priorityFee: o,
        } = await kr({
          _block: pt(this, Jt, jh).call(this, "latest", !1),
          gasPrice: (async () => {
            try {
              const h = await pt(this, Jt, Hr).call(this, {
                method: "getGasPrice",
              });
              return vt(h, "%response");
            } catch {}
            return null;
          })(),
          priorityFee: (async () => {
            try {
              const h = await pt(this, Jt, Hr).call(this, {
                method: "getPriorityFee",
              });
              return vt(h, "%response");
            } catch {}
            return null;
          })(),
        });
        let a = null,
          c = null;
        const f = this._wrapBlock(i, t);
        return (
          f &&
            f.baseFeePerGas &&
            ((c = o ?? BigInt("1000000000")), (a = f.baseFeePerGas * MI + c)),
          new cg(s, a, c)
        );
      },
      r = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (r) {
      const i = new Si(r.url),
        s = await r.processFunc(e, this, i);
      return new cg(s.gasPrice, s.maxFeePerGas, s.maxPriorityFeePerGas);
    }
    return await e();
  }
  async estimateGas(t) {
    let e = this._getTransactionRequest(t);
    return (
      Eu(e) && (e = await e),
      vt(
        await pt(this, Jt, Hr).call(this, {
          method: "estimateGas",
          transaction: e,
        }),
        "%response"
      )
    );
  }
  async call(t) {
    const { tx: e, blockTag: r } = await kr({
      tx: this._getTransactionRequest(t),
      blockTag: this._getBlockTag(t.blockTag),
    });
    return await pt(this, Jt, Jh).call(
      this,
      pt(this, Jt, Qh).call(this, e, r, t.enableCcipRead ? 0 : -1)
    );
  }
  async getBalance(t, e) {
    return vt(
      await pt(this, Jt, cc).call(this, { method: "getBalance" }, t, e),
      "%response"
    );
  }
  async getTransactionCount(t, e) {
    return Gt(
      await pt(this, Jt, cc).call(
        this,
        { method: "getTransactionCount" },
        t,
        e
      ),
      "%response"
    );
  }
  async getCode(t, e) {
    return xt(await pt(this, Jt, cc).call(this, { method: "getCode" }, t, e));
  }
  async getStorage(t, e, r) {
    const i = vt(e, "position");
    return xt(
      await pt(this, Jt, cc).call(
        this,
        { method: "getStorage", position: i },
        t,
        r
      )
    );
  }
  async broadcastTransaction(t) {
    const {
        blockNumber: e,
        hash: r,
        network: i,
      } = await kr({
        blockNumber: this.getBlockNumber(),
        hash: this._perform({
          method: "broadcastTransaction",
          signedTransaction: t,
        }),
        network: this.getNetwork(),
      }),
      s = Yu.from(t);
    if (s.hash !== r) throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(s, i).replaceableTransaction(e);
  }
  async getBlock(t, e) {
    const { network: r, params: i } = await kr({
      network: this.getNetwork(),
      params: pt(this, Jt, jh).call(this, t, !!e),
    });
    return i == null ? null : this._wrapBlock(i, r);
  }
  async getTransaction(t) {
    const { network: e, params: r } = await kr({
      network: this.getNetwork(),
      params: pt(this, Jt, Hr).call(this, {
        method: "getTransaction",
        hash: t,
      }),
    });
    return r == null ? null : this._wrapTransactionResponse(r, e);
  }
  async getTransactionReceipt(t) {
    const { network: e, params: r } = await kr({
      network: this.getNetwork(),
      params: pt(this, Jt, Hr).call(this, {
        method: "getTransactionReceipt",
        hash: t,
      }),
    });
    if (r == null) return null;
    if (r.gasPrice == null && r.effectiveGasPrice == null) {
      const i = await pt(this, Jt, Hr).call(this, {
        method: "getTransaction",
        hash: t,
      });
      if (i == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      r.effectiveGasPrice = i.gasPrice;
    }
    return this._wrapTransactionReceipt(r, e);
  }
  async getTransactionResult(t) {
    const { result: e } = await kr({
      network: this.getNetwork(),
      result: pt(this, Jt, Hr).call(this, {
        method: "getTransactionResult",
        hash: t,
      }),
    });
    return e == null ? null : xt(e);
  }
  async getLogs(t) {
    let e = this._getFilter(t);
    Eu(e) && (e = await e);
    const { network: r, params: i } = await kr({
      network: this.getNetwork(),
      params: pt(this, Jt, Hr).call(this, { method: "getLogs", filter: e }),
    });
    return i.map((s) => this._wrapLog(s, r));
  }
  _getProvider(t) {
    ht(
      !1,
      "provider cannot connect to target network",
      "UNSUPPORTED_OPERATION",
      { operation: "_getProvider()" }
    );
  }
  async getResolver(t) {
    return await al.fromName(this, t);
  }
  async getAvatar(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAvatar() : null;
  }
  async resolveName(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAddress() : null;
  }
  async lookupAddress(t) {
    t = oe(t);
    const e = zh(t.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const r = await al.getEnsAddress(this),
        s = await new dc(
          r,
          ["function resolver(bytes32) view returns (address)"],
          this
        ).resolver(e);
      if (s == null || s === xc) return null;
      const a = await new dc(
        s,
        ["function name(bytes32) view returns (string)"],
        this
      ).name(e);
      return (await this.resolveName(a)) !== t ? null : a;
    } catch (r) {
      if ((or(r, "BAD_DATA") && r.value === "0x") || or(r, "CALL_EXCEPTION"))
        return null;
      throw r;
    }
    return null;
  }
  async waitForTransaction(t, e, r) {
    const i = e ?? 1;
    return i === 0
      ? this.getTransactionReceipt(t)
      : new Promise(async (s, o) => {
          let a = null;
          const c = async (f) => {
            try {
              const h = await this.getTransactionReceipt(t);
              if (h != null && f - h.blockNumber + 1 >= i) {
                s(h), a && (clearTimeout(a), (a = null));
                return;
              }
            } catch (h) {
              console.log("EEE", h);
            }
            this.once("block", c);
          };
          r != null &&
            (a = setTimeout(() => {
              a != null &&
                ((a = null),
                this.off("block", c),
                o(Be("timeout", "TIMEOUT", { reason: "timeout" })));
            }, r)),
            c(await this.getBlockNumber());
        });
  }
  async waitForBlock(t) {
    ht(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock",
    });
  }
  _clearTimeout(t) {
    const e = C(this, nn).get(t);
    e && (e.timer && clearTimeout(e.timer), C(this, nn).delete(t));
  }
  _setTimeout(t, e) {
    e == null && (e = 0);
    const r = Xa(this, Gc)._++,
      i = () => {
        C(this, nn).delete(r), t();
      };
    if (this.paused) C(this, nn).set(r, { timer: null, func: i, time: e });
    else {
      const s = setTimeout(i, e);
      C(this, nn).set(r, { timer: s, func: i, time: ch() });
    }
    return r;
  }
  _forEachSubscriber(t) {
    for (const e of C(this, mr).values()) t(e.subscriber);
  }
  _getSubscriber(t) {
    switch (t.type) {
      case "debug":
      case "error":
      case "network":
        return new Vw(t.type);
      case "block": {
        const e = new NI(this);
        return (e.pollingInterval = this.pollingInterval), e;
      }
      case "safe":
      case "finalized":
        return new TI(this, t.type);
      case "event":
        return new Yd(this, t.filter);
      case "transaction":
        return new OI(this, t.hash);
      case "orphan":
        return new _I(this, t.filter);
    }
    throw new Error(`unsupported event: ${t.type}`);
  }
  _recoverSubscriber(t, e) {
    for (const r of C(this, mr).values())
      if (r.subscriber === t) {
        r.started && r.subscriber.stop(),
          (r.subscriber = e),
          r.started && e.start(),
          C(this, wr) != null && e.pause(C(this, wr));
        break;
      }
  }
  async on(t, e) {
    const r = await pt(this, Jt, _u).call(this, t);
    return (
      r.listeners.push({ listener: e, once: !1 }),
      r.started ||
        (r.subscriber.start(),
        (r.started = !0),
        C(this, wr) != null && r.subscriber.pause(C(this, wr))),
      this
    );
  }
  async once(t, e) {
    const r = await pt(this, Jt, _u).call(this, t);
    return (
      r.listeners.push({ listener: e, once: !0 }),
      r.started ||
        (r.subscriber.start(),
        (r.started = !0),
        C(this, wr) != null && r.subscriber.pause(C(this, wr))),
      this
    );
  }
  async emit(t, ...e) {
    const r = await pt(this, Jt, uc).call(this, t, e);
    if (!r || r.listeners.length === 0) return !1;
    const i = r.listeners.length;
    return (
      (r.listeners = r.listeners.filter(({ listener: s, once: o }) => {
        const a = new sm(this, o ? null : s, t);
        try {
          s.call(this, ...e, a);
        } catch {}
        return !o;
      })),
      r.listeners.length === 0 &&
        (r.started && r.subscriber.stop(), C(this, mr).delete(r.tag)),
      i > 0
    );
  }
  async listenerCount(t) {
    if (t) {
      const r = await pt(this, Jt, uc).call(this, t);
      return r ? r.listeners.length : 0;
    }
    let e = 0;
    for (const { listeners: r } of C(this, mr).values()) e += r.length;
    return e;
  }
  async listeners(t) {
    if (t) {
      const r = await pt(this, Jt, uc).call(this, t);
      return r ? r.listeners.map(({ listener: i }) => i) : [];
    }
    let e = [];
    for (const { listeners: r } of C(this, mr).values())
      e = e.concat(r.map(({ listener: i }) => i));
    return e;
  }
  async off(t, e) {
    const r = await pt(this, Jt, uc).call(this, t);
    if (!r) return this;
    if (e) {
      const i = r.listeners.map(({ listener: s }) => s).indexOf(e);
      i >= 0 && r.listeners.splice(i, 1);
    }
    return (
      (!e || r.listeners.length === 0) &&
        (r.started && r.subscriber.stop(), C(this, mr).delete(r.tag)),
      this
    );
  }
  async removeAllListeners(t) {
    if (t) {
      const {
        tag: e,
        started: r,
        subscriber: i,
      } = await pt(this, Jt, _u).call(this, t);
      r && i.stop(), C(this, mr).delete(e);
    } else
      for (const [e, { started: r, subscriber: i }] of C(this, mr))
        r && i.stop(), C(this, mr).delete(e);
    return this;
  }
  async addListener(t, e) {
    return await this.on(t, e);
  }
  async removeListener(t, e) {
    return this.off(t, e);
  }
  get destroyed() {
    return C(this, Sa);
  }
  destroy() {
    this.removeAllListeners();
    for (const t of C(this, nn).keys()) this._clearTimeout(t);
    Q(this, Sa, !0);
  }
  get paused() {
    return C(this, wr) != null;
  }
  set paused(t) {
    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  pause(t) {
    if ((Q(this, pi, -1), C(this, wr) != null)) {
      if (C(this, wr) == !!t) return;
      ht(
        !1,
        "cannot change pause type; resume first",
        "UNSUPPORTED_OPERATION",
        { operation: "pause" }
      );
    }
    this._forEachSubscriber((e) => e.pause(t)), Q(this, wr, !!t);
    for (const e of C(this, nn).values())
      e.timer && clearTimeout(e.timer), (e.time = ch() - e.time);
  }
  resume() {
    if (C(this, wr) != null) {
      this._forEachSubscriber((t) => t.resume()), Q(this, wr, null);
      for (const t of C(this, nn).values()) {
        let e = t.time;
        e < 0 && (e = 0), (t.time = ch()), setTimeout(t.func, e);
      }
    }
  }
}
(mr = new WeakMap()),
  (es = new WeakMap()),
  (wr = new WeakMap()),
  (Sa = new WeakMap()),
  (qr = new WeakMap()),
  (Qs = new WeakMap()),
  (rs = new WeakMap()),
  (pi = new WeakMap()),
  (Gc = new WeakMap()),
  (nn = new WeakMap()),
  (Ia = new WeakMap()),
  (Ba = new WeakMap()),
  (Jt = new WeakSet()),
  (Hr = async function (t) {
    const e = C(this, Ba).cacheTimeout;
    if (e < 0) return await this._perform(t);
    const r = Tu(t.method, t);
    let i = C(this, rs).get(r);
    return (
      i ||
        ((i = this._perform(t)),
        C(this, rs).set(r, i),
        setTimeout(() => {
          C(this, rs).get(r) === i && C(this, rs).delete(r);
        }, e)),
      await i
    );
  }),
  (Qh = async function (t, e, r) {
    ht(r < LI, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
      reason: "TOO_MANY_REDIRECTS",
      transaction: Object.assign({}, t, { blockTag: e, enableCcipRead: !0 }),
    });
    const i = sl(t);
    try {
      return xt(
        await this._perform({ method: "call", transaction: i, blockTag: e })
      );
    } catch (s) {
      if (
        !this.disableCcipRead &&
        Od(s) &&
        s.data &&
        r >= 0 &&
        e === "latest" &&
        i.to != null &&
        Ue(s.data, 0, 4) === "0x556f1830"
      ) {
        const o = s.data,
          a = await Ir(i.to, this);
        let c;
        try {
          c = VI(Ue(s.data, 4));
        } catch (b) {
          ht(!1, b.message, "OFFCHAIN_FAULT", {
            reason: "BAD_DATA",
            transaction: i,
            info: { data: o },
          });
        }
        ht(
          c.sender.toLowerCase() === a.toLowerCase(),
          "CCIP Read sender mismatch",
          "CALL_EXCEPTION",
          {
            action: "call",
            data: o,
            reason: "OffchainLookup",
            transaction: i,
            invocation: null,
            revert: {
              signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
              name: "OffchainLookup",
              args: c.errorArgs,
            },
          }
        );
        const f = await this.ccipReadFetch(i, c.calldata, c.urls);
        ht(f != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
          reason: "FETCH_FAILED",
          transaction: i,
          info: { data: s.data, errorArgs: c.errorArgs },
        });
        const h = { to: a, data: Fe([c.selector, KI([f, c.extraData])]) };
        this.emit("debug", { action: "sendCcipReadCall", transaction: h });
        try {
          const b = await pt(this, Jt, Qh).call(this, h, e, r + 1);
          return (
            this.emit("debug", {
              action: "receiveCcipReadCallResult",
              transaction: Object.assign({}, h),
              result: b,
            }),
            b
          );
        } catch (b) {
          throw (
            (this.emit("debug", {
              action: "receiveCcipReadCallError",
              transaction: Object.assign({}, h),
              error: b,
            }),
            b)
          );
        }
      }
      throw s;
    }
  }),
  (Jh = async function (t) {
    const { value: e } = await kr({ network: this.getNetwork(), value: t });
    return e;
  }),
  (cc = async function (t, e, r) {
    let i = this._getAddress(e),
      s = this._getBlockTag(r);
    return (
      (typeof i != "string" || typeof s != "string") &&
        ([i, s] = await Promise.all([i, s])),
      await pt(this, Jt, Jh).call(
        this,
        pt(this, Jt, Hr).call(
          this,
          Object.assign(t, { address: i, blockTag: s })
        )
      )
    );
  }),
  (jh = async function (t, e) {
    if (be(t, 32))
      return await pt(this, Jt, Hr).call(this, {
        method: "getBlock",
        blockHash: t,
        includeTransactions: e,
      });
    let r = this._getBlockTag(t);
    return (
      typeof r != "string" && (r = await r),
      await pt(this, Jt, Hr).call(this, {
        method: "getBlock",
        blockTag: r,
        includeTransactions: e,
      })
    );
  }),
  (uc = async function (t, e) {
    let r = await ah(t, this);
    return (
      r.type === "event" &&
        e &&
        e.length > 0 &&
        e[0].removed === !0 &&
        (r = await ah({ orphan: "drop-log", log: e[0] }, this)),
      C(this, mr).get(r.tag) || null
    );
  }),
  (_u = async function (t) {
    const e = await ah(t, this),
      r = e.tag;
    let i = C(this, mr).get(r);
    return (
      i ||
        ((i = {
          subscriber: this._getSubscriber(e),
          tag: r,
          addressableMap: new WeakMap(),
          nameMap: new Map(),
          started: !1,
          listeners: [],
        }),
        C(this, mr).set(r, i)),
      i
    );
  });
function zI(n, t) {
  try {
    const e = Zh(n, t);
    if (e) return Ju(e);
  } catch {}
  return null;
}
function Zh(n, t) {
  if (n === "0x") return null;
  try {
    const e = Gt(Ue(n, t, t + 32)),
      r = Gt(Ue(n, e, e + 32));
    return Ue(n, e + 32, e + 32 + r);
  } catch {}
  return null;
}
function yg(n) {
  const t = Qe(n);
  if (t.length > 32) throw new Error("internal; should not happen");
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function HI(n) {
  if (n.length % 32 === 0) return n;
  const t = new Uint8Array(Math.ceil(n.length / 32) * 32);
  return t.set(n), t;
}
const GI = new Uint8Array([]);
function KI(n) {
  const t = [];
  let e = 0;
  for (let r = 0; r < n.length; r++) t.push(GI), (e += 32);
  for (let r = 0; r < n.length; r++) {
    const i = $t(n[r]);
    (t[r] = yg(e)),
      t.push(yg(i.length)),
      t.push(HI(i)),
      (e += 32 + Math.ceil(i.length / 32) * 32);
  }
  return Fe(t);
}
const mg = "0x0000000000000000000000000000000000000000000000000000000000000000";
function VI(n) {
  const t = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: [],
  };
  ht(Go(n) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data",
  });
  const e = Ue(n, 0, 32);
  ht(
    Ue(e, 0, 12) === Ue(mg, 0, 12),
    "corrupt OffchainLookup sender",
    "OFFCHAIN_FAULT",
    { reason: "corrupt OffchainLookup sender" }
  ),
    (t.sender = Ue(e, 12));
  try {
    const r = [],
      i = Gt(Ue(n, 32, 64)),
      s = Gt(Ue(n, i, i + 32)),
      o = Ue(n, i + 32);
    for (let a = 0; a < s; a++) {
      const c = zI(o, a * 32);
      if (c == null) throw new Error("abort");
      r.push(c);
    }
    t.urls = r;
  } catch {
    ht(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls",
    });
  }
  try {
    const r = Zh(n, 64);
    if (r == null) throw new Error("abort");
    t.calldata = r;
  } catch {
    ht(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata",
    });
  }
  ht(
    Ue(n, 100, 128) === Ue(mg, 0, 28),
    "corrupt OffchainLookup callbaackSelector",
    "OFFCHAIN_FAULT",
    { reason: "corrupt OffchainLookup callbaackSelector" }
  ),
    (t.selector = Ue(n, 96, 100));
  try {
    const r = Zh(n, 128);
    if (r == null) throw new Error("abort");
    t.extraData = r;
  } catch {
    ht(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData",
    });
  }
  return (
    (t.errorArgs = "sender,urls,calldata,selector,extraData"
      .split(/,/)
      .map((r) => t[r])),
    t
  );
}
function ys(n, t) {
  if (n.provider) return n.provider;
  ht(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: t });
}
async function wg(n, t) {
  let e = sl(t);
  if ((e.to != null && (e.to = Ir(e.to, n)), e.from != null)) {
    const r = e.from;
    e.from = Promise.all([n.getAddress(), Ir(r, n)]).then(
      ([i, s]) => (
        Z(
          i.toLowerCase() === s.toLowerCase(),
          "transaction from mismatch",
          "tx.from",
          s
        ),
        i
      )
    );
  } else e.from = n.getAddress();
  return await kr(e);
}
class WI {
  constructor(t) {
    tt(this, "provider");
    Ct(this, { provider: t || null });
  }
  async getNonce(t) {
    return ys(this, "getTransactionCount").getTransactionCount(
      await this.getAddress(),
      t
    );
  }
  async populateCall(t) {
    return await wg(this, t);
  }
  async populateTransaction(t) {
    const e = ys(this, "populateTransaction"),
      r = await wg(this, t);
    r.nonce == null && (r.nonce = await this.getNonce("pending")),
      r.gasLimit == null && (r.gasLimit = await this.estimateGas(r));
    const i = await this.provider.getNetwork();
    if (r.chainId != null) {
      const o = vt(r.chainId);
      Z(
        o === i.chainId,
        "transaction chainId mismatch",
        "tx.chainId",
        t.chainId
      );
    } else r.chainId = i.chainId;
    const s = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
    if (
      (r.gasPrice != null && (r.type === 2 || s)
        ? Z(!1, "eip-1559 transaction do not support gasPrice", "tx", t)
        : (r.type === 0 || r.type === 1) &&
          s &&
          Z(
            !1,
            "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
            "tx",
            t
          ),
      (r.type === 2 || r.type == null) &&
        r.maxFeePerGas != null &&
        r.maxPriorityFeePerGas != null)
    )
      r.type = 2;
    else if (r.type === 0 || r.type === 1) {
      const o = await e.getFeeData();
      ht(
        o.gasPrice != null,
        "network does not support gasPrice",
        "UNSUPPORTED_OPERATION",
        { operation: "getGasPrice" }
      ),
        r.gasPrice == null && (r.gasPrice = o.gasPrice);
    } else {
      const o = await e.getFeeData();
      if (r.type == null)
        if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
          if (
            (r.authorizationList && r.authorizationList.length
              ? (r.type = 4)
              : (r.type = 2),
            r.gasPrice != null)
          ) {
            const a = r.gasPrice;
            delete r.gasPrice,
              (r.maxFeePerGas = a),
              (r.maxPriorityFeePerGas = a);
          } else
            r.maxFeePerGas == null && (r.maxFeePerGas = o.maxFeePerGas),
              r.maxPriorityFeePerGas == null &&
                (r.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
        else
          o.gasPrice != null
            ? (ht(
                !s,
                "network does not support EIP-1559",
                "UNSUPPORTED_OPERATION",
                { operation: "populateTransaction" }
              ),
              r.gasPrice == null && (r.gasPrice = o.gasPrice),
              (r.type = 0))
            : ht(
                !1,
                "failed to get consistent fee data",
                "UNSUPPORTED_OPERATION",
                { operation: "signer.getFeeData" }
              );
      else
        (r.type === 2 || r.type === 3 || r.type === 4) &&
          (r.maxFeePerGas == null && (r.maxFeePerGas = o.maxFeePerGas),
          r.maxPriorityFeePerGas == null &&
            (r.maxPriorityFeePerGas = o.maxPriorityFeePerGas));
    }
    return await kr(r);
  }
  async populateAuthorization(t) {
    const e = Object.assign({}, t);
    return (
      e.chainId == null &&
        (e.chainId = (await ys(this, "getNetwork").getNetwork()).chainId),
      e.nonce == null && (e.nonce = await this.getNonce()),
      e
    );
  }
  async estimateGas(t) {
    return ys(this, "estimateGas").estimateGas(await this.populateCall(t));
  }
  async call(t) {
    return ys(this, "call").call(await this.populateCall(t));
  }
  async resolveName(t) {
    return await ys(this, "resolveName").resolveName(t);
  }
  async sendTransaction(t) {
    const e = ys(this, "sendTransaction"),
      r = await this.populateTransaction(t);
    delete r.from;
    const i = Yu.from(r);
    return await e.broadcastTransaction(await this.signTransaction(i));
  }
  authorize(t) {
    ht(
      !1,
      "authorization not implemented for this signer",
      "UNSUPPORTED_OPERATION",
      { operation: "authorize" }
    );
  }
}
function qI(n) {
  return JSON.parse(JSON.stringify(n));
}
var xr, Mn, Js, ns, js, Ra, fs, Yh, Xh;
class Ww {
  constructor(t) {
    ut(this, fs);
    ut(this, xr);
    ut(this, Mn);
    ut(this, Js);
    ut(this, ns);
    ut(this, js);
    ut(this, Ra);
    Q(this, xr, t),
      Q(this, Mn, null),
      Q(this, Js, pt(this, fs, Yh).bind(this)),
      Q(this, ns, !1),
      Q(this, js, null),
      Q(this, Ra, !1);
  }
  _subscribe(t) {
    throw new Error("subclasses must override this");
  }
  _emitResults(t, e) {
    throw new Error("subclasses must override this");
  }
  _recover(t) {
    throw new Error("subclasses must override this");
  }
  start() {
    C(this, ns) || (Q(this, ns, !0), pt(this, fs, Yh).call(this, -2));
  }
  stop() {
    C(this, ns) &&
      (Q(this, ns, !1),
      Q(this, Ra, !0),
      pt(this, fs, Xh).call(this),
      C(this, xr).off("block", C(this, Js)));
  }
  pause(t) {
    t && pt(this, fs, Xh).call(this), C(this, xr).off("block", C(this, Js));
  }
  resume() {
    this.start();
  }
}
(xr = new WeakMap()),
  (Mn = new WeakMap()),
  (Js = new WeakMap()),
  (ns = new WeakMap()),
  (js = new WeakMap()),
  (Ra = new WeakMap()),
  (fs = new WeakSet()),
  (Yh = async function (t) {
    try {
      C(this, Mn) == null && Q(this, Mn, this._subscribe(C(this, xr)));
      let e = null;
      try {
        e = await C(this, Mn);
      } catch (s) {
        if (!or(s, "UNSUPPORTED_OPERATION") || s.operation !== "eth_newFilter")
          throw s;
      }
      if (e == null) {
        Q(this, Mn, null),
          C(this, xr)._recoverSubscriber(this, this._recover(C(this, xr)));
        return;
      }
      const r = await C(this, xr).getNetwork();
      if ((C(this, js) || Q(this, js, r), C(this, js).chainId !== r.chainId))
        throw new Error("chaid changed");
      if (C(this, Ra)) return;
      const i = await C(this, xr).send("eth_getFilterChanges", [e]);
      await this._emitResults(C(this, xr), i);
    } catch (e) {
      console.log("@TODO", e);
    }
    C(this, xr).once("block", C(this, Js));
  }),
  (Xh = function () {
    const t = C(this, Mn);
    t &&
      (Q(this, Mn, null),
      t.then((e) => {
        C(this, xr).destroyed || C(this, xr).send("eth_uninstallFilter", [e]);
      }));
  });
var Zs;
class $I extends Ww {
  constructor(e, r) {
    super(e);
    ut(this, Zs);
    Q(this, Zs, qI(r));
  }
  _recover(e) {
    return new Yd(e, C(this, Zs));
  }
  async _subscribe(e) {
    return await e.send("eth_newFilter", [C(this, Zs)]);
  }
  async _emitResults(e, r) {
    for (const i of r) e.emit(C(this, Zs), e._wrapLog(i, e._network));
  }
}
Zs = new WeakMap();
class QI extends Ww {
  async _subscribe(t) {
    return await t.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(t, e) {
    for (const r of e) t.emit("pending", r);
  }
}
const JI = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Ou(n) {
  if (
    n == null ||
    JI.indexOf(typeof n) >= 0 ||
    typeof n.getAddress == "function"
  )
    return n;
  if (Array.isArray(n)) return n.map(Ou);
  if (typeof n == "object")
    return Object.keys(n).reduce((t, e) => ((t[e] = n[e]), t), {});
  throw new Error(`should not happen: ${n} (${typeof n})`);
}
function jI(n) {
  return new Promise((t) => {
    setTimeout(t, n);
  });
}
function So(n) {
  return n && n.toLowerCase();
}
function bg(n) {
  return n && typeof n.pollingInterval == "number";
}
const qw = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3,
};
class uh extends WI {
  constructor(e, r) {
    super(e);
    tt(this, "address");
    (r = oe(r)), Ct(this, { address: r });
  }
  connect(e) {
    ht(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect",
    });
  }
  async getAddress() {
    return this.address;
  }
  async populateTransaction(e) {
    return await this.populateCall(e);
  }
  async sendUncheckedTransaction(e) {
    const r = Ou(e),
      i = [];
    if (r.from) {
      const o = r.from;
      i.push(
        (async () => {
          const a = await Ir(o, this.provider);
          Z(
            a != null && a.toLowerCase() === this.address.toLowerCase(),
            "from address mismatch",
            "transaction",
            e
          ),
            (r.from = a);
        })()
      );
    } else r.from = this.address;
    if (
      (r.gasLimit == null &&
        i.push(
          (async () => {
            r.gasLimit = await this.provider.estimateGas({
              ...r,
              from: this.address,
            });
          })()
        ),
      r.to != null)
    ) {
      const o = r.to;
      i.push(
        (async () => {
          r.to = await Ir(o, this.provider);
        })()
      );
    }
    i.length && (await Promise.all(i));
    const s = this.provider.getRpcTransaction(r);
    return this.provider.send("eth_sendTransaction", [s]);
  }
  async sendTransaction(e) {
    const r = await this.provider.getBlockNumber(),
      i = await this.sendUncheckedTransaction(e);
    return await new Promise((s, o) => {
      const a = [1e3, 100];
      let c = 0;
      const f = async () => {
        try {
          const h = await this.provider.getTransaction(i);
          if (h != null) {
            s(h.replaceableTransaction(r));
            return;
          }
        } catch (h) {
          if (
            or(h, "CANCELLED") ||
            or(h, "BAD_DATA") ||
            or(h, "NETWORK_ERROR") ||
            or(h, "UNSUPPORTED_OPERATION")
          ) {
            h.info == null && (h.info = {}),
              (h.info.sendTransactionHash = i),
              o(h);
            return;
          }
          if (
            or(h, "INVALID_ARGUMENT") &&
            (c++,
            h.info == null && (h.info = {}),
            (h.info.sendTransactionHash = i),
            c > 10)
          ) {
            o(h);
            return;
          }
          this.provider.emit(
            "error",
            Be(
              "failed to fetch transation after sending (will try again)",
              "UNKNOWN_ERROR",
              { error: h }
            )
          );
        }
        this.provider._setTimeout(() => {
          f();
        }, a.pop() || 4e3);
      };
      f();
    });
  }
  async signTransaction(e) {
    const r = Ou(e);
    if (r.from) {
      const s = await Ir(r.from, this.provider);
      Z(
        s != null && s.toLowerCase() === this.address.toLowerCase(),
        "from address mismatch",
        "transaction",
        e
      ),
        (r.from = s);
    } else r.from = this.address;
    const i = this.provider.getRpcTransaction(r);
    return await this.provider.send("eth_signTransaction", [i]);
  }
  async signMessage(e) {
    const r = typeof e == "string" ? Ei(e) : e;
    return await this.provider.send("personal_sign", [
      xt(r),
      this.address.toLowerCase(),
    ]);
  }
  async signTypedData(e, r, i) {
    const s = Ou(i),
      o = await il.resolveNames(e, r, s, async (a) => {
        const c = await Ir(a);
        return (
          Z(c != null, "TypedData does not support null address", "value", a), c
        );
      });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(il.getPayload(o.domain, r, o.value)),
    ]);
  }
  async unlock(e) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      e,
      null,
    ]);
  }
  async _legacySignMessage(e) {
    const r = typeof e == "string" ? Ei(e) : e;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      xt(r),
    ]);
  }
}
var Ys, Pa, gi, Ln, mn, sn, Tr, Kc, td;
class ZI extends DI {
  constructor(e, r) {
    super(e, r);
    ut(this, Kc);
    ut(this, Ys);
    ut(this, Pa);
    ut(this, gi);
    ut(this, Ln);
    ut(this, mn);
    ut(this, sn);
    ut(this, Tr);
    Q(this, Pa, 1),
      Q(this, Ys, Object.assign({}, qw, r || {})),
      Q(this, gi, []),
      Q(this, Ln, null),
      Q(this, sn, null),
      Q(this, Tr, null);
    {
      let s = null;
      const o = new Promise((a) => {
        s = a;
      });
      Q(this, mn, { promise: o, resolve: s });
    }
    const i = this._getOption("staticNetwork");
    typeof i == "boolean"
      ? (Z(
          !i || e !== "any",
          "staticNetwork cannot be used on special network 'any'",
          "options",
          r
        ),
        i && e != null && Q(this, sn, Wn.from(e)))
      : i &&
        (Z(
          e == null || i.matches(e),
          "staticNetwork MUST match network object",
          "options",
          r
        ),
        Q(this, sn, i));
  }
  _getOption(e) {
    return C(this, Ys)[e];
  }
  get _network() {
    return (
      ht(C(this, sn), "network is not available yet", "NETWORK_ERROR"),
      C(this, sn)
    );
  }
  async _perform(e) {
    if (e.method === "call" || e.method === "estimateGas") {
      let i = e.transaction;
      if (
        i &&
        i.type != null &&
        vt(i.type) &&
        i.maxFeePerGas == null &&
        i.maxPriorityFeePerGas == null
      ) {
        const s = await this.getFeeData();
        s.maxFeePerGas == null &&
          s.maxPriorityFeePerGas == null &&
          (e = Object.assign({}, e, {
            transaction: Object.assign({}, i, { type: void 0 }),
          }));
      }
    }
    const r = this.getRpcRequest(e);
    return r != null ? await this.send(r.method, r.args) : super._perform(e);
  }
  async _detectNetwork() {
    const e = this._getOption("staticNetwork");
    if (e)
      if (e === !0) {
        if (C(this, sn)) return C(this, sn);
      } else return e;
    return C(this, Tr)
      ? await C(this, Tr)
      : this.ready
      ? (Q(
          this,
          Tr,
          (async () => {
            try {
              const r = Wn.from(vt(await this.send("eth_chainId", [])));
              return Q(this, Tr, null), r;
            } catch (r) {
              throw (Q(this, Tr, null), r);
            }
          })()
        ),
        await C(this, Tr))
      : (Q(
          this,
          Tr,
          (async () => {
            const r = {
              id: Xa(this, Pa)._++,
              method: "eth_chainId",
              params: [],
              jsonrpc: "2.0",
            };
            this.emit("debug", { action: "sendRpcPayload", payload: r });
            let i;
            try {
              (i = (await this._send(r))[0]), Q(this, Tr, null);
            } catch (s) {
              throw (
                (Q(this, Tr, null),
                this.emit("debug", { action: "receiveRpcError", error: s }),
                s)
              );
            }
            if (
              (this.emit("debug", { action: "receiveRpcResult", result: i }),
              "result" in i)
            )
              return Wn.from(vt(i.result));
            throw this.getRpcError(r, i);
          })()
        ),
        await C(this, Tr));
  }
  _start() {
    C(this, mn) == null ||
      C(this, mn).resolve == null ||
      (C(this, mn).resolve(),
      Q(this, mn, null),
      (async () => {
        for (; C(this, sn) == null && !this.destroyed; )
          try {
            Q(this, sn, await this._detectNetwork());
          } catch (e) {
            if (this.destroyed) break;
            console.log(
              "JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"
            ),
              this.emit(
                "error",
                Be("failed to bootstrap network detection", "NETWORK_ERROR", {
                  event: "initial-network-discovery",
                  info: { error: e },
                })
              ),
              await jI(1e3);
          }
        pt(this, Kc, td).call(this);
      })());
  }
  async _waitUntilReady() {
    if (C(this, mn) != null) return await C(this, mn).promise;
  }
  _getSubscriber(e) {
    return e.type === "pending"
      ? new QI(this)
      : e.type === "event"
      ? this._getOption("polling")
        ? new Yd(this, e.filter)
        : new $I(this, e.filter)
      : e.type === "orphan" && e.filter.orphan === "drop-log"
      ? new Vw("orphan")
      : super._getSubscriber(e);
  }
  get ready() {
    return C(this, mn) == null;
  }
  getRpcTransaction(e) {
    const r = {};
    return (
      [
        "chainId",
        "gasLimit",
        "gasPrice",
        "type",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "value",
      ].forEach((i) => {
        if (e[i] == null) return;
        let s = i;
        i === "gasLimit" && (s = "gas"), (r[s] = wn(vt(e[i], `tx.${i}`)));
      }),
      ["from", "to", "data"].forEach((i) => {
        e[i] != null && (r[i] = xt(e[i]));
      }),
      e.accessList && (r.accessList = go(e.accessList)),
      e.blobVersionedHashes &&
        (r.blobVersionedHashes = e.blobVersionedHashes.map((i) =>
          i.toLowerCase()
        )),
      e.authorizationList &&
        (r.authorizationList = e.authorizationList.map((i) => {
          const s = Qm(i);
          return {
            address: s.address,
            nonce: wn(s.nonce),
            chainId: wn(s.chainId),
            yParity: wn(s.signature.yParity),
            r: wn(s.signature.r),
            s: wn(s.signature.s),
          };
        })),
      r
    );
  }
  getRpcRequest(e) {
    switch (e.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getPriorityFee":
        return { method: "eth_maxPriorityFeePerGas", args: [] };
      case "getBalance":
        return { method: "eth_getBalance", args: [So(e.address), e.blockTag] };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [So(e.address), e.blockTag],
        };
      case "getCode":
        return { method: "eth_getCode", args: [So(e.address), e.blockTag] };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [So(e.address), "0x" + e.position.toString(16), e.blockTag],
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [e.signedTransaction],
        };
      case "getBlock":
        if ("blockTag" in e)
          return {
            method: "eth_getBlockByNumber",
            args: [e.blockTag, !!e.includeTransactions],
          };
        if ("blockHash" in e)
          return {
            method: "eth_getBlockByHash",
            args: [e.blockHash, !!e.includeTransactions],
          };
        break;
      case "getTransaction":
        return { method: "eth_getTransactionByHash", args: [e.hash] };
      case "getTransactionReceipt":
        return { method: "eth_getTransactionReceipt", args: [e.hash] };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(e.transaction), e.blockTag],
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(e.transaction)],
        };
      case "getLogs":
        return (
          e.filter &&
            e.filter.address != null &&
            (Array.isArray(e.filter.address)
              ? (e.filter.address = e.filter.address.map(So))
              : (e.filter.address = So(e.filter.address))),
          { method: "eth_getLogs", args: [e.filter] }
        );
    }
    return null;
  }
  getRpcError(e, r) {
    const { method: i } = e,
      { error: s } = r;
    if (i === "eth_estimateGas" && s.message) {
      const c = s.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return Be("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: e.params[0],
          info: { payload: e, error: s },
        });
      if (c.match(/nonce/i) && c.match(/too low/i))
        return Be("nonce has already been used", "NONCE_EXPIRED", {
          transaction: e.params[0],
          info: { payload: e, error: s },
        });
    }
    if (i === "eth_call" || i === "eth_estimateGas") {
      const c = ed(s),
        f = Pc.getBuiltinCallException(
          i === "eth_call" ? "call" : "estimateGas",
          e.params[0],
          c ? c.data : null
        );
      return (f.info = { error: s, payload: e }), f;
    }
    const o = JSON.stringify(YI(s));
    if (
      typeof s.message == "string" &&
      s.message.match(/user denied|ethers-user-denied/i)
    )
      return Be("user rejected action", "ACTION_REJECTED", {
        action:
          {
            eth_sign: "signMessage",
            personal_sign: "signMessage",
            eth_signTypedData_v4: "signTypedData",
            eth_signTransaction: "signTransaction",
            eth_sendTransaction: "sendTransaction",
            eth_requestAccounts: "requestAccess",
            wallet_requestAccounts: "requestAccess",
          }[i] || "unknown",
        reason: "rejected",
        info: { payload: e, error: s },
      });
    if (i === "eth_sendRawTransaction" || i === "eth_sendTransaction") {
      const c = e.params[0];
      if (o.match(/insufficient funds|base fee exceeds gas limit/i))
        return Be(
          "insufficient funds for intrinsic transaction cost",
          "INSUFFICIENT_FUNDS",
          { transaction: c, info: { error: s } }
        );
      if (o.match(/nonce/i) && o.match(/too low/i))
        return Be("nonce has already been used", "NONCE_EXPIRED", {
          transaction: c,
          info: { error: s },
        });
      if (o.match(/replacement transaction/i) && o.match(/underpriced/i))
        return Be("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
          transaction: c,
          info: { error: s },
        });
      if (o.match(/only replay-protected/i))
        return Be(
          "legacy pre-eip-155 transactions not supported",
          "UNSUPPORTED_OPERATION",
          { operation: i, info: { transaction: c, info: { error: s } } }
        );
    }
    let a = !!o.match(/the method .* does not exist/i);
    return (
      a ||
        (s &&
          s.details &&
          s.details.startsWith("Unauthorized method:") &&
          (a = !0)),
      a
        ? Be("unsupported operation", "UNSUPPORTED_OPERATION", {
            operation: e.method,
            info: { error: s, payload: e },
          })
        : Be("could not coalesce error", "UNKNOWN_ERROR", {
            error: s,
            payload: e,
          })
    );
  }
  send(e, r) {
    if (this.destroyed)
      return Promise.reject(
        Be("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
          operation: e,
        })
      );
    const i = Xa(this, Pa)._++,
      s = new Promise((o, a) => {
        C(this, gi).push({
          resolve: o,
          reject: a,
          payload: { method: e, params: r, id: i, jsonrpc: "2.0" },
        });
      });
    return pt(this, Kc, td).call(this), s;
  }
  async getSigner(e) {
    e == null && (e = 0);
    const r = this.send("eth_accounts", []);
    if (typeof e == "number") {
      const s = await r;
      if (e >= s.length) throw new Error("no such account");
      return new uh(this, s[e]);
    }
    const { accounts: i } = await kr({
      network: this.getNetwork(),
      accounts: r,
    });
    e = oe(e);
    for (const s of i) if (oe(s) === e) return new uh(this, e);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((r) => new uh(this, r));
  }
  destroy() {
    C(this, Ln) && (clearTimeout(C(this, Ln)), Q(this, Ln, null));
    for (const { payload: e, reject: r } of C(this, gi))
      r(
        Be("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
          operation: e.method,
        })
      );
    Q(this, gi, []), super.destroy();
  }
}
(Ys = new WeakMap()),
  (Pa = new WeakMap()),
  (gi = new WeakMap()),
  (Ln = new WeakMap()),
  (mn = new WeakMap()),
  (sn = new WeakMap()),
  (Tr = new WeakMap()),
  (Kc = new WeakSet()),
  (td = function () {
    if (C(this, Ln)) return;
    const e =
      this._getOption("batchMaxCount") === 1
        ? 0
        : this._getOption("batchStallTime");
    Q(
      this,
      Ln,
      setTimeout(() => {
        Q(this, Ln, null);
        const r = C(this, gi);
        for (Q(this, gi, []); r.length; ) {
          const i = [r.shift()];
          for (; r.length && i.length !== C(this, Ys).batchMaxCount; )
            if (
              (i.push(r.shift()),
              JSON.stringify(i.map((o) => o.payload)).length >
                C(this, Ys).batchMaxSize)
            ) {
              r.unshift(i.pop());
              break;
            }
          (async () => {
            const s = i.length === 1 ? i[0].payload : i.map((o) => o.payload);
            this.emit("debug", { action: "sendRpcPayload", payload: s });
            try {
              const o = await this._send(s);
              this.emit("debug", { action: "receiveRpcResult", result: o });
              for (const { resolve: a, reject: c, payload: f } of i) {
                if (this.destroyed) {
                  c(
                    Be(
                      "provider destroyed; cancelled request",
                      "UNSUPPORTED_OPERATION",
                      { operation: f.method }
                    )
                  );
                  continue;
                }
                const h = o.filter((b) => b.id === f.id)[0];
                if (h == null) {
                  const b = Be("missing response for request", "BAD_DATA", {
                    value: o,
                    info: { payload: f },
                  });
                  this.emit("error", b), c(b);
                  continue;
                }
                if ("error" in h) {
                  c(this.getRpcError(f, h));
                  continue;
                }
                a(h.result);
              }
            } catch (o) {
              this.emit("debug", { action: "receiveRpcError", error: o });
              for (const { reject: a } of i) a(o);
            }
          })();
        }
      }, e)
    );
  });
var is;
class $w extends ZI {
  constructor(e, r) {
    super(e, r);
    ut(this, is);
    let i = this._getOption("pollingInterval");
    i == null && (i = qw.pollingInterval), Q(this, is, i);
  }
  _getSubscriber(e) {
    const r = super._getSubscriber(e);
    return bg(r) && (r.pollingInterval = C(this, is)), r;
  }
  get pollingInterval() {
    return C(this, is);
  }
  set pollingInterval(e) {
    if (!Number.isInteger(e) || e < 0) throw new Error("invalid interval");
    Q(this, is, e),
      this._forEachSubscriber((r) => {
        bg(r) && (r.pollingInterval = C(this, is));
      });
  }
}
is = new WeakMap();
var Ca;
class xB extends $w {
  constructor(e, r, i) {
    e == null && (e = "http://localhost:8545");
    super(r, i);
    ut(this, Ca);
    typeof e == "string" ? Q(this, Ca, new Si(e)) : Q(this, Ca, e.clone());
  }
  _getConnection() {
    return C(this, Ca).clone();
  }
  async send(e, r) {
    return await this._start(), await super.send(e, r);
  }
  async _send(e) {
    const r = this._getConnection();
    (r.body = JSON.stringify(e)),
      r.setHeader("content-type", "application/json");
    const i = await r.send();
    i.assertOk();
    let s = i.bodyJson;
    return Array.isArray(s) || (s = [s]), s;
  }
}
Ca = new WeakMap();
function ed(n) {
  if (n == null) return null;
  if (typeof n.message == "string" && n.message.match(/revert/i) && be(n.data))
    return { message: n.message, data: n.data };
  if (typeof n == "object") {
    for (const t in n) {
      const e = ed(n[t]);
      if (e) return e;
    }
    return null;
  }
  if (typeof n == "string")
    try {
      return ed(JSON.parse(n));
    } catch {}
  return null;
}
function rd(n, t) {
  if (n != null) {
    if (
      (typeof n.message == "string" && t.push(n.message), typeof n == "object")
    )
      for (const e in n) rd(n[e], t);
    if (typeof n == "string")
      try {
        return rd(JSON.parse(n), t);
      } catch {}
  }
}
function YI(n) {
  const t = [];
  return rd(n, t), t;
}
var Na, Ta;
const vs = class vs extends $w {
  constructor(e, r, i) {
    const s = Object.assign({}, i ?? {}, { batchMaxCount: 1 });
    Z(e && e.request, "invalid EIP-1193 provider", "ethereum", e);
    super(r, s);
    ut(this, Na);
    ut(this, Ta);
    Q(this, Ta, null),
      i && i.providerInfo && Q(this, Ta, i.providerInfo),
      Q(this, Na, async (o, a) => {
        const c = { method: o, params: a };
        this.emit("debug", { action: "sendEip1193Request", payload: c });
        try {
          const f = await e.request(c);
          return (
            this.emit("debug", { action: "receiveEip1193Result", result: f }), f
          );
        } catch (f) {
          const h = new Error(f.message);
          throw (
            ((h.code = f.code),
            (h.data = f.data),
            (h.payload = c),
            this.emit("debug", { action: "receiveEip1193Error", error: h }),
            h)
          );
        }
      });
  }
  get providerInfo() {
    return C(this, Ta);
  }
  async send(e, r) {
    return await this._start(), await super.send(e, r);
  }
  async _send(e) {
    Z(
      !Array.isArray(e),
      "EIP-1193 does not support batch request",
      "payload",
      e
    );
    try {
      const r = await C(this, Na).call(this, e.method, e.params || []);
      return [{ id: e.id, result: r }];
    } catch (r) {
      return [
        { id: e.id, error: { code: r.code, data: r.data, message: r.message } },
      ];
    }
  }
  getRpcError(e, r) {
    switch (((r = JSON.parse(JSON.stringify(r))), r.error.code || -1)) {
      case 4001:
        r.error.message = `ethers-user-denied: ${r.error.message}`;
        break;
      case 4200:
        r.error.message = `ethers-unsupported: ${r.error.message}`;
        break;
    }
    return super.getRpcError(e, r);
  }
  async hasSigner(e) {
    e == null && (e = 0);
    const r = await this.send("eth_accounts", []);
    return typeof e == "number"
      ? r.length > e
      : ((e = e.toLowerCase()),
        r.filter((i) => i.toLowerCase() === e).length !== 0);
  }
  async getSigner(e) {
    if ((e == null && (e = 0), !(await this.hasSigner(e))))
      try {
        await C(this, Na).call(this, "eth_requestAccounts", []);
      } catch (r) {
        const i = r.payload;
        throw this.getRpcError(i, { id: i.id, error: r });
      }
    return await super.getSigner(e);
  }
  static async discover(e) {
    if ((e == null && (e = {}), e.provider)) return new vs(e.provider);
    const r = e.window ? e.window : typeof window < "u" ? window : null;
    if (r == null) return null;
    const i = e.anyProvider;
    if (i && r.ethereum) return new vs(r.ethereum);
    if (
      !(
        "addEventListener" in r &&
        "dispatchEvent" in r &&
        "removeEventListener" in r
      )
    )
      return null;
    const s = e.timeout ? e.timeout : 300;
    return s === 0
      ? null
      : await new Promise((o, a) => {
          let c = [];
          const f = (S) => {
              c.push(S.detail), i && h();
            },
            h = () => {
              if ((clearTimeout(b), c.length))
                if (e && e.filter) {
                  const S = e.filter(c.map((P) => Object.assign({}, P.info)));
                  if (S == null) o(null);
                  else if (S instanceof vs) o(S);
                  else {
                    let P = null;
                    if (
                      (S.uuid &&
                        (P = c.filter((N) => S.uuid === N.info.uuid)[0]),
                      P)
                    ) {
                      const { provider: M, info: N } = P;
                      o(new vs(M, void 0, { providerInfo: N }));
                    } else
                      a(
                        Be(
                          "filter returned unknown info",
                          "UNSUPPORTED_OPERATION",
                          { value: S }
                        )
                      );
                  }
                } else {
                  const { provider: S, info: P } = c[0];
                  o(new vs(S, void 0, { providerInfo: P }));
                }
              else o(null);
              r.removeEventListener("eip6963:announceProvider", f);
            },
            b = setTimeout(() => {
              h();
            }, s);
          r.addEventListener("eip6963:announceProvider", f),
            r.dispatchEvent(new Event("eip6963:requestProvider"));
        });
  }
};
(Na = new WeakMap()), (Ta = new WeakMap());
let Ag = vs;
export {
  Ag as A,
  Ie as B,
  Pd as C,
  dc as D,
  AB as E,
  Nt as F,
  VA as G,
  lo as H,
  iB as I,
  xB as J,
  Do as K,
  a2 as L,
  N1 as M,
  Gh as N,
  wB as O,
  gt as P,
  Td as Q,
  fB as R,
  $e as S,
  he as T,
  vd as V,
  gc as a,
  Mg as b,
  Fn as c,
  xg as d,
  d0 as e,
  tB as f,
  gl as g,
  Ug as h,
  gB as i,
  yB as j,
  f0 as k,
  dB as l,
  Qy as m,
  mB as n,
  pB as o,
  Bi as p,
  hB as q,
  id as r,
  h0 as s,
  Vx as t,
  bc as u,
  qa as v,
  fd as w,
  oy as x,
  sy as y,
  bB as z,
};
