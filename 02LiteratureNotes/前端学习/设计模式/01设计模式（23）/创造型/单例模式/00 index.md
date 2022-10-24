单例模式的八种写法

1. <span style="color:red">饿汉式（静态常量）</span>
2. <span style="color:red">饿汉式（静态代码块）</span>
3. 懒汉式（线程不安全）
4. 懒汉式（线程安全，同步方法）
5. 懒汉式（线程安全，同步代码块）
6. <span style="color:red">双重检查</span>
7. 静态内部类
8. 枚举

## 单例模式

> 一个类只有一个实例，并提供一个访问它的全局访问点


TypeScript 写法

思路：

1. 将实例（未初始化）作为静态属性，放在类里
2. 提供静态方法用于创建实例（初始化实例）
3. 禁止用户使用 new 创建实例 <span class="note">禁止在外部使用 constructor 构造函数，将构造函数设置为私有的 private</span>

```ts
class Store{
  private state: Object;
  private static instance: Store;
  private constructor(){
    this.state = {};
  }
  //获取state状态机
  getState():Object{
    return this.state;
  }
  //设置state状态机
  setState(config:Object):boolean{
    try {
      // let newState = Object.assign(this.state, config);
      let newState = {...this.state, ...config};
      this.state = newState;
      return true;
    } catch (error) {
      return error;
    }
  }
  //静态方法：创建实例
  static getInstance(){
    if(!this.instance){//避免重复创建实例
      this.instance = new Store();
    }
    return this.instance;//返回实例
  }
}


//创建实例
let myInstance:Store = Store.getInstance(); //有效
//let myInstance:Store = new Store(); //无效

```


ES6 写法

思路：

1. 不将 `instance`  放在类中（静态属性），而是将其缓存在闭包中


```js
class Store{
    constructor(){
        this.state = {};
    }
    setState(config){
        this.state = {...this.state, ...config};
        return true;
    }
    getState(){
        return this.state;
    }
}

Store.getInstance = (function(){
    //制造一个闭包，缓存一个 instance，intance是唯一的
    let instance = null;
    return function(){
        if(!instance){
            instance = new Store();
        }
        return instance;
    }
})()

//创建实例
let myInstance = Store.getInstance();
//let myInstance = new Store(); //仍然有用
```

### 优点

- 划分命名空间，减少全局变量
- 增强模块性，把自己的代码组织在一个全局变量下，放在单一位置，便于维护
- 只会实例化一次，简化代码的调试和维护

### 缺点

<span class="todo">单例模式为什么会造成强耦合</span>

由于单例模式提供的是一种单点访问，所以它有可能导致模块间的强耦合 从而不利于单元测试。无法单独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一个单元一起测试。


### 应用场景

- 定义命名空间和实现分支方法
- 登录框
- vuex 和 redux 中的 store