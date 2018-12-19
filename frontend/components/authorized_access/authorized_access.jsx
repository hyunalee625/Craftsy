import React from "react";

const mustBeSignedIn = () => {
  return (
    <div className="sign-in-splash-page">
      <div className="sign-in-splash-text">Please log in to access this page.</div>
      <img
        src="https://res.cloudinary.com/craftsy/image/upload/v1545183788/Profile-Pics/doi.png"
        className="sign-in-splash-emoji"
      />
    </div>
  );
};

export default mustBeSignedIn;
