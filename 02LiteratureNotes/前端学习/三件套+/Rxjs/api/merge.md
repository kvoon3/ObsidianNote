> 将 ==多个== Observables 的值混合到一个 Observable 中将其打平

![[../../img/Pasted image 20221206140609.png]]

@params

1. `other:ObservableInput`
2. `concurrent:number` 
	1. 可选。默认值：Number.POSITIVE_INFINITY 无穷大
3. `scheduler:Scheduler`
	1. 可选。默认值 null

```ts
import { merge, interval, take } from 'rxjs'
const timer1 = interval(1000).pipe(take(4))
const timer2 = interval(3000).pipe(take(5))
const timer3 = interval(2000).pipe(take(1))
const concurrent = 2 // 允许同时存在两个Observable
const merge = merge(timer1, timer2, timer3, concurrent)
```

