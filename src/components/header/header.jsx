import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './style.css';

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="navigation">
        <li><Link to="/">Service</Link></li>
        <li><Link to="/why-us">Why Us</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="buttons">
        <button className="secondary">Login</button>
        <button className="primary">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
