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
  ab,
  ac,
  ad,
  ae,
  af,
  ag,
  ah,
  ai,
  aj,
  ak,
  al,
  am,
  an,
  ao,
  ap,
  aq,
  ar,
  as,
  at,
  au,
  av,
  aw,
  ax,
  ay,
  az,
  aA,
  aB,
  aC,
  aD,
  aE,
  aF,
  aG,
  aH,
  aI,
  aJ,
  aK,
  aL,
  aM,
  aN,
  aO,
  aP,
  aQ,
  aR,
  aS,
  aT,
  aU,
  aV,
  aW,
  aX,
  aY,
  aZ,
  a_,
  a$,
  ba,
  bb,
  bc,
  bd,
  be,
  bf,
  bg,
  bh,
  bi,
  bj,
  bk,
  bl,
  bm,
  bn,
  bo,
  bp,
  bq,
  br,
  bs,
  bt,
  bu,
  bv,
  bw,
  bx,
  by,
  bz,
  bA,
  bB,
  bC,
  bD,
  bE,
  bF,
  bG,
  bH,
  bI,
  bJ,
  bK,
  bL,
  bM,
  bN,
  bO,
  bP,
  bQ,
  bR,
  bS,
  bT,
  bU,
  bV,
  bW,
  bX,
  bY,
  bZ
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
                { title: aW, _path: aX },
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
                {
                  title: 'js 浮点数存储精度丢失原理',
                  _path: '\u002Farticles\u002Fjavascript\u002Ffloatingpointlossprecision'
                },
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
                { title: aY, _path: '\u002Fbrowser_plugins\u002Fmodifyingwebdata\u002Finstall' },
                { title: aZ, _path: '\u002Fbrowser_plugins\u002Fmodifyingwebdata\u002Freadme' }
              ]
            },
            {
              title: '通用文字识别',
              _path: '\u002Fbrowser_plugins\u002Funiversaltextrecognition',
              children: [
                {
                  title: aY,
                  _path: '\u002Fbrowser_plugins\u002Funiversaltextrecognition\u002Finstall'
                },
                {
                  title: aZ,
                  _path: '\u002Fbrowser_plugins\u002Funiversaltextrecognition\u002Freadme'
                }
              ]
            }
          ]
        },
        { title: '首页', _path: '\u002F' },
        { title: a_, _path: '\u002Ftest' }
      ],
      'content-query-DwhTma9KTJ': {
        _path: aX,
        _dir: 'css',
        _draft: aR,
        _partial: aR,
        _locale: 'zh-Hans',
        _empty: aR,
        title: aW,
        description: I,
        body: {
          type: 'root',
          children: [
            { type: a, tag: J, props: { id: aF }, children: [{ type: c, value: aF }] },
            {
              type: a,
              tag: aE,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '在使用 css 设置页面样式时会经常遇到需要居中的情况,下面我总结了一些 css 在不同条件下实现居中的方法。有一些方法具有一些 hack 味道,大家看看就好。'
                },
                { type: a, tag: 'br', props: {}, children: [] },
                {
                  type: c,
                  value:
                    '\n为了方便显示居中效果,给父元素和子元素都设置了边框和背景样式,由于效果都差不多,对于每一个方法我就不截图显示了,水平居中的大概实现是这样的\n'
                },
                {
                  type: a,
                  tag: 'img',
                  props: {
                    alt: I,
                    src: 'https:\u002F\u002Fp3-juejin.byteimg.com\u002Ftos-cn-i-k3u1fbpfcp\u002F704b013c08d044cb81652c3ffd6e4be5~tplv-k3u1fbpfcp-watermark.image'
                  },
                  children: []
                }
              ]
            },
            { type: a, tag: J, props: { id: a$ }, children: [{ type: c, value: ba }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n  }\n\n  .child {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    width: 150px;\n    margin: 0 auto;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent"\u003E\n  \u003Cdiv class="child"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aG }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bb }, children: [{ type: c, value: bc }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent2 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    text-align: center;\n  }\n\n  .child2 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    display: inline-block;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent2"\u003E\n  \u003Cdiv class="child2"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent2' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child2' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aS }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent2"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child2"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bd }, children: [{ type: c, value: be }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent3 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    text-align: center;\n  }\n\n  .child3 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    width: 150px;\n    display: inline-block;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent3"\u003E\n  \u003Cdiv class="child3"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent3' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child3' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aG }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aS }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent3"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child3"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bf }, children: [{ type: c, value: bg }] },
            {
              type: a,
              tag: aE,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    'inline 类型的元素设置高宽是无效的,因此也没有定不定宽的说法,这里写上是为了看起来一致'
                }
              ]
            },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent4 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    text-align: center;\n  }\n\n  .child4 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    display: inline;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent4"\u003E\n  \u003Cdiv class="child4"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent4' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child4' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aT }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent4"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child4"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bh }, children: [{ type: c, value: bi }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent5 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .child5 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent5"\u003E\n  \u003Cdiv class="child5"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent5' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: bj }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bk }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bl }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child5' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent5"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child5"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bm }, children: [{ type: c, value: bn }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent6 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    display: flex;\n  }\n\n  .child6 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    margin: auto;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent6"\u003E\n  \u003Cdiv class="child6"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent6' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: bj }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child6' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent6"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child6"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bo }, children: [{ type: c, value: bp }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent7 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .child7 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent7"\u003E\n  \u003Cdiv class="child7"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent7' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aU }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bk }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bl }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child7' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent7"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child7"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bq }, children: [{ type: c, value: br }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent7-2 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    display: grid;\n  }\n\n  .child7-2 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    justify-self: center;\n    align-self: center;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent7-2"\u003E\n  \u003Cdiv class="child7-2"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent7-2' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aU }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child7-2' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: 'justify-self' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: 'align-self' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent7-2"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child7-2"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bs }, children: [{ type: c, value: bt }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent8 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    display: grid;\n  }\n\n  .child8 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    margin: auto;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent8"\u003E\n  \u003Cdiv class="child8"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent8' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aU }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child8' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent8"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child8"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bu }, children: [{ type: c, value: bv }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent9 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    position: relative;\n  }\n\n  .child9 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    margin: auto;\n    width: 150px;\n    height: 100px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent9"\u003E\n  \u003Cdiv class="child9"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent9' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aH }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child9' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aG }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: '100px' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aI }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aJ }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bx }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aK }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aC },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aL },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent9"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aM },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child9"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aN },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: by }, children: [{ type: c, value: bz }] },
            {
              type: a,
              tag: aE,
              props: {},
              children: [{ type: c, value: 'fit-content 这属性具有兼容问题' }]
            },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent10 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    position: relative;\n  }\n\n  .child10 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    margin: auto;\n    position: absolute;\n    width: fit-content;\n    height: fit-content;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent10"\u003E\n  \u003Cdiv class="child10"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent10' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aH }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child10' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aI }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: bA }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: bA }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aJ }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bx }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aK }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aC },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aL },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent10"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aM },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child10"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aN },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bB }, children: [{ type: c, value: bC }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent11 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    position: relative;\n  }\n\n  .child11 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    margin: auto;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent11"\u003E\n  \u003Cdiv class="child11"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent11' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aH }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child11' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aI }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aJ }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aK }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bD }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: bE }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aO }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aO }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent11"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child11"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aC },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bF }, children: [{ type: c, value: bG }] },
            {
              type: a,
              tag: z,
              props: {
                code: ' \u003Cstyle\u003E\n  .parent12 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    \u002F* width 设置百分比会失效,如果宽度不设置就由子元素的内容宽度决定 *\u002F\n    width: 1000px;\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n  }\n\n  .child12 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent12"\u003E\n  \u003Cdiv class="child12"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent12' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: aD },
                              children: [
                                {
                                  type: c,
                                  value:
                                    '\u002F* width 设置百分比会失效,如果宽度不设置就由子元素的内容宽度决定 *\u002F\n'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: '1000px' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: 'table-cell' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bH }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: 'middle' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child12' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent12"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child12"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bI }, children: [{ type: c, value: bJ }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent13 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    text-align: center;\n  }\n\n  .parent13::before {\n    content: "";\n    line-height: 200px;\n    font-size: 0;\n  }\n\n  .child13 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    \u002F* display: inline-block; *\u002F\n    display: inline;\n    vertical-align: middle\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent13"\u003E\n  \u003Cdiv class="child13"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent13' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent13::before' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aP }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aV }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bK }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child13' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: aD },
                              children: [{ type: c, value: bL }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aT }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bH }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: 'middle\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aC },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aL },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aM },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent13"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aN },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child13"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: bM },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bN }, children: [{ type: c, value: bO }] },
            {
              type: a,
              tag: aE,
              props: {},
              children: [{ type: c, value: '这个方法受默认排版影响,也是有兼容问题的' }]
            },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent15 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    height: 200px;\n    writing-mode: vertical-lr;\n    text-align: center;\n  }\n\n  .child15 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    writing-mode: horizontal-tb;\n    \u002F* display: inline; *\u002F\n    display: inline-block;\n    width: 100%;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent15"\u003E\n  \u003Cdiv class="child15"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent15' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bP }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: 'vertical-lr' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child15' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bP }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: 'horizontal-tb' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: aD },
                              children: [{ type: c, value: '\u002F* display: inline; *\u002F\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aS }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: '100%' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent15"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child15"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aC },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bQ }, children: [{ type: c, value: bR }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent16 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n  }\n\n  .child16 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    width: 150px;\n    \u002F* margin: auto; *\u002F\n    \u002F* padding: 50px 0; *\u002F\n    margin: 50px auto;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent16"\u003E\n  \u003Cdiv class="child16"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent16' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: _ },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child16' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aG }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: aD },
                              children: [{ type: c, value: '\u002F* margin: auto; *\u002F\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: aD },
                              children: [{ type: c, value: '\u002F* padding: 50px 0; *\u002F\n' }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aw }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: '50px' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ax }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent16"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child16"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bS }, children: [{ type: c, value: bT }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent17 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    text-align: center;\n  }\n\n  .child17 {\n    border: 1px solid #000;\n    background-color: chartreuse;\n    font-size: 32px;\n    \u002F* display: inline-block; *\u002F\n    display: inline;\n    line-height: 200px;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent17"\u003E\n  \u003Cdiv class="child17"\u003Echildren 子元素\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent17' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: ay }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: as }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.child17' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: af }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ao }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: aD },
                              children: [{ type: c, value: bL }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aT }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bK }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: an }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent17"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child17"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: ap }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: bU }, children: [{ type: c, value: bV }] },
            {
              type: a,
              tag: z,
              props: {
                code: '\u003Cstyle\u003E\n  .parent18 {\n    border: 1px solid #000;\n    background-color: rgb(214, 120, 52);\n    width: 20%;\n    position: relative;\n  }\n  .parent18::before {\n    content: "";\n    display: block;\n    width: 0;\n    height: 0;\n    padding: 50% 0;\n  }\n\n  .child18::before, .child18::after {\n    content: "";\n    display: block;\n    position: absolute;\n    background-color: chartreuse;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .child18::before {\n    width: 50%;\n    height: 5%;\n  }\n  .child18::after {\n    height: 50%;\n    width: 5%;\n  }\n\u003C\u002Fstyle\u003E\n\u003Cdiv class="parent18"\u003E\n  \u003Cdiv class="child18"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n',
                language: Q,
                meta: R
              },
              children: [
                {
                  type: a,
                  tag: S,
                  props: {},
                  children: [
                    {
                      type: a,
                      tag: z,
                      props: { __ignoreMap: I },
                      children: [
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: T },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: K },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent18' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: x },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: D }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: E }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: F }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: G }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: U },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: V }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: W }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: X }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: Y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: Z },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: '20%' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
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
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aH }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: $ },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aa },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: '.parent18::before' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ab },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aP }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aV }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ac },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: bW }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ae },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ag },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ah },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: 'padding' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: ar }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ai },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aj },
                          children: [
                            { type: a, tag: b, props: {}, children: [{ type: c, value: P }] }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: ak },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: bX }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: bY }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: al },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aP }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aV }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: am },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aq }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: bW }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: at },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: av }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: aI }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: az },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: A }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: ad }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aA },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aJ }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aC },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: aK }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aL },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: bD }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: L },
                              children: [{ type: c, value: bE }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: M }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aO }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: w }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aO }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: N }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aM },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: aN },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: bX }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: bM },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 27 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: bZ }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 28 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 29 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: t },
                              children: [{ type: c, value: bY }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: u }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 30 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: O }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: aB }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 31 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: h }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: au }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: i }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: l },
                              children: [{ type: c, value: bZ }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: k }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 32 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: v }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 33 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: y }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 34 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"parent18"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 35 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: q }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: r }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: m }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: f },
                              children: [{ type: c, value: B }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: d },
                              children: [{ type: c, value: C }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: j },
                              children: [{ type: c, value: '"child18"' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: '\u003E\u003C\u002F' }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: o }]
                            }
                          ]
                        },
                        {
                          type: a,
                          tag: b,
                          props: { class: e, line: 36 },
                          children: [
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: s }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: n },
                              children: [{ type: c, value: p }]
                            },
                            {
                              type: a,
                              tag: b,
                              props: { class: g },
                              children: [{ type: c, value: H }]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: a, tag: J, props: { id: aQ }, children: [{ type: c, value: aQ }] },
            {
              type: a,
              tag: aE,
              props: {},
              children: [
                {
                  type: c,
                  value:
                    '主要总结了一些日常遇到的 css 居中方法,其中列举的方法也可以组合使用,如果你有其他居中例子,欢迎留言分享'
                }
              ]
            },
            {
              type: a,
              tag: y,
              children: [
                {
                  type: c,
                  value:
                    '.ct-f3d457{color:#6A9955}\n.ct-cb3ad7{color:#DCDCAA}\n.ct-85b637{color:#CE9178}\n.ct-be69f7{color:#B5CEA8}\n.ct-a8e027{color:#9CDCFE}\n.ct-be2f55{color:#D7BA7D}\n.ct-cd0c74{color:#D4D4D4}\n.ct-9b0df5{color:#569CD6}\n.ct-100896{color:#808080}'
                }
              ]
            }
          ],
          toc: {
            title: I,
            searchDepth: K,
            depth: K,
            links: [
              { id: aF, depth: x, text: aF },
              { id: a$, depth: x, text: ba },
              { id: bb, depth: x, text: bc },
              { id: bd, depth: x, text: be },
              { id: bf, depth: x, text: bg },
              { id: bh, depth: x, text: bi },
              { id: bm, depth: x, text: bn },
              { id: bo, depth: x, text: bp },
              { id: bq, depth: x, text: br },
              { id: bs, depth: x, text: bt },
              { id: bu, depth: x, text: bv },
              { id: by, depth: x, text: bz },
              { id: bB, depth: x, text: bC },
              { id: bF, depth: x, text: bG },
              { id: bI, depth: x, text: bJ },
              { id: bN, depth: x, text: bO },
              { id: bQ, depth: x, text: bR },
              { id: bS, depth: x, text: bT },
              { id: bU, depth: x, text: bV },
              { id: aQ, depth: x, text: aQ }
            ]
          }
        },
        _type: a_,
        _id: 'content:articles:css:CSSCenter.md',
        _source: aP,
        _file: 'articles\u002Fcss\u002FCSSCenter.md',
        _extension: 'md'
      }
    },
    prerenderedAt: 1685447126515
  };
})(
  'element',
  'span',
  'text',
  'ct-cd0c74',
  'line',
  'ct-a8e027',
  'ct-100896',
  '    ',
  ': ',
  'ct-85b637',
  ';\n',
  'ct-be69f7',
  ' ',
  'ct-9b0df5',
  '\u003E\n',
  'div',
  '  ',
  '\u003C',
  '\u003C\u002F',
  'ct-be2f55',
  ' {\n',
  '  }\n',
  ', ',
  3,
  'style',
  'code',
  'background-color',
  'class',
  '=',
  'border',
  '1px',
  'solid',
  '#000',
  '\u003E',
  '',
  'h3',
  2,
  'ct-cb3ad7',
  '(',
  ');\n',
  'height',
  '\n',
  'html',
  null,
  'pre',
  1,
  4,
  'rgb',
  '214',
  '120',
  '52',
  5,
  6,
  7,
  8,
  9,
  10,
  'chartreuse',
  11,
  'font-size',
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  '200px',
  '32px',
  'children 子元素',
  'display',
  '0',
  'center',
  19,
  'width',
  'position',
  'margin',
  'auto',
  'text-align',
  20,
  21,
  '50%',
  22,
  'ct-f3d457',
  'p',
  '前言',
  '150px',
  'relative',
  'absolute',
  'left',
  'top',
  23,
  24,
  25,
  '-50%',
  'content',
  '总结',
  false,
  'inline-block',
  'inline',
  'grid',
  '""',
  'css 各种居中方法总结',
  '\u002Farticles\u002Fcss\u002Fcsscenter',
  '安装',
  '使用说明',
  'markdown',
  '_1水平居中-block-子元素定宽-margin',
  '1、水平居中 + block 子元素定宽 + margin',
  '_2水平居中-inline-block-子元素不定宽-text-align',
  '2、水平居中 + inline-block 子元素不定宽 + text-align',
  '_3水平居中-inline-block-子元素定宽-text-align',
  '3、水平居中 + inline-block 子元素定宽 + text-align',
  '_4水平居中-inline-子元素不定宽-text-align',
  '4、水平居中 + inline 子元素不定宽 + text-align',
  '_5水平垂直居中-flex-子元素不定宽高',
  '5、水平垂直居中 + flex + 子元素不定宽高',
  'flex',
  'justify-content',
  'align-items',
  '_6水平垂直居中-flex-子元素不定宽高-margin',
  '6、水平垂直居中 + flex + 子元素不定宽高 + margin',
  '_7水平垂直居中-gird-子元素不定宽高',
  '7、水平垂直居中 + gird + 子元素不定宽高',
  '_8水平垂直居中-gird-子元素不定宽高居中属性设置在子元素上',
  '8、水平垂直居中 + gird + 子元素不定宽高(居中属性设置在子元素上)',
  '_9水平垂直居中-gird-子元素不定宽高-margin',
  '9、水平垂直居中 + gird + 子元素不定宽高 + margin',
  '_10水平垂直居中-absolute-子元素定宽高-margin',
  '10、水平垂直居中 + absolute + 子元素定宽高 + margin',
  'right',
  'bottom',
  '_11水平垂直居中-absolute-子元素不定宽高-margin',
  '11、水平垂直居中 + absolute + 子元素不定宽高 + margin',
  'fit-content',
  '_12水平垂直居中-absolute-子元素不定宽高-transform',
  '12、水平垂直居中 + absolute + 子元素不定宽高 + transform',
  'transform',
  'translate',
  '_13水平垂直居中-table-cell-子元素不定宽高-text-align-vertical-align',
  '13、水平垂直居中 + table-cell + 子元素不定宽高 + text-align + vertical-align',
  'vertical-align',
  '_14水平垂直居中-inlineinline-block-子元素不定宽高-vertical-align',
  '14、水平垂直居中 + inline\u002Finline-block 子元素不定宽高 + vertical-align',
  'line-height',
  '\u002F* display: inline-block; *\u002F\n',
  26,
  '_15水平垂直居中-writing-mode-inlineinline-block-子元素不定宽高-text-align',
  '15、水平垂直居中 + writing-mode + inline\u002Finline-block 子元素不定宽高 + text-align',
  'writing-mode',
  '_16水平垂直居中-水平垂直居中-block-子元素定宽-父元素高度由子元素决定-paddingmargin',
  '16、水平垂直居中 + 水平垂直居中 + block 子元素定宽 + 父元素高度由子元素决定 + padding\u002Fmargin',
  '_17水平垂直居中-子元素不定宽高-父元素高度由子元素决定-line-height',
  '17、水平垂直居中 + 子元素不定宽高 + 父元素高度由子元素决定 + line-height',
  '_18正方形十字居中',
  '18、正方形十字居中',
  'block',
  '.child18::before',
  '.child18::after',
  '5%'
);
