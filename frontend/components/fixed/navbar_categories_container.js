import { connect } from "react-redux";
import NavBarCategories from "./navbar_categories";
import { searchProducts } from "../../actions/search_actions";

const mapDispatchToProps = dispatch => ({
  searchProducts: queryString => dispatch(searchProducts(queryString))
});

export default connect(
  null,
  mapDispatchToProps
)(NavBarCategories);
