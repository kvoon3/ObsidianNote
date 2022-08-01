## 写法

示例

```jsx
<div>
	<input ref={ cNode => this.input1 = cNode } className="input1"/>
</div>
```

## 回调执行次数的问题

使用上述的内联函数写法时，只要页面重新渲染（render调用）就会触发**两次**函数。

***原因***

传入的是内敛函数，每次渲染的时候都是新的函数，react为了完美的清空掉上一次的函数：
- 第一次：传入 null
- 第二次：传入当前 node

***修正执行次数的问题***

设置一个确定的函数在实例身上

```jsx
class Person extends React.Component{
	render{
		return (
			<div>
				<input ref={ this.getInputValue } className="input1"/>
			</div>
		)
	}
	getInputValue = (currentNode)=>{
		console.log(currentNode)
	}
}
```