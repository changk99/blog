<template>
  <div class="prose-table">
    <table>
      <slot />
    </table>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.prose-table {
  width: 100%;
  overflow: auto;
}

.prose-table {
  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--blog-white-mute);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(150, 150, 150);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100) !important;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
  }
}

.dark .prose-table {
  &::-webkit-scrollbar-track {
    background: var(--blog-black-regular);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--blog-black-mute);
  }
}
</style>
