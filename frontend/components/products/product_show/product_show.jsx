import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReviewIndexContainer from "../../reviews/review_index_container";
import OtherProduct from "./other_products";
import FirstFourProduct from "./first_four_products";
import TopContainer from "./top_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      quantity: null
    };
  }

  componentDidMount() {
    // this.props.fetchProduct(this.props.match.params.productId);
    const { fetchProducts, fetchReviews, productId } = this.props;

    fetchProducts();
    fetchReviews(productId);

    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { fetchProduct, fetchReviews, productId } = this.props;

    if (productId !== prevProps.match.params.productId) {
      fetchProduct(productId);
      fetchReviews(productId);

      this.setState({ quantity: null });
    }
  }

  quantitySelector() {
    const options = [];

    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{`${i}`}</option>);
    }

    const { quantity } = this.state;

    return (
      <select
        name="quantity"
        // defaultValue="-"
        value={this.state.quantity === null ? "-" : this.state.quantity}
        className="quantity-selector"
        onChange={e =>
          this.setState({
            quantity: parseInt(e.target.value),
            product_id: this.props.product.id
          })
        }
      >
        {/* <option key="0" selected={this.state.quantity === null} disabled={true} value={"-"}>
          {"-"}
        </option> */}

        <option key="0" disabled={true} value="-">
          {"-"}
        </option>

        {options}
      </select>
    );
  }

  addToCart(e) {
    e.preventDefault();

    const {
      currentUserId,
      createCartItem,
      openSignInModal,
      productId
    } = this.props;
    const { quantity } = this.state;

    if (!currentUserId) {
      openSignInModal();
    } else {
      if (quantity) {
        createCartItem({
          currentUserId,
          productId,
          quantity
        });
      } else {
        window.alert("Please select a quantity.");
      }
    }
  }

  render() {
    const { product, products, seller } = this.props;

    const filtered = products.filter(
      otherProd => seller.id === otherProd.user_id && product.id != otherProd.id
    );

    const totalItems = filtered.length + 1;

    const allOtherProducts = () => {
      return filtered.map(otherProd => (
        <OtherProduct key={otherProd.id} {...otherProd} />
      ));
    };

    const firstFourProducts = filtered.slice(0, 4);

    if (!seller || !product || !products || !filtered) return <div />;

    return (
      <div className="whole-show-page">
        <TopContainer
          firstFourProducts={firstFourProducts}
          seller={seller}
          totalItems={totalItems}
        />

        <div className="show-bottom-container">
          <div className="show-bottom-left-container">
            <img src={product.photoUrl} className="show-photo" />
            <div className="underline" />
            <h2 className="show-description-text">Description</h2>
            <h2 className="show-description">{product.description}</h2>
            <div className="underline" />
            <div className="reviews-container">
              <ReviewIndexContainer />
            </div>
          </div>

          <div className="show-bottom-right-container">
            <h2 className="show-name">{product.product_name}</h2>
            <h2 className="show-price">${product.price}</h2>
            <div className="quantity-text">Quantity</div>
            <div className="quantity-div">{this.quantitySelector()}</div>
            <div className="errorMessage">{this.props.errors}</div>
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
              <h2 className="show-shipping-bold">
                Returns and exchanges accepted
              </h2>
              <h2 className="show-shipping-norm">Exceptions may apply.</h2>
            </div>

            <div className="underline" />
            <div className="show-more-from-seller-container">
              <Link
                className="show-more-seller-info"
                to={`/users/${seller.id}`}
              >
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
