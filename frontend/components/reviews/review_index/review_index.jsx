import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";
import Rating from "react-rating";

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
        />
      );
    });

    return (
      <div className="review-index-container">
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
