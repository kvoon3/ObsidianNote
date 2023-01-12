# App.vue

```ts
if (!isWeixinUserAgent()) {finalRedirect = true; return}

const href = window.location.href;
const queries = getUrlQueries(href);
console.log(`href: ${href}  queries: ${queries}  route.query: ${this.$route.query}`);

if (queries == null && href.indexOf('/?code') !== -1 && href.indexOf('state') !== -1) {
	const baseParts = href.split('/?');
	const baseUrl = baseParts[0] + "/#/";
	finalRedirect = false;
	window.location.href = baseUrl + '?' + baseParts[1].split('#/')[0];
	return
}

let state = ""
const redirectUrl = encodeURIComponent(`${import.meta.env.VITE_BASE_PROTOCOL}://${import.meta.env.VITE_BASE_HOST}/#/`);

if (queries == null) {
	state = "session";
}
else if (queries.length) {
	let fromIndex = -1;
	fromIndex = queries.findIndex(value => value[0] === 'from');

	if (fromIndex !== -1) {
		state = queries[fromIndex][1];
	}else {
		finalRedirect = true;
		return;
	}
}

const stores = weila_stores();

if (state !== "") {
	window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${stores.appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
}
```