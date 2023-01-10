字符串

```js
const http = require('http')

http
	.createServer((req, res) => {
		res.write('kwongliegaai')
		res.write('Guoodli')
		res.end()
	})
	.listen(3000, () => {
		console.log('server start')
	})
```

html

添加响应头 `res.writeHead(200, {"Content-Type":"text/html"})`

```js
const http = require('http')

http
	.createServer((req, res) => {
		res.writeHead(200, {"Content-Type":"text/html"})
		res.write('kwongliegaai')
		res.write('Guoodli')
		res.end()
	})
	.listen(3000, () => {
		console.log('server start')
	})
```