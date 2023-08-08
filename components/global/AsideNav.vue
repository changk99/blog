<template>
  <nav class="nav" ref="asideNavRef">
    <ClientOnly>
      <Teleport to="body">
        <div
          class="open-menu"
          @click="change"
          :class="{
            open: isOpen
          }"
          v-show="isShowOpenMenuIcon"
        >
          <Icon
            class="toggle-icon"
            name="material-symbols:keyboard-double-arrow-right-rounded"
          ></Icon>
        </div>
      </Teleport>
    </ClientOnly>
    <el-menu @click="linkClick" ref="menuRef" class="aside-nav">
      <SubItem :data="navItem" v-for="navItem in menuData" :key="navItem._path"></SubItem>
      <IconsLoading :loading="loading"></IconsLoading>
      <el-divider></el-divider>
      <el-menu-item :index="navItem._path" v-for="navItem in staticMenuData" :key="navItem._path">
        <NuxtLink :to="navItem._path">{{ navItem.title }}</NuxtLink>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';
import type { ElMenu } from 'element-plus';

const appConfig = useAppConfig();
const route = useRoute();
const menuData = ref<NavItem[]>([]);
const menuRef = ref();
const asideNavRef = ref<HTMLElement>();
const staticMenuData = ref<NavItem[]>([
  {
    _path: '/test',
    title: 'markdown'
  }
]);
// 缓存已经获取到的目录
const menuCache = new Map<string, NavItem[]>();

const isOpen = ref(true);
const loading = ref(false);
const emits = defineEmits<{
  (name: 'open'): void;
  (name: 'close'): void;
}>();

const isShowOpenMenuIcon = computed(() => {
  return (staticMenuData.value.length > 0 || menuData.value.length > 0) && route.path !== '/';
});

function change() {
  if (isOpen.value) {
    isOpen.value = false;
    emits('close');
  } else {
    isOpen.value = true;
    emits('open');
  }
}

function linkClick(event: PointerEvent) {
  if (event.target) {
    if ((event.target as HTMLElement).tagName.toLowerCase() === 'a') {
      change();
    }
  }
}

watch(
  route,
  async () => {
    if (appConfig.nav.excludeAsidePathRefresh.includes(route.path)) {
      return;
    }
    const topDir = getTopDir(route.path);
    let navigationInfo: NavItem[] = [];
    // 如果顶级路径发生变化更新侧边栏目录
    if (!menuCache.has(topDir)) {
      loading.value = true;
      navigationInfo = await fetchContentNavigation(queryContent(topDir));
      loading.value = false;
      menuCache.set(topDir, navigationInfo);
    } else {
      navigationInfo = menuCache.get(topDir) ?? [];
    }
    if (navigationInfo[0]) {
      menuData.value = navigationInfo[0].children || [];
    }
    if (menuData.value.length === 0) {
      return;
    }
    nextTick(() => {
      if (menuRef.value) {
        const dirPath = getDirPath(route.path);
        // 如果该路径的上级和顶级路径一致,表明该路径不会被折叠。否则是折叠的,折叠的话需要打开
        if (dirPath !== topDir) {
          menuRef.value.open(dirPath);
        }
      }
      nextTick(() => {
        if (asideNavRef.value) {
          const target = asideNavRef.value.querySelector(
            '.router-link-exact-active'
          ) as HTMLElement;
          const scrollTarget = document.querySelector('.left-aside') as HTMLElement;
          if (target) {
            const distance = getScrollDistance(target, scrollTarget);
            scrollTarget?.scrollTo({
              top: distance,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  },
  {
    immediate: true
  }
);

onMounted(() => {
  if (asideNavRef.value) {
    onClickOutside(asideNavRef.value, (event) => {
      if (isOpen.value && !(event.target as HTMLElement).closest('.open-menu')) {
        isOpen.value = false;
        emits('close');
      }
    });
  }
});
</script>

<style lang="scss">
.aside-nav {
  --el-menu-item-height: 44px;
  --el-menu-base-level-padding: 20px;
  --el-menu-level-padding: 1em;
  --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
  padding-top: 1em;
  a {
    text-decoration: none;
    color: var(--blog-text-2);
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
  }
  a:hover {
    color: var(--blog-text-1);
  }
  a.router-link-active {
    color: var(--blog-brand-light);
  }
  .el-menu-item {
    display: flex;
    cursor: auto;
    margin: 0;
    font-size: 12px;
  }
  .el-divider--horizontal {
    margin: 12px 0;
  }
}

.open-menu {
  position: fixed;
  top: calc(var(--navigation-bar-height));
  padding: 0.5em;
  padding-top: 0.1em;
  left: 0;
  z-index: 101;
  cursor: pointer;
  opacity: 0.9;
  color: var(--blog-brand-light);
  transition: opacity 0.3s;
  .toggle-icon {
    transition: transform 0.5s;
    transform: rotate(45deg);
  }
  &.open {
    .toggle-icon {
      transform: rotate(215deg);
    }
  }
}

.scrolling .open-menu {
  opacity: 0;
}

@media screen and (min-width: $viewport-width-s) {
  .open-menu {
    display: none;
  }
}
</style>
