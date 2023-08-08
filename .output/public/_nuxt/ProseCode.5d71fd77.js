import {
  q as ce,
  s as v,
  e as u,
  u as s,
  t as De,
  v as je,
  x as Fe,
  y as ue,
  z as Le,
  A as Re,
  B as Ae,
  C as Be,
  D as He,
  E as Ge,
  F as de,
  G as pe,
  b as O,
  H as A,
  o as g,
  j as M,
  r as H,
  I as z,
  w as E,
  J as fe,
  l as x,
  K as m,
  L as G,
  M as ge,
  T as me,
  N as he,
  O as Ke,
  P as Ue,
  Q as X,
  R as Je,
  S as ye,
  U as Ye,
  V as Q,
  W as Ze,
  X as Ve,
  Y as qe,
  Z as We,
  c as w,
  $ as Xe,
  f as I,
  a0 as ee,
  a1 as Qe,
  a2 as et,
  a3 as tt,
  a4 as nt,
  a5 as ot,
  a6 as at,
  a7 as te,
  a8 as ve,
  a9 as B,
  aa as ne,
  ab as rt,
  ac as st,
  ad as it,
  ae as lt,
  m as ct,
  af as ut
} from './entry.73671b33.js';
var dt = typeof global == 'object' && global && global.Object === Object && global;
const pt = dt;
var ft = typeof self == 'object' && self && self.Object === Object && self,
  gt = pt || ft || Function('return this')();
const K = gt;
var mt = K.Symbol;
const b = mt;
var be = Object.prototype,
  ht = be.hasOwnProperty,
  yt = be.toString,
  $ = b ? b.toStringTag : void 0;
function vt(e) {
  var t = ht.call(e, $),
    n = e[$];
  try {
    e[$] = void 0;
    var o = !0;
  } catch {}
  var a = yt.call(e);
  return o && (t ? (e[$] = n) : delete e[$]), a;
}
var bt = Object.prototype,
  _t = bt.toString;
function Ct(e) {
  return _t.call(e);
}
var Tt = '[object Null]',
  St = '[object Undefined]',
  oe = b ? b.toStringTag : void 0;
function _e(e) {
  return e == null ? (e === void 0 ? St : Tt) : oe && oe in Object(e) ? vt(e) : Ct(e);
}
function wt(e) {
  return e != null && typeof e == 'object';
}
var $t = '[object Symbol]';
function U(e) {
  return typeof e == 'symbol' || (wt(e) && _e(e) == $t);
}
function xt(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; ) a[n] = t(e[n], n, e);
  return a;
}
var Nt = Array.isArray;
const J = Nt;
var Ot = 1 / 0,
  ae = b ? b.prototype : void 0,
  re = ae ? ae.toString : void 0;
