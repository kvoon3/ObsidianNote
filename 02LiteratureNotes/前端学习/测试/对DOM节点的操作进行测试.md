jest 在 node 环境下自己模拟了一套 dom 的 api ，jsDom

测试 jquery 对 DOM 的操作

```ts
//jq.ts
import $ from "jquery"

export function addDiv2Body(){
  $("body").append('<div/>')
}
```

```ts
import addDiv2Body from "./jq";
import $ from 'jquery'

test("测试jq函数", ()=>{
	// TODO: 此处 jest 报错
  addDiv2Body();
  addDiv2Body();
  expect($('body').find('div').length).toBe(2);
})
```