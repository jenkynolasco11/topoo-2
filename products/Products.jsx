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
      // console.log(cat)
      return <ByCategory data={cat} key={cat.cat} />
    }

    return (
      <div>
        {
          this.state.categories.map(renderCategories)
        }
      </div>
      )
      // get('/items')
      // .then( (response) => {
      //   console.log(response.data)
      //   // this.setState({
      //   //
      //   // })
      // })
    // console.log('here I am...')
  }

  componentDidMount(){
    get('/items')
    .then( (response) => {
      // console.log(response.data)
      this.setState({
        categories : response.data.pop()
      })
      // console.log('it\'s here')
      // console.log(this.state)
    })
  }
}

// Renders component in DOM
// render(
//   createElement(Products),
//   document.getElementById('products-container')
// )
ReactDOM.render(
  React.createElement(Products),
  document.getElementById('products-container')
)
