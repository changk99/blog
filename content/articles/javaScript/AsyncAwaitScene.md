---
title: 'async/await 异步应用的常用场景'
---

## 前言

async/await 语法用看起来像写同步代码的方式来优雅地处理异步操作,但是我们也要明白一点,异步操作本来带有复杂性,像写同步代码的方式并不能降低本质上的复杂性,所以在处理上我们要更加谨慎, 稍有不慎就可能写出不是预期执行的代码,从而影响执行效率。下面将简单地描述一下一些日常常用场景,加深对 async/await 认识

最普遍的异步操作就是请求,我们也可以用 setTimeOut 来简单模拟异步请求。

## 场景 1. 一个请求接着一个请求

相信这个场景是最常遇到,后一个请求依赖前一个请求,下面以爬取一个网页内的图片为例子进行描述,使用了 superagent 请求模块, cheerio 页面分析模块,图片的地址需要分析网页内容得出,所以必须按顺序进行请求。

```js
const request = require('superagent')
const cheerio = require('cheerio')
// 简单封装下请求,其他的类似

function getHTML(url) {
// 一些操作,比如设置一下请求头信息
return superagent.get(url).set('referer', referer).set('user-agent', userAgent)
}
// 下面就请求一张图片
async function imageCrawler(url) {
  let res = await getHTML(url)
  let html = res.text
  let $ = cheerio.load(html)
  let $img = $(selector)[0]
  let href = $img.attribs.src
  res = await getImage(href)
  retrun res.body
}
async function handler(url) {
  let img = await imageCrawler(url)
  console.log(img) // buffer 格式的数据
  // 处理图片
}
handler(url)
```

上面就是一个简单的获取图片数据的场景,图片数据是加载进内存中,如果只是简单的存储数据,可以用流的形式进行存储,以防止消耗太多内存。

其中 await getHTML 是必须的,如果省略了 await 程序就不能按预期得到结果。执行流程会先执行 await 后面的表达式,其实际返回的是一个处于 pending 状态的 promise,等到这个 promise 处于已决议状态后才会执行 await 后面的操作,其中的代码执行会跳出 async 函数,继续执行函数外面的其他代码,所以并不会阻塞后续代码的执行。

## 场景 2.并发请求

有的时候我们并不需要等待一个请求回来才发出另一个请求,这样效率是很低的,所以这个时候就需要并发执行请求任务。下面以一个查询为例,先获取一个人的学校地址和家庭住址,再由这些信息获取详细的个人信息,学校地址和家庭住址是没有依赖关系的,后面的获取个人信息依赖于两者

```js
async function infoCrawler(url, name) {
  let [schoolAdr, homeAdr] = await Promise.all([getSchoolAdr(name), getHomeAdr(name)]);
  let info = await getInfo(url + `?schoolAdr=${schoolAdr}&homeAdr=${homeAdr}`);
  return info;
}
```

上面使用的 Promise.all 里面的异步请求都会并发执行,并等到数据都准备后返回相应的按数据顺序返回的数组,这里最后处理获取信息的时间,由并发请求中最慢的请求决定,例如 getSchoolAdr 迟迟不返回数据,那么后续操作只能等待,就算 getHomeAdr 已经提前返回了,当然以上场景必须是这么做,但是有的时候我们并不需要这么做。

上面第一个场景中,我们只获取到一张图片,但是可能一个网页中不止一张图片,如果我们要把这些图片存储起来,其实是没有必要等待图片都并发请求回来后再处理,哪张图片早回来就存储哪张就行了

```js
let imageUrls = ['href1', 'href2', 'href3'];
async function saveImages(imageUrls) {
  await Promise.all(
    imageUrls.map(async (imageUrl) => {
      let img = await getImage(imageUrl);
      return await saveImage(img);
    })
  );
  console.log('done');
}
// 如果我们连存储是否全部完成也不关心,也可以这么写
let imageUrls = ['href1', 'href2', 'href3'];
// saveImages() 连 async 都省了
function saveImages(imageUrls) {
  imageUrls.forEach(async (imageUrl) => {
    let img = await getImage(imageUrl);
    saveImage(img);
  });
}
```

可能有人会疑问 forEach 不是不能用于异步吗,这个说法我也在刚接触这个语法的时候就听说过,很明显 forEach 是可以处理异步的,只是是并发处理,map 也是并发处理,这个怎么用主要看你的实际场景,还要看你是否对结果感兴趣

## 场景 3.错误处理

一个请求发出,可以会遇到各种问题,我们是无法保证一定成功的,报错是常有的事,所以处理错误有时很有必要, async/await 处理错误也非常直观, 使用 try/catch 直接捕获就可以了

