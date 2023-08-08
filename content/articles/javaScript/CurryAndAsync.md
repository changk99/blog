---
title: '柯里化在异步编程的应用'
---

## 柯里化

js 中函数作为一等公民,函数执行中既可以作为函数的参数也可以作为函数的返回值,而这类执行函数叫做高阶函数,利用高阶函数的特性很容易就可以实现柯里化(_柯里化(Currying)是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术_),根据百科的理解大概就是下面的例子。

```js
function add(x, y) {
  return x + y;
}
function curryind_add(x) {
  return function (y) {
    return x + y;
  };
}
const curried_add = curryind_add(1);
curried_add(2); // 3
curried_add(3); // 4
```

从例子可以看出,柯里化有防止参数重复的作用,而且具有延迟执行的特征。下面利用柯里化的特征看看在异步编程的应用,在开始时先简单介绍一下 async/await 的原理。

## Generator 和 promise

async/await 语法其实是 Generator 和 promise 的语法糖。

Generator 函数执行时会返回一个生成器对象,该对象是一个特殊的迭代器对象,而且本身也是一个可迭代对象([迭代器对象和可迭代对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)),下面说说其特殊性。

```js
function* generator() {
  const value = yield 1;
  console.log(value);
  try {
    // 捕获错误
    yield 2;
  } catch (e) {
    console.log(e);
  }
}
const iterator = generator();
iterator === iterator[Symbol.iterator](); // true 自身部署了可迭代接口,该接口返回自身
[...iterator]; // [1, 2]

const iterator2 = generator(); // 迭代器对象是一次消耗的,需要重新起一个迭代器
iterator2.next(); // {value: 1, done: false}
iterator2.next(`value 的值`); // 利用 next 向生成器函数发送数据
iterator2.throw(new Error('error')); // 利用 throw 向生成器函数抛出错误
```

从上面的例子可以看出,生成器对象,在迭代的过程中是可以和生成器函数进行通信的,如果用在 promise 中,只要把 promise 在状态改变后执行的回调结果回传到生成器函数内就可以实现类似 async/await 的效果。而迭代过程,可以实现一个执行器函数进行迭代,这个函数就类似于执行 async。

```js
function createDelayPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

function* createIterator() {
  const time1 = yield createDelayPromise(1000);
  console.log(time1);
  const time2 = yield createDelayPromise(2000);
  console.log(time2);
  const time3 = yield createDelayPromise(3000);
  console.log(time3);
  return time1 + time2 + time3;
}

function run(createIterator) {
  const iterator = createIterator();
  let result = iterator.next();
  let r;
  const p = new Promise((resolve) => {
    r = resolve;
  });
  function next() {
    if (result.done) {
      r(result.value);
    } else {
      Promise.resolve(result.value)
        .then((value) => {
          result = iterator.next(value);
          next();
        })
        .catch((err) => {
          result = iterator.throw(err);
          next();
        });
    }
  }
  next();
  return p;
}

run(createIterator).then((value) => {
  console.log(value);
});
```

上面使用 createDelayPromise 封装了一个 promise 类型的异步任务,然后使用 next 方法去迭代这个迭代器对象。等待对应的异步任务有结果后就通过生成器对象的 next 和 throw 方法把结果回传到生成器函数中。  
上面是使用 promise 配合 generator 可以让异步代码以类似同步的形式写在生成器函数中,同样地对应柯里化后的函数,同样具有延迟执行的效果,也可以通过配合 generator 实现类似的效果。

## Generator 和 柯里化

除了一些接口是实现了 promise 化外,有很多比较久的接口依然是使用 callback 类型的接口,像 node 中的很多接口会把 callback 参数放在参数列表的末尾,并把 err 放在回调执行的第一个位置,类似这样

```js
function createDelayCurry(time, callback) {
  setTimeout(() => {
    callback(null, time);
  }, time);
}
```

