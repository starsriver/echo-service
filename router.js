const Router = require('koa-router');
const router = new Router();

router.post('/echo',async (ctx, next) => {
    const body = ctx.request.body;
    ctx.response.body = JSON.stringify({
        userID: 333333,
        content: `echo: ${body.content}`,
        date: Date.now()
    });
    console.log(ctx.request.url)
    ctx.status = 200;
    await next();
});


module.exports = {
    router
}
