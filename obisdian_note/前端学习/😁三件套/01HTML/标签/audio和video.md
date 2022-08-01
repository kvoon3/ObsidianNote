## audio

\<audio\> 元素用于在文档中嵌入音频内容。

特点
1. 可以包含一个或多个音频资源，这些音频可以使用 src 属性或者 \<source\> 元素进行描述


## video

代码示例

```html
<video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm">

    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
```