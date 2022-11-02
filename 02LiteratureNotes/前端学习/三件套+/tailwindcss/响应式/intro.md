tailwind 中的响应式设计

## 断点( breakpoints )

| sm       | md  | lg  | xl  | 2xl |
| -------- | --- | --- | --- | --- |

## 显示与隐藏

类似与 vue 的 v-show 同样是通过 hidden 控制

手段：`hidden` + `block/inline...`

例如，想要让一个块级组件在小屏隐藏大屏展示
```html
<Component class="hidden lg:block"/>
```

又如，想要让一个块级组件在小屏展示大屏隐藏

```html
<Component class="lg:hidden"/>
```

