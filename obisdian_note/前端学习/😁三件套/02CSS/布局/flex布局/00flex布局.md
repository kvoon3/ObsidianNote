## 原理

通过给父盒子添加 flex 属性，来控制子盒子的位置和排列方式

## 两个重要概念

- 开启了 flex布局的元素叫 <span style="color:red">flex container</span>
- container 中的直接子元素称为 <span style="color:red">flex items</span>

## 设置 display 属性
1. flex：flex container 以块级(block-level)元素形式存在
2. inline-flex：flex container 以行内(inline-level)元素形式存在

## flex 布局模型
![[../../img/Pasted image 20220628100826.png|600]]
<div style="text-align:center;color:grey;">flex 布局模型图</div>

## 特点

- 当我们为父元素设置为 flex 布局后，子元素的 `float`, `clear`, `vertical-align` 属性将失效。
- items 宽高的决定因素：（优先级从高到低
	- max-width / min-width、max-height / min-height
	- flex-basis
	- width / height
	- 内容本身的 size