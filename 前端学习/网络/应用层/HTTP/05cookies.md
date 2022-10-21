用于保存用户-服务器状态

详细见 `G:/编程资料/计算机网络cookies.wmv`

## 什么是 cookie ，cookie 的作用

> cookie诞生的目的：HTTP的无状态问题

cookie 实际上是一小段的文本信息(`key-value`)

格式：`Cookie: name1=value1; name2=value2`

| 属性项     | 含义                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------- |
| name=value | 键值对，可以设置要保存的 key/value,<span style="color:red">name不能和其它的属性项同名</span> |
| Expires    | 过期时间                                                                                     |
| max-age    | 最大生命周期                                                                                             |
| Domain     | 生成该 Cookie 的域名，如www.google.com                                                       |
| Path       | 该 Cookie 是在哪个路径下产生的，如 path=/wp-admin/                                           |
| Secure     | 如果设置的了这个属性，那么只会在 SSH 连接时才会回传该 Cookie                                 |


![[../img/Pasted image 20220712101448.png]]

***Expires 与  max-age***

> expires 是网景公司早年推出的 Cookie 的一部分。在 HTTP1.1 中，expires 被弃用并且被更加易用的 max-age 代替。为此我们只需要说明这个 Cookie能够存活多久就行了，而不需要指定一个绝对的日期（因为绝对的日期需要 client 和 server 一致）

expires 指定一个绝对的过期时间（GMT 格式）

max-age 文档被访问后的存活时间，这个值是相对的，相对的是**文档第一次被请求时，服务器记录的Request_time(请求时间)**

*兼容性*

不幸的是，IE 浏览器 不支持 max-age，如果你想跨浏览器存放 Cookie，应该坚持用 expires。

***Path***

<span style="color:red;background-color:yellow">Cookie 以路径存储，上层路径不能访问下层的路径cookie，下层的路径cookie可以访问上层的路径cookie </span>


## cookie 机制

1. 客户端发送一个请求到服务器
2. 服务器发送一个HttpResponse响应到客户端，其中包含Set-Cookie的头部
3. 客户端保存cookie，之后向服务器发送请求时，HttpRequest请求中会包含一个Cookie的头部
4. 服务器返回响应数据

![[../img/Pasted image 20220712094641.png|500]]


Response Headers（响应头部）：`set-Cookie`

Request Headers（请求头部）：`Cookie`

  
![[../img/Pasted image 20220712095001.png]]


## 存储容量

将 cookie 控制在 4095B 以内，超出的数据会被忽略

IE6及更低版本：最多20个 Cookie

IE7及以上版本：最多50个 Cookie

Firefox：最多 50个 Cookie

Chrome & Safari 没有硬性限制

---

## 问题

**问：如果我在 Cookie 中同时设置了 expires 和 max-age 会发生什么？**

答：所有支持 max-age 的浏览器会忽略 expires 的值，只有 IE 另外，IE 会忽略 max-age 只支持 expires。

**问：如果我只设了 max-age 会怎样？**

答：除了 IE 之外的所有浏览器会正确的使用它。<span style="color:red">在 IE 浏览器中，这个 Cookie 将会作为一个 Session Cookie（当你关闭浏览器时它会被删除）</span>。

**问：如果我只设了 expires？**

答：所有浏览器会正确使用它来保存 Cookie，只需要记得像上边示例那样设置它的 GMT 时间就行了。


