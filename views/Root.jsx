// @flow

import React, {
  Component,
  type ChildrenArray,
  type Element,
} from 'react'
import {
  renderRoutes,
} from 'react-router-config'
import {
  NavLink,
} from 'react-router-dom'

declare type Props = {
  children: ChildrenArray<Element<*>>,
  route: Object,
}
declare type State = {}

export default class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  render() {
    const {
      route,
    } = this.props
    // console.log(children, 'children')
    return (
      <div>
        <NavLink to="/">根页面</NavLink>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/xxx">不存在</NavLink>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}
