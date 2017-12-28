import React from 'react'
import {
  renderToString,
} from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import {
  renderRoutes,
  matchRoutes,
} from 'react-router-config'
import Router from 'koa-router'
import {
  createStore,
  applyMiddleware,
} from 'redux'
import {
  Provider,
} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import routes from './client-config'

const router = new Router()
const store = createStore(reducers, applyMiddleware(thunk))

router.get('*', async (ctx) => {
  const branch = matchRoutes(routes, ctx.url)
  const promises = branch.map(({ route }) => {
    const {
      fetchData,
    } = route.component
    return fetchData instanceof Function ? fetchData(store) : null
  }).filter(cur => !!cur)
  await Promise.all(promises).then(() => {
    const context = {}
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={ctx.url} context={context} >
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    ))
    return ctx.render('index', {
      content,
      __INITIAL_STATE__: store.getState(),
    })
  })
})

export default router
