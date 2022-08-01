# link 与 import 的区别

`<link type="image/x-icon" rel="icon" src=""/>`

`type="image/x-icon"`用来表示 icon 文件类型的 MIME

[原文链接](https://www.cnblogs.com/my--sunshine/p/6872224.html#:~:text=1.%E4%BB%8E%E5%B1%9E%E5%85%B3%E7%B3%BB%E5%8C%BA%E5%88%AB%20%40import%20%E6%98%AF%20CSS%20%E6%8F%90%E4%BE%9B%E7%9A%84%E8%AF%AD%E6%B3%95%E8%A7%84%E5%88%99%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%AF%BC%E5%85%A5%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E4%BD%9C%E7%94%A8%EF%BC%9B%20link%20%E6%98%AFHTML%E6%8F%90%E4%BE%9B%E7%9A%84%E6%A0%87%E7%AD%BE%EF%BC%8C%E4%B8%8D%E4%BB%85%E5%8F%AF%E4%BB%A5%E5%8A%A0%E8%BD%BD%20CSS,link%20%E6%A0%87%E7%AD%BE%E5%BC%95%E5%85%A5%E7%9A%84%20CSS%20%E8%A2%AB%E5%90%8C%E6%97%B6%E5%8A%A0%E8%BD%BD%EF%BC%9B%20%40import%20%E5%BC%95%E5%85%A5%E7%9A%84%20CSS%20%E5%B0%86%E5%9C%A8%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%AE%8C%E6%AF%95%E5%90%8E%E8%A2%AB%E5%8A%A0%E8%BD%BD%E3%80%82)

我们都知道，外部引入 CSS 有2种方式，`link`标签和`@import`。  
它们有何本质区别，有何使用建议，在考察外部引入 CSS 这部分内容时，经常被提起。

如今，很多学者本着知其然不欲知其所以然的学习态度，不求甚解，只求结论。  
所以，本文遵循 css hack 的渐进识别原则，  
**结论 → 区别 → 争议 → 细节 → 祖坟 → 感想**，逐渐加深理论层级，  
力争每个 level 的读者，都能 get 到自己想要的内容，不必继续阅读下去。

#### 结论

就结论而言，强烈建议使用`link`标签，慎用`@import`方式。  
这样可以避免考虑`@import`的语法规则和注意事项，避免产生资源文件下载顺序混乱和http请求过多的烦恼。

#### 区别

**1.从属关系区别** (是什么)
`@import`是 CSS 提供的语法规则，只有导入样式表的作用；`link`是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

**2.加载顺序区别** (什么效果)
加载页面时，`link`标签引入的 CSS 被同时加载；`@import`引入的 CSS 将在页面加载完毕后被加载。

**3.兼容性区别**
`@import`是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；`link`标签作为 HTML 元素，不存在兼容性问题。

**4.DOM可控性区别**
可以通过 JS 操作 DOM ，插入`link`标签来改变样式；由于 DOM 方法是基于文档的，无法使用`@import`的方式插入样式。

**5.权重区别(该项有争议，下文将详解)**
`link`引入的样式权重大于`@import`引入的样式。


## 在 html 设计中，css的引入方式有四种

### 方式一：内联样式

### 方式二：嵌入样式

### 方式三：链接样式

### 方式四：导入样式

```html
 <style>
	 @import url(style.css);
 </style>
```

或者写在 css 文件中

```css
@charset "utf-8"

@import url(style.css)

```

