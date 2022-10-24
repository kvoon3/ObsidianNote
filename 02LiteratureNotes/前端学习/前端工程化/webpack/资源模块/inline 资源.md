## inline 资源

### 修改配置

```js
// ...
module:{
	rules:[
		test: /\.svg$/,
		type:"asset/inline"
	]
}
// ...
```

### 应用 ( svg 文件)

类似于 [[00intro#应用 png 文件]]

```ad-warning
注意：不生成文件，同时没有生成为 uri 格式，而是 base64 格式
```