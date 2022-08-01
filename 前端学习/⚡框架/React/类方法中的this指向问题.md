## React 类方法的 this 指向问题

```jsx
import React, {Component} from "react"

class Person extends Component{
	constructor(props){
		super(props)
		this.state = {isHot:false}
	}
	render(){
		return (
			<div>
				<button onClick={changeWeather}>click me</button>
			</div>
		)
	}
	changeWeather(){
		console.log(this);
	}
}
```


问题所在

- changeWeather 在实例的原型对象上，而 changeWeather 却不是由实例调用的，而是作为 onClick 的回调直接调用的
- React 在类中开启了局部的严格模式

解决方法

***方式一***

==在构造函数里初始化时，将实例方法的 this 强行 bind 为实例==

```jsx
constructor(props){
	super(props);
	this.state = {};
	this.weather = this.weather.bind(this)
}
```

这样做的后果，原本只在原型对象上的方法，会给所有的实例对象都设置一个方法，**将方法强行拿到实例对象上，并且修正 this 为当前的实例对象**


***方式二 ( 推荐 )***

<span style="color:red">类中可以直接写赋值语句，不一定要在构造器里初始化</span>

```jsx
class Person extends Component{
	changeWeather = () => {
		console.log(this)
	}
}
```

在类中直接写赋值语句，可以**① 直接设置在实例对象上**，同时，由于是**② 箭头函数其 this  一定会往外找**

这样做的结果：

- 实例对象上会有一个 changeWeather 方法
- 直接调用 changeWeather 时，this 会往外找， 从结构上来看 changeWeather 中的 this 会找到 Person， 其 this 自然地被修正为了实例对象