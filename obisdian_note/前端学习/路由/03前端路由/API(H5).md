API  
- boolean history.push( path )  
- history.replace( path )  
- history.goForward()  
- history.goBack()


```js
//方法一：直接使用H5推出的history上的API
let history = History.createBrowserHistory()
//方法二：哈希值(锚点跳转)
let history = History.createHashHistory()

function push(path){
	history.push(path);
	return false;
}

function replace(path){
	history.replace(path);
}

function forward(){
	history.goForward();
}

function back(){
	history.goBack();
}

!!!!!!!important
history.listen((location)=>{
	console.log("路由路径发生变化了", location);
})
```