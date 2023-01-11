> 消息订阅与发布模式

 1. on 注册时间
 2. emit 触发事件

```ts
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('event', () => {
	console.log('时间触发了')
})

myEmitter.emit('event')
```
