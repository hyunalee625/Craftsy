import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from "../actions/cart_item_actions";

import merge from "lodash/merge";

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return action.payload.cartItems;
    case RECEIVE_CART_ITEM:
      newState = merge({}, state, action.payload.cartItem);
      return newState;
    case REMOVE_CART_ITEM:
      newState = merge({}, state);
      delete newState[action.cartItemId];
      return newState;
    default:
      return state;
  }
};

export default cartItemsReducer;
