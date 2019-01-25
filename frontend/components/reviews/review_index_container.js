import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import {
  fetchReviews,
  createReview,
  updateReview,
  deleteReview,
  removeReviewErrors
} from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";

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
    deleteReview: review => dispatch(deleteReview(review)),
    removeReviewErrors: () => dispatch(removeReviewErrors()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
