const f = /\d/,
  l = ['-', '_', '/', '.'];
function h(e = '') {
  if (!f.test(e)) return e.toUpperCase() === e;
}
function C(e, o) {
  const c = o ?? l,
    s = [];
  if (!e || typeof e != 'string') return s;
  let t = '',
    p,
    u;
  for (const r of e) {
    const i = c.includes(r);
    if (i === !0) {
      s.push(t), (t = ''), (p = void 0);
      continue;
    }
    const n = h(r);
    if (u === !1) {
      if (p === !1 && n === !0) {
        s.push(t), (t = r), (p = n);
        continue;
      }
      if (p === !0 && n === !1 && t.length > 1) {
        const a = t[t.length - 1];
        s.push(t.slice(0, Math.max(0, t.length - 1))), (t = a + r), (p = n);
        continue;
      }
    }
    (t += r), (p = n), (u = i);
  }
  return s.push(t), s;
}
function U(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : '';
}
function R(e) {
  return e ? (Array.isArray(e) ? e : C(e)).map((o) => U(o)).join('') : '';
}
export { R as p };
