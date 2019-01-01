import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_CART_ITEMS, REMOVE_CART_ITEM } from "../actions/cart_item_actions";
import { RECEIVE_SEARCH_PRODUCTS } from "../actions/search_actions";

import merge from "lodash/merge";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.payload.products;
    case RECEIVE_PRODUCT:
      return merge({}, state, action.payload.product);
    case REMOVE_PRODUCT:
      newState = merge({}, state);
      delete newState[action.productId];
      return newState;
    case RECEIVE_USER:
      return merge({}, state, action.payload.products);
    case RECEIVE_ALL_CART_ITEMS:
      if (!action.payload.products) {
        return state;
      } else {
        return merge({}, state, action.payload.products);
      }
    case RECEIVE_SEARCH_PRODUCTS:
      if (!action.payload.products) {
        return {};
      } else {
        return action.payload.products;
      }
    default:
      return state;
  }
};

export default productsReducer;
