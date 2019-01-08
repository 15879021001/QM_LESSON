const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

const main = ctx => {
  // ctx.response.body = 'Hello World'
  // ctx.response.type = 'html'
  // ctx.response.body = fs.createReadStream('./template.html')
  //---------------------------------------------
//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html'
//     ctx.response.body = '<a href="/">Index Page</a>'
//   } else {
//     ctx.response.body = 'Hello World'
//   }


}

app.use(main)
app.listen(3000)