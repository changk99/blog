import r from './ContentSlot.38ae3797.js';
import { b as o, ap as u, e as f, F as p } from './entry.73671b33.js';
const i = o({
  name: 'Markdown',
  extends: r,
  setup(t) {
    const { parent: e } = p(),
      { between: n, default: a } = u(),
      s = f(() => (typeof t.unwrap == 'string' ? t.unwrap.split(' ') : ['*']));
    return { fallbackSlot: a, tags: s, between: n, parent: e };
  }
});
export { i as default };
