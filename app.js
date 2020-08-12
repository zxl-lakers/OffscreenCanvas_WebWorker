const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

app.use(serve(__dirname))

const fs = require('fs');

app.use(async (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = fs.createReadStream('./OffscreenCanvas.html');
});

app.listen(8000);