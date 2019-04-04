const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const {router} = require('./router');
app.use(bodyparser());
app.use(router.routes());

app.listen(9000);

console.log("echo server is running in localhost:9000.");

process.addListener('exit', () => {
    console.log('echo server is exited.');
});