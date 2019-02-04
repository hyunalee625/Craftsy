import React from "react";
import { Link } from "react-router-dom";

const FirstFourProduct = props => {
  const { id, photoUrl } = props;

  return (
    <Link key={id} to={`/products/${id}`} className="individual-first-four-prod-pic-container">
      <img className="first-four-prod-pic" src={photoUrl} />
    </Link>
  );
};

export default FirstFourProduct;
