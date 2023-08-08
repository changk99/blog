<template>
  <h3 class="title" :id="id">
    <NuxtLink class="link" v-if="id && generate" :href="`#${id}`">
      <span class="content"><slot /></span>
      <span class="symbol">#</span>
    </NuxtLink>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports';
defineProps<{ id?: string }>();
const heading = 3;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style scoped lang="scss">
.title {
  color: var(--blog-text-h);
  font-size: var(--blog-font-size-h3);
  padding-left: 0.2em;
  margin: 0.2em 0;
}
.link {
  color: inherit;
  text-decoration: none;
}
.symbol {
  color: var(--blog-brand-light);
  opacity: 0;
}
.title:hover .symbol {
  opacity: 1;
}
</style>
