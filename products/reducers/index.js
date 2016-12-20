import { combineReducers } from 'redux'
import { items } from './reducer-items'
import { toggleCheckout as checkout, itemsInCart } from './reducer-items-checkout'

const allReducers = combineReducers({
    items,
    checkout,
    itemsInCart
})

export default allReducers
