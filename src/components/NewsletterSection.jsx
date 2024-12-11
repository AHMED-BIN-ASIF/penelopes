import React from "react";
import "../css/NewsletterSection.css";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-left">
            <span className="pre-header">Stay Connected, Spread Hope</span>
            <h2 className="secondry-heading">Join the Fight Against Pediatric Leukemia</h2>
          </div>
          <div className="newsletter-right">
            <p className="default-text">
              Subscribe to our newsletter to stay updated on our programs, events, and inspiring stories. Learn how your contributions are making a difference, and discover new ways to support families battling leukemia. Together, we can bring hope and healing.
            </p>
            <form className="form-signup" id="newsletter-form" name="newsletter-form" data-name="Newsletter Form" method="get" aria-label="Newsletter Form">
              <input
                className="input-field"
                name="email"
                id="email"
                placeholder="Your Email Address"
                type="email"
                required
              />
              <button className="primary-btn form-btn">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
