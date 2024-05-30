export interface Toc {
  depth: number;
  title: string;
  id: string;
  level: number;
  children: Toc[];
  parent: Toc | null;
}

type Head = Omit<Toc, 'children'>;

export function useToc() {
  const nuxtApp = useNuxtApp();
  const appConifg = useAppConfig();
  const { depth, searchDepth } = appConifg.toc;

  const toc = ref<Toc[]>([]);
  const ids = ref<string[]>([]);
  const activeId = ref('');

  const { y } = useScroll(window, {
    throttle: 100
  });
  watch(y, () => {
    activeId.value = getActiveId(ids.value);
  });
  watch(ids, () => {
    // 当没有滚动时也应该获取一次
    activeId.value = getActiveId(ids.value);
  });

  function getActiveId(ids: string[]) {
    if (document && ids.length > 0) {
      const offsetTop = 50;
      const lineHeight = 30;
      const viewportHeight = document.documentElement.clientHeight;
      const container = document.querySelector('.content-doc');
      const headElements = container?.querySelectorAll(ids.map((id) => `#${id}`).join(','));
      if (headElements) {
        for (let i = 0; i < headElements.length; i++) {
          const headElement = headElements[i];
          const { top } = headElement.getBoundingClientRect();
          if (top >= offsetTop && top < viewportHeight - lineHeight) {
            return headElement.id;
          } else if (top > viewportHeight - lineHeight) {
            if (headElements.item(i - 1)) {
              return headElements.item(i - 1).id;
            } else {
              return '';
            }
          }
        }
        return headElements.item(headElements.length - 1).id;
      }
    }
    return '';
  }

  function buildTocTree<T extends Head>(heads: T[]) {
    const stack: T[] = [];
    const rawToc: Toc[] = [];
    const rawIds: string[] = [];
    let currentNode: Toc | null = null;
    while (heads.length > 0) {
      const head = heads.shift() as T;
      while (stack.length > 0) {
        const top = stack[stack.length - 1];
        if (head.level > top.level) {
          break;
        }
        stack.pop();
        if (top.depth <= searchDepth + depth) {
          currentNode = (currentNode && currentNode.parent) || null;
        }
      }
      if (stack.length === 0) {
        head.depth = 1;
      } else {
        const top = stack[stack.length - 1];
        head.depth = top.depth + 1;
      }
      if (head.depth >= depth && head.depth <= searchDepth + depth) {
        rawIds.push(head.id);
        currentNode = {
          ...head,
          children: [],
          parent: currentNode
        };
        if (currentNode && head.depth === depth) {
          rawToc.push(currentNode);
        } else {
          if (currentNode.parent) {
            currentNode.parent.children.push(currentNode);
          }
        }
      }
      stack.push(head);
    }
    return {
      rawToc,
      rawIds
    };
  }

  function getToc() {
    if (document) {
      const container = document.querySelector('.content-doc');
      if (container) {
        const headElements = container.querySelectorAll('h1,h2,h3,h4,h5,h5,h6');
        const heads: Array<Omit<Toc, 'children'>> = [];
        for (const headElement of headElements) {
          const head: Head = {} as Head;
          const aElement = headElement.querySelector('a');
          if (!aElement) {
            continue;
          }
          head.id = headElement.id;
          head.title = aElement.querySelector('.content')?.textContent || head.id;
          head.level = +headElement.tagName.toLocaleLowerCase().replace('h', '');
          heads.push(head);
        }
        const { rawToc, rawIds } = buildTocTree(heads);
        toc.value = rawToc;
        ids.value = rawIds;
      }
    }
  }
  // 文章改变时刷新 toc 和 ids
  nuxtApp.hook('page:transition:finish', getToc);
  onUnmounted(() => {
    nuxtApp.hooks.removeHook('page:transition:finish', getToc);
  });
  onMounted(() => {
    getToc();
  });
  return {
    toc,
    ids,
    activeId
  };
}
