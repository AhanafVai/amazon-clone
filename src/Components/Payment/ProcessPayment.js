import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import SimpleCardForm from "./SimpleCardForm";
import { useCart } from "react-use-cart";

const stripePromise = loadStripe(
  "pk_test_51IeLSeSJgE6xCcepZwfRCe3saaTKyTXiJmcPBDZ5lxQDgubqhmkPpVN5BMPeG7W8FcdugjSHGquw8nXM4BzOhf2100sy1S43Qg"
);

const ProcessPayment = () => {
  const { currentUser } = useContext(AuthContext);
  const { items, cartTotal } = useCart();

  const handelPayment = (paymentId) => {
    const orderDetails = {
      paymentId,
      email: currentUser.email,
      cartItems: items,
      status: "Pending",
      totalPrice: cartTotal,
    };

    fetch("https://hidden-reef-73681.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order in process");
        }
      });
  };

  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handelPayment={handelPayment} />
    </Elements>
  );
};
export default ProcessPayment;
