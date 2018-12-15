import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProducts, fetchProduct } from "../../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.productId;
  let product = state.entities.products[productId];
  return {
    product: product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
