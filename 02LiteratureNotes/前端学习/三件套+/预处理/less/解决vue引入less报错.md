1、创建vue项目后安装less，执行 npm install less less-loader --save-dev

下载版本为：less-loader@6.1.0  ， less@3.11.3，重启服务报错，报错信息如下：

![](https://img-blog.csdnimg.cn/20200608205808789.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbG9uZ3dlaTQzMjE=,size_16,color_FFFFFF,t_70)

2、报错原因 less 本版太高需要降低版本，执行代码 

-   先移除之前版本：npm uninstall less-loader
-   下载指定版本：npm install less-loader@5.0.0 -D

3、重启代码就可以了，若还是报错可移除文件node_modules，重新下载cnpm install



# [Vue中如何使用less](https://www.cnblogs.com/qdwds/p/11516181.html)

最近发现好多小伙伴在面试的过程中会问到vue如何使用less和scss，所以我绝对更新、复习一下less；废话不多说直接进主题；

依赖下载

1、首先使用npm下载依赖；

`npm install --save less less-loader`

2、安装完成后检查是否安装成功；

`lessc -v`

3、如果安装成功后，会显示安装成功后的版本；

![](https://img2018.cnblogs.com/blog/1746115/201909/1746115-20190913101513546-1354302061.png)

引用方法

1、在main.js

`import` `less from` `'less'`

`Vue.use(less)`

2、然后创建一个.vue文件我们开始玩耍了；

注意：独立的vue文件需要引入less

`<style lang=``"less"``></style>`
