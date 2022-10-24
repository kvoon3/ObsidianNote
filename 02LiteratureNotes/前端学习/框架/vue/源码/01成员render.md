```js
<div id="root">
    <p>{{name}}</p>
 </div>
 <script src="../vue.js"></script>
 <script>
    new Vue({
 	   el:"#root",
 	   data(){
 		   return {
 			   name:"kwongliegaai"
 		   }
 	   },
 	   render:(createElement)=>{
 		   // 自定义如何生成虚拟DOM
 		   //createElement：一个辅助创建虚拟DOM的工具函数。在vue.js中叫h函数
 		   //Vue.js会根据组件的render函数的返回值
 		   //h函数的返回值就是一个对象，其作用是让我们编写虚拟DOM变得更加轻松。
 		   return createElement("h1", {onClick:handler});

 		   // 如果不使用h函数，直接写h函数返回的对象
 		   /*
 		   return {
 			   tag:"h1",
 			   props:{onClick:handler}
 		   }
 			*/

 	   }
    });
 </script>
```