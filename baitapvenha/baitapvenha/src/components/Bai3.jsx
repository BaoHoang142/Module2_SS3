import React, { Component } from 'react'
import Bai3_ListStudents from './Bai3_ListStudents'
import Bai3_Search from './Bai3_Search'
import Bai3_Sapxep from './Bai3_Sapxep'
import Bai3_AddStudent from './Bai3_AddStudent'
import Bai3_Students from './Bai3_Students'

export default class Bai3 extends Component {
    constructor (){
        super()
        this.state = {
            listStudents:JSON.parse(localStorage.getItem("listStudents"))||[],
            searchValue:"",
            sort:"",
            result:""
        }
    }
    
    // khởi tạo function
    searchDir = (value)=>{
        this.setState({
            searchValue:value,
        })
    }
    sortBy=(sortBy)=>{
        this.setState({
            sort: sortBy
        })
    }
     // thêm
     saveInfor=(obj)=>{
        // this.setState
        let newArray=this.state.listStudents;
        newArray.push({...obj,id:this.uuid()})
        this.setState({
            listStudents: newArray
        })
        localStorage.setItem("listStudents",JSON.stringify(this.state.listStudents))
    }
    // xóa
    delete=(id)=>{
        console.log(id);
        let result = this.state.listStudents.filter((item)=>{
            return item.id != id
        })
        this.setState({
            listStudents:result
        })
        localStorage.setItem("listStudents",JSON.stringify(result))
    }
    uuid=()=>{
        return Math.floor(Math.random()*999999)
    }
    // sửa
    handleEdit=(id)=>{
        this.setState({
            result: this.state.listStudents.find((item)=>item.id == id)
        })
        
    }
    
  render() {
   
    //search
    let student = [];
    if (this.state.searchValue!="") {
        this.state.sort=""
        let result = this.state.listStudents.filter((item)=>{
            return item.name.indexOf(this.state.searchValue)!=-1;
        });
        if (result.length==0) {
            student=[...this.state.listStudents]
        }else{
            student=result;
        }
    }else{
        student=this.state.listStudents
    }
    //sort
    if (this.state.sort!="") {
        if (this.state.sort=="name") {
            let result = this.state.listStudents.sort((a,b)=>{
                if (a.name.split(" ")[a.name.split(" ").length-1]>b.name.split(" ")[b.name.split(" ").length-1]) {
                    return 1;
                } else if (a.name.split(" ")[a.name.split(" ").length-1]==b.name.split(" ")[b.name.split(" ").length-1]) {
                    return 0;
                } else{
                    return -1;
                }
            })
            student=result
        }else {
            let result = this.state.listStudents.sort((a,b)=>{
                return a.age - b.age
            })
            student=result
        }
    }
    
    
    return (
      <>
        <Bai3_Search search={this.searchDir}></Bai3_Search>
        <br/>
        <br/>
        <Bai3_Sapxep sort= {this.sortBy}></Bai3_Sapxep>
        <br/>
        <br/>
        <Bai3_AddStudent add={this.saveInfor} edit = {this.state.result}></Bai3_AddStudent>
        <br />
        <Bai3_ListStudents student={student} delete = {this.delete} edit = {this.handleEdit}></Bai3_ListStudents>
        
      </>
    )
  }
}
