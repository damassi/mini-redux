import React, { Component, PropTypes } from 'react'

export default class Provider extends Component {

  state = {
    history: []
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentDidMount() {
    const { store } = this.props

    store.onChange((update) => {
      const newState = store.reducer(update)

      this.setState({
        history: this.state.history.concat([newState])
      })
    })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        { React.Children.map(children, (Child) => {
          return (
            React.cloneElement(Child)
          )
        })}
      </div>
    )
  }
}
