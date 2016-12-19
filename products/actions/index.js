export const itemSelected = (item) => {
  return {
    type    : 'ITEM_SELECTED_TO_CHECKOUT',
    payload : item
  }
}

export const addItems = (items) => {
  return {
    type : 'ITEMS_ADDED',
    payload : items
  }
}
