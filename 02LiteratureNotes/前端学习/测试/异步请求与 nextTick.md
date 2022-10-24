## 异步请求

在发送异步请求的时候，Jest 并不会等数据回来。

### 存在的问题

在 onMounted 的过程中，如果发送了异步请求 ，并需要 jest 测试异步数据

代码如下

```ts
import Home from "@/views/Home.vue"

it("测试组件挂载列表获取的情况", () => {
	const wrapper = shallowMount();
	const list = wrapper.vm.list;
	expect(list.length).toBeGreaterThan(0); // 测试不通过
})
```

jest 并不会等待数据回来

### 解决方法

`nextTick`

```ts
import Home form "@/views/Home"
it(
	`
	1. 用户进入页面，请求远程数据
	2. 列表展示远程返回的数据
	`, 
 (done) => {
		const wrapper = mount(Home);
		
		wrapper.vm.$nextTick(() => {
			const list = wrapper.vm.list;
			expect(listItems.length).toBeGreaterThan(0);
			done();
		})
 }
)
```


## jest 中的异步代码

在 jest 中写的异步代码会被 jest **忽略** 掉

我们可以 通过使用 `done()` 来让 jest 不忽略异步代码

例如，我们需要测试一个需要等待 5 秒的代码，为此我们在 jest 中写了一个 5.5 秒的定时器 (这样做是不被允许的, jest 中定时器最长 5 秒，而且这个做法是不推荐的)

```ts
// add.ts
function add(x:number, y:number):number{
	setTimeout() => {
		return x + y;
	}, 5000)
}

// add.spec.ts
it("测试一个延迟5秒的加法", (done) => {
	setTimeout(() => {
		expect(add(1,2)).toBe(3)
		done();
	}, 5500)
})
```
