import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.productId);
  }

  render() {
    if (!this.props.reviews) return null;

    const reviews = this.props.reviews.map(review => {
      return <ReviewIndexItem key={review.id} review={review} />;
    });

    return (
      <div className="review-index-container">
        <h1 className="review-index-title">Reviews</h1>
        <ul className="review-index-items">{reviews}</ul>
      </div>
    );
  }
}

export default withRouter(ReviewIndex);
