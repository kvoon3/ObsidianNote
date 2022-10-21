# 异步action

由于redux的store默认只承认普通对象action（`{type:xxx, data:xxx}`），要让store可以使用异步action（为一个函数，在函数中启动异步任务）

## 开启异步action

添加中间件 ***redux-thunk***

`yarn add redux-thunk，并配置在 store 中`

```jsx
/* store.js */

import {
  legacy_createStore as createStore,//用于创建store
  applyMiddleware//用于应用中间件
} from 'redux'

//引入reducer
import countReducer from './count_reducer'

//引入redux-thunk, 用于支持异步action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk));

```

## 使用异步 action

```jsx

//异步action, action的值为 函数
export const genIncrementAsyncAction = (data, time) => {
  //返回一个函数, **在函数中开启一个异步任务**
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(genIncrementAction(data));
    }, time)
  }
}

```