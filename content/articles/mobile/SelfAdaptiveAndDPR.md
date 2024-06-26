---
title: '真的，移动端尺寸自适应与 dpr 无关'
---

## 前言

做移动端自适应时可能很多人都对自适应和 dpr 之间的关系产生疑问,也有一些人会疑虑比如我的自适应方案没有加 dpr 会不会出问题,针对这些疑问我说一下我的见解,希望能解除你的担忧。

## 1. 什么是尺寸自适应

首先说到自适应,可能在不同人眼里理解不同，特别与响应式的关系,在这里说一下我所理解的自适应,和其与响应式的区别。先说响应式设计,响应式设计表示在不同的屏幕尺寸下,都有良好的布局和内容表现,简单一点的说,就是一个页面可以适配多种不同尺寸的屏幕,而且看上去还是设计良好的。为了实现这个目的,可能会利用 js 或者 css 去动态改变布局的尺寸,在这个过程中会伴随元素尺寸的改变,布局的改变,甚至会把元素隐藏,比如在 pc 端显示的页面转到移动端就会这样。而自适应往往考虑的是另一个方面,就是希望页面的设计与设计稿的设计比例一致,这个也是做自适应的目的,在这个过程中针对不同的屏幕宽度元素的尺寸也会改变,但是一般不会有布局改变,和元素的隐藏,因为设计稿就这样。所以按照我以上的说法,那些按照 css 媒体查询写的自适应严格来说不叫自适应,因为断点之间会造成比例误差,而让误差少一点就得多插值。很明显使用 css 媒体查询并不是做自适应的好方法,我们需要一种准确的方法来做这个事,这个时候 js 就出来了,下面将会列举坊间流传甚广的淘宝方案和网易方案。

## 2. 淘宝方案

