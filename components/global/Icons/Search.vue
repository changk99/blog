<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 20 20"
    class="icon"
  >
    <path
      d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
      stroke="currentColor"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  width: string;
  height: string;
}>();
</script>
<style scoped>
.icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
