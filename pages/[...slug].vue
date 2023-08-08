<template>
  <div class="content-doc">
    <ContentDoc class="content">
      <template #not-found>
        <div class="error">
          <div>当前页面不存在</div>
        </div>
      </template>
      <template #empty>
        <div class="error">无法获取到当前页面的数据</div>
        <div class="error">
          刷新
          <ClientOnlyIcon
            @click="refresh"
            class="refresh"
            size="1.4em"
            name="material-symbols:refresh"
          ></ClientOnlyIcon>
        </div>
      </template>
    </ContentDoc>
    <nav class="nav">
      <div class="nav-item nav-item-before">
        <div class="dir-title">{{ prevDirTitle }}</div>
        <NuxtLink class="link" :to="prev._path" v-if="needPrev">
          <ClientOnlyIcon
            size="1em"
            style="transform: scale(-1, 1)"
            name="ic:baseline-arrow-forward"
          ></ClientOnlyIcon>
          <span class="title">{{ prev.title }}</span>
        </NuxtLink>
      </div>
      <div class="nav-item nav-item-after">
        <div class="dir-title">{{ nextDirTitle }}</div>
        <NuxtLink class="link" :to="next._path" v-if="needNext">
          <span class="title">{{ next.title }}</span>
          <ClientOnlyIcon size="1em" name="ic:baseline-arrow-forward"></ClientOnlyIcon>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const route = useRoute();
const nuxtApp = useNuxtApp();

// 页面动画结束后,滚动到对应 hash 的位置处
// 这里往历史栈中添加记录,处理的是 markdown 中 a 标签发起的导航,这样可以保证出现滚动行为
function handlerOtherPathNavigate() {
  // 需要重新获取,因为这是水合过程中生成的 route,和导航时生成的 route 不同
  const route = useRoute();
  if (route.hash) {
    router.push(route.hash);
  }
}

function refresh() {
  location.reload();
}

onMounted(() => {
  if (!nuxtApp.isHydrating) {
    nuxtApp.hook('page:transition:finish', handlerOtherPathNavigate);
  }
});

onUnmounted(() => {
  nuxtApp.hooks.removeHook('page:transition:finish', handlerOtherPathNavigate);
});

const [prev, next] = await queryContent()
  .only(['_path', 'title', '_dir'])
  .where({
    _type: 'markdown'
  })
  .findSurround(route.path);

const prevDirTitle = ref<string>();
const nextDirTitle = ref<string>();

const needPrev = computed(() => {
  return route.path !== '/' && prev && prev._path.startsWith(getTopDir(route.path));
});
const needNext = computed(() => {
  return route.path !== '/' && next && next._path.startsWith(getTopDir(route.path));
});

if (needPrev.value) {
  const prevDirPath = replacePathlastSegment(prev._path, '_dir');
  queryContent()
    .only('title')
    .where({
      _path: prevDirPath
    })
    .findOne()
    .then(({ title }) => {
      prevDirTitle.value = title;
    });
}
if (needNext.value) {
  const nextDirPath = replacePathlastSegment(next._path, '_dir');
  queryContent()
    .only('title')
    .where({
      _path: nextDirPath
    })
    .findOne()
    .then(({ title }) => {
      nextDirTitle.value = title;
    });
}

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  keepalive: true
});
</script>
<style lang="scss" scoped>
.content-doc {
  padding-bottom: 2em;
  ::v-deep .content {
    min-height: 400px;
  }
  .error {
    font-size: 20rpx;
    text-align: center;
    color: var(--blog-text-1);
    :deep(.refresh) {
      color: var(--blog-brand-light);
      cursor: pointer;
    }
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  .link {
    text-decoration: none;
    vertical-align: baseline;
    line-height: 1.6;
    font-weight: bolder;
    color: var(--blog-brand-light);
    white-space: nowrap;
    .title {
      display: inline-block;
      white-space: normal;
      vertical-align: middle;
    }
  }
  .link:hover {
    color: var(--blog-brand-highlight);
  }

  .link:active {
    color: var(--blog-brand-light);
  }
  .dir-title {
    font-size: 14px;
    color: var(--blog-text-2);
  }
  .nav-item {
    min-width: 0;
    word-break: break-all;
  }
  .nav-item-after {
    .dir-title {
      text-align: right;
      margin-right: 1em;
    }
  }
  .nav-item-before {
    padding-right: 2em;
    .dir-title {
      margin-left: 1em;
    }
  }
}
</style>
