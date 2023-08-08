<template>
  <div class="outline" ref="asideNavRef">
    <ClientOnly>
      <Teleport to="body">
        <div
          class="open-toc"
          @click.stop="change"
          :class="{
            open: isOpen
          }"
          v-show="toc.length > 0"
          ref="openTocIconRef"
        >
          <Icon
            class="toggle-icon"
            name="material-symbols:keyboard-double-arrow-right-rounded"
          ></Icon>
          <span class="text">目录</span>
        </div>
      </Teleport>
    </ClientOnly>
    <h3 class="title">目录</h3>
    <nav class="nav" ref="navRef">
      <Toc :toc="toc" :level="1"></Toc>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { Toc } from '~/hooks/useToc';

const { toc, activeId } = useToc();
const navRef = ref<HTMLDivElement>();
const asideNavRef = ref<HTMLDivElement>();
const openTocIconRef = ref<HTMLDivElement>();
const isOpen = ref(false);

const emits = defineEmits<{
  (name: 'tocChange', toc: Toc[]): void;
  (name: 'open'): void;
  (name: 'close'): void;
}>();

watch(
  toc,
  () => {
    emits('tocChange', toc.value);
  },
  {
    immediate: true
  }
);

function change() {
  if (isOpen.value) {
    isOpen.value = false;
    emits('close');
  } else {
    isOpen.value = true;
    emits('open');
  }
}

watch(activeId, () => {
  nextTick(() => {
    if (activeId.value && navRef.value) {
      const activeAElement = navRef.value.querySelector(`[href$='#${activeId.value}']`);
      if (activeAElement) {
        const aElements = navRef.value.querySelectorAll('a');
        for (let index = 0; index < aElements.length; index++) {
          const element = aElements[index];
          element.parentElement?.classList.toggle('active', false);
        }
        activeAElement.parentElement?.classList.add('active');
        // 定位到可见
        nextTick(() => {
          const scrollTarget = document.querySelector('.right-aside') as HTMLElement;
          const distance = getScrollDistance(activeAElement as HTMLElement, scrollTarget);
          scrollTarget?.scrollTo({
            top: distance,
            behavior: 'smooth'
          });
        });
      }
    }
  });
});

onMounted(() => {
  if (asideNavRef.value) {
    onClickOutside(asideNavRef.value, (event) => {
      // closest 防止双重切换
      if (isOpen.value && !(event.target as HTMLElement).closest('.open-toc')) {
        isOpen.value = false;
        emits('close');
      }
    });
  }
});
</script>

<style scoped lang="scss">
.outline {
  padding: 1em;
  padding-bottom: 50px;
}
.title {
  color: var(--blog-text-2);
}

.open-toc {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: calc(var(--navigation-bar-height));
  padding: 0.5em;
  right: 0;
  z-index: 101;
  cursor: pointer;
  opacity: 0.9;
  color: var(--blog-brand-light);
  transition: opacity 0.3s;
  .text {
    transition: opacity 0.5s;
    font-weight: bolder;
  }
  .toggle-icon {
    transition: transform 0.5s;
    transform: rotateY(180deg);
  }
  &.open {
    .text {
      opacity: 0;
    }
    .toggle-icon {
      transform: rotateY(0deg);
    }
  }
  .text {
    font-size: 0.7em;
  }
}

.scrolling .open-toc {
  opacity: 0;
}

@media screen and (min-width: $viewport-width-m) {
  .open-toc {
    display: none;
  }
}
</style>
