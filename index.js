const Koa = require('koa')

const app = new Koa

const PORT = process.env.PORT || 3001

app.use(async ctx => {
  ctx.body = ctx.req.url
})

app.listen(PORT)