import React from "react";
import Slider from "react-slick";
import "../css/DonorsSponsors.css";
import Sponsor1 from "../assets/images/brand.PNG";
import Sponsor2 from "../assets/images/sponsor-logo.jpg";
import Sponsor3 from "../assets/images/sponsor-logo.jpg";
import Sponsor4 from "../assets/images/sponsor-logo.jpg";
import Sponsor5 from "../assets/images/sponsor-logo.jpg";
import Sponsor6 from "../assets/images/sponsor-logo.jpg";
import { Link } from "react-router-dom";

const DonorsSponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Speed of the sliding animation in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Continuous sliding without delay
    cssEase: 'linear', // Smooth, linear sliding effect
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="donors-sponsors-section" id="donors-sponsors">
      <div className="container">
        <div className="section-header">
          <span className="pre-header">Our Support Network</span>
          <h2 className="secondry-heading">Honoring Our Donors & Sponsors</h2>
          <p className="default-text">
            We are deeply grateful to our donors and sponsors who enable us to continue our mission. Their contributions and partnerships are the backbone of our success.
          </p>
        </div>
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={Sponsor1} alt="Sponsor Logo 1" className="sponsor-logo" />
          </div>
          <div className="carousel-item">
            <img src={Sponsor2} alt="Sponsor Logo 2" className="sponsor-logo" />
          </div>
          <div className="carousel-item">
            <img src={Sponsor3} alt="Sponsor Logo 3" className="sponsor-logo" />
          </div>
          <div className="carousel-item">
            <img src={Sponsor4} alt="Sponsor Logo 4" className="sponsor-logo" />
          </div>
          <div className="carousel-item">
            <img src={Sponsor5} alt="Sponsor Logo 5" className="sponsor-logo" />
          </div>
          <div className="carousel-item">
            <img src={Sponsor6} alt="Sponsor Logo 6" className="sponsor-logo" />
          </div>
        </Slider>
        <div className="btn-grp">
        <Link to="/"  className="primary-btn">Become a Sponsor</Link>
        </div>
      </div>
    </section>
  );
};

export default DonorsSponsors;
