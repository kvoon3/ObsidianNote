# withRouter

在 React 中只有路由组件有 history API，即**注册过路由的组件**

想要在非路由组件中实现路由跳转，就必须借助 withRouter

***引入***

`import {withRouter} from 'react-router-dom'`

***使用***

```jsx
class Person extends Component{
	//...
}
export default withRouter(Person)
```

***作用***

接收一个组件，在组件身上加上路由组件的三个属性(history, location, match)