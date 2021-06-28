//* Import
import React from "react";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import Signup from "./Components/Authentication/Signup/Signup";
import Login from "./Components/Authentication/Login/Login";
import PrivateRoute from "./Components/Authentication/Private/PrivateRoute";
import Checkout from "./Components/Checkout/Checkout";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "./Components/Context/AuthProvider";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/inventory" component={Inventory} />
            <PrivateRoute exact path="/checkout" component={Checkout} />
            <PrivateRoute exact path="/orders" component={Orders} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </CartProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
