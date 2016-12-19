import React, { Component } from 'react'
import Products from './Products.jsx'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
// import { createElement } from 'react'
// import React from 'react'
import { get } from 'axios'

class ProductsCategory extends Component {
  constructor(props){
    // console.log('this is being mounted')
    super(props)
    this.state = {
      categories : []
    }
  }

  handleSelection(index,last){
    // console.log(index,last);
  }
// <tab> asdasd <div> </tab>

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

// console.log('file is mounted')

ReactDOM.render(
  React.createElement(ProductsCategory),
  document.getElementById('products-container')
)
