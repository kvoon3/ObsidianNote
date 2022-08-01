```ad-attention
nth-child(n), 从1开始计数

nth-child(odd) nth-child(even) 从1开始计数

nth-child(an + b) <span class="imp">从0开始计数</span>
```


案例一

选取一组标签的前三个 `nth-child(-n+3)`

取值范围区间

![[img/Pasted image 20220714164701.png]]



## 题目

以下的代码，从上到下 \<img\> 标签的背景色依次是

![](https://uploadfiles.nowcoder.com/images/20170919/300823_1505813946375_52788E971C0BEA04E8071D25B3AC3DCC)



```html
<style>
 .list img{
  background:blue;
  width:50px;
  height:50px;
 }
 .list>p:nth-child(even) img{
  background:red;
 }
 .list>p:last-child img{
  background:orange;
 }
 </style>
<body>
  <div class="list">
    <p><img/></p>
    <p><img/></p>
    <div class="sub-list">
      <p><img/></p>
      <p><img/></p>
    </div>
    <p><img/></p>
    <div class="sub-list">
      <p><img/></p>
    </div>
  </div>
</body>
```

## 答案

blue / red / blue / blue / red / blue

## 解析

```css
.list>p:nth-child(even) img {
	background: red;
}
```

```ad-warning
指的是 .list 下的所有子代中，为偶数子代并为 p 标签
- p (nth:1)
- p (nth:2) (even) (为 p)
- div (nth:3)
- p (nth:4) (even) (为p)
- div (nth:5)

错误理解 .list 下所有 p 标签子代中，为偶数的
- p (nth:1)
- p (nth:2)
- p (nth:3)
```

---

```css
.list>p:last-child img {
	background: orange;
}
```

指的是 .list 所有子代中的最后一个子代，且子代为 p 标签


![[../../../🗑todelete/img/Pasted image 20220627162137.png|400]]


![[../../../🗑todelete/img/Pasted image 20220627162153.png|400]]