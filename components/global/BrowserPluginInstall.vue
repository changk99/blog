<template>
  <div class="plugin-info">
    <ul class="list">
      <li class="item title">
        <span class="sub-item">名称</span>
        <span class="sub-item">版本</span>
        <span class="sub-item">MD5</span>
        <span class="sub-item">安装</span>
      </li>
      <li v-for="versionInfo in versionInfos" :key="versionInfo.MD5" class="item version l">
        <span class="sub-item">{{ versionInfo.filename || name }}</span>
        <span class="sub-item">{{ versionInfo.version }}</span>
        <span :title="versionInfo.MD5" class="sub-item">{{ versionInfo.MD5 }}</span>
        <NuxtLink class="sub-item" :to="versionInfo.downUrl">
          <IconsFolder class="down-icon" width="1em" height="1em"></IconsFolder>
          <span class="down">下载</span>
        </NuxtLink>
      </li>
      <li v-for="versionInfo in versionInfos" :key="versionInfo.MD5" class="item version s">
        <IconsFolder class="down-icon" width="1em" height="1em"></IconsFolder>
        <span class="sub-item">{{ versionInfo.filename || name }}</span>
        <span class="sub-item">{{ versionInfo.version }}</span>
        <span :title="versionInfo.MD5" class="sub-item">{{ versionInfo.MD5 }}</span>
        <NuxtLink class="sub-item" :to="versionInfo.downUrl">
          <span class="down">下载</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export interface PluginVersionInfo {
  version: string;
  downUrl: string;
  filename: string;
  MD5: string;
}

defineProps<{
  name: string;
  versionInfos: PluginVersionInfo[];
}>();
</script>

<style scoped lang="scss">
.plugin-info {
  min-height: 350px;
  background-color: var(--blog-bg-regular);
  padding-top: 1em;
  border-radius: var(--blog-radius-2);
  margin-bottom: 1em;
  .list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
  }
  .item {
    display: none;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    .sub-item {
      flex: 1;
      width: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .sub-item:hover {
      white-space: normal;
    }
  }
  .item.title {
    font-weight: bolder;
    font-size: 0.8em;
  }

  .item.version {
    color: var(--blog-text-2);
  }

  .down-icon {
    color: #e6d258;
  }

  .down {
    vertical-align: middle;
    padding: 0.2em;
    font-size: 0.9em;
  }

  :hover .down-icon {
    color: #e0c725;
  }
}

@media screen and (max-width: $viewport-width-s) {
  .plugin-info {
    .list {
      justify-content: space-around;
    }
    .item {
      flex-basis: 0%;
      margin: 0 0.2em;
      .sub-item {
        width: auto;
      }
      .sub-item:hover {
        white-space: normal;
      }
    }
    .item.title {
      display: none;
    }

    .item.version {
      font-size: 0.8em;
      &.s {
        display: flex;
        flex-direction: column;
      }
      &.l {
        display: none;
      }
    }
    .down-icon {
      font-size: 64px;
    }
  }
}

@media screen and (min-width: $viewport-width-s) {
  .plugin-info {
    .item.title {
      display: flex;
    }

    .item.version {
      &.l {
        display: flex;
      }
      &.s {
        display: none;
      }
    }
  }
}
</style>
