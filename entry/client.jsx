import React from 'react'
import {
  hydrate,
} from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import {
  renderRoutes,
} from 'react-router-config'
import {
  createStore,
  applyMiddleware,
} from 'redux'
import {
  Provider,
} from 'react-redux'
import thunk from 'redux-thunk'
import routes from '../routers/client-config'
import reducers from '../reducers'

const store = createStore(
  reducers,
  window.__INITIAL_STATE__, // eslint-disable-line
  applyMiddleware(thunk),
)

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
)

hydrate(<AppRouter />, document.querySelector('#app'))