下面通过实现不同以上的 run 方法,结合柯里化实现以上的效果,这次 yield 后面不再是 promise 化后的对象,而是柯里化后的函数  
在开始之前先实现一个通用的 curry 函数

```js
const curry = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
```

这个 curry 函数的作用是等初始存入的函数的参数收集够就执行,如果不够就继续收集,下面会在迭代中补上回调参数,这样异步任务才可以执行。

```js
const curry = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);

function createDelayCurry(time, callback) {
  setTimeout(() => {
    callback(null, time);
  }, time);
}

const curringDelay = curry(createDelayCurry);

function* createIterator() {
  const time1 = yield curringDelay(1000);
  console.log(time1);
  const time2 = yield curringDelay(2000);
  console.log(time2);
  const time3 = yield curringDelay(3000);
  console.log(time3);
  return time1 + time2 + time3;
}

function run(createIterator, callback) {
  const iterator = createIterator();
  let result = iterator.next();
  function next() {
    if (result.done) {
      callback(null, result.value);
    } else {
      result.value((err, value) => {
        // 补上最后 callback 参数启动任务
        if (err) {
          result = iterator.throw(err);
          next();
        } else {
          result = iterator.next(value);
          next();
        }
      });
    }
  }
  next();
}

run(createIterator, (err, value) => {
  console.log(err, value);
});
```

执行效果和 promise 版是差不多一样的。

## 并行

上面是串行的版本,下面看看并行的实现  
先看 promise 并行一般写法

```js
function* createIteratorParallel() {
  const times = yield Promise.all([
    createDelayPromise(1000),
    createDelayPromise(2000),
    createDelayPromise(3000)
  ]);
  return times;
}
```

相应的也实现一个 all 方法

```js
function curryAll(curries, callback) {
  let len = curries.length;
  let result = [];
  let count = 0;
  curries.forEach((curried, index) => {
    curried((err, value) => {
      if (err) {
        callback(err);
        return;
      } else {
        count++;
        result[index] = value;
        if (count == len) {
          callback(null, result);
        }
      }
    });
  });
}

const curriedAll = curry(curryAll);

function* createIteratorParallel() {
  const times = yield curriedAll([curringDelay(1000), curringDelay(2000), curringDelay(3000)]);
  return times;
}
```

yield 后面依然是柯里化后的函数

## es 新语法

上面的方案要求异步任务的回调需要在参数的末尾位置,如果回调不在末尾,那么就需要修改 curry 函数的实现方式,但是有没有可能不用修改其实现方式,甚至不用写 curry 呢?  
curry 作为函数式编程的基本单元,最新的 es 规范实验性地从语法的角度提供了支持。

```js
function add(x, y) {
  return x + y;
}

const addOne = add(1, ?); // apply from the left
addOne(2); // 3

const addTen = add(?, 10); // apply from the right
addTen(2); // 12
```

以上的 addOne addTen 就是一个柯里化后的函数,这个语法大部分浏览器都没有支持,如果要使用也很简单,使用一个 babel 插件就可以了 `babel --plugins @babel/plugin-proposal-partial-application script.js`{lang=sh}
如果使用了上面的语法,可以不用引入 curry 函数

```js
function* createIterator() {
  const time1 = yield createDelayCurry(1000, ?);
  console.log(time1);
  const time2 = yield createDelayCurry(2000, ?);
  console.log(time2);
  const time3 = yield createDelayCurry(3000, ?);
  console.log(time3);
  return time1 + time2 + time3;
}
```

如果 callback 在前面,那么就把问号放在前面,实际上可以放在任何参数位置上,主要看具体的接口要求。

## 总结

柯里化的应用非常广泛,上面只是举了一个简单的例子,通过这个例子,也了解了 async/await 基本实现原理,虽然 async/await 已经被广泛支持,promise 也被广泛使用,可能不再需要直接使用生成器函数了,但也不妨碍去简单地了解一下。
