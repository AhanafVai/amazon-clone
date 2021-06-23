import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

  if (!items) return <h1>...Loading</h1>;
  return (
    <div className="  row ">
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
