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
  ctaImg2,
  altText1 = "Front Image",
  altText2 = "Back Image",
  btnClass="primary-btn"
}) => {
  return (
    <section className={`cta-section ${ctaDirection}`}>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-col-img">
            <div className="cta-img-wrapper img-front">
              <img src={ctaImg1} alt={altText1} />
            </div>
          </div>
          <div className="cta-col-content">
            <h2 className="secondry-heading">{ctaHeading}</h2>
            <p className="default-text">{ctaParagraph}</p>
            {ctaParagraph2.length > 0 && (
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
