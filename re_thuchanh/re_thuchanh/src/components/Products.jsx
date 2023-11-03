import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    let data = this.props.product
    return (
      <>
        <td>{this.props.index+1}</td>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>{data.id}</td>  
      </>
    )
  }
}
