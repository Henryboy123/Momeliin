import { useState } from "react";

interface DropdownProps {
  dropdownHeading: string;
  dropdownItems: string[];
}

const Dropdown = ({ dropdownHeading, dropdownItems }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleToggle}
      >
        {dropdownHeading}
      </a>
      <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        {dropdownItems.map((item, index) => {
          return (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
