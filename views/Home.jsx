// @flow

import React, {
  Component,
} from 'react'
import {
  bindActionCreators,
} from 'redux'
import {
  connect,
} from 'react-redux'
import {
  fetchUserIfNeed,
} from '../reducers/user'

declare type Props = {
  user: Object | null,
  fetchData: () => {}
}
declare type State = {}

class Home extends Component<Props, State> {
  static fetchData({ dispatch }) {
    // console.log(store, store.user, 'store')
    return dispatch(fetchUserIfNeed())
  }
  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.fetchData()
  }
  render() {
    const {
      user = {},
    } = this.props
    return (
      <div>
        Hello, {user && user.name}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchUserIfNeed())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
