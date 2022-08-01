# HTTP 连接

## 响应时间模型

往返时间 RTT（round-trip time）

响应时间

- 一个 RTT 用来发起 TCP 连接
- 一个 RTT 用来发起 HTTP 请求并等待 HTTP 响应
- 文件传输时间（文件传输时延）

总时间：$2RTT+$传输时间

## 非持久 HTTP 

1.0 版本

![[img/Pasted image 20220705142247.png|300]]

## 持久 HTTP

1.1 版本默认连接

![[img/Pasted image 20220705142734.png|300]]

### 非流水线方式的持久 HTTP

特点

- 客户端只有在接收到前一次响应后才能发出新请求
- 每个引用对象花费一个 RTT

### 流水线方式的持久 HTTP

1.1 的默认模式

特点

- 客户端<span style="color:red">遇到一个引用对象</span>就立刻产生一个请求（不需要等待上一次请求
- 所有引用对象只花费一个 RTT 是可能的