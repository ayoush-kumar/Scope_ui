import React from "react";
import "./layout.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div>LOGO</div>
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
            <Link to="/contact" className="footer-highlight">Instagram</Link>
            <Link to="/contact" className="footer-highlight">Facebook</Link>
            <Link to="/contact" className="footer-highlight">X</Link>
            
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
    // <footer className="footer">
    //     <div className='footer-col'>
    //     <div>
    //     <div className="footer-logo">
    //     <img src="logo.png" alt="Scope Logo" />
    //     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</p>
    //   </div>
    //     </div>
    //   <div>

    //   <div className="footer-links">
    //     <div className="footer-column">
    //       <h4>About Scope</h4>
    //       <ul>
    //         <li>Products</li>
    //         <li>Trials</li>
    //         <li>Services</li>
    //         <li>Case Studies</li>
    //       </ul>
    //     </div>
    //     <div className="footer-column">
    //       <h4>Connect With Us</h4>
    //       <ul>
    //         <li>Support</li>
    //         <li>Developers</li>
    //         <li>Business Partners</li>
    //       </ul>
    //     </div>
    //     <div className="footer-column">
    //       <h4>Follow Us</h4>
    //       <ul>
    //         <li>Instagram</li>
    //         <li>Facebook</li>
    //         <li>X</li>
    //       </ul>
    //     </div>
    //   </div>
    //   </div>
    //     </div>

    //   <div className="footer-bottom">
    //     <ul>
    //       <li>Contact</li>
    //       <li>Terms Of Use</li>
    //       <li>Cookie Preferences</li>
    //       <li>Privacy</li>
    //       <li>Accessibility</li>
    //     </ul>
    //   </div>
    // </footer>
  );
};

export default Footer;
