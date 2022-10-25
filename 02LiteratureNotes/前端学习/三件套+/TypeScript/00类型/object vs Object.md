# object vs Object
## object
object 与 TypeScript 2.2 推出，它用于表示非原始类型，即 `string`, `boolean`, `number`, `symbol`, `null`, `undefined`, ==其他类型均被视为非基本类型，包括函数/数组==

## Object

Object 包含原始值，Object 类型是所有 Object 类的实例的类型 


```ts
interface Object {
  constructor: Function;
  toString(): string;
  toLocaleString(): string;
  valueOf(): Object;
  hasOwnProperty(v: PropertyKey): boolean;
  isPrototypeOf(v: Object): boolean;
  propertyIsEnumerable(v: PropertyKey): boolean;
}
```

需要注意的是，当对 Object 类型的属性进行赋值的时候，如果与 `Object` 接口的属性冲突是可能报错的。而`object` 类型则不存在这个问题。