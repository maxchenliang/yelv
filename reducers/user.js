import 'isomorphic-fetch'

const USER_LOADING = 'msg/user/loading'
const USER_LOAD_SUCCESS = 'msg/user/load/success'
const USER_LOAD_FAIL = 'msg/user/load/fail'

const initialState = {
  id: '',
  name: '',
  loading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case USER_LOADING:
    return {
      ...state,
      loading: true,
    }
  case USER_LOAD_SUCCESS:
    return {
      ...state,
      ...action.data,
      loading: false,
    }
  case USER_LOAD_FAIL:
    return {
      ...state,
      loading: false,
    }
  default:
    return state
  }
}

export const fetchUser = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  })
  return fetch('http://localhost:3456/api/user').then((res) => {
    if (res && res.code === 0) {
      dispatch({
        type: USER_LOAD_SUCCESS,
        data: res.data,
      })
    } else {
      dispatch({
        type: USER_LOAD_FAIL,
      })
    }
    return res
  }).catch(() => {
    dispatch({
      type: USER_LOAD_FAIL,
    })
  })
}

export const fetchUserIfNeed = () => (dispatch, getState) => {
  const state = getState()
  const {
    user,
  } = state
  if (user && user.id) {
    return Promise.resolve()
  }
  return dispatch(fetchUser())
}
