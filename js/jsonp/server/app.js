const Koa = require('koa')
const app = new Koa()  //后端应用
const router = require('koa-router')()

// 前端是MVVM 后端是MVC

router.get('/api', (ctx) => {
  const data = {
    name: 'tk',
    age: 11
  }
  ctx.body = JSON.stringify(data)
})
app.use(router.routes())
app.listen(3000)