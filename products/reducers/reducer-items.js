const items = (state=[],action) => {
  switch(action.type){
    case 'ITEMS_ADDED':
      return [].concat(state, action.payload)
  }

  return state
}

export default items
