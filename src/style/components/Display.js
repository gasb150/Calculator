import React from 'react'

export default class Display extends React.Component {

  state = { showResult: '0' }

  render() {
  return (
    <h1>{this.state.showResult}</h1>
    )
}
}