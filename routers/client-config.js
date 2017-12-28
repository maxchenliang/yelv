/**
 * @module clientRouter
 * @author maxchenliang
 * @description 视图路由配置，用于前、后端视图路由
 */
import {
  Root,
  Home,
  Test,
  NotFount,
} from '../views'

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/test',
        component: Test,
      },
      {
        path: '*',
        component: NotFount,
      },
    ],
  },
]
