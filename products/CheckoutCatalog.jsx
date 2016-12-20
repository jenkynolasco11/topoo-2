import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleCheckout, addToItem, substractToItem, deleteItem, selectItem} from './actions'

class CheckoutCatalog extends Component {
  render(){
    const addToItem = (item) => {
      this.props.addToItem(item)
    }

    const substractToItem = (item) => {
      this.props.substractToItem(item)
    }

    const deleteItem = (sku) => {
      this.props.deleteItem(sku)
      this.props.selectItem(sku, false)
    }

    const toggleCheckout = () => {
      this.props.toggleCheckout(false)
    }

    const renderCheckoutItems = (item) => {
        return (
          <div className='products-checkout' key={item.sku}>
            <div className="sku">{item.sku}</div>
            <div className="price">{item.price}</div>
            <figure>
              <img
                className="product-image"
                src={item.img}
                alt="bong-image"
              />
            </figure>
            <p className="description">{item.desc}</p>
            <p className='quantity'>
              <button onClick={addToItem.bind(null,item)}> + </button>
              <span>{item.qty}</span>
              <button onClick={substractToItem.bind(null,item)}> - </button>
            </p>
            <button onClick={deleteItem.bind(null,item.sku)}> Remove </button>
          </div>
        )
    }

    return (
      <div className='checkout'>
        <button onClick={toggleCheckout.bind(this)}> Go back to Items </button>
        {
          this.props.items.map(renderCheckoutItems)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items : state.itemsInCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleCheckout,
    addToItem,
    substractToItem,
    deleteItem,
    selectItem

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCatalog)
