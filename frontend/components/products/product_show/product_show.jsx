import React from "react";
import { Link, withRouter } from "react-router-dom";

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    if (!this.props.sellerName) return <div />;
    return (
      <div>
        <h2>{this.props.product.product_name}</h2>
        <h2>{this.props.product.description}</h2>
        <h2>{this.props.product.price}</h2>
        <h2>{this.props.sellerName}</h2>
        <Link to="/products">Back to all products</Link>
      </div>
    );
  }
}

export default withRouter(ProductShow);
