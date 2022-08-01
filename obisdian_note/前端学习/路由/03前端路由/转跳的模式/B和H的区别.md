**React中：**
- 底层原理不一样
	- [[BrowserHistory]] 使用的是 H5 的 history API，不兼容 IE9 及其一下版本
	- [[HashHistory(锚点模式|HashHistory]]，使用的是 url 的哈希值
- 刷新后对路由 state 参数的影响
	-  [[BrowserHistory]] 刷新不会丢失 state 参数，保存在 history 对象中
	- [[HashHistory(锚点模式|HashHistory]]，刷新后会丢失 state 参数
- 