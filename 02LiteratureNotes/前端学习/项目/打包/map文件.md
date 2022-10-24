# map文件
项目打包后，代码都是经过压缩加密的，如果运行时候出错，输出的错误信息是无法得知其出错的位置的。

`xxx.js.map` 文件可以将错误信息定位到正确的位置。**在项目中不需要可以去掉**

配置 *vue.config.js* 在打包时不生成map：

```js
productionSourceMap:false
```