![[../../img/Pasted image 20221206113246.png]]

将高阶 Observable 按照顺序连接，将其转化为一阶的 Observable

```ts
import { fromEvent, interval, take } from 'rxjs'

const clicks = fromEvent(document, 'click')

// 每点击一次开启一个间隔1s并执行4次的计时器
// 1. pipe后将返回 Observable
// 2. 内部值经过 map 由 clickEvent ---> interval Observable

const highOrder = clicks.pipe(map(() => interval(1000).take(4)))
```

直接订阅高阶 Observable，将会在某个时间段集中开启定时器，并分别计时

使用 concatAll 将 Observable 拍平，后一次的 Observable 将会等待前一次的 Observable
