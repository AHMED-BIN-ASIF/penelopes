import React from "react";
import "../css/BlogsEvents.css"; // Custom styling for blogs and events
import { Link } from "react-router-dom";
import { blogsData } from "../assets/data/Data";

const BlogsEvents = () => {
  // Filter blogs and events from the imported data
  const blogsEvents = blogsData.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.img,
    link: `/events/${item.slug}`, // Dynamic links using slugs
    date: item.date,
    type: "Blog", // Add type dynamically or from data if applicable
  }));

  return (
    <section id="blogs-events" className="blogs-events">
      <div className="container">
        <div className="header-row">
          <h2 className="secondry-heading">Latest Blogs and Upcoming Events</h2>
          <Link to="/blogs" className="primary-btn">View All</Link>
        </div>
        <div className="blogs-events-row">
          {blogsEvents.map((item, index) => (
            <Link to={item.link} className="blog-event-card" key={index}>
              <div className="blog-event-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="blog-event-img"
                />
              </div>
              <div className="blog-event-card-body">
                <span className="blog-event-date">
                  <strong>{item.type}</strong> | {item.date}
                </span>
                <h4 className="blog-event-title">{item.title}</h4>
                <p className="blog-event-description">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsEvents;
