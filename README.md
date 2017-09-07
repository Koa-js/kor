# kor
wrap router for koa

### Install
```shell
npm install neat-kor
```

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