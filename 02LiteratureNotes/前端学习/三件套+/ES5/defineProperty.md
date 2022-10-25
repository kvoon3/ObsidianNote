# 定义
用于设置对象的属性

```js
Object.defineProperty(对象,属性名,{
	writable
	configurable
	enumerable：可枚举，即 **是否可以被for-in循环取出**
	set(){} 赋值时触发 set()方法又称为setter
	get(){} 取值时触发 get()方法又称为getter
})
```

其中writable和setter、getter不能共存