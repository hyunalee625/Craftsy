import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PRODUCT } from "../actions/product_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state, {
        [action.currentUser.id]: action.currentUser
      });
      return newState;
    case RECEIVE_PRODUCT:
      newState = merge({}, state, action.payload.user);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
