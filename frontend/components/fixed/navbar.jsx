import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  sessionLinks() {
    return (
      <div className="sessionLinks">
        <button
          className="Register"
          onClick={() => this.props.openModal("register")}
        >
          Register
        </button>
        <button
          className="SignIn"
          onClick={() => this.props.openModal("signIn")}
        >
          Sign In
        </button>
        <button className="SignIn" onClick={() => this.props.signInDemo()}>
          Demo
        </button>
      </div>
    );
  }

  loggedInGreeting() {
    return (
      <div>
        <h3>Welcome, {this.props.currentUser.username}</h3>
        <button onClick={this.props.logout}>
          <div className="navbar-logout-button-label">Log Out</div>
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
          <div className="NavBarRight">
            {this.greeting()}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
