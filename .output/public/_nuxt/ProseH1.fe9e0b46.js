import {
  b as c,
  ag as l,
  o,
  j as _,
  u as i,
  c as u,
  w as p,
  r as a,
  i as r,
  p as f,
  k as m,
  l as h,
  m as g
} from './entry.73671b33.js';
const v = (e) => (f('data-v-d59459f4'), (e = e()), m(), e),
  x = ['id'],
  k = v(() => h('span', { class: 'symbol' }, '#', -1)),
  y = c({
    __name: 'ProseH1',
    props: { id: null },
    setup(e) {
      const { anchorLinks: t } = l().public.content,
        d = (t == null ? void 0 : t.depth) >= 3 && !(t != null && t.exclude.includes(3));
      return (s, I) => {
        const n = r;
        return (
          o(),
          _(
            'h3',
            { class: 'title', id: e.id },
            [
              e.id && i(d)
                ? (o(),
                  u(
                    n,
                    { key: 0, class: 'link', href: `#${e.id}` },
                    { default: p(() => [a(s.$slots, 'default', {}, void 0, !0), k]), _: 3 },
                    8,
                    ['href']
                  ))
                : a(s.$slots, 'default', { key: 1 }, void 0, !0)
            ],
            8,
            x
          )
        );
      };
    }
  });
const b = g(y, [['__scopeId', 'data-v-d59459f4']]);
export { b as default };
