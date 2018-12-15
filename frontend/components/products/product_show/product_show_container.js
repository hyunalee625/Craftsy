import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProducts, fetchProduct } from "../../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.productId;
  let product = state.entities.products[productId];
  let seller;
  if (!product) {
    seller = null;
  } else {
    let user = state.entities.users[product.user_id];
    seller = user.username;
  }
  return {
    product: product,
    seller
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
