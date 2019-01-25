import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import {
  fetchReviews,
  createReview,
  updateReview,
  deleteReview
} from "../../actions/review_actions";

const mapStateToProps = state => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUserId: parseInt(state.session.id),
    errors: state.errors.review
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: productId => dispatch(fetchReviews(productId)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: review => dispatch(deleteReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
