效果图

![[../../img/Pasted image 20220714162229.png|300]]


技巧点

`flex-wrap:wrap` 使元素不 shrink 换行


```html

<style>
	/*lang="less"*/
	.nav{
		display:flex;
		flex-wrap:wrap;
		.item{
			width:33.3%;
		}
	}
	.
</style>


<body>
	<div cass="nav">
		<a href="" class="item">1</a>
		<a href="" class="item">2</a>
		<a href="" class="item">3</a>
		<a href="" class="item">4</a>
		<a href="" class="item">5</a>
		<a href="" class="item">6</a>
	</div>
</body>

```