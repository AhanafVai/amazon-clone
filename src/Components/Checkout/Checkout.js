//* Imports & Dependencies
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import DeliveryLocation from "../GeoLocation/DeliveryLocation";
import ProcessPayment from "../Payment/ProcessPayment";
import ReviewItems from "./Review/ReviewItems";
import "./Checkout.css";

const Checkout = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="checkout__Container">
        <h2 className="text-center">Checkout</h2>
        <hr />
        {/* Delivery Location Section */}
        <h4>Delivery Address</h4>
        Email: {currentUser.email}
        <DeliveryLocation />
        <hr />
        {/* Review Items Section */}
        <h4>Review Items</h4>
        <ReviewItems />
        <hr />
        {/* Payment Section */}
        <h4>Payment</h4>
        <ProcessPayment />
      </div>
    </div>
  );
};

export default Checkout;
