### bind

```jsx
class Header extends React.Component {
	constructor(props){
		super(props)
		this.run = this.run.bind(this)	
	}
	run(){
		console.log('this', this)
	}
}
```

#### 优缺点

写法麻烦，但是性能高，方法为所有组件实例共享