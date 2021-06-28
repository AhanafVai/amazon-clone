import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Subtotal = () => {
  //? useCart properties
  const { totalItems, cartTotal } = useCart();

  return (
    <div className="col-md-3">
      <div className="card cart__Review">
        <div className="card-body">
          <h5 className="card-title">
            Subtotal (Items:{totalItems}) :{cartTotal}{" "}
          </h5>

          <Link to="/checkout" className="btn btn-warning mt-4">
            {" "}
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
