import React, { useState } from "react";
import "../css/GallerySection.css";
import { FaTimes, FaChevronLeft, FaChevronRight, FaBullseye } from "react-icons/fa";

// Import images
import EventImage1 from "../assets/images/event-img.jpg";
import EventImage2 from "../assets/images/event-img.jpg";
import EventImage3 from "../assets/images/event-img.jpg";
import EventImage4 from "../assets/images/event-img.jpg";
import EventImage5 from "../assets/images/event-img.jpg";
import EventImage6 from "../assets/images/event-img.jpg";
import EventImage7 from "../assets/images/event-img.jpg";
import EventImage8 from "../assets/images/event-img.jpg";

const images = [
  { id: 1, src: EventImage1, alt: "Event 1" },
  { id: 2, src: EventImage2, alt: "Event 2" },
  { id: 3, src: EventImage3, alt: "Event 3" },
  { id: 4, src: EventImage4, alt: "Event 4" },
  { id: 5, src: EventImage5, alt: "Event 5" },
  { id: 6, src: EventImage6, alt: "Event 6" },
  { id: 7, src: EventImage7, alt: "Event 7" },
  { id: 8, src: EventImage8, alt: "Event 8" },
];

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (index) => {
    setCurrentImage(index);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(index)}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <FaBullseye className="icon" />
            </div>
          </div>
        ))}
      </div>

      {currentImage !== null && (
        <div className="modal">
          <button className="close-modal" onClick={closeModal}>
            <FaTimes />
          </button>
          <button className="prev-modal" onClick={prevImage}>
            <FaChevronLeft />
          </button>
          <img src={images[currentImage].src} alt={images[currentImage].alt} />
          <button className="next-modal" onClick={nextImage}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
