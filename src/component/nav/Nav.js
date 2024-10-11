import classNames from "classnames";
import "../nav/Nav.css";
import { useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const { setFilter, cartItemsNumber } = useContext(ProductContext);
  const [filtertxt, setFilterTxt] = useState("");
  const navigate = useNavigate();

  function filtertxt_onChange(event) {
    setFilterTxt(event.target.value);
  }

  function search() {
    setFilter(filtertxt);
    navigate("/product");
  }

  return (
    <>
      <nav className={classNames("navbar", "navbar-expand-lg", "sticky-top")}>
        <div className="container-fluid">
          <div className="col-sm-2 d-flex justify-content-center">
            <Link class="navbar-brand" to="/">
              <div className="nav-logo">
                <span className="text-light text-start logo-txt">
                  E-commerce
                </span>
              </div>
            </Link>
          </div>
          <div
            className="col"
            style={{ flexGrow: "3", paddingLeft: "3px", marginRight: "5px" }}
          >
            <div className={classNames("d-flex", "flex-grow-1", "my-2")}>
              <input
                className={classNames("form-control", "me-2", "search_field")}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={filtertxt_onChange}
              />
              <button
                className={classNames("btn", "btn_search", "m-end-2")}
                onClick={search}
              >
                SEARCH
              </button>
            </div>
          </div>
          <div
            className={classNames(
              "col-sm",
              "col-md",
              "d-flex",
              "justify-content-end"
            )}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className={classNames("navbar-toggler-icon")}></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header custom-offcanvas-header">
                <h5
                  className="offcanvas-title text-light"
                  id="offcanvasNavbarLabel"
                >
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul
                  className={classNames(
                    "navbar-nav",
                    "justify-content-end",
                    "flex-grow-1",
                    "pe-3"
                  )}
                >
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={classNames("nav-link", "nav_link")}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={classNames("nav-link", "nav_link")}
                      to="/product"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={classNames("nav-link", "nav_link")}
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={classNames("nav-link", "nav_link")}
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={classNames("nav-link", "nav_link")}
                      to="/cart"
                    >
                      <i className="fas fa-shopping-cart cart-icon"></i>
                      <span class="position-absolute   translate-middle badge rounded-pill bg-success">
                        {cartItemsNumber}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
