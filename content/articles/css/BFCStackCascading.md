---
title: 'BFC,层叠上下文,级联层'
---

## 1、生成 BFC（Block Formatting Context)

- 根元素或包含根元素的元素
- float 的值不为 none
- overflow 的值不为 visible 和 clip
- display 的值为 inline-block、table-cell、table-caption
- position 的值为 absolute 或 fixed
- 匿名表格单元格元素(由 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group、inline-table 元素匿名生成的单元格元素)
- display 值为 flow-root 的元素
- contain 值为 layout、paint, content 或 strict 的元素
- 弹性元素(display 为 flex 或 inline-flex 元素的直接子元素),但是其本身不是 flex, grid 或 table 类型的元素
- 网格元素(display 为 grid 或 inline-grid 元素的直接子元素),但是其本身不是 flex, grid 或 table 类型的元素
- 多列容器(元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1)
- column-span 为 all 的元素，即使该元素没有包裹在一个多列容器中

其中设置 display 为 flow-root 可以无副作用地触发 BFC

当一个元素触发了 BFC 外主要有以下的效果

- 元素可以包裹内部的浮动元素
- 和外部的浮动元素进行隔离
- 抑制外边距折叠

## 2、创建层叠上下文

- 根元素 (HTML)
- z-index 值不为 "auto" 的 absolute 和 relative 定位(absolute 和 relative 定位中如果 z-index 为 auto 那么不会形成自身的层叠上下文)
- position: fixed or stick(适用于所有移动浏览器，但不适用于较旧的桌面浏览器)
- 一个 z-index 值不为 "auto" 的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex
- 一个 z-index 值不为 "auto" 的 grid 项目 (grid item)，即：父元素 display: grid|inline-grid
- opacity 属性值小于 1 的元素
- mix-blend-mode 属性值不为 "normal" 的元素
- filter 值不为 "none" 的元素
- transform 属性值不为 "none" 的元素
- backdrop-filter 不为 "none" 的元素
- perspective 值不为 "none" 的元素
- clip-path 的值不为 "none" 的元素
- mask/mask-image/mask-border 不为 "none" 的元素
- isolation 属性被设置为 "isolate" 的元素
- 在 will-change 中指定了一个属性,而且该属性其非初始值会创建一个层叠上下文。例如 transform 的初始值(Initial value)为 none,非初始值会创建层叠上下文,因此 will-change: transform 就会创建层叠上下文
- -webkit-overflow-scrolling 属性被设置 “touch”的元素 (控制元素在移动设备上是否使用滚动回弹效果,设置为 touch 时表明有滚动回弹效果)
- contain 值是 layout 或者是 paint,或者是包括他们的合成值,如 strict 和 content
- offset-path 不为 "none" 的元素

其中设置 isolation: isolate 可以无副作用地创建层叠上下文

层叠上下文主要影响元素在互相堆叠时的显示顺序。如果出现堆叠顺序问题,可以考虑一下是否意外地创建了层叠上下文。而且需要注意层叠上下文是分层的,只有在同层下堆叠比较才有意义。

## 3、级联层顺序

- 没有设置 !important 的用户代理样式,第一个声明层

- 没有设置 !important 的用户代理样式,最后一个声明层

- 没有设置 !important 的用户代理样式,没有声明层

- 没有设置 !important 的用户样式,第一个声明层

- 没有设置 !important 的用户样式,最后一个声明层

- 没有设置 !important 的用户样式,没有声明层

- 没有设置 !important 的开发者样式,第一个声明层

- 没有设置 !important 的开发者样式,最后一个声明层

- 没有设置 !important 的开发者样式,没有声明层

- 没有设置 !important 的内联样式

- animations

- 有设置 !important 的开发者样式,没有声明层

- 有设置 !important 的开发者样式,最后一个声明层

- 有设置 !important 的开发者样式,第一个声明层

- 有设置 !important 的内联样式

- 有设置 !important 的用户样式,没有声明层

- 有设置 !important 的用户样式,最后一个声明层

- 有设置 !important 的用户样式,第一个声明层

- 有设置 !important 的用户代理样式,没有声明层

- 有设置 !important 的用户代理样式,最后一个声明层

- 有设置 !important 的用户代理样式,第一个声明层

- transitions

css(Cascading Style Sheets) 一般会翻译为层叠样式表,这里为了和上面的层叠上下文进行区分把 Cascading 翻译为级联。  
在进行 css 属性的优先级对比时,需要用到权重计算,会采用权重高的属性值,但是权重计算是有一个前提的,就是在同一个级联层内计算才有意义。  
上面的列表就是由低到高的顺序排列了级联层,例如 animations 的层总是比没有设置 !important 层高,所以使用 animations 动画可以覆盖掉内联设置的样式。而为什么 !important 设置的样式容易被采用,因为是提升到比较高的层上。  
在样式来源上可以分为用户代理样式,开发者样式,用户样式。像 div 标签的 display 属性,按照规范其初始值应该为 inline,但是使用时我们发现是 block 的,因为其 block 值是用户代理即浏览器设置的,这些设置就是用户代理样式。而开发者样式就是开发网站时写的样式。用户样式是浏览器允许用户上传的样式,不同的浏览器有不同的上传方法,这个知道即可。  
在新的级联规范中,支持了使用 @layer 来声明层。例如

```css
.alert {
  background-color: green;
}
@layer module, state
@layer state {
  .alert {
    background-color: brown;
  }
}
@layer module {
  .alert {
    background-color: yellow;
  }
}
```

其中 module 就是第一个声明层, state 是最后一个声明层,外部的没有使用 @layer 声明的为没有声明层。在没有添加 !important 的情况下,按照级联顺序,最终的结果是 green。如果都添加了 !important 那么最终的结果是 yellow。  
还有一点对于 animations,内部的样式声明添加 !important 是无效的。

## 参考链接

[BFC](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)

[层叠上下文](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

[级联](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#Origin_of_CSS_declarations)
