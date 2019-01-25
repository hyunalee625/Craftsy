import React from "react";
import { withRouter, Link } from "react-router-dom";
import Rating from "react-rating";

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      rating: 0,
      user_id: this.props.currentUserId || null,
      product_id: parseInt(this.props.match.params.productId)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.createReview(this.state);
  }

  render() {
    const errors = () =>
      this.props.errors.map((error, i) => (
        <li className="errorMessage" key={i}>
          {error}
        </li>
      ));

    return (
      <div className="review-form-container">
        <form className="entire-review-form" onSubmit={this.handleSubmit}>
          <div className="review-prompt">Review this product</div>
          <label>
            <textarea className="review-body-text" rows="4" onChange={this.update("body")} />
          </label>
          <div className="review-form-bottom-container">
            <label className="review-form-bottom">
              <span className="rating-text">Rating:</span>
              <Rating
                className="review-rating rating-stars"
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initialRating={this.state.rating}
                onChange={this.updateRating("rating")}
              />
            </label>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
          <ul>{errors()}</ul>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReviewForm);
