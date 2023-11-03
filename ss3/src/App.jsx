import React, { Component } from 'react'
import ChildClassComponent from './components/ChildClassComponent'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      student:[],
      infor:{
        address: "Hà Nội",
      },
      count:0,
    }
    // this.abc = this.abc.bind(this)
  }
  sayHello=(mess)=>{
    console.log("mess",mess);
  }
  // abc=()=>{
  //   // console.log(111111);
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }
  render() {
    return (
      <>
        <h1>Props</h1>
        <ChildClassComponent name="Minh Thảo" age={25}></ChildClassComponent>
        <p>Gía trị biến đếm: {this.state.count}</p>
        
        <button onClick={this.abc}>click</button>
        <button onClick={()=>this.sayHello("hello")}>sayHello</button>

      </>
    )
  }
}