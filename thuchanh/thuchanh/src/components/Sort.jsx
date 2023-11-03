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
            <option value="">sắp xếp</option>
            <option value="name">bảng chữ cái</option>
            <option value="age">tuổi tăng dần</option>
        </select>


      </>
    )
  }
}
