# Includes

For example

```ts
type result = Include<["kvoon","Guoodli","kwong"], "Guoodli">

// expected to be "true"
```

实现思路

1. 通过取出数组的 First 项，与 target 比较
2. 递归 缩小数组
3. 当 First 与 target 相等时结束结束递归 `Equal<T,U> extends true`

```ts
type Includes<T, u> = 
	T extends [infer First, ... infer Rest]
		? Equal<First,U> extends true
			? true
			: Includes<Rest, U> // 递归
		: false
```