import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.loggedInGreeting = this.loggedInGreeting.bind(this);
    this.greeting = this.greeting.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  sessionLinks() {
    return (
      <div className="sessionLinks">
        <button className="register-button" onClick={() => this.props.openModal("register")}>
          Register
        </button>
        <button className="login-logout-button" onClick={() => this.props.openModal("signIn")}>
          Sign In
        </button>
        <button className="login-logout-button" onClick={() => this.props.signInDemo()}>
          Demo
        </button>
      </div>
    );
  }

  dropDown() {
    document.getElementById("user-dropdown-container").classList.toggle("show");
  }

  loggedInGreeting() {
    return (
      <div className="entire-user-dropdown">
        <button className="clickable-user-button" onClick={this.dropDown}>
          <img
            className="profile-pic"
            src={window.defaultProfilePicURL}
            alt="default profile pic"
          />
          <div className="YOU-container">
            <h3 className="YOU-text">You</h3>
            <h3 className="YOU-triangle">&#9660;</h3>
          </div>
        </button>

        <div id="user-dropdown-container" className="user-dropdown-content">
          <ul>
            <li>Favorites (Coming soon...)</li>
            <li>Conversations (Coming soon...)</li>
            <li>Purchases and reviews (Coming soon...)</li>
            <li>Account settings (Coming soon...)</li>
            <li className="logout-button-text" onClick={this.props.logout}>
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    );
  }

  greeting() {
    return this.props.currentUser ? this.loggedInGreeting() : this.sessionLinks();
  }

  render() {
    return (
      <div className="NavBarContainer">
        <nav className="NavBar">
          <div className="NavBarLeft">
            <Link to="/" className="homepage-link">
              Craftsy
            </Link>
            <Link to="/products" className="all-products-link">
              All Products
            </Link>
            <Link to="/products/new" className="all-products-link">
              Create New Product
            </Link>
          </div>
          <div className="NavBarRight">{this.greeting()}</div>
        </nav>
      </div>
    );
  }
}

window.onclick = function(event) {
  if (
    !event.target.matches(".clickable-user-button") &&
    !event.target.matches(".profile-pic") &&
    !event.target.matches(".YOU-container") &&
    !event.target.matches(".YOU-text") &&
    !event.target.matches(".YOU-triangle")
  ) {
    let dropdowns = document.getElementsByClassName("user-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

export default NavBar;
