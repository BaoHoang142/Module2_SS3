import React, { Component } from 'react'

export default class Bai4 extends Component {
    constructor(){
        super()
        this.state = {
            image: [
                "https://th.bing.com/th/id/OIP.-2Z2DBC5JFI0YW3j_WCX1gHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://th.bing.com/th/id/OIP.D4wI0YN7f6l39p5_uPOkBQHaEF?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://th.bing.com/th/id/OIP.QQP31Pto9DN_75WN3aI5ugHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://th.bing.com/th/id/OIP.LRYvkM_gai-FjtxMGSaa8AHaEX?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            ],
            index:0
        }
        this.Next=()=>{
            this.setState({
                index:this.state.index+1
            })
        }
        this.Pre = ()=>{
            this.setState({
                index:this.state.index-1
            })
        }
    }
    
  render() {
    if (this.Next.index==this.state.image.length-1) {
        
    }
    return (
      <>
        <div className="slide">
            <img src={this.state.image[this.state.index]} alt="" />
        </div>

        <button onClick={this.Pre}>Pre</button>
        <button onClick={this.Next}>Next</button>
      </>
    )
  }
}
