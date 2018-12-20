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
import { ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <div>
      <Switch>
        <ProtectedRoute exact path="/cart" component={CartIndexContainer} />
        <Route exact path="/products" component={ProductIndexContainer} />
        <ProtectedRoute exact path="/products/new" component={CreateProductFormContainer} />
        <Route exact path="/products/:productId" component={ProductShowContainer} />
        <ProtectedRoute
          exact
          path="/products/:productId/edit"
          component={EditProductFormContainer}
        />
        <Route exact path="/users/:userId" component={UserShowContainer} />
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
