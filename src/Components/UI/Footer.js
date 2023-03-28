import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <Link to="https://www.facebook.com/" target="_blank" rel='noreferrer'>
            <img src={require("../../images/UI/facebook.png")} alt="facebook logo" className="media" />
        </Link>
      
        <Link to="https://www.tiktok.com/" target="_blank" rel='noreferrer'>
            <img src={require("../../images/UI/tik-tok.png")} alt="tiktok logo" className="media" />
        </Link>
      
        <Link to="https://www.twitter.com/" target="_blank" rel='noreferrer'>
            <img src={require("../../images/UI/twitter.png")} alt="twitter logo" className="media" />
        </Link>
      
        <Link to="https://www.instagram.com/" target="_blank" rel='noreferrer'>
            <img src={require("../../images/UI/instagram.png")} alt="instagram logo" className="media" />
        </Link>
    </footer>
  );
};

export default Footer;