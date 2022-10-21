# LengthOfString

> 求一个字符串的长度

思路：将字符串转换为数组，进而求数组的长度

## StringToArray(递归)

```ts
type StringToArray<S extends string> = 
	S extends `${infer F}${infer R}`
		? [F, ...StringToArray<R>]
		: []
```

## 实现

```ts
type LengthofString = StringToArray<S>["length"]
```

