import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="button button__big" to="/">
        Shop
      </Link>
      <Link className="button button__big" to="/cards">
        Cards
      </Link>
    </div>
  );
};

export default NavBar;
