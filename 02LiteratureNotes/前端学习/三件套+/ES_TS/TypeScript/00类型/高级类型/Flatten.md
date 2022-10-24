# Flatten

> 数组扁平化

## 实现

思路：递归

```ts
type Flatten<T extends any[]> = 
	T extends [infer F, ...infer R]
		? F extends any[]
			? [Flatten<F>, ...Flatten<R>]
			: [F, ...Flatten<R>]
		: []
```