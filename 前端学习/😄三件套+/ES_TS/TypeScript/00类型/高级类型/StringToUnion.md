# StringToUnion

> 字符串转换为联合类型

for example

```ts
StringToUnion<"kvoon"> // expect "k" | "v" | "o" | "o" | "n"
```

## 实现

```ts
type StringToUnion<S extends string> = 
	S extends `${infer F}${infer R}`
		? F | StringToUnion<R>
		: never;
```