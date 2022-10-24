# Replace&&ReplaceAll

`Replace<S, From, to>`

`ReplaceAll<S, From, to>`

`From` 被替换的字符串

`to` 替换后的字符串

## Replace

for example

```ts
Replace<"abcKKKdef", "KKK","WWW"> // expect: "abcWWWdef"
```

### 实现

模板字符串


```ts
type Replace<S extends string, From extends string, To extends string> = 
	Equal<From, ""> extends true //From为空会导致一些问题，所以在此处提前判断
		? S
			: 
			S extends `${infer Left}${From}${infer Right}`
				? `${Left}${To}${Right}`
				: S
```


## ReplaceAll

### 实现

方式一

思路：递归

```ts
type ReplaceAll<S extends string, From extends string, To extends string> = 
	Equal<From, ""> extends true
		? S
		:
			S extends `${infer Left}${From}${infer Rigth}`
				? `${infer Left}${From}${ReplaceAll<Right, From, To>}`
				: S
```


方式二

思路：递归 + 缓存一个 result 字符串并最终返回

```ts
type ReplaceAll<S extends string, From extends string, To extends string , Result extends = ''> = 
	Equal<From, ""> extends true
		? S
		: 
			S extends `${infer Left}${From}${infer Right}`
				? Replace<`${Rigth}`, From, To, `${Result}${Left}${To}`>
				: `${Result}${S}`
```
