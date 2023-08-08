import u from './Link.6c7650ab.js';
import {
  b as l,
  e as f,
  h as i,
  o,
  c as a,
  w as p,
  r as m,
  u as s,
  f as d,
  i as h
} from './entry.73671b33.js';
const y = l({
  __name: 'ProseA',
  props: {
    href: { type: String, default: '' },
    target: { type: String, default: void 0, required: !1 }
  },
  setup(t) {
    const r = t,
      n = f(() => {
        if (r.target && r.target !== '_self') return !0;
        const e = r.href.replace(/(^['"])|(['"]$)/g, '');
        return e === '' || i(e, { acceptRelative: !0 });
      });
    return (e, g) => {
      const c = u,
        _ = h;
      return (
        o(),
        a(
          _,
          { class: 'prose-a', href: t.href, target: s(n) ? '_blank' : t.target },
          {
            default: p(() => [
              m(e.$slots, 'default'),
              s(n)
                ? (o(), a(c, { key: 0, class: 'external-icon', width: '0.8em', height: '0.8em' }))
                : d('', !0)
            ]),
            _: 3
          },
          8,
          ['href', 'target']
        )
      );
    };
  }
});
export { y as default };
