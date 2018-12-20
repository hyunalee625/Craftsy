import { connect } from "react-redux";
import CartIndex from "./cart_index";
import { fetchCartItems, updateCartItem, deleteCartItem } from "../../actions/cart_item_actions";

const mapStateToProps = state => {
  return {
    items: Object.values(state.entities.cart),
    products: state.entities.products,
    sellers: state.entities.users,
    buyer: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: id => dispatch(deleteCartItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex);
