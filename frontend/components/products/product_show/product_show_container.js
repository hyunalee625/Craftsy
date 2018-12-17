import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct } from "../../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.productId;
  let product = state.entities.products[productId];
  let seller;
  if (!product) {
    seller = null;
  } else {
    seller = state.entities.users[product.user_id];
  }
  return { product, seller };
};

const mapDispatchToProps = dispatch => {
  return { fetchProduct: id => dispatch(fetchProduct(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
