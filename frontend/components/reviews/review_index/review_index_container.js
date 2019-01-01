import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews } from "../../../actions/review_actions";

const mapStateToProps = state => {
  return {
    reviews: Object.values(state.entities.reviews)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: productId => dispatch(fetchReviews(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
