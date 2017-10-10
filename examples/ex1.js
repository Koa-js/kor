const Koa = require('../index.js')

const app = new Koa()

app.get('/get', (ctx, next) => {
  ctx.body = 'get'
})

app.post('/post', (ctx, next) => {
  ctx.body = 'post'
})

app.all('/ok', (ctx, next) => {
  ctx.body = 'ok'
})

app.all((ctx, next) => {
  ctx.body = 'all';
})

app.listen(8088)