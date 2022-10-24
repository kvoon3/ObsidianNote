
![[../../img/Pasted image 20220624150947.png]]

***思路***

1. outer 开启 flex
2. left 和 right 固定宽度
3. mid ---> flex:auto

***存在的问题***

兼容性差，flex 为 css3 内容


```html
 <style>
  *{
 	 text-align:center;
  }
  .outer{
 	 display:flex;
  }
  .left{
 	 width:300px;
 	 background-color: #f1f1f1;
  }
  .right{
 	 width:200px;
 	 background-color: #f1f1f1;
  }
  .mid{
 	 flex:auto;
 	 background-color: #ddd;
  }
 </style>


<body>
  <div class="outer">
    <div class="left">left</div>
    <div class="mid">mid</div>
    <div class="right">right</div>
  </div>
</body>
```