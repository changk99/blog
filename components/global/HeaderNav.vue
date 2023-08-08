<template>
  <nav class="nav" ref="navRef">
    <ContentNavigation #default="{ navigation }">
      <div
        class="dropdown"
        :class="{
          open: isDropDownOpen
        }"
        @click="isDropDownOpen = isDropDownOpen ? false : true"
      >
        <span
          class="title"
          :class="{
            active: activeTitle
          }"
          >{{ (activeTitle = getActiveTitle(navigation)) ? activeTitle : '菜单' }}</span
        >
        <IconsArrow class="arrow" width="1em" height="1em"></IconsArrow>
      </div>
      <ul class="nav-list" ref="navListRef">
        <li
          :class="{
            active: route.path.match(link._path)
          }"
          class="nav-item"
          v-for="link of filterNavItems(navigation)"
          :key="link._path"
        >
          <NuxtLink
            @click="isDropDownOpen = isDropDownOpen ? false : true"
            :to="getFirstVaildPagePath(link)"
            >{{ link.title }}</NuxtLink
          >
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const appConfig = useAppConfig();
const route = useRoute();
const isDropDownOpen = ref(false);
const activeTitle = ref('');
const navRef = ref<HTMLElement>();
const navListRef = ref<HTMLElement>();

// 设置要过滤路径
const excludeNavPath = appConfig.nav.excludeTopNavPath || [];
function filterNavItems(navigation: NavItem[]) {
  return navigation.filter((navItem) => {
    return !excludeNavPath.includes(navItem._path);
  });
}

function getFirstVaildPagePath(navItem: NavItem): string {
  if (navItem.children) {
    return getFirstVaildPagePath(navItem.children[0]);
  } else {
    return navItem._path;
  }
}

function getActiveTitle(navigation: NavItem[]) {
  const items = filterNavItems(navigation).filter((navItem) => {
    return route.path.match(navItem._path);
  });
  if (items.length > 0) {
    return items[0].title;
  } else {
    return '';
  }
}

onMounted(() => {
  if (navRef.value) {
    onClickOutside(navRef.value, () => {
      if (navRef.value) {
        isDropDownOpen.value = false;
      }
    });
  }

  // 设置弹出框距离顶部的距离,如果不设置在一些浏览器中会定位不准确
  if (navListRef.value) {
    const { top } = navListRef.value.getBoundingClientRect();
    navListRef.value.style.setProperty('--top', `${top}px`);
  }
});
</script>
<style scoped lang="scss">
.nav {
  cursor: auto !important;
}

.dropdown {
  display: none;
  align-items: center;
  direction: ltr;
  user-select: none;
  cursor: pointer;
  .title {
    font-size: 14px;
    white-space: nowrap;
  }
  .arrow {
    padding: 0 0.3em;
    transition: transform 0.3s;
  }
}
.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: var(--blog-text-1);
    font-size: 14px;
    white-space: nowrap;
  }
}
.nav-item {
  padding: 0.1em 0.3em;
  margin: 0;
  position: relative;
  &:hover,
  &.active {
    color: var(--blog-brand-light);
  }
  a {
    color: inherit;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 100%;
    width: 0%;
    height: 100%;
    border-bottom: 2px solid var(--blog-brand-light);
    transition: 0.2s all linear;
  }
  &:hover::before {
    width: 100%;
    left: 0;
  }
  &:hover ~ &::before {
    left: 0;
  }
}

@media screen and (max-width: $viewport-width-xs) {
  .nav {
    direction: rtl;
  }
  .dropdown {
    display: flex;
    &.open {
      .arrow {
        transform: rotate(180deg);
      }
    }
    .title.active {
      color: var(--blog-brand-light);
    }
  }
  .nav-list {
    --top: auto;
    position: fixed;
    flex-direction: column;
    direction: ltr;
    align-items: flex-start;
    border: 1px solid var(--blog-text-4);
    padding: 1em 0.4em;
    padding-top: 0.5em;
    border-radius: 0.4em;
    background-color: var(--blog-bg-regular);
    box-shadow: var(--blog-shadow-4);
    transform-origin: 50% 0;
    margin-top: 0.2em;
    transform: scale(0);
    top: var(--top);
    transition: transform 0.3s;
    a {
      font-size: 13px;
    }
  }

  .nav-list::after {
    content: '';
    position: absolute;
    width: 0.3em;
    height: 0.3em;
    border: 1px solid var(--blog-text-4);
    border-right-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(45deg);
    top: calc(-0.3em + 1px);
    right: calc(50% - 0.3em);
    z-index: -1;
    background-color: var(--blog-bg-regular);
  }
  .nav-list::before {
    content: '';
    position: absolute;
    width: 1em;
    height: 0.5em;
    right: calc(50% - 0.5em);
    pointer-events: none;
    background-color: var(--blog-bg-regular);
    top: 0;
  }
  .dropdown.open + .nav-list {
    transform: scale(1);
  }
}
</style>
