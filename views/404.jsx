import React from 'react'
import { Route } from 'react-router-dom'

export default () => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404
      }
      return (
        <div>
          <h1>你妹的！着啥急！</h1>
        </div>
      )
    }}
  />
)
