import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { get } from 'axios'

import { addItems, toggleCheckout, addItemToCheckout, selectItem } from './actions'
import Products from './Products.jsx'
import Checkout from './CheckoutCatalog.jsx'

class ProductsCatalog extends Component {

  // handleSelection(index,last){
    //
  // }

  render(){
    if(this.props.checkout){
      return <Checkout />
    }

    else {
      const toggleCheckout = () => {
        this.props.toggleCheckout(true)
      }

      const renderProducts = (cat) => {
        return (
          <TabPanel key={cat.cat_name}>
            <Products
              selectIt={this.props.selectItem}
              addItem={this.props.addItemToCheckout}
              data={cat.items}
            />
          </TabPanel>
          )
      }

      const renderTabs = (cat) => {
        return <Tab key={cat.category}> {cat.cat_name} </Tab>
      }

      return (
        <div>
          <button onClick={toggleCheckout.bind(this)}>
            Go To Checkout
          </button>
          {/* <Tabs onSelect={this.handleSelection}> */}
          <Tabs>
            <TabList>
            {
              this.props.items.map(renderTabs)
            }
            </TabList>
            {
              this.props.items.map(renderProducts)
            }
          </Tabs>
        </div>
        )
      }
  }

  componentWillMount(){
    get('/items')
    .then( (res) => {
      this.props.addItems(res.data)
    })
  }
}

const mapStateToProps = (state) => {
  return {
    items    : state.items,
    checkout : state.checkout
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
    addItems,
    toggleCheckout,
    addItemToCheckout,
    selectItem

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCatalog)
