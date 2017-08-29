# kor
wrap router for koa

### Hello kor
```js
const Koa = require('kor');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.get('/get', ctx => {
  ctx.body = 'Hello Koa';
});

app.post('/post', ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
```