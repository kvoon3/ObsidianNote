# API的分类
1. REST API（restful）
	1. 由发送请求的方式决定CRUD
	2. 请求方式会用到：GET/POST/PUT/DELETE
2. 非REST API（restless）
	1. 不由发送请求的方式决定CRUD，由请求路径决定
		1. 如：`http://localhost:8080/getname`,`http://localhost:8080/updatename`
	2. 请求方式只用：GET/POST
3. 测试工具：==json-server==快速搭建模拟的rest api接口