## Component 构造器

```ts

const {myBehavior} = require("my-behavior");

Component({
	behaviors:[myBehavior],//相当于mixin,
	options:{
		pureDataPattern:/^_/
	},
	properties:[],
	data:{},//私有属性
	methods:{},
	lifeTimes:{},
	pageLifeTimes:{}
})
```