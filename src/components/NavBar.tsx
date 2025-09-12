import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="button button__big" to="/">
        Cards
      </Link>
      <Link className="button button__big" to="/shop">
        Shop
      </Link>
    </div>
  );
};

export default NavBar;
