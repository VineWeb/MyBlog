# React 面试题
## 1. 简单聊一下react
> React是用于构建用户界面的Javascript库，只提供了UI层面的解决方案
1. JSX语法
2. 单向数据绑定
3. 虚拟DOM
4. 声明式编程
5. 函数式变成
### 1.1 组件该有的特点如下： 
  1. 可组合：每个组件易于和其他组件一起使用，或者嵌套在另一个组件内部
  2. 可复用：每个组件都是具备独立功能的，它可以在多个UI场景中使用
  3. 可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护
### 1.2 React优势
1. 高效灵活
2. 声明式的设计，简单易用
3. 组件式开发，提高代码的复用率
4. 单向响应的数据流会比双向绑定的更安全，速度更快
## 2. state和props有什么区别
> 一个组件的显示形态可以由数据状态和外部参数所决定，这个数据状态就是`state`，一般在类组件中的`constructor`中初始化;
> 当需要修改里面的值的状态需要通过调用`setState`来改变，从而达到更新组件内部数据的作用。并且重新调用组件的`render`方法。
> React的核心思想就是组件化的思想，页面会被切分成一些独立的，可复用的组件。
> 组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是`props`, 所以可以把`props`理解为从外部传入组件内部的数据。
1. `React`具有单向数据流的特性，所以他的主要作用是从父组件向子组件**传递数据**;
2. `props`除了可以传递字符串，数字，还可以传递对象，数组甚至是回调函数
### 2.1 区别
相同点： 
1. 两者都是Javascript对象
2. 两者都是用来保存信息
3. props和state都能触发渲染更新
不同点：
1. props是外部传递给组件的，而state是在组件内被组件自己管理的，一般在constructor中初始化的
2. props在组件内部是不可更改的，但state在组件内部可以进行修改
3. state是多变的，可以修改
### 2.2 React Version <= 17 setState
1. React组件事件：异步更新 + 合并state
2. DOM事件：同步更新 + 不合并state
3. setTimeout：同步更新 + 不合并state
### 2.7 React Version 18 setState
1. React组件事件：异步更新 + 合并state
2. DOM事件： 异步更新 + 合并state
3. setTimeout：异步更新 + 合并state
```
import React, { Component } from 'react';
class ClassCom extends Component {
  timer = 0;
  constructor (props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 一. react 18
  /* 
   1. react 组件事件: 异步更新 + 合并 state
  */
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count, 'count')
  }
  timerIncrement = () => {
      /* 
      3. setTimeout 定时器: 异步更新 + 合并 state
      */
    this.timer = setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      this.setState({
        count: this.state.count + 1
      })
      this.setState({
        count: this.state.count + 1
      })
    })
    console.log(this.state.count, 'count')
 
  }
  onBtnClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count, 'count')
  }
  componentDidMount() {
      /* 
       2 . react 组件事件: 异步更新 + 合并 state
      */
    document.getElementById('btn')?.addEventListener('click', this.onBtnClick)
  }

  // 卸载时候要解绑自定义事件, 定时器等...
  componentWillUnmount() {
    document.getElementById('btn')?.removeEventListener('click', this.onBtnClick)
    clearTimeout(this.timer)
  }
  render () {
    return (
      <>
        <p>类组件</p>
        Count: <span>{this.state.count}</span>
        <button style={{width: '80px'}} onClick={this.increment}>组件事件点我+1</button>
        <button style={{width: '80px'}} onClick={this.timerIncrement}>定时器点我+1</button>
        <button style={{width: '80px'}} id='btn'>DOM事件点我+1</button>
      </>
    )
  }
}

export default ClassCom;
```
## 3. React中类组件和函数组件的区别
### 3.1 类组件
> 类组件，顾名思义就是通过`ES6`类的编写形式去编写组件，该类必须继承React.Component;
> 如果想要访问父组件传递的参数，可以通过`this.props`的方式访问
> 在组件中必须实现`render`方法, 在`return`中返回`React`对象
```
// HelloWorld.js 类组件
import React from 'react'
class HelloWorld extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default HelloWorld


// 使用
import React from 'react'
import HelloWorld from './HelloWorld.js'

export default <div>
<HelloWorld name={'World 类组件'}/>
</div>
```

### 3.2 函数组件
> 函数组件，顾名思义就是通过函数编写的形式去实现一个`React`组件，是react中定义组件最简单的方式
```
// HelloWorldFn.js 函数组件
import React from 'react'

function HelloWorldFn (props) {
  return <h1>Hello，{props.name}</h1>
}

export default HelloWorldFn
// 使用
import React from 'react'
import HelloWorldFn from './HelloWorldFn.js'

export default <div>
  <HelloWorldFn name={'World 函数组件'}/>
</div>
```

### 3.3 区别
1. 编写形式
2. 状态管理
  - `hooks`出来之前, 函数组件就是无状态组件，不能保留组件的状态，不能使用`setState`
  - `hooks`出来了，可以使用`useState`来管理函数组件的状态了
3. 生命周期
  - 函数组件使用`useEffect`能够完成替代生命周期的作用
