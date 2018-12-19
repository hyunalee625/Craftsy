import React from "react";
import { Link } from "react-router-dom";

class CartIndexItem extends React.Component {
  productSubtotal() {
    const quantity = this.props.item.quantity;
    const price = this.props.product.price;
    return price * quantity;
  }

  render() {
    const item = this.props.item;
    const product = this.props.product;
    const seller = this.props.seller;

    if (!item || !product || !seller) return <div />;

    return (
      <div>
        <Link to={`/users/${seller.id}`}>
          <img src={seller.photoUrl} className="cart-seller-photo" />
          <span>{seller.username}</span>
        </Link>
        <Link to={`/products/${product.id}`}>
          <ul>
            <img src={product.photoUrl} className="cart-product-photo" />
            <li>{product.product_name}</li>
          </ul>
        </Link>
        <select name="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div>Total: {this.productSubtotal()}</div>
      </div>
    );
  }
}

export default CartIndexItem;
