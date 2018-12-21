import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from "../actions/cart_item_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SEARCH_PRODUCTS } from "../actions/search_actions";

import merge from "lodash/merge";

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      if (!action.payload.cartItems) {
        return state;
      } else {
        return action.payload.cartItems;
      }
    case RECEIVE_CART_ITEM:
      newState = merge({}, state, action.payload.cartItem);
      return newState;
    case REMOVE_CART_ITEM:
      newState = merge({}, state);
      delete newState[action.cartItemId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default cartItemsReducer;
