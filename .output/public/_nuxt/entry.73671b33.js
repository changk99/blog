function Ui(e, t) {
  const n = Object.create(null),
    r = e.split(',');
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Ut(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = _e(r) ? eh(r) : Ut(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else {
    if (_e(e)) return e;
    if (Pe(e)) return e;
  }
}
const Yp = /;(?![^(]*\))/g,
  Zp = /:([^]+)/,
  Xp = /\/\*.*?\*\//gs;
function eh(e) {
  const t = {};
  return (
    e
      .replace(Xp, '')
      .split(Yp)
      .forEach((n) => {
        if (n) {
          const r = n.split(Zp);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Fe(e) {
  let t = '';
  if (_e(e)) t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const r = Fe(e[n]);
      r && (t += r + ' ');
    }
  else if (Pe(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function fS(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !_e(t) && (e.class = Fe(t)), n && (e.style = Ut(n)), e;
}
const th = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  nh = Ui(th);
function Ru(e) {
  return !!e || e === '';
}
const Wn = (e) =>
    _e(e)
      ? e
      : e == null
      ? ''
      : te(e) || (Pe(e) && (e.toString === Lu || !re(e.toString)))
      ? JSON.stringify(e, Mu, 2)
      : String(e),
  Mu = (e, t) =>
    t && t.__v_isRef
      ? Mu(e, t.value)
      : Bn(t)
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => ((n[`${r} =>`] = o), n), {}) }
      : $u(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Pe(t) && !te(t) && !Nu(t)
      ? String(t)
      : t,
  Oe = {},
  jn = [],
  Xe = () => {},
  rh = () => !1,
  oh = /^on[^a-z]/,
  Yr = (e) => oh.test(e),
  Ki = (e) => e.startsWith('onUpdate:'),
  qe = Object.assign,
  Wi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  sh = Object.prototype.hasOwnProperty,
  ve = (e, t) => sh.call(e, t),
  te = Array.isArray,
  Bn = (e) => Zr(e) === '[object Map]',
  $u = (e) => Zr(e) === '[object Set]',
  ih = (e) => Zr(e) === '[object RegExp]',
  re = (e) => typeof e == 'function',
  _e = (e) => typeof e == 'string',
  Vi = (e) => typeof e == 'symbol',
  Pe = (e) => e !== null && typeof e == 'object',
  qi = (e) => Pe(e) && re(e.then) && re(e.catch),
  Lu = Object.prototype.toString,
  Zr = (e) => Lu.call(e),
  ah = (e) => Zr(e).slice(8, -1),
  Nu = (e) => Zr(e) === '[object Object]',
  Qi = (e) => _e(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Tr = Ui(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  ss = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  lh = /-(\w)/g,
  Mt = ss((e) => e.replace(lh, (t, n) => (n ? n.toUpperCase() : ''))),
  ch = /\B([A-Z])/g,
  rr = ss((e) => e.replace(ch, '-$1').toLowerCase()),
  is = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Io = ss((e) => (e ? `on${is(e)}` : '')),
  Lr = (e, t) => !Object.is(e, t),
  Cr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Bo = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  uh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Fu = (e) => {
    const t = _e(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ll;
const fh = () =>
  ll ||
  (ll =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let dt;
class dh {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = dt),
      !t && dt && (this.index = (dt.scopes || (dt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = dt;
      try {
        return (dt = this), t();
      } finally {
        dt = n;
      }
    }
  }
  on() {
    dt = this;
  }
  off() {
    dt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function ph(e, t = dt) {
  t && t.active && t.effects.push(e);
}
function Ji() {
  return dt;
}
function Hu(e) {
  dt && dt.cleanups.push(e);
}
const Gi = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  ju = (e) => (e.w & ln) > 0,
  Bu = (e) => (e.n & ln) > 0,
  hh = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ln;
  },
  gh = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        ju(o) && !Bu(o) ? o.delete(e) : (t[n++] = o), (o.w &= ~ln), (o.n &= ~ln);
      }
      t.length = n;
    }
  },
  Do = new WeakMap();
let br = 0,
  ln = 1;
const ei = 30;
let Tt;
const xn = Symbol(''),
  ti = Symbol('');
class Yi {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      ph(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Tt,
      n = on;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Tt),
        (Tt = this),
        (on = !0),
        (ln = 1 << ++br),
        br <= ei ? hh(this) : cl(this),
        this.fn()
      );
    } finally {
      br <= ei && gh(this),
        (ln = 1 << --br),
        (Tt = this.parent),
        (on = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Tt === this
      ? (this.deferStop = !0)
      : this.active && (cl(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function cl(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let on = !0;
const Du = [];
function or() {
  Du.push(on), (on = !1);
}
function sr() {
  const e = Du.pop();
  on = e === void 0 ? !0 : e;
}
function at(e, t, n) {
  if (on && Tt) {
    let r = Do.get(e);
    r || Do.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Gi())), zu(o);
  }
}
function zu(e, t) {
  let n = !1;
  br <= ei ? Bu(e) || ((e.n |= ln), (n = !ju(e))) : (n = !e.has(Tt)),
    n && (e.add(Tt), Tt.deps.push(e));
}
function Kt(e, t, n, r, o, s) {
  const i = Do.get(e);
  if (!i) return;
  let a = [];
  if (t === 'clear') a = [...i.values()];
  else if (n === 'length' && te(e)) {
    const l = Number(r);
    i.forEach((c, u) => {
      (u === 'length' || u >= l) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(i.get(n)), t)) {
      case 'add':
        te(e) ? Qi(n) && a.push(i.get('length')) : (a.push(i.get(xn)), Bn(e) && a.push(i.get(ti)));
        break;
      case 'delete':
        te(e) || (a.push(i.get(xn)), Bn(e) && a.push(i.get(ti)));
        break;
      case 'set':
        Bn(e) && a.push(i.get(xn));
        break;
    }
  if (a.length === 1) a[0] && ni(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    ni(Gi(l));
  }
}
function ni(e, t) {
  const n = te(e) ? e : [...e];
  for (const r of n) r.computed && ul(r);
  for (const r of n) r.computed || ul(r);
}
function ul(e, t) {
  (e !== Tt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function mh(e, t) {
  var n;
  return (n = Do.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const vh = Ui('__proto__,__v_isRef,__isVue'),
  Uu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Vi)
  ),
  yh = Zi(),
  _h = Zi(!1, !0),
  bh = Zi(!0),
  fl = wh();
function wh() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = be(this);
        for (let s = 0, i = this.length; s < i; s++) at(r, 'get', s + '');
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(be)) : o;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        or();
        const r = be(this)[t].apply(this, n);
        return sr(), r;
      };
    }),
    e
  );
}
function Eh(e) {
  const t = be(this);
  return at(t, 'has', e), t.hasOwnProperty(e);
}
function Zi(e = !1, t = !1) {
  return function (r, o, s) {
    if (o === '__v_isReactive') return !e;
    if (o === '__v_isReadonly') return e;
    if (o === '__v_isShallow') return t;
    if (o === '__v_raw' && s === (e ? (t ? Hh : Qu) : t ? qu : Vu).get(r)) return r;
    const i = te(r);
    if (!e) {
      if (i && ve(fl, o)) return Reflect.get(fl, o, s);
      if (o === 'hasOwnProperty') return Eh;
    }
    const a = Reflect.get(r, o, s);
    return (Vi(o) ? Uu.has(o) : vh(o)) || (e || at(r, 'get', o), t)
      ? a
      : je(a)
      ? i && Qi(o)
        ? a
        : a.value
      : Pe(a)
      ? e
        ? In(a)
        : lt(a)
      : a;
  };
}
const Th = Ku(),
  Ch = Ku(!0);
function Ku(e = !1) {
  return function (n, r, o, s) {
    let i = n[r];
    if (On(i) && je(i) && !je(o)) return !1;
    if (!e && (!zo(o) && !On(o) && ((i = be(i)), (o = be(o))), !te(n) && je(i) && !je(o)))
      return (i.value = o), !0;
    const a = te(n) && Qi(r) ? Number(r) < n.length : ve(n, r),
      l = Reflect.set(n, r, o, s);
    return n === be(s) && (a ? Lr(o, i) && Kt(n, 'set', r, o) : Kt(n, 'add', r, o)), l;
  };
}
function xh(e, t) {
  const n = ve(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Kt(e, 'delete', t, void 0), r;
}
function Ph(e, t) {
  const n = Reflect.has(e, t);
  return (!Vi(t) || !Uu.has(t)) && at(e, 'has', t), n;
}
function Sh(e) {
  return at(e, 'iterate', te(e) ? 'length' : xn), Reflect.ownKeys(e);
}
const Wu = { get: yh, set: Th, deleteProperty: xh, has: Ph, ownKeys: Sh },
  Oh = {
    get: bh,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    }
  },
  kh = qe({}, Wu, { get: _h, set: Ch }),
  Xi = (e) => e,
  as = (e) => Reflect.getPrototypeOf(e);
function so(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = be(e),
    s = be(t);
  n || (t !== s && at(o, 'get', t), at(o, 'get', s));
  const { has: i } = as(o),
    a = r ? Xi : n ? na : Nr;
  if (i.call(o, t)) return a(e.get(t));
  if (i.call(o, s)) return a(e.get(s));
  e !== o && e.get(t);
}
function io(e, t = !1) {
  const n = this.__v_raw,
    r = be(n),
    o = be(e);
  return (
    t || (e !== o && at(r, 'has', e), at(r, 'has', o)), e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function ao(e, t = !1) {
  return (e = e.__v_raw), !t && at(be(e), 'iterate', xn), Reflect.get(e, 'size', e);
}
function dl(e) {
  e = be(e);
  const t = be(this);
  return as(t).has.call(t, e) || (t.add(e), Kt(t, 'add', e, e)), this;
}
function pl(e, t) {
  t = be(t);
  const n = be(this),
    { has: r, get: o } = as(n);
  let s = r.call(n, e);
  s || ((e = be(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return n.set(e, t), s ? Lr(t, i) && Kt(n, 'set', e, t) : Kt(n, 'add', e, t), this;
}
function hl(e) {
  const t = be(this),
    { has: n, get: r } = as(t);
  let o = n.call(t, e);
  o || ((e = be(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && Kt(t, 'delete', e, void 0), s;
}
function gl() {
  const e = be(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Kt(e, 'clear', void 0, void 0), n;
}
function lo(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      a = be(i),
      l = t ? Xi : e ? na : Nr;
    return !e && at(a, 'iterate', xn), i.forEach((c, u) => r.call(o, l(c), l(u), s));
  };
}
function co(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = be(o),
      i = Bn(s),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      c = o[e](...r),
      u = n ? Xi : t ? na : Nr;
    return (
      !t && at(s, 'iterate', l ? ti : xn),
      {
        next() {
          const { value: f, done: d } = c.next();
          return d ? { value: f, done: d } : { value: a ? [u(f[0]), u(f[1])] : u(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    );
  };
}
function Qt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function Ah() {
  const e = {
      get(s) {
        return so(this, s);
      },
      get size() {
        return ao(this);
      },
      has: io,
      add: dl,
      set: pl,
      delete: hl,
      clear: gl,
      forEach: lo(!1, !1)
    },
    t = {
      get(s) {
        return so(this, s, !1, !0);
      },
      get size() {
        return ao(this);
      },
      has: io,
      add: dl,
      set: pl,
      delete: hl,
      clear: gl,
      forEach: lo(!1, !0)
    },
    n = {
      get(s) {
        return so(this, s, !0);
      },
      get size() {
        return ao(this, !0);
      },
      has(s) {
        return io.call(this, s, !0);
      },
      add: Qt('add'),
      set: Qt('set'),
      delete: Qt('delete'),
      clear: Qt('clear'),
      forEach: lo(!0, !1)
    },
    r = {
      get(s) {
        return so(this, s, !0, !0);
      },
      get size() {
        return ao(this, !0);
      },
      has(s) {
        return io.call(this, s, !0);
      },
      add: Qt('add'),
      set: Qt('set'),
      delete: Qt('delete'),
      clear: Qt('clear'),
      forEach: lo(!0, !0)
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      (e[s] = co(s, !1, !1)),
        (n[s] = co(s, !0, !1)),
        (t[s] = co(s, !1, !0)),
        (r[s] = co(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Ih, Rh, Mh, $h] = Ah();
function ea(e, t) {
  const n = t ? (e ? $h : Mh) : e ? Rh : Ih;
  return (r, o, s) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
      ? e
      : o === '__v_raw'
      ? r
      : Reflect.get(ve(n, o) && o in r ? n : r, o, s);
}
const Lh = { get: ea(!1, !1) },
  Nh = { get: ea(!1, !0) },
  Fh = { get: ea(!0, !1) },
  Vu = new WeakMap(),
  qu = new WeakMap(),
  Qu = new WeakMap(),
  Hh = new WeakMap();
function jh(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Bh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jh(ah(e));
}
function lt(e) {
  return On(e) ? e : ta(e, !1, Wu, Lh, Vu);
}
function Dh(e) {
  return ta(e, !1, kh, Nh, qu);
}
function In(e) {
  return ta(e, !0, Oh, Fh, Qu);
}
function ta(e, t, n, r, o) {
  if (!Pe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = Bh(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return o.set(e, a), a;
}
function Dn(e) {
  return On(e) ? Dn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function On(e) {
  return !!(e && e.__v_isReadonly);
}
function zo(e) {
  return !!(e && e.__v_isShallow);
}
function Ju(e) {
  return Dn(e) || On(e);
}
function be(e) {
  const t = e && e.__v_raw;
  return t ? be(t) : e;
}
function Gu(e) {
  return Bo(e, '__v_skip', !0), e;
}
const Nr = (e) => (Pe(e) ? lt(e) : e),
  na = (e) => (Pe(e) ? In(e) : e);
function ra(e) {
  on && Tt && ((e = be(e)), zu(e.dep || (e.dep = Gi())));
}
function oa(e, t) {
  e = be(e);
  const n = e.dep;
  n && ni(n);
}
function je(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return Yu(e, !1);
}
function Fr(e) {
  return Yu(e, !0);
}
function Yu(e, t) {
  return je(e) ? e : new zh(e, t);
}
class zh {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : be(t)),
      (this._value = n ? t : Nr(t));
  }
  get value() {
    return ra(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || zo(t) || On(t);
    (t = n ? t : be(t)),
      Lr(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Nr(t)), oa(this));
  }
}
function S(e) {
  return je(e) ? e.value : e;
}
const Uh = {
  get: (e, t, n) => S(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return je(o) && !je(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  }
};
function Zu(e) {
  return Dn(e) ? e : new Proxy(e, Uh);
}
class Kh {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: r } = t(
      () => ra(this),
      () => oa(this)
    );
    (this._get = n), (this._set = r);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Wh(e) {
  return new Kh(e);
}
function Vh(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = xt(e, n);
  return t;
}
class qh {
  constructor(t, n, r) {
    (this._object = t), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return mh(be(this._object), this._key);
  }
}
function xt(e, t, n) {
  const r = e[t];
  return je(r) ? r : new qh(e, t, n);
}
var Xu;
class Qh {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Xu] = !1),
      (this._dirty = !0),
      (this.effect = new Yi(t, () => {
        this._dirty || ((this._dirty = !0), oa(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = be(this);
    return (
      ra(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Xu = '__v_isReadonly';
function Jh(e, t, n = !1) {
  let r, o;
  const s = re(e);
  return s ? ((r = e), (o = Xe)) : ((r = e.get), (o = e.set)), new Qh(r, o, s || !o, n);
}
function Gh(e, ...t) {}
function sn(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    ir(s, t, n);
  }
  return o;
}
function mt(e, t, n, r) {
  if (re(e)) {
    const s = sn(e, t, n, r);
    return (
      s &&
        qi(s) &&
        s.catch((i) => {
          ir(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(mt(e[s], t, n, r));
  return o;
}
function ir(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      a = n;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, a) === !1) return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      sn(l, null, 10, [e, i, a]);
      return;
    }
  }
  Yh(e, n, o, r);
}
function Yh(e, t, n, r = !0) {
  console.error(e);
}
let Hr = !1,
  ri = !1;
const Je = [];
let At = 0;
const zn = [];
let Bt = null,
  wn = 0;
const ef = Promise.resolve();
let sa = null;
function yt(e) {
  const t = sa || ef;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zh(e) {
  let t = At + 1,
    n = Je.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    jr(Je[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function ls(e) {
  (!Je.length || !Je.includes(e, Hr && e.allowRecurse ? At + 1 : At)) &&
    (e.id == null ? Je.push(e) : Je.splice(Zh(e.id), 0, e), tf());
}
function tf() {
  !Hr && !ri && ((ri = !0), (sa = ef.then(rf)));
}
function Xh(e) {
  const t = Je.indexOf(e);
  t > At && Je.splice(t, 1);
}
function nf(e) {
  te(e) ? zn.push(...e) : (!Bt || !Bt.includes(e, e.allowRecurse ? wn + 1 : wn)) && zn.push(e),
    tf();
}
function ml(e, t = Hr ? At + 1 : 0) {
  for (; t < Je.length; t++) {
    const n = Je[t];
    n && n.pre && (Je.splice(t, 1), t--, n());
  }
}
function Uo(e) {
  if (zn.length) {
    const t = [...new Set(zn)];
    if (((zn.length = 0), Bt)) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, Bt.sort((n, r) => jr(n) - jr(r)), wn = 0; wn < Bt.length; wn++) Bt[wn]();
    (Bt = null), (wn = 0);
  }
}
const jr = (e) => (e.id == null ? 1 / 0 : e.id),
  eg = (e, t) => {
    const n = jr(e) - jr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function rf(e) {
  (ri = !1), (Hr = !0), Je.sort(eg);
  const t = Xe;
  try {
    for (At = 0; At < Je.length; At++) {
      const n = Je[At];
      n && n.active !== !1 && sn(n, null, 14);
    }
  } finally {
    (At = 0), (Je.length = 0), Uo(), (Hr = !1), (sa = null), (Je.length || zn.length) && rf();
  }
}
function tg(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Oe;
  let o = n;
  const s = t.startsWith('update:'),
    i = s && t.slice(7);
  if (i && i in r) {
    const u = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: f, trim: d } = r[u] || Oe;
    d && (o = n.map((v) => (_e(v) ? v.trim() : v))), f && (o = n.map(uh));
  }
  let a,
    l = r[(a = Io(t))] || r[(a = Io(Mt(t)))];
  !l && s && (l = r[(a = Io(rr(t)))]), l && mt(l, e, 6, o);
  const c = r[a + 'Once'];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), mt(c, e, 6, o);
  }
}
function of(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    a = !1;
  if (!re(e)) {
    const l = (c) => {
      const u = of(c, t, !0);
      u && ((a = !0), qe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !s && !a
    ? (Pe(e) && r.set(e, null), null)
    : (te(s) ? s.forEach((l) => (i[l] = null)) : qe(i, s), Pe(e) && r.set(e, i), i);
}
function cs(e, t) {
  return !e || !Yr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, rr(t)) || ve(e, t));
}
let We = null,
  us = null;
function Ko(e) {
  const t = We;
  return (We = e), (us = (e && e.type.__scopeId) || null), t;
}
function ng(e) {
  us = e;
}
function rg() {
  us = null;
}
function Re(e, t = We, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && Ol(-1);
    const s = Ko(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ko(s), r._d && Ol(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function xs(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: v,
    ctx: p,
    inheritAttrs: h
  } = e;
  let _, g;
  const m = Ko(e);
  try {
    if (n.shapeFlag & 4) {
      const E = o || r;
      (_ = ht(u.call(E, E, f, s, v, d, p))), (g = l);
    } else {
      const E = t;
      (_ = ht(E.length > 1 ? E(s, { attrs: l, slots: a, emit: c }) : E(s, null))),
        (g = t.props ? l : sg(l));
    }
  } catch (E) {
    (Sr.length = 0), ir(E, e, 1), (_ = ae(Ge));
  }
  let b = _;
  if (g && h !== !1) {
    const E = Object.keys(g),
      { shapeFlag: P } = b;
    E.length && P & 7 && (i && E.some(Ki) && (g = ig(g, i)), (b = $t(b, g)));
  }
  return (
    n.dirs && ((b = $t(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (_ = b),
    Ko(m),
    _
  );
}
function og(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (cn(r)) {
      if (r.type !== Ge || r.children === 'v-if') {
        if (t) return;
        t = r;
      }
    } else return;
  }
  return t;
}
const sg = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || Yr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  ig = (e, t) => {
    const n = {};
    for (const r in e) (!Ki(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function ag(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: a, patchFlag: l } = t,
    c = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? vl(r, i, c) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (i[d] !== r[d] && !cs(c, d)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? vl(r, i, c) : !0) : !!i;
  return !1;
}
function vl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !cs(n, s)) return !0;
  }
  return !1;
}
function ia({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const sf = (e) => e.__isSuspense,
  lg = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, o, s, i, a, l, c) {
      e == null ? cg(t, n, r, o, s, i, a, l, c) : ug(e, t, n, r, o, i, a, l, c);
    },
    hydrate: fg,
    create: aa,
    normalize: dg
  },
  af = lg;
function Br(e, t) {
  const n = e.props && e.props[t];
  re(n) && n();
}
function cg(e, t, n, r, o, s, i, a, l) {
  const {
      p: c,
      o: { createElement: u }
    } = l,
    f = u('div'),
    d = (e.suspense = aa(e, o, r, t, f, n, s, i, a, l));
  c(null, (d.pendingBranch = e.ssContent), f, null, r, d, s, i),
    d.deps > 0
      ? (Br(e, 'onPending'),
        Br(e, 'onFallback'),
        c(null, e.ssFallback, t, n, r, null, s, i),
        Un(d, e.ssFallback))
      : d.resolve();
}
function ug(e, t, n, r, o, s, i, a, { p: l, um: c, o: { createElement: u } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const d = t.ssContent,
    v = t.ssFallback,
    { activeBranch: p, pendingBranch: h, isInFallback: _, isHydrating: g } = f;
  if (h)
    (f.pendingBranch = d),
      Ct(d, h)
        ? (l(h, d, f.hiddenContainer, null, o, f, s, i, a),
          f.deps <= 0 ? f.resolve() : _ && (l(p, v, n, r, o, null, s, i, a), Un(f, v)))
        : (f.pendingId++,
          g ? ((f.isHydrating = !1), (f.activeBranch = h)) : c(h, o, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = u('div')),
          _
            ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a),
              f.deps <= 0 ? f.resolve() : (l(p, v, n, r, o, null, s, i, a), Un(f, v)))
            : p && Ct(d, p)
            ? (l(p, d, n, r, o, f, s, i, a), f.resolve(!0))
            : (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
  else if (p && Ct(d, p)) l(p, d, n, r, o, f, s, i, a), Un(f, d);
  else if (
    (Br(t, 'onPending'),
    (f.pendingBranch = d),
    f.pendingId++,
    l(null, d, f.hiddenContainer, null, o, f, s, i, a),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: m, pendingId: b } = f;
    m > 0
      ? setTimeout(() => {
          f.pendingId === b && f.fallback(v);
        }, m)
      : m === 0 && f.fallback(v);
  }
}
function aa(e, t, n, r, o, s, i, a, l, c, u = !1) {
  const {
      p: f,
      m: d,
      um: v,
      n: p,
      o: { parentNode: h, remove: _ }
    } = c,
    g = e.props ? Fu(e.props.timeout) : void 0,
    m = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: i,
      container: r,
      hiddenContainer: o,
      anchor: s,
      deps: 0,
      pendingId: 0,
      timeout: typeof g == 'number' ? g : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(b = !1) {
        const {
          vnode: E,
          activeBranch: P,
          pendingBranch: C,
          pendingId: x,
          effects: T,
          parentComponent: M,
          container: I
        } = m;
        if (m.isHydrating) m.isHydrating = !1;
        else if (!b) {
          const N = P && C.transition && C.transition.mode === 'out-in';
          N &&
            (P.transition.afterLeave = () => {
              x === m.pendingId && d(C, I, H, 0);
            });
          let { anchor: H } = m;
          P && ((H = p(P)), v(P, M, m, !0)), N || d(C, I, H, 0);
        }
        Un(m, C), (m.pendingBranch = null), (m.isInFallback = !1);
        let A = m.parent,
          O = !1;
        for (; A; ) {
          if (A.pendingBranch) {
            A.effects.push(...T), (O = !0);
            break;
          }
          A = A.parent;
        }
        O || nf(T), (m.effects = []), Br(E, 'onResolve');
      },
      fallback(b) {
        if (!m.pendingBranch) return;
        const { vnode: E, activeBranch: P, parentComponent: C, container: x, isSVG: T } = m;
        Br(E, 'onFallback');
        const M = p(P),
          I = () => {
            m.isInFallback && (f(null, b, x, M, C, null, T, a, l), Un(m, b));
          },
          A = b.transition && b.transition.mode === 'out-in';
        A && (P.transition.afterLeave = I), (m.isInFallback = !0), v(P, C, null, !0), A || I();
      },
      move(b, E, P) {
        m.activeBranch && d(m.activeBranch, b, E, P), (m.container = b);
      },
      next() {
        return m.activeBranch && p(m.activeBranch);
      },
      registerDep(b, E) {
        const P = !!m.pendingBranch;
        P && m.deps++;
        const C = b.vnode.el;
        b.asyncDep
          .catch((x) => {
            ir(x, b, 0);
          })
          .then((x) => {
            if (b.isUnmounted || m.isUnmounted || m.pendingId !== b.suspenseId) return;
            b.asyncResolved = !0;
            const { vnode: T } = b;
            ui(b, x, !1), C && (T.el = C);
            const M = !C && b.subTree.el;
            E(b, T, h(C || b.subTree.el), C ? null : p(b.subTree), m, i, l),
              M && _(M),
              ia(b, T.el),
              P && --m.deps === 0 && m.resolve();
          });
      },
      unmount(b, E) {
        (m.isUnmounted = !0),
          m.activeBranch && v(m.activeBranch, n, b, E),
          m.pendingBranch && v(m.pendingBranch, n, b, E);
      }
    };
  return m;
}
function fg(e, t, n, r, o, s, i, a, l) {
  const c = (t.suspense = aa(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      o,
      s,
      i,
      a,
      !0
    )),
    u = l(e, (c.pendingBranch = t.ssContent), n, c, s, i);
  return c.deps === 0 && c.resolve(), u;
}
function dg(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = yl(r ? n.default : n)), (e.ssFallback = r ? yl(n.fallback) : ae(Ge));
}
function yl(e) {
  let t;
  if (re(e)) {
    const n = Vn && e._c;
    n && ((e._d = !1), Y()), (e = e()), n && ((e._d = !0), (t = gt), Af());
  }
  return (
    te(e) && (e = og(e)),
    (e = ht(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function lf(e, t) {
  t && t.pendingBranch ? (te(e) ? t.effects.push(...e) : t.effects.push(e)) : nf(e);
}
function Un(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e,
    o = (n.el = t.el);
  r && r.subTree === n && ((r.vnode.el = o), ia(r, o));
}
function et(e, t) {
  if (Le) {
    let n = Le.provides;
    const r = Le.parent && Le.parent.provides;
    r === n && (n = Le.provides = Object.create(r)), (n[e] = t);
  }
}
function Ae(e, t, n = !1) {
  const r = Le || We;
  if (r) {
    const o =
      r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && re(t) ? t.call(r.proxy) : t;
  }
}
function la(e, t) {
  return fs(e, null, t);
}
function pg(e, t) {
  return fs(e, null, { flush: 'post' });
}
const uo = {};
function fe(e, t, n) {
  return fs(e, t, n);
}
function fs(e, t, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = Oe) {
  const a = Ji() === (Le == null ? void 0 : Le.scope) ? Le : null;
  let l,
    c = !1,
    u = !1;
  if (
    (je(e)
      ? ((l = () => e.value), (c = zo(e)))
      : Dn(e)
      ? ((l = () => e), (r = !0))
      : te(e)
      ? ((u = !0),
        (c = e.some((b) => Dn(b) || zo(b))),
        (l = () =>
          e.map((b) => {
            if (je(b)) return b.value;
            if (Dn(b)) return Tn(b);
            if (re(b)) return sn(b, a, 2);
          })))
      : re(e)
      ? t
        ? (l = () => sn(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), mt(e, a, 3, [d]);
          })
      : (l = Xe),
    t && r)
  ) {
    const b = l;
    l = () => Tn(b());
  }
  let f,
    d = (b) => {
      f = g.onStop = () => {
        sn(b, a, 4);
      };
    },
    v;
  if (Qn)
    if (((d = Xe), t ? n && mt(t, a, 3, [l(), u ? [] : void 0, d]) : l(), o === 'sync')) {
      const b = im();
      v = b.__watcherHandles || (b.__watcherHandles = []);
    } else return Xe;
  let p = u ? new Array(e.length).fill(uo) : uo;
  const h = () => {
    if (g.active)
      if (t) {
        const b = g.run();
        (r || c || (u ? b.some((E, P) => Lr(E, p[P])) : Lr(b, p))) &&
          (f && f(), mt(t, a, 3, [b, p === uo ? void 0 : u && p[0] === uo ? [] : p, d]), (p = b));
      } else g.run();
  };
  h.allowRecurse = !!t;
  let _;
  o === 'sync'
    ? (_ = h)
    : o === 'post'
    ? (_ = () => Ke(h, a && a.suspense))
    : ((h.pre = !0), a && (h.id = a.uid), (_ = () => ls(h)));
  const g = new Yi(l, _);
  t ? (n ? h() : (p = g.run())) : o === 'post' ? Ke(g.run.bind(g), a && a.suspense) : g.run();
  const m = () => {
    g.stop(), a && a.scope && Wi(a.scope.effects, g);
  };
  return v && v.push(m), m;
}
function hg(e, t, n) {
  const r = this.proxy,
    o = _e(e) ? (e.includes('.') ? cf(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  re(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = Le;
  un(this);
  const a = fs(o, s.bind(r), n);
  return i ? un(i) : an(), a;
}
function cf(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function Tn(e, t) {
  if (!Pe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), je(e))) Tn(e.value, t);
  else if (te(e)) for (let n = 0; n < e.length; n++) Tn(e[n], t);
  else if ($u(e) || Bn(e))
    e.forEach((n) => {
      Tn(n, t);
    });
  else if (Nu(e)) for (const n in e) Tn(e[n], t);
  return e;
}
function gg() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    De(() => {
      e.isMounted = !0;
    }),
    Ye(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const pt = [Function, Array],
  mg = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: pt,
      onEnter: pt,
      onAfterEnter: pt,
      onEnterCancelled: pt,
      onBeforeLeave: pt,
      onLeave: pt,
      onAfterLeave: pt,
      onLeaveCancelled: pt,
      onBeforeAppear: pt,
      onAppear: pt,
      onAfterAppear: pt,
      onAppearCancelled: pt
    },
    setup(e, { slots: t }) {
      const n = ze(),
        r = gg();
      let o;
      return () => {
        const s = t.default && df(t.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          for (const h of s)
            if (h.type !== Ge) {
              i = h;
              break;
            }
        }
        const a = be(e),
          { mode: l } = a;
        if (r.isLeaving) return Ps(i);
        const c = _l(i);
        if (!c) return Ps(i);
        const u = oi(c, a, r, n);
        Wo(c, u);
        const f = n.subTree,
          d = f && _l(f);
        let v = !1;
        const { getTransitionKey: p } = c.type;
        if (p) {
          const h = p();
          o === void 0 ? (o = h) : h !== o && ((o = h), (v = !0));
        }
        if (d && d.type !== Ge && (!Ct(c, d) || v)) {
          const h = oi(d, a, r, n);
          if ((Wo(d, h), l === 'out-in'))
            return (
              (r.isLeaving = !0),
              (h.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Ps(i)
            );
          l === 'in-out' &&
            c.type !== Ge &&
            (h.delayLeave = (_, g, m) => {
              const b = ff(r, d);
              (b[String(d.key)] = d),
                (_._leaveCb = () => {
                  g(), (_._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = m);
            });
        }
        return i;
      };
    }
  },
  uf = mg;
function ff(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function oi(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: d,
      onAfterLeave: v,
      onLeaveCancelled: p,
      onBeforeAppear: h,
      onAppear: _,
      onAfterAppear: g,
      onAppearCancelled: m
    } = t,
    b = String(e.key),
    E = ff(n, e),
    P = (T, M) => {
      T && mt(T, r, 9, M);
    },
    C = (T, M) => {
      const I = M[1];
      P(T, M), te(T) ? T.every((A) => A.length <= 1) && I() : T.length <= 1 && I();
    },
    x = {
      mode: s,
      persisted: i,
      beforeEnter(T) {
        let M = a;
        if (!n.isMounted)
          if (o) M = h || a;
          else return;
        T._leaveCb && T._leaveCb(!0);
        const I = E[b];
        I && Ct(e, I) && I.el._leaveCb && I.el._leaveCb(), P(M, [T]);
      },
      enter(T) {
        let M = l,
          I = c,
          A = u;
        if (!n.isMounted)
          if (o) (M = _ || l), (I = g || c), (A = m || u);
          else return;
        let O = !1;
        const N = (T._enterCb = (H) => {
          O ||
            ((O = !0),
            H ? P(A, [T]) : P(I, [T]),
            x.delayedLeave && x.delayedLeave(),
            (T._enterCb = void 0));
        });
        M ? C(M, [T, N]) : N();
      },
      leave(T, M) {
        const I = String(e.key);
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return M();
        P(f, [T]);
        let A = !1;
        const O = (T._leaveCb = (N) => {
          A ||
            ((A = !0),
            M(),
            N ? P(p, [T]) : P(v, [T]),
            (T._leaveCb = void 0),
            E[I] === e && delete E[I]);
        });
        (E[I] = e), d ? C(d, [T, O]) : O();
      },
      clone(T) {
        return oi(T, t, n, r);
      }
    };
  return x;
}
function Ps(e) {
  if (Xr(e)) return (e = $t(e)), (e.children = null), e;
}
function _l(e) {
  return Xr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Wo(e, t) {
  e.shapeFlag & 6 && e.component
    ? Wo(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function df(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === $e
      ? (i.patchFlag & 128 && o++, (r = r.concat(df(i.children, t, a))))
      : (t || i.type !== Ge) && r.push(a != null ? $t(i, { key: a }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function se(e) {
  return re(e) ? { setup: e, name: e.name } : e;
}
const Pn = (e) => !!e.type.__asyncLoader;
function le(e) {
  re(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    timeout: s,
    suspensible: i = !0,
    onError: a
  } = e;
  let l = null,
    c,
    u = 0;
  const f = () => (u++, (l = null), d()),
    d = () => {
      let v;
      return (
        l ||
        (v = l =
          t()
            .catch((p) => {
              if (((p = p instanceof Error ? p : new Error(String(p))), a))
                return new Promise((h, _) => {
                  a(
                    p,
                    () => h(f()),
                    () => _(p),
                    u + 1
                  );
                });
              throw p;
            })
            .then((p) =>
              v !== l && l
                ? l
                : (p && (p.__esModule || p[Symbol.toStringTag] === 'Module') && (p = p.default),
                  (c = p),
                  p)
            ))
      );
    };
  return se({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const v = Le;
      if (c) return () => Ss(c, v);
      const p = (m) => {
        (l = null), ir(m, v, 13, !r);
      };
      if ((i && v.suspense) || Qn)
        return d()
          .then((m) => () => Ss(m, v))
          .catch((m) => (p(m), () => (r ? ae(r, { error: m }) : null)));
      const h = J(!1),
        _ = J(),
        g = J(!!o);
      return (
        o &&
          setTimeout(() => {
            g.value = !1;
          }, o),
        s != null &&
          setTimeout(() => {
            if (!h.value && !_.value) {
              const m = new Error(`Async component timed out after ${s}ms.`);
              p(m), (_.value = m);
            }
          }, s),
        d()
          .then(() => {
            (h.value = !0), v.parent && Xr(v.parent.vnode) && ls(v.parent.update);
          })
          .catch((m) => {
            p(m), (_.value = m);
          }),
        () => {
          if (h.value && c) return Ss(c, v);
          if (_.value && r) return ae(r, { error: _.value });
          if (n && !g.value) return ae(n);
        }
      );
    }
  });
}
function Ss(e, t) {
  const { ref: n, props: r, children: o, ce: s } = t.vnode,
    i = ae(e, r, o);
  return (i.ref = n), (i.ce = s), delete t.vnode.ce, i;
}
const Xr = (e) => e.type.__isKeepAlive,
  vg = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(e, { slots: t }) {
      const n = ze(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const m = t.default && t.default();
          return m && m.length === 1 ? m[0] : m;
        };
      const o = new Map(),
        s = new Set();
      let i = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: f }
          }
        } = r,
        d = f('div');
      (r.activate = (m, b, E, P, C) => {
        const x = m.component;
        c(m, b, E, 0, a),
          l(x.vnode, m, b, E, x, a, P, m.slotScopeIds, C),
          Ke(() => {
            (x.isDeactivated = !1), x.a && Cr(x.a);
            const T = m.props && m.props.onVnodeMounted;
            T && rt(T, x.parent, m);
          }, a);
      }),
        (r.deactivate = (m) => {
          const b = m.component;
          c(m, d, null, 1, a),
            Ke(() => {
              b.da && Cr(b.da);
              const E = m.props && m.props.onVnodeUnmounted;
              E && rt(E, b.parent, m), (b.isDeactivated = !0);
            }, a);
        });
      function v(m) {
        Os(m), u(m, n, a, !0);
      }
      function p(m) {
        o.forEach((b, E) => {
          const P = fi(b.type);
          P && (!m || !m(P)) && h(E);
        });
      }
      function h(m) {
        const b = o.get(m);
        !i || !Ct(b, i) ? v(b) : i && Os(i), o.delete(m), s.delete(m);
      }
      fe(
        () => [e.include, e.exclude],
        ([m, b]) => {
          m && p((E) => wr(m, E)), b && p((E) => !wr(b, E));
        },
        { flush: 'post', deep: !0 }
      );
      let _ = null;
      const g = () => {
        _ != null && o.set(_, ks(n.subTree));
      };
      return (
        De(g),
        gf(g),
        Ye(() => {
          o.forEach((m) => {
            const { subTree: b, suspense: E } = n,
              P = ks(b);
            if (m.type === P.type && m.key === P.key) {
              Os(P);
              const C = P.component.da;
              C && Ke(C, E);
              return;
            }
            v(m);
          });
        }),
        () => {
          if (((_ = null), !t.default)) return null;
          const m = t.default(),
            b = m[0];
          if (m.length > 1) return (i = null), m;
          if (!cn(b) || (!(b.shapeFlag & 4) && !(b.shapeFlag & 128))) return (i = null), b;
          let E = ks(b);
          const P = E.type,
            C = fi(Pn(E) ? E.type.__asyncResolved || {} : P),
            { include: x, exclude: T, max: M } = e;
          if ((x && (!C || !wr(x, C))) || (T && C && wr(T, C))) return (i = E), b;
          const I = E.key == null ? P : E.key,
            A = o.get(I);
          return (
            E.el && ((E = $t(E)), b.shapeFlag & 128 && (b.ssContent = E)),
            (_ = I),
            A
              ? ((E.el = A.el),
                (E.component = A.component),
                E.transition && Wo(E, E.transition),
                (E.shapeFlag |= 512),
                s.delete(I),
                s.add(I))
              : (s.add(I), M && s.size > parseInt(M, 10) && h(s.values().next().value)),
            (E.shapeFlag |= 256),
            (i = E),
            sf(b.type) ? b : E
          );
        }
      );
    }
  },
  yg = vg;
function wr(e, t) {
  return te(e)
    ? e.some((n) => wr(n, t))
    : _e(e)
    ? e.split(',').includes(t)
    : ih(e)
    ? e.test(t)
    : !1;
}
function pf(e, t) {
  hf(e, 'a', t);
}
function ca(e, t) {
  hf(e, 'da', t);
}
function hf(e, t, n = Le) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((ds(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; ) Xr(o.parent.vnode) && _g(r, t, n, o), (o = o.parent);
  }
}
function _g(e, t, n, r) {
  const o = ds(t, e, r, !0);
  Dr(() => {
    Wi(r[t], o);
  }, n);
}
function Os(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function ks(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ds(e, t, n = Le, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          or(), un(n);
          const a = mt(t, n, e, i);
          return an(), sr(), a;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const Vt =
    (e) =>
    (t, n = Le) =>
      (!Qn || e === 'sp') && ds(e, (...r) => t(...r), n),
  ua = Vt('bm'),
  De = Vt('m'),
  bg = Vt('bu'),
  gf = Vt('u'),
  Ye = Vt('bum'),
  Dr = Vt('um'),
  wg = Vt('sp'),
  Eg = Vt('rtg'),
  Tg = Vt('rtc');
function mf(e, t = Le) {
  ds('ec', e, t);
}
function ps(e, t) {
  const n = We;
  if (n === null) return e;
  const r = gs(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, a, l, c = Oe] = t[s];
    i &&
      (re(i) && (i = { mounted: i, updated: i }),
      i.deep && Tn(a),
      o.push({ dir: i, instance: r, value: a, oldValue: void 0, arg: l, modifiers: c }));
  }
  return e;
}
function kt(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (or(), mt(l, n, 8, [e.el, a, e, t]), sr());
  }
}
const fa = 'components';
function vf(e, t) {
  return _f(fa, e, !0, t) || e;
}
const yf = Symbol();
function da(e) {
  return _e(e) ? _f(fa, e, !1) || e : e || yf;
}
function _f(e, t, n = !0, r = !1) {
  const o = We || Le;
  if (o) {
    const s = o.type;
    if (e === fa) {
      const a = fi(s, !1);
      if (a && (a === t || a === Mt(t) || a === is(Mt(t)))) return s;
    }
    const i = bl(o[e] || s[e], t) || bl(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function bl(e, t) {
  return e && (e[t] || e[Mt(t)] || e[is(Mt(t))]);
}
function pa(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (te(e) || _e(e)) {
    o = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++) o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (Pe(e))
    if (e[Symbol.iterator]) o = Array.from(e, (i, a) => t(i, a, void 0, s && s[a]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const c = i[a];
        o[a] = t(e[c], c, a, s && s[a]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function He(e, t, n = {}, r, o) {
  if (We.isCE || (We.parent && Pn(We.parent) && We.parent.isCE))
    return t !== 'default' && (n.name = t), ae('slot', n, r && r());
  let s = e[t];
  s && s._c && (s._d = !1), Y();
  const i = s && bf(s(n)),
    a = Ie(
      $e,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']), s && s._c && (s._d = !0), a;
}
function bf(e) {
  return e.some((t) => (cn(t) ? !(t.type === Ge || (t.type === $e && !bf(t.children))) : !0))
    ? e
    : null;
}
function Cg(e, t) {
  const n = {};
  for (const r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : Io(r)] = e[r];
  return n;
}
const si = (e) => (e ? (Mf(e) ? gs(e) || e.proxy : si(e.parent)) : null),
  xr = qe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => si(e.parent),
    $root: (e) => si(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ha(e),
    $forceUpdate: (e) => e.f || (e.f = () => ls(e.update)),
    $nextTick: (e) => e.n || (e.n = yt.bind(e.proxy)),
    $watch: (e) => hg.bind(e)
  }),
  As = (e, t) => e !== Oe && !e.__isScriptSetup && ve(e, t),
  xg = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: a,
        appContext: l
      } = e;
      let c;
      if (t[0] !== '$') {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (As(r, t)) return (i[t] = 1), r[t];
          if (o !== Oe && ve(o, t)) return (i[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && ve(c, t)) return (i[t] = 3), s[t];
          if (n !== Oe && ve(n, t)) return (i[t] = 4), n[t];
          ii && (i[t] = 0);
        }
      }
      const u = xr[t];
      let f, d;
      if (u) return t === '$attrs' && at(e, 'get', t), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== Oe && ve(n, t)) return (i[t] = 4), n[t];
      if (((d = l.config.globalProperties), ve(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return As(o, t)
        ? ((o[t] = n), !0)
        : r !== Oe && ve(r, t)
        ? ((r[t] = n), !0)
        : ve(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== Oe && ve(e, i)) ||
        As(t, i) ||
        ((a = s[0]) && ve(a, i)) ||
        ve(r, i) ||
        ve(xr, i) ||
        ve(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : ve(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    }
  };
let ii = !0;
function Pg(e) {
  const t = ha(e),
    n = e.proxy,
    r = e.ctx;
  (ii = !1), t.beforeCreate && wl(t.beforeCreate, e, 'bc');
  const {
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: v,
    updated: p,
    activated: h,
    deactivated: _,
    beforeDestroy: g,
    beforeUnmount: m,
    destroyed: b,
    unmounted: E,
    render: P,
    renderTracked: C,
    renderTriggered: x,
    errorCaptured: T,
    serverPrefetch: M,
    expose: I,
    inheritAttrs: A,
    components: O,
    directives: N,
    filters: H
  } = t;
  if ((c && Sg(c, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const B in i) {
      const ee = i[B];
      re(ee) && (r[B] = ee.bind(n));
    }
  if (o) {
    const B = o.call(n, n);
    Pe(B) && (e.data = lt(B));
  }
  if (((ii = !0), s))
    for (const B in s) {
      const ee = s[B],
        ye = re(ee) ? ee.bind(n, n) : re(ee.get) ? ee.get.bind(n, n) : Xe,
        ue = !re(ee) && re(ee.set) ? ee.set.bind(n) : Xe,
        pe = j({ get: ye, set: ue });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => pe.value,
        set: (he) => (pe.value = he)
      });
    }
  if (a) for (const B in a) wf(a[B], r, n, B);
  if (l) {
    const B = re(l) ? l.call(n) : l;
    Reflect.ownKeys(B).forEach((ee) => {
      et(ee, B[ee]);
    });
  }
  u && wl(u, e, 'c');
  function q(B, ee) {
    te(ee) ? ee.forEach((ye) => B(ye.bind(n))) : ee && B(ee.bind(n));
  }
  if (
    (q(ua, f),
    q(De, d),
    q(bg, v),
    q(gf, p),
    q(pf, h),
    q(ca, _),
    q(mf, T),
    q(Tg, C),
    q(Eg, x),
    q(Ye, m),
    q(Dr, E),
    q(wg, M),
    te(I))
  )
    if (I.length) {
      const B = e.exposed || (e.exposed = {});
      I.forEach((ee) => {
        Object.defineProperty(B, ee, { get: () => n[ee], set: (ye) => (n[ee] = ye) });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === Xe && (e.render = P),
    A != null && (e.inheritAttrs = A),
    O && (e.components = O),
    N && (e.directives = N);
}
function Sg(e, t, n = Xe, r = !1) {
  te(e) && (e = ai(e));
  for (const o in e) {
    const s = e[o];
    let i;
    Pe(s)
      ? 'default' in s
        ? (i = Ae(s.from || o, s.default, !0))
        : (i = Ae(s.from || o))
      : (i = Ae(s)),
      je(i) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (a) => (i.value = a)
          })
        : (t[o] = i);
  }
}
function wl(e, t, n) {
  mt(te(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function wf(e, t, n, r) {
  const o = r.includes('.') ? cf(n, r) : () => n[r];
  if (_e(e)) {
    const s = t[e];
    re(s) && fe(o, s);
  } else if (re(e)) fe(o, e.bind(n));
  else if (Pe(e))
    if (te(e)) e.forEach((s) => wf(s, t, n, r));
    else {
      const s = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(s) && fe(o, s, e);
    }
}
function ha(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    a = s.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !o.length && !n && !r
      ? (l = t)
      : ((l = {}), o.length && o.forEach((c) => Vo(l, c, i, !0)), Vo(l, t, i)),
    Pe(t) && s.set(t, l),
    l
  );
}
function Vo(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Vo(e, s, n, !0), o && o.forEach((i) => Vo(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = Og[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Og = {
  data: El,
  props: bn,
  emits: bn,
  methods: bn,
  computed: bn,
  beforeCreate: Ze,
  created: Ze,
  beforeMount: Ze,
  mounted: Ze,
  beforeUpdate: Ze,
  updated: Ze,
  beforeDestroy: Ze,
  beforeUnmount: Ze,
  destroyed: Ze,
  unmounted: Ze,
  activated: Ze,
  deactivated: Ze,
  errorCaptured: Ze,
  serverPrefetch: Ze,
  components: bn,
  directives: bn,
  watch: Ag,
  provide: El,
  inject: kg
};
function El(e, t) {
  return t
    ? e
      ? function () {
          return qe(re(e) ? e.call(this, this) : e, re(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function kg(e, t) {
  return bn(ai(e), ai(t));
}
function ai(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ze(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bn(e, t) {
  return e ? qe(qe(Object.create(null), e), t) : t;
}
function Ag(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = qe(Object.create(null), e);
  for (const r in t) n[r] = Ze(e[r], t[r]);
  return n;
}
function Ig(e, t, n, r = !1) {
  const o = {},
    s = {};
  Bo(s, hs, 1), (e.propsDefaults = Object.create(null)), Ef(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : Dh(o)) : e.type.props ? (e.props = o) : (e.props = s), (e.attrs = s);
}
function Rg(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i }
    } = e,
    a = be(o),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (cs(e.emitsOptions, d)) continue;
        const v = t[d];
        if (l)
          if (ve(s, d)) v !== s[d] && ((s[d] = v), (c = !0));
          else {
            const p = Mt(d);
            o[p] = li(l, a, p, v, e, !1);
          }
        else v !== s[d] && ((s[d] = v), (c = !0));
      }
    }
  } else {
    Ef(e, t, o, s) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!ve(t, f) && ((u = rr(f)) === f || !ve(t, u)))) &&
        (l
          ? n && (n[f] !== void 0 || n[u] !== void 0) && (o[f] = li(l, a, f, void 0, e, !0))
          : delete o[f]);
    if (s !== a) for (const f in s) (!t || !ve(t, f)) && (delete s[f], (c = !0));
  }
  c && Kt(e, 'set', '$attrs');
}
function Ef(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (Tr(l)) continue;
      const c = t[l];
      let u;
      o && ve(o, (u = Mt(l)))
        ? !s || !s.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : cs(e.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
    }
  if (s) {
    const l = be(n),
      c = a || Oe;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = li(o, l, f, c[f], e, !ve(c, f));
    }
  }
  return i;
}
function li(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = ve(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && re(l)) {
        const { propsDefaults: c } = o;
        n in c ? (r = c[n]) : (un(o), (r = c[n] = l.call(null, t)), an());
      } else r = l;
    }
    i[0] && (s && !a ? (r = !1) : i[1] && (r === '' || r === rr(n)) && (r = !0));
  }
  return r;
}
function Tf(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!re(e)) {
    const u = (f) => {
      l = !0;
      const [d, v] = Tf(f, t, !0);
      qe(i, d), v && a.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l) return Pe(e) && r.set(e, jn), jn;
  if (te(s))
    for (let u = 0; u < s.length; u++) {
      const f = Mt(s[u]);
      Tl(f) && (i[f] = Oe);
    }
  else if (s)
    for (const u in s) {
      const f = Mt(u);
      if (Tl(f)) {
        const d = s[u],
          v = (i[f] = te(d) || re(d) ? { type: d } : Object.assign({}, d));
        if (v) {
          const p = Pl(Boolean, v.type),
            h = Pl(String, v.type);
          (v[0] = p > -1), (v[1] = h < 0 || p < h), (p > -1 || ve(v, 'default')) && a.push(f);
        }
      }
    }
  const c = [i, a];
  return Pe(e) && r.set(e, c), c;
}
function Tl(e) {
  return e[0] !== '$';
}
function Cl(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? 'null' : '';
}
function xl(e, t) {
  return Cl(e) === Cl(t);
}
function Pl(e, t) {
  return te(t) ? t.findIndex((n) => xl(n, e)) : re(t) && xl(t, e) ? 0 : -1;
}
const Cf = (e) => e[0] === '_' || e === '$stable',
  ga = (e) => (te(e) ? e.map(ht) : [ht(e)]),
  Mg = (e, t, n) => {
    if (t._n) return t;
    const r = Re((...o) => ga(t(...o)), n);
    return (r._c = !1), r;
  },
  xf = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Cf(o)) continue;
      const s = e[o];
      if (re(s)) t[o] = Mg(o, s, r);
      else if (s != null) {
        const i = ga(s);
        t[o] = () => i;
      }
    }
  },
  Pf = (e, t) => {
    const n = ga(t);
    e.slots.default = () => n;
  },
  $g = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = be(t)), Bo(t, '_', n)) : xf(t, (e.slots = {}));
    } else (e.slots = {}), t && Pf(e, t);
    Bo(e.slots, hs, 1);
  },
  Lg = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = Oe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (s = !1)
          : (qe(o, t), !n && a === 1 && delete o._)
        : ((s = !t.$stable), xf(t, o)),
        (i = t);
    } else t && (Pf(e, t), (i = { default: 1 }));
    if (s) for (const a in o) !Cf(a) && !(a in i) && delete o[a];
  };
function Sf() {
  return {
    app: null,
    config: {
      isNativeTag: rh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let Ng = 0;
function Fg(e, t) {
  return function (r, o = null) {
    re(r) || (r = Object.assign({}, r)), o != null && !Pe(o) && (o = null);
    const s = Sf(),
      i = new Set();
    let a = !1;
    const l = (s.app = {
      _uid: Ng++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Nf,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && re(c.install) ? (i.add(c), c.install(l, ...u)) : re(c) && (i.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((s.components[c] = u), l) : s.components[c];
      },
      directive(c, u) {
        return u ? ((s.directives[c] = u), l) : s.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const d = ae(r, o);
          return (
            (d.appContext = s),
            u && t ? t(d, c) : e(d, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            gs(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (s.provides[c] = u), l;
      }
    });
    return l;
  };
}
function qo(e, t, n, r, o = !1) {
  if (te(e)) {
    e.forEach((d, v) => qo(d, t && (te(t) ? t[v] : t), n, r, o));
    return;
  }
  if (Pn(r) && !o) return;
  const s = r.shapeFlag & 4 ? gs(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === Oe ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (_e(c) ? ((u[c] = null), ve(f, c) && (f[c] = null)) : je(c) && (c.value = null)),
    re(l))
  )
    sn(l, a, 12, [i, u]);
  else {
    const d = _e(l),
      v = je(l);
    if (d || v) {
      const p = () => {
        if (e.f) {
          const h = d ? (ve(f, l) ? f[l] : u[l]) : l.value;
          o
            ? te(h) && Wi(h, s)
            : te(h)
            ? h.includes(s) || h.push(s)
            : d
            ? ((u[l] = [s]), ve(f, l) && (f[l] = u[l]))
            : ((l.value = [s]), e.k && (u[e.k] = l.value));
        } else d ? ((u[l] = i), ve(f, l) && (f[l] = i)) : v && ((l.value = i), e.k && (u[e.k] = i));
      };
      i ? ((p.id = -1), Ke(p, n)) : p();
    }
  }
}
let Jt = !1;
const fo = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  po = (e) => e.nodeType === 8;
function Hg(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: o,
        nextSibling: s,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: c
      }
    } = e,
    u = (g, m) => {
      if (!m.hasChildNodes()) {
        n(null, g, m), Uo(), (m._vnode = g);
        return;
      }
      (Jt = !1),
        f(m.firstChild, g, null, null, null),
        Uo(),
        (m._vnode = g),
        Jt && console.error('Hydration completed but contains mismatches.');
    },
    f = (g, m, b, E, P, C = !1) => {
      const x = po(g) && g.data === '[',
        T = () => h(g, m, b, E, P, x),
        { type: M, ref: I, shapeFlag: A, patchFlag: O } = m;
      let N = g.nodeType;
      (m.el = g), O === -2 && ((C = !1), (m.dynamicChildren = null));
      let H = null;
      switch (M) {
        case kn:
          N !== 3
            ? m.children === ''
              ? (l((m.el = o('')), i(g), g), (H = g))
              : (H = T())
            : (g.data !== m.children && ((Jt = !0), (g.data = m.children)), (H = s(g)));
          break;
        case Ge:
          N !== 8 || x ? (H = T()) : (H = s(g));
          break;
        case Kn:
          if ((x && ((g = s(g)), (N = g.nodeType)), N === 1 || N === 3)) {
            H = g;
            const ne = !m.children.length;
            for (let q = 0; q < m.staticCount; q++)
              ne && (m.children += H.nodeType === 1 ? H.outerHTML : H.data),
                q === m.staticCount - 1 && (m.anchor = H),
                (H = s(H));
            return x ? s(H) : H;
          } else T();
          break;
        case $e:
          x ? (H = p(g, m, b, E, P, C)) : (H = T());
          break;
        default:
          if (A & 1)
            N !== 1 || m.type.toLowerCase() !== g.tagName.toLowerCase()
              ? (H = T())
              : (H = d(g, m, b, E, P, C));
          else if (A & 6) {
            m.slotScopeIds = P;
            const ne = i(g);
            if (
              (t(m, ne, null, b, E, fo(ne), C),
              (H = x ? _(g) : s(g)),
              H && po(H) && H.data === 'teleport end' && (H = s(H)),
              Pn(m))
            ) {
              let q;
              x
                ? ((q = ae($e)), (q.anchor = H ? H.previousSibling : ne.lastChild))
                : (q = g.nodeType === 3 ? ar('') : ae('div')),
                (q.el = g),
                (m.component.subTree = q);
            }
          } else
            A & 64
              ? N !== 8
                ? (H = T())
                : (H = m.type.hydrate(g, m, b, E, P, C, e, v))
              : A & 128 && (H = m.type.hydrate(g, m, b, E, fo(i(g)), P, C, e, f));
      }
      return I != null && qo(I, null, E, m), H;
    },
    d = (g, m, b, E, P, C) => {
      C = C || !!m.dynamicChildren;
      const { type: x, props: T, patchFlag: M, shapeFlag: I, dirs: A } = m,
        O = (x === 'input' && A) || x === 'option';
      if (O || M !== -1) {
        if ((A && kt(m, null, b, 'created'), T))
          if (O || !C || M & 48)
            for (const H in T)
              ((O && H.endsWith('value')) || (Yr(H) && !Tr(H))) &&
                r(g, H, null, T[H], !1, void 0, b);
          else T.onClick && r(g, 'onClick', null, T.onClick, !1, void 0, b);
        let N;
        if (
          ((N = T && T.onVnodeBeforeMount) && rt(N, b, m),
          A && kt(m, null, b, 'beforeMount'),
          ((N = T && T.onVnodeMounted) || A) &&
            lf(() => {
              N && rt(N, b, m), A && kt(m, null, b, 'mounted');
            }, E),
          I & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let H = v(g.firstChild, m, g, b, E, P, C);
          for (; H; ) {
            Jt = !0;
            const ne = H;
            (H = H.nextSibling), a(ne);
          }
        } else I & 8 && g.textContent !== m.children && ((Jt = !0), (g.textContent = m.children));
      }
      return g.nextSibling;
    },
    v = (g, m, b, E, P, C, x) => {
      x = x || !!m.dynamicChildren;
      const T = m.children,
        M = T.length;
      for (let I = 0; I < M; I++) {
        const A = x ? T[I] : (T[I] = ht(T[I]));
        if (g) g = f(g, A, E, P, C, x);
        else {
          if (A.type === kn && !A.children) continue;
          (Jt = !0), n(null, A, b, null, E, P, fo(b), C);
        }
      }
      return g;
    },
    p = (g, m, b, E, P, C) => {
      const { slotScopeIds: x } = m;
      x && (P = P ? P.concat(x) : x);
      const T = i(g),
        M = v(s(g), m, T, b, E, P, C);
      return M && po(M) && M.data === ']'
        ? s((m.anchor = M))
        : ((Jt = !0), l((m.anchor = c(']')), T, M), M);
    },
    h = (g, m, b, E, P, C) => {
      if (((Jt = !0), (m.el = null), C)) {
        const M = _(g);
        for (;;) {
          const I = s(g);
          if (I && I !== M) a(I);
          else break;
        }
      }
      const x = s(g),
        T = i(g);
      return a(g), n(null, m, T, x, b, E, fo(T), P), x;
    },
    _ = (g) => {
      let m = 0;
      for (; g; )
        if (((g = s(g)), g && po(g) && (g.data === '[' && m++, g.data === ']'))) {
          if (m === 0) return s(g);
          m--;
        }
      return g;
    };
  return [u, f];
}
const Ke = lf;
function jg(e) {
  return Of(e);
}
function Bg(e) {
  return Of(e, Hg);
}
function Of(e, t) {
  const n = fh();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: v = Xe,
      insertStaticContent: p
    } = e,
    h = (y, w, k, R = null, L = null, z = null, V = !1, D = null, U = !!w.dynamicChildren) => {
      if (y === w) return;
      y && !Ct(y, w) && ((R = K(y)), he(y, L, z, !0), (y = null)),
        w.patchFlag === -2 && ((U = !1), (w.dynamicChildren = null));
      const { type: F, ref: X, shapeFlag: Q } = w;
      switch (F) {
        case kn:
          _(y, w, k, R);
          break;
        case Ge:
          g(y, w, k, R);
          break;
        case Kn:
          y == null && m(w, k, R, V);
          break;
        case $e:
          O(y, w, k, R, L, z, V, D, U);
          break;
        default:
          Q & 1
            ? P(y, w, k, R, L, z, V, D, U)
            : Q & 6
            ? N(y, w, k, R, L, z, V, D, U)
            : (Q & 64 || Q & 128) && F.process(y, w, k, R, L, z, V, D, U, me);
      }
      X != null && L && qo(X, y && y.ref, z, w || y, !w);
    },
    _ = (y, w, k, R) => {
      if (y == null) r((w.el = a(w.children)), k, R);
      else {
        const L = (w.el = y.el);
        w.children !== y.children && c(L, w.children);
      }
    },
    g = (y, w, k, R) => {
      y == null ? r((w.el = l(w.children || '')), k, R) : (w.el = y.el);
    },
    m = (y, w, k, R) => {
      [y.el, y.anchor] = p(y.children, w, k, R, y.el, y.anchor);
    },
    b = ({ el: y, anchor: w }, k, R) => {
      let L;
      for (; y && y !== w; ) (L = d(y)), r(y, k, R), (y = L);
      r(w, k, R);
    },
    E = ({ el: y, anchor: w }) => {
      let k;
      for (; y && y !== w; ) (k = d(y)), o(y), (y = k);
      o(w);
    },
    P = (y, w, k, R, L, z, V, D, U) => {
      (V = V || w.type === 'svg'), y == null ? C(w, k, R, L, z, V, D, U) : M(y, w, L, z, V, D, U);
    },
    C = (y, w, k, R, L, z, V, D) => {
      let U, F;
      const { type: X, props: Q, shapeFlag: Z, transition: oe, dirs: de } = y;
      if (
        ((U = y.el = i(y.type, z, Q && Q.is, Q)),
        Z & 8
          ? u(U, y.children)
          : Z & 16 && T(y.children, U, null, R, L, z && X !== 'foreignObject', V, D),
        de && kt(y, null, R, 'created'),
        x(U, y, y.scopeId, V, R),
        Q)
      ) {
        for (const Ee in Q)
          Ee !== 'value' && !Tr(Ee) && s(U, Ee, null, Q[Ee], z, y.children, R, L, W);
        'value' in Q && s(U, 'value', null, Q.value), (F = Q.onVnodeBeforeMount) && rt(F, R, y);
      }
      de && kt(y, null, R, 'beforeMount');
      const Te = (!L || (L && !L.pendingBranch)) && oe && !oe.persisted;
      Te && oe.beforeEnter(U),
        r(U, w, k),
        ((F = Q && Q.onVnodeMounted) || Te || de) &&
          Ke(() => {
            F && rt(F, R, y), Te && oe.enter(U), de && kt(y, null, R, 'mounted');
          }, L);
    },
    x = (y, w, k, R, L) => {
      if ((k && v(y, k), R)) for (let z = 0; z < R.length; z++) v(y, R[z]);
      if (L) {
        let z = L.subTree;
        if (w === z) {
          const V = L.vnode;
          x(y, V, V.scopeId, V.slotScopeIds, L.parent);
        }
      }
    },
    T = (y, w, k, R, L, z, V, D, U = 0) => {
      for (let F = U; F < y.length; F++) {
        const X = (y[F] = D ? en(y[F]) : ht(y[F]));
        h(null, X, w, k, R, L, z, V, D);
      }
    },
    M = (y, w, k, R, L, z, V) => {
      const D = (w.el = y.el);
      let { patchFlag: U, dynamicChildren: F, dirs: X } = w;
      U |= y.patchFlag & 16;
      const Q = y.props || Oe,
        Z = w.props || Oe;
      let oe;
      k && gn(k, !1),
        (oe = Z.onVnodeBeforeUpdate) && rt(oe, k, w, y),
        X && kt(w, y, k, 'beforeUpdate'),
        k && gn(k, !0);
      const de = L && w.type !== 'foreignObject';
      if (
        (F ? I(y.dynamicChildren, F, D, k, R, de, z) : V || ee(y, w, D, null, k, R, de, z, !1),
        U > 0)
      ) {
        if (U & 16) A(D, w, Q, Z, k, R, L);
        else if (
          (U & 2 && Q.class !== Z.class && s(D, 'class', null, Z.class, L),
          U & 4 && s(D, 'style', Q.style, Z.style, L),
          U & 8)
        ) {
          const Te = w.dynamicProps;
          for (let Ee = 0; Ee < Te.length; Ee++) {
            const Ne = Te[Ee],
              wt = Q[Ne],
              Mn = Z[Ne];
            (Mn !== wt || Ne === 'value') && s(D, Ne, wt, Mn, L, y.children, k, R, W);
          }
        }
        U & 1 && y.children !== w.children && u(D, w.children);
      } else !V && F == null && A(D, w, Q, Z, k, R, L);
      ((oe = Z.onVnodeUpdated) || X) &&
        Ke(() => {
          oe && rt(oe, k, w, y), X && kt(w, y, k, 'updated');
        }, R);
    },
    I = (y, w, k, R, L, z, V) => {
      for (let D = 0; D < w.length; D++) {
        const U = y[D],
          F = w[D],
          X = U.el && (U.type === $e || !Ct(U, F) || U.shapeFlag & 70) ? f(U.el) : k;
        h(U, F, X, null, R, L, z, V, !0);
      }
    },
    A = (y, w, k, R, L, z, V) => {
      if (k !== R) {
        if (k !== Oe)
          for (const D in k) !Tr(D) && !(D in R) && s(y, D, k[D], null, V, w.children, L, z, W);
        for (const D in R) {
          if (Tr(D)) continue;
          const U = R[D],
            F = k[D];
          U !== F && D !== 'value' && s(y, D, F, U, V, w.children, L, z, W);
        }
        'value' in R && s(y, 'value', k.value, R.value);
      }
    },
    O = (y, w, k, R, L, z, V, D, U) => {
      const F = (w.el = y ? y.el : a('')),
        X = (w.anchor = y ? y.anchor : a(''));
      let { patchFlag: Q, dynamicChildren: Z, slotScopeIds: oe } = w;
      oe && (D = D ? D.concat(oe) : oe),
        y == null
          ? (r(F, k, R), r(X, k, R), T(w.children, k, X, L, z, V, D, U))
          : Q > 0 && Q & 64 && Z && y.dynamicChildren
          ? (I(y.dynamicChildren, Z, k, L, z, V, D),
            (w.key != null || (L && w === L.subTree)) && ma(y, w, !0))
          : ee(y, w, k, X, L, z, V, D, U);
    },
    N = (y, w, k, R, L, z, V, D, U) => {
      (w.slotScopeIds = D),
        y == null
          ? w.shapeFlag & 512
            ? L.ctx.activate(w, k, R, V, U)
            : H(w, k, R, L, z, V, U)
          : ne(y, w, U);
    },
    H = (y, w, k, R, L, z, V) => {
      const D = (y.component = Yg(y, R, L));
      if ((Xr(y) && (D.ctx.renderer = me), Zg(D), D.asyncDep)) {
        if ((L && L.registerDep(D, q), !y.el)) {
          const U = (D.subTree = ae(Ge));
          g(null, U, w, k);
        }
        return;
      }
      q(D, y, w, k, L, z, V);
    },
    ne = (y, w, k) => {
      const R = (w.component = y.component);
      if (ag(y, w, k))
        if (R.asyncDep && !R.asyncResolved) {
          B(R, w, k);
          return;
        } else (R.next = w), Xh(R.update), R.update();
      else (w.el = y.el), (R.vnode = w);
    },
    q = (y, w, k, R, L, z, V) => {
      const D = () => {
          if (y.isMounted) {
            let { next: X, bu: Q, u: Z, parent: oe, vnode: de } = y,
              Te = X,
              Ee;
            gn(y, !1),
              X ? ((X.el = de.el), B(y, X, V)) : (X = de),
              Q && Cr(Q),
              (Ee = X.props && X.props.onVnodeBeforeUpdate) && rt(Ee, oe, X, de),
              gn(y, !0);
            const Ne = xs(y),
              wt = y.subTree;
            (y.subTree = Ne),
              h(wt, Ne, f(wt.el), K(wt), y, L, z),
              (X.el = Ne.el),
              Te === null && ia(y, Ne.el),
              Z && Ke(Z, L),
              (Ee = X.props && X.props.onVnodeUpdated) && Ke(() => rt(Ee, oe, X, de), L);
          } else {
            let X;
            const { el: Q, props: Z } = w,
              { bm: oe, m: de, parent: Te } = y,
              Ee = Pn(w);
            if (
              (gn(y, !1),
              oe && Cr(oe),
              !Ee && (X = Z && Z.onVnodeBeforeMount) && rt(X, Te, w),
              gn(y, !0),
              Q && ce)
            ) {
              const Ne = () => {
                (y.subTree = xs(y)), ce(Q, y.subTree, y, L, null);
              };
              Ee ? w.type.__asyncLoader().then(() => !y.isUnmounted && Ne()) : Ne();
            } else {
              const Ne = (y.subTree = xs(y));
              h(null, Ne, k, R, y, L, z), (w.el = Ne.el);
            }
            if ((de && Ke(de, L), !Ee && (X = Z && Z.onVnodeMounted))) {
              const Ne = w;
              Ke(() => rt(X, Te, Ne), L);
            }
            (w.shapeFlag & 256 || (Te && Pn(Te.vnode) && Te.vnode.shapeFlag & 256)) &&
              y.a &&
              Ke(y.a, L),
              (y.isMounted = !0),
              (w = k = R = null);
          }
        },
        U = (y.effect = new Yi(D, () => ls(F), y.scope)),
        F = (y.update = () => U.run());
      (F.id = y.uid), gn(y, !0), F();
    },
    B = (y, w, k) => {
      w.component = y;
      const R = y.vnode.props;
      (y.vnode = w), (y.next = null), Rg(y, w.props, R, k), Lg(y, w.children, k), or(), ml(), sr();
    },
    ee = (y, w, k, R, L, z, V, D, U = !1) => {
      const F = y && y.children,
        X = y ? y.shapeFlag : 0,
        Q = w.children,
        { patchFlag: Z, shapeFlag: oe } = w;
      if (Z > 0) {
        if (Z & 128) {
          ue(F, Q, k, R, L, z, V, D, U);
          return;
        } else if (Z & 256) {
          ye(F, Q, k, R, L, z, V, D, U);
          return;
        }
      }
      oe & 8
        ? (X & 16 && W(F, L, z), Q !== F && u(k, Q))
        : X & 16
        ? oe & 16
          ? ue(F, Q, k, R, L, z, V, D, U)
          : W(F, L, z, !0)
        : (X & 8 && u(k, ''), oe & 16 && T(Q, k, R, L, z, V, D, U));
    },
    ye = (y, w, k, R, L, z, V, D, U) => {
      (y = y || jn), (w = w || jn);
      const F = y.length,
        X = w.length,
        Q = Math.min(F, X);
      let Z;
      for (Z = 0; Z < Q; Z++) {
        const oe = (w[Z] = U ? en(w[Z]) : ht(w[Z]));
        h(y[Z], oe, k, null, L, z, V, D, U);
      }
      F > X ? W(y, L, z, !0, !1, Q) : T(w, k, R, L, z, V, D, U, Q);
    },
    ue = (y, w, k, R, L, z, V, D, U) => {
      let F = 0;
      const X = w.length;
      let Q = y.length - 1,
        Z = X - 1;
      for (; F <= Q && F <= Z; ) {
        const oe = y[F],
          de = (w[F] = U ? en(w[F]) : ht(w[F]));
        if (Ct(oe, de)) h(oe, de, k, null, L, z, V, D, U);
        else break;
        F++;
      }
      for (; F <= Q && F <= Z; ) {
        const oe = y[Q],
          de = (w[Z] = U ? en(w[Z]) : ht(w[Z]));
        if (Ct(oe, de)) h(oe, de, k, null, L, z, V, D, U);
        else break;
        Q--, Z--;
      }
      if (F > Q) {
        if (F <= Z) {
          const oe = Z + 1,
            de = oe < X ? w[oe].el : R;
          for (; F <= Z; ) h(null, (w[F] = U ? en(w[F]) : ht(w[F])), k, de, L, z, V, D, U), F++;
        }
      } else if (F > Z) for (; F <= Q; ) he(y[F], L, z, !0), F++;
      else {
        const oe = F,
          de = F,
          Te = new Map();
        for (F = de; F <= Z; F++) {
          const ct = (w[F] = U ? en(w[F]) : ht(w[F]));
          ct.key != null && Te.set(ct.key, F);
        }
        let Ee,
          Ne = 0;
        const wt = Z - de + 1;
        let Mn = !1,
          sl = 0;
        const pr = new Array(wt);
        for (F = 0; F < wt; F++) pr[F] = 0;
        for (F = oe; F <= Q; F++) {
          const ct = y[F];
          if (Ne >= wt) {
            he(ct, L, z, !0);
            continue;
          }
          let Ot;
          if (ct.key != null) Ot = Te.get(ct.key);
          else
            for (Ee = de; Ee <= Z; Ee++)
              if (pr[Ee - de] === 0 && Ct(ct, w[Ee])) {
                Ot = Ee;
                break;
              }
          Ot === void 0
            ? he(ct, L, z, !0)
            : ((pr[Ot - de] = F + 1),
              Ot >= sl ? (sl = Ot) : (Mn = !0),
              h(ct, w[Ot], k, null, L, z, V, D, U),
              Ne++);
        }
        const il = Mn ? Dg(pr) : jn;
        for (Ee = il.length - 1, F = wt - 1; F >= 0; F--) {
          const ct = de + F,
            Ot = w[ct],
            al = ct + 1 < X ? w[ct + 1].el : R;
          pr[F] === 0
            ? h(null, Ot, k, al, L, z, V, D, U)
            : Mn && (Ee < 0 || F !== il[Ee] ? pe(Ot, k, al, 2) : Ee--);
        }
      }
    },
    pe = (y, w, k, R, L = null) => {
      const { el: z, type: V, transition: D, children: U, shapeFlag: F } = y;
      if (F & 6) {
        pe(y.component.subTree, w, k, R);
        return;
      }
      if (F & 128) {
        y.suspense.move(w, k, R);
        return;
      }
      if (F & 64) {
        V.move(y, w, k, me);
        return;
      }
      if (V === $e) {
        r(z, w, k);
        for (let Q = 0; Q < U.length; Q++) pe(U[Q], w, k, R);
        r(y.anchor, w, k);
        return;
      }
      if (V === Kn) {
        b(y, w, k);
        return;
      }
      if (R !== 2 && F & 1 && D)
        if (R === 0) D.beforeEnter(z), r(z, w, k), Ke(() => D.enter(z), L);
        else {
          const { leave: Q, delayLeave: Z, afterLeave: oe } = D,
            de = () => r(z, w, k),
            Te = () => {
              Q(z, () => {
                de(), oe && oe();
              });
            };
          Z ? Z(z, de, Te) : Te();
        }
      else r(z, w, k);
    },
    he = (y, w, k, R = !1, L = !1) => {
      const {
        type: z,
        props: V,
        ref: D,
        children: U,
        dynamicChildren: F,
        shapeFlag: X,
        patchFlag: Q,
        dirs: Z
      } = y;
      if ((D != null && qo(D, null, k, y, !0), X & 256)) {
        w.ctx.deactivate(y);
        return;
      }
      const oe = X & 1 && Z,
        de = !Pn(y);
      let Te;
      if ((de && (Te = V && V.onVnodeBeforeUnmount) && rt(Te, w, y), X & 6)) $(y.component, k, R);
      else {
        if (X & 128) {
          y.suspense.unmount(k, R);
          return;
        }
        oe && kt(y, null, w, 'beforeUnmount'),
          X & 64
            ? y.type.remove(y, w, k, L, me, R)
            : F && (z !== $e || (Q > 0 && Q & 64))
            ? W(F, w, k, !1, !0)
            : ((z === $e && Q & 384) || (!L && X & 16)) && W(U, w, k),
          R && Ue(y);
      }
      ((de && (Te = V && V.onVnodeUnmounted)) || oe) &&
        Ke(() => {
          Te && rt(Te, w, y), oe && kt(y, null, w, 'unmounted');
        }, k);
    },
    Ue = (y) => {
      const { type: w, el: k, anchor: R, transition: L } = y;
      if (w === $e) {
        Qe(k, R);
        return;
      }
      if (w === Kn) {
        E(y);
        return;
      }
      const z = () => {
        o(k), L && !L.persisted && L.afterLeave && L.afterLeave();
      };
      if (y.shapeFlag & 1 && L && !L.persisted) {
        const { leave: V, delayLeave: D } = L,
          U = () => V(k, z);
        D ? D(y.el, z, U) : U();
      } else z();
    },
    Qe = (y, w) => {
      let k;
      for (; y !== w; ) (k = d(y)), o(y), (y = k);
      o(w);
    },
    $ = (y, w, k) => {
      const { bum: R, scope: L, update: z, subTree: V, um: D } = y;
      R && Cr(R),
        L.stop(),
        z && ((z.active = !1), he(V, y, w, k)),
        D && Ke(D, w),
        Ke(() => {
          y.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          y.asyncDep &&
          !y.asyncResolved &&
          y.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    W = (y, w, k, R = !1, L = !1, z = 0) => {
      for (let V = z; V < y.length; V++) he(y[V], w, k, R, L);
    },
    K = (y) =>
      y.shapeFlag & 6
        ? K(y.component.subTree)
        : y.shapeFlag & 128
        ? y.suspense.next()
        : d(y.anchor || y.el),
    G = (y, w, k) => {
      y == null
        ? w._vnode && he(w._vnode, null, null, !0)
        : h(w._vnode || null, y, w, null, null, null, k),
        ml(),
        Uo(),
        (w._vnode = y);
    },
    me = { p: h, um: he, m: pe, r: Ue, mt: H, mc: T, pc: ee, pbc: I, n: K, o: e };
  let Se, ce;
  return t && ([Se, ce] = t(me)), { render: G, hydrate: Se, createApp: Fg(G, Se) };
}
function gn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ma(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (te(r) && te(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = o[s] = en(o[s])), (a.el = i.el)),
        n || ma(i, a)),
        a.type === kn && (a.el = i.el);
    }
}
function Dg(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (a = (s + i) >> 1), e[n[a]] < c ? (s = a + 1) : (i = a);
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const zg = (e) => e.__isTeleport,
  Pr = (e) => e && (e.disabled || e.disabled === ''),
  Sl = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  ci = (e, t) => {
    const n = e && e.to;
    return _e(n) ? (t ? t(n) : null) : n;
  },
  Ug = {
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: v, querySelector: p, createText: h, createComment: _ }
        } = c,
        g = Pr(t.props);
      let { shapeFlag: m, children: b, dynamicChildren: E } = t;
      if (e == null) {
        const P = (t.el = h('')),
          C = (t.anchor = h(''));
        v(P, n, r), v(C, n, r);
        const x = (t.target = ci(t.props, p)),
          T = (t.targetAnchor = h(''));
        x && (v(T, x), (i = i || Sl(x)));
        const M = (I, A) => {
          m & 16 && u(b, I, A, o, s, i, a, l);
        };
        g ? M(n, C) : x && M(x, T);
      } else {
        t.el = e.el;
        const P = (t.anchor = e.anchor),
          C = (t.target = e.target),
          x = (t.targetAnchor = e.targetAnchor),
          T = Pr(e.props),
          M = T ? n : C,
          I = T ? P : x;
        if (
          ((i = i || Sl(C)),
          E
            ? (d(e.dynamicChildren, E, M, o, s, i, a), ma(e, t, !0))
            : l || f(e, t, M, I, o, s, i, a, !1),
          g)
        )
          T || ho(t, n, P, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const A = (t.target = ci(t.props, p));
          A && ho(t, A, null, c, 0);
        } else T && ho(t, C, x, c, 1);
      }
      kf(t);
    },
    remove(e, t, n, r, { um: o, o: { remove: s } }, i) {
      const { shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: f, props: d } = e;
      if ((f && s(u), (i || !Pr(d)) && (s(c), a & 16)))
        for (let v = 0; v < l.length; v++) {
          const p = l[v];
          o(p, t, n, !0, !!p.dynamicChildren);
        }
    },
    move: ho,
    hydrate: Kg
  };
function ho(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: c, props: u } = e,
    f = s === 2;
  if ((f && r(i, t, n), (!f || Pr(u)) && l & 16))
    for (let d = 0; d < c.length; d++) o(c[d], t, n, 2);
  f && r(a, t, n);
}
function Kg(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: a, querySelector: l } }, c) {
  const u = (t.target = ci(t.props, l));
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Pr(t.props)) (t.anchor = c(i(e), t, a(e), n, r, o, s)), (t.targetAnchor = f);
      else {
        t.anchor = i(e);
        let d = f;
        for (; d; )
          if (((d = i(d)), d && d.nodeType === 8 && d.data === 'teleport anchor')) {
            (t.targetAnchor = d), (u._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        c(f, t, u, n, r, o, s);
      }
    kf(t);
  }
  return t.anchor && i(t.anchor);
}
const Wg = Ug;
function kf(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid), (n = n.nextSibling);
    t.ut();
  }
}
const $e = Symbol(void 0),
  kn = Symbol(void 0),
  Ge = Symbol(void 0),
  Kn = Symbol(void 0),
  Sr = [];
let gt = null;
function Y(e = !1) {
  Sr.push((gt = e ? null : []));
}
function Af() {
  Sr.pop(), (gt = Sr[Sr.length - 1] || null);
}
let Vn = 1;
function Ol(e) {
  Vn += e;
}
function If(e) {
  return (e.dynamicChildren = Vn > 0 ? gt || jn : null), Af(), Vn > 0 && gt && gt.push(e), e;
}
function we(e, t, n, r, o, s) {
  return If(ke(e, t, n, r, o, s, !0));
}
function Ie(e, t, n, r, o) {
  return If(ae(e, t, n, r, o, !0));
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hs = '__vInternal',
  Rf = ({ key: e }) => e ?? null,
  Ro = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null ? (_e(e) || je(e) || re(e) ? { i: We, r: e, k: t, f: !!n } : e) : null;
function ke(e, t = null, n = null, r = 0, o = null, s = e === $e ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rf(t),
    ref: t && Ro(t),
    scopeId: us,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: We
  };
  return (
    a ? (va(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= _e(n) ? 8 : 16),
    Vn > 0 && !i && gt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && gt.push(l),
    l
  );
}
const ae = Vg;
function Vg(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === yf) && (e = Ge), cn(e))) {
    const a = $t(e, t, !0);
    return (
      n && va(a, n),
      Vn > 0 && !s && gt && (a.shapeFlag & 6 ? (gt[gt.indexOf(e)] = a) : gt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((tm(e) && (e = e.__vccOpts), t)) {
    t = qg(t);
    let { class: a, style: l } = t;
    a && !_e(a) && (t.class = Fe(a)),
      Pe(l) && (Ju(l) && !te(l) && (l = qe({}, l)), (t.style = Ut(l)));
  }
  const i = _e(e) ? 1 : sf(e) ? 128 : zg(e) ? 64 : Pe(e) ? 4 : re(e) ? 2 : 0;
  return ke(e, t, n, r, o, i, s, !0);
}
function qg(e) {
  return e ? (Ju(e) || hs in e ? qe({}, e) : e) : null;
}
function $t(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    a = t ? Rn(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Rf(a),
    ref: t && t.ref ? (n && o ? (te(o) ? o.concat(Ro(t)) : [o, Ro(t)]) : Ro(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== $e ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ar(e = ' ', t = 0) {
  return ae(kn, null, e, t);
}
function Qg(e, t) {
  const n = ae(Kn, null, e);
  return (n.staticCount = t), n;
}
function qn(e = '', t = !1) {
  return t ? (Y(), Ie(Ge, null, e)) : ae(Ge, null, e);
}
function ht(e) {
  return e == null || typeof e == 'boolean'
    ? ae(Ge)
    : te(e)
    ? ae($e, null, e.slice())
    : typeof e == 'object'
    ? en(e)
    : ae(kn, null, String(e));
}
function en(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : $t(e);
}
function va(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (te(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), va(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(hs in t)
        ? (t._ctx = We)
        : o === 3 && We && (We.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    re(t)
      ? ((t = { default: t, _ctx: We }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [ar(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Rn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === 'class') t.class !== r.class && (t.class = Fe([t.class, r.class]));
      else if (o === 'style') t.style = Ut([t.style, r.style]);
      else if (Yr(o)) {
        const s = t[o],
          i = r[o];
        i && s !== i && !(te(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== '' && (t[o] = r[o]);
  }
  return t;
}
function rt(e, t, n, r = null) {
  mt(e, t, 7, [n, r]);
}
const Jg = Sf();
let Gg = 0;
function Yg(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Jg,
    s = {
      uid: Gg++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new dh(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Tf(r, o),
      emitsOptions: of(r, o),
      emit: null,
      emitted: null,
      propsDefaults: Oe,
      inheritAttrs: r.inheritAttrs,
      ctx: Oe,
      data: Oe,
      props: Oe,
      attrs: Oe,
      slots: Oe,
      refs: Oe,
      setupState: Oe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return (
    (s.ctx = { _: s }), (s.root = t ? t.root : s), (s.emit = tg.bind(null, s)), e.ce && e.ce(s), s
  );
}
let Le = null;
const ze = () => Le || We,
  un = (e) => {
    (Le = e), e.scope.on();
  },
  an = () => {
    Le && Le.scope.off(), (Le = null);
  };
function Mf(e) {
  return e.vnode.shapeFlag & 4;
}
let Qn = !1;
function Zg(e, t = !1) {
  Qn = t;
  const { props: n, children: r } = e.vnode,
    o = Mf(e);
  Ig(e, n, o, t), $g(e, r);
  const s = o ? Xg(e, t) : void 0;
  return (Qn = !1), s;
}
function Xg(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Gu(new Proxy(e.ctx, xg)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Lf(e) : null);
    un(e), or();
    const s = sn(r, e, 0, [e.props, o]);
    if ((sr(), an(), qi(s))) {
      if ((s.then(an, an), t))
        return s
          .then((i) => {
            ui(e, i, t);
          })
          .catch((i) => {
            ir(i, e, 0);
          });
      e.asyncDep = s;
    } else ui(e, s, t);
  } else $f(e, t);
}
function ui(e, t, n) {
  re(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Pe(t) && (e.setupState = Zu(t)),
    $f(e, n);
}
let kl;
function $f(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && kl && !r.render) {
      const o = r.template || ha(e).template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = qe(qe({ isCustomElement: s, delimiters: a }, i), l);
        r.render = kl(o, c);
      }
    }
    e.render = r.render || Xe;
  }
  un(e), or(), Pg(e), sr(), an();
}
function em(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return at(e, 'get', '$attrs'), t[n];
    }
  });
}
function Lf(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = em(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Zu(Gu(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in xr) return xr[n](e);
        },
        has(t, n) {
          return n in t || n in xr;
        }
      }))
    );
}
function fi(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function tm(e) {
  return re(e) && '__vccOpts' in e;
}
const j = (e, t) => Jh(e, t, Qn);
function nm() {
  return rm().slots;
}
function rm() {
  const e = ze();
  return e.setupContext || (e.setupContext = Lf(e));
}
function om(e) {
  const t = ze();
  let n = e();
  return (
    an(),
    qi(n) &&
      (n = n.catch((r) => {
        throw (un(t), r);
      })),
    [n, () => un(t)]
  );
}
function ge(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Pe(t) && !te(t)
      ? cn(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && cn(n) && (n = [n]),
      ae(e, t, n));
}
const sm = Symbol(''),
  im = () => Ae(sm),
  Nf = '3.2.47',
  am = 'http://www.w3.org/2000/svg',
  En = typeof document < 'u' ? document : null,
  Al = En && En.createElement('template'),
  lm = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t ? En.createElementNS(am, e) : En.createElement(e, n ? { is: n } : void 0);
      return e === 'select' && r && r.multiple != null && o.setAttribute('multiple', r.multiple), o;
    },
    createText: (e) => En.createTextNode(e),
    createComment: (e) => En.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => En.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); );
      else {
        Al.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = Al.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    }
  };
function cm(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
function um(e, t, n) {
  const r = e.style,
    o = _e(n);
  if (n && !o) {
    if (t && !_e(t)) for (const s in t) n[s] == null && di(r, s, '');
    for (const s in n) di(r, s, n[s]);
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = s);
  }
}
const Il = /\s*!important$/;
function di(e, t, n) {
  if (te(n)) n.forEach((r) => di(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = fm(e, t);
    Il.test(n) ? e.setProperty(rr(r), n.replace(Il, ''), 'important') : (e[r] = n);
  }
}
const Rl = ['Webkit', 'Moz', 'ms'],
  Is = {};
function fm(e, t) {
  const n = Is[t];
  if (n) return n;
  let r = Mt(t);
  if (r !== 'filter' && r in e) return (Is[t] = r);
  r = is(r);
  for (let o = 0; o < Rl.length; o++) {
    const s = Rl[o] + r;
    if (s in e) return (Is[t] = s);
  }
  return t;
}
const Ml = 'http://www.w3.org/1999/xlink';
function dm(e, t, n, r, o) {
  if (r && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(Ml, t.slice(6, t.length)) : e.setAttributeNS(Ml, t, n);
  else {
    const s = nh(t);
    n == null || (s && !Ru(n)) ? e.removeAttribute(t) : e.setAttribute(t, s ? '' : n);
  }
}
function pm(e, t, n, r, o, s, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && i(r, o, s), (e[t] = n ?? '');
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n;
    const l = n ?? '';
    (e.value !== l || e.tagName === 'OPTION') && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === '' || n == null) {
    const l = typeof e[t];
    l === 'boolean'
      ? (n = Ru(n))
      : n == null && l === 'string'
      ? ((n = ''), (a = !0))
      : l === 'number' && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function hm(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function gm(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function mm(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = vm(t);
    if (r) {
      const c = (s[t] = bm(r, o));
      hm(e, a, c, l);
    } else i && (gm(e, a, i, l), (s[t] = void 0));
  }
}
const $l = /(?:Once|Passive|Capture)$/;
function vm(e) {
  let t;
  if ($l.test(e)) {
    t = {};
    let r;
    for (; (r = e.match($l)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : rr(e.slice(2)), t];
}
let Rs = 0;
const ym = Promise.resolve(),
  _m = () => Rs || (ym.then(() => (Rs = 0)), (Rs = Date.now()));
function bm(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    mt(wm(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = _m()), n;
}
function wm(e, t) {
  if (te(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Ll = /^on[a-z]/,
  Em = (e, t, n, r, o = !1, s, i, a, l) => {
    t === 'class'
      ? cm(e, r, o)
      : t === 'style'
      ? um(e, n, r)
      : Yr(t)
      ? Ki(t) || mm(e, t, n, r, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Tm(e, t, r, o)
        )
      ? pm(e, t, r, s, i, a, l)
      : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r),
        dm(e, t, r, o));
  };
function Tm(e, t, n, r) {
  return r
    ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && Ll.test(t) && re(n)))
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Ll.test(t) && _e(n))
    ? !1
    : t in e;
}
function dS(e) {
  const t = ze();
  if (!t) return;
  const n = (t.ut = (o = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => hi(s, o));
    }),
    r = () => {
      const o = e(t.proxy);
      pi(t.subTree, o), n(o);
    };
  pg(r),
    De(() => {
      const o = new MutationObserver(r);
      o.observe(t.subTree.el.parentNode, { childList: !0 }), Dr(() => o.disconnect());
    });
}
function pi(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          pi(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) hi(e.el, t);
  else if (e.type === $e) e.children.forEach((n) => pi(n, t));
  else if (e.type === Kn) {
    let { el: n, anchor: r } = e;
    for (; n && (hi(n, t), n !== r); ) n = n.nextSibling;
  }
}
function hi(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const r in t) n.setProperty(`--${r}`, t[r]);
  }
}
const Gt = 'transition',
  hr = 'animation',
  lr = (e, { slots: t }) => ge(uf, Cm(e), t);
lr.displayName = 'Transition';
const Ff = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
lr.props = qe({}, uf.props, Ff);
const mn = (e, t = []) => {
    te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Nl = (e) => (e ? (te(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Cm(e) {
  const t = {};
  for (const O in e) O in Ff || (t[O] = e[O]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: c = i,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`
    } = e,
    p = xm(o),
    h = p && p[0],
    _ = p && p[1],
    {
      onBeforeEnter: g,
      onEnter: m,
      onEnterCancelled: b,
      onLeave: E,
      onLeaveCancelled: P,
      onBeforeAppear: C = g,
      onAppear: x = m,
      onAppearCancelled: T = b
    } = t,
    M = (O, N, H) => {
      vn(O, N ? u : a), vn(O, N ? c : i), H && H();
    },
    I = (O, N) => {
      (O._isLeaving = !1), vn(O, f), vn(O, v), vn(O, d), N && N();
    },
    A = (O) => (N, H) => {
      const ne = O ? x : m,
        q = () => M(N, O, H);
      mn(ne, [N, q]),
        Fl(() => {
          vn(N, O ? l : s), Yt(N, O ? u : a), Nl(ne) || Hl(N, r, h, q);
        });
    };
  return qe(t, {
    onBeforeEnter(O) {
      mn(g, [O]), Yt(O, s), Yt(O, i);
    },
    onBeforeAppear(O) {
      mn(C, [O]), Yt(O, l), Yt(O, c);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(O, N) {
      O._isLeaving = !0;
      const H = () => I(O, N);
      Yt(O, f),
        Om(),
        Yt(O, d),
        Fl(() => {
          O._isLeaving && (vn(O, f), Yt(O, v), Nl(E) || Hl(O, r, _, H));
        }),
        mn(E, [O, H]);
    },
    onEnterCancelled(O) {
      M(O, !1), mn(b, [O]);
    },
    onAppearCancelled(O) {
      M(O, !0), mn(T, [O]);
    },
    onLeaveCancelled(O) {
      I(O), mn(P, [O]);
    }
  });
}
function xm(e) {
  if (e == null) return null;
  if (Pe(e)) return [Ms(e.enter), Ms(e.leave)];
  {
    const t = Ms(e);
    return [t, t];
  }
}
function Ms(e) {
  return Fu(e);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Fl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Pm = 0;
function Hl(e, t, n, r) {
  const o = (e._endId = ++Pm),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = Sm(e, t);
  if (!i) return r();
  const c = i + 'end';
  let u = 0;
  const f = () => {
      e.removeEventListener(c, d), s();
    },
    d = (v) => {
      v.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, d);
}
function Sm(e, t) {
  const n = window.getComputedStyle(e),
    r = (p) => (n[p] || '').split(', '),
    o = r(`${Gt}Delay`),
    s = r(`${Gt}Duration`),
    i = jl(o, s),
    a = r(`${hr}Delay`),
    l = r(`${hr}Duration`),
    c = jl(a, l);
  let u = null,
    f = 0,
    d = 0;
  t === Gt
    ? i > 0 && ((u = Gt), (f = i), (d = s.length))
    : t === hr
    ? c > 0 && ((u = hr), (f = c), (d = l.length))
    : ((f = Math.max(i, c)),
      (u = f > 0 ? (i > c ? Gt : hr) : null),
      (d = u ? (u === Gt ? s.length : l.length) : 0));
  const v = u === Gt && /\b(transform|all)(,|$)/.test(r(`${Gt}Property`).toString());
  return { type: u, timeout: f, propCount: d, hasTransform: v };
}
function jl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Bl(n) + Bl(e[r])));
}
function Bl(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Om() {
  return document.body.offsetHeight;
}
const km = ['ctrl', 'shift', 'alt', 'meta'],
  Am = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => km.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  pS =
    (e, t) =>
    (n, ...r) => {
      for (let o = 0; o < t.length; o++) {
        const s = Am[t[o]];
        if (s && s(n, t)) return;
      }
      return e(n, ...r);
    },
  ya = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : gr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), gr(e, !0), r.enter(e))
            : r.leave(e, () => {
                gr(e, !1);
              })
          : gr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      gr(e, t);
    }
  };
function gr(e, t) {
  e.style.display = t ? e._vod : 'none';
}
const Hf = qe({ patchProp: Em }, lm);
let Or,
  Dl = !1;
function jf() {
  return Or || (Or = jg(Hf));
}
function Im() {
  return (Or = Dl ? Or : Bg(Hf)), (Dl = !0), Or;
}
const hS = (...e) => {
    jf().render(...e);
  },
  Rm = (...e) => {
    const t = jf().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = Bf(r);
        if (!o) return;
        const s = t._component;
        !re(s) && !s.render && !s.template && (s.template = o.innerHTML), (o.innerHTML = '');
        const i = n(o, !1, o instanceof SVGElement);
        return (
          o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
          i
        );
      }),
      t
    );
  },
  Mm = (...e) => {
    const t = Im().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = Bf(r);
        if (o) return n(o, !0, o instanceof SVGElement);
      }),
      t
    );
  };
function Bf(e) {
  return _e(e) ? document.querySelector(e) : e;
}
const $m =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Lm =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Nm = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function Fm(e, t) {
  if (e !== '__proto__' && !(e === 'constructor' && t && typeof t == 'object' && 'prototype' in t))
    return t;
}
function Df(e, t = {}) {
  if (typeof e != 'string') return e;
  const n = e.toLowerCase().trim();
  if (n === 'true') return !0;
  if (n === 'false') return !1;
  if (n === 'null') return null;
  if (n === 'nan') return Number.NaN;
  if (n === 'infinity') return Number.POSITIVE_INFINITY;
  if (n !== 'undefined') {
    if (!Nm.test(e)) {
      if (t.strict) throw new SyntaxError('Invalid JSON');
      return e;
    }
    try {
      return $m.test(e) || Lm.test(e) ? JSON.parse(e, Fm) : JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
}
const Hm = /#/g,
  jm = /&/g,
  Bm = /=/g,
  zf = /\+/g,
  Dm = /%5e/gi,
  zm = /%60/gi,
  Um = /%7c/gi,
  Km = /%20/gi;
function Wm(e) {
  return encodeURI('' + e).replace(Um, '|');
}
function gi(e) {
  return Wm(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(zf, '%2B')
    .replace(Km, '+')
    .replace(Hm, '%23')
    .replace(jm, '%26')
    .replace(zm, '`')
    .replace(Dm, '^');
}
function $s(e) {
  return gi(e).replace(Bm, '%3D');
}
function Uf(e = '') {
  try {
    return decodeURIComponent('' + e);
  } catch {
    return '' + e;
  }
}
function Vm(e) {
  return Uf(e.replace(zf, ' '));
}
function Kf(e = '') {
  const t = {};
  e[0] === '?' && (e = e.slice(1));
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const o = Uf(r[1]);
    if (o === '__proto__' || o === 'constructor') continue;
    const s = Vm(r[2] || '');
    typeof t[o] < 'u' ? (Array.isArray(t[o]) ? t[o].push(s) : (t[o] = [t[o], s])) : (t[o] = s);
  }
  return t;
}
function qm(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${$s(e)}=${gi(n)}`).join('&')
        : `${$s(e)}=${gi(t)}`
      : $s(e)
  );
}
function Qm(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => qm(t, e[t]))
    .join('&');
}
const Jm = /^\w{2,}:([/\\]{1,2})/,
  Gm = /^\w{2,}:([/\\]{2})?/,
  Ym = /^([/\\]\s*){2,}[^/\\]/;
function cr(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? Jm.test(e) : Gm.test(e) || (t.acceptRelative ? Ym.test(e) : !1)
  );
}
const Zm = /\/$|\/\?/;
function mi(e = '', t = !1) {
  return t ? Zm.test(e) : e.endsWith('/');
}
function ms(e = '', t = !1) {
  if (!t) return (mi(e) ? e.slice(0, -1) : e) || '/';
  if (!mi(e, !0)) return e || '/';
  const [n, ...r] = e.split('?');
  return (n.slice(0, -1) || '/') + (r.length > 0 ? `?${r.join('?')}` : '');
}
function Wf(e = '', t = !1) {
  if (!t) return e.endsWith('/') ? e : e + '/';
  if (mi(e, !0)) return e || '/';
  const [n, ...r] = e.split('?');
  return n + '/' + (r.length > 0 ? `?${r.join('?')}` : '');
}
function Vf(e = '') {
  return e.startsWith('/');
}
function Xm(e = '') {
  return (Vf(e) ? e.slice(1) : e) || '/';
}
function ev(e = '') {
  return Vf(e) ? e : '/' + e;
}
function qf(e, t) {
  if (Qf(t) || cr(e)) return e;
  const n = ms(t);
  return e.startsWith(n) ? e : ur(n, e);
}
function zl(e, t) {
  if (Qf(t)) return e;
  const n = ms(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === '/' ? r : '/' + r;
}
function tv(e, t) {
  const n = eo(e),
    r = { ...Kf(n.search), ...t };
  return (n.search = Qm(r)), rv(n);
}
function Qf(e) {
  return !e || e === '/';
}
function nv(e) {
  return e && e !== '/';
}
function ur(e, ...t) {
  let n = e || '';
  for (const r of t.filter((o) => nv(o))) n = n ? Wf(n) + Xm(r) : r;
  return n;
}
function eo(e = '', t) {
  if (!cr(e, { acceptRelative: !0 })) return t ? eo(t + e) : Ul(e);
  const [n = '', r, o = ''] = (
      e.replace(/\\/g, '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [s = '', i = ''] = (o.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: l, hash: c } = Ul(i.replace(/\/(?=[A-Za-z]:)/, ''));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : '',
    host: s,
    pathname: a,
    search: l,
    hash: c
  };
}
function Ul(e = '') {
  const [t = '', n = '', r = ''] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t, search: n, hash: r };
}
function rv(e) {
  const t =
    e.pathname + (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') + e.hash;
  return e.protocol ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t : t;
}
class ov extends Error {
  constructor() {
    super(...arguments), (this.name = 'FetchError');
  }
}
function sv(e, t, n) {
  let r = '';
  t && (r = t.message),
    e && n
      ? (r = `${r} (${n.status} ${n.statusText} (${e.toString()}))`)
      : e && (r = `${r} (${e.toString()})`);
  const o = new ov(r);
  return (
    Object.defineProperty(o, 'request', {
      get() {
        return e;
      }
    }),
    Object.defineProperty(o, 'response', {
      get() {
        return n;
      }
    }),
    Object.defineProperty(o, 'data', {
      get() {
        return n && n._data;
      }
    }),
    Object.defineProperty(o, 'status', {
      get() {
        return n && n.status;
      }
    }),
    Object.defineProperty(o, 'statusText', {
      get() {
        return n && n.statusText;
      }
    }),
    Object.defineProperty(o, 'statusCode', {
      get() {
        return n && n.status;
      }
    }),
    Object.defineProperty(o, 'statusMessage', {
      get() {
        return n && n.statusText;
      }
    }),
    o
  );
}
const iv = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']));
function Kl(e = 'GET') {
  return iv.has(e.toUpperCase());
}
function av(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function';
}
const lv = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
  cv = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function uv(e = '') {
  if (!e) return 'json';
  const t = e.split(';').shift() || '';
  return cv.test(t) ? 'json' : lv.has(t) || t.startsWith('text/') ? 'text' : 'blob';
}
const fv = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
function Jf(e) {
  const { fetch: t, Headers: n } = e;
  function r(i) {
    const a = (i.error && i.error.name === 'AbortError') || !1;
    if (i.options.retry !== !1 && !a) {
      let c;
      typeof i.options.retry == 'number'
        ? (c = i.options.retry)
        : (c = Kl(i.options.method) ? 0 : 1);
      const u = (i.response && i.response.status) || 500;
      if (c > 0 && fv.has(u)) return o(i.request, { ...i.options, retry: c - 1 });
    }
    const l = sv(i.request, i.error, i.response);
    throw (Error.captureStackTrace && Error.captureStackTrace(l, o), l);
  }
  const o = async function (a, l = {}) {
      const c = { request: a, options: { ...e.defaults, ...l }, response: void 0, error: void 0 };
      c.options.onRequest && (await c.options.onRequest(c)),
        typeof c.request == 'string' &&
          (c.options.baseURL && (c.request = qf(c.request, c.options.baseURL)),
          (c.options.query || c.options.params) &&
            (c.request = tv(c.request, { ...c.options.params, ...c.options.query })),
          c.options.body &&
            Kl(c.options.method) &&
            av(c.options.body) &&
            ((c.options.body =
              typeof c.options.body == 'string' ? c.options.body : JSON.stringify(c.options.body)),
            (c.options.headers = new n(c.options.headers)),
            c.options.headers.has('content-type') ||
              c.options.headers.set('content-type', 'application/json'),
            c.options.headers.has('accept') ||
              c.options.headers.set('accept', 'application/json'))),
        (c.response = await t(c.request, c.options).catch(
          async (f) => (
            (c.error = f), c.options.onRequestError && (await c.options.onRequestError(c)), r(c)
          )
        ));
      const u =
        (c.options.parseResponse ? 'json' : c.options.responseType) ||
        uv(c.response.headers.get('content-type') || '');
      if (u === 'json') {
        const f = await c.response.text(),
          d = c.options.parseResponse || Df;
        c.response._data = d(f);
      } else
        u === 'stream'
          ? (c.response._data = c.response.body)
          : (c.response._data = await c.response[u]());
      return (
        c.options.onResponse && (await c.options.onResponse(c)),
        c.response.status >= 400 && c.response.status < 600
          ? (c.options.onResponseError && (await c.options.onResponseError(c)), r(c))
          : c.response
      );
    },
    s = function (a, l) {
      return o(a, l).then((c) => c._data);
    };
  return (
    (s.raw = o),
    (s.native = t),
    (s.create = (i = {}) => Jf({ ...e, defaults: { ...e.defaults, ...i } })),
    s
  );
}
const Gf = (function () {
    if (typeof globalThis < 'u') return globalThis;
    if (typeof self < 'u') return self;
    if (typeof window < 'u') return window;
    if (typeof global < 'u') return global;
    throw new Error('unable to locate global object');
  })(),
  dv = Gf.fetch || (() => Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
  pv = Gf.Headers,
  hv = Jf({ fetch: dv, Headers: pv }),
  gv = hv,
  mv = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {};
  },
  Qo = mv().app,
  vv = () => Qo.baseURL,
  yv = () => Qo.buildAssetsDir,
  _v = (...e) => ur(Yf(), yv(), ...e),
  Yf = (...e) => {
    const t = Qo.cdnURL || Qo.baseURL;
    return e.length ? ur(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = _v), (globalThis.__publicAssetsURL = Yf);
function vi(e, t = {}, n) {
  for (const r in e) {
    const o = e[r],
      s = n ? `${n}:${r}` : r;
    typeof o == 'object' && o !== null ? vi(o, t, s) : typeof o == 'function' && (t[s] = o);
  }
  return t;
}
const bv = { run: (e) => e() },
  wv = () => bv,
  Zf = typeof console.createTask < 'u' ? console.createTask : wv;
function Ev(e, t) {
  const n = t.shift(),
    r = Zf(n);
  return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
}
function Tv(e, t) {
  const n = t.shift(),
    r = Zf(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function Ls(e, t) {
  for (const n of [...e]) n(t);
}
class Cv {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {};
    const o = t;
    let s;
    for (; this._deprecatedHooks[t]; ) (s = this._deprecatedHooks[t]), (t = s.to);
    if (s && !r.allowDeprecated) {
      let i = s.message;
      i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', {
          get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      o = (...s) => (typeof r == 'function' && r(), (r = void 0), (o = void 0), n(...s));
    return (r = this.hook(t, o)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r) this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = vi(t),
      r = Object.keys(n).map((o) => this.hook(o, n[o]));
    return () => {
      for (const o of r.splice(0, r.length)) o();
    };
  }
  removeHooks(t) {
    const n = vi(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Ev, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Tv, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Ls(this._before, o);
    const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise
      ? s.finally(() => {
          this._after && o && Ls(this._after, o);
        })
      : (this._after && o && Ls(this._after, o), s);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function Xf() {
  return new Cv();
}
function xv(e = {}) {
  let t,
    n = !1;
  const r = (i) => {
    if (t && t !== i) throw new Error('Context conflict');
  };
  let o;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i ? (o = new i()) : console.warn('[unctx] `AsyncLocalStorage` is not provided.');
  }
  const s = () => {
    if (o && t === void 0) {
      const i = o.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return {
    use: () => {
      const i = s();
      if (i === void 0) throw new Error('Context is not available');
      return i;
    },
    tryUse: () => s(),
    set: (i, a) => {
      a || r(i), (t = i), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (i, a) => {
      r(i), (t = i);
      try {
        return o ? o.run(i, a) : a();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(i, a) {
      t = i;
      const l = () => {
          t = i;
        },
        c = () => (t === i ? l : void 0);
      yi.add(c);
      try {
        const u = o ? o.run(i, a) : a();
        return n || (t = void 0), await u;
      } finally {
        yi.delete(c);
      }
    }
  };
}
function Pv(e = {}) {
  const t = {};
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = xv({ ...e, ...r })), t[n], t[n];
    }
  };
}
const Jo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof global < 'u'
      ? global
      : typeof window < 'u'
      ? window
      : {},
  Wl = '__unctx__',
  Sv = Jo[Wl] || (Jo[Wl] = Pv()),
  Ov = (e, t = {}) => Sv.get(e, t),
  Vl = '__unctx_async_handlers__',
  yi = Jo[Vl] || (Jo[Vl] = new Set());
function _i(e) {
  const t = [];
  for (const o of yi) {
    const s = o();
    s && t.push(s);
  }
  const n = () => {
    for (const o of t) o();
  };
  let r = e();
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((o) => {
        throw (n(), o);
      })),
    [r, n]
  );
}
const ed = Ov('nuxt-app'),
  kv = '__nuxt_plugin';
function Av(e) {
  let t = 0;
  const n = {
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.4.3';
      },
      get vue() {
        return n.vueApp.version;
      }
    },
    payload: lt({ data: {}, state: {}, _errors: {}, ...(window.__NUXT__ ?? {}) }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let s = !1;
      return () => {
        if (!s && ((s = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook('app:suspense:resolve');
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...e
  };
  (n.hooks = Xf()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (s, i) => {
      const a = '$' + s;
      go(n, a, i), go(n.vueApp.config.globalProperties, a, i);
    }),
    go(n.vueApp, '$nuxt', n),
    go(n.vueApp.config.globalProperties, '$nuxt', n);
  {
    window.addEventListener('nuxt.preloadError', (i) => {
      n.callHook('app:chunkError', { error: i.payload });
    });
    const s = n.hook('app:error', (...i) => {
      console.error('[nuxt] error caught during app initialization', ...i);
    });
    n.hook('app:mounted', s);
  }
  const r = lt(n.payload.config),
    o = new Proxy(r, {
      get(s, i) {
        return i in s ? s[i] : s.public[i];
      },
      set(s, i, a) {
        return i === 'public' || i === 'app' ? !1 : ((s[i] = a), (s.public[i] = a), !0);
      }
    });
  return n.provide('config', o), n;
}
async function Iv(e, t) {
  if (typeof t != 'function') return;
  const { provide: n } = (await zt(e, t, [e])) || {};
  if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r]);
}
async function Rv(e, t) {
  for (const n of t) await Iv(e, n);
}
function Mv(e) {
  const t = [];
  for (const n of e) {
    if (typeof n != 'function') continue;
    let r = n;
    n.length > 1 && (r = (o) => n(o, o.provide)), t.push(r);
  }
  return (
    t.sort((n, r) => {
      var o, s;
      return (
        (((o = n.meta) == null ? void 0 : o.order) || Go.default) -
        (((s = r.meta) == null ? void 0 : s.order) || Go.default)
      );
    }),
    t
  );
}
const Go = { pre: -20, default: 0, post: 20 };
function qt(e, t) {
  var r;
  if (typeof e == 'function') return qt({ setup: e }, t);
  const n = (o) => {
    if ((e.hooks && o.hooks.addHooks(e.hooks), e.setup)) return e.setup(o);
  };
  return (
    (n.meta = {
      name: (t == null ? void 0 : t.name) || e.name || ((r = e.setup) == null ? void 0 : r.name),
      order: (t == null ? void 0 : t.order) || e.order || Go[e.enforce || 'default'] || Go.default
    }),
    (n[kv] = !0),
    n
  );
}
function zt(e, t, n) {
  const r = () => (n ? t(...n) : t());
  return ed.set(e), r();
}
function Me() {
  const e = ed.tryUse();
  if (!e) {
    const t = ze();
    if (!t) throw new Error('[nuxt] instance unavailable');
    return t.appContext.app.$nuxt;
  }
  return e;
}
function fn() {
  return Me().$config;
}
function go(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
const $v = 'modulepreload',
  Lv = function (e, t) {
    return e.startsWith('.') ? new URL(e, t).href : e;
  },
  ql = {},
  Nv = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      n.map((s) => {
        if (((s = Lv(s, r)), s in ql)) return;
        ql[s] = !0;
        const i = s.endsWith('.css'),
          a = i ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let u = o.length - 1; u >= 0; u--) {
            const f = o[u];
            if (f.href === s && (!i || f.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const c = document.createElement('link');
        if (
          ((c.rel = i ? 'stylesheet' : $v),
          i || ((c.as = 'script'), (c.crossOrigin = '')),
          (c.href = s),
          document.head.appendChild(c),
          i)
        )
          return new Promise((u, f) => {
            c.addEventListener('load', u),
              c.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${s}`)));
          });
      })
    ).then(() => t());
  },
  ie = (...e) =>
    Nv(...e).catch((t) => {
      const n = new Event('nuxt.preloadError');
      throw ((n.payload = t), window.dispatchEvent(n), t);
    }),
  Fv = le(() =>
    ie(() => import('./AsideNav.3d22093b.js'), [], import.meta.url).then((e) => e.default)
  ),
  Hv = le(() =>
    ie(() => Promise.resolve().then(() => SC), void 0, import.meta.url).then((e) => e.default)
  ),
  jv = le(() =>
    ie(() => Promise.resolve().then(() => MC), void 0, import.meta.url).then((e) => e.default)
  ),
  Bv = le(() =>
    ie(() => Promise.resolve().then(() => HC), void 0, import.meta.url).then((e) => e.default)
  ),
  Dv = le(() =>
    ie(
      () => import('./Link.6c7650ab.js'),
      ['./Link.6c7650ab.js', './Link.edf48b7a.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  zv = le(() =>
    ie(
      () => import('./ProseA.bb312eaf.js'),
      [
        './ProseA.bb312eaf.js',
        './Link.6c7650ab.js',
        './Link.edf48b7a.css',
        './ProseA.7e95b4ce.css'
      ],
      import.meta.url
    ).then((e) => e.default)
  ),
  Uv = le(() =>
    ie(
      () => import('./ProseBlockquote.277a5c06.js'),
      ['./ProseBlockquote.277a5c06.js', './ProseBlockquote.61f1ab2f.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Kv = le(() =>
    ie(
      () => import('./ProseCode.5d71fd77.js'),
      ['./ProseCode.5d71fd77.js', './ProseCode.1df68882.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Wv = le(() =>
    ie(
      () => import('./ProseCodeInline.e095d925.js'),
      ['./ProseCodeInline.e095d925.js', './ProseCodeInline.76e1717d.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Vv = le(() =>
    ie(
      () => import('./ProseH1.fe9e0b46.js'),
      ['./ProseH1.fe9e0b46.js', './ProseH1.c34b2c52.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  qv = le(() =>
    ie(
      () => import('./ProseH2.c5e878fe.js'),
      ['./ProseH2.c5e878fe.js', './ProseH2.fcd355df.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Qv = le(() =>
    ie(
      () => import('./ProseH3.4424a51d.js'),
      ['./ProseH3.4424a51d.js', './ProseH3.961f119e.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Jv = le(() =>
    ie(
      () => import('./ProseP.d7b038e6.js'),
      ['./ProseP.d7b038e6.js', './ProseP.404fc9dc.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Gv = le(() =>
    ie(
      () => import('./ProseTable.d928afcd.js'),
      ['./ProseTable.d928afcd.js', './ProseTable.633caf6b.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  Yv = le(() =>
    ie(() => Promise.resolve().then(() => DP), void 0, import.meta.url).then((e) => e.default)
  ),
  Zv = le(() =>
    ie(
      () => import('./ContentDoc.75602f47.js'),
      [
        './ContentDoc.75602f47.js',
        './ContentRenderer.d2a8361e.js',
        './ContentRendererMarkdown.49e93fa9.js',
        './index.a6ef77ff.js',
        './ContentQuery.a7d28ec3.js'
      ],
      import.meta.url
    ).then((e) => e.default)
  ),
  Xv = le(() =>
    ie(
      () => import('./ContentList.55298cf6.js'),
      ['./ContentList.55298cf6.js', './ContentQuery.a7d28ec3.js'],
      import.meta.url
    ).then((e) => e.default)
  ),
  ey = le(() =>
    ie(() => Promise.resolve().then(() => TC), void 0, import.meta.url).then((e) => e.default)
  ),
  ty = le(() =>
    ie(() => import('./ContentQuery.a7d28ec3.js'), [], import.meta.url).then((e) => e.default)
  ),
  ny = le(() =>
    ie(
      () => import('./ContentRenderer.d2a8361e.js'),
      [
        './ContentRenderer.d2a8361e.js',
        './ContentRendererMarkdown.49e93fa9.js',
        './index.a6ef77ff.js'
      ],
      import.meta.url
    ).then((e) => e.default)
  ),
  ry = le(() =>
    ie(
      () => import('./ContentRendererMarkdown.49e93fa9.js'),
      ['./ContentRendererMarkdown.49e93fa9.js', './index.a6ef77ff.js'],
      import.meta.url
    ).then((e) => e.default)
  ),
  oy = le(() =>
    ie(() => import('./ContentSlot.38ae3797.js'), [], import.meta.url).then((e) => e.default)
  ),
  sy = le(() =>
    ie(() => import('./DocumentDrivenEmpty.45e52019.js'), [], import.meta.url).then(
      (e) => e.default
    )
  ),
  iy = le(() =>
    ie(() => import('./DocumentDrivenNotFound.d54944ae.js'), [], import.meta.url).then(
      (e) => e.default
    )
  ),
  ay = le(() =>
    ie(
      () => import('./Markdown.58a3e356.js'),
      ['./Markdown.58a3e356.js', './ContentSlot.38ae3797.js'],
      import.meta.url
    ).then((e) => e.default)
  ),
  ly = le(() =>
    ie(() => import('./ProseEm.bffe0842.js'), [], import.meta.url).then((e) => e.default)
  ),
  cy = le(() =>
    ie(() => import('./ProseH4.5f8db777.js'), [], import.meta.url).then((e) => e.default)
  ),
  uy = le(() =>
    ie(() => import('./ProseH5.fb923a5d.js'), [], import.meta.url).then((e) => e.default)
  ),
  fy = le(() =>
    ie(() => import('./ProseH6.29d3cf94.js'), [], import.meta.url).then((e) => e.default)
  ),
  dy = le(() =>
    ie(() => import('./ProseHr.ca8ad6e9.js'), [], import.meta.url).then((e) => e.default)
  ),
  py = le(() =>
    ie(() => import('./ProseImg.a4f2a55c.js'), [], import.meta.url).then((e) => e.default)
  ),
  hy = le(() =>
    ie(() => import('./ProseLi.7cb8d9b6.js'), [], import.meta.url).then((e) => e.default)
  ),
  gy = le(() =>
    ie(() => import('./ProseOl.e75f8d62.js'), [], import.meta.url).then((e) => e.default)
  ),
  my = le(() =>
    ie(() => import('./ProseStrong.6cba1f53.js'), [], import.meta.url).then((e) => e.default)
  ),
  vy = le(() =>
    ie(() => import('./ProseTbody.4855cca9.js'), [], import.meta.url).then((e) => e.default)
  ),
  yy = le(() =>
    ie(() => import('./ProseTd.4e545518.js'), [], import.meta.url).then((e) => e.default)
  ),
  _y = le(() =>
    ie(() => import('./ProseTh.a2184fe2.js'), [], import.meta.url).then((e) => e.default)
  ),
  by = le(() =>
    ie(() => import('./ProseThead.415e592e.js'), [], import.meta.url).then((e) => e.default)
  ),
  wy = le(() =>
    ie(() => import('./ProseTr.9298ba8f.js'), [], import.meta.url).then((e) => e.default)
  ),
  Ey = le(() =>
    ie(() => import('./ProseUl.b2f1f237.js'), [], import.meta.url).then((e) => e.default)
  ),
  Ty = le(() =>
    ie(() => Promise.resolve().then(() => HP), void 0, import.meta.url).then((e) => e.default)
  ),
  Cy = le(() =>
    ie(
      () => import('./IconCSS.645df037.js'),
      ['./IconCSS.645df037.js', './IconCSS.01cedaa6.css'],
      import.meta.url
    ).then((e) => e.default)
  ),
  xy = [
    ['AsideNav', Fv],
    ['HeaderNav', Hv],
    ['IconsDark', jv],
    ['IconsLight', Bv],
    ['IconsLink', Dv],
    ['ProseA', zv],
    ['ProseBlockquote', Uv],
    ['ProseCode', Kv],
    ['ProseCodeInline', Wv],
    ['ProseH1', Vv],
    ['ProseH2', qv],
    ['ProseH3', Qv],
    ['ProseP', Jv],
    ['ProseTable', Gv],
    ['SubItem', Yv],
    ['ContentDoc', Zv],
    ['ContentList', Xv],
    ['ContentNavigation', ey],
    ['ContentQuery', ty],
    ['ContentRenderer', ny],
    ['ContentRendererMarkdown', ry],
    ['ContentSlot', oy],
    ['DocumentDrivenEmpty', sy],
    ['DocumentDrivenNotFound', iy],
    ['Markdown', ay],
    ['ProseEm', ly],
    ['ProseH4', cy],
    ['ProseH5', uy],
    ['ProseH6', fy],
    ['ProseHr', dy],
    ['ProseImg', py],
    ['ProseLi', hy],
    ['ProseOl', gy],
    ['ProseStrong', my],
    ['ProseTbody', vy],
    ['ProseTd', yy],
    ['ProseTh', _y],
    ['ProseThead', by],
    ['ProseTr', wy],
    ['ProseUl', Ey],
    ['Icon', Ty],
    ['IconCSS', Cy]
  ],
  Py = qt({
    name: 'nuxt:global-components',
    setup(e) {
      for (const [t, n] of xy) e.vueApp.component(t, n), e.vueApp.component('Lazy' + t, n);
    }
  });
function Sy(e) {
  return Array.isArray(e) ? e : [e];
}
const td = ['title', 'script', 'style', 'noscript'],
  nd = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  Oy = [
    'title',
    'titleTemplate',
    'templateParams',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript'
  ],
  ky = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams'],
  Ay = ['tagPosition', 'tagPriority', 'tagDuplicateStrategy', 'innerHTML', 'textContent'];
function rd(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function bi(e) {
  return rd(
    `${e.tag}:${e.textContent || e.innerHTML || ''}:${Object.entries(e.props)
      .map(([t, n]) => `${t}:${String(n)}`)
      .join(',')}`
  );
}
function Iy(e) {
  let t = 9;
  for (const n of e) for (let r = 0; r < n.length; ) t = Math.imul(t ^ n.charCodeAt(r++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function od(e, t) {
  const { props: n, tag: r } = e;
  if (ky.includes(r)) return r;
  if (r === 'link' && n.rel === 'canonical') return 'canonical';
  if (n.charset) return 'charset';
  const o = ['id'];
  r === 'meta' && o.push('name', 'property', 'http-equiv');
  for (const s of o)
    if (typeof n[s] < 'u') {
      const i = String(n[s]);
      return t && !t(i) ? !1 : `${r}:${s}:${i}`;
    }
  return !1;
}
function Ql(e, t) {
  return e == null ? t || null : typeof e == 'function' ? e(t) : e;
}
function mo(e, t = !1, n) {
  const { tag: r, $el: o } = e;
  o &&
    (Object.entries(r.props).forEach(([s, i]) => {
      i = String(i);
      const a = `attr:${s}`;
      if (s === 'class') {
        if (!i) return;
        for (const l of i.split(' ')) {
          const c = `${a}:${l}`;
          n && n(e, c, () => o.classList.remove(l)), o.classList.contains(l) || o.classList.add(l);
        }
        return;
      }
      n && !s.startsWith('data-h-') && n(e, a, () => o.removeAttribute(s)),
        (t || o.getAttribute(s) !== i) && o.setAttribute(s, i);
    }),
    td.includes(r.tag) &&
      (r.textContent && r.textContent !== o.textContent
        ? (o.textContent = r.textContent)
        : r.innerHTML && r.innerHTML !== o.innerHTML && (o.innerHTML = r.innerHTML)));
}
let mr = !1;
async function Ry(e, t = {}) {
  var d, v;
  const n = { shouldRender: !0 };
  if ((await e.hooks.callHook('dom:beforeRender', n), !n.shouldRender)) return;
  const r = t.document || e.resolvedOptions.document || window.document,
    o = (await e.resolveTags()).map(a);
  if (e.resolvedOptions.experimentalHashHydration && ((mr = mr || e._hash || !1), mr)) {
    const p = Iy(o.map((h) => h.tag._h));
    if (mr === p) return;
    mr = p;
  }
  const s = e._popSideEffectQueue();
  e.headEntries()
    .map((p) => p._sde)
    .forEach((p) => {
      Object.entries(p).forEach(([h, _]) => {
        s[h] = _;
      });
    });
  const i = (p, h, _) => {
    (h = `${p.renderId}:${h}`), p.entry && (p.entry._sde[h] = _), delete s[h];
  };
  function a(p) {
    const h = e.headEntries().find((g) => g._i === p._e),
      _ = {
        renderId: p._d || bi(p),
        $el: null,
        shouldRender: !0,
        tag: p,
        entry: h,
        markSideEffect: (g, m) => i(_, g, m)
      };
    return _;
  }
  const l = [],
    c = { body: [], head: [] },
    u = (p) => {
      (e._elMap[p.renderId] = p.$el),
        l.push(p),
        i(p, 'el', () => {
          var h;
          (h = p.$el) == null || h.remove(), delete e._elMap[p.renderId];
        });
    };
  for (const p of o) {
    if ((await e.hooks.callHook('dom:beforeRenderTag', p), !p.shouldRender)) continue;
    const { tag: h } = p;
    if (h.tag === 'title') {
      (r.title = h.textContent || ''), l.push(p);
      continue;
    }
    if (h.tag === 'htmlAttrs' || h.tag === 'bodyAttrs') {
      (p.$el = r[h.tag === 'htmlAttrs' ? 'documentElement' : 'body']), mo(p, !1, i), l.push(p);
      continue;
    }
    if (
      ((p.$el = e._elMap[p.renderId]),
      !p.$el &&
        h.key &&
        (p.$el = r.querySelector(
          `${(d = h.tagPosition) != null && d.startsWith('body') ? 'body' : 'head'} > ${
            h.tag
          }[data-h-${h._h}]`
        )),
      p.$el)
    ) {
      p.tag._d && mo(p), u(p);
      continue;
    }
    c[(v = h.tagPosition) != null && v.startsWith('body') ? 'body' : 'head'].push(p);
  }
  const f = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  Object.entries(c).forEach(([p, h]) => {
    var g;
    if (!h.length) return;
    const _ = (g = r == null ? void 0 : r[p]) == null ? void 0 : g.children;
    if (_) {
      for (const m of [..._].reverse()) {
        const b = m.tagName.toLowerCase();
        if (!nd.includes(b)) continue;
        const E = m.getAttributeNames().reduce((T, M) => ({ ...T, [M]: m.getAttribute(M) }), {}),
          P = { tag: b, props: E };
        m.innerHTML && (P.innerHTML = m.innerHTML);
        const C = bi(P);
        let x = h.findIndex((T) => (T == null ? void 0 : T.renderId) === C);
        if (x === -1) {
          const T = od(P);
          x = h.findIndex((M) => (M == null ? void 0 : M.tag._d) && M.tag._d === T);
        }
        if (x !== -1) {
          const T = h[x];
          (T.$el = m), mo(T), u(T), delete h[x];
        }
      }
      h.forEach((m) => {
        const b = m.tag.tagPosition || 'head';
        (f[b] = f[b] || r.createDocumentFragment()),
          m.$el || ((m.$el = r.createElement(m.tag.tag)), mo(m, !0)),
          f[b].appendChild(m.$el),
          u(m);
      });
    }
  }),
    f.head && r.head.appendChild(f.head),
    f.bodyOpen && r.body.insertBefore(f.bodyOpen, r.body.firstChild),
    f.bodyClose && r.body.appendChild(f.bodyClose);
  for (const p of l) await e.hooks.callHook('dom:renderTag', p);
  Object.values(s).forEach((p) => p());
}
let Ns = null;
async function My(e, t = {}) {
  function n() {
    return (Ns = null), Ry(e, t);
  }
  const r = t.delayFn || ((o) => setTimeout(o, 10));
  return (Ns = Ns || new Promise((o) => r(() => o(n()))));
}
function $y(e) {
  return {
    hooks: {
      'entries:updated': function (t) {
        if (typeof (e == null ? void 0 : e.document) > 'u' && typeof window > 'u') return;
        let n = e == null ? void 0 : e.delayFn;
        !n && typeof requestAnimationFrame < 'u' && (n = requestAnimationFrame),
          My(t, { document: (e == null ? void 0 : e.document) || window.document, delayFn: n });
      }
    }
  };
}
function Ly(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.head.querySelector('meta[name="unhead:ssr"]')) == null
      ? void 0
      : t.getAttribute('content')) || !1
  );
}
const Jl = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 };
function Gl(e) {
  if (typeof e.tagPriority == 'number') return e.tagPriority;
  if (e.tag === 'meta') {
    if (e.props.charset) return -2;
    if (e.props['http-equiv'] === 'content-security-policy') return 0;
  }
  const t = e.tagPriority || e.tag;
  return t in Jl ? Jl[t] : 10;
}
const Ny = [
  { prefix: 'before:', offset: -1 },
  { prefix: 'after:', offset: 1 }
];
function Fy() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        const t = (n) => {
          var r;
          return (r = e.tags.find((o) => o._d === n)) == null ? void 0 : r._p;
        };
        for (const { prefix: n, offset: r } of Ny)
          for (const o of e.tags.filter(
            (s) => typeof s.tagPriority == 'string' && s.tagPriority.startsWith(n)
          )) {
            const s = t(o.tagPriority.replace(n, ''));
            typeof s < 'u' && (o._p = s + r);
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Gl(n) - Gl(r));
      }
    }
  };
}
function Hy() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        const { tags: t } = e;
        let n = t.findIndex((o) => o.tag === 'titleTemplate');
        const r = t.findIndex((o) => o.tag === 'title');
        if (r !== -1 && n !== -1) {
          const o = Ql(t[n].textContent, t[r].textContent);
          o !== null ? (t[r].textContent = o || t[r].textContent) : delete t[r];
        } else if (n !== -1) {
          const o = Ql(t[n].textContent);
          o !== null && ((t[n].textContent = o), (t[n].tag = 'title'), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      }
    }
  };
}
function jy() {
  return {
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        typeof e.props.body < 'u' && ((e.tagPosition = 'bodyClose'), delete e.props.body);
      }
    }
  };
}
const By = ['link', 'style', 'script', 'noscript'];
function Dy() {
  return {
    hooks: {
      'tag:normalise': ({ tag: e, resolvedOptions: t }) => {
        t.experimentalHashHydration === !0 && (e._h = bi(e)),
          e.key && By.includes(e.tag) && ((e._h = rd(e.key)), (e.props[`data-h-${e._h}`] = ''));
      }
    }
  };
}
const Yl = ['script', 'link', 'bodyAttrs'];
function zy() {
  const e = (t, n) => {
    const r = {},
      o = {};
    Object.entries(n.props).forEach(([i, a]) => {
      i.startsWith('on') && typeof a == 'function' ? (o[i] = a) : (r[i] = a);
    });
    let s;
    return (
      t === 'dom' &&
        n.tag === 'script' &&
        typeof r.src == 'string' &&
        typeof o.onload < 'u' &&
        ((s = r.src), delete r.src),
      { props: r, eventHandlers: o, delayedSrc: s }
    );
  };
  return {
    hooks: {
      'ssr:render': function (t) {
        t.tags = t.tags.map(
          (n) => (
            !Yl.includes(n.tag) ||
              !Object.entries(n.props).find(
                ([r, o]) => r.startsWith('on') && typeof o == 'function'
              ) ||
              (n.props = e('ssr', n).props),
            n
          )
        );
      },
      'dom:beforeRenderTag': function (t) {
        if (
          !Yl.includes(t.tag.tag) ||
          !Object.entries(t.tag.props).find(
            ([s, i]) => s.startsWith('on') && typeof i == 'function'
          )
        )
          return;
        const { props: n, eventHandlers: r, delayedSrc: o } = e('dom', t.tag);
        Object.keys(r).length &&
          ((t.tag.props = n), (t.tag._eventHandlers = r), (t.tag._delayedSrc = o));
      },
      'dom:renderTag': function (t) {
        const n = t.$el;
        if (!t.tag._eventHandlers || !n) return;
        const r = t.tag.tag === 'bodyAttrs' && typeof window < 'u' ? window : n;
        Object.entries(t.tag._eventHandlers).forEach(([o, s]) => {
          const i = `${t.tag._d || t.tag._p}:${o}`,
            a = o.slice(2).toLowerCase(),
            l = `data-h-${a}`;
          if ((t.markSideEffect(i, () => {}), n.hasAttribute(l))) return;
          const c = s;
          n.setAttribute(l, ''),
            r.addEventListener(a, c),
            t.entry &&
              (t.entry._sde[i] = () => {
                r.removeEventListener(a, c), n.removeAttribute(l);
              });
        }),
          t.tag._delayedSrc && n.setAttribute('src', t.tag._delayedSrc);
      }
    }
  };
}
const Uy = ['templateParams', 'htmlAttrs', 'bodyAttrs'];
function Ky() {
  return {
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        ['hid', 'vmid', 'key'].forEach((r) => {
          e.props[r] && ((e.key = e.props[r]), delete e.props[r]);
        });
        const n = od(e) || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      'tags:resolve': function (e) {
        const t = {};
        e.tags.forEach((r) => {
          const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
            s = t[o];
          if (s) {
            let a = r == null ? void 0 : r.tagDuplicateStrategy;
            if ((!a && Uy.includes(r.tag) && (a = 'merge'), a === 'merge')) {
              const l = s.props;
              ['class', 'style'].forEach((c) => {
                r.props[c] &&
                  l[c] &&
                  (c === 'style' && !l[c].endsWith(';') && (l[c] += ';'),
                  (r.props[c] = `${l[c]} ${r.props[c]}`));
              }),
                (t[o].props = { ...l, ...r.props });
              return;
            } else if (r._e === s._e) {
              (s._duped = s._duped || []),
                (r._d = `${s._d}:${s._duped.length + 1}`),
                s._duped.push(r);
              return;
            }
          }
          const i = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
          if (nd.includes(r.tag) && i === 0) {
            delete t[o];
            return;
          }
          t[o] = r;
        });
        const n = [];
        Object.values(t).forEach((r) => {
          const o = r._duped;
          delete r._duped, n.push(r), o && n.push(...o);
        }),
          (e.tags = n);
      }
    }
  };
}
function vo(e, t) {
  function n(s) {
    if (['s', 'pageTitle'].includes(s)) return t.pageTitle;
    let i;
    return (
      s.includes('.') ? (i = s.split('.').reduce((a, l) => (a && a[l]) || void 0, t)) : (i = t[s]),
      typeof i < 'u' ? i || '' : !1
    );
  }
  let r = e;
  try {
    r = decodeURI(e);
  } catch {}
  return (
    (r.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((s) => {
        const i = n(s.slice(1));
        typeof i == 'string' &&
          (e = e.replaceAll(new RegExp(`\\${s}(\\W|$)`, 'g'), `${i}$1`).trim());
      }),
    t.separator &&
      (e.endsWith(t.separator) && (e = e.slice(0, -t.separator.length).trim()),
      e.startsWith(t.separator) && (e = e.slice(t.separator.length).trim()),
      (e = e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`, 'g'), t.separator))),
    e
  );
}
function Wy() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        var s;
        const { tags: t } = e,
          n = (s = t.find((i) => i.tag === 'title')) == null ? void 0 : s.textContent,
          r = t.findIndex((i) => i.tag === 'templateParams'),
          o = r !== -1 ? t[r].props : {};
        o.pageTitle = o.pageTitle || n || '';
        for (const i of t)
          if (['titleTemplate', 'title'].includes(i.tag) && typeof i.textContent == 'string')
            i.textContent = vo(i.textContent, o);
          else if (i.tag === 'meta' && typeof i.props.content == 'string')
            i.props.content = vo(i.props.content, o);
          else if (i.tag === 'link' && typeof i.props.href == 'string')
            i.props.href = vo(i.props.href, o);
          else if (
            i.tag === 'script' &&
            ['application/json', 'application/ld+json'].includes(i.props.type) &&
            typeof i.innerHTML == 'string'
          )
            try {
              i.innerHTML = JSON.stringify(JSON.parse(i.innerHTML), (a, l) =>
                typeof l == 'string' ? vo(l, o) : l
              );
            } catch {}
        e.tags = t.filter((i) => i.tag !== 'templateParams');
      }
    }
  };
}
const Vy = typeof window < 'u';
let sd;
function qy(e) {
  return (sd = e);
}
function Qy() {
  return sd;
}
async function Jy(e, t) {
  const n = { tag: e, props: {} };
  return e === 'templateParams'
    ? ((n.props = t), n)
    : ['title', 'titleTemplate'].includes(e)
    ? ((n.textContent = t instanceof Promise ? await t : t), n)
    : typeof t == 'string'
    ? ['script', 'noscript', 'style'].includes(e)
      ? (e === 'script' && (/^(https?:)?\/\//.test(t) || t.startsWith('/'))
          ? (n.props.src = t)
          : (n.innerHTML = t),
        n)
      : !1
    : ((n.props = await Yy(e, { ...t })),
      n.props.children && (n.props.innerHTML = n.props.children),
      delete n.props.children,
      Object.keys(n.props)
        .filter((r) => Ay.includes(r))
        .forEach((r) => {
          (!['innerHTML', 'textContent'].includes(r) || td.includes(n.tag)) && (n[r] = n.props[r]),
            delete n.props[r];
        }),
      ['innerHTML', 'textContent'].forEach((r) => {
        if (
          n.tag === 'script' &&
          typeof n[r] == 'string' &&
          ['application/ld+json', 'application/json'].includes(n.props.type)
        )
          try {
            n[r] = JSON.parse(n[r]);
          } catch {
            n[r] = '';
          }
        typeof n[r] == 'object' && (n[r] = JSON.stringify(n[r]));
      }),
      n.props.class && (n.props.class = Gy(n.props.class)),
      n.props.content && Array.isArray(n.props.content)
        ? n.props.content.map((r) => ({ ...n, props: { ...n.props, content: r } }))
        : n);
}
function Gy(e) {
  return (
    typeof e == 'object' && !Array.isArray(e) && (e = Object.keys(e).filter((t) => e[t])),
    (Array.isArray(e) ? e.join(' ') : e)
      .split(' ')
      .filter((t) => t.trim())
      .filter(Boolean)
      .join(' ')
  );
}
async function Yy(e, t) {
  for (const n of Object.keys(t)) {
    const r = n.startsWith('data-');
    t[n] instanceof Promise && (t[n] = await t[n]),
      String(t[n]) === 'true'
        ? (t[n] = r ? 'true' : '')
        : String(t[n]) === 'false' && (r ? (t[n] = 'false') : delete t[n]);
  }
  return t;
}
const Zy = 10;
async function Xy(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, r]) => typeof r < 'u' && Oy.includes(n))
      .forEach(([n, r]) => {
        const o = Sy(r);
        t.push(...o.map((s) => Jy(n, s)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << Zy) + r), n))
  );
}
function e0() {
  return [Ky(), Fy(), Wy(), Hy(), Dy(), zy(), jy()];
}
function t0(e = {}) {
  return [
    $y({ document: e == null ? void 0 : e.document, delayFn: e == null ? void 0 : e.domDelayFn })
  ];
}
function n0(e = {}) {
  const t = r0({ ...e, plugins: [...t0(e), ...((e == null ? void 0 : e.plugins) || [])] });
  return (
    e.experimentalHashHydration &&
      t.resolvedOptions.document &&
      (t._hash = Ly(t.resolvedOptions.document)),
    qy(t),
    t
  );
}
function r0(e = {}) {
  let t = [],
    n = {},
    r = 0;
  const o = Xf();
  e != null && e.hooks && o.addHooks(e.hooks),
    (e.plugins = [...e0(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((a) => a.hooks && o.addHooks(a.hooks)),
    (e.document = e.document || (Vy ? document : void 0));
  const s = () => o.callHook('entries:updated', i),
    i = {
      resolvedOptions: e,
      headEntries() {
        return t;
      },
      get hooks() {
        return o;
      },
      use(a) {
        a.hooks && o.addHooks(a.hooks);
      },
      push(a, l) {
        const c = { _i: r++, input: a, _sde: {} };
        return (
          l != null && l.mode && (c._m = l == null ? void 0 : l.mode),
          l != null && l.transform && (c._t = l == null ? void 0 : l.transform),
          t.push(c),
          s(),
          {
            dispose() {
              t = t.filter((u) =>
                u._i !== c._i ? !0 : ((n = { ...n, ...(u._sde || {}) }), (u._sde = {}), s(), !1)
              );
            },
            patch(u) {
              t = t.map((f) => (f._i === c._i && ((c.input = f.input = u), s()), f));
            }
          }
        );
      },
      async resolveTags() {
        const a = { tags: [], entries: [...t] };
        await o.callHook('entries:resolve', a);
        for (const l of a.entries) {
          const c = l._t || ((u) => u);
          if (((l.resolvedInput = c(l.resolvedInput || l.input)), l.resolvedInput))
            for (const u of await Xy(l)) {
              const f = { tag: u, entry: l, resolvedOptions: i.resolvedOptions };
              await o.callHook('tag:normalise', f), a.tags.push(f.tag);
            }
        }
        return await o.callHook('tags:resolve', a), a.tags;
      },
      _popSideEffectQueue() {
        const a = { ...n };
        return (n = {}), a;
      },
      _elMap: {}
    };
  return i.hooks.callHook('init', i), i;
}
function o0(e) {
  return typeof e == 'function' ? e() : S(e);
}
function Yo(e, t = '') {
  if (e instanceof Promise) return e;
  const n = o0(e);
  return !e || !n
    ? n
    : Array.isArray(n)
    ? n.map((r) => Yo(r, t))
    : typeof n == 'object'
    ? Object.fromEntries(
        Object.entries(n).map(([r, o]) =>
          r === 'titleTemplate' || r.startsWith('on') ? [r, S(o)] : [r, Yo(o, r)]
        )
      )
    : n;
}
const s0 = Nf.startsWith('3'),
  i0 = typeof window < 'u',
  id = 'usehead';
function _a() {
  return (ze() && Ae(id)) || Qy();
}
function a0(e) {
  return {
    install(n) {
      s0 &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(id, e));
    }
  }.install;
}
function l0(e = {}) {
  const t = n0({
    ...e,
    domDelayFn: (n) => setTimeout(() => yt(() => n()), 10),
    plugins: [c0(), ...((e == null ? void 0 : e.plugins) || [])]
  });
  return (t.install = a0(t)), t;
}
function c0() {
  return {
    hooks: {
      'entries:resolve': function (e) {
        for (const t of e.entries) t.resolvedInput = Yo(t.input);
      }
    }
  };
}
function u0(e, t = {}) {
  const n = _a(),
    r = J(!1),
    o = J({});
  la(() => {
    o.value = r.value ? {} : Yo(e);
  });
  const s = n.push(o.value, t);
  return (
    fe(o, (a) => {
      s.patch(a);
    }),
    ze() &&
      (Ye(() => {
        s.dispose();
      }),
      ca(() => {
        r.value = !0;
      }),
      pf(() => {
        r.value = !1;
      })),
    s
  );
}
function f0(e, t = {}) {
  return _a().push(e, t);
}
function d0(e, t = {}) {
  var r;
  const n = _a();
  if (n) {
    const o = i0 || !!((r = n.resolvedOptions) != null && r.document);
    return (t.mode === 'server' && o) || (t.mode === 'client' && !o)
      ? void 0
      : o
      ? u0(e, t)
      : f0(e, t);
  }
}
const p0 = {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' }
    ],
    link: [],
    style: [],
    script: [],
    noscript: []
  },
  wi = !1,
  h0 = !1,
  g0 = '__nuxt',
  m0 = !1,
  v0 = qt({
    name: 'nuxt:head',
    setup(e) {
      const n = l0();
      n.push(p0), e.vueApp.use(n);
      {
        let r = !0;
        const o = () => {
          (r = !1), n.hooks.callHook('entries:updated', n);
        };
        n.hooks.hook('dom:beforeRender', (s) => {
          s.shouldRender = !r;
        }),
          e.hooks.hook('page:start', () => {
            r = !0;
          }),
          e.hooks.hook('page:finish', o),
          e.hooks.hook('app:suspense:resolve', o);
      }
    }
  });
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Nn = typeof window < 'u';
function y0(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const Ce = Object.assign;
function Fs(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Pt(o) ? o.map(e) : e(o);
  }
  return n;
}
const kr = () => {},
  Pt = Array.isArray,
  _0 = /\/$/,
  b0 = (e) => e.replace(_0, '');
function Hs(e, t, n = '/') {
  let r,
    o = {},
    s = '',
    i = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (s = t.slice(l + 1, a > -1 ? a : t.length)), (o = e(s))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = C0(r ?? t, n)),
    { fullPath: r + (s && '?') + s + i, path: r, query: o, hash: i }
  );
}
function w0(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Zl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function E0(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Jn(t.matched[r], n.matched[o]) &&
    ad(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Jn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ad(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!T0(e[n], t[n])) return !1;
  return !0;
}
function T0(e, t) {
  return Pt(e) ? Xl(e, t) : Pt(t) ? Xl(t, e) : e === t;
}
function Xl(e, t) {
  return Pt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function C0(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/');
  let o = n.length - 1,
    s,
    i;
  for (s = 0; s < r.length; s++)
    if (((i = r[s]), i !== '.'))
      if (i === '..') o > 1 && o--;
      else break;
  return n.slice(0, o).join('/') + '/' + r.slice(s - (s === r.length ? 1 : 0)).join('/');
}
var zr;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(zr || (zr = {}));
var Ar;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(Ar || (Ar = {}));
function x0(e) {
  if (!e)
    if (Nn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), b0(e);
}
const P0 = /^[^#]+#/;
function S0(e, t) {
  return e.replace(P0, '#') + t;
}
function O0(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const vs = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function k0(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = O0(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function ec(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ei = new Map();
function A0(e, t) {
  Ei.set(e, t);
}
function I0(e) {
  const t = Ei.get(e);
  return Ei.delete(e), t;
}
let R0 = () => location.protocol + '//' + location.host;
function ld(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf('#');
  if (s > -1) {
    let a = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      l = o.slice(a);
    return l[0] !== '/' && (l = '/' + l), Zl(l, '');
  }
  return Zl(n, e) + r + o;
}
function M0(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const a = ({ state: d }) => {
    const v = ld(e, location),
      p = n.value,
      h = t.value;
    let _ = 0;
    if (d) {
      if (((n.value = v), (t.value = d), i && i === p)) {
        i = null;
        return;
      }
      _ = h ? d.position - h.position : 0;
    } else r(v);
    o.forEach((g) => {
      g(n.value, p, {
        delta: _,
        type: zr.pop,
        direction: _ ? (_ > 0 ? Ar.forward : Ar.back) : Ar.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function c(d) {
    o.push(d);
    const v = () => {
      const p = o.indexOf(d);
      p > -1 && o.splice(p, 1);
    };
    return s.push(v), v;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(Ce({}, d.state, { scroll: vs() }), '');
  }
  function f() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', u),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function tc(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? vs() : null
  };
}
function $0(e) {
  const { history: t, location: n } = window,
    r = { value: ld(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    );
  function s(l, c, u) {
    const f = e.indexOf('#'),
      d = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l : R0() + e + l;
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', d), (o.value = c);
    } catch (v) {
      console.error(v), n[u ? 'replace' : 'assign'](d);
    }
  }
  function i(l, c) {
    const u = Ce({}, t.state, tc(o.value.back, l, o.value.forward, !0), c, {
      position: o.value.position
    });
    s(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = Ce({}, o.value, t.state, { forward: l, scroll: vs() });
    s(u.current, u, !0);
    const f = Ce({}, tc(r.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (r.value = l);
  }
  return { location: r, state: o, push: a, replace: i };
}
function cd(e) {
  e = x0(e);
  const t = $0(e),
    n = M0(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = Ce({ location: '', base: e, go: r, createHref: S0.bind(null, e) }, t, n);
  return (
    Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
    o
  );
}
function L0(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    cd(e)
  );
}
function N0(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function ud(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const Zt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  fd = Symbol('');
var nc;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(nc || (nc = {}));
function Gn(e, t) {
  return Ce(new Error(), { type: e, [fd]: !0 }, t);
}
function Nt(e, t) {
  return e instanceof Error && fd in e && (t == null || !!(e.type & t));
}
const rc = '[^/]+?',
  F0 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  H0 = /[.+*?^${}()[\]/\\]/g;
function j0(e, t) {
  const n = Ce({}, F0, t),
    r = [];
  let o = n.start ? '^' : '';
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (o += '/');
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0) f || (o += '/'), (o += d.value.replace(H0, '\\$&')), (v += 40);
      else if (d.type === 1) {
        const { value: p, repeatable: h, optional: _, regexp: g } = d;
        s.push({ name: p, repeatable: h, optional: _ });
        const m = g || rc;
        if (m !== rc) {
          v += 10;
          try {
            new RegExp(`(${m})`);
          } catch (E) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${m}): ` + E.message);
          }
        }
        let b = h ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        f || (b = _ && c.length < 2 ? `(?:/${b})` : '/' + b),
          _ && (b += '?'),
          (o += b),
          (v += 20),
          _ && (v += -8),
          h && (v += -20),
          m === '.*' && (v += -50);
      }
      u.push(v);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
  const i = new RegExp(o, n.sensitive ? '' : 'i');
  function a(c) {
    const u = c.match(i),
      f = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const v = u[d] || '',
        p = s[d - 1];
      f[p.name] = v && p.repeatable ? v.split('/') : v;
    }
    return f;
  }
  function l(c) {
    let u = '',
      f = !1;
    for (const d of e) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const v of d)
        if (v.type === 0) u += v.value;
        else if (v.type === 1) {
          const { value: p, repeatable: h, optional: _ } = v,
            g = p in c ? c[p] : '';
          if (Pt(g) && !h)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`
            );
          const m = Pt(g) ? g.join('/') : g;
          if (!m)
            if (_) d.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${p}"`);
          u += m;
        }
    }
    return u || '/';
  }
  return { re: i, score: r, keys: s, parse: a, stringify: l };
}
function B0(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function D0(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = B0(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (oc(r)) return 1;
    if (oc(o)) return -1;
  }
  return o.length - r.length;
}
function oc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const z0 = { type: 0, value: '' },
  U0 = /[a-zA-Z0-9_]/;
function K0(e) {
  if (!e) return [[]];
  if (e === '/') return [[z0]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${c}": ${v}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let a = 0,
    l,
    c = '',
    u = '';
  function f() {
    c &&
      (n === 0
        ? s.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (l === '*' || l === '+') &&
            t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
          s.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?'
          }))
        : t('Invalid state to consume buffer'),
      (c = ''));
  }
  function d() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (c && f(), i()) : l === ':' ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : U0.test(l)
          ? d()
          : (f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), o;
}
function W0(e, t, n) {
  const r = j0(K0(e.path), n),
    o = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function V0(e, t) {
  const n = [],
    r = new Map();
  t = ac({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return r.get(u);
  }
  function s(u, f, d) {
    const v = !d,
      p = q0(u);
    p.aliasOf = d && d.record;
    const h = ac(t, u),
      _ = [p];
    if ('alias' in u) {
      const b = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const E of b)
        _.push(
          Ce({}, p, {
            components: d ? d.record.components : p.components,
            path: E,
            aliasOf: d ? d.record : p
          })
        );
    }
    let g, m;
    for (const b of _) {
      const { path: E } = b;
      if (f && E[0] !== '/') {
        const P = f.record.path,
          C = P[P.length - 1] === '/' ? '' : '/';
        b.path = f.record.path + (E && C + E);
      }
      if (
        ((g = W0(b, f, h)),
        d
          ? d.alias.push(g)
          : ((m = m || g), m !== g && m.alias.push(g), v && u.name && !ic(g) && i(u.name)),
        p.children)
      ) {
        const P = p.children;
        for (let C = 0; C < P.length; C++) s(P[C], g, d && d.children[C]);
      }
      (d = d || g),
        ((g.record.components && Object.keys(g.record.components).length) ||
          g.record.name ||
          g.record.redirect) &&
          l(g);
    }
    return m
      ? () => {
          i(m);
        }
      : kr;
  }
  function i(u) {
    if (ud(u)) {
      const f = r.get(u);
      f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < n.length && D0(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !dd(u, n[f]));

    )
      f++;
    n.splice(f, 0, u), u.record.name && !ic(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let d,
      v = {},
      p,
      h;
    if ('name' in u && u.name) {
      if (((d = r.get(u.name)), !d)) throw Gn(1, { location: u });
      (h = d.record.name),
        (v = Ce(
          sc(
            f.params,
            d.keys.filter((m) => !m.optional).map((m) => m.name)
          ),
          u.params &&
            sc(
              u.params,
              d.keys.map((m) => m.name)
            )
        )),
        (p = d.stringify(v));
    } else if ('path' in u)
      (p = u.path), (d = n.find((m) => m.re.test(p))), d && ((v = d.parse(p)), (h = d.record.name));
    else {
      if (((d = f.name ? r.get(f.name) : n.find((m) => m.re.test(f.path))), !d))
        throw Gn(1, { location: u, currentLocation: f });
      (h = d.record.name), (v = Ce({}, f.params, u.params)), (p = d.stringify(v));
    }
    const _ = [];
    let g = d;
    for (; g; ) _.unshift(g.record), (g = g.parent);
    return { name: h, path: p, params: v, matched: _, meta: J0(_) };
  }
  return (
    e.forEach((u) => s(u)),
    { addRoute: s, resolve: c, removeRoute: i, getRoutes: a, getRecordMatcher: o }
  );
}
function sc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function q0(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Q0(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  };
}
function Q0(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r];
  return t;
}
function ic(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function J0(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function ac(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function dd(e, t) {
  return t.children.some((n) => n === e || dd(e, n));
}
const pd = /#/g,
  G0 = /&/g,
  Y0 = /\//g,
  Z0 = /=/g,
  X0 = /\?/g,
  hd = /\+/g,
  e_ = /%5B/g,
  t_ = /%5D/g,
  gd = /%5E/g,
  n_ = /%60/g,
  md = /%7B/g,
  r_ = /%7C/g,
  vd = /%7D/g,
  o_ = /%20/g;
function ba(e) {
  return encodeURI('' + e)
    .replace(r_, '|')
    .replace(e_, '[')
    .replace(t_, ']');
}
function s_(e) {
  return ba(e).replace(md, '{').replace(vd, '}').replace(gd, '^');
}
function Ti(e) {
  return ba(e)
    .replace(hd, '%2B')
    .replace(o_, '+')
    .replace(pd, '%23')
    .replace(G0, '%26')
    .replace(n_, '`')
    .replace(md, '{')
    .replace(vd, '}')
    .replace(gd, '^');
}
function i_(e) {
  return Ti(e).replace(Z0, '%3D');
}
function a_(e) {
  return ba(e).replace(pd, '%23').replace(X0, '%3F');
}
function l_(e) {
  return e == null ? '' : a_(e).replace(Y0, '%2F');
}
function Zo(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
function c_(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(hd, ' '),
      i = s.indexOf('='),
      a = Zo(i < 0 ? s : s.slice(0, i)),
      l = i < 0 ? null : Zo(s.slice(i + 1));
    if (a in t) {
      let c = t[a];
      Pt(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function lc(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = i_(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Pt(r) ? r.map((s) => s && Ti(s)) : [r && Ti(r)]).forEach((s) => {
      s !== void 0 && ((t += (t.length ? '&' : '') + n), s != null && (t += '=' + s));
    });
  }
  return t;
}
function u_(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Pt(r) ? r.map((o) => (o == null ? null : '' + o)) : r == null ? r : '' + r);
  }
  return t;
}
const f_ = Symbol(''),
  cc = Symbol(''),
  wa = Symbol(''),
  yd = Symbol(''),
  Ci = Symbol('');
function vr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function tn(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, a) => {
      const l = (f) => {
          f === !1
            ? a(Gn(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : N0(f)
            ? a(Gn(2, { from: t, to: f }))
            : (s && r.enterCallbacks[o] === s && typeof f == 'function' && s.push(f), i());
        },
        c = e.call(r && r.instances[o], t, n, l);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(l)), u.catch((f) => a(f));
    });
}
function js(e, t, n, r) {
  const o = [];
  for (const s of e)
    for (const i in s.components) {
      let a = s.components[i];
      if (!(t !== 'beforeRouteEnter' && !s.instances[i]))
        if (d_(a)) {
          const c = (a.__vccOpts || a)[t];
          c && o.push(tn(c, n, r, s, i));
        } else {
          let l = a();
          o.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
                );
              const u = y0(c) ? c.default : c;
              s.components[i] = u;
              const d = (u.__vccOpts || u)[t];
              return d && tn(d, n, r, s, i)();
            })
          );
        }
    }
  return o;
}
function d_(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function uc(e) {
  const t = Ae(wa),
    n = Ae(yd),
    r = j(() => t.resolve(S(e.to))),
    o = j(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(Jn.bind(null, u));
      if (d > -1) return d;
      const v = fc(l[c - 2]);
      return c > 1 && fc(u) === v && f[f.length - 1].path !== v
        ? f.findIndex(Jn.bind(null, l[c - 2]))
        : d;
    }),
    s = j(() => o.value > -1 && m_(n.params, r.value.params)),
    i = j(() => o.value > -1 && o.value === n.matched.length - 1 && ad(n.params, r.value.params));
  function a(l = {}) {
    return g_(l) ? t[S(e.replace) ? 'replace' : 'push'](S(e.to)).catch(kr) : Promise.resolve();
  }
  return { route: r, href: j(() => r.value.href), isActive: s, isExactActive: i, navigate: a };
}
const p_ = se({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: uc,
    setup(e, { slots: t }) {
      const n = lt(uc(e)),
        { options: r } = Ae(wa),
        o = j(() => ({
          [dc(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [dc(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : ge(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
              },
              s
            );
      };
    }
  }),
  h_ = p_;
function g_(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function m_(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == 'string') {
      if (r !== o) return !1;
    } else if (!Pt(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1;
  }
  return !0;
}
function fc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const dc = (e, t, n) => e ?? t ?? n,
  v_ = se({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Ae(Ci),
        o = j(() => e.route || r.value),
        s = Ae(cc, 0),
        i = j(() => {
          let c = S(s);
          const { matched: u } = o.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = j(() => o.value.matched[i.value]);
      et(
        cc,
        j(() => i.value + 1)
      ),
        et(f_, a),
        et(Ci, o);
      const l = J();
      return (
        fe(
          () => [l.value, a.value, e.name],
          ([c, u, f], [d, v, p]) => {
            u &&
              ((u.instances[f] = c),
              v &&
                v !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = v.leaveGuards),
                u.updateGuards.size || (u.updateGuards = v.updateGuards))),
              c && u && (!v || !Jn(u, v) || !d) && (u.enterCallbacks[f] || []).forEach((h) => h(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = o.value,
            u = e.name,
            f = a.value,
            d = f && f.components[u];
          if (!d) return pc(n.default, { Component: d, route: c });
          const v = f.props[u],
            p = v ? (v === !0 ? c.params : typeof v == 'function' ? v(c) : v) : null,
            _ = ge(
              d,
              Ce({}, p, t, {
                onVnodeUnmounted: (g) => {
                  g.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l
              })
            );
          return pc(n.default, { Component: _, route: c }) || _;
        }
      );
    }
  });
function pc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const _d = v_;
function y_(e) {
  const t = V0(e.routes, e),
    n = e.parseQuery || c_,
    r = e.stringifyQuery || lc,
    o = e.history,
    s = vr(),
    i = vr(),
    a = vr(),
    l = Fr(Zt);
  let c = Zt;
  Nn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Fs.bind(null, ($) => '' + $),
    f = Fs.bind(null, l_),
    d = Fs.bind(null, Zo);
  function v($, W) {
    let K, G;
    return ud($) ? ((K = t.getRecordMatcher($)), (G = W)) : (G = $), t.addRoute(G, K);
  }
  function p($) {
    const W = t.getRecordMatcher($);
    W && t.removeRoute(W);
  }
  function h() {
    return t.getRoutes().map(($) => $.record);
  }
  function _($) {
    return !!t.getRecordMatcher($);
  }
  function g($, W) {
    if (((W = Ce({}, W || l.value)), typeof $ == 'string')) {
      const y = Hs(n, $, W.path),
        w = t.resolve({ path: y.path }, W),
        k = o.createHref(y.fullPath);
      return Ce(y, w, { params: d(w.params), hash: Zo(y.hash), redirectedFrom: void 0, href: k });
    }
    let K;
    if ('path' in $) K = Ce({}, $, { path: Hs(n, $.path, W.path).path });
    else {
      const y = Ce({}, $.params);
      for (const w in y) y[w] == null && delete y[w];
      (K = Ce({}, $, { params: f($.params) })), (W.params = f(W.params));
    }
    const G = t.resolve(K, W),
      me = $.hash || '';
    G.params = u(d(G.params));
    const Se = w0(r, Ce({}, $, { hash: s_(me), path: G.path })),
      ce = o.createHref(Se);
    return Ce({ fullPath: Se, hash: me, query: r === lc ? u_($.query) : $.query || {} }, G, {
      redirectedFrom: void 0,
      href: ce
    });
  }
  function m($) {
    return typeof $ == 'string' ? Hs(n, $, l.value.path) : Ce({}, $);
  }
  function b($, W) {
    if (c !== $) return Gn(8, { from: W, to: $ });
  }
  function E($) {
    return x($);
  }
  function P($) {
    return E(Ce(m($), { replace: !0 }));
  }
  function C($) {
    const W = $.matched[$.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: K } = W;
      let G = typeof K == 'function' ? K($) : K;
      return (
        typeof G == 'string' &&
          ((G = G.includes('?') || G.includes('#') ? (G = m(G)) : { path: G }), (G.params = {})),
        Ce({ query: $.query, hash: $.hash, params: 'path' in G ? {} : $.params }, G)
      );
    }
  }
  function x($, W) {
    const K = (c = g($)),
      G = l.value,
      me = $.state,
      Se = $.force,
      ce = $.replace === !0,
      y = C(K);
    if (y)
      return x(
        Ce(m(y), {
          state: typeof y == 'object' ? Ce({}, me, y.state) : me,
          force: Se,
          replace: ce
        }),
        W || K
      );
    const w = K;
    w.redirectedFrom = W;
    let k;
    return (
      !Se && E0(r, G, K) && ((k = Gn(16, { to: w, from: G })), ue(G, G, !0, !1)),
      (k ? Promise.resolve(k) : M(w, G))
        .catch((R) => (Nt(R) ? (Nt(R, 2) ? R : ye(R)) : B(R, w, G)))
        .then((R) => {
          if (R) {
            if (Nt(R, 2))
              return x(
                Ce({ replace: ce }, m(R.to), {
                  state: typeof R.to == 'object' ? Ce({}, me, R.to.state) : me,
                  force: Se
                }),
                W || w
              );
          } else R = A(w, G, !0, ce, me);
          return I(w, G, R), R;
        })
    );
  }
  function T($, W) {
    const K = b($, W);
    return K ? Promise.reject(K) : Promise.resolve();
  }
  function M($, W) {
    let K;
    const [G, me, Se] = __($, W);
    K = js(G.reverse(), 'beforeRouteLeave', $, W);
    for (const y of G)
      y.leaveGuards.forEach((w) => {
        K.push(tn(w, $, W));
      });
    const ce = T.bind(null, $, W);
    return (
      K.push(ce),
      $n(K)
        .then(() => {
          K = [];
          for (const y of s.list()) K.push(tn(y, $, W));
          return K.push(ce), $n(K);
        })
        .then(() => {
          K = js(me, 'beforeRouteUpdate', $, W);
          for (const y of me)
            y.updateGuards.forEach((w) => {
              K.push(tn(w, $, W));
            });
          return K.push(ce), $n(K);
        })
        .then(() => {
          K = [];
          for (const y of $.matched)
            if (y.beforeEnter && !W.matched.includes(y))
              if (Pt(y.beforeEnter)) for (const w of y.beforeEnter) K.push(tn(w, $, W));
              else K.push(tn(y.beforeEnter, $, W));
          return K.push(ce), $n(K);
        })
        .then(
          () => (
            $.matched.forEach((y) => (y.enterCallbacks = {})),
            (K = js(Se, 'beforeRouteEnter', $, W)),
            K.push(ce),
            $n(K)
          )
        )
        .then(() => {
          K = [];
          for (const y of i.list()) K.push(tn(y, $, W));
          return K.push(ce), $n(K);
        })
        .catch((y) => (Nt(y, 8) ? y : Promise.reject(y)))
    );
  }
  function I($, W, K) {
    for (const G of a.list()) G($, W, K);
  }
  function A($, W, K, G, me) {
    const Se = b($, W);
    if (Se) return Se;
    const ce = W === Zt,
      y = Nn ? history.state : {};
    K &&
      (G || ce
        ? o.replace($.fullPath, Ce({ scroll: ce && y && y.scroll }, me))
        : o.push($.fullPath, me)),
      (l.value = $),
      ue($, W, K, ce),
      ye();
  }
  let O;
  function N() {
    O ||
      (O = o.listen(($, W, K) => {
        if (!Qe.listening) return;
        const G = g($),
          me = C(G);
        if (me) {
          x(Ce(me, { replace: !0 }), G).catch(kr);
          return;
        }
        c = G;
        const Se = l.value;
        Nn && A0(ec(Se.fullPath, K.delta), vs()),
          M(G, Se)
            .catch((ce) =>
              Nt(ce, 12)
                ? ce
                : Nt(ce, 2)
                ? (x(ce.to, G)
                    .then((y) => {
                      Nt(y, 20) && !K.delta && K.type === zr.pop && o.go(-1, !1);
                    })
                    .catch(kr),
                  Promise.reject())
                : (K.delta && o.go(-K.delta, !1), B(ce, G, Se))
            )
            .then((ce) => {
              (ce = ce || A(G, Se, !1)),
                ce &&
                  (K.delta && !Nt(ce, 8)
                    ? o.go(-K.delta, !1)
                    : K.type === zr.pop && Nt(ce, 20) && o.go(-1, !1)),
                I(G, Se, ce);
            })
            .catch(kr);
      }));
  }
  let H = vr(),
    ne = vr(),
    q;
  function B($, W, K) {
    ye($);
    const G = ne.list();
    return G.length ? G.forEach((me) => me($, W, K)) : console.error($), Promise.reject($);
  }
  function ee() {
    return q && l.value !== Zt
      ? Promise.resolve()
      : new Promise(($, W) => {
          H.add([$, W]);
        });
  }
  function ye($) {
    return q || ((q = !$), N(), H.list().forEach(([W, K]) => ($ ? K($) : W())), H.reset()), $;
  }
  function ue($, W, K, G) {
    const { scrollBehavior: me } = e;
    if (!Nn || !me) return Promise.resolve();
    const Se =
      (!K && I0(ec($.fullPath, 0))) || ((G || !K) && history.state && history.state.scroll) || null;
    return yt()
      .then(() => me($, W, Se))
      .then((ce) => ce && k0(ce))
      .catch((ce) => B(ce, $, W));
  }
  const pe = ($) => o.go($);
  let he;
  const Ue = new Set(),
    Qe = {
      currentRoute: l,
      listening: !0,
      addRoute: v,
      removeRoute: p,
      hasRoute: _,
      getRoutes: h,
      resolve: g,
      options: e,
      push: E,
      replace: P,
      go: pe,
      back: () => pe(-1),
      forward: () => pe(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: ne.add,
      isReady: ee,
      install($) {
        const W = this;
        $.component('RouterLink', h_),
          $.component('RouterView', _d),
          ($.config.globalProperties.$router = W),
          Object.defineProperty($.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => S(l)
          }),
          Nn && !he && l.value === Zt && ((he = !0), E(o.location).catch((me) => {}));
        const K = {};
        for (const me in Zt) K[me] = j(() => l.value[me]);
        $.provide(wa, W), $.provide(yd, lt(K)), $.provide(Ci, l);
        const G = $.unmount;
        Ue.add($),
          ($.unmount = function () {
            Ue.delete($),
              Ue.size < 1 && ((c = Zt), O && O(), (O = null), (l.value = Zt), (he = !1), (q = !1)),
              G();
          });
      }
    };
  return Qe;
}
function $n(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function __(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((c) => Jn(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((c) => Jn(c, l)) || o.push(l));
  }
  return [n, r, o];
}
function Bs(e) {
  return e !== null && typeof e == 'object';
}
function xi(e, t, n = '.', r) {
  if (!Bs(t)) return xi(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === '__proto__' || s === 'constructor') continue;
    const i = e[s];
    i != null &&
      ((r && r(o, s, i, n)) ||
        (Array.isArray(i) && Array.isArray(o[s])
          ? (o[s] = [...i, ...o[s]])
          : Bs(i) && Bs(o[s])
          ? (o[s] = xi(i, o[s], (n ? `${n}.` : '') + s.toString(), r))
          : (o[s] = i)));
  }
  return o;
}
function bd(e) {
  return (...t) => t.reduce((n, r) => xi(n, r, '', e), {});
}
const b_ = bd(),
  w_ = bd((e, t, n) => {
    if (typeof e[t] < 'u' && typeof n == 'function') return (e[t] = n(e[t])), !0;
  });
class Pi extends Error {
  constructor() {
    super(...arguments),
      (this.statusCode = 500),
      (this.fatal = !1),
      (this.unhandled = !1),
      (this.statusMessage = void 0);
  }
  toJSON() {
    const t = { message: this.message, statusCode: Oi(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = wd(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    );
  }
}
Pi.__h3_error__ = !0;
function Si(e) {
  if (typeof e == 'string') return new Pi(e);
  if (E_(e)) return e;
  const t = new Pi(e.message ?? e.statusMessage, e.cause ? { cause: e.cause } : void 0);
  if ('stack' in e)
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack;
        }
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = Oi(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = Oi(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    wd(t.statusMessage) !== n &&
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default.'
      );
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function E_(e) {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0;
}
const T_ = /[^\u0009\u0020-\u007E]/g;
function wd(e = '') {
  return e.replace(T_, '');
}
function Oi(e, t = 200) {
  return !e || (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
}
function Ea(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0;
  typeof e[0] != 'string' && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != 'string')
    throw new TypeError('[nuxt] [useState] key must be a string: ' + n);
  if (r !== void 0 && typeof r != 'function')
    throw new Error('[nuxt] [useState] init must be a function: ' + r);
  const o = '$s' + n,
    s = Me(),
    i = xt(s.payload.state, o);
  if (i.value === void 0 && r) {
    const a = r();
    if (je(a)) return (s.payload.state[o] = a), a;
    i.value = a;
  }
  return i;
}
const dn = () => {
    var e;
    return (e = Me()) == null ? void 0 : e.$router;
  },
  Ur = () => (ze() ? Ae('_route', Me()._route) : Me()._route),
  C_ = (e) => e,
  x_ = () => {
    try {
      if (Me()._processingMiddleware) return !0;
    } catch {
      return !0;
    }
    return !1;
  },
  Ed = (e, t) => {
    e || (e = '/');
    const n = typeof e == 'string' ? e : e.path || '/',
      r = (t == null ? void 0 : t.external) || cr(n, { acceptRelative: !0 });
    if (r && !(t != null && t.external))
      throw new Error(
        'Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.'
      );
    if (r && eo(n).protocol === 'script:')
      throw new Error('Cannot navigate to an URL with script protocol.');
    const o = x_();
    if (!r && o) return e;
    const s = dn();
    return r
      ? (t != null && t.replace ? location.replace(n) : (location.href = n), Promise.resolve())
      : t != null && t.replace
      ? s.replace(e)
      : s.push(e);
  },
  ys = () => xt(Me().payload, 'error'),
  Hn = (e) => {
    const t = Ta(e);
    try {
      Me().callHook('app:error', t);
      const r = ys();
      r.value = r.value || t;
    } catch {
      throw t;
    }
    return t;
  },
  P_ = async (e = {}) => {
    const t = Me(),
      n = ys();
    t.callHook('app:error:cleared', e),
      e.redirect && (await dn().replace(e.redirect)),
      (n.value = null);
  },
  S_ = (e) => !!(e && typeof e == 'object' && '__nuxt_error' in e),
  Ta = (e) => {
    const t = Si(e);
    return (t.__nuxt_error = !0), t;
  },
  ut = { pageTransition: { name: 'fade', mode: 'out-in' }, keepalive: !0 },
  hc = [
    {
      name: (ut == null ? void 0 : ut.name) ?? 'slug',
      path: (ut == null ? void 0 : ut.path) ?? '/:slug(.*)*',
      meta: ut || {},
      alias: (ut == null ? void 0 : ut.alias) || [],
      redirect: (ut == null ? void 0 : ut.redirect) || void 0,
      component: () =>
        ie(
          () => import('./_...slug_.271cc710.js'),
          [
            './_...slug_.271cc710.js',
            './ContentDoc.75602f47.js',
            './ContentRenderer.d2a8361e.js',
            './ContentRendererMarkdown.49e93fa9.js',
            './index.a6ef77ff.js',
            './ContentQuery.a7d28ec3.js',
            './_...slug_.94c99785.css'
          ],
          import.meta.url
        ).then((e) => e.default || e)
    }
  ],
  O_ = {
    scrollBehavior(e, t, n) {
      return e.hash ? { behavior: 'smooth', top: 64, el: e.hash } : n;
    }
  },
  k_ = {
    scrollBehavior(e, t, n) {
      const r = Me();
      let o = n || void 0;
      if (
        (!o && t && e && e.meta.scrollToTop !== !1 && A_(t, e) && (o = { left: 0, top: 0 }),
        e.path === t.path)
      ) {
        if (t.hash && !e.hash) return { left: 0, top: 0 };
        if (e.hash) return { el: e.hash, top: gc(e.hash) };
      }
      const s = (a) => !!(a.meta.pageTransition ?? wi),
        i = s(t) && s(e) ? 'page:transition:finish' : 'page:finish';
      return new Promise((a) => {
        r.hooks.hookOnce(i, async () => {
          await yt(), e.hash && (o = { el: e.hash, top: gc(e.hash) }), a(o);
        });
      });
    }
  };
function gc(e) {
  try {
    const t = document.querySelector(e);
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop);
  } catch {}
  return 0;
}
function A_(e, t) {
  const n = e.matched[0] === t.matched[0];
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)));
}
const I_ = {},
  Ft = { ...I_, ...k_, ...O_ },
  R_ = C_(async (e) => {
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate)) return;
    const r = Me(),
      o = dn();
    if ((([t, n] = _i(() => Promise.resolve(e.meta.validate(e)))), (t = await t), n(), t) === !0)
      return;
    const i = Ta({ statusCode: 404, statusMessage: `Page Not Found: ${e.fullPath}` }),
      a = o.beforeResolve((c) => {
        if ((a(), c === e)) {
          const u = o.afterEach(async () => {
            u(), await zt(r, Hn, [i]), window.history.pushState({}, '', e.fullPath);
          });
          return !1;
        }
      });
  }),
  M_ = [R_],
  Ir = {};
function $_(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf('#');
  if (s > -1) {
    const a = o.includes(e.slice(s)) ? e.slice(s).length : 1;
    let l = o.slice(a);
    return l[0] !== '/' && (l = '/' + l), zl(l, '');
  }
  return zl(n, e) + r + o;
}
const L_ = qt(
    {
      name: 'nuxt:router',
      enforce: 'pre',
      async setup(e) {
        var p, h;
        let t,
          n,
          r = fn().app.baseURL;
        Ft.hashMode && !r.includes('#') && (r += '#');
        const o =
            ((p = Ft.history) == null ? void 0 : p.call(Ft, r)) ?? (Ft.hashMode ? L0(r) : cd(r)),
          s = ((h = Ft.routes) == null ? void 0 : h.call(Ft, hc)) ?? hc,
          i = $_(r, window.location),
          a = y_({ ...Ft, history: o, routes: s });
        e.vueApp.use(a);
        const l = Fr(a.currentRoute.value);
        a.afterEach((_, g) => {
          l.value = g;
        }),
          Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', {
            get: () => l.value
          });
        const c = Fr(a.resolve(i)),
          u = () => {
            c.value = a.currentRoute.value;
          };
        e.hook('page:finish', u),
          a.afterEach((_, g) => {
            var m, b, E, P;
            ((b = (m = _.matched[0]) == null ? void 0 : m.components) == null
              ? void 0
              : b.default) ===
              ((P = (E = g.matched[0]) == null ? void 0 : E.components) == null
                ? void 0
                : P.default) && u();
          });
        const f = {};
        for (const _ in c.value) f[_] = j(() => c.value[_]);
        (e._route = lt(f)), (e._middleware = e._middleware || { global: [], named: {} });
        const d = ys();
        try {
          ([t, n] = _i(() => a.isReady())), await t, n();
        } catch (_) {
          ([t, n] = _i(() => zt(e, Hn, [_]))), await t, n();
        }
        const v = Ea('_layout');
        return (
          a.beforeEach(async (_, g) => {
            var b;
            (_.meta = lt(_.meta)),
              e.isHydrating && v.value && !On(_.meta.layout) && (_.meta.layout = v.value),
              (e._processingMiddleware = !0);
            const m = new Set([...M_, ...e._middleware.global]);
            for (const E of _.matched) {
              const P = E.meta.middleware;
              if (P)
                if (Array.isArray(P)) for (const C of P) m.add(C);
                else m.add(P);
            }
            for (const E of m) {
              const P =
                typeof E == 'string'
                  ? e._middleware.named[E] ||
                    (await ((b = Ir[E]) == null ? void 0 : b.call(Ir).then((x) => x.default || x)))
                  : E;
              if (!P) throw new Error(`Unknown route middleware: '${E}'.`);
              const C = await zt(e, P, [_, g]);
              if (!e.payload.serverRendered && e.isHydrating && (C === !1 || C instanceof Error)) {
                const x = C || Si({ statusCode: 404, statusMessage: `Page Not Found: ${i}` });
                return await zt(e, Hn, [x]), !1;
              }
              if (C || C === !1) return C;
            }
          }),
          a.onError(() => {
            delete e._processingMiddleware;
          }),
          a.afterEach(async (_, g, m) => {
            delete e._processingMiddleware,
              !e.isHydrating && d.value && (await zt(e, P_)),
              _.matched.length === 0 &&
                (await zt(e, Hn, [
                  Si({ statusCode: 404, fatal: !1, statusMessage: `Page not found: ${_.fullPath}` })
                ]));
          }),
          e.hooks.hookOnce('app:created', async () => {
            try {
              await a.replace({ ...a.resolve(i), name: void 0, force: !0 });
            } catch (_) {
              await zt(e, Hn, [_]);
            }
          }),
          { provide: { router: a } }
        );
      }
    },
    1
  ),
  yo = {},
  N_ = qt({
    name: 'nuxt:prefetch',
    setup(e) {
      const t = dn();
      e.hooks.hook('app:mounted', () => {
        t.beforeEach(async (n) => {
          var o;
          const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
          r && typeof yo[r] == 'function' && (await yo[r]());
        });
      }),
        e.hooks.hook('link:prefetch', (n) => {
          var i, a, l, c;
          if (cr(n)) return;
          const r = t.resolve(n);
          if (!r) return;
          const o = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout;
          let s = Array.isArray((a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware)
            ? (l = r == null ? void 0 : r.meta) == null
              ? void 0
              : l.middleware
            : [(c = r == null ? void 0 : r.meta) == null ? void 0 : c.middleware];
          s = s.filter((u) => typeof u == 'string');
          for (const u of s) typeof Ir[u] == 'function' && Ir[u]();
          o && typeof yo[o] == 'function' && yo[o]();
        });
    }
  }),
  F_ = () => null;
function H_(...e) {
  var d;
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0;
  typeof e[0] != 'string' && e.unshift(t);
  let [n, r, o = {}] = e;
  if (typeof n != 'string') throw new TypeError('[nuxt] [asyncData] key must be a string.');
  if (typeof r != 'function') throw new TypeError('[nuxt] [asyncData] handler must be a function.');
  (o.server = o.server ?? !0),
    (o.default = o.default ?? F_),
    (o.lazy = o.lazy ?? !1),
    (o.immediate = o.immediate ?? !0);
  const s = Me(),
    i = () => (s.isHydrating ? s.payload.data[n] : s.static.data[n]),
    a = () => i() !== void 0;
  s._asyncData[n] ||
    (s._asyncData[n] = {
      data: J(i() ?? ((d = o.default) == null ? void 0 : d.call(o)) ?? null),
      pending: J(!a()),
      error: xt(s.payload._errors, n)
    });
  const l = { ...s._asyncData[n] };
  l.refresh = l.execute = (v = {}) => {
    if (s._asyncDataPromises[n]) {
      if (v.dedupe === !1) return s._asyncDataPromises[n];
      s._asyncDataPromises[n].cancelled = !0;
    }
    if (v._initial && a()) return i();
    l.pending.value = !0;
    const p = new Promise((h, _) => {
      try {
        h(r(s));
      } catch (g) {
        _(g);
      }
    })
      .then((h) => {
        if (p.cancelled) return s._asyncDataPromises[n];
        let _ = h;
        o.transform && (_ = o.transform(h)),
          o.pick && (_ = j_(_, o.pick)),
          (l.data.value = _),
          (l.error.value = null);
      })
      .catch((h) => {
        var _;
        if (p.cancelled) return s._asyncDataPromises[n];
        (l.error.value = h),
          (l.data.value = S(((_ = o.default) == null ? void 0 : _.call(o)) ?? null));
      })
      .finally(() => {
        p.cancelled ||
          ((l.pending.value = !1),
          (s.payload.data[n] = l.data.value),
          l.error.value && (s.payload._errors[n] = Ta(l.error.value)),
          delete s._asyncDataPromises[n]);
      });
    return (s._asyncDataPromises[n] = p), s._asyncDataPromises[n];
  };
  const c = () => l.refresh({ _initial: !0 }),
    u = o.server !== !1 && s.payload.serverRendered;
  {
    const v = ze();
    if (v && !v._nuxtOnBeforeMountCbs) {
      v._nuxtOnBeforeMountCbs = [];
      const h = v._nuxtOnBeforeMountCbs;
      v &&
        (ua(() => {
          h.forEach((_) => {
            _();
          }),
            h.splice(0, h.length);
        }),
        Dr(() => h.splice(0, h.length)));
    }
    u && s.isHydrating && a()
      ? (l.pending.value = !1)
      : v && ((s.payload.serverRendered && s.isHydrating) || o.lazy) && o.immediate
      ? v._nuxtOnBeforeMountCbs.push(c)
      : o.immediate && c(),
      o.watch && fe(o.watch, () => l.refresh());
    const p = s.hook('app:data:refresh', (h) => {
      if (!h || h.includes(n)) return l.refresh();
    });
    v && Dr(p);
  }
  const f = Promise.resolve(s._asyncDataPromises[n]).then(() => l);
  return Object.assign(f, l), f;
}
function j_(e, t) {
  const n = {};
  for (const r of t) n[r] = e[r];
  return n;
}
const B_ = {
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1
};
function D_(e, t = {}) {
  t = { ...B_, ...t };
  const n = Td(t);
  return n.dispatch(e), n.toString();
}
function Td(e) {
  const t = [];
  let n = [];
  const r = (o) => {
    t.push(o);
  };
  return {
    toString() {
      return t.join('');
    },
    getContext() {
      return n;
    },
    dispatch(o) {
      return e.replacer && (o = e.replacer(o)), this['_' + (o === null ? 'null' : typeof o)](o);
    },
    _object(o) {
      if (o && typeof o.toJSON == 'function') return this._object(o.toJSON());
      const s = /\[object (.*)]/i,
        i = Object.prototype.toString.call(o),
        a = s.exec(i),
        l = a ? a[1].toLowerCase() : 'unknown:[' + i.toLowerCase() + ']';
      let c = null;
      if ((c = n.indexOf(o)) >= 0) return this.dispatch('[CIRCULAR:' + c + ']');
      if ((n.push(o), typeof Buffer < 'u' && Buffer.isBuffer && Buffer.isBuffer(o)))
        return r('buffer:'), r(o.toString('utf8'));
      if (l !== 'object' && l !== 'function' && l !== 'asyncfunction')
        this['_' + l] ? this['_' + l](o) : e.ignoreUnknown || this._unkown(o, l);
      else {
        let u = Object.keys(o);
        e.unorderedObjects && (u = u.sort()),
          e.respectType !== !1 && !mc(o) && u.splice(0, 0, 'prototype', '__proto__', 'letructor'),
          e.excludeKeys &&
            (u = u.filter(function (f) {
              return !e.excludeKeys(f);
            })),
          r('object:' + u.length + ':');
        for (const f of u) this.dispatch(f), r(':'), e.excludeValues || this.dispatch(o[f]), r(',');
      }
    },
    _array(o, s) {
      if (
        ((s = typeof s < 'u' ? s : e.unorderedArrays !== !1),
        r('array:' + o.length + ':'),
        !s || o.length <= 1)
      ) {
        for (const l of o) this.dispatch(l);
        return;
      }
      const i = [],
        a = o.map((l) => {
          const c = Td(e);
          return c.dispatch(l), i.push(c.getContext()), c.toString();
        });
      return (n = [...n, ...i]), a.sort(), this._array(a, !1);
    },
    _date(o) {
      return r('date:' + o.toJSON());
    },
    _symbol(o) {
      return r('symbol:' + o.toString());
    },
    _unkown(o, s) {
      if ((r(s), !!o && (r(':'), o && typeof o.entries == 'function')))
        return this._array(Array.from(o.entries()), !0);
    },
    _error(o) {
      return r('error:' + o.toString());
    },
    _boolean(o) {
      return r('bool:' + o.toString());
    },
    _string(o) {
      r('string:' + o.length + ':'), r(o.toString());
    },
    _function(o) {
      r('fn:'),
        mc(o) ? this.dispatch('[native]') : this.dispatch(o.toString()),
        e.respectFunctionNames !== !1 && this.dispatch('function-name:' + String(o.name)),
        e.respectFunctionProperties && this._object(o);
    },
    _number(o) {
      return r('number:' + o.toString());
    },
    _xml(o) {
      return r('xml:' + o.toString());
    },
    _null() {
      return r('Null');
    },
    _undefined() {
      return r('Undefined');
    },
    _regexp(o) {
      return r('regex:' + o.toString());
    },
    _uint8array(o) {
      return r('uint8array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _uint8clampedarray(o) {
      return r('uint8clampedarray:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _int8array(o) {
      return r('int8array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _uint16array(o) {
      return r('uint16array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _int16array(o) {
      return r('int16array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _uint32array(o) {
      return r('uint32array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _int32array(o) {
      return r('int32array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _float32array(o) {
      return r('float32array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _float64array(o) {
      return r('float64array:'), this.dispatch(Array.prototype.slice.call(o));
    },
    _arraybuffer(o) {
      return r('arraybuffer:'), this.dispatch(new Uint8Array(o));
    },
    _url(o) {
      return r('url:' + o.toString());
    },
    _map(o) {
      r('map:');
      const s = [...o];
      return this._array(s, e.unorderedSets !== !1);
    },
    _set(o) {
      r('set:');
      const s = [...o];
      return this._array(s, e.unorderedSets !== !1);
    },
    _file(o) {
      return r('file:'), this.dispatch([o.name, o.size, o.type, o.lastModfied]);
    },
    _blob() {
      if (e.ignoreUnknown) return r('[blob]');
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    _domwindow() {
      return r('domwindow');
    },
    _bigint(o) {
      return r('bigint:' + o.toString());
    },
    _process() {
      return r('process');
    },
    _timer() {
      return r('timer');
    },
    _pipe() {
      return r('pipe');
    },
    _tcp() {
      return r('tcp');
    },
    _udp() {
      return r('udp');
    },
    _tty() {
      return r('tty');
    },
    _statwatcher() {
      return r('statwatcher');
    },
    _securecontext() {
      return r('securecontext');
    },
    _connection() {
      return r('connection');
    },
    _zlib() {
      return r('zlib');
    },
    _context() {
      return r('context');
    },
    _nodescript() {
      return r('nodescript');
    },
    _httpparser() {
      return r('httpparser');
    },
    _dataview() {
      return r('dataview');
    },
    _signal() {
      return r('signal');
    },
    _fsevent() {
      return r('fsevent');
    },
    _tlswrap() {
      return r('tlswrap');
    }
  };
}
function mc(e) {
  return typeof e != 'function'
    ? !1
    : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(
        Function.prototype.toString.call(e)
      ) != null;
}
class Yn {
  constructor(t, n) {
    (t = this.words = t || []), (this.sigBytes = n !== void 0 ? n : t.length * 4);
  }
  toString(t) {
    return (t || z_).stringify(this);
  }
  concat(t) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let n = 0; n < t.sigBytes; n++) {
        const r = (t.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        this.words[(this.sigBytes + n) >>> 2] |= r << (24 - ((this.sigBytes + n) % 4) * 8);
      }
    else
      for (let n = 0; n < t.sigBytes; n += 4)
        this.words[(this.sigBytes + n) >>> 2] = t.words[n >>> 2];
    return (this.sigBytes += t.sigBytes), this;
  }
  clamp() {
    (this.words[this.sigBytes >>> 2] &= 4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4));
  }
  clone() {
    return new Yn([...this.words]);
  }
}
const z_ = {
    stringify(e) {
      const t = [];
      for (let n = 0; n < e.sigBytes; n++) {
        const r = (e.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
        t.push((r >>> 4).toString(16), (r & 15).toString(16));
      }
      return t.join('');
    }
  },
  U_ = {
    stringify(e) {
      const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        n = [];
      for (let r = 0; r < e.sigBytes; r += 3) {
        const o = (e.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255,
          s = (e.words[(r + 1) >>> 2] >>> (24 - ((r + 1) % 4) * 8)) & 255,
          i = (e.words[(r + 2) >>> 2] >>> (24 - ((r + 2) % 4) * 8)) & 255,
          a = (o << 16) | (s << 8) | i;
        for (let l = 0; l < 4 && r * 8 + l * 6 < e.sigBytes * 8; l++)
          n.push(t.charAt((a >>> (6 * (3 - l))) & 63));
      }
      return n.join('');
    }
  },
  K_ = {
    parse(e) {
      const t = e.length,
        n = [];
      for (let r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << (24 - (r % 4) * 8);
      return new Yn(n, t);
    }
  },
  W_ = {
    parse(e) {
      return K_.parse(unescape(encodeURIComponent(e)));
    }
  };
class V_ {
  constructor() {
    (this._minBufferSize = 0), (this.blockSize = 512 / 32), this.reset();
  }
  reset() {
    (this._data = new Yn()), (this._nDataBytes = 0);
  }
  _append(t) {
    typeof t == 'string' && (t = W_.parse(t)),
      this._data.concat(t),
      (this._nDataBytes += t.sigBytes);
  }
  _doProcessBlock(t, n) {}
  _process(t) {
    let n,
      r = this._data.sigBytes / (this.blockSize * 4);
    t ? (r = Math.ceil(r)) : (r = Math.max((r | 0) - this._minBufferSize, 0));
    const o = r * this.blockSize,
      s = Math.min(o * 4, this._data.sigBytes);
    if (o) {
      for (let i = 0; i < o; i += this.blockSize) this._doProcessBlock(this._data.words, i);
      (n = this._data.words.splice(0, o)), (this._data.sigBytes -= s);
    }
    return new Yn(n, s);
  }
}
class q_ extends V_ {
  update(t) {
    return this._append(t), this._process(), this;
  }
  finalize(t) {
    t && this._append(t);
  }
}
const Q_ = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225
  ],
  J_ = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548,
    -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193,
    -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692,
    1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
    -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479,
    -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
    1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998
  ],
  yn = [];
class G_ extends q_ {
  constructor() {
    super(), this.reset();
  }
  reset() {
    super.reset(), (this._hash = new Yn([...Q_]));
  }
  _doProcessBlock(t, n) {
    const r = this._hash.words;
    let o = r[0],
      s = r[1],
      i = r[2],
      a = r[3],
      l = r[4],
      c = r[5],
      u = r[6],
      f = r[7];
    for (let d = 0; d < 64; d++) {
      if (d < 16) yn[d] = t[n + d] | 0;
      else {
        const b = yn[d - 15],
          E = ((b << 25) | (b >>> 7)) ^ ((b << 14) | (b >>> 18)) ^ (b >>> 3),
          P = yn[d - 2],
          C = ((P << 15) | (P >>> 17)) ^ ((P << 13) | (P >>> 19)) ^ (P >>> 10);
        yn[d] = E + yn[d - 7] + C + yn[d - 16];
      }
      const v = (l & c) ^ (~l & u),
        p = (o & s) ^ (o & i) ^ (s & i),
        h = ((o << 30) | (o >>> 2)) ^ ((o << 19) | (o >>> 13)) ^ ((o << 10) | (o >>> 22)),
        _ = ((l << 26) | (l >>> 6)) ^ ((l << 21) | (l >>> 11)) ^ ((l << 7) | (l >>> 25)),
        g = f + _ + v + J_[d] + yn[d],
        m = h + p;
      (f = u), (u = c), (c = l), (l = (a + g) | 0), (a = i), (i = s), (s = o), (o = (g + m) | 0);
    }
    (r[0] = (r[0] + o) | 0),
      (r[1] = (r[1] + s) | 0),
      (r[2] = (r[2] + i) | 0),
      (r[3] = (r[3] + a) | 0),
      (r[4] = (r[4] + l) | 0),
      (r[5] = (r[5] + c) | 0),
      (r[6] = (r[6] + u) | 0),
      (r[7] = (r[7] + f) | 0);
  }
  finalize(t) {
    super.finalize(t);
    const n = this._nDataBytes * 8,
      r = this._data.sigBytes * 8;
    return (
      (this._data.words[r >>> 5] |= 128 << (24 - (r % 32))),
      (this._data.words[(((r + 64) >>> 9) << 4) + 14] = Math.floor(n / 4294967296)),
      (this._data.words[(((r + 64) >>> 9) << 4) + 15] = n),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    );
  }
}
function Y_(e) {
  return new G_().finalize(e).toString(U_);
}
function Kr(e, t = {}) {
  const n = typeof e == 'string' ? e : D_(e, t);
  return Y_(n).slice(0, 10);
}
const Z_ = decodeURIComponent,
  X_ = encodeURIComponent,
  eb = /; */,
  _o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function tb(e, t) {
  if (typeof e != 'string') throw new TypeError('argument str must be a string');
  let n = {},
    r = t || {},
    o = e.split(eb),
    s = r.decode || Z_;
  for (let i = 0; i < o.length; i++) {
    let a = o[i],
      l = a.indexOf('=');
    if (l < 0) continue;
    let c = a.substr(0, l).trim(),
      u = a.substr(++l, a.length).trim();
    u[0] == '"' && (u = u.slice(1, -1)), n[c] == null && (n[c] = nb(u, s));
  }
  return n;
}
function vc(e, t, n) {
  let r = n || {},
    o = r.encode || X_;
  if (typeof o != 'function') throw new TypeError('option encode is invalid');
  if (!_o.test(e)) throw new TypeError('argument name is invalid');
  let s = o(t);
  if (s && !_o.test(s)) throw new TypeError('argument val is invalid');
  let i = e + '=' + s;
  if (r.maxAge != null) {
    let a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a)) throw new TypeError('option maxAge is invalid');
    i += '; Max-Age=' + Math.floor(a);
  }
  if (r.domain) {
    if (!_o.test(r.domain)) throw new TypeError('option domain is invalid');
    i += '; Domain=' + r.domain;
  }
  if (r.path) {
    if (!_o.test(r.path)) throw new TypeError('option path is invalid');
    i += '; Path=' + r.path;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != 'function')
      throw new TypeError('option expires is invalid');
    i += '; Expires=' + r.expires.toUTCString();
  }
  if ((r.httpOnly && (i += '; HttpOnly'), r.secure && (i += '; Secure'), r.sameSite))
    switch (typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        i += '; SameSite=Strict';
        break;
      case 'lax':
        i += '; SameSite=Lax';
        break;
      case 'strict':
        i += '; SameSite=Strict';
        break;
      case 'none':
        i += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  return i;
}
function nb(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const rb = {
  path: '/',
  watch: !0,
  decode: (e) => Df(decodeURIComponent(e)),
  encode: (e) => encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e))
};
function Ds(e, t) {
  var s;
  const n = { ...rb, ...t },
    r = ob(n) || {},
    o = J(r[e] ?? ((s = n.default) == null ? void 0 : s.call(n)));
  {
    const i = () => {
      ib(e, o.value, n);
    };
    n.watch ? fe(o, i, { deep: n.watch !== 'shallow' }) : i();
  }
  return o;
}
function ob(e = {}) {
  return tb(document.cookie, e);
}
function sb(e, t, n = {}) {
  return t == null ? vc(e, t, { ...n, maxAge: -1 }) : vc(e, t, n);
}
function ib(e, t, n = {}) {
  document.cookie = sb(e, t, n);
}
const ki =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = { didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  ab =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  lb = (e) => {
    const t = Me();
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          ki(e);
        })
      : ki(e);
  };
async function Cd(e, t = dn()) {
  const { path: n, matched: r } = t.resolve(e);
  if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set()), t._routePreloaded.has(n)))
    return;
  const o = (t._preloadPromises = t._preloadPromises || []);
  if (o.length > 4) return Promise.all(o).then(() => Cd(e, t));
  t._routePreloaded.add(n);
  const s = r
    .map((i) => {
      var a;
      return (a = i.components) == null ? void 0 : a.default;
    })
    .filter((i) => typeof i == 'function');
  for (const i of s) {
    const a = Promise.resolve(i())
      .catch(() => {})
      .finally(() => o.splice(o.indexOf(a)));
    o.push(a);
  }
  await Promise.all(o);
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
const cb = -1,
  ub = -2,
  fb = -3,
  db = -4,
  pb = -5,
  hb = -6;
function gb(e, t) {
  return mb(JSON.parse(e), t);
}
function mb(e, t) {
  if (typeof e == 'number') return o(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
  const n = e,
    r = Array(n.length);
  function o(s, i = !1) {
    if (s === cb) return;
    if (s === fb) return NaN;
    if (s === db) return 1 / 0;
    if (s === pb) return -1 / 0;
    if (s === hb) return -0;
    if (i) throw new Error('Invalid input');
    if (s in r) return r[s];
    const a = n[s];
    if (!a || typeof a != 'object') r[s] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == 'string') {
        const l = a[0],
          c = t == null ? void 0 : t[l];
        if (c) return (r[s] = c(o(a[1])));
        switch (l) {
          case 'Date':
            r[s] = new Date(a[1]);
            break;
          case 'Set':
            const u = new Set();
            r[s] = u;
            for (let v = 1; v < a.length; v += 1) u.add(o(a[v]));
            break;
          case 'Map':
            const f = new Map();
            r[s] = f;
            for (let v = 1; v < a.length; v += 2) f.set(o(a[v]), o(a[v + 1]));
            break;
          case 'RegExp':
            r[s] = new RegExp(a[1], a[2]);
            break;
          case 'Object':
            r[s] = Object(a[1]);
            break;
          case 'BigInt':
            r[s] = BigInt(a[1]);
            break;
          case 'null':
            const d = Object.create(null);
            r[s] = d;
            for (let v = 1; v < a.length; v += 2) d[a[v]] = o(a[v + 1]);
            break;
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(a.length);
        r[s] = l;
        for (let c = 0; c < a.length; c += 1) {
          const u = a[c];
          u !== ub && (l[c] = o(u));
        }
      }
    else {
      const l = {};
      r[s] = l;
      for (const c in a) {
        const u = a[c];
        l[c] = o(u);
      }
    }
    return r[s];
  }
  return o(0);
}
function yc(e, t = {}) {
  const n = vb(e, t),
    r = Me(),
    o = (r._payloadCache = r._payloadCache || {});
  return o[n] || (o[n] = yb(n).then((s) => s || (delete o[n], null))), o[n];
}
const _c = 'js';
function vb(e, t = {}) {
  const n = new URL(e, 'http://localhost');
  if (n.search) throw new Error('Payload URL cannot contain search params: ' + e);
  if (n.host !== 'localhost' || cr(n.pathname, { acceptRelative: !0 }))
    throw new Error('Payload URL must not include hostname: ' + e);
  const r = t.hash || (t.fresh ? Date.now() : '');
  return ur(fn().app.baseURL, n.pathname, r ? `_payload.${r}.${_c}` : `_payload.${_c}`);
}
async function yb(e) {
  try {
    return m0
      ? bb(await fetch(e).then((t) => t.text()))
      : await ie(() => import(e), [], import.meta.url).then((t) => t.default || t);
  } catch (t) {
    console.warn('[nuxt] Cannot load payload ', e, t);
  }
  return null;
}
function _b() {
  return !!Me().payload.prerenderedAt;
}
function bb(e) {
  return gb(e, Me()._payloadRevivers);
}
function wb(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = JSON.parse(sessionStorage.getItem('nuxt:reload') || '{}');
  } catch {}
  if (
    e.force ||
    (n == null ? void 0 : n.path) !== t ||
    (n == null ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        'nuxt:reload',
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem('nuxt:reload:state', JSON.stringify({ state: Me().payload.state }));
      } catch {}
    window.location.pathname !== t ? (window.location.href = t) : window.location.reload();
  }
}
const Eb = (...e) => e.find((t) => t !== void 0),
  Tb = 'noopener noreferrer';
function Cb(e) {
  const t = e.componentName || 'NuxtLink',
    n = (r, o) => {
      if (!r || (e.trailingSlash !== 'append' && e.trailingSlash !== 'remove')) return r;
      const s = e.trailingSlash === 'append' ? Wf : ms;
      if (typeof r == 'string') return s(r, !0);
      const i = 'path' in r ? r.path : o(r).path;
      return { ...r, name: void 0, path: s(i, !0) };
    };
  return se({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 }
    },
    setup(r, { slots: o }) {
      const s = dn(),
        i = j(() => {
          const f = r.to || r.href || '';
          return n(f, s.resolve);
        }),
        a = j(() =>
          r.external || (r.target && r.target !== '_self')
            ? !0
            : typeof i.value == 'object'
            ? !1
            : i.value === '' || cr(i.value, { acceptRelative: !0 })
        ),
        l = J(!1),
        c = J(null),
        u = (f) => {
          var d;
          c.value = r.custom
            ? (d = f == null ? void 0 : f.$el) == null
              ? void 0
              : d.nextElementSibling
            : f == null
            ? void 0
            : f.$el;
        };
      if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== '_blank' && !Pb()) {
        const d = Me();
        let v,
          p = null;
        De(() => {
          const h = xb();
          lb(() => {
            v = ki(() => {
              var _;
              (_ = c == null ? void 0 : c.value) != null &&
                _.tagName &&
                (p = h.observe(c.value, async () => {
                  p == null || p(), (p = null);
                  const g = typeof i.value == 'string' ? i.value : s.resolve(i.value).fullPath;
                  await Promise.all([
                    d.hooks.callHook('link:prefetch', g).catch(() => {}),
                    !a.value && Cd(i.value, s).catch(() => {})
                  ]),
                    (l.value = !0);
                }));
            });
          });
        }),
          Ye(() => {
            v && ab(v), p == null || p(), (p = null);
          });
      }
      return () => {
        var h, _;
        if (!a.value) {
          const g = {
            ref: u,
            to: i.value,
            activeClass: r.activeClass || e.activeClass,
            exactActiveClass: r.exactActiveClass || e.exactActiveClass,
            replace: r.replace,
            ariaCurrentValue: r.ariaCurrentValue,
            custom: r.custom
          };
          return (
            r.custom ||
              (l.value && (g.class = r.prefetchedClass || e.prefetchedClass), (g.rel = r.rel)),
            ge(vf('RouterLink'), g, o.default)
          );
        }
        const f =
            typeof i.value == 'object'
              ? ((h = s.resolve(i.value)) == null ? void 0 : h.href) ?? null
              : i.value || null,
          d = r.target || null,
          v = r.noRel ? null : Eb(r.rel, e.externalRelAttribute, f ? Tb : '') || null,
          p = () => Ed(f, { replace: r.replace });
        return r.custom
          ? o.default
            ? o.default({
                href: f,
                navigate: p,
                get route() {
                  if (!f) return;
                  const g = eo(f);
                  return {
                    path: g.pathname,
                    fullPath: g.pathname,
                    get query() {
                      return Kf(g.search);
                    },
                    hash: g.hash,
                    params: {},
                    name: void 0,
                    matched: [],
                    redirectedFrom: void 0,
                    meta: {},
                    href: f
                  };
                },
                rel: v,
                target: d,
                isExternal: a.value,
                isActive: !1,
                isExactActive: !1
              })
            : null
          : ge(
              'a',
              { ref: c, href: f, rel: v, target: d },
              (_ = o.default) == null ? void 0 : _.call(o)
            );
      };
    }
  });
}
const _s = Cb({ componentName: 'NuxtLink' });
function xb() {
  const e = Me();
  if (e._observer) return e._observer;
  let t = null;
  const n = new Map(),
    r = (s, i) => (
      t ||
        (t = new IntersectionObserver((a) => {
          for (const l of a) {
            const c = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && c && c();
          }
        })),
      n.set(s, i),
      t.observe(s),
      () => {
        n.delete(s), t.unobserve(s), n.size === 0 && (t.disconnect(), (t = null));
      }
    );
  return (e._observer = { observe: r });
}
function Pb() {
  const e = navigator.connection;
  return !!(e && (e.saveData || /2g/.test(e.effectiveType)));
}
const Sb = {
    nuxtIcon: { size: '1.2em', class: 'icon', aliases: {} },
    nav: { excludeTopNavPath: ['/', '/test'], excludeAsidePathRefresh: ['/test'] },
    markdown: { linkify: !0 }
  },
  Ob = {},
  kb = w_(Sb, Ob);
function Ca() {
  const e = Me();
  return e._appConfig || (e._appConfig = lt(kb)), e._appConfig;
}
const Ab = qt((e) => {
  e.hook('app:rendered', (t) => {
    var n;
    (n = t.ssrContext) != null &&
      n.teleports &&
      (t.ssrContext.teleports = Ib(t.ssrContext.teleports));
  });
});
function Ib(e) {
  const t = Object.entries(e).reduce(
    (n, [r, o]) =>
      r.startsWith('#el-popper-container-') || [].includes(r)
        ? `${n}<div id="${r.slice(1)}">${o}</div>`
        : n,
    e.body || ''
  );
  return { ...e, body: t };
}
const Mo = function (e, t, ...n) {
    let r;
    t.includes('mouse') || t.includes('click')
      ? (r = 'MouseEvents')
      : t.includes('key')
      ? (r = 'KeyboardEvent')
      : (r = 'HTMLEvents');
    const o = document.createEvent(r);
    return o.initEvent(t, ...n), e.dispatchEvent(o), e;
  },
  Dt =
    (e, t, { checkForDefaultPrevented: n = !0 } = {}) =>
    (o) => {
      const s = e == null ? void 0 : e(o);
      if (n === !1 || !s) return t == null ? void 0 : t(o);
    };
var bc;
const It = typeof window < 'u',
  Rb = (e) => typeof e == 'string',
  xd = () => {},
  Mb =
    It &&
    ((bc = window == null ? void 0 : window.navigator) == null ? void 0 : bc.userAgent) &&
    /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xa(e) {
  return typeof e == 'function' ? e() : S(e);
}
function $b(e) {
  return e;
}
function bs(e) {
  return Ji() ? (Hu(e), !0) : !1;
}
function Lb(e, t = !0) {
  ze() ? De(e) : t ? e() : yt(e);
}
function wc(e, t, n = {}) {
  const { immediate: r = !0 } = n,
    o = J(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), (s = null));
  }
  function a() {
    (o.value = !1), i();
  }
  function l(...c) {
    i(),
      (o.value = !0),
      (s = setTimeout(() => {
        (o.value = !1), (s = null), e(...c);
      }, xa(t)));
  }
  return r && ((o.value = !0), It && l()), bs(a), { isPending: In(o), start: l, stop: a };
}
function nn(e) {
  var t;
  const n = xa(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pa = It ? window : void 0;
function zs(...e) {
  let t, n, r, o;
  if ((Rb(e[0]) || Array.isArray(e[0]) ? (([n, r, o] = e), (t = Pa)) : ([t, n, r, o] = e), !t))
    return xd;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [],
    i = () => {
      s.forEach((u) => u()), (s.length = 0);
    },
    a = (u, f, d, v) => (u.addEventListener(f, d, v), () => u.removeEventListener(f, d, v)),
    l = fe(
      () => [nn(t), xa(o)],
      ([u, f]) => {
        i(), u && s.push(...n.flatMap((d) => r.map((v) => a(u, d, v, f))));
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      l(), i();
    };
  return bs(c), c;
}
let Ec = !1;
function Nb(e, t, n = {}) {
  const { window: r = Pa, ignore: o = [], capture: s = !0, detectIframe: i = !1 } = n;
  if (!r) return;
  Mb &&
    !Ec &&
    ((Ec = !0),
    Array.from(r.document.body.children).forEach((d) => d.addEventListener('click', xd)));
  let a = !0;
  const l = (d) =>
      o.some((v) => {
        if (typeof v == 'string')
          return Array.from(r.document.querySelectorAll(v)).some(
            (p) => p === d.target || d.composedPath().includes(p)
          );
        {
          const p = nn(v);
          return p && (d.target === p || d.composedPath().includes(p));
        }
      }),
    u = [
      zs(
        r,
        'click',
        (d) => {
          const v = nn(e);
          if (!(!v || v === d.target || d.composedPath().includes(v))) {
            if ((d.detail === 0 && (a = !l(d)), !a)) {
              a = !0;
              return;
            }
            t(d);
          }
        },
        { passive: !0, capture: s }
      ),
      zs(
        r,
        'pointerdown',
        (d) => {
          const v = nn(e);
          v && (a = !d.composedPath().includes(v) && !l(d));
        },
        { passive: !0 }
      ),
      i &&
        zs(r, 'blur', (d) => {
          var v;
          const p = nn(e);
          ((v = r.document.activeElement) == null ? void 0 : v.tagName) === 'IFRAME' &&
            !(p != null && p.contains(r.document.activeElement)) &&
            t(d);
        })
    ].filter(Boolean);
  return () => u.forEach((d) => d());
}
function Fb(e, t = !1) {
  const n = J(),
    r = () => (n.value = !!e());
  return r(), Lb(r, t), n;
}
const Tc =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Cc = '__vueuse_ssr_handlers__';
Tc[Cc] = Tc[Cc] || {};
var xc = Object.getOwnPropertySymbols,
  Hb = Object.prototype.hasOwnProperty,
  jb = Object.prototype.propertyIsEnumerable,
  Bb = (e, t) => {
    var n = {};
    for (var r in e) Hb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && xc) for (var r of xc(e)) t.indexOf(r) < 0 && jb.call(e, r) && (n[r] = e[r]);
    return n;
  };
function Db(e, t, n = {}) {
  const r = n,
    { window: o = Pa } = r,
    s = Bb(r, ['window']);
  let i;
  const a = Fb(() => o && 'ResizeObserver' in o),
    l = () => {
      i && (i.disconnect(), (i = void 0));
    },
    c = fe(
      () => nn(e),
      (f) => {
        l(), a.value && o && f && ((i = new ResizeObserver(t)), i.observe(f, s));
      },
      { immediate: !0, flush: 'post' }
    ),
    u = () => {
      l(), c();
    };
  return bs(u), { isSupported: a, stop: u };
}
var Pc;
(function (e) {
  (e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE');
})(Pc || (Pc = {}));
var zb = Object.defineProperty,
  Sc = Object.getOwnPropertySymbols,
  Ub = Object.prototype.hasOwnProperty,
  Kb = Object.prototype.propertyIsEnumerable,
  Oc = (e, t, n) =>
    t in e ? zb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Wb = (e, t) => {
    for (var n in t || (t = {})) Ub.call(t, n) && Oc(e, n, t[n]);
    if (Sc) for (var n of Sc(t)) Kb.call(t, n) && Oc(e, n, t[n]);
    return e;
  };
const Vb = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Wb({ linear: $b }, Vb);
function Ai(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Wr(e) {
  return e == null;
}
function qb(e) {
  return e === void 0;
}
const Qb = (e) => e === void 0,
  Pd = (e) => typeof e == 'boolean',
  to = (e) => typeof e == 'number',
  Xo = (e) => (typeof Element > 'u' ? !1 : e instanceof Element),
  Jb = (e) => (_e(e) ? !Number.isNaN(Number(e)) : !1);
class Gb extends Error {
  constructor(t) {
    super(t), (this.name = 'ElementPlusError');
  }
}
function es(e, t) {
  throw new Gb(`[${e}] ${t}`);
}
const Sd = (e = '') => e.split(' ').filter((t) => !!t.trim()),
  Yb = (e, t) => {
    if (!e || !t) return !1;
    if (t.includes(' ')) throw new Error('className should not contain space.');
    return e.classList.contains(t);
  },
  bo = (e, t) => {
    !e || !t.trim() || e.classList.add(...Sd(t));
  },
  Us = (e, t) => {
    !e || !t.trim() || e.classList.remove(...Sd(t));
  };
function Od(e, t = 'px') {
  if (!e) return '';
  if (to(e) || Jb(e)) return `${e}${t}`;
  if (_e(e)) return e;
}
/*! Element Plus Icons Vue v2.1.0 */ var pn = (e, t) => {
    let n = e.__vccOpts || e;
    for (let [r, o] of t) n[r] = o;
    return n;
  },
  Zb = { name: 'ArrowDown' },
  Xb = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  e1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z'
    },
    null,
    -1
  ),
  t1 = [e1];
function n1(e, t, n, r, o, s) {
  return Y(), we('svg', Xb, t1);
}
var r1 = pn(Zb, [
    ['render', n1],
    ['__file', 'arrow-down.vue']
  ]),
  o1 = { name: 'ArrowRight' },
  s1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  i1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z'
    },
    null,
    -1
  ),
  a1 = [i1];
function l1(e, t, n, r, o, s) {
  return Y(), we('svg', s1, a1);
}
var c1 = pn(o1, [
    ['render', l1],
    ['__file', 'arrow-right.vue']
  ]),
  u1 = { name: 'CircleCloseFilled' },
  f1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  d1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z'
    },
    null,
    -1
  ),
  p1 = [d1];
function h1(e, t, n, r, o, s) {
  return Y(), we('svg', f1, p1);
}
var kd = pn(u1, [
    ['render', h1],
    ['__file', 'circle-close-filled.vue']
  ]),
  g1 = { name: 'Close' },
  m1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  v1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z'
    },
    null,
    -1
  ),
  y1 = [v1];
function _1(e, t, n, r, o, s) {
  return Y(), we('svg', m1, y1);
}
var b1 = pn(g1, [
    ['render', _1],
    ['__file', 'close.vue']
  ]),
  w1 = { name: 'InfoFilled' },
  E1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  T1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z'
    },
    null,
    -1
  ),
  C1 = [T1];
function x1(e, t, n, r, o, s) {
  return Y(), we('svg', E1, C1);
}
var Ad = pn(w1, [
    ['render', x1],
    ['__file', 'info-filled.vue']
  ]),
  P1 = { name: 'More' },
  S1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  O1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z'
    },
    null,
    -1
  ),
  k1 = [O1];
function A1(e, t, n, r, o, s) {
  return Y(), we('svg', S1, k1);
}
var I1 = pn(P1, [
    ['render', A1],
    ['__file', 'more.vue']
  ]),
  R1 = { name: 'SuccessFilled' },
  M1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  $1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z'
    },
    null,
    -1
  ),
  L1 = [$1];
function N1(e, t, n, r, o, s) {
  return Y(), we('svg', M1, L1);
}
var Id = pn(R1, [
    ['render', N1],
    ['__file', 'success-filled.vue']
  ]),
  F1 = { name: 'WarningFilled' },
  H1 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  j1 = ke(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z'
    },
    null,
    -1
  ),
  B1 = [j1];
function D1(e, t, n, r, o, s) {
  return Y(), we('svg', H1, B1);
}
var Rd = pn(F1, [
  ['render', D1],
  ['__file', 'warning-filled.vue']
]);
const Md = '__epPropKey',
  xe = (e) => e,
  z1 = (e) => Pe(e) && !!e[Md],
  Sa = (e, t) => {
    if (!Pe(e) || z1(e)) return e;
    const { values: n, required: r, default: o, type: s, validator: i } = e,
      l = {
        type: s,
        required: !!r,
        validator:
          n || i
            ? (c) => {
                let u = !1,
                  f = [];
                if (
                  (n &&
                    ((f = Array.from(n)), ve(e, 'default') && f.push(o), u || (u = f.includes(c))),
                  i && (u || (u = i(c))),
                  !u && f.length > 0)
                ) {
                  const d = [...new Set(f)].map((v) => JSON.stringify(v)).join(', ');
                  Gh(
                    `Invalid prop: validation failed${
                      t ? ` for prop "${t}"` : ''
                    }. Expected one of [${d}], got value ${JSON.stringify(c)}.`
                  );
                }
                return u;
              }
            : void 0,
        [Md]: !0
      };
    return ve(e, 'default') && (l.default = o), l;
  },
  tt = (e) => Ai(Object.entries(e).map(([t, n]) => [t, Sa(n, t)])),
  Er = xe([String, Object, Function]),
  gS = { Close: b1, SuccessFilled: Id, InfoFilled: Ad, WarningFilled: Rd, CircleCloseFilled: kd },
  mS = { success: Id, warning: Rd, error: kd, info: Ad },
  fr = (e, t) => {
    if (
      ((e.install = (n) => {
        for (const r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
      }),
      t)
    )
      for (const [n, r] of Object.entries(t)) e[n] = r;
    return e;
  },
  vS = (e, t) => (
    (e.install = (n) => {
      (e._context = n._context), (n.config.globalProperties[t] = e);
    }),
    e
  ),
  Oa = (e) => ((e.install = Xe), e),
  ot = {
    tab: 'Tab',
    enter: 'Enter',
    space: 'Space',
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    esc: 'Escape',
    delete: 'Delete',
    backspace: 'Backspace',
    numpadEnter: 'NumpadEnter',
    pageUp: 'PageUp',
    pageDown: 'PageDown',
    home: 'Home',
    end: 'End'
  },
  U1 = ['', 'default', 'small', 'large'],
  $o = (e) => {
    const t = te(e) ? e : [e],
      n = [];
    return (
      t.forEach((r) => {
        var o;
        te(r)
          ? n.push(...$o(r))
          : cn(r) && te(r.children)
          ? n.push(...$o(r.children))
          : (n.push(r),
            cn(r) && (o = r.component) != null && o.subTree && n.push(...$o(r.component.subTree)));
      }),
      n
    );
  },
  K1 = (e) => e,
  W1 = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: s = 'API' }, i) => {
    fe(
      () => S(i),
      (a) => {},
      { immediate: !0 }
    );
  },
  kc = 'el',
  V1 = 'is-',
  _n = (e, t, n, r, o) => {
    let s = `${e}-${t}`;
    return n && (s += `-${n}`), r && (s += `__${r}`), o && (s += `--${o}`), s;
  },
  q1 = Symbol('namespaceContextKey'),
  ka = (e) => {
    const t = e || Ae(q1, J(kc));
    return j(() => S(t) || kc);
  },
  Be = (e, t) => {
    const n = ka(t);
    return {
      namespace: n,
      b: (h = '') => _n(n.value, e, h, '', ''),
      e: (h) => (h ? _n(n.value, e, '', h, '') : ''),
      m: (h) => (h ? _n(n.value, e, '', '', h) : ''),
      be: (h, _) => (h && _ ? _n(n.value, e, h, _, '') : ''),
      em: (h, _) => (h && _ ? _n(n.value, e, '', h, _) : ''),
      bm: (h, _) => (h && _ ? _n(n.value, e, h, '', _) : ''),
      bem: (h, _, g) => (h && _ && g ? _n(n.value, e, h, _, g) : ''),
      is: (h, ..._) => {
        const g = _.length >= 1 ? _[0] : !0;
        return h && g ? `${V1}${h}` : '';
      },
      cssVar: (h) => {
        const _ = {};
        for (const g in h) h[g] && (_[`--${n.value}-${g}`] = h[g]);
        return _;
      },
      cssVarName: (h) => `--${n.value}-${h}`,
      cssVarBlock: (h) => {
        const _ = {};
        for (const g in h) h[g] && (_[`--${n.value}-${e}-${g}`] = h[g]);
        return _;
      },
      cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
    };
  },
  Q1 = Sa({ type: xe(Boolean), default: null }),
  J1 = Sa({ type: xe(Function) }),
  $d = (e) => {
    const t = `update:${e}`,
      n = `onUpdate:${e}`,
      r = [t],
      o = { [e]: Q1, [n]: J1 };
    return {
      useModelToggle: ({
        indicator: i,
        toggleReason: a,
        shouldHideWhenRouteChanges: l,
        shouldProceed: c,
        onShow: u,
        onHide: f
      }) => {
        const d = ze(),
          { emit: v } = d,
          p = d.props,
          h = j(() => re(p[n])),
          _ = j(() => p[e] === null),
          g = (x) => {
            i.value !== !0 && ((i.value = !0), a && (a.value = x), re(u) && u(x));
          },
          m = (x) => {
            i.value !== !1 && ((i.value = !1), a && (a.value = x), re(f) && f(x));
          },
          b = (x) => {
            if (p.disabled === !0 || (re(c) && !c())) return;
            const T = h.value && It;
            T && v(t, !0), (_.value || !T) && g(x);
          },
          E = (x) => {
            if (p.disabled === !0 || !It) return;
            const T = h.value && It;
            T && v(t, !1), (_.value || !T) && m(x);
          },
          P = (x) => {
            Pd(x) && (p.disabled && x ? h.value && v(t, !1) : i.value !== x && (x ? g() : m()));
          },
          C = () => {
            i.value ? E() : b();
          };
        return (
          fe(() => p[e], P),
          l &&
            d.appContext.config.globalProperties.$route !== void 0 &&
            fe(
              () => ({ ...d.proxy.$route }),
              () => {
                l.value && i.value && E();
              }
            ),
          De(() => {
            P(p[e]);
          }),
          { hide: E, show: b, toggle: C, hasUpdateHandler: h }
        );
      },
      useModelToggleProps: o,
      useModelToggleEmits: r
    };
  };
$d('modelValue');
var st = 'top',
  _t = 'bottom',
  bt = 'right',
  it = 'left',
  Aa = 'auto',
  no = [st, _t, bt, it],
  Zn = 'start',
  Vr = 'end',
  G1 = 'clippingParents',
  Ld = 'viewport',
  yr = 'popper',
  Y1 = 'reference',
  Ac = no.reduce(function (e, t) {
    return e.concat([t + '-' + Zn, t + '-' + Vr]);
  }, []),
  Ia = [].concat(no, [Aa]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Zn, t + '-' + Vr]);
  }, []),
  Z1 = 'beforeRead',
  X1 = 'read',
  ew = 'afterRead',
  tw = 'beforeMain',
  nw = 'main',
  rw = 'afterMain',
  ow = 'beforeWrite',
  sw = 'write',
  iw = 'afterWrite',
  aw = [Z1, X1, ew, tw, nw, rw, ow, sw, iw];
function Lt(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function St(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Xn(e) {
  var t = St(e).Element;
  return e instanceof t || e instanceof Element;
}
function vt(e) {
  var t = St(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ra(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = St(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function lw(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      s = t.elements[n];
    !vt(s) ||
      !Lt(s) ||
      (Object.assign(s.style, r),
      Object.keys(o).forEach(function (i) {
        var a = o[i];
        a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? '' : a);
      }));
  });
}
function cw(e) {
  var t = e.state,
    n = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {}
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          s = t.attributes[r] || {},
          i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = i.reduce(function (l, c) {
            return (l[c] = ''), l;
          }, {});
        !vt(o) ||
          !Lt(o) ||
          (Object.assign(o.style, a),
          Object.keys(s).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
var Nd = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: lw,
  effect: cw,
  requires: ['computeStyles']
};
function Rt(e) {
  return e.split('-')[0];
}
var Sn = Math.max,
  ts = Math.min,
  er = Math.round;
function tr(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    o = 1;
  if (vt(e) && t) {
    var s = e.offsetHeight,
      i = e.offsetWidth;
    i > 0 && (r = er(n.width) / i || 1), s > 0 && (o = er(n.height) / s || 1);
  }
  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}
function Ma(e) {
  var t = tr(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Fd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ra(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Wt(e) {
  return St(e).getComputedStyle(e);
}
function uw(e) {
  return ['table', 'td', 'th'].indexOf(Lt(e)) >= 0;
}
function hn(e) {
  return ((Xn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ws(e) {
  return Lt(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Ra(e) ? e.host : null) || hn(e);
}
function Ic(e) {
  return !vt(e) || Wt(e).position === 'fixed' ? null : e.offsetParent;
}
function fw(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    n = navigator.userAgent.indexOf('Trident') !== -1;
  if (n && vt(e)) {
    var r = Wt(e);
    if (r.position === 'fixed') return null;
  }
  var o = ws(e);
  for (Ra(o) && (o = o.host); vt(o) && ['html', 'body'].indexOf(Lt(o)) < 0; ) {
    var s = Wt(o);
    if (
      s.transform !== 'none' ||
      s.perspective !== 'none' ||
      s.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === 'filter') ||
      (t && s.filter && s.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function ro(e) {
  for (var t = St(e), n = Ic(e); n && uw(n) && Wt(n).position === 'static'; ) n = Ic(n);
  return n && (Lt(n) === 'html' || (Lt(n) === 'body' && Wt(n).position === 'static'))
    ? t
    : n || fw(e) || t;
}
function $a(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Rr(e, t, n) {
  return Sn(e, ts(t, n));
}
function dw(e, t, n) {
  var r = Rr(e, t, n);
  return r > n ? n : r;
}
function Hd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function jd(e) {
  return Object.assign({}, Hd(), e);
}
function Bd(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var pw = function (e, t) {
  return (
    (e = typeof e == 'function' ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    jd(typeof e != 'number' ? e : Bd(e, no))
  );
};
function hw(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    s = n.elements.arrow,
    i = n.modifiersData.popperOffsets,
    a = Rt(n.placement),
    l = $a(a),
    c = [it, bt].indexOf(a) >= 0,
    u = c ? 'height' : 'width';
  if (!(!s || !i)) {
    var f = pw(o.padding, n),
      d = Ma(s),
      v = l === 'y' ? st : it,
      p = l === 'y' ? _t : bt,
      h = n.rects.reference[u] + n.rects.reference[l] - i[l] - n.rects.popper[u],
      _ = i[l] - n.rects.reference[l],
      g = ro(s),
      m = g ? (l === 'y' ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      b = h / 2 - _ / 2,
      E = f[v],
      P = m - d[u] - f[p],
      C = m / 2 - d[u] / 2 + b,
      x = Rr(E, C, P),
      T = l;
    n.modifiersData[r] = ((t = {}), (t[T] = x), (t.centerOffset = x - C), t);
  }
}
function gw(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? '[data-popper-arrow]' : r;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      !Fd(t.elements.popper, o) ||
      (t.elements.arrow = o));
}
var mw = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: hw,
  effect: gw,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function nr(e) {
  return e.split('-')[1];
}
var vw = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function yw(e) {
  var t = e.x,
    n = e.y,
    r = window,
    o = r.devicePixelRatio || 1;
  return { x: er(t * o) / o || 0, y: er(n * o) / o || 0 };
}
function Rc(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    s = e.variation,
    i = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    f = e.isFixed,
    d = i.x,
    v = d === void 0 ? 0 : d,
    p = i.y,
    h = p === void 0 ? 0 : p,
    _ = typeof u == 'function' ? u({ x: v, y: h }) : { x: v, y: h };
  (v = _.x), (h = _.y);
  var g = i.hasOwnProperty('x'),
    m = i.hasOwnProperty('y'),
    b = it,
    E = st,
    P = window;
  if (c) {
    var C = ro(n),
      x = 'clientHeight',
      T = 'clientWidth';
    if (
      (C === St(n) &&
        ((C = hn(n)),
        Wt(C).position !== 'static' &&
          a === 'absolute' &&
          ((x = 'scrollHeight'), (T = 'scrollWidth'))),
      (C = C),
      o === st || ((o === it || o === bt) && s === Vr))
    ) {
      E = _t;
      var M = f && C === P && P.visualViewport ? P.visualViewport.height : C[x];
      (h -= M - r.height), (h *= l ? 1 : -1);
    }
    if (o === it || ((o === st || o === _t) && s === Vr)) {
      b = bt;
      var I = f && C === P && P.visualViewport ? P.visualViewport.width : C[T];
      (v -= I - r.width), (v *= l ? 1 : -1);
    }
  }
  var A = Object.assign({ position: a }, c && vw),
    O = u === !0 ? yw({ x: v, y: h }) : { x: v, y: h };
  if (((v = O.x), (h = O.y), l)) {
    var N;
    return Object.assign(
      {},
      A,
      ((N = {}),
      (N[E] = m ? '0' : ''),
      (N[b] = g ? '0' : ''),
      (N.transform =
        (P.devicePixelRatio || 1) <= 1
          ? 'translate(' + v + 'px, ' + h + 'px)'
          : 'translate3d(' + v + 'px, ' + h + 'px, 0)'),
      N)
    );
  }
  return Object.assign(
    {},
    A,
    ((t = {}), (t[E] = m ? h + 'px' : ''), (t[b] = g ? v + 'px' : ''), (t.transform = ''), t)
  );
}
function _w(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    s = n.adaptive,
    i = s === void 0 ? !0 : s,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Rt(t.placement),
      variation: nr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed'
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Rc(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: l
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Rc(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }));
}
var Dd = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: _w, data: {} },
  wo = { passive: !0 };
function bw(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    s = o === void 0 ? !0 : o,
    i = r.resize,
    a = i === void 0 ? !0 : i,
    l = St(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      c.forEach(function (u) {
        u.addEventListener('scroll', n.update, wo);
      }),
    a && l.addEventListener('resize', n.update, wo),
    function () {
      s &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', n.update, wo);
        }),
        a && l.removeEventListener('resize', n.update, wo);
    }
  );
}
var zd = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: bw,
    data: {}
  },
  ww = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Lo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return ww[t];
  });
}
var Ew = { start: 'end', end: 'start' };
function Mc(e) {
  return e.replace(/start|end/g, function (t) {
    return Ew[t];
  });
}
function La(e) {
  var t = St(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Na(e) {
  return tr(hn(e)).left + La(e).scrollLeft;
}
function Tw(e) {
  var t = St(e),
    n = hn(e),
    r = t.visualViewport,
    o = n.clientWidth,
    s = n.clientHeight,
    i = 0,
    a = 0;
  return (
    r &&
      ((o = r.width),
      (s = r.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((i = r.offsetLeft), (a = r.offsetTop))),
    { width: o, height: s, x: i + Na(e), y: a }
  );
}
function Cw(e) {
  var t,
    n = hn(e),
    r = La(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = Sn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    i = Sn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    a = -r.scrollLeft + Na(e),
    l = -r.scrollTop;
  return (
    Wt(o || n).direction === 'rtl' && (a += Sn(n.clientWidth, o ? o.clientWidth : 0) - s),
    { width: s, height: i, x: a, y: l }
  );
}
function Fa(e) {
  var t = Wt(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ud(e) {
  return ['html', 'body', '#document'].indexOf(Lt(e)) >= 0
    ? e.ownerDocument.body
    : vt(e) && Fa(e)
    ? e
    : Ud(ws(e));
}
function Mr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ud(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = St(r),
    i = o ? [s].concat(s.visualViewport || [], Fa(r) ? r : []) : r,
    a = t.concat(i);
  return o ? a : a.concat(Mr(ws(i)));
}
function Ii(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xw(e) {
  var t = tr(e);
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function $c(e, t) {
  return t === Ld ? Ii(Tw(e)) : Xn(t) ? xw(t) : Ii(Cw(hn(e)));
}
function Pw(e) {
  var t = Mr(ws(e)),
    n = ['absolute', 'fixed'].indexOf(Wt(e).position) >= 0,
    r = n && vt(e) ? ro(e) : e;
  return Xn(r)
    ? t.filter(function (o) {
        return Xn(o) && Fd(o, r) && Lt(o) !== 'body';
      })
    : [];
}
function Sw(e, t, n) {
  var r = t === 'clippingParents' ? Pw(e) : [].concat(t),
    o = [].concat(r, [n]),
    s = o[0],
    i = o.reduce(function (a, l) {
      var c = $c(e, l);
      return (
        (a.top = Sn(c.top, a.top)),
        (a.right = ts(c.right, a.right)),
        (a.bottom = ts(c.bottom, a.bottom)),
        (a.left = Sn(c.left, a.left)),
        a
      );
    }, $c(e, s));
  return (
    (i.width = i.right - i.left), (i.height = i.bottom - i.top), (i.x = i.left), (i.y = i.top), i
  );
}
function Kd(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Rt(r) : null,
    s = r ? nr(r) : null,
    i = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case st:
      l = { x: i, y: t.y - n.height };
      break;
    case _t:
      l = { x: i, y: t.y + t.height };
      break;
    case bt:
      l = { x: t.x + t.width, y: a };
      break;
    case it:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? $a(o) : null;
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width';
    switch (s) {
      case Zn:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Vr:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function qr(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    s = n.boundary,
    i = s === void 0 ? G1 : s,
    a = n.rootBoundary,
    l = a === void 0 ? Ld : a,
    c = n.elementContext,
    u = c === void 0 ? yr : c,
    f = n.altBoundary,
    d = f === void 0 ? !1 : f,
    v = n.padding,
    p = v === void 0 ? 0 : v,
    h = jd(typeof p != 'number' ? p : Bd(p, no)),
    _ = u === yr ? Y1 : yr,
    g = e.rects.popper,
    m = e.elements[d ? _ : u],
    b = Sw(Xn(m) ? m : m.contextElement || hn(e.elements.popper), i, l),
    E = tr(e.elements.reference),
    P = Kd({ reference: E, element: g, strategy: 'absolute', placement: o }),
    C = Ii(Object.assign({}, g, P)),
    x = u === yr ? C : E,
    T = {
      top: b.top - x.top + h.top,
      bottom: x.bottom - b.bottom + h.bottom,
      left: b.left - x.left + h.left,
      right: x.right - b.right + h.right
    },
    M = e.modifiersData.offset;
  if (u === yr && M) {
    var I = M[o];
    Object.keys(T).forEach(function (A) {
      var O = [bt, _t].indexOf(A) >= 0 ? 1 : -1,
        N = [st, _t].indexOf(A) >= 0 ? 'y' : 'x';
      T[A] += I[N] * O;
    });
  }
  return T;
}
function Ow(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    s = n.rootBoundary,
    i = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Ia : l,
    u = nr(r),
    f = u
      ? a
        ? Ac
        : Ac.filter(function (p) {
            return nr(p) === u;
          })
      : no,
    d = f.filter(function (p) {
      return c.indexOf(p) >= 0;
    });
  d.length === 0 && (d = f);
  var v = d.reduce(function (p, h) {
    return (p[h] = qr(e, { placement: h, boundary: o, rootBoundary: s, padding: i })[Rt(h)]), p;
  }, {});
  return Object.keys(v).sort(function (p, h) {
    return v[p] - v[h];
  });
}
function kw(e) {
  if (Rt(e) === Aa) return [];
  var t = Lo(e);
  return [Mc(e), t, Mc(t)];
}
function Aw(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        s = o === void 0 ? !0 : o,
        i = n.altAxis,
        a = i === void 0 ? !0 : i,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        f = n.rootBoundary,
        d = n.altBoundary,
        v = n.flipVariations,
        p = v === void 0 ? !0 : v,
        h = n.allowedAutoPlacements,
        _ = t.options.placement,
        g = Rt(_),
        m = g === _,
        b = l || (m || !p ? [Lo(_)] : kw(_)),
        E = [_].concat(b).reduce(function (Qe, $) {
          return Qe.concat(
            Rt($) === Aa
              ? Ow(t, {
                  placement: $,
                  boundary: u,
                  rootBoundary: f,
                  padding: c,
                  flipVariations: p,
                  allowedAutoPlacements: h
                })
              : $
          );
        }, []),
        P = t.rects.reference,
        C = t.rects.popper,
        x = new Map(),
        T = !0,
        M = E[0],
        I = 0;
      I < E.length;
      I++
    ) {
      var A = E[I],
        O = Rt(A),
        N = nr(A) === Zn,
        H = [st, _t].indexOf(O) >= 0,
        ne = H ? 'width' : 'height',
        q = qr(t, { placement: A, boundary: u, rootBoundary: f, altBoundary: d, padding: c }),
        B = H ? (N ? bt : it) : N ? _t : st;
      P[ne] > C[ne] && (B = Lo(B));
      var ee = Lo(B),
        ye = [];
      if (
        (s && ye.push(q[O] <= 0),
        a && ye.push(q[B] <= 0, q[ee] <= 0),
        ye.every(function (Qe) {
          return Qe;
        }))
      ) {
        (M = A), (T = !1);
        break;
      }
      x.set(A, ye);
    }
    if (T)
      for (
        var ue = p ? 3 : 1,
          pe = function (Qe) {
            var $ = E.find(function (W) {
              var K = x.get(W);
              if (K)
                return K.slice(0, Qe).every(function (G) {
                  return G;
                });
            });
            if ($) return (M = $), 'break';
          },
          he = ue;
        he > 0;
        he--
      ) {
        var Ue = pe(he);
        if (Ue === 'break') break;
      }
    t.placement !== M && ((t.modifiersData[r]._skip = !0), (t.placement = M), (t.reset = !0));
  }
}
var Iw = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: Aw,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
};
function Lc(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  );
}
function Nc(e) {
  return [st, bt, _t, it].some(function (t) {
    return e[t] >= 0;
  });
}
function Rw(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    i = qr(t, { elementContext: 'reference' }),
    a = qr(t, { altBoundary: !0 }),
    l = Lc(i, r),
    c = Lc(a, o, s),
    u = Nc(l),
    f = Nc(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': f
    }));
}
var Mw = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: Rw
};
function $w(e, t, n) {
  var r = Rt(e),
    o = [it, st].indexOf(r) >= 0 ? -1 : 1,
    s = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    i = s[0],
    a = s[1];
  return (
    (i = i || 0), (a = (a || 0) * o), [it, bt].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a }
  );
}
function Lw(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    s = o === void 0 ? [0, 0] : o,
    i = Ia.reduce(function (u, f) {
      return (u[f] = $w(f, t.rects, s)), u;
    }, {}),
    a = i[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[r] = i);
}
var Nw = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Lw };
function Fw(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Kd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  });
}
var Wd = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Fw, data: {} };
function Hw(e) {
  return e === 'x' ? 'y' : 'x';
}
function jw(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    s = o === void 0 ? !0 : o,
    i = n.altAxis,
    a = i === void 0 ? !1 : i,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    f = n.padding,
    d = n.tether,
    v = d === void 0 ? !0 : d,
    p = n.tetherOffset,
    h = p === void 0 ? 0 : p,
    _ = qr(t, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }),
    g = Rt(t.placement),
    m = nr(t.placement),
    b = !m,
    E = $a(g),
    P = Hw(E),
    C = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    T = t.rects.popper,
    M = typeof h == 'function' ? h(Object.assign({}, t.rects, { placement: t.placement })) : h,
    I =
      typeof M == 'number'
        ? { mainAxis: M, altAxis: M }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
    A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    O = { x: 0, y: 0 };
  if (C) {
    if (s) {
      var N,
        H = E === 'y' ? st : it,
        ne = E === 'y' ? _t : bt,
        q = E === 'y' ? 'height' : 'width',
        B = C[E],
        ee = B + _[H],
        ye = B - _[ne],
        ue = v ? -T[q] / 2 : 0,
        pe = m === Zn ? x[q] : T[q],
        he = m === Zn ? -T[q] : -x[q],
        Ue = t.elements.arrow,
        Qe = v && Ue ? Ma(Ue) : { width: 0, height: 0 },
        $ = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Hd(),
        W = $[H],
        K = $[ne],
        G = Rr(0, x[q], Qe[q]),
        me = b ? x[q] / 2 - ue - G - W - I.mainAxis : pe - G - W - I.mainAxis,
        Se = b ? -x[q] / 2 + ue + G + K + I.mainAxis : he + G + K + I.mainAxis,
        ce = t.elements.arrow && ro(t.elements.arrow),
        y = ce ? (E === 'y' ? ce.clientTop || 0 : ce.clientLeft || 0) : 0,
        w = (N = A == null ? void 0 : A[E]) != null ? N : 0,
        k = B + me - w - y,
        R = B + Se - w,
        L = Rr(v ? ts(ee, k) : ee, B, v ? Sn(ye, R) : ye);
      (C[E] = L), (O[E] = L - B);
    }
    if (a) {
      var z,
        V = E === 'x' ? st : it,
        D = E === 'x' ? _t : bt,
        U = C[P],
        F = P === 'y' ? 'height' : 'width',
        X = U + _[V],
        Q = U - _[D],
        Z = [st, it].indexOf(g) !== -1,
        oe = (z = A == null ? void 0 : A[P]) != null ? z : 0,
        de = Z ? X : U - x[F] - T[F] - oe + I.altAxis,
        Te = Z ? U + x[F] + T[F] - oe - I.altAxis : Q,
        Ee = v && Z ? dw(de, U, Te) : Rr(v ? de : X, U, v ? Te : Q);
      (C[P] = Ee), (O[P] = Ee - U);
    }
    t.modifiersData[r] = O;
  }
}
var Bw = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: jw,
  requiresIfExists: ['offset']
};
function Dw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function zw(e) {
  return e === St(e) || !vt(e) ? La(e) : Dw(e);
}
function Uw(e) {
  var t = e.getBoundingClientRect(),
    n = er(t.width) / e.offsetWidth || 1,
    r = er(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Kw(e, t, n) {
  n === void 0 && (n = !1);
  var r = vt(t),
    o = vt(t) && Uw(t),
    s = hn(t),
    i = tr(e, o),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Lt(t) !== 'body' || Fa(s)) && (a = zw(t)),
      vt(t) ? ((l = tr(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop)) : s && (l.x = Na(s))),
    {
      x: i.left + a.scrollLeft - l.x,
      y: i.top + a.scrollTop - l.y,
      width: i.width,
      height: i.height
    }
  );
}
function Ww(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      r.push(s);
  }
  return (
    e.forEach(function (s) {
      n.has(s.name) || o(s);
    }),
    r
  );
}
function Vw(e) {
  var t = Ww(e);
  return aw.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function qw(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Qw(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data)
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Fc = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Hc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function Ha(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    s = o === void 0 ? Fc : o;
  return function (i, a, l) {
    l === void 0 && (l = s);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Fc, s),
        modifiersData: {},
        elements: { reference: i, popper: a },
        attributes: {},
        styles: {}
      },
      u = [],
      f = !1,
      d = {
        state: c,
        setOptions: function (h) {
          var _ = typeof h == 'function' ? h(c.options) : h;
          p(),
            (c.options = Object.assign({}, s, c.options, _)),
            (c.scrollParents = {
              reference: Xn(i) ? Mr(i) : i.contextElement ? Mr(i.contextElement) : [],
              popper: Mr(a)
            });
          var g = Vw(Qw([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = g.filter(function (m) {
              return m.enabled;
            })),
            v(),
            d.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var h = c.elements,
              _ = h.reference,
              g = h.popper;
            if (Hc(_, g)) {
              (c.rects = {
                reference: Kw(_, ro(g), c.options.strategy === 'fixed'),
                popper: Ma(g)
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (T) {
                  return (c.modifiersData[T.name] = Object.assign({}, T.data));
                });
              for (var m = 0; m < c.orderedModifiers.length; m++) {
                if (c.reset === !0) {
                  (c.reset = !1), (m = -1);
                  continue;
                }
                var b = c.orderedModifiers[m],
                  E = b.fn,
                  P = b.options,
                  C = P === void 0 ? {} : P,
                  x = b.name;
                typeof E == 'function' &&
                  (c = E({ state: c, options: C, name: x, instance: d }) || c);
              }
            }
          }
        },
        update: qw(function () {
          return new Promise(function (h) {
            d.forceUpdate(), h(c);
          });
        }),
        destroy: function () {
          p(), (f = !0);
        }
      };
    if (!Hc(i, a)) return d;
    d.setOptions(l).then(function (h) {
      !f && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function v() {
      c.orderedModifiers.forEach(function (h) {
        var _ = h.name,
          g = h.options,
          m = g === void 0 ? {} : g,
          b = h.effect;
        if (typeof b == 'function') {
          var E = b({ state: c, name: _, instance: d, options: m }),
            P = function () {};
          u.push(E || P);
        }
      });
    }
    function p() {
      u.forEach(function (h) {
        return h();
      }),
        (u = []);
    }
    return d;
  };
}
Ha();
var Jw = [zd, Wd, Dd, Nd];
Ha({ defaultModifiers: Jw });
var Gw = [zd, Wd, Dd, Nd, Nw, Iw, Bw, mw, Mw],
  Yw = Ha({ defaultModifiers: Gw });
const Zw = (e, t, n = {}) => {
  const r = {
      name: 'updateState',
      enabled: !0,
      phase: 'write',
      fn: ({ state: l }) => {
        const c = Xw(l);
        Object.assign(i.value, c);
      },
      requires: ['computeStyles']
    },
    o = j(() => {
      const { onFirstUpdate: l, placement: c, strategy: u, modifiers: f } = S(n);
      return {
        onFirstUpdate: l,
        placement: c || 'bottom',
        strategy: u || 'absolute',
        modifiers: [...(f || []), r, { name: 'applyStyles', enabled: !1 }]
      };
    }),
    s = Fr(),
    i = J({
      styles: {
        popper: { position: S(o).strategy, left: '0', top: '0' },
        arrow: { position: 'absolute' }
      },
      attributes: {}
    }),
    a = () => {
      s.value && (s.value.destroy(), (s.value = void 0));
    };
  return (
    fe(
      o,
      (l) => {
        const c = S(s);
        c && c.setOptions(l);
      },
      { deep: !0 }
    ),
    fe([e, t], ([l, c]) => {
      a(), !(!l || !c) && (s.value = Yw(l, c, S(o)));
    }),
    Ye(() => {
      a();
    }),
    {
      state: j(() => {
        var l;
        return { ...(((l = S(s)) == null ? void 0 : l.state) || {}) };
      }),
      styles: j(() => S(i).styles),
      attributes: j(() => S(i).attributes),
      update: () => {
        var l;
        return (l = S(s)) == null ? void 0 : l.update();
      },
      forceUpdate: () => {
        var l;
        return (l = S(s)) == null ? void 0 : l.forceUpdate();
      },
      instanceRef: j(() => S(s))
    }
  );
};
function Xw(e) {
  const t = Object.keys(e.elements),
    n = Ai(t.map((o) => [o, e.styles[o] || {}])),
    r = Ai(t.map((o) => [o, e.attributes[o]]));
  return { styles: n, attributes: r };
}
function jc() {
  let e;
  const t = (r, o) => {
      n(), (e = window.setTimeout(r, o));
    },
    n = () => window.clearTimeout(e);
  return bs(() => n()), { registerTimeout: t, cancelTimeout: n };
}
const Bc = { prefix: Math.floor(Math.random() * 1e4), current: 0 },
  Vd = Symbol('elIdInjection'),
  qd = () => (ze() ? Ae(Vd, Bc) : Bc),
  eE = (e) => {
    const t = qd(),
      n = ka();
    return j(() => S(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
  };
let Fn = [];
const Dc = (e) => {
    const t = e;
    t.key === ot.esc && Fn.forEach((n) => n(t));
  },
  tE = (e) => {
    De(() => {
      Fn.length === 0 && document.addEventListener('keydown', Dc), It && Fn.push(e);
    }),
      Ye(() => {
        (Fn = Fn.filter((t) => t !== e)),
          Fn.length === 0 && It && document.removeEventListener('keydown', Dc);
      });
  };
let zc;
const Qd = () => {
    const e = ka(),
      t = qd(),
      n = j(() => `${e.value}-popper-container-${t.prefix}`),
      r = j(() => `#${n.value}`);
    return { id: n, selector: r };
  },
  nE = (e) => {
    const t = document.createElement('div');
    return (t.id = e), document.body.appendChild(t), t;
  },
  rE = () => {
    const { id: e, selector: t } = Qd();
    return (
      ua(() => {
        It && !zc && !document.body.querySelector(t.value) && (zc = nE(e.value));
      }),
      { id: e, selector: t }
    );
  },
  oE = tt({
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 }
  }),
  sE = ({ showAfter: e, hideAfter: t, autoClose: n, open: r, close: o }) => {
    const { registerTimeout: s } = jc(),
      { registerTimeout: i, cancelTimeout: a } = jc();
    return {
      onOpen: (u) => {
        s(() => {
          r(u);
          const f = S(n);
          to(f) &&
            f > 0 &&
            i(() => {
              o(u);
            }, f);
        }, S(e));
      },
      onClose: (u) => {
        a(),
          s(() => {
            o(u);
          }, S(t));
      }
    };
  },
  Jd = Symbol('elForwardRef'),
  iE = (e) => {
    et(Jd, {
      setForwardRef: (n) => {
        e.value = n;
      }
    });
  },
  aE = (e) => ({
    mounted(t) {
      e(t);
    },
    updated(t) {
      e(t);
    },
    unmounted() {
      e(null);
    }
  }),
  Uc = J(0),
  lE = 2e3,
  cE = Symbol('zIndexContextKey'),
  uE = (e) => {
    const t = e || Ae(cE, void 0),
      n = j(() => {
        const s = S(t);
        return to(s) ? s : lE;
      }),
      r = j(() => n.value + Uc.value);
    return { initialZIndex: n, currentZIndex: r, nextZIndex: () => (Uc.value++, r.value) };
  };
var nt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const fE = tt({ size: { type: xe([Number, String]) }, color: { type: String } }),
  dE = se({ name: 'ElIcon', inheritAttrs: !1 }),
  pE = se({
    ...dE,
    props: fE,
    setup(e) {
      const t = e,
        n = Be('icon'),
        r = j(() => {
          const { size: o, color: s } = t;
          return !o && !s ? {} : { fontSize: Qb(o) ? void 0 : Od(o), '--color': s };
        });
      return (o, s) => (
        Y(), we('i', Rn({ class: S(n).b(), style: S(r) }, o.$attrs), [He(o.$slots, 'default')], 16)
      );
    }
  });
var hE = nt(pE, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue']
]);
const ja = fr(hE),
  Kc = Symbol('formItemContextKey'),
  Ba = Symbol('popper'),
  Gd = Symbol('popperContent'),
  gE = ['dialog', 'grid', 'group', 'listbox', 'menu', 'navigation', 'tooltip', 'tree'],
  Yd = tt({ role: { type: String, values: gE, default: 'tooltip' } }),
  mE = se({ name: 'ElPopper', inheritAttrs: !1 }),
  vE = se({
    ...mE,
    props: Yd,
    setup(e, { expose: t }) {
      const n = e,
        r = J(),
        o = J(),
        s = J(),
        i = J(),
        a = j(() => n.role),
        l = { triggerRef: r, popperInstanceRef: o, contentRef: s, referenceRef: i, role: a };
      return t(l), et(Ba, l), (c, u) => He(c.$slots, 'default');
    }
  });
var yE = nt(vE, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue'
  ]
]);
const Zd = tt({ arrowOffset: { type: Number, default: 5 } }),
  _E = se({ name: 'ElPopperArrow', inheritAttrs: !1 }),
  bE = se({
    ..._E,
    props: Zd,
    setup(e, { expose: t }) {
      const n = e,
        r = Be('popper'),
        { arrowOffset: o, arrowRef: s, arrowStyle: i } = Ae(Gd, void 0);
      return (
        fe(
          () => n.arrowOffset,
          (a) => {
            o.value = a;
          }
        ),
        Ye(() => {
          s.value = void 0;
        }),
        t({ arrowRef: s }),
        (a, l) => (
          Y(),
          we(
            'span',
            {
              ref_key: 'arrowRef',
              ref: s,
              class: Fe(S(r).e('arrow')),
              style: Ut(S(i)),
              'data-popper-arrow': ''
            },
            null,
            6
          )
        )
      );
    }
  });
var wE = nt(bE, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue']
]);
const EE = 'ElOnlyChild',
  TE = se({
    name: EE,
    setup(e, { slots: t, attrs: n }) {
      var r;
      const o = Ae(Jd),
        s = aE((r = o == null ? void 0 : o.setForwardRef) != null ? r : Xe);
      return () => {
        var i;
        const a = (i = t.default) == null ? void 0 : i.call(t, n);
        if (!a || a.length > 1) return null;
        const l = Xd(a);
        return l ? ps($t(l, n), [[s]]) : null;
      };
    }
  });
function Xd(e) {
  if (!e) return null;
  const t = e;
  for (const n of t) {
    if (Pe(n))
      switch (n.type) {
        case Ge:
          continue;
        case kn:
        case 'svg':
          return Wc(n);
        case $e:
          return Xd(n.children);
        default:
          return n;
      }
    return Wc(n);
  }
  return null;
}
function Wc(e) {
  const t = Be('only-child');
  return ae('span', { class: t.e('content') }, [e]);
}
const ep = tt({
    virtualRef: { type: xe(Object) },
    virtualTriggering: Boolean,
    onMouseenter: { type: xe(Function) },
    onMouseleave: { type: xe(Function) },
    onClick: { type: xe(Function) },
    onKeydown: { type: xe(Function) },
    onFocus: { type: xe(Function) },
    onBlur: { type: xe(Function) },
    onContextmenu: { type: xe(Function) },
    id: String,
    open: Boolean
  }),
  CE = se({ name: 'ElPopperTrigger', inheritAttrs: !1 }),
  xE = se({
    ...CE,
    props: ep,
    setup(e, { expose: t }) {
      const n = e,
        { role: r, triggerRef: o } = Ae(Ba, void 0);
      iE(o);
      const s = j(() => (a.value ? n.id : void 0)),
        i = j(() => {
          if (r && r.value === 'tooltip') return n.open && n.id ? n.id : void 0;
        }),
        a = j(() => {
          if (r && r.value !== 'tooltip') return r.value;
        }),
        l = j(() => (a.value ? `${n.open}` : void 0));
      let c;
      return (
        De(() => {
          fe(
            () => n.virtualRef,
            (u) => {
              u && (o.value = nn(u));
            },
            { immediate: !0 }
          ),
            fe(
              o,
              (u, f) => {
                c == null || c(),
                  (c = void 0),
                  Xo(u) &&
                    ([
                      'onMouseenter',
                      'onMouseleave',
                      'onClick',
                      'onKeydown',
                      'onFocus',
                      'onBlur',
                      'onContextmenu'
                    ].forEach((d) => {
                      var v;
                      const p = n[d];
                      p &&
                        (u.addEventListener(d.slice(2).toLowerCase(), p),
                        (v = f == null ? void 0 : f.removeEventListener) == null ||
                          v.call(f, d.slice(2).toLowerCase(), p));
                    }),
                    (c = fe(
                      [s, i, a, l],
                      (d) => {
                        [
                          'aria-controls',
                          'aria-describedby',
                          'aria-haspopup',
                          'aria-expanded'
                        ].forEach((v, p) => {
                          Wr(d[p]) ? u.removeAttribute(v) : u.setAttribute(v, d[p]);
                        });
                      },
                      { immediate: !0 }
                    ))),
                  Xo(f) &&
                    ['aria-controls', 'aria-describedby', 'aria-haspopup', 'aria-expanded'].forEach(
                      (d) => f.removeAttribute(d)
                    );
              },
              { immediate: !0 }
            );
        }),
        Ye(() => {
          c == null || c(), (c = void 0);
        }),
        t({ triggerRef: o }),
        (u, f) =>
          u.virtualTriggering
            ? qn('v-if', !0)
            : (Y(),
              Ie(
                S(TE),
                Rn({ key: 0 }, u.$attrs, {
                  'aria-controls': S(s),
                  'aria-describedby': S(i),
                  'aria-expanded': S(l),
                  'aria-haspopup': S(a)
                }),
                { default: Re(() => [He(u.$slots, 'default')]), _: 3 },
                16,
                ['aria-controls', 'aria-describedby', 'aria-expanded', 'aria-haspopup']
              ))
      );
    }
  });
var PE = nt(xE, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue'
  ]
]);
const Ks = 'focus-trap.focus-after-trapped',
  Ws = 'focus-trap.focus-after-released',
  SE = 'focus-trap.focusout-prevented',
  Vc = { cancelable: !0, bubbles: !1 },
  OE = { cancelable: !0, bubbles: !1 },
  qc = 'focusAfterTrapped',
  Qc = 'focusAfterReleased',
  kE = Symbol('elFocusTrap'),
  Da = J(),
  Es = J(0),
  za = J(0);
let Eo = 0;
const tp = (e) => {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (r) => {
          const o = r.tagName === 'INPUT' && r.type === 'hidden';
          return r.disabled || r.hidden || o
            ? NodeFilter.FILTER_SKIP
            : r.tabIndex >= 0 || r === document.activeElement
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        }
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  },
  Jc = (e, t) => {
    for (const n of e) if (!AE(n, t)) return n;
  },
  AE = (e, t) => {
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    for (; e; ) {
      if (t && e === t) return !1;
      if (getComputedStyle(e).display === 'none') return !0;
      e = e.parentElement;
    }
    return !1;
  },
  IE = (e) => {
    const t = tp(e),
      n = Jc(t, e),
      r = Jc(t.reverse(), e);
    return [n, r];
  },
  RE = (e) => e instanceof HTMLInputElement && 'select' in e,
  Xt = (e, t) => {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({ preventScroll: !0 }),
        (za.value = window.performance.now()),
        e !== n && RE(e) && t && e.select();
    }
  };
function Gc(e, t) {
  const n = [...e],
    r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const ME = () => {
    let e = [];
    return {
      push: (r) => {
        const o = e[0];
        o && r !== o && o.pause(), (e = Gc(e, r)), e.unshift(r);
      },
      remove: (r) => {
        var o, s;
        (e = Gc(e, r)), (s = (o = e[0]) == null ? void 0 : o.resume) == null || s.call(o);
      }
    };
  },
  $E = (e, t = !1) => {
    const n = document.activeElement;
    for (const r of e) if ((Xt(r, t), document.activeElement !== n)) return;
  },
  Yc = ME(),
  LE = () => Es.value > za.value,
  To = () => {
    (Da.value = 'pointer'), (Es.value = window.performance.now());
  },
  Zc = () => {
    (Da.value = 'keyboard'), (Es.value = window.performance.now());
  },
  NE = () => (
    De(() => {
      Eo === 0 &&
        (document.addEventListener('mousedown', To),
        document.addEventListener('touchstart', To),
        document.addEventListener('keydown', Zc)),
        Eo++;
    }),
    Ye(() => {
      Eo--,
        Eo <= 0 &&
          (document.removeEventListener('mousedown', To),
          document.removeEventListener('touchstart', To),
          document.removeEventListener('keydown', Zc));
    }),
    { focusReason: Da, lastUserFocusTimestamp: Es, lastAutomatedFocusTimestamp: za }
  ),
  Co = (e) => new CustomEvent(SE, { ...OE, detail: e }),
  FE = se({
    name: 'ElFocusTrap',
    inheritAttrs: !1,
    props: {
      loop: Boolean,
      trapped: Boolean,
      focusTrapEl: Object,
      focusStartEl: { type: [Object, String], default: 'first' }
    },
    emits: [qc, Qc, 'focusin', 'focusout', 'focusout-prevented', 'release-requested'],
    setup(e, { emit: t }) {
      const n = J();
      let r, o;
      const { focusReason: s } = NE();
      tE((p) => {
        e.trapped && !i.paused && t('release-requested', p);
      });
      const i = {
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          }
        },
        a = (p) => {
          if ((!e.loop && !e.trapped) || i.paused) return;
          const { key: h, altKey: _, ctrlKey: g, metaKey: m, currentTarget: b, shiftKey: E } = p,
            { loop: P } = e,
            C = h === ot.tab && !_ && !g && !m,
            x = document.activeElement;
          if (C && x) {
            const T = b,
              [M, I] = IE(T);
            if (M && I) {
              if (!E && x === I) {
                const O = Co({ focusReason: s.value });
                t('focusout-prevented', O),
                  O.defaultPrevented || (p.preventDefault(), P && Xt(M, !0));
              } else if (E && [M, T].includes(x)) {
                const O = Co({ focusReason: s.value });
                t('focusout-prevented', O),
                  O.defaultPrevented || (p.preventDefault(), P && Xt(I, !0));
              }
            } else if (x === T) {
              const O = Co({ focusReason: s.value });
              t('focusout-prevented', O), O.defaultPrevented || p.preventDefault();
            }
          }
        };
      et(kE, { focusTrapRef: n, onKeydown: a }),
        fe(
          () => e.focusTrapEl,
          (p) => {
            p && (n.value = p);
          },
          { immediate: !0 }
        ),
        fe([n], ([p], [h]) => {
          p &&
            (p.addEventListener('keydown', a),
            p.addEventListener('focusin', u),
            p.addEventListener('focusout', f)),
            h &&
              (h.removeEventListener('keydown', a),
              h.removeEventListener('focusin', u),
              h.removeEventListener('focusout', f));
        });
      const l = (p) => {
          t(qc, p);
        },
        c = (p) => t(Qc, p),
        u = (p) => {
          const h = S(n);
          if (!h) return;
          const _ = p.target,
            g = p.relatedTarget,
            m = _ && h.contains(_);
          e.trapped || (g && h.contains(g)) || (r = g),
            m && t('focusin', p),
            !i.paused && e.trapped && (m ? (o = _) : Xt(o, !0));
        },
        f = (p) => {
          const h = S(n);
          if (!(i.paused || !h))
            if (e.trapped) {
              const _ = p.relatedTarget;
              !Wr(_) &&
                !h.contains(_) &&
                setTimeout(() => {
                  if (!i.paused && e.trapped) {
                    const g = Co({ focusReason: s.value });
                    t('focusout-prevented', g), g.defaultPrevented || Xt(o, !0);
                  }
                }, 0);
            } else {
              const _ = p.target;
              (_ && h.contains(_)) || t('focusout', p);
            }
        };
      async function d() {
        await yt();
        const p = S(n);
        if (p) {
          Yc.push(i);
          const h = p.contains(document.activeElement) ? r : document.activeElement;
          if (((r = h), !p.contains(h))) {
            const g = new Event(Ks, Vc);
            p.addEventListener(Ks, l),
              p.dispatchEvent(g),
              g.defaultPrevented ||
                yt(() => {
                  let m = e.focusStartEl;
                  _e(m) || (Xt(m), document.activeElement !== m && (m = 'first')),
                    m === 'first' && $E(tp(p), !0),
                    (document.activeElement === h || m === 'container') && Xt(p);
                });
          }
        }
      }
      function v() {
        const p = S(n);
        if (p) {
          p.removeEventListener(Ks, l);
          const h = new CustomEvent(Ws, { ...Vc, detail: { focusReason: s.value } });
          p.addEventListener(Ws, c),
            p.dispatchEvent(h),
            !h.defaultPrevented &&
              (s.value == 'keyboard' || !LE() || p.contains(document.activeElement)) &&
              Xt(r ?? document.body),
            p.removeEventListener(Ws, l),
            Yc.remove(i);
        }
      }
      return (
        De(() => {
          e.trapped && d(),
            fe(
              () => e.trapped,
              (p) => {
                p ? d() : v();
              }
            );
        }),
        Ye(() => {
          e.trapped && v();
        }),
        { onKeydown: a }
      );
    }
  });
function HE(e, t, n, r, o, s) {
  return He(e.$slots, 'default', { handleKeydown: e.onKeydown });
}
var jE = nt(FE, [
  ['render', HE],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue'
  ]
]);
const BE = ['fixed', 'absolute'],
  DE = tt({
    boundariesPadding: { type: Number, default: 0 },
    fallbackPlacements: { type: xe(Array), default: void 0 },
    gpuAcceleration: { type: Boolean, default: !0 },
    offset: { type: Number, default: 12 },
    placement: { type: String, values: Ia, default: 'bottom' },
    popperOptions: { type: xe(Object), default: () => ({}) },
    strategy: { type: String, values: BE, default: 'absolute' }
  }),
  np = tt({
    ...DE,
    id: String,
    style: { type: xe([String, Array, Object]) },
    className: { type: xe([String, Array, Object]) },
    effect: { type: String, default: 'dark' },
    visible: Boolean,
    enterable: { type: Boolean, default: !0 },
    pure: Boolean,
    focusOnShow: { type: Boolean, default: !1 },
    trapping: { type: Boolean, default: !1 },
    popperClass: { type: xe([String, Array, Object]) },
    popperStyle: { type: xe([String, Array, Object]) },
    referenceEl: { type: xe(Object) },
    triggerTargetEl: { type: xe(Object) },
    stopPopperMouseEvent: { type: Boolean, default: !0 },
    ariaLabel: { type: String, default: void 0 },
    virtualTriggering: Boolean,
    zIndex: Number
  }),
  zE = {
    mouseenter: (e) => e instanceof MouseEvent,
    mouseleave: (e) => e instanceof MouseEvent,
    focus: () => !0,
    blur: () => !0,
    close: () => !0
  },
  UE = (e, t = []) => {
    const { placement: n, strategy: r, popperOptions: o } = e,
      s = { placement: n, strategy: r, ...o, modifiers: [...WE(e), ...t] };
    return VE(s, o == null ? void 0 : o.modifiers), s;
  },
  KE = (e) => {
    if (It) return nn(e);
  };
function WE(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    { name: 'offset', options: { offset: [0, t ?? 12] } },
    { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
    { name: 'flip', options: { padding: 5, fallbackPlacements: r } },
    { name: 'computeStyles', options: { gpuAcceleration: n } }
  ];
}
function VE(e, t) {
  t && (e.modifiers = [...e.modifiers, ...(t ?? [])]);
}
const qE = 0,
  QE = (e) => {
    const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ae(Ba, void 0),
      s = J(),
      i = J(),
      a = j(() => ({ name: 'eventListeners', enabled: !!e.visible })),
      l = j(() => {
        var g;
        const m = S(s),
          b = (g = S(i)) != null ? g : qE;
        return { name: 'arrow', enabled: !qb(m), options: { element: m, padding: b } };
      }),
      c = j(() => ({
        onFirstUpdate: () => {
          p();
        },
        ...UE(e, [S(l), S(a)])
      })),
      u = j(() => KE(e.referenceEl) || S(r)),
      {
        attributes: f,
        state: d,
        styles: v,
        update: p,
        forceUpdate: h,
        instanceRef: _
      } = Zw(u, n, c);
    return (
      fe(_, (g) => (t.value = g)),
      De(() => {
        fe(
          () => {
            var g;
            return (g = S(u)) == null ? void 0 : g.getBoundingClientRect();
          },
          () => {
            p();
          }
        );
      }),
      {
        attributes: f,
        arrowRef: s,
        contentRef: n,
        instanceRef: _,
        state: d,
        styles: v,
        role: o,
        forceUpdate: h,
        update: p
      }
    );
  },
  JE = (e, { attributes: t, styles: n, role: r }) => {
    const { nextZIndex: o } = uE(),
      s = Be('popper'),
      i = j(() => S(t).popper),
      a = J(e.zIndex || o()),
      l = j(() => [s.b(), s.is('pure', e.pure), s.is(e.effect), e.popperClass]),
      c = j(() => [{ zIndex: S(a) }, e.popperStyle || {}, S(n).popper]),
      u = j(() => (r.value === 'dialog' ? 'false' : void 0)),
      f = j(() => S(n).arrow || {});
    return {
      ariaModal: u,
      arrowStyle: f,
      contentAttrs: i,
      contentClass: l,
      contentStyle: c,
      contentZIndex: a,
      updateZIndex: () => {
        a.value = e.zIndex || o();
      }
    };
  },
  GE = (e, t) => {
    const n = J(!1),
      r = J();
    return {
      focusStartRef: r,
      trapped: n,
      onFocusAfterReleased: (c) => {
        var u;
        ((u = c.detail) == null ? void 0 : u.focusReason) !== 'pointer' &&
          ((r.value = 'first'), t('blur'));
      },
      onFocusAfterTrapped: () => {
        t('focus');
      },
      onFocusInTrap: (c) => {
        e.visible && !n.value && (c.target && (r.value = c.target), (n.value = !0));
      },
      onFocusoutPrevented: (c) => {
        e.trapping || (c.detail.focusReason === 'pointer' && c.preventDefault(), (n.value = !1));
      },
      onReleaseRequested: () => {
        (n.value = !1), t('close');
      }
    };
  },
  YE = se({ name: 'ElPopperContent' }),
  ZE = se({
    ...YE,
    props: np,
    emits: zE,
    setup(e, { expose: t, emit: n }) {
      const r = e,
        {
          focusStartRef: o,
          trapped: s,
          onFocusAfterReleased: i,
          onFocusAfterTrapped: a,
          onFocusInTrap: l,
          onFocusoutPrevented: c,
          onReleaseRequested: u
        } = GE(r, n),
        {
          attributes: f,
          arrowRef: d,
          contentRef: v,
          styles: p,
          instanceRef: h,
          role: _,
          update: g
        } = QE(r),
        {
          ariaModal: m,
          arrowStyle: b,
          contentAttrs: E,
          contentClass: P,
          contentStyle: C,
          updateZIndex: x
        } = JE(r, { styles: p, attributes: f, role: _ }),
        T = Ae(Kc, void 0),
        M = J();
      et(Gd, { arrowStyle: b, arrowRef: d, arrowOffset: M }),
        T &&
          (T.addInputId || T.removeInputId) &&
          et(Kc, { ...T, addInputId: Xe, removeInputId: Xe });
      let I;
      const A = (N = !0) => {
          g(), N && x();
        },
        O = () => {
          A(!1), r.visible && r.focusOnShow ? (s.value = !0) : r.visible === !1 && (s.value = !1);
        };
      return (
        De(() => {
          fe(
            () => r.triggerTargetEl,
            (N, H) => {
              I == null || I(), (I = void 0);
              const ne = S(N || v.value),
                q = S(H || v.value);
              Xo(ne) &&
                (I = fe(
                  [_, () => r.ariaLabel, m, () => r.id],
                  (B) => {
                    ['role', 'aria-label', 'aria-modal', 'id'].forEach((ee, ye) => {
                      Wr(B[ye]) ? ne.removeAttribute(ee) : ne.setAttribute(ee, B[ye]);
                    });
                  },
                  { immediate: !0 }
                )),
                q !== ne &&
                  Xo(q) &&
                  ['role', 'aria-label', 'aria-modal', 'id'].forEach((B) => {
                    q.removeAttribute(B);
                  });
            },
            { immediate: !0 }
          ),
            fe(() => r.visible, O, { immediate: !0 });
        }),
        Ye(() => {
          I == null || I(), (I = void 0);
        }),
        t({ popperContentRef: v, popperInstanceRef: h, updatePopper: A, contentStyle: C }),
        (N, H) => (
          Y(),
          we(
            'div',
            Rn({ ref_key: 'contentRef', ref: v }, S(E), {
              style: S(C),
              class: S(P),
              tabindex: '-1',
              onMouseenter: H[0] || (H[0] = (ne) => N.$emit('mouseenter', ne)),
              onMouseleave: H[1] || (H[1] = (ne) => N.$emit('mouseleave', ne))
            }),
            [
              ae(
                S(jE),
                {
                  trapped: S(s),
                  'trap-on-focus-in': !0,
                  'focus-trap-el': S(v),
                  'focus-start-el': S(o),
                  onFocusAfterTrapped: S(a),
                  onFocusAfterReleased: S(i),
                  onFocusin: S(l),
                  onFocusoutPrevented: S(c),
                  onReleaseRequested: S(u)
                },
                { default: Re(() => [He(N.$slots, 'default')]), _: 3 },
                8,
                [
                  'trapped',
                  'focus-trap-el',
                  'focus-start-el',
                  'onFocusAfterTrapped',
                  'onFocusAfterReleased',
                  'onFocusin',
                  'onFocusoutPrevented',
                  'onReleaseRequested'
                ]
              )
            ],
            16
          )
        )
      );
    }
  });
var XE = nt(ZE, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue'
  ]
]);
const eT = fr(yE),
  Ua = Symbol('elTooltip'),
  rp = tt({
    ...oE,
    ...np,
    appendTo: { type: xe([String, Object]) },
    content: { type: String, default: '' },
    rawContent: { type: Boolean, default: !1 },
    persistent: Boolean,
    ariaLabel: String,
    visible: { type: xe(Boolean), default: null },
    transition: String,
    teleported: { type: Boolean, default: !0 },
    disabled: Boolean
  }),
  op = tt({
    ...ep,
    disabled: Boolean,
    trigger: { type: xe([String, Array]), default: 'hover' },
    triggerKeys: { type: xe(Array), default: () => [ot.enter, ot.space] }
  }),
  { useModelToggleProps: tT, useModelToggleEmits: nT, useModelToggle: rT } = $d('visible'),
  oT = tt({ ...Yd, ...tT, ...rp, ...op, ...Zd, showArrow: { type: Boolean, default: !0 } }),
  sT = [...nT, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
  iT = (e, t) => (te(e) ? e.includes(t) : e === t),
  Ln = (e, t, n) => (r) => {
    iT(S(e), t) && n(r);
  },
  aT = se({ name: 'ElTooltipTrigger' }),
  lT = se({
    ...aT,
    props: op,
    setup(e, { expose: t }) {
      const n = e,
        r = Be('tooltip'),
        { controlled: o, id: s, open: i, onOpen: a, onClose: l, onToggle: c } = Ae(Ua, void 0),
        u = J(null),
        f = () => {
          if (S(o) || n.disabled) return !0;
        },
        d = xt(n, 'trigger'),
        v = Dt(f, Ln(d, 'hover', a)),
        p = Dt(f, Ln(d, 'hover', l)),
        h = Dt(
          f,
          Ln(d, 'click', (E) => {
            E.button === 0 && c(E);
          })
        ),
        _ = Dt(f, Ln(d, 'focus', a)),
        g = Dt(f, Ln(d, 'focus', l)),
        m = Dt(
          f,
          Ln(d, 'contextmenu', (E) => {
            E.preventDefault(), c(E);
          })
        ),
        b = Dt(f, (E) => {
          const { code: P } = E;
          n.triggerKeys.includes(P) && (E.preventDefault(), c(E));
        });
      return (
        t({ triggerRef: u }),
        (E, P) => (
          Y(),
          Ie(
            S(PE),
            {
              id: S(s),
              'virtual-ref': E.virtualRef,
              open: S(i),
              'virtual-triggering': E.virtualTriggering,
              class: Fe(S(r).e('trigger')),
              onBlur: S(g),
              onClick: S(h),
              onContextmenu: S(m),
              onFocus: S(_),
              onMouseenter: S(v),
              onMouseleave: S(p),
              onKeydown: S(b)
            },
            { default: Re(() => [He(E.$slots, 'default')]), _: 3 },
            8,
            [
              'id',
              'virtual-ref',
              'open',
              'virtual-triggering',
              'class',
              'onBlur',
              'onClick',
              'onContextmenu',
              'onFocus',
              'onMouseenter',
              'onMouseleave',
              'onKeydown'
            ]
          )
        )
      );
    }
  });
var cT = nt(lT, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue'
  ]
]);
const uT = se({ name: 'ElTooltipContent', inheritAttrs: !1 }),
  fT = se({
    ...uT,
    props: rp,
    setup(e, { expose: t }) {
      const n = e,
        { selector: r } = Qd(),
        o = Be('tooltip'),
        s = J(null),
        i = J(!1),
        {
          controlled: a,
          id: l,
          open: c,
          trigger: u,
          onClose: f,
          onOpen: d,
          onShow: v,
          onHide: p,
          onBeforeShow: h,
          onBeforeHide: _
        } = Ae(Ua, void 0),
        g = j(() => n.transition || `${o.namespace.value}-fade-in-linear`),
        m = j(() => n.persistent);
      Ye(() => {
        i.value = !0;
      });
      const b = j(() => (S(m) ? !0 : S(c))),
        E = j(() => (n.disabled ? !1 : S(c))),
        P = j(() => n.appendTo || r.value),
        C = j(() => {
          var B;
          return (B = n.style) != null ? B : {};
        }),
        x = j(() => !S(c)),
        T = () => {
          p();
        },
        M = () => {
          if (S(a)) return !0;
        },
        I = Dt(M, () => {
          n.enterable && S(u) === 'hover' && d();
        }),
        A = Dt(M, () => {
          S(u) === 'hover' && f();
        }),
        O = () => {
          var B, ee;
          (ee = (B = s.value) == null ? void 0 : B.updatePopper) == null || ee.call(B),
            h == null || h();
        },
        N = () => {
          _ == null || _();
        },
        H = () => {
          v(),
            (q = Nb(
              j(() => {
                var B;
                return (B = s.value) == null ? void 0 : B.popperContentRef;
              }),
              () => {
                if (S(a)) return;
                S(u) !== 'hover' && f();
              }
            ));
        },
        ne = () => {
          n.virtualTriggering || f();
        };
      let q;
      return (
        fe(
          () => S(c),
          (B) => {
            B || q == null || q();
          },
          { flush: 'post' }
        ),
        fe(
          () => n.content,
          () => {
            var B, ee;
            (ee = (B = s.value) == null ? void 0 : B.updatePopper) == null || ee.call(B);
          }
        ),
        t({ contentRef: s }),
        (B, ee) => (
          Y(),
          Ie(
            Wg,
            { disabled: !B.teleported, to: S(P) },
            [
              ae(
                lr,
                {
                  name: S(g),
                  onAfterLeave: T,
                  onBeforeEnter: O,
                  onAfterEnter: H,
                  onBeforeLeave: N
                },
                {
                  default: Re(() => [
                    S(b)
                      ? ps(
                          (Y(),
                          Ie(
                            S(XE),
                            Rn({ key: 0, id: S(l), ref_key: 'contentRef', ref: s }, B.$attrs, {
                              'aria-label': B.ariaLabel,
                              'aria-hidden': S(x),
                              'boundaries-padding': B.boundariesPadding,
                              'fallback-placements': B.fallbackPlacements,
                              'gpu-acceleration': B.gpuAcceleration,
                              offset: B.offset,
                              placement: B.placement,
                              'popper-options': B.popperOptions,
                              strategy: B.strategy,
                              effect: B.effect,
                              enterable: B.enterable,
                              pure: B.pure,
                              'popper-class': B.popperClass,
                              'popper-style': [B.popperStyle, S(C)],
                              'reference-el': B.referenceEl,
                              'trigger-target-el': B.triggerTargetEl,
                              visible: S(E),
                              'z-index': B.zIndex,
                              onMouseenter: S(I),
                              onMouseleave: S(A),
                              onBlur: ne,
                              onClose: S(f)
                            }),
                            {
                              default: Re(() => [
                                i.value ? qn('v-if', !0) : He(B.$slots, 'default', { key: 0 })
                              ]),
                              _: 3
                            },
                            16,
                            [
                              'id',
                              'aria-label',
                              'aria-hidden',
                              'boundaries-padding',
                              'fallback-placements',
                              'gpu-acceleration',
                              'offset',
                              'placement',
                              'popper-options',
                              'strategy',
                              'effect',
                              'enterable',
                              'pure',
                              'popper-class',
                              'popper-style',
                              'reference-el',
                              'trigger-target-el',
                              'visible',
                              'z-index',
                              'onMouseenter',
                              'onMouseleave',
                              'onClose'
                            ]
                          )),
                          [[ya, S(E)]]
                        )
                      : qn('v-if', !0)
                  ]),
                  _: 3
                },
                8,
                ['name']
              )
            ],
            8,
            ['disabled', 'to']
          )
        )
      );
    }
  });
var dT = nt(fT, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue'
  ]
]);
const pT = ['innerHTML'],
  hT = { key: 1 },
  gT = se({ name: 'ElTooltip' }),
  mT = se({
    ...gT,
    props: oT,
    emits: sT,
    setup(e, { expose: t, emit: n }) {
      const r = e;
      rE();
      const o = eE(),
        s = J(),
        i = J(),
        a = () => {
          var g;
          const m = S(s);
          m && ((g = m.popperInstanceRef) == null || g.update());
        },
        l = J(!1),
        c = J(),
        { show: u, hide: f, hasUpdateHandler: d } = rT({ indicator: l, toggleReason: c }),
        { onOpen: v, onClose: p } = sE({
          showAfter: xt(r, 'showAfter'),
          hideAfter: xt(r, 'hideAfter'),
          autoClose: xt(r, 'autoClose'),
          open: u,
          close: f
        }),
        h = j(() => Pd(r.visible) && !d.value);
      et(Ua, {
        controlled: h,
        id: o,
        open: In(l),
        trigger: xt(r, 'trigger'),
        onOpen: (g) => {
          v(g);
        },
        onClose: (g) => {
          p(g);
        },
        onToggle: (g) => {
          S(l) ? p(g) : v(g);
        },
        onShow: () => {
          n('show', c.value);
        },
        onHide: () => {
          n('hide', c.value);
        },
        onBeforeShow: () => {
          n('before-show', c.value);
        },
        onBeforeHide: () => {
          n('before-hide', c.value);
        },
        updatePopper: a
      }),
        fe(
          () => r.disabled,
          (g) => {
            g && l.value && (l.value = !1);
          }
        );
      const _ = () => {
        var g, m;
        const b =
          (m = (g = i.value) == null ? void 0 : g.contentRef) == null ? void 0 : m.popperContentRef;
        return b && b.contains(document.activeElement);
      };
      return (
        ca(() => l.value && f()),
        t({
          popperRef: s,
          contentRef: i,
          isFocusInsideContent: _,
          updatePopper: a,
          onOpen: v,
          onClose: p,
          hide: f
        }),
        (g, m) => (
          Y(),
          Ie(
            S(eT),
            { ref_key: 'popperRef', ref: s, role: g.role },
            {
              default: Re(() => [
                ae(
                  cT,
                  {
                    disabled: g.disabled,
                    trigger: g.trigger,
                    'trigger-keys': g.triggerKeys,
                    'virtual-ref': g.virtualRef,
                    'virtual-triggering': g.virtualTriggering
                  },
                  {
                    default: Re(() => [
                      g.$slots.default ? He(g.$slots, 'default', { key: 0 }) : qn('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['disabled', 'trigger', 'trigger-keys', 'virtual-ref', 'virtual-triggering']
                ),
                ae(
                  dT,
                  {
                    ref_key: 'contentRef',
                    ref: i,
                    'aria-label': g.ariaLabel,
                    'boundaries-padding': g.boundariesPadding,
                    content: g.content,
                    disabled: g.disabled,
                    effect: g.effect,
                    enterable: g.enterable,
                    'fallback-placements': g.fallbackPlacements,
                    'hide-after': g.hideAfter,
                    'gpu-acceleration': g.gpuAcceleration,
                    offset: g.offset,
                    persistent: g.persistent,
                    'popper-class': g.popperClass,
                    'popper-style': g.popperStyle,
                    placement: g.placement,
                    'popper-options': g.popperOptions,
                    pure: g.pure,
                    'raw-content': g.rawContent,
                    'reference-el': g.referenceEl,
                    'trigger-target-el': g.triggerTargetEl,
                    'show-after': g.showAfter,
                    strategy: g.strategy,
                    teleported: g.teleported,
                    transition: g.transition,
                    'virtual-triggering': g.virtualTriggering,
                    'z-index': g.zIndex,
                    'append-to': g.appendTo
                  },
                  {
                    default: Re(() => [
                      He(g.$slots, 'content', {}, () => [
                        g.rawContent
                          ? (Y(), we('span', { key: 0, innerHTML: g.content }, null, 8, pT))
                          : (Y(), we('span', hT, Wn(g.content), 1))
                      ]),
                      g.showArrow
                        ? (Y(),
                          Ie(S(wE), { key: 0, 'arrow-offset': g.arrowOffset }, null, 8, [
                            'arrow-offset'
                          ]))
                        : qn('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'aria-label',
                    'boundaries-padding',
                    'content',
                    'disabled',
                    'effect',
                    'enterable',
                    'fallback-placements',
                    'hide-after',
                    'gpu-acceleration',
                    'offset',
                    'persistent',
                    'popper-class',
                    'popper-style',
                    'placement',
                    'popper-options',
                    'pure',
                    'raw-content',
                    'reference-el',
                    'trigger-target-el',
                    'show-after',
                    'strategy',
                    'teleported',
                    'transition',
                    'virtual-triggering',
                    'z-index',
                    'append-to'
                  ]
                )
              ]),
              _: 3
            },
            8,
            ['role']
          )
        )
      );
    }
  });
var vT = nt(mT, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue'
  ]
]);
const sp = fr(vT),
  yT = tt({
    size: { type: [Number, String], values: U1, default: '', validator: (e) => to(e) },
    shape: { type: String, values: ['circle', 'square'], default: 'circle' },
    icon: { type: Er },
    src: { type: String, default: '' },
    alt: String,
    srcSet: String,
    fit: { type: xe(String), default: 'cover' }
  }),
  _T = { error: (e) => e instanceof Event },
  bT = ['src', 'alt', 'srcset'],
  wT = se({ name: 'ElAvatar' }),
  ET = se({
    ...wT,
    props: yT,
    emits: _T,
    setup(e, { emit: t }) {
      const n = e,
        r = Be('avatar'),
        o = J(!1),
        s = j(() => {
          const { size: c, icon: u, shape: f } = n,
            d = [r.b()];
          return _e(c) && d.push(r.m(c)), u && d.push(r.m('icon')), f && d.push(r.m(f)), d;
        }),
        i = j(() => {
          const { size: c } = n;
          return to(c) ? r.cssVarBlock({ size: Od(c) || '' }) : void 0;
        }),
        a = j(() => ({ objectFit: n.fit }));
      fe(
        () => n.src,
        () => (o.value = !1)
      );
      function l(c) {
        (o.value = !0), t('error', c);
      }
      return (c, u) => (
        Y(),
        we(
          'span',
          { class: Fe(S(s)), style: Ut(S(i)) },
          [
            (c.src || c.srcSet) && !o.value
              ? (Y(),
                we(
                  'img',
                  { key: 0, src: c.src, alt: c.alt, srcset: c.srcSet, style: Ut(S(a)), onError: l },
                  null,
                  44,
                  bT
                ))
              : c.icon
              ? (Y(), Ie(S(ja), { key: 1 }, { default: Re(() => [(Y(), Ie(da(c.icon)))]), _: 1 }))
              : He(c.$slots, 'default', { key: 2 })
          ],
          6
        )
      );
    }
  });
var TT = nt(ET, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue'
  ]
]);
const CT = fr(TT);
function Ve(e, t) {
  xT(e) && (e = '100%');
  var n = PT(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function xo(e) {
  return Math.min(1, Math.max(0, e));
}
function xT(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function PT(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function ip(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Po(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function Cn(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function ST(e, t, n) {
  return { r: Ve(e, 255) * 255, g: Ve(t, 255) * 255, b: Ve(n, 255) * 255 };
}
function Xc(e, t, n) {
  (e = Ve(e, 255)), (t = Ve(t, 255)), (n = Ve(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    s = 0,
    i = 0,
    a = (r + o) / 2;
  if (r === o) (i = 0), (s = 0);
  else {
    var l = r - o;
    switch (((i = a > 0.5 ? l / (2 - r - o) : l / (r + o)), r)) {
      case e:
        s = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / l + 2;
        break;
      case n:
        s = (e - t) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: i, l: a };
}
function Vs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function OT(e, t, n) {
  var r, o, s;
  if (((e = Ve(e, 360)), (t = Ve(t, 100)), (n = Ve(n, 100)), t === 0)) (o = n), (s = n), (r = n);
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - i;
    (r = Vs(a, i, e + 1 / 3)), (o = Vs(a, i, e)), (s = Vs(a, i, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: s * 255 };
}
function eu(e, t, n) {
  (e = Ve(e, 255)), (t = Ve(t, 255)), (n = Ve(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    s = 0,
    i = r,
    a = r - o,
    l = r === 0 ? 0 : a / r;
  if (r === o) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / a + 2;
        break;
      case n:
        s = (e - t) / a + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: l, v: i };
}
function kT(e, t, n) {
  (e = Ve(e, 360) * 6), (t = Ve(t, 100)), (n = Ve(n, 100));
  var r = Math.floor(e),
    o = e - r,
    s = n * (1 - t),
    i = n * (1 - o * t),
    a = n * (1 - (1 - o) * t),
    l = r % 6,
    c = [n, i, s, s, a, n][l],
    u = [a, n, n, i, s, s][l],
    f = [s, s, a, n, n, i][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function tu(e, t, n, r) {
  var o = [
    Cn(Math.round(e).toString(16)),
    Cn(Math.round(t).toString(16)),
    Cn(Math.round(n).toString(16))
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function AT(e, t, n, r, o) {
  var s = [
    Cn(Math.round(e).toString(16)),
    Cn(Math.round(t).toString(16)),
    Cn(Math.round(n).toString(16)),
    Cn(IT(r))
  ];
  return o &&
    s[0].startsWith(s[0].charAt(1)) &&
    s[1].startsWith(s[1].charAt(1)) &&
    s[2].startsWith(s[2].charAt(1)) &&
    s[3].startsWith(s[3].charAt(1))
    ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0)
    : s.join('');
}
function IT(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function nu(e) {
  return ft(e) / 255;
}
function ft(e) {
  return parseInt(e, 16);
}
function RT(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Ri = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
function MT(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    s = null,
    i = !1,
    a = !1;
  return (
    typeof e == 'string' && (e = NT(e)),
    typeof e == 'object' &&
      (Ht(e.r) && Ht(e.g) && Ht(e.b)
        ? ((t = ST(e.r, e.g, e.b)), (i = !0), (a = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Ht(e.h) && Ht(e.s) && Ht(e.v)
        ? ((r = Po(e.s)), (o = Po(e.v)), (t = kT(e.h, r, o)), (i = !0), (a = 'hsv'))
        : Ht(e.h) &&
          Ht(e.s) &&
          Ht(e.l) &&
          ((r = Po(e.s)), (s = Po(e.l)), (t = OT(e.h, r, s)), (i = !0), (a = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = ip(n)),
    {
      ok: i,
      format: e.format || a,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n
    }
  );
}
var $T = '[-\\+]?\\d+%?',
  LT = '[-\\+]?\\d*\\.\\d+%?',
  rn = '(?:'.concat(LT, ')|(?:').concat($T, ')'),
  qs = '[\\s|\\(]+('.concat(rn, ')[,|\\s]+(').concat(rn, ')[,|\\s]+(').concat(rn, ')\\s*\\)?'),
  Qs = '[\\s|\\(]+('
    .concat(rn, ')[,|\\s]+(')
    .concat(rn, ')[,|\\s]+(')
    .concat(rn, ')[,|\\s]+(')
    .concat(rn, ')\\s*\\)?'),
  Et = {
    CSS_UNIT: new RegExp(rn),
    rgb: new RegExp('rgb' + qs),
    rgba: new RegExp('rgba' + Qs),
    hsl: new RegExp('hsl' + qs),
    hsla: new RegExp('hsla' + Qs),
    hsv: new RegExp('hsv' + qs),
    hsva: new RegExp('hsva' + Qs),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
function NT(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Ri[e]) (e = Ri[e]), (t = !0);
  else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var n = Et.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Et.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Et.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Et.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Et.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Et.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Et.hex8.exec(e)),
                          n
                            ? {
                                r: ft(n[1]),
                                g: ft(n[2]),
                                b: ft(n[3]),
                                a: nu(n[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((n = Et.hex6.exec(e)),
                              n
                                ? {
                                    r: ft(n[1]),
                                    g: ft(n[2]),
                                    b: ft(n[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((n = Et.hex4.exec(e)),
                                  n
                                    ? {
                                        r: ft(n[1] + n[1]),
                                        g: ft(n[2] + n[2]),
                                        b: ft(n[3] + n[3]),
                                        a: nu(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((n = Et.hex3.exec(e)),
                                      n
                                        ? {
                                            r: ft(n[1] + n[1]),
                                            g: ft(n[2] + n[2]),
                                            b: ft(n[3] + n[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))));
}
function Ht(e) {
  return !!Et.CSS_UNIT.exec(String(e));
}
var FT = (function () {
  function e(t, n) {
    t === void 0 && (t = ''), n === void 0 && (n = {});
    var r;
    if (t instanceof e) return t;
    typeof t == 'number' && (t = RT(t)), (this.originalInput = t);
    var o = MT(t);
    (this.originalInput = t),
      (this.r = o.r),
      (this.g = o.g),
      (this.b = o.b),
      (this.a = o.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
      (this.gradientType = n.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = o.ok);
  }
  return (
    (e.prototype.isDark = function () {
      return this.getBrightness() < 128;
    }),
    (e.prototype.isLight = function () {
      return !this.isDark();
    }),
    (e.prototype.getBrightness = function () {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }),
    (e.prototype.getLuminance = function () {
      var t = this.toRgb(),
        n,
        r,
        o,
        s = t.r / 255,
        i = t.g / 255,
        a = t.b / 255;
      return (
        s <= 0.03928 ? (n = s / 12.92) : (n = Math.pow((s + 0.055) / 1.055, 2.4)),
        i <= 0.03928 ? (r = i / 12.92) : (r = Math.pow((i + 0.055) / 1.055, 2.4)),
        a <= 0.03928 ? (o = a / 12.92) : (o = Math.pow((a + 0.055) / 1.055, 2.4)),
        0.2126 * n + 0.7152 * r + 0.0722 * o
      );
    }),
    (e.prototype.getAlpha = function () {
      return this.a;
    }),
    (e.prototype.setAlpha = function (t) {
      return (this.a = ip(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
    }),
    (e.prototype.isMonochrome = function () {
      var t = this.toHsl().s;
      return t === 0;
    }),
    (e.prototype.toHsv = function () {
      var t = eu(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }),
    (e.prototype.toHsvString = function () {
      var t = eu(this.r, this.g, this.b),
        n = Math.round(t.h * 360),
        r = Math.round(t.s * 100),
        o = Math.round(t.v * 100);
      return this.a === 1
        ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
        : 'hsva('.concat(n, ', ').concat(r, '%, ').concat(o, '%, ').concat(this.roundA, ')');
    }),
    (e.prototype.toHsl = function () {
      var t = Xc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }),
    (e.prototype.toHslString = function () {
      var t = Xc(this.r, this.g, this.b),
        n = Math.round(t.h * 360),
        r = Math.round(t.s * 100),
        o = Math.round(t.l * 100);
      return this.a === 1
        ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
        : 'hsla('.concat(n, ', ').concat(r, '%, ').concat(o, '%, ').concat(this.roundA, ')');
    }),
    (e.prototype.toHex = function (t) {
      return t === void 0 && (t = !1), tu(this.r, this.g, this.b, t);
    }),
    (e.prototype.toHexString = function (t) {
      return t === void 0 && (t = !1), '#' + this.toHex(t);
    }),
    (e.prototype.toHex8 = function (t) {
      return t === void 0 && (t = !1), AT(this.r, this.g, this.b, this.a, t);
    }),
    (e.prototype.toHex8String = function (t) {
      return t === void 0 && (t = !1), '#' + this.toHex8(t);
    }),
    (e.prototype.toHexShortString = function (t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }),
    (e.prototype.toRgb = function () {
      return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
    }),
    (e.prototype.toRgbString = function () {
      var t = Math.round(this.r),
        n = Math.round(this.g),
        r = Math.round(this.b);
      return this.a === 1
        ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
        : 'rgba('.concat(t, ', ').concat(n, ', ').concat(r, ', ').concat(this.roundA, ')');
    }),
    (e.prototype.toPercentageRgb = function () {
      var t = function (n) {
        return ''.concat(Math.round(Ve(n, 255) * 100), '%');
      };
      return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
    }),
    (e.prototype.toPercentageRgbString = function () {
      var t = function (n) {
        return Math.round(Ve(n, 255) * 100);
      };
      return this.a === 1
        ? 'rgb('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%)')
        : 'rgba('
            .concat(t(this.r), '%, ')
            .concat(t(this.g), '%, ')
            .concat(t(this.b), '%, ')
            .concat(this.roundA, ')');
    }),
    (e.prototype.toName = function () {
      if (this.a === 0) return 'transparent';
      if (this.a < 1) return !1;
      for (
        var t = '#' + tu(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Ri);
        n < r.length;
        n++
      ) {
        var o = r[n],
          s = o[0],
          i = o[1];
        if (t === i) return s;
      }
      return !1;
    }),
    (e.prototype.toString = function (t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1,
        o = this.a < 1 && this.a >= 0,
        s = !n && o && (t.startsWith('hex') || t === 'name');
      return s
        ? t === 'name' && this.a === 0
          ? this.toName()
          : this.toRgbString()
        : (t === 'rgb' && (r = this.toRgbString()),
          t === 'prgb' && (r = this.toPercentageRgbString()),
          (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
          t === 'hex3' && (r = this.toHexString(!0)),
          t === 'hex4' && (r = this.toHex8String(!0)),
          t === 'hex8' && (r = this.toHex8String()),
          t === 'name' && (r = this.toName()),
          t === 'hsl' && (r = this.toHslString()),
          t === 'hsv' && (r = this.toHsvString()),
          r || this.toHexString());
    }),
    (e.prototype.toNumber = function () {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }),
    (e.prototype.clone = function () {
      return new e(this.toString());
    }),
    (e.prototype.lighten = function (t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return (n.l += t / 100), (n.l = xo(n.l)), new e(n);
    }),
    (e.prototype.brighten = function (t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return (
        (n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100))))),
        (n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100))))),
        (n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100))))),
        new e(n)
      );
    }),
    (e.prototype.darken = function (t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return (n.l -= t / 100), (n.l = xo(n.l)), new e(n);
    }),
    (e.prototype.tint = function (t) {
      return t === void 0 && (t = 10), this.mix('white', t);
    }),
    (e.prototype.shade = function (t) {
      return t === void 0 && (t = 10), this.mix('black', t);
    }),
    (e.prototype.desaturate = function (t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return (n.s -= t / 100), (n.s = xo(n.s)), new e(n);
    }),
    (e.prototype.saturate = function (t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return (n.s += t / 100), (n.s = xo(n.s)), new e(n);
    }),
    (e.prototype.greyscale = function () {
      return this.desaturate(100);
    }),
    (e.prototype.spin = function (t) {
      var n = this.toHsl(),
        r = (n.h + t) % 360;
      return (n.h = r < 0 ? 360 + r : r), new e(n);
    }),
    (e.prototype.mix = function (t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(),
        o = new e(t).toRgb(),
        s = n / 100,
        i = {
          r: (o.r - r.r) * s + r.r,
          g: (o.g - r.g) * s + r.g,
          b: (o.b - r.b) * s + r.b,
          a: (o.a - r.a) * s + r.a
        };
      return new e(i);
    }),
    (e.prototype.analogous = function (t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(),
        o = 360 / n,
        s = [this];
      for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
        (r.h = (r.h + o) % 360), s.push(new e(r));
      return s;
    }),
    (e.prototype.complement = function () {
      var t = this.toHsl();
      return (t.h = (t.h + 180) % 360), new e(t);
    }),
    (e.prototype.monochromatic = function (t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, s = n.v, i = [], a = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: s })), (s = (s + a) % 1);
      return i;
    }),
    (e.prototype.splitcomplement = function () {
      var t = this.toHsl(),
        n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }),
    (e.prototype.onBackground = function (t) {
      var n = this.toRgb(),
        r = new e(t).toRgb(),
        o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }),
    (e.prototype.triad = function () {
      return this.polyad(3);
    }),
    (e.prototype.tetrad = function () {
      return this.polyad(4);
    }),
    (e.prototype.polyad = function (t) {
      for (var n = this.toHsl(), r = n.h, o = [this], s = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * s) % 360, s: n.s, l: n.l }));
      return o;
    }),
    (e.prototype.equals = function (t) {
      return this.toRgbString() === new e(t).toRgbString();
    }),
    e
  );
})();
const HT = se({ name: 'ElCollapseTransition' }),
  jT = se({
    ...HT,
    setup(e) {
      const t = Be('collapse-transition'),
        n = {
          beforeEnter(r) {
            r.dataset || (r.dataset = {}),
              (r.dataset.oldPaddingTop = r.style.paddingTop),
              (r.dataset.oldPaddingBottom = r.style.paddingBottom),
              (r.style.maxHeight = 0),
              (r.style.paddingTop = 0),
              (r.style.paddingBottom = 0);
          },
          enter(r) {
            (r.dataset.oldOverflow = r.style.overflow),
              r.scrollHeight !== 0
                ? ((r.style.maxHeight = `${r.scrollHeight}px`),
                  (r.style.paddingTop = r.dataset.oldPaddingTop),
                  (r.style.paddingBottom = r.dataset.oldPaddingBottom))
                : ((r.style.maxHeight = 0),
                  (r.style.paddingTop = r.dataset.oldPaddingTop),
                  (r.style.paddingBottom = r.dataset.oldPaddingBottom)),
              (r.style.overflow = 'hidden');
          },
          afterEnter(r) {
            (r.style.maxHeight = ''), (r.style.overflow = r.dataset.oldOverflow);
          },
          beforeLeave(r) {
            r.dataset || (r.dataset = {}),
              (r.dataset.oldPaddingTop = r.style.paddingTop),
              (r.dataset.oldPaddingBottom = r.style.paddingBottom),
              (r.dataset.oldOverflow = r.style.overflow),
              (r.style.maxHeight = `${r.scrollHeight}px`),
              (r.style.overflow = 'hidden');
          },
          leave(r) {
            r.scrollHeight !== 0 &&
              ((r.style.maxHeight = 0), (r.style.paddingTop = 0), (r.style.paddingBottom = 0));
          },
          afterLeave(r) {
            (r.style.maxHeight = ''),
              (r.style.overflow = r.dataset.oldOverflow),
              (r.style.paddingTop = r.dataset.oldPaddingTop),
              (r.style.paddingBottom = r.dataset.oldPaddingBottom);
          }
        };
      return (r, o) => (
        Y(),
        Ie(
          lr,
          Rn({ name: S(t).b() }, Cg(n)),
          { default: Re(() => [He(r.$slots, 'default')]), _: 3 },
          16,
          ['name']
        )
      );
    }
  });
var No = nt(jT, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue'
  ]
]);
No.install = (e) => {
  e.component(No.name, No);
};
const BT = No,
  DT = tt({
    direction: { type: String, values: ['horizontal', 'vertical'], default: 'horizontal' },
    contentPosition: { type: String, values: ['left', 'center', 'right'], default: 'center' },
    borderStyle: { type: xe(String), default: 'solid' }
  }),
  zT = se({ name: 'ElDivider' }),
  UT = se({
    ...zT,
    props: DT,
    setup(e) {
      const t = e,
        n = Be('divider'),
        r = j(() => n.cssVar({ 'border-style': t.borderStyle }));
      return (o, s) => (
        Y(),
        we(
          'div',
          { class: Fe([S(n).b(), S(n).m(o.direction)]), style: Ut(S(r)), role: 'separator' },
          [
            o.$slots.default && o.direction !== 'vertical'
              ? (Y(),
                we(
                  'div',
                  { key: 0, class: Fe([S(n).e('text'), S(n).is(o.contentPosition)]) },
                  [He(o.$slots, 'default')],
                  2
                ))
              : qn('v-if', !0)
          ],
          6
        )
      );
    }
  });
var KT = nt(UT, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue'
  ]
]);
const WT = fr(KT);
let VT = class {
    constructor(t, n) {
      (this.parent = t), (this.domNode = n), (this.subIndex = 0), (this.subIndex = 0), this.init();
    }
    init() {
      (this.subMenuItems = this.domNode.querySelectorAll('li')), this.addListeners();
    }
    gotoSubIndex(t) {
      t === this.subMenuItems.length ? (t = 0) : t < 0 && (t = this.subMenuItems.length - 1),
        this.subMenuItems[t].focus(),
        (this.subIndex = t);
    }
    addListeners() {
      const t = this.parent.domNode;
      Array.prototype.forEach.call(this.subMenuItems, (n) => {
        n.addEventListener('keydown', (r) => {
          let o = !1;
          switch (r.code) {
            case ot.down: {
              this.gotoSubIndex(this.subIndex + 1), (o = !0);
              break;
            }
            case ot.up: {
              this.gotoSubIndex(this.subIndex - 1), (o = !0);
              break;
            }
            case ot.tab: {
              Mo(t, 'mouseleave');
              break;
            }
            case ot.enter:
            case ot.space: {
              (o = !0), r.currentTarget.click();
              break;
            }
          }
          return o && (r.preventDefault(), r.stopPropagation()), !1;
        });
      });
    }
  },
  qT = class {
    constructor(t, n) {
      (this.domNode = t), (this.submenu = null), (this.submenu = null), this.init(n);
    }
    init(t) {
      this.domNode.setAttribute('tabindex', '0');
      const n = this.domNode.querySelector(`.${t}-menu`);
      n && (this.submenu = new VT(this, n)), this.addListeners();
    }
    addListeners() {
      this.domNode.addEventListener('keydown', (t) => {
        let n = !1;
        switch (t.code) {
          case ot.down: {
            Mo(t.currentTarget, 'mouseenter'),
              this.submenu && this.submenu.gotoSubIndex(0),
              (n = !0);
            break;
          }
          case ot.up: {
            Mo(t.currentTarget, 'mouseenter'),
              this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
              (n = !0);
            break;
          }
          case ot.tab: {
            Mo(t.currentTarget, 'mouseleave');
            break;
          }
          case ot.enter:
          case ot.space: {
            (n = !0), t.currentTarget.click();
            break;
          }
        }
        n && t.preventDefault();
      });
    }
  },
  QT = class {
    constructor(t, n) {
      (this.domNode = t), this.init(n);
    }
    init(t) {
      const n = this.domNode.childNodes;
      Array.from(n).forEach((r) => {
        r.nodeType === 1 && new qT(r, t);
      });
    }
  };
const JT = se({
  name: 'ElMenuCollapseTransition',
  setup() {
    const e = Be('menu');
    return {
      listeners: {
        onBeforeEnter: (n) => (n.style.opacity = '0.2'),
        onEnter(n, r) {
          bo(n, `${e.namespace.value}-opacity-transition`), (n.style.opacity = '1'), r();
        },
        onAfterEnter(n) {
          Us(n, `${e.namespace.value}-opacity-transition`), (n.style.opacity = '');
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}),
            Yb(n, e.m('collapse'))
              ? (Us(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                bo(n, e.m('collapse')))
              : (bo(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                Us(n, e.m('collapse'))),
            (n.style.width = `${n.scrollWidth}px`),
            (n.style.overflow = 'hidden');
        },
        onLeave(n) {
          bo(n, 'horizontal-collapse-transition'), (n.style.width = `${n.dataset.scrollWidth}px`);
        }
      }
    };
  }
});
function GT(e, t, n, r, o, s) {
  return (
    Y(),
    Ie(
      lr,
      Rn({ mode: 'out-in' }, e.listeners),
      { default: Re(() => [He(e.$slots, 'default')]), _: 3 },
      16
    )
  );
}
var YT = nt(JT, [
  ['render', GT],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue'
  ]
]);
function ap(e, t) {
  const n = j(() => {
    let o = e.parent;
    const s = [t.value];
    for (; o.type.name !== 'ElMenu'; ) o.props.index && s.unshift(o.props.index), (o = o.parent);
    return s;
  });
  return {
    parentMenu: j(() => {
      let o = e.parent;
      for (; o && !['ElMenu', 'ElSubMenu'].includes(o.type.name); ) o = o.parent;
      return o;
    }),
    indexPath: n
  };
}
function ZT(e) {
  return j(() => {
    const n = e.backgroundColor;
    return n ? new FT(n).shade(20).toString() : '';
  });
}
const lp = (e, t) => {
    const n = Be('menu');
    return j(() =>
      n.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': ZT(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${t}`
      })
    );
  },
  XT = tt({
    index: { type: String, required: !0 },
    showTimeout: { type: Number, default: 300 },
    hideTimeout: { type: Number, default: 300 },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: { type: Boolean, default: void 0 },
    teleported: { type: Boolean, default: void 0 },
    popperOffset: { type: Number, default: 6 },
    expandCloseIcon: { type: Er },
    expandOpenIcon: { type: Er },
    collapseCloseIcon: { type: Er },
    collapseOpenIcon: { type: Er }
  }),
  So = 'ElSubMenu';
var Ka = se({
  name: So,
  props: XT,
  setup(e, { slots: t, expose: n }) {
    W1(
      {
        from: 'popper-append-to-body',
        replacement: 'teleported',
        scope: So,
        version: '2.3.0',
        ref: 'https://element-plus.org/en-US/component/menu.html#submenu-attributes'
      },
      j(() => e.popperAppendToBody !== void 0)
    );
    const r = ze(),
      { indexPath: o, parentMenu: s } = ap(
        r,
        j(() => e.index)
      ),
      i = Be('menu'),
      a = Be('sub-menu'),
      l = Ae('rootMenu');
    l || es(So, 'can not inject root menu');
    const c = Ae(`subMenu:${s.value.uid}`);
    c || es(So, 'can not inject sub menu');
    const u = J({}),
      f = J({});
    let d;
    const v = J(!1),
      p = J(),
      h = J(null),
      _ = j(() => (A.value === 'horizontal' && m.value ? 'bottom-start' : 'right-start')),
      g = j(() =>
        (A.value === 'horizontal' && m.value) || (A.value === 'vertical' && !l.props.collapse)
          ? e.expandCloseIcon && e.expandOpenIcon
            ? C.value
              ? e.expandOpenIcon
              : e.expandCloseIcon
            : r1
          : e.collapseCloseIcon && e.collapseOpenIcon
          ? C.value
            ? e.collapseOpenIcon
            : e.collapseCloseIcon
          : c1
      ),
      m = j(() => c.level === 0),
      b = j(() => {
        var ue;
        const pe = (ue = e.teleported) != null ? ue : e.popperAppendToBody;
        return pe === void 0 ? m.value : pe;
      }),
      E = j(() =>
        l.props.collapse ? `${i.namespace.value}-zoom-in-left` : `${i.namespace.value}-zoom-in-top`
      ),
      P = j(() =>
        A.value === 'horizontal' && m.value
          ? ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start']
          : ['right-start', 'left-start', 'bottom-start', 'bottom-end', 'top-start', 'top-end']
      ),
      C = j(() => l.openedMenus.includes(e.index)),
      x = j(() => {
        let ue = !1;
        return (
          Object.values(u.value).forEach((pe) => {
            pe.active && (ue = !0);
          }),
          Object.values(f.value).forEach((pe) => {
            pe.active && (ue = !0);
          }),
          ue
        );
      }),
      T = j(() => l.props.backgroundColor || ''),
      M = j(() => l.props.activeTextColor || ''),
      I = j(() => l.props.textColor || ''),
      A = j(() => l.props.mode),
      O = lt({ index: e.index, indexPath: o, active: x }),
      N = lp(l.props, c.level + 1),
      H = j(() =>
        A.value !== 'horizontal'
          ? { color: I.value }
          : {
              borderBottomColor: x.value ? (l.props.activeTextColor ? M.value : '') : 'transparent',
              color: x.value ? M.value : I.value
            }
      ),
      ne = () => {
        var ue, pe, he;
        return (he =
          (pe = (ue = h.value) == null ? void 0 : ue.popperRef) == null
            ? void 0
            : pe.popperInstanceRef) == null
          ? void 0
          : he.destroy();
      },
      q = (ue) => {
        ue || ne();
      },
      B = () => {
        (l.props.menuTrigger === 'hover' && l.props.mode === 'horizontal') ||
          (l.props.collapse && l.props.mode === 'vertical') ||
          e.disabled ||
          l.handleSubMenuClick({ index: e.index, indexPath: o.value, active: x.value });
      },
      ee = (ue, pe = e.showTimeout) => {
        var he;
        ue.type !== 'focus' &&
          ((l.props.menuTrigger === 'click' && l.props.mode === 'horizontal') ||
            (!l.props.collapse && l.props.mode === 'vertical') ||
            e.disabled ||
            ((c.mouseInChild.value = !0),
            d == null || d(),
            ({ stop: d } = wc(() => {
              l.openMenu(e.index, o.value);
            }, pe)),
            b.value &&
              ((he = s.value.vnode.el) == null || he.dispatchEvent(new MouseEvent('mouseenter')))));
      },
      ye = (ue = !1) => {
        var pe, he;
        (l.props.menuTrigger === 'click' && l.props.mode === 'horizontal') ||
          (!l.props.collapse && l.props.mode === 'vertical') ||
          (d == null || d(),
          (c.mouseInChild.value = !1),
          ({ stop: d } = wc(() => !v.value && l.closeMenu(e.index, o.value), e.hideTimeout)),
          b.value &&
            ue &&
            ((pe = r.parent) == null ? void 0 : pe.type.name) === 'ElSubMenu' &&
            ((he = c.handleMouseleave) == null || he.call(c, !0)));
      };
    fe(
      () => l.props.collapse,
      (ue) => q(!!ue)
    );
    {
      const ue = (he) => {
          f.value[he.index] = he;
        },
        pe = (he) => {
          delete f.value[he.index];
        };
      et(`subMenu:${r.uid}`, {
        addSubMenu: ue,
        removeSubMenu: pe,
        handleMouseleave: ye,
        mouseInChild: v,
        level: c.level + 1
      });
    }
    return (
      n({ opened: C }),
      De(() => {
        l.addSubMenu(O), c.addSubMenu(O);
      }),
      Ye(() => {
        c.removeSubMenu(O), l.removeSubMenu(O);
      }),
      () => {
        var ue;
        const pe = [
            (ue = t.title) == null ? void 0 : ue.call(t),
            ge(
              ja,
              {
                class: a.e('icon-arrow'),
                style: {
                  transform: C.value
                    ? (e.expandCloseIcon && e.expandOpenIcon) ||
                      (e.collapseCloseIcon && e.collapseOpenIcon && l.props.collapse)
                      ? 'none'
                      : 'rotateZ(180deg)'
                    : 'none'
                }
              },
              { default: () => (_e(g.value) ? ge(r.appContext.components[g.value]) : ge(g.value)) }
            )
          ],
          he = l.isMenuPopup
            ? ge(
                sp,
                {
                  ref: h,
                  visible: C.value,
                  effect: 'light',
                  pure: !0,
                  offset: e.popperOffset,
                  showArrow: !1,
                  persistent: !0,
                  popperClass: e.popperClass,
                  placement: _.value,
                  teleported: b.value,
                  fallbackPlacements: P.value,
                  transition: E.value,
                  gpuAcceleration: !1
                },
                {
                  content: () => {
                    var Ue;
                    return ge(
                      'div',
                      {
                        class: [i.m(A.value), i.m('popup-container'), e.popperClass],
                        onMouseenter: (Qe) => ee(Qe, 100),
                        onMouseleave: () => ye(!0),
                        onFocus: (Qe) => ee(Qe, 100)
                      },
                      [
                        ge(
                          'ul',
                          { class: [i.b(), i.m('popup'), i.m(`popup-${_.value}`)], style: N.value },
                          [(Ue = t.default) == null ? void 0 : Ue.call(t)]
                        )
                      ]
                    );
                  },
                  default: () =>
                    ge(
                      'div',
                      {
                        class: a.e('title'),
                        style: [H.value, { backgroundColor: T.value }],
                        onClick: B
                      },
                      pe
                    )
                }
              )
            : ge($e, {}, [
                ge(
                  'div',
                  {
                    class: a.e('title'),
                    style: [H.value, { backgroundColor: T.value }],
                    ref: p,
                    onClick: B
                  },
                  pe
                ),
                ge(
                  BT,
                  {},
                  {
                    default: () => {
                      var Ue;
                      return ps(
                        ge('ul', { role: 'menu', class: [i.b(), i.m('inline')], style: N.value }, [
                          (Ue = t.default) == null ? void 0 : Ue.call(t)
                        ]),
                        [[ya, C.value]]
                      );
                    }
                  }
                )
              ]);
        return ge(
          'li',
          {
            class: [
              a.b(),
              a.is('active', x.value),
              a.is('opened', C.value),
              a.is('disabled', e.disabled)
            ],
            role: 'menuitem',
            ariaHaspopup: !0,
            ariaExpanded: C.value,
            onMouseenter: ee,
            onMouseleave: () => ye(!0),
            onFocus: ee
          },
          [he]
        );
      }
    );
  }
});
const eC = tt({
    mode: { type: String, values: ['horizontal', 'vertical'], default: 'vertical' },
    defaultActive: { type: String, default: '' },
    defaultOpeneds: { type: xe(Array), default: () => K1([]) },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
    popperEffect: { type: String, values: ['dark', 'light'], default: 'dark' }
  }),
  Js = (e) => Array.isArray(e) && e.every((t) => _e(t)),
  tC = {
    close: (e, t) => _e(e) && Js(t),
    open: (e, t) => _e(e) && Js(t),
    select: (e, t, n, r) => _e(e) && Js(t) && Pe(n) && (r === void 0 || r instanceof Promise)
  };
var nC = se({
  name: 'ElMenu',
  props: eC,
  emits: tC,
  setup(e, { emit: t, slots: n, expose: r }) {
    const o = ze(),
      s = o.appContext.config.globalProperties.$router,
      i = J(),
      a = Be('menu'),
      l = Be('sub-menu'),
      c = J(-1),
      u = J(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      f = J(e.defaultActive),
      d = J({}),
      v = J({}),
      p = j(() => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)),
      h = () => {
        const A = f.value && d.value[f.value];
        if (!A || e.mode === 'horizontal' || e.collapse) return;
        A.indexPath.forEach((N) => {
          const H = v.value[N];
          H && _(N, H.indexPath);
        });
      },
      _ = (A, O) => {
        u.value.includes(A) ||
          (e.uniqueOpened && (u.value = u.value.filter((N) => O.includes(N))),
          u.value.push(A),
          t('open', A, O));
      },
      g = (A) => {
        const O = u.value.indexOf(A);
        O !== -1 && u.value.splice(O, 1);
      },
      m = (A, O) => {
        g(A), t('close', A, O);
      },
      b = ({ index: A, indexPath: O }) => {
        u.value.includes(A) ? m(A, O) : _(A, O);
      },
      E = (A) => {
        (e.mode === 'horizontal' || e.collapse) && (u.value = []);
        const { index: O, indexPath: N } = A;
        if (!(Wr(O) || Wr(N)))
          if (e.router && s) {
            const H = A.route || O,
              ne = s.push(H).then((q) => (q || (f.value = O), q));
            t('select', O, N, { index: O, indexPath: N, route: H }, ne);
          } else (f.value = O), t('select', O, N, { index: O, indexPath: N });
      },
      P = (A) => {
        const O = d.value,
          N = O[A] || (f.value && O[f.value]) || O[e.defaultActive];
        N ? (f.value = N.index) : (f.value = A);
      },
      C = () => {
        var A, O;
        if (!i.value) return -1;
        const N = Array.from(
            (O = (A = i.value) == null ? void 0 : A.childNodes) != null ? O : []
          ).filter((ue) => ue.nodeName !== '#text' || ue.nodeValue),
          H = 64,
          ne = Number.parseInt(getComputedStyle(i.value).paddingLeft, 10),
          q = Number.parseInt(getComputedStyle(i.value).paddingRight, 10),
          B = i.value.clientWidth - ne - q;
        let ee = 0,
          ye = 0;
        return (
          N.forEach((ue, pe) => {
            (ee += ue.offsetWidth || 0), ee <= B - H && (ye = pe + 1);
          }),
          ye === N.length ? -1 : ye
        );
      },
      x = (A, O = 33.34) => {
        let N;
        return () => {
          N && clearTimeout(N),
            (N = setTimeout(() => {
              A();
            }, O));
        };
      };
    let T = !0;
    const M = () => {
      const A = () => {
        (c.value = -1),
          yt(() => {
            c.value = C();
          });
      };
      T ? A() : x(A)(), (T = !1);
    };
    fe(
      () => e.defaultActive,
      (A) => {
        d.value[A] || (f.value = ''), P(A);
      }
    ),
      fe(
        () => e.collapse,
        (A) => {
          A && (u.value = []);
        }
      ),
      fe(d.value, h);
    let I;
    la(() => {
      e.mode === 'horizontal' && e.ellipsis ? (I = Db(i, M).stop) : I == null || I();
    });
    {
      const A = (ne) => {
          v.value[ne.index] = ne;
        },
        O = (ne) => {
          delete v.value[ne.index];
        };
      et(
        'rootMenu',
        lt({
          props: e,
          openedMenus: u,
          items: d,
          subMenus: v,
          activeIndex: f,
          isMenuPopup: p,
          addMenuItem: (ne) => {
            d.value[ne.index] = ne;
          },
          removeMenuItem: (ne) => {
            delete d.value[ne.index];
          },
          addSubMenu: A,
          removeSubMenu: O,
          openMenu: _,
          closeMenu: m,
          handleMenuItemClick: E,
          handleSubMenuClick: b
        })
      ),
        et(`subMenu:${o.uid}`, { addSubMenu: A, removeSubMenu: O, mouseInChild: J(!1), level: 0 });
    }
    return (
      De(() => {
        e.mode === 'horizontal' && new QT(o.vnode.el, a.namespace.value);
      }),
      r({
        open: (O) => {
          const { indexPath: N } = v.value[O];
          N.forEach((H) => _(H, N));
        },
        close: g,
        handleResize: M
      }),
      () => {
        var A, O;
        let N = (O = (A = n.default) == null ? void 0 : A.call(n)) != null ? O : [];
        const H = [];
        if (e.mode === 'horizontal' && i.value) {
          const B = $o(N),
            ee = c.value === -1 ? B : B.slice(0, c.value),
            ye = c.value === -1 ? [] : B.slice(c.value);
          ye != null &&
            ye.length &&
            e.ellipsis &&
            ((N = ee),
            H.push(
              ge(
                Ka,
                { index: 'sub-menu-more', class: l.e('hide-arrow') },
                {
                  title: () => ge(ja, { class: l.e('icon-more') }, { default: () => ge(I1) }),
                  default: () => ye
                }
              )
            ));
        }
        const ne = lp(e, 0),
          q = ge(
            'ul',
            {
              key: String(e.collapse),
              role: 'menubar',
              ref: i,
              style: ne.value,
              class: { [a.b()]: !0, [a.m(e.mode)]: !0, [a.m('collapse')]: e.collapse }
            },
            [...N, ...H]
          );
        return e.collapseTransition && e.mode === 'vertical' ? ge(YT, () => q) : q;
      }
    );
  }
});
const rC = tt({
    index: { type: xe([String, null]), default: null },
    route: { type: xe([String, Object]) },
    disabled: Boolean
  }),
  oC = { click: (e) => _e(e.index) && Array.isArray(e.indexPath) },
  Gs = 'ElMenuItem',
  sC = se({
    name: Gs,
    components: { ElTooltip: sp },
    props: rC,
    emits: oC,
    setup(e, { emit: t }) {
      const n = ze(),
        r = Ae('rootMenu'),
        o = Be('menu'),
        s = Be('menu-item');
      r || es(Gs, 'can not inject root menu');
      const { parentMenu: i, indexPath: a } = ap(n, xt(e, 'index')),
        l = Ae(`subMenu:${i.value.uid}`);
      l || es(Gs, 'can not inject sub menu');
      const c = j(() => e.index === r.activeIndex),
        u = lt({ index: e.index, indexPath: a, active: c }),
        f = () => {
          e.disabled ||
            (r.handleMenuItemClick({ index: e.index, indexPath: a.value, route: e.route }),
            t('click', u));
        };
      return (
        De(() => {
          l.addSubMenu(u), r.addMenuItem(u);
        }),
        Ye(() => {
          l.removeSubMenu(u), r.removeMenuItem(u);
        }),
        { parentMenu: i, rootMenu: r, active: c, nsMenu: o, nsMenuItem: s, handleClick: f }
      );
    }
  });
function iC(e, t, n, r, o, s) {
  const i = vf('el-tooltip');
  return (
    Y(),
    we(
      'li',
      {
        class: Fe([
          e.nsMenuItem.b(),
          e.nsMenuItem.is('active', e.active),
          e.nsMenuItem.is('disabled', e.disabled)
        ]),
        role: 'menuitem',
        tabindex: '-1',
        onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
      },
      [
        e.parentMenu.type.name === 'ElMenu' && e.rootMenu.props.collapse && e.$slots.title
          ? (Y(),
            Ie(
              i,
              {
                key: 0,
                effect: e.rootMenu.props.popperEffect,
                placement: 'right',
                'fallback-placements': ['left'],
                persistent: ''
              },
              {
                content: Re(() => [He(e.$slots, 'title')]),
                default: Re(() => [
                  ke(
                    'div',
                    { class: Fe(e.nsMenu.be('tooltip', 'trigger')) },
                    [He(e.$slots, 'default')],
                    2
                  )
                ]),
                _: 3
              },
              8,
              ['effect']
            ))
          : (Y(), we($e, { key: 1 }, [He(e.$slots, 'default'), He(e.$slots, 'title')], 64))
      ],
      2
    )
  );
}
var cp = nt(sC, [
  ['render', iC],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue'
  ]
]);
const aC = { title: String },
  lC = 'ElMenuItemGroup',
  cC = se({
    name: lC,
    props: aC,
    setup() {
      return { ns: Be('menu-item-group') };
    }
  });
function uC(e, t, n, r, o, s) {
  return (
    Y(),
    we(
      'li',
      { class: Fe(e.ns.b()) },
      [
        ke(
          'div',
          { class: Fe(e.ns.e('title')) },
          [
            e.$slots.title
              ? He(e.$slots, 'title', { key: 1 })
              : (Y(), we($e, { key: 0 }, [ar(Wn(e.title), 1)], 64))
          ],
          2
        ),
        ke('ul', null, [He(e.$slots, 'default')])
      ],
      2
    )
  );
}
var up = nt(cC, [
  ['render', uC],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue'
  ]
]);
const fC = fr(nC, { MenuItem: cp, MenuItemGroup: up, SubMenu: Ka }),
  fp = Oa(cp);
Oa(up);
const dC = Oa(Ka),
  pC = qt((e) => {
    e.vueApp.provide(Vd, { prefix: 1024, current: 0 });
  }),
  hC = qt({
    name: 'nuxt:chunk-reload',
    setup(e) {
      const t = dn(),
        n = fn(),
        r = new Set();
      t.beforeEach(() => {
        r.clear();
      }),
        e.hook('app:chunkError', ({ error: o }) => {
          r.add(o);
        }),
        t.onError((o, s) => {
          if (r.has(o)) {
            const a =
              'href' in s && s.href.startsWith('#')
                ? n.app.baseURL + s.href
                : ur(n.app.baseURL, s.fullPath);
            wb({ path: a, persistState: !0 });
          }
        });
    }
  }),
  gC = qt({
    name: 'nuxt:payload',
    setup(e) {
      _b() &&
        (e.hooks.hook('link:prefetch', async (t) => {
          eo(t).protocol || (await yc(t));
        }),
        dn().beforeResolve(async (t, n) => {
          if (t.path === n.path) return;
          const r = await yc(t.path);
          r && Object.assign(e.static.data, r.data);
        }));
    }
  }),
  mC = [Py, v0, L_, N_, Ab, pC, hC, gC];
function Wa(e) {
  return JSON.stringify(e, vC);
}
function vC(e, t) {
  return t instanceof RegExp ? `--REGEX ${t.toString()}` : t;
}
const dp = (e) => {
    let t = Wa(e);
    return (
      (t = typeof Buffer < 'u' ? Buffer.from(t).toString('base64') : btoa(t)),
      (t = t.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')),
      (t.match(/.{1,100}/g) || []).join('/')
    );
  },
  yC = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'];
function Mi(e, t) {
  return e.type === t || (typeof e.type == 'object' && e.type.tag === t) || e.tag === t;
}
function pp(e) {
  return Mi(e, 'text') || typeof e.children == 'string';
}
function hp(e) {
  var t;
  return Array.isArray(e.children) || typeof e.children == 'string'
    ? e.children
    : typeof ((t = e.children) == null ? void 0 : t.default) == 'function'
    ? e.children.default()
    : [];
}
function $i(e) {
  if (!e) return '';
  if (Array.isArray(e)) return e.map($i).join('');
  if (pp(e)) return e.children || e.value;
  const t = hp(e);
  return Array.isArray(t) ? t.map($i).join('') : '';
}
function Va(e, t = ['p']) {
  if (Array.isArray(e)) return e.flatMap((r) => Va(r, t));
  let n = e;
  return (
    t.some((r) => r === '*' || Mi(e, r)) &&
      ((n = hp(e) || e), !Array.isArray(n) && yC.some((r) => Mi(e, r)) && (n = [n])),
    n
  );
}
function gp(e, t = ['p']) {
  return (
    (e = Array.isArray(e) ? e : [e]),
    t.length
      ? e
          .flatMap((n) => gp(Va(n, [t[0]]), t.slice(1)))
          .filter((n) => !(pp(n) && $i(n).trim() === ''))
      : e
  );
}
const qa = () => ({
    isEnabled: () => {
      const r = Ur().query;
      return Object.prototype.hasOwnProperty.call(r, 'preview') && !r.preview
        ? !1
        : !!(r.preview || Ds('previewToken').value || sessionStorage.getItem('previewToken'));
    },
    getPreviewToken: () =>
      Ds('previewToken').value || sessionStorage.getItem('previewToken') || void 0,
    setPreviewToken: (r) => {
      (Ds('previewToken').value = r),
        (Ur().query.preview = r || ''),
        r ? sessionStorage.setItem('previewToken', r) : sessionStorage.removeItem('previewToken'),
        window.location.reload();
    }
  }),
  ns = (e) => qf(e, fn().public.content.api.baseURL),
  wS = () => ({ unwrap: Va, flatUnwrap: gp }),
  _C = () => {
    throw (
      (console.warn('useContent is only accessible when you are using `documentDriven` mode.'),
      console.warn(
        'Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven'
      ),
      new Error('useContent is only accessible when you are using `documentDriven` mode.'))
    );
  },
  mp = () => {
    const { experimental: e } = fn().public.content;
    return e.clientDB ? !0 : qa().isEnabled();
  },
  ru = (e, t) => t.split('.').reduce((n, r) => n && n[r], e),
  vp = (e, t) =>
    Object.keys(e)
      .filter(t)
      .reduce((n, r) => Object.assign(n, { [r]: e[r] }), {}),
  ES = (e) => (t) => Array.isArray(t) ? t.map((n) => e(n)) : e(t),
  yp = (e) => {
    const t = [],
      n = [];
    for (const r of e) ['$', '_'].includes(r) ? t.push(r) : n.push(r);
    return { prefixes: t, properties: n };
  },
  TS =
    (e = []) =>
    (t) => {
      if (e.length === 0 || !t) return t;
      const { prefixes: n, properties: r } = yp(e);
      return vp(t, (o) => !r.includes(o) && !n.includes(o[0]));
    },
  CS =
    (e = []) =>
    (t) => {
      if (e.length === 0 || !t) return t;
      const { prefixes: n, properties: r } = yp(e);
      return vp(t, (o) => r.includes(o) || n.includes(o[0]));
    },
  xS = (e, t) => {
    const n = new Intl.Collator(t.$locale, {
        numeric: t.$numeric,
        caseFirst: t.$caseFirst,
        sensitivity: t.$sensitivity
      }),
      r = Object.keys(t).filter((o) => !o.startsWith('$'));
    for (const o of r)
      e = e.sort((s, i) => {
        const a = [ru(s, o), ru(i, o)].map((l) => {
          if (l !== null) return l instanceof Date ? l.toISOString() : l;
        });
        return t[o] === -1 && a.reverse(), n.compare(a[0], a[1]);
      });
    return e;
  },
  PS = (e, t = 'Expected an array') => {
    if (!Array.isArray(e)) throw new TypeError(t);
  },
  jt = (e) => (Array.isArray(e) ? e : e ? [e] : []),
  bC = ['sort', 'where', 'only', 'without'],
  wC = (e, t) => {
    const n = { ...t };
    for (const s of bC) n[s] && (n[s] = jt(n[s]));
    const r =
        (s, i = (a) => a) =>
        (...a) => ((n[s] = i(...a)), o),
      o = {
        params: () => ({
          ...n,
          ...(n.where ? { where: [...jt(n.where)] } : {}),
          ...(n.sort ? { sort: [...jt(n.sort)] } : {})
        }),
        only: r('only', jt),
        without: r('without', jt),
        where: r('where', (s) => [...jt(n.where), ...jt(s)]),
        sort: r('sort', (s) => [...jt(n.sort), ...jt(s)]),
        limit: r('limit', (s) => parseInt(String(s), 10)),
        skip: r('skip', (s) => parseInt(String(s), 10)),
        find: () => e(o),
        findOne: () => ((n.first = !0), e(o)),
        findSurround: (s, i) => ((n.surround = { query: s, ...i }), e(o)),
        locale: (s) => o.where({ _locale: s })
      };
    return o;
  },
  EC = () => async (e) => {
    const { content: t } = fn().public,
      n = e.params(),
      r = t.experimental.stripQueryParameters
        ? ns(`/query/${`${Kr(n)}.${t.integrity}`}/${dp(n)}.json`)
        : ns(`/query/${Kr(n)}.${t.integrity}.json`);
    if (mp())
      return (
        await ie(
          () => import('./client-db.491a3b48.js'),
          ['./client-db.491a3b48.js', './index.a6ef77ff.js'],
          import.meta.url
        ).then((i) => i.useContentDatabase())
      ).fetch(e);
    const o = await $fetch(r, {
      method: 'GET',
      responseType: 'json',
      params: t.experimental.stripQueryParameters
        ? void 0
        : { _params: Wa(n), previewToken: qa().getPreviewToken() }
    });
    if (typeof o == 'string' && o.startsWith('<!DOCTYPE html>')) throw new Error('Not found');
    return o;
  };
function _p(e, ...t) {
  const { content: n } = fn().public,
    r = wC(EC(), typeof e != 'string' ? e : {});
  let o;
  typeof e == 'string' && (o = ev(ur(e, ...t)));
  const s = r.params;
  return (
    (r.params = () => {
      var a, l, c;
      const i = s();
      return (
        o &&
          ((i.where = i.where || []),
          i.first && (i.where || []).length === 0
            ? i.where.push({ _path: ms(o) })
            : i.where.push({ _path: new RegExp(`^${o.replace(/[-[\]{}()*+.,^$\s/]/g, '\\$&')}`) })),
        ((a = i.sort) != null && a.length) || (i.sort = [{ _file: 1, $numeric: !0 }]),
        n.locales.length &&
          (((c = (l = i.where) == null ? void 0 : l.find((f) => f._locale)) != null && c._locale) ||
            ((i.where = i.where || []), i.where.push({ _locale: n.defaultLocale }))),
        i
      );
    }),
    r
  );
}
const bp = async (e) => {
    const { content: t } = fn().public;
    typeof (e == null ? void 0 : e.params) != 'function' && (e = _p(e));
    const n = e.params(),
      r = t.experimental.stripQueryParameters
        ? ns(`/navigation/${`${Kr(n)}.${t.integrity}`}/${dp(n)}.json`)
        : ns(`/navigation/${Kr(n)}.${t.integrity}.json`);
    if (mp())
      return (
        await ie(
          () => import('./client-db.491a3b48.js'),
          ['./client-db.491a3b48.js', './index.a6ef77ff.js'],
          import.meta.url
        ).then((i) => i.generateNavigation)
      )(n);
    const o = await $fetch(r, {
      method: 'GET',
      responseType: 'json',
      params: t.experimental.stripQueryParameters
        ? void 0
        : { _params: Wa(n), previewToken: qa().getPreviewToken() }
    });
    if (typeof o == 'string' && o.startsWith('<!DOCTYPE html>')) throw new Error('Not found');
    return o;
  },
  wp = se({
    name: 'ContentNavigation',
    props: { query: { type: Object, required: !1, default: void 0 } },
    async setup(e) {
      const { query: t } = Vh(e),
        n = j(() => {
          var o;
          return typeof ((o = t.value) == null ? void 0 : o.params) == 'function'
            ? t.value.params()
            : t.value;
        });
      if (!n.value && Ea('dd-navigation').value) {
        const { navigation: o } = _C();
        return { navigation: o };
      }
      const { data: r } = await H_(`content-navigation-${Kr(n.value)}`, () => bp(n.value));
      return { navigation: r };
    },
    render(e) {
      const t = nm(),
        { navigation: n } = e,
        r = (i) => ge(_s, { to: i._path }, () => i.title),
        o = (i, a) =>
          ge(
            'ul',
            a ? { 'data-level': a } : null,
            i.map((l) =>
              l.children ? ge('li', null, [r(l), o(l.children, a + 1)]) : ge('li', null, r(l))
            )
          ),
        s = (i) => o(i, 0);
      return t != null && t.default ? t.default({ navigation: n, ...this.$attrs }) : s(n);
    }
  }),
  TC = Object.freeze(
    Object.defineProperty({ __proto__: null, default: wp }, Symbol.toStringTag, { value: 'Module' })
  ),
  CC = { class: 'nav' },
  xC = { class: 'nav-list' },
  PC = se({
    __name: 'HeaderNav',
    setup(e) {
      const t = Ca(),
        n = Ur(),
        r = t.nav.excludeTopNavPath || [];
      function o(a) {
        return a.filter((l) => !r.includes(l._path));
      }
      function s(a) {
        const { _path: l } = a;
        return n.path.match(l);
      }
      function i(a) {
        return a.children ? i(a.children[0]) : a._path;
      }
      return (a, l) => {
        const c = _s,
          u = wp;
        return (
          Y(),
          we('nav', CC, [
            ae(u, null, {
              default: Re(({ navigation: f }) => [
                ke('ul', xC, [
                  (Y(!0),
                  we(
                    $e,
                    null,
                    pa(
                      o(f),
                      (d) => (
                        Y(),
                        we(
                          'li',
                          { class: Fe([{ active: s(d) }, 'nav-item']), key: d._path },
                          [
                            ae(
                              c,
                              { to: i(d) },
                              { default: Re(() => [ar(Wn(d.title), 1)]), _: 2 },
                              1032,
                              ['to']
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ]),
              _: 1
            })
          ])
        );
      };
    }
  });
const dr = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  Ep = dr(PC, [['__scopeId', 'data-v-7b359261']]),
  SC = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Ep }, Symbol.toStringTag, { value: 'Module' })
  ),
  OC = (e) => (ng('data-v-d05f474b'), (e = e()), rg(), e),
  kC = ['width', 'height'],
  AC = OC(() =>
    ke(
      'path',
      {
        d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z'
      },
      null,
      -1
    )
  ),
  IC = [AC],
  RC = se({
    __name: 'Dark',
    props: { width: null, height: null },
    setup(e) {
      return (t, n) => (
        Y(),
        we(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: e.width,
            height: e.height,
            'aria-hidden': 'true',
            focusable: 'false',
            viewBox: '0 0 24 24',
            class: 'icon'
          },
          IC,
          8,
          kC
        )
      );
    }
  });
const Tp = dr(RC, [['__scopeId', 'data-v-d05f474b']]),
  MC = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Tp }, Symbol.toStringTag, { value: 'Module' })
  ),
  $C = ['width', 'height'],
  LC = Qg(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z" data-v-8b73f5d5></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z" data-v-8b73f5d5></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z" data-v-8b73f5d5></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z" data-v-8b73f5d5></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z" data-v-8b73f5d5></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z" data-v-8b73f5d5></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z" data-v-8b73f5d5></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z" data-v-8b73f5d5></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z" data-v-8b73f5d5></path>',
    9
  ),
  NC = [LC],
  FC = se({
    __name: 'Light',
    props: { width: null, height: null },
    setup(e) {
      return (t, n) => (
        Y(),
        we(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: e.width,
            height: e.height,
            'aria-hidden': 'true',
            focusable: 'false',
            viewBox: '0 0 24 24',
            class: 'icon'
          },
          NC,
          8,
          $C
        )
      );
    }
  });
const Cp = dr(FC, [['__scopeId', 'data-v-8b73f5d5']]),
  HC = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Cp }, Symbol.toStringTag, { value: 'Module' })
  );
function Qa(e) {
  return Ji() ? (Hu(e), !0) : !1;
}
function oo(e) {
  return typeof e == 'function' ? e() : S(e);
}
const Ja = typeof window < 'u',
  xp = () => {};
function jC(e, t) {
  function n(...r) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
        .then(o)
        .catch(s);
    });
  }
  return n;
}
const Pp = (e) => e();
function BC(e = Pp) {
  const t = J(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...s) => {
    t.value && e(...s);
  };
  return { isActive: In(t), pause: n, resume: r, eventFilter: o };
}
function Sp(...e) {
  if (e.length !== 1) return xt(...e);
  const t = e[0];
  return typeof t == 'function' ? In(Wh(() => ({ get: t, set: xp }))) : J(t);
}
function DC(e, t = !0) {
  ze() ? De(e) : t ? e() : yt(e);
}
function zC(e, t, n = {}) {
  const { immediate: r = !0 } = n,
    o = J(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), (s = null));
  }
  function a() {
    (o.value = !1), i();
  }
  function l(...c) {
    i(),
      (o.value = !0),
      (s = setTimeout(() => {
        (o.value = !1), (s = null), e(...c);
      }, oo(t)));
  }
  return r && ((o.value = !0), Ja && l()), Qa(a), { isPending: In(o), start: l, stop: a };
}
var ou = Object.getOwnPropertySymbols,
  UC = Object.prototype.hasOwnProperty,
  KC = Object.prototype.propertyIsEnumerable,
  WC = (e, t) => {
    var n = {};
    for (var r in e) UC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ou) for (var r of ou(e)) t.indexOf(r) < 0 && KC.call(e, r) && (n[r] = e[r]);
    return n;
  };
function VC(e, t, n = {}) {
  const r = n,
    { eventFilter: o = Pp } = r,
    s = WC(r, ['eventFilter']);
  return fe(e, jC(o, t), s);
}
var qC = Object.defineProperty,
  QC = Object.defineProperties,
  JC = Object.getOwnPropertyDescriptors,
  rs = Object.getOwnPropertySymbols,
  Op = Object.prototype.hasOwnProperty,
  kp = Object.prototype.propertyIsEnumerable,
  su = (e, t, n) =>
    t in e ? qC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  GC = (e, t) => {
    for (var n in t || (t = {})) Op.call(t, n) && su(e, n, t[n]);
    if (rs) for (var n of rs(t)) kp.call(t, n) && su(e, n, t[n]);
    return e;
  },
  YC = (e, t) => QC(e, JC(t)),
  ZC = (e, t) => {
    var n = {};
    for (var r in e) Op.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && rs) for (var r of rs(e)) t.indexOf(r) < 0 && kp.call(e, r) && (n[r] = e[r]);
    return n;
  };
function XC(e, t, n = {}) {
  const r = n,
    { eventFilter: o } = r,
    s = ZC(r, ['eventFilter']),
    { eventFilter: i, pause: a, resume: l, isActive: c } = BC(o);
  return { stop: VC(e, t, YC(GC({}, s), { eventFilter: i })), pause: a, resume: l, isActive: c };
}
function Ap(e) {
  var t;
  const n = oo(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Qr = Ja ? window : void 0,
  ex = Ja ? window.navigator : void 0;
function Li(...e) {
  let t, n, r, o;
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, r, o] = e), (t = Qr))
      : ([t, n, r, o] = e),
    !t)
  )
    return xp;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [],
    i = () => {
      s.forEach((u) => u()), (s.length = 0);
    },
    a = (u, f, d, v) => (u.addEventListener(f, d, v), () => u.removeEventListener(f, d, v)),
    l = fe(
      () => [Ap(t), oo(o)],
      ([u, f]) => {
        i(), u && s.push(...n.flatMap((d) => r.map((v) => a(u, d, v, f))));
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      l(), i();
    };
  return Qa(c), c;
}
function tx() {
  const e = J(!1);
  return (
    ze() &&
      De(() => {
        e.value = !0;
      }),
    e
  );
}
function Ip(e) {
  const t = tx();
  return j(() => (t.value, !!e()));
}
function nx(e, t = {}) {
  const { window: n = Qr } = t,
    r = Ip(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function');
  let o;
  const s = J(!1),
    i = () => {
      o && ('removeEventListener' in o ? o.removeEventListener('change', a) : o.removeListener(a));
    },
    a = () => {
      r.value &&
        (i(),
        (o = n.matchMedia(Sp(e).value)),
        (s.value = !!(o != null && o.matches)),
        o && ('addEventListener' in o ? o.addEventListener('change', a) : o.addListener(a)));
    };
  return la(a), Qa(() => i()), s;
}
function SS(e = {}) {
  const { navigator: t = ex, read: n = !1, source: r, copiedDuring: o = 1500, legacy: s = !1 } = e,
    i = ['copy', 'cut'],
    a = Ip(() => t && 'clipboard' in t),
    l = j(() => a.value || s),
    c = J(''),
    u = J(!1),
    f = zC(() => (u.value = !1), o);
  function d() {
    a.value
      ? t.clipboard.readText().then((_) => {
          c.value = _;
        })
      : (c.value = h());
  }
  if (l.value && n) for (const _ of i) Li(_, d);
  async function v(_ = oo(r)) {
    l.value &&
      _ != null &&
      (a.value ? await t.clipboard.writeText(_) : p(_), (c.value = _), (u.value = !0), f.start());
  }
  function p(_) {
    const g = document.createElement('textarea');
    (g.value = _ ?? ''),
      (g.style.position = 'absolute'),
      (g.style.opacity = '0'),
      document.body.appendChild(g),
      g.select(),
      document.execCommand('copy'),
      g.remove();
  }
  function h() {
    var _, g, m;
    return (m =
      (g =
        (_ = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : _.call(document)) == null
        ? void 0
        : g.toString()) != null
      ? m
      : '';
  }
  return { isSupported: l, text: c, copied: u, copy: v };
}
const Oo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  ko = '__vueuse_ssr_handlers__',
  rx = ox();
function ox() {
  return ko in Oo || (Oo[ko] = Oo[ko] || {}), Oo[ko];
}
function Rp(e, t) {
  return rx[e] || t;
}
function sx(e) {
  return e == null
    ? 'any'
    : e instanceof Set
    ? 'set'
    : e instanceof Map
    ? 'map'
    : e instanceof Date
    ? 'date'
    : typeof e == 'boolean'
    ? 'boolean'
    : typeof e == 'string'
    ? 'string'
    : typeof e == 'object'
    ? 'object'
    : Number.isNaN(e)
    ? 'any'
    : 'number';
}
var ix = Object.defineProperty,
  iu = Object.getOwnPropertySymbols,
  ax = Object.prototype.hasOwnProperty,
  lx = Object.prototype.propertyIsEnumerable,
  au = (e, t, n) =>
    t in e ? ix(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  lu = (e, t) => {
    for (var n in t || (t = {})) ax.call(t, n) && au(e, n, t[n]);
    if (iu) for (var n of iu(t)) lx.call(t, n) && au(e, n, t[n]);
    return e;
  };
const cx = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries()))
    },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() }
  },
  cu = 'vueuse-storage';
function ux(e, t, n, r = {}) {
  var o;
  const {
      flush: s = 'pre',
      deep: i = !0,
      listenToStorageChanges: a = !0,
      writeDefaults: l = !0,
      mergeDefaults: c = !1,
      shallow: u,
      window: f = Qr,
      eventFilter: d,
      onError: v = (T) => {
        console.error(T);
      }
    } = r,
    p = (u ? Fr : J)(t);
  if (!n)
    try {
      n = Rp('getDefaultStorage', () => {
        var T;
        return (T = Qr) == null ? void 0 : T.localStorage;
      })();
    } catch (T) {
      v(T);
    }
  if (!n) return p;
  const h = oo(t),
    _ = sx(h),
    g = (o = r.serializer) != null ? o : cx[_],
    { pause: m, resume: b } = XC(p, () => E(p.value), { flush: s, deep: i, eventFilter: d });
  return f && a && (Li(f, 'storage', x), Li(f, cu, C)), x(), p;
  function E(T) {
    try {
      if (T == null) n.removeItem(e);
      else {
        const M = g.write(T),
          I = n.getItem(e);
        I !== M &&
          (n.setItem(e, M),
          f &&
            f.dispatchEvent(
              new CustomEvent(cu, { detail: { key: e, oldValue: I, newValue: M, storageArea: n } })
            ));
      }
    } catch (M) {
      v(M);
    }
  }
  function P(T) {
    const M = T ? T.newValue : n.getItem(e);
    if (M == null) return l && h !== null && n.setItem(e, g.write(h)), h;
    if (!T && c) {
      const I = g.read(M);
      return typeof c == 'function'
        ? c(I, h)
        : _ === 'object' && !Array.isArray(I)
        ? lu(lu({}, h), I)
        : I;
    } else return typeof M != 'string' ? M : g.read(M);
  }
  function C(T) {
    x(T.detail);
  }
  function x(T) {
    if (!(T && T.storageArea !== n)) {
      if (T && T.key == null) {
        p.value = h;
        return;
      }
      if (!(T && T.key !== e)) {
        m();
        try {
          p.value = P(T);
        } catch (M) {
          v(M);
        } finally {
          T ? yt(b) : b();
        }
      }
    }
  }
}
function fx(e) {
  return nx('(prefers-color-scheme: dark)', e);
}
var dx = Object.defineProperty,
  uu = Object.getOwnPropertySymbols,
  px = Object.prototype.hasOwnProperty,
  hx = Object.prototype.propertyIsEnumerable,
  fu = (e, t, n) =>
    t in e ? dx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  gx = (e, t) => {
    for (var n in t || (t = {})) px.call(t, n) && fu(e, n, t[n]);
    if (uu) for (var n of uu(t)) hx.call(t, n) && fu(e, n, t[n]);
    return e;
  };
function mx(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: r = 'auto',
      window: o = Qr,
      storage: s,
      storageKey: i = 'vueuse-color-scheme',
      listenToStorageChanges: a = !0,
      storageRef: l,
      emitAuto: c,
      disableTransition: u = !0
    } = e,
    f = gx({ auto: '', light: 'light', dark: 'dark' }, e.modes || {}),
    d = fx({ window: o }),
    v = j(() => (d.value ? 'dark' : 'light')),
    p = l || (i == null ? Sp(r) : ux(i, r, s, { window: o, listenToStorageChanges: a })),
    h = j(() => (p.value === 'auto' ? v.value : p.value)),
    _ = Rp('updateHTMLAttrs', (E, P, C) => {
      const x = typeof E == 'string' ? (o == null ? void 0 : o.document.querySelector(E)) : Ap(E);
      if (!x) return;
      let T;
      if (
        (u &&
          ((T = o.document.createElement('style')),
          T.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          o.document.head.appendChild(T)),
        P === 'class')
      ) {
        const M = C.split(/\s/g);
        Object.values(f)
          .flatMap((I) => (I || '').split(/\s/g))
          .filter(Boolean)
          .forEach((I) => {
            M.includes(I) ? x.classList.add(I) : x.classList.remove(I);
          });
      } else x.setAttribute(P, C);
      u && (o.getComputedStyle(T).opacity, document.head.removeChild(T));
    });
  function g(E) {
    var P;
    _(t, n, (P = f[E]) != null ? P : E);
  }
  function m(E) {
    e.onChanged ? e.onChanged(E, g) : g(E);
  }
  fe(h, m, { flush: 'post', immediate: !0 }), DC(() => m(h.value));
  const b = j({
    get() {
      return c ? p.value : h.value;
    },
    set(E) {
      p.value = E;
    }
  });
  try {
    return Object.assign(b, { store: p, system: v, state: h });
  } catch {
    return b;
  }
}
var vx = Object.defineProperty,
  yx = Object.defineProperties,
  _x = Object.getOwnPropertyDescriptors,
  du = Object.getOwnPropertySymbols,
  bx = Object.prototype.hasOwnProperty,
  wx = Object.prototype.propertyIsEnumerable,
  pu = (e, t, n) =>
    t in e ? vx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ex = (e, t) => {
    for (var n in t || (t = {})) bx.call(t, n) && pu(e, n, t[n]);
    if (du) for (var n of du(t)) wx.call(t, n) && pu(e, n, t[n]);
    return e;
  },
  Tx = (e, t) => yx(e, _x(t));
function Cx(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '' } = e,
    r = mx(
      Tx(Ex({}, e), {
        onChanged: (s, i) => {
          var a;
          e.onChanged ? (a = e.onChanged) == null || a.call(e, s === 'dark', i, s) : i(s);
        },
        modes: { dark: t, light: n }
      })
    );
  return j({
    get() {
      return r.value === 'dark';
    },
    set(s) {
      const i = s ? 'dark' : 'light';
      r.system.value === i ? (r.value = 'auto') : (r.value = i);
    }
  });
}
const xx = { class: 'theme-change' },
  Px = ['aria-checked'],
  Sx = { class: 'switch__action' },
  Ox = { class: 'switch__icon' },
  kx = se({
    __name: 'ThemeChange',
    setup(e) {
      const t = Cx();
      function n() {
        t.value = !t.value;
      }
      return (r, o) => {
        const s = Tp,
          i = Cp;
        return (
          Y(),
          we('div', xx, [
            ke(
              'button',
              {
                class: Fe(['switch', { k: S(t) }]),
                onClick: n,
                role: 'switch',
                'aria-label': '切换暗色主题',
                'aria-checked': S(t)
              },
              [
                ke('div', Sx, [
                  ke('div', Ox, [
                    ae(s, { class: 'dark-icon icon', width: '1em', height: '1em' }),
                    ae(i, { class: 'light-icon icon', width: '1em', height: '1em' })
                  ])
                ])
              ],
              10,
              Px
            )
          ])
        );
      };
    }
  });
const Ax = dr(kx, [['__scopeId', 'data-v-eea72278']]),
  Mp = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  $p = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  Ga = Object.freeze({ ...Mp, ...$p });
Object.freeze({ ...Ga, body: '', hidden: !1 });
({ ...Mp });
const Lp = Object.freeze({ width: null, height: null }),
  Np = Object.freeze({ ...Lp, ...$p });
function Ix(e, t) {
  const n = { ...e };
  for (const r in t) {
    const o = t[r],
      s = typeof o;
    r in Lp
      ? (o === null || (o && (s === 'string' || s === 'number'))) && (n[r] = o)
      : s === typeof n[r] && (n[r] = r === 'rotate' ? o % 4 : o);
  }
  return n;
}
const Rx = /[\s,]+/;
function Mx(e, t) {
  t.split(Rx).forEach((n) => {
    switch (n.trim()) {
      case 'horizontal':
        e.hFlip = !0;
        break;
      case 'vertical':
        e.vFlip = !0;
        break;
    }
  });
}
function $x(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, '');
  function r(o) {
    for (; o < 0; ) o += 4;
    return o % 4;
  }
  if (n === '') {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case '%':
        o = 25;
        break;
      case 'deg':
        o = 90;
    }
    if (o) {
      let s = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(s) ? 0 : ((s = s / o), s % 1 === 0 ? r(s) : 0);
    }
  }
  return t;
}
const Lx = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  Nx = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function hu(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n;
  if (typeof e != 'string') return e;
  const r = e.split(Lx);
  if (r === null || !r.length) return e;
  const o = [];
  let s = r.shift(),
    i = Nx.test(s);
  for (;;) {
    if (i) {
      const a = parseFloat(s);
      isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n);
    } else o.push(s);
    if (((s = r.shift()), s === void 0)) return o.join('');
    i = !i;
  }
}
const Fx = (e) => e === 'unset' || e === 'undefined' || e === 'none';
function Hx(e, t) {
  const n = { ...Ga, ...e },
    r = { ...Np, ...t },
    o = { left: n.left, top: n.top, width: n.width, height: n.height };
  let s = n.body;
  [n, r].forEach((p) => {
    const h = [],
      _ = p.hFlip,
      g = p.vFlip;
    let m = p.rotate;
    _
      ? g
        ? (m += 2)
        : (h.push(
            'translate(' + (o.width + o.left).toString() + ' ' + (0 - o.top).toString() + ')'
          ),
          h.push('scale(-1 1)'),
          (o.top = o.left = 0))
      : g &&
        (h.push('translate(' + (0 - o.left).toString() + ' ' + (o.height + o.top).toString() + ')'),
        h.push('scale(1 -1)'),
        (o.top = o.left = 0));
    let b;
    switch ((m < 0 && (m -= Math.floor(m / 4) * 4), (m = m % 4), m)) {
      case 1:
        (b = o.height / 2 + o.top),
          h.unshift('rotate(90 ' + b.toString() + ' ' + b.toString() + ')');
        break;
      case 2:
        h.unshift(
          'rotate(180 ' +
            (o.width / 2 + o.left).toString() +
            ' ' +
            (o.height / 2 + o.top).toString() +
            ')'
        );
        break;
      case 3:
        (b = o.width / 2 + o.left),
          h.unshift('rotate(-90 ' + b.toString() + ' ' + b.toString() + ')');
        break;
    }
    m % 2 === 1 &&
      (o.left !== o.top && ((b = o.left), (o.left = o.top), (o.top = b)),
      o.width !== o.height && ((b = o.width), (o.width = o.height), (o.height = b))),
      h.length && (s = '<g transform="' + h.join(' ') + '">' + s + '</g>');
  });
  const i = r.width,
    a = r.height,
    l = o.width,
    c = o.height;
  let u, f;
  i === null
    ? ((f = a === null ? '1em' : a === 'auto' ? c : a), (u = hu(f, l / c)))
    : ((u = i === 'auto' ? l : i), (f = a === null ? hu(u, c / l) : a === 'auto' ? c : a));
  const d = {},
    v = (p, h) => {
      Fx(h) || (d[p] = h.toString());
    };
  return (
    v('width', u),
    v('height', f),
    (d.viewBox =
      o.left.toString() + ' ' + o.top.toString() + ' ' + l.toString() + ' ' + c.toString()),
    { attributes: d, body: s }
  );
}
const jx = /\sid="(\S+)"/g,
  Bx = 'IconifyId' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
let Dx = 0;
function zx(e, t = Bx) {
  const n = [];
  let r;
  for (; (r = jx.exec(e)); ) n.push(r[1]);
  if (!n.length) return e;
  const o = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((s) => {
      const i = typeof t == 'function' ? t(s) : t + (Dx++).toString(),
        a = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', 'g'), '$1' + i + o + '$3');
    }),
    (e = e.replace(new RegExp(o, 'g'), '')),
    e
  );
}
function Ux(e, t) {
  let n = e.indexOf('xlink:') === -1 ? '' : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += ' ' + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>';
}
function Kx(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ');
}
function Wx(e) {
  return 'data:image/svg+xml,' + Kx(e);
}
function Vx(e) {
  return 'url("' + Wx(e) + '")';
}
const gu = { ...Np, inline: !1 },
  qx = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': !0,
    role: 'img'
  },
  Qx = { display: 'inline-block' },
  Ni = { backgroundColor: 'currentColor' },
  Fp = { backgroundColor: 'transparent' },
  mu = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
  vu = { webkitMask: Ni, mask: Ni, background: Fp };
for (const e in vu) {
  const t = vu[e];
  for (const n in mu) t[e + n] = mu[n];
}
const Fo = {};
['horizontal', 'vertical'].forEach((e) => {
  const t = e.slice(0, 1) + 'Flip';
  (Fo[e + '-flip'] = t), (Fo[e.slice(0, 1) + '-flip'] = t), (Fo[e + 'Flip'] = t);
});
function yu(e) {
  return e + (e.match(/^[-0-9.]+$/) ? 'px' : '');
}
const Jx = (e, t) => {
    const n = Ix(gu, t),
      r = { ...qx },
      o = t.mode || 'svg',
      s = {},
      i = t.style,
      a = typeof i == 'object' && !(i instanceof Array) ? i : {};
    for (let h in t) {
      const _ = t[h];
      if (_ !== void 0)
        switch (h) {
          case 'icon':
          case 'style':
          case 'onLoad':
          case 'mode':
            break;
          case 'inline':
          case 'hFlip':
          case 'vFlip':
            n[h] = _ === !0 || _ === 'true' || _ === 1;
            break;
          case 'flip':
            typeof _ == 'string' && Mx(n, _);
            break;
          case 'color':
            s.color = _;
            break;
          case 'rotate':
            typeof _ == 'string' ? (n[h] = $x(_)) : typeof _ == 'number' && (n[h] = _);
            break;
          case 'ariaHidden':
          case 'aria-hidden':
            _ !== !0 && _ !== 'true' && delete r['aria-hidden'];
            break;
          default: {
            const g = Fo[h];
            g
              ? (_ === !0 || _ === 'true' || _ === 1) && (n[g] = !0)
              : gu[h] === void 0 && (r[h] = _);
          }
        }
    }
    const l = Hx(e, n),
      c = l.attributes;
    if ((n.inline && (s.verticalAlign = '-0.125em'), o === 'svg')) {
      (r.style = { ...s, ...a }), Object.assign(r, c);
      let h = 0,
        _ = t.id;
      return (
        typeof _ == 'string' && (_ = _.replace(/-/g, '_')),
        (r.innerHTML = zx(l.body, _ ? () => _ + 'ID' + h++ : 'iconifyVue')),
        ge('svg', r)
      );
    }
    const { body: u, width: f, height: d } = e,
      v = o === 'mask' || (o === 'bg' ? !1 : u.indexOf('currentColor') !== -1),
      p = Ux(u, { ...c, width: f + '', height: d + '' });
    return (
      (r.style = {
        ...s,
        '--svg': Vx(p),
        width: yu(c.width),
        height: yu(c.height),
        ...Qx,
        ...(v ? Ni : Fp),
        ...a
      }),
      ge('span', r)
    );
  },
  Gx = Object.create(null),
  Yx = se({
    inheritAttrs: !1,
    render() {
      const e = this.$attrs,
        t = e.icon,
        n = typeof t == 'string' ? Gx[t] : typeof t == 'object' ? t : null;
      return n === null || typeof n != 'object' || typeof n.body != 'string'
        ? this.$slots.default
          ? this.$slots.default()
          : null
        : Jx({ ...Ga, ...n }, e);
    }
  }),
  $r = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Ts = (e, t, n, r = '') => {
    const o = e.split(':');
    if (e.slice(0, 1) === '@') {
      if (o.length < 2 || o.length > 3) return null;
      r = o.shift().slice(1);
    }
    if (o.length > 3 || !o.length) return null;
    if (o.length > 1) {
      const a = o.pop(),
        l = o.pop(),
        c = { provider: o.length > 0 ? o[0] : r, prefix: l, name: a };
      return t && !Ho(c) ? null : c;
    }
    const s = o[0],
      i = s.split('-');
    if (i.length > 1) {
      const a = { provider: r, prefix: i.shift(), name: i.join('-') };
      return t && !Ho(a) ? null : a;
    }
    if (n && r === '') {
      const a = { provider: r, prefix: '', name: s };
      return t && !Ho(a, n) ? null : a;
    }
    return null;
  },
  Ho = (e, t) =>
    e
      ? !!(
          (e.provider === '' || e.provider.match($r)) &&
          ((t && e.prefix === '') || e.prefix.match($r)) &&
          e.name.match($r)
        )
      : !1,
  Hp = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  os = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  Ya = Object.freeze({ ...Hp, ...os }),
  Fi = Object.freeze({ ...Ya, body: '', hidden: !1 });
function Zx(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function _u(e, t) {
  const n = Zx(e, t);
  for (const r in Fi)
    r in os
      ? r in e && !(r in n) && (n[r] = os[r])
      : r in t
      ? (n[r] = t[r])
      : r in e && (n[r] = e[r]);
  return n;
}
function Xx(e, t) {
  const n = e.icons,
    r = e.aliases || Object.create(null),
    o = Object.create(null);
  function s(i) {
    if (n[i]) return (o[i] = []);
    if (!(i in o)) {
      o[i] = null;
      const a = r[i] && r[i].parent,
        l = a && s(a);
      l && (o[i] = [a].concat(l));
    }
    return o[i];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(s), o;
}
function eP(e, t, n) {
  const r = e.icons,
    o = e.aliases || Object.create(null);
  let s = {};
  function i(a) {
    s = _u(r[a] || o[a], s);
  }
  return i(t), n.forEach(i), _u(e, s);
}
function jp(e, t) {
  const n = [];
  if (typeof e != 'object' || typeof e.icons != 'object') return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((o) => {
      t(o, null), n.push(o);
    });
  const r = Xx(e);
  for (const o in r) {
    const s = r[o];
    s && (t(o, eP(e, o, s)), n.push(o));
  }
  return n;
}
const tP = { provider: '', aliases: {}, not_found: {}, ...Hp };
function Ys(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function Bp(e) {
  if (typeof e != 'object' || e === null) return null;
  const t = e;
  if (typeof t.prefix != 'string' || !e.icons || typeof e.icons != 'object' || !Ys(e, tP))
    return null;
  const n = t.icons;
  for (const o in n) {
    const s = n[o];
    if (!o.match($r) || typeof s.body != 'string' || !Ys(s, Fi)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const o in r) {
    const s = r[o],
      i = s.parent;
    if (!o.match($r) || typeof i != 'string' || (!n[i] && !r[i]) || !Ys(s, Fi)) return null;
  }
  return t;
}
const bu = Object.create(null);
function nP(e, t) {
  return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() };
}
function An(e, t) {
  const n = bu[e] || (bu[e] = Object.create(null));
  return n[t] || (n[t] = nP(e, t));
}
function Za(e, t) {
  return Bp(t)
    ? jp(t, (n, r) => {
        r ? (e.icons[n] = r) : e.missing.add(n);
      })
    : [];
}
function rP(e, t, n) {
  try {
    if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let Jr = !1;
function Dp(e) {
  return typeof e == 'boolean' && (Jr = e), Jr;
}
function oP(e) {
  const t = typeof e == 'string' ? Ts(e, !0, Jr) : e;
  if (t) {
    const n = An(t.provider, t.prefix),
      r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function sP(e, t) {
  const n = Ts(e, !0, Jr);
  if (!n) return !1;
  const r = An(n.provider, n.prefix);
  return rP(r, n.name, t);
}
function iP(e, t) {
  if (typeof e != 'object') return !1;
  if ((typeof t != 'string' && (t = e.provider || ''), Jr && !t && !e.prefix)) {
    let o = !1;
    return (
      Bp(e) &&
        ((e.prefix = ''),
        jp(e, (s, i) => {
          i && sP(s, i) && (o = !0);
        })),
      o
    );
  }
  const n = e.prefix;
  if (!Ho({ provider: t, prefix: n, name: 'a' })) return !1;
  const r = An(t, n);
  return !!Za(r, e);
}
const aP = Object.freeze({ width: null, height: null }),
  lP = Object.freeze({ ...aP, ...os });
'' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
const Hi = Object.create(null);
function cP(e, t) {
  Hi[e] = t;
}
function ji(e) {
  return Hi[e] || Hi[''];
}
function Xa(e) {
  let t;
  if (typeof e.resources == 'string') t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || '/',
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const el = Object.create(null),
  _r = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
  jo = [];
for (; _r.length > 0; )
  _r.length === 1 || Math.random() > 0.5 ? jo.push(_r.shift()) : jo.push(_r.pop());
el[''] = Xa({ resources: ['https://api.iconify.design'].concat(jo) });
function uP(e, t) {
  const n = Xa(t);
  return n === null ? !1 : ((el[e] = n), !0);
}
function tl(e) {
  return el[e];
}
const fP = () => {
  let e;
  try {
    if (((e = fetch), typeof e == 'function')) return e;
  } catch {}
};
let wu = fP();
function dP(e, t) {
  const n = tl(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const s = t + '.json?icons=';
    r = n.maxURL - o - n.path.length - s.length;
  }
  return r;
}
function pP(e) {
  return e === 404;
}
const hP = (e, t, n) => {
  const r = [],
    o = dP(e, t),
    s = 'icons';
  let i = { type: s, provider: e, prefix: t, icons: [] },
    a = 0;
  return (
    n.forEach((l, c) => {
      (a += l.length + 1),
        a >= o &&
          c > 0 &&
          (r.push(i), (i = { type: s, provider: e, prefix: t, icons: [] }), (a = l.length)),
        i.icons.push(l);
    }),
    r.push(i),
    r
  );
};
function gP(e) {
  if (typeof e == 'string') {
    const t = tl(e);
    if (t) return t.path;
  }
  return '/';
}
const mP = (e, t, n) => {
    if (!wu) {
      n('abort', 424);
      return;
    }
    let r = gP(t.provider);
    switch (t.type) {
      case 'icons': {
        const s = t.prefix,
          a = t.icons.join(','),
          l = new URLSearchParams({ icons: a });
        r += s + '.json?' + l.toString();
        break;
      }
      case 'custom': {
        const s = t.uri;
        r += s.slice(0, 1) === '/' ? s.slice(1) : s;
        break;
      }
      default:
        n('abort', 400);
        return;
    }
    let o = 503;
    wu(e + r)
      .then((s) => {
        const i = s.status;
        if (i !== 200) {
          setTimeout(() => {
            n(pP(i) ? 'abort' : 'next', i);
          });
          return;
        }
        return (o = 501), s.json();
      })
      .then((s) => {
        if (typeof s != 'object' || s === null) {
          setTimeout(() => {
            s === 404 ? n('abort', s) : n('next', o);
          });
          return;
        }
        setTimeout(() => {
          n('success', s);
        });
      })
      .catch(() => {
        n('next', o);
      });
  },
  vP = { prepare: hP, send: mP };
function yP(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((o, s) =>
    o.provider !== s.provider
      ? o.provider.localeCompare(s.provider)
      : o.prefix !== s.prefix
      ? o.prefix.localeCompare(s.prefix)
      : o.name.localeCompare(s.name)
  );
  let r = { provider: '', prefix: '', name: '' };
  return (
    e.forEach((o) => {
      if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
      r = o;
      const s = o.provider,
        i = o.prefix,
        a = o.name,
        l = n[s] || (n[s] = Object.create(null)),
        c = l[i] || (l[i] = An(s, i));
      let u;
      a in c.icons
        ? (u = t.loaded)
        : i === '' || c.missing.has(a)
        ? (u = t.missing)
        : (u = t.pending);
      const f = { provider: s, prefix: i, name: a };
      u.push(f);
    }),
    t
  );
}
function zp(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function _P(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const r = e.provider,
        o = e.prefix;
      t.forEach((s) => {
        const i = s.icons,
          a = i.pending.length;
        (i.pending = i.pending.filter((l) => {
          if (l.prefix !== o) return !0;
          const c = l.name;
          if (e.icons[c]) i.loaded.push({ provider: r, prefix: o, name: c });
          else if (e.missing.has(c)) i.missing.push({ provider: r, prefix: o, name: c });
          else return (n = !0), !0;
          return !1;
        })),
          i.pending.length !== a &&
            (n || zp([e], s.id),
            s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort));
      });
    }));
}
let bP = 0;
function wP(e, t, n) {
  const r = bP++,
    o = zp.bind(null, n, r);
  if (!t.pending.length) return o;
  const s = { id: r, icons: t, callback: e, abort: o };
  return (
    n.forEach((i) => {
      (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
    }),
    o
  );
}
function EP(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((o) => {
      const s = typeof o == 'string' ? Ts(o, t, n) : o;
      s && r.push(s);
    }),
    r
  );
}
var TP = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
function CP(e, t, n, r) {
  const o = e.resources.length,
    s = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let C = e.resources.slice(0);
    for (i = []; C.length > 1; ) {
      const x = Math.floor(Math.random() * C.length);
      i.push(C[x]), (C = C.slice(0, x).concat(C.slice(x + 1)));
    }
    i = i.concat(C);
  } else i = e.resources.slice(s).concat(e.resources.slice(0, s));
  const a = Date.now();
  let l = 'pending',
    c = 0,
    u,
    f = null,
    d = [],
    v = [];
  typeof r == 'function' && v.push(r);
  function p() {
    f && (clearTimeout(f), (f = null));
  }
  function h() {
    l === 'pending' && (l = 'aborted'),
      p(),
      d.forEach((C) => {
        C.status === 'pending' && (C.status = 'aborted');
      }),
      (d = []);
  }
  function _(C, x) {
    x && (v = []), typeof C == 'function' && v.push(C);
  }
  function g() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: c,
      queriesPending: d.length,
      subscribe: _,
      abort: h
    };
  }
  function m() {
    (l = 'failed'),
      v.forEach((C) => {
        C(void 0, u);
      });
  }
  function b() {
    d.forEach((C) => {
      C.status === 'pending' && (C.status = 'aborted');
    }),
      (d = []);
  }
  function E(C, x, T) {
    const M = x !== 'success';
    switch (((d = d.filter((I) => I !== C)), l)) {
      case 'pending':
        break;
      case 'failed':
        if (M || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (x === 'abort') {
      (u = T), m();
      return;
    }
    if (M) {
      (u = T), d.length || (i.length ? P() : m());
      return;
    }
    if ((p(), b(), !e.random)) {
      const I = e.resources.indexOf(C.resource);
      I !== -1 && I !== e.index && (e.index = I);
    }
    (l = 'completed'),
      v.forEach((I) => {
        I(T);
      });
  }
  function P() {
    if (l !== 'pending') return;
    p();
    const C = i.shift();
    if (C === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), l === 'pending' && (b(), m());
        }, e.timeout);
        return;
      }
      m();
      return;
    }
    const x = {
      status: 'pending',
      resource: C,
      callback: (T, M) => {
        E(x, T, M);
      }
    };
    d.push(x), c++, (f = setTimeout(P, e.rotate)), n(C, t, x.callback);
  }
  return setTimeout(P), g;
}
function Up(e) {
  const t = { ...TP, ...e };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === 'pending');
  }
  function o(a, l, c) {
    const u = CP(t, a, l, (f, d) => {
      r(), c && c(f, d);
    });
    return n.push(u), u;
  }
  function s(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Eu() {}
const Zs = Object.create(null);
function xP(e) {
  if (!Zs[e]) {
    const t = tl(e);
    if (!t) return;
    const n = Up(t),
      r = { config: t, redundancy: n };
    Zs[e] = r;
  }
  return Zs[e];
}
function PP(e, t, n) {
  let r, o;
  if (typeof e == 'string') {
    const s = ji(e);
    if (!s) return n(void 0, 424), Eu;
    o = s.send;
    const i = xP(e);
    i && (r = i.redundancy);
  } else {
    const s = Xa(e);
    if (s) {
      r = Up(s);
      const i = e.resources ? e.resources[0] : '',
        a = ji(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Eu) : r.query(t, o, n)().abort;
}
const Tu = 'iconify2',
  Gr = 'iconify',
  Kp = Gr + '-count',
  Cu = Gr + '-version',
  Wp = 36e5,
  SP = 168;
function Bi(e, t) {
  try {
    return e.getItem(t);
  } catch {}
}
function nl(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {}
}
function xu(e, t) {
  try {
    e.removeItem(t);
  } catch {}
}
function Di(e, t) {
  return nl(e, Kp, t.toString());
}
function zi(e) {
  return parseInt(Bi(e, Kp)) || 0;
}
const Cs = { local: !0, session: !0 },
  Vp = { local: new Set(), session: new Set() };
let rl = !1;
function OP(e) {
  rl = e;
}
let Ao = typeof window > 'u' ? {} : window;
function qp(e) {
  const t = e + 'Storage';
  try {
    if (Ao && Ao[t] && typeof Ao[t].length == 'number') return Ao[t];
  } catch {}
  Cs[e] = !1;
}
function Qp(e, t) {
  const n = qp(e);
  if (!n) return;
  const r = Bi(n, Cu);
  if (r !== Tu) {
    if (r) {
      const a = zi(n);
      for (let l = 0; l < a; l++) xu(n, Gr + l.toString());
    }
    nl(n, Cu, Tu), Di(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Wp) - SP,
    s = (a) => {
      const l = Gr + a.toString(),
        c = Bi(n, l);
      if (typeof c == 'string') {
        try {
          const u = JSON.parse(c);
          if (
            typeof u == 'object' &&
            typeof u.cached == 'number' &&
            u.cached > o &&
            typeof u.provider == 'string' &&
            typeof u.data == 'object' &&
            typeof u.data.prefix == 'string' &&
            t(u, a)
          )
            return !0;
        } catch {}
        xu(n, l);
      }
    };
  let i = zi(n);
  for (let a = i - 1; a >= 0; a--) s(a) || (a === i - 1 ? (i--, Di(n, i)) : Vp[e].add(a));
}
function Jp() {
  if (!rl) {
    OP(!0);
    for (const e in Cs)
      Qp(e, (t) => {
        const n = t.data,
          r = t.provider,
          o = n.prefix,
          s = An(r, o);
        if (!Za(s, n).length) return !1;
        const i = n.lastModified || -1;
        return (
          (s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i), !0
        );
      });
  }
}
function kP(e, t) {
  const n = e.lastModifiedCached;
  if (n && n >= t) return n === t;
  if (((e.lastModifiedCached = t), n))
    for (const r in Cs)
      Qp(r, (o) => {
        const s = o.data;
        return o.provider !== e.provider || s.prefix !== e.prefix || s.lastModified === t;
      });
  return !0;
}
function AP(e, t) {
  rl || Jp();
  function n(r) {
    let o;
    if (!Cs[r] || !(o = qp(r))) return;
    const s = Vp[r];
    let i;
    if (s.size) s.delete((i = Array.from(s).shift()));
    else if (((i = zi(o)), !Di(o, i + 1))) return;
    const a = { cached: Math.floor(Date.now() / Wp), provider: e.provider, data: t };
    return nl(o, Gr + i.toString(), JSON.stringify(a));
  }
  (t.lastModified && !kP(e, t.lastModified)) ||
    (Object.keys(t.icons).length &&
      (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
      n('local') || n('session')));
}
function Pu() {}
function IP(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), _P(e);
    }));
}
function RP(e, t) {
  e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = e,
          o = e.iconsToLoad;
        delete e.iconsToLoad;
        let s;
        if (!o || !(s = ji(n))) return;
        s.prepare(n, r, o).forEach((a) => {
          PP(n, a, (l) => {
            if (typeof l != 'object')
              a.icons.forEach((c) => {
                e.missing.add(c);
              });
            else
              try {
                const c = Za(e, l);
                if (!c.length) return;
                const u = e.pendingIcons;
                u &&
                  c.forEach((f) => {
                    u.delete(f);
                  }),
                  AP(e, l);
              } catch (c) {
                console.error(c);
              }
            IP(e);
          });
        });
      }));
}
const MP = (e, t) => {
    const n = EP(e, !0, Dp()),
      r = yP(n);
    if (!r.pending.length) {
      let l = !0;
      return (
        t &&
          setTimeout(() => {
            l && t(r.loaded, r.missing, r.pending, Pu);
          }),
        () => {
          l = !1;
        }
      );
    }
    const o = Object.create(null),
      s = [];
    let i, a;
    return (
      r.pending.forEach((l) => {
        const { provider: c, prefix: u } = l;
        if (u === a && c === i) return;
        (i = c), (a = u), s.push(An(c, u));
        const f = o[c] || (o[c] = Object.create(null));
        f[u] || (f[u] = []);
      }),
      r.pending.forEach((l) => {
        const { provider: c, prefix: u, name: f } = l,
          d = An(c, u),
          v = d.pendingIcons || (d.pendingIcons = new Set());
        v.has(f) || (v.add(f), o[c][u].push(f));
      }),
      s.forEach((l) => {
        const { provider: c, prefix: u } = l;
        o[c][u].length && RP(l, o[c][u]);
      }),
      t ? wP(t, r, s) : Pu
    );
  },
  $P = (e) =>
    new Promise((t, n) => {
      const r = typeof e == 'string' ? Ts(e, !0) : e;
      if (!r) {
        n(e);
        return;
      }
      MP([r || e], (o) => {
        if (o.length && r) {
          const s = oP(r);
          if (s) {
            t({ ...Ya, ...s });
            return;
          }
        }
        n(e);
      });
    });
({ ...lP });
const Su = { backgroundColor: 'currentColor' },
  LP = { backgroundColor: 'transparent' },
  Ou = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
  ku = { webkitMask: Su, mask: Su, background: LP };
for (const e in ku) {
  const t = ku[e];
  for (const n in Ou) t[e + n] = Ou[n];
}
const Xs = {};
['horizontal', 'vertical'].forEach((e) => {
  const t = e.slice(0, 1) + 'Flip';
  (Xs[e + '-flip'] = t), (Xs[e.slice(0, 1) + '-flip'] = t), (Xs[e + 'Flip'] = t);
});
Dp(!0);
cP('', vP);
if (typeof document < 'u' && typeof window < 'u') {
  Jp();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = 'Invalid IconifyPreload syntax.';
    typeof t == 'object' &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != 'object' ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != 'object' ||
            typeof r.prefix != 'string' ||
            !iP(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == 'object' && t !== null)
      for (let n in t) {
        const r = 'IconifyProviders[' + n + '] is invalid.';
        try {
          const o = t[n];
          if (typeof o != 'object' || !o || o.resources === void 0) continue;
          uP(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
({ ...Ya });
const NP = ['width', 'height'],
  FP = se({
    __name: 'Icon',
    props: { name: { type: String, required: !0 }, size: { type: String, default: '' } },
    async setup(e) {
      var p;
      let t, n;
      const r = e,
        o = Me(),
        s = Ca();
      (p = s == null ? void 0 : s.nuxtIcon) != null && p.aliases;
      const i = Ea('icons', () => ({})),
        a = J(!1),
        l = j(() => {
          var h;
          return (((h = s.nuxtIcon) == null ? void 0 : h.aliases) || {})[r.name] || r.name;
        }),
        c = j(() => {
          var h;
          return (h = i.value) == null ? void 0 : h[l.value];
        }),
        u = j(() => o.vueApp.component(l.value)),
        f = j(() => {
          var _, g, m;
          if (
            !r.size &&
            typeof ((_ = s.nuxtIcon) == null ? void 0 : _.size) == 'boolean' &&
            !((g = s.nuxtIcon) != null && g.size)
          )
            return;
          const h = r.size || ((m = s.nuxtIcon) == null ? void 0 : m.size) || '1em';
          return String(Number(h)) === h ? `${h}px` : h;
        }),
        d = j(() => {
          var h;
          return ((h = s == null ? void 0 : s.nuxtIcon) == null ? void 0 : h.class) ?? 'icon';
        });
      async function v() {
        var h;
        u.value ||
          ((h = i.value) != null && h[l.value]) ||
          ((a.value = !0), (i.value[l.value] = await $P(l.value).catch(() => {})), (a.value = !1));
      }
      return (
        fe(() => l.value, v),
        !u.value && (([t, n] = om(() => v())), (t = await t), n()),
        (h, _) =>
          S(a)
            ? (Y(),
              we('span', { key: 0, class: Fe(S(d)), width: S(f), height: S(f) }, null, 10, NP))
            : S(c)
            ? (Y(),
              Ie(
                S(Yx),
                { key: 1, icon: S(c), class: Fe(S(d)), width: S(f), height: S(f) },
                null,
                8,
                ['icon', 'class', 'width', 'height']
              ))
            : S(u)
            ? (Y(),
              Ie(da(S(u)), { key: 2, class: Fe(S(d)), width: S(f), height: S(f) }, null, 8, [
                'class',
                'width',
                'height'
              ]))
            : (Y(),
              we(
                'span',
                {
                  key: 3,
                  class: Fe(S(d)),
                  style: Ut({ fontSize: S(f), lineHeight: S(f), width: S(f), height: S(f) })
                },
                Wn(e.name),
                7
              ))
      );
    }
  });
const Gp = dr(FP, [['__scopeId', 'data-v-1664b317']]),
  HP = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Gp }, Symbol.toStringTag, { value: 'Module' })
  );
const jP = { class: 'nav-title' },
  BP = se({
    __name: 'SubItem',
    props: { data: null },
    setup(e) {
      return (t, n) => {
        const r = ol,
          o = dC,
          s = _s,
          i = fp;
        return e.data.children && e.data.children.length > 0
          ? (Y(),
            Ie(
              o,
              { key: 0, class: 'is-opened', index: e.data._path },
              {
                title: Re(() => [ke('span', jP, Wn(e.data.title), 1)]),
                default: Re(() => [
                  (Y(!0),
                  we(
                    $e,
                    null,
                    pa(
                      e.data.children,
                      (a) => (Y(), Ie(r, { data: a, key: a._path }, null, 8, ['data']))
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ['index']
            ))
          : (Y(),
            Ie(
              i,
              { key: 1, index: e.data._path },
              {
                default: Re(() => [
                  ae(
                    s,
                    { title: e.data.title, to: e.data._path },
                    { default: Re(() => [ar(Wn(e.data.title), 1)]), _: 1 },
                    8,
                    ['title', 'to']
                  )
                ]),
                _: 1
              },
              8,
              ['index']
            ));
      };
    }
  });
const ol = dr(BP, [['__scopeId', 'data-v-2d8316e7']]),
  DP = Object.freeze(
    Object.defineProperty({ __proto__: null, default: ol }, Symbol.toStringTag, { value: 'Module' })
  );
function zP(e) {
  return '/' + e.split(/\//)[1];
}
function OS(e, t) {
  const n = e.split(/\//);
  return (n[n.length - 1] = t), n.join('/');
}
const UP = { class: 'nav' },
  KP = se({
    __name: 'AsideNav',
    setup(e) {
      const t = Ca(),
        n = Ur(),
        r = J([]);
      return (
        fe(
          n,
          async () => {
            if (t.nav.excludeAsidePathRefresh.includes(n.path)) return;
            const o = zP(n.path),
              s = await bp(_p(o));
            s[0] && (r.value = s[0].children || []);
          },
          { immediate: !0 }
        ),
        (o, s) => {
          const i = ol,
            a = WT,
            l = _s,
            c = fp,
            u = fC;
          return (
            Y(),
            we('nav', UP, [
              ae(
                u,
                { class: 'aside-nav' },
                {
                  default: Re(() => [
                    (Y(!0),
                    we(
                      $e,
                      null,
                      pa(S(r), (f) => (Y(), Ie(i, { data: f, key: f._path }, null, 8, ['data']))),
                      128
                    )),
                    ae(a),
                    ae(
                      c,
                      { index: '/test' },
                      {
                        default: Re(() => [
                          ae(l, { to: '/test' }, { default: Re(() => [ar('markdown')]), _: 1 })
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              )
            ])
          );
        }
      );
    }
  });
const WP = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, (n) => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || '';
      }),
  VP = (e, t) => {
    const n = e.route.matched.find((o) => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === e.Component.type;
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && WP(e.route, n));
    return typeof r == 'function' ? r(e.route) : r;
  },
  qP = (e, t) => ({ default: () => (e ? ge(yg, e === !0 ? {} : e, t) : t) }),
  QP = se({
    name: 'FragmentWrapper',
    setup(e, { slots: t }) {
      return () => {
        var n;
        return (n = t.default) == null ? void 0 : n.call(t);
      };
    }
  }),
  JP = (e, t, n) => ({ default: () => (t ? ge(e, t === !0 ? {} : t, n) : ge(QP, {}, n)) }),
  GP = se({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null }
    },
    setup(e, { attrs: t }) {
      const n = Me();
      return () =>
        ge(
          _d,
          { name: e.name, route: e.route, ...t },
          {
            default: (r) => {
              if (!r.Component) return;
              const o = VP(r, e.pageKey),
                s = n.deferHydration(),
                i = !!(e.transition ?? r.route.meta.pageTransition ?? wi),
                a =
                  i &&
                  ZP(
                    [
                      e.transition,
                      r.route.meta.pageTransition,
                      wi,
                      {
                        onAfterLeave: () => {
                          n.callHook('page:transition:finish', r.Component);
                        }
                      }
                    ].filter(Boolean)
                  );
              return JP(
                lr,
                i && a,
                qP(
                  e.keepalive ?? r.route.meta.keepalive ?? h0,
                  ge(
                    af,
                    {
                      onPending: () => n.callHook('page:start', r.Component),
                      onResolve: () => {
                        yt(() => n.callHook('page:finish', r.Component).finally(s));
                      }
                    },
                    {
                      default: () => ge(XP, { key: o, routeProps: r, pageKey: o, hasTransition: i })
                    }
                  )
                )
              ).default();
            }
          }
        );
    }
  });
function YP(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function ZP(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: YP(n.onAfterLeave) }));
  return b_(...t);
}
const XP = se({
    name: 'RouteProvider',
    props: ['routeProps', 'pageKey', 'hasTransition'],
    setup(e) {
      const t = e.pageKey,
        n = e.routeProps.route,
        r = {};
      for (const o in e.routeProps.route)
        r[o] = j(() => (t === e.pageKey ? e.routeProps.route[o] : n[o]));
      return et('_route', lt(r)), () => ge(e.routeProps.Component);
    }
  }),
  eS = se({
    name: 'NuxtLoadingIndicator',
    props: {
      throttle: { type: Number, default: 200 },
      duration: { type: Number, default: 2e3 },
      height: { type: Number, default: 3 },
      color: {
        type: [String, Boolean],
        default: 'repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)'
      }
    },
    setup(e, { slots: t }) {
      const n = tS({ duration: e.duration, throttle: e.throttle }),
        r = Me();
      return (
        r.hook('page:start', n.start),
        r.hook('page:finish', n.finish),
        Ye(n.clear),
        () =>
          ge(
            'div',
            {
              class: 'nuxt-loading-indicator',
              style: {
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                pointerEvents: 'none',
                width: 'auto',
                height: `${e.height}px`,
                opacity: n.isLoading.value ? 1 : 0,
                background: e.color || void 0,
                backgroundSize: `${(100 / n.progress.value) * 100}% auto`,
                transform: `scaleX(${n.progress.value}%)`,
                transformOrigin: 'left',
                transition: 'transform 0.1s, height 0.4s, opacity 0.4s',
                zIndex: 999999
              }
            },
            t
          )
      );
    }
  });
function tS(e) {
  const t = J(0),
    n = J(!1),
    r = j(() => 1e4 / e.duration);
  let o = null,
    s = null;
  function i() {
    l(),
      (t.value = 0),
      e.throttle
        ? (s = setTimeout(() => {
            (n.value = !0), f();
          }, e.throttle))
        : ((n.value = !0), f());
  }
  function a() {
    (t.value = 100), u();
  }
  function l() {
    clearInterval(o), clearTimeout(s), (o = null), (s = null);
  }
  function c(d) {
    t.value = Math.min(100, t.value + d);
  }
  function u() {
    l(),
      setTimeout(() => {
        (n.value = !1),
          setTimeout(() => {
            t.value = 0;
          }, 400);
      }, 500);
  }
  function f() {
    o = setInterval(() => {
      c(r.value);
    }, 100);
  }
  return { progress: t, isLoading: n, start: i, finish: a, clear: l };
}
const nS = '' + new URL('changlishe.0913a958.jpg', import.meta.url).href,
  rS = { class: 'header' },
  oS = { title: 'github 仓库', class: 'item' },
  sS = { class: 'container' },
  iS = { class: 'aside' },
  aS = { class: 'aside-stick' },
  lS = { class: 'main' },
  cS = se({
    __name: 'app',
    setup(e) {
      d0({ script: [{ src: '/js/theme.js', tagPosition: 'head' }] });
      function t() {
        Ed('/');
      }
      return (n, r) => {
        const o = Ep,
          s = Ax,
          i = Gp,
          a = CT,
          l = KP,
          c = GP,
          u = eS;
        return (
          Y(),
          we(
            $e,
            null,
            [
              ke('header', rS, [
                ae(o, { class: 'item' }),
                ae(s, { title: '切换主题', class: 'item' }),
                ke('div', oS, [ae(i, { size: '1.8em', name: 'mdi:github' })]),
                ae(
                  a,
                  {
                    onClick: t,
                    title: '首页',
                    alt: '首页',
                    class: 'avatar-home item',
                    size: 26,
                    src: S(nS)
                  },
                  null,
                  8,
                  ['src']
                )
              ]),
              ke('div', sS, [
                ps(ke('aside', iS, [ke('div', aS, [ae(l)])], 512), [[ya, n.$route.path !== '/']]),
                ke('main', lS, [ae(c)])
              ]),
              ae(u)
            ],
            64
          )
        );
      };
    }
  });
const Au = {
  __name: 'nuxt-root',
  setup(e) {
    const t = le(() =>
        ie(() => import('./error-component.e137027b.js'), [], import.meta.url).then(
          (l) => l.default || l
        )
      ),
      n = () => null,
      r = Me(),
      o = r.deferHydration(),
      s = !1;
    et('_route', Ur()), r.hooks.callHookWith((l) => l.map((c) => c()), 'vue:setup');
    const i = ys();
    mf((l, c, u) => {
      if (
        (r.hooks
          .callHook('vue:error', l, c, u)
          .catch((f) => console.error('[nuxt] Error in `vue:error` hook', f)),
        S_(l) && (l.fatal || l.unhandled))
      )
        return zt(r, Hn, [l]), !1;
    });
    const { islandContext: a } = !1;
    return (l, c) => (
      Y(),
      Ie(
        af,
        { onResolve: S(o) },
        {
          default: Re(() => [
            S(i)
              ? (Y(), Ie(S(t), { key: 0, error: S(i) }, null, 8, ['error']))
              : S(a)
              ? (Y(), Ie(S(n), { key: 1, context: S(a) }, null, 8, ['context']))
              : S(s)
              ? (Y(), Ie(da(S(s)), { key: 2 }))
              : (Y(), Ie(S(cS), { key: 3 }))
          ]),
          _: 1
        },
        8,
        ['onResolve']
      )
    );
  }
};
globalThis.$fetch || (globalThis.$fetch = gv.create({ baseURL: vv() }));
let Iu;
const uS = Mv(mC);
(Iu = async function () {
  var o, s;
  const n = !!(
      ((o = window.__NUXT__) != null && o.serverRendered) ||
      ((s = document.getElementById('__NUXT_DATA__')) == null ? void 0 : s.dataset.ssr) === 'true'
    )
      ? Mm(Au)
      : Rm(Au),
    r = Av({ vueApp: n });
  try {
    await Rv(r, uS);
  } catch (i) {
    await r.callHook('app:error', i), (r.payload.error = r.payload.error || i);
  }
  try {
    await r.hooks.callHook('app:created', n),
      await r.hooks.callHook('app:beforeMount', n),
      n.mount('#' + g0),
      await r.hooks.callHook('app:mounted', n),
      await yt();
  } catch (i) {
    await r.callHook('app:error', i), (r.payload.error = r.payload.error || i);
  }
}),
  Iu().catch((e) => {
    console.error('Error while mounting app:', e);
  });
export {
  Ut as $,
  uE as A,
  lE as B,
  et as C,
  q1 as D,
  cE as E,
  ze as F,
  tt as G,
  to as H,
  ae as I,
  ps as J,
  Fe as K,
  Wn as L,
  ya as M,
  nt as N,
  fr as O,
  Er as P,
  xe as Q,
  K1 as R,
  It as S,
  lr as T,
  Dh as U,
  mS as V,
  De as W,
  fe as X,
  zs as Y,
  Db as Z,
  ie as _,
  KP as a,
  ja as a0,
  da as a1,
  $e as a2,
  pS as a3,
  gS as a4,
  wc as a5,
  ot as a6,
  _e as a7,
  cn as a8,
  re as a9,
  be as aA,
  vf as aB,
  kn as aC,
  Df as aD,
  qf as aE,
  dS as aF,
  om as aG,
  OS as aH,
  zP as aI,
  ru as aJ,
  PS as aK,
  jt as aL,
  xS as aM,
  ES as aN,
  TS as aO,
  CS as aP,
  wC as aQ,
  Me as aR,
  ar as aS,
  hS as aa,
  Xo as ab,
  vS as ac,
  Ca as ad,
  SS as ae,
  Gp as af,
  fn as ag,
  es as ah,
  Ye as ai,
  xt as aj,
  Od as ak,
  yt as al,
  lt as am,
  gf as an,
  Pe as ao,
  nm as ap,
  ge as aq,
  wS as ar,
  Ur as as,
  d0 as at,
  Wf as au,
  Vh as av,
  H_ as aw,
  Kr as ax,
  _p as ay,
  qa as az,
  se as b,
  Ie as c,
  le as d,
  j as e,
  qn as f,
  qg as g,
  cr as h,
  _s as i,
  we as j,
  rg as k,
  ke as l,
  dr as m,
  fS as n,
  Y as o,
  ng as p,
  Ae as q,
  He as r,
  J as s,
  je as t,
  S as u,
  Sa as v,
  Re as w,
  U1 as x,
  Be as y,
  kc as z
};
