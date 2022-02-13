import React from "react";
import "./navbar.css";

import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navRight">
        <NavItem />
      </div>
    </div>
  );
};

export default Navbar;
