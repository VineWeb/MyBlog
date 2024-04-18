# JavaScript 面试题
## 1.说说Javascript中的数据类型? 存储上的差别?
### 1.1 基本类型主要为:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
### 1.2 复杂类型(引用类型): 主要有
- Object
- Array
- Function
- Map
- Set
  
### 1.3 `基本`数据类型和`引用`数据类型在内存在的位置不同: 
- 基本数据类型存储在`栈`中
- 引用数据类型的对象存储在`堆`中, 引用类型的引用地址在`栈`中
### 1.4 小结
1. 简单类型的值存放在`栈`中, 在栈中存放的是对应的值
2. 引用类型对应的值存储在堆中, 在栈中存放的是指向堆内存的地址, 也就是`引用地址`
3. 简单类型赋值, 是生成相同的值, 两个值对应不同的内存
4. 复杂类型赋值, 是将保存对象的内存地址赋值给另一个变量。也就是两个变量指向堆内存中同一个对象，也就是说更改一个对象的属性值，另一个对象也跟着改变。(浅拷贝)
5. 浅层的对象用`...`拓展符进行拓展后, 是深拷贝。
```
  const num = 1
  const str = '字符串'
  const flag = false
  let obj1 = {name: '张三', age: 18, getName: function () {return this.name}}
  let obj2 = obj1
  let obj3 = {...obj1}
  obj2.name = '李四'
  obj3.name = '王五'
  console.log(obj1.name) // 李四
  console.log(obj2 === obj1) // true
  console.log(obj3 === obj1) // false
```
### 1.5 编写一个简单的深拷贝 只考虑 [] 和 {} 的情况
```
  // 只考虑 [] 和 {} 的情况
  const deepClone = (obj) => {
    const isObject = typeof obj === 'object' && obj !== null
    if (!isObject) {
      return obj
    }
    const isArr = Array.isArray(obj)
    let result = isArr ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepClone(obj[key])
      }
    }
    return result
  }
  const obj = {name: '张三', age: 18, info: {address: '广州'}}
  const obj1 = obj
  const obj2 = deepClone(obj)
  obj1.name = '李四'
  obj1.info.address = '深圳'
  obj2.name = '王五'
  obj2.info.address = '北京'
  console.log(obj1 === obj) // true
  console.log(obj2 === obj) // false
  console.info(obj, 'obj') 
  /* obj 和 obj1
  {
    "name": "李四",
    "age": 18,
    "info": {
      "address": "深圳"
    }
  }
  */
  console.log(obj2, 'obj2')
  /* obj2
  {
    "name": "王五",
    "age": 18,
    "info": {
      "address": "北京"
    }
  }
  */
```
### 1.5.2  JSON 序列化与反序列化(JSON.parse和JSON.stringify)
```
// 通过将对象转换为JSON字符串，然后再将其解析回对象，实现深拷贝。
// 这种方法有一些限制，例如无法处理包含函数, Null, RegExp等特殊对象的情况。
const obj = {name: '张三', age: 18, info: {address: '广州'}}
const deepCopyObj = JSON.parse(JSON.stringify(obj));
```

### 1.6.3  使用第三方库 `lodash`
```
const _ = require('lodash');
const obj = {name: '张三', age: 18, info: {address: '广州'}}
const deepCopyObj = _.cloneDeep(obj);
```

### 1.7 深浅拷贝栈堆内存, 以及值的变化
1. 基本类型都是`值的复制`
2. 引用类型都是`引用地址的复制`
3. 赋值的情况，要先判断类型是`基本类型`还是`引用类型`
### 1.8 图示

<ImgShow :url="clonePng" />

## 2. JavaScript 本地存储的方式有哪些？区别和应用场景？
1. cookie
2. sessionStorage
3. localStorage
4. indexedDB
  
### 2.1 cookie
> 类型为[小型文本文件]，指某些网站为了辨别用户身份而储存在用户本地终端上的数据，是为了解决http无状态导致的问题。
- 内存不超过4KB的小型文本数据
- 由名称（name）、值（value）和其他几个用于控制cookie有效期，安全性，使用范围的可选属性组成。
  1. Expires 用于设置Cookie的过期时间
  2. Max-Age用于设置在Cookie失效之前需要经过的秒数(优先级比`Expires`高)
  3. Domain指定了`Cookie`可以送达的主机名
  4. Path指定了一个URL路径，这个路径必须出现在要请求的资源的路径中才可以发送`Cookie`首部
  5. 标记为Secure的Cookie只应通过被HTTPS协议加密过的请求发送给服务端

### 2.2 localStorage
- 大小 5M左右
- 存储的信息在同一域中是共享的
- 生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期
- 受同源策略的限制
- 缺点：无法像`Cookie`一样设置过期时间
- 只能存入字符串，无法直接存对象

### 2.3 sessionStorage
`sessionStorage`和`localStorage`使用方法基本一致，唯一不同的是生命周期

- 一旦页面（会话）关闭，`sessionStorage`将会删除数据

### 2.4 关于cookie、sessionStorage、localStorage三者的区别主要如下：
- 存储大小：`cookie`数据大小不能超过`4k`，`sessionStorage`和`localStorage`虽然也有存储大小的限制，但比`cookie`大的多，可以达到`5M`
- 有效时间: `localStorage`存储持久数据，浏览器关闭后数据不丢失，除非主动删除数据。`sessionStorage`数据在当前浏览器窗口关闭后自动删除，`cookie`设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭
- 数据和服务器之间的交互方式，`cookie`的数据会自动的传递到服务器，服务器端也可以写`cookie`到客户端；`sessiongStrage`和`localStorage`不会自动把数据发给服务器，仅在本地保存。

### 2.5 应用场景
- 标记用户与跟踪用户行为的情况，推荐使用`cookie`
- 适合长期保存在本地的数据(令牌)，推荐使用`localStorage`
- 敏感账号一次性登录，推荐使用`sessionStorage`
- 存储大量数据的情况，在线文档（富文本编辑器）保存编辑历史的情况，推荐使用`indexedDB`

<script lang="ts" setup>
import clonePng from './images/clone.png'
import ImgShow from './components/imgShow.vue'
</script>