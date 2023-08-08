import {
  b as m,
  aF as d,
  ad as x,
  e as o,
  o as S,
  j as f,
  $ as z,
  u as a,
  m as I
} from './entry.73671b33.js';
const y = m({
  __name: 'IconCSS',
  props: { name: { type: String, required: !0 }, size: { type: String, default: '' } },
  setup(_) {
    var r;
    const s = _;
    d((n) => ({ '28f72a40': a(p) }));
    const e = x();
    (r = e == null ? void 0 : e.nuxtIcon) != null && r.aliases;
    const l = o(() => {
        var n;
        return (
          (((n = e == null ? void 0 : e.nuxtIcon) == null ? void 0 : n.aliases) || {})[s.name] ||
          s.name
        );
      }),
      p = o(() => `url('https://api.iconify.design/${l.value.replace(':', '/')}.svg')`),
      c = o(() => {
        var t, i, u;
        if (
          !s.size &&
          typeof ((t = e.nuxtIcon) == null ? void 0 : t.size) == 'boolean' &&
          !((i = e.nuxtIcon) != null && i.size)
        )
          return;
        const n = s.size || ((u = e.nuxtIcon) == null ? void 0 : u.size) || '1em';
        return String(Number(n)) === n ? `${n}px` : n;
      });
    return (n, t) => (S(), f('span', { style: z({ width: a(c), height: a(c) }) }, null, 4));
  }
});
const g = I(y, [['__scopeId', 'data-v-38965564']]);
export { g as default };
