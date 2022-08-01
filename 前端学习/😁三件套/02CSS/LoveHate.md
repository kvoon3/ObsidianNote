超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不再具有 hover 和 active 了，解决方法是改变 CSS 属性的排列顺序？

`a:link` > `a:visited` > `a:hover` > `a:active`