import React, { Component } from 'react'
import Search from '../../../thuchanh/thuchanh/src/components/Search'
import Sort from '../../../thuchanh/thuchanh/src/components/Sort'
import ListProduct from './components/ListProduct'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      students: [
        {
          name:"Tân Hoàng Minh",
          age: 21,
          id:"001"
        },
        {
          name:"Lê Đại Hành",
          age: 29,
          id:"002"
        },
        {
          name:"Bà Triệu",
          age: 27,
          id:"003"
        },
        {
          name:"Nguyễn Phong Sắc",
          age: 20,
          id:"004"
        },
        {
          name:"Phan Bội Châu",
          age: 25,
          id:"005"
        },
        {
          name:"Phạm Hùng",
          age: 17,
          id:"006"
        },
        {
          name:"Vừa Đi Về",
          age: 24,
          id:"007"
        },
        {
          name:"Mai Hết Tiền",
          age: 28,
          id:"008"
        }

      ]
    }
  }
  render() {
    return (
      <>
      {/* Đưa các component con vào */}
      <Search></Search>
      <Sort></Sort>
      <ListProduct></ListProduct>
      </>
    )
  }
}
