/* eslint-disable */
require('babel-register')

module.exports = function config(env) {
  return require(`./webpack.config.${process.env.NODE_ENV}`)
}
