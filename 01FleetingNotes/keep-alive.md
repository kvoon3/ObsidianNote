## 定义

> `<KeepAlive>` 是一个内置组件，它的功能是在多个组件间动态切换时缓存被切换的组件实例

`keep-alive` 是 vue 中的内置组件，能够在组件切换过程中将状态保留在内存中，防止重复渲染 DOM，

## 使用

```vue
<KeepAlive>
	<component :is="activeComponent"/>
</KeepAlive>
```

## 包含/排除

`KeepAlive` 默认会缓存所有的组件实例，但是我们可以通过

- `include`
- `exclude`

来定制该行为。

**格式**

1. 字符串

```vue
<KeepAlive include="a,b">
	<component :is="view"/>
</KeepAlive>
```

2. 数组

```vue
<KeepAlive include="['a','b']">
	<component :is="view"/>
</KeepAlive>
```

3. 正则表达式

```vue
<KeepAlive include="/a|b/">
	<component :is="view"/>
</KeepAlive>
```

## 最大缓存实例数

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。`<KeepAlive>` 的行为在指定了 `max` 后类似一个 [LRU 缓存](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU))：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

```vue
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

## 缓存实例的声明周期

由于组件被缓存而不是被移除，组件的生命周期如下：

- `onMounted` -> `onUnMounted` (x)
- `onActivated` -> `onDeactivated`


> [!attention] 注意
> -   `onActivated` 在组件挂载时也会调用，并且 `onDeactivated` 在组件卸载时也会调用。 
> - 这两个钩子不仅适用于 `<KeepAlive>` 缓存的根组件，也适用于缓存树中的后代组件。
