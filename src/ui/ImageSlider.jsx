import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false, // No navigation dots
    arrows: false, // No navigation arrows
    infinite: true, // Loop slides infinitely
    speed: 1000, // Transition speed in ms
    fade: true, // Enable fade effect
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Time between slides
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="dd-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="dd-slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
