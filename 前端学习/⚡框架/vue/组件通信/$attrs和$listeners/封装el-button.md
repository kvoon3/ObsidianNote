使用到的属性：
1. `vm.$attrs`
2. `vm.$listeners`

属性作用

***$attrs***

捞到父组件传递来的title，利用a标签hover时会显示提示，为按钮设置hover提示

***$listeners***

使用父组件传递过来的**自定义函数**， 因为父组件只能传递自定义函数过来，并不能直接给子组件绑定事件（除非：[[../事件/原生事件与自定义事件#组件|.native]]

```html
<template>
  <a href="###" :title="$attrs.title">
    <el-button @click="$listeners.func">click me</el-button>
  </a>
</template>

<script>
export default {
    name:"",
    methods:{
        run(){
            console.log(this.$attrs, this.$listeners);
        }
    }
}
</script>
```

效果

![[../../img/2022-05-06_134822.png]]