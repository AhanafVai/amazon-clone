//* Import
import React from "react";
import GeoLocation from "../GeoLocation/GeoLocation";
import Logo from "../../Assets/Image/amazon-logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <img className="header__img mx-2" src={Logo} alt="Amazon" />
      <GeoLocation />

      <input type="text" className="header__Input" />
      <button className="btn btn-warning">
        <FaSearch className="header__SearchIcon" />
      </button>

      <div className="mx-4 text-white ">
        <p>
          Hello, <br /> Sign In
        </p>
      </div>
      <div className="mx-4 text-white ">
        <h6>Orders </h6>
      </div>

      <div className="text-white d-flex">
        <Link to="/cart">
          <MdAddShoppingCart className="header__cartIcon" />
        </Link>{" "}
        <p>0</p>
      </div>
    </div>
  );
};

export default Header;