```
import React, { useEffect } from 'react';
const FunctionalComponent = () => {
  useEffect(() => {
    console.log('Hello useEffect!')
  }, [])
  return <h1>Hello FunctionalComponent!</h1>
}
// 上述在useEffect的回调函数中，对应的就是类组件中的componentDidMount生命周期
// 如果在useEffect回调函数中`return`一个函数，则return函数会在组件卸载的时候执行，对应的就是类组件中的componentWillUnmount
import React, { useEffect } from 'react';
const FunctionalComponent = () => {
  useEffect(() => {
    console.log('Hello useEffect 类组件: componentDidMount!')
    return () => {
     console.log('组件卸载时 类组件: componentWillUnmount!')
    }
  }, [])
  return <h1>Hello FunctionalComponent!</h1>
}
``` 
4. 调用方式, react内部调用执行 
   - 函数组件执行 const result = fnCom(props)
   - 类组件执行  const instance = new classCom(props); const result = instace.render()
5. 获取渲染的值
  - 函数组件使用的props, 获取name值用props.name获取即可
  - 类组件要使用props，获取name需要执行this.props.name
  - 在进行绑定的onClick事件时候, 在函数定义内部的handleClick时候
```
// 1. 函数组件
const handleClick = () => {
  // 1.1 逻辑处理
}
return (
  <button onClick={handleClick}>点击</button>
)


// 2. 类组件
 constructor (props) {
  super(props)
  this.handleClick = this.handleClick.bind(this)
 }
 handleClick() {
  // 1.1 逻辑处理
 }
 return (
    <button onClick={this.handleClick}>点击</button>
 )
```
## 4. React事件绑定的方式有哪些？区别在哪里
> 在react应用中，事件名都是用小驼峰格式编写，例如`onclick`要写成`onClick`，示例
```
import React from 'react';
class testComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  onBtnClick = () =>  {
    console.log("按钮点击")
  }
  render () {
    return <button onClick={this.onBtnClick}>点我</button>
  }
}
```
### 4.1 this事件的绑定有如下几种方式
1. render方法中使用bind
2. render方法中使用箭头函数
3. constructor中使用bind
4. 定义函数阶段使用箭头函数绑定
   
**1. render方法中使用bind**
```
// 方法1 render方法中使用bind
import React from 'react';
class App1 extends React.Component {
  constructor(props) {
    super(props)
  }
  onBtnClick () {
    console.log('按钮点击')
  }
  render () {
    return <button onClick={this.onBtnClick.bind(this)}>点我</button>
  }
}
```
**2. render方法中使用箭头函数**
```
// 方法2 render方法中使用箭头函数
import React from 'react';
class App1 extends React.Component {
  constructor(props) {
    super(props)
  }
  onBtnClick () {
    console.log('按钮点击')
  }
  render () {
    return <button onClick={e => this.onBtnClick(e)}>点我</button>
  }
}
```
**3. constructor中使用bind**
```
// 方法3 constructor中使用bind
import React from 'react';
class App1 extends React.Component {
  constructor(props) {
    super(props)
    this.onBtnClick = this.onBtnClick.bind(this)
  }
  onBtnClick () {
    console.log('按钮点击')
  }
  render () {
    return <button onClick={this.onBtnClick}>点我</button>
  }
}
```

**4. 定义函数阶段使用箭头函数绑定**
```
// 方法4 定义函数阶段使用箭头函数绑定
import React from 'react';
class App1 extends React.Component {
  constructor(props) {
    super(props)
  }
  onBtnClick = () => {
    console.log('按钮点击')
  }
  render () {
    return <button onClick={this.onBtnClick}>点我</button>
  }
}
```
> 小结：方式1，方式2写法简单，方式3的编写比较复杂
- 性能方法：方式1，方式2在每次组件render的时候都会生成新的方法实例，性能问题欠缺，且该函数作为属性值传给子组件的时候，也会导致额外的渲染。
- 方式3、方式4只会生成一个方法实例
- 综上，**方式4**为最优的事件绑定方式

## 5. 受控组件和非受控组件
### 5.1 受控组件
> 受控组件，大白话来说，就是受我们控制的组件，组件的状态响应外部数据。
- 简单的例子就是我们使用`state`定义的数据跟`input`的`value`关联绑定，使用`input`的`onChange`去更改`state`变量

```
import React from 'react';
class InputComponent extands React.Component {
  constructor(props) {
    super(props)
    this.state = {username: 'zhangsan'}
  }
  onChangeInpVal = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render () {
    return <input name="name" value={this.state.username} onChange={this.onChangeInpVal}>
  }
}
```

