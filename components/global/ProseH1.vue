<template>
  <h1 class="title" :id="id">
    <NuxtLink class="link" v-if="id && generate" :href="`#${id}`">
      <span class="content"><slot /></span>
      <span class="symbol">#</span>
    </NuxtLink>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports';
defineProps<{ id?: string }>();
const heading = 1;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading;
</script>

<style scoped lang="scss">
.title {
  color: var(--blog-text-h);
  font-size: var(--blog-font-size-h1);
  margin: 0.2em 0;
}
.link {
  color: inherit;
  text-decoration: none;
  padding-left: 0.2em;
}
.symbol {
  color: var(--blog-brand-light);
  opacity: 0;
}
.title:hover .symbol {
  opacity: 1;
}
</style>
