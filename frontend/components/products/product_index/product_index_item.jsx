import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => (
  <div>
    <Link to={`/products/${product.id}`}>{product.product_name}</Link>
  </div>
);

export default ProductIndexItem;
