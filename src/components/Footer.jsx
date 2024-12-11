import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <Link to="/" className="logo">PRAE</Link>
          <div className="footer-content">
            <div className="link-list program-list">
              <h4>Our Programs</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/childcare-support">Childcare Support</Link>
                </li>
                <li>
                  <Link to="/educational-programs">Educational Programs</Link>
                </li>
                <li>
                  <Link to="/financial-assistance">Financial Assistance</Link>
                </li>
                <li>
                  <Link to="/health-advocacy">Health Advocacy</Link>
                </li>
              </ul>
            </div>
            <div className="link-list">
              <h4>About</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/about">Our Mission</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="link-list social-list">
              <h4>Follow Us</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF className="icon" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram className="icon" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="icon" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedin className="icon" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-list connect-list">
              <h4>Connect With Us</h4>
              <ul className="footer-links">
                <li>
                  <a href="tel:+123456789">
                    <FaPhone className="icon" />
                    <span>+0123456789</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@prae.org">
                    <FaEnvelope className="icon" />
                    <span>contact@prae.org</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaMapMarkerAlt className="icon" />
                    <span>1234 Hope Lane, Suite 101</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <span>© 2024 PRAE. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