### 5.2 非受控组件
> 非受控组件，简单来说，就是不受我们控制的组件
- 一般情况是在初始化接受外部的数据，然后自己在内部管理其状态，当需要的时候，可以用`ref`查询`DOM`并获取值
```
import React from 'react';
class UnControlCom extands React.Component {
  contructor (props) {
    super(props)
    this.state = { username: 'zhangsan' }
    this.inputRef = React.createRef()
  }
  getNewUsername = () => {
    console.log(this.inpufRef.current.value)
  }
  render () {
    render (
      <input defaultValue={this.state.username} ref={this.inputRef}>
      <button onClick={this.getNewUsername}>点击我获取最新值</button>
    )
  }
}

```
### 5.3 应用场景
- 基本场景类型都可以使用**受控组件**来实现表单，相对数据比较可控。
- 通过最后点击取值，提交，验证数值的可以使用非受控组件。

|          场景                            |     受控组件        |   不受控组件  | 
| ---------------------------------------  | ------------------ | ------------ |
| 点击按钮取值                              |         √          |       √      |     
| 点击按钮验证                              |         √          |       √      |     
| 即时验证                                  |         √          |       ×      |     
| 有条件禁用提交按钮或者控制个别组件显示隐藏   |         √          |       ×      |     
| 强制输入格式验证                           |         √          |       ×      |     
| 动态输入等                                |         √          |       ×      |  

## 6. React 生命周期有哪些不同阶段，每个阶段对应的方法是？
### 6.1. 生命周期（Life Cycle）在 `React`整个组件生命周期包括从创建、初始化数据、编译模板、挂载DOM->渲染、更新 -> 渲染、卸载等一系列过程。
### 6.2. `react16.4`之后的生命周期，分为以下三个阶段：
   - 创建阶段
   - 更新阶段
   - 卸载阶段
#### 6.2.1 创建阶段
- constructor
- getDerivedStateFromProps
- render
- componentDidMount

**6.2.1.1 constructor**
> 实例过程中初始化构造函数，通过方法内部通过super关键字来获取父组件的props，在构造函数内，通常都会初始化`state`状态或者在`this`关键字挂载方法

**6.2.1.2 getDerivedStateFromProps**
1. 该方法是一个静态的方法，无法访问到组件的实例。
2. 执行时机：组件创建和更新阶段，无论是state变化还是props变化，也会调用。
3. 在每次`render`方法前调用，第一个参数为即将更新的`props`, 第二个参数为上一个状态的`state`, 可以比较props和state来加一些限制条件，防止无用的state更新。
4. 该方法需要返回一个新的对象作为新的state或者返回null表示state状态不需要更新。

**6.2.1.3 render**
1. 类组件必须实现的方法，用于渲染DOM结构，可以通过this访问组件的state， props属性。
2. 不在要render里面进行setState，否则会触发死循环导致内存崩溃。

**6.2.1.4 componentDidMount**
1. 组件挂载到真实的DOM节点后执行，在`render`方法后执行。
2. 方法内可以进行一些数据获取，ajax请求，自定义事件监听，定时器的开启等。
3. 一般搭配`componentWillUnmount`进行自定义事件的卸载，清除定时器等操作。

### 6.2.2 更新阶段
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

**6.2.2.1 getDerivedStateFromProps**
1. 静态方法，无法访问实例。
2. 执行时机：组件创建和更新阶段，无论是state变化还是props变化，都会调用。
3. 在每次的rander函数前调用，第一个参数为即将更新的props，第二个参数是上一次的state，可以比较props和state来进行一些特殊处理，防止无用的state更新。
4. 该方法需要返回新的一个对象作为新的state，或者返回null表示此次的state无需更新。

**6.2.2.2 shouldComponentUpdate**
1. 用于表明组件本身是基于当前的props和state是否需要重新渲染组件，默认情况返回true。
2. 执行时机：到新的props或者state时都会调用，通过返回true或者false表示组件更新与否。
3. 一般情况，不建议在该周期方法中进行深层比较，影响效率。
4. 同时，禁止调用setState，会导致无限循环调用更新。

**6.2.2.3 render**
1. 类组件必须实现的方法，用于渲染DOM结构，可以访问组件的`state`和`props`。
2. 不要在`rander`里面进行`setState`操作，会导致死循环造成内存崩溃。

**6.2.2.4 getSnapshotBeforeUpdate**
1. 该周期函数，在`render`后执行，执行的时候DOM还未更新，该方法返回一个`Snapshot`值，作为`componentDidUpdate`第三个参数传入。
```
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log(prevProps, prevState, 'getSnapshotBeforeUpdate')
  return {name: '附加值'}
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log(prevProps, prevState, snapshot, 'componentDidUpdate')
}

```
2. 该方法可以获取组件更新前的信息，比如组件滚动前的位置，方向等，在组件更新后恢复一些UI视觉上的状态。

**6.2.2.5 componentDidUpdate**
1. 执行时机：组件更新结束后触发。
2. 在该方法中，可以根据前后的props和state的变化做对应的操作，比如获取数据，修改DOM样式等。

### 6.2.3 卸载阶段
1. componentWillUnmount
- 此方法用于组件卸载前，清理一些注册的自定义事件，取消订阅，还有定时器的清除等等

### 6.3 生命周期如图下所示:
<imgShow :url="ReactLifeCycle" />

<script setup lang="ts">
import imgShow from './components/imgShow.vue';
import ReactLifeCycle from './images/react-lifeCycle.jpg'
</script>