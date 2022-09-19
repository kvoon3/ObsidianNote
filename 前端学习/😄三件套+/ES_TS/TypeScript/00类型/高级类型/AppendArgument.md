# AppendArgument

`AppendArgument(Fn, A)`

`A` : 为 `Fn` 新增的参数属性

for examlpe

```ts
type Fn = (x:number, y:string)=>boolean

type A = string;

AppendArgument<Fn, A> // expect: (x:number,y:string, a:string)=> boolean
```

## 实现

```ts
type AppendArgument<Fn extends (...args:any[])=>any, A extends any> = 
	Fn extends (...arg:infer X) => infer R
		? (...arg:[...X,A]) => R
		: never
```