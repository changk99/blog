<template>
  <ClientOnly>
    <Icon @click="emits('click')" v-bind="attrs" :size="size" :name="name"></Icon>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
  size?: string;
  name: string;
}>();
const emits = defineEmits(['click']);

const attrs = useAttrs();
</script>

<style scoped></style>
