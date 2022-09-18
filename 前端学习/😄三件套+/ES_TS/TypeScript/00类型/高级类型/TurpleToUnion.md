# TurpleToUnion

方法一：直接使用现成功能

`T[number]`

```ts
type TurpleToUnion<T extends any[]> T[number]
```

方法二：递归获取First元素返回，自动得到一个 union 类型的返回值

> <span class="imp">需要巧妙地使用 `|` ，我们既要返回 First 又要返回 TurpleToUnion 我们被允许返回多个值</span>

```ts
type TurpleToUnion<T extends any[]> T extends [infer First, ...infer Rest]
	? First | TurpleToUnion<Rest>
	: never
```

方法三：递归获取每一个元素并返回，自动得到一个 union 类型

```ts
type TurpleToUnion<T extends any[]> T extends Array<infer X>
	? X
	: never;
```