# Jest 模拟函数

擦除函数的实际实现

捕获对函数的调用（以及在这些调用中传递的参数）

在使用 `new` 实例化时捕获构造函数的实例

允许测试时配置返回值

## 创建

```js
const MockFn = jest.fn( x => x + 1);
```

mock function除了能正常调用函数，还配置了 `mock` 属性

```js
{
	calls:Array(0), // 保存了函数每次被调用的参数 
	instances:Array(0), // 调用函数时候的this
	invocationCallOrder:Array(0),
	results:Array(0) //保存了函数返回值
}
```

### instance

```js
const obj = {
	fn:jest.fn(arrMap);
}

obj.fn([1, 2], x => x * 3);

console.log(obj.fn.mock.instances)
```

## 函数是否被调用

`toBeCalled()`

```js
import {runCallBackFn} from "./index.js"
test("测试函数调用", ()=>{
	const mockFn = jest.fn();
	runCallBackFn(mockFn);
	expect(mockFn).toBeCalled();
})
```

## 改变函数的内部实现

模拟 ajax 请求

`mockFn.mockReturnValue`

`mockFn.mockResolvedValue`

```js
import axios from "axios";
jest.mock(axios);

test("测试 getData", async ()=>{
	axios.get.mockResolvedValue({data:'kw'});
	const data = await getData();
	axios.get.mockResolvedValueOnce({data:'hello'});
	axios.get.mockResolvedValueOnce({data:'world'});
	expect(data).toBe("hellow")
	expect(data).toBe("world")
	expect(data).toBe("kw")
})
```

## mock 文件

mock`jest.mock(文件路径)`

unmock `jest.unmock(文件路径)`

在目录下创建文件夹 `__mock__`，如果 demo.ts 文件需要被 mock 则在 `__mock__` 文件夹下创建一个 demo.ts 文件

```ts
// __mock__/demo.ts
export function getData(){
	return Promise.resolve({
		data:"数据"
	})
}
```

```ts
// demo.ts
import axios from "axios"
export async function getData(){
	return axios.get("/")
}
```

```ts
// demo.test.ts
jest.mock("./mock")
import {getData} from "./demo"
test("测试mock", ()=>{
	return getData().then( res => {
		expect(res).toEqual({
			data:expect.any(String)
		})
	})
})
```

### 注意

```ad-note
由于 mock 文件的存在，我们其他未 mock 的函数也会从 mock 文件中引入

知名函数从 原有文件 demo.ts 中引入 

const {add} = jest.requireActual("./demo")
```



