## Description

![[../../img/Pasted image 20221206142005.png]]

@params - `concurrent:number`。默认值：+∞


## Examples

```ts
import { fromEvent, map, interval, mergeAll} from 'rxjs'
const btn = document.querySelector('.btn')
const clicks = fromEvent(btn, 'click')
const higherOrder = clicks.pipe(map(() => interval(1000)))
const firstOrder = higherOrder.pipe(mergeAll(2))

firstOrder.subscirbe(x => console.log(x))
```

