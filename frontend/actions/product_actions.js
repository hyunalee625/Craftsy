import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = payload => ({
  type: RECEIVE_PRODUCT,
  payload
});

const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  productId: product.id
});

const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchProducts = () => dispatch =>
  ProductApiUtil.fetchProducts().then(products =>
    dispatch(receiveAllProducts(products))
  );

export const fetchProduct = id => dispatch =>
  ProductApiUtil.fetchProduct(id).then(payload =>
    dispatch(receiveProduct(payload))
  );

export const createProduct = product => dispatch =>
  ProductApiUtil.createProduct(product).then(
    product => dispatch(receiveProduct(product)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );

export const updateProduct = product => dispatch =>
  ProductApiUtil.updateProduct(product).then(
    product => dispatch(receiveProduct(product)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );

export const deleteProduct = id => dispatch =>
  ProductApiUtil.deleteProduct(id).then(product =>
    dispatch(removeProduct(product))
  );
