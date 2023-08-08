import B from './ContentDoc.75602f47.js';
import {
  b as I,
  as as P,
  aG as S,
  s as x,
  e as w,
  aH as k,
  ay as c,
  j as T,
  I as l,
  l as e,
  L as i,
  u as t,
  c as g,
  w as D,
  f as b,
  aI as C,
  i as V,
  o as p,
  af as z,
  m as L
} from './entry.73671b33.js';
import './ContentRenderer.d2a8361e.js';
import './ContentRendererMarkdown.49e93fa9.js';
import './index.a6ef77ff.js';
import './ContentQuery.a7d28ec3.js';
const O = { class: 'content-doc' },
  W = { class: 'nav' },
  j = { class: 'nav-item nav-item-before' },
  q = { class: 'dir-title' },
  A = { class: 'title' },
  E = { class: 'nav-item nav-item-after' },
  G = { class: 'dir-title' },
  H = { class: 'title' },
  R = I({
    __name: '[...slug]',
    async setup($) {
      let n, d;
      const r = P(),
        [s, a] =
          (([n, d] = S(() =>
            c().only(['_path', 'title', '_dir']).where({ _type: 'markdown' }).findSurround(r.path)
          )),
          (n = await n),
          d(),
          n),
        m = x(),
        h = x(),
        u = w(() => s && s._path.startsWith(C(r.path))),
        f = w(() => a && a._path.startsWith(C(r.path)));
      if (u.value) {
        const o = k(s._path, '_dir');
        c()
          .only('title')
          .where({ _path: o })
          .findOne()
          .then(({ title: _ }) => {
            m.value = _;
          });
      }
      if (f.value) {
        const o = k(a._path, '_dir');
        c()
          .only('title')
          .where({ _path: o })
          .findOne()
          .then(({ title: _ }) => {
            h.value = _;
          });
      }
      return (o, _) => {
        const N = B,
          v = z,
          y = V;
        return (
          p(),
          T('div', O, [
            l(N),
            e('nav', W, [
              e('div', j, [
                e('div', q, i(t(m)), 1),
                t(u)
                  ? (p(),
                    g(
                      y,
                      { key: 0, class: 'link', to: t(s)._path },
                      {
                        default: D(() => [
                          l(v, {
                            size: '1em',
                            style: { transform: 'scale(-1, 1)' },
                            name: 'ic:baseline-arrow-forward'
                          }),
                          e('span', A, i(t(s).title), 1)
                        ]),
                        _: 1
                      },
                      8,
                      ['to']
                    ))
                  : b('', !0)
              ]),
              e('div', E, [
                e('div', G, i(t(h)), 1),
                t(f)
                  ? (p(),
                    g(
                      y,
                      { key: 0, class: 'link', to: t(a)._path },
                      {
                        default: D(() => [
                          e('span', H, i(t(a).title), 1),
                          l(v, { size: '1em', name: 'ic:baseline-arrow-forward' })
                        ]),
                        _: 1
                      },
                      8,
                      ['to']
                    ))
                  : b('', !0)
              ])
            ])
          ])
        );
      };
    }
  });
const X = L(R, [['__scopeId', 'data-v-dfb18308']]);
export { X as default };
