# FirstOfArray

`FirstOfArray<T>` 得到数组第一项元素的类型

知识点

`T[number]` 

- 接收一个array类型，返回一个 union 类型，union 类型为数组所有子项的集合
- 若数组为空，返回 never 类型

实现

```ts
// T extends [] 判断数组是否为字面量空
type MyFirstOfArray<T extends any[]> = T extends [] ? never : T[0]

// T["length"] extends 0 判断数组的长度
type MyFirstOfArray<T extends any[]> = T["length"] extends 0 ? never : T[0]

// T[0] extends T[number] 判断能否取到值
// undefined extends never ---> false
type MyFirstOfArray<T extends any[]> = T[0] extends T[number] ? 

// 解构
type MyFirstOfArray<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

```