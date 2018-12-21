import React from "react";
import SearchIndexItem from "./search_index_item";
import { withRouter } from "react-router-dom";

class SearchIndex extends React.Component {
  componentDidMount() {
    const search = this.props.location.search.slice(1).replace(/%20/g, " ");
    this.props.searchProducts({ query_string: search });
  }

  render() {
    if (!this.props.sellers) return <div />;

    const query = this.props.location.search.slice(1).replace(/%20/g, " ");
    if (!query.replace(/\s/g, "").length) {
      this.props.history.push("/products");
    }

    const products = this.props.products.map(product => {
      return (
        <SearchIndexItem
          key={product.id}
          product={product}
          sellers={this.props.sellers}
          fetchProduct={this.props.fetchProduct}
          fetchUser={this.props.fetchUser}
        />
      );
    });

    return (
      <div className="product-index-container">
        <h1 className="product-index-title">Search results:</h1>
        <ul className="product-index-items">
          {products}
          <li className="filling-empty-space" />
          <li className="filling-empty-space" />
          <li className="filling-empty-space" />
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchIndex);
