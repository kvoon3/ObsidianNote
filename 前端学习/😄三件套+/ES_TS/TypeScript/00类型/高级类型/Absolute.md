# Absolute

for example

```ts
type test = -100;
type Absolute<test> // expect "100"
```

## 实现

思路：通过字面量将泛型参数转换为字符串

```ts
type Absolute<T extends string | number | bigint> = 
	`${T}` extends `${infer F}${infer R}`
			? F extends "-"
				? `${R}`
				: `${F}${R}`
			: never
```