import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct, fetchProducts } from "../../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.productId;
  let product = state.entities.products[productId];
  let products = Object.values(state.entities.products);
  let seller;
  if (!product) {
    seller = null;
  } else {
    seller = state.entities.users[product.user_id];
  }
  return {
    products,
    product,
    seller
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
