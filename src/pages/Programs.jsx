import React from "react";
import CtaSection from "../components/CtaSection";
import CtaImg1 from "../assets/images/hero.avif"; // Example image for Financial Assistance
import CtaImg2 from "../assets/images/hero.jpg"; // Example image for Counseling
import CtaImg3 from "../assets/images/event-img.jpg"; // Example image for Education
import CtaImg4 from "../assets/images/support-img.webp"; // Example image for Community Outreach
import NewsletterSection from "../components/NewsletterSection";
import DonorsSponsors from "../components/DonorsSponsors";
import TestimonialsSection from "../components/TestimonialsSection";
import DonateSection from "../components/DonateSection";

const Programs = () => {
  return (
    <>
    <section className="simple-hero dark">
      <div className="container">
        <h1 className="">Our Programs</h1>
        <p className="default-text">
          At PRAE, we are committed to offering a holistic approach to support children battling leukemia and their families. Our tailored programs aim to meet every need—financial, emotional, educational, and community-driven. Learn more about the initiatives that make a difference every day.
        </p>
      </div>
    </section>

    {/* Financial Assistance Program */}
    <CtaSection
      ctaDirection="reverse light"
      ctaHeading="Financial Assistance Program"
      ctaParagraph="Medical expenses for leukemia treatment can be overwhelming, leaving families in financial distress. Our Financial Assistance Program provides direct aid to families, helping them cover critical expenses such as hospital bills, medication, and therapy sessions."
      ctaParagraph2="By removing financial barriers, we allow families to focus on what truly matters—their child’s health and well-being. This program has already touched hundreds of lives, ensuring no family faces this journey alone."
      ctaButtonText="Learn More"
      ctaButtonUrl="/programs/financial-assistance"
      btnClass="primary-btn"
      ctaImg1={CtaImg1}
      altText1="Financial Assistance Program"
    />

    {/* Counseling and Emotional Support */}
    <CtaSection
      ctaDirection=""
      ctaHeading="Counseling and Emotional Support"
      ctaParagraph="The emotional toll of a leukemia diagnosis is immense, not just for the child but for their entire family. Our Counseling and Emotional Support Program is designed to provide a safe space for healing and growth through professional counseling, therapy sessions, and peer support groups."
      ctaParagraph2="We believe in nurturing mental health as a cornerstone of recovery. From tailored therapy sessions to community-led emotional support, we stand with families every step of the way."
      ctaButtonText="Join a Support Group"
      ctaButtonUrl="/programs/counseling-support"
      btnClass="secondry-btn"
      ctaImg1={CtaImg2}
      altText1="Counseling and Emotional Support Program"
    />

    {/* Educational Support for Children */}
    <CtaSection
      ctaDirection="reverse light"
      ctaHeading="Educational Support for Children"
      ctaParagraph="Leukemia often disrupts a child's schooling, leaving gaps in their learning journey. Our Educational Support Program bridges these gaps by providing one-on-one tutoring, customized learning plans, and essential school supplies."
      ctaParagraph2="We work closely with schools and families to ensure children can continue their education, fostering a sense of normalcy and hope during treatment. Education is a right, not a privilege, and we strive to uphold this belief."
      ctaButtonText="Support Education"
      ctaButtonUrl="/programs/educational-support"
      btnClass="primary-btn"
      ctaImg1={CtaImg3}
      altText1="Educational Support Program"
    />

    {/* Community Outreach */}
    <CtaSection
      ctaDirection=""
      ctaHeading="Community Outreach and Awareness"
      ctaParagraph="Raising awareness about leukemia is a vital part of our mission. Through workshops, public events, and online campaigns, our Community Outreach Program educates the public about the disease and the ways they can contribute to creating change."
      ctaParagraph2="These efforts not only build a stronger support network but also break the stigma associated with serious illnesses. Together, we can build a community that supports families in their fight against leukemia and fosters compassion."
      ctaButtonText="Get Involved"
      ctaButtonUrl="/programs/community-outreach"
      btnClass="secondry-btn"
      ctaImg1={CtaImg4}
      altText1="Community Outreach Program"
    />

    {/* Additional Sections */}
    <DonateSection />
    <DonorsSponsors />
    <TestimonialsSection />
    <NewsletterSection />
  </>
  );
};

export default Programs;
