import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/choices">Choices</Link>
      <Link to="/Journey">Journey</Link>
      <Link to="/Info">Info</Link>
    </div>
  );
};

export default NavBar;
