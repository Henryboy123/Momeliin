import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import Dropdown from "../../Shared/Dropdown/Dropdown";
import './NavbarLinksGroup.scss'
const NavbarLinksGroup = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/custom">
            Custom
          </NavLink>
        </li>
        <li className="nav-item dropdown-li">
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
