import React from "react";
import ProductIndexItem from "../products/product_index/product_index_item";
import CheckIcon from "./homepage_check_icon";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.props
      .fetchProducts()
      .then(() => this.setState({ products: this.shuffleArray(this.props.products).slice(0, 5) }));
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    if (!this.props.sellers) return null;

    const products = this.state.products.map(product => {
      return <ProductIndexItem key={product.id} product={product} sellers={this.props.sellers} />;
    });

    return (
      <div className="homepage-container">
        <div className="handcrafted-text">
          If it’s handcrafted, vintage, custom, or unique, it’s on Craftsy.
        </div>
        <div className="image-cluster-one">
          <img
            src="https://res.cloudinary.com/craftsy/image/upload/v1546404870/Homepage/background-blank-business-301703.jpg"
            className="cluster-large"
          />
          <img
            src="https://res.cloudinary.com/craftsy/image/upload/v1546410460/Homepage/boat-folding-origami-19678.jpg"
            className="cluster-small"
          />
        </div>
        <div className="image-cluster-two">
          <img
            src="https://res.cloudinary.com/craftsy/image/upload/v1546410458/Homepage/analog-analogue-author-997721.jpg"
            className="cluster-small"
          />
          <img
            src="https://res.cloudinary.com/craftsy/image/upload/v1546404879/Homepage/activity-art-art-class-730807.jpg"
            className="cluster-large"
          />
        </div>
        <div className="checkmarks-container">
          <div className="first-checkmark-div">
            <div className="checkmark-div-top">
              <span>
                <CheckIcon />
              </span>
              <span className="check-title">Unique everything</span>
            </div>
            <div className="check-body">
              We have countless one-of-a-kind items, so you can find whatever you need (or really,
              really want).
            </div>
          </div>
          <div className="second-checkmark-div">
            <div className="checkmark-div-top">
              <span>
                <CheckIcon />
              </span>
              <span className="check-title">Independent sellers</span>
            </div>
            <div className="check-body">
              Buy directly from someone who put their heart and soul into making something special.
            </div>
          </div>
          <div className="third-checkmark-div">
            <div className="checkmark-div-top">
              <span>
                <CheckIcon />
              </span>
              <span className="check-title">Secure shopping</span>
            </div>
            <div className="check-body">
              We use best-in-class technology to protect your transactions.
            </div>
          </div>
        </div>
        <h1 className="popular-text">Popular Now</h1>
        <ul className="popular-products">{products}</ul>
      </div>
    );
  }
}

export default HomePage;
