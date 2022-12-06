@params

1. `other: ObservableInput` 等待被链接的 Observable。可以接收多个
2. `scheduler:Scheduler`  '可选' 调度器，控制每个输入 Observable 的订阅

@return

- `Observable` ==顺序的，串行的==将所有输入 Observable 的值合并给输出 Observable

![[../../img/Pasted image 20221206104627.png]]

