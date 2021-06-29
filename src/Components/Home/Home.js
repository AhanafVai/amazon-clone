//* Imports & Dependencies
import React, { useState } from "react";
import Products from "../Products/Products";
import Carousel from "./Carousel/Carousel";
import Pagination from "../Header/Pagination/Pagination";

const Home = ({ filteredItems }) => {
  //? Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);

  //? Get currentPage Products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = filteredItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //? Change Page
  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <Carousel />
      <Products items={currentProduct} />
      <Pagination
        productPerPage={productPerPage}
        totalProducts={filteredItems.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
