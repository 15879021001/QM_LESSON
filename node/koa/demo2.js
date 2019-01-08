const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')
const app = new Koa()
const router = new Router()

router
  .get('/', (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
  })
  .get('/about', (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Return to Home</a>'
  })
  .get('/jpg', (ctx) => {
    ctx.response.type = 'jpg'
    ctx.response.body = fs.createReadStream('./1.jpg')
  })

app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)