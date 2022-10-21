在 JS 中，undefined 是全局作用域的一个属性，它会赋值给那些声明但未被初始化的变量。 

null 是一个字面量（不是全局对象的一个属性），它可以被赋值给那些没有值的变量。


## void 0

由于 undefined 本身是一个作用域的属性，**是可以被重写掉的**

```js
const testUndefined = function () {
  const obj = {}
  const undefined = 'underscore'
  const window = {
    'undefined': '前端胖头鱼'
  }
  console.log(window) // {'undefined': '前端胖头鱼'}
  console.log(undefined) // underscore
  console.log(window.undefined) // 前端胖头鱼
  console.log(obj.name === undefined) // false
  console.log(obj.name === window.undefined) // false
  console.log(obj.name === (void 0)) // true
}

testUndefined()
```

所以直接使用 undefined 判断是有风险的。而 ==void 0无论何时何地，后面跟了什么，结果都得到undefined==

#### void 0的其他应用

***填充a标签的 href 属性***

- 旧做法

```html
<a href="#">xxxx</a>
```

存在的问题：页面会回到顶部

- void 0 写法

```html
<a href="javascript:void(0)">xxxx</a>
```
