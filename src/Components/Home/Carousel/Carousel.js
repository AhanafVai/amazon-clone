//* Imports & Dependencies
import React from "react";
import Banner1 from "../../../Assets/Image/shopping-banner-1.jpg";
import Banner2 from "../../../Assets/Image/shopping-banner-2.jpg";
import Banner3 from "../../../Assets/Image/shopping-banner-3.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      style={{ height: "15rem" }}
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={{ height: "40rem" }}
            src={Banner1}
            className="carousel__img d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ height: "40rem" }}
            src={Banner2}
            className="carousel__img d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ height: "40rem" }}
            src={Banner3}
            className="carousel__img d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;
