# 在 vite 中处理 css

vite 天生就支持对 css 文件的直接处理

1.  vite 在读取到 main.js 中引用到了 index.css
2. 直接去 fs 模块去读取 index.css 中文件的内容
3. 直接创建一个 style 标签，将 index.css 中文件内容直接 copy 进 style 表情里
4. 将 style 标签插入到 index.html 的 head 标签中
5. 将该 css 文件中的内容替换为 js 脚本（方便热更新和 css 模块化），同时设置 Content-Type 为 js ，从而让浏览器以 js 脚本的形式执行该 css 后缀的文件

场景:

-   一个组件最外层的元素类名一般取名 : wrapper
-   一个组件最底层的元素雷明明我们一般取名: .footer

你取了footer这个名字, 别人因为没有看过你这个组件的源代码, 也可能去取名footer这个类名

最终可能会导致样式被覆盖（因为类名重复）, 这就是我们在协同开发的时候很容易出现的问题

cssmodule就是来解决这个问题的

大概说一下原理:

全部都是基于node

1.  module.css (module是一种约定, 表示需要开启css模块化)
2.  他会将你的所有类名进行一定规则的替换（将footer 替换成 _footer_i22st_1）
3.  同时创建一个映射对象{ footer: "_footer_i22st_1" }
4.  将替换过后的内容塞进style标签里然后放入到head标签中 (能够读到index.html的文件内容)
5.  将componentA.module.css内容进行全部抹除, 替换成JS脚本
6.  将创建的映射对象在脚本中进行默认导出

less(预处理器): less给我们提供了一些方便且非常实用的方法

## 配置 

在 vite.config.js 中我们通过 css 属性配置 vite 对于 css 的处理行为

### modules

### preprocessorOptions

[preprocessorOptions 执行参数](https://lesscss.org/usage/#less-options)

`npx lessc --math="always" index.module.less`

上面的代码可以通过配置 preprocessorOptions 项

```ts
{
	//...
		preprocessorOptions:{
			less:{ // 整个的配置对象最终都会给到 less 的执行参数（全局参数）中去
				math: "always",
				gloabalVars:{ // 全局变量
					mainColor:"red"
				}
			}
		}
	//...
}
```