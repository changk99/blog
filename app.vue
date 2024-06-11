<template>
  <header class="header">
    <div
      class="search item"
      :class="{
        'is-focus': isSearchFocus
      }"
    >
      <ArticleSearch @focus="isSearchFocus = true" @blur="isSearchFocus = false"></ArticleSearch>
    </div>
    <HeaderNav class="item"></HeaderNav>
    <ThemeChange title="切换主题" class="item"></ThemeChange>
    <div title="github 仓库" class="item">
      <NuxtLink target="_blank" style="color: unset" :to="config.link.github"
        ><IconsGithub width="1.8em" height="1.8em"></IconsGithub
      ></NuxtLink>
    </div>
    <el-avatar
      @click="goHome"
      title="首页"
      alt="首页"
      class="avatar-home item"
      :size="26"
      :src="avatarUrl"
    />
  </header>
  <div class="container">
    <aside
      class="aside menu"
      v-show="$route.path !== '/'"
      :class="{
        open: isMenuOpen
      }"
    >
      <div class="aside-stick left-aside">
        <AsideNav @open="isMenuOpen = true" @close="isMenuOpen = false"></AsideNav>
      </div>
    </aside>
    <main class="main">
      <NuxtPage></NuxtPage>
    </main>
    <aside
      class="aside article-outline"
      v-show="$route.path !== '/' && !isEmptyToc"
      :class="{
        open: isTocOpen
      }"
    >
      <div class="aside-stick right-aside">
        <ClientOnly>
          <ArticleOutline
            @toc-change="tocChange"
            @open="isTocOpen = true"
            @close="isTocOpen = false"
          ></ArticleOutline>
        </ClientOnly>
      </div>
    </aside>
  </div>
  <footer>
    <Transition name="slide">
      <div class="to-top" v-show="isShowToTopIcon" @click="scrollToTop">
        <ClientOnlyIcon name="ic:twotone-vertical-align-top" size="1.6em"> </ClientOnlyIcon>
      </div>
    </Transition>
  </footer>
  <NuxtLoadingIndicator></NuxtLoadingIndicator>
</template>
<script lang="ts" setup>
import avatarUrl from 'assets/images/changlishe.jpg';
import { Toc } from './hooks/useToc';

const runtimeCofig = useRuntimeConfig();
const config = useAppConfig();

useHead({
  // 提前设置主题,否则会等水合过程才设置会有延迟
  script: [
    {
      src: `${runtimeCofig.app.baseURL}js/theme.js`,
      tagPosition: 'head'
    }
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
    }
  ],
  link: [
    {
      rel: 'icon',
      href: `${runtimeCofig.app.baseURL}favicon.ico`
    }
  ]
});

let scrollTop = ref<number>(0);
const isShowToTopIcon = ref(false);
const isEmptyToc = ref(true);
const isTocOpen = ref(false);
const isMenuOpen = ref(true);
const isSearchFocus = ref(false);

onMounted(() => {
  let prevScrollTopDirections = false;
  const { directions, isScrolling, y } = useScroll(window, {
    throttle: 100,
    behavior: 'smooth'
  });

  scrollTop = y;

  watch(directions, () => {
    if (y.value !== 0 && prevScrollTopDirections && !directions.top) {
      isShowToTopIcon.value = true;
    } else {
      isShowToTopIcon.value = false;
    }
    prevScrollTopDirections = directions.top;
  });

  watch(
    isScrolling,
    () => {
      if (isScrolling.value) {
        document.body.classList.toggle('scrolling', true);
      } else {
        document.body.classList.toggle('scrolling', false);
      }
    },
    {
      immediate: true
    }
  );
});

function tocChange(toc: Toc[]) {
  isEmptyToc.value = toc.length === 0;
}

function goHome() {
  navigateTo('/');
}

function scrollToTop() {
  if (scrollTop.value > 0) {
    scrollTop.value = 0;
  }
}
</script>
<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--blog-bg);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: var(--navigation-bar-height);
  background-image: linear-gradient(
    0deg,
    var(--blog-divider-light),
    var(--blog-divider-light) 1px,
    transparent 1px,
    transparent
  );
  .item {
    margin-right: 12px;
    cursor: pointer;
  }
  .search {
    margin-right: auto;
  }
  .avatar-home {
    flex-shrink: 0;
  }
}

@supports (backdrop-filter: blur(1px)) {
  .header {
    background-color: transparent;
    backdrop-filter: blur(6px);
  }
}

.container {
  display: flex;
  min-height: calc(100% - var(--window-top));
  max-width: $viewport-width-l;
  margin: auto;
}

.aside {
  min-width: var(--aside-min-width);
  background-color: var(--blog-bg-regular);
}

.aside-stick {
  position: sticky;
  top: var(--window-top);
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 50px;
  max-height: calc(100vh - var(--navigation-bar-height));
}

.main {
  flex-grow: 1;
  min-width: 0;
  padding: 1.5em;
  padding-bottom: var(--safe-bottom-area);
  min-height: calc(100vh - var(--navigation-bar-height));
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.4s;
}

.slide-leave-active {
  transition: all 0.2s;
}

.slide-enter-from {
  transform: translateY(100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

#__nuxt {
  background-color: var(--blog-bg-soft);
}

.to-top {
  position: fixed;
  right: 2em;
  bottom: 1em;
  border: 1px solid currentColor;
  color: var(--blog-brand-light);
  opacity: 0.8;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.2em;
  line-height: 1;
}
.to-top:hover {
  opacity: 1;
}

.article-outline {
  max-width: 300px;
}

@media screen and (max-width: $viewport-width-m) {
  .article-outline {
    position: fixed;
    z-index: 100;
    right: 0;
    top: var(--navigation-bar-height);
    min-height: calc(100% - var(--navigation-bar-height));
    min-height: 100%;
    box-sizing: border-box;
    max-width: var(--aside-max-width);
    transform: translateX(calc(var(--aside-max-width) + 20px));
    transition: transform 0.3s;
    box-shadow: 1px 1px 5px 1px var(--blog-shadow-color);
    &.open {
      transform: translateX(0);
    }
    .right-aside {
      position: static;
    }
  }
}

@media screen and (max-width: $viewport-width-s) {
  .menu {
    position: fixed;
    z-index: 100;
    left: 0;
    top: var(--navigation-bar-height);
    min-height: calc(100% - var(--navigation-bar-height));
    max-width: var(--aside-max-width);
    transform: scale(0);
    transform-origin: 0% 0%;
    transition: transform 0.3s;
    box-shadow: -2px 2px 5px 1px var(--blog-shadow-color);
    &.open {
      transform: scale(1);
    }
    .left-aside {
      position: static;
    }
  }
}

@media screen and (max-width: $viewport-width-xs) {
  .search.is-focus {
    flex: 1;
    .el-autocomplete {
      width: 100%;
    }
  }
  .search.is-focus ~ .item {
    display: none;
  }
}

.nuxt-loading-indicator {
  top: var(--navigation-bar-height) !important;
}
</style>
