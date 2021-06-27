import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import DeliveryLocation from "../GeoLocation/DeliveryLocation";
import ProcessPayment from "./ProcessPayment";
import "./Checkout.css";

const Checkout = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    items,

    cartTotal,
  } = useCart();

  return (
    <div className="container">
      <div className="payment__Container">
        <h2 className="text-center">Checkout</h2>
        <hr />
        <h4>Delivery Address</h4>
        Email: {currentUser.email}
        {/* <DeliveryLocation /> */}
        <hr />
        <h4>Review Items</h4>
        {items.map((item) => {
          return (
            <div key={item.id} className="d-flex p-2 align-items-center ">
              <img
                style={{ width: "15rem", height: "15rem", padding: "2rem" }}
                src={item.image}
                alt="img"
              />
              <div className="ms-5">
                <h2>{item.title}</h2>

                <p>{item.category}</p>
                <br />
                <h5>Item Total: $ {item.itemTotal} </h5>
              </div>
            </div>
          );
        })}
        <hr />
        <h4>Payment</h4>
        {items.map((item) => (
          <ProcessPayment key={item.id} item={item} Total={cartTotal} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
