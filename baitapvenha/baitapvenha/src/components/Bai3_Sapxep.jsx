import React, { Component } from 'react'

export default class Bai3_Sapxep extends Component {
    constructor(){
        super()
        this.state={
            option:""
        }
    }
    changeOption=(event)=>{
        this.props.sort(event.target.value)
    }
  render() {
    return (
      <>
        <select name="" id="" onChange={this.changeOption} >
            <option value="">Sắp xếp</option>
            <option value="name">Theo tên</option>
            <option value="age">Theo tuổi</option>
        </select>
      </>
    )
  }
}
