import React from "react";
import { Link } from "react-router-dom";

const OtherProduct = props => {
  const { id, photoUrl, product_name, price } = props;

  return (
    <div className="entire-other-product">
      <Link to={`/products/${id}`} className="link-container">
        <div className="all-other-prod-pic-container">
          <img className="all-other-prod-pic" src={photoUrl} />
        </div>
        <div className="all-other-prod-name">{product_name}</div>
        <div className="all-other-prod-price">${price}</div>
      </Link>
    </div>
  );
};

export default OtherProduct;
