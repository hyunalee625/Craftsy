import React from "react";
import { Link, withRouter } from "react-router-dom";
import CartIcon from "./navbar_cart_icon";
import ShopIcon from "./navbar_shop_icon";
import NavBarCategoriesContainer from "./navbar_categories_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query_string: "" };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.loggedInGreeting = this.loggedInGreeting.bind(this);
    this.greeting = this.greeting.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchProducts(this.state).then(() => {
      this.props.history.push({ pathname: "/search", search: `${this.state.query_string}` });
      this.setState({ query_string: "" });
    });
  }

  update() {
    return e => {
      this.setState({ ["query_string"]: e.target.value });
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchCartItems();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser && !prevProps.currentUser) {
      this.props.fetchCartItems();
    }
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
      <div className="entire-greeting-container">
        <Link to={`/users/${this.props.currentUser.id}`} className="shop-icon-container">
          <ShopIcon className="shop-icon" />
          <p className="icon-text">Shop Manager</p>
        </Link>
        <div className="entire-user-dropdown">
          <button className="clickable-user-button" onClick={this.dropDown}>
            <img
              className="profile-pic"
              src={this.props.currentUser.photoUrl}
              alt="default profile pic"
            />
            <div className="YOU-container">
              <h3 className="YOU-text">You</h3>
              <h3 className="YOU-triangle">&#9660;</h3>
            </div>
          </button>

          <div id="user-dropdown-container" className="user-dropdown-content">
            <ul>
              <li className="logout-button-text" onClick={this.props.logout}>
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  searchBar() {
    return (
      <div className="search-bar-container">
        <form className="search-bar-form" onSubmit={this.handleSubmit}>
          <input
            className="search-bar-input-field"
            type="text"
            placeholder="Search for products"
            value={this.state.query_string}
            onChange={this.update()}
          />
          <input type="submit" className="search-submit-button" value="Search" />
        </form>
      </div>
    );
  }

  greeting() {
    return this.props.currentUser ? this.loggedInGreeting() : this.sessionLinks();
  }

  itemCount() {
    if (this.props.cartItemCount === 0) {
      return null;
    } else {
      return <span className="cart-item-count">{this.props.cartItemCount}</span>;
    }
  }

  render() {
    return (
      <div className="NavBarContainer">
        <nav className="NavBar">
          <div className="NavBarLeft">
            <Link to="/" className="homepage-link">
              Craftsy
            </Link>
            {this.searchBar()}
          </div>
          <div className="NavBarRight">
            {this.greeting()}
            <Link to="/cart" className="cart-icon-container">
              <div>
                {" "}
                {this.itemCount()}
                <CartIcon />
              </div>
              <p className="icon-text">Cart</p>
            </Link>
          </div>
        </nav>
        <div className="line" />
        <nav className="Categories">
          <NavBarCategoriesContainer />
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

export default withRouter(NavBar);
