import React, { Component } from "react";
import logo from "../images/aanamashlogo.jpg";
import logoWhite from "../images/salon_logo_ex.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logoWhite} width={180} height={80} alt="Salong logo" />
            </Link>

            <button type="btn" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about_us">About us</Link>
            </li>
            <li>
              <Link to="/contact_us">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
