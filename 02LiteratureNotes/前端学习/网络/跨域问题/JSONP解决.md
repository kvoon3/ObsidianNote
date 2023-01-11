
# JSONP 解决跨域问题

思路：由于浏览器的 `<script>` 标签允许跨域。在浏览器端定义一个函数用于通信，该函数用于接收服务器传来的参数，由于服务器端发送的内容在浏览器端实际上会执行一遍，<span style="color:red;">因此可以在服务器端返回调用该函数的语句，并传入数据</span>

客户端代码

```html
<script>
 function run(data){
	 console.log(data);
 }
 </script>

 <script src="http://43.138.136.117:3000/jsonp?callback=run"></script>
```

服务器端代码

```javascript
const express = require("express");
const app = express();
const PORT = 3000
app.get("/jsonp",(req, res)=>{
	//获取浏览器端函数
	let callback = req.query.callback;
	//设置发送的JSON数据
	let data = JSON.stringify({
		name:"kwongliegaai",
		age:19
	});
	//设置请求头
	res.setHeader("Content-type", "application/json;");
	res.send(callback + `(${data})`); // run({name:'kwongliegaai', age: 19}) 被当作函数执行
});

app.listen(PORT, ()=>{
	console.log("服务器开启了");
});

```