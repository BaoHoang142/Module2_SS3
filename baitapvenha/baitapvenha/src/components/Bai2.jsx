import React, { Component } from 'react'

export default class Bai2 extends Component {
    constructor(){
        super()
        this.state = {
            valueInput:"",
        }
        this.handleChange=(event)=>{
            this.setState({
                valueInput: event.target.value,
            })
        }
        this.handleChangeSubmit=(event)=>{
            event.preventDefault();
            document.write("Nội dung vừa nhập là ",this.state.valueInput)
        }

    }
  render() {
    const {valueInput}= this.state;
    return (
      <>
       <form action="" onSubmit={this.handleChangeSubmit}>
            <input 
            value={valueInput}
            type="text" 
            onChange={this.handleChange}
            />
            <button onClick={this.submit}>Submit</button>
       </form>
      </>
    )
  }
}
