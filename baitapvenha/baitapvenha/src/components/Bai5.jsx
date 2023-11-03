import React, { Component } from 'react'

export default class Bai5 extends Component {
  constructor (){
    super()
    this.handleChange=(event)=>{
       
    }
  }
  render() {
    return (
      <>
        <p onChange={this.handleChange}>Đây là nội dung văn bản</p>
        <button onClick={this.none}>Ẩn</button>
        <button onClick={this.block}>Hiện</button>
      
      </>
    )
  }
}
