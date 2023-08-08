<template>
  <ul class="toc">
    <li
      :style="{
        '--sub-toc-level': level
      }"
      v-for="item in toc"
      :key="item.id"
    >
      <NuxtLink :to="route.path + `#${item.id}`">{{ item.title }}</NuxtLink>
      <Toc v-if="item.children.length >= 0" :toc="item.children" :level="level + 1"></Toc>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Toc } from '@/hooks/useToc';
const route = useRoute();

defineProps<{
  toc: Toc[];
  level: number;
}>();
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0;
}
.toc {
  font-size: 0.9em;
  a {
    text-decoration: none;
    color: var(--blog-text-2);
  }
  a:active {
    color: var(--blog-brand-light);
  }
  li {
    padding-left: calc(var(--sub-toc-level) * 0.3em);
  }
  a.active,
  .active a {
    color: var(--blog-brand-highlight);
  }
}

@media screen and (any-hover: hover) {
  .toc {
    a:hover {
      color: var(--blog-brand-light);
    }
  }
}
</style>
