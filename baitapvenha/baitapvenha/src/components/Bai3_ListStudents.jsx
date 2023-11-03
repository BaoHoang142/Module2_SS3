import React, { Component } from 'react'
import Bai3_Students from './Bai3_Students'

export default class Bai3_ListStudents extends Component {
  render() {
    const {student}=this.props
    return (
      <>
        <table border={1} cellPadding={5} cellSpacing={5}>
           <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Tuổi</th>
                    <th>Tên trường</th>
                    <th>ID</th>
                    <th>Hành động</th>
                </tr>
            </thead> 
            <tbody>
                {student.map((item,index)=>{
                    return <tr key={index}><Bai3_Students 
                    student={item} 
                    index={index}
                    delete={this.props.delete}
                    edit={this.props.edit}
                    ></Bai3_Students></tr>
                })}
            </tbody>
        </table>
      </>
    )
  }
}
