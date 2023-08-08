<template>
  <el-sub-menu
    class="is-opened"
    v-if="data.children && data.children.length > 0"
    :index="data._path"
  >
    <template #title>
      <span class="nav-title">{{ data.title }}</span>
    </template>
    <SubItem :data="navItem" v-for="navItem in data.children" :key="navItem._path"></SubItem>
  </el-sub-menu>
  <el-menu-item :index="data._path" v-else>
    <NuxtLink :title="data.title" :to="data._path">{{ data.title }}</NuxtLink>
  </el-menu-item>
</template>

<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';

defineProps<{
  data: NavItem;
}>();
</script>

<style scoped lang="scss">
.nav-title {
  font-weight: bolder;
}
</style>
