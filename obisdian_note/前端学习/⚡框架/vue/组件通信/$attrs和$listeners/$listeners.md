# $listeners

### [vm.$listeners](https://cn.vuejs.org/v2/api/#vm-listeners "vm.$listeners")

-   **类型**：`{ [key: string]: Function | Array<Function> }`
    
-   **只读**
    
-   **详细**：
    
    包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件——在创建更高层次的组件时非常有用。