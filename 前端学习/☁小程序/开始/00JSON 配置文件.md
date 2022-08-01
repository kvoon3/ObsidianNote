## app.json 文件

![[../img/Pasted image 20220801130213.png]]

## project.config.json 文件

项目的配置文件，用来记录我们<span style="color:red">对小程序开发工具所做的个性化配置</span>

- setting 中保存了编译相关的配置
- projectname 中保存的是项目名称
	- appid 中保存的是小程序的账号 ID




## sitemap.json 文件

微信现已开放==小程序内搜索==，类似于 PC 网页的 SEO。sitemap.json 文件用来 <span class="imp">配置小程序页面是否允许微信索引</span>

当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中。

注意：sitemap 的索引默认是开启的。

关闭 sitemap 的索引提示：在项目配置文件 `project.config.json` 的 `setting` 中配置字段 `checkSiteMap` 为 `false`

## 页面 .json 配置文件

页面中的配置项会覆盖 app.json 的 window 中相同的配置项。

---

## 操作

### 如何创建页面

只需要在 app.json -> pages 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件。

### 设置首页

调整 app.json -> pages 数组中页面路径的前后路径。小程序会把排在第一位的页面，当作项目首页进行渲染。