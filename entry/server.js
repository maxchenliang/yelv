import path from 'path'
import Koa from 'koa'
import render from 'koa-ejs'
import staticServer from 'koa-static'
import gzip from 'koa-gzip'
import bodyParser from 'koa-bodyparser'
import router from '../routers'
import configs from '../configs'

const app = new Koa()
app.use(gzip())
app.use(staticServer(path.resolve(__dirname, '../static'), {
  maxage: 60 * 60 * 24 * 30 * 12,
  gzip: true,
}))

render(app, {
  root: __dirname,
  viewExt: 'html',
  cache: false,
  layout: false,
})

app.use(bodyParser())

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(configs.PORT, () => {
  console.log(`server is listening at ${configs.PORT}`)
})
