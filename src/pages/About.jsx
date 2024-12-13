import React from "react";
import Hero from "../components/Hero";
import HeroImg3 from "../assets/images/hero.jpg";
import NewsletterSection from "../components/NewsletterSection";
import DonorsSponsors from "../components/DonorsSponsors";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutTabs from "../components/AboutTabs";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <>
      <Hero
        title="Empowering Change, One Life at a Time"
        subHeading="Transforming Lives Through Compassion and Care"
        detail="Join us in our mission to raise awareness, provide vital resources, and improve access to life-saving care for children battling leukemia. Together, we can bring hope and healing to families in need."
        linkText="Read About Our Impact"
        imageUrl={HeroImg3}
        id={`About-Hero`}
      />
      <AboutTabs />
      <TeamSection />
      <DonorsSponsors />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default About;
