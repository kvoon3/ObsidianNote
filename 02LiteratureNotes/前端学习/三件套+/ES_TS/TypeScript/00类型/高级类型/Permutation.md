# Permutation

> 求出一个 union 类型的全排列

for example

```ts
type Permutation<1|2> = [1,2]|[2,1]
```

实现

```ts
type Permutation<T, C> = 
	[T] extends [never]
		? []
		: 
			T extends infer X
				? [T, ...Permutation<Exclude<C, X>>]
				: never;
```