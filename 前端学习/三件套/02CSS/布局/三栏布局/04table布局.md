table 实现三栏布局和 [[03flex布局|flex 实现]]很相似

flex 实现：
1. outer ---> display: flex
2. mid ---> flex: auto

table 实现：
1. outer ---> display: table
2. mid ---> display: table-cell

***存在的问题***

现在基本不使用 table 

```html

<style>
  *{
 	 text-align:center;
  }
  .outer{
 	 display:table;
  }
  .inner{
 	 width:300px;
 	 background-color:orange;
  }
  .mid{
 	 display:table-cell;
 	 width:100%;
 	 background-color:blue;
  }
 </style>
 
<body>
  <div class="outer">
    <div class="inner left">left</div>
    <div class="inner mid">mid</div>
    <div class="inner right">right</div>
  </div>
</body>
```