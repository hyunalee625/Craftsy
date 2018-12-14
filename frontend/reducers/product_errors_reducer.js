import { RECEIVE_PRODUCT_ERRORS } from "../actions/product_actions";

const productErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default productErrorsReducer;
