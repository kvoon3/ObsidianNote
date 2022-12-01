> this 本质上就是指向它的调用者，this 是在函数运行时才绑定，JS 中普通函数都是 window 调用的，开启了严格模式之后是 `undefined`

> [!NOTE] JSX - Vue - vanilla 绑定事件区别
> Vue：==字符串变量==
> vanilla：==回调函数==
> JSX：传递的事件不是一个字符串，而是一个==函数==，此时 `onClick` 即是中间变量，**最终是由 React 调用了该函数，因为开启了严格模式的缘故，this 是 undefined，所以处理函数中的 this 指向会丢失**

## 处理方法

1. [[处理方法/bind]]
2. [[处理方法/箭头函数]]