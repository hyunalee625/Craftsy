import React from "react";
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
  render() {
    const review = this.props.review;

    if (!review) return null;

    return (
      <Link to={`/users/${review.user_id}`} className="review-index-item">
        <img src={review.userPhoto} className="review-left-container review-user-photo" />
        <div className="review-right-container">
          <div className="review-details-container">
            <div className="review-details-top">
              <div className="review-username">{review.username}</div>
              <div className="review-date">{review.updated_at}</div>
            </div>
            <div className="review-details-bottom review-rating">{review.rating}</div>
          </div>
          <div className="review-body">{review.body}</div>
        </div>
      </Link>
    );
  }
}

export default ReviewIndexItem;
