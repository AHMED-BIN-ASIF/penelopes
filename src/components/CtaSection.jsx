import React from "react";
import "../css/CtaSection.css";

const CtaSection = ({
  ctaDirection = "",
  ctaHeading,
  ctaParagraph,
  ctaParagraph2,
  ctaListItems = [],
  ctaButtonText,
  ctaButtonUrl,
  ctaImg1,
  altText1 = "Front Image",
  btnClass = "primary-btn"
}) => {
  // Determine AOS animations based on ctaDirection
  const isReverse = ctaDirection.includes("reverse");
  const imgAos = isReverse ? "fade-left" : "fade-right";
  const contentAos = isReverse ? "fade-right" : "fade-left";

  return (
    <section className={`cta-section ${ctaDirection}`}>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-col-img" data-aos={imgAos} data-aos-duration="800">
            <div className="cta-img-wrapper img-front">
              <img src={ctaImg1} alt={altText1} />
            </div>
          </div>
          <div className="cta-col-content" data-aos={contentAos} data-aos-duration="1200">
            <h2 className="secondry-heading">{ctaHeading}</h2>
            <p className="default-text">{ctaParagraph}</p>
            {ctaParagraph2?.length > 0 && (
              <p className="default-text">{ctaParagraph2}</p>
            )}
            {/* Conditional rendering of the list */}
            {ctaListItems.length > 0 && (
              <ul className="cta-content-list">
                {ctaListItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <a className={`${btnClass}`} href={ctaButtonUrl}>
              {ctaButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
