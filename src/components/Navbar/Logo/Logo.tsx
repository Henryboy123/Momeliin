import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Logo = () => {
  return (
    <Link className="navbar-brand" aria-current="page" to="/">
      <img
        src="MomelinLogo.png"
        alt="Momelin"
        style={{ width: "156px", height: "76px" }}
      />
    </Link>
  );
};

export default Logo;
