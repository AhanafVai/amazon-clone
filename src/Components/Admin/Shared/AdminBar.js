import { Link } from "react-router-dom";
import Logo from "../../../Assets/Image/amazon-logo.png";
import "./AdminBar.css";

const AdminBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img className="header__img mx-3" src={Logo} alt="Amazon" />
          </span>
          <button
            className="btn btn-outline-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Menu
          </button>
          {/* canvas Body */}
          <div
            className="offcanvas offcanvas-start w-40"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header bg-dark">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <img className="header__img mx-3" src={Logo} alt="Amazon" />
              </h5>
              <button
                type="button"
                className="btn-close text-reset bg-warning"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className=" offcanvas-body bg-dark">
              <ul aria-labelledby="dropdownMenuButton">
                <li className="nav-item">
                  <Link
                    className="admin_bar__link dropdown-item nav-link"
                    to="/inventory"
                  >
                    Inventory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="admin_bar__link dropdown-item nav-link"
                    to="/Manager"
                  >
                    Manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="admin_bar__link dropdown-item nav-link"
                    to="/transition"
                  >
                    Transition
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="admin_bar__link dropdown-item nav-link"
                    to="/makeAdmin"
                  >
                    Admins
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminBar;
