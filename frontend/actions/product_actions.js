import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
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
  ProductApiUtil.fetchProduct(id).then(product =>
    dispatch(receiveProduct(product))
  );

export const createProduct = product => dispatch =>
  ProductApiUtil.createPost(product).then(
    product => dispatch(receiveProduct(product)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );

export const updateProduct = product => dispatch =>
  ProductApiUtil.updateProduct(product).then(
    product => dispatch(receiveProduct(product)),
    err => dispatch(receiveProductErrors(err.responseJSON))
  );

export const removeProduct = id => dispatch =>
  ProductApiUtil.removeProduct(id).then(product =>
    dispatch(removeProduct(product))
  );
