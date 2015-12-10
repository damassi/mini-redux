import React, { Component } from 'react'

let TIMER = undefined

export default class LoadIndicator extends Component {
  state = { on: false }

  componentDidMount() {
    TIMER = setInterval(::this.blink, 10)
  }

  componentWillUnmount() {
    clearInterval(TIMER)
  }

  blink() {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    const dot = this.state.on ? '.' : ''

    return (
      <span style={styles.dot}>
        {dot}
      </span>
    )
  }
}

const styles = {
  dot: {
    color: '#666',
    float: 'left',
    display: 'block',
    fontSize: '45px',
    position: 'relative',
    top: '-27px'
  }
}
