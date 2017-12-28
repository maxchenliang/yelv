import * as development from './development'
import * as test from './test'
import * as production from './production'
import * as preview from './preview'

const config = {
  development: Object.assign({}, production, development), // 部分和线上一致，所以继承线上
  test: Object.assign({}, production, development, test),
  preview: Object.assign({}, production, preview),
  production,
}
const env = process.env.NODE_ENV || 'development'

export default config[env]
