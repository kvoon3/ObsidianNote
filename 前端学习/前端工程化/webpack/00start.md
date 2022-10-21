[[前端学习/前端工程化/webpack/出口]]

[[前端学习/前端工程化/webpack/插件]]

[[01搭建开发环境]]

[[资源模块/00intro]]


## 全局安装 webpack

`npm i webpack webpack-cli -g`

全局安装 webpack 可能出现的问题

1. 全局安装 webpack 会使 webpack 锁定到某个版本里
2. 在使用不同版本的 webpack 项目里可能会导致构建失败
3. 团队协作时同伴构建出现问题

## 本地安装 webpack

`npm i webpack webpack-cli --save-dev`

## 运行 webpack

`npx webpack`

webpack 命令需要全局安装 webpack ，通过 ==npx== 可以在当前目录下查找 webpack 运行 webpack 命令

## 自定义 webpack 配置

`webpack.config.js(entry, output, mode)`

```js
module.exports = {
	entry: "./src/index.js",
	output:{
		filename: "bundle.js",
		path: "./dist"
	},
	mode:""
}
```