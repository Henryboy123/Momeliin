import React from "react";
import Dropdown from "../../Shared/Dropdown/Dropdown";

const NavbarLinksGroup = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item dropdown">
          <Dropdown
            dropdownHeading={"About Us"}
            dropdownItems={["a", "b", "g"]}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinksGroup;
