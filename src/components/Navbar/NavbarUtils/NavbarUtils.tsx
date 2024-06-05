import React from "react";
import "./NavbarUtils.scss";

const NavbarUtils = () => {
  return (
    <div className="container-fluid justify-content-end">
      <button type="button" className="btn position-relative ms-3 me-3">
        <i className="bi bi-cart3 cart-icon"></i>
        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-pill span-text">
          99+
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
    </div>
  );
};

export default NavbarUtils;
