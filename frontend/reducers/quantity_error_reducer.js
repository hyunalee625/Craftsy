import { RECEIVE_CART_ITEM } from "../actions/cart_item_actions";

export default (state = "", action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEM:
      if (action.payload.quantity) {
        return "You've reached the maximum quantity available.";
      }
    default:
      return "";
  }
};
