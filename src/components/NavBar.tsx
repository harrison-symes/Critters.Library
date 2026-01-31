import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="button" to="/">
        Library
      </Link>
      {" - "}
      <Link className="button" to="/market">
        Market
      </Link>
    </div>
  );
};

export default NavBar;
