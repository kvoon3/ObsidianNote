## 小程序与普通网页开发的区别

***渲染层和逻辑层***

**网页**

网页开发中渲染层和逻辑层是互斥的（长时间的脚本运行会导致页面失去响应

**小程序**

miniprogram 中 渲染层 和 逻辑层 是分开的，分别运行在不同的线程上

小程序的逻辑层运行在 [[../性能优化/01_浏览器功能与组成#浏览器的内核 渲染引擎|JSCore]] 上，没有完整的浏览器对象，因而缺少响应的 BOM 和 DOM

***运行环境***

***网页*

浏览器环境:

-  PC
	- ie chrome firefox
- 移动端
	- safari chrome ios android 中的各种 WebView

***小程序*

> 小程序中三大运行环境也是有所区别的，有不同的渲染层和逻辑层

- Android 微信客户端
- IOS 微信客户端
- PC 小程序开发者工具

![[img/Pasted image 20220830181628.png]]

## 获取界面上的节点

```ts
const query = wx.createSelectorQuery();
	const box1 = query.select(".box1").boundingClientRect(function )
```