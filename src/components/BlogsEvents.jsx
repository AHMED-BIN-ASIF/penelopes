import React from "react";
import "../css/BlogsEvents.css"; // Custom styling for blogs and events
import { Link } from "react-router-dom";
import Blog1 from "../assets/images/support-img.webp";
import Blog2 from "../assets/images/event-img.jpg";

const BlogsEvents = () => {
  // Blogs and events data for dynamic rendering
  const blogsEvents = [
    {
      title: "The Impact of Community Events",
      description:
        "Discover how community-driven events create a ripple effect of positivity and change.",
      image: Blog1,
      link: "/blogs/impact-of-community-events",
      date: "March 20, 2024",
      type: "Blog",
    },
    {
      title: "Upcoming Fundraiser: Together for Hope",
      description:
        "Join us for our annual fundraiser to empower families and foster resilience.",
      image: Blog2,
      link: "/events/together-for-hope",
      date: "April 15, 2024",
      type: "Event",
    },
    {
      title: "Stories of Courage and Strength",
      description:
        "Read heartwarming stories from families supported by our foundation.",
      image: Blog1,
      link: "/blogs/stories-of-courage",
      date: "February 25, 2024",
      type: "Blog",
    },
    {
      title: "Awareness Campaign: Make a Difference",
      description:
        "Learn how you can contribute to spreading awareness and inspiring change.",
      image: Blog2,
      link: "/events/make-a-difference",
      date: "May 10, 2024",
      type: "Blog",
    },
  ];

  return (
    <section id="blogs-events" className="blogs-events">
      <div className="container">
        <div className="header-row">
        <h2 className="secondry-heading">Latest Blogs and Upcoming Events</h2>
        <Link to="/" className="primary-btn">View All</Link>
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
                <span className="blog-event-date"><strong>{item.type}</strong> | {item.date}</span>
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
