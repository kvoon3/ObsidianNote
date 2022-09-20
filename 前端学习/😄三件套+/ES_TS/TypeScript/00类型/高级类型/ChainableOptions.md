# 可串联构造器 ChainableOptions

for example

```ts
declare const a:Chainable;
const result = a
	.option("foo",123)
	.option("name", "kwongliegaai")
	.option("bar", {"key":"value"})
	.get()

//期望 result 的类型为
interface Result{
	foo:number;
	name:string;
	bar:{
		"key":string;
	}
}
```

## 思路

主要思路

1. 一个空对象类型，用于保存所有的键值对类型
	1. 通过泛型默认参数的形式设置
2. option 方法每次都返回一个 Chainable 类型，同时空对象参数被传入新值(被填充)

Merge 类型

1. 用于合并两个对象类型
2. 如果两个对象有有相同的字段，则发生覆盖

```ad-warning 
如果存在覆盖，同时覆盖字段的值类型没有变化，则不允许覆盖。即类型相同将 key 类型值更正为 never
```

```ts
import {Equal} from "@type-challenge/utils"

type Merge<T,K> = Omit<T, keyof K> & {[P in keyof K]:K[P]}

type Chainable<T = {}> = {
	 option<K extends string, V>
	 (
		 key: K extends keyof T
			 ? Equal<T[K], V> extends true
				 ? never
				 : K
			 : K,
		 value: V
	 ):
		 Chainable<Merge<T, {[P in K]:V}>>,
	 get(): T
}
```