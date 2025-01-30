import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex space-x-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-purple" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-purple" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-purple" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
