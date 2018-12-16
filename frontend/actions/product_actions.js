import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

const receiveAllProducts = payload => ({
  type: RECEIVE_ALL_PRODUCTS,
  payload
});

const receiveProduct = payload => ({
  type: RECEIVE_PRODUCT,
  payload
});

const removeProduct = payload => ({
  type: REMOVE_PRODUCT,
  productId: Object.keys(payload.product)[0]
});

const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchProducts = () => dispatch =>
  ProductApiUtil.fetchProducts().then(payload =>
    dispatch(receiveAllProducts(payload))
  );

export const fetchProduct = id => dispatch =>
  ProductApiUtil.fetchProduct(id).then(payload =>
    dispatch(receiveProduct(payload))
  );

export const createProduct = product => dispatch =>
  ProductApiUtil.createProduct(product).then(
    payload => dispatch(receiveProduct(payload)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );

export const updateProduct = product => dispatch =>
  ProductApiUtil.updateProduct(product).then(
    payload => dispatch(receiveProduct(payload)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );

export const deleteProduct = id => dispatch =>
  ProductApiUtil.deleteProduct(id).then(payload =>
    dispatch(removeProduct(payload))
  );
