### bind

```tsx
class Header extends React.Component<Props, State> {
	constructor(props:Props){
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