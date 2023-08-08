<template>
  <blockquote>
    <slot />
  </blockquote>
</template>
<style scoped>
blockquote {
  margin: 1em 0;
  background-color: var(--blog-bg-mute);
  padding: 1px;
  padding-left: 0.5em;
  border-left: 5px solid var(--blog-brand-dark);
}
</style>
