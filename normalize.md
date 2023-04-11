-   [博客园](https://www.cnblogs.com/)
-   [首页](https://www.cnblogs.com/wangchangli/)
-   [新随笔](https://i.cnblogs.com/EditPosts.aspx?opt=1)
-   [联系](https://msg.cnblogs.com/send/sweetLily819)
-   [管理](https://i.cnblogs.com/)
-   订阅[![订阅](https://www.cnblogs.com/skins/loveisintheair/images/xml.gif)](https://www.cnblogs.com/wangchangli/rss/)

随笔- 17  文章- 0  评论- 1  阅读- 39287 

# [normalize.css在vue中使用](https://www.cnblogs.com/wangchangli/p/11414092.html)

#### css样式初始化 normalize在vue中使用

1、Normalize.css只是一个很小的css文件，但它在磨人的HTML元素样式上提供了跨浏览器的高度一致性。相比于传统的CSS reset,Normalize.css是一种现代的、为HTML5准备的优质替代方案。总之，Normalize.css是一种CSS reset的替代方案。

2、作用：

-   保护有用的浏览器样式而不是去掉他们。
    
-   为大部分HTML元素提供一般化的样式
    
-   修复浏览器自身的bug并保证各浏览器的一致性。
    
-   优化css可用性
    
-   用注释和详细的文档来解释代码
    
-   Normalize支持包括手机浏览器在内的超多浏览器，同时对HTML5元素、排版、列表、嵌入的内容、表单和表哥都进行了一般化。尽管这个项目基于一般化的原则，但我们还是在合适的地方使用了更实用的默认值。
    

3、使用方式

-   安装
    
    ```mipsasm
    npm install --save normalize.css 
    ```
    
-   main.js引入
    
    ```go
    import 'normalize.css/normalize.css'
    ```
    
-   如果引入报错，可能没有安装css-loader 和style-loader
    
    ```mipsasm
    npm install css-loader style-loader
    ```