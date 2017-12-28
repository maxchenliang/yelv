import Router from 'koa-router'

const router = new Router({
  prefix: '/api/user',
})


router.all('/', (ctx) => {
  console.log(ctx.request.body)
  console.log(ctx.request.rawBody)
  ctx.body = {
    code: 0,
    msg: 'OK',
    data: {
      id: 'maxchenliang',
      name: '陈亮',
    },
  }
})

router.get('/error', (ctx) => {
  ctx.status = 500
})

export default router
