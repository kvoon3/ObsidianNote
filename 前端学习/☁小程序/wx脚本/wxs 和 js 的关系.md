## wxs 和 js 的关系

wxs 虽然语法类似于 js，但两者是完全不同的两种语言：

***wxs 有自己的数据类型***

- number/string/boolean/obect/function/array/date / regexp 正则

***不支持 ES6 语法***

- ❌不支持：let / const / 解构赋值 / 展开运算符 / 箭头函数 / 对象属性简写 etc....

- ☑️支持：var / 普通函数 function

***支持 commonjs 规范 ***

model 对象 require() 函数 model.exports 对象