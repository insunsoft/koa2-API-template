import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/public/testUser', controllers.user.findOneUser) // 测试取得数据库数据
  .get('/public/findOne', controllers.user.findOneById) // 测试取得数据库数据
  .get('/public/get', function (ctx, next) {
    ctx.body = '欢迎~~！'
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)
  .post('/auth/:action', controllers.auth.Post)

module.exports = router
