import React, { Component } from 'react'
import Student from './Student';

export default class ListStudents extends Component {
  render() {
    // console.log(this.props);
    //destructuring
    // lety student=this.props.student
    const {student}=this.props
    return (
      <>
        <table border={1} cellSpacing={5} cellPadding={5}  >
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {student.map((item,index)=>{
                    return <tr key={index}><Student student={item} index= {index}></Student></tr>
                })}
            </tbody>
        </table>
      
      
      </>
    )
  }
}
