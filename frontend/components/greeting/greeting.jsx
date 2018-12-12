import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h3>Welcome, {this.props.currentUser.username}</h3>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <br />
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default Greeting;
