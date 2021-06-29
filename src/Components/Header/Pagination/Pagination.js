import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  //? Getting correct amount of page numbers
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className="my-4 d-flex justify-content-center"
      aria-label="Page navigation example"
    >
      <ul className="pagination ">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link onClick={() => paginate(number)} className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
