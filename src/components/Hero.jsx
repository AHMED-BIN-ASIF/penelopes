// HeroSlide.js
import React from "react";
import "../css/Hero.css";
const Hero = ({id,  title, subHeading, detail, linkText, linkHref, className, imageUrl }) => {
  return (
    <div id={`${id}`}
      className={`banner ${className}`}
      style={{
        background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.859) 10%, rgba(0, 0, 0, 0.197) 100%), url(${imageUrl}) no-repeat center / cover`
      }}
    >
      <div className="container">
        <div className="banner-left">
          <h1>{title}</h1>
          <span className="sub-heading">{subHeading}</span>
          <p className="banner-detail">{detail}</p>
          <a href={linkHref} className="secondry-btn">
            {linkText}
          </a>                   
        </div>
      </div>
    </div>
  );
};
export default Hero;