import Logo from "./Logo/Logo";
import NavbarLinksGroup from "./NavbarLinksGroup/NavbarLinksGroup";
import NavbarSearch from "./NavbarSearch/NavbarSearch";

// import { useState } from "react";
interface NavbarProps {
  items: string[];
}

function Navbar({ items }: NavbarProps) {
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log(items);

  return (
    <>
      {/* <h1>{heading}</h1> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <NavbarLinksGroup />
        <NavbarSearch />
      </nav>
    </>
  );
}

export default Navbar;
