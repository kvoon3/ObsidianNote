# 解析search/query参数

在 React 中引入使用  **querystring**

```jsx
import qs from "querystring"

let obj = {a:1, b:2}
// 对象 ---->  urlencode 
let obj1 = qs.stringify(obj);//a=1&b=2
//urlencode  -----> 对象
let obj2 = qs.stringify(obj1);
```