import { combineReducers } from 'redux'
import itemsSelected from './reducer-items-selected'
import items from './reducer-items'

const allReducers = combineReducers({
  itemsSelected,
  items
})

export default allReducers
