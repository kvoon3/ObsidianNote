[文章链接](https://www.cnblogs.com/Jingge/p/10724833.html)
## v-model

v-model也是组件通信方式的一种，其主要作用是收集表单数据


***写法***

```html
<template>
	<div>
		<input v-model="msg"/>
	</div>
</template>
<script>
	export default {
		name:"",
		data(){
			return {
				msg:""
			}
		}
	}
</script>
```

上例中，将与 input 框的 value 值双向绑定


## .sync修饰符

***作用***

实现组件数据的双向绑定

一个组件上只能定义一个v-model，如果其他prop也要实现双向绑定的效果该怎么办呢？ 简单的方法是子组件向父组件发送一个事件，父组件监听该事件，然后更新prop。具体如下：


***实现原理***

父组件

```html
<template>
	<div>
		<Child :num="num" @update:num="e => num=e"/>
	</div>
</template>
<script>
	export default {
		name:"Parent",
		data(){
			return {
				num:1
			}
		}
	}
</script>
```

子组件

```html
<template>
	<div>
		<button @click="$emit('update:num',num++)">click me</button>
	</div>
</template>
<script>
	export default {
		name:"Child",
		props:['num']
	}
</script>
```


从上述例子可以知道，实现组件的数据双向绑定可以通过两个步骤实现：
1. 父组件向子组件传递prop值
2. 子组件通过自定义事件返回变化后的prop值

**.sync就是对上述步骤的简化** `<Child :num.sync="num"/>`