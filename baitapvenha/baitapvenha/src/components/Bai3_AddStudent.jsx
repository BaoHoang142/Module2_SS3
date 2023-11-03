import React, { Component } from 'react'

export default class Bai3_AddStudent extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            age:"",
            school:"",
            check:false
        }
    }
    saveInfor=(e)=>{
        e.preventDefault() // ngăn chặn việc submit lên form
        this.props.add(this.state)
    }
    changeValue = (e)=>{
        let name = e.target.name;
        let value=e.target.value;
        this.setState({
            [name]:value,//cú pháp của phương thức
        })
    }
  render() {
    let abc = this.props.edit;
    if (abc) {
        var name = this.state.name ? this.state.name : abc.name
        var age = this.state.age ? this.state.age : abc.age
        var school = this.state.school ? this.state.school : abc.school
    }
    console.log(this.props.edit);
    return (
      <>
        <form action="">
            <label htmlFor="">Họ và tên: </label> 
            <input 
            placeholder='Mời nhập tên' 
            type="text" 
            onChange={this.changeValue}
            value={name}
            name="name"
            /><br />
            <label htmlFor="">Tuổi: </label>
            <input 
            placeholder='Mời nhập tuổi' 
            value={age}
            onChange={this.changeValue}
            name="age"
            type="text" 
            /><br />
            <label htmlFor="">Tên trường: </label>
            <input 
            placeholder='Mời nhập trường' 
            value={school}
            onChange={this.changeValue}
            name="school"
            type="text" 
            /><br />
            <button onClick={this.saveInfor}>Lưu</button>
            
        </form>
      </>
    )
  }
}
