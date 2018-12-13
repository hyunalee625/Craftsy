import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBarContainer from "./fixed/navbar_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
