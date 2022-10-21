```ad-attention
字符串形式的refs已不被react官方所推荐（存在一些性能问题，未来可能会被弃用）
```

```jsx
class person extends React.Component{
	render(){
		return (
			<div className="wrapper">
				<input ref="input1" placeholder="请输入内容"/>
				<button onClick="showValue">点击获取input框内容</button>
			</div>
		)
	}
	showValue = ()=>{
		const {input1} = this.refs;
		alert(input1.value);
	}
}
```