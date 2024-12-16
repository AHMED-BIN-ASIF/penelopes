import React from "react";
import "../css/TeamSection.css";
import Member1 from "../assets/images/hero.avif"; // Replace with team member images
import Member2 from "../assets/images/hero.jpg";
import Member3 from "../assets/images/hero.jpg";
import Team from "../assets/images/team.webp";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Fallon Moran",
      role: "Founder and Chairperson ",
      image: Member1,
    },
    {
      id: 2,
      name: "Thomas Apicella",
      role: "Vice Chairperson ",
      image: Member2,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Treasurer",
      image: Member3,
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Corresponding Secretary",
      image: Member1,
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Recording Secretary",
      image: Member1,
    },
    {
      id: 6,
      name: "Michael Brown",
      role: "Event Director",
      image: Member1,
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Program Director",
      image: Member1,
    },
    {
      id: 8,
      name: "Michael Brown",
      role: "Marketing DIrector",
      image: Member1,
    },
    {
      id: 9,
      name: "Michael Brown",
      role: "Social Media Specialist",
      image: Member1,
    },
    {
      id: 10,
      name: "Our Team",
      role: "Volunteer Team",
      image: Team,
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
