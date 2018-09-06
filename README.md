由于koa2的更新导致许多中间件的写法不再支持，以至于github上现有的一些模板库几乎不能用，用法还是一些koa1写法（koa官方给出的模板竟然也是各种警告，写法都是一些过时的语法，看那个库的作者似乎已经放弃维护...），koa2中已明确警告，在v3中将不再支持陈旧的用法。于是就产生了koa-web-cli,本模板是为了让大家快速构建一个koa web 渲染器，可以根据业务需求，随意增加中间件。当然欢迎pr,让这个模板更强大，并且我会持续更新，同步官方API，喜欢的同学可以star~
## 技术栈

koa:^2.5.2、koa-route:^7.4.0、koa-static: "^5.0.0"、xtemplate: "^4.6.1"、xtpl: "^3.4.0"...

本项目web渲染模板为Xtemplate,具体用法请参考Xtemplate文档。提供两个路由,'/'为koa示例，'/viewer'为Xtemplate渲染demo，

## Installation

```bash
npm install or cnpm i
```

```bash
npm start
```
