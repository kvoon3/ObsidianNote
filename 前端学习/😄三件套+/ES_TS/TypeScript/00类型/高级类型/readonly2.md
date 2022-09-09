# readonly2

手动实现难度 medium

for example

1. 传递一个对象类型和一个 union 类型，通过 union 类型传递的 key 项，使对象的部分属性被设置为 `readonly`
2. 如果没有传递 union 类型，则默认所有属性为 `readonly`


```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```

## 实现

1. 利用 [[../交叉类型|交叉类型]] `&` 达到==分别描述一个对象的不同属性的目的==
2. 使用默认参数（巧妙）

```ts
type MyReadonly<T, K extends keyof T> = {
	readonly [P in K] : T[P]
} & {
	[P in keyof T extends K ? never : P] : T[P]
}
```