点这里可以看到淘宝方案具体的代码[flexible](https://github.com/huainanhai/flexible/blob/master/public/js/frame/flexible.debug.js)

当然具体的代码是做了很多的边界处理和兼容处理的,但是核心可以浓缩为以下代码

```js
(function () {
  var dpr = window.devicePixelRatio;
  var meta = document.createElement('meta');
  var scale = 1 / dpr;
  meta.setAttribute('name', 'viewport');
  meta.setAttribute(
    'content',
    'width=device-width, user-scalable=no, initial-scale=' +
      scale +
      ', maximum-scale=' +
      scale +
      ', minimum-scale=' +
      scale
  );
  document.getElementsByTagName('head')[0].appendChild(meta);
  // 动态设置的缩放大小会影响布局视口的尺寸
  function resize() {
    var deviceWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
  }
  resize();
  window.onresize = resize;
})();
```

这段代码放在浏览器上就能做到自适应了,他的过程是先获取设备的 dpr,所谓的 dpr 就是设备像素比,什么是设备像素比呢,就是单位尺寸内,设备物理像素的个数除以设备独立像素的大小,物理像素就是手机屏幕上一个一个的发光的点,大小是固定的,独立像素也叫做逻辑像素,css 设置的像素大小就是逻辑像素,对于 dpr 等于 2 的手机屏幕,设置 css 宽度为 1px,其实覆盖的是 2 个设备物理像素。回到正题,拿到 dpr 后,通过动态设置 meta 的 viewport 值,进行对布局的缩放操作。这里有一个关键,就是设置 width=device-width 和 initial-scale 的大小,在描述两者的作用之前我们先要理解一个概念就是布局视口,布局视口在之前有一个别名叫做初始包含块,而在比较早的文献中初始包含块也叫做画布。理解画布可能比理解布局视口更简单,如果你按比例绘图,很多时候就要参照你所用画布的大小,比如设计师在 750px 画了一个 200px 的正方形,如果你要在一张大小是 100cm 的纸上画,你可能就要这样计算正方形的宽度了 100cm \* 200 / 750,可以看到这个计算中是没有用到 dpr,你的笔触跨过多少个纸张分子,多少个原子根本就不影响我的绘图比例。我们的画画的过程就相当于设置 css 的过程,css 的尺寸依赖的就是布局视口的大小,而网页的布局视口大小在标准模式下可以这样获取

```js
document.documentElement.clientWidth;
```

而两个关键的元素设置 width=device-width,initial-scale = scale,做的事情就是先把布局视口放大 dpr 倍,然后整体缩放相应倍数以适应设备尺寸。这个也很容易验证在控制台打印布局视口大小就行了

![图片](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/28/16444eb6cffc5c8b~tplv-t2oaga2asx-image.image)
这是按照 640px 设计规范,设计图上标注 200px 元素大小,可以看出布局视口放大了 3 倍,然后再整体缩放到设备屏幕大小,由于这里是证明这个过程其实与 dpr 无关,我现在把 scale 的大小分别设置为
0.1 和 0.5

```js
var meta = document.createElement('meta');
var scale = 0.1;
meta.setAttribute('name', 'viewport');
```

![0.1](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/28/16444ed132e70696~tplv-t2oaga2asx-image.image)

```js
var meta = document.createElement('meta');
var scale = 0.5;
meta.setAttribute('name', 'viewport');
```

![0.5](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/28/16444edd6d16eb1c~tplv-t2oaga2asx-image.image)

这里可以看到就算我设置 scale 不等于 1 / drp 的大小也不妨碍我按设计图的比例画出元素
这里要注意两点,因为我是用 chrome 模拟的,设置的时候发现几个问题

1. scale 的值如果小于 0.1 布局视口也只能放大 10 倍,也就是布局视口最多放大 10 倍
2. 当 scale 的值大于 1 时布局视口并不会缩小,而且布局视口不再匹配设备宽度,这种情况实际不会出现。
3. 如果你引入了 flexible.js 进行测试,要注意删除边界条件,因为缩放影响了布局视口大小,相应的边界条件会触发,导致误认为 dpr 与自适应有关

要做到自适应关键是让元素的尺寸与布局视口绑定关系,在这里虽然布局视口放大了,但并不影响这种绑定关系,这里淘宝方案把布局视口的宽度分割了十等份,每份的大小相当于布局宽度的十分之一,而把每份的大小分配给根元素的字体大小,元素尺寸就可以设置 rem 单位来与布局视口绑定关系,以 200px 尺寸为例,他们比例映射是这样的

200px : 640px => xrem : 10rem

这里的 10rem 就是布局视口宽度,元素尺寸只要维持这个比例关系就行了,与 dpr 是没有关系的

x= 10 \* 200 / 640 = 3.125rem

这里的计算可能会费一点时间,也有一些插件可以辅助把 px 转为 rem 的
但是方案是死的,人是活的,你只要把淘宝固有的十等分改一下就行了,比如设计稿是 640px 的
改一下

```js
document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
```

分了 6.4 等份

200px : 640px => xrem : 6.4rem

x 一看就知道是 2rem

流程： rem => 根元素字体大小 => 布局视口

当然也可以分割为 100 等份,这样方便为以后使用 vw 单位进行过渡

那么为什么淘宝要引入 dpr,把布局放大再缩小呢,其中一点就是这个方案可以很好地解决 1px 边框的问题,对于高清屏来说设置 1px 像素大小,其实横跨的是 dpr 个设备像素,这样看起来线条不够细,与设计稿就产生出入,而通过布局放大再缩小的方案刚好就弥补了这个问题。但是随之而来也带来一个问题,看上面的截图我们看到字体大小发生了改变,在 scale 设置为 0.1 时基本就看不见了,原因是一般我们的字体大小的设置不会使用 rem,而是使用 px 单位,这里的字体大小没有随布局视口的放大而增大,却随页面的整体缩放而缩小了,这里就得要针对不同的 dpr 做响应的处理,在淘宝的代码中我们可以看到

```js
docEl.setAttribute('data-dpr', dpr);
```

就是通过在根元素上挂载 dpr 信息,然后设置相应的 css 属性例如

```css
[data-dpr='2'] div {
  font-size: 32px;
}
[data-dpr='3'] div {
  font-size: 48px;
}
```

特别对于安卓手机,各种神奇的 dpr,如果每个都这样设置将会是灾难
所以淘宝非常聪明

```js
var isAndroid = win.navigator.appVersion.match(/android/gi);
var isIPhone = win.navigator.appVersion.match(/iphone/gi);
var devicePixelRatio = win.devicePixelRatio;
if (isIPhone) {
  // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
  if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
    dpr = 3;
  } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
    dpr = 2;
  } else {
    dpr = 1;
  }
} else {
  // 其他设备下，仍旧使用1倍的方案
  dpr = 1;
}
scale = 1 / dpr;
```

够简单直接,安卓高清屏是不存在的, 但是其实影响也不大,就是安卓屏的 1px 线条粗一点而已

如果除了要做自适应还要做响应式,那也得像上面设置字体一样一个一个设置,因为 css 媒体查询也是针对布局视口尺寸的。对于淘宝他们来说,肯定有一套工程化的方案来解决这种技术难题,对于遇到这个坑的伙伴估计得自已想办法了,预处理器是必不可少的。
从前面可以知道淘宝引入 dpr 并不是为了做自适应的,而是为了解决 1px 问题的,当然也引入了其他难题,既然如此,放弃解决 1px 问题,不就简单得多,网易方案就是这么做的。

## 3.网易方案

去除了边界处理和兼容处理，由于没有动态设置 meta 所以要在 head 中引入

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
/>
```

```js
(function () {
  var dpr = window.devicePixelRatio;
  function resize() {
    var deviceWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
  }
  resize();
  window.onresize = resize;
})();
```

网易方案没有引入 dpr 相关的,这也说明了移动端自适应与 dpr 是无关的

![0.6](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/28/16444f837fa7be33~tplv-t2oaga2asx-image.image)

从图片中可以看出和淘宝方案的区别,布局视口没有放大,整个页面也没有缩放,但是并不影响与设计图的比例

200px : 640px => xrem : 6.4rem

x= 2rem

流程: rem => 根元素的大小 => 布局视口

既然自适应与 dpr 无关那么就可以扩展出很多方案了

## 4. 其他方案

1.在布局视口等于设备宽度时,直接把根元素字体大小绑定到设备宽度大小上

```js
document.documentElement.style.fontSize = screen.width / 6.4 + 'px';
```

这里有关相关的文章 [基于 screen.width 的伪响应式开发](https://www.zhangxinxu.com/wordpress/2016/06/pseudo-response-layout-base-on-screen-width/)

2.直接定死布局视口

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=640, user-scalable=no" />
    //定死为设计稿的尺寸
    <meta name="renderer" content="webkit" />
    <title>定死布局视口</title>
    <style>
      html,
      body {
        margin: 0;
      }
      div {
        width: 200px;
        height: 200px;
        background: red;
      }

      body {
        background: blue;
      }
    </style>
    <script></script>
  </head>
  <body>
    <div id="size200px">元素大小200px</div>
  </body>
</html>
```

![0.001](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/28/16444fac35b57970~tplv-t2oaga2asx-image.image)

不用 rem 单位,不用设置 js,但是布局视口定死后,就不能用 css 媒体查询做响应式了,从这里也可以看出 viewport 属性的作用,就是让布局视口通过缩放来适配屏幕宽度,width=device.width 仅仅是让布局视口初始大小等于设备宽度,后面设置的 initial-scale 是用来缩放布局视口大小,而且默认是布局视口初始大小等于设备宽度,也就是所谓的理想视口,换个说法就是如果你设置了 initial-scale 你可以不用设置 width=device.width 了,淘宝方案你把 width=device.width 去掉,并不会影响自适应过程,加上主要是防止一些不按规范的浏览器出现兼容问题。如果还不能理解 viewport 的作用,那么可以参考 svg 中的 viewport 和 viewBox 的关系，原理是一样的。

3.使用新出单位 vw, vw 就是专门为自适应而出现的,100vw 就是布局视口的宽度,非常厉害,你也不用设置 js 了

200px: 640px => xvw : 100vw

x=200 \* 100 / 640 = 31.25vw

流程: vw => 布局视口

看一下兼容性

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/28/16444fc469953bd0~tplv-t2oaga2asx-image.image)

兼容还可以,这里也有相关的资料[ 分享手淘过年项目中采用到的前端技术](https://www.w3cplus.com/css/taobao-2018-year.html)

## 总结

移动端尺寸自适应与 dpr 无关,除了淘宝方案外,其他方案都得处理 1px 的问题,但也减少针对不同 dpr 设备做响应式处理的麻烦,而且其中也没有一种一劳永逸的方案能解决全部问题。而作为新出来的单位 vw,是时候该入坑了

## 参考文章

    1. 张鑫旭 [基于 screen.width 的伪响应式开发](https://www.zhangxinxu.com/wordpress/2016/06/pseudo-response-layout-base-on-screen-width/)

    2. 大漠 [分享手淘过年项目中采用到的前端技术](https://www.w3cplus.com/css/taobao-2018-year.html)

    3. [fleible](https://github.com/huainanhai/flexible/blob/master/public/js/frame/flexible.debug.js)
