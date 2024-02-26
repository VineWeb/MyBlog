# react 面试真题

## HOC higher order component 
HOC  高阶组件  使用技巧 (纯函数) 没有副作用
参数: 
入参: 组件
出参: 组件
```js
function(componentA) {
  return componentB
}
```
原因: 
1. 抽离重复的代码, 实现组件的复用
2. 条件渲染, 渲染拦截
3. 拦截组件的生命周期

###  属性代理
1. 操作props
```js
function HOC (WrappedComponent) {
  const newProps = { type: 'HOC' }
  return props => <WrappedComponent {...props} {...newProps} />
}

function ClassHOC (WrappedComponent) {
  return class extends React.Component {
    render () {
      const newProps = { type: 'HOC' }
      return props => <WrappedComponent {...this.props} {...newProps} />
    }
  }
}
```
2. state

```js
function ClassHOC (WrappedComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ''
      }
      this.onChange = this.onChange.bind(this)
    }
    onChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    render () {
      const newProps = { 
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
       }
      return props => <WrappedComponent {...this.props} {...newProps} />
    }
  }
}
@HOC
class Example extends Component {
  render () {
    return <input  name  {...this.props.name}/>
  }
}
```

3. 条件渲染
```js
function HOC(WrappedComponent) {
  return props => {
    props.isShow ? WrappedComponent : <p>empty</p>
  }
}
```

4. 外部逻辑的封装
```js
function HOC(WrappedComponent) {
  return (
    <div>
      <p>标题</p>
      <WrappedComponent />
    </div>
  )
}
```

###  反向继承
```js
const HOC = (WrappedComponent) => {
  return class extends WrappedComponent {
    render () {
      return super.render()
    }
  }
}
```
1. 可以访问到props state
2. 实现所谓的生命周期的拦截
```js
const HOC = (WrappedComponent) => {
  const didMount = WrappedComponent.prototype.componentDidMount
  return class extends WrappedComponent {
    async componentDidMount () {
      if (didMount) {
        await didMount.apply(this)
      }
      // 自定义的事件处理
    }
    render () {
      return super.render()
    }
  }
}
```
3. 进行修改react树

```js
function HOC(WrappedComponent) {
  return class extends WrappedComponent {
    render () {
      const tree =  super.render()
      const newProps = {}
      if (tree && tree.type == 'input') {
        newProps.value = 'hhh'
      }
      const props = {
        ...tree.props, 
        ...newProps
      }
      const newTree = React.cloneElement(tree, props, tree.props.children)

      return newTree
    }
  }
}
```

4. 计算组件的渲染时间

```js
class Home extends React.Component {
  render () {
    return <h1>hello  react</h1>
  }
}
```