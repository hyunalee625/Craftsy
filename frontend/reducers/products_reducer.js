import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT
} from "../actions/product_actions";

import merge from "lodash/merge";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      newState = merge({}, state, { [action.product.id]: action.product });
      return newState;
    case REMOVE_PRODUCT:
      newState = merge({}, state);
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default productsReducer;
