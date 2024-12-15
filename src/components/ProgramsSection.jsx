import React from "react";
import "../css/ProgramsSection.css"; // Use the same styling
import { Link } from "react-router-dom";
import Program1 from "../assets/images/awareness.jpg";
import Program2 from "../assets/images/fundraising.jpg";
import Program3 from "../assets/images/family-support.jpg";
import Program4 from "../assets/images/research.jpg";

const ProgramsSection = () => {
  // Services data for dynamic rendering
  const services = [
    {
      title: "Community Engagement & Awareness",
      description:
        "Building solidarity through events, campaigns, and advocacy to educate the public and bring communities together.",
      image: Program1,
      link: "/community-engagement",
    },
    {
      title: "Fundraising Initiatives",
      description:
        "Generating essential funds through branded merchandise, donation campaigns, and innovative fundraising events.",
      image: Program2,
      link: "/fundraising-initiatives",
    },
    {
      title: "Family Support Services",
      description:
        "Providing counseling, emotional support, and scholarships for survivors and their siblings to foster resilience.",
      image: Program3,
      link: "/family-support",
    },
    {
      title: "Advocacy for Research & Impact",
      description:
        "Driving progress in pediatric leukemia awareness, research, and long-term treatment advocacy.",
      image: Program4,
      link: "/advocacy-research",
    },
  ];

  return (
    <section id="programs" className="programs">
      <div className="container">
        <div  data-aos="fade-up"
     data-aos-duration="1000">
          <span className="pre-header">Empowering Families Through Support</span>
          <h2 className="secondry-heading">Our Programs and Services</h2>
          <p className="default-text">
            The Penelope Rae Foundation offers tailored programs to support
            families impacted by pediatric leukemia. From financial aid to
            emotional and educational support, we empower families with the
            resources and care they need during their journey. Together, we bring
            hope and resilience to the fight against leukemia.
          </p>
        </div>
        <div className="program-row" data-aos="fade-up"
     data-aos-duration="1500">
          {services.map((service, index) => (
            <Link to={service.link} className="program-card" key={index}>
              <div className="program-img-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="program-img"
                />
              </div>
              <div className="program-card-body">
                <h4 className="program-title">{service.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
