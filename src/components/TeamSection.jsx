import React from "react";
import "../css/TeamSection.css";
import Member1 from "../assets/images/hero.avif"; // Replace with team member images
import Member2 from "../assets/images/hero.jpg";
import Member3 from "../assets/images/hero.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image: Member1,
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Program Manager",
      image: Member2,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Volunteer Coordinator",
      image: Member3,
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Outreach Specialist",
      image: Member1,
    },
    {
      id: 5,
      name: "Our Team",
      role: "Volunteer Team",
      image: Member1,
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <span className="pre-header">Meet Our Team</span>
          <h2 className="secondry-heading">The Faces Behind Our Mission</h2>
          <p className="default-text">
            Dedicated and passionate individuals working tirelessly to make a
            difference.
          </p>
        </div>
        <div className="team-row">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                />
              </div>
              <div className="team-card-body">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
