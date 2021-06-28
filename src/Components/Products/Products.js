//* Imports & Dependencies
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [items, setItems] = useState("");

  const fetchProducts = () => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //? Loading process
  if (!items)
    return (
      <div class="d-flex justify-content-center">
        <span class="spinner-border text-light" role="status"></span>
      </div>
    );
  return (
    <div className="row mx-auto">
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
