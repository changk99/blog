import { b as a, e as i, aE as n, ag as c, o, j as u, u as h } from './entry.73671b33.js';
const d = ['src', 'alt', 'width', 'height'],
  g = a({
    __name: 'ProseImg',
    props: {
      src: { type: String, default: '' },
      alt: { type: String, default: '' },
      width: { type: [String, Number], default: void 0 },
      height: { type: [String, Number], default: void 0 }
    },
    setup(t) {
      const e = t,
        s = i(() => {
          var r;
          return (r = e.src) != null && r.startsWith('/') && !e.src.startsWith('//')
            ? n(e.src, c().app.baseURL)
            : e.src;
        });
      return (r, l) => (
        o(), u('img', { src: h(s), alt: t.alt, width: t.width, height: t.height }, null, 8, d)
      );
    }
  });
export { g as default };
