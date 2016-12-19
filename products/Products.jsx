import React, { Component } from 'react'
// import { TabPanel } from 'react-tabs'
// import axios from 'axios'

class Item extends Component{
  constructor (props){
    super(props)
    // console.log('it\'s in Item')
    // this.state = {}
  }

  render(){
    // console.log(this.props.data)
    return (
      <div className="item">
        <div className="sku">{this.props.data.sku}</div>
        <div className="price">{this.props.data.price}</div>
        <figure>
          <img className="product-image" src={this.props.data.img} alt="bong-image"/>
        </figure>
        <p className="description">{this.props.data.desc}</p>
      </div>
    )
  }
}

export default class Products extends Component{
  constructor(props){
    // console.log(props.data)
    super(props)
  }

  render(){
    // console.log(this.props.data)
    let renderItems = (item) => {
      return <Item data={item} key={item.sku}/>
    }

    return (
      <div className='products'>
        {
          this.props.data.map(renderItems)
        }
      </div>
    )
  }
}
