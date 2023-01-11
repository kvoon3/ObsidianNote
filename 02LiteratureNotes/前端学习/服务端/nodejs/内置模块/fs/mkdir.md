---
form: nodejs 官网
url: http://nodejs.cn/api-v16/fs.html#fspromisesmkdirpath-options
---

# mkdir 创建文件夹

```js
const  { mkdir } = require('node:fs/promises');

mkdir('./tmp', { recursive: true }, (err) => {
	if(err) throw err;
})
```

```ts
```