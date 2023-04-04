import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navLinks">
        <li className="navTitles"><Link to="/" className="navA">Home</Link></li>
        <li className="navTitles"><Link to="/contact" className="navA">Contact</Link></li>
      </ul>

      <Link to="/" className="logoA" >
        <img className="logo" src={require("../../images/UI/tool-box.png")} alt="toolbox logo" />
      </Link>

      <ul className="navLinks">
        <li className="navTitles"><Link to="/products" className="navA">Tools</Link></li>
        {/* <li className="navTitles"><Link to="/cart" className="navA">Cart</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;