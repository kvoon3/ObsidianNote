单播转换成多播

cold Observable --> warm Observable，即==只要至少有一个订阅者，这个 Observable 就会被订阅并发送数据==

如果共享 observable 的订阅者计数降至 0，或者源 Observable 已出错或完成，则会重置对底层源 Observable 的订阅（退订并为新的订阅者重新订阅）。

有些時候我們會先設計好一個 Cold Observable，但又不希望每次訂閱時都要重新來過 (例如 HTTP 請求、WebSocket 等)，就很適合把 unicast 轉成 multicast 類型的 Observable！