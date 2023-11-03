import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super()
        this.state={
            search:""
        }
    }
    changeValue=(event)=>{
        //lấy giá trị ở ô ipnut người dùng nhập
        // console.log(event.target.value);
        // sau khi lấy xong cập nhật state
        this.setState ({
            search:event.target.value,
        })
    }
    // hàm click tìm kiếm
    handleSearch=()=>{
        console.log(this.state.search);
        this.props.search(this.state.search)
    }
  render() {
    return (
      <>
        <input 
        type="text" 
        onChange={this.changeValue}
        />
        <button onClick={()=>this.props.search(this.state.search)}>Tìm kiếm</button>
  
      </>
    )
  }
}
