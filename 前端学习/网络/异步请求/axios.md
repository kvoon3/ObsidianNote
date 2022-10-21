# 基础
使用axios发送[[ajax#什么是ajax技术？|ajax]]请求

---

### 页面结构
```html
<body>
	<button onclick="Run()"></button>
	<script src=""></script>
	<script>
		...Run()...
	</script>
</body>
```

---

### 写法

#### 写法一(get)

`axios({config})`
axios作为函数发请求

***config / options***
* `url:"https://域名:端口/具体路由"`
* `method:"GET/POST/PUT/DELETE"`
* `params:{key:value}`
	* 在axios的options配置中，params指的是参数（query参数），而不是特指params参数。

[[axios#页面结构|页面结构]]
```js
function Run() {
	 axios({
		 url: 'http://localhost:3000/posts',
		 method: 'GET',
		 params: { //此处指的是parmas参数！！！！！！！！！！
			 id: 1,
			 xxx: 'abc'
		 }
	 })
	 .then(
		 response => {
			 console.log(response.data, response.status, response.statusText)
		 },
		
		 error => {
			 alert(error.message)
		 }
	 )
 }
```

---

#### 写法二(get)

`axios.get("url",{config})`  [[axios#^43028d|与post的区别]]
axios作为**对象**发请求，类似于promise中的`promise.resolve()`语法糖

***config / options***
* `params:{key:value}`
	* 在axios的options配置中，params指的是参数（query参数），而不是特指params参数。

[[axios#页面结构|页面结构]]
```js
function Run() {
	axios.defaults.baseURL = "https://localhost:3000"
	 axios.get("/posts",{
		 params: {
			 id: 1,
			 xxx: 'abc'
		 }
	 })
	 .then(
		 response => {
			 console.log(response.data, response.status, response.statusText)
		 },
		
		 error => {
			 alert(error.message)
		 }
	 )
 }
```

#### 写法三(post)

`axios.post("url",{data},{config})`    [[axios#写法二 get|与get的区别]] ^43028d

axios作为**对象**发请求，类似于promise中的`promise.resolve()`语法糖

***config / options***
* `params:{key:value}`
	* 在axios的options配置中，params指的是参数（query参数），而不是特指params参数。

[[axios#页面结构|页面结构]]
```js
function Run() {
	axios.defaults.baseURL = "https://localhost:3000"
	 axios.post("/posts",{title:"标题",author:"旷力介"},{})
	 .then(
		 response => {
			 console.log(response.data, response.status, response.statusText)
		 },
		
		 error => {
			 alert(error.message)
		 }
	 )
 }
```

---

### 常用语法图
![[img/axios_img/Pasted image 20220404124823.png|500]]

### axios.create()

Creating an instance（实例）

```ad-quote
You can create a new instance of axios with a custom config
```


***语法***

`axios.create([config])`

```js
const instance = axios.create({  
 baseURL: 'https://some-domain.com/api/',  
 timeout: 1000,  
 headers: {'X-Custom-Header': 'foobar'}  
});
```

***使用场景***

当我们需要发送多个差异化的请求时，我们不可能频繁的修改一个axios。
* 通过该方法得到多个`instance`，并配置`instance`的`instance config`，可以实现这个需求。

```js
const instance = axios.create({  //基础配置
	baseURL: 'https://some-domain.com/api/',
	timeout: 1000,
	headers: {'X-Custom-Header': 'foobar'}
});

// instance
instance({  //差异化的配置
	//...config...
})
```

### 请求拦截器

```js
// 添加请求拦截器  
axios.interceptors.request.use(
	function (config) {  
		// 在发送请求之前做些什么  
		return config;  
	},
	function (error) {  
		// 对请求错误做些什么  
		return Promise.reject(error);  
	}
);
```

***定义***

在真正发送请求执行的回调函数

***作用***

* 对请求的配置做一些处理
	* 如：data/header
		* header这个属性很重要
* 对请求进行检查，不满足条件不发请求
* 界面loading提示


---

### 响应拦截器
```js
axios.interceptors.response.use(
	function (response) {  
		// 对响应数据做点什么  
		return response;  
	},
	function (error) {  
		// 对响应错误做点什么  
		return Promise.reject(error);  
	}
);
```

***定义***

在响应后执行的回调函数（在外层的回调之前）

***作用***

* 对请求成功/失败的数据进行处理

---

### 取消请求

#### 定义
使用 *cancel token* 取消请求


#### 示例

流程：
* 点击`按钮1`
	* 发送请求
	* 取出`cancelToken`里的`cancel()`函数
* 点击`按钮2`
	* 拿到cancel()函数
	* 取消请求

#### 页面结构

```html
<body>
	<button class="btn1">click me to send</button>
	<button class="btn1">click me to cancel</button>
	<script>
		//...js代码	
	</script>
</body>
```

```js
let buttons = document.querySelectorAll("button");
let cancel; //存储【用于取消的函数】的变量
buttons[0].onclick = function(){
	axios({
		url:"https://localhost:3000/posts",
		method:"GET",
		//1.配置【取消令牌】这个属性
		cancelToken:new axios.CancelToken(function executor(c){//executor在其中立刻同步执行，c为一个用于取消请求的函数
			//2.取出这个用于取消的函数，方便未来在某处调用它
			cancel = c;
		})
	});
}

buttons[0].onclick = function(){
	cancel(); //3.拿到函数，执行
}
```


---
#### axios.isCancel()

***用途***

判断某个错误是否是由cancel产生的

```js
.then(
	 value=>{console.log(value);},
	 reason=>{
		 if(axios.isCancel(reason)){//因为取消而失败
			 console.log("被取消:",reason);
		 }else{//因为错误而是失败
			 console.log("发生错误",reason.message);
		 }
	 }
 );
```


---

#### 取消请求时应该注意的问题

```ad-tip
请求一旦被取消，cancel里保存的值就一定变了
```

![[img/axios_img/Pasted image 20220404144908.png|700]]



***源代码 （无拦截器）***

```js
let cancel;
function run1(){
	if(cancel){
		cancel("强制取消");
	}
	axios({
		url:"http://localhost:3000/posts",
		method:"GET",
		cancelToken:new axios.CancelToken(function executor(c){
			cancel = c;
		})
	})
	.then(
		value =>{
			cancel = null;
			console.log(value);
		},
		reason => {
		
			//cancel = null; //不能写在这里
			
			if(axios.isCancel(reason)){//因为取消引起的失败
				console.log(reason);
			}
			else{//因为出错产生的失败
			
				cancel = null;//正确写法！！！！！！！！！！！！！！！！
				
				console.log(reason);
			}
		}
	)
}
function run2(){
	if(cancel){
		cancel("强制取消");
	}
	axios({
		url:"http://localhost:3000/posts",
		method:"GET",
		cancelToken:new axios.CancelToken(function executor(c){
			cancel = c;
		})
	})
	.then(
		value =>{
			cancel = null;
			console.log(value);
		},
		reason => {
			cancel = null;
			console.log(reason);
		}
	)
}
```

***源代码（有拦截器版）***
```js
 let cancel;
 // 添加请求拦截器
 axios.interceptors.request.use((config) => {
    if (cancel) {
 	   cancel("强制取消");
    }
    config.cancelToken = new axios.CancelToken(function executor() {
 	   cancel = c;
    });
    return config;
 });
 // 添加响应拦截器
 axios.interceptors.response.use(
    (response) => {
 	   cancel = null;
 	   return response;
    },
    (reason) => {
 	   if (axios.isCancel(reason)) {
 		   //因为取消引起的失败
 		   console.log(reason.message);
 		   return new Promise(()=>{}) //中断Promise链：返回一个永远为pending状态的promise
 	   } else {
 		   //因为出错产生的失败
 		   cancel = null;
	 	   throw reason; //不能return!!!!!
 	   }
    }
 );

 function run1() {
    axios({
 	   url: "http://localhost:3000/posts",
 	   method: "GET",
    }).then(
 	   (value) => {
 		   console.log(value);
 	   },
 	   (reason) => {
 		   console.log(reason.message);
 	   }
    );
 }
 function run2() {
    axios({
 	   url: "http://localhost:3000/posts",
 	   method: "GET",
    }).then(
 	   (value) => {
 		   console.log(value);
 	   },
 	   (reason) => {
 		   console.log(reason);
 	   }
    );
 }
```

---

#### axios与Axios的关系

1. 从语法上来说：axios不是Axios的实例
2. 从功能上来说：axios是Axios的实例
3. axios是Axios.prototype.request函数bind()返回的函数
4. axios作为对象，有Axios原型对象上的所有方法, 有Axios对象上所有属性


***相同***
1.	都是一个能发任意请求的函数: request(config)
2.	都有默认配置和拦截器的属性: defaults/interceptors
3.	都有发特定请求的各种方法: get()/post()/put()/delete()

***不同***
1.	默认匹配的值很可能不一样
2.	instance没有axios后面添加的一些方法: create()/CancelToken()/all()
3.	

#### axios运行的整体流程图
```ad-hint
详细细节去尚硅谷word文档里查看
```

![[img/axios_img/Drawing 2022-04-05 16.06.25.excalidraw|600]]

#### axios二次封装

```ad-quote
在项目当中，经常有一个叫api文件夹，用于放置axios的二次封装
```

二次封装通常在请求拦截器和响应拦截器中编写一些业务逻辑

---


#### 接口的统一管理

***什么时候需要进行统一管理***

* 项目很小：完全可以在组件的声明周期中发送请求
* 项目很大：进行统一管理
	* 作用：方便后期修改的处理
