import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logoA" >
        <img className="logo" src={require("../../images/UI/tool-box.png")} alt="toolbox logo" />
      </Link>

      <ul>
        <li><Link to="/" className="navA">Home</Link></li>
        <li><Link to="/products" className="navA">Tools</Link></li>
        <li><Link to="/contact" className="navA">Contact</Link></li>
        <li><Link to="/cart" className="navA">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;