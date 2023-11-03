import React, { Component } from 'react'
import ListProducts from './components/ListProducts'
import SearchProduct from './components/SearchProduct'
import Sort from './components/Sort'
import Student from '../../../thuchanh/thuchanh/src/components/Student'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      products:[
        {
          name:"Trà Sữa",
          price: 15,
          id:"001"
        },
        {
          name:"Trà Đào",
          price: 20,
          id:"002"
        },
        {
          name:"Trà Vải",
          price: 25,
          id:"003"
        },
        {
          name:"Trà Mận",
          price: 10,
          id:"004"
        },
        {
          name:"Trà Ngô",
          price: 12,
          id:"005"
        },
      ],
      searchValue:"",
      sort:"",
    }
  }
  //khởi tạo function
  searchDir = (value)=>{
    this.setState({
      searchValue:value,
    })
    // console.log(searchValue);
  }
  sortBy=(sortBy)=>{
    this.setState({
      sort:sortBy
    })
  }
  render() {
    //search
    let product = [];
    console.log(111);
    if (this.state.searchValue!="") {
      this.state.sort=""
      let result = this.state.products.filter((item)=>{
        return item.name.indexOf(this.state.searchValue)!=-1;
      });
      if (result.length==0) {
        product=[...this.state.products]
      }else {
        product=result;
      }
    }else {
      product=this.state.products
    }
    // xử lý sort
    if (this.state.sort!="") {
      if (this.state.sort=="name") {
        let result = this.state.products.sort((a,b)=>{
          if (a.name.split(" ")[a.name.split(" ").length-1]>b.name.split(" ")[b.name.split(" ").length-1]) {
            return 1;
          } else if (a.name.split(" ")[a.name.split(" ").length-1]==b.name.split(" ")[b.name.split(" ").length-1]) {
            return 0;
          } else{
            return -1;
          }
        })
        product=result
      } else {
        let result = this.state.products.sort((a,b)=>{
          return a.price-b.price
        })
        product=result
      }
    }
    return (
      <>
      {/* thêm các thư mục con */}
      <SearchProduct search={this.searchDir} ></SearchProduct>
      <Sort sort = {this.sortBy}></Sort>
      <ListProducts product={product}></ListProducts>
      </>
    )
  }
}
