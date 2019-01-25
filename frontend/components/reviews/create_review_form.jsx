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
    // this.setState({ body: "", rating: 0 });
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
          <div className="left-side-form">
            <div className="form-title">Write a Review</div>
            <label>
              <div className="label-text">Comments:</div>
              <input type="text" onChange={this.update("body")} />
            </label>
            <label>
              <div className="label-text">Rating:</div>
              <Rating
                className="review-details-bottom review-rating"
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initialRating={this.state.rating}
                onChange={this.updateRating("rating")}
              />
            </label>
            <input className="submit-button" type="submit" value="Submit" />
            <ul>{errors()}</ul>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReviewForm);
