```html
<!-- 语音气泡 -->
<view class="sound-wave-bubble">
	<!-- 时长 -->
	<view class="duration-time">
		<text>{{recordingDuration ? recordingDuration : "00:00"}}</text>
	</view>
	<!-- 音浪 list -->
	<view class="sound-wave">
		<!-- 音浪 item -->
		<view class="bar" wx:for="{{soundWaveDurations}}" wx:for-item="duration" style="animation-duration:{{duration}}s"></view>
	</view>
</view>
```

```scss
// 语音气泡
.sound-wave-bubble{
	// 基本盒子属性
	width:200px;
	height:70px;
	padding:10px;
	border-radius: 14px;
	background-color:$primary-background-color;
	// 竖向排列 居中
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	// 固定定位
	position:fixed;
	bottom:300px;
	.duration-time{
		text {
			color:$primary-icon-color;
		}
	}
	// 音浪组
	.sound-wave{
		display: flex;
		align-items: center;
		justify-content: center;
		height:34px; // 等于 bar 的 large 尺寸的高度
		&::after{
			position: absolute;;
			bottom: -20px;
			content:"";
			display:inline-block;
			border:10px solid transparent;
			border-top-color:$primary-background-color;
		}
		// 音浪 item
		.bar{
			display:inline-block;
			width:3px;
			height:5px;
			border-radius: 5px;
			background-color: $primary-icon-color;
			margin:0 1.5px;
			// 动画相关
			animation-name:wave-lg;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
			animation-direction: alternate;
			&:nth-child(-n + 7),
			&:nth-last-child(-n + 7){
				animation-name:wave-md;
			}
			&:nth-child(-n + 3),
			&:nth-last-child(-n + 3){
				animation-name:wave-sm;
			}
			@keyframes wave-sm {
				0% {
					opacity: 0.35;
					height: 5px;
				}
				100% {
					opacity: 1;
					height: 12px;
				}
			}
			@keyframes wave-md {
				0% {
					opacity: 0.35;
					height: 8px;
				}
				100% {
					opacity: 1;
					height: 25px;
				}
			}
			@keyframes wave-lg {
				0% {
					opacity: 0.35;
					height: 15px;
				}
				100% {
					opacity: 1;
					height: 34px;
				}
			}
		}
	}
}
```