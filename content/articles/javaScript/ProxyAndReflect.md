---
title: 'es6 深入理解 Proxy 和 Reflect 这对影子兄弟'
---

## 前言

vue3.0 使用了 Proxy 对象做响应式系统,让很多人都认识了 Proxy 对象,vue3.0 中的响应式数据甚至是组件实例,其实都是 Proxy 对象。但是这篇文章不是说 Proxy 对象在 vue3.0 是怎样发挥作用的,而是说说其影子兄弟 Reflect。既然是影子,自然是相映相随的。Reflect 中文解释可以是映射,也正好说明其设计初衷。简单来说 Proxy 对象代理并拦截目标对象特定行为,而这些行为都有其默认行为,而 Reflect 对象就是方便可以实现这些默认行为,Proxy 有多少拦截类型,Reflect 就实现了多少对应类型的映射函数([Proxy 对象的拦截类型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy), [Reflect 对象的映射 API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 如果对这个两个对象还不是很了解,可以先看看上面链接中对这两个对象的介绍)  
可能你会想,我都知道默认行为了,自已实现不就可以了,为什么还需要 Reflect,为了说明这个问题,下文将针对 set 这个常用拦截类型去说明,如果不用 Reflect 去实现你将遇到多少问题,才能成功实现其默认行为。

## 存取器属性搭上 receiver 参数

### 基础实现

下面先定义基础的代码

```javascript
const target = {
  _name: '目标对象',
  get name() {
    return this._name;
  },
  set name(name) {
    this._name = name;
  },
  age: 18
};
const defaultProxy = new Proxy(target, {});
const customProxy = new Proxy(target, {
  set(target, key, value, receiver) {
    target[key] = value;
  }
});
```

### 存取器属性

先看设置的 target 对象,也就是代理的目标对象,先看 name 属性,可以看到该属性前面有 get set 标识,这类属性叫存取器属性,在访问值和设置值时才会惰性执行对应的 getter setter 函数。
每一个普通对象属性都有一个对应属性描述对象,下面是其属性描述符对象

```javascript
Object.getOwnPropertyDescriptor(target, 'name')
{enumerable: true, configurable: true, get: ƒ, set: ƒ}
```

age 属性是一个数据属性,其属性描述符对象是

```js
Object.getOwnPropertyDescriptor(target, 'age')
{value: 18, writable: true, enumerable: true, configurable: true}
```

如果要让一个属性变为只读可以把数据属性的 writable 设置为 false,或者把存取器属性的 set 设置为 undefined,具体怎么设置属性的描述符对象下文会有提及,以上只是稍微说一下基础的知识,下面回归正题

### 触发 set 拦截的行为

defaultProxy 是一个默认的代理对象,没有设置任何拦截行为,接着设置了一个 customProxy 对象并设置了 set 拦截行为,这个方法具有 4 个参数,比较有疑惑的可能是 receiver 参数,下面通过例子就可以知道该参数的作用了。set 方法内部的代码就是要实现 set 拦截的默认行为,如果不用 Reflect 对象,实现其默认行为要遇到多少问题,就是下面要详细说明的内容。

在开始前先根据文档列出了能触发 set 拦截行为的操作

- Property assignment: proxy[foo] = bar and proxy.foo = bar
- Inherited property assignment: Object.create(proxy)[foo] = bar 代理对象位于原型链上,在这种情况下拦截函数的 receiver 指向子类实例对象
- Reflect.set() 准确来说是 Reflect.set(proxy, key, value, receiver?) 注意第一个参数是代理对象不是目标对象,receiver 是可选值,不存在时指向第一个参数

### 基础实现的问题

先从最容易的实现开始

```js
target[key] = value;
```

先看默认行为,这里是控制台输出

```js
defaultProxy.name = 'hello world';
('hello world');
target.name;
('hello world');
defaultProxy.age = 3;
3;
target.age;
3;
```

再看实现的默认行为

```js
customProxy.name = 'hello world';
('hello world');
customProxy.name;
('hello world');
customProxy.age = 3;
3;
customProxy.age;
3;
```

看似都一样,是不是就已经成功了?下面我们把 set name 修改一下,让其读出 this

```js
set name(name) {
  console.log(this)
  this._name = name
},
```

设置 `defaultProxy.name = 'hello world'` this 的输出是 `Proxy {_name: "hello world", age: 18}`  
设置 `customProxy.name = 'hello world'` this 的输出是 `{_name: "目标对象", age: 18}`  
设置 `defaultProxy.name = 'hello world'` this 的输出是 `Proxy {_name: "hello world", age: 18}`  
设置 `Reflect.set(defaultProxy, 'name', 'hello world')` this 的输出是 `Proxy {_name: "hello world", age: 18}`  
设置 `Reflect.set(defaultProxy, 'name', 'hello world', { a: 1})` this 的输出是 `{a: 1}`  
设置 `Reflect.set(customProxy, 'name', 'hello world', { a: 1})` this 的输出是 `{_name: "hello world", age: 18}`  
可以看出使用 cunstomProxy 其 this 值总是指向目标对象,因为我们的实现就是简单的对象属性赋值,this 自然就指向目标对象。而默认行为中,this 是指向代理对象的,而通过 `Reflect.set(defaultProxy, 'name', 'hello world', { a: 1})`可以看出 this 更严格来说是指向 receiver 参数,在没有传入时就取第一个参数的值。

### 修复存取器属性

很明显这里实现的默认行为是有问题的,针对这类问题可以修复为

```js
set(target, key, value, receiver) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key)
  if(descriptor.hasOwnProperty('set')) {
    const setter = descriptor.set
    if(typeof setter === 'function' ) {
      setter.call(receiver, value)
    }
  } else {
    target[key] = value
  }
}
```

然后按上面的测试方法,测试了一番,发现都满足默认行为了,但是到这步只解决了存取器属性的问题,还有数据属性的还没有解决,下面看看数据属性你会遇到什么问题。

## 隐匿的 defineProperty 陷阱拦截

### 增加 defineProperty 拦截

在开始介绍这个问题前,先增加默认代理对象和实现代理对象一个 defineProperty 拦截,由于是针对 set 拦截实现默认行为,为了不引入其他问题,直接就使用 `return Reflect.defineProperty(target, property, descriptor)` 实现 defineProperty 拦截的默认行为

```js
const defaultProxy = new Proxy(target, {
  defineProperty(target, property, descriptor) {
    console.log(`defaultProxy defineProperty 拦截触发`, target, property, descriptor);
    return Reflect.defineProperty(target, property, descriptor);
  }
});
const customProxy = new Proxy(target, {
  set(target, key, value, receiver) {
    const descriptor = Object.getOwnPropertyDescriptor(target, key);
    if (descriptor.hasOwnProperty('set')) {
      const setter = descriptor.set;
      if (typeof setter === 'function') {
        setter.call(receiver, value);
      }
    } else {
      target[key] = value;
    }
  },
  defineProperty(target, property, descriptor) {
    console.log(`cunstomProxy defineProperty 拦截触发`, target, property, descriptor);
    return Reflect.defineProperty(target, property, descriptor);
  }
});
```

### 分析拦截逻辑

下面执行默认行为

```js
defaultProxy.name = 'hello world'
Proxy {_name: "目标对象", age: 18}
defaultProxy defineProperty 拦截触发 {_name: "目标对象", age: 18} _name {value: "hello world"}
"hello world"
defaultProxy.age = 3
defaultProxy defineProperty 拦截触发 {_name: "hello world", age: 18} age {value: 3}
3
```

下面执行实现行为

```js
customProxy.name = 'hello world'
Proxy {_name: "目标对象", age: 18}
"hello world"
customProxy.age = 3
3
```

可以看出默认的代理行为在设置属性时会触发 defineProperty 拦截,而查看文档你会发现,触发 defineProperty 拦截的行为有

- Object.defineProperty()
- Reflect.defineProperty()  
  这里没有提到对象属性赋值也会触发 defineProperty 拦截,那这个触发行为应该是 set 默认行为所触发,如果要实现该默认行为也需要在 set 拦截中去实现。
  仔细分析以上的输出可以发现,触发 defineProperty 拦截的属性是 `_name` 和 `age`,并没有 `name`, `_name` 是因为在设置 name 属性时在对应的 setter 函数执行时进行赋值的,从而执行对应的拦截函数,也就是在设置数据属性时会触发 defineProperty 拦截,而设置存取性属性时并不会触发 defineProperty 拦截。

### 修复数据属性

基于上面的分析,让 set 拦截触发 defineProperty 拦截

```js
set(target, key, value, receiver) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key)
  if(descriptor.hasOwnProperty('set')) {
    const setter = descriptor.set
    if(typeof setter === 'function' ) {
      setter.call(receiver, value)
    }
  } else {
    Object.defineProperty(receiver, key, {
      value: value
    })
  }
},
```

再次运行测试

```js
customProxy.name = 'hello world'
Proxy {_name: "目标对象", age: 18}
cunstomProxy defineProperty 拦截触发 {_name: "目标对象", age: 18} _name {value: "hello world"}
"hello world"
customProxy.age = 3
cunstomProxy defineProperty 拦截触发 {_name: "hello world", age: 18} age {value: 3}
3
```

以上的测试都是在修改已经存在的属性,如果增加属性, `Object.getOwnPropertyDescriptor(target, key)` 会返回 undefined,执行 hasOwnProperty 方法是会报错的。  
当一个属性使用对象属性赋值的方式设置时,会默认设置为数据属性,而且是可枚举可配置和可写的。  
而且还有一点 Object.defineProperty 这个方法设置属性时,如果属性是新属性,那些忽略设置的描述属性都默认为 false 或者是 undefined,如果是已经存在的属性,忽略设置的描述属性取原来的值,例如

```js
let o = {}
Object.defineProperty(o, 'value', { value: '2'})
{value: "2"}
Object.getOwnPropertyDescriptor(o, 'value')
{value: "2", writable: false, enumerable: false, configurable: false}
o.name = 'hh'
"hh"
Object.getOwnPropertyDescriptor(o, 'name')
{value: "hh", writable: true, enumerable: true, configurable: true}configurable: trueenumerable: truevalue: "hh"writable: true__proto__: Object
Object.defineProperty(o, 'name', { value: '3', enumerable: false})
{value: "2", name: "3"}
Object.getOwnPropertyDescriptor(o, 'name')
{value: "3", writable: true, enumerable: false, configurable: true}
```

基于这些要求重新修改 set 实现

```js
set(target, key, value, receiver) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key)
  if(descriptor && descriptor.hasOwnProperty('set')) {
    const setter = descriptor.set
    if(typeof setter === 'function' ) {
      setter.call(receiver, value)
    }
  } else {
    Object.defineProperty(receiver, key, descriptor ? {
      value: value, // 为保持和默认行为一致,不能修改 descriptor.value 后把 descriptor 返回
    } : {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    })
  }
},
```

### defineProperty 拦截的作用

基于上面的实现,也实现了在代理对象作用原型对象时,把数据属性设置在子类实例身上。
看下面的例子

```js
const children = Object.create(target);
children.name = 'hello world';
console.log(children.hasOwnProperty('name')); // false
console.log(children.hasOwnProperty('_name')); // true
children.age = 3;
console.log(children.hasOwnProperty('age')); // true
console.log(children.age); // 3
console.log(target.age); // 18

const children2 = Object.create(defaultProxy);
children.name = 'hello world';
console.log(children.hasOwnProperty('name')); // false
console.log(children.hasOwnProperty('_name')); // true
children.age = 3;
console.log(children.hasOwnProperty('age')); // true
console.log(children.age); // 3
console.log(target.age); // 18

const children3 = Object.create(customProxy);
children.name = 'hello world';
console.log(children.hasOwnProperty('name')); // false
console.log(children.hasOwnProperty('_name')); // true
children.age = 3;
console.log(children.hasOwnProperty('age')); // true
console.log(children.age); // 3
console.log(target.age); // 18
```

当代理对象在原型链上时,子类实例设置属性时,一样会触发代理的拦截行为,这个时候 receiver 参数的值表示的是子类实例,也就是这里的 children,如果 children 设置的属性是存取器属性默认会调用原型链对象中对应属性的 getter setter 函数,而并不会设置在 children 身上。如果是新属性或者是数据属性,那么会设置在自身身上,并不会修改原型链上的属性。如果不采用 defineProperty 进行设置,直接通过 ` receiver[key] = value` 来实现,就会出现无限递归。  
数据属性和存取器属性都修复了,还有什么问题吗

## Invariants

如果你有看文档,你会发现每一个拦截操作中都有一个 Invariants,中文翻译为不变式。我的理解就是对拦截行为的限制,如果你的拦截行为超出了限制,就会报 TypeError  
先来看看 set 拦截的限制

- Cannot change the value of a property to be different from the value of the corresponding target object property if the corresponding target object property is a non-writable, non-configurable data property.
  这条限制是针对数据属性的,如果设置的对象属性是非可配置和非可读的,那么拦截函数不能返回 true
- Cannot set the value of a property if the corresponding target object property is a non-configurable accessor property that has undefined as its [[Set]] attribute
  这条限制是针对存取器属性的,如果设置的对象属性是非可配置且 set 为 undefined,,那么拦截函数不能返回 true
- In strict mode, a false return value from the set() handler will throw a TypeError exception.
  前两条都表明该属性如果是只读属性,就应该是不能修改的,最后一条就是在严格模式下如果返回 false 会触发报错

```js
const o = {};
Object.defineProperty(o, 'level', {
  value: 5 // 没有设置的描述属性均为 false
});
Object.defineProperty(o, 'grade', {
  set: undefined // 没有设置的描述属性均为 false, get 为 undefined
});
const proxy = new Proxy(o, {
  set() {
    return true; // 强行认为可以修改,就会触发拦截行为限制错误
  }
});
// proxy.level = 666 // Uncaught TypeError: 'set' on proxy: trap returned truish for property 'level' which exists in the proxy target as a non-configurable and non-writable data property with a different value
// proxy.grade = 666 // Uncaught TypeError: 'set' on proxy: trap returned truish for property 'grade' which exists in the proxy target as a non-configurable and non-writable accessor property without a setter

void (function () {
  'use strict';
  const proxy2 = new Proxy(o, {
    set() {
      return false;
    }
  });
  proxy2.a = 1;
  console.log(o); // Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'a'
})();
```

如果要正确触发这类默认行为,那么在实现中需要正确 return 设置是否成功的信息,这里可能有点难理解,可以看看这个例子

```js
const o = {};
Object.defineProperty(o, 'level', {
  value: 5 // 没有设置的描述属性均为 false
});
const proxy = new Proxy(o, {});
proxy.level = 6;
```

这个并不会报错,因为默认行为知道了这个是不能设置的,因此默认拦截函数就返回了 false,因此你如果要实现默认行为,也需要返回一个正确设置与否的信息。不能设置就应该返回 false,可以设置就应该返回 true。

### 返回设置信息

基于这点我们再来看看有返回时的实现

```js
set(target, key, value, receiver) {
const descriptor = Object.getOwnPropertyDescriptor(target, key)
if (typeof descriptor === 'object') {
  if(descriptor.configurable === 'false' && (descriptor.writable === 'false' || descriptor.set === 'undefined')) {
    return false
  }
}
if(descriptor && descriptor.hasOwnProperty('set')) {
  const setter = descriptor.set
  if(typeof setter === 'function' ) {
    setter.call(receiver, value)
    return true
  }
} else {
  Object.defineProperty(receiver, key, descriptor ? {
  value: value, // 为保持和默认行为一致,不能修改 descriptor.value 后把 descriptor 返回
  } : {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  })
  return true
}
},
```

下面测试一下

```js
Object.defineProperty(target, 'level', {
  value: 5
});
void (function () {
  'use strict';
  defaultProxy.level = 6; //Uncaught TypeError: Cannot assign to read only property 'level' of object '[object Object]'
})();
void (function () {
  'use strict';
  customProxy.level = 6; // Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'level'
})();
```

虽然都按期望那样报错了,但是报错的内容不同,很明显默认行为还执行了其他的操作。

## 总结

最后,其实还是没有实现 set 的真实默认行为,但是通过这个例子,也可以清楚了解到,要模拟真实的默认拦截行为是很复杂的,而 Reflect 设计出来就是为了解决这样的难题。  
下面就是正确的实现

```js
set(target, key, value, receiver) {
  return Reflect.set(target, key, value, receiver)
}
```

如果使用了拦截函数,并需要执行默认行为,如果要保持代码的健壮性,传入的参数都需要全部传入到 Reflect 对象内,如果漏掉 receiver, receiver 会被当做第一个参数,这样就不会触发 defineProperty 拦截,这个就违背了默认行为

```js
Reflect.set(target, 'age', 3)
true
Reflect.set(target, 'age', 3, defaultProxy)
defaultProxy defineProperty 拦截触发 {_name: "目标对象", age: 3} age {value: 3}
true
```

还需要注意的是需要 return 该返回值,不然不会正确触发 Invariants 的限制行为

这里举的是 set 拦截的例子,其他的拦截例子,如果需要调用默认行为也都是同样的操作,注意两点

- Reflect 中传入全部参数
- return Reflect 的执行结果

## 参考

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set
