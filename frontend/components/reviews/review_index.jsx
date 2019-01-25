import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";
import Rating from "react-rating";
import CreateReviewForm from "./create_review_form";

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.productId);
  }

  averageRating() {
    let totalRating = 0;
    let numReviews = 0;

    this.props.reviews.map(review => {
      totalRating += review.rating;
      numReviews += 1;
    });

    return totalRating / numReviews;
  }

  newReviewForm() {
    let reviewAlreadyWritten = false;

    this.props.reviews.forEach(review => {
      if (review.user_id === this.props.currentUserId) {
        reviewAlreadyWritten = true;
      }
    });

    if (reviewAlreadyWritten) {
      return null;
    } else if (!this.props.currentUserId) {
      return <div className="review-log-in">Log in to leave a review.</div>;
    } else {
      return (
        <CreateReviewForm
          currentUserId={this.props.currentUserId}
          createReview={this.props.createReview}
          removeReviewErrors={this.props.removeReviewErrors}
          errors={this.props.errors}
        />
      );
    }
  }

  render() {
    if (!this.props.reviews) return null;

    const reviews = this.props.reviews.map(review => {
      return (
        <ReviewIndexItem
          key={review.id}
          review={review}
          productId={review.product_id}
          currentUserId={this.props.currentUserId}
          updateReview={this.props.updateReview}
          deleteReview={this.props.deleteReview}
          removeReviewErrors={this.props.removeReviewErrors}
          errors={this.props.errors}
        />
      );
    });

    reviews.forEach((review, i) => {
      if (review.props.review.user_id === this.props.currentUserId) {
        reviews.splice(i, 1);
        reviews.unshift(review);
      }
    });

    return (
      <div className="review-index-container">
        <div className="new-review">{this.newReviewForm()}</div>
        <div className="review-header">
          <h1 className="review-index-title">Reviews</h1>
          <Rating
            className="average-review-rating"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={this.averageRating()}
            readonly
          />
          <div className="num-reviews">({reviews.length})</div>
        </div>
        <ul className="review-index-items">{reviews}</ul>
      </div>
    );
  }
}

export default withRouter(ReviewIndex);
