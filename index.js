'use strict';

const Koa = require('koa');
const method = {
  get: 'GET',
  post: 'POST',
}

const arr = ['get', 'post'];

for (let key of arr) {
  if (!Koa.prototype.hasOwnProperty(key)) {

    Koa.prototype[key] = function (...args) {
      let path;
      let fn;
      if (args.length > 1) {
        path = args[0];
        fn = args[1];
      } else {
        fn = args[0];
      }

      // 1. 异常检测
      if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');

      // 2. encapsulate fn in use.
      if (typeof path !== 'string') {
        // fn 可以直接Return, 因为compse内dispatch内是 Promise.resolve(fn())
        this.use((ctx, next) => {
          if (ctx.method === method[key]) {
            return fn(ctx, next);
          }
          return next();
        });
        return;
      }

      this.use((ctx, next) => {
        if (ctx.path.startsWith(path) && ctx.method === method[key]) {
          return fn(ctx, next);
        }
        return next();
      })


    }
  }
}


module.exports = Koa