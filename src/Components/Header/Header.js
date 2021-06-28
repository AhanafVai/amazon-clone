//* Import
import React, { useCallback, useContext, useState } from "react";
import GeoLocation from "../GeoLocation/GeoLocation";
import Logo from "../../Assets/Image/amazon-logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";
import { AuthContext } from "../Context/AuthProvider";
import app from "../Authentication/firebase";
import { useEffect } from "react";
import Home from "../Home/Home";

import "./Header.css";
const Header = () => {
  const [search, setSearch] = useState(" ");
  const [items, setItems] = useState(null);

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    fetch("http://localhost:5000/getProducts?search=" + search)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [search]);

  const { currentUser } = useContext(AuthContext);
  const { totalUniqueItems } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img className="header__img mx-3" src={Logo} alt="Amazon" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-link nav-item p-3">
                <GeoLocation />
              </li>
              <li className="d-flex nav-item ">
                <div style={{ padding: "8px" }} className="input-group">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item">women's clothing</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">men's clothing</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">electronics</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">jewelery</Link>
                    </li>
                  </ul>

                  <input
                    type="text"
                    style={{ width: "40rem" }}
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-warning">
                    <FaSearch className="header__SearchIcon" />
                  </button>
                </div>
              </li>

              <li className="nav-item nav-link">
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
              <li className="nav-item nav-link">
                <Link to="/orders" className="nav-link">
                  <span>Orders </span>
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/cart" className="nav-link">
                  <MdAddShoppingCart className="header__cartIcon" />
                  <b> {totalUniqueItems} </b>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Home items={items} />
    </>
  );
};

export default Header;
