- 通过响应/请求拦截器做到了token无感刷新
- 使用到了工厂模式/建造者模式/状态模式，处理组件的样式


如何在vue的 data 中为 data 中的对象的属性设置 type 类型

![[img/Pasted image 20220818102416.png|500]]

方式一实际上更加合理，因为有时候我们并不想要为属性先初始化，而是等到 mounted 的时候再初始化


[参考文章：Set data Type in Vue data object with Typescript(stackoverflow)](https://stackoverflow.com/questions/47810218/set-data-type-in-vue-data-object-with-typescript)
