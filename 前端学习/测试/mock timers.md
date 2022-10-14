# mock timer

```ts
// timer.ts
export function timer(callback){
	setTimeout(()=>{
		callback();
	}, 3000);
}
```

## 写法一

通过 `done` 让测试用例等待计时器调用

```ts
// timer.test.ts
const {timer} from "./timer"
test("test timer", (done)=>{
	timer(()=>{
		expect(1).toBe(1);
		done();
	})
})
```

## 写法二

通过 jest 让计时器立即执行

`jest.useFakeTimers()`

`jest.runAllTimers()` 

```ts
// timer.test.ts
const {timer} from "./timer"

jest.useFakeTimers();
test("立即使用 timer", ()=>{
	// 获得一个模拟函数
	const mockFn = jest.fn();
	// 传入模拟函数, 执行计时器
	timer(mockFn);	
	// 令计时器立即执行	
	timer.runAllTimers();
	// 断言模拟函数被执行了一次
	expect(mockFn).toHaveBeenCalledTimes(1)
})
```

### 注意

如果有部分定时器还没有被创建，而却因为 `jest.runAllTimers()` 被执行了，可以使用 `jest.runOnlyPendingTimers()` ：只运行当前创建了的 timer 

```ts
export function timer(callback){
	setTimeout(()=>{
		callback();
		setTimeout(()=>{// 3秒后才被创建的 timer
			callback();
		},3000)
	},3000)
}
```

## 写法三

通过 jest 让时间快进

`jest.advanceTimerByTime(3000)`

```ad-warning
由于一个测试用例的快进可能会造成下一个测试用例的快进，因此要在每一个测试用例前都 fake 一下 timer
```

```ts
import {timer} from "./timer"

beforeEach(()=>{
	// 在每一个测试用例前都 fake 一下 timer
	jest.useFakeTimers();
})

test("加速时间用例1", ()=>{
	const mockFn = jest.fn();	
	timer(mockFn);

	jest.advanceTimersByTime(3000);
	expect(mockFn).toHaveBeenCalledTimes(1);

	jest.advanceTimersByTime(3000);
	expect(mockFn).toHaveBeenCalledTimes(2);
})

test("加速时间用例2", ()=>{
	const mockFn = jest.fn();	
	timer(mockFn);

	jest.advanceTimersByTime(3000);
	expect(mockFn).toHaveBeenCalledTimes(1);

	jest.advanceTimersByTime(3000);
	expect(mockFn).toHaveBeenCalledTimes(2);
})
```