import React, { Component } from 'react'
import Products from './Products.jsx'

import { render } from 'react-dom'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { get } from 'axios'

class ProductsCatalog extends Component {
  // constructor(props){
  //   // console.log('this is being mounted')
  //   super(props)
  //   this.state = {
  //     categories : []
  //   }
  // }

  handleSelection(index,last){
    // console.log(index,last);
  }
  render(){
    let renderProducts = (cat) => {
      // console.log(cat)
      return (
        <TabPanel>
          <Products data={cat.items} key={cat.cat_name} />
        </TabPanel>
        )
    }

    let renderTabs = (cat) => {
      return <Tab key={cat.category}> {cat.cat_name} </Tab>
    }

    return (
      <Tabs onSelect={this.handleSelection}>
        <TabList>
        {
          this.state.categories.map(renderTabs)
        }
        </TabList>
        {
          this.state.categories.map(renderProducts)
        }
      </Tabs>
      )
  }

  componentDidMount(){
    get('/items')
    .then( (res) => {
      this.setState({
        categories : [].concat(res.data)
      })
    })
  }
}

export default ProductsCatalog
