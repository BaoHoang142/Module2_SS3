import React, { Component } from 'react'

export default class ChildClassComponent extends Component {
  render() {
    const{name,age}=this.props
    return (
        <>
            <div>ChildClassComponent</div>
            <p>{name}, {age} tuổi</p>
        </>
      
    )
  }
}
