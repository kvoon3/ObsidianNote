打车页面：watch serviceStatus 的值

```ts
serviceStatus(newValue, oldValue) {
	if (!this.initCall) {
		if (this.serviceStatus !== WL_ServiceStatus.SERVICE_STATUS_PROCESSING) {
			this.callBtn = true;
		}else {
			const stores = weila_stores();
			stores.setInitCall(true);
			this.callBtn = false;
		}
	}
	this.calLayout();
},
```

改为如果 `this.serviceStatus == WL_ServiceStatus.SERVICE_STATUS_PROCESSING` 就跳转到  `sessionView.vue`