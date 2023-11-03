import React, { Component } from 'react'

export default class SearchProduct extends Component {
    constructor(){
        super()
        this.state={
            search:""
        }
    }
    changeValue=(event)=>{
        //lấy giá trị ở ô input người dùng nhập
        // console.log(event.target.value);
        //sau khi lấy xong cập nhật state
        this.setState ({
            search:event.target.value,
        })
    }
    // hàm click tìm kiếm
    handleSearch = ()=>{
        this.props.search(this.state.search)
    }
  render() {
    return (
      <>
        <input 
        type="text"
        onChange={this.changeValue}
         />
        <button onClick = {()=>this.props.search(this.state.search)}>Tìm kiếm</button>
      </>
    )
  }
}
