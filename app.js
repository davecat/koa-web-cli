const Koa = require('koa');
const app = new Koa();

//配置文件
const config = require('./config/config');

//xtemplate模板引擎对koa2的适配
const xtpl = require('xtpl/lib/koa2');
//xtemplate模板渲染
xtpl(app,{
    //配置模板目录，指向工程的view目录
    views: config.viewDir
});



//静态资源目录
const static = require('koa-static');
const staticDir = config.staticDir;
app.use(static(staticDir));

//koa-router
const router = require('./router')
app
    .use(router.routes())
    .use(router.allowedMethods());




app.listen(config.port);
console.log('服务已经启动在 %s',config.port);

module.exports = app;


