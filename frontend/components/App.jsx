import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import loginFormContainer from "./session/login_form_container";
import registerFormContainer from "./session/register_form_container";

const App = () => (
  <div>
    <header>
      <h1>Craftsy</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={loginFormContainer} />
      <AuthRoute path="/signup" component={registerFormContainer} />
    </Switch>
  </div>
);

export default App;
