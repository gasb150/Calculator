import React from 'react'

class Button extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <h1>{this.props}</h1>
    )
  }
}