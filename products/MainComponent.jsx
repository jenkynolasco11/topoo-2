import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import allReducers from './reducers'
import ProductsCatalog from './ProductsCatalog.jsx'

const store = createStore(allReducers)

render(
  <Provider store={store}>
    <ProductsCatalog />
  </Provider>,
  document.getElementById('products-container')
)
