### 项目介绍

基于 nuxt 和 @nuxt/content 模块的博客系统

### 使用方式

在 content 目录中通过 markdown 语法来创建文章,markdown 语法支持嵌入 vue 组件,创建的文章会按照目录结构生成对应的页面结构。

最上级的目录会生成顶部的菜单栏,下级目录会生成左侧边栏,文章内部的标题内容会生成右侧边栏。

### 静态部署

执行 `npm run generate` 后会在 .nuxt 目录下生成 public 目录,把 public 目录下的内容部署到静态服务器上就可以了,其中公共路径的前缀默认是 blog。
