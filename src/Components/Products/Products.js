//* Imports & Dependencies
import React from "react";
import Product from "./Product/Product";

const Products = ({ items }) => {
  //? Loading process
  if (!items)
    return (
      <div className="d-flex justify-content-center">
        <span className="spinner-border text-light" role="status"></span>
      </div>
    );
  return (
    <div className="row mx-auto">
      {items.map((item) => (
        <Product key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Products;
