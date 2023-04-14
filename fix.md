
## helpResourceService

1. create
2. getAll
3. findOneById
4. updateStatus

## UserService

1. register
2. addHelpResource
3. getSelfProfile
4. getProfile

---

一、

TODO

> 我是组员 +  组织管理

+ [x] 本周推广人数
+ [x] 总推广人数

二、

> 订单列表（组员 组织）

- [x] 第一页前十条数据重复 ✅ 2023-04-13
- [x] 订单列表选择时间 -> 今天 昨天 ✅ 2023-04-13

三、

> 成员列表: 新的申请

- [x] id 显示 -> 微喇号 ✅ 2023-04-13


 const texts = [

    "这是一段文本",

    "这是一段文本",

  ];

  

  texts.forEach((text) => {

    const textCanvas = document.createElement("canvas");

    textCanvas.width = 270;

    textCanvas.height = 30;

    const ctx = textCanvas.getContext("2d");

    ctx.font = "14px Arial";

    ctx.fillStyle = "#000000";

    ctx.textAlign = "center";

    ctx.fillText(text, textCanvas.width / 2, textCanvas.height / 2);

    const qrcodeCanvas = document.getElementById("qrcodeCanvas");

    qrcodeCanvas.parentNode.insertBefore(textCanvas, qrcodeCanvas.nextSibling);

  });