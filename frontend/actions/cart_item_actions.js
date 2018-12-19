import * as CartItemApiUtil from "../util/cart_item_api_util";

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveAllCartItems = payload => ({
  type: RECEIVE_ALL_CART_ITEMS,
  payload
});

const receiveCartItem = payload => ({
  type: RECEIVE_CART_ITEM,
  payload
});

const removeCartItem = payload => ({
  type: REMOVE_CART_ITEM,
  cartItemId: Object.keys(payload.cartItems)[0] //TODO: double-check in console what payload carries
});

export const fetchCartItems = () => dispatch =>
  CartItemApiUtil.fetchCartItems().then(payload => dispatch(receiveAllCartItems(payload)));

export const createCartItem = cartItem => dispatch =>
  CartItemApiUtil.createCartItem(cartItem).then(payload => dispatch(receiveCartItem(payload)));

export const updateCartItem = cartItem => dispatch =>
  CartItemApiUtil.updateCartItem(cartItem).then(payload => dispatch(receiveCartItem(payload)));

export const deleteCartItem = id => dispatch =>
  CartItemApiUtil.deleteCartItem(id).then(payload => dispatch(removeCartItem(payload)));
