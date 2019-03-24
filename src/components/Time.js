import React, { Component } from 'react'

class Time extends Component {
  state = {time: new Date()}

  componentDidMount() {
    setInterval(() => {
      this.setState({time: new Date()})
    }, 1000)
  }

  render() {
    return (
      <p>
        现在时间：{this.state.time.toLocaleString()}
      </p>
    )
  }
}

export default Time
