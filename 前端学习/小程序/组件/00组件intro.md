# 组件

创建组件

类似于页面，一个自定义组件由 `json` `wxml` `wxss` `js` 4个文件组成。要编写一个自定义组件，首先需要在 `json` 文件中进行自定义组件声明（将 `component` 字段设为 `true` 可将这一组文件设为自定义组件）：

![[../img/Pasted image 20220826172955.png]]

```json
{
  "component": true
}
```

注册组件

局部注册

父组件中配置 json 文件，`usingComponents`

```json
{
  "usingComponents": {
    "Header":"/components/Header/Header"
  },
  "enablePullDownRefresh": true,
  "backgroundColor": "#bfc"
}
```

全局注册

在根目录下注册

vue全局注册方式

```ts
Vue.component("component",Header)


//vue3
// 链式注册
app
	.component("componentA",componentA)
	.component("componentB",componentB)
	.component("componentC",componentC)
```


引用组件

```html
<view>
	<Header></Header>
</view>
```

[[Component 构造器]]

[[组件间通信]]

[[数据监听器]]

```ts
observers(){
	"属性名1,属性名2":function(){
		//...
	}
}
```

[[纯数据字段]]

```ts
Component({
	options:{
		pureDataPattern:/^_/
	},
})
```

[[生命周期]]

组件

- created()
- attached()
- ready()
- moved()
- detached()
- error()

[[插槽]]

children

```html
<view class="header">
	<slot></slot>
</view>
```

parent

```html
<Header>
	<view>something giving to component</view>
</Header>
```

[[behaviors]]

