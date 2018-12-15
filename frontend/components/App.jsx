import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBarContainer from "./fixed/navbar_container";
import Modal from "./modal/modal";
import ProductIndexContainer from "./products/product_index/product_index_container";
import ProductShowContainer from "./products/product_show/product_show_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route
        exact
        path="/products/:productId"
        component={ProductShowContainer}
      />
      <Route exact path="/" />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
