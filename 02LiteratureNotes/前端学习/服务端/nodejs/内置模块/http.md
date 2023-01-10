## 响应

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
		res.writeHead(200, {"Content-Type":"text/html"})// 状态码, 内容
		res.write('kwongliegaai')
		res.write('Guoodli')
		res.end()
	})
	.listen(3000, () => {
		console.log('server start')
	})
```
## 简单路由

假设我们访问了路径 `http:localhost:3000/v1/user`

那么响应 `res.url` 将会收到到字符串 `/v1/user`

```js
const http = require('http')

const Api = {
	user: '/v1/user'
}

http
	.createServer((req, res) => {
		if(req.url === Api.user)
			res.write('{user:"Guoodli"}')
	})
	.listen(3000, () => {
		console.log('server start')
	})
```
