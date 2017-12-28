import path from 'path'
import gulp from 'gulp'
import nodemon from 'gulp-nodemon'

const SERVER_DIRS = [
  'components',
  'configs',
  'constants',
  'controllers',
  'entry',
  'reducers',
  'routers',
  'services',
  'views',
]

const SERVER_FILES = SERVER_DIRS.map(cur => path.resolve(__dirname, `../../${cur}`))

gulp.task('watch', () => {
  nodemon({
    script: '../start-server.js',
    ext: 'js json jsx',
    env: {
      NODE_ENV: 'development',
    },
    watch: SERVER_FILES,
  })
})
