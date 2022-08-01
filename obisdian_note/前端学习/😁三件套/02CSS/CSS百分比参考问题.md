- 参照父元素宽度的元素：==padding margin== width text-height
- 参照父元素高度的元素：height
- 参照父元素属性： font-size line-height

<div style="color:red"><span style="red">特殊：相对定位的时候，top(bottom)/left(right) 参考的父元素的内容区域的高度与宽度，而绝对定位的时候参照的是最近的定位元素包含 padding 的高度和宽度</span></div>

**为什么 padding 和 margin 参考的是宽度？**

假如padding-top是按照height来说,父元素的高度会包含子元素的高度,如果子元素的padding-top继续增加,那么父元素的高度也会增加,因为父元素要包含子元素嘛,这样的话,父元素的高度就成为了一个死循环.

还有一种说法,我们都知道padding-left/right和margin-left/right都是按照宽度来说的,当我们不设置具体的上下左右只设置margin或padding时四个值应该保持为一种类型.