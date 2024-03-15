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

<script lang="ts" setup>
import clonePng from './images/clone.png'
import ImgShow from './components/imgShow.vue'
</script>