//* Imports & Dependencies
import React from "react";
import CartItems from "./CartItems/CartItems";
import { useCart } from "react-use-cart"; //? using this for cart management
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal/Subtotal";
import "./Cart.css";

const Cart = () => {
  //? useCart properties
  const { isEmpty } = useCart();

  //? Prevent property of null error if cart is empty
  if (isEmpty)
    return (
      <h1>
        No items to show in cart. <Link to="/">Start adding some.</Link>{" "}
      </h1>
    );

  return (
    <div className="d-flex ">
      {/* CartItem section */}
      <CartItems />
      {/* Subtotal section */}
      <Subtotal />
    </div>
  );
};

export default Cart;
