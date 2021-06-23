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
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            style={{ height: "40rem" }}
            src={Banner1}
            class="carousel__img d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            style={{ height: "40rem" }}
            src={Banner2}
            class="carousel__img d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            style={{ height: "40rem" }}
            src={Banner3}
            class="carousel__img d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
