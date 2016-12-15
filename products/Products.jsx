import React, {Component} from 'react'
import ByCategory from './ProductsCategory.jsx'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom'
// import { createElement } from 'react'
// import React from 'react'
import { get } from 'axios'

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories : []
    }
  }

  render(){
    let renderCategories = (cat) => {
      return <ByCategory data={cat} key={cat.cat} />
    }

    return (
      <div>
        {
          this.state.categories.map(renderCategories)
        }
      </div>
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

ReactDOM.render(
  React.createElement(Products),
  document.getElementById('products-container')
)
