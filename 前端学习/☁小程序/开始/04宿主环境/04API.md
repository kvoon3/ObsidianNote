三大类 API

## 事件监听 API

以 on 开头

## 同步 API

特点

1. 以 `Sync` 结尾
2. 执行的结果通过返回值获取，执行出错着报错

例：向本地存储中写入数据

```js
wx.setStorageSync("key", "value");
```

## 异步 API

特点

类似于 jq 中的 `$.ajax(options)` 函数

例：wx.request() 发起网络数据请求，通过 success 回调函数接收数据