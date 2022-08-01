## CSS 雪碧图

### 简介

CSS Sprites在国内很多人叫css精灵，是一种网页图片应用处理方式。它允许将一个页面涉及到的所有零星图片都包含到一张大图中， 利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位， 访问页面时避免图片载入缓慢的现象。

### 优点

利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这也是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；

==CSS Sprites能减少图片的字节==，曾经比较过多次3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

CSS Sprites解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率。

CSS Sprites只需要修改一张或少张图片的颜色或样式来改变整个网页的风格。

### 缺点

1. 图片合并麻烦
2. 图片适应性差
3. 图片定位繁琐
4. 可维护性差


![[img/Pasted image 20220630152131.png]]

## SVG 雪碧图

与 css sprite 类似。

相比css sprite 提供另外一种实现思路 ：`<symbol>` + `<use>`。`<symbol>`用于定义可复用的形状，定义的现状不会展示出来，  
而是通过use元素引用来显示

[use元素](http://tutorials.jenkov.com/svg/use-element.html)是SVG中非常强大，非常重要的一个元素，尤其在Web开发中，为何？

两点：

1.  可重复调用；
2.  跨SVG调用；

**1. 可重复调用**  
你好不容易，用了几十个坐标值，好不容易绘制了一个图形，如果你想再弄一个同样造型，但位置不同的图形出来，你会怎么办？——再复制一遍代码？别说笑了，（如果真那样）SVG文件的尺寸赶得上二师兄的腰围了。

使用`<use>`元素就可以，看下面的板栗：

```html
<svg>
	<defs>
		<g id="shape">
				<rect x="0" y="0" width="50" height="50" />
				<circle cx="0" cy="0" r="50" />
		</g>
	</defs>

	<use xlink:href="#shape" x="50" y="50" />
	<use xlink:href="#shape" x="200" y="50" />
</svg>
```
结果是（IE9+浏览器可见）：

![[img/Pasted image 20220704155401.png|200]]