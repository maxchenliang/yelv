import path from 'path'
import Koa from 'koa'
import render from 'koa-ejs'
import staticServer from 'koa-static'
import gzip from 'koa-gzip'
import logger from '@didi/am-logger'
import hessian from 'hessian.js'
import java from 'js-to-java'
import bodyParser from 'koa-bodyparser'
import router from '../routers'
import configs from '../configs'

// 初始化logger的配置
logger.init({
  basePath: configs.LOG_PATH,
  // 当发生error及以上级别的信息时，发送邮件
  callback: (msg) => {
    console.log('fuck, error happened', msg)
  },
})


const obj = {
  a: 1,
  b: 'fuck',
  c: java.long(9223372036854775807),
}

const a = hessian.encode(obj)

logger.info(a)
logger.info(hessian.decode(a))

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
