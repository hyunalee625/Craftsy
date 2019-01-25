import React from "react";
import { withRouter, Link } from "react-router-dom";
import Rating from "react-rating";
import Moment from "react-moment";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateRating(field) {
    return e => {
      this.setState({ [field]: e });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.state);
  }

  deleteButton() {
    return (
      <div>
        <input type="submit" value="Remove Review" onClick={this.handleDelete} />
      </div>
    );
  }

  render() {
    const review = this.state;

    if (!review) return null;

    if (review.user_id === this.props.currentUserId) {
      return (
        <form className="entire-review-container orange-border" onSubmit={this.handleSubmit}>
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
                onChange={this.updateRating("rating")}
              />
            </div>
            <input
              type="text"
              value={review.body}
              onChange={this.update("body")}
              className="review-body-input-field"
            />
            {this.deleteButton()}
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      );
    } else {
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
}

export default withRouter(ReviewIndexItem);
