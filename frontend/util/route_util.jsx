import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { openModal } from "../actions/modal_actions";
import MustBeSignedIn from "../components/authorized_access/authorized_access";

const Auth = ({ component: Component, path, exact, loggedIn }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (!loggedIn ? <Component {...props} /> : <Redirect to="/products" />)}
  />
);

const Protected = ({ component: Component, path, loggedIn, exact, openSignInModal }) => (
  <Route
    path={path}
    exact={exact}
    render={props => {
      if (loggedIn) {
        return <Component {...props} />;
      } else {
        openSignInModal();
        return <MustBeSignedIn />;
      }
    }}
  />
);

const OwnerOnly = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => {
      if (loggedIn) {
        return <Component {...props} />;
      } else {
        openSignInModal();
        return <MustBeSignedIn />;
      }
    }}
  />
);

// const isOwner = (state, productId) => {
//   if (!state.session.currentUser) return false;

//   return state.session.currentUser.productIds.includes(productId);
// };

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
    // isOwner: isOwner(state, ownProps.computedMatch.params.productId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSignInModal: () => dispatch(openModal("signIn"))
  };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Protected)
);
