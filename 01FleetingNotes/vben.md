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

> 当我们在执行 `yarn build` 构建项目后，会根据 `VITE_GLOB_*` 自动生成 `_app.config.js` 文件(`/dist/_app.config.js_`)，将其插入到 `index.html`

![[img/Pasted image 20221024111723.png]]

dist 目录下的 `_app.config.js`

```js
window.__PRODUCTION__VUE_VBEN_ADMIN__CONF__ = {
  VITE_GLOB_APP_TITLE: 'vben admin',
  VITE_GLOB_APP_SHORT_NAME: 'vue_vben_admin',
  VITE_GLOB_API_URL: '/app',
  VITE_GLOB_API_URL_PREFIX: '/',
  VITE_GLOB_UPLOAD_URL: '/upload',
};
```

### 作用

`_app.config.js` 可以用于在项目打包后根据需求动态修改配置，而不用重新进行打包

### 新增

[如何新增-新增一个可动态修改的配置项](https://vvbin.cn/doc-next/guide/settings.html#%E5%A6%82%E4%BD%95%E6%96%B0%E5%A2%9E-%E6%96%B0%E5%A2%9E%E4%B8%80%E4%B8%AA%E5%8F%AF%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9)
1. 在对应的配置文件中，新增需要可动态配置的变量，需要以 `VITE_GLOB_` 开头
2. `VITE_GLOB_` 会被自动加入环境变量，但是需要我们手动加入类型，通过在 `src/types/config.d.ts` 内修改 `GlobEnvConfig` 和 `GlobConfig` 两个环境变量的值来定义新添加的类型
3. 在 `useGlobSetting` 函数中增加新增的返回值即可

## 项目配置

包括的范围：各种效果

- 展示的内容
- 布局
- 文本

存储：存于 `localStorage` 中，如果更改了项目配置，需要手动清空 `localStorage` 缓存，**刷新重新登录后方可生效**

配置文件路径：`src/settings/projectSetting.ts`

## 缓存配置

在 `/@/setting/encryptionSetting.ts` 内可以配置 `localStorage` 和 `sessionStorage` 缓存信息


> [!attention] 前提
> 使用项目的缓存工具类 `/@/utils/cache` 进行缓存操作

## 样式配置

### css 前缀配置

用于修改项目中组件 class 的统一前缀

- 在 `src/settings/designSetting.ts` 中配置

```ts
export const prefixCls = "vben";
```

- 在 `src/design/var/index.less` 配置 css 前缀

```less
@namespace:vben
```

#### 使用

- [ ⏫ ] TODO

在 css 内


# 路由

`src/router/routes` 项目路由配置

`src/router/routes/modules` 用于存放路由模块，该目录下的文件会自动注册

## 配置

### 模块说明

所有存放在 `src/router/routes/modules` 的 ts 文件会被视为一个路由模块

### 多级路由


> [!attention] 注意事项
> - 整个项目所有路由的 name 不能重复
> - 所有路由都会转成二级路由，所以不能内嵌子路由
> - 除了一级路由对应的 path 前需要加上 `/` ，其余子路由都不要以 `/` 开头


## 多标签页

标签页使用的是 `keep-alive` 和 `router-view` 实现，实现切换 tab 后还能保存切换之前的状态

### 开启页面缓存

开启缓存的三个前提条件

1. 在 `src/settings/projectSetting.ts` 内将 `openKeepAlive` 设置为 true (什么是[[keep-alive]])
2. 路由设置 `name` 且不能重复
3. 路由 `name` < -- > 组件 `name` 两者保持一致
	1. > [!attention] 注意
	2. > 因为 include - 只会匹配对应 name 的组件

### 配置单页不缓存

**可在 router.meta 下配置**

可以将 `ignoreKeepAlive` 配置成 `true` 即可关闭缓存。

```ts
export interface RouteMeta {
  // 是否忽略KeepAlive缓存
  ignoreKeepAlive?: boolean;
}
```

### 首页路由

**定义**

- 程序中的默认路由，所有未匹配到的路由，会自动重定向到该路由下

**修改**

```ts
export enum PageEnum {
	BASE_HOME = "/dashboard"
}
```

# 菜单

# 权限

## 前端角色权限

实现原理：

1. 写死路由权限
2. 初始化通用的路由
3. 用户登录（用户权限更改）
4. 获取角色路由表
5. 通过 `router.addRoutes` 添加到路由实例
6. 最终实现权限的过滤

# mock和联调


## 开发环境

### 配置

`.env.development` 文件配置

#### 存在跨域

```shell
# vite 本地跨域代理
VITE_PROXY = [["/v1", "http://localhost:3000"]] # 不要换行
# 接口地址
VITE_GLOB_API_URL=/api #.env 文件下不写 "" 默认也为字符串
```

#### 未跨域

```shell
# 如果接口地址为 http://localhost:3000
VITE_GLOB_API_URL=http://localhost:3000
```

## 生产环境

生产地址需要修改接口地址 -> 直接修改 \_app.config.js 文件的 `VITE_GLOB_API_URL`

出现跨域问题：使用 nginx 或者 后台开启 cors 跨域

## 接口请求

接口统一存放在 `src/api` 下面管理

以登录接口为例：

```ts
import { defHttp } from "/@/utils/http/axios";
import type { LoginParams, LoginResultModel} from "./model/userModel";

enum Api {
	Login = "/login";
}

export function loginApi(params: LoginParams) {
	return defHttp.request<LoginResultModel>({
		url:Api.Login,
		method:"POST",
		params
	})
}
```

## axios 配置

axios 请求封装在 `src/utils/http/axios` 文件夹中

除了 `index.ts` 文件内容需要自行修改外，其余文件不需要修改

- `Axios.ts` axios 实例
- `axiosCancel.ts` axiosCancel 实例，用于取消重复请求
- `axiosTransform.ts` 数据转换类
-  `ckeckStatus.ts` 返回状态值校验
- `index.ts` 接口返回统一处理

**transform 数据处理说明**

[详细信息](https://vvbin.cn/doc-next/guide/mock.html#index-ts-%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)

```ts
// axiosTransform.ts
export default class AxiosTransform {
	// 请求之前处理配置
	// 请求成功处理
	// 请求失败处理
	// 请求拦截器
	// 响应拦截器
	// 请求拦截器错误处理
	// 响应拦截器错误处理	
}
```