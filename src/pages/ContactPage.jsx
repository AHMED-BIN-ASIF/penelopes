import React from "react";
import "../css/ContactPage.css"; // Custom CSS for the Contact Page
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import NewsletterSection from "../components/NewsletterSection";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const contacts = [
    {
      id: 1,
      icon: faMapMarkerAlt,
      title: "Our Location",
      description: "34 May St, Belleville NJ 07109",
      link: "https://maps.app.goo.gl/rEjsiAZRvdg5W2Dm6"
    },
    {
      id: 2,
      icon: faEnvelope,
      title: "Email Us",
      description: "hello@peneloperae.org",
      link: "mailto:hello@peneloperae.org"
    },
    {
      id: 3,
      icon: faPhone,
      title: "Call Us",
      description: "862-763-1267",
      link: "tel:862-763-1267"
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
              <Link to={contact.link} key={contact.id} className="contact-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={contact.icon} className="contact-icon" />
                </div>
                <h4 className="contact-title">{contact.title}</h4>
                <p className="contact-description">{contact.description}</p>
              </Link>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.2316807473912!2d-74.1655485!3d40.8009024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2559f56b74a0d%3A0x6661b2dd4dfb60eb!2s34%20May%20St%2C%20Belleville%2C%20NJ%2007109!5e0!3m2!1sen!2sus!4v1734377988486!5m2!1sen!2sus"
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
