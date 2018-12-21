import { connect } from "react-redux";
import { signIn, logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchCartItems } from "../../actions/cart_item_actions";
import { searchProducts } from "../../actions/search_actions";
import NavBar from "./navbar";

const mapStateToProps = ({ session, entities: { users, cart } }) => {
  return {
    currentUser: users[session.id],
    cartItemCount: Object.values(cart).length
  };
};

const mapDispatchToProps = dispatch => {
  const demoUser = { username: "DemoUser", password: "password" };
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    signInDemo: () => dispatch(signIn(demoUser)),
    fetchCartItems: () => dispatch(fetchCartItems()),
    searchProducts: query_string => dispatch(searchProducts(query_string))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
