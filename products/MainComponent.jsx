import React, { Component } from 'react'
import ProductsCatalog from './ProductsCatalog.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { allReducers } from './reducers'

const store = createStore({allReducers})


render(
  <ProductsCatalog/>,
  document.getElementById('products-container')
)
