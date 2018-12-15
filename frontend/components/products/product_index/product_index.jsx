import React from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products.map((product, i) => {
      return <ProductIndexItem key={i} product={product} />;
    });

    return (
      <div>
        <ul>{products}</ul>
      </div>
    );
  }
}

export default ProductIndex;
