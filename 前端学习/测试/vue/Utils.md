## test utils

对常用的操作进行提取，存放到 utils 文件夹中

### 查找测试目标 DOM

#### find

```ts
import type {VueWrapper} from "@vue/test-utils"

export function findTestWrapper(wrapper:VueWrapper<any>, tag:string){
  return wrapper.find(`[data-test='${tag}']`)
}
```

#### findAll

> 返回一个数组

```ts
import type {VueWrapper} from "@vue/test-utils"

export function findAllTestWrapper(wrapper:VueWrapper<any>, tag:string){
  return wrapper.findAll(`[data-test='${tag}']`)
}
```