```js
async function imageCrawler(url) {
  try {
    let img = await getImage(url);
    return img;
  } catch (error) {
    console.log(error);
  }
}
// imageCrawler 返回的是一个 promise 可以这样处理
async function imageCrawler(url) {
  let img = await getImage(url);
  return img;
}
imageCrawler(url).catch((err) => {
  console.log(err);
});
```

可能有人会有疑问,是不是要在每个请求中都 try/catch 一下,这个其实你在最外层 catch 一下就可以了,一些基于中间件的设计就喜欢在最外层捕获错误

```js
async function ctx(next) {
  try {
    await next();
  } catch (error) {
    console.log(error);
  }
}
```

## 场景 4. 超时处理

一个请求发出,我们是无法确定什么时候返回的,也总不能一直傻傻的等,设置超时处理有时是很有必要的

```js
function timeOut(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('不用等了,别傻了'));
    }, delay);
  });
}

async function imageCrawler(url, delay) {
  try {
    let img = await Promise.race([getImage(url), timeOut(delay)]);
    return img;
  } catch (error) {
    console.log(error);
  }
}
```

这里使用 Promise.race 处理超时,要注意的是,如果超时了,请求还是没有终止的,只是不再进行后续处理。当然也不用担心,后续处理会报错而导致重新处理出错信息, 因为 promise 的状态一经改变是不会再改变的

## 场景 5. 并发限制

在并发请求的场景中,如果需要大量并发,必须要进行并发限制,不然会被网站屏蔽或者造成进程崩溃

```js
async function getImages(urls, limit) {
  let running = 0;
  let r;
  let p = new Promise((resolve, reject) => {
    r = resolve;
  });
  function run() {
    if (running < limit && urls.length > 0) {
      running++;
      let url = urls.shift();
      (async () => {
        let img = await getImage(url);
        running--;
        console.log(img);
        if (urls.length === 0 && running === 0) {
          console.log('done');
          return r('done');
        } else {
          run();
        }
      })();
      run(); // 立即到并发上限
    }
  }
  run();
  return await p;
}
```

## 总结

以上列举了一些日常场景处理的代码片段,在遇到比较复杂场景时,可以结合以上的场景进行组合使用,如果场景过于复杂,最好的办法是使用相关的异步代码控制库。如果想更好地了解 async/await 可以先去了解 promise 和 generator, async/await 基本上是 generator 函数的语法糖,下面简单的描述了一下内部的原理。

```js
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(time)
    }, time)
  })
}
function *createTime() {
  let time1 = yield delay(1000)
  let time2 = yield delay(2000)
  let time3 = yield delay(3000)
  console.log(time1, time2, time3)
}
let iterator = createTime()
console.log(iterator.next())
console.log(iterator.next(1000))
console.log(iterator.next(2000))
console.log(iterator.next(3000))
// 输出

{ value: Promise { <pending> }, done: false }

{ value: Promise { <pending> }, done: false }

{ value: Promise { <pending> }, done: false }

1000 2000 3000

{ value: undefined, done: true }

```

可以看出每个 value 都是 Promise,并且通过手动传入参数到 next 就可以设置生成器内部的值,这里是手动传入,我只要写一个递归函数让其自动添进去就可以了

```js
function run(createTime) {
  let iterator = createTime();
  let result = iterator.next();
  function autoRun() {
    if (!result.done) {
      Promise.resolve(result.value)
        .then((time) => {
          result = iterator.next(time);
          autoRun();
        })
        .catch((err) => {
          result = iterator.throw(err);
          autoRun();
        });
    }
  }
  autoRun();
}
run(createTime);
```

promise.resove 保证返回的是一个 promise 对象 可迭代对象除了有 next 方法还有 throw 方法用于往生成器内部传入错误,只要生成内部能捕获该对象,生成器就可以继承运行,类似下面的代码

```js
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time == 2000) {
        reject('2000错误');
      }
      resolve(time);
    }, time);
  });
}
function* createTime() {
  let time1 = yield delay(1000);
  let time2;
  try {
    time2 = yield delay(2000);
  } catch (error) {
    time2 = error;
  }
  let time3 = yield delay(3000);
  console.log(time1, time2, time3);
}
```

可以看出生成器函数其实和 async/await 语法长得很像,只要改一下 async/await 代码片段就是生成器函数了

```js
async function createTime() {
  let time1 = await delay(1000);
  let time2;
  try {
    time2 = await delay(2000);
  } catch (error) {
    time2 = error;
  }
  let time3 = await delay(3000);
  console.log(time1, time2, time3);
}

function transform(async) {
  let str = async.toString();
  str = str.replace(/async\s+(function)\s+/, '$1 *').replace(/await/g, 'yield');
  return str;
}
```
