<script setup lang="ts">
import { hasProtocol } from 'ufo';
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
});

const isExternal = computed(() => {
  if (props.target && props.target !== '_self') {
    return true;
  }
  // 去除前后的引号
  const href = props.href.replace(/(^['"])|(['"]$)/g, '');
  return href === '' || hasProtocol(href, { acceptRelative: true });
});
</script>

<template>
  <NuxtLink class="prose-a" :href="href" :target="isExternal ? '_blank' : target">
    <slot />
    <IconsLink class="external-icon" v-if="isExternal" width="0.8em" height="0.8em"></IconsLink>
  </NuxtLink>
</template>

<style>
.prose-a {
  position: relative;
  text-decoration: none;
  vertical-align: baseline;
  line-height: 1.6;
  padding: 0 0.2em;
  padding-bottom: 0.2em;
  border-bottom: 1px dashed currentColor;
  font-weight: bolder;
  color: var(--blog-brand-light);
}
.prose-a:visited {
  color: var(--blog-brand-light);
}
.prose-a:hover {
  color: var(--blog-brand-highlight);
}

.prose-a:active {
  color: var(--blog-brand-light);
}

.prose-a .external-icon {
  margin-left: -0.8em;
  transform: translate(0.8em, -0.8em);
  opacity: 0;
}
.prose-a:hover .external-icon {
  opacity: 1;
}
</style>
