
![[../../img/Pasted image 20220624144221.png]]

```html
<style>
*{
  text-align:center;
 }
 .left{
  float:left;
 }
 .right{
  float:right;
 }
 .outer{
  width:100%;
  min-width:600px;
 }
 .side{
  width:300px;
  background-color: orange;
 }
 .mid{
  width:calc(100% - 600px);
  float:left;
  background-color:red;
 }
 </style>


<body>
	<div class="outer">
    <div class="side left">side</div>
    <div class="side right">side</div>
    <div class="mid">mid</div>
  </div>
</body>
```