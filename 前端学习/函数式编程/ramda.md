## debug

`tap`

参数

- fn - 一个接收 参数二 的函数
- x - 参数 x 将在 fn 调用后返回出去

[PARAMETERS](https://ramda.cn/docs/#expand)

对输入的值执行给定的函数，然后返回输入的值。

若传入的是 transfomer，则当前函数用作 transducer，对传入的 transformer 进行封装。

```ts
const sayX = x => console.log('x is ' + x); R.tap(sayX, 100); //=> 100 // logs 'x is 100
```

---

将来不存的函数转换为纯函数

```ts
function getItem(key:string){
	return function(){
		return localStorage.getItem(key)
	}
}
```

```js
const IO = function(f){
	this.__value = f;
}

// Container.of() === new Container()
IO.of = function(){
	return new IO(function(){
		return x;	
	})
}

IO.prototype.map = function(f){
	return new IO(_.compose(f, this.__value))
}
```


## 函子

```ts
class Functor{
	private constructor(val){
		this._val = val;
	}
	of(val){
		return new Functor(val);
	}
	map(fn){
		return new Functor(fn(this._val));
	}
}
```

### Ap 函子

函子里面包含的内容完全可以是==函数==

ap 是 applicative （应用的缩写）。凡是部署了 `ap` 方法的函子，就是 ap 函子

```ts
class Ap extends Functor{
	ap(F:Functor){
		return Ap.of(this._val(F._val));
	}	
}
```

Ap 可以通过初始化拿取一个函数，在通过 `ap` 对其他函子进行操作

```ts
function addTwo(x){
	return x + 2;
}

Ap.of(addTwo).ap(Functor.of(2)) // Ap(4)
```

**Ap 的意义在于，对于一些多参数的函数(柯里化)，可以分别从不同的函子中取值，在函数中运算，实现函子的链式操作**

```ts
const add = curry((x, y) => x + y)
Ap.of(add).ap(Functor.of(2)).ap(Functor.of(10))
// expect: Functor.of(12)
```

## Monad

函子是一个容器，可以包含任何值。函子之中再包含一个函子，也是完全合法的。但是，这样就会出现多层嵌套的函子

```ts
Maybe.of(
	Maybe.of(
		Maybe.of({name:"kwongliegaai",age:21});
	)
)
```

### chain

```ts
const duplicate = n => [n, n];

R.chain(duplicate, [1,2,3]) // [1,1,2,2,3,3];
```

## 闭包

> 闭包是一种能够在函数声明过程中将环境信息与所属函数绑定在一起的数据结构。它是基于函数声明的文本的位置的，因此也被称为围绕函数定义的 **静态作用域** 和 **词法作用域啊** 。 

> 从本质上讲，闭包就是函数继承而来的作用域，这类似于对象方法是如何访问其继承的实例变量的，它们都具有其父类型的引用。

使用闭包可以

1. 模拟私有成员变量
2. 异步调用, 从服务器中获取数据
3. 创建人工块作用域变量
1. 事件处理和回调
2. 弥补 JavaScript 的不足

## tools

- ramda `groupby`


## 方法链和函数管道的比较

### 方法链

```ts
// lodash
_.chain(names)
	.filter(isValid)
	.map(s=>s.replace(/_/, ""))
	.value()
```

**优点**

方法链的确能够极大的提高代码的可读性

**缺点**

 ==它与所属对象紧密的耦合在一起==

从而导致链中可用方法数量收到限制(只能够使用库所提供的方法)


### 管道化

函数式编程能够消除方法链中存在的限制，使得任何函数的组合都更加灵活。但是，为了实现管道，被连接的函数必须在 arity 和类型上相互兼容

**兼容条件**

类型：函数的返回值必须与接收函数的参数类型匹配

arity：接收函数必须声明至少一个参数才能处理上一个函数的返回值



### partial 和 curry


从表面上来看，partial 和 curry 的使用方式非常相似。他们的主要区别在于==参数传递 的内部机制与控制==

- 柯里化在每次分步调用时都会生成嵌套的一元函数。在底层，函数的最终结果是由这些一元函数的逐步组合产生的。同时，`curry` 的变体允许同时传递一部分参数。因此，可以完全控制函数求值的时间与方式
 - `partial` 将函数的参数与一些预设值绑定（赋值），从而产生一个拥有更少参数的新函数。该函数的闭包中包含了这些已经赋值的参数，在之后的调用中被完全求值。

#### 核心语言拓展

```ts
Stirng.prototype.first = R.partial(String.prototype.subString(0))

// 使用拓展的 first 方法
"kwongliegaai".first(5); // 去下标 0-5 的字符串
```

#### 链式地组合函数

```ts
Function.prototype.compose = R.compose;
const cleanInput = checkLengthSsn.compose(normalize).compose(trim);
```

#### seq (S-组合子)

- [ ] ramda 中的 seq ⏫ 📅 2022-10-02

![[img/Pasted image 20220930174827.png]]

