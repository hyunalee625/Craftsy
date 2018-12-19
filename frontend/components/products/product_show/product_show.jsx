import React from "react";
import { Link, withRouter } from "react-router-dom";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      product_id: null,
      user_id: null,
      quantity: null
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchProducts();
    window.scrollTo(0, 0);
  }

  quantitySelector() {
    const options = [];
    for (let i = 1; i < 6; i++) {
      options.push(<option key={i} value={i}>{`${i}`}</option>);
    }

    return (
      <select
        name="quantity"
        defaultValue="Select Quantity"
        className="quantity-selector"
        onChange={e =>
          this.setState({ quantity: parseInt(e.target.value), product_id: this.props.product.id })
        }
      >
        <option disabled={true} value={"Select Quantity"}>
          {"Select Quantity"}
        </option>
        {options}
      </select>
    );
  }

  addToCart(e) {
    e.preventDefault();
    if (!this.props.currentUserId) {
      this.props.openSignInModal();
    } else {
      if (this.state.quantity) {
        this.state.user_id = this.props.currentUserId;
        this.props.createCartItem(this.state);
        window.alert("Item has been added to cart.");
      } else {
        window.alert("Please select a quantity.");
      }
    }
  }

  render() {
    const product = this.props.product;
    const seller = this.props.seller;
    const products = this.props.products;

    const filtered = products.filter(
      otherProd => seller.id === otherProd.user_id && product.id != otherProd.id
    );

    const totalItems = filtered.length + 1;

    const allOtherProducts = () => {
      return filtered.map(otherProd => (
        <div key={otherProd.id} className="entire-other-product">
          <Link key={otherProd.id} to={`/products/${otherProd.id}`} className="link-container">
            <div className="all-other-prod-pic-container">
              <img className="all-other-prod-pic" src={otherProd.photoUrl} />
            </div>
            <div className="all-other-prod-name">{otherProd.product_name}</div>
            <div className="all-other-prod-price">${otherProd.price}</div>
          </Link>
        </div>
      ));
    };

    const firstFourProducts = () => {
      return filtered
        .map(otherProd => (
          <Link
            key={otherProd.id}
            to={`/products/${otherProd.id}`}
            className="individual-first-four-prod-pic-container"
          >
            <img className="first-four-prod-pic" src={otherProd.photoUrl} />
          </Link>
        ))
        .slice(0, 4);
    };

    if (!seller || !product || !products || !filtered) return <div />;

    return (
      <div className="whole-show-page">
        <div className="show-top-container">
          <div className="show-top-left-container">
            <Link className="link-to-user-show" to={`/users/${seller.id}`}>
              <img className="show-profile-pic" src={seller.photoUrl} />
              <h2 className="show-username">{seller.username}</h2>
            </Link>
          </div>
          <div className="show-top-right-container">
            <div className="first-four-prod-container">
              <h2>{firstFourProducts()}</h2>
              <Link
                className="first-four-prod-pic total-items-container"
                to={`/users/${seller.id}`}
              >
                <div className="total-items-number">{totalItems}</div>
                <div>items</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="show-bottom-container">
          <div className="show-bottom-left-container">
            <img src={product.photoUrl} className="show-photo" />
            <div className="underline" />
            <h2 className="show-description-text">Description</h2>
            <h2 className="show-description">{product.description}</h2>
            <div className="underline" />
            <div className="reviews-container">Reviews</div>
          </div>
          <div className="show-bottom-right-container">
            <h2 className="show-name">{product.product_name}</h2>
            <h2 className="show-price">${product.price}</h2>
            <div className="quantity-text">Quantity</div>
            <div className="quantity-div">{this.quantitySelector()}</div>
            <div className="buy-it-now-div">
              <button className="buy-it-now-button">
                <p className="buy-it-now-text">Buy it now</p>
              </button>
            </div>
            <div className="add-to-cart-div">
              <input
                type="submit"
                className="add-to-cart-button"
                value="Add To Cart"
                onClick={e => this.addToCart(e)}
              />
            </div>
            <div className="underline" />
            <div className="shipping-container">
              <h2 className="show-shipping-text">Shipping & returns</h2>
              <h2 className="show-shipping-bold">Ready to ship in 1-3 days</h2>
              <h2 className="show-shipping-norm">From United States</h2>
              <h2 className="show-shipping-norm">Free shipping everywhere</h2>
              <h2 className="show-shipping-bold">Returns and exchanges accepted</h2>
              <h2 className="show-shipping-norm">Exceptions may apply.</h2>
            </div>
            <div className="underline" />
            <div className="show-more-from-seller-container">
              <Link className="show-more-seller-info" to={`/users/${seller.id}`}>
                <div className="show-profile-pic-container">
                  <img className="show-profile-pic" src={seller.photoUrl} />
                </div>
                <h2 className="show-username">{seller.username}</h2>
              </Link>
              <div className="all-other-prod-container">
                {allOtherProducts()}
                <div className="filling-empty-space" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
