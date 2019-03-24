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
        It's {this.state.time.toLocaleString()} now.
      </p>
    )
  }
}

export default Time
