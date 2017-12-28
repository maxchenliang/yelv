import Router from 'koa-router'
import views from './server-views'
import user from './user'

const router = new Router()

router.use(user.routes(), user.allowedMethods())
router.use(views.routes(), views.allowedMethods())

export default router
