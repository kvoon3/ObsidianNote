## 导入选项

在原生 css 的基础上，less 提供了若干导入拓展拓展

语法 `@import (关键字) "文件名"`

下列选项为 less 实现的选项

- `reference` 使用一个 less 文件但是不输出
- `inline` 输出引入源文件，不对源文件进行处理
- `less` 视为 less 文件，无论后缀是否是 .less
- `once` 只引入该文件一次**(默认)**
- `multiple` 引入该文件多次