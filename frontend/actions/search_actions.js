import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_PRODUCTS = "RECEIVE_SEARCH_PRODUCTS";

const receiveSearchProducts = payload => ({
  type: RECEIVE_SEARCH_PRODUCTS,
  payload
});

export const searchProducts = query_string => dispatch =>
  SearchApiUtil.searchProducts(query_string).then(payload =>
    dispatch(receiveSearchProducts(payload))
  );
