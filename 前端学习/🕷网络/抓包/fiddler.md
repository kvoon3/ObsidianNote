# fiddler使用

## 工具栏

### Replay

重新播放

- 快捷键：r，批量重放 `shift + r`

### Stream

流模式与缓冲模式

***流模式***

fiddler 接收到了请求便立马转发出去

***缓冲模式***

接收到了请求先缓存在 fiddler 中，之后再统一发送

### Decode

解码

### Keep: All sessions

保存会话，保存会话是需要占用内存的，如果电脑性能比较低的话，课可以保存少一点

### Any Process

拖拽查看目标进程

### Find

查找

### 简单计时器

### clear cache

清除浏览器缓存

### TextWizard

请求的编码和解码

### 设置断点

1.  全局断点
2. 命令行 `bpu` + url关键字


## AutoResponder 自动响应器

可以用于拦截某一请求，进行如下操作：

- 重定向到本地的资源
- 使用 Fiddler 的内置响应
- 自定义响应

![[../cookie_session_token/img/Pasted image 20220817151952.png]]

勾选这两个选项

1. 使规则生效
2. 使不匹配规则的响应直接通过

## Composer 设计器

进行一些简单的接口测试

- parsed 刚刚粘贴过来的请求
- Scratchpad 将所有选中的请求粘贴到一起，可以方便对比。点击三次可以选中请求，并 execute 回放

## Filters 过滤器

- Hosts 主机的过滤
	- show only the following hosts只展示对应的主机（如:192.168.0.152:8080
- Client Process 进程的过滤
	- show only traffic from 只展示电脑中的某一种进程的流量
	- show only internet explorer traffic 只展示电脑中IE 的流量
- Request Headers 请求头的过滤
- Breakpoints 断点的过滤
	- Break request on POST 为POST请求时再做断点
- Response State Code 响应状态码的过滤
- Response Type and Size 响应的类型和大小的过滤
	- Hide smaller than .... 隐藏一些较小文件
	- Block CSS files 阻塞掉 css 文件

## 断点

rules > automatic breakpoints > 

1. before requests 请求前断点
	1. 命令：bpu
2. after responses 请求后断点

### 弱网测试

rules > customize Rules>

修改延迟时间

```c#
if (m_SimulateModem) {
	// Delay sends by 300ms per KB uploaded.
	oSession["request-trickle-delay"] = "300"; 
	// Delay receives by 150ms per KB downloaded.
	oSession["response-trickle-delay"] = "150"; 
}
```


### https 抓包



