import React from "react";
import { Link } from "react-router-dom";

class ProductIndexItem extends React.Component {
  render() {
    const product = this.props.product;
    const seller = this.props.sellers[product.user_id];
    if (!this.props.product || !this.props.sellers) return <div />;

    debugger;

    return (
      <Link to={`/products/${product.id}`} className="product-index-item">
        <img src={product.photoUrl} className="product-photo" />
        <ul className="product-information">
          <li className="product-name">{product.product_name}</li>
          <li className="seller-name">{seller.username}</li>
          <li className="product-price">{product.price}</li>
        </ul>
      </Link>
    );
  }
}

export default ProductIndexItem;
