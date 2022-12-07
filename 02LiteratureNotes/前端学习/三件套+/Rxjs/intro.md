# 起源

`axios` 的前身其实是 [AngularJS](https://link.juejin.cn?target=https%3A%2F%2Fangularjs.org%2F "https://angularjs.org/") 的 `$http` 服务。

> 为了避免混淆，这里需要澄清一下：`AngularJS` 并不等于 `Angular`，`AngularJS` 是特指 angular.js v1.x 版本，而 `Angular` 特指 angular v2+ （没有 .js）和其包含的一系列工具链。

这样说可能不太严谨，但 `axios` 深受 `AngularJS` 中提供的`$http` 服务的启发。归根结底，`axios` 是为了提供一个类似独立的服务，以便在 `AngularJS` 之外使用。

# 发展

但在 `Angular` 中，却没有继续沿用之前的 `$http` 服务，而是选择与 [rxjs](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FReactiveX%2Frxjs "https://github.com/ReactiveX/rxjs") 深度结合，设计出了一个比 `$http` 服务更先进的、现代化的，响应式的 HTTP 客户端。 在这个响应式的 HTTP Client 中，发送请求后接收到的不再是一个 `Promise` ，而是来自 `rxjs` 的 [Observable](https://link.juejin.cn?target=https%3A%2F%2Frxjs.tech%2Fapi%2Findex%2Fclass%2FObservable "https://rxjs.tech/api/index/class/Observable")，我们可以订阅它，从而侦听到请求的响应：

```ts
const observable = http.get('url');
observable.subscribe(o => console.log(o));
```

有关它的基本形态及详细用法，请参考[官方文档](https://link.juejin.cn?target=https%3A%2F%2Fangular.cn%2Fguide%2Fhttp "https://angular.cn/guide/http")。


作者：HyperLifelll9  
链接：https://juejin.cn/post/7079724273929027597  
来源：稀土掘金  