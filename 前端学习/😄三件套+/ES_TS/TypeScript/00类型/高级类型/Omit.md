# Omit 

## 问题
for example

```ts
interface TODO{
	title:string;
	description:string;
	completed:boolean;
}
type TodoPreview = MyOmit<TODO,"description"|"title">

const todo:TodoPreview = {
	completed:false
}
```

## 实现方案

1. 使用内置高级类型
2. 手动实现

***使用内置高级类型***

`Omit = Pick + Exclude`

```ts
type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>
```


***手动实现***

思路：

**key**

1. 遍历 T 的 keys
2. 通过 extends 与 K 进行比较
	1. 有：never
	2. 无：对应的key
	
**value** - `T[key]`

```ts
type MyOmit<T, K extends keyof T> = {
	[P in T as P extends K ? never : P] : T[P]
}
```


## 总结

知识点

`P in T as P` 有效的为 `P in T` 的一致性做了保障，使得 `P extends K ? never : P` 能够继续下去