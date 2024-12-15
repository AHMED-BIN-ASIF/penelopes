import React from "react";
import { eventsData, pastEventsData, blogsData } from "../assets/data/Data"; // Data source
import "../css/EventPage.css";
import CtaSection from "../components/CtaSection";
import CtaImg from "../assets/images/program-img.jpg";
import GallerySection from "../components/GallerySection";

const EventPage = () => {
  return (
    <div className="event-page">
      {/* Hero Section */}
      <section className="simple-hero dark">
      <div className="container">
        <h1 className="">Events & Fundraisers</h1>
        <p className="default-text">
        Discover upcoming events, past highlights, and insightful blogs. Join
        us in making a difference!
        </p>
      </div>
    </section>
      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="container">
          <h2 className="secondry-heading">Upcoming Events</h2>
          <div className="event-cards">
            {eventsData.map((event) => (
              <div key={event.id} className="event-card">
                <img
                  src={event.img}
                  alt={event.title}
                  className="event-card-img"
                />
                <div className="event-card-content">
                    <p className="event-date-location">{event.date}
                    </p>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date-location">
                    <strong>Location:</strong> {event.location || "Online"}
                  </p>
                  <p className="event-description">{event.description}</p>
                  {event.buttonUrl && (
                    <a
                      href={event.buttonUrl}
                      className="primary-btn"
                    >
                      {event.buttonText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Section */}
      <CtaSection
        ctaDirection="dark"
        ctaHeading="Why Join Our Events?"
        ctaParagraph1="Each event brings us closer to our goal of supporting leukemia research and helping families in need. Your participation makes a lasting impact."
        ctaParagraph2="Whether you're attending a fundraiser, reading our blogs, or volunteering your time, you're part of something bigger."
        ctaButtonText="Explore More Events"
        ctaButtonUrl="/events"
        btnClass="secondry-btn"
        ctaImg1={CtaImg}
        altText1="A group of people cheering at an event"
      />

      {/* Blogs Section */}
      <section className="blogs-section">
        <div className="container">
          <h2 className="secondry-heading">Our Blogs</h2>
          <div className="event-cards">
            {blogsData.map((blog) => (
              <div key={blog.id} className="event-card">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="event-card-img"
                />
                <div className="event-card-content">
                  <p className="event-date-location">
                    {blog.date}
                  </p>
                  <h3 className="event-title">{blog.title}</h3>
                  <p className="event-description">{blog.description}</p>
                  {blog.buttonUrl && (
                    <a
                      href={blog.buttonUrl}
                      className="primary-btn"
                    >
                      {blog.buttonText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events">
        <div className="container">
          <h2 className="secondry-heading">Past Events</h2>
          <div className="event-cards">
            {pastEventsData.map((event) => (
              <div key={event.id} className="event-card">
                <img
                  src={event.img}
                  alt={event.title}
                  className="event-card-img"
                />
                <div className="event-card-content">
                <p className="event-date-location"> {event.date}
                  </p>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date-location">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GallerySection/>
    </div>
  );
};

export default EventPage;
