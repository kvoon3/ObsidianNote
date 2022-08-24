## 原型模式

>通过 克隆 基于现有对象的模板创建对象的模式



## 克隆羊问题

### 传统方式解决克隆羊问题

```ts
//传统方法

let sheep:Sheep = new Sheep("sam","white");

//克隆羊
let sheep2:Sheep = new Sheep(sheep.getName(),sheep.getColor());

//克隆羊
let sheep3:Sheep = new Sheep(sheep.getName(),sheep.getColor());
```

#### 优缺点

***优点*** 

比较好理解，简单容易操作

***缺点***

1. 创建新对象的时候总是需要获取原始对象的属性(如果对象复杂，效率较低
2. 总是需要重新初始化对象，而不是动态获取对象运行时状态，不够灵活

改进思路

