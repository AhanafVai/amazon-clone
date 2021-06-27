//* Import
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";
import Signup from "./Components/Authentication/Signup/Signup";
import Login from "./Components/Authentication/Login/Login";
import { AuthProvider } from "./Components/Context/AuthProvider";
import PrivateRoute from "./Components/Authentication/Private/PrivateRoute";
import Checkout from "./Components/Payment/Checkout";
import Orders from "./Components/Orders/Orders";

function App() {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </CartProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
