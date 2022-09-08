## behaviors

### behaviors 的工作方式

> 类似于vue的 mixin

每一个 behaviors 都包含了一组 **属性/数据/方法/生命周期函数**，组件在引用behaviors 时，这些内容都会被合并到组件中去

导出 Behavior

```ts
module.exports = Behavior({
	data:{},
	methods:{}
})
```

引用 Behaviors

```ts
	const behaviorA = require("@/myBehavior/behaviorA.ts");

Component({
	behaviors:[behaviorA],
	//组件的其他节点......
})
```


###  behaviors 可用节点
- properties
- data
- methods
- behaviors
- created
- attached
- ready
- moved
- detached

### 命名冲突

***data***

- 对象：进行对象合并
- 非对象：
	- 优先级：`引用者 behavior` > `被引用的 behavior` 、 `靠后的 behavior` > `靠前的 behavior`


***生命周期*

不会覆盖，而是根据优先级一次调用

-   -   对于不同的生命周期函数之间，遵循组件生命周期函数的执行顺序；
    -   对于同种生命周期函数和同字段 observers ，遵循如下规则：
        -   `behavior` 优先于组件执行；
        -   `被引用的 behavior` 优先于 `引用者 behavior` 执行；
        -   `靠前的 behavior` 优先于 `靠后的 behavior` 执行；
    -   如果同一个 `behavior` 被一个组件多次引用，它定义的生命周期函数和 observers 不会重复执行。

**代码示例：**

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/CI5omDmT7khB "在开发者工具中预览效果")