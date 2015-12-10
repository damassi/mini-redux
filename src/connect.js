import React, { Component, PropTypes } from 'react'

export default function connect(WrappedComponent, stateSlice) {
  return class ConnectDecorator extends Component {

    static contextTypes = {
      store: PropTypes.object.isRequired
    }

    render() {
      const {
        store: {
          dispatch,
          getState
        }
      } = this.context

      const state = stateSlice(getState())

      return (
        <WrappedComponent
          dispatch={dispatch}
          {...state}
        />
      )
    }
  }
}
