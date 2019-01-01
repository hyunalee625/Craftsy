import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBarContainer from "./fixed/navbar_container";
import Footer from "./fixed/footer";
import Modal from "./modal/modal";
import ProductIndexContainer from "./products/product_index/product_index_container";
import ProductShowContainer from "./products/product_show/product_show_container";
import CreateProductFormContainer from "./products/product_form/create_product_form_container";
import EditProductFormContainer from "./products/product_form/edit_product_form_container";
import UserShowContainer from "./users/user_show_container";
import CartIndexContainer from "./cart/cart_index_container";
import SearchIndexContainer from "./search/search_index_container";
import { ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="whole-page">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <div className="main-content">
      <Switch>
        <ProtectedRoute exact path="/products/new" component={CreateProductFormContainer} />
        <ProtectedRoute
          exact
          path="/products/:productId/edit"
          component={EditProductFormContainer}
        />
        <Route exact path="/products/:productId" component={ProductShowContainer} />
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path="/search" component={SearchIndexContainer} />
        <ProtectedRoute exact path="/cart" component={CartIndexContainer} />
        <Route exact path="/" />
        <Redirect to="/" />
      </Switch>
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
