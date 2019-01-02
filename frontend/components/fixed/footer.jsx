import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">Craftsy</p>
        <h1 className="footer-slogan">We make it easy to find your thing.</h1>
      </div>

      <div className="footer-right">
        <div className="footer-right-top">
          <h1 className="footer-slogan footer-personal-project">Inspired by Etsy.</h1>
        </div>
        <div className="footer-right-bottom">
          <h1 className="footer-name">Peter Zeng</h1>
          <a className="github" target="_blank" href="https://github.com/pzengpzeng/Craftsy">
            <img className="github-icon" src={window.githubIconURL} />
          </a>
          <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/pzengpzeng/">
            <img className="linkedin-icon" src={window.linkedinIconURL} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
