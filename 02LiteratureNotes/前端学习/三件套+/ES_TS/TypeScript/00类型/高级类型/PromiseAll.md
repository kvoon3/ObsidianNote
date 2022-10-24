# PromiseAll

前置知识 [[../数组类型|数组类型]]

## question

for example

```ts
const result = PromiseAll([1,2,3,4,5,Promise.resolve(10)])

// result : [1,2,3,4,5,10]
```

## 实现

```ts
type PromiseAll<T extends readonly any[]> = 
	Promise<{
		[P in keyof T] : T[p] extends Promise<infer X>
			? X
			: T[P]
	}>
```