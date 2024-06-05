import Logo from "./Logo/Logo";
import NavbarLinksGroup from "./NavbarLinksGroup/NavbarLinksGroup";
import "./Navbar.scss";
import NavbarUtils from "./NavbarUtils/NavbarUtils";

function Navbar() {
  return (
    <>
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
        <NavbarUtils />
      </nav>
    </>
  );
}

export default Navbar;
