import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.loggedInGreeting = this.loggedInGreeting.bind(this);
    this.greeting = this.greeting.bind(this);
  }

  sessionLinks() {
    return (
      <div className="sessionLinks">
        <button
          className="register-button"
          onClick={() => this.props.openModal("register")}
        >
          Register
        </button>
        <button
          className="login-logout-button"
          onClick={() => this.props.openModal("signIn")}
        >
          Sign In
        </button>
        <button
          className="login-logout-button"
          onClick={() => this.props.signInDemo()}
        >
          Demo
        </button>
      </div>
    );
  }

  loggedInGreeting() {
    return (
      <div className="greeting-container">
        <div className="welcome-message-container">
          <h3 className="welcome">Hey,</h3>
          <h3 className="username">{this.props.currentUser.username}!</h3>
        </div>
        <button className="login-logout-button" onClick={this.props.logout}>
          <div className="logout-button-text">Sign Out</div>
        </button>
      </div>
    );
  }

  greeting() {
    return this.props.currentUser
      ? this.loggedInGreeting()
      : this.sessionLinks();
  }

  render() {
    return (
      <div className="NavBarContainer">
        <nav className="NavBar">
          <div className="NavBarLeft">
            <Link to="/" className="homepage-link">
              Craftsy
            </Link>
          </div>
          <div className="NavBarRight">{this.greeting()}</div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
