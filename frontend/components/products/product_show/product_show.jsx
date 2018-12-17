import React from "react";
import { Link, withRouter } from "react-router-dom";

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchProducts();
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
        <div className="entire-other-product">
          <Link
            key={otherProd.id}
            to={`/products/${otherProd.id}`}
            className="link-container"
          >
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
            <img className="show-profile-pic" src={seller.photoUrl} />
            <h2 className="show-username">{seller.username}</h2>
          </div>
          <div className="show-top-right-container">
            <div className="first-four-prod-container">
              <h2>{firstFourProducts()}</h2>
              <h2 className="first-four-prod-pic total-items-container">
                <div className="total-items-number">{totalItems}</div>
                <div>items</div>
              </h2>
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
            <div className="quantity-div">
              <select name="quantity" className="quantity-selector">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="buy-it-now-div">
              <button className="buy-it-now-button">
                <p className="buy-it-now-text">Buy it now</p>
              </button>
            </div>
            <div className="add-to-cart-div">
              <button className="add-to-cart-button">
                <p className="add-to-cart-text">Add to cart</p>
              </button>
            </div>
            <div className="underline" />
            <div className="shipping-container">
              <h2 className="show-shipping-text">Shipping & returns</h2>
              <h2 className="show-shipping-bold">Ready to ship in 1-3 days</h2>
              <h2 className="show-shipping-norm">From United States</h2>
              <h2 className="show-shipping-norm">Free shipping everywhere</h2>
              <h2 className="show-shipping-bold">
                Returns and exchanges accepted
              </h2>
              <h2 className="show-shipping-norm">Exceptions may apply.</h2>
            </div>
            <div className="underline" />
            <div className="show-more-from-seller-container">
              <div className="show-more-seller-info">
                <div className="show-profile-pic-container">
                  <img className="show-profile-pic" src={seller.photoUrl} />
                </div>
                <h2 className="show-username">{seller.username}</h2>
              </div>
              {/* <div className="show-more-items"> */}
              <div className="all-other-prod-container">
                {allOtherProducts()}
                <div className="filling-empty-space" />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
