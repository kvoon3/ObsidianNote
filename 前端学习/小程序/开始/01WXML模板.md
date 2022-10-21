### WXML和HTML 的区别

#### 标签名称不同

1. HTML（div，span，img，a）
2. WXML（view，text，image，navigator）

#### 属性节点不同

href

```html
<a href="#"></a>
```

url

```wxml
<navigator url="/pages/home/home"></navigator>
```


#### 提供了类似于 vue 中的模板语法

- 数据绑定
- 列表渲染
- 条件渲染