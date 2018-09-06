//应用配置文件
const path = require('path');
const config = {
    //默认生产环境
    "env":"production",
    //端口号配置
    "port": 3000,
    //requestUrl
    "url": 'http://192.168.0.124:8080',
    //模板所在的目录
    "viewDir": path.join(__dirname,'..','view'),
    //静态资源所在的目录
    "staticDir": path.join(__dirname,'..', 'static')
};



module.exports = config;