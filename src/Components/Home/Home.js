//* Imports & Dependencies
import React from "react";
import Products from "../Products/Products";
import Carousel from "./Carousel/Carousel";

const Home = ({ filteredItems }) => {
  return (
    <div>
      <Carousel />
      <Products items={filteredItems} />
    </div>
  );
};

export default Home;
