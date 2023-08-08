import { b as n, aq as e } from './entry.73671b33.js';
const r = n({
  name: 'DocumentDrivenEmpty',
  props: { value: { type: Object, required: !0 } },
  render({ value: t }) {
    return e('div', void 0, [
      e('p', 'Document is empty'),
      e('p', `Add content to it by opening ${t._source}/${t._file} file.`)
    ]);
  }
});
export { r as default };
