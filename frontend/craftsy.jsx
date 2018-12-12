import React from "react";
import ReactDOM from "react-dom";
import * as SessionAPIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  //for testing
  window.signup = SessionAPIUtil.signup;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  //end testing
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Craftsy!</h1>, root);
});
