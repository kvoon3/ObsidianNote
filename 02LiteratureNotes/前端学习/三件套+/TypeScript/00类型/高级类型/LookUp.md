# LookUp

> lookup 查找

## question

for example 

```ts
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

## 实现

思路:通过 infer 取出 type 值的字面量类型

```ts
type LookUp<U extends {type:string}, T> = U extends {type:infer X}
	? Equal<X, T> extends true
		? U
		: never
	:never;
```

**改进**

不需要 infer 取出，直接查看 type 是否为 T

```ts
type LookUp<U,T> = U extends {type:T} ? U : never;
```