import React from "react";
import { sponsorsData } from "../assets/data/Data"; // Import your updated data
import "../css/DonorsSponsorsPage.css";

const DonorsSponsorsPage = () => {
  return (
    <>
      <section className="simple-hero dark">
        <div className="container">
          <div className="heading-section">
            <h1 >Our Donors and Sponsors</h1>
          </div>
        </div>
      </section>
      <section className="donors-sponsors">
        <div className="container">
          <div className="sponsors-grid">
            {sponsorsData.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <img
                  src={sponsor.image}
                  alt={sponsor.altText}
                  className="sponsor-image"
                />
                <h3 className="sponsor-name">{sponsor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DonorsSponsorsPage;
