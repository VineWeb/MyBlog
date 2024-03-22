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