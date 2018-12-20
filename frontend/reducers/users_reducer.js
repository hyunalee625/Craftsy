import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";
import { RECEIVE_ALL_CART_ITEMS } from "../actions/cart_item_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload.user);
    case RECEIVE_USER:
      return merge({}, state, action.payload.user);
    case RECEIVE_ALL_PRODUCTS:
      return action.payload.sellers;
    case RECEIVE_PRODUCT:
      return merge({}, state, action.payload.seller);
    case RECEIVE_ALL_CART_ITEMS:
      if (!action.payload.sellers) {
        return state;
      } else {
        return merge({}, state, action.payload.sellers);
      }
    default:
      return state;
  }
};

export default usersReducer;
