# AppendToObject

`AppendToObejct<T,U,V>`

- `T` 目标对象
- `U` key 值
- `V` Value type

for example

```ts
AppendToObj<{name:string},"age",number>
// Expect: {name:string, age:number}
```

## 实现

### 错误实现

```ts
type AppendToObj<T extends {}, K extends string, V> = 
	{
		[P in keyof T | K] : P extends K ? V : T[P]
	}
	// 取不到 T[P]
```

**存在的问题**

1. 在 `P extends K ? V : T[P]` 语句中，`T[P]` 是不被允许的，哪怕 `T[P]` 是可以取到值的
2. 在该实现中 `K` 的值是是被优先考虑的，即如果 `P extends K` 则取 `V`，然后再考虑是否在 `keyof T` 中，<span class="imp">这样会导致新字段覆盖字段，则不是我们想要的</span>

### 正确实现

只有在 extends 中确保了`P extends keyof T`，才可以通过 `T[P]` 取值

```ts
type AppendToObject<T extends {}, K extends string, V> = 
	{
		[P in keyof T | K] : P extends keyof T ? T[K] : V
	}	
```