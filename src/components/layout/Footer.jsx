import React from "react";
import "./layout.css";
import { Link } from 'react-router-dom';

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import FooterLogo from './footer_logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div
         className="footer-logo"
        >
          <img src={FooterLogo} alt="footer-logo"/>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus quod omnis minima qui d
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <div className="footer-column-items">
            <h4>About Scope</h4>
            <Link to="/contact" className="footer-highlight">Products</Link>
            <Link to="/contact" className="footer-highlight">Trials</Link>
            <Link to="/contact" className="footer-highlight">Services</Link>
            <Link to="/contact" className="footer-highlight">Case Studies</Link>
          </div>
          <div className="footer-column-items">
            <h4>Connect With Us</h4>
            <Link to="/contact" className="footer-highlight">Support</Link>
            <Link to="/contact" className="footer-highlight">Developers</Link>
            <Link to="/contact" className="footer-highlight">Business Partners</Link>
          </div>
          <div className="footer-column-items">
            <h4>Follow Us</h4>
            <Link to="/contact" className="footer-highlight">

            <FaInstagram style={{ marginRight: "10px" }} />
              Instagram</Link>
            <Link to="/contact" className="footer-highlight">
              <FaFacebook style={{ marginRight: "10px" }} />
              Facebook
              </Link>
            <Link to="/contact" className="footer-highlight">
            <FaTwitter style={{ marginRight: "10px" }} />
              X
            </Link>
            
          </div>
        </div>

        <div className="footer-bottom">
        <Link to="/contact" className="footer-highlight">Contact</Link>
        <Link to="/contact" className="footer-highlight">Terms Of Use</Link>
        <Link to="/contact" className="footer-highlight">Cookie Preferences</Link>
        <Link to="/contact" className="footer-highlight">Privacy</Link>
        <Link to="/contact" className="footer-highlight">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
