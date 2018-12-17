import React from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (!this.props.sellers) return <div />;

    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={product.id}
          product={product}
          sellers={this.props.sellers}
        />
      );
    });

    return (
      <div className="product-index-container">
        <h1 className="product-index-title">All Products</h1>
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

export default ProductIndex;
