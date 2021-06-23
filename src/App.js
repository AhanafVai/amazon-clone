//* Import
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <CartProvider>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </CartProvider>
      </Switch>
    </Router>
  );
}

export default App;
