import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//for testing
import * as sessionActions from "./actions/session_actions";
//end testing

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  //for testing
  window.login = sessionActions.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end testing

  ReactDOM.render(<Root store={store} />, root);
});
