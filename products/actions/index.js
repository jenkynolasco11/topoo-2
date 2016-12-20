export const addItems = (items) => {
  return {
    type    : 'ADD_ITEMS',
    payload : items
  }
}

export const addItemToCheckout = (item) => {
  return {
    type    : 'ADD_ITEM_TO_CHECKOUT',
    payload : item
  }
}

export const deleteItem = (sku) => {
  return {
    type    : 'DELETE_ITEM',
    payload : sku
  }
}

export const toggleCheckout = (switchTo) =>{
  return {
    type    : 'TOGGLE_CHECKOUT',
    payload : switchTo
  }
}

export const selectItem = (sku, selected) => {
  return {
    type    : 'SELECTED_ITEM',
    payload : { sku, selected }
  }
}

export const addToItem = (item) => {
  return {
    type    : 'ADD_QTY_TO_ITEM',
    payload : {item, add : 1}
  }
}

export const substractToItem = (item) => {
  return {
    type    : 'ADD_QTY_TO_ITEM',
    payload : {item, add: -1}
  }
}
