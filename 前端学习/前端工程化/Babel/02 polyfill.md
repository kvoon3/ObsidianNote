# 02 polyfill

polyfill 垫片 即补齐 API ，即通过 polyfill 的方式在目标环境添加缺失的特性

> polyfill 广义上讲是为环境提供不支持的特性的一类文件或库，狭义上讲是 `polyfill.js` 文件以及 `@babel/polyfill` 这个 npm 包。

## 新 api 分类

1. **全局对象**及其对象自身的方法
	1. Promise
	2. Map
	3. Symbol
	4. Proxy
	5. Iterator
2. **实例方法**
	1. 如 `Arrary.prototype.find`

因此 polyfill 提供了 全局的 ES6 对象，并修改了 Array.prototype 的方法的实现

**要想让 ES6 的新 api 在低版本浏览器正常运行，我们就不能只做语法转换**

---

## @babel-polyfill

polyfill 既有官方的库也有第三方的。`babel-polyfill` 指的是**官方的 polyfill** 

polyfill 传统上分为两类：

1. 已经构建成 js 文件的 `polyfill.js`
2. 需要 npm 安装的 `@babel-polyfill`

`@babel-polyfill` 的组成为两个 npm 包

1. `core-js`
2. `regenerator-runtime`

```ad-warning
🚨 从 Babel 7.4.0 开始，这个包已经被弃用，因为 `@babel/polyfill` 本身其实就是两个包的集合：`core-js` + `regenerator-runtime`：

官方推荐直接使用这两个包，虽然 `@babel-polyfill` 还在进行版本升级，但其使用的 `core-js` 包为 2.x.x 版本，而 `core-js` 这个包本身已经发布到了 3.x.x 版本了
```


### 引入 polyfill

### html 文件

直接在 html 文件 引入  `polyfill.js`

### 入口文件

如 `main.ts`

1. 入口文件引入 `prlyfill.js`
2. 入口文件引入 `@babel/polyfill`
3. 入口文件引入 `core-js/stable` 和 `regenerator-runtime/runtime`  ==推荐==

### 由构建工具引入

#### webpack

修改配置文件入口 entry

```js
module.exports = {
	entry: ["@babel-polyfill", "./app.js"]
}
```

或者 （==推荐==）

```js
module.exports = {
	entry: ["core-js/stable", "regenerator-runtime/runtime" "./app.js"]
}
```