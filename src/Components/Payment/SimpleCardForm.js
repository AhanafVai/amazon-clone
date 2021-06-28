import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";

const SimpleCardForm = ({ handelPayment }) => {
  const History = useHistory();
  const { emptyCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess("");
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError("");
      handelPayment(paymentMethod.id);
      emptyCart();
      History.push("/");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br />
        <button className="payment__button" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError} </p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Thanks for choosing us</p>
      )}
    </div>
  );
};

export default SimpleCardForm;
