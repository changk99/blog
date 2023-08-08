export default defineAppConfig({
  nuxtIcon: {
    size: '1.2em',
    class: 'icon',
    aliases: {}
  },
  nav: {
    // 设置顶部导航过滤的路径
    excludeTopNavPath: ['/', '/test'],
    // 设置不会导致侧边栏刷新的路径
    excludeAsidePathRefresh: ['/test', '/']
  },
  markdown: {
    // code block 中是否解析链接
    linkify: true
  },
  toc: {
    // 从哪个深度开始搜索
    depth: 1,
    // 目录的搜索深度
    searchDepth: 2
  }
});
