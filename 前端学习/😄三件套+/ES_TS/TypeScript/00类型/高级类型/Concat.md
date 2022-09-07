# Concat

用于将两个数组的类型拼成一个类型

实现

> `unknown[] 比 any[] 类型更安全，因为其代表的是有类型的`

`spread` 操作符

```ts
type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K]
```
