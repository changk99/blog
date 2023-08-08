import { b as t, o, j as s, p as a, k as c, l as n, m as _ } from './entry.73671b33.js';
const h = (e) => (a('data-v-b5945cb7'), (e = e()), c(), e),
  i = ['width', 'height'],
  l = h(() =>
    n(
      'path',
      {
        fill: 'currentColor',
        d: 'M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z'
      },
      null,
      -1
    )
  ),
  d = [l],
  p = t({
    __name: 'Link',
    props: { width: null, height: null },
    setup(e) {
      return (r, u) => (
        o(),
        s(
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
          d,
          8,
          i
        )
      );
    }
  });
const m = _(p, [['__scopeId', 'data-v-b5945cb7']]);
export { m as default };
