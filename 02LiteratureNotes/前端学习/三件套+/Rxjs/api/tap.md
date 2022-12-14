主要用于处理 side effect

1. 可以传入一个函数用于处理成功 (next) 的数据
2. 可以传入一个 observer

```ts
// 1. 
tap(console.log)

// 2.
tap({
	next: (data) => console.log(data),
	error: (err) => console.log(err),
	complete: () => console.log('complete')
})
```