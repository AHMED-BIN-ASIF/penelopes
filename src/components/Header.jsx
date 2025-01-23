import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import ImageSlider from "../ui/ImageSlider";
import Brand from "../assets/images/logoHome.png";
import About1 from "../assets/images/about-img.webp";
import About2 from "../assets/images/carwash.jpg";
import About3 from "../assets/images//program-img.jpg";
import Program1 from "../assets/images/community.jpg";
import Program2 from "../assets/images/event-img-3.webp";
import Program3 from "../assets/images/emotional.jpg";
import Program4 from "../assets/images/research.jpg";
import Program5 from "../assets/images/donate122.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const AboutImages = [About1, About2, About3];
  return (
    <header className="header">
      <div className="header-inner">
        <div className="container">
          <Link className="logo" to="/">
            <img src={Brand} alt="brand" />
          </Link>
          <div
            className={`toggle-btn ${menuOpen ? "toggle-open" : ""}`}
            onClick={toggleMenu}
          ></div>
          <nav className={menuOpen ? "nav nav-show" : "nav"}>
            <ul>
              {/* About Us Dropdown */}
              <li>
                <div className="nav-dropdown">
                  <Link to="/about" className="nav-dropdown-trigger">
                    <span className="nav-link-item">About Us</span>
                  </Link>
                  <div className="dropdown-body">
                    <div className="container">
                      <div className="dd-inner">
                        <div className="dd-col-left">
                          <div className="dd-col-content">
                            <ul className="dd-block-mb">
                              <li>
                                <Link to="/about" className="dd-link head">
                                  About Us
                                </Link>
                              </li>
                              <li>
                                <Link to="/about#mission" className="dd-link">
                                  Our Mission
                                </Link>
                              </li>
                              <li>
                                <Link to="/about#team" className="dd-link">
                                  Our Team
                                </Link>
                              </li>
                              <li>
                                <Link to="/about#impact" className="dd-link">
                                  Our Impact
                                </Link>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <Link to="/contact" className="dd-link head">
                                  Contact Us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/contact#locations"
                                  className="dd-link"
                                >
                                  Our Locations
                                </Link>
                              </li>
                              <li>
                                <Link to="/contact#support" className="dd-link">
                                  Support Center
                                </Link>
                              </li>
                              
                            </ul>
                            <ul>
                              <li>
                                <Link to="/" className="dd-link head">
                                  FAQs
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="dd-link">
                                  General Questions
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="dd-link">
                                  Support Questions
                                </Link>
                              </li>
                              
                            </ul>
                          </div>
                          <div className="dd-btn-grp">
                            <Link to="/" className="secondry-btn">
                              Subscribe Now
                            </Link>
                          </div>
                        </div>
                        <div className="dd-col">
                          <ImageSlider images={AboutImages} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Our Programs Dropdown */}
              <li>
                <div className="nav-dropdown">
                  <Link to="/programs" className="nav-dropdown-trigger">
                    <span className="nav-link-item">Our Programs</span>
                  </Link>
                  <div className="dropdown-body">
                    <div className="container">
                      <div className="dd-inner dd-programs">
                        <Link to="/programs" className="dd-link head">
                          <div className="dd-img-wrapper">
                            <img src={Program1} alt="program" />
                          </div>
                          <span>Community Engagement & Awareness</span>
                        </Link>
                        <Link to="/programs" className="dd-link head">
                          <div className="dd-img-wrapper">
                            <img src={Program2} alt="program" />
                          </div>
                          <span>Fundraising Initiatives</span>
                        </Link>
                        <Link to="/programs" className="dd-link head">
                          <div className="dd-img-wrapper">
                            <img src={Program3} alt="program" />
                          </div>
                          <span>Penelope's Support Squad</span>
                        </Link>
                        <Link to="/programs" className="dd-link head">
                          <div className="dd-img-wrapper">
                            <img src={Program4} alt="program" />
                          </div>
                          <span>PRAE for Leukemia Research</span>
                        </Link>
                        <Link to="/programs" className="dd-link head">
                          <div className="dd-img-wrapper">
                            <img src={Program5} alt="program" />
                          </div>
                          <span>Scholarships and Grants</span>
                        </Link>
                      </div>
                      <div className="dd-btn-grp dd-program">
                        <Link to="/programs" className="secondry-btn">
                          View All Programs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Additional Links */}
              <li>
                <Link to="/events" className="nav-dropdown-trigger ">
                  <span className="nav-link-item">Events</span>
                </Link>
              </li>
              <li>
                <Link to="/donors" className="nav-dropdown-trigger">
                  <span className="nav-link-item">Donors</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-dropdown-trigger">
                  <span className="nav-link-item">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Get Started Button */}
          <div className="btn-wrapper dmb">
            <Link to="/donate" className="primary-btn">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
