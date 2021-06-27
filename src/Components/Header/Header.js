//* Import
import React, { useContext } from "react";
import GeoLocation from "../GeoLocation/GeoLocation";
import Logo from "../../Assets/Image/amazon-logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";
import "./Header.css";
import { AuthContext } from "../Context/AuthProvider";
import app from "../Authentication/firebase";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const { totalUniqueItems } = useCart();
  return (
    <div className="header d-flex align-items-center ">
      <Link to="/">
        <img className="header__img mx-2" src={Logo} alt="Amazon" />
      </Link>

      {/* <GeoLocation /> */}

      <input type="text" className="header__Input" />
      <button className="btn btn-warning">
        <FaSearch className="header__SearchIcon" />
      </button>

      <div className="mx-4 text-white ">
        {!currentUser ? (
          <Link to="/login" className="nav-item nav-link">
            Login
          </Link>
        ) : (
          <div>
            {" "}
            <Link
              className="nav-item nav-link"
              onClick={() => app.auth().signOut()}
            >
              <span>{currentUser.email}</span> Logout{" "}
            </Link>
          </div>
        )}
      </div>
      <Link to="/orders" className="mx-4 text-white nav-link nav-item">
        <span>Orders </span>
      </Link>

      <div className="text-white d-flex">
        <Link to="/cart" className="text-white">
          <MdAddShoppingCart className="header__cartIcon" />
        </Link>{" "}
        <b> {totalUniqueItems} </b>
      </div>
    </div>
  );
};

export default Header;
