# MyParameters

<span class="imp">infer 用法</span>

```ts
type MyParameters<T extends (...args:any[])=>any > = 
	T extends (...args:infer X) => any
		? X
		: never
```