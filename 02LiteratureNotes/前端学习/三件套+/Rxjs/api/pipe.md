## pipeable 

`Observable.pipe()`

@params - pipe 每次接收到的值都为 next 传递的值

@returns - pipe 内的函数将对 next 的值进行一系列处理，最终将返回一个被 `Observable` 包装的结果值

## pipe

```ts
import { pipe } from 'rxjs'
```

### 与 ramda 异同

基本与 ramda 一致

不同点

#### 泛型写法

rxjs pipe 只需要写每个函数的返回值类型，==不需要写第一个函数的接收值类型==
