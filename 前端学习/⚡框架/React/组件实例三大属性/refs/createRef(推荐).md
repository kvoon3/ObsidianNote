# 定义

***React.createRef ( )***

调用后，可以返回一个容器，该容器用于存储被 ref 标识的节点。==容器只能存放一个node==


**示例**

```jsx
class Person extends React.Component{
	this.myRef1 = createRef();
	render(){
		return (
			<div>
				<input ref={this.myRef1} className="input1"/>
			</div>
		)
	}
}

```

