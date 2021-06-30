import React from "react";
import {
  FaTrashAlt,
  FaQrcode,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const OrderContainer = ({ order }) => {
  const deleteOrder = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Deleted item");
        }
      });
  };

  console.log(order);
  return (
    <div className="col-4 col-sm-5 d-flex justify-content-center">
      <div className="card my-5 p-3" style={{ maxWidth: "20rem" }}>
        <h2 className="text-center">Amazon</h2>

        <div className="card-body">
          <h6 className="card-title">Email: {order.email}</h6>
          <hr />
          <div style={{ height: "200px", overflowY: "scroll" }}>
            <span className="row">
              {order.cartItems.map((items, index) => (
                <p className="d-flex justify-content-between">
                  <small>
                    {index + 1}. {items.title}
                  </small>
                  ${items.price}
                </p>
              ))}
            </span>
            <h6>
              <small className="d-flex justify-content-between">
                <b> Total Price:</b>
                <span>$ {order.totalPrice}</span>
              </small>
            </h6>
            <hr />
          </div>
          <div className="mt-2 text-center">
            <h5>Thank You For Shopping</h5>
            <span style={{ fontSize: "2rem" }}>
              <FaQrcode />
            </span>
            <p>
              {" "}
              <small> {order.paymentId}</small>
            </p>

            <p> follow us on </p>
            <h5>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </h5>
            <button
              onClick={() => deleteOrder(order._id)}
              type="button"
              className="btn  btn-outline-dark row "
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
