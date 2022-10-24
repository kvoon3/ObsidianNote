## Resource 资源

### 修改配置

```js
// 配置 png 文件
module.exports = {
	module:{
		rules:[{
			test:/\.png$/,
			type:"asset/resource"
		}]
	}
}
```

### 应用 ( png 文件)

```js
// 引用 png 文件
import imgSrc = "./assets/bg.png";
const img = document.createElement('img');
img.src = imgSrc;
document.body.appendChild(img);
```

```js
// 引用 png 文件
import imgSrc = "./assets/bg.png";
const img = document.createElement("img");
img.src = imgSrc;
document.body.appendCild(img);
```

