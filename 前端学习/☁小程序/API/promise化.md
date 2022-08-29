## 实现

 [github仓库地址](https://github.com/wechat-miniprogram/miniprogram-api-promise)

在小程序中，实现 API Promise 化主要依赖于 miniprogram-api-promise 这个第三方 npm 包。

### Installation

```
npm install --save miniprogram-api-promise
```

### Getting started

Call the method promisifyAll at the program entry (app.js), It only needs to be called once.

💨example:ts

```ts
import { promisifyAll, promisify } from 'miniprogram-api-promise';

const wxp = {}
// promisify all wx's api
promisifyAll(wx, wxp)
console.log(wxp.getSystemInfoSync())
wxp.getSystemInfo().then(console.log)
wxp.showModal().then(wxp.openSetting())

// compatible usage
wxp.getSystemInfo({success(res) {console.log(res)}})

// promisify single api
promisify(wx.getSystemInfo)().then(console.log)
```