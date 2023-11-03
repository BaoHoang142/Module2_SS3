import React, { Component } from 'react'
import Search from './components/Search'
import Sort from './components/Sort'
import ListStudents from './components/ListStudents'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      students:[
        {
          name:"Nguyễn Văn Hào",
          age: 20,
          id: "001"
        },
        {
          name:"Lê Đình Hiếu",
          age: 19,
          id: "002"
        },
        {
          name:"Lê Gia Minh",
          age: 18,
          id: "003"
        },
        {
          name:"Dương",
          age: 25,
          id: "004"
        },
      ],
      sort:"",
    }
  }
  // khởi tạo function
  searchDir = (value)=>{
    // console.log("value",value);
    this.setState({
      searchValue:value,
    })
  }
  sortBy=(sortBy)=>{
    this.setState({
      sort:sortBy
    })
  }
  render() {
    //Search
    let student=[];
    if (this.state.searchValue!="") {
      console.log(111111);
      this.state.sort=""
      let result = this.state.students.filter((item)=>{
        return item.name.indexOf(this.state.searchValue)!=-1;//indexOf!=-1 là điều kiện để trả vê
        console.log(result);
      });
      if (result.length==0) {
        student=[...this.state.students]

      }else {
        student=result
        console.log(student);
      }
    } else {
      student=this.state.students
    }
    //logic xử lý sort
    this.state.searchValue=""
    if (this.state.sort!="") {
      if (this.state.sort=="name") {
        let result = this.state.students.sort((a,b)=>{
          if (a.name.split(" ")[a.name.split(" ").length-1]>b.name.split(" ")[b.name.split(" ").length-1]) {
            return 1;
          } else if (a.name.split(" ")[a.name.split(" ").length-1]==b.name.split(" ")[b.name.split(" ").length-1]) {
            return 0;
          } else{
            return -1;
          }
        })
        student=result
      } else{
        let result = this.state.students.sort((a,b)=>{
          return a.age-b.age
        })
        student=result
      }
    }
    return (
      <>
      {/* Đưa các component con vào */}
      <Search search={this.searchDir}></Search>
      <Sort sort = {this.sortBy}></Sort>
      <ListStudents student={student}></ListStudents>
      </>
    )
  }
}
