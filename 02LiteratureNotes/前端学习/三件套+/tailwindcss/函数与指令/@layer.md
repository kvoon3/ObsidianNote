> 使用 `@layer` 指令告诉 tailwind 一组自定义样式应该属于哪个 'bucket' 。

可用的 layer 有

1. `base`
2. `components`
3. `utilities`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base{
	h1 {
		@apply text-2xl;
	}
	h2 {
		@apply text-xl;
	}
}
```

