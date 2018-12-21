import SearchIndex from "./search_index";
import { connect } from "react-redux";
import { searchProducts } from "../../actions/search_actions";
import { fetchProduct } from "../../actions/product_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
  products: Object.values(state.entities.products),
  sellers: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  searchProducts: queryString => dispatch(searchProducts(queryString)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
