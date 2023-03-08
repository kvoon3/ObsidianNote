# Machines

## 配置

使用配置创建一个 Machines

```ts
import { createMachine } from 'xstate';

const lightMachine  = createMachine(
{
	id: 'light',
	inital: 'green',
	state: {
		green: {
			//...
		},
		red: {
			//...
		},
		yellow: {
			//...
		}
	}
})
```
