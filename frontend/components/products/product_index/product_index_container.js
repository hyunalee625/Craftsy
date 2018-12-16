import { connect } from "react-redux";
import ProductIndex from "./product_index";
import { fetchProducts } from "../../../actions/product_actions";

const mapStateToProps = state => {
  return {
    products: Object.values(state.entities.products),
    sellers: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
