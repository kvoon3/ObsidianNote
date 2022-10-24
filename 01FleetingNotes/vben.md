# 项目配置

## 环境变量配置

位置：根目录下的

- `.env`
- `.env.local`
- `.env.[mode]`
- `.env.[mode].local`


> [!warning] 警告
> - 必须以 `VITE_` 开头才会被嵌入到客户端侧的包总
> 	- `console.log(import.meta.env.VITE_PROT)`
> - 以 `VITE_GLOB_*` 开头的变量，在打包的时候，会被加入 \_app.config.js (该文件将在生产环境插入到 `index.html` 中)


## 生产环境动态配置

> 当我们在执行 `yarn build` 构建项目后，会根据 `VITE_GLOB_*` 自动生成 `_app.config.js` 文件，将其插入到 `index.html`

![[img/Pasted image 20221024111723.png]]