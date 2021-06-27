import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./Cart.css";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <h1>
        No items to show in cart. <Link to="/">Start adding some.</Link>{" "}
      </h1>
    );
  return (
    <div className="d-flex ">
      <div className="col-md-8">
        <div className="cart__ItemContainer">
          <h2>Shopping Cart</h2>
          <hr />
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
                  <br />
                  <p>{item.category}</p>
                  <br />
                  <h5>Item Total: {item.itemTotal} </h5>

                  <div className="input-group d-flex">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      class="btn btn-secondary"
                      type="button"
                    >
                      +
                    </button>
                    <input
                      className="cart__QtnInput"
                      type="text"
                      value={item.quantity}
                    />

                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      class="btn btn-secondary"
                      type="button"
                    >
                      -
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      class="btn btn-danger ms-3"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
    </div>
  );
};

export default Cart;
