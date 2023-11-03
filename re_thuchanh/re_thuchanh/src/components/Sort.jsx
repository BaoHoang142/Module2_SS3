import React, { Component } from 'react'

export default class Sort extends Component {
  constructor(){
    super()
    this.state={
      option:"",
    }
  }
  changeOption=(event)=>{
    //lấy giá trị
    this.props.sort(event.target.value)
  }
  render() {
    return (
      <>
        <select name="" id="" onChange={this.changeOption}>
          <option value="">Sắp xếp</option>
          <option value="name">Theo tên</option>
          <option value="price">Theo giá</option>
        </select>
      </>
    )
  }
}
