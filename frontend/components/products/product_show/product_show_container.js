import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct } from "../../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.productId;
  let product = state.entities.products[productId];
  let sellerName;
  if (!product) {
    sellerName = null;
  } else {
    sellerName = state.entities.users[product.user_id].username;
  }
  return { product, sellerName };
};

const mapDispatchToProps = dispatch => {
  return { fetchProduct: id => dispatch(fetchProduct(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
