//* Imports & Dependencies
import React from "react";
import { useCart } from "react-use-cart";

const Product = (props) => {
  const { title, image, price, category } = props.item;
  const { addItem } = useCart(); //? Helps adding item to cart

  return (
    <div className=" col-md-3 d-flex justify-content-center ">
      <div className="card m-3 p-4" style={{ width: "20rem", height: "30rem" }}>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
        </div>
        <img
          style={{ width: "10rem", height: "10rem" }}
          src={image}
          className="card-img-top mx-auto"
          alt="img"
        />
        <div className=" pt-5 card-body d-flex justify-content-between">
          <h5 className=" card-title">${price}</h5>
          <p className="card-title">{category}</p>
        </div>
        <button className="btn btn-warning" onClick={() => addItem(props.item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
