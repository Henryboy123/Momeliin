import { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  dropdownHeading: string;
  dropdownItems: string[];
}

const Dropdown = ({ dropdownHeading, dropdownItems }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <a
        className="nav-link d-flex gap-2"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleToggle}
      >
        {dropdownHeading}
        <i className={"bi bi-chevron-" + (isDropdownOpen ? "up" : "down")}></i>
      </a>
      <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        {dropdownItems.map((item, index) => {
          return (
            <li key={index}>
              <a className="dropdown-item" href="#" onClick={handleToggle}>
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
