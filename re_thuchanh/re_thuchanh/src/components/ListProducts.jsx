import React, { Component } from 'react'
import Products from './Products'

export default class ListProducts extends Component {
  render() {
    const {product}=this.props
    console.log(product);
    return (
      <>
      <table border={1} cellPadding={5} cellSpacing={2} >
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>ID</th>
            </tr>
        </thead>
        <tbody>
            {product.map((item,index)=>{
                return <tr key={index}><Products product={item} index={index}></Products></tr>
            })}
        </tbody>
      </table>
      </>
    )
  }
}
