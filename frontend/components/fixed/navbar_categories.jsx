import React from "react";
import { Link, withRouter } from "react-router-dom";

class NavBarCategories extends React.Component {
  handleClick(searchString) {
    this.props.searchProducts({ query_string: searchString }).then(() =>
      this.props.history.push({
        pathname: "/search",
        search: `${searchString}`
      })
    );
  }

  render() {
    return (
      <div className="categories-container">
        <ul className="category-links-container">
          <Link className="product-category" to="/products">
            All Products
          </Link>
          <li className="product-category" onClick={() => this.handleClick("art")}>
            Art
          </li>
          <li className="product-category" onClick={() => this.handleClick("bag")}>
            Bags & Accessories
          </li>
          <li className="product-category" onClick={() => this.handleClick("fun")}>
            Fun Little Gifts
          </li>
          <li className="product-category" onClick={() => this.handleClick("home")}>
            Home Decor
          </li>
          <li className="product-category" onClick={() => this.handleClick("plant")}>
            Plants
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavBarCategories);
