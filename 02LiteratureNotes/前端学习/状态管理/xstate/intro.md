## context

> 上下文 context —— 拓展的状态 state


state 和 context 的区别可以理解为==定性和定量的区别==：
1. 定性，即程序的行为状态
2. 定量，与状态没有直接关系的东西，如 `count`, `name`, `age`



## 修改

分配一个动作创建者 `assign` 用于更新上下文

```ts
// ...
{
	context: {
		count: 10
	},
	states: {
		loading: {
			on: {
				SUCCESS: {
					target: 'loaded',
					actions : [
						assign({
							// 方式一
							count: 11,
							// 方式二
							count: (context, event) => context.count + evnet
						})
					]	
				}
			}
		}	
	}
}
//...
```