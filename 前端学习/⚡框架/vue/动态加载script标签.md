# 动态加载script标签

## 插件

使用插件 `vue-plugin-load-script`

[插件地址](https://www.npmjs.com/package/vue-plugin-load-script)

## 手动实现

## 解决typescript window 拓展问题

在加载 script 标签后我们有可能在 `window` 上拓展了一个字段，但是 ts 检测类型的时候并不会知道，在使用该字段的时候会出现报错。

**解决方法**

```ts
declare const window &
typeof globalThis & {
	aimap: {} // 待添加的字段
}	
```