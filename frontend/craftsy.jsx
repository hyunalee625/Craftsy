import React from "react";
import ReactDOM from "react-dom";
import * as SessionAPIUtil from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  //for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end testing

  ReactDOM.render(<h1>Welcome to Craftsy!</h1>, root);
});
