[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 中的 **`box-sizing`** 属性定义了 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent) 应该如何计算一个元素的总宽度和总高度。

在 css 盒模型的默认定义里，width 和 height 指的是 content 的大小。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

`content-box`  (w3c标准盒模型)

默认值。如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- 尺寸计算公式：
	- `width` = 内容的宽度
	- `height` = 内容的高度

---

`border-box` (怪异盒模型)

告诉浏览器：你想要设置的边框和内边距的值是包含在 width 内的。也就是说，如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去 (border + padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。
- 尺寸计算公式：
	- `width` = border + padding + 内容的宽度
	- `height` = border + padding + 内容的高度

**译者注：** `border-box`不包含`margin`

```ad-attention
ie8以上都是w3c标准盒模型    ie5极其以下都是ie盒子模型，ie6、ie7、ie8在混杂模式下ie盒模型，在标准模式下是w3c标准盒模型  
    (注意：ie6在混杂模式下一定是Ie盒模型，而ie7、ie8在混杂模式下不一定是ie盒模型)
```
