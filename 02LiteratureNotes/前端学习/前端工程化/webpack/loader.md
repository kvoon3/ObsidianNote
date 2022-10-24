# loader

loader 是 webpack 生态里的一个重要组成，一般我们称之为预处理器

webpack 在进行打包的时候，对所有引入的资源文件，都当作模块 `module` 来处理

```ad-note
webpack 只支持直接处理 js 和 json 文件，如果引入了其他内容，则需要使用合适的 loader
```

##  样式资源

下载 loader

`pnpm i css-loader style-loader -D`

```js
module.exports = {
	module: {
		rules:[
			test:/\.css$/i,
			use:[
				// 在 head 中创建 style 标签
				'style-loader',
				// 将 css 文件 整合到 js 文件中
				'css-loader'
			]
		]
	}
}
```

在 js 文件中导入 css 文件

### 抽离 css 代码(为独立文件

下载插件 [mini css extract plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin)

`npm i mini-css-extract-plugin -D`

#### 作用

1. 将 css 文件提取到单独的文件中
2. **为每个包含 css 的 js 文件创建一个 css 文件**
3. 同时支持 css 和 sourceMaps  的按需加载

```ad-attention
本插件建立于 webpack5 的新特性之上，需要注意 webpack 本本
```

#### 使用插件

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	//...
	module:{
		rules:[
			{
				test:/\.css/,
				use:[
					// 抽离 css 为独立文件
					MiniCssExtractPlugin.loader,
					// 将 css 文件整合到 js 文件中
					'css-loader'
				]
			}
		]
	},
	plugins:[
		new MiniCssExtractPlugin({
			// 指定输出路径和文件名
			filename:'styles/[contenthash].css'
		})
	]
}
```

### 压缩 css 代码 ( 生产模式 )

安装 [css-minimizer-webpack-plugin](https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/)

`npm i css-minimizer-webpack-plugin -D`

#### 使用插件

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

## 字体资源

### css3 webfont

css3 中增加了 webfont，通过 webfont 我们可以在 css 文件中加载字体

### Asset Modules 接收加载

```js
module.exports = {
  ...
  module: {
    rules: [
      {
        // 监听资源文件
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        // 设置资源类型
        type: 'asset/resource',
        generator: {
          // 生成资源名称
          filename: 'assets/fonts/[name][ext]'
        },
      }
    ]
  }
}
```

## 数据资源

- json -> 直接支持(同nodejs)
- csv/tsv -> `csv-loader`
- xml -> `xml->loader`

[自定义 json 模块]([https://www.bilibili.com/video/BV1YU4y1g745?p=34](https://www.bilibili.com/video/BV1YU4y1g745?p=34))


## js 资源

### 使用 babel loader

[webpack babel loader 官方文档](https://webpack.docschina.org/loaders/babel-loader/)

安装

`npm i @babel/core babel-loader @babel/preset-env -D`

- `@babel/core` babel 核心模块
- `babel-loader` 在 webpack 里应用 babel 解析 ES6 的桥梁
- `@babel/preset-env` babel 预设，一组 babel 插件的集合，理论上我们每一个 babel 的解析都需要一个插件，preset-env 帮我们安装了很多插件

配置 webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```