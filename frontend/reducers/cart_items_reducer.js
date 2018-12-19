import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from "../actions/cart_item_actions";

import merge from "lodash/merge";

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return action.payload.cartItems;
    case RECEIVE_CART_ITEM:
      return merge({}, state, action.payload.cartItem);
    case REMOVE_CART_ITEM:
      let newState = merge({}, state);
      delete newState[action.cartItemId];
      return newState;
    default:
      return state;
  }
};

export default cartItemsReducer;
