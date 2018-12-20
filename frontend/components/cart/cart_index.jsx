import React from "react";
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    if (!this.props.items || !this.props.products || !this.props.sellers) return null;

    const cartItems = this.props.items.map(item => {
      const product = this.props.products[item.product_id];
      const seller = this.props.sellers[product.user_id];
      const buyer = this.props.buyer;
      const fetchCartItems = () => this.props.fetchCartItems();
      const updateCartItem = item => this.props.updateCartItem(item);
      const deleteCartItem = id => this.props.deleteCartItem(id);

      return (
        <CartIndexItem
          key={item.id}
          item={item}
          product={product}
          seller={seller}
          buyer={buyer}
          fetchCartItems={fetchCartItems}
          updateCartItem={updateCartItem}
          deleteCartItem={deleteCartItem}
        />
      );
    });

    if (cartItems.length === 0) {
      return <div>No items in your cart.</div>;
    }

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
