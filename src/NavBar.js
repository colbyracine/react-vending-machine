import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/VendingMachine") {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location.pathname]);

  return showNavbar ? (
    <main>
      <nav className="NavBar">
        <NavLink to="/sardines">Sardines</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/soda">Soda</NavLink>
      </nav>
    </main>
  ) : null;
};

export default NavBar;
