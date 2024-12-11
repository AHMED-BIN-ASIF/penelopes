import React from "react";
import "../css/DonateSection.css";
import BgImage from "../assets/images/event-img.jpg"; // Replace with your background image path

const DonateSection = () => {
  return (
    <section
      className="donate-section"
      style={{ backgroundImage: `url(${BgImage})` }}
      id="donate"
    >
      <div className="donate-overlay">
        <div className="container">
          <h2 className="secondry-heading">Your Generosity Can Make a Difference</h2>
          <p className="donate-text">
            Together, we can bring hope and change lives. Every contribution,
            big or small, helps us in our mission to make a lasting impact.
          </p>
          <a href="/donate" className="donate-btn">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
