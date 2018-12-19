import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;
    const products = this.props.userProducts;

    const allUserProducts = () => {
      return products.map(prod => (
        <div key={prod.id} className="user-product-container">
          <Link
            key={prod.id}
            to={`/products/${prod.id}`}
            className="user-product-link-to-show-page"
          >
            <div className="user-product-photo-div">
              <img className="user-product-photo" src={prod.photoUrl} />
            </div>
            <div className="user-product-name">{prod.product_name}</div>
            <div className="user-product-price">${prod.price}</div>
            <Link className="update-listing-link" to={`/products/${prod.id}/edit`}>
              Update Product Listing
            </Link>
          </Link>
        </div>
      ));
    };

    if (!user || !products) return <div />;

    return (
      <div className="user-show-page-container">
        <div className="user-details-container">
          <img src={user.photoUrl} />
          <h2 className="header-text">{user.username}</h2>
        </div>
        <div className="user-products-container">{allUserProducts()}</div>
      </div>
    );
  }
}

export default UserShow;
