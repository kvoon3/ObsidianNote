```sh
pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```sh
npx tailwindcss init -p
```

创建 `tailwindcss.config.js` ，`-p` 命令用于同时创建 `postcss.config.js` 配置文件

`package.json`
```json
{
	"build": "postcss tailwind.css -o dist/css/styles.css",
	"watch": "postcss tailwind.css -o dist/css/styles.css --watch"
}
```