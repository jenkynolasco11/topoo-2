import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import allReducers from './reducers'

// import Products from './catalog/ProductsCategory.jsx'
import Products from './components/catalog/ProductsCategory.jsx'
// import Checkout from './components/checkoutCart/ProductsCheckout.jsx'

const store = createStore(allReducers)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {/* <IndexRoute component={Products}/> */}
      <Route path='/' component={Products}/>
      {/* <Route path='/checkout' component={Checkout}/> */}
    </Router>
  </Provider>
  , document.getElementById('products-container')
)
