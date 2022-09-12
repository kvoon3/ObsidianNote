# Trim

## 实现

```ts
type WhiteSpace = " " | "\n" | "\t"

type Trim<S extends string> = S extends `${WhiteSpace}${infer M}`|`${infer M}${WhiteSpace}` ? Trim<M> : S;
```