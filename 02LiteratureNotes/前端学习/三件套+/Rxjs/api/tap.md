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

这段代码使用@vueuse/rxjs包，从一个按钮元素的点击事件中创建了一个RxJS可观察变量。当按钮被点击时，观测器会发出一个值，并使用ajax操作符向https://jsonplaceholder.typicode.com/posts 端点发出HTTP GET请求。响应使用concatAll进行扁平化处理，前四个结果使用take进行排放。

然后，mergeMap操作符被用来转换每一个被释放的帖子对象，通过请求https://jsonplaceholder.typicode.com/posts/{id}/comments来获取帖子的评论，并请求https://jsonplaceholder.typicode.com/users/{userId}来获取创建帖子的用户的用户名。使用forkJoin将得到的观察变量结合起来，并使用pluck操作符来提取值。

最后，扫描操作符被用来将这些值累积到一个数组中，该数组被传递给useObservable钩子，以创建一个更新组件中的反应性帖子值的观察变量。