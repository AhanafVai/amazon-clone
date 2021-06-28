import React from "react";
import { useCart } from "react-use-cart";

const ReviewItems = () => {
  //? useCart Properties
  const { items } = useCart();
  return (
    <>
      {items.map((item) => {
        return (
          <>
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
          </>
        );
      })}
    </>
  );
};

export default ReviewItems;
