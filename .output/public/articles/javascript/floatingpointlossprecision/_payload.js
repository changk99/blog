export default (function (
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
  _,
  $,
  aa,
  ab
) {
  return {
    data: {
      'content-navigation-8C37fagqQL': [
        {
          title: '文章',
          _path: '\u002Farticles',
          children: [
            {
              title: 'Css',
              _path: '\u002Farticles\u002Fcss',
              children: [
                {
                  title: 'BFC,层叠上下文,级联层',
                  _path: '\u002Farticles\u002Fcss\u002Fbfcstackcascading'
                },
                { title: 'css 各种居中方法总结', _path: '\u002Farticles\u002Fcss\u002Fcsscenter' },
                {
                  title: '纯 css 实现数字自增的动画效果',
                  _path: '\u002Farticles\u002Fcss\u002Fcsspropertyatrule'
                }
              ]
            },
            {
              title: 'JavaScript',
              _path: '\u002Farticles\u002Fjavascript',
              children: [
                {
                  title: 'async\u002Fawait 异步应用的常用场景',
                  _path: '\u002Farticles\u002Fjavascript\u002Fasyncawaitscene'
                },
                {
                  title: '柯里化在异步编程的应用',
                  _path: '\u002Farticles\u002Fjavascript\u002Fcurryandasync'
                },
                { title: O, _path: P },
                {
                  title: 'es6 深入理解 Proxy 和 Reflect 这对影子兄弟',
                  _path: '\u002Farticles\u002Fjavascript\u002Fproxyandreflect'
                }
              ]
            },
            {
              title: '移动端',
              _path: '\u002Farticles\u002Fmobile',
              children: [
                {
                  title: '真的，移动端尺寸自适应与 dpr 无关',
                  _path: '\u002Farticles\u002Fmobile\u002Fselfadaptiveanddpr'
                }
              ]
            }
          ]
        },
        {
          title: '浏览器插件',
          _path: '\u002Fbrowser_plugins',
          children: [
            {
              title: '修改网页信息',
              _path: '\u002Fbrowser_plugins\u002Fmodifyingwebdata',
              children: [
                { title: Q, _path: '\u002Fbrowser_plugins\u002Fmodifyingwebdata\u002Finstall' },
                { title: R, _path: '\u002Fbrowser_plugins\u002Fmodifyingwebdata\u002Freadme' }
              ]
            },
            {
              title: '通用文字识别',
              _path: '\u002Fbrowser_plugins\u002Funiversaltextrecognition',
              children: [
                {
                  title: Q,
                  _path: '\u002Fbrowser_plugins\u002Funiversaltextrecognition\u002Finstall'
                },
                {
                  title: R,
                  _path: '\u002Fbrowser_plugins\u002Funiversaltextrecognition\u002Freadme'
                }
              ]
            }
          ]
        },
        { title: '首页', _path: '\u002F' },
        { title: S, _path: '\u002Ftest' }
      ],
      'content-query-hgaixLkoIU': {
        _path: P,
        _dir: 'javascript',
        _draft: L,
        _partial: L,
        _locale: 'zh-Hans',
        _empty: L,
        title: O,
        description: l,
        body: {
          type: 'root',
          children: [
            { type: a, tag: C, props: { id: F }, children: [{ type: c, value: F }] },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '曾几何时我们惊讶于在控制台看到这样的情况' }]
            },
            {
              type: a,
              tag: f,
              props: { code: '0.1 + 0.2 === 0.3\nfalse\n', meta: o },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '0.1 + 0.2 === 0.3\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: 'false' }] }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '而我们也得出一个原因,因为精度丢失所致。下面我将一步一步地以最简单的 0.1 为例告诉你们精度为什么丢失,什么时候开始丢失的,这里没有深奥的公式,也没有晦涩的概念,只要你知道进制转换就能看懂了。'
                }
              ]
            },
            { type: a, tag: C, props: { id: T }, children: [{ type: c, value: U }] },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '有一点我们是知道的,js 中一般的数值是以 64 位浮点数存储在内存中的,也就是这 64 个二进制数字映射着一个具体的数字,具体是按照 IEEE754 这个标准来的,这个标准权衡了精度和表示范围,也就是如何有效利用这 64 个二进制数字的前提下提出的。下面的所有流程都是按这个标准来的,其中把 64 位划分出了 3 个区域'
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '区域 S 符号位 用 1 位表示 0 表示正数 1 表示负数' }]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '区域 E 指数位 用 11 位表示 有正负范围,临界值是 1023 后面看转换过程就能看明白'
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '区域 M 尾数位 用 52 位表示' }]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: 'S + E + M 刚好就等于 64 位' }]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '在开始前先看看 0.1 在内存中是长什么样子的' }]
            },
            {
              type: a,
              tag: f,
              props: {
                code: 'let bytes = new Float64Array(1);\u002F\u002F 64位浮点数\nbytes[0] = 0.1;\u002F\u002F 填充 0.1 进去\nlet view = new DataView(bytes.buffer);\nconsole.log(view.getUint8(0).toString(2));\u002F\u002F 10011010\nconsole.log(view.getUint8(1).toString(2));\u002F\u002F 10011001\nconsole.log(view.getUint8(2).toString(2));\u002F\u002F 10011001\nconsole.log(view.getUint8(3).toString(2));\u002F\u002F 10011001\nconsole.log(view.getUint8(4).toString(2));\u002F\u002F 10011001\nconsole.log(view.getUint8(5).toString(2));\u002F\u002F 10011001\nconsole.log(view.getUint8(6).toString(2));\u002F\u002F 10111001\nconsole.log(view.getUint8(7).toString(2));\u002F\u002F 00111111 这里补齐了8位\n',
                language: 'js',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: G },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: G },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: 'Float64Array' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ');' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: '\u002F\u002F 64位浮点数\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: '[' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: Z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: '] = ' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: '0.1' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ';' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: '\u002F\u002F 填充 0.1 进去\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: D },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: G },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: G },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: 'DataView' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: 'buffer' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ');\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: I },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: Z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: '\u002F\u002F 10011010\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: _ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: E }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 6 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: E }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 7 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: '3' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: E }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 8 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: '4' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: E }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 9 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: '5' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: E }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 10 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: '6' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: '\u002F\u002F 10111001\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 11 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: u }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: v }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: n }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: '7' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: x }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: k },
                              children: [{ type: c, value: t }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: z }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: r },
                              children: [{ type: c, value: '\u002F\u002F 00111111 这里补齐了8位' }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '这里的 bytes.buffer 代表的就是一串内存空间,为了方便大家理解我使用\nDataView 用无符号 8 位的格式一个一个地读取内存的数据再转为二进制格式。\n由于读取内存的顺序会受字节序的影响,可能在你们的电脑打印得到相反的顺序\n如果按 SEM 的排列,那么其二进制就像下面这样子的'
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: 's(0)E(01111111011)M(1001100110011001100110011001100110011001100110011010)\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    's(0)E(01111111011)M(1001100110011001100110011001100110011001100110011010)'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '现在已经知道了 0.1 在内存的样子,下面就开始说说具体的转化过程,也就是精度丢失的过程'
                }
              ]
            },
            { type: a, tag: C, props: { id: $ }, children: [{ type: c, value: aa }] },
            {
              type: a,
              tag: A,
              props: {},
              children: [
                {
                  type: a,
                  tag: B,
                  props: {},
                  children: [
                    { type: c, value: '转换为二进制' },
                    { type: a, tag: N, props: {}, children: [] },
                    {
                      type: c,
                      value:
                        '\n在转换之前,首先看十进制小数要如何转化为二进制数小数的,这也是理解精度丢失十分关键的步骤,这个网上也有很多资料,我下面简单写一下流程。'
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: '0.1 =\u003E 0.2 =\u003E 0.4 =\u003E 0.8 =\u003E 1.6 =\u003E 1.2 =\u003E 0.4 =\u003E 0.8 =\u003E 1.6 =\u003E 1.2 =\u003E 0.4 =\u003E 0.8 =\u003E 1.6 =\u003E 1.2 =\u003E 0.4 ..............\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '0.1 =\u003E 0.2 =\u003E 0.4 =\u003E 0.8 =\u003E 1.6 =\u003E 1.2 =\u003E 0.4 =\u003E 0.8 =\u003E 1.6 =\u003E 1.2 =\u003E 0.4 =\u003E 0.8 =\u003E 1.6 =\u003E 1.2 =\u003E 0.4 ..............'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '就是小数部分不断乘以 2,并取整数部分的值,直到小数部分为 0 为止,应该也是很好理解的,可以看出这样下去是一个无限循环的过程,转化后是这样子的'
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: '0.00011001100110011001100110011001100110011001100110011001100110011001.....\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '0.00011001100110011001100110011001100110011001100110011001100110011001.....'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '有限空间传入无限的数很明显是不可能,那么应该怎么做呢' }]
            },
            {
              type: a,
              tag: A,
              props: { start: m },
              children: [
                {
                  type: a,
                  tag: B,
                  props: {},
                  children: [
                    { type: c, value: '转换为二进制指数格式' },
                    { type: a, tag: N, props: {}, children: [] },
                    {
                      type: c,
                      value:
                        '转换为指数格式其实就是移动小数点,让小数点前面出现的是第一个为 1 的值,不同的二进制数据,可能是前移可能是右移,对应的是指数的正负范围,转换后是这样子的'
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: '1.1001100110011001100110011001100110011001100110011001100110011001..... * 2 ^ -4\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '1.1001100110011001100110011001100110011001100110011001100110011001..... * 2 ^ -4'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: A,
              props: { start: D },
              children: [
                {
                  type: a,
                  tag: B,
                  props: {},
                  children: [
                    { type: c, value: '提取数据,进行数值截取,导致精度丢失' },
                    { type: a, tag: N, props: {}, children: [] },
                    {
                      type: c,
                      value:
                        '这里可以看到向右移动了4位,这个数据会保存在指数区域 E 内,在没有移位的情况下指数区域的值是 1023,向左移动几位就加几位,向右移动几位就减几位,所以这里是'
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: { code: '1023 - 4 = 1019\n1019 转二进制并补齐 11 位  01111111011\n', meta: o },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '1023 - 4 = 1019\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                { type: c, value: '1019 转二进制并补齐 11 位  01111111011' }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '也就是 E 为 01111111011\n由于尾数位最多只有 52 位,所以小数点后面的 52 位全部提取到尾数位,其中要注意的是,类似四舍五入,如果末位后是 1 会产生进位,这里就产生了进位'
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: '1001100110011001100110011001100110011001100110011001100110011001.....\n1001100110011001100110011001100110011001100110011001 100110011001.....\n进位后截取\n1001100110011001100110011001100110011001100110011010\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '1001100110011001100110011001100110011001100110011001100110011001.....\n'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '1001100110011001100110011001100110011001100110011001 100110011001.....\n'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: D },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '进位后截取\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: I },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: ab }] }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value: '也就是 M 为 1001100110011001100110011001100110011001100110011010'
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '这里由于丢掉了部分数据,所以导致精度丢失' }]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '由于 0.1 是正数,所以 S 为 0' }]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '到此整个 js 浮点数存储过程就结束了,为了表示我不是忽悠大家的,大家可以对照第一部分输出的数据值。下面将顺便介绍一下怎么转回十进制'
                }
              ]
            },
            { type: a, tag: C, props: { id: J }, children: [{ type: c, value: J }] },
            {
              type: a,
              tag: A,
              props: {},
              children: [
                { type: a, tag: B, props: {}, children: [{ type: c, value: '提取尾数位数据' }] }
              ]
            },
            {
              type: a,
              tag: f,
              props: { code: '1001100110011001100110011001100110011001100110011010\n', meta: o },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: ab }] }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: A,
              props: { start: m },
              children: [
                {
                  type: a,
                  tag: B,
                  props: {},
                  children: [{ type: c, value: '先前添加 1. 恢复为指数格式 并提取指数位' }]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: { code: '1.1001100110011001100110011001100110011001100110011010\n', meta: o },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value: '1.1001100110011001100110011001100110011001100110011010'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: { code: '01111111011 =\u003E 1019\n1019 - 1023 = -4\n', meta: o },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '01111111011 =\u003E 1019\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '1019 - 1023 = -4' }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: '1.1001100110011001100110011001100110011001100110011010 * 2 ^ -4\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '1.1001100110011001100110011001100110011001100110011010 * 2 ^ -4'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: A,
              props: { start: D },
              children: [{ type: a, tag: B, props: {}, children: [{ type: c, value: '移位' }] }]
            },
            {
              type: a,
              tag: f,
              props: {
                code: '0.00011001100110011001100110011001100110011001100110011010\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '0.00011001100110011001100110011001100110011001100110011010'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: A,
              props: { start: I },
              children: [
                {
                  type: a,
                  tag: B,
                  props: {},
                  children: [
                    {
                      type: c,
                      value:
                        '二进制转化为十进制\n小数的二进制转化为十进制网上的资料也有很多,我也简单介绍一下过程,以0.0111为例子'
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: {
                code: ' 0.0111 小数点后一位 0 \u002F 2^1   0\n        小数点后 2 位 1 \u002F 2^2    0.25\n        小数点后 3 位 1 \u002F 2^3    0.125\n        小数点后 4 位 1 \u002F 2^4    0.0625\n        然后相加 0 + 0.25 + 0.125 + 0.0625 = 0.4375\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                { type: c, value: ' 0.0111 小数点后一位 0 \u002F 2^1   0\n' }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                { type: c, value: '        小数点后 2 位 1 \u002F 2^2    0.25\n' }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: D },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                { type: c, value: '        小数点后 3 位 1 \u002F 2^3    0.125\n' }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: I },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                { type: c, value: '        小数点后 4 位 1 \u002F 2^4    0.0625\n' }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: _ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value: '        然后相加 0 + 0.25 + 0.125 + 0.0625 = 0.4375'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: i, props: {}, children: [{ type: c, value: '按以上方法进行装换' }] },
            {
              type: a,
              tag: f,
              props: {
                code: '0.00011001100110011001100110011001100110011001100110011010 =\u003E\n0.100000000000000005551\n',
                meta: o
              },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [
                                {
                                  type: c,
                                  value:
                                    '0.00011001100110011001100110011001100110011001100110011010 =\u003E\n'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '0.100000000000000005551' }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '关于最后这个输出值其实也是不精确的，因为我就是用 js 计算的,如果大家有更准确的计算方法可以帮我算一下,精确的值末尾数应该是 5 才对。但是你试一下在控制台中计算下面的表达式'
                }
              ]
            },
            {
              type: a,
              tag: f,
              props: { code: '0.1.toPrecision(21)\n"0.100000000000000005551"\n', meta: o },
              children: [
                {
                  type: a,
                  tag: p,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: f,
                      props: { __ignoreMap: l },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: q },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '0.1.toPrecision(21)\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: m },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: {},
                              children: [{ type: c, value: '"0.100000000000000005551"' }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: a,
              tag: i,
              props: {},
              children: [{ type: c, value: '这个也证明了上述的推理过程是正确的' }]
            },
            { type: a, tag: C, props: { id: K }, children: [{ type: c, value: K }] },
            {
              type: a,
              tag: i,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '相信到这里你已经知道为什么精度会丢失了,很多人都说 js 做浮点数计算很坑,其实也只是遵守标准而已,如果是坑的话,这个坑就不止是 js 了。'
                }
              ]
            },
            {
              type: a,
              tag: 'style',
              children: [
                {
                  type: c,
                  value:
                    '.ct-fe1535{color:#6A9955}\n.ct-134658{color:#B5CEA8}\n.ct-01c1df{color:#DCDCAA}\n.ct-0bb572{color:#9CDCFE}\n.ct-8680f0{color:#D4D4D4}\n.ct-fe919f{color:#569CD6}'
                }
              ]
            }
          ],
          toc: {
            title: l,
            searchDepth: m,
            depth: m,
            links: [
              { id: F, depth: m, text: F },
              { id: T, depth: m, text: U },
              { id: $, depth: m, text: aa },
              { id: J, depth: m, text: J },
              { id: K, depth: m, text: K }
            ]
          }
        },
        _type: S,
        _id: 'content:articles:javaScript:FloatingPointLossPrecision.md',
        _source: 'content',
        _file: 'articles\u002FjavaScript\u002FFloatingPointLossPrecision.md',
        _extension: 'md'
      }
    },
    prerenderedAt: 1685447129659
  };
})(
  'element',
  'span',
  'text',
  'ct-8680f0',
  'line',
  'code',
  'ct-01c1df',
  '(',
  'p',
  'ct-0bb572',
  'ct-134658',
  '',
  2,
  '.',
  null,
  'pre',
  1,
  'ct-fe1535',
  'view',
  '2',
  'console',
  'log',
  'getUint8',
  ').',
  'toString',
  '));',
  'ol',
  'li',
  'h2',
  3,
  '\u002F\u002F 10011001\n',
  '前言',
  'ct-fe919f',
  ' ',
  4,
  '丢失精度的数据转回十进制',
  '总结',
  false,
  'bytes',
  'br',
  'js 浮点数存储精度丢失原理',
  '\u002Farticles\u002Fjavascript\u002Ffloatingpointlossprecision',
  '安装',
  '使用说明',
  'markdown',
  '_01-在内存中的样子',
  '0.1 在内存中的样子',
  'let',
  ' = ',
  'new',
  '1',
  '0',
  5,
  '_01-精度丢失过程',
  '0.1 精度丢失过程',
  '1001100110011001100110011001100110011001100110011010'
);
