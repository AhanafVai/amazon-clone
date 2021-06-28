//* Imports & Dependencies
import React from "react";
import { useCart } from "react-use-cart";

const CartItems = () => {
  //? useCart properties
  const { items, updateItemQuantity, removeItem } = useCart();

  return (
    <div className="col-md-8">
      <div className="cart__ItemContainer">
        <h2>Shopping Cart</h2>
        <hr />
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex p-2 align-items-center border-bottom"
            >
              <img
                style={{
                  width: "15rem",
                  height: "15rem",
                  padding: "2rem",
                }}
                src={item.image}
                alt="img"
              />
              <div>
                <h3>{item.title}</h3>
                <p>Category: {item.category}</p>
                <br />
                <h5>Price: ${item.itemTotal} </h5>

                <div className="input-group d-flex">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="btn btn-secondary"
                    type="button"
                  >
                    +
                  </button>
                  <input
                    className="cart__QtnInput "
                    type="text"
                    value={item.quantity}
                  />

                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    className="btn btn-secondary"
                    type="button"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="btn btn-danger ms-3"
                    type="button"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;
