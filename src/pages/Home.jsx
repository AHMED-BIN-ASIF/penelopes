import React from "react";
import Slider from "react-slick";
import Hero from "../components/Hero";
import CtaSection from "../components/CtaSection";
import HeroImg1 from "../assets/images/hero.jpg";
import HeroImg2 from "../assets/images/hero.avif";
import HeroImg3 from "../assets/images/hero.jpg";
import CtaImg1 from "../assets/images/about-img.webp";
import EventImg from "../assets/images/event-img.jpg";
import ProgramsSection from "../components/ProgramsSection";
import NewsletterSection from "../components/NewsletterSection";
import DonorsSponsors from "../components/DonorsSponsors";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogsEvents from "../components/BlogsEvents";
import DonateSection from "../components/DonateSection";
import GallerySection from "../components/GallerySection";

const Home = () => {
  const Heroslides = [
    {
      title: "Supporting Families, Empowering Futures",
      subHeading: "Dedicated to Providing Comprehensive Care for Children with Leukemia",
      detail:
        "Discover how PRAE transforms lives through tailored programs, financial support, and advocacy, ensuring every child and family receive the care and hope they deserve.",
      linkText: "Learn More About Our Programs",
      imageUrl: HeroImg1,
    },
    {
      title: "Transforming Lives Through Compassion",
      subHeading: "Empowering Families to Overcome Challenges Together",
      detail:
        "Explore the support and resources we offer, making a difference for families navigating the toughest times.",
      linkText: "Get Involved Today",
      imageUrl: HeroImg2,

    },
    {
      title: "Advocacy That Drives Change",
      subHeading: "Fighting for Better Health Outcomes for Children",
      detail:
        "Join us in our mission to raise awareness and improve access to critical care for children in need.",
      linkText: "Read About Our Impact",
      imageUrl: HeroImg3,

    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return (
    <>
      <section>
        <Slider {...settings}>
          {Heroslides.map((slide, index) => (
            <Hero
              key={index}
              title={slide.title}
              subHeading={slide.subHeading}
              detail={slide.detail}
              linkText={slide.linkText}
              imageUrl={slide.imageUrl}
              className={`hero-${index}`}
              id={`hero-${index}`}
            />
          ))}
        </Slider>
      </section>
      <CtaSection
        ctaDirection="reverse light"
        ctaHeading="Our Purpose and Passion"
        ctaParagraph="PRAE is a beacon of hope for children diagnosed with acute leukemia and their families. Our purpose is to provide unwavering support, ensuring every child has access to resources that empower them on their road to recovery."
        ctaParagraph2="Through personalized support services, emotional and therapeutic resources, and financial aid, we alleviate the burdens faced by families navigating this challenging journey. Together, we stand for resilience, compassion, and a brighter future for every child in our care."
        // ctaListItems={ctaList}
        ctaButtonText="Explore Our Mission & Vision"
        ctaButtonUrl="/about"
        btnClass="primary-btn"
        ctaImg1={CtaImg1}
        altText1="Front Image"
      />
      <ProgramsSection/>
      <CtaSection
        ctaDirection=""
        ctaHeading="Join The Fight"
        ctaParagraph2="Be part of our mission by participating in our engaging events and fundraisers. From charity walks and educational seminars to family movie nights and community drives, every event brings us closer to providing critical support for children battling leukemia. Together, we can create memories, build awareness, and raise the much-needed funds to empower families on their journey to recovery."
        ctaButtonText="Donate to Support"
        ctaButtonUrl="/donate"
        btnClass="secondry-btn"
        ctaImg1={EventImg}
        altText1="Front Image"
      />
      <DonorsSponsors/>
      <DonateSection/>
      <BlogsEvents/>
      <TestimonialsSection/>
      <GallerySection />
      <NewsletterSection />
    </>
  );
};

export default Home;
