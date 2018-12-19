import React from "react";
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    if (!this.props.items || !this.props.products || !this.props.sellers)
      return <div />;

    const cartItems = this.props.items.map(item => {
      const product = this.props.products[item.product_id];
      const seller = this.props.sellers[product.user_id];

      return (
        <CartIndexItem
          key={item.id}
          item={item}
          product={product}
          seller={seller}
        />
      );
    });

    return (
      <div className="cart-index-container">
        <h1 className="cart-index-title">Your Cart</h1>
        <div className="whole-cart-checkout-box">
          <div className="left-side-checkout">
            <ul className="cart-index-items">{cartItems}</ul>
          </div>
          <div className="right-side-checkout" />
        </div>
      </div>
    );
  }
}

export default CartIndex;
