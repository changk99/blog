<script lang="ts">
import { defineComponent } from '#imports';
const { copy } = useClipboard();
export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  setup() {
    const appConfig = useAppConfig();
    return {
      linkify: appConfig.markdown && appConfig.markdown.linkify
    };
  },
  data() {
    return {
      linkifyRegExp: /(https?:\/\/[^\s\n)\]]+)|(?:[[(](#.+)[\])])|(?:[[(](\/[^\s\n]+)[\])])/g
    };
  },
  mounted() {
    if (!this.language && this.linkify) {
      const proseCodeRef = this.$refs.proseCodeRef as HTMLDivElement;
      const code = proseCodeRef.querySelector('pre code');
      if (code) {
        this._replace(code);
      }
      proseCodeRef.addEventListener('click', this._navigate);
    }
  },
  unmounted() {
    if (this.$refs.proseCodeRef) {
      const proseCodeRef = this.$refs.proseCodeRef as HTMLDivElement;
      proseCodeRef.removeEventListener('click', this._navigate);
    }
  },
  methods: {
    async copy() {
      await copy(this.code);
      ElMessage.success({
        message: '复制成功',
        customClass: 'copy',
        duration: 1000
      });
    },
    _replace(node: Node) {
      if (node.nodeType === 3) {
        const text = node.textContent || '';
        const newText = text.replace(this.linkifyRegExp, (match, href, hash, path) => {
          if (hash) {
            return `<a href="${hash}">${hash.replace('#', '')}</a>`;
          }
          if (path) {
            return `(<a href="${path}">${path}</a>)`;
          }
          return `<a target="_blank" href="${href}">${href}</a>`;
        });
        if (node.parentElement && newText !== text) {
          node.parentElement.innerHTML = newText;
        }
      }
      if (node.nodeType === 1) {
        if (node.nodeName.toLocaleLowerCase() === 'a') {
          return;
        } else {
          const nodes = node.childNodes;
          for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            this._replace(node);
          }
        }
      }
    },
    _navigate(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target && target.tagName.toLocaleLowerCase() === 'a') {
        const href = (target as HTMLAnchorElement).getAttribute('href') || '';
        const targetAttribute = (target as HTMLAnchorElement).getAttribute('target') || '_self';
        if (targetAttribute !== '_blank') {
          event.preventDefault();
          this.$router.push(href);
        }
      }
    }
  }
});
</script>

<template>
  <div ref="proseCodeRef" :class="language ? 'lang' : 'no-lang'" class="prose-code">
    <div class="file-info">{{ filename ? filename : language }}</div>
    <slot />
    <div title="复制" class="copy" @click="copy">
      <ClientOnlyIcon name="material-symbols:copy-all-rounded"></ClientOnlyIcon>
    </div>
  </div>
</template>

<style lang="scss">
.prose-code {
  margin: 1em 0;
  padding: 1em;
  box-sizing: border-box;
  background-color: var(--blog-gray-light-5);
  border: 1px solid var(--blog-border-color-3);
  border-radius: var(--blog-radius-2);
  position: relative;
  &.lang {
    background-color: var(--blog-black-regular);
    padding-top: 1.8em;
    padding-bottom: 0;
    padding-right: 1.6em;
    .file-info {
      color: var(--blog-text-dark-2);
      font-size: 12px;
      position: absolute;
      right: 1em;
      top: 0.5em;
    }
    pre code {
      white-space: pre;
      word-wrap: normal;
      font-size: 0.9em;
      line-height: 1.35;
      color: rgba(255, 255, 255, 0.87);
    }
  }
  &.no-lang {
    padding-top: 1.2em;
    padding-bottom: 0.2em;
    pre {
      font-family: inherit;
      code {
        font-family: inherit;
        white-space: pre-wrap;
        padding-bottom: 0.8em;
      }
    }
    a {
      position: relative;
      text-decoration: none;
      vertical-align: baseline;
      padding: 0 0.2em;
      color: var(--blog-brand-light);
    }
    a:visited {
      color: var(--blog-brand-light);
    }
    a:hover {
      color: var(--blog-brand-highlight);
    }
    a:active {
      color: var(--blog-brand-light);
    }
  }

  pre {
    margin: 0;
    code {
      display: inline-block;
      white-space: normal;
      width: 100%;
      overflow: auto;
      padding-bottom: 1.5em;
    }
  }

  .copy {
    position: absolute;
    right: 0.2em;
    bottom: 0.5em;
    opacity: 0.5;
    cursor: pointer;
    color: var(--blog-text-dark-1);
  }
  &:hover .copy {
    opacity: 1;
  }
}

pre code .line {
  display: block;
  min-height: 1rem;
  line-height: 1.6;
}

.dark .prose-code {
  &.no-lang {
    background-color: var(--blog-black-regular);
  }
}

.el-message--success.copy {
  white-space: nowrap;
  width: auto;
  --el-message-bg-color: var(--blog-bg-soft);
  --el-message-border-color: var(--blog-border-color-2);
  --el-message-text-color: var(--blog-text-2);
}

.prose-code {
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--blog-black-soft);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--blog-black-mute);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
  }
}
</style>
