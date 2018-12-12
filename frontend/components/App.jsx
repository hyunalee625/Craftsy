import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import loginFormContainer from "./session/login_form_container";
import signupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <header>
      <h1>Welcome to Craftsy!</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={loginFormContainer} />
    <Route path="/signup" component={signupFormContainer} />
  </div>
);

export default App;
