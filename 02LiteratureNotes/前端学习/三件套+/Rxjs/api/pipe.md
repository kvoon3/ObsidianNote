## pipeable 

`Observable.pipe()`

@params - pipe 每次接收到的值都为 next 传递的值

@returns - pipe 内的函数将对 next 的值进行一系列处理，最终将返回一个被 `Observable` 包装的结果值

## pipe

```ts
import { pipe } from 'rxjs'
```

与 ramda 一致