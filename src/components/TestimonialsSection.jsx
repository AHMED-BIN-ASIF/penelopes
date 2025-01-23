import React from "react";
import Slider from "react-slick";
import "../css/TestimonialsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Client1 from "../assets/images/hero.jpg";
import Client2 from "../assets/images/hero.avif";
import Client3 from "../assets/images/hero.jpg";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Time between slides
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide for smaller screens
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Beneficiary",
      image: Client1,
      review:
        "The support I received from this foundation has changed my life. Their kindness and resources helped me through a very tough time.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Sponsor",
      image: Client2,
      review:
        "Partnering with this organization has been a rewarding experience. Their dedication to their cause is truly inspiring.",
    },
    {
      id: 3,
      name: "Emily Carter",
      role: "Client",
      image: Client3,
      review:
        "I'm so grateful for the help and care provided by this amazing team. Their efforts have made a huge impact on my family.",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="pre-header">What People Say</span>
          <h2 className="secondry-heading">Testimonials & Reviews</h2>
          <p className="default-text">
            Hear from the people who have experienced our mission firsthand—clients, sponsors, and partners.
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-card">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="testimonial-quote-icon"
                />
                <blockquote className="testimonial-review">
                  "{testimonial.review}"
                </blockquote>
                <div className="testi-detail">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="testimonial-image"
                  />
                  <div className="testi-role-name">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
