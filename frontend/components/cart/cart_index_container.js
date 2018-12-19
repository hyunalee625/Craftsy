import { connect } from "react-redux";
import CartIndex from "./cart_index";
import { fetchCartItems } from "../../actions/cart_item_actions";

const mapStateToProps = state => {
  return {
    items: Object.values(state.entities.cart),
    products: state.entities.products,
    sellers: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
