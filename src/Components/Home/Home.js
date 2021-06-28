//* Imports & Dependencies
import React from "react";
import Products from "../Products/Products";
import Carousel from "./Carousel/Carousel";

const Home = ({ items }) => {
  return (
    <div>
      <Carousel />
      <Products items={items} />
    </div>
  );
};

export default Home;
