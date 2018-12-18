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
        <div key={prod.id} className="entire-other-product">
          <Link key={prod.id} to={`/products/${prod.id}`} className="link-container">
            <div className="all-other-prod-pic-container">
              <img className="all-other-prod-pic" src={prod.photoUrl} />
            </div>
            <div className="all-other-prod-name">{prod.product_name}</div>
            <div className="all-other-prod-price">${prod.price}</div>
          </Link>
        </div>
      ));
    };

    if (!user || !products) return <div />;

    return <div className="whole-user-show-page">{allUserProducts()}</div>;
  }
}

export default UserShow;
