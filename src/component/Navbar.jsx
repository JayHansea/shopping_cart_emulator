import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Cart
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
