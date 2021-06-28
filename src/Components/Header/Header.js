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
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <img className="header__img mx-3" src={Logo} alt="Amazon" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-link nav-item p-3">
                <GeoLocation />
              </li>
              <li class="d-flex nav-item ">
                <div style={{ padding: "8px" }} class="input-group">
                  <button
                    class="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item">women's clothing</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item">men's clothing</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item">electronics</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item">jewelery</Link>
                    </li>
                  </ul>
                  <input
                    type="text"
                    style={{ width: "45rem" }}
                    class="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <button className="btn btn-warning">
                    <FaSearch className="header__SearchIcon" />
                  </button>
                </div>
              </li>

              <li class="nav-item nav-link">
                {!currentUser ? (
                  <Link to="/login" className="nav-item nav-link">
                    Hello Login
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
              </li>
              <li class="nav-item nav-link">
                <Link to="/orders" className="nav-link">
                  <span>Orders </span>
                </Link>
              </li>
              <li class="nav-item nav-link">
                <Link to="/cart" className="nav-link">
                  <MdAddShoppingCart className="header__cartIcon" />
                  <b> {totalUniqueItems} </b>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
