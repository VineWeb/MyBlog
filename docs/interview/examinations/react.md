# React 面试题
## 1. 简单聊一下react
> React是用于构建用户界面的Javascript库，只提供了UI层面的解决方案
1. JSX语法
2. 单向数据绑定
3. 虚拟DOM
4. 声明式编程
5. 函数式编程
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
### 2.3 React Version 18 setState
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
class InputComponent extends React.Component {
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
class UnControlCom extends React.Component {
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

## 7. React的事件机制
> React基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等。

1. 合成事件是React模拟原生DOM事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。
2. 执行顺序代码如下: 
```
// index.scss
.parent {
  padding: 20px;
  height: 100px;
  background-color: skyblue;
}
.children {
  margin-top: 20px;
  padding: 10px;
  background-color: pink;
}
```
EventCom.tsx的代码如下: 
```
// EventCom.tsx
import React from 'react';
import './index.scss'
class EventCom extends React.Component {
  constructor (props: {} | Readonly<{}>) {
    super(props)
    this.parentRef = React.createRef()
    this.childrenRef = React.createRef()
  }
  handleParent = () => {
    console.log('React事件, 父元素的点击')
  }
  handleChildren = () => {
    console.log('React事件, 子元素的点击')
  }
  componentDidMount () {
    this.parentRef.current.addEventListener('click', () => {
      console.log('dom 元素 父元素的点击')
    })
    this.childrenRef.current.addEventListener('click', () => {
      console.log('dom 元素 子元素的点击')
    })
    document.addEventListener('click', () => {
      console.log('dom 元素的点击')
    })
    document.body.addEventListener('click', () => {
      console.log('dom body 元素的点击')
    })
  }
  render () {
    return (
      <div className='parent' ref={this.parentRef} onClick={this.handleParent}>
        父元素
        <div className='children' ref={this.childrenRef} onClick={this.handleChildren}>
          子元素
          事件的执行顺序
        </div>
      </div>
    )
  }
}
export default EventCom;
```
> 当点击**天空蓝**的父元素时候，打印如下
<imgShow :url="ReactEventParent"/>

> 当点击**粉色**的子元素时候，打印如下
<imgShow :url="ReactEventChildren"/>

### 小结：
- React所有事件都挂载在document对象上。
- 当真实的DOM元素触发事件，会冒泡执行元素一直到根元素，再处理React事件。
- 优先执行原生事件，然后再处理React事件，最后再执行挂载document的事件

## 8.React 组件之间的通讯
> 组件间通信即指组件通过某种方式来传递信息以达到某个目标

### 8.1 组件通信/传递有多少种, 根据传送者和接收可以分为如下
1. 父组件向子组件传递
2. 子组件向父组件传递
3. 兄弟之间的通信
4. 组件向嵌套组件(后代组件)传递
5. 非关系组件传递

#### 8.1.1 父组件向子组件通讯
> 父组件调用子组件的时候，在子组件传递参数，子组件通过`props`属性就能接收到父组件传递过来的参数
```
// ParentCom.tsx
import React from "react";
function ChildrenCom (props: any) {
  console.log(props)
  return (
    <div>{props.name}</div>
  )
}
function ParentCom () {
  return (
    <>
      <div>父元素</div>
      <ChildrenCom name="父元素传递过来的值" />
    </>
  )
}

export default ParentCom
```
#### 8.1.2 子组件向父组件通讯
> 子组件往父组件通信：父组件向子组件传递一个函数，然后通过这个函数的回调，拿到子组件传过来的值。
```
import React from 'react';
class ChildrenCom extends React.Component {
  constructor (props: { getName: () => void }) {
    super(props)
  }
  getName = (name: string) => {
    console.log(name, 'name')
    this.props.getName(name)
  }
  render () {
    return (
      <>
      <button onClick={() => this.getName('张三')}>点我传值张三</button>
      <button onClick={() => this.getName('李四')}>点我传值李四</button>
      </>
    )
  }
}
class ParentCom extends React.Component{
  constructor (props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      childName: '父组件默认值'
    }
  }
  getChildName = (name: any) => {
    console.log(name, 'getChildName')
    this.setState({
      childName: name
    })
  }
  render () {
    return (
      <>
      <div>父组件元素</div>
      <div>子组件传递的元素{this.state.childName}</div>
      <ChildrenCom getName={this.getChildName} /></>
    )
  }
}

export default ParentCom
```
#### 8.1.3 兄弟组件之间的通讯
> 兄弟组件之间的通讯，则使用过父组件来作为中间层来实现数据的互通，通过父组件来传递
```
// ParentCom.tsx
// import './index.scss'
import React from 'react';
import { Button } from "antd"
;
class BrotherCom1 extends React.Component {
  constructor (props: { count: number }) {
    super(props)
  }
  render () {
    return (
      <>
        <p className='p'>组件1读取值{this.props.count}</p>
      </>
    )
  }
}
class BrotherCom2 extends React.Component {
  constructor (props: { increment : () => void, count: number }) {
    super(props)
  }
  increment = (number: number) => {
    this.props.increment(number)
  }
  render () {
    return (
      <>
        <Button className='btn' onClick={() => this.increment(1)}>点我+1</Button>
      </>
    )
  }
}
class ParentCom extends React.Component{
  constructor (props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = (number: any) => {
    console.log(name, 'increment')
    this.setState({
      count: this.state.count + number
    })
  }
  render () {
    return (
      <>
        <div>父组件元素</div>
        <BrotherCom1 count={this.state.count} />
        <BrotherCom2 increment={this.increment} />
      </>
    )
  }
}

export default ParentCom
```
#### 8.1.4 父组件向后代组件传递
> 父组件向后代组件传递，通过context提供了组件之间通讯，可以共享数据。
- 使用`React.createContext`来创建一个`context`
```
// Descendant.tsx 
import React, { Component } from 'react'
import { Button } from 'antd';
const MyContext = React.createContext()
class Chilren extends Component {
  render(): React.ReactNode {
      return (
        <>
          <div>子元素组件</div>
          <MyContext.Consumer>
            {
              value => (
                  <div>祖组件传递过来的参数: {value}</div>
              )
            }
          </MyContext.Consumer>
        </>
      )
  }
}
class ParentCom extends Component {
  render(): React.ReactNode {
      return (
        <>
        <div>父元素组件</div>
        <Chilren></Chilren>
        </>
      )
  }
}
class Descendant extends Component {
  state = {
    name: '默认值'
  }
  changeName = () => {
    const name = this.state.name === '张三的菜' ? '李四的茶' : '张三的菜'
    this.setState({
      name
    })
  }
  render(): React.ReactNode {
      return (
        <MyContext.Provider value={this.state.name}>
          <ParentCom></ParentCom>
          <Button className='btn' onClick={this.changeName}>点我更改nane值</Button>
        </MyContext.Provider>
      )
  }
}

export default Descendant
```
#### 8.1.5 如果组件之间关系类型比较复杂的情况，建议将数据进行一个全局数据管理，从而实现通信，例如`redux`+ `react-redux`
> stores/index.tsx代码如下: 
```
import { createStore } from 'redux';

const SET_NAME = 'SET_NAME'

export const setName = (name: string) => ({
  type: SET_NAME,
  payload: name
})

// initial state 
const initialState = {
  name: '张三'
}

// Reducer
const reducer = (state = initialState, action: { type: string; payload: any}) => {
  switch (action.type) {
    case SET_NAME: 
      return { ...state, name: action.payload  };
    default: 
    return state
  }
}

export const store = createStore(reducer)
```
> redux通讯示例如下: 
```
// react-redux  通信
// import React from 'react'; // react 版本17之后可以省略此句
import { Button } from 'antd'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, setName } from './stores/index';

function SenderComponent () {
  const dispatch = useDispatch()
  const oldName = useSelector((state) => state.name)
  const changeName = () => {
    const name = oldName === '张三' ? '李四' : '张三'
    dispatch(setName(name))
  }
  return (
    <div>
      <Button onClick={changeName}>点击我改变name值</Button>
    </div>
  )
}

function ReceiverComponent () {
  const name = useSelector((state) => state.name)
  return (
    <div>接收到的值: {name}</div>
  )
}

function App () {
  return (
    <Provider store={store}>
        <div>
          <SenderComponent />
          <ReceiverComponent />
        </div>
    </Provider>
  )
}

export default App
```
### 8.1.6 @reduxjs/toolkit和react-redux结合使用
> store.tsx文件如下: 
```
// store.tsx
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk(
  'counter/increment', 
  async (params, {dispatch}) => {
    console.log(params)
    await new Promise(rosolve => setTimeout(rosolve, 1000))
    dispatch(increment())
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      console.log(state, action)
    });
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// const reducer = counterSlice.reducer

export default configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

```

> index.tsx文件如下: 
```
import store, { increment, decrement, incrementByAmount, incrementAsync }from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
function StoreComponent () {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>{count}</div>
      <Button className='btn p' onClick={() => dispatch(increment())}> 点我+1 </Button>
      <Button className='btn p' onClick={() => dispatch(decrement())}> 点我-1 </Button>
      <Button className='btn p' onClick={() => dispatch(incrementByAmount(10))}> 点我+10 </Button>
      <Button className='btn p' onClick={() => dispatch(incrementAsync(1))}> 点我过一秒后+1 </Button>
    </>
  )
}
function App () {
  return (
    <Provider store={store}>
      <StoreComponent></StoreComponent>
    </Provider>
  ) 
}

export default App
```

### 8.2 组件通讯小结:
> 因为`React`是单向数据流，主要思想是组件不会改变接收的数据，只会监听数据的变化，当数据发生改变的时候它们会使用改变后的新值，而不是去修改已有的值，因此，React通信过程中，数据的存储位置都是在上级的位置当中。

## 9. 说说对React refs 的理解，应用场景是哪些？
> `Refs`是`React`访问`DOM`节点，或者在render中创建的`React`元素
本质是`ReactDOM.render()`返回的组件实例，如果是渲染组件则返回的是组件实例，如果渲染`dom`则返回的是具体的`dom`节点。
### 9.1 创建`ref`的形式有三种
1. 传入字符串，通过this.refs.传入的字符串，来获取对应的元素
2. 传入对象，对象是通过React.createRef()方式创建出来，使用时获取到创建的对象中存在的current属性就是对应的元素
3. 传入函数，该函数会在DOM被挂载时进行回调，这个函数会传入一个元素对象，可以自己保存，使用时，直接拿到之前保存的元素对象即可。
4. 传入hook，hook是通过useRef()的方式创建，使用时通过生成hook对象的current属性就是对应的元素

#### 9.1.1 传入字符串
```
// 1. 字符串
import React from 'react';
class MyRef extends React.Component{
  constructor (props: any) {
    super(props)
  }
  componentDidMount() {
    console.log(this.refs.myref)
  }
  render() {
      return <>
        <div ref='myref'>122</div>
      </>
  }
}

export default MyRef
```

#### 9.1.2 传入对象

```
// 2. 传入对象
import React from 'react';
class MyRef extends React.Component{
  constructor (props: any) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.myRef.current)
  }
  render() {
      return <>
        <div ref={this.myRef}>122</div>
      </>
  }
}

export default MyRef
```

#### 9.1.3 传入函数
```
import React from 'react';
class MyRef extends React.Component{
  constructor (props: any) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.myRef)
  }
  render() {
      return <>
        <div ref={(el) => this.myRef = el}>122</div>
      </>
  }
}

export default MyRef
```

#### 9.1.4 传入hook
```
// 通过`useRef` 创建一个ref
import { useEffect, useRef } from 'react';
function MyRef () {
  const myRef = useRef()
  useEffect(() => {
    console.log(myRef.current)
  }, [])
  return (
    <>
      <div ref={myRef}>122</div>
    </>
  )
}

export default MyRef
```
## 10. 说一下Real DOM 和Virtual DOM的区别？各自的优缺点？
> Real DOM，真实DOM，意思是文档对象模型，是一个结构化文本的对象，在页面渲染出的每一个节点都是真实`DOM`结构，如下
```
<div class="box">
  <p>123</p>
</div>
```
> `Virtual Dom`，本质是以`JavaScript`对象形式存在的对`DOM`的描述，创建虚拟`DOM`目的就是为了更好将虚拟的节点渲染到页面视图中，虚拟`DOM`对象的节点与真实的`DOM`属性一一对应。
- 在`React`中，jsx是其一大特性，可以让你在js中通过使用xml的方式去直接声明页面的DOM结构。
```
// 创建p标签
const vDom = <p class="node">123</p>

// 寻找id为root的节点
const root = document.getElementById("root")

// 把创建的p标签添加到root节点上

ReactDOM.render(vDom, root)
```
> 上述代码中，ReactDOM.render()用于将你创建好的虚拟DOM节点插入到某个真实节点上，并渲染到页面上
JSX实际是一种语法糖，在使用过程中会被`babel`进行编译转化成`js`代码，上述`Vdom`转化为如下：
```
const vDom = React.createElement(
  'p',
  {className: 'node'},
  '123'
)
```
> 可以看出调用`React.createElement()`方法：
- 第一个参数是标签名，例如h1、span、p、div
- 第二个参数是一个对象，里面是一些标签的属性，例如id，class等
- 第三个参数是节点中的文本
#### 10.1 也就是说，Virtual DOM（虚拟dom）其实就是一个js对象
1. 虚拟dom不会进行重排和重绘的操作，而真实DOM会频繁重排和重绘
2. 虚拟dom的总损耗是“虚拟dom增删改 + 真实dom差异增删改 + 重排与重绘”，真实dom的总损耗是“真实DOM完全增删改 + 排版与重绘”

假设一次操作需要操作10个DOM节点，浏览器就会执行10次流程操作，而通过`Vdom`，同样更新10个DOM节点，虚拟dom不会马上操作dom，而是将10次更新的diff内容保存到本地的一个js对象中，最终将这个js对象一次性更新到dom树上，避免大量的无谓计算。

#### 10.2 真实dom和虚拟dom的优缺点
**1.真实`dom`优势**
- 易用

**2.真实`dom`缺点**
- 效率低下，解析速度慢，内存占用量过高
- 性能差，频繁操作真实dom，容易导致重绘和重排

**3. 虚拟`dom`优势**
- 简单方便，如果使用手动操作真实dom完成页面，繁琐且容易出错，在大规模应用下维护起来也很困难。
- 性能提升，使用Virtual DOM，能够有效避免真实DOM频繁更新，减少多次引起的重绘和回流（重排）
- 跨平台能力，借助虚拟dom，一套代码多端运行

**3. 虚拟`dom`缺点**
- 在一些性能要求极高的应用中无法进行针对性的极致优化
- 首次渲染大量DOM时候，由于多了一次虚拟DOM的计算，速度比正常稍慢。

## 11. 说一说React的机制
1. 虚拟dom(virtual dom) 机制: React通过维护一个虚拟DOM树来提高渲染性能。当有状态改变时，React首先会在虚拟DOM上进行修改， 然后通过diff算法计算好最小的必要差异，最后再讲这些变更更新到的真实的dom上
2. Diff算法：这是React中用于比较两个虚拟DOM节点差异的算法，它能高效地计算哪些部分需要更新，从而避免不必要的DOM操作，优化性能
3. 事件代理机制：React实现了一套自己的事件系统，所有的事件都绑定在document上。这样的好处是可以减少事件监听器的数量，并便于事件的统一管理。
4. 组件化开发：React鼓励使用组件化的开发方式，每个组件都封装自己的逻辑的UI，可以独立于其他部分进行开发和测试
5. 单向数据流：React设计了单向数据流的理念，数据总是从父组件传递到子组件，子组件不能修改父组件的状态通过
6. 声明式编程: React采用声明式编程
7. 高效的更新机制: React使用了一系列优化策略（事务批处理，脏位检查等）来减少实际的DOM操作次数，提高更新策略。
8. Hooks: React16.8引入了Hooks运行在函数组件中使用state和其他react特性

## 12. React的key
1. Diff算法，元素`key`属性的作用是用于判断元素是新创建的还是被移动的元素，从而减少不必要的元素渲染
2. key涉及到节点的增和删，发现旧key不存在了，则将其删除，新key在之前没有，则插入，这就增加性能的开销
3. key应该是唯一的
4. key不用使用随机值（随机值在下一次render时，会重新生成一个数字）
5. 使用index作为key值，对性能没有优化

## 13. Diff 算法
> React引入Virtual DOM的概念，极大地避免无效的DOM操作，使我们的页面的构建效率得到了极大的提升，而diff算法就是更高效地通过对比新旧Virtual DOM来找出真正的Dom变化之处。

- 传统的diff算法通过循环递归进行依次对比，效率低下，算法复杂度达到O(n^3)，react将算法进行一个优化，复杂度降至O(n)

### React diff 原理
react中diff算法主要遵循三个层级的策略: 
- tree层级
- component层级
- element层级


<script setup lang="ts">
import imgShow from './components/imgShow.vue';
import ReactLifeCycle from './images/react-lifecycle.jpg'
import ReactEventParent from './images/react-event-parent.png'
import ReactEventChildren from './images/react-event-children.png'
</script>