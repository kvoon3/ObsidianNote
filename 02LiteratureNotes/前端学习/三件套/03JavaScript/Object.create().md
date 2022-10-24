**`Object.create()`** 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。

***语法***

```
Object.create(proto)
```

返回值

一个新对象，带着指定的原型对象及其属性。

### 手写一个 `Object.create()`

考虑到兼容性不能写 `__proto__`

```js

Object.create = function(obj){
	function Fn(){}
	Fn.prototype = obj;
	return new Fn;
}
```

![[img/Pasted image 20220712185006.png]]