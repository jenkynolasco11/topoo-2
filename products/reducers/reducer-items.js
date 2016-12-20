export const items = (state=[],action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      return [...action.payload]
      break
    case 'SELECTED_ITEM':
      const categories = state.map( cat => {
        cat.items = [...cat.items.map( item => {
          if(item.sku === action.payload.sku){
            item = Object.assign({}, item, { selected : action.payload.selected })
          }
          return item
        })]
        return cat
      })
      console.log(categories)
      return [...categories]
      break
  }
  return state
}
