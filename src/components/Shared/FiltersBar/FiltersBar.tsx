import React from "react";
import "./FiltersBar.scss";
import Dropdown from "../Dropdown/Dropdown";

interface ChildComponentProps {
  onFiltersToggle: () => void;
}

function FiltersBar({ onFiltersToggle }: ChildComponentProps) {
  const handleClick = () => {
    onFiltersToggle();
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-between mt-3 col-sm-9">
        <div className="d-flex gap-5 searchbar">
          <h1 className="m-0">All</h1>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="d-flex me-4">
          <button
            className="btn d-flex justify-content-center align-items-center gap-2"
            onClick={handleClick}
          >
            <span>Show Filters</span>
            <i className="bi bi-funnel"></i>
          </button>
          <button className="btn d-flex align-items-center">
            <Dropdown
              dropdownHeading={"Sort By"}
              dropdownItems={["Price", "Name", "Latest"]}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltersBar;
