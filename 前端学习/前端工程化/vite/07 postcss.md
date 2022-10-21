# postcss

[[../postcss/00 intro|关于postcss]]

vite 天生对 postcss 有非常良好的支持

### 配置

在 vite 中配置 postcss

在 css.postcss 中配置，一个内联的 postcss.config.js 的配置(格式同 `post.config.js`) ==优先级高于 postcss.config.js==

```ts
import type { UserConfig, ConfigEnv } from "vue"

export default ({command, mode}:ConfigEnv): UserConfig=>{
	return {
			optimizeDeps:{
				exclude: [], 
			},
			envPrefix:"ENV_",
			css:{ // 对 css 的行为进行配置
				postcss:{
					plugins:[]
				}
			}
	}
}
```

