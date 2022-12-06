> 与 [[switchAll]]相反，exhaustAll 在当前内部 Observable 仍在执行的情况下，通过丢弃接下来的内部 Observable 将高阶 Observable 打平。



![[../../img/Pasted image 20221206144814.png]]


例子

只要当前没有运行的计时器，那么每次点击就会运行一个有限的计时器

```ts
const clicks = fromEvent(btn, 'click')
const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(5))))
const firstOrder = higherOrder(exhaustAll())
```


