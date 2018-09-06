const controller = require('../controller/index');
const Router = require('koa-router');
const router = new Router();
//router config
router
    .get('/',controller.index)
    .get('/viewer',controller.viewer)



module.exports = router;