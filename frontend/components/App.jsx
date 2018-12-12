import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./fixed/navbar_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch />
  </div>
);

export default App;
