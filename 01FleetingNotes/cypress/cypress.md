组件测试

安装插件

```shell
npm i @cypress/vue@next @cypress/vit-dev-server
```

`cypress.config.ts`

```ts
import { defineConfig } from 'cypress'
export default defineConfig({
	e2e: {
		specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
	},
	component: {
    specPattern: 'src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
```