# websocket 基本使用
## 创建 websocket 对象
```js
// 参数1：url
// 参数2：可选的，指定连接的协议

let socket = new WebSocket(url, [protocol]);

```

## websockect 事件
| 事件    | 事件处理程序     | 描述                       |
| ------- | ---------------- | -------------------------- |
| opeon   | Socket.onopen    | 建立连接时触发             |
| message | Socket.onmessage | 客户端接收服务端数据时触发 |
| error   | Socket.onerror   | 通信发生错误的时候触发     |
| close   | Socket.onclose   | 连接关闭的时候触发         |

## websockect 方法
| 方法           | 描述             |
| -------------- | ---------------- |
| Socket.send()  | 使用连接发送消息 |
| Socket.close() | 关闭连接         |

## 使用 nodejs 开发 websocket 服务

使用 nodejs 开发 websocket 需要依赖一个第三方包。 
