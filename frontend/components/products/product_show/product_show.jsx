import React from "react";
import { Link, withRouter } from "react-router-dom";

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    const product = this.props.product;
    const seller = this.props.seller;
    if (!seller) return <div />;

    return (
      <div>
        <img src={product.photoUrl} alt="" />
        <h2>{product.product_name}</h2>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
        <h2>{seller.username}</h2>
        <Link to="/products">Back to all products</Link>
      </div>
    );
  }
}

export default withRouter(ProductShow);
