## CORS 解决跨域问题

```js
const app = require("express")();
const cors = require("cors");
const PORT = 3000;

app.use(
  cors({
    origin:"*", //正常写法：
    methods:["GET", "POST"]
  })
)

app.get("/", (request, response)=>{
  response.send("some message");
})

app.listen(PORT, ()=>{
  console.log("服务器开启了");
});
```

---

[参考文章1：跨域——CORS详解（知乎）](https://zhuanlan.zhihu.com/p/24411090)

[参考文章2：造成跨域的原因和解决办法（博客园）](https://www.cnblogs.com/wangpenghui522/p/6284355.html)

### CORS (Cross-origin resource sharing) 跨域资源共享

支持 CORS 请求的浏览器(IE不能低于10)一旦发现发送了 跨域的 ajax 请求，就会对请求做出一些特殊处理，之后将由实现了 CORS 接口的服务器接收请求，并且做出响应，<span style="color:yellowgreen">这个过程中前端代码不需要有任何特殊处理</span>。

浏览器对跨域请求分为了

1. 简单请求 (simple request)
2. 非简单请求 (no-so-simple request)

#### 简单请求

##### 特征
- 一、请求方式为以下三种：
	- HEAD
	- GET
	- PUT
- 二、HTTP 头信息不超过以下字段
	- text
	- Accept
	- Accept-Language
	- Content-Language
	- Last-Event-ID
	- Content-Type：
		- application/x-www-form-urlencoded、multipart/form-data、text/plain

#### 处理方式

> 浏览器发请求

浏览器判断跨域为简单请求时候，会在Request Header中添加 **Origin （协议 + 域名 + 端口）字段 ， 它表示我们的请求源，服务端将会校验该源。

![[../img/Pasted image 20220629195212.png|400]]

>  服务端回响应

如果 Origin 字段的源为**允许源**，服务端将会在响应头中添加加 `Access-Control-Allow-Origin`、`Acess-Control-Allow-Credentials` 等字段，<span style="color:red">告知浏览器。</span>

![[../img/Pasted image 20220629200239.png|400]]

> 浏览器接响应

浏览器收到Respnose后会判断自己的源是否存在 Access-Control-Allow-Origin允许源中，如果不存在，会抛出“同源检测异常”。

**总结**

简单请求只需要CORS服务端在接受到携带Origin字段的跨域请求后，在response header中添加Access-Control-Allow-Origin等字段给浏览器做同源判断。


### 非简单请求

对于非简单请求，浏览器会发**2次**请求，先发类型为 OPTIONS 的 "预检请求"，后发"主请求"，两次请求地址一致。

CORS服务端对“预检请求”处理，并对Response Header添加验证字段，客户端接受到预检请求的返回值进行一次请求预判断，验证通过后，主请求发起。

例如：发起 content-type=application/json 的非简单请求，这时候传参要注意为json字符串

![[../img/Pasted image 20220629203835.png]]

这里可以看到，浏览器连续发送了两个jsonp.do请求 ， 第一个就是“预检请求”，类型为OPTIONS，因为我们设置了content-type这个属性，所以预检请求的Access-Control-Expose-Headers必须携带content-type，否则预检会失败。

预检通过后，主请求与简单请求一致。

总结：非简单请求需要CORS服务端对OPTIONS类型的请求做处理，其他与简单请求一致
