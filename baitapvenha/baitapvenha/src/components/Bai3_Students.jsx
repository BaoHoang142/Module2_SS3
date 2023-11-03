import React, { Component } from 'react'

export default class Bai3_Students extends Component {
  render() {
    let {student} = this.props
    // console.log(student.id);
    return (
      <>
        <td>{this.props.index+1}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.school}</td>
        <td>{student.id}</td>
        <td>
        <button onClick={()=>this.props.delete(student.id)}>Xóa</button>
        <button onClick={()=>this.props.edit(student.id)}>Sửa</button>
        </td>
      </>
    )
  }
}
