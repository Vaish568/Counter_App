import React, { Component } from "react";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <spsn className="bage badge-pill badge-secondary">
          {props.totalCounters}
        </spsn>
      </a>
    </nav>
  );
};

export default NavBar;
