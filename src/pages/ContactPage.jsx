import React from "react";
import "../css/ContactPage.css"; // Custom CSS for the Contact Page
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import NewsletterSection from "../components/NewsletterSection";

const ContactPage = () => {
  const contacts = [
    {
      id: 1,
      icon: faMapMarkerAlt,
      title: "Our Location",
      description: "1234 Foundation Road, Hope City, Country 56789",
    },
    {
      id: 2,
      icon: faEnvelope,
      title: "Email Us",
      description: "contact@praefoundation.org",
    },
    {
      id: 3,
      icon: faPhone,
      title: "Call Us",
      description: "+1 234 567 890",
    },
  ];

  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="secondry-heading">Get in Touch</h2>
            <p className="default-text">
              Whether you have a question, want to get involved, or need our assistance, we're here to help. Reach out to us using the contact details below or visit us in person.
            </p>
          </div>
          <div className="contact-cards">
            {contacts.map((contact) => (
              <div key={contact.id} className="contact-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={contact.icon} className="contact-icon" />
                </div>
                <h4 className="contact-title">{contact.title}</h4>
                <p className="contact-description">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="secondry-heading white">Find Us on the Map</h2>
          <p className="default-text white">
            Visit our office at the location below or reach us through the contact details provided.
          </p>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345087716!2d144.95373631560846!3d-37.816279442021944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2s1234%20Foundation%20Road!5e0!3m2!1sen!2s!4v1699461083473!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </>
  );
};

export default ContactPage;
