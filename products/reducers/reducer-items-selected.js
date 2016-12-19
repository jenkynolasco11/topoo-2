const itemsSelected = (state=[],action) => {
  switch(action.type){
    case 'ITEM_SELECTED_TO_CHECKOUT':
      return [].concat(state, action.payload)
      break;
  }

  return state;
}

export default itemsSelected
