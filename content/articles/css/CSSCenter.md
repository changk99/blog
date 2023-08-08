---
title: 'css 各种居中方法总结'
---

### 前言

在使用 css 设置页面样式时会经常遇到需要居中的情况,下面我总结了一些 css 在不同条件下实现居中的方法。有一些方法具有一些 hack 味道,大家看看就好。  
为了方便显示居中效果,给父元素和子元素都设置了边框和背景样式,由于效果都差不多,对于每一个方法我就不截图显示了,水平居中的大概实现是这样的
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/704b013c08d044cb81652c3ffd6e4be5~tplv-k3u1fbpfcp-watermark.image)

### 1、水平居中 + block 子元素定宽 + margin

```html
<style>
  .parent {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
  }

  .child {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    width: 150px;
    margin: 0 auto;
  }
</style>
<div class="parent">
  <div class="child">children 子元素</div>
</div>
```

### 2、水平居中 + inline-block 子元素不定宽 + text-align

```html
<style>
  .parent2 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    text-align: center;
  }

  .child2 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    display: inline-block;
  }
</style>
<div class="parent2">
  <div class="child2">children 子元素</div>
</div>
```

### 3、水平居中 + inline-block 子元素定宽 + text-align

```html
<style>
  .parent3 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    text-align: center;
  }

  .child3 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    width: 150px;
    display: inline-block;
  }
</style>
<div class="parent3">
  <div class="child3">children 子元素</div>
</div>
```

### 4、水平居中 + inline 子元素不定宽 + text-align

inline 类型的元素设置高宽是无效的,因此也没有定不定宽的说法,这里写上是为了看起来一致

```html
<style>
  .parent4 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    text-align: center;
  }

  .child4 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    display: inline;
  }
</style>
<div class="parent4">
  <div class="child4">children 子元素</div>
</div>
```

### 5、水平垂直居中 + flex + 子元素不定宽高

```html
<style>
  .parent5 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .child5 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
  }
</style>
<div class="parent5">
  <div class="child5">children 子元素</div>
</div>
```

### 6、水平垂直居中 + flex + 子元素不定宽高 + margin

```html
<style>
  .parent6 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    display: flex;
  }

  .child6 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    margin: auto;
  }
</style>
<div class="parent6">
  <div class="child6">children 子元素</div>
</div>
```

### 7、水平垂直居中 + gird + 子元素不定宽高

```html
<style>
  .parent7 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .child7 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
  }
</style>
<div class="parent7">
  <div class="child7">children 子元素</div>
</div>
```

### 8、水平垂直居中 + gird + 子元素不定宽高(居中属性设置在子元素上)

```html
<style>
  .parent7-2 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    display: grid;
  }

  .child7-2 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    justify-self: center;
    align-self: center;
  }
</style>
<div class="parent7-2">
  <div class="child7-2">children 子元素</div>
</div>
```

### 9、水平垂直居中 + gird + 子元素不定宽高 + margin

```html
<style>
  .parent8 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    display: grid;
  }

  .child8 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    margin: auto;
  }
</style>
<div class="parent8">
  <div class="child8">children 子元素</div>
</div>
```

### 10、水平垂直居中 + absolute + 子元素定宽高 + margin

```html
<style>
  .parent9 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    position: relative;
  }

  .child9 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    margin: auto;
    width: 150px;
    height: 100px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
<div class="parent9">
  <div class="child9">children 子元素</div>
</div>
```

### 11、水平垂直居中 + absolute + 子元素不定宽高 + margin

fit-content 这属性具有兼容问题

```html
<style>
  .parent10 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    position: relative;
  }

  .child10 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    margin: auto;
    position: absolute;
    width: fit-content;
    height: fit-content;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
<div class="parent10">
  <div class="child10">children 子元素</div>
</div>
```

### 12、水平垂直居中 + absolute + 子元素不定宽高 + transform

```html
<style>
  .parent11 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    position: relative;
  }

  .child11 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
<div class="parent11">
  <div class="child11">children 子元素</div>
</div>
```

### 13、水平垂直居中 + table-cell + 子元素不定宽高 + text-align + vertical-align

```html
<style>
  .parent12 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    /* width 设置百分比会失效,如果宽度不设置就由子元素的内容宽度决定 */
    width: 1000px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .child12 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
  }
</style>
<div class="parent12">
  <div class="child12">children 子元素</div>
</div>
```

### 14、水平垂直居中 + inline/inline-block 子元素不定宽高 + vertical-align

```html
<style>
  .parent13 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    text-align: center;
  }

  .parent13::before {
    content: '';
    line-height: 200px;
    font-size: 0;
  }

  .child13 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    /* display: inline-block; */
    display: inline;
    vertical-align: middle;
  }
</style>
<div class="parent13">
  <div class="child13">children 子元素</div>
</div>
```

### 15、水平垂直居中 + writing-mode + inline/inline-block 子元素不定宽高 + text-align

这个方法受默认排版影响,也是有兼容问题的

```html
<style>
  .parent15 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    height: 200px;
    writing-mode: vertical-lr;
    text-align: center;
  }

  .child15 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    writing-mode: horizontal-tb;
    /* display: inline; */
    display: inline-block;
    width: 100%;
  }
</style>
<div class="parent15">
  <div class="child15">children 子元素</div>
</div>
```

### 16、水平垂直居中 + 水平垂直居中 + block 子元素定宽 + 父元素高度由子元素决定 + padding/margin

```html
<style>
  .parent16 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
  }

  .child16 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    width: 150px;
    /* margin: auto; */
    /* padding: 50px 0; */
    margin: 50px auto;
  }
</style>
<div class="parent16">
  <div class="child16">children 子元素</div>
</div>
```

### 17、水平垂直居中 + 子元素不定宽高 + 父元素高度由子元素决定 + line-height

```html
<style>
  .parent17 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    text-align: center;
  }

  .child17 {
    border: 1px solid #000;
    background-color: chartreuse;
    font-size: 32px;
    /* display: inline-block; */
    display: inline;
    line-height: 200px;
  }
</style>
<div class="parent17">
  <div class="child17">children 子元素</div>
</div>
```

### 18、正方形十字居中

```html
<style>
  .parent18 {
    border: 1px solid #000;
    background-color: rgb(214, 120, 52);
    width: 20%;
    position: relative;
  }
  .parent18::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    padding: 50% 0;
  }

  .child18::before,
  .child18::after {
    content: '';
    display: block;
    position: absolute;
    background-color: chartreuse;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .child18::before {
    width: 50%;
    height: 5%;
  }
  .child18::after {
    height: 50%;
    width: 5%;
  }
</style>
<div class="parent18">
  <div class="child18"></div>
</div>
```

### 总结

主要总结了一些日常遇到的 css 居中方法,其中列举的方法也可以组合使用,如果你有其他居中例子,欢迎留言分享
