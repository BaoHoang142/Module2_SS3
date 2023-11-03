import React, { Component } from 'react'

export default class Bai1_1 extends Component {
    constructor(){
        super()
        this.state = {
            content:"nội dung cũ"
        }
    }
    add=()=>{
        this.setState({
            content:"nội dung mới"
        })
    }
  render() {
    return (
      <>
        <p>{this.state.content}</p>
        <button onClick={this.add}>click</button>
      </>
    )
  }
}
