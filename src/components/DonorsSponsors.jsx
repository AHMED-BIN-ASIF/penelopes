import React from "react";
import Slider from "react-slick";
import "../css/DonorsSponsors.css";
import { sponsorsData } from "../assets/data/Data"; // Import sponsors data
import { Link } from "react-router-dom";

const DonorsSponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Speed of the sliding animation in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Continuous sliding without delay
    cssEase: "linear", // Smooth, linear sliding effect
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="donors-sponsors-section" id="donors-sponsors">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="pre-header">Our Support Squad</span>
          <h2 className="secondry-heading">Honoring Our Donors and Sponsors</h2>
          <p className="default-text">
            We are deeply grateful to our donors and sponsors who enable us to
            continue our mission. Their contributions and partnerships are the
            backbone of our success.
          </p>
        </div>
      </div>
        <Slider {...settings}>
          {sponsorsData.map((sponsor, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={sponsor.image}
                alt={sponsor.altText || `Sponsor Logo ${index + 1}`}
                className="sponsor-logo"
              />
            </div>
          ))}
        </Slider>
        <div className="btn-grp">
          <Link to="/donors" className="primary-btn">
            View all Sponsors
          </Link>
        </div>
    </section>
  );
};

export default DonorsSponsors;
