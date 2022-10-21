在小程序中, 事件处理函数 和 组件方法 都放在 methods 中 ( 与 vue 一致 )

## 命名规范

自定义方法, 因为是组件私有方法, 故添加下划线

```ts
Component({
	data:{
		num:1
	},
	methods:{
		// 事件处理函数
		tapForAdd():void{
			this.setData({
				num: this.data.num + 1;
			})
			_show(this.data.num);
		},
		// 自定义方法:因为是组件私有方法,故添加下划线
		_show(num:number):void{
			wx.showToast({
				title:"修改num成功"
				icon:none
			})
		}
	}
})
```


