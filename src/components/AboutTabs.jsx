import React, { useState, useEffect } from "react";
import "../css/AboutTabs.css"; // Optional: Add CSS for styling
import CtaSection from "./CtaSection";
import EventImg from "../assets/images/event-img.jpg";
import ProgramImage from "../assets/images/cancer.jpg";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "mission", "impact", "vision"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 6500); // Change tab every 6 seconds

    return () => clearInterval(interval);
  },); // Add tabs to the dependency array

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Manually change active tab
  };

  return (
    <div className="about-tabs">
      {/* Tab Headers */}
      <div className="container">
        <div className="tab-header-wrapper">
          <div className="tab-headers">
            <button
              className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => handleTabClick("overview")}
            >
              <span>About Us</span>
            </button>
            <button
              className={`tab-button ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => handleTabClick("mission")}
            >
              <span>Our Mission</span>
            </button>
            <button
              className={`tab-button ${activeTab === "impact" ? "active" : ""}`}
              onClick={() => handleTabClick("impact")}
            >
              <span>Our Impact</span>
            </button>
            <button
              className={`tab-button ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => handleTabClick("vision")}
            >
              <span>Vision & Values</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <button
          className={`tab-button mb-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => handleTabClick("overview")}
        >
          <span>About Us</span>
        </button>
        {activeTab === "overview" && (
          <div className="tab-pane">
            <CtaSection
              ctaDirection="light reverse"
              ctaHeading="About Us"
              ctaParagraph2="At PRAE, we are committed to improving the lives of children with leukemia and their families. With a dedicated team, impactful programs, and unwavering passion, we strive to provide support, hope, and resources to those who need it most."
              ctaButtonText="Learn More About Our Story"
              ctaButtonUrl="/about-us"
              btnClass="primary-btn"
              ctaImg1={EventImg}
              altText1="Collaborative team brainstorming solutions"
              altText2="Collaborative team discussing plans"
            />
          </div>
        )}
        <button
          className={`tab-button mb-btn ${activeTab === "mission" ? "active" : ""}`}
          onClick={() => handleTabClick("mission")}
        >
          <span>Our Mission</span>
        </button>
        {activeTab === "mission" && (
          <div className="tab-pane">
            <CtaSection
              ctaDirection="light reverse"
              ctaHeading="Our Mission"
              ctaParagraph2="Our mission is to ensure every child with leukemia has access to the care they deserve. By offering financial aid, raising awareness, and advocating for better healthcare systems, we aim to create a brighter, healthier future for these children."
              ctaButtonText="Discover Our Goals"
              ctaButtonUrl="/mission"
              btnClass="primary-btn"
              ctaImg1={ProgramImage}
              altText1="Children smiling in a park"
              altText2="Caregivers and volunteers with children"
            />
          </div>
        )}
        <button
          className={`tab-button mb-btn ${activeTab === "impact" ? "active" : ""}`}
          onClick={() => handleTabClick("impact")}
        >
          <span>Our Impact</span>
        </button>
        {activeTab === "impact" && (
          <div className="tab-pane">
            <CtaSection
              ctaDirection="light reverse"
              ctaHeading="Our Impact"
              ctaParagraph2="From financial support to families to advocacy at the national level, our efforts have reached hundreds of families and raised significant awareness about childhood leukemia. Together, we are making measurable progress toward a future free of childhood cancer."
              ctaButtonText="See Our Results"
              ctaButtonUrl="/impact"
              btnClass="primary-btn"
              ctaImg1={EventImg}
              altText1="Event photo with attendees"
              altText2="Map showing statistics"
            />
          </div>
        )}
        <button
          className={`tab-button mb-btn ${activeTab === "vision" ? "active" : ""}`}
          onClick={() => handleTabClick("vision")}
        >
          <span>Vision & Values</span>
        </button>
        {activeTab === "vision" && (
          <div className="tab-pane">
            <CtaSection
              ctaDirection="light reverse"
              ctaHeading="Vision & Values"
              ctaParagraph2="Guided by empathy, integrity, and a commitment to excellence, our vision is to ensure every child with leukemia can thrive. We value inclusivity, transparency, and relentless dedication to our mission."
              ctaButtonText="Learn About Our Values"
              ctaButtonUrl="/vision"
              btnClass="primary-btn"
              ctaImg1={EventImg}
              altText1="Hands holding a glowing light"
              altText2="Symbol of hope and unity"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutTabs;
