export const toggleCheckout = (state=false,action) => {
  // console.log(action)
  switch (action.type){
    case 'TOGGLE_CHECKOUT':
      return action.payload
      break
  }
  return state
}

export const itemsInCart  = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CHECKOUT':
      const itemsInCart = Object.assign({}, action.payload, { qty : 0 })
      // const size = Object.keys(state).length
      // return Object.assing({}, state, { [size] : action.payload })
      // return [].concat(state, action.payload)
      return [...state, itemsInCart]
      break
    case 'DELETE_ITEM':
      // const newState = Object.assign({},state)
      // delete newState[action.payload]
      // return newState
      // return [].concat(state.splice(action.payload,1))
      // return [...state.splice(action.payload,1)]
      const delItems = state.filter( item => item.sku !== action.payload)
      return [...delItems]
      break
    case 'ADD_QTY_TO_ITEM':
      const items = state.map( item => {
        const val = action.payload
        if( item.sku === val.item.sku ){
          // console.log(val)
          item = Object.assign({}, item, {
             qty : (item.qty + val.add) > 0 ? (item.qty + val.add) : 0
           })
        }
        return item
      })

      return [...items]
      break
  }

  return state
}
