# 资源模块

可以通过资源模块类型 ( asset module type )，替换所有类型

1. `asset/resourece` 发送一个单独的文件，并导出 uri
2. `asset/inline` 导出 data 的 uri
3. `asset/source` 导出资源的源代码
4. `asset` 自动导出 Data uri 或者和 源代码

[[Resource 资源]]

[[inline 资源]]

[[source 资源]]

[[asset 通用资源类型]]

---

## webpack 处理资源的策略

默认情况下，当一个资源文件

1. 小于 8k ：webpack 会将资源作为 inline 转换为 base64 文件。
2. 大于 8k ：构建一个单独的资源文件

### 设置生成资源文件临界值

`Rule.parser.dataUrlCondition`

**webpack.config.js**

```js
// ...
module:{
	rules:[
		// ...
		parser: {
			dataUrlCondition: {
				maxSize: 4 * 1024 * 1024
			}
		}
	]
}
// ...
```

---

## 修改资源生成路径

> 默认情况下 webpack 将资源直接放在 dists 目录下

方法一

修改 output ---添加--->  assetModuleFilename

```ad-note
webpack 自带

1. `[contenthash]` 根据文件内容生成哈希字符串
2. `[ext]` 表示扩展名
```

```js
//...
output: {
	assetModuleFilename: "images/[contenthash][ext]"
}
//...
```

方法二

在资源 rule 规则中指定 generator 的 filename 属性

该方法的优先级高于方法一，同时可以与方法一共存

```js
//...
module:{
	rules:[
		test:/\.png$/,
		type:"asset/resource",
		generator:{
			filename:"images/test.png"
		}
	]
}
//...
```