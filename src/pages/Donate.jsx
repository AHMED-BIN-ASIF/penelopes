import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../css/Donate.css";
import Hero from "../components/Hero";
// import DonateImage from "../assets/images/event-img.jpg"; // Suggested image

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    donationPurpose: "",
    donationAmount: "",
    address: "",
    city: "",
    country: "",
    additionalInfo: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    agreeTerms: false,
    receiveUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Your Donation Makes a Difference"
        subHeading="Be the Change You Want to See"
        detail="Together, we can create brighter futures and stronger communities. Every contribution counts and brings us closer to transforming lives. Start making an impact today!"
        linkText="Start Donating"
        linkHref="#donate-form"
        className="hero-donate"
        // imageUrl={DonateImage}
      />
      
      {/* Donation Form Section */}
      <section id="donate-form" className="donate">
        <div className="container-small">
          <div className="donate-form">
            <h2 className="secondary-heading">Donate Now</h2>
            <div className="input-fields">
              <div className="donate-row">
                
                {/* Left Column */}
                <div className="col">
                  <label>
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </label>
                  <label>
                    Mobile Number
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                    />
                  </label>
                  <label>
                    Address
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                    />
                  </label>
                  <label>
                    City
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                    />
                  </label>
                </div>

                {/* Right Column */}
                <div className="col">
                  <label>
                    Donation Purpose
                    <CustomSelect
                      name="donationPurpose"
                      value={formData.donationPurpose}
                      onChange={handleChange}
                      options={[
                        "Education",
                        "Medical Support",
                        "Disaster Relief",
                        "Community Development",
                      ]}
                      placeholder="Select Purpose"
                    />
                  </label>
                  <label>
                    Donation Amount ($)
                    <input
                      type="number"
                      name="donationAmount"
                      value={formData.donationAmount}
                      onChange={handleChange}
                      placeholder="Enter donation amount"
                    />
                  </label>
                  <label>
                    Additional Information
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Any message or details"
                    />
                  </label>
                  
                  {/* Checkbox Group */}
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={checkboxes.agreeTerms}
                        onChange={handleCheckboxChange}
                      />
                      <span>I agree to the Terms and Conditions.</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="receiveUpdates"
                        checked={checkboxes.receiveUpdates}
                        onChange={handleCheckboxChange}
                      />
                      <span>I would like to receive updates about the cause.</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button className="primary-btn donate-btn">Donate</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom Select Component
const CustomSelect = ({ name, value, onChange, options, placeholder }) => {
  return (
    <div className="custom-select-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="custom-select"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="custom-select-icon">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Donate;
