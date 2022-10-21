![[../img/Pasted image 20220826140821.png|600]]

## 应用声明周期

1. onLaunch
2. onShow
3. onHide 

## 页面声明周期

1. onLoad 页面创建
2. onShow 页面显示 / 被切入到前台
3. onReady 页面初次渲染完成（只会调用一次）
4. onHide 页面隐藏 / 被切入到后台
	1. 隐藏：页面导航切换
5. onUnload

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

| 当前页面    | 路由后页面  | 触发路由的声明周期                              |
| ----------- | ----------- | ----------------------------------------------- |
| A           | A           | nothing happen                                  |
| A           | B           | A.onHide() B.onLoad() B.onShow()                |
| A           | B(再次打开) | A.onHide() B.onShow()                           |
| C           | A           | C.onUnload() A.onShow()                         |
| C           | B           | C.onUnload() B.onLoad() B.onshow()              |
| D           | B           | D.onUnload() C.onUnload() B.onLoad() B.onShow() |
| D(转发进入) | A           | D.onUnload() A.onLoad() A.onShow()              |
| D(转发进入) | B            | D.onUnload B.onLoad() B.onShow()                |

观察后可以发现:

1. 只要是 tabbar load 以后便不会再 unload 了
2. 一个 tabbar 页面想要跳转到另一个 tabbar 页面, 就必须将所属的所有 普通页面 全部 unload 掉

转发进入: 该页面的 load 是独立的