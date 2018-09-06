const {request} = require("../utils/request");
const config = require('../config/config');

module.exports = {
    index: async (ctx, next) => {
        //这里可以写业务逻辑，例如查数据库或者请求API
        //数据以对象{title: ''}形式传给模板
        ctx.body = await ctx.render('index',{title:'首页'});
    },
    viewer: async (ctx, next) => {
        // let res;
        // let tplData;
        // res = await request(config.url+'/apiUrl...');
        // tplData = JSON.parse(res.body);
        ctx.body = await ctx.render('viewer',{title:'Xtemplate',tplData: 'test'});

    }
}