import React, { Component } from 'react'

export default class Bai3_Search extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  changeValue=(event)=>{
    this.setState({
      search:event.target.value
    })
  }
  // hàm tìm kiếm
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
      <button onClick={()=> this.props.search(this.state.search)}>Tìm kiếm</button>
      </>
    )
  }
}
