import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  let products = Object.values(state.entities.products);
  let user = state.entities.users[ownProps.match.params.userId];
  let userProducts = [];
  products.forEach(prod => {
    if (prod.user_id === user.id) {
      userProducts.push(prod);
    }
  });

  return {
    user,
    userProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
