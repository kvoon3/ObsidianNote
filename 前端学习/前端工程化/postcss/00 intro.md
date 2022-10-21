# postcss

postcss 主要工作：保证 css 的执行是万无一失的

1. 对未来 css 属性的一些使用降级
2. 前缀补全

工作流程:

row code -> less/sass: 语法编译(嵌套语法，函数，变量) -> 对高级 css 语法降级 -> 前缀补全

```ad-tip
目前来说，less 和 sass 等一系列预处理器的 postcss 插件已经停止维护了 less 插件，我们自己去用 less 和 sass 编译就好了，然后把结果交给 postcss

所以业内就产生了一个新的说法：postcss 是 **后处理器**
```

## 使用 postcss

### 安装依赖

```shell
yarn add postcss-cli postcss -D
```

编译

[在 postcss-cli 中查看 postcss 编译命令](https://www.npmjs.com/package/postcss-cli)

```shell
npx postcss index.css -o result.css
```

```ad-note
使用未来的 css 特性( 如 var(--blue) )不需要交给 less sass 去处理，因为 less 和 sass 也处理不了，这样只会损耗性能

**因此如果使用原生 css 新特性就不要写在 sass 和 less 文件里了**
```

postcss.config.ts

```ts
const postcssPresetEnv = require("postcss-preset-env");
const path = require("path");

module.exports = {
	plugins: [
		postcssPresetEnv({
			importFrom: path.resolve(__dirname, "./variable.css") // 导入一些文件
		})
	]
}
```

## 