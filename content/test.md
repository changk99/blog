---
title: 'markdown'
---

> ### 标题

> ## 标题

> # 标题

### 标题

## 标题

# 标题

## 标题

### 标题

#### 标题

    hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello worldddsdafasdf

    hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world

    [百度](https://www.baidu.com)

    [相关链接](/browser_plugins/universaltextrecognition/readme#相关链接)

hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world 你好

hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world hello world hello world hello worldhello world hello world

进入[百度](https://www.baidu.com)外部网页

[百度](https://www.baidu.com)

进入[关于](/about)内部网页

进入[关于](/about2)内部网页

进入[标题](#标题)内部网页

[相关链接](/browser_plugins/universaltextrecognition/readme#相关链接)

https://www.baidu.com

内联脚本 `console.log('hello world')`{lang='js'}

```ts
import { useRuntimeConfig } from '#imports';
defineProps<{ id?: string }>();
const heading = 3;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
```

```vue[example.vue]
<script>
import { defineComponent } from '#imports';
export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
});
</script>

<template>
  <div :class="language ? 'lang' : 'no-lang'">
    <slot />
  </div>
</template>

<style lang="scss">
.lang,
.no-lang {
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
}
pre code {
  display: inline-block;
  border: 1px solid var(--blog-border-color-3);
  padding: 1em;
  border-radius: var(--blog-radius-2);
  white-space: normal;
  box-sizing: border-box;
  width: 100%;
}
pre code .line {
  display: block;
  min-height: 1rem;
}
.no-lang pre {
  font-family: inherit;
}
.no-lang pre code {
  font-family: inherit;
  background-color: var(--blog-gray-light-5);
}
.dark .no-lang pre code {
  background-color: var(--blog-black-pure);
}
.lang pre code {
  background-color: #1e1e1e;
  overflow: auto;
  white-space: pre;
  .line {
    white-space: nowrap;
  }
}
</style>
```

```ts
import { useRuntimeConfig } from '#imports';
defineProps<{ id?: string }>();
const a = {
  b: 2
};
```

---

- 123456
- 123
- 123456

1. 123456s  
    daf

2. 123

3. 123456

> heloo d
> d
> asdfsd
> sfas
> df
> sd
> f

> ### el- 支持的事件设置

| 方法名 | 说明 | 参数                                    | 方法名 | 说明 | 参数                                   | 方法名 | 说明 | 参数                                   | 方法名 | 说明 | 参数                                   |
| :----- | :--- | :-------------------------------------- | :----- | :--- | :------------------------------------- | :----- | :--- | :------------------------------------- | :----- | :--- | :------------------------------------- |
| event  | kk   | asdfffffffffffffffff ffffffffffffffffff | event  | kk   | asdfffffffffffffffffffffffffffffffffff | event  | kk   | asdfffffffffffffffffffffffffffffffffff | event  | kk   | asdfffffffffffffffffffffffffffffffffff |
| event  | kk   | asdf                                    | event  | kk   | asdf                                   | event  | kk   | asdf                                   | event  | kk   | asdf                                   |
| event  | kk   | asdf                                    | event  | kk   | asdf                                   | event  | kk   | asdf                                   | event  | kk   | asdf                                   |
| event  | kk   | asdf                                    | event  | kk   | asdf                                   | event  | kk   | asdf                                   | event  | kk   | asdf                                   |
| event  | kk   | asdf                                    | event  | kk   | asdf                                   | event  | kk   | asdf                                   | event  | kk   | asdf                                   |

### display 属性描述

| 定义           | 值                                                                                                                                                                        |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Initial value  | inline                                                                                                                                                                    |
| Applies to     | all elements                                                                                                                                                              |
| Inherited      | no                                                                                                                                                                        |
| Computed value | as the specified value, except for positioned and floating elements and the root element. In both cases the computed value may be a keyword other than the one specified. |
| Animation type | discrete                                                                                                                                                                  |
