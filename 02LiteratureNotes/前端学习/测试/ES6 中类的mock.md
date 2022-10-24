# 类 jest mock

**场景**

当我们测试的函数使用到了一个非常复杂的类，当我们测试的时候实例化这个类并使用是非常耗性能的且务必要的

```ts
// util.ts - 暴露了一个异常复杂的类
export class Util{
	init(){
		//...
	}
	a(){
		//...
	}
	b(){
		//...
	}
}
```

```ts
//demo.ts

import Util from "./util"

/**
* @marks
* 创建了 Util 实例 并使用了其方法
*/
export function demoFn(Util:Util){
	const util:Util = new Util();
	util.a();
	util.b();
}
```

```ts
// demo.test.ts

import {demoFn} from "./demo"

jest.mock("./util")
/*
	jest 帮我们调用了 !!!!!
	jest.fn(Util)
	jest.fn(Util.a)
	jest.fn(Util.b)
*/

import Util from "util"

test("测试 demoFn 是否使用了 Util 实例的 a 和 b 方法", ()=>{
	demoFn();
	// 函数被调用,构造函数调用
	expect(Util).toHaveBeenCalled();
	// 实例方法被调用
	expect(Util.mock.instances[0].a).toHaveBeenCalled();
	expect(Util.mock.instances[0].b).toHaveBeenCalled();
})
```

```ad-note
如何获取获取一个类的实例的调用情况
	```ts
		expect(Person.mock.instances[0].a).toHaveBeenCalled();
	```
```

### 自定义 mock

`jest.mock(文件路径, 函数)`

```ts
jest.mock('./util', ()=>{
	const Util = jest.fn(()=>{
		console.log("constructor --")
	})
	Util.prototype.a = jest.fn(()=>{
		console.log("a --")
	})
	Util.prototype.b = jest.fn(()=>{
		console.log("b --")
	})
})	
```

## 单元测试

单元测试指的是只对我当前单元进行测试，对外部的东西并不关心，如果引入的外部的内容会带来性能上的损耗，==那么就用更简单的内容(mock)去替代==，以提高测试性能。

## 集成测试

不仅仅对 demo.js 文件做了测试，还同时对单元中包含的其他内容，统一进行了测试
