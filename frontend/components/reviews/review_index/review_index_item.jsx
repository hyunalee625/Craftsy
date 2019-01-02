import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import Moment from "react-moment";

class ReviewIndexItem extends React.Component {
  render() {
    const review = this.props.review;

    if (!review) return null;

    return (
      <div className="entire-review-container">
        <Link
          to={`/users/${review.user_id}`}
          className="review-left-container review-user-photo-link"
        >
          <img src={review.userPhoto} className=" review-user-photo" />
        </Link>

        <div className="review-right-container">
          <div className="review-details-container">
            <div className="review-details-top">
              <Link to={`/users/${review.user_id}`} className="review-username-link">
                <div className="review-username">{review.username}</div>
              </Link>
              <Moment className="review-date" format="MMMM D, YYYY">
                {review.updated_at}
              </Moment>
            </div>
            <Rating
              className="review-details-bottom review-rating"
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              initialRating={review.rating}
              readonly
            />
          </div>

          <div className="review-body">{review.body}</div>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
