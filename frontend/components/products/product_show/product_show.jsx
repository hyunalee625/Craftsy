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
        <Link key={otherProd.id} to={`/products/${otherProd.id}`}>
          <img className="all-other-prod-pic" src={otherProd.photoUrl} />
          <div className="all-other-prod-name">{otherProd.product_name}</div>
          <div className="all-other-prod-price">{otherProd.price}</div>
        </Link>
      ));
    };

    const firstFourProducts = () => {
      return filtered
        .map(otherProd => (
          <Link key={otherProd.id} to={`/products/${otherProd.id}`}>
            <img className="first-four-prod-pics" src={otherProd.photoUrl} />
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
            <h2 className="show-preview-items-text">More items:</h2>
            <h2 className="first-four-prod-container">{firstFourProducts()}</h2>
            <h2 className="total-items">{totalItems} items</h2>
          </div>
        </div>
        <div className="show-bottom-container">
          <div className="show-bottom-left-container">
            <img src={product.photoUrl} className="show-photo" />
            <h2 className="show-description">{product.description}</h2>
            <div className="reviews-container">Reviews</div>
          </div>
          <div className="show-bottom-right-container">
            <h2 className="show-name">{product.product_name}</h2>
            <h2 className="show-price">{product.price}</h2>
            <div className="show-more-from-seller">
              More from {seller.username}
              <div className="all-other-prod-container">
                {allOtherProducts()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
