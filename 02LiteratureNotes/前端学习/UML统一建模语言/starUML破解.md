# Uml工具StarUML破解

修改于2019-12-16 18:17:26阅读 8.7K0

**1、下载安装包**

地址：http://staruml.io/download

![](https://ask.qcloudimg.com/draft/6789197/bi0fmatuz6.png?imageView2/2/w/1620)

**2、安装，很简单，双击下载的包就可以安装了**

**3、破解（这里需要Nodejs的环境，如果你不是个程序员，没有环境，就先装个环境）**

**3.1 安装nodejs环境**

下载Nodejs环境[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

双击安装，需要换路径就换一下，其他的全程默认就可以了。

**3.2、反编译Star UML**

使用管理员打开cmd,依次执行下面的命令

```js
npm install -g asar
cd C:\Program Files\StarUML\resources  //进入到StarUML的默认安装目录下面
asar extract app.asar app  //反编译软件
```

复制

反编译完以后，可以看到这里多了一个叫app的文件夹，这里就是这个软件的源代码

![](https://ask.qcloudimg.com/draft/6789197/xwjh975t40.png?imageView2/2/w/1620)

打开app\src\engine\license-manager.js文件，把原来的注释掉，然后加上一句setStatus(this,true)

![](https://ask.qcloudimg.com/draft/6789197/5e732whrqc.png?imageView2/2/w/1620)

**3.3 再把代码编译成软件就可以了**

```js
cd C:\Program Files\StarUML\resources  //进入到StarUML的默认安装目录下面
asar pack app app.asar
```

复制

**4、开心的使用StrUML**