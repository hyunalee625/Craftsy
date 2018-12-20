import React from "react";
import { Link, withRouter } from "react-router-dom";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }

  productSubtotal() {
    const quantity = this.props.item.quantity;
    const price = this.props.product.price;
    return price * quantity;
  }

  quantitySelector() {
    const options = [];
    for (let i = 1; i < 9; i++) {
      options.push(<option key={i} value={i}>{`${i}`}</option>);
    }

    return (
      <select
        name="quantity"
        defaultValue={this.props.item.quantity}
        className="quantity-selector"
        onChange={e => this.setState({ quantity: parseInt(e.target.value) })}
      >
        {options}
      </select>
    );
  }

  render() {
    const item = this.props.item;
    const product = this.props.product;
    const seller = this.props.seller;

    if (!item || !product || !seller) return <div />;

    return (
      <div className="cart-item-container">
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
        <button
          onClick={() =>
            this.props
              .deleteCartItem(this.props.item.id)
              .then(() => this.props.history.replace("/cart"))
          }
        >
          Remove Item
        </button>
        <div className="quantity-div">{this.quantitySelector()}</div>
        <div>Total: {this.productSubtotal()}</div>
      </div>
    );
  }
}

export default withRouter(CartIndexItem);
