import React, { useState } from "react";
import "../css/Header.css";
import DropdownMenu from "../ui/DropdownMenu";
import { Link } from "react-router-dom";
import ImageSlider from "../ui/ImageSlider";
import Brand from "../assets/images/brand.PNG";
import About1 from "../assets/images/hero.avif";
import About2 from "../assets/images/hero.jpg";
import About3 from "../assets/images/hero.avif";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const AboutImages = [About1, About2, About3];
  // const AboutMenuItems = [
  //   { label: 'Our Mission', link: '/about#mission' },
  //   { label: 'Our Team', link: '/about#team' },
  //   { label: 'Our Impact', link: '/about#impact' },
  //   { label: 'Vision & Values', link: '/about#vision' }
  // ];

  const programMenuItems = [
    { label: 'Services', link: '/services' },
    { label: 'Events', link: '/events' },
    { label: 'Volunteer Opportunities', link: '/volunteer' },
    { label: 'Donate', link: '/donate' },
    { label: 'Awareness Campaigns', link: '/awareness-campaigns' },
    { label: 'Partnerships', link: '/partnerships' }
  ];

  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/"><img src={Brand} alt="brand"/></Link>
        <div 
          className={`toggle-btn ${menuOpen ? "toggle-open" : ""}`} 
          onClick={toggleMenu}
        ></div>
        <nav className={menuOpen ? "nav nav-show" : "nav"}>
          <ul>
            {/* About Us Dropdown */}
            <li>
              <div className="nav-dropdown">
                <Link to="" className="nav-dropdown-trigger"><span className="nav-link-item">About Us</span></Link>
                <div className="dropdown-body">
                  <div className="container">
                    <div className="dd-inner">
                      <div className="dd-col-content">
                        <ul>
                          <li>
                            <Link to="/" className="dd-link head">About Us</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Mission</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Team</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Impact</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Vision & Values</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/" className="dd-link head">About Us</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Mission</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Team</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Impact</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Vision & Values</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/" className="dd-link head">About Us</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Mission</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Team</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Our Impact</Link>
                          </li>
                          <li>
                            <Link to="/" className="dd-link">Vision & Values</Link>
                          </li>
                        </ul>
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
              <DropdownMenu
                icon=""
                menuItems={programMenuItems}
                selectText="Our Programs"
                className="custom-dropdown"
              />
            </li>
            {/* Additional Links */}
            <li><Link to="/blogs" className="nav-link-item">Blogs</Link></li>
            <li><Link to="/faqs" className="nav-link-item">FAQs</Link></li>
            <li><Link to="/contact" className="nav-link-item">Contact</Link></li>
          </ul>
        </nav>
        {/* Get Started Button */}
        <div className="btn-wrapper dmb">
          <Link to="/configure" className="primary-btn">Donate Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
