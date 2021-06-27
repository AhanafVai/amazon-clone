import React from "react";
import { FaQrcode, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const OrderContainer = ({ order }) => {
  return (
    <div
      className="card text-dark bg-light mb-3 mx-auto mt-5"
      style={{ maxWidth: "20rem", height: "30rem" }}
    >
      <div className="card-header">
        <h2 className="text-center">Amazon</h2>
      </div>
      <div className="card-body">
        <div className="border-bottom border-2 mb-2">
          <h6 className="card-title">Email: {order.email}</h6>
        </div>
        <div className="border-bottom border-2 ">
          <h6>
            <small className="d-flex justify-content-between">
              <span> Product:</span> <span>{order.title}</span>
              <span> </span> <span> $ {order.price}</span>
            </small>
          </h6>
          <h6>
            <small className="d-flex justify-content-between">
              <span> Total: $</span>
              <span>{order.totalPrice}</span>
            </small>
          </h6>
        </div>
        <div className="mt-2 text-center">
          <h4>Thank You For Shopping</h4>
          <span style={{ fontSize: "3rem" }}>
            <FaQrcode />
          </span>
          <p>PaymentId: {order.paymentId}</p>

          <p> follow us on </p>
          <h4>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
