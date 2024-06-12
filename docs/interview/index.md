# 面试题
## 第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，
其作用是什么？
> key 是给每一个 vnode 的唯一`id`， 可以依靠 key，更准确，更快的拿到 oldVnode 中对应的 vnode 节点

## 第 2 题：['1', '2', '3'].map(parseInt)
> `Array.prototype.map(callbackFn: (value: T, index: number, array: T[]) => U, thisArg?: any)`
> `parseInt(string, radix)`
```js
parseInt('1', 0)
parseInt('2', 1)
parseInt('3', 2)

// [1, NaN, NaN]
```
## 第 3 题：什么是防抖和节流？有什么区别？如何实现？
> 防抖——触发高频事件后 n 秒后函数只会执行一次，如果 n 秒内高频事件再
次被触发，则重新计算时间；
```js
function debounce(fn, delay = 400) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
```
> 节流——高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执
行频率。

```js
function throttle(fn, delay = 400) {
  let timer = null
  return function () {
    if (timer) return 
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
```