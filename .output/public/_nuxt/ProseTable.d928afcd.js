import {
  G as Y,
  N as j,
  b as L,
  q as ee,
  y as F,
  ah as te,
  s as u,
  e as w,
  ai as le,
  Y as W,
  aj as K,
  o as S,
  c as x,
  w as D,
  J as ae,
  l as B,
  K as H,
  u as d,
  $ as X,
  M as se,
  T as oe,
  S as re,
  j as J,
  I as U,
  a2 as ne,
  Q as ie,
  H as E,
  ak as I,
  X as V,
  Z as ce,
  al as q,
  C as ue,
  am as fe,
  W as ve,
  an as me,
  r as Q,
  a1 as de,
  f as he,
  ao as pe,
  O as be,
  m as ye
} from './entry.73671b33.js';
const g = 4,
  ge = {
    vertical: {
      offset: 'offsetHeight',
      scroll: 'scrollTop',
      scrollSize: 'scrollHeight',
      size: 'height',
      key: 'vertical',
      axis: 'Y',
      client: 'clientY',
      direction: 'top'
    },
    horizontal: {
      offset: 'offsetWidth',
      scroll: 'scrollLeft',
      scrollSize: 'scrollWidth',
      size: 'width',
      key: 'horizontal',
      axis: 'X',
      client: 'clientX',
      direction: 'left'
    }
  },
  we = ({ move: f, size: c, bar: r }) => ({ [r.size]: c, transform: `translate${r.axis}(${f}%)` }),
  Z = Symbol('scrollbarContextKey'),
  Se = Y({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: { type: Number, required: !0 },
    always: Boolean
  }),
  _e = 'Thumb',
  ze = L({
    __name: 'thumb',
    props: Se,
    setup(f) {
      const c = f,
        r = ee(Z),
        a = F('scrollbar');
      r || te(_e, 'can not inject scrollbar context');
      const i = u(),
        v = u(),
        o = u({}),
        m = u(!1);
      let l = !1,
        p = !1,
        b = re ? document.onselectstart : null;
      const t = w(() => ge[c.vertical ? 'vertical' : 'horizontal']),
        _ = w(() => we({ size: c.size, move: c.move, bar: t.value })),
        z = w(
          () =>
            i.value[t.value.offset] ** 2 /
            r.wrapElement[t.value.scrollSize] /
            c.ratio /
            v.value[t.value.offset]
        ),
        T = (s) => {
          var e;
          if ((s.stopPropagation(), s.ctrlKey || [1, 2].includes(s.button))) return;
          (e = window.getSelection()) == null || e.removeAllRanges(), O(s);
          const n = s.currentTarget;
          n &&
            (o.value[t.value.axis] =
              n[t.value.offset] -
              (s[t.value.client] - n.getBoundingClientRect()[t.value.direction]));
        },
        M = (s) => {
          if (!v.value || !i.value || !r.wrapElement) return;
          const e = Math.abs(
              s.target.getBoundingClientRect()[t.value.direction] - s[t.value.client]
            ),
            n = v.value[t.value.offset] / 2,
            h = ((e - n) * 100 * z.value) / i.value[t.value.offset];
          r.wrapElement[t.value.scroll] = (h * r.wrapElement[t.value.scrollSize]) / 100;
        },
        O = (s) => {
          s.stopImmediatePropagation(),
            (l = !0),
            document.addEventListener('mousemove', C),
            document.addEventListener('mouseup', y),
            (b = document.onselectstart),
            (document.onselectstart = () => !1);
        },
        C = (s) => {
          if (!i.value || !v.value || l === !1) return;
          const e = o.value[t.value.axis];
          if (!e) return;
          const n = (i.value.getBoundingClientRect()[t.value.direction] - s[t.value.client]) * -1,
            h = v.value[t.value.offset] - e,
            k = ((n - h) * 100 * z.value) / i.value[t.value.offset];
          r.wrapElement[t.value.scroll] = (k * r.wrapElement[t.value.scrollSize]) / 100;
        },
        y = () => {
          (l = !1),
            (o.value[t.value.axis] = 0),
            document.removeEventListener('mousemove', C),
            document.removeEventListener('mouseup', y),
            N(),
            p && (m.value = !1);
        },
        $ = () => {
          (p = !1), (m.value = !!c.size);
        },
        A = () => {
          (p = !0), (m.value = l);
        };
      le(() => {
        N(), document.removeEventListener('mouseup', y);
      });
      const N = () => {
        document.onselectstart !== b && (document.onselectstart = b);
      };
      return (
        W(K(r, 'scrollbarElement'), 'mousemove', $),
        W(K(r, 'scrollbarElement'), 'mouseleave', A),
        (s, e) => (
          S(),
          x(
            oe,
            { name: d(a).b('fade'), persisted: '' },
            {
              default: D(() => [
                ae(
                  B(
                    'div',
                    {
                      ref_key: 'instance',
                      ref: i,
                      class: H([d(a).e('bar'), d(a).is(d(t).key)]),
                      onMousedown: M
                    },
                    [
                      B(
                        'div',
                        {
                          ref_key: 'thumb',
                          ref: v,
                          class: H(d(a).e('thumb')),
                          style: X(d(_)),
                          onMousedown: T
                        },
                        null,
                        38
                      )
                    ],
                    34
                  ),
                  [[se, s.always || m.value]]
                )
              ]),
              _: 1
            },
            8,
            ['name']
          )
        )
      );
    }
  });
