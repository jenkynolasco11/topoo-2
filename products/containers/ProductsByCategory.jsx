import React, { Component } from 'react'
import Products from '../components/catalog/Products.jsx'
import { itemSelected, addItems } from '../actions'
// import Products from '../containers/ProductsList.jsx'
// import Products from '../../containers/productsList.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { get } from 'axios'

class ProductsByCategory extends Component {

  render(){
    const renderProducts = (cat) => {
      return (
        <TabPanel key={cat.cat_name}>
          <Products itemSelected={this.props.itemSelected} data={cat.items}/>
        </TabPanel>
        )
    }

    const renderTabs = (cat) => {
      return <Tab key={cat.category}> {cat.cat_name} </Tab>
    }

    return (
      <Tabs>
        <TabList>
        {
          this.props.categories.map(renderTabs)
        }
        </TabList>
        {
          this.props.categories.map(renderProducts)
        }
      </Tabs>
    )
  }

  componentDidMount(){
    get('/items')
    .then( (res) => {
      this.props.addItems([].concat(res.data))
    })
  }
}

const mapStateToProps = (state) => {
  return {
    categories : state.items.map((cat) => {
      return {
        category : cat.category,
        cat_name : cat.cat_name,
        items : cat.items
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ itemSelected, addItems }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory)
