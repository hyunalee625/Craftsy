import React from "react";
import { Link, withRouter } from "react-router-dom";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleChange = this.handleChange.bind(this);
  }

  productSubtotal() {
    const quantity = this.props.item.quantity;
    const price = this.props.product.price;
    return (price * quantity).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  quantitySelector() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{`${i}`}</option>);
    }

    return (
      <select
        name="quantity"
        defaultValue={this.props.item.quantity}
        className="quantity-selector-cart"
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }

  handleChange(e) {
    this.setState({ quantity: parseInt(e.target.value) }, () =>
      this.props.updateCartItem(this.state)
    );
  }

  render() {
    const item = this.props.item;
    const product = this.props.product;
    const seller = this.props.seller;

    if (!item || !product || !seller) return <div />;

    return (
      <div className="cart-item-container">
        <Link to={`/users/${seller.id}`} className="cart-user-index-link">
          <img src={seller.photoUrl} className="cart-seller-photo" />
          <div className="cart-seller-username">{seller.username}</div>
        </Link>
        <div className="cart-inner-container">
          <Link to={`/products/${product.id}`} className="cart-product-show-link">
            <div className="cart-img-container">
              <img src={product.photoUrl} className="cart-product-photo" />
              <div className="inner-right-side">
                <div className="cart-product-name">{product.product_name}</div>
                <div className="cart-product-description">{product.description}</div>
              </div>
            </div>
          </Link>
          <div className="quantity-container">
            <div>Total: ${this.productSubtotal()}</div>
            <div className="cart-quantity-div">{this.quantitySelector()}</div>
            <div>
              <a
                className="remove-item-button"
                onClick={() =>
                  this.props
                    .deleteCartItem(this.props.item.id)
                    .then(() => this.props.history.replace("/cart"))
                }
              >
                Remove Item
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CartIndexItem);