var G = j(ze, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue'
  ]
]);
const ke = Y({
    always: { type: Boolean, default: !0 },
    width: String,
    height: String,
    ratioX: { type: Number, default: 1 },
    ratioY: { type: Number, default: 1 }
  }),
  Ee = L({
    __name: 'bar',
    props: ke,
    setup(f, { expose: c }) {
      const r = f,
        a = u(0),
        i = u(0);
      return (
        c({
          handleScroll: (o) => {
            if (o) {
              const m = o.offsetHeight - g,
                l = o.offsetWidth - g;
              (i.value = ((o.scrollTop * 100) / m) * r.ratioY),
                (a.value = ((o.scrollLeft * 100) / l) * r.ratioX);
            }
          }
        }),
        (o, m) => (
          S(),
          J(
            ne,
            null,
            [
              U(G, { move: a.value, ratio: o.ratioX, size: o.width, always: o.always }, null, 8, [
                'move',
                'ratio',
                'size',
                'always'
              ]),
              U(
                G,
                { move: i.value, ratio: o.ratioY, size: o.height, vertical: '', always: o.always },
                null,
                8,
                ['move', 'ratio', 'size', 'always']
              )
            ],
            64
          )
        )
      );
    }
  });
var He = j(Ee, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue'
  ]
]);
const Te = Y({
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: { type: Boolean, default: !1 },
    wrapStyle: { type: ie([String, Object, Array]), default: '' },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array, Object], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: Boolean,
    minSize: { type: Number, default: 20 }
  }),
  Ce = { scroll: ({ scrollTop: f, scrollLeft: c }) => [f, c].every(E) },
  Ne = 'ElScrollbar',
  Pe = L({ name: Ne }),
  Re = L({
    ...Pe,
    props: Te,
    emits: Ce,
    setup(f, { expose: c, emit: r }) {
      const a = f,
        i = F('scrollbar');
      let v, o;
      const m = u(),
        l = u(),
        p = u(),
        b = u('0'),
        t = u('0'),
        _ = u(),
        z = u(1),
        T = u(1),
        M = w(() => {
          const e = {};
          return (
            a.height && (e.height = I(a.height)),
            a.maxHeight && (e.maxHeight = I(a.maxHeight)),
            [a.wrapStyle, e]
          );
        }),
        O = w(() => [a.wrapClass, i.e('wrap'), { [i.em('wrap', 'hidden-default')]: !a.native }]),
        C = w(() => [i.e('view'), a.viewClass]),
        y = () => {
          var e;
          l.value &&
            ((e = _.value) == null || e.handleScroll(l.value),
            r('scroll', { scrollTop: l.value.scrollTop, scrollLeft: l.value.scrollLeft }));
        };
      function $(e, n) {
        pe(e) ? l.value.scrollTo(e) : E(e) && E(n) && l.value.scrollTo(e, n);
      }
      const A = (e) => {
          E(e) && (l.value.scrollTop = e);
        },
        N = (e) => {
          E(e) && (l.value.scrollLeft = e);
        },
        s = () => {
          if (!l.value) return;
          const e = l.value.offsetHeight - g,
            n = l.value.offsetWidth - g,
            h = e ** 2 / l.value.scrollHeight,
            k = n ** 2 / l.value.scrollWidth,
            P = Math.max(h, a.minSize),
            R = Math.max(k, a.minSize);
          (z.value = h / (e - h) / (P / (e - P))),
            (T.value = k / (n - k) / (R / (n - R))),
            (t.value = P + g < e ? `${P}px` : ''),
            (b.value = R + g < n ? `${R}px` : '');
        };
      return (
        V(
          () => a.noresize,
          (e) => {
            e
              ? (v == null || v(), o == null || o())
              : (({ stop: v } = ce(p, s)), (o = W('resize', s)));
          },
          { immediate: !0 }
        ),
        V(
          () => [a.maxHeight, a.height],
          () => {
            a.native ||
              q(() => {
                var e;
                s(), l.value && ((e = _.value) == null || e.handleScroll(l.value));
              });
          }
        ),
        ue(Z, fe({ scrollbarElement: m, wrapElement: l })),
        ve(() => {
          a.native ||
            q(() => {
              s();
            });
        }),
        me(() => s()),
        c({
          wrapRef: l,
          update: s,
          scrollTo: $,
          setScrollTop: A,
          setScrollLeft: N,
          handleScroll: y
        }),
        (e, n) => (
          S(),
          J(
            'div',
            { ref_key: 'scrollbarRef', ref: m, class: H(d(i).b()) },
            [
              B(
                'div',
                { ref_key: 'wrapRef', ref: l, class: H(d(O)), style: X(d(M)), onScroll: y },
                [
                  (S(),
                  x(
                    de(e.tag),
                    { ref_key: 'resizeRef', ref: p, class: H(d(C)), style: X(e.viewStyle) },
                    { default: D(() => [Q(e.$slots, 'default')]), _: 3 },
                    8,
                    ['class', 'style']
                  ))
                ],
                38
              ),
              e.native
                ? he('v-if', !0)
                : (S(),
                  x(
                    He,
                    {
                      key: 0,
                      ref_key: 'barRef',
                      ref: _,
                      height: t.value,
                      width: b.value,
                      always: e.always,
                      'ratio-x': T.value,
                      'ratio-y': z.value
                    },
                    null,
                    8,
                    ['height', 'width', 'always', 'ratio-x', 'ratio-y']
                  ))
            ],
            2
          )
        )
      );
    }
  });
var xe = j(Re, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue'
  ]
]);
const Be = be(xe);
const Le = {};
function Me(f, c) {
  const r = Be;
  return S(), x(r, null, { default: D(() => [B('table', null, [Q(f.$slots, 'default')])]), _: 3 });
}
const $e = ye(Le, [['render', Me]]);
export { $e as default };
