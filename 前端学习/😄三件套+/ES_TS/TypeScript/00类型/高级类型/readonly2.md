# readonly2

手动实现难度 medium

for example

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

利用 [[../交叉类型|交叉类型]] `&` 达到==分别描述一个对象的不同属性的目的==

```ts
type MyReadonly<T, K extends keyof T> = {
	readonly [P in K] : T[P]
} & {
	[P in keyof T extends K ? never : P] : T[P]
}
```