function Ce(e) {
  if (typeof e == 'string') return e;
  if (J(e)) return xt(e, Ce) + '';
  if (U(e)) return re ? re.call(e) : '';
  var t = e + '';
  return t == '0' && 1 / e == -Ot ? '-0' : t;
}
function Te(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Pt = '[object AsyncFunction]',
  It = '[object Function]',
  Et = '[object GeneratorFunction]',
  Mt = '[object Proxy]';
function kt(e) {
  if (!Te(e)) return !1;
  var t = _e(e);
  return t == It || t == Et || t == Pt || t == Mt;
}
var zt = K['__core-js_shared__'];
const R = zt;
var se = (function () {
  var e = /[^.]+$/.exec((R && R.keys && R.keys.IE_PROTO) || '');
  return e ? 'Symbol(src)_1.' + e : '';
})();
function Dt(e) {
  return !!se && se in e;
}
var jt = Function.prototype,
  Ft = jt.toString;
function Lt(e) {
  if (e != null) {
    try {
      return Ft.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var Rt = /[\\^$.*+?()[\]{}|]/g,
  At = /^\[object .+?Constructor\]$/,
  Bt = Function.prototype,
  Ht = Object.prototype,
  Gt = Bt.toString,
  Kt = Ht.hasOwnProperty,
  Ut = RegExp(
    '^' +
      Gt.call(Kt)
        .replace(Rt, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );
function Jt(e) {
  if (!Te(e) || Dt(e)) return !1;
  var t = kt(e) ? Ut : At;
  return t.test(Lt(e));
}
function Yt(e, t) {
  return e == null ? void 0 : e[t];
}
function Se(e, t) {
  var n = Yt(e, t);
  return Jt(n) ? n : void 0;
}
function Zt(e, t) {
  return e === t || (e !== e && t !== t);
}
var Vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  qt = /^\w*$/;
function Wt(e, t) {
  if (J(e)) return !1;
  var n = typeof e;
  return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || U(e)
    ? !0
    : qt.test(e) || !Vt.test(e) || (t != null && e in Object(t));
}
var Xt = Se(Object, 'create');
const N = Xt;
function Qt() {
  (this.__data__ = N ? N(null) : {}), (this.size = 0);
}
function en(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var tn = '__lodash_hash_undefined__',
  nn = Object.prototype,
  on = nn.hasOwnProperty;
function an(e) {
  var t = this.__data__;
  if (N) {
    var n = t[e];
    return n === tn ? void 0 : n;
  }
  return on.call(t, e) ? t[e] : void 0;
}
var rn = Object.prototype,
  sn = rn.hasOwnProperty;
function ln(e) {
  var t = this.__data__;
  return N ? t[e] !== void 0 : sn.call(t, e);
}
var cn = '__lodash_hash_undefined__';
function un(e, t) {
  var n = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (n[e] = N && t === void 0 ? cn : t), this;
}
function h(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
h.prototype.clear = Qt;
h.prototype.delete = en;
h.prototype.get = an;
h.prototype.has = ln;
h.prototype.set = un;
function dn() {
  (this.__data__ = []), (this.size = 0);
}
function D(e, t) {
  for (var n = e.length; n--; ) if (Zt(e[n][0], t)) return n;
  return -1;
}
var pn = Array.prototype,
  fn = pn.splice;
function gn(e) {
  var t = this.__data__,
    n = D(t, e);
  if (n < 0) return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : fn.call(t, n, 1), --this.size, !0;
}
function mn(e) {
  var t = this.__data__,
    n = D(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hn(e) {
  return D(this.__data__, e) > -1;
}
function yn(e, t) {
  var n = this.__data__,
    o = D(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
}
function C(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
C.prototype.clear = dn;
C.prototype.delete = gn;
C.prototype.get = mn;
C.prototype.has = hn;
C.prototype.set = yn;
var vn = Se(K, 'Map');
const bn = vn;
function _n() {
  (this.size = 0), (this.__data__ = { hash: new h(), map: new (bn || C)(), string: new h() });
}
function Cn(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
function j(e, t) {
  var n = e.__data__;
  return Cn(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
function Tn(e) {
  var t = j(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function Sn(e) {
  return j(this, e).get(e);
}
function wn(e) {
  return j(this, e).has(e);
}
function $n(e, t) {
  var n = j(this, e),
    o = n.size;
  return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
}
function y(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
y.prototype.clear = _n;
y.prototype.delete = Tn;
y.prototype.get = Sn;
y.prototype.has = wn;
y.prototype.set = $n;
var xn = 'Expected a function';
function Y(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(xn);
  var n = function () {
    var o = arguments,
      a = t ? t.apply(this, o) : o[0],
      r = n.cache;
    if (r.has(a)) return r.get(a);
    var l = e.apply(this, o);
    return (n.cache = r.set(a, l) || r), l;
  };
  return (n.cache = new (Y.Cache || y)()), n;
}
Y.Cache = y;
var Nn = 500;
function On(e) {
  var t = Y(e, function (o) {
      return n.size === Nn && n.clear(), o;
    }),
    n = t.cache;
  return t;
}
var Pn =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  In = /\\(\\)?/g,
  En = On(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(Pn, function (n, o, a, r) {
        t.push(a ? r.replace(In, '$1') : o || n);
      }),
      t
    );
  });
const Mn = En;
function kn(e) {
  return e == null ? '' : Ce(e);
}
function zn(e, t) {
  return J(e) ? e : Wt(e, t) ? [e] : Mn(kn(e));
}
var Dn = 1 / 0;
function jn(e) {
  if (typeof e == 'string' || U(e)) return e;
  var t = e + '';
  return t == '0' && 1 / e == -Dn ? '-0' : t;
}
function Fn(e, t) {
  t = zn(t, e);
  for (var n = 0, o = t.length; e != null && n < o; ) e = e[jn(t[n++])];
  return n && n == o ? e : void 0;
}
function Ln(e, t, n) {
  var o = e == null ? void 0 : Fn(e, t);
  return o === void 0 ? n : o;
}
const ie = (e) => Object.keys(e);
var Rn = {
  name: 'en',
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Clear',
      defaultLabel: 'color picker',
      description: 'current color is {color}. press enter to select a new color.'
    },
    datepicker: {
      now: 'Now',
      today: 'Today',
      cancel: 'Cancel',
      clear: 'Clear',
      confirm: 'OK',
      dateTablePrompt: 'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      selectDate: 'Select date',
      selectTime: 'Select time',
      startDate: 'Start Date',
      startTime: 'Start Time',
      endDate: 'End Date',
      endTime: 'End Time',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      week: 'week',
      weeks: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' },
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    inputNumber: { decrease: 'decrease number', increase: 'increase number' },
    select: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      placeholder: 'Select'
    },
    dropdown: { toggleDropdown: 'Toggle Dropdown' },
    cascader: {
      noMatch: 'No matching data',
      loading: 'Loading',
      placeholder: 'Select',
      noData: 'No data'
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      page: 'Page',
      prev: 'Go to previous page',
      next: 'Go to next page',
      currentPage: 'page {pager}',
      prevPages: 'Previous {pager} pages',
      nextPages: 'Next {pager} pages',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details'
    },
    dialog: { close: 'Close this dialog' },
    drawer: { close: 'Close this dialog' },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input',
      close: 'Close this dialog'
    },
    upload: {
      deleteTip: 'press delete to remove',
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue'
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value'
    },
    table: {
      emptyText: 'No Data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All',
      sumText: 'Sum'
    },
    tree: { emptyText: 'No Data' },
    transfer: {
      noMatch: 'No matching data',
      noData: 'No data',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Enter keyword',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} checked'
    },
    image: { error: 'FAILED' },
    pageHeader: { title: 'Back' },
    popconfirm: { confirmButtonText: 'Yes', cancelButtonText: 'No' }
  }
};
const An = (e) => (t, n) => Bn(t, n, s(e)),
  Bn = (e, t, n) =>
    Ln(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
      var r;
      return `${(r = t == null ? void 0 : t[a]) != null ? r : `{${a}}`}`;
    }),
  Hn = (e) => {
    const t = u(() => s(e).name),
      n = De(e) ? e : v(e);
    return { lang: t, locale: n, t: An(e) };
  },
  we = Symbol('localeContextKey'),
  Gn = (e) => {
    const t = e || ce(we, v());
    return Hn(u(() => t.value || Rn));
  };
je({ type: String, values: Fe, required: !1 });
const Kn = Symbol('size'),
  $e = Symbol(),
  k = v();
function xe(e, t = void 0) {
  const n = de() ? ce($e, k) : k;
  return e
    ? u(() => {
        var o, a;
        return (a = (o = n.value) == null ? void 0 : o[e]) != null ? a : t;
      })
    : n;
}
function Un(e, t) {
  const n = xe(),
    o = ue(
      e,
      u(() => {
        var i;
        return ((i = n.value) == null ? void 0 : i.namespace) || Le;
      })
    ),
    a = Gn(
      u(() => {
        var i;
        return (i = n.value) == null ? void 0 : i.locale;
      })
    ),
    r = Re(
      u(() => {
        var i;
        return ((i = n.value) == null ? void 0 : i.zIndex) || Ae;
      })
    ),
    l = u(() => {
      var i;
      return s(t) || ((i = n.value) == null ? void 0 : i.size) || '';
    });
  return Jn(u(() => s(n) || {})), { ns: o, locale: a, zIndex: r, size: l };
}
const Jn = (e, t, n = !1) => {
    var o;
    const a = !!de(),
      r = a ? xe() : void 0,
      l = (o = t == null ? void 0 : t.provide) != null ? o : a ? Be : void 0;
    if (!l) return;
    const i = u(() => {
      const f = s(e);
      return r != null && r.value ? Yn(r.value, f) : f;
    });
    return (
      l($e, i),
      l(
        we,
        u(() => i.value.locale)
      ),
      l(
        He,
        u(() => i.value.namespace)
      ),
      l(
        Ge,
        u(() => i.value.zIndex)
      ),
      l(Kn, { size: u(() => i.value.size || '') }),
      (n || !k.value) && (k.value = i.value),
      i
    );
  },
  Yn = (e, t) => {
    var n;
    const o = [...new Set([...ie(e), ...ie(t)])],
      a = {};
    for (const r of o) a[r] = (n = t[r]) != null ? n : e[r];
    return a;
  },
  le = {},
  Zn = pe({
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger'],
      default: 'danger'
    }
  }),
  Vn = ['textContent'],
  qn = O({ name: 'ElBadge' }),
  Wn = O({
    ...qn,
    props: Zn,
    setup(e, { expose: t }) {
      const n = e,
        o = ue('badge'),
        a = u(() =>
          n.isDot
            ? ''
            : A(n.value) && A(n.max)
            ? n.max < n.value
              ? `${n.max}+`
              : `${n.value}`
            : `${n.value}`
        );
      return (
        t({ content: a }),
        (r, l) => (
          g(),
          M(
            'div',
            { class: m(s(o).b()) },
            [
              H(r.$slots, 'default'),
              z(
                me,
                { name: `${s(o).namespace.value}-zoom-in-center`, persisted: '' },
                {
                  default: E(() => [
                    fe(
                      x(
                        'sup',
                        {
                          class: m([
                            s(o).e('content'),
                            s(o).em('content', r.type),
                            s(o).is('fixed', !!r.$slots.default),
                            s(o).is('dot', r.isDot)
                          ]),
                          textContent: G(s(a))
                        },
                        null,
                        10,
                        Vn
                      ),
                      [[ge, !r.hidden && (s(a) || r.isDot)]]
                    )
                  ]),
                  _: 1
                },
                8,
                ['name']
              )
            ],
            2
          )
        )
      );
    }
  });
var Xn = he(Wn, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue']
]);
const Qn = Ke(Xn),
  Ne = ['success', 'info', 'warning', 'error'],
  d = Je({
    customClass: '',
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: '',
    message: '',
    onClose: void 0,
    showClose: !1,
    type: 'info',
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: ye ? document.body : void 0
  }),
  eo = pe({
    customClass: { type: String, default: d.customClass },
    center: { type: Boolean, default: d.center },
    dangerouslyUseHTMLString: { type: Boolean, default: d.dangerouslyUseHTMLString },
    duration: { type: Number, default: d.duration },
    icon: { type: Ue, default: d.icon },
    id: { type: String, default: d.id },
    message: { type: X([String, Object, Function]), default: d.message },
    onClose: { type: X(Function), required: !1 },
    showClose: { type: Boolean, default: d.showClose },
    type: { type: String, values: Ne, default: d.type },
    offset: { type: Number, default: d.offset },
    zIndex: { type: Number, default: d.zIndex },
    grouping: { type: Boolean, default: d.grouping },
    repeatNum: { type: Number, default: d.repeatNum }
  }),
  to = { destroy: () => !0 },
  p = Ye([]),
  no = (e) => {
    const t = p.findIndex((a) => a.id === e),
      n = p[t];
    let o;
    return t > 0 && (o = p[t - 1]), { current: n, prev: o };
  },
  oo = (e) => {
    const { prev: t } = no(e);
    return t ? t.vm.exposed.bottom.value : 0;
  },
  ao = (e, t) => (p.findIndex((o) => o.id === e) > 0 ? 20 : t),
  ro = ['id'],
  so = ['innerHTML'],
  io = O({ name: 'ElMessage' }),
  lo = O({
    ...io,
    props: eo,
    emits: to,
    setup(e, { expose: t }) {
      const n = e,
        { Close: o } = nt,
        { ns: a, zIndex: r } = Un('message'),
        { currentZIndex: l, nextZIndex: i } = r,
        f = v(),
        T = v(!1),
        S = v(0);
      let F;
      const Pe = u(() => (n.type ? (n.type === 'error' ? 'danger' : n.type) : 'info')),
        Ie = u(() => {
          const c = n.type;
          return { [a.bm('icon', c)]: c && Q[c] };
        }),
        Z = u(() => n.icon || Q[n.type] || ''),
        Ee = u(() => oo(n.id)),
        V = u(() => ao(n.id, n.offset) + Ee.value),
        Me = u(() => S.value + V.value),
        ke = u(() => ({ top: `${V.value}px`, zIndex: l.value }));
      function L() {
        n.duration !== 0 &&
          ({ stop: F } = ot(() => {
            P();
          }, n.duration));
      }
      function q() {
        F == null || F();
      }
      function P() {
        T.value = !1;
      }
      function ze({ code: c }) {
        c === at.esc && P();
      }
      return (
        Ze(() => {
          L(), i(), (T.value = !0);
        }),
        Ve(
          () => n.repeatNum,
          () => {
            q(), L();
          }
        ),
        qe(document, 'keydown', ze),
        We(f, () => {
          S.value = f.value.getBoundingClientRect().height;
        }),
        t({ visible: T, bottom: Me, close: P }),
        (c, W) => (
          g(),
          w(
            me,
            {
              name: s(a).b('fade'),
              onBeforeLeave: c.onClose,
              onAfterLeave: W[0] || (W[0] = (_o) => c.$emit('destroy')),
              persisted: ''
            },
            {
              default: E(() => [
                fe(
                  x(
                    'div',
                    {
                      id: c.id,
                      ref_key: 'messageRef',
                      ref: f,
                      class: m([
                        s(a).b(),
                        { [s(a).m(c.type)]: c.type && !c.icon },
                        s(a).is('center', c.center),
                        s(a).is('closable', c.showClose),
                        c.customClass
                      ]),
                      style: Xe(s(ke)),
                      role: 'alert',
                      onMouseenter: q,
                      onMouseleave: L
                    },
                    [
                      c.repeatNum > 1
                        ? (g(),
                          w(
                            s(Qn),
                            { key: 0, value: c.repeatNum, type: s(Pe), class: m(s(a).e('badge')) },
                            null,
                            8,
                            ['value', 'type', 'class']
                          ))
                        : I('v-if', !0),
                      s(Z)
                        ? (g(),
                          w(
                            s(ee),
                            { key: 1, class: m([s(a).e('icon'), s(Ie)]) },
                            { default: E(() => [(g(), w(Qe(s(Z))))]), _: 1 },
                            8,
                            ['class']
                          ))
                        : I('v-if', !0),
                      H(c.$slots, 'default', {}, () => [
                        c.dangerouslyUseHTMLString
                          ? (g(),
                            M(
                              et,
                              { key: 1 },
                              [
                                I(
                                  " Caution here, message could've been compromised, never use user's input as message "
                                ),
                                x(
                                  'p',
                                  { class: m(s(a).e('content')), innerHTML: c.message },
                                  null,
                                  10,
                                  so
                                )
                              ],
                              2112
                            ))
                          : (g(), M('p', { key: 0, class: m(s(a).e('content')) }, G(c.message), 3))
                      ]),
                      c.showClose
                        ? (g(),
                          w(
                            s(ee),
                            { key: 2, class: m(s(a).e('closeBtn')), onClick: tt(P, ['stop']) },
                            { default: E(() => [z(s(o))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : I('v-if', !0)
                    ],
                    46,
                    ro
                  ),
                  [[ge, T.value]]
                )
              ]),
              _: 3
            },
            8,
            ['name', 'onBeforeLeave']
          )
        )
      );
    }
  });
var co = he(lo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue'
  ]
]);
let uo = 1;
const Oe = (e) => {
    const t = !e || te(e) || ve(e) || B(e) ? { message: e } : e,
      n = { ...d, ...t };
    if (!n.appendTo) n.appendTo = document.body;
    else if (te(n.appendTo)) {
      let o = document.querySelector(n.appendTo);
      rt(o) || (o = document.body), (n.appendTo = o);
    }
    return n;
  },
  po = (e) => {
    const t = p.indexOf(e);
    if (t === -1) return;
    p.splice(t, 1);
    const { handler: n } = e;
    n.close();
  },
  fo = ({ appendTo: e, ...t }, n) => {
    const o = `message_${uo++}`,
      a = t.onClose,
      r = document.createElement('div'),
      l = {
        ...t,
        id: o,
        onClose: () => {
          a == null || a(), po(S);
        },
        onDestroy: () => {
          ne(null, r);
        }
      },
      i = z(
        co,
        l,
        B(l.message) || ve(l.message)
          ? { default: B(l.message) ? l.message : () => l.message }
          : null
      );
    (i.appContext = n || _._context), ne(i, r), e.appendChild(r.firstElementChild);
    const f = i.component,
      S = {
        id: o,
        vnode: i,
        vm: f,
        handler: {
          close: () => {
            f.exposed.visible.value = !1;
          }
        },
        props: i.component.props
      };
    return S;
  },
  _ = (e = {}, t) => {
    if (!ye) return { close: () => {} };
    if (A(le.max) && p.length >= le.max) return { close: () => {} };
    const n = Oe(e);
    if (n.grouping && p.length) {
      const a = p.find(({ vnode: r }) => {
        var l;
        return ((l = r.props) == null ? void 0 : l.message) === n.message;
      });
      if (a) return (a.props.repeatNum += 1), (a.props.type = n.type), a.handler;
    }
    const o = fo(n, t);
    return p.push(o), o.handler;
  };
Ne.forEach((e) => {
  _[e] = (t = {}, n) => {
    const o = Oe(t);
    return _({ ...o, type: e }, n);
  };
});
function go(e) {
  for (const t of p) (!e || e === t.props.type) && t.handler.close();
}
_.closeAll = go;
_._context = null;
const mo = st(_, '$message');
const { copy: ho } = lt(),
  yo = O({
    props: {
      code: { type: String, default: '' },
      language: { type: String, default: null },
      filename: { type: String, default: null },
      highlights: { type: Array, default: () => [] },
      meta: { type: String, default: null }
    },
    setup() {
      const e = it();
      return { linkify: e.markdown && e.markdown.linkify };
    },
    data() {
      return { linkifyRegExp: /(https?:\/\/[^\s\n]+)|(?:[[(](#.+)[\])])/g };
    },
    mounted() {
      if (!this.language && this.linkify) {
        const t = this.$refs.proseCodeRef.querySelector('pre code');
        t && this._replace(t);
      }
    },
    methods: {
      async copy() {
        await ho(this.code),
          mo.success({ message: '复制成功', customClass: 'copy', duration: 1e3 });
      },
      _replace(e) {
        if (e.nodeType === 3) {
          const t = e.textContent || '',
            n = t.replace(this.linkifyRegExp, (o, a, r) =>
              r
                ? `<a href="${r}">${r.replace('#', '')}</a>`
                : `<a target="_blank" href="${a}">${a}</a>`
            );
          e.parentElement && n !== t && (e.parentElement.innerHTML = n);
        }
        if (e.nodeType === 1) {
          if (e.nodeName.toLocaleLowerCase() === 'a') return;
          {
            const t = e.childNodes;
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              this._replace(o);
            }
          }
        }
      }
    }
  });
const vo = { class: 'file-info' };
function bo(e, t, n, o, a, r) {
  const l = ut;
  return (
    g(),
    M(
      'div',
      { ref: 'proseCodeRef', class: m([e.language ? 'lang' : 'no-lang', 'prose-code']) },
      [
        x('div', vo, G(e.filename ? e.filename : e.language), 1),
        H(e.$slots, 'default'),
        x(
          'div',
          {
            title: '复制',
            class: 'copy',
            onClick: t[0] || (t[0] = (...i) => e.copy && e.copy(...i))
          },
          [z(l, { name: 'material-symbols:copy-all-rounded' })]
        )
      ],
      2
    )
  );
}
const To = ct(yo, [['render', bo]]);
export { To as default };
