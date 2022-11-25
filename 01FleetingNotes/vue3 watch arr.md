在vue3中使用watch的时候需要注意的事项很多, 其中需要一项需要注意的是在监听数组的时候

假设在setup里面有这样的结构 

const state= reactive({
 
    arr: [1,2,3,4,5]
    
})
 
 watch(state.arr,(now,old)=>{
      console.log(now,old)
 })
当页面操作改变了arr时(不重新赋值, 使用push, splice等方法改变数组), 可以正常出发watch函数, 但是你会发现now和old输出的值是一样的, 这个还可以接收, 至少能触发watch函数, 但是你一旦重新给arr赋值了, 比如给arr数组清空了 test.arr = [] ; 那么你会发现监听失效了, 那么要怎么解决呢, 很简单 改成以下写法即可

watch(() => [...state.arr], (now, old) => {
    console.log(now, old)
})
如果是对象的话使用下面的写法,但是比较遗憾, 这里的now和old都是一样的值(改变单一属性的情况下)

const state= reactive({
 
    obj: {name:'name',age:18}
    
})
 
 
watch(
  () => state.obj,
  (now, old) => {
    console.log(now,old);
  },
  { deep: true }
);