---
title: '纯 css 实现数字自增的动画效果'
---

## 前言

最近在群里摸鱼时,讨论到 css houdini 能提供哪些能力,其中有一些能力还在规范中,有一些能力已经被部分浏览器支持了。我于是找到其中一个新增的 at-rule css 规则 @property,并且写了这个例子,看一下能提供哪些之前 css 可能无法实现的功能。文中提到的一些概念都可以在参考链接中获取更详细的信息

废话不多说,直接上代码

## html

```html
<body>
  <div class="box"></div>
  <div class="box item2"></div>
</body>
```

## css

```css
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
}
.box {
  width: 200px;
  height: 200px;
  border: 10px solid #000;
  background-color: rebeccapurple;
  margin: auto;
  font-size: 100px;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 200px;
  position: relative;
  --step: 0;
  counter-reset: count var(--step);
  z-index: var(--step);
  transition: --step 10s;
}
.box::before {
  content: counter(count);
}
.box.item2::before {
  content: counter(count, cjk-heavenly-stem);
}
.box:hover {
  --step: 100;
}
@property --step {
  syntax: '<integer>';
  inherits: true;
  initial-value: 0;
}
```

## 效果

![动画.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22dc659c0494462883a6c9e69a33a70f~tplv-k3u1fbpfcp-watermark.image)

## 思路

由于是使用纯 css 实现,第一步就是把 css 设置的信息显示出来,这里使用了 content 配合伪元素,很多时候我们使用到 content 时,可能只提供一个 \<string> 类型值,但是还可以设置其他值,例如 attr(), count() 等类型。因为这里要做动画,选择 \<string> 类型自然是无法实现的,在 content 的语法中,找到了 count() 函数,这个函数可以读取计数器的值,而计数器值类型是 \<integer> 类型,该类型可以从 counter-reset 属性支持的语法中知道,其语法是 [ \<custom-ident> \<integer>? ]+ | none。

在前面我提到了类型和语法,这个我们在学 css 时可能不太会注意的东西,但是在这里必须要说一下,因为在 @property 中要用到。我们设置任何一个 css 属性的属性值时,这些属性值都是由不同的数据类型的值组合而成,比如 width: 10px,其中 10px 就是 \<length> 类型,但是我们知道 width: auto 也是可以的,如果我们查看 mdn 文档就可以发现 width 的语法是

```
[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto
```

通过该语法就可以知道 width 可以支持设置哪些属性值,如果要读懂这些语法,需要了解 css 的属性值定义语法和 css 数据类型,通过下面的链接可以获取更多这些信息。有时我们发现 css 要记的属性和属性值太多太杂了,但是只要了解数据类型和语法,记忆的东西就可以大大减少,因为很多的语法和类型都可以复用的。例如 \<position> 类型就可以用到 background-position 和 object-position 属性上。

现在回归正题,如果要实现动画,自然要让计数器的值发生变化,这里使用了 hover 悬停触发改变,当然可以是其他的触发方法。如果使用

```css
.box:hover {
  counter-reset: count 100;
}
```

是无法让过渡动画生效的,要让动画生效,需要对应的数据类型支持插值。counter-reset 中只有 \<integer> 部分支持插值,整体是不支持插值的,具体哪些能插哪些不能插可以查询 css 数据类型中对每一个数据类型的介绍。如果要实现部分变化,可以使用 var() 函数, var() 函数可以读取自定义属性的值,只要让自定义属性发生变化就可以了。如果对自定义属性不了解的可以查看下面的链接。自定义属性必须前面添加 --,并且是区分大小写的,在使用上支持 var() 进行读取,而其余行为和样式属性是类似的,比如一样受级联影响。在没有设置 @property 规则时,自定义属性是可继承的属性,允许自定义属性设置任何类型的值。所以当设置 --setp: 0 时,会认为该自定义属性不支持插值,如果从 js 角度去看自定义属性

```js
document.querySelector('.box').computedStyleMap().get('--step');
// CSSUnparsedValue {0: " 0", length: 1}
```

会返回 CSSUnparsedValue 对象,该对象是 cssom 规范中提供的对象,字面解释就是一个没有被解析的值,自然也不支持插值。这里提到的 cssom 表示 CSS 对象模型,有点类似 DOM,允许通过 js 的方式来操作 CSS, css houdini 为我们暴露了更多的底层接口,这也是其能力的一个方面。

到目前为止,如果没有设置 @property 规则,动画依然是不支持的,经过我之前的描述,可能大家都知道 @property 作用了。@property 提供了我们控制自定义属性的能力,比如 syntax 是用来限制自定义属性支持的数据类型的,设置为可以插值类型 \<integer> 后再次通过 js 读取自定义属性

```js
document.querySelector('.box').computedStyleMap().get('--step');
// CSSUnitValue {value: 0, unit: "number"}
```

已经不是一个没有被解释的对象了。而 inherits 属性是控制该自定义属性是否可以继承。initial-value 就是在 var() 读取不到自定义属性值时采用的默认值。

## 总结

这是一个非常简单的例子,但通过这个例子可以发散出其他有意思的实现,比如实现渐变动画,布局动画等等。更重要的是这里实现的能力只是 css houdini 的冰山一角,而且 css houdini 在性能上是非常出色的,期待 css houdini 的发展。

## 参考链接

[@property CSS at-rule ](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

[CSS Houdini 介绍](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini)

[content 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/content)

[counter-reset 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset)

[属性值定义语法](https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax)

[css 数据类型](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)

[css 自定义属性](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
