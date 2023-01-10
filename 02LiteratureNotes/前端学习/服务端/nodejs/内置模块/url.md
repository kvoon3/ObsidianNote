# url


## 旧 api

[url 模块的使用细节](https://zhuanlan.zhihu.com/p/135842287)

```js
const url = require('url')
const parsedUrl = url.parse(urlString)
```

如访问 `localhost:3000/?name=kwongliegaai`，parsedUrl 的值如下图所示

![[../../img/Pasted image 20230110181611.png]]

完整代码：

```js
const http = require('http')
const url = require('url')

http
	.createServer((req, res) => {
		const parsedUrl = url.parse(req.url)
	})
	.listen(3000, () => {
		console.log('server start')
	})
```

## 新 API

