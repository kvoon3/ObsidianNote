Margin纵向塌陷现象：小的margin会塌陷到大的margin中，从而margin不叠加，只以大值为准。相邻元素的margin-top 和 margin-bottom 会发生重叠；空白内容的P标签、div标签等也会重叠。

解决方法：

1）为父盒子设置border，为外层添加border后父子盒子就不是真正意义上的贴合  （可以设置成透明：border：1px solid transparent）。

2）为父盒子添加overflow：hidden (父元素开启BFC模式)

3）为父盒子设定padding值：父元素盒子大小改变。[[box-sizing|解决盒子大小变化]]

4）为父盒子添加position：fixed；

5）为父盒子添加 display：table：(父元素开启BFC模式)

6）利用伪元素给子元素的前面添加一个空元素

.son::before{ content:"";overflow:hidden; }



## 终极解决方案

使用 before 和 after 双伪元素清除浮动

```css
.clear::after, .clear::before {  
		content: '';  
		display: block;  
}  
.clear:after {  
		clear: both;  
}  
.clear {  
		*zoom: 1;  
		/* ie6 清除浮动的方式， * 号 只有在IE6 IE7执行，其他浏览器不执行 */  
}
```
