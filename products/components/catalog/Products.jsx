import React, { Component } from 'react'

class Item extends Component{
  constructor (props){
    super(props)
  }

  itemClicked(item){
    this.props.itemSelected(item)
  }

  render(){
    return (
      <div className="item" onClick={this.itemClicked.bind(this,this.props.data)}>
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

class Products extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const renderItems = (item) => {
      return (
      <Item
        data={item}
        key={item.sku}
        itemSelected={this.props.itemSelected}
      />
    )}

    return (
      <div className='products'>
        {
          this.props.data.map(renderItems)
        }
      </div>
    )
  }
}

export default Products
