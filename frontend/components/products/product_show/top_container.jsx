import React from "react";
import { Link } from "react-router-dom";
import FirstFourProduct from "./first_four_products";

const TopContainer = props => {
  const { totalItems, seller, firstFourProducts } = props;

  // const products = () =>

  return (
    <div className="show-top-container">
      <div className="show-top-left-container">
        <Link className="link-to-user-show" to={`/users/${seller.id}`}>
          <img className="show-profile-pic" src={seller.photoUrl} />
          <h2 className="show-username">{seller.username}</h2>
        </Link>
      </div>

      <div className="show-top-right-container">
        <div className="first-four-prod-container">
          <h2>
            {firstFourProducts.map(product => (
              <FirstFourProduct key={product.id} {...product} />
            ))}
          </h2>

          <Link className="first-four-prod-pic total-items-container" to={`/users/${seller.id}`}>
            <div className="total-items-number">{totalItems}</div>
            <div>item(s)</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
